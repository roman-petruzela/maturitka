---
title: "Praktická správa Linuxu a Windows Serveru"
order: 200
---

## Linux – práce v terminálu

**Terminál** (shell) je textové rozhraní, které umožňuje rychlé, přesné a skriptovatelné operace.

```bash
pwd                          # aktuální adresář
ls -la                       # obsah adresáře včetně skrytých souborů a detailů
cd /var/log                  # přechod do adresáře
mkdir novy_adresar           # nový adresář
cp soubor.txt zaloha.txt     # kopírování
mv soubor.txt /home/uzivatel/   # přesun nebo přejmenování
rm -r stara_slozka           # smazání adresáře s obsahem
cat soubor.txt               # vypíše soubor; less ho zobrazí po stránkách
grep "chyba" log.txt         # řádky obsahující text
```

**Oprávnění** (`chmod`) se nastavují zvlášť pro **vlastníka, skupinu a ostatní**: čtení `r` = 4, zápis `w` = 2, spouštění `x` = 1, hodnoty se sečtou.

```bash
chmod 755 skript.sh          # vlastník rwx, skupina r-x, ostatní r-x
chmod 644 dokument.txt       # vlastník rw-, ostatní jen čtení
chown uzivatel:skupina soubor.txt
```

**Procesy a služby a balíčky:**

```bash
ps aux                       # běžící procesy; top je průběžně řadí podle vytížení
sudo systemctl status apache2   # stav služby (start, stop, enable = spuštění při startu)
sudo apt update              # aktualizuje seznam balíčků
sudo apt install nginx       # nainstaluje balíček (remove odinstaluje)
```

`sudo` spustí příkaz s právy administrátora (root); běžný účet je bez něj omezený.

## Windows Server

**Windows Server** poskytuje síťové role a služby: souborový a tiskový server, webový server (IIS), řadič domény. Viz [verze, instalace a role](/it/operacni-systemy/52-windows-server-verze-instalace-a-role/).

**Active Directory (AD)** je adresářová služba pro centrální správu uživatelů, počítačů a oprávnění.

- **Doménový řadič** – server, na kterém AD běží a který ověřuje přihlášení do domény.
- **Doména** – logický celek uživatelů a počítačů spravovaných centrálně.
- **Organizační jednotka (OU)** – hierarchické uspořádání (např. podle oddělení), na které se hromadně aplikují politiky.
- **Skupinová politika** – nastavení vynucená na počítačích a uživatelích v OU, viz [GPO](/it/operacni-systemy/14-gpo-zasady-skupiny/).

### Správa přes PowerShell

**PowerShell** je skriptovací prostředí a jazyk pro správu Windows. Příkazy (**cmdlety**) mají tvar `Sloveso-Podstatné_jméno`:

```powershell
Get-Service                       # seznam služeb a jejich stav
Restart-Service -Name "Spooler"   # restart služby (zde tiskové fronty)
Get-Process                       # běžící procesy
Get-ChildItem C:\                 # obsah složky (obdoba dir)
New-ADUser -Name "Jan Novak" -SamAccountName "jnovak" -Enabled $true   # nový uživatel v AD
Get-ADUser -Filter * | Select-Object Name, SamAccountName              # všichni uživatelé domény
Get-EventLog -LogName System -Newest 20    # posledních 20 záznamů systémového logu
```

Výhoda oproti klikání v grafickém rozhraní: **opakovatelnost** (skript lze spustit na desítkách serverů) a **automatizace** rutinních úkolů.

## Otázky k opakování

1. Co znamená `chmod 755`? ||vlastník rwx, skupina a ostatní r-x||
2. K čemu slouží `sudo`? ||spustí příkaz s právy administrátora (root)||
3. Co je Active Directory, doména a OU? ||adresářová služba pro centrální správu; logický celek uživatelů a počítačů; hierarchické uspořádání pro hromadné politiky||
4. Jaký tvar mají příkazy PowerShellu? ||cmdlety `Sloveso-Podstatné_jméno`, např. Get-Service||
5. Jak vypíšete běžící služby a restartujete jednu? ||`Get-Service`, `Restart-Service -Name ...`||
