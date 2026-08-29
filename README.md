# MATURITKA

Přehledný učební web postavený z archivu maturitních podkladů (`../MATURITA HADR`,
`../maturitni prehled`). V1 pokrývá čtyři předměty: Český jazyk, Matematiku, Angličtinu a IT.
Astro + Markdown content collections, žádný backend, statický build. Vyhledávání přes Pagefind.

## Vývoj

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # ./dist/ + vygenerovaný Pagefind index
npm run preview   # servíruje ./dist/
npm run astro check
```

## Struktura

```
src/
  content.config.ts     # definice kolekcí cj/mat/aj/it (Zod schema: title, order, tags, source)
  content/{cj,mat,aj,it}/**/*.md   # obsah — podsložka = skupina v navigaci daného předmětu
  layouts/BaseLayout.astro
  pages/
    index.astro                # přehled předmětů
    [subject]/index.astro      # seznam témat (seskupeno podle podsložky)
    [subject]/[...slug].astro  # detail tématu
scripts/
  build-manifests.mjs    # skenuje ../MATURITA HADR a generuje scripts/manifest/*.json
  convert-docx.mjs       # mammoth: docx/doc/odt → markdown (docx přímo, doc/odt přes LibreOffice)
  convert-pdf.py         # pymupdf4llm (venv v scripts/.venv): pdf → markdown, volitelně --ocr
  manifest/*.json        # mapování zdroj → cíl (title, order, tags, src, dest) — upravuj ručně
```

## Jak přidat další předmět nebo doplnit obsah

1. Přidej záznamy do `scripts/manifest/<predmet>.json` (nebo rozšiř `build-manifests.mjs`,
   pokud jde o nový zdrojový adresář se stovkami souborů — viz existující buildery jako vzor).
   Formát položky: `{ "src": "MATURITA HADR/...", "dest": "<predmet>/<skupina>/<slug>.md",
   "title": "...", "order": 1, "tags": [...] }`. Podsložka v `dest` = skupina v navigaci.
2. Spusť konverzi (skripty samy přeskočí položky, na které nemají příponu):
   ```sh
   node scripts/convert-docx.mjs scripts/manifest/<predmet>.json
   scripts/.venv/bin/python scripts/convert-pdf.py scripts/manifest/<predmet>.json
   ```
3. Pokud jde o zcela nový předmět (ne jen doplnění), přidej klíč do `SUBJECTS`
   v `src/lib/subjects.ts` a novou kolekci v `src/content.config.ts` — stránky a navigace
   se pak dotáhnou samy, nic dalšího se nemění.
4. Ruční/vlastní markdown lze samozřejmě psát i přímo do `src/content/<predmet>/...`
   bez konverzních skriptů — stačí dodržet frontmatter (`title` povinné). Podsložka v cestě
   určuje skupinu v navigaci; pro IT a ČJ má pořadí a české názvy skupin `src/lib/groups.ts`
   (`GROUP_CONFIG`) — u ostatních předmětů se skupina odvodí ze slugu automaticky.
5. Obsah dopsaný ručně (ne převedený z archivního souboru) označ `tags: ["doplněno"]`
   ve frontmatteru — je to jediný způsob, jak v archivu rozeznat, co je z původních
   podkladů a co je nově napsané (a tedy dobré nechat zkontrolovat vyučujícím). Příklad:
   celá kategorie IT → Databázové systémy vznikla takto, protože se pro ni nedochoval
   žádný zdrojový dokument.

### Poznámky ke kvalitě konverze

- Mammoth (docx) občas nerozpozná Wordí tabulku a vypíše ji jako plochý seznam řádků —
  obsahově nic nechybí, jen to není vizuálně spárované do tabulky.
- pymupdf4llm (pdf) u matematických textů s hustým řádkováním někdy slepí více úloh do
  jednoho odstavce — čitelné, ale méně přehledné.
- OCR (`--ocr`, čeština) funguje jen na tištěný/skenovaný text. Na rukopisné poznámky
  produkuje nepoužitelný výstup — takové zdroje raději nechat jako placeholder
  ("zatím nepřevedeno") než vnucovat zmatečný OCR text.
