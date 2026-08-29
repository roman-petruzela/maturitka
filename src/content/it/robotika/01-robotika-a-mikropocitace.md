---
title: "Robotika a mikropočítače"
order: 1
tags: ["doplněno"]
---

## LEGO Mindstorms

### Základní pojmy

- Robot – automaticky nebo poloautomaticky řízené zařízení, které vnímá své okolí pomocí senzorů a na základě naprogramovaného chování na něj reaguje pomocí aktuátorů
- Senzor (čidlo) – vstupní zařízení, které snímá fyzikální veličinu (vzdálenost, světlo, barvu, dotek, náklon) a převádí ji na elektrický signál zpracovatelný řídicí jednotkou
- Aktuátor – výstupní zařízení, které přeměňuje elektrický signál na fyzický pohyb nebo jiný účinek (motor, světlo, zvuk)
- Řídicí jednotka – „mozek" robotu, u LEGO Mindstorms je jím programovatelná kostka EV3, která zpracovává data ze senzorů a podle nahraného programu ovládá motory

### Části stavebnice EV3

- Řídicí kostka EV3 (EV3 Brick) – centrální jednotka s procesorem, malým LCD displejem, čtyřmi tlačítky pro ovládání menu, 4 vstupními porty (1–4) pro připojení senzorů, 4 výstupními porty (A–D) pro připojení motorů, komunikací přes USB, Bluetooth a Wi-Fi (s adaptérem), slotem na paměťovou kartu a reproduktorem
- Motory s enkodérem – „Large motor" (silnější, pro pohon podvozku) a „Medium motor" (rychlejší, pro menší mechanismy). Každý motor obsahuje vestavěný rotační enkodér, který měří natočení hřídele s přesností na 1°, takže lze programovat pohyb „ujeď přesně 3 otáčky" nebo „otoč se přesně o 90°"
- Senzory
	- Dotykový senzor (Touch sensor) – rozezná, zda je tlačítko stisknuté, uvolněné, nebo právě stisknuté/uvolněné
	- Ultrazvukový senzor (Ultrasonic sensor) – měří vzdálenost k překážce v centimetrech nebo palcích (typický rozsah cca 3–250 cm) na principu odrazu ultrazvukového vlnění
	- Barevný senzor (Color sensor) – rozpoznává barvu povrchu (rozlišuje několik základních barev), intenzitu odraženého světla (použití při sledování čáry) nebo intenzitu okolního světla
	- Gyroskopický senzor (Gyro sensor) – měří úhel natočení robotu (ve stupních) a rychlost otáčení (ve stupních za sekundu), používá se pro přesné zatáčení nebo udržení směru jízdy
- Stavební prvky – nosníky, kolíky, spojky a další konstrukční díly systému LEGO Technic, ze kterých se sestavuje mechanická konstrukce (podvozek, chapadlo, věž se senzorem apod.)
- Zdroj napájení – dobíjecí akumulátor nebo sada tužkových baterií umístěná v EV3 kostce

### Vývojové prostředí a princip blokového programování

- Programuje se v prostředí EV3 Software (EV3-G), postaveném na platformě LabVIEW – jde o čistě blokové (vizuální) programování, textový kód se nepíše
- Program se sestavuje přetahováním bloků z palety (Programming Palette) na sekvenční linku (Sequence Wire) – tenkou čáru, která určuje pořadí, v jakém se bloky provádějí
- Základní kategorie bloků
	- Akční bloky (zelené) – ovládání motorů (Move Steering/Tank, Motor Rotation), zvuku, displeje, LED
	- Bloky toku programu (oranžové) – Start, Smyčka (Loop), Přepínač/podmínka (Switch), Čekání (Wait), Přerušení smyčky (Loop Interrupt)
	- Senzorové bloky (žluté) – čtení hodnoty z konkrétního senzoru
	- Datové bloky (červené) – práce s proměnnými, matematické a logické operace
- Blok pro pohyb motoru má tzv. „mód doby běhu" – lze nastavit, aby běžel po určitý počet otáček/stupňů, po určitou dobu, nebo „neomezeně" (Unlimited/On). Poslední varianta je důležitá: program se v ní nezastaví a hned pokračuje dalším blokem, zatímco motor běží dál na pozadí – to se využívá právě tehdy, když má robot zároveň jet a vyhodnocovat senzor
- Hotový program se z počítače nahraje do EV3 kostky přes USB kabel nebo Bluetooth a poté se na robotu spustí stiskem tlačítka

### Příklad úlohy: zastavení a zatočení před překážkou

Úloha: robot jede rovně, dokud ultrazvukový senzor nenaměří překážku blíž než 10 cm; pak zastaví a zatočí.

Protože blokové programování nelze zapsat jako textový kód, popisuje se sled bloků na sekvenční lince slovně:

```
[Start]
   |
   v
[Pohyb (Move Steering)]  Steering = 0 (rovně), výkon = 50 %,
   |                     mód běhu = "Zapnuto" (Unlimited)
   |                     -> motory se rozjedou, blok NEČEKÁ na dokončení
   |                        a program hned pokračuje dál
   v
[Čekání (Wait)]  senzor = Ultrazvukový, porovnání = "Vzdálenost < 10 cm"
   |             -> program čeká na tomto bloku, robot mezitím
   |                dál jede (motory stále běží z předchozího bloku)
   v
[Pohyb (Move Steering)]  mód běhu = "Vypnuto" (Stop), Brzdit = Ano
   |                     -> motory se zastaví
   v
[Pohyb (Move Steering)]  Steering = 100 (otáčení na místě), výkon = 50 %,
   |                     mód běhu = po dobu 1 sekundy
   v
[konec programu]
```

Pro opakované chování (robot se po zatočení znovu rozjede a znovu hledá překážku) by se celá tato sekvence od druhého bloku vložila dovnitř bloku Smyčka (Loop) nastaveného na „Opakuj neustále".

### Programování vstupů a výstupů

- Programování vstupních zařízení – čtení hodnoty ze senzoru a její vyhodnocení pomocí bloku Čekání nebo Přepínač (např. „pokud je vzdálenost menší než 10 cm, zastav")
- Programování výstupních zařízení – nastavení výkonu, směru (Steering) a doby běhu motorů, případně dalších výstupů (zvuk, text/obrázek na displeji)
- Typická úloha spojuje obojí do zpětnovazební smyčky – robot neustále vyhodnocuje data ze senzorů a podle nich upravuje chování motorů (např. sledování čáry pomocí barevného senzoru, vyhýbání se překážkám pomocí ultrazvukového senzoru)

### Návrh, tvorba a prezentace programu

- Návrh vlastního programu – rozmyšlení úlohy, kterou má robot splnit, rozdělení na dílčí kroky, návrh algoritmu (např. formou vývojového diagramu nebo slovního popisu sledu bloků, jako v příkladu výše)
- Tvorba programu – sestavení bloků na sekvenční lince podle návrhu, postupné testování a ladění chování (výkon motorů, prahové hodnoty senzorů) na reálném robotu
- Prezentace programu – ukázka funkčního chování robotu, vysvětlení použitých senzorů, motorů a logiky programu ostatním

## Arduino

### Základní pojmy

- Arduino Uno – deska s mikrokontrolérem ATmega328P, jedna z nejrozšířenějších vývojových desek pro výuku a prototypování elektroniky
- Mikrokontrolér – malý počítač na jednom čipu, obsahuje procesor, paměť (flash pro program, RAM pro proměnné, EEPROM pro trvalé uložení dat) a vstupně-výstupní obvody, určený k řízení konkrétního zařízení nebo úlohy
- GPIO piny (General Purpose Input/Output) – univerzální vstupně-výstupní piny desky. Arduino Uno má 14 digitálních pinů (0–13, z toho 6 podporuje PWM a jsou označené vlnovkou „~") a 6 analogových vstupů (A0–A5), které lze programově nastavit jako vstup (čtení signálu ze senzoru) nebo výstup (ovládání LED, motoru apod.)
- Napájení – Arduino Uno se napájí a zároveň programuje přes USB kabel z počítače (5 V), případně externím zdrojem 7–12 V přes DC konektor (např. baterií, pokud pracuje samostatně bez počítače)

### Části soupravy

- Deska Arduino Uno – obsahuje mikrokontrolér, GPIO piny, USB konektor pro napájení a nahrávání programu, resetovací tlačítko
- Senzory – např. tlačítko, fotorezistor (LDR), potenciometr, teplotní čidlo, ultrazvukový dálkoměr HC-SR04, PIR čidlo pohybu
- Aktuátory – LED diody, motory (stejnosměrné, servomotory, krokové), displeje (LCD, LED matice), reproduktory/bzučák (buzzer)
- Nepájivé pole (breadboard) a propojovací vodiče (jumper wires) – umožňují sestavit elektrický obvod bez pájení
- Rezistory – např. jako proudové omezení pro LED, nebo jako součást napěťového děliče u analogových senzorů (fotorezistor)

### Vývojové prostředí a programovací jazyk

- Programuje se v prostředí Arduino IDE – textovém editoru s vestavěným kompilátorem a nástrojem pro nahrání programu do desky přes USB
- Program se nazývá sketch a píše se ve zjednodušeném jazyce vycházejícím z C/C++ (tzv. Wiring)
- Základní struktura každého programu obsahuje dvě funkce
	- `setup()` – spustí se jednou při startu/resetu desky, slouží k nastavení pinů (`pinMode`) a inicializaci (např. `Serial.begin`)
	- `loop()` – opakuje se stále dokola po celou dobu běhu programu
- Arduino IDE obsahuje Sériový monitor (Serial Monitor) – okno, ve kterém lze zobrazovat hodnoty odeslané z desky pomocí `Serial.println()`, což se hodí k ladění programu (zjištění, jaké hodnoty senzor skutečně naměřil)

### Programování vstupů a výstupů

- Programování vstupních zařízení – čtení stavu digitálního pinu pomocí `digitalRead()` (např. tlačítko – hodnota `HIGH`/`LOW`) nebo hodnoty z analogového pinu pomocí `analogRead()` (např. fotorezistor, potenciometr – hodnota 0 až 1023)
- Programování výstupních zařízení – nastavení digitálního pinu pomocí `digitalWrite()` (zapnuto/vypnuto, např. LED), nebo simulace analogového výstupu pomocí `analogWrite()` (PWM, hodnota 0 až 255, např. jas LED nebo rychlost motoru)
- Níže je několik kompletních, funkčních příkladů.

**1. Blikání LED**

```cpp
// blikani_led.ino
// Rozsvěcí a zhasíná LED připojenou k pinu 13 v intervalu 1 sekunda.

void setup() {
	pinMode(13, OUTPUT); // nastavení pinu 13 jako výstup
}

void loop() {
	digitalWrite(13, HIGH); // rozsvícení LED
	delay(1000);             // čekání 1000 ms (1 sekunda)
	digitalWrite(13, LOW);   // zhasnutí LED
	delay(1000);             // čekání 1000 ms
}
```

**2. Čtení tlačítka (INPUT_PULLUP)**

```cpp
// tlacitko.ino
// Tlačítko je zapojené mezi pin 2 a GND. Díky vnitřnímu pull-up rezistoru
// není potřeba žádný externí rezistor - pin je v klidu HIGH a po stisku LOW.

const int tlacitkoPin = 2; // digitální pin, na který je připojené tlačítko
const int ledPin = 13;     // vestavěná LED na desce

void setup() {
	pinMode(tlacitkoPin, INPUT_PULLUP); // zapnutí interního pull-up rezistoru
	pinMode(ledPin, OUTPUT);
}

void loop() {
	int stavTlacitka = digitalRead(tlacitkoPin);

	if (stavTlacitka == LOW) {
		// LOW znamená, že tlačítko je stisknuté (uzemnilo pin)
		digitalWrite(ledPin, HIGH); // rozsviť LED
	} else {
		digitalWrite(ledPin, LOW);  // zhasni LED
	}
}
```

**3. Analogové čtení senzoru a řízení jasu LED**

```cpp
// fotorezistor_jas.ino
// Fotorezistor v napěťovém děliči je připojen na analogový vstup A0.
// Podle intenzity světla se plynule mění jas LED připojené na PWM pinu 9.

const int fotorezistorPin = A0; // analogový vstup
const int ledPin = 9;           // PWM pin (označený ~) pro řízení jasu

void setup() {
	pinMode(ledPin, OUTPUT);
	Serial.begin(9600); // spuštění sériové komunikace pro ladění
}

void loop() {
	int hodnota = analogRead(fotorezistorPin);   // 0 (tma) až 1023 (světlo)
	int jas = map(hodnota, 0, 1023, 0, 255);      // převod na rozsah PWM 0-255
	analogWrite(ledPin, jas);                     // nastavení jasu LED

	Serial.print("Osvetleni: ");
	Serial.print(hodnota);
	Serial.print(" -> jas LED: ");
	Serial.println(jas);

	delay(100); // krátká pauza mezi měřeními
}
```

**4. Ultrazvukový senzor vzdálenosti HC-SR04**

```cpp
// hc_sr04.ino
// Senzor HC-SR04 změří vzdálenost k překážce a výsledek vypíše
// do Sériového monitoru. TRIG vyšle ultrazvukový impuls, ECHO změří,
// za jak dlouho se impuls odrazil zpátky.

const int trigPin = 9;
const int echoPin = 10;

void setup() {
	pinMode(trigPin, OUTPUT);
	pinMode(echoPin, INPUT);
	Serial.begin(9600);
}

void loop() {
	// krátký impuls na TRIG spustí vyslání ultrazvukového pulzu
	digitalWrite(trigPin, LOW);
	delayMicroseconds(2);
	digitalWrite(trigPin, HIGH);
	delayMicroseconds(10);
	digitalWrite(trigPin, LOW);

	// pulseIn() změří délku HIGH pulzu na ECHO v mikrosekundách,
	// tedy dobu, za kterou zvuk doletí k překážce a zpět
	long doba = pulseIn(echoPin, HIGH);

	// rychlost zvuku je přibližně 0,0343 cm/us, dělíme 2,
	// protože zvuk urazí vzdálenost k překážce a zpět (tam i zpátky)
	float vzdalenost = doba * 0.0343 / 2;

	Serial.print("Vzdalenost: ");
	Serial.print(vzdalenost);
	Serial.println(" cm");

	delay(500); // pauza mezi jednotlivými měřeními
}
```

**5. Ovládání servomotoru**

```cpp
// servo_ovladani.ino
// Servomotor SG90 připojený na pin 6 se postupně natáčí
// do tří poloh: 0°, 90° a 180°.

#include <Servo.h> // knihovna pro řízení servomotorů

Servo mujServo;        // vytvoření objektu reprezentujícího servomotor
const int servoPin = 6;

void setup() {
	mujServo.attach(servoPin); // připojení objektu ke konkrétnímu pinu
}

void loop() {
	mujServo.write(0);   // natočení hřídele do polohy 0°
	delay(1000);
	mujServo.write(90);  // natočení do střední polohy 90°
	delay(1000);
	mujServo.write(180); // natočení do polohy 180°
	delay(1000);
}
```

### Návrh, tvorba a prezentace programu

- Návrh vlastního programu – určení, jaké senzory a aktuátory úloha vyžaduje, návrh zapojení obvodu (např. do schématu nebo náčrtu breadboardu) a algoritmu chování
- Tvorba programu – zapojení obvodu podle návrhu, napsání sketch v Arduino IDE, nahrání kódu do desky přes USB a postupné testování a odstraňování chyb (mimo jiné pomocí výpisů přes `Serial.println`)
- Prezentace programu – předvedení funkčního zapojení a programu, vysvětlení použitých komponent (senzorů, aktuátorů), principu činnosti kódu a případných úprav oproti původnímu návrhu
