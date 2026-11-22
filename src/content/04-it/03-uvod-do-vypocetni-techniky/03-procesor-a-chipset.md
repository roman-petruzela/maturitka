---
title: "Procesor a chipset"
order: 3
source: "IT/6. Procesor a chipset.docx"
---

![Procesor složený z řadiče, ALU, registrů a cache, propojený s operační pamětí a vstupy a výstupy](/images/content/it/uvod-do-vypocetni-techniky/hardware/cpu.webp)

**Procesor (CPU)** je „mozek“ počítače: vykonává **instrukce** (strojový kód) programů a zpracovává téměř všechna data. Základem je **tranzistor** jako spínač 0/1, v procesoru jich jsou miliardy.

## Architektura procesoru

- **ALU** – aritmetické a logické operace.
- **Řídicí jednotka (řadič)** – řídí všechny operace.
- **Registry a cache** – rychlé vnitřní paměti pro data během výpočtu.
- Schéma podle **von Neumanna**: řadič + ALU + paměť + vstupy a výstupy.
- Aspoň jedno **jádro**, pro výkon vícejádrové. **HyperThreading** (Intel) / **SMT**: z jednoho jádra dvě logická.
- **CISC** – složitá instrukční sada (x86, Intel a AMD); **RISC** – jednoduché rychlé instrukce (ARM).

## Parametry procesoru

| Parametr | Význam |
| --- | --- |
| **frekvence (takt)** | kolik taktů za sekundu (GHz) |
| **počet jader** | víc operací naráz |
| **šířka slova** | bitů na operaci (32/64) |
| **cache** | kapacita vyrovnávací paměti (L1 → L3) |
| **patice (socket)** | musí sedět k desce; **LGA** (piny v patici), **PGA** (piny na procesoru) |

Výrobci: Intel, AMD (x86), Apple, Qualcomm, Samsung (ARM). Úspora a výkon: **SpeedStep** a **Cool'n'Quiet**, přetaktování **Turbo Boost**.

## Chipset

**Chipset** je hlavní logický obvod desky, který řídí komunikaci procesoru s ostatními zařízeními. Klasicky dvě části:

- **severní most (North bridge)** – rychlý, spojuje procesor s RAM, grafikou a jižním mostem,
- **jižní most (South bridge)** – pomalejší, připojuje disky (SATA), USB, PCI/PCIe, zvuk, síť, BIOS.

Dnes je severní most **v procesoru** a na desce zbývá jen jižní (**PCH**) – viz [chipset](/it/uvod-do-vypocetni-techniky/09-chipset/).

## Chlazení

Ztrátové teplo se musí odvést z čipu. **Pasivní** chlazení = kovový chladič s žebry; **aktivní** = k němu ventilátor; **teplovodivá pasta** vyplní nerovnosti mezi čipem a chladičem; **heatpipe** a **vodní** chlazení odvedou víc tepla. Viz [chlazení PC](/it/uvod-do-vypocetni-techniky/16-chlazeni-pc/).

## Otázky k opakování

1. Z čeho se skládá procesor? ||ALU, řídicí jednotka, registry a cache||
2. Jaký je rozdíl mezi CISC a RISC? ||CISC má složitou instrukční sadu (x86), RISC jednoduché rychlé instrukce (ARM)||
3. Jmenujte parametry procesoru. ||frekvence, počet jader, šířka slova, cache, patice||
4. Co je chipset a jak se dělí? ||obvod řídící komunikaci procesoru s okolím; severní most (RAM, grafika) a jižní most (disky, USB, periferie)||
5. Kam se dnes poděl severní most? ||je integrovaný v procesoru, na desce zůstává jen PCH||
6. Jaký je rozdíl mezi pasivním a aktivním chlazením? ||pasivní je jen chladič, aktivní má navíc ventilátor||
