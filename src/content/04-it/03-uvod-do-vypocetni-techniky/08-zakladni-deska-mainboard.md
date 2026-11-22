---
title: "Základní deska (mainboard)"
order: 8
source: "uvt/cast1_07_mainboard.pdf; uvt/T03_zakladni_deska.pdf"
---

Základní deska **propojuje součástky do celku** a napájí integrované obvody. Přímo na ni jde procesor a RAM, ostatní (grafika, disky) do slotů nebo kabely do konektorů. Dnes integruje, co dřív byly přídavné karty: řadiče disků, síť, zvuk, grafiku. Schéma propojení: [hardware pojmy](/it/uvod-do-vypocetni-techniky/02-hardware-pojmy-zakladni-deska-bios-zdroj/#základní-deska).

<img src="/images/content/it/uvod-do-vypocetni-techniky/zakladni-deska-mainboard/01.webp" alt="Popis částí základní desky" width="640" loading="lazy" decoding="async">

## Součásti desky

- **patice (socket) procesoru**, **chipset** (komunikace procesoru s ostatními částmi, viz [chipset](/it/uvod-do-vypocetni-techniky/09-chipset/)),
- **FlashROM s BIOSem** a **baterie**, která drží nastavení (viz [BIOS a UEFI](/it/uvod-do-vypocetni-techniky/07-bios/)),
- **sloty RAM**, sloty **PCIe** (×16 grafika, ×1 a ×4 karty), konektory disků (SATA, M.2),
- **napájecí obvody (VRM)** pro procesor a konektory napájení (24 pin, 4/8 pin),
- integrované obvody: síť, grafika, zvuk, řadiče disků, rozhraní USB a další.

## Formáty základních desek

| Formát | Poznámka |
| --- | --- |
| **AT** | starší, zdroj se zapínal síťovým vypínačem |
| **ATX** | Intel 1995; softwarové zapínání; dnes nejčastější |
| **microATX** | o čtvrtinu kratší, méně slotů |
| **mini-ITX** | malá PC |
| **BTX** | lepší chlazení, neujal se |

## Výběr základní desky

Při výběru se sleduje: **chipset** (výbava a výkon), **patice procesoru** (AMD a Intel nekompatibilní), **typ paměti** (DDR4, DDR5; **dvoukanálový** režim vyžaduje pár stejných modulů), **integrované součásti** (síť, zvuk, grafické výstupy), **sloty** pro karty a disky, **formát** (musí sedět do skříně) a **podpora BIOSu** a ovladačů.

## Otázky k opakování

1. K čemu slouží základní deska? ||propojuje všechny komponenty do celku a napájí integrované obvody||
2. Jmenujte hlavní součásti desky. ||patice procesoru, chipset, BIOS a baterie, sloty RAM, sloty PCIe, konektory disků a napájení||
3. Jaké formáty desek znáte? ||AT, ATX (nejčastější), microATX, mini-ITX, BTX||
4. Co sledujeme při výběru desky? ||chipset, patici procesoru, typ paměti, integrované součásti, sloty, formát||
5. K čemu je baterie na desce? ||udržuje nastavení BIOSu a čas||
