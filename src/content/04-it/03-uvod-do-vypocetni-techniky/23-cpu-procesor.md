---
title: "CPU (procesor)"
order: 23
source: "uvt/T04_CPU.pdf"
---

Základní popis procesoru je na stránce [Procesor a chipset](/it/uvod-do-vypocetni-techniky/03-procesor-a-chipset/). Tady je, jak procesor pracuje a jak se hodnotí.

## Instrukční cyklus

Procesor vykonává program po **instrukcích** v opakovaném cyklu:

1. **Načtení** (fetch) – řadič načte z paměti instrukci, na kterou ukazuje čítač instrukcí.
2. **Dekódování** (decode) – zjistí, co instrukce znamená.
3. **Provedení** (execute) – ALU provede operaci.
4. **Uložení výsledku** (write back) – do registru nebo paměti.

**Zřetězení** (pipelining) překrývá fáze více instrukcí jako výrobní linka. Moderní procesory jsou **superskalární** (víc instrukcí v taktu) a provádějí je **mimo pořadí** a **spekulativně**.

**Von Neumannova** architektura má jednu paměť pro program i data, **harvardská** je má oddělené (uvnitř dnešních procesorů, např. cache L1).

## Parametry a výkon

| Parametr | Význam |
| --- | --- |
| **socket** | musí odpovídat desce (AM5, LGA 1700) |
| **frekvence** | základní takt a krátkodobý **Turbo / Boost** |
| **jádra a vlákna** | fyzická jádra; **SMT / Hyper-Threading** = dvě vlákna na jádro |
| **cache L1, L2, L3** | L1 a L2 má každé jádro, L3 je sdílená |
| **výrobní proces** (nm) | menší struktury = víc tranzistorů, nižší spotřeba |
| **TDP** (W) | tepelný výkon, který musí chladič odvést |
| **iGPU** | integrovaná grafika v procesoru |
| **instrukční sada** | x86-64 (Intel, AMD), ARM (telefony, Apple) |

Výkon neurčuje jen frekvence, ale i **IPC** (instrukcí za takt), počet jader a cache; procesory se porovnávají **benchmarky**. Hybridní procesory kombinují výkonná (**P**) a úsporná (**E**) jádra.

**Výrobci:** **Intel** (Core i3/i5/i7/i9, Xeon pro servery; vždy patice **LGA**) a **AMD** (Ryzen, Threadripper, EPYC pro servery; AM4 PGA, AM5 LGA).

## Výměna procesoru

- **kompatibilita** – stejný socket a podpora chipsetem a verzí BIOSu,
- vypnout a odpojit napájení, vybít statickou elektřinu,
- vložit podle značky bez tlaku, neohnout piny,
- nanést novou **teplovodivou pastu**, chladič připojit ke konektoru *CPU_FAN*,
- chladič musí zvládnout **TDP** nového procesoru.

## Otázky k opakování

1. Popište instrukční cyklus. ||načtení, dekódování, provedení, uložení výsledku||
2. Co je zřetězení? ||překrývání fází více instrukcí jako na výrobní lince||
3. Jaký je rozdíl mezi von Neumannovou a harvardskou architekturou? ||jedna společná paměť pro program a data × oddělené paměti||
4. Které parametry určují výkon procesoru? ||frekvence, počet jader a vláken, cache, IPC, výrobní proces||
5. Co je TDP? ||tepelný výkon, který musí chladič odvést||
6. Na co dát pozor při výměně procesoru? ||kompatibilní socket a BIOS, vybít statiku, správná poloha, teplovodivá pasta, dostatečný chladič||
