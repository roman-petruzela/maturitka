---
title: "Chipset"
order: 9
source: "uvt/cast1_08_chipset.pdf"
---
Čipová sada (**chipset**) je hlavní logický obvod základní desky. Řídí komunikaci mezi procesorem a ostatními zařízeními: obsahuje **řadiče** zařízení a **adaptéry** (mosty) mezi sběrnicemi. Od chipsetu se odvíjí většina parametrů desky – typ procesoru a paměti, rozhraní a sloty pro karty.

- Sběrnice jsou **hierarchické**: pomalejší je vždy připojena do rychlejší.
- Každá nová architektura procesoru potřebuje nový chipset.

![Vývoj čipové sady: severní a jižní most, řadič paměti v procesoru, dnešní jediný čip PCH](</images/content/it/uvod-do-vypocetni-techniky/chipset/vyvoj.webp>)

## Severní a jižní most

Chipset je ve dvou čipech.

- **Severní most (North Bridge)** – spojuje procesor, operační paměť (má její řadič) a grafiku (AGP). Procesor je k němu připojen sběrnicí **FSB** (Front Side Bus, obousměrná, 64 bitů). Od frekvence FSB se odvozují takty procesoru, paměti i grafiky.
- **Jižní most (South Bridge)** – obsluhuje periferie: USB, disky (ATA), obvod **Super I/O** (sériový a paralelní port, PS/2, disketa) a paměť s BIOSem.
- **Nevýhoda:** všechny procesory a všechna data sdílejí jednu FSB, procesory spolu nemohou mluvit přímo.

## Architektura hubů

Podobná, jen jinak pojmenovaná.

- **MCH** (Memory Controller Hub) nahrazuje severní most: procesor, paměť, grafika (AGP nebo PCIe x16). **GMCH** má navíc integrovanou grafiku.
- **ICH** (I/O Controller Hub) nahrazuje jižní most: USB, PCI, PCIe, disky.
- Oba čipy spojuje sběrnice **DMI** (Direct Media Interface, až 2 GB/s). AMD používá obdobnou **HyperTransport**.
- V praxi se dál říká „severní a jižní most“.

## Řadič paměti v procesoru

Řadič operační paměti se přesunul **z desky přímo do procesoru**. Severní most se přejmenoval na **IOH** (Input/Output Hub) a s procesorem komunikuje sběrnicí **QPI** (QuickPath Interconnect), která nahradila FSB.

**Výhody:**
- kratší vzdálenost (milimetry, ne centimetry) = menší zpoždění a vyšší takt paměti,
- řadič běží na rychlosti procesoru a je pro daný procesor pořád stejný (lepší kompatibilita),
- každý procesor má vlastní paměť – ve víceprocesorovém serveru se nebrzdí na společné FSB.

**Nevýhoda:** procesor vyzařuje víc tepla.

**QPI** spojuje i procesory navzájem (serverové Xeony). Celá její propustnost zbývá periferiím, paměť ji nezatěžuje.

## Dnešní stav: jediný čip PCH

Procesory Intel Core mají v sobě **celý severní most**: řadič paměti, PCIe x16 pro grafiku i grafický procesor (GPU). Na desce zbývá jediný čip, **PCH** (Platform Controller Hub), který dělá práci jižního mostu.

- Procesor a PCH spojuje **DMI**.
- Procesor posílá obraz z integrované grafiky do PCH po sběrnici **FDI** (Flexible Display Interconnect); PCH z něj vytvoří signál pro VGA, DVI, HDMI nebo DisplayPort.

## Otázky k opakování

- K čemu slouží chipset a proč jsou sběrnice uspořádané hierarchicky?
- Co dělal severní a co jižní most?
- Proč se řadič paměti přesunul do procesoru? Jaké jsou výhody a nevýhoda?
- Co je PCH a jak je spojen s procesorem?
