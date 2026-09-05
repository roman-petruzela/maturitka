---
title: "Dělení počítačových sítí (2025)"
order: 5
source: "site/Deleni_siti_2025.pdf"
---
# Co je to počítačová síť?

- spojení dvou nebo více počítačů tak, aby mohly navzájem komunikovat a sdílet zdroje (informace, software, zařízení, apod.)

- množina vzájemně propojených aktivních prvků

- soustava vzájemně propojených sítí (katenetový model)

<!-- Start of picture text -->
2<br><!-- End of picture text -->

# Každá počítačová síť se skládá z:

- **propojených systému** (počítače, mobilní telefony, paměťová zařízení, tiskárny, …

- **propojovacího softwaru** (bývá součástí operačního systému, nachází se v síťovém hardwaru, paměťových modulech síťových karet, …)

- **síťového hardwaru** (přepínače, routery, transceivery, síťové karty, …)

# Technické prostředky

   - **pasivní prvky sítě** - kabeláž (případně bezdrátová náhrada)

   - **aktivní prvky počítače** (síťové karty)

   - **aktivní prvky sítě** (HUB, SWITCH)

   - **prvky vzájemného propojení sítí** (ROUTER, BRIDGE, GATEWAY)

- **fyzických přenosových médii** (medium schopné přenášet elektromagnetický signál)

3

# Kritéria dělení sítí

- **velikost (dosah) sítě**

   - PAN, LAN, _MAN_ , _CAN_ , WAN,

- **architektura sítě**

- IP sítě, sítě ISO/OSI, sítě X.25, …

- ● **role (postavení) uzlů**

- sítě serverového typu, sítě peer-to-peer

- ● **topologie**

   - se systematickou topologii (strom, kruh, sběrnice, hvězda, rozšířená hvězda), s nesystematickou topologii

- **smysl, určení**

   - přístupové sítě, páteřní sítě, sítě „střední míle“, přenosové sítě

- **vlastnické vztahy k síti**

   - privátní, veřejné, virtuální privátní 5

# Kriteria dělení sítí

- **použité přenosové techniky** ● sítě s přepojováním okruhů, sítě s přepojováním paketů

- **způsob použití**

   - intranet, extranet

- **použité přenosové médium**

   - drátové sítě, optické sítě, bezdrátové sítě

- **mobilita**

   - mobilní sítě (NMT, GSM, UMTS)

   - ● fixní sítě

- **původ sítě**

   - počítačové, telekomunikační

4

6

# Dělení podle dosahu sítě

|vzdálenost|celek|příklad|
|---|---|---|
|1m|čtvereční metr|PAN|
|10m|místnost|LAN|
|100m|budova|LAN|
|1km|campus|CAN, LAN|
|10km|město|MAN|
|100km|stát|WAN|
|1 000km|kontinent|WAN|
|10 000km|planeta|Internet<br>7|

# LAN

- Lokální sítě propojují koncové uzly typu počítač, tiskárna, server

- Počítače jsou propojeny na menším geografickém území (tedy v rámci firmy, budovy, místnosti, atp.).

- V rámci LAN se nejvíce používá přepínaný ethernet nebo WiFi (IEEE802.11).

- Infrastruktura je většinou tvořena metalickými kabely a případně optickou páteří.

- Přenosové rychlosti LAN začínají na desítkách Mbit/s, nejnovější technologie umožňují přenos s rychlostí až desitek Gbit.

<!-- Start of picture text -->
9<br><!-- End of picture text -->

# MAN

- jsou pokusem „zabydlet“ předěl mezi sítěmi LAN a WAN

- nikdo přesně neví, co je MAN zač ● není všeobecný konsensus o definici

- příklady možných definic:

   - sítě s dosahem v rámci celého města

   - sítě sloužící potřebám města

- v rámci IEEE byla založena skupina  pro standardy sítí MAN ● DQDB=IEEE 802.6

# PAN

- Slouží potřebám jednotlivce, případně velmi malé skupiny uživatelů.

- Nejčastěji propojuje mobilní zařízení (například různá PDA, notebooky, mobilní telefony), a umožňuje jim vzájemně komunikovat.

- Dosah bývá velmi malý, maximálně několik málo metrů,

- Technologie: ● Bluetooth, Wi-Fi, IrDA, USB, … 8

# LAN

### **Mezi lokální sítě patří sítě založené na technologii:**

- Ethernet, Fast Ethernet, Gigabit Ethernet (IEEE 802.3)

- Arcnet (už mrtvá technologie)

- Token Bus (IEEE 802.4)

- Token Ring (IEEE 802.5)

- IsoEthernet (IEEE 802.9)

- Bezdrátové sítě (Wi-Fi, IEEE 802.11)

- 100VG-AnyLAN (IEEE 802.12)

- Fiber Distributed Data Interface (FDDI) (ISO/IEC 9314, ANSI X3.x)

- ● Fibre Channel (ANSI X3.x) 10

# WAN

- komunikační síť, která pokrývá rozsáhlé území, jako je spojení zemí či kontinentů.

- Obecně můžeme říct, že jednotlivé LAN sítě se propojují přes WAN síť, aby se zajistila komunikace na velké vzdálenosti.

- Tímto způsobem pracuje internet jako nejrozsáhlejší a nejznámější WAN.

12

11

# WAN – vnitřní struktura

<!-- Start of picture text -->
● páteřní sítě<br>● propojují několik málo míst<br>● typicky velmi rychlé a spolehlivé<br>● sítě „střední míle“<br>● tvoří přechod mezi přístupovou sítí  a páteřní sítí<br>● přístupové sítě<br>● propojují body místa, kde končí vlastní síť<br>poskytovatele a místa, kde se nachází zákazník<br>13<br><!-- End of picture text -->

# Architektura sítě

- Ethernet,

- Token Ring,

- FDDI,

- Frame Relay, atd

<!-- Start of picture text -->
15<br><!-- End of picture text -->

# Topologie

- **Fyzická topologie** – popisuje reálnou konstrukci sítě, jednotlivé uzly a fyzicky zapojená zařízení a jejich umístění včetně instalovaných kabelů, přesného umístění uzlů a přípojek mezi nimi

- **Logická topologie** – se vztahuje k tomu, jak jsou data v síti přenášena a kudy protékají z jednoho zařízení do druhého. Nemusí nutně kopírovat fyzické schéma sítě.

<!-- Start of picture text -->
17<br><!-- End of picture text -->

# WAN

<!-- Start of picture text -->
14<br><!-- End of picture text -->

# Role (postavení) uzlů

<!-- Start of picture text -->
role koncových uzlů je daná způsobem<br>komunikace provozování aplikací (tzv.<br>výpočetní model)<br>● některé uzly jsou servery<br>● některé uzlu jsou v roli klientů<br>● uzly jsou rovnocenné<br>síť může fungovat různými způsoby<br>● spojovaně / nespojovaně<br>● spolehlivě / nespolehlivě<br>● na princip přepojování paketů / okruhů<br>● stylem „best-effort“ / s garanci kvality<br>● blokovým / proudovým způsobem<br>16<br><!-- End of picture text -->

# Použité přenosové techniky

## **Sítě spojové - sítě s navazováním spojení**

- před zahájením přenosu nutné navázat spojení, tzn. uzly se musí domluvit s aktivními prvky a koncovými uzly, které následně vytvoří virtuální kanál, prostřednictvím něhož jsou přenášena data.

## **Sítě nespojové - sítě bez navazování spojení**

- žádné spojení nenavazuje

- technologie založené na broadcastu, tzn. všesměrovém vysílání  (Ethernet, Token Ring, FDDI): rámec se dostane ke všem uzlům a příslušný uzel rozhoduje, zda je adresátem nebo ne.

19

# Použité přenosové médium

- **Drátové** (wired) sítě, které mohou používat

   - kroucenou dvojlinku (twisted-pair),

   - koaxiální kabel,

   - optické vlákno,

- **Bezdrátové** (wireless).

   - Wifi

   - IrDA

   - Satelitní 21

# Způsob použití

### **Intranet**

- slouží interním potřebám svého provozovatele, typicky pro provozování jeho vlastních agend.

- Aplikacemi, provozovanými v intranetech, jsou různé groupwarové aplikace - třeba skupinové plánování a úkolování, sdílení dokumentů, vzájemná interní komunikace atd.

### **Extranet**

- je využíván "směrem ven", zejména ke komunikaci se zákazníky (jde-li o firemní extranet).

- Typickými extranetovými aplikacemi jsou různé aplikace z oblasti e-commerce a e-business, umožňující objednávání, prodej a související aktivity.

20

# Citace

- http://www.earchiv.cz/b05/b0300100.php3

- ● http://www.samuraj-cz.com/clanek/rozumimepocitacovym-sitim/

- http://www.samuraj-cz.com/

- http://www.svetsiti.cz/tutorialy.asp

-
> ● 22
