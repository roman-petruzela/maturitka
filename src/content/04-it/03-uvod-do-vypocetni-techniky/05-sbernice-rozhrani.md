---
title: "Sběrnice, rozhraní"
order: 5
source: "IT/8. Sběrnice, rozhraní.docx"
---

**Sběrnice** propojuje jednotlivé obvody počítače a přenáší **data, adresy a řídicí signály**. Rozhraní propojuje počítač s **periferiemi**. Podrobně o sběrnicích: [sběrnice](/it/uvod-do-vypocetni-techniky/10-sbernice/).

**Parametry sběrnice:** **přenosová rychlost** (bity za sekundu), **šířka** (kolik bitů za takt) a **taktovací kmitočet** (hodinové impulsy za sekundu).

## Typy sběrnic

- **Lokální** (rychlé, napojené na procesor a chipset): **procesorová** (procesor ↔ chipset), **paměťová** (řadič ↔ moduly RAM), **grafická**.
- **Pro rozšiřující karty:** **PCI** (paralelní, plug and play), **AGP** (jen grafika), **PCI Express** (sériová, rychlejší, méně vodičů, obousměrná; ×16 pro grafiku a rychlé SSD).

## Rozhraní

| Rozhraní | Vlastnosti |
| --- | --- |
| **USB** | sériové, téměř pro každou periferii; hvězdicová topologie s hubem; konektory typ A (počítač), B (zařízení), mini a micro |
| **RS-232** (COM) | starší sériové, nahrazeno USB; dnes měřicí systémy |
| **Centronics** (LPT) | starší paralelní, pro tiskárny |
| **FireWire** | rychlé sériové, kamery a externí disky |
| **Bluetooth** | bezdrátové propojení na krátkou vzdálenost (sluchátka, klávesnice, hodinky) |
| **IrDA** | bezdrátové infračervené, přímá viditelnost do 1 m |
| **RJ-45** | síťový kabel do LAN |
| **eSATA** | externí disky |
| **PS/2** | klávesnice (fialový), myš (zelený) |

**Audio konektory:** zelená – přední reproduktory nebo sluchátka, růžová – mikrofon, modrá – audio vstup, černá – zadní reproduktory, oranžová – subwoofer.

## Otázky k opakování

1. K čemu je sběrnice a jaké má parametry? ||propojuje obvody počítače a přenáší data, adresy a řídicí signály; rychlost, šířka, takt||
2. Čím se liší PCI a PCI Express? ||PCI je paralelní, PCIe sériová, rychlejší a obousměrná||
3. Jaké sběrnice jsou lokální? ||procesorová, paměťová, grafická||
4. Které rozhraní nahradilo RS-232 a LPT? ||USB||
5. Jaké typy konektorů má USB? ||A pro počítač, B pro periferii, mini a micro||
