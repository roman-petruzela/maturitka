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
| **DNS tunneling** | zneužití DNS: do dotazů a odpovědí se **ukrývají jiná data** (příkazy, unikající data); DNS bývá méně kontrolován – podrobně v [bezpečnosti DNS](/it/pocitacove-site/17-dns-system-domenovych-jmen/#dns-tunneling) | únik dat přes DNS |
| **IoT útoky** | slabá nebo výchozí hesla, chybějící aktualizace chytrých zařízení; botnety | botnet **Mirai** – masivní DDoS z IoT zařízení |
| **Sociální inženýrství** | manipulace člověka (autorita, časový tlak, důvěra, strach), aby prozradil informace nebo obešel opatření | „pracovník IT podpory“ po telefonu vyláká heslo |

### Analýza malwaru

**Analýza malwaru** zjišťuje, **co vzorek dělá**, jak se šíří, s kým komunikuje a jak ho odstranit nebo detekovat. Provádí se vždy v **izolovaném prostředí** (virtuální stroj bez přístupu do produkční sítě, snapshot).

| | **Statická analýza** | **Dynamická analýza** |
| --- | --- | --- |
| princip | vzorek se **nespouští**, zkoumá se soubor | vzorek se **spustí** v izolovaném prostředí (**sandbox**) a pozoruje se chování |
| co se zjišťuje | **hash** (porovnání s databází, např. VirusTotal), **řetězce** (URL, IP adresy), importované funkce, metadata, **zabalení** (packer); hlubší: **disassembler / dekompilace** (reverzní inženýrství) | změny **souborů a registrů**, nové **procesy**, **síťová komunikace** (C2, DNS dotazy), vytvoření perzistence |
| výhody | bezpečná, odhalí **všechny větve** kódu | rychlá, vidí skutečné chování i u **zašifrovaného / zabaleného** kódu |
| nevýhody | pracná; **obfuskace** a packery ji ztěžují | malware může **poznat sandbox** a nespustit se; vidí jen provedenou větev |
| nástroje | VirusTotal, `strings`, PE prohlížeče, Ghidra, IDA | Cuckoo / ANY.RUN sandbox, Process Monitor, Wireshark |

V praxi se oba přístupy **kombinují**: rychlý statický průzkum (hash, řetězce) → dynamické spuštění → podrobný rozbor kódu. Výstupem jsou **IOC** (indicators of compromise – hashe, domény, IP adresy), podle kterých se hrozba hledá v dalších systémech. Přehled druhů malwaru: [malware](/it/operacni-systemy/26-malware/), ochrana: [antivirové programy](/it/operacni-systemy/25-antivirove-programy/).

### Praktická ukázka: SQL injection na přihlašovacím formuláři

Zranitelný skript vkládá vstup z formuláře **přímo do textu SQL dotazu**:

```php
$query = "SELECT * FROM uzivatele WHERE jmeno='" . $jmeno . "' AND heslo='" . $heslo . "'";
```

Útočník do pole jména zadá `' OR '1'='1' -- `. Vznikne dotaz:

```sql
SELECT * FROM uzivatele WHERE jmeno='' OR '1'='1' -- ' AND heslo=''
```

`--` začíná komentář, takže se **kontrola hesla vůbec nevyhodnotí**; podmínka `'1'='1'` platí vždy, dotaz vrátí všechny uživatele a přihlášení „uspěje“ bez znalosti hesla.

**Oprava – parametrizovaný dotaz (prepared statement):** hodnoty se databázi předají **odděleně od textu dotazu**, takže se nikdy nevyhodnotí jako SQL:

```php
$stmt = mysqli_prepare($spojeni, "SELECT * FROM uzivatele WHERE jmeno = ? AND heslo_hash = ?");
mysqli_stmt_bind_param($stmt, "ss", $jmeno, $hash);
```

Heslo se navíc v dotazu nikdy neporovnává čitelně, ukládá se jako **hash se solí** ([hashování hesel](/it/kyberneticka-bezpecnost/04-sprava-identit-a-rizeni-uctu/#hashování-hesel)).

## Otázky k opakování

1. Popište fáze kybernetického útoku (Cyber Kill Chain). ||průzkum, příprava zbraně, doručení, průnik (exploitace), instalace, řízení a kontrola (C2), naplnění cíle||
2. Které cíle mohou kybernetické útoky mít? ||narušit důvěrnost (únik), integritu (změna), dostupnost (znepřístupnění)||
3. Jaký je rozdíl mezi virem, červem a trojským koněm? ||virus se připojí k souboru, červ se šíří sítí sám, trojan se tváří jako užitečný program||
4. Jak se liší DoS a DDoS? ||DoS jde z jednoho zdroje, DDoS z mnoha zařízení (botnet); oba přetěžují službu||
5. Co je phishing a co spoofing? ||phishing: podvodná zpráva lákající údaje; spoofing: falšování identity odesílatele (IP, e-mail, DNS)||
6. Co je sociální inženýrství? Uveďte příklad. ||manipulace člověka, aby prozradil informace nebo obešel opatření; „pracovník IT“ vyláká heslo||
7. Jak funguje SQL injection a jak se brání? ||vstup změní význam dotazu (`' OR '1'='1`); parametrizované dotazy||
8. Čím se liší statická a dynamická analýza malwaru? ||statická zkoumá soubor bez spuštění (hash, řetězce, disassembler); dynamická ho spustí v sandboxu a sleduje chování||
9. Co je DNS tunneling? ||skrytý přenos dat nebo příkazů v DNS dotazech a odpovědích||
