---
title: "Směrnicový tvar rovnice přímky"
order: 9
source: "matematika/TY01_0129_Smernicovy_tvar_rovnice_primky.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace obsahovala jen nadpisy a odrážky bez textu (animované, postupně se odkrývající body) — nešlo z nich rekonstruovat konkrétní zadání. Teorie a příklady jsou proto doplněny odpovídající standardnímu rozsahu tématu.

## Směrnicový tvar

Pokud obecná rovnice přímky $ax+by+c=0$ (viz [Obecná rovnice přímky](/mat/analyticka-geometrie/08-obecna-rovnice-primky/)) má $b\neq0$ (přímka není svislá), můžeme ji vyjádřit v **směrnicovém tvaru**:

$$y = kx+q$$

kde $k$ je **směrnice** přímky a $q$ je hodnota, ve které přímka protíná osu $y$ (tzv. **úsek na ose $y$**).

```graph
{ "fn": "0.5*x + 1", "domain": [-4, 4], "title": "y = 0,5x + 1 (k=0,5, q=1)" }
```

## Směrnice

Směrnice $k$ udává **sklon** přímky — je to tangens úhlu, který přímka svírá s kladnou částí osy $x$:

$$k = \mathrm{tg}\,\varphi$$

Je-li přímka daná směrovým vektorem $\vec s=(s_1;s_2)$ se $s_1\neq0$, platí $k=\dfrac{s_2}{s_1}$ — směrnice je "podíl výšky ku šířce" směrového vektoru. Platí i:

- $k>0$: přímka stoupá zleva doprava,
- $k<0$: přímka klesá zleva doprava,
- $k=0$: přímka je vodorovná (rovnoběžná s osou $x$),
- svislé přímky ($x=\text{konst.}$) směrnicový tvar **nemají** — u nich by $k$ muselo být nekonečné.

Rovnoběžné přímky mají stejnou směrnici. Kolmé přímky mají směrnice svázané vztahem $k_1\cdot k_2=-1$.

## Z obecné rovnice

Z $ax+by+c=0$ (kde $b\neq0$) vyjádříme $y$:

$$y = -\frac{a}{b}x - \frac{c}{b} \implies k=-\frac{a}{b},\quad q=-\frac{c}{b}$$

**Příklad:** Převeďte $2x-4y+8=0$ na směrnicový tvar.

$$-4y = -2x-8 \implies y = \frac{1}{2}x+2 \implies k=\frac12,\ q=2$$

## Příklady

**1.** Napište směrnicový tvar přímky procházející body $A=[0;1]$, $B=[4;3]$.

Výsledek: ||k = (3-1)/(4-0) = 2/4 = 1/2; q = 1 (přímka prochází A, které leží na ose y); y = ½x + 1||

**2.** Převeďte přímku $3x+2y-6=0$ na směrnicový tvar.

Výsledek: ||2y=-3x+6 → y=-3/2 x+3; k=-3/2, q=3||

**3.** Přímky $p: y=3x-2$ a $q: y=kx+5$ jsou rovnoběžné. Určete $k$.

Výsledek: ||rovnoběžné přímky mají stejnou směrnici → k=3||

**4.** Přímky $p: y=2x+1$ a $q: y=kx-3$ jsou na sebe kolmé. Určete $k$.

Výsledek: ||k₁·k₂=-1 → 2k=-1 → k=-1/2||

## Zdroje

KOČANDRLE, Milan, BOČEK, Leo. *Matematika pro gymnázia. Analytická geometrie.* Praha: Prometheus, 2005.

HUDCOVÁ, Milada, KUBIČÍKOVÁ, Libuše. *Sbírka úloh z matematiky pro střední odborné školy, střední odborná učiliště a nástavbové studium.* Praha: Prometheus, 2006.
