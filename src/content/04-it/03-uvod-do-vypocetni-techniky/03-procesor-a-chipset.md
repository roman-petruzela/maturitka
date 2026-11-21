---
title: "Procesor a chipset"
order: 3
source: "IT/6. Procesor a chipset.docx"
---
![Procesor složený z řadiče, ALU, registrů a cache, propojený s operační pamětí a vstupy a výstupy](/images/content/it/uvod-do-vypocetni-techniky/hardware/cpu.webp)

- Zpracovává téměř všechna data a úlohy počítače
- „Mozek“ počítače, řídí jeho činnost
- Vykonává strojové instrukce (strojový kód) programu
- Vznikl spojením **řadiče** a **ALU** (von Neumannovo schéma)
- **Registry** – ukládání mezivýpočtů
- První mikroprocesor vyrobil Intel (4004, 1971)
- Architektura CPU:
	- **ALU** – aritmetické a logické operace
	- **Řídicí jednotka (řadič)** – řídí všechny operace
	- **Vnitřní paměti** – **cache** a **registry** (rychlá statická RAM) pro data během výpočtu
- Instrukce zpracovává ve vlastním strojovém kódu
- Stále přijímá a zpracovává data od běžících programů
- Má aspoň jedno **jádro**; pro výkon vícejádrové
- Dvě architektury podle instrukcí:
	- **CISC** – komplexní instrukční sada; instrukce i pro složité funkce (x86)
	- **RISC** – redukovaná sada jednoduchých, rychlých instrukcí (ARM)
- Základ = **tranzistor** jako spínač 0/1; v procesoru miliardy
- **Socket (patice)** spojuje procesor s deskou:
	- **PGA** – piny na procesoru, zasouvají se do patice
	- **LGA** – piny v patici
- **Frekvence (takt)** – jak rychle se mění stavy, v Hz (GHz); jeden z hlavních faktorů výkonu
- Parametry:
	- **frekvence** – operace za sekundu
	- **počet instrukčních kanálů** – instrukce za takt
	- **šířka slova** – bitů na operaci (32/64)
	- **cache** – kapacita rychlé vyrovnávací paměti
	- **počet jader** – víc operací naráz
	- **patice** – musí sedět k desce
- **HyperThreading** (Intel) – z jednoho fyzického jádra dvě logická
- **SMT** (simultánní multithreading) – obecný název této techniky (u AMD)
- Výrobci: Intel, AMD, Samsung, Qualcomm, Apple

## Čipová sada (Chipset)

- Hlavní logický obvod základní desky
- Řídí komunikaci procesoru s ostatními zařízeními
- Klasicky dva obvody:
	- **severní most** (North bridge)
	- **jižní most** (South bridge)
- **North bridge (MCH)**
	- procesor ↔ RAM, grafika (AGP / PCIe ×16), jižní most
	- někdy integrovaná grafika
	- určuje typ a rychlost procesoru a RAM
	- důležitý při přetaktování (zahřívá se)
- **South bridge (ICH)**
	- pomalejší, připojuje periferie
	- řadiče ATA, SATA, RAID; USB; PS/2; sběrnice PCI a PCIe pro karty
	- zvuk, paměť s BIOSem, síťová karta

Dnes je severní most **v procesoru** a na desce zbývá jen jižní (PCH) – viz [chipset](/it/uvod-do-vypocetni-techniky/09-chipset/).

## Chlazení

- Ztrátové teplo se musí odvést z povrchu čipu
	- zdroj, procesor, chipset, grafika, disk…
- **Pasivní** – kovový chladič s žebry (velká plocha); měď (dražší) nebo hliník (levnější)
- **Teplovodivá pasta** – vyplní nerovnosti mezi čipem a chladičem (silikon, keramika, kov)
- **Aktivní** – ventilátor žene vzduch na pasivní chladič
- Aktivní je nejčastěji doplněk pasivního
- **Heatpipe** – uzavřená měděná trubice s kapalinou; u čipu se odpaří, u žeber kondenzuje a knotem se vrací
- **Vodní** – uzavřený okruh; voda odvede víc tepla než vzduch

## Architektury

- HyperThreading; Intel SpeedStep, AMD Cool'n'Quiet (úspora); vícejádrové 64bitové procesory; severní most v procesoru; Turbo Boost (Intel), Turbo Core (AMD)
