# MATURITKA – review and improvement spec

Review date: 2026-11-03, version 0.7.7. Scope: `web/` (build, content, tooling, deployment).

## Verified state (nothing to fix)

- `npm test` 7/7, `biome check` clean, `astro check` 0 errors, build 914 pages in ~10 s.
- `check-links`: 157 231 internal links incl. fragments, none broken. `check-formulas`: 273/273.
- No missing images, no empty `![]()` alt text, no `ML__error`, no leaked math tokens
  (the `/` glyphs on two math pages are MathLive's own tall-radical glyphs, not leaks).
- CI is absent by design (see AGENTS.md "Checks"); `npm run verify` is the gate.
- Git tree clean. Content: 13 subjects, ~900 topic pages, ~950k words.

## Findings, ranked

### P1 – should do

1. **Analytics undisclosed.** `@vercel/analytics` is loaded in `BaseLayout.astro`, but `/o-strance/`
   and `/licence/` say nothing about it. Add one sentence ("anonymní statistiky návštěvnosti, žádné cookies")
   or remove the component. Vercel Web Analytics is cookieless, so a banner is not needed.
2. **No social preview.** There is no `og:image` / `twitter:card` image, so shared links look bare.
   One static 1200×630 image in `public/` plus two meta tags in `BaseLayout.astro`.
3. **No security/caching headers.** No `vercel.json`. Add long `Cache-Control: immutable` for `/_astro/*`
   and `/images/*`, plus `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`.
   (CSP is optional: the site uses inline scripts/styles from Astro and MathLive.)

### P2 – worth doing

4. **Content debt markers.**
   - `((…))` "lost in source" notes: 56 occurrences. Decide per page: fill in, or accept.
   - `tags: ["doplněno"]` is still on 57 pages, and the README documents it as intentional. Your own rule is
     "no doplněno markers in study material" – either strip the tag (and the README paragraph) or confirm it stays
     as an internal-only marker that is not rendered.
   - `04-it/04-operacni-systemy/03-tematicky-plan-prehled-latky.md` is a 16-line stub (the only page < 600 B);
     `04-it/08-databazove-systemy/02-databaze-i-praktikum.md` still contains a TODO/placeholder string.
     Merge into a theory page or delete (see [No bare task lists] rule).
5. **Missing `source` in frontmatter**: 149 of 263 `cj`, 38 of 50 `aj`, 54 of 167 `it` pages. Fine for
   hand-written pages, but it makes "converted vs. written" unknowable. Decide whether `source` is required
   for converted pages and add a check script (`check-frontmatter.mjs`: title present, order numeric, tags known).
6. **Content has no tests.** Only 7 unit tests, all for pure lib modules. Cheap additions to `verify`:
   duplicate `order` within a category, duplicate slugs, headings skipping levels, images without alt.
7. **Heaviest assets.** `public/images` = 25 MB (793 webp, 42 jpg, 1 > 500 KB). Convert the 42 jpg to webp
   and confirm every `<img>` has `width`/`height` (prevents layout shift) – lazy loading is already used.
8. **Offline use.** For a study site a service worker (cache pages + `/_astro` + MathLive font) would let you
   revise on the train. Static site, so `astro-pwa`-style plugin or a 30-line hand-written SW is enough.

### P3 – nice to have

9. **Study features** (the site is a reader, not a trainer): per-topic "done" checkbox in `localStorage`
    with a progress bar per subject; "random question" from spoilers; print stylesheet check for PDF export.
10. **Maintenance scripts.** `build-manifests.mjs` is 38 KB and `AGENTS.md` is 40 KB – both are
    approaching "nobody can read this". Split `AGENTS.md` into topic files under `docs/` and keep it as an index.
11. **Dependencies.** Astro 7 / TS 6 / Biome 2.5 are all very new; pin and upgrade deliberately (CI was dropped on purpose,
    so run `npm run verify` by hand before every deploy).
12. **Search.** `search.json` is built for client-side search; check its size (it grows with the whole corpus)
    and lazy-load it on first open of the dialog if it is not already.

## Suggested order

1 → 2 → 3 (one evening), then 4 and 6 (content hygiene), then 7/8, then 9 if there is time before the exam.

## Not checked

Visual/responsive rendering, accessibility with a screen reader, Lighthouse scores, correctness of the
study content itself (facts, grammar), the live deployment (headers, TLS) – only the repo and local build.
