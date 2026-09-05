---
title: "Úsečka, střed a délka úsečky"
order: 2
source: "matematika/TY01_0122_Usecka_stred_a_delka_usecky.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace obsahovala jen nadpisy a odrážky bez textu (animované, postupně se odkrývající body) — nešlo z nich rekonstruovat konkrétní zadání. Teorie a příklady jsou proto doplněny odpovídající standardnímu rozsahu tématu.

## Vzdálenost dvou bodů

Vzdálenost bodů $A=[x_A;y_A]$ a $B=[x_B;y_B]$ (délku úsečky $AB$) spočítáme z pravoúhlého trojúhelníku, jehož odvěsny mají délky $|x_B-x_A|$ a $|y_B-y_A|$ — podle Pythagorovy věty:

$$|AB| = \sqrt{(x_B-x_A)^2 + (y_B-y_A)^2}$$

```graph
{ "parametric": "1 + t*4, 2 + t*3", "tDomain": [0, 1], "points": [{"x":1,"y":2,"label":"A"},{"x":5,"y":5,"label":"B"}], "title": "Úsečka AB, A=[1;2], B=[5;5]" }
```

**Příklad:** Vypočítejte délku úsečky $AB$, kde $A=[1;2]$, $B=[5;5]$.

$$|AB| = \sqrt{(5-1)^2+(5-2)^2} = \sqrt{16+9} = \sqrt{25} = 5$$

## Střed úsečky

Střed úsečky $S$ má souřadnice rovné aritmetickému průměru souřadnic krajních bodů:

$$S = \left[\frac{x_A+x_B}{2};\ \frac{y_A+y_B}{2}\right]$$

**Příklad:** Najděte střed úsečky $AB$, kde $A=[1;2]$, $B=[5;5]$.

$$S = \left[\frac{1+5}{2};\ \frac{2+5}{2}\right] = \left[3;\ 3{,}5\right]$$

## Příklady

**1.** Vypočítejte délku úsečky $CD$, kde $C=[-2;3]$, $D=[4;-5]$.

Výsledek: ||\|CD\| = √((4-(-2))²+(-5-3)²) = √(36+64) = √100 = 10||

**2.** Najděte střed úsečky $CD$, kde $C=[-2;3]$, $D=[4;-5]$.

Výsledek: ||S = [(-2+4)/2; (3+(-5))/2] = [1; -1]||

**3.** Bod $M=[2;1]$ je středem úsečky $EF$. Znáte-li $E=[-1;4]$, určete souřadnice bodu $F$.

Výsledek: ||ze vzorce pro střed: x_M=(x_E+x_F)/2 → 2=(-1+x_F)/2 → x_F=5; y_M=(y_E+y_F)/2 → 1=(4+y_F)/2 → y_F=-2; F=[5;-2]||

**4.** Rozhodněte, zda je trojúhelník s vrcholy $A=[0;0]$, $B=[4;0]$, $C=[2;2\sqrt3]$ rovnostranný.

Výsledek: ||\|AB\|=√(16+0)=4; \|AC\|=√(4+12)=√16=4; \|BC\|=√((2-4)²+(2√3)²)=√(4+12)=√16=4; všechny tři strany mají délku 4, trojúhelník JE rovnostranný||

## Zdroje

KOČANDRLE, Milan, BOČEK, Leo. *Matematika pro gymnázia. Analytická geometrie.* Praha: Prometheus, 2005.
