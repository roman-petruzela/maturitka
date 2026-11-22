---
title: "Přepínání: hierarchický model, STP a VLAN"
order: 9
source: "IT/Datové-sítě.docx"
---

Větší LAN = desítky switchů. Navrhuje se podle **hierarchického modelu**, switche se propojují **redundantně** a smyčky hlídá **Spanning Tree**. Logicky se síť dělí pomocí **VLAN**. Princip switche: [aktivní síťové prvky](/it/pocitacove-site/07-aktivni-sitove-prvky-a-sitova-karta/).

## Hierarchický model sítě LAN

Síť ve **vrstvách** s jasnými rolemi je **modulární**: snadné rozšíření, správa i hledání chyb.

![Hierarchický model: dva switche v jádru, dva distribuční a čtyři přístupové; záložní křížové linky mezi distribuční a přístupovou vrstvou zablokuje STP](/images/content/it/pocitacove-site/stp-vlan/hierarchie-stp.webp)

| Vrstva | Úkol |
| --- | --- |
| **přístupová** | připojuje koncová zařízení, kontroluje, kdo smí (port security, 802.1X) |
| **distribuční** | agreguje provoz, VLAN, ACL, směrování mezi VLAN |
| **jádro** | rychlá páteř, připojení k Internetu |

Přístupový switch se připojuje ke **dvěma** distribučním (**redundance**). **Agregace linek** (EtherChannel, LACP) spojí více fyzických linek do jedné logické.

## Smyčky a Spanning Tree Protocol (STP)

Redundance vytváří **smyčky**. Ethernetový rámec nemá TTL, takže by koloval donekonečna: **broadcastová bouře**, nestabilní tabulka MAC, vícenásobné doručení.

**STP** (IEEE **802.1D**) udělá ze sítě **strom** – zablokuje některé porty, aby vedla jen jedna aktivní cesta. Při výpadku se zablokovaný port otevře.

1. **Root bridge** – switche si posílají **BPDU**; kořenem se stane nejnižší **ID mostu** = priorita (32 768) + MAC.
2. **Root port** – na každém switchi port s nejnižší cenou ke kořeni (1 Gb/s = 4, 100 Mb/s = 19).
3. **Designated port** – na každém segmentu jeden port směrem ke kořeni.
4. **Blokování** – ostatní porty jen poslouchají BPDU.

Port prochází stavy **blocking → listening → learning → forwarding**; klasické STP konverguje **30–50 s**. **RSTP** (802.1w) konverguje v řádu sekund.

## VLAN – virtuální lokální sítě

**VLAN** = logické rozdělení sítě **nezávisle na zapojení**. Skupiny portů se chovají jako samostatné switche. Každá VLAN je **broadcastová doména** a vlastní **IP podsíť**; mezi VLAN se musí **směrovat** (router, L3 switch). **VLAN ID** je 1–4094, výchozí je VLAN 1.

![Dva switche propojené trunkem 802.1Q, na každém access porty ve VLAN 10 a 20; router připojený trunkem jako router on a stick směruje mezi VLAN](/images/content/it/pocitacove-site/stp-vlan/vlan-trunk.webp)

**Proč VLAN:** seskupení podle oddělení (ne podle místa), méně broadcastů, snadná správa (změna konfigurace portu místo kabelu), bezpečnost (servery ve vlastní VLAN), oddělení provozu (IP telefony, hosté), úspora hardwaru.

**Zařazení do VLAN:** nejčastěji **podle portu**, dále podle MAC nebo ověřením (802.1X).

### Access a trunk porty, IEEE 802.1Q

- **Access port** – jedna VLAN, koncové zařízení, rámce bez značky.
- **Trunk port** – **více VLAN** po jedné lince (switch–switch, switch–router). Rámec dostane **tag 802.1Q** (4 B) s **12bitovým VLAN ID** (max. 4 094 VLAN).

### Směrování mezi VLAN

- **Router on a stick** – jeden router, jedna trunková linka, podrozhraní pro každou VLAN. Levné, ale úzké hrdlo.
- **L3 switch** – směruje v hardwaru, běžné v distribuční vrstvě.

Konfigurace: [Cisco IOS](/it/pocitacove-site/21-zakladni-prikazy-cisco-ios-pro-spravu-smerovacu-a-prepinacu/), [Packet Tracer](/it/pocitacove-site/22-cisco-packet-tracer/).

## Otázky k opakování

1. Jaké vrstvy má hierarchický model LAN a co dělá každá? ||přístupová připojuje koncová zařízení, distribuční agreguje provoz (VLAN, ACL, směrování), jádro je rychlá páteř||
2. Proč se přístupové switche připojují ke dvěma distribučním? ||kvůli redundanci – při výpadku jde provoz přes druhý||
3. Co se stane, když v síti switchů vznikne smyčka bez STP? ||broadcastová bouře, nestabilní tabulky MAC, vícenásobné doručení||
4. Jak STP vybírá kořenový most? ||podle nejnižšího ID mostu – priority a při shodě nejnižší MAC||
5. Co je VLAN a proč se používá? ||logické rozdělení sítě nezávislé na zapojení; méně broadcastů, oddělení skupin, bezpečnost, snadná správa||
6. Jaký je rozdíl mezi access a trunk portem? ||access patří do jedné VLAN bez značky; trunk přenáší více VLAN se značkou 802.1Q||
7. Kolik VLAN je možných a proč? ||4 094, VLAN ID má 12 bitů||
8. Jak spolu komunikují zařízení ve dvou VLAN? ||přes router (router on a stick) nebo L3 switch||
