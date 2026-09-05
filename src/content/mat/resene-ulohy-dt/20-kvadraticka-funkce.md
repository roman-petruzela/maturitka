---
title: "Kvadratická funkce"
order: 20
source: "MATURITA HADR/Matematika/řešené postupy matematických okruhů z DT 2010 - 2017/20) Kvadratická funkce.pdf"
hasExercises: true
---

> Pozn. k obsahu: Úlohy vycházely z grafů parabol, které nejsou součástí archivu. Vzorec pro vrchol paraboly $V\left[-\frac{b}{2a};\,c-\frac{b^2}{4a}\right]$ se v PDF opakovaně vyskytoval jako vzorcový objekt, který se ztratil (zůstalo jen "V[ , c – ]") — doplněn standardním tvarem. Předpisy funkcí a klíčové dochované body umožnily většinu úloh plně dopočítat; u úlohy 3i) se ztratily i konkrétní rovnice A)–E), zachován je jen ověřovací postup a výsledné přiřazení.

*Příklady z maturitních testů Cermatu (základní úroveň) — Kvadratická funkce*

**1)** Funkce $f:y=(x-1)(x-3)$. a) Zapište souřadnice průsečíku $Y$ grafu $f$ s osou $y$. b) Sestrojte graf funkce $f$.

*Podzim 2013, příklad č. 8. Body: 3.*

Řešení: a) dosadíme $x=0$: $y=(0-1)(0-3)=3$, tedy $Y[0;3]$.

b) Nejprve najdeme vrchol paraboly vzorcem $V\left[-\dfrac b{2a};\,c-\dfrac{b^2}{4a}\right]$. Po roznásobení: $y=x^2-4x+3$, tedy $a=1,b=-4,c=3$: $V=[2;-1]$.

Do tabulky volíme $x$-ové souřadnice co nejblíž vrcholu (nejlépe jen napravo od něj — druhou polovinu paraboly dostaneme osovou souměrností):

| $x$ | 3 | 4 |
|---|---|---|
| $y$ | 0 | 3 |

**2)** Pro $x\in\mathbb R$ je dána funkce $f:y=(2-x)(2+x)$. a) Sestrojte graf $f$. b) Zapište průsečík s osou $y$. c) Zapište všechna $x$, pro něž je $f(x)>0$.

*Jaro 2014, příklad č. 8. Body: 3. Výsledek: b) $P[0;4]$, c) $x\in(-2;2)$.*

Řešení: a) $y=4-x^2=-x^2+0x+4$, tedy $a=-1,b=0,c=4$: $V=[0;4]$.

| $x$ | 1 | 2 | 3 |
|---|---|---|---|
| $y$ | 3 | 0 | $-5$ |

b) $y=(2-0)(2+0)=4$, tedy $P[0;4]$.

c) Z grafu (i tabulky, doplněné o zápornou stranu díky souměrnosti): $f(-3)=-5$, $f(-2)=0$, $f(-1)=3$, $f(0)=4$, $f(1)=3$, $f(2)=0$, $f(3)=-5$. Nulová hodnota v $x=\pm2$; záporná pro $x\in(-\infty;-2)\cup(2;\infty)$; kladná pro $x\in(-2;2)$.

**3)** *(Graf vycházel z bodů $A$, $B$ a přímky $p$, které nejsou v archivu dochované jako obrázek.)* a), b) Zapište souřadnice vrcholu $V$. c) Zapište obor hodnot funkce $f$.

*Jaro 2015, příklad č. 8. Body: 3. Výsledek: b) $V[-1;-2]$, c) $H(f)=\langle-2;+\infty)$.*

Řešení: každá parabola je osově souměrná — vzhledem k umístění bodů $A$, $B$ musí mít vrchol $x$-ovou souřadnici $-1$. Protože vrchol leží na přímce $p$, jeho $y$-ová souřadnice je $-2$. $V=[-1;-2]$.

c) Obor hodnot je množina všech $y$-ových souřadnic bodů grafu — z grafu vychází $H(f)=\langle-2;+\infty)$.

**4)** Funkce $f:y=x^2-1$ *(rekonstrukce z dochovaných funkčních hodnot — viz níže)*. Určete všechny $x$, pro něž je $f(x)\leq3$.

*Podzim 2015, příklad č. 11. Body: 1. Výsledek: $x\in\langle-2;2\rangle$.*

Řešení: z grafu (funkčních hodnot) vidíme $f(-2)=3$, $f(-1)=0$, $f(0)=-1$, $f(1)=0$, $f(2)=3$ *(souhlasí přesně s $f(x)=x^2-1$)*. $f(x)>3$ pro $x\in(-\infty;-2)\cup(2;\infty)$, tedy $f(x)\leq3$ pro $x\in\langle-2;2\rangle$.

**5)** Funkce $f:y=x^2$ s definičním oborem $\langle-2;3\rangle$. Zapište obor hodnot funkce $f$.

*Podzim 2016, příklad č. 6. Body: 1. Výsledek: $H(f)=\langle0;9\rangle$.*

Řešení: $a=1,b=0,c=0$, vrchol $V=[0;0]$ (leží v definičním oboru). Krajní body definičního oboru: $f(-2)=4$, $f(3)=9$. Levý krajní bod grafu $[-2;4]$, pravý $[3;9]$, vrchol $[0;0]$ — nejmenší funkční hodnota je tedy $0$ (ve vrcholu), největší $9$ (v pravém krajním bodě). $H(f)=\langle0;9\rangle$.

**6)** Grafem funkce $f:y=9-x^2$ je parabola. Rozhodněte o pravdivosti tvrzení:

a) Vrchol paraboly je $[0;9]$.
b) Jeden z průsečíků s osami je $[-3;0]$.
c) $f(0)=-3$.
d) Obor hodnot funkce $f$ je $\langle9;+\infty)$.

*Jaro 2017, příklad č. 16. Body: 2. Výsledek: a) A, b) A, c) N, d) N.*

Řešení: a) $y=-x^2+0x+9$, $a=-1,b=0,c=9$: $V=[0;9]$ — pravdivé. *(Alternativně pravidlem posunu: $y=-x^2+9$ = překlopení $y=x^2$ podle osy $x$ a posun o 9 nahoru, vrchol $[0;9]$.)*

b) Průsečíky s osou $x$: $0=9-x^2 \implies x^2=9 \implies x=\pm3$ — body $[3;0]$, $[-3;0]$, obsahuje $[-3;0]$ — pravdivé.

c) $f(0)=-3$ by znamenalo bod $[0;-3]$ na grafu. Dosazením: $-3\stackrel{?}=9-0^2=9$ — nepravdivá rovnost, bod na grafu neleží — tvrzení NEPRAVDIVÉ.

d) Vrchol $[0;9]$, parabola se otevírá dolů ($a<0$), takže obor hodnot je $H(f)=(-\infty;9\rangle$, ne $\langle9;+\infty)$ — tvrzení NEPRAVDIVÉ.

**7)** *(Graf ukazuje parabolu s vrcholem $[-1;0]$ procházející body $[-2;1]$, $[0;1]$.)* Které tvrzení je pravdivé?

A) Graf je souměrný podle přímky $p:x-1=0$.   **B) Funkce $f$ má předpis $y=(x+1)^2$.**   C) Funkce je klesající v $(-\infty;0)$.   D) Obor hodnot je $(0;+\infty)$.   E) $f(0)=-1$.

*Podzim 2017, příklad č. 24. Body: 2.*

Řešení: A) přímka $x-1=0$ je svislá přímka protínající osu $x$ v bodě $1$ (vůbec to není funkce — v jejím "grafu" jsou body nad sebou) — podle ní parabola souměrná není.

B) Základní parabola $y=x^2$ posunutá o 1 doleva má rovnici $y=(x+1)^2$. Dosazením bodů $[-2;1]$ a $[0;1]$ zjistíme, že vyhovují — předpis je skutečně $y=(x+1)^2$.

C) Při určování intervalů monotónnosti se řídíme podle $x$-ových souřadnic, ne $y$-ových. Klesající část paraboly (nalevo od vrcholu) je interval $(-\infty;-1)$, ne $(-\infty;0)$ — nepravdivé.

D) Obor hodnot je $\langle0;+\infty)$ (číslo 0 do oboru patří, dosahuje se ve vrcholu), ne otevřený interval $(0;+\infty)$ — nepravdivé.

E) $f(0)=(0+1)^2=1$, ne $-1$ — nepravdivé.

---

*Ilustrační maturitní testy Cermatu*

**1i)** Jsou dány funkce $f:y=0{,}5x^2$ a $g:y=2-0{,}5x$. Na kterém z obrázků A–E jsou správně sestrojeny grafy obou funkcí?

A–D) *(nedochováno)*   **E)**

*2010 (2), příklad č. 18. Body: 2.*

Řešení: $f:y=0{,}5x^2+0x+0$ — kvadratická funkce, parabola se otevírá nahoru ($a>0$). $g:y=-0{,}5x+2$ — lineární funkce, klesající ($a<0$), protíná osu $y$ v bodě $2$. Oba grafy odpovídají obrázku E.

**2i)** Grafem funkce $f:y=x^2-6x$ je parabola s vrcholem $V$. Jakou hodnotu má druhá souřadnice vrcholu?

*2011, příklad č. 20. Body: 2. Výsledek: A ($-9$).*

Řešení: $a=1,b=-6,c=0$: $V=\left[-\dfrac{-6}2;\,0-\dfrac{36}4\right]=[3;-9]$. Druhá souřadnice vrcholu je $-9$.

**3i)** Přiřaďte ke každému grafu a)–c) odpovídající předpis funkce (A–E). *(Konkrétní rovnice A–E se v podkladu ztratily, dochoval se jen ověřovací postup.)*

*2012, příklad č. 26. Body: 3. Výsledek: a) E, b) A, c) B.*

Řešení: všechny rovnice nejprve upravíme na tvar $y=ax^2+bx+c$, abychom poznali, zda se parabola otevírá nahoru nebo dolů. Ukázalo se, že jen jedna z pěti nabízených rovnic (A) odpovídá parabole otevřené dolů — tedy grafu b), na kterém je vidět parabola otevřená dolů.

Na parabole a) leží bod $[2;0]$ — dosazením do zbylých rovnic vyhovuje pouze rovnice E.

Na parabole c) leží bod $[3;0]$ — dosazením vyhovuje pouze rovnice B.

## Zdroje

MATURITA HADR / Matematika / řešené postupy matematických okruhů z DT 2010–2017, dokument *20) Kvadratická funkce.pdf*.
