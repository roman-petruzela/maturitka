// Turns the 3D solids of the stereometrie pages: drag a figure and the solid turns, the hidden
// edges are worked out again for every position (the very code that drew the figure at build time
// runs here — the spec is kept in the figure's `data-solid`), a double click or Escape brings back
// the picture as the textbook draws it. The arrow keys turn a focused figure as well.
//
// The first move of a polyhedron leaves the cavalier projection (a true front face is only right
// for the textbook view) for an ordinary orthographic one; a round solid was already in it.
import { solidSvg, type SolidSpec } from './markdown/solid-svg';
import { cameraFor, isRound, solidBounds, type Camera } from './markdown/solid-geometry';

const PAD = 34;
const DEG_PER_PX = { azimuth: 0.6, elevation: 0.45 };

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

function setup(fig: HTMLElement): void {
	if (fig.dataset.turnable) return;
	const svg = fig.querySelector('svg');
	let spec: SolidSpec;
	try {
		spec = JSON.parse(fig.dataset.solid ?? '');
	} catch {
		return;
	}
	if (!svg) return;
	fig.dataset.turnable = '1';
	fig.classList.add('is-turnable');
	fig.title = 'Tažením těleso otočíš, dvojklik vrátí původní pohled';
	svg.setAttribute('tabindex', '0');

	const home = cameraFor(spec.type, spec);
	const homeInner = svg.innerHTML;
	const homeScale = solidSvg(spec, home).fit.scale;
	const { R } = solidBounds(spec.type, spec.params);
	const width = spec.width ?? 360;
	const height = spec.height ?? 320;
	const turnedScale = (Math.min(width, height) - PAD * 2) / (2 * R);
	const round = isRound(spec.type);
	const lowest = round ? 4 : -89; // seen from below, a round solid would need its base drawn

	let cam: Camera = home;
	let scale = homeScale;
	let turned = false;
	let animation = 0;
	const draw = () => {
		svg.innerHTML = solidSvg(spec, cam, scale).inner;
	};

	// leaving the textbook picture: an orthographic camera, and the size the solid keeps from now on
	const leaveHome = () => {
		if (turned) return;
		turned = true;
		cam = home.kind === 'ortho' ? home : { ...home, kind: 'ortho', azimuth: -28, elevation: 24 };
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			scale = turnedScale;
			return draw();
		}
		const from = scale;
		const t0 = performance.now();
		const step = (now: number) => {
			const t = clamp((now - t0) / 180, 0, 1);
			scale = from + (turnedScale - from) * (1 - Math.pow(1 - t, 3));
			draw();
			if (t < 1) animation = requestAnimationFrame(step);
		};
		cancelAnimationFrame(animation);
		animation = requestAnimationFrame(step);
	};
	const turnTo = (azimuth: number, elevation: number) => {
		leaveHome();
		cam = { ...cam, azimuth, elevation: clamp(elevation, lowest, 89) };
		draw();
	};
	const reset = () => {
		cancelAnimationFrame(animation);
		turned = false;
		cam = home;
		scale = homeScale;
		svg.innerHTML = homeInner;
	};

	// a figure hidden in a spoiler is an answer: not to be played with before it is uncovered
	const covered = () => !!fig.closest('.spoiler-block:not(.is-revealed)');

	let drag: { id: number; x: number; y: number; az: number; el: number; moved: boolean } | null = null;
	svg.addEventListener('pointerdown', (e) => {
		if (covered() || (e.pointerType === 'mouse' && e.button !== 0)) return;
		drag = { id: e.pointerId, x: e.clientX, y: e.clientY, az: cam.azimuth, el: cam.elevation, moved: false };
		svg.setPointerCapture(e.pointerId);
	});
	svg.addEventListener('pointermove', (e) => {
		if (!drag || drag.id !== e.pointerId) return;
		const [dx, dy] = [e.clientX - drag.x, e.clientY - drag.y];
		if (!drag.moved && Math.hypot(dx, dy) < 4) return; // a click is not a turn
		if (!drag.moved) {
			drag.moved = true;
			// a turn starts from where the solid is now: the textbook view's angles are not the camera's
			if (!turned) [drag.az, drag.el] = [home.kind === 'ortho' ? home.azimuth : -28, home.kind === 'ortho' ? home.elevation : 24];
			fig.classList.add('is-turning');
		}
		turnTo(drag.az + dx * DEG_PER_PX.azimuth, drag.el + dy * DEG_PER_PX.elevation);
	});
	// the click that ends a drag must not reach the page's spoiler handler, which would cover the figure again
	let swallowClick = false;
	svg.addEventListener('click', (e) => {
		if (!swallowClick) return;
		swallowClick = false;
		e.stopPropagation();
	});
	const release = (e: PointerEvent) => {
		if (drag && drag.id === e.pointerId) {
			swallowClick = drag.moved;
			if (drag.moved) setTimeout(() => (swallowClick = false), 0);
			drag = null;
		}
		fig.classList.remove('is-turning');
	};
	svg.addEventListener('pointerup', release);
	svg.addEventListener('pointercancel', release);
	svg.addEventListener('dblclick', reset);
	svg.addEventListener('keydown', (e) => {
		if (covered()) return;
		const [az, el] = turned ? [cam.azimuth, cam.elevation] : [home.kind === 'ortho' ? home.azimuth : -28, home.kind === 'ortho' ? home.elevation : 24];
		const moves: Record<string, [number, number]> = { ArrowLeft: [-8, 0], ArrowRight: [8, 0], ArrowUp: [0, -6], ArrowDown: [0, 6] };
		if (moves[e.key]) {
			e.preventDefault();
			turnTo(az + moves[e.key][0], el + moves[e.key][1]);
		} else if (e.key === 'Escape' || e.key === 'Home') {
			reset();
		}
	});
}

export function initSolidViewers(root: ParentNode = document): void {
	root.querySelectorAll<HTMLElement>('figure.solid-plot[data-solid]').forEach(setup);
}
