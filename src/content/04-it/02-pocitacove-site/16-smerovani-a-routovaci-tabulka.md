---
title: "Směrování a routovací tabulka"
order: 16
source: "IT/Datové-sítě.docx"
---

**Směrování** (routing) je určování cesty, kterou se datagram dostane od odesílatele k příjemci v jiné síti. Provádějí ho **routery** na síťové vrstvě: každý router přečte cílovou IP adresu, ve své **směrovací (routovací) tabulce** najde, kterým rozhraním a ke kterému sousednímu routeru datagram poslat, a předá ho dál. Tak se datagram krok za krokem (hop by hop) dostane k cíli. Propojením sítí LAN a WAN routery vzniká rozsáhlá datová síť – i celý Internet. Tato stránka vysvětluje směrovací tabulku, statické a dynamické směrování a nejpoužívanější směrovací protokoly. Úlohu routeru mezi síťovými prvky popisuje stránka [aktivní síťové prvky](/it/pocitacove-site/07-aktivni-sitove-prvky-a-sitova-karta/#směrovač-router).

## Základní pojmy

- **Router (směrovač)** – zařízení, které propojuje sítě a hledá optimální cestu do každé z nich.
- **Routing (směrování)** – přeposílání (forwarding) dat mezi sítěmi a výběr cesty.
- **Route (trasa)** – cesta k určité cílové síti zapsaná ve směrovací tabulce.
- **Next hop (další skok)** – sousední router, kterému se datagram předá na cestě k cíli.
- **Směrovaný protokol** (routed) – protokol, jehož pakety se směrují: IP (dříve i IPX, AppleTalk).
- **Směrovací protokol** (routing) – protokol, kterým si routery vyměňují informace o sítích a hledají nejlepší cestu: RIP, OSPF, EIGRP, BGP.
- **Metrika** – číselné vyjádření „ceny“ cesty; z více cest k jedné síti se vybere ta s nejmenší metrikou.
- **Administrativní vzdálenost (AD)** – důvěryhodnost zdroje informace o trase, číslo 0–255.
- **Konvergence** – stav, kdy se všechny routery shodnou na topologii sítě a mají aktuální tabulky; čím rychleji ho síť po změně dosáhne, tím lépe.
- **Výchozí brána** (default gateway) – router, přes který se počítače dostanou do vnější sítě, obvykle do Internetu.

Router pro svou práci potřebuje znát cílovou adresu, sousední routery, od kterých se dozví o vzdálených sítích, možné trasy do všech vzdálených sítí, optimální trasu do každé z nich a způsob, jak tyto informace udržovat aktuální.

## Směrovací tabulka

Směrovací tabulku má každý uzel sítě – router i obyčejný počítač (Windows `route print`, Linux `ip route`). Říká, na které rozhraní a kterému dalšímu routeru poslat datagram podle jeho **cílové** adresy (směrování podle cíle). Každý záznam obsahuje:

- **cílovou síť** a její masku (prefix),
- **next hop** – adresu dalšího routeru, nebo informaci, že je síť připojena přímo,
- **výstupní rozhraní**,
- **zdroj** záznamu (přímo připojená, statická, protokol) s **administrativní vzdáleností** a **metrikou**.

### Jak router zpracuje datagram

1. Přijme rámec a podívá se, jaký protokol nese; protokol, který nezná, zahodí.
2. Z hlavičky IP datagramu přečte **cílovou adresu**.
3. Projde směrovací tabulku a najde všechny záznamy, do jejichž sítě cílová adresa patří.
4. Z nich vybere ten s **nejdelším prefixem** (nejpřesnější shoda, longest prefix match).
5. Datagram pošle příslušným rozhraním dalšímu routeru, nebo přímo cílovému zařízení, je-li síť připojena přímo.
6. Když žádný záznam nevyhovuje, použije **výchozí trasu** (default route, 0.0.0.0/0); nemá-li ani tu, datagram zahodí a pošle odesílateli ICMP „cíl nedostupný“.

### Řešený příklad – nejdelší shoda

Router má v tabulce tyto záznamy:

| Cílová síť | Next hop |
| --- | --- |
| 0.0.0.0/0 | 10.0.0.1 (poskytovatel) |
| 172.16.0.0/16 | 10.0.1.2 (router R2) |
| 172.16.5.0/24 | 10.0.2.2 (router R3) |

- Datagram pro **172.16.5.9** vyhovuje záznamům /0, /16 i /24. Vybere se nejdelší prefix **/24** → pošle se routeru R3.
- Datagram pro **172.16.9.1** vyhovuje /0 a /16 (do 172.16.5.0/24 nepatří) → router R2.
- Datagram pro **8.8.8.8** vyhovuje jen výchozí trase → poskytovatel.

### Výpis směrovací tabulky na routeru Cisco

Příkaz `show ip route` zobrazí tabulku; písmeno na začátku řádku udává zdroj trasy:

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

- **C** – přímo připojená síť (connected), **L** – adresa vlastního rozhraní (local),
- **S** – statická trasa, **S\*** – výchozí statická trasa (gateway of last resort),
- **R** – naučeno protokolem RIP, **O** – OSPF, **D** – EIGRP, **B** – BGP,
- v hranatých závorkách je `[administrativní vzdálenost/metrika]`, např. `[110/65]` = OSPF s cenou 65.

## Statické a dynamické směrování

### Statické směrování

Trasy do směrovací tabulky zapíše ručně **správce**.

- Výhody: žádná zátěž procesoru routeru ani linek (routery si nic nevyměňují), vyšší bezpečnost, plná kontrola nad cestou.
- Nevýhody: správce se může snadno splést; každou novou síť musí ručně doplnit na všechny routery; při výpadku linky se cesta sama nezmění. Hodí se jen pro **malé sítě** a pro spojení s jedinou cestou (např. firma – poskytovatel).

```
Router(config)# ip route 192.168.2.0 255.255.255.0 10.0.0.2
```

Zápis říká: „síť 192.168.2.0/24 je dostupná přes další router 10.0.0.2“.

### Výchozí trasa (default route)

Díky výchozí trase nemusí router znát cestu ke všem sítím – vše, co nezná, pošle jedním směrem. Používá se na **okraji sítě**, kde vede ven jediná linka (k poskytovateli Internetu). Odpovídá výchozí bráně v počítači.

```
Router(config)# ip route 0.0.0.0 0.0.0.0 10.0.0.1
```

### Dynamické směrování

Routery si informace o sítích **vyměňují samy** pomocí směrovacích protokolů a tabulky si sestavují a aktualizují automaticky. Směrovací protokol se skládá z **datových struktur** (tabulky a databáze v RAM), **algoritmu** pro výpočet nejlepší cesty a **zpráv** pro hledání sousedů a výměnu informací. Jeho úkolem je:

1. vysílat a přijímat směrovací aktualizace,
2. vypočítat nejlepší cestu a zapsat ji do směrovací tabulky,
3. zjistit změnu topologie (výpadek linky) a reagovat na ni – najít jinou cestu.

Šetří čas správce a sítě se přizpůsobí výpadkům, ale zatěžují router a linky a je potřeba je zabezpečit.

## Metrika a administrativní vzdálenost

**Metrika** porovnává cesty v rámci jednoho protokolu. Protokoly používají různé metriky:

- **počet skoků** (hops) – počet routerů na cestě (RIP),
- **šířka pásma** – preferuje se rychlejší linka,
- **zpoždění**, **zatížení** linky a **spolehlivost** (podle počtu chyb a výpadků),
- **cena** (cost) – hodnota odvozená z rychlosti linky nebo nastavená správcem (OSPF, IS-IS).

EIGRP používá **složenou metriku** z šířky pásma a zpoždění (volitelně i zatížení a spolehlivosti).

**Administrativní vzdálenost** rozhoduje, když se router o téže síti dozví z **různých zdrojů**. Vybere se trasa s **nejmenší AD**; teprve při stejné AD rozhoduje metrika.

| Zdroj trasy | AD |
| --- | --- |
| přímo připojená síť | 0 |
| statická trasa | 1 |
| eBGP | 20 |
| EIGRP | 90 |
| OSPF | 110 |
| IS-IS | 115 |
| RIP | 120 |
| iBGP | 200 |
| neznámý, nedůvěryhodný zdroj | 255 (trasa se nepoužije) |

## Druhy směrovacích protokolů

### Vnitřní a vnější

- **Autonomní systém (AS)** je skupina sítí a routerů pod jednou správou s jednou směrovací politikou – síť poskytovatele, velké firmy, univerzity. AS má přidělené číslo (ASN).
- **Vnitřní směrovací protokoly (IGP)** směrují **uvnitř** jednoho AS: RIP, OSPF, EIGRP, IS-IS.
- **Vnější směrovací protokoly (EGP)** směrují **mezi** autonomními systémy: dnes jediný **BGP**, který drží pohromadě celý Internet.

### Vektor vzdálenosti (distance-vector)

- Trasy se ohlašují jako **vzdálenost** (metrika, např. počet skoků) a **směr** (další router).
- Router **nezná celou topologii** – ví jen, kterým směrem paket poslat a jak je cíl daleko („podle ukazatelů u cesty“).
- Routery periodicky posílají **celou svou tabulku** sousedům, ti si podle ní upraví vlastní a pošlou ji dál.
- Konvergence je pomalá a hrozí **směrovací smyčky** a „počítání do nekonečna“. Brání se jim:
  - **split horizon** – router neohlásí trasu zpět rozhraním, ze kterého se ji naučil,
  - **route poisoning** – nedostupná síť se ohlásí s nekonečnou metrikou (u RIP 16),
  - **hold-down timer** – po výpadku router chvíli ignoruje horší informace o síti, než se situace uklidní.
- Příklady: **RIP**, IGRP; EIGRP je vylepšený (pokročilý) distance-vector. Upraveným typem je **path-vector** (BGP), který místo vzdálenosti ohlašuje celou posloupnost AS na cestě.

### Stav linek (link-state)

- Každý router zná **celou topologii** oblasti („má mapu“). Informace o svých linkách – adresu a masku přilehlých sítí, adresu svého rozhraní, typ sítě (Ethernet nebo dvoubodová linka), cenu linky a sousední routery – rozešle všem ostatním v oblasti v paketech **LSA/LSP**.
- Z takto získané **databáze topologie** si každý router sám spočítá nejkratší cesty **Dijkstrovým algoritmem SPF** (Shortest Path First) – strom nejkratších cest se sebou jako kořenem.
- Sousedy hledá a hlídá pakety **Hello**. LSA se posílají jen při změně a obsahují jen ji, takže síť **konverguje rychle**.
- Spotřebuje více paměti a výkonu routeru; velké sítě se proto dělí do **oblastí**.
- Příklady: **OSPF**, IS-IS.

### Třídní a beztřídní protokoly

- **Třídní** (classful) protokoly neposílají v aktualizacích masku – předpokládají masku podle třídy adresy. Nepodporují VLSM ani nesouvislé podsítě (RIPv1, IGRP).
- **Beztřídní** (classless) protokoly posílají s každou sítí i masku, takže podporují [CIDR a VLSM](/it/pocitacove-site/13-cidr-podsitovani-a-vlsm/) (RIPv2, OSPF, EIGRP, IS-IS, BGP).

## Nejpoužívanější směrovací protokoly

### RIP (Routing Information Protocol)

- Distance-vector, metrikou je **počet skoků**; **nejvýše 15 skoků**, metrika 16 znamená nedostupnou síť.
- Běží nad **UDP, port 520**. Každých **30 s** posílá sousedům celou tabulku; při změně přímo připojené sítě posílá i okamžitou (spouštěnou) aktualizaci. AD je 120.
- **RIPv1** je třídní, aktualizace posílá broadcastem a nepodporuje ověřování. Zpráva má čtyřbajtové záhlaví se třemi poli: Command (typ zprávy), Version (1) a Must be Zero (rezerva).
- **RIPv2** je beztřídní (posílá masku, podporuje VLSM a CIDR), aktualizace posílá na multicastovou adresu **224.0.0.9** a podporuje ověřování. Pro IPv6 existuje **RIPng**.
- Jednoduchý na nastavení, ale plýtvá pásmem, konverguje pomalu a „hloupá“ metrika nezohledňuje rychlost linek. Hodí se jen pro malé sítě nebo jejich okraj.

### EIGRP (Enhanced Interior Gateway Routing Protocol)

- Původně firemní protokol **Cisco** (2013 zveřejněn), nástupce IGRP. Pokročilý distance-vector s **rychlou konvergencí** a bez smyček (algoritmus DUAL), podporuje VLSM; nejvýše 255 skoků; AD 90.
- **Složená metrika** z šířky pásma a zpoždění.
- Aktualizace posílá **jen při změně** a jen routerům, kterých se týká (šetří pásmo). Typy paketů: **Hello** (hledání a kontrola sousedů ve stejném AS), **Update** (změny), **Query** (dotaz na cestu), **Reply** (odpověď).
- Udržuje tři tabulky: **sousedů** (neighbor), **topologie** (všechny naučené cesty včetně záložních) a **směrovací** (jen nejlepší cesty – successor). Záložní cestu (feasible successor) má připravenou, takže po výpadku přepne okamžitě.
- Routery si informace vyměňují jen v rámci stejného čísla AS.

### OSPF (Open Shortest Path First)

- Otevřený standard, **link-state** protokol pro velké a různorodé sítě; běží přímo nad IP (protokol 89); AD 110.
- Metrikou je **cena** (cost) odvozená z rychlosti linky: $\text{cena} = 10^8 / \text{šířka pásma v b/s}$, takže 100 Mb/s má cenu 1, 10 Mb/s cenu 10.
- Počet skoků není omezen, podporuje VLSM a ověřování, aktualizace posílá multicastem (224.0.0.5 a 224.0.0.6).
- Funguje ve třech krocích: navázání **sousedství** pakety Hello (standardně každých **10 s**, soused je prohlášen za mrtvého po **40 s**), **zaplavení** oblasti informacemi o linkách a **výpočet** nejkratších cest algoritmem SPF.
- Sousedy se stanou jen routery se stejným intervalem Hello a Dead, ve stejné podsíti se stejnou maskou a ve stejné oblasti.
- **Hierarchie oblastí**: velká síť se rozdělí na oblasti (areas), které jsou všechny připojeny k páteřní **oblasti 0** (backbone). Výpočet SPF se opakuje po každé změně, a rozdělení na oblasti proto omezuje zátěž – změna v jedné oblasti nenutí přepočítávat ostatní. Router uvnitř jedné oblasti je **vnitřní**, router na hranici dvou oblastí **hraniční** (ABR).

### BGP (Border Gateway Protocol)

- **Vnější** směrovací protokol, kterým si trasy vyměňují autonomní systémy – poskytovatelé Internetu. Je to jediný EGP, který se dnes používá (starší protokol EGP je zastaralý).
- Typ **path-vector**: u každé sítě ohlašuje celou posloupnost AS, přes které k ní cesta vede; podle ní se vyhne smyčkám a uplatní **směrovací politiku** (smlouvy mezi poskytovateli), ne nejkratší cestu.
- Běží nad TCP (port 179). **eBGP** spojuje různé AS, **iBGP** šíří informace uvnitř jednoho AS. Globální tabulka Internetu má přes milion IPv4 tras.

### Porovnání

| Protokol | Typ | Metrika | Použití | AD |
| --- | --- | --- | --- | --- |
| RIPv2 | distance-vector, IGP | počet skoků (max. 15) | malé sítě | 120 |
| EIGRP | pokročilý distance-vector, IGP | šířka pásma + zpoždění | sítě s routery Cisco | 90 |
| OSPF | link-state, IGP | cena podle rychlosti | střední a velké sítě | 110 |
| IS-IS | link-state, IGP | cena | sítě poskytovatelů | 115 |
| BGP | path-vector, EGP | atributy cesty a politika | mezi AS, Internet | 20 / 200 |

Konfiguraci směrování v simulátoru ukazuje stránka [Cisco Packet Tracer](/it/pocitacove-site/22-cisco-packet-tracer/#základní-statické-routování).

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
