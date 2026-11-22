---
title: "Uživatelské profily"
order: 12
source: "osy/Uživatelské_profily.pdf"
---

**Uživatelský profil** obsahuje nastavení a soubory pracovního prostředí uživatele: plochu, dokumenty, nabídku Start, nastavení aplikací a prohlížeče, síťové jednotky a tiskárny. Vytvoří se při prvním přihlášení a je uložen na dvou místech:

1. ve složce `C:\Users\<jméno>` (Plocha, Dokumenty, skrytá `AppData` s nastavením aplikací),
2. v registru – větev `HKEY_CURRENT_USER` je v souboru **`NTUSER.DAT`** v kořeni profilu.

**Předinstalované profily:** **Veřejný** (Public) doplňuje profil každého uživatele, **Default** se zkopíruje novému uživateli při prvním přihlášení (úpravou ho správce nastaví všem novým uživatelům).

## Typy profilů

| Profil | Kde je uložen | Změny po odhlášení |
| --- | --- | --- |
| **místní** (Local) | na počítači | zůstanou jen na tomto počítači |
| **cestovní** (Roaming) | na serveru + místní kopie | nahrají se na server, profil je dostupný na každém PC v síti |
| **povinný** (Mandatory) | na serveru | zahodí se |
| **dočasný** (Temporary) | na počítači | smažou se |

- **Povinný** profil je cestovní profil, který může měnit jen správce; vznikne přejmenováním `NTUSER.DAT` na **`NTUSER.MAN`**. Hodí se pro učebny a kiosky, kde mají mít všichni stejné prostředí.
- **Dočasný** profil se použije, když je cestovní nebo povinný profil nedostupný (problém v síti).
- **Nevýhoda cestovního profilu:** velký profil se při každém přihlášení a odhlášení přenáší po síti. Proto se složky **přesměrují** na server (*Folder Redirection* přes [GPO](/it/operacni-systemy/14-gpo-zasady-skupiny/)) nebo se používá domovská složka.

## Domovská složka

**Domovská složka** (home folder) je složka uživatele na serveru, kam ukládá svou práci. Nekopíruje se při přihlášení, uživatel ji vidí jako **síťovou jednotku** (např. `H:`) z libovolného počítače v doméně. Výhodou je snadné zálohování a omezení místa [diskovými kvótami](/it/operacni-systemy/18-stinove-kopie-svazku-pevne-odkazy-diskove-kvoty/).

## Nastavení v doméně

V konzoli **Uživatelé a počítače služby Active Directory** se ve vlastnostech uživatele na kartě **Profil** vyplní **cesta k profilu** (`\\server\profily$\%username%`) a **domovská složka** (jednotka `H:` připojená k `\\server\domovske$\%username%`). Proměnná `%username%` se nahradí přihlašovacím jménem; `$` na konci názvu sdílené složky ji skryje v procházení sítě. Viz [Active Directory](/it/operacni-systemy/49-active-directory-a-sprava-z-prikazove-radky/).

## Otázky k opakování

1. Co obsahuje uživatelský profil a kde je uložen? ||nastavení a soubory uživatele; složka `C:\Users\<jméno>` a registr v `NTUSER.DAT`||
2. Jaké typy profilů znáte? ||místní, cestovní, povinný, dočasný||
3. Čím se liší cestovní a povinný profil? ||cestovní se po odhlášení aktualizuje na serveru; povinný (NTUSER.MAN) se neukládá, změny se zahodí||
4. Co je domovská složka a čím se liší od profilu? ||složka uživatele na serveru jako síťový disk; soubory se nekopírují při přihlášení, zůstávají na serveru||
5. Proč se u cestovního profilu používá přesměrování složek? ||velký profil by zpomaloval přihlašování, proto se dokumenty ukládají přímo na server||
