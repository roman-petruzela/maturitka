// Where a long formula may be broken — used by rehype-math.ts.
//
// MathLive's static output is one rigid box with no line breaking inside. A solution
// written as a chain  "A \implies B \implies C \implies …"  therefore either overflowed
// its column (and got a horizontal scrollbar as the "fix") or, inline, pushed a phone's
// page sideways. TeX itself breaks such a formula after the relation; this finds those
// places. Pure string work with no imports, so it can be tested on its own.

/** the arrows between the steps of a derivation */
const STEP_ARROWS = new Set(['implies', 'Rightarrow', 'Longrightarrow', 'Leftrightarrow', 'Longleftrightarrow', 'iff']);
type Matcher = (ch: string, name: string, isCommand: boolean) => string | null;
const arrows: Matcher = (_ch, name, isCommand) => (isCommand && STEP_ARROWS.has(name) ? name : null);
const equals: Matcher = (ch, _name, isCommand) => (!isCommand && ch === '=' ? '=' : null);

/**
 * Rough width of a formula in "characters" of its own type (a digit = 1). LaTeX source length
 * is a poor guide: "\dfrac{2x+(x+1)}{x^2-1}" is long to write and narrow to read, because a
 * fraction is as wide as its wider half.
 */
export function visualWidth(s: string): number {
	let w = 0;
	let i = 0;
	const skipSpace = () => {
		while (i < s.length && /\s/.test(s[i])) i++;
	};
	// a {…} group at the cursor; returns its inside and moves past it ('' when there is none)
	const group = (): string => {
		skipSpace();
		if (s[i] !== '{') return '';
		let depth = 0;
		const start = i + 1;
		for (; i < s.length; i++) {
			if (s[i] === '{') depth++;
			else if (s[i] === '}' && --depth === 0) return s.slice(start, i++);
		}
		return s.slice(start);
	};
	while (i < s.length) {
		const ch = s[i];
		if (ch === '\\') {
			const m = /^\\([A-Za-z]+|.)/s.exec(s.slice(i))!;
			const name = m[1];
			i += m[0].length;
			if (/^[dt]?frac$/.test(name)) w += Math.max(visualWidth(group()), visualWidth(group())) + 0.3;
			else if (name === 'sqrt') {
				skipSpace();
				if (s[i] === '[') i = s.indexOf(']', i) + 1 || s.length; // \sqrt[3]{…}
				w += 1 + visualWidth(group());
			} else if (/^(text|mathrm|mathbb|operatorname)$/.test(name)) w += group().length * 0.9;
			else if (name === 'left' || name === 'right' || /^[Bb]ig+[lr]?$/.test(name)) w += 0.2;
			else if (STEP_ARROWS.has(name)) w += 3;
			else if (name === 'quad') w += 1.5;
			else if (name === 'qquad') w += 3;
			else if (/^[,;:! ]$/.test(name)) w += 0.3;
			else w += 1.3; // \cdot, \pi, \alpha, \neq …
			continue;
		}
		if (ch === '^' || ch === '_') {
			i++;
			skipSpace();
			if (s[i] === '{') w += visualWidth(group()) * 0.6;
			else if (i < s.length) {
				w += 0.6;
				i += s[i] === '\\' ? (/^\\([A-Za-z]+|.)/s.exec(s.slice(i))![0].length) : 1;
			}
			continue;
		}
		if (ch === '{') {
			w += visualWidth(group());
			continue;
		}
		if (!/\s/.test(ch)) w += 1;
		i++;
	}
	return w;
}

/**
 * A chain of steps ("A \implies B \implies C") narrower than this (see visualWidth) is never
 * broken: it wraps as one piece. The value is what a phone's column (~330px) holds; on a wide
 * screen such a chain simply never needs to wrap, so breaking it costs nothing there.
 */
export const INLINE_UNITS = 22;
/** a long equality chain without arrows ("A = B = C = D"): broken only when this wide */
const EQUALS_UNITS = 30;
/** the same for a display formula (its box has padding, and text-align: center) */
export const DISPLAY_UNITS = 52;

export interface Step {
	/** the part of the formula between two relations */
	body: string;
	/** the relation command that ends this step (without the backslash); null for the last step */
	relation: string | null;
}

/**
 * Splits `latex` after every top-level relation `matches` recognises — not inside braces
 * ("\text{…}", fractions), parentheses, "\left…\right" pairs or a "\begin…\end"
 * environment. Returns a single step when there is nothing to break at.
 *
 * (Parentheses are counted loosely on purpose: an interval like "\langle 3;4)" leaves them
 * unbalanced, and the safe failure is simply not to break.)
 */
export function splitSteps(latex: string, matches: Matcher = arrows): Step[] {
	const steps: Step[] = [];
	let brace = 0;
	let paren = 0;
	let pair = 0;
	let env = 0;
	let start = 0;
	let i = 0;
	const top = () => brace === 0 && paren === 0 && pair === 0 && env === 0;
	while (i < latex.length) {
		const ch = latex[i];
		if (ch === '\\') {
			const m = /^\\([A-Za-z]+|.)/s.exec(latex.slice(i));
			const name = m ? m[1] : '';
			const end = i + (m ? m[0].length : 1);
			if (name === 'left') pair++;
			else if (name === 'right') pair--;
			else if (name === 'begin') env++;
			else if (name === 'end') env--;
			else if (name === 'langle') paren++;
			else if (name === 'rangle') paren = Math.max(0, paren - 1);
			else if (top()) {
				const rel = matches(ch, name, true);
				if (rel) {
					steps.push({ body: latex.slice(start, i).trim(), relation: rel });
					start = end;
				}
			}
			i = end;
			continue;
		}
		if (ch === '{') brace++;
		else if (ch === '}') brace--;
		else if (ch === '(' || ch === '[') paren++;
		else if (ch === ')' || ch === ']') paren = Math.max(0, paren - 1);
		else if (top() && ch === '=' && latex[i - 1] !== ':') {
			const rel = matches(ch, '', false);
			if (rel) {
				steps.push({ body: latex.slice(start, i).trim(), relation: rel });
				start = i + 1;
			}
		}
		i++;
	}
	steps.push({ body: latex.slice(start).trim(), relation: null });
	return steps;
}

// A derivation is algebra: it has an equation or an inequality in it. A propositional
// formula — "(a \Rightarrow b) \Leftrightarrow (\neg a \lor b)" — uses the same arrows as
// connectives of ONE statement, and is not a chain of steps to lay out line by line.
const ALGEBRA = /[=<>]|\\(?:neq|leq|geq|le|ge|approx)(?![A-Za-z])/;

/** every step must say something, and there must be more than one step to break between */
function breakable(latex: string, steps: Step[]): boolean {
	return steps.length > 1 && steps.every((s) => s.body.length > 0) && ALGEBRA.test(latex);
}

/**
 * An inline formula as a list of shorter ones, each ending with its relation
 * ("A \implies", "B \implies", "C") — the caller puts an ordinary space between them,
 * which is where the paragraph can wrap. Null when the formula should stay whole.
 */
export function inlineSegments(latex: string): string[] | null {
	const width = visualWidth(latex);
	if (width < INLINE_UNITS) return null;
	const rel = (r: string | null) => (r === null ? '' : r === '=' ? ' =' : ` \\${r}`);
	let steps = splitSteps(latex);
	if (!breakable(latex, steps)) {
		if (width < EQUALS_UNITS) return null; // no arrows: only a really long equality chain is worth breaking
		steps = [{ body: latex, relation: null }];
	}
	const out: string[] = [];
	for (const step of steps) {
		// a step that is itself a long chain of equalities is broken after its "=" as well
		const parts = visualWidth(step.body) >= EQUALS_UNITS ? splitSteps(step.body, equals) : [];
		if (parts.length > 1 && parts.every((p) => p.body.length > 0)) {
			parts.forEach((p) => out.push(`${p.body}${p.relation ? ' =' : rel(step.relation)}`));
		} else {
			out.push(`${step.body}${rel(step.relation)}`);
		}
	}
	return out.length > 1 ? out : null;
}

/**
 * A display formula as an aligned block, one step per row. A chain of arrows puts the arrow
 * at the start of every row but the first:
 *      A
 *   ⟹ B
 *   ⟹ C
 * and a chain of equalities the usual way, lined up on the "=":
 *   A = B
 *     = C
 * Null when the formula should stay whole.
 */
export function alignedRows(latex: string): string | null {
	if (visualWidth(latex) < DISPLAY_UNITS) return null;
	const steps = splitSteps(latex);
	if (breakable(latex, steps)) {
		const rows = steps.map((s, k) => `${k === 0 ? '{}' : `\\${steps[k - 1].relation}{}`} & ${s.body}`);
		return `\\begin{aligned}${rows.join(' \\\\ ')}\\end{aligned}`;
	}
	const eq = splitSteps(latex, equals);
	if (eq.length > 2 && eq.every((p) => p.body.length > 0)) {
		const rows = eq.map((p, k) => (k === 0 ? `${p.body} & = ${eq[1].body}` : k === 1 ? '' : `& = ${p.body}`)).filter(Boolean);
		return `\\begin{aligned}${rows.join(' \\\\ ')}\\end{aligned}`;
	}
	return null;
}
