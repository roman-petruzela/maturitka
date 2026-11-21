---
title: "IPv4 adresování"
order: 12
source: "site/IT3_IPv4_adresovani.pdf; IT/Datové-sítě.docx"
---

Zařízení potřebuje **IP adresu**, **masku** a pro komunikaci mimo svou síť **výchozí bránu**. Navazuje [CIDR, podsíťování a VLSM](/it/pocitacove-site/13-cidr-podsitovani-a-vlsm/).

Vlastní adresa: Windows `ipconfig` (`ipconfig /all` i MAC, DNS, DHCP), Linux `ip addr`.

## IPv4 adresa

- **32 bitů** = čtyři **oktety** 0–255 oddělené tečkou, např. `192.168.25.1`.
- Celkem $2^{32}$ ≈ 4,3 miliardy adres – dávno nestačí, viz [CIDR](/it/pocitacove-site/13-cidr-podsitovani-a-vlsm/), [NAT](/it/pocitacove-site/14-nat-preklad-adres/), [IPv6](/it/pocitacove-site/15-ipv6-adresovani/).
- Adresa = **část sítě** (NetID) + **část zařízení** (HostID). Zařízení v jedné síti mají stejnou síťovou část.

### Převod oktetu do dvojkové soustavy

| Bit | 1. | 2. | 3. | 4. | 5. | 6. | 7. | 8. |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| váha | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

192 = 128 + 64 → `11000000`; 168 = 128 + 32 + 8 → `10101000`; 25 = 16 + 8 + 1 → `00011001`; 1 → `00000001`:

```
11000000.10101000.00011001.00000001
```

## Maska sítě

**Maska** = 32 bitů, **zleva souvislé jedničky**, pak nuly. **Jedničky = síť**, **nuly = zařízení**.

- Zápis desítkově (`255.255.255.0`) nebo **prefixem** = počet jedniček (`/24`): `192.168.25.1/24`.
- Možné hodnoty oktetu masky:

| Binárně | Desítkově | Jedniček |
| --- | --- | --- |
| `00000000` | 0 | 0 |
| `10000000` | 128 | 1 |
| `11000000` | 192 | 2 |
| `11100000` | 224 | 3 |
| `11110000` | 240 | 4 |
| `11111000` | 248 | 5 |
| `11111100` | 252 | 6 |
| `11111110` | 254 | 7 |
| `11111111` | 255 | 8 |

![Adresa 192.168.25.1 s maskou /26 po bitech: prvních 26 bitů je část sítě, posledních 6 bitů zařízení; adresa sítě má v části zařízení nuly, broadcast jedničky](/images/content/it/pocitacove-site/ipv4-adresovani/maska-26.webp)

## Třídy IP adres

Původní **třídní adresování** (1981): maska daná prvními bity adresy.

| Třída | První bity | 1. oktet | Maska | Sítí | Zařízení v síti |
| --- | --- | --- | --- | --- | --- |
| A | `0` | 1–126 | /8 | 126 | $2^{24}-2$ = 16 777 214 |
| B | `10` | 128–191 | /16 | 16 384 | $2^{16}-2$ = 65 534 |
| C | `110` | 192–223 | /24 | 2 097 152 | $2^{8}-2$ = 254 |
| D | `1110` | 224–239 | – | – | multicast |
| E | `1111` | 240–255 | – | – | výzkum |

- **127** chybí – celé 127.0.0.0/8 je **loopback** (127.0.0.1 = localhost). Síť 0 = „tato síť“.
- Příklady: A – síť 1.0.0.0, broadcast 1.255.255.255; B – 128.0.0.0 / 128.0.255.255; C – 192.0.0.0 / 192.0.0.255.
- Problém: **plýtvání** (firma s 300 počítači dostala celé B = 65 534 adres). Od 1993 **beztřídní adresování – CIDR**, maska libovolné délky.

## Adresa sítě, broadcast a počet zařízení

- **Adresa sítě (NetID)** – část zařízení **samé nuly**; nepřiděluje se.
- **Broadcast** – část zařízení **samé jedničky**; dostanou ho všichni v síti; nepřiděluje se.
- **Hosté** – vše mezi nimi; první obvykle dostane router (brána).

Při $n$ bitech pro zařízení ($n = 32 - \text{prefix}$):

$$2^{n}-2$$

použitelných adres (−2 za síť a broadcast).

### Postup výpočtu

1. Napiš IP a masku.
2. Oktet, kde maska není 255 ani 0, převeď do dvojkové soustavy.
3. Bity pod jedničkami masky opiš – část sítě (= adresa AND maska).
4. **NetID**: zbytek **nuly**.
5. **Broadcast**: zbytek **jedničky**.
6. Převeď zpět do desítkové.
7. První host = NetID + 1, poslední = broadcast − 1, počet $2^{n}-2$.

### Řešený příklad 1 – maska na celé oktety (/24)

192.168.25.1 / 255.255.255.0:

```
IP:   11000000.10101000.00011001.00000001
M:    11111111.11111111.11111111.00000000
N:    11000000.10101000.00011001.00000000   192.168.25.0
B:    11000000.10101000.00011001.11111111   192.168.25.255
```

- NetID **192.168.25.0**, broadcast **192.168.25.255**
- hosté .1 – .254
- $2^{8}-2 = 254$

### Řešený příklad 2 – maska /26

192.168.25.1 / 255.255.255.192. Rozhoduje 4. oktet: 192 = `11000000` → 2 bity síť, 6 bitů zařízení.

```
IP (4. oktet):  00|000001      1
M  (4. oktet):  11|000000    192
N  (4. oktet):  00|000000      0   → 192.168.25.0
B  (4. oktet):  00|111111     63   → 192.168.25.63
```

- NetID **192.168.25.0**, broadcast **192.168.25.63**
- hosté .1 – .62
- $2^{6}-2 = 62$

### Řešený příklad 3 – maska /20

172.16.45.200/20 → maska 255.255.240.0. Rozhoduje 3. oktet: 45 = `00101101`.

```
IP (3. oktet):  0010|1101     45
M  (3. oktet):  1111|0000    240
N  (3. oktet):  0010|0000     32   → 172.16.32.0
B  (3. oktet):  0010|1111     47   → 172.16.47.255
```

4. oktet: u NetID 0, u broadcastu 255.

- NetID **172.16.32.0**, broadcast **172.16.47.255**
- hosté 172.16.32.1 – 172.16.47.254
- $2^{12}-2 = 4\,094$

### Rychlý způsob – velikost bloku

**Blok = 256 − maska** (v „zlomeném“ oktetu). Sítě začínají na násobcích bloku.

- /26: 256 − 192 = **64** → sítě .0, .64, .128, .192; adresa .1 je v .0–.63.
- /20: 256 − 240 = **16** ve 3. oktetu → 0, 16, 32, 48…; 45 je mezi 32 a 47.

### Řešený příklad 4 – jsou dvě adresy ve stejné síti?

A = 10.1.1.10/27, B = 10.1.1.40/27. Blok 256 − 224 = 32 → sítě .0–31, .32–63. A je v síti .0, B v .32 → **různé sítě**, komunikují jen přes router.

Tak rozhoduje každý počítač: cíl AND maska = moje síť → pošle přímo (MAC přes ARP), jinak **výchozí bráně**.

## Druhy vysílání

- **Unicast** – jednomu zařízení.
- **Broadcast** – všem v LAN. **Směrovaný** na broadcast konkrétní sítě (192.168.1.255 pro /24), **omezený** 255.255.255.255 jen do vlastní sítě. Routery broadcast nepropouštějí.
- **Multicast** – skupině (třída D, 224.0.0.0–239.255.255.255); 224.0.0.5 = routery OSPF, 224.0.0.9 = RIPv2.

## Vyhrazené adresy

| Rozsah | Význam |
| --- | --- |
| 0.0.0.0/8 | „tato síť“; 0.0.0.0 = neznámá adresa, 0.0.0.0/0 = výchozí trasa |
| 127.0.0.0/8 | **loopback**, 127.0.0.1 = test TCP/IP na vlastním PC |
| 169.254.0.0/16 | **APIPA** – samopřidělená, když nepřišla adresa z DHCP → problém s DHCP |
| 10/8, 172.16/12, 192.168/16 | **privátní** |
| 100.64.0.0/10 | carrier-grade NAT poskytovatelů |
| 192.0.2.0/24, 198.51.100.0/24, 203.0.113.0/24 | dokumentace a příklady |
| 224.0.0.0/4 | multicast |
| 240.0.0.0/4 | vyhrazeno |
| 255.255.255.255 | omezený broadcast |

## Veřejné a privátní adresy

- **Veřejné** – unikátní v Internetu; IANA → regionální registr (Evropa: RIPE NCC) → poskytovatel → zákazník.
- **Privátní** (RFC 1918) – jen v interních sítích, v Internetu se nesměrují; použít je smí kdokoli a opakují se. Ven je přeloží [NAT](/it/pocitacove-site/14-nat-preklad-adres/) na veřejnou adresu. Výrazně zpomalily vyčerpání IPv4.

| Rozsah | Prefix | Adresy | Původně |
| --- | --- | --- | --- |
| 10.0.0.0 | /8 | 10.0.0.0 – 10.255.255.255 | 1 síť A |
| 172.16.0.0 | /12 | 172.16.0.0 – 172.31.255.255 | 16 sítí B |
| 192.168.0.0 | /16 | 192.168.0.0 – 192.168.255.255 | 256 sítí C |

Pozor: 172.32.0.1 už je **veřejná**.

## Statické a dynamické přidělování adres

Potřeba: **IP**, **maska**, **výchozí brána**, **DNS server**.

- **Výchozí brána** – IP rozhraní routeru v naší síti; jde na ni vše mimo vlastní síť. Musí být ve stejné síti jako počítač.
- **Statická** – ručně v zařízení; pro servery, routery, tiskárny, kamery. Nevýhody: pracnost, riziko konfliktu. Veřejná statická od ISP obvykle za příplatek.
- **Dynamická** – přes **DHCP** na dobu zápůjčky (DORA viz [protokoly TCP/IP](/it/pocitacove-site/03-protokoly-tcp-ip/#dhcp-dynamic-host-configuration-protocol)); pro běžné klienty. **Rezervace** = vždy stejná adresa pro danou MAC.

Příkazy Windows: `ipconfig /all`, `ipconfig /release` + `/renew` (nová adresa z DHCP), `ping 127.0.0.1` (test TCP/IP), `ping` na bránu (test LAN).

## Otázky k opakování

1. Kolik bitů má IPv4 adresa a kolik adres tedy existuje? ||32 bitů, $2^{32}$ = 4 294 967 296 adres||
2. Co určuje maska a jak se zapisuje prefixem? ||které bity adresy patří síti (jedničky) a které zařízení (nuly); počtem jedniček za lomítkem, např. /24||
3. Kolik zařízení může být v síti třídy B a proč odečítáme 2? ||$2^{16}-2$ = 65 534; adresa sítě a broadcastová adresa se zařízením přidělit nedají||
4. Určete NetID, broadcast a rozsah hostů pro 192.168.10.77/26. ||blok 64: NetID 192.168.10.64, broadcast 192.168.10.127, hosté .65–.126 (62)||
5. Určete NetID a broadcast pro 10.20.130.5/18. ||maska 255.255.192.0, blok 64 ve 3. oktetu: NetID 10.20.128.0, broadcast 10.20.191.255, hostů $2^{14}-2$ = 16 382||
6. Jsou adresy 172.16.5.10/23 a 172.16.4.200/23 ve stejné síti? ||ano – blok 2 ve 3. oktetu, obě leží v síti 172.16.4.0/23 (172.16.4.0–172.16.5.255)||
7. Vyjmenujte rozsahy privátních adres. ||10.0.0.0/8, 172.16.0.0/12 (do 172.31.255.255), 192.168.0.0/16||
8. Co znamená, že má počítač adresu 169.254.x.x? ||nezískal adresu od DHCP serveru a přidělil si sám adresu APIPA||
9. K čemu je adresa 127.0.0.1 a proč chybí síť 127 ve třídě A? ||loopback pro test TCP/IP v počítači; celý rozsah 127.0.0.0/8 je pro loopback vyhrazen||
10. Které čtyři údaje potřebuje počítač pro připojení k Internetu a kdy volíme statickou adresu? ||IP adresu, masku, výchozí bránu a DNS server; statickou pro servery, routery a tiskárny||
