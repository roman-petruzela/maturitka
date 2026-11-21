---
title: "Aktivní síťové prvky, síťová karta a MAC adresa"
order: 7
source: "IT/11. Aktivní a pasivní síťové prvky.docx; site/T09_sitova_karty.pdf; site/Ethernet_new.pdf; IT/Datové-sítě.docx"
---

**Aktivní prvky** se podílejí na komunikaci: regenerují signál, zkoumají rámce a pakety a rozhodují, kam je poslat. Potřebují napájení. **Jednodušší** obsahu nerozumí (opakovač, hub), **chytřejší** ho interpretují (switch, router). Řadí se k vrstvám [ISO/OSI](/it/pocitacove-site/02-standardizace-model-iso-osi-a-tcp-ip/). Kabely: [pasivní prvky a kabeláž](/it/pocitacove-site/06-pasivni-sitove-prvky-a-kabelaz/).

## Přehled aktivních prvků

| Prvek | Vrstva | Rozhoduje podle | Úkol |
| --- | --- | --- | --- |
| opakovač | 1 | – | obnoví a zesílí signál |
| hub | 1 | – | rozešle signál na všechny porty |
| most (bridge) | 2 | MAC | odděluje segmenty |
| switch | 2 | MAC | rámec jen na port adresáta |
| router | 3 | IP | propojuje sítě, hledá cestu |
| L3 switch | 2 + 3 | MAC i IP | přepínání + směrování mezi VLAN |
| brána (gateway) | až 7 | obsah dat | převod mezi protokoly |
| přístupový bod (AP) | 1 + 2 | MAC | bezdrátová zařízení do kabelové sítě |
| síťová karta (NIC) | 1 + 2 | MAC | připojuje počítač |
| modem | 1 | – | digitální ↔ analogový signál |

### Opakovač (repeater)

- Nejjednodušší, **fyzická vrstva**.
- Signál slábne a zkresluje se; opakovač ho obnoví, zesílí a pošle dál → delší dosah.
- Posílá do všech segmentů, nerozumí mu, nefiltruje.

### Rozbočovač (hub)

- **Opakovač s více porty**, **fyzická vrstva**.
- Signál rozešle na **všechny ostatní porty**.
- Všichni sdílejí kapacitu = jedna **kolizní doména**; jen half duplex s CSMA/CD.
- Zatěžuje všechny cizími daty, s počtem stanic rostou kolize. Nahrazen switchem.

### Most (bridge)

- **Linková vrstva**, chytřejší než hub.
- Spojuje segmenty; rámec pro stejný segment dál nepustí → menší zátěž.
- Rozhoduje podle **MAC adres** v tabulce v RAM.
- Každá strana = samostatná kolizní doména, může mít jinou rychlost. Levnější než router.

### Přepínač (switch)

- **Linková vrstva**; **most s mnoha porty**, přepíná v hardwaru.
- Spojí jen porty, které spolu komunikují → víc dvojic naráz, nikdo nedostává cizí data.
- **Zpětné učení**: ze **zdrojové MAC** si zapíše port do **tabulky MAC adres** (CAM). Záznamy bez provozu vyprší (~300 s).
- Neznámá cílová MAC → rozešle všude kromě příchozího portu (**flooding**). Stejně broadcast (FF-FF-FF-FF-FF-FF).
- **Port = kolizní doména** (při full duplexu žádné kolize); všechny porty = jedna **broadcastová doména**.
- **Store-and-forward** (celý rámec, kontrola FCS, vadné zahodí) × **cut-through** (posílá hned po cílové adrese – rychlejší, ale šíří chyby).
- Spravovatelné: VLAN, agregace linek, STP, port security, **PoE** – viz [přepínání, STP a VLAN](/it/pocitacove-site/09-prepinani-stp-a-vlan/).

### Směrovač (router)

- **Síťová vrstva**, propojuje **různé sítě** (domácí síť ↔ Internet).
- Rozhoduje podle **IP** a **směrovací tabulky**; volí nejefektivnější cestu.
- **Odděluje broadcastové domény**.
- Často i NAT, DHCP, firewall, VPN.
- Topologii zadá správce (statické) nebo se ji naučí protokoly (dynamické). Routerem může být i PC.
- Adresa routeru v LAN = **výchozí brána** počítačů.

Viz [směrování](/it/pocitacove-site/16-smerovani-a-routovaci-tabulka/).

### Brána (gateway)

- Propojuje systémy s **odlišnými protokoly**, převádí data → musí jim rozumět, **aplikační vrstva**.
- Např. SMS brána (web → GSM), poštovní brána, VoIP brána do telefonní sítě.
- Pozor: „výchozí brána“ v nastavení IP je ve skutečnosti **router**.

### Další aktivní prvky

- **Access point (AP)** – bezdrátová zařízení do kabelové sítě. **Domácí Wi-Fi router** = router + switch (4 porty) + AP + DHCP + firewall.
- **Modem** – převod signálu pro vedení (telefon, kabelovka, optika).
- **L3 switch** – i směrování mezi VLAN v hardwaru.
- **Firewall** – filtr podle pravidel (adresy, porty, protokoly, stav spojení).
- **Transceiver** – převod pro médium, např. **SFP** modul pro optiku.

### Kolizní a broadcastová doména

- **Kolizní doména** – kde se mohou srazit dvě vysílání. Hub ji nedělí; switch a router ano (port = doména).
- **Broadcastová doména** – kam dorazí broadcast. Hub ani switch ji nedělí; router (a VLAN) ano.

![Router se dvěma sítěmi: za switchem každý port samostatná kolizní doména, za hubem celý segment jedna kolizní doména; každá strana routeru je jedna broadcastová doména](/images/content/it/pocitacove-site/aktivni-prvky/domeny.webp)

**Příklad.** Router se 2 porty; na jednom switch s 8 PC, na druhém hub se 4 PC. Kolizních domén: 8 (porty s PC) + 1 (switch–router) + 1 (hub) = **10**. Broadcastových: **2** (za každým portem routeru).

## Síťová karta (NIC)

**Síťové rozhraní** = adresovatelná hranice mezi zařízením a médiem. Fyzicky typicky **síťová karta** (NIC, Network Interface Card).

- **Fyzická + linková vrstva**: bity ↔ signál; sestavení a kontrola rámců, přístup k médiu, rozpoznání své MAC.
- **Hardware + firmware** (řízení spoje a přístupu k médiu).
- Liší se **médiem** (metalická, optická, bezdrátová) a **rychlostí** (10/100/1000 Mb/s, servery 2,5–25 Gb/s+).

### Úkoly síťové karty

- **Příprava dat pro kabel** – paralelní data ze sběrnice → sériový tok bitů → elektrický/optický signál. Dělá to **transceiver** (vysílač/přijímač).
- **Odesílání a příjem** dat.
- **Řízení toku** mezi PC a sítí.
- **Vyjednání parametrů** (**autonegotiation**) – nejvyšší společná rychlost a duplex.

Velkou část práce dělá CPU; moderní karty část TCP/IP převezmou (**TCP offloading**).

### Konstrukce a připojení

- **Čip** komunikuje se sběrnicí; **EEPROM** s nastavením a MAC; **BootROM** / **PXE** pro start ze sítě. Část u kabelu je **galvanicky oddělená** (transformátor).
- Dnes **integrovaná na desce**; jinak slot **PCIe** (dříve ISA, PCI, PCI-X), PC Card, **USB** adaptéry, Wi-Fi karty.
- Dříve ruční **IRQ** a I/O adresa; dnes Plug and Play.
- Funkce: **Wake-on-LAN**, nastavení rychlosti a duplexu, VLAN, PoE.

### Logická síťová rozhraní

**Virtuální** rozhraní = software, který se chová jako karta. **Loopback** – test síťového SW uvnitř PC, zvenku nedostupný: IPv4 **127.0.0.1**, IPv6 **::1**. Dále rozhraní VPN a virtualizace.

## MAC adresa

**MAC adresa** (Media Access Control) = **fyzická adresa** rozhraní v Ethernetu a Wi-Fi; doručení rámce v LAN.

![MAC adresa 00-1A-2B-3C-4D-5E: první tři bajty OUI výrobce přidělené IEEE, další tři bajty číslo karty od výrobce](/images/content/it/pocitacove-site/aktivni-prvky/mac.webp)

- **48 bitů (6 B)**, šestnáctkově: `00-1A-2B-3C-4D-5E` (Windows), `00:1a:2b:3c:4d:5e` (Linux), `001a.2b3c.4d5e` (Cisco).
- Výrobce ji zapíše do **ROM** (EEPROM); je **celosvětově jedinečná**.
- 1.–3. bajt **OUI** (výrobce, přiděluje **IEEE**; Novell `00-00-1B`, 3Com `00-20-AF`), 4.–6. bajt pořadové číslo od výrobce.
- Bity prvního bajtu: **I/G** (0 individuální, 1 multicast), **U/L** (0 od výrobce, 1 lokálně nastavená).
- **Broadcast** `FF-FF-FF-FF-FF-FF` = všem v síti.
- Lze ji změnit softwarově; telefony v cizích Wi-Fi používají **náhodnou MAC** proti sledování.
- Zjištění: Windows `ipconfig /all`, `getmac`; Linux `ip link`; MAC sousedů (ARP) `arp -a`.

## Otázky k opakování

1. Jaký je rozdíl mezi aktivním a pasivním síťovým prvkem? ||aktivní se podílí na komunikaci (regeneruje, zpracovává, směruje) a potřebuje napájení; pasivní signál jen vede||
2. Čím se liší hub a switch? ||hub (1. vrstva) rozešle signál na všechny porty a všichni sdílejí kolizní doménu; switch (2. vrstva) podle tabulky MAC adres pošle rámec jen na port adresáta||
3. Jak se switch učí, kde jsou jednotlivá zařízení? ||ze zdrojové MAC adresy přijatých rámců si zapíše port do tabulky MAC adres; neznámé cíle rozešle všude||
4. Na které vrstvě pracuje router a podle čeho se rozhoduje? ||na síťové; podle cílové IP adresy a směrovací tabulky||
5. Kolik kolizních a broadcastových domén vytvoří switch s 24 obsazenými porty bez VLAN? ||24 kolizních domén, 1 broadcastovou||
6. Co je výchozí brána? ||IP adresa rozhraní routeru v lokální síti, na kterou počítač posílá pakety do jiných sítí||
7. Jaké úkoly plní síťová karta? ||převádí paralelní data na sériový signál pro médium a zpět, sestavuje a kontroluje rámce, řídí přístup k médiu a tok dat, vyjednává rychlost a duplex||
8. Jak je dlouhá MAC adresa a z jakých částí se skládá? ||48 bitů; první 3 bajty OUI výrobce, další 3 bajty pořadové číslo karty od výrobce||
9. Jaká je broadcastová MAC adresa a k čemu je adresa 127.0.0.1? ||FF-FF-FF-FF-FF-FF; loopback – testování síťového software uvnitř počítače||
