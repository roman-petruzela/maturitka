// Build-time renderer for 3D solids (stereometrie): kvádr, krychle, hranol, jehlan, komolý jehlan,
// válec, kužel, komolý kužel, koule. What the picture looks like is worked out in solid-geometry.ts
// (projection, hidden edges, the ellipses of the round solids); this file fits it into a frame and
// writes the SVG — and the same functions run in the browser for a figure the reader can turn
// (solid-viewer.ts), which is why the whole spec is kept in the figure's `data-solid`.
//
// Content authors write, e.g.:
//
//     ```solid
//     { "type": "kvadr", "params": { "a": 6, "b": 3, "c": 2 }, "letters": "ABCDEFGH",
//       "marks": ["a", "b", "c"], "title": "Kvádr ABCDEFGH" }
//     ```
//
//  * `letters` names the vertices in the order the solid builds them (a kvádr: ABCD along the
//    bottom from the front left, EFGH above them; a pyramid: the base, then the apex);
//  * `marks` writes the dimensions beside what they measure — a, b, c of a kvádr, a and v of a
//    prism, v (with a dashed axis) of a pyramid, r, v, s of a cone, r1, r2, v, s of a frustum,
//    r, rho1, rho2 of a sphere — either just the name or { "name": "v", "text": "v = 4" };
//  * `labels` puts free text at a 3D point, `segments` draws extra lines (a diagonal);
//  * a polyhedron is drawn in the cavalier projection (`theta`, `k`), a round solid in an
//    orthographic view from above (`elevation`); `"projection"` and `"azimuth"` change the view.
import { fmt, escapeAttr, labelTspans, captionHtml, wrapSpoiler } from './svg-utils';
import { cameraFor, drawSolid, missingParam, projector, solidBounds, type Camera, type SolidType, type Vec2, type Vec3 } from './solid-geometry';

export type { SolidType };

export interface SolidSpec {
	type: SolidType;
	params: Record<string, number>;
	letters?: string;
	marks?: (string | { name: string; text?: string })[];
	labels?: { at: Vec3; text: string; dir?: Vec2; dx?: number; dy?: number }[];
	segments?: { from: Vec3; to: Vec3; label?: string; dashed?: boolean; dir?: Vec2 }[];
	projection?: 'cavalier' | 'ortho';
	theta?: number;
	k?: number;
	azimuth?: number;
	elevation?: number;
	/** false: no tinted faces, a plain line drawing */
	shade?: boolean;
	width?: number;
	height?: number;
	title?: string;
	spoiler?: boolean;
	float?: 'left' | 'right';
}

/** how the solid sits in the frame: pixels per unit, and the point of the page in the middle of it */
export interface Fit {
	scale: number;
	cx: number;
	cy: number;
}

const PAD = 34; // room for the labels round the drawing

// the text a mark writes when it is not given one
const MARK_TEXT: Record<string, string> = { rho1: 'ρ_1', rho2: 'ρ_2', r1: 'r_1', r2: 'r_2', a1: 'a_1', a2: 'a_2' };

function hash(s: string): string {
	let h = 2166136261;
	for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
	return (h >>> 0).toString(36);
}

const pathOf = (pts: Vec2[]) => pts.map((p, i) => `${i ? 'L' : 'M'}${fmt(p[0])},${fmt(p[1])}`).join(' ');

/**
 * The `<svg>` of a solid seen through `cam`. By default the drawing is fitted to the frame; with
 * `fixedScale` (pixels per unit) it keeps that size and stays centred on the solid instead — how the
 * figure that is turned by hand avoids growing and shrinking. `inner` is the svg's content alone.
 */
export function solidSvg(spec: SolidSpec, cam: Camera, fixedScale?: number): { svg: string; inner: string; fit: Fit } {
	const { width = 360, height = 320, title } = spec;
	const d = drawSolid(spec.type, spec.params, cam);
	const { project } = projector(cam);

	// the extra lines and labels the author asked for, in page coordinates
	const segments = (spec.segments ?? []).map((s) => ({ ...s, pts: [project(s.from), project(s.to)] as Vec2[] }));
	const labels = (spec.labels ?? []).map((l) => ({ ...l, at: project(l.at) }));

	// the frame
	const points: Vec2[] = [
		...d.extent,
		...d.visible.flat(),
		...d.hidden.flat(),
		...d.faces.flatMap((f) => f.pts),
		...d.dims.flatMap((m) => m.pts),
		...segments.flatMap((s) => s.pts),
		...labels.map((l) => l.at),
	];
	let fit: Fit;
	if (fixedScale) {
		const { c } = solidBounds(spec.type, spec.params);
		const [cx, cy] = project(c);
		fit = { scale: fixedScale, cx, cy };
	} else {
		const xs = points.map((p) => p[0]);
		const ys = points.map((p) => p[1]);
		const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
		fit = {
			scale: Math.min((width - PAD * 2) / (x1 - x0 || 1), (height - PAD * 2) / (y1 - y0 || 1)),
			cx: (x0 + x1) / 2,
			cy: (y0 + y1) / 2,
		};
	}
	const { scale, cx, cy } = fit;
	const toScreen = (p: Vec2): Vec2 => [width / 2 + (p[0] - cx) * scale, height / 2 - (p[1] - cy) * scale];

	const id = `sg-${hash(JSON.stringify(spec))}`;
	const defs: string[] = [];
	const faces: string[] = [];
	if (spec.shade !== false) {
		for (const f of d.faces) {
			const pts = f.pts.map(toScreen).map((p) => `${fmt(p[0])},${fmt(p[1])}`).join(' ');
			if (f.gradient) {
				const g = `${id}-${f.gradient}`;
				if (!defs.some((x) => x.includes(`id="${g}"`))) {
					const stop = (o: number, a: number) => `<stop offset="${o}" style="stop-color:var(--accent);stop-opacity:${a}"/>`;
					defs.push(
						f.gradient === 'linear'
							? `<linearGradient id="${g}" x1="0" y1="0" x2="1" y2="0">${stop(0, 0.05)}${stop(0.32, 0.3)}${stop(1, 0.05)}</linearGradient>`
							: `<radialGradient id="${g}" cx="0.38" cy="0.32" r="0.75">${stop(0, 0.32)}${stop(1, 0.04)}</radialGradient>`
					);
				}
				faces.push(`<polygon class="solid-face" points="${pts}" style="fill:url(#${g})"/>`);
			} else {
				faces.push(`<polygon class="solid-face" points="${pts}" style="fill:var(--accent);fill-opacity:${fmt(0.04 + 0.24 * f.shade)}"/>`);
			}
		}
	}

	const edges = (list: Vec2[][], cls: string) => list.map((pts) => `<path class="${cls}" d="${pathOf(pts.map(toScreen))}"/>`);

	// what a mark (or a label) writes, and where: pushed off the drawing along `dir`
	const text: string[] = [];
	const write = (at: Vec2, dir: Vec2, s: string, dx = 0, dy = 0) => {
		const [x, y] = toScreen(at);
		const len = s.replace(/[_{}]/g, '').length;
		const pad = 8 + 4.5 * Math.max(1, len);
		const l = Math.hypot(dir[0], dir[1]) || 1;
		const lx = x + (dir[0] / l) * pad + dx;
		const ly = y - (dir[1] / l) * pad * 0.8 + dy;
		text.push(`<text class="solid-label" x="${fmt(lx)}" y="${fmt(ly)}">${labelTspans(s)}</text>`);
	};
	const outward = (at: Vec2): Vec2 => [at[0] - d.centre[0], at[1] - d.centre[1]];

	(spec.letters ?? '').split('').forEach((ch, i) => {
		if (d.vertices[i]) write(d.vertices[i], outward(d.vertices[i]), ch);
	});
	const marks = (spec.marks ?? []).map((m) => (typeof m === 'string' ? { name: m, text: undefined } : m));
	const dims: string[] = [];
	for (const m of marks) {
		const at = d.marks[m.name];
		if (!at) throw new Error(`the mark "${m.name}" does not exist for a "${spec.type}"`);
		for (const dim of d.dims.filter((x) => x.name === m.name)) {
			dims.push(`<path class="solid-dim${dim.dashed ? ' solid-dim--dashed' : ''}" d="${pathOf(dim.pts.map(toScreen))}"/>`);
		}
		write(at.at, at.dir, m.text ?? MARK_TEXT[m.name] ?? m.name);
	}
	for (const s of segments) {
		dims.push(`<path class="solid-dim${s.dashed ? ' solid-dim--dashed' : ''}" d="${pathOf(s.pts.map(toScreen))}"/>`);
		if (s.label) {
			const m: Vec2 = [(s.pts[0][0] + s.pts[1][0]) / 2, (s.pts[0][1] + s.pts[1][1]) / 2];
			write(m, s.dir ?? outward(m), s.label);
		}
	}
	for (const l of labels) write(l.at, l.dir ?? [0, 0], l.text, l.dx ?? 0, l.dy ?? 0);

	const inner =
		(defs.length ? `<defs>${defs.join('')}</defs>` : '') +
		faces.join('') +
		edges(d.hidden, 'solid-edge solid-edge--hidden').join('') +
		edges(d.visible, 'solid-edge').join('') +
		dims.join('') +
		text.join('');
	const svg = `<svg viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-label="${escapeAttr(title ?? 'Těleso')}">${inner}</svg>`;
	return { svg, inner, fit };
}

export function renderSolidSvg(spec: SolidSpec): string {
	const missing = missingParam(spec.type, spec.params);
	if (missing) throw new Error(`a "${spec.type}" needs the parameter "${missing}"`);
	const { svg } = solidSvg(spec, cameraFor(spec.type, spec));
	const floatClass = spec.float ? ` graph-plot--float-${spec.float}` : '';
	// the spec travels with the figure so that the browser can draw the same solid from another side
	const { title: _t, spoiler: _s, float: _f, ...drawn } = spec;
	const parts = [
		`<figure class="graph-plot solid-plot${spec.spoiler ? '' : floatClass}" data-solid="${escapeAttr(JSON.stringify(drawn))}">`,
		svg,
		spec.title ? `<figcaption>${captionHtml(spec.title)}</figcaption>` : '',
		`</figure>`,
	];
	return wrapSpoiler(parts.join(''), spec.spoiler, floatClass);
}
