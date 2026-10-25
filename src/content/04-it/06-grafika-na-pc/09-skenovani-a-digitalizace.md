---
title: "Skenování a digitalizace"
order: 9
tags: ["doplněno"]
---
**Skenování** je převod předlohy (papírového dokumentu, fotografie, filmu) do elektronické podoby – nejčastěji do rastrového obrázku. Důvody: archivace, sdílení, rychlejší vyhledání informací, další úprava v počítači nebo převod textu na upravitelný text.

## Skener

**Skener** je vstupní zařízení, které předlohu snímá světlem a **digitalizuje** ji: světlo odražené od předlohy (nebo prošlé filmem) dopadá na řadu světlocitlivých prvků (CCD nebo CIS), jejichž signál se převede na čísla – barvy jednotlivých bodů.

**Dělení skenerů**

- podle **konstrukce** – stolní (deskový, nejrozšířenější, předloha leží na skle), ruční, s podavačem papíru (rychlé skenování více stran), bubnový (profesionální, nejvyšší kvalita), filmový (diapozitivy a negativy), knižní, velkoformátový
- podle **předlohy** – 2D (dokumenty, fotografie, čtečky čárových kódů) a **3D skenery** (vytvoří prostorový model předmětu)
- podle **barevnosti** – barevné a monochromatické
- podle **připojení** – USB, síť (Wi-Fi, Ethernet); často je skener součástí **multifunkčního zařízení** s tiskárnou a kopírkou

**Parametry**

- **optické rozlišení** (DPI) – skutečný počet bodů, které snímač rozliší; běžně 1200–4800 DPI
- **interpolované (softwarové) rozlišení** – dopočítané body; vyšší číslo na krabici, ale bez nových detailů
- **barevná hloubka** – kolik bitů na bod skener rozliší (obvykle 24 a více bitů)
- **velikost skenovací plochy** – A4, A3
- rychlost, připojení, funkce pro úpravu obrazu

## Jak skenovat

**Rozlišení** se volí podle toho, k čemu obrázek poslouží:

| Účel | Rozlišení |
| --- | --- |
| obrázek na web nebo do prezentace | 72–150 DPI (rozhoduje velikost v pixelech) |
| menší ilustrace do dokumentu | 150 DPI |
| rozpoznání textu (OCR) | 300 DPI (minimálně 200) |
| tisk ve stejné velikosti jako předloha (1 : 1) | 300 DPI |
| tisk ve zvětšení | úměrně víc – dvojnásobné zvětšení vyžaduje 600 DPI |
| diapozitivy a negativy | 2400–4800 DPI |

**Barevná hloubka** – barevné předlohy 24 bitů (16,7 milionu barev stačí, oko jich nerozliší víc), černobílé fotografie ve stupních šedi (8 bitů), text a perokresba černobíle (1 bit) – soubory jsou nejmenší.

**Formát výstupu**

- **TIFF** – pro tisk a další úpravy (bezztrátový)
- **PNG** – archivace dokumentů s textem a obrázky, podklad pro OCR
- **JPEG** – fotografie na web, malé soubory
- **PDF** – vícestránkové dokumenty, často rovnou s rozpoznaným textem

**Postup**

1. Nainstalovat ovladač a program ke skeneru (nebo použít rozhraní systému – Windows Fax a skener, v Linuxu SANE / Simple Scan; skenovat umí i GIMP).
2. Položit předlohu lícem na sklo, zarovnat k okraji, sklo i předlohu očistit od prachu.
3. **Náhled** – skener nejdřív rychle nasnímá celou plochu v nízké kvalitě.
4. V náhledu vybrat **oblast**, nastavit rozlišení, barevný režim a případné korekce.
5. **Skenovat** – teprve teď proběhne pomalé snímání vybrané oblasti v plné kvalitě.
6. Uložit ve vhodném formátu, případně doladit v grafickém editoru (ořez, narovnání, jas a kontrast).

Snímání ve dvou fázích šetří čas – plné rozlišení se počítá jen pro vybranou oblast.

## Funkce skenovacího softwaru

- **odstranění moaré** (descreen)
- odstranění prachu a škrábanců (u filmů pomocí infračerveného kanálu)
- **doostření** (neostrá maska)
- vylepšení barev, redukce zrnění
- automatické rozdělení plochy na více fotografií
- skenování filmů a diapozitivů

## Nedostatky skenování

- výsledek je vždy o něco horší než originál
- **barevná věrnost** – skener, monitor i tiskárna vidí barvy jinak; pomáhá kalibrace (viz [správa barev](/it/grafika-na-pc/06-barevne-modely-rozliseni-a-sprava-barev/#správa-barev))
- **moaré** – vzorování, které předloha ve skutečnosti neobsahuje. Vzniká **interferencí** dvou pravidelných struktur: rastru tištěné předlohy (časopisy a knihy se tisknou z drobných bodů) a pravidelné mřížky bodů snímače. Omezí ho funkce descreen, mírné rozostření a zmenšení, skenování ve vyšším rozlišení nebo pootočení předlohy o několik stupňů.

## OCR

**OCR (Optical Character Recognition, optické rozpoznávání znaků)** převede obrázek textu na skutečný text, který lze upravovat a prohledávat. Výsledek je třeba zkontrolovat, zvlášť u diakritiky a špatně čitelných předloh. Programy: Tesseract (open source, používá ho řada dalších nástrojů), ABBYY FineReader (komerční), funkce OCR v aplikacích skenerů, v PDF editorech a v mobilních aplikacích.

## Shrnutí

- Skener digitalizuje předlohu na rastrový obrázek; rozhoduje optické, ne interpolované rozlišení.
- 300 DPI pro tisk 1 : 1 a OCR, méně pro web, více pro zvětšení a filmy.
- Náhled → výběr oblasti → skenování; TIFF/PNG pro další práci, JPEG pro web.
- Moaré = interference rastru předlohy a snímače, odstraní ho descreen.
