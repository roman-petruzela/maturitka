// Rehype plugin: inserts a proper photo figure (same figure/figcaption
// treatment as the ```graph/```geometry/```solid diagrams — see
// .graph-plot in global.css) right after each author "### Name" heading
// in the CJ literatura pages — a real, verified photo when one is
// available locally (public/images/authors/, see author-image.ts), or a
// generic silhouette placeholder box of the same shape otherwise, so
// every author gets *some* visual instead of a text-only heading with
// gaps for whichever names haven't been sourced yet.
//
// Deliberately opt-in per heading text rather than blanket-applied to
// every h3 in the site: a couple of literatura files use h3 for a
// movement's own subsection (e.g. "### Realismus (2. polovina 19.
// století)") rather than a person's name, and those must never get a
// person-shaped placeholder next to them.
import { visit } from 'unist-util-visit';
import type { Root, Element, ElementContent } from 'hast';
import type { VFile } from 'vfile';
import { findAuthorImage, findAuthorCredit } from './author-image';

const NOT_A_PERSON_RE = /^(Realismus|Naturalismus)\b/;

function headingText(node: Element): string {
	let text = '';
	visit(node, 'text', (t) => {
		text += t.value;
	});
	return text.trim();
}

function placeholderFigure(name: string): Element {
	return {
		type: 'element',
		tagName: 'figure',
		properties: { className: ['graph-plot', 'graph-plot--float-right', 'author-photo', 'author-photo--placeholder'] },
		children: [
			{
				type: 'element',
				tagName: 'svg',
				properties: {
					className: ['author-photo-placeholder-icon'],
					viewBox: '0 0 24 24',
					fill: 'none',
					stroke: 'currentColor',
					strokeWidth: '1.3',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					'aria-hidden': 'true',
				},
				children: [
					{ type: 'element', tagName: 'circle', properties: { cx: '12', cy: '9' , r: '4.2' }, children: [] },
					{
						type: 'element',
						tagName: 'path',
						properties: { d: 'M3.5 21.5 C3.5 15.8 8 12.5 12 12.5 C16 12.5 20.5 15.8 20.5 21.5' },
						children: [],
					},
				],
			},
			{ type: 'element', tagName: 'figcaption', properties: {}, children: [{ type: 'text', value: name }] },
		],
	};
}

function photoFigure(src: string, name: string, credit: string | null): Element {
	const captionChildren: ElementContent[] = [{ type: 'text', value: name }];
	if (credit) {
		captionChildren.push({
			type: 'element',
			tagName: 'span',
			properties: { className: ['author-photo-credit'] },
			children: [{ type: 'text', value: `Foto: ${credit}` }],
		});
	}
	return {
		type: 'element',
		tagName: 'figure',
		properties: { className: ['graph-plot', 'graph-plot--float-right', 'author-photo'] },
		children: [
			{
				type: 'element',
				tagName: 'img',
				properties: { className: ['author-photo-img'], src, alt: name, loading: 'lazy' },
				children: [],
			},
			{ type: 'element', tagName: 'figcaption', properties: {}, children: captionChildren },
		],
	};
}

// Scoped to the CJ literatura category specifically — h3 is a generic
// heading tag used all over the site's other subjects for unrelated
// subsections, and only literatura's author headings should get a
// photo/placeholder next to them.
const LITERATURA_PATH_RE = /[/\\]content[/\\]01-cj[/\\]02-literatura[/\\]/;

export function rehypeAuthorPortrait() {
	return (tree: Root, file: VFile) => {
		const filePath = String(file.path ?? file.history[0] ?? '');
		if (!LITERATURA_PATH_RE.test(filePath)) return;

		visit(tree, 'element', (node: Element, index, parent) => {
			if (node.tagName !== 'h3' || index === undefined || !parent) return;
			const text = headingText(node);
			if (!text || NOT_A_PERSON_RE.test(text)) return;

			const src = findAuthorImage(text);
			const figure = src ? photoFigure(src, text, findAuthorCredit(text)) : placeholderFigure(text);
			parent.children.splice(index + 1, 0, figure as ElementContent);
		});
	};
}
