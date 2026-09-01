// Rehype plugin: turns "$latex$" (inline) and "$$latex$$" (block) into
// statically typeset markup at build time, using MathLive's own SSR static
// renderer (mathlive/ssr, already a dependency for the whiteboard's math
// field — no separate KaTeX/MathJax dependency or font set needed).
import { visit } from 'unist-util-visit';
import { fromHtmlIsomorphic } from 'hast-util-from-html-isomorphic';
import { convertLatexToMarkup } from 'mathlive/ssr';
import type { Root, RootContent, Text, Element } from 'hast';

// Block math first (greedy would eat past a legitimate inline "$...$" that
// follows on the same line, so block is non-greedy and tried before inline).
const BLOCK_RE = /\$\$([^\s][\s\S]*?[^\s]|[^\s])\$\$/g;
// Inline math: opening "$" not followed by whitespace/digit-run-that-looks-
// like-money, closing "$" not preceded by whitespace — the standard Pandoc
// heuristic, keeps plain "$5" (price-like) text from being misread as math.
const INLINE_RE = /\$([^\s$](?:[^$\n]*[^\s$])?)\$/g;

function mathToHast(latex: string, display: boolean): Element {
	const markup = convertLatexToMarkup(latex, {
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
	const value = node.value;
	if (!value.includes('$')) return null;

	const parts: RootContent[] = [];
	let cursor = 0;
	let matched = false;

	// Run block-math matching first over the whole string, then re-scan the
	// leftover plain-text segments for inline math — avoids "$$x$$" being
	// misread as an empty inline match ("$$") followed by stray "x$$".
	const withInline = (text: string) => {
		let last = 0;
		let m: RegExpExecArray | null;
		INLINE_RE.lastIndex = 0;
		while ((m = INLINE_RE.exec(text))) {
			matched = true;
			if (m.index > last) parts.push({ type: 'text', value: text.slice(last, m.index) });
			parts.push(mathToHast(m[1], false));
			last = m.index + m[0].length;
		}
		if (last < text.length) parts.push({ type: 'text', value: text.slice(last) });
	};

	let m: RegExpExecArray | null;
	BLOCK_RE.lastIndex = 0;
	while ((m = BLOCK_RE.exec(value))) {
		matched = true;
		if (m.index > cursor) withInline(value.slice(cursor, m.index));
		parts.push(mathToHast(m[1], true));
		cursor = m.index + m[0].length;
	}
	if (cursor < value.length) withInline(value.slice(cursor));

	return matched ? parts : null;
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
