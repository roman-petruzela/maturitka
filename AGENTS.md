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

## Versioning

`package.json`'s `version` is rendered in the site footer (`BaseLayout.astro` imports it
directly), so it is the visible build marker rather than an npm publishing detail.

**Bump it in the same commit as every user-visible change.** Nothing enforces this
automatically — no hook, no CI check — so it is on whoever makes the change:

- patch (`0.2.0` → `0.2.1`) — content fixes, copy edits, single-topic additions
- minor (`0.2.0` → `0.3.0`) — new pages, layout or design changes, new subjects
- major — reserved for a full rebuild

Keep `package-lock.json`'s two top-level `"version"` fields in step, or the next
`npm install` will rewrite them as a stray diff.

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
- **Pages that are not study content** — a signpost (rozcestník), a ŠVP overview, a topic plan, an
  exam syllabus, a reading list, a formula sheet — sit at `order` ≤ 0, so the numbered content
  starts at 1: −1 for the signpost that should come first (`literarni-skupiny-…-rozcestnik`,
  `maturitni-okruhy`, `prehled-vzorcu`, the Cermat outline), 0 for the ŠVP overviews and plans.

## Markdown pipeline (`src/lib/markdown/`)

Plugins run in this order (`astro.config.mjs`): `remarkLineBreaks` → `remarkProtectMath` →
`remarkGraph` / `remarkGeometry` / `remarkSolid` (JSON fences → build-time SVG) / `remarkTimeline` /
`remarkFormulas` (JSON fences → build-time HTML) → `rehypeMath` → `rehypeSpoiler` → `rehypeReconNote` →
`rehypeAuthorPortrait` → `rehypeRozborLink`.

- **Formulas.** `$…$` / `$$…$$` are typeset at build time with MathLive's SSR renderer. Markdown
  would corrupt LaTeX before it ever reached `rehype-math` (`\{ \} \\ \, \; \!` lose their
  backslash, `_`/`*` become emphasis and split the text node, smartypants curls `'`), so
  `remark-protect-math.ts` lifts every formula out into an opaque private-use token *before*
  parsing and puts it back verbatim afterwards; `math-segments.ts` decides what is a formula
  (same rule on both sides). MathLive has **no `\dots`** — `rehype-math` maps it to `\ldots` /
  `\cdots` by context. After touching any of this, a build must show **zero** `ML__error`
  (grep the built HTML) and no leaked `\ue000…\ue001` tokens.
- **Long derivations.** MathLive's static output is one rigid box, so a solution written as
  `A \implies B \implies C …` used to overflow its column with a scrollbar. `formula-breaks.ts`
  (pure, testable from Node) finds the top-level relations and `rehype-math` then lays a long
  *display* out as an `aligned` block (arrow at the start of each row; long `=` chains lined up on
  the `=`) and cuts a long *inline* formula into several inline boxes separated by ordinary spaces —
  the places a paragraph can wrap, as in TeX. Only algebra is touched (there must be a `=`/`<`/`>`
  in it): a propositional formula uses the same arrows as connectives. Widths are estimated with
  `visualWidth()` (a fraction is as wide as its wider half), not LaTeX length.
- **Formula scrollbars.** MathLive's sub/superscript, fraction and root boxes each stick ~2px out
  of their formula, which read as overflow and put a scrollbar under formulas that fit.
  `BaseLayout.astro` (`markFitting`) marks anything within `SLACK` px as `.is-fitting`
  (`overflow: visible`); only a genuinely too-wide formula keeps its scrollbar. `.is-fitting` is
  also what lets an inline formula sit on the text baseline — a box with `overflow: auto` has its
  bottom edge as baseline, so a scrolling one has to be centred instead (`vertical-align: middle`).
- **Line breaks.** `remark-line-breaks.ts` turns a newline inside a paragraph into `<br>`, but
  only for `01-cj`, `02-mat`, `04-it` — their newlines are always intended (Word notes, exercise
  parts `a)` / `b)` that must sit under each other). The other subjects come from PDFs whose
  lines were wrapped at the page width, so there a newline is only a wrap. Don't widen the
  subject list without checking (`08-spolecenske-vedy` has ~1000 such wraps).
- **Content markers.** `||text||` spoiler (may contain formulas and `<br>`), `((text))` "not
  preserved in the source" note, `((obrázek vynechán))` for a lost image — never rebuild a lost
  figure as ASCII art, never invent missing content.
- **Timeline.** A ```` ```timeline ```` fence holds JSON — `{ "title"?, "items": [{ "name", "href"?, "dates"?,
  "works"? }] }` — and becomes a vertical axis of numbered nodes (`timeline-html.ts`, `.timeline` in
  global.css): the period's name (a link) and its `dates` (a string, or an array with one line per
  entry) to the right of the axis, the `works` (string or array, joined by commas) to its left; in a
  narrow column (a container query) all text moves to the right. Used for the period overview in
  `01-cj/02-literatura/literarni-skupiny-a-obdobi-prehled-pojmu.md`. Dates there are only ones the
  period pages themselves state — don't add a range that the text doesn't support. A `works` entry may
  be a string or `{ "name", "href"?, "rozbor"?: { "href", "title"? } }`; `remark-timeline.ts` links the
  strings by itself: a name that is a heading of the period's own page (`timeline-sources.ts` reads the
  page and takes the heading ids from `search-outline.ts`, so an anchor cannot dangle) becomes a link to
  it, and the author of exactly one book analysis in `01-cj/04-rozbor-knih-a-cetba` gets the small
  rozbor icon (`timeline-links.ts` is the pure matcher: accents and case ignored, the part before a
  `(` counts). The timeline HTML is raw, so `rehype-rozbor-link` never sees it — the icon is written
  as markup in `timeline-html.ts`. The pages it reads are not tracked as dependencies: after
  renaming a heading in a period page do the clean rebuild.
- **3D solids.** A ```` ```solid ```` fence — `{ "type": "kvadr" | "krychle" | "hranol" | "jehlan" |
  "komoly_jehlan" | "valec" | "kuzel" | "komoly_kuzel" | "koule", "params": {…}, "letters"?, "marks"?,
  "labels"?, "segments"?, "projection"?, "azimuth"?, "elevation"?, "shade"?, "width"?, "height"?,
  "title"?, "spoiler"?, "float"? }` (full schema and the parameter names in the comment on top of
  `solid-svg.ts`). `solid-geometry.ts` is the pure part: a polyhedron is drawn in the **cavalier**
  projection (front face true, depth at `theta` 45° foreshortened by `k` 0.5 — the textbook picture), a
  round solid in an **orthographic** view from above (`elevation` 24°, so the base circles are
  ellipses). Visibility is decided from the face normals — an edge is drawn solid iff a face it borders
  faces the viewer, otherwise dashed — not by guessing which edges are "at the back"; curves on a round
  surface are cut into visible / hidden runs by bisection, and the silhouette of a (truncated) cone is
  the pair of tangents from its apex. `letters` names the vertices in the order the solid builds them,
  `marks` writes a dimension beside what it measures (`["a","b","c"]`, or `{ "name": "v", "text":
  "v = 4" }`; a mark the type has no meaning for is an error, as is a missing parameter). The spec is
  kept in the figure's `data-solid`; `solid-viewer.ts` (loaded by `BaseLayout.astro`) runs the same
  `solidSvg()` in the browser so a figure can be dragged round (arrow keys too; double click or Escape
  restores the textbook view; a figure inside an unrevealed spoiler stays put). The first turn of a
  polyhedron leaves the cavalier projection for an orthographic one — a "true front face" is only right
  for the textbook picture.
- **Formula sheet.** A ```` ```formulas ```` fence — `{ "sections": [{ "title"?, "items": [{ "label"?,
  "tex"?, "note"? }] }] }` (or just `"items"`) — becomes a grid of cards, one per formula: the label small
  above it, the formula in display style (`.math-display` inside `.formula-card`, so it scrolls only
  when it truly does not fit), a note under it; `label` and `note` may hold `$inline math$`. A formula
  wider than `WIDE_UNITS` (`formula-sheet-html.ts`, measured in the browser, not guessed) takes a
  whole row; `fitCards` in `BaseLayout.astro` shrinks one that is a little too wide for its card down
  to ~0.78× before it is left to scroll. The rail's formula digest skips `.formula-sheet`. LaTeX in
  the JSON needs doubled backslashes (`"\\frac{a}{b}"`). The renderer typesets through
  `math-markup.ts`, the one place that calls MathLive (the `\dots` fix included), shared with
  `rehype-math.ts`.
- Regexes over Czech text: JS `\b` only knows ASCII letters (`/Řešení\b/` never matches before
  `:`); use `(?!\p{L})` with the `u` flag.

## Writing formulas in content

- One formula per `$$…$$` block. Never join independent formulas with `\qquad` / `\quad` (sin and
  cos, the two Euclid theorems, `V = …` and `S = …` each get their own block) and never use `\qquad`
  to fake indentation after an inline label — put the label in its own bold paragraph and the
  formula in a display under it.
- A sentence does not belong inside a display (`\text{— poloměr kružnice…}`): write it as prose. A
  short condition or note tail (`\qquad (b\neq0)`, `\quad\text{kde } s=…`) is fine.
- The **Klíčové vzorce** rail is cloned from the display formulas of the article. Each formula is
  captioned (and gets a tooltip) with the bold lead-in right before it ("**Euklidova věta o
  výšce:**"), else the tidied section heading ("2) Goniometrické funkce — sin, cos" → "Goniometrické
  funkce"). A lead-in counts only when the bold phrase *opens* its paragraph, starts with a capital,
  holds no formula, and either is the whole paragraph or the paragraph ends with a colon — a bold word
  inside a sentence ("jsou **kolmé** právě tehdy …") is emphasis, not a title. Numbering ("2b)") is
  stripped, and of "popis — Název" a capitalised tail wins ("… — Heronův vzorec" → "Heronův vzorec"),
  a lower-case one is dropped. Generic lead-ins ("Znění:", "Vzorec:") are skipped in favour of the
  heading. A note tail ("kde s = (a+b+c)/2 …") is shown under the formula with its fractions typeset
  (words as plain text, the maths between them in a MathLive wrapper) — never flattened with
  `textContent`. Formulas hidden in a spoiler never appear. A formula a little wider than the rail is
  shrunk to fit.
- A figure caption (`"title"` of a graph / geometry / solid block) may use the same subscript
  shorthand as the labels inside the drawing: `v_c`, `log_{1/4} x`.

## Whiteboard (`src/lib/whiteboard.ts`)

Strokes, notes and the ruled paper share one coordinate system, a fixed **paper** of
`FRAME_W × FRAME_H` (640 × 360) units. The paper is fitted into the canvas element with a single
factor for both axes (`fit = min(w / FRAME_W, h / FRAME_H)`, published as `--wb-s` on the board),
anchored top-left. So fullscreen, page zoom or a resized window scale the *same picture* — they
must never restretch it, which is what storing 0..1 fractions of the element did. Pen widths are in
paper units too; notes position themselves with `--wx/--wy` × `--wb-s` (global.css) and never drop
below 0.8× so a phone keeps readable type. Zoom/pan are kept in paper units as well. The small board
is 16:9 by CSS (`aspect-ratio`), the canvas is out of flow; saved data is versioned (`v: 2`) and the
old fractional format is migrated on load.

A click without a drag is a dot (a round hole with the eraser) — a stroke of one point is drawn as a
filled circle — and the brush ring is exactly as wide as the line it draws or the hole it erases (it
was twice that). A floating task note is resized by dragging the grip in its bottom-right corner
(the whole note scales with the distance of the pointer from its top-left corner, 0.35–3×, double
click resets): the factor is `--note-k`, multiplied into `--note-s`, which also drives the note's size
limits; the grip and the close button grow back as the note shrinks so they stay hittable. In
fullscreen the toolbar is a vertical pill; its dividers are real `.whiteboard-sep` elements (a
`border-top` on the buttons was drawn *as* their top border and ran into their corners).

Every change to the drawing is an entry of a history (`Op`: a stroke added, a stroke erased, the whole
board cleared) with a `future` list behind it, so **undo / redo** (buttons, and Ctrl+Z / Ctrl+Y /
Ctrl+Shift+Z while the canvas has focus — it takes focus on pointer down) also take back a "clear";
`loadJSON` starts a fresh history. The view moves by Ctrl+wheel (zoom to the cursor), middle-button
drag (pan) and, on touch, a two-finger pinch (`beginPinch` / `movePinch`: zoom is clamped to 0.5–8× and
the paper point under the midpoint stays under it; the one-finger stroke that began the gesture is
discarded, not left as a dot). The recentre button is enabled only while the view is off the default —
`onViewChange` (third constructor argument) tells the toolbar, `syncButtons` in `MathScratchpad.astro`
keeps the three buttons' `disabled` state in step.

## Whiteboard tasks (`src/lib/exercises.ts`, `MathScratchpad.astro`)

The math whiteboard offers a "⇥ tabule" button next to each task and a "Zadání" dropdown.
`findExercises()` recognises the styles the content is actually written in: an `<ol>` item, a
numbered/lettered paragraph (`**3.**`, `**a)**`, didactic-test `**13p)**`), a labelled one
(`**Příklad 2:**`, `**Př. 1:**`), a task heading (`## Úkol 10`, `### Ukázkový příklad`) and
bullets under a "Úkoly / Procvičování" heading. The statement ends at `Řešení:` / `Výsledek:` …
(`SOLUTION_RE`), a heading, table or graph; parts (`a) …`, options `A) …`) belong to it. A note
gets a **copy of the DOM** (typeset formulas survive; spoilers, buttons and ids are stripped).
`findExercises()` deliberately uses only sibling/text access so it can be run from Node against
`dist/` with a parse5-backed shim to check coverage after content changes.

## Math reference (`02-mat/01-reference/`)

The category is labelled "Reference" (as in IT). Besides the ŠVP overview (order 0) it holds
`prehled-vzorcu.md` (order −1), a formula sheet: per category an `##`, per topic an `###` that links to
the topic's page, and under it one ```` ```formulas ```` block (nested groups such as square /
rectangle become titled sections; two tables — intervals, values of the trigonometric functions —
are copied as they stand). It was assembled from the theory of the topic pages only — no worked
examples, no DT solutions — and every formula was checked to occur verbatim in the page it is
attributed to (ignoring whitespace and `\frac` vs `\dfrac`). A note tail such as
`\qquad\text{kde } …` is moved out of the formula into the card's `note`. Nothing regenerates the
page: when a topic's formulas change, edit the sheet by hand and repeat the check. Its formulas are
inside `.formula-sheet`, so the "Klíčové vzorce" rail stays empty (and is removed) on that page.
`node scripts/check-formulas.mjs` is that check, automated: every `tex` of a card, every `$…$` of a
label / note / table must still occur (whitespace aside; `\dfrac` = `\frac`) in the topic page the
`###` heading links to. The page also carries a filter box (`formula-filter.ts`, loaded by
`BaseLayout.astro`): it hides cards whose text or context (the section and topic headings) does not
match — accents ignored, every word must be found — via `.is-filtered`, hides a section or topic
whose cards are all hidden, and shows "N z M"; Enter jumps to the first hit, Escape clears. In print
(`@media print` in global.css) the palette variables are overridden to ink on white, the scratchpad,
buttons and the filter are hidden and the sheet is three columns; headings do not end a page.

## Search (`SearchDialog.astro`, `src/pages/search.json.ts`)

`search.json` is built from the Markdown source, not from rendered pages (that would render every
page twice). `search-outline.ts` (pure, runnable from Node) gives each page its headings — text and
the id the heading gets in the page, computed with `github-slugger` from the *rendered* text
(emphasis, links and tags do not count, a repeated heading gets `-1`; a heading with a formula gets no
id) —, the first real paragraph as an excerpt and the terms set in bold. `search.json.ts` keeps a
term only if at most `MAX_PAGES_PER_TERM` (6) pages use it, at most `MAX_TERMS_PER_PAGE` (30) per
page: otherwise "vzorec" would index every page. Fields of an item: `title`, `url`, `subject`,
`group`, `h` (headings), `x` (excerpt), `k` (key terms). The index is fetched the first time the dialog
opens. `search-match.ts` is the matcher (pure): accents and case folded, a Czech stem fallback for
declined forms, scores by field (title > heading > term > excerpt); a heading hit links to
`url#id`, a term hit shows "Pojem: …", a snippet shows the sentence around the match. After changing
the outline rules check that every heading id of the index exists in the built HTML.

## Checks and CI

`.github/workflows/ci.yml` runs on every push to `main` and every pull request what "Verifying a
change" below lists: `astro check`, a build, `scripts/check-links.mjs` (every internal link of the
built site, `#fragment`s included) and `scripts/check-formulas.mjs`. It does not scan the built HTML for
`ML__error` / leaked tokens / a literal `$` — do that by hand after touching the math pipeline.

## Content conversion checklist

Sources were converted from Word/PDF/PPTX; these artefacts were found and fixed and are worth
grepping for after every new import:

- letter-spaced words (`p ř e d m ě t`, isolated `ř`/`ě` tokens); U+FFFD where `ft`/`ti`/`tt`
  ligatures were lost; decomposed (NFD) diacritics — normalise to NFC;
- emphasis with whitespace inside the markers (`__Sloty __`, `*Waverly *`) or glued to a word
  (`shade__r`) — markdown renders the underscores literally; check with a real parse, not a regex;
- `<Ctrl><n>`, `<p>`, `<b>` in prose are parsed as HTML and vanish (or bold the rest of the page)
  — write them as `\<Ctrl\>` or in backticks, HTML samples in a fenced block;
- U+202F narrow no-break spaces used as ordinary spaces (whole sentences become unbreakable);
- page numbers / repeated page headers as stray paragraphs, `<!-- Start of picture text -->`
  OCR dumps, Word `HYPERLINK … \o "…"` and `file:///` links, empty footnote definitions;
- words glued together by a PDF table export (`Předchozípříkaz`).

Found in the English pages (`03-aj`, Bridge magazine PDFs) and other PDF subjects; each has a check:

- **mojibake**: Windows-1250 read as Latin-1 — `ø è ì ù ò` for `ř č ě ů ň` (`pøedpis`, `èlen`), U+FFFD for
  `ž` **or `ť`** (`køes▓anství` is křesťanství, `závra▓` závrať): list every token containing one of the
  characters and read it, never map U+FFFD blind. Names such as Molière, Søren, Sèvres, Niccolò are
  correct as they are.
- **struck-through and highlighted text**: `~~x~~` and `<mark>` are PDF styling (underline, highlight)
  the converter mistook for strike-through; text under `~~` is shown crossed out. Remove the markers.
- **small-caps type**: a magazine heading came out as `tHings you migHt`, `SYDnEY`, `growtH of
  tHE coloniES` or letter-spaced (`G e o G R A p h y`). A capital inside a word is always an artefact
  (except BrE, AmE, McX, GCSEs, pH — and phonetic transcriptions in `[…]`, which are SAMPA and must
  not be touched); headings are put in Title Case, bold paragraphs only lose the stray capitals.
- **running headers and footers** of the magazine: `Bridge 06/2006–2007`, `~~BRIDGE | March | 2011~~`,
  `10 MATURITA / AUSTRALIA`, a bare page number beside one of these, `www.bridge-online.cz`. A bare
  number is a page number only next to such a line — in `07-fyzika` and `11-ekonomika` a number on its
  own line is a table cell.
- **vocabulary run into one paragraph** (`**term** [ipa] − translation **term** …`): one list item per
  entry. Leave a line alone when numbers are woven between the entries (a column layout).
- **picture-text dumps**: a block of ≤ 30 characters is a fragment of a headline that was an image —
  delete it; a caption becomes `((obrázek vynechán — caption))`; the labels of a map become
  `((obrázek vynechán))`; real prose that exists nowhere else on the page is kept with a note that the
  columns were mixed up. Never throw the only copy of a sentence away.
- soft hyphens (U+00AD) inside words (`ob<U+00AD>sah` does not match a search for "obsah"), an orphaned `#` /
  `###` on a line of its own above its heading text, a heading with a caption or byline stuck to it.

## Verifying a change

```
rm -rf dist node_modules/.astro node_modules/.vite .astro
npx astro check
npm run build                 # then: no ML__error / leaked tokens / literal "$" in the built HTML
node scripts/check-links.mjs  # every internal link — and every #fragment — of the built site
node scripts/check-formulas.mjs
```

A `\ue000` alone inside a MathLive box (a stretchy delimiter) is not a leaked token; a leak looks like
`\ue000` + digits + `\ue001`. Delete the `dist/__*` files of a screenshot harness before running
`check-links.mjs`, it counts them as pages.

For anything visual use the headless Zen flatpak (no other browser is installed).

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
