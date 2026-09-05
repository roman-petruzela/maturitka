// Shared build-time SVG function/curve plotter. Two callers:
//  - GraphPlot.astro (real JS closures passed as props from .astro pages)
//  - rehype-graph.ts (content-authored ```graph fenced blocks in plain .md —
//    MDX was tried first for this but LaTeX's constant use of "{...}" in
//    prose collides with MDX's own "{}" = JS-expression syntax and breaks
//    the build on every `\frac{a}{b}`; plain markdown doesn't have that
//    problem, so graphs are authored as data via `compileExpr()` below
//    instead of as embedded JSX)
export interface GraphSpec {
	fn?: (x: number) => number;
	domain?: [number, number];
	parametric?: (t: number) => [number, number];
	tDomain?: [number, number];
	yDomain?: [number, number];
	width?: number;
	height?: number;
	samples?: number;
	title?: string;
	points?: { x: number; y: number; label?: string }[];
	xLabel?: string;
	yLabel?: string;
	// wraps the figure in the same click-to-reveal treatment as inline
	// "||spoiler||" text — for exercise graphs that would otherwise give the
	// answer away before the reader has tried the problem themselves
	spoiler?: boolean;
	// floats the figure so following content (e.g. a "Výsledek:" list right
	// after the ```graph block in the source) wraps beside it instead of
	// stacking underneath — see article.topic h2/h3 { clear: both } in
	// global.css, which stops a tall floated graph from bleeding into the
	// next section if the wrapped content is shorter than the graph
	float?: 'right' | 'left';
}

// Minimal, trusted-content-only math-expression compiler: "x^2 - 4*x + 3"
// -> (x) => x**2 - 4*x + 3. Only ever fed strings written by hand in this
// repo's own content files (never user input), so a light regex rewrite
// into a `new Function` body is an appropriate amount of ceremony — no need
// for a hand-rolled recursive-descent parser here.
export function compileExpr(expr: string, varName: 'x' | 't' = 'x'): (v: number) => number {
	const js = expr
		.replace(/\^/g, '**')
		.replace(/\b(sin|cos|tan|asin|acos|atan|sqrt|log|exp|abs|floor|ceil|round|sign|cbrt)\(/g, 'Math.$1(')
		.replace(/\bln\(/g, 'Math.log(')
		.replace(/\bpi\b/gi, 'Math.PI')
		.replace(/\be\b/g, 'Math.E');
	// eslint-disable-next-line no-new-func
	const fn = new Function(varName, `"use strict"; return (${js});`) as (v: number) => number;
	return fn;
}

export function compileParametric(expr: string): (t: number) => [number, number] {
	const [xExpr, yExpr] = expr.split(',').map((s) => s.trim());
	const fx = compileExpr(xExpr, 't');
	const fy = compileExpr(yExpr, 't');
	return (t: number) => [fx(t), fy(t)];
}

function niceStep(rawStep: number): number {
	const mag = Math.pow(10, Math.floor(Math.log10(rawStep)));
	const norm = rawStep / mag;
	const step = norm < 1.5 ? 1 : norm < 3.5 ? 2 : norm < 7.5 ? 5 : 10;
	return step * mag;
}

function ticksFor([lo, hi]: [number, number], targetCount = 6): number[] {
	if (hi <= lo) return [lo];
	const step = niceStep((hi - lo) / targetCount);
	const start = Math.ceil(lo / step) * step;
	const out: number[] = [];
	for (let v = start; v <= hi + step * 1e-9; v += step) out.push(Math.round(v / step) * step);
	return out;
}

function fmt(n: number): string {
	const r = Math.round(n * 1000) / 1000;
	return Object.is(r, -0) ? '0' : String(r);
}

function escapeAttr(s: string): string {
	return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

export function renderGraphSvg(spec: GraphSpec): string {
	const { width = 480, height = 320, samples = 400, title, points = [], xLabel, yLabel } = spec;
	const PAD = 34;

	let rawPoints: { x: number; y: number }[][] = [];
	let xDomain: [number, number];
	let yDomain: [number, number];

	if (spec.parametric) {
		const { parametric, tDomain } = spec;
		if (!tDomain) throw new Error('graph: parametric mode requires tDomain');
		const pts: { x: number; y: number }[] = [];
		for (let i = 0; i <= samples; i++) {
			const t = tDomain[0] + ((tDomain[1] - tDomain[0]) * i) / samples;
			const [x, y] = parametric(t);
			if (Number.isFinite(x) && Number.isFinite(y)) pts.push({ x, y });
		}
		rawPoints = [pts];
		const xs = pts.map((p) => p.x);
		const ys = pts.map((p) => p.y);
		xDomain = spec.domain ?? [Math.min(...xs), Math.max(...xs)];
		yDomain = spec.yDomain ?? [Math.min(...ys), Math.max(...ys)];
		const xSpan = xDomain[1] - xDomain[0];
		const ySpan = yDomain[1] - yDomain[0];
		if (xSpan > ySpan) {
			const extra = (xSpan - ySpan) / 2;
			yDomain = [yDomain[0] - extra, yDomain[1] + extra];
		} else if (ySpan > xSpan) {
			const extra = (ySpan - xSpan) / 2;
			xDomain = [xDomain[0] - extra, xDomain[1] + extra];
		}
	} else if (!spec.fn) {
		// points-only mode: no curve, just markers on a labeled coordinate grid
		// (e.g. plotting a handful of points in a "read the coordinates" exercise)
		if (!spec.domain || !spec.yDomain) throw new Error('graph: points-only mode requires domain + yDomain');
		xDomain = spec.domain;
		yDomain = spec.yDomain;
	} else {
		if (!spec.fn || !spec.domain) throw new Error('graph: function mode requires fn + domain');
		const { fn, domain } = spec;
		xDomain = domain;
		const raw: (number | null)[] = [];
		for (let i = 0; i <= samples; i++) {
			const x = domain[0] + ((domain[1] - domain[0]) * i) / samples;
			const y = fn(x);
			raw.push(Number.isFinite(y) ? y : null);
		}
		const finiteYs = raw.filter((y): y is number => y !== null);
		let [yMin, yMax] = spec.yDomain ?? [Math.min(...finiteYs), Math.max(...finiteYs)];
		if (!spec.yDomain) {
			const padding = (yMax - yMin) * 0.1 || 1;
			yMin -= padding;
			yMax += padding;
		}
		yDomain = [yMin, yMax];
		const jumpThreshold = (yMax - yMin) * 0.6;
		let current: { x: number; y: number }[] = [];
		let prevY: number | null = null;
		for (let i = 0; i <= samples; i++) {
			const x = domain[0] + ((domain[1] - domain[0]) * i) / samples;
			const y = raw[i];
			if (y === null || (prevY !== null && Math.abs(y - prevY) > jumpThreshold)) {
				if (current.length > 1) rawPoints.push(current);
				current = [];
			}
			if (y !== null) current.push({ x, y });
			prevY = y;
		}
		if (current.length > 1) rawPoints.push(current);
	}

	const innerW = width - PAD * 2;
	const innerH = height - PAD * 2;
	const sx = (x: number) => PAD + ((x - xDomain[0]) / (xDomain[1] - xDomain[0])) * innerW;
	const sy = (y: number) => PAD + innerH - ((y - yDomain[0]) / (yDomain[1] - yDomain[0])) * innerH;

	const pathD = rawPoints
		.map((seg) => seg.map((p, i) => `${i === 0 ? 'M' : 'L'}${sx(p.x).toFixed(2)},${sy(p.y).toFixed(2)}`).join(' '))
		.join(' ');

	const xTicks = ticksFor(xDomain).filter((t) => t !== 0);
	const yTicks = ticksFor(yDomain).filter((t) => t !== 0);
	const showXAxis = yDomain[0] <= 0 && yDomain[1] >= 0;
	const showYAxis = xDomain[0] <= 0 && xDomain[1] >= 0;
	const xAxisY = sy(0);
	const yAxisX = sx(0);

	const floatClass = spec.float ? ` graph-plot--float-${spec.float}` : '';
	const parts: string[] = [];
	if (spec.spoiler) {
		parts.push(
			`<div class="spoiler-block${floatClass}" tabindex="0" role="button" aria-label="Skryté – klikněte pro zobrazení">`
		);
	}
	parts.push(`<figure class="graph-plot${spec.spoiler ? '' : floatClass}"><svg viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-label="${escapeAttr(title ?? 'Graf funkce')}">`);
	for (const t of xTicks) parts.push(`<line x1="${sx(t)}" y1="${PAD}" x2="${sx(t)}" y2="${height - PAD}" class="grid-line" />`);
	for (const t of yTicks) parts.push(`<line x1="${PAD}" y1="${sy(t)}" x2="${width - PAD}" y2="${sy(t)}" class="grid-line" />`);
	if (showXAxis) parts.push(`<line x1="${PAD}" y1="${xAxisY}" x2="${width - PAD}" y2="${xAxisY}" class="axis-line" />`);
	if (showYAxis) parts.push(`<line x1="${yAxisX}" y1="${PAD}" x2="${yAxisX}" y2="${height - PAD}" class="axis-line" />`);
	if (showXAxis) for (const t of xTicks) parts.push(`<text x="${sx(t)}" y="${xAxisY + 14}" class="tick-label" text-anchor="middle">${fmt(t)}</text>`);
	if (showYAxis) for (const t of yTicks) parts.push(`<text x="${yAxisX - 6}" y="${sy(t) + 4}" class="tick-label" text-anchor="end">${fmt(t)}</text>`);
	if (showXAxis || showYAxis) {
		parts.push(`<text x="${showYAxis ? yAxisX - 6 : PAD}" y="${(showXAxis ? xAxisY : height - PAD) + 14}" class="tick-label" text-anchor="end">0</text>`);
	}
	if (xLabel) parts.push(`<text x="${width - PAD}" y="${(showXAxis ? xAxisY : height - PAD) - 8}" class="axis-label" text-anchor="end">${escapeAttr(xLabel)}</text>`);
	if (yLabel) parts.push(`<text x="${(showYAxis ? yAxisX : PAD) + 8}" y="${PAD + 4}" class="axis-label" text-anchor="start">${escapeAttr(yLabel)}</text>`);
	parts.push(`<path d="${pathD}" class="curve" fill="none" />`);
	for (const p of points) {
		parts.push(`<circle cx="${sx(p.x)}" cy="${sy(p.y)}" r="3.5" class="marker" />`);
		if (p.label) parts.push(`<text x="${sx(p.x) + 6}" y="${sy(p.y) - 6}" class="marker-label">${escapeAttr(p.label)}</text>`);
	}
	parts.push(`</svg>`);
	if (title) parts.push(`<figcaption>${escapeAttr(title)}</figcaption>`);
	parts.push(`</figure>`);
	if (spec.spoiler) {
		parts.push(
			`<div class="spoiler-block-overlay"><span class="spoiler-block-label">Klikni pro zobrazení grafu</span></div></div>`
		);
	}
	return parts.join('');
}
