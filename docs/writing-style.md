# Writing style for study pages

How the topic pages in `src/content/` are written. Everything here comes from pages already on the site; the model
pages are listed at the end. Rules of highest importance are in [`AGENTS.md`](../AGENTS.md). For the syntax of
formulas see [`docs/formulas.md`](formulas.md). For spoilers, `((…))` notes and figure fences see
[`docs/markdown-pipeline.md`](markdown-pipeline.md). For the folders, `order` and the subject-specific outlines see
[`docs/content.md`](content.md).

## Two kinds of page

Every page is one of the two kinds below. Decide which one you are writing before you start.

| | **Converted** (převedená) | **Hand-written** (ručně psaná) |
| --- | --- | --- |
| Where it comes from | an archive file (Word, PDF, PPTX) through [`docs/conversion.md`](conversion.md) | written for the site, from facts that can be checked |
| `source:` | **required**: the archive path without the `archiv-N/` root, never a person's name (`"matematika/TY01_0113 Trojúhelník – pravoúhlý.pdf"`) | **none** |
| What you may change | the form only: headings, lists, formulas typed as LaTeX, results moved into spoilers, conversion artefacts removed | anything, as long as every fact can be verified |
| Something missing | stays marked: `((v poznámkách nevyplněno))`, `((obrázek vynechán — popisek))`. Never guess what was there | an uncertain fact is **left out** and reported to the owner at the end of the session |
| A note on the page | optional `> Pozn. k obsahu:` on the first line, saying what was done to the form (vzorce přepsané do LaTeXu, výsledky do spoilerů, čísla stránek odstraněna) | none |

- A converted page does not get new theory. If a converted topic needs more, write a hand-written page or ask
  the owner. Do not mix the two kinds in one file.
- Hand-written facts come from sources a reader could check: a textbook, the Cermat or ŠVP outline, the
  Cambridge handbook, an RFC or official documentation, a standard reference work. Facts that go out of date
  (heads of state, population, prices, exam thresholds) are written "as of" the time of writing and checked
  again whenever the page is touched.
- Quote only works that are out of copyright, a line or two at most. Never make up a quotation, a date or a
  number to fill a gap.

## Language and tone

- **Czech**, plain and factual, written for a student revising for the maturita. Write in the third person
  or the impersonal form (*je*, *používá se*, *rozlišujeme*). Tasks use the imperative: *Vypočítejte…*,
  *Určete…*, *Vyjmenujte…*.
- **Exception:** English pages are in English (`03-aj/01–03`). The exam sections `03-aj/04–05` are in Czech with
  English examples. German pages (`12-nemcina`) are in German.
- **Begin with the subject.** The first sentence defines the topic or says what it is for. No "V této kapitole
  se podíváme…", no first paragraph that only repeats the title (those were removed site-wide, 3970744).
- **Short sentences, dense content.** A list is better than a paragraph when the items are parallel. A table
  is better than a list when the items share attributes (třídy IP adres, větné členy, poměry mezi větami).
- **Bold only the term at the place where it is defined:** **Pravoúhlý trojúhelník** je…, **Maska** = 32 bitů….
  Bold phrases are indexed as search terms ([`docs/search.md`](search.md)). A bold lead-in before a formula
  becomes that formula's caption in the "Klíčové vzorce" rail ([`docs/formulas.md`](formulas.md)), so do not
  use bold for emphasis in the middle of a sentence.
- **Italic** is for the titles of works (*Kytice*, *Babička*), for foreign and Latin words (*realis*), for
  example sentences in grammar pages (*Ráno jsme vyrazili na hory.*), and in English pages for phrases and
  example sentences.
- No exclamation marks, no chatty asides, no emoji. A warning is written as **Pozn.:** or **Pozor:** at the
  start of a paragraph.

## Typography

| What | Write | Not |
| --- | --- | --- |
| Czech quotation marks | „Součet obsahů čtverců…“ (U+201E … U+201C) | `"…"`, `„…"` (still on ~200 older pages; fix them when you touch one) |
| English quotation marks | "sorry" as the English pages already have it | Czech „“ in English text |
| Dash in a sentence | a spaced dash: ` – ` (en dash, U+2013); ` — ` also occurs, keep one style within a page | ` - ` (hyphen) |
| Title "Autor – Dílo" | en dash, spaced: `Božena Němcová – Divá Bára` (`authorOf()` splits on it) | em dash, hyphen |
| Range | unspaced en dash: `1820–1862`, `1–126`, `140–190 words`; spaced for long items: `172.16.0.0 – 172.31.255.255` | `1820-1862` |
| Decimal number | comma: `10,39 cm`, `0,5`; inside LaTeX `0{,}5`, `2{,}09\cdot10^{11}` | `10.39` (except in code and in IP addresses) |
| Large number | groups of three from five digits up, separated by spaces: `65 534`, `4 294 967 296`; inside LaTeX `941\,094` | `65,534`, `65.534` |
| Number + unit | a space: `70 cm`, `20 °C`, `78 %` (*78%* without the space means "78procentní"); angle without a space: `30°`, `33°41'24''`; in LaTeX `6\text{ cm}` | `70cm` |
| Multiplication, minus | `·` / `\cdot`, `−` (U+2212) in prose and in spoiler results: `b² = c² − a²` | `*`, `x`, a hyphen as minus |
| Arrows | `→`, `⇒`, `⟺` | `->`, `=>` (allowed in IT, where they can be code) |
| Ellipsis | `…` (one character) | `...` |
| Date | `24. 2. 1848`, `1. polovina 19. století`, `asi 570 př. n. l.` | `24.2.1848` |
| Abbreviations | `např.`, `tzv.`, `př. n. l.`, `stol.`, `tj.` | |
| Code, commands, keys | backticks: `ipconfig /all`, `192.168.25.1`, `` `<Ctrl>` `` | bare `<Ctrl>` (it is parsed as HTML and disappears) |

Type the characters yourself. Nothing in the pipeline converts `"` to „“ for you.

## Page skeleton

```markdown
---
title: "IPv4 adresování"          # required; the h1 of the page, never repeated in the body
order: 12                         # the number of the topic in its category, unique above 0
source: "site/IT3_IPv4_adresovani.pdf"   # converted pages only
formulaRail: false                # only on a page made only of worked problems
---

Úvodní odstavec: co to je, k čemu slouží, na co navazuje (s odkazem).

## První sekce

…

## Otázky k opakování

1. Otázka? ||odpověď||
```

- **Frontmatter:** only the keys the schema knows (`title`, `order`, `source`, `formulaRail`, `book`).
  `check-frontmatter.mjs` rejects any other key, including `tags`. Pages that are not study content (a signpost,
  a ŠVP overview, a reading list) sit at `order` ≤ 0 ([`docs/content.md`](content.md)).
- **Introduction:** one paragraph, 1–3 sentences, without a heading. It defines the topic and links the page
  it builds on or continues with: *Navazuje [CIDR, podsíťování a VLSM](/it/pocitacove-site/13-cidr-podsitovani-a-vlsm/).*
- **Headings** start at `##`. The title is the only h1, so never use `#` in the body. Never skip a level
  (`##` → `####`); `check-content.mjs` fails on that. A heading names its content (`## Maska sítě`, not
  `## Část 2`). Keep the ids of existing headings: other pages, the IT okruhy list and the timeline link to them.
- **Definition:** the term in bold, then `je` / `=` and the definition in one sentence. Properties and
  consequences come after it as a list.
- **Example:** `**Příklad 1 – …**` or `**Například:** $…$` under the general rule. A task with its answer is
  `Výsledek: ||…||` on its own line.
- **Review questions:** `## Otázky k opakování` is the last section: a numbered list, the answer in a spoiler on
  the same line. This is the IT convention, used on 70+ pages. Math pages put a `Výsledek:` spoiler under each
  task instead. English pages use a `Question | Hint` table. Czech book analyses have **no** questions.
- **Pictures:** `![alt](/images/content/<subject>/<category>/<page>/name.webp)`, WebP only, with an alt text
  that says what the picture shows. A diagram that can be drawn as a `geometry`, `graph` or `solid` fence
  should be ([`docs/markdown-pipeline.md`](markdown-pipeline.md)). A changed picture gets a new file name,
  because `/images/*` is cached as immutable.
- **Links:** site-absolute and without the `NN-` prefix of folders (`/cj/autori/bozena-nemcova/`), but with
  the prefix of the file slug where the file has one (`/it/pocitacove-site/14-nat-preklad-adres/`). Copy the
  URL from a built page or from a neighbouring link rather than guessing it; `check-links.mjs` checks every
  link and every `#fragment`.

## Page types

### Math theory (`02-mat`)

The sections follow the logic of the topic: `## 1) Pythagorova věta`, `## 2) Goniometrické funkce — sin, cos, tg,
cotg`. Each section has a bold definition or theorem, the formula in its own `$$…$$` block with a bold lead-in
(**Euklidova věta o výšce:**), what the symbols mean, a figure fence where it helps, and **Pozn.:** for traps.
Tasks (`## Úkol N` or a bold **Příklad:**) follow the theory they practise, with a `Výsledek: ||…||` spoiler.
Formula rules (one formula per display, no prose inside `\text{}`, captions): [`docs/formulas.md`](formulas.md).
When a formula changes, update `01-reference/prehled-vzorcu.md` too and run `check-formulas.mjs`.

### Worked examples (`formulaRail: false`)

A page made only of solved problems. Each problem gets its own `##` with a name (`## Tombola`, `## Heslo a jeho
bezpečnost`), the task in bold, the method in one or two sentences, then the computation in displays or the
answer in a spoiler. A problem the source left unsolved stays unsolved and says so. A short **Pozn.** may
draw the general lesson (*čím delší heslo…*). Sources go into a final `## Zdroje` in citation form.

### Czech literature (`01-cj`)

- **Book analysis** (`03-rozbory-knih`): the fixed exam outline in [`docs/content.md`](content.md), with every
  heading in the same order. The first line is
  `**Autorka:** [link] · **Vydáno:** 1856 · **Druh:** epika · **Žánr:** novela · **Směr:** [link]`. Characters are
  given as a list, `**Jméno** — popis`. Language devices are a list, each with what it does in the work. There are
  no review questions. Write only what is certain about the work.
- **Author** (`04-autori`): a line with the years, the kind of writer and a link to the period, one sentence
  on what the author is known for, then `## Život` (only what explains the work), `## Tvorba` (works in bold with
  the year and a link to the analysis), `## Typické rysy tvorby` and `## Kontext`.
- **Period** (`05-literatura`): `##` per movement or country, `###` per author (a `###` that names a person gets
  a portrait; a heading that names a group goes in `NOT_A_PERSON_RE`, see [`docs/frontend.md`](frontend.md)),
  under it **Charakteristika** and the works with links to their analyses.
- **Language and writing** (`06-jazyk-a-sloh`): the rules as tables with a column of examples in italics, a link
  to the Cermat criterion the topic belongs to (1A–3B), and exam times and thresholds given as usual values
  with a note that the school sets them each year.

### English (`03-aj`)

The shape is fixed and described in [`docs/content.md`](content.md). The first line names the topic and links
the other half, followed by `## What to talk about`, `## Model answer` (first person, B2, key phrases in bold),
`## Vocabulary` (`English | Česky` table), `## Grammar worth showing`, `## Useful phrases` and
`## Speaking practice` (tables with `\|\|hint\|\|` spoilers). Write natural spoken English, not a translation from
Czech, and use British spelling (*behaviour*, *queuing*).

### IT (`04-it`)

Short and exam-focused: **400–900 words**, the theory of the maturitní okruhy only, no tematický plán and no
exercise lists. The introduction gives the definition in one sentence and links the neighbouring topic.
Sections cover terms (lists, with the term in bold, `–` and the explanation), comparisons in tables, a
step-by-step **Postup** where there is a procedure, and commands and addresses in backticks. Diagrams are WebP
under `/images/content/it/…`. The page ends with `## Otázky k opakování`, 6–10 questions. Keep the anchors that
`01-reference/maturitni-okruhy.md` links to. Topics the owner excluded are listed in
[`docs/content.md`](content.md).

### Other converted subjects (`05`–`13`)

These pages keep their source. When you touch one, fix the form and leave the text alone: real `##` headings
instead of short plain lines, real lists instead of `\- text`, `**bold**` instead of `__bold __` with spaces
inside, `→` / `⇒` instead of `->` / `=>`, no space before a comma or inside parentheses. The full list of
artefacts is in [`docs/conversion.md`](conversion.md). Keep line breaks in mind: outside `01-cj`, `02-mat` and
`04-it` a newline inside a paragraph is only a wrap ([`docs/markdown-pipeline.md`](markdown-pipeline.md)).

## Rules that already hold

- **No bare task lists.** A page that is only exercise instructions cannot be a topic on its own. Merge it into
  the theory page's practice section, write real theory for it, or delete it.
- **No "doplněno".** No `doplněno` tag (the key is gone from the schema), no "(doplněno)" heading, no "added by…"
  note in the text.
- **No ASCII art.** A lost picture stays `((obrázek vynechán))` or is omitted. A diagram is drawn with a figure
  fence or as a real picture, never as text art. Numeric tables may be rebuilt as Markdown tables.
- **No names** of teachers or students: not in the text, not in `source:`, not in an image file name, not in a
  commit message. Public figures (writers, politicians, a byline) are fine.
- **Headings never skip a level**, and **every picture has alt text** (both checked by `check-content.mjs`).
- **Never invent content** to fill a gap ([`AGENTS.md`](../AGENTS.md)).

## Model pages

One good page per type. Open it before writing a page of that type.

| Type | Model page | Look at |
| --- | --- | --- |
| Math theory | `src/content/02-mat/02-vyrazy-a-mocniny/07-ciselne-obory.md` | definition per `##`, display formulas, link to the prerequisite |
| Math theory with tasks (converted) | `src/content/02-mat/04-planimetrie/03-trojuhelnik-pravouhly.md` | `> Pozn. k obsahu:`, bold lead-ins before formulas, `geometry` fences, `Výsledek:` spoilers under each task |
| Worked examples (`formulaRail: false`) | `src/content/02-mat/07-kombinatorika/09-kombinatorika-v-praxi.md` | one `##` per problem, unsolved task left unsolved, `## Zdroje` (its note still says "doplněno", do not copy that) |
| Czech book analysis | `src/content/01-cj/03-rozbory-knih/bozena-nemcova-diva-bara.md` | the fixed outline, the first line, the three context parts |
| Czech author | `src/content/01-cj/04-autori/alena-mornstajnova.md` | first line, Život / Tvorba / Typické rysy / Kontext |
| Czech language | `src/content/01-cj/06-jazyk-a-sloh/04-skladba-a-interpunkce.md` | tables with examples in italics, link to the exam criterion |
| English topic | `src/content/03-aj/01-maturitni-temata/customs-and-traditions.md` | topic line, model answer, vocabulary table, hint spoilers |
| IT topic | `src/content/04-it/02-pocitacove-site/12-ipv4-adresovani.md` | intro with links, tables, Postup, `## Otázky k opakování` |
| Converted subject (cleaned) | `src/content/09-pravo/01-ucebni-material/uvod-do-teorie-prava.md` | the source kept, real headings, lists and a table |

Not models: `05-dejepis`, `06-zemepis` and most of `07-fyzika` are still raw conversions (`__x __`, `->`, `\-`).

## Before you hand a page in

- [ ] Is it the right kind of page? A converted page has `source:` and nothing invented. A hand-written page has
      no `source:` and nothing you could not verify.
- [ ] `title` is set, `order` is free in the category, there are no other keys, and the body does not repeat the title.
- [ ] The first paragraph defines the topic. Headings start at `##`, skip no level and name their content.
- [ ] Typography: „…“, `–`, decimal comma, `70 cm`, `·`, `→`, `…`.
- [ ] Every term in bold is defined at that spot, and every display formula has a bold lead-in or a heading
      that names it.
- [ ] Review questions or results are in spoilers, and the format fits the subject (none on book analyses).
- [ ] Every picture is WebP and has alt text. Every link points to a page that exists. Nothing is drawn as
      ASCII art.
- [ ] No teacher's or student's name anywhere, no "doplněno", no TODO or placeholder text.
- [ ] `node scripts/check-frontmatter.mjs && node scripts/check-content.mjs` pass. For links, build and run
      `node scripts/check-links.mjs`.
- [ ] Every fact you left out because you were unsure is listed in your final message to the owner.
