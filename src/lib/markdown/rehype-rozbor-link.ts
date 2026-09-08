// Rehype plugin: turns a plain-text link into a small icon-only link,
// scoped to links pointing at this site's own book-analysis pages
// (/cj/rozbor-knih-a-cetba/...). Content is authored as ordinary markdown
// with the native title syntax carrying the tooltip text, e.g.:
//
//     **Otec Goriot** ([rozbor](/cj/rozbor-knih-a-cetba/honore-de-balzac-otec-goriot/ "Rozbor díla Otec Goriot"))
//
// — the visible word "rozbor" only matters as source-readable placeholder
// text; this plugin replaces it with a small icon so every one of these
// links looks the same regardless of what the author typed. This lets a
// work's own bold title link straight to the full text when one is
// available (see rehype-author-portrait.ts's neighbor, the Wikizdroje
// links added directly in content) while a separate, clearly-labelled
// icon always goes to this site's own analysis.
import { visit } from 'unist-util-visit';
import type { Root, Element } from 'hast';

const ROZBOR_HREF_RE = /^\/cj\/rozbor-knih-a-cetba\//;

function rozborIcon(): Element {
	return {
		type: 'element',
		tagName: 'svg',
		properties: {
			className: ['rozbor-icon'],
			viewBox: '0 0 24 24',
			fill: 'none',
			stroke: 'currentColor',
			strokeWidth: '1.7',
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
			'aria-hidden': 'true',
		},
		children: [
			{ type: 'element', tagName: 'circle', properties: { cx: '10.5', cy: '10.5', r: '6.5' }, children: [] },
			{ type: 'element', tagName: 'path', properties: { d: 'M15.5 15.5 L20.5 20.5' }, children: [] },
		],
	};
}

export function rehypeRozborLink() {
	return (tree: Root) => {
		visit(tree, 'element', (node: Element) => {
			if (node.tagName !== 'a') return;
			const href = String(node.properties?.href ?? '');
			if (!ROZBOR_HREF_RE.test(href)) return;

			node.properties = { ...node.properties, className: ['rozbor-link'] };
			if (!node.properties.title) node.properties.title = 'Rozbor díla';
			node.children = [rozborIcon()];
		});
	};
}
