---
title: "5× LED a potenciometr"
order: 7
source: "robotika1.pol/cv06_5xLED_potenciometr.pdf"
---
IT3 – RBT – Arduino – 5xLED a potenciometr

CV-06

# **Podmínky**

## **Porovnávací operátory**

- **A == B** : A je rovno B. Vrátí hodnotu **true** , pokud A má stejnou hodnotu jako B. Opravdu je nutné použít **==** (Zápis = slouží k přiřazení hodnoty do proměnné).

- **A != B** : A není rovno B. Vrátí hodnotu **true** , pokud má A jinou hodnotu než B.

- **A < B** : A je menší než B. Vrátí hodnotu **true** , pokud je A menší než B.

- **A > B** : A je větší než B. Vrátí **true** , pokud je A větší než B.

- **A <= B** : A je menší nebo rovno B. Vrátí **true** , pokud je A menší nebo rovno B.

- **A >= B** : A je větší nebo rovno B. Vrátí **true** , pokud je A větší nebo rovno B.

```
10 == 5 //neni pravda
10 != 5 //je pravda
10 < 5 //neni pravda
10 > 5 //je pravda
10 <= 5 //neni pravda
10 >= 5 //je pravda
```

## **Složené podmínky**

Používají se logické operátory pro spojení s jednoduchých podmínek.

- **X && Y** : a (konjunkce). Výsledkem je **true** pouze v případě, když jsou true X i Y.

- **X || Y** : nebo (disjunkce). Výsledkem je **true** v případě, kdy je alespoň jedna z X a Y true.

- **!X** : negace. Výsledkem je **true** , pokud je X false a naopak.

```
(1 == 2) && (2 == 2) //false
(1 == 1) && (2 == 2) //true
(1 == 2) || (2 == 3) //false
(1 == 2) || (2 == 2) //true
(2 == 2) || (2 == 3) //true
(2 == 2) || (3 == 3) //true
```

```
!(1 == 1) //false
!(1 == 2) //true
!(false) //true
```

_
IT3 – RBT – Arduino – 5xLED a potenciometr

CV-06

## **Jednoduchá podmínka**

```
//podminky s jednim prikazem
if(x > 120) digitalWrite(LEDpin, HIGH);
```

```
if(x > 120)
 digitalWrite(LEDpin, HIGH);
```

```
if(x > 120){ digitalWrite(LEDpin, HIGH); }
```

Pokud ale má podmínka ovlivnit více příkazů, musíme je uzavřít do složených závorek.

```
//podminky s vice prikazy - je nutne pouzit slozene zavorky
if(x > 120){
 digitalWrite(LEDpin1, HIGH);
 digitalWrite(LEDpin2, HIGH);
 ...
}
```

## **Úplný podmínkový příkaz**

```
if (A >= 500){
```

```
  //prikazy
}
else {
  //prikazy
}
```

## **Podmínka s více možnostmi**

```
if (A >= 500){
  //prikazy
}
else if ((A < 500) && (A > 200)){
   //prikazy
}
```

_
CV-06

IT3 – RBT – Arduino – 5xLED a potenciometr

## **Přepínač**

```
switch (promenna){
case 1:
```

```
 //pokud je hodnota promenne 1, provede se tato cast kodu
 break; //po provedeni teto casti konstrukce switch konci
case 2:
```

```
 //pokud je hodnota promenne 2, provede se tato cast kodu
case 3:
  //provede se i tato část kódu
break;
default:
```

**`/ pokud se hodnota promenne nerovna zadne z nabizenych moznosti,`** ∗ **`provede se tato cast /`** ∗ **`}`**

# **2xLED a potenciometr**

## **Budeme potřebovat**

1. Arduino Uno (nebo jinou desku).

2. USB kabel.

3. Nepájivé kontaktní pole.

4. Vodiče

5. 5x220 Ω rezistor.

6. 5xLED dioda.

7. Potenciometr – s lineárním průběhem (B10K)

_
IT3 – RBT – Arduino – 5xLED a potenciometr

CV-06

## **Zapojení**

Dle obrázku:

## **Program**

Do Arduino IDE vložíme kód programu a nahrajeme jej do Arduina:

```
byte led[] = {0,1,2,3,4}; //pole s piny pripojenych LED diod
byte pot = A0;
int val;
```

### **`void setup() {`**

```
pinMode(led[0], OUTPUT);
pinMode(led[1], OUTPUT);
pinMode(led[2], OUTPUT);
pinMode(led[3], OUTPUT);
pinMode(led[4], OUTPUT);
```

```
}
```

```
void loop() {
val = analogRead(pot);
```

```
if(val > 800){
digitalWrite(led[0],HIGH);
}
else if(val > 600){
digitalWrite(led[1],HIGH);
```

```
}
else if(val > 400){
digitalWrite(led[2],HIGH);
```

_
CV-06

IT3 – RBT – Arduino – 5xLED a potenciometr

```
}
else if(val > 200){
digitalWrite(led[3],HIGH);
}
else{
digitalWrite(led[4],HIGH);
}
```

```
delay(250);
digitalWrite(led[0],LOW);
digitalWrite(led[1],LOW);
digitalWrite(led[2],LOW);
digitalWrite(led[3],LOW);
digitalWrite(led[4],LOW);
```

```
}
```

_
