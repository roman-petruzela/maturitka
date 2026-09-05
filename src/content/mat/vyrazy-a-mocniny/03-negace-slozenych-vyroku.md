---
title: "Negace složených výroků"
order: 3
source: "mat2/Negace složených výroků.pdf"
hasExercises: true
---

Víme, že pokud je výrok $v$ nepravdivý, je jeho negace $\neg v$ pravdivá (a naopak) — viz [Výrok, negace výroku](/mat/vyrazy-a-mocniny/01-vyrok-negace-vyroku/). Nyní se podíváme na negaci **složených** výroků.

## Negace konjunkce

| $a$ | $b$ | $a\land b$ | $\neg(a\land b)$ | $\neg a$ | $\neg b$ |
|---|---|---|---|---|---|
| 1 | 1 | 1 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 |
| 0 | 0 | 0 | 1 | 1 | 1 |

Hledáme výrok složený z $a$, $b$, $\neg a$, $\neg b$, který má stejný sloupec pravdivostních hodnot jako $\neg(a\land b)$. V tomto sloupci jsou tři jedničky, což odpovídá disjunkci nebo implikaci dvou výroků; porovnáním se sloupci $\neg a$, $\neg b$ zjistíme, že hledaným výrokem je $\neg a\lor\neg b$.

$$\neg(a\land b) \iff (\neg a\lor\neg b)$$

## Negace disjunkce

| $a$ | $b$ | $a\lor b$ | $\neg(a\lor b)$ | $\neg a$ | $\neg b$ |
|---|---|---|---|---|---|
| 1 | 1 | 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 | 0 | 1 |
| 0 | 1 | 1 | 0 | 1 | 0 |
| 0 | 0 | 0 | 1 | 1 | 1 |

Ve sloupci $\neg(a\lor b)$ jsou tři nuly a jedna jednička — negací disjunkce tedy může být konjunkce; snadno ověříme, že je to konjunkce $\neg a\land\neg b$.

$$\neg(a\lor b) \iff (\neg a\land\neg b)$$

**Příklad:** Utvořte negace výroků:

- $u$: Číslo 72 je dělitelné dvěma a třemi.
- $v$: Mozart ani Beethoven nejsou čeští skladatelé.
- $w$: Válku s mloky napsal K. Čapek nebo A. Jirásek.

*Řešení:* Výrok $u$ je konjunkce výroků "Číslo 72 je dělitelné 2" a "Číslo 72 je dělitelné 3". Jeho negace: "Číslo 72 není dělitelné 2 nebo není dělitelné 3."

Výrok $v$ je konjunkce výroků "Mozart není český skladatel" a "Beethoven není český skladatel" (spojka "ani...ani" = konjunkce dvou negací). Jeho negace: "Mozart je český skladatel nebo Beethoven je český skladatel."

Výrok $w$ je disjunkce výroků "Válku s mloky napsal K. Čapek" a "Válku s mloky napsal A. Jirásek". Jeho negace: "Válku s mloky nenapsal ani K. Čapek, ani A. Jirásek."

## Negace implikace

| $a$ | $b$ | $a\Rightarrow b$ | $\neg(a\Rightarrow b)$ | $\neg a$ | $\neg b$ |
|---|---|---|---|---|---|
| 1 | 1 | 1 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 0 | 1 | 0 |
| 0 | 0 | 1 | 0 | 1 | 1 |

Ve sloupci $\neg(a\Rightarrow b)$ jsou tři nuly a jedna jednička — negace implikace by tedy mohla být konjunkce; zjistíme, že je to konjunkce $a\land\neg b$.

$$\neg(a\Rightarrow b) \iff (a\land\neg b)$$

**Příklad:** Utvořte negace výroků:

1. Je-li $\sqrt2$ číslo iracionální, je iracionální i číslo $1+\sqrt2$.
2. Je-li trojúhelník $ABC$ rovnostranný, pak je rovnoramenný.
3. Není-li číslo 5 přirozené, pak není ani číslo 1.

*Řešení:*

1. Číslo $\sqrt2$ je iracionální a zároveň číslo $1+\sqrt2$ není iracionální.
2. Trojúhelník $ABC$ je rovnostranný a zároveň není rovnoramenný.
3. Číslo 5 není přirozené a zároveň číslo 1 je přirozené.

Uvědomte si, že **negace implikace není implikace** — je to konjunkce!

## Negace ekvivalence

| $a$ | $b$ | $a\Leftrightarrow b$ | $\neg(a\Leftrightarrow b)$ | $\neg a$ | $\neg b$ |
|---|---|---|---|---|---|
| 1 | 1 | 1 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 |
| 0 | 0 | 1 | 0 | 1 | 1 |

V příslušném sloupci jsou dvě nuly a dvě jedničky — negací ekvivalence bude patrně opět ekvivalence. Negací ekvivalence $a\Leftrightarrow b$ je ekvivalence $\neg a\Leftrightarrow b$ (nebo rovnocenně $a\Leftrightarrow\neg b$).

**Příklad:** Určete negaci výroku "Číslo 158 je dělitelné šesti právě tehdy, když je dělitelné dvěma a třemi."

*Řešení:* Výrok je tvaru $a\Leftrightarrow(b\land c)$, kde $a$ = "Číslo 158 je dělitelné šesti", $b$ = "Číslo 158 je dělitelné dvěma", $c$ = "Číslo 158 je dělitelné třemi". Negace této ekvivalence je $a\Leftrightarrow\neg(b\land c)$, tedy $a\Leftrightarrow(\neg b\lor\neg c)$: "Číslo 158 je dělitelné šesti právě tehdy, když není dělitelné dvěma nebo není dělitelné třemi."

Jinou možností je vyslovit výrok ve tvaru $\neg a\Leftrightarrow(b\land c)$: "Číslo 158 není dělitelné šesti právě tehdy, když je dělitelné dvěma a zároveň třemi."

## Shrnutí vzorců

$$\neg(a\land b) = (\neg a\lor\neg b) \qquad \neg(a\lor b) = (\neg a\land\neg b)$$

$$\neg(a\Rightarrow b) = (a\land\neg b) \qquad \neg(a\Leftrightarrow b) = (\neg a\Leftrightarrow b) = (a\Leftrightarrow\neg b)$$

## Příklady

**1.** Negujte výroky:

1. Bod $B$ leží na kružnici $k$ nebo na přímce $p$.
2. Poslední cifra dekadického zápisu čísla $37^7$ není nula ani pětka.
3. Je-li ciferný součet čísla $37^7$ dělitelný třemi, je toto číslo dělitelné třemi.

Výsledek: ||1) disjunkce → negace je konjunkce negací: "Bod B neleží na kružnici k ani na přímce p." 2) je to už tvar ¬a∧¬b ("není nula ani pětka") → negace je disjunkce: "Poslední cifra čísla 37⁷ je nula nebo pětka." 3) implikace a⇒b → negace a∧¬b: "Ciferný součet čísla 37⁷ je dělitelný třemi a zároveň toto číslo není dělitelné třemi."||

**2.** Utvořte negace výroků (symbolicky):

1. $a\lor\neg b$
2. $a\Rightarrow\neg b$
3. $\neg a\Leftrightarrow\neg b$
4. $\neg a\land b$
5. $\neg a\Rightarrow b$
6. $\neg a\land\neg b$
7. $\neg a\lor\neg b$

Výsledek: ||1) ¬a∧b; 2) a∧b; 3) a⇔¬b (nebo ¬a⇔b); 4) a∨¬b; 5) ¬a∧¬b; 6) a∨b; 7) a∧b||

**3.** Utvořte negace výroků (symbolicky, $a$, $b$, $c$ jsou libovolné výroky):

1. $(a\land b)\Rightarrow c$
2. $a\Rightarrow(b\lor c)$
3. $(a\land c)\Leftrightarrow b$
4. $a\Leftrightarrow(b\Rightarrow c)$

Výsledek: ||1) (a∧b)∧¬c, tedy a∧b∧¬c; 2) a∧¬(b∨c), tedy a∧¬b∧¬c; 3) ¬(a∧c)⇔b, tedy (¬a∨¬c)⇔b; 4) ¬a⇔(b⇒c) (nebo a⇔(b∧¬c))||

## Zdroje

Zdrojový dokument: *mat2/Negace složených výroků.pdf*
