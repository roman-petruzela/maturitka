---
name: audit-predmetu
description: Report the content debt of one MATURITKA subject (audit předmětu, dluh, co zbývá opravit) — ((…)) notes, "doplněno", stubs, placeholders, missing source. Read-only, changes nothing.
---

# /audit-predmetu — content debt of one subject

Subject: $ARGUMENTS (a folder such as `02-mat` or a slug such as `mat`. Without an argument, ask which one.)

**Report only. Change no file.** Set `D=src/content/<NN-subject>` and run the checks below. Code blocks and
LaTeX may give false hits, so open the doubtful ones before you count them.

```sh
D=src/content/02-mat   # the subject folder

# ((…)) notes, lost in the source. Report ((obrázek vynechán…)) separately
grep -rn '((' "$D" --include='*.md'
# "doplněno" in the text, mostly in "> Pozn. k obsahu:" notes
grep -rni 'doplněn' "$D" --include='*.md'
# pages once tagged doplněno (written entirely by AI), from the commit that removed the tag
git show 69465b9 -- "$D" | grep -B8 '^-tags:.*doplněno' | grep -o 'src/content/[^ ]*\.md' | sort -u
# stubs under 600 B
find "$D" -name '*.md' -size -600c
# TODO and placeholder text
grep -rniE 'TODO|FIXME|placeholder|zatím nepřevedeno|zatím bez podkladů|lorem' "$D" --include='*.md'
# pages without source (debt in converted subjects 02-mat and 05–13)
grep -rL '^source:' "$D" --include='*.md'
# pages with source (debt in hand-written areas: 03-aj, the IT and ČJ pages written for the site)
grep -rl '^source:' "$D" --include='*.md'
# typography: straight quotes in the body, ASCII arrows, broken emphasis
grep -rnP '(^|[\s(])"[^"\n]{1,80}"' "$D" --include='*.md' | grep -vE ':(title|source):'
grep -rnE ' (->|=>) |__[^_ ]+ __' "$D" --include='*.md'
# the site checks, keeping only this subject's lines
node scripts/check-frontmatter.mjs 2>&1 | grep "$(basename "$D")"
node scripts/check-content.mjs 2>&1 | grep "$(basename "$D")"
```

Bare task lists (pages made mostly of `## Úkol` or numbered tasks with no theory) have no grep. Find them by
skimming the pages that have many `## Úkol` headings. Arrows in IT code blocks are fine.

The rules behind each row are in `docs/writing-style.md` (*Rules that already hold*) and `docs/conversion.md`.

## Output

1. A summary table: debt type, count, number of files.
2. Per type, the files with line numbers (`path:line`), the worst first. Cut a long list at 15 and say how many
   are left.
3. Three suggested next steps in order, each sized as one `/tema` or `fix(content)` change. Suggest; do not do them.

Offer to add the findings to *Next* in `ROADMAP.md`, but only write them there if the owner agrees.
