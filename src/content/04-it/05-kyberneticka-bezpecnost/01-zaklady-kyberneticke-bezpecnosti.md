---
title: "Základy kybernetické bezpečnosti"
order: 1
tags: ["doplněno"]
---

## Kybernetický prostor a kybernetická bezpečnost

- Kybernetický prostor (kyberprostor) – digitální prostředí vytvářené propojenými informačními a komunikačními systémy (internet, sítě, zařízení, data, uživatelé); nemá fyzické hranice, existuje jen díky technické infrastruktuře a je globálně dostupný
- Kybernetická bezpečnost – soubor právních, organizačních, technických a vzdělávacích opatření směřujících k ochraně kyberprostoru (zařízení, sítí, dat, služeb) před neoprávněným přístupem, poškozením nebo zneužitím
- Zásady bezpečného chování v kyberprostoru
	- Ověřovat důvěryhodnost zdrojů a odesílatelů před otevřením odkazu či přílohy
	- Používat silná a unikátní hesla, vícefaktorové ověření
	- Pravidelně aktualizovat software a operační systém
	- Nesdílet zbytečně osobní a citlivé údaje, přemýšlet nad tím, co se veřejně zveřejňuje
	- Zálohovat důležitá data
	- Ověřovat zabezpečení připojení (HTTPS) zejména při zadávání citlivých údajů
- Motivy kybernetických útočníků
	- Finanční zisk – krádež peněz, vydírání (ransomware), prodej ukradených dat
	- Špionáž – získání citlivých firemních nebo státních informací (průmyslová, státní špionáž)
	- Hacktivismus – prosazování politického nebo ideologického názoru (např. blokování webu instituce)
	- Sabotáž a kybernetická válka – poškození nebo vyřazení infrastruktury protivníka (často státem sponzorované útoky)
	- Osobní motivace – pomsta, zvědavost, touha po uznání v komunitě, testování vlastních schopností

- Členění kyberprostoru (vrstvy)
	- Fyzická vrstva – hardware a infrastruktura: počítače, servery, kabely, datová centra, mobilní sítě
	- Logická vrstva – software, protokoly a služby, které nad infrastrukturou běží (operační systémy, internetové protokoly, aplikace, cloud)
	- Sociální (kognitivní) vrstva – lidé a jejich digitální identity, účty, komunikace a informace, které si předávají
- Soukromí v kyberprostoru – právo jednotlivce rozhodovat o tom, kdo a jak nakládá s jeho osobními údaji; v EU ho chrání nařízení **GDPR** (právo na informace, opravu, výmaz, přenositelnost údajů); v ČR se kybernetickou bezpečností zabývá **zákon o kybernetické bezpečnosti** a dohled vykonává **NÚKIB** (Národní úřad pro kybernetickou a informační bezpečnost)

## Triáda CIA

Tři základní cíle informační bezpečnosti — každé bezpečnostní opatření chrání alespoň jeden z nich:

| Vlastnost | Význam | Narušení | Ochrana |
| --- | --- | --- | --- |
| **Důvěrnost** (Confidentiality) | k informacím mají přístup jen oprávněné osoby | únik dat, odposlech | šifrování, řízení přístupu, autentizace |
| **Integrita** (Integrity) | data nejsou neoprávněně ani nechtěně změněna | podvržení nebo poškození dat | hashe, digitální podpis, oprávnění, verze a zálohy |
| **Dostupnost** (Availability) | systém a data jsou k dispozici, když je oprávnění uživatelé potřebují | výpadek, DDoS, ransomware | zálohy, redundance (RAID, záložní servery), ochrana proti DDoS |

Často se doplňují **autenticita** (ověřený původ dat) a **nepopiratelnost** (odesílatel nemůže popřít, že zprávu odeslal — zajišťuje digitální podpis).

## Riziko, hrozba, zranitelnost

- Hrozba (threat) – potenciální příčina nežádoucí události, která může způsobit škodu (např. útočník, malware, přírodní katastrofa, selhání zaměstnance); existuje nezávisle na tom, zda je systém zranitelný
- Zranitelnost (vulnerability) – slabina nebo nedostatek v systému, procesu nebo chování, kterou lze zneužít (např. neaktualizovaný software, špatně nastavená práva, slabé heslo); sama o sobě nezpůsobuje škodu, ale umožňuje hrozbě se projevit
- Riziko (risk) – pravděpodobnost, že hrozba využije konkrétní zranitelnost, a míra dopadu (škody), který tím vznikne; riziko = funkce hrozby, zranitelnosti a dopadu (často zjednodušeně: riziko = pravděpodobnost × dopad)
- Vztah mezi pojmy – hrozba je vždy vnější/potenciální působící síla, zranitelnost je vlastnost systému, riziko je výsledná míra ohrožení vznikající jejich kombinací (bez zranitelnosti hrozba nepředstavuje reálné riziko a naopak)

### Druhy hrozeb

- **Pasivní** hrozby (útoky) – útočník data jen sleduje nebo odposlouchává a nic nemění (odposlech komunikace, analýza provozu); narušují **důvěrnost**, těžko se odhalují, chrání proti nim hlavně šifrování
- **Aktivní** hrozby (útoky) – útočník data nebo systém mění, podvrhuje nebo vyřazuje (podvržení zprávy, změna dat, DoS, malware); narušují **integritu** a **dostupnost**, dají se odhalit monitorováním a kontrolou integrity
- Další dělení – **vnější** × **vnitřní** (insider), **úmyslné** × **neúmyslné** (chyba uživatele, přírodní katastrofa, selhání hardwaru)

## Ochrana digitálního života a digitální stopa

- Ochrana digitálních zařízení – aktualizace systému a aplikací, antivirová ochrana, šifrování úložiště, uzamykání zařízení (PIN, biometrie), omezení instalace aplikací z neověřených zdrojů
- Ochrana digitálního obsahu – zálohování, šifrování citlivých souborů, kontrola nastavení sdílení v cloudových službách
- Ochrana osobních údajů – minimalizace zveřejňovaných údajů, kontrola nastavení soukromí na sociálních sítích, obezřetnost při vyplňování formulářů a registracích
- Reakce na vývoj technologií – sledování nových hrozeb (např. útoky přes IoT, deepfake, útoky s využitím umělé inteligence) a přizpůsobování bezpečnostních návyků
- Digitální stopa (digital footprint) – souhrn informací, které o uživateli zanechává jeho aktivita online (aktivní stopa – vědomě zveřejněný obsah; pasivní stopa – automaticky sbíraná data jako IP adresa, cookies, historie prohlížení)
	- Kontrola digitální stopy – vyhledávání vlastního jména, kontrola nastavení účtů a aplikací s přístupem k datům, mazání nepoužívaných účtů
- Anonymní používání internetu – nástroje jako VPN (skrytí IP adresy a šifrování provozu), síť Tor (anonymizace přes vrstvené šifrování a více uzlů), prohlížení v anonymním (privátním) režimu prohlížeče (nešíří lokální historii, ale neskrývá IP adresu), blokování sledovacích prvků (trackerů) a cookies třetích stran

## Bezpečnost koncových bodů a ochrana dat

- Koncový bod (endpoint) – zařízení, které se připojuje k síti a pracuje s daty (počítač, notebook, mobilní telefon, server, IoT zařízení); je typickým cílem útoku, protože bývá nejblíže uživateli
- Technické a softwarové prostředky zabezpečení koncové stanice
	- Antivirový/antimalware program – detekuje a odstraňuje škodlivý software na základě signatur nebo chování
	- Firewall (osobní) – kontroluje a filtruje síťový provoz do a ze stanice podle definovaných pravidel
	- Šifrování disku – ochrana dat při ztrátě nebo odcizení zařízení (data jsou bez znalosti klíče/hesla nečitelná)
	- Pravidelné aktualizace (patch management) operačního systému a aplikací – odstraňují známé zranitelnosti
	- Zálohování dat – umožňuje obnovu po havárii, ransomwaru nebo chybě uživatele
	- Řízení přístupových práv a uzamykání zařízení po nečinnosti
- Pravidla zabezpečení netechnického charakteru
	- Používání silných, unikátních hesel a jejich pravidelná obměna při podezření na únik
	- Obezřetnost vůči sociálnímu inženýrství – ověřování neobvyklých požadavků (zejména na peníze nebo citlivá data) jiným kanálem
	- Fyzická bezpečnost – uzamykání kanceláří a zařízení, zákaz ponechávání odemčené stanice bez dozoru, kontrola přístupu cizích osob do prostor s technikou
	- Opatrnost při práci s přenosnými médii neznámého původu (USB flash disky)
	- Školení uživatelů a udržování bezpečnostního povědomí jako průběžný proces, ne jednorázová akce
