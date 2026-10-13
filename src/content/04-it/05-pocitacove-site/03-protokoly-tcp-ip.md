---
title: "Protokoly TCP/IP"
order: 3
source: "IT/12. ISOOSI, TCPIP, síťové protokoly.docx; IT/Datové-sítě.docx"
---

**Protokol** je soubor pravidel, který určuje **syntaxi** (formát zpráv), **sémantiku** (význam jednotlivých polí a reakce na ně) a **synchronizaci** (pořadí a časování zpráv) komunikace. Protokol typicky řeší, jak zjistit, že protějšek existuje, jak navázat spojení (handshake), jak vyjednat parametry, kde zpráva začíná a končí, co dělat s poškozenými nebo ztracenými daty a jak spojení ukončit. Tato stránka prochází nejdůležitější protokoly rodiny TCP/IP po vrstvách – od transportní vrstvy přes síťovou až k aplikačním službám. Vrstvy samotné vysvětluje [model ISO/OSI a TCP/IP](/it/pocitacove-site/02-standardizace-model-iso-osi-a-tcp-ip/).

## Přehled po vrstvách

| Vrstva (OSI) | Protokoly |
| --- | --- |
| aplikační (7) | DNS, DHCP, HTTP, HTTPS, FTP, TFTP, SMTP, POP3, IMAP, SSH, Telnet, SNMP, NTP, LDAP |
| prezentační (6) | formáty a kódování dat (ASCII, Unicode, JPEG, MIME), šifrování TLS |
| relační (5) | NetBIOS, SMB, RPC; v sítích Novell protokol NCP |
| transportní (4) | TCP, UDP |
| síťová (3) | IPv4, IPv6, ICMP, IGMP, IPsec; směrovací protokoly RIP, OSPF |
| linková (2) | Ethernet, Wi-Fi, PPP, HDLC; ARP a RARP na rozhraní 2. a 3. vrstvy |

## Transportní vrstva: porty, TCP a UDP

Transportní vrstva umožňuje, aby jeden počítač komunikoval s více protějšky a aplikacemi zároveň. K datům přidá hlavičku se **zdrojovým a cílovým portem**, zprávu rozdělí na segmenty a u příjemce řídí jejich opětovné složení.

### Porty a sockety

**Port** je 16bitové číslo (0–65 535), které určuje aplikaci (proces) na počítači. Server naslouchá na pevném, všeobecně známém portu; klient si pro každé spojení vybere volný dynamický port.

| Rozsah | Název | Použití |
| --- | --- | --- |
| 0–1023 | dobře známé (well-known) | standardní služby, přiděluje je IANA |
| 1024–49 151 | registrované | aplikace jednotlivých výrobců |
| 49 152–65 535 | dynamické (privátní) | dočasné porty klientů |

**Socket** je koncový bod spojení: kombinace **IP adresy, transportního protokolu a portu** (např. `192.168.1.10:51034/TCP`). Jedno spojení je jednoznačně určeno dvojicí socketů klienta a serveru. Podle protokolu se rozlišují **streamové** sockety (TCP), **datagramové** sockety (UDP) a **raw** sockety, které pracují přímo s IP pakety (používají je např. směrovače nebo program ping).

### Nejčastější porty

| Port | Protokol | Služba |
| --- | --- | --- |
| 20, 21 | TCP | FTP (data, řízení) |
| 22 | TCP | SSH, SFTP, SCP |
| 23 | TCP | Telnet |
| 25 | TCP | SMTP (587 pro odesílání pošty klientem) |
| 53 | UDP i TCP | DNS |
| 67, 68 | UDP | DHCP (server, klient) |
| 69 | UDP | TFTP |
| 80 | TCP | HTTP |
| 110 | TCP | POP3 (995 se šifrováním) |
| 143 | TCP | IMAP (993 se šifrováním) |
| 161, 162 | UDP | SNMP |
| 443 | TCP | HTTPS |
| 445 | TCP | SMB (sdílení souborů ve Windows) |
| 3389 | TCP | RDP (vzdálená plocha) |

### UDP (User Datagram Protocol)

- **Nespojovaný** – nenavazuje spojení, datagram prostě odešle.
- **Bez záruky doručení** – nepotvrzuje příjem, ztracená data neposílá znovu, nehlídá pořadí; datagramy mohou dorazit v jiném pořadí, než byly odeslány.
- Hlavička má jen **8 bajtů** a čtyři pole: **Source port** (zdrojový port, může být 0), **Destination port** (cílový port), **Length** (délka hlavičky a dat) a **Checksum** (16bitový kontrolní součet; poškozený datagram příjemce zahodí). Kontrolní součet je u IPv4 nepovinný (pak je 0), u IPv6 povinný.
- Výhody: rychlost, malá režie, jednoduchá implementace, podpora broadcastu a multicastu.
- Nevýhody: datagram se odešle bez ohledu na vytížení sítě, poškozený nebo ztracený se nepošle znovu.
- Použití: DNS, DHCP, TFTP, SNMP, internetová telefonie (VoIP), streamované video, kamerové záznamy, online hry – všude, kde je důležitější rychlost než stoprocentní doručení.

### TCP (Transmission Control Protocol)

- **Spojovaný** – před přenosem dat se musí navázat spojení.
- **Spolehlivý** – příjemce potvrzuje přijatá data; nepotvrzená data odesílatel po vypršení časovače pošle znovu. Data se číslují, takže je příjemce složí ve **správném pořadí** a odstraní duplikáty.
- **Řízení toku** – mechanismem **posuvného okna** (sliding window) příjemce určuje, kolik dat smí odesílatel poslat bez čekání na potvrzení. Při ztrátách TCP posílá méně dat najednou (řízení zahlcení), když síť stíhá, zase přidává.
- Hlavička má nejméně **20 bajtů**, kontrolní součet je povinný.
- Výhody: spolehlivost a správné pořadí. Nevýhody: větší režie (overhead), velká hlavička, nižší rychlost.
- Použití: web (HTTP, HTTPS), e-mail, přenos souborů, SSH, okamžité zprávy – všude, kde se nesmí ztratit žádná data.

**Navázání spojení – trojí podání ruky (three-way handshake):**

1. Klient pošle segment s příznakem **SYN** a svým počátečním pořadovým číslem (ISN).
2. Server odpoví segmentem **SYN + ACK**: potvrdí klientovo číslo a pošle své počáteční číslo.
3. Klient odpoví **ACK** a spojení je navázáno.

Ukončení spojení probíhá výměnou příznaků **FIN** a **ACK** zvlášť pro každý směr; okamžité zrušení spojení oznamuje příznak **RST**.

**Pole hlavičky TCP:**

| Pole | Význam |
| --- | --- |
| Source port, Destination port | zdrojový a cílový port (po 16 bitech) |
| Sequence Number | pořadové číslo prvního bajtu dat v segmentu; při SYN je to počáteční číslo ISN a první bajt dat má číslo ISN + 1 |
| Acknowledgement Number | číslo bajtu, který příjemce očekává jako další – tím potvrzuje vše předchozí (platí při příznaku ACK) |
| Data Offset | délka hlavičky v 32bitových slovech, tedy kde začínají data |
| Reserved | rezervované bity, vždy 0 |
| příznaky | URG (naléhavá data), ACK (potvrzení), PSH (předat data aplikaci ihned), RST (zrušení spojení), SYN (synchronizace pořadových čísel), FIN (odesílatel už nemá další data) |
| Window | velikost okna – kolik bajtů je příjemce ochoten přijmout bez dalšího potvrzení |
| Checksum | kontrolní součet hlavičky i dat |
| Urgent Pointer | konec naléhavých dat (platí při příznaku URG) |
| Options, Padding | volitelné parametry (např. největší velikost segmentu MSS) a výplň na celá 32bitová slova |

### TCP a UDP vedle sebe

| | TCP | UDP |
| --- | --- | --- |
| spojení | navazuje (three-way handshake) | nenavazuje |
| spolehlivost | potvrzování, opakované odeslání | žádná |
| pořadí dat | zachováno | nezaručeno |
| řízení toku | ano (posuvné okno) | ne |
| hlavička | 20–60 B | 8 B |
| rychlost a režie | pomalejší, větší režie | rychlejší, malá režie |
| příklady | HTTP(S), SMTP, IMAP, FTP, SSH | DNS, DHCP, VoIP, streamování, hry |

### Zajištění spolehlivosti (ARQ)

Spolehlivý přenos stojí na potvrzování a opakování – metodách **ARQ** (Automatic Repeat reQuest):

- **Stop-and-Wait** – odesílatel pošle jeden blok a čeká na potvrzení; jednoduché, ale pomalé.
- **Go-Back-N** – odesílatel posílá bloky bez čekání (v rámci okna); při chybě se vrátí a pošle znovu chybný blok i všechny za ním.
- **Selective Repeat** – znovu se posílají jen chybné bloky; příjemce si správně přijaté bloky za chybou uschová.

## Síťová vrstva: IP, ICMP, ARP

- **IP (Internet Protocol)** – základní protokol síťové vrstvy. Adresuje zařízení a předává datagramy sítí **bez záruky**: nepotvrzuje doručení, neopravuje chyby, nehlídá pořadí ani duplicity – to je ponecháno vyšším vrstvám (TCP). **IPv4** má 32bitové adresy, **IPv6** 128bitové. Podrobně viz [IP protokol a IPv4 datagram](/it/pocitacove-site/11-ip-protokol-a-ipv4-datagram/), [IPv4 adresování](/it/pocitacove-site/12-ipv4-adresovani/) a [IPv6](/it/pocitacove-site/15-ipv6-adresovani/).
- **ICMP (Internet Control Message Protocol)** – posílá **chybové a řídicí zprávy** (cíl je nedostupný, vypršela životnost paketu) a diagnostické dotazy. Je zapouzdřen přímo v IP paketu. Zpráva obsahuje pole **Type** (typ zprávy), **Code** (upřesnění) a **Checksum**. Důležité typy: **8** – žádost o odezvu (echo request), **0** – odezva (echo reply), **3** – cíl nedostupný (destination unreachable), **11** – vypršel čas (time exceeded). Používají ho příkazy **ping** (typy 8 a 0) a **tracert / traceroute** (využívá typ 11).
- **ARP (Address Resolution Protocol)** – zjistí **MAC adresu** k známé IP adrese v lokální síti. Počítač pošle dotaz **ARP request** jako **broadcast** („kdo má adresu 192.168.1.1?“) a zařízení s touto IP adresou odpoví **unicastem** se svou MAC adresou. Odpověď se uloží do **ARP cache** (Windows: `arp -a`).
- **RARP (Reverse ARP)** – opačný převod: stanice zná svou MAC adresu a žádá RARP server o svou IP adresu. Nevýhody: dotaz je fyzický broadcast, takže nepřekročí hranice jedné sítě, a předává jen IP adresu – ne masku, bránu ani adresu DNS serveru. Proto ho nahradil BOOTP a později **DHCP**.

## Aplikační vrstva

Aplikační protokoly pracují v režimu **klient–server**. Standardy protokolů TCP/IP vydává IETF jako dokumenty **RFC** (Request for Comments); čísla dobře známých portů a domény nejvyššího řádu přiděluje **IANA**.

### DNS (Domain Name System)

Převádí **doménová jména na IP adresy** a naopak – prohlížeč díky němu zjistí, na jakou adresu se má k serveru `www.example.com` připojit. Používá **port 53** – běžné dotazy přes UDP, přenosy zón a dlouhé odpovědi přes TCP. Podrobně viz [DNS – systém doménových jmen](/it/pocitacove-site/17-dns-system-domenovych-jmen/).

### DHCP (Dynamic Host Configuration Protocol)

Automaticky přiděluje zařízením **IP adresu, masku sítě, výchozí bránu a adresu DNS serveru** a zajišťuje, aby přidělené adresy byly jedinečné. Běží nad **UDP**: server naslouchá na portu **67**, klient na portu **68**.

**Způsoby přidělení adresy:**

- **automatické** – klient dostane adresu natrvalo; vhodné pro trvale připojená zařízení,
- **dynamické** – adresa se zapůjčí na určitou dobu (**lease**), po které ji klient musí obnovit, jinak se vrátí do zásobníku (poolu); vhodné pro dočasně připojovaná zařízení,
- **manuální (rezervace)** – správce přiřadí adresu ke konkrétní MAC adrese a DHCP ji jen oznámí; vhodné pro servery a tiskárny, jejichž adresa se nesmí měnit.

**Průběh přidělení – DORA:**

1. **DHCPDISCOVER** – klient, který ještě nemá adresu, pošle broadcastem dotaz, zda je v síti DHCP server.
2. **DHCPOFFER** – server nabídne volnou IP adresu s maskou, bránou, DNS a dobou zápůjčky.
3. **DHCPREQUEST** – klient oznámí (opět broadcastem), kterou nabídku přijímá; přijmout může jen jednu, ostatní servery tím odmítne.
4. **DHCPACK** – server přidělení potvrdí a klient adresu začne používat.

Klient si ještě (např. pomocí ARP) ověří, že adresu nikdo jiný nepoužívá; pokud ano, odmítne ji zprávou **DHCPDECLINE**. Server může žádost zamítnout zprávou **DHCPNAK**. Zprávou **DHCPRELEASE** klient adresu vrací, zprávou **DHCPINFORM** žádá jen o ostatní parametry, když má adresu nastavenou ručně. Celkem existuje 8 typů zpráv – pět posílá klient (DISCOVER, REQUEST, DECLINE, RELEASE, INFORM) a tři server (OFFER, ACK, NAK). Nastavení DHCP serveru ve Windows Serveru popisuje stránka [DHCP](/it/operacni-systemy/23-dhcp/).

Statické nastavení adresy (ručně v každém zařízení) se používá pro servery, routery a tiskárny; dynamické přes DHCP pro běžné klienty.

### Web: HTTP a HTTPS

- **HTTP** (Hypertext Transfer Protocol) přenáší webové stránky (HTML) a další soubory z webového serveru do prohlížeče. Běží nad TCP (port 80) a funguje systémem **dotaz – odpověď**: klient pošle požadavek (metody GET, POST, PUT, DELETE), server vrátí odpověď se stavovým kódem (200 OK, 301 přesměrování, 404 nenalezeno, 500 chyba serveru). HTTP je **bezstavový** – každý požadavek je samostatný; stav (přihlášení, košík) se udržuje pomocí cookies.
- **HTTPS** je HTTP zabezpečené šifrováním **TLS** (dříve SSL), port 443. Certifikát serveru zároveň ověřuje, že komunikujeme se skutečným serverem.

### Přenos souborů a vzdálený přístup

- **FTP** (File Transfer Protocol) – přenos souborů mezi počítači nezávisle na jejich operačním a souborovém systému; porty 21 (řízení) a 20 (data). Je **nezabezpečený** – jméno i heslo putují nešifrovaně, proto se nahrazuje **SFTP** nebo **SCP** (přes SSH).
- **TFTP** (Trivial FTP) – zjednodušené FTP nad UDP bez ověřování; slouží k nahrávání konfigurace a firmwaru síťových zařízení a ke startu bezdiskových stanic.
- **NFS** (Network File System) – vzdálený přístup k souborům v unixových systémech; **SMB** – sdílení souborů a tiskáren ve Windows (v Linuxu Samba).
- **Telnet** – jeden z nejstarších protokolů; textový vzdálený přístup k serverům a síťovým zařízením. Vše včetně hesla přenáší **nešifrovaně**.
- **SSH** (Secure Shell) – nahradil Telnet. Zajišťuje **autentizaci** obou stran, **šifrování** přenášených dat a jejich **integritu**.

### Elektronická pošta

- **SMTP** (Simple Mail Transfer Protocol) – odesílá poštu z klienta na server a přenáší ji mezi poštovními servery. Ve standardní verzi neověřuje uživatele, a byl proto snadno zneužitelný k rozesílání spamu.
- **POP3** (Post Office Protocol) – stahuje zprávy ze serveru do klienta; po stažení se ze serveru obvykle mažou.
- **IMAP** (Internet Message Access Protocol) – zprávy zůstávají na serveru a klient s nimi pracuje vzdáleně, takže je stav schránky stejný na všech zařízeních.

Role programů v poštovním systému:

| Zkratka | Název | Úkol |
| --- | --- | --- |
| MUA | Mail User Agent | poštovní klient (Outlook, Thunderbird); je klientem SMTP a POP3 nebo IMAP |
| MTA | Mail Transfer Agent | přepravuje poštu mezi servery protokolem SMTP |
| MDA | Mail Delivery Agent | doručí přijatou zprávu do schránky místního uživatele |
| MRA | Mail Retrieval Agent | na serveru zpřístupňuje schránku a předává zprávy klientovi |

### Další aplikační protokoly

- **SNMP** (Simple Network Management Protocol) – správa a monitorování síťových zařízení; řídicí stanice (manager) se dotazuje agentů v zařízeních a agenti sami hlásí události (trap). UDP 161 a 162.
- **NTP** – synchronizace času.
- **LPD** – odesílání tiskových úloh na síťovou tiskárnu.
- **NetBIOS** a **NetBEUI** – starší protokoly firem IBM a Microsoft pro malé lokální sítě; NetBEUI byl rychlý a jednoduše se nastavoval, ale nepodporoval směrování, takže fungoval jen v rámci jedné sítě.

## Otázky k opakování

1. Co je port a co socket? ||port je 16bitové číslo určující aplikaci na počítači; socket je kombinace IP adresy, protokolu a portu, tedy koncový bod spojení||
2. Popište trojí podání ruky protokolu TCP. ||klient pošle SYN, server odpoví SYN + ACK, klient potvrdí ACK||
3. Jak TCP zajišťuje spolehlivost? ||pořadovými čísly, potvrzováním (ACK), opakovaným odesláním nepotvrzených dat, kontrolním součtem a posuvným oknem||
4. Proč DNS dotazy a VoIP používají UDP? ||nepotřebují navazovat spojení; krátký dotaz se v případě ztráty zopakuje a u hlasu by opakované odesílání způsobilo zpoždění||
5. Na kterých portech běží HTTP, HTTPS, SSH, DNS a DHCP? ||80, 443, 22, 53, 67/68||
6. K čemu slouží ARP a jak probíhá? ||zjistí MAC adresu k IP adrese; dotaz broadcastem, odpověď unicastem, výsledek se uloží do ARP cache||
7. Popište přidělení adresy přes DHCP. ||DORA: DISCOVER (klient, broadcast), OFFER (server), REQUEST (klient), ACK (server)||
8. Které parametry dostane klient od DHCP serveru? ||IP adresu, masku, výchozí bránu, adresu DNS serveru a dobu zápůjčky||
9. Proč se nepoužívá Telnet a FTP bez zabezpečení a čím se nahrazují? ||přenášejí heslo i data nešifrovaně; SSH, SFTP/SCP||
10. Jaký je rozdíl mezi POP3 a IMAP? ||POP3 zprávy stáhne do klienta a ze serveru je obvykle smaže; IMAP je ponechá na serveru a synchronizuje je mezi zařízeními||
11. K čemu slouží ICMP a které příkazy ho používají? ||chybová a řídicí hlášení síťové vrstvy; ping (echo request/reply), tracert (time exceeded)||
