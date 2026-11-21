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

## Uživatelská práva

*Ovládací panely – Nástroje pro správu – Místní zásady zabezpečení – Místní zásady – Přiřazení uživatelských práv*.

Vidíme, která práva mají skupiny (i uživatelé): Administrators, Users, Guests, ale i Everyone, LOCAL SERVICE, NETWORK SERVICE… S přidělováním a odebíráním práv opatrně.

## Vestavěné systémové skupiny

Nejdou upravovat; uživatelé se do nich zařazují automaticky:

- **Everyone** – úplně všichni (sdílení souborů a složek),
- **Authenticated Users** – ověření uživatelé (účet na počítači nebo v doméně),
- **Creator Owner** – uživatel, který zdroj vytvořil nebo převzal,
- **System, Local Service, Network Service** – služby se systémovými právy.

Své skupiny zjistíš příkazem **`whoami /all`** – účet bývá i v Everyone, Users, INTERACTIVE, Authenticated Users, LOCAL… Pod jménem je **SID** (Security Identifier) – hodnota, pod kterou OS účet skutečně vede.

## Oprávnění pro soubory a složky

- **Nefunguje na FAT32**, jen na **NTFS** (dnes téměř všude).
- Oprávnění se **dědí** z nadřazené složky; vlastní se musí často nejdřív **zrušit dědičnost** (*inheritance*).
- Kdo soubor či složku vytvoří, je **vlastník (owner)** – má **úplné řízení** bez ohledu na přidělená oprávnění; vlastnictví mohou převzít **Administrators**.
- **Odepřít (deny)** je **vždy silnější** než **povolit (allow)**.

**Příklad:** uživatel *pepa* je ve skupinách *Ucetni* a *Vedeni*. Ucetni mají **odepřeno** číst, Vedeni mají **povoleno** číst → *pepa* **nečte** (deny vyhrává).

Viz i [uživatelské účty a hesla](/it/operacni-systemy/11-uzivatelske-ucty-a-hesla/), [GPO](/it/operacni-systemy/14-gpo-zasady-skupiny/).
