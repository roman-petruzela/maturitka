// Shared between the rehype plugin below and the (manual, one-off) image
// sourcing step: turns an author heading's text into the filename the
// portrait would be stored under, e.g. "František Ladislav Čelakovský
// (2. fáze)" -> "frantisek-ladislav-celakovsky".
import { existsSync } from 'node:fs';
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

// resolved from process.cwd() rather than import.meta.url — see the comment
// in lib/subjects.ts for why the latter isn't safe inside Astro's static
// build (modules get relocated into an internal staging directory first)
const AUTHORS_DIR = path.resolve(process.cwd(), 'public/images/authors');

export function authorSlug(name: string): string {
	return name
		.replace(/\s*\([^)]*\)/g, '') // drop any "(1773–1847)" / "(2. fáze)" group
		.replace(/\s+[—–]\s.*$/, '') // and then a "— 2. fáze"-style tail
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

// Most portraits are public domain (photographer/painter dead 70+ years) and
// need no credit. Those that are only CC-licensed must show visible
// attribution next to the image, not just in CREDITS.md — they are listed in
// public/images/authors/credits.json ({ "<slug>": "<author>, <licence>" }),
// keyed by the same slug as the image filename.
const CREDITS_FILE = path.join(AUTHORS_DIR, 'credits.json');
let cachedCredits: Record<string, string> | null = null;
function credits(): Record<string, string> {
	if (!cachedCredits) cachedCredits = existsSync(CREDITS_FILE) ? JSON.parse(readFileSync(CREDITS_FILE, 'utf8')) : {};
	return cachedCredits!;
}

export function findAuthorCredit(name: string): string | null {
	return credits()[authorSlug(name)] ?? null;
}
