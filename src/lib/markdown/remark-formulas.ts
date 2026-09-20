// Remark plugin: a fenced code block tagged "formulas" becomes a build-time formula sheet
// (cards in a grid, see formula-sheet-html.ts). Same route as ```graph and ```timeline — it has to
// run on the mdast `code` node, before Shiki swallows the language tag. remark-protect-math.ts
// leaves fenced code alone, so the JSON (and the $…$ in its labels and notes) arrives untouched.
//
//     ```formulas
//     { "items": [
//         { "label": "Pythagorova věta", "tex": "c^2 = a^2 + b^2" },
//         { "label": "Podíl mocnin", "tex": "\\frac{a^r}{a^s} = a^{r-s}", "note": "pro $r>s$" }
//     ] }
//     ```
//
// (or `{ "sections": [{ "title": "Čtverec", "items": [ … ] }, …] }` for several titled groups)
import { visit } from 'unist-util-visit';
import { renderFormulaSheetHtml, type FormulaSheetSpec } from './formula-sheet-html';
import type { Root, Code, Html } from 'mdast';

export function remarkFormulas() {
	return (tree: Root) => {
		visit(tree, 'code', (node: Code) => {
			if (node.lang !== 'formulas') return;
			let spec: FormulaSheetSpec;
			try {
				spec = JSON.parse(node.value);
			} catch (err) {
				throw new Error(`\`\`\`formulas block is not valid JSON: ${(err as Error).message}\n${node.value}`);
			}
			let html: string;
			try {
				html = renderFormulaSheetHtml(spec);
			} catch (err) {
				throw new Error(`\`\`\`formulas block failed to render: ${(err as Error).message}\n${node.value}`);
			}
			(node as unknown as Html).type = 'html';
			node.value = html;
		});
	};
}
