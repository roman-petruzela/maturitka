---
title: "Standardizace, referenční model ISO/OSI a TCP/IP"
order: 2
source: "IT/12. ISOOSI, TCPIP, síťové protokoly.docx; site/Model_ISO_OSI_TCP_IP_NEW_2025.pdf; IT/Datové-sítě.docx"
---

Přenos informací po síti je složitá úloha z mnoha kroků: převést bity na signál, poznat začátek a konec rámce, najít cestu přes cizí sítě, ohlídat ztracená data, předat je správné aplikaci. Proto se komunikace dělí do **vrstev** – každá řeší jen svou část úlohy, využívá služeb vrstvy pod sebou a nabízí služby vrstvě nad sebou, aniž by ji zatěžovala detaily, jak je služba ve skutečnosti provedena. Aby si rozuměla zařízení různých výrobců, musí se vrstvy a jejich protokoly řídit společnými **standardy**.

## Standardizace v počítačových sítích

**Standard (norma)** je veřejně dostupný dokument, který přesně popisuje, jak má technologie fungovat – formát rámců, význam polí hlavičky, napěťové úrovně, rozměry konektorů. Díky standardům spolu spolupracuje síťová karta jednoho výrobce se switchem jiného výrobce.

- **Standardy de jure** („podle práva“) vydávají oficiální normalizační organizace po schvalovacím procesu. Příkladem je referenční model ISO/OSI nebo normy IEEE 802.
- **Standardy de facto** („podle skutečnosti“) se prosadily samy tím, že je všichni začali používat, i když je zprvu nikdo oficiálně neschválil. Příkladem je rodina protokolů TCP/IP, která vznikla pro síť ARPANET a stala se základem Internetu.
- **Otevřené standardy** může kdokoli zdarma použít; **firemní (proprietární)** patří jednomu výrobci (např. protokol EIGRP firmy Cisco, který byl později zveřejněn).

### Normalizační organizace

| Organizace | Čím se zabývá |
| --- | --- |
| **ISO** (International Organization for Standardization) | mezinárodní normalizace; referenční model OSI (norma ISO 7498) |
| **IEEE** (Institute of Electrical and Electronics Engineers) | normy lokálních sítí řady **802** |
| **IETF** (Internet Engineering Task Force) | protokoly Internetu; vydává je jako dokumenty **RFC** (Request for Comments) |
| **IANA** (Internet Assigned Numbers Authority) | přiděluje bloky IP adres, čísla portů a protokolů, spravuje kořenovou zónu DNS |
| **ITU-T** (International Telecommunication Union) | telekomunikace – modemy, ISDN, X.25 |
| **EIA/TIA** (Electronic/Telecommunications Industry Association) | strukturovaná kabeláž, zapojení T568A a T568B, kategorie kabelů |
| **ANSI** (American National Standards Institute) | americké národní normy, např. FDDI |
| **ICANN** | správa doménových jmen a adresního prostoru Internetu na globální úrovni |

### Nejdůležitější normy IEEE 802

| Norma | Obsah |
| --- | --- |
| IEEE 802.1 | propojování sítí: 802.1D (přemosťování, Spanning Tree), 802.1Q (VLAN), 802.1X (ověřování na portu) |
| IEEE 802.2 | podvrstva LLC |
| IEEE 802.3 | Ethernet |
| IEEE 802.5 | Token Ring |
| IEEE 802.11 | bezdrátové sítě WLAN (Wi-Fi) |
| IEEE 802.15 | osobní sítě WPAN (802.15.1 = Bluetooth) |
| IEEE 802.16 | bezdrátové metropolitní sítě (WiMAX) |

## Proč vrstvy

Rozdělení složitého procesu na skupiny jednodušších procesů dělá výsledné řešení pružnějším a univerzálnějším. Do jedné vrstvy se seskupují činnosti, které spolu úzce souvisejí.

- Každá vrstva má jasně definované funkce a rozhraní k sousedním vrstvám.
- Protokol jedné vrstvy lze **vyměnit bez dopadu na ostatní** – stejná aplikace funguje přes Ethernet, optické vlákno, Wi-Fi i sériovou linku.
- Komunikace mezi **stejnými vrstvami** dvou systémů se řídí **protokolem** té vrstvy a probíhá za pomoci spojení, které vytvořila vrstva pod ní.
- Vrstvy poskytují výrobcům i správcům **společný jazyk** („switch pracuje na 2. vrstvě“).

## Referenční model ISO/OSI

**OSI** (Open Systems Interconnection, propojení otevřených systémů) vytvořila organizace ISO a v roce **1984** byl přijat jako mezinárodní norma **ISO 7498**. Norma **nepředepisuje implementaci** konkrétních systémů, ale stanoví obecné principy **sedmivrstvé** síťové architektury – popisuje vrstvy, jejich funkce a služby. V praxi se plně neprosadil (zvítězil TCP/IP), ale slouží jako **referenční** model, podle kterého se o sítích mluví.

| Č. | Vrstva | Úkol | Jednotka dat (PDU) | Adresa | Zařízení |
| --- | --- | --- | --- | --- | --- |
| 7 | aplikační (application) | zpřístupňuje síťové služby aplikacím a uživateli | data (zpráva) | – | brána (gateway), firewall |
| 6 | prezentační (presentation) | převádí data do tvaru, kterému rozumí obě strany: kódování znaků, komprese, šifrování | data | – | – |
| 5 | relační (session) | navazuje, udržuje, synchronizuje a ukončuje relaci mezi aplikacemi | data | – | – |
| 4 | transportní (transport) | spolehlivý přenos mezi koncovými uzly, dělení na segmenty a jejich skládání | segment (TCP), datagram (UDP) | port | firewall |
| 3 | síťová (network) | logické adresování a směrování mezi sítěmi | paket | IP adresa | router |
| 2 | linková (data link) | přenos rámců mezi sousedními uzly, řízení přístupu k médiu, detekce chyb | rámec (frame) | MAC adresa | switch, bridge, síťová karta |
| 1 | fyzická (physical) | přenos jednotlivých bitů jako signálů po médiu | bit | – | hub, opakovač, transceiver, kabely a konektory |

Spodní tři vrstvy jsou orientovány na **přenos dat** sítí, čtvrtá (transportní) je **přizpůsobovací** a horní tři jsou orientovány na **podporu aplikací**. Spodní vrstvy jsou realizovány převážně hardwarem, horní softwarem. Pro zapamatování pořadí zdola: **F**yzická – **L**inková – **S**íťová – **T**ransportní – **R**elační – **P**rezentační – **A**plikační.

### 1. Fyzická vrstva

Stará se o to, aby byl každý bit přenesen korektně a příjemce ho správně rozpoznal. Bitům nepřiřazuje žádný význam.

- Aktivuje, udržuje a deaktivuje fyzické spojení mezi koncovými systémy. Spojení může být dvoubodové (sériová linka) nebo mnohobodové (Ethernet na sběrnici).
- Definuje elektrické a fyzikální vlastnosti: rozložení pinů konektoru, napěťové úrovně, vlastnosti a maximální délku kabelu, způsob, jak se vyjadřují „jedničky a nuly“.
- Patří sem modulace a linkové kódování, bitová synchronizace, fyzická topologie, sériový nebo paralelní přenos a režimy simplex, half duplex a full duplex – viz [informace, signály a přenosový kanál](/it/pocitacove-site/05-informace-signaly-a-prenosovy-kanal/).
- Pracují zde **hub, opakovač**, transceiver, kabely a konektory (RJ-45, ST/SC).

### 2. Linková (spojová) vrstva

- Poskytuje spojení mezi dvěma **sousedními** systémy – v rámci jedné lokální sítě.
- Uspořádává bity z fyzické vrstvy do logických celků – **rámců** (frames). Musí rozpoznat začátek a konec rámce i jeho jednotlivé části včetně hlavičky a adres.
- Rámce opatřuje **fyzickou (MAC) adresou** odesílatele a příjemce.
- Pomocí kontrolního součtu **detekuje chyby** vzniklé na fyzické vrstvě a vadné rámce zahodí; řídí přístup ke sdílenému médiu.
- Dělí se na dvě podvrstvy: horní **LLC** (Logical Link Control, softwarová – ovladač karty; určuje protokol vyšší vrstvy, řídí tok) a spodní **MAC** (Media Access Control, závislá na hardwaru; adresace a řízení přístupu k médiu).
- Pracují zde **switch, bridge** a síťová karta. Vytvářejí doménu, ve které se šíří všesměrové vysílání (broadcast).

### 3. Síťová vrstva

- Hlavním úkolem je **směrování** – nalezení vhodné cesty od odesílatele až ke koncovému příjemci. Odesílatel a příjemce většinou nejsou sousedé; mezi nimi leží několik dalších uzlů. Síťová vrstva v každém uzlu rozhodne, ke kterému sousedovi paket poslat, a to se opakuje, dokud paket nedorazí k cíli.
- Zajišťuje **logické (hierarchické) adresování** – IP adresy se skládají z části sítě a části zařízení.
- Překlenuje rozdílné vlastnosti technologií jednotlivých sítí a hlásí problémy při doručování.
- Protokoly: **IP**, **ICMP**, **ARP**, RARP, IGMP, směrovací protokoly. Jednotkou je **paket**, typickým zařízením **router**.

### 4. Transportní vrstva

- Zajišťuje přenos dat mezi **koncovými uzly** (end-to-end). Přijímá data od vyšších vrstev, dělí je na **segmenty**, u příjemce je zase skládá ve správném pořadí.
- Pomocí **portů** rozlišuje, které aplikaci data patří.
- Nabízí dva protokoly: **TCP** – spojovaný, spolehlivý přenos se zárukami (ztracené segmenty se pošlou znovu, zachová se pořadí, odstraní se duplikáty); hodí se pro soubory, e-maily, webové stránky, kde nesmí chybět ani bajt. **UDP** – nespojovaný přenos bez záruk; hodí se tam, kde by čekání na opakované odeslání vadilo víc než ztráta, a ztráty se řeší jinak (snížením kvality, opakováním dotazu): DNS, VoIP, streamované video, internetová rádia, online hry.

Podrobně viz [protokoly TCP/IP](/it/pocitacove-site/03-protokoly-tcp-ip/).

### 5. Relační vrstva

- Organizuje a synchronizuje **dialog** mezi relačními vrstvami obou systémů a řídí výměnu dat.
- Umožňuje **vytvořit a ukončit relaci**, synchronizovat ji a po výpadku obnovit; vkládá do toku dat synchronizační značky, od kterých lze přenos zopakovat.
- Typicky tvoří relaci mezi naším počítačem a serverem webu, na který se díváme; řeší i přihlašování.
- Řadí se sem např. NetBIOS, RPC, SMB, AppleTalk; protokol SSL/TLS bývá řazen sem nebo do prezentační vrstvy.

### 6. Prezentační vrstva

- Všechny nižší vrstvy se snaží přenést data přesně tak, jak byla odeslána, bit po bitu. Tentýž řetězec bitů ale může mít pro různé systémy různý význam – například používají jiné kódování znaků nebo pořadí bajtů.
- Prezentační vrstva proto **transformuje data do tvaru, kterému rozumí aplikace**: převádí kódy a abecedy, přizpůsobuje pořadí bajtů, **komprimuje** a **šifruje**.
- Zabývá se jen **strukturou** dat, ne jejich významem – ten zná jen aplikační vrstva.
- Typické formáty: ASCII, Unicode, JPEG, PNG, GIF, MP3, MP4, MIME.

### 7. Aplikační vrstva

- Poskytuje aplikacím přístup ke komunikačnímu systému a umožňuje jejich spolupráci: přístup k souborům na jiných počítačích, vzdálený tisk, elektronická pošta, web, přístup do databáze.
- Využívá služeb nižších vrstev, a je proto odstíněna od problémů síťových technických prostředků.
- Protokoly: HTTP, HTTPS, FTP, SSH, Telnet, DNS, DHCP, TFTP, SNMP, SMTP, POP3, IMAP, LDAP, BitTorrent.

## Zapouzdření

Když aplikace odesílá data, každá vrstva k nim přidá **hlavičku** se svými řídicími informacemi (u linkové vrstvy i zápatí s kontrolním součtem) a předá je vrstvě pod sebou. Tomu se říká **zapouzdření** (encapsulation). Datová jednotka, se kterou pracuje určitá vrstva, je **PDU** (Protocol Data Unit).

**Odesílatel:** data → segment → paket → rámec → bity

**Příjemce:** bity → rámec → paket → segment → data

U příjemce každá vrstva přečte a odstraní „svou“ hlavičku a zbytek předá vrstvě nad sebou – **odpouzdření** (decapsulation).

### Adresy na jednotlivých vrstvách

Každá hlavička obsahuje vždy zdrojovou a cílovou adresu, která má smysl pro danou vrstvu:

| Vrstva | Adresa | Co určuje |
| --- | --- | --- |
| transportní | číslo portu | konkrétní proces (aplikaci) na koncovém zařízení, např. port 443 = webový server |
| síťová | IP adresa (logická) | koncové zařízení a jeho síť; podle ní se hledá cesta přes další sítě |
| linková | MAC adresa (fyzická) | síťové rozhraní v rámci jedné lokální sítě; na každém routeru se mění |

V odpovědi se zdrojová a cílová adresa na všech vrstvách prohodí. IP adresy zůstávají po celé cestě stejné (pokud je nezmění [NAT](/it/pocitacove-site/14-nat-preklad-adres/)), zatímco MAC adresy platí jen pro jeden úsek mezi dvěma sousedními zařízeními.

## Model TCP/IP

**TCP/IP** je soubor protokolů, na kterém je postaven Internet. Název je složen ze zkratek dvou nejdůležitějších protokolů: **TCP** (Transmission Control Protocol) a **IP** (Internet Protocol). Vznikl v 70. letech pro americkou síť ARPANET (ta na něj přešla 1. 1. 1983) – byl navržen tak, aby nezávisel na přenosovém médiu a spolehlivost přenosu řešily až koncové uzly. Je to standard de facto, jeho protokoly popisují dokumenty RFC.

Model TCP/IP má **4 vrstvy** (nejnižší se někdy po vzoru OSI dělí na dvě):

| Vrstva TCP/IP | Odpovídající vrstvy OSI | Úkol | Protokoly |
| --- | --- | --- | --- |
| aplikační | 7, 6, 5 | programy, které poskytují uživateli služby po síti; zahrnuje i kódování, kompresi a zabezpečení dat | HTTP, HTTPS, DNS, DHCP, FTP, SMTP, POP3, IMAP, SSH, Telnet, SNMP |
| transportní | 4 | přenos mezi koncovými aplikacemi, multiplexování podle portů, spolehlivost | TCP, UDP |
| síťová (internetová) | 3 | adresování a směrování datagramů mezi sítěmi | IP, ICMP, ARP, IGMP, IPsec |
| síťového rozhraní (síťového přístupu) | 2, 1 | přenos rámců mezi přímo propojenými zařízeními, přístup k médiu | Ethernet, Wi-Fi, PPP, HDLC, Frame Relay |

- **Aplikační vrstva** vznikla spojením 7., 6. a 5. vrstvy OSI – všechny tři jsou softwarové a jejich výsledkem jsou data předávaná transportní vrstvě. Aplikační protokoly používají vždy jednu ze dvou transportních služeb, **TCP nebo UDP**, případně obě (DNS). Aplikace se rozlišují **porty** – domluvenými čísly; každé spojení je jednoznačně určeno IP adresou, transportním protokolem a číslem portu.
- **Transportní vrstva** je implementována **jen v koncových zařízeních** a přizpůsobuje chování sítě potřebám aplikace. Zajišťuje **multiplexování** (z dat více aplikací vytvoří jeden tok) a **demultiplexování** (přijatá data rozdělí podle portů správným aplikacím), dělení dat na segmenty a u TCP spolehlivost – ztracené jednotky detekuje a pošle znovu, pořadí zajišťuje číslováním.
- **Síťová vrstva** je implementována **ve všech prvcích sítě** – ve směrovačích i koncových zařízeních. Na základě adres hledá cestu od odesílatele k příjemci. Nejdůležitějším protokolem je IP, jednotkou je paket (datagram).
- **Vrstva síťového rozhraní** zajišťuje přenos rámců mezi dvěma přímo propojenými zařízeními a definuje metody přístupu k médiu. Je specifická pro každou síťovou technologii (Ethernet, Token Ring, FDDI, X.25).

### Porovnání ISO/OSI a TCP/IP

| | ISO/OSI | TCP/IP |
| --- | --- | --- |
| počet vrstev | 7 | 4 |
| vznik | teoretický model ISO, norma 1984 | praktické protokoly pro ARPANET, 70. léta |
| typ standardu | de jure | de facto (RFC) |
| použití | referenční model pro výuku a popis sítí | skutečně používaný v Internetu i v lokálních sítích |
| transportní služby | spojované i nespojované | TCP (spojovaný), UDP (nespojovaný) |
| relační a prezentační vrstva | samostatné vrstvy | součást aplikační vrstvy |

## Otázky k opakování

1. Jaký je rozdíl mezi standardem de jure a de facto? Uveďte příklady. ||de jure vydá normalizační organizace po schválení (ISO/OSI, IEEE 802.3); de facto se prosadí používáním (TCP/IP)||
2. Co upravují normy IEEE 802.3 a IEEE 802.11? ||Ethernet; bezdrátové sítě Wi-Fi||
3. Vyjmenujte vrstvy modelu ISO/OSI od nejnižší. ||fyzická, linková, síťová, transportní, relační, prezentační, aplikační||
4. Na které vrstvě pracuje hub, switch a router a s jakými adresami? ||hub na fyzické (žádné adresy), switch na linkové (MAC), router na síťové (IP)||
5. Co je zapouzdření a jak se jmenují PDU na vrstvách 4, 3, 2 a 1? ||každá vrstva přidá k datům svou hlavičku; segment, paket, rámec, bit||
6. Která adresa se během cesty paketu Internetem mění a která ne? ||MAC adresy se mění na každém úseku mezi routery, IP adresy zůstávají (pokud je nepřekládá NAT)||
7. Kterým vrstvám OSI odpovídá aplikační vrstva TCP/IP a vrstva síťového rozhraní? ||aplikační 7, 6, 5; síťového rozhraní 2 a 1||
8. Čím se liší TCP a UDP a kdy se hodí který? ||TCP je spojovaný a spolehlivý (soubory, web, e-mail), UDP nespojovaný bez záruk, ale rychlejší (DNS, VoIP, video, hry)||
9. Proč je transportní vrstva jen v koncových zařízeních, kdežto síťová i v routerech? ||router potřebuje jen IP adresu, aby paket poslal dál; spojení mezi aplikacemi a porty řeší až koncové uzly||
