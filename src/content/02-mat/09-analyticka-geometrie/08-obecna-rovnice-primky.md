---
title: "Obecná rovnice přímky"
order: 8
source: "matematika/TY01_0128_Obecna_rovnice_primky.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace obsahovala jen nadpisy a odrážky bez textu (animované, postupně se odkrývající body) — nešlo z nich rekonstruovat konkrétní zadání. Teorie a příklady jsou proto doplněny odpovídající standardnímu rozsahu tématu.

## Odvození

Přímka $p$ procházející bodem $A=[x_A;y_A]$ s normálovým vektorem $\vec n=(a;b)$ je množina všech bodů $X=[x;y]$, pro které je vektor $\overrightarrow{AX}$ kolmý na $\vec n$ — tedy $\vec n\cdot\overrightarrow{AX}=0$:

$$a(x-x_A) + b(y-y_A) = 0$$

Po roznásobení a označení $c=-ax_A-by_A$ dostaneme **obecnou rovnici přímky**:

$$ax+by+c=0$$

kde $\vec n=(a;b)$ je normálový vektor této přímky (koeficienty u $x$ a $y$ jsou vždy přímo souřadnice normálového vektoru — to je hlavní výhoda tohoto tvaru).

## Příklad

Napište obecnou rovnici přímky procházející bodem $A=[2;-1]$ s normálovým vektorem $\vec n=(3;4)$.

$$3(x-2)+4(y-(-1))=0 \implies 3x-6+4y+4=0 \implies 3x+4y-2=0$$

## Z dvou bodů

Prochází-li přímka body $A$, $B$, nejprve spočítáme směrový vektor $\vec s=B-A=(s_1;s_2)$, z něj normálový vektor $\vec n=(s_2;-s_1)$ (viz [Směrový a normálový vektor](/mat/analyticka-geometrie/06-smerovy-a-normalovy-vektor/)) a postupujeme jako výše.

**Příklad:** Napište obecnou rovnici přímky procházející body $A=[1;2]$, $B=[4;6]$.

$$\vec s = B-A = (3;4) \implies \vec n = (4;-3)$$

$$4(x-1)-3(y-2)=0 \implies 4x-4-3y+6=0 \implies 4x-3y+2=0$$

*Řešení:* Dosazením bodu $B=[4;6]$ ověříme správnost: $4\cdot4-3\cdot6+2=16-18+2=0$ ✓.

## Příklady

**1.** Napište obecnou rovnici přímky procházející bodem $A=[0;3]$ s normálovým vektorem $\vec n=(2;-5)$.

Výsledek: ||2(x-0)-5(y-3)=0 → 2x-5y+15=0||

**2.** Napište obecnou rovnici přímky procházející body $A=[-1;2]$, $B=[3;0]$.

Výsledek: ||s=B-A=(4;-2); n=(-2;-4) [nebo zjednodušeně (1;2)]; s n=(1;2): 1(x-(-1))+2(y-2)=0 → x+1+2y-4=0 → x+2y-3=0||

**3.** Zjistěte, zda bod $C=[5;-1]$ leží na přímce $2x+3y-7=0$.

Výsledek: ||2·5+3·(-1)-7 = 10-3-7 = 0 → ano, bod C na přímce leží||

**4.** Určete normálový a směrový vektor přímky $5x-2y+1=0$.

Výsledek: ||normálový vektor je přímo (5;-2); směrový vektor je na něj kolmý: s=(2;5)||

## Zdroje

KOČANDRLE, Milan, BOČEK, Leo. *Matematika pro gymnázia. Analytická geometrie.* Praha: Prometheus, 2005.

HUDCOVÁ, Milada, KUBIČÍKOVÁ, Libuše. *Sbírka úloh z matematiky pro střední odborné školy, střední odborná učiliště a nástavbové studium.* Praha: Prometheus, 2006.
