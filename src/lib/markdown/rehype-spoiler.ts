// Rehype plugin: Discord-style "||hidden text||" becomes a click-to-reveal
// span. Toggling is handled by a single delegated listener in BaseLayout.astro
// (see .spoiler / .spoiler.is-revealed in global.css).
import { visit, SKIP } from 'unist-util-visit';
import type { Root, RootContent, Text, Element } from 'hast';

// rehype-math.ts renders `$...$`/`$$...$$` into these spans *before* this
// plugin runs (see the rehypePlugins order in astro.config.mjs) — a
// rendered formula can legitimately contain a literal "((...))"-shaped text
// node (e.g. an unescaped `$((12))$`), which must never be reinterpreted as
// spoiler syntax and mangled.
function isMathSpan(node: Element): boolean {
	const classNames = node.properties?.className;
	return Array.isArray(classNames) && (classNames.includes('math-inline') || classNames.includes('math-display'));
}

// Content can legitimately contain single "|" characters (absolute-value
// bars like |x-3|=5 are common in math spoilers) — only a literal "||" ends
// the spoiler, so the middle group matches lazily up to the next "||"
// rather than excluding "|" outright like an earlier version of this regex
// did (that version silently broke on any spoiler containing |...|).
const SPOILER_RE = /\|\|(\S(?:[^\n]*?\S)?)\|\|/g;

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
			if (node.tagName === 'code' || node.tagName === 'pre' || isMathSpan(node)) return SKIP;
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
