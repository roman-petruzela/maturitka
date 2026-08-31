---
title: "Statistika – charakteristiky variability"
order: 5
source: "matematika/TY01_0222_Statistika_-_charakteristiky_variability.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace obsahovala vzorce vložené jako obrázky/rovnice a používala animované odrážky — obojí se při převodu ztratilo. Vzorce jsou níže doplněny v textové podobě, číselné výsledky řešených příkladů jsou dopočítány a ověřeny z dat v původních tabulkách.

Popis statistického souboru pomocí středních hodnot (průměru, mediánu) někdy nestačí — dva soubory mohou mít stejný průměr, a přesto se výrazně lišit tím, jak moc jsou jejich hodnoty „rozptýlené". Příklad: slon 5 000 kg, myš 0,030 kg — průměrná hodnota (2 500 kg) o žádném z obou zvířat nic nevypovídá.

Velikost kolísání hodnot kolem střední hodnoty je vyjádřena **charakteristikami variability** (proměnlivosti) znaku: rozptyl, směrodatná odchylka, variační koeficient, mezikvartilová odchylka a další.

Součet všech odchylek od aritmetického průměru je vždy roven nule — proto ho nelze přímo využít jako míru variability.

## Rozptyl

Rozptyl je průměr druhých mocnin odchylek jednotlivých hodnot od aritmetického průměru:

s² = (1/n) · Σ (xᵢ − x̄)²

Značí se s² nebo σ².

## Směrodatná odchylka

Směrodatná odchylka je druhá odmocnina z rozptylu:

s = √(s²) = √( (1/n) · Σ (xᵢ − x̄)² )

Značí se s nebo σ. Výhoda oproti rozptylu: má stejné jednotky jako hodnota znaku (rozptyl má jednotky na druhou).

### Příklad: rozptyl a směrodatná odchylka

Vypočítejte rozptyl a směrodatnou odchylku souborů č. 1 a 2:

- Soubor č. 1: 5, 4, 7, 8, 5, 8, 4, 6, 7, 7, 5, 7, 5, 4, 8
- Soubor č. 2: 3, 4, 5, 7, 4, 10, 8, 7, 4, 5, 2, 8, 9, 8

Oba soubory mají stejný aritmetický průměr x̄ = 6, liší se ale rozptylem hodnot.

**Soubor č. 1** (n = 15, x̄ = 6):

| xᵢ | 4 | 4 | 4 | 5 | 5 | 5 | 5 | 6 | 7 | 7 | 7 | 7 | 8 | 8 | 8 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| xᵢ − x̄ | -2 | -2 | -2 | -1 | -1 | -1 | -1 | 0 | 1 | 1 | 1 | 1 | 2 | 2 | 2 |
| (xᵢ − x̄)² | 4 | 4 | 4 | 1 | 1 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | 4 | 4 | 4 |

Součet (xᵢ − x̄)² = 32, tedy s₁² = 32/15 ≈ 2,13 a s₁ = √2,13 ≈ 1,46.

**Soubor č. 2** (n = 14, x̄ = 6):

| xᵢ | 2 | 3 | 4 | 4 | 4 | 5 | 5 | 7 | 7 | 8 | 8 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| xᵢ − x̄ | -4 | -3 | -2 | -2 | -2 | -1 | -1 | 1 | 1 | 2 | 2 | 2 | 3 | 4 |
| (xᵢ − x̄)² | 16 | 9 | 4 | 4 | 4 | 1 | 1 | 1 | 1 | 4 | 4 | 4 | 9 | 16 |

Součet (xᵢ − x̄)² = 78, tedy s₂² = 78/14 ≈ 5,57 a s₂ = √5,57 ≈ 2,36.

Soubor č. 2 má výrazně vyšší rozptyl i směrodatnou odchylku než soubor č. 1 — jeho hodnoty jsou kolem stejného průměru rozptýlené mnohem víc.

**Empirické pravidlo:** většina hodnot se neodlišuje od průměru o více než jednu směrodatnou odchylku a skoro všechny hodnoty jsou v pásmu do dvou směrodatných odchylek od průměru.

## Variační koeficient

Charakterizuje variabilitu znaku bezrozměrným číslem — je to podíl směrodatné odchylky a aritmetického průměru, obvykle vyjádřený v procentech:

v = (s / x̄) · 100 %

Variační koeficient má smysl jen tehdy, pokud znak nabývá jen nezáporných hodnot (typicky fyzikální měření, ceny apod.), protože jinak by dělení průměrem blízkým nule dávalo nesmyslné výsledky.

### Úloha: variační koeficient

Deset opakovaných měření nějaké fyzikální konstanty dalo tyto výsledky:

2,11; 2,01; 2,09; 2,02; 2,11; 2,03; 2,03; 2,10; 2,05; 2,05

Vypočtěte průměr, směrodatnou odchylku a variační koeficient.

*Řešení:*

- Průměr: x̄ = 20,60 / 10 = 2,06
- Rozptyl: s² = 0,0136 / 10 = 0,00136
- Směrodatná odchylka: s = √0,00136 ≈ 0,037
- Variační koeficient: v = (0,037 / 2,06) · 100 % ≈ 1,8 %

Měření je tedy velmi přesné — hodnoty kolísají kolem průměru jen zhruba o 1,8 %.

## Mezikvartilová odchylka

Pokud místo aritmetického průměru použijeme medián, používá se jako míra variability **mezikvartilová odchylka** místo směrodatné odchylky:

- Medián = „prostřední" hodnota
- První kvartil Q1 = „čtvrtinová" hodnota (medián první poloviny hodnot)
- Třetí kvartil Q3 = „tříčtvrtinová" hodnota (medián druhé poloviny hodnot)
- Mezikvartilová odchylka: Qx = (Q3 − Q1) / 2

### Příklad: mezikvartilová odchylka

Roční příjem (v tis. Kč) a četnost v souboru 20 lidí:

| Roční příjem | 200 | 240 | 260 | 280 | 350 | 950 |
|---|---|---|---|---|---|---|
| četnost | 1 | 7 | 6 | 4 | 1 | 1 |

Z kumulativních četností vychází Q1 = 240 000 Kč, Q3 = 280 000 Kč, tedy:

Qx = (280 000 − 240 000) / 2 = 20 000 Kč

Všimněte si, že v tomto souboru je jedna extrémní hodnota (950), která by aritmetický průměr silně zkreslila — proto se pro takto „nesouměrné" soubory hodí lépe medián s mezikvartilovou odchylkou než průměr se směrodatnou odchylkou.

## Úlohy

Pracovní list: charakteristiky polohy a variability (viz materiály k tématu [charakteristiky polohy](/mat/statistika/04-statistika-charakteristiky-polohy/)).
