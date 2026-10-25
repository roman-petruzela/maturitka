---
title: "DNS – systém doménových jmen"
order: 17
source: "IT/Datové-sítě.docx; IT/13. Internet.docx"
---

Počítače se v síti adresují čísly (IP adresami), lidé si ale lépe pamatují jména. **DNS** (Domain Name System) je celosvětová distribuovaná databáze, která převádí **doménová jména na IP adresy** (`www.example.com` → IPv4 nebo IPv6 adresa serveru) a naopak. Bez DNS by bylo nutné znát adresu každého serveru. Zavedeno bylo v roce **1984** a nahradilo do té doby používaný soubor `hosts` se seznamem všech počítačů, který si každý počítač stahoval z centrálního místa. Mezi ostatními aplikačními protokoly ho zařazuje stránka [protokoly TCP/IP](/it/pocitacove-site/03-protokoly-tcp-ip/).

## Doménové jméno a hierarchie domén

Jmenný prostor DNS je **strom**. Na vrcholu je **kořen** (zapisuje se jako tečka na konci jména), pod ním domény nejvyšší úrovně, pod nimi domény druhé úrovně a tak dál. Doménové jméno se skládá z částí oddělených tečkami a čte se **zprava doleva**, od nejobecnější k nejkonkrétnější.

```
www.skola.example.cz.
 |    |      |     |  └ kořen
 |    |      |     └ doména 1. úrovně (TLD) – cz
 |    |      └ doména 2. úrovně – example
 |    └ doména 3. úrovně – skola
 └ jméno počítače (služby) – www
```

- **Domény nejvyšší úrovně (TLD)** jsou **národní** (ccTLD – `.cz`, `.sk`, `.de`, `.uk`) a **generické** (gTLD – `.com`, `.org`, `.net`, `.edu`, `.gov`, `.info` a stovky nových jako `.app`). Speciální doména `.arpa` slouží k reverznímu překladu.
- **Doména 2. úrovně** obvykle určuje organizaci nebo službu (`google.com`, `seznam.cz`). Registruje si ji držitel u registrátora za roční poplatek.
- **Domény 3. a nižší úrovně** si vytváří držitel domény sám – pro jednotlivé služby, servery nebo oddělení (`mail.firma.cz`, `chrome.google.com`).
- **FQDN** (Fully Qualified Domain Name) je úplné jméno až ke kořeni, např. `www.example.cz.`. Jméno může mít nejvýše 253 znaků a každá část nejvýše 63 znaků.

### Kdo domény spravuje

- **IANA/ICANN** spravuje **kořenovou zónu** a přiděluje TLD.
- Každou TLD spravuje její **registr** – doménu `.cz` sdružení **CZ.NIC**. Domény zákazníkům prodávají **registrátoři**.
- **Kořenových serverů** je 13 logických (označení A–M), ve skutečnosti stovky strojů po celém světě, které sdílejí stejné adresy pomocí anycastu.

## Jmenné servery a zóny

Služby DNS poskytuje rozsáhlá hierarchie **jmenných serverů** (name servers). Naslouchají na **portu 53** – běžné dotazy se posílají přes **UDP**, dlouhé odpovědi a přenosy celé zóny přes **TCP**.

- **Zóna** je část jmenného prostoru, kterou spravuje jeden subjekt (např. zóna `example.cz` se všemi jmény pod ní). Správu nižších domén může delegovat na jiné servery.
- Každá doména má několik **autoritativních** jmenných serverů. Jedině ty podávají v daném okamžiku platné a aktuální informace o jménech ve své doméně. Jeden je **primární** (data se upravují na něm) a ostatní **sekundární** – pravidelně si od primárního kopírují obsah zóny a zajišťují dostupnost, když primární vypadne.
- **Rekurzivní (rezolvující) servery** – typicky u poskytovatele Internetu, v domácím routeru nebo veřejné (např. 1.1.1.1, 8.8.8.8, 9.9.9.9) – vyřizují dotazy klientů a výsledky si ukládají do **cache**.

## Jak probíhá překlad jména

Dotazy jsou dvojího druhu:

- **rekurzivní dotaz** – tazatel chce hotovou odpověď a server se o vše postará sám (dotaz klienta na rezolver); server je víc zatížený, ale odpověď si uloží do cache,
- **iterativní (nerekurzivní) dotaz** – server dotaz sám neřeší, jen odpoví tím, co ví, nebo odkáže na jiný server, kterého se má tazatel zeptat dál (dotazy rezolveru na kořenové a autoritativní servery).

**Příklad – zjištění adresy `www.example.cz`:**

1. Prohlížeč se podívá do cache operačního systému (a do souboru `hosts`). Adresu nezná, a pošle proto **rekurzivní** dotaz rezolveru u poskytovatele.
2. Rezolver ji také nemá v cache a zeptá se **kořenového serveru**. Ten adresu nezná, ale odkáže na servery domény `.cz`.
3. Rezolver se zeptá **serveru `.cz`** (správce CZ.NIC). Ten odkáže na autoritativní servery domény `example.cz`.
4. Rezolver se zeptá **autoritativního serveru `example.cz`**, který vrátí adresu `www.example.cz` (záznam A nebo AAAA).
5. Rezolver odpověď pošle prohlížeči a uloží si ji do cache na dobu **TTL** – další dotaz na stejné jméno už vyřídí hned.

Díky cachování nemusí každý dotaz procházet až ke kořeni – bez něj by doptávání bylo zdlouhavé a kořenové servery přetížené.

## Záznamy DNS

Informace jsou uloženy v **zdrojových záznamech** (resource records). Každý záznam obsahuje **NAME** (doménové jméno, pro které platí), **TYPE** (typ záznamu), **CLASS** (rodina protokolů, prakticky vždy IN = Internet), **TTL** (jak dlouho smí být záznam uložen v cache) a vlastní **data**.

| Typ | Význam | Příklad |
| --- | --- | --- |
| **A** | IPv4 adresa jména | `www.example.cz. A 192.0.2.10` |
| **AAAA** | IPv6 adresa jména | `www.example.cz. AAAA 2001:db8::10` |
| **CNAME** | alias – jméno je přezdívkou jiného jména | `web.example.cz. CNAME www.example.cz.` |
| **MX** | poštovní server domény s prioritou (nižší číslo = vyšší priorita) | `example.cz. MX 10 mail.example.cz.` |
| **NS** | autoritativní jmenný server domény | `example.cz. NS ns1.example.cz.` |
| **PTR** | reverzní záznam – jméno k IP adrese | `10.2.0.192.in-addr.arpa. PTR www.example.cz.` |
| **SOA** | začátek autority – údaje o zóně; v zóně je právě jeden | viz níže |
| **TXT** | libovolný text; ověřování domény a pošty (SPF, DKIM, DMARC) | `example.cz. TXT "v=spf1 mx -all"` |

Záznam **SOA** (Start of Authority) určuje primární autoritativní server a správce zóny a obsahuje:

- **sériové číslo** – verze zóny; zvýší se při každé změně, podle něj sekundární servery poznají, že mají data obnovit,
- **REFRESH** – jak často mají sekundární servery ověřovat, zda se data nezměnila,
- **RETRY** – když se sekundární server po uplynutí REFRESH nemůže spojit s primárním, zkouší to znovu po této době,
- **EXPIRE** – když se sekundárnímu serveru nepodaří kontaktovat primární do této doby, přestane o zóně odpovídat,
- **TTL** (minimum) – jak dlouho mohou ostatní (neautoritativní) servery uchovávat záznamy v cache.

### Reverzní překlad

Překlad IP adresy na jméno se provádí přes speciální doménu `in-addr.arpa` (pro IPv6 `ip6.arpa`), ve které se adresa zapisuje **pozpátku**: adrese 192.0.2.10 odpovídá jméno `10.2.0.192.in-addr.arpa` se záznamem PTR. Reverzní záznamy se používají např. při kontrole poštovních serverů proti spamu.

## Nástroje

- **nslookup** – dotaz na DNS ve Windows i Linuxu: `nslookup www.example.cz`, typ záznamu se volí např. `nslookup -type=MX example.cz`.
- **dig** a **host** – podrobnější nástroje v Linuxu: `dig www.example.cz AAAA`, `dig +trace www.example.cz` ukáže celou cestu od kořene.
- **ipconfig /displaydns** a **ipconfig /flushdns** – výpis a vymazání cache DNS ve Windows.

## Bezpečnost DNS

- **DNS spoofing / otrávení cache** (cache poisoning) – útočník podstrčí rezolveru falešnou odpověď a uživatele přesměruje na podvodný server.
- Obranou je **DNSSEC** – záznamy jsou digitálně podepsané a rezolver ověří jejich pravost. Doména `.cz` patří mezi nejlépe zabezpečené na světě.
- Dotazy DNS jsou tradičně nešifrované; šifrování zajišťují **DoH** (DNS over HTTPS) a **DoT** (DNS over TLS).

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
