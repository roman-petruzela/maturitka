---
title: "Kvadratická rovnice"
order: 14
source: "MATURITA HADR/Matematika/řešené postupy matematických okruhů z DT 2010 - 2017/14) Kvadratická rovnice.pdf"
hasExercises: true
---

> Pozn. k obsahu: Rovnice byly v PDF vysázené jako rovnicové objekty, které se při převodu z větší části ztratily — u téměř všech úloh šlo přesné znění zpětně rekonstruovat z dochovaného postupu řešení (zejména z kroku násobení společným jmenovatelem) a přepočtem ověřit shodu s dochovaným výsledkem.

*Příklady z maturitních testů Cermatu (základní úroveň) — Kvadratická rovnice*

**1)** V oboru $\mathbb R$ řešte: $x(x-2)+(x-2)(x+2)=0$.

*Jaro 2011, příklad č. 8. Body: 2. Výsledek: $\{2;-1\}$.*

Řešení: $x^2-2x+x^2-4=0 \implies 2x^2-2x-4=0\ /:2 \implies x^2-x-2=0 \implies (x+1)(x-2)=0 \implies x_1=-1,\ x_2=2$.

**2)** V oboru $\mathbb R$ řešte: $a^2-2a+6=5(2-a)$.

*Podzim 2011, příklad č. 4. Body: 2. Výsledek: $a_1=-4$, $a_2=1$.*

Řešení: $a^2-2a+6=10-5a \implies a^2+3a-4=0 \implies (a-1)(a+4)=0 \implies a_1=1,\ a_2=-4$.

**3)** Pro $n\in\mathbb N$ řešte: $100=(0{,}01n)^2$.

*Jaro 2012, příklad č. 3. Body: 2. Výsledek: $n=1\,000$.*

Řešení: $100=0{,}0001n^2\ /:0{,}0001 \implies 1\,000\,000=n^2 \implies n_1=1\,000,\ n_2=-1\,000$ (nevyhovuje, $n\in\mathbb N$). Výsledek: $n=1\,000$.

**Poznámka:** Odmocňování nepatří mezi ekvivalentní úpravy rovnice! Kdyby se řešilo v $\mathbb R$ a rovnou odmocnilo, jeden kořen by se "ztratil": $100=(0{,}01n)^2\ /\sqrt{\ } \implies 10=0{,}01n \implies n=1\,000$ (ztratili bychom $n=-1\,000$).

**4)** Je dána rovnice $2x^2-x=6$. Ve kterém intervalu naleznete oba kořeny?

A) $\langle2;6\rangle$   B) $\langle0;5\rangle$   **C) $\langle-4;3\rangle$**   D) $\langle-6;-3\rangle$   E) v žádném z uvedených

*Jaro 2012, příklad č. 22. Body: 2. Výsledek: C (kořeny $x_1=2$, $x_2=-1{,}5$).*

Řešení: $2x^2-x-6=0$, $a=2,b=-1,c=-6$, $D=1+48=49$, $\sqrt D=7$: $x_{1,2}=\dfrac{1\pm7}4$, $x_1=2$, $x_2=-1{,}5$ — oba leží v $\langle-4;3\rangle$.

**5)** V oboru $\mathbb R$ řešte: $2x^2-2=3x$.

*Podzim 2012, příklad č. 4. Body: 2.*

Řešení: $2x^2-3x-2=0$, $a=2,b=-3,c=-2$, $D=9+16=25$, $\sqrt D=5$: $x_{1,2}=\dfrac{3\pm5}4$, $x_1=2$, $x_2=-0{,}5$.

**6)** V oboru $\mathbb R$ řešte: $3x(x+1)=9x^2$.

*Jaro 2013, příklad č. 6. Body: 1. Výsledek: $K=\{0;\tfrac12\}$.*

Řešení: $3x^2+3x=9x^2 \implies 0=6x^2-3x\ /:3 \implies 0=2x^2-x \implies 0=x(2x-1) \implies x_1=0,\ x_2=\dfrac12$.

**7)** V oboru $\mathbb R$ řešte: $\dfrac x2=1+\dfrac4x$.

*Podzim 2013, příklad č. 10. Body: 2. Výsledek: $K=\{-2;4\}$; podmínky $x\neq0$.*

Řešení: $/\cdot2x$: $x^2=2x+8 \implies x^2-2x-8=0 \implies (x+2)(x-4)=0 \implies x_1=-2,\ x_2=4$.

**8)** Stanovte podmínky a v $\mathbb R$ řešte: $\dfrac{3x^2+5x+2}{3x^2-3}=0$.

*Podzim 2014, příklad č. 5. Body: 3. Výsledek: $x=-\tfrac23$.*

Řešení: podmínky $3x^2-3\neq0\ /:3 \implies x^2\neq1 \implies x\neq\pm1$. Čitatel: $3x^2+5x+2=0$, $a=3,b=5,c=2$, $D=25-24=1$: $x_{1,2}=\dfrac{-5\pm1}6$, $x_1=-\dfrac23$, $x_2=-1$ (nevyhovuje podmínkám). Rovnice má jediné řešení $x=-\dfrac23$.

**9)** V oboru $\mathbb R$ řešte: $\dfrac{y-7}{4-y}-\dfrac{3-2y}{y-4}=0$.

*Jaro 2015, příklad č. 5. Body: 2. Výsledek: $K=\{-4\}$; podmínky $y\neq4$.*

Řešení (1. způsob): $/\cdot(4-y)(y-4)$: $(y-7)(y-4)-(3-2y)(4-y)=0$. *(Pozor, nutno uzávorkovat — násobení má přednost před odčítáním, ve druhé závorce dojde ke změně znamének.)*

$$y^2-11y+28-(12-11y+2y^2)=0 \implies -y^2+16=0 \implies y^2=16 \implies y_1=-4,\ y_2=4\ (\text{nevyhovuje})$$

Zkouška: $L=\dfrac{-4-7}{4-(-4)}-\dfrac{3-2(-4)}{-4-4}=\dfrac{-11}8-\dfrac{11}{-8}=0=P$ ✓.

Řešení (2. způsob): druhý zlomek rozšíříme $(-1)$, čímž se zjednoduší společný jmenovatel — rovnice bude lineární, ne kvadratická. *(Pozor na znaménko, před druhým zlomkem je mínus.)* Protože $\dfrac{3-2y}{y-4}=\dfrac{-(3-2y)}{-(y-4)}=\dfrac{2y-3}{4-y}$, dostáváme:

$$\frac{y-7}{4-y}-\frac{2y-3}{4-y}=0\ /\cdot(4-y) \implies (y-7)-(2y-3)=0 \implies y-7-2y+3=0 \implies -y-4=0 \implies y=-4$$

**10)** Které z rovnic **nemá** řešení? I: $2x^2-4=-4x$; II: $(2x-1)^2=0$; III: $x^2-1=-(x^2-1)$.

A) I a II   B) II a III   C) pouze I   D) pouze III   **E) všechny tři rovnice mají řešení**

*Jaro 2015, příklad č. 18. Body: 2.*

Řešení: I) $2x^2+4x-4=0\ /:2$: $x^2+2x-2=0$, $D=4+8=12>0$ — 2 řešení. II) $(2x-1)^2=0 \implies x=\dfrac12$ — 1 řešení. III) $x^2-1=-x^2+1 \implies 2x^2=2 \implies x^2=1 \implies x=\pm1$ — 2 řešení. Všechny tři mají řešení.

**11)** V oboru $\mathbb R$ řešte: $\dfrac1{3x}-\dfrac2{x+2}=\dfrac x{x+2}$.

*Podzim 2015, příklad č. 5. Body: 2. Výsledek: $x=\tfrac13$; podmínky $x\neq0$, $x\neq-2$.*

Řešení: $/\cdot3x(x+2)$: $(x+2)-2\cdot3x=x\cdot3x \implies x+2-6x=3x^2 \implies 0=3x^2+5x-2$. $a=3,b=5,c=-2$, $D=25+24=49$: $x_{1,2}=\dfrac{-5\pm7}6$, $x_1=\dfrac13$, $x_2=-2$ (nevyhovuje). Řešení: $x=\dfrac13$.

**12)** Je dána rovnice $\dfrac1{2x-1}=x$. Do kterého intervalu patří oba kořeny?

A) $\langle-3{,}4;-0{,}6\rangle$   B) $\langle-1{,}2;0{,}6\rangle$   C) $\langle-0{,}9;0{,}9\rangle$   **D) $\langle-0{,}6;1{,}2\rangle$**   E) do žádného

*Jaro 2016, příklad č. 22. Body: 2. Výsledek: D (kořeny $x_1=1$, $x_2=-0{,}5$); podmínky $x\neq0{,}5$.*

Řešení: $/\cdot(2x-1)$: $1=x(2x-1) \implies 0=2x^2-x-1$. $a=2,b=-1,c=-1$, $D=1+8=9$: $x_{1,2}=\dfrac{1\pm3}4$, $x_1=1$, $x_2=-0{,}5$ — oba v $\langle-0{,}6;1{,}2\rangle$.

**13)** V oboru $\mathbb R$ řešte: $\dfrac1{2x-4}+\dfrac{1-x}{x^2-2x}=\dfrac12$.

*Podzim 2016, příklad č. 5. Body: 3. Výsledek: $x=-1$; podmínky $x\neq0$, $x\neq2$.*

Ještě před hledáním společného jmenovatele rozložíme (pokud lze) všechny jmenovatele na součin vytýkáním nebo pomocí vzorců: $2x-4=2(x-2)$, $x^2-2x=x(x-2)$.

Řešení: $/\cdot2x(x-2)$: $1\cdot x+(1-x)\cdot2=1\cdot x(x-2) \implies x+2-2x=x^2-2x \implies 0=x^2-x-2 \implies 0=(x+1)(x-2)$. $x_1=-1$, $x_2=2$ (nevyhovuje). Podmínky: $2x-4\neq0 \implies x\neq2$; $x^2-2x\neq0 \implies x(x-2)\neq0 \implies x\neq0,\ x\neq2$. Výsledné podmínky: $x\neq0$, $x\neq2$. Rovnice má jediné řešení $x=-1$.

**14)** Přiřaďte ke každé rovnici a)–c) množinu všech řešení:

a) $x^2=-3x$
b) $\dfrac9x=x$
c) $\dfrac{9-x^2}{x-3}=0$

*Jaro 2017, příklad č. 26. Body: 3. Výsledek: a) $\{0;-3\}$, b) $\{3;-3\}$, c) $\{-3\}$.*

Řešení: a) $x^2+3x=0 \implies x(x+3)=0 \implies x_1=0,\ x_2=-3$.

b) $/\cdot x$: $9=x^2 \implies x_1=3,\ x_2=-3$ (podmínka $x\neq0$).

c) $9-x^2=0 \implies x^2=9 \implies x_1=3$ (nevyhovuje, $x\neq3$), $x_2=-3$. Rovnice má jediné řešení $x=-3$.

**15)** V oboru $\mathbb R$ řešte: $2x-3=(2x-3)(2x+3)$.

*Podzim 2017, příklad č. 6. Body: 2. Výsledek: $x_1=1{,}5$, $x_2=-1$.*

Řešení: $2x-3=4x^2-9 \implies 0=4x^2-2x-6\ /:2 \implies 0=2x^2-x-3$. $a=2,b=-1,c=-3$, $D=1+24=25$: $x_{1,2}=\dfrac{1\pm5}4$, $x_1=1{,}5$, $x_2=-1$.

---

*Příklady z testů PUP a ilustračních testů Cermatu*

**1p)** V oboru $\mathbb R$ řešte: $(2x-3x)(5-x)=0$.

*Jaro 2011 PUP, příklad č. 9. Body: 2. Výsledek: $K=\{0;5\}$.*

Řešení: $-x(5-x)=0 \implies x_1=0,\ x_2=5$.

**2p)** V oboru $\mathbb R$ řešte: $\dfrac{x^2-4}{x-2}=3x$.

*Jaro 2011 PUP, příklad č. 10. Body: 2. Výsledek: $x=1$; podmínky $x\neq2$.*

Řešení (1. způsob): $/\cdot(x-2)$: $x^2-4=3x^2-6x \implies 0=2x^2-6x+4\ /:2 \implies 0=x^2-3x+2 \implies 0=(x-1)(x-2)$. $x_1=1$, $x_2=2$ (nevyhovuje).

Řešení (2. způsob — chytřejší): protože $x^2-4=(x-2)(x+2)$, lze zlomek zjednodušit hned na $x+2$ (pro $x\neq2$): $x+2=3x \implies 2=2x \implies x=1$.

**1i)** Řešte $\dfrac4x-\dfrac{3(x-7)}{x(x-3)}=\dfrac{x+1}{x-3}$. a) Pro které $x$ není rovnice definována? b) Určete množinu řešení.

*2010 (1), příklad č. 8. Body: 4. Výsledek: a) $x=0$, $x=3$, b) $x=-3$.*

Řešení: $/\cdot x(x-3)$: $4(x-3)-3(x-7)=x(x+1) \implies 4x-12-3x+21=x^2+x \implies 9=x^2 \implies x_1=3$ (nevyhovuje), $x_2=-3$. Rovnice má jediné řešení $x=-3$; podmínky (kde není definována): $x\neq0$, $x\neq3$.

**2i)** V $\mathbb R$ řešte $(2x-3)^2-x^2=0$. Které tvrzení je pravdivé?

A) Rovnice má právě jedno řešení.   **B) Hodnoty obou kořenů se liší o 2.**   C) Kořeny jsou opačná nenulová čísla.   D) Žádné z A–C.

*2010 (1), příklad č. 13. Body: 3. Výsledek: B ($x_1=1$, $x_2=3$).*

Řešení: $4x^2-12x+9-x^2=0 \implies 3x^2-12x+9=0\ /:3 \implies x^2-4x+3=0 \implies (x-1)(x-3)=0 \implies x_1=1,\ x_2=3$ (liší se o 2).

**3i)** Jedním z kořenů rovnice $(x-2)+(x+2)(x-2)=0$ je $x=2$. Vypočtěte druhý kořen.

*2013, příklad č. 7. Body: 1. Výsledek: $x_2=-3$.*

Řešení (1. způsob): $x-2+x^2-4=0 \implies x^2+x-6=0 \implies (x-2)(x+3)=0 \implies x_1=2,\ x_2=-3$.

Řešení (2. způsob — vytknutí $(x-2)$): $(x-2)\cdot[1+(x+2)]=0 \implies (x-2)(x+3)=0 \implies x_2=-3$.

**4i)** Přiřaďte úloze $\dfrac{(x-2)^2}{2-x}=0$ odpovídající řešení:

A) $\emptyset$   B) $\mathbb R$   C–F) *(nedochováno)*

*2014 (1), příklad č. 25.1. Body: 1. Výsledek: A; podmínky $x\neq2$.*

Řešení: $/\cdot(2-x)$: $(x-2)^2=0 \implies x=2$ — nevyhovuje podmínkám ($x\neq2$). Rovnice nemá řešení, $K=\emptyset$.

**5i)** V oboru $\mathbb R$ řešte rovnici $1=\dfrac{(2x-3)^2}{12x+9}$.

*2014 (2), příklad č. 7. Body: 2. Výsledek: $K=\{0;6\}$; podmínky $x\neq-\tfrac34$.*

Řešení: $/\cdot(12x+9)$: $12x+9=(2x-3)^2 \implies 12x+9=4x^2-12x+9 \implies 0=4x^2-24x\ /:4 \implies 0=x^2-6x \implies 0=x(x-6) \implies x_1=0,\ x_2=6$. Podmínky: $12x+9\neq0 \implies x\neq-\dfrac34$ (obě řešení vyhovují).

## Zdroje

MATURITA HADR / Matematika / řešené postupy matematických okruhů z DT 2010–2017, dokument *14) Kvadratická rovnice.pdf*.
