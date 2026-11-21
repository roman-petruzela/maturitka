---
title: "Barevné modely, rozlišení a správa barev"
order: 6
---
Jak počítač popisuje barvu, jak jemně je obrázek rozložen na body a proč vypadá na monitoru jinak než na papíře.

## Barevné modely

**Barevný model** = ze kterých základních barev se ostatní skládají a jak se míchají.

### RGB – aditivní míchání

- **červená (R), zelená (G), modrá (B)**, každá 0–255 (8 b)
- **sčítání světla**: `(0, 0, 0)` černá, `(255, 255, 255)` bílá, stejné složky = šedá
- vše, co **svítí** – monitory, projektory, foťáky, skenery, web
- web: `rgb(255, 128, 0)` = `#FF8000`

**RGBA** = + kanál **alfa** (neprůhlednost): 0 = průhledný, 255 (100 %) = neprůhledný. Skládání obrázků; ukládá PNG.

### CMYK – subtraktivní míchání

- **Cyan, Magenta, Yellow + Key (černá)**, v % pokrytí
- **odečítání**: barva pohlcuje část světla, zbytek odráží; C + M + Y dá jen tmavě hnědou → zvláštní černá (levnější, ostřejší text)
- **tisk** – tiskárny, ofset, vizitky
- doplňkové: azurová ↔ červená, purpurová ↔ zelená, žlutá ↔ modrá

### HSV / HSL – podle vnímání člověka

- **Hue (odstín)** – úhel na barevném kole 0–360° (0 červená, 120 zelená, 240 modrá)
- **Saturation (sytost)** – od šedé k čisté barvě
- **Value / Lightness (jas)** – od černé ke světlé
- výběr barvy v programech; snadné světlejší/tmavší varianty

### Stupně šedi a další

- **stupně šedi** – 1 kanál, 256 odstínů; převod váženě (oko nejcitlivější na zelenou): $Y = 0{,}299R + 0{,}587G + 0{,}114B$
- **indexované barvy** – paleta ≤ 256 barev, bod nese jen číslo barvy (GIF)
- **Lab** – nezávislý na zařízení; uvnitř programů při převodu RGB ↔ CMYK

## Rozlišení

**Pixel** = nejmenší bod rastru s jednou barvou.

- **rozměr v pixelech** (1920 × 1080) – velikost na obrazovce
- **DPI / PPI** – body na palec (1″ = 2,54 cm) – velikost **při tisku**: 1800 × 1200 px při 300 DPI = 6 × 4″ ≈ 15 × 10 cm
- 1 × 1″ při 100 DPI = 10 000 bodů, při 300 DPI = 90 000 bodů
- web 72–96 PPI (rozhodují pixely), kancelář 150–300 DPI, fotky 300 DPI

**Převzorkování** (zvětšení) detaily nepřidá – body se dopočítají (interpolace) → neostré. Zmenšení kvalitu nepoškodí.

## Barevná hloubka a datová velikost

**Barevná hloubka** = bitů na pixel.

| Hloubka | Barev | Použití |
| --- | --- | --- |
| 1 b | 2 | perokresba, fax |
| 8 b | 256 | šedá, indexované (GIF) |
| 16 b | 65 536 | High Color |
| 24 b | 16,7 mil. (2²⁴) | True Color, 3 × 8 b |
| 32 b | 16,7 mil. + alfa | RGBA |

```formulas
{ "items": [
  { "label": "velikost nekomprimovaného obrázku", "tex": "V = \\text{šířka} \\cdot \\text{výška} \\cdot \\text{hloubka}", "note": "hloubku v bitech → výsledek / 8 = bajty" },
  { "label": "počet barev", "tex": "N = 2^{\\text{hloubka}}", "note": "24 b → $2^{24} \\approx 16{,}7$ mil." }
] }
```

**Příklad.** 1920 × 1080 px, 24 b (3 B/px): $1920 \cdot 1080 \cdot 3 = 6\,220\,800$ B ≈ 5,9 MiB. Obrázek 800 × 600 ve 24 b ≈ 1,4 MB jako BMP, jako JPEG zlomek. Proto [komprese](/it/grafika-na-pc/07-graficke-formaty-a-komprese/).

**Zkus sám:** obrázek 1024 × 768 px v 256 barvách – kolik bajtů? ||256 barev = 8 b = 1 B/px → 1024 · 768 = 786 432 B = 768 KiB||

## Správa barev

**Gamut** = množina barev, kterou zařízení umí. Monitor (RGB) ≠ tiskárna (CMYK); syté zelené a modré tiskárna nevytiskne → tisk vypadá jinak.

- **ICC profil** – popis barev konkrétního zařízení (standard ICC); podle něj se barvy převádějí. Může být vložen v souboru (sRGB, Adobe RGB).
- **Kalibrace** – nastavení zařízení, aby barvy co nejvíc odpovídaly realitě (monitor, projektor, tiskárna, skener); jen přiblížení.

**Postup kalibrace monitoru** (bez sondy):

1. kalibrační obrazec na celou obrazovku + vytištěný
2. kontrast 100 %
3. jas snižovat, dokud bílá není přepálená (světlé odstíny rozlišitelné)
4. černá musí být černá, ne šedá
5. teplota bílé 6500 K (sRGB)
6. přesněji: program grafické karty nebo **kalibrační sonda** → ICC profil

## Shrnutí

- RGB = světlo, sčítání, monitory; CMYK = papír, odečítání, tisk; HSV = odstín, sytost, jas.
- Alfa: 0 průhledné, max neprůhledné.
- Na obrazovce rozhodují pixely, při tisku DPI (300 pro fotky).
- Velikost = šířka × výška × hloubka; 24 b = 16,7 mil. barev.
- Gamut, ICC profil, kalibrace – aby monitor odpovídal tisku.
