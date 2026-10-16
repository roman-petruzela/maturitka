---
title: "IPv6 adresování"
order: 15
source: "site/IPv6_Adresovani.pdf; IT/Datové-sítě.docx"
---

**IPv6** je nástupce protokolu IPv4. Hlavním důvodem jeho vzniku byl nedostatek adres: IPv4 má $2^{32}$ adres, tedy něco přes čtyři miliardy, a reálně použitelných je výrazně méně. S mobilními telefony a zařízeními, která je vhodné připojit k Internetu (domácí spotřebiče, auta, senzory – [Internet věcí](/it/pocitacove-site/04-internet/#internet-věcí-iot)), přestaly stačit; dočasná řešení jako [NAT](/it/pocitacove-site/14-nat-preklad-adres/) přinášejí komplikace a některé oblasti světa (hlavně Asie) dostaly adres IPv4 velmi málo. Při návrhu se rozhodovalo mezi 64bitovými a 128bitovými adresami – zvítězily **128bitové**.

## Cíle IPv6

- dostatečně velký adresní prostor ($2^{128}$ ≈ 3,4 · 10³⁸ adres),
- jednodušší a rychleji zpracovatelná hlavička, návrh pro vysokorychlostní sítě,
- **automatická konfigurace** zařízení bez DHCP serveru,
- zabezpečení přímo na síťové vrstvě (**IPsec** byl v IPv6 původně povinně implementovaný, dnes je doporučený),
- lepší podpora mobilních zařízení a kvality služby (QoS),
- soužití s IPv4 a postupný přechod.

## Zápis IPv6 adresy

Adresa má **128 bitů** a zapisuje se **šestnáctkově** v **osmi skupinách po čtyřech číslicích** (každá skupina = 16 bitů) oddělených **dvojtečkou**:

```
2001:0db8:0000:0000:0000:ff00:0042:8329
```

Aby byly adresy kratší, platí dvě **zkracovací pravidla**:

1. V každé skupině lze vynechat **úvodní nuly**: `0db8` → `db8`, `0042` → `42`, `0000` → `0`.
2. Jednu souvislou řadu skupin obsahujících samé nuly lze nahradit **dvojitou dvojtečkou** `::`. Smí se to udělat **jen jednou** v adrese, jinak by nebylo jasné, kolik nulových skupin kde chybí.

**Příklad 1 – zkrácení.** `1088:00F9:0000:0000:0000:AB0C:7C11:0800`

- vynecháme úvodní nuly: `1088:F9:0:0:0:AB0C:7C11:800`
- tři nulové skupiny nahradíme `::`: **`1088:F9::AB0C:7C11:800`**

**Příklad 2 – rozepsání.** `2001:db8::1`

- adresa obsahuje 3 skupiny, chybí tedy 8 − 3 = 5 nulových skupin,
- plný tvar: **`2001:0db8:0000:0000:0000:0000:0000:0001`**

**Příklad 3 – chybný zápis.** `2001::25de::cade` je **neplatná** adresa – `::` je použito dvakrát a nelze poznat, kolik nul patří na které místo.

### Prefix

Příslušnost k síti se vyjadřuje **prefixem** – všechna rozhraní v jedné síti mají stejný začátek adresy. Zápis je stejný jako u CIDR v IPv4: `adresa/délka_prefixu`. Adresu `12AB:0000:0000:CD30:0000:0000:0000:0000` s 60bitovým prefixem lze zapsat

- `12ab:0:0:cd30:0:0:0:0/60`
- `12ab::cd30:0:0:0:0/60`
- `12ab:0:0:cd30::/60` (nejvhodnější zápis)

Typická **globální adresa** se skládá ze tří částí:

| Část | Délka | Kdo ji určuje |
| --- | --- | --- |
| globální směrovací prefix | 48 bitů (obvykle) | poskytovatel a regionální registr |
| identifikátor podsítě | 16 bitů | správce sítě – umožňuje 65 536 podsítí |
| identifikátor rozhraní | 64 bitů | zařízení samo (z MAC adresy nebo náhodně) nebo DHCPv6 |

Lokální síť má vždy prefix **/64**. Domácnost obvykle dostane od poskytovatele prefix /56 nebo /48, tedy 256 nebo 65 536 sítí /64.

## Typy adres

V IPv6 **není broadcast**. Zařízení mohou mít na jednom rozhraní současně několik adres (vždy link-local a k tomu jednu nebo více globálních).

- **Unicast** (individuální) – adresa jednoho síťového rozhraní. Paket je doručen konkrétnímu zařízení (počítači, síťové tiskárně).
- **Multicast** (skupinová) – adresáty jsou všichni členové skupiny (např. všechny routery v síti, účastníci videokonference). Speciální multicastové adresy plně nahrazují broadcast.
- **Anycast** (výběrová) – stejná adresa je přiřazena více zařízením (typicky serverům v různých místech); datagram dostane jen to, které je z hlediska směrování **nejbližší**. Používá se např. pro kořenové servery DNS.

### Důležité adresy a prefixy

| Adresa / prefix | Typ | Obdoba v IPv4 |
| --- | --- | --- |
| `::/128` | nespecifikovaná – zdrojová adresa zařízení, které svou adresu ještě nezná | 0.0.0.0 |
| `::1/128` | **loopback** | 127.0.0.1 |
| `2000::/3` | **globální unicast** – veřejné adresy použitelné v Internetu | veřejné adresy |
| `fe80::/10` | **link-local** (lokální linky) – platí jen v jedné síti, router ji nepropustí | 169.254.0.0/16 |
| `fc00::/7` (prakticky `fd00::/8`) | **unikátní lokální** (ULA) – pro privátní sítě, do Internetu se nesměrují | privátní adresy |
| `fec0::/10` | **site-local** – původně obdoba privátních adres v rámci organizace; v roce 2004 zrušeny a nahrazeny ULA | – |
| `ff00::/8` | **multicast**; `ff02::1` všechna zařízení na lince, `ff02::2` všechny routery | 224.0.0.0/4 |
| `2001:db8::/32` | adresy pro dokumentaci a příklady | 192.0.2.0/24 |
| `::ffff:0:0/96` | IPv4 adresa zapsaná jako IPv6 (např. `::ffff:192.0.2.1`) | – |

- **Link-local** adresa se **automaticky** přidělí každému rozhraní, na kterém je IPv6 zapnuto. Používá se jen v rámci lokální sítě – pro autokonfiguraci, hledání sousedů a komunikaci se směrovačem (výchozí brána se obvykle udává právě link-local adresou routeru).
- **Site-local** adresa byla pro vnější stanice nedostupná a nesměla se použít jako zdroj datagramu poslaného ven z organizace; na rozdíl od link-local se nepřidělovala automaticky.

## Hlavička IPv6 datagramu

Základní hlavička je **co nejjednodušší a má pevnou délku 40 bajtů**, takže ji routery zpracují rychleji. **Nemá kontrolní součet** (chyby kontroluje linková a transportní vrstva) ani **pole pro fragmentaci**.

| Pole | Bitů | Význam |
| --- | --- | --- |
| Version (verze) | 4 | hodnota 6 |
| Traffic Class (třída provozu) | 8 | priorita datagramu, zařazení do přepravní třídy pro kvalitu služby (QoS) |
| Flow Label (značka toku) | 20 | novinka IPv6 – označuje proud datagramů se společnými vlastnostmi (odesílatel, adresát, požadavky na spojení), aby s nimi routery zacházely stejně |
| Payload Length (délka dat) | 16 | počet bajtů za základní hlavičkou – rozšiřující hlavičky se započítávají, základní ne |
| Next Header (další hlavička) | 8 | jaká rozšiřující hlavička nebo jaký protokol (TCP, UDP, ICMPv6) následuje |
| Hop Limit (maximum skoků) | 8 | obdoba TTL v IPv4; každý router ho sníží o 1 |
| Source Address | 128 | adresa odesílatele |
| Destination Address | 128 | adresa příjemce |

<img src="/images/content/it/pocitacove-site/ipv6-adresovani/01.webp" alt="Řetězení rozšiřujících hlaviček IPv6" width="530" loading="lazy" decoding="async">

Volitelné údaje se přenášejí v **rozšiřujících hlavičkách** zřetězených za základní hlavičkou pomocí pole Next Header: informace pro routery po cestě (Hop-by-Hop), směrování, **fragmentace**, volby pro cílovou stanici, autentizace a **šifrování** (IPsec AH a ESP).

**Fragmentace** v IPv6 smí provádět jen odesílatel, routery datagramy nedělí – příliš velký zahodí a odesílateli pošlou ICMPv6 zprávu „paket je příliš velký“. Minimální **MTU** (největší délka paketu), kterou musí každá linka přenést, je **1 280 B**. Protože je dnes drtivá většina zařízení připojena přes Ethernet nebo Wi-Fi s MTU alespoň 1 500 B, fragmentace v IPv6 prakticky mizí.

## Automatická konfigurace

- **NDP** (Neighbor Discovery Protocol, součást ICMPv6) nahrazuje ARP: zjišťuje MAC adresy sousedů, hledá routery a kontroluje duplicitní adresy.
- **SLAAC** (bezstavová autokonfigurace): router v síti pravidelně rozesílá **ohlášení routeru** (Router Advertisement) s prefixem sítě. Zařízení si k prefixu /64 samo vytvoří 64bitový identifikátor rozhraní, ověří, že adresu nikdo jiný nepoužívá (DAD, Duplicate Address Detection), a začne ji používat; jako výchozí bránu použije router, který ohlášení poslal. DHCP server není potřeba.
- Identifikátor rozhraní se dříve tvořil z MAC adresy metodou **EUI-64**; protože by šlo zařízení podle něj sledovat napříč sítěmi, používají dnešní systémy **náhodné (privacy) identifikátory**, které se pravidelně mění.
- **DHCPv6** se používá, když správce chce adresy přidělovat centrálně (stavový režim), nebo jen pro předání dalších údajů, např. DNS serverů (bezstavový režim).

**Příklad 4 – EUI-64.** Karta má MAC adresu `00:1A:2B:3C:4D:5E`.

1. MAC adresu rozdělíme na poloviny a doprostřed vložíme `FF:FE`: `00:1A:2B:FF:FE:3C:4D:5E`.
2. V prvním bajtu invertujeme 7. bit zleva (bit U/L): `00` = `00000000` → `00000010` = `02`.
3. Identifikátor rozhraní je `021A:2BFF:FE3C:4D5E` a link-local adresa **`fe80::21a:2bff:fe3c:4d5e`**.

## Přechod z IPv4 na IPv6

IPv4 a IPv6 spolu nejsou přímo kompatibilní, přechod proto probíhá postupně a obě verze dlouho poběží vedle sebe:

- **dual stack** – zařízení i routery mají obě verze protokolu zároveň a používají tu, kterou podporuje protějšek; nejčastější řešení,
- **tunelování** – IPv6 datagramy se balí do IPv4 paketů a projdou tak sítí, která IPv6 nepodporuje (6in4, GRE, dříve 6to4 a Teredo),
- **překlad** – **NAT64** s **DNS64** dovolí zařízením v síti jen s IPv6 komunikovat se servery dostupnými jen přes IPv4.

## Porovnání IPv4 a IPv6

| | IPv4 | IPv6 |
| --- | --- | --- |
| délka adresy | 32 bitů | 128 bitů |
| počet adres | $2^{32}$ ≈ 4,3 · 10⁹ | $2^{128}$ ≈ 3,4 · 10³⁸ |
| zápis | desítkově, 4 oktety oddělené tečkou | šestnáctkově, 8 skupin oddělených dvojtečkou |
| hlavička | 20–60 B, s kontrolním součtem | pevně 40 B, bez kontrolního součtu |
| fragmentace | odesílatel i routery | jen odesílatel (rozšiřující hlavička) |
| broadcast | ano | ne – nahrazen multicastem |
| konfigurace | ručně nebo DHCP | SLAAC, DHCPv6, ručně |
| překlad MAC adres | ARP | NDP (ICMPv6) |
| NAT | běžně | není potřeba |
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
