---
title: "Napájecí zdroj a UPS"
order: 14
source: "uvt/cv21_zdroj_UPS.pdf"
---

**Napájecí zdroj (PSU)** mění střídavé síťové napětí **230 V / 50 Hz** na stejnosměrná napětí pro komponenty (**+12 V**, +5 V, +3,3 V). Nejčastější je formát **ATX**. Všechny napájecí kabely vedou ze zdroje: buď jsou napevno, nebo je zdroj **modulární** (kabely se připojují podle potřeby), případně semimodulární.

## Konektory

| Strana | Konektor | Kam |
| --- | --- | --- |
| síť | **IEC C14** na zdroji, **C13** na kabelu + vypínač | přívod 230 V |
| PC | **ATX 20+4 pin** | základní deska |
| PC | **CPU 4+4 pin** (+12 V) | napájení procesoru |
| PC | **PCI Express 6 a 6+2 pin** | grafická karta |
| PC | **SATA** | disky, mechaniky |
| PC | **Molex**, FDD (starší) | starší disky, ventilátory, disketová mechanika |

## Parametry zdroje

- **Výkon** podle sestavy: kancelářské PC 300–400 W, domácí 600–800 W, herní 800–1 200 W, pracovní stanice 1 200 W a víc.
- **Formát**: **ATX** (běžné PC), SFX a TFX (malé kancelářské skříně), Flex ATX a **1U** (servery).
- **Účinnost** – kolik příkonu ze sítě se dostane ke komponentám, zbytek je teplo. Certifikace **80 PLUS** zaručuje aspoň 80 % účinnost, vyšší stupně (Bronze, Gold, Platinum…) víc.
- **Ventilátor** 80–140 mm – čím větší, tím pomalejší otáčky a tišší chod.
- Dále: modularita, podsvícení, certifikace pro více grafických karet (SLI, CrossFire).

## UPS – záložní zdroj

**UPS** (Uninterruptible Power Supply) napájí zařízení z **akumulátorů** při výpadku proudu, aby šla bezpečně uložit data a vypnout systém. Používá se u PC, **serverů a datových center**, síťových prvků, kamerových systémů nebo pokladen.

**Zajišťuje:** napájení při výpadku, ochranu proti **přepětí** a **podpětí**, automatickou regulaci napětí, případně ochranu datové linky.

![Tři zapojení UPS: off-line přepíná na baterii až při výpadku, line-interaktivní má navíc regulaci napětí AVR, on-line napájí zátěž trvale přes baterii a střídač](/images/content/it/uvod-do-vypocetni-techniky/napajeci-zdroj-a-ups/ups.webp)

| Technologie | Princip | Použití |
| --- | --- | --- |
| **Off-line (standby)** | zátěž jde **přímo ze sítě**, při výpadku přepne na baterii (prodleva několik ms) | nejlevnější, domácí PC |
| **Line-interaktivní** | off-line + **AVR** (automatická regulace napětí) vyrovná kolísání bez baterie | kanceláře, menší servery |
| **On-line (dvojitá konverze)** | zátěž jde **trvale přes usměrňovač, baterii a střídač**, nulová prodleva, čistá sinusovka | servery, datová centra |

**Parametry UPS:**

- **výkon** ve **VA** (zdánlivý) a ve **W** (činný, W = VA × účiník) – např. 300–22 000 VA,
- **provedení**: kompaktní, tower, **rack 1U/2U**,
- **komunikace s počítačem**: **USB**, **LAN (RJ-45)**, SNMP, sériový port – UPS podle ní řídí automatické vypnutí systému.

## Otázky k opakování

1. Jaká napětí dává PC zdroj a jaký je nejčastější formát? ||+12 V, +5 V, +3,3 V; formát ATX||
2. Které konektory vedou ze zdroje a kam? ||ATX 20+4 pin deska, CPU 4+4 pin procesor, PCIe 6+2 pin grafika, SATA disky, Molex starší zařízení||
3. Co udává certifikace 80 PLUS? ||minimální účinnost zdroje 80 %, vyšší stupně víc||
4. K čemu slouží UPS a co zajišťuje? ||napájí z baterií při výpadku; ochrana proti přepětí a podpětí, regulace napětí||
5. Čím se liší off-line, line-interaktivní a on-line UPS? ||off-line přepne na baterii až při výpadku; line-interaktivní má navíc AVR; on-line napájí trvale přes baterii a střídač bez prodlevy||
6. Proč se u UPS uvádí VA i W? ||VA je zdánlivý výkon, W činný; W = VA × účiník||
