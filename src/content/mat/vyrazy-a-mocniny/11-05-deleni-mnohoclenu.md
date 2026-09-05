---
title: "05 Dělení mnohočlenů"
order: 11
source: "mat/05 Dělení mnohočlenů.pdf"
hasExercises: true
---

> Pozn. k obsahu: Zdrojový dokument byl učitelský lekční plán s poznámkami k výuce — mocniny (exponenty) se při převodu oddělily od základu a postup dělení "pod sebou" ztratil odřádkování, takže čísla splynula do nečitelných řádků. Metoda i mezivýsledky byly ale čitelné a všechny čtyři podrobné příklady jsem nezávisle přepočítal a ověřil zpětným násobením (dělenec = dělitel × podíl + zbytek) — všechny souhlasí. Jeden neúplný pátý příklad (dochovala se jen závěrečná poznámka "výraz 13x+30 už nejde dál dělit" bez zadání) nejde rekonstruovat a byl vynechán.

Mnohočleny lze dělit dvěma způsoby, podle toho, čím dělíme.

## 1. Dělení mnohočlenu jednočlenem

Jednoduché — dělíme každý člen zvlášť (dělit znamená dát mnohočleny do zlomku a ten rozdělit na jednotlivé členy). Výsledkem je často opět mnohočlen.

**Příklad:** $(6x^3-9x^2+3x):(3x) = 2x^2-3x+1$

## 2. Dělení mnohočlenu mnohočlenem

To už je složitější — zlomek můžeme takto rozdělit jen podle sčítání/odčítání v **čitateli**, ne podle jmenovatele. Inspirujeme se tím, jak se dělí víceciferná čísla "pod sebou" — dělíme postupně, vždy se zajímáme o **nejvyšší** zbývající řád, zpětně násobíme a odečítáme:

$$2275 : 7 = 325$$

$$22:7=3\ (\text{zbytek }1),\quad 17:7=2\ (\text{zbytek }3),\quad 35:7=5\ (\text{zbytek }0)$$

U mnohočlenů postupujeme úplně stejně — jen místo "nejvyšší cifry" hledáme člen s **nejvyšší mocninou**.

## Ukázkový postup

Vydělte $(x^5-3x^2-4x+6):(x^2-2)$.

1. Vydělíme členy s nejvyššími mocninami: $x^5:x^2=x^3$.
2. Získaným členem vynásobíme celý dělitel (zpětné násobení): $x^3\cdot(x^2-2)=x^5-2x^3$.
3. Od původního mnohočlenu odečteme výsledek: $(x^5-3x^2-4x+6)-(x^5-2x^3)=2x^3-3x^2-4x+6$.
4. S výsledkem opakujeme celý postup, dokud nezbyde mnohočlen nižšího stupně, než má dělitel (nebo nula).

Zkrácený postup (jen výsledky jednotlivých kroků):

$$x^5-3x^2-4x+6 \ :\ x^2-2 = x^3+2x-3$$

$$-(x^5-2x^3) \implies 2x^3-3x^2-4x+6$$

$$-(2x^3-4x) \implies -3x^2+6$$

$$-(-3x^2+6) \implies 0$$

Po posledním odečtení vyšel nulový mnohočlen — dělili jsme **beze zbytku**.

**Ověření správnosti** — zpětné vynásobení výsledku dělitelem musí dát zpět původní dělenec:

$$(x^3+2x-3)(x^2-2) = x^5-2x^3+2x^3-4x-3x^2+6 = x^5-3x^2-4x+6 \checkmark$$

**Nejčastější problém:** dělení členů s nejvyššími mocninami (mocnina podílu se s každým krokem musí snížit o jedna) a odčítání mnohočlenů po zpětném násobení — dejte si pozor na znaménka.

## Příklady

**1.** Vydělte $(2x^3+5x^2-5x+1):(2x-1)$.

Výsledek: ||x²+3x-1 (beze zbytku). Ověření: (2x-1)(x²+3x-1) = 2x³+6x²-2x-x²-3x+1 = 2x³+5x²-5x+1 ✓||

**2.** Vydělte $(6x^6-8x^5+14x^4-21x^3+3x^2+8x-14):(3x^3-x^2+2)$.

Výsledek: ||2x³-2x²+4x-7 (beze zbytku). Ověření zpětným násobením souhlasí se zadaným dělencem||

**3.** Vydělte $(x^6-2x^4+x^3-2x+5):(x^3+x-2)$. *(Pozor: mnohočleny jsou v zadání úmyslně neseřazené podle mocnin — nejdřív je seřaďte sestupně, teprve pak dělte.)*

Výsledek: ||po seřazení: (x⁶-2x⁴+x³-2x+5):(x³+x-2) = x³-3x+3 se zbytkem 3x²-11x+11 (zbytek má nižší stupeň než dělitel, dál už nejde dělit); úplný zápis: podíl + zbytek/dělitel = x³-3x+3 + (3x²-11x+11)/(x³+x-2)||

## Zdroje

Zdrojový dokument: *mat/05 Dělení mnohočlenů.pdf*
