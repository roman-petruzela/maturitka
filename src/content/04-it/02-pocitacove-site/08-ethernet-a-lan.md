---
title: "Ethernet a LAN"
order: 8
source: "site/Ethernet_new.pdf; IT/Datové-sítě.docx"
---

**Ethernet** = nejrozšířenější technologie LAN. Popisuje kabely a signály (fyzická vrstva) i rámce, adresy a přístup k médiu (linková) – v TCP/IP **vrstva síťového rozhraní**. Původně **sdílený** (jeden kabel pro všechny), díky switchům **nesdílený** (každý vlastní linku). Všechny verze od 10 Mb/s po stovky Gb/s mají **stejný rámec** → spolupracují.

## Historie

| Rok | Událost |
| --- | --- |
| 1973 | návrh v Xerox PARC (Robert Metcalfe), 2,94 Mb/s, koax |
| 1980 | **DIX** (DEC, Intel, Xerox): 10 Mb/s, tlustý koax |
| 1983–1985 | norma **IEEE 802.3** |
| 1985 | tenký koax (10BASE2) |
| 1987 | optika |
| 1990 | kroucená dvoulinka (**10BASE-T**) |
| 1995 | Fast Ethernet 100 Mb/s (802.3u) |
| 1997 | plný duplex (802.3x) |
| 1998–1999 | Gigabit (802.3z optika, 802.3ab 1000BASE-T) |
| 2002 | 10 Gb/s optika (802.3ae); 2006 dvoulinka (802.3an) |
| 2010 | 40 a 100 Gb/s (802.3ba) |
| 2016–2017 | 2,5 a 5 Gb/s po Cat 5e/6; 25, 200, 400 Gb/s |

Dnes i mimo LAN – **metropolitní Ethernet**, páteřní a přístupové sítě poskytovatelů.

## Ethernet a linková vrstva

Dvě podvrstvy:

- **MAC** (spodní, hardware) – rámce, MAC adresy, přístup k médiu (CSMA/CD), detekce chyb.
- **LLC** (horní, IEEE 802.2, software/ovladač) – komu z vyšší vrstvy rámec patří.

Linková vrstva zabalí paket do rámce s MAC adresami; příjemce ověří adresu a součet, cizí a vadné rámce zahodí. MAC adresa: [aktivní prvky a MAC adresa](/it/pocitacove-site/07-aktivni-sitove-prvky-a-sitova-karta/#mac-adresa).

## Ethernetový rámec

**Záhlaví** (adresy, typ) + **data** + **zápatí** (kontrolní součet).

![Ethernetový rámec: preambule 7 B, SFD 1 B, cílová MAC 6 B, zdrojová MAC 6 B, typ 2 B, data 46 až 1 500 B, FCS 4 B; vlastní rámec má 64 až 1 518 B](/images/content/it/pocitacove-site/ethernet/ramec.webp)

| Pole | Délka | Význam |
| --- | --- | --- |
| preambule | 7 B | `10101010…` – synchronizace hodin |
| SFD | 1 B | `10101011` – začátek rámce |
| cílová MAC | 6 B | jedna stanice, multicast nebo broadcast |
| zdrojová MAC | 6 B | vždy individuální adresa odesílatele |
| značka 802.1Q | 4 B | jen rámce VLAN (číslo VLAN, priorita) |
| typ / délka | 2 B | Ethernet II: protokol (EtherType); 802.3: délka |
| data | 46–1 500 B | paket; kratší se doplní výplní na 46 B |
| FCS | 4 B | CRC-32 (bez preambule, SFD a FCS) |

- Rámec **64 B až 1 518 B** (1 522 B s VLAN), od cílové adresy po FCS. Max. data 1 500 B = **MTU**. **Jumbo rámce** až 9 000 B jen někde.
- Mezera mezi rámci ≥ 12 B.
- Typ/délka: ≤ 1 500 = délka (802.3), ≥ 1 536 (0x0600) = typ (Ethernet II). **0x0800 IPv4**, **0x0806 ARP**, **0x86DD IPv6**, **0x8100** VLAN.
- Nesouhlasí-li CRC, rámec se **zahodí**; opakování řeší vyšší vrstvy.

### Proč minimálně 64 bajtů

CSMA/CD pozná kolizi jen při vysílání → nejkratší rámec se musí vysílat déle, než signál oběhne síť tam a zpět. U 10 Mb/s = 512 bitů = 64 B (slot time 51,2 µs).

Gigabit by musel zkrátit segmenty v half duplexu na 10 m → místo toho prodlužuje krátké rámce (**Carrier Extension**). Prakticky ale gigabit a rychlejší jedou jen v **plném duplexu** bez kolizí.

### Druhy rámců

- **Ethernet II** (DIX) – s polem typu; IP, dnes nejběžnější.
- **IEEE 802.3 + LLC (802.2)** – pole délky + hlavička LLC v datech.
- **„Raw“ 802.3** – bez LLC, Novell IPX.
- **802.3 SNAP** – LLC rozšířené o výrobce a typ protokolu.

## Přístupová metoda CSMA/CD

Klasický Ethernet = **všesměrové vysílání**: rámec dostanou všichni v kolizní doméně a cizí zahodí. Logicky sběrnice → sdílená kapacita. Sdílení končí na mostu, switchi nebo routeru.

**CSMA/CD** (viz [definice a dělení sítí](/it/pocitacove-site/01-pocitacove-site-definice-pojmy-deleni-topologie-pristupove-metody/#csmacd-carrier-sense-multiple-access-with-collision-detection)):

1. Naslouchá, zda je médium volné.
2. Volné → vysílá; jinak čeká.
3. Při vysílání hlídá kolizi.
4. Kolize → přestane a pošle **jam**.
5. Čeká náhodnou dobu (stále delší).
6. Znovu; po 16 pokusech rámec zahodí.

Nevýhody: víc stanic = víc kolizí a nižší efektivita, přístup v konečném čase není zaručen → nevhodné pro reálný čas. U 10BASE-T se kolize projeví současnými daty na vysílacím i přijímacím páru.

**Plný duplex** (vlastní kabel ke switchi): každý směr své vodiče, kolize nejsou, CSMA/CD vypnuté. 10 Gb/s a víc umí jen plný duplex.

## Označování Ethernetu

Vzor **rychlost – BASE – médium**:

- rychlost v Mb/s (10, 100, 1000) nebo Gb/s (10G),
- **BASE** = **základní pásmo**,
- přípona: u nejstarších **délka segmentu ve stovkách m** (10BASE**5** = 500 m, 10BASE**2** = 185 m), u novějších **médium**: **T** dvoulinka, **F** optika, **S**/**L**/**E** krátká/dlouhá/velmi dlouhá vlnová délka, **X**, **R** kódování, číslo = počet párů (T4).

| Varianta | Rychlost | Médium | Max. délka |
| --- | --- | --- | --- |
| 10BASE5 | 10 Mb/s | tlustý koax, transceiver + AUI | 500 m |
| 10BASE2 | 10 Mb/s | tenký koax, BNC, terminátory 50 Ω | 185 m |
| 10BASE-T | 10 Mb/s | UTP Cat 3, 2 páry | 100 m |
| 10BASE-FL | 10 Mb/s | mnohovidové vlákno | 2 000 m |
| 100BASE-TX | 100 Mb/s | Cat 5, 2 páry | 100 m |
| 100BASE-T4 | 100 Mb/s | Cat 3, 4 páry | 100 m |
| 100BASE-T2 | 100 Mb/s | Cat 3, 2 páry | 100 m |
| 100BASE-FX | 100 Mb/s | 2 mnohovidová vlákna | 412 m (half), 2 km (full) |
| 1000BASE-T | 1 Gb/s | Cat 5e, 4 páry | 100 m |
| 1000BASE-CX | 1 Gb/s | twinax | 25 m |
| 1000BASE-SX | 1 Gb/s | MM, 850 nm | 220–550 m |
| 1000BASE-LX | 1 Gb/s | 1 310 nm, MM / SM | 550 m / 5 km |
| 2.5G, 5GBASE-T | 2,5 / 5 Gb/s | Cat 5e / 6 | 100 m |
| 10GBASE-T | 10 Gb/s | Cat 6 / 6A, 7 | 55 m / 100 m |
| 10GBASE-SR | 10 Gb/s | MM | 26–82 m, 300–400 m (OM3/OM4) |
| 10GBASE-LX4 | 10 Gb/s | MM / SM | 240–300 m / 10 km |
| 10GBASE-LR, -ER | 10 Gb/s | SM | 10 km, 40 km |
| 40G, 100GBASE | 40, 100 Gb/s | optika; měď jen krátce | 7–10 m měď, km optika |

Poznámky k jednotlivým generacím:

- **10BASE5** (Thick Wire) – žlutý koax, stanice přes transceiver a kabel **AUI**.
- **10BASE2** (Thin Wire) – sběrnice, T-konektory, terminátory 50 Ω na koncích.
- **10BASE-T** – telefonní rozvody, hvězda s hubem, RJ-45; 2 páry (vysílání, příjem), symetricky buzené.
- **10BASE-FL** – optika bez odboček, rozbočení hubem; hlavně páteř.
- **100BASE-TX** – Fast Ethernet, nahradil 10BASE-T; FX se nerozšířil.
- **1000BASE-T** – všechny 4 páry oběma směry naráz.
- **10 Gb/s** (802.3ae) – jen plný duplex, servery a páteře.
- Dnes: 25G/40G datová centra, 100G hustota portů, 400G/800G páteře.

## Přepínaný Ethernet

Dnešní LAN: každé zařízení vlastním kabelem do switche, switche do stromu, přepínání v hardwaru. Oproti hubům:

- **bez kolizí** – plný duplex, port = kolizní doména,
- **paralelní komunikace** – víc dvojic plnou rychlostí,
- **bezpečnější** – rámec dostane jen adresát,
- **řízení provozu** – QoS, řízení toku, VLAN, omezení broadcastů,
- **snazší údržba** – chyba stanice neovlivní ostatní, víme, kdo je na kterém portu.

### Kolizní doména a broadcast

- **Kolizní doména** – sdílené médium (koax, hub); switch dělá doménu z každého portu.
- **Broadcast** na 2. vrstvě = cílová MAC `FF-FF-FF-FF-FF-FF`; projde hubem i switchem, zastaví ho router. Na 3. vrstvě **omezený** 255.255.255.255 a **směrovaný** (např. 192.168.1.255).

### Napájení po Ethernetu (PoE)

**PoE** – switch napájí zařízení po datovém kabelu (IP telefony, kamery, AP). 802.3af 15,4 W/port, 802.3at (PoE+) 30 W, 802.3bt 60–90 W.

Větší sítě, STP a VLAN: [přepínání, STP a VLAN](/it/pocitacove-site/09-prepinani-stp-a-vlan/).

## Otázky k opakování

1. Které vrstvy modelu ISO/OSI Ethernet popisuje? ||fyzickou a linkovou (v TCP/IP vrstvu síťového rozhraní)||
2. Popište strukturu ethernetového rámce. ||preambule 7 B + SFD 1 B, cílová MAC 6 B, zdrojová MAC 6 B, typ/délka 2 B, data 46–1 500 B, FCS 4 B||
3. Jaká je minimální a maximální velikost rámce a proč existuje minimum? ||64 B a 1 518 B; vysílání nejkratšího rámce musí trvat déle než oběh signálu sítí, aby stanice kolizi zjistila||
4. K čemu slouží pole FCS? ||nese kontrolní součet CRC; když nesouhlasí, příjemce rámec zahodí||
5. Co znamená označení 100BASE-TX a 10BASE5? ||100 Mb/s, základní pásmo, kroucená dvoulinka; 10 Mb/s, základní pásmo, segment 500 m (tlustý koax)||
6. Kolik párů využívá 100BASE-TX a 1000BASE-T a jaká je maximální délka kabelu? ||2 páry a 4 páry; 100 m||
7. Kterou variantu použijete pro propojení budov vzdálených 3 km gigabitovou rychlostí? ||1000BASE-LX po jednovidovém vlákně (do 5 km)||
8. Proč se v přepínaném Ethernetu nepoužívá CSMA/CD? ||každá stanice má vlastní linku ke switchi v plném duplexu, takže kolize nevznikají||
9. Jaký je rozdíl mezi kolizní a broadcastovou doménou? ||kolizní – kde se mohou srazit vysílání (hub ji nedělí, switch ano); broadcastová – kam dojde broadcast (dělí ji až router nebo VLAN)||
