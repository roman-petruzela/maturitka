---
title: "Dynamické stránky a serverové skriptování"
order: 1
tags: ["doplněno"]
---

## Statické vs. dynamické stránky

- **Statická stránka** – obsah je pevně daný v HTML souboru, u všech uživatelů se zobrazí vždy stejně, dokud se soubor ručně neupraví
- **Dynamická stránka** – obsah se generuje "za běhu", podle vstupu uživatele, dat v databázi, aktuálního data apod. – u různých uživatelů nebo v různém čase se může lišit
- Příklady dynamického obsahu: přihlášení uživatele, výpis článků z databáze, obsah nákupního košíku, výsledky vyhledávání

## Klient a server

- **Klient** – zařízení uživatele a jeho webový prohlížeč, který zobrazuje výslednou stránku
- **Server** – počítač, na kterém běží webová aplikace a kde jsou uložena data (např. databáze)
- **Server-side (serverové) skriptování** – část kódu, která se nevykonává v prohlížeči uživatele, ale na serveru; výsledkem jejího běhu je hotová HTML stránka, kterou server pošle klientovi
- Typický průběh požadavku:
  1. Uživatel v prohlížeči zadá adresu nebo klikne na odkaz/odešle formulář
  2. Prohlížeč odešle **požadavek (request)** na server
  3. Server podle požadavku spustí příslušný skript – ten může pracovat s daty (např. číst/zapisovat do databáze nebo souboru)
  4. Skript vygeneruje výsledné **HTML** podle daných dat
  5. Server pošle **odpověď (response)** s vygenerovaným HTML zpět do prohlížeče, který ji zobrazí
- Rozdíl oproti klientskému skriptování (JavaScript v prohlížeči): serverový kód není uživateli vidět (nelze si ho zobrazit v prohlížeči jako zdrojový kód stránky), protože se vykoná ještě před odesláním odpovědi
- Běžně používané technologie pro serverové skriptování: **PHP**, **ASP.NET**, **Node.js** (JavaScript na straně serveru) a další – ŠVP nepředepisuje konkrétní jazyk, princip fungování je ale u všech obdobný

## Vývojové prostředí

- Pro psaní a testování serverových skriptů se používá vhodné vývojové prostředí (editor/IDE s podporou zvyklého jazyka, zvýrazňováním syntaxe, nápovědou)
- Pro spuštění je potřeba **webový server** s podporou daného jazyka (např. lokální vývojové prostředí typu XAMPP/WAMP pro PHP) a případně databázový server

## Datové typy

- Stejně jako v jiných programovacích jazycích se pracuje se základními datovými typy:
  - **celé číslo (integer)** – např. `18`
  - **desetinné číslo (float/double)** – např. `3.14`
  - **řetězec (string)** – text, např. `"ahoj"`
  - **logická hodnota (boolean)** – `true` / `false`
  - **pole (array)** – seznam více hodnot pod jedním jménem

## Větvení a cykly

- **Podmínky** – umožňují provést různý kód podle splnění dané podmínky
- **Cykly** (`for`, `while`) – umožňují opakovat blok kódu, dokud platí daná podmínka nebo po daný počet opakování
- Princip je shodný s jinými programovacími/skriptovacími jazyky (viz JavaScript) – liší se pouze konkrétní syntaxe zápisu

## Pole a práce s textovým řetězcem

- **Pole** slouží k uložení více hodnot pod jednou proměnnou, k jednotlivým prvkům se přistupuje pomocí indexu (číslováno obvykle od 0)
- Nad textovým řetězcem lze provádět základní úpravy – zjištění délky, spojování (konkatenace), převod velikosti písmen, vyhledání nebo nahrazení části textu

## Uživatelské rozhraní a formuláře

- Vstup od uživatele se na webu nejčastěji získává pomocí **HTML formuláře** s grafickými prvky – textová pole, zaškrtávací pole, přepínače, rozbalovací seznamy, tlačítko pro odeslání
- Formulář odešle svá data na server (metodou `GET` nebo `POST`), kde je serverový skript zpracuje

## Ukládání dat mimo operační paměť

- Proměnné v paměti existují jen po dobu běhu skriptu (jeden požadavek) – pro trvalé uchování dat mezi jednotlivými požadavky je nutné data ukládat mimo operační paměť
- Možnosti:
  - **Soubor** na disku serveru (např. textový nebo CSV soubor)
  - **Databáze** (např. MySQL) – nejběžnější řešení pro strukturovaná a rozsáhlejší data
  - **Session** – dočasné úložiště dat vázané na konkrétního uživatele po dobu jeho návštěvy webu
  - **Cookies** – malé soubory dat uložené v prohlížeči uživatele, které server může při dalších požadavcích číst

## Ukázka – jednoduchý formulář zpracovaný v PHP

```php
<!-- formular.html -->
<form action="zpracuj.php" method="post">
  <input type="text" name="jmeno" placeholder="Vaše jméno">
  <button type="submit">Odeslat</button>
</form>
```

```php
<?php
// zpracuj.php - serverový skript, který zpracuje odeslaná data
$jmeno = $_POST["jmeno"];

if ($jmeno !== "") {
    echo "Ahoj, " . $jmeno . "!";
} else {
    echo "Nezadali jste žádné jméno.";
}
?>
```

- Formulář odešle vyplněné jméno metodou `POST` na server, kde skript `zpracuj.php` hodnotu načte z pole `$_POST`, ověří ji a vygeneruje odpovídající HTML výstup, který se odešle zpět do prohlížeče

## Praktické příklady

### Formulář s více poli a validací na serveru

Formulář může obsahovat víc polí najednou. Serverový skript by měl vždy zkontrolovat, jestli uživatel opravdu vyplnil to, co má, a jestli mají data správný formát – **spoléhat se pouze na validaci v prohlížeči (JavaScript) nestačí**, protože formulář lze odeslat i bez použití prohlížeče (např. přes jiný nástroj), a server tak musí ověřit data znovu.

```html
<!-- kontakt.html -->
<form action="odeslat-kontakt.php" method="post">
  <input type="text" name="jmeno" placeholder="Vaše jméno">
  <input type="text" name="email" placeholder="Váš e-mail">
  <textarea name="zprava" placeholder="Vaše zpráva"></textarea>
  <button type="submit">Odeslat</button>
</form>
```

```php
<?php
// odeslat-kontakt.php - zpracování kontaktního formuláře s validací

$jmeno = $_POST["jmeno"];
$email = $_POST["email"];
$zprava = $_POST["zprava"];

$chyby = []; // pole, do kterého se budou sbírat nalezené chyby

// kontrola, že jsou vyplněná všechna povinná pole
if (trim($jmeno) === "") {
    $chyby[] = "Vyplňte prosím jméno.";
}
if (trim($zprava) === "") {
    $chyby[] = "Vyplňte prosím zprávu.";
}

// kontrola formátu e-mailu pomocí vestavěné funkce filter_var()
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $chyby[] = "Zadejte platný e-mail.";
}

if (count($chyby) > 0) {
    // pokud nastala aspoň jedna chyba, vypíšeme seznam chyb
    echo "<h2>Formulář obsahuje chyby:</h2><ul>";
    foreach ($chyby as $chyba) {
        echo "<li>" . $chyba . "</li>";
    }
    echo "</ul>";
} else {
    // data jsou v pořádku, dalo by se pokračovat např. uložením do databáze
    echo "<p>Děkujeme, " . $jmeno . ", vaše zpráva byla odeslána.</p>";
}
?>
```

### Session – přihlášení uživatele

**Session** umožňuje uchovat data o konkrétním uživateli mezi jednotlivými požadavky (např. po dobu, kdy je přihlášený). Server uživateli při první návštěvě přidělí jedinečné ID session, které se ukládá v prohlížeči (obvykle formou cookie) a posílá s každým dalším požadavkem, díky čemuž server pozná, o kterého uživatele jde.

```php
<!-- prihlaseni.html -->
<form action="prihlas.php" method="post">
  <input type="text" name="uzivatel" placeholder="Uživatelské jméno">
  <input type="password" name="heslo" placeholder="Heslo">
  <button type="submit">Přihlásit se</button>
</form>
```

```php
<?php
// prihlas.php - ověření přihlašovacích údajů a spuštění session

session_start(); // musí být na začátku skriptu, ještě před jakýmkoli výstupem

$uzivatel = $_POST["uzivatel"];
$heslo = $_POST["heslo"];

// v reálné aplikaci by se heslo porovnávalo s (zahashovanou) hodnotou v databázi
if ($uzivatel === "admin" && $heslo === "tajneheslo") {
    // uložení informace o přihlášení do session - dostupné i na dalších stránkách
    $_SESSION["prihlasen"] = true;
    $_SESSION["jmeno"] = $uzivatel;
    echo "Přihlášení proběhlo úspěšně.";
} else {
    echo "Špatné uživatelské jméno nebo heslo.";
}
?>
```

```php
<?php
// vitejte.php - stránka dostupná pouze přihlášeným uživatelům

session_start(); // session je nutné spustit na každé stránce, kde s ní chceme pracovat

if (isset($_SESSION["prihlasen"]) && $_SESSION["prihlasen"] === true) {
    echo "Vítejte, " . $_SESSION["jmeno"] . "!";
} else {
    echo "Musíte se nejprve přihlásit.";
}
?>
```

- Session lze ukončit funkcí `session_destroy()` (typicky u tlačítka "Odhlásit se")

### Připojení k databázi a práce s daty (MySQL)

Pro trvalé uložení většího množství strukturovaných dat (např. registrovaní uživatelé, objednávky, články) se používá **databáze**. Následující příklady používají rozšíření **mysqli** pro práci s databází MySQL.

```php
<?php
// pripojeni.php - navázání spojení s databází, vkládá se na začátek dalších skriptů

$spojeni = mysqli_connect("localhost", "uzivatel_db", "heslo_db", "eshop");

if (!$spojeni) {
    die("Připojení k databázi se nezdařilo: " . mysqli_connect_error());
}
?>
```

Vložení dat z formuláře do databázové tabulky (`INSERT`):

```php
<?php
// ulozit-kontakt.php - uloží vyplněný formulář do tabulky "zpravy"

require "pripojeni.php";

$jmeno = $_POST["jmeno"];
$email = $_POST["email"];
$zprava = $_POST["zprava"];

// hodnoty se do dotazu vkládají jako parametry (prepared statement),
// aby nemohlo dojít k tzv. SQL injection při zadání škodlivého vstupu
$dotaz = mysqli_prepare($spojeni, "INSERT INTO zpravy (jmeno, email, zprava) VALUES (?, ?, ?)");
mysqli_stmt_bind_param($dotaz, "sss", $jmeno, $email, $zprava);
mysqli_stmt_execute($dotaz);

echo "Zpráva byla uložena do databáze.";
?>
```

Výpis dat z tabulky (`SELECT`):

```php
<?php
// vypis-zprav.php - vypíše všechny uložené zprávy z tabulky "zpravy"

require "pripojeni.php";

$vysledek = mysqli_query($spojeni, "SELECT jmeno, email, zprava FROM zpravy ORDER BY id DESC");

echo "<ul>";
while ($radek = mysqli_fetch_assoc($vysledek)) {
    // $radek je asociativní pole s klíči podle názvů sloupců
    echo "<li><strong>" . $radek["jmeno"] . "</strong> (" . $radek["email"] . "): " . $radek["zprava"] . "</li>";
}
echo "</ul>";
?>
```

### Cookies

**Cookie** je malý kus dat, který server uloží do prohlížeče uživatele a který se pak automaticky posílá zpět serveru při každém dalším požadavku na stejný web. Na rozdíl od session zůstávají cookies uložené v prohlížeči i po zavření okna (podle nastavené doby platnosti) a lze je tedy použít i pro dlouhodobější zapamatování údajů (např. preferovaný jazyk).

```php
<?php
// nastav-cookie.php - uloží do prohlížeče uživatele preferovaný jazyk

// jméno cookie, hodnota, čas expirace (aktuální čas + 30 dní v sekundách)
setcookie("jazyk", "cs", time() + 30 * 24 * 60 * 60);

echo "Jazyk byl nastaven.";
?>
```

```php
<?php
// pouzij-cookie.php - přečte hodnotu uloženou v cookie při dalších návštěvách

if (isset($_COOKIE["jazyk"])) {
    echo "Vítejte zpět, váš jazyk je: " . $_COOKIE["jazyk"];
} else {
    echo "Jazyk zatím nebyl nastaven.";
}
?>
```

### GET vs. POST

Formulář lze odeslat dvěma nejběžnějšími metodami, které se liší v tom, kam se odeslaná data zapíší:

- **GET** – data se připojí přímo do **URL adresy** za znak `?`, např. `vyhledat.php?dotaz=maturita`. Vhodné pro data, která nejsou citlivá a mohou se objevit v adrese (např. vyhledávání, filtrování, stránkování) – výsledek lze uložit do záložek nebo poslat odkazem
- **POST** – data se odesílají v **těle požadavku**, nejsou vidět v URL. Vhodné pro citlivá data (hesla) nebo větší množství dat (např. text celého formuláře)

```html
<!-- vyhledavani.html - formulář odeslaný metodou GET -->
<form action="vysledky.php" method="get">
  <input type="text" name="dotaz" placeholder="Co hledáte?">
  <button type="submit">Hledat</button>
</form>
```

```php
<?php
// vysledky.php - hodnota z GET formuláře se čte z pole $_GET
// URL po odeslání bude vypadat např. takto: vysledky.php?dotaz=maturita

$dotaz = $_GET["dotaz"];
echo "Hledáte: " . $dotaz;
?>
```

## Tvorba vlastních dynamických stránek

- Postup řešení problému při tvorbě dynamické stránky:
  1. **Formulace problému a požadavků** – co má stránka umět, jaká data zpracovávat, jaký má být výstup
  2. Návrh struktury stránky a potřebných dat (příp. návrh databáze)
  3. Implementace serverového skriptu, který data zpracuje a vygeneruje výsledné HTML
  4. Otestování funkčnosti (různé vstupy, chybové stavy) a nasazení na server
