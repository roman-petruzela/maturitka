---
title: "Praktické tipy pro Microsoft Office"
order: 3
tags: ["doplněno"]
---

## Word

- **Styly (Styles)** – pojmenované sady formátování (velikost a řez písma, barva, odsazení), které se aplikují na celý odstavec/text najednou (Nadpis 1, Nadpis 2, Normální text...); místo ručního formátování každého nadpisu zvlášť se použije styl, a pokud se později změní vzhled stylu, změní se automaticky všude, kde je použitý
- **Automatický obsah (Table of Contents)** – pokud jsou nadpisy v dokumentu označené styly Nadpis 1/2/3, dá se vygenerovat obsah dokumentu jedním příkazem (Reference → Obsah); obsah se dá kdykoliv aktualizovat, pokud se stránkování nebo nadpisy změní
- **Citace a seznam literatury** – Word umí spravovat citace zdrojů (karta Reference → Citace a bibliografie), zvolit citační styl (ISO 690, APA...) a na konci automaticky vygenerovat seznam použité literatury ze zadaných zdrojů
- **Sledování změn (Track Changes)** – zaznamenává úpravy textu (přidání, smazání, formátování) jako viditelné revize s uvedením autora, aniž by se ztratila původní verze; používá se při společné práci na dokumentu nebo při připomínkování (autor revize zapracuje, nebo je odmítne)
- **Hromadná korespondence (Mail Merge)** – vytvoří sadu podobných dokumentů (dopisy, štítky, diplomy) z jedné šablony a tabulky s daty (např. Excel se jmény a adresami); princip: šablona obsahuje zástupná pole (např. «Jméno», «Adresa»), po spuštění hromadné korespondence Word vygeneruje samostatný dokument/stránku pro každý řádek tabulky

## Excel

Vzorce v Excelu vždy začínají znakem `=`. Čárka/středník jako oddělovač argumentů závisí na jazykových nastaveních Windows, u anglické verze funkcí se často používá `,`.

```
=SUM(A1:A10)                     ' součet hodnot v rozsahu A1 až A10
=AVERAGE(A1:A10)                 ' průměr hodnot v rozsahu
=IF(B2>=60; "Prospěl"; "Neprospěl")   ' podmínka - vrátí jednu ze dvou hodnot
=VLOOKUP(D2; A1:B100; 2; FALSE)  ' vyhledá hodnotu D2 v prvním sloupci A1:B100
                                  ' a vrátí odpovídající hodnotu z 2. sloupce
```
(České lokalizované názvy stejných funkcí: `=SUMA(...)`, `=PRŮMĚR(...)`, `=KDYŽ(...)`, `=SVYHLEDAT(...)`.)

- `SUM`/`SUMA` a `AVERAGE`/`PRŮMĚR` – základní souhrnné funkce nad rozsahem buněk
- `IF`/`KDYŽ` – podmínka; dá se i vnořovat (`IF` uvnitř `IF`) pro víc než dvě možnosti
- `VLOOKUP`/`SVYHLEDAT` – vyhledá hodnotu v prvním sloupci tabulky a vrátí odpovídající hodnotu ze zadaného sloupce téhož řádku; typické použití je „dohledej cenu produktu podle jeho kódu v ceníku“; novější Excel nabízí i výkonnější `XLOOKUP`
- **Kontingenční tabulka (Pivot Table)** – nástroj pro rychlé shrnutí a přeskupení velkého množství dat bez psaní vzorců – přetažením polí do řádků/sloupců/hodnot se okamžitě spočítají souhrny (např. součet tržeb podle měsíce a podle produktu); zdrojová data se nemění, mění se jen pohled na ně
- **Podmíněné formátování (Conditional Formatting)** – automatické vizuální zvýraznění buněk podle zadaného pravidla (např. červeně hodnoty pod stanoveným limitem, barevná škála podle velikosti čísla) – usnadňuje rychlou orientaci ve velké tabulce

## PowerPoint

- Zásady dobré prezentace – na slidu jen tolik textu, kolik je nutné (ideálně hesla, ne souvislé věty), jednotná šablona/barevná paletka napříč celou prezentací, dostatečně velké a čitelné písmo i z dálky, obrázky/grafy raději než dlouhé odrážky
- **Přechody a animace** – používat s mírou a funkčně (např. postupné odkrývání bodů seznamu, aby publikum nepředbíhalo mluvčího), ne jako samoúčelný efekt; příliš mnoho různých přechodů působí neprofesionálně a odvádí pozornost od obsahu
- **Prezentační režim (Slide Show)** – zobrazí prezentaci na celou obrazovku pro publikum; v kombinaci s druhou obrazovkou (Presenter View) vidí mluvčí navíc aktuální slide, náhled dalšího slidu, čas prezentace a vlastní poznámky, které publikum nevidí
- **Poznámky pro řečníka (Speaker Notes)** – textové pole pod každým slidem viditelné jen mluvčímu (v Presenter View nebo při tisku), vhodné pro detaily a čísla, která nemají být přímo na slidu, ale mluvčí je chce mít po ruce
