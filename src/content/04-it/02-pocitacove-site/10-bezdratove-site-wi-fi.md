---
title: "Bezdrátové sítě a Wi-Fi"
order: 10
source: "IT/Datové-sítě.docx; IT/11. Aktivní a pasivní síťové prvky.docx"
---

Bezdrátové sítě přenášejí data rádiem, mikrovlnami nebo světlem. V LAN **Wi-Fi** (**IEEE 802.11**), u osobních zařízení **Bluetooth**, na dálku mobilní sítě a satelity.

- **Výhody:** bez kabeláže, **mobilita**, snadné připojení mnoha zařízení.
- **Nevýhody:** signál i mimo budovu → **odposlech** a neoprávněný přístup; **rušení** (mikrovlnka, Bluetooth, sousední sítě); útlum zdmi; kapacitu AP sdílejí všichni klienti.

| Typ | Dosah | Technologie |
| --- | --- | --- |
| **WPAN** | metry | Bluetooth, NFC |
| **WLAN** | desítky m | Wi-Fi (802.11) |
| **WMAN** | km | WiMAX, směrové spoje |
| **WWAN** | státy | mobilní sítě (LTE, 5G), satelity |

## Wi-Fi a norma IEEE 802.11

- **IEEE 802.11** – norma pro fyzickou vrstvu a MAC podvrstvu; **bezlicenční pásma** 2,4 / 5 / 6 GHz.
- **Wi-Fi** = značka Wi-Fi Alliance (certifikace kompatibility); **WLAN** = bezdrátová LAN obecně. Nejsou to synonyma.

| Norma | Označení | Pásmo | Max. rychlost |
| --- | --- | --- | --- |
| 802.11b | – | 2,4 GHz | 11 Mb/s |
| 802.11g | – | 2,4 GHz | 54 Mb/s |
| 802.11n | Wi-Fi 4 | 2,4 + 5 GHz | 600 Mb/s |
| 802.11ac | Wi-Fi 5 | 5 GHz | 3,5 Gb/s |
| 802.11ax | Wi-Fi 6 | 2,4, 5 (6) GHz | 9,6 Gb/s |
| 802.11be | Wi-Fi 7 | 2,4, 5, 6 GHz | > 40 Gb/s |

Reálná rychlost je několikrát nižší. Rychlost zvyšují širší kanály, vyšší QAM, **MIMO** (víc antén) a u Wi-Fi 6 **OFDMA**.

### Pásma a kanály

![Kanály pásma 2,4 GHz: třináct kanálů po 20 MHz s rozestupem 5 MHz se překrývají, samostatně stojí jen kanály 1, 6 a 11](/images/content/it/pocitacove-site/wifi/kanaly-24.webp)

- **2,4 GHz** – větší dosah, lépe skrz zdi, ale kanály se překrývají; nepřekrývající jsou **1, 6, 11**. Přeplněné, ruší mikrovlnky a Bluetooth.
- **5 GHz** – víc nepřekrývajících kanálů, rychlejší, menší dosah.
- **6 GHz** (Wi-Fi 6E, 7) – nové, málo rušené.

## Součásti a režimy

- **Access point (AP)** – vysílá síť a propojuje klienty s kabelovou sítí. **Bezdrátový router** = AP + switch + router s NAT + DHCP + firewall.
- **Infrastrukturní** režim – klienti přes AP (**BSS**); více AP se stejným jménem = **ESS** s roamingem. **Ad-hoc** – přímo mezi klienty. **Mesh** – AP propojená bezdrátově.
- Jméno sítě = **SSID**; konkrétní AP = **BSSID** (jeho MAC).

## Přístup k médiu: CSMA/CA

Rádio při vysílání neslyší ostatní, kolizi nepozná, proto jí **předchází** (**CSMA/CA**): naslouchá, počká náhodnou dobu, příjemce potvrdí **ACK**. **RTS/CTS** zamluví médium a řeší **skrytou stanici**. Podrobně [CSMA/CA](/it/pocitacove-site/01-pocitacove-site-definice-pojmy-deleni-topologie-pristupove-metody/#csmaca--předcházení-kolizím). Wi-Fi je vždy **half duplex**.

## Zabezpečení Wi-Fi

| Metoda | Hodnocení |
| --- | --- |
| otevřená síť | bez šifrování, provoz vidí každý |
| skrytí SSID, filtrování MAC | neúčinné – dá se zachytit a nastavit |
| **WEP** | prolomeno, heslo za minuty |
| **WPA2** (AES) | bezpečné s dlouhým heslem |
| **WPA3** | současný standard, odolné proti hádání hesla |

- **Personal (PSK)** – jedno sdílené heslo (domácnost). **Enterprise (802.1X)** – každý vlastní účet ověřený serverem **RADIUS** (firmy, školy).
- Dále: změnit výchozí heslo routeru, vypnout **WPS**, síť pro hosty, aktualizovat firmware.

## Otázky k opakování

1. Jaký je rozdíl mezi pojmy WLAN, IEEE 802.11 a Wi-Fi? ||WLAN je bezdrátová LAN obecně, 802.11 je norma, Wi-Fi obchodní značka||
2. Jaké jsou výhody a nevýhody 2,4 GHz oproti 5 GHz? ||2,4 GHz má větší dosah, ale jen 3 nepřekrývající kanály a je rušené; 5 GHz je rychlejší a méně rušené, ale s menším dosahem||
3. Které kanály v pásmu 2,4 GHz se nepřekrývají? ||1, 6 a 11||
4. Jaký je rozdíl mezi infrastrukturním a ad-hoc režimem? ||v infrastrukturním komunikují klienti přes AP, v ad-hoc přímo mezi sebou||
5. Proč Wi-Fi používá CSMA/CA a k čemu je RTS/CTS? ||rádio při vysílání neslyší kolizi; RTS/CTS zamluví médium a řeší skrytou stanici||
6. Proč skrytí SSID a filtrování MAC nejsou skutečné zabezpečení? ||SSID i MAC adresy lze zachytit z provozu||
7. Jaké zabezpečení je dnes doporučené? ||WPA3, případně WPA2 s dlouhým heslem; WEP je prolomený||
8. Čím se liší WPA2-Personal a Enterprise? ||Personal má jedno sdílené heslo, Enterprise ověřuje každého zvlášť přes 802.1X a RADIUS||
