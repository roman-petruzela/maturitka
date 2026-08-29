---
title: "Základy kybernetické bezpečnosti, útoky, kryptografie a identity"
order: 1
tags: ["doplněno"]
---

## Kybernetický prostor a kybernetická bezpečnost

- Kybernetický prostor (kyberprostor) – digitální prostředí vytvářené propojenými informačními a komunikačními systémy (internet, sítě, zařízení, data, uživatelé); nemá fyzické hranice, existuje jen díky technické infrastruktuře a je globálně dostupný
- Kybernetická bezpečnost – soubor právních, organizačních, technických a vzdělávacích opatření směřujících k ochraně kyberprostoru (zařízení, sítí, dat, služeb) před neoprávněným přístupem, poškozením nebo zneužitím
- Zásady bezpečného chování v kyberprostoru
	- Ověřovat důvěryhodnost zdrojů a odesílatelů před otevřením odkazu či přílohy
	- Používat silná a unikátní hesla, vícefaktorové ověření
	- Pravidelně aktualizovat software a operační systém
	- Nesdílet zbytečně osobní a citlivé údaje, přemýšlet nad tím, co se veřejně zveřejňuje
	- Zálohovat důležitá data
	- Ověřovat zabezpečení připojení (HTTPS) zejména při zadávání citlivých údajů
- Motivy kybernetických útočníků
	- Finanční zisk – krádež peněz, vydírání (ransomware), prodej ukradených dat
	- Špionáž – získání citlivých firemních nebo státních informací (průmyslová, státní špionáž)
	- Hacktivismus – prosazování politického nebo ideologického názoru (např. blokování webu instituce)
	- Sabotáž a kybernetická válka – poškození nebo vyřazení infrastruktury protivníka (často státem sponzorované útoky)
	- Osobní motivace – pomsta, zvědavost, touha po uznání v komunitě, testování vlastních schopností

## Riziko, hrozba, zranitelnost

- Hrozba (threat) – potenciální příčina nežádoucí události, která může způsobit škodu (např. útočník, malware, přírodní katastrofa, selhání zaměstnance); existuje nezávisle na tom, zda je systém zranitelný
- Zranitelnost (vulnerability) – slabina nebo nedostatek v systému, procesu nebo chování, kterou lze zneužít (např. neaktualizovaný software, špatně nastavená práva, slabé heslo); sama o sobě nezpůsobuje škodu, ale umožňuje hrozbě se projevit
- Riziko (risk) – pravděpodobnost, že hrozba využije konkrétní zranitelnost, a míra dopadu (škody), který tím vznikne; riziko = funkce hrozby, zranitelnosti a dopadu (často zjednodušeně: riziko = pravděpodobnost × dopad)
- Vztah mezi pojmy – hrozba je vždy vnější/potenciální působící síla, zranitelnost je vlastnost systému, riziko je výsledná míra ohrožení vznikající jejich kombinací (bez zranitelnosti hrozba nepředstavuje reálné riziko a naopak)

## Ochrana digitálního života a digitální stopa

- Ochrana digitálních zařízení – aktualizace systému a aplikací, antivirová ochrana, šifrování úložiště, uzamykání zařízení (PIN, biometrie), omezení instalace aplikací z neověřených zdrojů
- Ochrana digitálního obsahu – zálohování, šifrování citlivých souborů, kontrola nastavení sdílení v cloudových službách
- Ochrana osobních údajů – minimalizace zveřejňovaných údajů, kontrola nastavení soukromí na sociálních sítích, obezřetnost při vyplňování formulářů a registracích
- Reakce na vývoj technologií – sledování nových hrozeb (např. útoky přes IoT, deepfake, útoky s využitím umělé inteligence) a přizpůsobování bezpečnostních návyků
- Digitální stopa (digital footprint) – souhrn informací, které o uživateli zanechává jeho aktivita online (aktivní stopa – vědomě zveřejněný obsah; pasivní stopa – automaticky sbíraná data jako IP adresa, cookies, historie prohlížení)
	- Kontrola digitální stopy – vyhledávání vlastního jména, kontrola nastavení účtů a aplikací s přístupem k datům, mazání nepoužívaných účtů
- Anonymní používání internetu – nástroje jako VPN (skrytí IP adresy a šifrování provozu), síť Tor (anonymizace přes vrstvené šifrování a více uzlů), prohlížení v anonymním (privátním) režimu prohlížeče (nešíří lokální historii, ale neskrývá IP adresu), blokování sledovacích prvků (trackerů) a cookies třetích stran

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

## Základy kryptografie a šifrování

- Kryptografie – vědní obor zabývající se metodami zajištění důvěrnosti, integrity, autenticity a nepopiratelnosti informací; širší pojem, zahrnuje návrh algoritmů, protokolů, hašovacích funkcí, digitálních podpisů apod.
- Šifrování – konkrétní proces převodu čitelných dat (otevřený text, plaintext) na nečitelnou podobu (šifrovaný text, ciphertext) pomocí algoritmu a klíče; jde o jednu z technik, kterou kryptografie využívá
- Princip šifrované komunikace – odesílatel zašifruje zprávu klíčem před odesláním, příjemce ji odpovídajícím klíčem dešifruje; i pokud zprávu cestou zachytí útočník, bez klíče ji nedokáže přečíst (příklad: zabezpečená webová komunikace přes HTTPS, kdy prohlížeč a server šifrují veškerý přenášený obsah)

### Symetrické a asymetrické šifrování

- Symetrické šifrování – k šifrování i dešifrování se používá stejný (sdílený) klíč; je rychlé a vhodné pro šifrování velkého objemu dat, ale je nutné klíč bezpečně distribuovat oběma stranám předem
	- Příklad algoritmu – AES (Advanced Encryption Standard), dnes standard pro šifrování dat v klidu i při přenosu
- Asymetrické šifrování – používá dvojici matematicky svázaných klíčů, veřejný (public key) a soukromý (private key); co je zašifrováno veřejným klíčem, lze dešifrovat pouze odpovídajícím soukromým klíčem (a naopak u podpisu); odpadá problém distribuce sdíleného klíče, ale je výpočetně náročnější a pomalejší
	- Příklad algoritmu – RSA, založený na obtížnosti faktorizace velkých čísel
- Praktické kombinování – v praxi (např. u HTTPS) se asymetrické šifrování použije jen k bezpečné výměně jednorázového symetrického klíče (tzv. session key), kterým se pak šifruje vlastní komunikace – spojuje výhody obou přístupů (bezpečnost výměny klíče i rychlost přenosu dat)
- Tvorba a správa šifrovacích klíčů – klíče se generují kryptograficky bezpečným generátorem náhodných čísel, jejich délka (např. 128/256 bitů u AES, 2048/4096 bitů u RSA) ovlivňuje odolnost proti prolomení; soukromé klíče je nutné bezpečně uchovávat (šifrovaná úložiště, hardwarové bezpečnostní moduly), pravidelně obměňovat (rotace klíčů) a v případě kompromitace okamžitě zneplatnit

## Veřejná infrastruktura klíčů (PKI) a digitální certifikáty

- PKI (Public Key Infrastructure) – soubor technologií, procesů a institucí, které umožňují důvěryhodně spravovat, vydávat a ověřovat digitální certifikáty a veřejné klíče
- Certifikační autorita (CA) – důvěryhodná instituce, která ověřuje totožnost žadatele a vydává digitální certifikát podepsaný svým vlastním klíčem; tím potvrzuje, že daný veřejný klíč skutečně patří danému subjektu
- Digitální certifikát – elektronický dokument spojující identitu subjektu (osoby, serveru) s jeho veřejným klíčem; obsahuje např. název subjektu, veřejný klíč, dobu platnosti, podpis certifikační autority
- Princip důvěry – prohlížeč/klient důvěřuje seznamu kořenových certifikačních autorit; pokud je certifikát serveru podepsán (přímo nebo přes řetězec) některou z nich, je považován za důvěryhodný
- HTTPS certifikát – digitální certifikát nasazený na webovém serveru, který umožňuje šifrované spojení (HTTPS = HTTP přes TLS/SSL) a zároveň ověřuje identitu provozovatele webu; chrání komunikaci před odposlechem a podvržením obsahu (man-in-the-middle)
- Životní cyklus certifikátu – vygenerování žádosti a klíčového páru → ověření identity certifikační autoritou → vydání certifikátu → instalace na server → sledování platnosti a včasná obnova → případné odvolání (revokace), pokud dojde ke kompromitaci soukromého klíče

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

## Bezpečnost koncových bodů a ochrana dat

- Koncový bod (endpoint) – zařízení, které se připojuje k síti a pracuje s daty (počítač, notebook, mobilní telefon, server, IoT zařízení); je typickým cílem útoku, protože bývá nejblíže uživateli
- Technické a softwarové prostředky zabezpečení koncové stanice
	- Antivirový/antimalware program – detekuje a odstraňuje škodlivý software na základě signatur nebo chování
	- Firewall (osobní) – kontroluje a filtruje síťový provoz do a ze stanice podle definovaných pravidel
	- Šifrování disku – ochrana dat při ztrátě nebo odcizení zařízení (data jsou bez znalosti klíče/hesla nečitelná)
	- Pravidelné aktualizace (patch management) operačního systému a aplikací – odstraňují známé zranitelnosti
	- Zálohování dat – umožňuje obnovu po havárii, ransomwaru nebo chybě uživatele
	- Řízení přístupových práv a uzamykání zařízení po nečinnosti
- Pravidla zabezpečení netechnického charakteru
	- Používání silných, unikátních hesel a jejich pravidelná obměna při podezření na únik
	- Obezřetnost vůči sociálnímu inženýrství – ověřování neobvyklých požadavků (zejména na peníze nebo citlivá data) jiným kanálem
	- Fyzická bezpečnost – uzamykání kanceláří a zařízení, zákaz ponechávání odemčené stanice bez dozoru, kontrola přístupu cizích osob do prostor s technikou
	- Opatrnost při práci s přenosnými médii neznámého původu (USB flash disky)
	- Školení uživatelů a udržování bezpečnostního povědomí jako průběžný proces, ne jednorázová akce
