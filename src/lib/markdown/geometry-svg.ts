// Build-time SVG renderer for 2D geometric figures (planimetrie): named
// points, segments, circles and angle markers, auto-scaled to fit the
// canvas with a single uniform scale (so shapes stay geometrically
// correct — see graph-svg.ts's circle-aspect-ratio fix for why that
// matters). Used via a ```geometry fenced block, mirroring ```graph.
//
// Content authors write, e.g.:
//
//     ```geometry
//     {
//       "points": { "A": [0, 0], "B": [4, 0], "C": [1, 3] },
//       "segments": [{ "from": "A", "to": "B" }, { "from": "B", "to": "C" }, { "from": "C", "to": "A" }],
//       "angles": [{ "at": "A", "from": "B", "to": "C", "label": "α" }],
//       "title": "Trojúhelník ABC"
//     }
//     ```
import { fmt, escapeAttr, wrapSpoiler } from './svg-utils';

export interface GeometrySpec {
	points: Record<string, [number, number]>;
	// point names that participate in segments/angles/circles but shouldn't
	// get their own drawn dot + name label — e.g. the far ends of a
	// construction line (a parallel drawn wide for clarity, a transversal)
	// where labelling every endpoint "A1"/"A2" would just be clutter
	hiddenPoints?: string[];
	segments?: { from: string; to: string; label?: string; dashed?: boolean }[];
	circles?: { center: string; radius: number; label?: string; dashed?: boolean }[];
	angles?: { at: string; from: string; to: string; label?: string; rightAngle?: boolean }[];
	labels?: { at: [number, number]; text: string }[];
	width?: number;
	height?: number;
	title?: string;
	spoiler?: boolean;
	float?: 'left' | 'right';
}

type Vec2 = [number, number];

function sub(a: Vec2, b: Vec2): Vec2 {
	return [a[0] - b[0], a[1] - b[1]];
}

function norm(v: Vec2): Vec2 {
	const len = Math.hypot(v[0], v[1]) || 1;
	return [v[0] / len, v[1] / len];
}

export function renderGeometrySvg(spec: GeometrySpec): string {
	const { width = 360, height = 320, title } = spec;
	const PAD = 36;
	const names = Object.keys(spec.points);
	if (names.length === 0) throw new Error('geometry: at least one point is required');

	const xs = names.map((n) => spec.points[n][0]);
	const ys = names.map((n) => spec.points[n][1]);
	for (const c of spec.circles ?? []) {
		const [cx, cy] = spec.points[c.center];
		xs.push(cx - c.radius, cx + c.radius);
		ys.push(cy - c.radius, cy + c.radius);
	}
	const xMin = Math.min(...xs);
	const xMax = Math.max(...xs);
	const yMin = Math.min(...ys);
	const yMax = Math.max(...ys);
	const xSpan = xMax - xMin || 1;
	const ySpan = yMax - yMin || 1;

	const innerW = width - PAD * 2;
	const innerH = height - PAD * 2;
	// same "one uniform scale, centered" approach as graph-svg.ts's
	// parametric mode — geometric figures must not get stretched
	const scale = Math.min(innerW / xSpan, innerH / ySpan);
	const usedW = xSpan * scale;
	const usedH = ySpan * scale;
	const offsetX = PAD + (innerW - usedW) / 2;
	const offsetY = PAD + (innerH - usedH) / 2;
	// project math coords (y up) to screen coords (y down)
	const proj = ([x, y]: Vec2): Vec2 => [offsetX + (x - xMin) * scale, offsetY + usedH - (y - yMin) * scale];

	const screen: Record<string, Vec2> = {};
	for (const n of names) screen[n] = proj(spec.points[n]);

	const centroid: Vec2 = [
		names.reduce((s, n) => s + screen[n][0], 0) / names.length,
		names.reduce((s, n) => s + screen[n][1], 0) / names.length,
	];

	const parts: string[] = [];
	const floatClass = spec.float ? ` graph-plot--float-${spec.float}` : '';
	parts.push(
		`<figure class="graph-plot geometry-plot${spec.spoiler ? '' : floatClass}"><svg viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-label="${escapeAttr(title ?? 'Geometrický obrazec')}">`
	);

	for (const c of spec.circles ?? []) {
		const [cx, cy] = proj(spec.points[c.center]);
		const r = c.radius * scale;
		parts.push(
			`<circle cx="${fmt(cx)}" cy="${fmt(cy)}" r="${fmt(r)}" class="geom-circle"${c.dashed ? ' stroke-dasharray="5,4"' : ''} />`
		);
		if (c.label) parts.push(`<text x="${fmt(cx)}" y="${fmt(cy - r - 6)}" class="geom-label" text-anchor="middle">${escapeAttr(c.label)}</text>`);
	}

	for (const s of spec.segments ?? []) {
		const [x1, y1] = screen[s.from];
		const [x2, y2] = screen[s.to];
		parts.push(`<line x1="${fmt(x1)}" y1="${fmt(y1)}" x2="${fmt(x2)}" y2="${fmt(y2)}" class="geom-segment"${s.dashed ? ' stroke-dasharray="5,4"' : ''} />`);
		if (s.label) {
			const mx = (x1 + x2) / 2;
			const my = (y1 + y2) / 2;
			// nudge the label away from the figure's centroid so it doesn't
			// land on top of the segment or overlap the shape's interior
			const away = norm(sub([mx, my], centroid));
			parts.push(
				`<text x="${fmt(mx + away[0] * 12)}" y="${fmt(my + away[1] * 12)}" class="geom-label" text-anchor="middle">${escapeAttr(s.label)}</text>`
			);
		}
	}

	for (const a of spec.angles ?? []) {
		const V = screen[a.at];
		const F = screen[a.from];
		const T = screen[a.to];
		const uF = norm(sub(F, V));
		const uT = norm(sub(T, V));
		if (a.rightAngle) {
			const s = 13;
			const p1: Vec2 = [V[0] + uF[0] * s, V[1] + uF[1] * s];
			const p2: Vec2 = [V[0] + uF[0] * s + uT[0] * s, V[1] + uF[1] * s + uT[1] * s];
			const p3: Vec2 = [V[0] + uT[0] * s, V[1] + uT[1] * s];
			parts.push(`<path d="M${fmt(p1[0])},${fmt(p1[1])} L${fmt(p2[0])},${fmt(p2[1])} L${fmt(p3[0])},${fmt(p3[1])}" class="geom-right-angle" fill="none" />`);
		} else {
			const r = 22;
			const ang1 = Math.atan2(uF[1], uF[0]);
			let ang2 = Math.atan2(uT[1], uT[0]);
			let diff = ang2 - ang1;
			while (diff > Math.PI) diff -= 2 * Math.PI;
			while (diff < -Math.PI) diff += 2 * Math.PI;
			ang2 = ang1 + diff;
			const sweepFlag = diff > 0 ? 1 : 0;
			const p1: Vec2 = [V[0] + Math.cos(ang1) * r, V[1] + Math.sin(ang1) * r];
			const p2: Vec2 = [V[0] + Math.cos(ang2) * r, V[1] + Math.sin(ang2) * r];
			parts.push(
				`<path d="M${fmt(p1[0])},${fmt(p1[1])} A${r},${r} 0 0,${sweepFlag} ${fmt(p2[0])},${fmt(p2[1])}" class="geom-angle-arc" fill="none" />`
			);
			if (a.label) {
				const midAng = ang1 + diff / 2;
				const lx = V[0] + Math.cos(midAng) * (r + 14);
				const ly = V[1] + Math.sin(midAng) * (r + 14);
				parts.push(`<text x="${fmt(lx)}" y="${fmt(ly)}" class="geom-label" text-anchor="middle">${escapeAttr(a.label)}</text>`);
			}
		}
	}

	for (const n of names) {
		const [px, py] = screen[n];
		parts.push(`<circle cx="${fmt(px)}" cy="${fmt(py)}" r="3" class="geom-point" />`);
		const away = norm(sub([px, py], centroid));
		parts.push(
			`<text x="${fmt(px + away[0] * 14)}" y="${fmt(py + away[1] * 14 + 4)}" class="geom-point-label" text-anchor="middle">${escapeAttr(n)}</text>`
		);
	}

	for (const l of spec.labels ?? []) {
		const [x, y] = proj(l.at);
		parts.push(`<text x="${fmt(x)}" y="${fmt(y)}" class="geom-label" text-anchor="middle">${escapeAttr(l.text)}</text>`);
	}

	parts.push(`</svg>`);
	if (title) parts.push(`<figcaption>${escapeAttr(title)}</figcaption>`);
	parts.push(`</figure>`);

	return wrapSpoiler(parts.join(''), spec.spoiler, floatClass);
}
