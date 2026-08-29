---
title: "Grafické formáty, rozlišení, barevné modely, rastr X vektor"
order: 2
source: "MATURITA HADR/IT/18. Grafické formáty, rozlišení, barevné modely, rastr X vektor.docx"
---
- Počítačová grafika je obor výpočetní techniky, který používá počítače k tvorbě umělých grafických objektů a na úpravu fotografií nasnímaných z reálného světa

__Rastrová \(bitmapová\) grafika__

- Bitmapový obrázek je tvoře pravidelnou mřížkou z bodů, přičemž každý bod má přiřazenou určitou barvu
- Bitmapový obrázek je soubor malých čtverečků zvaných pixely, které dohromady vytvářejí obrázek
- Tato grafika je náročná na paměť z tohoto důvodu se používá komprese, která umožňuje velikost obrázku zmenšit tím, že stejné nebo velmi podobné body se spojí v jeden celek
- Nevýhodou této grafiky je nemožnost měnit velikost obrázku, aniž by tím došlo ke zhoršení jeho kvality
- Výhodou této grafiky je snadnost pořízení obrázku pomocí fotoaparátu nebo skeneru
- Rozlišení obrázku – počet bodů na jednotku vzdálenosti; používaná jednotka DPI popisuje potřebné množství bodů na délku jednoho palce; hustota barevných bodů
- Rozlišení monitoru – počet pixelů, které může být zobrazeno na obrazovce, uvádí se jako počet sloupců x počet řádků
- Barevná hloubka – každý z jednotlivých bodů může nabývat jednu z barev zvolené barevné palety \(RGB\), která obsahuje 16,7 milionu barev; na webu se nejčastěji setkáváme s paletou 256 barev
- Formáty rastrových obrázků – dnes existuje více než 50 rozšířených formátů
	- JPEG – v dnešní době je používán nejčastěji; i při kompresi zachovává dostatek informací v obrázku, ztráta kvality není tak postřehnutelná; vhodný pro plynule přechody mezi barvami na obrázku, každým dalším uložením dochází ke komprimaci obrázku a tím zhoršení kvality
	- GIF – jeden z nejoblíbenějších a nejstarších formátů; velké zmenšení obejmu dat; více obrázků v jednom souboru; vhodný pro přenos obrázku po síti; vhodný pro ostré hrany; lze použít i pro malé a krátké animace; maximální počet barev je 256 v jednom obrázku
	- PNG – primárně zaměřen na přenos obrazu v síti; schopen ukládat obraz v mnoha barevných rozlišeních; bezztrátově ukládat obrazy v barevném rozlišení true color; dosažený kompresní poměr není tak výrazný jako u JPEG
	- BMP – nejstarší a nejjednodušší formát bitmapového obrázku; použitelnost na webu je poměrně špatná a tento formát se již v podstatě na stránkách nepoužívá; velmi velké výsledné soubor a mnohdy nepomůže ani zmíněná komprese
- Adobe Photoshop, Zoner Photo studio, Gimp, Adobe Lightroom

__Vektorová grafika__

- Obraz je reprezentován pomocí geometrických objektů – body, přímky, křivky, polygony
- Práce s objekty, které jsou samostatné a matematicky definované
- Základem vektorové grafiky je matematika – obrázek je tvořen z vektorů \(křivek\) – Bézierovy křivky
- Řídící body – křivky deformují směrem a velikostí
- Výhodou je její nezávislost na rastru – při zvětšování objektů nedochází ke zkreslení
- Velikost souborů je výrazně menší než u rastrové
- Je v podstatě bezztrátová – nepodléhá žádné kompresi; je možné ji libovolné zmenšování bez ztráty kvaliy
- Používá se, když potřebujeme vysokou přesnost – tvorba vizitek, log, diagramů, grafů, reklamních materiálů
- Formáty vektorových obrázků
	- SVG – umožňuje zobrazovat dvourozměrnou grafiku s podporou interaktivity animací; myšlen nejprve pro použití na webu; je založen na XML proto je možné v souborech vyhledávat, indexovat a komprimovat je; jelikož je XML textový soubor, lze tvořit a upravovat SVG grafiku i v obyčejném textovém editoru
	- PostScript \- \.ps \.eps – je značkovací jazyk a formát vektorové grafiky, který je programovací jazyk určeny ke grafickému popisu tisknutelných dokumentů; považován za standard pro dražší tiskárny; dnes nahrazen formátem PDF
	- WMF – vektorový grafický formát, spolehlivý černobíle grafice a není vhodný pro barevnou grafiku, lze do něj umístit Bitmapy, což patří k jeho přednostem
	- \.ai, \.cdr, \.zmf – jsou koncovkami projektů, které lze tvořit v grafických programech; Adobe illustrator \.ai; Corel \.cdr; Zoner callisto \.zmf; je nutné zkontrolovat správnost grafiky, protože často se při konverzi a načítání grafiky mohou některé nepodporované prvky ztratit
- CorelDRAW, Inkscape, Zoner Callisto, Adobe Illustrator

Barevné modely

- RGB – vyzařovací model – podobné jako míchání jako u světla
	- Primární – červená zelená modrá
	- Smícháním všech barev vzniká barva bílá
	- Zapisujeme buď šestnáctkovou soustavou nebo RGB \(255,255,255\)
- CMYK – princip míchání v malířství a tisku
	- V praxi namíchaná černá není černá, proto se přidává ještě černá barva
	- Primární – azurová purpurová žlutá
