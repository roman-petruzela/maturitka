---
title: "Mocniny s přirozeným mocnitelem"
order: 10
source: "mat2/Mocniny s přirozeným mocnitelem.pdf"
hasExercises: true
---

> Pozn. k obsahu: Vzorce pro mocninový zápis velkých čísel a pravidla pro počítání s mocninami byly v PDF vysázené jako obrázky/vzorce a nedochovaly se — doplněny standardním zněním.

V matematice se snažíme o co nejstručnější zápisy. Součet $7+7+7+7+7$ zapíšeme jako součin $5\cdot7$. Podobně součin $7\cdot7\cdot7\cdot7\cdot7$ zapíšeme jako **mocninu** $7^5$.

Mocniny znali již staří Řekové. Současný zápis mocnin zavedl teprve francouzský matematik René Descartes v roce 1637 (viz [Kartézská soustava souřadnic](/mat/analyticka-geometrie/12-kartezska-soustava-souradnic/), kterou zavedl tentýž matematik).

Pro každé reálné číslo $a$ a každé přirozené číslo $n$ je:

$$a^n = \underbrace{a\cdot a\cdot a\cdots a}_{n\text{ činitelů}}$$

Výraz $a^n$ se nazývá **mocnina**, $a$ je **základ mocniny** (mocněnec), $n$ je **mocnitel** (exponent).

Z definice vyplývá:

1. Pro každé reálné číslo $a$ platí $a^1=a$.
2. Pro každé přirozené číslo $n$ platí $1^n=1$ a $0^n=0$.

## Znaménko mocniny

Je-li $a$ kladné reálné číslo, je mocnina $a^n$ vždy kladná.

Je-li $a$ záporné reálné číslo, záleží na tom, zda je mocnitel sudé, nebo liché číslo:

- Je-li mocnitel **sudý**, je mocnina součinem sudého počtu záporných činitelů, a je proto **kladná**.
- Je-li mocnitel **lichý**, je mocnina součinem lichého počtu záporných činitelů, a je proto **záporná**.

## Zápis velkých čísel

V matematice, přírodních a technických vědách často pracujeme s velmi velkými (nebo velmi malými) čísly, která zpravidla zapisujeme pomocí mocnin se základem 10 — tzv. **vědecký zápis**:

$$a\cdot10^n, \qquad \text{kde } 1\leq a<10,\ n\in\mathbb{Z}$$

Např. vzdálenost Země od Slunce $\approx1{,}496\cdot10^{8}\text{ km}$, hmotnost elektronu $\approx9{,}109\cdot10^{-31}\text{ kg}$.

## Pravidla pro počítání s mocninami

Pro každé reálné číslo $a\neq0$ a každá přirozená čísla $r$, $s$ platí:

$$a^r\cdot a^s = a^{r+s}$$

$$\frac{a^r}{a^s} = a^{r-s}\ (r>s)$$

$$(a^r)^s = a^{r\cdot s}$$

Pro každá dvě reálná čísla $a$, $b$ a každé přirozené číslo $r$ platí:

$$(a\cdot b)^r = a^r\cdot b^r$$

$$\left(\frac{a}{b}\right)^r = \frac{a^r}{b^r}\ (b\neq0)$$

## Příklady na procvičení

**1.** Vypočítejte:

a) $(-2)^5$
b) $(-3)^4$
c) $-3^4$
d) $\left(\frac12\right)^3$

Výsledek: ||a) $-32$, b) $81$, c) $-81$ (mocní se jen trojka, minus zůstává před ní), d) $\frac18$||

**2.** Bez počítání určete znaménko čísel $(-7)^{103}$ a $(-0{,}5)^{20}$.

Výsledek: ||$(-7)^{103}$ je záporné (lichý mocnitel), $(-0{,}5)^{20}$ je kladné (sudý mocnitel)||

**3.** Zjednodušte ($x, y \neq 0$):

a) $a^3\cdot a^5$
b) $\dfrac{x^7}{x^3}$
c) $(y^2)^4$
d) $(2ab^2)^3$

Výsledek: ||a) $a^8$, b) $x^4$, c) $y^8$, d) $8a^3b^6$||

**4.** Zjednodušte $(3x^2y)^2\cdot 2xy^3$.

Výsledek: ||$9x^4y^2\cdot2xy^3 = 18x^5y^5$||

**5.** Vypočítejte bez kalkulačky: a) $\dfrac{2^{10}}{2^7}$, b) $\dfrac{5^3\cdot5^2}{5^4}$.

Výsledek: ||a) $2^3 = 8$, b) $5^{3+2-4} = 5$||

**6.** Zapište ve vědeckém tvaru: a) $4\,500\,000$, b) $0{,}000\,72$.

Výsledek: ||a) $4{,}5\cdot10^6$, b) $7{,}2\cdot10^{-4}$||

## Zdroje

Zdrojový dokument: *mat2/Mocniny s přirozeným mocnitelem.pdf*
