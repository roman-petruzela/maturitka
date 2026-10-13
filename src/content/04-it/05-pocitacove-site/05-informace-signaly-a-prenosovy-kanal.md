---
title: "Informace, signály a přenosový kanál"
order: 5
source: "IT/Datové-sítě.docx"
---

Počítačová síť přenáší informace. Aby to šlo, musí se informace vyjádřit jako data (bity), bity převést na fyzický signál, který projde kabelem, světlovodem nebo vzduchem, a na druhé straně zase zpátky. Tato stránka vysvětluje základní pojmy, jednotky a vlastnosti přenosového kanálu, rozdíl mezi analogovým a digitálním signálem, modulaci, multiplex a přepojování okruhů a paketů. Na síťovém modelu jde o úkoly **fyzické vrstvy**, viz [model ISO/OSI a TCP/IP](/it/pocitacove-site/02-standardizace-model-iso-osi-a-tcp-ip/).

## Informace a data

- **Informace** je údaj, který snižuje nejistotu příjemce – dozví se z něj něco, co předtím nevěděl.
- **Data** jsou informace zapsané v podobě vhodné k uložení, přenosu a zpracování, v počítači jako posloupnost bitů. Stejná data mohou pro různé příjemce nést různou informaci (a naopak tutéž informaci lze zapsat různými daty).
- **Bit** (binary digit) je nejmenší jednotka informace – odpověď ano/ne, hodnota 0 nebo 1.
- **Bajt** (byte, B) je 8 bitů. Malé **b** znamená bit, velké **B** bajt: 100 Mb/s je 12,5 MB/s.

### Spojitá a diskrétní informace

- **Spojitá (analogová)** informace může nabývat libovolné hodnoty z nějakého rozsahu a mění se plynule – teplota, hlasitost zvuku, jas, napětí z mikrofonu.
- **Diskrétní (nespojitá, číslicová)** informace nabývá jen konečného počtu oddělených hodnot – počet osob, znak textu, stav vypínače. Počítač pracuje jen s diskrétní informací, spojitou musí nejdřív **digitalizovat**.

### Jednotky a prefixy

Pro násobky se používají dvě soustavy předpon. **Dekadické předpony SI** jsou mocniny 10 a používají se u přenosových rychlostí a výrobci disků. **Binární předpony IEC** jsou mocniny 2 a odpovídají tomu, jak počítá operační paměť a často i operační systém.

| Předpona SI | Hodnota | Binární předpona | Hodnota |
| --- | --- | --- | --- |
| kilo (k) | $10^3 = 1\,000$ | kibi (Ki) | $2^{10} = 1\,024$ |
| mega (M) | $10^6$ | mebi (Mi) | $2^{20} = 1\,048\,576$ |
| giga (G) | $10^9$ | gibi (Gi) | $2^{30}$ |
| tera (T) | $10^{12}$ | tebi (Ti) | $2^{40}$ |
| peta (P) | $10^{15}$ | pebi (Pi) | $2^{50}$ |

V běžné řeči se „kilobajt“ často používá i pro 1 024 B – proto se jednotky KiB, MiB, GiB zavedly, aby se dalo psát jednoznačně.

**Příklad 1 – kapacita disku.** Výrobce prodává disk 1 TB = $10^{12}$ B. Operační systém, který počítá v binárních jednotkách, ukáže

$$\frac{10^{12}}{2^{30}} \approx 931\ \text{GiB}$$

Disk není menší, jen jinak počítaný.

**Příklad 2 – doba přenosu.** Jak dlouho se stahuje soubor 100 MB linkou 50 Mb/s (při plném využití linky)?

$$t = \frac{100 \cdot 8\ \text{Mb}}{50\ \text{Mb/s}} = 16\ \text{s}$$

Bajty je potřeba nejdřív převést na bity (× 8); skutečný čas bude o něco delší kvůli režii protokolů.

## Signál

**Signál** je fyzikální veličina, jejíž průběh v čase nese informaci – napětí na vodiči, intenzita světla ve vlákně, elektromagnetická vlna ve vzduchu.

| Médium | Signál |
| --- | --- |
| metalický kabel (kroucená dvoulinka, koax) | elektrické impulzy (změny napětí) |
| optické vlákno | světelné impulzy |
| bezdrátový přenos | elektromagnetické (rádiové, mikrovlnné, infračervené) vlny |

### Analogový a digitální signál

- **Analogový signál** se mění spojitě a může nabývat nekonečně mnoha hodnot (signál z mikrofonu, klasický telefon, analogové rádio). Rušení a šum se do něj přimíchají a nedají se oddělit – každé zesílení zkreslení zvětšuje.
- **Digitální signál** nabývá jen několika definovaných úrovní (nejčastěji dvou pro 0 a 1). Mírně zkreslený signál příjemce stále správně rozpozná a opakovač ho může obnovit do původní podoby, proto se data po digitálních sítích šíří bez ztráty kvality. Digitální data se snadno ukládají, kopírují, šifrují a komprimují.

**Analogově-digitální převod (A/D)** probíhá ve třech krocích:

1. **vzorkování** – v pravidelných intervalech se změří okamžitá hodnota signálu,
2. **kvantování** – změřená hodnota se zaokrouhlí na nejbližší z konečného počtu úrovní,
3. **kódování** – úroveň se zapíše jako binární číslo.

Podle **vzorkovacího teorému** (Nyquist–Shannon) musí být vzorkovací frekvence aspoň dvojnásobkem nejvyšší frekvence v signálu, jinak se signál nedá věrně obnovit:

$$f_{vz} \geq 2 f_{max}$$

Proto má zvukové CD vzorkovací frekvenci 44,1 kHz – lidské ucho slyší zhruba do 20 kHz. Opačný převod provádí **D/A převodník**.

## Způsoby přenosu

### Sériový a paralelní přenos

- **Sériový přenos** posílá bity **postupně jeden za druhým** po jednom vodiči (páru vodičů). Příklady: Ethernet, USB, SATA, PCI Express, FireWire.
- **Paralelní přenos** posílá **několik bitů najednou** po několika souběžných vodičích. Příklady: starší sběrnice ISA, PCI, ATA (IDE), paralelní port tiskárny.

Paralelní přenos se zdál rychlejší, ale při vysokých frekvencích naráží na problémy: signály na jednotlivých vodičích dorazí v trochu jiném čase (pak se znak přijme chybně), vodiče se navzájem ruší (**přeslechy**, parazitní kapacity) a kabel je drahý. Proto má paralelní přenos omezenou délku i rychlost a dnes se téměř všude používá rychlý sériový přenos – i uvnitř počítače (přechod z PCI na PCI Express, z ATA na SATA).

### Směr přenosu

- **Simplex** – data jdou jen jedním směrem (rozhlas, televizní vysílání).
- **Poloviční duplex (half duplex)** – oběma směry, ale střídavě (vysílačka, Ethernet s hubem).
- **Plný duplex (full duplex)** – oběma směry současně (telefon, Ethernet se switchem).

### Synchronizace

Příjemce musí vědět, kdy přesně začíná a končí každý bit.

- **Asynchronní přenos** – vysílač a přijímač nemají společné hodiny; okamžiky přechodu mezi bity nejsou pevně dané, takže začátek a konec každého úseku musí být jednoznačně vyznačen.
- **Arytmický (start-stop) přenos** – jednotlivé znaky se posílají asynchronně s libovolnými mezerami, ale bity uvnitř znaku synchronně. Každý znak začíná **start bitem** a končí **stop bitem** (sériový port RS-232).
- **Synchronní přenos** – data se vysílají nepřetržitě konstantní rychlostí v celých blocích (rámcích) a synchronizace se udržuje po celou dobu bloku. Rychlost se musí přizpůsobit nejpomalejšímu zařízení.

Synchronizaci lze udržet samostatným časovacím signálem, odvozením časování z přijímaných dat, nebo – nejčastěji – sloučením časování a dat vhodným **linkovým kódováním**.

### Linkové kódování

Linkový kód určuje, jak se jednotlivé bity vyjádří úrovněmi signálu na vedení.

- **NRZ** (Non-Return to Zero) – jednička je jedna úroveň, nula druhá. Jednoduché, ale při dlouhé řadě stejných bitů se signál nemění a přijímač ztratí synchronizaci.
- **Manchester** – uprostřed každého bitu je přechod (podle IEEE 802.3 nula = přechod z vyšší úrovně na nižší, jednička opačně). Signál se mění v každém bitu, takže v sobě nese hodiny; potřebuje ale dvojnásobnou šířku pásma. Používá ho 10 Mb/s Ethernet.
- Rychlejší Ethernety používají kódy jako **4B/5B** (100BASE-TX, každé 4 bity se zakódují do 5 tak, aby signál nebyl dlouho beze změny) nebo víceúrovňové kódy (PAM-5 u 1000BASE-T).

## Vlastnosti přenosového kanálu

**Přenosový kanál** je cesta, po které se signál šíří od vysílače k přijímači (kabel, vlákno, rádiový kanál, včetně zařízení na trase).

| Vlastnost | Význam | Jednotka |
| --- | --- | --- |
| **šířka pásma** (bandwidth) | rozsah frekvencí, které kanál přenese bez velkého útlumu; v sítích se tak označuje i největší možná přenosová rychlost | Hz; b/s |
| **přenosová rychlost** | počet přenesených bitů za sekundu | b/s (kb/s, Mb/s, Gb/s) |
| **modulační rychlost** | počet změn signálu (symbolů) za sekundu | Bd (baud) |
| **propustnost** (throughput) | skutečně dosažená rychlost; je vždy menší než šířka pásma – závisí na provozu, typu provozu a počtu stanic | b/s |
| **goodput** | množství užitečných aplikačních dat za sekundu (bez hlaviček a opakovaných přenosů) | b/s |
| **útlum** | zeslabení signálu na trase; roste s délkou a frekvencí | dB (na délku) |
| **zpoždění** (latence) | doba, za kterou data dorazí od odesílatele k příjemci | ms |
| **kolísání zpoždění** (jitter) | nerovnoměrnost zpoždění; vadí hlavně hlasu a videu | ms |
| **chybovost** (BER) | podíl chybně přenesených bitů | – |
| **odstup signálu od šumu** (S/N) | poměr výkonu užitečného signálu k výkonu šumu | dB |

**Přenosová a modulační rychlost.** Nese-li jeden symbol $n$ bitů (signál má $M = 2^n$ různých stavů), platí

$$v_p = v_m \cdot \log_2 M$$

kde $v_p$ je přenosová rychlost v b/s a $v_m$ modulační rychlost v Bd. Pokud má signál jen dva stavy, jsou obě rychlosti stejné.

**Příklad 3.** Modem vysílá 2 400 symbolů za sekundu a používá modulaci 16-QAM (16 stavů):

$$v_p = 2\,400 \cdot \log_2 16 = 2\,400 \cdot 4 = 9\,600\ \text{b/s}$$

**Shannonův vzorec** udává teoretickou největší přenosovou rychlost kanálu se šířkou pásma $B$ a poměrem signálu k šumu $S/N$:

$$C = B \cdot \log_2\left(1 + \frac{S}{N}\right)$$

**Příklad 4.** Telefonní kanál má šířku pásma asi 3 100 Hz a odstup signálu od šumu 30 dB, tj. $S/N = 1\,000$:

$$C = 3\,100 \cdot \log_2 1\,001 \approx 3\,100 \cdot 9{,}97 \approx 30\,900\ \text{b/s}$$

Proto se analogové modemy zastavily kolem 33,6 kb/s (56 kb/s jen směrem k uživateli díky digitální ústředně) – rychlejší přenos po telefonním kanálu fyzikálně nejde.

**Útlum v decibelech** vyjadřuje poměr výkonu na vstupu $P_1$ a na výstupu $P_2$:

$$A = 10 \cdot \log_{10} \frac{P_1}{P_2}\ \text{dB}$$

Útlum 3 dB znamená, že na konec dorazí zhruba polovina výkonu, útlum 10 dB desetina.

## Přenos v základním a přeloženém pásmu

- **Základní pásmo (baseband)** – signál se posílá přímo, tak jak je; jeho frekvence začínají blízko 0 Hz. Kanál přenáší jediný signál. Takto pracuje Ethernet (proto „Base“ v označení 100BASE-TX).
- **Přeložené pásmo (broadband)** – signál se pomocí **modulace** posune do vyššího frekvenčního pásma. Do jednoho kanálu se tak vejde více signálů vedle sebe na různých frekvencích (kabelová televize, ADSL, rádio). Harmonický (sinusový) nosný signál má menší zkreslení a dostane se dál.

## Modulace

**Modulace** je změna některé vlastnosti **nosného signálu** (harmonického, sinusového) podle přenášených dat. Zařízení, které moduluje a demoduluje, je **modem**. Sinusovka má tři vlastnosti, které lze měnit:

| Měněná vlastnost | Analogová modulace | Digitální modulace (klíčování) |
| --- | --- | --- |
| amplituda (velikost) | **AM** – amplitudová | **ASK** – 0 a 1 jsou různé amplitudy |
| frekvence (kmitočet) | **FM** – frekvenční | **FSK** – 0 a 1 jsou různé frekvence |
| fáze (posun) | **PM** – fázová | **PSK** – 0 a 1 jsou různé fáze |

- Nejjednodušší ASK je zapínání a vypínání nosné – tak pracují optické sítě (světlo svítí / nesvítí).
- **QAM** (kvadraturní amplitudová modulace) mění amplitudu i fázi zároveň, takže jeden symbol nese více bitů: 16-QAM 4 bity, 64-QAM 6 bitů, 256-QAM 8 bitů, 1024-QAM 10 bitů. Používá se v Wi-Fi, kabelových modemech, DSL a mobilních sítích. Čím víc stavů, tím vyšší rychlost, ale tím lepší signál (vyšší S/N) je potřeba.
- **OFDM** rozdělí kanál na mnoho úzkých podnosných, z nichž každá je modulována zvlášť (Wi-Fi, LTE, 5G, DVB-T, ADSL).

## Multiplex

**Multiplexování** je přenos více signálů (kanálů) jedním společným médiem. **Multiplexor** spojí více vstupů do jednoho toku, **demultiplexor** je na druhé straně zase rozdělí.

- **Frekvenční multiplex (FDM)** – každý kanál dostane vlastní frekvenční pásmo a všechny se přenášejí současně. Příklady: rozhlas a televize (každá stanice na jiné frekvenci), ADSL (telefon a data na jedné lince), kabelová televize.
- **Vlnový multiplex (WDM)** – frekvenční multiplex v optice: každý kanál má jinou vlnovou délku („barvu“) světla, jedním vláknem tak jde desítky kanálů.
- **Časový multiplex (TDM)** – čas se rozdělí na opakující se **rámce** a ty na **časové úseky** (timesloty). Každý vstup má pevně přidělené své timesloty a vysílá jen v nich, i když zrovna nemá co poslat. Jeden velký kanál se tak rozdělí na několik menších, které se chovají samostatně. Hodí se tam, kde vstupy generují stálou zátěž, a tam, kde se používá přepojování okruhů (digitální telefonní sítě, linky E1 s 32 kanály po 64 kb/s).
- **Statistický časový multiplex (STDM)** – timesloty se nepřidělují pevně, ale **dynamicky** tomu vstupu, který zrovna potřebuje vysílat. Lze si to představit jako nekonečný vlak, který jede stálou rychlostí: každý vstup naloží data do právě volného vagonu a označí je, aby příjemce věděl, komu patří. Když volný vagon není, musí se čekat – STDM proto nezaručuje přenosovou kapacitu ani stálé zpoždění, ale kapacitu využije mnohem lépe. Hodí se pro nerovnoměrnou zátěž; na tomto principu stojí přepojování paketů.
- **Kódový multiplex (CDM, CDMA)** – všechny kanály vysílají současně ve stejném pásmu, ale každý je zakódován jiným kódem, podle kterého ho přijímač oddělí (mobilní sítě 3G).

## Zabezpečení přenosu proti chybám

Šum, rušení a útlum způsobují, že se některé bity přenesou chybně (0 místo 1 nebo naopak). Proto se k datům přidávají **zabezpečovací (bezpečnostní) kódy** – nadbytečné (redundantní) bity, podle kterých příjemce chybu pozná, případně i opraví.

- **Detekční kódy** chybu jen **zjistí**; příjemce pak data zahodí a vyžádá si je znovu (metody ARQ, viz [protokoly TCP/IP](/it/pocitacove-site/03-protokoly-tcp-ip/#zajištění-spolehlivosti-arq)).
- **Samoopravné kódy** (FEC, Forward Error Correction) chybu dokážou i **opravit** bez opakování přenosu; potřebují víc nadbytečných bitů. Používají se tam, kde opakování nejde nebo trvá dlouho – satelitní spoje, Wi-Fi, mobilní sítě, CD a DVD.

### Parita

K bloku dat se přidá jeden **paritní bit** tak, aby byl celkový počet jedniček sudý (sudá parita) nebo lichý (lichá parita). Parita odhalí **lichý počet** chybných bitů, dvě chyby v jednom bloku nepozná.

**Příklad 5.** Data `1011001` obsahují čtyři jedničky. Při sudé paritě se přidá bit 0 a odešle se `10110010`. Přijme-li příjemce `10010010` (jeden bit se změnil), napočítá tři jedničky – lichý počet – a pozná chybu.

### Kontrolní součet a CRC

- **Kontrolní součet** (checksum) – data se sečtou po slovech a výsledek se přidá k datům; příjemce součet spočítá znovu a porovná. Jednoduchý, používají ho hlavičky IP, TCP a UDP.
- **CRC** (Cyclic Redundancy Check, cyklický redundantní součet) – data se chápou jako dlouhé binární číslo a „vydělí se“ dohodnutým číslem (generujícím polynomem) – místo odčítání se používá XOR. **Zbytek** po dělení se připojí k datům. Příjemce vydělí přijatá data i se zbytkem stejným polynomem; je-li výsledek nenulový, nastala chyba. CRC odhalí prakticky všechny běžné chyby včetně shluků chyb. Ethernet používá 32bitový CRC v poli FCS.

**Příklad 6 – CRC.** Data `1101`, generující polynom $x^3 + x + 1$, tj. `1011` (stupeň 3, zbytek má 3 bity).

1. K datům připíšeme 3 nuly: `1101000`.
2. Dělíme XORem: `1101` ⊕ `1011` = `0110`; připíšeme další bit → `1100` ⊕ `1011` = `0111`; → `1110` ⊕ `1011` = `0101`; → `1010` ⊕ `1011` = `0001`.
3. Zbytek je `001`; odešle se `1101` + `001` = `1101001`.
4. Příjemce vydělí `1101001` číslem `1011` a vyjde mu zbytek 0 – data jsou v pořádku.

### Hammingův kód

**Hammingův kód** je samoopravný: kód (7,4) přidá ke 4 datovým bitům 3 kontrolní bity, které hlídají různé skupiny bitů. Z toho, které kontroly nesouhlasí, příjemce určí **polohu** chybného bitu a opraví ho. Opraví jednu chybu v bloku. Rozšířené varianty se používají v pamětech ECC.

## Komprese dat

**Komprese** zmenší objem dat, aby se rychleji přenesla a zabrala méně místa. Využívá toho, že data obsahují opakování a nadbytečnou informaci. **Kompresní poměr** udává, kolikrát jsou data menší (např. 4 : 1).

- **Bezeztrátová komprese** – po dekompresi vzniknou přesně původní data. Nutná u textu, programů a databází. Metody: **RLE** (kódování opakujících se znaků), **Huffmanovo kódování** (častým znakům kratší kódy), slovníkové metody **LZ77/LZW** (opakující se úseky nahrazuje odkazem). Formáty ZIP, 7z, gzip, PNG, FLAC.
- **Ztrátová komprese** – vynechá informace, které člověk téměř nevnímá (jemné odstíny barev, neslyšitelné frekvence); dosahuje mnohem vyššího poměru, ale původní data už obnovit nelze. Formáty JPEG, MP3, AAC, H.264, H.265.

**Příklad 7 – RLE.** Řetězec `AAAAABBBCCCCCCD` (15 znaků) se zakóduje jako `5A3B6C1D` (8 znaků), kompresní poměr asi 1,9 : 1. Na textu bez opakování (`ABCD` → `1A1B1C1D`) by naopak data zvětšila – každá metoda se hodí jen pro určitý druh dat.

V sítích se komprimují soubory před přenosem, webové stránky (HTTP komprese gzip, Brotli), obraz a zvuk při přenosu videa a hovorů; data, která už jsou komprimovaná (JPEG, ZIP), se dalším komprimováním nezmenší.

## Přepojování okruhů, zpráv a paketů

Způsob, jakým síť dopraví data přes mezilehlé uzly, se nazývá **přepojování** (switching).

**Okruh** je přenosová cesta mezi dvěma účastníky. Okruhy se dělí podle **vlastníka** (vlastní nebo pronajatý od operátora), podle **doby trvání** (trvalý – pevná, pronajatá linka; dočasný – komutovaný, sestavený jen na dobu spojení, např. telefonní hovor) a podle **typu přenášeného signálu** (analogový, digitální).

### Přepojování okruhů (circuit switching)

1. Před přenosem se **sestaví okruh** – vyhrazená cesta přes všechny ústředny mezi účastníky.
2. Po celou dobu spojení je kapacita okruhu **vyhrazena** jen pro ně, i když zrovna mlčí.
3. Po skončení se okruh **zruší**.

Výhody: zaručená kapacita, stálé a malé zpoždění, data jdou v pořadí. Nevýhody: zdržení při sestavování, plýtvání kapacitou při nečinnosti, výpadek okruhu přeruší spojení. Příklad: klasická telefonní síť, ISDN.

### Přepojování zpráv (message switching)

Celá zpráva se pošle do nejbližšího uzlu, ten ji uloží a pošle dál, až je volná další linka (store and forward). Okruh se nesestavuje, ale uzly potřebují velkou paměť a dlouhé zprávy dlouho blokují linky. Příklad: telegraf, starší e-mailové systémy.

### Přepojování paketů (packet switching)

Data se rozdělí na **pakety** omezené velikosti, každý s hlavičkou s adresou cíle. Pakety různých uživatelů sdílejí linky (statistický multiplex) a každý uzel paket přijme, uloží a pošle dál.

- **Datagramová služba** – každý paket se směruje samostatně, pakety mohou jít různými cestami a dorazit v jiném pořadí (IP, Internet).
- **Virtuální okruhy** – před přenosem se domluví cesta a všechny pakety jdou po ní, ale linky se přesto sdílejí s ostatními (X.25, Frame Relay, ATM, MPLS).

Výhody: efektivní využití linek, odolnost proti výpadkům (pakety se pošlou jinudy), žádné zdržení na sestavení okruhu. Nevýhody: proměnlivé zpoždění, pakety se mohou ztratit nebo přijít v jiném pořadí, kapacita není zaručena – to řeší vyšší vrstvy (TCP) a mechanismy kvality služby (QoS).

| | Přepojování okruhů | Přepojování paketů |
| --- | --- | --- |
| sestavení spojení | nutné | není (u datagramů) |
| kapacita | vyhrazená | sdílená |
| zpoždění | stálé | proměnlivé |
| využití linek | nízké při nečinnosti | vysoké |
| výpadek linky | spojení se přeruší | pakety jdou jinou cestou |
| příklad | telefonní síť | Internet |

## Koncová a komunikační zařízení

V terminologii sériových linek se rozlišuje **DTE** (Data Terminal Equipment) – koncové zařízení, které data vytváří nebo přijímá (počítač, router), a **DCE** (Data Communications Equipment) – zařízení, které ho připojuje k přenosové síti a obvykle dodává hodinový signál (modem, CSU/DSU). Rozdělení pochází od firmy IBM.

## Otázky k opakování

1. Jaký je rozdíl mezi informací a daty? ||informace snižuje nejistotu příjemce; data jsou její zápis vhodný k uložení a přenosu (posloupnost bitů)||
2. Uveďte příklad spojité a diskrétní informace. ||spojitá: teplota, zvuk; diskrétní: počet osob, znak textu||
3. Kolik bajtů je 1 KiB a kolik 1 kB? ||1 024 B a 1 000 B||
4. Jak dlouho trvá přenos souboru 600 MB linkou 100 Mb/s? ||600 · 8 / 100 = 48 s (bez režie)||
5. Proč se digitální signál přenáší bez ztráty kvality? ||má jen několik úrovní, takže mírně zkreslený signál lze správně rozpoznat a opakovač ho obnoví||
6. Popište tři kroky A/D převodu a vzorkovací teorém. ||vzorkování, kvantování, kódování; vzorkovací frekvence musí být aspoň dvojnásobkem nejvyšší frekvence signálu||
7. Proč se paralelní přenos nahrazuje sériovým? ||bity na souběžných vodičích dorazí v různém čase, vodiče se ruší a kabel je drahý; rychlý sériový přenos tyto problémy nemá||
8. Jaký je rozdíl mezi přenosovou a modulační rychlostí? ||přenosová v b/s počítá bity, modulační v Bd změny signálu; je-li symbol nositelem více bitů, je přenosová vyšší||
9. Které tři vlastnosti nosného signálu lze modulovat? ||amplitudu, frekvenci, fázi (AM/ASK, FM/FSK, PM/PSK; QAM kombinuje amplitudu a fázi)||
10. Čím se liší časový a statistický časový multiplex? ||TDM přiděluje timesloty pevně, i když vstup nemá data; STDM je přiděluje dynamicky podle potřeby a data označí||
11. Přidejte k datům `1100101` sudou paritu. Odhalí parita záměnu dvou bitů? ||`11001010` (čtyři jedničky, paritní bit 0); ne, parita odhalí jen lichý počet chyb||
12. Jaký je rozdíl mezi detekčním a samoopravným kódem? ||detekční chybu jen zjistí a data se pošlou znovu (parita, CRC); samoopravný ji i opraví (Hammingův kód)||
13. Jaký je rozdíl mezi bezeztrátovou a ztrátovou kompresí? Uveďte formáty. ||bezeztrátová obnoví přesně původní data (ZIP, PNG, FLAC); ztrátová vypustí méně důležité informace a dosáhne vyššího poměru (JPEG, MP3, H.264)||
14. Porovnejte přepojování okruhů a paketů. ||okruhy: vyhrazená kapacita a stálé zpoždění, ale plýtvání (telefon); pakety: sdílené linky, efektivní a odolné, ale proměnlivé zpoždění (Internet)||
