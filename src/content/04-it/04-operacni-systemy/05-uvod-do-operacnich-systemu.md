---
title: "Úvod do operačních systémů"
order: 5
source: "osy/Úvod_do _operačních_systémů.pdf"
---
**Operační systém (OS)** = prostředník mezi uživatelem a hardwarem. Spravuje hardware a programy, aby se s počítačem dalo pracovat.

![Vrstvy: uživatel, aplikace, operační systém s jádrem, uživatelským rozhraním a souborovým systémem, ovladače a BIOS, hardware](/images/content/it/operacni-systemy/uvod/vrstvy.webp)

## Jak OS komunikuje

1. Uživatel zadává příkazy **přímo OS** (kopíruj, smaž) nebo používá programy OS (kalkulačka).
2. Uživatel pracuje s **aplikací**; ta o službu požádá OS.
3. Aplikace žádá OS o operaci (vytvoř soubor `dopis.txt`).
4. Programy (střih videa, zvuk) neumí řídit konkrétní součástku → používají **ovladač**.
5. Přímý přístup programu k hardwaru je výjimečný (programy pro konkrétní HW).
6. OS může s HW mluvit **přímo** jen u běžných standardních zařízení, která znal při vzniku; jinak by se musel s každou novou součástkou přeprogramovat.
7. Jinak OS využije **BIOS**.
8. Nebo **ovladač**, když BIOS zařízení nezná.
9. **Ovladač (driver)** = program, který umí řídit konkrétní hardware pro konkrétní OS. Každý OS „mluví jiným jazykem“, proto výrobci nabízejí ovladače pro různé systémy. Ovladač se do OS nainstaluje a ten se zařízení „naučí“.

**Úkoly:**

1. Najdi ovladač tiskárny **HP Color LaserJet Pro CP1025** pro **Windows 7 32-bit**.
2. Najdi ovladače k desce **MSI 970 Gaming** pro **Windows XP 64-bit**.
3. Zjisti v OS, zda má tvůj počítač ovladače ke všem komponentám (Správce zařízení).

### BIOS

Počítač bez OS jde zapnout díky **BIOSu** – kód na desce (dnes Flash ROM). Po zapnutí zjistí a otestuje hardware, načte jeho parametry, zavede OS do paměti a předá mu zjištěné informace. Podrobně: [BIOS](/it/uvod-do-vypocetni-techniky/07-bios/).

Tři vrstvy:

1. **Flash ROM** – vlastní systém BIOSu od výrobce; lze přepsat (špatný zápis může zničit desku).
2. **CMOS** – konfigurace (čas, disky, takt procesoru); energeticky závislá, drží ji **baterie** na desce.
3. **BIOS komponent** (na kartách, discích) – nastavení a informace zařízení (u DVD-ROM podporované formáty) = **firmware**.

Setup (klávesa F2, Delete…) nabízí:

1. takt procesoru a RAM, napájecí napětí,
2. detekci HDD, CD-ROM, DVD-ROM,
3. nastavení periferií (zvuk, síť, modem),
4. **bootovací sekvenci** (HDD, CD-ROM, USB, LAN),
5. **hardware monitor** – teploty, napětí, ventilátory.

**Úkoly:** najdi návod na přepsání BIOSu; dostaň se v BIOSu doma a odejdi přes *Exit Without Saving*.

### UEFI

Nástupce BIOSu. Důvody:

- **Secure Boot** – při startu se kontrolují elektronické podpisy OS (jde vypnout),
- využití nových procesorů,
- **GPT** – zavedení OS z oddílů nad 2 TB (limit MBR).

Spekuluje se, že UEFI vzniklo kvůli Secure Bootu a omezení alternativních OS.

### Základní části operačního systému

1. **Jádro (kernel)** – řídí chod OS: které programy běží a jaké zdroje dostanou (komu a na jak dlouho se půjčí procesor).
2. **Uživatelské rozhraní** – komunikace s uživatelem: **textové** (příkazový řádek) nebo **grafické** (myš, nabídky).
3. **Souborový systém** – jak OS spravuje data: pojmenování, adresáře, organizace.

## Otázky:

1. Co je účelem operačního systému?

2. Ze kterých tří hlavních částí se skládá operační systém?

3. Jaké úkoly splní BIOS po zapnutí počítače?

4. Jaké informace a nastavení můžeme najít v setupu BIOSu?

5. K čemu slouží ovladač neboli driver?

6. Je obvyklé, že se ovladač pro jednu hardwarovou komponentu vyrábí ve více verzích pro různé operační systémy?
