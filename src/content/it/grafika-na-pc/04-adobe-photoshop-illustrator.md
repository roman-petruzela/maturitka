---
title: "Praktická práce v Adobe Photoshop a Illustrator"
order: 4
tags: ["doplněno"]
---

## Adobe Photoshop (rastrová grafika)

- Photoshop – standardní nástroj pro úpravu rastrové (bitmapové) grafiky – fotografie, retuše, kompozice z více obrázků, příprava grafiky pro web i tisk
- **Vrstvy (Layers)** – obrázek se skládá z víc na sobě položených vrstev, každá se dá upravovat samostatně, aniž by se zasahovalo do ostatních; pořadí vrstev určuje, co je „nahoře“ a co „dole“
	- **Režimy prolnutí (Blend modes)** – určují, jak se barvy vrstvy kombinují s vrstvami pod ní (např. Multiply ztmavuje, Screen zesvětluje, Overlay zvyšuje kontrast) – používají se pro efekty jako stín, světlo, textury
- **Výběrové nástroje** – kouzelná hůlka (Magic Wand, vybere souvislou oblast podobné barvy), laso (Lasso, ruční výběr tvaru), rychlý výběr (Quick Selection, „maluje“ se výběr štětcem podle hran objektu)
- **Retušování** – klonovací razítko (Clone Stamp, kopíruje obsah z jednoho místa obrázku na jiné), healing brush (podobné klonování, ale automaticky doladí barvu a texturu okolí, vhodné na odstranění vad pleti nebo prachu na skenu)
- **Masky vrstev (Layer masks)** – nedestruktivní způsob, jak skrýt část vrstvy (černá barva na masce = neviditelné, bílá = viditelné), aniž by se obsah vrstvy trvale smazal; kdykoliv se dá maska upravit zpět
- **Úprava barev** – křivky (Curves, přesné nastavení jasu/kontrastu v jednotlivých tónových oblastech), úrovně (Levels, nastavení černého/bílého bodu a středních tónů histogramem)
- **Export pro web (Save for Web)** – export s náhledem výsledné velikosti souboru a kvality; volba formátu podle typu obrázku (JPEG pro fotografie s plynulými přechody barev, PNG pro grafiku s ostrými hranami nebo průhledností) a míry komprese jako kompromis mezi kvalitou a velikostí souboru

## Adobe Illustrator (vektorová grafika)

- Illustrator – nástroj pro vektorovou grafiku – loga, ikony, ilustrace, sazba pro tisk; na rozdíl od Photoshopu je obsah popsaný matematickými křivkami, takže se dá zvětšit na libovolnou velikost beze ztráty kvality
- **Bézierovy křivky a nástroj pero (Pen Tool)** – základní nástroj pro kreslení přesných tvarů; klikáním se umisťují kotevní body (anchor points), tažením myši u bodu se vytváří zakřivený segment ovládaný pomocí směrových „páček“ (handles)
- **Tvarové nástroje a Pathfinder** – základní geometrické tvary (obdélník, elipsa, mnohoúhelník) se dají kombinovat booleovskými operacemi v panelu Pathfinder
	- **Sjednocení (Unite)** – spojí víc tvarů do jednoho
	- **Průnik (Intersect)** – ponechá jen část, kde se tvary překrývají
	- **Rozdíl (Minus Front)** – odečte horní tvar od spodního (typicky se tak dělají „díry“, např. písmeno O)
- **Text na křivce** – text se dá napojit na libovolnou nakreslenou křivku a kopíruje pak její tvar (např. text obtékající kruh v logu)
- **Vrstvy a skupiny** – stejně jako v Photoshopu lze obsah organizovat do vrstev; **skupina (Group)** navíc spojí víc objektů tak, aby se s nimi dalo pracovat (přesouvat, škálovat) jako s jedním celkem
- **Export** – SVG (vektorový formát pro web, zůstává ostrý při libovolném přiblížení), PDF (pro tisk, zachovává vektorová data a je standardem pro předtiskovou přípravu), případně rastrový export (PNG/JPEG) pro použití mimo vektorové nástroje

## Kdy použít co

- Fotografie, retuš, kompozice z fotek → Photoshop (rastr)
- Logo, ikona, ilustrace, cokoliv, co se bude zobrazovat v různých velikostech → Illustrator (vektor)
- Typický pracovní postup u loga na web – navrhne a vyexportuje se v Illustratoru jako SVG/PNG, dál se případně dolaďuje (stín, textura na pozadí) v Photoshopu
