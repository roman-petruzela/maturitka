---
title: "Infračervený přijímač"
order: 24
source: "maturitka/RBT_IT3/Arduino_Elektro/cv23_Infracerveny_prijimac/cv23_Infracerveny_prijimac.pdf"
---
Hlavním prvkem tohoto infračerveného dálkového ovládání je přijímač HX1838. Tento infračervený přijímač umožňuje ve svém okolí detekovat signály z IR dálkových ovladačů a při jeho připojení k Arduino můžeme tyto signály převést na proměnné a dále využít.

## Budeme potřebovat
1. Arduino Uno (nebo jinou desku).

2. USB kabel.

3. Vodiče

4. Infračervený přijímač HX1838

5. dálkový ovládač

6. Kontaktní pole - Breadboard

## Princip činnosti infračerveného přijímače
Jako světelné zdroje se v dálkových ovladačích používají luminiscenční diody infra-LED, emitující paprsek záření o vlnové délce kolem 950nm. Jelikož při posílání informace způsobem log.1 = "infra-LED svítí", log.0 = "nesvítí" by bylo obtížné zajistit bezchybný přenos datového rámce z důvodu vysokého rušení (zdrojem takového infračerveného záření je i slunce či obyčejná žárovka). Využívá se tedy modulace.

Při modulaci logickou úrovní 1 se infra-LED budí obdélníkovým nosným signálem o dané střídě a frekvenci, typicky mezi 30-56kHz (38kHz v našem případě). Tento stav se nazývá značka. Po dobu logické úrovně 0 není dioda aktivní, nastává mezera. Dobu trvání značky a mezery, stejně tak jako jejich význam, specifikuje použitý protokol. V klidu, tj. když neprobíhá přenos rámce, setrvává vysílač ve stavu log.0. Přijímač signálu je nastaven na použitý nosný kmitočet. Tím, že ostatní kmitočty odfiltruje, účinně zamezuje možnému rušení okolním světlem.

Když stiskneš klávesu Play / Pause, infračervené paprsky budou emitovány z dálkového ovladače a přijímány infračerveným přijímačem a LED na Arduino se rozsvítí.

## Zapojení

<img src="/images/content/it/robotika/infracerveny-prijimac/01.webp" alt="Zapojení" width="160" loading="lazy" decoding="async">

<img src="/images/content/it/robotika/infracerveny-prijimac/02.webp" alt="Zapojení" width="567" loading="lazy" decoding="async">

## Program
Program „**Infracerveny_prijimac.ino**“ vložíme do Arduino IDE a nahrajeme jej do Arduina.

```cpp

#include <IRremote.h>   

const int IRPin = 2;			// číslo pinu tlačítka přijímače
const int ledPin = 13;			// číslo pinu zabudované LEDky

IRrecv irrecv(IRPin);			// vytvořeme objekt typu IRrecv
decode_results results;			// definujeme proměnnou
 
void setup() {
	pinMode(ledPin,OUTPUT);		// nastavení pinu LEDky jako výstupu
	Serial.begin(9600);			// spustit sériový monitor na 9600 bps
	irrecv.enableIRIn();		// zapnout infračervený přijímač  
}
 
void loop() {
	if (irrecv.decode(&results)) {			// jestli přijímač přijal data
		Serial.print("IR Kod: ");			// tisknout "irCode: "
		Serial.print(results.value, HEX);  	// tisknout data jako hexdecimal
		Serial.print(",  bity: ");  		// tisknout " ,  bity: "
		Serial.println(results.bits);  		// tisknout bity
		irrecv.resume();    				// přijat další data
	}  
	delay(600);  //počkat 600ms
	if(results.value == 0xFFC23D) {		// Kód tlačitka "Play"
		digitalWrite(ledPin,HIGH); 		// zapnout LEDku
	} else {
		digitalWrite(ledPin,LOW); 		// vypnout LEDku
	}
}
```

Nyní stiskni tlačítko „Play“ na dálkovém ovladači a LED, připojená k vývodu 13 na Arduino, se rozsvítí. Stiskni libovolnou jinou klávesu a LED zhasne. V monitoru sériového portu se objeví IR kód tlačítka.

## Citace
Arduino MAXI Starter kit OD BASTLÍŘŮ BASTLÍŘŮM - Lekce 29 Infračervený přijímač
