---
title: "Ethernet a LAN"
order: 8
source: "site/Ethernet_new.pdf; IT/Datové-sítě.docx"
---

**Ethernet** je nejrozšířenější technologie pro budování lokálních sítí (LAN). Popisuje kabely a signály (fyzickou vrstvu) i formát rámců, adresování a přístup k médiu (linkovou vrstvu) – v modelu TCP/IP tedy **vrstvu síťového rozhraní**. Původně měl „sdílenou“ povahu: všechny stanice se dělily o jeden kabel a pracovaly v režimu bez navazování spojení s mnohonásobným přístupem k médiu. Díky přepínačům (switchům) se z něj stala „nesdílená“ technologie, kde má každá stanice vlastní linku. Všechny verze Ethernetu od 10 Mb/s po stovky Gb/s používají **stejný formát rámce**, a proto spolu bez problémů spolupracují.

## Historie

| Rok | Událost |
| --- | --- |
| 1973 | první návrh Ethernetu v laboratořích Xerox PARC (Robert Metcalfe), 2,94 Mb/s na koaxiálním kabelu |
| 1980 | standard **DIX** firem **DEC, Intel a Xerox** pro kancelářské aplikace: 10 Mb/s, tlustý koax |
| 1983–1985 | v pozměněné podobě normalizován institutem IEEE jako **IEEE 802.3** |
| 1985 | tenký koaxiální kabel (10BASE2) |
| 1987 | optické vlákno |
| 1990 | kroucená dvoulinka (**10BASE-T**) |
| 1995 | Fast Ethernet 100 Mb/s (802.3u) |
| 1997 | plně duplexní Ethernet (802.3x) |
| 1998–1999 | Gigabit Ethernet (802.3z po optice, 802.3ab 1000BASE-T po kroucené dvoulince) |
| 2002 | 10 Gb/s Ethernet po optice (802.3ae); 2006 i po kroucené dvoulince (802.3an) |
| 2010 | 40 a 100 Gb/s (802.3ba) |
| 2016–2017 | 2,5 a 5 Gb/s po stávající kabeláži Cat 5e/6, 25, 200 a 400 Gb/s |

Ethernet se postupně rozšířil i mimo LAN – **metropolitní Ethernet** propojuje pobočky v rámci města a Ethernet se používá i v páteřních a přístupových sítích poskytovatelů.

## Ethernet a linková vrstva

Linková vrstva Ethernetu se dělí na dvě podvrstvy:

- **MAC** (Media Access Control, spodní) – závislá na hardwaru: sestavuje rámce, adresuje je MAC adresami, řídí přístup k médiu (CSMA/CD) a detekuje chyby.
- **LLC** (Logical Link Control, horní, IEEE 802.2) – nezávislá na hardwaru, realizovaná softwarem (ovladačem karty): určuje, kterému protokolu vyšší vrstvy rámec patří, a předává mu data.

Linková vrstva vloží paket síťové vrstvy do rámce s MAC adresami, u příjemce zkontroluje cílovou adresu a kontrolní součet a cizí nebo poškozené rámce zahodí. Adresu a vlastnosti MAC popisuje stránka [aktivní síťové prvky, síťová karta a MAC adresa](/it/pocitacove-site/07-aktivni-sitove-prvky-a-sitova-karta/#mac-adresa).

## Ethernetový rámec

Rámec se skládá ze **záhlaví** (adresy a typ), **dat** a **zápatí** (kontrolní součet).

| Pole | Délka | Význam |
| --- | --- | --- |
| preambule | 7 B | střídající se jedničky a nuly `10101010`; slouží k synchronizaci hodin přijímače |
| SFD (Start Frame Delimiter) | 1 B | `10101011` – označuje začátek vlastního rámce |
| cílová MAC adresa | 6 B | adresa příjemce – jedna stanice, skupina (multicast) nebo všichni (broadcast) |
| zdrojová MAC adresa | 6 B | adresa odesílatele – vždy individuální adresa konkrétního rozhraní |
| značka 802.1Q | 4 B | jen u rámců s označením VLAN (číslo VLAN a priorita) |
| typ / délka | 2 B | u Ethernet II typ protokolu ve vyšší vrstvě (EtherType), u IEEE 802.3 délka dat |
| data | 46–1 500 B | zapouzdřený paket síťové vrstvy; kratší data se doplní výplní na 46 B |
| FCS (Frame Check Sequence) | 4 B | 32bitový cyklický kontrolní součet (CRC) ze všech polí kromě preambule, SFD a FCS |

- **Minimální velikost rámce je 64 B**, maximální **1 518 B** (1 522 B se značkou VLAN) – počítá se od cílové adresy po FCS. Největší velikost dat, 1 500 B, je **MTU** Ethernetu. Rámce větší než 1 518 B (**jumbo rámce**, až 9 000 B) podporují jen některé sítě.
- Mezi rámci musí být mezera nejméně 12 B (inter-frame gap).
- Pole typ/délka: hodnota nejvýše 1 500 znamená délku (rámec IEEE 802.3), hodnota od 1 536 (0x0600) výše typ protokolu (Ethernet II). Nejčastější typy: **0x0800 IPv4**, **0x0806 ARP**, **0x86DD IPv6**, **0x8100** rámec se značkou VLAN.
- Příjemce spočítá CRC z přijatého rámce; když nesouhlasí s polem FCS, rámec **zahodí**. Opravu chyb (opakované odeslání) Ethernet neřeší, to dělají vyšší vrstvy.

### Proč minimálně 64 bajtů

Metoda CSMA/CD pozná kolizi jen tehdy, když stanice ještě vysílá. Vysílání nejkratšího rámce proto musí trvat déle, než signál oběhne celou síť tam a zpět. U 10 Mb/s Ethernetu je to 512 bitů = 64 B (tzv. slot time 51,2 µs). Kratší data se proto doplňují výplní.

Gigabitový Ethernet vysílá desetkrát rychleji, takže by při zachování 64B rámce musel zkrátit segmenty v polovičním duplexu na pouhých 10 m. Místo toho rámce kratší než 512 B prodlužuje speciálními neplatnými symboly (**Carrier Extension**). V praxi gigabitový a rychlejší Ethernet pracuje jen v plném duplexu, kde kolize nevznikají.

### Druhy rámců

- **Ethernet II** (DIX) – původní rámec DIX Ethernetu s polem typu; používá ho IP, dnes zdaleka nejběžnější.
- **IEEE 802.3 s LLC (802.2)** – pole délky a do dat vložená hlavička LLC.
- **„Raw“ 802.3** – bez LLC, používala ho firma Novell pro protokol IPX.
- **802.3 SNAP** – rozšíření LLC o identifikaci výrobce a typu protokolu.

## Přístupová metoda CSMA/CD

Klasický Ethernet počítá se **všesměrovým vysíláním**: rámec dostanou všechny stanice v kolizní doméně, a když stanice obdrží rámec s jinou než vlastní adresou, zahodí ho. Logicky jde o sběrnici (dnes fyzicky hvězdu), což dává Ethernetu „sdílený“ charakter – všechny uzly v jedné kolizní doméně se dělí o jednu přenosovou kapacitu. Sdílení končí na nejbližším mostu, přepínači nebo směrovači.

K médiu se přistupuje metodou **CSMA/CD** (podrobně na stránce [počítačové sítě – definice a dělení](/it/pocitacove-site/01-pocitacove-site-definice-pojmy-deleni-topologie-pristupove-metody/#csmacd-carrier-sense-multiple-access-with-collision-detection)):

1. Stanice naslouchá, zda je médium volné.
2. Je-li volné, vysílá; jinak čeká, až se uvolní.
3. Během vysílání sleduje, zda nedošlo ke kolizi.
4. Při kolizi přestane vysílat a vyšle signál **jam**, aby kolizi zaznamenaly všechny stanice.
5. Počká náhodnou dobu (s počtem pokusů se rozsah prodlužuje).
6. Zkusí vysílat znovu; po 16 neúspěšných pokusech rámec zahodí.

Nevýhody CSMA/CD: s počtem uzlů a zatížením roste počet kolizí a klesá efektivita, metoda nezaručuje přístup k médiu v konečném čase, a proto se nehodí pro aplikace v reálném čase. Kolizní doména by proto měla být co nejmenší. U 10BASE-T se kolize projeví tak, že se data přenášejí současně po vysílacím i přijímacím páru.

V **plně duplexním** provozu (stanice připojená vlastním kabelem k portu switche) má každý směr vlastní vodiče, kolize nevznikají a CSMA/CD se vypíná. 10Gb/s a rychlejší Ethernet už CSMA/CD vůbec nepodporuje, pracuje jen v plném duplexu.

## Označování Ethernetu

Varianty Ethernetu se označují podle vzoru **rychlost – BASE – médium**:

- číslo na začátku je **přenosová rychlost** v Mb/s (10, 100, 1000) nebo s G v Gb/s (10G),
- **BASE** znamená přenos v **základním pásmu** (baseband),
- přípona u nejstarších variant udává **maximální délku segmentu ve stovkách metrů** (10BASE**5** = 500 m, 10BASE**2** = 185 m, zaokrouhleno na 200), u novějších **typ média**: **T** kroucená dvoulinka, **F** optické vlákno, **S**/**L**/**E** krátká/dlouhá/velmi dlouhá vlnová délka laseru, **X**, **R** typ kódování, číslo za písmenem počet párů (T4 = 4 páry).

| Varianta | Rychlost | Médium | Max. délka segmentu |
| --- | --- | --- | --- |
| 10BASE5 | 10 Mb/s | tlustý koax (1 cm, žlutý), připojení přes transceiver a kabel AUI | 500 m |
| 10BASE2 | 10 Mb/s | tenký koax (0,5 cm), konektory BNC, terminátory 50 Ω | 185 m |
| 10BASE-T | 10 Mb/s | UTP Cat 3, 2 páry | 100 m |
| 10BASE-FL | 10 Mb/s | mnohovidové vlákno (existuje i jednovidová modifikace) | 2 000 m |
| 100BASE-TX | 100 Mb/s | UTP/STP Cat 5, 2 páry, impedance 100 Ω | 100 m |
| 100BASE-T4 | 100 Mb/s | UTP Cat 3, 4 páry | 100 m |
| 100BASE-T2 | 100 Mb/s | UTP Cat 3, 2 páry | 100 m |
| 100BASE-FX | 100 Mb/s | 2 mnohovidová vlákna | 412 m (half duplex), 2 km (full duplex) |
| 1000BASE-T | 1 Gb/s | UTP Cat 5e, všechny 4 páry | 100 m |
| 1000BASE-CX | 1 Gb/s | stíněný měděný kabel (twinax) pro propojení zařízení | 25 m |
| 1000BASE-SX | 1 Gb/s | mnohovidové vlákno, laser 850 nm | 220–275 m (62,5 µm), 500–550 m (50 µm) |
| 1000BASE-LX | 1 Gb/s | laser 1 310 nm, mnohovidové / jednovidové vlákno | 550 m / 5 km |
| 2.5GBASE-T, 5GBASE-T | 2,5 a 5 Gb/s | UTP Cat 5e / Cat 6 | 100 m |
| 10GBASE-T | 10 Gb/s | Cat 6 / Cat 6A (500 MHz) nebo Cat 7 | 55 m / 100 m |
| 10GBASE-SR | 10 Gb/s | mnohovidové vlákno | 26–82 m (starší vlákna), 300–400 m (OM3, OM4) |
| 10GBASE-LX4 | 10 Gb/s | mnohovidové / jednovidové vlákno | 240–300 m / 10 km |
| 10GBASE-LR, -ER | 10 Gb/s | jednovidové vlákno | 10 km, 40 km |
| 40GBASE, 100GBASE | 40, 100 Gb/s | optická vlákna; měděné kabely jen na krátké propojení | 7–10 m po mědi, km po optice |

Poznámky k jednotlivým generacím:

- **10BASE5** (Thick Wire) – nejstarší verze; stanice se připojovaly k žlutému koaxiálnímu kabelu přes transceivery a kabely **AUI** (Attachment Unit Interface – rozhraní mezi transceiverem a zbytkem síťového adaptéru).
- **10BASE2** (Thin Wire) – sběrnicová topologie, stanice se připojovaly T-konektory přímo; kabel nesměl mít jiné odbočky a na koncích musel být zakončen terminátorem 50 Ω.
- **10BASE-T** – snaha využít existující telefonní rozvody; hvězdicová topologie s hubem, konektory RJ-45. Pro připojení uzlu stačí 2 páry vodičů: jeden na vysílání, druhý na příjem; páry jsou buzeny symetricky.
- **10BASE-FL** – optika neumožňuje odbočky, rozbočení se dělá elektronicky přes hub; sloužila hlavně jako páteř.
- **100BASE-TX** – Fast Ethernet, nahradil 10BASE-T; 100BASE-FX se příliš nerozšířil.
- **1000BASE-T** – Gigabit Ethernet využívá všechny 4 páry v obou směrech současně.
- **10 Gb/s Ethernet** (IEEE 802.3ae) – jen plný duplex bez CSMA/CD; určený pro připojení výkonných serverů a pro zatížené páteřní linky.
- Dnes se pro datová centra používají 25G a 40G, 100G pro velkou hustotu portů a 400G a 800G v páteřních sítích.

## Přepínaný Ethernet

Dnešní LAN je **přepínaný Ethernet**: každé zařízení je připojeno vlastním kabelem k portu switche, switche jsou propojeny do stromu a přepínání probíhá v hardwaru. Výhody oproti sdílenému Ethernetu s huby:

- **bez kolizí** – plný duplex, každý port je samostatná kolizní doména,
- **paralelní komunikace** – několik dvojic stanic komunikuje současně plnou rychlostí,
- **vyšší bezpečnost** – rámec dostane jen adresát, ne všichni,
- **řízení provozu** – priority (QoS), řízení toku, VLAN, omezení broadcastů,
- **snazší údržba** – chyba jedné stanice neovlivní ostatní, lze kontrolovat, kdo je na kterém portu připojen.

### Kolizní doména a broadcast

- **Kolizní doména** je oblast sdíleného média (koaxiální kabel, hub), kde se vysílání mohou srazit. Switch vytváří samostatnou kolizní doménu na každém portu.
- **Broadcast** na linkové vrstvě je rámec s cílovou MAC adresou `FF-FF-FF-FF-FF-FF`; dostanou ho všechny karty v síti – projde hubem i switchem, zastaví ho až router. Na síťové vrstvě se rozlišuje **omezený broadcast** na adresu 255.255.255.255 (jen vlastní síť) a **směrovaný broadcast** na broadcastovou adresu konkrétní sítě, např. 192.168.1.255.

### Napájení po Ethernetu (PoE)

Switch s funkcí **PoE** (Power over Ethernet) napájí připojená zařízení přímo po datovém kabelu – IP telefony, kamery, přístupové body. Norma 802.3af dodá až 15,4 W na port, 802.3at (PoE+) 30 W a 802.3bt až 60–90 W.

Návrh větší přepínané sítě, Spanning Tree a VLAN popisuje stránka [přepínání, STP a VLAN](/it/pocitacove-site/09-prepinani-stp-a-vlan/).

## Otázky k opakování

1. Které vrstvy modelu ISO/OSI Ethernet popisuje? ||fyzickou a linkovou (v TCP/IP vrstvu síťového rozhraní)||
2. Popište strukturu ethernetového rámce. ||preambule 7 B + SFD 1 B, cílová MAC 6 B, zdrojová MAC 6 B, typ/délka 2 B, data 46–1 500 B, FCS 4 B||
3. Jaká je minimální a maximální velikost rámce a proč existuje minimum? ||64 B a 1 518 B; vysílání nejkratšího rámce musí trvat déle než oběh signálu sítí, aby stanice kolizi zjistila||
4. K čemu slouží pole FCS? ||nese kontrolní součet CRC; když nesouhlasí, příjemce rámec zahodí||
5. Co znamená označení 100BASE-TX a 10BASE5? ||100 Mb/s, základní pásmo, kroucená dvoulinka; 10 Mb/s, základní pásmo, segment 500 m (tlustý koax)||
6. Kolik párů využívá 100BASE-TX a 1000BASE-T a jaká je maximální délka kabelu? ||2 páry a 4 páry; 100 m||
7. Kterou variantu použijete pro propojení budov vzdálených 3 km gigabitovou rychlostí? ||1000BASE-LX po jednovidovém vlákně (do 5 km)||
8. Proč se v přepínaném Ethernetu nepoužívá CSMA/CD? ||každá stanice má vlastní linku ke switchi v plném duplexu, takže kolize nevznikají||
9. Jaký je rozdíl mezi kolizní a broadcastovou doménou? ||kolizní – kde se mohou srazit vysílání (hub ji nedělí, switch ano); broadcastová – kam dojde broadcast (dělí ji až router nebo VLAN)||
