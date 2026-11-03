# Content: ordering, labels and the subjects

How the content folders are ordered and labelled, and what the hand-written subjects (English, IT, Czech literature) look like. Rules of highest importance are in [`AGENTS.md`](../AGENTS.md).

## Content ordering & labels

Subject and topic-group order/labels are NOT hardcoded in TypeScript (there's no
per-subject config table to edit). Instead, `src/content/*` directories (both subject
folders and the category folders inside them) follow a filesystem convention read by
`src/lib/content-fs.ts`:

- A leading `NN-` numeric prefix on a folder name sets its sort order and is stripped to
  form the public URL slug (e.g. `03-funkce-a-rovnice` → `/mat/funkce-a-rovnice/`).
- An optional `_meta.json` in that folder (`{ "label": "...", "description": "..." }`)
  supplies the display label/description when the auto-capitalized slug isn't good enough
  (missing diacritics, needs a "(2. ročník)" suffix, etc). Without it, the label falls back
  to an auto-capitalized version of the slug.
- To reorder or relabel subjects/categories: rename the folder and/or edit `_meta.json` —
  no code changes needed. Individual topic files keep their own existing convention
  (`NN-slug.md` filename + `order:` in frontmatter, both already in sync across the archive).
- **Pages that are not study content** — a signpost (rozcestník), a ŠVP overview, a topic plan, an
  exam syllabus, a reading list, a formula sheet — sit at `order` ≤ 0, so the numbered content
  starts at 1: −1 for the signpost that should come first (`literarni-skupiny-…-rozcestnik`,
  `maturitni-okruhy`, `prehled-vzorcu`, the Cermat outline), 0 for the ŠVP overviews and plans.

## English (`03-aj/`)

Hand-written, not converted: the old Bridge-magazine conversions were only used as a source of facts and
then deleted, and `build-manifests.mjs` no longer generates an `aj` manifest. The structure follows the
school's list of 20 oral-exam topics, each a general topic plus a specific part:
`01-maturitni-temata/` (the 20 general topics, `order` 1–20 = the topic number, written at Cambridge B2
First level), `02-realie/` and `03-it-english/` (the specific parts). Every page has the same shape: a
line saying which topic it belongs to with a link to the other half, the model text, a **Vocabulary**
table (English | Česky), **Useful phrases** and practice questions whose hints are spoilers
(`\|\|hint\|\|` inside a table cell). Facts that date (heads of state, population figures) are written
as of the time of writing — re-check them when you touch a page.

`01-maturitni-temata/00-prehled-temat.md` (order −1) is the table of the 20 topics with their specific
parts — keep it in step when a pairing changes. `04-maturitni-zkouska/` is written in Czech with English
examples (it is about the exam, not a topic): the oral exam and its phrases, the written work (e-mail,
letter and other text types with model texts), the Cermat didactic test, and a grammar overview. The
exam level is B1 (ŠVP); the topic texts are deliberately one level higher (B2).

`05-cambridge-b2-first/` prepares for the Cambridge B2 First exam, also in Czech with English examples: the
format and scoring (Cambridge English Scale), Reading and Use of English part by part with sample items
(spoiler answers), Writing — the task types and the four published criteria (Content, Communicative
Achievement, Organisation, Language, 0–5 each) — then original model texts of every type (140–190 words,
the count written under each, with a short comment per criterion), Listening and Speaking (with the
assessor's criteria). Facts about the format follow Cambridge's published handbook; re-check them when the
exam changes.

## IT (`04-it/`)

Categories are ordered by the oral exam: Reference first, then the categories covering the 20
maturitní okruhy (plain labels, no okruh numbers or other suffix), then the
practical-exam categories, then the rest. Practical-exam topics
(3D modelování, publishing, web, databases…) stay — they are only placed after the oral-exam
ones so they do not crowd the subject page. `01-reference/maturitni-okruhy.md` links every okruh
item to the page that covers it (the cyber-security category has one page per okruh 16–19 and
`05-zabezpeceni-siti-a-aplikaci` for okruh 20); "zatím bez podkladů" marks items with no page yet. Do not write
pages on malware analysis, Diffie-Hellman key exchange, password attacks or DNS tunneling —
leave those items marked as they are.

## Czech literature (`01-cj/`)

Categories: `02-ustni-zkouska` (the structure of the oral exam, the outlines for the literary and the
non-literary text — both from the school's handouts in `cjl/` — and the school reading list with a link
per work), `03-rozbory-knih`, `04-autori`, `05-literatura` (periods and theory; URL `/cj/literatura/`),
`06-jazyk-a-sloh` (language and writing — the didactic test and the written work with Cermat's six
criteria 1A–3B, spelling, morphology, syntax and commas, vocabulary, general knowledge about the language,
the written-work genres; written from general knowledge, no school source; URL `/cj/jazyk-a-sloh/`),
`09-archiv` (the analyses converted from the old archive; URL `/cj/archiv/`). The functional styles and
the slohové postupy live in `02-ustni-zkouska/03-rozbor-neumeleckeho-textu.md` — link there, do not
repeat them in `06-jazyk-a-sloh`. Exam times and thresholds of the written work are set by the school
each year, so those pages give them as usual values and say so.

`03-rozbory-knih` holds **only works of the school reading list** (`cjl/Seznam četby k MZ`), one page per
work, `order` = the number on the list, title "Autor – Dílo" (an en dash; `authorOf()` in
`timeline-links.ts` splits on it). Every page follows the exam outline in the same order: a line with
author (link to `04-autori`), year, kind, genre and period (link to the period page); *Stručný obsah*;
*I. část* (druh a žánr, the passages usually drawn, téma a motivy, časoprostor, kompozice); *II. část*
(vypravěč / lyrický subjekt, postavy, typy promluv, veršová výstavba — "netýká se" for prose); *III. část*
(jazykové prostředky, each with what it does); *Literárněhistorický kontext* with three parts:
*O autorovi* (a paragraph: life as far as it explains the work, where the work stands in the author's
output, its reception), *Autoři téže doby* (at least two authors of the same period, **at least one of
them Czech** — each with the work(s) of that time and a few sentences on what the works have in common and
where they differ) and *Literární směr* (the features of the movement, a few more names). No revision
questions — the user does not want them on analysis pages. Quote only works that are out of copyright, and
only a line or two; never quote a modern translation at length. Write only what is certain about a work —
a detail you cannot vouch for is left out, not guessed. `04-autori` has a page for each author of the list
(life as far as it explains the work, works with links to the analyses, typical features, context).

Links to an analysis get the small rozbor icon (`rehype-rozbor-link.ts`); one into `/cj/archiv/` is dimmed
and its tooltip says it is the older one. When a new analysis replaces an archived one, point the links
of the period pages and of the reading list (`02-ustni-zkouska/04-seznam-cetby.md`) to the new page.
