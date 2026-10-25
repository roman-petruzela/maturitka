---
title: "Technická dokumentace sítě"
order: 19
---

**Technická dokumentace sítě** popisuje, jak je síť postavená a nastavená: co je kde zapojené, jaké adresy a VLAN se používají, jaká zařízení v síti jsou a jak jsou nakonfigurovaná. Bez ní se síť špatně spravuje – každá porucha začíná zjišťováním, kam vede který kabel, a nový správce musí síť zkoumat od začátku. Dobrá dokumentace zkracuje řešení poruch, usnadňuje rozšiřování sítě a předání správy, je podkladem pro bezpečnostní audit a obnovu po havárii.

## Požadavky na dokumentaci

- **Aktuálnost** – každá změna v síti se hned promítne do dokumentace; zastaralá dokumentace je skoro horší než žádná.
- **Úplnost a srozumitelnost** – musí se v ní vyznat i jiný správce, ne jen autor.
- **Jednotné značení** – názvy zařízení, čísla portů a zásuvek podle jednoho schématu.
- **Verze a datum** – kdo a kdy dokumentaci naposledy změnil, záznam o změnách.
- **Zabezpečení** – dokumentace prozrazuje strukturu sítě, a je proto důvěrná. Hesla do ní nepatří, ukládají se odděleně ve správci hesel.

## Části dokumentace

### Schéma fyzické topologie

Zachycuje **skutečné rozmístění** a propojení: budovy, místnosti, rozvaděče, kudy vedou kabely, které zásuvky jsou připojeny na který patch panel, umístění přístupových bodů. Podkladem je půdorys budovy. Kreslí se značkami pro jednotlivá zařízení a typy kabelů (metalický, optický, bezdrátový spoj).

### Schéma logické topologie

Zachycuje, **jak tečou data**: sítě a podsítě s adresami a maskami, VLAN, routery a jejich rozhraní s IP adresami, výchozí brány, připojení k Internetu, firewally, VPN a směrování. Nezáleží v něm na tom, kde zařízení fyzicky stojí. Používají se standardní značky (např. sada ikon Cisco: router jako kruh se šipkami, switch jako hranol se šipkami, firewall jako zeď), aby schéma bylo čitelné pro každého.

### Plán IP adres a VLAN

Tabulka, která přiděluje adresy podsítím a důležitým zařízením. Příklad pro malou školní síť:

| VLAN | Název | Síť | Brána | DHCP rozsah | Poznámka |
| --- | --- | --- | --- | --- | --- |
| 10 | Učebny | 192.168.10.0/24 | 192.168.10.1 | .100 – .250 | počítače v učebnách |
| 20 | Kancelář | 192.168.20.0/26 | 192.168.20.1 | .20 – .60 | zaměstnanci |
| 30 | Servery | 192.168.30.0/28 | 192.168.30.1 | – | jen statické adresy |
| 40 | Hosté Wi-Fi | 192.168.40.0/24 | 192.168.40.1 | .10 – .250 | izolovaná, jen Internet |
| 99 | Správa | 192.168.99.0/28 | 192.168.99.1 | – | rozhraní pro správu switchů a AP |

K tomu seznam **statických adres** (servery, tiskárny, switche, přístupové body, kamery) a **rezervací** v DHCP. Návrh podsítí s různou velikostí ukazuje stránka [CIDR, podsíťování a VLSM](/it/pocitacove-site/13-cidr-podsitovani-a-vlsm/).

### Inventář zařízení

Seznam všech aktivních prvků a serverů: název (hostname), typ a model, sériové číslo, MAC adresa, IP adresa pro správu, verze firmwaru nebo operačního systému, umístění (budova, místnost, rozvaděč, pozice v racku), datum pořízení a konec záruky či podpory.

### Kabeláž a značení

- **Značení zásuvek, portů a kabelů** podle jednotného schématu, např. zásuvka `B2-105-03` = budova B, 2. patro, místnost 105, zásuvka 3.
- **Tabulka propojení** – která zásuvka vede na který port patch panelu a ten na který port switche:

| Zásuvka | Patch panel | Switch / port | VLAN | Zařízení |
| --- | --- | --- | --- | --- |
| B2-105-01 | PP1 / 01 | SW-B2-01 / Gi1/0/1 | 10 | PC učitele |
| B2-105-02 | PP1 / 02 | SW-B2-01 / Gi1/0/2 | 10 | PC 1 |
| B2-105-03 | PP1 / 03 | SW-B2-01 / Gi1/0/24 | 99 | přístupový bod |

- **Schéma rozvaděče (racku)** – co je na které pozici (jednotky U): patch panely, switche, vyvazovací panely, servery, UPS.
- **Měřicí protokoly** strukturované kabeláže – výsledky certifikačního měření každé linky (správné zapojení vodičů, délka, útlum, přeslechy), které dokládají, že kabeláž splňuje svou kategorii. Popis kabeláže je na stránce [pasivní síťové prvky a kabeláž](/it/pocitacove-site/06-pasivni-sitove-prvky-a-kabelaz/#strukturovaná-kabeláž).

### Konfigurace a provoz

- **Zálohy konfigurací** všech síťových zařízení (např. `show running-config` uložené na server TFTP), ideálně automaticky a s historií.
- **Nastavení služeb**: DHCP, DNS, firewall a jeho pravidla, VPN, Wi-Fi (názvy sítí, zabezpečení).
- **Údaje o připojení k Internetu**: poskytovatel, smlouva, veřejné adresy, kontakty na technickou podporu.
- **Provozní postupy**: přidání uživatele, obnova ze zálohy, postup při výpadku, kontakty na odpovědné osoby.
- **Záznam změn** (change log) – co, kdy, kdo a proč změnil.

## Nástroje pro tvorbu dokumentace

| Nástroj | Použití |
| --- | --- |
| **Microsoft Visio** | profesionální diagramy, sady značek síťových zařízení (stencils) od výrobců |
| **Lucidchart**, **diagrams.net (draw.io)** | online kreslení schémat, sdílení a spolupráce; draw.io je zdarma |
| **Dia** | volně šiřitelný program pro diagramy s knihovnou síťových značek |
| **Cisco Packet Tracer** | návrh a simulace sítě včetně konfigurace zařízení, viz [Cisco Packet Tracer](/it/pocitacove-site/22-cisco-packet-tracer/) |
| tabulkový procesor | plán adres, inventář, tabulka propojení |
| **NetBox** a podobné systémy | databáze sítě: adresy (IPAM), zařízení, racky, kabely (DCIM) |
| monitorovací systémy (Zabbix, PRTG) | automatické zjištění zařízení a sledování jejich stavu |

## Postup při dokumentování

1. Sepsat **požadavky** a rozsah sítě (počet uživatelů, místností, služeb).
2. Navrhnout **logickou topologii**, VLAN a **plán adres**.
3. Navrhnout **fyzickou topologii** – umístění rozvaděčů, zásuvek a přístupových bodů, trasy kabelů.
4. Po instalaci doplnit **skutečný stav** (dokumentace skutečného provedení), měřicí protokoly a značení.
5. Uložit **konfigurace** a vytvořit inventář.
6. Dokumentaci **průběžně aktualizovat** při každé změně.

## Otázky k opakování

1. Proč je technická dokumentace sítě důležitá? ||zrychluje řešení poruch, usnadňuje rozšiřování a předání správy, slouží pro audit a obnovu po havárii||
2. Jaký je rozdíl mezi schématem fyzické a logické topologie? ||fyzické ukazuje skutečné umístění zařízení a kabelů, logické tok dat – podsítě, adresy, VLAN, routery||
3. Co obsahuje plán IP adres? ||podsítě s maskami, VLAN, brány, rozsahy DHCP, statické adresy a rezervace||
4. Jaké údaje patří do inventáře zařízení? ||název, model, sériové číslo, MAC a IP adresa pro správu, firmware, umístění, záruka||
5. Proč se značí zásuvky a porty a co je tabulka propojení? ||aby šlo dohledat, kam vede každý kabel; tabulka přiřazuje zásuvku k portu patch panelu a switche||
6. Které nástroje lze pro dokumentaci použít? ||Visio, Lucidchart, draw.io, Dia, Packet Tracer, tabulky, NetBox||
7. Proč do dokumentace nepatří hesla? ||dokumentace se sdílí a kopíruje; hesla patří do zabezpečeného správce hesel||
