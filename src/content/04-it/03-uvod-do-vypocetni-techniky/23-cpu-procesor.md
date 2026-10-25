---
title: "CPU (procesor)"
order: 23
source: "uvt/T04_CPU.pdf"
---
Základní popis procesoru, chipsetu a chlazení je na stránce [Procesor a chipset](/it/uvod-do-vypocetni-techniky/03-procesor-a-chipset/). Tady je, jak procesor pracuje, jeho parametry a výrobci.

## Jak procesor pracuje

Procesor vykonává program po **instrukcích** v opakovaném **instrukčním cyklu**:

1. **Načtení** (fetch) — řadič načte z paměti instrukci, na kterou ukazuje čítač instrukcí.
2. **Dekódování** (decode) — zjistí, co instrukce znamená a jaká data potřebuje.
3. **Provedení** (execute) — ALU provede operaci (sčítání, porovnání, přesun dat…).
4. **Uložení výsledku** (write back) — do registru nebo paměti; čítač se posune na další instrukci.

**Zřetězení** (pipelining) překrývá fáze více instrukcí — zatímco se jedna provádí, další se už dekóduje a třetí načítá, jako na výrobní lince. Moderní procesory jsou navíc **superskalární** (více instrukcí v jednom taktu) a provádějí instrukce **mimo pořadí** a **spekulativně** (odhadují, kudy program po podmínce půjde).

**Von Neumannova architektura** má jednu paměť pro program i data. **Harvardská** je má oddělené; dnešní procesory ji používají uvnitř — cache L1 je rozdělená na instrukční a datovou.

## Parametry procesoru

| Parametr | Význam |
| --- | --- |
| **patice / socket** | musí odpovídat základní desce (např. AM4, AM5, LGA 1700) |
| **frekvence** (GHz) | základní takt a **Turbo / Boost** — krátkodobé zvýšení, když to dovolí teplota a příkon |
| **počet jader** | fyzické výpočetní jednotky; každé jádro zpracovává svůj proud instrukcí |
| **počet vláken** | s technologií **SMT** (u Intelu Hyper-Threading) zvládne jedno jádro dvě vlákna |
| **cache L1, L2, L3** | L1 a L2 má každé jádro své, L3 je sdílená všemi jádry |
| **výrobní proces** (nm) | velikost struktur na čipu; menší = víc tranzistorů, nižší spotřeba |
| **TDP** (W) | tepelný výkon, který musí chladič odvést |
| **integrovaná grafika** | grafické jádro v procesoru (iGPU) — počítač nepotřebuje samostatnou grafickou kartu |
| **podporované paměti** | generace (DDR4, DDR5), rychlost a počet kanálů |
| **instrukční sada** | x86-64 (Intel, AMD), ARM (telefony, Apple M, Qualcomm Snapdragon) |

**Výkon** neurčuje jen frekvence — záleží i na počtu instrukcí za takt (IPC, daném architekturou), počtu jader a velikosti cache. Procesory se proto porovnávají **benchmarky** (Passmark, Cinebench, Geekbench).

Hybridní procesory (Intel od 12. generace, Apple M, ARM) kombinují výkonná jádra (**P-cores**) a úsporná jádra (**E-cores**).

## AMD

**AMD** = Advanced Micro Devices. Vyrábí procesory pro servery, laptopy a desktopy a také grafické karty (Radeon).

Řady procesorů:

- **Ryzen** – od 2. 3. 2017 (1. generace), architektura Zen; Ryzen 3 / 5 / 7 / 9 podle výkonu
- **Threadripper** – pracovní stanice s mnoha jádry
- **EPYC** – servery
- starší: **Athlon** (od 1999), **Opteron** (servery), **Turion** (notebooky), **Sempron** (levná řada)

Sockety:

- desktop
  - **AM5** – Ryzen 7000 a novější (LGA, DDR5)
  - **AM4** – Ryzen 1000–5000 (PGA, DDR4)
  - TR4, sTRX4 – Threadripper
  - starší typy: AM3, AM2, AM1, FM2+ (A6 / A8)
- servery
  - AMD SP3, SP5
  - AMD SP2, SP1

Příklad parametrů procesoru:

- patice / socket: AM4
- frekvence: 3 600 MHz
- počet jader: 6
- počet vláken: 12
- podpora chipsetu: AMD A520, B450, B550, X470, X570
- chladič v balení: ano – pro přetaktování je potřeba jiný, lepší
- velikost L1 cache (součet): 576 kB
- velikost L2 cache (součet): 3 072 kB
- velikost L3 cache: 16 384 kB
- Passmark: 12 269
- technologie: 14 / 12 / 7 nm
- průměrné TDP: 65 W

## Intel

Řady procesorů:

- **Core i3 / i5 / i7 / i9** (od 2023 **Core Ultra** 5 / 7 / 9) — označení řady podle výkonu, číslo za ním určuje generaci a model (Core i5-12400: 12. generace); přípona **K** = odemčený pro přetaktování, **F** = bez integrované grafiky, **U / H** = notebook úsporný / výkonný
- **Xeon** — servery a pracovní stanice
- **Pentium**, **Celeron** — levné řady (dnes jako *Intel Processor*)

Sockety: LGA 1200 (10.–11. gen.), **LGA 1700** (12.–14. gen.), **LGA 1851** (Core Ultra 200); Intel používá výhradně **LGA** — piny jsou v patici, ne na procesoru.

## Výměna procesoru

Na co se nesmí zapomenout:

- **kompatibilita** — stejný socket a podpora procesoru chipsetem a verzí BIOSu (seznam podporovaných procesorů na webu výrobce desky; někdy je potřeba nejdřív **aktualizovat BIOS** se starým procesorem),
- vypnout a odpojit napájení, vybít statickou elektřinu,
- u PGA nesmí být ohnuté piny procesoru, u LGA piny v patici; procesor vkládat podle značky (trojúhelníčku) bez tlaku,
- odstranit starou a nanést novou **teplovodivou pastu**, chladič připojit k ventilátorovému konektoru *CPU_FAN*,
- chladič musí zvládnout **TDP** nového procesoru.

## Software

- CPU-Z – <https://www.cpuid.com/downloads/cpu-z/cpu-z_1.91-en.zip>
- HWMonitor – <https://www.cpuid.com/downloads/hwmonitor/hwmonitor_1.41.zip>
- HWiNFO – <https://www.hwinfo.com/download/>

Doporučení: stáhnout portable verzi.

## Cvičení

1. Jaké firmy vyrábí procesory?
2. Co znamená AMD a co vyrábí?
3. Na jaké frekvenci běží váš procesor?
4. **DÚ:** Vytvořte miniprezentaci na 4–5 slidů o vašem procesoru, dohledejte na stránkách výrobce parametry a technologie, které procesor podporuje. Přidejte i obrázky. Na konci přidejte odkaz z YouTube (ideálně v českém jazyce) ohledně výměny procesoru na základní desce.
5. Na co se nesmí zapomenout, když procesor měníte?

Video: základní deska, sběrnice, procesor.
