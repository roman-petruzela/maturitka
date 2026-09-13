## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

**Cache gotcha:** after editing any of `src/lib/markdown/*.ts` (graph-svg.ts, geometry-svg.ts,
solid-svg.ts, the remark/rehype plugins) or `src/lib/{subjects,groups,content-fs}.ts`, both
`astro dev`'s file-watcher and a plain `npm run build` can silently keep serving/emitting the
*old* output — hit this twice in one session (content collections staying empty after a real
fix, then a solid-diagram fix not showing up). Force a clean re-sync before trusting the
result:

```
astro dev stop   # if a dev server is running
rm -rf dist node_modules/.astro node_modules/.vite .astro
npm run build    # or: astro dev --background
```

## Content ordering & labels

Subject and topic-group order/labels are NOT hardcoded in TypeScript (there's no
per-subject config table to edit). Instead, `src/content/*` directories (both subject
folders and the category folders inside them) follow a filesystem convention read by
`src/lib/content-fs.ts`:

- A leading `NN-` numeric prefix on a folder name sets its sort order and is stripped to
  form the public URL slug (e.g. `03-funkce-a-rovnice` → `/mat/funkce-a-rovnice/`).
- An optional `_meta.json` in that folder (`{ "label": "...", "description": "..." }`)
  supplies the display label/description when the auto-capitalized slug isn't good enough
  (missing diacritics, needs a "(2. ročník)" suffix, etc). Without it, the label falls back
  to an auto-capitalized version of the slug.
- To reorder or relabel subjects/categories: rename the folder and/or edit `_meta.json` —
  no code changes needed. Individual topic files keep their own existing convention
  (`NN-slug.md` filename + `order:` in frontmatter, both already in sync across the archive).

## Project overview

MATURITKA (maturitka.petruze.la) is a Czech-language maturita (school-leaving exam) study
site built from an archive of real teaching materials (docx/pptx/pdf) converted to Markdown
content collections, one per subject under `src/content/` (`01-cj`, `02-mat`, `03-aj`,
`04-it`, `05-dejepis`, `06-zemepis`, `07-fyzika`, `08-spolecenske-vedy`, `09-pravo`,
`10-psychologie`, `11-ekonomika`, `12-nemcina`). CJ (literatura especially), MAT, and IT have
had the most cleanup/enrichment so far; other subjects are largely untouched.

**Content quality rules (non-negotiable):**
- Only use verified or directly reconstructable data — never fabricate facts, images, or
  citations. Where the original conversion lost something (a formula rendered as an image, a
  screenshot, a whole page), mark it explicitly rather than inventing a replacement —
  `((obrázek vynechán))` is the established placeholder (auto-styled as a muted note by
  `rehype-recon-note.ts`, see below). Numeric/data *tables* are fine to rebuild if the
  surrounding text still states the values. Never hand-reconstruct a lost image as ASCII art.
- Never commit git changes yourself — always print the `git add`/`git commit` commands and
  let the user run them.
- Always run the verification workflow below before calling a change done — a clean-looking
  edit can silently break the build (stale caches) or a rehype plugin (see the spoiler/math
  interaction gotcha below).

## Verification workflow

Run this after any content or code change, every time — several bugs this project has hit
(stale caches, spoiler regex breaking on math, whiteboard-button heuristics misfiring) were
only caught by actually rebuilding and checking the output, not by reasoning about the diff:

```
rm -rf dist node_modules/.astro node_modules/.vite .astro
npx astro check
npm run build
node scripts/check-links.mjs
```

`check-links.mjs` scans `dist/**/*.html` for internal `<a href="/...">` links pointing to
build output that doesn't exist — run it after every build, not just when you touch links.

## Custom markdown pipeline

`astro.config.mjs` wires up several hand-written remark/rehype plugins (in
`src/lib/markdown/`) that apply to *every* content file across all subjects. Order in the
`rehypePlugins` array matters — math must run before spoiler/recon-note (see below).

- **`remark-graph.ts` / `graph-svg.ts`** — a ` ```graph ` fenced block becomes a build-time
  SVG function plot. JSON spec supports `fn` (a JS-like expression string, e.g.
  `"x^2 - 4*x + 3"`; also understands `log10(`/`log2(` alongside the usual `sin/cos/sqrt/ln`
  etc.), `fn2` + `fn2Label` (a second curve overlaid dashed on the same axes — e.g. a line
  crossing a parabola), `parametric`+`tDomain` (circles/ellipses), `domain`, `yDomain`,
  `points` (marked+labeled coordinates), `xLabel`/`yLabel`, `spoiler` (hide until clicked),
  `float`.
- **`remark-geometry.ts` / `geometry-svg.ts`** — a ` ```geometry ` block: named 2D `points`,
  `segments` (with `dashed`), `circles`, `arcs` (`fill: 'sector'|'segment'`), `angles`
  (`rightAngle` marker or an arc+label), free-floating `labels`.
- **`remark-solid.ts` / `solid-svg.ts`** — a ` ```solid ` block: a 3D wireframe
  (`kvadr`/`krychle`/`hranol`/`jehlan`/`valec`/`kuzel`/`koule`/`komoly_jehlan`/`komoly_kuzel`),
  with `labels: [{ at: [x,y,z], text }]` for vertex names — e.g. a labeled cube ABCDEFGH with
  `A=[0,0,0]…H=[0,b,c]` matches the "spodní podstava ABCD, horní EFGH" convention used
  throughout stereometrie content, so reuse those exact coordinates when adding a labeled
  solid to a new file rather than re-deriving them.
- **`rehype-math.ts`** — `$...$` / `$$...$$` → statically rendered MathLive markup
  (`.math-inline`/`.math-display` spans), no client-side JS needed just to *display* a
  formula.
- **`rehype-spoiler.ts`** — `||hidden text||` → a click-to-reveal `.spoiler` span (toggled by
  a delegated listener in `BaseLayout.astro`). **Important**: this has to handle a spoiler
  wrapping a formula, e.g. `||$\frac{a}{b}$||` — since rehype-math already ran, the `||...||`
  markers end up in *separate sibling text nodes* with the rendered math element in between.
  The plugin handles this by flattening a parent's children into one buffer (with a
  placeholder standing in for each non-text child), running the spoiler regex on that buffer,
  then re-expanding placeholders back into real nodes. Don't "simplify" this back to matching
  within a single text node — that was a real, shipped bug, not a hypothetical one.
- **`rehype-recon-note.ts`** — `((text))` → a muted, non-italic inline note, used for
  "this wasn't preserved in the source" disclaimers so a heavily-damaged file doesn't read as
  a wall of italics. Same math-in-the-middle risk as spoiler in principle, though no content
  currently triggers it.
- **`rehype-author-portrait.ts`** — CJ literatura only (path-scoped): inserts a
  `<figure class="graph-plot graph-plot--float-right author-photo">` (real photo or a
  placeholder silhouette) right after each `### Author Name` heading. Photos live in
  `public/images/authors/`, matched via a slugified version of the heading text
  (`src/lib/markdown/author-image.ts`); see `public/images/authors/CREDITS.md` for the
  sourcing/license log — every photo must be independently verified PD or CC (with a visible
  credit line via `findAuthorCredit()`) on Wikimedia Commons before adding it, never guessed.
- **`rehype-rozbor-link.ts`** — turns a `[rozbor](/cj/rozbor-knih-a-cetba/slug/ "Rozbor díla
  Title")` link into a small icon with that title text as its hover tooltip. The content
  convention this pairs with:
  `**[Název díla](https://cs.wikisource.org/wiki/...)** ([rozbor](... "Rozbor díla Název")):`
  — the *title* links to the full text (Wikisource, and **only** for Czech-*original* works;
  a foreign author being public-domain does not make a Czech *translation* public domain, the
  translator holds separate copyright), the small icon next to it links to this site's own
  analysis page.

## MathScratchpad whiteboard-button heuristic

`src/components/MathScratchpad.astro` client-side-scans each article for exercises worth an
inline "→ tabule" (send to whiteboard) button. This heuristic has been tuned through several
real bugs — read the comments in the file before changing it again, but in short:

- Recognizes numbered markers (`1.`/`1)`) **and** single-lowercase-letter markers (`a)`/`b)`),
  either as real `<ol><li>` items or as a bold marker starting its own paragraph (e.g.
  `**a)** $\frac{...}{...}$`) — it checks the paragraph's *full* `textContent`, not just its
  first child, since a bold marker renders as `<strong>a)</strong>` with the rest of the
  sentence in a sibling text node.
- Excludes three specific non-exercise cases: a "Příklady" (plural) illustrative intro, a list
  where *every* item opens with a universal-quantifier phrase ("Pro všechna/každé/libovolné…"
  — a property statement, not a task), and a group that already has its own
  table/graph/spoiler-block/math-field scaffolding before the next group starts.
- **When authoring exercises meant to each get their own button**: put every sub-part
  (`**a)** ...`) on its own paragraph followed by its own `Výsledek: ||...||`, rather than
  listing all of `a) b) c)` inline in one paragraph with the answers crammed into one spoiler
  afterward — see `src/content/02-mat/02-vyrazy-a-mocniny/15-lomene-vyrazy-shrnuti.md` for the
  canonical example of this layout.
- **When authoring an answer list that should *not* get a button** (e.g. per-item spoilers
  explaining several sub-answers of one exercise): use a `-` bullet list (`<ul>`), never a
  numbered list — `ol > li` is unconditionally treated as a candidate, `ul > li` never is.

## Content-authoring gotchas

- **Non-breaking spaces**: some docx-converted files have stray `\xa0` (U+00A0) characters in
  place of ordinary spaces (a leftover Czech typesetting convention against orphaned
  one-letter prepositions). Invisible on the rendered page, but it silently breaks exact
  string matching (the `Edit` tool, `grep` without `-P`/Unicode awareness) — if a matching
  edit mysteriously fails on text that looks right, check for this before assuming the file
  content is different than it appears.
- **Crammed multi-part spoilers**: a recurring authoring mistake (now fixed in most of
  `02-vyrazy-a-mocniny`, may still exist elsewhere) is cramming every sub-answer of a lettered
  exercise into one `Výsledek: ||a) ... b) ... c) ...||` spoiler — unreadable once revealed,
  and (before the cross-sibling fix above existed) silently broke if any sub-answer contained
  math. Split these into one `- **a)** ||...||` bullet per sub-answer instead.
- **Vercel Analytics** (`@vercel/analytics/astro`) is wired into `BaseLayout.astro` — data only
  shows up in the Vercel dashboard after a real deploy, not from a local build.

## Known open gaps (check before assuming these are done)

- `src/content/04-it/01-uvod-do-vypocetni-techniky/07-hardware-doplnkove-poznamky-graficke-karty-displeje-a-dalsi.md`
  has ~56 lost images (real hardware photos/diagrams, not reconstructable as data/graphs) and
  heavy leftover docx-escape artifacts (`\(`, `\-`, `\.`) — a bigger, separate cleanup job, not
  yet started.
- Most subjects beyond CJ literatura, MAT, and parts of IT haven't had a content-quality pass
  yet (dejepis, zeměpis, fyzika, společenské vědy, právo, psychologie, ekonomika, němčina).
- Roughly 100 of the ~140 authors in the official Cermat author list (see
  `src/content/01-cj/02-literatura/seznam-autoru-a-smeru-katalog-pozadavku.md`) still don't
  have a portrait — mostly antiquity/medieval figures where a real photo was never going to
  exist anyway, but some later authors are still genuinely missing.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
