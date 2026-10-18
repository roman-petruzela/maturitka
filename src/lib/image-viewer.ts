// Opens a picture of an article in a full-screen viewer: a click (or Enter on the focused picture)
// shows it fitted to the screen on a paper-coloured card, and there it can be zoomed — the wheel
// zooms to the cursor, two fingers pinch, a double click toggles between the fitted size and a close
// look, the + / − buttons and keys step — and moved by dragging. Escape, the × button or a click
// beside the picture closes it and gives the focus back to the picture in the text.
//
// Only the plain pictures restored from the sources (`article.topic img:not([class])`) take part:
// portraits and the build-time diagrams have classes of their own, a picture inside a link keeps
// the link, and one inside an unrevealed spoiler stays hidden.

const SELECTOR = 'article.topic img:not([class])';
const STEP = 1.5;
const MAX_ZOOM = 8; // relative to the fitted size
const MAX_FIT = 2.5; // a small picture (a formula 90 px wide) is enlarged at most this much to fit
const DRAG_SLOP = 4;

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

interface View {
	s: number; // screen px per picture px
	x: number; // where the picture's top-left corner is, in px of the stage
	y: number;
}

let dialog: HTMLDialogElement | null = null;

function build(): HTMLDialogElement {
	const d = document.createElement('dialog');
	d.className = 'image-viewer';
	d.setAttribute('aria-label', 'Obrázek');
	d.innerHTML = `
		<div class="image-viewer-stage"><img class="image-viewer-img" alt="" draggable="false"></div>
		<div class="image-viewer-bar" role="toolbar" aria-label="Přiblížení">
			<button type="button" data-act="out" aria-label="Oddálit" title="Oddálit (−)">−</button>
			<button type="button" data-act="reset" class="image-viewer-zoom" aria-label="Velikost podle obrazovky" title="Velikost podle obrazovky (0)">100 %</button>
			<button type="button" data-act="in" aria-label="Přiblížit" title="Přiblížit (+)">+</button>
			<button type="button" data-act="close" aria-label="Zavřít" title="Zavřít (Esc)">×</button>
		</div>
		<p class="image-viewer-caption" hidden></p>`;
	document.body.append(d);
	return d;
}

function open(source: HTMLImageElement): void {
	dialog ??= build();
	const d = dialog;
	const stage = d.querySelector<HTMLElement>('.image-viewer-stage')!;
	const img = d.querySelector<HTMLImageElement>('.image-viewer-img')!;
	const zoomLabel = d.querySelector<HTMLElement>('.image-viewer-zoom')!;
	const caption = d.querySelector<HTMLElement>('.image-viewer-caption')!;

	img.src = source.currentSrc || source.src;
	img.alt = source.alt;
	caption.textContent = source.alt.startsWith('Ilustrace:') ? '' : source.alt;
	caption.hidden = !caption.textContent;

	let fit: View = { s: 1, x: 0, y: 0 };
	let view: View = { ...fit };

	const apply = (animate = false) => {
		img.classList.toggle('is-animated', animate);
		img.style.transform = `translate(${view.x}px, ${view.y}px) scale(${view.s})`;
		zoomLabel.textContent = `${Math.round((view.s / fit.s) * 100)} %`;
		stage.classList.toggle('is-zoomed', view.s > fit.s * 1.01);
	};

	// keeps the picture from being dragged off the screen: smaller than the stage it stays centred
	// on that axis, larger it must cover the stage edge to edge
	const bound = (v: View): View => {
		const w = stage.clientWidth;
		const h = stage.clientHeight;
		const iw = img.naturalWidth * v.s;
		const ih = img.naturalHeight * v.s;
		const x = iw <= w ? (w - iw) / 2 : clamp(v.x, w - iw, 0);
		const y = ih <= h ? (h - ih) / 2 : clamp(v.y, h - ih, 0);
		return { s: v.s, x, y };
	};

	const fitView = (): View => {
		const w = stage.clientWidth;
		const h = stage.clientHeight;
		const s = Math.min(w / img.naturalWidth, h / img.naturalHeight, MAX_FIT);
		return bound({ s, x: 0, y: 0 });
	};

	// zoom so that the picture point under (cx, cy) stays under it
	const zoomAt = (s: number, cx: number, cy: number, animate = false) => {
		const next = clamp(s, fit.s, fit.s * MAX_ZOOM);
		const k = next / view.s;
		view = bound({ s: next, x: cx - (cx - view.x) * k, y: cy - (cy - view.y) * k });
		apply(animate);
	};
	const centre = () => [stage.clientWidth / 2, stage.clientHeight / 2] as const;

	const reset = (animate = false) => {
		fit = fitView();
		view = { ...fit };
		apply(animate);
	};

	const ready = () => reset();
	if (img.complete && img.naturalWidth) requestAnimationFrame(ready);
	else img.addEventListener('load', ready, { once: true });

	// pointers: one drags, two pinch; a press that does not move is a click
	const pointers = new Map<number, { x: number; y: number }>();
	let moved = false;
	let pinch: { dist: number; s: number } | null = null;
	let downAt = { x: 0, y: 0 };

	const local = (e: PointerEvent | MouseEvent | WheelEvent) => {
		const r = stage.getBoundingClientRect();
		return { x: e.clientX - r.left, y: e.clientY - r.top };
	};
	const spread = () => {
		const [a, b] = [...pointers.values()];
		return { dist: Math.hypot(a.x - b.x, a.y - b.y), cx: (a.x + b.x) / 2, cy: (a.y + b.y) / 2 };
	};

	const onDown = (e: PointerEvent) => {
		if (e.button !== 0) return;
		stage.setPointerCapture(e.pointerId);
		pointers.set(e.pointerId, local(e));
		if (pointers.size === 1) {
			moved = false;
			downAt = local(e);
		} else if (pointers.size === 2) {
			moved = true;
			pinch = { dist: spread().dist, s: view.s };
		}
	};
	const onMove = (e: PointerEvent) => {
		const prev = pointers.get(e.pointerId);
		if (!prev) return;
		const p = local(e);
		pointers.set(e.pointerId, p);
		if (pinch && pointers.size === 2) {
			const { dist, cx, cy } = spread();
			zoomAt((pinch.s * dist) / pinch.dist, cx, cy);
			return;
		}
		if (!moved && Math.hypot(p.x - downAt.x, p.y - downAt.y) < DRAG_SLOP) return;
		moved = true;
		stage.classList.add('is-dragging');
		view = bound({ s: view.s, x: view.x + p.x - prev.x, y: view.y + p.y - prev.y });
		apply();
	};
	const onUp = (e: PointerEvent) => {
		if (!pointers.delete(e.pointerId)) return;
		if (pointers.size < 2) pinch = null;
		if (pointers.size) return;
		stage.classList.remove('is-dragging');
		// a click beside the picture closes the viewer
		if (!moved && e.type === 'pointerup' && e.target === stage) d.close();
	};
	const onWheel = (e: WheelEvent) => {
		e.preventDefault();
		const { x, y } = local(e);
		const factor = Math.exp(-e.deltaY * (e.deltaMode === 1 ? 0.05 : 0.0025));
		zoomAt(view.s * factor, x, y);
	};
	const onDouble = (e: MouseEvent) => {
		const { x, y } = local(e);
		if (view.s > fit.s * 1.01) reset(true);
		else zoomAt(fit.s * 2.5, x, y, true);
	};
	const onClick = (e: MouseEvent) => {
		const act = (e.target as HTMLElement).closest<HTMLElement>('[data-act]')?.dataset.act;
		if (act === 'close' || e.target === d) d.close();
		else if (act === 'reset') reset(true);
		else if (act === 'in') zoomAt(view.s * STEP, ...centre(), true);
		else if (act === 'out') zoomAt(view.s / STEP, ...centre(), true);
	};
	const onKey = (e: KeyboardEvent) => {
		if (e.key === '+' || e.key === '=') zoomAt(view.s * STEP, ...centre(), true);
		else if (e.key === '-') zoomAt(view.s / STEP, ...centre(), true);
		else if (e.key === '0') reset(true);
		else if (e.key.startsWith('Arrow') && !(e.target as HTMLElement).closest('button')) {
			const d = 60;
			const dx = e.key === 'ArrowLeft' ? d : e.key === 'ArrowRight' ? -d : 0;
			const dy = e.key === 'ArrowUp' ? d : e.key === 'ArrowDown' ? -d : 0;
			view = bound({ s: view.s, x: view.x + dx, y: view.y + dy });
			apply(true);
		} else return;
		e.preventDefault();
	};
	const onResize = () => {
		const rel = view.s / fit.s;
		fit = fitView();
		view = bound({ ...view, s: fit.s * rel });
		apply();
	};

	stage.addEventListener('pointerdown', onDown);
	stage.addEventListener('pointermove', onMove);
	stage.addEventListener('pointerup', onUp);
	stage.addEventListener('pointercancel', onUp);
	stage.addEventListener('wheel', onWheel, { passive: false });
	stage.addEventListener('dblclick', onDouble);
	d.addEventListener('click', onClick);
	d.addEventListener('keydown', onKey);
	window.addEventListener('resize', onResize);

	d.addEventListener(
		'close',
		() => {
			stage.removeEventListener('pointerdown', onDown);
			stage.removeEventListener('pointermove', onMove);
			stage.removeEventListener('pointerup', onUp);
			stage.removeEventListener('pointercancel', onUp);
			stage.removeEventListener('wheel', onWheel);
			stage.removeEventListener('dblclick', onDouble);
			d.removeEventListener('click', onClick);
			d.removeEventListener('keydown', onKey);
			window.removeEventListener('resize', onResize);
			img.removeEventListener('load', ready);
			document.documentElement.classList.remove('has-image-viewer');
			source.focus({ preventScroll: true });
		},
		{ once: true }
	);

	document.documentElement.classList.add('has-image-viewer');
	img.style.transform = '';
	d.showModal();
	d.querySelector<HTMLElement>('[data-act="close"]')?.focus();
}

const usable = (img: HTMLImageElement) => !img.closest('a, .spoiler:not(.is-revealed)');

export function initImageViewer(): void {
	// a data attribute, not a class: the card style of these pictures is `img:not([class])`
	for (const img of document.querySelectorAll<HTMLImageElement>(SELECTOR)) {
		if (img.closest('a')) continue;
		img.dataset.zoomable = '';
		img.tabIndex = 0;
		img.setAttribute('role', 'button');
		img.title = 'Kliknutím obrázek zvětšíš';
	}
	document.addEventListener('click', (e) => {
		const img = (e.target as HTMLElement).closest<HTMLImageElement>('img[data-zoomable]');
		if (img && usable(img)) open(img);
	});
	document.addEventListener('keydown', (e) => {
		if (e.key !== 'Enter' && e.key !== ' ') return;
		const img = e.target as HTMLElement;
		if (img instanceof HTMLImageElement && 'zoomable' in img.dataset && usable(img)) {
			e.preventDefault();
			open(img);
		}
	});
}
