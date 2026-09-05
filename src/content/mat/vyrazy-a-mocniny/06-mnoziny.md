---
title: "Množiny"
order: 6
source: "mat2/Množiny.pdf"
hasExercises: true
---

**Množinou** rozumíme souhrn nějakých předmětů (objektů). Předměty, jejichž souhrn vytváří danou množinu, nazýváme **prvky** (elementy) této množiny.

K vyjádření, že $x$ je prvkem množiny $A$, používáme zápis $x\in A$; že $x$ není prvkem $A$, zapisujeme $x\notin A$.

## Zápis množiny

Množinu určujeme buď **výčtem prvků**, nebo **charakteristickou vlastností** jejích prvků.

Při výčtu prvků nezáleží na pořadí a každý prvek musí být uveden právě jednou. Množinu obsahující čísla 1, 2, 3 lze zapsat $A=\{1,2,3\}$, ale stejně dobře i $A=\{2,3,1\}$ nebo $A=\{3,1,2\}$.

**Prázdná množina** neobsahuje žádný prvek, značíme ji $\emptyset$. Příkladem je množina všech přirozených čísel menších než 1 (žádné přirozené číslo touto vlastností nedisponuje).

Určujeme-li množinu charakteristickou vlastností, uvádíme takovou vlastnost, kterou mají **všechny** prvky dané množiny a **žádný jiný** prvek ji nemá. Např. $A=\{1,2,3\}$ lze zapsat i jako:

$$A = \{x\in\mathbb{N};\ x<4\}$$

Množiny s nekonečně mnoha prvky (např. $C=\{x\in\mathbb{N};\ x>3\}$) lze zapsat **jen** charakteristickou vlastností — výčet by nikdy neskončil.

Množina s konečným počtem prvků se nazývá **konečná**, s nekonečným počtem **nekonečná**. Mezi nekonečné množiny patří $\mathbb{N}$ (přirozená čísla), $\mathbb{Z}$ (celá čísla), $\mathbb{Q}$ (racionální čísla) a $\mathbb{R}$ (reálná čísla) — ale i množina $A=\{x\in\mathbb{R};\ 1\leq x\leq2\}$ je nekonečná (obsahuje nekonečně mnoho reálných čísel mezi 1 a 2).

## Podmnožina

Množina $B$ je **podmnožinou** množiny $A$ (zapisujeme $B\subset A$) právě tehdy, když je každý prvek množiny $B$ zároveň prvkem množiny $A$.

$$\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}$$

Vždy platí: 1) $A\subset A$ (množina je podmnožinou sama sebe); 2) $\emptyset\subset A$ (prázdná množina je podmnožinou libovolné množiny).

Je nutné rozlišovat **prvky** množiny a její **podmnožiny**. Pro $A=\{1,2,3\}$ jsou $1,2,3$ jejími prvky, zatímco např. $\{1\}$, $\{2\}$, $\{1,2\}$ jsou jejími podmnožinami.

**Příklad:** Zapište všechny podmnožiny množiny $A=\{1,2,3\}$.

Výsledek: ||∅, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3} — celkem 8 podmnožin (obecně má množina o n prvcích 2ⁿ podmnožin, zde 2³=8)||

## Rovnost množin

Množiny $A$, $B$ se rovnají ($A=B$) právě tehdy, když je každý prvek $A$ zároveň prvkem $B$ **a zároveň** každý prvek $B$ je prvkem $A$.

## Doplněk množiny

Je-li $B$ podmnožinou $A$, definujeme **doplněk množiny $B$ v množině $A$** (zapisujeme $B'$, případně $A\setminus B$) jako množinu všech prvků z $A$, které nepatří do $B$.

**Příklad:** Určete doplněk množin $A=\{x\in\mathbb{Z};\ x<1\}$, $B=\{x\in\mathbb{Z};\ |x|>0\}$ a $\mathbb{N}$ v množině $\mathbb{Z}$.

Výsledek: ||A' = {x∈ℤ; x≥1} (celá čísla, která NEJSOU menší než 1); B = ℤ\{0} (nenulová celá čísla), tedy B' = {0}; ℕ' = {x∈ℤ; x≤0} (nekladná celá čísla — používáme konvenci ℕ={1,2,3,...} bez nuly, viz úvodní příklad prázdné množiny)||

## Průnik množin

**Průnik** množin $A$, $B$ (zapisujeme $A\cap B$) je množina všech prvků, které patří **zároveň** do obou množin. Vždy platí $\emptyset\cap A=\emptyset$. Pokud $A\cap B=\emptyset$, nazýváme množiny $A$, $B$ **disjunktní**.

**Příklad:** Určete průnik množin $A$, $B$:

1. $A=\{1,2,5,8\}$, $B=\{1,3,5,7\}$
2. $A=\{x\in\mathbb{N};\ x>2\}$, $B=\{x\in\mathbb{N};\ x<7\}$
3. $A=\{x\in\mathbb{Z};\ x>-3\}$, $B=\{x\in\mathbb{Z};\ x>-5\}$

Výsledek: ||1) A∩B={1,5}; 2) A∩B={3,4,5,6} = {x∈ℕ; 2<x<7}; 3) protože x>-3 vždy implikuje x>-5, je A⊂B, tedy A∩B=A={x∈ℤ; x>-3}||

## Sjednocení množin

**Sjednocení** množin $A$, $B$ (zapisujeme $A\cup B$) je množina všech prvků, které patří alespoň do jedné z množin $A$, $B$.

**Příklad:** Určete sjednocení množin ze stejného zadání jako výše.

Výsledek: ||1) A∪B={1,2,3,5,7,8}; 2) každé přirozené číslo je buď >2, nebo <7 (nebo obojí) — sjednocení je celé ℕ; 3) protože A⊂B, je A∪B=B={x∈ℤ; x>-5}||

## Rozdíl množin

**Rozdíl** množin $A$, $B$ (zapisujeme $A\setminus B$) je množina všech prvků množiny $A$, které nejsou prvky množiny $B$.

**Příklad:** Určete rozdíl $A\setminus B$ ze stejného zadání jako výše.

Výsledek: ||1) A\\B={2,8}; 2) A\\B={x∈ℕ; x>6} (prvky A, které nejsou v B — tedy přirozená čísla větší než 2, která zároveň nejsou menší než 7); 3) protože A⊂B, je A\\B=∅ (každý prvek A je i v B, nezbude nic)||

## Zdroje

Zdrojový dokument: *mat2/Množiny.pdf*
