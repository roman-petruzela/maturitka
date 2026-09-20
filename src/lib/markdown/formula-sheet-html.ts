// Build-time renderer for a ```formulas fenced block (see remark-formulas.ts): a formula sheet.
// Every formula gets a card of its own — a small label above it, the formula itself set in
// display style, an optional note below — and the cards lie in a grid (.formula-sheet in
// global.css). Meant for reference pages, where formulas have to read as formulas and not as a
// line of text with a symbol in it.
import { escapeAttr } from './svg-utils';
import { latexToMarkup } from './math-markup';
import { segmentMath } from './math-segments';
import { visualWidth, alignedRows } from './formula-breaks';

export interface FormulaItem {
	/** what the formula is called; may contain $inline math$ */
	label?: string;
	/** the formula (LaTeX, no dollar signs); an item without one is a text-only card */
	tex?: string;
	/** a condition or remark under the formula; may contain $inline math$ */
	note?: string;
}

export interface FormulaSection {
	/** a small heading over the cards of this section ("Čtverec") */
	title?: string;
	items: FormulaItem[];
}

export interface FormulaSheetSpec {
	sections?: FormulaSection[];
	/** shorthand for a single untitled section */
	items?: FormulaItem[];
}

/**
 * A formula wider than this (formula-breaks.ts's visualWidth) takes a whole row of the grid
 * instead of half of it. At the size the formulas are set (1.25rem) one unit is ~14px, and half
 * a row in the 40rem reading column leaves ~310px — about 21 units, fewer for a formula heavy with
 * roots and brackets (the volume of a frustum, 18.8 units, measured 321px). Measured, not guessed:
 * at 26 a sum of three equal areas ("½ab sin γ = ½ac sin β = …", 24.7) was cut off.
 */
const WIDE_UNITS = 18;

// text with $inline math$ in it, as HTML
function richText(s: string): string {
	return segmentMath(s)
		.map((seg) =>
			seg.type === 'text' ? escapeAttr(seg.value) : `<span class="math-inline">${latexToMarkup(seg.value, false)}</span>`
		)
		.join('');
}

function card(item: FormulaItem, where: string): string {
	if (!item || (!item.tex?.trim() && !item.note?.trim())) throw new Error(`${where}: an item needs a "tex" or a "note"`);
	const label = item.label ? `<span class="formula-label">${richText(item.label)}</span>` : '';
	const note = item.note ? `<span class="formula-note">${richText(item.note)}</span>` : '';
	const tex = item.tex?.trim();
	if (!tex) return `<div class="formula-card is-text">${label}${note}</div>`;
	const wide = visualWidth(tex) > WIDE_UNITS;
	const formula = `<span class="math-display">${latexToMarkup(alignedRows(tex) ?? tex, true)}</span>`;
	return `<div class="formula-card${wide ? ' is-wide' : ''}">${label}${formula}${note}</div>`;
}

export function renderFormulaSheetHtml(spec: FormulaSheetSpec): string {
	const sections: FormulaSection[] = spec.sections ?? (spec.items ? [{ items: spec.items }] : []);
	if (sections.length === 0 || sections.some((s) => !Array.isArray(s.items) || s.items.length === 0)) {
		throw new Error('"sections" (or "items") must hold at least one item each');
	}
	const parts = sections.flatMap((section, i) => [
		section.title ? `<p class="formula-group-title">${richText(section.title)}</p>` : '',
		...section.items.map((item, j) => card(item, `section ${i + 1}, item ${j + 1}`)),
	]);
	return `<div class="formula-sheet">${parts.join('')}</div>`;
}
