---
title: "Blikání LED"
order: 4
source: "robotika1.pol/cv03_Blikani_LED.pdf"
---
IT3 – RBT – Arduino – Blikání LED

CV-03

# **Blikáme LED**

## **Budeme potřebovat**

1. Arduino Uno (nebo jinou desku).

2. USB kabel.

3. Nepájivé kontaktní pole.

4. LED dioda – stačí obyčejná za 1 Kč.

5. Vodiče

6. 330 Ω rezistor – zapojení sice bude fungovat i bez něj, ale je nutné ho použít.

## **Připojení Arduina a PC**

- Arduino Uno připojíme pomocí USB k počítači

- pokud se nepřipojí → budeme instalovat ovladače z adresáře Drivers  z Arduino IDE,

- Start → Ovládací panely →Správce zařízení, najdeme Arduino. Pravým tlačítkem otevřeme okno Vlastnosti a na kartě Ovladač zmáčkneme tlačítko Aktualizovat ovladač.

- Vyhledat ovladač v počítači a navedeme instalační program do umístění složky Drivers.

- V Arduino IDE Otevřeme nabídku Tools - Boards vybereme Arduino Uno.

- Pak Tools → Serial Port vyberte sériový port, na který je Arduino připojeno

_
IT3 – RBT – Arduino – Blikání LED

CV-03

## **Zapojení**

Dle obrázku:

_Obrázek 1: Zapojení blikající LED_

## **Program**

Do Arduino IDE vložíme kód programu a nahrajeme jej do Arduina:

```
void setup() {
```

```
  pinMode(12,OUTPUT);      //nastav pin 12 jako vystup
}
void loop() {
  digitalWrite(12,HIGH);  //na pinu 12 pust proud
  delay(1000);            //pockej 1000 ms = 1 s
  digitalWrite(12,LOW);   //na pinu 12 vypni proud
  delay(1000);
```

```
}
```

_
