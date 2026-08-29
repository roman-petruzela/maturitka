---
title: "Paměti"
order: 4
source: "MATURITA HADR/IT/7. Paměti.docx"
---
- Zařízení, které slouží k ukládání programů a dat
- Paměťový řadič – řídí veškeré kroky spojené s operací čtení, zápis a zabezpečení přenosu dat
- Rozdělení paměti podle zápisu informace:
	- Polovodičové – RAM – statická a dynamická; ROM – PROM, EPROM, EEPROM, Flash ROM
	- Paměti s pohyblivou magnetickou vrstvou – HDD, FDD \(floppy disk drive – disketa\)
	- Optické – CD, DVD, BluRay
	- Magnetooptické – pomocí světla \(laser\) se mění magnetické vlastnosti materiálu
- V závislosti na napájení
	- Závislé – pro uchování k informacím potřebuje paměť napětí, při jeho zániku zaniká i informace
	- Nezávislé – potřebuje napětí pro čtení/zápis, ale při jeho zániku uchovává informaci
- Podle přístupu do paměti
	- RAM – s libovolným přístupem, doba přístupu k obsahu není závislá na umístění
	- Sekvenční – dobra přístupu k obsahu je závislá na umístění – páskové paměti
- Podle schopnosti zápisu
	- RAM – pro čtení a zápis
	- ROM – paměť pouze pro čtení – data jsou uložena jednorázově při výrobním procesu
	- PROM – pomocí speciálního zařízení \(programátor\) si ji naprogramuje uživatel, poté nelze změnit
	- EPROM – informaci zapsanou v paměti je možné vymazat UV zářením a znovu přeprogramovat
	- EEPROM – mazání probíhá pomocí elektrického impulsu, počet zápisů je omezen cca 100 000
	- Flash ROM – elektricky programovatelná paměť; uchovává informace v paměťových buňkách; informace zachovává i po odpojení od elektrického napájení
- Podle určení paměti
	- Vnitřní paměti – registry, operační paměť, vyrovnávací paměti cache, paměti pro uložení firmware
	- Vnější paměti – pevný disk, disketa, optické paměti, flash disky a paměťové karty
- Parametry pamětí
	- Kapacita – množství informací v bajtech, které je možné do paměti uložit
	- Druh paměti – polovodičová, optická
	- Přístupová doba – doba od zadání požadavku do zpřístupnění požadované informace
	- Přenosová rychlost – množství dat, které lze z paměti přečíst za jednotku času
	- Latence – časový prostoj, který prodlužuje dobu přístupu
	- Cena za bit – cena, kterou je nutno zaplatit za jeden bit paměti
- Registry – jsou součástí procesoru, malé paměťové bloky využívané pro výpočty \(8 až 64 bit\)
- Cache – vyrovnávací paměť umistěna mezi dvě zařízení, která nepracují stejnou přenosovou rychlostí; několik druhů L1, L2, L3 od rychlejší po nejpomalejší

Polovodičové paměti

- Skládají se z paměťových buněk \(1bit\); jsou uspořádány na polovodičovém čipu maticově
- RAM – dělíme na SRAM – je velmi rychlá a vyžaduje menší proud než paměť dynamická – registry, CACHE; DRAM \(dynamická RAM\)  – SDRAM  \(synchronní DRAM\); DDR; DDR2 – nižší napájecí napěti; DDR3 – nižší spotřeba a vyšší kmitočet
- SIPP – byl používán u některých počítačů; paměťový modul neměl klasické kontakty ale piny, náchylné k poškození
- SIMM – už má kontakty a výhodou byla snadnější instalace oproti SIPP
- DIMM – všechny novější paměti \(SDRAM, DDR, DDR2, DDR3\) jsou umístěny na těchto modulech DIMM; šířka sběrnice je 64 bitů
- SO\-DIMM – nejčastěji určeny pro notebooky

Hard disk \(HDD\)

- Velkokapacitní paměť s pohyblivou magnetickou vrstvou a je energeticky nezávislá; je zde nainstalován OS
- Struktura:
	- Elektromechanické části: disková hlava, hřídel, diskové kotouče, vystavovací mechanismus, pohony
	- Elektronické části – deska s plošnými spoji \(řadič, ROM, Cache\) konektory, jumpery
	- Software – geometrie disku \(stopy, cylindry, sektory, hlavy\); logická struktura, souborové systémy
- Elektromechanické části pevného disku:
	- Disková hlava – umístěna na pohyblivém raménku a má plošku aerodynamického tvaru; v dnešní době se používají magnetorezistivní hlavy; indukční hlavu používá pouze pro zápis, pro čtení se používá prvek založený na změně elektrického odporu při vystavení magnetickému poli; hlava pohybující se nad rotujícím diskem zapíše bity informace jako zmagnetizované oblasti ve stopách, které jsou později čteny MR\-senzorem
	- Hřídel \(pohon disku\) – na společné hřídeli je umístěno několik diskových kotoučů; na pohonu disku je závislá průměrná čekací doba; čím jsou otáčky menší tím je čekací doba menší; čím více otáček tím horší provozní podmínky – tvorba tepla uvnitř disku
	- Diskové kotouče \(plotny\) – nejdůležitější částí disku, protože na nich jsou uložena data; dnešní velikosti jsou 3\.5 a 2\.5 palců; menší průměr vede ke snížení kapacity disku; zpravidla 1 – 3 plotny; každá plotna má dva povrchy a každý z nich má vlastní čtecí a zapisovací hlavu; čím víc ploten tím hlučnější provoz; jsou vyrobeny z hliníkových slitin
	- Vystavovací mechanizmus – jeho úkolem je vystavit hlavy nad požadovanou stopu; pohon je prováděn pomocí kmitající cívky; dvě cívky jsou umístění v silním magnetické poli permanentních magnetů, přivedením proudu do cívky vzniká jejich vlastní pole; vzájemným silovým účinkem obou polí dochází k pohybu cívek i s raménkem na jehož konci jsou hlavičky¨
- Elektronické části HDD
	- Hlavními funkcemi elektroniky jsou: kontrola rychlosti otáčení disku, kontrola přesunu hlav nad plotnami, zprostředkování všech operací čtení nebo zápis, překlad geometrie disku, spravování vyrovnávací paměti; doplnění pokročilých funkcí pro zvýšení rychlosti; řízení toku informací disku
	- Řadič – jeho úkolem je na základě požadavků řídit čtení/zápis dat na HDD; koordinuje činnost všech částí HDD
	- ROM – uložen miniaturní OS pevného disku \(firmware\), řízení pohonu, kódování a dekódování dat
	- RAM \(CACHE\) – statická RAM, která obecně slouží k dočasnému uložení dat mezi částmi počítače, které pracují různou rychlostí, jejím úkolem je urychlení přenosu dat
	- Rozhraní Paralel ATA \(PATA\) – ATA rozhraní využívá 40ti pinového konektoru na který se připojují ploché datové kabely
	- Rozhraní Serial ATA \(SATA\) – oproti PATA využívá původní verze SATA pouze 1bitovou šířku, ale při taktovací frekvenci 1500 MHz
- Geometrie pevného disku
	- Před zápisem jakýchkoliv dat je nutné pevný disk nejprve naformátovat
	- Stopa – je oblast pro ukládání dat ve tvaru soustředné kružnice, kterých může být až 10 000
	- Sektor – je část jedné stopy ohraničená na začátku i konci identifikačními značkami určujícími mimo jiné jeho číslo, polohu, začátek a konec
	- Cylindr – sada stop se stejným číslem na různých stranách ploten, musí se nadcházet nad sebou
	- Cluster – nejmenší použitelné množství dat pohromadě
- Master boot record \(MBR\) – tvoří základ logické struktury – záznam je umístěn na začátku disku, obsahuje aplikaci spouštěnou BIOSem, která má za úkol načíst OS; obsahuje partition table – obsahuje informace o dělení disku na oblasti
- Alokační tabulku – popis každý cluster logického oddílu; velká tabulku v níž je každá buňka přiřazena jednomu clusteru
- Kořenový adresář – jednoduchá databáze, obsahující informace o uložených souborech
- Defragmentace – proces který roztroušené kousky \(fragmenty\) souborů uspořádá tak, aby obsah jednotlivých souborů byl uložen co nejvíce pohromadě
- Souborový systém – je datová struktura vytvořená vysokoúrovňovým formátováním pevného disku
	- FAT, FAT 12, FAT 16\. FAT 32, NTFS

Optické paměti

- CD \(700MB\) , DVD \(1,46 GB – 17,08 GB – záleží na průměrů a počtu vrstev\), BD \(25GB\) , HD DVD \(15 GB\)

FDD Floppy disk drive

- 3,5 \(1,4 MiB\)  a 5,25 a 8 palců
