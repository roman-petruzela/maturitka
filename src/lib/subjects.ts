import path from 'node:path';
import type { CollectionKey } from 'astro:content';
import { listOrderedDirs, readDirMeta } from './content-fs';

// Subjects (and their order + label/description) are discovered from
// `src/content/*` directories and their `_meta.json` — see `content-fs.ts`.
// To reorder subjects or edit their label/description, rename the folder or
// edit its `_meta.json`; nothing here needs to change.
//
// Resolved from process.cwd() (the project root throughout Astro's build),
// NOT from import.meta.url: Astro's static build relocates application
// modules like this one into an internal dist/.prerender/ staging copy
// before executing them, so import.meta.url there points at the *copy*,
// not the real source file — a `../content` resolved from it silently
// found nothing and produced an empty subject list. content.config.ts is
// unaffected because Astro's content-layer loads it directly, not through
// that relocation, so it can safely use import.meta.url instead.
const CONTENT_ROOT = path.resolve(process.cwd(), 'src/content');
const subjectDirs = listOrderedDirs(CONTENT_ROOT);

export const SUBJECTS: Record<string, { label: string; description: string }> = Object.fromEntries(
	subjectDirs.map(({ dirName, slug }) => {
		const meta = readDirMeta(path.join(CONTENT_ROOT, dirName));
		return [slug, { label: meta.label ?? slug, description: meta.description ?? '' }];
	})
);

export type SubjectKey = CollectionKey;

export const SUBJECT_KEYS = subjectDirs.map((d) => d.slug) as SubjectKey[];
