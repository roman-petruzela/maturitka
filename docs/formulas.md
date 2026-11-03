# Formulas

Writing formulas in content, the "Klíčové vzorce" rail and the math reference sheet. Rules of highest importance are in [`AGENTS.md`](../AGENTS.md).

## Writing formulas in content

- One formula per `$$…$$` block. Never join independent formulas with `\qquad` / `\quad` (sin and
  cos, the two Euclid theorems, `V = …` and `S = …` each get their own block) and never use `\qquad`
  to fake indentation after an inline label — put the label in its own bold paragraph and the
  formula in a display under it.
- A sentence does not belong inside a display (`\text{— poloměr kružnice…}`): write it as prose. A
  short condition or note tail (`\qquad (b\neq0)`, `\quad\text{kde } s=…`) is fine.
- The **Klíčové vzorce** rail is cloned from the display formulas of the article. Each formula is
  captioned (and gets a tooltip) with the bold lead-in right before it ("**Euklidova věta o
  výšce:**"), else the tidied section heading ("2) Goniometrické funkce — sin, cos" → "Goniometrické
  funkce"). A lead-in counts only when the bold phrase *opens* its paragraph, starts with a capital,
  holds no formula, and either is the whole paragraph or the paragraph ends with a colon — a bold word
  inside a sentence ("jsou **kolmé** právě tehdy …") is emphasis, not a title. Numbering ("2b)") is
  stripped, and of "popis — Název" a capitalised tail wins ("… — Heronův vzorec" → "Heronův vzorec"),
  a lower-case one is dropped. Generic lead-ins ("Znění:", "Vzorec:") are skipped in favour of the
  heading. A note tail ("kde s = (a+b+c)/2 …") is shown under the formula with its fractions typeset
  (words as plain text, the maths between them in a MathLive wrapper) — never flattened with
  `textContent`. Formulas hidden in a spoiler never appear. A formula a little wider than the rail is
  shrunk to fit.
- The rail is for formulas to look up, so it leaves out what is only a computation: a display under a
  task / worked-example heading ("Ukázkový příklad", "Příklady na procvičení", "Úkol") or right after a
  paragraph starting "Řešení:", "Výsledek:", "**Příklad …:**", "**Například:**" (`WORKED_RE`,
  `inWorkedExample` in `rail-formulas.ts`), and a display that is only a list of numbers ("1, 1, 2, 3,
  5, …", `isListNotFormula`) or a computation with numbers only ("2275 : 7 = 325", `isNumbersOnly`; a
  factorial such as "0! = 1" is a definition and stays). Every heading the formula lies under counts,
  not only the nearest one. A closing "Shrnutí" that repeats
  formulas already listed is skipped, and a repeat written with `⋅` / `⟺` instead of nothing / `=` is
  recognised as the same formula. A page made only of worked problems sets `formulaRail: false` in its
  frontmatter (`kombinatorika-v-praxi`) and gets no rail. (The didactic-test solutions, `10-resene-ulohy-dt`, were removed at the user's request.) In content, an
  illustration of a method is "Například: $…$" inline under a general formula, not a display of its own.
- Captions: a heading too general to name a formula ("Vzorce", "Výpočet", "Shrnutí", "Odvození",
  `GENERIC_CAPTION`) hands over to the heading above it and in the end to the page title; "Další
  vlastnosti — diagonály" is captioned by its part after the dash. Besides a lead-in right before the
  formula, a bold phrase opening a paragraph up to six blocks above it within the same section counts
  ("**Hybnost** (značka p, …)" + a list + the formula) — so physics notes, whose headings were often
  plain lines, need real headings or such bold phrases. `/tmp`-free check: load the formula pages in the
  headless browser and read `[data-formulas] > li` (heading `li.rail-formula-heading`, formula
  `.math-display`) to review every caption after changing these rules.
- A figure caption (`"title"` of a graph / geometry / solid block) may use the same subscript
  shorthand as the labels inside the drawing: `v_c`, `log_{1/4} x`.

## Math reference (`02-mat/01-reference/`)

The category is labelled "Reference" (as in IT). Besides the ŠVP overview (order 0) it holds
`prehled-vzorcu.md` (order −1), a formula sheet: per category an `##`, per topic an `###` that links to
the topic's page, and under it one ```` ```formulas ```` block (nested groups such as square /
rectangle become titled sections; two tables — intervals, values of the trigonometric functions —
are copied as they stand). It was assembled from the theory of the topic pages only — no worked
examples, no DT solutions — and every formula was checked to occur verbatim in the page it is
attributed to (ignoring whitespace and `\frac` vs `\dfrac`). A note tail such as
`\qquad\text{kde } …` is moved out of the formula into the card's `note`. Nothing regenerates the
page: when a topic's formulas change, edit the sheet by hand and repeat the check. Its formulas are
inside `.formula-sheet`, so the "Klíčové vzorce" rail stays empty (and is removed) on that page.
`node scripts/check-formulas.mjs` is that check, automated: every `tex` of a card, every `$…$` of a
label / note / table must still occur (whitespace aside; `\dfrac` = `\frac`) in the topic page the
`###` heading links to. The page also carries a filter box (`formula-filter.ts`, loaded by
`BaseLayout.astro`): it hides cards whose text or context (the section and topic headings) does not
match — accents ignored, every word must be found — via `.is-filtered`, hides a section or topic
whose cards are all hidden, and shows "N z M"; Enter jumps to the first hit, Escape clears. In print
(`@media print` in global.css) the palette variables are overridden to ink on white, the scratchpad,
buttons and the filter are hidden and the sheet is three columns; headings do not end a page.
