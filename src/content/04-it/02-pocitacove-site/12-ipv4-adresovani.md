---
title: "IPv4 adresování"
order: 12
source: "site/IT3_IPv4_adresovani.pdf; IT/Datové-sítě.docx"
---

Zařízení potřebuje **IP adresu**, **masku** a pro komunikaci mimo svou síť **výchozí bránu**. Vlastní adresu zjistí Windows `ipconfig` (`/all` i MAC, DNS), Linux `ip addr`. Navazuje [CIDR, podsíťování a VLSM](/it/pocitacove-site/13-cidr-podsitovani-a-vlsm/).

## IPv4 adresa

- **32 bitů** = čtyři **oktety** 0–255 oddělené tečkou, např. `192.168.25.1`. Celkem $2^{32}$ ≈ 4,3 miliardy adres – nestačí, řeší to [CIDR](/it/pocitacove-site/13-cidr-podsitovani-a-vlsm/), [NAT](/it/pocitacove-site/14-nat-preklad-adres/) a [IPv6](/it/pocitacove-site/15-ipv6-adresovani/).
- Adresa = **část sítě** (NetID) + **část zařízení** (HostID).
- Převod oktetu do dvojkové soustavy podle vah 128, 64, 32, 16, 8, 4, 2, 1: 192 = 128 + 64 → `11000000`, 168 → `10101000`.

## Maska sítě

**Maska** = 32 bitů, zleva souvislé **jedničky = síť**, pak **nuly = zařízení**. Zapisuje se desítkově (`255.255.255.0`) nebo **prefixem** = počet jedniček (`/24`). Oktety masky: 128, 192, 224, 240, 248, 252, 254, 255 (1–8 jedniček).

![Adresa 192.168.25.1 s maskou /26 po bitech: prvních 26 bitů je část sítě, posledních 6 bitů zařízení; adresa sítě má v části zařízení nuly, broadcast jedničky](/images/content/it/pocitacove-site/ipv4-adresovani/maska-26.webp)

## Třídy IP adres

**Třídní adresování** (1981): maska daná prvními bity adresy.

| Třída | První bity | 1. oktet | Maska | Zařízení v síti |
| --- | --- | --- | --- | --- |
| A | `0` | 1–126 | /8 | $2^{24}-2$ = 16 777 214 |
| B | `10` | 128–191 | /16 | $2^{16}-2$ = 65 534 |
| C | `110` | 192–223 | /24 | $2^{8}-2$ = 254 |
| D | `1110` | 224–239 | – | multicast |
| E | `1111` | 240–255 | – | výzkum |

- **127.0.0.0/8** je **loopback** (127.0.0.1 = localhost).
- Problém: **plýtvání** (firma s 300 počítači dostala celou třídu B). Od 1993 **beztřídní adresování – CIDR**, maska libovolné délky.

## Adresa sítě, broadcast a počet zařízení

- **Adresa sítě (NetID)** – část zařízení **samé nuly**, nepřiděluje se.
- **Broadcast** – část zařízení **samé jedničky**, dostanou ho všichni v síti, nepřiděluje se.
- Mezi nimi jsou **hosté**; první obvykle dostane router. Při $n = 32 - \text{prefix}$ bitech pro zařízení je jich $2^{n}-2$.

### Postup výpočtu

1. Napiš IP a masku, oktet, kde maska není 255 ani 0, převeď do dvojkové soustavy.
2. Bity pod jedničkami masky opiš (část sítě), zbytek **nuly** = **NetID**, zbytek **jedničky** = **broadcast**.
3. První host = NetID + 1, poslední = broadcast − 1.

**Příklad 1 – 192.168.25.1 / 255.255.255.192 (/26).** Rozhoduje 4. oktet: 192 = `11000000` → 2 bity síť, 6 bitů zařízení.

```
IP (4. oktet):  00|000001      1
M  (4. oktet):  11|000000    192
NetID:          00|000000      0   → 192.168.25.0
Broadcast:      00|111111     63   → 192.168.25.63
```

NetID **192.168.25.0**, broadcast **192.168.25.63**, hosté .1 – .62 ($2^{6}-2 = 62$).

**Příklad 2 – 172.16.45.200/20** (maska 255.255.240.0). Rozhoduje 3. oktet: 45 = `0010|1101`, maska `1111|0000`.

- NetID: `0010|0000` = 32 → **172.16.32.0**; broadcast: `0010|1111` = 47 → **172.16.47.255**.
- Hosté 172.16.32.1 – 172.16.47.254, $2^{12}-2 = 4\,094$.

### Rychlý způsob – velikost bloku

**Blok = 256 − maska** (v „zlomeném“ oktetu), sítě začínají na násobcích bloku. /26: 256 − 192 = **64** → sítě .0, .64, .128, .192. Počítač rozhoduje tak, že **cíl AND maska = moje síť** → pošle přímo, jinak **výchozí bráně**.

## Druhy vysílání

- **Unicast** – jednomu zařízení.
- **Broadcast** – všem v LAN (192.168.1.255 pro /24 nebo omezený 255.255.255.255); routery ho nepropouštějí.
- **Multicast** – skupině (224.0.0.0–239.255.255.255).

## Vyhrazené adresy

| Rozsah | Význam |
| --- | --- |
| 0.0.0.0/8 | „tato síť“; 0.0.0.0/0 = výchozí trasa |
| 127.0.0.0/8 | **loopback**, 127.0.0.1 = test TCP/IP na vlastním PC |
| 169.254.0.0/16 | **APIPA** – samopřidělená, když nepřišla adresa z DHCP |
| 10/8, 172.16/12, 192.168/16 | **privátní** |
| 224.0.0.0/4 | multicast |
| 255.255.255.255 | omezený broadcast |

## Veřejné a privátní adresy

- **Veřejné** – unikátní v Internetu; IANA → regionální registr (Evropa: RIPE NCC) → poskytovatel → zákazník.
- **Privátní** (RFC 1918) – jen v interních sítích, v Internetu se nesměrují, opakují se. Ven je přeloží [NAT](/it/pocitacove-site/14-nat-preklad-adres/) na veřejnou adresu.

| Rozsah | Prefix | Adresy |
| --- | --- | --- |
| 10.0.0.0 | /8 | 10.0.0.0 – 10.255.255.255 |
| 172.16.0.0 | /12 | 172.16.0.0 – 172.31.255.255 |
| 192.168.0.0 | /16 | 192.168.0.0 – 192.168.255.255 |

## Statické a dynamické přidělování adres

Potřeba: **IP**, **maska**, **výchozí brána** (IP routeru ve stejné síti), **DNS server**.

- **Statická** – ručně v zařízení; pro servery, routery, tiskárny. Nevýhody: pracnost, riziko konfliktu.
- **Dynamická** – přes **DHCP** na dobu zápůjčky (DORA viz [protokoly TCP/IP](/it/pocitacove-site/03-protokoly-tcp-ip/#dhcp-dynamic-host-configuration-protocol)); pro běžné klienty. **Rezervace** = vždy stejná adresa pro danou MAC.

## Otázky k opakování

1. Kolik bitů má IPv4 adresa a kolik adres tedy existuje? ||32 bitů, $2^{32}$ = 4 294 967 296||
2. Co určuje maska a jak se zapisuje prefixem? ||které bity patří síti (jedničky) a které zařízení (nuly); počtem jedniček, např. /24||
3. Kolik zařízení může být v síti třídy B a proč odečítáme 2? ||$2^{16}-2$ = 65 534; adresa sítě a broadcast se zařízením přidělit nedají||
4. Určete NetID, broadcast a rozsah hostů pro 192.168.10.77/26. ||blok 64: NetID 192.168.10.64, broadcast 192.168.10.127, hosté .65–.126||
5. Určete NetID a broadcast pro 10.20.130.5/18. ||maska 255.255.192.0, blok 64: NetID 10.20.128.0, broadcast 10.20.191.255||
6. Vyjmenujte rozsahy privátních adres. ||10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16||
7. Co znamená adresa 169.254.x.x? ||počítač nezískal adresu od DHCP a přidělil si sám adresu APIPA||
8. K čemu je 127.0.0.1? ||loopback pro test TCP/IP v počítači||
9. Které čtyři údaje potřebuje počítač pro připojení k Internetu a kdy volíme statickou adresu? ||IP adresu, masku, výchozí bránu a DNS; statickou pro servery, routery a tiskárny||
