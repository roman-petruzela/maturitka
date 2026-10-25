---
title: "Otřesové čidlo"
order: 22
source: "maturitka/RBT_IT3/Arduino_Elektro/cv19_Otresove_cidlo/cv19_Otresove_cidlo.pdf"
---
Otřesové čidlo je vlastně kulový spínač s kovovou kuličkou uvnitř. Používá se k detekci malého úhlu sklonu.

<img src="/images/content/it/robotika/otresove-cidlo/01.webp" alt="Otřesové čidlo SW-520D" width="189" loading="lazy" decoding="async">

_Obrázek 1: Otřesové čidlo SW-520D_

## Princip činnosti otřesového čidla
Je-li spínač nakloněn v určitém úhlu, kulička uvnitř sjede dolů a dotkne se dvou kontaktů připojených ke vnějším kolíčkům. Tím propojí kontakty. Pokud zůstane kulička mimo kontakty, rozpojí je.

<img src="/images/content/it/robotika/otresove-cidlo/02.webp" alt="Princip činnosti otřesového čidla" width="302" loading="lazy" decoding="async">

_Obrázek 2: Princip činnosti otřesového čidla_

## Budeme potřebovat
1. Arduino Uno (nebo jinou desku).

2. USB kabel.

3. Vodiče

4. Otřesové čidlo

## Zapojení

<img src="/images/content/it/robotika/otresove-cidlo/03.webp" alt="Zapojení" width="391" loading="lazy" decoding="async">

## Program
Program „**Otresove_cidlo.ino**“ vložíme do Arduino IDE a nahrajeme jej do Arduina.

```cpp

const int ledPin = 8;				// číslo pinu LEDky
const int tiltPin = 2;				// číslo pinu otřesového čidla

void setup() {
  pinMode(ledPin, OUTPUT);			// nastavení pinu LEDky jako výstupu
  pinMode(tiltPin, INPUT);			// nastavení pinu otřesového čidla jako vstupu
}
void loop() {
  int digitalVal = digitalRead(tiltPin);// přečíst stav hodnoty pinu otřesového čidla
  delay(1000);                // počkat 300ms
  if (HIGH == digitalVal) {		// pokud není otřesové čidlo nakloněno
    digitalWrite(ledPin, LOW);	// vypnout LEDku
  } else { 						        // pokud je otřesové čidlo nakloněno
    digitalWrite(ledPin, HIGH); // zapnout LEDku
  }
}
```

Pokud nyní pohnete čidlem tak, aby kulička uvnitř spojila kontakty, rozsvítí se LEDka, která je připevněna k pinu 13 na Arduino.

## Citace
Arduino MAXI Starter kit OD BASTLÍŘŮ BASTLÍŘŮM - Lekce 8 Otřesové čidlo
