---
title: "Směrový a normálový vektor"
order: 6
source: "matematika/TY01_0126_Smerovy_a_normalovy_vektor.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace obsahovala u úvodního snímku funkční text, další snímky ale byly jen nadpisy a odrážky bez textu (animované, postupně se odkrývající body) — chybějící část je doplněna odpovídající standardnímu rozsahu tématu.

## Přímka

Přímka je jednoznačně dána:

- dvěma body, nebo
- jedním bodem a **směrovým** nebo **normálovým** vektorem.

**Směrový vektor** přímky je libovolný nenulový vektor, který na přímce leží nebo je s ní rovnoběžný. **Normálový vektor** přímky je libovolný nenulový vektor, který je na přímku kolmý. Přímka má nekonečně mnoho směrových i normálových vektorů — všechny jsou navzájem násobky (rovnoběžné).

```graph
{ "parametric": "-1 + t*6, 1 + t*3", "tDomain": [-0.3, 1.3], "points": [{"x":2,"y":2.5,"label":"s=(2;1)"}], "title": "Přímka se směrovým vektorem s=(2;1)" }
```

## Vztah směrového a normálového vektoru

Je-li $\vec s=(s_1;s_2)$ směrový vektor přímky, pak normálový vektor téže přímky získáme prohozením souřadnic a změnou znaménka jedné z nich:

$$\vec n = (s_2;\ -s_1) \quad\text{nebo ekvivalentně}\quad \vec n=(-s_2;\ s_1)$$

(je to jen jiný zápis kolmosti — platí totiž $\vec s\cdot\vec n = s_1s_2 + s_2(-s_1) = 0$, viz [Úhel dvou vektorů](/mat/analyticka-geometrie/05-uhel-dvou-vektoru/)).

**Příklad:** Přímka je určena bodem $A=[1;2]$ a směrovým vektorem $\vec s=(3;4)$. Určete její normálový vektor.

$$\vec n = (4;-3)$$

## Směrový vektor ze dvou bodů

Prochází-li přímka body $A$, $B$, je jejím směrovým vektorem $\vec s=\overrightarrow{AB}=B-A$ (viz [Operace s vektory](/mat/analyticka-geometrie/03-operace-s-vektory/)).

**Příklad:** Najděte směrový a normálový vektor přímky $AB$, kde $A=[2;-1]$, $B=[5;3]$.

$$\vec s = B-A = (3;4), \qquad \vec n = (4;-3)$$

## Příklady

**1.** Určete normálový vektor přímky se směrovým vektorem $\vec s=(-2;5)$.

Výsledek: ||n = (5;2) [nebo ekvivalentně (-5;-2)]||

**2.** Přímka prochází body $A=[0;3]$, $B=[4;0]$. Určete její směrový a normálový vektor.

Výsledek: ||s = B-A = (4;-3); n = (-3;-4) [nebo (3;4)]||

**3.** Ověřte, že vektory $\vec s=(3;-2)$ a $\vec n=(4;6)$ mohou být směrovým a normálovým vektorem téže přímky.

Výsledek: ||s·n = 3·4+(-2)·6 = 12-12 = 0 → vektory jsou na sebe kolmé, mohou tedy patřit téže přímce jako směrový a normálový vektor||

## Zdroje

KOČANDRLE, Milan, BOČEK, Leo. *Matematika pro gymnázia. Analytická geometrie.* Praha: Prometheus, 2005.

HUDCOVÁ, Milada, KUBIČÍKOVÁ, Libuše. *Sbírka úloh z matematiky pro střední odborné školy, střední odborná učiliště a nástavbové studium.* Praha: Prometheus, 2006.
