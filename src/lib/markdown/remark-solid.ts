// Remark plugin: a fenced "```solid" code block becomes a build-time SVG
// wireframe of a 3D solid (stereometrie) — see solid-svg.ts for the JSON
// shape and remark-graph.ts for why this runs at the mdast stage.
import { visit } from 'unist-util-visit';
import { renderSolidSvg, type SolidSpec } from './solid-svg';
import type { Root } from 'mdast';

export function remarkSolid() {
	return (tree: Root) => {
		visit(tree, 'code', (node: any) => {
			if (node.lang !== 'solid') return;
			let spec: SolidSpec;
			try {
				spec = JSON.parse(node.value);
			} catch (err) {
				throw new Error(`\`\`\`solid block is not valid JSON: ${(err as Error).message}\n${node.value}`);
			}
			let svg: string;
			try {
				svg = renderSolidSvg(spec);
			} catch (err) {
				throw new Error(`\`\`\`solid block failed to render: ${(err as Error).message}\n${node.value}`);
			}
			node.type = 'html';
			node.value = svg;
		});
	};
}
