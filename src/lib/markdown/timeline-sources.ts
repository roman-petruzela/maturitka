// The file-bound half of the timeline's links (timeline-links.ts is the pure half): finds the page a
// period's `href` points at, reads its headings, and lists the book analyses of the site.
//
// Resolved from process.cwd() like subjects.ts (Astro relocates application modules during the
// static build, so import.meta.url would point into a staging copy).
import fs from 'node:fs';
import path from 'node:path';
import { listOrderedDirs } from '../content-fs';
import { outline, type Heading } from '../search-outline';
import type { RozborPage } from './timeline-links';

const CONTENT_ROOT = path.resolve(process.cwd(), 'src/content');
const ROZBOR_URL = '/cj/rozbor-knih-a-cetba/';

const headingCache = new Map<string, Heading[]>();
let rozborCache: RozborPage[] | undefined;

const front = (src: string) => /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(src);

/** the folder behind `/cj/literatura/` (subject and category folders lose their NN- prefix in the URL) */
function dirFor(slugs: string[]): string | undefined {
	let dir = CONTENT_ROOT;
	for (const slug of slugs) {
		const next = listOrderedDirs(dir).find((d) => d.slug === slug);
		if (!next) return undefined;
		dir = path.join(dir, next.dirName);
	}
	return dir;
}

/** `/cj/literatura/06-klasicismus…/` → the Markdown file behind it (a topic keeps its NN- prefix) */
function pageFile(href: string): string | undefined {
	const parts = href.split('#')[0].split('/').filter(Boolean);
	if (parts.length < 2) return undefined;
	const dir = dirFor(parts.slice(0, -1));
	const file = dir && path.join(dir, `${parts[parts.length - 1]}.md`);
	return file && fs.existsSync(file) ? file : undefined;
}

export function pageHeadings(href: string): Heading[] {
	const file = pageFile(href);
	if (!file) return [];
	let cached = headingCache.get(file);
	if (!cached) {
		const src = fs.readFileSync(file, 'utf8');
		cached = outline(src.slice(front(src)?.[0].length ?? 0)).headings;
		headingCache.set(file, cached);
	}
	return cached;
}

export function rozborPages(): RozborPage[] {
	if (rozborCache) return rozborCache;
	const base = dirFor(ROZBOR_URL.split('/').filter(Boolean));
	rozborCache = [];
	if (base && fs.existsSync(base)) {
		for (const name of fs.readdirSync(base).filter((n) => n.endsWith('.md'))) {
			const head = front(fs.readFileSync(path.join(base, name), 'utf8'))?.[1] ?? '';
			const title = /^title:\s*"?(.*?)"?\s*$/m.exec(head)?.[1];
			if (title) rozborCache.push({ title, href: `${ROZBOR_URL}${name.slice(0, -3)}/` });
		}
	}
	return rozborCache;
}
