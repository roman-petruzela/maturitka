---
title: "Standardizace, referenční model ISO/OSI a TCP/IP"
order: 2
source: "IT/12. ISOOSI, TCPIP, síťové protokoly.docx; site/Model_ISO_OSI_TCP_IP_NEW_2025.pdf; IT/Datové-sítě.docx"
---

Komunikace po síti se dělí do **vrstev** – každá řeší jen svou část (signál, rámce, cesta, spolehlivost, aplikace), využívá služeb vrstvy pod sebou a nabízí služby vrstvě nad sebou. Aby si zařízení různých výrobců rozuměla, řídí se vrstvy společnými **standardy**.

## Standardizace v počítačových sítích

**Standard (norma)** = veřejný dokument, který přesně popisuje technologii (formát rámců, hlavičky, napětí, konektory). Díky němu spolu funguje karta jednoho výrobce a switch jiného.

- **De jure** („podle práva“) – vydá normalizační organizace po schválení. Např. ISO/OSI, IEEE 802.
- **De facto** („podle skutečnosti“) – prosadí se používáním. Např. TCP/IP (z ARPANETu).
- **Otevřené** – zdarma pro každého; **proprietární** – jednoho výrobce (např. Cisco EIGRP).

### Normalizační organizace

| Organizace | Čím se zabývá |
| --- | --- |
| **ISO** | mezinárodní normy; model OSI (ISO 7498) |
| **IEEE** | lokální sítě – řada **802** |
| **IETF** | protokoly Internetu, dokumenty **RFC** |
| **IANA** | bloky IP adres, čísla portů, kořenová zóna DNS |
| **ITU-T** | telekomunikace – modemy, ISDN, X.25 |
| **EIA/TIA** | strukturovaná kabeláž, T568A/B, kategorie kabelů |
| **ANSI** | americké normy, např. FDDI |
| **ICANN** | doménová jména a adresní prostor Internetu |

### Nejdůležitější normy IEEE 802

| Norma | Obsah |
| --- | --- |
| 802.1 | propojování sítí: 802.1D (STP), 802.1Q (VLAN), 802.1X (ověřování na portu) |
| 802.2 | podvrstva LLC |
| 802.3 | Ethernet |
| 802.5 | Token Ring |
| 802.11 | Wi-Fi |
| 802.15 | WPAN (802.15.1 = Bluetooth) |
| 802.16 | WiMAX |

## Proč vrstvy

Složitý proces rozdělený na jednodušší části je pružnější. Do vrstvy patří úzce související činnosti.

- Každá vrstva má jasné funkce a rozhraní k sousedům.
- Protokol vrstvy lze **vyměnit bez dopadu na ostatní** – aplikace funguje přes Ethernet, optiku i Wi-Fi.
- **Stejné vrstvy** dvou systémů spolu mluví **protokolem** své vrstvy.
- **Společný jazyk** – „switch pracuje na 2. vrstvě“.

## Referenční model ISO/OSI

**OSI** (Open Systems Interconnection) od ISO, norma **ISO 7498** z roku **1984**. **Sedm vrstev**; nepředepisuje implementaci, jen principy. V praxi vyhrál TCP/IP, OSI slouží jako **referenční** model pro popis sítí.

![Vrstvy ISO/OSI vedle vrstev TCP/IP s datovou jednotkou, adresou a zařízením každé vrstvy](/images/content/it/pocitacove-site/iso-osi/osi-tcpip.webp)

| Č. | Vrstva | Úkol | PDU | Adresa | Zařízení |
| --- | --- | --- | --- | --- | --- |
| 7 | aplikační | síťové služby pro aplikace | data | – | brána, firewall |
| 6 | prezentační | kódování, komprese, šifrování | data | – | – |
| 5 | relační | navázání, udržení a ukončení relace | data | – | – |
| 4 | transportní | přenos mezi koncovými uzly, segmenty | segment / datagram | port | firewall |
| 3 | síťová | logické adresy, směrování | paket | IP | router |
| 2 | linková | rámce mezi sousedy, přístup k médiu, chyby | rámec | MAC | switch, bridge, karta |
| 1 | fyzická | bity jako signály | bit | – | hub, opakovač, kabely |

Vrstvy 1–3 = **přenos dat**, 4 = **přizpůsobovací**, 5–7 = **podpora aplikací**. Dole hardware, nahoře software. Pomůcka zdola: **F-L-S-T-R-P-A**.

### 1. Fyzická vrstva

Přenáší bity tak, aby je příjemce správně rozpoznal; význam jim nedává.

- Aktivuje, udržuje a ruší fyzické spojení (dvoubodové i mnohobodové).
- Definuje piny konektorů, napětí, kabely a jejich max. délku, kódování 0 a 1.
- Modulace, linkové kódování, synchronizace, sériový/paralelní přenos, simplex/half/full duplex – viz [signály a přenosový kanál](/it/pocitacove-site/05-informace-signaly-a-prenosovy-kanal/).
- Zařízení: **hub, opakovač**, transceiver, kabely, konektory (RJ-45, ST/SC).

### 2. Linková (spojová) vrstva

- Spojení dvou **sousedních** zařízení v jedné LAN.
- Skládá bity do **rámců**, pozná jejich začátek, konec a části.
- Přidává **MAC adresu** odesílatele a příjemce.
- Kontrolním součtem **detekuje chyby** a vadné rámce zahodí; řídí přístup k médiu.
- Podvrstvy: **LLC** (software, ovladač; určuje protokol vyšší vrstvy, řízení toku) a **MAC** (hardware; adresy, přístup k médiu).
- Zařízení: **switch, bridge**, síťová karta. Tvoří broadcastovou doménu.

### 3. Síťová vrstva

- **Směrování** – hledá cestu přes mezilehlé uzly; každý uzel rozhodne, komu paket pošle dál.
- **Logické (hierarchické) adresy** – IP = část sítě + část zařízení.
- Překlenuje rozdíly mezi sítěmi, hlásí chyby doručení.
- Protokoly **IP, ICMP, ARP**, RARP, IGMP, směrovací. Jednotka **paket**, zařízení **router**.

### 4. Transportní vrstva

- Přenos **mezi koncovými uzly** (end-to-end); dělí data na **segmenty** a u příjemce je skládá ve správném pořadí.
- **Porty** určují, které aplikaci data patří.
- **TCP** – spojovaný, spolehlivý (opakuje ztracené, hlídá pořadí): soubory, e-mail, web. **UDP** – nespojovaný, bez záruk, ale rychlý: DNS, VoIP, stream, hry.

Podrobně viz [protokoly TCP/IP](/it/pocitacove-site/03-protokoly-tcp-ip/).

### 5. Relační vrstva

- Řídí **dialog** mezi oběma stranami.
- **Naváže a ukončí relaci**, synchronizuje ji a po výpadku obnoví (synchronizační značky).
- Např. relace prohlížeče se serverem, přihlášení.
- NetBIOS, RPC, SMB, AppleTalk; SSL/TLS sem nebo do 6. vrstvy.

### 6. Prezentační vrstva

- Stejné bity mohou různé systémy chápat různě (kódování znaků, pořadí bajtů).
- Proto **převádí data do tvaru pro aplikaci**: kódy, pořadí bajtů, **komprese**, **šifrování**.
- Řeší jen **strukturu** dat, ne význam.
- Formáty: ASCII, Unicode, JPEG, PNG, GIF, MP3, MP4, MIME.

### 7. Aplikační vrstva

- Zpřístupňuje síť aplikacím: soubory, tisk, e-mail, web, databáze.
- Je odstíněná od hardwaru sítě.
- Protokoly: HTTP(S), FTP, SSH, Telnet, DNS, DHCP, TFTP, SNMP, SMTP, POP3, IMAP, LDAP, BitTorrent.

## Zapouzdření

Při odesílání každá vrstva přidá k datům svou **hlavičku** (linková i zápatí s kontrolním součtem FCS) a předá je níž – **zapouzdření** (encapsulation). Jednotka dat vrstvy = **PDU**.

![Zapouzdření: k datům se postupně přidává hlavička TCP, IP a nakonec MAC hlavička a zápatí FCS](/images/content/it/pocitacove-site/iso-osi/zapouzdreni.webp)

**Odesílatel:** data → segment → paket → rámec → bity

**Příjemce:** bity → rámec → paket → segment → data

Příjemce postupně „své“ hlavičky odstraňuje – **odpouzdření** (decapsulation).

### Adresy na jednotlivých vrstvách

Každá hlavička nese zdrojovou a cílovou adresu své vrstvy:

| Vrstva | Adresa | Co určuje |
| --- | --- | --- |
| transportní | port | aplikaci na zařízení (443 = web) |
| síťová | IP (logická) | zařízení a jeho síť; podle ní se směruje |
| linková | MAC (fyzická) | rozhraní v jedné LAN; na každém routeru se mění |

V odpovědi se adresy prohodí. **IP zůstávají po celé cestě** (pokud je nezmění [NAT](/it/pocitacove-site/14-nat-preklad-adres/)), **MAC platí jen pro jeden úsek**.

## Model TCP/IP

**TCP/IP** = sada protokolů Internetu, pojmenovaná po **TCP** a **IP**. Vznikla v 70. letech pro ARPANET (přechod 1. 1. 1983), nezávislá na médiu, spolehlivost řeší koncové uzly. Standard de facto, popsaný v RFC.

Má **4 vrstvy** (nejnižší se někdy dělí na dvě):

| Vrstva TCP/IP | Vrstvy OSI | Úkol | Protokoly |
| --- | --- | --- | --- |
| aplikační | 7, 6, 5 | služby pro uživatele, kódování, šifrování | HTTP(S), DNS, DHCP, FTP, SMTP, POP3, IMAP, SSH, Telnet, SNMP |
| transportní | 4 | přenos mezi aplikacemi, porty, spolehlivost | TCP, UDP |
| síťová (internetová) | 3 | adresování a směrování | IP, ICMP, ARP, IGMP, IPsec |
| síťového rozhraní | 2, 1 | rámce mezi sousedy, přístup k médiu | Ethernet, Wi-Fi, PPP, HDLC, Frame Relay |

- **Aplikační** = spojené vrstvy 7, 6, 5 OSI. Používá **TCP nebo UDP** (DNS obojí). Aplikace se rozlišují **porty**; spojení určuje IP + protokol + port.
- **Transportní** – **jen v koncových zařízeních**. **Multiplexuje** data více aplikací do jednoho toku a **demultiplexuje** je podle portů; u TCP hlídá ztráty a pořadí.
- **Síťová** – **ve všech prvcích** (routery i koncová zařízení), hledá cestu. Protokol IP, jednotka paket.
- **Síťového rozhraní** – rámce mezi přímo propojenými zařízeními, přístup k médiu; liší se podle technologie.

### Porovnání ISO/OSI a TCP/IP

| | ISO/OSI | TCP/IP |
| --- | --- | --- |
| vrstev | 7 | 4 |
| vznik | teoretický model ISO, 1984 | praktické protokoly ARPANETu, 70. léta |
| standard | de jure | de facto (RFC) |
| použití | referenční model, výuka | skutečný Internet i LAN |
| transport | spojovaný i nespojovaný | TCP (spojovaný), UDP (nespojovaný) |
| relační a prezentační | samostatné vrstvy | součást aplikační |

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
