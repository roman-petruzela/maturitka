// Shared helpers for the build-time SVG renderers (graph-svg.ts,
// geometry-svg.ts, solid-svg.ts) — kept tiny and dependency-free since
// they run at build time for every ```graph/```geometry/```solid block.

export function fmt(n: number): string {
	const r = Math.round(n * 1000) / 1000;
	return Object.is(r, -0) ? '0' : String(r);
}

export function escapeAttr(s: string): string {
	return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

// Renders label text as *content* for an SVG <text> element (not an
// attribute — no surrounding quotes to escape). "v_a", "S_p1", "ρ_2" etc.
// are content-authoring shorthand for a subscript: this turns the part
// after the first "_" into an actual (smaller, baseline-shifted) <tspan>
// instead of leaving a literal underscore in the rendered diagram. The
// subscript itself only eats letters/digits (Unicode-aware, so "úseč"
// counts) — anything after that (e.g. the " = 9" in "v_c = 9") continues
// as normal-sized trailing text instead of being swallowed into the <tspan>.
export function labelTspans(s: string): string {
	const m = /^([^_]*)_([\p{L}\p{N}]+)(.*)$/u.exec(s);
	if (!m) return escapeAttr(s);
	const [, main, sub, rest] = m;
	return `${escapeAttr(main)}<tspan baseline-shift="sub" font-size="0.7em">${escapeAttr(sub)}</tspan>${escapeAttr(rest)}`;
}

// Wraps rendered figure markup with the same click-to-reveal treatment as
// inline "||spoiler||" text (see rehype-spoiler.ts / .spoiler-block in
// global.css) — shared by every figure type that wants a hideable answer.
export function wrapSpoiler(figureHtml: string, spoiler: boolean | undefined, floatClass: string): string {
	if (!spoiler) return figureHtml;
	return (
		`<div class="spoiler-block${floatClass}" tabindex="0" role="button" aria-label="Skryté – klikněte pro zobrazení">` +
		figureHtml +
		`<div class="spoiler-block-overlay"><span class="spoiler-block-label">Klikni pro zobrazení</span></div></div>`
	);
}
