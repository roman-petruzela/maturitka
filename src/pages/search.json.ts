import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SUBJECTS, SUBJECT_KEYS, type SubjectKey } from '../lib/subjects';
import { cleanId, groupLabel, groupOfId } from '../lib/groups';
import { outline } from '../lib/search-outline';
import type { SearchItem } from '../lib/search-match';

// Static search index, built once at build time and fetched lazily by
// SearchDialog.astro on first open — not inlined into every page, since
// most visits never open the search dialog at all. Besides each page's
// title it holds the page's headings and its first sentences
// (search-outline.ts), so a word from inside a page finds it too.
export const prerender = true;

// A key term that is set in bold on many pages ("Charakteristika", "Příklad") says nothing about any
// one of them: only terms of at most this many pages are kept.
const MAX_PAGES_PER_TERM = 6;
const MAX_TERMS_PER_PAGE = 30;

export const GET: APIRoute = async () => {
	const pages: { item: SearchItem; terms: string[] }[] = [];
	const spread = new Map<string, number>();

	for (const subject of SUBJECT_KEYS) {
		const entries = await getCollection(subject);
		for (const entry of entries) {
			const g = groupOfId(entry.id);
			const { headings, excerpt, terms } = outline(entry.body ?? '');
			for (const t of terms) spread.set(t.toLowerCase(), (spread.get(t.toLowerCase()) ?? 0) + 1);
			pages.push({
				terms,
				item: {
					title: entry.data.title,
					url: `/${subject}/${cleanId(entry.id)}/`,
					subject: SUBJECTS[subject].label,
					group: g ? groupLabel(subject as SubjectKey, g) : null,
					...(headings.length ? { h: headings } : {}),
					...(excerpt ? { x: excerpt } : {}),
				},
			});
		}
	}

	const items = pages.map(({ item, terms }) => {
		const k = terms.filter((t) => (spread.get(t.toLowerCase()) ?? 0) <= MAX_PAGES_PER_TERM).slice(0, MAX_TERMS_PER_PAGE);
		return k.length ? { ...item, k } : item;
	});

	return new Response(JSON.stringify(items), {
		headers: { 'Content-Type': 'application/json' },
	});
};
