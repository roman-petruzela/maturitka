---
title: "Bod a přímka v kartézské soustavě"
order: 1
source: "matematika/TY01_0121_Bod_a_primka_v_kartezske_soustave.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace obsahovala jen nadpisy a odrážky bez textu (animované, postupně se odkrývající body) a poškozené fragmenty popisků os ze vzniklých obrázků — nešlo z nich rekonstruovat konkrétní zadání. Teorie a příklady jsou proto doplněny odpovídající standardnímu rozsahu tématu, navazujícímu na [Kartézskou soustavu souřadnic](/mat/analyticka-geometrie/12-kartezska-soustava-souradnic/).

## Souřadnice bodu v rovině

Polohu bodu $A$ v rovině zapisujeme jako uspořádanou dvojici čísel $A=[x_A;y_A]$ — první číslo je jeho souřadnice na ose $x$, druhé na ose $y$. Pořadí je důležité: $[3;5]$ a $[5;3]$ jsou dva různé body.

```graph
{ "points": [{"x":2,"y":3,"label":"A"},{"x":-3,"y":1,"label":"B"},{"x":-1,"y":-4,"label":"C"}], "domain": [-5,5], "yDomain": [-5,5], "title": "Body A, B, C v souřadnicové soustavě" }
```

Výsledek: ||A=[2;3], B=[-3;1], C=[-1;-4]||

## Přímka určená dvěma body

Dvěma různými body $A$, $B$ prochází právě jedna přímka — značíme ji $AB$ nebo $\leftrightarrow\!\!AB$. Ke každé takové přímce patří i **směrový vektor** $\vec{u}=B-A$, který udává její směr (podrobně viz [Směrový a normálový vektor](/mat/analyticka-geometrie/06-smerovy-a-normalovy-vektor/)).

```graph
{ "parametric": "-3 + t*5, 1 + t*2", "tDomain": [-0.6, 1.6], "points": [{"x":-3,"y":1,"label":"B"},{"x":2,"y":3,"label":"A"}], "title": "Přímka AB, A=[2;3], B=[-3;1]" }
```

Tři a více bodů, které leží na jedné přímce, nazýváme **kolineární**. Zjistit, zda jsou body $A$, $B$, $C$ kolineární, můžeme porovnáním směrových vektorů $B-A$ a $C-A$ — pokud jsou rovnoběžné (jeden je násobkem druhého), body leží na jedné přímce.

## Úkoly

**1.** Určete souřadnice bodů, jejichž kolmý průmět na osu $x$ je $4$ a na osu $y$ je $-2$.

Výsledek: ||[4;-2]||

**2.** Zjistěte, zda jsou body $A=[1;1]$, $B=[3;5]$, $C=[5;9]$ kolineární.

Výsledek: ||B-A = (2;4); C-A = (4;8) = 2·(2;4) — vektory jsou rovnoběžné (násobek), body tedy leží na jedné přímce (kolineární)||

**3.** Zjistěte, zda jsou body $A=[0;0]$, $B=[2;3]$, $C=[4;5]$ kolineární.

Výsledek: ||B-A = (2;3); C-A = (4;5) — poměry souřadnic 2:3 a 4:5 nejsou stejné (2/3 ≠ 4/5), vektory nejsou rovnoběžné, body NEJSOU kolineární||

## Zdroje

KOČANDRLE, Milan, BOČEK, Leo. *Matematika pro gymnázia. Analytická geometrie.* Praha: Prometheus, 2005.
