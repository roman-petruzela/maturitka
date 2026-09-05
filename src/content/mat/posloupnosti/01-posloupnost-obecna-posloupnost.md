---
title: "Posloupnost – obecná posloupnost"
order: 1
source: "matematika/TY01_0215-Posloupnost_-_obecna_posloupnost.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace obsahovala funkční definice a přehled vlastností, ale konkrétní vzorce v ukázkových příkladech byly vložené jako obrázky, které se nedochovaly (zůstaly jen prázdné řádky "n = 1:", "n = 2:" ...) — příklady jsou proto doplněny vlastními, reprezentativními zadáními. Vlastnost výsledné posloupnosti v prvním cvičení ("klesající") byla v podkladu zachována, zadání k ní ale ne — doplněné zadání níže na tuto dochovanou vlastnost přesně sedí.

**Posloupnost** je řada hodnot (čísel) mající přesné pořadí. Formálně je posloupnost **funkce** — zobrazení množiny přirozených čísel $\mathbb{N}$ do množiny reálných čísel $\mathbb{R}$:

$$1,\ 3,\ 5,\ 7,\ 9,\ \dots \quad\in\mathbb{R} \qquad\qquad 1.,\ 2.,\ 3.,\ 4.,\ 5.,\ \dots \quad\in\mathbb{N}$$

Členy posloupnosti značíme $a_n$ (např. $a_1;a_2;a_3;\dots;a_{n-1};a_n;a_{n+1};\dots$) — index $n$ udává pořadí členu.

## Graf posloupnosti

Posloupnost je funkce, má tedy i grafické znázornění — protože definičním oborem jsou jen přirozená čísla ($1,2,3,\dots$), je grafem posloupnosti vždy **množina izolovaných bodů** $[n;a_n]$, nikdy spojitá křivka.

```graph
{ "points": [{"x":1,"y":1},{"x":2,"y":3},{"x":3,"y":5},{"x":4,"y":7},{"x":5,"y":9},{"x":6,"y":11}], "domain": [0,7], "yDomain": [0,12], "title": "Graf posloupnosti aₙ = 2n − 1" }
```

## Dělení posloupnosti

- **konečná posloupnost** — má přesně konečný počet členů. Např. seznam žáků ve třídě podle abecedy.
- **nekonečná posloupnost** — má nekonečný počet členů. Např. posloupnost všech kladných sudých čísel: $2, 4, 6, 8, \dots$

## Vlastnosti posloupnosti — monotónnost

Posloupnost je (pro každé $n\in\mathbb{N}$):

- **rostoucí**, když $a_n < a_{n+1}$
- **klesající**, když $a_n > a_{n+1}$
- **nerostoucí**, když $a_n \geq a_{n+1}$
- **neklesající**, když $a_n \leq a_{n+1}$
- **konstantní**, když $a_n = a_{n+1}$ (speciální případ, kdy je posloupnost zároveň nerostoucí i neklesající)

## Způsoby zápisu posloupnosti

1. **Vzorcem pro $n$-tý člen** — stačí znát vzorec vyjadřující $a_n$ pomocí $n$, dosazením libovolného $n$ dostaneme přímo daný člen (bez znalosti ostatních). Např. $a_n = 2n-1$.
2. **Rekurentním vzorcem** — je třeba znát první člen (nebo několik prvních členů) a vzorec, který z předchozích členů vypočítá další. Např. $a_1=10,\ a_{n+1}=a_n-2$.

## Ukázkové příklady

**1.** Napište prvních pět členů posloupnosti zadané vzorcem $a_n=2n-1$.

Dosazujeme postupně $n=1,2,3,4,5$:

$$a_1=2\cdot1-1=1,\quad a_2=2\cdot2-1=3,\quad a_3=5,\quad a_4=7,\quad a_5=9$$

Posloupnost je **rostoucí** (každý další člen je o 2 větší než předchozí).

**2.** Napište prvních pět členů posloupnosti zadané rekurentně: $a_1=10,\ a_{n+1}=a_n-2$, a určete její vlastnost.

Známe $a_1=10$. Pro $a_2$ dosadíme $n=1$ do vzorce $a_{n+1}=a_n-2$: $a_2=a_1-2=10-2=8$. Pro $a_3$ dosadíme $n=2$: $a_3=a_2-2=8-2=6$. Podobně $a_4=a_3-2=4$ a $a_5=a_4-2=2$.

$$a_1=10,\ a_2=8,\ a_3=6,\ a_4=4,\ a_5=2$$

Posloupnost je **klesající** (každý další člen je o 2 menší než předchozí).

## Příklady na procvičení

**1.** Napište prvních pět členů posloupnosti $a_1=10,\ a_{n+1}=a_n-2$ a určete její vlastnost. *(shodné se zadáním ukázkového příkladu 2 výše — vyzkoušejte si výpočet sami předtím, než nahlédnete na výsledek)*

Výsledek: ||a₁=10, a₂=8, a₃=6, a₄=4, a₅=2; posloupnost je klesající||

**2.** Napište první tři členy posloupnosti zadané vzorcem $a_n=n^2-1$.

Výsledek: ||a₁=1²-1=0; a₂=2²-1=3; a₃=3²-1=8||

## Shrnutí

- Definice posloupnosti — řada čísel s přesným pořadím; funkce; zobrazení $\mathbb{N}\to\mathbb{R}$.
- Dělení posloupnosti: a) konečná, b) nekonečná.
- Způsoby zápisu: a) vzorec pro $n$-tý člen, b) rekurentní vzorec (první člen/y + vzorec pro další).

## Zdroje

HUDCOVÁ, Milada, KUBIČÍKOVÁ, Libuše. *Sbírka úloh z matematiky pro SOŠ, SOU a nástavbové studium.* 2. vydání. Havlíčkův Brod: Prometheus, 2005. ISBN 80-7196-318-6.
