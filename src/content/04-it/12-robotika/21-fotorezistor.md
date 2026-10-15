---
title: "Fotorezistor"
order: 21
source: "maturitka/RBT_IT3/Arduino_Elektro/cv18_Fotorezistor/cv18_Fotorezistor.pdf"
---
Fotorezistor či photocell je světlem ovládaný proměnný odpor. Odpor fotorezistoru se snižuje s rostoucí intenzitou dopadajícího světla; jinými slovy, je fotovodivý. Fotorezistor můžeme využít pro na světlo citlivé detektory, jež se aktivují světlem či tmou.

<img src="/images/content/it/robotika/fotorezistor/01.webp" alt="Fotorezistor - schématická značka" width="113" loading="lazy" decoding="async">

_Obrázek 1: Fotorezistor - schématická značka_

<img src="/images/content/it/robotika/fotorezistor/02.webp" alt="Fotorezistor" width="319" loading="lazy" decoding="async">

_Obrázek 2: Fotorezistor_

## Princip fotorezistoru
Odpor ve fotorezistoru se mění na základě intenzity dopadajícího světla. Když se intenzita tohoto světla zvýší, odpor se sníží a naopak. V tomto experimentu použijeme 8 LED. Čím větší bude intenzita světla, tím více LED se rozsvítí. Až dosáhneme určité intenzity světla, rozsvítí se všechny LED. V případě žádného světla se nerozsvítí nic.

## Budeme potřebovat
1. Arduino Uno (nebo jinou desku).

2. USB kabel.

3. Vodiče

4. Kontaktní pole - Breadboard

5. Fotorezistor

6. Odpor (10KΩ)

7. 8x LED

8. 8x Odpor (220Ω)

## Zapojení
<img src="/images/content/it/robotika/fotorezistor/03.webp" alt="Schéma zapojení fotorezistoru" width="243" loading="lazy" decoding="async">

_Obrázek 3: Schéma zapojení fotorezistoru_

((obrázek vynechán — Obrázek 4: Zapojení fotorezistoru))

## Program
Program „**Fotorezistor.ino**“ vložíme do Arduino IDE a nahrajeme jej do Arduina. Posviťte na fotorezistor a uvidíte několik LED, jak se rozsvítí. Posviťte více a rozsvítí se LED o to víc. Jakmile fotorezistor postavíte do tmy, všechna LED zhasnou.

```cpp

const int NbrLEDs = 8;							      // počet LEDek
const int ledPins[] = {5, 6, 7, 8, 9, 10, 11, 12};	// vytvoříme pole pro LED piny
const int photocellPin = A0;				      // číslo pinu fotorezistoru                        
int sensorValue = 0;								      // přečteny hodnoty z čidla 
int ledLevel = 0; 									      // hodnota čidla převedená do LED řádku

void setup() {
	for (int led = 0; led < NbrLEDs; led++) {
		pinMode(ledPins[led], OUTPUT);				// nastavím všechny LED piny jako výstup
	}
}

void loop() {
	sensorValue = analogRead(photocellPin);     // přečíst hodnotu pinu A0 
	ledLevel = map(sensorValue, 300, 1023, 0, NbrLEDs); // převedeme hodnotu čidla do LED řádku
	for (int led = 0; led < NbrLEDs; led++) {	  // půjdeme po každé LEDce
		if (led < ledLevel ) {					          // Jestli je číslo LED méně, než ledLevel 
			digitalWrite(ledPins[led], HIGH);	      // zapneme tuto LEDku
		} else {
			digitalWrite(ledPins[led],LOW);		      // jinak vypneme tuto LEDku
		}
	}
}
```

## Úkol
Kromě výše uvedeného experimentu můžete také vyměnit fotorezistor za mikrofon a pozorovat, jak LED signalizuje sílu zvuku. Čím vyšší bude síla zvuku, tím vice LED se rozsvítí.

## Citace
Arduino MAXI Starter kit OD BASTLÍŘŮ BASTLÍŘŮM - Lekce 11 Fotorezistor
