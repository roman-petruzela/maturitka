---
title: "RGB LED"
order: 17
source: "maturitka/RBT_IT3/Arduino_Elektro/cv14_RGB_LED/cv14_RGB_LED.pdf"
---
RGB LED mohou vyzařovat různé barvy světla. Tři LED: červená, zelená a modrá jsou zabaleny do průhledného nebo poloprůhledného plastového pláště se čtyřmi kolíky. Ze třech základních barev: červená, zelená a modrá lze míchat a vytvářet všechny druhy barev podle jasu, takže si můžeš udělat RGB LED vyzařující barevné světlo.

<img src="/images/content/it/robotika/rgb-led/01.webp" alt="RGB LEDka" width="215" loading="lazy" decoding="async">

_Obrázek 1: RGB LEDka_

## Princip RGB LED
Pro ovládání RGB LED se používá PWM. Každá ze tří barevných kanálů: červená, zelená a modrá, má 255 stupňů jasu. Pokud ze tří základních barev jsou všechny 0, LED zhasne. Pokud jsou všechny 255, LED bude nejjasnější. Pokud do všech kolíků pustíme hodnoty mezi 0 a 255, RGB LED bude zobrazovat různé barvy.

RGB LED lze rozdělit na následující typy:

- společná anoda

- společná katoda.

V tomto experimentu budeme používat společnou katodu RGB LED (pro jistotu zkontroluj).

## Budeme potřebovat
1. Arduino Uno (nebo jinou desku).

2. USB kabel.

3. Nepájivé kontaktní pole.

4. Vodiče

5. RGB LED

## Zapojení
<img src="/images/content/it/robotika/rgb-led/02.webp" alt="Schéma zapojení RGB LED" width="249" loading="lazy" decoding="async">

_Obrázek 2: Schéma zapojení RGB LED_

<img src="/images/content/it/robotika/rgb-led/03.webp" alt="Zapojení RGB LED" width="385" loading="lazy" decoding="async">

_Obrázek 3: Zapojení RGB LED_

## Program
Program „**RGB.ino**“ vložíme do Arduino IDE a nahrajeme jej do Arduina.

```cpp

const int redPin   = 11;	// číslo pinu červené barvy
const int greenPin = 10;	// číslo pinu zelené barvy
const int bluePin  = 9;		// číslo pinu modré barvy

byte randn; //promenna pro nahodnou hodnotu

void setup() { 
	pinMode(redPin, OUTPUT);	// nastavení pinu redPin jako výstupu 
	pinMode(greenPin, OUTPUT);	// nastavení pinu greenPin jako výstupu
	pinMode(bluePin, OUTPUT);	// nastavení pinu bluePin jako výstupu

//moje barva
  randomSeed(analogRead(A0)); //inicializace generatoru
}    
   
void loop() {    
	// Zakladní barvy:  
	color(255, 0, 0); // zapnout červenou 
	delay(1000);      // počkat 1s  
	color(0,255, 0);  // zapnout zelenou
	delay(1000);      // počkat 1s  
	color(0, 0, 255); // zapnout modrou  
	delay(1000);      // počkat 1s  
	// Michane barvy:  
	color(255,0,0);   // červená
	delay(1000);
	color(237,109,0); // oranžová
	delay(1000);
	color(255,215,0); // žlutá
	delay(1000);
	color(0,255,0); 	// zelená
	delay(1000);
	color(0,0,255); 	// modrá
	delay(1000);
	color(0,46,90); 	// indigo
	delay(1000);
	color(128,0,128); // purpurová
	delay(1000);

}

void color (unsigned char red, unsigned char green, unsigned char blue)
{    
          analogWrite(redPin, red);   
          analogWrite(bluePin, blue); 
          analogWrite(greenPin, green); 
}
```

## Úkol

Vytvořte funkci

```cpp
void color(unsigned char red, unsigned char green, unsigned char blue) {
  // ...
  analogWrite(redPin, red);
  analogWrite(bluePin, blue);
  analogWrite(greenPin, green);
}
```

kde využijete cyklus `for()`. Funkce bude postupně měnit barvu RGB LED po jednotlivých barvách. Krok zvolte 15.

## Citace
Arduino MAXI Starter kit OD BASTLÍŘŮ BASTLÍŘŮM - Lekce 21 RGB LED
