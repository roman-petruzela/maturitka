---
title: "Servo"
order: 20
source: "maturitka/RBT_IT3/Arduino_Elektro/cv17_servo/cv17_servo.pdf"
---
Servo je typ motoru s převodovkou, který se může otáčet jen o 180 stupňů (některý víc) a je řízen impulsy z Arduino. Tyto impulsy „řeknou“ servu, do jaké pozice se má otočit. Servo má tři vodiče. Hnědý vodič je GND, červený vodič je VCC a oranžový vodič je signál.

<img src="/images/content/it/robotika/servo/01.webp" alt="Servo motor" width="219" loading="lazy" decoding="async">

_Obrázek 1: Servo motor_

## Princip servo motoru
Servo se skládá z pláště, obvodové desky, non-jádra motoru, převodovky a detekce polohy. Jeho pracovní princip je následující: Arduino vysílá signál PWM do serva. Tam je tento signál zpracováván IO pro výpočet směru otáčení k řízení motoru, a pak je tato hnací síla přenášena na otočné rameno pomocí ozubeného převodu. Ve stejné době vrací detektor signál pozici, jestli je dosaženo nastavení polohy nebo ne.

## Budeme potřebovat
1. Arduino Uno (nebo jinou desku).

2. USB kabel.

3. Vodiče

4. Servomotor

## Zapojení
<img src="/images/content/it/robotika/servo/02.webp" alt="Zapojení servo motoru a Arduina" width="567" loading="lazy" decoding="async">

_Obrázek 2: Zapojení servo motoru a Arduina_

## Program
Program „**servo.ino**“ vložíme do Arduino IDE a nahrajeme jej do Arduina. Nyní se bude servomotor otáčet se o 90 stupňů (otáčí se jedenkrát, každých 15 stupňů). A poté se otáčí v opačném směru.

```cpp
 

#include <Servo.h>

Servo myservo;  		// vytvořít objekt pro řízení serva
const int servoPin = 9; // číslo pinu serva

int pos = 0;    		// proměnna pro ukládání pozice serva

void setup() {
  myservo.attach(servoPin);			// nastavení pinu serva 
}

void loop() {
  for (pos = 0; pos <= 160; pos += 1) {	// točení servem od 0 do 160 stupnů
    // in steps of 1 degree
    myservo.write(pos);              	// nastavit servo do pozice "pos"
    delay(30);                       	// počkat 15ms než servo dosáhne pozice
  }
  for (pos = 160; pos >= 0; pos -= 1) { // točení servem od 160 do 0 stupnů
    myservo.write(pos);              	// nastavit servo do pozice "pos"
    delay(30);                       	// počkat 15ms než servo dosáhne pozice
  }
}
```

## Citace
Arduino MAXI Starter kit OD BASTLÍŘŮ BASTLÍŘŮM - Lekce 27 Servo
