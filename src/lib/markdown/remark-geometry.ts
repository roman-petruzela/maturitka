// Remark plugin: a fenced "```geometry" code block becomes a build-time SVG
// figure (points, segments, circles, angle markers) — see remark-graph.ts
// for why this has to run at the mdast stage rather than as a rehype
// plugin, and geometry-svg.ts for the JSON shape.
import { visit } from 'unist-util-visit';
import { renderGeometrySvg, type GeometrySpec } from './geometry-svg';
import type { Root, Code, Html } from 'mdast';

export function remarkGeometry() {
	return (tree: Root) => {
		visit(tree, 'code', (node: Code) => {
			if (node.lang !== 'geometry') return;
			let spec: GeometrySpec;
			try {
				spec = JSON.parse(node.value);
			} catch (err) {
				throw new Error(`\`\`\`geometry block is not valid JSON: ${(err as Error).message}\n${node.value}`);
			}
			let svg: string;
			try {
				svg = renderGeometrySvg(spec);
			} catch (err) {
				throw new Error(`\`\`\`geometry block failed to render: ${(err as Error).message}\n${node.value}`);
			}
			// mdast's Code/HTML node types are structurally identical (both just
			// { type, value }) — this in-place mutation swaps a fenced code block
			// for its rendered HTML without needing to splice a new node into the
			// parent's children array.
			(node as unknown as Html).type = 'html';
			node.value = svg;
		});
	};
}
