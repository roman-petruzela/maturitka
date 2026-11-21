---
title: "WAN technologie a připojení k Internetu"
order: 18
source: "IT/Datové-sítě.docx; IT/13. Internet.docx"
---

**WAN** (Wide Area Network) pokrývá rozlehlé území (město, stát, kontinent) a propojuje LAN – pobočky firmy, firmu s Internetem, domácnost s poskytovatelem. Infrastrukturu vlastní **poskytovatel** (operátor, ISP), zákazník si kapacitu pronajímá. Technologie WAN se týkají **fyzické** (DSL, optika, sériová linka) a **linkové vrstvy** (PPP, HDLC, Frame Relay). Dělení sítí: [definice a dělení sítí](/it/pocitacove-site/01-pocitacove-site-definice-pojmy-deleni-topologie-pristupove-metody/).

## Způsoby připojení k WAN

| Způsob | Princip | Plus / mínus | Protokoly |
| --- | --- | --- | --- |
| **pronajatá linka** | trvalé vyhrazené spojení dvou míst | nejbezpečnější, zaručená kapacita / velmi drahé | PPP, HDLC |
| **přepojování okruhů** | okruh jen na dobu spojení (vytáčení) | levné při občasném použití / platí se za čas | PPP, ISDN, modem |
| **přepojování paketů** | sdílená síť operátora, virtuální okruhy (PVC, SVC) | levnější / bez zaručené kapacity | X.25, Frame Relay, MPLS |
| **přepojování buněk** | buňky **stejné délky** (53 B) | hlas + data současně / velká režie | ATM |

Princip okruhů, paketů a multiplexu: [informace, signály a přenosový kanál](/it/pocitacove-site/05-informace-signaly-a-prenosovy-kanal/#přepojování-okruhů-zpráv-a-paketů).

## Sériové linky: DTE, DCE, HDLC a PPP

Na konci sériové linky je **DTE** (koncové zařízení, router) a **DCE** (připojuje k síti operátora a dává hodiny – modem, CSU/DSU). V laboratoři musí DCE konec kabelu nastavit `clock rate`.

### HDLC (High-Level Data Link Control)

- Linkový protokol pro sériové linky; začátek a konec rámce značí **flag** `01111110`.
- Spolehlivá spojovaná i nespolehlivá služba, half i full duplex, dvou- i vícebodové linky, režim nadřízený–podřízený i rovnocenný.
- Výchozí na sériových rozhraních Cisco (firemní varianta, s jinými výrobci nespolupracuje).

### PPP (Point-to-Point Protocol)

- **Dvoubodové spojení** – jen dva uzly, jednoduchý, malá režie.
- **Ověření** (PAP, bezpečnější CHAP), **přidělení IP**, **více protokolů**, kontrola kvality linky, **komprese**, šifrování.
- Otevřený standard → propojí různé výrobce.

## Starší technologie WAN

- **X.25** – první veřejné paketové sítě; opravoval chyby na více vrstvách → pomalý.
- **Frame Relay** – nástupce X.25; chyby neopravuje (vadný rámec zahodí) → rychlejší; hlásí zahlcení. Topologie virtuálních okruhů: **hvězda** (centrála + pobočky), **částečná síť**, **úplná síť** (nejodolnější, nejdražší).
- **ATM** – buňky 53 B (5 B hlavička + 48 B data), zaručená kvalita pro hlas a video; páteřní sítě, pod ADSL.
- **ISDN** – digitální telefonní síť pro hlas i data; BRI 2 × 64 kb/s, PRI v Evropě 30 kanálů (~2 Mb/s).

Dnes je nahradil Ethernet a IP (metropolitní Ethernet, **MPLS** – přepínání podle značek) a Internet + VPN.

## Širokopásmové připojení k Internetu

Rychlost určuje hlavně **šířka pásma** média – proto **širokopásmové** (broadband) připojení.

### DSL (Digital Subscriber Line)

- Telefonní vedení zvládne mnohem víc než 56 kb/s vytáčeného modemu; DSL dá megabity až desítky Mb/s.
- Modem u zákazníka + **DSLAM** v ústředně. Data na **vyšších frekvencích** než hlas → telefon i Internet naráz; odděluje **splitter**.
- **ADSL** – download rychlejší než upload (odpovídá běžnému používání). **VDSL** – desítky až stovky Mb/s na krátkých vedeních.
- Dál od ústředny = nižší rychlost.

### Další způsoby připojení

- **Kabelová TV** – kabelový modem, koax (DOCSIS), sítě HFC.
- **FTTH** (optika do domu) – nejrychlejší pevné (stovky Mb/s až Gb/s); často GPON – jedno vlákno sdílí víc domácností.
- **Wi-Fi od místních ISP** – levné, ale rušení a nutná přímá viditelnost.
- **Mobilní** – LTE (4G), 5G, i jako pevné připojení.
- **Satelitní** – kde nic jiného není; geostacionární = velké zpoždění, nízká dráha (Starlink) = malé.

### PPPoE (PPP over Ethernet)

**PPP rámce zabalené v Ethernetu** – každý zákazník má vlastní PPP spojení se jménem a heslem (ověření, účtování) přes sdílenou síť. DSL a optika. Dvě fáze:

1. **vyhledání** (discovery) – broadcast, koncentrátory nabídnou, klient vybere a zjistí MAC a ID relace,
2. **relace PPP** – ověření, adresa, přenos dat.

## VPN a tunelování

**VPN** (Virtual Private Network) = **šifrovaný tunel** přes Internet; vzdálené zařízení se chová, jako by bylo ve firemní síti. Bez vlastní přenosové infrastruktury.

![Firewall s VPN serverem odděluje Internet, DMZ se servery dostupnými zvenku a vnitřní síť; zaměstnanec se připojuje šifrovaným VPN tunelem přes Internet](/images/content/it/pocitacove-site/wan/vpn-dmz.webp)

- **Site-to-site** – trvale spojí sítě dvou poboček (routery, firewally).
- **Remote access** – jednotlivý uživatel (z domova) VPN klientem k VPN serveru firmy.
- Obě strany se ověří (heslo, certifikát), vše je **šifrované**. Protokoly IPsec, OpenVPN, WireGuard, SSL/TLS VPN.

**GRE** – **tunelování**: paket jednoho protokolu v jiném (IP protokol 47, síťová vrstva); např. IPv6 nebo multicast přes IPv4. Nešifruje → kombinuje se s IPsec.

## Demilitarizovaná zóna (DMZ)

**DMZ** = segment oddělený firewallem od LAN i Internetu pro servery dostupné zvenku (web, pošta, DNS). Napadený server dá útočníkovi jen DMZ, ne vnitřní síť.

## Otázky k opakování

1. Čím se WAN liší od LAN a kterých vrstev OSI se technologie WAN týkají? ||pokrývá rozlehlé území a infrastrukturu vlastní a pronajímá operátor; fyzické a linkové vrstvy||
2. Porovnejte pronajatou linku, přepojování okruhů a přepojování paketů. ||pronajatá linka: vyhrazená, bezpečná, drahá; okruhy: sestavení na dobu spojení, platí se za čas; pakety: sdílená síť operátora, levnější, bez zaručené kapacity||
3. Co jsou DTE a DCE? ||DTE je koncové zařízení (router), DCE ho připojuje k síti operátora a dodává hodinový signál (modem, CSU/DSU)||
4. Čím se liší PPP od HDLC? ||PPP je otevřený standard s ověřováním, přidělením adresy, kompresí a podporou více protokolů; Cisco HDLC je jednoduché firemní zapouzdření||
5. Jak DSL umožňuje současně telefonovat a být na Internetu? ||data používá vyšší frekvence než hlas, oddělí je splitter||
6. Proč je ADSL asymetrické? ||uživatelé víc stahují než odesílají, proto je rychlost k uživateli vyšší než od něj||
7. K čemu slouží PPPoE? ||přenáší PPP přes Ethernet, takže poskytovatel může každého zákazníka ověřit jménem a heslem a přidělit mu adresu||
8. Co je VPN a jaké jsou její druhy? ||šifrovaný tunel přes veřejnou síť do privátní sítě; site-to-site a remote access||
9. Co je DMZ a proč se používá? ||segment sítě oddělený firewallem pro servery dostupné z Internetu, aby jejich napadení neohrozilo vnitřní síť||
