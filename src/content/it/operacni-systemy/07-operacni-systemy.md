---
title: "Operační systémy"
order: 7
source: "osy/Operační_systémy.pdf"
---
Operační systém plní roli prostředníka mezi uživatelem a jeho programy na jedné straně a hardwarem počítače na straně druhé.

Operační systém je složen z řady programů, které řídí a koordinují hardware a aplikační programy.

Aby operační systém uspokojil požadavky, které na něj uživatel klade, musí plnit řadu funkcí.

## **1.1 Synchronizace**

Hardware počítače je složen z řady částí, které spolu musí spolupracovat (procesor, operační paměť, pevný disk, grafická karta, atd.). Aby spolupráci mohly vykonávat efektivně, je nutné je sladit. A to je úkolem OS – musí řící kdo, co a kdy má vykonávat.

## **1.2 Správa procesoru**

Procesor vykonává většinu výpočtů v počítači. O služby procesoru mají zájem všechny programy, které jsou na počítači spuštěny. Operační systém proto musí procesor programům přidělovat.

Často se můžete setkat s pojmy **úloha** a **proces** . Úloha je spuštěný program (např. Adobe Reader). Takový program je ale velký a proto se může skládat z menších částí (dalších programů), kterým se říká procesy.

Když máte zapnutý počítač, tak se vám zdá, že na něm běží více úloh najednou (píšete dopis, stahujete film z internetu, chatujete s kamarády, posloucháte hudbu, atd.). Tyto činnosti pomáhá zpracovávat procesor, navíc se vám musí zdát, že vše probíhá současně (nechcete čekat až dohraje písnička, aby jste mohli dopsat další řádek dopisu). To, že procesor vykonává více operací najednou, je zdání. Procesor vykonává jednu činnost po druhé a střídá je tak rychle, že to v člověku vyvolává iluzi běhu více úloh najednou.

Běhu více úloh na jednom počítači se říká **multitasking** .

#### **Kooperativní multitasking**

Používal se například u operačních systémů Windows 3.x, Windows 95, Windows 98. Program obdrží od OS procesor a používá jej tak dlouho, jak potřebuje. Když už procesor nepotřebuje, vrátí jej zpět OS a ten jej přidělí dalšímu programu. Nevýhodou tohoto způsobu je, že pokud program uvázne (zatuhne) v okamžiku, kdy má k dispozici procesor, nemůže jej vrátit OS a zatuhne celý počítač – nutnost restartovat počítač.

#### **Preemptivní multitasking**

Používá se u současných operačních systémů. Operační systém nejen přiděluje, ale také odebírá procesor programům. Program dostane procesor pouze na určitou dobu (desítky, nebo stovky milisekund). Výhodo tohoto řešení je v tom, že pokud program uvázne, OS mu po určité době procesor odebere a předá ho dalším programům. Pád jednoho programu nezpůsobí pád celého systému.

Správce procesů (součást OS) musí rozhodnout v jakém pořadí přidělí procesům procesor. Existuje spousta strategií pro přidělování procesoru, pojďme se na pár podívat:

1. **FIFO** – First in first out. Procesy se postaví do fronty a čekají na procesor. Nejedná se o preemptivní strategii.

2. **Prioritní** – Každý proces má svou prioritu a podle ní je mu přidělen procesor.

3. **Nejkratší úloha** – přednost mají procesy, které procesor potřebují na nejkratší dobu

4. **Cyklické plánování** – Fronta FIFO, ale proces dostane procesor na určitý čas a pak jde na konec fronty.

5. **Vícenásobná fronta** – Kombinace cyklického plánování a prioritní strategie. OS seřadí procesy do fronty podle priority a přiděluje jim procesor na určitou dobu.

**Rodičovský proces** – základní proces, který spouští další procesy. Je-li naprogramován dobře, tak se spustí jako první a ukončí jako poslední.

## **1.3 Správa paměti**

Program, se kterým se pracuje, je nahrán v operační paměti. Velikost operační paměti není nekonečná, a proto tu musí být někdo (OS), kdo dá operační paměť programu k dispozici a kdo mu jí v případě nutnosti odebere. Správce paměti (součást OS) má za úkol:

1. Přidělovat paměť procesům.

2. Udržovat přehled o volné paměti a přidělené paměti (a komu).

3. Odebírat paměť procesům (je-li to nutné).

4. Ochrana paměti – aby žádný proces nemohl změnit data jiného procesu byť změnou jediného bitu.

**Virtuální paměť** – Místo, které si OS vyhradí na harddisku.  V případě, že nemá dostatek místa na spuštěné procesy v operační paměti, odloží OS některá data do virtuální paměti, tedy na pevný disk. Práce s virtuální paměti je značně pomalejší (pevný disk je pomalejší, než operační paměť). Virtuální paměť se také označuje jako **stránkovací soubor** , nebo **swapovací soubor** .

#### **Úkol:**

## **1.4 Správa informací**

O každém souboru a adresáři musí být vedeny informace (datum a čas vytvoření, změny, typ souboru, atd.). Musí být také naprosto jasné, kde je na pevném disku požadovaný soubor uložen. Data se zároveň mění, kopírují, přesouvají, mažou. O všechny tyto operace a informace se musí postarat operační systém.

O správu dat na harddisku se stará tzv. **souborový systém** (file system). Souborový systém se stará o to, které části souboru patří k sobě, kde jsou uloženy na pevném disku a do které složky významově patří (ve které složce se uživateli zobrazí). Souborový systém také eviduje o souboru řadu informací (název, přípona, datum změny, atd.). Souborových systémů je celá řada, my si popíšeme dva nejpoužívanější v operačních systémech Windows.

#### **1.4.1 FAT32**

- starší

- v dnešní době se používá zejména u USB Flash disků

- umožňuje uložit soubor o maximální velikosti 4 GB

- lze naformátovat pouze diskový oddíl s max. velikostí 32 GB

#### **1.4.2 NTFS**

- novější

- umožňuje uložit soubor o velikosti až 16 TB

- umožňuje nastavovat přístupová oprávnění na úrovni souborů a složek

- umožňuje šifrování dat

- umožňuje vytvářet diskové kvoty pro jednotlivé uživatele (uživatel má přiděleno omezené místo na disku – např. 4 GB)

- komprimuje soubory

- lze naformátovat pouze diskový oddíl s max. velikostí 16 EB

#### **Úkol:**

Na internetu najděte tři další souborové systémy a jejich využití.

## **1.5 Správa periférií**

OS přiděluju procesům také ostatní zařízení (disky, tiskárny,...). Podobně jako u přidělování procesoru se musí postarat o to, aby byla tato zařízení efektivně využita.

### **Otázky:**

1. Co je to multitasking?

2. Vysvětlete rozdíl mezi kooperativním a preemptivním multitaskingem.

3. Jaká je nevýhoda kooperativního multitaskingu?

4. Jaké jsou úkoly Správce paměti?

5. Popište rozdíl mezi souborovými systémy FAT32 a NTFS.

#### **Úkol:**

Přiřaďte správné tvrzení:
