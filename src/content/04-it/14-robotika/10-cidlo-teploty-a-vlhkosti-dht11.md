---
title: "Čidlo teploty a vlhkosti DHT11"
order: 10
source: "maturitka/RBT_IT3/Arduino_Elektro/cv08_cidlo_teplota_vlhkost/cv08_cidlo_teplota_vlhkost.pdf"
---

## Instalace potřebných knihoven
Pro práci s různými čidly budeme potřebovat knihovny. Jde pracovat i bez nich, ale vše bychom museli sami vytvořit. Takže si ulehčíme trochu práci. Spustíme Arduino IDE a v menu „Nástroje → Spravovat knihovny...“

<img src="/images/content/it/robotika/cidlo-teploty-a-vlhkosti-dht11/01.webp" alt="Spuštění správce knihoven" width="165" loading="lazy" decoding="async">

_Obrázek 1: Spuštění správce knihoven_

V „Manažeru Knihoven“ nalezneme „DHT sensor library“ pro DHT11 a nainstalujeme. Pokud jej máme tak můžeme tuto knihovnu případně aktualizovat.

<img src="/images/content/it/robotika/cidlo-teploty-a-vlhkosti-dht11/02.webp" alt="Instalace / aktualizace knihovny pro senzor teploty DHT11." width="336" loading="lazy" decoding="async">

_Obrázek 2: Instalace / aktualizace knihovny pro senzor teploty DHT11._

Čidlo DHT11 má 3 vývody označené „+“, „out“ a „-“. Má být schopné měřit teplotu v rozsahu 0- 50°C a vlhkost od 20% do 90%. Ale velkou přesností moc nepočítejte.

## DHT11 – Čidlo teploty a vlhkosti

## Budeme potřebovat
1. Arduino Uno (nebo jinou desku).

2. USB kabel.

3. Nepájivé kontaktní pole.

4. Vodiče

5. čidlo DHT11

## Zapojení
Dle obrázku:

|DHT11|Arduino UNO|
|---|---|
|„-“|GND|
|„+“|5V|
|out|pin 12|

<img src="/images/content/it/robotika/cidlo-teploty-a-vlhkosti-dht11/03.webp" alt="Zapojení" width="521" loading="lazy" decoding="async">

## Program

**1)** Do Arduino IDE vložíme kód programu „**DHT_Unified_Sensor.ino**“:

```cpp

#include <DHT.h> //pridani knihovny

#define DHTTYPE DHT11   // DHT 11
#define DHTPIN 12       //pin cteni dat z DHT11


DHT dht(DHTPIN, DHTTYPE); //original


void setup()
{
  Serial.begin(9600);     //nastaveni seriove komunikace
  Serial.println(F("DHT11 test!"));
  dht.begin();
}

void loop()
{
  delay(2000);
   
  float vlhkost = dht.readHumidity();       //nacteme vlhkost
  float teplota = dht.readTemperature();    //nasteme teplotu

  if (isnan(vlhkost) || isnan(teplota) ) {
    Serial.println(F("Chyba cteni z DHT senzoru!"));
    return;
  }

  Serial.print(F("Vlhkost: "));
  Serial.println(vlhkost);
  Serial.print(F("%  Teplota: "));
  Serial.print(teplota);
  Serial.println(F("°C "));
  
} //loop
```

**2)** Do Arduino IDE vložíme kód programu „**DHTtester.ino**“:

```cpp
// Example testing sketch for various DHT humidity/temperature sensors
// Written by ladyada, public domain

// REQUIRES the following Arduino libraries:
// - DHT Sensor Library: https://github.com/adafruit/DHT-sensor-library
// - Adafruit Unified Sensor Lib: https://github.com/adafruit/Adafruit_Sensor

#include "DHT.h"

#define DHTPIN 12     // Digital pin connected to the DHT sensor
// Feather HUZZAH ESP8266 note: use pins 3, 4, 5, 12, 13 or 14 --
// Pin 15 can work but DHT must be disconnected during program upload.

// Uncomment whatever type you're using!

#define DHTTYPE DHT11   // DHT 11

//#define DHTTYPE DHT22   // DHT 22  (AM2302), AM2321
//#define DHTTYPE DHT21   // DHT 21 (AM2301)

// Connect pin 1 (on the left) of the sensor to +5V
// NOTE: If using a board with 3.3V logic like an Arduino Due connect pin 1
// to 3.3V instead of 5V!
// Connect pin 2 of the sensor to whatever your DHTPIN is
// Connect pin 3 (on the right) of the sensor to GROUND (if your sensor has 3 pins)
// Connect pin 4 (on the right) of the sensor to GROUND and leave the pin 3 EMPTY (if your sensor has 4 pins)
// Connect a 10K resistor from pin 2 (data) to pin 1 (power) of the sensor

// Initialize DHT sensor.
// Note that older versions of this library took an optional third parameter to
// tweak the timings for faster processors.  This parameter is no longer needed
// as the current DHT reading algorithm adjusts itself to work on faster procs.
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  Serial.println(F("DHTxx test!"));

  dht.begin();
}

void loop() {
  // Wait a few seconds between measurements.
  delay(2000);

  // Reading temperature or humidity takes about 250 milliseconds!
  // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)
  float h = dht.readHumidity();
  // Read temperature as Celsius (the default)
  float t = dht.readTemperature();
  // Read temperature as Fahrenheit (isFahrenheit = true)
  float f = dht.readTemperature(true);

  // Check if any reads failed and exit early (to try again).
  if (isnan(h) || isnan(t) || isnan(f)) {
    Serial.println(F("Failed to read from DHT sensor!"));
    return;
  }

  // Compute heat index in Fahrenheit (the default)
  float hif = dht.computeHeatIndex(f, h);
  // Compute heat index in Celsius (isFahreheit = false)
  float hic = dht.computeHeatIndex(t, h, false);

  Serial.print(F("Humidity: "));
  Serial.print(h);
  Serial.print(F("%  Temperature: "));
  Serial.print(t);
  Serial.print(F("°C "));
  Serial.print(f);
  Serial.print(F("°F  Heat index: "));
  Serial.print(hic);
  Serial.print(F("°C "));
  Serial.print(hif);
  Serial.println(F("°F"));
}
```

POZOR! Čidlo samo od sebe neaktualizuje data, proto se volá ve funkci loop().

## Citace
<https://www.itnetwork.cz/hardware-pc/arduino/arduino-4-dil-cidlo-dht11-a-konstrukce-jazyka>
