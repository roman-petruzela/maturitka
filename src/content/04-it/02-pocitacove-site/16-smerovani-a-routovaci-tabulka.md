---
title: "Směrování a routovací tabulka"
order: 16
source: "IT/Datové-sítě.docx"
---

**Směrování** (routing) = hledání cesty datagramu do jiné sítě. Dělají ho **routery** na 3. vrstvě: přečtou cílovou IP, ve **směrovací tabulce** najdou rozhraní a další router a pošlou datagram dál – krok za krokem (hop by hop). Tak vzniká i celý Internet. Router mezi prvky: [aktivní síťové prvky](/it/pocitacove-site/07-aktivni-sitove-prvky-a-sitova-karta/#směrovač-router).

## Základní pojmy

- **Router (směrovač)** – propojuje sítě, hledá nejlepší cestu.
- **Routing** – přeposílání (forwarding) mezi sítěmi a výběr cesty.
- **Route (trasa)** – cesta k cílové síti v tabulce.
- **Next hop** – sousední router na cestě.
- **Směrovaný protokol** (routed) – co se směruje: IP (dříve IPX, AppleTalk).
- **Směrovací protokol** (routing) – jak si routery vyměňují trasy: RIP, OSPF, EIGRP, BGP.
- **Metrika** – „cena“ cesty; vyhraje nejmenší.
- **Administrativní vzdálenost (AD)** – důvěryhodnost zdroje trasy, 0–255.
- **Konvergence** – všechny routery mají shodné aktuální tabulky; čím rychleji, tím lépe.
- **Výchozí brána** – router, přes který jdou počítače ven (do Internetu).

Router potřebuje znát: cílovou adresu, sousedy, možné trasy, nejlepší trasu a jak informace udržovat aktuální.

## Směrovací tabulka

Má ji každý uzel – router i počítač (Windows `route print`, Linux `ip route`). Směruje se podle **cílové** adresy. Záznam obsahuje:

- **cílovou síť** + masku,
- **next hop** (nebo „přímo připojeno“),
- **výstupní rozhraní**,
- **zdroj** trasy s **AD** a **metrikou**.

### Jak router zpracuje datagram

1. Přijme rámec; neznámý protokol zahodí.
2. Přečte **cílovou IP**.
3. Najde všechny vyhovující záznamy.
4. Vybere **nejdelší prefix** (longest prefix match).
5. Pošle rozhraním dalšímu routeru (nebo přímo cíli).
6. Nic nevyhovuje → **výchozí trasa** 0.0.0.0/0; bez ní zahodí + ICMP „cíl nedostupný“.

### Řešený příklad – nejdelší shoda

![Router R1 se třemi trasami: výchozí 0.0.0.0/0 k poskytovateli, 172.16.0.0/16 k R2 a 172.16.5.0/24 k R3; adresa 172.16.5.9 jde k R3, 172.16.9.1 k R2, 8.8.8.8 k poskytovateli](/images/content/it/pocitacove-site/smerovani/longest-match.webp)

| Cílová síť | Next hop |
| --- | --- |
| 0.0.0.0/0 | 10.0.0.1 (poskytovatel) |
| 172.16.0.0/16 | 10.0.1.2 (R2) |
| 172.16.5.0/24 | 10.0.2.2 (R3) |

- **172.16.5.9** – vyhovuje /0, /16 i /24 → **/24** → R3.
- **172.16.9.1** – /0 a /16 → R2.
- **8.8.8.8** – jen výchozí → poskytovatel.

### Výpis směrovací tabulky na routeru Cisco

`show ip route`; písmeno = zdroj trasy:

```
Gateway of last resort is 10.0.0.2 to network 0.0.0.0

C     10.0.0.0/30 is directly connected, Serial0/0/0
L     10.0.0.1/32 is directly connected, Serial0/0/0
C     192.168.1.0/24 is directly connected, GigabitEthernet0/0
L     192.168.1.1/32 is directly connected, GigabitEthernet0/0
S     192.168.2.0/24 [1/0] via 10.0.0.2
O     172.16.0.0/16 [110/65] via 10.0.0.2, 00:12:31, Serial0/0/0
S*    0.0.0.0/0 [1/0] via 10.0.0.2
```

- **C** přímo připojená, **L** vlastní adresa rozhraní,
- **S** statická, **S\*** výchozí statická,
- **R** RIP, **O** OSPF, **D** EIGRP, **B** BGP,
- `[AD/metrika]`, např. `[110/65]` = OSPF, cena 65.

## Statické a dynamické směrování

### Statické směrování

Trasy zapisuje ručně **správce**.

- Výhody: žádná zátěž routeru ani linek, bezpečné, plná kontrola.
- Nevýhody: snadná chyba, každou síť ručně na všechny routery, při výpadku se cesta nezmění. Jen pro **malé sítě** a jedinou cestu (firma – ISP).

```
Router(config)# ip route 192.168.2.0 255.255.255.0 10.0.0.2
```

= „síť 192.168.2.0/24 je za routerem 10.0.0.2“.

### Výchozí trasa (default route)

Vše neznámé jedním směrem – na **okraji sítě** s jedinou linkou k ISP. Obdoba výchozí brány v PC.

```
Router(config)# ip route 0.0.0.0 0.0.0.0 10.0.0.1
```

### Dynamické směrování

Routery si trasy **vyměňují samy** směrovacími protokoly. Protokol = **datové struktury** (tabulky v RAM) + **algoritmus** (nejlepší cesta) + **zprávy** (sousedé, aktualizace). Úkoly:

1. posílat a přijímat aktualizace,
2. spočítat nejlepší cestu a zapsat ji,
3. zjistit změnu (výpadek) a najít jinou cestu.

Šetří práci a přizpůsobí se výpadkům, ale zatěžuje router a linky a musí se zabezpečit.

## Metrika a administrativní vzdálenost

**Metrika** porovnává cesty **v rámci jednoho protokolu**:

- **počet skoků** (RIP),
- **šířka pásma** – rychlejší linka vyhrává,
- **zpoždění**, **zatížení**, **spolehlivost**,
- **cena** (cost) z rychlosti linky nebo od správce (OSPF, IS-IS).

EIGRP: **složená metrika** z šířky pásma a zpoždění.

**AD** rozhoduje mezi **různými zdroji** téže trasy: **nejmenší AD** vyhrává, pak teprve metrika.

| Zdroj trasy | AD |
| --- | --- |
| přímo připojená | 0 |
| statická | 1 |
| eBGP | 20 |
| EIGRP | 90 |
| OSPF | 110 |
| IS-IS | 115 |
| RIP | 120 |
| iBGP | 200 |
| nedůvěryhodný | 255 (nepoužije se) |

## Druhy směrovacích protokolů

### Vnitřní a vnější

- **Autonomní systém (AS)** – sítě pod jednou správou a politikou (ISP, velká firma), má číslo ASN.
- **IGP** – **uvnitř** AS: RIP, OSPF, EIGRP, IS-IS.
- **EGP** – **mezi** AS: dnes jen **BGP** (drží pohromadě Internet).

### Vektor vzdálenosti (distance-vector)

- Trasa = **vzdálenost** (metrika) + **směr** (next hop).
- Router **nezná topologii** – jen „ukazatele u cesty“.
- Pravidelně posílá **celou tabulku** sousedům.
- Pomalá konvergence, hrozí **smyčky** a „počítání do nekonečna“. Ochrana:
  - **split horizon** – trasu neohlásí zpět tam, odkud ji má,
  - **route poisoning** – nedostupnou síť ohlásí s nekonečnou metrikou (RIP 16),
  - **hold-down timer** – po výpadku chvíli ignoruje horší zprávy.
- Příklady: **RIP**, IGRP; EIGRP = pokročilý distance-vector. **Path-vector** (BGP) ohlašuje celou cestu přes AS.

### Stav linek (link-state)

- Router zná **celou topologii** („mapu“). Info o svých linkách (sítě, adresy, typ, cena, sousedé) rozešle všem v oblasti v **LSA/LSP**.
- Z databáze topologie si sám spočítá nejkratší cesty **Dijkstrovým SPF**.
- Sousedy hlídá pakety **Hello**; LSA jen při změně → **rychlá konvergence**.
- Víc paměti a výkonu → velké sítě se dělí na **oblasti**.
- Příklady: **OSPF**, IS-IS.

### Třídní a beztřídní protokoly

- **Třídní** – neposílají masku, nepodporují VLSM (RIPv1, IGRP).
- **Beztřídní** – posílají masku, podporují [CIDR a VLSM](/it/pocitacove-site/13-cidr-podsitovani-a-vlsm/) (RIPv2, OSPF, EIGRP, IS-IS, BGP).

## Nejpoužívanější směrovací protokoly

### RIP (Routing Information Protocol)

- Distance-vector, metrika **počet skoků**, **max. 15** (16 = nedostupné).
- **UDP 520**, celá tabulka každých **30 s** (+ okamžitá při změně). AD 120.
- **RIPv1** – třídní, broadcast, bez ověřování; záhlaví: Command, Version, Must be Zero.
- **RIPv2** – beztřídní (VLSM, CIDR), multicast **224.0.0.9**, ověřování. IPv6: **RIPng**.
- Jednoduchý, ale plýtvá pásmem, pomalý a nezohledňuje rychlost linek → jen malé sítě.

### EIGRP (Enhanced Interior Gateway Routing Protocol)

- Původně **Cisco** (2013 zveřejněn), nástupce IGRP. Pokročilý distance-vector, **rychlá konvergence** bez smyček (DUAL), VLSM, max. 255 skoků, AD 90.
- **Složená metrika** – šířka pásma + zpoždění.
- Aktualizace **jen při změně** a jen dotčeným. Pakety **Hello**, **Update**, **Query**, **Reply**.
- Tři tabulky: **sousedů**, **topologie** (i záložní cesty), **směrovací** (nejlepší = successor). Záloha (feasible successor) → okamžité přepnutí.
- Jen mezi routery se stejným číslem AS.

### OSPF (Open Shortest Path First)

- Otevřený standard, **link-state**, pro velké sítě; přímo nad IP (protokol 89); AD 110.
- Metrika **cena** $= 10^8 / \text{šířka pásma v b/s}$: 100 Mb/s → 1, 10 Mb/s → 10.
- Bez limitu skoků, VLSM, ověřování, multicast 224.0.0.5 a .6.
- Tři kroky: **sousedství** přes Hello (každých **10 s**, mrtvý po **40 s**) → **zaplavení** oblasti LSA → **výpočet** SPF.
- Sousedé jen se stejnými Hello/Dead intervaly, podsítí, maskou a oblastí.
- **Oblasti** napojené na páteřní **oblast 0**; změna v jedné oblasti nenutí přepočet jinde. Router uvnitř oblasti = **vnitřní**, na hranici = **ABR**.

### BGP (Border Gateway Protocol)

- **Vnější** protokol mezi AS (poskytovateli); jediný dnes používaný EGP.
- **Path-vector**: ohlašuje celou posloupnost AS → bez smyček, řídí se **politikou** (smlouvami), ne nejkratší cestou.
- TCP **179**. **eBGP** mezi AS, **iBGP** uvnitř AS. Tabulka Internetu > 1 milion IPv4 tras.

### Porovnání

| Protokol | Typ | Metrika | Použití | AD |
| --- | --- | --- | --- | --- |
| RIPv2 | distance-vector, IGP | skoky (max. 15) | malé sítě | 120 |
| EIGRP | pokročilý DV, IGP | pásmo + zpoždění | sítě Cisco | 90 |
| OSPF | link-state, IGP | cena z rychlosti | střední a velké | 110 |
| IS-IS | link-state, IGP | cena | poskytovatelé | 115 |
| BGP | path-vector, EGP | atributy, politika | mezi AS | 20 / 200 |

Konfigurace v simulátoru: [Cisco Packet Tracer](/it/pocitacove-site/22-cisco-packet-tracer/#základní-statické-routování).

## Otázky k opakování

1. Co obsahuje záznam ve směrovací tabulce? ||cílovou síť s maskou, next hop nebo informaci o přímém připojení, výstupní rozhraní, zdroj, AD a metriku||
2. Podle čeho router vybere záznam, když cílové adrese vyhovuje více záznamů? ||podle nejdelšího prefixu (nejpřesnější shody)||
3. K čemu je výchozí trasa a jak se zapisuje? ||použije se pro všechny cíle, které router nezná; 0.0.0.0/0||
4. Porovnejte statické a dynamické směrování. ||statické: ruční, bez režie, bezpečné, ale pracné a nereaguje na výpadky; dynamické: automatické, přizpůsobí se změnám, ale zatěžuje router a linky||
5. Jaký je rozdíl mezi metrikou a administrativní vzdáleností? ||metrika porovnává cesty v rámci jednoho protokolu, AD porovnává důvěryhodnost různých zdrojů (protokolů)||
6. Router zná cestu k síti ze statické trasy i z OSPF. Kterou použije? ||statickou – má AD 1, OSPF 110||
7. Čím se liší protokoly distance-vector a link-state? ||distance-vector zná jen vzdálenost a směr a posílá tabulky sousedům; link-state zná celou topologii a cesty si počítá algoritmem SPF||
8. Jaký je maximální počet skoků u RIP a jak často posílá aktualizace? ||15 (16 = nedostupná síť); každých 30 s||
9. Proč se síť OSPF dělí na oblasti a jak se jmenuje páteřní oblast? ||aby se omezila zátěž výpočtem SPF a velikost databáze; oblast 0||
10. Co je autonomní systém a který protokol mezi nimi směruje? ||skupina sítí pod jednou správou s jednou směrovací politikou; BGP||
