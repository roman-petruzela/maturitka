---
title: "Aritmetická posloupnost"
order: 2
source: "matematika/TY01_0216-Aritmeticka_posloupnost.pptx"
hasExercises: true
---

> Pozn. k obsahu: Vzorce a ukázkové příklady se z velké části dochovaly v textu, jen s drobnými OCR artefakty (chybějící index "a" u některých členů, např. "2 = a1 + 4" místo "a2 = a1 + 4") — opraveno podle kontextu a přepočtem ověřeno. Vzorce přepsány do LaTeXu.

**Aritmetická posloupnost** je taková posloupnost, pro kterou existuje reálné číslo $d$ (nazývané **diference**) takové, že pro každé přirozené číslo $n$ platí:

$$a_{n+1} = a_n + d$$

Aritmetická posloupnost se tedy vždy zvětšuje (nebo zmenšuje) o stejnou hodnotu — např. pro $d=2$:

$$1,\ \underbrace{3}_{+2},\ \underbrace{5}_{+2},\ \underbrace{7}_{+2},\ \underbrace{9}_{+2},\ \dots$$

## Vzorce a ukázkové příklady

**Výpočet dalšího členu pomocí předcházejícího a diference:**

$$a_{n+1} = a_n + d$$

**Příklad:** $a_1=3$, $d=4$. Určete $a_2$, $a_3$.

$$a_2 = a_1+4 = 3+4 = 7, \qquad a_3 = a_2+4 = 7+4 = 11$$

**Výpočet členu pomocí sousedních členů:**

$$a_n = \frac{a_{n+1}+a_{n-1}}{2}$$

**Příklad:** $a_2=-7$, $a_4=1$. Určete $a_3$.

$$a_3 = \frac{a_4+a_2}{2} = \frac{1+(-7)}{2} = \frac{-6}{2} = -3$$

**Výpočet libovolného členu pomocí prvního členu a diference:**

$$a_n = a_1 + (n-1)\cdot d$$

**Příklad:** $a_1=3$, $d=4$. Určete $a_{20}$.

$$a_{20} = 3+(20-1)\cdot4 = 3+19\cdot4 = 3+76 = 79$$

**Výpočet libovolného členu pomocí jiného členu a diference:**

$$a_r = a_s + (r-s)\cdot d$$

**Příklad:** $a_5=-2$, $d=2$. Určete $a_{18}$.

$$a_{18} = -2+(18-5)\cdot2 = -2+13\cdot2 = -2+26 = 24$$

**Součet konečného počtu členů aritmetické posloupnosti:**

$$S_n = \frac{n}{2}\cdot(a_1+a_n)$$

**Příklad:** $a_1=3$, $a_{20}=142$, $n=20$. Určete $S_{20}$.

$$S_{20} = \frac{20}{2}\cdot(3+142) = 10\cdot145 = 1450$$

## Příklady na procvičení

**1.** $a_1=-2$, $d=-3$. Určete $a_{124}$.

Výsledek: ||a₁₂₄ = a₁+(124-1)d = -2+123·(-3) = -2-369 = -371||

**2.** $a_1=4$, $a_{16}=-84$. Určete $d$.

Výsledek: ||a₁₆=a₁+(16-1)d → -84=4+15d → -88=15d → d=-88/15 ≈ -5,87||

**3.** $a_6=15$, $d=-\tfrac12$. Určete $a_{33}$.

Výsledek: ||a₃₃=a₆+(33-6)d=15+27·(-½)=15-13,5=1,5 (pozn.: za "ar" dosazujeme pořadově vyšší člen, zde a₃₃)||

**4.** $a_8=-10$, $a_{14}=8$. Určete $d$ a $a_1$.

Výsledek: ||a₁₄=a₈+(14-8)d → 8=-10+6d → 18=6d → d=3; dále a₁₄=a₁+(14-1)d → 8=a₁+13·3 → 8=a₁+39 → a₁=-31||

**5.** $a_1=15$, $d=3$. Určete $S_{11}$.

Výsledek: ||nejprve a₁₁=a₁+(11-1)d=15+10·3=45; pak S₁₁=11/2·(a₁+a₁₁)=5,5·(15+45)=5,5·60=330||

## Slovní úlohy

**1.** Vypočítejte součet prvních sta kladných sudých čísel.

Výsledek: ||a₁=2, a₂=4,... → d=2; a₁₀₀=a₁+(100-1)d=2+99·2=200; S₁₀₀=100/2·(a₁+a₁₀₀)=50·(2+200)=50·202=10100||

**2.** Dělník vyrobí za směnu 40 součástek. Kolik součástek by vyrobil za 12 směn, kdyby svůj výkon postupně zvyšoval každou směnu o 3 součástky?

Výsledek: ||a₁=40, d=3, n=12; a₁₂=a₁+(12-1)d=40+11·3=73; S₁₂=12/2·(a₁+a₁₂)=6·(40+73)=6·113=678 součástek||

## Shrnutí

Aritmetická posloupnost se neustále zvětšuje či zmenšuje o stejnou hodnotu — diferenci $d$.

$$a_{n+1}=a_n+d \qquad a_n=\frac{a_{n+1}+a_{n-1}}{2} \qquad a_n=a_1+(n-1)d \qquad a_r=a_s+(r-s)d \qquad S_n=\frac n2(a_1+a_n)$$

## Zdroje

HUDCOVÁ, Milada, KUBIČÍKOVÁ, Libuše. *Sbírka úloh z matematiky pro SOŠ, SOU a nástavbové studium.* 2. vydání. Havlíčkův Brod: Prometheus, 2005. ISBN 80-7196-318-6.
