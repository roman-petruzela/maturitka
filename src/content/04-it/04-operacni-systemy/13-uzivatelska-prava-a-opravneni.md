---
title: "Uživatelská práva a oprávnění"
order: 13
source: "osy/uživatelská_práva_a_oprávnění.pdf"
---

Windows rozlišují dva pojmy:

| Pojem | Anglicky | Význam | Příklad |
| --- | --- | --- | --- |
| **oprávnění** | permission | přístup k **objektu** určeným způsobem | zápis do souboru NTFS |
| **právo** | right | provedení **systémové akce** | přidat uživatele, změnit systémový čas |

Práva se nastavují v *Místní zásady zabezpečení – Přiřazení uživatelských práv*, přidělují se skupinám (Administrators, Users, Guests…).

## Vestavěné systémové skupiny

Nejdou upravovat, uživatelé se do nich zařazují automaticky:

- **Everyone** – úplně všichni,
- **Authenticated Users** – ověření uživatelé,
- **Creator Owner** – uživatel, který zdroj vytvořil nebo převzal,
- **System, Local Service, Network Service** – služby se systémovými právy.

Své skupiny zjistíš příkazem `whoami /all`. **SID** (Security Identifier) je hodnota, pod kterou OS účet skutečně vede.

## Oprávnění pro soubory a složky

- Fungují jen na **NTFS**, ne na FAT32.
- Oprávnění se **dědí** z nadřazené složky; dědičnost lze zrušit.
- Kdo soubor či složku vytvoří, je **vlastník (owner)** a má **úplné řízení**; vlastnictví může převzít **Administrators**.
- **Odepřít (deny)** je **vždy silnější** než **povolit (allow)**.

**Příklad:** uživatel je ve skupinách *Ucetni* (odepřeno číst) a *Vedeni* (povoleno číst) → **nečte**, deny vyhrává.

Viz i [uživatelské účty a hesla](/it/operacni-systemy/11-uzivatelske-ucty-a-hesla/), [GPO](/it/operacni-systemy/14-gpo-zasady-skupiny/), [práva ve Windows a Linuxu](/it/kyberneticka-bezpecnost/04-sprava-identit-a-rizeni-uctu/#práva-a-oprávnění-ve-windows-a-linuxu).

## Otázky k opakování

1. Jaký je rozdíl mezi právem a oprávněním? ||právo je systémová akce (změna času), oprávnění přístup k objektu (zápis do souboru)||
2. Co je SID? ||identifikátor, pod kterým OS vede uživatele nebo skupinu||
3. Na jakém souborovém systému fungují oprávnění? ||na NTFS||
4. Co je dědičnost oprávnění? ||složka předává svá oprávnění obsahu; lze ji zrušit||
5. Co vyhraje při konfliktu povolit a odepřít? ||odepřít||
