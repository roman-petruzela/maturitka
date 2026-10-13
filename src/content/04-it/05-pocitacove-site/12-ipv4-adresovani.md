---
title: "IPv4 adresování"
order: 12
source: "site/IT3_IPv4_adresovani.pdf; IT/Datové-sítě.docx"
---

Každé zařízení v síti TCP/IP potřebuje **IP adresu**, **masku sítě**, a chce-li komunikovat mimo svou síť, i **výchozí bránu**. Tato stránka vysvětluje, jak je IPv4 adresa složena, co určuje maska, jak se počítá adresa sítě, broadcast a počet počítačů, jaké adresy jsou vyhrazené a privátní a jak se adresa zařízení přiděluje. Na ni navazuje [CIDR, podsíťování a VLSM](/it/pocitacove-site/13-cidr-podsitovani-a-vlsm/).

Vlastní adresu zjistíte ve Windows příkazem `ipconfig` (podrobně `ipconfig /all`), v Linuxu `ip addr`. Výpis ukáže IPv4 adresu, masku podsítě, výchozí bránu a u `/all` i MAC adresu, DNS servery a údaje o DHCP.

## IPv4 adresa

- IPv4 adresa má **32 bitů**. Zapisuje se jako čtyři **oktety** (bajty) v desítkové soustavě oddělené tečkami, např. `192.168.25.1`. Každý oktet má hodnotu 0–255.
- Celkem existuje $2^{32}$ = 4 294 967 296 adres. Kvůli rozdělení do sítí a vyhrazeným rozsahům je reálně využitelných mnohem méně – a adresy dávno nestačí, viz [CIDR](/it/pocitacove-site/13-cidr-podsitovani-a-vlsm/), [NAT](/it/pocitacove-site/14-nat-preklad-adres/) a [IPv6](/it/pocitacove-site/15-ipv6-adresovani/).
- Adresa se dělí na dvě části: **adresu sítě** (Network ID, NetID) a **adresu zařízení** v této síti (Host ID). Všechna zařízení v jedné síti mají stejnou síťovou část.

### Převod oktetu do dvojkové soustavy

Každý bit oktetu má váhu podle své pozice:

| Bit | 1. | 2. | 3. | 4. | 5. | 6. | 7. | 8. |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| váha | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

Číslo rozložíme na součet vah: 192 = 128 + 64 → `11000000`; 168 = 128 + 32 + 8 → `10101000`; 25 = 16 + 8 + 1 → `00011001`; 1 → `00000001`. Adresa 192.168.25.1 je tedy binárně

```
11000000.10101000.00011001.00000001
```

## Maska sítě

**Maska** (subnet mask) je 32bitové číslo, které má **zleva souvislou řadu jedniček** a pak samé nuly. **Jedničky** označují bity, které v IP adrese patří **síti**, **nuly** bity, které určují **zařízení**. Router a počítač podle masky poznají, do které sítě adresa patří.

- Zapisuje se desítkově (`255.255.255.0`) nebo jako **prefix** – počet jedniček za lomítkem (`/24`). Zápis `192.168.25.1/24` tedy znamená adresu 192.168.25.1 s maskou 255.255.255.0.
- Protože jedničky musí jít souvisle zleva, může mít oktet masky jen tyto hodnoty:

| Binárně | Desítkově | Jedniček v oktetu |
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

```
IP:     11000000.10101000.00011001.00000001
maska:  11111111.11111111.11111111.00000000
        |------ část sítě -------| zařízení
```

## Třídy IP adres

Původně (od roku 1981) se adresy dělily do **tříd** a maska byla daná třídou podle prvních bitů adresy. Tomuto způsobu se říká **třídní adresování** (classful).

| Třída | První bity | První oktet | Výchozí maska | Počet sítí | Zařízení v síti |
| --- | --- | --- | --- | --- | --- |
| A | `0` | 1–126 | 255.0.0.0 (/8) | 126 | $2^{24}-2$ = 16 777 214 |
| B | `10` | 128–191 | 255.255.0.0 (/16) | $2^{14}$ = 16 384 | $2^{16}-2$ = 65 534 |
| C | `110` | 192–223 | 255.255.255.0 (/24) | $2^{21}$ = 2 097 152 | $2^{8}-2$ = 254 |
| D | `1110` | 224–239 | – | – | skupinové adresy (multicast) |
| E | `1111` | 240–255 | – | – | vyhrazeno pro výzkum |

- Síť **127** chybí ve třídě A záměrně – celý rozsah 127.0.0.0/8 je vyhrazen pro **loopback** (127.0.0.1, localhost). Síť 0 znamená „tato síť“.
- Příklady: třída A – síť 1.0.0.0, broadcast 1.255.255.255; třída B – síť 128.0.0.0, broadcast 128.0.255.255; třída C – síť 192.0.0.0, broadcast 192.0.0.255.
- Nevýhodou tříd je **plýtvání**: firma, která potřebovala 300 adres, dostala celou třídu B s 65 534 adresami, protože třída C s 254 adresami nestačila. Proto se od roku 1993 používá **beztřídní adresování** (classless, **CIDR**), kde maska může mít libovolnou délku a nezávisí na prvním oktetu.

## Adresa sítě, broadcast a počet zařízení

Pro každou síť platí:

- **adresa sítě (NetID)** – část zařízení obsahuje **samé nuly**; označuje síť jako celek, žádné zařízení ji nedostane,
- **broadcastová adresa** – část zařízení obsahuje **samé jedničky**; paket na tuto adresu dostanou všechna zařízení v síti, ani tu žádné zařízení nedostane,
- **adresy zařízení (hostů)** – všechny adresy mezi nimi; první bývá obvykle přidělena routeru (výchozí bráně).

Má-li část zařízení $n$ bitů (n = 32 − prefix), je v síti

$$2^{n}-2$$

použitelných adres – dvě odečítáme za adresu sítě a broadcast.

### Postup výpočtu

1. Zapíšeme IP adresu a masku.
2. Oktet, ve kterém maska není 255 ani 0 (u masky na celé oktety stačí opsat), převedeme do dvojkové soustavy.
3. Bity adresy nad jedničkami masky opíšeme beze změny – to je část sítě (odpovídá logickému součinu AND adresy a masky).
4. **NetID**: část zařízení doplníme **nulami** až do posledního bitu.
5. **Broadcast**: část zařízení doplníme **jedničkami** až do posledního bitu.
6. Výsledek převedeme po oktetech zpět do desítkové soustavy.
7. První host = NetID + 1, poslední host = broadcast − 1, počet hostů $2^{n}-2$.

### Řešený příklad 1 – maska na celé oktety (/24)

Adresa 192.168.25.1, maska 255.255.255.0.

```
IP:   11000000.10101000.00011001.00000001
M:    11111111.11111111.11111111.00000000
N:    11000000.10101000.00011001.00000000   192.168.25.0
B:    11000000.10101000.00011001.11111111   192.168.25.255
```

- NetID: **192.168.25.0**, broadcast: **192.168.25.255**
- hosté: 192.168.25.1 – 192.168.25.254
- počet hostů: $2^{8}-2 = 254$

### Řešený příklad 2 – maska /26

Adresa 192.168.25.1, maska 255.255.255.192. Prvních 24 bitů masky jsou jedničky, rozhoduje jen čtvrtý oktet: 192 = `11000000`, síti tedy patří ještě 2 bity a na zařízení zbývá 6 bitů.

```
IP (4. oktet):  00|000001      1
M  (4. oktet):  11|000000    192
N  (4. oktet):  00|000000      0   → 192.168.25.0
B  (4. oktet):  00|111111     63   → 192.168.25.63
```

- NetID: **192.168.25.0**, broadcast: **192.168.25.63**
- hosté: 192.168.25.1 – 192.168.25.62
- počet hostů: $2^{6}-2 = 62$

### Řešený příklad 3 – maska /20

Adresa 172.16.45.200/20. Maska má 20 jedniček: 255.255.240.0 (třetí oktet 240 = `11110000`). Rozhoduje třetí oktet: 45 = `00101101`.

```
IP (3. oktet):  0010|1101     45
M  (3. oktet):  1111|0000    240
N  (3. oktet):  0010|0000     32   → 172.16.32.0
B  (3. oktet):  0010|1111     47   → 172.16.47.255
```

Ve čtvrtém oktetu je u NetID 0 a u broadcastu 255 (celý patří zařízení).

- NetID: **172.16.32.0**, broadcast: **172.16.47.255**
- hosté: 172.16.32.1 – 172.16.47.254
- na zařízení zbývá 32 − 20 = 12 bitů, počet hostů: $2^{12}-2 = 4\,094$

### Rychlý způsob – velikost bloku

V oktetu, kde maska není 255 ani 0, je **velikost bloku** = 256 − hodnota masky. Sítě začínají na násobcích bloku.

- /26: maska 192, blok 256 − 192 = **64** → sítě .0, .64, .128, .192. Adresa .1 leží v síti .0–.63.
- /20: maska 240 ve 3. oktetu, blok **16** → sítě 172.16.0.0, .16.0, .32.0, .48.0 … Oktet 45 leží mezi 32 a 47.

### Řešený příklad 4 – jsou dvě adresy ve stejné síti?

Počítač A má 10.1.1.10/27, počítač B 10.1.1.40/27. Maska /27 = 255.255.255.224, blok 256 − 224 = 32: sítě 10.1.1.0–31, 10.1.1.32–63 … A leží v síti 10.1.1.0, B v síti 10.1.1.32. Počítače jsou v **různých sítích** a mohou spolu komunikovat jen přes router.

Právě takto se rozhoduje každý počítač: cílovou adresu „vyAND-uje“ se svou maskou. Vyjde-li jeho vlastní síť, pošle paket přímo (MAC adresu zjistí přes ARP), jinak ho pošle **výchozí bráně**.

## Druhy vysílání

- **Unicast** – vysílání pro jedno konkrétní zařízení, např. 192.168.1.1.
- **Broadcast** – vysílání pro všechna zařízení v dané lokální síti. **Směrovaný broadcast** míří na broadcastovou adresu konkrétní sítě (např. 192.168.1.255 v síti 192.168.1.0/24 – platí jen s touto maskou), **omezený broadcast** 255.255.255.255 vždy jen do vlastní sítě; routery broadcasty nepropouštějí.
- **Multicast** – vysílání pro skupinu zařízení (směrovače, odběratelé videa), adresy třídy D 224.0.0.0 – 239.255.255.255. Např. 224.0.0.5 jsou všechny routery OSPF, 224.0.0.9 routery RIPv2.

## Vyhrazené adresy

| Rozsah | Význam |
| --- | --- |
| 0.0.0.0/8 | „tato síť“; 0.0.0.0 znamená neznámou adresu (DHCP klient před přidělením) a v zápisu 0.0.0.0/0 výchozí trasu |
| 127.0.0.0/8 | **loopback** – vnitřní rozhraní počítače; 127.0.0.1 (localhost) slouží k testování TCP/IP na vlastním počítači |
| 169.254.0.0/16 | **APIPA** (link-local) – adresu si počítač přidělí sám, když nezíská adresu od DHCP serveru; znamená problém s DHCP |
| 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 | **privátní** adresy (viz níže) |
| 100.64.0.0/10 | sdílené adresy poskytovatelů pro carrier-grade NAT |
| 192.0.2.0/24, 198.51.100.0/24, 203.0.113.0/24 | adresy pro dokumentaci a příklady |
| 224.0.0.0/4 | multicast (třída D) |
| 240.0.0.0/4 | vyhrazeno (třída E) |
| 255.255.255.255 | omezený broadcast |

## Veřejné a privátní adresy

- **Veřejné adresy** jsou unikátní v celém Internetu a jsou z něj viditelné; přiděluje je IANA přes regionální registry (pro Evropu RIPE NCC) poskytovatelům a ti zákazníkům.
- **Privátní adresy** (RFC 1918) jsou skupina adres, které se **ve veřejné síti nepoužívají**, ale jen v privátních sítích, které jsou od Internetu odděleny. Může je bez povolení použít kdokoli a v různých firmách se opakují. Počítače v privátní síti se schovávají za hraničním směrovačem a jejich adresa se v Internetu nevyskytuje – do Internetu je za veřejnou adresu přeloží [NAT](/it/pocitacove-site/14-nat-preklad-adres/). Privátní adresy výrazně zpomalily vyčerpání IPv4.

| Rozsah | Prefix | Rozsah adres | Původní třída |
| --- | --- | --- | --- |
| 10.0.0.0 | /8 | 10.0.0.0 – 10.255.255.255 | 1 síť třídy A |
| 172.16.0.0 | /12 | 172.16.0.0 – 172.31.255.255 | 16 sítí třídy B |
| 192.168.0.0 | /16 | 192.168.0.0 – 192.168.255.255 | 256 sítí třídy C |

Pozor: rozsah 172.16.0.0/12 končí adresou 172.31.255.255 – adresa 172.32.0.1 už je veřejná.

## Statické a dynamické přidělování adres

Zařízení potřebuje k připojení do sítě čtyři údaje: **IP adresu**, **masku**, **výchozí bránu** a adresu **DNS serveru**.

- **Výchozí brána** (default gateway) je IP adresa rozhraní routeru v naší síti. Počítač na ni posílá vše, co nepatří do jeho vlastní sítě. Musí ležet ve stejné síti jako počítač.
- **Statická adresa** se nastaví ručně v každém zařízení (Windows: Nastavení sítě → Vlastnosti IPv4, Linux: konfigurace síťového rozhraní). Používá se pro servery, routery, tiskárny a kamery, jejichž adresa se nesmí měnit. Nevýhody: pracnost a riziko chyby nebo konfliktu dvou stejných adres. Poskytovatel Internetu přiděluje statickou veřejnou adresu obvykle za příplatek.
- **Dynamická adresa** se přidělí automaticky protokolem **DHCP** na určitou dobu (dny až měsíce u poskytovatelů, hodiny v lokální síti) – průběh DORA popisuje stránka [protokoly TCP/IP](/it/pocitacove-site/03-protokoly-tcp-ip/#dhcp-dynamic-host-configuration-protocol). Vhodná pro běžné klienty, notebooky a telefony. Správce může DHCP serveru nastavit **rezervaci** – konkrétní MAC adrese se vždy přidělí stejná adresa.

Užitečné příkazy Windows: `ipconfig /all` (výpis nastavení), `ipconfig /release` a `ipconfig /renew` (vrácení a nové vyžádání adresy z DHCP), `ping 127.0.0.1` (test TCP/IP v počítači), `ping` na výchozí bránu (test lokální sítě).

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
