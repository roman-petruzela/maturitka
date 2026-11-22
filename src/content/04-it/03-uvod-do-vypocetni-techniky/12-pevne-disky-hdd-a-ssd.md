---
title: "Pevné disky HDD a SSD"
order: 12
source: "uvt/cv18-19_HDD_SSD.pdf"
---

Paměti obecně: [Paměti](/it/uvod-do-vypocetni-techniky/04-pameti/); RAID podrobně: [RAID](/it/operacni-systemy/17-raid/).

![HDD s plotnami a hlavou na raménku vedle SSD M.2 s řadičem a čipy NAND](/images/content/it/uvod-do-vypocetni-techniky/pameti/hdd-ssd.webp)

## Dělení disků

**Podle technologie:** **HDD** (magnetické plotny a hlavy), **SSD** (flash paměť NAND + řadič, bez mechaniky), **SSHD** (HDD s malou flash cache).

| | HDD | SSD |
| --- | --- | --- |
| přístupová doba | ms | µs |
| rychlost | ~100–250 MB/s | SATA ~550 MB/s, NVMe 3–14 GB/s |
| odolnost, hluk | citlivý na otřesy, slyšet | odolný, tichý |
| cena za GB | nízká | vyšší |
| životnost | mechanické opotřebení | omezený počet zápisů (**TBW**) |
| použití | velká data, zálohy | systém, programy |

**Podle rozhraní:**

- **PATA** (IDE) – paralelní, 40pinový plochý kabel, max. 133 MB/s; zastaralé.
- **SATA** – sériové, III = **6 Gb/s** (~600 MB/s); **eSATA** je externí.
- **SAS** – sériové SCSI pro servery, 12–24 Gb/s.
- **M.2** – slot pro SSD; SATA (~550 MB/s) nebo **NVMe** přes PCIe ×4 (Gen3 ~3 400, Gen4 ~7 000, Gen5 ~12 000 MB/s).
- **USB** – externí disky.

**NVMe** = protokol pro SSD přes PCIe (místo AHCI), víc front a nižší latence.

| USB | Rychlost | Poznámka |
| --- | --- | --- |
| 2.0 | 480 Mb/s | nejrozšířenější |
| 3.0 (3.2 Gen 1) | 5 Gb/s | modrý konektor |
| 3.2 Gen 2 | 10 Gb/s | |
| 3.2 Gen 2×2 | 20 Gb/s | jen konektor C |
| USB4 | 40 Gb/s | jen konektor C |

**Podle formátu:** **3,5″** (desktop, NAS), **2,5″** (notebooky), **M.2** (nejčastěji 2280). **Podle otáček ploten:** 5 400 (notebooky), **7 200** (desktop), 10 000 a 15 000 (servery, SAS).

## Adresace a struktura disku

**CHS** (válec–hlava–sektor) je stará adresace podle geometrie; **LBA** číslují bloky lineárně od 0. Velikost bloku: HDD 512 B (dnes i 4 KiB), SSD 4 KiB, CD/DVD 2 048 B.

<img src="/images/content/it/uvod-do-vypocetni-techniky/pevne-disky-hdd-a-ssd/01.webp" alt="Plotny, hlavy, stopa, blok a sektor pevného disku" width="201" loading="lazy" decoding="async">

A – plotny · B, C – hlavy · D – stopa · E – blok · F – sektor

```formulas
{ "items": [ { "label": "max. kapacita disku", "tex": "C = 2^{\\text{bitů adresy}} \\cdot \\text{velikost bloku}" } ] }
```

**Příklad:** 28bitová LBA → $2^{28}$ sektorů × 512 B = **128 GiB**; 48bitová LBA → $2^{48}$ × 512 B = **128 PiB**.

**NCQ** – disk si požadavky přeřadí tak, aby hlava jela co nejkratší cestou. **S.M.A.R.T.** – firmware sleduje parametry (vadné sektory, teplota, hodiny provozu) a předpoví selhání.

### Diskové oddíly: MBR a GPT

**Oddíly** (partitions) rozdělují fyzický disk na části, které se tváří jako samostatné disky; každá může mít jiný souborový systém.

| | MBR | GPT |
| --- | --- | --- |
| umístění | první sektor disku (zavaděč + tabulka oddílů) | součást UEFI, záložní kopie na konci disku |
| max. disk | **2 TiB** | prakticky bez limitu |
| oddíly | max. **4 primární** (nebo 3 + rozšířený) | až **128** |

Rozdíl BIOS/UEFI viz [BIOS](/it/uvod-do-vypocetni-techniky/07-bios/#uefi). Oddíly se spravují nástroji `fdisk`, GParted, ve Windows *Správa disků* (převod MBR ↔ GPT `diskpart` → `convert`, **smaže data**).

**LVM** (Logical Volume Management) spojí více disků do skupiny a tvoří z ní logické svazky, které lze za běhu zvětšovat.

<img src="/images/content/it/uvod-do-vypocetni-techniky/pevne-disky-hdd-a-ssd/03.webp" alt="Rozdělení disku pro jeden OS, pro více OS a s LVM" width="746" loading="lazy" decoding="async">

## RAID

**RAID** (Redundant Array of Independent Disks) = data na více discích tak, aby přežila selhání disku. Realizace: **hardwarová** (řadič), **pseudo-hardwarová** (fake RAID, počítá ovladač), **softwarová** (OS – `mdadm`, dynamické disky Windows).

**RAID nenahrazuje zálohování** – nechrání proti smazání, viru, ransomwaru ani požáru.

| Úroveň | Princip | Min. disků | Kapacita | Odolnost |
| --- | --- | --- | --- | --- |
| **JBOD** | disky spojené za sebou | 2 | součet | žádná |
| **RAID 0** | prokládání (striping), rychlé | 2 | součet | žádná – jeden disk = ztráta všeho |
| **RAID 1** | zrcadlení (mirroring) | 2 | polovina | přežije 1 disk |
| **RAID 5** | prokládání + rozložená parita | 3 | $(n-1)$ disků | přežije 1 disk |
| **RAID 6** | dvojí parita | 4 | $(n-2)$ disků | přežije 2 disky |
| **RAID 10** | zrcadla prokládaná | 4 | polovina | 1 disk v každém zrcadle |

<img src="/images/content/it/uvod-do-vypocetni-techniky/pevne-disky-hdd-a-ssd/05.webp" alt="Schéma RAID 0" width="114" loading="lazy" decoding="async">
<img src="/images/content/it/uvod-do-vypocetni-techniky/pevne-disky-hdd-a-ssd/06.webp" alt="Schéma RAID 1" width="114" loading="lazy" decoding="async">
<img src="/images/content/it/uvod-do-vypocetni-techniky/pevne-disky-hdd-a-ssd/07.webp" alt="Schéma RAID 5" width="231" loading="lazy" decoding="async">

Nejčastější jsou **RAID 1 a RAID 5**. Doma stačí RAID 1 pro provoz + externí disk se zálohou, který není trvale připojen.

## Otázky k opakování

1. Porovnejte HDD a SSD. ||HDD má mechanické plotny, je levnější na GB, pomalejší a citlivý na otřesy; SSD je rychlé, tiché a odolné, ale dražší a s omezeným počtem zápisů||
2. Jaké rozhraní používá SSD M.2? ||SATA nebo PCIe (NVMe)||
3. Čím se liší MBR a GPT? ||MBR: max. 2 TiB a 4 primární oddíly; GPT: prakticky neomezený disk a až 128 oddílů, součást UEFI||
4. Jaká je kapacita disku s 28bitovou LBA a 512B sektory? ||$2^{28} \cdot 512$ B = 128 GiB||
5. Popište RAID 0, 1 a 5. ||0 – prokládání, rychlé, bez ochrany; 1 – zrcadlení, přežije 1 disk, poloviční kapacita; 5 – parita rozložená po discích, min. 3 disky, přežije 1 disk||
6. Proč RAID nenahrazuje zálohování? ||chrání jen před výpadkem disku, ne před smazáním, virem nebo požárem||
