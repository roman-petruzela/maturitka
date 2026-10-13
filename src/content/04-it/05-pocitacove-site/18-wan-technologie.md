---
title: "WAN technologie a připojení k Internetu"
order: 18
source: "IT/Datové-sítě.docx; IT/13. Internet.docx"
---

**WAN** (Wide Area Network) je síť, která pokrývá rozlehlé území a překračuje hranice města, regionu nebo státu. Slouží k propojení lokálních sítí – poboček firmy navzájem, firmy s Internetem, domácnosti s poskytovatelem. Infrastrukturu WAN obvykle nevlastní uživatel, ale **poskytovatel** (operátor, ISP), od kterého se kapacita pronajímá. Technologie WAN se týkají hlavně **fyzické vrstvy** (jak se data přenášejí – DSL, optika, sériová linka) a **linkové vrstvy** (zapouzdření a adresování – PPP, HDLC, Frame Relay). Dělení sítí podle rozsahu a vnitřní strukturu WAN popisuje stránka [počítačové sítě – definice a dělení](/it/pocitacove-site/01-pocitacove-site-definice-pojmy-deleni-topologie-pristupove-metody/).

## Způsoby připojení k WAN

| Způsob | Princip | Výhody a nevýhody | Protokoly |
| --- | --- | --- | --- |
| **pronajatá linka** | trvalé dvoubodové (point-to-point) spojení mezi dvěma místy, vyhrazené jen pro zákazníka | nejbezpečnější a zaručená kapacita, ale velmi drahé | PPP, HDLC |
| **přepojování okruhů** | okruh se sestaví jen na dobu spojení (vytáčení) | levné při občasném použití, ale nutné sestavení spojení a platí se za čas | PPP, ISDN, analogový modem |
| **přepojování paketů** | pakety putují sdílenou sítí operátora po trvalých (PVC) nebo přepínaných (SVC) virtuálních okruzích | levnější, ale sdílená síť bez zaručené kapacity | X.25, Frame Relay, MPLS |
| **přepojování buněk** | data se dělí na buňky **stejné délky** (53 B) a posílají virtuálními okruhy | vhodné pro současný přenos hlasu a dat, ale velká režie | ATM |

Princip přepojování okruhů a paketů a multiplexování vysvětluje stránka [informace, signály a přenosový kanál](/it/pocitacove-site/05-informace-signaly-a-prenosovy-kanal/#přepojování-okruhů-zpráv-a-paketů).

## Sériové linky: DTE, DCE, HDLC a PPP

Klasická WAN linka je **sériová**. Na každém konci je **DTE** (Data Terminal Equipment – koncové zařízení, typicky router) a **DCE** (Data Communications Equipment – zařízení, které ho připojuje k síti operátora a dodává hodinový signál, např. modem nebo CSU/DSU). V laboratoři propojené dva routery: jeden konec kabelu je DCE a musí nastavit rychlost hodin (`clock rate`).

### HDLC (High-Level Data Link Control)

- Protokol linkové vrstvy pro sériové linky, které přenášejí nečleněný proud bitů. Proto musí určit **začátek a konec rámce** – vyznačuje je **příznakem (flag)** `01111110`.
- Poskytuje spolehlivou spojovanou i nespolehlivou nespojovanou službu, pracuje v polovičním i plném duplexu, na dvoubodových i vícebodových linkách; stanice mohou komunikovat v režimu nadřízený–podřízený nebo jako rovnocenné.
- Na routerech Cisco je výchozím zapouzdřením sériových rozhraní (firemní varianta, která nespolupracuje s jinými výrobci).

### PPP (Point-to-Point Protocol)

- Protokol pro **dvoubodové spojení**. Spojuje jen dva uzly, rámec nemůže skončit jinde než na druhém konci, a proto je jednoduchý a má malou režii.
- Umožňuje **ověření** protějšku heslem (PAP, bezpečnější CHAP), **dynamické nastavení klienta** (přidělení IP adresy), přenos **více protokolů** nad jedním spojením, testování kvality linky a detekci chyb, **kompresi** a šifrování dat.
- Otevřený standard, takže na rozdíl od Cisco HDLC propojí zařízení různých výrobců.

## Starší technologie WAN

- **X.25** – první veřejné sítě s přepojováním paketů; opravoval chyby na několika vrstvách, a byl proto pomalý a náročný.
- **Frame Relay** – nástupce X.25 s přepojováním paketů. Počítá s kvalitními linkami s malou chybovostí, proto chyby neopravuje – vadný rámec bez náhrady zahodí a opravu přenechá vyšším vrstvám, což zrychlilo přenos. Upozorňuje na zahlcení sítě. Pobočky se spojovaly virtuálními okruhy v topologii **hvězdy** (centrála a pobočky; výpadek okruhu odřízne pobočku), **částečné sítě** (každé místo má aspoň dva okruhy) nebo **úplné sítě** (každý s každým – nejodolnější, ale nejdražší).
- **ATM** (Asynchronous Transfer Mode) – vysokorychlostní spojově orientovaná technologie s buňkami pevné délky 53 B (5 B hlavička + 48 B data); zaručovala kvalitu služby pro hlas a video a přenášela i IP datagramy. Používala se v páteřních sítích a pod ADSL.
- **ISDN** (Integrated Services Digital Network) – digitální telefonní síť pro současný přenos hlasu a dat po běžných telefonních vedeních; snaha přeměnit analogovou telefonní síť na digitální. Přípojka BRI měla dva kanály po 64 kb/s (dohromady 128 kb/s), PRI v Evropě 30 kanálů (asi 2 Mb/s).

Dnes je nahradily technologie založené na Ethernetu a IP (metropolitní Ethernet, **MPLS** – přepínání podle značek v síti operátora) a připojení přes Internet s VPN.

## Širokopásmové připojení k Internetu

Přenosová rychlost závisí hlavně na šířce pásma přenosového média – lepší kvalita signálu nestačí, je třeba zvětšit šířku pásma. To je hlavní myšlenka **širokopásmového** (broadband) připojení.

### DSL (Digital Subscriber Line)

- Běžná telefonie využívá telefonní vedení (místní smyčku) jen ke zlomku jeho skutečných možností – vytáčený modem dosáhne nejvýše 56 kb/s. Technologie DSL dosahují na stejném vedení rychlostí v řádu megabitů až desítek megabitů za sekundu.
- Na oba konce místní smyčky se osadí DSL modemy (u zákazníka modem, v ústředně **DSLAM**), které vytvoří digitální kanál s velkou kapacitou. Používají **vyšší frekvence** než hlas, takže lze současně telefonovat a být připojen k Internetu po jednom drátu; telefon a data na straně zákazníka oddělí **splitter**.
- **ADSL** (asymetrické DSL) má vyšší rychlost směrem k uživateli (download) než od něj (upload) – odpovídá to běžnému používání Internetu. **VDSL** dosahuje desítek až stovek Mb/s, ale jen na krátkých vedeních.
- Čím je zákazník dál od ústředny a čím horší je vedení, tím nižší rychlost.

### Další způsoby připojení

- **Kabelová televize** – kabelový modem po koaxiálním kabelu (norma DOCSIS), sítě HFC.
- **Optika až do domu** (**FTTH**, Fiber To The Home) – nejrychlejší pevné připojení (stovky Mb/s až jednotky Gb/s); často pasivní optická síť (GPON), kde jedno vlákno sdílí více domácností pomocí rozbočovače.
- **Bezdrátové (Wi-Fi) připojení** od místních poskytovatelů – levné, ale náchylné k rušení a vyžaduje přímou viditelnost; přístupový bod poskytovatele obsluhuje všechny zákazníky v dosahu.
- **Mobilní sítě** – LTE (4G), 5G; také jako pevné připojení domácností.
- **Satelitní připojení** – tam, kde nic jiného není; geostacionární družice mají velké zpoždění, družice na nízké dráze (Starlink) malé.

### PPPoE (PPP over Ethernet)

Protokol, který **zapouzdřuje rámce PPP do ethernetových rámců**. Umožňuje vytvářet dvoubodová spojení přes přepínaný Ethernet – každý zákazník má vlastní PPP spojení s přihlášením jménem a heslem, takže ho poskytovatel může ověřit a účtovat, ačkoli sdílí síť s ostatními. Používá se u DSL a optických přípojek. Má dvě fáze:

1. **vyhledání** (discovery stage) – klient pošle broadcast, jeden nebo více přístupových koncentrátorů odpoví nabídkou, klient si jeden vybere a dozví se jeho MAC adresu a identifikátor relace,
2. **relace PPP** – vlastní spojení s ověřením, přidělením adresy a přenosem dat.

## VPN a tunelování

**VPN** (Virtual Private Network) vytváří přes veřejnou síť (Internet) **šifrovaný tunel**, takže se vzdálené zařízení nebo pobočka chová, jako by byla přímo připojena do firemní sítě. Uživatelé o ní mohou rozhodovat jako o vlastní síti, přitom nemusí budovat žádnou přenosovou infrastrukturu – „privátní“ prostředí je jen virtuální.

- **Site-to-site VPN** trvale spojuje sítě dvou poboček přes jejich routery nebo firewally.
- **Remote access VPN** připojuje jednotlivé uživatele (např. z domova) do firemní sítě – ve firmě běží VPN server a zaměstnanci se k němu připojují VPN klientem odkudkoli z Internetu.
- Při navazování spojení se obě strany ověří (heslem, certifikátem) a veškerá komunikace je **šifrovaná**. Používají se protokoly IPsec, OpenVPN, WireGuard, SSL/TLS VPN.

**GRE** (Generic Routing Encapsulation) je protokol pro **tunelování** – zapouzdří pakety jednoho protokolu do jiného (IP protokol číslo 47, pracuje na síťové vrstvě). Používá se například k přenosu IPv6 nebo multicastu přes síť IPv4; sám nešifruje, proto se kombinuje s IPsec.

## Demilitarizovaná zóna (DMZ)

**DMZ** je samostatný segment sítě oddělený firewallem od vnitřní sítě i od Internetu. Umisťují se do něj servery, které musí být dostupné zvenku (web, pošta, DNS). Pokud útočník takový server ovládne, dostane se jen do DMZ, ne do vnitřní sítě s počítači zaměstnanců a citlivými daty.

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
