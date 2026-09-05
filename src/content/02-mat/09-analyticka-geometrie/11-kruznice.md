---
title: "Kružnice"
order: 11
source: "matematika/TY01_0131_Kruznice.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace obsahovala vzorce a obrázky vložené jako grafické objekty a používala animované odrážky (postupně se odkrývající text) — obojí se při převodu ztratilo. Definice a vzorce jsou níže doplněny v textové podobě; konkrétní zadání cvičení v prezentaci nebyla v textu obsažena přímo, takže je nelze rekonstruovat.

Kružnice je jedna z kuželoseček (viz [Kuželosečky](/mat/analyticka-geometrie/10-kuzelosecky/)) — vznikne jako řez kuželové plochy rovinou kolmou na její osu.

## Definice a rovnice kružnice

**Kružnice** je množina všech bodů roviny, které mají od daného bodu — **středu** kružnice — danou vzdálenost — **poloměr** kružnice.

Pokud je střed kružnice umístěn v počátku souřadnic $S=[0;0]$, rovnici kružnice o poloměru $r$ odvodíme z Pythagorovy věty pro libovolný bod $X=[x;y]$ na kružnici:

$$x^2+y^2=r^2$$

Pokud má střed kružnice obecné souřadnice $S=[m;n]$, předchozí rovnici upravíme posunutím o vektor $(m;n)$:

$$(x-m)^2+(y-n)^2=r^2$$

Toto je tzv. **středový tvar** rovnice kružnice.

```graph
{ "parametric": "2 + 3*cos(t), -1 + 3*sin(t)", "tDomain": [0, 6.283185307], "points": [{"x":2,"y":-1,"label":"S"}], "title": "(x-2)² + (y+1)² = 9 (S=[2;-1], r=3)" }
```

## Obecná rovnice kružnice

Roznásobením středového tvaru dostaneme **obecnou rovnici kružnice**:

$$x^2+y^2+Dx+Ey+F=0$$

Chceme-li z ní zpět zjistit střed a poloměr, doplníme na obou stranách výrazy s $x$ a $y$ na čtverec (viz [Kvadratická funkce](/mat/funkce-a-rovnice/01-kvadraticka-funkce/)):

$$\left(x+\frac D2\right)^2+\left(y+\frac E2\right)^2 = \frac{D^2+E^2}{4}-F$$

Odtud $S=\left[-\dfrac D2;-\dfrac E2\right]$ a $r=\sqrt{\dfrac{D^2+E^2}{4}-F}$ (pravá strana musí vyjít kladná, jinak rovnice žádnou kružnici nepopisuje).

**Příklad:** Určete střed a poloměr kružnice $x^2+y^2-4x+6y-3=0$.

$$(x^2-4x)+(y^2+6y)=3 \implies (x-2)^2-4+(y+3)^2-9=3 \implies (x-2)^2+(y+3)^2=16$$

Tedy $S=[2;-3]$, $r=4$.

## Vzájemná poloha kružnice a přímky

V rovině mohou nastat tři různé vzájemné polohy kružnice $k$ a přímky $p$. Rozlišujeme je podle toho, kolik mají společných bodů:

- **vnější přímka** — nemají žádný společný bod
- **tečna** — mají jeden společný bod (přímka se kružnice dotýká)
- **sečna** — mají dva společné body (přímka kružnici protíná)

O tom, který z případů nastává, rozhoduje vzdálenost středu kružnice od přímky $p$ (viz [Obecná rovnice přímky](/mat/analyticka-geometrie/08-obecna-rovnice-primky/)) v porovnání s poloměrem $r$: je-li vzdálenost větší než $r$, jde o vnější přímku; je-li rovna $r$, jde o tečnu; je-li menší než $r$, jde o sečnu.

## Příklady

**1.** Napište středový tvar rovnice kružnice se středem $S=[2;-3]$ a poloměrem $r=5$.

Výsledek: ||(x-2)²+(y+3)²=25||

**2.** Určete střed a poloměr kružnice $(x+1)^2+(y-4)^2=9$.

Výsledek: ||S=[-1;4], r=3||

**3.** Určete střed a poloměr kružnice $x^2+y^2+2x-8y+8=0$.

Výsledek: ||(x²+2x)+(y²-8y)=-8 → (x+1)²-1+(y-4)²-16=-8 → (x+1)²+(y-4)²=9; S=[-1;4], r=3||

**4.** Kružnice má střed $S=[0;0]$ a poloměr $r=5$. Rozhodněte o vzájemné poloze této kružnice a přímky $3x+4y-25=0$.

Výsledek: ||vzdálenost středu od přímky: d=\|3·0+4·0-25\|/√(3²+4²)=25/5=5=r → přímka je tečna||

**5.** Kružnice má střed $S=[0;0]$ a poloměr $r=5$. Rozhodněte o vzájemné poloze této kružnice a přímky $3x+4y-10=0$.

Výsledek: ||d=\|3·0+4·0-10\|/5=10/5=2<r=5 → přímka je sečna||

## Zdroje

KOČANDRLE, Milan, BOČEK, Leo. *Matematika pro gymnázia. Analytická geometrie.* Praha: Prometheus, 2005.

HUDCOVÁ, Milada, KUBIČÍKOVÁ, Libuše. *Sbírka úloh z matematiky pro střední odborné školy, střední odborná učiliště a nástavbové studium.* Praha: Prometheus, 2006.
