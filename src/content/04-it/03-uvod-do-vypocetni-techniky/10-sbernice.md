---
title: "Sběrnice"
order: 10
source: "uvt/cast2_01_sbernice.pdf"
---
**Sběrnice** je soustava vodičů, která propojuje obvody počítače a přenáší **data, adresy a řídicí signály**. Každé zařízení je připojeno k nějaké sběrnici; sběrnice spojují mosty chipsetu (viz [chipset](/it/uvod-do-vypocetni-techniky/09-chipset/)). Pomalejší sběrnice je vždy připojena do rychlejší.

## Parametry

| Parametr | Co znamená |
|---|---|
| **Šířka** | počet paralelních vodičů (8, 16, 32, 64 b) |
| **Takt** | počet hodinových impulsů za sekundu (MHz, GHz) |
| **Přenosová rychlost** | kolik dat se přenese za sekundu = takt × šířka |

- Za jeden takt se obvykle přenese tolik bitů, kolik je vodičů. Některé technologie přenesou víc přenosů na takt (QPI).
- Intel udává rychlost v **GT/s** (gigatransfers per second): 1 transfer = data o šířce sběrnice.
- Šířka **adresové** sběrnice určuje velikost adresovatelné paměti.

**Příklad – PCI:** 33 MHz × 32 b = 1056 Mb/s = **132 MB/s**.

## Rozdělení

- **Podle signálů:** datové, adresové, řídicí a stavové.
- **Podle vodičů:** sériové (1 bit) × paralelní (víc bitů).
- **Podle směru:** jednosměrné × obousměrné.
- **Podle synchronizace:** synchronní (řídí je hodiny, nevhodné pro zařízení s různou rychlostí) × asynchronní (potvrzovací signály).
- **Podle zapojení:**
  - **lokální** – přímo na procesor / severní most: procesorová (FSB, QPI, HyperTransport), paměťová, grafická (AGP, PCIe x16),
  - **systémová (rozšiřující)** – slouží pro přídavné karty: PCI, PCIe x1–x4, PCMCIA, ExpressCard; dnes nepoužívané jsou ISA, EISA, VL-BUS.

## Lokální sběrnice

- **Procesorová** – nejrychlejší sběrnice desky mezi procesorem a chipsetem. FSB nahradily **QPI** (Intel) a **HyperTransport** (AMD).
- **Paměťová** – řadič paměti ↔ moduly RAM, rychlost podle typu pamětí.
- **Grafická** – dříve **AGP** (jen pro grafickou kartu), dnes výhradně **PCIe x16**.

## PCI a PCI-X

**PCI** (Peripheral Component Interconnect) je paralelní sběrnice 32 nebo 64 bitů pro rozšiřující karty, napětí 5 V nebo 3,3 V.

- Jako první nabídla **Plug and Play** – systém sám zjistí a nastaví nové zařízení, uživatel nenastavuje přerušení (IRQ) ani jumpery.
- Podporuje **bus mastering**: zařízení může převzít řízení sběrnice a přistupovat přímo do paměti. Když o to žádá víc zařízení, rozhodne **arbitr** sběrnice (v severním mostu).
- Kapacitu **sdílejí všechna zařízení**.
- **PCI-X** je 64bitový nástupce s vyšším taktem (66–533 MHz) pro servery, zpětně kompatibilní s PCI 3,3 V.

## AGP

**AGP** (Accelerated Graphics Port) – vyhrazená sběrnice **jen pro grafickou kartu**, napojená přímo na severní most. Vznikla, protože 3D scény a video potřebovaly rychle načítat textury. Vytlačil ji PCIe x16.

## PCI Express

**PCI Express** (PCIe) je sériová sběrnice typu **bod–bod**. Každé zařízení má vlastní spoj, nic se nesdílí a arbitr není potřeba.

![PCI je sdílená sběrnice, PCI Express spojuje každé zařízení vlastní linkou](</images/content/it/uvod-do-vypocetni-techniky/sbernice/pci-pcie.webp>)

- **Lane** (linka) = dva jednosměrné spoje, tedy **plný duplex** (data letí oba směry naráz plnou rychlostí).
- Počet linek v konfiguraci: **x1, x4, x8, x16**; víc linek = větší propustnost.
- Méně vodičů než PCI = jednodušší a levnější návrh desky.
- Každá verze zhruba **zdvojnásobuje** propustnost a je zpětně kompatibilní.

Propustnost v **jednom směru**:

| Konfigurace | PCIe 1.x | PCIe 2.0 | PCIe 3.0 |
|---|---|---|---|
| x1 | 250 MB/s | 500 MB/s | ≈ 1 GB/s |
| x4 | 1 GB/s | 2 GB/s | ≈ 4 GB/s |
| x8 | 2 GB/s | 4 GB/s | ≈ 8 GB/s |
| x16 (grafika) | 4 GB/s | 8 GB/s | ≈ 16 GB/s |

## PCMCIA a ExpressCard (notebooky)

- **PCMCIA** – slot v notebooku, novější verze **CardBus** (32 bitů, odvozená od PCI). Podporuje Plug and Play a **hot swap** (výměna za chodu). Typy podle tloušťky: **I** 3,3 mm (paměti), **II** 5 mm (síťovky, modemy, TV tunery), **III** 10,5 mm (pevné disky).
- **ExpressCard** – nástupce: kombinuje **PCIe a USB**, rychlejší než CardBus. Formáty **/34** a **/54** (šířka v mm, konektor stejný) – karta /34 jde do obou slotů, /54 jen do slotu /54.

## Otázky k opakování

- Jaké jsou základní parametry sběrnice a jak se počítá přenosová rychlost?
- Čím se liší sběrnice lokální a systémová, sériová a paralelní, synchronní a asynchronní?
- Co je bus mastering a arbitr?
- V čem je PCI Express lepší než PCI? Co znamená x1, x4, x16?
- Co je PCMCIA a ExpressCard?
