// The reader of a book page (`book: true`, 01-cj/07-knihovna): the text-size slider, the reading
// progress and the place where you stopped, kept in localStorage so it survives closing the browser.
// The place is a paragraph, not a scroll offset — a different text size or screen moves every offset.

const SIZE_KEY = 'maturitka-book-size';
const PLACE_KEY = 'maturitka-book-place:';

export function initBookReader(): void {
	const article = document.querySelector<HTMLElement>('article.book');
	const bar = document.querySelector<HTMLElement>('[data-book-bar]');
	if (!article || !bar) return;
	const paragraphs = Array.from(article.querySelectorAll<HTMLElement>(':scope > p'));
	const chapters = Array.from(article.querySelectorAll<HTMLElement>(':scope > h2'));
	const progress = bar.querySelector<HTMLElement>('[data-book-progress]');
	const resume = bar.querySelector<HTMLButtonElement>('[data-book-resume]');
	const slider = bar.querySelector<HTMLInputElement>('[data-book-size]');
	const placeKey = PLACE_KEY + location.pathname;

	// the paragraph at the middle of the screen is the one being read
	const readParagraph = (): number => {
		const middle = window.innerHeight / 2;
		const i = paragraphs.findIndex((p) => p.getBoundingClientRect().bottom > middle);
		return i === -1 ? paragraphs.length - 1 : i;
	};
	const chapterOf = (el: HTMLElement): string => {
		let title = '';
		for (const h of chapters) {
			if (h.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING) title = h.textContent ?? '';
			else break;
		}
		return title;
	};
	const centre = (el: HTMLElement) => {
		const box = el.getBoundingClientRect();
		window.scrollTo({ top: window.scrollY + box.top - (window.innerHeight - box.height) / 2, behavior: 'instant' });
	};

	if (slider) {
		slider.value = localStorage.getItem(SIZE_KEY) ?? '1';
		slider.addEventListener('input', () => {
			// keep the paragraph being read in place while the text around it grows or shrinks
			const anchor = paragraphs[readParagraph()];
			article.style.setProperty('--book-scale', slider.value);
			localStorage.setItem(SIZE_KEY, slider.value);
			if (anchor) centre(anchor);
		});
	}

	// "Pokračovat" only when the page opens at its top — after a reload the scroll is restored anyway
	const saved = Number.parseInt(localStorage.getItem(placeKey) ?? '', 10);
	if (resume && paragraphs[saved] && saved > 0 && window.scrollY < 200) {
		const chapter = chapterOf(paragraphs[saved]);
		resume.textContent = chapter ? `Pokračovat ve čtení (${chapter})` : 'Pokračovat ve čtení';
		resume.hidden = false;
		resume.addEventListener('click', () => {
			centre(paragraphs[saved]);
			resume.hidden = true;
		});
	}

	let ticking = false;
	const update = () => {
		const max = document.documentElement.scrollHeight - window.innerHeight;
		const done = max > 0 ? Math.min(1, window.scrollY / max) : 1;
		if (progress) progress.style.transform = `scaleX(${done})`;
		const i = readParagraph();
		// the top of the page is not a place worth remembering — it would overwrite the real one
		if (window.scrollY > 200) {
			localStorage.setItem(placeKey, String(i));
			// reading on from the top instead: the offer would only take room in the bar
			if (resume) resume.hidden = true;
		}
		ticking = false;
	};
	window.addEventListener(
		'scroll',
		() => {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(update);
		},
		{ passive: true }
	);
	update();
}
