---
title: "Zabezpečení sítí, aplikací a monitorování"
order: 5
---

## Zabezpečení webových a aplikačních útoků

Webová aplikace je vystavená internetu, proto je častým cílem. **Zásada: nikdy nedůvěřovat vstupu od uživatele** – vše **validovat a ošetřovat na serveru**.

| Útok | Princip | Ochrana |
| --- | --- | --- |
| **XSS** (Cross-Site Scripting) | do stránky se vloží **škodlivý skript** (JavaScript), který se spustí v prohlížeči jiného uživatele – krádež cookies, přesměrování, změna obsahu | **escapování / kódování výstupu**, validace vstupu, hlavička **Content-Security-Policy** |
| **SQL injection** | škodlivý SQL kód ve vstupním poli se vloží přímo do dotazu – obejde přihlášení, čte nebo maže cizí data | **parametrizované dotazy** (prepared statements), ORM, validace, **minimální oprávnění** DB účtu |
| **CSRF** (Cross-Site Request Forgery) | přihlášený uživatel nevědomky odešle požadavek na jinou aplikaci (skrytý formulář); zneužívá se, že prohlížeč sám posílá přihlašovací cookie | **CSRF token** vázaný na relaci, kontrola `Referer`/`Origin`, cookie **SameSite** |

**Druhy XSS:**

- **uložený (stored)** – kód se trvale uloží na serveru (komentář) a spustí se každému návštěvníkovi,
- **odražený (reflected)** – kód je v odkazu a spustí se jen při jeho otevření,
- **slepý (blind)** – uložený XSS, který se spustí až **jinde** (administrace, kde správce čte formuláře, zprávy, logy); útočník výsledek nevidí.

**Testování zranitelností:**

- **penetrační testování** – řízené, autorizované vyzkoušení útoků na vlastní aplikaci (jen **se souhlasem vlastníka**); **automatizované skenery** zranitelností,
- **co kontrolovat:** vstupní formuláře a parametry URL, **HTTP hlavičky**, verze softwaru a knihoven (zastaralé komponenty), řízení přístupu k citlivým funkcím a datům.

**Personalizovaný obsah a doporučovací systémy:**

- sociální sítě, e-shopy, streamování zobrazují obsah vybraný **algoritmem** podle chování uživatele,
- **rozpoznání:** „doporučeno pro vás“, „protože jste sledovali…“, sponzorovaný obsah, rozdíl mezi přihlášeným a anonymním zobrazením,
- **riziko:** **bublina filtrů (filter bubble)** – algoritmus ukazuje jen to, co potvrzuje dosavadní preference → šíření dezinformací a manipulace.

## OWASP Top 10

**OWASP** (Open Worldwide Application Security Project) je nezisková komunita, která vydává seznam **deseti nejzávažnějších rizik webových aplikací**. Verze z roku 2021:

| Pořadí | Riziko | Co to znamená | Obrana |
| --- | --- | --- | --- |
| A01 | **Broken Access Control** – chybné řízení přístupu | uživatel se dostane k cizím datům nebo funkcím (změnou ID v URL, přímým odkazem do administrace) | kontrola oprávnění na serveru u každého požadavku, výchozí zákaz |
| A02 | **Cryptographic Failures** – selhání kryptografie | citlivá data přenášená bez HTTPS, hesla uložená čitelně nebo slabým hashem | HTTPS všude, silné algoritmy, hesla jen jako hash se solí |
| A03 | **Injection** – vsunutí kódu | SQL injection, XSS, vsunutí příkazů systému | parametrizované dotazy, escapování výstupu, validace vstupu |
| A04 | **Insecure Design** – nebezpečný návrh | chyba už v návrhu (např. obnova hesla jen přes kontrolní otázku) | bezpečnost řešit od začátku, modelování hrozeb |
| A05 | **Security Misconfiguration** – chybná konfigurace | výchozí hesla, zapnuté ladicí výpisy, výpis adresářů, zbytečné služby | zabezpečená výchozí nastavení, vypnout nepotřebné |
| A06 | **Vulnerable and Outdated Components** – zranitelné komponenty | zastaralý redakční systém, knihovny a pluginy se známými chybami | aktualizace, sledování zranitelností použitých knihoven |
| A07 | **Identification and Authentication Failures** – chybné ověřování | slabá hesla, neomezený počet pokusů o přihlášení, špatně řešené relace | MFA, omezení pokusů, bezpečné cookies relace |
| A08 | **Software and Data Integrity Failures** – narušení integrity | aktualizace nebo knihovny z neověřeného zdroje, nepodepsaný kód | digitální podpisy, ověřené zdroje |
| A09 | **Security Logging and Monitoring Failures** – chybí logování | útok proběhne bez povšimnutí, není z čeho zjistit, co se stalo | logovat přihlášení a chyby, sledovat je (SIEM) |
| A10 | **Server-Side Request Forgery** (SSRF) | server lze přimět, aby stáhl adresu zadanou útočníkem – i z vnitřní sítě | povolit jen schválené cíle, oddělit vnitřní síť |

Seznam se aktualizuje přibližně po čtyřech letech; aktuální verze je na <https://owasp.org/Top10/>.

## Protokol HTTP

**HTTP** (Hypertext Transfer Protocol) je protokol aplikační vrstvy, kterým prohlížeč (klient) komunikuje s webovým serverem (port 80, šifrovaná verze **HTTPS** port 443). Komunikace probíhá jako **požadavek** (request) a **odpověď** (response); HTTP je **bezstavový** – každý požadavek je samostatný, přihlášení se proto drží pomocí **cookies** a relací (session).

Požadavek obsahuje **metodu**, adresu, **hlavičky** (Host, User-Agent, Cookie…) a případně tělo:

```
GET /index.php?stranka=2 HTTP/1.1
Host: www.example.cz
```

### Metody

| Metoda | Účel |
| --- | --- |
| **GET** | získání dokumentu; parametry jsou v URL (viditelné, uloží se do historie) |
| **POST** | odeslání dat na server v těle požadavku (formuláře, přihlášení, nahrání souboru) |
| **PUT** | nahrání nebo nahrazení dokumentu |
| **PATCH** | částečná změna dokumentu |
| **DELETE** | smazání dokumentu |
| **HEAD** | jako GET, ale vrátí jen hlavičky (zjištění, zda dokument existuje a kdy se změnil) |
| **OPTIONS** | zjištění, jaké metody server pro danou adresu podporuje |

GET a POST z pohledu webového programování viz [dynamické stránky](/it/webove-programovani/01-dynamicke-stranky-a-serverove-skriptovani/#get-vs-post). Ani POST data **nešifruje** – utajení zajistí jen HTTPS.

### Stavové kódy

Odpověď začíná trojmístným **stavovým kódem**; první číslice určuje skupinu:

| Skupina | Význam | Nejčastější kódy |
| --- | --- | --- |
| **1xx** | informační | 101 Switching Protocols (přechod na WebSocket) |
| **2xx** | úspěch | **200 OK**, 201 Created (vytvořeno), 204 No Content |
| **3xx** | přesměrování | **301 Moved Permanently** (trvale), 302 Found (dočasně), 304 Not Modified (použij verzi z mezipaměti) |
| **4xx** | chyba klienta | 400 Bad Request (chybný požadavek), **401 Unauthorized** (chybí přihlášení), **403 Forbidden** (přístup zakázán), **404 Not Found**, 429 Too Many Requests (překročen limit požadavků) |
| **5xx** | chyba serveru | **500 Internal Server Error**, 502 Bad Gateway, **503 Service Unavailable** (přetížení, údržba), 504 Gateway Timeout |

Z pohledu bezpečnosti: velké množství odpovědí **401/403** v logu prozrazuje pokusy o neoprávněný přístup, množství **404** procházení webu automatickým skenerem a náhlý nárůst **503** přetížení serveru (např. DoS). Chybová stránka 500 nesmí uživateli vypisovat podrobnosti o chybě (cesty, SQL dotazy) – to je chybná konfigurace (A05).

## Základní principy síťové komunikace a protokolů

- Síťová komunikace probíhá po vrstvách (referenční model OSI/TCP-IP) – každá vrstva řeší jinou část přenosu dat a spoléhá na služby vrstvy pod sebou
- Významné protokoly z pohledu bezpečnosti:

| Protokol | Role | Zneužití |
| --- | --- | --- |
| **IP** | adresace a směrování paketů | neověřuje odesílatele → **IP spoofing** |
| **TCP** | spolehlivý, spojovaný | – |
| **UDP** | rychlý, nespojovaný, bez záruky | **DDoS** (malá režie, snadné podvržení zdrojové adresy) |
| **DNS** | jména → IP | **DNS spoofing / cache poisoning**, **DNS tunelling** |
| **HTTP / HTTPS** | web; HTTPS = + šifrování a ověření serveru (TLS) | odposlech u HTTP |
| **DHCP** | přidělování adres | **DHCP spoofing** (rogue DHCP server) |
| **ARP** | IP → MAC v LAN | **ARP spoofing** (podvržení MAC, odposlech) |
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

**Monitorování sítě** = průběžné sledování stavu, výkonu a bezpečnosti. Odhalí výpadky, přetížení, incidenty; podklad pro **forenzní analýzu**, plánování kapacit a kontrolu bezpečnostních politik.

- **Zachytávání paketů (packet capture)** – **Wireshark** ukáže hlavičky i obsah. U **HTTP** je vidět i heslo čitelným textem, u **HTTPS** jen zašifrovaný obsah a metadata (adresy, porty, velikost) – proto dnes **HTTPS všude**.
- **Sledování toků (flow)** – **NetFlow / sFlow** zaznamenávají metadata spojení (kdo s kým, kolik dat, jaký protokol) bez ukládání obsahu.
- **Co hledat:** neobvyklý objem provozu (DDoS), komunikace se známými **C2** servery, neautorizovaná zařízení, podezřelé DNS dotazy, opakované neúspěšné přihlášení, **laterální pohyb** útočníka po průniku.

## Pravidla zabezpečení sítě a IPS

- **Pravidla firewallu / IPS** – povolují nebo blokují provoz podle zdrojové a cílové IP, portu, protokolu, času, aplikace, obsahu.
	- **Komplexní pravidlo** kombinuje více podmínek; **pořadí** je důležité (první shoda obvykle rozhoduje).
	- **Default deny** – povolit jen výslovně potřebné, vše ostatní zakázat.
- **IPS** (Intrusion Prevention System) – analyzuje provoz v reálném čase a **aktivně blokuje** (IDS jen detekuje a upozorní). Umístěn **inline** v cestě provozu.
- **IPS signatura** – vzor (řetězec dat, sekvence chování, anomálie) pro rozpoznání konkrétního útoku; databáze se aktualizuje. Přesné, málo falešných poplachů, ale **nezachytí zero-day** → doplňuje se **detekcí anomálií**.

## Chování protokolů a monitorování

- Znalost běžného chování protokolů odhalí útok: mnoho DNS dotazů na neznámé domény (**DNS tunelling**), mnoho neúplných TCP handshaků (**SYN flood**), ARP odpovědi neodpovídající topologii (**ARP spoofing**).
- **Šifrovaný provoz** (HTTPS, VPN) brání obsahové analýze → opírá se o **metadata** a kontrolu na **koncových bodech**.

## Bezpečnostní technologie a monitorování

| Technologie | Přínos |
| --- | --- |
| **Firewall, NGFW** | logy povoleného a blokovaného provozu |
| **IDS / IPS** | bezpečnostní upozornění (alerty) |
| **SIEM** (Security Information and Event Management) | **sbírá, koreluje a vyhodnocuje** logy z mnoha zdrojů, upozorní na anomálie |
| **VPN, šifrování** | určují, co jde analyzovat v čitelné podobě |
| **IAM** | logy přihlášení a změn oprávnění → zneužití účtů |

## Analýza logů a nástroje

- **Log** – časově označený záznam události (přihlášení, chyba, změna konfigurace, spojení).
- **Logy sítě** (firewall, router, switch) – jaký provoz, odkud a kam, která pravidla. **Logy koncových zařízení** (OS, aplikace) – přihlášení, procesy, chyby, instalace; klíčové pro odhalení napadené stanice.
- **Postup:** shromáždit logy → **synchronizovat čas** → hledat **odchylky** → **korelovat** události napříč zařízeními → rekonstruovat průběh incidentu.
- **Nástroje:** Wireshark, **SIEM**, monitorovací systémy výkonu a dostupnosti, analýza logů OS.

## Security Operations Centre (SOC)

**SOC** = tým, procesy a technologie, které **nepřetržitě monitorují, vyhodnocují a řeší** incidenty.

- **Činnosti:** dohled nad událostmi (SIEM), **detekce a klasifikace** incidentů, **reakce** (izolace zařízení, odstranění hrozby, obnova), analýza příčin a nápravná opatření, **threat intelligence** a **threat hunting**.
- **Úrovně analytiků:** **L1** – třídění alertů, **L2** – hlubší analýza a reakce, **L3** – forenzní analýza, threat hunting, ladění pravidel.

## Praktický nácvik – TryHackMe

- **TryHackMe** – platforma s cvičnými úlohami (*rooms*) v **izolovaném prostředí**: skenování sítě, hledání zranitelností, SQL injection, XSS i práce obránce (logy, SIEM, SOC).
- Postup: vysvětlení → řízené kroky s nápovědami (*hints*) → úkol „najdi **flag**“ (řetězec, který dokazuje úspěch).
- Nástroje: **Nmap**, **Wireshark**, **Burp Suite** (zachytávání a úprava HTTP požadavků), **Metasploit** (známé exploity).
- Smysl: pochopit útok „z první ruky“ legálně → zapamatovat si, **proč** existují obrana (validace vstupu, HTTPS, silná hesla, aktualizace).
