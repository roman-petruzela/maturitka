---
title: "Grafika na PC – rozcestník"
order: -1
---

Rozcestník kategorie: o čem předmět je, kdy se podle ŠVP učí, co si z něj určitě zapamatovat, kde je které téma a které maturitní okruhy pokrývá.

## O předmětu

- Jak počítač ukládá obraz (rastr × vektor), jak pracuje s barvou (barevné modely, hloubka, rozlišení) a v jakých formátech se grafika ukládá.
- Prakticky ve třech editorech: rastrová grafika (GIMP, Photoshop – výběry, vrstvy, jas a kontrast, korekce barev, masky, fotomontáž), vektorová grafika (Zoner Callisto, Illustrator – křivky, tvarování, text) a jejich propojení (skenování, trasování, koláž, leták).
- Na závěr základy 3D: hardware a software pro 3D, modelování, textury, světla, animace a rendering v Blenderu.
- Navazuje na ni [elektronické publikování](/it/#elektronicke-publikovani) (grafika pro web) a [3D modelování](/it/#3d-modelovani).

## Ročníky a hodiny podle ŠVP

| Ročník | Hodin týdně | Obsah (ŠVP §4.9.3) |
| --- | --- | --- |
| 1. | 2 (68 h za rok) | počítačová grafika – pojmy, formáty, komprese; rastrová grafika; vektorová grafika; propojení rastru a vektoru, skener, trasování; základy 3D grafiky |

Plné znění výstupů je v [přehledu ŠVP](/it/reference/svp-prehled/#493-grafika-na-pc). Rozpis hodin podle měsíců je v [tematickém plánu](/it/grafika-na-pc/00-tematicky-plan/); ten v archivu pochází ze 4. ročníku, obsahem ale odpovídá ŠVP.

## Co si určitě zapamatovat

- **Rastrová grafika** = mřížka pixelů, každý má barvu. Realistická (fotografie, skener), ale zvětšením ztrácí kvalitu a soubory jsou velké. **Vektorová grafika** = matematicky popsané objekty (Bézierovy křivky), libovolně škálovatelná, malé soubory – loga, schémata, výkresy.
- **Rozlišení** – DPI = počet bodů na palec (tisk, sken); u obrazovky počet sloupců × řádků. **Barevná hloubka** – počet bitů na pixel; 24 bitů = 16,7 milionu barev, GIF a staré webové palety 256 barev (8 bitů).
- **Datová velikost** nekomprimovaného obrázku = šířka × výška × barevná hloubka. Např. $1920 \cdot 1080$ px při 24 bitech (3 B na pixel) = 6 220 800 B ≈ 5,9 MiB.
- **RGB** – aditivní model (míchání světla, monitor), smícháním všech složek vzniká bílá; zápis `RGB(255, 255, 255)` nebo šestnáctkově. **CMYK** – subtraktivní model (tisk), azurová, purpurová, žlutá a samostatná černá (Key).
- **Rastrové formáty**: **JPEG** – ztrátový, fotografie; **GIF** – max. 256 barev, jednoduché animace; **PNG** – bezztrátový, průhlednost; **BMP** – nekomprimovaný. **Vektorové**: **SVG** (otevřený, XML, web), EPS/PostScript, PDF, nativní `.ai`, `.cdr`.
- **Software**: rastr – GIMP (zdarma, GPL), Photoshop, Zoner Photo Studio; vektor – Inkscape (zdarma), Illustrator, CorelDRAW, Zoner Callisto; 3D – Blender (zdarma), SketchUp, 3D Studio, Maya.
- **Výběrové metody**: obdélník a elipsa, laso, kouzelná hůlka (souvislá oblast podobné barvy, parametr práh), výběr podle barvy (v celém obrázku), cesty (nejpřesnější, Bézierovy body), nůžky.
- **Histogram** (dialog Úrovně) ukazuje rozložení tmavých a světlých pixelů – pře- a podexponování. **Jas** = celková světlost, **kontrast** = rozdíl nejsvětlejšího a nejtmavšího místa. **Maska** ve stupních šedi: černá skrývá, bílá ukazuje.
- **Vektorový editor**: uzlový bod ostrý (roh) × hladký (plynulé napojení); každý tvar i text lze **převést na křivky** a upravovat bod po bodu.
- **Blender**: objektový × editační mód, booleovské operace (sjednocení, rozdíl, průnik), modifikátory, materiály a UV textury, světla, animace klíčovými snímky, rendering.

## Témata kategorie

- [Tematický plán](/it/grafika-na-pc/00-tematicky-plan/)
- [Počítačová grafika – pojmy a software](/it/grafika-na-pc/01-pocitacova-grafika-a-software/) – rastr a vektor, rozlišení, barevné modely, formáty, přehled programů
- [Vektorová grafika – práce v editoru (Zoner Callisto)](/it/grafika-na-pc/02-vektorova-grafika/)
- [Rastrová grafika – práce v GIMPu](/it/grafika-na-pc/03-rastrova-grafika-gimp/)
- [3D systémy](/it/grafika-na-pc/04-3d-systemy/) – hardware a software pro 3D
- [Blender – základy 3D modelování](/it/grafika-na-pc/05-blender-zaklady-3d-modelovani/)

## Maturitní okruhy

Kompletní seznam je v [maturitních okruzích IT](/it/reference/maturitni-okruhy/). Této kategorie se týká okruh 7:

| Okruh | Stránky |
| --- | --- |
| [7) Počítačová grafika](/it/reference/maturitni-okruhy/#7-počítačová-grafika) | [pojmy, rozdělení, barevné modely, formáty, rastr × vektor](/it/grafika-na-pc/01-pocitacova-grafika-a-software/), software: [GIMP](/it/grafika-na-pc/03-rastrova-grafika-gimp/), [Zoner Callisto](/it/grafika-na-pc/02-vektorova-grafika/), [Blender](/it/grafika-na-pc/05-blender-zaklady-3d-modelovani/) |

Příklad na výpočet datové velikosti obrázku žádná stránka zatím nerozebírá – postup je výše v [Co si určitě zapamatovat](#co-si-určitě-zapamatovat).

## Co je jen okrajové

- **Ovládání konkrétního editoru** (klávesové zkratky, kde je která nabídka, instalace Zoner Callisto) – naučí se prací, ne z textu.
- **Typy výplní a stínů** ve vektorovém editoru – stačí vědět, že existují přechody a průhlednost.
- **Ceny 3D zařízení a programů** – rychle zastarávají.
- **Simulace tekutin a kouře v Blenderu** – nad rámec maturitního okruhu.
- Starší formáty WMF a PostScript – stačí vědět, že je nahradily SVG a PDF.
