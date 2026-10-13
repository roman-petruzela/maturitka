---
title: "Kybernetická bezpečnost – rozcestník"
order: -1
---

Rozcestník kategorie: o čem předmět je, kdy se podle ŠVP učí, co si z něj určitě zapamatovat, kde je které téma a které maturitní okruhy pokrývá.

## O předmětu

- Jak se chránit v kyberprostoru: pojmy (riziko, hrozba, zranitelnost), motivy útočníků, fáze a druhy útoků, kryptografie a certifikáty, správa identit a účtů, ochrana koncových zařízení.
- Ve 4. ročníku zabezpečení webových aplikací (SQL injection, XSS, CSRF), bezpečnost sítí z pohledu protokolů a síťových prvků, monitorování provozu, IPS a práce bezpečnostního dohledového centra (SOC).
- Útoky se zkoušejí jen v izolovaném cvičném prostředí (TryHackMe), nikdy na cizích systémech.
- Navazuje na [operační systémy](/it/#operacni-systemy) (účty, oprávnění, malware, zálohy), [počítačové sítě](/it/#pocitacove-site) (protokoly, firewall) a [webové programování](/it/#webove-programovani).

## Ročníky a hodiny podle ŠVP

| Ročník | Hodin týdně | Obsah (ŠVP §4.9.12) |
| --- | --- | --- |
| 3. | 2 | základy kybernetické bezpečnosti; kybernetické útoky; kryptografie, šifrování, PKI a certifikáty; správa identit a účtů; bezpečnost koncových bodů |
| 4. | 2 | zabezpečení aplikací a webových aplikací; bezpečnost sítí a systémů; monitorování zabezpečení, IPS, analýza logů, SOC |

Plné znění výstupů je v [přehledu ŠVP](/it/reference/svp-prehled/#4912-kybernetická-bezpečnost).

## Co si určitě zapamatovat

- **Hrozba** = možná příčina škody (útočník, malware, živel), **zranitelnost** = slabina systému (neaktualizovaný software, slabé heslo), **riziko** = pravděpodobnost, že hrozba zranitelnost využije, krát dopad.
- Útok míří na **důvěrnost** (únik dat), **integritu** (neoprávněná změna) nebo **dostupnost** (znepřístupnění služby) – trojice CIA. Motivy útočníků: peníze, špionáž, hacktivismus, sabotáž a kybernetická válka, osobní důvody.
- **Cyber Kill Chain**: průzkum → příprava zbraně → doručení → exploitace → instalace → řízení a kontrola (C2) → naplnění cíle.
- **Typy útoků**: malware, **DoS/DDoS** (přetížení; DDoS z mnoha zdrojů, často z botnetu), **phishing** (podvodná zpráva lákající údaje), **spoofing** (podvržená IP, e-mail, DNS), **code injection** (SQL injection), supply chain, insider, **DNS tunneling** (data ukrytá v DNS dotazech), útoky přes IoT, **sociální inženýrství**.
- **Kryptografie** je obor, **šifrování** jedna z jeho technik. **Symetrické** – jeden sdílený klíč, rychlé (**AES**). **Asymetrické** – veřejný a soukromý klíč (**RSA**, založené na obtížnosti faktorizace). HTTPS asymetricky vymění jednorázový symetrický klíč a jím šifruje provoz.
- **PKI**: **certifikační autorita** ověří totožnost a podepíše **certifikát** (identita + veřejný klíč + platnost); prohlížeč věří kořenovým autoritám.
- **Hash** je jednosměrný otisk pevné délky; hesla se ukládají jako hash se **solí** (bcrypt, v PHP `password_hash`), nikdy čitelně.
- **Identifikace** („kdo jsi?“) → **autentizace** („opravdu jsi to ty?“ – co znáš, co máš, čím jsi; **MFA** kombinuje aspoň dva faktory) → **autorizace** („co smíš?“). **Princip minimálních oprávnění** – účet má jen práva nezbytná pro svou práci.
- **Webové útoky**: **SQL injection** (`' OR '1'='1' --`) – obrana **parametrizované dotazy**; **XSS** uložený (stored) a odražený (reflected) – obrana escapování výstupu a Content-Security-Policy; **CSRF** – obrana token a cookie SameSite. Nikdy nevěřit vstupu od uživatele.
- **Síť**: firewall filtruje podle adres, portů a protokolů se zásadou **default deny**; **IDS** útok jen hlásí, **IPS** ho v cestě provozu i blokuje (podle **signatur**); **SIEM** sbírá a koreluje logy; **SOC** = tým, který bezpečnost nepřetržitě hlídá.
- **Nástroje**: `ping` (dostupnost, ICMP), `traceroute`/`tracert` (cesta k cíli), **nmap** (otevřené porty a služby), **Wireshark** (zachycení a rozbor paketů).

## Témata kategorie

- [Základy kybernetické bezpečnosti, útoky, kryptografie a identity](/it/kyberneticka-bezpecnost/01-zaklady-a-utoky/) – kyberprostor, riziko, digitální stopa, Kill Chain, typy útoků, SQL injection v praxi, šifrování, PKI, autentizace, hashování hesel, správa identit, koncové body
- [Zabezpečení sítí, aplikací a monitorování](/it/kyberneticka-bezpecnost/02-zabezpeceni-siti-a-aplikaci/) – XSS, SQL injection, CSRF, protokoly a síťové prvky z pohledu bezpečnosti, monitorování, IPS, logy, SOC, TryHackMe

Související stránky v jiných kategoriích: [malware](/it/operacni-systemy/26-malware/), [antiviry](/it/operacni-systemy/25-antivirove-programy/), [firewall](/it/operacni-systemy/27-firewall/), [hesla a jejich lámání](/it/operacni-systemy/11-uzivatelske-ucty-a-hesla/), [oprávnění ve Windows](/it/operacni-systemy/13-uzivatelska-prava-a-opravneni/), [SSH s klíčem](/it/operacni-systemy/50-ssh-vzdaleny-pristup-a-autentizace-klicem/), [bezpečnost, správa a diagnostika sítě](/it/pocitacove-site/20-bezpecnost-sprava-a-diagnostika-site/), [DNS](/it/pocitacove-site/17-dns-system-domenovych-jmen/).

## Maturitní okruhy

Kompletní seznam je v [maturitních okruzích IT](/it/reference/maturitni-okruhy/). Této kategorie se týkají okruhy 16–20:

| Okruh | Stránky |
| --- | --- |
| [16) Základy kybernetické bezpečnosti](/it/reference/maturitni-okruhy/#16-základy-kybernetické-bezpečnosti) | [kyberprostor, riziko, hrozba, zranitelnost, digitální stopa](/it/kyberneticka-bezpecnost/01-zaklady-a-utoky/#kybernetický-prostor-a-kybernetická-bezpečnost) |
| [17) Kybernetické útoky](/it/reference/maturitni-okruhy/#17-kybernetické-útoky) | [fáze a kategorie útoků](/it/kyberneticka-bezpecnost/01-zaklady-a-utoky/#kybernetický-útok--fáze-a-kategorie), [malware](/it/operacni-systemy/26-malware/) |
| [18) Základy kryptografie a šifrování](/it/reference/maturitni-okruhy/#18-základy-kryptografie-a-šifrování) | [šifrování, RSA, AES](/it/kyberneticka-bezpecnost/01-zaklady-a-utoky/#základy-kryptografie-a-šifrování), [PKI a certifikáty](/it/kyberneticka-bezpecnost/01-zaklady-a-utoky/#veřejná-infrastruktura-klíčů-pki-a-digitální-certifikáty), [hash](/it/kyberneticka-bezpecnost/01-zaklady-a-utoky/#hashování-hesel) |
| [19) Správa identit a řízení účtů](/it/reference/maturitni-okruhy/#19-správa-identit-a-řízení-účtů) | [autentizace, autorizace, identifikace](/it/kyberneticka-bezpecnost/01-zaklady-a-utoky/#autentizace-autorizace-identifikace), [správa identit](/it/kyberneticka-bezpecnost/01-zaklady-a-utoky/#správa-identit-a-řízení-účtů), [lámání hesel](/it/operacni-systemy/11-uzivatelske-ucty-a-hesla/), [oprávnění](/it/operacni-systemy/13-uzivatelska-prava-a-opravneni/), [SSH](/it/operacni-systemy/50-ssh-vzdaleny-pristup-a-autentizace-klicem/) |
| [20) Zranitelnost webových aplikací](/it/reference/maturitni-okruhy/#20-zranitelnost-webových-aplikací) | [XSS, SQL injection, CSRF](/it/kyberneticka-bezpecnost/02-zabezpeceni-siti-a-aplikaci/#zabezpečení-webových-a-aplikačních-útoků), [DNS](/it/pocitacove-site/17-dns-system-domenovych-jmen/), [GET a POST](/it/webove-programovani/01-dynamicke-stranky-a-serverove-skriptovani/#get-vs-post) |

Samostatný materiál zatím chybí k Diffie-Hellmanově výměně klíčů, statické a dynamické analýze malwaru, seznamu OWASP Top 10 a stavovým kódům HTTP.

## Co je jen okrajové

- **Úrovně analytiků SOC** a podrobnosti SIEM, NetFlow – stačí vědět, co SOC a SIEM dělají.
- **Doporučovací systémy a bublina filtrů** – patří do ŠVP, ale maturitní okruhy je nezahrnují.
- **Anonymizace** (VPN, Tor) – stačí princip.
- **Konkrétní nástroje TryHackMe** (Burp Suite, přepínače nmapu) – k procvičování, ne k učení zpaměti.
