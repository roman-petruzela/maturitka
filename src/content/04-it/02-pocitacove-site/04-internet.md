---
title: "Internet"
order: 4
source: "IT/13. Internet.docx"
---

## Vznik a vývoj Internetu

**Internet** = celosvětová síť typu WAN, která propojuje LAN a MAN – „síť sítí“. Začal roku **1969** sítí **ARPANET** (vojenský a výzkumný účel); cílem bylo, aby data došla, i když část sítě vypadne. Od **1983** používá **TCP/IP**.

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

## World Wide Web (WWW)

- Vznikl roku **1989** v **CERNu**, autor **Tim Berners-Lee** (navrhl i HTTP a HTML).
- **Hypertext** = text s odkazy na jiné dokumenty. Web stojí na protokolech **HTTP(S)** (aplikační vrstva), **TCP**, **IP** a Ethernet/Wi-Fi.
- **URL** = adresa objektu, např. `https://www.example.com/index.html`. Prohlížeč zadané jméno přeloží přes **DNS** na IP adresu, připojí se k serveru a stažené **HTML** (struktura) a **CSS** (vzhled) zobrazí; **cache** uchovává stažené obrázky.
- **Cookies** – malé soubory webu v prohlížeči (přihlášení, nastavení, ale i sledování).

## Internetová adresa a doménová jména

Každý počítač má IP adresu ([IPv4](/it/pocitacove-site/12-ipv4-adresovani/)). **DNS** převádí jména na IP adresy; jméno se čte **zprava doleva**: 1. úroveň (TLD) `.cz`, `.com`, 2. úroveň organizace `google.com`, 3. úroveň služba `chrome.google.com`. Viz [DNS](/it/pocitacove-site/17-dns-system-domenovych-jmen/).

## Připojení k Internetu

Vytáčený **modem** (modulátor–demodulátor, digitální signál ↔ analogový) dosáhl 56 kb/s. Dnes kabelová televize, DSL, optika (FTTH), bezdrátově mikrovlny, satelit, Wi-Fi a mobilní sítě (LTE, 5G). Viz [WAN technologie](/it/pocitacove-site/18-wan-technologie/).

## Elektronická pošta

Klient (Outlook, Thunderbird) nebo web (Gmail). **SMTP** odesílá a přenáší poštu mezi servery, **POP3** ji stáhne a ze serveru obvykle smaže, **IMAP** ji nechá na serveru. **Spam** = nevyžádaná hromadná zpráva, **hoax** = poplašná zpráva vyzývající k přeposlání.

## Internet věcí (IoT)

- **IoT** = běžné předměty se senzory, elektronikou a připojením: žárovky, termostaty, kamery, hodinky, auta, stroje.
- Data posílají do cloudu, odtud dostávají příkazy; ovládání aplikací v mobilu.
- Připojení: Wi-Fi, Bluetooth, Zigbee, mobilní sítě, LPWAN (LoRaWAN, NB-IoT).
- Velký počet zařízení je důvod pro [IPv6](/it/pocitacove-site/15-ipv6-adresovani/).
- **Rizika:** slabé zabezpečení (výchozí hesla, chybějící aktualizace) → botnety a DDoS; sběr citlivých dat.

Počítačové viry a další škodlivý software: [malware](/it/operacni-systemy/26-malware/).

## Otázky k opakování

1. Kdy a jak Internet vznikl? ||roku 1969 jako ARPANET, od 1983 používá TCP/IP||
2. Kdo vytvořil WWW a co je hypertext? ||Tim Berners-Lee v CERNu 1989; text s odkazy na jiné dokumenty||
3. Co se děje po zadání URL do prohlížeče? ||DNS přeloží jméno na IP adresu, prohlížeč se připojí k serveru přes HTTP(S) a zobrazí stažené HTML||
4. Co je Internet věcí a jaká má rizika? ||běžná zařízení se senzory a připojením; slabé zabezpečení vede k botnetům a sběru dat||
