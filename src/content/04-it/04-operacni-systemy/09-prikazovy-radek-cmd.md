---
title: "Příkazový řádek (cmd)"
order: 9
source: "osy/příkazový řádek.pdf"
---

**Příkazový řádek** (`cmd.exe`) je textové rozhraní Windows: příkazy se píšou z klávesnice, výsledek se vypíše jako text. Spustí se přes *Win + R* → `cmd`; příkazy měnící systém vyžadují **spuštění jako správce**. Novější je PowerShell – viz [Linux a Windows Server prakticky](/it/operacni-systemy/03-linux-a-windows-server-prakticky/).

## Základy

- Výzva (prompt) ukazuje **aktuální složku** (`C:\Users\jan>`); velikost písmen nehraje roli, názvy s mezerou se dávají do uvozovek.
- Nápověda: `příkaz /?`; přepínače za lomítkem (`dir /s`); zástupné znaky `*` (libovolně znaků) a `?` (jeden znak).
- Šipka nahoru vrátí předchozí příkaz, *Tab* doplní název.

## Práce se soubory a složkami

| Příkaz | Význam |
| --- | --- |
| `cd cesta`, `D:` | změna složky, přepnutí disku |
| `dir`, `tree` | obsah složky, strom podsložek |
| `md`, `rd` | vytvoření, smazání složky (`rd /s` i s obsahem) |
| `copy`, `xcopy`, `robocopy`, `move` | kopírování a přesun |
| `ren`, `del` | přejmenování, smazání souboru |
| `type soubor` | vypíše obsah textového souboru |

**Přesměrování:** `>` zapíše výstup do souboru, `>>` ho připíše, `|` předá výstup dalšímu příkazu (`ipconfig /all | findstr IPv4`).

## Síťové příkazy

| Příkaz | Význam |
| --- | --- |
| `ipconfig /all` | IP adresa, maska, brána, MAC, DNS, DHCP (`/release`, `/renew` – nová adresa; `/flushdns` – smaže cache DNS) |
| `ping adresa` | ověří dostupnost (ICMP echo) a odezvu |
| `tracert adresa` | směrovače na cestě k cíli |
| `nslookup doména` | dotaz na DNS |
| `netstat -an` | aktivní spojení a otevřené porty |
| `arp -a` | tabulka ARP (IP ↔ MAC) |
| `route print` | směrovací tabulka počítače |
| `getmac`, `hostname` | MAC adresy karet, název počítače |
| `netsh` | nastavení sítě (rozhraní, firewall, Wi-Fi) |
| `net use Z: \\server\sdileni` | připojí sdílenou složku jako disk |
| `net user` | správa místních účtů |

**Typický postup při potížích s připojením:** `ipconfig` (adresa `169.254.x.x` = nedostal adresu z DHCP) → `ping` brány → `ping 8.8.8.8` → `ping google.com` nebo `nslookup` (DNS) → `tracert` (kde se spojení ztrácí).

Statická IP: `netsh interface ip set address "Ethernet" static 192.168.1.20 255.255.255.0 192.168.1.1`. Příkazy v Linuxu: [Práce se sítí](/it/operacni-systemy/10-prace-se-siti-prikazy/).

## Správa systému

| Příkaz | Význam |
| --- | --- |
| `systeminfo` | informace o systému a hardwaru |
| `tasklist`, `taskkill /PID číslo` | seznam procesů, ukončení procesu |
| `shutdown /s /t 0`, `/r` | vypnutí, restart |
| `chkdsk C: /f`, `sfc /scannow` | kontrola disku, oprava systémových souborů |
| `diskpart` | správa disků a oddílů |
| `gpupdate /force` | načtení zásad skupiny – [GPO](/it/operacni-systemy/14-gpo-zasady-skupiny/) |
| `whoami` | přihlášený uživatel |

**Dávkové soubory** (`.bat`, `.cmd`) ukládají příkazy a spouštějí je najednou, např. zálohování: `robocopy "%USERPROFILE%\Documents" "Z:\%USERNAME%" /E`.

## Otázky k opakování

1. Jak spustíte příkazový řádek jako správce? ||vyhledáním cmd a volbou Spustit jako správce||
2. Jak vypíšete obsah složky včetně podsložek a uložíte výstup do souboru? ||`dir /s > seznam.txt`||
3. Jak zjistíte MAC adresu, bránu a DNS server? ||`ipconfig /all`||
4. K čemu slouží ping a tracert? ||ping ověří dostupnost a odezvu; tracert vypíše směrovače na cestě||
5. Co znamená adresa 169.254.x.x? ||počítač nezískal adresu od DHCP||
6. Jak opravíte systémové soubory Windows? ||`sfc /scannow`||
