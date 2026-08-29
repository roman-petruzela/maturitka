---
title: "Databáze I – praktikum"
order: 5
source: "MATURITA HADR/IT/DAT_I-praktikum.pdf"
---
### Úvod

- Jazyk SQL není case sensitive. Doporučuji však hlavně v postgre sjednotit case v názvech.

- Tabulka je nazvána podstatným jménem v **<u>množném čísle</u>** <u>.</u>

- Nerozšířená spojovací tabulka je nazvána **(prvnítřipísmena 1. tabulka)_(prvnítřipísmena 2. tabulka)** .

- Vytvořte si vlastní konvence pro důležité constraints a sloupce.

`o` Sloupec ID například:

   - **Id_první_tři_písmenka_z_tabulky**

- **První_tři_písmenka_z_tabulky_id**

- `o` PK například: _Pk_tabulka[_sloupec]_ `o` FK například: _Fk_tabulka_sloupec_

#### MySQL

Pro práci s MySQL je potřeba nainstalovat program Xampp nebo Wamp (Wamp je v podstatě 64bitový Xampp). Potřebujeme dvě komponenty (moduly): Apache server a MySQL. Apache koliduje se Skype, protože oba defaultně používají port 80.

- Vypnout Skype, zapnout Apache, zapnout Skype.

- Nastavit Apache (spustit Xampp jako správce) jako Službu (servise) – bude se spouštět první

- Nastavit jiný port pro Apache.

Do rozhraní pro SQL se následně dostaneme ve webovém prohlížeči na adrese:

- Pro defaultní port: http://localhost/phpmyadmin/

- Pro jiný port: localhost:[port_nr]/phpmyadmin

###### **<u>Vytvoření databáze:</u>**

Žlutá: Panel s databázemi a tlačítko pro vytvoření nové databáze. Červená: Porovnávání (collation). Nastavit **uft8_czech_ci** , pro česká data, která v hodinách používáme. **Důležité!**

Databáze II. ročník | Praktikum

**<u>Rozhraní pro tvorbu SQL queries: part 1</u>**

Označíme tabulku v _Panelu s databázemi_ , klikneme v horním panelu na záložku **SQL** . Obrazovka obsahuje tlačítka na automatické vygenerování **DML query** a panel se sloupci v dané tabulce.

_Toto rozhraní bychom používat_ **_neměli._**

###### **<u>Rozhraní pro tvorbu SQL queries: part 2</u>**

Databáze II. ročník | Praktikum

Při kliknutí na databázi ( _2it_ ) a na záložku **SQL** , se zobrazí prostředí pro tvorbu query.

Zelená: V záložce **Designer** se můžete podívat na grafické znázornění databáze. Popřípadě v něm upravovat, což my ale používat nebudeme.

#### PostgreSQL

Pro práci s PostgreSQL je potřeba nainstalovat PostgreSQL od EnterpriseDB. PostgreSQL se skládá z programu pgAdmin a postgre serveru. PgAdmin prostředí vypadá na první pohled složitěji. Důvodem je možnost připojovat se k více serverům a tabulky jsou součástí schémat kvůli lepší udržovatelnosti a uživatelským právům.

Z různých důvodů poslední verze studentům občas nefunguje. Pokud poslední verze (pgAdmin 4, pgSQL 9.6), doporučuji vyzkoušet pgAdmin III a verzi 9.5.4.

Pokud chcete začít v prostředí cokoliv dělat, musíte se připojit na server s databází. Pokud jste pg nainstalovali celé, server by se měl vyhledat automaticky.

_Také lze změnit port při instalaci, default by měl být 5432._

Dvojklikem se připojíte na **server** . Rozkliknete **Databáze** . S databází **postgres** bych nepracoval.

Až budete mít databázi vytvořenou, připojíte se k ní dvojklikem. Zpočátku by měla mít ikonku s červeným křížkem. Pak můžete rozklikávat jednotlivé objekty včetně **schéma** tu, kde jsou uloženy tabulky.

**Důležité:** PgAdmin počítá s business provozem, tudíž automaticky nerefreshuje (neobčerstvuje) při vytváření databázových objektů. Je potřeba po vytvoření kliknout pravým a **Občerstvit** ( **Refresh** ).

###### **<u>Vytvoření databáze pgAdmin III:</u>**

Databáze II. ročník | Praktikum

Klikneme pravým tlačítkem na **Databáze** , objeví se menu a vybereme **Nová databáze…** .

Z daných polí nás bude zajímat zatím akorát **Název** v prvním obrázku, **Kódování, Porovnávání** a **Klasifikace znaků** v obrázku druhém. Kódování by mělo být defaultně na **UTF8** a porovnává české ( **Czech_Czech Republic.1250** ). Zbytek se nastaví automaticky.

**<u>Vytvoření databáze pgAdmin 4:</u>**

První čeho si všimneme v prostředí, je grafický upgrade. Pocit nadšení je však brzy nahrazen pocitem zklamání, že kvůli designu byla obětována Windows vyskakovací okna a panely. Nyní už nejde mít jakékoliv vyskakovací okno mimo okno hlavní, takže pokud hlavní okno minimalizujeme, minimalizujeme i všechna ostatní okna aplikace. Další důležitou změnu je monitoring na panelu **Dashboard** , kterou zatím nevyužijeme.

Databáze II. ročník | Praktikum

Většina ostatních věcí zůstala stejná, pro vytvoření databáze se podívejte o kousek výše na **pgAdmin III** .

Na obrázku je vidět anglická verze, jejíž názvy občas možná použiji. **Servers** , **Databases** , **Create** , **Database…** , **Collation** , **Character Type** .

### Úkol 1

###### **Pracujte graficky, následně vytvořte tabulku ještě jednou kódem.**

Všechny sloupce jsou _NOT NULL_ , tabulka má na sloupci **id** _primární klíč_ a sloupec **registered** má _default current_timestamp_ .

```
E: users (id integer A_I, PK, name varchar NN, password varchar NN, registered datetime
current_timestamp)
```

#### Řešení

Žlutá: Základní atributy tabulky: název a datový typ.

Červená: Všimněte si, že varchar má danou maximální délku, nemá defaultní hodnotu a má collation –

porovnávání utf8_czech_ci stejně jako tabulka (červená dole). Int má defaultní délku, proto může zůstat prázdná. Zelená: Defaultní hodnota: Pro ostatní sloupce nepotřebujeme, sloupec registered má nastaveno, že pokud se neuloží žádná hodnota, vloží se časové razítko.

Černá: Pokud je checkbox zaškrtlý, pole nesmí být null.

Modrá: Atributy id_u jsou unsigned – bez znaménka, primary – primární klíč a AUTO_INCREMENT – postupně se doplňuje do hodnoty 1 – n.

**_DROP_** _něte grafické řešení, nebo použijte jiný název pro další tabulku._

##### MySQL

```
CREATE TABLE users (
id_user int unsigned PRIMARY KEY AUTO_INCREMENT,
name varchar(32) NOT NULL,
password varchar(32) NOT NULL,
registered datetime NOT NULL CURRENT_TIMESTAMP
);
```

Databáze II. ročník | Praktikum

##### PostgreSQL

```
CREATE TABLE users (
id_user seriál PRIMARY KEY,
name varchar(32) NOT NULL,
password varchar(32) NOT NULL,
registered timestamp [with time zone] NOT NULL default CURRENT_TIMESTAMP
);
```

### Úkol 2

**Vytvořte kódem.** Primární klíče přidejte na úrovni tabulky při vytvoření.

`E: cars (id integer, spz varchar) E: drivers (id integer, name varchar)` Dropněte jeden z primárních klíčů a přidejte ho znovu. Následně přidejte sloupec **driver** do tabulky **cars** . Přidejte cizí klíč.

Řešení MySQL `CREATE TABLE cars ( id_car int unsigned AUTO_INCREMENT, spz varchar(10) NOT NULL, PRIMARY KEY (id_cars)); CREATE TABLE drivers ( id_driver int unsigned AUTO_INCREMENT, name varchar(32) NOT NULL, CONSTRAINT drivers_pk PRIMARY KEY (id_driver));`

```
ALTER TABLE cars
DROP PRIMARY KEY;
ALTER TABLE drivers
DROP CONSTRAINT drivers_pk;
ALTER TABLE cars
ADD CONSTRAINT pk_cars PRIMARY KEY (id_car);
ALTER TABLE drivers
ADD PRIMARY KEY (id_driver);
ALTER TABLE cars
ADD COLUMN driver int unsigned;
ALTER TABLE cars
ADD CONSTRAINT fk_cars_driver FOREIGN KEY (driver) REFERENCES driver(id_driver);
```

PostgreSQL `CREATE TABLE cars ( id_car serial, spz varchar(10) NOT NULL, PRIMARY KEY (id_car)); CREATE TABLE drivers ( id_driver serial, name varchar(32) NOT NULL, CONSTRAINT drivers_pk PRIMARY KEY (id_driver));`

```
ALTER TABLE cars
```

Databáze II. ročník | Praktikum

```
DROP PRIMARY KEY;
ALTER TABLE drivers
DROP CONSTRAINT drivers_pk;
ALTER TABLE cars
ADD CONSTRAINT pk_cars PRIMARY KEY (id_car);
ALTER TABLE drivers
ADD PRIMARY KEY (id_driver);
ALTER TABLE cars
ADD COLUMN driver int;
ALTER TABLE cars
ADD CONSTRAINT fk_cars_driver FOREIGN KEY (driver) REFERENCES driver(id_driver);
```

Databáze II. ročník | Praktikum

### Úkol 3

###### **Vytvořte kódem.**

#### Řešení

##### MySQL

```
CREATE TABLE typy_vozidla (
id_tv int unsigned AUTO_INCREMENT,
nazev varchar NOT NULL,
PRIMARY KEY (id_tv));
```

```
CREATE TABLE vozidla (
id_voz int unsigned AUTO_INCREMENT,
SPZ varchar(10),
barva varchar(32),
cena decimal(19,4) NOT NULL,
typ int unsigned NOT NULL,
PRIMARY KEY (id_voz));
```

```
ALTER TABLE Vozidla
ADD constraint fk_vozidla_typ FOREIGN KEY (typ) REFERENCES typy_vozidla(id_tv);
```

```
CREATE TABLE vypujcky(
id_vyp int unsigned AUTO_INCREMENT,
od_kdy date NOT NULL,
do_kdy date NOT NULL,
celk_cena decimal(19,4) NOT NULL,
zak_id int unsigned NOT NULL,
voz_id int unsigned NOT NULL,
PRIMARY KEY (id_vyp));
```

```
CREATE TABLE zakaznici (
id_zak int unsgined AUTO_INCREMENT,
jmeno varchar NOT NULL,
OP int NOT NULL,
PRIMARY KEY (id_zak));
```

Databáze II. ročník | Praktikum

```
ALTER TABLE vyjpujcky
ADD CONSTRAINT fk_vypujcky_zak_id FOREIGN KEY(zak_id) REFERENCES zakaznici(id_tv);
```

```
ALTER TABLE vyjpujcky
ADD CONSTRAINT fk_vypujcky_voz_id FOREIGN KEY(voz_id) REFERENCES vozidla(id_voz);
```

PostgreSQL

```
CREATE TABLE typy_vozidla (
id_tv serial,
nazev varchar NOT NULL,
PRIMARY KEY (id_tv));
```

```
CREATE TABLE vozidla (
id_voz serial,
spz varchar(10),
barva varchar(25),
cena decimal(19,4) NOT NULL,
typ int NOT NULL,
PRIMARY KEY (id_voz));
ALTER TABLE vozidla ADD constraint fk_Typyvozidel FOREIGN KEY (typ) REFERENCES
typy_vozidel(id_tv);
```

```
CREATE TABLE vypujcky (
id_vyp serial,
od_kdy date NOT NULL,
do_kdy date NOT NULL,
cel_cen decimal(19,4) NOT NULL,
zak_id int NOT NULL,
voz_id int NOT NULL,
PRIMARY KEY (id_vyp));
CREATE TABLE zakaznici (
id_zak serial,
jmeno varchar(32) NOT NULL,
OP int NOT NULL);
```

```
ALTER TABLE vypujcky
ADD CONSTRAINT fk_vypujcky_zak_id FOREIGN KEY(zak_id) REFERENCES zakaznici(id_tv);
```

```
ALTER TABLE vypujcky
```

```
ADD CONSTRAINT fk_vypujcky_voz_id FOREIGN KEY(voz_id) REFERENCES vozidla(id_voz);
```

Databáze II. ročník | Praktikum

### Úkol 4

###### **Vytvořte kódem. Vložte řádky.**

###### **Vložte cizí klíče.**

**Upravte v tabulce classrooms** **_code_ místnosti, kde má** **_building_ hodnotu 1 tak, že přidáte na začátek znak „S“. Smažte řádky v tabulce classrooms, kde** **_type_ je roven 2.**

#### Řešení

##### MySQL

```
CREATE TABLE students (
```

```
id_s int unsigned PRIMARY KEY AUTO_INCREMENT,
first_name varchar(32) NOT NULL,
last_name varchar(32) NOT NULL,
class int unsigned NOT NULL);
```

```
CREATE TABLE classes (
```

```
id_c int unsigned PRIMARY KEY AUTO_INCREMENT,
code varchar(6) NOT NULL,
year int(1) NOT NULL,
class_room int unsigned NOT NULL);
```

```
CREATE TABLE classrooms (
id_r int unsigned PRIMARY KEY AUTO_INCREMENT,
code varchar(10) NOT NULL,
building int unsigned NOT NULL);
```

```
CREATE TABLE teachers (
```

```
id_t int unsigned PRIMARY KEY AUTO_INCREMENT,
first_name varchar(32) NOT NULL,
last_name varchar(32) NOT NULL);
```

Databáze II. ročník | Praktikum

PostgreSQL `CREATE TABLE students ( id_s serial PRIMARY KEY, first_name varchar(32) NOT NULL, last_name varchar(32) NOT NULL, class int NOT NULL);`

```
CREATE TABLE classes (
id_c serial PRIMARY KEY,
code varchar(6) NOT NULL,
year int NOT NULL,
class_room int NOT NULL);
CREATE TABLE classrooms (
id_r serial PRIMARY KEY,
code varchar(10) NOT NULL,
building int NOT NULL);
CREATE TABLE teachers (
id_t serial PRIMARY KEY,
first_name varchar(32) NOT NULL,
last_name varchar(32) NOT NULL);
```

`//TODO: Foreign keys` Spolčený insert, update, delete `INSERT INTO teachers (id_t, first_name, last_name) VALUES (1, 'Jan', 'Novák'), (2, 'Petr', 'Svoboda'), (3, 'Karel', 'Dvořák'), (4, 'Tomáš', 'Černý'), (5, 'Martin', 'Procházka'), (6, 'Eva', 'Veselá'); INSERT INTO classrooms (code, type, building) VALUES ('228', 2, 1), ('325', 2, 1), ('221', 1, 1), ('C24', 1, 1), ('C3', 1, 1), ('318', 1, 1); INSERT INTO classes (code,year,classroom) VALUES ('ITA',1,4), ('ITB',1,5), ('ITC',1,3), ('ITA',2,3), ('ITB',2,2), ('ITC',2,2); INSERT INTO students (first_name,last_name, class) VALUES ('Michal', 'Malý', 1), ('Tomáš', 'Král', 2), ('Prokop', 'Horák', 3), ('Alois', 'Beneš', 4), ('Josef', 'Marek', 5), ('Michal', 'Pokorný', 6); UPDATE classrooms SET code = concat('S', code)`

Databáze II. ročník | Praktikum

```
WHERE building = 1;
```

V obou systémech by měl fungovat operátor zřetězení v SQL || (dvě svislítka, znáte jako OR v javě). `SET code = 'S' || code`

```
DELETE from classrooms
WHERE type = 2;
```

Databáze II. ročník | Praktikum

### Úkol 5

**Vložte řádky do úkolu 3. V tabulce** **_vozidla_ nastavte barvu black všem vozidlům krom těch, co mají barvu red. Všechny ceny vyšší než 5000, zvyšte o 350. Smažte vozidla typu 5 s cenou nižší než 2000.**

```
INSERT INTO vozidla (barva, cena, typ) VALUES
('red', 1950, 5),
('yellow', 2500, 2),
('black', 5000, 5),
('green', 2200, 5),
('red', 7500, 5),
('silver', 6500, 3),
('blue', 1800, 5),
('blue', 5500, 2);
```

```
UPDATE vozidla
SET barva='black'
WHERE barva <> 'red';   /* funguje i != */
UPDATE vozidla
SET cena = cena + 350
WHERE cena > 5000;
```

```
DELETE from vozidla
WHERE typ = 5 AND cena < 2000
```

### Úkol 6

###### **Importujte dbOrders.**

**Vypište všechny řádky a sloupce z tabulky items. Vypište sloupce: jméno | start_date ze zaměstnanců. Vypište řetězec Zam: jméno Nastoupil: (start_date). Vypište řetězec Zam: jméno Roční náklady: Vypište zaměstnance z oddělení 4, který nastoupil po roce 2005. Vypište Název zboží Cena bez daně: S dph: Daň: Vypište z Customers sloupce: id | zip | id name city zip Vypište z items id | price_tax kč | Pro 20 výrobků (cena pro dvacet kusů) po slevě (cena se slevou 60%) Vypište cenu v několika kurzech (co kurz to nový sloupec).**

```
SELECT * FROM items;
SELECT name, start_date FROM employees;
SELECT 'Zam: ' || name || ' Nastoupil: (' || start_date ||')' FROM employees;
SELECT 'Zam: ' || name || ' Roční náklady: ' || salary * 12;
SELECT * FROM employees WHERE start_date > '01-01-2005';
SELECT
name, 'Cena bez daně: ' || price || ' s daní: ' || price_tax || ' daň:' || price_tax-price
FROM items;
SELECT item_id, zip , id || name || city || zip
FROM customers;
SELECT item_id,
price_tax || 'kč', 'Pro 20 výrobků ' || price*20 || 'kč po slevě ' || price*20*0.4 || 'kč'
FROM items;
SELECT price||kč, price/20||'usd', price/24||'eur', price/38||'gbp'
FROM items;
```

Databáze II. ročník | Praktikum

### Úkol 7

**Vypište maximální plat. Vypište minimální cenu zboží. Vypište počet zaměstnanců z pobočky 4 a 5. Vypište celkový zisk společnosti z objednávek. Vypište celkové náklady na zaměstnance společnosti za měsíc. Vypište počty jednotlivého zboží v objednávkách. Vypište průměrný plat zaměstnanců na pobočku.**

### Úkol 8

**Vypište všechny zaměstnance a informace o jejich oddělení. Vypište všechny zákazníky a jejich objednávky. Vypište všechny objednávky a za ně zodpovědné pracovníky.**

**Přidejte podmínku novější než 29.12.2008.**

**Vypište všechny zaměstnance, informace o jejich oddělení a informace o vedoucím oddělení. Přidejte podmínku pro vedoucího s id 3 a 4.**

**Vypište všechny objednávky a zboží, které obsahují.**

**Přidejte podmínku pro objednávky z poboček 2 a 3.**

**Vypište jménem (názvem) Zákazníka, číslo objednávky, Zaměstnance, Pobočku, Vedoucího, zboží.**

### Úkol 9

**Vypište zákazníka, číslo objednávky a počet druhů zboží, které bylo na objednávku. Vypište vedoucího a počet zaměstnanců pod ním. (Vedoucí vždy v oddělení pracuje.) Vypište částky, za které je zodpovědný jednotlivý zaměstnanec (hodnoty objednávek).**

### Úkol 10

**Vypište počet objednávek pro všechny typy plateb. Vypište částky objednávek pro všechny typy plateb.**

### Úkol 11

**Vypište všechny informace o zaměstnanci s nejnižším platem. Vypište všechny informace o zaměstnanci s nejnižším nadprůměrným platem. Vypište zákazníky a jejich celkové utracené částky.**

**Vypište zákazníky a jejich celkové utracené částky z poboček 2 a 3, tak aby byli vypsáni všichni zákazníci. Vypište nejnižší plat z nadprůměrných.**

### Úkol 12

**Vypište objednávky, jejíchž počet kusů itemů je větší jak 20. Vypište zákazníky, jejichž celková utracená částka je větší jak 50000. Vypište zákazníky, jejichž utracená částka je větší jak 50000, nebo jejich počet koupených kusů je větší jak 10. Vypište zákazníky a průměrnou cenu jejich zakoupené výrobky.**

### Úkol 13

**Vypište zákazníka, který nejvíckrát nakoupil u pobočky s nejvyšším průměrným platem. Vypište název pobočky, počet vyřízených objednávek a celkovou částku za ně. Vypište počet objednávek podle jednotlivých měsíců.**

Databáze II. ročník | Praktikum

### Úkol 14

**Importujte dbStrategy. Uživatele a počet vesnic. Počet uživatelů na jednotlivé guildy. Počet uživatelů na jednotlivé guildy se slovem "war" uvnitř. Počet jednotek v jednotlivé guildě.**

Úkol 15

**Vypište tři nejbohatší hráče. Vypište hráče, kteří mají nad 12000 jídla. Vypište hráče a jejich celkové suroviny (hráč | celkovéMnožstvíVšechSurovin) Nejchudší hráč z nejlepší guildy.**

**Vypište měsíce názvem, počet registrovaných uživatelů, seřazeno dle pořadí měsíce.**

