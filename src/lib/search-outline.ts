// What the search index keeps of a page besides its title: its headings (with the anchor each
// one gets on the page, so a hit can jump straight to the section) and the first sentences of its
// text. Read from the Markdown source, not from the rendered page — rendering every page a second
// time, formulas and all, would double the build for the sake of a list of words.
//
// Pure, no Astro: it can be run from Node against src/content to check what it produces.
import GithubSlugger from 'github-slugger';

/** a heading of a page: its text, and the id it gets in the page ('' when that cannot be known) */
export type Heading = [text: string, id: string];

const EXCERPT_LENGTH = 220;

// inline Markdown → plain words
function plain(s: string): string {
	return s
		.replace(/\\([\\`*_{}[\]()#+\-.!|~<>$])/g, '$1') // an escaped character (Word notes have \[p\] and \(x\))
		.replace(/!\[[^\]]*\]\([^)]*\)/g, '') // images
		.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // a link keeps its text
		.replace(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$/g, '') // formulas
		.replace(/<[^>]+>/g, '') // HTML
		.replace(/\|\||\(\(|\)\)/g, '') // ||spoiler|| and ((note)) markers
		.replace(/[*_`~]+/g, '') // emphasis and code
		.replace(/\s+/g, ' ')
		.trim();
}

// The text of a heading as the page shows it — that is what its id is made from: HTML tags, the
// text of a link and emphasis markers (`_Oliver Twist_`, `**x**`) do not count, an underscore inside
// a word does.
function renderedText(raw: string): string {
	return raw
		.replace(/<[^>]+>/g, '')
		.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/(^|[^\w])(\*\*|__)(?=\S)(.+?)(?<=\S)\2/g, '$1$3')
		.replace(/(^|[^\w])([*_])(?=\S)(.+?)(?<=\S)\2/g, '$1$3')
		.replace(/`/g, '');
}

// the words a page sets in bold — its key terms ("hybris", "Heronův vzorec"): a word from inside a
// page is found through them, without indexing every word of every page
function boldTerms(line: string): string[] {
	const found: string[] = [];
	for (const m of line.matchAll(/\*\*([^*\n]{3,70}?)\*\*/g)) {
		const term = plain(m[1])
			.replace(/^\d+[a-z]?\)\s*/i, '') // "2b) "
			.replace(/[\s:.,;]+$/, '');
		if (term.length >= 4 && !/^\d/.test(term)) found.push(term);
	}
	return found;
}

export function outline(body: string): { headings: Heading[]; excerpt: string; terms: string[] } {
	const slugger = new GithubSlugger(); // one per page: a repeated heading gets "-1", "-2" …
	const headings: Heading[] = [];
	let excerpt = '';
	let paragraph: string[] = [];
	let fence: string | null = null;
	const terms: string[] = [];

	const closeParagraph = () => {
		if (!excerpt && paragraph.length) {
			const text = plain(paragraph.join(' '));
			// a real sentence, not a label, a note or a lone symbol
			if (text.length > 30) excerpt = text.length > EXCERPT_LENGTH ? text.slice(0, EXCERPT_LENGTH).replace(/\s+\S*$/, '') + '…' : text;
		}
		paragraph = [];
	};

	for (const line of body.split('\n')) {
		const fenceMark = /^\s{0,3}(`{3,}|~{3,})/.exec(line);
		if (fence) {
			if (fenceMark && fenceMark[1][0] === fence[0] && fenceMark[1].length >= fence.length) fence = null;
			continue;
		}
		if (fenceMark) {
			closeParagraph();
			fence = fenceMark[1];
			continue;
		}
		const heading = /^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(line);
		if (heading) {
			closeParagraph();
			const raw = heading[2];
			// a heading with a formula gets an id made of the typeset formula's text: not knowable here
			const id = slugger.slug(renderedText(raw));
			const text = plain(raw);
			if (heading[1].length >= 2 && heading[1].length <= 4 && text) headings.push([text, raw.includes('$') ? '' : id]);
			continue;
		}
		terms.push(...boldTerms(line));
		// prose only: no note (>), table, list, HTML, code or figure line
		if (!line.trim()) closeParagraph();
		else if (!/^\s*([>|<]|[-*+]\s|\d+[.)]\s|!\[|\{|---)/.test(line)) paragraph.push(line.trim());
		else closeParagraph();
	}
	closeParagraph();
	return { headings, excerpt, terms: [...new Map(terms.map((t) => [t.toLowerCase(), t])).values()] };
}
