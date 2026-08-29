#!/usr/bin/env node
// Scans the raw MATURITA HADR source tree and generates per-subject manifest
// JSON files (scripts/manifest/{cj,mat,aj,it}.json) consumed by
// convert-docx.mjs and convert-pdf.py. See the plan for curation rationale.

import { readdir, stat, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const WEB_ROOT = path.resolve(import.meta.dirname, '..');
const REPO_ROOT = path.resolve(WEB_ROOT, '..');
const HADR = path.join(REPO_ROOT, 'MATURITA HADR');

const DIACRITICS_MAP = {
	á: 'a', č: 'c', ď: 'd', é: 'e', ě: 'e', í: 'i', ň: 'n', ó: 'o', ř: 'r',
	š: 's', ť: 't', ú: 'u', ů: 'u', ý: 'y', ž: 'z',
};

function slugify(input) {
	let s = input.toLowerCase();
	s = s.replace(/[áčďéěíňóřšťúůýž]/g, (c) => DIACRITICS_MAP[c] ?? c);
	s = s.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
	return s || 'x';
}

async function walk(dir) {
	const out = [];
	let entries;
	try {
		entries = await readdir(dir, { withFileTypes: true });
	} catch {
		return out;
	}
	for (const e of entries) {
		const full = path.join(dir, e.name);
		if (e.isDirectory()) out.push(...(await walk(full)));
		else out.push(full);
	}
	return out;
}

function relSrc(absPath) {
	return path.relative(REPO_ROOT, absPath);
}

const DOC_EXT_RANK = { '.docx': 4, '.odt': 3, '.doc': 2, '.pdf': 1 };

// ---------------------------------------------------------------------------
// ČJ — literatura: one folder per book, pick the most complete candidate file
// ---------------------------------------------------------------------------
// These book folders only contain a scanned image of handwritten notes (no
// text layer, OCR on handwriting produces unusable garbage — see README).
// convert-pdf.py leaves the existing placeholder file alone for these instead
// of overwriting it with an empty conversion.
const NO_TEXT_LAYER_BOOKS = new Set([
	'Sofoklés - Antigona',
	'Božena Němcová - Babička',
	'Henryk Sienkiewicz - Quo Vadis',
	'Jan Werich - Balada z Hadrů',
	'Milan Uhde - Balada Pro Banditu',
	'Ladislav Smoljak a Zdeněk Svěrák - České Nebe',
	'Karel Čapek - Povídky z Jedné a Druhé Kapsy',
	'Johann Wolfgang von Goethe - Utrpení mladého Werthera',
	'Ladislav Smoljak a Zdeněk Svěrák - Dobytí Severního Pólu',
]);

async function buildCJ() {
	const items = [];
	const litRoot = path.join(HADR, 'ČESKÝ JAZYK - VŠE', 'Český jazyk - rozbory děl k maturitě');
	const bookDirs = (await readdir(litRoot, { withFileTypes: true }))
		.filter((e) => e.isDirectory())
		.map((e) => e.name)
		.sort((a, b) => a.localeCompare(b, 'cs'));

	const noCandidate = [];
	for (const bookName of bookDirs) {
		const bookDir = path.join(litRoot, bookName);
		const files = (await walk(bookDir)).filter((f) => DOC_EXT_RANK[path.extname(f).toLowerCase()]);
		if (files.length === 0) {
			noCandidate.push(bookName);
			continue;
		}
		const scored = await Promise.all(
			files.map(async (f) => {
				const ext = path.extname(f).toLowerCase();
				const size = (await stat(f)).size;
				return { f, ext, size, score: DOC_EXT_RANK[ext] * 1e9 + size };
			})
		);
		scored.sort((a, b) => b.score - a.score);
		const winner = scored[0];
		items.push({
			src: relSrc(winner.f),
			dest: `cj/literatura/${slugify(bookName)}.md`,
			title: bookName,
			_size: winner.size,
			...(NO_TEXT_LAYER_BOOKS.has(bookName) ? { skip: 'rukopisný scan bez textové vrstvy' } : {}),
		});
	}

	// two folders can differ only by capitalization (e.g. "Farma zvířat" vs
	// "Farma Zvířat") and slugify to the same dest — keep the larger file
	const bestByDest = new Map();
	for (const item of items) {
		const prev = bestByDest.get(item.dest);
		if (!prev || item._size > prev._size) bestByDest.set(item.dest, item);
	}
	items.length = 0;
	for (const item of bestByDest.values()) {
		delete item._size;
		items.push(item);
	}

	// theory / grammar
	const theory = [
		{
			src: path.join(HADR, 'ČESKÝ JAZYK - VŠE', 'Literární skupiny a období', 'lit skupiny, období _pojmyMZ2020.docx'),
			title: 'Literární skupiny a období — přehled pojmů',
		},
		{
			src: path.join(HADR, 'ČESKÝ JAZYK - VŠE', 'Český jazyk - umělecký-neumělecký text', 'Osnova_s_vysvětlivky.docx'),
			title: 'Umělecký a neumělecký text — osnova rozboru',
		},
	];
	for (const t of theory) {
		items.push({
			src: relSrc(t.src),
			dest: `cj/mluvnice-a-teorie/${slugify(t.title)}.md`,
			title: t.title,
		});
	}

	if (noCandidate.length) {
		console.warn(`[cj] bez převoditelného souboru (${noCandidate.length}):`, noCandidate);
	}
	return items;
}

// ---------------------------------------------------------------------------
// MAT — řešené postupy matematických okruhů ("N) Název.pdf", → resene-ulohy-dt)
// plus nové výkladové materiály v ../matematika/ ("TY01_0NNN Název.pdf/pptx")
// ---------------------------------------------------------------------------

// pptx filenames have their diacritics stripped ("Bod_a_primka_v_kartezske
// soustave") — the real title only survives inside the slide content itself
// (which the boilerplate-stripping step in convert-pdf.py removes), so titles
// for this batch are hand-corrected here instead of derived from the filename.
const MAT_TY_TITLE = {
	121: 'Bod a přímka v kartézské soustavě',
	122: 'Úsečka, střed a délka úsečky',
	123: 'Operace s vektory',
	124: 'Součet a rozdíl vektorů',
	125: 'Úhel dvou vektorů',
	126: 'Směrový a normálový vektor',
	127: 'Parametrické vyjádření přímky',
	128: 'Obecná rovnice přímky',
	129: 'Směrnicový tvar rovnice přímky',
	130: 'Kuželosečky',
	131: 'Kružnice',
	132: 'Kartézská soustava souřadnic',
	201: 'Kvadratická funkce',
	202: 'Kvadratická rovnice',
	203: 'Kvadratická nerovnice',
	204: 'Soustava lineární a kvadratické rovnice',
	205: 'Iracionální rovnice',
	206: 'Mocninné funkce',
	207: 'Inverzní funkce',
	208: 'Exponenciální funkce a její posunutí',
	209: 'Exponenciální rovnice',
	210: 'Logaritmická funkce a její posunutí',
	211: 'Logaritmus, věty o logaritmování, logaritmické rovnice',
	212: 'Goniometrické funkce',
	213: 'Úprava výrazů s goniometrickými funkcemi',
	214: 'Goniometrické rovnice',
	215: 'Posloupnost – obecná posloupnost',
	216: 'Aritmetická posloupnost',
	217: 'Geometrická posloupnost',
	218: 'Statistika – základní pojmy',
	219: 'Statistika – šetření',
	220: 'Statistika – grafy',
	221: 'Statistika – charakteristiky polohy',
	222: 'Statistika – charakteristiky variability',
	223: 'Statistika – korelace',
	224: 'Statistika – příprava a vyhotovení dotazníku',
	225: 'Variace a permutace bez opakování',
	226: 'Faktoriál',
	227: 'Kombinace bez opakování',
	228: 'Variace a permutace s opakováním',
	229: 'Vlastnosti kombinačních čísel',
	230: 'Binomická věta',
	231: 'Pascalův trojúhelník',
	232: 'Kombinatorika v praxi',
	233: 'Úvod do kombinatoriky',
};
// "Úvod do kombinatoriky" (233) is numbered last but reads first
const MAT_TY_EXTRA_ORDER = { 233: 0 };

function matTyCategory(n) {
	if (n <= 10) return 'stereometrie';
	if (n <= 120) return 'planimetrie';
	if (n <= 132) return 'analyticka-geometrie';
	if (n <= 214) return 'funkce-a-rovnice';
	if (n <= 217) return 'posloupnosti';
	if (n <= 224) return 'statistika';
	return 'kombinatorika';
}

async function buildMAT() {
	const items = [];

	const dtDir = path.join(HADR, 'Matematika', 'řešené postupy matematických okruhů z DT 2010 - 2017');
	const dtFiles = (await readdir(dtDir)).filter((f) => f.toLowerCase().endsWith('.pdf'));
	for (const f of dtFiles) {
		const m = f.match(/^(\d+)\)\s*(.+)\.pdf$/i);
		const order = m ? Number(m[1]) : undefined;
		const title = (m ? m[2] : path.basename(f, '.pdf')).trim();
		items.push({
			src: relSrc(path.join(dtDir, f)),
			dest: `mat/resene-ulohy-dt/${String(order ?? 99).padStart(2, '0')}-${slugify(title)}.md`,
			title,
			order,
		});
	}

	const tyDir = path.join(REPO_ROOT, 'matematika');
	const tyFiles = (await readdir(tyDir)).filter((f) => /\.(pdf|pptx)$/i.test(f));
	const tyByCategory = new Map();
	for (const f of tyFiles) {
		const m = f.match(/^TY01_?(\d+)/);
		if (!m) throw new Error(`[mat] unexpected filename in matematika/: "${f}"`);
		const n = Number(m[1]);
		const ext = path.extname(f);
		const fallbackTitle = path
			.basename(f, ext)
			.replace(/^TY01_?\d+[\s_-]*/, '')
			.replace(/_/g, ' ')
			.trim();
		const title = MAT_TY_TITLE[n] ?? fallbackTitle;
		const category = matTyCategory(n);
		if (!tyByCategory.has(category)) tyByCategory.set(category, []);
		tyByCategory.get(category).push({ src: relSrc(path.join(tyDir, f)), title, n });
	}
	for (const [category, group] of tyByCategory) {
		group.sort((a, b) => (MAT_TY_EXTRA_ORDER[a.n] ?? a.n) - (MAT_TY_EXTRA_ORDER[b.n] ?? b.n));
		group.forEach((item, i) => {
			const order = i + 1;
			items.push({
				src: item.src,
				dest: `mat/${category}/${String(order).padStart(2, '0')}-${slugify(item.title)}.md`,
				title: item.title,
				order,
			});
		});
	}

	return items;
}

// ---------------------------------------------------------------------------
// IT — numbered topic files in IT/, grouped into ŠVP-aligned category folders
// (dest folder = subject slug from src/content/it/reference/svp-prehled.md §4.9)
// ---------------------------------------------------------------------------
const IT_CATEGORY_BY_PREFIX = {
	'1. Algoritmizace': 'programovani',
	'2. OS Linux': 'operacni-systemy',
	'3. OS Windows': 'operacni-systemy',
	'4. Autorský zákon': 'uvod-do-vypocetni-techniky',
	'5. Hardware pojmy': 'uvod-do-vypocetni-techniky',
	'6. Procesor a chipset': 'uvod-do-vypocetni-techniky',
	'7. Paměti': 'uvod-do-vypocetni-techniky',
	'8. Sběrnice': 'uvod-do-vypocetni-techniky',
	'9. Periferie': 'uvod-do-vypocetni-techniky',
	'10. Počítačové sítě': 'pocitacove-site',
	'11. Aktivní a pasivní': 'pocitacove-site',
	'12. ISOOSI': 'pocitacove-site',
	'13. Internet': 'pocitacove-site',
	'14. HTML a CSS': 'elektronicke-publikovani',
	'15. - 17. GIMP': 'grafika-na-pc',
	'18. Grafické formáty': 'grafika-na-pc',
	'19. Práce s audio': 'grafika-na-pc',
	'20. a 25. PowerPoint': 'aplikace-na-pc',
	'21. - 24. Word': 'aplikace-na-pc',
	'Datové-sítě': 'pocitacove-site',
	'Tech': 'uvod-do-vypocetni-techniky',
	DAT_I: 'databazove-systemy',
	'DAT_I-praktikum': 'databazove-systemy',
	RTR_CMD: 'pocitacove-site',
};

function itCategoryFor(base) {
	const hit = Object.entries(IT_CATEGORY_BY_PREFIX).find(([prefix]) => base.startsWith(prefix));
	if (!hit) throw new Error(`[it] no category mapping for "${base}" — add it to IT_CATEGORY_BY_PREFIX`);
	return hit[1];
}

// A few extra (non-numbered) files in IT/ have filenames that make poor
// titles verbatim — override with something readable.
const IT_TITLE_OVERRIDE = {
	Tech: 'Hardware – doplňkové poznámky (grafické karty, displeje a další)',
	'Datové-sítě': 'Datové sítě – doplňkové poznámky',
	DAT_I: 'Databáze I – teorie',
	'DAT_I-praktikum': 'Databáze I – praktikum',
	'RTR_CMD-2-CZ-_29_': 'Základní příkazy Cisco IOS pro správu směrovačů a přepínačů',
};
// tiebreak for otherwise-unordered files whose *titles* would sort wrong
// (e.g. "teorie" should come before "praktikum", not alphabetically after)
const IT_EXTRA_ORDER = { DAT_I: 1, 'DAT_I-praktikum': 2 };

// Extra current-year "Počítačové sítě" (3. ročník) source material the user
// dropped in ../site/ (sibling of MATURITA HADR) — not part of the original
// IT/ 24-topic archive, so it's scanned separately and merged into the same
// pocitacove-site category. Priority just keeps them in a sensible reading
// order relative to each other (they land after the old numbered 1-4 topics).
const SITE_DIR = path.join(REPO_ROOT, 'site');
const SITE_PDF_FILES = [
	{ file: 'Deleni_siti_2025.pdf', title: 'Dělení počítačových sítí (2025)', priority: 1 },
	{ file: 'Model_ISO_OSI_TCP_IP_NEW_2025.pdf', title: 'Síťový model ISO/OSI a TCP/IP', priority: 2 },
	{
		file: '01_Sitovy_HW_pasivni_prvky_kabely_KOAX_UTP.pdf',
		title: 'Síťový HW – pasivní prvky, kabeláž (KOAX, UTP)',
		priority: 3,
	},
	// sitove_prvky.pdf and T08_aktivní_prvky.pdf deliberately excluded: both are
	// image-only slides (no text layer), OCR output was too garbled to be
	// usable and the ground they cover is already well explained in the clean
	// archive file 11-aktivni-a-pasivni-sitove-prvky (repeater/hub/bridge/switch).
	{ file: 'T09_sitova_karty.pdf', title: 'Síťové karty', priority: 4 },
	{ file: 'Ethernet_new.pdf', title: 'Ethernet a LAN', priority: 5 },
	{ file: 'IT3_IPv4_protokol.pdf', title: 'Síťová vrstva a IPv4 protokol', priority: 6 },
	{ file: 'IT3_IPv4_adresovani.pdf', title: 'IPv4 adresování', priority: 7 },
	{ file: 'IPv6_Adresovani.pdf', title: 'IPv6 adresování', priority: 8 },
];

async function buildIT() {
	const dir = path.join(HADR, 'IT');
	const files = (await readdir(dir)).filter((f) => /\.(docx|pdf)$/i.test(f));
	const raw = [];
	for (const f of files) {
		const ext = path.extname(f);
		const base = path.basename(f, ext);
		const m = base.match(/^(\d+)[.\s]/);
		const originalOrder = m ? Number(m[1]) : undefined;
		const title =
			IT_TITLE_OVERRIDE[base] ?? base.replace(/^[\d.\-\sa]+(?=[A-ZÁ-Ž])/u, '').trim() ?? base;
		raw.push({
			src: relSrc(path.join(dir, f)),
			title,
			originalOrder,
			extraPriority: IT_EXTRA_ORDER[base],
			category: itCategoryFor(base),
		});
	}

	for (const { file, title, priority } of SITE_PDF_FILES) {
		raw.push({
			src: relSrc(path.join(SITE_DIR, file)),
			title,
			originalOrder: undefined,
			extraPriority: priority,
			category: 'pocitacove-site',
		});
	}

	// The original maturitní-otázky numbering (1-25) is global and full of gaps
	// once split across ŠVP categories (e.g. "4,5,6,7,8,9" in one folder,
	// "2,3" in another) — renumber sequentially within each category instead,
	// keeping the original relative order (and new hand-written topics, which
	// already use clean per-category numbers, sort in naturally alongside).
	const byCategory = new Map();
	for (const item of raw) {
		if (!byCategory.has(item.category)) byCategory.set(item.category, []);
		byCategory.get(item.category).push(item);
	}
	const items = [];
	for (const group of byCategory.values()) {
		group.sort((a, b) => {
			if (a.originalOrder != null && b.originalOrder != null) return a.originalOrder - b.originalOrder;
			if (a.originalOrder != null) return -1;
			if (b.originalOrder != null) return 1;
			if (a.extraPriority != null && b.extraPriority != null) return a.extraPriority - b.extraPriority;
			if (a.extraPriority != null) return -1;
			if (b.extraPriority != null) return 1;
			return a.title.localeCompare(b.title, 'cs');
		});
		group.forEach((item, i) => {
			const order = i + 1;
			items.push({
				src: item.src,
				dest: `it/${item.category}/${String(order).padStart(2, '0')}-${slugify(item.title)}.md`,
				title: item.title,
				order,
			});
		});
	}
	return items;
}

// ---------------------------------------------------------------------------
// AJ — ANJ/Témata tree: topic = leaf folder name, category = theme folder
// ---------------------------------------------------------------------------
async function buildAJ() {
	const root = path.join(HADR, 'ANJ', 'Témata');
	const files = (await walk(root)).filter((f) => /\.(pdf|docx)$/i.test(f));
	const items = [];
	const seenDest = new Map();
	for (const f of files) {
		const rel = path.relative(root, f);
		const parts = rel.split(path.sep);
		const category = parts[0] === 'Témata' ? parts[1] : parts[0];
		const title = path.basename(path.dirname(f));
		const m = path.basename(f).match(/^(\d+)[_.]/);
		const order = m ? Number(m[1]) : undefined;
		let dest = `aj/${slugify(category)}/${slugify(title)}.md`;
		if (seenDest.has(dest)) {
			const n = seenDest.get(dest) + 1;
			seenDest.set(dest, n);
			dest = dest.replace(/\.md$/, `-${n}.md`);
		} else {
			seenDest.set(dest, 1);
		}
		items.push({ src: relSrc(f), dest, title, order });
	}
	return items;
}

async function main() {
	const manifestDir = path.join(WEB_ROOT, 'scripts', 'manifest');
	await mkdir(manifestDir, { recursive: true });
	const builders = { cj: buildCJ, mat: buildMAT, aj: buildAJ, it: buildIT };
	for (const [subject, build] of Object.entries(builders)) {
		const items = await build();
		await writeFile(
			path.join(manifestDir, `${subject}.json`),
			JSON.stringify(items, null, 2) + '\n'
		);
		console.log(`${subject}: ${items.length} položek`);
	}
}

main();
