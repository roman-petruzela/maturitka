---
title: "IPv6 adresování"
order: 15
source: "site/IPv6_Adresovani.pdf; IT/Datové-sítě.docx"
---

**IPv6** je nástupce IPv4. Hlavní důvod: **došly adresy** – $2^{32}$ ≈ 4 mld. nestačí pro mobily a chytrá zařízení ([Internet věcí](/it/pocitacove-site/04-internet/#internet-věcí-iot)), [NAT](/it/pocitacove-site/14-nat-preklad-adres/) přináší komplikace a Asie dostala IPv4 velmi málo. Vybraly se **128bitové** adresy (místo 64bitových).

## Cíle IPv6

- obrovský adresní prostor ($2^{128}$ ≈ 3,4 · 10³⁸),
- jednodušší, rychle zpracovatelná hlavička,
- **autokonfigurace** bez DHCP,
- zabezpečení na síťové vrstvě (**IPsec** – původně povinný, dnes doporučený),
- lepší mobilita a QoS,
- soužití s IPv4 a postupný přechod.

## Zápis IPv6 adresy

**128 bitů**, **šestnáctkově**, **8 skupin po 4 číslicích** (16 b) oddělených **dvojtečkou**:

```
2001:0db8:0000:0000:0000:ff00:0042:8329
```

![Struktura globální IPv6 adresy: 48 bitů globální prefix, 16 bitů podsíť, 64 bitů identifikátor rozhraní; a příklad zkrácení zápisu](/images/content/it/pocitacove-site/ipv6-adresovani/struktura.webp)

**Zkracovací pravidla:**

1. **Úvodní nuly** ve skupině vynechat: `0db8` → `db8`, `0000` → `0`.
2. Jednu souvislou řadu nulových skupin nahradit **`::`** – **jen jednou** v adrese.

**Příklad 1 – zkrácení.** `1088:00F9:0000:0000:0000:AB0C:7C11:0800`

- bez úvodních nul: `1088:F9:0:0:0:AB0C:7C11:800`
- nuly → `::`: **`1088:F9::AB0C:7C11:800`**

**Příklad 2 – rozepsání.** `2001:db8::1`

- 3 skupiny → chybí 5 nulových,
- **`2001:0db8:0000:0000:0000:0000:0000:0001`**

**Příklad 3 – chybný zápis.** `2001::25de::cade` – **neplatné**, `::` dvakrát.

### Prefix

Síť = společný začátek adresy, zápis `adresa/prefix` jako u CIDR. `12AB:0000:0000:CD30:0000:0000:0000:0000/60` lze zapsat:

- `12ab:0:0:cd30:0:0:0:0/60`
- `12ab::cd30:0:0:0:0/60`
- `12ab:0:0:cd30::/60` (nejlepší)

**Globální adresa** má tři části:

| Část | Délka | Určuje |
| --- | --- | --- |
| globální směrovací prefix | 48 b | poskytovatel / registr |
| identifikátor podsítě | 16 b | správce (65 536 podsítí) |
| identifikátor rozhraní | 64 b | zařízení (z MAC / náhodně) nebo DHCPv6 |

LAN má vždy **/64**. Domácnost dostává /56 nebo /48 (256 nebo 65 536 sítí /64).

## Typy adres

**Broadcast neexistuje.** Rozhraní má víc adres naráz (vždy link-local + jednu či více globálních).

- **Unicast** – jedno rozhraní.
- **Multicast** – všichni členové skupiny (např. všechny routery); nahrazuje broadcast.
- **Anycast** – stejná adresa na více zařízeních, doručí se **nejbližšímu** (např. kořenové DNS servery).

### Důležité adresy a prefixy

| Adresa / prefix | Typ | V IPv4 |
| --- | --- | --- |
| `::/128` | nespecifikovaná (zařízení ještě nezná adresu) | 0.0.0.0 |
| `::1/128` | **loopback** | 127.0.0.1 |
| `2000::/3` | **globální unicast** (veřejné) | veřejné |
| `fe80::/10` | **link-local** – jen v jedné síti | 169.254.0.0/16 |
| `fc00::/7` (`fd00::/8`) | **ULA** – privátní | privátní |
| `fec0::/10` | **site-local** – zrušeno 2004, nahrazeno ULA | – |
| `ff00::/8` | **multicast**; `ff02::1` všichni na lince, `ff02::2` routery | 224.0.0.0/4 |
| `2001:db8::/32` | dokumentace | 192.0.2.0/24 |
| `::ffff:0:0/96` | IPv4 jako IPv6 (`::ffff:192.0.2.1`) | – |

- **Link-local** se přidělí **automaticky** každému rozhraní s IPv6; slouží pro autokonfiguraci, sousedy a komunikaci s routerem (brána bývá link-local adresa routeru).
- **Site-local** nebyla zvenku dostupná, nesměla ven jako zdroj a nepřidělovala se automaticky.

## Hlavička IPv6 datagramu

**Pevně 40 B**, jednoduchá → rychlé zpracování. **Bez kontrolního součtu** a **bez polí pro fragmentaci**.

| Pole | Bitů | Význam |
| --- | --- | --- |
| Version | 4 | 6 |
| Traffic Class | 8 | priorita, QoS |
| Flow Label | 20 | značka toku – stejné zacházení s proudem datagramů |
| Payload Length | 16 | délka za základní hlavičkou |
| Next Header | 8 | co následuje (rozšiřující hlavička, TCP, UDP, ICMPv6) |
| Hop Limit | 8 | obdoba TTL |
| Source Address | 128 | odesílatel |
| Destination Address | 128 | příjemce |

<img src="/images/content/it/pocitacove-site/ipv6-adresovani/01.webp" alt="Řetězení rozšiřujících hlaviček IPv6" width="530" loading="lazy" decoding="async">

Volitelné údaje jsou v **rozšiřujících hlavičkách** řetězených přes Next Header: Hop-by-Hop, směrování, **fragmentace**, volby pro cíl, IPsec (AH, ESP).

**Fragmentace** jen u odesílatele; router příliš velký paket zahodí a pošle ICMPv6 „packet too big“. Minimální **MTU 1 280 B**. Ethernet/Wi-Fi mají 1 500 B → fragmentace prakticky mizí.

## Automatická konfigurace

- **NDP** (Neighbor Discovery, v ICMPv6) nahrazuje ARP: MAC sousedů, hledání routerů, kontrola duplicit.
- **SLAAC** (bezstavová autokonfigurace): router posílá **Router Advertisement** s prefixem; zařízení si k /64 doplní identifikátor, ověří jedinečnost (**DAD**) a použije ji; bránou je ohlašující router. Bez DHCP.
- Identifikátor dříve z MAC (**EUI-64**) → dal se sledovat; dnes **náhodné (privacy)** identifikátory, které se mění.
- **DHCPv6** – centrální přidělování (stavový) nebo jen DNS servery (bezstavový).

**Příklad 4 – EUI-64.** MAC `00:1A:2B:3C:4D:5E`:

1. Doprostřed vložit `FF:FE`: `00:1A:2B:FF:FE:3C:4D:5E`.
2. V 1. bajtu invertovat 7. bit (U/L): `00` → `02`.
3. Identifikátor `021A:2BFF:FE3C:4D5E`, link-local **`fe80::21a:2bff:fe3c:4d5e`**.

## Přechod z IPv4 na IPv6

IPv4 a IPv6 nejsou kompatibilní, poběží dlouho vedle sebe:

- **dual stack** – zařízení mají obě verze a použijí, co umí protějšek; nejčastější,
- **tunelování** – IPv6 zabalené v IPv4 (6in4, GRE, dříve 6to4, Teredo),
- **překlad** – **NAT64 + DNS64**: IPv6-only síť mluví s IPv4 servery.

## Porovnání IPv4 a IPv6

| | IPv4 | IPv6 |
| --- | --- | --- |
| adresa | 32 b | 128 b |
| počet | ≈ 4,3 · 10⁹ | ≈ 3,4 · 10³⁸ |
| zápis | desítkově, 4 oktety, tečky | šestnáctkově, 8 skupin, dvojtečky |
| hlavička | 20–60 B, s checksumem | 40 B, bez checksumu |
| fragmentace | odesílatel i routery | jen odesílatel |
| broadcast | ano | ne (multicast) |
| konfigurace | ručně, DHCP | SLAAC, DHCPv6, ručně |
| IP → MAC | ARP | NDP |
| NAT | běžně | netřeba |
| IPsec | volitelný | součást návrhu |

## Otázky k opakování

1. Proč vzniklo IPv6 a co dalšího kromě adres řeší? ||došly adresy IPv4; jednodušší hlavička, autokonfigurace, zabezpečení IPsec, mobilita, QoS||
2. Kolik bitů má IPv6 adresa a jak se zapisuje? ||128 bitů; 8 skupin po 4 šestnáctkových číslicích oddělených dvojtečkou||
3. Zkraťte adresu `2001:0db8:0000:0000:0001:0000:0000:0001`. ||`2001:db8::1:0:0:1` – `::` smí nahradit jen jednu řadu nul; obě řady jsou stejně dlouhé, proto se podle zvyklosti (RFC 5952) zkracuje první||
4. Rozepište adresu `fe80::1`. ||`fe80:0000:0000:0000:0000:0000:0000:0001`||
5. Jaký prefix má lokální síť v IPv6 a kolik bitů zbývá na identifikátor rozhraní? ||/64; 64 bitů||
6. Které tři typy adres IPv6 rozlišuje a čím se nahrazuje broadcast? ||unicast, multicast, anycast; broadcast nahrazuje multicast (např. ff02::1)||
7. Co je link-local adresa a čím začíná? ||adresa platná jen v jedné síti, přiděluje se automaticky každému rozhraní; fe80::/10||
8. Jak dlouhá je hlavička IPv6 a co v ní oproti IPv4 chybí? ||pevně 40 B; chybí kontrolní součet a pole pro fragmentaci||
9. Jak funguje SLAAC? ||router ohlásí prefix sítě, zařízení si dotvoří identifikátor rozhraní, ověří jedinečnost adresy a začne ji používat||
10. Jakými způsoby probíhá přechod z IPv4 na IPv6? ||dual stack, tunelování IPv6 v IPv4, překlad NAT64/DNS64||
