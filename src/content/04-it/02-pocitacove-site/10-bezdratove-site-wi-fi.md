---
title: "Bezdrátové sítě a Wi-Fi"
order: 10
source: "IT/Datové-sítě.docx; IT/11. Aktivní a pasivní síťové prvky.docx"
---

Bezdrátové sítě přenášejí data rádiovými vlnami, mikrovlnami nebo světlem bez kabelů. V lokálních sítích se používá **Wi-Fi** podle normy **IEEE 802.11**, pro osobní zařízení **Bluetooth**, na velké vzdálenosti mobilní sítě, směrové spoje a satelity. Tato stránka popisuje druhy bezdrátových sítí, normy a pásma Wi-Fi, její součásti, způsob přístupu k médiu a zabezpečení.

## Výhody a nevýhody bezdrátových sítí

- Výhody: není potřeba kabeláž (levnější a rychlejší instalace, i tam, kde kabel natáhnout nejde), **mobilita** uživatelů, snadné připojení mnoha malých zařízení.
- Nevýhody: signál se šíří i mimo budovu, a proto hrozí **odposlech** a neoprávněný přístup; **rušení** jinými zařízeními (mikrovlnná trouba, Bluetooth, sousední sítě); **útlum** zdmi a překážkami; nižší a méně stabilní rychlost než u kabelu; přenosovou kapacitu sdílejí všichni klienti jednoho přístupového bodu.

## Druhy bezdrátových sítí

| Typ | Dosah | Technologie |
| --- | --- | --- |
| **WPAN** – osobní | jednotky metrů | Bluetooth (IEEE 802.15.1), dříve IrDA (infračervené světlo), Zigbee, NFC |
| **WLAN** – lokální | desítky metrů | Wi-Fi (IEEE 802.11) |
| **WMAN** – metropolitní | kilometry | WiMAX (IEEE 802.16), směrové mikrovlnné spoje |
| **WWAN** – rozlehlá | celé státy | mobilní sítě: GSM (2G), UMTS (3G), LTE (4G), 5G; satelitní připojení |

- **Bluetooth** pracuje v pásmu 2,4 GHz na vzdálenost kolem 10 m (podle třídy až 100 m) a propojuje telefon se sluchátky, klávesnicí, hodinkami, autem.
- **Bodové (point-to-point) spoje** – mikrovlnné nebo laserové spoje na přímou viditelnost mezi dvěma anténami; propojují budovy nebo připojují vzdálené lokality.
- **Mobilní síť GSM** se skládá ze systému základnových stanic (vysílače a jejich řadiče), z přepínacího (ústřednového) systému a z operačního a podpůrného systému pro správu sítě.
- **Satelitní připojení** – geostacionární družice ve výšce asi 36 000 km mají velké zpoždění (kolem 600 ms tam a zpět); družice na nízké oběžné dráze (Starlink) mají zpoždění desítky ms.

## Wi-Fi a norma IEEE 802.11

- **IEEE 802.11** je norma pro bezdrátové lokální sítě, která popisuje fyzickou vrstvu a podvrstvu MAC linkové vrstvy. Pracuje v **bezlicenčních pásmech** 2,4 GHz, 5 GHz a 6 GHz – k provozu není potřeba povolení, ale je omezen vysílací výkon.
- **Wi-Fi** je obchodní značka organizace Wi-Fi Alliance, která certifikuje vzájemnou kompatibilitu zařízení podle IEEE 802.11. **WLAN** je obecné označení bezdrátové lokální sítě. Tyto tři pojmy tedy nejsou totéž.

### Generace Wi-Fi

| Norma | Označení | Rok | Pásmo | Max. teoretická rychlost |
| --- | --- | --- | --- | --- |
| 802.11 | – | 1997 | 2,4 GHz | 2 Mb/s |
| 802.11b | – | 1999 | 2,4 GHz | 11 Mb/s |
| 802.11a | – | 1999 | 5 GHz | 54 Mb/s |
| 802.11g | – | 2003 | 2,4 GHz | 54 Mb/s |
| 802.11n | Wi-Fi 4 | 2009 | 2,4 a 5 GHz | 600 Mb/s |
| 802.11ac | Wi-Fi 5 | 2013 | 5 GHz | 3,5 Gb/s (až 6,9 Gb/s) |
| 802.11ax | Wi-Fi 6 / 6E | 2019 / 2020 | 2,4, 5 (a 6) GHz | 9,6 Gb/s |
| 802.11be | Wi-Fi 7 | 2024 | 2,4, 5 a 6 GHz | přes 40 Gb/s |

Udávané rychlosti jsou teoretické maximum pro všechny prostorové proudy dohromady; skutečná rychlost jednoho klienta bývá několikrát nižší. Rychlost zvyšují širší kanály, modulace s více stavy (QAM), **MIMO** – více antén vysílá několik datových proudů současně – a u Wi-Fi 6 **OFDMA**, která rozdělí kanál mezi více klientů najednou.

### Pásma a kanály

- **2,4 GHz** – větší dosah a lepší průchod zdmi, ale jen 13 kanálů (v Evropě) širokých 20 MHz a vzdálených od sebe jen 5 MHz, takže se překrývají. Nepřekrývající se jsou kanály **1, 6 a 11** (v Evropě i 1, 5, 9, 13). Pásmo je přeplněné a ruší ho i mikrovlnné trouby a Bluetooth.
- **5 GHz** – mnohem více nepřekrývajících se kanálů, které lze slučovat na 40, 80 i 160 MHz; vyšší rychlost, ale menší dosah. Na některých kanálech musí přístupový bod ustoupit radarům (DFS).
- **6 GHz** (Wi-Fi 6E a 7) – nové, zatím málo rušené pásmo.

## Součásti bezdrátové sítě

- **Bezdrátová síťová karta** – vestavěná v notebooku či telefonu, jako karta do slotu PCIe nebo USB adaptér.
- **Přístupový bod (AP, access point)** – vysílá síť, klienti komunikují přes něj a AP je propojuje s kabelovou sítí.
- **Bezdrátový router** – domácí zařízení, které spojuje přístupový bod, switch (obvykle 4 porty), router s NAT, DHCP server a firewall.
- **Antény** – všesměrové pro pokrytí okolí, směrové pro spoje na delší vzdálenost.
- **Kontrolér (controller)** – ve větších sítích centrálně spravuje desítky přístupových bodů.

### Režimy sítě

- **Infrastrukturní režim** – klienti se připojují k přístupovému bodu (základní sada služeb **BSS**). Více přístupových bodů se stejným názvem sítě tvoří rozšířenou sadu **ESS**, ve které se klient může volně pohybovat (roaming).
- **Ad-hoc režim** (IBSS) – klienti spolu komunikují přímo, bez přístupového bodu.
- **Mesh** – přístupové body se propojují mezi sebou bezdrátově a pokrývají tak velký prostor bez kabelů.

Síť se identifikuje jménem **SSID** (Service Set Identifier); konkrétní přístupový bod má identifikátor **BSSID**, kterým je jeho MAC adresa.

## Přístup k médiu: CSMA/CA

Rádiová stanice při vysílání neslyší ostatní, takže kolizi nedokáže zjistit jako Ethernet (CSMA/CD). Wi-Fi proto kolizím **předchází** metodou **CSMA/CA**: stanice naslouchá, zda je kanál volný, a pak ještě počká náhodnou dobu; každý správně přijatý rámec příjemce potvrdí zprávou **ACK**, a když potvrzení nepřijde, rámec se vyšle znovu. Volitelně si stanice médium předem „zamluví“ – pošle přístupovému bodu žádost **RTS** a vysílá až po odpovědi **CTS**, kterou slyší všechny stanice v dosahu AP. To řeší problém **skryté stanice** (dvě stanice slyší přístupový bod, ale ne sebe navzájem). Postup je podrobně popsán na stránce [počítačové sítě – definice a dělení](/it/pocitacove-site/01-pocitacove-site-definice-pojmy-deleni-topologie-pristupove-metody/#csmaca-carrier-sense-multiple-access-with-collision-avoidance).

Wi-Fi je vždy **poloviční duplex** – v jednom kanálu v jednu chvíli vysílá jen jedno zařízení.

## Zabezpečení Wi-Fi

Prostor, kde lze signál zachytit, se nedá přesně omezit, a hlavními hrozbami jsou proto **odposlech** provozu a **neoprávněný přístup** do sítě.

| Metoda | Hodnocení |
| --- | --- |
| otevřená síť | bez šifrování – kdokoli v dosahu vidí veškerý nešifrovaný provoz |
| skrytí SSID | neúčinné – název sítě se dá zachytit z provozu klientů |
| filtrování MAC adres | neúčinné – povolenou MAC adresu lze odposlechnout a nastavit si ji |
| **WEP** | zastaralé, prolomeno v roce 2001; heslo se dá zjistit během minut |
| **WPA** (TKIP) | přechodné řešení, dnes již nebezpečné |
| **WPA2** (AES-CCMP) | bezpečné při dostatečně dlouhém heslu; krátké heslo lze uhodnout útokem hrubou silou |
| **WPA3** (SAE) | současný standard; odolné proti hádání hesla, šifruje i otevřené sítě (OWE) |

- **Personal (PSK)** – všichni používají stejné sdílené heslo; vhodné pro domácnost.
- **Enterprise (802.1X)** – každý uživatel se přihlásí vlastním účtem, který ověří server **RADIUS**; vhodné pro firmy a školy (např. síť eduroam).
- Další zásady: změnit výchozí heslo správy routeru, vypnout **WPS** (snadno prolomitelné), oddělit hosty do samostatné sítě, aktualizovat firmware.

## Otázky k opakování

1. Jaký je rozdíl mezi pojmy WLAN, IEEE 802.11 a Wi-Fi? ||WLAN je obecně bezdrátová LAN, IEEE 802.11 je norma, Wi-Fi obchodní značka certifikovaných zařízení||
2. Jaké jsou výhody a nevýhody pásma 2,4 GHz oproti 5 GHz? ||2,4 GHz má větší dosah a lépe prochází zdmi, ale jen 3 nepřekrývající se kanály a je rušené; 5 GHz je rychlejší a méně rušené, ale má menší dosah||
3. Které kanály v pásmu 2,4 GHz se nepřekrývají? ||1, 6 a 11||
4. Jaký je rozdíl mezi infrastrukturním a ad-hoc režimem? ||v infrastrukturním komunikují klienti přes přístupový bod, v ad-hoc přímo mezi sebou||
5. Proč Wi-Fi používá CSMA/CA a k čemu slouží RTS/CTS? ||rádiová stanice při vysílání neslyší kolizi; RTS/CTS zamluví médium a řeší problém skryté stanice||
6. Proč skrytí SSID a filtrování MAC nejsou skutečné zabezpečení? ||SSID i povolené MAC adresy lze zachytit z provozu a MAC adresu si útočník nastaví||
7. Jaké zabezpečení Wi-Fi je dnes doporučené a proč se nepoužívá WEP? ||WPA3, případně WPA2 s dlouhým heslem; WEP byl prolomen a heslo z něj lze rychle získat||
8. Čím se liší WPA2-Personal a WPA2-Enterprise? ||Personal má jedno sdílené heslo, Enterprise ověřuje každého uživatele zvlášť přes 802.1X a RADIUS||
