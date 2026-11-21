---
title: "Pevné disky HDD a SSD"
order: 12
source: "uvt/cv18-19_HDD_SSD.pdf"
---
Paměti obecně: [Paměti](/it/uvod-do-vypocetni-techniky/04-pameti/); RAID podrobně: [RAID](/it/operacni-systemy/17-raid/).

![HDD s plotnami a hlavou na raménku vedle SSD M.2 s řadičem a čipy NAND](/images/content/it/uvod-do-vypocetni-techniky/pameti/hdd-ssd.webp)

## Dělení disků

### Dělení dle technologie

- **HDD** (Hard Disk Drive) – magnetické plotny a hlavy
- **SSD** (Solid State Drive) – flash paměť (NAND) + řadič, bez mechaniky
- **SSHD** (hybridní) – HDD s malou flash cache

| | HDD | SSD |
| --- | --- | --- |
| přístupová doba | ms | µs |
| rychlost | ~100–250 MB/s | SATA ~550 MB/s, NVMe 3–14 GB/s |
| odolnost, hluk | citlivý na otřesy, slyšet | odolný, tichý |
| cena za GB | nízká | vyšší |
| životnost | mechanické opotřebení | omezený počet zápisů (**TBW**) |
| použití | velká data, zálohy | systém, programy |

### Dělení dle rozhraní

- **PATA** (IDE) – paralelní, 40pinový plochý kabel, max. 133 MB/s; zastaralé
- **SATA** – sériové: I 1,5 Gb/s, II 3 Gb/s, **III 6 Gb/s** (~600 MB/s)
- **eSATA** – externí SATA
- **SAS** – sériové SCSI pro servery, 12–24 Gb/s, duální port
- **NL-SAS** – SATA mechanika se SAS rozhraním (levná serverová kapacita)
- **USB** – externí disky, viz tabulka
- **M.2** – slot pro SSD:
   - SATA – ~560/530 MB/s
   - PCIe Gen3 ×4 (NVMe) – ~3 400 / 3 100 MB/s
   - PCIe Gen4 ×4 – ~7 450 / 7 000 MB/s
   - PCIe Gen5 ×4 – ~14 500 / 12 000 MB/s
- **U.2 / U.3** – serverové 2,5″ NVMe přes PCIe (Gen3 ~3 400 MB/s, Gen4 ~7 000 MB/s)
- **PCIe karty (AIC)** – SSD přímo ve slotu
- **SCSI** – starší serverové, zastaralé

**NVMe** = protokol pro SSD přes PCIe (místo AHCI) – víc front, nižší latence.

#### Tabulka srovnání USB technologií

| Verze USB | Rychlost | Konektory | Poznámka |
| --- | --- | --- | --- |
| USB 1.1 | 12 Mb/s (Full Speed) | A, B | zastaralé |
| USB 2.0 | 480 Mb/s (Hi-Speed) | A, B, mini, micro | nejrozšířenější, zpětně kompatibilní |
| USB 3.0 = 3.1 Gen 1 = 3.2 Gen 1 | 5 Gb/s | A, B (modré), C | |
| USB 3.1 Gen 2 = 3.2 Gen 2 | 10 Gb/s | A, B, C | |
| USB 3.2 Gen 2×2 | 20 Gb/s | jen C | |
| USB4 | 40 Gb/s (v2 80 Gb/s) | jen C | z Thunderboltu 3 |

### Dělení dle formátu

- **3,5″** – desktop, NAS
- **2,5″** – notebooky, SSD SATA
- **AIC** – karta do PCIe
- **mSATA** – starší malé SSD
- **M.2** – 2242, 2260, **2280**, 22110 (šířka 22 mm × délka)

### Dělení dle kapacity – plotnové

- **500 GB** – systém a programy
- 750 GB
- **1 TB**
- 2 TB – data, první záloha
- 3 TB
- 4 TB … přes 20 TB (serverové)

### Dělení dle kapacity – SSD

- 500 GB – systém
- 1 TB … 8 TB i víc – data

### Dělení dle rychlosti otáčení ploten

- 5 400 ot/min – notebooky, úsporné
- 5 900
- **7 200** – desktop
- 10 000 – servery
- 10 500
- 15 000 – servery (SAS)

**Úkol:** najděte HDD s 15 000 ot/min. Pro jaké zařízení je určen? ||pro servery – SAS disky s nízkou latencí||

### Dělení dle umístění

- PC
- notebook
- server
- NAS (síťové úložiště)

## Další technologie u disků

**CHS** (Cylinder-Head-Sector) – stará adresace podle geometrie: válec-hlava-sektor.

**LBA** (Logical Block Addressing) – bloky číslované lineárně od 0. Velikost bloku:

- HDD 512 B (dnes i 4 KiB)
- SSD 4 KiB a víc
- CD/DVD/BD 2 048 B

<img src="/images/content/it/uvod-do-vypocetni-techniky/pevne-disky-hdd-a-ssd/01.webp" alt="Plotny, hlavy, stopa, blok a sektor pevného disku" width="201" loading="lazy" decoding="async">

A – plotny · B, C – hlavy · D – stopa · E – blok · F – sektor

```formulas
{ "items": [ { "label": "max. kapacita disku", "tex": "C = 2^{\\text{bitů adresy}} \\cdot \\text{velikost bloku}" } ] }
```

**Příklad 1:** 28bitová LBA → $2^{28}$ sektorů × 512 B = **128 GiB**.

**Příklad 2:** 48bitová LBA (ATA-6) → $2^{48}$ × 512 B = **128 PiB**.

**NCQ** (Native Command Queuing) – disk si požadavky přeřadí tak, aby hlava jela co nejkratší cestou.

<img src="/images/content/it/uvod-do-vypocetni-techniky/pevne-disky-hdd-a-ssd/02.webp" alt="Pořadí čtení bez NCQ a s NCQ" width="351" loading="lazy" decoding="async">

**MBR** (Master Boot Record) – první sektor disku (CHS 0-0-1, LBA 0): zavaděč + tabulka oddílů + ID disku.

- max. **2 TiB**
- max. **4 primární oddíly** (nebo 3 + rozšířený)

Části:

- tabulka oddílů (MPT)
- spouštěcí kód (zavaděč)

**GPT** (GUID Partition Table) – nástupce MBR, součást UEFI:

- obrovské disky (prakticky bez limitu; Windows až 18 EB)
- až **128 oddílů**
- zabírá 34 sektorů (16 KiB) + záložní kopie na konci disku

Převod GPT ↔ MBR: diskpart (níže), rozdíl BIOS/UEFI viz [BIOS](/it/uvod-do-vypocetni-techniky/07-bios/#uefi).

**Diskové oddíly** (partitions) – rozdělení fyzického disku na části, které se tváří jako samostatné disky; každá může mít jiný souborový systém i jiný OS.

**LVM** (Logical Volume Management) – pružná správa místa: spojí více disků/oddílů do skupiny a z ní tvoří logické svazky; přesun dat za běhu, zvětšování, vlastnosti podobné RAID.

### Nevýhody LVM

1. Vrstva abstrakce komplikuje start systému a obnovu po poškození dat – hlavně když jsou nástroje pro opravu na tomtéž LV.
2. Vyšší skrytá fragmentace (bloky PE nejdou souvisle) → pomalejší I/O na HDD, hlavně u velkých dat.

**RAID** (Redundant Array of Inexpensive/Independent Disks) – data na více discích tak, aby přežila selhání disku (viz níže).

**S.M.A.R.T.** – firmware disku sleduje parametry (vadné sektory, teplota, hodiny provozu); správce včas předvídá selhání a zálohuje.

**ATA** – standard připojení disků (AT Attachment), obecné označení rodiny.

**PATA** – paralelní ATA (IDE), plochý 40/80žilový kabel, master/slave.

**SATA** – sériová ATA, tenký kabel, 1 disk na port, hot-plug, AHCI.

**Rozdělení disku** – fdisk, GParted, Acronis Disk Director, (PartitionMagic); ve Windows *Správa počítače → Správa disků*.

### Rozdělení pro jeden OS (např. WIN 10)

<img src="/images/content/it/uvod-do-vypocetni-techniky/pevne-disky-hdd-a-ssd/03.webp" alt="Rozdělení disku pro jeden OS, pro více OS a s LVM" width="746" loading="lazy" decoding="async">

### Programy pro práci s oddíly disků (partitions)

- Acronis Disk Director
- fdisk
- GParted (Linux, živé CD)

Převod MBR ↔ GPT ve Windows (CMD, **smaže data**):

```bat
diskpart
list disk
select disk 1
detail disk
select volume 3
delete volume
select disk 1
convert mbr
exit
```

## RAID (Redundant Array of Inexpensive Disks)

- pole více disků
- ochrana dat proti **selhání disku**

Úroveň ochrany podle typu (RAID 0, 1, 5…).

### RAID nenahrazuje zálohování dat!!!

Nechrání proti smazání, viru, ransomwaru, požáru.

### Typy diskových polí RAID

- **hardwarová** – vše počítá řadič,
- **pseudo-hardwarová (fake RAID)** – řadič je jen rozhraní, počítá ovladač,
- **softwarová** – OS (Linux mdadm, dynamické disky Windows, LVM).

### Druhy RAID polí

Nejčastější jsou **RAID 1 a RAID 5** – dobrá ochrana, ale víc disků bez velkého zrychlení.

**JBOD a RAID 0** nejsou ochrana – při výpadku disku jsou data **částečně nebo úplně ztracena**.

#### JBOD

- *Just a Bunch of Disks* – disky spojené za sebou do jednoho svazku (min. 2); plní se postupně. Malé NAS.

*Výhoda:* snadné rozšíření. *Nevýhoda:* žádné zrychlení; při selhání zůstanou jen data na zdravém disku.

<img src="/images/content/it/uvod-do-vypocetni-techniky/pevne-disky-hdd-a-ssd/04.webp" alt="Schéma JBOD" width="173" loading="lazy" decoding="async">

#### RAID 0

- **prokládání (striping)** – data střídavě po blocích na 2+ discích (A B A B).

*Výhoda:* rychlejší čtení i zápis, plná kapacita. *Nevýhoda:* jeden vadný disk = **ztráta všeho**.

<img src="/images/content/it/uvod-do-vypocetni-techniky/pevne-disky-hdd-a-ssd/05.webp" alt="Schéma RAID 0" width="114" loading="lazy" decoding="async">

#### RAID 1

- **zrcadlení (mirroring)** – stejná data na 2 discích.

Chrání jen proti **výpadku disku**, ne proti smazání. *Výhoda:* data přežijí selhání jednoho disku. *Nevýhoda:* poloviční kapacita, bez zrychlení zápisu.

<img src="/images/content/it/uvod-do-vypocetni-techniky/pevne-disky-hdd-a-ssd/06.webp" alt="Schéma RAID 1" width="114" loading="lazy" decoding="async">

#### RAID 5

- min. **3 disky**; data prokládaná + **parita** rozložená po všech discích; datová centra.

*Výhoda:* rychlé čtení, přežije výpadek **1 disku**, po výměně se dopočítá. *Nevýhoda:* pomalejší zápis, kapacita $(n-1)$ disků.

<img src="/images/content/it/uvod-do-vypocetni-techniky/pevne-disky-hdd-a-ssd/07.webp" alt="Schéma RAID 5" width="231" loading="lazy" decoding="async">

#### RAID 6

- min. **4 disky**; jako RAID 5, ale **dvojí parita** (počítaná dvěma způsoby).

*Výhoda:* přežije výpadek **2 disků**; vyplatí se od 5 disků. *Nevýhoda:* pomalejší zápis, kapacita $(n-2)$ disků.

<img src="/images/content/it/uvod-do-vypocetni-techniky/pevne-disky-hdd-a-ssd/08.webp" alt="Schéma RAID 6" width="289" loading="lazy" decoding="async">

### Víceúrovňová pole

RAID 10 (zrcadla prokládaná) a 01 (prokládání zrcadlené)

<img src="/images/content/it/uvod-do-vypocetni-techniky/pevne-disky-hdd-a-ssd/09.webp" alt="Schémata RAID 0+1 a RAID 1+0" width="402" loading="lazy" decoding="async">

RAID 50

<img src="/images/content/it/uvod-do-vypocetni-techniky/pevne-disky-hdd-a-ssd/10.webp" alt="Schéma RAID 5+0" width="263" loading="lazy" decoding="async">

RAID 60

<img src="/images/content/it/uvod-do-vypocetni-techniky/pevne-disky-hdd-a-ssd/11.webp" alt="Schéma RAID 6+0" width="500" loading="lazy" decoding="async">

#### Méně užívaná RAID pole

RAID 2, 3, 4, 7

Doma: RAID 1 pro provoz + externí disk se zálohou, který není trvale připojen.

### Úkol

Jak se nastavují RAID 0 a 1 prakticky? ||v BIOSu/UEFI řadiče (režim RAID), ve Windows *Správa disků* (zrcadlený / prokládaný svazek, Prostory úložiště), v Linuxu `mdadm`||

## Čištění disků (Windows) a registrů Windows

| | Linux Mint | MS Windows |
| --- | --- | --- |
| čištění disku | `sudo apt autoremove`, `sudo apt autoclean`, `sudo apt clean`, `rm -rf ~/.cache/thumbnails/*`; nástroje gtkorphan, deborphan | Vyčištění disku (Windows); Wise Disk Cleaner, CCleaner |
| defragmentace | do ~80 % zaplnění nevzniká | Optimalizovat a defragmentovat jednotku; Defraggler |
| čištění registrů | registry nejsou (konfigurační soubory) | Windows vlastní nástroj **nemá**; Wise Registry Cleaner, CCleaner |
