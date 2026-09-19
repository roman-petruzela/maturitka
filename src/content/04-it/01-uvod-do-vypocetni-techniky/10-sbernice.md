---
title: "Sběrnice"
order: 10
source: "uvt/cast2_01_sbernice.pdf"
---
Sběrnice je soustava vodičů, které zajišťují propojení jednotlivých obvodů počítače. Používají se k přenosu dat, adres, řídicích a stavových signálů. Sběrnice v PC jsou uspořádaný hierarchicky podle přenosových rychlostí. Platí, že pomalejší sběrnice je vždy připojena do rychlejší. Každé zařízení v PC musí být k některé sběrnici připojeno, sběrnice jsou pak propojeny mosty (severní, jižní), které obsahují řadiče těchto zařízení.

Zařízení jako jsou procesor, cache paměť, operační paměť a grafický adaptér (resp. grafická karta) jsou propojena tzv. lokální sběrnicí. Jedná se o nejrychlejší sběrnice na základní desce.

Osobní počítače musí být navrženy tak, aby bylo možné jejich snadné rozšiřování o další zařízení (zvukové karty, síťové karty, modemy, TV karty, měřící karty apod.). Takovéto rozšiřování je velmi často uskutečňováno pomocí tzv. rozšiřující sběrnice počítače (častěji označované pouze jako sběrnice nebo systémová sběrnice), na kterou se jednotlivá zařízení zapojují (např. PCI, PCI Express, ISA, PCMCIA, ExpressCard). Tato rozšiřující sběrnice a zapojované zařízení musí tedy splňovat určitá pravidla (standardy).

### **Parametry sběrnic:**

- a. _Přenosová rychlost_ - určuje max. počet bitů přenesených za 1 sekundu [b/s]

   - (Vypočte se: kmitočet x šířka sběrnice)

Firma Intel zavedla pro vyjádření obecné přenosové rychlosti jednotku [GT/s] „ _Gigatransfers per second_ “, neboli „počet přenosů za 1 sekundu v řádů miliard “.

   - **1 transfer** = přenesení dat o velikosti šířky sběrnice v bajtech.

- b. _Šířka sběrnice_ - určuje počet paralelních vodičů (1, 8, 16, 32, 64, … bitová)

   - Pozn.: Šířka adresové sběrnice je dána velikosti adresy poslední paměťové buňky (velikost paměťového prostoru).

- c. _Taktovací kmitočet_ – přenos informací po sběrnici je řízen hodinovými impulsy. Počet těchto hodinových impulsů za 1 sekundu udává základní frekvenci sběrnice [kHz, MHz, GHz].

Zjednodušeně lze říci, že během jednoho hodinového taktu se přenese množství informace v bitech, které je rovno počtu datových vodičů (šířka datové sběrnice). Čím větší kmitočet, tím větší rychlost přenosu dat. Existují však technologie, které umožňují během 1 hodinového impulsu provést i více než jeden přenos po sběrnici (např. technologie QPB)

### **Rozdělení sběrnic:**

- _Podle druhu přenášených signálů_

   - datové

   - adresové

   - řídící a stavové

- _Podle počtu vodičů_

   - sériové (1 bit)

   - paralelní (více než 1 bit)

- _Podle směru přenosu_

   - jednosměrné

   - obousměrné

- _Podle_ synchronizace přenosu

   - Synchronní: přenosy dat jsou řízeny (synchronizovány) hodinovými impulsy. Nevhodné pro přenos dat mezi zařízeními, které pracují různou rychlostí.

   - Asynchronní: nepoužívají pro řízení přenosových operací hodinový signál. Využívají potvrzovací signály, jimiž si vysílač a přijímač potvrzují vysílání a přijetí informací.

- _Podle napojení na obvody čipové sady_

   - _Lokální_ - je napojena přímo na severní most čipové sady. Patří zde procesorová sběrnice (FSB, QPI, hypertransport), sběrnice propojující řadič operační paměti s moduly operační paměti a grafická sběrnice (AGP, PCI-Express x16, PCI-Express 2.0)

   - _Systémová_ – je napojena na jižní most čipové sady se zakončením normovanými sloty (PCI, PCI-Express x1, x2, x4, AMR, CNR, PCMCIA, ExpressCard). Mezi dnes nepoužívané systémové sběrnice řadíme ISA, EISA, VL-BUS.

## **1. Lokální sběrnice**

_Procesorová_ - nejrychlejší sběrnice na základní desce, slouží k přenášení dat mezi procesorem a čipovou sadou základní desky - propojuje procesor se severním mostem (MCH). Sběrnice pracuje na plné rychlosti základní desky. Rychlost procesorové sběrnice se mění v závislosti na čipové sadě. V současné době je stávající procesorová sběrnice FSB (Front Side Bus) nahrazována procesorovou sběrnicí QPI (Intel procesory) nebo HyperTransport (AMD procesory).

_Paměťová_ - využívá se pro přenos dat mezi procesorem a operační paměti. Propojuje řadič operační paměti s moduly operační paměti. Rychlost je závislá na typu paměťových modulů, které čipová sada podporuje.

_Grafická_ - slouží k rychlému přenosu dat mezi grafickou kartou, procesorem a operační pamětí. U starších základních desek se používala grafická sběrnice AGP (Accelerated Graphics Port). Dnes se používá výhradně sběrnice PCI Express x16.

## **2. Sběrnice pro rozšiřující karty**

Slouží k rozšíření možností počítače pomocí rozšiřujících karet. Tyto sběrnice jsou zakončeny normovanými sloty, do kterých se zasouvají přídavné karty (zvuková, síťová, televizní, atd.).

### **2.1 PCI (Peripheral Component Interconnect), PCI-X (PCI Extended)**

Systémová sběrnice pro připojení rozšiřujících karet do základní desky. Používá paralelní přenos dat (šířka 32 nebo 64 bitů). Každý datový vodič slouží pro přenos dat oběma směry, ne však zároveň. Úroveň logických signálů (resp. napětí log. 1) může nabývat hodnoty buď 5 V (starší specifikace PCI sběrnice) nebo 3,3 V. Současný konečný standard sběrnice PCI 3.0 již nepočítá s napětím 5 V.

32 bitová sběrnice PCI

64 bitová sběrnice PCI

Sběrnice PCI jako první systémová sběrnice nabídla uživateli standard _Plug and Play_ (PnP), tedy technologii zajišťující bezproblémovou instalaci a nakonfigurování nového hardwaru. Operační systém sám detekuje a provádí konfiguraci nově nainstalovaných zařízení, aniž by se uživatel musel zajímat o nastavení přerušení (interrupt - IRQ) a jumperů (propojek na desce).

PCI architektura nepoužívá hlavní DMA řadič pro přímý přístup připojeného zařízení do operační paměti. Podporuje tzv. _bus mastering_ :

Každé zařízení připojené na sběrnici PCI může požádat o kontrolu nad sběrnicí a požádat o přístup do operační paměti. Kontrolu nad sběrnicí může mít vždy jen jedno zařízení, pokud tedy zažádá o kontrolu více zařízení najednou, o prioritě (přednosti) rozhodne tzv. arbitr sběrnice (nachází se v severním mostu čipové sady). Jakmile má dané zařízení kontrolu nad sběrnicí, generuje standardní příkazy pro čtení / zápis na sběrnici PCI. Tyto příkazy budou dále předány paměťovému řadiči.

### Parametry sběrnice PCI:

Příklad výpočtu maximální teoretické přenosové rychlosti:

1056 _Mb_ / _s_ 33 _MHz_ ⋅ 32 _bitů_ = 1056 _Mb_ / _s_ = = 132 _MB_ / _s_ 8 _bitů_

Přenosovou kapacitu sdílí všechna připojená zařízení. Ukázka karet pro 64 bitovou PCI sběrnici:

64 bitová PCI sběrnice s pracovním kmitočtem 66 MHz a 133 MHz je určena především pro výkonné pracovní stanice a servery.

Přímým nástupcem sběrnice PCI je sběrnice **PCI-X** . Jedná se o 64 bitovou sběrnici s vyššími pracovními kmitočty: 66, 133 MHz (PCI-X 1.0), následně 266, 533 MHz (PCI-X 2.0). Standard PCI-X je zpětně kompatibilní s PCI sběrnicí podporující napětí 3,3 V.

## **2.2 AGP (Accelerated Graphics Port)**

AGP je vysokorychlostní sběrnice, kterou řadíme do kategorie „lokální sběrnice“. Je tedy napojena přímo na severní most (obvod MCH) čipové sady. Pomocí této sběrnice lze připojit k počítači výhradně grafickou kartu.

Hlavním důvodem k zavedení vyhrazené grafické sběrnice AGP byly stoupající požadavky na rychlost přenosu grafických dat, především videa a textur pro trojrozměrné scény (požadavky na rychlost přenosu rostou v případě, kdy se textury musí načítat dynamicky, tj. během vykreslování trojrozměrné scény).

V současné době je AGP sběrnice vytlačena rychlejší sériovou sběrnici PCI Express x16 verze PCI Express 1.x a PCI Express 2.0. Druhy AGP grafických karet:

Specifikace sběrnice AGP:

### **2.3 PCI Express**

Sběrnice PCI Express je nová implementace PCI sběrnice. Je založena na mnohem rychlejší sériové komunikaci. Díky tomu je PCI Express kompaktnější než PCI - vyžaduje daleko méně vodičů, čímž se usnadňuje a zlevňuje výroba. Návrhy plošných spojů jsou jednodušší, uvolňuje se prostor pro jiné prvky na základní desce.

Sběrnice je navržena tak, aby byla použitelná v několika oblastech výpočetní techniky: stolní počítače, mobilní zařízení, servery, pracovní stanice a integrovaná řešení.

PCI Express je sběrnicí typu point-to-point, spoj mezi 2 zařízeními je realizován jako dva jednosměrné spoje (Full Duplex). Datový tok není omezován žádným dalším zařízením na sběrnici, na rozdíl od PCI sběrnice, kde je datový tok sdílen všemi připojenými zařízeními.

_Full duplex_ označuje spojení mezi dvěma zařízeními, kdy je možné data přenášet současně v obou směrech maximální možnou rychlostí.

Sběrnici PCI Express lze tedy vnímat jako soustavu několika nezávislých obousměrných propojení (link) typu bod-bod. Není potřeba arbitr sběrnice rozhodující o přidělení sběrnice pro přenos dat.

Konfigurace x1 představuje jeden spoj (link) oběma směry

Konfigurace x2 představuje dva sériové spoje (každý pro oba směry) atd…

### _Specifikace PCI Express_

### <u>PCI Express verze 1.x</u>

|**Typ**|**Počet spojů (link)**|**Datová propustnost (pro každý směr)**|
|---|---|---|
|PCI Express x1|1|250 MB/s|
|PCI Express x4|4|1000 MB/s|
|PCI Express x8|8|2000 MB/s|
|PCI Express x16|16|4000 MB/s|

PCI Express x16 je určena pro grafické karty o propustnosti 4 GB/s v jednom směru.

### <u>PCI Express verze 2.0</u>

Tato specifikace sběrnice PCI Express pracuje na dvojnásobném kmitočtu oproti předchozí specifikaci.

|**Typ**|**Počet spojů (link)**|**Datová propustnost (pro každý směr)**|
|---|---|---|
|PCI Express x1|1|500 MB/s|
|PCI Express x4|4|2000 MB/s|
|PCI Express x8|8|4000 MB/s|
|PCI Express x16|16|8000 MB/s|

Standard PCI Express 2.0 je zpětně kompatibilní se standardem PCI-Express 1.0 a 1.1, u starších základních desek však nemusí být zajištěna dostatečná podpora.

PCI Express x1

PCI Express x16

### **2.4 PCMCIA**

PCMCIA (Personal Computer Memory Card International Association) je rozšiřující slot, vyskytující se především v noteboocích. Starší specifikace vycházely z architektury sběrnice ISA (16 bitů), dnes se již nepoužívají. Novější specifikace vychází z architektury sběrnice PCI (32 bitová datová sběrnice), označovaná také jako _CardBus_ .

Má 3 verze podle šířky vkládané karty a 1 neoficiální standard:

- <u>Type I</u> – dnes se již nevyskytuje, původní specifikace se 16 bitovou sběrnicí a tloušťkou 3,3 mm. Bývala využívána převážně pro paměťová zařízení. (flash paměti)

- <u>Type II</u> - tento typ již podporuje 16 bitovou i 32 bitovou datovou sběrnici, má tloušťku 5 mm. Přináší podporu vstupních a výstupních zařízení pro připojení dalších zařízení. (např. řadiče USB či FireWire, modemy, síťové karty, TV tunery, atd.)

- <u>Type III</u> - Toto rozhraní podporuje také16 bitovou i 32 bitovou datovou sběrnici, má tloušťku 10,5 mm. Používá se díky své velkosti hlavně pro připojení přídavných pevných disků (PCMCIA HDD).

- <u>Type IV</u> – neoficiální standard

PCMCIA karty se vyznačují podporou _Plug and Play_ (automatická detekce a instalace vloženého periferního zařízení či rozhraní) a _Hot swap_ (možností vysunout/zasunout kartu za chodu).

## **2.5 ExpressCard**

Nový standard pro rozšiřující karty. ExpressCard je nástupcem řešení PCMCIA. Jedná se o hardwarové spojení dvou sběrnic (rozhraní) - _PCI Express_ a _USB_ , přičemž zařízení může používat buď jednu nebo obě sběrnice současně v závislosti na návrhu tohoto zařízení.

ExpressCard se tedy vyznačuje vyšší datovou propustností než CardBus a podporou nových zařízení, např. TV karet pro digitální televizní vysílání (standard DVB-T) s možností záznamu TV po řadu na paměťové médium.

ExpressCard karta (resp. slot) je standardizována ve dvou formátech velikosti:

- ExpressCard / 34

- ExpressCard / 54

Číslo za lomítkem udává šířku karty (resp. slotu) v milimetrech. Obě rozměrové varianty používají stejný 34 mm konektor. Z toho vyplývá, že lze použít ExpressCard / 34 kartu do jakéhokoli slotu, zatímco ExpresCard/54 karta jde umístit pouze do ExpressCard / 54 slotu.
