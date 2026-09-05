---
title: "Složené výroky - konjunkce a disjunkce"
order: 2
source: "mat2/Složené výroky - konjunkce a disjunkce.pdf"
hasExercises: true
---

**Složené výroky** jsou tvořeny dvěma a více jednoduchými výroky. Zajímá nás, jak závisí pravdivost složeného výroku na pravdivosti výroků, z nichž je utvořen. Nejdůležitější složené výroky jsou **konjunkce**, **disjunkce**, **implikace** a **ekvivalence** (poslední dvě viz [Implikace a ekvivalence](/mat/vyrazy-a-mocniny/05-implikace-a-ekvivalence/)).

## Konjunkce

**Konjunkce** libovolných výroků $a$, $b$ je výrok, který vznikne jejich spojením spojkou *a*. Zapisujeme $a\land b$, čteme "$a$ a zároveň $b$".

**Příklad:** $a$: Číslo 5 je prvočíslo. $b$: Číslo 5 je sudé. $c$: Číslo 5 je liché. $d$: Číslo 5 je záporné.

$a\land d$: "Číslo 5 je prvočíslo a zároveň je záporné."

Určete pravdivost výroků $a\land c$, $b\land c$, $b\land d$.

Výsledek: ||a=pravdivý, b=nepravdivý, c=pravdivý, d=nepravdivý; a∧c: "prvočíslo a zároveň liché" → pravdivý (T∧T); b∧c: "sudé a zároveň liché" → nepravdivý (F∧T); b∧d: "sudé a zároveň záporné" → nepravdivý (F∧F); (mimochodem i a∧d ze zadání je nepravdivý: T∧F)||

Konjunkce výroků $a$, $b$ je **pravdivá** právě tehdy, když jsou pravdivé **oba** výroky $a$, $b$. Je nepravdivá, pokud je alespoň jeden z nich nepravdivý.

## Disjunkce

**Disjunkce** libovolných výroků $a$, $b$ je výrok, který vznikne jejich spojením spojkou *nebo*. Zapisujeme $a\lor b$, čteme "$a$ nebo $b$".

**Příklad:** (stejné výroky $a,b,c,d$ jako výše) $a\lor d$: "Číslo 5 je prvočíslo nebo je záporné."

Určete pravdivost výroků $a\lor c$, $b\lor c$, $b\lor d$.

Výsledek: ||a∨c: "prvočíslo nebo liché" → pravdivý (T∨T); b∨c: "sudé nebo liché" → pravdivý (F∨T); b∨d: "sudé nebo záporné" → nepravdivý (F∨F); (a∨d ze zadání je pravdivý: T∨F)||

Disjunkce výroků $a$, $b$ je **pravdivá** právě tehdy, když je pravdivý **alespoň jeden** z výroků $a$, $b$. Je nepravdivá, jen když jsou nepravdivé oba dva.

## Tabulka pravdivostních hodnot

Pravdivost složeného výroku závisí na pravdivosti výroků, ze kterých je tvořen — vyjadřujeme ji **tabulkou pravdivostních hodnot**, kde $1$ značí pravdivý výrok a $0$ nepravdivý.

Negace $\neg a$:

| $a$ | $\neg a$ |
|---|---|
| 1 | 0 |
| 0 | 1 |

Konjunkce $a\land b$ a disjunkce $a\lor b$:

| $a$ | $b$ | $a\land b$ | $a\lor b$ |
|---|---|---|---|
| 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 |
| 0 | 0 | 0 | 0 |

V prvních dvou sloupcích jsou všechny možné kombinace pravdivosti $a$, $b$; další sloupce vyjadřují pravdivostní hodnotu daného složeného výroku pro každou kombinaci.

**Příklad:** Vyšetřete pravdivost výroku $(\neg a\lor b)\land a$.

**Pozn.:** $\neg a\lor b = (\neg a)\lor b$, nikoliv $\neg(a\lor b)$ — negace se vztahuje jen k $a$.

| $a$ | $b$ | $\neg a$ | $\neg a\lor b$ | $(\neg a\lor b)\land a$ |
|---|---|---|---|---|
| 1 | 1 | 0 | 1 | 1 |
| 1 | 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 1 | 0 |
| 0 | 0 | 1 | 1 | 0 |

Výrok $(\neg a\lor b)\land a$ je pravdivý právě tehdy, když jsou pravdivé oba výroky $a$, $b$ (poslední sloupec vychází 1 jen na prvním řádku) — je tedy logicky ekvivalentní s $a\land b$.

## Zdroje

Zdrojový dokument: *mat2/Složené výroky - konjunkce a disjunkce.pdf*
