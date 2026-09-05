---
title: "Operace s vektory"
order: 3
source: "matematika/TY01_0123_Operace_s_vektory.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace obsahovala jen nadpisy a odrážky bez textu (animované, postupně se odkrývající body) a odkaz na chybějící obrázek — nešlo z nich rekonstruovat konkrétní zadání. Teorie a příklady jsou proto doplněny odpovídající standardnímu rozsahu tématu.

## První setkání s vektory — fyzika

S vektory se poprvé setkáváme ve fyzice — u veličin, u kterých kromě velikosti musíme znát i **směr** (a často i **umístění** — působiště): síla, rychlost, zrychlení, moment síly, magnetická indukce a mnoho dalších. Na rozdíl od nich jsou např. teplota nebo hmotnost tzv. skalární veličiny — stačí u nich jediné číslo.

## Vektor v matematice

**Vektor** je množina všech rovnoběžných, stejně velkých orientovaných úseček stejného směru — tedy libovolná konkrétní orientovaná úsečka $\overrightarrow{AB}$ je jen jedním z "reprezentantů" daného vektoru; posunutím do jiného místa (při zachování délky a směru) dostaneme stejný vektor.

## Zápis a souřadnice vektoru

Vektor daný orientovanou úsečkou od bodu $A$ (počátek) k bodu $B$ (konec) značíme $\vec{u}=\overrightarrow{AB}$. Jeho souřadnice spočítáme jako rozdíl souřadnic koncového a počátečního bodu:

$$\vec{u} = \overrightarrow{AB} = B - A = (x_B - x_A;\ y_B - y_A)$$

```graph
{ "parametric": "1 + t*4, 1 + t*2", "tDomain": [0, 1], "points": [{"x":1,"y":1,"label":"A"},{"x":5,"y":3,"label":"B"}], "title": "Vektor u = AB, A=[1;1], B=[5;3] → u = (4;2)" }
```

**Příklad:** Pro $A=[1;1]$, $B=[5;3]$ je $\vec{u}=\overrightarrow{AB}=(5-1;\ 3-1)=(4;2)$.

Souřadnice vektoru jsou nezávislé na tom, kterou konkrétní úsečku (reprezentanta) použijeme — vektor $\overrightarrow{CD}$ pro $C=[0;0]$, $D=[4;2]$ má stejné souřadnice $(4;2)$, i když leží jinde v rovině.

## Velikost vektoru

Velikost (délka) vektoru $\vec u=(u_1;u_2)$ se počítá stejně jako vzdálenost dvou bodů (viz [Úsečka, střed a délka úsečky](/mat/analyticka-geometrie/02-usecka-stred-a-delka-usecky/)):

$$|\vec u| = \sqrt{u_1^2+u_2^2}$$

**Příklad:** $|\vec u| = |(4;2)| = \sqrt{16+4} = \sqrt{20} = 2\sqrt5 \approx 4{,}47$

## Násobení vektoru číslem

Vektor $\vec u=(u_1;u_2)$ vynásobený reálným číslem $k$ je vektor se souřadnicemi vynásobenými stejným číslem:

$$k\cdot\vec u = (k\cdot u_1;\ k\cdot u_2)$$

Geometricky $k$ mění **délku** vektoru $k$-krát; je-li $k<0$, vektor navíc změní směr na opačný (otočí se o $180°$).

## Příklady

**1.** Určete souřadnice a velikost vektoru $\vec v=\overrightarrow{PQ}$, kde $P=[-2;3]$, $Q=[1;-1]$.

Výsledek: ||v = Q-P = (1-(-2); -1-3) = (3;-4); \|v\| = √(9+16) = √25 = 5||

**2.** Je dán vektor $\vec u=(6;-8)$. Vypočítejte souřadnice vektoru $2\vec u$ a $-\tfrac12\vec u$.

Výsledek: ||2u = (12;-16); -½u = (-3;4)||

**3.** Bod $A=[3;-1]$ a vektor $\vec u=(2;5)$. Určete souřadnice bodu $B$, pro který platí $\overrightarrow{AB}=\vec u$.

Výsledek: ||B = A + u = (3+2; -1+5) = [5;4]||

## Zdroje

KOČANDRLE, Milan, BOČEK, Leo. *Matematika pro gymnázia. Analytická geometrie.* Praha: Prometheus, 2005.

HUDCOVÁ, Milada, KUBIČÍKOVÁ, Libuše. *Sbírka úloh z matematiky pro střední odborné školy, střední odborná učiliště a nástavbové studium.* Praha: Prometheus, 2006.
