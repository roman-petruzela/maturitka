---
title: "Logaritmické rovnice"
order: 26
source: "MATURITA HADR/Matematika/řešené postupy matematických okruhů z DT 2010 - 2017/26) Logaritmické rovnice.pdf"
hasExercises: true
---

> Pozn. k obsahu: Rovnice se z většiny dochovaly čitelně přímo v zadání nebo šly jednoznačně zrekonstruovat z dochovaného postupu. Věty o logaritmech používané v řešeních: **1. věta** $\log(ab)=\log a+\log b$; **2. věta** $\log\frac ab=\log a-\log b$; **3. věta** $\log a^n=n\log a$ (platí analogicky pro logaritmus o libovolném základu).

*Příklady z maturitních testů Cermatu (základní úroveň) — Logaritmické rovnice*

**1)** V oboru $\mathbb R$ řešte: $\log0{,}1+\log(2x)=1$.

*Jaro 2011, příklad č. 11. Body: 2. Výsledek: $x=50$; podmínky $x>0$.*

Řešení (1. větou o logaritmech): $\log(0{,}1\cdot2x)=1 \implies 10^1=0{,}1\cdot2x \implies 10=0{,}2x \implies x=50$.

Podmínky: $2x>0 \implies x>0$.

**2)** V oboru $\mathbb R$ řešte: $\log_22x-\log_28=1$.

*Podzim 2011, příklad č. 6. Body: 2. Výsledek: $x=8$; podmínky $x>0$.*

Řešení (1. větou): $\log_22x=1+\log_28=\log_22+\log_28=\log_2(2\cdot8) \implies 2x=16 \implies x=8$.

**3)** Je dána rovnice $\log(x^2)-2\log x=0$. Řešením je:

A) $\emptyset$   B) $\{0\}$   C) $\{0{,}1;10\}$   **D) $(0;+\infty)$**   E) $\mathbb R\setminus\{0\}$

*Jaro 2012, příklad č. 23. Body: 2.*

Řešení (3. větou): $2\log x-2\log x=0 \implies 0=0$ — pravdivá rovnost, ale ne pro každé $x$: podmínky jsou $x^2>0$ ($x\neq0$) **a zároveň** $x>0$ (z $\log x$). Průnikem obou podmínek je $(0;\infty)$ — to je řešení.

**4)** V oboru $\mathbb R$ řešte: $\log2-\log x=1$.

*Podzim 2012, příklad č. 5. Body: 2. Výsledek: $x=0{,}2$; podmínky $x>0$.*

Řešení (2. větou): $\log\dfrac2x=1 \implies 10^1=\dfrac2x \implies 10x=2 \implies x=0{,}2$.

**5)** V oboru $\mathbb R$ řešte: $\log_4(x-8)=1$.

*Podzim 2014, příklad č. 11. Body: 1. Výsledek: $x=12$; podmínky $x>8$.*

Řešení: $4^1=x-8 \implies x=12$. Podmínky: $x-8>0 \implies x>8$.

**6)** Určete definiční obor a řešte: $\log(2-x)=-1$.

*Jaro 2015, příklad č. 6. Body: 2. Výsledek: $D(x)=(-\infty;2)$, $K=\{1{,}9\}$.*

Řešení: $10^{-1}=2-x \implies0{,}1=2-x \implies x=1{,}9$. Podmínky: $2-x>0 \implies x<2$.

**7)** Přiřaďte rovnicím a), b) jejich množinu řešení:

a) $\log_2x=-1$
b) $\log_2x^2=0$

A) $\{-2\}$   B) $\{-1\}$   **C) $\left\{\tfrac12\right\}$**   D) $\{1\}$   E) $\emptyset$   **F) jiná množina**

*Podzim 2015, příklad č. 25.3, 25.4. Body: 2. Výsledek: a) C, b) F ($x_1=1,x_2=-1$).*

Řešení: a) podmínky $x>0$. $2^{-1}=x \implies x=\dfrac12$.

b) podmínky $x^2>0 \implies x\neq0$. $2^0=x^2 \implies x^2=1 \implies x_1=1,x_2=-1$.

**Pozor, "chyták":** kdybychom 3. větou upravili $\log_2x^2=2\log_2x$, dostali bychom $\log_2x=0 \implies x=1$ a druhé řešení ($x=-1$) by "zmizelo" — protože výraz $2\log_2x$ má jiný definiční obor ($x>0$) než původní $\log_2x^2$ ($x\neq0$). Řešení $x=-1$ podmínkám **původní** rovnice přitom vyhovuje.

**8)** Určete definiční obor a řešte: $\log8-\log2=\dfrac12\log(2x-2)$.

*Jaro 2016, příklad č. 15. Body: 3. Výsledek: $D(x)=(1;+\infty)$, $K=\{9\}$.*

Řešení: $/\cdot2$: $2\log8-2\log2=\log(2x-2)$. 3. větou: $\log8^2-\log2^2=\log(2x-2) \implies \log64-\log4=\log(2x-2)$. 2. větou: $\log16=\log(2x-2) \implies16=2x-2 \implies x=9$.

Podmínky: $2x-2>0 \implies x>1$.

**9)** V oboru $\mathbb R$ řešte: $\log_33x=6$.

*Jaro 2017, příklad č. 12. Body: 1. Výsledek: $x=243$; podmínky $x>0$.*

Řešení: $3^6=3x \implies729=3x \implies x=243$.

**10)** Pro $x,y\in(0;+\infty)$ platí $\log y=2\log x+2$. Vyjádřete $y$ bez logaritmů.

*Podzim 2017, příklad č. 7. Body: 1. Výsledek: $y=100x^2$.*

Řešení (3. větou, $2=\log100$): $\log y=\log x^2+\log100$. 1. větou: $\log y=\log(100x^2) \implies y=100x^2$.

---

*Příklady z testů PUP a ilustračních testů Cermatu*

**1p)** V oboru $\mathbb R$ řešte: $3x-\log10^3=x+\log10$.

*Jaro 2011 PUP, příklad č. 11. Body: 2. Výsledek: $x=2$.*

Řešení: $3x-3=x+1 \implies2x=4 \implies x=2$.

*(Přísně vzato jde o rovnici lineární — v argumentech logaritmů se nevyskytují proměnné.)*

**1i)** Řešte rovnici: $\log1000+\log x=4$.

*2010 (2), příklad č. 6.1. Body: 2. Výsledek: $x=10$; podmínky $x>0$.*

Řešení: $3+\log x=4 \implies\log x=1 \implies x=10$.

**2i)** V oboru $\mathbb R$ řešte: $\log_3x+\log_327=1$.

*2011, příklad č. 5. Body: 2. Výsledek: $x=\tfrac19$; podmínky $x>0$.*

Řešení: $\log_3x+3=1 \implies\log_3x=-2 \implies x=3^{-2}=\dfrac19$.

**3i)** V oboru $\mathbb R$ řešte: $\log5=\log4-\log(5x)$.

*2013, příklad č. 10. Body: 1. Výsledek: $x=\tfrac4{25}=0{,}16$; podmínky $x>0$.*

Řešení (2. větou): $\log5=\log\dfrac4{5x} \implies5=\dfrac4{5x} \implies25x=4 \implies x=\dfrac4{25}=0{,}16$.

**4i)** Přiřaďte rovnicím a), b) jejich množinu řešení:

a) $\log_22+\log_21=\log_22x$
b) $\log_2x^2-\log_2x=1$

A) $\{-2;2\}$   B) $\{-2\}$   C) $\{-1\}$   D) $\{1\}$   **E) $\{2\}$**   F) $\emptyset$

*2014 (2), příklad č. 25.3, 25.4. Body: 2. Výsledek: a) D, b) E.*

Řešení: a) 1. větou: $\log_2(2\cdot1)=\log_22x \implies2=2x \implies x=1$.

b) 2. větou: $\log_2\dfrac{x^2}x=1 \implies\log_2x=1 \implies x=2$. Podmínky: $x^2>0$ ($x\neq0$) **a** $x>0$ — průnikem $(0;\infty)$, řešení $x=2$ vyhovuje.

## Zdroje

MATURITA HADR / Matematika / řešené postupy matematických okruhů z DT 2010–2017, dokument *26) Logaritmické rovnice.pdf*.
