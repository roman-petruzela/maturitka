---
title: "Kybernetické útoky"
order: 2
---

## Kybernetický útok – fáze a kategorie

- **Kybernetický útok** – záměrná činnost narušující **důvěrnost, integritu nebo dostupnost** dat či systému.
- **Fáze útoku (cyber kill chain):**

![Cyber kill chain: průzkum, příprava, doručení, průnik, instalace, řízení a kontrola, naplnění cíle](/images/content/it/kyberneticka-bezpecnost/utoky/kill-chain.webp)

1. **Průzkum (reconnaissance)** – sběr informací o cíli (zaměstnanci, technologie, otevřené porty).
2. **Příprava zbraně (weaponization)** – škodlivý nástroj (malware ukrytý v dokumentu).
3. **Doručení (delivery)** – e-mail, infikované médium, web.
4. **Průnik / exploitace** – zneužití zranitelnosti k přístupu.
5. **Instalace** – trvalý přístup (backdoor).
6. **Řízení a kontrola (C2)** – spojení útočníka s napadeným systémem.
7. **Naplnění cíle (actions on objectives)** – krádež dat, poškození, šíření v síti.
- **Podle cíle:** útoky na **důvěrnost** (únik dat), **integritu** (změna dat), **dostupnost** (znepřístupnění služby).
- **Podle techniky:** **technické** (chyba v softwaru či síti) a **sociotechnické** (lidský faktor).

### Přehled typů útoků

| Útok | Princip | Příklad |
| --- | --- | --- |
| **Malware** | škodlivý software: viry (připojí se k souboru), červi (šíří se sítí), trojské koně, ransomware, spyware | **WannaCry** (2017) – ransomware, statisíce počítačů |
| **DoS / DDoS** | **přetížení** systému či linky, aby nebyl dostupný; DoS = jeden zdroj, **DDoS** = mnoho zařízení (**botnet**) | zahlcení webu miliony požadavků |
| **Phishing** | podvodná komunikace (nejčastěji e-mail) vydávající se za důvěryhodný subjekt; láká přihlašovací a platební údaje | e-mail „z banky“ s odkazem na falešnou stránku |
| **Spoofing** | **falšování identity** odesílatele: **IP**, **e-mail**, **DNS** spoofing | e-mail jakoby od nadřízeného (**CEO fraud**) |
| **Code injection** | škodlivý kód ve vstupu aplikace, který je zpracován jako součást příkazu (**SQL injection**) | `' OR '1'='1` v přihlašovacím formuláři obejde heslo |
| **Supply chain** | napadení méně chráněného **dodavatele**, součástky nebo aktualizace | škodlivý kód v aktualizaci softwaru – **SolarWinds** (2020) |
| **Insider threats** | riziko od osoby s legitimním přístupem (zaměstnanec, dodavatel); úmyslné i neúmyslné | krádež dat, sabotáž, chyba |
| **DNS tunelling** | zneužití DNS: do dotazů a odpovědí se **ukrývají jiná data** (příkazy, unikající data); DNS bývá méně kontrolován | únik dat přes DNS |
| **IoT útoky** | slabá nebo výchozí hesla, chybějící aktualizace chytrých zařízení; botnety | botnet **Mirai** – masivní DDoS z IoT zařízení |
| **Sociální inženýrství** | manipulace člověka (autorita, časový tlak, důvěra, strach), aby prozradil informace nebo obešel opatření | „pracovník IT podpory“ po telefonu vyláká heslo |

### Praktická ukázka: SQL injection na přihlašovacím formuláři

- SQL injection přímo navazuje na to, co se probírá v Databázích a ve Webovém programování – jde o situaci, kdy PHP skript vloží hodnotu z formuláře přímo do textu SQL dotazu (spojováním řetězců), místo aby ji předal databázi bezpečně odděleně od kódu dotazu
- Zranitelný přihlašovací skript – hodnoty z `$_POST` se bez jakéhokoli ošetření vkládají do dotazu:

```php
<?php
// login.php – ZRANITELNÁ verze, NEPOUŽÍVAT!
$jmeno = $_POST['jmeno'];
$heslo = $_POST['heslo'];

$query = "SELECT * FROM uzivatele WHERE jmeno='" . $jmeno . "' AND heslo='" . $heslo . "'";
$vysledek = mysqli_query($spojeni, $query);

if (mysqli_num_rows($vysledek) > 0) {
    echo "Přihlášení úspěšné!";
} else {
    echo "Špatné jméno nebo heslo.";
}
?>
```

- Útočník do pole „jmeno“ nezadá jméno, ale řetězec `' OR '1'='1' -- ` (heslo může nechat prázdné). Po dosazení do řetězce vznikne dotaz:

```sql
SELECT * FROM uzivatele WHERE jmeno='' OR '1'='1' -- ' AND heslo=''
```

- Dvě pomlčky `--` v SQL zahajují komentář, takže zbytek řádku (kontrola hesla) se vůbec nevyhodnotí; podmínka `'1'='1'` je vždy pravdivá, takže dotaz vrátí všechny řádky tabulky `uzivatele` a `mysqli_num_rows()` bude větší než 0 – skript vyhodnotí přihlášení jako úspěšné, aniž by útočník znal jakékoli skutečné heslo
- Oprava – použití prepared statements (parametrizovaných dotazů), kde se hodnoty předávají odděleně od textu dotazu jako parametry, takže je databázový ovladač nikdy nevyhodnotí jako součást SQL syntaxe:

```php
<?php
// login.php – opravená verze pomocí prepared statements
$jmeno = $_POST['jmeno'];
$heslo = $_POST['heslo'];

$stmt = mysqli_prepare($spojeni, "SELECT * FROM uzivatele WHERE jmeno = ? AND heslo = ?");
mysqli_stmt_bind_param($stmt, "ss", $jmeno, $heslo);
mysqli_stmt_execute($stmt);
$vysledek = mysqli_stmt_get_result($stmt);

if (mysqli_num_rows($vysledek) > 0) {
    echo "Přihlášení úspěšné!";
} else {
    echo "Špatné jméno nebo heslo.";
}
?>
```

- Otazníky `?` jsou zástupné znaky (placeholders), `mysqli_stmt_bind_param()` k nim až poté přiřadí konkrétní hodnoty jako čistá data – i kdyby uživatel zadal `' OR '1'='1' -- `, databáze by tento text hledala doslovně jako hodnotu sloupce `jmeno`, ne jako součást dotazu, a přihlášení by správně selhalo
- Skutečná ochrana hesla jde ještě dál – správně navržená aplikace vůbec neporovnává heslo v SQL dotazu (`WHERE heslo = ?`), protože v databázi by neměla být čitelná hesla vůbec uložena (viz hashování hesel níže)
- Přesně tento typ útoku (a řadu dalších – XSS, obcházení autorizace, hledání zranitelných verzí softwaru) je možné bezpečně a legálně zkoušet na platformě **TryHackMe** – webu s cvičnými „pokojíčky“ (rooms), kde uživatel dostane přístup k izolovanému cvičnému stroji, postupuje podle kroků s nápovědami a cílem bývá najít tzv. *flag* (vlajku, potvrzující řetězec), který dokazuje, že se útok podařilo provést; díky izolovanému prostředí se tak dá bezpečně vyzkoušet, jak zranitelnost skutečně vypadá a jak se projeví, aniž by šlo o útok na reálný, cizí a neautorizovaný systém
