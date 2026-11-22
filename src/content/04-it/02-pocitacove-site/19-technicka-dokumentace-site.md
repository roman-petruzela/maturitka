---
title: "Technická dokumentace sítě"
order: 19
---

**Technická dokumentace sítě** = jak je síť postavená a nastavená: zapojení, adresy, VLAN, zařízení, konfigurace. Zrychluje opravy, rozšiřování a předání správy; je podkladem pro audit a obnovu po havárii.

## Požadavky na dokumentaci

- **Aktuálnost** – každá změna hned zapsaná.
- **Úplnost a srozumitelnost** – vyzná se v ní i jiný správce.
- **Jednotné značení** zařízení, portů a zásuvek, **verze a datum** změn.
- **Důvěrnost** – prozrazuje strukturu sítě. **Hesla do ní nepatří**, ukládají se do správce hesel.

## Části dokumentace

- **Schéma fyzické topologie** – skutečné rozmístění: budovy, rozvaděče, trasy kabelů, zásuvky, přístupové body (na půdorysu budovy).
- **Schéma logické topologie** – tok dat: podsítě s adresami, VLAN, routery, brány, firewally, VPN; fyzické umístění nehraje roli.

![Logická topologie malé školní sítě: Internet, router R1 s NAT a firewallem, L3 switch a pět VLAN s adresami podsítí podle plánu adres](/images/content/it/pocitacove-site/dokumentace/logicka-topologie.webp)

- **Plán IP adres a VLAN** – podsítě s maskami, brány, rozsahy DHCP, statické adresy a rezervace. Návrh podsítí: [CIDR a VLSM](/it/pocitacove-site/13-cidr-podsitovani-a-vlsm/).

| VLAN | Název | Síť | Brána | DHCP |
| --- | --- | --- | --- | --- |
| 10 | Učebny | 192.168.10.0/24 | .1 | .100 – .250 |
| 20 | Kancelář | 192.168.20.0/26 | .1 | .20 – .60 |
| 30 | Servery | 192.168.30.0/28 | .1 | jen statické |
| 99 | Správa | 192.168.99.0/28 | .1 | jen statické |

- **Inventář zařízení** – název, model, sériové číslo, MAC a IP pro správu, firmware, umístění (rack, pozice U), záruka.
- **Kabeláž a značení** – zásuvky, porty a kabely se značí (např. `B2-105-03` = budova B, 2. patro, místnost 105, zásuvka 3); **tabulka propojení** přiřazuje zásuvku → patch panel → port switche. K tomu **schéma racku** a **měřicí protokoly** (viz [strukturovaná kabeláž](/it/pocitacove-site/06-pasivni-sitove-prvky-a-kabelaz/#strukturovaná-kabeláž)).
- **Konfigurace a provoz** – zálohy konfigurací, nastavení služeb (DHCP, DNS, firewall, VPN), připojení k Internetu, postupy při výpadku a **change log**.

## Nástroje

**Microsoft Visio**, **draw.io** a **Lucidchart** (schémata), **Dia**, **Cisco Packet Tracer** (návrh a simulace, viz [Packet Tracer](/it/pocitacove-site/22-cisco-packet-tracer/)), tabulkový procesor (plán adres, inventář), **NetBox** (databáze sítě), **Zabbix** a **PRTG** (monitoring).

## Postup při dokumentování

1. Požadavky a rozsah → 2. logická topologie a plán adres → 3. fyzická topologie → 4. skutečný stav po instalaci (měření, značení) → 5. konfigurace a inventář → 6. průběžná aktualizace.

## Otázky k opakování

1. Proč je technická dokumentace sítě důležitá? ||zrychluje řešení poruch, usnadňuje rozšiřování a předání správy, slouží pro audit a obnovu po havárii||
2. Jaký je rozdíl mezi schématem fyzické a logické topologie? ||fyzické ukazuje umístění zařízení a kabelů, logické tok dat – podsítě, adresy, VLAN, routery||
3. Co obsahuje plán IP adres? ||podsítě s maskami, VLAN, brány, rozsahy DHCP, statické adresy a rezervace||
4. Jaké údaje patří do inventáře zařízení? ||název, model, sériové číslo, MAC a IP adresa, firmware, umístění, záruka||
5. Proč se značí zásuvky a porty? ||aby šlo dohledat, kam vede každý kabel; tabulka propojení přiřazuje zásuvku k portu patch panelu a switche||
6. Proč do dokumentace nepatří hesla? ||dokumentace se sdílí a kopíruje; hesla patří do správce hesel||
