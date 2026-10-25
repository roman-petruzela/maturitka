---
title: "Joystick PS2"
order: 25
source: "maturitka/RBT_IT3/Arduino_Elektro/cv24_Joystick_PS2/cv24_Joystick_PS2.pdf"
---
<img src="/images/content/it/robotika/joystick-ps2/01.webp" alt="Joystick PS2" width="155" loading="lazy" decoding="async">

_Obrázek 1: Joystick PS2_

Joystick je vstupní zařízení, u kterého ovládací tyč otáčí okolo osy X a Y na základně a udává směr nebo úhel k ovládanému systému řízení.

## Budeme potřebovat
1. Arduino Uno (nebo jinou desku).

2. USB kabel.

3. Vodiče

4. Joystick PS2

5. Kontaktní pole - Breadboard

## Princip činnosti Joystick PS2
Joystick má dva analogové výstupy – osa X a Y, a jeden digitální výstup pro tlačítko v ose Z.

## Zapojení

<img src="/images/content/it/robotika/joystick-ps2/02.webp" alt="Zapojení" width="439" loading="lazy" decoding="async">

## Program
Program „**Joystick_PS2.ino**“ vložíme do Arduino IDE a nahrajeme jej do Arduina.

```cpp

const int xPin = A0;	// číslo pinu osy X
const int yPin = A1;	// číslo pinu osy Y
const int swPin = 8;	// číslo pinu tlačítka

void setup() {
  pinMode(swPin, INPUT);		// nastavení pinu tlačítka jako vstupu
  digitalWrite(swPin, HIGH);	// "HIGH" zapne pullup odpor zabudovaný do Atmelu
  Serial.begin(9600);			// spustit sériový monitor na 9600 bps
}

void loop() {
  Serial.print("X: ");
  // přečíst hodnotu pinu xPin a tisknout do sériového monitoru, jak decimal
  Serial.print(analogRead(xPin), DEC);
  Serial.print("   |Y: ");
  // přečíst hodnotu pinu yPin a tisknout do sériového monitoru, jak decimal
  Serial.print(analogRead(yPin), DEC);
  Serial.print("   |Z: ");
  // přečíst stav pinu tlačítka a tisknout do sériového monitoru
  Serial.println(digitalRead(swPin));
  delay(100); 						// počkat 100 ms
}
```

Nyní pohybujte s joystickem a souřadnice X a Y na sériovém monitoru se změní. Když stisknete joystick uvidíte, že se současně zobrazí souřadnice Z = 0.

## Citace
Arduino MAXI Starter kit OD BASTLÍŘŮ BASTLÍŘŮM - Lekce 28 Joystick PS2
