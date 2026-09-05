---
title: "Kvadratická funkce"
order: 1
source: "matematika/TY01_0201-Kvadraticka_funkce.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace používala animované odrážky a vzorce vložené jako obrázky, které se při prvním převodu ztratily. Text, vzorce a grafy jsou zde doplněné/rekonstruované.

## Osnova

a) pojem kvadratická funkce, b) graf a vlastnosti, c) vrchol grafu kvadratické funkce a jeho určení, d) působení koeficientů kvadratické funkce na graf, e) ukázkové příklady, f) příklady na procvičení včetně řešení.

## Kvadratická funkce

Předpis kvadratické funkce: $f: y = ax^2 + bx + c$, kde koeficienty $a, b, c \in \mathbb{R}$ a $a \neq 0$.

- $ax^2$ — kvadratický člen
- $bx$ — lineární člen
- $c$ — absolutní člen

**Pozn.:** pokud by bylo $a = 0$, nejde o kvadratickou funkci, ale o lineární.

Definiční obor $D(f) = \mathbb{R}$ (pokud není v úloze zadán jinak). Obor hodnot $H(f)$ závisí na konkrétní funkci (na koeficientech a definičním oboru).

## Graf a vlastnosti

Grafem kvadratické funkce je **parabola**. Tvar paraboly závisí na koeficientu $a$:

```graph
{ "fn": "x^2", "domain": [-3, 3], "title": "a > 0 — parabola otevřená nahoru (y = x²)" }
```

```graph
{ "fn": "-(x^2)", "domain": [-3, 3], "title": "a < 0 — parabola otevřená dolů (y = −x²)" }
```

- **Minimum / maximum** — hodnota, ve které má funkce nejnižší (resp. nejvyšší) bod; určuje se na ose x (např. „minimum v x = 2").
- **Omezenost zdola / shora** — hodnota, ve které je funkce zdola (resp. shora) omezená; určuje se na ose y (např. „omezená zdola, y = −3").
- **Monotónnost** — graf kvadratické funkce má vždy dva úseky monotónnosti: na jednom roste, na druhém klesá. Bodem, kde se monotónnost mění, je vrchol grafu.

## Vrchol grafu a jeho určení

Vrchol grafu kvadratické funkce označujeme $V$ — je to bod, ve kterém se monotónnost láme na opačnou. Souřadnice vrcholu lze určit dvěma způsoby:

**a) pomocí vzorce:**

$$V = \left[-\frac{b}{2a};\ -\frac{D}{4a}\right], \quad D = b^2 - 4ac$$

**b) úpravou na čtverec:** pokud $f: y = a(x + m)^2 + n$, pak $V = [-m; n]$.

## Působení koeficientů na funkci

- **koeficient $a$** (ve funkci $y = ax^2$): rozšiřuje či zužuje graf — čím větší $|a|$, tím je parabola „štíhlejší".
- **koeficient $b$** (ve funkci $y = ax^2 + bx$): graf vždy prochází počátkem soustavy souřadnic $[0; 0]$, protože pro $x=0$ je $y=0$.
- **koeficient $c$** (ve funkci $y = ax^2 + c$): posouvá celý graf $y=ax^2$ svisle — vrchol grafu se pohybuje po ose y.

## Ukázkový příklad

Sestrojte graf a určete vlastnosti funkce $f: y = -x^2 + 3x$.

Určíme koeficienty: $a = -1,\ b = 3,\ c = 0$.

Vyřešíme souřadnice vrcholu (dosazením do vzorce): $V = \left[\dfrac{3}{2};\ \dfrac{9}{4}\right]$.

Sestavíme tabulku (minimálně 3 body, ideálně kolem vrcholu):

| x | −1 | 0 | 3/2 | 3 | 4 |
|---|---|---|---|---|---|
| y | −4 | 0 | 9/4 | 0 | −4 |

```graph
{ "fn": "-(x^2) + 3*x", "domain": [-1, 4], "title": "y = −x² + 3x", "points": [{"x": 1.5, "y": 2.25, "label": "V"}] }
```

**Vlastnosti:** maximum v $x = \frac{3}{2}$ (hodnota $y=\frac94$), omezenost shora $y = \frac94$, monotónnost: funkce roste na $\left(-\infty; \frac32\right)$ a klesá na $\left(\frac32; +\infty\right)$.

## Příklady na procvičení

**Příklad 1:** Sestrojte graf a určete vlastnosti funkce $f: y = 2x^2 + 3$.

| x | −2 | −1 | 0 | 1 | 2 |
|---|---|---|---|---|---|
| y | 11 | 5 | 3 | 5 | 11 |

```graph
{ "fn": "2*x^2 + 3", "domain": [-2, 2], "title": "y = 2x² + 3", "points": [{"x": 0, "y": 3, "label": "V"}], "spoiler": true, "float": "right" }
```

Výsledek:

- minimum: ||v x = 0, tedy y = 3||
- omezenost: ||zdola, y = 3||
- monotónnost: ||klesá na (−∞;0), roste na (0;+∞)||

---

**Příklad 2:** Sestrojte graf a určete vlastnosti funkce $f: y = x^2 - 2x - 6$.

| x | −1 | 0 | 1 | 2 | 3 |
|---|---|---|---|---|---|
| y | −3 | −6 | −7 | −6 | −3 |

```graph
{ "fn": "x^2 - 2*x - 6", "domain": [-1, 3], "title": "y = x² − 2x − 6", "points": [{"x": 1, "y": -7, "label": "V"}], "spoiler": true, "float": "right" }
```

Výsledek:

- minimum: ||v x = 1, tedy y = −7||
- omezenost: ||zdola, y = −7||
- monotónnost: ||klesá na (−∞;1), roste na (1;+∞)||

## Shrnutí

- Předpis kvadratické funkce: $f: y = ax^2 + bx + c$
- Graf kvadratické funkce je parabola, jejíž tvar závisí na koeficientu $a$
- Vrchol grafu kvadratické funkce lze určit vzorcem nebo úpravou na čtverec
- Vlastnosti kvadratické funkce: maximum × minimum, omezenost shora × zdola, monotónnost rostoucí × klesající

## Zdroje

HUDCOVÁ, Milada a Libuše KUBIČÍKOVÁ. _Sbírka úloh z matematiky pro SOŠ, SOU a nástavbové studium_. 2. vydání. Havlíčkův Brod: Prometheus, spol. s r.o., 2005. Učebnice pro střední školy. ISBN 80-7196-318-6
