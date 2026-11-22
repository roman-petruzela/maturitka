---
title: "Bezpečnost, správa a diagnostika sítě"
order: 20
source: "IT/Datové-sítě.docx"
---

Síť je potřeba chránit před útoky, průběžně sledovat a při poruše rychle najít chybu. Kybernetické bezpečnosti se podrobněji věnuje [zabezpečení sítí a aplikací](/it/kyberneticka-bezpecnost/05-zabezpeceni-siti-a-aplikaci/).

## Útoky na síť

- **Pasivní** – útočník jen **sleduje** komunikaci a ohrožuje **důvěrnost**: **odposlech** (hesla v Telnetu, FTP, HTTP) a **analýza provozu** (kdo s kým a jak často komunikuje, funguje i u šifrovaných zpráv). Špatně se odhaluje, proto je důležité šifrování.
- **Aktivní** – útočník data **mění, přidává nebo ruší**: **maškaráda** (předstírá oprávněného uživatele), **přehrání zprávy** (replay), **pozměnění zprávy**, **člověk uprostřed** (MitM, např. podvržením ARP nebo falešným Wi-Fi AP), **DoS/DDoS** (zahlcení služby, u DDoS z mnoha počítačů **botnetu**).

**Ochrana sítě:** fyzická bezpečnost (zamčené rozvaděče, vypnuté porty), **port security** a **802.1X**, segmentace do [VLAN](/it/pocitacove-site/09-prepinani-stp-a-vlan/#vlan--virtuální-lokální-sítě) a DMZ, **firewall**, **IDS/IPS**, šifrování (HTTPS, SSH, WPA3, VPN), aktualizace a zálohy.

## Řízení přístupu: ACL a AAA

**ACL** (Access Control List) na routerech a firewallech **filtruje pakety**.

- Pravidla se procházejí **shora dolů**, použije se **první** vyhovující (permit / deny).
- Na konci je skryté pravidlo **„zakázat vše“** (implicit deny).
- **Standardní** ACL filtruje jen podle **zdrojové** IP, **rozšířené** i podle cíle, protokolu a portu.
- Adresy se zadávají s **wildcard maskou** (síť /24 → `0.0.0.255`); seznam se přiřadí k rozhraní pro příchozí (in) nebo odchozí (out) provoz.

**AAA** je rámec pro řízení přístupu: **autentizace** (kdo jsi), **autorizace** (co smíš), **účtování** (co jsi dělal). Centrálně ji zajišťují servery **RADIUS** (Wi-Fi 802.1X) a **TACACS+** (správa síťových zařízení).

## Správa sítě: SNMP

**SNMP** (Simple Network Management Protocol) sbírá údaje ze zařízení (zatížení, teplota, chyby portů) a některé hodnoty umí nastavit.

- **Správce** (manager) se **dotazuje agentů** v zařízeních (UDP **161**); agent sám pošle **trap** při události (UDP **162**).
- SNMPv1 a v2c chrání přístup jen heslem (community) posílaným nešifrovaně, **SNMPv3** přidává ověření a šifrování.
- Staví na něm monitoring (Zabbix, PRTG, Nagios). Dále se používá **syslog** (centrální sběr zpráv) a zálohy konfigurací.

## Diagnostika sítě

Poruchu hledáme **po vrstvách** modelu ISO/OSI, obvykle **zdola nahoru**:

1. **Fyzická** – kabel, kontrolka portu, napájení, Wi-Fi.
2. **Linková** – port switche zapnutý, správná VLAN, nezablokovaný.
3. **Síťová** – IP adresa, maska a brána (`ipconfig /all`; adresa 169.254.x.x = nefunguje DHCP), `ping`, `tracert`.
4. **Transportní a aplikační** – překlad jmen (`nslookup`), běžící služba, firewall.

**Rozděl a panuj:** ping na 127.0.0.1 → na bránu → na adresu v Internetu (8.8.8.8) → na jméno. Funguje-li ping na adresu, ale ne na jméno, je chyba v **DNS**.

| Příkaz | K čemu slouží |
| --- | --- |
| `ipconfig /all` / `ip addr` | adresa, maska, brána, DNS, MAC |
| `ping` | dostupnost a odezva (ICMP echo) |
| `tracert` / `traceroute` | cesta přes routery a zpoždění |
| `nslookup`, `dig` | dotazy na DNS |
| `arp -a` | tabulka ARP |
| `netstat -an` / `ss -tuln` | otevřená spojení a porty |
| **Wireshark** | rozbor paketů, viz [rozbor paketu](/it/pocitacove-site/11-ip-protokol-a-ipv4-datagram/#rozbor-paketu) |

Hardware: **tester kabelů**, **certifikační přístroj** (délka, útlum, přeslechy), **reflektometr** (místo přerušení).

## Otázky k opakování

1. Jaký je rozdíl mezi pasivním a aktivním útokem? ||pasivní sleduje komunikaci a ohrožuje důvěrnost; aktivní data mění nebo narušuje službu||
2. Jakými opatřeními se síť chrání? ||fyzické zabezpečení, port security a 802.1X, VLAN a DMZ, firewall, IDS/IPS, šifrování a VPN, aktualizace||
3. Jak se vyhodnocují pravidla ACL a co je skryté pravidlo na konci? ||shora dolů, použije se první vyhovující; na konci je zakázat vše||
4. Co znamenají tři A v AAA? ||autentizace, autorizace, účtování||
5. Jak funguje SNMP? ||správce se dotazuje agentů přes UDP 161, agenti posílají trapy na port 162||
6. Popište postup hledání poruchy, když uživatel „nemá Internet“. ||po vrstvách: kabel a link, port a VLAN, IP adresa a brána, ping na bránu a do Internetu, nslookup, firewall||
7. Ping na 8.8.8.8 funguje, na www.example.com ne. Kde je chyba? ||v překladu jmen – DNS||
