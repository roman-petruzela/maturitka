---
title: "Grafické formáty a komprese"
order: 7
---
Formát určuje, jak je obrázek uložen: rastr nebo vektor, komprese, počet barev, průhlednost, animace, vrstvy. Volí se podle toho, co se s obrázkem bude dít dál.

## Komprese

- **Bezeztrátová** – přesně obnovitelná (např. opakující se body se uloží jednou + počet). Plochy jedné barvy, text, další úpravy. PNG, GIF, TIFF.
- **Ztrátová** – vynechá, čeho si oko nevšimne → mnohem menší soubor. Originál nejde obnovit, každé uložení zhorší kvalitu. Vyšší komprese = menší soubor, víc **artefaktů** (kostičky, šmouhy u hran). JPEG, ztrátový WebP.

## Rastrové formáty

| Formát | Komprese | Barvy | Průhlednost | Animace | Typické použití |
| --- | --- | --- | --- | --- | --- |
| **JPEG** (`.jpg`, `.jpeg`) | ztrátová | 24 bitů | ne | ne | fotografie, web, digitální fotoaparáty |
| **PNG** | bezztrátová | až 24 bitů + alfa | ano (plynulá) | ne (jen rozšíření APNG) | loga, ikony, snímky obrazovky, grafika s textem, web |
| **GIF** | bezztrátová | max. 256 (paleta) | ano (jen zapnuto / vypnuto) | ano | jednoduché animace, malé ikony |
| **WebP**, **AVIF** | ztrátová i bezztrátová | 24 bitů + alfa | ano | ano | moderní web – menší soubory než JPEG i PNG |
| **TIFF** | bez komprese nebo bezztrátová | až 48 bitů, umí CMYK | ano | ne | tisk, archivace, skenování; více obrázků v jednom souboru |
| **BMP** | obvykle žádná | 1–24 bitů | ne | ne | jednoduchý formát Windows, nehodí se na web (velké soubory) |
| **RAW** | – | „surová“ data snímače | – | – | fotoaparáty – maximum informací pro pozdější úpravu |
| **PSD**, **XCF** | – | vše | ano | – | nativní formáty Photoshopu a GIMPu – zachovají vrstvy, masky, text |

PNG = nástupce GIFu bez limitu 256 barev. JPEG se nehodí na text, perokresbu a ikony (šmouhy u hran).

## Vektorové formáty

| Formát | Popis |
| --- | --- |
| **SVG** | otevřený formát, popis obrazu v XML; přímo ho zobrazí webový prohlížeč, lze ho stylovat CSS a animovat |
| **AI** | nativní formát Adobe Illustratoru, profesionální grafika, umí CMYK |
| **CDR** | nativní formát CorelDRAW |
| **EPS** | Encapsulated PostScript – univerzální výměnný formát pro tisk, nese vektory i vložené rastry |
| **PDF** | dokument pro tisk i obrazovku, může obsahovat vektory, rastry i písma; dnešní standard předávání do tiskárny |
| **WMF / EMF** | vektorové formáty Windows (kliparty, obrázky v dokumentech Office), neumí CMYK |
| **DWG**, **DXF** | formáty CAD programů (AutoCAD); DXF slouží k výměně výkresů mezi programy |

## Konverze

**Konverze** = převod mezi formáty – v editoru (*Soubor → Exportovat jako*) nebo hromadně (IrfanView, XnView).

- do JPEG nevratně – originál nechat v PNG, TIFF, PSD, XCF
- rastr → vektor (**vektorizace, trasování**) obrys jen odhaduje; loga ano, fotky ne
- vektor → rastr (**rasterizace**) snadné, ale pak už nejde zvětšovat
- RGB → CMYK mění syté barvy – viz [gamut](/it/grafika-na-pc/06-barevne-modely-rozliseni-a-sprava-barev/#správa-barev)

## Jak formát vybrat

- **fotografie na web** – JPEG (kvalita kolem 75–85 %), lépe WebP
- **logo, ikona, schéma, snímek obrazovky** – SVG, pokud je to vektor; jinak PNG
- **průhledné pozadí** – PNG (plynulá průhlednost) nebo SVG; JPEG průhlednost neumí
- **jednoduchá animace** – GIF, moderněji krátké video nebo animované WebP
- **tisk** – PDF, TIFF nebo EPS v CMYK s rozlišením 300 DPI
- **rozpracovaná práce** – nativní formát programu (PSD, XCF, AI), aby zůstaly vrstvy

## Programy pro rastrovou grafiku

| Program | Licence | Poznámka |
| --- | --- | --- |
| Malování (Paint) | součást Windows | jen jednoduché úpravy |
| IrfanView, XnView | freeware | prohlížení, hromadné konverze a změny velikosti |
| GIMP | open source | plnohodnotný editor s vrstvami a rozšířeními |
| Adobe Photoshop | komerční (předplatné) | profesionální standard |
| Zoner Photo Studio | komerční | správa a úprava fotografií |

Rozhoduje cena, čeština, ovládání, plug-iny a podporované formáty.

## Shrnutí

- Ztrátová komprese (JPEG) = malé soubory, horší kvalita; bezztrátová (PNG, GIF, TIFF) = přesná data.
- JPEG fotografie, PNG grafika s průhledností, GIF animace a 256 barev, TIFF tisk, SVG vektor na web.
- Originál uchovat v nativním nebo bezztrátovém formátu, pro web exportovat menší kopii.
