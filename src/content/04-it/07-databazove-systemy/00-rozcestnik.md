---
title: "Databázové systémy – rozcestník"
order: -1
---

Rozcestník kategorie: o čem předmět je, kdy se podle ŠVP učí, co si z něj určitě zapamatovat, kde je které téma a jak souvisí s maturitou.

## O předmětu

- Jak navrhnout a používat databázi: informační systém, pojmy databázových technologií, E-R model, převod na relační tabulky, klíče a normalizace.
- Jazyk SQL – vytvoření struktury (DDL), práce s daty (DML), oprávnění (DCL) – prakticky v MySQL; ve 4. ročníku tvorba databáze v MS Access (tabulky, relace, dotazy, formuláře, sestavy).
- Navazuje na Access a Excel z [aplikací na PC](/it/#aplikace-na-pc) a využívá se ve [webovém programování](/it/#webove-programovani) (PHP + MySQL) a [programování](/it/#programovani) (práce s daty).

## Ročníky a hodiny podle ŠVP

| Ročník | Hodin týdně | Obsah (ŠVP §4.9.6) |
| --- | --- | --- |
| 3. | 2 | informační systémy a pojmy databázových technologií; E-R model a relační datový model, normalizace a integritní omezení; jazyk SQL; vlastní databáze v SQL, oprávnění, archivace a obnova |
| 4. | 1 | MS Access – datové typy, tabulky a relace, dotazy, formuláře, sestavy s agregačními funkcemi; testování a archivace |

Plné znění výstupů je v [přehledu ŠVP](/it/reference/svp-prehled/#496-databázové-systémy).

## Co si určitě zapamatovat

- **Data** = surová fakta, **informace** = data s významem. **Databáze** = strukturovaná množina dat, **SŘBD (DBMS)** = software, který ji spravuje (MySQL, PostgreSQL, MS SQL Server, Access).
- **Redundance** = zbytečné opakování téže informace; ohrožuje **konzistenci** (data si neodporují). **Integrita** = správnost dat podle pravidel (integritních omezení).
- **Modely**: hierarchický (strom) → síťový → **relační** (tabulky, vazby přes klíče, SQL) → objektový. **Konceptuální model** = E-R diagram nezávislý na konkrétním SŘBD.
- **Postup návrhu**: analýza požadavků → konceptuální návrh (E-R) → logický návrh (tabulky, klíče, normalizace) → fyzický návrh (SŘBD, datové typy, indexy).
- **E-R model** (P. Chen, 1976): **entita** → tabulka, **atribut** → sloupec, **instance** → řádek. Kardinalita **1:1**, **1:N**, **M:N** – vztah M:N se v tabulkách řeší **vazební tabulkou** s cizími klíči obou stran.
- **Primární klíč** jednoznačně určuje záznam, je unikátní a nesmí být NULL (často umělý `AUTO_INCREMENT`). **Cizí klíč** odkazuje na primární klíč jiné tabulky a tvoří vazbu. **Číselník** = tabulka s uzavřeným seznamem hodnot.
- **Normalizace**: **1NF** – atomické hodnoty, žádné opakující se skupiny, tabulka má primární klíč; **2NF** – navíc všechny neklíčové atributy závisí na celém klíči; **3NF** – navíc žádná závislost neklíčového atributu na jiném neklíčovém (tranzitivní). Cílem je obvykle 3NF.
- **SQL**: **DDL** `CREATE`, `ALTER`, `DROP`; **DML** `SELECT`, `INSERT`, `UPDATE`, `DELETE`; **DCL** `GRANT`, `REVOKE`; transakce `COMMIT`, `ROLLBACK`.
- **SELECT**: `WHERE` filtruje řádky, `ORDER BY` řadí (`ASC` / `DESC`), `GROUP BY` seskupuje s agregací (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`), `HAVING` filtruje až skupiny. **INNER JOIN** vrátí jen shody v obou tabulkách, **LEFT JOIN** všechny řádky levé tabulky.
- **Access**: objekty tabulky, dotazy (výběrový, křížový, akční – aktualizační, přidávací, odstraňovací, vytvářecí), formuláře (zadávání dat), sestavy (tisk a souhrny). Relace v okně Vztahy se zaškrtnutou **referenční integritou**. Access je souborová databáze (`.accdb`), MySQL klient-server.

## Témata kategorie

- [Informační systémy a E-R model](/it/databazove-systemy/01-informacni-systemy-a-e-r-model/) – IS, pojmy, modely databází, E-R model, klíče, normalizace
- [Databáze I – teorie](/it/databazove-systemy/01-databaze-i-teorie/) – historie modelů, pojmy, datové typy, integritní omezení
- [Jazyk SQL a práce s databází](/it/databazove-systemy/02-jazyk-sql/) – DDL, DML, JOIN, DCL, import, export a zálohy
- [Databáze I – praktikum](/it/databazove-systemy/02-databaze-i-praktikum/) – řešené úlohy v MySQL a PostgreSQL
- [MS Access – tvorba databáze v praxi](/it/databazove-systemy/03-ms-access/)

## Maturitní okruhy

Databázové systémy se u ústní zkoušky nezkouší – podle [maturitních okruhů IT](/it/reference/maturitni-okruhy/) jsou součástí praktické zkoušky a maturitní práce. Na databáze navazuje okruh 20 (SQL injection) z kybernetické bezpečnosti.

## Co je jen okrajové

- **Hierarchický a síťový model** – historie; stačí vědět, že relační model je nahradil a proč.
- **Objektový a objektově-relační model** – stačí rozlišit od relačního.
- **Druhy atributů** (složený, vícehodnotový, odvozený) – pomáhají při návrhu, nezkouší se samostatně.
- **Rozdíly dialektů SQL** mezi MySQL, PostgreSQL a Accessem a ovládání pgAdminu – praktické detaily k cvičením.
- **Front-end a back-end databáze v Accessu** – pokročilé nasazení pro více uživatelů.
