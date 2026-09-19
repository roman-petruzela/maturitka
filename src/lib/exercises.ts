// Finds the tasks ("zadání") in a rendered math article, so the whiteboard can
// offer a "⇥ tabule" button next to each one and list them in its own dropdown.
//
// The content was converted from many different sources, so a task is written
// in several styles — this recognises every one that is actually in use:
//
//   1. a numbered list item              <ol><li>…</li></ol>
//   2. a numbered / lettered paragraph   "**3.** …", "**a)** …", and the
//                                        didactic-test ones "**13p)** …" / "**2i)** …"
//   3. a labelled paragraph              "**Příklad:** …", "**Příklad 2:** …", "**Př. 1:** …",
//                                        "**Matematická úloha:** …"
//   4. a heading + the paragraph below   "## Úkol 10", "### Příklad", "### Ukázkový příklad"
//
// What counts as the *statement* of a task is only what is written before the
// solution: it stops at "Řešení:", "Výsledek:", "Postup:" …, at a heading, a
// table, a graph or the next task. When the statement introduces parts
// ("…:" followed by a list or by "a) … b) …") those parts belong to it.
//
// Kept free of browser-only calls in findExercises() (it only walks siblings and
// reads text), so it can be exercised against the built HTML from Node.

export type ExerciseKind = 'item' | 'numbered' | 'labelled' | 'heading';

export interface Exercise {
	kind: ExerciseKind;
	/** the element the task starts at */
	anchor: HTMLElement;
	/** where the "⇥ tabule" button goes */
	host: HTMLElement;
	/** the elements that make up the statement, in document order */
	nodes: HTMLElement[];
}

// "1." "12)" "a)" — a bare single letter followed by ")" essentially never
// occurs in normal Czech prose (not even the one-letter prepositions), so the
// letter case needs no further disambiguation
const NUMBERED_RE = /^(?:\d{1,2}|[a-z])[.)]\s*\S/;
// the didactic-test collections: "13p)" (open answer), "2i)", "1s)" …
const TEST_TASK_RE = /^\d{1,2}[a-z]{1,2}\)\s*\S/;
// "a) …" — and the capital form "A) …" the multiple-choice options are written in
const PART_RE = /^[a-zA-Z][.)]\s*\S/;
const FIRST_PART_RE = /^[aA]\)\s*\S/;
const LABELLED_RE =
	/^(?:Př\.|Příklad|Úkol|Úloha|Cvičení|Zadání|Matematická úloha|Praktická úloha)\s*(?:č\.\s*)?\d{0,3}\s*(?:\([^)]{0,40}\))?\s*[:.]/i;
const TASK_HEADING_RE =
	/^(?:Ukázkový příklad|Ukázková úloha|Příklad|Úkol|Úloha|Cvičení|Zadání)(?:\s+\d{1,3})?(?:\s*\([^)]*\))?(?:\s*[:–—-]\s*\S.{0,80})?\s*[:.]?$/i;
// (JS's \b only knows ASCII letters, so "Řešení\b" never matched before a colon —
// hence the Unicode-aware lookaheads below instead of word boundaries)
// where the statement ends and the solution / commentary begins
const SOLUTION_RE = /^(?:Řešení|Postup|Výsledek|Výsledky|Návod|Odpověď|Poznámka|Pozn\.|Pozor|Zkouška|Ověření|Kontrola)(?!\p{L})/iu;

// bullet lists are tasks only under a heading that says so ("Úkoly", "Procvičování" …)
const TASK_SECTION_RE = /(?<!\p{L})(?:Úkoly|Úlohy|Příklady|Cvičení|Procvičování|Zadání)(?!\p{L})/iu;

// a plain list that only *shows what something looks like* is not a task —
// "Příklady výroků:" followed by a list of sample statements. The plural
// "Příklady" plus a colon is the tell (an actual exercise is introduced by the
// singular); without the colon it is a section blurb such as "Příklady z
// maturitních testů Cermatu — Lomené výrazy", which sits right above real tasks.
const ILLUSTRATIVE_INTRO_RE = /^Příklady(?:\s+\S+){0,8}\s*:$/i;
// likewise a list of universally true facts ("Pro všechna reálná čísla a platí…")
const UNIVERSAL_STATEMENT_RE = /^Pro (?:všechna|každé|libovolné)(?!\p{L})/iu;

const text = (el: Element | null): string => (el?.textContent ?? '').trim();
const isHeading = (el: Element) => /^H[1-6]$/.test(el.tagName);

function paragraphKind(el: Element): 'numbered' | 'labelled' | null {
	if (el.tagName !== 'P') return null;
	const t = text(el);
	if (NUMBERED_RE.test(t) || TEST_TASK_RE.test(t)) return 'numbered';
	if (LABELLED_RE.test(t)) return 'labelled';
	return null;
}

function precedingIntro(el: Element): Element | null {
	let prev = el.previousElementSibling;
	while (prev && paragraphKind(prev) === 'numbered') prev = prev.previousElementSibling;
	return prev;
}

function isIllustrativeIntro(el: Element | null): boolean {
	return !!el && el.tagName === 'P' && ILLUSTRATIVE_INTRO_RE.test(text(el));
}

function isUniversalStatementList(ol: Element): boolean {
	const items = Array.from(ol.children);
	return items.length > 0 && items.every((li) => UNIVERSAL_STATEMENT_RE.test(text(li)));
}

// is this list in a section whose heading announces tasks? Looks at the heading right
// above the list and at the one that contains it — but a single worked example
// ("Ukázkový příklad") is a task by itself, its bullets are just solution steps
function inTaskSection(list: Element): boolean {
	// a list of hidden answers ("Výsledek:" + bullets of spoilers) is the solution, not a task
	if (list.querySelector('.spoiler, .spoiler-block')) return false;
	if (SOLUTION_RE.test(text(list.previousElementSibling))) return false;
	let level = 7;
	let checked = 0;
	for (let el = list.previousElementSibling; el && checked < 2; el = el.previousElementSibling) {
		const m = /^H([1-6])$/.exec(el.tagName);
		if (!m || Number(m[1]) >= level) continue;
		level = Number(m[1]);
		checked++;
		const heading = text(el);
		if (TASK_HEADING_RE.test(heading)) return false;
		if (TASK_SECTION_RE.test(heading)) return true;
	}
	return false;
}

function insideAny(el: Element, test: (ancestor: Element) => boolean): boolean {
	for (let p = el.parentElement; p; p = p.parentElement) if (test(p)) return true;
	return false;
}

// the elements that belong to the statement after its first element
function attachedTo(anchor: HTMLElement, first: HTMLElement | null): HTMLElement[] {
	const out: HTMLElement[] = [];
	let prev: HTMLElement = anchor;
	let next = first;
	// a lettered part ("a) …") is a task of its own, it never pulls in its siblings
	if (/^[a-z][.)]\s*\S/.test(text(anchor)) && anchor.tagName === 'P') return out;
	while (next) {
		const t = text(next);
		if (!t || SOLUTION_RE.test(t)) break;
		const introducesParts = text(prev).endsWith(':');
		const tag = next.tagName;
		if (tag === 'UL' || tag === 'OL') {
			if (!introducesParts) break;
		} else if (tag === 'P') {
			const isPart = PART_RE.test(t);
			// options / parts right below the statement, whether or not it ends with a colon
			const continuesParts = isPart && (introducesParts || PART_RE.test(text(prev)) || FIRST_PART_RE.test(t));
			if (!continuesParts) break;
		} else {
			break;
		}
		out.push(next);
		prev = next;
		next = next.nextElementSibling as HTMLElement | null;
	}
	return out;
}

export function findExercises(article: ParentNode): Exercise[] {
	const found: Exercise[] = [];
	const olVerdict = new Map<Element, boolean>();
	const okList = (ol: Element) => {
		let ok = olVerdict.get(ol);
		if (ok === undefined) {
			ok = !isIllustrativeIntro(precedingIntro(ol)) && !isUniversalStatementList(ol);
			olVerdict.set(ol, ok);
		}
		return ok;
	};
	const skipContainer = (a: Element) =>
		a.tagName === 'TABLE' || a.classList.contains('spoiler-block') || a.classList.contains('spoiler');

	for (const el of Array.from(article.querySelectorAll<HTMLElement>('li, p, h2, h3, h4'))) {
		if (!text(el) || insideAny(el, skipContainer)) continue;

		if (el.tagName === 'LI') {
			const list = el.parentElement;
			if (!list) continue;
			if (list.tagName === 'OL') {
				if (!okList(list)) continue;
			} else if (list.tagName === 'UL') {
				// only a top-level bullet list under a "tasks" heading
				if (list.parentElement?.tagName === 'LI' || !inTaskSection(list)) continue;
			} else {
				continue;
			}
			found.push({ kind: 'item', anchor: el, host: el, nodes: [el] });
			continue;
		}

		if (el.tagName === 'P') {
			const kind = paragraphKind(el);
			if (!kind) continue;
			// a paragraph inside a numbered item is covered by that item
			const li = el.parentElement;
			if (li?.tagName === 'LI' && li.parentElement?.tagName === 'OL') continue;
			if (kind === 'numbered' && isIllustrativeIntro(precedingIntro(el))) continue;
			found.push({
				kind,
				anchor: el,
				host: el,
				nodes: [el, ...attachedTo(el, el.nextElementSibling as HTMLElement | null)],
			});
			continue;
		}

		// headings: "Úkol 10", "Příklad", "Ukázkový příklad (Vietovy vzorce)" …
		if (!TASK_HEADING_RE.test(text(el))) continue;
		const firstEl = el.nextElementSibling as HTMLElement | null;
		if (!firstEl || !['P', 'UL', 'OL'].includes(firstEl.tagName)) continue;
		const firstText = text(firstEl);
		if (!firstText || SOLUTION_RE.test(firstText)) continue;
		const nodes = [el, firstEl, ...attachedTo(firstEl, firstEl.nextElementSibling as HTMLElement | null)];
		// the button goes at the end of the statement's first paragraph — unless that
		// paragraph is a task in its own right and gets a button of its own
		const host = firstEl.tagName === 'P' && !paragraphKind(firstEl) ? firstEl : el;
		found.push({ kind: 'heading', anchor: el, host, nodes });
	}
	return found;
}

// ── browser-side: what actually goes onto the whiteboard ─────────────────────

/** what must never reach a note: our own buttons and the answers hidden in spoilers */
function sanitize(root: Element) {
	root.querySelectorAll('.exercise-send-btn, .spoiler, .spoiler-block, button').forEach((n) => n.remove());
	root.querySelectorAll('[id]').forEach((n) => n.removeAttribute('id'));
}

function ordinalOf(li: Element): string {
	const list = li.parentElement;
	if (!list || list.tagName !== 'OL') return '';
	const start = parseInt(list.getAttribute('start') ?? '1', 10) || 1;
	return `${start + Array.from(list.children).indexOf(li)}.`;
}

/**
 * The statement as it is shown in the article — a copy of the DOM, so typeset
 * formulas, fractions, bold and lists survive (the note used to get plain
 * `textContent`, which flattened "(a+b)²" into "(a+b)2").
 */
export function buildStatement(ex: Exercise): HTMLElement {
	const box = document.createElement('div');
	for (const node of ex.nodes) {
		if (isHeading(node)) {
			const p = document.createElement('p');
			const strong = document.createElement('strong');
			strong.textContent = text(node);
			p.append(strong);
			box.append(p);
			continue;
		}
		const copy = node.cloneNode(true) as HTMLElement;
		sanitize(copy);
		if (copy.tagName === 'LI') {
			// a list item copied out of its list would lose its number
			const item = document.createElement('div');
			const number = document.createElement('strong');
			number.textContent = `${ordinalOf(node)} `;
			item.append(number, ...Array.from(copy.childNodes));
			box.append(item);
		} else {
			box.append(copy);
		}
	}
	return box;
}

/** a single inline line for the "Zadání" dropdown, formulas typeset */
export function buildPreview(ex: Exercise): HTMLElement {
	const line = document.createElement('span');
	const parts = ex.kind === 'heading' ? ex.nodes.slice(0, 2) : ex.nodes.slice(0, 1);
	parts.forEach((node, i) => {
		if (i > 0) line.append(' ');
		if (isHeading(node)) {
			const strong = document.createElement('strong');
			strong.textContent = `${text(node)}:`;
			line.append(strong);
			return;
		}
		const copy = node.cloneNode(true) as HTMLElement;
		sanitize(copy);
		if (copy.tagName === 'LI') line.append(`${ordinalOf(node)} `);
		// only the first paragraph of a statement — lists and sub-parts stay out of the preview
		copy.querySelectorAll('ul, ol, p').forEach((n) => n.remove());
		line.append(...Array.from(copy.childNodes));
	});
	return line;
}
