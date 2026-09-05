---
title: "Geometrická posloupnost"
order: 36
source: "MATURITA HADR/Matematika/řešené postupy matematických okruhů z DT 2010 - 2017/36) Geometrická posloupnost.pdf"
hasExercises: true
---

> Pozn. k obsahu: Vzorce ($a_n=a_1q^{n-1}$, $s_n=a_1\cdot\frac{q^n-1}{q-1}$, vzorec pro složené úrokování $a_n=a_0(1\pm\frac p{100})^n$), které se v PDF ztratily jako vzorcové objekty, jsou doplněny standardním zněním. U několika úloh (4, 7, 8, 3i) se ztratila i některá vstupní čísla nebo přesná nabídka možností — dochované mezivýpočty ale umožnily ověřit výsledné hodnoty.

*Příklady z maturitních testů Cermatu (základní úroveň) — Geometrická posloupnost*

**1)** U čtveřic čísel určete, tvoří-li geometrickou posloupnost:

a) $(4;2;-2;-4)$   b) $(1;4;16;64)$   c) $(8;-4;2;-1)$   d) $(0;4;8;12)$

*Jaro 2011, příklad č. 16. Body: 2. Výsledek: a) NE, b) ANO, c) ANO, d) NE.*

Řešení: a) $4\cdot q=2 \implies q=0{,}5$, ale $2\cdot0{,}5=1\neq-2$ — NE. b) ANO, $q=4$. c) ANO, $q=-0{,}5$. d) $0\cdot q=4$ nemá řešení — NE.

**2)** Počet obyvatel se za 2 roky zvýšil z 24 500 na 26 500 (stejný meziroční přírůstek). Jaký byl přírůstek?

A) méně než 4,0 %   **B) přibližně 4,0 %**   C) přibližně 4,1 %   D) přibližně 4,2 %   E) více než 4,2 %

*Jaro 2012, příklad č. 18. Body: 2.*

Řešení (složené úrokování): $26\,500=24\,500\left(1+\dfrac p{100}\right)^2 \implies\left(1+\dfrac p{100}\right)^2\approx1{,}0816 \implies1+\dfrac p{100}\approx1{,}04 \implies p\approx4$.

**3)** Počítač za 10 000 Kč se každý rok znehodnotí o stejné procento. Po 4 letech klesne na cca 1 300 Kč. Kolik procent ročně (s přesností na 1 %)?

A) méně než 22 %   B) 22 %   C) 34 %   **D) 40 %**   E) více než 40 %

*Podzim 2012, příklad č. 22. Body: 2.*

Řešení: $1\,300=10\,000\left(1-\dfrac p{100}\right)^4\ /:10\,000 \implies0{,}13=\left(1-\dfrac p{100}\right)^4 \implies1-\dfrac p{100}\approx0{,}6005 \implies p\approx40$.

**4)** V geometrické posloupnosti platí $a_2=2$, $a_2\cdot a_3=6$. Které tvrzení je nepravdivé?

A–D) *(nedochováno, pravdivá)*   **E) $\dfrac{a_3}q=2$ (chybně; ve skutečnosti $a_1=\dfrac43$)**

*Jaro 2013, příklad č. 24. Body: 2.*

Řešení: $a_3=\dfrac6{a_2}=3$. $q=\dfrac{a_3}{a_2}=1{,}5$. Správně: $a_1=\dfrac{a_2}q=\dfrac2{1{,}5}=\dfrac43$, ne $2$ jako tvrdí nepravdivá možnost E (ta chybně dělí $a_3$, ne $a_2$, kvocientem).

**5)** $a_2=12$, $a_3=18$. Jaký je součet $a_1+a_2+a_3+a_4$?

A) 60   B) 64   **C) 65**   D) 72   E) jiný součet

*Podzim 2013, příklad č. 23. Body: 2.*

Řešení: $q=\dfrac{18}{12}=1{,}5$; $a_1=\dfrac{12}{1{,}5}=8$; $a_4=18\cdot1{,}5=27$. Součet: $8+12+18+27=65$.

*(Nebo součtovým vzorcem: $s_4=8\cdot\dfrac{1{,}5^4-1}{1{,}5-1}=8\cdot\dfrac{4{,}0625}{0{,}5}=65$.)*

**6)** Kocourkovští si půjčili 1 mil. Kč, dluh každý rok roste o 50 %. Ve kterém roce dluh poprvé překročí 15 mil. Kč?

A) v 6. roce   **B) v 8. roce**   C) v 9. roce   D) v 10. roce   E) později

*Jaro 2014, příklad č. 19. Body: 2.*

Řešení: $15=1{,}5^n$ (v milionech). Zlogaritmováním: $n=\dfrac{\log15}{\log1{,}5}\approx6{,}7$. Protože první rok byl bezúročný, přičteme 1: $6{,}7+1\approx7{,}7$, tedy dluh poprvé překročí 15 mil. v **8. roce**.

Kontrola postupným výpočtem: konec 1. roku 1 000 000 Kč, 2. roku 1 500 000, 3. roku 2 250 000, 4. roku 3 375 000, 5. roku 5 062 500, 6. roku 7 593 750, 7. roku 11 390 625, 8. roku 17 085 937,5 Kč — poprvé přes 15 mil. v 8. roce ✓.

**7)** Geometrická posloupnost s prvními dvěma členy $a_1=\tfrac12$, $a_2=2$ *(rekonstrukce, $q=4$)*. Jaký je třetí člen?

A–B, D–E) *(nedochováno)*   **C) $a_3=8$**

*Jaro 2014, příklad č. 26.3. Body: 1.*

Řešení: $q=\dfrac{a_2}{a_1}=4$. $a_3=a_2\cdot q=2\cdot4=8$.

**8)** Do kterého intervalu patří třetí člen posloupnosti (ze zadaných $a_2$, $a_4$, kde členy musí být kladné)?

A) $\langle1;4)$   **B) $\langle4;8)$**   C) $\langle8;16)$   D) $\langle16;32)$   E) $\langle32;40\rangle$

*Jaro 2015, příklad č. 23. Body: 2. Výsledek: $a_3=4{,}5$.*

Řešení: z $a_4=a_2q^2$ vychází $q^2$ s dvěma možnými řešeními $q_1$ (kladné) a $q_2$ (záporné). Pro kladné $q_1$: $a_3\approx4{,}5$. Pro záporné $q_2$: $a_3\approx-4{,}5$, což nevyhovuje zadání (členy musí být kladné). Platí tedy $a_3=4{,}5\in\langle4;8)$.

**9)** V geometrické posloupnosti $q=-2$, $a_1+a_2+a_3+a_4+a_5=15{,}4$. Do kterého intervalu patří $a_1$?

A) $\langle-8;0)$   **B) $(0;2\rangle$**   C) $(2;4\rangle$   D) $(4;8\rangle$   E) do žádného

*Podzim 2015, příklad č. 19. Body: 2. Výsledek: $a_1=1{,}4$.*

Řešení: $s_5=a_1\cdot\dfrac{(-2)^5-1}{-2-1}=a_1\cdot\dfrac{-33}{-3}=11a_1$. $15{,}4=11a_1 \implies a_1=1{,}4$.

**10)** Stroj za 200 000 Kč zlevňoval o stejné procento denně; po 4. snížení klesl na 81 920 Kč. O kolik se cena snížila poprvé?

A) méně než 30 000 Kč   B) 30 000 Kč   C) 35 000 Kč   **D) 40 000 Kč**   E) více než 40 000 Kč

*Jaro 2016, příklad č. 20. Body: 2.*

Řešení: $81\,920=200\,000\left(1-\dfrac p{100}\right)^4\ /:200\,000 \implies0{,}4096=\left(1-\dfrac p{100}\right)^4 \implies1-\dfrac p{100}=0{,}8 \implies p=20\%$. První snížení: $20\%$ z $200\,000=40\,000$ Kč.

**11)** Obrazec s 18 trojúhelníky, výšky tvoří GP $a_1=1$, $q=2$. Vypočtěte celkovou výšku $v$.

*Podzim 2016, příklad č. 13. Body: 1. Výsledek: 262 143 cm.*

Řešení: $s_{18}=1\cdot\dfrac{2^{18}-1}{2-1}=2^{18}-1=262\,143$ cm.

**12)** AP: $a_1=1$, $a_4=-8$. GP: $g_1=1$, $g_4=-8$. Které tvrzení je nepravdivé (o vztahu mezi odpovídajícími členy obou posloupností)?

A–C, E) *(pravdivá)*   **D) (nepravdivé)**

*Jaro 2017, příklad č. 18. Body: 2.*

Řešení: AP: $a_4=a_1+3d \implies-8=1+3d \implies d=-3$: $1,-2,-5,-8$. GP: $g_4=g_1q^3 \implies-8=q^3 \implies q=-2$: $1,-2,4,-8$. Druhé členy obou posloupností se shodují ($-2=-2$), ale třetí členy se liší ($-5\neq4$) — z toho plyne, které tvrzení o (ne)shodě členů je nepravdivé.

**13)** Přiřaďte GP a), b) jejich druhý člen:

a) $a_1=8$, $a_4=-1$
b) $q=-\tfrac12$, $s_3=-12$

A) $a_2=4$   B) $a_2=5$   C) $a_2=6$   D) $a_2=7$   **E) $a_2=8$**   F) jiná hodnota

*Podzim 2017, příklad č. 25.3, 25.4. Body: 2. Výsledek: a) F ($a_2=-4$), b) E.*

Řešení: a) $-1=8q^3 \implies q^3=-\dfrac18 \implies q=-\dfrac12$. $a_2=8\cdot\left(-\dfrac12\right)=-4$.

b) $s_3=a_1\cdot\dfrac{q^3-1}{q-1}=-12$; s $q=-\dfrac12$ vychází $a_1=-16$. $a_2=a_1q=-16\cdot\left(-\dfrac12\right)=8$.

---

*Ilustrační maturitní testy Cermatu*

**1i)** V GP je $q=\dfrac32$, $a_{54}=54$. Určete $a_{55}$ a $a_{51}$.

*2010 (1), příklad č. 6. Body: 2. Výsledek: $a_{55}=81$, $a_{51}=16$.*

Řešení: $a_{55}=a_{54}\cdot q=54\cdot\dfrac32=81$. $a_{54}=a_{51}\cdot q^3 \implies54=a_{51}\cdot\dfrac{27}8 \implies a_{51}=54\cdot\dfrac8{27}=16$.

**2i)** V GP je $g_2=-10$, $g_3=20$. Přiřaďte a) $g_1$, b) $g_4$:

A) $-50$   B) $-40$   C) $-10$   **D) 5**   E) 40   F) 50

*2011, příklad č. 22.3, 22.4. Body: 2. Výsledek: a) D, b) B.*

Řešení: $q=\dfrac{20}{-10}=-2$. $g_1=\dfrac{g_2}q=\dfrac{-10}{-2}=5$. $g_4=g_3\cdot q=20\cdot(-2)=-40$.

**3i)** V geometrické posloupnosti jsou dány dva vztahy mezi členy $a_2$ a $a_3$, vedoucí k $a_2=2$, $a_3=8$. Jaký je kvocient?

A–B) *(nedochováno)*   C) 2   **D) 4**   E) 6

*2014 (1), příklad č. 23. Body: 2.*

Řešení: $q=\dfrac{a_3}{a_2}=\dfrac82=4$.

**4i)** Úvěr s 10% roční úrokovou mírou splacen po 2 letech částkou 72 600 Kč (složené úročení). Kolik bylo půjčeno?

**A) 60 000 Kč**   B) 60 200 Kč   C) 60 500 Kč   D) 60 600 Kč   E) jiná částka

*2014 (2), příklad č. 19. Body: 2.*

Řešení: $72\,600=a_0\cdot1{,}1^2=a_0\cdot1{,}21 \implies a_0=60\,000$ Kč.

## Zdroje

MATURITA HADR / Matematika / řešené postupy matematických okruhů z DT 2010–2017, dokument *36) Geometrická posloupnost.pdf*.
