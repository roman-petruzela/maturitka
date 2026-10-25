---
title: "Krokový motor"
order: 19
source: "maturitka/RBT_IT3/Arduino_Elektro/cv16_krokovy_motor_OPRAVIT/cv16_Krokovy_motor.pdf"
---
Krokové motory, díky své jedinečné konstrukci, mohou být ovládány s vysokou přesností a bez jakýchkoli mechanismů zpětné vazby.

Existují dva typy krokových motorů – unipolar a bipolar.

<img src="/images/content/it/robotika/krokovy-motor/01.webp" alt="Krokový motor" width="272" loading="lazy" decoding="async">

_Obrázek 1: Krokový motor_

Arduino desky nebo kontrolery nemohou přímo řídit krokové motory. Je tedy nezbytný řídící obvod, proto používáme řadič krokového motoru (jako je ukázáno na následujícím obrázku) k pohonu krokového motoru.

<img src="/images/content/it/robotika/krokovy-motor/02.webp" alt="Řídící obvod pro krokový motor" width="248" loading="lazy" decoding="async">

_Obrázek 2: Řídící obvod pro krokový motor_

## Princip krokového motoru
Krokový motor je čtyřfázový a používá stejnosměrný napájecí zdroj. Po napájení všech fází motoru dle příslušného pořadí se začne otáčet krok za krokem. Schematický diagram čtyřfázového krokového motoru je znázorněn níže:

<img src="/images/content/it/robotika/krokovy-motor/03.webp" alt="Schéma krokového motoru" width="292" loading="lazy" decoding="async">

_Obrázek 3: Schéma krokového motoru_

Čtyřfázový krokový motor má tři provozní režimy: samostatný čtyř-krokový, dvojitý čtyř-krokový a osmi-krokový. Krokový úhel pro samostatný čtyř-krokový a dvojitý čtyř-krokový režim je stejný, ale hnací moment pro samostatný čtyř-krokový režim je menší. Krokový úhel pro osmi-krokový režim je poloviční, než u režimu samostatného čtyř-krokového a dvojitého čtyř-krokového. Osmistupňový provozní režim tak může udržet vysoký hnací moment a zlepšit přesnost řízení.

## Budeme potřebovat
1. Arduino Uno (nebo jinou desku).

2. USB kabel.

3. Vodiče

4. Potenciometr

5. Krokový motor – bude pracovat v osmi krokovém režimu

6. Řadič krokového motoru

## Zapojení
|Řadič krokového motoru|Arduino|
|---|---|
|IN1|8|
|IN2|9|
|IN3|10|
|IN4|11|
|GND|GND|
|VCC|5V|

<img src="/images/content/it/robotika/krokovy-motor/04.webp" alt="Zapojení" width="567" loading="lazy" decoding="async">

<img src="/images/content/it/robotika/krokovy-motor/05.webp" alt="Zapojení" width="567" loading="lazy" decoding="async">

## Program
Program „**Krokovy_motor.ino**“ vložíme do Arduino IDE a nahrajeme jej do Arduina.

```cpp
 

#include <Stepper.h>

// počet kroků motoru
#define STEPS 100

// Vytvoříme objekt třídy Stepper, specifikujeme
// počet kroků motoru a piny, ke kterým je řadič připojen
Stepper stepper(STEPS, 8, 9, 10, 11);

// předchozi stav analogového vstupu
int previous = 0;

void setup() {
  // nastavit rychlost motoru na 60 ot/m
  stepper.setSpeed(60);
}

void loop() {
  // přečíst hodnotu pinu A0
  int val = analogRead(0);
  int minval = 0;
  int maxval = 0;
  int prumer = 0;

  if (minval >= val)
        minval = val;
  if (maxval <= val)
        maxval = val;
        prumer = (maxval-minval/2) + minval;
  // otočit motor na počet kroků = rozdilu
  //předchozího stavu potenciometru a aktualního
  stepper.step(val - previous);

  // zapamatovat stav pinu A0
  previous = val;
}
```

Nyní nastav potenciometr a hřídel krokového motoru se bude otáčet dle odpovídajících stupňů.

## Citace
Arduino MAXI Starter kit OD BASTLÍŘŮ BASTLÍŘŮM - Lekce 26 Krokový motor
