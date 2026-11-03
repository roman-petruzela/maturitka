# Markdown pipeline

The remark/rehype plugins, content markers and the fences that become figures. Rules of highest importance are in [`AGENTS.md`](../AGENTS.md).

## Markdown pipeline (`src/lib/markdown/`)

Plugins run in this order (`astro.config.mjs`): `remarkLineBreaks` → `remarkProtectMath` →
`remarkGraph` / `remarkGeometry` / `remarkSolid` (JSON fences → build-time SVG) / `remarkTimeline` /
`remarkFormulas` (JSON fences → build-time HTML) → `rehypeMath` → `rehypeSpoiler` → `rehypeReconNote` →
`rehypeAuthorPortrait` → `rehypeRozborLink` → `rehypeImageSize`.

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
  `markFitting` in `rail-formulas.ts` (run by `article-page.ts`) marks anything within `SLACK` px as `.is-fitting`
  (`overflow: visible`); only a genuinely too-wide formula keeps its scrollbar. `.is-fitting` is
  also what lets an inline formula sit on the text baseline — a box with `overflow: auto` has its
  bottom edge as baseline, so a scrolling one has to be centred instead (`vertical-align: middle`).
- **Line breaks.** `remark-line-breaks.ts` turns a newline inside a paragraph into `<br>`, but
  only for `01-cj`, `02-mat`, `04-it` — their newlines are always intended (Word notes, exercise
  parts `a)` / `b)` that must sit under each other). The other subjects come from PDFs whose
  lines were wrapped at the page width, so there a newline is only a wrap. Don't widen the
  subject list without checking (`08-spolecenske-vedy` has ~1000 such wraps).
- **Picture size.** `rehype-image-size.ts` gives every local `/images/….webp` `<img>` (also the raw HTML ones
  from the Markdown, and the portraits) a `height` — and a `width` when it has none — read from the WebP header
  (`image-size.ts`, pure, tested). A picture that has the width it had in Word keeps it and gets the
  proportional height, so the browser reserves its space; the CSS has `height: auto`, so the attribute only
  sets the aspect ratio. Only WebP is read — keep pictures in WebP (the 42 portraits were JPG once).
- **Content markers.** `||text||` spoiler (may contain formulas and `<br>`), `((text))` "not
  preserved in the source" note, `((obrázek vynechán))` for a lost image — never rebuild a lost
  figure as ASCII art, never invent missing content.
- **Timeline.** A ```` ```timeline ```` fence holds JSON — `{ "title"?, "items": [{ "name", "href"?, "dates"?,
  "works"? }] }` — and becomes a vertical axis of numbered nodes (`timeline-html.ts`, `.timeline` in
  global.css): the period's name (a link) and its `dates` (a string, or an array with one line per
  entry) to the right of the axis, the `works` (string or array, joined by commas) to its left; in a
  narrow column (a container query) all text moves to the right. Used for the period overview in
  `01-cj/05-literatura/literarni-skupiny-a-obdobi-prehled-pojmu.md`. Dates there are only ones the
  period pages themselves state — don't add a range that the text doesn't support. A `works` entry may
  be a string or `{ "name", "href"?, "rozbor"?: { "href", "title"? } }`; `remark-timeline.ts` links the
  strings by itself: a name that is a heading of the period's own page (`timeline-sources.ts` reads the
  page and takes the heading ids from `search-outline.ts`, so an anchor cannot dangle) becomes a link to
  it, and the author of exactly one book analysis (`03-rozbory-knih`, else `09-archiv`) gets the small
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
  whole row; `fitCards` in `article-page.ts` shrinks one that is a little too wide for its card down
  to ~0.78× before it is left to scroll. The rail's formula digest skips `.formula-sheet`. LaTeX in
  the JSON needs doubled backslashes (`"\\frac{a}{b}"`). The renderer typesets through
  `math-markup.ts`, the one place that calls MathLive (the `\dots` fix included), shared with
  `rehype-math.ts`.
- Regexes over Czech text: JS `\b` only knows ASCII letters (`/Řešení\b/` never matches before
  `:`); use `(?!\p{L})` with the `u` flag.
