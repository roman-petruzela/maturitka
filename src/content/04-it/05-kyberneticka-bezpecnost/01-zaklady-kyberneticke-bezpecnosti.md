---
title: "Základy kybernetické bezpečnosti"
order: 1
---
## Kybernetický prostor a kybernetická bezpečnost

- **Kyberprostor** – digitální prostředí propojených informačních a komunikačních systémů (internet, sítě, zařízení, data, uživatelé); bez fyzických hranic, globálně dostupný.
- **Kybernetická bezpečnost** – právní, organizační, technická a vzdělávací opatření k **ochraně kyberprostoru** (zařízení, sítí, dat, služeb) před neoprávněným přístupem, poškozením a zneužitím.
- **Zásady bezpečného chování:**
	- ověřovat odesílatele a zdroje před otevřením odkazu či přílohy,
	- silná a unikátní hesla, **vícefaktorové ověření**,
	- aktualizovat software a OS,
	- nesdílet zbytečně osobní údaje,
	- zálohovat,
	- při zadávání citlivých údajů ověřit **HTTPS**.
- **Motivy útočníků:**

| Motiv | Příklad |
| --- | --- |
| **finanční zisk** | krádež peněz, ransomware, prodej ukradených dat |
| **špionáž** | průmyslová a státní |
| **hacktivismus** | politický nebo ideologický názor (blokování webu instituce) |
| **sabotáž, kybernetická válka** | vyřazení infrastruktury protivníka, často státem sponzorováno |
| **osobní** | pomsta, zvědavost, uznání v komunitě |

- **Členění kyberprostoru (vrstvy):**
	- **fyzická** – hardware a infrastruktura (počítače, servery, kabely, datová centra, mobilní sítě),
	- **logická** – software, protokoly, služby (OS, internetové protokoly, aplikace, cloud),
	- **sociální (kognitivní)** – lidé, jejich digitální identity, účty, komunikace a informace.
- **Soukromí v kyberprostoru** – právo rozhodovat, kdo a jak nakládá s osobními údaji. EU: nařízení **GDPR** (informace, oprava, výmaz, přenositelnost). ČR: **zákon o kybernetické bezpečnosti**, dohled **NÚKIB**.

## Triáda CIA

![Triáda CIA: důvěrnost, integrita, dostupnost; vedle pojmy hrozba, zranitelnost, riziko a druhy hrozeb](/images/content/it/kyberneticka-bezpecnost/zaklady/cia.webp)

Tři základní cíle informační bezpečnosti – každé opatření chrání aspoň jeden:

| Vlastnost | Význam | Narušení | Ochrana |
| --- | --- | --- | --- |
| **Důvěrnost** (Confidentiality) | přístup jen pro oprávněné | únik dat, odposlech | šifrování, řízení přístupu, autentizace |
| **Integrita** (Integrity) | data nejsou neoprávněně ani nechtěně změněna | podvržení, poškození | hashe, digitální podpis, oprávnění, verze, zálohy |
| **Dostupnost** (Availability) | systém a data jsou k dispozici, když je třeba | výpadek, DDoS, ransomware | zálohy, redundance (RAID, záložní servery), ochrana proti DDoS |

Doplňují se **autenticita** (ověřený původ dat) a **nepopiratelnost** (odesílatel nemůže popřít odeslání – digitální podpis).

## Riziko, hrozba, zranitelnost

- **Hrozba (threat)** – potenciální příčina škody (útočník, malware, katastrofa, chyba zaměstnance); existuje nezávisle na zranitelnosti systému.
- **Zranitelnost (vulnerability)** – slabina systému, procesu nebo chování, kterou lze zneužít (neaktualizovaný SW, špatná práva, slabé heslo); sama škodu nezpůsobí.
- **Riziko (risk)** – pravděpodobnost, že hrozba zneužije zranitelnost, a **dopad**: zjednodušeně **riziko = pravděpodobnost × dopad**.
- **Vztah:** hrozba = působící síla, zranitelnost = vlastnost systému, riziko = jejich kombinace (bez zranitelnosti hrozba reálné riziko nepředstavuje).

### Druhy hrozeb

- **Pasivní** – útočník data **jen sleduje** (odposlech, analýza provozu); narušují **důvěrnost**, těžko se odhalují, chrání **šifrování**.
- **Aktivní** – útočník data či systém **mění, podvrhuje, vyřazuje** (podvržení zprávy, změna dat, DoS, malware); narušují **integritu** a **dostupnost**, odhalí je monitoring a kontrola integrity.
- Dále **vnější × vnitřní** (insider), **úmyslné × neúmyslné** (chyba, katastrofa, selhání HW).

## Ochrana digitálního života a digitální stopa

- **Zařízení** – aktualizace, antivirus, šifrování úložiště, zámek (PIN, biometrie), instalace jen z ověřených zdrojů.
- **Obsah** – zálohy, šifrování citlivých souborů, kontrola sdílení v cloudu.
- **Osobní údaje** – minimalizace, nastavení soukromí na sociálních sítích, opatrnost při formulářích.
- **Nové technologie** – sledovat hrozby (IoT, deepfake, útoky s AI).
- **Digitální stopa** – informace, které o uživateli zanechává online aktivita:
	- **aktivní** – vědomě zveřejněný obsah,
	- **pasivní** – automaticky sbíraná data (IP adresa, cookies, historie prohlížení),
	- kontrola: hledat vlastní jméno, projít nastavení účtů a aplikací, mazat nepoužívané účty.
- **Anonymita:** **VPN** (skryje IP, šifruje provoz), **Tor** (vrstvené šifrování přes více uzlů), **anonymní režim** prohlížeče (jen nezapisuje lokální historii, IP neskrývá), blokování **trackerů** a cookies třetích stran.

## Bezpečnost koncových bodů a ochrana dat

**Koncový bod (endpoint)** = zařízení pracující s daty v síti (počítač, notebook, telefon, server, IoT); typický cíl útoku, je nejblíž uživateli.

**Technická opatření:**

- **antivirus / antimalware** – signatury nebo chování,
- **osobní firewall** – filtruje provoz podle pravidel,
- **šifrování disku** – ochrana při ztrátě nebo krádeži,
- **patch management** – aktualizace odstraňují známé zranitelnosti,
- **zálohování** – obnova po havárii, ransomwaru, chybě,
- **řízení práv** a zámek po nečinnosti.

**Netechnická opatření:**

- silná a unikátní hesla, výměna při podezření na únik,
- **sociální inženýrství** – neobvyklé požadavky (peníze, citlivá data) ověřit jiným kanálem,
- **fyzická bezpečnost** – zamykání, nenechávat odemčenou stanici, kontrola cizích osob,
- opatrnost s **USB** neznámého původu,
- **školení** uživatelů jako průběžný proces.

## Otázky k opakování

1. Co je kyberprostor a jak se člení? ||digitální prostředí propojených systémů; vrstvy fyzická, logická, sociální||
2. Co je triáda CIA a jak se narušuje? ||důvěrnost (únik, odposlech), integrita (změna dat), dostupnost (výpadek, DDoS)||
3. Jaký je rozdíl mezi hrozbou, zranitelností a rizikem? ||hrozba je možná příčina škody, zranitelnost slabina systému, riziko je pravděpodobnost × dopad||
4. Čím se liší pasivní a aktivní hrozby? ||pasivní data jen sledují (odposlech, narušují důvěrnost), aktivní je mění nebo vyřazují (integrita, dostupnost)||
5. Jaké jsou motivy útočníků? ||finanční zisk, špionáž, hacktivismus, sabotáž a kybernetická válka, osobní důvody||
6. Co je digitální stopa a jaké má druhy? ||informace zanechané online aktivitou; aktivní (zveřejněná vědomě) a pasivní (sbíraná automaticky)||
7. Jak chránit koncový bod? ||aktualizace, antivirus, firewall, šifrování disku, zálohy, řízení práv, školení uživatelů||
