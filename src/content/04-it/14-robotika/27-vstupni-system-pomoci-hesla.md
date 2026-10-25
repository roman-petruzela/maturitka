---
title: "Vstupní systém pomocí hesla"
order: 27
source: "maturitka/RBT_IT3/Arduino_Elektro/cv27_Vstupni_system_pomoci_hesla/cv27_Vstupni_system_pomoci_hesla.pdf"
---
Kombinací různým modulů lze vytvořit například ochranný systém pro bezpečnostní dveře.

## Budeme potřebovat
1. Arduino Uno (nebo jinou desku).

2. USB kabel.

3. Vodiče

4. 1-kanál relé modul

5. I2C LCD1602

6. 4x4 Maticová tlačítková klávesnice

7. Kontaktní pole – Breadboard

8. knihovna pro LCD - „LiquidCrystal_I2C“

9. knihovna pro 4x4 mat. tl. kl. - „Keypad“

## Princip činnosti vstupního ochranného systému
V programu nastavíme heslo (např.: 123456). Po zapnutí se pak na I2C LCD1602 displeji objeví „Vítej!“. V této fázi se normálně otevřený kontakt relé odpojí a indikátor LED na relé modulu zůstane ve vypnutém režimu. Stiskneme klíč označený hvězdičkou "*" pro zadání hesla, zadáme heslo a poté "#". Pokud je heslo správné, normálně otevřený kontakt relé se uzavře a kontrolka se rozsvítí. Na displeji I2C LCD1602 se objeví „Správně zadáno!“ „Prosím, vstupte!“. Pokud zadáš jiné heslo, na displeji I2C LCD1602 se objeví „Vstupní chyba!“ „Prosím, zkus znovu!“ a relé zůstane v původním stavu. Po uplynutí dvou sekund se na displeji I2C LCD1602 objeví „Vítej!“.

<img src="/images/content/it/robotika/vstupni-system-pomoci-hesla/01.webp" alt="4x4 Maticová tlačítková klávesnice" width="205" loading="lazy" decoding="async">

_Obrázek 1: 4x4 Maticová tlačítková klávesnice_

POZNÁMKA: Prostřednictvím programování nastav čtyři klíče v první řadě (s piny v horní části, jak vidíš na obrázku), jako 1,2,3,4; ve druhé řadě jako 5,6,7,8; ve třetí řadě jako 9,A,B a C; ve čtvrté řadě jako D, *, 0, #.

## Zapojení
_Tabulka 1: Zapojení LCD a Arduino_

|I2C LCD 1602|Arduino|
|---|---|
|GND|GND|
|VCC|+5V|
|SDA|A4|
|SCL|A5|

_Tabulka 2: Zapojení 4x4 maticové klávesnice a Arduino_

|4x4 Maticová<br>tlačítková<br>klávesnice|Arduino|
|---|---|
|Sloupec 1|7|
|Sloupec 2|6|
|Sloupec 3|5|
|Sloupec 4|4|
|Řádek 1|11|
|Řádek 2|10|
|Řádek 3|9|
|Řádek 4|8|

Ještě připojte modul relé – viz [Relé](/it/robotika/18-rele/).

<img src="/images/content/it/robotika/vstupni-system-pomoci-hesla/02.webp" alt="Zapojení vstupního ochranného systému" width="567" loading="lazy" decoding="async">

_Obrázek 2: Zapojení vstupního ochranného systému_

## Program
Program „**Vstupni_system_pomoci_hesla.ino**“ vložíme do Arduino IDE a nahrajeme jej do Arduina.

```cpp

#include <Keypad.h>
#include <Wire.h> 
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27,16,2);

#define relayPin 13 	// číslo pinu relé
	
	
const byte ROWS = 4;	// 4 řádky
const byte COLS = 4;	// 4 sloupce
// definujeme  znaky tlačitek klávesnice
char hexaKeys[ROWS][COLS] = {
  {'1','2','3','4'},
  {'5','6','7','8'},
  {'9','A','B','C'},
  {'D','*','0','#'}
};
byte rowPins[ROWS] = {11, 10, 9, 8}; 	// číslo pinu řádků
byte colPins[COLS] = { 7, 6, 5, 4}; 	// číslo pinu sloupců

int pos = 0;
char secretCode[6] = {'1', '2', '3', '4', '5', '6'};
char inputCode[6] = {'0', '0', '0', '0', '0', '0'};

//vytvoříme objekt typu NewKeypad
Keypad customKeypad = Keypad( makeKeymap(hexaKeys), rowPins, colPins, ROWS, COLS); 

void setup() {
	lcd.init();
	lcd.backlight();
	pinMode(relayPin, OUTPUT);
	lcd.setCursor(0,0);
	lcd.print("     Vitej!     ");
	delay(2000);
}

void loop() {
	readKey();
}

void readKey() {
	int correct = 0;
	int i;
	char customKey = customKeypad.getKey();
	if (customKey) {
		switch(customKey) {
			case '*':
				pos = 0;
				lcd.clear();
				lcd.setCursor(0,0);
				lcd.print("Zadej sve heslo:");
				break;
			case '#':    	
				for(i = 0; i < 6; i++) {
					if(inputCode[i] == secretCode[i]) {
						correct ++;
					}
				}
				if(correct == 6) {
					lcd.clear();
					lcd.setCursor(0, 0);
					lcd.print("    Spravne!    ");
					lcd.setCursor(0, 1);
					lcd.print("     Vstup      ");
					digitalWrite(relayPin, HIGH);
				} else {
					lcd.clear();
					lcd.setCursor(0, 0);
					lcd.print("     Chyba!     ");
					lcd.setCursor(0, 1);
					lcd.print("  Zkus to znova ");
					digitalWrite(relayPin, LOW);
					delay(2000);
					lcd.clear();
					lcd.setCursor(0,0);
					lcd.print("     Vitej!     ");
				}
				break;
			default:
				inputCode[pos] = customKey;
				lcd.setCursor(pos,1);
				lcd.print(inputCode[pos]);
				pos ++;
		}
	}
}
```

Nyní se na displeji I2C LCD1602, po zapnutí, objeví „Vítej!“.

Stiskneme tlačítko "*" klíče, objeví se „Zadej své heslo“. Pokud zadáme „123456“ a stiskneme “#” klíč pro potvrzení, rozsvítí se indikátor LED. Na displeji I2C LCD1602 se objeví: „Správně!“ „Vstup!“.

O dvě vteřiny později se objeví „Vítej!“ na displeji I2C LCD1602. Pokud ale zadáme něco jiného, objeví se na displeji „Chyba!“ „Zkus to znova!“ a relé zůstane v původním stavu. O dvě vteřiny později se na displeji I2C LCD1602 objeví „Vítej!“.

## Citace
Arduino MAXI Starter kit OD BASTLÍŘŮ BASTLÍŘŮM - Lekce 31 Vstupní ochranný systém s heslem
