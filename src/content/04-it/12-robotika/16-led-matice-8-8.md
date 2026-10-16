---
title: "LED matice 8×8"
order: 16
source: "robotika1.pol/cv13_LEDmatice8x8.pdf"
---

# LED matice 8x8

Díky low-voltage scanning metodě mají maticové LED displeje své výhody, kterými jsou: úspora energie, dlouhá životnost, nízké náklady, vysoký jas, dlouhý vizuální dosah, nepromokavost, aj. Maticové LED displeje mohou uspokojit potřeby různých aplikací. I díky tomu mají širokou perspektivu rozvoje.

<img src="/images/content/it/robotika/led-matice-8-8/01.webp" alt="LED matice 8x8 a číslování pinů" width="190" loading="lazy" decoding="async">

_Obrázek 1: LED matice 8x8 a číslování pinů_

<img src="/images/content/it/robotika/led-matice-8-8/02.webp" alt="Číslování pinů matice 8x8" width="600" loading="lazy" decoding="async">

_Obrázek 2: Číslování pinů matice 8x8_

C1 – C8 – sloupce R1 – R8 – řádky

<u>Definice pinů - tabulkově</u>

|Sloupec(COL)|1|2|3|4|5|6|7|8|
|---|---|---|---|---|---|---|---|---|
|č.pinu matice|13|3|4|10|6|11|15|16|
|Řádek(ROW)|1|2|3|4|5|6|7|8|
|č.pinu matice|9|14|8|12|1|7|2|5|

## Princip 8x8 maticového§ LED displeje:

8x8 LED matice se skládá z 64 LED a každá LEDka je umístěna na průsečíku řádku a sloupce. Když je elektrická úroveň určité řady vysoká a elektrická úroveň určitého sloupce nízká, pak se odpovídající LED rozsvítí. Chceš-li rozsvítit LED na první pokus, měl bys nastavit řádek 1 na vysokou úroveň (log. 1) a sloupec 1 na nízkou úroveň (log. 0). Pak se LED na prvním bodě rozsvítí. Chceš-li rozsvítit světlo LED na prvním řádku, měl bys nastavit řádek 1 na log. 1 a sloupce (1, 2, 3, 4, 5, 6, 7, 8) na log. 0. Pak se všechny LED diody na prvním řádku rozsvítí.

Základním principem při použití LED zobrazovačů je tzv. multiplikované vysvěcování, jehož podstata spočívá v zapojení LED do matic. Tato matice je tvořena anodovou a katodovou skupinou. Data tvořící snímek jsou postupně přiváděna na anody, kdy vždy jedna z katod je sepnuta. Postupným vysvícením všech dat na všech katodách dojde k vysvícení tzv. snímku. Princip je obdobný s funkcí obrazovky televize nebo monitoru. Snímková frekvence, tedy počet zobrazených snímků za sekundu, musí být tak vysoká, aby nepůsobila rušivě na lidské oko. V praxi se používají frekvence od stovek Hz do jednotek nebo desítek kHz.

Neustálé vysvěcování snímků je poměrně náročná záležitost, jejíž složitost stoupá s počtem prvků matice. Pro matici 8x8 bodů je zapotřebí 8 bitů pro řízení anodové a dalších 8 pro řízení katodové skupiny. Tímto je zařízeno ovládání pouhých 64 bodů.

Přirozeným řešením tohoto problému je využití jednočipového mikropočítače (například Arduino) s dostatečnou kapacitou vstupních a výstupních pinů a výpočetním výkonem.

## Budeme potřebovat

1. Arduino Uno (nebo jinou desku).

2. USB kabel.

3. Nepájivé kontaktní pole.

4. Vodiče

5. LED matice 8x8

6. 8x Odpor 220Ω

## Zapojení

<img src="/images/content/it/robotika/led-matice-8-8/03.webp" alt="Schéma zapojení LED matice 8x8" width="640" loading="lazy" decoding="async">

_Obrázek 3: Schéma zapojení LED matice 8x8_

### <u>Zapojení tabulkově</u>

|Arduino|Barva – dle obrázku|Rezistor|Pin LED<br>matice|
|---|---|---|---|
|A0|žlutá|ano|13|
|A1|modrá|-|14|
|A2|černá|ano|15|
|A3|červená|ano|16|
|2|fialová|-|8|
|3|hnědá|-|7|
|4|azurová|ano|6|
|5|hnědá|-|5|
|6|oranžová|ano|4|
|7|bílá|ano|3|
|8|šedá|-|2|
|9|zelená|-|1|
|10|černá|-|9|
|11|oranžová|ano|10|
|12|žlutá|ano|11|
|13|červená|-|12|

## Program 1

Stáhněte zdrojový soubor programu „ **maticeLED-8x8-test.ino** “.

Do Arduino IDE vložíme kód programu a nahrajeme jej do Arduina. Program otestuje zda je LED matice vpořádku.

Co se stane, když změníte hodnotu u příkazu **delay()** ?

```cpp

byte row[] = {10,A1,2,13,9,3,8,5};
byte col[] = {A0,7,6,11,4,12,A2,A3};

//2D array for picture
byte pic[8][8] = {
B11111111,
B10000001,
B10111101,
B10100101,
B10100101,
B10111101,
B10000001,
B11111111
};                 
                      

void setup(){
    for(int i = 0; i < 8; i++){

        pinMode(col[i], OUTPUT);
        pinMode(row[i], OUTPUT);
        
        //zajistíme vypnutí displeje
        digitalWrite(col[i], HIGH); 
        digitalWrite(row[i], LOW);
    }
}

void loop(){
    for(int i = 0; i < 8; i++){
        //on row i
        digitalWrite(row[i], HIGH);
        
        //work with columns
        for(int j = 0; j < 8; j++){
            // if in pic 1 -> light LED
            if(pic[i][j] == 1){
                digitalWrite(col[j], LOW);
            }
        }
        delay(50); //Co se stane, když změníte hodnotu v rozmezí 50 -100
        
        //off column j
        for(int j = 0; j < 8; j++){
            digitalWrite(col[j], HIGH);
        }
        
        //off row i
        digitalWrite(row[i], LOW);
  }//for
}//loop
```

## Program 2

Stáhněte zdrojový soubor programu „ **arduino_LED_Matrix_8x8.ino** “. Do Arduino IDE vložíme kód programu a nahrajeme jej do Arduina.

<img src="/images/content/it/robotika/led-matice-8-8/04.webp" alt="Zapojení LED matice 8x8" width="425" loading="lazy" decoding="async">

_Obrázek 4: Zapojení LED matice 8x8_

```cpp

#define ROW_1 10    // pin matice 9
#define ROW_2 A1    // pin 14
#define ROW_3 2     // pin 8
#define ROW_4 13    // pin 12
#define ROW_5 9     // pin 1
#define ROW_6 3     // pin 7
#define ROW_7 8     // pin 2
#define ROW_8 5     // pin 5

#define COL_1 A0    // pin 13
#define COL_2 7     // pin 3
#define COL_3 6     // pin 4
#define COL_4 11    // pin 10
#define COL_5 4     // pin 6
#define COL_6 12    // pin 11
#define COL_7 A2    // pin 15
#define COL_8 A3    // pin 16

const byte rows[] = {
    ROW_1, ROW_2, ROW_3, ROW_4, ROW_5, ROW_6, ROW_7, ROW_8
};

// kódy káždého znaku, zobrazeného na displeji
// jako Hexadecimal
byte l[] = { 0x0F, 0x06, 0x06, 0x06, 0x46, 0x66, 0x7F, 0x00};
byte a[] = { 0x0C, 0x1E, 0x33, 0x33, 0x3F, 0x33, 0x33, 0x00};
byte s[] = { 0x1E, 0x33, 0x07, 0x0E, 0x38, 0x33, 0x1E, 0x00};
byte k[] = { 0x67, 0x66, 0x36, 0x1E, 0x36, 0x66, 0x67, 0x00};
byte r[] = { 0x3F, 0x66, 0x66, 0x3E, 0x36, 0x66, 0x67, 0x00};
byte d[] = { 0x1F, 0x36, 0x66, 0x66, 0x66, 0x36, 0x1F, 0x00};
byte u[] = { 0x33, 0x33, 0x33, 0x33, 0x33, 0x33, 0x3F, 0x00};
byte i[] = { 0x1E, 0x0C, 0x0C, 0x0C, 0x0C, 0x0C, 0x1E, 0x00};
byte n[] = { 0x63, 0x67, 0x6F, 0x7B, 0x73, 0x63, 0x63, 0x00};
byte o[] = { 0x1C, 0x36, 0x63, 0x63, 0x63, 0x36, 0x1C, 0x00};
// jako binární
byte heart[] = {
B00000000,
B01100110,
B11111111,
B11111111,
B01111110,
B00111100,
B00011000,
B00000000};

float timeCount = 0;

void setup() {
  // nastavení pinů displeje jako výstupu  
  for (byte i = 2; i <= 13; i++)
    pinMode(i, OUTPUT);
    pinMode(A0, OUTPUT);
    pinMode(A1, OUTPUT);
    pinMode(A2, OUTPUT);
    pinMode(A3, OUTPUT);
}

void loop() {
	// Pauzu můžeš odstranit. 
    // tím pádem bude displej jasnější.
	delay(2);
	timeCount += 1;
	if(timeCount <  100) {
		drawScreen(l);
	} else if (timeCount <   210) {
		// nic neděláme -> pauza mezi znaky
	} else if (timeCount <   300) {
		drawScreen(a);
	} else if (timeCount <   410) {
		// nic neděláme -> pauza mezi znaky     
	} else if (timeCount <   500) {
		drawScreen(s);       
	} else if (timeCount <   610) {
		// nic neděláme -> pauza mezi znaky     
	} else if (timeCount <   700) {
		drawScreen(k);       
	} else if (timeCount <   810) {
		// nic neděláme -> pauza mezi znaky
	} else if (timeCount <   900) {
		drawScreen(heart);
	} else if (timeCount <  1010) {
		// nic neděláme -> pauza mezi znaky
	} else if (timeCount <  1100) {
		drawScreen(r);
	} else if (timeCount <  1210) {
		// nic neděláme -> pauza mezi znaky
	} else if (timeCount <  1300) {
		drawScreen(d);
	} else if (timeCount <  1410) {
		// nic neděláme -> pauza mezi znaky
	} else if (timeCount <  1500) {
		drawScreen(u);
	} else if (timeCount <  1610) {
		// nic neděláme -> pauza mezi znaky
	} else if (timeCount <  1700) {
	drawScreen(i);
	} else if (timeCount <  1810) {
		// nic neděláme -> pauza mezi znaky
	} else if (timeCount <  1900) {
		drawScreen(n);
	} else if (timeCount <  2010) {
		// nic neděláme -> pauza mezi znaky
  } else if (timeCount <  2100) {
   drawScreen(o);
  } else if (timeCount <  2210) {
    // nic neděláme -> pauza mezi znaky
	} else {
		// a zase od začátku...
		timeCount = 0;
	}
}

 void  drawScreen(byte buffer2[]){
   // zapínáme každý řádek v sérii
    for (byte i = 0; i < 8; i++) {
        setColumns(buffer2[i]); // nastav sloupce pro tento konkrétní řádek
        
        digitalWrite(rows[i], LOW);
        delay(2); // nastav na 50 až 100, chceš-li vidět multiplexní efekt!!!
        digitalWrite(rows[i], HIGH);
    }
}

void setColumns(byte b) {
    digitalWrite(COL_1, (b >> 0) & 0x01); // získat 1 bit: 10000000
    digitalWrite(COL_2, (b >> 1) & 0x01); // získat 2 bit: 01000000
    digitalWrite(COL_3, (b >> 2) & 0x01); // získat 3 bit: 00100000
    digitalWrite(COL_4, (b >> 3) & 0x01); // získat 4 bit: 00010000
    digitalWrite(COL_5, (b >> 4) & 0x01); // získat 5 bit: 00001000
    digitalWrite(COL_6, (b >> 5) & 0x01); // získat 6 bit: 00000100
    digitalWrite(COL_7, (b >> 6) & 0x01); // získat 7 bit: 00000010
    digitalWrite(COL_8, (b >> 7) & 0x01); // získat 8 bit: 00000001
}
```

## Úkol:

Upravte kód programu 2 tak, aby zobrazil vaše jméno. Použijte znaky bez diakritiky. Můžete využít: <u>https://embed.plnkr.co/3VUsekP3jC5xwSIQDVHx/preview</u> nebo <u>https://github.com/dhepper/font8x8</u>

## Citace:

Arduino MAXI Starter kit OD BASTLÍŘŮ BASTLÍŘŮM - Lekce 20 8x8 LED matice

