---
title: "Protokoly TCP/IP"
order: 3
source: "IT/12. ISOOSI, TCPIP, síťové protokoly.docx; IT/Datové-sítě.docx"
---

**Protokol** = pravidla komunikace: **syntaxe** (formát zpráv), **sémantika** (význam polí a reakce) a **synchronizace** (pořadí a časování). Řeší navázání spojení (handshake), vyjednání parametrů, hranice zpráv, chyby a ukončení. Vrstvy samotné vysvětluje [model ISO/OSI a TCP/IP](/it/pocitacove-site/02-standardizace-model-iso-osi-a-tcp-ip/).

## Přehled po vrstvách

| Vrstva (OSI) | Protokoly |
| --- | --- |
| aplikační (7) | DNS, DHCP, HTTP(S), FTP, TFTP, SMTP, POP3, IMAP, SSH, Telnet, SNMP, NTP, LDAP |
| prezentační (6) | ASCII, Unicode, JPEG, MIME, TLS |
| relační (5) | NetBIOS, SMB, RPC, NCP (Novell) |
| transportní (4) | TCP, UDP |
| síťová (3) | IPv4, IPv6, ICMP, IGMP, IPsec, RIP, OSPF |
| linková (2) | Ethernet, Wi-Fi, PPP, HDLC; ARP/RARP mezi 2. a 3. vrstvou |

## Transportní vrstva: porty, TCP a UDP

Umožňuje jednomu počítači mluvit s více aplikacemi naráz: přidá **zdrojový a cílový port**, rozdělí data na segmenty a u příjemce je složí.

### Porty a sockety

**Port** = 16bitové číslo (0–65 535) určující aplikaci. Server naslouchá na pevném portu, klient si bere volný dynamický.

| Rozsah | Název | Použití |
| --- | --- | --- |
| 0–1023 | dobře známé | standardní služby (přiděluje IANA) |
| 1024–49 151 | registrované | aplikace výrobců |
| 49 152–65 535 | dynamické | dočasné porty klientů |

**Socket** = **IP + protokol + port** (např. `192.168.1.10:51034/TCP`). Spojení určuje dvojice socketů. Druhy: **streamové** (TCP), **datagramové** (UDP), **raw** (přímo IP, např. ping).

### Nejčastější porty

| Port | Protokol | Služba |
| --- | --- | --- |
| 20, 21 | TCP | FTP (data, řízení) |
| 22 | TCP | SSH, SFTP, SCP |
| 23 | TCP | Telnet |
| 25 | TCP | SMTP (587 od klienta) |
| 53 | UDP i TCP | DNS |
| 67, 68 | UDP | DHCP (server, klient) |
| 69 | UDP | TFTP |
| 80 | TCP | HTTP |
| 110 | TCP | POP3 (995 šifr.) |
| 143 | TCP | IMAP (993 šifr.) |
| 161, 162 | UDP | SNMP |
| 443 | TCP | HTTPS |
| 445 | TCP | SMB |
| 3389 | TCP | RDP |

### UDP (User Datagram Protocol)

- **Nespojovaný** – datagram prostě odešle.
- **Bez záruk** – nepotvrzuje, neopakuje, nehlídá pořadí.
- Hlavička jen **8 B**: Source port, Destination port, Length, Checksum (u IPv4 nepovinný, u IPv6 povinný).
- Výhody: rychlý, malá režie, umí broadcast a multicast.
- Nevýhody: neohlíží se na zátěž sítě, ztracené se neposílá znovu.
- Použití: DNS, DHCP, TFTP, SNMP, VoIP, stream, hry – kde je rychlost důležitější než úplnost.

### TCP (Transmission Control Protocol)

- **Spojovaný** – nejdřív naváže spojení.
- **Spolehlivý** – příjemce potvrzuje, nepotvrzené se posílá znovu; číslování zajistí **pořadí** a odstraní duplikáty.
- **Řízení toku** – **posuvné okno**: kolik dat smí jít bez potvrzení; při ztrátách TCP zpomalí (řízení zahlcení).
- Hlavička min. **20 B**, kontrolní součet povinný.
- Výhody: spolehlivost, pořadí. Nevýhody: větší režie, pomalejší.
- Použití: web, e-mail, soubory, SSH, chat – kde nesmí nic chybět.

**Navázání spojení – trojí podání ruky (three-way handshake):**

![Three-way handshake: klient pošle SYN, server odpoví SYN + ACK, klient potvrdí ACK](/images/content/it/pocitacove-site/protokoly-tcp-ip/handshake.webp)

1. Klient → **SYN** + počáteční číslo (ISN).
2. Server → **SYN + ACK**: potvrdí klientovo číslo, pošle své.
3. Klient → **ACK**, spojení navázáno.

Ukončení: **FIN** + **ACK** pro každý směr zvlášť; okamžité zrušení **RST**.

**Pole hlavičky TCP:**

| Pole | Význam |
| --- | --- |
| Source / Destination port | zdrojový a cílový port (16 b) |
| Sequence Number | pořadové číslo 1. bajtu dat (při SYN = ISN) |
| Acknowledgement Number | další očekávaný bajt = potvrzení všeho předchozího |
| Data Offset | délka hlavičky (v 32b slovech) |
| Reserved | vždy 0 |
| příznaky | URG, ACK, PSH (předat hned), RST (zrušit), SYN, FIN (konec dat) |
| Window | kolik bajtů příjemce přijme bez potvrzení |
| Checksum | kontrolní součet hlavičky i dat |
| Urgent Pointer | konec naléhavých dat (při URG) |
| Options, Padding | volby (např. MSS) a výplň |

### TCP a UDP vedle sebe

| | TCP | UDP |
| --- | --- | --- |
| spojení | ano (handshake) | ne |
| spolehlivost | potvrzování, opakování | žádná |
| pořadí | zachováno | nezaručeno |
| řízení toku | posuvné okno | ne |
| hlavička | 20–60 B | 8 B |
| rychlost | pomalejší | rychlejší |
| příklady | HTTP(S), SMTP, IMAP, FTP, SSH | DNS, DHCP, VoIP, stream, hry |

### Zajištění spolehlivosti (ARQ)

**ARQ** (Automatic Repeat reQuest) = potvrzování + opakování:

- **Stop-and-Wait** – jeden blok, čekat na potvrzení; pomalé.
- **Go-Back-N** – posílá v rámci okna; při chybě znovu chybný blok i vše za ním.
- **Selective Repeat** – znovu jen chybné bloky.

## Síťová vrstva: IP, ICMP, ARP

- **IP** – adresuje zařízení a předává pakety **bez záruky** (nepotvrzuje, neopravuje, nehlídá pořadí – to řeší TCP). **IPv4** 32 b, **IPv6** 128 b. Viz [IPv4 datagram](/it/pocitacove-site/11-ip-protokol-a-ipv4-datagram/), [IPv4 adresování](/it/pocitacove-site/12-ipv4-adresovani/), [IPv6](/it/pocitacove-site/15-ipv6-adresovani/).
- **ICMP** – **chybové a řídicí zprávy** v IP paketu; pole Type, Code, Checksum. Typy: **8** echo request, **0** echo reply, **3** cíl nedostupný, **11** vypršel čas. Používá **ping** (8/0) a **tracert** (11).
- **ARP** – zjistí **MAC k IP** v LAN: dotaz **broadcastem** („kdo má 192.168.1.1?“), odpověď **unicastem**, výsledek do **ARP cache** (`arp -a`).
- **RARP** – opačně: zná MAC, žádá IP. Broadcast nepřekročí síť a nedá masku, bránu ani DNS → nahradil ho BOOTP a pak **DHCP**.

## Aplikační vrstva

Režim **klient–server**. Standardy = **RFC** od IETF; porty a TLD přiděluje **IANA**.

### DNS (Domain Name System)

Převádí **jména na IP adresy** a naopak. **Port 53** – dotazy UDP, přenosy zón TCP. Viz [DNS](/it/pocitacove-site/17-dns-system-domenovych-jmen/).

### DHCP (Dynamic Host Configuration Protocol)

Automaticky přidělí **IP, masku, bránu a DNS**, hlídá jedinečnost adres. **UDP**, server **67**, klient **68**.

**Způsoby přidělení adresy:**

- **automatické** – adresa natrvalo,
- **dynamické** – zápůjčka (**lease**) na dobu, pak obnovit nebo vrátit do poolu,
- **manuální (rezervace)** – pevná adresa k MAC; pro servery a tiskárny.

**Průběh přidělení – DORA:**

![DHCP DORA: klient broadcastem DISCOVER, server OFFER, klient REQUEST, server ACK](/images/content/it/pocitacove-site/protokoly-tcp-ip/dora.webp)

1. **DISCOVER** – klient broadcastem hledá server.
2. **OFFER** – server nabídne IP, masku, bránu, DNS, lease.
3. **REQUEST** – klient (broadcastem) přijme jednu nabídku.
4. **ACK** – server potvrdí, adresa platí.

Klient ověří, že adresu nikdo nepoužívá; jinak **DECLINE**. Server může odmítnout (**NAK**). **RELEASE** = vrácení adresy, **INFORM** = jen ostatní parametry. Celkem 8 zpráv (klient 5, server 3). DHCP ve Windows Serveru: [DHCP](/it/operacni-systemy/23-dhcp/).

Statická adresa: servery, routery, tiskárny. DHCP: běžní klienti.

### Web: HTTP a HTTPS

- **HTTP** – přenos stránek, TCP **80**, **dotaz – odpověď**: metody GET, POST, PUT, DELETE; kódy 200 OK, 301 přesměrování, 404 nenalezeno, 500 chyba serveru. **Bezstavový** – stav drží cookies.
- **HTTPS** – HTTP + **TLS** (dříve SSL), port **443**; certifikát ověří server.

### Přenos souborů a vzdálený přístup

- **FTP** – přenos souborů, porty 21/20; **nešifrovaný** → nahrazuje **SFTP/SCP**.
- **TFTP** – jednoduché FTP nad UDP bez ověření; firmware a konfigurace síťových prvků.
- **NFS** – sdílení souborů v Unixu; **SMB** – ve Windows (v Linuxu Samba).
- **Telnet** – textový vzdálený přístup, vše **nešifrovaně**.
- **SSH** – náhrada Telnetu: **autentizace**, **šifrování**, **integrita**.

### Elektronická pošta

- **SMTP** – odesílání a přenos mezi servery; původně bez ověření → spam.
- **POP3** – stáhne zprávy do klienta, na serveru je obvykle smaže.
- **IMAP** – zprávy zůstávají na serveru, stejné na všech zařízeních.

Role programů v poštovním systému:

| Zkratka | Název | Úkol |
| --- | --- | --- |
| MUA | Mail User Agent | klient (Outlook, Thunderbird) |
| MTA | Mail Transfer Agent | přenos mezi servery (SMTP) |
| MDA | Mail Delivery Agent | doručení do schránky |
| MRA | Mail Retrieval Agent | zpřístupnění schránky klientovi |

### Další aplikační protokoly

- **SNMP** – monitorování síťových prvků; manager se ptá agentů, agenti hlásí události (trap). UDP 161/162.
- **NTP** – synchronizace času.
- **LPD** – tisk na síťovou tiskárnu.
- **NetBIOS / NetBEUI** – staré protokoly IBM a Microsoftu pro malé LAN; NetBEUI neuměl směrování.

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
