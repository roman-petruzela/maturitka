// One place that turns LaTeX into MathLive's static markup — shared by rehype-math.ts (the
// formulas of every page) and the HTML renderers that typeset formulas themselves
// (formula-sheet-html.ts).
import { convertLatexToMarkup } from 'mathlive/ssr';

// MathLive has no \dots (it knows \ldots and \cdots), so every "1, 2, \dots"
// in the content rendered as a red error. amsmath's \dots picks the low or
// the centred version from context — centred next to an operator or a
// relation ("35+37+\dots+135", "a=b=\dots"), on the baseline otherwise
// ("1, 2, 3, \dots") — this does the same.
const OPERATOR_BEFORE = /(?:[+\-=<>:·×÷]|\\(?:cdot|times|div|pm|mp|le|ge|leq|geq|neq|approx))$/;
const OPERATOR_AFTER = /^(?:[+\-=<>:·×÷]|\\(?:cdot|times|div|pm|mp|le|ge|leq|geq|neq|approx))/;

export function fixDots(latex: string): string {
	return latex.replace(/\\dots(?![a-zA-Z])/g, (match, offset: number, whole: string) => {
		const before = whole.slice(0, offset).trimEnd();
		const after = whole.slice(offset + match.length).trimStart();
		return OPERATOR_BEFORE.test(before) || OPERATOR_AFTER.test(after) ? '\\cdots' : '\\ldots';
	});
}

/** The markup of one formula: `display` is TeX's display style, otherwise the inline one. */
export function latexToMarkup(latex: string, display: boolean): string {
	return convertLatexToMarkup(fixDots(latex), { defaultMode: display ? 'math' : 'inline-math' });
}
