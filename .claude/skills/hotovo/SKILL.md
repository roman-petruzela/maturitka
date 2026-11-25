---
name: hotovo
description: Finish a change in the MATURITKA repo (hotovo, dokončit změnu, commit, konec session, připravit push). Runs the checks, updates ROADMAP.md, proposes commits and, before a push, the version bump.
---

# /hotovo — finish a change

The full procedure is `docs/workflow.md`. Do these steps in order and stop at the first failure.

1. **What changed?** `git status --short` and `git diff --stat`. Keep apart the files of this change from the
   owner's uncommitted work, which you must not touch or stage.
2. **Checks** by the table in `docs/workflow.md`: content needs `check-frontmatter` + `check-content`, links and
   headings need a build + `check-links`, code needs `npm test`, `npm run lint` and `npx astro check`. If any
   fails, show the output and fix it or ask. Do not go on.
3. **ROADMAP.md:** update *Now*, add or extend today's entry in *Last sessions* (3–5 lines, including facts
   left out), keep about 10 entries, and move finished items from *Next* to *Done*.
4. **Commits**, one per logical change, `type(scope): description` (English, imperative; see
   `docs/workflow.md`). Never `git add -A`, no names, no trailers. **Print** the `git add <exact paths>` +
   `git commit -m "…"` pairs for the owner. Run them only if the owner explicitly says so now. The ROADMAP
   update is its own `docs(roadmap): …` commit.
5. **Only if the owner is preparing a push** and the unreleased commits change something visible on the site:
   run `npm run verify`, then `npm version patch --no-git-tag-version` and propose the last commit
   `chore: bump to vX.Y.Z` with only `package.json` and `package-lock.json`. Docs, scripts or dependencies alone
   get no bump.
6. **Never push or deploy** unless the owner asks. End with a short summary: what was done, what the checks
   said, and what is left open.
