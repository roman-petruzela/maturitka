---
title: "Úhel dvou vektorů"
order: 5
source: "matematika/TY01_0125_Uhel_dvou_vektoru.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace obsahovala jen nadpisy a odrážky bez textu (animované, postupně se odkrývající body) — nešlo z nich rekonstruovat konkrétní zadání. Teorie a příklady jsou proto doplněny odpovídající standardnímu rozsahu tématu.

## Skalární součin

**Skalární součin** dvou vektorů $\vec u=(u_1;u_2)$ a $\vec v=(v_1;v_2)$ je (na rozdíl od součtu či násobku vektoru číslem) obyčejné **číslo** (skalár), ne vektor:

$$\vec u\cdot\vec v = u_1v_1 + u_2v_2$$

## Úhel dvou vektorů

Skalární součin souvisí s úhlem $\varphi$, který vektory svírají, vztahem $\vec u\cdot\vec v = |\vec u|\cdot|\vec v|\cdot\cos\varphi$ — odtud se odvozuje vzorec pro výpočet úhlu:

$$\cos\varphi = \frac{\vec u\cdot\vec v}{|\vec u|\cdot|\vec v|}$$

**Příklad:** Určete úhel vektorů $\vec u=(1;0)$ a $\vec v=(1;1)$.

$$\vec u\cdot\vec v = 1\cdot1+0\cdot1 = 1, \qquad |\vec u|=1,\quad |\vec v|=\sqrt2$$

$$\cos\varphi = \frac{1}{1\cdot\sqrt2} = \frac{1}{\sqrt2} \implies \varphi = 45°$$

## Kolmost vektorů

Dva nenulové vektory jsou **kolmé** (na sebe) právě tehdy, když je jejich skalární součin roven nule (protože $\cos90°=0$):

$$\vec u \perp \vec v \iff \vec u\cdot\vec v = 0$$

**Příklad:** Jsou vektory $\vec u=(2;3)$ a $\vec v=(-3;2)$ kolmé?

$$\vec u\cdot\vec v = 2\cdot(-3) + 3\cdot2 = -6+6 = 0 \implies \text{ano, jsou kolmé}$$

## Příklady

**1.** Vypočítejte skalární součin vektorů $\vec a=(4;-1)$ a $\vec b=(2;3)$.

Výsledek: ||a·b = 4·2+(-1)·3 = 8-3 = 5||

**2.** Určete úhel vektorů $\vec u=(1;0)$ a $\vec v=(-1;\sqrt3)$.

Výsledek: ||u·v = 1·(-1)+0·√3 = -1; \|u\|=1, \|v\|=√(1+3)=2; cosφ = -1/2 → φ=120°||

**3.** Zjistěte, zda jsou vektory $\vec u=(3;-6)$ a $\vec v=(4;2)$ kolmé.

Výsledek: ||u·v = 3·4+(-6)·2 = 12-12 = 0 → ano, kolmé||

**4.** Pro jaké číslo $k$ jsou vektory $\vec u=(k;3)$ a $\vec v=(2;-4)$ kolmé?

Výsledek: ||u·v = 2k-12 = 0 → k=6||

## Zdroje

KOČANDRLE, Milan, BOČEK, Leo. *Matematika pro gymnázia. Analytická geometrie.* Praha: Prometheus, 2005.

HUDCOVÁ, Milada, KUBIČÍKOVÁ, Libuše. *Sbírka úloh z matematiky pro střední odborné školy, střední odborná učiliště a nástavbové studium.* Praha: Prometheus, 2006.
