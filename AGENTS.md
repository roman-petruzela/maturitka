# MATURITKA — notes for whoever edits this repo

An Astro static study site (13 subjects, ~900 topic pages). This file keeps the rules that must not be
missed and the commands; the details are split by topic into `docs/`.

## Rules of highest importance

1. **Version.** Every user-visible change bumps `package.json`'s `version` (and the two top-level `version`
   fields of `package-lock.json`) — see *Versioning* below.
2. **Cache gotcha.** After touching `src/lib/**` (the markdown plugins, `subjects.ts`, `groups.ts`,
   `content-fs.ts`) do a clean rebuild — see *Development* below.
3. **No names.** Not a teacher's, not a student's, anywhere in the repo — see *No names of teachers or
   students* below.
4. **`npm run verify`** is the gate, run by hand before every deploy — see *Verifying a change* below.
5. **No CI.** `.github/workflows` was dropped on purpose; do not add it.
6. **Never invent content.** A lost passage stays marked `((…))`, a lost picture stays marked or omitted —
   never rebuilt as ASCII art (`docs/markdown-pipeline.md`, `docs/conversion.md`).

## Where things are

- [`docs/content.md`](docs/content.md) — How the content folders are ordered and labelled, and what the hand-written subjects (English, IT, Czech literature) look like.
- [`docs/conversion.md`](docs/conversion.md) — Importing Word/PDF/PPTX sources and the artefacts worth grepping for after every import.
- [`docs/markdown-pipeline.md`](docs/markdown-pipeline.md) — The remark/rehype plugins, content markers and the fences that become figures.
- [`docs/formulas.md`](docs/formulas.md) — Writing formulas in content, the "Klíčové vzorce" rail and the math reference sheet.
- [`docs/whiteboard.md`](docs/whiteboard.md) — The drawing board under the math pages: coordinates, touch, pen and pictures.
- [`docs/search.md`](docs/search.md) — The search index and how it is matched.
- [`docs/frontend.md`](docs/frontend.md) — Styles, client scripts, motion, portraits, the picture viewer, the phone layout, the service worker.

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

## Checks

There is no CI (the GitHub Actions workflow was dropped on purpose) — run what "Verifying a change"
below lists by hand: `astro check`, a build, `scripts/check-links.mjs` (every internal link of the
built site, `#fragment`s included), `scripts/check-formulas.mjs` and `scripts/check-frontmatter.mjs`
(`title` present, `order` numeric and — above 0 — unique within its category, unique URL slugs, only keys
the schema knows; `source` is not required, hand-written pages have none; a new frontmatter key
must be added both to `content.config.ts` and to `KNOWN_KEYS` there) and `scripts/check-content.mjs` (a heading
must not skip a level — `##` → `####` — and every `![]()` / `<img>` needs alt text and every `/images/…` file must exist; code is skipped). None of them scans the built HTML
for `ML__error` / leaked tokens / a literal `$` — do that by hand after touching the math pipeline.

## No names of teachers or students

Nothing in this repo may name a teacher or a student — not page text, not a `source:` (it is shown
under every page as "Zdroj: …"), not a manifest, script or doc. Several folders and files of the
source archive are named after people, so the repo only knows them by alias: manifests store
`archiv-1/…` / `archiv-2/…` paths, `source:` shows the path without that root (`ANJ/Témata/…`), and
`scripts/archive.mjs` / `scripts/archive_paths.py` translate an alias to the real path through
`scripts/archive-aliases.local.json` — git-ignored, the only place the real names exist. A key there may
be a folder or a single file; the longest match wins. When importing new material whose path names a
person, add an alias for it there instead of writing the path anywhere. Public figures in the content
(writers, politicians, a magazine article's byline) are fine.

## Verifying a change

`npm run verify` runs all of the following in one go. Run it by hand before every deploy — there is no CI, so nothing else stops a broken build.

```
rm -rf dist node_modules/.astro node_modules/.vite .astro
npm test
npm run lint                  # Biome: lint + formatting (biome.json); `npx biome check --write .` fixes
npx astro check
npm run build                 # then: no ML__error / leaked tokens / literal "$" in the built HTML
node scripts/check-links.mjs  # every internal link — and every #fragment — of the built site
node scripts/check-formulas.mjs
node scripts/check-frontmatter.mjs
node scripts/check-content.mjs
```

A `\ue000` alone inside a MathLive box (a stretchy delimiter) is not a leaked token; a leak looks like
`\ue000` + digits + `\ue001`. Delete the `dist/__*` files of a screenshot harness before running
`check-links.mjs`, it counts them as pages.

For anything visual use the headless Zen flatpak (no other browser is installed).

## Dependencies

Look at `npm outdated` and `npm audit` now and then and upgrade deliberately, a major only for a reason (the
site is on TypeScript 6, Biome is pinned to an exact version). The build is only as stable as its
tooling: after upgrading Astro, MathLive or the markdown packages do the clean rebuild and run
`npm run verify` — MathLive's server-side output typesets every formula of every page. There is no CI, so
`npm run verify` runs **by hand before every deploy**.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
