// Freehand canvas whiteboard.
//
// Strokes live on a fixed "paper" (FRAME_W × FRAME_H units), not in pixels of
// whatever size the canvas element happens to have. The paper is fitted into the
// element with ONE factor for both axes (`fit`, CSS px per paper unit), anchored
// at the top-left. Enter fullscreen, zoom the page or resize the window and the
// whole composition — strokes, notes, ruling — stays the same picture, only
// bigger or smaller.
//
// It used to store 0..1 fractions of the element instead. That stretched a
// drawing whenever the element's aspect ratio changed (small board vs fullscreen,
// or the same board at 100 % and 150 % page zoom, where the layout is narrower),
// and it scaled the strokes but not the notes lying on them.

type Point = { x: number; y: number };
type Mode = 'draw' | 'erase';
type Stroke = { points: Point[]; color: string; width: number; mode: Mode };

/** the paper, in paper units — the size of the board in a normal article column */
export const FRAME_W = 640;
export const FRAME_H = 360;

const STORAGE_VERSION = 2;

export class Whiteboard {
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;
	private strokes: Stroke[] = [];
	private current: Stroke | null = null;
	private color = '#1c1a17';
	private width = 4;
	private mode: Mode = 'draw';
	private onChange: () => void;

	// CSS pixels per paper unit at zoom 1 — recomputed on every resize
	private fit = 1;

	// Zoom / pan chosen by the user (Ctrl+wheel, middle-drag). `pan` is in paper
	// units (not pixels), so the view survives any change of the element's size:
	//   css position = (paper * zoom + pan) * fit
	private zoom = 1;
	private panX = 0;
	private panY = 0;

	// how far a pan is allowed to go: the paper must always keep at least this
	// fraction of itself in view, so a middle-click drag can't pan the drawing
	// away into empty space with no way to tell which direction to drag back
	private static readonly PAN_MARGIN = 0.12;

	// middle-click-drag panning state
	private panPointerId: number | null = null;
	private panStartClientX = 0;
	private panStartClientY = 0;
	private panStartX = 0;
	private panStartY = 0;

	// DOM overlay circle showing the pen/eraser's actual on-screen size at
	// the cursor position — canvas itself has no notion of a "brush cursor",
	// so this is a plain absolutely-positioned sibling element instead.
	// Requires canvas.parentElement to be position:relative (it already is,
	// for the same reason the floating notes below need it).
	private cursorEl: HTMLDivElement;

	constructor(canvas: HTMLCanvasElement, onChange: () => void = () => {}) {
		this.canvas = canvas;
		const ctx = canvas.getContext('2d');
		if (!ctx) throw new Error('2D canvas context unavailable');
		this.ctx = ctx;
		this.onChange = onChange;
		this.canvas.style.touchAction = 'none';

		this.cursorEl = document.createElement('div');
		this.cursorEl.className = 'whiteboard-cursor';
		this.cursorEl.style.display = 'none';
		this.canvas.parentElement?.appendChild(this.cursorEl);

		this.canvas.addEventListener('pointerdown', this.handlePointerDown);
		this.canvas.addEventListener('pointermove', this.handlePointerMove);
		this.canvas.addEventListener('pointerup', this.handlePointerUp);
		this.canvas.addEventListener('pointercancel', this.handlePointerUp);
		this.canvas.addEventListener('pointerenter', this.handlePointerEnter);
		this.canvas.addEventListener('pointerleave', this.handlePointerLeave);
		this.canvas.addEventListener('wheel', this.handleWheel, { passive: false });
	}

	setColor(color: string) {
		this.color = color;
	}

	setWidth(width: number) {
		this.width = width;
	}

	setMode(mode: Mode) {
		this.mode = mode;
	}

	clear() {
		this.strokes = [];
		this.redraw();
		this.onChange();
	}

	isEmpty() {
		return this.strokes.length === 0;
	}

	toJSON(): string {
		return JSON.stringify({ v: STORAGE_VERSION, strokes: this.strokes });
	}

	loadJSON(json: string) {
		try {
			const parsed = JSON.parse(json);
			if (Array.isArray(parsed)) {
				// the first version stored 0..1 fractions of the element — lay them onto the
				// paper, which is what a board of normal size showed anyway
				this.strokes = parsed.map((s) => ({
					mode: 'draw',
					...s,
					points: (s.points ?? []).map((p: Point) => ({ x: p.x * FRAME_W, y: p.y * FRAME_H })),
				}));
			} else if (parsed?.v === STORAGE_VERSION && Array.isArray(parsed.strokes)) {
				this.strokes = parsed.strokes.map((s: Stroke) => ({ ...s, mode: s.mode ?? 'draw' }));
			}
			this.redraw();
		} catch {
			// ignore corrupt/old-format storage
		}
	}

	// call after the canvas element's on-screen size changes (container resize,
	// entering/leaving fullscreen, page zoom…): re-maps the backing pixel buffer,
	// recomputes the fit and redraws — the drawing itself is untouched
	resize() {
		const rect = this.canvas.getBoundingClientRect();
		const dpr = window.devicePixelRatio || 1;
		this.canvas.width = Math.max(1, Math.round(rect.width * dpr));
		this.canvas.height = Math.max(1, Math.round(rect.height * dpr));
		if (rect.width > 0 && rect.height > 0) {
			this.fit = Math.min(rect.width / FRAME_W, rect.height / FRAME_H);
			// notes and the ruled paper follow the same factor (see global.css / MathScratchpad)
			this.canvas.parentElement?.style.setProperty('--wb-s', String(this.fit));
		}
		this.redraw();
	}

	// client (viewport) coordinates → paper units, undoing zoom and pan
	private toPaper(clientX: number, clientY: number): Point {
		const rect = this.canvas.getBoundingClientRect();
		return {
			x: ((clientX - rect.left) / this.fit - this.panX) / this.zoom,
			y: ((clientY - rect.top) / this.fit - this.panY) / this.zoom,
		};
	}

	// Keeps the pan from wandering so far that the paper disappears off-screen
	// entirely. Returns whether either axis had to be pulled back (i.e. the pan
	// was pushing past its limit) — used to flash the "can't go further" border
	// during an active drag.
	private clampPan(): boolean {
		const rect = this.canvas.getBoundingClientRect();
		const viewW = rect.width / this.fit;
		const viewH = rect.height / this.fit;
		const m = Whiteboard.PAN_MARGIN;
		const clamp = (v: number, a: number, b: number) => Math.min(Math.max(v, Math.min(a, b)), Math.max(a, b));
		const x = clamp(this.panX, FRAME_W * (m - this.zoom), viewW - FRAME_W * m);
		const y = clamp(this.panY, FRAME_H * (m - this.zoom), viewH - FRAME_H * m);
		const hit = x !== this.panX || y !== this.panY;
		this.panX = x;
		this.panY = y;
		return hit;
	}

	private setPanLimitIndicator(active: boolean) {
		this.canvas.parentElement?.classList.toggle('is-pan-limited', active);
	}

	private handleWheel = (e: WheelEvent) => {
		if (!(e.ctrlKey || e.metaKey)) return;
		e.preventDefault();
		const rect = this.canvas.getBoundingClientRect();
		// the paper point under the cursor, before the zoom changes
		const under = this.toPaper(e.clientX, e.clientY);

		const factor = Math.exp(-e.deltaY * 0.001);
		const zoom = Math.min(8, Math.max(0.5, this.zoom * factor));

		// re-pick the pan so that same paper point stays under the cursor
		this.panX = (e.clientX - rect.left) / this.fit - under.x * zoom;
		this.panY = (e.clientY - rect.top) / this.fit - under.y * zoom;
		this.zoom = zoom;
		this.clampPan();
		this.redraw();
	};

	private handlePointerDown = (e: PointerEvent) => {
		if (e.pointerType === 'mouse' && e.button === 1) {
			// middle-click-drag panning — preventDefault on pointerdown also
			// suppresses the browser's own middle-click autoscroll gesture
			e.preventDefault();
			this.panPointerId = e.pointerId;
			this.canvas.setPointerCapture(e.pointerId);
			this.panStartClientX = e.clientX;
			this.panStartClientY = e.clientY;
			this.panStartX = this.panX;
			this.panStartY = this.panY;
			this.cursorEl.style.display = 'none';
			return;
		}
		if (e.button !== undefined && e.button !== 0 && e.pointerType === 'mouse') return;
		this.canvas.setPointerCapture(e.pointerId);
		const width = this.mode === 'erase' ? this.width * 3 : this.width;
		this.current = { points: [this.toPaper(e.clientX, e.clientY)], color: this.color, width, mode: this.mode };
		this.strokes.push(this.current);
		// a click without a drag is a dot (or, with the eraser, a round hole) — show it now
		this.redraw();
	};

	private handlePointerMove = (e: PointerEvent) => {
		if (this.panPointerId === e.pointerId) {
			this.panX = this.panStartX + (e.clientX - this.panStartClientX) / this.fit;
			this.panY = this.panStartY + (e.clientY - this.panStartClientY) / this.fit;
			this.setPanLimitIndicator(this.clampPan());
			this.redraw();
			return;
		}
		this.updateCursorIndicator(e);
		if (!this.current) return;
		this.current.points.push(this.toPaper(e.clientX, e.clientY));
		this.redraw();
	};

	private handlePointerUp = (e: PointerEvent) => {
		if (this.panPointerId === e.pointerId) {
			this.panPointerId = null;
			this.setPanLimitIndicator(false);
			return;
		}
		if (!this.current) return;
		this.current = null;
		this.onChange();
	};

	private handlePointerEnter = (e: PointerEvent) => {
		this.cursorEl.style.display = 'block';
		this.updateCursorIndicator(e);
	};

	private handlePointerLeave = () => {
		this.cursorEl.style.display = 'none';
	};

	// diameter/position of the brush-size indicator circle, in CSS pixels — the
	// stroke's width is in paper units, so its on-screen thickness is
	// width * fit * zoom. That is the circle's diameter, no more: it used to be
	// twice that, so the eraser's ring showed a hole twice as big as the one it cut.
	private updateCursorIndicator(e: PointerEvent) {
		const rect = this.canvas.getBoundingClientRect();
		const effectiveWidth = this.mode === 'erase' ? this.width * 3 : this.width;
		const diameter = Math.max(6, effectiveWidth * this.fit * this.zoom);
		this.cursorEl.style.width = `${diameter}px`;
		this.cursorEl.style.height = `${diameter}px`;
		this.cursorEl.style.left = `${e.clientX - rect.left}px`;
		this.cursorEl.style.top = `${e.clientY - rect.top}px`;
		if (this.mode === 'erase') {
			this.cursorEl.classList.add('is-erase');
			this.cursorEl.style.borderColor = '';
		} else {
			this.cursorEl.classList.remove('is-erase');
			this.cursorEl.style.borderColor = this.color;
		}
	}

	private redraw() {
		const { ctx, canvas } = this;
		const dpr = window.devicePixelRatio || 1;
		// clear in identity space (the whole physical buffer), then draw in paper
		// units under one transform: fit + zoom + pan. The transform also scales
		// lineWidth, so a stroke keeps its thickness relative to the drawing.
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		const k = this.fit * this.zoom * dpr;
		ctx.setTransform(k, 0, 0, k, this.panX * this.fit * dpr, this.panY * this.fit * dpr);
		ctx.lineCap = 'round';
		ctx.lineJoin = 'round';
		for (const stroke of this.strokes) {
			if (stroke.points.length === 0) continue;
			ctx.globalCompositeOperation = stroke.mode === 'erase' ? 'destination-out' : 'source-over';
			if (stroke.points.length === 1) {
				// a stroke that never moved: a dot as wide as the line would have been
				const [p] = stroke.points;
				ctx.fillStyle = stroke.color;
				ctx.beginPath();
				ctx.arc(p.x, p.y, stroke.width / 2, 0, Math.PI * 2);
				ctx.fill();
				continue;
			}
			ctx.strokeStyle = stroke.color;
			ctx.lineWidth = stroke.width;
			ctx.beginPath();
			const [first, ...rest] = stroke.points;
			ctx.moveTo(first.x, first.y);
			for (const p of rest) ctx.lineTo(p.x, p.y);
			ctx.stroke();
		}
		ctx.globalCompositeOperation = 'source-over';
	}
}

// the note's resize grip: two short diagonal lines in its bottom-right corner
const NOTE_GRIP =
	'<svg viewBox="0 0 12 12" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M11 3.5 3.5 11"/><path d="M11 7.5 7.5 11"/></svg>';
/** how far the user may scale a note (1 = as it appears) */
const NOTE_MIN_K = 0.35;
const NOTE_MAX_K = 3;

// A small draggable "sticky note" showing an exercise's statement, floated over
// the whiteboard canvas so it stays visible while working the problem.
// `content` is either plain text or already-built markup (a copy of the
// statement as typeset in the article, so formulas stay formulas).
// `container` must be position:relative (or similar) for the absolute
// positioning here to be relative to it, not the page.
//
// Like the strokes, a note sits on the paper: its position is stored in paper
// units (--wx / --wy) and global.css turns them into pixels with the board's
// --wb-s, so the note keeps its place on the drawing whatever the board's size.
//
// The grip in the note's bottom-right corner resizes it: drag it towards or away from the
// note's top-left corner and the whole note (text and formulas) scales with it, continuously —
// for when the statement covers the part of the paper one wants to work on. The factor is the
// `--note-k` custom property (global.css multiplies it into the note's scale); a double click
// on the grip puts the note back to its own size.
export function createFloatingNote(container: HTMLElement, content: string | Node) {
	const existingCount = container.querySelectorAll('.whiteboard-note').length;
	const boardScale = () => parseFloat(container.style.getPropertyValue('--wb-s')) || 1;

	const note = document.createElement('div');
	note.className = 'whiteboard-note';
	note.style.setProperty('--wx', String(12 + (existingCount % 6) * 20));
	note.style.setProperty('--wy', String(12 + (existingCount % 6) * 20));

	const closeBtn = document.createElement('button');
	closeBtn.type = 'button';
	closeBtn.className = 'whiteboard-note-close';
	closeBtn.textContent = '×';
	closeBtn.setAttribute('aria-label', 'Zavřít');

	const body = document.createElement('div');
	body.className = 'whiteboard-note-body';
	if (typeof content === 'string') {
		body.classList.add('is-plain');
		body.textContent = content;
	} else {
		body.append(content);
	}

	const grip = document.createElement('div');
	grip.className = 'whiteboard-note-resize';
	grip.innerHTML = NOTE_GRIP;
	grip.title = 'Táhni pro změnu velikosti zadání (dvojklik = původní velikost)';

	note.append(closeBtn, body, grip);
	container.appendChild(note);

	closeBtn.addEventListener('click', () => note.remove());

	// resizing: the corner follows the pointer along the diagonal from the note's top-left
	let resizing = false;
	let originX = 0;
	let originY = 0;
	let startDist = 1;
	let startK = 1;
	grip.addEventListener('pointerdown', (e) => {
		if (e.pointerType === 'mouse' && e.button !== 0) return;
		e.stopPropagation(); // not the start of a drag of the whole note
		e.preventDefault();
		grip.setPointerCapture(e.pointerId);
		const rect = note.getBoundingClientRect();
		originX = rect.left;
		originY = rect.top;
		startDist = Math.max(1, Math.hypot(e.clientX - originX, e.clientY - originY));
		startK = parseFloat(note.style.getPropertyValue('--note-k')) || 1;
		resizing = true;
		note.classList.add('is-resizing');
	});
	grip.addEventListener('pointermove', (e) => {
		if (!resizing) return;
		const k = (startK * Math.hypot(e.clientX - originX, e.clientY - originY)) / startDist;
		note.style.setProperty('--note-k', String(Math.min(NOTE_MAX_K, Math.max(NOTE_MIN_K, k))));
	});
	const endResize = () => {
		resizing = false;
		note.classList.remove('is-resizing');
	};
	grip.addEventListener('pointerup', endResize);
	grip.addEventListener('pointercancel', endResize);
	grip.addEventListener('dblclick', () => note.style.removeProperty('--note-k'));

	let dragging = false;
	let startX = 0;
	let startY = 0;
	let startWx = 0;
	let startWy = 0;

	note.addEventListener('pointerdown', (e) => {
		// a press on one of the note's buttons is a click, not the start of a drag
		if ((e.target as Element).closest('button')) return;
		dragging = true;
		note.setPointerCapture(e.pointerId);
		startX = e.clientX;
		startY = e.clientY;
		startWx = parseFloat(note.style.getPropertyValue('--wx')) || 0;
		startWy = parseFloat(note.style.getPropertyValue('--wy')) || 0;
		note.classList.add('is-dragging');
	});
	note.addEventListener('pointermove', (e) => {
		if (!dragging) return;
		const s = boardScale();
		note.style.setProperty('--wx', String(startWx + (e.clientX - startX) / s));
		note.style.setProperty('--wy', String(startWy + (e.clientY - startY) / s));
	});
	const endDrag = () => {
		dragging = false;
		note.classList.remove('is-dragging');
	};
	note.addEventListener('pointerup', endDrag);
	note.addEventListener('pointercancel', endDrag);

	return note;
}
