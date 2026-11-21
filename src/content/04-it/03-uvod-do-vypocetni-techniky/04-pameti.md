---
title: "Paměti"
order: 4
source: "IT/7. Paměti.docx"
---
![Hierarchie pamětí jako pyramida: nahoře registry a cache, pak RAM, SSD, HDD a dole páska, optika a cloud; nahoru rychlejší a dražší, dolů větší kapacita](/images/content/it/uvod-do-vypocetni-techniky/pameti/hierarchie.webp)

- Ukládá programy a data
- **Paměťový řadič** – řídí čtení, zápis a zabezpečení přenosu
- Podle principu zápisu:
	- **polovodičové** – RAM (statická, dynamická); ROM (PROM, EPROM, EEPROM, Flash)
	- **magnetické** s pohyblivou vrstvou – HDD, disketa (FDD)
	- **optické** – CD, DVD, Blu-ray
	- **magnetooptické** – laser mění magnetické vlastnosti
- Podle napájení:
	- **závislé (volatilní)** – bez napětí data zmizí (RAM)
	- **nezávislé** – napětí jen pro čtení/zápis, data drží (ROM, flash, disky)
- Podle přístupu:
	- **RAM (libovolný přístup)** – doba přístupu nezávisí na umístění
	- **sekvenční** – závisí na umístění (pásky)
- Podle zápisu:
	- **RAM** – čtení i zápis
	- **ROM** – jen čtení, zapsáno při výrobě
	- **PROM** – uživatel zapíše jednou programátorem
	- **EPROM** – mazání **UV zářením**, přepsatelná
	- **EEPROM** – mazání **elektricky**, ~100 000 zápisů
	- **Flash** – elektricky po blocích, data drží bez napájení
- Podle určení:
	- **vnitřní** – registry, operační paměť, cache, paměť firmwaru
	- **vnější** – disky, diskety, optika, flash disky, karty
- Parametry:
	- **kapacita** (B)
	- **druh** (polovodičová, optická…)
	- **přístupová doba** – od požadavku k datům
	- **přenosová rychlost** – data za čas
	- **latence** – prodleva prodlužující přístup
	- **cena za bit**
- **Registry** – v procesoru, malé (8–64 b), pro výpočty
- **Cache** – vyrovnávací paměť mezi různě rychlými zařízeními; L1 (nejrychlejší) → L2 → L3

## Polovodičové paměti

- Buňky po 1 bitu v matici na čipu
- **SRAM** – velmi rychlá, malá spotřeba, drahá → registry, cache. **DRAM** – levná, nutné obnovování → operační paměť: **SDRAM** (synchronní), **DDR**, **DDR2** (nižší napětí), **DDR3** (nižší spotřeba, vyšší frekvence), DDR4, DDR5
- **SIPP** – moduly s piny, náchylné k ulomení
- **SIMM** – kontakty místo pinů, snadná instalace
- **DIMM** – SDRAM až DDR5; sběrnice 64 b
- **SO-DIMM** – notebooky

Podrobně: [RAM a ROM](/it/uvod-do-vypocetni-techniky/11-pameti-ram-a-rom/).

## Hard disk (HDD)

- Velkokapacitní, magnetický, **nezávislý**; je na něm OS
- Struktura:
	- **elektromechanika** – hlavy, hřídel, plotny, vystavovací mechanismus, motory
	- **elektronika** – deska (řadič, ROM, cache), konektory
	- **software** – geometrie (stopy, cylindry, sektory, hlavy), logická struktura, souborový systém
- Elektromechanické části:
	- **hlava** – na raménku, aerodynamická, „létá“ nad plotnou; zápis indukčně, čtení **magnetorezistivně** (změna odporu v magnetickém poli)
	- **hřídel (motor)** – nese plotny; vyšší otáčky (5 400, 7 200, 10 000 ot/min) = kratší čekání, ale víc tepla
	- **plotny** – nesou data; 3,5″ a 2,5″; 1–3 i víc; každá strana má hlavu; slitiny hliníku nebo sklo
	- **vystavovací mechanismus** – kmitací cívka v poli permanentních magnetů přesune raménko nad stopu
- Elektronika:
	- funkce: otáčky, pohyb hlav, čtení/zápis, překlad geometrie, cache, řízení toku dat
	- **řadič** – řídí čtení a zápis, koordinuje vše
	- **ROM** – firmware disku, řízení motoru, kódování dat
	- **cache** – urychlí přenos mezi diskem a PC
	- **PATA** – 40pinový konektor, plochý kabel
	- **SATA** – sériové, 1 bit, ale vysoký takt (1,5 / 3 / 6 Gb/s)
- Geometrie:
	- před zápisem se disk **formátuje**
	- **stopa** – soustředná kružnice (až desítky tisíc)
	- **sektor** – část stopy se značkami (číslo, začátek, konec); 512 B nebo 4 KiB
	- **cylindr** – stopy stejného čísla na všech plotnách nad sebou
	- **cluster** – nejmenší alokační jednotka

![Geometrie disku: stopa jako soustředná kružnice, sektor jako výseč stopy, cylindr jako stopy se stejným číslem na všech plotnách](/images/content/it/uvod-do-vypocetni-techniky/pameti/hdd-geometrie.webp)

- **MBR** – začátek disku: zavaděč spouštěný BIOSem + **tabulka oddílů** (dnes **GPT**)
- **Alokační tabulka** – popis každého clusteru oddílu
- **Kořenový adresář** – seznam souborů
- **Defragmentace** – srovná roztroušené kousky souborů k sobě (u SSD se nedělá)
- **Souborový systém** – vznikne formátováním:
	- FAT12, FAT16, FAT32, NTFS (Linux ext4)

Podrobně: [pevné disky HDD a SSD](/it/uvod-do-vypocetni-techniky/12-pevne-disky-hdd-a-ssd/).

## Optické paměti

- CD 700 MB, DVD 4,7–17 GB (podle stran a vrstev), BD 25 GB (vrstva), HD DVD 15 GB – viz [optické disky](/it/uvod-do-vypocetni-techniky/13-opticke-disky-cd-dvd-blu-ray/)

## FDD Floppy disk drive

- 8″, 5,25″ a 3,5″ (1,44 MB)
