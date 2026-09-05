---
title: "I2C LCD displej"
order: 11
source: "robotika1.pol/cv09b_I2C_LCD_displej.pdf"
---
IT3 – RBT – Arduino – I2C LCD displej

CV-09b

# **I2C LCD displej**

LCD displej je vhodný pro zobrazování údajů a zlepšují tím pádem naši interakci s přístroji. LCD panely se běžně připojují na kontroler, na kterém obsadí několik I/O portů, kterých je omezený počet. Proto byl vyvinut převodník se I2C sběrnicí pro 1602 a 2004 LCD displej, který daný problém vyřešil.

I²C (anglicky Inter-Integrated Circuit, čteme I-squared-C, nesprávně I-two-C) je multi-masterová počítačová sériová sběrnice vyvinutá firmou Philips, která je používána k připojování nízkorychlostních periferií k základní desce, mikrokontroléru, aj.

Praktická identická sběrnice se skrývá i pod zkratkou TWI (Two Wire Interface - dvoudrátové rozhraní), kterou používá firma Atmel a další výrobci, namísto chráněné značky I2C.

Modrý potenciometr na převodníky se používá k nastavení podsvícení. I²C používá pouze dva obousměrné kanály - datový kanál SDA a hodinový signál SCL s pull-up rezistory. Používá se napětí +5 V nebo +3,3 V, povoleny jsou však i systémy s jiným napětím.

## **Budeme potřebovat**

1. Arduino Uno (nebo jinou desku).

2. USB kabel.

3. Nepájivé kontaktní pole.

4. Vodiče

5. I²C zařízení např. I2C LCD displej

## **Zapojení**

Dle obrázku:

|I2C LCD1602|Arduino UNO|
|---|---|
|GND|GND|
|VCC|5V|
|SDA|A4|
|SCL|A5|

_
IT3 – RBT – Arduino – I2C LCD displej

CV-09b

_Obrázek 1: Zapojení LCD displaye na Arduino na sběrnici I2C_

_Obrázek 2: Připojení Arduina na LCD display – Zadní strana_

_Obrázek 3: LCD disply - Přední strana_

Program bude vycházet z předchozího programu na skenování adresy zařízení připojeného ke sběrnici I2C.

Tentokráte necháme zobrazit text na LCD displeji pomocí programování.

## **Instalace knihoven**

Staženou knihovnu „ _LiquidCrystal_I2C.zip_ “ rozbalte do adresáře:

„ **C:\Users\uživatelské_jméno\Documents\Arduino\Libraries** “ ještě před kompilací programu.

## **Program**

Do Arduino IDE vložíme kód programu a nahrajeme jej do Arduina:

```
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
```

```
char array1[]=" Martinik je BOSS         ";// první řádek
displeje (26 znaků!)
char array2[]=" Ahoj ajtaci!             ";// druhý řádek
displeje (26 znaků!)
```

_
IT3 – RBT – Arduino – I2C LCD displej

CV-09b

### **`int tim = 500;  //délka pauzy`**

|**`// inicializace knihovny displeje`**<br>**`LiquidCrystal_I2C lcd(0x27,16,2);`**<br>**`//`**<br>**`displeje na 0x27 pro 1602 displej`**|**`nastavit adresu`**|
|---|---|
|**`void setup() {`**<br>**`lcd.init();`**|**`//`**|
|**`inicializace lcd`**<br>**`lcd.backlight();`**|**`//`**|
|**`zapnout podsvícení`**<br>**`}`**||
|**`void loop() {`**<br>**`lcd.setCursor(15,0);`**|**`//`**|
|**`nastavení kurzoru na sloupec 15, řádek 0`**<br>**`for (int positionCounter1 = 0; positionCou`**|**`nter1 < 26;`**|
|**`positionCounter1++) {`**<br>||
|**`lcd.scrollDisplayLeft();`**<br> <br>**`obsah zprávy na displeji zprava do leva.`**<br>**`lcd.print(array1[positionCounter1]);/`**<br>**`displeji.`**<br>**`delay(tim);`**<br>|**`// Protáhnout`**<br>**`/ Zobrazit zprávu na`**<br>**`//`**|
|**`počkat 500 ms`**<br>**`}`**<br>**`lcd.clear();`**|**`//`**|
|**`vyčistit displej a přesunout kurzor na začátek.`**<br>**`lcd.setCursor(15,1);`**|<br>**`//`**|
|**`nastavení kurzoru na sloupec 15, řádek 1`**<br>**`for (int positionCounter = 0; positionCoun`**|**`ter < 26;`**|
|**`positionCounter++) {`**<br>**`lcd.scrollDisplayLeft();`**<br> <br>**`obsah zprávy na displeji zprava do leva.`**<br>**`lcd.print(array2[positionCounter]);`**<br>**`zprávu na displeji.`**<br>**`delay(tim);`**|**`// protáhnout`**<br>**`// zobrazit`**<br>**`//`**|
|**`počkat 500 ms`**<br>**`}`**<br>**`lcd.clear();`**|**`//`**|
|**`vyčistit displej a přesunout kurzor na začátek.`**<br>**`}`**||

Po spuštění programu se na LCD displeji objeví posunující se text.

Pokud nejde na displeji nic vidět, tak je potřeba změnit nastavení odporového trimru (modrý čtverec) na spodní straně displeje.

_
_Obrázek 4: Kontrola podsvícení LCD displeje_

IT3 – RBT – Arduino – I2C LCD displej

CV-09b

## **Úkol:**

Upravte program tak, aby text zobrazovaném na druhém řádku probíhal zleva doprava.

## **Citace:**

Arduino MAXI Starter kit OD BASTLÍŘŮ BASTLÍŘŮM - Lekce 6 Lekce 6 I2C LCD displej

_
