---
title: "Intervaly"
order: 8
source: "mat2/Intervaly.pdf"
hasExercises: true
---

> Pozn. k obsahu: Tabulka typů intervalů byla v PDF vysázená jako obrázek/vzorec a nedochovala se — doplněna standardním přehledem, provázaným s příkladem, který v textu zůstal.

Podmnožiny reálných čísel, které lze znázornit jako úsečku, polopřímku nebo přímku (přičemž jejich krajní body mohou, ale nemusí do dané množiny patřit), nazýváme **intervaly**. Čísla $a,b\in\mathbb{R}$ jsou meze intervalu — $a$ je **dolní mez**, $b$ **horní mez**.

## Ohraničené intervaly

| Zápis | Množinově | Typ |
|---|---|---|
| $\langle a;b\rangle$ | $\{x\in\mathbb{R};\ a\leq x\leq b\}$ | uzavřený (obsahuje oba krajní body) |
| $(a;b)$ | $\{x\in\mathbb{R};\ a<x<b\}$ | otevřený (neobsahuje žádný krajní bod) |
| $\langle a;b)$ | $\{x\in\mathbb{R};\ a\leq x<b\}$ | polouzavřený zleva (polootevřený zprava) |
| $(a;b\rangle$ | $\{x\in\mathbb{R};\ a<x\leq b\}$ | polouzavřený zprava (polootevřený zleva) |

## Neohraničené intervaly

| Zápis | Množinově |
|---|---|
| $(a;+\infty)$ | $\{x\in\mathbb{R};\ x>a\}$ |
| $\langle a;+\infty)$ | $\{x\in\mathbb{R};\ x\geq a\}$ |
| $(-\infty;b)$ | $\{x\in\mathbb{R};\ x<b\}$ |
| $(-\infty;b\rangle$ | $\{x\in\mathbb{R};\ x\leq b\}$ |
| $(-\infty;+\infty)$ | $\mathbb{R}$ (celá množina reálných čísel) |

**Pozn.:** krajní meze $\pm\infty$ nikdy nepatří do intervalu (nejsou to reálná čísla), proto se u nich vždy píše kulatá (otevřená) závorka.

**Příklad:** Zapište intervaly $\{x\in\mathbb{R};-k\leq x\leq k\}$, $\{x\in\mathbb{R};-k<x<k\}$, $\{x\in\mathbb{R};-k\leq x<k\}$ a $\{x\in\mathbb{R};-k<x\leq k\}$ v intervalovém tvaru.

$$\{x\in\mathbb{R};-k\leq x\leq k\} = \langle -k;k\rangle$$

$$\{x\in\mathbb{R};-k<x<k\} = (-k;k)$$

$$\{x\in\mathbb{R};-k\leq x<k\} = \langle -k;k)$$

$$\{x\in\mathbb{R};-k<x\leq k\} = (-k;k\rangle$$

## Příklady na procvičení

**1.** Zapište intervalem množinu všech reálných čísel $x$, pro která platí:

a) $x\geq-2$
b) $-1<x\leq4$
c) $x<0$

Výsledek: ||a) $\langle-2;+\infty)$, b) $(-1;4\rangle$, c) $(-\infty;0)$||

**2.** Zapište nerovnicí: a) $x\in(-3;5\rangle$, b) $x\in\langle7;+\infty)$.

Výsledek: ||a) $-3<x\leq5$, b) $x\geq7$||

**3.** Rozhodněte, která z čísel $-2;\ 0;\ 3;\ 3{,}5$ patří do intervalu $\langle-2;3)$.

Výsledek: ||$-2$ ano (závorka je uzavřená), $0$ ano, $3$ ne (závorka je otevřená), $3{,}5$ ne||

**4.** Vypište všechna celá čísla z intervalu $(-2{,}5;1\rangle$.

Výsledek: ||$-2;\ -1;\ 0;\ 1$||

**5.** Jsou dány intervaly $A=\langle-1;4)$ a $B=(2;6\rangle$. Určete $A\cap B$, $A\cup B$ a $A\setminus B$. Nakreslete si je na číselnou osu.

Výsledek: ||$A\cap B=(2;4)$, $A\cup B=\langle-1;6\rangle$, $A\setminus B=\langle-1;2\rangle$ (číslo 2 do $B$ nepatří, proto v rozdílu zůstává)||

**6.** Zapište intervalem množinu všech $x\in\mathbb{R}$, pro která a) $|x|\leq3$, b) $|x|>2$.

Výsledek: ||a) $\langle-3;3\rangle$, b) $(-\infty;-2)\cup(2;+\infty)$||

## Zdroje

Zdrojový dokument: *mat2/Intervaly.pdf*
