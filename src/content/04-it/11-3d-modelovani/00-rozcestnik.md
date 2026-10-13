---
title: "3D modelování – rozcestník"
order: -1
---

Rozcestník kategorie: o čem předmět je, kdy se podle ŠVP učí, co si z něj určitě zapamatovat, kde je které téma a jak souvisí s maturitou.

## O předmětu

- Od technického výkresu k vytištěnému modelu: technologie 3D tisku a CNC, G-code a souřadné systémy, technické zobrazování a kótování.
- Modelování kódem (WYSIWYM, např. OpenSCAD) i graficky (WYSIWYG – SketchUp, Tinkercad, Fusion 360), online i instalované aplikace, sestavy a úprava hotových modelů.
- Příprava modelu pro tisk: export, slicer, materiály, postprodukce a řešení závad tiskárny.
- Navazuje na 3D část [grafiky na PC](/it/#grafika-na-pc) (Blender) a na 3D tiskárny z [úvodu do výpočetní techniky](/it/uvod-do-vypocetni-techniky/18-tiskarny/).

## Ročníky a hodiny podle ŠVP

| Ročník | Hodin týdně | Obsah (ŠVP §4.9.10) |
| --- | --- | --- |
| 3. | 2 | 3D technologie – 3D tisk, CNC a G-code, promítání, kótování, export a slicer, závady tiskárny; modelování WYSIWYM; modelování WYSIWYG online i offline, sestavy |

Plné znění výstupů je v [přehledu ŠVP](/it/reference/svp-prehled/#4910-3d-modelování).

## Co si určitě zapamatovat

- **3D tisk je aditivní** (materiál se přidává po vrstvách), **CNC obrábění subtraktivní** (materiál se ubírá z polotovaru).
- **FDM** – roztavené vlákno (filament) se nanáší tryskou po vrstvách; levné, ale viditelné vrstvy. **SLA** (a DLP, MSLA) – pryskyřice vytvrzovaná UV světlem; vysoké rozlišení, ale dražší a nutné praní a dosvit.
- **Materiály FDM**: **PLA** (snadný tisk ~190–220 °C, biodegradabilní, nesnese teplo), **ABS** (odolnější, ~230–250 °C, kroutí se – warping), **PETG** (kompromis), TPU (pružný).
- **G-code** řídí CNC stroje a 3D tiskárny: G0 rychlý přesun, G1 lineární pohyb s tiskem nebo obráběním, G28 návrat domů; M-příkazy pro teplotu a ventilátor (M104, M106). Pro tiskárnu ho generuje **slicer**.
- **Zobrazování**: pravoúhlé promítání (nárys, půdorys, bokorys – přesné rozměry), axonometrie (rovnoběžné promítání, např. izometrie), perspektiva (středové promítání, úběžníky – názorné, ne ke kótování).
- **Kóta** = kótovací čára, pomocné čáry a kótovací číslo (v mm). Vazby v náčrtu: rovnoběžnost, kolmost, souosost, tečnost.
- **WYSIWYM** (kód, např. OpenSCAD) – přesné parametry, verzovatelné, ale bez okamžité vizuální kontroly. **WYSIWYG** (SketchUp, Tinkercad) – intuitivní, okamžitý výsledek, hůř se opakovaně nastavují parametry. Booleovské operace sjednocení, rozdíl, průnik.
- **Export**: **STL** (povrch ze sítě trojúhelníků, bez barev) nebo OBJ (s barvami a texturami). **Slicer** (PrusaSlicer, Cura) rozřeže model na vrstvy a nastaví výplň (infill), podpory, rychlost a teploty.

## Témata kategorie

- [3D tisk, CNC a technické výkresy](/it/3d-modelovani/01-3d-tisk-a-technicke-vykresy/) – technologie tisku, G-code, promítání, kótování, export, slicer, závady tiskárny
- [3D modelovací aplikace (WYSIWYM a WYSIWYG)](/it/3d-modelovani/02-3d-modelovaci-aplikace/) – modelování kódem a graficky, online a instalované aplikace, sestavy, oprava modelů

## Maturitní okruhy

3D modelování se u ústní zkoušky nezkouší – podle [maturitních okruhů IT](/it/reference/maturitni-okruhy/) je součástí praktické zkoušky a maturitní práce.

## Co je jen okrajové

- **SLA příbuzné technologie** (DLP, MSLA) a exotické materiály (nylon, kompozity s uhlíkem) – stačí vědět, že existují.
- **Konkrétní M-příkazy G-code** – G-code pro tiskárnu se ručně nepíše; stačí princip a G0, G1.
- **Knihovny modelů** (Thingiverse, GrabCAD) a oprava sítě – praktická dovednost.
- Ovládání konkrétní aplikace (panely, zkratky) – naučí se prací.
