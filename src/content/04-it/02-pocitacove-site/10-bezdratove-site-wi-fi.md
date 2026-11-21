---
title: "Bezdrátové sítě a Wi-Fi"
order: 10
source: "IT/Datové-sítě.docx; IT/11. Aktivní a pasivní síťové prvky.docx"
---

Bezdrátové sítě přenášejí data rádiem, mikrovlnami nebo světlem. V LAN **Wi-Fi** (**IEEE 802.11**), u osobních zařízení **Bluetooth**, na dálku mobilní sítě, směrové spoje a satelity.

## Výhody a nevýhody bezdrátových sítí

- Výhody: bez kabeláže (levnější, rychlejší, i kde kabel nejde), **mobilita**, snadné připojení mnoha zařízení.
- Nevýhody: signál i mimo budovu → **odposlech** a neoprávněný přístup; **rušení** (mikrovlnka, Bluetooth, sousední sítě); **útlum** zdmi; nižší a nestabilní rychlost; kapacitu AP sdílejí všichni klienti.

## Druhy bezdrátových sítí

| Typ | Dosah | Technologie |
| --- | --- | --- |
| **WPAN** | metry | Bluetooth (802.15.1), IrDA, Zigbee, NFC |
| **WLAN** | desítky m | Wi-Fi (802.11) |
| **WMAN** | km | WiMAX (802.16), směrové spoje |
| **WWAN** | státy | 2G GSM, 3G UMTS, 4G LTE, 5G; satelity |

- **Bluetooth** – 2,4 GHz, ~10 m (až 100 m); sluchátka, klávesnice, hodinky, auto.
- **Point-to-point spoje** – mikrovlnné/laserové na přímou viditelnost; propojení budov.
- **GSM** – základnové stanice (vysílače + řadiče), ústřednový systém, systém pro správu.
- **Satelit** – geostacionární (~36 000 km) zpoždění ~600 ms; nízká dráha (Starlink) desítky ms.

## Wi-Fi a norma IEEE 802.11

- **IEEE 802.11** – fyzická vrstva + MAC podvrstva; **bezlicenční pásma** 2,4 / 5 / 6 GHz (bez povolení, ale omezený výkon).
- **Wi-Fi** = značka Wi-Fi Alliance (certifikace kompatibility); **WLAN** = bezdrátová LAN obecně. Nejsou to synonyma.

### Generace Wi-Fi

| Norma | Označení | Rok | Pásmo | Max. rychlost |
| --- | --- | --- | --- | --- |
| 802.11 | – | 1997 | 2,4 GHz | 2 Mb/s |
| 802.11b | – | 1999 | 2,4 GHz | 11 Mb/s |
| 802.11a | – | 1999 | 5 GHz | 54 Mb/s |
| 802.11g | – | 2003 | 2,4 GHz | 54 Mb/s |
| 802.11n | Wi-Fi 4 | 2009 | 2,4 + 5 GHz | 600 Mb/s |
| 802.11ac | Wi-Fi 5 | 2013 | 5 GHz | 3,5 Gb/s (až 6,9) |
| 802.11ax | Wi-Fi 6 / 6E | 2019 / 2020 | 2,4, 5 (6) GHz | 9,6 Gb/s |
| 802.11be | Wi-Fi 7 | 2024 | 2,4, 5, 6 GHz | > 40 Gb/s |

Teoretická maxima všech proudů dohromady; klient reálně dostane několikrát méně. Rychlost zvyšují širší kanály, vyšší QAM, **MIMO** (víc antén = víc proudů) a u Wi-Fi 6 **OFDMA** (kanál sdílený víc klienty naráz).

### Pásma a kanály

![Kanály pásma 2,4 GHz: třináct kanálů po 20 MHz s rozestupem 5 MHz se překrývají, samostatně stojí jen kanály 1, 6 a 11](/images/content/it/pocitacove-site/wifi/kanaly-24.webp)

- **2,4 GHz** – větší dosah, lépe skrz zdi, ale 13 kanálů po 20 MHz s rozestupem 5 MHz → překryv. Nepřekrývající: **1, 6, 11** (v Evropě i 1, 5, 9, 13). Přeplněné, ruší mikrovlnky a Bluetooth.
- **5 GHz** – mnoho nepřekrývajících kanálů, slučování na 40/80/160 MHz; rychlejší, menší dosah. Na některých kanálech ustupuje radarům (DFS).
- **6 GHz** (Wi-Fi 6E, 7) – nové, málo rušené.

## Součásti bezdrátové sítě

- **Bezdrátová karta** – vestavěná, PCIe, USB.
- **Access point (AP)** – vysílá síť, propojuje klienty s kabelovou sítí.
- **Bezdrátový router** – AP + switch (4 porty) + router s NAT + DHCP + firewall.
- **Antény** – všesměrové (okolí), směrové (dálkové spoje).
- **Kontrolér** – centrální správa desítek AP.

### Režimy sítě

- **Infrastrukturní** – klienti přes AP (**BSS**). Více AP se stejným jménem = **ESS** s roamingem.
- **Ad-hoc** (IBSS) – přímo mezi klienty, bez AP.
- **Mesh** – AP propojené bezdrátově mezi sebou; velké pokrytí bez kabelů.

Jméno sítě = **SSID**; konkrétní AP = **BSSID** (jeho MAC).

## Přístup k médiu: CSMA/CA

Rádio při vysílání neslyší ostatní → kolizi nepozná → **předchází** jí (**CSMA/CA**): naslouchá, počká náhodnou dobu, příjemce potvrdí **ACK** (jinak opakování). Volitelně **RTS/CTS** – zamluvení média; CTS slyší všichni u AP → řeší **skrytou stanici** (dvě stanice slyší AP, ale ne sebe). Podrobně: [definice a dělení sítí](/it/pocitacove-site/01-pocitacove-site-definice-pojmy-deleni-topologie-pristupove-metody/#csmaca-carrier-sense-multiple-access-with-collision-avoidance).

Wi-Fi je vždy **half duplex** – v kanálu vysílá v jednu chvíli jen jeden.

## Zabezpečení Wi-Fi

Signál nejde prostorově omezit → hrozí **odposlech** a **neoprávněný přístup**.

| Metoda | Hodnocení |
| --- | --- |
| otevřená síť | bez šifrování, provoz vidí každý |
| skrytí SSID | neúčinné – jméno je v provozu klientů |
| filtrování MAC | neúčinné – MAC jde odposlechnout a nastavit |
| **WEP** | prolomeno 2001, heslo za minuty |
| **WPA** (TKIP) | přechodné, dnes nebezpečné |
| **WPA2** (AES-CCMP) | bezpečné s dlouhým heslem |
| **WPA3** (SAE) | současný standard, odolné proti hádání; šifruje i otevřené sítě (OWE) |

- **Personal (PSK)** – jedno sdílené heslo; domácnost.
- **Enterprise (802.1X)** – každý vlastní účet ověřený serverem **RADIUS**; firmy, školy (eduroam).
- Dále: změnit výchozí heslo routeru, vypnout **WPS**, síť pro hosty, aktualizovat firmware.

## Otázky k opakování

1. Jaký je rozdíl mezi pojmy WLAN, IEEE 802.11 a Wi-Fi? ||WLAN je obecně bezdrátová LAN, IEEE 802.11 je norma, Wi-Fi obchodní značka certifikovaných zařízení||
2. Jaké jsou výhody a nevýhody pásma 2,4 GHz oproti 5 GHz? ||2,4 GHz má větší dosah a lépe prochází zdmi, ale jen 3 nepřekrývající se kanály a je rušené; 5 GHz je rychlejší a méně rušené, ale má menší dosah||
3. Které kanály v pásmu 2,4 GHz se nepřekrývají? ||1, 6 a 11||
4. Jaký je rozdíl mezi infrastrukturním a ad-hoc režimem? ||v infrastrukturním komunikují klienti přes přístupový bod, v ad-hoc přímo mezi sebou||
5. Proč Wi-Fi používá CSMA/CA a k čemu slouží RTS/CTS? ||rádiová stanice při vysílání neslyší kolizi; RTS/CTS zamluví médium a řeší problém skryté stanice||
6. Proč skrytí SSID a filtrování MAC nejsou skutečné zabezpečení? ||SSID i povolené MAC adresy lze zachytit z provozu a MAC adresu si útočník nastaví||
7. Jaké zabezpečení Wi-Fi je dnes doporučené a proč se nepoužívá WEP? ||WPA3, případně WPA2 s dlouhým heslem; WEP byl prolomen a heslo z něj lze rychle získat||
8. Čím se liší WPA2-Personal a WPA2-Enterprise? ||Personal má jedno sdílené heslo, Enterprise ověřuje každého uživatele zvlášť přes 802.1X a RADIUS||
