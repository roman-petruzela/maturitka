// Rehype plugin: turns "$latex$" (inline) and "$$latex$$" (block) into
// statically typeset markup at build time, using MathLive's own SSR static
// renderer (mathlive/ssr, already a dependency for the whiteboard's math
// field — no separate KaTeX/MathJax dependency or font set needed).
//
// What counts as a formula is decided by math-segments.ts (shared with
// remark-math-raw.ts, which puts the original LaTeX back before this runs).
import { visit } from 'unist-util-visit';
import { fromHtmlIsomorphic } from 'hast-util-from-html-isomorphic';
import { convertLatexToMarkup } from 'mathlive/ssr';
import type { Root, RootContent, Text, Element } from 'hast';
import { segmentMath } from './math-segments';

// MathLive has no \dots (it knows \ldots and \cdots), so every "1, 2, \dots"
// in the content rendered as a red error. amsmath's \dots picks the low or
// the centred version from context — centred next to an operator or a
// relation ("35+37+\dots+135", "a=b=\dots"), on the baseline otherwise
// ("1, 2, 3, \dots") — this does the same.
const OPERATOR_BEFORE = /(?:[+\-=<>:·×÷]|\\(?:cdot|times|div|pm|mp|le|ge|leq|geq|neq|approx))$/;
const OPERATOR_AFTER = /^(?:[+\-=<>:·×÷]|\\(?:cdot|times|div|pm|mp|le|ge|leq|geq|neq|approx))/;

function fixDots(latex: string): string {
	return latex.replace(/\\dots(?![a-zA-Z])/g, (match, offset: number, whole: string) => {
		const before = whole.slice(0, offset).trimEnd();
		const after = whole.slice(offset + match.length).trimStart();
		return OPERATOR_BEFORE.test(before) || OPERATOR_AFTER.test(after) ? '\\cdots' : '\\ldots';
	});
}

function mathToHast(latex: string, display: boolean): Element {
	const markup = convertLatexToMarkup(fixDots(latex), {
		defaultMode: display ? 'math' : 'inline-math',
	});
	const fragment = fromHtmlIsomorphic(markup, { fragment: true });
	return {
		type: 'element',
		tagName: 'span',
		properties: { className: [display ? 'math-display' : 'math-inline'] },
		children: fragment.children as Element['children'],
	};
}

function splitTextNode(node: Text): RootContent[] | null {
	if (!node.value.includes('$')) return null;
	const segments = segmentMath(node.value);
	if (!segments.some((s) => s.type === 'math')) return null;
	return segments.map((seg) =>
		seg.type === 'math' ? mathToHast(seg.value, !!seg.display) : ({ type: 'text', value: seg.value } as Text)
	);
}

export function rehypeMath() {
	return (tree: Root) => {
		visit(tree, 'element', (node: Element) => {
			// skip code/pre — formulas inside code blocks are literal, not math
			if (node.tagName === 'code' || node.tagName === 'pre') return;
			const children: RootContent[] = [];
			let changed = false;
			for (const child of node.children) {
				if (child.type === 'text') {
					const replacement = splitTextNode(child);
					if (replacement) {
						changed = true;
						children.push(...replacement);
						continue;
					}
				}
				children.push(child);
			}
			if (changed) node.children = children as Element['children'];
		});
	};
}
