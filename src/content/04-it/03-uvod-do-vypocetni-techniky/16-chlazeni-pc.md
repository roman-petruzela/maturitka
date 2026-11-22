---
title: "Chlazení PC"
order: 16
source: "uvt/cv23_chlazeni_PC.pdf"
---
**Chlazení** odvádí z počítače přebytečné teplo. Součástky se konstruují tak, aby ho vytvářely co nejméně, přesto ho produkují tolik, že ho musí odvádět **chladiče**.

## Zdroje tepla

| Součástka | Odkud teplo pochází |
|---|---|
| **Procesor** | přepínání tranzistorů při výpočtech (nejvíc) |
| **Základní deska** | napájecí obvody, chipset, zvukový a síťový čip |
| **Grafická karta** | GPU, pak napájecí obvody a paměti |
| **Pevný disk** | elektromotor, který otáčí plotnami |
| **Zdroj** | transformátor, usměrňovač, tranzistory |
| **Operační paměť** | méně tepla, ale špatně se chladí, často 60–70 °C |

## Druhy chlazení

- **Pasivní** – kovový chladič bez pohyblivých částí (měď nebo hliníkové slitiny – pevné, lehké, levné). Nejjednodušší instalace a údržba, bez hluku.
- **Aktivní** – **ventilátor** žene vzduch přes chladič; vhání studený vzduch do skříně a vyhání teplý.
- **Kombinované** – aktivní ventilátor na pasivním chladiči (nejběžnější u procesorů).
- **Vodní / olejové** – uzavřený okruh s kapalinou.
- **Extrémní** – tekutý dusík nebo oxid uhličitý.

**Chladicí médium** je tekutina nebo plyn proudící zařízením (vzduch, voda, olej). Má mít velkou tepelnou kapacitu a nízkou viskozitu.

## Teplovodivá pasta

Zlepšuje přenos tepla z čipu do chladiče (vyplní mikroskopické nerovnosti, které by jinak vyplnil vzduch – špatný vodič).

- provozní teplota zhruba −40 až +150 °C, tepelná vodivost 0,8–62,5 W/(m·K),
- většinou elektricky nevodivá,
- základem je silikonový tuk s tepelně vodivou přísadou, nebo uhlíková báze.

Prachový filtr skříně chrání před prachem, ale snižuje proudění vzduchu.

## Heatpipe (tepelná trubice)

**Hermeticky uzavřená trubice** s pracovním médiem. Teplý konec médium odpaří, pára doputuje k chladiči, kondenzuje a **předá teplo**; kondenzát stéká zpět a děj se opakuje. Teplo se tak přenese velmi rychle bez pohyblivých částí.

![Heatpipe: odpaření na teplém konci, kondenzace na chladném a návrat kapaliny](/images/content/it/uvod-do-vypocetni-techniky/chlazeni-pc/heatpipe.webp)

## Ložiska ventilátoru

kluzná · kuličková · magnetická · keramická

## Vodní chlazení

Vzniklo s příchodem výkonných sestav po roce 2000. Je **tišší a výkonnější** než vzduchové a umí přesunout velké množství tepla z míst, kam se vzduch špatně dostane.

![Vodní okruh: chladicí blok, hadice, radiátor s ventilátorem a pumpa](/images/content/it/uvod-do-vypocetni-techniky/chlazeni-pc/vodni-okruh.webp)

Okruh tvoří **pumpa, chladicí bloky** (CPU, GPU, paměti), **radiátor, hadice, expanzní nádoba, ventilátory** a **kapalina** (nejlépe demineralizovaná voda nebo olej). Prodávají se hotové sady i jednotlivé díly.

## Extrémní chlazení

Tekutý dusík nebo oxid uhličitý pro rekordní **přetaktování** procesorů a grafik. Je velmi drahé (jedna tlaková láhev kolem 10 000 Kč).

## Otázky k opakování

- Které součástky produkují nejvíc tepla?
- Jaké druhy chlazení znáte a čím se liší pasivní a aktivní?
- K čemu slouží teplovodivá pasta?
- Jak funguje heatpipe?
- Z čeho se skládá vodní chlazení?
