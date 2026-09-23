// What the search dialog does with its index: which pages, and which sections of them, a query
// finds, and in what order. Pure functions with no DOM, so they can be run from Node against the
// built dist/search.json (SearchDialog.astro only draws what they return).

export interface SearchItem {
	title: string;
	url: string;
	subject: string;
	group: string | null;
	/** the page's headings with their anchors, and the first sentences of the page */
	h?: [string, string][];
	x?: string;
	/** the words the page sets in bold: its key terms */
	k?: string[];
}

/** one line of the results: a page, one of its sections, or a page found by a word of its opening */
export interface Hit {
	item: SearchItem;
	score: number;
	heading?: [string, string];
	snippet?: string;
	/** a key term of the page that matched */
	term?: string;
}

// Strips combining diacritical marks after NFD decomposition, which
// folds nearly every Czech accented letter (ř → r, é → e, ů → u, …)
// onto its plain ASCII base — so searching without hačky/čárky
// (the common case on a non-Czech keyboard layout) still matches.
export function normalize(s: string): string {
	return s
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase();
}

const WORD_BOUNDARY = /[\s\-–—,.:;()/]/;

// Where a word is in `hn`. Czech words change their endings ("socialistický realismus" — "socialistického
// realismu"), so a word that is not found is looked for again without its last one or two letters
// (as long as five are left).
function locate(hn: string, token: string): number {
	let idx = hn.indexOf(token);
	for (let cut = 1; idx === -1 && cut <= 2 && token.length - cut >= 5; cut++) idx = hn.indexOf(token.slice(0, -cut));
	return idx;
}

// How well every word of the query is found in `haystack`: a prefix of it ranks highest, a match
// right after a word boundary (e.g. the second word of a title) next, a mid-word substring
// last; -1 means one of the words is missing and the field does not match at all.
function fieldScore(tokens: string[], haystack: string | null | undefined): number {
	if (!haystack) return -1;
	const hn = normalize(haystack);
	let sum = 0;
	for (const token of tokens) {
		const idx = locate(hn, token);
		if (idx === -1) return -1;
		sum += idx === 0 ? 100 : WORD_BOUNDARY.test(hn[idx - 1]) ? 70 : 40;
	}
	return sum / tokens.length;
}

// the stretch of a page's opening text round the first word that was searched for
function snippetOf(text: string, tokens: string[]): string {
	const from = Math.max(0, locate(normalize(text), tokens[0]) - 40);
	return (from > 0 ? '…' : '') + text.slice(from, from + 130).trim() + (from + 130 < text.length ? '…' : '');
}

export function search(items: SearchItem[] | null, query: string): Hit[] {
	const tokens = normalize(query.trim()).split(/\s+/).filter(Boolean);
	if (!tokens.length || !items) return [];
	// a letter or two would match nearly every heading and sentence: those are searched from three on
	const deep = tokens.some((t) => t.length >= 3);
	const hits: Hit[] = [];
	for (const item of items) {
		const titleScore = fieldScore(tokens, item.title);
		// A category/subject-only match (title itself doesn't contain the query) still
		// surfaces, just ranked below any title match — typing "planimetrie" should
		// find its topics even though none of their titles say the word.
		const context = [item.subject, item.group].filter(Boolean).join(' ');
		const contextScore = fieldScore(tokens, context);
		const page = titleScore >= 0 ? titleScore : contextScore >= 0 ? contextScore * 0.5 : -1;
		if (page >= 0) hits.push({ item, score: page - item.title.length * 0.01 });
		if (!deep) continue;
		// a heading is a hit of its own, leading to that section — the best two of a page
		let found = 0;
		for (const heading of item.h ?? []) {
			if (found >= 2 || normalize(heading[0]) === normalize(item.title)) continue;
			const s = fieldScore(tokens, heading[0]);
			if (s < 0) continue;
			found++;
			hits.push({ item, heading, score: s * 0.8 - heading[0].length * 0.01 - 1 });
		}
		// a key term of the page (a word it sets in bold) — the way to a word from inside the text
		if (page < 0 && found === 0 && item.k) {
			let best: { term: string; score: number } | null = null;
			for (const term of item.k) {
				const s = fieldScore(tokens, term);
				if (s >= 0 && (!best || s > best.score)) best = { term, score: s };
			}
			if (best) {
				hits.push({ item, term: best.term, score: best.score * 0.65 - best.term.length * 0.01 - 2 });
				continue;
			}
		}
		// several words that are all on the page, but not in one place: a title and a heading, a heading and a term
		if (page < 0 && found === 0 && tokens.length > 1) {
			const s = fieldScore(tokens, [item.title, context, ...(item.h ?? []).map((h) => h[0]), ...(item.k ?? [])].join(' '));
			if (s >= 0) {
				hits.push({ item, score: s * 0.2 - item.title.length * 0.01 - 3 });
				continue;
			}
		}
		// the opening text counts only when nothing else of the page matched
		if (page < 0 && found === 0 && item.x) {
			const s = fieldScore(tokens, item.x);
			if (s >= 0) hits.push({ item, snippet: snippetOf(item.x, tokens), score: s * 0.3 - item.title.length * 0.01 });
		}
	}
	hits.sort((a, b) => b.score - a.score);
	return hits.slice(0, 40);
}
