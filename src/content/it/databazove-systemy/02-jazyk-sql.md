---
title: "Jazyk SQL a práce s databází"
order: 2
tags: ["doplněno"]
---

## Jazyk SQL

- SQL (Structured Query Language) – standardizovaný dotazovací jazyk pro práci s relačními databázemi; umožňuje definovat strukturu databáze, vkládat, upravovat, mazat a vyhledávat data
- Výhody použití SQL
	- Standardizace – podporován prakticky všemi relačními SŘBD (MySQL, PostgreSQL, MS SQL Server, Oracle, MS Access, SQLite), byť s drobnými dialektovými odlišnostmi
	- Deklarativnost – uživatel popisuje, co chce získat, ne jak k tomu má systém dojít (na rozdíl od procedurálních jazyků); optimalizaci provedení řeší SŘBD
	- Jednotné ovládání – stejným jazykem lze jak definovat strukturu databáze, tak s daty pracovat i řídit přístupová práva
	- Efektivita při práci s velkým objemem dat – dotazy nad tisíci až miliony záznamů jsou díky indexům a optimalizátoru rychlé
	- Bezpečnost – umožňuje přesně řídit, kdo smí která data číst nebo měnit

### Kategorie příkazů SQL

- DDL (Data Definition Language) – definice struktury databáze
	- `CREATE` – vytvoření objektu (databáze, tabulky, indexu)
	- `ALTER` – úprava struktury existujícího objektu
	- `DROP` – odstranění objektu
- DML (Data Manipulation Language) – práce se samotnými daty
	- `SELECT` – výběr (dotazování) dat
	- `INSERT` – vložení nových záznamů
	- `UPDATE` – úprava existujících záznamů
	- `DELETE` – smazání záznamů
- DCL (Data Control Language) – řízení přístupových práv
	- `GRANT` – přidělení oprávnění uživateli
	- `REVOKE` – odebrání oprávnění uživateli
- TCL (Transaction Control Language, doplňkově) – řízení transakcí: `COMMIT` (potvrzení změn), `ROLLBACK` (vrácení změn)

## Definice struktury – DDL

```sql
CREATE DATABASE eshop;

CREATE TABLE zakaznik (
	id INT PRIMARY KEY AUTO_INCREMENT,
	jmeno VARCHAR(50) NOT NULL,
	email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE objednavka (
	id INT PRIMARY KEY AUTO_INCREMENT,
	datum DATE NOT NULL,
	zakaznik_id INT NOT NULL,
	FOREIGN KEY (zakaznik_id) REFERENCES zakaznik(id)
);

ALTER TABLE zakaznik ADD telefon VARCHAR(20);

DROP TABLE objednavka;
```

- `PRIMARY KEY` – definuje primární klíč tabulky
- `FOREIGN KEY ... REFERENCES` – definuje cizí klíč a vazbu na jinou tabulku (referenční integrita)
- `NOT NULL`, `UNIQUE` – integritní omezení na úrovni sloupce

## Práce s daty – DML

```sql
-- vložení záznamu
INSERT INTO zakaznik (jmeno, email) VALUES ('Jan Novák', 'jan@example.com');

-- úprava záznamu
UPDATE zakaznik SET telefon = '777123456' WHERE id = 1;

-- smazání záznamu
DELETE FROM zakaznik WHERE id = 1;
```

### Výběr dat – SELECT

```sql
-- výběr sloupců s podmínkou
SELECT jmeno, email FROM zakaznik WHERE jmeno LIKE 'J%';

-- řazení výsledků
SELECT * FROM objednavka ORDER BY datum DESC;

-- seskupení a agregace
SELECT zakaznik_id, COUNT(*) AS pocet_objednavek
FROM objednavka
GROUP BY zakaznik_id
HAVING COUNT(*) > 2;
```

- `WHERE` – filtruje záznamy podle podmínky
- `ORDER BY` – řadí výsledky (`ASC` vzestupně – výchozí, `DESC` sestupně)
- `GROUP BY` – seskupuje záznamy podle hodnoty sloupce, obvykle s agregační funkcí (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`)
- `HAVING` – filtruje až seskupené výsledky (na rozdíl od `WHERE`, které filtruje jednotlivé řádky před seskupením)
- `DISTINCT` – odstraní duplicitní řádky z výsledku

### Propojení tabulek – JOIN

- Vyhledávání napříč propojenými entitami se řeší spojením tabulek přes vazbu primární klíč – cizí klíč
- `INNER JOIN` – vrátí pouze záznamy, které mají shodu v obou tabulkách
- `LEFT JOIN` – vrátí všechny záznamy z levé tabulky, i když k nim není odpovídající záznam v pravé (chybějící hodnoty jako NULL)
- `RIGHT JOIN` – obdobně, ale zachová všechny záznamy z pravé tabulky

```sql
SELECT z.jmeno, o.datum
FROM zakaznik z
INNER JOIN objednavka o ON z.id = o.zakaznik_id
ORDER BY o.datum;
```

- Stejný princip se používá při vyhledávání přes číselníky – hodnota se v hlavní tabulce ukládá jako cizí klíč (ID) a spojením s číselníkem se dotazem doplní čitelný text (např. název kraje místo jeho kódu)

## Zdroje záznamů, import a export dat

- Zdroj záznamů v informačním systému – tabulka, pohled (view) nebo výsledek dotazu, ze kterého se data čerpají; u víceuživatelských systémů může jít i o vzdálenou databázi nebo externí soubor (CSV, XML, JSON)
- Při práci se zdrojem dat je třeba posoudit
	- Umístění – lokální databáze, síťový server, cloudová služba
	- Validitu – zda jsou data aktuální, úplná a odpovídají očekávané struktuře (typům, formátům)
	- Míru zabezpečení – zda je přístup chráněn autentizací, zda je spojení šifrované, jaká má zdroj přístupová práva
- Hromadný import – vložení velkého množství dat najednou, typicky z souboru (CSV, Excel) pomocí nástrojů jako `LOAD DATA INFILE` (MySQL) nebo importních průvodců v grafických nástrojích
- Hromadný export – vyexportování dat z databáze do souboru pro přenos, zálohu nebo zpracování v jiném nástroji (např. `SELECT ... INTO OUTFILE`, export přes grafického klienta do CSV/Excelu)

## Vytvoření databáze a přístupová oprávnění – DCL

```sql
CREATE DATABASE firma;

CREATE USER 'petr'@'localhost' IDENTIFIED BY 'heslo123';

GRANT SELECT, INSERT ON firma.* TO 'petr'@'localhost';

REVOKE INSERT ON firma.* FROM 'petr'@'localhost';
```

- `GRANT` – přiděluje konkrétnímu uživateli konkrétní oprávnění na databázi, tabulce nebo sloupci (např. jen čtení, nebo čtení a zápis)
- `REVOKE` – odebírá dříve přidělené oprávnění
- Princip minimálních oprávnění – uživatel by měl mít přidělena jen ta práva, která nezbytně potřebuje pro svou roli

## Archivace a obnova dat

- Zálohování (backup) – pravidelné vytváření kopie databáze pro případ havárie, chyby uživatele nebo napadení
	- Úplná záloha – kopie celé databáze
	- Přírůstková (inkrementální) záloha – zálohují se jen změny od poslední zálohy, šetří místo a čas
- Obnova (restore) – načtení dat ze zálohy zpět do databáze po havárii nebo chybě
- Transakce – posloupnost operací, která se provede buď celá, nebo vůbec (atomicita); `COMMIT` změny trvale uloží, `ROLLBACK` je vrátí zpět, pokud dojde k chybě uprostřed zpracování
- Archivace – dlouhodobé uložení starších, aktuálně nepotřebných dat mimo hlavní produkční databázi, se zachováním možnosti je later dohledat

## Praktické příklady v MySQL

Navazujeme na schéma e-shopu z předchozí kapitoly (`zakaznik`, `objednavka`, `produkt`, `polozka_objednavky`). Doplníme ho o produkty a položky objednávek a ukážeme si na něm další reálné dotazy.

```sql
USE eshop;

-- ukázková data
INSERT INTO zakaznik (jmeno, prijmeni, email, telefon) VALUES
    ('Jan', 'Novák', 'jan.novak@example.com', '777123456'),
    ('Eva', 'Svobodová', 'eva.svobodova@example.com', '602987654'),
    ('Petr', 'Dvořák', 'petr.dvorak@example.com', NULL);

INSERT INTO produkt (nazev, cena, sklad_mnozstvi) VALUES
    ('Myš USB', 249.90, 120),
    ('Klávesnice', 599.00, 45),
    ('Monitor 24"', 3490.00, 15),
    ('USB flash disk 32GB', 199.00, 200);

INSERT INTO objednavka (datum, zakaznik_id) VALUES
    ('2026-01-15', 1),
    ('2026-02-03', 1),
    ('2026-02-10', 2);

INSERT INTO polozka_objednavky (objednavka_id, produkt_id, mnozstvi) VALUES
    (1, 1, 2),
    (1, 4, 1),
    (2, 3, 1),
    (3, 2, 1),
    (3, 4, 3);
```

### JOIN přes víc tabulek

```sql
-- kdo si co objednal a v jakém množství
SELECT z.jmeno, z.prijmeni, o.datum, p.nazev, po.mnozstvi
FROM zakaznik z
INNER JOIN objednavka o ON z.id = o.zakaznik_id
INNER JOIN polozka_objednavky po ON o.id = po.objednavka_id
INNER JOIN produkt p ON po.produkt_id = p.id
ORDER BY o.datum;
```

- Dotaz postupně spojuje čtyři tabulky přes vazby primární klíč – cizí klíč (`zakaznik.id = objednavka.zakaznik_id`, `objednavka.id = polozka_objednavky.objednavka_id`, `polozka_objednavky.produkt_id = produkt.id`)

### GROUP BY a HAVING – zákazníci s víc než 5 objednávkami

```sql
SELECT z.id, z.jmeno, z.prijmeni, COUNT(o.id) AS pocet_objednavek
FROM zakaznik z
INNER JOIN objednavka o ON z.id = o.zakaznik_id
GROUP BY z.id, z.jmeno, z.prijmeni
HAVING COUNT(o.id) > 5;
```

- Nejprve se přes `JOIN` spojí zákazníci s jejich objednávkami, `GROUP BY` je seskupí po jednotlivých zákaznících a `HAVING COUNT(o.id) > 5` z výsledku ponechá jen ty, kteří mají víc než 5 objednávek – na tomto malém vzorku dat by tedy dotaz nevrátil žádný řádek, princip je ale stejný i pro tisíce záznamů

### ORDER BY a LIMIT

```sql
-- 3 nejdražší produkty v nabídce
SELECT nazev, cena FROM produkt ORDER BY cena DESC LIMIT 3;

-- 5 nejnovějších objednávek
SELECT id, datum FROM objednavka ORDER BY datum DESC LIMIT 5;
```

- `LIMIT n` omezí počet vrácených řádků, v kombinaci s `ORDER BY` se často používá pro žebříčky, poslední záznamy nebo stránkování výsledků

### UPDATE a DELETE s konkrétními daty

```sql
-- zdražení konkrétního produktu
UPDATE produkt SET cena = 279.90 WHERE nazev = 'Myš USB';

-- odebrání jedné položky z objednávky č. 2
DELETE FROM polozka_objednavky WHERE objednavka_id = 2 AND produkt_id = 3;

-- doplnění telefonu zákazníkovi, který ho zatím nemá
UPDATE zakaznik SET telefon = '605112233' WHERE email = 'petr.dvorak@example.com';
```

### Práce s MySQL z příkazové řádky

Kromě grafických nástrojů lze s MySQL databází pracovat i přímo z terminálu:

```bash
mysql -u root -p
```

Po zadání hesla se otevře příkazová řádka MySQL klienta, ve které lze psát běžné SQL příkazy zakončené středníkem:

```sql
SHOW DATABASES;
USE eshop;
SHOW TABLES;
DESCRIBE zakaznik;
SELECT * FROM zakaznik;
```

- `SHOW DATABASES;` – vypíše seznam všech databází na serveru
- `USE eshop;` – přepne aktivní databázi, se kterou se dál pracuje (další příkazy se pak netýkají celého serveru, ale konkrétní databáze `eshop`)
- `SHOW TABLES;` – vypíše tabulky v aktuálně vybrané databázi
- `DESCRIBE zakaznik;` (případně `DESC zakaznik;`) – zobrazí strukturu tabulky (sloupce, datové typy, klíče)

**phpMyAdmin** – webová grafická nadstavba nad MySQL, přes kterou lze provádět stejné operace (procházení tabulek, spouštění SQL dotazů, import/export dat) bez nutnosti pamatovat si příkazovou řádku; na školách i webhostinzích bývá nejběžnějším způsobem, jak se s MySQL databází pracuje – vlevo nabízí strom databází a tabulek, v prostřední části pak záložky pro procházení dat (Procházet/Browse), spouštění vlastního SQL (SQL), úpravu struktury (Struktura/Structure) a export/import.
