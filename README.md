# MATURITKA

Učební web poskládaný z archivu školních podkladů k maturitě — prezentací, skenovaných PDF
a dokumentů, které jsou převedené do jednotného Markdownu a setříděné podle předmětů
a okruhů. Pokrývá 13 předmětů (Český jazyk, Matematika, Angličtina, IT, Dějepis, Zeměpis,
Fyzika, Společenské vědy, Právo, Psychologie, Ekonomika, Němčina, Občanská nauka).
Angličtina je napsaná znovu podle školního seznamu maturitních témat (úroveň B2), ne převedená.

Astro + Markdown content collections, žádný backend, statický build. Obsah i kód jsou pod
licencí CC BY-NC-SA 4.0 (viz `/licence/` a `LICENSE`). Co projekt je a proč vznikl, shrnuje
stránka `/o-strance/`.

## Vývoj

```sh
npm install
npm run dev          # http://localhost:4321
npm run build        # ./dist/ + sitemap-index.xml
npm run preview      # servíruje ./dist/
npm run astro check
npm test                   # unit testy čistých modulů (tests/*.test.ts)
npm run lint               # Biome: lint + formátování
npm run check:links        # po buildu — interní odkazy i #fragmenty mířící do prázdna
npm run check:formulas     # vzorce na přehledu vzorců musí sedět s tématy, na která odkazují
npm run check:frontmatter  # title, order, jedinečné slugy, jen známé klíče
npm run check:content      # úrovně nadpisů, alt u obrázků, existující obrázky, osamělá čísla
npm run verify             # všechno najednou z čistého stromu: test, lint, astro check, build a čtyři kontroly
```

Verze v `package.json` se vykresluje v patičce webu. Před pushem s viditelnou změnou se zvedá
o patch (`npm version patch --no-git-tag-version`, commit `chore: bump to vX.Y.Z`) — pravidla jsou
v [`AGENTS.md`](AGENTS.md) a [`docs/workflow.md`](docs/workflow.md), stejně jako poznámka o cache, která
umí po zásahu do `src/lib/**` tiše servírovat starý build. Jak se píšou studijní stránky, popisuje
[`docs/writing-style.md`](docs/writing-style.md).

## Struktura

```
src/
  content.config.ts     # kolekce se generují automaticky z src/content/* (Zod schema:
                        # title, order, source, formulaRail, book)
  content/<predmet>/**/*.md   # obsah — podsložka = kategorie v navigaci daného předmětu
  layouts/BaseLayout.astro    # hlavička, patička, OG/meta tagy, skip-link, klientské skripty
  pages/
    index.astro                # přehled předmětů
    [subject]/index.astro      # seznam témat po kategoriích
    [subject]/[...slug].astro  # detail tématu (třísloupcové rozvržení)
    o-strance.astro            # o projektu (odkaz z patičky)
    licence.astro              # licenční stránka
    404.astro                  # vlastní stránka pro neexistující URL
  components/
    SubjectRail.astro     # levý sloupec — rejstřík celého předmětu
    ArticleAside.astro    # pravý sloupec — kategorie, sousední témata, obsah, vzorce
    TopicRow.astro        # řádek v seznamu témat (číslo, název)
    MathScratchpad.astro  # pracovní plocha pod články z matematiky
    GraphPlot.astro, Icon.astro
  lib/
    content-fs.ts, subjects.ts, groups.ts   # čtení předmětů a kategorií z filesystému
    whiteboard.ts                            # kreslení na pracovní ploše
    markdown/           # remark/rehype pluginy: math, spoilery, grafy, geometrie,
                        # tělesa, portréty autorů, odkazy na rozbory
  styles/global.css     # designový systém (barvy, písma, rozvržení)
docs/                   # podrobná dokumentace po tématech (AGENTS.md je rozcestník)
vercel.json             # hlavičky a cache na Vercelu
scripts/
  build-manifests.mjs    # projde zdrojový adresář s podklady a vygeneruje scripts/manifest/*.json
  convert-docx.mjs       # mammoth: docx/doc/odt → markdown (docx přímo, doc/odt přes LibreOffice)
  convert-pdf.py         # pymupdf4llm (venv v scripts/.venv): pdf → markdown, volitelně --ocr
  manifest/*.json        # mapování zdroj → cíl (title, order, src, dest) — upravuj ručně
  archive.mjs, archive_paths.py  # aliasy cest k archivu (archiv-1/…) — skutečné názvy složek
                         # jsou jen v git-ignorovaném archive-aliases.local.json, viz AGENTS.md
  check-links.mjs        # po buildu ověří, že žádný interní <a href> nevede do prázdna
  check-formulas.mjs     # ověří přehled vzorců proti stránkám témat
  check-frontmatter.mjs  # title, číselný a jedinečný order, jedinečné slugy, jen známé klíče
  check-content.mjs      # přeskočené úrovně nadpisů (h2 → h4), obrázky bez alt nebo bez souboru,
                         # řádky, které jsou jen číslo s tečkou
```

## Pořadí a názvy předmětů a kategorií

Nejsou nikde v kódu — čtou se z filesystému (`src/lib/content-fs.ts`):

- Číselná předpona `NN-` u složky určuje pořadí a do URL se nepromítne
  (`src/content/03-funkce-a-rovnice/` → `/mat/funkce-a-rovnice/`).
- Volitelný `_meta.json` ve složce (`{ "label": "...", "description": "..." }`) dodá
  zobrazovaný název a popis. Bez něj se název odvodí ze slugu.

Přerovnat nebo přejmenovat předmět či kategorii je tedy přejmenování složky nebo úprava
`_meta.json` — v TypeScriptu se nemění nic.

## Jak přidat obsah

**Nový předmět** — založ `src/content/NN-slug/` a v ní `_meta.json` s názvem a popisem.
Kolekce, stránky i navigace se dotáhnou samy.

**Ručně psané téma** — stačí Markdown v `src/content/<predmet>/<kategorie>/NN-slug.md`
s frontmatterem (povinný je jen `title`; dál `order`, `source`, `formulaRail`).

**Převod z archivního souboru:**

1. Napiš manifest s **jedinou** položkou (např. `/tmp/import.json`) ve tvaru
   `[{ "src": "archiv-1/<cesta ke zdrojovému souboru>", "dest": "<NN-predmet>/<NN-kategorie>/<NN-slug>.md",
   "title": "...", "order": 1 }]`. `dest` je skutečná cesta pod `src/content/` včetně předpon `NN-`.
   Konvertory přepíšou **každou** položku manifestu — celý `scripts/manifest/<predmet>.json` by přepsal
   ručně učesané stránky. Záznam pak doplň i do `scripts/manifest/<predmet>.json` jako evidenci.
2. Spusť konverzi (skripty samy přeskočí položky, na které nemají příponu):
   ```sh
   node scripts/convert-docx.mjs /tmp/import.json
   scripts/.venv/bin/python scripts/convert-pdf.py /tmp/import.json
   ```
3. Výstup projdi a dorovnej ručně podle [`docs/conversion.md`](docs/conversion.md) — konverze je začátek,
   ne hotová věc.

## Volitelné klíče ve frontmatteru

- `formulaRail: false` — stránka z řešených příkladů, vpravo se nezobrazí „Klíčové vzorce“.
- `book: true` — celá kniha v `01-cj/07-knihovna`, stránka dostane čtečku (velikost písma, postup čtení).
- `source` — jen u převedených stránek; ručně psané ho nemají. Jiné klíče (ani `tags`)
  `check-frontmatter.mjs` nepustí.

## Poznámky ke kvalitě konverze

- Mammoth (docx) občas nerozpozná Wordí tabulku a vypíše ji jako plochý seznam řádků —
  obsahově nic nechybí, jen to není vizuálně spárované do tabulky.
- pymupdf4llm (pdf) u matematických textů s hustým řádkováním někdy slepí více úloh do
  jednoho odstavce — čitelné, ale méně přehledné.
- OCR (`--ocr`, čeština) funguje jen na tištěný/skenovaný text. Na rukopisné poznámky
  produkuje nepoužitelný výstup — takové zdroje raději nechat jako placeholder
  („zatím nepřevedeno") než vnucovat zmatečný OCR text.
- Co se ze zdroje nedochovalo, se v textu označuje zápisem `((...))` místo tichého
  zalepení mezery.
