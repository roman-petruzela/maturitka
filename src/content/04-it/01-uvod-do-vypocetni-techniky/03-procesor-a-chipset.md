---
title: "Procesor a chipset"
order: 3
source: "MATURITA HADR/IT/6. Procesor a chipset.docx"
---
- Je jednotkou, která zpracovává téměř všechny data, informace, požadavky, úkoly, které počítač realizuje
- Mozek počítače, zajišťuje nejdůležitější funkce, řídí činnost PC
- Součástka, která umí vykonávat strojové instrukce \(strojový kód\) počítačového programu
- Procesor vzniká spojením řadiče a ALU vycházející z von Neumannova schématu
- Registry = důležitou součástí procesoru, kterému slouží pro ukládání mezivýpočtů
- První procesor CPU vyrobila společnosti Intel
- Základní architektura CPU se skládá z:
	- ALU – Aritmeticko\-Logické jednotky, která vykonává matematické a logické operace
	- Řídící jednotky – přesměrovává a řídí veškeré operace
	- Vnitřní paměti – uchovává data v průběhu výpočetních operací ALU \(CACHE\); registry – rychlé statické paměti typu RAM
- Aby byl procesor univerzálně použitelný, zpracovává tyto instrukce ve vlastním strojovém kódu
- Procesor neustále přijímá a zpracovává vstupní data od aktivních programů či aplikací
- Každý procesor obsahuje minimálně jedno jádro, ale pro zvýšení výkonu se využívají procesory vícejádrové
- Procesory používané v počítačích používají dvě základní architektury, které se liší zpracovávanými instrukcemi:
	- CISC – typ architektury mikroprocesorů – označení procesorů s komplexní instrukční sadou \- strojové instrukce pokrývají velmi široký okruh funkcí, které by jinak šly naprogramovat pomocí jednodušších již obsažených strojových instrukcí
	- RISC – označení procesorů s redukovanou instrukční sadou, zaměřen na jednoduchou, vysoce optimalizovanou sadu strojových instrukcí
- Základní stavební jednotkou procesoru je tranzistor zapojený jako spínač, jeho úkolem je měnit stav mezi logickou nulou a jedničkou – v procesoru jich je až miliardy
- Socket procesoru slouží k propojení procesoru se základní deskou, rozlišujeme základní dva architektury
	- PGA – architektura, kde jsou piny zespod procesoru, které se zasouvají do socketu na základní desce
	- LGA – architektura, kde jsou piny v socketu namísto v procesoru
- Frekvence procesoru – jak rychle dokáže tranzistor v procesoru změnit stav z logické jedničky na nulu; udává se v Hz; často také označováno jako kmitočet nebo takt procesoru; frekvence je jedním z hlavních faktorů, které ovlivňují výkon procesoru
- Parametry procesoru:
	- Rychlost – počet operací provedených za jednu sekundu; také označováno jako frekvence
	- Počet instrukčních kanálů – kolik instrukcí dovede procesor vykonat v jednom taktu
	- Šířka slova – max\. počet bitů, které je možné zpracovat během jedné operace
	- Interní cache paměť – kapacita rychlé interní cache paměti – vyrovnávací paměť k ukládání mezivýpočtů
	- Počet jader – čím více jader tím dokáže procesor provádět několik operací naráz
	- Patice/socket – potřeba aby byla kompatibilní se základní deskou
- HyperThreading – technologie využívána výrobcem procesorů Intel, slouží k vytvoření z jednoho fyzického dva logické procesory a tím zrychlí výpočty
- Simultánní multithreading – technologie využívána výrobcem Procesorů Intel k zvýšení rychlosti výpočtů procesoru
- Výrobci: Intel, AMD, Samsung, Qualcomm, Apple

Čipová sada \(Chipset\)

- Je hlavní logický integrovaný obvod základní desky
- Jeho úkolem je řídit komunikaci mezi procesorem a ostatními zařízeními
- V dnešní době převažují čipové say, které se dělí na dva integrované obvody
	- Severní most \(North bridge\)
	- Jižní most \(South bridge\)
- North bridge – nazýván obvodem MCH
	- Zajišťuje komunikaci mezi procesorem, operační pamětí, grafickou sběrnicí AGP nebo PCI Express x16 a také zajišťuje spojení s jižním mostem
	- Některé obsahují integrované grafické karty
	- Základní prvek, který určuje rychlost, druh procesorů, jejich množství a druh paměti RAM, který bude použit
	- Hraje roli pokud chceme přetaktovat procesor na vyšší frekvence z důvodu chlazení
- South bridge – nazýván obvodem ICH
	- Je pomalejší než severní most, umožňuje připojení periferních zařízení k základní desce
	- Obsahuje řadiče disků ATA, SATA, RAID; USB; PS/2 a řídí komunikaci na sběrnici PCI, PCI Express pro připojení rozšiřujících karet
	- Dále je připojen zvukový adaptér, paměťový obvod obsahující BIOS, integrovaný síťový adaptér

Chlazení

- Je nutné nadměrné ztrátové teplo v dostatečném množství odvést z povrchu polovodičového čipu, tedy zajistit vhodné chlazení příslušných počítačových komponent
	- Zdroj, procesor, obvody čipové sady, grafická karta, pevný disk …\.\)
- Pasivní chlazení – kovová nepohyblivá součástka, která má na sobě navařená žebra pro zajištění co největší plochy z důvodu lepšího předávání tepla okolnímu vzduchu \(vyrobeny buď z mědi\(dražší\) nebo z hliníku \(levnější\)\)
- Pro zvýšení účinnosti přenosu tepla z povrchu polovodičové součástky na chladič je ve styčných bodech nanesena teplovodivá pasta – vyplnění malých povrchových nerovností styčných ploch mezi součástkou, te které chceme odvádět teplo a chladičem \(silikonové, keramické a kovové báze\)
- Aktivní chlazení – prováděno proudícím vzduchem – rotující ventilátor vhání pomocí vhodně tvarovaných lopatek vzduch na pasivní část chladiče, která je v přímém kontaktu s chlazenou komponentou a odvádí od ní teplo
- Vzduch proudí do pasivu a odvádí teplo pryč – aktivní chlazení je nejčastěji používáno jako doplněk pasivního chlazení procesoru
- Heatpipe – jedná se o měděnou, nebo ocelovou trubici, která je na obou koncích zavařena nebo zapájeno – uvnitř se nachází malé množství kapalné pracovní látky; při určité teplotě se začne odpařovat pracovní látka; v prostředí s nižší teplotou pára kondenzuje a vznikající kapalina je absorbována knotem za uvolnění tepelné energie
- Vodní chlazení – tvoří uzavřený okruh ve kterém chladící médium, v tomto případě voda, obíhá	; na jedné stran se přenáší teplo z chlazené komponenty do kapaliny a na druhé straně tuto kapalinu ochlazujeme; voda dokáže odvést více tepla než vzduch

Architektury

- HyperThreading; Intel SpeedStep, AMD Cool’n’Quiet; Výcejádrové 64 bitové architektury; Integrace severního mostu čipové sady do procesoru; Technologie Turbo Boost \(INTEL\), Turbo Core \(AMD\)
