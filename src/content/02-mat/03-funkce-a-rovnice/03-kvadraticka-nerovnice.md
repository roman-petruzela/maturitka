---
title: "Kvadratická nerovnice"
order: 3
source: "matematika/TY01_0203_-_Kvadraticka_nerovnice.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace používala animované odrážky a vzorce vložené jako obrázky, které se při prvním převodu ztratily. Text, vzorce a grafy jsou zde doplněné/rekonstruované; veškeré kořeny a výsledky byly nezávisle přepočítány.

## Osnova

a) pojem kvadratická nerovnice, b) způsoby řešení, c) ukázkové příklady, d) příklady na procvičení včetně řešení.

## Kvadratická nerovnice

Kvadratickou nerovnicí nazýváme nerovnici v obecném tvaru $ax^2 + bx + c > 0$, kde koeficienty $a, b, c \in \mathbb{R}$ a $a \neq 0$.

**Pozn.:** znakem nerovnosti může být $>,\ <,\ \geq,\ \leq$.

**Pozn.:** řešením kvadratické nerovnice je zpravidla interval (výjimečně sjednocení intervalů, celé $\mathbb{R}$, nebo prázdná množina).

**Pozn.:** při násobení nebo dělení záporným číslem je nutné obrátit znaménko nerovnosti.

## Způsob 1 — početní (součinový tvar)

1. Nerovnici převedeme na rovnici a vyřešíme ji (najdeme kořeny).
2. Trojčlen rozložíme na součin $a(x-x_1)(x-x_2)$.
3. Vyřešíme nerovnici v součinovém tvaru — použijeme pravidlo o znaménku součinu: $a \cdot b > 0$ platí právě tehdy, když ($a>0$ a $b>0$) nebo ($a<0$ a $b<0$); podobně pro $a \cdot b < 0$ atd.
4. Výsledky obou případů sjednotíme — to je konečné řešení.

### Ukázkový příklad

Řešte nerovnici $x(5x+1) > (x+1)^2 + 2 - 5x$.

Roznásobíme a převedeme vše na levou stranu: $5x^2 + x > x^2 - 3x + 3$, tedy $4x^2 + 4x - 3 > 0$.

Vyřešíme odpovídající rovnici $4x^2 + 4x - 3 = 0$: $D = 16 + 48 = 64$, $x_{1,2} = \dfrac{-4 \pm 8}{8}$, tedy $x_1 = -\dfrac32,\ x_2 = \dfrac12$.

Rozklad na součin: $4\left(x+\dfrac32\right)\left(x-\dfrac12\right) > 0$, po vydělení 4: $\left(x+\dfrac32\right)\left(x-\dfrac12\right) > 0$.

Součin je kladný, když jsou oba činitelé kladní ($x>-\frac32$ a zároveň $x>\frac12$, tedy $x>\frac12$), nebo oba záporní ($x<-\frac32$ a zároveň $x<\frac12$, tedy $x<-\frac32$).

**Výsledek:** $x \in \left(-\infty; -\dfrac32\right) \cup \left(\dfrac12; +\infty\right)$

## Příklady na procvičení (početně)

**Příklad 1:** Řešte nerovnici $2 - 5x - 3x^2 < 0$.

Výsledek:

- rovnice: ||−3x² − 5x + 2 = 0, D = 49, x₁ = 1/3, x₂ = −2||
- součinový tvar po vydělení −3 (obrátit znaménko): ||(x − 1/3)(x + 2) > 0||
- řešení: ||x ∈ (−∞; −2) ∪ (1/3; +∞)||

---

**Příklad 2:** Řešte nerovnici $21 - 29x \leq (6-4x)(3-2x)$.

Výsledek:

- po roznásobení a úpravě: ||8x² + 5x − 3 ≥ 0||
- kořeny: ||D = 121, x₁ = 3/8, x₂ = −1||
- řešení: ||x ∈ (−∞; −1] ∪ [3/8; +∞)||

## Způsob 2 — graficky

1. Nerovnici převedeme na rovnici a vyřešíme ji.
2. Kořeny rovnice zaneseme na osu x.
3. Zjistíme tvar grafu (podle znaménka koeficientu $a$).
4. Podle znaménka nerovnosti zjistíme, která část grafu (nad osou x, nebo pod ní) je řešením.
5. Zapíšeme výsledek jako interval na ose x.

### Ukázkový příklad

Řešte nerovnici $-3x^2 + 7x + 6 < 0$.

Vynásobíme −1 (musíme obrátit znaménko): $3x^2 - 7x - 6 > 0$.

Kořeny: $D = 49 + 72 = 121$, $x_1 = -\dfrac23,\ x_2 = 3$. Koeficient $a=3>0$, graf je parabola otevřená nahoru.

```graph
{ "fn": "3*x^2 - 7*x - 6", "domain": [-2, 5], "yDomain": [-15, 15], "title": "y = 3x² − 7x − 6", "points": [{"x": -0.667, "y": 0, "label": "x₁"}, {"x": 3, "y": 0, "label": "x₂"}] }
```

Hledáme část grafu **nad** osou x (protože řešíme „$>0$"): to je vlevo od $x_1$ a vpravo od $x_2$.

**Výsledek:** $x \in \left(-\infty; -\dfrac23\right) \cup (3; +\infty)$

## Příklady na procvičení (graficky)

**Příklad 1:** Řešte nerovnici $8x^2 - 10x - 3 \leq 0$.

```graph
{ "fn": "8*x^2 - 10*x - 3", "domain": [-1.5, 3], "title": "y = 8x² − 10x − 3", "points": [{"x": -0.25, "y": 0, "label": "x₁"}, {"x": 1.5, "y": 0, "label": "x₂"}], "spoiler": true, "float": "right" }
```

Výsledek:

- kořeny: ||D = 196, x₁ = −1/4, x₂ = 3/2||
- a = 8 > 0 (parabola nahoru), hledáme část ≤ 0, tedy mezi kořeny (včetně)
- řešení: ||x ∈ [−1/4; 3/2]||

---

**Příklad 2:** Řešte nerovnici $(x+3)(1-x) \leq 2x^2 + 8x + 8 - 5x - 7$.

```graph
{ "fn": "-3*x^2 - 5*x + 2", "domain": [-4, 3], "title": "y = −3x² − 5x + 2", "points": [{"x": -2, "y": 0, "label": "x₁"}, {"x": 0.333, "y": 0, "label": "x₂"}], "spoiler": true, "float": "right" }
```

Výsledek:

- po úpravě: ||−3x² − 5x + 2 ≤ 0||
- kořeny: ||x₁ = 1/3, x₂ = −2||
- a = −3 < 0 (parabola dolů), hledáme část ≤ 0, tedy mimo kořeny (včetně)
- řešení: ||x ∈ (−∞; −2] ∪ [1/3; +∞)||

## Zvláštní případy — nerovnice bez reálných kořenů

Pokud vyjde diskriminant $D<0$, kvadratická **rovnice** nemá v $\mathbb{R}$ žádné řešení — graf (parabola) se tedy vůbec nedotýká osy x a leží celý buď nad ní, nebo pod ní. Kvadratickou **nerovnici** to ale nevylučuje ze řešení: pokud víme, kam je graf vychýlený (podle znaménka $a$) a jaký směr nerovnosti řešíme, umíme rozhodnout, zda je řešením celé $\mathbb{R}$, nebo prázdná množina $\emptyset$.

**Příklad 1:** Řešte nerovnici $-4(3x+x^2) < 7x + 24$.

Výsledek:

- po úpravě: ||−4x² − 19x − 24 < 0||
- diskriminant: ||D = 361 − 384 = −13 < 0 (rovnice nemá řešení v R)||
- a = −4 < 0, graf je celý pod osou x, tedy vždy záporný — přesně to hledáme
- řešení: ||x ∈ R (celé R)||

**Příklad 2:** Řešte nerovnici $3x^2 - 7x + 6 < 0$.

Výsledek:

- diskriminant: ||D = 49 − 72 = −23 < 0 (rovnice nemá řešení v R)||
- a = 3 > 0, graf je celý nad osou x, tedy nikdy záporný — to je opak toho, co hledáme
- řešení: ||∅ (prázdná množina, nerovnice nemá řešení)||

## Shrnutí

- Obecný tvar kvadratické nerovnice: $ax^2 + bx + c > 0$ (nebo $<,\ \geq,\ \leq$)
- Způsoby řešení: a) početně (součinový tvar), b) graficky
- Zvláštní případy (D < 0): řešením je buď celé $\mathbb{R}$, nebo prázdná množina — podle znaménka $a$ a směru nerovnosti

## Zdroje

HUDCOVÁ, Milada a Libuše KUBIČÍKOVÁ. _Sbírka úloh z matematiky pro SOŠ, SOU a nástavbové studium_. 2. vydání. Havlíčkův Brod: Prometheus, spol. s r.o., 2005. Učebnice pro střední školy. ISBN 80-7196-318-6

HEJKRLÍK, Pavel. _Sbírka řešených příkladů — rovnice a nerovnice_. 1. vydání. Opava: SSŠP, spol. s r.o., 2006. ISBN 978-80-903861-0-5
