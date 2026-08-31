---
title: "Teplota na LCD displeji"
order: 12
source: "robotika1.pol/cv10_teplota_LCD_displej.pdf"
---
IT3 – RBT – Arduino – I2C LCD displej a teplota

CV-10

# **Zobrazení teploty a vlhkosti na LCD displeji**

Zobrazte na LCD displeji údaje o teplotě a vlhkosti. Pro připojení čidla můžete využít materiálů:

- cv08_cidlo_teplota_vlhkost.pdf

- cv09b_I2C_LCD_displej.pdf

## **Budeme potřebovat**

1. Arduino Uno (nebo jinou desku).

2. USB kabel.

3. Nepájivé kontaktní pole.

4. Vodiče

5. I²C zařízení např. I2C LCD displej

6. čidlo DHT11

## **Zapojení**

### <u>LCD panelu na I2C:</u>

|I2C LCD1602|Arduino UNO|
|---|---|
|GND|GND|
|VCC|5V|
|SDA|A4|
|SCL|A5|

### <u>Čidlo teploty:</u>

|DHT11|Arduino UNO|
|---|---|
|„-“|GND|
|„+“|5V|
|out|pin 4|

_
IT3 – RBT – Arduino – I2C LCD displej a teplota

CV-10

## **Program**

Do Arduino IDE vložíme kód programu a nahrajeme jej do Arduina:

```
#include <DHT.h>
#include <LiquidCrystal_I2C.h>
#include <Wire.h>
```

```
#define DHTTYPE DHT11   // DHT 11
#define DHTPIN 4       //pin cteni dat z DHT11
LiquidCrystal_I2C lcd(0x27,16,2);
```

```
DHT dht(DHTPIN, DHTTYPE);  //vytvořit objekt třídy dht
```

_
IT3 – RBT – Arduino – I2C LCD displej a teplota

CV-10

```
void setup() {
Serial.begin(9600); // spustit sériový monitor na 9600
bps
lcd.init();  // inicializace lcd
lcd.backlight();  // zapnout podsvícení
  dht.begin();
}
void loop() {
  delay(2000);
lcd.setCursor(0, 0);
  float vlhkost = dht.readHumidity();         //vlhkosti
  float teplota = dht.readTemperature();      //teplota
  if (isnan(vlhkost) || isnan(teplota)) {
    Serial.println(F("Chyba pri cteni z DHT senzoru!"));
    return;
  }
```

```
delay(500);
// zobrazit data
lcd.clear();
lcd.setCursor(0, 0);
lcd.print("Teplota:");
lcd.print(teplota,1); // zobrazit teplotu na displeji
//  lcd.print(dht.readTemperature(),1);   // zobrazit teplotu na
displeji
lcd.print(char(223));// zobrazit znak "°"
lcd.print("C");
lcd.setCursor(0, 1);
lcd.print("Vlhkost:");
lcd.print(vlhkost,1); //zobrazit vlhkost na displeji
//  lcd.print(dht.readHumidity(),1);    //zobrazit vlhkost na
displeji
lcd.print(" %");
delay(300);// počkat 300 ms
}
```

## **Citace:**

Arduino MAXI Starter kit OD BASTLÍŘŮ BASTLÍŘŮM - Lekce 24 Senzor teploty a vlhkosti vzduchu DHT11

_
