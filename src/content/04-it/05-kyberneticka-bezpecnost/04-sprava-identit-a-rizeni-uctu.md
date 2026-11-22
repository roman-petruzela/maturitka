---
title: "Správa identit a řízení účtů"
order: 4
---

## Princip IAAA

Řízení přístupu ke každému systému stojí na čtyřech krocích:

| Krok | Otázka | Příklad |
| --- | --- | --- |
| **Identifikace** (Identification) | Kdo tvrdíš, že jsi? | zadání uživatelského jména, přiložení karty |
| **Autentizace** (Authentication) | Opravdu jsi to ty? | heslo, otisk prstu, kód z aplikace |
| **Autorizace** (Authorization) | Co smíš dělat? | oprávnění číst složku, právo instalovat programy |
| **Účtování / audit** (Accounting) | Co jsi udělal? | záznam přihlášení, změn souborů a použitých práv v logu |

**Accounting** umožňuje zpětně zjistit, kdo a kdy co provedl: ve Windows **auditování** a Prohlížeč událostí, v Linuxu logy v `/var/log`; centrálně pro síťová zařízení protokoly **RADIUS** a TACACS+.

## Autentizace, autorizace, identifikace

- **Identifikace** – subjekt (uživatel, zařízení) **sdělí, kým je** (uživatelské jméno); jen tvrzení bez ověření.
- **Autentizace** – **ověření**, že subjekt je tím, za koho se vydává. **Faktory:**
	- **něco, co uživatel zná** – heslo, PIN,
	- **něco, co má** – čipová karta, telefon (OTP kód),
	- **něco, čím je** – biometrie (otisk prstu, obličej),
	- **MFA / 2FA** – kombinace **aspoň dvou různých faktorů**.
- **Autorizace** – přidělení a kontrola **oprávnění** už ověřenému uživateli (číst, zapisovat, mazat).
- Posloupnost: **identifikace → autentizace → autorizace** (práva až po úspěšné autentizaci).

### Hashování hesel

- Heslo se **nikdy neukládá čitelně** (plaintext) – při úniku databáze by útočník znal všechna hesla. Ukládá se jeho **hash**.
- **Hash** – jednosměrná funkce, pevně dlouhý řetězec; z hashe heslo nejde spočítat, jen **hádat** a porovnávat hash.
- **Solení (salt)** – k heslu se před hashováním přidá **náhodný řetězec** (jiný pro každého uživatele): dva stejná hesla mají různý hash a nefungují předpočítané tabulky (**rainbow tables**).

V PHP: `password_hash($heslo, PASSWORD_DEFAULT)` (bcrypt, sůl přidá sama) a při přihlášení `password_verify($zadane, $hash)`; heslo se nikdy nedešifruje, porovnává se jen hash.

## Techniky napadení hesel

Útočník hesla **hádá** nebo **získává**. Dělí se na útoky **online** (zkouší se přihlašovací formulář, omezí je zamykání účtu) a **offline** (útočník má ukradené **hashe** a zkouší je bez omezení rychlostí hardwaru).

| Technika | Princip | Obrana |
| --- | --- | --- |
| **Brute force** (hrubá síla) | zkouší **všechny kombinace** znaků | dlouhé heslo, zamykání po neúspěšných pokusech |
| **Slovníkový útok** | zkouší běžná hesla a slova ze **slovníku** (`123456`, `heslo`, upravená slova) | nepoužívat běžná slova, kontrola proti seznamům uniklých hesel |
| **Credential stuffing** | **uniklé** přihlašovací údaje z jedné služby se zkouší na dalších | **unikátní heslo** pro každou službu, MFA |
| **Password spraying** | **jedno** běžné heslo se zkouší na **mnoho účtů** (nespustí zamykání jednoho účtu) | MFA, sledování neúspěšných přihlášení |
| **Rainbow tables** | **předpočítané** tabulky hash → heslo | **solení** hesel |
| **Phishing, keylogger** | heslo se **vylákáním** nebo odposlechem získá přímo | školení, MFA, antivir |
| **Odposlech, MITM** | heslo zachycené v síti | šifrovaný přenos (HTTPS, SSH) |

- Odolnost hesla roste hlavně s **délkou** (dlouhá fráze předčí krátké složité heslo).
- Hash se hádá rychle, pokud je algoritmus **rychlý** (MD5, SHA-1); proto **pomalé hashe se solí** (bcrypt, Argon2, viz [hashování hesel](#hashování-hesel)).
- Nejúčinnější obrana: **MFA**, správce hesel a unikátní hesla.

## Správa identit a řízení účtů

**Digitální identita** = údaje, které v digitálním prostředí jednoznačně reprezentují osobu nebo zařízení (účet, certifikát, přihlašovací údaje).

- **Zásady:** unikátní a silná hesla (správce hesel), MFA všude, kde je dostupné, kontrola aktivních relací, minimální oprávnění.
- **Správa účtů na serveru:** vytváření účtů a skupin, **politika hesel** (délka, složitost, expirace, historie), práva podle skupin, účet administrátora oddělený od běžného, **audit** přihlášení a změn práv.

## Princip nejmenších oprávnění (least privilege)

Každý uživatel, program i služba dostane **jen práva, která nezbytně potřebuje**, a jen na nutnou dobu. Omezí se tím dopad chyby i útoku: malware spuštěný běžným uživatelem nezmění systém.

- Správce pracuje pod **obyčejným účtem**; administrátorská práva si vyžádá (Windows **UAC**, Linux `sudo` místo trvalého `root`).
- Práva se přidělují **skupinám a rolím** (**RBAC**), ne jednotlivcům.
- Služby běží pod vlastními účty s omezenými právy; účty a práva se pravidelně **revidují**.
- Související: **oddělení povinností** (jeden člověk neschválí i neprovede citlivou operaci), **need to know**, **Zero Trust** (nikomu se nedůvěřuje automaticky jen kvůli poloze ve vnitřní síti).

## Práva a oprávnění ve Windows a Linuxu

- **Windows** – oprávnění NTFS (čtení, zápis, změna, úplné řízení), skupiny Administrators, Users; *odepřít* je silnější než *povolit*, oprávnění se dědí – viz [uživatelská práva a oprávnění](/it/operacni-systemy/13-uzivatelska-prava-a-opravneni/).
- **Linux** – práva `r`, `w`, `x` pro vlastníka, skupinu a ostatní (`chmod 750 soubor`, `chown uzivatel:skupina soubor`); administrátor `root`, dočasná práva přes `sudo`.
- **Vzdálený přístup** – šifrované **SSH** a **RDP** místo nešifrovaného Telnetu, přihlašování klíčem a MFA – viz [vzdálený přístup](/it/operacni-systemy/53-vzdaleny-pristup-telnet-ssh-rdp/).

## Otázky k opakování

1. Co znamená IAAA? ||identifikace, autentizace, autorizace, účtování (audit)||
2. Jaké jsou faktory autentizace a co je MFA? ||co znáš, co máš, čím jsi; MFA kombinuje aspoň dva různé||
3. Proč se hesla ukládají jako hash se solí? ||při úniku databáze nejsou čitelná; sůl brání rainbow tables a různí hash stejných hesel||
4. Jmenujte základní techniky napadení hesel a obranu. ||brute force, slovníkový útok, credential stuffing, password spraying, rainbow tables; dlouhé unikátní heslo, sůl, MFA||
5. Co je princip nejmenších oprávnění? ||uživatel, program i služba má jen práva nezbytná pro práci (UAC, sudo, RBAC)||
6. Jak fungují oprávnění ve Windows a Linuxu? ||Windows: NTFS oprávnění a skupiny; Linux: r, w, x pro vlastníka, skupinu a ostatní||
