---
title: "IPv6 adresování"
order: 15
source: "site/IPv6_Adresovani.pdf; IT/Datové-sítě.docx"
---

**IPv6** je nástupce IPv4. Hlavní důvod: **došly adresy** – $2^{32}$ ≈ 4 mld. nestačí pro mobily a chytrá zařízení ([Internet věcí](/it/pocitacove-site/04-internet/#internet-věcí-iot)) a [NAT](/it/pocitacove-site/14-nat-preklad-adres/) přináší komplikace. Adresy jsou **128bitové**.

**Cíle:** obrovský adresní prostor ($2^{128}$ ≈ 3,4 · 10³⁸), jednodušší hlavička, **autokonfigurace** bez DHCP, zabezpečení **IPsec**, lepší mobilita a QoS, postupný přechod z IPv4.

## Zápis IPv6 adresy

**128 bitů**, **šestnáctkově**, **8 skupin po 4 číslicích** oddělených **dvojtečkou**: `2001:0db8:0000:0000:0000:ff00:0042:8329`

![Struktura globální IPv6 adresy: 48 bitů globální prefix, 16 bitů podsíť, 64 bitů identifikátor rozhraní; a příklad zkrácení zápisu](/images/content/it/pocitacove-site/ipv6-adresovani/struktura.webp)

**Zkracovací pravidla:**

1. **Úvodní nuly** ve skupině vynechat (`0db8` → `db8`).
2. Jednu souvislou řadu nulových skupin nahradit **`::`** – **jen jednou** v adrese.

**Příklad.** `1088:00F9:0000:0000:0000:AB0C:7C11:0800` → **`1088:F9::AB0C:7C11:800`**. Opačně `2001:db8::1` = `2001:0db8:0000:0000:0000:0000:0000:0001`. Zápis `2001::25de::cade` je **neplatný** (`::` dvakrát).

**Globální adresa** se skládá z **globálního prefixu** (48 b, od poskytovatele), **identifikátoru podsítě** (16 b, správce sítě) a **identifikátoru rozhraní** (64 b, zařízení). LAN má vždy **/64**.

## Typy adres

**Broadcast neexistuje**, nahrazuje ho multicast. Rozhraní má víc adres naráz (vždy link-local + globální).

- **Unicast** – jedno rozhraní.
- **Multicast** – všichni členové skupiny (`ff02::1` všichni na lince, `ff02::2` routery).
- **Anycast** – stejná adresa na více zařízeních, doručí se **nejbližšímu** (např. kořenové DNS servery).

### Důležité adresy a prefixy

| Adresa / prefix | Typ | V IPv4 |
| --- | --- | --- |
| `::1/128` | **loopback** | 127.0.0.1 |
| `2000::/3` | **globální unicast** (veřejné) | veřejné |
| `fe80::/10` | **link-local** – jen v jedné síti | 169.254.0.0/16 |
| `fc00::/7` | **ULA** – privátní | privátní |
| `ff00::/8` | **multicast** | 224.0.0.0/4 |
| `2001:db8::/32` | dokumentace | 192.0.2.0/24 |

**Link-local** adresu dostane **automaticky** každé rozhraní s IPv6; slouží pro autokonfiguraci a komunikaci s routerem.

## Hlavička IPv6 datagramu

**Pevně 40 B**, jednoduchá → rychlé zpracování. Oproti IPv4 **bez kontrolního součtu** a **bez polí pro fragmentaci**.

- **Traffic Class** (priorita, QoS), **Flow Label** (značka toku), **Payload Length**, **Next Header** (co následuje), **Hop Limit** (obdoba TTL), zdrojová a cílová adresa (po 128 b).
- Volitelné údaje jsou v **rozšiřujících hlavičkách** řetězených přes Next Header (směrování, fragmentace, IPsec).
- **Fragmentuje jen odesílatel**; minimální **MTU 1 280 B**.

## Automatická konfigurace

- **NDP** (Neighbor Discovery, v ICMPv6) nahrazuje ARP: zjišťuje MAC sousedů a hledá routery.
- **SLAAC** (bezstavová autokonfigurace): router ohlásí **prefix**, zařízení si doplní identifikátor, ověří jedinečnost (**DAD**) a použije ji. Bez DHCP. Identifikátor je dnes **náhodný** (dříve z MAC – **EUI-64** – a dalo se sledovat).
- **DHCPv6** – centrální přidělování, nebo jen DNS servery.

## Přechod z IPv4 na IPv6

IPv4 a IPv6 nejsou kompatibilní, poběží dlouho vedle sebe: **dual stack** (zařízení mají obě verze, nejčastější), **tunelování** (IPv6 zabalené v IPv4) a **překlad** (**NAT64 + DNS64**).

| | IPv4 | IPv6 |
| --- | --- | --- |
| adresa | 32 b, desítkově | 128 b, šestnáctkově |
| hlavička | 20–60 B, s checksumem | 40 B, bez checksumu |
| fragmentace | odesílatel i routery | jen odesílatel |
| broadcast | ano | ne (multicast) |
| konfigurace | ručně, DHCP | SLAAC, DHCPv6 |
| IP → MAC | ARP | NDP |
| NAT | běžně | netřeba |

## Otázky k opakování

1. Proč vzniklo IPv6 a co dalšího kromě adres řeší? ||došly adresy IPv4; jednodušší hlavička, autokonfigurace, IPsec, mobilita, QoS||
2. Kolik bitů má IPv6 adresa a jak se zapisuje? ||128 bitů; 8 skupin po 4 šestnáctkových číslicích oddělených dvojtečkou||
3. Zkraťte adresu `2001:0db8:0000:0000:0001:0000:0000:0001`. ||`2001:db8::1:0:0:1` – `::` smí nahradit jen jednu řadu nul||
4. Jaký prefix má lokální síť v IPv6 a kolik bitů zbývá na identifikátor rozhraní? ||/64; 64 bitů||
5. Které typy adres IPv6 rozlišuje a čím se nahrazuje broadcast? ||unicast, multicast, anycast; broadcast nahrazuje multicast||
6. Co je link-local adresa? ||adresa platná jen v jedné síti, přiděluje se automaticky; fe80::/10||
7. Jak dlouhá je hlavička IPv6 a co v ní oproti IPv4 chybí? ||pevně 40 B; chybí kontrolní součet a pole pro fragmentaci||
8. Jak funguje SLAAC? ||router ohlásí prefix, zařízení si dotvoří identifikátor, ověří jedinečnost a začne adresu používat||
9. Jak probíhá přechod z IPv4 na IPv6? ||dual stack, tunelování, překlad NAT64/DNS64||
