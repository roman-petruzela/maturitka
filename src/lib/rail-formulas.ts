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
		const tail = t.slice(dash.index + dash[0].length);
		t = /^\p{Lu}/u.test(tail) ? tail : t.slice(0, dash.index);
	}
	return t.replace(/[:.\s]+$/, '').trim();
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
	if (!label || GENERIC_LEAD_IN.test(label) || !/^\p{Lu}/u.test(label)) return '';
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
	let heading: Element | null = null;
	for (const h of headings) {
		if (h.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_FOLLOWING) heading = h;
		else break;
	}
	return heading ? cleanLabel(heading.textContent) : '';
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
		const key = (node.textContent ?? '').replace(/\s+/g, '');
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
