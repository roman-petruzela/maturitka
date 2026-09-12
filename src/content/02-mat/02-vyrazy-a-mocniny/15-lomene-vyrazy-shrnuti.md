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

**a)** $p=3$

Výsledek: ||$\dfrac{81+9-9}{9-1} = \dfrac{81}{8} = 10{,}125$||

**b)** $p=-2$

Výsledek: ||$\dfrac{16+4+6}{4-1} = \dfrac{26}{3} \approx 8{,}667$||

**c)** $p=1$

Výsledek: ||jmenovatel $p^2-1=0$ → NELZE dosadit, $p=1$ není v definičním oboru výrazu||

## 2. Podmínky platnosti a krácení

Určete podmínky platnosti výrazu a výraz zkraťte (u příkladů b, d, e použijte vzorce pro rozdíl/součet čtverců a součet/rozdíl kostek):

**a)** $\dfrac{x^2-y^2}{x^2-xy}$

Výsledek: ||$x^2-y^2=(x-y)(x+y)$, $x^2-xy=x(x-y)$ → $\dfrac{x+y}{x}$, podmínky $x\neq0,\ x\neq y$||

**b)** $\dfrac{16+8a+a^2}{8+2a}$

Výsledek: ||$16+8a+a^2=(a+4)^2$, $8+2a=2(a+4)$ → $\dfrac{a+4}{2}$, podmínka $a\neq-4$||

**c)** $\dfrac{8b^2-72c^2}{3cy+by}$

Výsledek: ||$8b^2-72c^2=8(b-3c)(b+3c)$, $3cy+by=y(b+3c)$ → $\dfrac{8(b-3c)}{y}$, podmínky $y\neq0,\ b\neq-3c$||

**d)** $\dfrac{8u^3+27v^3}{4u^2-9v^2}$

Výsledek: ||součet kostek $8u^3+27v^3=(2u+3v)(4u^2-6uv+9v^2)$, rozdíl čtverců $4u^2-9v^2=(2u-3v)(2u+3v)$ → $\dfrac{4u^2-6uv+9v^2}{2u-3v}$, podmínky $u\neq\tfrac{3v}2,\ u\neq-\tfrac{3v}2$||

**e)** $\dfrac{a^2+4a+16}{a^3-64}$

Výsledek: ||rozdíl kostek $a^3-64=(a-4)(a^2+4a+16)$ → $\dfrac{1}{a-4}$, podmínka $a\neq4$||

## 3. Sčítání a odčítání

Sečtěte výrazy:

**a)** $\dfrac{2x}{x^2-1}+\dfrac{1}{x-1}-\dfrac{3x}{x+1}$

Výsledek: ||společný jmenovatel $(x-1)(x+1)$: $\dfrac{2x+(x+1)-3x(x-1)}{x^2-1} = \dfrac{-3x^2+6x+1}{x^2-1}$, podmínky $x\neq\pm1$||

**b)** $\dfrac{2}{x-1}-\dfrac{x^2+x+1}{x^3-1}$

Výsledek: ||$x^3-1=(x-1)(x^2+x+1)$, po úpravě zbyde $\dfrac{1}{x-1}$, podmínka $x\neq1$||

**c)** $\dfrac{1}{2u}-\dfrac{5}{6u}+\dfrac{u-1}{u^2+u}$

Výsledek: ||společný jmenovatel $6u(u+1)$: $\dfrac{3(u+1)-5(u+1)+6(u-1)}{6u(u+1)} = \dfrac{4u-8}{6u(u+1)} = \dfrac{2(u-2)}{3u(u+1)}$, podmínky $u\neq0,\ u\neq-1$||

**d)** $\dfrac{a+1}{a-1}-\dfrac{a-1}{a+1}$

Výsledek: ||společný jmenovatel $a^2-1$: $\dfrac{(a+1)^2-(a-1)^2}{a^2-1} = \dfrac{4a}{a^2-1}$, podmínky $a\neq\pm1$||

## 4. Násobení a dělení

Vypočítejte:

**a)** $\dfrac{rs-5s^2}{5s-r}\cdot\dfrac{2r+6s}{3s+r}$

Výsledek: ||$rs-5s^2=-s(5s-r)$, $2r+6s=2(r+3s)$ → $-2s$, podmínky $r\neq5s,\ r\neq-3s$||

**b)** $\left(1-\dfrac4{x^2}\right)\cdot\left(\dfrac{2x}{x-2}+x\right)$

Výsledek: ||$1-\dfrac4{x^2}=\dfrac{(x-2)(x+2)}{x^2}$, $\dfrac{2x}{x-2}+x=\dfrac{x^2}{x-2}$ → $x+2$, podmínky $x\neq0,\ x\neq2$||

**c)** $\dfrac{(u-v)^3}{uv-u^2}\cdot\dfrac{v^2+uv}{u^2-v^2}$

Výsledek: ||po rozkladu a krácení: $-\dfrac{v(u-v)}{u}$, podmínky $u\neq0,\ u\neq\pm v$||

**d)** $(y-x)\cdot\left(1+\dfrac xy\right)$

Výsledek: ||$\dfrac{(y-x)(y+x)}{y} = \dfrac{y^2-x^2}{y}$, podmínka $y\neq0$||

**e)** $\dfrac{x^2-6x+9}{xy-3y}:\dfrac{x^2-9}{2y}$

Výsledek: ||$\dfrac{(x-3)^2}{y(x-3)} \cdot \dfrac{2y}{(x-3)(x+3)} = \dfrac{2}{x+3}$, podmínky $y\neq0,\ x\neq\pm3$||

**f)** $\left(\dfrac1x+\dfrac1y\right):\left(\dfrac1x-\dfrac1y\right)$

Výsledek: ||$\dfrac{x+y}{xy} \div \dfrac{y-x}{xy} = \dfrac{x+y}{y-x}$, podmínky $x\neq0,\ y\neq0,\ x\neq y$||

**g)** $\dfrac{u^2-4}{2-u}:\dfrac{2+u}{u^2}$

Výsledek: ||$-(u+2) \div \dfrac{u+2}{u^2} = -u^2$, podmínky $u\neq\pm2$||

**h)** $\dfrac{a^2-64}{b^2-9}:\dfrac{a^2+16a+64}{b^2-6b+9}$

Výsledek: ||$\dfrac{(a-8)(a+8)}{(b-3)(b+3)} \cdot \dfrac{(b-3)^2}{(a+8)^2} = \dfrac{(a-8)(b-3)}{(a+8)(b+3)}$, podmínky $a\neq-8,\ b\neq\pm3$||

## Zdroje

Zdrojový dokument: *mat/lomené_výrazy_shrnutí.pdf*
