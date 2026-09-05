---
title: "Parametrické vyjádření přímky"
order: 7
source: "matematika/TY01_0127_Parametricke_vyjadreni_primky.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace obsahovala u úvodního snímku funkční text, další snímky ale byly jen nadpisy a odrážky bez textu (animované, postupně se odkrývající body) — chybějící část je doplněna odpovídající standardnímu rozsahu tématu.

Přímka je jednoznačně určena dvěma body. Dvojic bodů, které danou přímku určují, je nekonečně mnoho — každá taková dvojice ale určuje směrový vektor, který je (až na násobek) stejný. Přímka má tedy nekonečně mnoho směrových vektorů, všechny navzájem rovnoběžné (viz [Směrový a normálový vektor](/mat/analyticka-geometrie/06-smerovy-a-normalovy-vektor/)).

## Parametrické vyjádření přímky

Přímku $p$ procházející bodem $A=[x_A;y_A]$ se směrovým vektorem $\vec s=(s_1;s_2)$ popisuje **parametrická rovnice**:

$$p:\ X = A + t\cdot\vec s,\qquad t\in\mathbb{R}$$

Po rozepsání do souřadnic (tzv. **parametrické rovnice přímky**):

$$x = x_A + t\cdot s_1, \qquad y = y_A + t\cdot s_2, \qquad t\in\mathbb{R}$$

Parametr $t$ postupně "prochází" všechna reálná čísla a pro každé $t$ dostaneme jeden bod přímky — $t=0$ dává přímo bod $A$, jiné hodnoty $t$ dávají ostatní body přímky posunuté ve směru $\vec s$.

```graph
{ "parametric": "1 + t*2, -1 + t*3", "tDomain": [-1, 1.5], "points": [{"x":1,"y":-1,"label":"A"}], "title": "x=1+2t, y=-1+3t (A=[1;-1], s=(2;3))" }
```

**Příklad:** Napište parametrické rovnice přímky procházející bodem $A=[1;-1]$ se směrovým vektorem $\vec s=(2;3)$.

$$x = 1+2t, \qquad y = -1+3t, \qquad t\in\mathbb{R}$$

**Příklad:** Leží bod $B=[5;5]$ na přímce z předchozího příkladu?

Dosadíme a hledáme, zda existuje společné $t$: z první rovnice $5=1+2t \implies t=2$. Ověříme ve druhé: $y=-1+3\cdot2=5$ ✓ — sedí, bod $B$ na přímce leží (pro $t=2$).

## Příklady

**1.** Napište parametrické rovnice přímky procházející body $A=[2;1]$, $B=[5;7]$.

Výsledek: ||s = B-A = (3;6); x=2+3t, y=1+6t, t∈ℝ (nebo rovnocenně se zkráceným směrovým vektorem s=(1;2): x=2+t, y=1+2t)||

**2.** Zjistěte, zda bod $C=[8;13]$ leží na přímce $x=2+3t$, $y=1+6t$.

Výsledek: ||z x: 8=2+3t → t=2; dosazením do y: y=1+6·2=13 ✓ → bod C na přímce leží||

**3.** Zjistěte, zda bod $D=[8;12]$ leží na přímce $x=2+3t$, $y=1+6t$.

Výsledek: ||z x: 8=2+3t → t=2; dosazením do y: y=1+6·2=13≠12 → bod D na přímce NEleží||

**4.** Určete souřadnice bodu na přímce $x=3-t$, $y=2+4t$ pro $t=1$ a pro $t=-2$.

Výsledek: ||pro t=1: [3-1; 2+4]=[2;6]; pro t=-2: [3+2; 2-8]=[5;-6]||

## Zdroje

KOČANDRLE, Milan, BOČEK, Leo. *Matematika pro gymnázia. Analytická geometrie.* Praha: Prometheus, 2005.

HUDCOVÁ, Milada, KUBIČÍKOVÁ, Libuše. *Sbírka úloh z matematiky pro střední odborné školy, střední odborná učiliště a nástavbové studium.* Praha: Prometheus, 2006
