# MATURITKA

Učební web poskládaný z archivu školních podkladů k maturitě — prezentací, skenovaných PDF
a dokumentů, které jsou převedené do jednotného Markdownu a setříděné podle předmětů
a okruhů. Pokrývá 12 předmětů (Český jazyk, Matematika, IT, Angličtina, Dějepis, Zeměpis,
Fyzika, Společenské vědy, Právo, Psychologie, Ekonomika, Němčina).

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
npm run check:links  # po buildu — najde interní odkazy mířící na neexistující stránku
```

Verze v `package.json` se vykresluje v patičce webu, takže se zvedá s každou viditelnou
změnou — pravidlo je v [`AGENTS.md`](AGENTS.md), stejně jako poznámka o cache, která umí
po zásahu do `src/lib/**` tiše servírovat starý build.

## Struktura

```
src/
  content.config.ts     # kolekce se generují automaticky z src/content/* (Zod schema:
                        # title, order, tags, source, hasExercises)
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
    ArticleAside.astro    # pravý sloupec — značky, sousední témata, obsah, vzorce
    TopicRow.astro        # řádek v seznamu témat (číslo, název, odznaky)
    MathScratchpad.astro  # pracovní plocha pod články z matematiky
    GraphPlot.astro, Icon.astro
  lib/
    content-fs.ts, subjects.ts, groups.ts   # čtení předmětů a kategorií z filesystému
    whiteboard.ts                            # kreslení na pracovní ploše
    markdown/           # remark/rehype pluginy: math, spoilery, grafy, geometrie,
                        # tělesa, portréty autorů, odkazy na rozbory
  styles/global.css     # designový systém (barvy, písma, rozvržení)
scripts/
  build-manifests.mjs    # projde zdrojový adresář s podklady a vygeneruje scripts/manifest/*.json
  convert-docx.mjs       # mammoth: docx/doc/odt → markdown (docx přímo, doc/odt přes LibreOffice)
  convert-pdf.py         # pymupdf4llm (venv v scripts/.venv): pdf → markdown, volitelně --ocr
  manifest/*.json        # mapování zdroj → cíl (title, order, tags, src, dest) — upravuj ručně
  check-links.mjs        # po buildu ověří, že žádný interní <a href> nevede do prázdna
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
s frontmatterem (povinný je jen `title`; dál `order`, `tags`, `source`, `hasExercises`).

**Převod z archivního souboru:**

1. Přidej záznam do `scripts/manifest/<predmet>.json` ve tvaru
   `{ "src": "<cesta ke zdrojovému souboru>", "dest": "<predmet>/<kategorie>/<slug>.md",
   "title": "...", "order": 1, "tags": [...] }`. Podsložka v `dest` určuje kategorii.
2. Spusť konverzi (skripty samy přeskočí položky, na které nemají příponu):
   ```sh
   node scripts/convert-docx.mjs scripts/manifest/<predmet>.json
   scripts/.venv/bin/python scripts/convert-pdf.py scripts/manifest/<predmet>.json
   ```
3. Výstup projdi a dorovnej ručně — konverze je začátek, ne hotová věc.

## Značky ve frontmatteru

- `tags: ["doplněno"]` — obsah dopsaný ručně, ne převedený z archivního souboru. Je to
  jediný způsob, jak rozeznat původní podklady od nově napsaného textu (a tedy od toho,
  co je dobré nechat zkontrolovat vyučujícím). Takto vznikla například část témat
  v IT → Databázové systémy, pro která se nedochoval žádný zdrojový dokument.
- `tags: ["mimo-seznam-cetby"]` — rozbor díla, které není na aktuálním školním seznamu
  četby k maturitě.
- `hasExercises: true` — téma obsahuje příklady na výpočet; web u něj zobrazí odznak.

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
