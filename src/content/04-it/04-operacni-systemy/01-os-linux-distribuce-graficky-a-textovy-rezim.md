---
title: "OS Linux - distribuce, grafický a textový režim"
order: 1
source: "IT/2. OS Linux - distribuce, grafický a textový režim.docx"
---

**Operační systém** je základní software nahraný do paměti při startu, který běží do vypnutí. Tvoří ho **jádro (kernel)** a pomocné systémové nástroje. Obecně: [úvod do OS](/it/operacni-systemy/05-uvod-do-operacnich-systemu/), [typy OS](/it/operacni-systemy/06-historie-operacnich-systemu/).

## Funkce OS

- **Ovládání počítače** – spouštění aplikací, předávání vstupů a výstupů.
- **Abstrakce hardwaru** – jednoduché funkce (API) skrývají rozdíly mezi zařízeními.
- **Správa prostředků** – přidělování procesoru a paměti procesům.

## Stavba OS: typy jader

![Tři typy jader: monolitické jako jeden celek, mikrojádro s malým jádrem a službami jako procesy, hybridní kombinace](/images/content/it/operacni-systemy/linux/jadra.webp)

- **Monolitické** – jeden funkční celek (Linux).
- **Mikrojádro** – velmi malé, zbytek jako samostatné procesy.
- **Hybridní** – kombinace obojího (Windows NT, macOS).

**Grafické rozhraní (GUI)** se ovládá grafickými prvky. U Windows a macOS je součástí OS, u Unixu je to **modulární** nadstavba, kterou lze vyměnit; Linux se často ovládá v **textovém režimu** přes terminál (**bash**).

## Linux

- Derivát **Unixu**, vyvíjet ho začal **Linus Torvalds** v roce **1991**.
- **Open source**: zdrojový kód je veřejný, jádro je pod licencí **GPLv2**; **víceuživatelský**, multiplatformní (PC, servery, telefony, směrovače).
- **Jádro** přiděluje procesor a RAM, řídí běh aplikací a hardware přes **ovladače**.
- Šíří se jako **distribuce** = jádro + software s jednoduchou instalací. Jádro je stejné, zbytek se velmi liší: **Ubuntu**, Debian, openSUSE, Fedora, Linux Mint.
- Na **serverech a superpočítačích** dominuje (bezpečnost, spolehlivost), na desktopech je za Windows a macOS.

| Pojem | Význam |
| --- | --- |
| **root** | nejvyšší uživatel (administrátor) a také hlavní adresář `/` |
| **terminál, bash** | příkazový řádek |
| **distribuce** | „verze OS“ |

Příkazy: [PowerShell a Linux](/it/operacni-systemy/03-linux-a-windows-server-prakticky/), [práce se sítí](/it/operacni-systemy/10-prace-se-siti-prikazy/).

## Otázky k opakování

1. Jaké jsou funkce OS? ||ovládání počítače, abstrakce hardwaru, správa prostředků||
2. Jaké typy jader znáte? ||monolitické (Linux), mikrojádro, hybridní (Windows NT, macOS)||
3. Co je Linux a kdo ho vytvořil? ||svobodný unixový OS (jádro); Linus Torvalds, 1991||
4. Co je distribuce Linuxu? ||jádro + správce balíčků, grafické prostředí a aplikace||
5. Co znamená slovo root? ||nejvyšší uživatel a zároveň hlavní adresář `/`||
