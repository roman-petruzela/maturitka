---
title: "MS Access – tvorba databáze v praxi"
order: 3
tags: ["doplněno"]
---

## MS Access jako nástroj pro tvorbu databází

- Microsoft Access – desktopová aplikace pro tvorbu a správu relačních databází, součást balíku MS Office; kombinuje SŘBD (databázový engine) s grafickým nástrojem pro návrh tabulek, dotazů, formulářů a sestav
- Vhodné použití – menší a středně velké aplikace, jednoduché evidenční systémy, prototypování databází, výuka principů relačních databází; pro velké víceuživatelské systémy s vysokým zatížením se používají serverové SŘBD (MS SQL Server, MySQL, PostgreSQL)
- Efektivní a bezpečné využívání aplikace zahrnuje
	- Práci s databázovými objekty přehledně odděleně (tabulky, dotazy, formuláře, sestavy) v navigačním podokně
	- Nastavení hesla databáze / šifrování databázového souboru u citlivých dat
	- Rozdělení databáze na front-end (formuláře, sestavy) a back-end (samotná data) při sdílení mezi více uživateli, aby nedocházelo k poškození dat při současném přístupu
	- Pravidelné zálohování databázového souboru

## Tabulky a datové typy

- Tabulka (Table) – základní objekt pro uložení dat, odpovídá entitě z E-R modelu; návrhové zobrazení (Design View) umožňuje definovat sloupce (pole) a jejich vlastnosti
- Volba datového typu pole ovlivňuje, jaká data lze zadat, kolik místa zaberou a jaké operace (řazení, výpočty) s nimi lze provádět
	- Krátký text (Short Text) – kratší textové údaje (jméno, PSČ), max. 255 znaků
	- Dlouhý text (Long Text/Memo) – delší poznámky, popisy
	- Číslo (Number) – celá nebo desetinná čísla, s volbou velikosti (Byte, Integer, Long Integer, Double)
	- Měna (Currency) – peněžní částky s přesným zaokrouhlením
	- Datum a čas (Date/Time)
	- Ano/Ne (Yes/No) – logická hodnota
	- Automatické číslo (AutoNumber) – automaticky generované unikátní číslo, typicky pro primární klíč
	- Příloha/OLE objekt (Attachment) – obrázky a soubory
	- Vyhledávání (Lookup Wizard) – pole, jehož hodnota se vybírá ze seznamu (typicky z jiné tabulky – slouží jako číselník)

## Relace mezi tabulkami

- Návrh struktury vychází z E-R modelu – každá entita se stane tabulkou, primární klíč se nastaví na poli AutoNumber (nebo jiném jednoznačném identifikátoru)
- Relace se vytvářejí v okně Vztahy (Relationships) – přetažením primárního klíče jedné tabulky na odpovídající cizí klíč druhé tabulky
	- Vztah 1:N – nejběžnější, např. jeden zákazník má více objednávek
	- Vztah M:N – realizuje se přes vazební tabulku obsahující cizí klíče obou souvisejících tabulek (např. tabulka mezi STUDENT a KURZ)
- Referenční integrita – při vytváření relace lze zaškrtnout „Zajistit referenční integritu", díky čemuž Access neumožní vložit záznam s neexistujícím cizím klíčem ani smazat záznam, na který se ještě odkazují jiné záznamy (případně lze povolit kaskádové aktualizace a mazání)

## Dotazy (Queries)

- Dotaz – objekt, který na základě zadaných kritérií vybírá, kombinuje nebo upravuje data z jedné či více tabulek; lze jej vytvořit v návrhovém zobrazení (graficky) nebo přímo v SQL zobrazení
- Výběrový dotaz (Select Query) – nejběžnější typ, vybere z tabulek záznamy splňující zadaná kritéria a zobrazí je jako výsledkovou tabulku; umožňuje řazení, filtrování, výpočty i propojení více tabulek (obdoba `SELECT ... WHERE ... JOIN` v SQL)
- Křížový dotaz (Crosstab Query) – speciální typ dotazu, který agreguje data a zobrazí je v podobě kontingenční tabulky – hodnoty jednoho pole jako záhlaví řádků, hodnoty druhého pole jako záhlaví sloupců a v průsečících agregovanou hodnotu (součet, počet, průměr); vhodný např. pro přehled tržeb podle měsíce (řádky) a produktu (sloupce)
- Další typy dotazů – aktualizační (Update Query), přidávací (Append Query), odstraňovací (Delete Query), vytvářecí tabulku (Make Table Query)

## Formuláře

- Formulář (Form) – objekt určený pro pohodlné zadávání, prohlížení a úpravu dat přes grafické rozhraní místo přímé práce s tabulkou
- Vytváří se buď průvodcem (Form Wizard), nebo ručně v návrhovém zobrazení; lze do něj vkládat textová pole, seznamy, přepínače, tlačítka a podformuláře (pro zobrazení souvisejících záznamů z propojené tabulky, např. objednávky konkrétního zákazníka)
- Vhodné použití formuláře
	- Omezení přímého přístupu běžných uživatelů k tabulkám (formulář jako kontrolovaná vrstva mezi uživatelem a daty)
	- Validace vstupů (např. povinná pole, formát zadání) ještě před uložením do tabulky
	- Přehlednější a rychlejší práce s daty pro koncového uživatele

## Sestavy (Reports)

- Sestava – objekt určený pro tiskový nebo přehledový výstup dat, na rozdíl od formuláře není určena k editaci, ale k prezentaci a souhrnům
- Vytváří se z tabulky nebo dotazu, obvykle seskupené podle vybraného pole (např. sestava objednávek seskupená podle zákazníka)
- Agregační funkce v sestavách – do zápatí skupiny nebo celé sestavy lze vložit souhrnná pole s funkcemi
	- `Sum` – součet (např. celková částka objednávek)
	- `Count` – počet záznamů
	- `Avg` – průměr
	- `Min` / `Max` – minimální a maximální hodnota
- Sestavy se typicky používají pro reporty vedení, fakturační přehledy nebo statistiky za období

## Testování a řešení chybových stavů

- Testování řešení informačního systému zahrnuje ověření, zda tabulky, relace, dotazy, formuláře i sestavy fungují podle zadání a zda odolají i neočekávaným vstupům (chybějící hodnoty, duplicity, extrémní čísla)
- Typické chybové stavy a jejich příčiny
	- Porušení referenční integrity – pokus vložit záznam s cizím klíčem, který neodkazuje na existující záznam (např. objednávka pro neexistujícího zákazníka); řešením je nastavit vyhledávací pole nebo formulářový combo box, který nabízí jen platné hodnoty
	- Duplicitní záznam v poli s jedinečností (unikátní index) – řešením je kontrola před uložením nebo úprava návrhu (např. sloučení duplicitních záznamů)
	- Nesprávný datový typ zadaný uživatelem – Access takové zadání typicky odmítne; vhodné je nastavit vstupní masky nebo validační pravidla pole
	- Prázdné (NULL) povinné pole – řeší se nastavením vlastnosti pole „Vyžadováno" (Required) na Ano
	- Pomalý dotaz nad velkým objemem dat – řešením bývá přidání indexu na často filtrovaná nebo řazená pole
- Postup při odstraňování chyby – identifikace místa vzniku (tabulka, dotaz, formulář), analýza příčiny (chybějící integritní omezení, špatně navržená relace, chybějící validace), oprava návrhu a opětovné otestování s reálnými i hraničními daty

## Access vs. MySQL

- MS Access – souborová databáze (celá databáze je jeden soubor `.accdb`), engine běží přímo v aplikaci na počítači uživatele; vhodná pro jednoho uživatele nebo malý tým na sdíleném disku, návrh přes grafické rozhraní bez nutnosti znát SQL
- MySQL – klient-server databáze; databázový server (`mysqld`) běží samostatně (typicky na jiném stroji než uživatel) a klienti se k němu připojují po síti, zvládá desítky až tisíce současných připojení
- Kdy použít co
	- Access – rychlé prototypy, malé firemní evidence, výuka principů relačních databází, aplikace pro jednotky uživatelů
	- MySQL – webové aplikace (e-shopy, redakční systémy), cokoliv, k čemu přistupuje víc uživatelů/zařízení najednou, systémy vyžadující vyšší výkon a škálovatelnost
- Access dotazy se dají psát i v SQL zobrazení – syntaxe je velmi podobná MySQL (`SELECT`, `WHERE`, `JOIN`), takže znalost jednoho usnadňuje přechod na druhé, drobné rozdíly jsou např. v zápisu dat a některých funkcích
