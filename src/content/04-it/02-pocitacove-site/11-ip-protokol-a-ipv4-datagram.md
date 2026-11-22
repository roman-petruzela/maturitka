---
title: "Síťová vrstva, IP protokol a IPv4 datagram"
order: 11
source: "site/IT3_IPv4_protokol.pdf; IT/Datové-sítě.docx"
---

**Síťová vrstva** doručí data do cílového zařízení i přes mnoho cizích sítí a routerů. Hlavní protokol je **IP**, jednotka **paket** (u IP **datagram**). Adresy: [IPv4 adresování](/it/pocitacove-site/12-ipv4-adresovani/).

**Úkoly:** **adresování** (logická IP adresa rozhraní), **zapouzdření** (hlavička s IP odesílatele a příjemce), **směrování** (routery podle tabulek, viz [směrování](/it/pocitacove-site/16-smerovani-a-routovaci-tabulka/)) a **rozbalení** v cíli.

## Vlastnosti protokolu IP

- **Datagramová služba** – každý datagram jde samostatně, bez spojení, i různými cestami.
- **„Best effort“** – **nezaručuje** doručení, pořadí ani nepoškozenost. Spolehlivost řeší TCP, chyby hlásí ICMP.
- Nezávislý na médiu. **IPv4** má 32bitové adresy, **IPv6** 128bitové ([IPv6](/it/pocitacove-site/15-ipv6-adresovani/)).

## Hlavička IPv4 datagramu

**20 B** (bez voleb) až **60 B**, po řádcích po 32 bitech:

![Hlavička IPv4 po 32bitových řádcích: Version, IHL, ToS, Total Length; Identification, Flags, Fragment Offset; TTL, Protocol, Checksum; zdrojová a cílová adresa; volby](/images/content/it/pocitacove-site/ipv4-datagram/hlavicka.webp)

| Pole | Bitů | Význam |
| --- | --- | --- |
| **Version** | 4 | verze, u IPv4 = 4 |
| **IHL** | 4 | délka hlavičky v 32b slovech (5 = 20 B) |
| **Type of Service** | 8 | priorita / QoS |
| **Total Length** | 16 | délka celého datagramu, max. 65 535 B |
| **Identification** | 16 | číslo datagramu; fragmenty mají stejné |
| **Flags** | 3 | **DF** (nefragmentovat), **MF** (další fragmenty následují) |
| **Fragment Offset** | 13 | pozice fragmentu v násobcích 8 B |
| **TTL** | 8 | kolik routerů ještě smí projít |
| **Protocol** | 8 | co je uvnitř: 1 ICMP, 6 TCP, 17 UDP |
| **Header Checksum** | 16 | součet **jen hlavičky**, router ho přepočítá |
| **Source / Destination** | 32 + 32 | IP odesílatele a příjemce |

### Time to Live (TTL)

Chrání síť před datagramy, které by kvůli chybě směrování kroužily donekonečna.

- Každý router sníží TTL **o 1**. Výchozí hodnota: **64** Linux, **128** Windows, **255** síťová zařízení.
- TTL = **0** → router datagram **zahodí** a pošle ICMP **Time Exceeded**.
- **tracert** posílá datagramy s TTL 1, 2, 3… – každý router, kde TTL vyprší, se ozve, a tak vznikne seznam routerů na cestě.

### Fragmentace

**MTU** = největší datagram, který linka přenese (Ethernet **1 500 B**). Větší datagram router rozdělí na **fragmenty** (stejné Identification, vlastní Offset a MF), skládá je až **cíl**. Při **DF** = 1 router datagram zahodí a pošle ICMP „nutná fragmentace“.

**Příklad.** Datagram 4 000 B (hlavička 20 + data 3 980 B), MTU 1 500 B → data na fragment 1 480 B (dělitelné 8):

| Fragment | Data | MF | Offset |
| --- | --- | --- | --- |
| 1 | 1 480 B | 1 | 0 |
| 2 | 1 480 B | 1 | 185 |
| 3 | 1 020 B | 0 | 370 |

Router s každým datagramem: ověří checksum, sníží TTL, přepočítá checksum, najde v tabulce next hop a zabalí do nového rámce s **novými MAC**. IP adresy se cestou nemění (pokud je nepřeloží [NAT](/it/pocitacove-site/14-nat-preklad-adres/)).

## Rozbor paketu

Hlavička IPv4 ve **Wiresharku** šestnáctkově:

```
45 00 00 3c 1c 46 40 00 40 06 b1 e6 ac 10 0a 63 ac 10 0a 0c
```

| Bajty | Hodnota | Pole | Význam |
| --- | --- | --- | --- |
| 1 | `45` | Version, IHL | IPv4; 5 × 4 = 20 B hlavička |
| 3–4 | `00 3c` | Total Length | 60 B → 40 B dat |
| 7–8 | `40 00` | Flags, Offset | DF = 1, MF = 0 |
| 9 | `40` | TTL | 64 |
| 10 | `06` | Protocol | TCP |
| 13–16 | `ac 10 0a 63` | Source | 172.16.10.99 |
| 17–20 | `ac 10 0a 0c` | Destination | 172.16.10.12 |

Převod: `ac` = 10·16 + 12 = 172, `0a` = 10, `63` = 99. Obě adresy jsou privátní → provoz uvnitř LAN.

### Druhy datagramů

- **Podle obsahu** (Protocol): TCP, UDP, ICMP, směrovací protokol.
- **Podle adresáta:** **unicast** (jeden), **broadcast** (všichni v síti), **multicast** (skupina). IPv6 nemá broadcast, má **anycast** (nejbližší z více zařízení).
- **Podle verze:** IPv4 – hlavička 20–60 B; IPv6 – pevných 40 B.
- **Celý datagram nebo fragment** (MF, offset).

## ICMP

**ICMP** – pomocný protokol přímo v IP (Protocol = 1) pro chybová hlášení a diagnostiku.

| Typ | Zpráva | Použití |
| --- | --- | --- |
| 0 / 8 | Echo Reply / Request | **ping** |
| 3 | Destination Unreachable | síť, počítač nebo port nedostupný |
| 11 | Time Exceeded | TTL = 0; **tracert** |

Firewall může ICMP blokovat – ping pak selže i u funkčního zařízení.

## Otázky k opakování

1. Jaké čtyři úkoly plní síťová vrstva? ||adresování, zapouzdření, směrování, rozbalení u příjemce||
2. Proč se o IP říká, že doručuje „best effort“? ||nezaručuje doručení, pořadí ani nepoškozenost; spolehlivost řeší vyšší vrstvy||
3. Jak dlouhá je hlavička IPv4 a které pole to udává? ||20 až 60 B; pole IHL||
4. Co je TTL a co se stane při nule? ||počet routerů, které datagram ještě smí projít; každý ho sníží o 1; při 0 se datagram zahodí a přijde ICMP Time Exceeded||
5. Jak funguje tracert? ||posílá datagramy s TTL 1, 2, 3, …; router, kde TTL vyprší, se ozve Time Exceeded||
6. Datagram 3 000 B (hlavička 20 B) jde linkou s MTU 1 500 B. Jaké budou fragmenty? ||data 2 980 B: 1 480 B (posun 0, MF 1), 1 480 B (posun 185, MF 1), 20 B (posun 370, MF 0)||
7. Co znamená hodnota 6 a 17 v poli Protocol? ||TCP a UDP||
8. Které ICMP zprávy používá ping? ||Echo Request (8) a Echo Reply (0)||
