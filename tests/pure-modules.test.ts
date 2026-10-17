// Tests of the pure (DOM-free) modules. Run with `npm test` (Node strips the TypeScript types itself).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { splitSteps, visualWidth } from '../src/lib/markdown/formula-breaks.ts';
import { segmentMath } from '../src/lib/markdown/math-segments.ts';
import { normalize, search, type SearchItem } from '../src/lib/search-match.ts';
import { cleanLabel } from '../src/lib/rail-formulas.ts';
import { asksSomething } from '../src/lib/exercises.ts';

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
});

test('asksSomething tells a task from a line of theory or a solution step', () => {
	// tasks: an instruction, a question, or nothing but a formula
	assert.ok(asksSomething('1. Určete souřadnice bodů, jejichž průmět je 4.'));
	assert.ok(asksSomething('a) Kolik % chodí denně?'));
	assert.ok(asksSomething('Načrtni graf funkce y = 2x'));
	assert.ok(asksSomething('a) √50'));
	// theory, an outline, a method step
	assert.ok(!asksSomething('a) pomocí vzorce:'));
	assert.ok(!asksSomething('a) pojem kvadratická funkce, b) graf a vlastnosti, c) vrchol grafu'));
	assert.ok(!asksSomething('Nerovnici převedeme na rovnici a vyřešíme ji (najdeme kořeny).'));
	// "jak" inside an explanation is not a question
	assert.ok(!asksSomething('Kořeny zaneseme na osu x, jak jsme to dělali v minulé kapitole u lineárních nerovnic.'));
});
