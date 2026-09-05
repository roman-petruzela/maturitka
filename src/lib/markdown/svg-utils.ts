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
