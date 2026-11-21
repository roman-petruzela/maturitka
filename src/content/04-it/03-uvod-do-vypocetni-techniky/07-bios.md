---
title: "BIOS"
order: 7
source: "uvt/BIOS.pdf"
---
**BIOS** (Basic Input-Output System) = **firmware** počítače se základními V/V funkcemi. Spustí se po zapnutí jako první: otestuje a inicializuje hardware a zavede OS. Každá deska má svou variantu, uloženou v ROM, EEPROM nebo dnes ve flash paměti (snadná aktualizace).

## Kde je BIOS uložen

| Paměť | Výhody | Nevýhody |
| --- | --- | --- |
| **ROM** | obsah nelze poškodit ani přepsat (ani virem) | nelze aktualizovat — oprava chyby znamená výměnu čipu |
| **EEPROM** | lze elektricky smazat a znovu naprogramovat přímo na desce | pomalý zápis, malá kapacita, maže se po bajtech |
| **Flash paměť** | snadná aktualizace (flashování), větší kapacita, rychlejší zápis | přerušený nebo chybný zápis může desku vyřadit z provozu; lze ji přepsat i škodlivým kódem |

**Nastavení** (pořadí disků, čas, zařízení) je zvlášť v paměti **CMOS**, napájené **baterií** na desce (CR2032); z ní běží i hodiny (RTC). Stejný čas po každém zapnutí / ztráta nastavení = **vybitá baterie**. Výchozí hodnoty: propojka **Clear CMOS** nebo vyjmutí baterie.

## Co BIOS dělá po zapnutí

![Start počítače: zapnutí, načtení nastavení z CMOS, POST, inicializace zařízení, hledání zavaděče podle bootovací sekvence a start operačního systému](/images/content/it/uvod-do-vypocetni-techniky/bios/boot.webp)

1. Načte **konfiguraci** z paměti CMOS.
2. **POST** (Power-On Self-Test) – autotest procesoru, paměti, grafiky, klávesnice. Chyba = zpráva, a když nejde obraz, **pípání** (kódy v manuálu desky).
3. **Inicializuje** zařízení (disky, USB, karty).
4. Podle **bootovací sekvence** najde zařízení se zavaděčem (boot loader) a předá mu řízení.

Startuje se z prvního zařízení v sekvenci, které má zavaděč. Disk bez OS na prvním místě → *No bootable device*. Při instalaci z USB se pořadí dočasně mění.

## Vstup do BIOSu (Setup)

- Klávesa hned po zapnutí: **Delete** nebo **F2** (notebooky i F1, F10, Esc).
- **Boot menu** (jednorázově odkud startovat): **F12**, F11, F8.
- Z Windows: *Nastavení → Obnovení → Spuštění s upřesněným nastavením*.
- Textový BIOS: **šipky**, Enter, +/−, Esc; uložit a odejít **F10**. UEFI i graficky s myší.

Typické nabídky (podle výrobce se liší názvy):

| Nabídka | Co obsahuje |
| --- | --- |
| **Main** | datum a čas, verze BIOSu, procesor a paměť |
| **Advanced** | nastavení procesoru (virtualizace), řadiče SATA (režim AHCI / RAID), USB, integrovaná zařízení |
| **Storage / SATA** | připojené disky (SATA, NVMe SSD) a jejich parametry |
| **Boot** | bootovací sekvence, Secure Boot, Fast Boot, režim UEFI / Legacy (CSM) |
| **Power** | správa napájení, chování po výpadku proudu, **Wake on LAN** |
| **Monitor / H/W Monitor** | teploty, otáčky ventilátorů, napětí |
| **Security** | heslo pro vstup do nastavení a pro spuštění počítače, TPM |
| **Exit** | uložit a odejít, zahodit změny, načíst výchozí nastavení |

**Virtualizace:** pro VirtualBox, Hyper-V musí být zapnuté **Intel VT-x** nebo **AMD-V** (SVM Mode). Jinak se virtuální OS nerozběhne nebo jdou jen 32bitové systémy.

**Wake on LAN** – zapnutí počítače po síti: karta zůstává napájená a po přijetí *magic packetu* se svou MAC počítač probudí. Vzdálená správa a aktualizace.

## Flashování BIOSu

Aktualizace BIOSu (opravy, nové procesory, funkce) z:

- diskety (u starých počítačů),
- USB flash disku (nástroj přímo v BIOSu, např. *EZ Flash*, *Q-Flash*, *M-Flash*),
- z HDD / SSD (program výrobce spuštěný ve Windows).

**Nepřerušit napájení** – poškozený BIOS desku vyřadí. Ochrana:

- **DualBIOS** – záložní BIOS opraví primární,
- **BIOS Flashback** – nahrání z USB tlačítkem na desce, i bez CPU a RAM.

## ACPI

**ACPI** (Advanced Configuration and Power Interface) = standard spolupráce firmwaru a OS při správě hardwaru a napájení:

- detekci a konfiguraci hardware,
- řízení spotřeby (power management) – S3 spánek do RAM, S4 hibernace na disk, S5 vypnuto,
- výměna zařízení za běhu (hot swap),
- řízení teploty (thermal management)
- a další funkce.

## UEFI

Nástupce BIOSu: **EFI** (Extensible Firmware Interface, není zpětně kompatibilní), dnes standardizované **UEFI** = rozhraní mezi OS a firmwarem. Počítače po roce 2012 mají UEFI; „BIOS“ se říká dál.

| | BIOS (Legacy) | UEFI |
| --- | --- | --- |
| Rozdělení disku | MBR — nejvýše 2 TiB a 4 primární oddíly | **GPT** — obrovské disky, až 128 oddílů |
| Zavaděč OS | prvních 512 B disku (MBR) | soubor na oddílu **EFI System Partition** (FAT32) |
| Režim procesoru | 16bitový | 32/64bitový |
| Rozhraní | textové, ovládání klávesnicí | i grafické s myší |
| Zabezpečení | — | **Secure Boot** — spustí jen zavaděč podepsaný důvěryhodným klíčem |
| Start | pomalejší | rychlejší (*Fast Boot*), síťové funkce |

Pro staré systémy režim **CSM** (napodobí BIOS). Windows 11 vyžaduje UEFI se Secure Bootem a **TPM 2.0**.

## Cvičení

Ukázka BIOSu:

- v simulátoru – staré
- na novém PC – v reálu
- zapnutí podpory virtualizace na procesoru pro VirtualBox

**Úkol:** Najít manuál pro vybranou základní desku (AMD, Intel), ideálně svého PC či notebooku.

1. Doplňte výhody a nevýhody biosů umístěných na ROM, EEPROM a flash paměti.
2. Co je to ACPI?
3. Co je to UEFI?
4. Zjistěte v dokumentaci ke své základní desce, zda má funkci DualBIOS.
5. Jakým způsobem se dostanete do BIOSu?
6. Jaké další možnosti máte při spuštění PC?
7. Jakým způsobem se pohybujete po nabídkách v BIOSu?
8. Jakou základní nabídku má váš BIOS?
9. Kde zjistíte informace o připojených discích (IDE, SATA, SSD)?
10. Co se mohlo stát s vaší základní deskou, když pokaždé po zapnutí počítače BIOS ukazuje stejný čas?
11. Lze změnit bootovací (startovací) sekvenci disků? Najděte ve svém biosu.
12. Pokud máte vícero připojených disků, ze kterého se startuje OS vašeho PC? Když změníte bootovací (startovací) sekvenci, nastartuje se OS?
13. V předmětu OSY se učíte různé OS zpravidla nainstalovány do programu VirtualBox. Co se asi stalo, když se takovýto virtualizovaný OS nerozběhne? Jakou podporu / nastavení musíte v BIOSu povolit?
14. „Wake on LAN“ je jaká funkce?

## Citace

- _Wikipedie: Otevřená encyklopedie: BIOS_ [online]. c2020 [citováno 12. 11. 2020]. Dostupný z WWW: <https://cs.wikipedia.org/w/index.php?title=BIOS&oldid=18700696>
- <http://www.servispckupka.cz/hardware_software_navody.php>
- <http://www.servispckupka.cz/bios.php>
- <https://www.youtube.com/watch?v=bxfEKKicAr8>
- <https://www.youtube.com/watch?v=73kcyumjGhg>
- <https://www.youtube.com/watch?v=8pBo-y316Po>
- <https://www.youtube.com/watch?v=gfIYI_57cEA>
- <https://www.youtube.com/watch?v=JJf7KfPO5TQ>
