---
title: "Síťová vrstva, IP protokol a IPv4 datagram"
order: 11
source: "site/IT3_IPv4_protokol.pdf; IT/Datové-sítě.docx"
---

**Síťová vrstva** doručí data do cílového zařízení i přes mnoho cizích sítí a routerů. Hlavní protokol je **IP**, jednotka **paket** (u IP **datagram**). Adresám se věnuje [IPv4 adresování](/it/pocitacove-site/12-ipv4-adresovani/).

## Úkoly síťové vrstvy

1. **Adresování** – každé rozhraní má logickou **IP adresu**.
2. **Zapouzdření** – k segmentu přidá hlavičku s IP odesílatele a příjemce.
3. **Směrování** – routery podle tabulek posílají paket dál, viz [směrování](/it/pocitacove-site/16-smerovani-a-routovaci-tabulka/).
4. **Rozbalení** – v cíli se hlavička odstraní a data jdou transportní vrstvě.

## Vlastnosti protokolu IP

- **Datagramová služba** – každý datagram jde samostatně, bez spojení, i různými cestami.
- **„Best effort“** – **nezaručuje** doručení, pořadí ani nepoškozenost; nepotvrzuje. Spolehlivost řeší TCP, chyby hlásí ICMP.
- Nezávislý na médiu (Ethernet, Wi-Fi, optika, mobilní síť).
- **IPv4** – 32bitové adresy (1981), **IPv6** – 128bitové, viz [IPv6](/it/pocitacove-site/15-ipv6-adresovani/).

## Hlavička IPv4 datagramu

**20 B** (bez voleb) až **60 B**, po řádcích po 32 bitech:

![Hlavička IPv4 po 32bitových řádcích: Version, IHL, ToS, Total Length; Identification, Flags, Fragment Offset; TTL, Protocol, Checksum; zdrojová a cílová adresa; volby](/images/content/it/pocitacove-site/ipv4-datagram/hlavicka.webp)

| Pole | Bitů | Význam |
| --- | --- | --- |
| **Version** | 4 | verze, u IPv4 = 4 |
| **IHL** | 4 | délka hlavičky v 32b slovech: 5 (20 B) až 15 (60 B) |
| **Type of Service** | 8 | priorita / QoS (DSCP + ECN) |
| **Total Length** | 16 | délka celého datagramu, max. 65 535 B |
| **Identification** | 16 | číslo datagramu; fragmenty mají stejné |
| **Flags** | 3 | 0, **DF** (nefragmentovat), **MF** (další fragmenty následují) |
| **Fragment Offset** | 13 | pozice fragmentu v násobcích 8 B |
| **TTL** | 8 | kolik routerů ještě smí projít |
| **Protocol** | 8 | co je uvnitř: 1 ICMP, 6 TCP, 17 UDP, 88 EIGRP, 89 OSPF |
| **Header Checksum** | 16 | součet **jen hlavičky**, router ho přepočítá |
| **Source Address** | 32 | IP odesílatele |
| **Destination Address** | 32 | IP příjemce |
| **Options** | prom. | volby (záznam trasy, časová razítka); vzácné |
| **Padding** | prom. | výplň na celé 32b slovo |

### Time to Live (TTL)

Chrání síť před datagramy, které by kvůli chybě směrování kroužily donekonečna.

- Každý router sníží TTL **o 1** → TTL = **max. počet přeskoků** (původně sekundy).
- Výchozí: **64** Linux/macOS, **128** Windows, **255** síťová zařízení (max., pole má 8 b).
- TTL = **0** → router datagram **zahodí** a pošle ICMP **Time Exceeded** (typ 11).

**tracert** (`traceroute`) posílá datagramy s TTL 1, 2, 3… – každý router, kde TTL vyprší, se ozve. Vznikne seznam routerů na cestě i se zpožděním.

### Fragmentace

**MTU** = největší datagram, který linka přenese (Ethernet **1 500 B**). Větší datagram router rozdělí na **fragmenty** – stejné Identification, vlastní Offset a MF. Skládá je až **cíl**. Data každého fragmentu (kromě posledního) musí být dělitelná 8.

Při **DF** = 1 router nefragmentuje, datagram zahodí a pošle ICMP „nutná fragmentace“. Toho využívá Path MTU Discovery, proto se dnes fragmentace skoro nepoužívá.

**Příklad – fragmentace.** Datagram 4 000 B (hlavička 20 + data 3 980 B), MTU 1 500 B.

1. Dat na fragment: 1 500 − 20 = 1 480 B (dělitelné 8 ✓).
2. 3 980 = 1 480 + 1 480 + 1 020 B.
3. Offset = bajt / 8: 0, 185, 370.

| Fragment | Total Length | Data | MF | Offset |
| --- | --- | --- | --- | --- |
| 1 | 1 500 B | 1 480 B (0–1 479) | 1 | 0 |
| 2 | 1 500 B | 1 480 B (1 480–2 959) | 1 | 185 |
| 3 | 1 040 B | 1 020 B (2 960–3 979) | 0 | 370 |

### Co dělá router s každým datagramem

1. Přijme rámec, ověří FCS, vybalí datagram.
2. Ověří checksum hlavičky; vadný zahodí.
3. TTL − 1; při 0 zahodí + ICMP Time Exceeded.
4. Přepočítá checksum.
5. Podle cílové IP najde v tabulce rozhraní a next hop; bez cesty zahodí + ICMP Destination Unreachable.
6. Je-li větší než MTU, fragmentuje (pokud nemá DF).
7. Zabalí do nového rámce s **novými MAC** a odešle.

IP adresy se cestou nemění (pokud je nepřeloží [NAT](/it/pocitacove-site/14-nat-preklad-adres/)).

## Rozbor paketu

**Wireshark** zobrazí paket šestnáctkově i rozepsaný po polích. Hlavička IPv4:

```
45 00 00 3c 1c 46 40 00 40 06 b1 e6 ac 10 0a 63 ac 10 0a 0c
```

Rozbor pole po poli:

| Bajty | Hodnota | Pole | Význam |
| --- | --- | --- | --- |
| 1 | `45` | Version, IHL | IPv4; 5 × 4 = 20 B hlavička |
| 2 | `00` | ToS | běžná priorita |
| 3–4 | `00 3c` | Total Length | 60 B → 40 B dat |
| 5–6 | `1c 46` | Identification | 7 238 |
| 7–8 | `40 00` | Flags, Offset | DF = 1, MF = 0, offset 0 |
| 9 | `40` | TTL | 64 → nejspíš Linux, zatím bez routeru |
| 10 | `06` | Protocol | TCP |
| 11–12 | `b1 e6` | Checksum | součet hlavičky |
| 13–16 | `ac 10 0a 63` | Source | 172.16.10.99 |
| 17–20 | `ac 10 0a 0c` | Destination | 172.16.10.12 |

Převod: `ac` = 10·16 + 12 = 172, `10` = 16, `0a` = 10, `63` = 99. Obě adresy jsou privátní (172.16.0.0/12) → provoz uvnitř LAN.

Filtry Wiresharku: `ip.addr == 172.16.10.12`, `tcp.port == 443`, `dns`. Cizí provoz se bez souhlasu správce zachytávat nesmí.

### Druhy datagramů

- **Podle obsahu** (Protocol): TCP, UDP, ICMP, směrovací protokol (OSPF, EIGRP).
- **Podle adresáta**: **unicast** (jeden), **broadcast** (všichni v síti; 255.255.255.255 nebo broadcast sítě), **multicast** (skupina, 224.0.0.0–239.255.255.255). IPv6 nemá broadcast, má navíc **anycast** (nejbližší z více zařízení).
- **Podle verze**: IPv4 – hlavička 20–60 B; IPv6 – pevných 40 B, bez checksumu a fragmentačních polí.
- **Celý datagram nebo fragment** (MF, offset).

## ICMP

**ICMP** – pomocný protokol síťové vrstvy přímo v IP (Protocol = 1); chybová hlášení a diagnostika.

| Typ | Zpráva | Použití |
| --- | --- | --- |
| 0 | Echo Reply | odpověď na ping |
| 3 | Destination Unreachable | síť / počítač / port nedostupný; nutná fragmentace |
| 5 | Redirect | lepší cesta |
| 8 | Echo Request | ping |
| 11 | Time Exceeded | TTL = 0; tracert |

**Ping** pošle Echo Request, čeká na Echo Reply: ukáže dostupnost, odezvu (RTT) a TTL. Firewall může ICMP blokovat – ping pak selže i u funkčního zařízení.

## Otázky k opakování

1. Jaké čtyři úkoly plní síťová vrstva? ||adresování, zapouzdření, směrování, rozbalení u příjemce||
2. Proč se o IP říká, že doručuje „best effort“? ||nezaručuje doručení, pořadí ani nepoškozenost dat; spolehlivost řeší vyšší vrstvy||
3. Jak dlouhá je hlavička IPv4 a které pole to udává? ||20 až 60 B; pole IHL v 32bitových slovech||
4. Co je TTL, jak se mění a co se stane při nule? ||počet routerů, které datagram ještě smí projít; každý router ho sníží o 1; při 0 se datagram zahodí a odesílatel dostane ICMP Time Exceeded||
5. Proč nemůže být TTL větší než 255? ||pole má 8 bitů||
6. Jak funguje tracert? ||posílá datagramy s TTL 1, 2, 3, …; každý router, kde TTL vyprší, se ozve zprávou Time Exceeded||
7. Datagram 3 000 B (hlavička 20 B) jde linkou s MTU 1 500 B. Jaké budou fragmenty? ||data 2 980 B: 1 480 B (posun 0, MF 1), 1 480 B (posun 185, MF 1), 20 B (posun 370, MF 0)||
8. Co znamená hodnota 6 a 17 v poli Protocol? ||TCP a UDP||
9. Proč router přepočítává kontrolní součet hlavičky? ||mění TTL, a tím se mění i hlavička||
10. Které ICMP zprávy používá ping? ||Echo Request (typ 8) a Echo Reply (typ 0)||
