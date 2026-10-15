// Behaviour of a topic page (article.topic): folding rails, formulas that fit, the formula rail,
// the table of contents that follows the reading and the subject rail scrolled to the open topic.
import { buildFormulaRail, markFitting, SLACK } from './rail-formulas';

// Below the three-column breakpoint each rail collapses behind its own button. A button + class
// rather than <details>: the rails must be plainly visible (and not collapsible) on desktop, and a
// <details> can't be forced open from CSS across browsers.
function railToggles(): void {
	document.querySelectorAll<HTMLElement>('[data-rail-toggle]').forEach((btn) => {
		const rail = btn.closest('.rail');
		if (!rail) return;
		btn.addEventListener('click', () => {
			btn.setAttribute('aria-expanded', String(rail.classList.toggle('is-open')));
		});
	});
}

// A card of a formula sheet (```formulas) that is a little too wide for its column — on a phone, or
// between the two column layouts — shrinks its formula (down to ~0.78×) rather than scrolling it;
// only a formula far wider than the card keeps its scrollbar.
function fitCards(root: ParentNode): void {
	root.querySelectorAll<HTMLElement>('.formula-card .math-display').forEach((el) => {
		el.style.fontSize = '';
		if (el.scrollWidth - el.clientWidth <= SLACK) return;
		const base = parseFloat(getComputedStyle(el).fontSize);
		for (let f = 0.96; f > 0.77; f -= 0.04) {
			el.style.fontSize = (base * f).toFixed(1) + 'px';
			if (el.scrollWidth - el.clientWidth <= SLACK) return;
		}
	});
}

function fittingFormulas(article: HTMLElement): void {
	const refit = () => {
		fitCards(article);
		markFitting(article);
	};
	refit();
	let frame = 0;
	window.addEventListener('resize', () => {
		cancelAnimationFrame(frame);
		frame = requestAnimationFrame(refit);
	});
	document.fonts?.ready.then(refit);
}

// The table of contents marks the section being read: the last heading whose top has passed under
// the header — a plain scroll read, which behaves predictably around short sections where
// IntersectionObserver ratios flap.
function tocSpy(): void {
	const toc = document.querySelector('[data-toc]');
	if (!toc) return;
	const pairs = Array.from(toc.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'))
		.map((link) => ({ link, target: document.getElementById(decodeURIComponent(link.hash.slice(1))) }))
		.filter((p): p is { link: HTMLAnchorElement; target: HTMLElement } => p.target !== null);
	if (!pairs.length) return;

	const CUTOFF = 140;
	let active: HTMLAnchorElement | null = null;
	const sync = () => {
		let current = pairs[0];
		for (const p of pairs) {
			if (p.target.getBoundingClientRect().top <= CUTOFF) current = p;
			else break;
		}
		if (current.link === active) return;
		active?.classList.remove('is-active');
		current.link.classList.add('is-active');
		active = current.link;
	};
	let ticking = false;
	window.addEventListener(
		'scroll',
		() => {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(() => {
				sync();
				ticking = false;
			});
		},
		{ passive: true }
	);
	sync();
}

// Scrolls the subject rail itself to the open topic, never scrollIntoView(): that may also nudge
// ancestor scroll containers (the page included) and yank the reader from the top of the article.
function centreCurrentTopic(): void {
	const rail = document.querySelector<HTMLElement>('[data-subject-rail]');
	const current = rail?.querySelector('.is-current');
	if (!rail || !current || rail.scrollHeight <= rail.clientHeight) return;
	const railBox = rail.getBoundingClientRect();
	const itemBox = current.getBoundingClientRect();
	rail.scrollTop += itemBox.top - railBox.top - (rail.clientHeight - itemBox.height) / 2;
}

export function initArticlePage(): void {
	const article = document.querySelector<HTMLElement>('article.topic');
	if (!article) return;
	railToggles();
	fittingFormulas(article);
	buildFormulaRail(article);
	tocSpy();
	centreCurrentTopic();
}
