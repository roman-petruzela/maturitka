// Shared "where is the math in this string" logic, used by two plugins that
// must agree exactly on what counts as a formula: remark-math-raw.ts (which
// restores the original LaTeX from the markdown source) and rehype-math.ts
// (which typesets it). If they ever disagreed, a formula could be restored
// but not typeset, or the other way round.
//
// Block math first (greedy would eat past a legitimate inline "$...$" that
// follows on the same line, so block is non-greedy and tried before inline).
// Inline math: opening "$" not followed by whitespace, closing "$" not
// preceded by whitespace — the standard Pandoc heuristic, keeps plain "$5"
// (price-like) text from being misread as math.
export interface MathSegment {
	type: 'text' | 'math';
	/** For 'math': the LaTeX between the delimiters. For 'text': the plain text. */
	value: string;
	display?: boolean;
}

export function segmentMath(value: string): MathSegment[] {
	const blockRe = /\$\$([^\s][\s\S]*?[^\s]|[^\s])\$\$/g;
	const inlineRe = /\$([^\s$](?:[^$\n]*[^\s$])?)\$/g;
	const out: MathSegment[] = [];

	// Run block-math matching first over the whole string, then re-scan the
	// leftover plain-text segments for inline math — avoids "$$x$$" being
	// misread as an empty inline match ("$$") followed by stray "x$$".
	const withInline = (text: string) => {
		let last = 0;
		let m: RegExpExecArray | null;
		inlineRe.lastIndex = 0;
		while ((m = inlineRe.exec(text))) {
			if (m.index > last) out.push({ type: 'text', value: text.slice(last, m.index) });
			out.push({ type: 'math', value: m[1], display: false });
			last = m.index + m[0].length;
		}
		if (last < text.length) out.push({ type: 'text', value: text.slice(last) });
	};

	let cursor = 0;
	let m: RegExpExecArray | null;
	while ((m = blockRe.exec(value))) {
		if (m.index > cursor) withInline(value.slice(cursor, m.index));
		out.push({ type: 'math', value: m[1], display: true });
		cursor = m.index + m[0].length;
	}
	if (cursor < value.length) withInline(value.slice(cursor));
	return out;
}
