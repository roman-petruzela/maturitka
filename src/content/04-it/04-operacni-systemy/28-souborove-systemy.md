---
title: "Souborové systémy"
order: 28
---

**Souborový systém** (file system) určuje, jak jsou data na disku uložená a uspořádaná: názvy souborů, umístění jejich částí, práva, časové údaje a hledání volného místa. Oddíl disku se před použitím **naformátuje**. Srovnání FAT32 a NTFS je i na stránce [Operační systémy](/it/operacni-systemy/07-operacni-systemy/).

## Základní pojmy

- **Sektor** – nejmenší fyzická jednotka disku (512 B nebo 4 KiB).
- **Cluster (alokační jednotka)** – nejmenší část disku, kterou souborový systém přidělí souboru (např. 4 KiB). Větší cluster = méně režie, ale víc nevyužitého místa u malých souborů.
- **Metadata** – jméno, velikost, časy, vlastník, práva, umístění dat.
- **Adresářová struktura** – ve Windows začíná písmenem jednotky (`C:\`), v Linuxu jediným kořenem `/`, do kterého se další disky **připojují** (mount).
- **Žurnálování** – před změnou se do žurnálu zapíše, co se chystá; po výpadku napájení se rozdělaná operace dokončí nebo vrátí, takže se struktura nepoškodí.
- **Fragmentace** – soubor je uložen v nesouvislých částech; zpomaluje HDD (defragmentace), na SSD nevadí.

## Přehled souborových systémů

| Systém | OS | Max. soubor | Žurnál | Použití |
| --- | --- | --- | --- | --- |
| **FAT32** | všechny | 4 GiB | ne | USB flash disky, karty |
| **exFAT** | Windows, macOS, Linux | prakticky neomezená | ne | velké USB disky, výměna dat |
| **NTFS** | Windows | prakticky neomezená | ano | systémový a datový disk Windows |
| **ReFS** | Windows Server | prakticky neomezená | vlastní ochrana | velká úložiště na serverech |
| **ext4** | Linux | 16 TiB | ano | výchozí systém většiny distribucí |
| **Btrfs**, **XFS** | Linux | velmi velká | copy-on-write / ano | snapshoty / servery |
| **APFS** | macOS, iOS | velmi velká | copy-on-write | zařízení Apple, SSD |
| **ISO 9660 / UDF** | všechny | – | – | optické disky |

## FAT32 a exFAT

**FAT** (File Allocation Table) – v **tabulce FAT** je pro každý cluster uloženo, který cluster souboru následuje. FAT32 umí každý systém i televize a fotoaparáty. Nevýhody: **soubor max. 4 GiB**, žádná práva, žádný žurnál. **exFAT** je nástupce pro přenosná média bez limitu 4 GiB, ale také bez práv a žurnálu.

## NTFS

**NTFS** (New Technology File System) je souborový systém Windows; informace o souborech drží v **hlavní tabulce souborů MFT**. Umí **přístupová práva** (ACL), **žurnálování**, **kompresi**, **šifrování** (EFS, BitLocker), **diskové kvóty**, **stínové kopie** a **pevné a symbolické odkazy**. Viz [stínové kopie, odkazy a kvóty](/it/operacni-systemy/18-stinove-kopie-svazku-pevne-odkazy-diskove-kvoty/) a [uživatelská práva](/it/operacni-systemy/13-uzivatelska-prava-a-opravneni/).

## ext4 a další linuxové systémy

**ext4** je výchozí systém většiny distribucí. Každý soubor má **inode** s metadaty (práva, vlastník, časy, odkazy na bloky dat), jméno je jen položka v adresáři ukazující na inode. Má žurnál a práva vlastník / skupina / ostatní (`rwx`).

**Btrfs** a **ZFS** jsou typu **copy-on-write**: změněná data se zapíšou jinam, díky čemuž jsou levné **snapshoty** a kontrolní součty dat.

Formátování: `mkfs -t ext4 /dev/sdb1`, připojení `mount /dev/sdb1 /mnt/data`, trvale v `/etc/fstab` – viz [práce s disky](/it/operacni-systemy/15-prace-s-disky/).

## Jak vybrat

- **Systémový disk:** Windows → NTFS, Linux → ext4, macOS → APFS.
- **USB flash disk pro všechny počítače:** exFAT (FAT32, pokud nejsou soubory větší než 4 GiB).
- **Server s velkými daty:** NTFS nebo ReFS, XFS, ext4 nebo ZFS.

## Otázky k opakování

1. Co je souborový systém a co je cluster? ||způsob uložení a uspořádání dat na disku; nejmenší část disku přidělená souboru||
2. Co je žurnálování? ||zápis plánované změny do žurnálu, aby se po výpadku napájení nepoškodila struktura disku||
3. Porovnejte FAT32 a NTFS. ||FAT32 – soubor max. 4 GiB, bez práv a žurnálu, kompatibilní; NTFS – práva, žurnál, šifrování, komprese, kvóty||
4. Co je inode? ||struktura v ext4 s metadaty souboru; jméno v adresáři na ni jen ukazuje||
5. Který systém zvolíte pro USB disk s velkými soubory? ||exFAT||
