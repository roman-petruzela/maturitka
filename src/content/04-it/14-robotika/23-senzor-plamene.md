---
title: "Senzor plamene"
order: 23
source: "maturitka/RBT_IT3/Arduino_Elektro/cv22_Senzor_plamene/cv22_Senzor_plamene.pdf"
---
<img src="/images/content/it/robotika/senzor-plamene/01.webp" alt="Infračervené čidlo - fotodioda" width="263" loading="lazy" decoding="async">

_Obrázek 1: Infračervené čidlo - fotodioda_

Existuje několik typů senzoru plamene. Použijeme infračervené čidlo plamene (fotodioda), které dokáže rozpoznat infračervené světlo o vlnové délce od 700nm do 1000nm. Infračervená sonda převede změny vnějšího infračerveného světla do současných změn. Poté převede analogovou kvantitu do digitální kvantity.

## Budeme potřebovat
1. Arduino Uno (nebo jinou desku).

2. USB kabel.

3. Vodiče

4. Infračervené čidlo - fotodioda

## Zapojení

<img src="/images/content/it/robotika/senzor-plamene/02.webp" alt="Zapojení" width="375" loading="lazy" decoding="async">

## Program
Program „**Senzor_plamene.ino**“ vložíme do Arduino IDE a nahrajeme jej do Arduina.

```cpp

int flame = A0;				    // číslo pinu senzoru
int LED = 13;				      // číslo pinu LEDky
int val = 0;				      // inicializace proměny

void setup() {
  pinMode(LED, OUTPUT);	 // nastavení pinu LEDky jako výstupu
  pinMode(flame, INPUT);	 // nastavení pinu senzoru jako vstupu
  Serial.begin(9600);		  // spoustit sériový monitor na 9600 bps
}

void loop() {
  val = analogRead(flame);  // přečíst hodnotu pinu senzoru
  Serial.println(val);		  // tisknout hodnotu pinu senzoru do sériového monitoru
  if (val > 30) {				   // jestli je hodnota > 30
    digitalWrite(LED, HIGH); // zapnout LEDku
  } else {
    digitalWrite(LED, LOW); 	// jinak vypnout LEDku
  }
  delay(500);
}
```

Když nyní rozsvítíme zapalovač nedaleko čidla, LED na pinu 13 na Arduino se rozsvítí.

## Citace
Arduino MAXI Starter kit OD BASTLÍŘŮ BASTLÍŘŮM - Lekce 13 Senzor plamene
