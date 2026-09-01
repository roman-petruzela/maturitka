// Freehand canvas whiteboard: pointer-drawn strokes stored in *relative*
// (0..1) coordinates so the drawing survives a resize (e.g. entering
// fullscreen) without distortion — we just redraw scaled to the new size.

type Point = { x: number; y: number };
type Mode = 'draw' | 'erase';
type Stroke = { points: Point[]; color: string; width: number; mode: Mode };

export class Whiteboard {
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;
	private strokes: Stroke[] = [];
	private current: Stroke | null = null;
	private color = '#1c1a17';
	private width = 4;
	private mode: Mode = 'draw';
	private onChange: () => void;

	// Zoom/pan view state. `scale` is a plain dimensionless zoom factor.
	// `panXRel`/`panYRel` are the pan offset expressed as a *fraction of the
	// canvas's own physical pixel size* (same trick as stroke points being
	// stored in 0..1 relative coordinates) so the view survives a resize
	// (e.g. entering/leaving fullscreen) without jumping — an absolute pixel
	// offset would otherwise point at the wrong place once canvas.width /
	// canvas.height change.
	private scale = 1;
	private panXRel = 0;
	private panYRel = 0;

	// how far a pan is allowed to go: the drawable [0,1] world square must
	// always keep at least this fraction of the viewport showing a sliver of
	// it, so a middle-click drag can't pan the drawing away into empty space
	// with no way to tell which direction to drag back
	private static readonly PAN_MARGIN = 0.12;

	// middle-click-drag panning state
	private panPointerId: number | null = null;
	private panStartClientX = 0;
	private panStartClientY = 0;
	private panStartPanXRel = 0;
	private panStartPanYRel = 0;

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
		return JSON.stringify(this.strokes);
	}

	loadJSON(json: string) {
		try {
			const parsed = JSON.parse(json);
			if (Array.isArray(parsed)) this.strokes = parsed.map((s) => ({ mode: 'draw', ...s }));
			this.redraw();
		} catch {
			// ignore corrupt/old-format storage
		}
	}

	// call after the canvas element's on-screen size changes (container
	// resize, entering/leaving fullscreen...) to re-map the backing pixel
	// buffer and redraw at the new size without losing the drawing
	resize() {
		const rect = this.canvas.getBoundingClientRect();
		const dpr = window.devicePixelRatio || 1;
		this.canvas.width = Math.max(1, Math.round(rect.width * dpr));
		this.canvas.height = Math.max(1, Math.round(rect.height * dpr));
		this.redraw();
	}

	// Maps a client (viewport) coordinate to a physical canvas-pixel
	// coordinate, undoing only the CSS-size<->backing-buffer ratio — used by
	// both toRelative() and the wheel handler, which each then apply (or
	// invert) the zoom/pan transform on top.
	private toPhysical(clientX: number, clientY: number): Point {
		const rect = this.canvas.getBoundingClientRect();
		const ratioX = rect.width ? this.canvas.width / rect.width : 1;
		const ratioY = rect.height ? this.canvas.height / rect.height : 1;
		return { x: (clientX - rect.left) * ratioX, y: (clientY - rect.top) * ratioY };
	}

	private toRelative(clientX: number, clientY: number): Point {
		const { canvas } = this;
		const phys = this.toPhysical(clientX, clientY);
		const panXPx = this.panXRel * canvas.width;
		const panYPx = this.panYRel * canvas.height;
		const worldX = (phys.x - panXPx) / this.scale;
		const worldY = (phys.y - panYPx) / this.scale;
		return {
			x: canvas.width ? worldX / canvas.width : 0,
			y: canvas.height ? worldY / canvas.height : 0,
		};
	}

	// Keeps panXRel/panYRel from wandering so far that the drawable square
	// disappears off-screen entirely. Returns whether either axis had to be
	// pulled back (i.e. the pan was pushing past its limit) — used to flash
	// the "can't go further" border during an active drag.
	private clampPan(): boolean {
		const m = Whiteboard.PAN_MARGIN;
		const min = m - this.scale;
		const max = 1 - m;
		const clampedX = Math.min(max, Math.max(min, this.panXRel));
		const clampedY = Math.min(max, Math.max(min, this.panYRel));
		const hit = clampedX !== this.panXRel || clampedY !== this.panYRel;
		this.panXRel = clampedX;
		this.panYRel = clampedY;
		return hit;
	}

	private setPanLimitIndicator(active: boolean) {
		this.canvas.parentElement?.classList.toggle('is-pan-limited', active);
	}

	private handleWheel = (e: WheelEvent) => {
		if (!(e.ctrlKey || e.metaKey)) return;
		e.preventDefault();
		const { canvas } = this;
		const phys = this.toPhysical(e.clientX, e.clientY);

		// world-space point currently under the cursor, before the zoom change
		const panXPx = this.panXRel * canvas.width;
		const panYPx = this.panYRel * canvas.height;
		const worldX = (phys.x - panXPx) / this.scale;
		const worldY = (phys.y - panYPx) / this.scale;

		const factor = Math.exp(-e.deltaY * 0.001);
		const newScale = Math.min(8, Math.max(0.5, this.scale * factor));

		// re-pick pan so that same world point stays under the cursor
		const newPanXPx = phys.x - worldX * newScale;
		const newPanYPx = phys.y - worldY * newScale;

		this.scale = newScale;
		this.panXRel = canvas.width ? newPanXPx / canvas.width : 0;
		this.panYRel = canvas.height ? newPanYPx / canvas.height : 0;
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
			this.panStartPanXRel = this.panXRel;
			this.panStartPanYRel = this.panYRel;
			this.cursorEl.style.display = 'none';
			return;
		}
		if (e.button !== undefined && e.button !== 0 && e.pointerType === 'mouse') return;
		this.canvas.setPointerCapture(e.pointerId);
		const width = this.mode === 'erase' ? this.width * 3 : this.width;
		this.current = { points: [this.toRelative(e.clientX, e.clientY)], color: this.color, width, mode: this.mode };
		this.strokes.push(this.current);
	};

	private handlePointerMove = (e: PointerEvent) => {
		if (this.panPointerId === e.pointerId) {
			const rect = this.canvas.getBoundingClientRect();
			this.panXRel = this.panStartPanXRel + (e.clientX - this.panStartClientX) / (rect.width || 1);
			this.panYRel = this.panStartPanYRel + (e.clientY - this.panStartClientY) / (rect.height || 1);
			this.setPanLimitIndicator(this.clampPan());
			this.redraw();
			return;
		}
		this.updateCursorIndicator(e);
		if (!this.current) return;
		this.current.points.push(this.toRelative(e.clientX, e.clientY));
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

	// diameter/position of the brush-size indicator circle, in CSS pixels —
	// matches the actual stroke's apparent on-screen size: canvas lineWidth
	// is in physical pixels (width * dpr) and additionally gets scaled by
	// the current zoom transform, which nets out to (width * scale) CSS px
	private updateCursorIndicator(e: PointerEvent) {
		const rect = this.canvas.getBoundingClientRect();
		const effectiveWidth = this.mode === 'erase' ? this.width * 3 : this.width;
		const diameter = Math.max(6, effectiveWidth * this.scale * 2);
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
		// clear in identity space (full physical buffer), then switch to the
		// zoom/pan transform for the actual drawing below — stroke coordinates
		// stay exactly as before (relative 0..1 * canvas.width/height), the
		// transform matrix does the zoom/pan on top, including scaling
		// lineWidth automatically (so pen strokes keep a consistent apparent
		// thickness relative to the drawing, not the viewport)
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.setTransform(this.scale, 0, 0, this.scale, this.panXRel * canvas.width, this.panYRel * canvas.height);
		ctx.lineCap = 'round';
		ctx.lineJoin = 'round';
		for (const stroke of this.strokes) {
			if (stroke.points.length < 2) continue;
			ctx.globalCompositeOperation = stroke.mode === 'erase' ? 'destination-out' : 'source-over';
			ctx.strokeStyle = stroke.color;
			ctx.lineWidth = stroke.width * (window.devicePixelRatio || 1);
			ctx.beginPath();
			const [first, ...rest] = stroke.points;
			ctx.moveTo(first.x * canvas.width, first.y * canvas.height);
			for (const p of rest) ctx.lineTo(p.x * canvas.width, p.y * canvas.height);
			ctx.stroke();
		}
		ctx.globalCompositeOperation = 'source-over';
	}
}

// A small draggable "sticky note" showing an exercise's text, floated over
// the whiteboard canvas so it stays visible while working the problem.
// `container` must be position:relative (or similar) for the absolute
// positioning here to be relative to it, not the page.
export function createFloatingNote(container: HTMLElement, text: string) {
	const existingCount = container.querySelectorAll('.whiteboard-note').length;

	const note = document.createElement('div');
	note.className = 'whiteboard-note';
	note.style.left = `${12 + (existingCount % 6) * 20}px`;
	note.style.top = `${12 + (existingCount % 6) * 20}px`;

	const closeBtn = document.createElement('button');
	closeBtn.type = 'button';
	closeBtn.className = 'whiteboard-note-close';
	closeBtn.textContent = '×';
	closeBtn.setAttribute('aria-label', 'Zavřít');

	const body = document.createElement('div');
	body.className = 'whiteboard-note-body';
	body.textContent = text;

	note.append(closeBtn, body);
	container.appendChild(note);

	closeBtn.addEventListener('click', () => note.remove());

	let dragging = false;
	let startX = 0;
	let startY = 0;
	let startLeft = 0;
	let startTop = 0;

	note.addEventListener('pointerdown', (e) => {
		if (e.target === closeBtn) return;
		dragging = true;
		note.setPointerCapture(e.pointerId);
		startX = e.clientX;
		startY = e.clientY;
		startLeft = note.offsetLeft;
		startTop = note.offsetTop;
		note.classList.add('is-dragging');
	});
	note.addEventListener('pointermove', (e) => {
		if (!dragging) return;
		note.style.left = `${startLeft + (e.clientX - startX)}px`;
		note.style.top = `${startTop + (e.clientY - startY)}px`;
	});
	const endDrag = () => {
		dragging = false;
		note.classList.remove('is-dragging');
	};
	note.addEventListener('pointerup', endDrag);
	note.addEventListener('pointercancel', endDrag);

	return note;
}
