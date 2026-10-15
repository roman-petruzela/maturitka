// Behaviour shared by every page: scroll memory, the auto-hiding header, spoilers, the
// draggable subject strip and the fallback page transition. Loaded by BaseLayout.astro.
//
// The two things that must happen before the first paint stay inline in BaseLayout: switching
// off the browser's own scroll restoration (in <head>) and restoring the saved page and strip
// offsets (at the end of <body>). This module only keeps those offsets up to date.

export const PAGE_SCROLL_KEY = 'maturitka-scroll:';
export const NAV_SCROLL_KEY = 'maturitka-nav-scroll';

/** Runs `fn` at most once per animation frame for a stream of events. */
function onFrame(fn: () => void): () => void {
	let ticking = false;
	return () => {
		if (ticking) return;
		ticking = true;
		requestAnimationFrame(() => {
			fn();
			ticking = false;
		});
	};
}

// Save each page's scroll offset under its own pathname; the inline script restores it when that
// exact page loads again — true back/forward navigation and also plain links back to a list page
// (the "← Zpět na …" link of a topic page).
function rememberPageScroll(): void {
	const key = PAGE_SCROLL_KEY + location.pathname;
	const save = onFrame(() => sessionStorage.setItem(key, String(window.scrollY)));
	window.addEventListener('scroll', save, { passive: true });
}

// Auto-hiding header: slides away on scroll down, comes back on scroll up (past a small
// threshold so it doesn't jitter right at the top of the page). Mirrored on <body> so the sticky
// side rails, which are not inside <header>, can close the gap it leaves (body.header-hidden in
// global.css).
function autoHideHeader(): void {
	const header = document.querySelector('header.site-header');
	if (!header) return;
	let lastY = window.scrollY;
	const update = onFrame(() => {
		const y = window.scrollY;
		if (y > lastY && y > 72) {
			header.classList.add('header-hidden');
			document.body.classList.add('header-hidden');
		} else if (y < lastY) {
			header.classList.remove('header-hidden');
			document.body.classList.remove('header-hidden');
		}
		lastY = y;
	});
	window.addEventListener('scroll', update, { passive: true });
}

// Discord-style spoilers: inline "||text||" (rehype-spoiler.ts, class "spoiler") and block-level
// figures ("spoiler": true, class "spoiler-block") share click / Enter / Space to toggle.
// Delegated on document, so it works for every spoiler without a per-page script.
function spoilers(): void {
	const spoilerOf = (target: EventTarget | null) =>
		target instanceof Element ? target.closest('.spoiler, .spoiler-block') : null;
	document.addEventListener('click', (e) => {
		spoilerOf(e.target)?.classList.toggle('is-revealed');
	});
	document.addEventListener('keydown', (e) => {
		if (e.key !== 'Enter' && e.key !== ' ') return;
		const el = spoilerOf(e.target);
		if (!el) return;
		e.preventDefault();
		el.classList.toggle('is-revealed');
	});
}

// The subject strip scrolls sideways. Its edges fade out (`.can-scroll-start` / `-end`, global.css)
// while there is more to scroll in that direction, so a cut-off subject reads as "there is more".
function stripEdges(nav: HTMLElement): void {
	const sync = onFrame(() => {
		const max = nav.scrollWidth - nav.clientWidth;
		nav.classList.toggle('can-scroll-start', nav.scrollLeft > 1);
		nav.classList.toggle('can-scroll-end', nav.scrollLeft < max - 1);
	});
	nav.addEventListener('scroll', sync, { passive: true });
	window.addEventListener('resize', sync);
	sync();
}

// Drag-to-scroll for the subject strip with a fling at the end. Touch already has native momentum
// scrolling and is left alone; this gives mouse and pen the same feel.
//
// Pointer Events on window rather than setPointerCapture: capturing the pointer on the nav retargets
// the following "click" to the nav itself instead of the link under it, which silently broke
// navigation. Native link dragging (which would swallow pointermove/pointerup) is disabled by
// draggable="false" in the markup and the dragstart guard below.
function draggableStrip(nav: HTMLElement): void {
	const save = onFrame(() => sessionStorage.setItem(NAV_SCROLL_KEY, String(nav.scrollLeft)));
	nav.addEventListener('scroll', save, { passive: true });

	let isDown = false;
	let dragged = false;
	let startX = 0;
	let startScroll = 0;
	let lastX = 0;
	let lastT = 0;
	let velocity = 0;
	let momentumId: number | null = null;

	const stopMomentum = () => {
		if (momentumId === null) return;
		cancelAnimationFrame(momentumId);
		momentumId = null;
	};
	const runMomentum = () => {
		nav.scrollLeft += velocity;
		velocity *= 0.94;
		momentumId = Math.abs(velocity) > 0.4 ? requestAnimationFrame(runMomentum) : null;
	};

	nav.addEventListener('dragstart', (e) => e.preventDefault());
	nav.addEventListener('pointerdown', (e) => {
		if (e.pointerType === 'touch') return;
		isDown = true;
		dragged = false;
		stopMomentum();
		nav.classList.add('dragging');
		startX = lastX = e.clientX;
		startScroll = nav.scrollLeft;
		lastT = Date.now();
		velocity = 0;
	});
	window.addEventListener('pointermove', (e) => {
		if (!isDown) return;
		const walk = e.clientX - startX;
		if (Math.abs(walk) > 4) dragged = true;
		nav.scrollLeft = startScroll - walk;
		const now = Date.now();
		const dt = now - lastT;
		if (dt > 0) velocity = ((lastX - e.clientX) / dt) * 16;
		lastX = e.clientX;
		lastT = now;
	});
	const endDrag = () => {
		if (!isDown) return;
		isDown = false;
		nav.classList.remove('dragging');
		if (Math.abs(velocity) > 1) momentumId = requestAnimationFrame(runMomentum);
	};
	window.addEventListener('pointerup', endDrag);
	window.addEventListener('pointercancel', endDrag);

	// A drag that moved the strip must not also follow the link it started on — the click is
	// swallowed only when this pointerdown/pointerup pair actually dragged past the threshold.
	nav.addEventListener(
		'click',
		(e) => {
			if (!dragged) return;
			e.preventDefault();
			e.stopPropagation();
		},
		true
	);
}

// Fallback page transition for browsers without cross-document view transitions (Firefox/Zen have
// no `pagereveal`): the inline <head> script sets `vt-fallback` before the first paint, and here a
// real navigation dims the page while the next one loads (see "vt-fallback" in global.css).
function fallbackTransition(): void {
	const root = document.documentElement;
	if (!root.classList.contains('vt-fallback')) return;

	window.addEventListener('click', (e) => {
		if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
		const a = e.target instanceof Element ? e.target.closest('a[href]') : null;
		if (!(a instanceof HTMLAnchorElement) || a.target || a.hasAttribute('download')) return;
		const url = new URL(a.href, location.href);
		if (url.origin !== location.origin) return;
		// a jump within the same page, or a file rather than a page
		if (url.pathname === location.pathname && url.search === location.search) return;
		if (/\.[a-z0-9]+$/i.test(url.pathname) && !/\.html?$/i.test(url.pathname)) return;
		root.classList.add('is-leaving');
		// if the navigation never happens (cancelled, a download), don't leave the page dimmed
		setTimeout(() => root.classList.remove('is-leaving'), 3000);
	});

	// back/forward restores this page from the bfcache as it was left — dimmed — so bring it back
	window.addEventListener('pageshow', (e) => {
		if (!e.persisted) return;
		root.classList.remove('is-leaving');
		document.body.style.animation = 'none';
		void document.body.offsetWidth;
		document.body.style.animation = '';
	});
}

// On a subject's index the category pills mark the category you jumped to. CSS marks the block
// itself (:target), but a pill can't style itself off the URL hash.
function categoryPills(): void {
	const jump = document.querySelector('.group-jump');
	if (!jump) return;
	const pills = Array.from(jump.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
	const sync = () => {
		const hash = decodeURIComponent(location.hash.slice(1));
		for (const a of pills) a.classList.toggle('is-active', hash !== '' && decodeURIComponent(a.hash.slice(1)) === hash);
	};
	window.addEventListener('hashchange', sync);
	sync();
}

export function initSiteChrome(): void {
	rememberPageScroll();
	autoHideHeader();
	spoilers();
	const nav = document.querySelector<HTMLElement>('nav.subject-nav');
	if (nav) {
		draggableStrip(nav);
		stripEdges(nav);
	}
	fallbackTransition();
	categoryPills();
}
