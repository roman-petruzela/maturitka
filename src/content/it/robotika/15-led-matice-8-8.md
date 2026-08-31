---
title: "LED matice 8×8"
order: 15
source: "robotika1.pol/cv13_LEDmatice8x8.pdf"
---
IT3 – RBT – Arduino – LED matice 8x8

CV-13

# **LED matice 8x8**

Díky low-voltage scanning metodě mají maticové LED displeje své výhody, kterými jsou: úspora energie, dlouhá životnost, nízké náklady, vysoký jas, dlouhý vizuální dosah, nepromokavost, aj. Maticové LED displeje mohou uspokojit potřeby různých aplikací. I díky tomu mají širokou perspektivu rozvoje.

_Obrázek 1: LED matice 8x8 a číslování pinů_

_Obrázek 2: Číslování pinů matice 8x8_

_
IT3 – RBT – Arduino – LED matice 8x8

CV-13

C1 – C8 – sloupce R1 – R8 – řádky

<u>Definice pinů - tabulkově</u>

|Sloupec(COL)|1|2|3|4|5|6|7|8|
|---|---|---|---|---|---|---|---|---|
|č.pinu matice|13|3|4|10|6|11|15|16|
|Řádek(ROW)|1|2|3|4|5|6|7|8|
|č.pinu matice|9|14|8|12|1|7|2|5|

## **Princip 8x8 maticového§ LED displeje:**

8x8 LED matice se skládá z 64 LED a každá LEDka je umístěna na průsečíku řádku a sloupce. Když je elektrická úroveň určité řady vysoká a elektrická úroveň určitého sloupce nízká, pak se odpovídající LED rozsvítí. Chceš-li rozsvítit LED na první pokus, měl bys nastavit řádek 1 na vysokou úroveň (log. 1) a sloupec 1 na nízkou úroveň (log. 0). Pak se LED na prvním bodě rozsvítí. Chceš-li rozsvítit světlo LED na prvním řádku, měl bys nastavit řádek 1 na log. 1 a sloupce (1, 2, 3, 4, 5, 6, 7, 8) na log. 0. Pak se všechny LED diody na prvním řádku rozsvítí.

Základním principem při použití LED zobrazovačů je tzv. multiplikované vysvěcování, jehož podstata spočívá v zapojení LED do matic. Tato matice je tvořena anodovou a katodovou skupinou. Data tvořící snímek jsou postupně přiváděna na anody, kdy vždy jedna z katod je sepnuta. Postupným vysvícením všech dat na všech katodách dojde k vysvícení tzv. snímku. Princip je obdobný s funkcí obrazovky televize nebo monitoru. Snímková frekvence, tedy počet zobrazených snímků za sekundu, musí být tak vysoká, aby nepůsobila rušivě na lidské oko. V praxi se používají frekvence od stovek Hz do jednotek nebo desítek kHz.

Neustálé vysvěcování snímků je poměrně náročná záležitost, jejíž složitost stoupá s počtem prvků matice. Pro matici 8x8 bodů je zapotřebí 8 bitů pro řízení anodové a dalších 8 pro řízení katodové skupiny. Tímto je zařízeno ovládání pouhých 64 bodů.

Přirozeným řešením tohoto problému je využití jednočipového mikropočítače (například Arduino) s dostatečnou kapacitou vstupních a výstupních pinů a výpočetním výkonem.

## **Budeme potřebovat**

1. Arduino Uno (nebo jinou desku).

2. USB kabel.

3. Nepájivé kontaktní pole.

4. Vodiče

5. LED matice 8x8

6. 8x Odpor 220Ω

_
IT3 – RBT – Arduino – LED matice 8x8

CV-13

## **Zapojení**

_Obrázek 3: Schéma zapojení LED matice 8x8_

### <u>Zapojení tabulkově</u>

|Arduino|Barva – dle obrázku|Rezistor|Pin LED<br>matice|
|---|---|---|---|
|A0|žlutá|ano|13|
|A1|modrá|-|14|
|A2|černá|ano|15|
|A3|červená|ano|16|
|2|fialová|-|8|
|3|hnědá|-|7|
|4|azurová|ano|6|
|5|hnědá|-|5|
|6|oranžová|ano|4|
|7|bílá|ano|3|
|8|šedá|-|2|

_
CV-13

### IT3 – RBT – Arduino – LED matice 8x8

|9|zelená|-|1|
|---|---|---|---|
|10|černá|-|9|
|11|oranžová|ano|10|
|12|žlutá|ano|11|
|13|červená|-|12|

## **Program 1**

Stáhněte zdrojový soubor programu „ **maticeLED-8x8-test.ino** “.

Do Arduino IDE vložíme kód programu a nahrajeme jej do Arduina. Program otestuje zda je LED matice vpořádku.

Co se stane, když změníte hodnotu u příkazu **delay()** ?

## **Program 2**

Stáhněte zdrojový soubor programu „ **arduino_LED_Matrix_8x8.ino** “. Do Arduino IDE vložíme kód programu a nahrajeme jej do Arduina.

_Obrázek 4: Zapojení LED matice 8x8_

_
CV-13

IT3 – RBT – Arduino – LED matice 8x8

## **Úkol:**

Upravte kód programu 2 tak, aby zobrazil vaše jméno. Použijte znaky bez diakritiky. Můžete využít: <u>https://embed.plnkr.co/3VUsekP3jC5xwSIQDVHx/preview</u> nebo <u>https://github.com/dhepper/font8x8</u>

## **Citace:**

Arduino MAXI Starter kit OD BASTLÍŘŮ BASTLÍŘŮM - Lekce 20 8x8 LED matice

_
