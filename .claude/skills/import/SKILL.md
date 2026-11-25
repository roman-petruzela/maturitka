---
name: import
description: Convert one archive file (Word, PDF, PPTX) into a MATURITKA topic page (import / převod archivního souboru, konverze podkladu). Use when a source document from the archive is to become a page.
---

# /import — convert an archive file into a page

Source: $ARGUMENTS

The procedure is `docs/conversion.md`, and the frontmatter and form rules are in `docs/writing-style.md`
(*Converted* column). **Nothing is invented:** what the source lacks stays marked `((…))`, and a lost picture
is `((obrázek vynechán — popisek))` or is omitted, never ASCII art.

1. **Alias, not a name.** Archive paths are written as `archiv-1/…` / `archiv-2/…`. If the source path names a
   teacher or a student, ask the owner to add an alias to `scripts/archive-aliases.local.json`. You must not
   read that file. The scripts translate aliases by themselves (`scripts/archive.mjs`, `archive_paths.py`).
2. **One-item manifest, outside the repo.** Both converters overwrite *every* item of the manifest they are given,
   so never run a whole `scripts/manifest/<subject>.json`. It would overwrite pages that were cleaned by hand.
   Write `/tmp/import.json`:
   `[{ "src": "archiv-1/…", "dest": "<NN-subject>/<NN-category>/<NN-slug>.md", "title": "…", "order": N }]`.
   `dest` is the real folder path under `src/content/`, with the `NN-` prefixes. Pick `order` as in `/tema`
   step 4. If `dest` already exists, stop and ask.
3. **Convert:**
   - Word: `node scripts/convert-docx.mjs /tmp/import.json`. Pictures go to `public/images/content/…`.
   - PDF / PPTX: `scripts/.venv/bin/python scripts/convert-pdf.py /tmp/import.json`. Add `--ocr` only for a
     printed scan. Never use OCR on handwriting: such a source is reported, not converted.
4. **Grep the artefacts** listed in `docs/conversion.md`: letter-spaced words, U+FFFD and mojibake, NFD, broken
   emphasis (`__x __`), `<Ctrl>`-like tags, U+202F and U+00AD, page numbers and running headers, `HYPERLINK` /
   `file:///`, glued words, `->` / `=>`.
5. **Clean up by hand, the form only:** headings from `##` without gaps, real lists, formulas as LaTeX
   (`docs/formulas.md`; EMF formula pictures become `$…$` and the pictures are deleted), results into
   spoilers, alt text on every picture, a picture with a person's name in it retyped with neutral values.
   You may add an optional `> Pozn. k obsahu:` saying what was done to the form, without the word "doplněno".
6. **If the subject has a manifest,** add the same item to `scripts/manifest/<subject>.json` so the mapping is
   recorded.
7. **Check:** `node scripts/check-frontmatter.mjs && node scripts/check-content.mjs`, then
   `npm run build && node scripts/check-links.mjs`. `source:` must show the path without `archiv-N/` and with no name.
8. **Report** what was lost (every `((…))` you left) and what you could not read, then run `/hotovo`.
