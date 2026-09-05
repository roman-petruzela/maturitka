---
title: "Uživatelské profily"
order: 12
source: "osy/Uživatelské_profily.pdf"
---
## Uživatelský profil

Uživatelský profil obsahuje všechna nastavení a soubory pracovního prostředí uživatele. Profil se vytváří při prvním přihlášení uživatele. Nastavení uživatelského profilu jsou uložena ve dvou místech:

1. Ve složce C:\Users

2. V systémovém registru

## Předinstalované profily

1. **Veřejné** – Tento profil doplňuje profil každého uživatele. Co je zde nastaveno se projeví všem uživatelům. Do složky Veřejná plocha mohou zapisovat pouze členové skupin Administrators a Power Users (skupina Power Users se dnes již téměř nepoužívá).

2. **Default** – Profil, který se zkopíruje do profilu uživatele při prvním přihlášení. Změny mohou provádět pouze členové skupiny Administrators.

## Typy profilů

1. **Místní (Local)** – Vytvoří se při prvním přihlášení uživatele. Změny v profilu se uloží pouze v místním PC. Tento profil máte zřejmě na počítači u Vás doma.

2. **Cestovní (Roaming)** – Je uložen na síťovém disku serveru a je dostupný na libovolném PC v síti. Místní kopii uloží při prvním přihlášení k PC. Změna v profilu se uloží místně a po odhlášení uživatele se aktualizuje profil uložený na disku serveru. V případě nedostupného cestovního profilu se použije uložený místní profil, pokud tam není, tak dočasný profil. Tento profil máte ve škole.

3. **Povinný (Mandatory)** – Může jej měnit pouze Administrator. Narozdíl od cestovního profilu není povinný profil po odhlášení aktualizován. Uživatel může provádět změny, ale po odhlášení jsou zahozeny.

4. **Dočasný (Temporary)** – Použije se v případě nedostupného cestovního, či povinného profilu. Uživatel se přihlásí pod univerzálním profilem.
