---
title: "Uživatelské profily"
order: 12
source: "osy/Uživatelské_profily.pdf"
---
## Uživatelský profil

Uživatelský profil obsahuje všechna nastavení a soubory pracovního prostředí uživatele — plochu, dokumenty, nabídku Start, nastavení aplikací a prohlížeče, mapované síťové jednotky a tiskárny. Profil se vytváří při prvním přihlášení uživatele. Nastavení uživatelského profilu jsou uložena ve dvou místech:

1. Ve složce `C:\Users` (každý uživatel má svou podsložku, např. `C:\Users\jan`, s podsložkami Plocha, Dokumenty, Stažené soubory a skrytou `AppData` s nastavením aplikací).
2. V systémovém registru — uživatelská část registru (větev `HKEY_CURRENT_USER`) je uložena v souboru **`NTUSER.DAT`** v kořeni profilu.

## Předinstalované profily

1. **Veřejné** (Public) – Tento profil doplňuje profil každého uživatele. Co je zde nastaveno, se projeví všem uživatelům. Do složky Veřejná plocha mohou zapisovat pouze členové skupin Administrators a Power Users (skupina Power Users se dnes již téměř nepoužívá).
2. **Default** – Profil, který se zkopíruje do profilu uživatele při prvním přihlášení. Změny mohou provádět pouze členové skupiny Administrators. Úpravou výchozího profilu tak správce nastaví prostředí všem novým uživatelům.

## Typy profilů

1. **Místní (Local)** – Vytvoří se při prvním přihlášení uživatele. Změny v profilu se uloží pouze v místním PC. Na jiném počítači má uživatel jiný (nový) profil. Tento profil máte zřejmě na počítači u Vás doma.
2. **Cestovní (Roaming)** – Je uložen na síťovém disku serveru a je dostupný na libovolném PC v síti. Místní kopii uloží při prvním přihlášení k PC. Změna v profilu se uloží místně a po odhlášení uživatele se aktualizuje profil uložený na disku serveru. V případě nedostupného cestovního profilu se použije uložený místní profil, pokud tam není, tak dočasný profil. Tento profil máte ve škole.
3. **Povinný (Mandatory)** – Cestovní profil, který může měnit pouze Administrator. Narozdíl od cestovního profilu není povinný profil po odhlášení aktualizován. Uživatel může provádět změny, ale po odhlášení jsou zahozeny. Povinným se profil stane přejmenováním souboru `NTUSER.DAT` na **`NTUSER.MAN`**. Hodí se pro učebny, kiosky a sdílené počítače, kde má mít každý stejné prostředí.
4. **Dočasný (Temporary)** – Použije se v případě nedostupného cestovního či povinného profilu (např. problém v síti). Uživatel se přihlásí pod univerzálním profilem; po odhlášení se dočasný profil smaže i se změnami.

| Profil | Kde je uložen | Změny po odhlášení |
| --- | --- | --- |
| místní | na počítači | zůstanou na tomto počítači |
| cestovní | na serveru (+ místní kopie) | nahrají se na server |
| povinný | na serveru | zahodí se |
| dočasný | na počítači | smažou se |

**Nevýhoda cestovního profilu:** velký profil (plná plocha, Dokumenty) se při každém přihlášení a odhlášení přenáší po síti, přihlašování je pomalé. Proto se dokumenty ukládají do **domovské složky** nebo se složky profilu **přesměrují** na server (*Folder Redirection* pomocí [GPO](/it/operacni-systemy/14-gpo-zasady-skupiny/)) a v profilu zůstává jen nastavení.

## Domovská složka

**Domovská složka** (home folder) je složka uživatele na serveru, do které si ukládá svou práci. Lze ji přiřadit každému uživateli; hodí se zejména tomu, kdo pracuje na více počítačích v doméně — ke svým souborům se dostane odkudkoli v síti. Na rozdíl od profilu se domovská složka nekopíruje při přihlášení — soubory zůstávají na serveru a uživatel ji vidí jako **síťovou jednotku** (např. `H:`). Výhodou je i snadné zálohování a omezení místa [diskovými kvótami](/it/operacni-systemy/18-stinove-kopie-svazku-pevne-odkazy-diskove-kvoty/).

## Nastavení v doméně

V konzoli **Uživatelé a počítače služby Active Directory** se ve vlastnostech uživatele na kartě **Profil** vyplní:

- **Cesta k profilu** — např. `\\server\profily$\%username%` (cestovní profil; `$` na konci názvu sdílené složky ji skryje v procházení sítě),
- **Domovská složka** — *Připojit* jednotku `H:` k `\\server\domovske$\%username%`; složka se vytvoří automaticky a uživatel k ní dostane úplné řízení.

Proměnná `%username%` se nahradí přihlašovacím jménem, takže lze nastavit více uživatelů najednou. Sdílená složka pro profily musí mít oprávnění, která uživatelům dovolí vytvořit si vlastní podsložku. Viz i [Active Directory](/it/operacni-systemy/49-active-directory-a-sprava-z-prikazove-radky/).
