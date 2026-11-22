---
title: "Ethernet a LAN"
order: 8
source: "site/Ethernet_new.pdf; IT/Datové-sítě.docx"
---

**Ethernet** = nejrozšířenější technologie LAN. Popisuje kabely a signály (fyzická vrstva) i rámce, adresy a přístup k médiu (linková) – v TCP/IP **vrstva síťového rozhraní**. Původně **sdílený** (jeden kabel pro všechny), díky switchům **nesdílený** (každý vlastní linku). Všechny rychlosti mají **stejný rámec**, a proto spolu spolupracují.

- **1973** – návrh v Xerox PARC (Robert Metcalfe), **1983** norma **IEEE 802.3**.
- **1990** – kroucená dvoulinka (10BASE-T), **1995** Fast Ethernet 100 Mb/s, **1998** Gigabit, **2002** 10 Gb/s, dnes až stovky Gb/s.

## Ethernet a linková vrstva

- **MAC** (spodní podvrstva, hardware) – rámce, MAC adresy, přístup k médiu (CSMA/CD), detekce chyb.
- **LLC** (horní, IEEE 802.2, ovladač) – komu z vyšší vrstvy rámec patří.

Linková vrstva zabalí paket do rámce s MAC adresami; příjemce ověří adresu a součet, cizí a vadné rámce zahodí. Viz [MAC adresa](/it/pocitacove-site/07-aktivni-sitove-prvky-a-sitova-karta/#mac-adresa).

## Ethernetový rámec

**Záhlaví** (adresy, typ) + **data** + **zápatí** (kontrolní součet).

![Ethernetový rámec: preambule 7 B, SFD 1 B, cílová MAC 6 B, zdrojová MAC 6 B, typ 2 B, data 46 až 1 500 B, FCS 4 B; vlastní rámec má 64 až 1 518 B](/images/content/it/pocitacove-site/ethernet/ramec.webp)

| Pole | Délka | Význam |
| --- | --- | --- |
| preambule + SFD | 7 + 1 B | synchronizace hodin a začátek rámce |
| cílová MAC | 6 B | jedna stanice, multicast nebo broadcast |
| zdrojová MAC | 6 B | odesílatel |
| typ / délka | 2 B | Ethernet II: protokol vyšší vrstvy (0x0800 IPv4, 0x0806 ARP, 0x86DD IPv6) |
| data | 46–1 500 B | paket; kratší se doplní výplní |
| FCS | 4 B | kontrolní součet CRC-32 |

- Rámec má **64 až 1 518 B**; největší data 1 500 B = **MTU**. Nesouhlasí-li CRC, rámec se **zahodí**.
- **Proč minimálně 64 B:** při CSMA/CD musí vysílání trvat déle, než signál oběhne síť tam a zpět, aby stanice kolizi zjistila.
- **Druhy rámců:** **Ethernet II** (nejběžnější, s polem typu) a **IEEE 802.3 + LLC** (pole délky).

## Přístupová metoda CSMA/CD

Klasický Ethernet = **všesměrové vysílání**: rámec dostanou všichni v kolizní doméně a cizí zahodí. Postup: naslouchat → je-li volno, vysílat → při kolizi přestat a poslat **jam** → čekat náhodnou dobu → znovu (max. 16×). Podrobně [CSMA/CD](/it/pocitacove-site/01-pocitacove-site-definice-pojmy-deleni-topologie-pristupove-metody/#csmacd--detekce-kolize).

- **Nevýhoda:** víc stanic = víc kolizí a nižší efektivita.
- **Plný duplex** (vlastní kabel ke switchi): každý směr své vodiče, **kolize nejsou**, CSMA/CD se vypíná. 10 Gb/s a víc umí jen plný duplex.

## Označování Ethernetu

Vzor **rychlost – BASE – médium**: rychlost v Mb/s (nebo G), **BASE** = základní pásmo, přípona = **médium** (**T** dvoulinka, **F/S/L** optika) nebo u nejstarších délka segmentu ve stovkách metrů.

| Varianta | Rychlost | Médium | Max. délka |
| --- | --- | --- | --- |
| 10BASE5 | 10 Mb/s | tlustý koax | 500 m |
| 10BASE2 | 10 Mb/s | tenký koax, BNC | 185 m |
| 10BASE-T | 10 Mb/s | UTP Cat 3, 2 páry | 100 m |
| 100BASE-TX | 100 Mb/s | Cat 5, 2 páry | 100 m |
| 1000BASE-T | 1 Gb/s | Cat 5e, 4 páry | 100 m |
| 1000BASE-SX | 1 Gb/s | mnohovidové vlákno | do 550 m |
| 1000BASE-LX | 1 Gb/s | jednovidové vlákno | 5 km |
| 10GBASE-T | 10 Gb/s | Cat 6A | 100 m |
| 10GBASE-LR | 10 Gb/s | jednovidové vlákno | 10 km |

## Přepínaný Ethernet

Dnešní LAN: každé zařízení vlastním kabelem do switche, switche do stromu. Oproti hubům je **bez kolizí** (port = kolizní doména), umožňuje **paralelní komunikaci** a je **bezpečnější** (rámec dostane jen adresát).

- **Kolizní doména** – místo, kde se mohou srazit vysílání (hub ji nedělí, switch ano).
- **Broadcast** – cílová MAC `FF-FF-FF-FF-FF-FF`; projde hubem i switchem, zastaví ho až router (nebo VLAN).
- **PoE** – switch napájí zařízení po datovém kabelu (IP telefony, kamery, AP); 802.3af 15,4 W, 802.3at 30 W, 802.3bt až 90 W.

Dál: [přepínání, STP a VLAN](/it/pocitacove-site/09-prepinani-stp-a-vlan/).

## Otázky k opakování

1. Které vrstvy modelu ISO/OSI Ethernet popisuje? ||fyzickou a linkovou (v TCP/IP vrstvu síťového rozhraní)||
2. Popište strukturu ethernetového rámce. ||preambule + SFD, cílová MAC 6 B, zdrojová MAC 6 B, typ/délka 2 B, data 46–1 500 B, FCS 4 B||
3. Jaká je minimální a maximální velikost rámce a proč existuje minimum? ||64 B a 1 518 B; vysílání nejkratšího rámce musí trvat déle než oběh signálu sítí, aby stanice kolizi zjistila||
4. K čemu slouží pole FCS? ||nese kontrolní součet CRC; když nesouhlasí, příjemce rámec zahodí||
5. Co znamená označení 100BASE-TX a 10BASE5? ||100 Mb/s, základní pásmo, dvoulinka; 10 Mb/s, základní pásmo, segment 500 m (tlustý koax)||
6. Kterou variantu použijete pro propojení budov vzdálených 3 km gigabitovou rychlostí? ||1000BASE-LX po jednovidovém vlákně (do 5 km)||
7. Proč se v přepínaném Ethernetu nepoužívá CSMA/CD? ||každá stanice má vlastní linku ke switchi v plném duplexu, kolize nevznikají||
8. Jaký je rozdíl mezi kolizní a broadcastovou doménou? ||kolizní – kde se mohou srazit vysílání (switch ji dělí); broadcastová – kam dojde broadcast (dělí ji až router nebo VLAN)||
