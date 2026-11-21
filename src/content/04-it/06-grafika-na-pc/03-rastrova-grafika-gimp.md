---
title: "Rastrová grafika — práce v GIMPu"
order: 3
source: "grafika/VY_32_INOVACE_3223_01 až 13.pptx (7 prezentací sloučeno do jednoho materiálu)"
---

**GIMP** ([gimp.org](http://www.gimp.org)) – rastrový editor s částečnou podporou vektorů, zdarma (GPL), česky. Web grafika i úprava fotek, vrstvy.

## Základní části programu

- **Hlavní okno** – obrázek + hlavní menu.
- **Panel nástrojů** – výběr, kreslení, retuš; barva popředí/pozadí; „Volby nástroje“.
- **Okno Vrstvy** – vrstvy, kanály, cesty, historie, stopy, přechody.

Přehlednější je **režim s jedním oknem** (Okna → Režim s jedním oknem).

**Soubor → Nový** (Ctrl+N): rozměry v px a rozlišení, případně šablona. Barvy ze vzorníku, posuvníky nebo číselně (RGB, CMYK, HSV). **Uložit** (Ctrl+S) = nativní **XCF** (vrstvy, editovatelnost); pro web **exportovat** do JPEG/PNG.

## Výběrové metody

| Metoda | Použití |
|---|---|
| obdélníkový / eliptický | pravidelné tvary, i s pevným poměrem stran |
| volný (laso) | od ruky, nepřesné; lépe s tabletem |
| přibližný (kouzelná hůlka) | souvislá oblast podobné barvy; **Práh** = tolerance |
| podle barvy | všechny pixely dané barvy v celém obrázku |
| cesty | kotevní a řídicí body (Bézier) – nejpřesnější pro křivky |
| nůžky | body podél hrany s přichytáváním k hranám |
| výběr popředí | laso + doladění štětcem; členité objekty |

Výběr lze **vykreslit** (obtáhnout barvou popředí) nebo zrušit Shift+Ctrl+A.

## Jas a kontrast

**Jas** = celková světlost, **kontrast** = rozdíl nejsvětlejšího a nejtmavšího místa. **Barvy → Jas-kontrast**. Postup: duplikovat vrstvu → doladit jas (ne „v oparu“) → kontrast (nepřepálit) → sloučit vrstvy → export (JPEG).

## Korekce barev

Když fotka neodpovídá realitě (fialová obloha, červená pleť):

- **Úrovně** (Barvy → Úrovně) – **histogram** (četnost tmavých a světlých bodů, pře-/podexpozice). Prostřední jezdec jas, krajní kontrast (posunout na okraje histogramu).
- **Vyvážení barev** – nádech zvlášť ve stínech, středech a světlech bez změny jasu; příliš červená → k azurové.
- **Odstín-sytost** – sytost barev; s mírou, jinak nepřirozené.

## Maska

**Maska** chrání část vrstvy před úpravou; samostatný kanál jedné vrstvy (ne pozadí). Šedé hodnoty 0–255: **černá = průhledné**, **bílá = kryje**. Prolínání obrázků, maskování pozadí, přebarvení části.

**Rychlá maska** (ikona vlevo dole) – červená fólie, do níž se kreslí šedou; po vypnutí z ní je výběr, originál nedotčen.

## Odstranění červených očí

Odraz blesku blízko objektivu. **Filtry → Vylepšit → Odstranit červené oči**, nastavit práh; když je podobná barva i jinde (rty), nejdřív vybrat oči (eliptický výběr, „přidat k výběru“). Přebarvení očí: štětec v režimu „Barva“, stopa ~⅓ oka.

## Cvičení

- Založte nový obrázek, vyzkoušejte přepnutí mezi víceoknovým a jednooknovým režimem a uložte ho v nativním formátu.
- Nakreslete pomocí eliptického výběru olympijské kruhy.
- Na vlastní (nebo staženou) fotografii vyzkoušejte úpravu jasu a kontrastu — porovnejte, jak vypadá fotografie s jezdcem posunutým na jednu i druhou stranu.
- Vyzkoušejte korekci barev pomocí úrovní a vyvážení barev na fotografii s barevným nádechem.
- Vytvořte rychlou masku a použijte ji k přebarvení vybrané části fotografie.
