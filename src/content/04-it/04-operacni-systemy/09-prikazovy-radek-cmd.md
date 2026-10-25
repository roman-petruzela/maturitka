---
title: "Příkazový řádek (cmd)"
order: 9
source: "osy/příkazový řádek.pdf"
---
**Příkazový řádek** (`cmd.exe`, *Příkazový řádek*) je textové rozhraní Windows: příkazy se píšou z klávesnice a výsledek se vypisuje jako text. Spustí se přes *Win + R* → `cmd`; pro příkazy, které mění nastavení systému, je potřeba **spustit jako správce**. Novější a výkonnější textové rozhraní Windows je PowerShell — viz [Linux a Windows Server prakticky](/it/operacni-systemy/03-linux-a-windows-server-prakticky/).

## Základy

- Výzva (prompt) ukazuje **aktuální složku**, např. `C:\Users\jan>`; relativní cesty se počítají od ní.
- Velikost písmen v příkazech ani názvech souborů nehraje roli.
- Názvy s mezerou se dávají do uvozovek: `cd "C:\Program Files"`.
- Nápověda k příkazu: `help příkaz` nebo `příkaz /?` (např. `dir /?`).
- Přepínače se píšou za lomítko: `dir /s` (i podsložky), `dir /a` (i skryté soubory).
- **Zástupné znaky**: `*` = libovolný počet znaků, `?` = jeden znak — `del *.tmp` smaže všechny soubory s příponou `.tmp`.
- Šipka nahoru vrátí předchozí příkaz, *Tab* doplní název souboru.

## Práce se soubory a složkami

| Příkaz | Význam |
| --- | --- |
| `cd cesta` | změna aktuální složky (`cd ..` o úroveň výš, `cd \` do kořene disku) |
| `D:` | přepnutí na jiný disk |
| `dir` | vypíše obsah složky |
| `tree` | vypíše strom podsložek |
| `md název_složky` | vytvoření složky |
| `rd název_složky` | smazání (prázdné) složky; `rd /s` smaže i s obsahem |
| `copy "soubor" "cesta kam"` | kopírování |
| `xcopy`, `robocopy` | kopírování celých složek i s podsložkami |
| `move "soubor" "cesta kam"` | přesunutí |
| `ren "původní_název" "nový_název"` | přejmenuje soubor |
| `del název_souboru` | smaže soubor |
| `type název_souboru` | vypíše obsah textového souboru (např. s příponou `.txt`) |
| `cls` | smaže obrazovku |

## Přesměrování výstupu

- `>` zapíše výstup do souboru (přepíše ho): `dir > seznam.txt`
- `>>` připíše výstup na konec souboru
- `|` předá výstup dalšímu příkazu: `ipconfig /all | findstr IPv4` (vypíše jen řádky s „IPv4“), `dir | more` (stránkování)

## Síťové příkazy

| Příkaz | Význam |
| --- | --- |
| `ipconfig` | IP adresa, maska a výchozí brána jednotlivých síťových karet |
| `ipconfig /all` | navíc MAC adresa, DNS servery, DHCP server a doba zapůjčení adresy |
| `ipconfig /release`, `/renew` | uvolní a znovu vyžádá IP adresu od DHCP serveru |
| `ipconfig /flushdns` | vymaže mezipaměť DNS |
| `ping adresa` | ověří dostupnost počítače (posílá zprávy ICMP echo), ukáže dobu odezvy; `ping -t` pinguje stále |
| `tracert adresa` | vypíše směrovače, přes které paket k cíli prochází |
| `pathping adresa` | kombinace `tracert` a `ping` — ztrátovost na jednotlivých směrovačích |
| `nslookup doména` | dotaz na DNS server — překlad jména na IP adresu a naopak |
| `netstat -an` | aktivní spojení a otevřené porty; `-b` ukáže i program (jako správce) |
| `arp -a` | tabulka ARP — IP adresy a k nim zjištěné MAC adresy v místní síti |
| `route print` | směrovací tabulka počítače |
| `getmac` | MAC adresy síťových karet |
| `hostname` | název počítače |
| `netsh` | nastavení sítě z příkazové řádky (rozhraní, firewall, Wi-Fi) |
| `net use Z: \\server\sdileni` | připojí sdílenou složku jako síťovou jednotku |
| `net share` | vypíše nebo vytvoří sdílené složky na počítači |
| `net user` | vypíše a spravuje místní uživatelské účty |

**Typický postup při potížích s připojením:** `ipconfig` (má počítač adresu? Adresa `169.254.x.x` znamená, že nedostal adresu od DHCP) → `ping` výchozí brány → `ping 8.8.8.8` (funguje internet?) → `ping google.com` nebo `nslookup` (funguje DNS?) → `tracert` (kde se spojení ztrácí?).

Statická IP adresa přes `netsh`:

```bat
netsh interface ip set address "Ethernet" static 192.168.1.20 255.255.255.0 192.168.1.1
netsh interface ip set dns "Ethernet" static 192.168.1.1
```

Příkazy pro práci se sítí v Linuxu jsou na stránce [Práce se sítí (příkazy)](/it/operacni-systemy/10-prace-se-siti-prikazy/).

## Správa systému

| Příkaz | Význam |
| --- | --- |
| `systeminfo` | informace o systému a hardwaru (verze Windows, RAM, aktualizace) |
| `tasklist`, `taskkill /PID číslo` | seznam běžících procesů, ukončení procesu |
| `shutdown /s /t 0`, `shutdown /r` | vypnutí, restart |
| `chkdsk C: /f` | kontrola a oprava souborového systému disku |
| `sfc /scannow` | kontrola a oprava systémových souborů Windows |
| `diskpart` | správa disků a oddílů (vytváření, mazání, formátování) |
| `gpupdate /force` | okamžité načtení zásad skupiny — viz [GPO](/it/operacni-systemy/14-gpo-zasady-skupiny/) |
| `whoami` | přihlášený uživatel (`whoami /groups` i jeho skupiny) |

## Dávkové soubory

Příkazy lze uložit do textového souboru s příponou **`.bat`** nebo `.cmd` a spustit je najednou — tak se automatizují opakované úkoly (zálohování složky, připojení síťových disků při přihlášení):

```bat
@echo off
rem záloha dokumentů na síťový disk
net use Z: \\server\zalohy
robocopy "%USERPROFILE%\Documents" "Z:\%USERNAME%" /E
echo Hotovo.
pause
```
