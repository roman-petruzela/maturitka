---
title: "LED a tlačítko s proměnnou"
order: 5
source: "robotika1.pol/cv04_LED_tlacitko_prom.pdf"
---
IT3 – RBT – Arduino – LED a tlačítko, prom

CV-04

# **Proměnné**

**`int A = 10;`** `//datový typ, název proměnné a hodnota proměnné` Při změně hodnoty proměnné se projeví tato změna všude, kde je proměnná použita.

## **Práce s proměnnými**

```
int x;//deklarace promenne x
x = 10;//prirazeni hodnoty
int y = 10;//tyto dve operace se daji spojit do jedne
```

Pro použití proměnné v celé programu je nutné deklarovat tuto proměnnou mimo funkce **setup** () a **loop** ().

```
int x = 10; //tuto promennou muzeme pouzit vsude
void setup() {
  int y = 11;  //uvnitr teto funkce muzeme pouzit promenne x a y
}
void loop() {
  int z = 12;  //zde muzeme pouzit promenne x a z
}
```

## **Datové typy**

### **Číselné datové typy**

- **byte** – má velikost 8 bitů, celých čísel v rozsahu 2<sup>8</sup> hodnot – 0 až 255.

- **int** – celá čísla – kladná i záporná, 16bitovou hodnotu – tedy od -32 768 do 32 767

- **long** – celá čísla, 32bitových hodnot od -2 147 483 648 do 2 147 483 647.

- **float** – čísla s desetinnou čárkou, velikost 32 bitů, hodnoty od -3,402 823 5 · 10<sup>38</sup> do 3,402 823 5 · 10<sup>38</sup> .

### **Logický datový typ**

- **boolean** – uchovává jednu ze dvou hodnot – **true** / **false**

### **Znakový datový typ**

- **char** – jeden znaku textu, znak je zde uchován jako jeho číselná hodnota v ASCII tabulce znaků.

- **string** – pro uchování řetězce znaků, řetězec se zapisuje v uvozovkách

_
IT3 – RBT – Arduino – LED a tlačítko, prom

CV-04

### **Příklad:**

```
byte a = 12;//byte
int b = 400;//integer
long c = 12121212;//long
float d = 1.256;//float
boolean e = false;//boolean
char f = 'A';//char
char f = 65; //v ASCII tabulce znaku ma A hodnotu 65
```

## **Pole**

Je to způsob uložení vícero hodnot do jedné proměnné.

### **Deklarace pole**

Je podobná jako u běžné proměnné – datový typ, jméno, velikost pole a případně i hodnoty

```
//pole muzeme deklarovat nekolika zpusoby
int jmeno[6]; //deklarace pole s sesti bunkami, u takto
```

```
//deklarovaneho pole musi byt uvedena velikost
int jmeno[] = {2, 3, 4, 5}; //prvky v poli oddelujeme carkami
int jmeno[4] = {2, 3, 4, 5}; //v tomto pripade velikost pole uvest
muzeme, ale nemusime
```

```
//zvlastnim typem pole je pole znaku (nazyvane retezec " string)
//umoznuje totiz specificky zpusob prirazeni hodnoty
char jmeno[15]; //deklarace retezce
char jmeno[] = {'a', 'r', 'd', 'u', 'i', 'n', 'o'};
char jmeno[7] = {'a', 'r', 'd', 'u', 'i', 'n', 'o'};
char jmeno[] = "arduino";
char jmeno[7] = "arduino";
```

### **Přístup k hodnotám v poli**

indexy v poli jsou číslovány od nuly

```
int a[] = {1,2,3,5,7,11,13,17}; //deklarace pole a
a[0]; //prvek s indexem 0 ma hodnotu 1
a[5]; //prvek s indexem 5 ma hodnotu 11
```

## **Digitální vstup a výstup**

Vstupy a výstupy nazýváme piny a jsou určené pro další rozšiřování Arduina.

K nastavení pinu slouæí funkce:

```
pinMode(cislo_pinu, INPUT/OUTPUT);
```

**cislo_pinu** – je natištěno na desce Arduina u každého pinu

_
CV-04

IT3 – RBT – Arduino – LED a tlačítko, prom

- digitální: 0 – 13

- analogové: A0 – A5 – ty lze také použít jako digitální

```
byte cislo = 13;
pinMode(cislo, OUTPUT); //nastaveni pinu 13 na vystup
pinMode(12, INPUT); //a pinu 12 na vstup
```

## **Ovládání výstupu**

K ovládání výstupu se používá funkce:

```
digitalWrite(13, HIGH); //teče proud
digitalWrite(12, LOW);//neteče proud
```

## **Čtení vstupu**

K detekci napětí na pinu se používá funkce **digitalRead()** .

```
int cteni;
byte vstup = 13;
```

```
cteni = digitalRead(vstup); //pokud proud tece, do promenne cteni
se ulozi hodnota HIGH, pokud ne, tak LOW
```

# **LED a tlačítko**

## **Budeme potřebovat**

1. Arduino Uno (nebo jinou desku).

2. USB kabel.

3. Nepájivé kontaktní pole.

4. Vodiče

5. Tlačítko

6. 10 kΩ rezistor

7. 220 Ω rezistor.

8. LED dioda.

_
IT3 – RBT – Arduino – LED a tlačítko, prom

CV-04

## **Zapojení**

Dle obrázku:

_Obrázek 1: Zapojení tlačítka a LED diody_

## **Program**

Do Arduino IDE vložíme kód programu a nahrajeme jej do Arduina:

```
int cteni;
int led = 6;
int tlacitko = 12;
void setup() {
 pinMode(led, OUTPUT);
 pinMode(tlacitko, INPUT);
}
void loop() {
 cteni = digitalRead(tlacitko);
 digitalWrite(led, cteni);
}
```

_
