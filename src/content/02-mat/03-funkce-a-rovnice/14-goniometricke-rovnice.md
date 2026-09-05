---
title: "Goniometrické rovnice"
order: 14
source: "matematika/TY01_0214_-_Goniometricke_rovnice.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace používala animované odrážky a jednotkovou kružnici vloženou jako obrázek, které se při prvním převodu ztratily. Konkrétní hodnoty pravé strany u prvních dvou ukázkových příkladů v podkladu chyběly (zůstal jen výsledný pomocný úhel) — dopočítány zpětně z uvedeného úhlu a ověřeny, že přesně sedí na uvedený výsledek. Text, vzorce a grafy jsou zde doplněné/rekonstruované.

## Osnova

a) pojem goniometrické rovnice, b) ukázkové příklady, c) příklady na procvičení včetně řešení.

## Goniometrické rovnice

**Rovnice** je matematický zápis se dvěma stranami oddělenými znaménkem rovná se (např. $2x+3=19$), jehož řešením je vyjádřit, čemu se rovná neznámá (např. $x=8$).

**Goniometrická rovnice** je rovnice, ve které se vyskytují goniometrické funkce (např. $\cos x = 0{,}5$). Výsledkem je vyjádření velikosti úhlu (nebo úhlů), pro které má rovnice smysl — typicky dvou úhlů v rozmezí $\langle0°;360°)$, plus **perioda**, protože goniometrické funkce se opakují.

**Obecný postup:**

1. Určíme **pomocný úhel** $x'$ tak, že pravou stranu rovnice hledáme v tabulce základních hodnot nebo pomocí kalkulačky (bereme kladnou hodnotu, tedy bez znaménka).
2. Zaneseme pomocný úhel do jednotkové kružnice (kružnice o poloměru 1).
3. Podle znaménka na pravé straně rovnice určíme, ve kterých kvadrantech leží řešení — podle tabulky znamének:

| kvadrant | I. (0°;90°) | II. (90°;180°) | III. (180°;270°) | IV. (270°;360°) |
|---|---|---|---|---|
| sin | + | + | − | − |
| cos | + | − | − | + |
| tg, cotg | + | − | + | − |

4. Podle kvadrantů vyznačíme, které úhly jsou řešením, a zapíšeme je pomocí pomocného úhlu $x'$: v I. kvadrantu $x'$, ve II. kvadrantu $180°-x'$, ve III. kvadrantu $180°+x'$, ve IV. kvadrantu $360°-x'$.
5. Připíšeme periodu: $+k\cdot360°$ pro sinus a cosinus, $+k\cdot180°$ pro tangens a cotangens (mají poloviční periodu).

## Ukázkový příklad 1

Řešte rovnici $\cos x = -\dfrac12$.

Pomocný úhel: $x' = 60°$ (protože $\cos 60° = \frac12$).

Na pravé straně je **mínus**, takže hledáme kvadranty, kde je cosinus záporný: **II. a III.** kvadrant.

$$x_1 = 180° - x' = 120°, \qquad x_2 = 180° + x' = 240°$$

```graph
{ "fn": "cos(x)", "domain": [0, 6.29], "yDomain": [-1.3, 1.3], "title": "cos x = −1/2", "points": [{"x": 2.094, "y": -0.5, "label": "x₁=120°"}, {"x": 4.189, "y": -0.5, "label": "x₂=240°"}] }
```

**Výsledek:** $x_1 = 120° + k\cdot360°$, $x_2 = 240° + k\cdot360°$, $k\in\mathbb{Z}$

## Ukázkový příklad 2

Řešte rovnici $\sin x = \dfrac{\sqrt2}{2}$.

Pomocný úhel: $x' = 45°$ (protože $\sin 45° = \frac{\sqrt2}{2} \approx 0{,}707$).

Na pravé straně je **plus**, hledáme kvadranty, kde je sinus kladný: **I. a II.** kvadrant.

$$x_1 = x' = 45°, \qquad x_2 = 180° - x' = 135°$$

```graph
{ "fn": "sin(x)", "domain": [0, 6.29], "yDomain": [-1.3, 1.3], "title": "sin x = √2/2", "points": [{"x": 0.785, "y": 0.707, "label": "x₁=45°"}, {"x": 2.356, "y": 0.707, "label": "x₂=135°"}] }
```

**Výsledek:** $x_1 = 45° + k\cdot360°$, $x_2 = 135° + k\cdot360°$, $k\in\mathbb{Z}$

## Ukázkový příklad 3

Řešte rovnici $\cos x = 0{,}6$.

Pomocný úhel (z kalkulačky): $x' \approx 53°7'49''$.

Znaménko je **plus**, hledáme kvadranty **I. a IV.**

$$x_1 = x' = 53°7'49'', \qquad x_2 = 360° - x' = 306°52'11''$$

**Výsledek:** $x_1 \approx 53°7'49'' + k\cdot360°$, $x_2 \approx 306°52'11'' + k\cdot360°$

## Ukázkový příklad 4

Řešte rovnici $\mathrm{tg}\,x = -0{,}3$.

Pomocný úhel: $x' \approx 16°41'57''$.

**Pozn.:** u tangens a cotangens stačí do jednotkové kružnice kreslit jen půlkružnici, protože mají periodu jen $180°$.

Znaménko je **mínus**, hledáme kvadranty **II. a IV.** — ale protože perioda je jen 180°, obě řešení se liší přesně o 180° a stačí zapsat jedno s periodou 180°:

$$x = 180° - x' = 163°18'3''$$

**Výsledek:** $x = 163°18'3'' + k\cdot180°$

## Příklady na procvičení

**Příklad 1:** Řešte rovnici $\cos x = -\dfrac{\sqrt3}{2}$.

Výsledek:

- pomocný úhel: ||x' = 30° (cos 30° = √3/2)||
- znaménko mínus → kvadranty: ||II. a III.||
- výsledek: ||x₁ = 180° − 30° = 150° + k·360°,  x₂ = 180° + 30° = 210° + k·360°||

---

**Příklad 2:** Řešte rovnici $\mathrm{cotg}\,x = -\sqrt3$.

Výsledek:

- pomocný úhel: ||x' = 30° (cotg 30° = √3)||
- znaménko mínus, perioda 180° → ||x = 180° − 30° = 150° + k·180°||

---

**Příklad 3:** Řešte rovnici $\sin x = -0{,}74$.

Výsledek:

- pomocný úhel: ||x' ≈ 47°43'53''||
- znaménko mínus → kvadranty III. a IV.
- výsledek: ||x₁ = 180° + 47°43'53'' = 227°43'53'' + k·360°,  x₂ = 360° − 47°43'53'' = 312°16'7'' + k·360°||

---

**Příklad 4:** Řešte rovnici $\mathrm{tg}\,x = -3{,}25$.

Výsledek:

- pomocný úhel: ||x' ≈ 72°53'50''||
- znaménko mínus, perioda 180° → ||x = 180° − 72°53'50'' = 107°6'10'' + k·180°||

---

**Příklad 5:** Řešte rovnici $2(\sin x + 0{,}5) = 2$.

Výsledek:

- úprava: ||2sinx + 1 = 2, 2sinx = 1, sin x = 1/2||
- pomocný úhel: ||x' = 30°||
- znaménko plus → kvadranty I. a II.
- výsledek: ||x₁ = 30° + k·360°,  x₂ = 180° − 30° = 150° + k·360°||

## Shrnutí

- Goniometrická rovnice obsahuje goniometrické funkce; řešením je úhel (nebo úhly) splňující rovnici, plus perioda.
- Postup: najít pomocný úhel $x'$ (z tabulky/kalkulačky), zjistit podle znaménka pravé strany správné kvadranty, zapsat řešení pomocí $x'$ a doplnit periodu.
- Perioda je $360°$ pro sinus a cosinus, $180°$ pro tangens a cotangens.

## Zdroje

HUDCOVÁ, Milada a Libuše KUBIČÍKOVÁ. _Sbírka úloh z matematiky pro SOŠ, SOU a nástavbové studium_. 2. vydání. Havlíčkův Brod: Prometheus, spol. s r.o., 2005. Učebnice pro střední školy. ISBN 80-7196-318-6
