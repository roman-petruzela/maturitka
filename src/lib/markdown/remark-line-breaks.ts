// Remark plugin: inside a paragraph, a line break is a line break.
//
// Markdown folds a single newline into a space. That is right for prose that
// was hard-wrapped at some page width and wrong for what these three subjects
// actually contain:
//   - cj: notes converted from Word, where every Shift+Enter is a line break
//     ("Postavy:" / one character per line, "TÉMA" / its text …)
//   - it: the same kind of notes plus the framework-programme reference lists
//   - mat: exercises whose parts are meant to sit under each other —
//          a) …
//          b) …          (they used to run together into one line)
// Checked against every paragraph of the three subjects: apart from stacked
// display formulas (handled below) each newline inside a paragraph is an
// intended break, so here each one becomes a <br>.
//
// The other subjects (společenské vědy, právo …) come from PDFs whose lines
// were wrapped at the page width — there a newline really is only a wrap, so
// they are left exactly as they were.
//
// Runs before remark-protect-math restores the formulas: at this point a
// formula is still an opaque token, so a newline *inside* "$$ … $$" can never
// be mistaken for a paragraph line.
import type { Root, PhrasingContent, Text, Parent } from 'mdast';
import { visit } from 'unist-util-visit';
import { OPEN, CLOSE, type StoredMath } from './remark-protect-math';

const SUBJECTS = /[\\/]content[\\/](?:01-cj|02-mat|04-it)[\\/]/;
const TOKEN_ONLY = new RegExp(`^${OPEN}(\\d+)${CLOSE}$`);

export function remarkLineBreaks() {
	// `file` is a vfile; typed loosely for the same reason as in remark-protect-math.ts
	return (tree: Root, file: any) => {
		if (!SUBJECTS.test(file.path ?? '')) return;
		const store: StoredMath[] = file.data.protectedMath ?? [];

		// a display formula is a block of its own — a <br> next to it would only
		// add an empty line (stacked "$$…$$" lines are common in the solutions)
		const isDisplayMath = (piece: string) => {
			const m = TOKEN_ONLY.exec(piece.trim());
			return !!m && !!store[Number(m[1])]?.display;
		};

		const split = (parent: Parent) => {
			const out: PhrasingContent[] = [];
			for (const child of parent.children as PhrasingContent[]) {
				if (child.type !== 'text' || !child.value.includes('\n')) {
					if ('children' in child) split(child as Parent);
					out.push(child);
					continue;
				}
				const parts = child.value.split('\n');
				let pending = parts[0];
				for (let i = 1; i < parts.length; i++) {
					const next = parts[i];
					if (isDisplayMath(pending) || isDisplayMath(next)) {
						pending += '\n' + next;
						continue;
					}
					if (pending.replace(/[ \t]+$/, '')) out.push({ type: 'text', value: pending.replace(/[ \t]+$/, '') } as Text);
					out.push({ type: 'break' });
					pending = next.replace(/^[ \t]+/, '');
				}
				if (pending) out.push({ type: 'text', value: pending } as Text);
			}
			parent.children = out as Parent['children'];
		};

		visit(tree, 'paragraph', (paragraph) => split(paragraph as Parent));
	};
}
