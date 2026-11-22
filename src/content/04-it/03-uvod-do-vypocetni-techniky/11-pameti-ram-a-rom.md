---
title: "Paměti RAM a ROM"
order: 11
source: "uvt/cv15-17_RAM_ROM.pdf"
---

Obecné dělení pamětí a jejich parametry: [Paměti](/it/uvod-do-vypocetni-techniky/04-pameti/); disky: [Pevné disky HDD a SSD](/it/uvod-do-vypocetni-techniky/12-pevne-disky-hdd-a-ssd/).

## Typy pamětí

**RAM** (Random-Access Memory) – čtení i zápis, libovolný přístup; **závislá na napájení**, po vypnutí obsah zmizí. **ROM** (Read-Only Memory) – jen čtení, obsah drží bez napájení (firmware, [BIOS/UEFI](/it/uvod-do-vypocetni-techniky/07-bios/)).

| Typ | Zápis | Mazání |
| --- | --- | --- |
| **ROM** | jednou při výrobě | nelze |
| **PROM** | jednou uživatelem | nelze |
| **EPROM** | programátorem | UV zářením (okénko na čipu) |
| **EEPROM** | elektricky v zařízení | elektricky po bajtech |
| **FLASH** | elektricky | po blocích; SSD, flash disky, SD karty, BIOS |

**Dělení podle napájení:** **dočasné** (operační paměť, grafická RAM, cache, registry) × **permanentní** (HDD, SSD, flash, optické disky). **Přístup:** **SAM** sekvenční (páska), **CAM** asociativní (hledá podle obsahu, např. tabulka MAC ve switchi).

### Hierarchie pamětí

Čím blíž procesoru, tím rychlejší, menší a dražší za bajt:

![Hierarchie pamětí jako pyramida od registrů po pásky](/images/content/it/uvod-do-vypocetni-techniky/pameti/hierarchie.webp)

| Úroveň | Typická velikost | Přístupová doba |
| --- | --- | --- |
| registry procesoru | stovky bajtů | pod 1 ns |
| cache L1 / L2 / L3 (SRAM) | kB až desítky MB | 1–10 ns |
| operační paměť (DRAM) | GB | desítky ns |
| SSD | stovky GB až TB | desítky µs |
| HDD | TB | ms |

**Cache** drží data, která procesor používá nebo brzy bude, aby nečekal na RAM.

### SRAM a DRAM

- **SRAM** (statická) – bit v klopném obvodu (6 tranzistorů). Velmi rychlá, drahá → **cache**, registry.
- **DRAM** (dynamická) – bit = náboj v **kondenzátoru**; vybíjí se, proto potřebuje **refresh**. Levná a hustá → **operační paměť**, dnes **SDRAM** typu **DDR**.

**DDR** (Double Data Rate) přenáší data na náběžné i sestupné hraně taktu = **2× za takt**. Rychlost se udává v **MT/s** (DDR4-3200 má skutečně 1600 MHz).

| Generace | Napětí | Typické rychlosti |
| --- | --- | --- |
| DDR3 | 1,5 V | 1066–1866 MT/s |
| DDR4 | 1,2 V | 2133–3600 MT/s |
| DDR5 | 1,1 V | 4800–8400 MT/s |

Generace **nejsou kompatibilní** – zářez je jinde, modul do cizího slotu nejde.

## Parametry operačních pamětí

- **typ patice a generace** (desktop **DIMM**, notebook **SO-DIMM**), **rychlost** (MT/s), **velikost** (GB),
- **časování – CAS latence (CL)** = počet taktů, než paměť vrátí data,
- **ECC** – oprava chyb (servery; **RDIMM** s vyrovnávacím obvodem pro větší kapacity),
- **vícekanálové zapojení** – páry modulů ve správných slotech (**dual channel**) = **2× propustnost**; proto 2 × 8 GB je lepší než 1 × 16 GB.

Nižší CL je rychlejší jen **při stejné frekvenci**; novější paměti mají vyšší CL i frekvenci, takže skutečné zpoždění zůstává podobné:

```formulas
{ "items": [ { "label": "skutečná latence", "tex": "t = \\frac{\\text{CL} \\cdot 2000}{\\text{rychlost v MT/s}}\\ \\text{ns}" } ] }
```

Příklad: DDR4-3200 CL16 → 16 · 2000 / 3200 = **10 ns**; DDR5-6000 CL30 → 30 · 2000 / 6000 = **10 ns**.

## Otázky k opakování

1. Čím se liší RAM a ROM? ||RAM má čtení i zápis a po vypnutí ztratí obsah; ROM drží obsah bez napájení||
2. Seřaďte ROM, PROM, EPROM, EEPROM, FLASH podle možnosti přepisu. ||ROM nelze přepsat, PROM jednou naprogramovat, EPROM mazat UV, EEPROM a FLASH elektricky||
3. Čím se liší SRAM a DRAM a kde se používají? ||SRAM v klopném obvodu, rychlá a drahá (cache); DRAM v kondenzátoru s refreshem, levná (operační paměť)||
4. Co znamená DDR a co je dual channel? ||přenos dat na obou hranách taktu; dva moduly v párových slotech dají dvojnásobnou propustnost||
5. Co je CAS latence? ||počet taktů, než paměť vrátí data; nižší je rychlejší při stejné frekvenci||
6. Proč je cache mezi procesorem a RAM? ||procesor nečeká na pomalejší operační paměť||
