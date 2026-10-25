---
title: "Počítačové sítě – definice, dělení, topologie a přístupové metody"
order: 1
source: "IT/10. Počítačové sítě - definice, pojmy, dělení, topologie, přístupové metody.docx; site/Deleni_siti_2025.pdf"
---

Počítačová síť propojuje počítače a další zařízení tak, aby si mohly vyměňovat data a sdílet prostředky. Tahle stránka vysvětluje, z čeho se síť skládá, podle čeho se sítě dělí, jak mohou být stanice propojeny (topologie) a jak se stanice dohodnou, kdo smí zrovna vysílat (přístupové metody). Na ni navazuje [model ISO/OSI a TCP/IP](/it/pocitacove-site/02-standardizace-model-iso-osi-a-tcp-ip/), který komunikaci rozkládá do vrstev.

## Co je počítačová síť

**Počítačová síť** je souhrnné označení všech technických a programových prostředků, které zajišťují spojení a výměnu informací mezi počítači či jinými zařízeními. Umožňuje uživatelům komunikovat podle určitých pravidel – vyměňovat si zprávy a data nebo společně využívat síťové služby.

Stejnou věc lze říct i jinými slovy:

- spojení dvou nebo více počítačů tak, aby mohly navzájem komunikovat a sdílet zdroje (informace, software, zařízení),
- množina vzájemně propojených aktivních prvků,
- soustava vzájemně propojených sítí – tzv. **katenetový model**, podle kterého je postaven i Internet („síť sítí“).

Za počítačovou síť se nepovažuje propojení dvou počítačů přes sériový nebo paralelní port – síť vzniká až propojením přes síťová rozhraní (síťové karty).

### Z čeho se síť skládá

| Část | Příklady |
| --- | --- |
| propojené systémy (uzly) | počítače, servery, mobilní telefony, tiskárny, paměťová zařízení |
| propojovací software | síťová část operačního systému, ovladače, firmware síťových karet a síťových zařízení |
| síťový hardware | síťové karty, přepínače (switch), směrovače (router), přístupové body, transceivery |
| fyzická přenosová média | kabely (kroucená dvoulinka, koaxiální kabel, optické vlákno) nebo bezdrátový přenos |

Technické prostředky se obvykle dělí na **pasivní prvky** (kabeláž a její bezdrátová náhrada, konektory, zásuvky, rozvaděče), **aktivní prvky počítače** (síťová karta), **aktivní prvky sítě** (hub, switch) a **prvky pro vzájemné propojení sítí** (router, bridge, gateway). Podrobně je rozebírají stránky [pasivní síťové prvky a kabeláž](/it/pocitacove-site/06-pasivni-sitove-prvky-a-kabelaz/) a [aktivní síťové prvky a síťová karta](/it/pocitacove-site/07-aktivni-sitove-prvky-a-sitova-karta/).

### Proč se sítě budují

- **sdílení technických prostředků** – paměťové jednotky, tiskárny, plottery, skenery,
- **sdílení programových prostředků** – databáze, instalační programy, vzdálené zavádění operačního systému, společná data,
- **komunikace mezi uživateli** – elektronická pošta, chat a komunikační programy, sociální sítě,
- **sdílení informací**,
- **ochrana a zálohování dat** – data jsou uložena centrálně a zálohují se na jednom místě,
- **zábava** – síťové hry, streamování.

### Pravidla, která musí síť splňovat

- Počítače musí používat **stejné komunikační protokoly**, tedy stejné postupy pro odesílání a přijímání dat.
- Data musí být doručena **nezkreslená**, tedy stejná, jako byla odeslána.
- Musí existovat způsob, jak přijímající počítač **potvrdí** odesílajícímu, že data přijal v pořádku, nebo mu oznámí, že dorazila poškozená.
- Každý počítač musí mít **adresu**, aby bylo poznat, odkud data pocházejí a kam směřují.
- Provoz musí být **bezpečný** – musí existovat metoda, jak počítače v síti identifikovat a ověřit.

### Základní pojmy

- **Datový paket (rámec)** – přenášená data se dělí na menší bloky, které se balí do paketů (na linkové vrstvě se jim říká rámce). Paket se skládá z **hlavičky** (kdo ho poslal, komu patří, jaký protokol nese, kontrolní součet) a z vlastních **dat**.
- **Fyzická adresa (MAC)** – každé zařízení se do sítě připojuje síťovou kartou, která má jednoznačnou 48bitovou fyzickou adresu MAC, např. `00-1A-2B-3C-4D-5E`.
- **Logická adresa (IP)** – adresa, kterou zařízení dostane v síti a podle které se data směrují mezi sítěmi, viz [IPv4 adresování](/it/pocitacove-site/12-ipv4-adresovani/).
- **Protokol** – dohodnutá pravidla komunikace: formát zpráv, jejich pořadí a reakce na ně.

## Výpočetní model – role uzlů v síti

Podle toho, jak spolu uzly spolupracují při provozování aplikací, se mluví o **výpočetním modelu**. Některé uzly jsou servery, některé klienti, jinde jsou si všechny rovny.

| Model | Princip | Výhody | Nevýhody |
| --- | --- | --- | --- |
| centralizovaný | výkonný centrální počítač (mainframe) provádí veškeré výpočty, uživatelé k němu přistupují přes jednoduché terminály | snadná správa, data na jednom místě | výpadek centrálního počítače zastaví vše, drahý hardware |
| klient–server | **server** je zabezpečený počítač se síťovým operačním systémem, který nabízí služby (soubory, tisk, web, pošta, databáze); **klienti** o služby žádají a mají definovaná práva | centrální správa uživatelů, práv a záloh, dobrá škálovatelnost | server je jediné místo selhání, vyšší cena |
| peer-to-peer (rovný s rovným) | všechny počítače jsou si rovny, každý může služby nabízet i využívat | levné a jednoduché pro pár počítačů, bez serveru | slabá správa a zabezpečení, nehodí se pro velké sítě |
| distribuovaný (cloud) | výpočty a data jsou rozprostřeny mezi mnoho serverů, často v datových centrech poskytovatele; uživatel služby využívá přes Internet | vysoká dostupnost, platí se jen za využití | závislost na připojení a poskytovateli |

Síť přitom může fungovat různými způsoby: **spojovaně / nespojovaně**, **spolehlivě / nespolehlivě**, na principu **přepojování okruhů / paketů**, stylem **„best effort“** (snaha bez záruky) nebo **s garancí kvality** (QoS), **blokově** nebo **proudově**.

## Dělení počítačových sítí

Sítě lze třídit podle mnoha kritérií. Přehled nejčastějších:

| Kritérium | Druhy sítí |
| --- | --- |
| velikost (dosah) | PAN, LAN (WLAN), CAN, MAN, WAN |
| architektura (síťová technologie) | IP sítě, sítě ISO/OSI, X.25; Ethernet, Token Ring, FDDI, Frame Relay |
| role uzlů | klient–server, peer-to-peer |
| topologie | systematická (sběrnice, hvězda, rozšířená hvězda, strom, kruh), nesystematická |
| účel v rámci větší sítě | přístupové, sítě „střední míle“, páteřní, přenosové |
| vlastnictví | privátní, veřejné, virtuální privátní (VPN) |
| přenosová technika | s přepojováním okruhů, s přepojováním paketů |
| způsob komunikace | spojované, nespojované |
| způsob použití | intranet, extranet |
| přenosové médium | metalické (drátové), optické, bezdrátové |
| mobilita | mobilní (NMT, GSM, UMTS, LTE, 5G), fixní |
| původ | počítačové, telekomunikační |
| přenosová rychlost | 10 Mb/s (Ethernet), 100 Mb/s (Fast Ethernet), 1 Gb/s (Gigabit Ethernet), 10 Gb/s a více |

### Podle velikosti (dosahu)

| Vzdálenost | Prostor | Typ sítě |
| --- | --- | --- |
| 1 m | stůl, okolí člověka | PAN |
| 10 m | místnost | LAN |
| 100 m | budova | LAN |
| 1 km | areál (kampus) | CAN, LAN |
| 10 km | město | MAN |
| 100 km | stát | WAN |
| 1 000 km | kontinent | WAN |
| 10 000 km | planeta | Internet |

- **PAN** (Personal Area Network) – osobní síť jednotlivce nebo velmi malé skupiny. Propojuje hlavně mobilní zařízení (telefon, notebook, sluchátka, hodinky) na vzdálenost nejvýše několika metrů. Bývá bezdrátová – Bluetooth, dříve IrDA (infračervený přenos), případně Wi-Fi nebo USB.
- **HAN** (Home Area Network) – domácí síť; novější pojem pro síť počítačů, televize, tiskárny a chytrých spotřebičů v domácnosti.
- **LAN** (Local Area Network) – lokální síť na omezeném prostoru: místnost, budova, firma. Propojuje koncové uzly typu počítač, tiskárna, server. Používá se hlavně přepínaný Ethernet (IEEE 802.3) a Wi-Fi (IEEE 802.11). Infrastrukturu tvoří metalické kabely, případně optická páteř. Rychlosti začínají na desítkách Mb/s a nejnovější technologie dosahují desítek Gb/s. Bezdrátově vytvořená lokální síť se nazývá **WLAN**.
- **CAN** (Campus Area Network) – síť areálu, např. univerzity nebo podniku s více budovami.
- **MAN** (Metropolitan Area Network) – síť v rámci města, větší než LAN a menší než WAN. Všeobecně přijatá definice neexistuje – může jít o síť s dosahem celého města nebo o síť sloužící potřebám města. IEEE pro ni vydalo standard DQDB (IEEE 802.6); dnes se používá hlavně metropolitní Ethernet.
- **WAN** (Wide Area Network) – rozlehlá síť pokrývající rozsáhlé území, státy i kontinenty. Propojují se přes ni jednotlivé lokální sítě, aby mohly komunikovat na velké vzdálenosti. Největší a nejznámější WAN je **Internet**.

Mezi technologie lokálních sítí patří Ethernet, Fast Ethernet a Gigabit Ethernet (IEEE 802.3), Token Bus (IEEE 802.4), Token Ring (IEEE 802.5), IsoEthernet (IEEE 802.9), bezdrátové sítě Wi-Fi (IEEE 802.11), 100VG-AnyLAN (IEEE 802.12), FDDI a Fibre Channel. Arcnet je dnes mrtvá technologie a v praxi zbyly prakticky jen Ethernet a Wi-Fi.

### Vnitřní struktura rozlehlé sítě

- **Páteřní sítě** propojují několik málo míst a jsou velmi rychlé a spolehlivé.
- **Sítě „střední míle“** tvoří přechod mezi přístupovou a páteřní sítí.
- **Přístupové sítě** („poslední míle“) vedou od místa, kde končí vlastní síť poskytovatele, až k zákazníkovi.

### Podle přenosové techniky a způsobu komunikace

- **Sítě s přepojováním okruhů** – před přenosem se mezi účastníky vytvoří vyhrazený okruh, který jim patří po celou dobu spojení (klasická telefonní síť).
- **Sítě s přepojováním paketů** – data se dělí na pakety, které putují sítí samostatně a sdílejí linky s pakety ostatních (Internet).
- **Spojované sítě** – před zahájením přenosu se musí navázat spojení: uzly se domluví s aktivními prvky a s protějškem a vznikne virtuální kanál, kterým data tečou.
- **Nespojované sítě** – spojení se nenavazuje, data se pošlou do sítě a ta je filtruje a směruje k cíli. Patří sem technologie založené na všesměrovém vysílání (broadcastu) – Ethernet, Token Ring, FDDI: rámec dorazí ke všem uzlům a každý uzel sám rozhodne, zda je adresátem.

Rozdíl mezi přepojováním okruhů a paketů je podrobněji vysvětlen na stránce [informace, signály a přenosový kanál](/it/pocitacove-site/05-informace-signaly-a-prenosovy-kanal/).

### Podle přenosového média

- **Metalické (drátové)** – kroucená dvoulinka (twisted pair) nebo koaxiální kabel.
- **Optické** – optická vlákna.
- **Bezdrátové** – Wi-Fi, Bluetooth, IrDA, mobilní a satelitní sítě.

### Podle vlastnictví a způsobu použití

- **Privátní síť** patří jedné organizaci, **veřejnou síť** může za úplatu používat kdokoli. **Virtuální privátní síť (VPN)** vytváří přes veřejnou síť šifrovaný tunel, takže se vzdálený počítač chová, jako by byl přímo v privátní síti.
- **Intranet** slouží vnitřním potřebám provozovatele – skupinové plánování a úkolování, sdílení dokumentů, interní komunikace.
- **Extranet** je zpřístupněn „směrem ven“, hlavně zákazníkům a partnerům – objednávky, prodej a další aplikace z oblasti e-commerce a e-business.

## Topologie sítě

**Topologie** popisuje, jak jsou stanice v síti propojeny. Je součástí síťového standardu a podstatně určuje vlastnosti výsledné sítě – cenu, spolehlivost i rychlost.

- **Fyzická topologie** popisuje skutečnou konstrukci sítě: uzly, zapojená zařízení a jejich umístění, nainstalované kabely a přípojky mezi nimi.
- **Logická topologie** popisuje, jak data sítí skutečně tečou z jednoho zařízení do druhého. Nemusí kopírovat fyzické zapojení – například hub zapojený do hvězdy se logicky chová jako sběrnice.

### Sběrnice (bus)

Stanice jsou připojeny k jednomu průběžnému vedení, které vede od stanice ke stanici. Používal se koaxiální kabel s konektory BNC, stanice se připojovaly odbočovacími **T-konektory** a oba konce vedení musely být zakončeny **terminátorem**, který brání odrazu signálu zpět do kabelu.

- Výhody: malá spotřeba kabelu, nízká cena kabeláže, snadné rozšíření.
- Nevýhody: mnoho spojů na kabelu jako možných míst poruchy, složitá lokalizace poruchy, přerušení kabelu odstaví celou síť, rychlost nejvýše 10 Mb/s. Dnes se nepoužívá.

### Hvězda (star)

Každá stanice je připojena vlastním kabelem k centrálnímu aktivnímu prvku – dříve hubu, dnes **switchi**. K propojení se používá kroucená dvoulinka (UTP).

- Výhody: nízká náchylnost k chybám, porucha jednoho kabelu vyřadí jen připojený počítač, snadná lokalizace poruchy, snadné přidání stanice.
- Nevýhody: vyšší spotřeba kabelu, je nutný aktivní prvek a jeho výpadek odstaví celou hvězdu.

Spojením několika hvězd přes další přepínač vznikne **rozšířená hvězda** a hierarchickým řazením **strom** – tak jsou zapojeny dnešní lokální sítě.

### Kruh (ring)

Spojovací vedení stanic tvoří uzavřený kruh (fyzický nebo jen logický). Data putují jedním směrem od stanice ke stanici a právo vysílat se předává pomocí **tokenu** (pešek, speciální rámec).

- Výhody: jednoduchý přenos jedním směrem, nevznikají kolize, protože vysílá vždy jen jedna stanice; kabeláž je levnější než u hvězdy.
- Nevýhody: data musí projít mnoha uzly, než dorazí k cíli; selhání jednoho uzlu nebo kabelu zhroutí celou síť (pokud kruh není zdvojený, jako u FDDI); závada se obtížně hledá.

### Nesystematická (polygonální, mesh) topologie

Uzly jsou propojeny nepravidelně, často několika cestami zároveň. **Úplná síť** (každý s každým) je nejspolehlivější, ale nejdražší; **částečná** se používá v rozlehlých sítích a v páteři Internetu, kde výpadek jedné linky obejdou směrovače jinou cestou.

## Přístupové metody

Přístupová metoda určuje pravidla, podle kterých stanice přistupují ke sdílenému komunikačnímu kanálu (kabelu nebo rádiovému pásmu). Zajišťuje, aby v jednom okamžiku vysílala jen jedna stanice – jinak by se signály navzájem rušily.

- **Náhodné (stochastické) metody** – stanice vysílá, kdy potřebuje, a s kolizí se počítá; patří sem CSMA/CD a CSMA/CA.
- **Řízené (deterministické) metody** – o právu vysílat se rozhoduje předem, např. předáváním tokenu. Ke kolizím nedochází.

### CSMA/CD (Carrier Sense Multiple Access with Collision Detection)

Metoda vícenásobného přístupu s nasloucháním nosné a **detekcí kolize**, používaná v klasickém (sdíleném) Ethernetu na sběrnici a s huby.

1. Stanice, která chce vysílat, naslouchá, zda už nevysílá někdo jiný.
2. Je-li kanál obsazený, počká, až bude volný, a pak vysílá.
3. Během vysílání sleduje, zda signál na vedení odpovídá tomu, co sama posílá. Pokud začnou dvě stanice vysílat současně, nastane **kolize**.
4. Stanice, která kolizi zjistí, přestane vysílat a vyšle krátký signál **jam**, aby o kolizi věděly všechny stanice.
5. Každá stanice počká **náhodně dlouhou dobu** (s každým dalším neúspěchem se rozsah čekání zdvojnásobuje) a zkusí to znovu; po 16 neúspěšných pokusech rámec zahodí.

### CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance)

Metoda se **zabráněním kolizím**, kterou používají bezdrátové sítě Wi-Fi. Rádiová stanice nedokáže při vysílání zároveň poslouchat, takže kolizi nepozná – snaží se jí proto předejít.

1. Stanice naslouchá, zda někdo jiný nevysílá.
2. Je-li kanál obsazený, počká, až se uvolní, a pak ještě náhodně dlouhou dobu.
3. Volitelně pošle přístupovému bodu žádost **RTS** (Request To Send) a vysílá až po obdržení povolení **CTS** (Clear To Send). Ostatní stanice, které CTS slyší, po tu dobu mlčí.
4. Příjemce každý správně přijatý rámec potvrdí zprávou **ACK**; když potvrzení nepřijde, stanice rámec pošle znovu.

### Předávání tokenu (Token Ring, Token Bus, FDDI)

Sítí putuje speciální rámec – **token**. Vysílat smí jen stanice, která token právě drží; po odvysílání (nebo když nemá co vysílat) ho předá další stanici v kruhu. Vysílá tedy vždy jen jedna stanice a kolize nevznikají. Token Ring (IEEE 802.5) pracoval rychlostí 4 nebo 16 Mb/s.

### Plně duplexní přenos

V hvězdicové síti se switchem má každá stanice vlastní linku až k portu přepínače. Kroucená dvoulinka obsahuje 4 páry vodičů: u rychlostí 10 a 100 Mb/s je jeden pár vyhrazen pro směr počítač → switch, druhý pro opačný směr a zbylé dva páry se nevyužívají; gigabitový Ethernet využívá všechny čtyři páry v obou směrech současně. Každé zařízení tak může vysílat kdykoli, kolize nevznikají a přístupová metoda CSMA/CD se vůbec neuplatní – přenosová rychlost je maximální možná.

## Otázky k opakování

1. Jak byste definovali počítačovou síť a z jakých částí se skládá? ||souhrn technických a programových prostředků pro spojení a výměnu informací mezi zařízeními; uzly, propojovací software, síťový hardware, přenosová média||
2. Jaký je rozdíl mezi modelem klient–server a peer-to-peer? ||u klient–server poskytuje služby vyhrazený server a klienti je využívají; u peer-to-peer jsou si všechny počítače rovny a služby si nabízejí navzájem||
3. Seřaďte podle dosahu PAN, WAN, LAN, MAN a ke každé uveďte příklad. ||PAN (telefon a sluchátka přes Bluetooth) < LAN (síť školy) < MAN (městská síť) < WAN (Internet)||
4. Čím se liší fyzická a logická topologie? ||fyzická popisuje skutečné zapojení kabelů a zařízení, logická cestu, kterou tečou data; hub zapojený do hvězdy je logicky sběrnice||
5. Proč se dnes nepoužívá sběrnicová topologie a co ji nahradilo? ||přerušení kabelu vyřadí celou síť, poruchy se špatně hledají a rychlost je nejvýše 10 Mb/s; nahradila ji hvězda a rozšířená hvězda se switchi||
6. Popište průběh metody CSMA/CD. ||naslouchání, vysílání při volném kanálu, detekce kolize, signál jam, náhodné čekání a nový pokus (nejvýše 16×)||
7. Proč Wi-Fi používá CSMA/CA, a ne CSMA/CD? ||rádiová stanice nemůže při vysílání poslouchat, takže kolizi nezjistí; kolizím proto předchází čekáním, případně RTS/CTS, a doručení ověřuje potvrzením ACK||
8. Proč v plně duplexní síti se switchem nevznikají kolize? ||každá stanice má vlastní linku k portu switche a pro každý směr vlastní vodiče, takže kanál s nikým nesdílí||
9. Co je intranet, extranet a VPN? ||intranet slouží vnitřním potřebám organizace, extranet je zpřístupněn zákazníkům a partnerům, VPN je šifrovaný tunel přes veřejnou síť do privátní sítě||
