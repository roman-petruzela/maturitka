---
title: "Tiskárny"
order: 18
source: "uvt/cv24_tiskarny.pdf"
---
**Tiskárna** je výstupní zařízení, které převádí data z počítače na fyzický výstup.

- 2D tiskárna – tisk na papír (např. klasická kancelářská tiskárna na papír)
- 3D tiskárna – tisk objemových objektů z různých materiálů

**Multifunkční zařízení** spojuje tiskárnu se skenerem a kopírkou (případně faxem) — je pak i vstupním zařízením.

## Dělení dle typu připojení

- Paralelní port (dnes již se nepoužívá)
- USB
- Ethernet (síťová) — tiskárna má vlastní IP adresu a tisknou na ni všechny počítače v síti; ve firmách ji spravuje **tiskový server** (viz [Windows Server](/it/operacni-systemy/52-windows-server-verze-instalace-a-role/))
- Bezdrátové připojení – wifi / bluetooth

## Dělení dle použití

- Domácí a malé firmy
- Pro firmy s vyšším nárokem na množství tisku
- Průmyslové
  - pro velký objem tisku
  - pro velké formáty tisku

## Parametry tiskáren

- **DPI** (Dots Per Inch) - počet bodů na palec – určuje rozlišovací schopnost tisku. Typické hodnoty jsou 300 dpi (kancelářské aplikace) až 4800 dpi (tisk fotografií a grafiky).
- **PPM** (Pages Per Minute) - počet stran za minutu – určuje rychlost tisku. Ta může být rozdílná při tisku textu a grafiky, může též záviset od části plochy papíru či zadané kvality tisku (krytí).
- **Barevnost** — černobílá nebo barevná (CMYK).
- **Rozhraní** — způsob připojení (viz výše).
- **Cena za vytištěnou stránku** — cena inkoustu nebo toneru na jednu stranu; u levných tiskáren bývá vysoká.
- **Formát** — největší velikost papíru (A4, A3, role u velkoformátových tiskáren), **oboustranný tisk** (duplex).
- **Procesor a vnitřní paměť** — u síťových a laserových tiskáren, zpracovávají tiskovou úlohu.

**Příklad na DPI:** Obrázek 1920 × 1080 px vytištěný při 600 DPI bude široký 1920 / 600 = 3,2 palce ≈ 3,2 · 2,54 ≈ 8,1 cm a vysoký 1080 / 600 = 1,8 palce ≈ 4,6 cm (1 palec = 2,54 cm).

## Dělení dle technologie tisku

### 2D

- Jehličková
- Inkoustová
  - Termické
  - Piezoelektrické
  - Voskové
- Laserová
- LED
- Latexové
- Termální
  - S přímým tiskem
  - Termotransferové
- Plotter (souřadnicový zapisovač)

### 3D

- materiál je vytlačován tiskovou hlavou (např. FFF)
- tekutý materiál je vytvrzován v definované vrstvě (např. SLA)
- materiál je pojen pomocí lepidla, laseru apod. na podložce (např. SLS)
- oddělování materiálu v každé vrstvě (např. LOM)

> Další informace o 3D tisku až ve 3. roč. v předmětu 3D modelování.

## Jehličková tiskárna – princip činnosti

1. Tiskárna obsahuje 9 až 24 jehliček.
2. Jehličky po zadání tiskové úlohy začnou narážet přes barvící pásku do papíru, čímž vzniká text nebo jednoduchá grafika.
3. Kvalita tisku je dána počtem jehliček.

Je hlučná a grafiku tiskne špatně, ale má nejlevnější tisk a jako jediná tiskne **přes průpis** (několik kopií najednou) — proto se dodnes používá na faktury, dodací listy a v pokladnách.

## Inkoustová tiskárna – princip činnosti

1. Tiskárna tiskne tak, že tenkými tryskami (průměru cca 1 μm) vystřikují na papír drobné kapičky inkoustu o velikosti 35 pl (pikolitr = 10<sup>–12</sup> l).
2. Objem kapek má vliv na kvalitu tisku.
3. Rychlost kapek se pohybuje mezi 50 až 100 km/h.
4. Počet trysek závisí na typu tiskárny a bývá 21–256 trysek na jednu barvu.
5. Inkoust je vypuzován z trysek buď tepelně (zahřáním na 200 °C — v trysce vznikne bublinka páry, která kapku vytlačí), nebo piezoelektricky (krystal v tiskové hlavě změní působením elektrického pole rozměry a kapku vystřelí).

Výhodou je nízká pořizovací cena a kvalitní tisk fotografií, nevýhodou vysoká cena za stránku a zasychání inkoustu při delším nepoužívání. Moderní inkoustové tiskárny mívají místo cartridgí doplnitelné **zásobníky** (*ink tank*), které cenu tisku výrazně snižují.

- **DURABrite Ultra Ink** — tiskárny mají vysoce kvalitní inkoust, který zachovává kvalitu barev na několik desítek let. Barvy jsou vysoce kontrastní a kvalitní.
- **PictBridge** (Picture Bridge) — tato funkce umožňuje tisknout obrázky a dokumenty přímo z digitálního zařízení (fotoaparátu), které má toto označení, bez počítače.

## Laserová tiskárna – princip činnosti

#### Jednobarevný tisk - černobílý

1. Tiskový válec - elektricky vodivý válec pokrytý polovodivou selenovou vrstvou.
2. Selenová vrstva se nabije kladným nábojem.
3. Laserový paprsek na povrchu válce vytváří řádek po řádku tištěný obraz.
4. Osvětlené oblasti se stanou vodivými a je z nich odveden náboj.
5. Následně se zachytí toner – práškové barvivo na osvětlená místa na válci.
6. Kontaktně se toner z válce přenese na papír a zažehlením (200 °C) se ustálí.
7. Čištění válce - vybití fotocitlivého válce a může se pokračovat tiskem další strany.

#### Barevný tisk

- V podstatě je princip stejný jako u černobílého tisku.
- Tiskárna musí mít čtyři tiskové jednotky (CMYK) – **Cyan** (modrozelená), **Magenta** (purpurová), **Yellow** (žlutá) a doplňující složku **Black** (černá).
- Jde o subtraktivní (odečítání od bílého pozadí) míchání barev – složením všech barev ve stejném poměru → odstíny šedé. Pro tisk černé barvy je určená samostatná jednotka.

Laserová tiskárna je rychlá, tisk je levný a nerozmazává se, toner nezasychá — hodí se pro kancelář a velké objemy textu.

**LED tiskárna** pracuje stejně jako laserová, jen válec neosvětluje laser s otočným zrcátkem, ale řada LED diod přes celou šířku stránky — má méně pohyblivých částí a je menší.

## Termální tiskárna

Tiskne nahřátými body tiskové hlavy:

- **s přímým tiskem** — na speciální termocitlivý papír, který působením tepla zčerná; bez inkoustu i toneru, ale tisk po čase vybledne (účtenky, jízdenky veřejné dopravy, lístky z parkovišť),
- **termotransferová** — teplo přenese barvu z pásky (ribbonu) na papír nebo fólii; tisk je trvanlivý (štítky, etikety s čárovým kódem).

## Plotter

Velkoformátové zařízení pro **technické výkresy**, mapy a plakáty. Původní plottery kreslily obraz perem na rameni pomocí křivek; dnešní velkoformátové tiskárny jsou inkoustové a tisknou na role papíru. **Řezací plotter** místo kreslení vyřezává nožem tvary z fólie (polepy, nápisy).

## Srovnání

| Typ | Pořizovací cena | Cena tisku | Kvalita grafiky | Typické použití |
| --- | --- | --- | --- | --- |
| jehličková | střední | nejnižší | nízká | průpisy, faktury, pokladny |
| inkoustová | nízká | vysoká (s tankem nízká) | vysoká, fotografie | domácnost |
| laserová / LED | střední až vyšší | nízká | dobrá u textu | kancelář, velký objem |
| termální | nízká | nízká | jen text a kódy | účtenky, etikety |
| plotter | vysoká | — | výkresy, velké formáty | technické kanceláře, reklama |

## Příslušenství

- Podavače (z balíku papíru, po listu, z role,…)
- Sešívací zařízení
- Oddělovač (pokladní tiskárny)
- Display
- Skener
- Čtečky paměťových karet

## Citace

- <https://cs.wikipedia.org/wiki/Po%C4%8D%C3%ADta%C4%8Dov%C3%A1_tisk%C3%A1rna>
- <https://www.abc3d.cz/o-3d-tisku-neprehlednete/115-3d-tisk-principy-technologie>
- <https://www.svethardware.cz/technologie-laserovych-tiskaren/24978>
- <https://www.youtube.com/watch?v=JEVurb1uVFA>
