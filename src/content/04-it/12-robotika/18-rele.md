---
title: "Relé"
order: 18
source: "maturitka/RBT_IT3/Arduino_Elektro/cv15_rele/cv15_rele.pdf"
---
Elektromagnetické relé je elektrotechnická součástka, která obsahuje elektromagneticky ovládané kontakty. Relé se používá v mnoha aplikacích, byť jeho funkci v mnoha případech přebírají obvody založené na polovodičích. Na rozdíl od polovodičů, relé obvykle zajišťuje galvanické - izolační oddělení řídícího a řízeného obvodu.

Elektromagnetické relé je příkladem využití elektromagnetu v zařízení, které je důležitým funkčním prvkem v automatizovaných soustavách a řídících systémech.

<img src="/images/content/it/robotika/rele/01.webp" alt="Relé" width="191" loading="lazy" decoding="async">

_Obrázek 1: Relé_

## Princip relé
Relé se v základním provedení skládá z cívky (elektromagnetu) navinuté na jádru z měkkého feromagnetického materiálu. Magnetický obvod je uzavřen pohyblivou kotvou. Kotva je pružinou uváděna do klidové polohy a současně se opírá o pohyblivý kontakt. Po připojení cívky na elektrický zdroj vyvolá proud cívkou v magnetickém obvodu magnetický tok. Magnetický tok vyvolá přitažlivou sílu na kotvu, která přemůže sílu v pružině a překlopí kontakt. Po odpojení el. proudu se kotva a kontakt vrátí do předchozího, klidového stavu.

Když pošleme z Arduino log.0 (0V) do vstupu modulu relé, tranzistor se otevře. Spínací kontakt relé bude uzavřen, zatímco rozpínací kontakt relé se přeruší. Když pošleme z Arduino log. 1 (5V), tranzistor se zavře a relé se vrátí do původního stavu.

<img src="/images/content/it/robotika/rele/02.webp" alt="Schéma relé - vlevo spínací obvod, vpravo spínaný obvod se žárovkou" width="423" loading="lazy" decoding="async">

_Obrázek 2: Schéma relé - vlevo spínací obvod, vpravo spínaný obvod se žárovkou_

## Budeme potřebovat
1. Arduino Uno (nebo jinou desku).

2. USB kabel.

3. Vodiče

4. Relé

## Zapojení
<img src="/images/content/it/robotika/rele/03.webp" alt="Zapojení relé a Arduino" width="499" loading="lazy" decoding="async">

_Obrázek 3: Zapojení relé a Arduino_

## Program
Program „**rele.ino**“ vložíme do Arduino IDE a nahrajeme jej do Arduina.

```cpp

const int relayPin = 8;           // číslo pinu rele

void setup() {                         
	pinMode(relayPin, OUTPUT);      // nastavení pinu relé jako výstupu
}                                      

void loop() {                          
	digitalWrite(relayPin, HIGH);   // vypnut relé
	delay(2000);                    // počkat 1s
	digitalWrite(relayPin, LOW);    // zapnut relé 
	delay(2000);                    // počkat 1s
}
```

Teď můžete slyšet známé „tik-tak, tik-tak“. To znamená, že normálně uzavřený kontakt se otevře a naopak, normálně otevřený kontakt se uzavře.

## Citace
Arduino MAXI Starter kit OD BASTLÍŘŮ BASTLÍŘŮM - Lekce 25 Modul relé
