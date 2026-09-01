// Rehype plugin: Discord-style "||hidden text||" becomes a click-to-reveal
// span. Toggling is handled by a single delegated listener in BaseLayout.astro
// (see .spoiler / .spoiler.is-revealed in global.css).
import { visit } from 'unist-util-visit';
import type { Root, RootContent, Text, Element } from 'hast';

const SPOILER_RE = /\|\|([^\s|](?:[^|\n]*[^\s|])?)\|\|/g;

function spoilerToHast(text: string): Element {
	return {
		type: 'element',
		tagName: 'span',
		properties: {
			className: ['spoiler'],
			tabIndex: 0,
			role: 'button',
			ariaLabel: 'Skryté – klikněte pro zobrazení',
		},
		children: [{ type: 'text', value: text }],
	};
}

function splitTextNode(node: Text): RootContent[] | null {
	const value = node.value;
	if (!value.includes('||')) return null;

	const parts: RootContent[] = [];
	let last = 0;
	let matched = false;
	let m: RegExpExecArray | null;
	SPOILER_RE.lastIndex = 0;
	while ((m = SPOILER_RE.exec(value))) {
		matched = true;
		if (m.index > last) parts.push({ type: 'text', value: value.slice(last, m.index) });
		parts.push(spoilerToHast(m[1]));
		last = m.index + m[0].length;
	}
	if (!matched) return null;
	if (last < value.length) parts.push({ type: 'text', value: value.slice(last) });
	return parts;
}

export function rehypeSpoiler() {
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
