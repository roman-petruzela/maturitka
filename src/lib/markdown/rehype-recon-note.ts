// Rehype plugin: "((text))" becomes a muted, non-italic inline note — used
// for "this wasn't preserved in the source" disclaimers. Plain markdown
// italics (*(text)*) were used for this at first, but on badly-damaged
// source files where nearly every sentence carries one, a whole paragraph
// of italic text becomes tiring to read; a quieter, differently-styled span
// keeps the disclaimer visible without competing with the actual problem
// text for attention. Mirrors rehype-spoiler.ts's text-splitting approach.
import { visit } from 'unist-util-visit';
import type { Root, RootContent, Text, Element } from 'hast';

const RECON_NOTE_RE = /\(\(([^()]+)\)\)/g;

function reconNoteToHast(text: string): Element {
	return {
		type: 'element',
		tagName: 'span',
		properties: { className: ['recon-note'] },
		children: [{ type: 'text', value: text }],
	};
}

function splitTextNode(node: Text): RootContent[] | null {
	const value = node.value;
	if (!value.includes('((')) return null;

	const parts: RootContent[] = [];
	let last = 0;
	let matched = false;
	let m: RegExpExecArray | null;
	RECON_NOTE_RE.lastIndex = 0;
	while ((m = RECON_NOTE_RE.exec(value))) {
		matched = true;
		if (m.index > last) parts.push({ type: 'text', value: value.slice(last, m.index) });
		parts.push(reconNoteToHast(m[1]));
		last = m.index + m[0].length;
	}
	if (!matched) return null;
	if (last < value.length) parts.push({ type: 'text', value: value.slice(last) });
	return parts;
}

export function rehypeReconNote() {
	return (tree: Root) => {
		visit(tree, 'element', (node: Element) => {
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
