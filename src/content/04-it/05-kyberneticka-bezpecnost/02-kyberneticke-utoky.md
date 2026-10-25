---
title: "Kybernetické útoky"
order: 2
tags: ["doplněno"]
---

## Kybernetický útok – fáze a kategorie

- Kybernetický útok – záměrná činnost směřující k narušení důvěrnosti, integrity nebo dostupnosti dat či systému
- Typické fáze útoku (podle modelu tzv. cyber kill chain)
	1. Průzkum (reconnaissance) – sběr informací o cíli (zaměstnanci, technologie, otevřené porty)
	2. Příprava zbraně (weaponization) – vytvoření škodlivého nástroje (např. malware ukrytý v dokumentu)
	3. Doručení (delivery) – přenesení útoku k cíli (e-mail, infikované médium, webová stránka)
	4. Průnik/exploitace (exploitation) – zneužití zranitelnosti k získání přístupu
	5. Instalace – zajištění trvalého přístupu (např. instalace backdooru)
	6. Řízení a kontrola (command and control, C2) – navázání spojení útočníka s napadeným systémem
	7. Naplnění cíle (actions on objectives) – krádež dat, poškození systému, šíření dále v síti
- Kategorie útoků podle cíle – útoky na důvěrnost (únik dat), na integritu (neoprávněná změna dat), na dostupnost (znepřístupnění služby)
- Kategorie útoků podle techniky – technické (zneužití chyby v softwaru/síti) a sociotechnické (zneužití lidského faktoru)

### Přehled typů útoků

- Malware – souhrnné označení škodlivého softwaru; zahrnuje viry (šíří se připojením k jinému souboru), červy (šíří se samostatně po síti), trojské koně (tváří se jako neškodný program), ransomware (zašifruje data a požaduje výkupné), spyware (sleduje činnost uživatele) a další; příklad – ransomware WannaCry (2017), který zašifroval data na statisících počítačů po celém světě
- Denial-of-Service, DoS/DDoS – útok, jehož cílem je přetížit systém nebo síťovou linku tak, aby přestal být dostupný legitimním uživatelům; u DoS útočí jeden zdroj, u DDoS (distributed) útočí současně velké množství zařízení (botnet); příklad – zahlcení webového serveru miliony požadavků najednou, takže přestane odpovídat
- Phishing – podvodná komunikace (nejčastěji e-mail), která se vydává za důvěryhodný subjekt (banku, firmu) a snaží se vylákat přihlašovací údaje nebo platební informace; příklad – e-mail vypadající jako zpráva z banky s odkazem na falešnou přihlašovací stránku
- Spoofing – falšování identity odesílatele nebo zdroje komunikace; existuje IP spoofing (falšování zdrojové IP adresy), e-mail spoofing (falšování odesílatele zprávy), DNS spoofing (falšování DNS odpovědí); příklad – útočník odešle e-mail, který vypadá, že přišel z adresy nadřízeného (tzv. CEO fraud)
- Code injection attacks (útoky vsunutím kódu), např. SQL injection – vložení škodlivého kódu do vstupu aplikace, který aplikace nesprávně zpracuje jako součást příkazu; příklad – SQL injection, kdy útočník do přihlašovacího formuláře vloží řetězec typu `' OR '1'='1`, čímž obejde ověření hesla
- Supply chain attacks (útoky na dodavatelský řetězec) – napadení méně chráněného dodavatele, dodávané součástky nebo aktualizace, přes kterou se útočník dostane k cílové organizaci; příklad – vložení škodlivého kódu do legitimní aktualizace softwaru, kterou pak nainstalují tisíce zákazníků (např. případ SolarWinds 2020)
- Insider threats (vnitřní hrozby) – bezpečnostní riziko pocházející od osoby s legitimním přístupem do systému (zaměstnanec, bývalý zaměstnanec, dodavatel); může jít o úmyslné zneužití (krádež dat, sabotáž) nebo neúmyslné zavinění (chyba, neopatrnost)
- DNS tunelling – zneužití protokolu DNS k obcházení bezpečnostních opatření tím, že se do DNS dotazů a odpovědí ukrývají jiná data (např. příkazy pro malware nebo unikající citlivá data); využívá toho, že DNS provoz bývá na firewallech méně kontrolovaný než jiný provoz
- IoT-based attacks – útoky zneužívající zabezpečení chytrých zařízení (kamery, routery, senzory), která často mají výchozí nebo slabá hesla a nejsou pravidelně aktualizována; napadená zařízení se často zapojují do botnetů; příklad – botnet Mirai, který z tisíců napadených IoT zařízení generoval masivní DDoS útoky
- Social engineering attack (sociální inženýrství) – manipulace člověka s cílem přimět ho k prozrazení informací nebo provedení akce, která obchází technická opatření; využívá psychologických principů (autorita, časový tlak, důvěra, strach); příklad – útočník se telefonicky vydává za pracovníka IT podpory a přesvědčí zaměstnance, aby mu sdělil heslo

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
