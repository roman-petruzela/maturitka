# Session workflow

How a working session on this repo starts, runs and ends: checks, `ROADMAP.md`, commits and the version bump.
Rules of highest importance are in [`AGENTS.md`](../AGENTS.md).

## Start

1. Read what the SessionStart hook printed (`.claude/hooks/session-start.sh`): the version, the branch, the last
   ten commits, `git status --short`, and the **Now** and **Last sessions** sections of `ROADMAP.md`. Without
   the hook, run `git status --short && git log --oneline -10` and open `ROADMAP.md`.
2. **Uncommitted changes you did not make belong to the owner.** Do not edit, revert, stage or commit them.
   If they touch the files you need, ask first.
3. Open the docs for the area you will work in (the index is in `AGENTS.md`). Read
   [`docs/writing-style.md`](writing-style.md) before you write or rewrite any content.
4. **Ask before a large change:** deleting or merging pages, a new subject or category, moving or renaming
   folders (URLs change), a change across more than ~10 content files, a dependency major, anything in the
   **Decisions** section of `ROADMAP.md`. If the task is in **Next**, move it to **Now** when you start.

## During the work

- **Small logical changes.** One change = one purpose (one topic rewritten, one bug fixed, one script added).
  It ends as one commit.
- After touching `src/lib/**`, do the clean rebuild from `AGENTS.md` before you trust any output.
- Visual changes: check them in the headless Zen flatpak (no other browser is installed).

## Checks

| What changed | Run |
| --- | --- |
| a few content pages | `node scripts/check-frontmatter.mjs && node scripts/check-content.mjs` |
| links, headings that others link to, page renames | the above + `npm run build && node scripts/check-links.mjs` |
| formulas on a math page | the above + `node scripts/check-formulas.mjs` |
| code in `src/` or `scripts/` | `npm test && npm run lint && npx astro check` |
| the math pipeline (`src/lib/markdown/`) | clean rebuild, then grep `dist/` for `ML__error`, leaked `…` tokens and a literal `$` |
| **before every push or deploy** | `npm run verify` (everything above, from a clean tree) |

A failing check is reported with its output. Do not skip a check, and do not say a change is done before its
checks have passed.

## End of a change

1. Run the checks for what changed (table above).
2. Commit **only the files of that change**: `git add <exact paths>`, never `git add -A` while the tree holds
   other work. Quote paths with `[` `]`, for example `"src/pages/[subject]/[...slug].astro"`.
3. Agents do not commit on their own. Print the `git add` / `git commit` pairs for the owner, or run them only
   when the owner explicitly says so for this change.

## End of a session

1. **ROADMAP.md:** update **Now** (empty it, or say what is left half-done), add a dated entry at the top of
   **Last sessions** (3–5 lines: what changed, what was checked, what is open; facts left out because they
   were uncertain), delete entries beyond the newest ~10 (git keeps the history), and move finished items
   from **Next** to **Done**. Commit it as `docs(roadmap): …`.
2. **Version bump**, only if the commits since the last bump change something a visitor can see
   (content, copy, pages, layout, design). Docs, scripts and dependencies alone do not bump.

   ```sh
   git log --oneline "$(git log -1 --format=%h -E --grep='^(chore: bump|Bump version)')"..HEAD   # what is unreleased
   npm version patch --no-git-tag-version   # package.json + both version fields of package-lock.json
   git add package.json package-lock.json
   git commit -m "chore: bump to vX.Y.Z"
   ```

   Always a **patch** (0.0.1), even for a new subject; minor or major only when the owner asks. The bump is
   its **own commit and the last one before a push**, with one bump per push and nothing else in it.
   `--no-git-tag-version` matters: without it npm commits and tags by itself.
3. **Never push or deploy** without an explicit instruction from the owner. Before a push, run `npm run verify`.

## Commit messages

The format used throughout the history is Conventional Commits with a scope:

```
type(scope): what the change does, in English, imperative, lower case
```

| type | used for | examples from the log |
| --- | --- | --- |
| `feat` | new content or a new feature | `feat(cj): new analyses and authors categories, …`, `feat(ekonomika): national economy summary — …` |
| `fix` | a bug, or broken or messy content | `fix(content): real headings, bullets and numbering, …`, `fix(rail): keep factorial definitions such as 0! = 1` |
| `style` | look and CSS only | `style: accent rule under headings spans the whole title` |
| `refactor` | code restructured, same behaviour | |
| `docs` | `AGENTS.md`, `docs/`, `README.md`, `ROADMAP.md` | `docs: picture viewer`, `docs(roadmap): …` |
| `chore` | the version bump, dependencies, tooling config | `chore: bump to v0.7.6` |

- **scope:** a subject (`cj`, `mat`, `aj`, `it`, `dejepis`, `zemepis`, `fyzika`, `ekonomika`, …, `knihovna`), or a
  part of the site (`tabule`, `rail`, `search`, `sw`, `layout`, `scripts`, `content` for cross-subject content
  fixes). Leave it out when the change has no single area.
- The subject line says what changed, not how you got there. The body (optional) explains why.
- **No names** of teachers or students, not even in a commit message. No `Co-Authored-By` or other trailers
  unless the owner asks for them.
- Commits from 0.7.7 to 0.7.16 use other forms (`IT: condense …`, `Knihovna: …`, `Bump version to 0.7.16`).
  The owner chose `type(scope)` on 2026-11-25, so do not copy those forms.
