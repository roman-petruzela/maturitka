---
title: "3D tisk, CNC a technické výkresy"
order: 1
tags: ["doplněno"]
---

## Technologie 3D tisku

- Aditivní výroba – model vzniká postupným nanášením materiálu po vrstvách, na rozdíl od CNC obrábění, které je subtraktivní (materiál se z polotovaru ubírá)
- FDM (Fused Deposition Modeling) – nejrozšířenější technologie pro domácí a školní 3D tiskárny
	- Princip – vlákno materiálu (filament) je odvíjeno z cívky, v tiskové hlavě (extruderu) roztaveno a nanášeno tryskou po vrstvách na podložku
	- Materiály
		- PLA (kyselina polymléčná) – biodegradabilní, snadno tiskne, nízká teplota tisku (~190–220 °C), málo pevná vůči teplu, vhodná pro začátečníky
		- ABS – odolnější vůči teplu a nárazu, tiskne se za vyšší teploty (~230–250 °C), zapáchá, náchylný k warpingu (kroucení), vyžaduje vyhřívanou podložku a často uzavřenou komoru
		- Další materiály – PETG (kombinuje výhody PLA a ABS), TPU (pružný materiál), nylon, kompozity s uhlíkovými vlákny
	- Výhody – nízká cena tiskáren a materiálu, jednoduchá obsluha
	- Nevýhody – nižší rozlišení a hladkost povrchu, viditelné vrstvy
- SLA (Stereolitografie) a příbuzné technologie (DLP, MSLA)
	- Princip – tekutá fotopolymerní pryskyřice (resin) je vytvrzována UV světlem (laserem, projektorem nebo LED maticí přes LCD panel) po jednotlivých vrstvách
	- Materiály – fotopolymerní pryskyřice (resin) v různých variantách (standardní, pevná, pružná, pro odlévání šperků, dentální)
	- Výhody – vysoké rozlišení a hladký povrch, vhodné pro detailní modely a miniatury
	- Nevýhody – vyšší cena materiálu, nutnost dodatečného zpracování (praní v izopropylalkoholu, dosvit UV lampou), toxicita nevytvrzené pryskyřice, nutnost ochranných pomůcek

## CNC obrábění a G-code

- CNC (Computer Numerical Control) – počítačem řízené obrábění, nástroj (fréza, vrták) odebírá materiál z polotovaru podle naprogramované dráhy
- Souřadné systémy
	- Souřadnice X, Y, Z určují polohu nástroje (nebo tiskové hlavy) v prostoru
	- Počátek souřadného systému (nulový bod) lze nastavit vzhledem ke stroji nebo vzhledem k obrobku
- G-code – standardizovaný programovací jazyk pro řízení CNC strojů a 3D tiskáren
	- Skládá se z posloupnosti příkazů (řádků), z nichž každý začíná písmenem (adresou) následovaným číslem
	- G-příkazy (G-codes) – řídí pohyb a režim stroje, např. G0 (rychlý přesun bez obrábění/tisku), G1 (lineární pohyb s obráběním/tiskem), G28 (návrat do výchozí pozice)
	- M-příkazy (M-codes) – řídí doplňkové funkce stroje, např. M104 (nastavení teploty trysky), M106 (zapnutí ventilátoru)
	- Příklad jednoduchého příkazu: `G1 X10 Y20 F1500` – lineární pohyb do bodu se souřadnicemi X=10, Y=20 rychlostí (feedrate) 1500 mm/min
	- G-code pro 3D tiskárnu generuje slicovací software automaticky z 3D modelu, ručně se obvykle nepíše

## Popisy prostoru a technické zobrazování

- Pravoúhlé (ortogonální) promítání – zobrazení tělesa several pohledy (nárys, půdorys, bokorys), které jsou navzájem kolmé; používá se v technických výkresech pro přesné určení rozměrů
- Axonometrie – rovnoběžné promítání, kdy je těleso zobrazeno v jednom pohledu tak, aby byly patrné tři jeho rozměry současně (např. izometrie); rovnoběžné hrany zůstávají rovnoběžné, zkreslení je jednotné
- Perspektiva – středové promítání, které napodobuje vnímání lidského oka; rovnoběžné hrany se sbíhají do úběžníků, používá se pro názorné vizualizace, ne pro přesné kótování

## Kótování a 2D kreslicí nástroje

- Kótování – doplnění výkresu o rozměrové a polohové údaje (kóty), tolerance a další parametry potřebné k výrobě
	- Kótovací čára – vyznačuje rozměr mezi dvěma body
	- Pomocná čára – vymezuje, mezi kterými body se kóta měří
	- Kótovací číslo – hodnota rozměru, obvykle v milimetrech
	- Parametry kót (velikost písma, šipek, jednotky, přesnost) se nastavují dle normy a potřeb konkrétního výkresu
- Základní 2D kreslicí nástroje (v CAD i modelovacích aplikacích)
	- Čára, úsečka
	- Kružnice, oblouk
	- Obdélník, mnohoúhelník
	- Ořezání a prodloužení čar (trim/extend)
	- Zaoblení a zkosení hran (fillet/chamfer)
	- Vazby (vztahy) mezi prvky náčrtu – rovnoběžnost, kolmost, souosost, tečnost

## Od technické dokumentace k 3D modelu

- Čtení technického výkresu – identifikace pohledů, rozměrů, tolerancí a měřítka je základem pro tvorbu 3D modelu podle zadání
- Postup tvorby modelu z výkresu
	- Analýza pohledů (nárys, půdorys, bokorys) a odvození skutečného tvaru tělesa
	- Tvorba 2D náčrtu podle kót
	- Vytažení (extrude), rotace nebo jiná operace pro vznik 3D tělesa
	- Doplnění detailů (otvory, zaoblení, závity)
- Publikování modelů v galeriích
	- Online komunitní platformy (např. Thingiverse) umožňují nahrávat, sdílet a stahovat hotové 3D modely zdarma
	- Model se doplňuje o popis, licenci (např. Creative Commons), fotografie výtisku a tiskové parametry, které autor použil
	- Umožňuje sdílení know-how a případné úpravy (remixy) modelů ostatními uživateli

## Příprava a export modelu pro 3D tisk

- Export modelu – hotový 3D model se z modelovací aplikace exportuje do formátu vhodného pro tisk
	- STL (Stereolithography) – nejběžnější formát, popisuje povrch modelu sítí trojúhelníků, neobsahuje barvy ani materiály
	- OBJ – formát podporující i barvy a textury, vhodný pro barevný tisk nebo tisk s texturami
- Slicovací software (slicer) – převádí 3D model na G-code pro konkrétní tiskárnu
	- Rozdělí model na jednotlivé vrstvy (slicing) podle zvolené výšky vrstvy
	- Nastavení výplně (infill) – hustota a vzor vnitřní struktury modelu (ovlivňuje pevnost, hmotnost a spotřebu materiálu)
	- Podpory (supports) – pomocné struktury pro převisy a přečnívající části modelu, po tisku se odstraňují
	- Rychlost tisku, teplota trysky a podložky, chlazení
	- Příklady slicerů – PrusaSlicer, Cura
- Materiály pro 3D tisk – volba materiálu podle účelu modelu (pevnost, teplotní odolnost, pružnost, estetika) – viz PLA, ABS, PETG, resin výše
- Postprodukce (dokončovací úpravy)
	- Odstranění podpor
	- Broušení a tmelení povrchu
	- Lepení více dílů dohromady
	- Lakování nebo barvení
	- U SLA tisku navíc praní v izopropylalkoholu a dosvit UV zářením

## Běžné závady 3D tiskárny

- Nepřilnutí modelu k podložce – první vrstva se neuchytí a model se za tisku posune nebo odloupne; příčinou bývá špatně vyrovnaná podložka, znečištěný povrch nebo nesprávná teplota podložky
- Ucpaná tryska – materiál přestane vytékat, tisk pokračuje naprázdno; příčinou bývá nečistota v trysce, spálený filament nebo nesprávná teplota tisku; řeší se pročištěním nebo výměnou trysky
- Warping (kroucení rohů) – rohy nebo hrany modelu se odlepí a zkroutí vlivem nerovnoměrného smršťování materiálu při chladnutí; typické u ABS, řeší se vyhřívanou podložkou, uzavřenou komorou nebo použitím okrajů (brim/raft)
- Vlákna a pavučinky (stringing) – tenká vlákna materiálu mezi jednotlivými částmi modelu, způsobené prosakováním materiálu při přejezdech; řeší se nastavením retrakce
- Posunuté vrstvy (layer shifting) – vrstvy nejsou nad sebou zarovnané, příčinou bývá mechanická překážka nebo příliš vysoká rychlost tisku
