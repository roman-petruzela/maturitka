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

## Markdown pipeline (`src/lib/markdown/`)

Plugins run in this order (`astro.config.mjs`): `remarkLineBreaks` → `remarkProtectMath` →
`remarkGraph` / `remarkGeometry` / `remarkSolid` (JSON fences → build-time SVG) →
`rehypeMath` → `rehypeSpoiler` → `rehypeReconNote` → `rehypeAuthorPortrait` → `rehypeRozborLink`.

- **Formulas.** `$…$` / `$$…$$` are typeset at build time with MathLive's SSR renderer. Markdown
  would corrupt LaTeX before it ever reached `rehype-math` (`\{ \} \\ \, \; \!` lose their
  backslash, `_`/`*` become emphasis and split the text node, smartypants curls `'`), so
  `remark-protect-math.ts` lifts every formula out into an opaque private-use token *before*
  parsing and puts it back verbatim afterwards; `math-segments.ts` decides what is a formula
  (same rule on both sides). MathLive has **no `\dots`** — `rehype-math` maps it to `\ldots` /
  `\cdots` by context. After touching any of this, a build must show **zero** `ML__error`
  (grep the built HTML) and no leaked `\ue000…\ue001` tokens.
- **Line breaks.** `remark-line-breaks.ts` turns a newline inside a paragraph into `<br>`, but
  only for `01-cj`, `02-mat`, `04-it` — their newlines are always intended (Word notes, exercise
  parts `a)` / `b)` that must sit under each other). The other subjects come from PDFs whose
  lines were wrapped at the page width, so there a newline is only a wrap. Don't widen the
  subject list without checking (`08-spolecenske-vedy` has ~1000 such wraps).
- **Content markers.** `||text||` spoiler (may contain formulas and `<br>`), `((text))` "not
  preserved in the source" note, `((obrázek vynechán))` for a lost image — never rebuild a lost
  figure as ASCII art, never invent missing content.
- Regexes over Czech text: JS `\b` only knows ASCII letters (`/Řešení\b/` never matches before
  `:`); use `(?!\p{L})` with the `u` flag.

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

## Verifying a change

```
rm -rf dist node_modules/.astro node_modules/.vite .astro
npx astro check
npm run build                 # then: no ML__error / leaked tokens / literal "$" in the built HTML
node scripts/check-links.mjs
```

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
