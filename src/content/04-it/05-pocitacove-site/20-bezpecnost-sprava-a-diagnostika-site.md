---
title: "Bezpečnost, správa a diagnostika sítě"
order: 20
source: "IT/Datové-sítě.docx"
---

Síť je potřeba chránit před útoky, průběžně sledovat a při poruše rychle najít, kde je chyba. Tato stránka shrnuje druhy útoků na síť a ochranu proti nim, řízení přístupu (ACL, AAA), správu sítě protokolem SNMP a postup a nástroje diagnostiky. Podrobněji se kybernetické bezpečnosti věnuje kategorie [kybernetická bezpečnost](/it/kyberneticka-bezpecnost/02-zabezpeceni-siti-a-aplikaci/).

## Útoky na síť

Typické hrozby: odposlech přenášených dat, falšování identity (podvržení MAC nebo IP adresy, útok „člověk uprostřed“), škodlivý software (viry, trojské koně, spyware, adware), přetížení nebo zahlcení zdrojů (spam, DoS, DDoS), získávání soukromých informací a podvržení informací.

### Pasivní útoky

Útočník jen **sleduje** komunikační kanál a systém nijak nemění – ohrožuje **důvěrnost** dat. Pasivní útok se špatně odhaluje, proto je důležitá prevence (šifrování).

- **Odposlech** – většina provozu dříve putovala nešifrovaně, takže kdo získal přístup k přenosové cestě, mohl data číst (hesla v Telnetu, FTP, HTTP). Bez silného šifrování je odposlech největší hrozbou.
- **Analýza provozu** – útočník zkoumá, kdo s kým, kdy a jak často komunikuje. Funguje i u šifrovaných zpráv, které nedokáže přečíst; čím víc provozu zachytí, tím víc z něj vyvodí.

### Aktivní útoky

Útočník se snaží data **měnit, odstraňovat, přidávat** nebo ovlivnit funkci systému – ohrožuje **integritu**, **autentizaci** i **dostupnost**.

- **Maškaráda** – útočník předstírá, že je oprávněný uživatel, aby získal přístup nebo vyšší oprávnění.
- **Přehrání zprávy** (replay) – zachycená zpráva (např. přihlášení) se později podvodně pošle znovu.
- **Pozměnění zprávy** – útočník zprávu zachytí, změní a pošle dál.
- **Člověk uprostřed** (MitM) – útočník se vloží mezi dvě komunikující strany (např. podvržením ARP nebo falešným přístupovým bodem Wi-Fi), čte a mění jejich komunikaci a může zcizit identitu.
- **Odepření služby** (DoS, DDoS) – zahlcení cílového systému požadavky; u distribuované varianty z mnoha napadených počítačů (sítě **botnet**).
- Útoky na síťové služby: podvržený DHCP server, otrávení cache DNS, zahlcení tabulky MAC adres switche.

### Ochrana sítě

- **Fyzická bezpečnost** – rozvaděče a serverovny zamčené, nepoužívané zásuvky a porty switchů vypnuté.
- **Řízení přístupu do sítě** – zabezpečení portů switchů (port security), ověřování 802.1X, oddělení hostů.
- **Segmentace** – oddělení skupin uživatelů a služeb do [VLAN](/it/pocitacove-site/09-prepinani-stp-a-vlan/#vlan--virtuální-lokální-sítě), servery dostupné z Internetu do DMZ.
- **Firewall** – filtruje provoz mezi sítěmi podle pravidel (adresy, porty, protokoly, stav spojení).
- **IDS/IPS** – systém pro detekci (a u IPS i zastavení) útoků podle známých vzorů nebo neobvyklého chování.
- **Šifrování** – HTTPS, SSH místo Telnetu, WPA2/WPA3 ve Wi-Fi, **VPN** pro vzdálený přístup.
- **Aktualizace** firmwaru a softwaru, silná hesla, zálohy konfigurací, sledování logů.

## Řízení přístupu: ACL a AAA

### Přístupové seznamy (ACL)

**ACL** (Access Control List) je obecně seznam oprávnění připojený k objektu – určuje, kdo nebo co k objektu smí přistupovat a jaké operace s ním smí dělat. Před každou operací systém seznam prohledá a podle odpovídajícího záznamu rozhodne. Rozlišuje se **volitelné** řízení přístupu (vlastník objektu sám určuje, kdo k němu smí) a **povinné** (navíc platí pravidla stanovená systémem, která vlastník nemůže změnit).

Na routerech a firewallech ACL **filtruje pakety**:

- Pravidla se procházejí **shora dolů**; použije se **první** vyhovující pravidlo (povolit – permit, nebo zakázat – deny) a další se už nezkoumají.
- Na konci každého seznamu je skryté pravidlo **„zakázat vše“** (implicit deny) – co není výslovně povoleno, je zakázáno.
- **Standardní ACL** (Cisco čísla 1–99) filtrují jen podle **zdrojové** IP adresy; umisťují se co nejblíž cíli.
- **Rozšířené ACL** (100–199) filtrují podle zdrojové i cílové adresy, protokolu a portu; umisťují se co nejblíž zdroji.
- Adresy se v ACL zadávají s **wildcard maskou** – obrácenou maskou, kde 0 znamená „bit musí souhlasit“ a 1 „na bitu nezáleží“ (síť /24 → `0.0.0.255`).
- Seznam se přiřadí k rozhraní pro příchozí (in) nebo odchozí (out) provoz.

**Příklad:** z učebny 192.168.10.0/24 povolit jen web (HTTP, HTTPS) a DNS, ostatní zakázat.

```
Router(config)# access-list 110 permit tcp 192.168.10.0 0.0.0.255 any eq 80
Router(config)# access-list 110 permit tcp 192.168.10.0 0.0.0.255 any eq 443
Router(config)# access-list 110 permit udp 192.168.10.0 0.0.0.255 any eq 53
Router(config)# interface GigabitEthernet0/0
Router(config-if)# ip access-group 110 in
```

Vše ostatní z učebny zahodí skryté pravidlo „zakázat vše“ na konci seznamu.

### AAA

**AAA** je rámec pro řízení přístupu uživatelů k síti a jejím zařízením:

- **Autentizace** (authentication) – ověření, že uživatel je tím, za koho se vydává (jméno a heslo, certifikát, token, vícefaktorové ověření).
- **Autorizace** (authorization) – určení, co smí ověřený uživatel dělat – které služby a příkazy, v jakou dobu, odkud.
- **Účtování** (accounting) – záznam o tom, co uživatel dělal a jak dlouho služby využíval; slouží ke správě, plánování, vyúčtování a auditu.

Centrálně AAA zajišťují servery **RADIUS** (např. ověřování ve Wi-Fi 802.1X) a **TACACS+** (správa síťových zařízení), takže se účty nemusí zakládat na každém zařízení zvlášť.

## Správa sítě: SNMP

**SNMP** (Simple Network Management Protocol) je jednoduchý, široce rozšířený standardní protokol pro správu a sledování sítě. Umožňuje průběžně sbírat údaje ze zařízení (vytížení linek a procesoru, teplota, chyby na portech, stav tiskáren) a některé hodnoty i nastavovat. Podporují ho aktivní síťové prvky, servery, tiskárny, přístupové body, UPS i čidla a stojí na něm většina nástrojů pro správu sítě.

- Komunikují dvě strany: **správce** (manager – monitorovací server) a **agent** (program v zařízení).
- Správce se agenta **dotazuje** a dostává odpovědi (hodnot se může ptát i více správců a kdykoli).
- Agent sám posílá **oznámení (trap)** při definované události – překročení hodnoty, výpadek rozhraní, restart.
- Používá **UDP** (port 161 pro dotazy, 162 pro trapy), takže je rychlý a nezatěžuje síť. Verze SNMPv1 a v2c chrání přístup jen heslem (community), které putuje nešifrovaně; **SNMPv3** přidává ověření a šifrování.
- Na SNMP stavějí monitorovací systémy (Zabbix, PRTG, Nagios, LibreNMS), které kreslí grafy provozu a upozorní správce na problém.

Kromě SNMP se pro správu používají **syslog** (centrální sběr zpráv ze zařízení), **NetFlow** (statistiky toků provozu) a zálohování konfigurací.

## Diagnostika sítě

### Postup při hledání poruchy

Poruchu je nejlepší hledat systematicky **po vrstvách** modelu ISO/OSI, obvykle **zdola nahoru**:

1. **Fyzická vrstva** – je kabel zapojený, svítí kontrolka portu (link), není kabel poškozený, je zařízení zapnuté, je Wi-Fi připojena?
2. **Linková vrstva** – je port switche zapnutý a ve správné VLAN, není zablokovaný (port security, STP)?
3. **Síťová vrstva** – má počítač správnou IP adresu, masku a bránu (`ipconfig /all`; adresa 169.254.x.x znamená nefunkční DHCP), odpovídá brána a vzdálený server na ping, vede cesta správně (`tracert`)?
4. **Transportní a aplikační vrstva** – funguje překlad jmen (`nslookup`), běží služba a je port otevřený, neblokuje ho firewall?

Pomáhá i postup **„rozděl a panuj“** – nejdřív ping na vlastní počítač (127.0.0.1), pak na bránu, pak na adresu v Internetu (např. 8.8.8.8) a nakonec na jméno (`ping www.example.com`). Funguje-li ping na adresu, ale ne na jméno, je chyba v DNS.

### Nástroje

| Příkaz (Windows / Linux) | K čemu slouží |
| --- | --- |
| `ipconfig /all` / `ip addr` | výpis adresy, masky, brány, DNS a MAC adresy |
| `ping` | test dostupnosti a doby odezvy (ICMP echo) |
| `tracert` / `traceroute` | cesta k cíli přes jednotlivé routery a zpoždění na nich |
| `pathping` / `mtr` | kombinace pingu a tracertu – ztrátovost na každém úseku cesty |
| `nslookup`, `dig` | dotazy na DNS |
| `arp -a` / `ip neigh` | tabulka ARP – IP a MAC adresy sousedů |
| `netstat -an` / `ss -tuln` | otevřená spojení a naslouchající porty |
| `route print` / `ip route` | směrovací tabulka počítače |
| **Wireshark** | zachytávání a rozbor paketů – podrobně viz [rozbor paketu](/it/pocitacove-site/11-ip-protokol-a-ipv4-datagram/#rozbor-paketu) |
| `nmap` | skenování sítě – dostupná zařízení a otevřené porty (jen ve vlastní síti nebo se svolením) |

Hardwarové pomůcky: **tester kabelů** (správné zapojení vodičů), **certifikační měřicí přístroj** (délka, útlum, přeslechy), **reflektometr** (vzdálenost přerušení kabelu), analyzátor Wi-Fi (obsazenost kanálů a síla signálu).

## Otázky k opakování

1. Jaký je rozdíl mezi pasivním a aktivním útokem? ||pasivní jen sleduje komunikaci a ohrožuje důvěrnost (odposlech, analýza provozu); aktivní data mění nebo narušuje službu (maškaráda, MitM, DoS)||
2. Proč lze analýzu provozu provádět i u šifrované komunikace? ||útočník nečte obsah, ale zkoumá, kdo s kým, kdy a kolik komunikuje||
3. Jakými opatřeními se síť chrání? ||fyzické zabezpečení, vypnuté nepoužité porty, port security a 802.1X, VLAN a DMZ, firewall, IDS/IPS, šifrování a VPN, aktualizace||
4. Jak se vyhodnocují pravidla ACL a co je skryté pravidlo na konci? ||shora dolů, použije se první vyhovující; na konci je zakázat vše (implicit deny)||
5. Čím se liší standardní a rozšířený ACL? ||standardní filtruje jen podle zdrojové adresy, rozšířený i podle cíle, protokolu a portu||
6. Co znamenají tři A v AAA? ||autentizace (kdo jsi), autorizace (co smíš), účtování (co jsi dělal)||
7. Jak funguje SNMP? ||správce se dotazuje agentů v zařízeních přes UDP 161, agenti sami posílají trapy na port 162||
8. Popište postup hledání poruchy, když uživatel „nemá Internet“. ||po vrstvách: kabel a link, port a VLAN, IP adresa a brána (ipconfig), ping na bránu a do Internetu, nslookup pro DNS, firewall a služba||
9. Ping na 8.8.8.8 funguje, na www.example.com ne. Kde je chyba? ||v překladu jmen – DNS||
