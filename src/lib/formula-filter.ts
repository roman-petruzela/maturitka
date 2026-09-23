// A filter box for a page that is a formula sheet (```formulas blocks): type a word and only the
// cards that mention it stay — the card's own label, note and formula, or the words of the topic
// it stands under, so "kružnice" gives the whole of a topic about circles and "objem" every volume.
// Diacritics and case do not matter, several words all have to be found. Nothing is fetched or
// stored; the page is only hidden and shown again.

const plain = (s: string) => s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().replace(/\s+/g, ' ').trim();

interface Section {
	title: HTMLElement;
	context: string; // the words of the heading of the topic and of its category
	body: HTMLElement[];
}

export function initFormulaFilter(): void {
	const article = document.querySelector<HTMLElement>('article.topic');
	const anchor = article?.querySelector('h2');
	if (!article || !anchor || article.querySelectorAll('.formula-sheet').length < 3) return;

	// group what the article holds by the ### heading it stands under
	const sections: Section[] = [];
	let category: HTMLElement | null = null;
	let current: Section | null = null;
	const categories = new Map<HTMLElement, Section[]>();
	for (const el of Array.from(article.children) as HTMLElement[]) {
		if (el.tagName === 'H2') {
			category = el;
			current = null;
			categories.set(el, []);
		} else if (el.tagName === 'H3' && category) {
			current = { title: el, context: plain(`${category.textContent} ${el.textContent}`), body: [] };
			sections.push(current);
			categories.get(category)?.push(current);
		} else if (current) {
			current.body.push(el);
		}
	}
	const cardText = new Map<HTMLElement, string>();
	const cardsOf = (s: Section) => s.body.flatMap((el) => Array.from(el.querySelectorAll<HTMLElement>('.formula-card')));
	for (const s of sections) for (const c of cardsOf(s)) cardText.set(c, plain(c.textContent ?? ''));
	const total = cardText.size;

	const box = document.createElement('div');
	box.className = 'sheet-filter';
	box.setAttribute('role', 'search');
	box.innerHTML =
		'<input type="search" placeholder="Hledat vzorec — např. kružnice, objem, sin…" aria-label="Hledat vzorec" autocomplete="off" spellcheck="false">' +
		'<span class="sheet-filter-count" aria-live="polite"></span>';
	const input = box.querySelector('input')!;
	const count = box.querySelector<HTMLElement>('.sheet-filter-count')!;
	const empty = document.createElement('p');
	empty.className = 'sheet-empty is-filtered';
	empty.textContent = 'Žádný vzorec tohle neobsahuje.';
	anchor.before(box);
	article.append(empty);

	const hide = (el: Element, on: boolean) => el.classList.toggle('is-filtered', on);

	const apply = () => {
		const words = plain(input.value).split(' ').filter(Boolean);
		let shown = 0;
		for (const s of sections) {
			const cards = cardsOf(s);
			for (const c of cards) {
				const match = words.every((w) => `${s.context} ${cardText.get(c)}`.includes(w));
				hide(c, !match);
				if (match) shown++;
			}
			// a topic with cards stays while one of them does; a topic of tables only, when its words match
			const bodyText = plain(s.body.filter((el) => !el.querySelector('.formula-card')).map((el) => el.textContent).join(' '));
			const visible = cards.length ? cards.some((c) => !c.classList.contains('is-filtered')) : words.every((w) => `${s.context} ${bodyText}`.includes(w));
			if (!cards.length && visible) shown++;
			hide(s.title, !visible);
			for (const el of s.body) hide(el, !visible);
			// the small titles inside a sheet ("Čtverec") go with their cards
			for (const sheet of s.body.filter((el) => el.classList.contains('formula-sheet'))) {
				let title: HTMLElement | null = null;
				let any = false;
				for (const child of Array.from(sheet.children) as HTMLElement[]) {
					if (child.classList.contains('formula-group-title')) {
						if (title) hide(title, !any);
						title = child;
						any = false;
					} else if (!child.classList.contains('is-filtered')) any = true;
				}
				if (title) hide(title, !any);
			}
		}
		for (const [heading, list] of categories) hide(heading, list.length > 0 && list.every((s) => s.title.classList.contains('is-filtered')));
		hide(empty, shown > 0);
		count.textContent = words.length ? `${shown} z ${total}` : '';
	};

	let timer = 0;
	input.addEventListener('input', () => {
		clearTimeout(timer);
		timer = window.setTimeout(apply, 70);
	});
	input.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && input.value) input.value = '';
		else if (e.key !== 'Enter') return;
		clearTimeout(timer);
		apply();
	});
}
