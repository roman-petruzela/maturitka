---
title: "Zabezpečení sítí, aplikací a monitorování"
order: 2
tags: ["doplněno"]
---

## Zabezpečení webových a aplikačních útoků

- Webová aplikace bývá vystavena veřejnému internetu, proto je častým cílem útoků; klíčovou zásadou obrany je nikdy nedůvěřovat vstupu od uživatele a veškerá data validovat a ošetřovat na straně serveru
- XSS (Cross-Site Scripting) – útočník vloží do webové stránky škodlivý skript (typicky JavaScript), který se spustí v prohlížeči jiného uživatele; umožňuje krádež přihlašovacích souborů cookie, přesměrování nebo modifikaci zobrazeného obsahu
	- Uložený (stored) XSS – škodlivý kód se trvale uloží na serveru (např. v komentáři) a spouští se každému, kdo si stránku zobrazí
	- Odražený (reflected) XSS – kód je součástí odkazu a spustí se jen při jeho otevření
	- Ochrana – důsledné escapování/kódování výstupu, validace vstupu, hlavička Content-Security-Policy
- SQL injection – vložení škodlivého SQL kódu do vstupního pole, které aplikace nesprávně zabuduje přímo do databázového dotazu; umožňuje obejít přihlášení, číst nebo mazat cizí data
	- Ochrana – parametrizované dotazy (prepared statements), ORM vrstvy, validace vstupu, princip minimálních oprávnění databázového účtu
- CSRF (Cross-Site Request Forgery) – útočník donutí přihlášeného uživatele, aby nevědomky odeslal požadavek na jinou aplikaci, kde je přihlášen (např. skrytý formulář na podvodné stránce); zneužívá se toho, že prohlížeč automaticky posílá uložené přihlašovací cookie
	- Ochrana – CSRF token vázaný na relaci, kontrola hlavičky Referer/Origin, atribut cookie SameSite
- Simulace útoků a testování – penetrační testování (řízené, autorizované vyzkoušení útoků na vlastní aplikaci) a automatizované skenery zranitelností pomáhají odhalit slabiny dříve, než je zneužije útočník; testuje se vždy jen se souhlasem vlastníka systému
- Identifikace zranitelností webové aplikace – kontrola vstupních formulářů a parametrů URL, kontrola nastavení HTTP hlaviček, kontrola verzí použitého softwaru a knihoven (zastaralé komponenty), kontrola řízení přístupu k citlivým funkcím a datům
- Personalizovaný obsah a doporučovací systémy – řada webů (sociální sítě, e-shopy, streamovací služby) zobrazuje obsah vybraný algoritmem na základě chování uživatele (historie prohlížení, nákupy, interakce)
	- Rozpoznávací znaky algoritmicky doporučeného obsahu – označení typu „doporučeno pro vás“, „protože jste sledovali...“, sponzorovaný/placený obsah, odlišnost obsahu při přihlášení oproti anonymnímu zobrazení
	- Riziko – tzv. bublina filtrů (filter bubble), kdy algoritmus uživateli ukazuje jen obsah potvrzující jeho dosavadní preference, což souvisí i s šířením dezinformací a manipulativního obsahu

## Základní principy síťové komunikace a protokolů

- Síťová komunikace probíhá po vrstvách (referenční model OSI/TCP-IP) – každá vrstva řeší jinou část přenosu dat a spoléhá na služby vrstvy pod sebou
- Význam vybraných protokolů z pohledu bezpečnosti
	- IP – adresace a směrování paketů sítí; sám o sobě neověřuje pravost odesílatele (zneužíváno u IP spoofingu)
	- TCP – spolehlivý, spojovaný přenos s potvrzováním doručení; UDP – rychlý, nespojovaný přenos bez záruky doručení, často zneužívaný pro DDoS (menší režie, snadné podvržení zdrojové adresy)
	- DNS – překlad doménových jmen na IP adresy; cíl útoků jako DNS spoofing/cache poisoning a DNS tunelling
	- HTTP/HTTPS – přenos webového obsahu; HTTPS přidává šifrování a ověření serveru pomocí TLS certifikátu
	- DHCP – automatické přidělování síťových adres; zneužitelné útokem typu DHCP spoofing/rogue DHCP server
	- ARP – překlad IP adres na MAC adresy v lokální síti; cíl ARP spoofingu (podvržení MAC adresy za účelem odposlechu provozu)
- Nástroje pro ověření síťové konektivity
	- ping – ověřuje dostupnost cílového zařízení a měří dobu odezvy (round-trip time) pomocí ICMP zpráv
	- traceroute (tracert) – zobrazuje cestu (jednotlivé směrovače/uzly), kterou pakety procházejí k cíli, a dobu odezvy na každém uzlu; pomáhá lokalizovat místo výpadku nebo zpoždění v síti
	- nmap (network mapper) – skener sítě, který zjišťuje, jaká zařízení jsou v síti dostupná a jaké porty/služby na nich běží; používá se jak při obraně (audit vlastní sítě), tak při penetračním testování

```
$ nmap -sV 192.168.1.10

Starting Nmap
Nmap scan report for 192.168.1.10
Host is up (0.0023s latency).

PORT     STATE  SERVICE  VERSION
22/tcp   open   ssh      OpenSSH 8.9
80/tcp   open   http     Apache httpd 2.4.52
443/tcp  open   https    Apache httpd 2.4.52 (TLS)

Nmap done: 1 IP address (1 host up) scanned
```
- `-sV` řekne nmapu, aby kromě otevřených portů zjistil i verzi běžící služby; z výpisu je vidět, že stroj běží SSH (vzdálená správa), webserver Apache na HTTP i HTTPS – obránce podle toho pozná, jestli neběží zbytečná/zastaralá služba, útočník totéž použije k hledání slabého místa (např. staré verze Apache se známou zranitelností)

## Síťové prvky z pohledu provozu a bezpečnosti

- Switch (přepínač) – propojuje zařízení v lokální síti na základě MAC adres; z bezpečnostního pohledu umožňuje segmentaci provozu pomocí VLAN a ochranu portů (port security)
- Router (směrovač) – směruje provoz mezi různými sítěmi na základě IP adres; často integruje základní filtrování provozu (přístupové seznamy, ACL)
- Firewall – řídí a filtruje síťový provoz mezi sítěmi nebo segmenty podle definovaných pravidel (zdrojová/cílová adresa, port, protokol); může pracovat na úrovni paketů, stavů spojení (stateful) nebo až na aplikační úrovni (next-generation firewall)
- Access point (přístupový bod) – umožňuje bezdrátové připojení do sítě; vyžaduje zabezpečení šifrováním (WPA2/WPA3) a silným heslem, jinak je snadným vstupním bodem útočníka
- Proxy server – zprostředkovává komunikaci mezi klientem a cílovým serverem, může filtrovat obsah, skrývat vnitřní adresaci sítě a zajišťovat cache
- IDS/IPS zařízení – specializované prvky pro detekci a blokování škodlivého provozu (podrobněji dále)

## Analýza síťového provozu a monitorování sítě

- Monitorování sítě – průběžné sledování stavu, výkonu a bezpečnosti síťové infrastruktury; umožňuje včas odhalit výpadky, přetížení i bezpečnostní incidenty
- Význam monitorování – rychlejší odhalení anomálií a útoků, podklad pro vyšetřování incidentů (forenzní analýza), kapacitní plánování, ověření dodržování bezpečnostních politik
- Analýza síťového provozu – sledování a vyhodnocování paketů a spojení procházejících sítí; lze provádět v reálném čase nebo zpětně nad zachycenými daty
	- Zachytávání provozu (packet capture) – nástroje typu Wireshark zaznamenávají a umožňují prohlížet obsah a hlavičky paketů; u nešifrovaného HTTP provozu lze ve Wiresharku doslova přečíst přenášená data (odeslaný formulář, přihlašovací jméno a heslo v čitelném textu), zatímco u HTTPS je vidět jen zašifrovaný obsah a metadata spojení (adresy, porty, velikost) – přesně tenhle rozdíl je hlavní praktický důvod, proč se dnes na webu vyžaduje HTTPS všude
	- Sledování toků (flow) – protokoly jako NetFlow/sFlow zaznamenávají metadata o spojeních (kdo s kým, kolik dat, jaký protokol) bez nutnosti ukládat celý obsah
- Identifikace hrozeb v síťové infrastruktuře – neobvyklý objem provozu (možný DDoS), komunikace se známě škodlivými adresami (C2 servery), neautorizovaná zařízení v síti, podezřelé DNS dotazy, opakované neúspěšné pokusy o přihlášení, laterální pohyb útočníka mezi stanicemi po počátečním průniku

## Pravidla zabezpečení sítě a IPS

- Pravidla pro zabezpečení sítě (firewall/IPS pravidla) – definují, jaký provoz je povolen nebo blokován, na základě kombinace kritérií (zdrojová/cílová IP adresa, port, protokol, čas, aplikace, obsah paketu)
	- Komplexní pravidlo kombinuje více podmínek najednou (např. povolit HTTPS provoz jen z určitého rozsahu adres v definovaném čase) a je řazeno v pořadí, ve kterém se vyhodnocuje (první shoda obvykle rozhoduje)
	- Zásada výchozího zamítnutí (default deny) – povolit jen to, co je výslovně potřeba, vše ostatní zakázat
- IPS (Intrusion Prevention System) – bezpečnostní technologie, která v reálném čase analyzuje síťový provoz, detekuje škodlivou aktivitu a aktivně ji blokuje (na rozdíl od IDS, který jen detekuje a upozorňuje, ale provoz sám neblokuje)
	- Umístění – typicky přímo v cestě provozu (inline), aby mohl útok zastavit dřív, než dosáhne cíle
	- IPS signatura – vzor (charakteristický řetězec dat, sekvence chování nebo anomálie), podle kterého IPS rozpoznává konkrétní typ škodlivého provozu nebo útoku; databáze signatur se průběžně aktualizuje o nově objevené hrozby
	- Význam signatur pro detekci – umožňují rychlé a přesné rozpoznání známých útoků (např. konkrétní exploit nebo malware) s nízkým počtem falešných poplachů; nevýhodou je, že proti zcela novým, dosud nepopsaným útokům (tzv. zero-day) signatury samy o sobě nefungují, proto se doplňují o detekci na základě anomálií chování

## Chování protokolů ve vztahu k monitorování zabezpečení

- Znalost očekávaného chování protokolů umožňuje odhalit odchylky svědčící o útoku – např. neobvykle vysoký počet DNS dotazů na neznámé domény (možný DNS tunelling), časté neúplné TCP spojení bez dokončeného handshake (možný SYN flood v rámci DoS), ARP odpovědi neodpovídající známé topologii sítě (možný ARP spoofing)
- Šifrovaný provoz (HTTPS, VPN) komplikuje přímou obsahovou analýzu – monitorování se pak více opírá o metadata (velikost, frekvence, cílové adresy spojení) a o kontrolu na koncových bodech, kde je provoz ještě dešifrovaný

## Bezpečnostní technologie ovlivňující monitorování

- Firewall a next-generation firewall – poskytují logy o povoleném/blokovaném provozu jako základní vstup pro monitorování
- IDS/IPS – generují bezpečnostní upozornění (alerty) při detekci podezřelého provozu
- SIEM (Security Information and Event Management) – centralizovaný systém, který sbírá, koreluje a vyhodnocuje log záznamy z různých zdrojů (servery, sítě, aplikace) a upozorňuje na bezpečnostně významné vzory či anomálie
- VPN a šifrování – ovlivňují, jaká data lze na síti vůbec analyzovat v čitelné podobě
- Systémy pro správu identit a řízení přístupu (IAM) – jejich logy (přihlášení, změny oprávnění) jsou důležitým zdrojem pro detekci zneužití účtů

## Analýza logů a nástroje pro monitoring

- Log (protokolový záznam) – časově označený záznam o události v systému nebo síťovém zařízení (přihlášení, chyba, změna konfigurace, síťové spojení)
- Analýza logů síťových zařízení – logy z firewallu, routerů a přepínačů ukazují, jaký provoz procházel sítí, odkud a kam, jaká pravidla byla uplatněna
- Analýza logů koncových zařízení – logy operačního systému a aplikací ukazují přihlášení uživatelů, spouštěné procesy, chyby, instalace softwaru; klíčové pro odhalení kompromitace konkrétní stanice
- Postup analýzy – shromáždění logů z relevantních zdrojů, jejich časová synchronizace, hledání odchylek od běžného stavu (anomálií), korelace událostí napříč zařízeními pro rekonstrukci průběhu incidentu
- Nástroje pro monitoring a analýzu – nástroje pro zachytávání a rozbor síťového provozu (např. Wireshark), centralizované sběrné a korelační systémy typu SIEM, nástroje pro sledování výkonu a dostupnosti (network monitoring systémy), nástroje pro analýzu logů operačního systému

## Security Operations Centre (SOC)

- SOC (Security Operations Centre) – specializované pracoviště (tým lidí, procesy a technologie), které nepřetržitě monitoruje, vyhodnocuje a řeší bezpečnostní incidenty v organizaci
- Hlavní činnosti SOC
	- Nepřetržitý dohled nad bezpečnostními událostmi (typicky pomocí SIEM a dalších monitorovacích nástrojů)
	- Detekce a klasifikace incidentů podle závažnosti
	- Reakce na incidenty (incident response) – izolace napadeného zařízení, odstranění hrozby, obnova provozu
	- Analýza příčin incidentu a doporučení nápravných opatření, aby se předešlo opakování
	- Sledování aktuálních hrozeb a zranitelností (threat intelligence) a proaktivní vyhledávání hrozeb v síti (threat hunting)
- Typické úrovně analytiků v SOC – analytik první úrovně (základní třídění a vyhodnocení alertů), druhé úrovně (hlubší analýza a reakce na incidenty), třetí úrovně/specialisté (forenzní analýza, threat hunting, ladění detekčních pravidel)

## Praktický nácvik – TryHackMe

- TryHackMe – webová platforma s cvičnými úlohami ("pokojíčky", rooms), ve kterých se dá bezpečně (v izolovaném cvičném prostředí, ne na reálném cizím systému) vyzkoušet vše, co tahle a předchozí kapitola popisují – skenování sítě, hledání zranitelností, útoky jako SQL injection nebo XSS, i práci obránce (analýza logů, SIEM, SOC scénáře)
- Typický postup v pokojíčku – krátké vysvětlení tématu, pak řízené kroky s postupnými nápovědami (hints), na konci úkol typu "najdi vlajku" (flag – řetězec znaků skrytý v systému, který dokazuje, že se útok/postup povedl), který se zadává jako odpověď
- Nástroje, se kterými se na TryHackMe běžně pracuje – terminál s Nmapem a dalšími síťovými nástroji, Wireshark pro rozbor zachyceného provozu, Burp Suite pro testování webových aplikací (zachytávání a úprava HTTP požadavků mezi prohlížečem a serverem), Metasploit pro vyzkoušení již známých exploitů na základní úrovni
- Smysl cvičení – pochopit útok "z první ruky" ve zcela legálním a bezpečném prostředí je nejrychlejší způsob, jak si zapamatovat, proč konkrétní obranné opatření (validace vstupu, HTTPS, silná hesla, aktualizace) v praxi vůbec existuje; stejným způsobem se běžně zaškolují i junior penetrační testeři
