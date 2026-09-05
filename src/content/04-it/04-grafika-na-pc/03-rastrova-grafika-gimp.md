---
title: "Rastrová grafika — práce v GIMPu"
order: 3
source: "grafika/VY_32_INOVACE_3223_01 až 13.pptx (7 prezentací sloučeno do jednoho materiálu)"
---

> Pozn. k obsahu: Původní podklad byl rozdělen do 7 samostatných prezentací (základní charakteristika, výběrové metody, jas/kontrast, korekce barev, maska, úprava fotografie, odstranění červených očí) — sloučeno do jednoho materiálu.

**GIMP** ([gimp.org](http://www.gimp.org)) je bitmapový (rastrový) grafický editor s částečnou podporou vektorové grafiky, distribuovaný zdarma pod licencí GPL. Používá se pro tvorbu grafiky pro web i pro úpravu fotografií, podporuje práci s vrstvami a je lokalizovaný do češtiny.

## Základní části programu

- **Hlavní okno** — zobrazuje upravovaný obrázek/fotografii a obsahuje hlavní menu s nástroji.
- **Panel nástrojů** — ikony základních nástrojů (výběr, kreslení, retušování...), volba barvy popředí/pozadí, karta „Volby nástroje“ s nastavením aktuálně vybraného nástroje.
- **Okno Vrstvy** — práce s vrstvami, barevnými kanály, cestami, historií změn, stopami a přechody.

GIMP lze přepnout mezi víceoknovým zobrazením (více samostatných oken) a **režimem s jedním oknem** (menu Okna → Režim s jedním oknem) — druhý je pro většinu uživatelů přehlednější.

Nový obrázek založíme přes **Soubor → Nový** (Ctrl+N), kde zvolíme rozměry (šířku/výšku v pixelech) a rozlišení; případně lze vyjít z předpřipravené šablony. Barvu popředí/pozadí měníme na panelu nástrojů výběrem ze vzorníku, posuvníky, nebo číselným zadáním v modelu RGB, CMYK nebo HSV. Obrázek ukládáme přes **Soubor → Uložit** (Ctrl+S) — nativní formát GIMPu je **XCF** a zachovává vrstvy a veškerou editovatelnost; pro sdílení/web je potřeba obrázek navíc **exportovat** do formátu jako JPEG nebo PNG.

## Výběrové metody

| Metoda | Použití |
|---|---|
| Obdélníkový / eliptický výběr | rychlý výběr pravidelného tvaru, případně s pevným poměrem stran |
| Volný výběr (laso) | výběr od ruky, nepřesný — pro přesnější práci lépe grafický tablet |
| Přibližný výběr (kouzelná hůlka) | výběr souvislé oblasti podobné barvy (např. jednobarevné pozadí); parametr **Práh** určuje, jak velký rozdíl barev se ještě považuje za "stejnou" oblast |
| Výběr podle barvy | obdoba přibližného výběru, ale vybere všechny pixely dané barvy v celém obrázku, ne jen souvislou oblast |
| Cesty | přesný výběr pomocí kotevních a řídicích bodů (podobně jako Bézierova křivka ve vektorovém editoru) — nejpřesnější metoda pro křivočaré tvary |
| Výběr nůžkami | přidávání kotevních bodů podél hrany objektu, s inteligentním přichytáváním k hranám |
| Výběr popředí | označení oblasti lasem a jejím dokreslením/domazáním štětcem, vhodné pro členité objekty |

Po vytvoření výběru ho lze **vykreslit** (obtáhnout čarou zvolené tloušťky a stylu, barvou popředí) přes menu, nebo zrušit klávesami Shift+Ctrl+A.

## Jas a kontrast

**Jas** je celková světlost fotografie, **kontrast** je rozdíl mezi nejsvětlejším a nejtmavším místem. Upravují se společně přes menu **Barvy → Jas-kontrast**. Doporučený postup: nejdřív si vrstvu s fotografií zduplikovat (aby šla úprava snadno vrátit), pak jezdcem jasu dolaďovat, dokud fotografie nezesvětlá/neztmavne požadovaně, ale není "v oparu" (přepálená). Kontrast se upravuje analogicky, cílem je zvýraznit rozdíly, ale nepřepálit barvy. Na závěr se vrstvy sloučí a fotografie exportuje (typicky do JPEG).

## Korekce barev

Fotografie často neodpovídá realitě (obloha vyjde fialová místo modré, pleť moc červená apod.) — nejčastější nástroje nápravy:

- **Úrovně** (menu Barvy → Úrovně) — dialog s **histogramem** (graf četnosti tmavých/světlých pixelů, ukazuje pře-/podexponování). Prostřední jezdec nastavuje jas, krajní jezdci kontrast (dobrým výchozím krokem je posunout krajní jezdce na okraje histogramu).
- **Vyvážení barev** (Barvy → Vyvážení barev) — upravuje barevný nádech zvlášť pro stíny, střední tóny a světla, beze změny jasu; např. u příliš červené fotografie posuneme jezdec směrem k azurové.
- **Odstín-sytost** (Barvy → Odstín-sytost) — zvyšuje/snižuje sytost barev; přehnaná sytost vede k nepřirozeným barvám, je třeba postupovat opatrně.

## Maska

Maska je filtr, který chrání (část) obrázku před editací — ukládá se do samostatného kanálu a týká se jen jedné vrstvy (ne vrstvy pozadí). Je to sada šedých hodnot 0–255: černá (0) = plně průhledné, bílá (255) = plně kryje. Používá se pro spojování/prolínání obrázků, maskování pozadí nebo textu, přebarvení části obrázku.

Rychlejší alternativou je **rychlá maska** (ikona vlevo dole u obrázku) — po zapnutí se přes fotografii položí červená průhledná fólie, do které se kreslí v odstínech šedé; po vypnutí rychlé masky se z nakreslené oblasti stane běžný výběr, aniž by se zasáhlo do původní vrstvy.

## Odstranění červených očí

Efekt vzniká odrazem blesku umístěného blízko objektivu (typicky kompaktní fotoaparáty). Řeší se filtrem **Filtry → Vylepšit → Odstranit červené oči**, kde se nastaví práh citlivosti; pokud se ve fotografii vyskytuje podobný odstín i jinde (např. rty), je potřeba oči nejdřív vybrat (eliptický výběr nebo cesty, s volbou "přidat k aktuálnímu výběru" pro obě oči najednou). Obdobným postupem (štětec v režimu "Barva" se stopou o velikosti cca třetiny oka) lze i cíleně přebarvit oči na jinou barvu.

## Cvičení

- Založte nový obrázek, vyzkoušejte přepnutí mezi víceoknovým a jednooknovým režimem a uložte ho v nativním formátu.
- Nakreslete pomocí eliptického výběru olympijské kruhy.
- Na vlastní (nebo staženou) fotografii vyzkoušejte úpravu jasu a kontrastu — porovnejte, jak vypadá fotografie s jezdcem posunutým na jednu i druhou stranu.
- Vyzkoušejte korekci barev pomocí úrovní a vyvážení barev na fotografii s barevným nádechem.
- Vytvořte rychlou masku a použijte ji k přebarvení vybrané části fotografie.
