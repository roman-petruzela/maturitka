---
title: "Trojúhelník – obecný"
order: 4
source: "matematika/TY01_0114 Trojúhelník – obecný.pdf"
hasExercises: true
---

> Pozn. k obsahu: Vzorce v PDF byly vysázené jako obrázky (unicode zlomky), text a výsledky úkolů se ale dochovaly celé — vzorce jsou zde přepsané do LaTeXu, výsledky do spoilerů, čísla stránek odstraněna.

**Obecný trojúhelník** může být rovnostranný, rovnoramenný, různostranný, pravoúhlý, ostroúhlý nebo tupoúhlý — vzorce v této kapitole platí pro trojúhelník úplně obecně.

## Základní vzorce

**1) Obvod trojúhelníku:** součet délek stran, $o = a+b+c$

**2a) Obsah trojúhelníku pomocí strany a výšky (kolmice) na tuto stranu:**

$$S = \frac{a\cdot v_a}{2} = \frac{b\cdot v_b}{2} = \frac{c\cdot v_c}{2}$$

**Pozn.:** v pravoúhlém trojúhelníku je strana $a$ zároveň výškou na stranu $b$ a strana $b$ výškou na stranu $a$ — proto platí $S=\dfrac{a\cdot b}{2}$. Pravoúhlý trojúhelník je vlastně polovina obdélníku (u rovnoramenného pravoúhlého polovina čtverce).

```geometry
{
  "points": { "A": [2, 4], "B": [0, 0], "C": [6, 0], "H": [2, 0] },
  "hiddenPoints": ["H"],
  "segments": [
    { "from": "B", "to": "C", "label": "a" },
    { "from": "A", "to": "B" },
    { "from": "A", "to": "C" },
    { "from": "A", "to": "H", "dashed": true, "label": "v_a" }
  ],
  "angles": [{ "at": "H", "from": "A", "to": "C", "rightAngle": true }],
  "title": "Obsah pomocí strany a a výšky v_a"
}
```

**2b) Obsah trojúhelníku pomocí všech stran — Heronův vzorec:**

$$S = \sqrt{s(s-a)(s-b)(s-c)}, \qquad \text{kde } s=\frac{a+b+c}{2} \text{ (poloviční obvod)}$$

**2c) Obsah trojúhelníku pomocí dvou stran a úhlu, který svírají:**

$$S = \frac12 ab\sin\gamma = \frac12 ac\sin\beta = \frac12 bc\sin\alpha$$

## Další vzorce

$$r = \frac{abc}{4S} \quad\text{— poloměr kružnice opsané (pomocí všech stran a obsahu trojúhelníku)}$$

$$\rho = \frac{S}{s} \quad\text{— poloměr kružnice vepsané (pomocí obsahu a polovičního obvodu)}$$

## Úkol 1

Sestrojte trojúhelník ABC o stranách $a=5\text{ cm}, b=7\text{ cm}, c=9\text{ cm}$.

**a)** Vypočítejte obvod trojúhelníku.

Výsledek: ||o = 5+7+9 = 21 cm||

**b)** Zakreslete všechny výšky (kolmice na protější strany). Změřte jejich velikosti (na 1 desetinné místo) a pomocí vzorce $S=\frac{a v_a}2$ (resp. $\frac{b v_b}2$, $\frac{c v_c}2$) vypočítejte obsah trojúhelníku pro každý vzorec zvlášť a výsledky porovnejte.

Výsledek: ||S ≈ 17,5 cm² (přesná hodnota s drobnou odchylkou danou nepřesností ručního měření výšek — viz přesný výpočet Heronovým vzorcem níže)||

**c)** K výpočtu obsahu použijte Heronův vzorec a výsledek porovnejte s částí b).

Výsledek: ||s = (5+7+9)/2 = 10,5; S = √(10,5·5,5·3,5·1,5) = √303,1875 ≈ 17,41 cm² — velmi blízko ručně naměřenému výsledku, drobný rozdíl je dán nepřesností měření výšek pravítkem||

## Úkol 2

Sestrojte trojúhelník ABC o stranách $a=6\text{ cm}, b=8\text{ cm}$ a úhlu $\gamma=60°$ mezi nimi. Vypočítejte obsah tohoto trojúhelníku.

Výsledek: ||S = ½·a·b·sin γ = ½·6·8·sin60° = 24·(√3/2) ≈ 20,78 cm²||

## Úkol 3

Sestrojte trojúhelník ABC o stranách $a=3\text{ cm}, b=4\text{ cm}, c=6\text{ cm}$. Vypočítejte poloměr kružnice opsané ($r$) a vepsané ($\rho$) tomuto trojúhelníku.

Výsledek:

- ||nejprve obsah Heronovým vzorcem: s=6,5; S=√(6,5·3,5·2,5·0,5)=√28,4375≈5,332 cm²||
- ||r = abc/(4S) = 3·4·6/(4·5,332) = 72/21,328 ≈ 3,38 cm||
- ||ρ = S/s = 5,332/6,5 ≈ 0,82 cm||
