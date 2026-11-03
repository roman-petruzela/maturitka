import type { APIRoute } from 'astro';
import { version } from '../../package.json';

// The service worker, served as /sw.js. It is generated (not a file in public/) so that the version
// from package.json is part of its text: a new release changes /sw.js byte for byte, the browser
// installs the new worker, and `activate` deletes the caches of the old version.
//   - /_astro/* (hashed scripts, styles, fonts) and /images/*: cache first
//   - pages and /search.json: network first, the last copy of a page already visited when offline
//   - everything else (Vercel Analytics, other origins) is not touched
export const prerender = true;

const worker = `
const VERSION = ${JSON.stringify(version)};
const STATIC = 'maturitka-static-' + VERSION;
const PAGES = 'maturitka-pages-' + VERSION;
const OFFLINE = '<!doctype html><html lang="cs"><meta charset="utf-8"><meta name="viewport" content="width=device-width">'
	+ '<title>Offline · MATURITKA</title><body style="font:1.1rem/1.6 Georgia,serif;background:#141311;color:#e5e0d8;max-width:30rem;margin:4rem auto;padding:0 1rem">'
	+ '<h1>Jsi offline</h1><p>Tuhle stránku jsem ještě nenačetl a nemám její kopii. Stránky, které jsi už otevřel, fungují i bez připojení.</p>';

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys()
			.then((keys) => Promise.all(keys.filter((k) => k !== STATIC && k !== PAGES).map((k) => caches.delete(k))))
			.then(() => self.clients.claim())
	);
});

async function cacheFirst(request) {
	const cache = await caches.open(STATIC);
	const hit = await cache.match(request);
	if (hit) return hit;
	const response = await fetch(request);
	if (response.ok) cache.put(request, response.clone());
	return response;
}

async function networkFirst(request) {
	const cache = await caches.open(PAGES);
	try {
		const response = await fetch(request);
		if (response.ok) cache.put(request, response.clone());
		return response;
	} catch {
		const hit = await cache.match(request);
		if (hit) return hit;
		if (request.mode === 'navigate') {
			return new Response(OFFLINE, { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } });
		}
		throw new Error('offline');
	}
}

self.addEventListener('fetch', (event) => {
	const request = event.request;
	if (request.method !== 'GET') return;
	const url = new URL(request.url);
	if (url.origin !== self.location.origin) return;
	if (url.pathname.startsWith('/_astro/') || url.pathname.startsWith('/images/')) {
		event.respondWith(cacheFirst(request));
	} else if (request.mode === 'navigate' || url.pathname === '/search.json') {
		event.respondWith(networkFirst(request));
	}
});
`;

export const GET: APIRoute = () =>
	new Response(worker, { headers: { 'Content-Type': 'text/javascript; charset=utf-8' } });
