---
title: "Počítačová grafika — pojmy a software"
order: 1
source: "IT/15.–18. GIMP, Zoner, SketchUp; Grafické formáty...; grafika/01_Instalace_Zoner_Callisto_5_Free.pdf (sloučeno)"
---

Počítačová grafika = tvorba umělých obrázků počítačem a úprava fotografií. Dva základní způsoby uložení: **rastr** a **vektor**.

![Zvětšený rastrový kruh složený z pixelů vedle hladkého vektorového kruhu s kotevními a řídicími body Bézierovy křivky](/images/content/it/grafika-na-pc/pojmy/rastr-vektor.webp)

## Rastrová (bitmapová) grafika

Mřížka bodů (**pixelů**), každý má svou barvu.

- **Výhoda** – snadné pořízení (foťák, skener), realistické.
- **Nevýhoda** – zvětšení = ztráta kvality; velké soubory → komprese.
- **Rozlišení** – body na délku, **DPI** = body na palec; u monitoru sloupce × řádky.
- **Barevná hloubka** – kolik barev má bod; RGB 24 b = 16,7 mil. barev, dřív na webu 256.
- **Formáty**: **JPEG** (ztrátový, fotky), **GIF** (256 barev, ostré hrany, animace), **PNG** (bezeztrátový, průhlednost), **BMP** (nekomprimovaný, dnes skoro ne).

## Vektorová grafika

Obraz popsaný matematicky – body, přímky, křivky, polygony; typicky **Bézierovy křivky** s řídicími body.

- **Výhoda** – libovolné zvětšení bez ztráty, malé soubory, objekty zvlášť upravitelné.
- **Nevýhoda** – nejde jen vyfotit, méně realistické barvy.
- Použití: loga, vizitky, diagramy, grafy, reklama.
- **Formáty**: **SVG** (otevřený, XML, web, animace), **PS/EPS** (tiskárny, dnes PDF), **WMF** (jednoduchý), programové `.ai` (Illustrator), `.cdr` (CorelDRAW), `.zmf` (Zoner Callisto). Při převodu hlídat ztrátu nepodporovaných prvků.

## Barevné modely

![RGB: aditivní míchání červené, zelené a modré světla dává bílou; CMYK: subtraktivní míchání azurové, purpurové a žluté dává černou](/images/content/it/grafika-na-pc/pojmy/rgb-cmyk.webp)

- **RGB** – **aditivní** (světlo), obrazovky. Červená + zelená + modrá = bílá. Zápis hex nebo `RGB(255, 255, 255)`.
- **CMYK** – **subtraktivní** (barvy), tisk. Azurová (C), purpurová (M), žlutá (Y); jejich černá není sytá → přidává se černá (K).

## Přehled grafického softwaru

| Program | Typ | Poznámka |
|---|---|---|
| **GIMP** | rastr | zdarma, vrstvy – viz materiál o GIMPu |
| **Adobe Photoshop** | rastr | standard studií, placený |
| **Zoner Photo Studio** | rastr | správa a úprava fotek |
| **Zoner Callisto** | vektor | levný, vizitky, letáky, schémata – viz vektorová grafika |
| **CorelDRAW** | vektor | bohaté nástroje, dražší |
| **Adobe Illustrator** | vektor | profesionální standard, drahý |
| **Inkscape** | vektor | zdarma |
| **SketchUp** | 3D | architektura, strojní návrhy; Free / Pro; `.skp` |
| **Blender** | 3D, animace, rendering | zdarma – viz samostatný materiál |

### Instalace Zoner Callisto (Free)

1. Stáhnout instalátor, registrace e-mailem, typ uživatele „Koncový“.
2. Spustit `.exe` a projít instalací.
3. Po spuštění „Nový dokument“ → editor.

### Praktické poznámky k Adobe Photoshopu a Illustratoru

- **Photoshop** (rastr) – **vrstvy**; **režimy prolnutí** (Multiply ztmaví, Screen zesvětlí, Overlay kontrast); výběry (hůlka, laso, rychlý výběr); retuš (razítko, healing brush); **masky** (černá = skryto, bílá = vidět); křivky/úrovně; export JPEG (fotky) / PNG (ostré hrany, průhlednost).
- **Illustrator** (vektor) – pero (kotevní body + páčky); tvary + Pathfinder (sjednocení, průnik, rozdíl); text na křivce; vrstvy a skupiny; export SVG/PDF (vektor) nebo PNG/JPEG (rastr).
- Volba: fotka, retuš, koláž → Photoshop; logo, ikona, ilustrace v libovolné velikosti → Illustrator.

## Cvičení

- Porovnejte principy rastrové a vektorové grafiky — u kterých typů obrázků (fotografie, logo, mapa, výkres) byste zvolili který přístup a proč?
- Vyjmenujte formáty rastrové a vektorové grafiky a k čemu se typicky hodí.
- Vysvětlete rozdíl mezi modelem RGB a CMYK — proč se na monitoru používá jiný model než v tiskárně?
- Nainstalujte si jeden zdarma dostupný program z tabulky výše (GIMP, Inkscape nebo Zoner Callisto Free) a najděte v něm panel vrstev.
