---
title: "Pevné disky HDD a SSD"
order: 12
source: "uvt/cv18-19_HDD_SSD.pdf"
---
Úvod do výpočetní techniky - UVT  - IT1

# **HDD, SSD, … 2h+ 2h**

## **Obsah**

|HDD, SSD, … 2h+ 2h..........................................................................................................................1|
|---|
|Dělení disků..................................................................................................................................... 1|
|Dělení dle technologie:...........................................................................................................1|
|Dělení dle rozhraní:................................................................................................................1|
|Dělení dle formátu:.................................................................................................................4|
|Dělení dle kapacity - plotnové:..............................................................................................5|
|Dělení dle kapacity - SSD:..................................................................................................... 6|
|Dělení dle rychlosti otáčení ploten:........................................................................................6|
|Dělení dle umístění:................................................................................................................6|
|Další technologie u disků:................................................................................................................7|
|Programy pro práci s oddíly disků (partitions):........................................................................12|
|RAID (Redundant Array of Inexpensive Disks)................................................................................12|
|Typy diskových polí RAID............................................................................................................13|
|Druhy RAID polí........................................................................................................................... 13|
|JBOD.........................................................................................................................................13|
|RAID 0......................................................................................................................................13|
|RAID 1......................................................................................................................................14|
|RAID 5......................................................................................................................................14|
|RAID 6......................................................................................................................................15|
|Víceúrovňová pole.........................................................................................................................15|
|Méně užívaná RAID pole.........................................................................................................16|
|Čištění disků (Windows) a registrů Windows....................................................................................16|
|Citace..................................................................................................................................................17|

## **Dělení disků**

#### **_Dělení dle technologie:_**

- HDD (Hard Disk Drive)

- SSD (Solid State Drive)

- SSHD  (Solid State Hard Drive)

#### **_Dělení dle rozhraní:_**

_Doplňte přenosové rychlosti různých rozhranní a technologií:_

- PATA

- SATA (ASATA)

- eSATA

- SAS

- NLSAS

- USB

## **úkol:**

Vytvořte tabulku verzí USB

### **Tabulka srovnání USB technologií**

|Verze USB<br>USB 1.1<br>USB 2.0|Přenosová<br>rychlost<br>12 Mbit/s (Full<br>Speed)<br>480 Mbit/s<br>(Hi-Speed)|Konektory<br> <br>A, B<br>A, B|Poznámky<br>Starší verze,<br>dnes již méně<br>používaná<br>Nejrozšířenější<br>verze, zpětně<br>kompatibilní s<br>1.1<br>Znatelně vyšší|
|---|---|---|---|
|USB 3.0 (USB<br>3.1 Gen 1)|<br>5 Gbit/s|A, B (modré)|rychlost,<br>zpětně<br>kompatibilní<br>Dvojnásobná|
|USB 3.1 Gen 2|10 Gbit/s|A, B (modré)|rychlost oproti<br>3.0|
|USB 3.2 Gen 1<br>(původně USB<br>3.1 Gen 1)|<br> <br>5 Gbit/s|A, B (modré)|Přejmenovaná<br>verze 3.0|
|USB 3.2 Gen 2|||Přejmenovaná|
|(původně USB<br>3.1 Gen 2)|<br>10 Gbit/s|A, B (modré)|verze 3.1 Gen<br>2<br>Dvojnásobná|
|USB 3.2 Gen<br>2x2|20 Gbit/s|C|rychlost oproti<br>3.2 Gen 2,<br>pouze konektor<br>typu C<br>Založeno na|
|USB 4|Až 40 Gbit/s|C|technologii<br>Thunderbolt 3|

- M.2

   - SATA – 560/530 MB/s

   - PCI express Gen3 – 3400 / 3100 MB/s

   - PCI express Gen4 – 7450 / 7000 MB/s

- PCI express Gen5 – 14500 / 11800 MB/S (NVMe 2.0 – 16.1.2024)

   - Crucial T705 2TB - SSD disk M.2 2280, M.2 (PCIe 5.0 4x NVMe), 3D NAND, rychlost čtení 14500MB/s, rychlost zápisu 12700MB/s, životnost 1200TBW  (NVMe 2.0 – 13.1.2025)

- U.2 - PCI express  - 5900 / 2300 MB/s

- U.2 - PCI express Gen3  - 3400 / 3100 MB/s

- U.2 - PCI express Gen4 – 7100 / 4200 MB/s

-

- U.3 - PCI express – 5900 / 2300 MB/s

- U.3 - PCI express Gen4 – 7000 / 7000 MB/s

- PCI express Gen3 / Gen4 /Gen5

- SCSI – SRV - zastaralé

#### **_Dělení dle formátu:_**

- 2,5“

- 3,5“

- AIC

- mSATA

- M.2 – 2242, 2260, 2280 a 22110

#### **_Dělení dle kapacity - plotnové:_**

- **500 GB** – pro OS a programy

- 750 GB

- **1 TB**

- 2 TB – pro data, první záloha

- 3 TB

- 4 TB … 22 TB (Seagate Exos X22 22TB – 9.1.2024)

#### **_Dělení dle kapacity - SSD:_**

- 500 GB – pro OS

- 1T … 7.68TB - pro data, první záloha (WD UltraStar DC SS300 VRI, 2,5" – 7,68TB – 9.1.2024)

#### **_Dělení dle rychlosti otáčení ploten:_**

- 5400 - PC

- 5900

- 7200 - PC

- 10000 - SRV

- 10500

- 15000

**_Úkol :_** Najdete HDD s 15tis. otáčkami.

**_Otázka:_** Pro jaké zařízení je určen nalezený HDD?

#### **_Dělení dle umístění:_**

- PC

- NTB

- SRV

- NAS

## **Další technologie u disků:**

**CHS** - Cylinder-Head-Sector, česky stopa-hlava-sektor nebo válec-povrch-výseč

**LBA** - Logical Block Addressing (LBA)  - logické bloky s daty se číslují lineárně (postupně) od 0 (nuly). Jeden logický blok má

- HDD 512 bajtů,

- SSD 1024 bajtů

- CD/DVD/BR 2048 bajtů

((obrázek vynechán))

A – plotny disků

B a C – čtecí/zapisovací hlavy

D – Stopa

E - blok

F – sektor

##### Příklad 1:

U LBA je délka adresy **28 bitů** , je tedy možné adresovat až **2**<sup>**28**</sup> **sektorů** , což při velikosti logického bloku **512 bajtů** znamená maximální kapacitu disku **128 GiB** .

##### Příklad 2:

U standardu ATA (konkrétně ATAPI-6, resp. ATA 100), který zavádí **48bitovou** LBA adresu, takže je možné adresovat až **128 PiB** (128 miliónů GB pro logické bloky velikosti 512 bajtů).

**NCQ** - Native Command Queuing, česky přirozené řazení příkazů.

((obrázek vynechán))

##### _Najděte význam:_

**MBR** – Master Boot Record - hlavní spouštěcí záznam, obsahuje zavaděč, tabulku rozdělení disku, číselný identifikátor disku,  je vždy uložen na samém počátku disku (podle Cylindr-Hlava-Sektor = 0-0-1, podle LBA v sektoru 0) a skládá se ze 2 hlavních částí

- podporuje maximálně 2TB

- a  maximálně 4 primární oddíly.

Skládá se ze dvou hlavních částí:

- Hlavní tabulka rozdělení disku (MPT)

- Hlavní spouštěcí kód – kód zavaděče

**GPT** – GUID Partition Table - Nahrazuje starší MBR. Je součástí standardu UEFI,

- podporuje maximálně 256TB

- a maximálně 128 primárních oddílů - Microsoft – 128 z toho 4 vyhrazené

- velikost GPT je na disku s 512 B sektory 34×512 B = 16 KiB (první oddíl začíná na LBA 34)

- teoretická maximální velikost oddílu 9,4×10<sup>21</sup> bytů = 9,4 ZB = 8 ZiB, má-li LBA sektory 512 kB - tuto velikost obvykle neumí využít OS, například Microsoft podporuje maximální velikost 18 EB

Mrkněte na: Jak převést GPT disk na MBR disk nebo opačně -

Rozdíl mezi BIOS a UEFI např. na http://www.servispckupka.cz/rozdil-mezi-bios-a-uefi.php

**Diskové oddíly** – partition – slouží k rozdělení fyzického disku na oddíly (fyzické nebo logické), se kterými je možné nezávisle manipulovat. Laicky řečeno, po rozdělení pevného disku se pak tento z pohledu souborů jeví jako několik samostatných disků, které mohou být různě naformátovány (tj. mít odlišnou logickou strukturu) a dokonce mohou obsahovat i různé operační systémy.

**LVM** - Logical Volume Management - správa logických disků, metoda správy diskového prostoru, která poskytuje mnohem větší variabilitu než konvenční způsob dělení pevných disků na diskové oddíly. Umožňuje spojovat více pevných disků nebo diskových oddílů do větších logických celků a s nimi dále pracovat, tj. vytvářet na nich oddíly se souborovými systémy a využívat jejich organizace k získání dalších vlastností (přesuny dat mezi fyzickými zařízeními bez narušení jejich dostupnosti nebo podobné vlastnosti, jako mají pole RAID).

##### _Nevýhody LVM_

1. Díky míře abstrakce, kterou sebou přináší řízení logických disků, mohou při použití LVM nastat komplikace buď při najíždění systému, nebo v případě poškození dat. Řešení takové

situace pak může být ještě komplikovanější, pokud je základní operační systém a nezbytné nástroje k dispozici pouze na tomto LV.

2. LVM má z principu vyšší míru vnitřní (skryté) fragmentace, neboť PE nemusejí být alokovány v souvislých blocích, což značně zpomaluje vstupní a výstupní operace, zvláště když je LVM postaveno na fyzických zařízení, které mají pomalé přejíždění mezi bloky dat (všechny typy konvenčních pevných disků). Projevuje se to zvláště při práci s velkými objemy dat. Rychlost při kopírování dat je pak limitována velikostí PE, což je v případě Linuxu minimálně 4MB.

**RAID** – a typy (0,1,5,…) – Redundant Array of Inexpensive Disks - vícenásobné diskové pole levných disků, nově též independent disks, tj. nezávislých disků) je v informatice metoda zabezpečení dat proti selhání pevného disku. Zabezpečení je realizováno specifickým ukládáním dat na více nezávislých disků, kdy jsou uložená data zachována i při selhání některého z nich.

**S.M.A.R.T.** - Self-Monitoring, Analysis, and Reporting Technology, monitorovací systém pro pevné disky. Firmware sleduje uvnitř pevného disku během provozu různé parametry, které je možné přenést do počítače. Pomocí zjištěných údajů může správce systému včas předvídat selhání disku a uložená data zálohovat. Systém S.M.A.R.T. definuje hlavně způsob komunikace disku s počítačem, takže jednotlivé implementace se u různých výrobců liší.

**ATA** -

**PATA** -

**SATA** -

**Rozdělení disku** – Fdisk, Acronis disk director, PQMagic, Gparted,  …

Zakreslit rozdělení disku podle WIN/ Správa počítače / Správa disků

##### Rozdělení pro jeden OS (např. WIN 10)

((obrázek vynechán))

### **Programy pro práci s oddíly disků (partitions):**

Acronis disk director

##### Fdisk

Gparted (Linux Knoppix)

##### **Program na převod MBR na GPT a opačně – windows: CMD:**

- diskpart

- list disk

- select disk 1

- detail disk

- select volume 3

- delete volume

- select disk 1

- convert mbr

- exit

# **RAID (Redundant Array of Inexpensive Disks)**

- vícenásobné diskové pole levných disků

- metoda zabezpečení dat proti selhání pevného disku

Zabezpečení je realizováno specifickým ukládáním dat na více nezávislých disků, kdy jsou uložená data zachována i při selhání některého z nich. Úroveň zabezpečení se liší podle zvoleného typu RAID, které je označováno čísly – RAID 1.

##### **RAID nenahrazuje zálohování dat!!!**

## **Typy diskových polí RAID**

- hardwarová, kdy veškeré výpočetní funkce přebírá řadič,

- pseudo-hardwarová, kdy řadič funguje pouze jako rozhraní a výpočetní funkce provádí SW,

- a softwarová, kam řadímě typicky linux, dynamické disky, LVM aj.

## **Druhy RAID polí**

Video: https://www.youtube.com/watch?v=11f2G5ryM_g nebo

<u>https://www.youtube.com/watch?v=WnYKuaIMnPY</u>

„Nejčastěji používané druhy řetězení jsou **RAID 1 a RAID 5,** které poskytují dostatečné zabezpečení vůči fyzickému výpadku, ale nejsou příliš výhodné, jelikož vyžadují větší počet fyzických jednotek s žádným či minimálním výkonovým nárůstem,“ [Aleš Wágner - datahelp]

**JBOD a RAID 0 -** nepatří mezi skutečné fyzické zálohování; řetězení disků. Nevýhoda: v případě fyzického výpadku jednoho či více disků jsou data **_částečně nebo úplně ztracena_** .

### **JBOD**

- Just a Bunch of Disks  - jde jen o spojení více disků do jednoho svazku (minimálně 2 disky). Používá se u malých síťových disků jako snadná forma rozšíření kapacity. Data jsou ukládána na disk první, dokud nedojde kapacita, pak se pokračuje zápisem na další disk.

_Výhoda_ : snadné vytvoření pole, rozšíření,

_Nevýhoda_ : žádný výkonnostní zisk, v případě selhání jednoho z disků, lze obnovit data jen z toho nepoškozeného.

((obrázek vynechán))

### **RAID 0**

- druhý typ neredundantního pole, data mezi dvěma a více disky prokládány bit po bitu (ABAB). (minimálně 2 disky)

_Výhoda_ : zisk ve čtení i zápisu, při dvou discích je čas redukován na polovinu, zvýšení kapacity

_Nevýhoda_ : v případě selhání jednoho z disků jsou veškerá data ztracena

((obrázek vynechán))

### **RAID 1**

- nejčastěji používaný typ, Pole je tvořeno 2 disky, mezi kterými se veškeré data zrcadlí. Co je uloženo na disku A je zároveň uloženo i na disku B. (minimálně 2 disky – identické).

Slouží jen jako **záloha proti fyzickému výpadku disku** , nikoliv proti náhodnému smazání dat. _Výhoda_ : při selhání jednoho z disků jsou veškerá data uložena na tom druhém

_Nevýhoda_ : nákladnost pořizování pole a nulový nárůst výkonu či kapacity.

((obrázek vynechán))

### **RAID 5**

**-** (minimálně 3 disky – identické), použití v data centrech. První dva disky jsou propojeny a data jsou prokládány mezi disky, třetí disk obsahuje samoopravovací kód.

_Výhoda_ : dvojnásobná rychlost čtení, při výpadku jednoho z disků a jeho výměně, se data automaticky na něj nahrají

_Nevýhoda_ : nižší rychlost zápisu, redukovaná kapacita disků na 2/3.

RAID 5

((obrázek vynechán))

### **RAID 6**

**-** (minimálně 4 disky – identické) – obdoba RAID 5,  liší se však výpočtem samoopravných kódů. Skládá se minimálně ze čtyř disků. Na dvou discích se zapisují data a na dalších dvou jsou uloženy samoopravné kódy, přičemž každý se vypočítává jiným způsobem. Díky tomu je pole RAID 6 odolné proti selhání dvou disků najednou. Existuje také možnost, že by byly paritní informace rozloženy na všech čtyřech discích, ale tato konfigurace se příliš často nepoužívá.

_Výhoda_ : odolnost proti selhání 2 disků ze 4, nejvíce vyplatí použít s pěti disky a více

_Nevýhoda_ : pomalejší zápis, horší poměr ceny a kapacity

RAID 6

((obrázek vynechán))

## **Víceúrovňová pole**

RAID 10  a 01

((obrázek vynechán))

RAID 50

((obrázek vynechán))

RAID 60

((obrázek vynechán))

### **Méně užívaná RAID pole**

RAID 2, RAID 3, RAID 4, RAID 7

Pro domácnosti je nejlepší možnost využívat dvě malé RAID pole, přičemž jedno je aktivně využíváno a další data jsou uložena na externím disku, který není trvale připojen k počítači a je chráněný před smazáním.

## **Úkol:**

Jak se nastavují RAID 0,1 prakticky?

# **Čištění disků (Windows) a registrů Windows**

||Linux Mint|MS Windows|
|---|---|---|
|Čištění disku|- na vůli uživatele,<br>- sudo apt-get autoremove<br>- sudo du -sh /var/cache/apt<br>- sudo apt-get autoclean<br>- sudo apt-get clean<br>- du -sh ~/.cache/thumbnails<br>- rm -rf ~/.cache/thumbnails/*<br>- sudo apt-get install gtkorphan<br>nebo<br>- sudo apt-get install Deborphan|Vyčištění disku (program<br>Windows)<br>Wise Disk Cleaner (WDC), CC<br>Cleaner (externí prog.)|
|Defragmentace<br>disku|- do 80% kapacity nevzniká|Optimalizovat a defragmetovat<br>jednotku|
||-|Defraggler / WDC /|
|Čištění registrů|- konfigurační soubory|Vlastní program Windows**NEMÁ**<br>Wise registry cleaner (WRC)  / CC<br>Cleaner /|

# **Citace**

<u>http://www.servispckupka.cz/jak-opravit-bootloader-mbr-gpt-windows.php http://www.servispckupka.cz/jak_prevest_GPT_disk_na_MBR_disk.php</u>

Wikipedie: Otevřená encyklopedie: Diskový oddíl [online]. c2019 [citováno 9. 12. 2020]. Dostupný z WWW: <https://cs.wikipedia.org/w/index.php? <u>title=Diskov%C3%BD_odd%C3%ADl&oldid=17226549></u>

Wikipedie: Otevřená encyklopedie: Logical Volume Management [online]. c2020 [citováno 9. 12. 2020]. Dostupný z WWW: https://cs.wikipedia.org/w/index.php? <u>title=Logical_Volume_Management&oldid=18130056</u>

Wikipedie: Otevřená encyklopedie: RAID [online]. c2020 [citováno 9. 12. 2020]. Dostupný z WWW: <https://cs.wikipedia.org/w/index.php?title=RAID&oldid=18931503>

<u>https://www.wisecleaner.com/wise-disk-cleaner.html</u>

<u>https://www.wisecleaner.com/wise-registry-cleaner.html</u>

<u>https://www.ccleaner.com/defraggler</u>

<u>https://www.ccleaner.com/ccleaner</u>

Wikipedie: Otevřená encyklopedie: GUID Partition Table [online]. c2018 [citováno 15. 12. 2020]. Dostupný z WWW: <https://cs.wikipedia.org/w/index.php? <u>title=GUID_Partition_Table&oldid=16355493></u>

Wikipedie: Otevřená encyklopedie: Master boot record [online]. c2020 [citováno 15. 12. 2020]. Dostupný z WWW: <https://cs.wikipedia.org/w/index.php? <u>title=Master_boot_record&oldid=18617705></u>

<u>https://www.datahelp.cz/clanky/co-to-vlastne-je-raid-a-jake-je-jeho-uziti</u>

<u>https://www.alza.cz/raid-diskova-pole</u>

<u>https://cs.wikipedia.org/wiki/RAID</u>

<u>https://blog.desdelinux.net/cs/como-recuperar-espacio-en-disco-en-linux/</u>

