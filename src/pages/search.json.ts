import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SUBJECTS, SUBJECT_KEYS, type SubjectKey } from '../lib/subjects';
import { cleanId, groupLabel, groupOfId } from '../lib/groups';

// Static search index, built once at build time and fetched lazily by
// SearchDialog.astro on first open — not inlined into every page, since
// most visits never open the search dialog at all.
export const prerender = true;

export interface SearchItem {
	title: string;
	url: string;
	subject: string;
	group: string | null;
}

export const GET: APIRoute = async () => {
	const items: SearchItem[] = [];

	for (const subject of SUBJECT_KEYS) {
		const entries = await getCollection(subject);
		for (const entry of entries) {
			const g = groupOfId(entry.id);
			items.push({
				title: entry.data.title,
				url: `/${subject}/${cleanId(entry.id)}/`,
				subject: SUBJECTS[subject].label,
				group: g ? groupLabel(subject as SubjectKey, g) : null,
			});
		}
	}

	return new Response(JSON.stringify(items), {
		headers: { 'Content-Type': 'application/json' },
	});
};
