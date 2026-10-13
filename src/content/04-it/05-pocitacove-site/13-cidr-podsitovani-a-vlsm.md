---
title: "Nedostatek adres IPv4, CIDR, podsíťování a VLSM"
order: 13
source: "IT/Datové-sítě.docx"
---

IPv4 nabízí jen asi 4,3 miliardy adres a třídní adresování jimi navíc plýtvalo. Tato stránka vysvětluje, jak se s nedostatkem adres vyrovnává **beztřídní adresování CIDR**, jak se síť dělí na **podsítě** a jak se pomocí **VLSM** přidělí každé podsíti právě tolik adres, kolik potřebuje. Předpokladem je umět spočítat adresu sítě a broadcast – viz [IPv4 adresování](/it/pocitacove-site/12-ipv4-adresovani/).

## Nedostatek IPv4 adres a jeho řešení

- V 80. letech se adresy přidělovaly po celých třídách. Organizace, která potřebovala o málo víc než 254 adres, dostala třídu B s 65 534 adresami; velké firmy a univerzity dostaly celé třídy A. Většina adres ležela ladem.
- S rozšířením Internetu v 90. letech a s mobilními zařízeními začaly adresy docházet. Centrální zásoba IANA se vyčerpala v roce **2011**, evropský registr RIPE NCC rozdal poslední blok v roce **2019**. Dnes se IPv4 adresy prodávají a pronajímají.

Řešení, která se postupně zavedla:

1. **CIDR** (1993) – beztřídní adresování: síť dostane přesně tak velký blok, jaký potřebuje, a směrovací tabulky se zmenší agregací.
2. **Podsíťování a VLSM** – přidělený blok se uvnitř organizace dělí na podsítě různé velikosti.
3. **Privátní adresy a NAT** – celá lokální síť používá privátní adresy a do Internetu vystupuje pod jedinou veřejnou adresou, viz [NAT](/it/pocitacove-site/14-nat-preklad-adres/).
4. **DHCP s dynamickými adresami** – poskytovatel nemusí mít adresu pro každého zákazníka, jen pro ty právě připojené.
5. **IPv6** – trvalé řešení se 128bitovými adresami, viz [IPv6](/it/pocitacove-site/15-ipv6-adresovani/).

## CIDR – beztřídní adresování

**CIDR** (Classless Inter-Domain Routing) zrušil vazbu masky na třídu adresy. Maska (**prefix**) může mít libovolnou délku od /0 do /32 a zapisuje se za lomítko: `203.0.113.0/27`. Přínosy:

- **bez plýtvání** – firma potřebující 500 adres dostane blok /23 (510 hostů) místo celé třídy B,
- **agregace (sumarizace) tras** – několik sousedních sítí lze v routovací tabulce nahradit jedním záznamem s kratším prefixem (supernet), takže tabulky páteřních routerů jsou menší a rychlejší.

### Přehled prefixů

| Prefix | Maska | Adres v bloku | Použitelných hostů |
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
| /31 | 255.255.255.254 | 2 | 2 (jen dvoubodové spoje) |
| /32 | 255.255.255.255 | 1 | 1 (jediné zařízení, např. trasa k jednomu hostu) |

### Řešený příklad 1 – agregace

Router má za sebou čtyři sítě 192.168.0.0/24, 192.168.1.0/24, 192.168.2.0/24 a 192.168.3.0/24. Jakým jedním záznamem je lze ohlásit sousedům?

1. Zapíšeme třetí oktet, ve kterém se sítě liší: 0 = `000000|00`, 1 = `000000|01`, 2 = `000000|10`, 3 = `000000|11`.
2. Společných je prvních 6 bitů třetího oktetu, celkem tedy 8 + 8 + 6 = 22 bitů.
3. Souhrnná trasa je **192.168.0.0/22** (maska 255.255.252.0) a pokrývá adresy 192.168.0.0 – 192.168.3.255.

Agregovat lze jen sítě, které tvoří souvislý blok začínající na násobku své velikosti.

## Podsíťování (subnetting)

Podsíťování rozdělí jednu síť na několik menších **podsítí** tak, že si část síťové masky „půjčí“ bity z části zařízení. Důvody: oddělit oddělení nebo patra (bezpečnost), zmenšit broadcastové domény, přizpůsobit sítě VLAN a fyzickému uspořádání, nepromarnit adresy.

Půjčíme-li si $s$ bitů, vznikne $2^{s}$ podsítí; zbude-li na zařízení $n$ bitů, má každá podsíť $2^{n}-2$ hostů.

### Řešený příklad 2 – stejně velké podsítě

Síť 192.168.1.0/24 rozdělte na 4 stejné podsítě.

1. Potřebujeme 4 podsítě: $2^{s} \geq 4$, tedy $s = 2$ bity.
2. Nový prefix je 24 + 2 = **/26**, maska 255.255.255.192, blok 256 − 192 = 64 adres.
3. Na zařízení zbývá 6 bitů: $2^{6}-2 = 62$ hostů v každé podsíti.

| Podsíť | Adresa sítě | První host | Poslední host | Broadcast |
| --- | --- | --- | --- | --- |
| 1 | 192.168.1.0/26 | 192.168.1.1 | 192.168.1.62 | 192.168.1.63 |
| 2 | 192.168.1.64/26 | 192.168.1.65 | 192.168.1.126 | 192.168.1.127 |
| 3 | 192.168.1.128/26 | 192.168.1.129 | 192.168.1.190 | 192.168.1.191 |
| 4 | 192.168.1.192/26 | 192.168.1.193 | 192.168.1.254 | 192.168.1.255 |

### Řešený příklad 3 – maska podle počtu hostů

Kolik bitů potřebuje podsíť pro 50 počítačů a router?

1. Potřebujeme 51 adres zařízení.
2. Hledáme nejmenší $n$, pro které $2^{n}-2 \geq 51$: $2^{5}-2 = 30$ nestačí, $2^{6}-2 = 62$ stačí, tedy $n = 6$.
3. Prefix je 32 − 6 = **/26** (maska 255.255.255.192).

## VLSM – masky proměnné délky

Při podsíťování se stejnou maskou dostane každá podsíť stejně adres, i když jedna potřebuje 100 a druhá 2. **VLSM** (Variable Length Subnet Mask) dovolí v jedné síti použít **masky různé délky**, takže se blok rozdělí hospodárně a hierarchicky. VLSM podporují beztřídní směrovací protokoly (RIPv2, OSPF, EIGRP); třídní RIPv1 masku v aktualizacích neposílá, a VLSM proto nepodporuje.

**Postup:** požadavky seřadíme od **největšího** po nejmenší, každé podsíti určíme nejmenší dostatečný prefix a bloky přidělujeme postupně od začátku rozsahu – každý blok začíná na násobku své velikosti.

### Řešený příklad 4 – VLSM

Firma má přidělenou síť 192.168.10.0/24 a potřebuje: LAN A pro 100 zařízení, LAN B pro 50, LAN C pro 20 a dvě dvoubodové linky mezi routery (po 2 adresách).

| Podsíť | Potřeba | Nejmenší blok | Prefix | Adresa sítě | Rozsah hostů | Broadcast |
| --- | --- | --- | --- | --- | --- | --- |
| LAN A | 100 | 128 (126 hostů) | /25 | 192.168.10.0 | .1 – .126 | 192.168.10.127 |
| LAN B | 50 | 64 (62 hostů) | /26 | 192.168.10.128 | .129 – .190 | 192.168.10.191 |
| LAN C | 20 | 32 (30 hostů) | /27 | 192.168.10.192 | .193 – .222 | 192.168.10.223 |
| linka 1 | 2 | 4 (2 hosté) | /30 | 192.168.10.224 | .225 – .226 | 192.168.10.227 |
| linka 2 | 2 | 4 (2 hosté) | /30 | 192.168.10.228 | .229 – .230 | 192.168.10.231 |

Volný zůstal rozsah 192.168.10.232 – 192.168.10.255 pro budoucí podsítě. Se stejnou maskou by to nešlo: LAN A potřebuje /25, a dvě podsítě /25 by spotřebovaly celou /24 a na ostatní by nezbylo.

## Otázky k opakování

1. Proč IPv4 adresy došly a jaká řešení se zavedla? ||třídní přidělování plýtvalo a zařízení přibývalo; CIDR, podsíťování a VLSM, privátní adresy s NAT, dynamické přidělování, IPv6||
2. Co znamená zkratka CIDR a jaké má výhody? ||Classless Inter-Domain Routing; maska libovolné délky bez plýtvání a agregace tras do menších tabulek||
3. Kolik hostů má síť /27 a /29? ||30 a 6||
4. Jakým souhrnným záznamem lze nahradit sítě 10.0.8.0/24 až 10.0.15.0/24? ||10.0.8.0/21 (8 sítí, 3 bity; 8 = `00001|000`)||
5. Síť 172.16.0.0/16 rozdělte na 8 stejných podsítí. Jaký bude prefix a kolik hostů v každé? ||/19 (3 půjčené bity), blok 32 ve 3. oktetu, $2^{13}-2$ = 8 190 hostů||
6. Jaký prefix potřebuje podsíť pro 200 zařízení? ||/24 (254 hostů); /25 se 126 hosty nestačí||
7. Co je VLSM a proč se podsítě přidělují od největší? ||masky proměnné délky v jedné síti; velké bloky se musí zarovnat na násobek své velikosti, takže je umístíme nejdřív a menší bloky vyplní zbytek||
8. Proč se pro linky mezi routery používá prefix /30? ||linka potřebuje jen 2 adresy a /30 jich poskytuje přesně 2 použitelné||
