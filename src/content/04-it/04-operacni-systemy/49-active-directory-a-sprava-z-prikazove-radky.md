---
title: "Active Directory a správa z příkazové řádky"
order: 201
---

## Co je Active Directory

**Active Directory (AD)** je adresářová služba Microsoftu: **centrální databáze** uživatelů, počítačů, skupin a dalších objektů, podle které se řídí **přihlašování a oprávnění** v celé organizaci.

![Strom domény: doména s řadičem domény, organizační jednotky Učitelé a Počítače, v nich podjednotky, uživatelské účty a počítače; GPO se přiřazují na OU](/images/content/it/operacni-systemy/active-directory/struktura.webp)

- **Doména** – logický celek uživatelů a počítačů spravovaných centrálně (společná politika hesel, oprávnění a zabezpečení). Počítač v doméně přebírá přihlašování z domény místo lokálních účtů.
- **Doménový řadič (Domain Controller)** – server s rolí **AD DS**, ověřuje přihlášení uživatelů a počítačů.
- **Organizační jednotka (OU)** – hierarchické uspořádání (třída, oddělení, pobočka); umožní hromadně použít **GPO** ([zásady skupiny](/it/operacni-systemy/14-gpo-zasady-skupiny/)) a delegovat správu.
- **Doménový účet** – platí v celé doméně, přihlásí se s ním na libovolném doménovém počítači.
- **Doménová skupina** – sdružuje účty; podle rozsahu (lokální doménová, globální, univerzální) a typu (bezpečnostní × distribuční).

## Centrální nastavení pracovního prostředí

- **Cestovní profil** – profil (plocha, nastavení) se ukládá na server, takže uživatel má stejné prostředí na kterémkoli doménovém PC ([profily](/it/operacni-systemy/12-uzivatelske-profily/)).
- **Síťová domovská složka** – automaticky se namapuje jako disk (např. Z:), soubory jsou fyzicky na serveru.
- **Přihlašovací skript** – `.bat` nebo PowerShell, spustí se při přihlášení (mapuje disky, spouští programy).

## Správa z příkazové řádky

Příkazy `ds*` automatizují hromadné operace; objekt se zadává svým **distinguished name** (cn = common name, ou = organizační jednotka, dc = doména).

| Příkaz | Účel |
| --- | --- |
| `dsadd` | vytvoří objekt (uživatele, skupinu, OU) |
| `dsmod` | upraví objekt (heslo, přidání do skupiny) |
| `dsquery` | vyhledá objekty |

```
dsadd user "cn=jan.novak,ou=ucitele,dc=domena,dc=local" -pwd Heslo123 -mustchpwd yes
dsmod group "cn=ucitele,ou=ucitele,dc=domena,dc=local" -addmbr "cn=jan.novak,ou=ucitele,dc=domena,dc=local"
dsquery user -name "jan*"
```

Dávkové soubory (`.bat`) s proměnnými (`set jmeno=Jan`, `set /p jmeno=Zadej jméno:`, `%jmeno%`) umožní vytvořit uživatele podle hodnot zadaných při spuštění.

## Otázky k opakování

1. Co je Active Directory? ||adresářová služba Microsoftu, centrální databáze uživatelů, počítačů a skupin pro přihlašování a oprávnění||
2. Co je doména a doménový řadič? ||doména je centrálně spravovaný celek; doménový řadič je server s AD DS, který ověřuje přihlášení||
3. K čemu je organizační jednotka (OU)? ||strukturuje objekty, dá se na ni použít GPO a delegovat správa||
4. Co je cestovní profil a síťová domovská složka? ||profil uložený na serveru dostupný z každého PC; síťová složka namapovaná jako disk||
5. K čemu slouží dsadd, dsmod a dsquery? ||vytvoření, úprava a vyhledání objektů AD z příkazové řádky||
