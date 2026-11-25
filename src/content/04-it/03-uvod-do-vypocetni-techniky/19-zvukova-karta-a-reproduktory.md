---
title: "Zvuková karta a reproduktory"
order: 19
source: "uvt/cv25_Zvukova_karta_reproduktory.pdf"
---

**Zvuková karta** převádí zvuk mezi analogovou a digitální podobou. Obsahuje **zvukový čip** a **A/D a D/A převodník**:

- **nahrávání** – analogový signál z mikrofonu se **vzorkuje** (A/D) a uloží jako čísla,
- **přehrávání** – digitální data se převedou zpět na analogový signál (D/A) a jdou do reproduktorů.

Kvalitu digitálního zvuku určuje **vzorkovací frekvence** (CD 44,1 kHz, video 48 kHz) a **bitová hloubka** (16 nebo 24 bitů).

## Druhy zvukových karet

![Interní, externí a integrovaná zvuková karta](/images/content/it/uvod-do-vypocetni-techniky/zvukova-karta-a-reproduktory/01.webp)

- **integrovaná** – čip přímo na základní desce, dnes standard,
- **interní** – rozšiřující karta do slotu (dříve ISA, dnes PCI Express),
- **externí** – připojená přes USB, kvalitnější převodníky, pro hudebníky a studia.

## Barvy konektorů

| Barva | Funkce |
| --- | --- |
| **růžová** | vstup pro mikrofon |
| **světle modrá** | linkový vstup |
| **zelená** | hlavní výstup (přední reproduktory, sluchátka) |
| černá | zadní reproduktory |
| stříbrná | boční reproduktory |
| oranžová | digitální výstup S/PDIF |

## Krátce z historie

- **PC Speaker** (IBM PC) – zahraje jen jednoduché tóny.
- **AdLib** (1987, slot ISA) – hudba pomocí **FM syntézy** (modulace frekvence).
- **Creative Labs**: Game Blaster, **Sound Blaster** (1989, digitální zvuk, MIDI, herní port), Sound Blaster Pro (stereo), **Sound Blaster 16** (16bitový zvuk).
- **Gravis UltraSound** (1991) – **wavetable syntéza** (nahrané vzorky skutečných nástrojů).

## Reproduktory

**Reproduktor** mění elektrický signál na zvuk. Nejběžnější **elektrodynamický**: proud teče cívkou v poli **permanentního magnetu**, cívka se pohybuje a rozkmitá **membránu**.

| Dělení | Druhy |
| --- | --- |
| podle **pohonu** | **elektrodynamické**, elektromagnetické, elektrostatické, piezoelektrické, plazmové |
| podle **vyzařování** | **přímovyzařující** (membrána přímo do prostoru, PC reproduktory), **nepřímovyzařující** (přes zvukovod, vyšší účinnost) |
| podle **frekvence** | **hlubokotónové** (basy, 20–1 500 Hz), **středotónové** (80–12 000 Hz), **vysokotónové** (2 000–20 000 Hz), širokopásmové |
| podle **účelu** | domácí, studiové monitory, ozvučení (PA), do auta, rozhlas |

## Mikrofony

**Mikrofon** mění zvuk na elektrický signál.

- **kondenzátorový** – nejkvalitnější, studiový, potřebuje **fantomové napájení** (obvykle **48 V**),
- **elektretový** – levná varianta kondenzátorového (headsety, notebooky),
- **dynamický** – odolný, bez napájení (pódia),
- další: páskový, uhlíkový, piezoelektrický.

![Ukázky směrových charakteristik mikrofonů](/images/content/it/uvod-do-vypocetni-techniky/zvukova-karta-a-reproduktory/02.webp)

**Směrová charakteristika** udává, odkud mikrofon snímá: **všesměrová**, **ledvinová** (zepředu), osmičková (zepředu a zezadu).

**PC mikrofon** se připojuje 3,5mm jackem (standard **PC99**): špička = signál, kroužek = napájení +5 V, objímka = zem.

## Otázky k opakování

1. Co dělá zvuková karta a z čeho se skládá? ||převádí zvuk mezi analogovou a digitální podobou; zvukový čip a A/D a D/A převodník||
2. Co určuje kvalitu digitálního zvuku? ||vzorkovací frekvence (44,1 kHz CD) a bitová hloubka (16/24 bitů)||
3. Jaké jsou druhy zvukových karet? ||integrovaná, interní (PCIe), externí (USB)||
4. Co znamená růžový, zelený a modrý konektor? ||růžový mikrofon, zelený hlavní výstup, modrý linkový vstup||
5. Jak funguje elektrodynamický reproduktor? ||cívka v poli permanentního magnetu se pohybuje podle proudu a rozkmitá membránu||
6. Jak se dělí reproduktory podle frekvence? ||hlubokotónové, středotónové, vysokotónové, širokopásmové||
7. Který mikrofon potřebuje fantomové napájení? ||kondenzátorový, obvykle 48 V||
