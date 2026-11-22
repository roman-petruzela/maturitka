---
title: "Tiskárny"
order: 18
source: "uvt/cv24_tiskarny.pdf"
---

**Tiskárna** je výstupní zařízení: data z počítače převede na fyzický výstup. **2D** tiskárny tisknou na papír, **3D** vytvářejí objemové předměty (viz [3D tisk](/it/3d-modelovani/01-3d-tisk-a-technicke-vykresy/)). **Multifunkční zařízení** = tiskárna + skener + kopírka.

**Připojení:** USB, **Ethernet** (síťová tiskárna s vlastní IP, ve firmách [tiskový server](/it/operacni-systemy/52-windows-server-verze-instalace-a-role/)), bezdrátově (Wi-Fi, Bluetooth).

## Parametry tiskáren

- **DPI** – body na palec = rozlišení (300 kancelář až 4 800 fotky).
- **PPM** – strany za minutu = rychlost.
- **barevnost** – černobílá, barevná (**CMYK**).
- **cena za stránku** – inkoust nebo toner.
- **formát** (A4, A3), **duplex** (oboustranný tisk).

**Příklad na DPI:** obrázek 1920 × 1080 px při 600 DPI má šířku 1920 / 600 = 3,2″ ≈ 8,1 cm a výšku 1080 / 600 = 1,8″ ≈ 4,6 cm (1″ = 2,54 cm).

## Technologie tisku

| Typ | Princip | Vlastnosti a použití |
| --- | --- | --- |
| **jehličková** | 9–24 jehliček narazí přes barvicí pásku do papíru | hlučná, špatná grafika, nejlevnější tisk, jediná tiskne **přes průpis** (faktury, pokladny) |
| **inkoustová** | trysky vystřikují kapky inkoustu | levná, kvalitní fotky, drahý tisk, inkoust zasychá |
| **laserová** | laserem nabitý válec přitáhne toner, ten se přenese na papír a zažehlí | rychlá, levný tisk, kancelář |
| **LED** | jako laserová, válec osvětluje řada LED | méně pohyblivých částí, menší |
| **termální** | nahřátá hlava zčerná termocitlivý papír (přímý) nebo přenese barvu z pásky (termotransfer) | účtenky, jízdenky, štítky |
| **plotter** | velkoformát pro výkresy, mapy; řezací plotter vyřezává fólie | technické kanceláře, reklama |

**Inkoustová tiskárna:** kapku vypudí buď **tepelně** (zahřátí na ~200 °C, bublina páry kapku vytlačí), nebo **piezoelektricky** (krystal se v elektrickém poli deformuje). Menší kapky = lepší kvalita. **Ink tank** (doplnitelné zásobníky) cenu tisku výrazně snižuje.

### Laserová tiskárna

![Laserový tisk: nabití válce, expozice laserem, nanesení toneru, přenos na papír, ustálení žehlením a čištění válce](/images/content/it/uvod-do-vypocetni-techniky/tiskarny/laser.webp)

1. **Tiskový válec** s polovodivou vrstvou se **nabije**.
2. **Laser** řádek po řádku kreslí obraz; osvětlená místa se vybijí.
3. **Toner** (prášek) přilne na vybitá místa.
4. Toner se **přenese na papír** a **zažehlí** (~200 °C).
5. Válec se **vyčistí** a vybije pro další stranu.

Barevná laserová má **čtyři jednotky CMYK** (cyan, magenta, yellow, black); barvy se mísí **subtraktivně**, černá má vlastní jednotku.

## Otázky k opakování

1. Jak dělíme tiskárny podle technologie? ||jehličkové, inkoustové, laserové a LED, termální, plottery; 3D tiskárny zvlášť||
2. Jak pracuje laserová tiskárna? ||nabije válec, laserem ho vybije v místech obrazu, toner přilne, přenese se na papír a zažehlí||
3. Jak inkoustová tiskárna vypudí kapku? ||tepelně (bublina páry) nebo piezoelektricky (deformace krystalu)||
4. Proč se jehličkové tiskárny stále používají? ||jediné tisknou přes průpis a mají nejlevnější tisk (faktury, pokladny)||
5. Co znamená DPI a PPM? ||rozlišení (body na palec) a rychlost (strany za minutu)||
6. Co znamená CMYK? ||cyan, magenta, yellow, black – barvy tisku mísené subtraktivně||
