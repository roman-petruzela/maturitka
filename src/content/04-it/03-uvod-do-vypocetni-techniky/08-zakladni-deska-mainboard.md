---
title: "Základní deska (mainboard)"
order: 8
source: "uvt/cast1_07_mainboard.pdf; uvt/T03_zakladni_deska.pdf"
---
Základní deska **propojuje součástky do celku** a napájí integrované obvody.

Dnes integruje, co dřív byly přídavné karty: řadiče disků, síť (Ethernet), zvuk, grafiku.

Přímo na ni jde procesor a RAM; ostatní (grafika, disky, mechaniky) do slotů nebo kabely do konektorů.

Nejdůležitější obvod je **čipová sada (chipset)** – komunikace procesoru s ostatními částmi; obsahuje řadiče (paměť, disky, USB, sběrnice). Schéma propojení: [hardware pojmy](/it/uvod-do-vypocetni-techniky/02-hardware-pojmy-zakladni-deska-bios-zdroj/#základní-deska).

<img src="/images/content/it/uvod-do-vypocetni-techniky/zakladni-deska-mainboard/01.webp" alt="Popis částí základní desky" width="640" loading="lazy" decoding="async">


Na desce je **FlashROM s BIOSem** – prostředník mezi hardwarem a OS; nastavuje se v programu **SETUP**.

Základní funkce BIOSu:

- detekce hardwaru (RAM, disky, mechaniky)

- testy a hlášení chyb (pípání)

- nastavení chipsetu (rychlost, spolehlivost)

- inicializace **Plug and Play**

- nastavení integrovaných zařízení (řadiče, zvuk, grafika, USB…)

- heslo

- monitoring teplot, otáček, napětí

- správa napájení (power management)

Při startu proběhne **POST**, pak BIOS najde a spustí zavaděč OS. Podrobně: [BIOS a UEFI](/it/uvod-do-vypocetni-techniky/07-bios/).

## Příklad konektorů základní desky:

Typické součásti:

- **patice (socket)** procesoru

- **čipová sada**

- **FlashROM** s BIOSem + **baterie** (drží nastavení)

- **sloty pro RAM**

- sloty sběrnic – dříve ISA, VL-BUS; **PCI, AGP, PCI Express**

- **napájecí obvody (VRM)** pro procesor

- integrované obvody: síť, grafika, zvuk, řadiče disků (ATA, SATA, RAID), rozhraní (PS/2, USB, FireWire, RS-232, LPT)

- **napájecí konektory** ze zdroje

## Formáty základních desek

- **PC/XT** – IBM, první standard domácích PC.

- **AT** – IBM, nástupce XT; zdroj se zapínal síťovým vypínačem, bez softwarového zapínání. Baby AT = menší.

- **ATX** – Intel 1995; softwarové zapínání (tlačítko na skříni, Wake-on-LAN); dnes nejčastější. **microATX** – o 25 % kratší, méně slotů, kanceláře.

- **BTX** – Intel; lepší chlazení a tišší chod; neujal se (picoBTX, microBTX).

- Méně rozšířené: LPX, NLX, WTX, **ITX** (mini-ITX), DTX.

- **Specifické** – notebooky, značková PC (HP, Compaq).

## Výběr základní desky

Nejdůležitější komponenta – propojuje vše. Při výběru:

1. **Čipová sada** – určuje výbavu, výkon a podporu technologií; rychlost spojení procesor–chipset (dříve FSB, QPI, HyperTransport, dnes DMI).

2. **Patice procesoru** – mění se s generacemi; AMD a Intel nekompatibilní.

3. **Paměti** – typ (DDR4, DDR5) podle chipsetu; **dvoukanálový** režim → kupovat páry stejných modulů (vyšší propustnost).

4. **BIOS** – co jde nastavit, přetaktování, aktualizace.

5. **Integrované součásti** – nemusí se dokupovat:

   - Jde především o:

   - řadiče disků (SATA, M.2, RAID),

   - řadič disketové mechaniky (dnes ne),

   - zvuk 5.1 / 7.1,

   - grafické výstupy (D-SUB/VGA, DVI, HDMI, DisplayPort) pro integrovanou grafiku; jinak samostatná karta v PCIe ×16,

   - síť Ethernet 1 Gb/s (i 2,5 Gb/s), někdy dvě; často Wi-Fi,

   - rozhraní PS/2, USB, RS-232, LPT, FireWire

6. **Sběrnice pro karty**

   - ISA, EISA, VL-BUS – vyřazené

   - AMR, CNR, ACR – zvuk, modemy; nepoužívají se

   - PCI, PCIe ×1, ×4 – zvukové, síťové, TV karty, řadiče USB

   - AGP, **PCIe ×16** – grafika; víc karet = SLI (NVIDIA), CrossFire (AMD)

7. **Software** – ovladače (drivery) a jejich dlouhodobá podpora výrobcem.

8. **Formát (rozměry)** – musí sedět do skříně.

9. **Uchycení chladiče**

## Stručný přehled

### Dělení desek

**Podle procesoru:** AMD, Intel, ARM.

**Podle použití:** PC, servery, pracovní stanice, mikropočítače (Arduino, Raspberry Pi).

**Podle velikosti:**

- AT
- ATX
- BTX
- microATX – o 25 % kratší než ATX
- mini-ITX

### Z čeho se základní deska skládá

- sloty, sockety, porty, piny
- sběrnice
- baterie
- kondenzátory, cívky, rezistory, tranzistory, LED
- procesory a mikroprocesory
- deska plošných spojů

### Konkrétní porty a patice

- CPU – socket (AM4, AM5, LGA 1700)
- paměti – sloty DDR4/DDR5
- grafika – PCIe ×16
- karty – PCIe ×4, ×2, ×1, PCI
- disky – IDE/PATA, SATA, M.2, U.2
- ventilátory (CPU, chipset, přídavné)
- COM / LPT – myš, tiskárna
- USB (2.0, 3.x), gameport
- VGA, HDMI, DisplayPort – monitor
- přední panel – tlačítka, LED disku a LAN
- speaker, audio
- napájení – deska (24 pin), CPU (4/8 pin)
- PS/2 – klávesnice, myš

### Chipset – čipová sada

Nejdůležitější logický obvod – komunikace CPU s ostatními částmi; řadiče pamětí, disků, USB aj. Viz [chipset](/it/uvod-do-vypocetni-techniky/09-chipset/).

**Úkol:** najít manuál pro vybranou základní desku (AMD, Intel) a vytisknout schéma desky.
