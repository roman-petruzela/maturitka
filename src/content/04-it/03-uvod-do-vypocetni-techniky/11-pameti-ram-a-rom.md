---
title: "Paměti RAM a ROM"
order: 11
source: "uvt/cv15-17_RAM_ROM.pdf"
---
Obecné dělení pamětí a jejich parametry jsou na stránce [Paměti](/it/uvod-do-vypocetni-techniky/04-pameti/), disky na stránce [Pevné disky HDD a SSD](/it/uvod-do-vypocetni-techniky/12-pevne-disky-hdd-a-ssd/).

## Typy pamětí

**RAM** (Random-Access Memory) = RWM – čtení i zápis, libovolný přístup. **Závislá na napájení** – po vypnutí obsah zmizí.

**ROM** (Read-Only Memory) – jen čtení, obsah drží bez napájení. Firmware ([BIOS/UEFI](/it/uvod-do-vypocetni-techniky/07-bios/)), v širším smyslu trvalé ukládání:

| Typ | Zápis | Mazání |
| --- | --- | --- |
| **ROM** | jednou při výrobě | nelze |
| **PROM** | jednou uživatelem (programátorem) | nelze |
| **EPROM** | programátorem | UV zářením (okénko na čipu) |
| **EEPROM** | elektricky přímo v zařízení | elektricky po bajtech, omezený počet zápisů |
| **FLASH** | elektricky | po blocích – rychlejší; SSD, flash disky, SD karty, BIOS |

**SAM** – sekvenční přístup (k datu se „dojde“, páska).

**CAM** – asociativní (hledá podle obsahu, ne adresy; tabulka MAC ve switchi).

## Dělení

- **dočasné** (závislé na napájení) – operační paměť, grafická RAM, cache L1, L2, L3, registry procesoru
- **permanentní** (nezávislé) – HDD, SSD, SSHD, Flash, optické disky (CD, DVD, Blu-ray)

### Hierarchie pamětí

Čím blíž procesoru, tím rychlejší, menší a dražší za bajt:

![Hierarchie pamětí jako pyramida od registrů po pásky](/images/content/it/uvod-do-vypocetni-techniky/pameti/hierarchie.webp)

| Úroveň | Typická velikost | Přístupová doba (řádově) |
| --- | --- | --- |
| registry procesoru | stovky bajtů | pod 1 ns |
| cache L1 / L2 / L3 (SRAM) | desítky kB / jednotky MB / desítky MB | 1–10 ns |
| operační paměť (DRAM) | jednotky až desítky GB | desítky ns |
| SSD | stovky GB až jednotky TB | desítky µs |
| HDD | jednotky TB | jednotky ms |

**Cache** drží data, která procesor používá nebo brzy bude, aby nečekal na RAM.

### SRAM a DRAM

- **SRAM** (statická) – bit v klopném obvodu (6 tranzistorů). Velmi rychlá, bez obnovování, drahá → **cache**, registry.
- **DRAM** (dynamická) – bit = náboj v **kondenzátoru** (1 tranzistor + 1 kondenzátor); vybíjí se → **refresh** tisíckrát za sekundu. Levná, hustá → **operační paměť**. Dnes **SDRAM** (synchronní se sběrnicí) typu **DDR**.

**DDR** (Double Data Rate) – přenos na náběžné i sestupné hraně = **2× za takt**. Rychlost v **MT/s** (v obchodech „MHz“): DDR4-3200 má skutečně 1600 MHz.

| Generace | Napětí | Typické rychlosti | Poznámka |
| --- | --- | --- | --- |
| DDR3 | 1,5 V (DDR3L 1,35 V) | 1066–1866 MT/s | starší počítače |
| DDR4 | 1,2 V | 2133–3600 MT/s | 288 pinů |
| DDR5 | 1,1 V | 4800–8400+ MT/s | jiný zářez; vlastní regulátor napětí, 2× 32b kanál |

Generace **nejsou kompatibilní** – zářez je jinde, modul do cizího slotu nejde.

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
    - DDR SDRAM [1]
    - DDR4 DIMM
    - RIMM (Rambus DRAM, RDRAM) – dnes již nepoužitelné
- notebooky (**SO-DIMM** — menší moduly)
  - DDR4 SO-DIMM
  - DDR5 SO-DIMM
- serverové
  - UDIMM DDR4 ECC (Error Correcting Code) — paměť s opravou jednobitových chyb
  - RDIMM (registrované — s vyrovnávacím obvodem, umožňují víc modulů a větší kapacitu)
  - LRDIMM (s ještě nižší zátěží sběrnice — největší kapacity)
  - NVDIMM (nevolatilní – přežije výpadek)

### Dělení dle rychlosti

- 3200 MHz
- 3600 MHz
- …
- 6000 MHz (DDR5)
- 8000 MHz (DDR5)
- 8200 MHz (DDR5)
- 8400 MHz (DDR5)

### Dělení dle velikosti (GB)

- **16 GB**
- **32 GB**
- 64 GB
- 128 GB
- 256 GB (sada 8 × 32 GB)

### Dělení dle CAS latence

**CAS latence (CL)** = počet taktů, než paměť vrátí data. Nižší CL = rychlejší **při stejné frekvenci**:

- CL2 (nejrychlejší)
- CL2,5
- CL3
- CL16
- …
- CL40
- CL46 (nejpomalejší, DDR5)

Novější paměti mají vyšší CL i frekvenci → skutečné zpoždění zůstává podobné:

```formulas
{ "items": [ { "label": "skutečná latence", "tex": "t = \\frac{\\text{CL} \\cdot 2000}{\\text{rychlost v MT/s}}\\ \\text{ns}" } ] }
```

Příklad: DDR4-3200 CL16 → 16 · 2000 / 3200 = **10 ns**; DDR5-6000 CL30 → 30 · 2000 / 6000 = **10 ns**.

### Vícekanálové zapojení

Řadič paměti má víc **kanálů** (desktop 2). Páry modulů ve správných slotech (**dual channel**, často 2. a 4.) = **2× propustnost**. Proto 2 × 8 GB je lepší než 1 × 16 GB. Servery 4–12 kanálů.

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
