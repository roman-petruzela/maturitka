---
title: "Počítačové sítě – definice, dělení, topologie a přístupové metody"
order: 1
source: "IT/10. Počítačové sítě - definice, pojmy, dělení, topologie, přístupové metody.docx; site/Deleni_siti_2025.pdf"
---

Co je síť, jak se sítě dělí, jak se zapojují (topologie) a jak se stanice střídají ve vysílání (přístupové metody). Navazuje [model ISO/OSI a TCP/IP](/it/pocitacove-site/02-standardizace-model-iso-osi-a-tcp-ip/).

## Co je počítačová síť

**Počítačová síť** = technické a programové prostředky, které propojují počítače a jiná zařízení, aby si mohly podle pravidel vyměňovat data a sdílet služby.

Jinými slovy:

- dva a více počítačů, které spolu komunikují a sdílejí zdroje (data, software, zařízení),
- množina propojených aktivních prvků,
- soustava propojených sítí – **katenetový model**, tak funguje Internet („síť sítí“).

Propojení přes sériový/paralelní port není síť – síť vzniká až přes síťová rozhraní (karty).

### Z čeho se síť skládá

| Část | Příklady |
| --- | --- |
| uzly | počítače, servery, telefony, tiskárny, úložiště |
| propojovací software | síťová část OS, ovladače, firmware |
| síťový hardware | síťové karty, switch, router, access point |
| přenosová média | kroucená dvoulinka, koax, optika, rádio |

Prvky se dělí na **pasivní** (kabeláž, konektory, zásuvky, rozvaděče), **aktivní prvky počítače** (síťová karta), **aktivní prvky sítě** (hub, switch) a **prvky pro propojení sítí** (router, bridge, gateway). Viz [pasivní prvky](/it/pocitacove-site/06-pasivni-sitove-prvky-a-kabelaz/) a [aktivní prvky](/it/pocitacove-site/07-aktivni-sitove-prvky-a-sitova-karta/).

### Proč se sítě budují

- **sdílení hardwaru** – disky, tiskárny, plottery, skenery,
- **sdílení softwaru** – databáze, instalace, vzdálené zavádění OS, společná data,
- **komunikace** – e-mail, chat, sociální sítě,
- **sdílení informací**,
- **ochrana a zálohování dat** – centrálně na jednom místě,
- **zábava** – hry, streamování.

### Pravidla, která musí síť splňovat

- **stejné protokoly** na všech počítačích,
- data dorazí **nezkreslená**,
- příjemce **potvrdí** příjem (nebo ohlásí chybu),
- každý počítač má **adresu**,
- provoz je **bezpečný** – zařízení lze identifikovat a ověřit.

### Základní pojmy

- **Paket (rámec)** – blok dat = **hlavička** (odesílatel, příjemce, protokol, kontrolní součet) + **data**. Na linkové vrstvě se mu říká rámec.
- **MAC adresa** – fyzická 48bitová adresa síťové karty, např. `00-1A-2B-3C-4D-5E`.
- **IP adresa** – logická adresa pro směrování mezi sítěmi, viz [IPv4](/it/pocitacove-site/12-ipv4-adresovani/).
- **Protokol** – pravidla komunikace: formát zpráv, pořadí, reakce.

## Výpočetní model – role uzlů v síti

**Výpočetní model** říká, kdo v síti poskytuje služby a kdo je využívá.

| Model | Princip | Výhody | Nevýhody |
| --- | --- | --- | --- |
| centralizovaný | vše počítá mainframe, uživatelé mají terminály | snadná správa | výpadek = stojí vše, drahé |
| klient–server | **server** nabízí služby (soubory, tisk, web, DB), **klienti** je využívají | centrální správa práv a záloh | server = jediné místo selhání |
| peer-to-peer | všichni rovni, každý nabízí i využívá | levné, bez serveru | slabá správa a bezpečnost |
| distribuovaný (cloud) | data a výpočty v datových centrech, přístup přes Internet | dostupnost, platí se za využití | závislost na připojení a poskytovateli |

Síť dále může být **spojovaná / nespojovaná**, **spolehlivá / nespolehlivá**, s **přepojováním okruhů / paketů**, **„best effort“** / **s QoS**, **bloková** / **proudová**.

## Dělení počítačových sítí

| Kritérium | Druhy sítí |
| --- | --- |
| velikost | PAN, LAN (WLAN), CAN, MAN, WAN |
| technologie | IP, ISO/OSI, X.25; Ethernet, Token Ring, FDDI, Frame Relay |
| role uzlů | klient–server, peer-to-peer |
| topologie | sběrnice, hvězda, rozšířená hvězda, strom, kruh; nesystematická |
| účel | přístupové, „střední míle“, páteřní |
| vlastnictví | privátní, veřejné, VPN |
| přenosová technika | přepojování okruhů / paketů |
| komunikace | spojované, nespojované |
| použití | intranet, extranet |
| médium | metalické, optické, bezdrátové |
| mobilita | mobilní (GSM, UMTS, LTE, 5G), fixní |
| původ | počítačové, telekomunikační |
| rychlost | 10 Mb/s, 100 Mb/s (Fast), 1 Gb/s (Gigabit), 10 Gb/s+ |

### Podle velikosti (dosahu)

| Dosah | Prostor | Síť |
| --- | --- | --- |
| 1 m | okolí člověka | PAN |
| 10–100 m | místnost, budova | LAN |
| 1 km | areál | CAN |
| 10 km | město | MAN |
| 100–1 000 km | stát, kontinent | WAN |
| 10 000 km | planeta | Internet |

- **PAN** – osobní síť (telefon, sluchátka, hodinky) na pár metrů; Bluetooth, dříve IrDA.
- **HAN** – domácí síť (PC, TV, tiskárna, chytré spotřebiče).
- **LAN** – místní síť (budova, firma); přepínaný Ethernet (802.3) a Wi-Fi (802.11), desítky Mb/s až desítky Gb/s. Bezdrátová = **WLAN**.
- **CAN** – síť areálu (univerzita, podnik s více budovami).
- **MAN** – síť města; dnes hlavně metropolitní Ethernet (dříve DQDB, 802.6).
- **WAN** – rozlehlá síť přes státy a kontinenty, propojuje LAN. Největší je **Internet**.

Technologie LAN: Ethernet (802.3), Token Bus (802.4), Token Ring (802.5), Wi-Fi (802.11), FDDI aj. V praxi zbyly jen **Ethernet a Wi-Fi**.

### Vnitřní struktura rozlehlé sítě

- **Páteřní sítě** – málo uzlů, velmi rychlé a spolehlivé.
- **Sítě „střední míle“** – mezi přístupovou a páteřní sítí.
- **Přístupové sítě** („poslední míle“) – od poskytovatele k zákazníkovi.

### Podle přenosové techniky a způsobu komunikace

- **Přepojování okruhů** – po dobu spojení vyhrazená linka (klasický telefon).
- **Přepojování paketů** – pakety jdou samostatně a sdílejí linky (Internet).
- **Spojované** – nejdřív se naváže spojení (virtuální kanál), pak tečou data.
- **Nespojované** – data se pošlou bez navázání; např. Ethernet: rámec dostanou všichni a každý sám pozná, jestli je pro něj.

Podrobně v [informace, signály a přenosový kanál](/it/pocitacove-site/05-informace-signaly-a-prenosovy-kanal/).

### Podle přenosového média

- **Metalické** – kroucená dvoulinka, koaxiální kabel.
- **Optické** – optická vlákna.
- **Bezdrátové** – Wi-Fi, Bluetooth, IrDA, mobilní a satelitní sítě.

### Podle vlastnictví a způsobu použití

- **Privátní** (jedna organizace) × **veřejná** (kdokoli za úplatu). **VPN** = šifrovaný tunel přes veřejnou síť do privátní.
- **Intranet** – pro vnitřní potřebu firmy (dokumenty, plánování, komunikace).
- **Extranet** – zpřístupněný zákazníkům a partnerům (objednávky, e-commerce).

## Topologie sítě

**Topologie** = způsob propojení stanic. Ovlivňuje cenu, spolehlivost i rychlost.

![Čtyři základní topologie: sběrnice, hvězda se switchem uprostřed, kruh a mesh](/images/content/it/pocitacove-site/definice-site/topologie.webp)

- **Fyzická** – skutečné kabely a zařízení.
- **Logická** – kudy skutečně tečou data (hub zapojený do hvězdy je logicky sběrnice).

### Sběrnice (bus)

Jeden společný koaxiální kabel (BNC), stanice na **T-konektorech**, na obou koncích **terminátor** (brání odrazu signálu).

- Výhody: málo kabelu, levné, snadné rozšíření.
- Nevýhody: hodně míst poruchy, těžké hledání závady, přerušení = stojí celá síť, max. 10 Mb/s. Dnes se nepoužívá.

### Hvězda (star)

Každá stanice má vlastní kabel (UTP) k centrálnímu prvku – dnes **switchi**.

- Výhody: porucha kabelu vyřadí jen jeden počítač, snadné hledání závady i přidání stanice.
- Nevýhody: víc kabelu; výpadek switche odstaví celou hvězdu.

Víc hvězd spojených přepínačem = **rozšířená hvězda**, hierarchicky = **strom** (dnešní LAN).

### Kruh (ring)

Stanice tvoří uzavřený kruh, data jdou jedním směrem, vysílat smí držitel **tokenu**.

- Výhody: žádné kolize, levnější kabeláž než hvězda.
- Nevýhody: data jdou přes mnoho uzlů; výpadek jednoho uzlu shodí síť (pokud kruh není zdvojený jako u FDDI); těžké hledání závady.

### Nesystematická (polygonální, mesh) topologie

Nepravidelné propojení, často více cest. **Úplná** (každý s každým) – nejspolehlivější, nejdražší. **Částečná** – v páteři Internetu; výpadek linky směrovače obejdou.

## Přístupové metody

**Přístupová metoda** = pravidla, kdo smí zrovna vysílat po sdíleném kanálu, aby se signály nerušily.

- **Náhodné** – vysílá se, kdy je potřeba, s kolizí se počítá (CSMA/CD, CSMA/CA).
- **Řízené** – právo vysílat se přiděluje (token), kolize nevznikají.

### CSMA/CD (Carrier Sense Multiple Access with Collision Detection)

**Detekce kolize** – klasický sdílený Ethernet (sběrnice, hub).

![Průběh CSMA/CD: naslouchání, vysílání, kolize, signál jam, náhodné čekání a nový pokus](/images/content/it/pocitacove-site/definice-site/csma-cd.webp)

1. Stanice naslouchá, jestli někdo nevysílá.
2. Když je kanál volný, vysílá.
3. Při vysílání poslouchá – vysílají-li dva naráz, je **kolize**.
4. Kdo kolizi zjistí, přestane a pošle signál **jam**.
5. Čeká **náhodnou dobu** (po každém neúspěchu až 2× delší) a zkusí znovu; po 16 pokusech rámec zahodí.

### CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance)

**Předcházení kolizím** – Wi-Fi. Rádio neumí při vysílání poslouchat, kolizi nepozná.

1. Stanice naslouchá.
2. Když je kanál volný, počká ještě náhodnou dobu.
3. Volitelně pošle **RTS** (Request To Send) a čeká na **CTS** (Clear To Send); ostatní mezitím mlčí.
4. Příjemce potvrdí rámec **ACK**; bez ACK se rámec posílá znovu.

### Předávání tokenu (Token Ring, Token Bus, FDDI)

Sítí koluje **token**; vysílat smí jen jeho držitel, pak ho předá dál. Kolize nevznikají. Token Ring (802.5): 4 nebo 16 Mb/s.

### Plně duplexní přenos

Se switchem má každá stanice vlastní linku a pro každý směr vlastní páry vodičů (10/100 Mb/s: 1 pár tam, 1 zpět; gigabit: všechny 4 páry oběma směry). **Kolize nevznikají**, CSMA/CD se neuplatní.

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
