---
title: "Tiskárny"
order: 18
source: "uvt/cv24_tiskarny.pdf"
---
**Tiskárna** – výstupní zařízení: data z počítače → fyzický výstup.

- **2D** – tisk na papír
- **3D** – objemové objekty z různých materiálů

**Multifunkční zařízení** = tiskárna + skener + kopírka (fax); je i vstupní.

## Dělení dle typu připojení

- paralelní port (zastaralé)
- USB
- Ethernet (síťová) – vlastní IP adresa, tiskne na ni celá síť; firmy: **tiskový server** (viz [Windows Server](/it/operacni-systemy/52-windows-server-verze-instalace-a-role/))
- bezdrátově – Wi-Fi, Bluetooth

## Dělení dle použití

- domácí a malé firmy
- firmy s větším objemem tisku
- průmyslové (velký objem, velké formáty)

## Parametry tiskáren

- **DPI** – body na palec = rozlišení; 300 (kancelář) až 4 800 (fotky, grafika).
- **PPM** – strany za minutu = rychlost; liší se pro text a grafiku, závisí na krytí a kvalitě.
- **barevnost** – černobílá / barevná (CMYK)
- **rozhraní** – připojení (viz výše)
- **cena za stránku** – inkoust/toner; u levných tiskáren vysoká
- **formát** – A4, A3, role; **duplex** (oboustranný tisk)
- **procesor a paměť** – u síťových a laserových

**Příklad na DPI:** 1920 × 1080 px při 600 DPI = 1920 / 600 = 3,2″ ≈ 8,1 cm na šířku a 1080 / 600 = 1,8″ ≈ 4,6 cm na výšku (1″ = 2,54 cm).

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

- **vytlačování** materiálu tiskovou hlavou (FFF)
- **vytvrzování** tekuté pryskyřice (SLA)
- **pojení** prášku lepidlem nebo laserem (SLS)
- **oddělování** materiálu ve vrstvách (LOM)

3D tisk podrobněji: [3D tisk a technické výkresy](/it/3d-modelovani/01-3d-tisk-a-technicke-vykresy/).

## Jehličková tiskárna – princip činnosti

1. **9 až 24 jehliček**.
2. Narážejí přes **barvicí pásku** do papíru → text nebo jednoduchá grafika.
3. Kvalita = počet jehliček.

Hlučná, špatná grafika, ale **nejlevnější tisk** a jako jediná tiskne **přes průpis** → faktury, dodací listy, pokladny.

## Inkoustová tiskárna – princip činnosti

1. Tenké **trysky** vystřikují kapky inkoustu (~35 pl; pikolitr = 10<sup>–12</sup> l).
2. Menší kapky = lepší kvalita.
3. Rychlost kapek 50–100 km/h.
4. 21–256 trysek na barvu.
5. Vypuzení kapky:
   - **tepelně** – zahřátí na ~200 °C, bublina páry kapku vytlačí,
   - **piezoelektricky** – krystal se v elektrickém poli deformuje a kapku vystřelí.

Plus: nízká cena, kvalitní fotky. Mínus: drahý tisk, zasychání inkoustu. **Ink tank** (doplnitelné zásobníky) cenu tisku výrazně snižuje.

- **DURABrite Ultra Ink** – kvalitní inkoust, barvy drží desítky let.
- **PictBridge** – tisk přímo z fotoaparátu bez počítače.

## Laserová tiskárna – princip činnosti

![Laserový tisk: nabití válce, expozice laserem, nanesení toneru, přenos na papír, ustálení žehlením a čištění válce](/images/content/it/uvod-do-vypocetni-techniky/tiskarny/laser.webp)

### Jednobarevný tisk – černobílý

1. **Tiskový válec** – vodivý, pokrytý polovodivou (selenovou) vrstvou.
2. Vrstva se **nabije kladně**.
3. **Laser** řádek po řádku kreslí obraz; osvětlená místa se stanou vodivá a **náboj z nich odteče**.
4. **Toner** (prášek) přilne na osvětlená místa.
5. Toner se **přenese na papír** a **zažehlí** (~200 °C).
6. **Čištění** a vybití válce → další strana.

### Barevný tisk

- Stejný princip, ale **čtyři jednotky CMYK**: **Cyan**, **Magenta**, **Yellow**, **Black**.
- **Subtraktivní** míchání; všechny barvy ve stejném poměru dají šedou → černá má vlastní jednotku.

Laserová: rychlá, levný tisk, nerozmazává se, toner nezasychá → kancelář, velké objemy textu.

**LED tiskárna** – jako laserová, ale válec osvětluje **řada LED** přes celou šířku → méně pohyblivých částí, menší.

## Termální tiskárna

Tiskne nahřátými body tiskové hlavy:

- **přímý tisk** – termocitlivý papír zčerná teplem; bez inkoustu, ale vybledne (účtenky, jízdenky),
- **termotransferová** – teplo přenese barvu z pásky (ribbonu); trvanlivé (štítky, čárové kódy).

## Plotter

Velkoformát pro **výkresy**, mapy, plakáty. Původně **pero** na rameni kreslilo křivky; dnes inkoustová tiskárna na roli. **Řezací plotter** vyřezává tvary z fólie (polepy, nápisy).

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
