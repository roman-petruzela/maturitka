---
title: "Hardware pojmy, základní deska, BIOS, zdroj"
order: 2
source: "IT/5. Hardware pojmy, základní deska, BIOS, zdroj.docx"
---
- **Hardware** – fyzické vybavení počítače
- **Software** – programy
- **Počítač** – stroj na zpracování informací
- **Informace** – zpráva o věcech nebo událostech
- **Bit** – základní jednotka informace, 0 nebo 1
- **Firmware** – program, který je součástí hardwaru
- **Registr** – velmi rychlá malá paměť uvnitř procesoru
- **Cache** – L1, L2, L3 v procesoru (i na disku); malý zásobník dat mezi různě rychlými částmi
- **BIOS** – základní program v ROM, spustí se hned po zapnutí:
	- a) zprostředkuje komunikaci hardwaru s operačním systémem
	- b) konfiguruje komponenty PC

## Základní deska

![Blokové schéma počítače: procesor přímo spojený s RAM a grafickou kartou, přes DMI s chipsetem, na který jsou napojeny SATA disky, NVMe SSD, sloty PCIe, USB, síť, zvuk a flash s UEFI](/images/content/it/uvod-do-vypocetni-techniky/hardware/architektura.webp)

- Propojuje všechny komponenty – **páteř počítače**
- Přímo na ní: CMOS, RAM, přídavné karty
- Kabely: disky, optické mechaniky
- Desky se liší rychlostí, počtem konektorů, paticí
- Integrované bývají zvuková a síťová karta
- **Sběrnice** – vodiče, kterými tečou data mezi komponentami; rychlejší sběrnice = rychlejší tok
- **FlashROM** s BIOSem
- **Formáty**: AT (zapnutí kolébkovým vypínačem), **ATX** (tlačítko na skříni, dnes nejčastější), BTX (lepší chlazení, neujal se); LPX, NLX, WTX, ITX, DTX
- Typické součásti:
	- **patice procesoru** – PGA (piny na procesoru, AMD), LGA (piny v patici, Intel)
	- **chipset** – komunikace procesoru s ostatními částmi
	- **FlashROM** s BIOSem + **CMOS baterie** (uchová nastavení)
	- sloty pro **RAM**
	- řadiče a sloty **PCI, AGP, PCI Express**
	- konektory **napájení**
	- integrované síťové, grafické, zvukové obvody

## BIOS

- Prostředník mezi hardwarem a OS
- Funkce:
	- detekce hardwaru (RAM, disky)
	- testy (**POST**) a hlášení chyb (pípání)
	- nastavení chipsetu
	- inicializace zařízení **Plug and Play**
	- nastavení integrovaných zařízení (řadiče disků, zvuk, grafika)
	- základní zabezpečení (hesla)
	- monitoring teplot a otáček ventilátorů
	- správa napájení a úspora energie
- Při každém startu otestuje a nastaví hardware
- Najde zavaděč OS a spustí ho
- Výrobci: AMI, Award, Phoenix

Podrobně: [BIOS a UEFI](/it/uvod-do-vypocetni-techniky/07-bios/).

## Zdroj

- Měnič: střídavých **230 V** → stejnosměrné větve:
	- **3,3 V; 5 V; 12 V**
- Komponenty je využívají přímo nebo dál snižují (deska pro procesor)
- Velmi důležitý – porucha může zničit další komponenty
- Slabý nebo nekvalitní zdroj = nestabilní systém
- Standardy:
	- **AT** – 5 V a 12 V, síťový vypínač přímo na zdroji
	- **ATX** – přidal 3,3 V a softwarové zapínání
	- **ATX12V** – dnešní; přidává 4pinový konektor 12 V pro procesor
- Konektory: **ATX 24 pin** – napájení desky
	- **+12 V (4/8 pin)** – pro procesor, povinný
	- **AUX** – 2× 3,3 V, 1× 5 V, 3× zem
	- **Floppy** – diskety, mizí
	- **Molex (Peripheral)** – starší disky, mechaniky, ventilátory
	- **SATA** napájení – disky a mechaniky
