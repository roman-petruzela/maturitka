---
title: "Nedostatek adres IPv4, CIDR, podsíťování a VLSM"
order: 13
source: "IT/Datové-sítě.docx"
---

IPv4 má jen ~4,3 mld. adres a třídy jimi plýtvaly. Řešení: **CIDR**, **podsíťování** a **VLSM**. Předpoklad: umět spočítat síť a broadcast – viz [IPv4 adresování](/it/pocitacove-site/12-ipv4-adresovani/).

## Nedostatek IPv4 adres a jeho řešení

- V 80. letech se přidělovaly celé třídy: kdo potřeboval o trochu víc než 254 adres, dostal B (65 534). Většina adres ležela ladem.
- S Internetem a mobily adresy došly: IANA **2011**, RIPE NCC (Evropa) **2019**. Dnes se IPv4 prodávají a pronajímají.

Řešení:

1. **CIDR** (1993) – blok přesně podle potřeby + agregace tras.
2. **Podsíťování a VLSM** – dělení bloku uvnitř organizace.
3. **Privátní adresy + NAT** – celá LAN za jednou veřejnou adresou, viz [NAT](/it/pocitacove-site/14-nat-preklad-adres/).
4. **DHCP** – adresy jen pro právě připojené zákazníky.
5. **IPv6** – trvalé řešení, 128 b, viz [IPv6](/it/pocitacove-site/15-ipv6-adresovani/).

## CIDR – beztřídní adresování

**CIDR** (Classless Inter-Domain Routing) – maska nezávislá na třídě, prefix /0 až /32: `203.0.113.0/27`.

- **bez plýtvání** – na 500 adres stačí /23 (510 hostů) místo celé B,
- **agregace (sumarizace)** – více sousedních sítí = jeden záznam s kratším prefixem (supernet) → menší tabulky.

### Přehled prefixů

| Prefix | Maska | Adres | Hostů |
| --- | --- | --- | --- |
| /8 | 255.0.0.0 | 16 777 216 | 16 777 214 |
| /16 | 255.255.0.0 | 65 536 | 65 534 |
| /20 | 255.255.240.0 | 4 096 | 4 094 |
| /22 | 255.255.252.0 | 1 024 | 1 022 |
| /23 | 255.255.254.0 | 512 | 510 |
| /24 | 255.255.255.0 | 256 | 254 |
| /25 | 255.255.255.128 | 128 | 126 |
| /26 | 255.255.255.192 | 64 | 62 |
| /27 | 255.255.255.224 | 32 | 30 |
| /28 | 255.255.255.240 | 16 | 14 |
| /29 | 255.255.255.248 | 8 | 6 |
| /30 | 255.255.255.252 | 4 | 2 |
| /31 | 255.255.255.254 | 2 | 2 (jen spoj dvou bodů) |
| /32 | 255.255.255.255 | 1 | 1 (trasa k jednomu hostu) |

### Řešený příklad 1 – agregace

Sítě 192.168.0.0/24 až 192.168.3.0/24 jedním záznamem?

1. 3. oktet: 0 = `000000|00`, 1 = `000000|01`, 2 = `000000|10`, 3 = `000000|11`.
2. Společných 8 + 8 + 6 = 22 bitů.
3. Souhrn **192.168.0.0/22** (255.255.252.0) = 192.168.0.0 – 192.168.3.255.

Agregovat jde jen souvislý blok začínající na násobku své velikosti.

## Podsíťování (subnetting)

Rozdělení sítě na menší **podsítě** „půjčením“ bitů z části zařízení. Proč: oddělit oddělení/patra (bezpečnost), menší broadcastové domény, sladit s VLAN, nešetřit adresy.

Půjčíme $s$ bitů → $2^{s}$ podsítí; zbude $n$ bitů → $2^{n}-2$ hostů v každé.

### Řešený příklad 2 – stejně velké podsítě

192.168.1.0/24 na 4 stejné podsítě:

1. $2^{s} \geq 4$ → $s = 2$.
2. Prefix **/26**, maska 255.255.255.192, blok 64.
3. $2^{6}-2 = 62$ hostů.

| Podsíť | Síť | První host | Poslední host | Broadcast |
| --- | --- | --- | --- | --- |
| 1 | 192.168.1.0/26 | .1 | .62 | .63 |
| 2 | 192.168.1.64/26 | .65 | .126 | .127 |
| 3 | 192.168.1.128/26 | .129 | .190 | .191 |
| 4 | 192.168.1.192/26 | .193 | .254 | .255 |

### Řešený příklad 3 – maska podle počtu hostů

50 počítačů + router:

1. Potřeba 51 adres.
2. $2^{5}-2 = 30$ nestačí, $2^{6}-2 = 62$ stačí → $n = 6$.
3. Prefix 32 − 6 = **/26**.

## VLSM – masky proměnné délky

Se stejnou maskou dostane každá podsíť stejně adres, i když jedna chce 100 a jiná 2. **VLSM** (Variable Length Subnet Mask) = **různé masky v jedné síti** → hospodárné dělení. Umí ho RIPv2, OSPF, EIGRP; RIPv1 (třídní) ne.

**Postup:** seřadit od **největší** podsítě, každé dát nejmenší dostatečný prefix, přidělovat od začátku – blok začíná na násobku své velikosti.

### Řešený příklad 4 – VLSM

Síť 192.168.10.0/24; LAN A 100 zařízení, LAN B 50, LAN C 20, dvě linky mezi routery (po 2).

![Rozdělení 192.168.10.0/24 pomocí VLSM: LAN A /25 od .0, LAN B /26 od .128, LAN C /27 od .192, dvě linky /30 od .224 a .228, zbytek volný](/images/content/it/pocitacove-site/cidr-vlsm/vlsm.webp)

| Podsíť | Potřeba | Blok | Prefix | Síť | Hosté | Broadcast |
| --- | --- | --- | --- | --- | --- | --- |
| LAN A | 100 | 128 (126) | /25 | .0 | .1 – .126 | .127 |
| LAN B | 50 | 64 (62) | /26 | .128 | .129 – .190 | .191 |
| LAN C | 20 | 32 (30) | /27 | .192 | .193 – .222 | .223 |
| linka 1 | 2 | 4 (2) | /30 | .224 | .225 – .226 | .227 |
| linka 2 | 2 | 4 (2) | /30 | .228 | .229 – .230 | .231 |

Volné zůstává .232 – .255. Se stejnou maskou by to nešlo: dvě /25 by zabraly celou /24.

## Otázky k opakování

1. Proč IPv4 adresy došly a jaká řešení se zavedla? ||třídní přidělování plýtvalo a zařízení přibývalo; CIDR, podsíťování a VLSM, privátní adresy s NAT, dynamické přidělování, IPv6||
2. Co znamená zkratka CIDR a jaké má výhody? ||Classless Inter-Domain Routing; maska libovolné délky bez plýtvání a agregace tras do menších tabulek||
3. Kolik hostů má síť /27 a /29? ||30 a 6||
4. Jakým souhrnným záznamem lze nahradit sítě 10.0.8.0/24 až 10.0.15.0/24? ||10.0.8.0/21 (8 sítí, 3 bity; 8 = `00001|000`)||
5. Síť 172.16.0.0/16 rozdělte na 8 stejných podsítí. Jaký bude prefix a kolik hostů v každé? ||/19 (3 půjčené bity), blok 32 ve 3. oktetu, $2^{13}-2$ = 8 190 hostů||
6. Jaký prefix potřebuje podsíť pro 200 zařízení? ||/24 (254 hostů); /25 se 126 hosty nestačí||
7. Co je VLSM a proč se podsítě přidělují od největší? ||masky proměnné délky v jedné síti; velké bloky se musí zarovnat na násobek své velikosti, takže je umístíme nejdřív a menší bloky vyplní zbytek||
8. Proč se pro linky mezi routery používá prefix /30? ||linka potřebuje jen 2 adresy a /30 jich poskytuje přesně 2 použitelné||
