# Front end: styles, scripts, motion, offline

Styles, client scripts, motion, portraits, the picture viewer, the phone layout and the service worker. Rules of highest importance are in [`AGENTS.md`](../AGENTS.md).

## Styles

`src/styles/global.css` only imports the area files in order: `tokens.css` (palette, fonts, motion
variables), `transitions.css`, `chrome.css` (header, footer, base typography), `home.css`,
`subject.css`, `article-layout.css` (the three columns and rails), `article-body.css`, `figures.css`
(graphs, solids, timeline, formula sheet, portraits), `whiteboard.css`, `print.css`. Where this file
says "global.css", it means these files. The bundle is the same single stylesheet as before.

## Client scripts

Pages carry almost no inline JavaScript. `BaseLayout.astro` keeps inline only what must run before
the first paint (switching off the browser's scroll restoration, the `vt-fallback` class, restoring the
saved page and subject-strip offsets); everything else is bundled TypeScript: `site-chrome.ts` (every
page — scroll memory, auto-hiding header, spoilers, the draggable subject strip and its edge fades,
the fallback page transition, the category pills), `article-page.ts` (topic pages — folding rails,
fitting formulas, the table of contents, centring the subject rail) and `rail-formulas.ts` (the
"Klíčové vzorce" rail; its text helpers are pure and tested). MathLive (~800 kB) is not loaded with the
page: `MathScratchpad.astro` imports it when the result field comes near the viewport or is touched —
until then nothing may set the field's properties, or they shadow MathLive's accessors on upgrade.

Unit tests of the pure modules live in `tests/*.test.ts` and run with `npm test` (Node strips the
types itself; imports use the `.ts` extension).

## Motion

One curve and three durations, defined as custom properties in `:root` (global.css): `--ease`,
`--dur-quick` (hover, colour, small toggles), `--dur-move` (things that slide or open — the auto-hiding
header, the rails following it, the search dialog) and `--dur-page` (the page change). Components use
these, never their own numbers — the site had seven different timings before, which is what made it feel
broken.

- **Page change:** a plain crossfade, no scaling — `::view-transition-old/new(root)` natively; in
  browsers without cross-document view transitions (Firefox/Zen: no `pagereveal`) the `vt-fallback`
  script dims `<body>` to 0.6 on a link click and brings it back on load (a fade to 0 blinks there,
  because the two pages never overlap). The topic title morphs between topic pages (`article-title`).
- **Front-page entrance** (`maturitka-rise-in`) plays only on a fresh load: a page reached through a
  view transition gets `html.vt-arrived` (set on `pagereveal`), and `html.vt-fallback` already has its
  entrance — playing both made the page move twice.
- **Scroll restoration** must use `behavior: 'instant'`: `html` has `scroll-behavior: smooth`, and a
  smooth restore scrolled the page visibly on every return and fired scroll events that hid the header.
- `prefers-reduced-motion` switches all of it off (the view-transition pseudo-elements need their own
  rule, a `*` selector does not reach them).

## Author portraits (`rehype-author-portrait.ts`)

On the `05-literatura` pages every `###` / `####` heading that names a person gets a figure: the photo
from `public/images/authors/<slug>.webp` (slug = the name without `(…)` groups and a `— 2. fáze` tail,
diacritics stripped), else a silhouette placeholder. Headings that name a period, group or topic
("Futurismus", "Prokletí básníci", "Ztracená generace") are listed in `NOT_A_PERSON_RE` and stay plain —
add a new one there when you write such a heading.
A page of `04-autori` gets the same figure at its top, for the person its title names.
CC-licensed photos must show their credit: `public/images/authors/credits.json` (`{ "<slug>": "<author>,
<licence>" }`); sources go to `CREDITS.md`.

## Picture viewer (`src/lib/image-viewer.ts`)

A plain picture of an article (`article.topic img:not([class])`, the ones restored from the sources)
opens on a click — or Enter when focused — in a full-screen `<dialog>`: fitted to the screen (a small
picture enlarged at most `MAX_FIT` 2.5×), zoomed by the wheel to the cursor, a two-finger pinch, a double
click (fit ↔ 2.5×), the − / + buttons or keys and `0` to fit again, moved by dragging or the arrow keys
and never dragged off the screen. Escape, × or a click beside the picture closes it and returns the
focus. The alt text is shown above it unless it is only the generated "Ilustrace: …". The pictures are
marked with `data-zoomable`, **not a class** — a class would end their `img:not([class])` card style. A
picture inside a link keeps the link, one inside an unrevealed spoiler does not open. The module is
loaded by `BaseLayout.astro` only on a page that has such a picture.

## Phone layout

Below 1024px the article is one column. Above the text only the category and the folded
"Obsah" (with the formula rail inside); Předchozí / Další and the subject index ("Navigace") come
after the article. `.rail-aside` is dissolved there (`display: contents` in `article-layout.css`) so
its parts take separate rows of the page grid (`meta` `toggle` `body` `main` `adjacent` `nav`) — the
folding still works through the aside's own `.is-open`. Before, ~450px of navigation pushed the title
below the first screen of a phone.

## Offline (`src/pages/sw.js.ts`)

`/sw.js` is generated at build time (a static endpoint, not a file in `public/`) so that the version of
`package.json` is part of its text: every release changes it, the browser installs the new worker
(`skipWaiting` + `clients.claim`) and `activate` deletes the caches of other versions (`maturitka-static-<v>`,
`maturitka-pages-<v>`). Cache first: `/_astro/*` (hashed scripts and styles, the fonts) and `/images/*`.
Network first: navigations and `/search.json`, the last copy of a page already visited when the network
fails, else a small inline "Jsi offline" page (status 503). Nothing else (Vercel Analytics, other origins)
is touched. `BaseLayout.astro` registers it only when `import.meta.env.PROD` — in `astro dev` a worker would
serve stale files. Tested with the headless Zen flatpak: a harness page in `dist/` registers the worker, loads
a page in an iframe, takes the server "down" (a Python server that closes every connection) and reports each
step through `GET /__r?…` lines in the server log; Zen is run without `--screenshot` and ended by `timeout`
(never `pkill -f` — it matches the shell's own command line, and the user's own Zen runs too).
Because `/images/*` is sent `immutable` (vercel.json) **and** cached first, an image replaced under the same
file name does not reach returning visitors — give a changed picture a new name.

