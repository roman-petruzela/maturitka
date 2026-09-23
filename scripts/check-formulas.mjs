#!/usr/bin/env node
// The formula sheet (src/content/02-mat/01-reference/prehled-vzorcu.md) repeats formulas that stand
// in the math topic pages. Nothing else links the two, so an edit to a topic could leave the sheet
// with a formula the page no longer has (or a typo could slip into the sheet). This checks that every
// formula of the sheet — the `tex` of each ```formulas card, the $…$ in its label and note, and the
// $…$ in the tables — still occurs, whitespace aside, in the topic page its ### heading links to.
//
//     node scripts/check-formulas.mjs
//
// A formula written with \dfrac / \tfrac / a \displaystyle prefix counts as the same as \frac.

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const WEB_ROOT = path.resolve(import.meta.dirname, '..');
const MAT = path.join(WEB_ROOT, 'src/content/02-mat');
const SHEET = path.join(MAT, '01-reference/prehled-vzorcu.md');

const norm = (s) =>
	s
		.replace(/\\displaystyle/g, '')
		.replace(/\\[dt]frac/g, '\\frac')
		.replace(/\s+/g, '');

// "/mat/planimetrie/04-trojuhelnik-obecny/" -> src/content/02-mat/04-planimetrie/04-trojuhelnik-obecny.md
async function pageOf(href, dirs) {
	const m = /^\/mat\/([^/]+)\/([^/]+)\/$/.exec(href);
	if (!m) return null;
	const dir = dirs.find((d) => d.replace(/^\d+-/, '') === m[1]);
	return dir ? path.join(MAT, dir, `${m[2]}.md`) : null;
}

const dirs = (await readdir(MAT, { withFileTypes: true })).filter((e) => e.isDirectory()).map((e) => e.name);
const lines = (await readFile(SHEET, 'utf8')).split('\n');

const problems = [];
let checked = 0;
let source = null; // the normalised text of the topic page the current ### heading links to
let where = '';
const check = (formula, what) => {
	checked++;
	if (source === null) problems.push(`${what}: no topic page to check "${formula}" against`);
	else if (!source.includes(norm(formula))) problems.push(`${where} — ${what}: ${formula}`);
};
const dollars = (text) => [...text.matchAll(/\$([^$]+)\$/g)].map((m) => m[1]);

for (let i = 0; i < lines.length; i++) {
	const heading = /^### \[(.+?)\]\((.+?)\)/.exec(lines[i]);
	if (heading) {
		const file = await pageOf(heading[2], dirs);
		if (!file) {
			problems.push(`line ${i + 1}: the heading "${heading[1]}" links to ${heading[2]}, which is not a math page`);
			source = null;
		} else source = norm(await readFile(file, 'utf8'));
		where = heading[1];
		continue;
	}
	if (/^## /.test(lines[i])) source = null;
	if (lines[i].startsWith('```formulas')) {
		const end = lines.indexOf('```', i + 1);
		let spec;
		try {
			spec = JSON.parse(lines.slice(i + 1, end).join('\n'));
		} catch (e) {
			problems.push(`line ${i + 1}: the formulas block is not valid JSON (${e.message})`);
			i = end;
			continue;
		}
		const items = (spec.sections ?? [{ items: spec.items ?? [] }]).flatMap((s) => s.items);
		for (const item of items) {
			if (item.tex) check(item.tex, `"${item.label ?? '?'}"`);
			for (const f of [...dollars(item.label ?? ''), ...dollars(item.note ?? '')]) check(f, `"${item.label ?? '?'}" (label/note)`);
		}
		i = end;
	} else if (lines[i].startsWith('|')) {
		for (const f of dollars(lines[i])) check(f, `table row ${lines[i].slice(0, 30)}…`);
	}
}

if (problems.length) {
	console.error(`${problems.length} formula(s) of the sheet are not in their topic page:`);
	for (const p of problems) console.error('  ' + p);
	process.exit(1);
}
console.log(`OK — ${checked} formulas of the sheet found in their topic pages.`);
