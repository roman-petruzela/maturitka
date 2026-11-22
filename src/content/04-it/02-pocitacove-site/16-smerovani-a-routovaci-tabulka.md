---
title: "Směrování a routovací tabulka"
order: 16
source: "IT/Datové-sítě.docx"
---

**Směrování** (routing) = hledání cesty datagramu do jiné sítě. Dělají ho **routery** na 3. vrstvě: přečtou cílovou IP, ve **směrovací tabulce** najdou rozhraní a další router a pošlou datagram dál – krok za krokem. Tak funguje celý Internet. Router mezi prvky: [aktivní síťové prvky](/it/pocitacove-site/07-aktivni-sitove-prvky-a-sitova-karta/#směrovač-router).

## Základní pojmy

- **Next hop** – sousední router na cestě.
- **Výchozí brána** – router, přes který jdou počítače ven (do Internetu).
- **Směrovaný protokol** – co se směruje (IP). **Směrovací protokol** – jak si routery vyměňují trasy (RIP, OSPF, EIGRP, BGP).
- **Metrika** – „cena“ cesty, vyhraje nejmenší.
- **Administrativní vzdálenost (AD)** – důvěryhodnost zdroje trasy, 0–255.
- **Konvergence** – všechny routery mají shodné aktuální tabulky.

## Směrovací tabulka

Má ji každý uzel – router i počítač (Windows `route print`, Linux `ip route`). Záznam obsahuje **cílovou síť s maskou**, **next hop** (nebo „přímo připojeno“), **výstupní rozhraní**, **zdroj** trasy s **AD** a **metrikou**.

### Jak router zpracuje datagram

1. Přečte **cílovou IP**.
2. Najde všechny vyhovující záznamy a vybere **nejdelší prefix** (longest prefix match).
3. Pošle rozhraním dalšímu routeru (nebo přímo cíli).
4. Nic nevyhovuje → **výchozí trasa** 0.0.0.0/0; bez ní datagram zahodí a pošle ICMP „cíl nedostupný“.

![Router R1 se třemi trasami: výchozí 0.0.0.0/0 k poskytovateli, 172.16.0.0/16 k R2 a 172.16.5.0/24 k R3; adresa 172.16.5.9 jde k R3, 172.16.9.1 k R2, 8.8.8.8 k poskytovateli](/images/content/it/pocitacove-site/smerovani/longest-match.webp)

- **172.16.5.9** vyhovuje /0, /16 i /24 → **/24** → R3.
- **172.16.9.1** vyhovuje /0 a /16 → R2.
- **8.8.8.8** vyhovuje jen výchozí trase → poskytovatel.

## Statické a dynamické směrování

- **Statické** – trasy zapisuje ručně správce: `ip route 192.168.2.0 255.255.255.0 10.0.0.2`. Bez zátěže a bezpečné, ale pracné a nereaguje na výpadek; jen pro **malé sítě**.
- **Výchozí trasa** – vše neznámé jedním směrem (okraj sítě s jednou linkou k ISP): `ip route 0.0.0.0 0.0.0.0 10.0.0.1`.
- **Dynamické** – routery si trasy **vyměňují samy** směrovacím protokolem: posílají aktualizace, počítají nejlepší cestu a při výpadku najdou jinou. Šetří práci, ale zatěžuje router a linky.

## Metrika a administrativní vzdálenost

**Metrika** porovnává cesty **v rámci jednoho protokolu**: počet skoků (RIP), šířka pásma, zpoždění, cena (OSPF). **AD** rozhoduje mezi **různými zdroji** téže trasy: **nejmenší AD** vyhrává, pak teprve metrika.

| Zdroj trasy | AD |
| --- | --- |
| přímo připojená | 0 |
| statická | 1 |
| EIGRP | 90 |
| OSPF | 110 |
| RIP | 120 |

## Druhy směrovacích protokolů

- **Autonomní systém (AS)** – sítě pod jednou správou (ISP, velká firma). **IGP** směruje **uvnitř** AS (RIP, OSPF, EIGRP), **EGP** **mezi** AS – dnes jen **BGP**.
- **Vektor vzdálenosti (distance-vector)** – router zná jen vzdálenost a směr, sousedům pravidelně posílá **celou tabulku**; pomalá konvergence, hrozí smyčky (ochrana: split horizon, route poisoning, hold-down). **RIP**.
- **Stav linek (link-state)** – router zná **celou topologii**, rozešle info o svých linkách a z databáze spočítá nejkratší cesty **Dijkstrovým algoritmem (SPF)**; rychlá konvergence, víc paměti a výkonu. **OSPF**.
- **Třídní** (RIPv1) neposílají masku, **beztřídní** (RIPv2, OSPF, EIGRP) podporují [CIDR a VLSM](/it/pocitacove-site/13-cidr-podsitovani-a-vlsm/).

### Nejpoužívanější protokoly

- **RIP** – distance-vector, metrika **počet skoků, max. 15** (16 = nedostupné), celá tabulka každých **30 s**, UDP 520. RIPv2 je beztřídní a posílá multicastem. Jednoduchý, ale pomalý – malé sítě.
- **EIGRP** – pokročilý distance-vector od **Cisca**, rychlá konvergence, metrika z šířky pásma a zpoždění, aktualizace jen při změně.
- **OSPF** – otevřený **link-state** pro velké sítě; metrika **cena** $= 10^8 / \text{šířka pásma v b/s}$; sousedství přes **Hello** (každých 10 s), síť se dělí na **oblasti** kolem páteřní **oblasti 0**.
- **BGP** – **vnější** protokol mezi AS (poskytovateli), **path-vector** (ohlašuje cestu přes AS), řídí se **politikou**, TCP 179; drží pohromadě Internet.

| Protokol | Typ | Metrika | Použití |
| --- | --- | --- | --- |
| RIPv2 | distance-vector | skoky (max. 15) | malé sítě |
| EIGRP | pokročilý DV | pásmo + zpoždění | sítě Cisco |
| OSPF | link-state | cena z rychlosti | střední a velké |
| BGP | path-vector, EGP | politika | mezi AS |

Konfigurace v simulátoru: [Cisco Packet Tracer](/it/pocitacove-site/22-cisco-packet-tracer/#základní-statické-routování).

## Otázky k opakování

1. Co obsahuje záznam ve směrovací tabulce? ||cílovou síť s maskou, next hop nebo přímé připojení, výstupní rozhraní, zdroj, AD a metriku||
2. Podle čeho router vybere záznam, když cílové adrese vyhovuje více záznamů? ||podle nejdelšího prefixu||
3. K čemu je výchozí trasa? ||použije se pro všechny cíle, které router nezná; 0.0.0.0/0||
4. Porovnejte statické a dynamické směrování. ||statické: ruční, bez režie, bezpečné, ale pracné a nereaguje na výpadky; dynamické: automatické, přizpůsobí se změnám, ale zatěžuje router a linky||
5. Jaký je rozdíl mezi metrikou a administrativní vzdáleností? ||metrika porovnává cesty v rámci jednoho protokolu, AD důvěryhodnost různých zdrojů||
6. Router zná cestu ze statické trasy i z OSPF. Kterou použije? ||statickou – AD 1, OSPF 110||
7. Čím se liší distance-vector a link-state? ||distance-vector zná vzdálenost a směr a posílá tabulky sousedům; link-state zná celou topologii a cesty počítá algoritmem SPF||
8. Kolik skoků smí mít cesta u RIP a jak často posílá aktualizace? ||max. 15; každých 30 s||
9. Proč se OSPF dělí na oblasti? ||aby se omezila zátěž výpočtem SPF a velikost databáze; páteřní je oblast 0||
10. Co je autonomní systém a který protokol mezi nimi směruje? ||skupina sítí pod jednou správou; BGP||
