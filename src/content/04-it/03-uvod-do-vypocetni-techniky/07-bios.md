---
title: "BIOS"
order: 7
source: "uvt/BIOS.pdf"
---
**BIOS** - Basic Input-Output System – je to vlastně firmware počítače – implementace základních V/V funkcí. Je to první program, který se po zapnutí počítače spustí: otestuje a inicializuje hardware a zavede operační systém. Každý druh základní desky má svou variantu BIOSu. Programový kód BIOSu je uložen na základní desce v stálé paměti typu ROM, EEPROM nebo modernější flash paměti s možností jednoduché aktualizace (Dual BIOS).

## Kde je BIOS uložen

| Paměť | Výhody | Nevýhody |
| --- | --- | --- |
| **ROM** | obsah nelze poškodit ani přepsat (ani virem) | nelze aktualizovat — oprava chyby znamená výměnu čipu |
| **EEPROM** | lze elektricky smazat a znovu naprogramovat přímo na desce | pomalý zápis, malá kapacita, maže se po bajtech |
| **Flash paměť** | snadná aktualizace (flashování), větší kapacita, rychlejší zápis | přerušený nebo chybný zápis může desku vyřadit z provozu; lze ji přepsat i škodlivým kódem |

**Nastavení** BIOSu (pořadí disků, čas, zapnutá zařízení) se ukládá zvlášť — do paměti **CMOS**, kterou napájí **baterie** na základní desce (typicky knoflíková CR2032). Hodiny reálného času (RTC) běží ze stejné baterie. Když po každém zapnutí počítač ukazuje stejný (výchozí) čas nebo ztrácí nastavení, je **vybitá baterie CMOS**. Nastavení lze vrátit na výchozí propojkou **Clear CMOS** nebo vyjmutím baterie.

## Co BIOS dělá po zapnutí

1. Načte **konfiguraci** z paměti CMOS.
2. Provede **POST** (Power-On Self-Test) — autotest procesoru, paměti, grafické karty a klávesnice. Chybu ohlásí zprávou na obrazovce, nebo — když obraz nefunguje — sérií **pípnutí** (význam kódů je v manuálu desky).
3. **Inicializuje** komponenty a připojená zařízení (disky, USB, rozšiřující karty).
4. Podle **bootovací (startovací) sekvence** najde zařízení, ze kterého lze spustit operační systém, a předá řízení jeho zavaděči (boot loaderu).

Pokud je připojeno víc disků, startuje se z prvního zařízení v bootovací sekvenci, na kterém je zavaděč. Když se pořadí změní na disk bez operačního systému, počítač nenastartuje (hlásí např. *No bootable device*) — proto se při instalaci OS z USB flash disku pořadí dočasně mění.

## Vstup do BIOSu (Setup)

- Do nastavení se vstoupí klávesou ihned po zapnutí — nejčastěji **Delete** nebo **F2** (u notebooků i F1, F10, Esc; klávesa se krátce zobrazí na obrazovce a je v manuálu).
- **Boot menu** (jednorázová volba, odkud startovat) bývá na **F12**, F11 nebo F8.
- Ve Windows lze do UEFI vstoupit i přes *Nastavení → Obnovení → Spuštění s upřesněným nastavením*.
- Ve starém textovém BIOSu se pohybuje **šipkami**, volba se potvrzuje Enterem, hodnota mění klávesami +/−, odchází se Esc; uložit a ukončit bývá **F10**. UEFI mívá grafické rozhraní ovladatelné i myší.

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

**Virtualizace:** aby šly spouštět virtuální stroje (VirtualBox, Hyper-V), musí být v BIOSu zapnutá podpora virtualizace procesoru — **Intel VT-x** (Intel Virtualization Technology) nebo **AMD-V** (SVM Mode). Když je vypnutá, virtualizovaný OS se nerozběhne nebo VirtualBox nabídne jen 32bitové systémy.

**Wake on LAN** je funkce, která umožňuje zapnout vypnutý počítač po síti — síťová karta zůstává napájená, a když přijme speciální paket (*magic packet* se svou MAC adresou), počítač probudí. Využívá se pro vzdálenou správu a aktualizace počítačů.

## Flashování BIOSu

Nahrazení stávajícího BIOSu za novější verzi (opravené chyby, podpora nových procesorů, nové funkce), prováděno z:

- diskety (u starých počítačů),
- USB flash disku (nástroj přímo v BIOSu, např. *EZ Flash*, *Q-Flash*, *M-Flash*),
- z HDD / SSD (program výrobce spuštěný ve Windows).

Během flashování se **nesmí přerušit napájení** — poškozený BIOS desku znefunkční. Proti tomu chrání:

- **DualBIOS** – ochrana počítače, pomocí sekundárního (záložního) BIOSu lze nahradit nebo opravit primární BIOS,
- **BIOS Flashback** — nahrání BIOSu z USB flash disku tlačítkem na desce, i bez procesoru a paměti.

## ACPI

**ACPI** (Advanced Configuration and Power Interface) je standard pro spolupráci firmwaru a operačního systému při správě hardwaru a napájení. Nové úkoly pro BIOS přineslo ACPI:

- detekci a konfiguraci hardware,
- řízení spotřeby energie (anglicky power management) — stavy spánku (S3 — uspání do RAM, S4 — hibernace na disk, S5 — vypnuto),
- výměnu zařízení za běhu (anglicky hot swapping),
- řízení teploty (anglicky thermal management)
- a další funkce.

## UEFI

Následníkem BIOSu je EFI (anglicky Extensible Firmware Interface), který však není zpětně kompatibilní. Dnes se používá jeho standardizovaná verze **UEFI** (Unified Extensible Firmware Interface) — specifikace, která definuje softwarové rozhraní mezi operačním systémem a firmwarem. Prakticky všechny počítače vyrobené po roce 2012 mají UEFI; slovo „BIOS“ se pro nastavení používá dál.

| | BIOS (Legacy) | UEFI |
| --- | --- | --- |
| Rozdělení disku | MBR — nejvýše 2 TiB a 4 primární oddíly | **GPT** — obrovské disky, až 128 oddílů |
| Zavaděč OS | prvních 512 B disku (MBR) | soubor na oddílu **EFI System Partition** (FAT32) |
| Režim procesoru | 16bitový | 32/64bitový |
| Rozhraní | textové, ovládání klávesnicí | i grafické s myší |
| Zabezpečení | — | **Secure Boot** — spustí jen zavaděč podepsaný důvěryhodným klíčem |
| Start | pomalejší | rychlejší (*Fast Boot*), síťové funkce |

Kvůli starším systémům má UEFI režim **CSM** (Compatibility Support Module), který napodobí starý BIOS. Windows 11 vyžaduje UEFI se zapnutým Secure Bootem a čip **TPM 2.0**.

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
