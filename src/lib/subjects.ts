import path from 'node:path';
import type { CollectionKey } from 'astro:content';
import { listOrderedDirs, readDirMeta } from './content-fs';

// Subjects (and their order + label/description) are discovered from
// `src/content/*` directories and their `_meta.json` — see `content-fs.ts`.
// To reorder subjects or edit their label/description, rename the folder or
// edit its `_meta.json`; nothing here needs to change.
const CONTENT_ROOT = path.resolve('./src/content');
const subjectDirs = listOrderedDirs(CONTENT_ROOT);

export const SUBJECTS: Record<string, { label: string; description: string }> = Object.fromEntries(
	subjectDirs.map(({ dirName, slug }) => {
		const meta = readDirMeta(path.join(CONTENT_ROOT, dirName));
		return [slug, { label: meta.label ?? slug, description: meta.description ?? '' }];
	})
);

export type SubjectKey = CollectionKey;

export const SUBJECT_KEYS = subjectDirs.map((d) => d.slug) as SubjectKey[];
