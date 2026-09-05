---
title: "Lineární funkce"
order: 19
source: "MATURITA HADR/Matematika/řešené postupy matematických okruhů z DT 2010 - 2017/19) Lineární funkce.pdf"
hasExercises: true
---

> Pozn. k obsahu: Úlohy v této kapitole vycházejí z grafů (obrázků přímek), které nejsou součástí archivu. Textový popis řešení ale ve všech případech uvádí konkrétní souřadnice bodů použitých k výpočtu, takže matematický obsah (rovnice funkcí, výpočty) je kompletně dochovaný — chybí jen vizuální podoba samotných grafů.

*Příklady z maturitních testů Cermatu (základní úroveň) — Lineární funkce*

**1)** Přiřaďte ke každému grafu a)–d) odpovídající předpis funkce:

A) $y=2$   B) $y=x+2$   C) $y=x-2$   D) $y=-x+2$   E) $y=2x-1$   F) $y=2x+2$

*Jaro 2013, příklad č. 25. Body: 4. Výsledek: a) B, b) F, c) D, d) A.*

Ve všech čtyřech případech jde o přímky, tedy grafy lineárních funkcí $y=ax+b$ ($a,b\in\mathbb R$). Číslo $a$ určuje sklon: $a>0$ rostoucí, $a<0$ klesající, $a=0$ konstantní. Číslo $b$ udává průsečík s osou $y$, tedy bod $[0;b]$.

Řešení: a) $a>0$, $b=2$ — je to B nebo F. Na grafu leží bod $[-2;0]$, který vyhovuje rovnici B, ne F. Je to B.

b) $a>0$, $b=2$ — je to B nebo F. Na grafu leží bod $[-1;0]$, který vyhovuje rovnici F, ne B. Je to F.

c) $a<0$, $b=2$ — je to D.

d) $a=0$, $b=2$ — je to A ($y=0x+2$, zkráceně $y=2$).

**2)** Rozhodněte o pravdivosti tvrzení a)–d) o grafu funkce $f$ *(graf ukazuje klesající přímku procházející body $[0;2]$, $[1;0]$, $[-1;4]$, $[2;-2]$)*:

a) Funkce $f$ je konstantní.
b) Jeden z průsečíků grafu $f$ se souřadnicovými osami je $P[1;0]$.
c) $f(0)=2$
d) Předpis funkce $f$ je $y=2-2x$.

*Podzim 2013, příklad č. 16. Body: 2. Výsledek: a) NE, b) ANO, c) ANO, d) ANO.*

Řešení: a) NE — grafem konstantní funkce je přímka rovnoběžná s osou $x$, tato přímka klesá.

b) ANO — bod $P[1;0]$ je průsečík grafu s osou $x$.

c) $f(0)=2$ znamená bod $[0;2]$ — ten se na grafu skutečně nachází, tedy ANO. (Podobně platí $f(-1)=4$, $f(1)=0$, $f(2)=-2$.)

d) Funkce na obrázku je klesající, protíná osu $y$ v bodě $[0;2]$, tedy $a<0$, $b=2$. Rovnice $y=2-2x=-2x+2$ má $a=-2$, $b=2$ — sklon i průsečík souhlasí, ale klesajících funkcí procházejících bodem $[0;2]$ je nekonečně mnoho. K jednoznačnému ověření potřebujeme ještě jeden bod — dosazením bodu $[1;0]$ do $y=2-2x$: $0=2-2\cdot1=0$ ✓ (podobně vyjdou i $[-1;4]$, $[2;-2]$). Předpis funkce je tedy skutečně $y=2-2x$.

**Obecný postup:** Bez ohledu na sklon či průsečík s osou $y$ stačí vzít libovolné dva známé body z grafu (dva různé body určují přímku jednoznačně) a ověřit, že jejich souřadnice vyhovují dané rovnici.

**3)** Funkce $f$ s definičním oborem $\mathbb R$ má předpis $y=4-2x$.

a) Sestrojte graf funkce $f$.
b) Graf lineární funkce $g$ s definičním oborem $\mathbb R$ prochází počátkem $O$ a s grafem $f$ nemá žádný společný bod. Zapište předpis $g$.

*Podzim 2015, příklad č. 8. Body: 2. Výsledek: b) $g:y=-2x$.*

Řešení: a) $f:y=4-2x=-2x+4$ — klesající, protíná osu $y$ v bodě $[0;4]$. Grafem přímky stačí znát 2 body, např. $[0;4]$ a $[2;0]$.

b) Graf $g$ prochází počátkem $[0;0]$, tedy v rovnici $y=ax+b$ platí $b=0$. Protože $g$ nemá s $f$ žádný společný bod, jsou obě přímky **rovnoběžné** — mají tedy stejný sklon $a$. Ze rovnice $f$ víme $a=-2$. Předpis: $g:y=-2x+0$, tedy $g:y=-2x$.

**4)** Zapište předpis funkce $g$ *(graf: klesající přímka protínající osu $y$ v bodě $[0;1]$ a procházející bodem $[1;0]$)*.

*Podzim 2016, příklad č. 7. Body: 1. Výsledek: $g:y=-x+1$.*

Řešení: obecně $y=ax+b$. Z grafu $b=1$ (průsečík s osou $y$ je $[0;1]$) a funkce je klesající ($a<0$). K jednoznačnému určení potřebujeme ještě jeden bod — na grafu leží $[1;0]$: $0=a\cdot1+1 \implies a=-1$. Předpis: $g:y=-x+1$.

*(Alternativně: dosazením obou bodů $[0;1]$ a $[1;0]$ do $y=ax+b$ dostaneme soustavu $1=a\cdot0+b$ a $0=a\cdot1+b$, jejímž řešením je $b=1$, $a=-1$.)*

---

*Příklady z testů PUP a ilustračních testů Cermatu*

**1p)** Který z bodů A–D neleží na přímce $p$ *(graf ukazuje přímku procházející počátkem a bodem $[3;2]$)*?

A) $A[-12;-8]$   B) $B[-9;-6]$   C) $C[0;0]$   D) $D[6;4]$   **E) všechny body leží na přímce $p$**

*Jaro 2011 PUP, příklad č. 17. Body: 2.*

Řešení: z obrázku $b=0$, tedy $y=ax$. Dosazením bodu $[3;2]$: $2=3a \implies a=\dfrac23$. Rovnice přímky: $y=\dfrac23x$. Dosazením všech bodů: $-12\cdot\tfrac23=-8$ ✓, $-9\cdot\tfrac23=-6$ ✓, $6\cdot\tfrac23=4$ ✓ — všechny body vyhovují, tedy leží na přímce $p$.

**1i)** Graf lineární funkce prochází body $A[2;3]$ a $B[6;-3]$. Jaká je hodnota funkce pro $x=3$?

A) $-1{,}5$   B) $1$   C) $1{,}2$   **D) $1{,}5$**

*2010 (1), příklad č. 15. Body: 3.*

Řešení: $y=ax+b$. Dosazením: $3=2a+b$ a $-3=6a+b$. Odečtením: $-6=4a \implies a=-1{,}5$; dosazením: $-3=6\cdot(-1{,}5)+b \implies b=6$. Rovnice: $y=-1{,}5x+6$. $f(3)=-1{,}5\cdot3+6=1{,}5$.

**2i)** Je dána soustava rovnic $x+2y+5=0$ a $y+1=0$. Na kterém z obrázků A–D je správně vyznačeno grafické řešení?

A, B, D) *(nedochováno)*   **C)**

*2010 (1), příklad č. 16. Body: 3.*

Řešení: kromě sčítací a dosazovací metody lze soustavu řešit i **graficky** — obě rovnice převedeme na tvar $y=ax+b$, sestrojíme jako přímky a najdeme jejich průsečík.

$$x+2y+5=0 \implies 2y=-x-5 \implies y=-\frac x2-2{,}5 \quad\text{(klesající, protíná osu $y$ v $-2{,}5$)}$$

$$y+1=0 \implies y=0x-1 \quad\text{(konstantní, protíná osu $y$ v $-1$)}$$

Grafické řešení odpovídá obrázku C.

## Zdroje

MATURITA HADR / Matematika / řešené postupy matematických okruhů z DT 2010–2017, dokument *19) Lineární funkce.pdf*.
