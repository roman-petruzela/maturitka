# Search

The search index and how it is matched. Rules of highest importance are in [`AGENTS.md`](../AGENTS.md).

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

Size (2026-11-03, 896 pages): `dist/search.json` is 809 kB raw, about 235 kB gzipped (195 kB brotli — Vercel
compresses it). It is fetched only by `ensureIndexLoaded()`, which `openDialog()` calls — nothing in the page
HTML references it. It grows with the corpus; if it ever passes ~1 MB gzipped, lower `MAX_TERMS_PER_PAGE`
or drop the excerpts (`x`) of long pages.
