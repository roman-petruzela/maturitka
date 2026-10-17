// Lists what the math whiteboard offers as tasks ("⇥ tabule") on every built math page:
// runs the real findExercises() from src/lib/exercises.ts against dist/ through a
// minimal DOM made of parse5 nodes (findExercises only walks siblings and reads text).
//
//   node scripts/list-exercises.mjs            one line per task: page, kind, start of the statement
//   node scripts/list-exercises.mjs --summary  number of tasks per page
//   node scripts/list-exercises.mjs <filter>   only pages whose path contains <filter>

import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { findExercises } from '../src/lib/exercises.ts';

const root = path.resolve(import.meta.dirname, '..', 'dist', 'mat');
const args = process.argv.slice(2);
const summary = args.includes('--summary');
const filter = args.find((a) => !a.startsWith('--')) ?? '';

/** wraps parse5 element nodes in the few DOM members findExercises uses */
const wrap = new WeakMap();
function el(node) {
	if (!node?.tagName) return null;
	let w = wrap.get(node);
	if (w) return w;
	const siblings = () => (node.parentNode?.childNodes ?? []).filter((n) => n.tagName);
	const classes = () => (node.attrs.find((a) => a.name === 'class')?.value ?? '').split(/\s+/);
	w = {
		node,
		tagName: node.tagName.toUpperCase(),
		get parentElement() {
			return el(node.parentNode);
		},
		get previousElementSibling() {
			const s = siblings();
			return el(s[s.indexOf(node) - 1]);
		},
		get nextElementSibling() {
			const s = siblings();
			return el(s[s.indexOf(node) + 1]);
		},
		get children() {
			return node.childNodes.filter((n) => n.tagName).map(el);
		},
		get textContent() {
			return textOf(node);
		},
		classList: { contains: (c) => classes().includes(c) },
		querySelectorAll: (sel) => select(node, sel),
		querySelector: (sel) => select(node, sel)[0] ?? null,
	};
	wrap.set(node, w);
	return w;
}

function textOf(node) {
	if (node.nodeName === '#text') return node.value;
	return (node.childNodes ?? []).map(textOf).join('');
}

// selectors in use: tag lists ("li, p, h2") and class lists (".spoiler, .spoiler-block")
function select(node, sel) {
	const parts = sel.split(',').map((s) => s.trim());
	const out = [];
	const walk = (n) => {
		for (const c of n.childNodes ?? []) {
			if (!c.tagName) continue;
			const cls = (c.attrs.find((a) => a.name === 'class')?.value ?? '').split(/\s+/);
			if (parts.some((p) => (p.startsWith('.') ? cls.includes(p.slice(1)) : c.tagName === p))) out.push(el(c));
			walk(c);
		}
	};
	walk(node);
	return out;
}

function findArticle(node) {
	if (node.tagName === 'article' && (node.attrs.find((a) => a.name === 'class')?.value ?? '').includes('topic'))
		return node;
	for (const c of node.childNodes ?? []) {
		const f = findArticle(c);
		if (f) return f;
	}
	return null;
}

function pages(dir) {
	return readdirSync(dir).flatMap((name) => {
		const p = path.join(dir, name);
		if (statSync(p).isDirectory()) return pages(p);
		return name === 'index.html' ? [p] : [];
	});
}

let total = 0;
for (const file of pages(root).sort()) {
	const rel = path.relative(root, path.dirname(file));
	if (filter && !rel.includes(filter)) continue;
	const article = findArticle(parse(readFileSync(file, 'utf8')));
	if (!article) continue;
	const tasks = findExercises(el(article));
	total += tasks.length;
	if (summary) {
		if (tasks.length) console.log(`${String(tasks.length).padStart(4)}  ${rel}`);
		continue;
	}
	for (const t of tasks) {
		const statement = t.nodes
			.map((n) => n.textContent)
			.join(' ')
			.replace(/\s+/g, ' ')
			.trim();
		console.log(`${rel}\t${t.kind}\t${statement.slice(0, 110)}`);
	}
}
console.error(`${total} tasks`);
