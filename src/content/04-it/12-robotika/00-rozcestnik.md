---
title: "Robotika – rozcestník"
order: -1
---

Rozcestník kategorie: o čem předmět je, kdy se podle ŠVP učí, co si z něj určitě zapamatovat, kde je které téma a jak souvisí s maturitou.

## O předmětu

- Programování robotického zařízení (LEGO Mindstorms EV3, blokové programování) a jednoduchého mikropočítače (Arduino Uno, jazyk vycházející z C/C++).
- Na Arduinu se postupuje od blikání LED přes tlačítka, potenciometry a čidla k displejům (LCD po sběrnici I2C, sedmisegmentový displej, LED matice); každé cvičení má seznam součástek, zapojení a program.
- Cílem je navrhnout, napsat a předvést vlastní program, který čte vstupy (senzory) a ovládá výstupy (LED, motory, displeje).
- Navazuje na [programování](/it/#programovani) (proměnné, podmínky, cykly) a na logické funkce z [počítačových sítí](/it/pocitacove-site/23-booleova-algebra-a-logicke-funkce/).

## Ročníky a hodiny podle ŠVP

| Ročník | Hodin týdně | Obsah (ŠVP §4.9.11) |
| --- | --- | --- |
| 3. | 2 | programování robotického zařízení a tvorba vlastních programů; práce s jednoduchým mikropočítačem a tvorba vlastních programů pro něj |

Plné znění výstupů je v [přehledu ŠVP](/it/reference/svp-prehled/#4911-robotika).

## Co si určitě zapamatovat

- **Robot** vnímá okolí **senzory** (vzdálenost, světlo, barva, dotek, náklon) a působí na něj **aktuátory** (motory, světlo, zvuk); řídí ho **řídicí jednotka** podle programu.
- **LEGO EV3**: řídicí kostka se 4 vstupními porty (1–4, senzory) a 4 výstupními (A–D, motory); motory s enkodérem (přesnost 1°); senzory dotykový, ultrazvukový, barevný a gyroskopický. Programuje se bloky na sekvenční lince (akční, tok programu, senzorové, datové).
- **Arduino Uno** – mikrokontrolér ATmega328P (procesor, flash pro program, RAM, EEPROM a vstupy a výstupy na jednom čipu); **14 digitálních pinů** (0–13, z toho 6 s PWM označených „~“) a **6 analogových vstupů** A0–A5. Napájení 5 V z USB, nebo 7–12 V z externího zdroje.
- **Sketch** má dvě funkce: `setup()` proběhne jednou po startu (nastavení pinů `pinMode`, `Serial.begin`), `loop()` se opakuje stále dokola. Ladí se výpisy do **sériového monitoru** (`Serial.println`).
- **Digitální pin** má jen dva stavy – `HIGH` (5 V) a `LOW` (0 V): `digitalWrite`, `digitalRead`. **Analogový vstup** `analogRead` má rozlišení 10 bitů – hodnoty 0–1023. **Analogový výstup** `analogWrite` (0–255) je ve skutečnosti **PWM** – rychlé střídání 0 V a 5 V.
- **Obvod** se staví na nepájivém poli; LED potřebuje **rezistor** pro omezení proudu, fotorezistor a potenciometr se zapojují jako dělič napětí.
- **I2C** – sběrnice se dvěma signálovými vodiči **SDA** a **SCL** (na Uno piny A4 a A5), na které má každé zařízení svou adresu; skener sběrnice ji zjistí. Displej LCD s převodníkem I2C se tak připojí jen čtyřmi vodiči (napájení, zem, SDA, SCL).

## Témata kategorie

**Úvod**

- [Robotika a mikropočítače](/it/robotika/01-robotika-a-mikropocitace/) – LEGO Mindstorms EV3 a Arduino: pojmy, části soupravy, vývojové prostředí, návrh programu
- [Elektrotechnické značky](/it/robotika/02-elektrotechnicke-znacky/)
- [Instalace vývojového prostředí a knihoven](/it/robotika/03-instalace-vyvojoveho-prostredi-a-knihoven/)

**LED, tlačítka a potenciometr**

- [Blikání LED](/it/robotika/04-blikani-led/)
- [LED a tlačítko s proměnnou](/it/robotika/05-led-a-tlacitko-s-promennou/) – proměnné, datové typy, digitální vstup a výstup
- [LED a potenciometr](/it/robotika/06-led-a-potenciometr/) – analogový vstup a výstup, PWM
- [5× LED a potenciometr](/it/robotika/07-5-led-a-potenciometr/) – podmínky a přepínač
- [Had z 5 LED](/it/robotika/08-had-z-5-led/) – cykly `for`, `while`, `do while`
- [Hrací kostka](/it/robotika/09-hraci-kostka/) – náhodná čísla

**Sběrnice I2C, čidla a displeje**

- [Skener sběrnice I2C](/it/robotika/10-skener-sbernice-i2c/)
- [I2C LCD displej](/it/robotika/11-i2c-lcd-displej/)
- [Teplota na LCD displeji](/it/robotika/12-teplota-na-lcd-displeji/)
- [Sedmisegmentový displej](/it/robotika/13-sedmisegmentovy-displej/)
- [4místný segmentový displej](/it/robotika/14-4mistny-segmentovy-displej/)
- [LED matice 8×8](/it/robotika/15-led-matice-8-8/)

## Maturitní okruhy

Robotika se u ústní zkoušky nezkouší – podle [maturitních okruhů IT](/it/reference/maturitni-okruhy/) je součástí praktické zkoušky a maturitní práce.

## Co je jen okrajové

- **Zapojení konkrétních součástek** (piny displejů, knihovny pro LCD a segmentovky) – dohledá se v návodu cvičení, nezkouší se zpaměti.
- **Barevné kategorie bloků EV3** a ovládání EV3 Software – praktická znalost prostředí.
- **Historie Arduina** a instalace IDE – jednorázový návod.
