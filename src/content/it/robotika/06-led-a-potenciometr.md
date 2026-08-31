---
title: "LED a potenciometr"
order: 6
source: "robotika1.pol/cv05_LED_potenciometr.pdf"
---
IT3 – RBT – Arduino – LED a potenciometr

CV-05

# **Konstanty**

Konstanta je proměnná, která má přednastavenou hodnotu, definovanou tvůrci Arduina. Jsou rozděleny na skupiny:

## **Logické konstanty**

Jsou jen dvě hodnoty – pravda / nepravda.

- **false** – má hodnotu 0

- **true** – jakákoliv nenulová hodnota

## **Typ digitálního pinu**

- **OUTPUT** : Při použití této konstanty je pin nastaven jako výstup a snese proud do 40 mA při stavu **HIGH** a stavu **LOW** může stejně velký proud přijmout.

- **INPUT** : Nastaví pin jako vstup - používá ke čtení hodnot z digitálních senzorů a i ke komunikaci.

- **INPUT_PULLUP** : Funguje podobně jako **INPUT,** dojde k připojení interního rezistoru. Ten je uvnitř čipu zapojen mezi digitálním vstupem a +5V. Výchozí hodnota funkce **HIGH** . Když chceme hodnotu změnit, musíme vstup připojit na **GND** .

## **Napětí na digitálních pinech**

pouze dva stavy napětí:

- **HIGH**

   - 5V – pro výstup

   - mezi 3V a 5V při čtení

- **LOW**

   - při zápisu mezi GND  a pinem 0.

   - při čtení mezi GND  a pinem napětí menší než 2V

_
IT3 – RBT – Arduino – LED a potenciometr

CV-05

## **Analogový vstup a výstup**

### **Výstup**

Pro nastavení „analogové“ hodnoty na pinu je použita funkce

```
analogWrite(číslo_pinu, hodnota);
```

a lze ji použít jen na pinech označených PWM.

**Hodnota** – v rozsahu 0 – 255.

Pro skutečnou analogovou hodnotu potřebujeme D/A převodník.

PWM v praxi funguje tak, že se rychle střídá 0 V a 5 V.

_Obrázek 1: PWM modulace_

### **Vstup**

Čtení analogové hodnoty se používá funkce

#### **`promenna = analogRead(pin);`**

čtení analogových hodnot je užitečné u různých senzorů (teplota, vlhkost atd.) Arduino má analogové vstupy s rozlišením 10 bitů. Pětivoltovou stupnici tedy můžeme „rozkouskovatˇ na 2<sup>10</sup> = 1024 hodnot (0 – 1023).

# **LED a potenciometr**

## **Budeme potřebovat**

1. Arduino Uno (nebo jinou desku).

2. USB kabel.

3. Nepájivé kontaktní pole.

4. Vodiče

5. 220 Ω rezistor.

6. LED dioda.

_
CV-05

IT3 – RBT – Arduino – LED a potenciometr

7. Potenciometr – s lineárním průběhem (B10K)

## **Zapojení**

Dle obrázku:

## **Program**

Do Arduino IDE vložíme kód programu a nahrajeme jej do Arduina:

```
byte led = 6;  //pin s LED diodou
byte pot = A0; //pin s pripojenym potenciometrem
int val;       //promenna pripravena k uchovani hodnot
```

```
void setup() {
 //sem nic nepiseme
 }
```

#### **`void loop() {`**

```
 val = analogRead(pot)/4; //cteni hodnoty na A0 a uprava rozsahu
 analogWrite(led, val); //generovani PWM
}
```

_
