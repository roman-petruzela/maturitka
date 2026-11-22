---
title: "Aktivní síťové prvky, síťová karta a MAC adresa"
order: 7
source: "IT/11. Aktivní a pasivní síťové prvky.docx; site/T09_sitova_karty.pdf; site/Ethernet_new.pdf; IT/Datové-sítě.docx"
---

**Aktivní prvky** se podílejí na komunikaci: regenerují signál, zkoumají rámce a pakety a rozhodují, kam je poslat. Potřebují napájení. Řadí se k vrstvám [ISO/OSI](/it/pocitacove-site/02-standardizace-model-iso-osi-a-tcp-ip/). Kabely: [pasivní prvky a kabeláž](/it/pocitacove-site/06-pasivni-sitove-prvky-a-kabelaz/).

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

- **Opakovač** – obnoví zeslábený signál a pošle dál, nerozumí mu.
- **Hub** – opakovač s více porty; signál dostanou **všechny** porty, všichni sdílejí kapacitu = jedna **kolizní doména**, jen half duplex. Nahrazen switchem.
- **Most** – spojuje segmenty, podle **MAC adres** nepustí rámec do segmentu, kde není potřeba.
- **Switch** – most s mnoha porty, přepíná v hardwaru; víc dvojic komunikuje naráz a nikdo nedostává cizí data. Podrobně [přepínání, STP a VLAN](/it/pocitacove-site/09-prepinani-stp-a-vlan/).
- **Brána** – propojuje systémy s **odlišnými protokoly** a převádí data (SMS brána, poštovní brána). Pozor: „výchozí brána“ v nastavení IP je ve skutečnosti **router**.
- **Firewall** – filtr provozu podle pravidel (adresy, porty, protokoly). **Domácí Wi-Fi router** = router + switch + AP + DHCP + firewall.

### Jak se switch učí

- **Zpětné učení:** ze **zdrojové MAC** přijatého rámce si zapíše port do **tabulky MAC adres**.
- Neznámá cílová MAC nebo broadcast → rozešle rámec všude kromě příchozího portu (**flooding**).
- **Store-and-forward** (zkontroluje celý rámec) × **cut-through** (posílá hned po cílové adrese, rychlejší).

### Směrovač (router)

- **Síťová vrstva**, propojuje **různé sítě** (domácí síť ↔ Internet), rozhoduje podle **IP** a **směrovací tabulky**.
- **Odděluje broadcastové domény**, často dělá i NAT, DHCP, firewall.
- Adresa routeru v LAN = **výchozí brána** počítačů. Viz [směrování](/it/pocitacove-site/16-smerovani-a-routovaci-tabulka/).

### Kolizní a broadcastová doména

- **Kolizní doména** – kde se mohou srazit dvě vysílání. Hub ji nedělí; switch a router ano (port = doména).
- **Broadcastová doména** – kam dorazí broadcast. Hub ani switch ji nedělí; router (a VLAN) ano.

![Router se dvěma sítěmi: za switchem každý port samostatná kolizní doména, za hubem celý segment jedna kolizní doména; každá strana routeru je jedna broadcastová doména](/images/content/it/pocitacove-site/aktivni-prvky/domeny.webp)

**Příklad.** Router se 2 porty; na jednom switch s 8 PC, na druhém hub se 4 PC. Kolizních domén: 8 + 1 (switch–router) + 1 (hub) = **10**. Broadcastových: **2**.

## Síťová karta (NIC)

**Síťové rozhraní** = adresovatelná hranice mezi zařízením a médiem; fyzicky **síťová karta** (NIC). Pracuje na **fyzické a linkové vrstvě**.

- **Úkoly:** převést paralelní data ze sběrnice na sériový signál (a zpět), sestavit a zkontrolovat rámce, řídit přístup k médiu a tok dat a **vyjednat rychlost a duplex** (autonegotiation).
- Liší se **médiem** (metalická, optická, bezdrátová) a **rychlostí** (10/100/1000 Mb/s a víc).
- Dnes bývá **integrovaná na desce**; jinak slot **PCIe**, **USB** adaptér, Wi-Fi karta. Funkce: **Wake-on-LAN**, VLAN, PXE (start ze sítě).
- **Loopback** je virtuální rozhraní pro test síťového softwaru uvnitř PC: IPv4 **127.0.0.1**, IPv6 **::1**.

## MAC adresa

**MAC adresa** = **fyzická adresa** rozhraní v Ethernetu a Wi-Fi, slouží k doručení rámce v LAN.

![MAC adresa 00-1A-2B-3C-4D-5E: první tři bajty OUI výrobce přidělené IEEE, další tři bajty číslo karty od výrobce](/images/content/it/pocitacove-site/aktivni-prvky/mac.webp)

- **48 bitů (6 B)**, šestnáctkově: `00-1A-2B-3C-4D-5E`. Výrobce ji zapíše do paměti karty, je **celosvětově jedinečná**.
- 1.–3. bajt **OUI** (výrobce, přiděluje **IEEE**), 4.–6. bajt pořadové číslo od výrobce.
- **Broadcast** `FF-FF-FF-FF-FF-FF` = všem v síti.
- Lze ji změnit softwarově; telefony používají v cizích Wi-Fi **náhodnou MAC**.
- Zjištění: Windows `ipconfig /all`, `getmac`; Linux `ip link`.

## Otázky k opakování

1. Jaký je rozdíl mezi aktivním a pasivním prvkem? ||aktivní se podílí na komunikaci a potřebuje napájení; pasivní signál jen vede||
2. Čím se liší hub a switch? ||hub (1. vrstva) rozešle signál na všechny porty, sdílená kolizní doména; switch (2. vrstva) pošle rámec jen na port adresáta podle tabulky MAC||
3. Jak se switch učí, kde jsou zařízení? ||ze zdrojové MAC přijatých rámců; neznámé cíle rozešle všude||
4. Na které vrstvě pracuje router a podle čeho se rozhoduje? ||na síťové; podle cílové IP a směrovací tabulky||
5. Kolik kolizních a broadcastových domén vytvoří switch s 24 obsazenými porty bez VLAN? ||24 kolizních, 1 broadcastovou||
6. Co je výchozí brána? ||IP adresa routeru v lokální síti, kam počítač posílá pakety do jiných sítí||
7. Jaké úkoly plní síťová karta? ||převádí data na sériový signál a zpět, sestavuje rámce, řídí přístup k médiu, vyjednává rychlost a duplex||
8. Z jakých částí se skládá MAC adresa? ||48 bitů; první 3 bajty OUI výrobce, další 3 bajty číslo karty||
