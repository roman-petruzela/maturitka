---
title: "Trojúhelník – pravoúhlý"
order: 3
source: "matematika/TY01_0113 Trojúhelník – pravoúhlý.pdf"
hasExercises: true
---

> Pozn. k obsahu: Vzorce v PDF byly vysázené jako obrázky (unicode zlomky), text a výsledky úkolů se ale dochovaly celé — vzorce jsou zde přepsané do LaTeXu, výsledky do spoilerů, čísla stránek odstraněna.

**Pravoúhlý trojúhelník** je trojúhelník, jehož jeden vnitřní úhel je pravý ($90°$).

**Pozn.:** neoznačený trojúhelník značíme obecně ABC; pokud není určeno, u kterého vrcholu má být pravý úhel, píše se obecně u vrcholu C. Ne všechny trojúhelníky v úlohách ale musí mít pravý úhel zrovna u C — vždy je potřeba se řídit konkrétním zadáním!

**Co všechno můžeme na pravoúhlém trojúhelníku používat?**

1. Pythagorovu větu
2. Goniometrické funkce ($\sin, \cos, \mathrm{tg}, \mathrm{cotg}$)
3. Euklidovy věty (o výšce, o odvěsnách)
4. Thaletovu kružnici

## 1) Pythagorova věta

**Pythagoras** (asi 570 př. n. l. – po 510 př. n. l.) — řecký filosof, matematik a astronom.

**Znění:** „Součet obsahů čtverců nad odvěsnami pravoúhlého trojúhelníku se rovná obsahu čtverce nad přeponou."

$$c^2 = a^2+b^2$$

kde strana $c$ je **přepona** (leží vždy naproti pravému úhlu) a strany $a, b$ jsou **odvěsny**.

## Úkol 1

Vypočítejte velikost druhé odvěsny v pravoúhlém trojúhelníku ABC s pravým úhlem při vrcholu C, když víte: $a=6\text{ cm}, c=12\text{ cm}$.

Výsledek: ||b² = c² − a² = 144 − 36 = 108, b = √108 ≈ 10,39 cm||

## Úkol 2

Máme oplocenou zahradu tvaru čtverce ABCD o straně délky 50 m. Vypočítejte, o kolik kroků (1 krok = 70 cm) uděláte méně, jestliže půjdete přímo z A do C, než z A do C přes B (zaokrouhlete na celé kroky).

Výsledek: ||úhlopříčka AC = 50√2 ≈ 70,71 m, cesta přes B = 50+50 = 100 m, rozdíl = 29,29 m = 2929 cm, / 70 cm ≈ 41,84 → asi o 42 kroků méně||

## 2) Goniometrické funkce — sin, cos, tg, cotg

$$\sin\alpha = \frac{\text{protilehlá}}{\text{přepona}} = \frac{a}{c}, \qquad \cos\alpha = \frac{\text{přilehlá}}{\text{přepona}} = \frac{b}{c}$$

$$\mathrm{tg}\,\alpha = \frac{\text{protilehlá}}{\text{přilehlá}} = \frac{a}{b}, \qquad \mathrm{cotg}\,\alpha = \frac{\text{přilehlá}}{\text{protilehlá}} = \frac{b}{a}$$

**Pozn.:** pozor, při úhlu $\beta$ (u vrcholu B) je naopak strana $b$ protilehlá tomuto úhlu a strana $a$ přilehlá.

**Pozn.:** funkce $\mathrm{cotg}$ se v praxi na řešení příkladů moc nepoužívá, protože ji nenajdeme přímo na běžné kalkulačce (počítá se jako $1/\mathrm{tg}$).

## Úkol 3

Vypočítejte velikost strany $c$ v pravoúhlém trojúhelníku ABC s pravým úhlem při vrcholu C, když víte: $a=6\text{ cm}$ a úhel $\alpha=30°$.

Výsledek: ||sin α = a/c, tedy c = a / sin α = 6 / sin 30° = 6 / 0,5 = 12 cm||

## Úkol 4

Vypočítejte velikost zbývajících stran pravoúhlého trojúhelníku ABC s pravým úhlem při vrcholu C, když víte: $c=8\text{ cm}$ a úhel $\beta=48°$.

Výsledek: ||b = c·sin β = 8·sin48° ≈ 5,95 cm;  a = c·cos β = 8·cos48° ≈ 5,35 cm||

## Úkol 5

Vypočítejte velikost úhlu $\alpha$ v pravoúhlém trojúhelníku ABC s pravým úhlem při vrcholu C, když víte: $a=6\text{ cm}$ a $b=9\text{ cm}$.

Výsledek: ||tg α = a/b = 6/9 ≈ 0,6667, α = arctg(0,6667) ≈ 33°41'24''||

## 3) Euklidovy věty — o výšce, o odvěsnách

**Euklides** (asi 325 př. n. l. – asi 260 př. n. l.) — řecký matematik a geometr.

Pro pravoúhlý trojúhelník s výškou $v_c$ na přeponu $c$, která ji rozděluje na úseky $c_a$ (u vrcholu A) a $c_b$ (u vrcholu B), platí $c=c_a+c_b$ a:

**Euklidova věta o výšce:** $\qquad v_c^2 = c_a \cdot c_b$

**Euklidova věta o odvěsnách:** $\qquad a^2 = c\cdot c_a, \qquad b^2 = c\cdot c_b$

## Úkol 6

Vypočítejte v trojúhelníku ABC velikost výšky na stranu $c$, jestliže znáte: $c=12\text{ cm}$ a úsek $c_a=4\text{ cm}$.

Výsledek: ||c_b = c − c_a = 12 − 4 = 8 cm; v_c² = c_a·c_b = 4·8 = 32, v_c = √32 ≈ 5,66 cm||

## Úkol 7

Vypočítejte v trojúhelníku ABC velikost strany $a$, jestliže znáte: $v_c=6\text{ cm}$ a $c_b=4\text{ cm}$.

Výsledek: ||z věty o výšce: c_a = v_c²/c_b = 36/4 = 9 cm, tedy c = c_a+c_b = 13 cm. Z věty o odvěsnách: a² = c·c_a = 13·9 = 117, a = √117 ≈ 10,82 cm||

## 4) Thaletova kružnice

Sestrojíme-li kružnici $k$ se středem $S$, který je středem úsečky $AB$ (tedy s průměrem $AB$), pak v **každém** bodě ležícím na kružnici $k$, který spolu s body $A$ a $B$ tvoří trojúhelník, bude u tohoto bodu **pravý úhel**.

Toto je užitečný nástroj pro konstrukci pravoúhlých trojúhelníků a pro důkazy v planimetrii.
