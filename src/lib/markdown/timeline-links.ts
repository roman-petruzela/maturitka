// Which names of a timeline can be linked, and where to. Pure (no file access — the caller reads the
// pages): a name in a period's `works` ("Molière") links to the heading of the period's own page
// that is about it, and to this site's analysis of the author's book when there is exactly one.
// The heading's id is taken from the page, so a link cannot dangle.
import type { Heading } from '../search-outline';

const fold = (s: string) =>
	s
		.normalize('NFD')
		.replace(/\p{M}/gu, '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, ' ')
		.trim();

/** the part of an entry that names something: "poetismus (Nezval, Seifert)" → "poetismus" */
const subject = (s: string) => fold(s.split('(')[0]);

/** the id of the heading that is about `name` — the heading is exactly it, starts with it ("Molière (1622–1673)") or holds it as whole words */
export function headingId(name: string, headings: Heading[]): string | undefined {
	const q = subject(name);
	if (q.length < 4) return undefined;
	let best: { score: number; id: string } | undefined;
	for (const [text, id] of headings) {
		if (!id) continue;
		const h = fold(text);
		const score = h === q ? 3 : h.startsWith(q + ' ') ? 2 : ` ${h} `.includes(` ${q} `) ? 1 : 0;
		if (score && (!best || score > best.score)) best = { score, id };
	}
	return best?.id;
}

export interface RozborPage {
	/** "Molière - Lakomec" */
	title: string;
	href: string;
}

/** the one analysis whose author is `name` ("Mácha" → "Karel Hynek Mácha - Máj"); two authors of that name, or two books, and none */
export function rozborFor(name: string, pages: RozborPage[]): RozborPage | undefined {
	const words = subject(name).split(' ').filter(Boolean);
	if (!words.length || words.join('').length < 4) return undefined;
	const hits = pages.filter((p) => {
		const author = new Set(fold(p.title.split(' - ')[0]).split(' '));
		return words.every((w) => author.has(w));
	});
	return hits.length === 1 ? hits[0] : undefined;
}
