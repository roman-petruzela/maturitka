---
title: "Internet"
order: 4
source: "IT/13. Internet.docx"
---

## Vznik a vývoj Internetu

- Internet je celosvětová počítačová síť typu WAN, která propojuje lokální a metropolitní sítě (LAN, MAN) – „síť sítí“.
- Začátky sahají do roku **1969**, kdy vznikla síť **ARPANET**. Sloužila nejprve pro vojenské a výzkumné účely, časem se k ní připojovaly i civilní instituce, hlavně univerzity.
- Myšlenkou bylo propojit různé počítače tak, aby si mohly předávat data dál, i když část sítě vypadne.
- V roce 1983 přešel ARPANET na protokoly **TCP/IP**, na kterých Internet funguje dodnes; v roce 1984 vznikl systém doménových jmen DNS.
- Československo se k Internetu připojilo v roce 1992.

## Technologie dálkových linek WAN

- Dvoubodové spojení mezi různými pobočkami firmy.
- Připojení většího počtu vzdálených uživatelů do jednoho centrálního místa.
- Zařízení pracující ve WAN: routery (3. vrstva ISO/OSI), modemy, komunikační servery.
- Podrobněji viz [WAN technologie](/it/pocitacove-site/18-wan-technologie/).

## World Wide Web (WWW)

- WWW vznikl v roce **1989** ve středisku **CERN** u Ženevy, odkud se rozšířil do světa. Jeho autorem je **Tim Berners-Lee**, který navrhl i protokol HTTP a jazyk HTML.
- **Hypertext** je text, který obsahuje odkazy na jiné dokumenty či soubory na webu.
- Provoz WWW je založen na aplikačních protokolech, které umožňují přenášet informace z počítače na počítač.
- Používá protokoly TCP/IP:
	- aplikační vrstva – převod dat pro koncovou aplikaci (HTTP, HTTPS),
	- transportní vrstva – TCP,
	- síťová vrstva – přenáší IP datagramy mezi počítači, nese adresu příjemce,
	- vrstva síťového rozhraní – Ethernet, Wi-Fi.

## Internetová adresa a doménová jména

- Každý počítač připojený k Internetu má přidělenou IP adresu, např. v IPv4 (32 bitů) `192.168.1.13`. Podrobně viz [IPv4 adresování](/it/pocitacove-site/12-ipv4-adresovani/).
- **DNS** převádí doménová jména, která se lépe pamatují, na číselné IP adresy a naopak.
- Doménové jméno se skládá z domén oddělených tečkami a čte se **zprava doleva**:
	- doména 1. úrovně (TLD) – úplně **vpravo**; určuje zemi nebo kategorii: `.cz`, `.com`, `.org`,
	- doména 2. úrovně – název organizace nebo služby: `google.com`, `apple.com`,
	- doména 3. úrovně – konkrétní služba nebo počítač v rámci organizace: `chrome.google.com`.
- Podrobněji viz [DNS – systém doménových jmen](/it/pocitacove-site/17-dns-system-domenovych-jmen/).

## Připojení k Internetu, modem

- **Modem** (**mo**dulátor-**dem**odulátor) převádí digitální signál počítače na analogový signál vhodný pro vedení a zpět.
- Připojení přes telefonní linku vytáčeným modemem bylo nejpomalejší – nejvýše 56 kb/s (asi 7 kB/s).
- Dále připojení přes kabelovou televizi (kabelový modem), DSL po telefonní lince, optické připojení (FTTH).
- Bezdrátové připojení – mikrovlnné, satelitní, rádiové (Wi-Fi), mobilní sítě (LTE, 5G).

## Webový prohlížeč

- Program sloužící k prohlížení webových stránek.
- Zadáme internetovou adresu (URL); název serveru se pomocí DNS převede na IP adresu, ke které se prohlížeč připojí.
- Z dané adresy se načtou data, která prohlížeč zobrazí jako webovou stránku.
- **Cache** (mezipaměť) je úložiště souborů na disku – urychluje načítání stránky, protože např. obrázky se znovu nestahují ze serveru, ale načtou se z disku.
- Webové stránky se tvoří jazykem **HTML**, který popisuje strukturu stránky; vzhled určuje CSS.

## Elektronická pošta

- Umožňuje během okamžiku poslat zprávu téměř komukoli na světě.
- K odesílání a přijímání pošty slouží poštovní klient (MS Outlook, Thunderbird) nebo webové rozhraní (Gmail, Seznam).
- Při vybírání pošty se klient připojí k serveru, na který nám pošta chodí, a zprávy stáhne nebo zobrazí; při odesílání předá zprávu odchozímu serveru.

## Pojmy a protokoly

- **FTP** – protokol pro přenos souborů mezi počítači.
- **WWW** – služba pro přenos hypertextových dokumentů; zajišťuje ji protokol **HTTP** (zabezpečeně HTTPS).
- **URL** – adresa konkrétního objektu (stránky, souboru) na serveru, např. `https://www.example.com/index.html`.
- **DNS** – překlad doménových jmen na IP adresy a naopak.
- **HTML** – značkovací jazyk pro tvorbu webových stránek.
- **SMTP** – protokol pro odesílání e-mailu na server a jeho přenos mezi servery.
- **IMAP** – protokol pro práci s doručenou poštou; zprávy zůstávají na serveru.
- **POP3** – protokol pro stažení doručené pošty ze serveru do počítače; na rozdíl od IMAP zprávy obvykle stáhne a ze serveru odstraní.
- **RSS** – formát pro odběr novinek z webových stránek.
- **NIC** – správce národní domény; v Česku sdružení CZ.NIC spravuje doménu `.cz`.
- **Hoax** – nevyžádaná zpráva poplašného charakteru, která vyzývá k dalšímu rozeslání.
- **Spam** – nevyžádaná hromadná zpráva, nejčastěji reklamní.
- **Cookies** – malé soubory, které si webová stránka ukládá v prohlížeči; slouží k udržení přihlášení nebo nastavení, ale také ke sledování pohybu uživatele po stránkách.
- **Moodle** – systém pro řízení výuky prostřednictvím e-learningu.
- **Blog** – internetový deník.

## Internet věcí (IoT)

- **Internet věcí** (Internet of Things) je síť běžných předmětů, které obsahují senzory, řídicí elektroniku a síťové připojení a samy si vyměňují data – chytré žárovky, termostaty, zásuvky, kamery, hodinky, auta, průmyslové stroje.
- Zařízení obvykle posílají naměřená data do cloudu, kde se vyhodnocují, a přijímají odtud příkazy; uživatel je ovládá aplikací v telefonu.
- Připojují se přes Wi-Fi, Bluetooth, Zigbee, mobilní sítě nebo úsporné sítě s dlouhým dosahem (LoRaWAN, Sigfox, NB-IoT).
- Velký počet zařízení je jedním z důvodů přechodu na [IPv6](/it/pocitacove-site/15-ipv6-adresovani/).
- Rizika: slabé zabezpečení (výchozí hesla, chybějící aktualizace) – napadená IoT zařízení se zneužívají v botnetech k útokům DDoS; sběr citlivých dat o domácnosti.

## Počítačové viry

- **Virus** je program, který dokáže infikovat jiný program tak, že do něj zkopíruje své tělo; infikovaný program se pak stává prostředkem dalšího šíření.
- Viry k šíření potřebují jiné programy (hostitele); **červ** se šíří sám, nezávisle na hostiteli, obvykle přes síť.
- V dnešní době Internetu je šíření škodlivého kódu mnohem rychlejší a snazší než dříve.
- Další druhy škodlivého softwaru:
	- **trojský kůň** – tváří se jako užitečný program; odposlouchává přístupová jména a hesla, čísla platebních karet, zaznamenává stisky kláves,
	- **spyware** – sleduje uživatele a jeho zvyklosti při procházení Internetu a posílá o tom zprávy,
	- **crimeware** – slouží ke krádeži identity (často pomocí sociálního inženýrství) nebo k získání přístupu k placeným službám a bankovním účtům uživatele a provádění neoprávněných transakcí.
- Podrobněji viz [malware](/it/operacni-systemy/26-malware/).
