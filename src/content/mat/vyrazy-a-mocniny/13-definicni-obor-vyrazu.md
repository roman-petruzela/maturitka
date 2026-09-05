---
title: "Definiční obor výrazů"
order: 13
source: "mat/definiční_obor_výrazů.pdf"
hasExercises: true
---

> Pozn. k obsahu: Konkrétní výrazy v příkladech 1 a 3 se z PDF vytratily (dochovaly se jen výpočty a výsledky, ze kterých byly zpětně rekonstruovány) a samostatné úkoly na konci byly zcela prázdné (jen nadpis) — doplněny vlastní příklady navazující na stejné čtyři typy podmínek probrané výše.

**Výraz** obsahuje matematické operace ($+,-,\cdot,\div,\sqrt{\ },\dots$), čísla (konstanty) a písmena (proměnné). Příklady výrazů: $1+1$, $a-b$, $\pi+a$, $\sqrt{x-3}$, $\dfrac{x+4}{y}$.

**Co není výraz?** Výraz **neobsahuje** rovnosti ani nerovnosti ($=,<,>$):

- $x+4=5$ — to není výraz, ale **rovnice**.
- $a-4>b+6$ — to není výraz, ale **nerovnice**.

## Definiční obor výrazu

**Definičním oborem** výrazu rozumíme množinu všech čísel, pro která dokážeme výraz spočítat (určit jeho hodnotu). Musíme dát pozor na operace, které nejdou provést se všemi čísly — nelze dělit nulou, nelze odmocnit záporné číslo (v oboru reálných čísel) apod.

**Příklad 1:** Určete definiční obor výrazu $\dfrac{x}{x+3}$ a určete jeho hodnotu pro $x=-4;-3;-2;0;1$.

Musíme dát pozor na dělení nulou: $x+3\neq0 \implies x\neq-3 \implies D(v)=\mathbb{R}\setminus\{-3\}$.

Výpočet hodnot výrazu: pro $x=-4$: $\dfrac{-4}{-1}=4$; pro $x=-3$: **nelze spočítat** ($-3\notin D(v)$, dělili bychom nulou); pro $x=-2$: $\dfrac{-2}{1}=-2$; pro $x=0$: $\dfrac{0}{3}=0$; pro $x=1$: $\dfrac14=0{,}25$.

**Příklad 2:** Určete definiční obor výrazu $\sqrt{x+7}$ a určete jeho hodnotu pro $x=-10;-1;0;9$.

Ve výrazu musíme dát pozor na odmocninu: $x+7\geq0 \implies x\geq-7 \implies D(v)=\langle-7;\infty)$.

Výpočet hodnot výrazu: pro $x=-10$: $\sqrt{-10+7}=\sqrt{-3}$ — **nelze spočítat**, neměli jsme dosazovat $-10$, protože není v definičním oboru; pro $x=-1$: $\sqrt6\approx2{,}449$; pro $x=0$: $\sqrt7\approx2{,}646$; pro $x=9$: $\sqrt{16}=4$.

**Příklad 3:** Určete definiční obor výrazu $\dfrac{\sqrt{a-3}}{a-4}$.

Musíme dát pozor na odmocninu **i** na dělení nulou: $a-3\geq0 \implies a\geq3$ a zároveň $a-4\neq0 \implies a\neq4$.

$$D(v) = \langle3;4)\cup(4;\infty) \quad \text{(spojení obou podmínek)}$$

**Příklad 4:** Určete definiční obor výrazu $\dfrac{1}{c^2-1}$.

Musíme dát pozor na dělení nulou: $c^2-1\neq0 \implies (c-1)(c+1)\neq0 \implies c\neq1,\ c\neq-1 \implies D(v)=\mathbb{R}\setminus\{-1;1\}$.

**Příklad 5:** Určete definiční obor výrazu $\dfrac{k+2}{k^2+1}$.

Musíme dát pozor na dělení nulou: $k^2+1\neq0 \implies k^2\neq-1$. Protože $k^2\geq0$ pro každé reálné $k$, je $k^2+1\geq1$ — výraz $k^2+1$ se **nikdy** nebude rovnat nule.

$$D(v) = \mathbb{R}$$

## Samostatné úkoly

Určete definiční obory výrazů:

a) $\dfrac{y}{y-5}$   b) $\sqrt{2x-6}$   c) $\dfrac{\sqrt{t+1}}{t-2}$   d) $\dfrac{5}{m^2-9}$   e) $\dfrac{3}{n^2+4}$

Výsledek: ||a) y-5≠0 → D(v)=ℝ\{5}; b) 2x-6≥0 → x≥3 → D(v)=⟨3;∞); c) t+1≥0 (t≥-1) a t-2≠0 (t≠2) → D(v)=⟨-1;2)∪(2;∞); d) m²-9≠0 → (m-3)(m+3)≠0 → m≠±3 → D(v)=ℝ\{-3;3}; e) n²+4≥4>0 vždy → D(v)=ℝ||

## Zdroje

Upraveno z: realisticky.cz — *Výrazy, definiční obor* (01 Matematika SŠ, 01 Základní poznatky, 07 Výrazy).
