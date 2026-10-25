---
title: "Informační systémy a E-R model"
order: 1
tags: ["doplněno"]
---

## Informační systém

- Informační systém (IS) – uspořádaný soubor prostředků, metod, postupů a pracovníků, který zajišťuje sběr, přenos, uchování, zpracování a distribuci informací (dat) potřebných pro rozhodování a řízení
- Nemusí být nutně počítačový – IS existoval i před vznikem výpočetní techniky (kartotéky, účetní knihy); dnes se pojmem obvykle míní počítačový (automatizovaný) IS
- Účel – podporuje činnost organizace (firmy, úřadu, školy), umožňuje efektivní práci s daty, jejich sdílení mezi více uživateli a odděleními, urychluje rozhodování a snižuje chybovost oproti ruční evidenci
- Základní složky IS
	- Technické prostředky (hardware) – servery, sítě, koncová zařízení
	- Programové prostředky (software) – databázový systém, aplikační vrstva, uživatelské rozhraní
	- Data – vlastní obsah, o který se IS opírá
	- Organizační prostředky – směrnice, postupy, pravidla práce se systémem
	- Lidé – uživatelé, správci, vývojáři
- Typické druhy IS podle určení – ekonomické (účetnictví, fakturace), evidenční (docházka, sklad), řídicí, znalostní, geografické (GIS)

### Hodnocení a analýza informačních systémů

Při posuzování kvality IS se hodnotí zejména:

- Struktura – jak je systém členěn na moduly/vrstvy (datová, aplikační, prezentační), zda je členění přehledné a udržovatelné
- Vzájemná provázanost – jak spolu jednotlivé části a moduly komunikují, zda nedochází k duplicitě dat mezi moduly, zda existuje jednotné datové jádro
- Zabezpečení – jak je řešena autentizace (ověření identity uživatele), autorizace (přidělení oprávnění), šifrování citelných dat, zálohování a auditní záznamy (log činností)
- Škálovatelnost a výkon – zda systém zvládne růst objemu dat a počtu uživatelů
- Otevřenost – možnost napojení na jiné systémy (API, export/import dat)

## Základní pojmy databázových technologií

- Data – suroví, nezpracovaní fakta (čísla, texty, znaky) bez kontextu
- Informace – data doplněná o význam a kontext, použitelná pro rozhodování
- Databáze (báze dat) – organizovaná, strukturovaná množina dat uložená tak, aby k ní bylo možné efektivně přistupovat, spravovat ji a aktualizovat
- Systém řízení báze dat (SŘBD, anglicky DBMS – Database Management System) – programové vybavení, které zajišťuje vytváření databází, ukládání, správu, zabezpečení a poskytování dat uživatelům a aplikacím (např. MySQL, PostgreSQL, MS Access, Oracle, MS SQL Server)
- Nezávislost dat – oddělení fyzického uložení dat od způsobu, jakým s daty pracují aplikace; změna vnitřní struktury databáze by neměla vyžadovat přepsání aplikací, které data využívají
- Sdílení dat – více uživatelů či aplikací může pracovat se stejnými daty současně, díky centralizované správě přes SŘBD (na rozdíl od izolovaných souborů u každé aplikace)
- Redundance (redundantnost) dat – zbytečné, vícenásobné uložení téže informace na více místech; problém, protože při změně je nutné opravit všechny kopie, jinak vzniknou nesrovnalosti
- Konzistentnost dat – stav, kdy si všechna uložená data vzájemně neodporují a odpovídají skutečnosti; je narušena právě nekontrolovanou redundancí
- Integrita dat – správnost, úplnost a platnost dat vzhledem k definovaným pravidlům (integritní omezení); zajišťuje, že v databázi nemohou vzniknout nesmyslné nebo nekonzistentní hodnoty (např. záporný věk, faktura bez zákazníka)

## Modely databází

- Konceptuální (pojmový) model – nejvyšší úroveň abstrakce, popisuje entity, jejich vlastnosti a vztahy nezávisle na konkrétní implementaci; typickým nástrojem je E-R diagram
- Relační model – data uložena v podobě tabulek (relací) složených z řádků (záznamů, n-tic) a sloupců (atributů); vazby mezi tabulkami se realizují přes klíče; nejrozšířenější model, používá jazyk SQL (MySQL, PostgreSQL, Oracle, MS Access)
- Objektově orientovaný model – data jsou uložena jako objekty s vlastnostmi a metodami, obdobně jako v OOP jazycích; objekty mohou dědit vlastnosti od jiných objektů; vhodný pro složitá, strukturovaná data (např. CAD systémy, multimediální databáze)
- Další historické modely (pro úplnost) – hierarchický model (data ve stromové struktuře, vztah rodič–potomek) a síťový model (obecnější graf vztahů, předchůdce relačního modelu)

## Modelování jako prostředek návrhu databáze

- Modelování – proces vytvoření abstraktního popisu (modelu) reálného světa před samotnou implementací databáze; snižuje riziko chyb v návrhu a usnadňuje komunikaci mezi zadavatelem a vývojářem
- Postup návrhu databáze
	1. Analýza požadavků – co má systém evidovat, jaké procesy podporovat
	2. Konceptuální návrh – vytvoření E-R modelu (entity, atributy, vztahy)
	3. Logický návrh – převod E-R modelu na relační schéma (tabulky, klíče), normalizace
	4. Fyzický návrh – volba konkrétního SŘBD, datových typů, indexů, uložení

## E-R model (Entity-Relationship model)

- Entitně-vztahový model – grafický a pojmový nástroj pro znázornění struktury dat a vztahů mezi nimi, vytvořil jej Peter Chen v roce 1976
- Entita – reálný nebo abstraktní objekt, o kterém se uchovávají data (např. ZÁKAZNÍK, OBJEDNÁVKA, PRODUKT); v relačním modelu se entita stává tabulkou
- Instance entity (záznam, řádek) – konkrétní výskyt entity (konkrétní zákazník Jan Novák)
- Atribut – vlastnost entity (např. u entity ZÁKAZNÍK: jméno, příjmení, email); v relační tabulce odpovídá sloupci
	- Jednoduchý atribut – dále nedělitelný (věk)
	- Složený atribut – lze rozložit na části (adresa = ulice, město, PSČ)
	- Vícehodnotový atribut – entita může mít více hodnot téhož atributu (telefonní čísla)
	- Odvozený atribut – lze spočítat z jiných atributů (věk z data narození)
- Klíčový atribut – atribut nebo skupina atributů, které jednoznačně identifikují instanci entity

### Datové typy atributů

- Textové – řetězec znaků (jméno, adresa); pevná délka (char) nebo proměnná (varchar/text)
- Číselné – celá čísla (integer), desetinná čísla (float, decimal)
- Datum a čas (date, datetime, time)
- Logická hodnota (boolean) – ano/ne, pravda/nepravda
- Binární data (blob) – obrázky, soubory
- Výběr vhodného datového typu ovlivňuje jak správnost uložených dat (integritu), tak nároky na paměť a rychlost zpracování

### Vztahy (relace) mezi entitami

- Vztah (relace, relationship) – vazba mezi dvěma (nebo více) entitami, popisuje, jak spolu entity souvisejí (např. ZÁKAZNÍK vytváří OBJEDNÁVKU)
- Kardinalita vztahu – udává, kolik instancí jedné entity může být spojeno s kolika instancemi druhé entity
	- 1:1 (jedna k jedné) – jednomu zaměstnanci odpovídá jedna přístupová karta
	- 1:N (jedna k mnoha) – jeden zákazník může mít mnoho objednávek, ale objednávka patří jen jednomu zákazníkovi
	- M:N (mnoho k mnoha) – jeden student navštěvuje více kurzů a jeden kurz navštěvuje více studentů; v relačním modelu se realizuje pomocí vazební (spojovací) tabulky, která obsahuje cizí klíče obou entit

## Klíče v relačním modelu

- Primární klíč (PK) – atribut nebo kombinace atributů, které jednoznačně identifikují každý záznam v tabulce; nesmí obsahovat hodnotu NULL a musí být unikátní; často se používá umělý (surogátní) klíč typu automaticky generované ID
- Kandidátní klíč – kterýkoliv atribut nebo kombinace atributů, které by mohly sloužit jako primární klíč (splňují jedinečnost); z kandidátních klíčů se vybírá jeden jako primární
- Cizí klíč (FK, foreign key) – atribut v jedné tabulce, který odkazuje na primární klíč jiné (nebo téže) tabulky; realizuje vztah mezi tabulkami
- Složený klíč – klíč tvořený kombinací více atributů (typicky u vazebních tabulek pro M:N vztahy)

## Návrh struktury tabulek, číselníky, integritní omezení

- Návrh propojení tabulek vychází z E-R modelu – každá entita se stává tabulkou, atributy sloupci, vztahy se realizují pomocí cizích klíčů (u 1:N) nebo vazebních tabulek (u M:N)
- Číselník – pomocná tabulka s předem definovaným, uzavřeným seznamem hodnot (např. seznam krajů, seznam typů plateb, seznam kategorií produktů); místo opakovaného zapisování textu se v hlavní tabulce ukládá jen odkaz (ID) na řádek číselníku
	- Výhody číselníků – odstraňují redundanci, zajišťují konzistenci (nelze zapsat překlep v názvu kraje), usnadňují filtrování a překlady
- Identifikátor dat – jednoznačné označení záznamu (typicky primární klíč); u číselníků obvykle krátký kód (zkratka)
- Integritní omezení – pravidla, která databáze vynucuje, aby zabránila vzniku nekonzistentních dat
	- Doménová integrita – hodnota atributu musí odpovídat povolenému typu a rozsahu (např. věk 0–120)
	- Entitní integrita – primární klíč musí být unikátní a nesmí být NULL
	- Referenční integrita – hodnota cizího klíče musí odpovídat existujícímu záznamu v odkazované tabulce (nelze mít objednávku od neexistujícího zákazníka); databáze může operace, které by referenční integritu porušily, zakázat nebo je řešit kaskádově (CASCADE – smazání/úprava se promítne i do závislých záznamů)

## Normalizace

- Normalizace – proces úpravy struktury relační databáze tak, aby se minimalizovala redundance dat a předešlo se anomáliím při vkládání, aktualizaci a mazání záznamů
- 1. normální forma (1NF) – každý atribut obsahuje pouze atomickou (dále nedělitelnou) hodnotu, žádné opakující se skupiny sloupců; tabulka má primární klíč
- 2. normální forma (2NF) – tabulka splňuje 1NF a všechny neklíčové atributy jsou závislé na celém primárním klíči, ne jen na jeho části (týká se tabulek se složeným klíčem)
- 3. normální forma (3NF) – tabulka splňuje 2NF a žádný neklíčový atribut nezávisí na jiném neklíčovém atributu (odstranění tzv. tranzitivní závislosti); v praxi se u maturitní úrovně obvykle žádá dosažení právě 3NF
- Důsledek normalizace – data jsou rozdělena do více menších, provázaných tabulek místo jedné velké tabulky s opakujícími se údaji

## Procesy zpracování dat a role uživatelů

- Návrh procesů zpracování dat vychází z toho, kdo, kdy a jak s daty pracuje – zahrnuje pořízení dat (vstup), jejich úpravu, vyhledávání, agregaci (souhrny, reporty) a archivaci
- Typické role uživatelů IS
	- Administrátor (správce) databáze – vytváří strukturu databáze, spravuje přístupová oprávnění, zálohuje data, řeší výkon a bezpečnost
	- Vývojář/analytik – navrhuje datový model a aplikační logiku
	- Běžný uživatel (koncový uživatel) – pracuje s daty přes formuláře a sestavy, obvykle s omezenými právy (např. jen čtení nebo zápis do vybraných tabulek)
	- Auditor – kontroluje historii změn a dodržování pravidel
- Přidělení odpovídajících práv jednotlivým rolím (princip minimálních oprávnění) je součástí návrhu zabezpečení IS – uživatel by měl mít přístup jen k datům a operacím, které nezbytně potřebuje pro svou činnost

## Praktický příklad – e-shop v MySQL

Aby bylo vidět, jak celý postup (analýza → E-R model → klíče → normalizace) vypadá na konkrétním zadání, projdeme si jednoduchý informační systém e-shopu, který eviduje zákazníky, jejich objednávky a produkty. Tohoto příkladu (stejné tabulky) se drží i následující kapitola o jazyce SQL.

### Entity a vztahy

- ZÁKAZNÍK – osoba, která si v e-shopu objednává zboží
- OBJEDNÁVKA – konkrétní objednávka vytvořená zákazníkem k určitému datu
- PRODUKT – zboží, které lze objednat
- Vztah ZÁKAZNÍK – OBJEDNÁVKA je **1:N** – jeden zákazník může mít víc objednávek, ale konkrétní objednávka patří vždy právě jednomu zákazníkovi
- Vztah OBJEDNÁVKA – PRODUKT je **M:N** – jedna objednávka může obsahovat víc produktů a stejný produkt se může objevit ve víc objednávkách; v relačním modelu se proto zavádí čtvrtá, vazební tabulka POLOŽKA_OBJEDNÁVKY, která obsahuje cizí klíče obou entit a navíc vlastní atribut – množství (kolik kusů daného produktu si zákazník objednal)

### Převod do tabulek – MySQL

```sql
CREATE DATABASE eshop CHARACTER SET utf8mb4;
USE eshop;

CREATE TABLE zakaznik (
    id INT PRIMARY KEY AUTO_INCREMENT,
    jmeno VARCHAR(50) NOT NULL,
    prijmeni VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefon VARCHAR(20)
) ENGINE=InnoDB;

CREATE TABLE produkt (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nazev VARCHAR(100) NOT NULL,
    cena DECIMAL(10,2) NOT NULL,
    sklad_mnozstvi INT NOT NULL DEFAULT 0
) ENGINE=InnoDB;

CREATE TABLE objednavka (
    id INT PRIMARY KEY AUTO_INCREMENT,
    datum DATE NOT NULL,
    zakaznik_id INT NOT NULL,
    FOREIGN KEY (zakaznik_id) REFERENCES zakaznik(id)
) ENGINE=InnoDB;

-- vazební tabulka pro vztah M:N mezi objednávkou a produktem
CREATE TABLE polozka_objednavky (
    id INT PRIMARY KEY AUTO_INCREMENT,
    objednavka_id INT NOT NULL,
    produkt_id INT NOT NULL,
    mnozstvi INT NOT NULL DEFAULT 1,
    FOREIGN KEY (objednavka_id) REFERENCES objednavka(id),
    FOREIGN KEY (produkt_id) REFERENCES produkt(id)
) ENGINE=InnoDB;
```

- `ENGINE=InnoDB` – úložný modul (storage engine) MySQL, který podporuje cizí klíče (referenční integritu) a transakce; je to výchozí a nejpoužívanější modul, u maturity je dobré umět zdůvodnit, proč se používá právě on (na rozdíl od staršího MyISAM, který cizí klíče nevynucuje)
- `zakaznik_id` v tabulce `objednavka` je cizí klíč realizující vztah 1:N
- `objednavka_id` a `produkt_id` v tabulce `polozka_objednavky` jsou dva cizí klíče, jejichž kombinací se realizuje vztah M:N – typický příklad vazební (spojovací) tabulky z kapitoly o vztazích mezi entitami
- Sloupec `mnozstvi` ukazuje, že vazební tabulka nemusí obsahovat jen cizí klíče, ale i vlastní atributy vztahu (kolik kusů, za jakou cenu v okamžiku objednání apod.)
