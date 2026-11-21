---
title: "Informace, signály a přenosový kanál"
order: 5
source: "IT/Datové-sítě.docx"
---

Informace se zapíše jako data (bity), bity se převedou na signál (kabel, světlo, rádio) a na druhé straně zpět. Jde o úkoly **fyzické vrstvy**, viz [model ISO/OSI a TCP/IP](/it/pocitacove-site/02-standardizace-model-iso-osi-a-tcp-ip/).

## Informace a data

- **Informace** – údaj, který snižuje nejistotu příjemce (dozví se něco nového).
- **Data** – zápis informace vhodný k uložení a přenosu, v počítači bity. Stejná data mohou různým příjemcům nést různou informaci.
- **Bit** – nejmenší jednotka, 0 nebo 1.
- **Bajt** (B) = 8 bitů. Malé **b** = bit, velké **B** = bajt: 100 Mb/s = 12,5 MB/s.

### Spojitá a diskrétní informace

- **Spojitá (analogová)** – libovolná hodnota z rozsahu, mění se plynule: teplota, hlasitost, napětí z mikrofonu.
- **Diskrétní (číslicová)** – konečný počet hodnot: počet osob, znak, stav vypínače. Počítač umí jen diskrétní → spojitou musí **digitalizovat**.

### Jednotky a prefixy

**SI předpony** = mocniny 10 (přenosové rychlosti, výrobci disků). **Binární předpony IEC** = mocniny 2 (RAM, často OS).

| SI | Hodnota | Binární | Hodnota |
| --- | --- | --- | --- |
| kilo (k) | $10^3 = 1\,000$ | kibi (Ki) | $2^{10} = 1\,024$ |
| mega (M) | $10^6$ | mebi (Mi) | $2^{20} = 1\,048\,576$ |
| giga (G) | $10^9$ | gibi (Gi) | $2^{30}$ |
| tera (T) | $10^{12}$ | tebi (Ti) | $2^{40}$ |
| peta (P) | $10^{15}$ | pebi (Pi) | $2^{50}$ |

KiB, MiB, GiB se zavedly, protože „kilobajt“ se používá pro 1 000 i 1 024 B.

**Příklad 1 – kapacita disku.** Disk 1 TB = $10^{12}$ B. OS v binárních jednotkách ukáže

$$\frac{10^{12}}{2^{30}} \approx 931\ \text{GiB}$$

Disk není menší, jen jinak počítaný.

**Příklad 2 – doba přenosu.** Soubor 100 MB, linka 50 Mb/s:

$$t = \frac{100 \cdot 8\ \text{Mb}}{50\ \text{Mb/s}} = 16\ \text{s}$$

Bajty × 8 = bity; reálně o něco déle kvůli režii.

## Signál

**Signál** = fyzikální veličina, jejíž průběh v čase nese informaci.

| Médium | Signál |
| --- | --- |
| metalický kabel | elektrické impulzy (napětí) |
| optické vlákno | světelné impulzy |
| bezdrátově | elektromagnetické vlny |

### Analogový a digitální signál

![Vlevo spojitý analogový signál, vpravo tentýž signál vzorkovaný v pravidelných okamžicích a zaokrouhlený na úrovně](/images/content/it/pocitacove-site/signaly/ad-prevod.webp)

- **Analogový** – spojitý, nekonečně mnoho hodnot (mikrofon, klasický telefon). Šum se přimíchá a nedá se oddělit; zesílením roste i zkreslení.
- **Digitální** – jen pár úrovní (0 a 1). Mírně zkreslený se stále správně rozpozná, opakovač ho obnoví → **bez ztráty kvality**. Snadno se ukládá, kopíruje, šifruje, komprimuje.

**A/D převod:**

1. **vzorkování** – pravidelné měření hodnoty,
2. **kvantování** – zaokrouhlení na nejbližší úroveň,
3. **kódování** – zápis úrovně binárně.

**Vzorkovací teorém** (Nyquist–Shannon) – vzorkovat aspoň dvojnásobkem nejvyšší frekvence:

$$f_{vz} \geq 2 f_{max}$$

Proto CD: 44,1 kHz (ucho slyší do ~20 kHz). Opačný převod: **D/A převodník**.

## Způsoby přenosu

### Sériový a paralelní přenos

- **Sériový** – bity **jeden po druhém** po jednom vodiči (páru): Ethernet, USB, SATA, PCIe.
- **Paralelní** – **více bitů najednou** po souběžných vodičích: ISA, PCI, ATA (IDE), paralelní port.

Paralelní při vysokých frekvencích selhává: bity na vodičích dorazí v různý čas, vodiče se ruší (**přeslechy**), kabel je drahý. Proto dnes všude rychlý sériový přenos (PCI → PCIe, ATA → SATA).

### Směr přenosu

- **Simplex** – jen jedním směrem (rozhlas, TV).
- **Half duplex** – oběma směry, ale střídavě (vysílačka, Ethernet s hubem).
- **Full duplex** – oběma směry naráz (telefon, Ethernet se switchem).

### Synchronizace

Příjemce musí vědět, kdy bit začíná a končí.

- **Asynchronní** – bez společných hodin; začátek a konec úseku musí být vyznačen.
- **Arytmický (start-stop)** – znaky s libovolnými mezerami, bity uvnitř synchronně; **start bit** a **stop bit** (RS-232).
- **Synchronní** – nepřetržitý tok bloků (rámců) stálou rychlostí, synchronizace po celý blok.

Synchronizace: samostatný časovací signál, odvození z dat, nebo nejčastěji **linkové kódování**.

### Linkové kódování

Jak se bity vyjádří úrovněmi na vedení.

![Bity 10110010 zakódované jako NRZ a Manchester a modulované jako ASK, FSK a PSK](/images/content/it/pocitacove-site/signaly/kodovani-modulace.webp)

- **NRZ** – 1 = jedna úroveň, 0 = druhá. Jednoduché, ale dlouhá řada stejných bitů = ztráta synchronizace.
- **Manchester** – přechod uprostřed každého bitu (IEEE 802.3: 0 = dolů, 1 = nahoru) → nese hodiny, ale potřebuje 2× šířku pásma. 10 Mb/s Ethernet.
- Rychlejší Ethernety: **4B/5B** (100BASE-TX – 4 bity do 5, aby signál nebyl dlouho beze změny), **PAM-5** (1000BASE-T).

## Vlastnosti přenosového kanálu

**Přenosový kanál** = cesta signálu od vysílače k přijímači (kabel, vlákno, rádio, zařízení na trase).

| Vlastnost | Význam | Jednotka |
| --- | --- | --- |
| **šířka pásma** | rozsah přenesených frekvencí; v sítích i max. rychlost | Hz; b/s |
| **přenosová rychlost** | bity za sekundu | b/s |
| **modulační rychlost** | změny signálu (symboly) za sekundu | Bd |
| **propustnost** | skutečná rychlost, vždy menší než šířka pásma | b/s |
| **goodput** | užitečná data za sekundu (bez hlaviček a opakování) | b/s |
| **útlum** | zeslabení; roste s délkou a frekvencí | dB |
| **zpoždění** (latence) | doba cesty dat | ms |
| **jitter** | kolísání zpoždění; vadí hlasu a videu | ms |
| **chybovost** (BER) | podíl chybných bitů | – |
| **S/N** | poměr signálu k šumu | dB |

**Přenosová a modulační rychlost.** Symbol s $M = 2^n$ stavy nese $n$ bitů:

$$v_p = v_m \cdot \log_2 M$$

$v_p$ v b/s, $v_m$ v Bd. Při dvou stavech jsou stejné.

**Příklad 3.** 2 400 Bd, 16-QAM:

$$v_p = 2\,400 \cdot \log_2 16 = 2\,400 \cdot 4 = 9\,600\ \text{b/s}$$

**Shannonův vzorec** – max. rychlost kanálu s šířkou pásma $B$:

$$C = B \cdot \log_2\left(1 + \frac{S}{N}\right)$$

**Příklad 4.** Telefonní kanál 3 100 Hz, S/N 30 dB ($= 1\,000$):

$$C = 3\,100 \cdot \log_2 1\,001 \approx 3\,100 \cdot 9{,}97 \approx 30\,900\ \text{b/s}$$

Proto modemy skončily u 33,6 kb/s (56 kb/s jen k uživateli díky digitální ústředně).

**Útlum v dB:**

$$A = 10 \cdot \log_{10} \frac{P_1}{P_2}\ \text{dB}$$

3 dB ≈ polovina výkonu, 10 dB = desetina.

## Přenos v základním a přeloženém pásmu

- **Základní pásmo (baseband)** – signál přímo, od ~0 Hz; jeden signál na kanál. Ethernet („Base“ v 100BASE-TX).
- **Přeložené pásmo (broadband)** – **modulací** posunutý výš; víc signálů vedle sebe (kabelová TV, ADSL, rádio). Sinusová nosná se méně zkresluje a dojde dál.

## Modulace

**Modulace** = změna vlastnosti **nosného (sinusového) signálu** podle dat. Zařízení: **modem**.

| Měněná vlastnost | Analogová | Digitální (klíčování) |
| --- | --- | --- |
| amplituda | **AM** | **ASK** – 0 a 1 různé amplitudy |
| frekvence | **FM** | **FSK** – různé frekvence |
| fáze | **PM** | **PSK** – různé fáze |

- Nejjednodušší ASK = zapnout/vypnout nosnou – optika (svítí / nesvítí).
- **QAM** mění amplitudu i fázi → víc bitů na symbol: 16-QAM 4 b, 64-QAM 6 b, 256-QAM 8 b, 1024-QAM 10 b. Wi-Fi, kabel, DSL, mobil. Víc stavů = vyšší rychlost, ale potřeba lepší S/N.
- **OFDM** – kanál rozdělený na mnoho úzkých podnosných (Wi-Fi, LTE, 5G, DVB-T, ADSL).

## Multiplex

**Multiplex** = více signálů jedním médiem. **Multiplexor** spojí, **demultiplexor** rozdělí.

![FDM: kanály A, B, C současně na různých frekvencích; TDM: kanály se střídají v časových úsecích A B C A B C](/images/content/it/pocitacove-site/signaly/multiplex.webp)

- **FDM (frekvenční)** – každý kanál své pásmo, vše současně: rozhlas, TV, ADSL, kabelová TV.
- **WDM (vlnový)** – FDM v optice: různé vlnové délky („barvy“), desítky kanálů ve vlákně.
- **TDM (časový)** – čas rozdělen na **rámce** a **timesloty**; každý vstup má své pevné, i když nemá co poslat. Pro stálou zátěž a přepojování okruhů (telefonní sítě, E1 = 32 × 64 kb/s).
- **STDM (statistický)** – timesloty **dynamicky** tomu, kdo vysílá; data se označí adresou. „Nekonečný vlak“ – kdo má data, naloží do volného vagonu. Nezaručí kapacitu ani zpoždění, ale využití je mnohem lepší. Základ přepojování paketů.
- **CDM (kódový, CDMA)** – všichni naráz ve stejném pásmu, každý jiný kód (3G).

## Zabezpečení přenosu proti chybám

Šum a útlum mění bity. K datům se přidávají **zabezpečovací kódy** (redundantní bity).

- **Detekční** – chybu **zjistí**, data se pošlou znovu (ARQ, viz [protokoly TCP/IP](/it/pocitacove-site/03-protokoly-tcp-ip/#zajištění-spolehlivosti-arq)).
- **Samoopravné** (FEC) – chybu i **opraví** bez opakování; víc bitů navíc. Satelit, Wi-Fi, mobil, CD/DVD.

### Parita

**Paritní bit** doplní počet jedniček na sudý (sudá parita) nebo lichý. Odhalí **lichý počet** chyb, dvě chyby ne.

**Příklad 5.** `1011001` má 4 jedničky → sudá parita přidá 0 → `10110010`. Přijde `10010010` → 3 jedničky (liché) → chyba.

### Kontrolní součet a CRC

- **Kontrolní součet** – součet dat po slovech připojený k datům; jednoduchý (hlavičky IP, TCP, UDP).
- **CRC** – data jako binární číslo „vydělená“ (XOR) generujícím polynomem; **zbytek** se připojí. Příjemce dělí znovu – nenulový zbytek = chyba. Odhalí i shluky chyb. Ethernet: 32b CRC v poli FCS.

**Příklad 6 – CRC.** Data `1101`, polynom $x^3 + x + 1$ = `1011` (zbytek 3 b).

1. Připsat 3 nuly: `1101000`.
2. XOR: `1101` ⊕ `1011` = `0110` → `1100` ⊕ `1011` = `0111` → `1110` ⊕ `1011` = `0101` → `1010` ⊕ `1011` = `0001`.
3. Zbytek `001`, odešle se `1101001`.
4. Příjemce: `1101001` / `1011` → zbytek 0 → v pořádku.

### Hammingův kód

Samoopravný: (7,4) = 4 datové + 3 kontrolní bity hlídající různé skupiny. Z nesouhlasících kontrol se určí **poloha** chyby → oprava jedné chyby. Paměti ECC.

## Komprese dat

**Komprese** zmenší data (rychlejší přenos, méně místa) využitím opakování. **Kompresní poměr** např. 4 : 1.

- **Bezeztrátová** – obnoví přesně originál; text, programy. **RLE**, **Huffman** (častým znakům kratší kód), **LZ77/LZW** (odkazy na opakované úseky). ZIP, 7z, gzip, PNG, FLAC.
- **Ztrátová** – vypustí, co člověk nevnímá; mnohem vyšší poměr, originál nejde obnovit. JPEG, MP3, AAC, H.264, H.265.

**Příklad 7 – RLE.** `AAAAABBBCCCCCCD` (15) → `5A3B6C1D` (8), ≈ 1,9 : 1. Bez opakování (`ABCD` → `1A1B1C1D`) data naopak zvětší.

V sítích: komprese souborů, webu (gzip, Brotli), videa a hovorů. Už komprimovaná data (JPEG, ZIP) se dál nezmenší.

## Přepojování okruhů, zpráv a paketů

**Přepojování** (switching) = jak síť dopraví data přes mezilehlé uzly.

**Okruh** = cesta mezi dvěma účastníky; dělí se podle **vlastníka** (vlastní / pronajatý), **doby** (trvalý – pronajatá linka; dočasný – komutovaný, např. hovor) a **signálu** (analogový / digitální).

### Přepojování okruhů (circuit switching)

1. **Sestavení okruhu** přes ústředny.
2. Kapacita **vyhrazena** po celou dobu, i když se mlčí.
3. **Zrušení** okruhu.

Plus: zaručená kapacita, stálé malé zpoždění, pořadí. Mínus: čekání na sestavení, plýtvání, výpadek = konec spojení. Telefonní síť, ISDN.

### Přepojování zpráv (message switching)

Celá zpráva se uloží v uzlu a pošle dál, až je linka volná (store and forward). Velké paměti, dlouhé blokování linek. Telegraf, staré e-maily.

### Přepojování paketů (packet switching)

Data v **paketech** s adresou; linky sdílené (statistický multiplex), uzel paket uloží a pošle dál.

- **Datagramy** – každý paket samostatně, různými cestami, i v jiném pořadí (IP).
- **Virtuální okruhy** – cesta domluvená předem, linky sdílené (X.25, Frame Relay, ATM, MPLS).

Plus: efektivní, odolné (jiná cesta), bez sestavování. Mínus: proměnlivé zpoždění, ztráty, jiné pořadí, nezaručená kapacita – řeší TCP a QoS.

| | Okruhy | Pakety |
| --- | --- | --- |
| sestavení | nutné | ne (datagramy) |
| kapacita | vyhrazená | sdílená |
| zpoždění | stálé | proměnlivé |
| využití linek | nízké | vysoké |
| výpadek linky | spojení padá | jiná cesta |
| příklad | telefon | Internet |

## Koncová a komunikační zařízení

**DTE** (Data Terminal Equipment) – koncové zařízení (PC, router). **DCE** (Data Communications Equipment) – připojuje ho k síti a dává hodiny (modem, CSU/DSU). Rozdělení od IBM.

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
