// Remark plugin: a fenced code block tagged "timeline" becomes a build-time HTML timeline
// (same route as ```graph — it must run on the mdast `code` node, before Shiki swallows the
// language tag).
//
//     ```timeline
//     { "title": "Literární období od nejstaršího po nejmladší",
//       "items": [
//         { "name": "Antika", "href": "/cj/literatura/02-starovek-a-antika/",
//           "dates": "3. tisíciletí př. n. l. – 5. stol. n. l.",
//           "works": ["Epos o Gilgamešovi", "Homér", "Ezop"] }
//       ] }
//     ```
import { visit } from 'unist-util-visit';
import { renderTimelineHtml, type TimelineSpec } from './timeline-html';
import type { Root, Code, Html } from 'mdast';

export function remarkTimeline() {
	return (tree: Root) => {
		visit(tree, 'code', (node: Code) => {
			if (node.lang !== 'timeline') return;
			let spec: TimelineSpec;
			try {
				spec = JSON.parse(node.value);
			} catch (err) {
				throw new Error(`\`\`\`timeline block is not valid JSON: ${(err as Error).message}\n${node.value}`);
			}
			let html: string;
			try {
				html = renderTimelineHtml(spec);
			} catch (err) {
				throw new Error(`\`\`\`timeline block failed to render: ${(err as Error).message}\n${node.value}`);
			}
			(node as unknown as Html).type = 'html';
			node.value = html;
		});
	};
}
