---
title: "Intervaly"
order: 8
source: "mat2/Intervaly.pdf"
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

$$\{x\in\mathbb{R};-k\leq x\leq k\} = \langle -k;k\rangle \qquad \{x\in\mathbb{R};-k<x<k\} = (-k;k)$$

$$\{x\in\mathbb{R};-k\leq x<k\} = \langle -k;k) \qquad \{x\in\mathbb{R};-k<x\leq k\} = (-k;k\rangle$$

## Zdroje

Zdrojový dokument: *mat2/Intervaly.pdf*
