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
//
// A period's `works` are linked automatically: a name that is a heading of the period's own page
// ("Molière" → `#moliere`) becomes a link to it, and one that is the author of exactly one book
// analysis on the site gets the small rozbor icon (timeline-links.ts decides, timeline-sources.ts
// reads the pages). A work written as `{ "name", "href", "rozbor" }` is left as it is.
import { visit } from 'unist-util-visit';
import { renderTimelineHtml, workList, type TimelineSpec } from './timeline-html';
import { headingId, rozborFor } from './timeline-links';
import { pageHeadings, rozborPages } from './timeline-sources';
import type { Root, Code, Html } from 'mdast';

function linkWorks(spec: TimelineSpec): void {
	for (const item of Array.isArray(spec.items) ? spec.items : []) {
		if (!item?.works) continue;
		const headings = item.href ? pageHeadings(item.href) : [];
		item.works = workList(item.works).map((w) => {
			if (w.href || w.rozbor) return w;
			const id = headingId(w.name, headings);
			const rozbor = rozborFor(w.name, rozborPages());
			return {
				...w,
				...(id && item.href ? { href: `${item.href.split('#')[0]}#${id}` } : {}),
				...(rozbor ? { rozbor: { href: rozbor.href, title: `Rozbor: ${rozbor.title}` } } : {}),
			};
		});
	}
}

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
				linkWorks(spec);
				html = renderTimelineHtml(spec);
			} catch (err) {
				throw new Error(`\`\`\`timeline block failed to render: ${(err as Error).message}\n${node.value}`);
			}
			(node as unknown as Html).type = 'html';
			node.value = html;
		});
	};
}
