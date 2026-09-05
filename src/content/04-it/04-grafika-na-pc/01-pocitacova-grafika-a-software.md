---
title: "Počítačová grafika — pojmy a software"
order: 1
source: "MATURITA HADR/IT/15.–18. GIMP, Zoner, SketchUp; Grafické formáty...; grafika/01_Instalace_Zoner_Callisto_5_Free.pdf (sloučeno)"
---

Počítačová grafika je obor výpočetní techniky, který používá počítač k tvorbě umělých grafických objektů a k úpravě fotografií nasnímaných z reálného světa. Rozlišujeme dva základní přístupy k uložení obrázku — **rastrovou** a **vektorovou** grafiku.

## Rastrová (bitmapová) grafika

Obrázek je tvořen pravidelnou mřížkou bodů (**pixelů**), přičemž každý bod má přiřazenou barvu.

- **Výhoda** — snadné pořízení (fotoaparát, skener), realistické zachycení skutečnosti.
- **Nevýhoda** — velikost obrázku nelze zvětšit bez ztráty kvality; vyšší paměťová náročnost, proto se používá komprese.
- **Rozlišení** — počet bodů na jednotku vzdálenosti; **DPI** (dots per inch) udává hustotu bodů na palec. U monitoru se rozlišení udává jako počet sloupců × počet řádků pixelů.
- **Barevná hloubka** — kolik barev může jeden bod nabývat; běžná paleta RGB má 16,7 milionu barev (24 bitů), na webu se dřív často používala paleta 256 barev.
- **Formáty**: **JPEG** (ztrátová komprese, vhodný pro fotografie s plynulými přechody barev), **GIF** (max. 256 barev, vhodný pro ostré hrany a jednoduché animace), **PNG** (bezztrátový, podporuje průhlednost), **BMP** (nekomprimovaný, velké soubory, dnes už se prakticky nepoužívá).

## Vektorová grafika

Obraz je popsán geometrickými objekty (body, přímky, křivky, polygony), které jsou matematicky definované — typicky pomocí **Bézierových křivek** s řídicími body, jež určují jejich tvar a směr.

- **Výhoda** — libovolné zvětšení/zmenšení beze ztráty kvality, malá velikost souboru, s každým objektem lze pracovat odděleně, žádná ztráta kvality při ukládání.
- **Nevýhoda** — složitější pořízení (nelze jen vyfotit), menší barevná realističnost.
- Používá se všude, kde je potřeba vysoká přesnost a škálovatelnost: loga, vizitky, diagramy, grafy, reklamní materiály.
- **Formáty**: **SVG** (otevřený, textový/XML formát pro web, podporuje animace a interaktivitu), **PostScript** (`.ps`/`.eps`, starší standard pro tiskárny, dnes nahrazen PDF), **WMF** (jednoduchý, jen černobílý), a formáty konkrétních programů — `.ai` (Adobe Illustrator), `.cdr` (CorelDRAW), `.zmf` (Zoner Callisto). Při převodu mezi těmito formáty je třeba zkontrolovat, jestli se nějaké nepodporované prvky neztratily.

## Barevné modely

- **RGB** — aditivní (vyzařovací) model používaný na obrazovkách, funguje jako míchání světla. Primární barvy červená, zelená, modrá; smícháním všech vzniká bílá. Zapisuje se šestnáctkově nebo jako `RGB(255, 255, 255)`.
- **CMYK** — subtraktivní model používaný v tisku, funguje jako míchání barev v malířství. Primární barvy azurová (Cyan), purpurová (Magenta), žlutá (Yellow); protože namíchaná černá z těchto tří není dost sytá, přidává se ještě samostatná černá (Key/blacK).

## Přehled grafického softwaru

| Program | Typ | Poznámka |
|---|---|---|
| **GIMP** | rastrový (s částečnou podporou vektoru) | svobodný, zdarma, s vrstvami — viz samostatný materiál o GIMPu |
| **Adobe Photoshop** | rastrový | standard v grafických studiích, placený |
| **Zoner Photo Studio** | rastrový | správa a úprava fotografií |
| **Zoner Callisto** | vektorový | levnější alternativa ke Corelu/Illustratoru, vhodný pro vizitky, letáky, schémata — viz samostatný materiál o vektorové grafice |
| **CorelDRAW** | vektorový | řada kvalitních nástrojů, vyšší cena |
| **Adobe Illustrator** | vektorový | profesionální standard, vyšší cena |
| **Inkscape** | vektorový | svobodný, zdarma |
| **SketchUp** | 3D modelování | architektura, stavební/strojní návrhy, verze Free (soukromé účely) a Pro (komerční, navíc Layout a Style Builder), nativní formát `.skp` |
| **Blender** | 3D modelování, animace, rendering | svobodný, zdarma — viz samostatný materiál |

### Instalace Zoner Callisto (Free)

1. Stáhneme instalátor ze stránky výrobce, při registraci zadáme e-mail a zvolíme typ uživatele „Koncový“.
2. Spustíme stažený `.exe` soubor a projdeme instalací (běžný postup „další, další, dokončit“).
3. Po prvním spuštění zvolíme „Nový dokument“, čímž se dostaneme do vlastního editoru.

### Praktické poznámky k Adobe Photoshopu a Illustratoru

- **Photoshop** (rastr) — **vrstvy (Layers)**, které se dají upravovat nezávisle na sobě; **režimy prolnutí** (Multiply ztmavuje, Screen zesvětluje, Overlay zvyšuje kontrast); výběrové nástroje (kouzelná hůlka, laso, rychlý výběr); retušování (klonovací razítko, healing brush); **masky vrstev** (černá = neviditelné, bílá = viditelné); úprava barev křivkami/úrovněmi; export pro web (JPEG pro fotografie, PNG pro ostré hrany/průhlednost).
- **Illustrator** (vektor) — kreslení Bézierových křivek nástrojem pero (kotevní body + směrové páčky); tvarové nástroje kombinovatelné booleovskými operacemi v panelu Pathfinder (sjednocení, průnik, rozdíl); text na křivce; vrstvy a skupiny objektů; export do SVG/PDF pro zachování vektorových dat, případně do PNG/JPEG jako rastr.
- Typické pravidlo, které nástroj zvolit: fotografie/retuš/koláž z fotek → Photoshop (rastr); logo/ikona/ilustrace v libovolné velikosti → Illustrator (vektor).

## Cvičení

- Porovnejte principy rastrové a vektorové grafiky — u kterých typů obrázků (fotografie, logo, mapa, výkres) byste zvolili který přístup a proč?
- Vyjmenujte formáty rastrové a vektorové grafiky a k čemu se typicky hodí.
- Vysvětlete rozdíl mezi modelem RGB a CMYK — proč se na monitoru používá jiný model než v tiskárně?
- Nainstalujte si jeden zdarma dostupný program z tabulky výše (GIMP, Inkscape nebo Zoner Callisto Free) a najděte v něm panel vrstev.
