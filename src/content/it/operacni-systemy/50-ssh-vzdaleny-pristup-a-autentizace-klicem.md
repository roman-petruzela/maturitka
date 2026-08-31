---
title: "SSH — vzdálený přístup a autentizace klíčem"
order: 202
tags: ["doplněno"]
---

_Doplněný obsah — rozšiřuje ŠVP kapitolu "Operační systém Linux" (3. ročník) o vzdálenou správu přes SSH._

## Co je SSH

**SSH (Secure Shell)** je síťový protokol pro bezpečné vzdálené přihlášení a ovládání počítače přes příkazovou řádku (nebo přenos souborů) přes nezabezpečenou síť — celá komunikace je šifrovaná, takže ani hesla ani přenášená data nejdou po cestě přečíst.

```bash
ssh uzivatel@adresa_serveru
```

Ve výchozím stavu se SSH server po zadání příkazu zeptá na heslo uživatelského účtu. To má dvě slabiny: heslo se dá uhodnout/prolomit hrubou silou (brute force) a při každém přihlášení se musí ručně zadávat.

## Autentizace pomocí klíče

Alternativou k heslu je autentizace **dvojicí asymetrických klíčů**:

- **soukromý klíč (private key)** — zůstává jen na klientovi (např. na notebooku uživatele), nikdy se nikam neposílá, je potřeba ho chránit (heslem/passphrase a správnými oprávněními souboru)
- **veřejný klíč (public key)** — nahraje se na server do souboru `~/.ssh/authorized_keys` daného uživatelského účtu; veřejný klíč sám o sobě k přihlášení nestačí

Při přihlašování server pošle klientovi výzvu zašifrovanou veřejným klíčem, kterou dokáže rozšifrovat jen ten, kdo vlastní odpovídající soukromý klíč — tím se ověří identita bez toho, aby se kdekoliv po síti posílalo heslo.

```bash
ssh-keygen -t ed25519          # vygeneruje pár klíčů (soukromý + veřejný)
ssh-copy-id uzivatel@server    # zkopíruje veřejný klíč na server do authorized_keys
```

Výhody oproti heslu:

- klíč se prakticky nedá uhodnout hrubou silou (na rozdíl od krátkého/slabého hesla)
- přihlášení nevyžaduje ruční zadávání hesla (vhodné i pro automatizované skripty/zálohy)
- lze zcela vypnout přihlašování heslem (`PasswordAuthentication no` v `/etc/ssh/sshd_config`) a povolit jen přihlášení klíčem — pak útočník bez klíče nemá šanci, i kdyby heslo znal

## Cvičení

Na Xubuntu pracuje uživatelka `alex` (má tam svůj účet). Chceme uživatelce `alex` povolit přihlašování na Ubuntu pomocí SSH, ale tak, aby místo hesla používala klíč (asymetrické šifrování). Na Ubuntu jí vytvořte účet dle firemních zásad (`alex.novakova`). Jak zajistíte, aby se mohla přihlašovat pouze pomocí klíčů (a ne heslem)?

_Nápověda: vygenerujte klíčový pár na klientovi, veřejný klíč nahrajte do `authorized_keys` účtu `alex.novakova` na serveru, a v konfiguraci SSH serveru vypněte přihlašování heslem._
