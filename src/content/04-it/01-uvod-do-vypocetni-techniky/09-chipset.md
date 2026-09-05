---
title: "Chipset"
order: 9
source: "uvt/cast1_08_chipset.pdf"
---
Čipová sada (chipset) je hlavní logický integrovaný obvod základní desky. Jeho úkolem je řídit komunikaci mezi procesorem a ostatními zařízeními a obvody. V obvodech čipové sady jsou integrovány **řadiče** těchto zařízení, které řídí jejich činnost pomocí řídících signálů, jež se přenášejí po sběrnici. Dále jsou zde **adaptéry** pro propojení různých sběrnic mezi sebou. Obvody čipové sady řídí činnost např. operační paměti, jednotlivých rozhraní atd.

Sběrnice jsou uspořádány hierarchicky, tedy pomalejší sběrnice je zapojena do rychlejší, která je v hierarchii postavena o úroveň výše. Každé zařízení v systému je připojeno k jedné z těchto sběrnic, čipová sada vykonává funkci mostů mezi sběrnicemi.

Čipová sada má v maximální míře podporovat výkon procesoru a dalších komponent počítače, proto pro každou novou architekturu procesoru vzniká nová čipová sada.

Od čipové sady se odvíjí také většina základních parametrů základní desky, např. typ a rychlosti procesoru, typ operační paměti, rozhraní či sběrnice pro rozšiřující karty atd.

Základní architektury čipových sad:

-  architektura mostů – severní / jižní most (angl. north / south bridge)

-  architektura rozbočovačů (Hub)

## **1. Čipové sady s architekturou severního / jižního mostu**

Čipová sada je rozdělena do dvou samostatných čipů, které jsou oba součástí základní desky počítače:

#### **North Bridge (severní most)**

Zajišťuje komunikaci mezi procesorem, operační pamětí (obsahuje řadič operační paměti) a grafickým rozhraním (AGP). Zároveň umožňuje spojení procesoru s jižním mostem pomocí 32 bitové PCI sběrnice:

Na PCI sběrnici bývá připojen síťový adaptér pro připojení k lokální datové síti (LAN), popřípadě jsou zde vyvedeny sloty pro přídavné karty.

Sběrnice mezi procesorem a severním mostem je FSB (Front Side Bus) a je obousměrná. Šířka FSB je 64 bitů (8 Bajtů). Od základní frekvence této sběrnice se odvíjí mimo jiné taktovací frekvence procesoru, operační paměti, sběrnice grafického rozhraní atd.

Jedná-li se o víceprocesorový systém, sdílejí procesory tuto obousměrnou sběrnici pro komunikaci se severním mostem, což může mít za následek snížení přenosové rychlosti pro jednotlivé procesory. Zároveň tyto procesory nemohou komunikovat přímo mezi sebou (nejsou pomocí FSB přímo propojeni).

#### **South Bridge (jižní most)**

Zajišťuje komunikaci s periferními zařízeními. Obsahuje řadič USB rozhraní, rozhraní pevného disku (ATA) a tzv. obvod Super I/O (resp. Multi I/O).

Super I/O obvod v sobě integruje řadiče ostatních zařízení, např. řadič disketové mechaniky, sériového (RS-232) a paralelního (LPT) rozhraní, PS/2 rozhraní atd. Propojuje PCI sběrnici mezi severním a jižním mostem s pomalejší ISA sběrnicí pro přídavné karty. Na jižní most je připojen také paměťový obvod obsahující BIOS.

## **2. Čipové sady s architekturou HUBů (resp. rozbočovačů)**

Architektura čipových sad postavených na tzv. rozbočovačích je podobná architektuře mostů.

Severní most je zde nahrazen obvodem **MCH (Memory Controller Hub)** , který propojuje procesorovou sběrnici se sběrnicí operační paměti (obsahuje řadič operační paměti) a sběrnicí grafického rozhraní AGP nebo PCI Express ×16.

MCH může podporovat připojení více grafických karet (pouze sběrnicový standard PCI Express) a vícekanálový paměťový řadič, případně má integrovaný grafický adaptér (obvod **GMCH** ).

Jižní most je nahrazen obvodem **ICH (I/O Controller Hub)** umožňující připojení periferních zařízení a přídavných karet přes systémové sběrnice (USB, PCI, PCI Express atd.).

Oba obvody jsou vzájemně propojeny speciální rychlou sběrnicí **DMI (Direct Media Interface)** o datové propustnosti až 2 GB/s. Procesory AMD používají podobnou sběrnici nazvanou **Hyper Transport** .

_Poznámka: v běžné praxi se stále běžně používá označení severní a jižní most._

## **3. Čipové sady s integrovaným řadičem operační paměti v procesoru**

Pro obvod MCH (severní most) se používá nové označení **IOH** (Input/Output Hub), označení obvodu ICH (jižní most) se nemění. Řadič operační paměti již není integrován v severním mostu (IOH) na základní desce, ale je přímo součástí struktury procesoru. Obvod IOH tedy obsahuje adaptér sběrnice PCI Express ×16 pro připojení především grafických karet a s procesorem komunikuje přes vysokorychlostní procesorovou sběrnici **QPI** (náhrada procesorové sběrnice FSB).

K IOH je pomocí pomalejší sběrnice **DMI** s datovou propustností 2 GB/s připojen obvod ICH, který obsluhuje řadiče disků (PATA, SATA, RAID), řadič USB rozhraní, adaptér sběrnic PCI a PCI Express pro rozšiřující karty, síťové adaptéry, zvukový adaptér, atd. Je zde připojen také obvod obsahující BIOS.

Výhody/nevýhody integrace paměťového řadiče uvnitř procesoru:

1. Řadič operační paměti umístěný přímo v procesoru je od procesorových jader vzdálen řádově několik milimetrů, nikoliv centimetrů, jak je tomu u předchozí architektury čipové sady. Menší vzdálenost znamená menší zpoždění, možné vyšší rychlosti (vyšší taktovací kmitočet paměťové sběrnice) a větší odolnost proti chybám při přenosu dat.

2. Řadič pracuje na vyšší frekvenci. Je vyráběn stejnou technologií jako procesor. S rychlostí procesoru roste i rychlost řadiče.

3. Zlepšuje se kompatibilita a tím i spolehlivost, protože nezávisle na použité čipové sadě na základní desce zůstává řadič pamětí stejný pro daný procesor.

4. Často poměrně energeticky náročný řadič paměti je chlazen společně s procesorem.

5. U víceprocesorových systémů (především servery), má každý procesor vlastní paměťový prostor (viz obrázek níže), což nebrzdí komunikaci procesorů s operační pamětí, jako je tomu v případě použití společné obousměrné procesorové sběrnice FSB u starších čipových sad.

6. Nevýhodou je zvýšení ztrátového tepla vyzářeného procesorem.

##### <u>Procesorová sběrnice QPI</u>

Procesor s čipovou sadou komunikuje pomocí rychlé sběrnice **QPI** (QuickPath Interconnect). QPI však zajišťuje nejen komunikaci procesoru s čipovou sadou (náhrada stávající sběrnice FSB), ale u víceprocesorových systémů umožňuje vzájemnou přímou komunikaci jednotlivých procesorů (např. serverové procesory Xeon).

Po sběrnici FSB se data přenášela obousměrně jak z/do operační paměti, tak k periferiím. U víceprocesorových systémů navíc jednotlivé procesory sdílí sběrnici FSB při vzájemné komunikaci:

U QPI sběrnice je celková kapacita (propustnost) sběrnice k dispozici pouze pro periferie. Moduly operační paměti jsou řízeny řadičem integrovaným v procesoru, nezatěžují tedy QPI.

### **4. Čipové sady s plně integrovaným IOH (severním mostem) v procesoru**

Současné výkonné, vícejádrové procesory architektury CORE (i3, i5, i7) mají ve své struktuře integrován celý severní most (IOH), tedy nejen řadič operační paměti, ale také adaptér grafické sběrnice PCI Express ×16.

Základní deska je pak osazena pouze jedním obvodem čipové sady, označovaným jako **PCH (Platform Controller Hub)** . Tento obvod je s procesorem spojen sběrnicí DMI, neboli sběrnicí, kterou bývá u předchozích verzí čipových sad spojen severní a jižní most. Obvod PCH vykonává v podstatě funkci jižního mostu. Procesor pak zastává veškerou funkci severního mostu: komunikaci s grafickou kartou přes sběrnici PCI Express ×16, komunikaci s operační pamětí a komunikaci s obvodem PCH.

V současné době je obvod IOH (severní most) přímo integrován do struktury procesoru (obvody procesoru a IOH jsou součástí jednoho polovodičového čipu), včetně integrace grafického procesoru (GPU).

Kromě sběrnice DMI, obsahuje navíc vyhrazenou sběrnici **FDI (Flexible Display Interconnect)** propojující grafický procesor integrovaný v hlavním procesoru s obrazovým rozhraním v čipové sadě. Zde dochází k úpravě obrazových dat a vytvoření videosignálu pro příslušný výstup (analogový VGA, DVI, HDMI, DisplayPort).

_Poznámka: do budoucna se uvažuje integraci všech obvodů čipové sady do struktury procesoru._
