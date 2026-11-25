# MATURITKA – roadmap

A living document: what is in progress, what the last sessions did, what is next and what has been decided.
Update it at the end of every session ([`docs/workflow.md`](docs/workflow.md)). The full review of
2026-11-03 (version 0.7.7) is kept unchanged in [`docs/archive/review-2026-11-03.md`](docs/archive/review-2026-11-03.md).

## Now

- Nothing in progress.

## Last sessions

Newest first. Keep about 10 entries and delete older ones, because git keeps the history.

### 2026-11-25 – IT hardware pages, release 0.7.17
- `03-uvod-do-vypocetni-techniky` condensed: autorský zákon, periferie, napájecí zdroj a UPS (new UPS diagram),
  skříně, zvuková karta, klávesnice a myš. The category is now labelled "Úvod do výpočetní techniky".
- `06-grafika-na-pc/00-tematicky-plan.md` removed (a bare topic plan), and its links were dropped from the rozcestník.
- `npm run verify` passed: 8/8 tests, lint, astro check, 164 275 links, 273 formulas, no `ML__error`.

### 2026-11-25 – workflow for agents (docs and tooling only, no version bump)
- New `docs/writing-style.md` and `docs/workflow.md`; this file restructured, old review moved to `docs/archive/`.
- `AGENTS.md`: session start, end of a change, bump via `npm version patch --no-git-tag-version`; `CLAUDE.md` is
  `@AGENTS.md` (was a symlink).
- `.claude/`: SessionStart hook, permissions, skills `tema`, `import`, `hotovo`, `audit-predmetu`.
- `README.md`: `npm run verify`, the check scripts and the `book` key described as they are. Imports now use a
  one-item manifest, because the converters overwrite every item of the manifest they are given.
- Open: the decision on the pages formerly tagged `doplněno` and the IT exclusions in `docs/content.md` (see Next).

### 2026-11-22 – IT condensed, civics test sheets (0.7.15, 0.7.16)
- Network, hardware, OS and cyber-security pages condensed to exam theory, with review questions and diagrams.
- Okruhy DH, password attacks, malware analysis and DNS tunneling added as sections of the existing pages.
- `13-obcanska-nauka/01-vytah`: summary and review sheet for test sections F–M.

### 2026-11-20 – 2026-11-21 – IT condensing, first pass (0.7.14)
- Network (okruhy 1–6), graphics, hardware, OS and cyber-security pages condensed, with diagrams added.
- The first attempt at the network basics page was reverted (5c5b752) and redone.

### 2026-11-17 – Knihovna (0.7.11)
- Abridged public-domain editions: Čapek (Matka, Bílá nemoc, Povídky z jedné kapsy), Dyk, Hašek, Vrchlický,
  Mrštíkové, Olbracht, Havlíček, Mácha, Neruda, Kopta, Jirásek (F. L. Věk 1), Arbes.

### 2026-11-15 – book reader (0.7.10)
- `book: true` reader (`book-reader.ts`), category `07-knihovna` with Oliver Twist.
- In-page jumps centre their target. The TOC marks the last heading at the bottom of the page. The accent rule
  under a heading spans the whole title.

### 2026-11-10 – content hygiene and subject page (0.7.9)
- Dropped first paragraphs that repeated the title, fixed five titles, dropped split-off question numbers.
- `check-content.mjs` flags lines that are only a number with a dot.
- Accent colours on the subject and topic pages. The Hotovo toggle and progress bar were removed again.
  The footer stays at the bottom of short pages. Version bumps are patch-only.

### 2026-11-03 – review fixes (0.7.8)
- Review at 0.7.7 (archived). Done the same day: analytics disclosed on `/o-strance/`, OG image and twitter
  card, service worker, `vercel.json` headers.
- `check-frontmatter.mjs` and `check-content.mjs` added (duplicate orders and heading levels fixed). Portraits
  converted from JPG to WebP, picture sizes read from WebP headers.
- The `doplněno` tag was removed from 57 pages (69465b9). `AGENTS.md` was split into `docs/`. Dependencies refreshed.

## Next

Open items, most important first.

1. **Pages formerly tagged `doplněno` (57, fully AI-written):** decide whether to keep, check or delete them (see
   Decisions). The list is in `git show 69465b9`. 45 have no `source`: most of IT 07–14 (programming, databases,
   web, publishing, 3D, robotics) and some pages of IT 02/04/05/06, ČJ periods 05 and 13–17, and the AJ exam
   section 04. 12 have a `source` (11 math pages and the ČJ author catalogue), so they are conversions with
   additions.
2. **"doplněn…" in page text:** 74 pages, mostly `> Pozn. k obsahu:` notes in `02-mat` ("doplněno a nezávisle
   přepočítáno"). The rule says no such markers, so reword the notes or remove the additions.
3. **`docs/content.md` is out of date on IT:** it still forbids pages on malware analysis, DH, password attacks
   and DNS tunneling, which 351fb0f added on 2026-11-22. Confirm with the owner and update the paragraph.
4. **`((…))` notes:** 55 in 35 files, most of them in `12-nemcina` (one per topic), `02-mat/04-planimetrie`
   and `01-cj/09-archiv`. Decide per page: fill in from another source, or accept.
5. **Typography debt:** straight `"…"` quotes in Czech prose on ~220 pages outside the frontmatter: `01-cj` 108,
   `02-mat` 70 (about 30 of them a mixed `„…"`), `04-it` 38 (partly code, where they stay). Fix the pages as they
   are touched, or in one `fix(content)` sweep, never inside code or LaTeX.
6. **Raw conversions:** `05-dejepis`, `06-zemepis` and part of `07-fyzika` still have `__x __`, `->`, `\-`, and
   spaces before commas. Clean up the form only ([`docs/conversion.md`](docs/conversion.md)).
7. **`source` on hand-written English pages:** 12 pages of `03-aj/02-realie` carry a `source` although `aj` is
   hand-written. Remove it, or explain why it is there.
8. **Largest image:** `public/images/content/it/…/zakladni-deska-mainboard/01.webp` is over 500 kB. Recompress it
   under a new file name (the immutable cache).
9. **`scripts/build-manifests.mjs` (38 kB):** split it by subject if it has to change again.
10. **Study features (P3):** a "random question" drawn from the spoilers; a print/PDF check of a few pages.

## Decisions

- **No CI.** `.github/workflows` was dropped on purpose; `npm run verify` is run by hand before every deploy.
- **`source` is optional.** It is required on converted pages and absent on hand-written ones. Not enforced by
  `check-frontmatter.mjs`.
- **The `doplněno` tag is gone** (2026-11-03, 69465b9). The key `tags` is no longer in the schema, so
  `check-frontmatter.mjs` rejects it. No "doplněno" markers in the text either.
- **What happens to the formerly tagged pages:** *waiting for a decision* (Next 1).
- **Version:** patch only, one bump per push, as its own last commit `chore: bump to vX.Y.Z` via
  `npm version patch --no-git-tag-version`.
- **Commits:** `type(scope): description`, one commit per logical change, no names, no trailers.
- **Hotovo / progress per subject:** tried and removed again (71c234a). Do not bring it back without asking.

## Done

From the review of 2026-11-03 (numbers as in the archived review):

- 1 Analytics disclosed on `/o-strance/` (cookieless Vercel Analytics).
- 2 Social preview: `public/og.png` 1200×630, `og:image`, `twitter:card`.
- 3 `vercel.json`: `immutable` for `/_astro/*` and `/images/*`, `nosniff`, `Referrer-Policy`, `X-Frame-Options`.
- 4 (part) The IT stub `03-tematicky-plan-prehled-latky.md` is merged and the database TODO removed. No page is
  under 600 B.
- 5/6 `check-frontmatter.mjs` (title, numeric and unique order, unique slugs, known keys) and `check-content.mjs`
  (heading levels, alt text, missing images, lone numbers) are part of `npm run verify`.
- 7 No JPG left in `public/images`. Every local WebP gets `width`/`height` from its header (`rehype-image-size.ts`).
- 8 Offline: `/sw.js` generated per version (`src/pages/sw.js.ts`).
- 10 `AGENTS.md` is an index (7.6 kB). Details are in `docs/`.
- 11 Biome is pinned to an exact version; upgrades are made deliberately.
- 12 `search.json` is fetched on the first open of the dialog (`ensureIndexLoaded()`).
