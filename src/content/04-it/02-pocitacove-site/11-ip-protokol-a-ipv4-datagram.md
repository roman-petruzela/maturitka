---
title: "Síťová vrstva, IP protokol a IPv4 datagram"
order: 11
source: "site/IT3_IPv4_protokol.pdf; IT/Datové-sítě.docx"
---

**Síťová vrstva** zajišťuje doručení dat do cílového zařízení, které může ležet v úplně jiné síti, přes libovolný počet mezilehlých sítí a routerů. Jejím hlavním protokolem je **IP** (Internet Protocol) a jednotkou dat **paket**, u IP nazývaný **datagram**. Tato stránka popisuje, co síťová vrstva dělá, jak vypadá hlavička IPv4 datagramu, jak funguje TTL a fragmentace, a na příkladu ukazuje rozbor skutečné hlavičky. Adresám se věnuje stránka [IPv4 adresování](/it/pocitacove-site/12-ipv4-adresovani/).

## Úkoly síťové vrstvy

1. **Adresování** – každé síťové rozhraní má přidělenou logickou **IP adresu**, podle které lze data směrovat.
2. **Zapouzdření** – k datům (segmentu) z transportní vrstvy se přidá hlavička s IP adresou odesílatele a příjemce a vzniklý paket se předá linkové vrstvě.
3. **Směrování** – routery podle svých směrovacích tabulek rozhodnou, kam paket pošlou dál, viz [směrování a routovací tabulka](/it/pocitacove-site/16-smerovani-a-routovaci-tabulka/).
4. **Rozbalení** – až v cílovém zařízení se hlavička odstraní a data se předají transportní vrstvě.

## Vlastnosti protokolu IP

- IP poskytuje **datagramovou službu**: každý datagram se doručuje samostatně, bez navázání spojení, a různé datagramy mohou jít různými cestami.
- Doručuje „**best effort**“ – snaží se, ale **nezaručuje** doručení, správné pořadí, nepoškozenost dat ani odstranění duplicit. Nepotvrzuje příjem a chyby neopravuje. Spolehlivost zajišťují vyšší vrstvy (TCP) a chyby hlásí protokol ICMP.
- Je nezávislý na přenosovém médiu – stejný datagram projde Ethernetem, Wi-Fi, optikou i mobilní sítí.
- Existují dvě verze: **IPv4** s 32bitovými adresami (od roku 1981) a **IPv6** se 128bitovými adresami, viz [IPv6](/it/pocitacove-site/15-ipv6-adresovani/).

## Hlavička IPv4 datagramu

Hlavička má **nejméně 20 bajtů** (bez volitelných položek) a nejvýše 60 bajtů. Zapisuje se po řádcích širokých 32 bitů:

| Pole | Bitů | Význam |
| --- | --- | --- |
| **Version** | 4 | verze protokolu, u IPv4 hodnota 4 |
| **IHL** (Internet Header Length) | 4 | délka hlavičky v 32bitových slovech (násobcích 4 B): nejméně 5 (20 B), nejvýše 15 (60 B) |
| **Type of Service** (DSCP + ECN) | 8 | požadovaná kvalita služby (priorita, zpoždění, spolehlivost); dnes se používá pro QoS, dlouho zůstávalo nevyužito |
| **Total Length** | 16 | délka celého datagramu včetně dat, nejvýše 65 535 B |
| **Identification** | 16 | číslo datagramu, které vkládá operační systém odesílatele; všechny fragmenty jednoho datagramu mají stejné |
| **Flags** | 3 | 1. bit vždy 0; 2. bit **DF** (Don't Fragment) = 1 – fragmentace zakázána; 3. bit **MF** (More Fragments) = 1 – nejde o poslední fragment |
| **Fragment Offset** | 13 | umístění fragmentu v původním datagramu, v násobcích 8 B |
| **Time to Live** (TTL) | 8 | životnost datagramu – kolik routerů ještě smí projít |
| **Protocol** | 8 | protokol vyšší vrstvy zabalený v datech: 1 = ICMP, 6 = TCP, 17 = UDP, 88 = EIGRP, 89 = OSPF |
| **Header Checksum** | 16 | kontrolní součet **jen hlavičky**; každý router ho po změně TTL přepočítá |
| **Source Address** | 32 | IP adresa odesílatele |
| **Destination Address** | 32 | IP adresa příjemce |
| **Options** | proměnná | volitelné položky (záznam trasy, časová razítka, bezpečnost); málo využívané |
| **Padding** | proměnná | výplň nulami, aby hlavička měla délku celých 32bitových slov |

### Time to Live (TTL)

TTL chrání síť před datagramy, které by kvůli chybě ve směrování kroužily donekonečna.

- Norma ho původně definovala jako čas v sekundách, v praxi ale každý router sníží TTL **o 1**, takže znamená **maximální počet přeskoků** (hops) přes routery.
- Výchozí hodnotu nastavuje operační systém odesílatele: obvykle **64** (Linux, macOS), **128** (Windows) nebo **255** (síťová zařízení). Nejvyšší možná hodnota je 255, protože pole má 8 bitů.
- Když TTL klesne na **0**, router datagram **zahodí** a odesílateli pošle zprávu ICMP **Time Exceeded** (typ 11).

Na tomto principu pracuje příkaz **tracert** (Linux `traceroute`): pošle datagram s TTL = 1, první router ho zahodí a ozve se; pak s TTL = 2 a tak dál, dokud neodpoví cíl. Z odpovědí se sestaví seznam routerů na cestě i se zpožděním ke každému z nich.

### Fragmentace

Každá síťová technologie má **MTU** (Maximum Transmission Unit) – největší velikost datagramu, kterou umí přenést v jednom rámci; u Ethernetu je to **1 500 B**. Pokud je datagram větší než MTU další linky, router ho rozdělí na **fragmenty**. Každý fragment dostane vlastní hlavičku se stejnou hodnotou Identification, posunem (Fragment Offset) a příznakem MF; fragmenty se skládají až v **cílovém** zařízení. Data každého fragmentu kromě posledního musí mít délku dělitelnou 8.

Je-li nastaven příznak **DF**, router datagram nefragmentuje, ale zahodí a pošle zpět ICMP zprávu „je potřeba fragmentace“. Toho využívá zjišťování MTU celé cesty (Path MTU Discovery), díky němuž se dnes fragmentace téměř nepoužívá.

**Příklad – fragmentace.** Datagram o celkové délce 4 000 B (hlavička 20 B + data 3 980 B) má projít linkou s MTU 1 500 B.

1. Do jednoho fragmentu se vejde 1 500 − 20 = 1 480 B dat; 1 480 je dělitelné 8, takže to lze použít.
2. 3 980 B dat se rozdělí na 1 480 + 1 480 + 1 020 B.
3. Posun se udává v násobcích 8 B: 0 / 8 = 0, 1 480 / 8 = 185, 2 960 / 8 = 370.

| Fragment | Total Length | Data | MF | Fragment Offset |
| --- | --- | --- | --- | --- |
| 1 | 1 500 B | 1 480 B (bajty 0–1 479) | 1 | 0 |
| 2 | 1 500 B | 1 480 B (bajty 1 480–2 959) | 1 | 185 |
| 3 | 1 040 B | 1 020 B (bajty 2 960–3 979) | 0 | 370 |

Všechny tři fragmenty mají stejné Identification. Příjemce podle posunu pozná pořadí a podle MF = 0 poslední fragment.

### Co dělá router s každým datagramem

1. Přijme rámec, ověří jeho FCS a vybalí z něj datagram.
2. Zkontroluje kontrolní součet hlavičky; vadný datagram zahodí.
3. Sníží TTL o 1; při nule datagram zahodí a pošle ICMP Time Exceeded.
4. Přepočítá kontrolní součet hlavičky.
5. Podle cílové adresy najde ve směrovací tabulce výstupní rozhraní a další router (next hop); když cestu nenajde, datagram zahodí a pošle ICMP Destination Unreachable.
6. Je-li datagram větší než MTU výstupní linky, rozdělí ho na fragmenty (pokud to DF dovolí).
7. Zabalí datagram do nového rámce s novými MAC adresami a odešle ho.

IP adresy odesílatele a příjemce se cestou nemění (pokud je nepřeloží [NAT](/it/pocitacove-site/14-nat-preklad-adres/)).

## Rozbor paketu

Programy pro zachytávání provozu, například **Wireshark**, ukazují obsah paketu jako šestnáctková čísla a k nim rozpis jednotlivých polí. Hlavička IPv4 v šestnáctkové soustavě:

```
45 00 00 3c 1c 46 40 00 40 06 b1 e6 ac 10 0a 63 ac 10 0a 0c
```

Rozbor pole po poli:

| Bajty | Hodnota | Pole | Význam |
| --- | --- | --- | --- |
| 1 | `45` | Version, IHL | verze 4; IHL 5 × 4 B = hlavička 20 B (bez voleb) |
| 2 | `00` | Type of Service | běžná priorita |
| 3–4 | `00 3c` | Total Length | 0x3C = 60 B celkem, tedy 40 B dat za hlavičkou |
| 5–6 | `1c 46` | Identification | 0x1C46 = 7 238 |
| 7–8 | `40 00` | Flags, Fragment Offset | binárně `010…`: DF = 1 (nefragmentovat), MF = 0, posun 0 |
| 9 | `40` | TTL | 0x40 = 64 – odesílatel je nejspíš Linux a datagram ještě neprošel žádným routerem |
| 10 | `06` | Protocol | 6 = TCP; v datech je tedy TCP segment |
| 11–12 | `b1 e6` | Header Checksum | kontrolní součet hlavičky |
| 13–16 | `ac 10 0a 63` | Source Address | 172.16.10.99 |
| 17–20 | `ac 10 0a 0c` | Destination Address | 172.16.10.12 |

Převod adresy: `ac` = 10·16 + 12 = 172, `10` = 16, `0a` = 10, `63` = 6·16 + 3 = 99. Obě adresy patří do privátního rozsahu 172.16.0.0/12, komunikace tedy probíhá uvnitř lokální sítě.

Wireshark umí provoz filtrovat (např. `ip.addr == 172.16.10.12`, `tcp.port == 443`, `dns`) a sledovat celé spojení. Slouží při hledání chyb v síti, ale bez souhlasu správce sítě se cizí provoz zachytávat nesmí.

### Druhy datagramů

- **Podle obsahu** (pole Protocol): datagram nese TCP segment, UDP datagram, ICMP zprávu nebo zprávu směrovacího protokolu (OSPF, EIGRP).
- **Podle adresáta**: **unicast** (jednomu zařízení), **broadcast** (všem v síti; omezený na adresu 255.255.255.255 nebo směrovaný na broadcastovou adresu určité sítě) a **multicast** (skupině zařízení, adresy 224.0.0.0–239.255.255.255). V IPv6 broadcast není, nahrazuje ho multicast; přibyl **anycast** (nejbližšímu z více zařízení se stejnou adresou).
- **Podle verze**: IPv4 datagram s proměnnou hlavičkou 20–60 B, IPv6 datagram s pevnou hlavičkou 40 B bez kontrolního součtu a bez polí pro fragmentaci.
- **Celý datagram nebo fragment** (podle příznaku MF a posunu).

## ICMP

**ICMP** (Internet Control Message Protocol) je pomocný protokol síťové vrstvy, zapouzdřený přímo v IP datagramu (Protocol = 1). Přenáší chybová hlášení a diagnostické dotazy.

| Typ | Zpráva | Použití |
| --- | --- | --- |
| 0 | Echo Reply – odpověď na ozvěnu | odpověď na ping |
| 3 | Destination Unreachable – cíl nedostupný | síť, počítač nebo port nedostupný; nutná fragmentace |
| 5 | Redirect – přesměrování | router upozorní na lepší cestu |
| 8 | Echo Request – žádost o ozvěnu | ping |
| 11 | Time Exceeded – vypršel čas | TTL kleslo na nulu; využívá tracert |

**Ping** pošle cíli zprávu Echo Request a čeká na Echo Reply; ukáže, zda je cíl dostupný, dobu odezvy (RTT) a TTL přijaté odpovědi. Ping může selhat i u funkčního zařízení, pokud ICMP blokuje firewall.

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
