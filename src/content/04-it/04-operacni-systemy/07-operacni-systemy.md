---
title: "Operační systémy"
order: 7
source: "osy/Operační_systémy.pdf"
---
OS je prostředník mezi uživatelem a programy na jedné straně a hardwarem na druhé. Skládá se z programů, které **řídí a koordinují** hardware a aplikace. Funkce:

## 1.1 Synchronizace

Součásti hardwaru (procesor, RAM, disk, grafika…) musí spolupracovat. OS je **sladí** – určuje, kdo, co a kdy vykoná.

## 1.2 Správa procesoru

Procesor vykonává většinu výpočtů a chtějí ho všechny programy → OS ho **přiděluje**.

- **Úloha** = spuštěný program (Adobe Reader); skládá se z menších **procesů**.
- Více úloh „naráz“ je **iluze** – procesor dělá jednu věc po druhé a střídá je tak rychle, že to tak vypadá.
- **Multitasking** = běh více úloh na jednom počítači.

![Kooperativní multitasking: zamrzlý proces zastaví celý počítač; preemptivní: procesy A, B, C se cyklicky střídají; virtuální paměť odkládá data z RAM na disk](/images/content/it/operacni-systemy/funkce-os/multitasking.webp)

### Kooperativní multitasking

Windows 3.x, 95, 98. Program drží procesor, **dokud ho sám nevrátí**. Když **zatuhne**, nevrátí ho → **zatuhne celý počítač** (restart).

### Preemptivní multitasking

Současné OS. OS procesor **přiděluje i odebírá**; program ho dostane jen na **desítky až stovky ms**. Zatuhnutý program OS procesor odebere → pád jednoho programu **nesráží systém**.

**Správce procesů** určuje pořadí. Strategie:

1. **FIFO** – fronta, kdo dřív přijde; není preemptivní.
2. **Prioritní** – podle priority procesu.
3. **Nejkratší úloha** – přednost mají ty s nejkratší potřebou procesoru.
4. **Cyklické plánování (round robin)** – fronta FIFO, ale každý má časové kvantum a pak jde na konec.
5. **Vícenásobná fronta** – cyklické plánování + priority.

**Rodičovský proces** – spouští další procesy; správně se spustí první a skončí poslední.

## 1.3 Správa paměti

Spuštěný program musí být v **operační paměti**, ta není nekonečná. **Správce paměti**:

1. **přiděluje** paměť procesům,
2. vede přehled **volné a přidělené** paměti (komu),
3. **odebírá** paměť, je-li nutné,
4. **chrání** paměť – proces nesmí změnit cizí data ani o jediný bit.

**Virtuální paměť** – místo na disku; při nedostatku RAM OS odloží data na disk. Je mnohem **pomalejší**. Jinak **stránkovací** nebo **swapovací soubor**.

## 1.4 Správa informací

Pro každý soubor a adresář se evidují údaje (vytvoření, změna, typ…) a musí být jasné, **kde na disku leží**. Data se mění, kopírují, přesouvají, mažou – stará se o to OS.

**Souborový systém (file system)** určuje, které části souboru patří k sobě, kde jsou uloženy a do které složky patří; eviduje název, příponu, datum změny… Dva hlavní ve Windows; ostatní (exFAT, ext4, APFS…): [Souborové systémy](/it/operacni-systemy/28-souborove-systemy/).

| | **FAT32** | **NTFS** |
| --- | --- | --- |
| stáří | starší | novější |
| dnes | USB flash disky | disky Windows |
| max. soubor | 4 GB | 16 TB |
| max. oddíl | 32 GB (při formátování ve Windows) | 16 EB |
| oprávnění | ne | na úrovni souborů a složek |
| šifrování | ne | ano |
| diskové kvóty | ne | ano (např. 4 GB na uživatele) |
| komprese | ne | ano |

**Úkol:** najdi tři další souborové systémy a jejich využití.

## 1.5 Správa periférií

OS přiděluje procesům i další zařízení (disky, tiskárny…) a stará se o jejich **efektivní využití** – podobně jako u procesoru.

### Otázky:

1. Co je to multitasking?

2. Vysvětlete rozdíl mezi kooperativním a preemptivním multitaskingem.

3. Jaká je nevýhoda kooperativního multitaskingu?

4. Jaké jsou úkoly Správce paměti?

5. Popište rozdíl mezi souborovými systémy FAT32 a NTFS.
