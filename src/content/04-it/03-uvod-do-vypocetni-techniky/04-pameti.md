---
title: "Paměti"
order: 4
source: "IT/7. Paměti.docx"
---

![Hierarchie pamětí jako pyramida: nahoře registry a cache, pak RAM, SSD, HDD a dole páska, optika a cloud; nahoru rychlejší a dražší, dolů větší kapacita](/images/content/it/uvod-do-vypocetni-techniky/pameti/hierarchie.webp)

**Paměť** ukládá programy a data; čtení, zápis a zabezpečení přenosu řídí **paměťový řadič**.

## Dělení pamětí

| Podle | Druhy |
| --- | --- |
| **principu zápisu** | polovodičové (RAM, ROM, flash), magnetické (HDD), optické (CD, DVD, Blu-ray), magnetooptické |
| **napájení** | **volatilní** – bez napětí data zmizí (RAM); **nevolatilní** – data drží (ROM, flash, disky) |
| **přístupu** | **RAM** – libovolný přístup, doba nezávisí na umístění; **sekvenční** – závisí na umístění (pásky) |
| **určení** | **vnitřní** – registry, cache, operační paměť, firmware; **vnější** – disky, optika, flash |

**Podle možnosti zápisu:** **RAM** čtení i zápis; **ROM** jen čtení (zapsáno při výrobě); **PROM** zapíše uživatel jednou; **EPROM** maže UV záření; **EEPROM** maže elektricky; **Flash** elektricky po blocích, data drží bez napájení.

**Parametry:** kapacita, **přístupová doba** (od požadavku k datům), **přenosová rychlost**, latence, cena za bit.

## Polovodičové paměti

- **Registry** – v procesoru, nejrychlejší, jednotky bajtů.
- **Cache** – vyrovnávací paměť mezi různě rychlými částmi; L1 (nejrychlejší) → L2 → L3.
- **SRAM** – rychlá, drahá, bez obnovování → registry a cache. **DRAM** – levná, musí se obnovovat → operační paměť: **SDRAM**, **DDR** až **DDR5**.
- **Moduly:** **DIMM** (stolní PC), **SO-DIMM** (notebooky).

Podrobně: [RAM a ROM](/it/uvod-do-vypocetni-techniky/11-pameti-ram-a-rom/).

## Pevný disk (HDD)

Velkokapacitní **magnetická** nevolatilní paměť, na které je OS a data. Skládá se z **plotny** (nesou data), **hlav** na raménku (zápis indukčně, čtení magnetorezistivně), motoru (5 400 – 10 000 ot/min), vystavovacího mechanismu a **elektroniky** (řadič, firmware, cache). Rozhraní **SATA**, dříve PATA.

![Geometrie disku: stopa jako soustředná kružnice, sektor jako výseč stopy, cylindr jako stopy se stejným číslem na všech plotnách](/images/content/it/uvod-do-vypocetni-techniky/pameti/hdd-geometrie.webp)

- **Stopa** – soustředná kružnice, **sektor** – její část (512 B nebo 4 KiB), **cylindr** – stopy stejného čísla na všech plotnách, **cluster** – nejmenší alokační jednotka.
- Před použitím se disk **formátuje**; **MBR** / **GPT** obsahuje tabulku oddílů, **souborový systém** (FAT32, NTFS, ext4) vznikne formátováním.
- **Defragmentace** srovná rozptýlené části souborů (u SSD se nedělá).

Podrobně: [HDD a SSD](/it/uvod-do-vypocetni-techniky/12-pevne-disky-hdd-a-ssd/).

## Optické paměti

CD 700 MB, DVD 4,7 – 17 GB, Blu-ray 25 GB na vrstvu – viz [optické disky](/it/uvod-do-vypocetni-techniky/13-opticke-disky-cd-dvd-blu-ray/).

## Otázky k opakování

1. Jak se dělí paměti podle napájení a přístupu? ||volatilní (RAM) × nevolatilní (ROM, flash, disky); s libovolným × sekvenčním přístupem||
2. Jaký je rozdíl mezi SRAM a DRAM? ||SRAM je rychlá, drahá a bez obnovování (cache); DRAM levná, nutné obnovování (operační paměť)||
3. Čím se liší ROM, PROM, EPROM, EEPROM a Flash? ||ROM zapsaná při výrobě, PROM jednou uživatelem, EPROM maže UV, EEPROM elektricky, Flash elektricky po blocích||
4. Jaké jsou úrovně hierarchie pamětí? ||registry → cache → RAM → SSD/HDD → optika, pásky; nahoru rychlejší a dražší||
5. Z čeho se skládá HDD? ||plotny, hlavy, motor, vystavovací mechanismus, elektronika (řadič, firmware, cache)||
6. Vysvětlete stopu, sektor, cylindr a cluster. ||stopa je kružnice na plotně, sektor její část, cylindr stopy nad sebou na všech plotnách, cluster nejmenší alokační jednotka||
