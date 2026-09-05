import fs from 'node:fs';
import path from 'node:path';

// Shared convention for ordering content folders (subjects, and topic-groups
// within a subject) without hardcoding order/labels in TypeScript: a folder
// may be named with a leading "NN-" numeric prefix that sets its sort order
// and is stripped to produce the public slug. An optional `_meta.json` file
// inside the folder ({ "label": "...", "description": "..." }) supplies a
// display label when the auto-capitalized slug isn't good enough (missing
// diacritics, needs a "(2. ročník)" suffix, etc). Reordering or relabeling is
// then just a filesystem change — rename the folder, edit `_meta.json`.

const PREFIX_RE = /^(\d+)-(.+)$/;

export interface OrderedDir {
	/** Real directory name on disk, e.g. "02-funkce-a-rovnice". */
	dirName: string;
	/** Public slug with the numeric prefix stripped, e.g. "funkce-a-rovnice". */
	slug: string;
	order: number | null;
}

export function parseOrderedName(name: string): { order: number | null; slug: string } {
	const m = PREFIX_RE.exec(name);
	return m ? { order: Number(m[1]), slug: m[2] } : { order: null, slug: name };
}

export function listOrderedDirs(basePath: string): OrderedDir[] {
	const entries = fs.existsSync(basePath)
		? fs.readdirSync(basePath, { withFileTypes: true }).filter((d) => d.isDirectory())
		: [];
	return entries
		.map((d) => {
			const { order, slug } = parseOrderedName(d.name);
			return { dirName: d.name, slug, order };
		})
		.sort((a, b) => {
			if (a.order != null && b.order != null) return a.order - b.order;
			if (a.order != null) return -1;
			if (b.order != null) return 1;
			return a.slug.localeCompare(b.slug, 'cs');
		});
}

export interface DirMeta {
	label?: string;
	description?: string;
}

export function readDirMeta(dirPath: string): DirMeta {
	const metaPath = path.join(dirPath, '_meta.json');
	if (!fs.existsSync(metaPath)) return {};
	try {
		return JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
	} catch {
		return {};
	}
}

export function defaultLabel(slug: string): string {
	return slug
		.split('-')
		.map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
		.join(' ');
}
