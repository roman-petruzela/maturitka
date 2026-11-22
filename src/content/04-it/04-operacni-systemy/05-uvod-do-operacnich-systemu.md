---
title: "Úvod do operačních systémů"
order: 5
source: "osy/Úvod_do _operačních_systémů.pdf"
---

**Operační systém (OS)** je prostředník mezi uživatelem a hardwarem: spravuje hardware a programy, aby se s počítačem dalo pracovat. **Firmware** je naproti tomu program uložený přímo v hardwaru (BIOS, firmware disku).

![Vrstvy: uživatel, aplikace, operační systém s jádrem, uživatelským rozhraním a souborovým systémem, ovladače a BIOS, hardware](/images/content/it/operacni-systemy/uvod/vrstvy.webp)

## Základní části OS

1. **Jádro (kernel)** – řídí chod OS: které programy běží a jaké zdroje (procesor, paměť) dostanou.
2. **Uživatelské rozhraní** – **textové** (příkazový řádek) nebo **grafické** (myš, nabídky).
3. **Souborový systém** – jak OS spravuje data: pojmenování, adresáře, organizace.

## Jak OS komunikuje s hardwarem

Aplikace požádá o službu OS (např. vytvoř soubor). OS s hardwarem mluví buď přes **BIOS**, nebo přes **ovladač**.

**Ovladač (driver)** je program, který umí řídit konkrétní hardware pro konkrétní OS. Každý OS „mluví jiným jazykem“, proto výrobci nabízejí ovladače pro různé systémy. Ovladač se do OS nainstaluje a ten se zařízení „naučí“; zkontroluje se ve **Správci zařízení**.

## BIOS a UEFI

Počítač bez OS jde zapnout díky **BIOSu** – kód na desce ve Flash ROM. Po zapnutí zjistí a otestuje hardware, zavede OS do paměti a předá mu řízení. Podrobně: [BIOS](/it/uvod-do-vypocetni-techniky/07-bios/).

- **Flash ROM** – vlastní systém BIOSu, lze přepsat (aktualizace).
- **CMOS** – konfigurace (čas, disky, takt), drží ji baterie na desce.
- **Setup** (klávesa F2, Delete) – takt procesoru a RAM, detekce disků, periferie, **bootovací sekvence** (HDD, USB, LAN), hardware monitor.

**UEFI** je nástupce BIOSu: **Secure Boot** (kontrola podpisů OS při startu), podpora nových procesorů, **GPT** (disky nad 2 TB, limit MBR).

## Otázky k opakování

1. Jaký je účel operačního systému? ||prostředník mezi uživatelem a hardwarem, spravuje hardware a programy||
2. Ze kterých tří hlavních částí se OS skládá? ||jádro, uživatelské rozhraní, souborový systém||
3. K čemu slouží ovladač? ||umí řídit konkrétní hardware pro konkrétní OS||
4. Jaké úkoly plní BIOS po zapnutí? ||zjistí a otestuje hardware, zavede OS do paměti a předá mu řízení||
5. Co nabízí setup BIOSu? ||takt a napětí, detekci disků, periferie, bootovací sekvenci, hardware monitor||
6. Čím se UEFI liší od BIOSu? ||Secure Boot, podpora GPT a disků nad 2 TB, nové procesory||
