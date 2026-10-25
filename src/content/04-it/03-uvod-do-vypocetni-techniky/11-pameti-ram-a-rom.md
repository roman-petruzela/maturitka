---
title: "Paměti RAM a ROM"
order: 11
source: "uvt/cv15-17_RAM_ROM.pdf"
---
Obecné dělení pamětí a jejich parametry jsou na stránce [Paměti](/it/uvod-do-vypocetni-techniky/04-pameti/), disky na stránce [Pevné disky HDD a SSD](/it/uvod-do-vypocetni-techniky/12-pevne-disky-hdd-a-ssd/).

## Typy pamětí

**RAM** (Random-Access Memory) = RWM (Read–Write Memory) — paměť pro čtení i zápis s libovolným (přímým) přístupem. Je **závislá na napájení**: po vypnutí počítače obsah zmizí.

**ROM** (Read-Only Memory) — paměť jen pro čtení, obsah zůstává i bez napájení. Slouží pro firmware ([BIOS/UEFI](/it/uvod-do-vypocetni-techniky/07-bios/)) a v širším smyslu i pro trvalé ukládání dat:

| Typ | Zápis | Mazání |
| --- | --- | --- |
| **ROM** | jednou při výrobě | nelze |
| **PROM** | jednou uživatelem (programátorem) | nelze |
| **EPROM** | programátorem | UV zářením (okénko na čipu) |
| **EEPROM** | elektricky přímo v zařízení | elektricky po bajtech, omezený počet zápisů |
| **FLASH** | elektricky | elektricky po blocích — rychlejší; SSD, USB flash disky, paměťové karty (SD), BIOS |

**SAM** – paměť se sekvenčním přístupem (k datu se musí „dojít“, např. magnetická páska).

**CAM** – asociativní paměť (hledá se podle obsahu, ne podle adresy; např. tabulka MAC adres v přepínači).

## Dělení

- **dočasné** (závislé na napájení) – operační paměť, grafická RAM, cache L1, L2, L3, registry procesoru
- **permanentní** (nezávislé) – HDD, SSD, SSHD, Flash, optické disky (CD, DVD, Blu-ray)

### Hierarchie pamětí

Čím blíž procesoru, tím rychlejší, menší a dražší za bajt:

| Úroveň | Typická velikost | Přístupová doba (řádově) |
| --- | --- | --- |
| registry procesoru | stovky bajtů | pod 1 ns |
| cache L1 / L2 / L3 (SRAM) | desítky kB / jednotky MB / desítky MB | 1–10 ns |
| operační paměť (DRAM) | jednotky až desítky GB | desítky ns |
| SSD | stovky GB až jednotky TB | desítky µs |
| HDD | jednotky TB | jednotky ms |

**Cache** drží data, která procesor právě používá nebo brzy bude, aby nemusel čekat na pomalejší operační paměť.

### SRAM a DRAM

- **SRAM** (statická) — bit je uložen v klopném obvodu (6 tranzistorů). Velmi rychlá, nepotřebuje obnovování, ale drahá a málo hustá → **cache** a registry.
- **DRAM** (dynamická) — bit je náboj v **kondenzátoru** (1 tranzistor + 1 kondenzátor). Kondenzátor se vybíjí, takže se obsah musí tisíckrát za sekundu **obnovovat** (refresh). Levná a hustá → **operační paměť**. Dnešní moduly jsou **SDRAM** (synchronní — taktovaná společně se sběrnicí) typu **DDR**.

**DDR** (Double Data Rate) přenáší data na náběžné i sestupné hraně hodinového signálu, tedy dvakrát za takt. Proto se rychlost udává v **MT/s** (miliony přenosů za sekundu), v obchodech často jako „MHz“: DDR4-3200 má skutečný takt 1600 MHz.

| Generace | Napětí | Typické rychlosti | Poznámka |
| --- | --- | --- | --- |
| DDR3 | 1,5 V (DDR3L 1,35 V) | 1066–1866 MT/s | starší počítače |
| DDR4 | 1,2 V | 2133–3600 MT/s | 288 pinů |
| DDR5 | 1,1 V | 4800–8400 MT/s a víc | 288 pinů, ale jiný zářez; na modulu vlastní regulátor napětí a dva 32bitové kanály |

Generace nejsou **vzájemně kompatibilní** — zářez v modulu je pokaždé jinde, takže modul do jiné patice nejde zasunout.

## Parametry operačních pamětí

- typ patice (generace)
- rychlost (MT/s, „MHz“)
- velikost (GB)
- počet osazovaných pamětí (single, dual channel)
- časování (CAS latence)
- počet stran
- ECC (oprava chyb) — u serverů

### Dělení dle typu patice

- desktopy (**DIMM**)
  - DDR5 DIMM
  - starší:
    - SDR
    - DDR SDRAM [1] – double-data-rate synchronous dynamic random access memory
    - DDR4 DIMM
    - RIMM (Rambus DRAM, RDRAM) – dnes již nepoužitelné
- notebooky (**SO-DIMM** — menší moduly)
  - DDR4 SO-DIMM
  - DDR5 SO-DIMM
- serverové
  - UDIMM DDR4 ECC (Error Correcting Code) — paměť s opravou jednobitových chyb
  - RDIMM (registrované — s vyrovnávacím obvodem, umožňují víc modulů a větší kapacitu)
  - LRDIMM (s ještě nižší zátěží sběrnice — největší kapacity)
  - NVDIMM (nevolatilní — data přežijí výpadek napájení; nalezeno 7. 12. 2021)

### Dělení dle rychlosti

- 3200 MHz
- 3600 MHz
- …
- 6000 MHz (DDR5 – nalezeno 7. 12. 2021)
- 8000 MHz – G.Skill Trident Z5 RGB 32GB (2x16GB) DDR5 8000 CL38 (DDR5 – nalezeno 3. 1. 2023)
- 8200 MHz – Patriot VIPER XTREME 5 32GB (2x16GB) DDR5 8200 CL38 (DDR5 – nalezeno 5. 12. 2023)
- 8400 MHz – G.Skill Trident Z5 RGB 48 GB (2 x 24 GB) DDR5 8400 MHz CL40 (DDR5 – nalezeno 10. 1. 2024)

### Dělení dle velikosti (GB)

- **16 GB**
- **32 GB**
- 64 GB
- 128 GB
- 256 GB – Kingston Fury Renegade RGB 256GB (8x32GB) DDR4 3200 CL16 (nalezeno 3. 1. 2023)

### Dělení dle CAS latence

**CAS latence (CL)** je počet taktů, než paměť po zadání sloupce vrátí data. Nižší CL je rychlejší **při stejné frekvenci**:

- CL2 (nejrychlejší)
- CL2,5
- CL3
- CL16
- …
- CL40 (nalezeno 9. 12. 2021)
- CL46 (nejpomalejší – nalezeno 5. 1. 2023) – Crucial 32GB (2x16GB) DDR5 5600 CL46

Novější paměti mají vyšší CL, ale i vyšší frekvenci, takže skutečné zpoždění v nanosekundách zůstává podobné:

$$t = \frac{\text{CL} \cdot 2000}{\text{rychlost v MT/s}}\ \text{ns}$$

Příklad: DDR4-3200 CL16 → 16 · 2000 / 3200 = **10 ns**; DDR5-6000 CL30 → 30 · 2000 / 6000 = **10 ns**.

### Vícekanálové zapojení

Procesor má řadič paměti s více **kanály** (desktop obvykle 2). Moduly osazené v párech do správných slotů (**dual channel**, podle manuálu desky — často 2. a 4. slot) zdvojnásobí propustnost oproti jednomu modulu. Proto je lepší 2 × 8 GB než 1 × 16 GB. Servery mají 4, 8 i 12 kanálů.

### Dělení dle počtu stran

- jednostranné (čipy jen z jedné strany modulu)
- oboustranné

## Mrkněte také na

- [Latence RAM (operační paměti)](https://www.alza.cz/latence-ram-operacni-pameti)
- [Frekvence RAM (operační paměti)](https://www.alza.cz/frekvence-ram-operacni-pameti)
- [Vícekanálové zapojení RAM (Dual/Triple/Quad Channel)](https://www.alza.cz/vicekanalove-zapojeni-ram-dual-triple-quad-channel)

## Cvičení

- Video – paměti, HDD, DVD – 2 h
- Praktická na učebně – 2 h:
  - BIOS – kde najdu informace o pamětech a jaké jsou?
  - Testování pamětí – MEMTEST86 – <https://www.memtest86.com/download.htm> (v8.3 – 21. 1. 2020), případně nástroj výrobce pamětí
  - štítky – SN ⇒ výrobce, typ, kapacita – dohledání na internetu

## Citace

[1] <https://beasthackerz.ru/cs/brauzery/kak-otlichit-tipy-pamyati-simm-dimm-ddr-ddr2-ddr3-ddr3ili-ddr4-kakaya-pamyat.html>

[2] Wikipedie: Otevřená encyklopedie: Časování RAM [online]. c2017 [citováno 15. 12. 2020]. Dostupný z WWW: <https://cs.wikipedia.org/w/index.php?title=%C4%8Casov%C3%A1n%C3%AD_RAM&oldid=15633723>
