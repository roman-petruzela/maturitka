// The geometry of the 3D solids (stereometrie): what a solid looks like from a given viewpoint.
// Pure maths, no DOM and no imports — it runs in Node at build time (solid-svg.ts) and in the
// browser (the figure that can be turned with the mouse, solid-viewer.ts).
//
// Two ways of looking at a solid, because school geometry uses two:
//  * "cavalier" — volné rovnoběžné promítání, the convention for polyhedra (kvádr, jehlan …): the
//    front face is drawn true, the depth axis leans away at `theta` and is shortened by `k`;
//  * "ortho" — an ordinary orthographic view from above at an elevation, for the round solids
//    (válec, kužel, koule): a horizontal circle is then an ellipse with horizontal axes, the way
//    every textbook draws it. (Under the cavalier projection the same circle comes out as a
//    *tilted* ellipse and the outline of a cone no longer touches it — the old renderer's look.)
//
// What is hidden is decided by the surface, not guessed: a convex solid's edge is visible when
// one of the surfaces it borders faces the viewer, and hidden edges are dashed. For a curve on a
// round surface the same test is made point by point.

export type Vec2 = [number, number];
export type Vec3 = [number, number, number];

export type SolidType = 'kvadr' | 'krychle' | 'hranol' | 'jehlan' | 'valec' | 'kuzel' | 'koule' | 'komoly_jehlan' | 'komoly_kuzel';

const ROUND_TYPES: SolidType[] = ['valec', 'kuzel', 'koule', 'komoly_kuzel'];
export const isRound = (type: SolidType) => ROUND_TYPES.includes(type);

export interface Camera {
	kind: 'cavalier' | 'ortho';
	/** cavalier: direction of the depth axis on the page, degrees */
	theta: number;
	/** cavalier: how much the depth axis is shortened */
	k: number;
	/** ortho: turn of the solid about its vertical axis, degrees */
	azimuth: number;
	/** ortho: how far above the horizon the viewer is, degrees */
	elevation: number;
}

export const DEFAULT_ELEVATION = 24;

export function cameraFor(
	type: SolidType,
	o: { projection?: string; theta?: number; k?: number; azimuth?: number; elevation?: number } = {}
): Camera {
	const wanted = o.projection === 'cavalier' || o.projection === 'ortho' ? o.projection : undefined;
	return {
		// a round solid is only ever drawn in the view that gives it its upright ellipses
		kind: isRound(type) ? 'ortho' : (wanted ?? 'cavalier'),
		theta: o.theta ?? 45,
		k: o.k ?? 0.5,
		azimuth: o.azimuth ?? 0,
		elevation: Math.min(89, Math.max(4, o.elevation ?? DEFAULT_ELEVATION)),
	};
}

const rad = (d: number) => (d * Math.PI) / 180;

export interface Projector {
	/** a point of the solid → the page (x right, y up) */
	project: (p: Vec3) => Vec2;
	/** the unit vector from the solid towards the viewer: a surface faces the viewer when its normal has a positive product with it */
	toViewer: Vec3;
}

export function projector(cam: Camera): Projector {
	if (cam.kind === 'cavalier') {
		const c = Math.cos(rad(cam.theta)) * cam.k;
		const s = Math.sin(rad(cam.theta)) * cam.k;
		const n = Math.hypot(c, 1, s);
		return { project: ([x, y, z]) => [x + y * c, z + y * s], toViewer: [c / n, -1 / n, s / n] };
	}
	const a = rad(cam.azimuth);
	const e = rad(cam.elevation);
	const [ca, sa, ce, se] = [Math.cos(a), Math.sin(a), Math.cos(e), Math.sin(e)];
	return {
		project: ([x, y, z]) => [x * ca - y * sa, z * ce + (x * sa + y * ca) * se],
		toViewer: [-ce * sa, -ce * ca, se],
	};
}

const dot = (a: Vec3, b: Vec3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const sub = (a: Vec3, b: Vec3): Vec3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const norm = (a: Vec3): Vec3 => {
	const l = Math.hypot(a[0], a[1], a[2]) || 1;
	return [a[0] / l, a[1] / l, a[2] / l];
};

// ── what the picture is made of ──────────────────────────────────────────────────────────

export interface Drawing {
	/** filled areas, `shade` 0 (dark) … 1 (bright); the body of a round solid gets a gradient instead of a flat tint */
	faces: { pts: Vec2[]; shade: number; gradient?: 'linear' | 'radial' }[];
	/** the outline and the edges one can see */
	visible: Vec2[][];
	/** the edges behind the solid (dashed) */
	hidden: Vec2[][];
	/** the corners of a polyhedron, in the order of its vertices (for the letters A, B, C …) */
	vertices: Vec2[];
	/** the middle of the solid on the page: labels are pushed away from it */
	centre: Vec2;
	/** every point that has to fit into the frame */
	extent: Vec2[];
	/** dimension lines a mark can ask for: the height, a radius … (`dashed` when it runs inside the solid) */
	dims: { name: string; pts: Vec2[]; dashed: boolean }[];
	/** where the label of each mark goes, and which way to push the text off the solid */
	marks: Record<string, { at: Vec2; dir: Vec2 }>;
}

const emptyDrawing = (): Drawing => ({ faces: [], visible: [], hidden: [], vertices: [], centre: [0, 0], extent: [], dims: [], marks: {} });

// A face that looks towards the light is brighter. Light comes from above, a little from the left
// and from the viewer's side, so the top of a solid is the brightest and its right side the darkest.
function shadeOf(n: Vec3, toViewer: Vec3): number {
	const light = norm([toViewer[0] * 0.55 - 0.45, toViewer[1] * 0.55, toViewer[2] * 0.55 + 0.7]);
	return 0.5 + 0.5 * dot(n, light);
}

const mid2 = (a: Vec2, b: Vec2): Vec2 => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
const unit2 = (from: Vec2, to: Vec2): Vec2 => {
	const [dx, dy] = [to[0] - from[0], to[1] - from[1]];
	const l = Math.hypot(dx, dy) || 1;
	return [dx / l, dy / l];
};

// the smallest convex polygon round the points (Andrew's monotone chain)
function hull(points: Vec2[]): Vec2[] {
	const p = points.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]);
	const cross = (o: Vec2, a: Vec2, b: Vec2) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
	const half = (list: Vec2[]) => {
		const out: Vec2[] = [];
		for (const q of list) {
			while (out.length >= 2 && cross(out[out.length - 2], out[out.length - 1], q) <= 0) out.pop();
			out.push(q);
		}
		out.pop();
		return out;
	};
	return [...half(p), ...half(p.slice().reverse())];
}

// ── polyhedra ────────────────────────────────────────────────────────────────────────────

export interface Poly {
	kind: 'box' | 'prism' | 'frustum' | 'pyramid';
	/** the number of corners of the base (a prism, a pyramid) */
	n: number;
	verts: Vec3[];
	/** each face as a loop of vertex indices */
	faces: number[][];
}

// The corners of a regular n-gon, the first one at the front left and then anticlockwise, so a
// square's corners come out as A (front left), B (front right), C (back right), D (back left) like
// the corners of a kvádr. A flat side faces the front: with a corner in front a square would be a
// diamond, whose sides in the cavalier projection run along the depth axis and collapse.
function polygon(n: number, r: number, z: number): Vec3[] {
	return Array.from({ length: n }, (_, i) => {
		const a = -Math.PI / 2 - Math.PI / n + (2 * Math.PI * i) / n;
		return [r * Math.cos(a), r * Math.sin(a), z] as Vec3;
	});
}

export function buildPoly(type: SolidType, p: Record<string, number>): Poly | null {
	switch (type) {
		case 'krychle':
			return buildPoly('kvadr', { a: p.a, b: p.a, c: p.a });
		case 'kvadr': {
			const { a, b, c } = p;
			const verts: Vec3[] = [
				[0, 0, 0], [a, 0, 0], [a, b, 0], [0, b, 0],
				[0, 0, c], [a, 0, c], [a, b, c], [0, b, c],
			];
			return { kind: 'box', n: 4, verts, faces: [[0, 3, 2, 1], [4, 5, 6, 7], [0, 1, 5, 4], [3, 7, 6, 2], [0, 4, 7, 3], [1, 2, 6, 5]] };
		}
		case 'hranol':
		case 'komoly_jehlan': {
			const n = Math.round(p.n);
			const [r1, r2] = type === 'hranol' ? [p.r, p.r] : [p.r1, p.r2];
			const verts = [...polygon(n, r1, 0), ...polygon(n, r2, p.v)];
			const faces = [Array.from({ length: n }, (_, i) => i), Array.from({ length: n }, (_, i) => n + i)];
			for (let i = 0; i < n; i++) faces.push([i, (i + 1) % n, n + ((i + 1) % n), n + i]);
			return { kind: type === 'hranol' ? 'prism' : 'frustum', n, verts, faces };
		}
		case 'jehlan': {
			const n = Math.round(p.n);
			const verts = [...polygon(n, p.r, 0), [0, 0, p.v] as Vec3];
			const faces = [Array.from({ length: n }, (_, i) => i)];
			for (let i = 0; i < n; i++) faces.push([i, (i + 1) % n, n]);
			return { kind: 'pyramid', n, verts, faces };
		}
		default:
			return null;
	}
}

export function drawPoly(poly: Poly, cam: Camera): Drawing {
	const { project, toViewer } = projector(cam);
	const d = emptyDrawing();
	const { verts, faces, n } = poly;
	const centroid: Vec3 = [0, 0, 0];
	for (const v of verts) for (let i = 0; i < 3; i++) centroid[i] += v[i] / verts.length;

	// the outward unit normal of every face (for a convex solid: away from the centroid)
	const normals = faces.map((f) => {
		let m: Vec3 = [0, 0, 0];
		for (let i = 0; i < f.length; i++) {
			const [a, b] = [verts[f[i]], verts[f[(i + 1) % f.length]]];
			m = [m[0] + (a[1] - b[1]) * (a[2] + b[2]), m[1] + (a[2] - b[2]) * (a[0] + b[0]), m[2] + (a[0] - b[0]) * (a[1] + b[1])];
		}
		m = norm(m);
		const c: Vec3 = [0, 0, 0];
		for (const i of f) for (let j = 0; j < 3; j++) c[j] += verts[i][j] / f.length;
		return dot(m, sub(c, centroid)) < 0 ? ([-m[0], -m[1], -m[2]] as Vec3) : m;
	});
	const facing = normals.map((m) => dot(m, toViewer) > 1e-6);

	faces.forEach((f, i) => {
		if (facing[i]) d.faces.push({ pts: f.map((v) => project(verts[v])), shade: shadeOf(normals[i], toViewer) });
	});

	// every edge lies on two faces, and is seen when either of them faces the viewer
	const edges = new Map<string, { a: number; b: number; seen: boolean }>();
	faces.forEach((f, i) => {
		for (let j = 0; j < f.length; j++) {
			const [a, b] = [f[j], f[(j + 1) % f.length]];
			const key = a < b ? `${a}-${b}` : `${b}-${a}`;
			const e = edges.get(key) ?? { a, b, seen: false };
			e.seen ||= facing[i];
			edges.set(key, e);
		}
	});
	for (const e of edges.values()) (e.seen ? d.visible : d.hidden).push([project(verts[e.a]), project(verts[e.b])]);

	d.vertices = verts.map(project);
	d.extent = d.vertices.slice();
	d.centre = project(centroid);

	// the marks: an edge's length is written beside the edge, pushed away from the solid; the
	// height of a pyramid or a frustum has an axis of its own, dashed since it runs inside
	const outward = (at: Vec2) => unit2(d.centre, at);
	const edge = (name: string, i: number, j: number) => {
		const at = mid2(d.vertices[i], d.vertices[j]);
		d.marks[name] = { at, dir: outward(at) };
	};
	const centre = (from: number, to: number): Vec2 => {
		const c: Vec3 = [0, 0, 0];
		for (let i = from; i < to; i++) for (let j = 0; j < 3; j++) c[j] += verts[i][j] / (to - from);
		return project(c);
	};
	const axis = (from: Vec2, to: Vec2) => {
		d.dims.push({ name: 'v', pts: [from, to], dashed: true });
		d.marks.v = { at: mid2(from, to), dir: [1, 0] };
		d.extent.push(from, to);
	};
	switch (poly.kind) {
		case 'box':
			edge('a', 0, 1);
			edge('b', 1, 2);
			edge('c', 1, 5);
			break;
		case 'prism':
			edge('a', 0, 1);
			edge('v', 1, n + 1); // the height of a prism is a lateral edge: only the label is needed
			break;
		case 'pyramid':
			edge('a', 0, 1);
			axis(centre(0, n), d.vertices[n]);
			break;
		case 'frustum':
			edge('a1', 0, 1);
			edge('a2', n, n + 1);
			axis(centre(0, n), centre(n, 2 * n));
			break;
	}
	return d;
}

// ── round solids ─────────────────────────────────────────────────────────────────────────

// A closed curve given by an angle t ∈ [0, 2π): its points on the page, and whether the surface
// at each point faces the viewer. Returns the visible runs and the hidden runs, cut exactly where
// the visibility changes (found by bisection).
function splitCurve(at: (t: number) => Vec2, seen: (t: number) => boolean, samples = 160): { visible: Vec2[][]; hidden: Vec2[][] } {
	const T = 2 * Math.PI;
	const ts = Array.from({ length: samples }, (_, i) => (T * i) / samples);
	const flags = ts.map(seen);
	const out = { visible: [] as Vec2[][], hidden: [] as Vec2[][] };
	const bucket = (f: boolean) => (f ? out.visible : out.hidden);
	if (flags.every((f) => f === flags[0])) {
		bucket(flags[0]).push([...ts, T].map(at));
		return out;
	}
	// begin at a change of visibility, so that no run is split by the seam of the loop
	const start = Math.max(0, flags.findIndex((f, i) => f !== flags[(i + samples - 1) % samples]));
	const tAt = (step: number) => ts[(start + step) % samples] + (start + step >= samples ? T : 0);
	const boundary = (t0: number, f0: boolean, t1: number): number => {
		let [lo, hi] = [t0, t1];
		for (let i = 0; i < 24; i++) {
			const m = (lo + hi) / 2;
			if (seen(m) === f0) lo = m;
			else hi = m;
		}
		return (lo + hi) / 2;
	};
	let run: Vec2[] = [at(tAt(0))];
	let runFlag = flags[start];
	for (let step = 1; step <= samples; step++) {
		const f = flags[(start + step) % samples];
		if (f === runFlag) {
			run.push(at(tAt(step)));
			continue;
		}
		const cut = at(boundary(tAt(step - 1), runFlag, tAt(step)));
		run.push(cut);
		bucket(runFlag).push(run);
		run = [cut, at(tAt(step))];
		runFlag = f;
	}
	bucket(runFlag).push(run);
	return out;
}

const ellipse = (cx: number, cy: number, a: number, b: number) => (t: number): Vec2 => [cx + a * Math.cos(t), cy + b * Math.sin(t)];
const ring = (at: (t: number) => Vec2, n = 96): Vec2[] => Array.from({ length: n + 1 }, (_, i) => at((2 * Math.PI * i) / n));

export function drawRound(type: SolidType, p: Record<string, number>, cam: Camera): Drawing {
	const e = rad(cam.elevation);
	const [se, ce] = [Math.sin(e), Math.cos(e)];
	const d = emptyDrawing();
	const push = (c: { visible: Vec2[][]; hidden: Vec2[][] }) => {
		d.visible.push(...c.visible);
		d.hidden.push(...c.hidden);
	};
	const EPS = 1e-9;

	if (type === 'koule') {
		const r = p.r;
		const outline = ring((t) => [r * Math.cos(t), r * Math.sin(t)]);
		d.visible.push(outline);
		d.faces.push({ pts: outline, shade: 0.6, gradient: 'radial' });
		d.extent.push([-r, -r], [r, r]);
		// a circle of latitude z (the equator is z = 0) is seen where the sphere faces the viewer
		const latitude = (z: number) => {
			const rho = Math.sqrt(Math.max(0, r * r - z * z));
			return splitCurve(
				(t) => [rho * Math.cos(t), z * ce + rho * Math.sin(t) * se],
				(t) => -rho * Math.sin(t) * ce + z * se > EPS
			);
		};
		push(latitude(0));
		[p.z1, p.z2].forEach((z, i) => {
			if (z == null || Math.abs(z) >= r) return;
			push(latitude(z));
			const rho = Math.sqrt(r * r - z * z);
			const [from, to]: Vec2[] = [[0, z * ce], [rho, z * ce]];
			d.dims.push({ name: `rho${i + 1}`, pts: [from, to], dashed: true });
			d.marks[`rho${i + 1}`] = { at: mid2(from, to), dir: [0, 1] };
		});
		const tip: Vec2 = [r * Math.cos(rad(30)), r * Math.sin(rad(30))];
		d.dims.push({ name: 'r', pts: [[0, 0], tip], dashed: false });
		d.marks.r = { at: mid2([0, 0], tip), dir: [-0.5, 1] };
		return d;
	}

	// valec, kužel, komolý kužel: a base of radius r1 at the bottom, one of radius r2 on top (0 for the cone)
	const v = p.v;
	const r1 = type === 'komoly_kuzel' ? p.r1 : p.r;
	const r2 = type === 'valec' ? p.r : type === 'kuzel' ? 0 : p.r2;
	const top = v * ce;
	const [b1, b2] = [r1 * se, r2 * se];
	d.centre = [0, top / 2];
	d.extent.push([-r1, -b1], [r1, b1], [-r2, top - b2], [r2, top + b2], [0, top]);

	// The silhouette of the lateral surface: the two lines that touch both base ellipses. They come
	// from the apex of the (completed) cone — an ellipse is touched from a point on its axis at the
	// height y = b²/apex — and are vertical for a cylinder.
	let t1: Vec2 | null = null; // where the right line leaves the bottom ellipse
	let t2: Vec2 | null = null; // and where it leaves the top one
	if (Math.abs(r1 - r2) < 1e-9) {
		[t1, t2] = [[r1, 0], [r2, top]];
	} else {
		const apexY = (v * r1 * ce) / (r1 - r2);
		if (Math.abs(apexY) > b1 + EPS) {
			const yt = (b1 * b1) / apexY;
			const xt = r1 * Math.sqrt(Math.max(0, 1 - (b1 * b1) / (apexY * apexY)));
			t1 = [xt, yt];
			const lambda = r2 / r1; // the top ellipse is the bottom one shrunk about the apex
			t2 = [lambda * xt, apexY + lambda * (yt - apexY)];
		}
	}

	// The bottom base: the arc on the outline is seen, the rest is behind the body. The same test as
	// for a cone's surface normal, written in page coordinates: below the tangent points.
	push(splitCurve(ellipse(0, 0, r1, b1), (t) => (t1 ? b1 * Math.sin(t) <= t1[1] + EPS : true)));
	if (r2 > 0) d.visible.push(ring(ellipse(0, top, r2, b2)));

	const apex: Vec2 = [0, top];
	if (t1 && t2) {
		const right: Vec2[] = [t1, r2 === 0 ? apex : t2];
		const left: Vec2[] = right.map(([x, y]) => [-x, y] as Vec2);
		d.visible.push(right, left);
		d.faces.push({ pts: hull([...ring(ellipse(0, 0, r1, b1), 64), ...(r2 === 0 ? [apex] : ring(ellipse(0, top, r2, b2), 64))]), shade: 0.5, gradient: 'linear' });
		if (r2 > 0) d.faces.push({ pts: ring(ellipse(0, top, r2, b2), 64), shade: 0.85 });
		// the label of the slant sits beside the right line, on the outside of it
		const u = unit2(right[0], right[1]);
		d.marks.s = { at: mid2(right[0], right[1]), dir: [u[1], -u[0]] };
	} else {
		// seen from so high above that the base hides the apex: only the base is left
		d.faces.push({ pts: ring(ellipse(0, 0, r1, b1), 64), shade: 0.7 });
	}

	// dimensions: the height along the axis (inside the solid), the radii on the bases
	const line = (name: string, from: Vec2, to: Vec2, dashed: boolean, dir: Vec2) => {
		d.dims.push({ name, pts: [from, to], dashed });
		d.marks[name] = { at: mid2(from, to), dir };
	};
	line('v', [0, 0], [0, top], true, [1, 0]);
	if (type === 'valec') {
		line('r', [0, top], [r1, top], false, [0, 1]);
	} else if (type === 'kuzel') {
		line('r', [0, 0], [r1, 0], true, [0, -1]);
	} else {
		line('r1', [0, 0], [r1, 0], true, [0, -1]);
		line('r2', [0, top], [r2, top], false, [0, 1]);
	}
	return d;
}

/**
 * The smallest sphere round the solid: its middle and its radius. A figure that is turned keeps
 * its size from this, so it does not grow and shrink as the solid's outline changes.
 */
export function solidBounds(type: SolidType, p: Record<string, number>): { c: Vec3; R: number } {
	let pts: Vec3[];
	const poly = buildPoly(type, p);
	if (poly) pts = poly.verts;
	else if (type === 'koule') pts = [[p.r, 0, 0], [-p.r, 0, 0], [0, p.r, 0], [0, -p.r, 0], [0, 0, p.r], [0, 0, -p.r]];
	else {
		const [r1, r2] = type === 'valec' ? [p.r, p.r] : type === 'kuzel' ? [p.r, 0] : [p.r1, p.r2];
		pts = [[r1, 0, 0], [-r1, 0, 0], [0, r1, 0], [0, -r1, 0], [r2, 0, p.v], [-r2, 0, p.v], [0, r2, p.v], [0, -r2, p.v]];
	}
	const c: Vec3 = [0, 1, 2].map((i) => (Math.min(...pts.map((q) => q[i])) + Math.max(...pts.map((q) => q[i]))) / 2) as Vec3;
	return { c, R: Math.max(...pts.map((q) => Math.hypot(q[0] - c[0], q[1] - c[1], q[2] - c[2]))) || 1 };
}

export function drawSolid(type: SolidType, params: Record<string, number>, cam: Camera): Drawing {
	const poly = buildPoly(type, params);
	return poly ? drawPoly(poly, cam) : drawRound(type, params, cam);
}

/** the first parameter a solid needs and does not have (so a typo in the content fails the build) */
export function missingParam(type: SolidType, p: Record<string, number> | undefined): string | null {
	const need: Record<SolidType, string[]> = {
		kvadr: ['a', 'b', 'c'],
		krychle: ['a'],
		hranol: ['n', 'r', 'v'],
		jehlan: ['n', 'r', 'v'],
		valec: ['r', 'v'],
		kuzel: ['r', 'v'],
		koule: ['r'],
		komoly_jehlan: ['n', 'r1', 'r2', 'v'],
		komoly_kuzel: ['r1', 'r2', 'v'],
	};
	if (!need[type]) return `a known "type" (got "${type}")`;
	return need[type].find((k) => typeof p?.[k] !== 'number' || !isFinite(p[k])) ?? null;
}
