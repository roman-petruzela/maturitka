// Build-time SVG renderer for 3D solids (stereometrie): kvádr, krychle,
// hranol, jehlan, válec, kužel, koule. Uses "volné rovnoběžné promítání"
// (cavalier/oblique parallel projection) — the standard Czech textbook
// convention: the x (right) and z (up) axes are drawn undistorted, the y
// (depth) axis is drawn at an angle (default 45°) and foreshortened by a
// factor (default 1/2). That's why a horizontal circle (a cylinder's base)
// comes out looking like an ellipse — that's the correct, expected look,
// not a bug — while a sphere's front-facing outline (which lies entirely in
// the undistorted x/z plane) comes out as a true circle.
//
// v1 draws a plain wireframe — no hidden-line dashing. Proper hidden-line
// removal needs real visibility computation per solid; a wireframe is a
// solid, correct improvement over no diagram at all and was the pragmatic
// cut given the size of that problem versus everything else in this pass.
//
// Content authors write, e.g.:
//
//     ```solid
//     { "type": "kuzel", "params": { "r": 3, "v": 5 },
//       "labels": [{ "at": [3, 0, 0], "text": "r" }, { "at": [0, 0, 2.5], "text": "v" }],
//       "title": "Kužel" }
//     ```
import { fmt, escapeAttr, labelTspans, wrapSpoiler } from './svg-utils';

export type SolidType = 'kvadr' | 'krychle' | 'hranol' | 'jehlan' | 'valec' | 'kuzel' | 'koule' | 'komoly_jehlan' | 'komoly_kuzel';

export interface SolidSpec {
	type: SolidType;
	params: Record<string, number>;
	labels?: { at: [number, number, number]; text: string }[];
	theta?: number;
	k?: number;
	width?: number;
	height?: number;
	title?: string;
	spoiler?: boolean;
	float?: 'left' | 'right';
}

type Vec3 = [number, number, number];
type Vec2 = [number, number];

function regularPolygon(n: number, r: number, z: number): Vec3[] {
	const pts: Vec3[] = [];
	// offset by half a vertex-spacing so a flat EDGE faces front/bottom
	// instead of a vertex — for n=4 this is the difference between an
	// axis-aligned square (recognizable, matches kvadr's own square base)
	// and a "diamond" rotated 45°, whose edges in cavalier projection run
	// close to the depth-skew direction and visually collapse into a
	// thin sliver instead of reading as a square
	for (let i = 0; i < n; i++) {
		const ang = -Math.PI / 2 + Math.PI / n + (2 * Math.PI * i) / n;
		pts.push([r * Math.cos(ang), r * Math.sin(ang), z]);
	}
	return pts;
}

function circlePts(n: number, r: number, z: number): Vec3[] {
	const pts: Vec3[] = [];
	for (let i = 0; i <= n; i++) {
		const ang = (2 * Math.PI * i) / n;
		pts.push([r * Math.cos(ang), r * Math.sin(ang), z]);
	}
	return pts;
}

function ring(pts: Vec3[]): Vec3[][] {
	return pts.map((p, i) => [p, pts[(i + 1) % pts.length]]);
}

// Returns the wireframe as a list of polylines (each an array of >=2 3D
// points to connect in order) — straight edges are 2-point polylines,
// circles/arcs are many-point polylines.
function buildEdges(spec: SolidSpec): Vec3[][] {
	const p = spec.params;
	switch (spec.type) {
		case 'krychle': {
			return buildEdges({ ...spec, type: 'kvadr', params: { a: p.a, b: p.a, c: p.a } });
		}
		case 'kvadr': {
			const { a, b, c } = p;
			const bot: Vec3[] = [
				[0, 0, 0],
				[a, 0, 0],
				[a, b, 0],
				[0, b, 0],
			];
			const top: Vec3[] = bot.map(([x, y, z]) => [x, y, z + c] as Vec3);
			const verticals = bot.map((v, i) => [v, top[i]] as Vec3[]);
			return [...ring(bot), ...ring(top), ...verticals];
		}
		case 'hranol': {
			const { n, r, v } = p;
			const bot = regularPolygon(n, r, 0);
			const top = regularPolygon(n, r, v);
			const verticals = bot.map((pt, i) => [pt, top[i]] as Vec3[]);
			return [...ring(bot), ...ring(top), ...verticals];
		}
		case 'jehlan': {
			const { n, r, v } = p;
			const bot = regularPolygon(n, r, 0);
			const apex: Vec3 = [0, 0, v];
			const laterals = bot.map((pt) => [pt, apex] as Vec3[]);
			return [...ring(bot), ...laterals];
		}
		case 'valec': {
			const { r, v } = p;
			const bot = circlePts(48, r, 0);
			const top = circlePts(48, r, v);
			const silhouette: Vec3[][] = [
				[
					[r, 0, 0],
					[r, 0, v],
				],
				[
					[-r, 0, 0],
					[-r, 0, v],
				],
			];
			return [bot, top, ...silhouette];
		}
		case 'komoly_jehlan': {
			const { n, r1, r2, v } = p;
			const bot = regularPolygon(n, r1, 0);
			const top = regularPolygon(n, r2, v);
			const verticals = bot.map((pt, i) => [pt, top[i]] as Vec3[]);
			return [...ring(bot), ...ring(top), ...verticals];
		}
		case 'komoly_kuzel': {
			const { r1, r2, v } = p;
			const bot = circlePts(48, r1, 0);
			const top = circlePts(48, r2, v);
			const silhouette: Vec3[][] = [
				[
					[r1, 0, 0],
					[r2, 0, v],
				],
				[
					[-r1, 0, 0],
					[-r2, 0, v],
				],
			];
			return [bot, top, ...silhouette];
		}
		case 'kuzel': {
			const { r, v } = p;
			const bot = circlePts(48, r, 0);
			const apex: Vec3 = [0, 0, v];
			const silhouette: Vec3[][] = [
				[
					[r, 0, 0],
					apex,
				],
				[
					[-r, 0, 0],
					apex,
				],
			];
			return [bot, ...silhouette];
		}
		case 'koule': {
			const { r, z1, z2 } = p;
			// front-facing outline (lies in the undistorted x/z plane, so it
			// projects as a true circle — drawn as a native <circle> below,
			// this polyline only feeds the bounding-box computation) plus a
			// horizontal "equator" to suggest the curved surface, exactly
			// like the classic textbook sketch of a sphere.
			const outline: Vec3[] = [];
			for (let i = 0; i <= 48; i++) {
				const ang = (2 * Math.PI * i) / 48;
				outline.push([r * Math.cos(ang), 0, r * Math.sin(ang)]);
			}
			const equator = circlePts(48, r, 0);
			const cuts: Vec3[][] = [];
			// optional horizontal "cut" circles at height z1/z2 (kulový
			// vrchlík/výseč/vrstva/pás — a plane cutting the sphere at height
			// z intersects it in a circle of radius sqrt(r² - z²))
			for (const z of [z1, z2]) {
				if (z == null || Math.abs(z) >= r) continue;
				cuts.push(circlePts(48, Math.sqrt(r * r - z * z), z));
			}
			return [outline, equator, ...cuts];
		}
	}
}

export function renderSolidSvg(spec: SolidSpec): string {
	const { width = 360, height = 320, title, theta = 45, k = 0.5 } = spec;
	const PAD = 30;
	const rad = (theta * Math.PI) / 180;
	const cosT = Math.cos(rad) * k;
	const sinT = Math.sin(rad) * k;

	// cavalier projection to math-space 2D (x right, "z" still up — flipped
	// for SVG's y-down convention only at the very end, same as
	// geometry-svg.ts, so the uniform-scale/centering math stays identical)
	const project = ([x, y, z]: Vec3): Vec2 => [x + y * cosT, z + y * sinT];

	const edges = buildEdges(spec);
	const allPts: Vec2[] = edges.flat().map(project);
	for (const l of spec.labels ?? []) allPts.push(project(l.at));

	const xs = allPts.map((p) => p[0]);
	const ys = allPts.map((p) => p[1]);
	const xMin = Math.min(...xs);
	const xMax = Math.max(...xs);
	const yMin = Math.min(...ys);
	const yMax = Math.max(...ys);
	const xSpan = xMax - xMin || 1;
	const ySpan = yMax - yMin || 1;

	const innerW = width - PAD * 2;
	const innerH = height - PAD * 2;
	const scale = Math.min(innerW / xSpan, innerH / ySpan);
	const usedW = xSpan * scale;
	const usedH = ySpan * scale;
	const offsetX = PAD + (innerW - usedW) / 2;
	const offsetY = PAD + (innerH - usedH) / 2;
	const toScreen = (p: Vec3): Vec2 => {
		const [px, pz] = project(p);
		return [offsetX + (px - xMin) * scale, offsetY + usedH - (pz - yMin) * scale];
	};

	const parts: string[] = [];
	const floatClass = spec.float ? ` graph-plot--float-${spec.float}` : '';
	parts.push(
		`<figure class="graph-plot solid-plot${spec.spoiler ? '' : floatClass}"><svg viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-label="${escapeAttr(title ?? 'Těleso')}">`
	);

	if (spec.type === 'koule') {
		const { r, z1, z2 } = spec.params;
		const center = toScreen([0, 0, 0]);
		const edgePt = toScreen([r, 0, 0]);
		const rPx = Math.hypot(edgePt[0] - center[0], edgePt[1] - center[1]);
		parts.push(`<circle cx="${fmt(center[0])}" cy="${fmt(center[1])}" r="${fmt(rPx)}" class="solid-edge" fill="none" />`);
		const equator = circlePts(48, r, 0).map(toScreen);
		parts.push(`<path d="${equator.map((p, i) => `${i === 0 ? 'M' : 'L'}${fmt(p[0])},${fmt(p[1])}`).join(' ')}" class="solid-edge solid-edge--hidden" fill="none" />`);
		for (const z of [z1, z2]) {
			if (z == null || Math.abs(z) >= r) continue;
			const cut = circlePts(48, Math.sqrt(r * r - z * z), z).map(toScreen);
			parts.push(`<path d="${cut.map((p, i) => `${i === 0 ? 'M' : 'L'}${fmt(p[0])},${fmt(p[1])}`).join(' ')}" class="solid-edge solid-edge--hidden" fill="none" />`);
		}
	} else {
		for (const edge of edges) {
			const screenPts = edge.map(toScreen);
			const d = screenPts.map((p, i) => `${i === 0 ? 'M' : 'L'}${fmt(p[0])},${fmt(p[1])}`).join(' ');
			parts.push(`<path d="${d}" class="solid-edge" fill="none" />`);
		}
		// jehlan/kuzel come to a single apex point with no vertical edge of
		// their own to hang a "v" label on, so a labelled height ends up
		// floating with nothing to anchor it to — draw the tělesová výška
		// as an explicit dashed guide line from base-center to apex/top-center
		if (spec.type === 'jehlan' || spec.type === 'kuzel' || spec.type === 'komoly_jehlan' || spec.type === 'komoly_kuzel') {
			const bottom = toScreen([0, 0, 0]);
			const top = toScreen([0, 0, spec.params.v]);
			parts.push(`<path d="M${fmt(bottom[0])},${fmt(bottom[1])} L${fmt(top[0])},${fmt(top[1])}" class="solid-edge solid-edge--hidden" fill="none" />`);
		}
	}

	for (const l of spec.labels ?? []) {
		const [x, y] = toScreen(l.at);
		parts.push(`<text x="${fmt(x)}" y="${fmt(y)}" class="geom-label" text-anchor="middle">${labelTspans(l.text)}</text>`);
	}

	parts.push(`</svg>`);
	if (title) parts.push(`<figcaption>${escapeAttr(title)}</figcaption>`);
	parts.push(`</figure>`);

	return wrapSpoiler(parts.join(''), spec.spoiler, floatClass);
}
