# MATURITKA — notes for whoever edits this repo

An Astro static study site (13 subjects, ~900 topic pages). This file keeps the rules that must not be
missed and the commands; the details are split by topic into `docs/`.

## Start of every session

1. **`ROADMAP.md`** — what is in progress (*Now*), what the last sessions did, what is next, what was decided.
   The SessionStart hook prints *Now* and *Last sessions* together with the version, the branch, the last
   commits and `git status --short`. Uncommitted changes you did not make are the owner's: do not touch them.
2. **The docs for the area** you will work in (*Where things are* below).
3. **[`docs/writing-style.md`](docs/writing-style.md) before you write or rewrite any content.**
4. **Ask before a large change** — deleting or merging pages, a new subject or category, renaming folders,
   more than ~10 content files at once, a dependency major, anything listed under *Decisions* in `ROADMAP.md`.

## Rules of highest importance

1. **Version.** A push that contains a user-visible change ends with a patch bump (0.0.1) as its own last commit:
   `npm version patch --no-git-tag-version` (updates `package-lock.json` too), committed as
   `chore: bump to vX.Y.Z`; minor/major only on request — see *Versioning*.
2. **Cache gotcha.** After touching `src/lib/**` (the markdown plugins, `subjects.ts`, `groups.ts`,
   `content-fs.ts`) do a clean rebuild — see *Development* below.
3. **No names.** Not a teacher's, not a student's, anywhere in the repo — see *No names of teachers or
   students* below.
4. **`npm run verify`** is the gate, run by hand before every deploy — see *Verifying a change* below.
5. **No CI.** `.github/workflows` was dropped on purpose; do not add it.
6. **Never invent content.** A lost passage stays marked `((…))`, a lost picture stays marked or omitted —
   never rebuilt as ASCII art (`docs/markdown-pipeline.md`, `docs/conversion.md`).
7. **End of a change.** Run the checks for what changed, commit only its own files as one
   `type(scope): description` commit, record the session in `ROADMAP.md`, never push or deploy without being
   asked — see [`docs/workflow.md`](docs/workflow.md).

## Where things are

- [`ROADMAP.md`](ROADMAP.md) — Now, Last sessions, Next, Decisions, Done. The review of 0.7.7 is archived in [`docs/archive/review-2026-11-03.md`](docs/archive/review-2026-11-03.md).
- [`docs/workflow.md`](docs/workflow.md) — How a session starts and ends: which checks for which change, commit messages, the version bump, updating the roadmap.
- [`docs/writing-style.md`](docs/writing-style.md) — How study pages are written: converted vs. hand-written, tone, typography, page skeleton per type, model pages, a checklist.
- [`docs/content.md`](docs/content.md) — How the content folders are ordered and labelled, and what the hand-written subjects (English, IT, Czech literature) look like.
- [`docs/conversion.md`](docs/conversion.md) — Importing Word/PDF/PPTX sources and the artefacts worth grepping for after every import.
- [`docs/markdown-pipeline.md`](docs/markdown-pipeline.md) — The remark/rehype plugins, content markers and the fences that become figures.
- [`docs/formulas.md`](docs/formulas.md) — Writing formulas in content, the "Klíčové vzorce" rail and the math reference sheet.
- [`docs/whiteboard.md`](docs/whiteboard.md) — The drawing board under the math pages: coordinates, touch, pen and pictures.
- [`docs/search.md`](docs/search.md) — The search index and how it is matched.
- [`docs/frontend.md`](docs/frontend.md) — Styles, client scripts, motion, portraits, the picture viewer, the phone layout, the service worker.

### Skills (`.claude/skills/`)

- `/tema` — write or rewrite one topic page (writing style, neighbours, free `order`, checks, uncertain facts).
- `/import` — convert an archive file into a page by [`docs/conversion.md`](docs/conversion.md), inventing nothing.
- `/hotovo` — finish a change: checks, `ROADMAP.md`, commit; the bump only before a push.
- `/audit-predmetu` — report the content debt of one subject (`((…))`, "doplněno", stubs, placeholders,
  `source`); it changes nothing.

`.claude/settings.json` holds the SessionStart hook and the allowed commands. It also blocks reading
`scripts/archive-aliases.local.json` (the real names); the scripts read it themselves.

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

**Bump it once per push, as the last commit before it, when the push contains a user-visible change.**
Nothing enforces this automatically — no hook, no CI check — so it is on whoever prepares the push:

- user-visible changes are a **patch** bump (`0.2.0` → `0.2.1`) — content, copy, new pages, layout
  and design changes, even a new subject alike
- minor or major only when the owner asks for it explicitly
- a change nobody sees on the site (docs, scripts, dependencies) does not bump the version

```
npm version patch --no-git-tag-version   # package.json + both top-level "version" fields of package-lock.json
git add package.json package-lock.json
git commit -m "chore: bump to vX.Y.Z"    # nothing else in this commit
```

`--no-git-tag-version` keeps npm from committing and tagging by itself. Do not edit the version by hand: if
`package-lock.json`'s two top-level `"version"` fields fall out of step, the next `npm install` rewrites them as a
stray diff.

## Checks

There is no CI (the GitHub Actions workflow was dropped on purpose) — run what "Verifying a change"
below lists by hand: `astro check`, a build, `scripts/check-links.mjs` (every internal link of the
built site, `#fragment`s included), `scripts/check-formulas.mjs` and `scripts/check-frontmatter.mjs`
(`title` present, `order` numeric and — above 0 — unique within its category, unique URL slugs, only keys
the schema knows; `source` is not required, hand-written pages have none; a new frontmatter key
must be added both to `content.config.ts` and to `KNOWN_KEYS` there) and `scripts/check-content.mjs` (a heading
must not skip a level — `##` → `####` — and every `![]()` / `<img>` needs alt text and every `/images/…` file must exist, and no line may be only a number with a dot — a split-off question
or list number; code is skipped). None of them scans the built HTML
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
