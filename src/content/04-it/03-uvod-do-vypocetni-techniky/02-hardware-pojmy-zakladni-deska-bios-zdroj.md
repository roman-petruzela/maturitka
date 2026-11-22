---
title: "Hardware pojmy, základní deska, BIOS, zdroj"
order: 2
source: "IT/5. Hardware pojmy, základní deska, BIOS, zdroj.docx"
---

## Základní pojmy

| Pojem | Význam |
| --- | --- |
| **Hardware** | fyzické vybavení počítače |
| **Software** | programy |
| **Firmware** | program uložený přímo v hardwaru (BIOS, firmware disku) |
| **Bit** | základní jednotka informace, 0 nebo 1 |
| **Registr** | velmi rychlá malá paměť uvnitř procesoru |
| **Cache** | rychlá vyrovnávací paměť mezi různě rychlými částmi (L1, L2, L3) |
| **BIOS** | základní program v ROM, spustí se po zapnutí; zprostředkuje komunikaci hardwaru s OS a konfiguruje komponenty |

## Základní deska

![Blokové schéma počítače: procesor přímo spojený s RAM a grafickou kartou, přes DMI s chipsetem, na který jsou napojeny SATA disky, NVMe SSD, sloty PCIe, USB, síť, zvuk a flash s UEFI](/images/content/it/uvod-do-vypocetni-techniky/hardware/architektura.webp)

**Základní deska** propojuje všechny komponenty – je to **páteř počítače**. Dnes integruje i zvukovou a síťovou kartu.

- **Patice (socket) procesoru** – **LGA** (piny v patici, Intel), **PGA** (piny na procesoru, dříve AMD).
- **Chipset** – řídí komunikaci procesoru s ostatními částmi.
- **FlashROM s BIOSem** a **CMOS baterie**, která drží nastavení.
- **Sloty pro RAM**, sloty **PCIe** pro přídavné karty, konektory disků (SATA, M.2).
- **Konektory napájení** a integrované obvody (síť, zvuk, grafika).
- **Formát** (rozměry): **ATX** (dnes nejčastější), microATX (menší), mini-ITX; AT (starší, vypínač přímo na zdroji), BTX (neujal se).

Podrobněji: [základní deska](/it/uvod-do-vypocetni-techniky/08-zakladni-deska-mainboard/), [chipset](/it/uvod-do-vypocetni-techniky/09-chipset/).

## BIOS

**BIOS** (dnes **UEFI**) je prostředník mezi hardwarem a OS. Po zapnutí:

1. detekuje hardware (RAM, disky) a provede testy **POST**, chyby hlásí pípáním,
2. nastaví chipset a integrovaná zařízení (Plug and Play),
3. najde **zavaděč** OS a spustí ho.

Dále nabízí zabezpečení heslem, monitoring teplot a otáček a správu napájení. Podrobně: [BIOS a UEFI](/it/uvod-do-vypocetni-techniky/07-bios/).

## Zdroj

**Zdroj** mění střídavých **230 V** na stejnosměrné větve **3,3 V, 5 V a 12 V**. Kvalitní zdroj je důležitý: slabý znamená nestabilní systém, porucha může zničit další součásti.

| Standard | Poznámka |
| --- | --- |
| **AT** | 5 V a 12 V, síťový vypínač přímo na zdroji |
| **ATX** | přidal 3,3 V a softwarové zapínání |
| **ATX12V** | dnešní; přidává konektor 12 V pro procesor |

**Konektory:** **ATX 24 pin** (deska), **+12 V 4/8 pin** (procesor), **SATA** napájení (disky, mechaniky), starší **Molex**. Více: [napájecí zdroj a UPS](/it/uvod-do-vypocetni-techniky/14-napajeci-zdroj-a-ups/).

## Otázky k opakování

1. Co je firmware a co BIOS? ||firmware je program uložený v hardwaru; BIOS je základní firmware desky, který spustí a nastaví hardware a předá řízení zavaděči OS||
2. Z čeho se skládá základní deska? ||patice procesoru, chipset, FlashROM s BIOSem a baterie, sloty RAM a PCIe, konektory disků a napájení, integrované obvody||
3. Jaký je rozdíl mezi LGA a PGA? ||u LGA jsou piny v patici (Intel), u PGA na procesoru||
4. Co dělá POST? ||test hardwaru po zapnutí, chyby hlásí pípáním||
5. Jaká napětí dodává zdroj a kam jdou konektory 24 pin a 4/8 pin? ||3,3 V, 5 V a 12 V; 24 pin napájí desku, 4/8 pin procesor||
