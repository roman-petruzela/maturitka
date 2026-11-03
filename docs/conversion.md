# Converting and cleaning sources

Importing Word/PDF/PPTX sources and the artefacts worth grepping for after every import. Rules of highest importance are in [`AGENTS.md`](../AGENTS.md).

## Content conversion checklist

Pictures of Word sources are kept: `convert-docx.mjs` saves them as `public/images/content/<page>/NN.webp`
(EMF/WMF rendered by LibreOffice, everything resized to ≤ 1400 px by ImageMagick) and puts them in as
`<img … width>` with the width the picture had in Word, read from the document XML and matched to
mammoth's images by the hash of their bytes. On the dark page they sit on a paper-coloured card
(`article.topic img:not([class])`). The ~900 pictures the first conversion had dropped were restored the
same way; `((obrázek vynechán))` is left only where the source was a PDF.

LibreOffice draws an EMF/WMF picture in the middle of a whole blank page, so the converter trims the
margins off again (otherwise a formula shown 90 px wide is a speck on a scaled-down page). Most of those
pictures were Equation Editor formulas, and these render badly (glyphs stacked on top of each other, empty
boxes): in `07-fyzika` they were replaced by real `$…$` / `$$…$$` formulas, transcribed from the
picture, and the files were deleted. When a new Word import brings EMF formulas, do the same instead of
keeping the pictures. Pictures with a person's name in them (e.g. sample query results) are retyped
as text with neutral values.

Sources were converted from Word/PDF/PPTX; these artefacts were found and fixed and are worth
grepping for after every new import:

- letter-spaced words (`p ř e d m ě t`, isolated `ř`/`ě` tokens); U+FFFD where `ft`/`ti`/`tt`
  ligatures were lost; decomposed (NFD) diacritics — normalise to NFC;
- emphasis with whitespace inside the markers (`__Sloty __`, `*Waverly *`) or glued to a word
  (`shade__r`) — markdown renders the underscores literally; check with a real parse, not a regex;
- `<Ctrl><n>`, `<p>`, `<b>` in prose are parsed as HTML and vanish (or bold the rest of the page)
  — write them as `\<Ctrl\>` or in backticks, HTML samples in a fenced block;
- U+202F narrow no-break spaces used as ordinary spaces (whole sentences become unbreakable);
- page numbers / repeated page headers as stray paragraphs, `<!-- Start of picture text -->`
  OCR dumps, Word `HYPERLINK … \o "…"` and `file:///` links, empty footnote definitions;
- words glued together by a PDF table export (`Předchozípříkaz`).

Found in the English pages (`03-aj`, Bridge magazine PDFs) and other PDF subjects; each has a check:

- **mojibake**: Windows-1250 read as Latin-1 — `ø è ì ù ò` for `ř č ě ů ň` (`pøedpis`, `èlen`), U+FFFD for
  `ž` **or `ť`** (`køes▓anství` is křesťanství, `závra▓` závrať): list every token containing one of the
  characters and read it, never map U+FFFD blind. Names such as Molière, Søren, Sèvres, Niccolò are
  correct as they are.
- **struck-through and highlighted text**: `~~x~~` and `<mark>` are PDF styling (underline, highlight)
  the converter mistook for strike-through; text under `~~` is shown crossed out. Remove the markers.
- **small-caps type**: a magazine heading came out as `tHings you migHt`, `SYDnEY`, `growtH of
  tHE coloniES` or letter-spaced (`G e o G R A p h y`). A capital inside a word is always an artefact
  (except BrE, AmE, McX, GCSEs, pH — and phonetic transcriptions in `[…]`, which are SAMPA and must
  not be touched); headings are put in Title Case, bold paragraphs only lose the stray capitals.
- **running headers and footers** of the magazine: `Bridge 06/2006–2007`, `~~BRIDGE | March | 2011~~`,
  `10 MATURITA / AUSTRALIA`, a bare page number beside one of these, `www.bridge-online.cz`. A bare
  number is a page number only next to such a line — in `07-fyzika` and `11-ekonomika` a number on its
  own line is a table cell.
- **vocabulary run into one paragraph** (`**term** [ipa] − translation **term** …`): one list item per
  entry. Leave a line alone when numbers are woven between the entries (a column layout).
- **picture-text dumps**: a block of ≤ 30 characters is a fragment of a headline that was an image —
  delete it; a caption becomes `((obrázek vynechán — caption))`; the labels of a map become
  `((obrázek vynechán))`; real prose that exists nowhere else on the page is kept with a note that the
  columns were mixed up. Never throw the only copy of a sentence away.
- soft hyphens (U+00AD) inside words (`ob<U+00AD>sah` does not match a search for "obsah"), an orphaned `#` /
  `###` on a line of its own above its heading text, a heading with a caption or byline stuck to it.

## Content headings

Converted sources often lost their heading styles. They were repaired in bulk and the same artefacts
are worth checking after a new import: a heading written as a plain short line (now `##`/`###` at the
level of the nearest real heading), `# …` inside the content (the page already has its title as h1 —
all headings of such a file were moved one level down, a first heading that only repeats the title and
headings that are just a number ("18.") were dropped), runs of `1. **Question?**` that all restart at
1 (now numbered headings, so the table of contents lists the questions), `\- text` paragraphs that are
really bullets (now real lists), and `->` / `=>` in prose (now → / ⇒; not in IT, where they can be code).
