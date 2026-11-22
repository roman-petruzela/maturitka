---
title: "Protokoly TCP/IP"
order: 3
source: "IT/12. ISOOSI, TCPIP, síťové protokoly.docx; IT/Datové-sítě.docx"
---

**Protokol** = pravidla komunikace: **syntaxe** (formát zpráv), **sémantika** (význam polí) a **synchronizace** (pořadí a časování). Vrstvy vysvětluje [model ISO/OSI a TCP/IP](/it/pocitacove-site/02-standardizace-model-iso-osi-a-tcp-ip/).

| Vrstva (OSI) | Protokoly |
| --- | --- |
| aplikační (7) | DNS, DHCP, HTTP(S), FTP, SMTP, POP3, IMAP, SSH, Telnet, SNMP |
| transportní (4) | TCP, UDP |
| síťová (3) | IPv4, IPv6, ICMP, IPsec, RIP, OSPF; ARP mezi 2. a 3. vrstvou |
| linková (2) | Ethernet, Wi-Fi, PPP |

## Transportní vrstva: porty, TCP a UDP

Jeden počítač může mluvit s více aplikacemi naráz: transportní vrstva přidá **zdrojový a cílový port**, rozdělí data na segmenty a u příjemce je složí.

**Port** = 16bitové číslo (0–65 535). Server naslouchá na pevném portu, klient si bere volný dynamický. **Socket** = **IP + protokol + port**.

| Rozsah | Název |
| --- | --- |
| 0–1023 | dobře známé (standardní služby) |
| 1024–49 151 | registrované |
| 49 152–65 535 | dynamické (porty klientů) |

| Port | Služba | Port | Služba |
| --- | --- | --- | --- |
| 20, 21 | FTP | 80 | HTTP |
| 22 | SSH | 110 / 143 | POP3 / IMAP |
| 23 | Telnet | 161 | SNMP |
| 25 | SMTP | 443 | HTTPS |
| 53 | DNS | 445 | SMB |
| 67, 68 | DHCP | 3389 | RDP |

### TCP a UDP

| | TCP | UDP |
| --- | --- | --- |
| spojení | **spojovaný** (handshake) | nespojovaný |
| spolehlivost | potvrzování a opakování | žádná |
| pořadí | zachováno | nezaručeno |
| řízení toku | posuvné okno | ne |
| hlavička | 20–60 B | 8 B |
| rychlost | pomalejší | rychlejší |
| použití | web, e-mail, soubory, SSH | DNS, DHCP, VoIP, stream, hry |

- **TCP** příjemce potvrzuje, nepotvrzené se posílá znovu, číslování zajistí pořadí. **Posuvné okno** určuje, kolik dat smí jít bez potvrzení; při ztrátách TCP zpomalí.
- **UDP** datagram jen odešle; nehlídá ztráty ani zátěž, ale umí broadcast a multicast.

**Trojí podání ruky (three-way handshake):**

![Three-way handshake: klient pošle SYN, server odpoví SYN + ACK, klient potvrdí ACK](/images/content/it/pocitacove-site/protokoly-tcp-ip/handshake.webp)

1. Klient → **SYN** + počáteční číslo.
2. Server → **SYN + ACK**.
3. Klient → **ACK**, spojení je navázáno.

Ukončení: **FIN** + **ACK** v každém směru, okamžité zrušení **RST**.

### Zajištění spolehlivosti (ARQ)

**ARQ** (Automatic Repeat reQuest) = potvrzování + opakování. **Stop-and-Wait** čeká na potvrzení každého bloku, **Go-Back-N** při chybě pošle znovu chybný blok i všechny za ním, **Selective Repeat** jen chybné.

## Síťová vrstva: IP, ICMP, ARP

- **IP** – adresuje a předává pakety **bez záruky** (spolehlivost řeší TCP). **IPv4** 32 b, **IPv6** 128 b. Viz [IPv4 datagram](/it/pocitacove-site/11-ip-protokol-a-ipv4-datagram/).
- **ICMP** – **chybové a řídicí zprávy**: echo request (8) a reply (0) používá **ping**, „vypršel čas“ (11) **tracert**.
- **ARP** – zjistí **MAC k IP** v LAN: dotaz **broadcastem** („kdo má 192.168.1.1?“), odpověď **unicastem**, výsledek do **ARP cache** (`arp -a`).

## Aplikační vrstva

Režim **klient–server**; standardy jsou **RFC** od IETF.

- **DNS** – převádí **jména na IP adresy**, port 53. Viz [DNS](/it/pocitacove-site/17-dns-system-domenovych-jmen/).
- **HTTP** – web, TCP **80**, dotaz–odpověď (GET, POST), kódy 200, 301, 404, 500; **bezstavový**. **HTTPS** = HTTP + **TLS**, port **443**.
- **FTP** – přenos souborů, **nešifrovaný** → nahrazuje **SFTP/SCP**. **TFTP** – jednoduché FTP nad UDP (firmware, konfigurace).
- **Telnet** – textový vzdálený přístup **bez šifrování** → nahrazuje **SSH** (autentizace, šifrování, integrita).
- **SMTP** – odesílání pošty a přenos mezi servery. **POP3** stáhne zprávy do klienta a ze serveru je obvykle smaže, **IMAP** je nechá na serveru.
- **SNMP** – monitorování síťových prvků, **NTP** – synchronizace času.

### DHCP (Dynamic Host Configuration Protocol)

Automaticky přidělí **IP, masku, bránu a DNS**. **UDP**, server **67**, klient **68**.

- **Automatické** – adresa natrvalo. **Dynamické** – zápůjčka (**lease**) na čas. **Manuální (rezervace)** – pevná adresa k MAC, pro servery a tiskárny.

**Průběh – DORA:**

![DHCP DORA: klient broadcastem DISCOVER, server OFFER, klient REQUEST, server ACK](/images/content/it/pocitacove-site/protokoly-tcp-ip/dora.webp)

1. **DISCOVER** – klient broadcastem hledá server.
2. **OFFER** – server nabídne IP, masku, bránu, DNS, lease.
3. **REQUEST** – klient přijme jednu nabídku.
4. **ACK** – server potvrdí, adresa platí.

DHCP ve Windows Serveru: [DHCP](/it/operacni-systemy/23-dhcp/).

## Otázky k opakování

1. Co je port a co socket? ||port je 16bitové číslo určující aplikaci; socket je IP adresa, protokol a port – koncový bod spojení||
2. Popište trojí podání ruky protokolu TCP. ||klient pošle SYN, server odpoví SYN + ACK, klient potvrdí ACK||
3. Jak TCP zajišťuje spolehlivost? ||čísly, potvrzováním (ACK), opakováním nepotvrzených dat, kontrolním součtem a posuvným oknem||
4. Proč DNS dotazy a VoIP používají UDP? ||nepotřebují navazovat spojení; krátký dotaz se v případě ztráty zopakuje a u hlasu by opakování způsobilo zpoždění||
5. Na kterých portech běží HTTP, HTTPS, SSH, DNS a DHCP? ||80, 443, 22, 53, 67/68||
6. K čemu slouží ARP a jak probíhá? ||zjistí MAC adresu k IP; dotaz broadcastem, odpověď unicastem, výsledek se uloží do ARP cache||
7. Popište přidělení adresy přes DHCP. ||DORA: DISCOVER, OFFER, REQUEST, ACK||
8. Proč se nepoužívá Telnet a FTP a čím se nahrazují? ||přenášejí heslo i data nešifrovaně; SSH, SFTP/SCP||
9. Jaký je rozdíl mezi POP3 a IMAP? ||POP3 zprávy stáhne a ze serveru je obvykle smaže; IMAP je ponechá na serveru||
10. K čemu slouží ICMP a které příkazy ho používají? ||chybová a řídicí hlášení; ping a tracert||
