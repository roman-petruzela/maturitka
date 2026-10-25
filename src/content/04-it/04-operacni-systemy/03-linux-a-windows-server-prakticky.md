---
title: "Praktická správa Linuxu a Windows Serveru"
order: 200
tags: ["doplněno"]
---

## Linux – práce v terminálu

- Terminál (shell) – textové rozhraní pro ovládání systému příkazy; na rozdíl od grafického prostředí umožňuje rychlé, přesné a snadno opakovatelné/skriptovatelné operace
- Základní pohyb v souborovém systému a práce se soubory

```bash
pwd                 # vypíše aktuální adresář (print working directory)
ls -la               # vypíše obsah adresáře včetně skrytých souborů a s detaily (práva, velikost, datum)
cd /var/log          # přejde do adresáře
mkdir novy_adresar    # vytvoří nový adresář
rm -r stara_slozka    # smaže adresář včetně obsahu (-r = rekurzivně)
cp soubor.txt zaloha.txt        # zkopíruje soubor
mv soubor.txt /home/uzivatel/   # přesune (nebo přejmenuje) soubor
cat soubor.txt        # vypíše celý obsah souboru na obrazovku
less soubor.txt        # zobrazí obsah souboru po stránkách (pro dlouhé soubory)
grep "chyba" log.txt   # vyhledá řádky obsahující zadaný text
```

- Oprávnění souborů (`chmod`) – u každého souboru se nastavují práva zvlášť pro vlastníka, skupinu a ostatní (čtení `r`, zápis `w`, spouštění `x`); zapisují se buď symbolicky, nebo číselně (čtení=4, zápis=2, spouštění=1, hodnoty se sečtou)

```bash
chmod 755 skript.sh
# vlastník: 7 = rwx (čte, zapisuje, spouští)
# skupina:  5 = r-x (čte, spouští)
# ostatní:  5 = r-x (čte, spouští)

chmod 644 dokument.txt
# vlastník: 6 = rw- (čte, zapisuje)
# skupina a ostatní: 4 = r-- (jen čtou)

chown uzivatel:skupina soubor.txt   # změní vlastníka a skupinu souboru
```

- Procesy a služby

```bash
ps aux               # vypíše všechny běžící procesy
top                   # průběžně zobrazuje procesy seřazené podle vytížení (interaktivní)

sudo systemctl status apache2   # zjistí stav služby (běží/zastavena)
sudo systemctl start apache2    # spustí službu
sudo systemctl stop apache2     # zastaví službu
sudo systemctl enable apache2   # nastaví, aby se služba spouštěla automaticky při startu systému
```

- Instalace balíčků (na distribucích odvozených od Debianu, např. Ubuntu)

```bash
sudo apt update              # aktualizuje seznam dostupných balíčků z repozitářů
sudo apt install nginx        # nainstaluje balíček (zde webserver nginx)
sudo apt remove nginx         # odinstaluje balíček
```

- `sudo` (superuser do) – spustí příkaz s právy administrátora (root); většina správcovských operací (instalace, spouštění služeb, změna vlastníka) ho vyžaduje, běžný uživatelský účet je bez něj omezený

## Windows Server

- Windows Server – varianta Windows určená pro provoz na serveru, poskytuje síťové role a služby, které desktopový Windows nemá (nebo jen v omezené míře) – souborový server, tiskový server, webový server (IIS), řadič domény
- **Active Directory (AD)** – adresářová služba pro centrální správu uživatelů, počítačů a oprávnění v celé organizaci
	- **Doménový řadič (Domain Controller)** – server, na kterém AD běží a který ověřuje přihlášení uživatelů do domény
	- **Doména** – logický celek uživatelů a počítačů spravovaných centrálně přes AD, s jednotnou politikou hesel a oprávnění
	- **Organizační jednotka (OU, Organizational Unit)** – způsob, jak si v AD hierarchicky uspořádat uživatele a počítače (např. podle oddělení/tříd), aby se na ně daly hromadně aplikovat stejné politiky
	- **Skupinová politika (Group Policy)** – sada nastavení (bezpečnostní politiky, omezení, instalace software), která se centrálně vynutí na všechny počítače/uživatele v dané OU

### Správa přes PowerShell

PowerShell je skriptovací prostředí a jazyk pro správu Windows (obdoba shellu v Linuxu), příkazy (cmdlety) mají jednotný tvar `Sloveso-Podstatné_jméno`:

```powershell
Get-Service                       # vypíše seznam všech služeb a jejich stav
Get-Service -Name "Spooler"       # vypíše konkrétní službu (např. tiskovou frontu)
Restart-Service -Name "Spooler"   # restartuje danou službu

New-ADUser -Name "Jan Novak" -SamAccountName "jnovak" -Enabled $true
# vytvoří nového uživatele v Active Directory

Get-ADUser -Filter * | Select-Object Name, SamAccountName
# vypíše všechny uživatele domény se jménem a přihlašovacím jménem

Get-EventLog -LogName System -Newest 20
# vypíše 20 nejnovějších záznamů ze systémového protokolu (logu) – pro diagnostiku problémů
```

- Výhoda PowerShellu oproti klikání v grafickém rozhraní – opakovatelnost (skript lze spustit na desítkách serverů najednou) a možnost automatizace rutinních správcovských úkolů
