---
title: "Internet"
order: 4
source: "IT/13. Internet.docx"
---

## Vznik a vývoj Internetu

- Internet = celosvětová síť typu WAN, propojuje LAN a MAN – „síť sítí“.
- Začátek **1969**: síť **ARPANET** – vojenský a výzkumný účel, později univerzity.
- Cíl: data se předávají dál, i když část sítě vypadne.
- **1983** přechod na **TCP/IP** (platí dodnes), **1984** DNS.
- Československo připojeno **1992**.

```timeline
{ "title": "Milníky Internetu",
  "items": [
    { "name": "ARPANET", "dates": "1969" },
    { "name": "přechod na TCP/IP", "dates": "1983" },
    { "name": "systém DNS", "dates": "1984" },
    { "name": "WWW v CERNu", "dates": "1989" },
    { "name": "připojení Československa", "dates": "1992" },
    { "name": "došly adresy IPv4 (IANA)", "dates": "2011" }
  ] }
```

## Technologie dálkových linek WAN

- Spojení mezi pobočkami firmy.
- Připojení vzdálených uživatelů do centrály.
- Zařízení: routery (3. vrstva), modemy, komunikační servery.
- Viz [WAN technologie](/it/pocitacove-site/18-wan-technologie/).

## World Wide Web (WWW)

- **1989**, **CERN** u Ženevy; autor **Tim Berners-Lee** (navrhl i HTTP a HTML).
- **Hypertext** = text s odkazy na jiné dokumenty.
- Stojí na aplikačních protokolech pro přenos dat mezi počítači.
- Vrstvy TCP/IP:
	- aplikační – HTTP, HTTPS,
	- transportní – TCP,
	- síťová – IP datagramy s adresou příjemce,
	- síťové rozhraní – Ethernet, Wi-Fi.

## Internetová adresa a doménová jména

- Každý počítač má IP adresu, např. IPv4 `192.168.1.13` – viz [IPv4 adresování](/it/pocitacove-site/12-ipv4-adresovani/).
- **DNS** převádí jména na IP adresy a naopak.
- Jméno se čte **zprava doleva**:
	- 1. úroveň (TLD) – **vpravo**, země nebo kategorie: `.cz`, `.com`, `.org`,
	- 2. úroveň – organizace: `google.com`,
	- 3. úroveň – služba nebo počítač: `chrome.google.com`.
- Viz [DNS](/it/pocitacove-site/17-dns-system-domenovych-jmen/).

## Připojení k Internetu, modem

- **Modem** (**mo**dulátor-**dem**odulátor) – digitální signál ↔ analogový.
- Vytáčené připojení po telefonu – max. 56 kb/s (≈ 7 kB/s).
- Kabelová televize, DSL, optika (FTTH).
- Bezdrátově – mikrovlnné, satelitní, Wi-Fi, mobilní (LTE, 5G).

## Webový prohlížeč

- Program na prohlížení webu.
- Zadáme URL → DNS přeloží jméno na IP → prohlížeč se připojí.
- Stažená data zobrazí jako stránku.
- **Cache** – mezipaměť na disku; obrázky aj. se nestahují znovu.
- Struktura stránky **HTML**, vzhled **CSS**.

## Elektronická pošta

- Zpráva komukoli na světě během okamžiku.
- Klient (Outlook, Thunderbird) nebo web (Gmail, Seznam).
- Příjem: klient stáhne/zobrazí zprávy ze serveru; odeslání: předá zprávu odchozímu serveru.

## Pojmy a protokoly

- **FTP** – přenos souborů.
- **WWW** – hypertextové dokumenty přes **HTTP(S)**.
- **URL** – adresa objektu, např. `https://www.example.com/index.html`.
- **DNS** – jméno ↔ IP.
- **HTML** – značkovací jazyk webu.
- **SMTP** – odesílání a přenos pošty mezi servery.
- **IMAP** – pošta zůstává na serveru.
- **POP3** – pošta se stáhne a ze serveru obvykle smaže.
- **RSS** – odběr novinek.
- **NIC** – správce národní domény (CZ.NIC → `.cz`).
- **Hoax** – poplašná zpráva vyzývající k přeposlání.
- **Spam** – nevyžádaná hromadná (reklamní) zpráva.
- **Cookies** – malé soubory webu v prohlížeči; přihlášení, nastavení, ale i sledování.
- **Moodle** – systém pro e-learning.
- **Blog** – internetový deník.

## Internet věcí (IoT)

- **IoT** = běžné předměty se senzory, elektronikou a připojením: žárovky, termostaty, kamery, hodinky, auta, stroje.
- Data posílají do cloudu, odtud dostávají příkazy; ovládání aplikací v mobilu.
- Připojení: Wi-Fi, Bluetooth, Zigbee, mobilní sítě, LPWAN (LoRaWAN, Sigfox, NB-IoT).
- Velký počet zařízení → důvod pro [IPv6](/it/pocitacove-site/15-ipv6-adresovani/).
- Rizika: slabé zabezpečení (výchozí hesla, bez aktualizací) → botnety a DDoS; sběr citlivých dat.

## Počítačové viry

- **Virus** infikuje jiný program zkopírováním svého těla; ten pak šíří nákazu dál.
- Virus potřebuje hostitele; **červ** se šíří sám, obvykle sítí.
- Díky Internetu se škodlivý kód šíří rychleji než dřív.
- Další druhy:
	- **trojský kůň** – tváří se užitečně; krade hesla, čísla karet, zaznamenává klávesy,
	- **spyware** – sleduje uživatele a odesílá informace,
	- **crimeware** – krádež identity, přístup k bankovním účtům a neoprávněné transakce.
- Viz [malware](/it/operacni-systemy/26-malware/).
