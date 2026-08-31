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

	constructor(canvas: HTMLCanvasElement, onChange: () => void = () => {}) {
		this.canvas = canvas;
		const ctx = canvas.getContext('2d');
		if (!ctx) throw new Error('2D canvas context unavailable');
		this.ctx = ctx;
		this.onChange = onChange;
		this.canvas.style.touchAction = 'none';

		this.canvas.addEventListener('pointerdown', this.handlePointerDown);
		this.canvas.addEventListener('pointermove', this.handlePointerMove);
		this.canvas.addEventListener('pointerup', this.handlePointerUp);
		this.canvas.addEventListener('pointercancel', this.handlePointerUp);
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

	private toRelative(clientX: number, clientY: number): Point {
		const rect = this.canvas.getBoundingClientRect();
		return {
			x: rect.width ? (clientX - rect.left) / rect.width : 0,
			y: rect.height ? (clientY - rect.top) / rect.height : 0,
		};
	}

	private handlePointerDown = (e: PointerEvent) => {
		if (e.button !== undefined && e.button !== 0 && e.pointerType === 'mouse') return;
		this.canvas.setPointerCapture(e.pointerId);
		const width = this.mode === 'erase' ? this.width * 3 : this.width;
		this.current = { points: [this.toRelative(e.clientX, e.clientY)], color: this.color, width, mode: this.mode };
		this.strokes.push(this.current);
	};

	private handlePointerMove = (e: PointerEvent) => {
		if (!this.current) return;
		this.current.points.push(this.toRelative(e.clientX, e.clientY));
		this.redraw();
	};

	private handlePointerUp = () => {
		if (!this.current) return;
		this.current = null;
		this.onChange();
	};

	private redraw() {
		const { ctx, canvas } = this;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
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
