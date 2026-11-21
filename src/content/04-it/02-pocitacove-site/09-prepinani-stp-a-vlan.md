---
title: "Přepínání: hierarchický model, STP a VLAN"
order: 9
source: "IT/Datové-sítě.docx"
---

Větší LAN = desítky switchů. Navrhuje se podle **hierarchického modelu**, switche se propojují **redundantně** a smyčky hlídá **Spanning Tree**. Logicky se síť dělí pomocí **VLAN**. Princip switche: [aktivní síťové prvky](/it/pocitacove-site/07-aktivni-sitove-prvky-a-sitova-karta/), Ethernet: [Ethernet a LAN](/it/pocitacove-site/08-ethernet-a-lan/).

## Hierarchický model sítě LAN

Síť ve **vrstvách** s jasnými rolemi → **modulární**: snadné rozšíření, správa i hledání chyb.

![Hierarchický model: dva switche v jádru, dva distribuční a čtyři přístupové; záložní křížové linky mezi distribuční a přístupovou vrstvou zablokuje STP](/images/content/it/pocitacove-site/stp-vlan/hierarchie-stp.webp)

| Vrstva | Úkol | Zařízení |
| --- | --- | --- |
| **přístupová** | připojuje koncová zařízení, kontroluje kdo smí (port security, 802.1X, PoE) | switche na patrech, AP |
| **distribuční** | agreguje provoz z přístupové, VLAN, ACL, směrování mezi VLAN | výkonné L3 switche s redundancí |
| **jádro** | rychlá páteř, propojuje distribuční vrstvu, připojení k Internetu | nejvýkonnější switche a routery |

Příklad: univerzita odděluje zaměstnance, studenty a hosty do VLAN s různými pravidly. V malé síti se jádro a distribuce slučují (**collapsed core**).

### Vlastnosti dobře navržené sítě

- **Rozšiřitelnost** – modul se při růstu jen zopakuje.
- **Redundance** – přístupový switch připojen ke **dvěma** distribučním; v přístupové vrstvě se neřeší (vypadne jen jedno zařízení).
- **Výkon** – rychlé linky a výkonné switche mezi vrstvami.
- **Bezpečnost** – port security, ACL (povolené protokoly a adresy).
- **Údržba** – switche jedné vrstvy mají podobnou konfiguraci, dá se zkopírovat.

### Agregace

- **Agregace linek** (EtherChannel, 802.3ad/802.1AX, LACP) – více fyzických linek = jedna logická; vyšší kapacita, odolnost.
- U ISP **agregace** = sdílení linky zákazníky, poměr **1 : X** (1 : 50 = až 50 zákazníků); menší X = lepší. Levnější, ve špičce pomalejší. Opak: **vyhrazená linka**.

## Smyčky a Spanning Tree Protocol (STP)

Redundance = **smyčky**. Ethernetový rámec nemá TTL → koloval by donekonečna:

- **broadcastová bouře** – broadcast se množí a zahltí síť,
- **nestabilní tabulka MAC** – adresa střídavě na různých portech,
- **vícenásobné doručení** stejného rámce.

**STP** (IEEE **802.1D**) udělá ze sítě **strom** – některé porty zablokuje, aby vedla jen jedna aktivní cesta. Při výpadku se zablokovaný port otevře.

### Jak STP vytvoří strom

1. **Root bridge** – switche si posílají **BPDU** (každé 2 s); kořen = nejnižší **ID mostu** = priorita (32 768) + MAC; při shodě nižší MAC.
2. **Root port** – na každém switchi port s nejnižší cenou ke kořeni. Cena: 10 Mb/s = 100, 100 Mb/s = 19, 1 Gb/s = 4, 10 Gb/s = 2.
3. **Designated port** – na každém segmentu jeden port směrem ke kořeni.
4. **Blokování** – ostatní porty jen poslouchají BPDU.

Shoda → nižší cena ke kořeni → nižší ID odesílajícího mostu → nižší ID portu.

### Stavy portu v STP

| Stav | Co dělá |
| --- | --- |
| blocking | jen přijímá BPDU (až 20 s) |
| listening | volba rolí, data ne (15 s) |
| learning | učí se MAC, data ne (15 s) |
| forwarding | normální provoz |
| disabled | vypnut správcem |

Klasické STP konverguje **30–50 s**. **RSTP** (802.1w) – sekundy i méně: sousedé si změnu potvrdí a porty **alternate** (náhradní cesta ke kořeni) a **backup** (záloha designated) se aktivují okamžitě.

## VLAN – virtuální lokální sítě

**VLAN** = logické rozdělení sítě **nezávisle na zapojení**. Skupiny portů se chovají jako samostatné switche. Mezi VLAN se musí **směrovat** (router, L3 switch).

![Dva switche propojené trunkem 802.1Q, na každém access porty ve VLAN 10 a 20; router připojený trunkem jako router on a stick směruje mezi VLAN](/images/content/it/pocitacove-site/stp-vlan/vlan-trunk.webp)

- VLAN = **broadcastová doména** = vlastní **IP podsíť**.
- **VLAN ID** 1–4094 + jméno (VLAN 10 „Studenti“).
- Výchozí **VLAN 1** nejde smazat ani vypnout; zpočátku v ní jsou všechny porty.

Bez VLAN by rámce chodily i zařízením z jiných IP podsítí (switch IP nevidí); oddělení by chtělo samostatné switche.

### Proč VLAN

- **Seskupení podle oddělení** (účtárna, vývoj, hosté), ne podle místa.
- **Méně broadcastů** – menší domény, výkonnější síť.
- **Snadná správa** – přesun = změna konfigurace portu, ne kabelu.
- **Bezpečnost** – servery a správa ve vlastní VLAN.
- **Oddělení provozu** – IP telefony, kamery, Wi-Fi hostů.
- **Úspora hardwaru** – více sítí na jednom switchi.

### Zařazení do VLAN

1. **Podle portu** – napevno; nejrychlejší, nejčastější.
2. **Podle MAC** – tabulka od správce; po přepojení zůstane ve VLAN.
3. **Podle protokolu / IP** – pomalé, málo používané.
4. **Podle ověření** – **802.1X** a automatické zařazení.

### Access a trunk porty, IEEE 802.1Q

- **Access port** – jedna VLAN, koncové zařízení, rámce bez značky.
- **Trunk port** – **více VLAN** po jedné lince (switch–switch, switch–router).
- Na trunku se do rámce vloží **tag 802.1Q** (4 B za zdrojovou MAC): 0x8100, 3 b priorita, **12b VLAN ID** (→ max. 4 094 VLAN). **Nativní VLAN** jde bez tagu.

### Směrování mezi VLAN

- **Router on a stick** – jeden router, jedna trunková linka, podrozhraní pro každou VLAN. Levné, ale úzké hrdlo a jediné místo selhání.
- **L3 switch** – směruje v hardwaru přes SVI; rychlé, běžné v distribuční vrstvě.

**Příklad konfigurace (Cisco IOS)** – dvě VLAN a router on a stick:

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

Brány: VLAN 10 → 192.168.10.1, VLAN 20 → 192.168.20.1. Další příkazy: [Cisco IOS](/it/pocitacove-site/21-zakladni-prikazy-cisco-ios-pro-spravu-smerovacu-a-prepinacu/), [Packet Tracer](/it/pocitacove-site/22-cisco-packet-tracer/).

### VTP (VLAN Trunking Protocol)

VLAN musí existovat na každém switchi na cestě. **VTP** (Cisco) šíří seznam VLAN po trunkách v rámci **VTP domény**. Režimy:

- **server** (výchozí) – vytváří, mění, maže VLAN, ukládá do NVRAM, rozesílá,
- **klient** – jen přebírá,
- **transparentní** – neúčastní se, VLAN jen lokálně, oznámení přeposílá.

Oznámení každých 5 min a při změně; vyšší **revizní číslo** vyhrává. Pozor: switch s vyšším číslem a jinými VLAN přepíše celou doménu.

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
