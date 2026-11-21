---
title: "DNS – systém doménových jmen"
order: 17
source: "IT/Datové-sítě.docx; IT/13. Internet.docx"
---

**DNS** (Domain Name System) = celosvětová distribuovaná databáze, která převádí **jména na IP adresy** (`www.example.com` → IPv4/IPv6) a naopak. Od **1984**, nahradila soubor `hosts` se seznamem všech počítačů. Mezi ostatními protokoly: [protokoly TCP/IP](/it/pocitacove-site/03-protokoly-tcp-ip/).

## Doménové jméno a hierarchie domén

Jmenný prostor je **strom**: **kořen** (tečka na konci) → TLD → 2. úroveň → … Jméno se čte **zprava doleva** (od obecného ke konkrétnímu).

```
www.skola.example.cz.
 |    |      |     |  └ kořen
 |    |      |     └ doména 1. úrovně (TLD) – cz
 |    |      └ doména 2. úrovně – example
 |    └ doména 3. úrovně – skola
 └ jméno počítače (služby) – www
```

- **TLD**: **národní** (ccTLD – `.cz`, `.sk`, `.de`) a **generické** (gTLD – `.com`, `.org`, `.net`, `.edu`, `.gov`, nové `.app`…). `.arpa` = reverzní překlad.
- **2. úroveň** – organizace/služba (`seznam.cz`); registruje se u registrátora za roční poplatek.
- **3. a nižší** – vytváří si držitel sám (`mail.firma.cz`).
- **FQDN** – úplné jméno až ke kořeni (`www.example.cz.`); max. 253 znaků, část max. 63.

### Kdo domény spravuje

- **IANA/ICANN** – **kořenová zóna**, přidělování TLD.
- **Registr** TLD – `.cz` spravuje **CZ.NIC**; prodávají **registrátoři**.
- **Kořenové servery** – 13 logických (A–M), fyzicky stovky strojů (anycast).

## Jmenné servery a zóny

**Port 53** – dotazy **UDP**, dlouhé odpovědi a přenosy zón **TCP**.

- **Zóna** = část prostoru pod jednou správou (např. `example.cz`); nižší domény lze delegovat.
- **Autoritativní** servery mají platná data o doméně. **Primární** (tam se edituje) + **sekundární** (kopírují zónu, záloha).
- **Rekurzivní (rezolvující)** servery – u ISP, v routeru, veřejné (1.1.1.1, 8.8.8.8, 9.9.9.9); vyřizují dotazy klientů a mají **cache**.

## Jak probíhá překlad jména

- **Rekurzivní dotaz** – „dej mi hotovou odpověď“ (klient → rezolver); server vše zjistí sám a uloží do cache.
- **Iterativní dotaz** – server odpoví, co ví, nebo odkáže dál (rezolver → kořen, TLD, autoritativní).

**Příklad – zjištění adresy `www.example.cz`:**

![Překlad jména DNS: klient pošle rekurzivní dotaz rezolveru, ten se iterativně ptá kořenového serveru, serveru .cz a autoritativního serveru example.cz a výsledek vrátí klientovi](/images/content/it/pocitacove-site/dns/preklad.webp)

1. Prohlížeč zkusí cache OS a `hosts`; pak **rekurzivní** dotaz na rezolver.
2. Rezolver (bez cache) se zeptá **kořene** → odkaz na servery `.cz`.
3. **Server `.cz`** → odkaz na autoritativní servery `example.cz`.
4. **Autoritativní server** vrátí záznam A/AAAA.
5. Rezolver odpoví klientovi a uloží výsledek do cache na **TTL**.

Bez cachování by dotazy byly pomalé a kořenové servery přetížené.

## Záznamy DNS

**Zdrojový záznam** (resource record) = **NAME**, **TYPE**, **CLASS** (prakticky vždy IN), **TTL** (doba v cache) a **data**.

| Typ | Význam | Příklad |
| --- | --- | --- |
| **A** | IPv4 adresa | `www.example.cz. A 192.0.2.10` |
| **AAAA** | IPv6 adresa | `www.example.cz. AAAA 2001:db8::10` |
| **CNAME** | alias (přezdívka) | `web.example.cz. CNAME www.example.cz.` |
| **MX** | poštovní server + priorita (nižší = důležitější) | `example.cz. MX 10 mail.example.cz.` |
| **NS** | autoritativní jmenný server | `example.cz. NS ns1.example.cz.` |
| **PTR** | reverzní: IP → jméno | `10.2.0.192.in-addr.arpa. PTR www.example.cz.` |
| **SOA** | údaje o zóně, právě jeden | viz níže |
| **TXT** | text; ověření domény a pošty (SPF, DKIM, DMARC) | `example.cz. TXT "v=spf1 mx -all"` |

**SOA** (Start of Authority) – primární server a správce zóny, dále:

- **sériové číslo** – verze zóny; zvýšení = signál pro sekundární servery,
- **REFRESH** – jak často sekundární ověřuje změny,
- **RETRY** – za jak dlouho zkusit znovu při neúspěchu,
- **EXPIRE** – po této době bez primárního přestane sekundární odpovídat,
- **TTL** (minimum) – jak dlouho smějí jiné servery držet záznamy v cache.

### Reverzní překlad

IP → jméno přes `in-addr.arpa` (IPv6 `ip6.arpa`), adresa **pozpátku**: 192.0.2.10 → `10.2.0.192.in-addr.arpa` (PTR). Využití: kontrola poštovních serverů proti spamu.

## Nástroje

- **nslookup** – Windows i Linux: `nslookup www.example.cz`, `nslookup -type=MX example.cz`.
- **dig**, **host** – Linux: `dig www.example.cz AAAA`, `dig +trace` = celá cesta od kořene.
- **ipconfig /displaydns**, **/flushdns** – výpis a smazání DNS cache ve Windows.

## Bezpečnost DNS

- **DNS spoofing / cache poisoning** – podvržená odpověď přesměruje na falešný server.
- **DNSSEC** – digitálně podepsané záznamy, rezolver ověří pravost. `.cz` patří k nejlépe zabezpečeným.
- Šifrování dotazů: **DoH** (přes HTTPS), **DoT** (přes TLS).

## Otázky k opakování

1. K čemu slouží DNS a na kterém portu a protokolu běží? ||převádí doménová jména na IP adresy a naopak; port 53, UDP (dotazy) i TCP (přenos zón, dlouhé odpovědi)||
2. Popište hierarchii domén na jménu `mail.firma.cz`. ||kořen → TLD `cz` → doména 2. úrovně `firma` → doména 3. úrovně (služba) `mail`||
3. Jaký je rozdíl mezi rekurzivním a iterativním dotazem? ||u rekurzivního server zjistí kompletní odpověď sám; u iterativního jen odpoví, co ví, nebo odkáže na další server||
4. Popište, jak rezolver zjistí adresu jména, které nemá v cache. ||zeptá se kořenového serveru, ten odkáže na server TLD, ten na autoritativní server domény, který vrátí záznam A/AAAA; výsledek se uloží do cache na dobu TTL||
5. Co je autoritativní server a proč jich má doména více? ||server, který má platná data o doméně; primární a sekundární kvůli dostupnosti||
6. K čemu jsou záznamy A, AAAA, MX, CNAME a PTR? ||IPv4 adresa, IPv6 adresa, poštovní server, alias, reverzní překlad adresy na jméno||
7. Co určuje TTL záznamu? ||jak dlouho smí být záznam uložen v cache jiných serverů||
8. Kdo spravuje doménu `.cz` a kořenovou zónu? ||CZ.NIC; IANA/ICANN||
9. Jakým příkazem zjistíte poštovní servery domény? ||`nslookup -type=MX domena.cz` nebo `dig domena.cz MX`||
