---
title: "DNS – systém doménových jmen"
order: 17
source: "IT/Datové-sítě.docx; IT/13. Internet.docx"
---

**DNS** (Domain Name System) = celosvětová distribuovaná databáze, která převádí **jména na IP adresy** (`www.example.com` → IPv4/IPv6) a naopak. Nahradila soubor `hosts`. Běží na **portu 53** (dotazy **UDP**, přenosy zón **TCP**). Mezi ostatními protokoly: [protokoly TCP/IP](/it/pocitacove-site/03-protokoly-tcp-ip/).

## Doménové jméno a hierarchie domén

Jmenný prostor je **strom**: **kořen** (tečka na konci) → TLD → 2. úroveň → … Jméno se čte **zprava doleva**.

```
www.skola.example.cz.
 |    |      |     |  └ kořen
 |    |      |     └ doména 1. úrovně (TLD) – cz
 |    |      └ doména 2. úrovně – example
 |    └ doména 3. úrovně – skola
 └ jméno počítače (služby) – www
```

- **TLD**: **národní** (`.cz`, `.sk`) a **generické** (`.com`, `.org`, `.net`).
- **2. úroveň** se registruje u registrátora za roční poplatek, **3. a nižší** si vytváří držitel sám.
- **FQDN** – úplné jméno až ke kořeni (`www.example.cz.`).
- **Správa:** **IANA/ICANN** spravují kořenovou zónu a TLD, `.cz` spravuje **CZ.NIC**. **Kořenových serverů** je 13 logických (A–M).

## Jmenné servery a zóny

- **Zóna** = část prostoru pod jednou správou (`example.cz`).
- **Autoritativní** servery mají platná data o doméně: **primární** (tam se edituje) + **sekundární** (kopie, záloha).
- **Rekurzivní (rezolvující)** servery (u ISP, v routeru, veřejné 1.1.1.1, 8.8.8.8) vyřizují dotazy klientů a mají **cache**.

## Jak probíhá překlad jména

- **Rekurzivní dotaz** – klient chce hotovou odpověď, server vše zjistí sám.
- **Iterativní dotaz** – server odpoví, co ví, nebo odkáže dál.

![Překlad jména DNS: klient pošle rekurzivní dotaz rezolveru, ten se iterativně ptá kořenového serveru, serveru .cz a autoritativního serveru example.cz a výsledek vrátí klientovi](/images/content/it/pocitacove-site/dns/preklad.webp)

1. Prohlížeč zkusí cache OS a `hosts`, pak pošle **rekurzivní** dotaz rezolveru.
2. Rezolver se zeptá **kořene** → odkaz na servery `.cz`.
3. **Server `.cz`** → odkaz na autoritativní servery `example.cz`.
4. **Autoritativní server** vrátí záznam A/AAAA.
5. Rezolver odpoví klientovi a uloží výsledek do cache na dobu **TTL**.

## Záznamy DNS

Záznam = **jméno**, **typ**, **TTL** (doba v cache) a **data**.

| Typ | Význam | Příklad |
| --- | --- | --- |
| **A** | IPv4 adresa | `www.example.cz. A 192.0.2.10` |
| **AAAA** | IPv6 adresa | `www.example.cz. AAAA 2001:db8::10` |
| **CNAME** | alias | `web.example.cz. CNAME www.example.cz.` |
| **MX** | poštovní server + priorita | `example.cz. MX 10 mail.example.cz.` |
| **NS** | autoritativní jmenný server | `example.cz. NS ns1.example.cz.` |
| **PTR** | reverzní: IP → jméno | `10.2.0.192.in-addr.arpa. PTR www.example.cz.` |
| **TXT** | text; ověření pošty (SPF, DKIM) | `example.cz. TXT "v=spf1 mx -all"` |

**Reverzní překlad** (IP → jméno) jde přes `in-addr.arpa` s adresou **pozpátku**; využívá se např. ke kontrole poštovních serverů.

**Nástroje:** `nslookup www.example.cz`, `nslookup -type=MX example.cz`, `dig`, `ipconfig /flushdns` (smazání DNS cache).

## Bezpečnost DNS

- **DNS spoofing / cache poisoning** – podvržená odpověď přesměruje na falešný server.
- **DNSSEC** – digitálně podepsané záznamy, rezolver ověří pravost.
- Šifrování dotazů: **DoH** (přes HTTPS), **DoT** (přes TLS).

### DNS tunneling

**DNS tunneling** je **skrytý přenos dat v DNS dotazech a odpovědích**. DNS se obvykle propouští firewallem a málo kontroluje, proto se hodí k **úniku dat** i k **řízení malwaru (C2)**.

1. Útočník vlastní doménu `utok.example` a její **autoritativní** DNS server.
2. Malware zakóduje data (např. Base64) do **jména**: dotaz na `dGFqbmUtZGF0YQ.utok.example`.
3. Dotaz projde **rekurzivním resolverem** až k serveru útočníka, který data z jména přečte.
4. Odpověď (záznam `TXT`, `CNAME`) nese **zpět příkazy** pro malware.

- **Příznaky:** neobvykle **dlouhá a náhodně vypadající jména**, **velký počet dotazů** na jednu doménu, časté záznamy `TXT` a `NULL`.
- **Obrana:** sledování a analýza DNS provozu, omezení dotazů jen na vlastní rezolver, filtrování podezřelých domén a velikosti dotazů.

## Otázky k opakování

1. K čemu slouží DNS a na kterém portu běží? ||převádí doménová jména na IP adresy a naopak; port 53, UDP (dotazy) i TCP (přenos zón)||
2. Popište hierarchii domén na jménu `mail.firma.cz`. ||kořen → TLD `cz` → doména 2. úrovně `firma` → doména 3. úrovně (služba) `mail`||
3. Jaký je rozdíl mezi rekurzivním a iterativním dotazem? ||rekurzivní: server zjistí kompletní odpověď sám; iterativní: odpoví, co ví, nebo odkáže na další server||
4. Popište, jak rezolver zjistí adresu jména, které nemá v cache. ||zeptá se kořene, ten odkáže na server TLD, ten na autoritativní server, který vrátí záznam A/AAAA; uloží do cache na TTL||
5. Co je autoritativní server a proč jich má doména více? ||server s platnými daty o doméně; primární a sekundární kvůli dostupnosti||
6. K čemu jsou záznamy A, AAAA, MX, CNAME a PTR? ||IPv4 adresa, IPv6 adresa, poštovní server, alias, reverzní překlad||
7. Co určuje TTL záznamu? ||jak dlouho smí být záznam uložen v cache||
8. Kdo spravuje doménu `.cz`? ||CZ.NIC||
9. Co je DNS tunneling a podle čeho se pozná? ||skrytý přenos dat v jménech DNS dotazů a odpovědích (únik dat, C2); dlouhá náhodná jména a mnoho dotazů na jednu doménu||
