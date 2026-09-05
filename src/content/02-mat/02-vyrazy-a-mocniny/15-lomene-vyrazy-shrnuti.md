---
title: "Lomené výrazy — shrnutí"
order: 15
source: "mat/lomené_výrazy_shrnutí.pdf"
tags: ["doplněno"]
hasExercises: true
---

> Pozn. k obsahu: Zdrojové PDF obsahovalo text ve formě, kterou automatický převod nedokázal přečíst (stránka vypadala prázdná) — zadání bylo přepsáno ručně přímo ze zdrojového souboru. Žádné výsledky se ale nedochovaly vůbec — všechny jsou proto nově dopočítané a ověřené (u složitějších úprav i zpětnou zkouškou dosazením).

Tato lekce shrnuje čtyři základní dovednosti s **lomenými výrazy** (zlomky, jejichž čitatel nebo jmenovatel obsahuje proměnnou):

1. dosazení konkrétní hodnoty do výrazu (a kontrola, že dosazovaná hodnota je v definičním oboru — viz [Definiční obor výrazů](/mat/vyrazy-a-mocniny/13-definicni-obor-vyrazu/)),
2. **krácení** — rozklad čitatele i jmenovatele na součin a vykrácení společných činitelů (viz [Rozklad na součin](/mat/vyrazy-a-mocniny/20-rozklad-na-soucin/)),
3. **sčítání/odčítání** — převod na společný jmenovatel,
4. **násobení/dělení** — násobíme čitatele s čitatelem a jmenovatele se jmenovatelem (u dělení nejprve otočíme druhý zlomek), viz [Násobení a dělení lomených výrazů](/mat/vyrazy-a-mocniny/16-nasobeni-a-deleni-lomenych-vyrazu/).

## 1. Dosazení hodnoty

Určete hodnotu výrazu $\dfrac{p^4+p^2-3p}{p^2-1}$ pro:

a) $p=3$   b) $p=-2$   c) $p=1$

Výsledek: ||a) (81+9-9)/(9-1) = 81/8 = 10,125; b) (16+4+6)/(4-1) = 26/3 ≈ 8,667; c) jmenovatel p²-1=0 → NELZE dosadit, p=1 není v definičním oboru výrazu||

## 2. Podmínky platnosti a krácení

Určete podmínky platnosti výrazu a výraz zkraťte:

a) $\dfrac{x^2-y^2}{x^2-xy}$
b) $\dfrac{16+8a+a^2}{8+2a}$
c) $\dfrac{8b^2-72c^2}{3cy+by}$
d) $\dfrac{8u^3+27v^3}{4u^2-9v^2}$
e) $\dfrac{a^2+4a+16}{a^3-64}$

*U příkladů b), d), e) použijte vzorce pro rozdíl/součet čtverců a součet/rozdíl kostek.*

Výsledek: ||a) x²-y²=(x-y)(x+y), x²-xy=x(x-y) → (x+y)/x, podmínky x≠0, x≠y; b) 16+8a+a²=(a+4)², 8+2a=2(a+4) → (a+4)/2, podmínka a≠-4; c) 8b²-72c²=8(b-3c)(b+3c), 3cy+by=y(b+3c) → 8(b-3c)/y, podmínky y≠0, b≠-3c; d) součet kostek 8u³+27v³=(2u+3v)(4u²-6uv+9v²), rozdíl čtverců 4u²-9v²=(2u-3v)(2u+3v) → (4u²-6uv+9v²)/(2u-3v), podmínky u≠3v/2, u≠-3v/2; e) rozdíl kostek a³-64=(a-4)(a²+4a+16) → 1/(a-4), podmínka a≠4||

## 3. Sčítání a odčítání

Sečtěte výrazy:

a) $\dfrac{2x}{x^2-1}+\dfrac{1}{x-1}-\dfrac{3x}{x+1}$
b) $\dfrac{2}{x-1}-\dfrac{x^2+x+1}{x^3-1}$
c) $\dfrac{1}{2u}-\dfrac{5}{6u}+\dfrac{u-1}{u^2+u}$
d) $\dfrac{a+1}{a-1}-\dfrac{a-1}{a+1}$

Výsledek: ||a) společný jmenovatel (x-1)(x+1): [2x+(x+1)-3x(x-1)]/(x²-1) = (-3x²+6x+1)/(x²-1), podmínky x≠±1; b) x³-1=(x-1)(x²+x+1), po úpravě zbyde 1/(x-1), podmínka x≠1; c) společný jmenovatel 6u(u+1): [3(u+1)-5(u+1)+6(u-1)]/[6u(u+1)] = (4u-8)/[6u(u+1)] = 2(u-2)/[3u(u+1)], podmínky u≠0, u≠-1; d) společný jmenovatel a²-1: [(a+1)²-(a-1)²]/(a²-1) = 4a/(a²-1), podmínky a≠±1||

## 4. Násobení a dělení

Vypočítejte:

a) $\dfrac{rs-5s^2}{5s-r}\cdot\dfrac{2r+6s}{3s+r}$
b) $\left(1-\dfrac4{x^2}\right)\cdot\left(\dfrac{2x}{x-2}+x\right)$
c) $\dfrac{(u-v)^3}{uv-u^2}\cdot\dfrac{v^2+uv}{u^2-v^2}$
d) $(y-x)\cdot\left(1+\dfrac xy\right)$
e) $\dfrac{x^2-6x+9}{xy-3y}:\dfrac{x^2-9}{2y}$
f) $\left(\dfrac1x+\dfrac1y\right):\left(\dfrac1x-\dfrac1y\right)$
g) $\dfrac{u^2-4}{2-u}:\dfrac{2+u}{u^2}$
h) $\dfrac{a^2-64}{b^2-9}:\dfrac{a^2+16a+64}{b^2-6b+9}$

Výsledek: ||a) rs-5s²=-s(5s-r), 2r+6s=2(r+3s) → -2s, podmínky r≠5s, r≠-3s; b) 1-4/x²=(x-2)(x+2)/x², 2x/(x-2)+x=x²/(x-2) → x+2, podmínky x≠0, x≠2; c) po rozkladu a krácení: -v(u-v)/u, podmínky u≠0, u≠±v; d) (y-x)(y+x)/y = (y²-x²)/y, podmínka y≠0; e) (x-3)²/(y(x-3)) · 2y/((x-3)(x+3)) = 2/(x+3), podmínky y≠0, x≠±3; f) (x+y)/(xy) ÷ (y-x)/(xy) = (x+y)/(y-x), podmínky x≠0, y≠0, x≠y; g) -(u+2) ÷ (u+2)/u² = -u², podmínky u≠±2; h) (a-8)(a+8)/((b-3)(b+3)) · (b-3)²/(a+8)² = (a-8)(b-3)/[(a+8)(b+3)], podmínky a≠-8, b≠±3||

## Zdroje

Zdrojový dokument: *mat/lomené_výrazy_shrnutí.pdf*
