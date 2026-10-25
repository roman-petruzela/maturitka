---
title: "Správa identit a řízení účtů"
order: 4
tags: ["doplněno"]
---

## Princip IAAA

Řízení přístupu ke každému systému stojí na čtyřech krocích:

| Krok | Otázka | Příklad |
| --- | --- | --- |
| **Identifikace** (Identification) | Kdo tvrdíš, že jsi? | zadání uživatelského jména, přiložení karty |
| **Autentizace** (Authentication) | Opravdu jsi to ty? | heslo, otisk prstu, kód z aplikace |
| **Autorizace** (Authorization) | Co smíš dělat? | oprávnění číst složku, právo instalovat programy |
| **Účtování / audit** (Accounting) | Co jsi udělal? | záznam přihlášení, změn souborů a použitých práv v logu |

Accounting umožňuje zpětně zjistit, kdo a kdy co provedl (dohledání incidentu, kontrola zneužití práv); ve Windows ho zajišťuje **auditování** zapnuté zásadami skupiny a zapisované do **Prohlížeče událostí** (protokol Zabezpečení), v Linuxu logy v `/var/log` (např. `auth.log`) a `journalctl`. Centrálně pro síťová zařízení a VPN zajišťují AAA protokoly **RADIUS** a TACACS+.

## Autentizace, autorizace, identifikace

- Identifikace – proces, kterým subjekt (uživatel, zařízení) sděluje systému, kým je (např. zadání uživatelského jména); pouze tvrzení identity, bez ověření
- Autentizace (ověření identity) – proces ověření, že subjekt skutečně je tím, za koho se vydává; probíhá pomocí ověřovacích faktorů
	- Něco, co uživatel zná – heslo, PIN
	- Něco, co uživatel má – čipová karta, mobilní telefon (OTP kód)
	- Něco, čím uživatel je – biometrie (otisk prstu, obličej)
	- Vícefaktorové ověření (MFA/2FA) – kombinace alespoň dvou různých faktorů pro vyšší bezpečnost
- Autorizace – proces přidělení a kontroly oprávnění, tedy určení, k čemu má již ověřený uživatel přístup a jaké akce může provádět (např. právo číst, zapisovat, mazat)
- Rozlišení pojmů – identifikace odpovídá na otázku „kdo tvrdíš, že jsi?“, autentizace na otázku „opravdu jsi to ty?“ (ověření pravosti tvrzení), autorizace na otázku „co smíš dělat?“ (přidělení práv až po úspěšné autentizaci); typická posloupnost je identifikace → autentizace → autorizace

### Hashování hesel

- Heslo se do databáze nikdy neukládá v čitelné podobě (plaintext) – pokud by došlo k úniku databáze, útočník by okamžitě znal hesla všech uživatelů; místo hesla se ukládá jeho **hash** (otisk)
- Hash – jednosměrná funkce, která z hesla vytvoří pevně dlouhý řetězec znaků; ze samotného hashe není možné heslo zpětně spočítat, dá se jen zkusit uhodnout heslo a spočítat, jestli dá stejný hash
- **Solení** (salt) – k heslu se před hashováním přidá náhodný řetězec (jiný pro každého uživatele); zabrání to tomu, aby dva uživatelé se stejným heslem měli v databázi stejný hash, a znemožní to použití předpočítaných tabulek hashů (tzv. rainbow tables) k prolomení hesla

```php
// registrace – uložení nového hesla
$heslo = $_POST['heslo'];
$hash = password_hash($heslo, PASSWORD_DEFAULT);   // funkce si sůl vygeneruje a přidá sama
$stmt = mysqli_prepare($spojeni, "INSERT INTO uzivatele (jmeno, heslo_hash) VALUES (?, ?)");
mysqli_stmt_bind_param($stmt, "ss", $jmeno, $hash);
mysqli_stmt_execute($stmt);

// přihlášení – ověření zadaného hesla proti uloženému hashi
$zadaneHeslo = $_POST['heslo'];
$radek = mysqli_fetch_assoc(mysqli_query($spojeni, "SELECT heslo_hash FROM uzivatele WHERE jmeno = '$jmeno'"));

if (password_verify($zadaneHeslo, $radek['heslo_hash'])) {
    echo "Přihlášení úspěšné.";
} else {
    echo "Špatné heslo.";
}
```
- `password_hash()` v PHP použije moderní hashovací algoritmus (bcrypt) a sůl přidá automaticky; `password_verify()` porovná zadané heslo s uloženým hashem, aniž by bylo kdy potřeba heslo dešifrovat zpátky – ověřuje se tím, že hash nově zadaného hesla vychází stejně jako ten uložený

## Správa identit a řízení účtů

- Digitální identita – soubor údajů a atributů, které v digitálním prostředí jednoznačně reprezentují osobu nebo zařízení (uživatelský účet, certifikát, přihlašovací údaje)
- Zásady správy a ochrany digitální identity
	- Používání unikátních a silných hesel pro každou službu, ideálně ve správci hesel
	- Zapnutí vícefaktorového ověření všude, kde je dostupné
	- Pravidelná kontrola aktivních relací a propojených aplikací
	- Princip minimálních oprávnění – účet by měl mít jen práva nezbytná pro danou činnost
- Konfigurace lokální autentizace a autorizace na serveru
	- Vytváření uživatelských účtů a skupin, nastavení hesel a jejich politiky (minimální délka, komplexnost, expirace, historie hesel)
	- Přiřazení oprávnění k souborům, složkám a službám na základě uživatele nebo skupiny (řízení přístupu)
	- Nastavení účtů se zvýšenými právy (administrátor/root) odděleně od běžného provozního účtu, aby se omezilo riziko zneužití
	- Auditní záznamy přihlášení a změn oprávnění pro pozdější kontrolu

## Princip nejmenších oprávnění (least privilege)

- Každý uživatel, program i služba dostane **jen ta práva, která nezbytně potřebuje** ke své práci, a jen na dobu, po kterou je potřebuje
- Omezuje dopad chyby i útoku – malware spuštěný běžným uživatelem nemůže změnit systém; ukradený účet účetní nemá přístup k serverům
- V praxi
	- správce pracuje běžně pod **obyčejným účtem** a administrátorský používá jen pro správu (ve Windows **UAC** – Řízení uživatelských účtů – vyžádá potvrzení, v Linuxu `sudo` místo trvalého přihlášení jako `root`)
	- práva se přidělují **skupinám**, ne jednotlivcům (role-based access control, **RBAC** – role „učitel“, „žák“, „účetní“); při změně pozice se uživatel jen přesune do jiné skupiny
	- služby běží pod vlastními účty s omezenými právy
	- pravidelná **revize účtů a práv** – zrušení účtů odešlých zaměstnanců, odebrání práv, která už nejsou potřeba
- Související principy – **oddělení povinností** (separation of duties: jeden člověk nesmí sám schválit i provést citlivou operaci, např. platbu), **need to know** (přístup jen k informacím potřebným pro práci), **Zero Trust** (nikomu se automaticky nedůvěřuje jen proto, že je ve vnitřní síti)

## Práva a oprávnění ve Windows a Linuxu

- Windows – oprávnění NTFS (čtení, zápis, změna, úplné řízení), skupiny Administrators, Users, Guests; *odepřít* je silnější než *povolit*, oprávnění se dědí – viz [uživatelská práva a oprávnění](/it/operacni-systemy/13-uzivatelska-prava-a-opravneni/)
- Linux – práva `r`, `w`, `x` pro vlastníka, skupinu a ostatní (`chmod 750 soubor`, `chown uzivatel:skupina soubor`), administrátorem je `root`, dočasná práva přes `sudo`
- Vzdálený přístup – šifrované protokoly SSH a RDP místo nešifrovaného Telnetu, přihlašování klíčem a vícefaktorové ověření – viz [vzdálený přístup](/it/operacni-systemy/53-vzdaleny-pristup-telnet-ssh-rdp/)
