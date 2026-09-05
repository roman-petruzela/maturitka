---
title: "Kuželosečky"
order: 10
source: "matematika/TY01_0130_Kuzelosecky.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace obsahovala funkční úvodní text, ale další snímky byly jen nadpisy s obrázky (model řezu kužele), které se nedochovaly — doplněny standardní definice a rovnice jednotlivých kuželoseček s vlastními grafy.

**Kuželosečka** je množina bodů v rovině, kterou lze získat jako průnik rotační kuželové plochy a roviny, jež neprochází vrcholem kuželové plochy. Podle úhlu, pod kterým rovina kuželovou plochu protíná, vznikají čtyři různé typy křivek: **kružnice**, **elipsa**, **parabola** a **hyperbola**.

## Kružnice

Řez kuželovou plochou rovinou **kolmou na osu** kužele. Množina všech bodů roviny se stejnou vzdáleností (poloměrem $r$) od daného bodu (středu). Podrobný výklad viz [Kružnice](/mat/analyticka-geometrie/11-kruznice/).

```graph
{ "parametric": "3*cos(t), 3*sin(t)", "tDomain": [0, 6.283185307], "title": "Kružnice: x²+y²=r²" }
```

## Elipsa

Řez rovinou, která svírá s osou kužele úhel větší než polovina vrcholového úhlu kužele, ale není na osu kolmá. Množina všech bodů, jejichž **součet vzdáleností od dvou pevných bodů** (ohnisek $F_1$, $F_2$) je konstantní. Se středem v počátku a poloosami $a$ (podél osy $x$), $b$ (podél osy $y$) má rovnici:

$$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$$

```graph
{ "parametric": "4*cos(t), 2*sin(t)", "tDomain": [0, 6.283185307], "title": "Elipsa: x²/16 + y²/4 = 1 (a=4, b=2)" }
```

## Parabola

Řez rovinou **rovnoběžnou s povrchovou přímkou** kužele. Množina všech bodů, které mají stejnou vzdálenost od pevného bodu (**ohniska**) a pevné přímky (**řídicí přímky**). V "kuželosečkovém" tvaru s vrcholem v počátku a osou totožnou s osou $x$:

$$y^2 = 2px$$

(Jde o stejnou křivku, jakou znáte jako graf kvadratické funkce $y=ax^2$ — jen pootočenou o $90°$, s osou vodorovně místo svisle; viz [Kvadratická funkce](/mat/funkce-a-rovnice/01-kvadraticka-funkce/).)

```graph
{ "parametric": "t*t/2, t", "tDomain": [-3.2, 3.2], "title": "Parabola: y²=2x (p=1)" }
```

## Hyperbola

Řez rovinou, která svírá s osou kužele úhel menší než polovina vrcholového úhlu (protíná tedy obě "poloviny" dvojkužele). Množina všech bodů, jejichž **rozdíl vzdáleností** od dvou pevných bodů (ohnisek) je v absolutní hodnotě konstantní. Se středem v počátku má rovnici:

$$\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$$

Na rozdíl od ostatních kuželoseček má hyperbola **dvě samostatné větve** — graf níže ukazuje jen pravou z nich (levá je jejím zrcadlovým obrazem podle osy $y$):

```graph
{ "parametric": "3/cos(t), 2*tan(t)", "tDomain": [-1.4, 1.4], "title": "Pravá větev hyperboly: x²/9 - y²/4 = 1 (a=3, b=2)" }
```

## Příklady

**1.** Určete typ kuželosečky (a její parametry $a$, $b$ nebo $r$) podle rovnice $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$.

Výsledek: ||elipsa; a=5, b=3||

**2.** Určete typ kuželosečky podle rovnice $x^2+y^2=49$.

Výsledek: ||kružnice; r=7||

**3.** Určete typ kuželosečky podle rovnice $\dfrac{x^2}{4}-\dfrac{y^2}{16}=1$.

Výsledek: ||hyperbola; a=2, b=4||

## Zdroje

KOČANDRLE, Milan, BOČEK, Leo. *Matematika pro gymnázia. Analytická geometrie.* Praha: Prometheus, 2005.

HUDCOVÁ, Milada, KUBIČÍKOVÁ, Libuše. *Sbírka úloh z matematiky pro střední odborné školy, střední odborná učiliště a nástavbové studium.* Praha: Prometheus, 2006.
