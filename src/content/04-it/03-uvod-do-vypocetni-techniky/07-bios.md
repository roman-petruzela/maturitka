---
title: "BIOS"
order: 7
source: "uvt/BIOS.pdf"
---

**BIOS** (Basic Input-Output System) = **firmware** počítače se základními V/V funkcemi. Spustí se po zapnutí jako první: otestuje a inicializuje hardware a zavede operační systém. Je uložen v **ROM**, **EEPROM**, nebo dnes ve **flash paměti** (snadná aktualizace, ale přerušený zápis může desku vyřadit z provozu).

**Nastavení** (pořadí disků, čas, zařízení) je zvlášť v paměti **CMOS** napájené **baterií** na desce (CR2032), z níž běží i hodiny. Ztráta nastavení nebo stejný čas po každém zapnutí = **vybitá baterie**. Výchozí hodnoty vrátí propojka **Clear CMOS** nebo vyjmutí baterie.

## Co BIOS dělá po zapnutí

![Start počítače: zapnutí, načtení nastavení z CMOS, POST, inicializace zařízení, hledání zavaděče podle bootovací sekvence a start operačního systému](/images/content/it/uvod-do-vypocetni-techniky/bios/boot.webp)

1. Načte **konfiguraci** z paměti CMOS.
2. **POST** (Power-On Self-Test) – autotest procesoru, paměti, grafiky, klávesnice. Chyba = zpráva, a když nejde obraz, **pípání**.
3. **Inicializuje** zařízení (disky, USB, karty).
4. Podle **bootovací sekvence** najde zařízení se zavaděčem (boot loader) a předá mu řízení.

## Vstup do BIOSu (Setup)

Klávesa hned po zapnutí: **Delete** nebo **F2**; **boot menu** (jednorázová volba, odkud startovat) **F12**. Z Windows: *Nastavení → Obnovení → Spuštění s upřesněným nastavením*.

| Nabídka | Co obsahuje |
| --- | --- |
| **Main** | datum a čas, verze BIOSu, procesor a paměť |
| **Advanced** | procesor (virtualizace), režim SATA (AHCI / RAID), USB |
| **Boot** | bootovací sekvence, Secure Boot, režim UEFI / Legacy |
| **Power** | správa napájení, **Wake on LAN** |
| **Monitor** | teploty, otáčky ventilátorů, napětí |
| **Security** | hesla, TPM |

- **Virtualizace:** pro VirtualBox a Hyper-V musí být zapnuté **Intel VT-x** nebo **AMD-V**.
- **Wake on LAN** – zapnutí počítače po síti (karta zůstává napájená a probudí ho *magic packet*).

## Flashování BIOSu

Aktualizace BIOSu (opravy, nové procesory) se dělá z USB flash disku (nástroj přímo v BIOSu) nebo programem výrobce ve Windows. **Nesmí se přerušit napájení**. Ochrana: **DualBIOS** (záložní čip opraví primární) a **BIOS Flashback** (nahrání z USB tlačítkem na desce).

## ACPI

**ACPI** (Advanced Configuration and Power Interface) = standard spolupráce firmwaru a OS při detekci hardwaru a **řízení spotřeby**: S3 spánek do RAM, S4 hibernace na disk, S5 vypnuto; zahrnuje i řízení teploty a hot swap.

## UEFI

Nástupce BIOSu: **UEFI** (Unified Extensible Firmware Interface) = rozhraní mezi OS a firmwarem. Počítače po roce 2012 ho mají, „BIOS“ se říká dál.

| | BIOS (Legacy) | UEFI |
| --- | --- | --- |
| rozdělení disku | MBR – nejvýše 2 TiB a 4 primární oddíly | **GPT** – obrovské disky, až 128 oddílů |
| zavaděč OS | prvních 512 B disku (MBR) | soubor na oddílu **EFI System Partition** (FAT32) |
| procesor | 16bitový režim | 32/64bitový |
| rozhraní | textové | i grafické s myší |
| zabezpečení | – | **Secure Boot** – spustí jen podepsaný zavaděč |
| start | pomalejší | rychlejší (Fast Boot) |

Pro staré systémy slouží režim **CSM**. Windows 11 vyžaduje UEFI se Secure Bootem a **TPM 2.0**.

## Otázky k opakování

1. K čemu slouží BIOS a kde je uložen? ||základní V/V funkce, test hardwaru a zavedení OS; ROM, EEPROM nebo flash||
2. Co se děje po zapnutí počítače? ||načtení konfigurace z CMOS, POST, inicializace zařízení, hledání zavaděče podle bootovací sekvence||
3. Co se stalo, když BIOS po každém zapnutí ukazuje stejný čas? ||vybila se baterie CMOS||
4. Co musíte v BIOSu zapnout, aby běžel virtualizovaný OS ve VirtualBoxu? ||virtualizaci procesoru (Intel VT-x, AMD-V)||
5. Co je ACPI a UEFI? ||ACPI – standard správy hardwaru a napájení; UEFI – nástupce BIOSu s GPT, grafickým rozhraním a Secure Bootem||
6. Co je Wake on LAN? ||zapnutí počítače po síti pomocí magic packetu||
