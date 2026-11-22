---
title: "Operační systémy"
order: 7
source: "osy/Operační_systémy.pdf"
---

OS **řídí a koordinuje** hardware a aplikace. Hlavní funkce:

## Správa procesoru

Procesor chtějí všechny programy, proto ho OS **přiděluje**. Spuštěný program je **úloha** a skládá se z menších **procesů**. Běh více úloh naráz je **iluze**: procesor je střídá tak rychle, že to tak vypadá (**multitasking**).

![Kooperativní multitasking: zamrzlý proces zastaví celý počítač; preemptivní: procesy A, B, C se cyklicky střídají; virtuální paměť odkládá data z RAM na disk](/images/content/it/operacni-systemy/funkce-os/multitasking.webp)

| | **Kooperativní** | **Preemptivní** |
| --- | --- | --- |
| kdo vrací procesor | program **sám** | OS ho **odebere** po desítkách až stovkách ms |
| zatuhne program | zatuhne celý počítač | OS mu procesor odebere, systém běží |
| použití | Windows 3.x, 95, 98 | současné OS |

**Plánování procesů:** **FIFO** (fronta), **prioritní**, **nejkratší úloha první**, **cyklické (round robin)** – každý dostane časové kvantum.

## Správa paměti

Spuštěný program musí být v **operační paměti**. **Správce paměti** ji **přiděluje** procesům, vede přehled volné a přidělené, **odebírá** ji a **chrání** (proces nesmí číst ani měnit cizí data). Při nedostatku RAM odloží OS data na disk: **virtuální paměť** (stránkovací / swapovací soubor), která je mnohem **pomalejší**.

## Správa dat (souborový systém)

OS eviduje údaje o souborech a adresářích (název, typ, datum, **kde na disku leží**). Souborový systém určuje, které části souboru patří k sobě a do které složky. Přehled systémů: [souborové systémy](/it/operacni-systemy/28-souborove-systemy/).

| | **FAT32** | **NTFS** |
| --- | --- | --- |
| dnes | USB flash disky | disky Windows |
| max. soubor | 4 GB | 16 TB |
| oprávnění, šifrování, kvóty, komprese | ne | ano |

## Správa periférií

OS přiděluje procesům i další zařízení (disky, tiskárny) a stará se o jejich **efektivní využití**; hardware komponent sladí (**synchronizace**).

## Otázky k opakování

1. Co je multitasking? ||běh více úloh na jednom počítači střídáním procesoru||
2. Jaký je rozdíl mezi kooperativním a preemptivním multitaskingem? ||u kooperativního program procesor vrací sám (zatuhne celý počítač), u preemptivního ho OS odebírá||
3. Jaké strategie plánování znáte? ||FIFO, prioritní, nejkratší úloha, round robin||
4. Jaké jsou úkoly správce paměti? ||přidělovat, evidovat, odebírat a chránit paměť||
5. Co je virtuální paměť? ||část disku, kam OS odkládá data při nedostatku RAM; pomalejší||
6. Čím se liší FAT32 a NTFS? ||NTFS: větší soubory a oddíly, oprávnění, šifrování, kvóty, komprese; FAT32 jen jednoduché USB disky||
