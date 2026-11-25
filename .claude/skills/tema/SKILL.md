---
name: tema
description: Write or rewrite one topic page of the MATURITKA site (napsat / přepsat téma, nová stránka, studijní materiál). Use when asked to write, rewrite, extend or condense a page in src/content/.
---

# /tema — write or rewrite a topic page

Topic: $ARGUMENTS

Everything below points to the docs. Do not restate them, follow them.

1. **Read the rules.** Read `docs/writing-style.md` in full. For the subject, also read its part of
   `docs/content.md`; for math, `docs/formulas.md`; for a figure, the fence in `docs/markdown-pipeline.md`.
2. **Decide the kind.** Hand-written (no `source`) or converted (keeps `source`, nothing invented). If you
   rewrite a converted page into a hand-written one, ask the owner first.
3. **Read the surroundings.** Read the category's `_meta.json`, the **two neighbouring pages** (the orders just
   below and above) and the **model page** for this type from the table in `docs/writing-style.md`.
4. **Pick a free `order`.** List the orders in use:
   `grep -h '^order:' src/content/<subject>/<category>/*.md | sort -n`. A new page uses the next free number and
   the file name `NN-slug.md`, with the same number. When rewriting, keep the file name, `order` and `title`
   unless asked otherwise.
5. **Find what links here** before you rename or drop a heading:
   `grep -rn "/<subject-slug>/<category-slug>/<page-slug>/" src/content`. Keep every heading that is linked with
   `#…`.
6. **Write the page** by the skeleton and the rules for its type. Use only facts you can vouch for. Leave out
   a fact you are unsure of and note it for step 8.
7. **Check:** `node scripts/check-frontmatter.mjs && node scripts/check-content.mjs`. If you changed links or
   headings, also run `npm run build && node scripts/check-links.mjs`. For math formulas, run
   `node scripts/check-formulas.mjs`. Fix everything they report.
8. **Report** to the owner: what the page covers, its word count (IT: 400–900), and a list of **facts you left
   out or are not sure of** (or "none").
9. **Finish** with `/hotovo`.
