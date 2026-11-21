---
title: "Antivirové programy"
order: 25
source: "osy/antivirové programy.pdf"
---
**Antivirus** chrání před [malwarem](/it/operacni-systemy/26-malware/): hledá ho, brání spuštění, nakažené soubory odstraní nebo izoluje. Dnes chrání i před podvodnými weby a e-maily → **antimalware**, **bezpečnostní balík**.

Přehled druhů antivirové ochrany:

- jednoúčelové antiviry
- internetové online skenery
- antivirové skenery (on-demand, on-access)
- metody detekce: databáze signatur, heuristická analýza, behaviorální analýza, kontrola integrity

## Jednoúčelové antiviry

- odstraní **jeden konkrétní virus** nebo malou skupinu
- není plnohodnotná ochrana
- většinou zdarma, k likvidaci aktuálně rozšířeného viru

## Internetové online skenery

- skript/program v prohlížeči prohledá disk, aniž by v něm zůstal
- chybí **rezidentní ochrana**
- vždy **aktuální databáze**
- **druhý názor**, když antivirus možná něco přehlédl

## Antivirové skenery

### On-demand skener

- skenuje **na požádání** – uživatel vybere oblast (disk, flash) a spustí
- lze i plánovačem (čas, událost)

### On-access skener (rezidentní ochrana)

- **neustále a automaticky** (rezidentní štít) testuje spouštěné, otevírané, ukládané soubory a systémové oblasti
- zachytí infikovaný soubor **ještě před spuštěním**; uživatel rozhodne, co s ním
- **není doporučeno kombinovat on-access skenery více antivirových programů na jednom PC!** Více on-access skenerů může způsobit pád systému nebo neschopnost detekovat virus. Druhý antivirus se proto používá jen jako on-demand skener.

## Metody detekce

### Databáze signatur

**Signatura** je charakteristická část kódu nebo otisk (hash) známého malwaru. Antivirus porovnává soubory s databází signatur. Detekce je spolehlivá a bez falešných poplachů, ale odhalí jen **známý** malware — databáze se proto aktualizuje několikrát denně.

### Heuristická analýza

- hledá v kódu **postupy typické pro viry**
- odhalí i **neznámé** viry
- možné **falešné poplachy**

### Behaviorální analýza a sandbox

Antivirus sleduje, **co program dělá** za běhu (hromadně šifruje soubory, zapisuje se do spouštění systému, vypíná ochranu) a podezřelou činnost zastaví. Neznámý program lze nejdřív spustit v **sandboxu** — izolovaném prostředí, ze kterého nemůže poškodit systém.

### Kontrola integrity

- porovnává aktuální stav souborů a oblastí disku s uloženým stavem z minula
- zachytí i **neznámé** viry

### Cloudová analýza

Neznámý soubor se ověří proti cloudové databázi výrobce, kde se vyhodnocují data od milionů uživatelů — nová hrozba se tak rozpozná během minut.

## Co antivirus dělá s nálezem

- **léčení** — odstraní škodlivý kód ze souboru, pokud to jde,
- **karanténa** — přesune soubor do izolované složky, kde nemůže škodit; lze ho později obnovit (při falešném poplachu) nebo smazat,
- **smazání** souboru.

## Další součásti bezpečnostních balíků

- **webový štít** — blokuje podvodné a škodlivé weby, kontroluje stahované soubory,
- **e-mailový štít** — kontroluje přílohy a odkazy v poště, antispam,
- **firewall** — řídí síťový provoz — viz [Firewall](/it/operacni-systemy/27-firewall/),
- **ochrana proti ransomwaru** — chráněné složky, do kterých smí zapisovat jen povolené programy,
- **záchranný disk** — spuštění antiviru z USB mimo nakažený systém.

Ve Windows je zabudovaná ochrana **Microsoft Defender** (Zabezpečení Windows); při instalaci jiného antiviru se rezidentní ochrana Defenderu sama vypne. Známé antiviry: Avast, AVG, ESET NOD32, Bitdefender, Kaspersky, Norton. Ve firmách se používají centrálně spravovaná řešení **EDR** (Endpoint Detection and Response), která hlásí události z počítačů do konzole správce.

## Zásady

- mít jen **jeden** rezidentní antivirus a udržovat ho i systém **aktuální**,
- nevypínat ochranu „na chvíli“ kvůli instalaci programu z neznámého zdroje,
- antivirus není stoprocentní — doplňuje ho opatrnost uživatele, aktualizace a [zálohování](/it/operacni-systemy/21-zalohovani-dat/).
