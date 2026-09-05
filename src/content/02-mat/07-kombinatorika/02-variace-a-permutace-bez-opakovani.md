---
title: "Variace a permutace bez opakování"
order: 2
source: "matematika/TY01_0225_Variace_a_permutace_bez_opakovani.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace používala animované odrážky, u kterých se řešení objevovalo až po kliknutí — tato mezikroková čísla se při převodu ztratila (zůstal jen nadpis typu "Výpočet" bez čísel). Doplněno a nezávisle přepočítáno.

**K-členné variace bez opakování** jsou k-členné skupiny utvořené z daných $n$ prvků tak, že v nich záleží na pořadí a žádný z prvků se v nich neopakuje.

## Úvodní příklad

Kolika způsoby lze mezi osm finalistů závodu rozdělit zlatou, stříbrnou a bronzovou medaili (nepředpokládáme dva závodníky se zcela stejným výsledkem)?

**Řešení:** Kolika způsoby můžeme vytvořit uspořádanou trojici z osmi prvků? Záleží na pořadí!

$$8 \cdot 7 \cdot 6 = 336$$

Jde o **tříčlennou variaci z osmi prvků**.

## Variace bez opakování

$k$-členná variace z $n$ prvků bez opakování je uspořádaná $k$-tice sestavená z těchto prvků tak, že se každý z nich vyskytuje nejvýše jednou.

$$V(k,n) = n \cdot (n-1) \cdot (n-2) \cdots (n-k+1) = \frac{n!}{(n-k)!}$$

### Příklad — vypsání všech variací

Vytvořte všechny tříčlenné variace bez opakování ze čtyř prvků $a, b, c, d$.

$$V(3,4) = \frac{4!}{1!} = 4\cdot3\cdot2 = 24$$

abc, bac, cab, dab, acb, bca, cba, dba, abd, bcd, cad, dbc, adb, bdc, cda, dcb, acd, bad, cbd, dac, adc, bda, cdb, dca — celkem přesně 24 trojic, jak vzorec předpověděl.

## Úloha

K sestavení vlajky, která má být složena ze tří různobarevných vodorovných pruhů, jsou k dispozici látky v barvě bílé, červené, modré, zelené a žluté (celkem 5 barev).

**a) Určete počet vlajek, které lze sestavit.**

Vybíráme uspořádanou trojici barev z pěti — záleží na pořadí (pruhy jsou na různých pozicích), barvy se neopakují.

$$V(3,5) = 5\cdot4\cdot3 = 60$$

**b) Kolik z nich má modrý pruh?**

Použijeme doplněk: od celkového počtu odečteme vlajky, které modrou barvu vůbec neobsahují (vybírané jen ze zbylých 4 barev).

$$60 - V(3,4) = 60 - 4\cdot3\cdot2 = 60 - 24 = 36$$

**c) Kolik jich má modrý pruh uprostřed?**

Prostřední pozici má pevně modrá barva (1 možnost), zbylé dvě pozice se vyberou uspořádaně ze zbylých 4 barev.

$$1 \cdot V(2,4) = 4\cdot3 = 12$$

**d) Kolik jich nemá uprostřed červený pruh?**

Počet vlajek s červeným pruhem uprostřed je stejný jako počet vlajek s modrým pruhem uprostřed (barvy jsou zaměnitelné) $= 12$. Kombinatorickým pravidlem součtu/doplňku:

$$60 - 12 = 48$$

## Permutace

**Permutace** z $n$ prvků je speciální případ variace bez opakování, kde $k=n$ — je to uspořádaná $n$-tice sestavená ze všech $n$ prvků, každý použitý právě jednou. Počet permutací:

$$P(n) = n!$$

### Úloha

Vypočítejte, kolika různými způsoby můžeme rozesadit šest lidí na šest židlí.

**Řešení:** Jde o permutaci šesti prvků.

$$P(6) = 6! = 720$$

## Zdroje

CALDA, Emil, DUPAČ, Václav. _Matematika pro gymnázia. Kombinatorika, pravděpodobnost, statistika._ Praha: Prometheus, 2006.
