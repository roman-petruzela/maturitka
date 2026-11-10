#!/usr/bin/env node
// Content checks the build does not make:
//   - headings must not skip a level (## -> ####): the table of contents and screen readers read the
//     outline, a hole in it is a heading that was lost or mis-levelled. The page title is the h1,
//     so the first heading may be ## (or #, which converted pages sometimes open with).
//   - no paragraph that is only a number with a dot (`23.`): a question number or a list number the
//     converter split off its text (a bare number without a dot is a table cell, see docs/conversion.md)
//   - every `/images/…` picture a page uses must exist in public/ (check-links only sees <a>)
//   - every picture needs alt text: `![](…)` / `![ ](…)` and `<img>` without a non-empty alt.
// Fenced code is skipped (a shell comment `# …` is not a heading).
//
//     node scripts/check-content.mjs

import { existsSync } from 'node:fs';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const CONTENT = path.resolve(import.meta.dirname, '../src/content');
const PUBLIC = path.resolve(import.meta.dirname, '../public');

async function* markdownFiles(dir) {
	for (const e of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, e.name);
		if (e.isDirectory()) yield* markdownFiles(full);
		else if (e.name.endsWith('.md')) yield full;
	}
}

const problems = [];
let pages = 0;
for await (const file of markdownFiles(CONTENT)) {
	pages++;
	const rel = path.relative(CONTENT, file);
	const text = (await readFile(file, 'utf8')).replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '');
	const startLine = (await readFile(file, 'utf8')).split('\n').length - text.split('\n').length;
	let fence = null;
	let prev = 1; // the title is the h1
	text.split('\n').forEach((line, i) => {
		const at = `${rel}:${startLine + i + 1}`;
		const f = /^\s*(`{3,}|~{3,})/.exec(line);
		if (f) {
			if (!fence) fence = f[1][0];
			else if (f[1][0] === fence) fence = null;
			return;
		}
		if (fence) return;
		if (/^\s*\d{1,3}\s*\\?\.\s*$/.test(line)) problems.push(`${at}: a lone number: ${line.trim()}`);
		const h = /^(#{1,6})\s+\S/.exec(line);
		if (h) {
			const level = Math.max(h[1].length, 2); // a leading "#" counts as the first level below the title
			if (level > prev + 1) problems.push(`${at}: heading skips from h${prev} to h${level}: ${line.slice(0, 60)}`);
			prev = level;
		}
		for (const m of line.matchAll(/(?:\ssrc="|\]\()(\/images\/[^"\s)]+)/g))
			if (!existsSync(path.join(PUBLIC, m[1]))) problems.push(`${at}: missing picture ${m[1]}`);
		const prose = line.replace(/`[^`]*`/g, ''); // an <img> shown as inline code is not a picture
		for (const m of prose.matchAll(/!\[([^\]]*)\]\(/g))
			if (!m[1].trim()) problems.push(`${at}: image without alt text`);
		for (const m of prose.matchAll(/<img\b[^>]*>/gi))
			if (!/\balt=("[^"]*\S[^"]*"|'[^']*\S[^']*')/i.test(m[0])) problems.push(`${at}: <img> without alt text`);
	});
}

if (problems.length) {
	console.error(`${problems.length} content problem(s):\n${problems.join('\n')}`);
	process.exit(1);
}
console.log(`OK — headings and image alt texts of ${pages} pages checked.`);
