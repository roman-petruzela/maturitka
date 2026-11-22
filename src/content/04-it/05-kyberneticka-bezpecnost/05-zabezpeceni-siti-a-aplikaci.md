---
title: "Zabezpečení sítí, aplikací a monitorování"
order: 5
---

## Zabezpečení webových a aplikačních útoků

Webová aplikace je vystavená internetu, proto je častým cílem. **Zásada: nikdy nedůvěřovat vstupu od uživatele** – vše **validovat a ošetřovat na serveru**.

| Útok | Princip | Ochrana |
| --- | --- | --- |
| **XSS** (Cross-Site Scripting) | do stránky se vloží **škodlivý skript** (JavaScript), který se spustí v prohlížeči jiného uživatele – krádež cookies, přesměrování, změna obsahu | **escapování výstupu**, validace vstupu, hlavička **Content-Security-Policy** |
| **SQL injection** | škodlivý SQL kód ve vstupu se vloží přímo do dotazu – obejde přihlášení, čte nebo maže data | **parametrizované dotazy**, validace, **minimální oprávnění** DB účtu |
| **CSRF** (Cross-Site Request Forgery) | přihlášený uživatel nevědomky odešle požadavek na jinou aplikaci; zneužívá se, že prohlížeč sám posílá přihlašovací cookie | **CSRF token** vázaný na relaci, cookie **SameSite** |

**Druhy XSS:**

- **uložený (stored)** – kód se trvale uloží na serveru (komentář) a spustí se každému návštěvníkovi,
- **odražený (reflected)** – kód je v odkazu a spustí se jen při jeho otevření,
- **slepý (blind)** – uložený XSS, který se spustí až **jinde** (administrace, kde správce čte zprávy a logy); útočník výsledek nevidí.

Zranitelnosti se hledají **penetračním testováním** (autorizované vyzkoušení útoků, jen se **souhlasem vlastníka**) a automatickými skenery; kontroluje se vstup z formulářů a URL, HTTP hlavičky, verze knihoven a řízení přístupu. Praktická ukázka SQL injection: [útoky](/it/kyberneticka-bezpecnost/02-kyberneticke-utoky/#praktická-ukázka-sql-injection-na-přihlašovacím-formuláři).

## OWASP Top 10

**OWASP** (Open Worldwide Application Security Project) je nezisková komunita, která vydává seznam **deseti nejzávažnějších rizik webových aplikací** (verze 2021):

| | Riziko | Co to znamená |
| --- | --- | --- |
| A01 | **Broken Access Control** – chybné řízení přístupu | uživatel se dostane k cizím datům nebo funkcím (změnou ID v URL) |
| A02 | **Cryptographic Failures** – selhání kryptografie | data bez HTTPS, hesla uložená čitelně nebo slabým hashem |
| A03 | **Injection** – vsunutí kódu | SQL injection, XSS, vsunutí příkazů |
| A04 | **Insecure Design** – nebezpečný návrh | chyba už v návrhu, bezpečnost se neřešila od začátku |
| A05 | **Security Misconfiguration** – chybná konfigurace | výchozí hesla, ladicí výpisy, zbytečné služby |
| A06 | **Vulnerable and Outdated Components** – zranitelné komponenty | zastaralé knihovny a pluginy se známými chybami |
| A07 | **Identification and Authentication Failures** – chybné ověřování | slabá hesla, neomezené pokusy o přihlášení, špatné relace |
| A08 | **Software and Data Integrity Failures** – narušení integrity | aktualizace z neověřeného zdroje, nepodepsaný kód |
| A09 | **Security Logging and Monitoring Failures** – chybí logování | útok proběhne bez povšimnutí |
| A10 | **Server-Side Request Forgery** (SSRF) | server lze přimět stáhnout adresu zadanou útočníkem, i z vnitřní sítě |

Společné obrany: kontrola oprávnění na serveru, HTTPS, parametrizované dotazy, aktualizace, MFA, logování.

## Protokol HTTP

**HTTP** je protokol aplikační vrstvy, kterým prohlížeč (klient) komunikuje s webovým serverem (port 80, šifrovaná verze **HTTPS** port 443). Komunikace je **požadavek → odpověď**. HTTP je **bezstavový**, přihlášení se proto drží pomocí **cookies** a relací (session).

Požadavek obsahuje **metodu**, adresu, **hlavičky** (Host, Cookie…) a případně tělo.

### Metody

| Metoda | Účel |
| --- | --- |
| **GET** | získání dokumentu; parametry jsou v URL (viditelné, uloží se do historie) |
| **POST** | odeslání dat v těle požadavku (formuláře, přihlášení, soubor) |
| **PUT** | nahrání nebo nahrazení dokumentu |
| **PATCH** | částečná změna dokumentu |
| **DELETE** | smazání dokumentu |
| **HEAD** | jako GET, ale vrátí jen hlavičky |
| **OPTIONS** | zjištění, jaké metody server podporuje |

Ani POST data **nešifruje** – utajení zajistí jen HTTPS. GET a POST z pohledu programování: [dynamické stránky](/it/webove-programovani/01-dynamicke-stranky-a-serverove-skriptovani/#get-vs-post).

### Stavové kódy

První číslice určuje skupinu:

| Skupina | Význam | Nejčastější kódy |
| --- | --- | --- |
| **1xx** | informační | 101 Switching Protocols |
| **2xx** | úspěch | **200 OK**, 201 Created, 204 No Content |
| **3xx** | přesměrování | **301** trvale, **302** dočasně, 304 Not Modified |
| **4xx** | chyba klienta | 400 Bad Request, **401 Unauthorized** (chybí přihlášení), **403 Forbidden** (zakázáno), **404 Not Found** |
| **5xx** | chyba serveru | **500 Internal Server Error**, 502 Bad Gateway, **503 Service Unavailable** |

V logu prozrazují hodně 401/403 pokusy o neoprávněný přístup, hodně 404 skener procházející web, nárůst 503 přetížení (DoS). Chybová stránka 500 nesmí vypisovat podrobnosti o chybě (A05).

## Bezpečnost sítě a protokolů

Útočník zneužívá slabiny protokolů, které vznikly bez ohledu na bezpečnost:

| Protokol | Zneužití |
| --- | --- |
| **IP** | neověřuje odesílatele → **IP spoofing** |
| **UDP** | malá režie, snadné podvržení zdroje → **DDoS** |
| **TCP** | zahlcení neúplnými spojeními → **SYN flood** |
| **DNS** | **DNS spoofing / cache poisoning**, [DNS tunneling](/it/pocitacove-site/17-dns-system-domenovych-jmen/#dns-tunneling) |
| **DHCP** | falešný DHCP server (**rogue DHCP**) |
| **ARP** | **ARP spoofing** – podvržení MAC, odposlech |
| **HTTP** | odposlech nešifrovaného provozu (heslo čitelně) |

**Ochranné prvky sítě:**

- **Firewall** filtruje provoz podle adres, portů a protokolů; zásada **default deny** (povolí se jen nutné). Může být paketový, stavový (stateful) nebo aplikační (NGFW).
- **IDS** útok jen **hlásí**, **IPS** stojí v cestě provozu a útok **blokuje** (podle **signatur** známých útoků; zero-day nezachytí, proto se doplňuje detekcí anomálií).
- **Switch** – VLAN a port security, **router** – ACL, **access point** – WPA2/WPA3, **proxy** – filtrování a skrytí vnitřní sítě.
- **VPN** šifruje provoz mezi sítěmi nebo klientem a sítí.

## Monitorování a SOC

**Monitorování** = průběžné sledování stavu a bezpečnosti sítě; podklad pro odhalení incidentu a jeho rozbor.

- **Zachytávání paketů** (**Wireshark**): u HTTP je vidět i heslo, u HTTPS jen zašifrovaný obsah a metadata – proto HTTPS všude. **nmap** zjistí otevřené porty a služby (obrana i útok), `ping` a `traceroute` dostupnost a cestu.
- **Log** = časově označený záznam události. Postup analýzy: sesbírat logy → sladit čas → hledat odchylky → **korelovat** události → rekonstruovat incident.
- **SIEM** sbírá a koreluje logy z mnoha zdrojů a upozorní na anomálie.
- **SOC** (Security Operations Centre) = tým, který bezpečnost **nepřetržitě hlídá**: sleduje události, rozpozná a vyřeší incident (izolace zařízení, odstranění hrozby, obnova).
- Podezřelé jsou: neobvyklý objem provozu, spojení se známými **C2** servery, mnoho neúspěšných přihlášení, podezřelé DNS dotazy.

## Otázky k opakování

1. Co je XSS a jaké má druhy? ||vložení škodlivého skriptu do stránky, který se spustí u jiného uživatele; uložený (stored), odražený (reflected), slepý (blind)||
2. Jak funguje SQL injection a jak se brání? ||vstup se vloží přímo do SQL dotazu a změní jeho význam; parametrizované dotazy, validace, minimální práva DB účtu||
3. Co je CSRF a jak se mu brání? ||přihlášený uživatel nevědomky odešle požadavek (prohlížeč sám přidá cookie); CSRF token, SameSite cookie||
4. Co je OWASP Top 10? Jmenujte tři rizika. ||seznam deseti nejzávažnějších rizik webových aplikací; např. Broken Access Control, Cryptographic Failures, Injection||
5. Čím se liší GET a POST? ||GET má parametry v URL, jen čte; POST posílá data v těle (formuláře); šifrování zajistí jen HTTPS||
6. Co znamenají stavové kódy 200, 301, 403, 404 a 500? ||úspěch, trvalé přesměrování, přístup zakázán, nenalezeno, chyba serveru||
7. Proč je HTTP bezstavový a jak se drží přihlášení? ||každý požadavek je samostatný; přihlášení drží cookies a relace||
8. Jaký je rozdíl mezi IDS a IPS? ||IDS útok jen hlásí, IPS je v cestě provozu a útok blokuje||
9. Co dělá firewall a co znamená default deny? ||filtruje provoz podle pravidel; povolí se jen výslovně potřebné, vše ostatní se zakáže||
10. Co je SIEM a SOC? ||SIEM sbírá a koreluje logy, SOC je tým, který bezpečnost nepřetržitě hlídá a řeší incidenty||
