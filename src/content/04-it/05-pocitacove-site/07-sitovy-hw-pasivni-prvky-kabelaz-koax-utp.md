---
title: "Síťový HW – pasivní prvky, kabeláž (KOAX, UTP)"
order: 7
source: "site/01_Sitovy_HW_pasivni_prvky_kabely_KOAX_UTP.pdf"
---
# Přenosová média

- Počítačová síť vzniká propojením dvou a více počítačů prostřednictvím jejich síťových karet

   - za počítačovou síť **není** považováno např. propojení dvou počítačů pomocí sériového nebo paralelního portu

- K fyzickému propojení jednotlivých počítačů se používají tzv. přenosová média, která dovolují přenášet data.

# Možnosti komunikace různými médii

<!-- Start of picture text -->
elektrický signál<br>elektromagnetické vlny<br>světlo - světelné impulsy  (frekvence,vlnová délka)<br><!-- End of picture text -->

# Síťový HW – pasivní prvky

- Přenosová média

- Konektory

- Optické vany

- RACK

- Montážní prvky

# Dělení přenosových médií

# Koaxiální kabel - „souosý" (co-axiální)

<!-- Start of picture text -->
izolační vrstva  vyrobená<br>z dielektrika (elektricky  Nonplenum:<br>izolující látka) z polyethylenu nebo PVC<br>plenum  –  žáruvzdorný:<br>z teflonu nebo kynaru<br>vnitřní<br>(středový, nosný, signálový)<br>vodič  - vodivý drát, většinou  vnější stínění  – většinou měděné -<br>měděný, plný nebo splétaný-  odstiňuje středový vodič od okolních<br>lanko, vlivů (zejména od vnějšího<br>elektromagnetického pole) a brání<br>vyzařování ven<br><!-- End of picture text -->

# Použití

- Používá se v oblasti telekomunikací

   - pro rozvody kabelových televizí

   - v rámci sítí HFC - Hybrid Fiber-Coax, část sítě (směrem k páteři) je realizována na optickém vlákně, část nejblíže k uživateli pomocí koaxiální ho kabelu)

- Dříve se používal v sítích LAN – Ethernet

- Dnes pro wi-fi – spojení antény s Wi-Fi routrem

# Kroucená dvojlinka - twisted pair (TP)

# Technologie TP

- Je složena z několika (nejčastěji čtyř) **párů vodičů** .

- Vodiče v páru jsou rovnocenné – **symetrické**

- Vodiče v jednom páru jsou vždy vzájemně kolem sebe pravidelně **zkrouceny** , což zamezí jejich vzájemnému ovlivňování

   - zkrouceny (anglicky: twisted, odsud také twisted pair, či zkráceně „twist")

- Kroucená dvojlinka se vyrábí v několika variantách: ● **UTP** (Unshielded Twisted Pair) – nestíněná

   - **STP** (Shielded Twisted Pair) – stíněná

# Historie kroucené dvoulinky

- Kroucená dvoulinka se používala pro telefonní rozvody

- Prosadila se do světa lokálních počítačových sítí díky tomu, že v USA se nové budovy vybavovaly značně předimenzovanými telefonními rozvody

- Když se začaly zavádět počítačové sítě a jejich datové rozvody, někoho napadlo:

- _„nešlo by pro tyto datové rozvody použít již existující, ale nevyužitou_

- _telefonní kabeláž"?_

- A tak došlo k upravení nejpoužívanější přenosové technologie lokálních sítí - Ethernetu tak, aby místo po koaxiálním kabelu dokázal „běhat" i po původně telefonní kroucené dvoulince.

# Varianty TP

# Složení TP

- **vodivé dráty:** signálové vodiče, které jsou vyráběny obvykle z mědi a jsou vždy v párech

   - **Lanko (licna):** pro připojovací kabely k PC, tam kde jsou ohyby a lze očekávat mechanické namáhání

   - **Drát:** používá se pro běžné rozvody v lištách

- **stínění** (pouze u STP): může být dvojího druhu:

   - fóliové stínění kolem každého páru vodičů

   - splétané (fóliové) stínění kolem všech párů

- **plášť:** vnější kryt vyrobený z PVC (nonplenum) nebo z teflonu popř. Kynaru (plenum)

- **kroucená dvojlinka je** používaná pro vnitřní rozvody, připojuje se pomocí konektoru **RJ-45** .

# Vliv kroucené dvoulinky na topologii LAN sítí

- Kroucená dvojlinka umožňuje vytvářet pouze dvoubodové spoje, omezené jen na maximální vzdálenost **100 metrů** .

- Problém:

> ● Na kroucené dvoulince není možné dělat odbočky - nelze vytvořit sběrnicovou topologii sítě, se kterou klasický Ethernet počítá

Řešení:

- Odbočky se řeší elektronicky

   - jeden konec se přivede ke koncovému uzlu (pc)

   - druhý na vstup elektronického obvodu, který zajistí potřebné „rozbočení" elektronickou cestou (rozbočovač)

- Vzniká topologie hvězdicovitá.

# Kategorie TP

- _Kategorie 3 (Cat. 3)_ většinou se používají pouze pro telefonní rozvody (např. propojovací ISDN panely, kabely k telefonní ústředně či propojovací šňůry k telefonnímu přístroji). Max. přenosová rychlost10 Mb/s (protokol 10Base-T).

- _Kategorie 4 (Cat. 4)_ - tato kategorie se již téměř nepoužívá. Byla spojována především se společností IBM a jejími prvky pro sítě Token Ring ( do 15 Mb/s)

- _Kategorie 5 (Cat. 5)_ - max. přenosová rychlost 100 Mb/s (tzv. Fast Ethernet, protokol 100Base-T).

- **Kategorie 5E (Cat. 5E)** – kategorie 5E je nejrozšířenější kategorií ve strukturované kabeláži. Komponenty kategorie 5E umí přenést i Gigabit Ethernet  (1000BaseT)

- _Kategorie 6 (Cat. 6)_ - Gigabit Ethernet (1000Base-T i 1000Base-TX, částečně 10GBase-T).

- **Kategorie 6A (Cat. 6A)** - Gigabit Ethernet (plnohodnotný 10GBase-T na všechny vzdálenosti (rychlost 10 Gb/s), které jsou v metalické kabeláži běžné)

- _Kategorie 7 (Cat. 7)_ - pouze pro kabel a nikoli pro spojovací hardware (tj. zásuvky, patch panely atd.).

# Proč kroucená?

- Každé dva souběžně vedoucí vodiče se chovají jako anténa: při přenosu signálu vyzařují do svého okolí elektromagnetické vlny.

- Konkrétní efekt vyzařování závisí na mnoha faktorech (frekvenci signálu, fyzickému provedení souběžných vodičů atd.)

- Při přenosových rychlostech dnešních počítačových sítí efekt vyzařování není zanedbatelný.

- Efekt „ **vyzařující antény** " se výrazně sníží právě tím, že se oba vodiče pravidelně zkroutí.

- Vyzařování se tak většinou sníží na přijatelnou míru

- neohrožuje lidské zdraví

- neovlivňuje jiná zařízení či jiné přenosové cesty

- Pokud je výsledná míra vyzařování ještě příliš vysoká, musí být místo tzv. nestíněné kroucené dvoulinky (UTP) použita dvoulinka stíněná (STP)

- záleží na konkrétních fyzických dispozicích a dalších požadavcích, normách

# Kategorie TP

# Barevné rozlišení

- Každý pár má barevné kódování definované doporučením EIA/TIA 568A nebo B (liší se pořadím páru 2 a 3), které má evropský ekvivalent v ISO/IEC11801.

- V našich končinách se vyskytují spíše varianty 568B.

- Páry jsou odlišeny těmito barvami:

- modrá

- zelená

- oranžová

- hnědá

- V páru je vždy druhý drát bílý s doplňkovým potiskem odpovídající barvy

- = 8 vodičů

# Přímý kabel - T-568B

# Křížený kabel pro gigabit ethernet

- Používá všechny čtyři páry pro datový přenos

- Křížení je na všech párech

- Síťová karta sama detekuje typ kabelu a zajistí překřížení

- http://en.wikipedia.org/wiki/Ethernet_crossover_cable

# Přímý kabel - T-568A

# Křížený kabel - 100Mb/s

# Konektory pro TP

<!-- Start of picture text -->
RJ-45 pro STP/FTP<br>Rj-45 pro licnu<br>RJ-45 pro drát Zásuvka 2x RJ-45<br><!-- End of picture text -->
