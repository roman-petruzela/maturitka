---
title: "Teplotní čidlo LM35"
order: 26
source: "maturitka/RBT_IT3/Arduino_Elektro/cv26_ Teplotni_cidlo_LM-35/cv26_ Teplotni_cidlo_LM-35.pdf"
---
<img src="/images/content/it/robotika/teplotni-cidlo-lm35/01.webp" alt="Teplotní čidlo LM-35" width="142" loading="lazy" decoding="async">

_Obrázek 1: Teplotní čidlo LM-35_

LM35 je integrovaný obvod, převodník teploty na napětí, s maximální nelinearitou ±0,75 °C v rozsahu teplot -55 °C až 150 °C. Často používaná varianta obvodu je zapouzdřena v malém plastovém pouzdře TO-92, ale existuje i verze ve větším plastovém pouzdře TO-220 a verze v kovovém pouzdře TO-46. Převodník se vyrábí i v provedení SMD pro montáž přímo na povrch plošného spoje (SMT).

Integrovaný obvod LM35 vyvinula americká společnost National Semiconductor. Je určen pro měření teploty ve stupních Celsia.

Obvod má malý odběr proudu; napájecí proud je menší než 60 μA. Vzhledem k nízkému příkonu převodníku dochází jen k malému vlastnímu ohřevu součástky, což je důležité z hlediska přesnosti měření. Výstupní impedance je typicky 0,1 Ω a nelinearita typicky ±0,25 °C.

Napájecí napětí převodníku – pokud se pohybuje v rozsahu 4 V až 20 V – nemusí být stabilizované a převodník lze tudíž napájet přímo z baterie. V základním zapojení pro měření teploty je převodník připojen ke zdroji napětí, což může být např. 9V baterie, a na výstupu převodníku je voltmetr. Pokud se mají měřit kladné i záporné teploty, tak zapojení vychází o něco složitěji. LM35 se používá i jako převodník teplota/napětí pro Arduino.

## Budeme potřebovat
1. Arduino Uno (nebo jinou desku).

2. USB kabel.

3. Vodiče

4. Teplotní čidlo LM-35

5. I2C LCD1602

6. Kontaktní pole – Breadboard

7. Knihovna pro práci s LCD1602

## Princip činnosti Teplotního čidla LM-35
Protože převodní koeficient činí 10 mV/°C, objeví se např. při teplotě 150 °C na výstupu napětí převodníku napětí 1500 mV. Bude-li měřená teplota záporná, např. −40 °C, bude i výstupní napětí záporné (−400 mV).

Vzorec výpočtu je následující: ((vzorec se nedochoval))

## Zapojení

<img src="/images/content/it/robotika/teplotni-cidlo-lm35/02.webp" alt="Zapojení" width="478" loading="lazy" decoding="async">

## Program
Program „**Teplotni_cidlo_LM-35.ino**“ vložíme do Arduino IDE a nahrajeme jej do Arduina.

```cpp

#define lmPin A0  					// číslo pinu LM35
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(0x27,16,2);

float tem = 0;
long lmVal = 0;

void setup() {
	lcd.init();
	lcd.backlight();
}
void loop() {
	lmVal = analogRead(lmPin);			//	přečíst hodnotu pinu lmPin
	tem = (lmVal * 0.0048828125 * 100);	// Převedeme hodnotu do voltu (5/1024=0.0048828125) a pak mV
	                                    // mV Převedeme do °C (z datasheetu LM35 Vout = 10mV/°C × T)
	lcd.setCursor(5,0);					// nastavení kurzoru na sloupec 5, řádek 0
	lcd.print("LM35");					// zobrazit "LM35"
	lcd.setCursor(0,1);					// nastavení kurzoru na sloupec 0, řádek 1
	lcd.print("Teplota= ");			// zobrazit "Tepl= "
	lcd.setCursor(10,1);					// nastavení kurzoru na sloupec 5, řádek 1
	lcd.print(tem);             // zobrazit teplotu
	lcd.print(char(223));				// zobrazit znak "°"
	lcd.print("C");						
	delay(300);                 // počkat 300 ms
}
```

Nyní se na displayi zobrazí teplota.

## Citace
Arduino MAXI Starter kit OD BASTLÍŘŮ BASTLÍŘŮM - Lekce 17 Teplotní čidlo LM-35
