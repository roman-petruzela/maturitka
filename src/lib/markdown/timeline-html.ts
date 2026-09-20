// Build-time renderer for a ```timeline fenced block (see remark-timeline.ts): a vertical
// axis of numbered nodes, the period's name (a link) and its dates on one side of the axis,
// the works and authors it is known for on the other. Plain HTML + CSS (.timeline in
// global.css) — no client script, so it works in print and with JS off.
import { escapeAttr } from './svg-utils';

export interface TimelineItem {
	/** the period, shown as the (accent-coloured, underlined) link text */
	name: string;
	/** where the period's page lives; without it the name is plain text */
	href?: string;
	/** its time frame; an array becomes one line per entry ("existencialismus od …", "absurdní drama …") */
	dates?: string | string[];
	/** works and authors, shown on the other side of the axis */
	works?: string | string[];
}

export interface TimelineSpec {
	items: TimelineItem[];
	/** caption under the axis; also its accessible name */
	title?: string;
}

const list = (v: string | string[] | undefined): string[] =>
	(Array.isArray(v) ? v : v ? [v] : []).map((s) => s.trim()).filter(Boolean);

export function renderTimelineHtml(spec: TimelineSpec): string {
	if (!Array.isArray(spec.items) || spec.items.length === 0) throw new Error('"items" must be a non-empty array');
	const items = spec.items.map((item, i) => {
		if (!item || typeof item.name !== 'string' || !item.name.trim()) throw new Error(`item ${i + 1} has no "name"`);
		const name = escapeAttr(item.name.trim());
		const nameHtml = item.href
			? `<a class="timeline-name" href="${escapeAttr(item.href)}">${name}</a>`
			: `<span class="timeline-name">${name}</span>`;
		const dates = list(item.dates);
		const datesHtml = dates.length
			? `<span class="timeline-dates">${dates.map((d) => `<span>${escapeAttr(d)}</span>`).join('')}</span>`
			: '';
		const works = list(item.works);
		const worksHtml = works.length ? `<span class="timeline-works">${works.map(escapeAttr).join(', ')}</span>` : '';
		return (
			`<li class="timeline-item">${worksHtml}` +
			`<span class="timeline-node" aria-hidden="true">${i + 1}</span>` +
			`<span class="timeline-period">${nameHtml}${datesHtml}</span></li>`
		);
	});
	const label = spec.title ? ` aria-label="${escapeAttr(spec.title)}"` : '';
	const caption = spec.title ? `<figcaption>${escapeAttr(spec.title)}</figcaption>` : '';
	return `<figure class="timeline"><ol class="timeline-list"${label}>${items.join('')}</ol>${caption}</figure>`;
}
