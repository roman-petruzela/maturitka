// Rehype plugin: Discord-style "||hidden text||" becomes a click-to-reveal
// span. Toggling is handled by a single delegated listener in BaseLayout.astro
// (see .spoiler / .spoiler.is-revealed in global.css).
import { visit, SKIP } from 'unist-util-visit';
import type { Root, RootContent, Element } from 'hast';

// rehype-math.ts renders `$...$`/`$$...$$` into element spans *before* this
// plugin runs (see the rehypePlugins order in astro.config.mjs). That means
// a spoiler wrapping a formula — `||$\frac{a}{b}$||`, so the rendered
// fraction itself stays hidden until clicked — arrives here as three
// *siblings*: a text node ending in "||", a math-inline/math-display
// element, and a text node starting with "||". Matching "||...||" only
// within a single text node (an earlier version of this plugin did exactly
// that) can never see this case, since the closing marker lives in a
// different node than the opening one.
//
// To handle that without hand-rolling cross-node index bookkeeping, this
// walks a parent's children once, concatenating every text node's value
// into one buffer and standing in a placeholder for each non-text child (so
// element nodes — math spans, but anything else too — can never
// accidentally contribute characters that collide with "|"). The existing
// single-string regex then finds spoiler spans in that buffer as if it were
// all one text node, and the result is rebuilt by splitting each piece back
// on the placeholders and re-inserting the real nodes.
//
// Placeholders are delimited with Private Use Area code points (U+E000 /
// U+E001) specifically so they can never collide with real digits in the
// surrounding text — math content is full of literal numbers, and a bare
// "0"/"1" placeholder sitting directly next to one (e.g. a text node "123"
// right after node index "0") would otherwise merge into a single "0123"
// match under a plain \d+ pattern with no delimiter around it.
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

const PH_OPEN = String.fromCharCode(0xe000);
const PH_CLOSE = String.fromCharCode(0xe001);
const PLACEHOLDER_RE = new RegExp(`${PH_OPEN}(\\d+)${PH_CLOSE}`, 'g');

function spoilerToHast(children: RootContent[]): Element {
	return {
		type: 'element',
		tagName: 'span',
		properties: {
			className: ['spoiler'],
			tabIndex: 0,
			role: 'button',
			ariaLabel: 'Skryté – klikněte pro zobrazení',
		},
		children: children as Element['children'],
	};
}

// Splits a plain string (already extracted from the placeholder-bearing
// buffer) back into text nodes and the original element nodes it stood in
// for, in order.
function expand(str: string, nodes: RootContent[]): RootContent[] {
	const out: RootContent[] = [];
	let last = 0;
	let m: RegExpExecArray | null;
	PLACEHOLDER_RE.lastIndex = 0;
	while ((m = PLACEHOLDER_RE.exec(str))) {
		if (m.index > last) out.push({ type: 'text', value: str.slice(last, m.index) });
		out.push(nodes[Number(m[1])]);
		last = m.index + m[0].length;
	}
	if (last < str.length) out.push({ type: 'text', value: str.slice(last) });
	return out;
}

function processChildren(children: RootContent[]): { result: RootContent[]; changed: boolean } {
	// Build the placeholder buffer and the node lookup table.
	let buffer = '';
	const nodes: RootContent[] = [];
	for (const child of children) {
		if (child.type === 'text') {
			buffer += child.value;
		} else {
			buffer += `${PH_OPEN}${nodes.length}${PH_CLOSE}`;
			nodes.push(child);
		}
	}
	if (!buffer.includes('||')) return { result: children, changed: false };

	const pieces: (string | Element)[] = [];
	let last = 0;
	let matched = false;
	let m: RegExpExecArray | null;
	SPOILER_RE.lastIndex = 0;
	while ((m = SPOILER_RE.exec(buffer))) {
		matched = true;
		if (m.index > last) pieces.push(buffer.slice(last, m.index));
		pieces.push(spoilerToHast(expand(m[1], nodes)));
		last = m.index + m[0].length;
	}
	if (!matched) return { result: children, changed: false };
	if (last < buffer.length) pieces.push(buffer.slice(last));

	const result: RootContent[] = [];
	for (const piece of pieces) {
		if (typeof piece === 'string') result.push(...expand(piece, nodes));
		else result.push(piece);
	}
	return { result, changed: true };
}

export function rehypeSpoiler() {
	return (tree: Root) => {
		visit(tree, 'element', (node: Element) => {
			if (node.tagName === 'code' || node.tagName === 'pre' || isMathSpan(node)) return SKIP;
			const { result, changed } = processChildren(node.children);
			if (changed) node.children = result as Element['children'];
		});
	};
}
