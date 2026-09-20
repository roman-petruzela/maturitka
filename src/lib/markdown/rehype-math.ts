// Rehype plugin: turns "$latex$" (inline) and "$$latex$$" (block) into
// statically typeset markup at build time, using MathLive's own SSR static
// renderer (mathlive/ssr, already a dependency for the whiteboard's math
// field — no separate KaTeX/MathJax dependency or font set needed).
//
// What counts as a formula is decided by math-segments.ts (shared with
// remark-protect-math.ts, which puts the original LaTeX back before this runs).
// Long derivations ("A \implies B \implies C …") are laid out in several rows / boxes
// instead of one unbreakable one — see formula-breaks.ts.
import { visit } from 'unist-util-visit';
import { fromHtmlIsomorphic } from 'hast-util-from-html-isomorphic';
import type { Root, RootContent, Text, Element } from 'hast';
import { segmentMath } from './math-segments';
import { inlineSegments, alignedRows } from './formula-breaks';
import { latexToMarkup } from './math-markup';

function mathToHast(latex: string, display: boolean): Element {
	const markup = latexToMarkup(latex, display);
	const fragment = fromHtmlIsomorphic(markup, { fragment: true });
	return {
		type: 'element',
		tagName: 'span',
		properties: { className: [display ? 'math-display' : 'math-inline'] },
		children: fragment.children as Element['children'],
	};
}

// One formula as one or more nodes. A long chain of steps becomes an aligned block (display)
// or several inline boxes with ordinary spaces between them (inline) — the spaces are
// where a paragraph can wrap.
function mathNodes(latex: string, display: boolean): RootContent[] {
	if (display) return [mathToHast(alignedRows(latex) ?? latex, true)];
	const parts = inlineSegments(latex);
	if (!parts) return [mathToHast(latex, false)];
	const out: RootContent[] = [];
	parts.forEach((part, i) => {
		if (i > 0) out.push({ type: 'text', value: ' ' } as Text);
		out.push(mathToHast(part, false));
	});
	return out;
}

function splitTextNode(node: Text): RootContent[] | null {
	if (!node.value.includes('$')) return null;
	const segments = segmentMath(node.value);
	if (!segments.some((s) => s.type === 'math')) return null;
	return segments.flatMap((seg): RootContent[] =>
		seg.type === 'math' ? mathNodes(seg.value, !!seg.display) : [{ type: 'text', value: seg.value } as Text]
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
