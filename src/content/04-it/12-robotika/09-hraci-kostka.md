---
title: "Hrací kostka"
order: 9
source: "robotika1.pol/cv07b_hraci_kostka.pdf"
---

# Funkce - Náhodná čísla

Stroje na rozdíl od člověka neumí jednoduše vytvořit náhodné číslo. Za „náhodným“ číslem totiž většinou stojí složitá série algoritmů, která je však statisticky předpovidatelná. Takovýmto číslům se říká **_pseudonáhodná_** . Na první pohled jako náhodná opravdu vypadají, ale ve skutečnosti nejsou. Principy generování opravdu náhodných čísel jsou většinou založeny na měření fyzikální veličiny, která je považována za náhodnou (pohyby plynů a kapalin, fázový šum v laseru. . . ). To je ale pro Arduino poměrně složité.

## random() a randomSeed()

Funkce random() slouží ke generování pseudo-náhodných čísel. Může mít jeden, nebo dva parametry.

**`1. random(max); //vygeneruje ”nahodne” cislo mezi 0 a max"1`**

**`2. random(min, max); //vygeneruje ”nahodne” cislo mezi min a max"1`**

Ke správné funkci generátoru je ještě potřeba použít funkci **_randomSeed()._** Ta slouží k nastavení výchozí hodnoty pro generátor. Má pouze jeden číselný parametr. Jako hodnota parametru se používá funkce **_analogRead()_** u analogového pinu, ke kterému není nic připojeno. Dochází kolem něj totiž k zachytávání elektromagnetického šumu, který může sloužit jako náhodná vstupní hodnota. Celý program by tedy mohl vypadat takto:

```
void setup() {
 Serial.begin(9600);
 randomSeed(analogRead(A0));
}
void loop() {
 Serial.println(random(256));
 delay(500);
}
```

# Hrací kostka

Pomocí funkce **_random()_** si vytvoříme jednoduchou hrací kostku. Výsledek budeme zobrazovat pomocí LED diod uspořádaných stejně jako černé body na hrací kostce. Využijeme také tlačítko. Po jeho zmáčknutí se vygeneruje nové číslo.

## Budeme potřebovat

1. Arduino Uno (nebo jinou desku).

2. USB kabel.

3. Nepájivé kontaktní pole.

4. Vodiče

5. 7x220 Ω rezistor.

6. 7xLED dioda.

7. Tlačítko

8. 10K  Ω rezistor.

## Zapojení

Dle obrázku:

<img src="/images/content/it/robotika/hraci-kostka/01.webp" alt="Zapojení hrací kostky" width="549" loading="lazy" decoding="async">

nebo s kontaktním polem:

<img src="/images/content/it/robotika/hraci-kostka/02.webp" alt="Zapojení hrací kostky na kontaktním poli" width="640" loading="lazy" decoding="async">

## Program

Vše zapojíme podle obrázku. Není důležité, na jaký pin připojíme jakou LED diodu. Vše se dá jednoduše upravit v programu.

Před uploadem programu do Arduina musíme upravit pole s informacemi o tom, na jaké piny jsou připojeny LED a tlačítko. Jedná se o pole **leds[]** a proměnnou **tlacitko** . Led diody na kostce jsou očíslovány následovně (číslo LED odpovídá jejímu indexu v poli). Stáhněte zdrojový soubor programu „ **cv07b_hraci_kostka.ino** “. Do Arduino IDE vložíme kód programu a nahrajeme jej do Arduina.

```cpp
byte leds[7] = {2,3,4,5,6,7,8}; //piny, na ktere jsou pripojeny LED 
//index odpovida cislu na predchozim obrazku

//logicke stavy LED pouzitych u jednotlivych cisel
byte cisla[7][7] = {{}, /*prazdne pole - 0 se nezobrazuje*/
                    {0,0,0,1,0,0,0}, /*1*/
                    {1,0,0,0,0,0,1}, /*2*/
                    {1,0,0,1,0,0,1}, /*3*/
                    {1,0,1,0,1,0,1}, /*4*/
                    {1,0,1,1,1,0,1}, /*5*/
                    {1,1,1,0,1,1,1}}; /*6*/

byte tlacitko = 9; //pin s tlacitkem

byte randn; //promenna pro nahodnou hodnotu
 
void setup() {
  Serial.begin(9600);  
  randomSeed(analogRead(A0)); //inicializace generatoru
  for(int i = 0; i <= 6; i++){
    pinMode(leds[i], OUTPUT);
    digitalWrite(leds[i], HIGH); //kontrola funkce LED
  }
  pinMode(tlacitko, INPUT);
  delay(1000);
  for(int i = 0; i <= 7; i++){
    digitalWrite(leds[i], LOW); //vypnuti vsech LED
  }
}
 
void loop() {
  if(digitalRead(tlacitko) == 1){
    for(int i = 0; i <= 7; i++){
      digitalWrite(leds[i], LOW); //vypnuti vsech LED
    }
    randn = random(1,7);
    
    for(int i = 0; i <= 6; i++){
      if(cisla[randn][i] == 1){
        digitalWrite(leds[i],HIGH);  
      } 
    }
    
    delay(1000);
  } 
}
```

## Úkol:

## Citace:

Průvodce světem Arduina – Kapitola 24 – Hrací kostka

