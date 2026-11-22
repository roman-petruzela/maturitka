---
title: "Informace, signály a přenosový kanál"
order: 5
source: "IT/Datové-sítě.docx"
---

Informace se zapíše jako data (bity), bity se převedou na signál (kabel, světlo, rádio) a na druhé straně zpět. To je úkol **fyzické vrstvy**, viz [model ISO/OSI a TCP/IP](/it/pocitacove-site/02-standardizace-model-iso-osi-a-tcp-ip/).

## Informace a data

- **Informace** – údaj, který snižuje nejistotu příjemce.
- **Data** – zápis informace vhodný k uložení a přenosu (v počítači bity).
- **Bit** = 0 nebo 1, **bajt** (B) = 8 bitů. Malé **b** = bit, velké **B** = bajt: 100 Mb/s = 12,5 MB/s.
- **Spojitá (analogová)** informace nabývá libovolné hodnoty (teplota, zvuk). **Diskrétní (číslicová)** má konečný počet hodnot (znak, počet osob). Počítač zpracuje jen diskrétní, spojitou musí **digitalizovat**.

### Jednotky a prefixy

- **SI předpony** (k, M, G, T) = mocniny 10: 1 kB = 1 000 B. Používají výrobci disků a přenosové rychlosti.
- **Binární předpony** (Ki, Mi, Gi, Ti) = mocniny 2: 1 KiB = 1 024 B. Používá RAM a často OS.

**Příklad – kapacita disku.** Disk 1 TB = $10^{12}$ B. OS v binárních jednotkách ukáže

$$\frac{10^{12}}{2^{30}} \approx 931\ \text{GiB}$$

**Příklad – doba přenosu.** Soubor 100 MB, linka 50 Mb/s:

$$t = \frac{100 \cdot 8\ \text{Mb}}{50\ \text{Mb/s}} = 16\ \text{s}$$

## Signál

**Signál** = fyzikální veličina, jejíž průběh v čase nese informaci. Kabel: elektrické impulzy, vlákno: světlo, vzduch: elektromagnetické vlny.

![Vlevo spojitý analogový signál, vpravo tentýž signál vzorkovaný v pravidelných okamžicích a zaokrouhlený na úrovně](/images/content/it/pocitacove-site/signaly/ad-prevod.webp)

- **Analogový** – spojitý. Šum se přimíchá a nedá se oddělit, zesílením roste i zkreslení.
- **Digitální** – jen pár úrovní (0 a 1). Mírně zkreslený se stále správně rozpozná a opakovač ho obnoví → **bez ztráty kvality**.

**A/D převod:** **vzorkování** (pravidelné měření) → **kvantování** (zaokrouhlení na úroveň) → **kódování** (zápis binárně). Podle **vzorkovacího teorému** musí být $f_{vz} \geq 2 f_{max}$ (CD: 44,1 kHz, ucho slyší do ~20 kHz). Zpět převádí D/A převodník.

### Sériový a paralelní přenos

- **Sériový** – bity **jeden po druhém** po jednom vodiči: Ethernet, USB, SATA, PCIe.
- **Paralelní** – **více bitů najednou** po souběžných vodičích: PCI, ATA, paralelní port. Při vysokých frekvencích bity dorazí v různý čas a vodiče se ruší (přeslechy), proto dnes převládá rychlý sériový přenos.

### Směr přenosu

- **Simplex** – jen jedním směrem (rozhlas).
- **Half duplex** – oběma směry, ale střídavě (vysílačka, Ethernet s hubem).
- **Full duplex** – oběma směry naráz (telefon, Ethernet se switchem).

## Vlastnosti přenosového kanálu

**Přenosový kanál** = cesta signálu od vysílače k přijímači (kabel, vlákno, rádio).

| Vlastnost | Význam | Jednotka |
| --- | --- | --- |
| **šířka pásma** | rozsah přenesených frekvencí | Hz |
| **přenosová rychlost** | bity za sekundu | b/s |
| **modulační rychlost** | změny signálu (symboly) za sekundu | Bd |
| **propustnost** | skutečná rychlost, vždy menší než max. | b/s |
| **útlum** | zeslabení signálu, roste s délkou a frekvencí | dB |
| **zpoždění** a **jitter** | doba cesty a její kolísání (vadí hlasu a videu) | ms |
| **chybovost** (BER) | podíl chybných bitů | – |
| **S/N** | poměr signálu k šumu | dB |

Symbol s $M = 2^n$ stavy nese $n$ bitů, proto $v_p = v_m \cdot \log_2 M$. Příklad: 2 400 Bd a 16-QAM dá $2\,400 \cdot 4 = 9\,600$ b/s.

**Shannonův vzorec** – největší možná rychlost kanálu s šířkou pásma $B$:

$$C = B \cdot \log_2\left(1 + \frac{S}{N}\right)$$

Chyby způsobené šumem se hlídají redundantními bity: **parita** (odhalí lichý počet chyb), **kontrolní součet** a **CRC** (Ethernet: pole FCS). **Samoopravné kódy** (FEC) chybu i opraví.

## Modulace

V **základním pásmu** (Ethernet) se signál posílá přímo. V **přeloženém pásmu** (kabelová TV, ADSL, rádio) se pomocí **modulace** posune na vyšší frekvence, takže se vejde víc signálů vedle sebe. **Modulace** = změna vlastnosti **sinusového nosného signálu** podle dat; zařízení: **modem**.

| Měněná vlastnost | Analogová | Digitální (klíčování) |
| --- | --- | --- |
| amplituda | **AM** | **ASK** |
| frekvence | **FM** | **FSK** |
| fáze | **PM** | **PSK** |

![Bity 10110010 zakódované jako NRZ a Manchester a modulované jako ASK, FSK a PSK](/images/content/it/pocitacove-site/signaly/kodovani-modulace.webp)

- **QAM** mění amplitudu i fázi → víc bitů na symbol (16-QAM 4 b, 256-QAM 8 b). Víc stavů = vyšší rychlost, ale potřeba lepší S/N (Wi-Fi, kabel, DSL).
- **OFDM** – kanál rozdělený na mnoho úzkých podnosných (Wi-Fi, LTE, 5G).
- Bez modulace se bity na vedení zapisují **linkovým kódem**: **NRZ** (dvě úrovně, dlouhá řada stejných bitů ztratí synchronizaci) nebo **Manchester** (přechod uprostřed bitu nese hodiny, 10 Mb/s Ethernet).

## Multiplex

**Multiplex** = více signálů jedním médiem. **Multiplexor** je spojí, **demultiplexor** rozdělí.

![FDM: kanály A, B, C současně na různých frekvencích; TDM: kanály se střídají v časových úsecích A B C A B C](/images/content/it/pocitacove-site/signaly/multiplex.webp)

- **FDM (frekvenční)** – každý kanál své pásmo, vše současně (rozhlas, ADSL). **WDM** = FDM v optice, různé vlnové délky.
- **TDM (časový)** – čas rozdělen na **timesloty**, každý vstup má svůj pevný, i když nemá co poslat (telefonní sítě).
- **STDM (statistický)** – timesloty **dynamicky** tomu, kdo vysílá, data nesou adresu. Lepší využití, ale bez záruky kapacity; základ přepojování paketů.
- **CDM (kódový)** – všichni ve stejném pásmu, každý s jiným kódem (3G).

## Přepojování okruhů, zpráv a paketů

**Přepojování** = jak síť dopraví data přes mezilehlé uzly.

- **Okruhů** (circuit switching) – před přenosem se **sestaví okruh** a kapacita se **vyhradí** po celou dobu, i když se mlčí. Stálé zpoždění, ale plýtvání a výpadek ukončí spojení. Telefon.
- **Zpráv** (message switching) – celá zpráva se uloží v uzlu a pošle dál (store and forward). Telegraf, staré e-maily.
- **Paketů** (packet switching) – data v **paketech** s adresou, linky sdílené (statistický multiplex). **Datagramy** jdou každý jinou cestou (IP), **virtuální okruhy** po předem domluvené cestě (ATM, MPLS).

| | Okruhy | Pakety |
| --- | --- | --- |
| sestavení | nutné | ne (datagramy) |
| kapacita | vyhrazená | sdílená |
| zpoždění | stálé | proměnlivé |
| využití linek | nízké | vysoké |
| výpadek linky | spojení padá | jiná cesta |
| příklad | telefon | Internet |

## Otázky k opakování

1. Jaký je rozdíl mezi informací a daty? ||informace snižuje nejistotu příjemce; data jsou její zápis vhodný k uložení a přenosu (posloupnost bitů)||
2. Kolik bajtů je 1 KiB a kolik 1 kB? ||1 024 B a 1 000 B||
3. Jak dlouho trvá přenos souboru 600 MB linkou 100 Mb/s? ||600 · 8 / 100 = 48 s (bez režie)||
4. Proč se digitální signál přenáší bez ztráty kvality a jak probíhá A/D převod? ||má jen několik úrovní, takže ho lze obnovit; vzorkování, kvantování, kódování||
5. Proč se paralelní přenos nahrazuje sériovým? ||bity na souběžných vodičích dorazí v různém čase a vodiče se ruší||
6. Jaký je rozdíl mezi přenosovou a modulační rychlostí? ||přenosová v b/s počítá bity, modulační v Bd změny signálu; nese-li symbol víc bitů, je přenosová vyšší||
7. Které vlastnosti nosného signálu lze modulovat? ||amplitudu, frekvenci, fázi (AM/ASK, FM/FSK, PM/PSK; QAM kombinuje amplitudu a fázi)||
8. Čím se liší TDM a STDM? ||TDM přiděluje timesloty pevně, i když vstup nemá data; STDM je přiděluje dynamicky a data označí||
9. Porovnejte přepojování okruhů a paketů. ||okruhy: vyhrazená kapacita a stálé zpoždění, ale plýtvání (telefon); pakety: sdílené linky, efektivní a odolné, ale proměnlivé zpoždění (Internet)||
