---
title: "Součet a rozdíl vektorů"
order: 4
source: "matematika/TY01_0124_Soucet_a_rozdil_vektoru.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace obsahovala jen nadpisy a odrážky bez textu (animované, postupně se odkrývající body) a odkaz na chybějící obrázek ("Grafický součet a rozdíl vektorů") — nešlo z nich rekonstruovat konkrétní zadání. Teorie a příklady jsou proto doplněny odpovídající standardnímu rozsahu tématu.

## Součet vektorů

Vektory sčítáme **po souřadnicích** — součet vektorů $\vec u=(u_1;u_2)$ a $\vec v=(v_1;v_2)$ je vektor:

$$\vec u + \vec v = (u_1+v_1;\ u_2+v_2)$$

Graficky součet vektorů odpovídá **úhlopříčce rovnoběžníku** sestrojeného z obou vektorů (tzv. rovnoběžníkové pravidlo) — nebo ekvivalentně: vektor $\vec v$ přiložíme počátkem k *konci* vektoru $\vec u$, výsledný součet vede z počátku $\vec u$ do konce takto přiloženého $\vec v$.

```graph
{ "points": [{"x":0,"y":0,"label":"O"},{"x":3,"y":1,"label":"u"},{"x":1,"y":3,"label":"v"},{"x":4,"y":4,"label":"u+v"}], "domain": [-0.5,4.5], "yDomain": [-0.5,4.5], "title": "u=(3;1), v=(1;3), u+v=(4;4)" }
```

**Příklad:** Pro $\vec u=(3;1)$ a $\vec v=(1;3)$ je:

$$\vec u+\vec v = (3+1;\ 1+3) = (4;4)$$

## Rozdíl vektorů

Rozdíl vektorů se počítá stejně, jen po souřadnicích odečítáme:

$$\vec u - \vec v = (u_1-v_1;\ u_2-v_2)$$

Graficky $\vec u-\vec v$ odpovídá druhé úhlopříčce téhož rovnoběžníku — vektoru vedoucímu z konce $\vec v$ do konce $\vec u$ (jsou-li oba vektory přiloženy do společného počátku).

**Příklad:** Pro $\vec u=(3;1)$ a $\vec v=(1;3)$ je:

$$\vec u-\vec v = (3-1;\ 1-3) = (2;-2)$$

## Příklady

**1.** Jsou dány vektory $\vec a=(2;-3)$, $\vec b=(-5;4)$. Vypočítejte $\vec a+\vec b$ a $\vec a-\vec b$.

Výsledek: ||a+b = (2+(-5); -3+4) = (-3;1); a-b = (2-(-5); -3-4) = (7;-7)||

**2.** Vypočítejte $2\vec a - 3\vec b$ pro $\vec a=(1;2)$, $\vec b=(-1;3)$.

Výsledek: ||2a=(2;4); 3b=(-3;9); 2a-3b=(2-(-3); 4-9)=(5;-5)||

**3.** Body $A=[1;1]$, $B=[4;1]$, $C=[5;4]$ jsou tři vrcholy rovnoběžníku $ABCD$. Pomocí toho, že u rovnoběžníku platí $\overrightarrow{AB}=\overrightarrow{DC}$, určete souřadnice vrcholu $D$.

Výsledek: ||AB = B-A = (3;0); z AB=DC plyne D = C-AB = (5-3; 4-0) = [2;4]||

## Zdroje

KOČANDRLE, Milan, BOČEK, Leo. *Matematika pro gymnázia. Analytická geometrie.* Praha: Prometheus, 2005.

HUDCOVÁ, Milada, KUBIČÍKOVÁ, Libuše. *Sbírka úloh z matematiky pro střední odborné školy, střední odborná učiliště a nástavbové studium.* Praha: Prometheus, 2006.
