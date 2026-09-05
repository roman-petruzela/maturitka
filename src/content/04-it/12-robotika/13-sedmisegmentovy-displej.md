---
title: "Sedmisegmentový displej"
order: 13
source: "robotika1.pol/cv11_Sedmisegmentovy_displej.pdf"
---
IT3 – RBT – Arduino – Sedmisegmentový displej

CV-11

# **Sedmisegmentový displej**

_Obrázek 1: Sedmisegme ntový displej_

Sedmisegmentový displej se skládá ze sedmi políček = segmentů, které se dají samostatně rozsvěcet a zhasínat. Tím se dá docílit zobrazení číslic a znaků.

Diodové sedmisegmentovky mají relativně rychlou odezvu, přibližně 10 nanosekund, a spotřebu od 0,5 až 1 mA proudu na jeden segment u těch nejmenších (tzn. celá sedmisegmentovka 3,5–7 mA). Napětí anody je závislé na barvě – 1,5 až 2,5 V. Aby se ovládání diod zjednodušilo, mají diody navzájem propojené anody (CA) či katody (CC).

_Obrázek 2: Značení sedmisegmentového displeje a propojení CA a CC_

## **Budeme potřebovat**

1. Arduino Uno (nebo jinou desku).

2. USB kabel.

3. Nepájivé kontaktní pole.

4. Vodiče

5. Sedmisegmentový displej

6. 8x Odpor 220Ω

_
IT3 – RBT – Arduino – Sedmisegmentový displej

CV-11

## **Zapojení**

_Obrázek 3: Zapojení sedmisegmentovky s Arduinem_

### Tabulka zapojení pinů

|Sedmisegmentový displej<br>- piny|Arduino -<br>piny|
|---|---|
|„-“|GND|
|dp|4|
|c|5|
|b|6|
|a|7|
|f|8|
|g|9|
|e|10|
|d|11|

_
IT3 – RBT – Arduino – Sedmisegmentový displej

CV-11

_Obrázek 4: Reálné zapojení sedmisegmentového displeje_

## **Program**

Do Arduino IDE vložíme kód programu a nahrajeme jej do Arduina:

```
#define ON HIGH// Jestli máme CC (společná katoda)
displej
//#define ON LOW// Jestli máme CA (společná anoda)
displej
```

```
const int a = 7;// číslo pinu segmentu "a"
const int b = 6;// číslo pinu segmentu "b"
const int c = 5;// číslo pinu segmentu "c"
const int d = 11;// číslo pinu segmentu "d"
const int e = 10;// číslo pinu segmentu "e"
const int f = 8;// číslo pinu segmentu "f"
const int g = 9;// číslo pinu segmentu "g"
const int dp =4;// číslo pinu segmentu "dp"
```

```
void setup() {
// nastavení pinu každého segmentu jako výstupu
for(int thisPin = 4; thisPin <= 11; thisPin++) {
pinMode(thisPin,OUTPUT);
}
```

```
}
```

```
void loop() {
digital_1();// zobrazit 1 na displeji
delay(1000);// počkat 1000 ms (1s)
```

_
CV-11

IT3 – RBT – Arduino – Sedmisegmentový displej

```
digital_2();// zobrazit 2 na displeji
delay(1000);// počkat 1000 ms (1s)
digital_3();// zobrazit 3 na displeji
delay(1000);// počkat 1000 ms (1s)
digital_4();// zobrazit 4 na displeji
delay(1000);// počkat 1000 ms (1s)
digital_5();// zobrazit 5 na displeji
delay(1000);// počkat 1000 ms (1s)
digital_6();// zobrazit 6 na displeji
delay(1000);// počkat 1000 ms (1s)
digital_7();// zobrazit 7 na displeji
delay(1000);// počkat 1000 ms (1s)
digital_8();// zobrazit 8 na displeji
delay(1000);// počkat 1000 ms (1s)
digital_9();// zobrazit 9 na displeji
delay(1000);// počkat 1000 ms (1s)
digital_0();// zobrazit 0 na displeji
delay(1000);// počkat 1000 ms (1s)
  tecka();          //rozsiti tecku
  delay(1000);  // počkat 1000 ms (1s)
}//loop
void digital_1() {     // zobrazit 1 na displeji
// vypnout všechny segmenty
clear();
digitalWrite(c, ON);// zapnout segment "c"
digitalWrite(b, ON);// zapnout segment "b"
}
void digital_2() {     // zobrazit 2 na displeji
// vypnout všechny segmenty
clear();
digitalWrite(a, ON);// zapnout segment "a"
digitalWrite(b, ON);// zapnout segment "b"
digitalWrite(g, ON);// zapnout segment "g"
digitalWrite(e, ON);// zapnout segment "e"
digitalWrite(d, ON);// zapnout segment "d"
}
void digital_3() {     // zobrazit 3 na displeji
clear();
digitalWrite(a, ON);
digitalWrite(b, ON);
digitalWrite(g, ON);
digitalWrite(c, ON);
digitalWrite(d, ON);
}
void digital_4() {    // zobrazit 4 na displeji
clear();
digitalWrite(f, ON);
digitalWrite(g, ON);
```

_
IT3 – RBT – Arduino – Sedmisegmentový displej

CV-11

||**`digitalWrite(b,`**|**`ON);`**|
|---|---|---|
||**`digitalWrite(c,`**|**`ON);`**|
|**`}`**|||
|**`void`**|**`digital_5() {`**<br>|**`// zobrazit 5 na displeji`**|
||**`clear();`**||
||**`digitalWrite(f,`**|**`ON);`**|
||**`digitalWrite(g,`**|**`ON);`**|
||**`digitalWrite(c,`**|**`ON);`**|
||**`digitalWrite(d,`**|**`ON);`**|
||**`digitalWrite(a,`**|**`ON);`**|
|**`}`**|||
|**`void`**|**`digital_6() {`**|**`// zobrazit 6 na displeji`**|
||**`clear();`**||
||**`digitalWrite(a,`**|**`ON);`**|
||**`digitalWrite(f,`**|**`ON);`**|
||**`digitalWrite(e,`**|**`ON);`**|
||**`digitalWrite(d,`**|**`ON);`**|
||**`digitalWrite(c,`**|**`ON);`**|
||**`digitalWrite(g,`**|**`ON);`**|
|**`}`**|||
|**`void`**|**`digital_7() {`**<br>**`clear();`**|**`// zobrazit 7 na displeji`**|
||**`digitalWrite(a,`**<br>|**`ON);`**<br>|
||**`digitalWrite(b,`**|**`ON);`**|
||**`digitalWrite(c,`**|**`ON);`**|
|**`}`**|||
|**`void`**|**`digital_8() {`**<br>|**`// zobrazit 8 na displeji`**|
||**`clear();`**<br>||
||**`digitalWrite(a,`**|**`ON);`**|
||**`digitalWrite(f,`**|**`ON);`**|
||**`digitalWrite(e,`**|**`ON);`**|
||**`digitalWrite(d,`**|**`ON);`**|
||**`digitalWrite(c,`**|**`ON);`**|
||**`digitalWrite(g,`**|**`ON);`**|
||**`digitalWrite(b,`**|**`ON);`**|
|**`}`**|||
|**`void`**|**`digital_9() {`**|**`// zobrazit 9 na displeji`**|
||**`clear();`**||
||**`digitalWrite(a,`**|**`ON);`**|
||**`digitalWrite(f,`**|**`ON);`**|
||**`digitalWrite(g,`**|**`ON);`**|
||**`digitalWrite(b,`**|**`ON);`**|
||**`digitalWrite(c,`**|**`ON);`**|
|**`}`**|||
|**`void`**|**`digital_0() {`**|**`// zobrazit 0 na displeji`**|
||<br>**`clear();`**||
||**`digitalWrite(a,`**|**`ON);`**|
||**`digitalWrite(f,`**|**`ON);`**|
||**`digitalWrite(e,`**|**`ON);`**|

_
CV-11

IT3 – RBT – Arduino – Sedmisegmentový displej

```
digitalWrite(d, ON);
digitalWrite(c, ON);
digitalWrite(b, ON);
```

```
}
```

```
void tecka(){
  clear();
  digitalWrite(dp, ON);
}
```

```
void clear () {      // vypnout všechny segmenty
for(int thisPin = 4; thisPin <= 11; thisPin++) {
digitalWrite(thisPin, !ON);
```

```
}
```

```
}
```

## **Citace:**

Arduino MAXI Starter kit OD BASTLÍŘŮ BASTLÍŘŮM - Lekce 18 Sedmisegmentový displej

_
