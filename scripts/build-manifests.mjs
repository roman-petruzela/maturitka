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
			dest: `cj/rozbor-knih-a-cetba/${slugify(bookName)}.md`,
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
	// explicit numeric order (not just alphabetical fallback) so the intro
	// (order 0) and reading list (order 9999, added below) reliably sort
	// first/last around the books instead of everything just falling back to
	// title order — sortEntriesByOrder always puts ordered items before
	// unordered ones, so leaving these without `order` would put the reading
	// list ahead of the books rather than after
	let bookOrder = 1;
	for (const item of bestByDest.values()) {
		delete item._size;
		item.order = bookOrder++;
		items.push(item);
	}

	// literatura — literární historie a teorie (období, směry, autoři)
	const literatura = [
		{
			src: path.join(HADR, 'ČESKÝ JAZYK - VŠE', 'Literární skupiny a období', 'lit skupiny, období _pojmyMZ2020.docx'),
			title: 'Literární skupiny a období — přehled pojmů',
			order: 1,
		},
	];
	for (const t of literatura) {
		items.push({ src: relSrc(t.src), dest: `cj/literatura/${slugify(t.title)}.md`, title: t.title, order: t.order });
	}

	// mluvnice — jazyková a literární teorie potřebná k rozboru textu
	const mluvnice = [
		{
			src: path.join(
				HADR,
				'ČESKÝ JAZYK - VŠE',
				'Český jazyk - Mluvnice ',
				'Literární druhy a žánry.docx'
			),
			title: 'Literární druhy a žánry',
			order: 1,
		},
	];
	for (const t of mluvnice) {
		items.push({ src: relSrc(t.src), dest: `cj/mluvnice/${slugify(t.title)}.md`, title: t.title, order: t.order });
	}

	// rozbor knih a četba — metodika rozboru a seznam četby jdou hned vedle
	// sebe na začátku (před samotnými rozbory konkrétních knih, order 1+)
	items.push({
		src: relSrc(
			path.join(HADR, 'ČESKÝ JAZYK - VŠE', 'Český jazyk - umělecký-neumělecký text', 'Osnova_s_vysvětlivky.docx')
		),
		dest: 'cj/rozbor-knih-a-cetba/00-umelecky-a-neumelecky-text-osnova-rozboru.md',
		title: 'Umělecký a neumělecký text — osnova rozboru',
		order: -1,
	});
	items.push({
		src: relSrc(path.join(REPO_ROOT, 'cjl', 'Seznam četby k MZ (1).docx')),
		dest: 'cj/rozbor-knih-a-cetba/zz-seznam-cetby-k-mz.md',
		title: 'Seznam četby k maturitní zkoušce',
		order: 0,
	});

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

	// ../mat (1. ročník worksheets on expressions/roots, plus three 2. ročník
	// study-text chapters that fit right into the existing funkce-a-rovnice
	// category). Skipped: IT2M.xlsx (an orphan physics-looking data table, not
	// math course content), "Kopie souboru M_IT2.docx" (an administrative
	// syllabus, not learning content) and the standalone screenshot image.
	const mat1Dir = path.join(REPO_ROOT, 'mat');
	const MAT1_SKIP = new Set(['IT2M.xlsx', 'Kopie souboru M_IT2.docx', 'zápis výrazů.png']);
	const IT2M_TITLE = {
		IT2M_1: 'Kvadratická funkce v praxi',
		IT2M_2: 'Kvadratická rovnice (učební text)',
		IT2M_3: 'Exponenciální funkce v praxi',
	};
	const IT2M_ORDER = { IT2M_1: 100, IT2M_2: 101, IT2M_3: 102 };
	let mat1Files;
	try {
		mat1Files = (await readdir(mat1Dir)).filter(
			(f) => /\.(pdf|docx|doc|odt|pptx)$/i.test(f) && !MAT1_SKIP.has(f)
		);
	} catch {
		mat1Files = [];
	}
	mat1Files.sort((a, b) => a.localeCompare(b, 'cs'));
	const vyrazyGroup = [];
	for (const f of mat1Files) {
		const ext = path.extname(f);
		const base = path.basename(f, ext);
		if (base in IT2M_TITLE) {
			// these belong with the existing 2. ročník content, not the new
			// 1. ročník "vyrazy-a-mocniny" bucket — order continues after it
			items.push({
				src: relSrc(path.join(mat1Dir, f)),
				dest: `mat/funkce-a-rovnice/${IT2M_ORDER[base]}-${slugify(IT2M_TITLE[base])}.md`,
				title: IT2M_TITLE[base],
				order: IT2M_ORDER[base],
			});
			continue;
		}
		const title = base.replace(/[_\-]+/g, ' ').replace(/\s+/g, ' ').trim();
		vyrazyGroup.push({ src: relSrc(path.join(mat1Dir, f)), title });
	}
	vyrazyGroup.sort((a, b) => a.title.localeCompare(b.title, 'cs'));

	// ../mat2 (more 1. ročník material: výroková logika a množiny, číselné
	// obory) — these are logically *earlier* than the mnohočleny/odmocniny
	// content above (výroková logika comes first in the ŠVP sequence), so
	// they get explicit low priorities and sort before vyrazyGroup's
	// alphabetical items rather than just being appended after them.
	const mat2Dir = path.join(REPO_ROOT, 'mat2');
	const MAT2_SKIP = new Set(['Kvantifikované výroky-1.pdf']); // byte-identical duplicate
	const MAT2_ORDER = [
		'Výrok, negace výroku.pdf',
		'Složené výroky - konjunkce a disjunkce.pdf',
		'Negace složených výroků.pdf',
		'Kvantifikované výroky.pdf',
		'Implikace a ekvivalence.pdf',
		'Množiny.pdf',
		'Číselné obory.pdf',
		'Intervaly.pdf',
		'Absolutní hodnota.pdf',
		'Mocniny s přirozeným mocnitelem.pdf',
	];
	let mat2Files;
	try {
		mat2Files = (await readdir(mat2Dir)).filter((f) => /\.(pdf|docx|doc|odt)$/i.test(f) && !MAT2_SKIP.has(f));
	} catch {
		mat2Files = [];
	}
	mat2Files.sort((a, b) => {
		const ia = MAT2_ORDER.indexOf(a);
		const ib = MAT2_ORDER.indexOf(b);
		if (ia !== -1 && ib !== -1) return ia - ib;
		if (ia !== -1) return -1;
		if (ib !== -1) return 1;
		return a.localeCompare(b, 'cs');
	});
	const mat2Group = mat2Files.map((f) => {
		const ext = path.extname(f);
		const base = path.basename(f, ext);
		return { src: relSrc(path.join(mat2Dir, f)), title: base };
	});

	[...mat2Group, ...vyrazyGroup].forEach((item, i) => {
		const order = i + 1;
		items.push({
			src: item.src,
			dest: `mat/vyrazy-a-mocniny/${String(order).padStart(2, '0')}-${slugify(item.title)}.md`,
			title: item.title,
			order,
		});
	});

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

// Generic scanner for a flat folder of source files that should all land in
// one category, sorted alphabetically (stable, and matches how the files
// were named by whoever dropped them in) unless a title override is given.
async function scanPlainFolder(dir, category, { titleOverride = {}, skip = new Set(), startPriority = 100, order = [] } = {}) {
	let files;
	try {
		files = (await readdir(dir)).filter(
			(f) => /\.(pdf|docx|doc|odt|pptx)$/i.test(f) && !skip.has(f)
		);
	} catch {
		return [];
	}
	// Explicit order list wins; anything not listed falls back to alphabetical,
	// appended after the listed files.
	const orderIndex = new Map(order.map((f, i) => [f, i]));
	files.sort((a, b) => {
		const ia = orderIndex.get(a);
		const ib = orderIndex.get(b);
		if (ia != null && ib != null) return ia - ib;
		if (ia != null) return -1;
		if (ib != null) return 1;
		return a.localeCompare(b, 'cs');
	});
	return files.map((f, i) => {
		const ext = path.extname(f);
		const base = path.basename(f, ext);
		const fallback = base.replace(/[_\-]+/g, ' ').replace(/\s+/g, ' ').trim();
		const title =
			titleOverride[f] ??
			titleOverride[base] ??
			(fallback ? fallback[0].toLocaleUpperCase('cs') + fallback.slice(1) : fallback);
		return {
			src: relSrc(path.join(dir, f)),
			title,
			originalOrder: undefined,
			extraPriority: startPriority + i,
			category,
		};
	});
}

// ../uvt (Úvod do výpočetní techniky, 1. ročník) — several filenames are just
// internal lesson codes (cast1_07, cv15-17, T02...) that make poor titles
// verbatim, override with something readable. Syllabus xlsx handled
// separately (converted by hand into a reference doc, like the sítě plán).
const UVT_TITLE = {
	cast1_07_mainboard: 'Základní deska (mainboard)',
	cast1_08_chipset: 'Chipset',
	cast2_01_sbernice: 'Sběrnice',
	'cv15-17_RAM_ROM': 'Paměti RAM a ROM',
	'cv18-19_HDD_SSD': 'Pevné disky HDD a SSD',
	cv20_CD_DVD_BR: 'Optické disky CD/DVD/Blu-ray',
	cv21_zdroj_UPS: 'Napájecí zdroj a UPS',
	cv22_Pocitacove_skrine: 'Počítačové skříně',
	'cv23-25_Zobrazovaci_soustava': 'Zobrazovací soustava',
	cv23_chlazeni_PC: 'Chlazení PC',
	cv24_tiskarny: 'Tiskárny',
	cv25_Zvukova_karta_reproduktory: 'Zvuková karta a reproduktory',
	cv26_klavesnice_mys_3Dmys_trackball: 'Klávesnice, myš, 3D myš, trackball',
	T02_Historie_Vypocetni_techniky: 'Historie výpočetní techniky',
	T03_zakladni_deska: 'Základní deska',
	T04_CPU: 'CPU (procesor)',
};
const ROBOTIKA_DIR = path.join(REPO_ROOT, 'robotika1.pol');
const ROBOTIKA_TITLE = {
	cv01_elektrotechnicke_znacky: 'Elektrotechnické značky',
	'cv02_Instalace_vyvojoveho_prostredi+knihovny': 'Instalace vývojového prostředí a knihoven',
	cv03_Blikani_LED: 'Blikání LED',
	cv04_LED_tlacitko_prom: 'LED a tlačítko s proměnnou',
	cv05_LED_potenciometr: 'LED a potenciometr',
	cv06_5xLED_potenciometr: '5× LED a potenciometr',
	cv07a_had_5xLED: 'Had z 5 LED',
	cv07b_hraci_kostka: 'Hrací kostka',
	cv09a_skener_sbernice_I2C: 'Skener sběrnice I2C',
	cv09b_I2C_LCD_displej: 'I2C LCD displej',
	cv10_teplota_LCD_displej: 'Teplota na LCD displeji',
	cv11_Sedmisegmentovy_displej: 'Sedmisegmentový displej',
	cv12_4mistny_segmentovy_displej: '4místný segmentový displej',
	cv13_LEDmatice8x8: 'LED matice 8×8',
};
const ROBOTIKA_ORDER = [
	'cv01_elektrotechnicke_znacky.pdf',
	'cv02_Instalace_vyvojoveho_prostredi+knihovny.pdf',
	'cv03_Blikani_LED.pdf',
	'cv04_LED_tlacitko_prom.pdf',
	'cv05_LED_potenciometr.pdf',
	'cv06_5xLED_potenciometr.pdf',
	'cv07a_had_5xLED.pdf',
	'cv07b_hraci_kostka.pdf',
	'cv09a_skener_sbernice_I2C.pdf',
	'cv09b_I2C_LCD_displej.pdf',
	'cv10_teplota_LCD_displej.pdf',
	'cv11_Sedmisegmentovy_displej.pdf',
	'cv12_4mistny_segmentovy_displej.pdf',
	'cv13_LEDmatice8x8.pdf',
];
const UVT_DIR = path.join(REPO_ROOT, 'uvt');
const UVT_SKIP = new Set([
	'ZZ_UVT_IT1_2023_2024_Martiník.xlsx',
	// Both badly garbled by PPTX text-box reading order (a floating "časová osa"
	// timeline decoration interleaves mid-sentence throughout) and redundant —
	// T02_Historie_Vypocetni_techniky.pdf covers the same history cleanly.
	'Historie VT - 01 Výklad.pptx',
	'Historie VT - 02 test1 - procvičení.pptx',
]);

// ../grafika (Grafika na PC) — the VY_32_INOVACE_* files have cryptic
// filenames; titles below come from the "Název:"/first-slide text of each.
const GRAFIKA_DIR = path.join(REPO_ROOT, 'grafika');
const GRAFIKA_SKIP = new Set([
	'GRA_IT1_2023_2024_Martinik.xlsx',
	// duplicate drafts of the same "Pohyb po křivce" deck — keep only the plain one
	'VY_32_INOVACE_3224_16-1.pdf',
	'VY_32_INOVACE_3224_16-2.pdf',
]);
const GRAFIKA_TITLE = {
	VY_32_INOVACE_3222_01_Uvod: 'Úvod do vektorové grafiky',
	VY_32_INOVACE_3222_02_PracvoniPlocha: 'Pracovní plocha a základní práce s objekty',
	VY_32_INOVACE_3222_03_TvarovaniObjektu: 'Tvarování objektů',
	VY_32_INOVACE_3222_04_Usecky: 'Kreslení čar – úsečky',
	VY_32_INOVACE_3222_05_Krivky: 'Kreslení čar – křivky',
	VY_32_INOVACE_3222_06_Barvy_1: 'Barvy – základní práce',
	VY_32_INOVACE_3222_07_Barvy_2: 'Barvy – pokročilé práce',
	VY_32_INOVACE_3222_10_Text_1: 'Práce s textem',
	VY_32_INOVACE_3222_11_Text_2: 'Úprava textu',
	VY_32_INOVACE_3223_01: 'Základní charakteristika programu GIMP',
	VY_32_INOVACE_3223_02: 'GIMP – výběrové metody a kreslení tvarů',
	VY_32_INOVACE_3223_07: 'GIMP – úprava jasu a kontrastu fotografie',
	VY_32_INOVACE_3223_08: 'GIMP – korekce barev fotografie',
	VY_32_INOVACE_3223_10: 'GIMP – maska',
	VY_32_INOVACE_3223_11: 'GIMP – výběrové metody a úprava fotografie',
	VY_32_INOVACE_3223_13: 'GIMP – odstranění červených očí',
	VY_32_INOVACE_3224_01: '3D systémy',
	VY_32_INOVACE_3224_02: 'Blender – základní charakteristika a rozhraní programu',
	VY_32_INOVACE_3224_03: 'Blender – modelování',
	VY_32_INOVACE_3224_04: 'Blender – modelování: zarovnávání objektů',
	VY_32_INOVACE_3224_05: 'Blender – modelování: množinové operace s objekty',
	VY_32_INOVACE_3224_06: 'Blender – modelování: křivky a plochy',
	VY_32_INOVACE_3224_07: 'Blender – světla',
	VY_32_INOVACE_3224_08: 'Blender – modifikátory',
	VY_32_INOVACE_3224_09: 'Blender – simulace tekutin',
	VY_32_INOVACE_3224_11: 'Blender – materiály a textury',
	VY_32_INOVACE_3224_12: 'Blender – UV textury',
	VY_32_INOVACE_3224_15: 'Blender – animace',
	VY_32_INOVACE_3224_16: 'Blender – pohyb po křivce',
	VY_32_INOVACE_3224_17: 'Blender – rendering',
	VY_32_INOVACE_3224_18: 'Blender – zobrazení normál ploch',
};

// ../osy (Operační systémy) — filenames are already descriptive.
const OSY_DIR = path.join(REPO_ROOT, 'osy');
const OSY_SKIP = new Set([
	'soubory.png',
	'složky.png',
	'ukol.jpg',
	// byte-identical duplicates of the non-"-1" file (confirmed via diff)
	'Historie_OS-1.pdf',
	'Operační_systémy-1.pdf',
	'Úvod_do _operačních_systémů-1.pdf',
	// pure task/exercise lists with no explanatory content of their own —
	// not "učební materiál" on their own (per user direction 2026-08-29);
	// no natural theory sibling to merge into, so dropped rather than kept
	'Práce s uživateli a skupinami.docx',
	'Úlohy.docx',
	'Úlohy2.docx',
	'zadani.pdf',
	'úkol1.docx',
	'úkol 2.docx',
	'úkoly_oprávnění.docx',
	'úkol_práce_s_disky.docx',
	'Praxe.docx',
	'samostatná_práce.docx',
	'samostatné_úkoly.docx',
	'Ubuntu_závěrečná_práce.docx',
	'Závěrečné opakování.docx',
	// merged as a "Cvičení"/"Otázky k opakování" section into their theory
	// sibling instead of standing alone (see the sibling file's history)
	'peer-to-peer_shrnutí_praxe.pdf',
	'Praktické využití GPO.docx',
	'opakování_viry.docx',
	'opakování.pdf',
	// superseded by newly-authored theory docs (Active Directory + cmd
	// scripting, SSH, Samba) that fold these exercises in as a "Cvičení"
	// section — see 49/50/51-*.md (hand-authored, order 201-203)
	'Tvorba skriptů v cmd - průvodce.docx',
	'skripty_opakování_test.docx',
	'práce_v_AD.docx',
	'ssh_klíče.docx',
	'Rozjeď samba server.docx',
]);
const OSY_TITLE = {
	'plán': 'Tematický plán (přehled látky)',
	'základní_pojmy': 'Základní pojmy (hardware, software)',
	'Úvod_do _operačních_systémů': 'Úvod do operačních systémů',
	Historie_OS: 'Historie operačních systémů',
	'Operační_systémy': 'Operační systémy',
	Licence: 'Licence a autorský zákon',
	'příkazový řádek': 'Příkazový řádek (cmd)',
	'práce se sítí': 'Práce se sítí (příkazy)',
	'Tvorba skriptů v cmd - průvodce': 'Tvorba skriptů v cmd — průvodce',
	skripty_opakování_test: 'Skripty — opakování (test)',
	ssh_klíče: 'SSH klíče',
	'Rozjeď samba server': 'Rozjeď samba server',
	'Práce s uživateli a skupinami': 'Práce s uživateli a skupinami',
	Uživatelské_účty_a_hesla: 'Uživatelské účty a hesla',
	Uživatelské_profily: 'Uživatelské profily',
	uživatelská_práva_a_oprávnění: 'Uživatelská práva a oprávnění',
	práce_v_AD: 'Práce v Active Directory',
	GPO: 'GPO (zásady skupiny)',
	'Praktické využití GPO': 'Praktické využití GPO',
	práce_s_disky: 'Práce s disky',
	'pevný_disk_a_nástroje pro údržbu': 'Pevný disk a nástroje pro údržbu',
	RAID: 'RAID',
	'použití stínové kopie svazku_pevne odkazy_diskové kvoty':
		'Stínové kopie svazku, pevné odkazy, diskové kvóty',
	shadow_copy: 'Shadow copy (anglický text k procvičení)',
	'Stínové kopie svazku': 'Stínové kopie svazku — praktické využití',
	Zálohování_dat: 'Zálohování dat',
	zálohovací_média_shrnutí: 'Zálohovací média — shrnutí',
	DHCP: 'DHCP',
	'peer-to-peer': 'Síť peer-to-peer',
	'peer-to-peer_shrnutí_praxe': 'Síť peer-to-peer — shrnutí praxe',
	'antivirové programy': 'Antivirové programy',
	Malware: 'Malware',
	opakování_viry: 'Opakování — viry a malware',
	firewall: 'Firewall',
	'Úlohy': 'Úlohy — práce se soubory a složkami 1',
	'Úlohy2': 'Úlohy — práce se soubory a složkami 2',
	zadani: 'Zadání — práce se soubory',
	úkol1: 'Úkol — uživatelé a skupiny 1',
	'úkol 2': 'Úkol — uživatelé a skupiny 2',
	úkoly_oprávnění: 'Úkoly — oprávnění',
	úkol_práce_s_disky: 'Úkol — práce s disky',
	Praxe: 'Praxe — zásady hesel',
	samostatná_práce: 'Samostatná práce — doména',
	samostatné_úkoly: 'Samostatné úkoly',
	Ubuntu_závěrečná_práce: 'Ubuntu — závěrečná práce',
	'Závěrečné opakování': 'Závěrečné opakování',
	'opakování': 'Opakování (kvíz)',
};
// Curated reading order (theory intro → linux/CLI → user & AD management →
// storage/backup → networking → security → practical exercises at the end),
// not alphabetical — OS Linux/OS Windows always sort first (see
// IT_CATEGORY_BY_PREFIX, originalOrder beats extraPriority), so this picks up
// right after them.
const OSY_ORDER = [
	'plán.docx',
	'základní_pojmy.docx',
	'Úvod_do _operačních_systémů.pdf',
	'Historie_OS.pdf',
	'Operační_systémy.pdf',
	'Licence.pptx',
	'příkazový řádek.pdf',
	'práce se sítí.docx',
	'Tvorba skriptů v cmd - průvodce.docx',
	'skripty_opakování_test.docx',
	'ssh_klíče.docx',
	'Rozjeď samba server.docx',
	'Práce s uživateli a skupinami.docx',
	'Uživatelské_účty_a_hesla.pdf',
	'Uživatelské_profily.pdf',
	'uživatelská_práva_a_oprávnění.pdf',
	'práce_v_AD.docx',
	'GPO.pdf',
	'Praktické využití GPO.docx',
	'práce_s_disky.pdf',
	'pevný_disk_a_nástroje pro údržbu.pptx',
	'RAID.pdf',
	'použití stínové kopie svazku_pevne odkazy_diskové kvoty.pdf',
	'shadow_copy.docx',
	'Stínové kopie svazku.docx',
	'Zálohování_dat.pdf',
	'zálohovací_média_shrnutí.pdf',
	'DHCP.pdf',
	'peer-to-peer.pdf',
	'peer-to-peer_shrnutí_praxe.pdf',
	'antivirové programy.pdf',
	'Malware.pdf',
	'opakování_viry.docx',
	'firewall.pptx',
	'Úlohy.docx',
	'Úlohy2.docx',
	'zadani.pdf',
	'úkol1.docx',
	'úkol 2.docx',
	'úkoly_oprávnění.docx',
	'úkol_práce_s_disky.docx',
	'Praxe.docx',
	'samostatná_práce.docx',
	'samostatné_úkoly.docx',
	'Ubuntu_závěrečná_práce.docx',
	'Závěrečné opakování.docx',
	'opakování.pdf',
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

	raw.push(
		...(await scanPlainFolder(UVT_DIR, 'uvod-do-vypocetni-techniky', {
			titleOverride: UVT_TITLE,
			skip: UVT_SKIP,
			startPriority: 100,
		}))
	);
	raw.push(
		...(await scanPlainFolder(GRAFIKA_DIR, 'grafika-na-pc', {
			titleOverride: GRAFIKA_TITLE,
			skip: GRAFIKA_SKIP,
			startPriority: 100,
		}))
	);
	raw.push(
		...(await scanPlainFolder(OSY_DIR, 'operacni-systemy', {
			titleOverride: OSY_TITLE,
			skip: OSY_SKIP,
			order: OSY_ORDER,
			startPriority: 100,
		}))
	);

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

	// ../robotika1.pol — Arduino/elektronika cvičení z 1. pololetí robotiky.
	// Kategorie "robotika" už obsahuje ručně psaný úvodní teoretický materiál
	// (src/content/it/robotika/01-robotika-a-mikropocitace.md, order 1, mimo
	// manifest), tyhle konkrétní cvičení tedy řadíme za něj počínaje order 2.
	let robotikaFiles;
	try {
		robotikaFiles = (await readdir(ROBOTIKA_DIR)).filter((f) => /\.pdf$/i.test(f));
	} catch {
		robotikaFiles = [];
	}
	robotikaFiles.sort((a, b) => ROBOTIKA_ORDER.indexOf(a) - ROBOTIKA_ORDER.indexOf(b));
	robotikaFiles.forEach((f, i) => {
		const base = path.basename(f, path.extname(f));
		const title = ROBOTIKA_TITLE[base] ?? base;
		const order = i + 2;
		items.push({
			src: relSrc(path.join(ROBOTIKA_DIR, f)),
			dest: `it/robotika/${String(order).padStart(2, '0')}-${slugify(title)}.md`,
			title,
			order,
		});
	});

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

// ---------------------------------------------------------------------------
// New general-education subjects, added in bulk with minimal curation ("just
// get them onto the site") — flat folder, one file = one topic, category =
// immediate subfolder name if there is one. Leading "N." / "N-" in the
// filename becomes the order; dest collisions (two files that slugify to the
// same title) get a numeric suffix like buildAJ() does.
// ---------------------------------------------------------------------------
async function buildSimpleSubject(dir, subjectKey, { skip = new Set(), category = null, sourceLabel } = {}) {
	const files = (await walk(dir)).filter((f) => /\.(pdf|docx|doc|odt)$/i.test(f) && !skip.has(path.basename(f)));
	const items = [];
	const seenDest = new Map();
	for (const f of files) {
		const ext = path.extname(f);
		const base = path.basename(f, ext);
		const m = base.match(/^(\d+)[.\-_]/);
		const order = m ? Number(m[1]) : undefined;
		const title = base.replace(/^(\d+)[.\-_]\s*/, '').replace(/[_\-]+/g, ' ').replace(/\s+/g, ' ').trim();
		const cased = title ? title[0].toLocaleUpperCase('cs') + title.slice(1) : title;
		const catPart = category ? `${category}/` : '';
		let dest = `${subjectKey}/${catPart}${slugify(cased)}.md`;
		if (seenDest.has(dest)) {
			const n = seenDest.get(dest) + 1;
			seenDest.set(dest, n);
			dest = dest.replace(/\.md$/, `-${n}.md`);
		} else {
			seenDest.set(dest, 1);
		}
		const src = relSrc(f);
		items.push({ src, dest, title: cased, order, ...(sourceLabel ? { source: sourceLabel(src) } : {}) });
	}
	return items;
}

async function buildDejepis() {
	// the source folder name embeds a person's name — displayed `source:`
	// gets a generic label instead (see privacy-scrub convention elsewhere
	// in this file: never let a real name leak through the source path)
	return buildSimpleSubject(path.join(HADR, 'Dějepis (Eliška Sýkorová)'), 'dejepis', {
		sourceLabel: (src) => src.replace('Dějepis (Eliška Sýkorová)', 'Dějepis'),
	});
}

async function buildZemepis() {
	return buildSimpleSubject(path.join(HADR, 'Zeměpis', 'Zeměpis GLP'), 'zemepis');
}

async function buildFyzika() {
	return buildSimpleSubject(path.join(HADR, 'FYZIKA-maturitní otázky'), 'fyzika');
}

async function buildSpolecenskeVedy() {
	return buildSimpleSubject(path.join(HADR, 'Společenské vědy'), 'spolecenske-vedy');
}

async function buildPsychologie() {
	return buildSimpleSubject(path.join(HADR, 'PSYCHOLOGIE'), 'psychologie');
}

async function buildNemcina() {
	return buildSimpleSubject(path.join(HADR, 'Němčina'), 'nemcina');
}

// Ekonomie / Ekonomika / Účetnictví — three parallel sets of maturitní
// otázky (different schools/students), kept as three categories under one
// "ekonomika" subject rather than deduplicated against each other.
async function buildEkonomika() {
	const items = [];
	items.push(
		...(await buildSimpleSubject(path.join(HADR, 'Ekonomie'), 'ekonomika', {
			category: 'ekonomie',
			skip: new Set(['Maturita EKO.zip']),
		}))
	);
	items.push(...(await buildSimpleSubject(path.join(HADR, 'Ekonomika'), 'ekonomika', { category: 'ekonomika' })));
	items.push(...(await buildSimpleSubject(path.join(HADR, 'Účetnictví'), 'ekonomika', { category: 'ucetnictvi' })));
	return items;
}

// Právo — like ČJ's rozbory: one folder per topic, several candidate files
// inside (odt/docx/pdf/txt), pick the most complete one.
async function buildPravo() {
	const root = path.join(HADR, 'Právo');
	const topicDirs = (await readdir(root, { withFileTypes: true }))
		.filter((e) => e.isDirectory())
		.map((e) => e.name)
		.sort((a, b) => a.localeCompare(b, 'cs'));

	const items = [];
	for (const topicName of topicDirs) {
		const dir = path.join(root, topicName);
		const files = (await walk(dir)).filter((f) => DOC_EXT_RANK[path.extname(f).toLowerCase()]);
		if (files.length === 0) continue;
		const scored = await Promise.all(
			files.map(async (f) => {
				const ext = path.extname(f).toLowerCase();
				const size = (await stat(f)).size;
				return { f, score: DOC_EXT_RANK[ext] * 1e9 + size };
			})
		);
		scored.sort((a, b) => b.score - a.score);
		const m = topicName.match(/^(\d+)\.\s*/);
		const order = m ? Number(m[1]) : undefined;
		const title = topicName.replace(/^(\d+)\.\s*/, '').trim();
		items.push({ src: relSrc(scored[0].f), dest: `pravo/${slugify(title)}.md`, title, order });
	}
	return items;
}

async function main() {
	const manifestDir = path.join(WEB_ROOT, 'scripts', 'manifest');
	await mkdir(manifestDir, { recursive: true });
	const builders = {
		cj: buildCJ,
		mat: buildMAT,
		aj: buildAJ,
		it: buildIT,
		dejepis: buildDejepis,
		zemepis: buildZemepis,
		fyzika: buildFyzika,
		'spolecenske-vedy': buildSpolecenskeVedy,
		pravo: buildPravo,
		psychologie: buildPsychologie,
		ekonomika: buildEkonomika,
		nemcina: buildNemcina,
	};
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
