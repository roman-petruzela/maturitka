---
title: "Grafické formáty a komprese"
order: 7
tags: ["doplněno"]
---
Formát souboru určuje, jak je obrázek uložen – jestli jako mřížka bodů, nebo jako popis objektů, jakou kompresí, s kolika barvami a zda umí průhlednost, animaci nebo vrstvy. Volba formátu záleží na tom, co se s obrázkem bude dít dál.

## Komprese

- **Bezztrátová** – data se zhustí tak, že je lze přesně obnovit (např. opakující se stejné body se uloží jednou s počtem opakování). Hodí se pro grafiku s plochami jedné barvy, text a obrázky, které se budou dál upravovat. PNG, GIF, TIFF.
- **Ztrátová** – vynechá detaily, kterých si oko nevšimne (jemné barevné přechody), a soubor je mnohem menší. Původní data se už nedají obnovit a každé další uložení kvalitu zhorší. Míra komprese se volí – vyšší komprese = menší soubor a horší kvalita (kostičky, „artefakty“ kolem ostrých hran). JPEG, WebP ve ztrátovém režimu.

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

PNG vznikl jako nástupce GIFu bez omezení na 256 barev. JPEG se nehodí na perokresbu, text a ikony – kolem ostrých hran vytváří rozmazané šmouhy.

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

**Konverze** je převod obrázku z jednoho formátu do jiného – v grafickém editoru (*Soubor → Exportovat jako*) nebo hromadně v prohlížečích jako IrfanView či XnView.

- převod do ztrátového formátu (JPEG) je nevratný – originál je dobré uschovat v bezztrátovém nebo nativním formátu (PNG, TIFF, PSD, XCF)
- převod rastru na vektor (**vektorizace, trasování**) obrys jen odhaduje; funguje dobře u log a perokresby, ne u fotografií
- převod vektoru na rastr (**rasterizace**) je snadný, ale výsledek už nejde bez ztráty zvětšovat
- při převodu z RGB do CMYK (pro tisk) se mohou syté barvy změnit – viz [gamut](/it/grafika-na-pc/06-barevne-modely-rozliseni-a-sprava-barev/#správa-barev)

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

Při výběru rozhoduje cena, dostupnost, česká lokalizace, ovládání, možnosti rozšíření (plug-iny) a formáty, které program umí.

## Shrnutí

- Ztrátová komprese (JPEG) = malé soubory, horší kvalita; bezztrátová (PNG, GIF, TIFF) = přesná data.
- JPEG fotografie, PNG grafika s průhledností, GIF animace a 256 barev, TIFF tisk, SVG vektor na web.
- Originál uchovat v nativním nebo bezztrátovém formátu, pro web exportovat menší kopii.
