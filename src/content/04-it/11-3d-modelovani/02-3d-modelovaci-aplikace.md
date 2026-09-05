---
title: "3D modelovací aplikace (WYSIWYM a WYSIWYG)"
order: 2
tags: ["doplněno"]
---

## Editační techniky WYSIWYM a WYSIWYG

- WYSIWYM (What You See Is What You Mean) – model se vytváří zápisem kódu nebo skriptu, výsledný tvar vzniká až po jeho vyhodnocení (renderu)
	- Příklad – OpenSCAD, kde se model definuje jako kombinace primitivních těles a operací nad nimi zapsaných textově (skript se poté vyhodnotí do 3D tvaru)
	- Výhody – přesná a jednoznačná kontrola nad rozměry a parametry, snadná verzovatelnost (kód lze uložit do systému správy verzí), snadná parametrizace a opakované generování variant modelu, dobrá reprodukovatelnost
	- Nevýhody – vyšší nároky na zvládnutí syntaxe jazyka, méně intuitivní pro začátečníky, chybí okamžitá vizuální zpětná vazba během psaní (model se zobrazí až po přepočítání)
- WYSIWYG (What You See Is What You Get) – model se vytváří přímo graficky, myší, uživatel okamžitě vidí výsledek svých úprav
	- Příklady – SketchUp, Tinkercad, Fusion 360
	- Výhody – intuitivní a rychlé osvojení, okamžitá vizuální kontrola, vhodné pro rychlé prototypování a méně zkušené uživatele
	- Nevýhody – obtížnější přesné a opakovatelné nastavení parametrů, náročnější úpravy složitých parametrických závislostí, horší verzovatelnost binárních souborů

## Tvorba a úprava objektů kódem (WYSIWYM)

- Základní 3D objekty (primitiva) se v kódu definují příkazem a parametry, např. krychle, koule, válec
- Nastavování parametrů – rozměry, poloha a natočení objektu se zadávají jako číselné hodnoty nebo proměnné přímo v kódu
- Editace objektů
	- Booleovské operace – sjednocení (union), rozdíl (difference), průnik (intersection) objektů
	- Transformace – posun (translate), rotace (rotate), změna měřítka (scale)
	- Použití proměnných a modulů umožňuje snadno měnit celý model změnou jediné hodnoty a vytvářet znovupoužitelné bloky kódu

## Online a instalované aplikace

- Online (webové) aplikace – běží v prohlížeči, není nutná instalace
	- Výhody – dostupnost z libovolného zařízení s prohlížečem, snadné sdílení projektů, automatické ukládání do cloudu, žádné nároky na instalaci a aktualizace
	- Nevýhody – závislost na připojení k internetu, obvykle nižší výkon pro rozsáhlé nebo složité modely, omezenější sada nástrojů, otázky soukromí dat uložených na serverech třetí strany
- Instalované (desktopové) aplikace
	- Výhody – vyšší výkon a plná funkcionalita, práce bez připojení k internetu, lepší kontrola nad daty uloženými lokálně
	- Nevýhody – nutnost instalace a údržby (aktualizace, licence), vázanost na konkrétní zařízení, náročnější sdílení projektů mezi uživateli

## Práce s grafickou plochou aplikace

- Pracovní plocha aplikace pro 3D modelování obvykle obsahuje 3D scénu, panely nástrojů, strom (hierarchii) objektů a panel vlastností vybraného objektu
- Nastavení pracovní plochy dle potřeb uživatele – zobrazení/skrytí panelů, mřížka, jednotky, barevné schéma, rozmístění nástrojů
- Vazby (constraints) – definují vztahy mezi prvky náčrtu nebo modelu (rovnoběžnost, kolmost, souosost, symetrie, tečnost), po jejich nastavení se model chová predikovatelně i při dalších úpravách
- Kóty – v modelovací aplikaci se používají obdobně jako v technickém výkresu, umožňují přesné a parametrické zadání rozměrů náčrtu i objektů

## Sdružování objektů do komponent a sestav

- Komponenta (skupina) – logické sdružení více objektů do jednoho celku, se kterým lze dále pracovat jako s jedním objektem (přesouvat, kopírovat, upravovat)
- Sestava (assembly) – model složený z více samostatných komponent, které se vzájemně polohují a případně vážou vazbami tak, aby tvořily funkční nebo tvarový celek
- Výhody sdružování – přehlednost složitých modelů, možnost opakovaného použití komponent, snadnější úpravy jednotlivých částí bez ovlivnění zbytku modelu

## Vyhledání, oprava a úprava existujícího modelu

- Vyhledávání hotových modelů v online knihovnách a galeriích (např. Thingiverse, GrabCAD)
- Kontrola staženého modelu – ověření vhodnosti formátu, měřítka a případných chyb geometrie (díry v síti, neplatné normály)
- Oprava modelu – nástroje pro opravu sítě (mesh repair), doplnění chybějících ploch, odstranění duplicitních vrcholů
- Úprava (remix) – přizpůsobení existujícího modelu vlastním potřebám, např. změna rozměrů, přidání nebo odstranění částí

## 2D nástroje v modelovací aplikaci

- Základní 2D nástroje pro tvorbu náčrtu, ze kterého následně vzniká 3D objekt – čára, obdélník, kružnice, oblouk, mnohoúhelník
- Nastavení a volby nástrojů – tloušťka čáry, přichytávání k mřížce nebo k bodům (snapping), režim kreslení (od středu, od rohu)
- Náčrt slouží jako podklad pro operace vytvoření 3D tvaru (vytažení, rotace, tažení po křivce)

## Tvorba sestav z jednoduchých 3D objektů

- Postup tvorby složitějšího modelu skládáním jednoduchých těles
	- Návrh celkové koncepce a rozdělení modelu na dílčí jednoduché objekty
	- Vytvoření jednotlivých objektů (např. kvádry pro stěny, válce pro sloupy, jehlany pro střechu)
	- Přesné polohování objektů vůči sobě pomocí souřadnic nebo vazeb
	- Sloučení nebo sdružení objektů do výsledné sestavy
- Příklad – tvorba jednoduchého modelu budovy z kvádru (základní hmota domu), jehlanu nebo hranolu (střecha), menších kvádrů (okna, dveře) a jejich sestavení do jednoho celku

## Příprava a export modelu pro 3D tisk

- Před exportem je nutné zkontrolovat, zda je model uzavřený (watertight), bez děr a překrývajících se ploch, jinak slicer nemusí model správně zpracovat
- Export do formátu vhodného pro tisk (STL, případně OBJ) přímo z modelovací aplikace
- Kontrola měřítka a orientace modelu vzhledem k podložce tiskárny před finálním exportem
- Po exportu následuje zpracování ve slicovacím softwaru a samotný tisk (viz kapitola o 3D tisku)
