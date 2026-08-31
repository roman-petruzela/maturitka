---
title: "Skener sběrnice I2C"
order: 10
source: "robotika1.pol/cv09a_skener_sbernice_I2C.pdf"
---
IT3 – RBT – Arduino – Skener sběrnice I2C

CV-09a

# **Skener sběrnice I**<sup>**2**</sup> **C**

Existují převodníky, které mají jinou adresu než je standardní. Proto je dobré znát, jak skenovat adresy na sběrnici I<sup>2</sup> C.

Každé zařízení s I2C sběrnicí má adresu I2C, kterou používá k přijímání příkazů nebo odesílání zpráv. Bohužel často není tato informace není popsaná v dokumentaci.

Program bude skenovat zařízení připojené na I2C sběrnici a pokud bude nalezeno bude ohlášeno na sériovém monitoru. Adresa je 7-bitová zapsaná hexadecimální soustavě.

Zapojovat a odpojovat I2C zařízení lze i za běhu aplikace.

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
IT3 – RBT – Arduino – Skener sběrnice I2C

CV-09a

_Obrázek 1: Zapojení LCD displaye na Arduino na sběrnici I2C_

_Obrázek 2: Připojení Arduina na LCD display_

## **Program**

Do Arduino IDE vložíme kód programu a nahrajeme jej do Arduina:

```
#include <Wire.h>
```

```
void setup() {
Wire.begin();
Serial.begin(9600);
while (!Serial);               // počkat na sériový monitor
Serial.println("\nI2C Skener");
```

```
}
```

```
void loop() {
byte error, address;
```

_
CV-09a

IT3 – RBT – Arduino – Skener sběrnice I2C

```
int nDevices;
```

```
Serial.println("Skenování...");
```

```
nDevices = 0;
for(address = 1; address < 127; address++ ){
// i2c_skener používá vrácenou hodnotu
// Write.endTransmisstion pro zjištění,
// zda zařízení potvrdilo adresu.
Wire.beginTransmission(address);
error = Wire.endTransmission();
```

```
if (error == 0){
```

```
Serial.print("I2C zařízení nalezeno na adrese 0x");
if (address<16)
Serial.print("0");
Serial.print(address,HEX);
Serial.println("  !");
```

```
nDevices++;
} else if (error==4) {
Serial.print("Neznámá chyba na adrese 0x");
if (address<16)
Serial.print("0");
Serial.println(address,HEX);
```

```
}
```

```
}
```

```
if (nDevices == 0)
Serial.println("Žádné I2C zařízení nenalezeno\n");
else
Serial.println("Hotovo\n");
```

```
delay(5000);               // počkat 5 vteřin
```

```
}
```

PO spuštění programu se na sériovém monitoru objeví nalezené zařízení a jeho adresa.

_
IT3 – RBT – Arduino – Skener sběrnice I2C

CV-09a

_Obrázek 3: Výstup na sérovém monitoru_

## **Citace:**

Arduino MAXI Starter kit OD BASTLÍŘŮ BASTLÍŘŮM - Lekce 5 Používaní skaneru sběrnicí I²C, str. 12

_
