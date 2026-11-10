// Tests of the pure (DOM-free) modules. Run with `npm test` (Node strips the TypeScript types itself).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { splitSteps, visualWidth } from '../src/lib/markdown/formula-breaks.ts';
import { webpSize } from '../src/lib/markdown/image-size.ts';
import { segmentMath } from '../src/lib/markdown/math-segments.ts';
import { normalize, search, type SearchItem } from '../src/lib/search-match.ts';
import { cleanLabel, isListNotFormula, isNumbersOnly, WORKED_RE } from '../src/lib/rail-formulas.ts';

test('splitSteps cuts a derivation at its top-level arrows', () => {
	assert.deepEqual(splitSteps('x+1=3 \\implies x=2'), [
		{ body: 'x+1=3', relation: 'implies' },
		{ body: 'x=2', relation: null },
	]);
});

test('visualWidth does not add up the two halves of a fraction', () => {
	assert.ok(visualWidth('\\frac{a}{bbbb}') < visualWidth('a') + visualWidth('bbbb'));
});

test('segmentMath finds inline and display formulas', () => {
	assert.deepEqual(segmentMath('a $x$ b $$y$$'), [
		{ type: 'text', value: 'a ' },
		{ type: 'math', value: 'x', display: false },
		{ type: 'text', value: ' b ' },
		{ type: 'math', value: 'y', display: true },
	]);
});

test('normalize folds case and Czech accents', () => {
	assert.equal(normalize('Řešení Ů'), 'reseni u');
});

test('search finds a declined form of a title word', () => {
	const items: SearchItem[] = [{ title: 'Socialistický realismus', url: '/a/', subject: 'cj', group: null }];
	assert.equal(search(items, 'realismu')[0]?.item.url, '/a/');
});

test('cleanLabel drops numbering and picks the named part of a dash', () => {
	assert.equal(cleanLabel('2) Goniometrické funkce — sin, cos'), 'Goniometrické funkce');
	assert.equal(cleanLabel('Obsah — Heronův vzorec:'), 'Heronův vzorec');
	// a heading that says nothing by itself keeps what follows the dash
	assert.equal(cleanLabel('Další vlastnosti — diagonály (Fibonacciho posloupnost)'), 'Diagonály');
});

test('the formula rail leaves out lists of numbers and worked examples', () => {
	assert.ok(isListNotFormula('1, 1, 2, 3, 5, 8, 13, 21, 34, …'));
	assert.ok(!isListNotFormula('x_1 = 0, x_2 = 3, x_3 = 5'));
	assert.ok(!isListNotFormula('a^r · a^s'));
	assert.ok(isListNotFormula('1, 3, 5, 7, 9, … ∈ ℝ'));
	assert.ok(isNumbersOnly('2275 : 7 = 325'));
	assert.ok(!isNumbersOnly('S = πr²'));
	assert.ok(!isNumbersOnly('0! = 1'));
	for (const s of ['Ukázkový příklad', 'Příklady na procvičení', 'Úkol', 'Řešení: D = 169', '2. Příklad'])
		assert.ok(WORKED_RE.test(s), s);
	for (const s of ['Kombinační číslo', 'Pythagorova věta', 'Euklidova věta o výšce']) assert.ok(!WORKED_RE.test(s), s);
});

test('webpSize reads the three WebP header variants', () => {
	const riff = (chunk: string, body: number[]) => {
		const b = new Uint8Array(30 + body.length);
		b.set(
			[...'RIFF'].map((c) => c.charCodeAt(0)),
			0
		);
		b.set(
			[...'WEBP'].map((c) => c.charCodeAt(0)),
			8
		);
		b.set(
			[...chunk].map((c) => c.charCodeAt(0)),
			12
		);
		return b;
	};
	const lossy = riff('VP8 ', []);
	lossy.set([800 & 255, 800 >> 8, 978 & 255, 978 >> 8], 26);
	assert.deepEqual(webpSize(lossy), { width: 800, height: 978 });
	const lossless = riff('VP8L', []);
	const bits = (640 - 1) | ((360 - 1) << 14);
	lossless.set([bits & 255, (bits >> 8) & 255, (bits >> 16) & 255, (bits >>> 24) & 255], 21);
	assert.deepEqual(webpSize(lossless), { width: 640, height: 360 });
	const ext = riff('VP8X', []);
	ext.set([299 & 255, 299 >> 8, 0, 199, 0, 0], 24);
	assert.deepEqual(webpSize(ext), { width: 300, height: 200 });
	assert.equal(webpSize(new Uint8Array(40)), null);
});
