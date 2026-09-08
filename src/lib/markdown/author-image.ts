// Shared between the rehype plugin below and the (manual, one-off) image
// sourcing step: turns an author heading's text into the filename the
// portrait would be stored under, e.g. "František Ladislav Čelakovský
// (2. fáze)" -> "frantisek-ladislav-celakovsky".
import { existsSync } from 'node:fs';
import { readdirSync } from 'node:fs';
import path from 'node:path';

// resolved from process.cwd() rather than import.meta.url — see the comment
// in lib/subjects.ts for why the latter isn't safe inside Astro's static
// build (modules get relocated into an internal staging directory first)
const AUTHORS_DIR = path.resolve(process.cwd(), 'public/images/authors');

export function authorSlug(name: string): string {
	return name
		.replace(/\s*\([^)]*\)\s*$/, '') // strip a trailing "(2. fáze)"-style suffix
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '') // strip combining diacritics (Ř -> R, etc.)
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

let cachedFiles: Set<string> | null = null;
function availableFiles(): Set<string> {
	if (cachedFiles) return cachedFiles;
	cachedFiles = existsSync(AUTHORS_DIR) ? new Set(readdirSync(AUTHORS_DIR)) : new Set();
	return cachedFiles;
}

// Returns the public/ URL path for this author's portrait if one exists on
// disk (checking a small list of extensions), else null.
export function findAuthorImage(name: string): string | null {
	const slug = authorSlug(name);
	const files = availableFiles();
	for (const ext of ['jpg', 'jpeg', 'png', 'webp']) {
		const filename = `${slug}.${ext}`;
		if (files.has(filename)) return `/images/authors/${filename}`;
	}
	return null;
}
