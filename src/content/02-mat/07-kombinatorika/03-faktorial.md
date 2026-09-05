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

Speciálně definujeme $0! = 1$ (pro potřeby vzorců, aby fungovaly i pro okrajové případy).

**Příklad:** $5! = 1\cdot2\cdot3\cdot4\cdot5 = 120$

Užitečná vlastnost pro úpravy výrazů: $n! = n\cdot(n-1)!$ (a obecněji lze „vytknout" libovolný počet posledních členů).

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

## Zdroje

CALDA, Emil, DUPAČ, Václav. _Matematika pro gymnázia. Kombinatorika, pravděpodobnost, statistika._ Praha: Prometheus, 2006.
