// Remark (not rehype) plugin: a fenced code block tagged "graph" becomes a
// build-time SVG plot. Has to run at the remark/mdast stage — Astro's
// built-in Shiki syntax highlighting turns fenced code blocks into
// `<span class="line">`-wrapped hast markup and drops the original language
// tag (falls back to "plaintext") before any *rehype* plugin gets a chance
// to see it, so detecting "```graph" only works this early, on the mdast
// `code` node's own `.lang` field.
//
// Content authors write, e.g.:
//
//     ```graph
//     { "fn": "x^2 - 4*x + 3", "domain": [-2, 6], "title": "y = x² − 4x + 3" }
//     ```
//
// or, for a parametric curve (circles etc.):
//
//     ```graph
//     { "parametric": "3*cos(t), 3*sin(t)", "tDomain": [0, 6.283185307] }
//     ```
import { visit } from 'unist-util-visit';
import { compileExpr, compileParametric, renderGraphSvg, type GraphSpec } from './graph-svg';
import type { Root } from 'mdast';

interface GraphJson {
	fn?: string;
	domain?: [number, number];
	parametric?: string;
	tDomain?: [number, number];
	yDomain?: [number, number];
	width?: number;
	height?: number;
	samples?: number;
	title?: string;
	points?: { x: number; y: number; label?: string }[];
	xLabel?: string;
	yLabel?: string;
	spoiler?: boolean;
	float?: 'right' | 'left';
}

function toSpec(json: GraphJson): GraphSpec {
	const spec: GraphSpec = {
		domain: json.domain,
		yDomain: json.yDomain,
		tDomain: json.tDomain,
		width: json.width,
		height: json.height,
		samples: json.samples,
		title: json.title,
		points: json.points,
		xLabel: json.xLabel,
		yLabel: json.yLabel,
		spoiler: json.spoiler,
		float: json.float,
	};
	if (json.parametric) spec.parametric = compileParametric(json.parametric);
	if (json.fn) spec.fn = compileExpr(json.fn, 'x');
	return spec;
}

export function remarkGraph() {
	return (tree: Root) => {
		visit(tree, 'code', (node: any) => {
			if (node.lang !== 'graph') return;
			let json: GraphJson;
			try {
				json = JSON.parse(node.value);
			} catch (err) {
				throw new Error(`\`\`\`graph block is not valid JSON: ${(err as Error).message}\n${node.value}`);
			}
			let svg: string;
			try {
				svg = renderGraphSvg(toSpec(json));
			} catch (err) {
				throw new Error(`\`\`\`graph block failed to render: ${(err as Error).message}\n${node.value}`);
			}
			node.type = 'html';
			node.value = svg;
		});
	};
}
