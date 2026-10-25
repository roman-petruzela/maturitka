---
title: "Souborové systémy"
order: 28
---

**Souborový systém** (file system) určuje, jak jsou data na disku uložená a uspořádaná: jak se soubory jmenují, kde na disku leží jejich části, jaká mají práva a časové údaje a jak se hledá volné místo. Oddíl disku se před použitím **naformátuje** — vytvoří se na něm prázdná struktura daného souborového systému. Základní srovnání FAT32 a NTFS je i na stránce [Operační systémy](/it/operacni-systemy/07-operacni-systemy/).

## Základní pojmy

- **Sektor** — nejmenší fyzická jednotka disku (512 B nebo 4 KiB).
- **Cluster (alokační jednotka, blok)** — nejmenší část disku, kterou souborový systém přidělí souboru (např. 4 KiB). I soubor o velikosti 1 B zabere celý cluster; větší cluster = méně režie, ale víc nevyužitého místa u malých souborů.
- **Metadata** — údaje o souboru: jméno, velikost, čas vytvoření a změny, vlastník, práva, kde leží jeho data.
- **Adresářová struktura** — stromová hierarchie složek; ve Windows začíná písmenem jednotky (`C:\`), v Linuxu jediným kořenem `/`, do kterého se další disky **připojují** (mount).
- **Žurnálování** (journaling) — souborový systém si před změnou zapíše do žurnálu, co se chystá udělat. Při výpadku napájení se podle žurnálu dokončí nebo vrátí rozdělaná operace, takže se struktura disku nepoškodí a kontrola po restartu trvá sekundy místo hodin.
- **Fragmentace** — soubor je uložen v několika nesouvislých částech; na HDD zpomaluje čtení (řeší ji defragmentace), na SSD nevadí a defragmentace se nedělá.

## Přehled souborových systémů

| Souborový systém | OS | Max. velikost souboru | Žurnál | Typické použití |
| --- | --- | --- | --- | --- |
| **FAT32** | všechny | 4 GiB | ne | USB flash disky, paměťové karty, kompatibilita se staršími zařízeními |
| **exFAT** | Windows, macOS, Linux | prakticky neomezená | ne | velké USB disky a SDXC karty, výměna dat mezi systémy |
| **NTFS** | Windows | prakticky neomezená | ano | systémový a datový disk ve Windows |
| **ReFS** | Windows Server | prakticky neomezená | — (vlastní ochrana integrity) | velká datová úložiště na serverech |
| **ext4** | Linux | 16 TiB | ano | výchozí souborový systém většiny linuxových distribucí |
| **Btrfs** | Linux | velmi velká | copy-on-write | snapshoty, kontrolní součty dat (např. Fedora, openSUSE) |
| **XFS** | Linux | velmi velká | ano | servery s velkými soubory (výchozí v Red Hat Enterprise Linux) |
| **APFS** | macOS, iOS | velmi velká | copy-on-write | Apple zařízení, optimalizovaný pro SSD |
| **ISO 9660 / UDF** | všechny | — | — | optické disky (CD, DVD, Blu-ray) |

## FAT32 a exFAT

**FAT** (File Allocation Table) je nejstarší a nejjednodušší souborový systém z tabulky: v **tabulce FAT** je pro každý cluster uloženo, který cluster souboru následuje. FAT32 umí každý operační systém i televize, fotoaparát nebo autorádio — proto se dodnes používá na flash discích. Nevýhody: **soubor nejvýše 4 GiB**, žádná práva k souborům, žádný žurnál.

**exFAT** je nástupce FAT pro přenosná média: odstraňuje limit 4 GiB, ale zůstává jednoduchý a nepodporuje práva ani žurnál.

## NTFS

**NTFS** (New Technology File System) je souborový systém Windows. Všechny informace o souborech jsou v **hlavní tabulce souborů MFT** (Master File Table). Umí:

- **přístupová práva** (ACL — kdo smí soubor číst, měnit, spouštět),
- **žurnálování**,
- **kompresi** a **šifrování** souborů (EFS) a šifrování celého disku (BitLocker),
- **diskové kvóty** (omezení místa pro uživatele),
- **stínové kopie** (předchozí verze souborů),
- **pevné a symbolické odkazy**.

Viz i [stínové kopie, pevné odkazy a kvóty](/it/operacni-systemy/18-stinove-kopie-svazku-pevne-odkazy-diskove-kvoty/) a [uživatelská práva](/it/operacni-systemy/13-uzivatelska-prava-a-opravneni/).

## ext4 a další linuxové systémy

**ext4** (fourth extended file system) je výchozí systém většiny distribucí. Používá **inody** — každý soubor má svůj inode s metadaty (práva, vlastník, časy, odkazy na bloky dat), jméno souboru je jen položka v adresáři ukazující na inode. Má žurnál, práva v podobě vlastník / skupina / ostatní (`rwx`) a umí velké disky.

**Btrfs** a **ZFS** jsou moderní systémy typu **copy-on-write**: změněná data se nepřepisují na místě, ale zapíšou se jinam — díky tomu jsou levné **snapshoty** (okamžité kopie stavu), kontrolní součty dat a vestavěná správa více disků.

Formátování v Linuxu: `mkfs -t ext4 /dev/sdb1`, připojení: `mount /dev/sdb1 /mnt/data`, trvalé připojení v souboru `/etc/fstab` — viz [práce s disky](/it/operacni-systemy/15-prace-s-disky/).

## Jak vybrat

- **Systémový disk** — ten, který vyžaduje OS: Windows → NTFS, Linux → ext4 (případně Btrfs, XFS), macOS → APFS.
- **USB flash disk pro všechny počítače** — exFAT (nebo FAT32, pokud nebudou soubory větší než 4 GiB a zařízení exFAT neumí).
- **Server s velkými daty** — NTFS nebo ReFS (Windows), XFS, ext4 nebo ZFS (Linux).
- **Sdílení po síti** — na souborovém systému serveru nezáleží, klienti přistupují přes síťový protokol (SMB, NFS) — viz [Samba](/it/operacni-systemy/51-samba-sdileni-souboru-mezi-linuxem-a-windows/).
