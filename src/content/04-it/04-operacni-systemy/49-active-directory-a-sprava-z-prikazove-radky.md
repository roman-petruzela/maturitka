---
title: "Active Directory a správa z příkazové řádky"
order: 201
---

## Co je Active Directory

**Active Directory (AD)** = adresářová služba Microsoftu: **centrální databáze** uživatelů, počítačů, skupin a dalších objektů + mechanismus, který podle ní řídí **přihlašování a oprávnění** v celé organizaci.

![Strom domény: doména s řadičem domény, organizační jednotky Učitelé a Počítače, v nich podjednotky, uživatelské účty a počítače; GPO se přiřazují na OU](/images/content/it/operacni-systemy/active-directory/struktura.webp)

- **Doména** – logický celek uživatelů a počítačů spravovaných centrálně, společná politika hesel, oprávnění a zabezpečení. Počítač v doméně přebírá přihlašování z domény místo lokálních účtů.
- **Doménový řadič (Domain Controller)** – server s rolí **AD DS**; ověřuje přihlášení uživatelů a počítačů.
- **Organizační jednotka (OU)** – hierarchické uspořádání (třída, oddělení, pobočka); umožní hromadně aplikovat **GPO** a delegovat správu.
- **Doménový účet** – platí v celé doméně, přihlásí se s ním na libovolném doménovém počítači.
- **Doménová skupina** – sdružuje účty; podle rozsahu (lokální doménová, globální, univerzální) a typu (bezpečnostní × distribuční).

### Cestovní (roamingový) profil a síťová domovská složka

Pro uživatele v doméně je běžné centrálně nastavit, kde se mu ukládá jeho pracovní prostředí:

- **Cestovní profil (roaming profile)** — profil uživatele (plocha, nastavení, dokumenty) se neukládá jen na jednom počítači, ale na server; uživatel tak vidí stejnou plochu a nastavení, ať se přihlásí na kterémkoli doménovém PC.
- **Síťová domovská složka** — uživateli se automaticky namapuje síťová složka jako lokální disk (např. Z:), do které se ukládají jeho soubory a která je fyzicky uložená na serveru.
- **Přihlašovací skript** — dávkový soubor (.bat) nebo PowerShell skript, který se spustí automaticky při přihlášení uživatele (typicky mapuje síťové disky, spouští programy nebo nastavuje proměnné prostředí).

## Správa Active Directory z příkazové řádky

Windows Server nabízí pro správu AD sadu příkazů `ds*`, kterými lze automatizovat hromadné operace (vytvoření mnoha uživatelů najednou apod.) — v grafickém rozhraní by to bylo zdlouhavé.

```
dsadd user "cn=JiriBabica,ou=kuchari,dc=domena,dc=local" -disabled no
```

`dsadd` vytvoří nový objekt (uživatele, skupinu, OU...) — argumentem je tzv. *distinguished name* objektu (cn = common name, ou = organizational unit, dc = domain component).

```
dsmod user "cn=JiriBabica,ou=kuchari,dc=domena,dc=local" -pwd Student25 -mustchpwd yes
dsmod group "cn=chefs,ou=kuchari,dc=domena,dc=local" -addmbr "cn=JiriBabica,ou=kuchari,dc=domena,dc=local"
```

`dsmod` upravuje existující objekt — např. nastaví heslo, vynutí jeho změnu při příštím přihlášení, nebo přidá uživatele do skupiny.

```
dsquery user -name "Jiri*"
```

`dsquery` vyhledává objekty podle zadaných kritérií.

## Proměnné a skripty v cmd

Dávkové soubory (.bat) umožňují automatizovat opakující se posloupnost příkazů. Základem je práce s proměnnými:

```bat
set jmeno=Jan
echo Jmenuji se %jmeno%

set /p jmeno=Zadej své jméno:
echo Ahoj, %jmeno%!
```

- `set název=hodnota` vytvoří proměnnou a naplní ji hodnotou
- `set /p název=text` vypíše text a čeká na hodnotu zadanou z klávesnice
- `%název%` uvnitř příkazu se nahradí aktuální hodnotou proměnné

Skript pak může kombinovat `set` s příkazy `dsadd`/`dsmod`, takže vytvoří uživatele podle hodnot zadaných při spuštění, místo aby byly napevno zapsané ve skriptu.

## Cvičení

**1. Organizační jednotka a skupina.** V doméně vytvořte organizační jednotku `kitchen`, v ní organizační jednotky `kuchari` a `cisnici`. V organizační jednotce `kuchari` vytvořte uživatelskou skupinu `chefs` (místní doménová, se zabezpečením).

**2. Uživatel přes dsadd.** Pomocí příkazu `dsadd user` vytvořte do organizační jednotky `kuchari` uživatele `PremekForejt`: křestní jméno Premek, příjmení Forejt, SamAccountName `premek.forejt`, User Principal Name `premek.forejt@domain.local`, heslo `Student25` (platné stále). Vytvořte složku `C:\Home_chefs` pro domovské složky kuchařů a vhodně ji nasdílejte. Pomocí `dsmod user` zajistěte, aby měl uživatel domovskou složku v `C:\Home_chefs` mapovanou jako disk Z:, a přidejte ho příkazem `dsmod group` do skupiny `chefs`.

**3. Skript s proměnnými.** Vytvořte skript, který se zeptá na jméno, příjmení a heslo uživatele a poté vytvoří uživatele v OU `kuchari` s domovskou složkou (mapovanou jako Z:) a cestovním profilem (ve složce `C:\profily_chefs`, kterou je třeba vytvořit předem), a přidá ho do skupiny `chefs`.

**4. Aktivní organizační jednotka — herci.** V Active Directory vytvořte organizační jednotku `herci`, v ní uživatelskou skupinu `actors` a uživatele `albert.cuba` (přidejte ho do skupiny `actors`). Uživatel bude mít cestovní profil (`C:\pro_her`) a síťovou domovskou složku jako disk Z: (`C:\dom_her`). Vytvořte složku `C:\Divadlo` a nasdílejte ji tak, aby v ní členové skupiny `actors` mohli jen číst. Uživateli `albert.cuba` přiřaďte přihlašovací skript `mir.bat`, který namapuje `M:\Divadlo` jako disk M:. Do OU `herci` vytvořte i uživatele `robin.fero` s povinným (mandatory) profilem.

**5. Hromadné skripty.** Vytvořte skript `zmena.bat`, který pomocí `dsmod` změní dvěma uživatelům heslo na `Restart12` a vynutí jeho změnu při dalším přihlášení (a do popisu účtu zapíše „heslo změněno"). Vytvořte skript `skupina.bat`, který vytvoří OU `opice` a v ní zabezpečenou místní doménovou skupinu `monkeys`. Vytvořte skript `slozka.bat`, který vytvoří složku `C:\cibule`, odebere jí veškerá zděděná oprávnění a nastaví Administrators – úplné řízení, Monkeys – změna, a nasdílí ji pod názvem `onion` (Everyone – číst, Monkeys – změna).
