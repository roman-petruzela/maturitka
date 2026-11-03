#!/usr/bin/env node
// Checks the frontmatter of every page in src/content against what the site relies on:
//   - a frontmatter block with a non-empty `title`
//   - `order` (when present) is a number
//   - no two pages of one category share a positive `order` (it is the number shown before the title;
//     pages at `order` <= 0 are unnumbered signposts/overviews and may share it)
//   - no two pages share a URL slug (subject + category + file name), the second would be dropped
//   - only known keys, `formulaRail` is a boolean
// `source` is deliberately not required: hand-written pages have none.
//
//     node scripts/check-frontmatter.mjs
//
// Mirrors `topicSchema` in src/content.config.ts: add a key there and in KNOWN_KEYS here.

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const CONTENT = path.resolve(import.meta.dirname, '../src/content');
const KNOWN_KEYS = new Set(['title', 'order', 'source', 'formulaRail']);
const stripPrefix = (name) => name.replace(/^\d+-/, '');

async function* markdownFiles(dir) {
	for (const e of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, e.name);
		if (e.isDirectory()) yield* markdownFiles(full);
		else if (e.name.endsWith('.md')) yield full;
	}
}

// Top-level `key: value` lines only; the frontmatter of this site has no nested values.
function parseFrontmatter(text) {
	const m = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(text);
	if (!m) return null;
	const data = {};
	for (const line of m[1].split(/\r?\n/)) {
		const kv = /^([A-Za-z_][\w-]*):\s*(.*)$/.exec(line);
		if (kv) data[kv[1]] = kv[2].trim();
	}
	return data;
}

const unquote = (v) => v.replace(/^(["'])(.*)\1$/, '$2');

const problems = [];
const bySlug = new Map(); // "subject/category/file" -> first file
const byOrder = new Map(); // "subject/category" -> Map(order -> first file)
let pages = 0;

for (const subjectDir of (await readdir(CONTENT, { withFileTypes: true })).filter((e) => e.isDirectory())) {
	for await (const file of markdownFiles(path.join(CONTENT, subjectDir.name))) {
		pages++;
		const rel = path.relative(CONTENT, file);
		const fail = (msg) => problems.push(`${rel}: ${msg}`);
		const fm = parseFrontmatter(await readFile(file, 'utf8'));
		if (!fm) {
			fail('no frontmatter block');
			continue;
		}

		if (!fm.title || !unquote(fm.title)) fail('missing title');
		for (const key of Object.keys(fm)) if (!KNOWN_KEYS.has(key)) fail(`unknown key "${key}"`);
		if ('formulaRail' in fm && fm.formulaRail !== 'true' && fm.formulaRail !== 'false')
			fail('formulaRail must be true or false');

		const parts = rel.split(path.sep);
		const subject = stripPrefix(parts[0]);
		const category = parts.length > 2 ? stripPrefix(parts[1]) : '';
		const slugKey = `${subject}/${category}/${path.basename(file, '.md').toLowerCase()}`;
		if (bySlug.has(slugKey)) fail(`same slug as ${bySlug.get(slugKey)}`);
		else bySlug.set(slugKey, rel);

		if ('order' in fm) {
			if (!/^-?\d+(\.\d+)?$/.test(fm.order)) {
				fail(`order is not a number: ${fm.order}`);
				continue;
			}
			const orderKey = `${subject}/${category}`;
			if (!byOrder.has(orderKey)) byOrder.set(orderKey, new Map());
			const seen = byOrder.get(orderKey);
			const n = Number(fm.order);
			if (n <= 0) continue;
			if (seen.has(n)) fail(`order ${n} is also used by ${seen.get(n)}`);
			else seen.set(n, rel);
		}
	}
}

if (problems.length) {
	console.error(`${problems.length} frontmatter problem(s):\n${problems.join('\n')}`);
	process.exit(1);
}
console.log(`OK — frontmatter of ${pages} pages checked.`);
