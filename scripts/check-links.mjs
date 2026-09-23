#!/usr/bin/env node
// Scans the built site for internal <a href="..."> links that point
// nowhere — a link surviving a file rename/deletion in src/content would
// otherwise only surface when a reader actually clicks it. Run after
// `npm run build`:
//
//     node scripts/check-links.mjs
//
// Only checks same-origin links (href starting with "/") and same-page
// "#fragment" links; external links and mailto:/tel: are skipped since those need a
// real network request to verify and aren't at risk from local content changes anyway.
// A link with a #fragment must also find that id in its target page — a heading that was
// renamed breaks "page#heading" links (the timeline's, the search results') silently.

import { readdir, readFile, access } from 'node:fs/promises';
import path from 'node:path';

const WEB_ROOT = path.resolve(import.meta.dirname, '..');
const DIST = path.join(WEB_ROOT, 'dist');

async function walk(dir) {
	const entries = await readdir(dir, { withFileTypes: true });
	const files = [];
	for (const entry of entries) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) files.push(...(await walk(full)));
		else if (entry.name.endsWith('.html')) files.push(full);
	}
	return files;
}

function resolveTarget(href, fromFile) {
	const [pathname] = href.split('#');
	if (pathname === '') return fromFile; // "#fragment" on the same page
	const clean = pathname.endsWith('/') ? pathname + 'index.html' : pathname;
	return path.join(DIST, clean);
}

function fragmentOf(href) {
	const i = href.indexOf('#');
	if (i < 0) return '';
	try {
		return decodeURIComponent(href.slice(i + 1));
	} catch {
		return href.slice(i + 1);
	}
}

async function exists(p) {
	try {
		await access(p);
		return true;
	} catch {
		return false;
	}
}

async function main() {
	if (!(await exists(DIST))) {
		console.error('dist/ not found — run `npm run build` first.');
		process.exit(1);
	}

	const files = await walk(DIST);
	const hrefRe = /<a\s[^>]*href="([^"]+)"/g;
	let brokenCount = 0;
	let checkedCount = 0;
	const bySource = new Map();
	// The same handful of nav/footer hrefs repeats on every one of the ~750
	// generated pages, so cache each resolved target's existence instead of
	// re-`access()`-ing the same file over and over.
	const existsCache = new Map();
	async function existsCached(p) {
		let cached = existsCache.get(p);
		if (cached === undefined) {
			cached = await exists(p);
			existsCache.set(p, cached);
		}
		return cached;
	}

	// the ids of a page, read once (a page is the target of many links)
	const idCache = new Map();
	async function idsOf(target) {
		let ids = idCache.get(target);
		if (!ids) {
			const html = await readFile(target, 'utf-8');
			ids = new Set([...html.matchAll(/\s(?:id|name)="([^"]+)"/g)].map((m) => m[1]));
			idCache.set(target, ids);
		}
		return ids;
	}

	for (const file of files) {
		const html = await readFile(file, 'utf-8');
		let match;
		while ((match = hrefRe.exec(html))) {
			const href = match[1].replace(/&amp;/g, '&');
			if (!href.startsWith('/') && !href.startsWith('#')) continue; // external, mailto:, tel:, etc.
			checkedCount++;
			const target = resolveTarget(href, file);
			let problem = null;
			if (!(await existsCached(target))) problem = href;
			else {
				const fragment = fragmentOf(href);
				// "#" and "#top" are the browser's own; an .html target is the only place ids can be looked up
				if (fragment && fragment !== 'top' && target.endsWith('.html') && !(await idsOf(target)).has(fragment)) {
					problem = `${href}  (no element with that id)`;
				}
			}
			if (problem) {
				brokenCount++;
				const rel = path.relative(DIST, file);
				if (!bySource.has(rel)) bySource.set(rel, []);
				bySource.get(rel).push(problem);
			}
		}
	}

	if (brokenCount === 0) {
		console.log(`OK — checked ${checkedCount} internal links across ${files.length} pages, none broken (fragments included).`);
		return;
	}

	console.log(`Found ${brokenCount} broken internal link(s) across ${bySource.size} page(s):\n`);
	for (const [source, hrefs] of bySource) {
		console.log(`  ${source}`);
		for (const href of hrefs) console.log(`    -> ${href}`);
	}
	process.exitCode = 1;
}

main();
