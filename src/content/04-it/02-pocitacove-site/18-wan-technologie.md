---
title: "WAN technologie a připojení k Internetu"
order: 18
source: "IT/Datové-sítě.docx; IT/13. Internet.docx"
---

**WAN** (Wide Area Network) pokrývá rozlehlé území a propojuje LAN – pobočky firmy, firmu s Internetem, domácnost s poskytovatelem. Infrastrukturu vlastní **poskytovatel** (ISP), zákazník si kapacitu pronajímá. Technologie WAN se týkají **fyzické** a **linkové vrstvy**. Dělení sítí: [definice a dělení sítí](/it/pocitacove-site/01-pocitacove-site-definice-pojmy-deleni-topologie-pristupove-metody/).

## Způsoby připojení k WAN

| Způsob | Princip | Plus / mínus | Příklad |
| --- | --- | --- | --- |
| **pronajatá linka** | trvalé vyhrazené spojení dvou míst | bezpečná, zaručená kapacita / drahá | PPP, HDLC |
| **přepojování okruhů** | okruh jen na dobu spojení | levné při občasném použití | ISDN, modem |
| **přepojování paketů** | sdílená síť operátora, virtuální okruhy | levnější / bez zaručené kapacity | X.25, Frame Relay, MPLS |
| **přepojování buněk** | buňky stejné délky (53 B) | hlas + data současně | ATM |

Princip: [přepojování okruhů, zpráv a paketů](/it/pocitacove-site/05-informace-signaly-a-prenosovy-kanal/#přepojování-okruhů-zpráv-a-paketů).

## Sériové linky: DTE, DCE, HDLC a PPP

- **DTE** je koncové zařízení (router), **DCE** ho připojuje k síti operátora a dává hodiny (modem, CSU/DSU).
- **HDLC** – linkový protokol pro sériové linky, výchozí na Cisco (firemní varianta).
- **PPP** (Point-to-Point Protocol) – **dvoubodové spojení**, otevřený standard: **ověření** (PAP, CHAP), **přidělení IP**, více protokolů, komprese.

Starší technologie **X.25**, **Frame Relay**, **ATM** a **ISDN** dnes nahradil Ethernet, IP (**MPLS**) a Internet s VPN.

## Širokopásmové připojení k Internetu

- **DSL** – telefonní vedení, modem u zákazníka a **DSLAM** v ústředně. Data jdou na **vyšších frekvencích** než hlas, odděluje je **splitter**. **ADSL** je asymetrické (download rychlejší než upload), **VDSL** dosahuje desítek až stovek Mb/s. Dál od ústředny = nižší rychlost.
- **Kabelová TV** – kabelový modem, koax (DOCSIS).
- **FTTH** (optika do domu) – nejrychlejší pevné připojení.
- **Wi-Fi od místních ISP**, **mobilní** (LTE, 5G), **satelitní** (geostacionární = velké zpoždění, Starlink = malé).
- **PPPoE** – PPP v Ethernetu: každý zákazník má vlastní spojení se jménem a heslem (ověření, účtování), typicky DSL a optika.

## VPN a tunelování

**VPN** (Virtual Private Network) = **šifrovaný tunel** přes Internet; vzdálené zařízení se chová, jako by bylo ve firemní síti.

![Firewall s VPN serverem odděluje Internet, DMZ se servery dostupnými zvenku a vnitřní síť; zaměstnanec se připojuje šifrovaným VPN tunelem přes Internet](/images/content/it/pocitacove-site/wan/vpn-dmz.webp)

- **Site-to-site** – trvale spojí sítě dvou poboček.
- **Remote access** – jednotlivý uživatel (z domova) VPN klientem k VPN serveru firmy.
- Obě strany se ověří a provoz je **šifrovaný** (IPsec, OpenVPN, WireGuard). **GRE** je tunelování bez šifrování (kombinuje se s IPsec).

## Demilitarizovaná zóna (DMZ)

**DMZ** = segment oddělený firewallem od LAN i Internetu pro servery dostupné zvenku (web, pošta, DNS). Napadený server dá útočníkovi jen DMZ, ne vnitřní síť.

## Otázky k opakování

1. Čím se WAN liší od LAN a kterých vrstev OSI se týká? ||pokrývá rozlehlé území, infrastrukturu vlastní a pronajímá operátor; fyzické a linkové vrstvy||
2. Porovnejte pronajatou linku, přepojování okruhů a paketů. ||pronajatá: vyhrazená, bezpečná, drahá; okruhy: sestavení na dobu spojení; pakety: sdílená síť, levnější, bez zaručené kapacity||
3. Co jsou DTE a DCE? ||DTE je koncové zařízení, DCE ho připojuje k síti operátora a dává hodiny||
4. Jak DSL umožňuje současně telefonovat a být na Internetu? ||data používají vyšší frekvence než hlas, oddělí je splitter||
5. K čemu slouží PPPoE? ||přenáší PPP přes Ethernet, poskytovatel ověří zákazníka jménem a heslem a přidělí mu adresu||
6. Co je VPN a jaké má druhy? ||šifrovaný tunel přes veřejnou síť; site-to-site a remote access||
7. Co je DMZ a proč se používá? ||segment oddělený firewallem pro servery dostupné z Internetu, aby jejich napadení neohrozilo vnitřní síť||
