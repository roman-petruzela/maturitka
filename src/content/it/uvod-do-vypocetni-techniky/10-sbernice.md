---
title: "Sběrnice"
order: 10
source: "uvt/cast2_01_sbernice.pdf"
---
Sb ě rnice je soustava vodi čů , které zajiš ť ují propojení jednotlivých obvod ů po č íta č e. Používají se k p ř enosu dat, adres, ř ídicích a stavových signál ů . Sb ě rnice v PC jsou uspo ř ádaný hierarchicky podle p ř enosových rychlostí. Platí, že pomalejší sb ě rnice je vždy p ř ipojena do rychlejší. Každé za ř ízení v PC musí být k n ě které sb ě rnici p ř ipojeno, sb ě rnice jsou pak propojeny mosty (severní, jižní), které obsahují ř adi č e t ě chto za ř ízení.

Za ř ízení jako jsou procesor, cache pam ěť , opera č ní pam ěť a grafický adaptér (resp. grafická karta) jsou propojena tzv. lokální sb <u>ě rnicí. Jedná se o nejrychlejší sb</u> ě rnice na základní desce.

Osobní po č íta č e musí být navrženy tak, aby bylo možné jejich snadné rozši ř ování o další za ř ízení (zvukové karty, sí ť ové karty, modemy, TV karty, m ěř ící karty apod.). Takovéto rozšiř ování je velmi č asto uskute čň ováno pomocí tzv. rozši ř ující sb ě rnice po č íta č e ( č ast ě ji označ ované pouze jako sb ě rnice nebo systémová sb <u>ě rnice), na kterou se jednotlivá z</u> ř ízení zapojují (nap ř . PCI, PCI Express, ISA, PCMCIA, ExpressCard). Tato rozši ř ující sb ě rnice a zapojované za ř ízení musí tedy spl ň ovat ur č itá pravidla (standardy).

### **Parametry sb ě rnic:**

- a. _P ř enosová rychlost_ - ur č uje max. po č et bit ů p ř enesených za 1 sekundu [b/s]

   - (Vypo č te se: kmito č et x ší ř ka sb ě rnice)

Firma Intel zavedla pro vyjád ř ení obecné p ř enosové rychlosti jednotku [GT/s] „ _Gigatransfers per second_ “, neboli „po č et p ř enos ů za 1 sekundu v ř ád ů miliard “.

   - **1 transfer** = p ř enesení dat o velikosti ší ř ky sb ě rnice v bajtech.

- b. _Ší ř ka sb ě rnice_ - ur č uje po č et paralelních vodi čů (1, 8, 16, 32, 64, … bitová)

   - Pozn.: Ší ř ka adresové sb ě rnice je dána velikosti adresy poslední pam ěť ové bu ň ky (velikost pam ěť ového prostoru).

- c. _Taktovací kmito č et_ – p ř enos informací po sb ě rnici je ř ízen hodinovými impulsy. Po č et t ě chto hodinových impuls ů za 1 sekundu udává základní frekvenci sb ě rnice [kHz, MHz, GHz].

Zjednodušen ě lze ř íci, že b ě hem jednoho hodinového taktu se p ř enese množství informace v bitech, které je rovno po č tu datových vodi čů (ší ř ka datové sb ě rnice). Č ím v ě tší kmito č et, tím v ě tší rychlost p ř enosu dat. Existují však technologie, které umožň ují b ě hem 1 hodinového impulsu provést i více než jeden p ř enos po sb ě rnici (nap ř . technologie QPB)

### **Rozd ě lení sb ě rnic:**

- _Podle druhu p ř enášených signál ů_

   - datové

   - adresové

   - ř ídící a stavové

- _Podle po č tu vodi čů_

   - sériové (1 bit)

   - paralelní (více než 1 bit)

- _Podle sm ě ru p ř enosu_

   - jednosm ě rné

   - obousm ě rné

- _Podle_ synchronizace p ř enosu

   - Synchronní: p ř enosy dat jsou ř ízeny (synchronizovány) hodinovými impulsy. Nevhodné pro p ř enos dat mezi za ř ízeními, které pracují r ů znou rychlostí.

   - Asynchronní: nepoužívají pro ř ízení p ř enosových operací hodinový signál. Využívají potvrzovací signály, jimiž si vysíla č a p ř ijíma č potvrzují vysílání a p ř ijetí informací.

- _Podle napojení na obvody č ipové sady_

   - _Lokální_ - je napojena p ř ímo na severní most č ipové sady. Pat ř í zde procesorová sb ě rnice (FSB, QPI, hypertransport), sb ě rnice propojující ř adi č opera č ní pam ě ti s moduly opera č ní pam ě ti a grafická sb ě rnice (AGP, PCI-Express x16, PCI-Express 2.0)

   - _Systémová_ – je napojena na jižní most č ipové sady se zakon č ením normovanými sloty (PCI, PCI-Express x1, x2, x4, AMR, CNR, PCMCIA, ExpressCard). Mezi dnes nepoužívané systémové sb ě rnice ř adíme ISA, EISA, VL-BUS.

## **1. Lokální sb ě rnice**

_Procesorová_ - nejrychlejší sb ě rnice na základní desce, slouží k p ř enášení dat mezi procesorem a č ipovou sadou základní desky - propojuje procesor se severním mostem (MCH). Sb ě rnice pracuje na plné rychlosti základní desky. Rychlost procesorové sb ě rnice se m ě ní v závislosti na č ipové sad ě . V sou č asné dob ě je stávající procesorová sb ě rnice FSB (Front Side Bus) nahrazována procesorovou sb ě rnicí QPI (Intel procesory) nebo HyperTransport (AMD procesory).

_Pam ěť ová_ - využívá se pro p ř enos dat mezi procesorem a opera č ní pam ě ti. Propojuje ř adi č opera č ní pam ě ti s moduly opera č ní pam ě ti. Rychlost je závislá na typu pam ěť ových modul ů , které č ipová sada podporuje.

_Grafická_ - slouží k rychlému p ř enosu dat mezi grafickou kartou, procesorem a opera č ní pam ě tí. U starších základních desek se používala grafická sb ě rnice AGP (Accelerated Graphics Port). Dnes se používá výhradn ě sb ě rnice PCI Express x16.

## **2. Sb ě rnice pro rozši ř ující karty**

Slouží k rozší ř ení možností po č íta č e pomocí rozši ř ujících karet. Tyto sb ě rnice jsou zakon č e- ny normovanými sloty, do kterých se zasouvají p ř ídavné karty (zvuková, sí ť ová, televizní, atd.).

### **2.1 PCI (Peripheral Component Interconnect), PCI-X (PCI Extended)**

Systémová sb ě rnice pro p ř ipojení rozši ř ujících karet do základní desky. Používá paralelní p ř enos dat (ší ř ka 32 nebo 64 bit ů ). Každý datový vodi č slouží pro p ř enos dat ob ě ma sm ě ry, ne však zárove ň . Úrove ň logických signál ů (resp. nap ě tí log. 1) m ů že nabývat hodnoty bu ď 5 V (starší specifikace PCI sb ě rnice) nebo 3,3 V. Sou č asný kone č ný standard sb ě rnice PCI 3.0 již nepo č ítá s nap ě tím 5 V.

32 bitová sb ě rnice PCI

64 bitová sb ě rnice PCI

Sb ě rnice PCI jako první systémová sb ě rnice nabídla uživateli standard _Plug and Play_ (PnP), tedy technologii zajiš ť ující bezproblémovou instalaci a nakonfigurování nového hardwaru. Opera č ní systém sám detekuje a provádí konfiguraci nov ě nainstalovaných za ř ízení, aniž by se uživatel musel zajímat o nastavení p ř erušení (interrupt - IRQ) a jumper ů (propojek na desce).

PCI architektura nepoužívá hlavní DMA ř adi č pro p ř ímý p ř ístup p ř ipojeného za ř ízení do opera č ní pam ě ti. Podporuje tzv. _bus mastering_ :

Každé za ř ízení p ř ipojené na sb ě rnici PCI m ů že požádat o kontrolu nad sb ě rnicí a požádat o p ř ístup do opera č ní pam ě ti. Kontrolu nad sb ě rnicí m ů že mít vždy jen jedno za ř ízení, pokud tedy zažádá o kontrolu více za ř ízení najednou, o priorit ě (p ř ednosti) rozhodne tzv. arbitr sb ě rnice (nachází se v severním mostu č ipové sady). Jakmile má dané za ř ízení kontrolu nad sb ě rnicí, generuje standardní p ř íkazy pro č tení / zápis na sb ě rnici PCI. Tyto p ř íkazy budou dále p ř edány pam ěť ovému ř adi č i.

### Parametry sb ě rnice PCI:

P ř íklad výpo č tu maximální teoretické p ř enosové rychlosti:

1056 _Mb_ / _s_ 33 _MHz_ ⋅ 32 _bitů_ = 1056 _Mb_ / _s_ = = 132 _MB_ / _s_ 8 _bitů_

P ř enosovou kapacitu sdílí všechna p ř ipojená za ř ízení. Ukázka karet pro 64 bitovou PCI sb ě rnici:

64 bitová PCI sb ě rnice s pracovním kmito č tem 66 MHz a 133 MHz je ur č ena p ř edevším pro výkonné pracovní stanice a servery.

P ř ímým nástupcem sb ě rnice PCI je sb ě rnice **PCI-X** . Jedná se o 64 bitovou sb ě rnici s vyššími pracovními kmito č ty: 66, 133 MHz (PCI-X 1.0), následn ě 266, 533 MHz (PCI-X 2.0). Standard PCI-X je zp ě tn ě kompatibilní s PCI sb ě rnicí podporující nap ě tí 3,3 V.

## **2.2 AGP (Accelerated Graphics Port)**

AGP je vysokorychlostní sb ě rnice, kterou ř adíme do kategorie „lokální sb ě rnice“. Je tedy napojena p ř ímo na severní most (obvod MCH) č ipové sady. Pomocí této sb ě rnice lze p ř ipojit k po č íta č i výhradn ě grafickou kartu.

Hlavním d ů vodem k zavedení vyhrazené grafické sb ě rnice AGP byly stoupající požadavky na rychlost p ř enosu grafických dat, p ř edevším videa a textur pro trojrozm ě rné scény (požadavky na rychlost p ř enosu rostou v p ř ípad ě , kdy se textury musí na č ítat dynamicky, tj. b ě - hem vykreslování trojrozm ě rné scény).

V sou č asné dob ě je AGP sb ě rnice vytla č ena rychlejší sériovou sb ě rnici PCI Express x16 verze PCI Express 1.x a PCI Express 2.0. Druhy AGP grafických karet:

Specifikace sb ě rnice AGP:

### **2.3 PCI Express**

Sb ě rnice PCI Express je nová implementace PCI sb ě rnice. Je založena na mnohem rychlejší sériové komunikaci. Díky tomu je PCI Express kompaktn ě jší než PCI - vyžaduje daleko mén ě vodi čů , č ímž se usnad ň uje a zlev ň uje výroba. Návrhy plošných spoj ů jsou jednodušší, uvol ň uje se prostor pro jiné prvky na základní desce.

Sb ě rnice je navržena tak, aby byla použitelná v n ě kolika oblastech výpo č etní techniky: stolní po č íta č e, mobilní za ř ízení, servery, pracovní stanice a integrovaná ř ešení.

PCI Express je sb ě rnicí typu point-to-point, spoj mezi 2 za ř ízeními je realizován jako dva jednosm ě rné spoje (Full Duplex). Datový tok není omezován žádným dalším za ř ízením na sb ě rnici, na rozdíl od PCI sb ě rnice, kde je datový tok sdílen všemi p ř ipojenými za ř ízeními.

_Full duplex_ ozna č uje spojení mezi dv ě ma za ř ízeními, kdy je možné data p ř enášet sou č asn ě v obou sm ě rech maximální možnou rychlostí.

Sb ě rnici PCI Express lze tedy vnímat jako soustavu n ě kolika nezávislých obousm ě rných propojení (link) typu bod-bod. Není pot ř eba arbitr sb ě rnice rozhodující o p ř id ě lení sb ě rnice pro p ř enos dat.

Konfigurace x1 p ř edstavuje jeden spoj (link) ob ě ma sm ě ry

Konfigurace x2 p ř edstavuje dva sériové spoje (každý pro oba sm ě ry) atd…

### _Specifikace PCI Express_

### <u>PCI Express verze 1.x</u>

|**Typ**|**Počet spojů (link)**|**Datová propustnost (pro každý směr)**|
|---|---|---|
|PCI Express x1|1|250 MB/s|
|PCI Express x4|4|1000 MB/s|
|PCI Express x8|8|2000 MB/s|
|PCI Express x16|16|4000 MB/s|

PCI Express x16 je ur č ena pro grafické karty o propustnosti 4 GB/s v jednom sm ě ru.

### <u>PCI Express verze 2.0</u>

Tato specifikace sb ě rnice PCI Express pracuje na dvojnásobném kmito č tu oproti p ř edchozí specifikaci.

|**Typ**|**Počet spojů (link)**|**Datová propustnost (pro každý směr)**|
|---|---|---|
|PCI Express x1|1|500 MB/s|
|PCI Express x4|4|2000 MB/s|
|PCI Express x8|8|4000 MB/s|
|PCI Express x16|16|8000 MB/s|

Standard PCI Express 2.0 je zp ě tn ě kompatibilní se standardem PCI-Express 1.0 a 1.1, u starších základních desek však nemusí být zajišt ě na dostate č ná podpora.

PCI Express x1

PCI Express x16

### **2.4 PCMCIA**

PCMCIA (Personal Computer Memory Card International Association) je rozši ř ující slot, vyskytující se p ř edevším v noteboocích. Starší specifikace vycházely z architektury sb ě rnice ISA (16 bit ů ), dnes se již nepoužívají. Nov ě jší specifikace vychází z architektury sb ě rnice PCI (32 bitová datová sb ě rnice), ozna č ovaná také jako _CardBus_ .

Má 3 verze podle ší ř ky vkládané karty a 1 neoficiální standard:

- <u>Type I</u> – dnes se již nevyskytuje, p ů vodní specifikace se 16 bitovou sb ě rnicí a tlouš ť - kou 3,3 mm. Bývala využívána p ř evážn ě pro pam ěť ová za ř ízení. (flash pam ě ti)

- <u>Type II</u> - tento typ již podporuje 16 bitovou i 32 bitovou datovou sb ě rnici, má tlouš ť ku 5 mm. P ř ináší podporu vstupních a výstupních za ř ízení pro p ř ipojení dalších za ř ízení. (nap ř . ř adi č e USB č i FireWire, modemy, sí ť ové karty, TV tunery, atd.)

- <u>Type III</u> - Toto rozhraní podporuje také16 bitovou i 32 bitovou datovou sb ě rnici, má tlouš ť ku 10,5 mm. Používá se díky své velkosti hlavn ě pro p ř ipojení p ř ídavných pevných disk ů (PCMCIA HDD).

- <u>Type IV</u> – neoficiální standard

PCMCIA karty se vyzna č ují podporou _Plug and Play_ (automatická detekce a instalace vloženého periferního za ř ízení č i rozhraní) a _Hot swap_ (možností vysunout/zasunout kartu za chodu).

## **2.5 ExpressCard**

Nový standard pro rozši ř ující karty. ExpressCard je nástupcem ř ešení PCMCIA. Jedná se o hardwarové spojení dvou sb ě rnic (rozhraní) - _PCI Express_ a _USB_ , p ř i č emž za ř ízení m ů že používat bu ď jednu nebo ob ě sb ě rnice sou č asn ě v závislosti na návrhu tohoto za ř ízení.

ExpressCard se tedy vyzna č uje vyšší datovou propustností než CardBus a podporou nových za ř ízení, nap ř . TV karet pro digitální televizní vysílání (standard DVB-T) s možností záznamu TV po ř adu na pam ěť ové médum.

ExpressCard karta (resp. slot) je standardizována ve dvou formátech velikosti:

- ExpressCard / 34

- ExpressCard / 54

Č íslo za lomítkem udává ší ř ku karty (resp. slotu) v milimetrech. Ob ě rozm ě rové varianty používají stejný 34 mm konektor. Z toho vyplývá, že lze použít ExpressCard / 34 kartu do jakéhokoli slotu, zatímco ExpresCard/54 karta jde umístit pouze do ExpressCard / 54 slotu.
