---
title: "Počítačové sítě – rozcestník"
order: -1
---

Rozcestník kategorie: o čem předmět je, kdy se podle ŠVP učí, co si z něj určitě zapamatovat, kde je které téma a které maturitní okruhy pokrývá.

## O předmětu

- Jak se počítače a další zařízení propojují, jak si vyměňují data a jak se síť navrhuje, nastavuje, zabezpečuje a opravuje.
- Postupuje „zdola nahoru“ po vrstvách síťového modelu: signály a kabely → Ethernet a switche → IP adresy a směrování → protokoly a služby (DNS, DHCP, web, pošta).
- Teorie se procvičuje prakticky: zapojení strukturované kabeláže, konfigurace switchů a routerů Cisco, simulace v Packet Traceru, diagnostika utilitami TCP/IP.
- Je základem pro [operační systémy](/it/#operacni-systemy) (síťové služby serverů) a [kybernetickou bezpečnost](/it/#kyberneticka-bezpecnost).

## Ročníky a hodiny podle ŠVP

| Ročník | Hodin týdně | Obsah (ŠVP §4.9.4) |
| --- | --- | --- |
| 2. | 1 | Booleova algebra; základní pojmy: útlum, šířka pásma, sériový a paralelní přenos, zabezpečovací kódy, komprese, modulace, multiplex, přepojování okruhů a paketů |
| 3. | 1 (33 h za rok) | členění sítí, ISO/OSI a TCP/IP, technické vybavení LAN, TCP/IP a adresování, diagnostika, bezpečnost – podrobně v [tematickém plánu](/it/pocitacove-site/00-tematicky-plan/) |
| 4. | 2 | bezdrátové technologie, připojení počítače k síti a síťové služby, návrh a realizace jednoduché sítě se serverem, opakování |

Plné znění výstupů je v [přehledu ŠVP](/it/reference/svp-prehled/#494-počítačové-sítě). Síťové služby 4. ročníku (DHCP, DNS, sdílení, SSH, server) prakticky rozebírá kategorie [operační systémy](/it/#operacni-systemy).

## Co si určitě zapamatovat

- **Vrstvy ISO/OSI** zdola: fyzická, linková, síťová, transportní, relační, prezentační, aplikační. **TCP/IP** má 4: síťového rozhraní, síťová, transportní, aplikační.
- **PDU**: bit → rámec (MAC adresa, switch) → paket (IP adresa, router) → segment (port; TCP/UDP) → data.
- **TCP** je spojovaný a spolehlivý (three-way handshake SYN, SYN+ACK, ACK), **UDP** nespojovaný a rychlý. Porty: 20/21 FTP, 22 SSH, 23 Telnet, 25 SMTP, 53 DNS, 67/68 DHCP, 80 HTTP, 110 POP3, 143 IMAP, 443 HTTPS.
- **DHCP** přiděluje adresu, masku, bránu a DNS postupem **DORA** (Discover, Offer, Request, Ack). **ARP** zjistí MAC adresu k IP adrese. **DNS** překládá jména na adresy (port 53, hierarchie kořen → TLD → doména).
- **MAC adresa** 48 bitů (první 3 bajty OUI výrobce), broadcast `FF-FF-FF-FF-FF-FF`. **IPv4** 32 bitů, **IPv6** 128 bitů.
- Třídy IPv4: A 1–126 (/8), B 128–191 (/16), C 192–223 (/24), D multicast 224–239, E 240–255. Počet hostů $2^{n}-2$.
- **NetID** = část zařízení samé nuly, **broadcast** = samé jedničky; velikost bloku = 256 − hodnota masky v oktetu.
- **Privátní adresy**: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16; loopback 127.0.0.1 a ::1; APIPA 169.254.0.0/16. Do Internetu je přeloží **NAT/PAT**.
- **Ethernet**: rámec 64–1 518 B (data 46–1 500 B, MTU 1 500), CSMA/CD jen v polovičním duplexu; kroucená dvoulinka max. **100 m**, Cat 5e pro 1 Gb/s, Cat 6A pro 10 Gb/s. **Wi-Fi** používá CSMA/CA.
- **Hub** – 1. vrstva, jedna kolizní doména; **switch** – 2. vrstva, tabulka MAC, kolizní doména na port; **router** – 3. vrstva, směrovací tabulka, odděluje broadcastové domény.
- **TTL** se na každém routeru sníží o 1, při 0 se datagram zahodí (na tom stojí tracert). Router volí trasu s **nejdelším prefixem**, mezi zdroji s nejnižší AD (statická 1, OSPF 110, RIP 120).
- Přepojování **okruhů** = vyhrazená kapacita (telefon), **paketů** = sdílené linky (Internet); multiplex frekvenční, časový, statistický, vlnový.

## Témata kategorie

**Základy a modely**

- [Počítačové sítě – definice, dělení, topologie a přístupové metody](/it/pocitacove-site/01-pocitacove-site-definice-pojmy-deleni-topologie-pristupove-metody/)
- [Standardizace, referenční model ISO/OSI a TCP/IP](/it/pocitacove-site/02-standardizace-model-iso-osi-a-tcp-ip/)
- [Protokoly TCP/IP](/it/pocitacove-site/03-protokoly-tcp-ip/)
- [Internet](/it/pocitacove-site/04-internet/)
- [Informace, signály a přenosový kanál](/it/pocitacove-site/05-informace-signaly-a-prenosovy-kanal/)

**Hardware a lokální sítě**

- [Pasivní síťové prvky a kabeláž](/it/pocitacove-site/06-pasivni-sitove-prvky-a-kabelaz/)
- [Aktivní síťové prvky, síťová karta a MAC adresa](/it/pocitacove-site/07-aktivni-sitove-prvky-a-sitova-karta/)
- [Ethernet a LAN](/it/pocitacove-site/08-ethernet-a-lan/)
- [Přepínání: hierarchický model, STP a VLAN](/it/pocitacove-site/09-prepinani-stp-a-vlan/)
- [Bezdrátové sítě a Wi-Fi](/it/pocitacove-site/10-bezdratove-site-wi-fi/)

**Síťová vrstva a adresování**

- [Síťová vrstva, IP protokol a IPv4 datagram](/it/pocitacove-site/11-ip-protokol-a-ipv4-datagram/)
- [IPv4 adresování](/it/pocitacove-site/12-ipv4-adresovani/)
- [Nedostatek adres IPv4, CIDR, podsíťování a VLSM](/it/pocitacove-site/13-cidr-podsitovani-a-vlsm/)
- [NAT – překlad síťových adres](/it/pocitacove-site/14-nat-preklad-adres/)
- [IPv6 adresování](/it/pocitacove-site/15-ipv6-adresovani/)
- [Směrování a routovací tabulka](/it/pocitacove-site/16-smerovani-a-routovaci-tabulka/)

**Služby, rozlehlé sítě a provoz**

- [DNS – systém doménových jmen](/it/pocitacove-site/17-dns-system-domenovych-jmen/)
- [WAN technologie a připojení k Internetu](/it/pocitacove-site/18-wan-technologie/)
- [Technická dokumentace sítě](/it/pocitacove-site/19-technicka-dokumentace-site/)
- [Bezpečnost, správa a diagnostika sítě](/it/pocitacove-site/20-bezpecnost-sprava-a-diagnostika-site/)

**Praxe a doplňky**

- [Základní příkazy Cisco IOS](/it/pocitacove-site/21-zakladni-prikazy-cisco-ios-pro-spravu-smerovacu-a-prepinacu/)
- [Praktická konfigurace sítě v Cisco Packet Tracer](/it/pocitacove-site/22-cisco-packet-tracer/)
- [Booleova algebra a logické funkce](/it/pocitacove-site/23-booleova-algebra-a-logicke-funkce/)

## Maturitní okruhy

Kompletní seznam je v [maturitních okruzích IT](/it/reference/maturitni-okruhy/). Této kategorie se týkají okruhy 1–6:

| Okruh | Stránky |
| --- | --- |
| [1) Počítačová síť](/it/reference/maturitni-okruhy/#1-počítačová-síť) | [definice, dělení, výpočetní model](/it/pocitacove-site/01-pocitacove-site-definice-pojmy-deleni-topologie-pristupove-metody/), [technická dokumentace](/it/pocitacove-site/19-technicka-dokumentace-site/) |
| [2) Síťový model](/it/reference/maturitni-okruhy/#2-síťový-model) | [standardizace, ISO/OSI a TCP/IP](/it/pocitacove-site/02-standardizace-model-iso-osi-a-tcp-ip/), [protokoly](/it/pocitacove-site/03-protokoly-tcp-ip/), [datagram a rozbor paketu](/it/pocitacove-site/11-ip-protokol-a-ipv4-datagram/) |
| [3) IP adresace IPv4 a IPv6](/it/reference/maturitni-okruhy/#3-ip-adresace-ipv4-a-ipv6) | [IPv4](/it/pocitacove-site/12-ipv4-adresovani/), [CIDR a VLSM](/it/pocitacove-site/13-cidr-podsitovani-a-vlsm/), [IPv6](/it/pocitacove-site/15-ipv6-adresovani/), [DHCP](/it/pocitacove-site/03-protokoly-tcp-ip/#dhcp-dynamic-host-configuration-protocol) |
| [4) Routování mezi sítěmi, provoz globální sítě](/it/reference/maturitni-okruhy/#4-routování-mezi-sítěmi-provoz-globální-sítě) | [směrování](/it/pocitacove-site/16-smerovani-a-routovaci-tabulka/), [NAT](/it/pocitacove-site/14-nat-preklad-adres/), [DNS](/it/pocitacove-site/17-dns-system-domenovych-jmen/), [Internet a IoT](/it/pocitacove-site/04-internet/) |
| [5) Informace v počítačových sítích](/it/reference/maturitni-okruhy/#5-informace-v-počítačových-sítích) | [informace, signály a přenosový kanál](/it/pocitacove-site/05-informace-signaly-a-prenosovy-kanal/) |
| [6) Hardware počítačových sítí a Ethernet](/it/reference/maturitni-okruhy/#6-hardware-počítačových-sítí-a-ethernet) | [pasivní prvky](/it/pocitacove-site/06-pasivni-sitove-prvky-a-kabelaz/), [aktivní prvky a MAC](/it/pocitacove-site/07-aktivni-sitove-prvky-a-sitova-karta/), [Ethernet](/it/pocitacove-site/08-ethernet-a-lan/) |

Síťová témata se objevují i v okruzích kybernetické bezpečnosti (útoky na síť, DNS, protokoly vzdáleného přístupu) – viz [bezpečnost, správa a diagnostika](/it/pocitacove-site/20-bezpecnost-sprava-a-diagnostika-site/).

## Cvičné písemky

Otázky tří písemek k maturitním okruhům (body v závorce). U každé otázky je odkaz na stránku s odpovědí.

**Okruhy 1 a 2 – počítačová síť a síťový model**

1. Definujte počítačovou síť. (1 b) – [definice](/it/pocitacove-site/01-pocitacove-site-definice-pojmy-deleni-topologie-pristupove-metody/#co-je-počítačová-síť)
2. Rozdělte počítačové sítě. (5 b) – [dělení sítí](/it/pocitacove-site/01-pocitacove-site-definice-pojmy-deleni-topologie-pristupove-metody/#dělení-počítačových-sítí)
3. Jaké druhy topologií počítačových sítí máme? (2 b) – [topologie](/it/pocitacove-site/01-pocitacove-site-definice-pojmy-deleni-topologie-pristupove-metody/#topologie-sítě)
4. Zakreslete tři nejčastější fyzické topologie sítí. (3 b)
5. Jaké výpočtové modely (přístupy k počítači) znáte? (3 b) – [výpočetní model](/it/pocitacove-site/01-pocitacove-site-definice-pojmy-deleni-topologie-pristupove-metody/#výpočetní-model--role-uzlů-v-síti)
6. Zakreslete schematické značky technické dokumentace sítě (datová zásuvka, kabeláž, průchodka zdí, průchodka stropem / podlahou…). (5 b) – [technická dokumentace](/it/pocitacove-site/19-technicka-dokumentace-site/)
7. Jaké náležitosti musí mít technická dokumentace? (12 b) – [technická dokumentace](/it/pocitacove-site/19-technicka-dokumentace-site/)
8. Jaké standardy znáte? (4 b) – [standardizace](/it/pocitacove-site/02-standardizace-model-iso-osi-a-tcp-ip/#standardizace-v-počítačových-sítích)
9. Zakreslete všechny vrstvy ISO/OSI a porovnejte je s TCP/IP. (11 b) – [ISO/OSI a TCP/IP](/it/pocitacove-site/02-standardizace-model-iso-osi-a-tcp-ip/)
10. Co je linkový broadcast, na které vrstvě se s ním setkáme a které zařízení s ním pracuje? (3 b) – [Ethernet a LAN](/it/pocitacove-site/08-ethernet-a-lan/)
11. Který protokol zjistí MAC adresu vzdáleného počítače? (1 b) – [protokoly TCP/IP](/it/pocitacove-site/03-protokoly-tcp-ip/)
12. Na které vrstvě se směruje a které zařízení to provádí? (2 b) – [směrování](/it/pocitacove-site/16-smerovani-a-routovaci-tabulka/)
13. Co znamenají zkratky DHCP, DNS a FTP a kde se tyto protokoly používají? (6 b) – [protokoly TCP/IP](/it/pocitacove-site/03-protokoly-tcp-ip/)

**Okruhy 3 a 4 – IP adresace a routování**

1. Jaké jsou třídy IP adres a jejich vlastnosti? (10 b) – [třídy adres](/it/pocitacove-site/12-ipv4-adresovani/#třídy-ip-adres)
2. K čemu slouží DHCP server, co musí být nastaveno a co znamená zkratka? (5 b) – [DHCP](/it/pocitacove-site/03-protokoly-tcp-ip/#dhcp-dynamic-host-configuration-protocol)
3. Uveďte rozsahy privátních IP adres ve všech třídách. (3 b) – [privátní adresy](/it/pocitacove-site/12-ipv4-adresovani/#veřejné-a-privátní-adresy)
4. Co znamená unicast, broadcast a anycast a ve které verzi IP existují? (6 b) – [druhy vysílání](/it/pocitacove-site/12-ipv4-adresovani/#druhy-vysílání), [IPv6](/it/pocitacove-site/15-ipv6-adresovani/)
5. Co je CIDR? Uveďte příklad IP adresy. (2 b) – [CIDR](/it/pocitacove-site/13-cidr-podsitovani-a-vlsm/)
6. Uveďte příklad IPv6 adresy. (2 b) – [IPv6](/it/pocitacove-site/15-ipv6-adresovani/)
7. Spočítejte masku, NetID a broadcast pro adresu 1.2.3.4, má-li síť pojmout 129 počítačů. (3 b) – ||129 zařízení potřebuje 8 bitů pro zařízení ($2^8 - 2 = 254$, sedm bitů by dalo jen 126), maska /24 = 255.255.255.0, NetID 1.2.3.0, broadcast 1.2.3.255||
8. Jaký aktivní prvek propojuje sítě? Napište jeho vlastnosti. (3 b) – [aktivní prvky](/it/pocitacove-site/07-aktivni-sitove-prvky-a-sitova-karta/#přehled-aktivních-prvků)
9. Jaké údaje obsahuje routovací tabulka? (7 b) – [routovací tabulka](/it/pocitacove-site/16-smerovani-a-routovaci-tabulka/)
10. Co znamenají zkratky NAT a PAT, jaké jsou varianty? Uveďte příklad. (4 b) – [NAT](/it/pocitacove-site/14-nat-preklad-adres/)
11. Co znamená DNS, jak služba pracuje a jaké jsou typy záznamů? Uveďte příklad. (3 b) – [DNS](/it/pocitacove-site/17-dns-system-domenovych-jmen/)
12. Jak chápete pojem Internet věcí? (bez bodů) – [Internet věcí](/it/pocitacove-site/04-internet/#internet-věcí-iot)

**Okruhy 2, 5 a bezpečnost – protokoly a přenos informace**

1. Vyjmenujte nejdůležitější položky hlavičky IPv4 a jejich význam. (5 b) – [hlavička IPv4](/it/pocitacove-site/11-ip-protokol-a-ipv4-datagram/#hlavička-ipv4-datagramu)
2. Co znamená TCP a které služby ho používají? (5 b) – [protokoly TCP/IP](/it/pocitacove-site/03-protokoly-tcp-ip/)
3. Počítač pošle `ping czc.cz` a s cílem ještě nekomunikoval – co se stane, aby odpověď došla zpět? (4 b) – [DNS](/it/pocitacove-site/17-dns-system-domenovych-jmen/), [ARP](/it/pocitacove-site/08-ethernet-a-lan/), [ICMP](/it/pocitacove-site/11-ip-protokol-a-ipv4-datagram/#icmp)
4. Jaké programy a příkazy použijete k analýze provozu v síti? (4 b) – [diagnostika](/it/pocitacove-site/20-bezpecnost-sprava-a-diagnostika-site/#diagnostika-sítě)
5. Jaké šifrovací protokoly znáte a které služby je používají? (4 b) – [bezpečnost sítě](/it/pocitacove-site/20-bezpecnost-sprava-a-diagnostika-site/)
6. Co je asymetrická šifra? (2 b) – [šifrování](/it/kyberneticka-bezpecnost/01-zaklady-a-utoky/#symetrické-a-asymetrické-šifrování)
7. Co všechno je potřeba na počítačové síti zabezpečit? (8 b) – [bezpečnost sítě](/it/pocitacove-site/20-bezpecnost-sprava-a-diagnostika-site/)
8. Jaký je rozdíl mezi daty a informacemi? (2 b) – [informace a data](/it/pocitacove-site/05-informace-signaly-a-prenosovy-kanal/#informace-a-data)
9. Nakreslete a popište analogový a digitální signál. (4 b) – [signál](/it/pocitacove-site/05-informace-signaly-a-prenosovy-kanal/#signál)
10. Popište nebo zakreslete paralelní a sériový přenos dat. (4 b) – [způsoby přenosu](/it/pocitacove-site/05-informace-signaly-a-prenosovy-kanal/#způsoby-přenosu)
11. Jaké druhy multiplexingu znáte? (3 b) – [multiplex](/it/pocitacove-site/05-informace-signaly-a-prenosovy-kanal/#multiplex)
12. Zakreslete frekvenční multiplex. (2 b) – [multiplex](/it/pocitacove-site/05-informace-signaly-a-prenosovy-kanal/#multiplex)
13. Zakreslete všechny typy modulace. (4 b) – [modulace](/it/pocitacove-site/05-informace-signaly-a-prenosovy-kanal/#modulace)

## Co je jen okrajové

- **Historické technologie** – koaxiální Ethernet (10BASE5, 10BASE2), Token Ring, FDDI, X.25, Frame Relay, ATM, ISDN: stačí vědět, co byly a čím je nahradily.
- **Podrobnosti přepínání** – stavy portů STP, VTP, EtherChannel: nad rámec maturitních okruhů, hodí se k praxi.
- **Detaily směrovacích protokolů** (typy paketů EIGRP, oblasti OSPF, BGP) – stačí rozlišit statické a dynamické směrování, distance-vector a link-state a znát RIP a OSPF.
- **Příkazová karta Cisco IOS** – referenční přehled k laboratorním cvičením, ne k učení nazpaměť.
- **Booleova algebra** – patří do 2. ročníku podle ŠVP, ale v maturitních okruzích není.
- Hlavičky TCP, DHCP a IPv6 pole po poli – stačí vědět, k čemu slouží nejdůležitější pole (porty, příznaky, TTL, Protocol, adresy).
