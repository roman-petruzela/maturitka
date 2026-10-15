---
title: "Barevné modely, rozlišení a správa barev"
order: 6
tags: ["doplněno"]
---
Jak počítač popisuje barvu, jak jemně je obrázek rozložen na body a proč stejný obrázek vypadá na monitoru a na papíře jinak.

## Barevné modely

**Barevný model** určuje, z jakých základních barev se ostatní barvy skládají a jak se míchají.

### RGB – aditivní míchání

- složky **červená (R), zelená (G), modrá (B)**, každá obvykle 0–255 (8 bitů)
- barvy vznikají **sčítáním světla**: čím vyšší hodnoty, tím světlejší výsledek; `(0, 0, 0)` = černá, `(255, 255, 255)` = bílá, stejné hodnoty všech složek = odstín šedi
- použití: všechno, co **svítí** – monitory, displeje, projektory, digitální fotoaparáty a skenery, web
- zápis na webu: `rgb(255, 128, 0)` nebo šestnáctkově `#FF8000`

**RGBA** přidává čtvrtý kanál **alfa** – neprůhlednost bodu: 0 (nebo 0 %) = zcela průhledný, 255 (1, 100 %) = zcela neprůhledný. Uplatní se při skládání více obrázků přes sebe; průhlednost ukládá např. formát PNG.

### CMYK – subtraktivní míchání

- složky **azurová (Cyan), purpurová (Magenta), žlutá (Yellow)** a **černá (Key)**, udávají se v procentech pokrytí barvou
- barvy vznikají **odečítáním**: barva na papíře pohlcuje část dopadajícího světla a odráží zbytek; smícháním C, M a Y by teoreticky vznikla černá, ve skutečnosti jen tmavě hnědá – proto se tiskne zvláštní černá, která je i levnější a ostřejší pro text
- použití: **tisk** – tiskárny, ofsetový tisk časopisů a knih, vizitky
- doplňkové barvy: azurová je doplňková k červené (odráží všechno světlo kromě červeného), purpurová k zelené, žlutá k modré

### HSV / HSL – podle vnímání člověka

- **odstín (Hue)** – poloha na barevném kole 0–360° (0 červená, 120 zelená, 240 modrá)
- **sytost (Saturation)** – od šedé k čisté barvě
- **jas / světlost (Value / Lightness)** – od černé ke světlé
- použití: výběr barvy v grafických programech, posuvníky „Odstín–sytost“; snadno se v něm dělají světlejší a tmavší varianty téže barvy

### Stupně šedi a další

- **stupně šedi** – jeden kanál, obvykle 256 odstínů; převod z barevného obrázku nebere prostý průměr složek, protože oko je nejcitlivější na zelenou a nejméně na modrou – používá se vážený součet, např. $Y = 0{,}299R + 0{,}587G + 0{,}114B$
- **indexované barvy** – obrázek má paletu (nejvýše 256 barev) a každý bod nese jen číslo barvy z palety (GIF)
- **Lab** – model nezávislý na zařízení, používá se uvnitř programů při převodech mezi RGB a CMYK

## Rozlišení

**Pixel** (picture element) je nejmenší bod rastrového obrázku s jedinou barvou.

- **rozměr obrázku v pixelech** – např. 1920 × 1080 px; určuje, jak velký je obrázek na obrazovce
- **rozlišení (DPI / PPI)** – počet bodů na palec (1″ = 2,54 cm); určuje, jak velký bude obrázek **při tisku**: fotografie 1800 × 1200 px vytištěná při 300 DPI měří 6 × 4 palce, tj. asi 15 × 10 cm
- obrázek 1 × 1 palec při 100 DPI má 100 · 100 = 10 000 bodů, při 300 DPI 90 000 bodů
- orientační hodnoty: web 72–96 PPI (rozhoduje jen rozměr v pixelech), kancelářský tisk 150–300 DPI, kvalitní tisk fotografií 300 DPI

**Převzorkování** (zvětšení obrázku v programu) nové detaily nepřidá – program body dopočítá (interpoluje) a obrázek je neostrý. Zmenšení kvalitu nepoškodí.

## Barevná hloubka a datová velikost

**Barevná hloubka** = počet bitů na jeden pixel.

| Hloubka | Počet barev | Použití |
| --- | --- | --- |
| 1 bit | 2 (černá, bílá) | perokresba, fax |
| 8 bitů | 256 | stupně šedi, indexované barvy (GIF) |
| 16 bitů | 65 536 | starší displeje (High Color) |
| 24 bitů | 16,7 milionu (2²⁴) | běžná fotografie (True Color, 3 × 8 bitů) |
| 32 bitů | 16,7 milionu + průhlednost | RGBA |

**Velikost nekomprimovaného obrázku** = šířka × výška × barevná hloubka. Fotografie 1920 × 1080 px při 24 bitech (3 bajty na pixel): $1920 \cdot 1080 \cdot 3 = 6\,220\,800$ B ≈ 5,9 MiB. Obrázek 800 × 600 px ve 24 bitech má asi 1,4 MB – tolik zabere jako BMP bez komprese; jako JPEG jen zlomek. Proto se obrázky ukládají [komprimovaně](/it/grafika-na-pc/07-graficke-formaty-a-komprese/).

## Správa barev

Každé zařízení zobrazí nebo vytiskne jen určitou množinu barev – **gamut**. Gamut monitoru (RGB) je jiný než gamut tiskárny (CMYK); syté zelené a modré z monitoru tiskárna nevytiskne. Proto vypadá vytištěný obrázek jinak než na obrazovce.

- **ICC profil** – soubor s popisem barevného chování konkrétního zařízení (podle standardu konsorcia ICC, International Color Consortium); program podle něj převádí barvy mezi zařízeními. Profil může být vložen i přímo do souboru obrázku (sRGB, Adobe RGB).
- **Kalibrace** – nastavení zařízení tak, aby jeho barvy co nejvíce odpovídaly skutečnosti. Kalibruje se monitor, projektor, tiskárna i skener; absolutní shody nelze dosáhnout, jen se přiblížit.

**Postup kalibrace monitoru** (bez kalibrační sondy):

1. zobrazit kalibrační obrazec přes celou obrazovku a mít ho i vytištěný
2. kontrast nastavit na 100 %
3. jas snižovat, dokud bílá není „přepálená“ – světlé odstíny se musí od sebe lišit
4. černá musí zůstat černá, ne šedá
5. nastavit barevnou teplotu bílé, obvykle 6500 K (standard pro sRGB)
6. přesněji: program grafické karty nebo **kalibrační sonda**, která barvy změří a vytvoří ICC profil

## Shrnutí

- RGB = světlo, sčítání, monitory; CMYK = barvy na papíře, odečítání, tisk; HSV = odstín, sytost, jas.
- Alfa kanál: 0 průhledné, maximum neprůhledné.
- Rozměr v pixelech rozhoduje na obrazovce, DPI při tisku (300 DPI pro fotografie).
- Velikost = šířka × výška × hloubka; 24 bitů = 16,7 milionu barev.
- Gamut, ICC profil, kalibrace – aby barvy na monitoru odpovídaly tisku.
