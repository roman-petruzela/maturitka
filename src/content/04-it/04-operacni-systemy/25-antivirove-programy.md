---
title: "Antivirové programy"
order: 25
source: "osy/antivirové programy.pdf"
---
**Antivirový program** chrání počítač před [malwarem](/it/operacni-systemy/26-malware/): vyhledává ho, brání jeho spuštění a infikované soubory odstraňuje nebo izoluje. Dnešní antiviry chrání i před podvodnými weby a e-maily, proto se jim říká také **antimalware** nebo **bezpečnostní balík**.

Přehled druhů antivirové ochrany:

- jednoúčelové antiviry
- internetové online skenery
- antivirové skenery (on-demand, on-access)
- metody detekce: databáze signatur, heuristická analýza, behaviorální analýza, kontrola integrity

## Jednoúčelové antiviry

- programy na detekci, popřípadě odstranění jednoho konkrétního viru, nebo malé skupiny virů
- nejedná se o plnohodnotnou antivirovou ochranu
- jsou většinou zdarma a často slouží k likvidaci rozšířeného viru v dané době

## Internetové online skenery

- skript nebo program, který je schopen ve spojení s internetovým prohlížečem prohledat pevný disk PC, aniž by v něm zůstal natrvalo
- nejedná se o plnohodnotný antivirus, protože mu chybí rezidentní ochrana
- pracuje vždy s aktuální virovou databází
- hodí se jako **druhý názor**, když je podezření, že nainstalovaný antivirus něco přehlédl
- přehled: <https://cs.safetydetectives.com/blog/nejlepsichonline-antivirovych-scanneru/>

## Antivirové skenery

### On-demand skener

- skenuje (vyhledává) viry až po vydání požadavku uživatelem
- požadavek je vydáván manuálně, vybráním požadované oblasti pro test (pevný disk, flash disk…) a stiskem tlačítka „start“
- lze spouštět i s pomocí plánovače (v určitém čase, po určité události)

### On-access skener (rezidentní ochrana)

- neustále a automaticky vyhledává viry v datech (nejčastěji souborech), se kterými přijde uživatel do styku (rezidentní štít)
- on-access skener testuje
  - spouštěné soubory a programy
  - otevírané (kopírované) soubory
  - ukládané soubory
  - systémové oblasti
- on-access skener zachytí infikovaný soubor ještě před spuštěním (uložením), uživatel poté rozhodne, jak s tímto souborem naloží
- **není doporučeno kombinovat on-access skenery více antivirových programů na jednom PC!** Více on-access skenerů může způsobit pád systému nebo neschopnost detekovat virus. Druhý antivirus se proto používá jen jako on-demand skener.

## Metody detekce

### Databáze signatur

**Signatura** je charakteristická část kódu nebo otisk (hash) známého malwaru. Antivirus porovnává soubory s databází signatur. Detekce je spolehlivá a bez falešných poplachů, ale odhalí jen **známý** malware — databáze se proto aktualizuje několikrát denně.

### Heuristická analýza

- rozbor kódu hledající postupy pro činnost virů typické nebo podezřelé
- lze odhalit i doposud neznámé viry
- může způsobit i falešný poplach

### Behaviorální analýza a sandbox

Antivirus sleduje, **co program dělá** za běhu (hromadně šifruje soubory, zapisuje se do spouštění systému, vypíná ochranu) a podezřelou činnost zastaví. Neznámý program lze nejdřív spustit v **sandboxu** — izolovaném prostředí, ze kterého nemůže poškodit systém.

### Kontrola integrity

- je založena na porovnávání aktuálního stavu souborů a oblastí na disku s informacemi, které si kontrolní program uschoval při posledním spuštění
- umí zachytit i dosud neznámé viry

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
