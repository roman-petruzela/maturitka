---
title: "Ethernet a LAN"
order: 9
source: "site/Ethernet_new.pdf"
---
Ethernet

## Ethernet a LAN

- Ethernet je technologie, která se používá pro budování lokálních sítí (LAN)

- Připojená zařízení v lokální síti (LAN, Local Area Network)

   - pracují v režimu bez navazování spojení

   - sdílejí jeden přenosový prostředek, ke kterému je umožněn mnohonásobný přístup.

- v modelu ISO/OSI realizuje fyzickou a linkovou vrstvu

- v modelu TCP/IP pak vrstvu síťového rozhraní

- měl „sdílenou“ povahu

- díky switchingu se mění na „nesdílenou“ přenosovou technologii

## Fyzická vrstva

- Fyzické parametry linky - média (kabely, rádio, světlo), signály a binární přenos.

   - může používat různá přenosová média

      - koaxiální kabel

      - kroucená dvoulinka

      - optický kabel

- Řeší fyzické poslání dat (přenášeným bitům nepřiřazuje žádný význam).

## Ethernet - Historie

   - Původní protokol

      - 1980 – rychlost 10 Mbit/s

      - byl vyvinut firmami  DEC, Intel, Xerox pro potřeby kancelářských aplikací.

      - Později byl v poněkud pozměněné podobě normalizován institutem IEEE jako norma IEEE 802.3

   - Pracovní skupina 802.3 další vývoj: možnost využití jiných přenosových médií

      - Tenký koax (1985)

      - Optické vlákno (1987)

      - Kroucená dvoulinka (1990)

      - Stomegabitový Ethernet (1995)

      - Plně duplexní Ethernet (1997)

      - Gigabitový Ethernet (1998)

- Jednotka: Bit

- Metropolitní Ethernet

## Linková vrstva ISO/OSI

- Detekce chyb, řízení toku dat a přístupu na médium.

   - MAC - media access control

## Ethernetové adresy

###### MAC adresy

      - používají se 48-bitové (6bytové) adresy

      - adresy na úrovni podvrstvy Medium Access Layer

   - LLC - logical link control,

- Fyzická adresace

   - Komunikace mezi dvěma zařízeními v jednom subnetu (nebo na bránu) pomocí MAC adresy.

- Jednotky: rámce - framy (hlavička + data + zápatí).

- každé ethernetové rozhraní by mělo mít celosvětově unikátní adresu

   - adresy jsou pevně nastaveny na jednotlivých adaptérech již při výrobě

   - jednotlivý výrobci dostávají přidělené „bloky“ adresového prostoru

   - každý výrobce dostane od IEEE identifikátor OUI (Organizationally Unique Identifier), který představuje nejvyšší 3 byty adresy

      - novell: 00-00-1B

      - 3Com: 00-20-AF

      - SMC: 00-40-27

- http://standards-oui.ieee.org/oui/oui.txt

## Ethernetové rámce

- rozlišujeme rámce

   - na úrovni podvrstvy MAC (nižší)

   - na úrovni podvrstvy LLC (vyšší)

- MAC rámec musí definovat

   - adresu příjemce a odesilatele

   - typ (druh) obsahu

### Druhy MAC rámců

   - Rámce Ethernet II - z původního DIX Ethernetu

   - Rámec IEEE 802.3 - Do nich se vkládají rámce IEEE 802.2 (rámce podvrstvy LLC)

   - Rámce raw 802.3 - Používala firma Novell

   - Rámce 802.3 SNAP

- Min. velikost rámce Ethernetu je 64 bajtů

- ● …

## Ethernetový rámec

- **Preambule** - Skládá se **z 8 byte, střídavě binární 0 a 1** . Poslední byte má tvar **10101011** a **_označuje začátek vlastního rámce_** . Preambule slouží k synchronizaci. Poslední byte se někdy nazývá omezovač počátku rámce (Starting Frame Delimiter, SFD).

- **Cílová adresa** a **zdrojová adresa** (6B) - fyzická MAC adresy, musí být  stejného typu, je to vždy individuální adresa konkrétní stanice (rozhraní).

- Typ protokolu nebo délka

- **Data** - Pole dlouhé minimálně 46 B a maximálně 1500 B. Minimální délka je nutná pro správnou detekci kolizí.

- **Zabezpečení** - (Frame Check Sequence, FCS) Dvaatřicetibitový cyklický kontrolní kód, který se **počítá ze všech polí s výjimkou preambule** a FCS

## Filosofie Ethernetu

- Počítá s všesměrovým vysíláním

## Označení

**Přenos v základním pásmu (baseband)**

- Přístupová metoda je CSMA/CD

- Logicky sběrnicová topologie / dnes hvězda - dává Ethernetu „sdílený“ charakter,

   - Všechny uzly (v rámci jedné kolizní domény) se dělí o jednu společnou přenosovou kapacitu

   - Sdílený charakter končí na na nejbližším mostu, přepínači, směrovači

   - Když stanice obdrží paket s jinou než vlastní adresou, zahodí jej.

# **10  Base  5(T)**

**Maxim. délka kabelového Přenosová segmentu (stovky metrů) rychlost nebo 10 Mbps typ přenosového média (např. T- kroucená dvojlinka(UTP), T2 UTP -využívá dva páry, F- optické vlákno, …)**

## 10 Mbit/s Ethernet

- **10Base-5** Původní Ethernet na **koaxiálním** kabelu o rychlosti 10 Mbit/s. Koaxiální kabel tvoří sběrnici, ke které se připojují pomocí speciálních tranceiverů a **AUI kabelů** jednotlivé stanice, délka segmentu **500 m** , .

- **10Base-2** Ethernet na **tenkém koaxiálním** kabelu o rychlosti 10 Mbit/s. Koaxiální kabel tvoří sběrnici, ke které se připojují jednotlivé stanice přímo. Kabel nesmí mít žádné odbočky a je na koncích zakončen odpory **50Ω** – **Terminátor,** délka segmentu **185 m,** .

- **10Base-T** Jako přenosové médium používá **kroucenou** dvoulinku s rychlostí 10 Mbit/s. Využívá **dva páry** strukturované kabeláže ze čtyř. Dnes již překonaná síť, která byla ve většině případů **nahrazena** rychlejší **100 Mbit/s variantou,** délka segmentu **100 m**

- **10Base-F** Varianta s **optickými** vlákny o rychlosti 10 Mbit/s. Používá se pro spojení na větší vzdálenost, nebo spojení mezi objekty, kde nelze použít kroucenou dvoulinku. Tvořila obvykle tzv. **pateřní** síť, která propojuje jednotlivé menší celky sítě. Dnes je již nahrazována vyššími rychlostmi (Fast Ethernet, Gigabit Ethernet).

## 1 Gbit/s Ethernet

- **1000Base-T** Ethernet s rychlostí 1000 Mbit/s, nazývaný Gigabit Ethernet. Využívá **4 páry UTP** kabeláže kategorie 5, je definován do **vzdálenosti 100 metrů** .

- **1000Base-CX** Gigabit Ethernet na bázi **měděného vodiče** pro krátké vzdálenosti, učený pro propojování skupin zařízení.

- **1000Base-SX** Gigabit Ethernet používající **mnohavidové** optické vlákno. Je určen pro **páteřní sítě** do vzdáleností **několik set metrů** .

- **1000Base-LX** Gigabit Ethernet používající **jednovidové** optické vlákno. Je určen pro větší vzdáleností až několika **desítek kilometrů** .

## 100 Mbit/s Ethernet

- **100Base-TX** Varianta s přenosovou rychlostí 100 Mbit/s, které se říká Fast Ethernet, používá **dva páry UTP** nebo STP kabelu kategorie **5,** délka segmentu **100 m,** .

- **100Base-T2** Používá **dva páry UTP** kategorie 3, 4, 5. Je to varianta vhodná pro starší rozvody strukturované kabeláže.

- **100Base-T4** Používá **čtyři páry UTP** kategorie 3, 4, 5. Také vhodná pro starší rozvody strukturované kabeláže.

- **100Base-FX** Fast Ethernet používající **dvě optická vlákna,** délka segmentu **412 m** mnohovidový kabel **, 2 km** s full-duplex režimem, s jednovidovým kabelem i větší vydálenosti.

## 1 Gbit/s Ethernet

- Při zachování min. velikosti rámce by došlo k redukci segmentů na pouhých 10m

- Místo redukce segmentů používá zvětšené rámce: rámce s rozšířením Carrier Extension

- Je-li rámec menší než 512 bajtů, je doplněn na velikost 512 bajtů neplatnými speciálními symboly, tzv. Carrier Extension.

## 10 Gbit/s Ethernet

- **10GBase-T** Ethernet, do vzdálenosti **55 metrů lze využít kabeláž kategorie 6** . Pro využití plné délky **100** je nutné použít **kategorii 6a** (augmented Category 6 – šířka pásma 500 MHz) nebo kategorie 7.

- **40GBASE** a **100GBASE** s rychlostí 40 a 100 Gbps by měl používat **optická** vlákna; **měděné kabely** do délky alespoň **10 metrů**

## 10base 5

## Thick Wire (10Base 5)

- Nejstarší verze Ethernetu

   - Žlutý koax o průměru 1 cm

- Maximálná délka jednoho segmentu 500 m

## 10base 5

- Rozhraní AUI (Attachment Unit Interface)

   - Rozhraní mezi transceiverem a ostatními obvodu síťového adaptéru

   - Dnes - umožňují připojit ke kartě např. Transcievery pro optická vlákna

## 10base 2

- Tenký koax. (průměr 0,5 cm)

- Max. Délka kabelového segmentu 185 m

10Base 2

- Topologie 10 Base 2 - sběrnice

## 10Base 2

10Base T

- Snaha využít již existující telefonní rozvody

- Rychlost 10Mb/s

- Dosah kabelu 100 m

- UTP – nestíněná kroucená dvoulinka (twist), konektory RJ-45

- Pro připojení uzlu jsou nutné 2 páry vodičů

   - Jeden vysílání

   - Druhý příjem

   - Páry jsou buzeny symetrický

- Kolize je vyjádřena tím, že se na obou párech přenáší data současně

## 10Base T

## Kolizní doména

<!-- Start of picture text -->
HUB<br>Switch<br><!-- End of picture text -->

## 10Base T

## 10base FL

- Nelze dělat odbočky

### 10BaseFL

- Rozbočení je nutné dělat elektronickou cestou – použití hub (rozbočovač)

- Rozbočení

   - Fyzická vrstva – hub se chová jako opakovač

   - Linková – hub se chová jako most, nebo switch

   - Síťová vrstva - router

- Specifikace sítě Ethernet s přenosovou rychlostí 10 Mb/s používající **optické** kabely.

- přenosové médium **multimódový** optický kabel

- Segmenty 10BaseFL mohou být dlouhé 2 000 m

- existuje i **modifikace** používající **singlemodový** optický kabel

## 100 Mbit/s Ethernet

##### 100Base-TX

- používá jako přenosové médium kroucenou dvoulinku (stíněný nebo nestíněný) s **impedancí 100 ohm** (min. Cat 5)

- **délka** kabelu mezi uzlem a aktivním prvkem může být **max. 100 m**

- 100Base-T4

- používá jako přenosové médium kroucenou dvoulinku (stíněný nebo nestíněný) s **impedancí 100 ohm** (min. Cat 3)

- **délka** kabelu mezi uzlem a aktivním prvkem může být **max. 100 m**

- používá všechny 4 páry kabelu

## 100 Mbit/s Ethernet

### 100Base-FX

   - používá jako přenosové médium **mnohovidový** optický kabel

   - délka kabelu mezi uzly může být v případě **plně duplexního** provozu **max. 2 km** ; v příp. polovičního duplexu je vzdálenost ovlivněna zapojením sítě

   - existuje i **modifikace** používající **jednovidový** optický kabel

- **technologie není příliš rozšířena**

## 1 Gbit/s Ethernet

#### 1000Base-SX

- používá jako přenosové médium **mnohovidový** optický kabel

- 850 nm laser nebo LED

- vzdálenost přenosu

- 220 m – 62,5 µm

- 500 m – 50 µm

- krátká horizontální vedení, krátká páteřní vedení

## 1 Gbit/s Ethernet

1000Base-LX

- používá jako přenosové médium **mnohovidové** nebo **jednovidový** optický kabel

- světelný zdroj 1300 nm laser

- vzdálenost přenosu

- 550 m – 62,5 µm

- 550 m – 50 µm

- krátká horizontální vedení, krátká páteřní vedení

- 5 km  – 9 µm

- dlouhá horizontální vedení, dlouhá páteřní vedení, propojování mezi budovami

- konektory ST, SC

## 10 Gbit/s Ethernet

##### IEEE 8002ae

- představuje 10 Gb/s full-duplexní přenos dat prostřednictvím optického kabelu

- UTP /STP Cat 7 a Cat. 6A

- nepoužívá již přístupovou metodu CSMA/CD, jelikož podporuje jen full-duplex media

   - stanice vysílá i přijímá současně

   - použití full-duplex režimu vede k odstranění problému kolizí

- je určen především

   - pro připojování vysoce výkonných zařízení

   - pro realizaci značně zatížených segmentů páteřních vedení

## 10 Gbit/s Ethernet

- 10GBase-SR

   - krátké vzdáleností od 26 do 82 m

   - mnohovidový kabel

- 10GBase-LX4

   - mnohovidové kabely: 240 – 300 m

   - jednovidové kabely: až 10 km

- 10GBase-LR a ER

   - jednovidové kabely

   - přenosová vzdálenost 10 a 40 km
