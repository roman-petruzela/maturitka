// The "Klíčové vzorce" rail of an article: the display formulas of the page, cloned out of the
// rendered article rather than derived from the Markdown a second time — one source of truth, so
// it cannot drift, and it costs nothing at build time. See AGENTS.md → "Writing formulas in
// content" for the captioning rules.
//
// The text helpers at the top are pure (no DOM) so they can be tested from Node.

/**
 * A heading or bold lead-in tidied into a caption: "2) Goniometrické funkce — sin, cos, tg, cotg"
 * → "Goniometrické funkce". Numbering ("2)", "2b)", "a)") and parentheses go; of "popis — Název"
 * a capitalised tail is the name of the thing and wins ("… — Heronův vzorec" → "Heronův vzorec"),
 * a lower-case one only elaborates the heading, so there the front part wins.
 */
export function cleanLabel(s: string | null | undefined): string {
	let t = (s ?? '')
		.replace(/\s+/g, ' ')
		.replace(/^(?:\d+[a-z]?|[a-z])\s*[.)]\s*/i, '')
		.replace(/\s*\([^)]*\)\s*/g, ' ')
		.trim();
	const dash = /\s+[—–-]\s+/.exec(t);
	if (dash) {
		const head = t.slice(0, dash.index);
		const tail = t.slice(dash.index + dash[0].length);
		if (/^\p{Lu}/u.test(tail)) t = tail;
		// "Další vlastnosti — diagonály": the front says nothing, the tail is the name
		else if (GENERIC_HEAD.test(head) || GENERIC_CAPTION.test(head)) t = tail.charAt(0).toUpperCase() + tail.slice(1);
		else t = head;
	}
	return t.replace(/[:.\s]+$/, '').trim();
}

/** Section titles too general to caption a formula on their own ("Další vlastnosti — …"). */
const GENERIC_HEAD =
	/^(?:další\s+|ostatní\s+)?(?:vlastnost(?:i)?|poznámk[ay]|shrnutí|pokračování|doplnění|souvislosti)$/iu;

/**
 * Section titles that structure the text but name no formula ("Vzorce", "Shrnutí", "Odvození") —
 * a formula under one is captioned by the heading above it, or by the page's title.
 */
export const GENERIC_CAPTION =
	/^(?:vzorec|vzorce|výpočet|výpočty|shrnutí|shrnutí vzorců|odvození|základní znalosti|znalosti potřebné k řešení|základní vlastnosti|přehled|teorie|úvod)$/iu;

/**
 * Where a formula belongs to a task or a worked example rather than to the theory: a heading
 * ("Příklady na procvičení", "Ukázkový příklad", "Úkol") or the paragraph that leads to it
 * ("Řešení: …", "**Příklad 2:** …", "**Například:** …"). Its formulas are a computation — "C(3,8) =
 * … = 56", a list of numbers — not something to look up later, so the rail leaves them out.
 */
export const WORKED_RE =
	/^(?:\d+[.)]\s*)?(?:ukázkov|příklad|př\.|úkol|úloh|cvičení|procvičení|procvičování|řešen|výsledek|výsledky|například|zkouška|ověření|motivac|úvodní příklad)/iu;

/**
 * A display that is only a list of numbers or terms ("1, 1, 2, 3, 5, 8, …"), not a formula —
 * there is no relation in it and it is a run of comma / semicolon separated items.
 */
export function isListNotFormula(text: string): boolean {
	const t = text.replace(/\s+/g, '');
	// "1, 3, 5, 7, … ∈ ℝ" is still a list: membership after it does not make it a formula
	if (/[=<>≤≥≈≠⇒⇔⊂⊆≐∼≡→⟹⟺∥⊥]/u.test(t)) return false;
	return (t.match(/[,;]/g) ?? []).length >= 2;
}

/**
 * A computation with numbers only ("2275 : 7 = 325") — no variable, nothing to look up. A factorial
 * ("0! = 1", "1! = 1") is a definition worth looking up, not a computation.
 */
export function isNumbersOnly(text: string): boolean {
	return !/[\p{L}!]/u.test(text) && /=/.test(text);
}

/**
 * Lead-ins that structure a text rather than name a formula ("Znění: …", "Vzorec: …") — for those
 * the section heading is the better caption. "Příklad" and "Řešení" are kept on purpose: they say
 * the formula belongs to a worked example, which is more useful than the section's own title.
 */
export const GENERIC_LEAD_IN = /^(znění|vzorce?|pozn|poznámka|pozor|definice|značení|důkaz|tip)(?![\p{L}])/iu;

/**
 * The first `\text{}` of a formula that starts its explanatory tail — "\text{kde } m \text{ je
 * střední příčka…}" or a self-contained aside "\text{(poloměr kružnice vepsané)}". Everything from
 * there on is set as a sentence under the formula instead of as maths.
 */
export const NOTE_START = /^(kde|pro|kdy|přičemž|resp\.)(?![\p{L}])|^\(.+\)[.,;:]?$/iu;

/** Overflow up to this many px is MathLive's boxes sticking out of a formula that fits. */
export const SLACK = 10;

/** Marks formulas that fit (`.is-fitting`, overflow: visible) so only a real overflow scrolls. */
export function markFitting(root: ParentNode): void {
	root.querySelectorAll<HTMLElement>('.math-inline, .math-display').forEach((el) => {
		el.classList.toggle('is-fitting', el.scrollWidth - el.clientWidth <= SLACK);
	});
}

// ── Captions ─────────────────────────────────────────────────────────────────

// a paragraph that holds nothing but a display formula
function isFormulaOnly(p: Element): boolean {
	const only = p.firstElementChild;
	return (
		p.tagName === 'P' &&
		p.children.length === 1 &&
		!!only &&
		only.classList.contains('math-display') &&
		(p.textContent ?? '').trim() === (only.textContent ?? '').trim()
	);
}

// The bold phrase that opens a paragraph and names what follows — "Euklidova věta o výšce:" — but
// not a bold word inside a sentence ("Dva vektory jsou **kolmé** právě tehdy …"), and not one that
// itself holds a formula. `stop` is the child of the paragraph where the lead-in text must end (the
// formula, when it sits in the same paragraph), or null for the whole paragraph.
function leadIn(p: Element, stop: Node | null): string {
	let first = p.firstChild;
	while (first && first.nodeType === Node.TEXT_NODE && !(first.textContent ?? '').trim()) first = first.nextSibling;
	if (
		!(first instanceof HTMLElement) ||
		first.tagName !== 'STRONG' ||
		first.querySelector('.math-inline, .math-display')
	) {
		return '';
	}
	const bold = (first.textContent ?? '').trim();
	const label = cleanLabel(bold);
	if (!label || GENERIC_LEAD_IN.test(label) || GENERIC_CAPTION.test(label) || !/^\p{Lu}/u.test(label)) return '';
	let text = '';
	for (let c = p.firstChild; c && c !== stop; c = c.nextSibling) text += c.textContent ?? '';
	text = text.trim();
	// a heading in bold, or a sentence that introduces the formula below it
	return text === bold || /:$/.test(bold) || /:$/.test(text) ? label : '';
}

function labelFor(node: HTMLElement, headings: Element[]): string {
	const para = node.closest('p');
	if (para) {
		// a lead-in opening the same paragraph ...
		let stop: Node = node;
		while (stop.parentNode && stop.parentNode !== para) stop = stop.parentNode;
		const same = leadIn(para, stop);
		if (same) return same;
		// ... or the paragraph just above — looking past other formulas that follow the same
		// lead-in ("a² = c·c_a" then "b² = c·c_b")
		let before = para.previousElementSibling;
		while (before && isFormulaOnly(before)) before = before.previousElementSibling;
		if (before && before.tagName === 'P') {
			const lead = leadIn(before, null);
			if (lead) return lead;
		}
	}
	// a bold phrase opening a paragraph a little above — physics notes use those as headings
	// ("**Hybnost** (značka p, jednotka …)" + a list + the formula) — within the same section
	let back = 0;
	for (
		let prev = (para ?? node).previousElementSibling;
		prev && back < 6 && !/^H[1-6]$/.test(prev.tagName);
		prev = prev.previousElementSibling
	) {
		back++;
		const bold = prev.tagName === 'P' ? prev.firstElementChild : null;
		if (bold?.tagName !== 'STRONG' || bold.querySelector('.math-inline, .math-display')) continue;
		const text = (prev.textContent ?? '').trimStart();
		if (!text.startsWith((bold.textContent ?? '').trim())) continue;
		const label = cleanLabel(bold.textContent);
		if (label && /^\p{Lu}/u.test(label) && !GENERIC_LEAD_IN.test(label) && !GENERIC_CAPTION.test(label)) {
			if (!WORKED_RE.test(label) && label.length <= 60) return label;
		}
	}
	// the nearest heading above that names something — a general one ("Vzorce", "Shrnutí") hands
	// over to the heading of a higher level, and in the end to the page's title
	const above = headings.filter((h) => h.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_FOLLOWING);
	let level = 7;
	for (let i = above.length - 1; i >= 0; i--) {
		const n = Number(above[i].tagName.slice(1));
		if (n >= level) continue;
		level = n;
		const label = cleanLabel(above[i].textContent);
		if (label && !GENERIC_CAPTION.test(label)) return label;
	}
	// the page's title, without the number some physics topics carry ("39 Geometrická optika")
	const title = cleanLabel(document.querySelector('h1')?.textContent).replace(/^\d+\s+/, '');
	return title.charAt(0).toUpperCase() + title.slice(1);
}

// ── Splitting off an explanatory tail ───────────────────────────────────────

// Moves the prose tail of a cloned formula out of it; returns the nodes of the caption sentence.
// The tail's words become plain text, everything between them (a fraction, a root, an index) keeps
// its typeset markup inside a fresh MathLive wrapper — flattening it with textContent turned
// "s = (a+b+c)/2" into "s = 2a+b+c".
function splitNote(clone: HTMLElement): Node[] {
	const cut = Array.from(clone.querySelectorAll('.ML__text')).find((t) =>
		NOTE_START.test((t.textContent ?? '').trim())
	);
	if (!cut) return [];

	// Climb only while the node is the last thing in its parent. Stopping at the first ancestor
	// that still has a following sibling is what keeps the formula: an unconditional climb to the
	// clone's own child grabbed MathLive's single wrapper, which holds the *whole* expression.
	let top: Node = cut;
	while (top.parentNode && top.parentNode !== clone && !top.nextSibling) top = top.parentNode;
	const host = top.parentNode as Element;
	const doomed: Node[] = [];
	for (let n: Node | null = top; n; n = n.nextSibling) doomed.push(n);

	const noteNodes: Node[] = [];
	let run: HTMLElement | null = null;
	for (const n of doomed) {
		n.parentNode?.removeChild(n);
		if (n instanceof Element && n.classList.contains('ML__text')) {
			run = null;
			noteNodes.push(document.createTextNode((n.textContent ?? '').replace(/\s+/g, ' ')));
		} else if (n instanceof Element) {
			if (!run) {
				run = document.createElement('span');
				run.className = 'ML__latex';
				run.appendChild(document.createElement('span')).className = 'ML__base';
				noteNodes.push(run);
			}
			run.firstChild!.appendChild(n);
		}
	}
	const first = noteNodes[0];
	if (first && first.nodeType === Node.TEXT_NODE) first.textContent = (first.textContent ?? '').replace(/^[,;\s]+/, '');
	// what joined the tail to the formula ("…, \qquad kde …") goes with it
	while (host.lastChild && !(host.lastChild.textContent ?? '').replace(/[,;\s​]/g, '')) {
		host.removeChild(host.lastChild);
	}
	return noteNodes;
}

// ── Worked examples ──────────────────────────────────────────────────────────

/** Does the formula belong to a task, its solution or a worked example (see WORKED_RE)? */
function inWorkedExample(node: HTMLElement): boolean {
	// the top-level block of the article the formula sits in
	let block: Element = node;
	while (block.parentElement && !block.parentElement.matches('article')) block = block.parentElement;
	if (block !== node && WORKED_RE.test((block.textContent ?? '').trim())) return true;
	// every heading the formula lies under — not just the nearest one: "## Ukázkové příklady" with
	// "### a) Číslo lze napsat jako mocninu …" under it is still a worked example
	let level = 7;
	for (let prev = block.previousElementSibling; prev && level > 2; prev = prev.previousElementSibling) {
		const m = /^H([2-4])$/.exec(prev.tagName);
		if (!m || Number(m[1]) >= level) continue;
		level = Number(m[1]);
		if (WORKED_RE.test(cleanLabel(prev.textContent))) return true;
	}
	// then the few paragraphs just above it, up to the section's heading or a new named item
	let steps = 0;
	for (let prev = block.previousElementSibling; prev && steps < 4; prev = prev.previousElementSibling) {
		if (/^H[2-4]$/.test(prev.tagName)) break;
		if (prev.tagName !== 'P' || isFormulaOnly(prev)) continue;
		const text = (prev.textContent ?? '').trim();
		if (WORKED_RE.test(text)) return true;
		// a new named item of theory ("**Euklidova věta o výšce:** …") — the formula is its
		const bold = prev.firstElementChild;
		if (bold?.tagName === 'STRONG' && text.startsWith((bold.textContent ?? '').trim())) break;
		steps++;
	}
	return false;
}

/** Is the formula in a closing summary section ("## Shrnutí", "## Shrnutí vzorců")? */
function inSummary(node: HTMLElement): boolean {
	let block: Element = node;
	while (block.parentElement && !block.parentElement.matches('article')) block = block.parentElement;
	for (let prev = block.previousElementSibling; prev; prev = prev.previousElementSibling) {
		if (/^H[2-4]$/.test(prev.tagName)) return /^shrnutí/iu.test(cleanLabel(prev.textContent));
	}
	return false;
}

// ── The rail ─────────────────────────────────────────────────────────────────

/** Fills `[data-formulas]` with the article's display formulas, or removes the empty section. */
export function buildFormulaRail(article: HTMLElement): void {
	const list = document.querySelector<HTMLElement>('[data-formulas]');
	if (!list) return;
	const section = list.closest('.rail-section');

	// A formula inside a spoiler is an answer — it must not leak into the rail. A formula sheet
	// (```formulas) is a digest of its own: listing its cards again would only repeat the page.
	const seen = new Set<string>();
	const picked: HTMLElement[] = [];
	article.querySelectorAll<HTMLElement>('.math-display').forEach((node, i) => {
		if (node.closest('.spoiler, .spoiler-block, .formula-sheet')) return;
		const text = node.textContent ?? '';
		if (isListNotFormula(text) || isNumbersOnly(text) || inWorkedExample(node)) return;
		// a "Shrnutí" at the end repeats what the rail already lists, often written slightly differently
		if (picked.length && inSummary(node)) return;
		// "a_n = a_1 + (n−1)·d" again in the summary as "a_n = a_1 + (n−1)d" is the same formula
		// \iff in the theory and = in the summary are the same equivalence too
		const key = text.replace(/[\s⋅·​]+/g, '').replace(/⟺|⇔/g, '=');
		if (!key || seen.has(key)) return;
		seen.add(key);
		if (!node.id) node.id = 'vzorec-' + (i + 1);
		picked.push(node);
	});
	if (picked.length === 0) {
		section?.remove();
		return;
	}

	const headings = Array.from(article.querySelectorAll('h2, h3, h4'));
	let lastLabel: string | null = null;
	for (const node of picked) {
		const label = labelFor(node, headings);
		if (label && label !== lastLabel) {
			const head = document.createElement('li');
			head.className = 'rail-formula-heading';
			head.textContent = label;
			list.appendChild(head);
		}
		lastLabel = label;

		const li = document.createElement('li');
		const a = document.createElement('a');
		a.href = '#' + node.id;
		if (label) a.title = label;
		let clone = node.cloneNode(true) as HTMLElement;
		let note = splitNote(clone);
		// if the split left nothing to show as a formula, it wasn't formula-plus-prose after all
		if (note.length && !(clone.textContent ?? '').trim()) {
			clone = node.cloneNode(true) as HTMLElement;
			note = [];
		}
		a.appendChild(clone);
		if (note.length) {
			const cap = document.createElement('span');
			cap.className = 'rail-formula-note';
			cap.append(...note);
			a.appendChild(cap);
		}
		li.appendChild(a);
		list.appendChild(li);
	}

	// A formula slightly wider than the rail is shrunk to a still-readable size rather than left to
	// scroll; only one far wider keeps its scrollbar. Re-run whenever the rail's width changes — it
	// is 0 while the rail is folded away on a narrow screen.
	const fit = () => {
		if (!list.clientWidth) return;
		list.querySelectorAll<HTMLElement>('.math-display').forEach((el) => {
			el.style.fontSize = '';
			let size = 1.05;
			while (el.scrollWidth > el.clientWidth + SLACK && size > 0.76) {
				size -= 0.04;
				el.style.fontSize = size.toFixed(2) + 'rem';
			}
		});
		markFitting(list);
	};
	fit();
	new ResizeObserver(fit).observe(list);
	document.fonts?.ready.then(fit);
}
