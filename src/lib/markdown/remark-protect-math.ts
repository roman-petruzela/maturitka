// Remark plugin: keeps "$...$" / "$$...$$" formulas away from the markdown
// parser, so the LaTeX arrives at rehype-math exactly as it was written.
//
// Why this exists: markdown is parsed *before* rehype-math ever sees the
// text, and every markdown rule that fires inside a formula silently corrupts
// the LaTeX:
//   \{ \}   ->  { }     a set like {1,2,3} lost its braces (plain group)
//   \\      ->  \       the row separator in `cases`/`aligned` vanished
//   \,  \;  ->  ,  ;    thin spaces became literal commas / semicolons
//   \!      ->  !       a negative space became a factorial sign
//   _{+2},\ \underbrace{5}_   ->  emphasis, which also splits the text node so
//                       the whole "$$...$$" stopped being recognised as math
//   f'(x)   ->  f’(x)   remark-smartypants curls quotes inside formulas too
// (each of those was a real, visible defect on the site)
//
// So instead of trying to repair the damage afterwards, formulas are lifted
// out of the source *before* parsing and replaced by an opaque placeholder
// made of private-use characters (which markdown treats as ordinary text),
// and put back — verbatim, delimiters included — once every remark plugin
// that could touch text (gfm, smartypants) has run. rehype-math then finds
// them with the same segmenter (math-segments.ts) that located them here.
//
// It works by wrapping the processor's parser: attachers run in order, so by
// the time this one runs remark-parse has already installed `this.parser`.
import { visit } from 'unist-util-visit';
import type { Root, Text } from 'mdast';
import { segmentMath } from './math-segments';

export const OPEN = String.fromCharCode(0xe000);
export const CLOSE = String.fromCharCode(0xe001);
const TOKEN_RE = new RegExp(`${OPEN}(\\d+)${CLOSE}`, 'g');

export interface StoredMath {
	latex: string;
	display: boolean;
}

// A formula that continues over several lines inside a blockquote still
// carries the "> " line prefixes — they are markdown, not LaTeX. Entities are
// decoded because the markdown parser (which would normally have done it)
// never sees the formula now.
function cleanLatex(latex: string): string {
	return latex
		.replace(/\n[ \t]*(?:>[ \t]?)+/g, '\n')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&amp;/g, '&');
}

// Replaces every formula in `chunk` (one paragraph, no code) with a token.
function protectChunk(chunk: string, store: StoredMath[]): string {
	if (!chunk.includes('$')) return chunk;
	// inline code spans are literal — a "$" inside `...` is not math
	return chunk
		.split(/(`+[^`]*`+)/)
		.map((part, i) => {
			if (i % 2 === 1 || !part.includes('$')) return part;
			return segmentMath(part)
				.map((seg) => {
					if (seg.type === 'text') return seg.value;
					store.push({ latex: cleanLatex(seg.value), display: !!seg.display });
					return `${OPEN}${store.length - 1}${CLOSE}`;
				})
				.join('');
		})
		.join('');
}

function protectMath(doc: string): { source: string; store: StoredMath[] } {
	const store: StoredMath[] = [];
	const lines = doc.split('\n');
	const out: string[] = [];
	let fence: { char: string; len: number } | null = null;
	let chunk: string[] = [];

	const flush = () => {
		if (chunk.length === 0) return;
		// paragraph scope: math never spans a blank line (same scope the
		// rehype-side text node had, since a text node is one paragraph)
		const text = chunk.join('\n');
		out.push(
			text
				.split(/(\n[ \t]*\n)/)
				.map((piece, i) => (i % 2 === 1 ? piece : protectChunk(piece, store)))
				.join('')
		);
		chunk = [];
	};

	for (const line of lines) {
		if (fence) {
			out.push(line);
			const close = line.match(/^ {0,3}(`{3,}|~{3,})\s*$/);
			if (close && close[1][0] === fence.char && close[1].length >= fence.len) fence = null;
			continue;
		}
		const open = line.match(/^ {0,3}(`{3,}|~{3,})/);
		if (open) {
			flush();
			fence = { char: open[1][0], len: open[1].length };
			out.push(line);
			continue;
		}
		chunk.push(line);
	}
	flush();
	return { source: out.join('\n'), store };
}

// `this` is the unified processor; typed loosely to avoid pulling `unified`
// in as a direct dependency just for one type.
export function remarkProtectMath(this: any) {
	const parse = this.parser as (doc: string, file: any) => Root;
	this.parser = (doc: string, file: any) => {
		const { source, store } = protectMath(doc);
		file.data.protectedMath = store;
		return parse(source, file);
	};

	return (tree: Root, file: any) => {
		const store: StoredMath[] | undefined = file.data.protectedMath;
		if (!store || store.length === 0) return;
		visit(tree, 'text', (node: Text) => {
			if (!node.value.includes(OPEN)) return;
			node.value = node.value.replace(TOKEN_RE, (_m, idx: string) => {
				const item = store[Number(idx)];
				if (!item) return '';
				return item.display ? `$$${item.latex}$$` : `$${item.latex}$`;
			});
		});
	};
}
