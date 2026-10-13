---
title: "Přepínání: hierarchický model, STP a VLAN"
order: 9
source: "IT/Datové-sítě.docx"
---

Větší lokální síť se skládá z desítek switchů. Aby byla přehledná, spolehlivá a dala se rozšiřovat, navrhuje se podle **hierarchického modelu**, switche se propojují **redundantně** (záložními linkami) a smyčky, které tím vzniknou, hlídá protokol **Spanning Tree**. Jednu fyzickou síť pak lze logicky rozdělit na více sítí pomocí **VLAN**. Princip práce switche (tabulka MAC adres, kolizní domény) vysvětluje stránka [aktivní síťové prvky](/it/pocitacove-site/07-aktivni-sitove-prvky-a-sitova-karta/), Ethernet sám stránka [Ethernet a LAN](/it/pocitacove-site/08-ethernet-a-lan/).

## Hierarchický model sítě LAN

Síť se rozdělí na samostatné **vrstvy**, z nichž každá má v síti určitou roli. Oddělením funkcí je síť **modulární** – snáze se rozšiřuje, spravuje a hledají se v ní chyby.

| Vrstva | Úkol | Zařízení |
| --- | --- | --- |
| **přístupová** (access) | připojuje koncová zařízení do sítě a kontroluje, která zařízení smějí komunikovat (zabezpečení portů, 802.1X, PoE) | switche na patrech, přístupové body; připojené PC, tiskárny, IP telefony |
| **distribuční** (distribution) | spojuje (agreguje) provoz z přístupové vrstvy před odesláním do jádra, řídí provoz pomocí VLAN a pravidel (ACL), směruje mezi VLAN | výkonné L3 switche s vysokou dostupností a redundancí |
| **jádro** (core) | vysokorychlostní páteř sítě; propojuje distribuční vrstvu a bývá připojeno k Internetu (často více linkami) | nejvýkonnější switche a routery |

Příklad: v univerzitní síti distribuční vrstva odděluje provoz zaměstnanců, studentů a hostů do různých VLAN a pro každou skupinu platí jiná bezpečnostní pravidla. V malé síti se jádro a distribuční vrstva slučují do jedné (**zhroucené jádro**, collapsed core).

### Vlastnosti dobře navržené sítě

- **Rozšiřitelnost** – modulární návrh se při růstu sítě jen opakuje, což zjednodušuje plánování.
- **Redundance** – každý přístupový switch je připojen ke **dvěma** různým distribučním switchům; když jeden vypadne, provoz jde přes druhý. V přístupové vrstvě se redundance obvykle neřeší – výpadek linky odřízne jen jedno zařízení.
- **Výkon** – mezi vrstvami vedou rychlé linky a výkonné switche.
- **Bezpečnost** – porty přístupových switchů lze nastavit tak, aby pustily do sítě jen povolená zařízení; seznamy ACL určují, které protokoly a adresy jsou povoleny.
- **Ovladatelnost a údržba** – switche ve stejné vrstvě mají stejné funkce a podobnou konfiguraci, kterou lze zkopírovat na nový switch.

### Agregace

- **Agregace linek** (link aggregation, EtherChannel, standard IEEE 802.3ad/802.1AX, protokol LACP) spojí několik fyzických linek mezi dvěma switchi do jedné logické – zvýší se kapacita a výpadek jedné linky spojení nepřeruší.
- U poskytovatelů Internetu znamená **agregace** sdílení kapacity linky více zákazníky. Udává se poměrem **1 : X** (např. 1 : 50 = linku sdílí až 50 zákazníků); čím menší X, tím lépe. Je levnější, ale ve špičce linka zpomalí – jako přepážky na poště, u kterých se čeká ve frontě. Opakem je **vyhrazená linka** jen pro jednoho zákazníka.

## Smyčky a Spanning Tree Protocol (STP)

Redundantní propojení switchů vytváří v síti **smyčky**. Ethernetový rámec nemá žádnou životnost (TTL), takže by ve smyčce koloval donekonečna:

- **broadcastová bouře** – broadcast se ve smyčce stále množí, až zahltí celou síť,
- **nestabilní tabulka MAC adres** – switch vidí stejnou adresu střídavě na různých portech,
- **vícenásobné doručení** – stanice dostane tentýž rámec několikrát.

**STP** (Spanning Tree Protocol, IEEE **802.1D**) proto z redundantní sítě vytvoří **strom** – některé porty logicky zablokuje, aby mezi každými dvěma switchi vedla jen jedna aktivní cesta. Když aktivní linka vypadne, zablokovaný port se otevře a provoz jde záložní cestou.

### Jak STP vytvoří strom

1. **Volba kořenového mostu (root bridge).** Switche si vyměňují zprávy **BPDU** (Bridge Protocol Data Unit, standardně každé 2 s). Kořenem se stane switch s nejnižším **ID mostu** = priorita (výchozí 32 768) + MAC adresa; při stejné prioritě rozhodne nižší MAC adresa.
2. **Kořenové porty.** Každý ostatní switch zvolí jeden **kořenový port** (root port) – ten s nejnižší cenou cesty ke kořeni. Cena závisí na rychlosti linky: 10 Mb/s = 100, 100 Mb/s = 19, 1 Gb/s = 4, 10 Gb/s = 2.
3. **Určené porty.** Na každém segmentu se zvolí jeden **určený port** (designated port), přes který segment komunikuje směrem ke kořeni.
4. **Blokování.** Všechny ostatní porty se **zablokují** – nepřeposílají data, jen poslouchají BPDU.

Při shodě se rozhoduje postupně podle: nejnižší ceny cesty ke kořeni → nejnižšího ID odesílajícího mostu → nejnižšího ID portu odesílatele.

### Stavy portu v STP

| Stav | Co port dělá |
| --- | --- |
| blocking (blokování) | nepřeposílá data, jen přijímá BPDU (až 20 s) |
| listening (naslouchání) | vyměňuje BPDU a podílí se na volbě rolí, data nepřeposílá (15 s) |
| learning (učení) | učí se MAC adresy do tabulky, data ještě nepřeposílá (15 s) |
| forwarding (přeposílání) | normální provoz |
| disabled (vypnuto) | port je administrativně vypnut |

Klasické STP proto po změně topologie **konverguje 30–50 s**, po kterou je část sítě nedostupná. **RSTP** (Rapid STP, IEEE 802.1w) zkracuje konvergenci na jednotky sekund i méně: místo časovačů si sousední switche změnu rovnou potvrdí a zablokované porty dělí na **alternate** (náhradní cesta ke kořeni) a **backup** (záloha určeného portu), které se okamžitě aktivují.

## VLAN – virtuální lokální sítě

**VLAN** (Virtual LAN) logicky rozdělí síť **nezávisle na fyzickém zapojení**. Porty switche se rozdělí do několika skupin, které se chovají jako samostatné sítě – jako by každá skupina měla vlastní switch. Komunikovat spolu mohou přímo jen porty ve stejné VLAN; mezi VLAN se provoz musí **směrovat** (routerem nebo L3 switchem).

- Každá VLAN je samostatná **broadcastová doména** a měla by mít vlastní **IP podsíť** (VLAN = subnet).
- VLAN se označují **číslem** (VLAN ID, 1–4094) a pro přehlednost i jménem, např. VLAN 10 „Studenti“.
- Každé zařízení, které VLAN podporuje, má aspoň jednu výchozí VLAN – **VLAN 1**, kterou nelze smazat ani vypnout; dokud správce nenastaví jinak, patří do ní všechny porty.

Bez VLAN by spolu zařízení v různých IP podsítích připojená ke stejnému switchi sice komunikovat neměla, ale rámce by se k nim dostávaly (switch se na IP adresy nedívá). Pro skutečné oddělení by byly potřeba samostatné switche. S VLAN switch posílá rámce jen na porty stejné VLAN.

### Proč VLAN

- **Seskupení uživatelů** podle oddělení nebo služeb (účtárna, vývoj, hosté) místo podle fyzického umístění – kolegové z jednoho oddělení mohou sedět na různých patrech.
- **Méně broadcastů** – místo jedné velké broadcastové domény vznikne více menších, síť je výkonnější.
- **Jednodušší správa** – přesun počítače do jiné sítě je změna konfigurace portu, ne fyzické přepojení kabelu.
- **Bezpečnost** – citlivý provoz (servery, správa zařízení) se oddělí do vlastní VLAN, kam ostatní nemají přístup.
- **Oddělení speciálního provozu** – IP telefony, kamery, Wi-Fi pro hosty.
- **Úspora hardwaru** – na jednom switchi běží několik sítí.

### Zařazení do VLAN

1. **Podle portu** – port switche je ručně a napevno zařazen do VLAN; vše, co přijde tímto portem, patří do ní. Nejrychlejší a nejpoužívanější způsob.
2. **Podle MAC adresy** – switch zařadí rámec podle zdrojové MAC adresy podle tabulky, kterou spravuje správce. Výhoda: po přepojení do jiného portu zůstane zařízení ve své VLAN.
3. **Podle protokolu nebo IP adresy** – switch se musí dívat do hlavičky 3. vrstvy, což ho zpomaluje; v praxi se příliš nepoužívá.
4. **Podle ověření** – zařízení nebo uživatel se ověří protokolem **IEEE 802.1X** a podle výsledku je automaticky zařazen do VLAN.

### Access a trunk porty, IEEE 802.1Q

- **Access port** patří do jedné VLAN a připojuje se k němu koncové zařízení, které o VLAN nic neví. Rámce na něm nejsou označené.
- **Trunk port** přenáší rámce **více VLAN** po jedné lince – typicky mezi dvěma switchi nebo mezi switchem a routerem. Spojení dvou trunk portů je **trunk**.
- Aby druhá strana poznala, do které VLAN rámec patří, přidá switch na trunku do rámce **značku (tag)** podle normy **IEEE 802.1Q**: 4 bajty mezi zdrojovou MAC adresou a polem typu. Značka obsahuje identifikátor 0x8100, 3 bity priority (QoS) a **12bitové VLAN ID** (proto nejvýše 4 094 použitelných VLAN). Rámce **nativní VLAN** se na trunku posílají bez značky.

### Směrování mezi VLAN

- **Router on a stick** – jeden router připojený ke switchi jedinou trunkovou linkou; na jeho rozhraní se vytvoří podrozhraní, jedno pro každou VLAN. Je to levné, ale linka je úzkým hrdlem a router jediným místem selhání.
- **L3 switch** – směruje mezi VLAN přímo v hardwaru pomocí virtuálních rozhraní (SVI); rychlé řešení běžné v distribuční vrstvě.

**Příklad konfigurace (Cisco IOS)** – switch se dvěma VLAN a router on a stick:

```
Switch(config)# vlan 10
Switch(config-vlan)# name Studenti
Switch(config-vlan)# vlan 20
Switch(config-vlan)# name Ucitele
Switch(config-vlan)# exit
Switch(config)# interface FastEthernet0/1
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10
Switch(config-if)# interface GigabitEthernet0/1
Switch(config-if)# switchport mode trunk

Router(config)# interface GigabitEthernet0/0.10
Router(config-subif)# encapsulation dot1Q 10
Router(config-subif)# ip address 192.168.10.1 255.255.255.0
Router(config-subif)# interface GigabitEthernet0/0.20
Router(config-subif)# encapsulation dot1Q 20
Router(config-subif)# ip address 192.168.20.1 255.255.255.0
```

Počítače ve VLAN 10 mají výchozí bránu 192.168.10.1, ve VLAN 20 bránu 192.168.20.1. Další příkazy jsou na stránkách [Cisco IOS](/it/pocitacove-site/21-zakladni-prikazy-cisco-ios-pro-spravu-smerovacu-a-prepinacu/) a [Cisco Packet Tracer](/it/pocitacove-site/22-cisco-packet-tracer/).

### VTP (VLAN Trunking Protocol)

VLAN musí existovat na každém switchi, přes který vedou. Aby je správce nemusel zakládat na všech switchích ručně, může použít protokol **VTP** firmy Cisco, který šíří seznam VLAN po trunkových linkách v rámci **VTP domény** (switche se stejným jménem domény). Každý switch pracuje v jednom režimu:

- **server** (výchozí) – VLAN vytváří, mění a maže, seznam ukládá do NVRAM a rozesílá oznámení,
- **klient** – přebírá seznam ze serveru, sám ho měnit nemůže,
- **transparentní** – VTP se neúčastní, své VLAN spravuje jen lokálně; oznámení ostatních jen přeposílá.

Server rozesílá oznámení každých 5 minut a při každé změně. Při změně zvýší **revizní číslo** konfigurace; switche převezmou konfiguraci s vyšším číslem. Proto je nebezpečné připojit do sítě switch s vyšším revizním číslem a jinými VLAN – přepsal by konfiguraci celé domény.

## Otázky k opakování

1. Jaké vrstvy má hierarchický model LAN a co dělá každá z nich? ||přístupová připojuje koncová zařízení, distribuční agreguje provoz a řídí ho (VLAN, ACL, směrování), jádro je rychlá páteř||
2. Proč se přístupové switche připojují ke dvěma distribučním? ||kvůli redundanci – při výpadku jednoho switche nebo linky jde provoz přes druhý||
3. Co se stane, když v síti switchů vznikne smyčka bez STP? ||broadcastová bouře, nestabilní tabulky MAC adres, vícenásobné doručení rámců||
4. Jak STP vybírá kořenový most? ||podle nejnižšího ID mostu – priority a při shodě nejnižší MAC adresy||
5. Proč klasické STP konverguje pomalu a co to řeší? ||port prochází stavy blocking, listening a learning s časovači (30–50 s); RSTP||
6. Co je VLAN a proč se používá? ||logické rozdělení sítě nezávislé na zapojení; méně broadcastů, oddělení skupin, bezpečnost, snadná správa||
7. Jaký je rozdíl mezi access a trunk portem? ||access patří do jedné VLAN a rámce neoznačuje; trunk přenáší více VLAN a označuje rámce značkou 802.1Q||
8. Kolik bitů má VLAN ID a kolik VLAN je proto možných? ||12 bitů; 4 094 použitelných VLAN||
9. Jak mohou spolu komunikovat zařízení ve dvou různých VLAN? ||přes router (router on a stick) nebo L3 switch – provoz se mezi VLAN musí směrovat||
