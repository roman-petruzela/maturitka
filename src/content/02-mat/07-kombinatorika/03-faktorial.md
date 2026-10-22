---
title: "Faktoriál"
order: 3
source: "matematika/TY01_0226_Faktorial.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace používala animované odrážky (postupně se odkrývající text), který se při převodu do textu ztratil. Zadání tří závěrečných příkladů se dochovalo — teorie a řešení příkladů jsou zde doplněné/rekonstruované a nezávisle přepočítané.

## N faktoriál

Faktoriál přirozeného čísla $n$ (značíme $n!$) je součin všech přirozených čísel od 1 do $n$:

$$n! = 1 \cdot 2 \cdot 3 \cdots (n-1) \cdot n$$

Faktoriál je definován jen pro **celá nezáporná čísla** $n \in \mathbb{N}_0$ — v rovnici s faktoriálem proto vždy nejdřív napište podmínky (např. u $(n-2)!$ musí být $n \geq 2$).

**Například:** $5! = 1\cdot2\cdot3\cdot4\cdot5 = 120$

| $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| $n!$ | 1 | 1 | 2 | 6 | 24 | 120 | 720 | 5 040 | 40 320 | 362 880 | 3 628 800 |

Faktoriál roste velmi rychle — už $13!$ má deset cifer. Proto se ve výpočtech faktoriály skoro nikdy nevyčíslují celé, ale **krátí** (viz pravidla níže).

## Pravidla pro počítání s faktoriály

**Nula faktoriál:**

$$0! = 1$$

Proč zrovna 1, a ne 0? Z pravidla $n! = n\cdot(n-1)!$ pro $n=1$ vychází $1! = 1\cdot 0!$, a protože $1! = 1$, musí být $0! = 1$. Kombinatoricky: prázdnou skupinu lze „uspořádat" právě jedním způsobem. A vzorce pak fungují i v krajních případech — např. $\binom{n}{n} = \dfrac{n!}{n!\cdot 0!} = 1$.

**Jedna faktoriál:**

$$1! = 1$$

**Rekurentní vztah:**

$$n! = n\cdot(n-1)!$$

Platí pro $n \geq 1$. Faktoriál většího čísla tedy obsahuje faktoriál menšího čísla — „vytknout" lze libovolný počet posledních členů:

$$n! = n\cdot(n-1)\cdot(n-2)!$$

**O jedna větší faktoriál:**

$$(n+1)! = (n+1)\cdot n!$$

**Podíl dvou faktoriálů:**

$$\frac{n!}{(n-1)!} = n$$

$$\frac{(n+1)!}{(n-1)!} = (n+1)\cdot n$$

Obecně se v podílu $\dfrac{n!}{(n-k)!}$ zkrátí všechno kromě posledních $k$ činitelů: $\dfrac{n!}{(n-k)!} = n\cdot(n-1)\cdots(n-k+1)$ — to je přesně počet variací $V(k,n)$.

**Častá chyba:** faktoriál se nedá roznásobit ani rozdělit po částech — $(2n)! \neq 2\cdot n!$ (např. $4! = 24$, ale $2\cdot2! = 4$) a $(a+b)! \neq a! + b!$. Součet faktoriálů se upravuje **vytknutím** menšího faktoriálu: $n! + (n+1)! = n!\,(1 + n + 1) = n!\,(n+2)$.

## Variace pomocí faktoriálu

Vzorec pro $k$-člennou variaci bez opakování z $n$ prvků (viz [Variace a permutace bez opakování](/mat/kombinatorika/02-variace-a-permutace-bez-opakovani/)) lze zapsat pomocí faktoriálů:

$$V(k,n) = n\cdot(n-1)\cdots(n-k+1) = \frac{n!}{(n-k)!}$$

(V čitateli je $n!$, ve jmenovateli „zbytek", který bychom násobili dál, kdybychom nezastavili u $k$-tého členu.)

## Příklady — řešení rovnic s faktoriály

**1. Z kolika prvků lze vytvořit 56 dvoučlenných variací?**

Hledáme $n$ takové, že $V(2,n)=56$:

$$n(n-1) = 56 \ \Rightarrow\ n^2-n-56=0$$

$D = 1+224=225$, $\sqrt{D}=15$, $n = \dfrac{1+15}{2} = 8$ (záporný kořen $n=-7$ nemá pro počet prvků smysl).

**Výsledek:** $n=8$ (ověření: $8\cdot7=56$ ✓)

**2. Z kolika prvků lze vytvořit třikrát víc variací třetí třídy než variací druhé třídy?**

Hledáme $n$ takové, že $V(3,n) = 3\cdot V(2,n)$:

$$n(n-1)(n-2) = 3\cdot n(n-1)$$

Pro $n\neq0,1$ můžeme obě strany vydělit $n(n-1)$:

$$n-2 = 3 \ \Rightarrow\ n=5$$

**Výsledek:** $n=5$ (ověření: $V(3,5)=5\cdot4\cdot3=60$, $V(2,5)=5\cdot4=20$, a $60=3\cdot20$ ✓)

**3. Zvětší-li se počet prvků o 2, zvětší se počet variací druhé třídy z těchto prvků o 26. Kolik je prvků?**

Hledáme $n$ takové, že $V(2,n+2) - V(2,n) = 26$:

$$(n+2)(n+1) - n(n-1) = 26$$

$$(n^2+3n+2) - (n^2-n) = 26 \ \Rightarrow\ 4n+2 = 26 \ \Rightarrow\ n=6$$

**Výsledek:** $n=6$ (ověření: $V(2,8)-V(2,6) = 8\cdot7 - 6\cdot5 = 56-30=26$ ✓)

## Příklady na procvičení

**1.** Zjednodušte $\dfrac{(n+2)!}{n!}$.

Výsledek: ||$\dfrac{(n+2)\cdot(n+1)\cdot n!}{n!} = (n+2)(n+1) = n^2+3n+2$||

**2.** Zjednodušte $\dfrac{(n-1)!}{(n+1)!}$.

Výsledek: ||$\dfrac{(n-1)!}{(n+1)\cdot n\cdot(n-1)!} = \dfrac{1}{n(n+1)}$, podmínka $n \geq 1$||

**3.** Zjednodušte $\dfrac{1}{n!} - \dfrac{1}{(n+1)!}$.

Výsledek: ||společný jmenovatel $(n+1)!$: $\dfrac{(n+1) - 1}{(n+1)!} = \dfrac{n}{(n+1)!}$||

**4.** Vypočítejte $\dfrac{10!}{8!\cdot 2!}$ bez kalkulačky.

Výsledek: ||$\dfrac{10\cdot9\cdot8!}{8!\cdot2} = \dfrac{90}{2} = 45$||

**5.** Řešte rovnici $\dfrac{(n+1)!}{(n-1)!} = 30$.

Výsledek: ||podmínka $n \geq 1$; $(n+1)\cdot n = 30$, tj. $n^2+n-30=0$, kořeny $5$ a $-6$; vyhovuje jen $n=5$ (ověření: $6\cdot5=30$)||

**6.** Řešte rovnici $n! + (n+1)! = 6\cdot n!$.

Výsledek: ||vytkneme $n!$: $n!\,(1+n+1) = 6\cdot n!$, po vydělení $n!$ (je vždy kladné) $n+2=6$, tedy $n=4$ (ověření: $24+120=144=6\cdot24$)||

## Zdroje

CALDA, Emil, DUPAČ, Václav. _Matematika pro gymnázia. Kombinatorika, pravděpodobnost, statistika._ Praha: Prometheus, 2006.
