---
title: "Had z 5 LED"
order: 8
source: "robotika1.pol/cv07a_had_5xLED.pdf"
---
IT3 – RBT – Arduino – had 5xLED

CV-07a

# **Složené operátory**

Tyto operátory nám usnadní práci, protože zkracují zápis operací.

```
x = x + 2;   //scitani
x += 2;//ekvivalentní zápis
x = x - y;   //odcitani
x -= y;//ekvivalentní zápis
x *= 20;   //obdobně to plati i pro nasobeni
x /= 30;//a deleni
```

## **Operátory inkrementace a dekrementace**

Oba dva nejdříve předají svoji hodnotu, a pak dojde k jejich úpravě.

```
x++  //zvyšuje hodnotu proměnné o 1
y--//snižuje  hodnotu proměnné o 1
```

```
x = 10;
x++; //x ma nyni hodnotu 11
x--;
int a = x--; //ted uz ma hodnotu 9, ale a ma hodnotu 10
```

Existují ještě **++x** a **--x** . U nich dochází nejdříve k úpravě hodnoty a až následně k vrácení.

```
x = 10;
++x; //x ma nyni hodnotu 11
--x;
int a = --x; //a i x maji hodnotu 9
```

# **Cykly**

Pokud potřebujeme v kódu zapsat nějaký příkaz vícekrát jen s nějakou menší obměnou (změna číselného parametru) tak to není takový problém. Ale pokud je těch změn mnoho, tak pak nastupují do praxe cykly.

## **Cyklus while()**

Cyklus s podmínkou na začátku. Všechny příkazy v cyklus se provádí dokud je podmínka pravdivá.

```
while(podminka){
  prikazy...
}
```

_
IT3 – RBT – Arduino – had 5xLED

CV-07a

Příklad 1 – ukázka cyklu

```
boolean x = true;
```

```
void setup() {
  Serial.begin(9600);
  while(x){
    Serial.println("OPAKUJI");
    x = false; //cyklus se tedy provede jednou
  }
}
```

```
void loop() {
}
```

Příklad 2 – výpis všech čísel od 0 do 99

```
byte x = 0;
```

```
void setup() {
 Serial.begin(9600);
   while(x < 100){
    Serial.println(x);
    x++;
   }
}
```

```
void loop() {
```

```
}
```

## **Cyklus do while()**

Cyklus s podmínkou na konci. Prvně se provedou všechny příkazy v těle cyklu a pak se kontroluje podmínka. Cyklus se provede minimálně jednou.

```
do{
```

```
 prikazy...
}while (podminky); //<""vsimneme si, ze je zde na konci cyklu
strednik " ten zde musi byt
```

_
IT3 – RBT – Arduino – had 5xLED

CV-07a

Příklad 1 – ukázka cyklu

```
boolean x = true;
```

```
void setup() {
 Serial.begin(9600);
 do{
   Serial.println("OPAKUJI");
   x = false; //cyklus se take provede pouze jednou
  } while(x);
}
void loop() {
}
```

Příklad 2 – výpis všech čísel od 0 do 99 **`byte x = 0;`**

```
void setup() {
 Serial.begin(9600);
 do{
   Serial.println(x);
   x++;
 } while(x < 100);
}
void loop() {
}
```

## **Cyklus for()**

Cyklus se známým počtem opakování. Před každým opakováním se testuje zadaná podmínka.

```
for(ini_promenne a nastaveni hodnoty; podminka; operace){
 prikazy...
}
```

Příklad 1 – výpis všech čísel od 0 do 99

```
void setup() {
 Serial.begin(9600);
 for(int i = 0; i < 100; i++){
   Serial.println(i);
 }
}
```

_
IT3 – RBT – Arduino – had 5xLED

CV-07a

```
void loop() {
```

```
 }
```

# **Had z LED diod**

## **Budeme potřebovat**

1. Arduino Uno (nebo jinou desku).

2. USB kabel.

3. Nepájivé kontaktní pole.

4. Vodiče

5. 5x220 Ω rezistor.

6. 5xLED dioda.

## **Zapojení**

Dle obrázku:

_
IT3 – RBT – Arduino – had 5xLED

CV-07a

## **Program**

Do Arduino IDE vložíme kód programu a nahrajeme jej do Arduina:

```
byte led[] = {2,3,4,5,6}; //piny s LED diodami
byte pocet = 5; //pocet diod
int rychlost = 1000; //jakou prodlevu maji jednotliva bliknuti
```

```
void setup() {
  for(int i = 0; i < pocet; i++){
    pinMode(led[i], OUTPUT); //nastaveni pinu
  }
}
void loop() {
 for(int i = 0; i < pocet; i++){
   digitalWrite(led[i], HIGH);
   delay(rychlost/2);
   digitalWrite(led[i], LOW);
   delay(rychlost/2);
  }
```

```
}
```

## **Úkol:**

Doplňte program tak, aby se  diody rozsvěcovaly a zhasínaly i v opačném směru.

_
