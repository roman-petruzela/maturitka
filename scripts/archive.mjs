// Archive path aliases. Some folders and files of the source archive are named
// after people, and no person's name may appear in this repo — manifests and
// `source:` fields use neutral aliases ("archiv-1/…") instead. The real names
// live only in scripts/archive-aliases.local.json, which git ignores:
// { "<alias path>": "<real path relative to the archive root>", … }
// A key may name a folder or a single file; the longest matching key wins.
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

const ALIAS_FILE = path.join(import.meta.dirname, 'archive-aliases.local.json');
const aliases = existsSync(ALIAS_FILE) ? JSON.parse(readFileSync(ALIAS_FILE, 'utf8')) : {};

function swapPrefix(p, pairs) {
	const hit = pairs
		.filter(([from]) => p === from || p.startsWith(from + '/'))
		.sort((a, b) => b[0].length - a[0].length)[0];
	return hit ? hit[1] + p.slice(hit[0].length) : p;
}

/** alias path → real path (relative to the archive root) */
export function toReal(p) {
	return swapPrefix(p, Object.entries(aliases));
}

/** real path (relative to the archive root) → alias path */
export function toAlias(p) {
	return swapPrefix(
		p,
		Object.entries(aliases).map(([a, r]) => [r, a])
	);
}

/** what a page shows as its source: the alias path without its "archiv-N/" root */
export function displaySource(p) {
	return p.replace(/^archiv-\d+\//, '');
}
