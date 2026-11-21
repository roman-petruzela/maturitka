---
title: "OS Linux - distribuce, grafický a textový režim"
order: 1
source: "IT/2. OS Linux - distribuce, grafický a textový režim.docx"
---
- **Operační systém** – základní software nahraný do paměti při startu; běží do vypnutí
- Standardně **jádro (kernel)** + pomocné systémové nástroje
- Úkol: umožnit ovládat počítač, vytvořit procesům stabilní **API** a přidělovat jim zdroje
- Vývoj OS je mnohem náročnější než běžných programů; OS je na telefonech, konzolích, serverech i superpočítačích
- **Multitasking** – více procesů „naráz“: jádro je rychle střídá na procesoru
- **Skupinová politika (GPO)** – sada předvoleb pro chování systémů Windows NT
- **Souborový systém** – způsob organizace dat do souborů na paměťovém médiu (HDD)

## Typy operačních systémů

- **Pro koncové uživatele** – dominuje **Windows** (až ~80 %), pak **macOS** (~11 %), Linux na třetím místě; Linux se často ovládá přes **terminál** (příkazový řádek)
- **Mobilní** – dominují **Android** (Google, otevřený) a **iOS** (Apple, uzavřený)
- **Servery a superpočítače** – výhradně **Linux** (bezpečnost, spolehlivost); je jediným OS na první pětistovce nejvýkonnějších superpočítačů

## Funkce operačního systému

Tři základní:

- **Ovládání počítače** – spouštění aplikací, předávání vstupů a získání výstupů
- **Abstrakce hardwaru** – jednoduché funkce (API) skrývají rozdíly mezi zařízeními
- **Správa prostředků** – přidělování a odebírání zdrojů procesům

U Windows a macOS bývá součástí OS i **grafické rozhraní**; u unixových systémů, kde ho lze vytvořit různými způsoby, se za součást systému nepovažuje.

## Stavba operačního systému

**Jádro** zavádí OS do paměti při startu a běží po celou dobu. Podle konstrukce:

![Tři typy jader: monolitické jako jeden celek, mikrojádro s malým jádrem a službami jako procesy, hybridní kombinace](/images/content/it/operacni-systemy/linux/jadra.webp)

- **Monolitické** – jeden funkční celek (Linux)
- **Mikrojádro** – velmi malé, zbytek jako samostatné procesy
- **Hybridní** – kombinace obojího (Windows NT, macOS)

### Grafické uživatelské rozhraní

- Ovládání **grafickými prvky**
- Někdy v jádru (původní Windows, MacOS), jinde **modulární** – grafický podsystém oddělený od jádra (Unix, VMS už kolem 1980; dnes Linux, macOS)

## Linux

- Derivát **Unixu**; **Linus Torvalds** ho začal vyvíjet v roce **1991** a na jádře se podílí dodnes
- **Open source** – volně dostupné zdrojové kódy, které lze podle licence upravovat a šířit; jádro pod licencí **GPLv2**
- **Jádro** přiděluje procesor a RAM, řídí běh aplikací, **hardware přes ovladače** (překlad příkazů OS na příkazy, kterým hardware rozumí; uživatel nemusí řešit, na jaké médium zapisuje)
- Variabilní → telefony, televizory, domácí směrovače
- **Víceuživatelské** – programy různých uživatelů zároveň (i přes síť)
- „Linux“ dnes = jádro **i** veškerý software (aplikace, utility, GUI)
- Šíří se jako **distribuce** (jádro + software s jednoduchou instalací)

Pojmy:

- **jádro** = kernel
- **nejvyšší uživatel (administrátor)** = **root**
- **hlavní adresář** = **root** (`/`)
- **příkazový řádek** = terminál, **bash**
- **verze OS** = distribuce

## Distribuce

- Windows mají edice se stejným jádrem a různým vybavením
- U Linuxu je to dotažené do extrému: **jádro stejné, zbytek se velmi liší**
- Od distribuce na disketu po instalaci o 3 GB s grafikou – obojí je Linux
- Příklady: **Ubuntu**, Slackware, PCLinuxOS, **openSUSE**, Mandriva, Kubuntu, Knoppix, CentOS; viz i [historie OS](/it/operacni-systemy/06-historie-operacnich-systemu/#linuxové-distribuce)
