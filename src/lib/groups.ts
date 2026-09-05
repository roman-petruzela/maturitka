import path from 'node:path';
import { defaultLabel, listOrderedDirs, parseOrderedName, readDirMeta } from './content-fs';
import type { SubjectKey } from './subjects';

// Topic-group (category folder) order and labels are discovered from the
// filesystem — see `content-fs.ts`. A category's leading "NN-" folder-name
// prefix sets its order, and its `_meta.json` supplies a display label when
// the auto-capitalized slug isn't good enough. Reordering or relabeling a
// subject's categories is then a filesystem change, not a code change.
//
// Resolved from process.cwd() (the project root throughout Astro's build),
// NOT import.meta.url — see the comment in subjects.ts for why: Astro's
// static build relocates modules like this one into an internal
// dist/.prerender/ staging copy before executing them, which silently
// broke a `../content` resolved from import.meta.url.
const CONTENT_ROOT = path.resolve(process.cwd(), 'src/content');

// subject slug -> its real directory name on disk (e.g. "mat" -> "02-mat"),
// needed to locate that subject's category subfolders.
const subjectDirNames: Record<string, string> = Object.fromEntries(
	listOrderedDirs(CONTENT_ROOT).map((d) => [d.slug, d.dirName])
);

function categoryDirsOf(subject: SubjectKey) {
	const subjectDir = subjectDirNames[subject];
	return subjectDir ? listOrderedDirs(path.join(CONTENT_ROOT, subjectDir)) : [];
}

export function groupLabel(subject: SubjectKey, slug: string): string {
	const match = categoryDirsOf(subject).find((d) => d.slug === slug);
	if (match) {
		const subjectDir = subjectDirNames[subject];
		const meta = readDirMeta(path.join(CONTENT_ROOT, subjectDir, match.dirName));
		if (meta.label) return meta.label;
	}
	return defaultLabel(slug);
}

export function groupOfId(id: string): string | null {
	const parts = id.split('/');
	return parts.length > 1 ? parseOrderedName(parts[0]).slug : null;
}

// Strips the category folder's "NN-" order prefix from a content id so it
// can be used as a clean URL slug (the topic filename's own numeric prefix,
// the last path segment, is left untouched — that one's already part of the
// public URL by long-standing convention).
export function cleanId(id: string): string {
	const parts = id.split('/');
	if (parts.length <= 1) return id;
	return [parseOrderedName(parts[0]).slug, ...parts.slice(1)].join('/');
}

export function sortEntriesByOrder<T extends { data: { order?: number; title: string } }>(list: T[]): T[] {
	return [...list].sort((a, b) => {
		if (a.data.order != null && b.data.order != null) return a.data.order - b.data.order;
		if (a.data.order != null) return -1;
		if (b.data.order != null) return 1;
		return a.data.title.localeCompare(b.data.title, 'cs');
	});
}

export function sortGroupKeys(subject: SubjectKey, keys: (string | null)[]): (string | null)[] {
	const orderOf = new Map(categoryDirsOf(subject).map((d) => [d.slug, d.order]));
	return [...keys].sort((a, b) => {
		if (a === null) return -1;
		if (b === null) return 1;
		const oa = orderOf.get(a);
		const ob = orderOf.get(b);
		if (oa != null && ob != null) return oa - ob;
		if (oa != null) return -1;
		if (ob != null) return 1;
		return a.localeCompare(b, 'cs');
	});
}
