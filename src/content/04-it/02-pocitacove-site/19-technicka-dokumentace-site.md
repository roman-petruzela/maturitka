---
title: "Technická dokumentace sítě"
order: 19
---

**Technická dokumentace sítě** = jak je síť postavená a nastavená: zapojení, adresy, VLAN, zařízení, konfigurace. Bez ní každá porucha začíná hledáním, kam vede který kabel. Zrychluje opravy, rozšiřování, předání správy; podklad pro audit a obnovu po havárii.

## Požadavky na dokumentaci

- **Aktuálnost** – každá změna hned zapsaná; zastaralá je skoro horší než žádná.
- **Úplnost a srozumitelnost** – vyzná se v ní i jiný správce.
- **Jednotné značení** – názvy zařízení, porty, zásuvky podle jednoho schématu.
- **Verze a datum** – kdo a kdy měnil.
- **Zabezpečení** – prozrazuje strukturu sítě → důvěrná. **Hesla ne** – patří do správce hesel.

## Části dokumentace

### Schéma fyzické topologie

**Skutečné rozmístění**: budovy, místnosti, rozvaděče, trasy kabelů, zásuvky → patch panely, přístupové body. Na půdorysu budovy, značky zařízení a typů kabelů.

### Schéma logické topologie

**Tok dat**: podsítě s adresami, VLAN, routery a jejich IP, brány, Internet, firewally, VPN. Fyzické umístění nehraje roli. Standardní značky (Cisco ikony: router = kruh se šipkami, switch = hranol, firewall = zeď).

![Logická topologie malé školní sítě: Internet, router R1 s NAT a firewallem, L3 switch a pět VLAN s adresami podsítí podle plánu adres](/images/content/it/pocitacove-site/dokumentace/logicka-topologie.webp)

### Plán IP adres a VLAN

Příklad pro malou školní síť:

| VLAN | Název | Síť | Brána | DHCP | Poznámka |
| --- | --- | --- | --- | --- | --- |
| 10 | Učebny | 192.168.10.0/24 | .1 | .100 – .250 | PC v učebnách |
| 20 | Kancelář | 192.168.20.0/26 | .1 | .20 – .60 | zaměstnanci |
| 30 | Servery | 192.168.30.0/28 | .1 | – | jen statické |
| 40 | Hosté Wi-Fi | 192.168.40.0/24 | .1 | .10 – .250 | izolovaná, jen Internet |
| 99 | Správa | 192.168.99.0/28 | .1 | – | správa switchů a AP |

Plus seznam **statických adres** (servery, tiskárny, switche, AP, kamery) a **DHCP rezervací**. Návrh podsítí: [CIDR a VLSM](/it/pocitacove-site/13-cidr-podsitovani-a-vlsm/).

### Inventář zařízení

Hostname, typ a model, sériové číslo, MAC, IP pro správu, firmware/OS, umístění (budova, místnost, rack, pozice U), datum pořízení, konec záruky/podpory.

### Kabeláž a značení

- **Značení** zásuvek, portů a kabelů, např. `B2-105-03` = budova B, 2. patro, místnost 105, zásuvka 3.
- **Tabulka propojení** zásuvka → patch panel → switch:

| Zásuvka | Patch panel | Switch / port | VLAN | Zařízení |
| --- | --- | --- | --- | --- |
| B2-105-01 | PP1 / 01 | SW-B2-01 / Gi1/0/1 | 10 | PC učitele |
| B2-105-02 | PP1 / 02 | SW-B2-01 / Gi1/0/2 | 10 | PC 1 |
| B2-105-03 | PP1 / 03 | SW-B2-01 / Gi1/0/24 | 99 | přístupový bod |

- **Schéma racku** – co je na které pozici U.
- **Měřicí protokoly** – certifikace každé linky (zapojení, délka, útlum, přeslechy). Viz [strukturovaná kabeláž](/it/pocitacove-site/06-pasivni-sitove-prvky-a-kabelaz/#strukturovaná-kabeláž).

### Konfigurace a provoz

- **Zálohy konfigurací** (`show running-config` na TFTP), ideálně automaticky s historií.
- **Nastavení služeb**: DHCP, DNS, firewall, VPN, Wi-Fi.
- **Připojení k Internetu**: ISP, smlouva, veřejné adresy, kontakty.
- **Postupy**: nový uživatel, obnova ze zálohy, výpadek, kontakty.
- **Change log** – co, kdy, kdo, proč.

## Nástroje pro tvorbu dokumentace

| Nástroj | Použití |
| --- | --- |
| **Microsoft Visio** | profesionální diagramy, značky výrobců |
| **Lucidchart**, **draw.io** | online schémata, spolupráce; draw.io zdarma |
| **Dia** | volný program s síťovými značkami |
| **Cisco Packet Tracer** | návrh a simulace, viz [Packet Tracer](/it/pocitacove-site/22-cisco-packet-tracer/) |
| tabulkový procesor | plán adres, inventář, propojení |
| **NetBox** aj. | databáze sítě: IPAM, racky, kabely (DCIM) |
| Zabbix, PRTG | automatické zjištění a monitoring |

## Postup při dokumentování

1. **Požadavky** a rozsah (uživatelé, místnosti, služby).
2. **Logická topologie**, VLAN, **plán adres**.
3. **Fyzická topologie** – rozvaděče, zásuvky, AP, trasy kabelů.
4. Po instalaci **skutečný stav**, měřicí protokoly, značení.
5. **Konfigurace** a inventář.
6. **Průběžná aktualizace**.

## Otázky k opakování

1. Proč je technická dokumentace sítě důležitá? ||zrychluje řešení poruch, usnadňuje rozšiřování a předání správy, slouží pro audit a obnovu po havárii||
2. Jaký je rozdíl mezi schématem fyzické a logické topologie? ||fyzické ukazuje skutečné umístění zařízení a kabelů, logické tok dat – podsítě, adresy, VLAN, routery||
3. Co obsahuje plán IP adres? ||podsítě s maskami, VLAN, brány, rozsahy DHCP, statické adresy a rezervace||
4. Jaké údaje patří do inventáře zařízení? ||název, model, sériové číslo, MAC a IP adresa pro správu, firmware, umístění, záruka||
5. Proč se značí zásuvky a porty a co je tabulka propojení? ||aby šlo dohledat, kam vede každý kabel; tabulka přiřazuje zásuvku k portu patch panelu a switche||
6. Které nástroje lze pro dokumentaci použít? ||Visio, Lucidchart, draw.io, Dia, Packet Tracer, tabulky, NetBox||
7. Proč do dokumentace nepatří hesla? ||dokumentace se sdílí a kopíruje; hesla patří do zabezpečeného správce hesel||
