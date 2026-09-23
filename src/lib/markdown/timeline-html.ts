// Build-time renderer for a ```timeline fenced block (see remark-timeline.ts): a vertical
// axis of numbered nodes, the period's name (a link) and its dates on one side of the axis,
// the works and authors it is known for on the other (each may link to its heading on the period's
// page and to the site's analysis of the book — remark-timeline.ts fills those in). Plain HTML + CSS
// (.timeline in global.css) — no client script, so it works in print and with JS off.
import { escapeAttr } from './svg-utils';

/** a work or author of a period: a plain string, or an object when it links somewhere */
export interface TimelineWork {
	name: string;
	/** where the name links to (a heading of the period's page) */
	href?: string;
	/** this site's analysis of the work: a small icon after the name */
	rozbor?: { href: string; title?: string };
}

export interface TimelineItem {
	/** the period, shown as the (accent-coloured, underlined) link text */
	name: string;
	/** where the period's page lives; without it the name is plain text */
	href?: string;
	/** its time frame; an array becomes one line per entry ("existencialismus od …", "absurdní drama …") */
	dates?: string | string[];
	/** works and authors, shown on the other side of the axis */
	works?: string | (string | TimelineWork)[];
}

export interface TimelineSpec {
	items: TimelineItem[];
	/** caption under the axis; also its accessible name */
	title?: string;
}

const list = (v: string | string[] | undefined): string[] =>
	(Array.isArray(v) ? v : v ? [v] : []).map((s) => s.trim()).filter(Boolean);

export const workList = (v: TimelineItem['works']): TimelineWork[] =>
	(Array.isArray(v) ? v : v ? [v] : [])
		.map((w) => (typeof w === 'string' ? { name: w.trim() } : { ...w, name: (w.name ?? '').trim() }))
		.filter((w) => w.name);

// the icon of rehype-rozbor-link.ts, as markup (that plugin does not see this raw HTML)
const ROZBOR_ICON =
	'<svg class="rozbor-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 L20.5 20.5"/></svg>';

function workHtml(w: TimelineWork): string {
	const name = escapeAttr(w.name);
	const link = w.href ? `<a class="timeline-work" href="${escapeAttr(w.href)}">${name}</a>` : name;
	if (!w.rozbor) return link;
	const title = escapeAttr(w.rozbor.title ?? `Rozbor díla: ${w.name}`);
	return `${link}<a class="rozbor-link" href="${escapeAttr(w.rozbor.href)}" title="${title}" aria-label="${title}">${ROZBOR_ICON}</a>`;
}

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
		const works = workList(item.works);
		const worksHtml = works.length ? `<span class="timeline-works">${works.map(workHtml).join(', ')}</span>` : '';
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
