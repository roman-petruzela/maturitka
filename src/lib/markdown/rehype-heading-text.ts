// Rehype plugin: wraps the content of every h2 in <span class="heading-text">, so the accent rule
// under a section heading (article-body.css) can be exactly as long as the heading's text.
import { visit } from 'unist-util-visit';
import type { Root } from 'hast';

export function rehypeHeadingText() {
	return (tree: Root) => {
		visit(tree, 'element', (node) => {
			if (node.tagName !== 'h2' || !node.children.length) return;
			node.children = [
				{ type: 'element', tagName: 'span', properties: { className: ['heading-text'] }, children: node.children },
			];
		});
	};
}
