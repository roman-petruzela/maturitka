// Study progress: which topics the student has marked "hotovo". Kept in localStorage as a JSON array
// of topic ids ("mat/planimetrie/04-trojuhelnik-obecny"); the same key is read on every page, so the
// button of a topic page and the marks and the bar of the subject page stay in step (also across tabs).
const KEY = 'maturitka-done:v1';

/** The ids stored under KEY; anything that is not a JSON array of strings is ignored. */
export function parseDone(raw: string | null): Set<string> {
	try {
		const value = JSON.parse(raw ?? '[]');
		return new Set(Array.isArray(value) ? value.filter((v): v is string => typeof v === 'string') : []);
	} catch {
		return new Set();
	}
}

function load(): Set<string> {
	try {
		return parseDone(localStorage.getItem(KEY));
	} catch {
		return new Set(); // storage blocked (private mode, cookies off)
	}
}

function save(done: Set<string>): void {
	try {
		localStorage.setItem(KEY, JSON.stringify([...done]));
	} catch {
		// full or blocked: the mark lasts until the page is left
	}
}

function paint(done: Set<string>): void {
	document.querySelectorAll<HTMLElement>('[data-done-toggle]').forEach((btn) => {
		const on = done.has(btn.dataset.topicId ?? '');
		btn.setAttribute('aria-pressed', String(on));
		const label = btn.querySelector('[data-done-label]');
		if (label) label.textContent = on ? 'Hotovo' : 'Označit jako hotové';
	});

	// subject page: a mark on every finished row, "k/n" on every category, one bar for the subject
	const rows = document.querySelectorAll<HTMLElement>('li[data-topic-id]');
	rows.forEach((li) => {
		const on = done.has(li.dataset.topicId ?? '');
		li.classList.toggle('is-done', on);
		const mark = li.querySelector<HTMLElement>('.done-mark');
		if (mark) mark.hidden = !on;
	});
	document.querySelectorAll<HTMLElement>('.group-block').forEach((block) => {
		const count = block.querySelector<HTMLElement>('.group-block-count');
		if (!count) return;
		const all = block.querySelectorAll('li[data-topic-id]').length;
		const finished = block.querySelectorAll('li.is-done').length;
		count.textContent = finished > 0 ? `${finished}/${all}` : String(all);
	});
	const bar = document.querySelector<HTMLElement>('[data-progress]');
	if (bar) {
		const finished = document.querySelectorAll('li.is-done').length;
		bar.hidden = false;
		bar.style.setProperty('--p', rows.length ? String(finished / rows.length) : '0');
		const text = bar.querySelector('[data-progress-text]');
		if (text) text.textContent = `Hotovo ${finished} z ${rows.length}`;
	}
}

export function initProgress(): void {
	paint(load());
	document.querySelectorAll<HTMLElement>('[data-done-toggle]').forEach((btn) => {
		btn.dataset.ready = '';
		btn.addEventListener('click', () => {
			const done = load();
			const id = btn.dataset.topicId ?? '';
			if (!done.delete(id)) done.add(id);
			save(done);
			paint(done);
		});
	});
	window.addEventListener('storage', (e) => {
		if (e.key === KEY) paint(load());
	});
}
