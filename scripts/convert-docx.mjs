#!/usr/bin/env node
// Converts docx/doc/odt source files into markdown content files for Astro,
// driven by a manifest JSON (see scripts/manifest/*.json).
//
// Usage: node scripts/convert-docx.mjs scripts/manifest/cj.json

import { readFile, writeFile, mkdir, mkdtemp, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import mammoth from 'mammoth';

const execFileAsync = promisify(execFile);

const REPO_ROOT = path.resolve(import.meta.dirname, '..', '..');
const WEB_ROOT = path.resolve(import.meta.dirname, '..');

// CommonMark requires no whitespace immediately inside emphasis delimiters
// ("__word __" does not close the bold, the trailing space breaks it) — mammoth
// happily emits that whenever the original Word bold run included the space
// after the word. Move the whitespace outside the delimiters instead.
function fixEmphasisWhitespace(md) {
	const fixDelim = (text, marker) => {
		const escaped = marker.replace(/[*]/g, '\\*');
		const re = new RegExp(`${escaped}([ \\t]*)([^\\n]*?[^ \\t\\n])([ \\t]*)${escaped}`, 'g');
		return text.replace(re, (_m, lead, inner, trail) => `${lead}${marker}${inner}${marker}${trail}`);
	};
	return fixDelim(fixDelim(md, '**'), '__');
}

// The source docx's own title (bold, no heading style) survives conversion as
// a standalone bold line — redundant since the page already renders the
// frontmatter title as <h1>, and it duplicates the *original* topic number,
// which no longer matches once topics get renumbered per category.
function stripLeadingTitleLine(md) {
	return md.replace(/^\s*(?:\*\*|__)[^\n]+(?:\*\*|__)\s*\n+/, '');
}

function cleanMarkdown(md) {
	return stripLeadingTitleLine(
		fixEmphasisWhitespace(
			md
				.replace(/\r\n/g, '\n')
				// drop embedded base64 images (mammoth inlines them as data URIs, which
				// can blow up a text-only study note to several MB for no benefit here)
				.replace(/!\[[^\]]*\]\(data:[^)]+\)/g, '*(obrázek vynechán)*')
		)
	)
		.replace(/[ \t]+\n/g, '\n')
		.replace(/\n{3,}/g, '\n\n')
		.trim() + '\n';
}

function yamlString(value) {
	return JSON.stringify(value);
}

function buildFrontmatter({ title, order, tags, source }) {
	const lines = ['---', `title: ${yamlString(title)}`];
	if (order != null) lines.push(`order: ${order}`);
	if (tags && tags.length) lines.push(`tags: [${tags.map(yamlString).join(', ')}]`);
	if (source) lines.push(`source: ${yamlString(source)}`);
	lines.push('---', '');
	return lines.join('\n');
}

async function toDocx(srcAbsPath, tmpDir) {
	const ext = path.extname(srcAbsPath).toLowerCase();
	if (ext === '.docx') return srcAbsPath;
	// .doc / .odt: use headless LibreOffice to get a .docx mammoth can read
	await execFileAsync('soffice', [
		'--headless',
		'--convert-to',
		'docx',
		'--outdir',
		tmpDir,
		srcAbsPath,
	]);
	const base = path.basename(srcAbsPath, ext);
	const converted = path.join(tmpDir, `${base}.docx`);
	if (!existsSync(converted)) {
		throw new Error(`LibreOffice conversion did not produce ${converted}`);
	}
	return converted;
}

async function forceResave(srcAbs, tmpDir) {
	// re-saving through LibreOffice normalizes the XML — fixes some .docx
	// files mammoth can't read directly (e.g. a list referencing a numId
	// with no matching numbering definition, "Cannot read properties of
	// undefined (reading 'numId')")
	await execFileAsync('soffice', [
		'--headless',
		'--convert-to',
		'docx:MS Word 2007 XML',
		'--outdir',
		tmpDir,
		srcAbs,
	]);
	const base = path.basename(srcAbs, path.extname(srcAbs));
	const converted = path.join(tmpDir, `${base}.docx`);
	if (!existsSync(converted)) throw new Error(`LibreOffice re-save did not produce ${converted}`);
	return converted;
}

async function convertOne(item, tmpDir) {
	const srcAbs = path.join(REPO_ROOT, item.src);
	const destAbs = path.join(WEB_ROOT, 'src', 'content', item.dest);
	const docxPath = await toDocx(srcAbs, tmpDir);
	let markdown, messages;
	try {
		({ value: markdown, messages } = await mammoth.convertToMarkdown({ path: docxPath }));
	} catch (err) {
		// malformed-numbering docx files mammoth can't parse directly — retry
		// once against a LibreOffice-normalized copy
		const resaved = await forceResave(srcAbs, tmpDir);
		({ value: markdown, messages } = await mammoth.convertToMarkdown({ path: resaved }));
	}
	const warnings = messages.filter((m) => m.type === 'warning');
	await mkdir(path.dirname(destAbs), { recursive: true });
	const frontmatter = buildFrontmatter({
		title: item.title,
		order: item.order,
		tags: item.tags,
		source: item.source ?? item.src,
	});
	await writeFile(destAbs, frontmatter + cleanMarkdown(markdown));
	return { item, warnings: warnings.length };
}

async function main() {
	const manifestPath = process.argv[2];
	if (!manifestPath) {
		console.error('Usage: node scripts/convert-docx.mjs <manifest.json>');
		process.exit(1);
	}
	const fullManifest = JSON.parse(await readFile(manifestPath, 'utf-8'));
	const supported = new Set(['.docx', '.doc', '.odt']);
	const manifest = fullManifest.filter((item) =>
		supported.has(path.extname(item.src).toLowerCase())
	);
	const skipped = fullManifest.length - manifest.length;
	const tmpDir = await mkdtemp(path.join(os.tmpdir(), 'maturitka-docx-'));
	let ok = 0;
	let failed = 0;
	try {
		for (const item of manifest) {
			try {
				const result = await convertOne(item, tmpDir);
				ok++;
				const warnFlag = result.warnings ? ` (${result.warnings} warnings)` : '';
				console.log(`OK   ${item.dest}${warnFlag}`);
			} catch (err) {
				failed++;
				console.error(`FAIL ${item.dest}: ${err.message}`);
			}
		}
	} finally {
		await rm(tmpDir, { recursive: true, force: true });
	}
	console.log(`\n${ok} converted, ${failed} failed, ${skipped} skipped (not docx/doc/odt)`);
	if (failed > 0) process.exitCode = 1;
}

main();
