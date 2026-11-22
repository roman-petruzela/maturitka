---
title: "RAID"
order: 17
source: "osy/RAID.pdf"
---
**RAID** (Redundant Array of Independent Disks) = ochrana dat před **selháním disku**: data se ukládají na více nezávislých disků, takže přežijí výpadek některého.

![Čtyři úrovně RAID: RAID 0 prokládání, RAID 1 zrcadlení, RAID 5 s rotující paritou a RAID 10](/images/content/it/operacni-systemy/raid/urovne.webp)

## Realizace

- **softwarová** – obsluhuje OS (ovladač): zatěžuje CPU, zpomaluje zápis,
- **hardwarová** – **řadič** obsluhuje pole sám, CPU netížen.

Při výpadku disku správce **vymění** vadný disk a začlení ho; následuje **rekonstrukce pole** (dopočítání chybějících dat).

### RAID není záloha!

Data nejsou na bezpečném místě a nejde se vrátit ke starší verzi (smazání, virus, požár). Viz [zálohování](/it/operacni-systemy/21-zalohovani-dat/).

## Přehled úrovní

| Úroveň | Disků | Princip | Kapacita | Přežije | Výkon |
| --- | --- | --- | --- | --- | --- |
| **JBOD** | 2+ | zřetězení | součet | část souborů zůstane | beze změny |
| **RAID 0** | 2+ | prokládání | součet | **nic** | čtení i zápis rychlejší |
| **RAID 1** | 2 | zrcadlení | ½ | 1 disk | čtení rychlejší |
| **RAID 3** | 3+ | data + vyhrazený paritní disk | n − 1 | 1 disk | paritní disk je úzké hrdlo |
| **RAID 5** | 3+ | data + **rotující parita** | n − 1 | 1 disk | rychlé čtení, pomalejší zápis |
| **RAID 10** (1+0) | 4+ | zrcadla prokládaná | ½ | 1 disk v každém zrcadle | rychlé, bez výpočtu parity |

## RAID 0

Není to skutečný RAID – **nemá redundanci**.

- **zřetězení** – data postupně na několik disků; vyšší kapacita,
- **prokládání (striping)** – data střídavě po blocích; **zrychlí čtení i zápis** (paralelně z více disků). Při poruše disku je málo pravděpodobné, že by nějaký soubor zůstal celý.

## RAID 1

Nejjednodušší ochrana: obsah se zapisuje na **dva disky zároveň**. Při výpadku jednoho se pracuje s kopií ihned.

## RAID 3

**N + 1 disků**: N na data, 1 na **paritní bit** (sudá/lichá parita; detekce chyby).

- výpadek paritního disku – data zůstanou,
- výpadek datového disku – data se **rekonstruují** z ostatních a z parity,
- nevýhoda: **vytížení paritního disku**.

## RAID 5

**Parita je rozložena** střídavě na všechny disky → žádný se nepřetěžuje. **Rychlé čtení** (paralelní přístup), **pomalejší zápis** (výpočet parity).

## RAID 10 (1+0)

Nejdřív **zrcadlení**, ta se pak spojí **prokládáním** (RAID 0) → rychlé a bez parity. Bez ztráty může selhat **jeden disk v každém zrcadle**.

## JBOD

*Just a Bunch Of Disks* – **zřetězení**: plní se první disk, pak druhý…

- snadné **zvětšení kapacity** přidáním disku,
- při výpadku disku mohou **některé soubory zůstat**,
- disky různé velikosti → zachová se celková kapacita.

## Otázky k opakování

1. Co je RAID a proč není zálohou? ||ochrana před selháním disku ukládáním dat na více disků; nechrání před smazáním, virem ani požárem||
2. Čím se liší RAID 0 a RAID 1? ||RAID 0 prokládá data (rychlost, bez ochrany); RAID 1 zrcadlí na dva disky (ochrana, poloviční kapacita)||
3. Jak funguje RAID 5? ||parita rotuje po všech discích, přežije výpadek jednoho disku; kapacita n − 1||
4. Co je RAID 10? ||zrcadla spojená prokládáním; rychlé, minimálně 4 disky||
5. Jaký je rozdíl mezi softwarovým a hardwarovým RAID? ||softwarový obsluhuje OS (zatěžuje CPU), hardwarový řadič||
