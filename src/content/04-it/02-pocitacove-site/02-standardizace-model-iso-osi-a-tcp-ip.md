---
title: "Standardizace, referenční model ISO/OSI a TCP/IP"
order: 2
source: "IT/12. ISOOSI, TCPIP, síťové protokoly.docx; site/Model_ISO_OSI_TCP_IP_NEW_2025.pdf; IT/Datové-sítě.docx"
---

Komunikace po síti se dělí do **vrstev** – každá řeší jen svou část, využívá služeb vrstvy pod sebou a nabízí služby vrstvě nad sebou. Aby si zařízení různých výrobců rozuměla, řídí se **standardy**.

## Standardizace v počítačových sítích

**Standard (norma)** = veřejný dokument, který přesně popisuje technologii (formát rámců, napětí, konektory). Díky němu spolu funguje karta jednoho výrobce a switch jiného.

- **De jure** – vydá normalizační organizace po schválení (ISO/OSI, IEEE 802).
- **De facto** – prosadí se používáním (TCP/IP z ARPANETu).
- **Otevřený** standard je zdarma pro každého, **proprietární** patří jednomu výrobci (Cisco EIGRP).

| Organizace | Čím se zabývá |
| --- | --- |
| **ISO** | mezinárodní normy, model OSI |
| **IEEE** | lokální sítě – řada **802** (802.3 Ethernet, 802.11 Wi-Fi, 802.1Q VLAN, 802.1D STP) |
| **IETF** | protokoly Internetu, dokumenty **RFC** |
| **IANA / ICANN** | IP adresy, čísla portů, domény |
| **ITU-T** | telekomunikace |
| **EIA/TIA** | strukturovaná kabeláž |

## Referenční model ISO/OSI

**OSI** (Open Systems Interconnection) vydalo ISO v roce **1984**. Má **sedm vrstev** a nepředepisuje implementaci, jen principy. V praxi vyhrál TCP/IP, OSI zůstalo **referenčním** modelem pro popis sítí. Díky vrstvám lze protokol jedné vrstvy **vyměnit bez dopadu na ostatní** (aplikace funguje přes Ethernet, optiku i Wi-Fi) a stejné vrstvy dvou systémů spolu mluví svým **protokolem**.

![Vrstvy ISO/OSI vedle vrstev TCP/IP s datovou jednotkou, adresou a zařízením každé vrstvy](/images/content/it/pocitacove-site/iso-osi/osi-tcpip.webp)

| Č. | Vrstva | Úkol | PDU | Adresa | Zařízení |
| --- | --- | --- | --- | --- | --- |
| 7 | aplikační | síťové služby pro aplikace | data | – | brána, firewall |
| 6 | prezentační | kódování, komprese, šifrování | data | – | – |
| 5 | relační | navázání, udržení a ukončení relace | data | – | – |
| 4 | transportní | přenos mezi koncovými uzly | segment | port | – |
| 3 | síťová | logické adresy, směrování | paket | IP | router |
| 2 | linková | rámce mezi sousedy, přístup k médiu | rámec | MAC | switch, karta |
| 1 | fyzická | bity jako signály | bit | – | hub, kabely |

Vrstvy 1–3 zajišťují **přenos dat**, 5–7 **podporu aplikací**. Pomůcka zdola: **F-L-S-T-R-P-A**.

- **1. Fyzická** – přenáší bity jako signál (napětí, světlo, vlny); definuje konektory, kabely, kódování. Viz [signály a přenosový kanál](/it/pocitacove-site/05-informace-signaly-a-prenosovy-kanal/).
- **2. Linková** – spojení dvou **sousedních** zařízení v jedné LAN. Skládá bity do **rámců**, přidává **MAC adresy**, kontrolním součtem **detekuje chyby**, řídí přístup k médiu. Podvrstvy **LLC** a **MAC**.
- **3. Síťová** – **směrování** přes mezilehlé uzly a **logické adresy** (IP = část sítě + část zařízení). Protokoly **IP, ICMP, ARP**.
- **4. Transportní** – přenos **mezi koncovými uzly**; dělí data na segmenty, **porty** určují aplikaci. **TCP** (spolehlivý) a **UDP** (rychlý).
- **5. Relační** – řídí **dialog**: naváže, synchronizuje a ukončí relaci (SMB, RPC).
- **6. Prezentační** – převádí data do tvaru pro aplikaci: kódování znaků, **komprese**, **šifrování** (ASCII, JPEG, TLS).
- **7. Aplikační** – zpřístupňuje síť aplikacím: HTTP, FTP, SMTP, DNS, DHCP, SSH.

## Zapouzdření

Při odesílání každá vrstva přidá k datům svou **hlavičku** (linková i zápatí s kontrolním součtem FCS) a předá je níž – **zapouzdření**. Příjemce hlavičky postupně odstraňuje (**odpouzdření**). Jednotka dat vrstvy se jmenuje **PDU**.

![Zapouzdření: k datům se postupně přidává hlavička TCP, IP a nakonec MAC hlavička a zápatí FCS](/images/content/it/pocitacove-site/iso-osi/zapouzdreni.webp)

Odesílatel: data → segment → paket → rámec → bity.

| Vrstva | Adresa | Co určuje |
| --- | --- | --- |
| transportní | port | aplikaci na zařízení (443 = web) |
| síťová | IP | zařízení a jeho síť; podle ní se směruje |
| linková | MAC | rozhraní v jedné LAN |

**IP adresy zůstávají po celé cestě** (pokud je nezmění [NAT](/it/pocitacove-site/14-nat-preklad-adres/)), **MAC adresy platí jen pro jeden úsek** a na každém routeru se mění.

## Model TCP/IP

**TCP/IP** je sada protokolů Internetu, vznikla v 70. letech pro ARPANET. Je to standard **de facto** (RFC). Má **4 vrstvy**:

| Vrstva TCP/IP | Vrstvy OSI | Protokoly |
| --- | --- | --- |
| aplikační | 7, 6, 5 | HTTP(S), DNS, DHCP, FTP, SMTP, SSH |
| transportní | 4 | TCP, UDP |
| síťová (internetová) | 3 | IP, ICMP, ARP |
| síťového rozhraní | 2, 1 | Ethernet, Wi-Fi, PPP |

- **Transportní** vrstva je jen v **koncových zařízeních**, **síťová** i v routerech.
- Aplikace se rozlišují **porty**; spojení určuje IP + protokol + port.

| | ISO/OSI | TCP/IP |
| --- | --- | --- |
| vrstev | 7 | 4 |
| vznik | teoretický model, 1984 | praktické protokoly ARPANETu |
| standard | de jure | de facto (RFC) |
| použití | referenční model, výuka | skutečný Internet |

## Otázky k opakování

1. Jaký je rozdíl mezi standardem de jure a de facto? ||de jure vydá normalizační organizace (ISO/OSI, IEEE 802.3); de facto se prosadí používáním (TCP/IP)||
2. Co upravují normy IEEE 802.3 a IEEE 802.11? ||Ethernet; Wi-Fi||
3. Vyjmenujte vrstvy modelu ISO/OSI od nejnižší. ||fyzická, linková, síťová, transportní, relační, prezentační, aplikační||
4. Na které vrstvě pracuje hub, switch a router a s jakými adresami? ||hub na fyzické (žádné adresy), switch na linkové (MAC), router na síťové (IP)||
5. Co je zapouzdření a jak se jmenují PDU na vrstvách 4, 3, 2 a 1? ||každá vrstva přidá k datům svou hlavičku; segment, paket, rámec, bit||
6. Která adresa se během cesty paketu mění a která ne? ||MAC se mění na každém úseku, IP zůstávají (pokud je nepřekládá NAT)||
7. Kterým vrstvám OSI odpovídá aplikační vrstva TCP/IP a vrstva síťového rozhraní? ||aplikační 7, 6, 5; síťového rozhraní 2 a 1||
8. Proč je transportní vrstva jen v koncových zařízeních? ||router potřebuje jen IP adresu, aby paket poslal dál; spojení mezi aplikacemi řeší až koncové uzly||
