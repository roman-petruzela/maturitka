---
title: "Úvod do výpočetní techniky – rozcestník"
order: -1
---

Rozcestník kategorie: o čem předmět je, kdy se podle ŠVP učí, co si z něj určitě zapamatovat, kde je které téma a které maturitní okruhy pokrývá.

## O předmětu

- Z čeho se počítač skládá, jak jednotlivé části fungují a spolupracují a podle jakých parametrů se vybírají.
- Postupuje od základních pojmů a historie přes vnitřek počítače (základní deska, procesor, paměti, disky, zdroj, chlazení) k periferiím (monitor, tiskárna, zvuk, klávesnice a myš).
- Prakticky: rozebrání a složení sestavy, test výkonu, výběr sestavy podle zadaných parametrů.
- Navazují na něj [operační systémy](/it/#operacni-systemy) (BIOS/UEFI, správa disků, zálohování) a [počítačové sítě](/it/#pocitacove-site) (síťová karta, kabeláž).

## Ročníky a hodiny podle ŠVP

| Ročník | Hodin týdně | Obsah (ŠVP §4.9.1) |
| --- | --- | --- |
| 1. | 2 (68 h za rok) | BOZP, základní pojmy (HW, SW, data, informace, jednotky, kódování, číselné soustavy); historie VT a von Neumannova struktura; základní části počítače; periferie – podrobně v [tematickém plánu](/it/uvod-do-vypocetni-techniky/00-tematicky-plan/) |

Plné znění výstupů je v [přehledu ŠVP](/it/reference/svp-prehled/#491-úvod-do-výpočetní-techniky).

## Co si určitě zapamatovat

- **Hardware** = fyzické vybavení, **software** = programy, **firmware** = program, který je součástí hardwaru (BIOS, firmware disku). **Bit** nabývá hodnot 0 a 1.
- **Generace počítačů** podle součástek: relé (Z1, Mark I) → elektronky (ENIAC) → tranzistory (UNIVAC) → integrované obvody (IBM System 360) → mikroprocesory.
- **Procesor** = řadič (řídicí jednotka) + **ALU** podle von Neumannova schématu, k tomu registry a cache L1–L3. Architektury **CISC** (komplexní instrukční sada) × **RISC** (redukovaná). Patice **PGA** – piny na procesoru (AMD), **LGA** – piny v patici (Intel).
- **Čipová sada**: severní most (MCH) spojuje procesor, operační paměť a grafiku, jižní most (ICH) řadiče disků, USB a sběrnici PCI / PCI Express.
- **BIOS** je uložen ve FlashROM na základní desce, po startu otestuje hardware (chyba = pípání), nastaví ho a hledá zavaděč operačního systému; nastavení drží CMOS s baterií. Nástupcem je **UEFI**.
- **Zdroj** mění 230 V střídavých na stejnosměrné větve **3,3 V, 5 V a 12 V**; deska se napájí konektorem ATX 24 pinů. **UPS** napájí při výpadku a chrání proti přepětí a podpětí.
- **RAM** – čtení i zápis, bez napájení data ztratí; **SRAM** (rychlá: registry, cache) × **DRAM** (operační paměť, moduly DIMM, v notebooku SO-DIMM). **ROM** → PROM (jednou naprogramovat) → EPROM (mazání UV) → EEPROM a Flash (mazání elektricky).
- **HDD**: plotny, hlavy na raménku, stopa – sektor – cylindr – cluster; na začátku disku **MBR** s tabulkou oddílů. **SSD** nemá pohyblivé části; rozhraní SATA (~560 MB/s) × M.2 NVMe přes PCI Express (Gen4 ~7 450 MB/s).
- **Optické disky** (průměr 12 cm): CD 700 MB, laser 785 nm; DVD 4,7 GB na vrstvu, 660 nm; Blu-ray 25 GB na vrstvu, 405 nm.
- **USB**: 2.0 480 Mbit/s, 3.0 (3.2 Gen 1) 5 Gbit/s, 3.2 Gen 2 10 Gbit/s, USB4 až 40 Gbit/s (konektor C).
- **Monitor**: pixel ze tří subpixelů RGB; parametry rozlišení, úhlopříčka, doba odezvy, kontrastní poměr, pozorovací úhly, obnovovací frekvence. **LCD** jen propouští podsvícení (TN levné, IPS věrnější barvy a úhly), **OLED** svítí sám, černá je opravdu černá.
- **Tiskárny**: jehličková (9–24 jehliček přes pásku), inkoustová (termická / piezoelektrická), laserová (nabitý válec, laser, toner, zažehlení ~200 °C). Barevný tisk **CMYK** = subtraktivní míchání. Parametry **DPI** a **PPM**.

## Témata kategorie

**Úvod**

- [Tematický plán](/it/uvod-do-vypocetni-techniky/00-tematicky-plan/)
- [Historie výpočetní techniky](/it/uvod-do-vypocetni-techniky/21-historie-vypocetni-techniky/)
- [Hardware – pojmy, základní deska, BIOS, zdroj](/it/uvod-do-vypocetni-techniky/02-hardware-pojmy-zakladni-deska-bios-zdroj/) – souhrnné maturitní zpracování
- [Autorský zákon](/it/uvod-do-vypocetni-techniky/01-autorsky-zakon/)

**Základní deska a procesor**

- [Základní deska (mainboard)](/it/uvod-do-vypocetni-techniky/08-zakladni-deska-mainboard/) a [stručně](/it/uvod-do-vypocetni-techniky/22-zakladni-deska/)
- [Procesor a chipset](/it/uvod-do-vypocetni-techniky/03-procesor-a-chipset/) – souhrnné zpracování
- [CPU (procesor)](/it/uvod-do-vypocetni-techniky/23-cpu-procesor/)
- [Chipset](/it/uvod-do-vypocetni-techniky/09-chipset/)
- [BIOS](/it/uvod-do-vypocetni-techniky/07-bios/)
- [Sběrnice](/it/uvod-do-vypocetni-techniky/10-sbernice/) a [sběrnice a rozhraní](/it/uvod-do-vypocetni-techniky/05-sbernice-rozhrani/)

**Paměti a úložiště**

- [Paměti](/it/uvod-do-vypocetni-techniky/04-pameti/) – souhrnné zpracování
- [Paměti RAM a ROM](/it/uvod-do-vypocetni-techniky/11-pameti-ram-a-rom/)
- [Pevné disky HDD a SSD](/it/uvod-do-vypocetni-techniky/12-pevne-disky-hdd-a-ssd/)
- [Optické disky CD/DVD/Blu-ray](/it/uvod-do-vypocetni-techniky/13-opticke-disky-cd-dvd-blu-ray/)

**Napájení, skříň a chlazení**

- [Napájecí zdroj a UPS](/it/uvod-do-vypocetni-techniky/14-napajeci-zdroj-a-ups/)
- [Počítačové skříně](/it/uvod-do-vypocetni-techniky/15-pocitacove-skrine/)
- [Chlazení PC](/it/uvod-do-vypocetni-techniky/16-chlazeni-pc/)

**Periferie**

- [Periferie](/it/uvod-do-vypocetni-techniky/06-periferie/) – souhrnné zpracování
- [Zobrazovací soustava](/it/uvod-do-vypocetni-techniky/17-zobrazovaci-soustava/)
- [Tiskárny](/it/uvod-do-vypocetni-techniky/18-tiskarny/)
- [Zvuková karta a reproduktory](/it/uvod-do-vypocetni-techniky/19-zvukova-karta-a-reproduktory/)
- [Klávesnice, myš, 3D myš, trackball](/it/uvod-do-vypocetni-techniky/20-klavesnice-mys-3d-mys-trackball/)
- [Hardware – doplňkové poznámky (grafické karty, displeje a další)](/it/uvod-do-vypocetni-techniky/07-hardware-doplnkove-poznamky-graficke-karty-displeje-a-dalsi/)

## Maturitní okruhy

Kompletní seznam je v [maturitních okruzích IT](/it/reference/maturitni-okruhy/). Této kategorie se týkají okruhy 8–10:

| Okruh | Stránky |
| --- | --- |
| [8) Počítačová sestava](/it/reference/maturitni-okruhy/#8-počítačová-sestava) | [hardware a základní deska](/it/uvod-do-vypocetni-techniky/02-hardware-pojmy-zakladni-deska-bios-zdroj/), [mainboard](/it/uvod-do-vypocetni-techniky/08-zakladni-deska-mainboard/), [procesor a chipset](/it/uvod-do-vypocetni-techniky/03-procesor-a-chipset/), [BIOS](/it/uvod-do-vypocetni-techniky/07-bios/), [zdroj](/it/uvod-do-vypocetni-techniky/14-napajeci-zdroj-a-ups/) |
| [9) Paměti](/it/reference/maturitni-okruhy/#9-paměti) | [paměti](/it/uvod-do-vypocetni-techniky/04-pameti/), [RAM a ROM](/it/uvod-do-vypocetni-techniky/11-pameti-ram-a-rom/), [HDD a SSD](/it/uvod-do-vypocetni-techniky/12-pevne-disky-hdd-a-ssd/), [optické disky](/it/uvod-do-vypocetni-techniky/13-opticke-disky-cd-dvd-blu-ray/) |
| [10) Zobrazovací soustava, tiskárny](/it/reference/maturitni-okruhy/#10-zobrazovací-soustava-tiskárny) | [zobrazovací soustava](/it/uvod-do-vypocetni-techniky/17-zobrazovaci-soustava/), [monitory](/it/uvod-do-vypocetni-techniky/06-periferie/), [tiskárny](/it/uvod-do-vypocetni-techniky/18-tiskarny/) |

Dataprojektory v archivu samostatný materiál nemají.

## Co je jen okrajové

- **Historická rozhraní a sběrnice** – COM (RS-232), LPT, FireWire, IrDA, AGP, ISA: stačí vědět, čím je nahradily USB a PCI Express.
- **Varianty CRT monitorů** (invar, Trinitron) a barevné „knihy“ formátů CD – zajímavost, ne látka k učení.
- **Konkrétní modely a ceny** (rychlosti a latence RAM z e-shopů, nejrychlejší SSD) – rychle zastarávají, důležitý je princip a řád čísel.
- **Formáty zdrojů a skříní** (1U, SFX, TFX, BTX…) – stačí ATX a k čemu jsou menší formáty.
- **3D tisk** se zmiňuje u tiskáren, ale podrobně patří do [3D modelování](/it/#3d-modelovani).
- **Autorský zákon** je zařazen sem, ale k maturitě se zkouší u [operačních systémů](/it/operacni-systemy/08-licence-a-autorsky-zakon/) (okruh 15).
