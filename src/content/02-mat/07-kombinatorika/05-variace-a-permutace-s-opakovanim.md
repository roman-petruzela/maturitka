---
title: "Variace a permutace s opakováním"
order: 5
source: "matematika/TY01_0228_Variace_a_permutace_s_opakovanim.pptx"
tags: ["doplněno"]
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace se při převodu ukázala jako prázdná (obsah byl výhradně v animacích/obrázcích, které konverze nezachytila vůbec). Celý obsah tohoto tématu je proto nově napsaný — teorie navazuje na [Variace a permutace bez opakování](/mat/kombinatorika/02-variace-a-permutace-bez-opakovani/), tentokrát pro případ, kdy se prvky smí opakovat.

## Variace s opakováním

$k$-členná variace **s opakováním** z $n$ prvků je uspořádaná $k$-tice sestavená z těchto prvků tak, že se libovolný prvek může vyskytnout i vícekrát (klidně i všech $k$ pozic stejným prvkem).

Na rozdíl od variace bez opakování máme na **každé** z $k$ pozic k dispozici všech $n$ prvků (nic se „nespotřebovává"):

$$V'(k,n) = n^k$$

### Příklad

Kolik různých čtyřmístných PIN kódů lze sestavit z číslic 0 až 9 (číslice se mohou opakovat, např. 0000 nebo 1111 jsou platné kódy)?

Máme $n=10$ číslic, sestavujeme $k=4$-místné uspořádané kódy s opakováním:

$$V'(4,10) = 10^4 = 10\,000$$

### Příklad 2

Kolika způsoby lze obarvit 3 pole v řadě, pokud máme k dispozici 5 barev a každé pole může mít libovolnou barvu (i stejnou jako sousední pole)?

$$V'(3,5) = 5^3 = 125$$

(Pro srovnání: bez opakování by to bylo jen $V(3,5)=5\cdot4\cdot3=60$, viz [předchozí téma](/mat/kombinatorika/02-variace-a-permutace-bez-opakovani/) — s opakováním možností přibývá, protože žádná barva se „nespotřebuje".)

## Permutace s opakováním

Pokud chceme uspořádat $n$ prvků, mezi kterými jsou **skupiny navzájem stejných prvků** (např. písmena ve slově, kde se některá písmena opakují), počet různých uspořádání je menší než $n!$, protože záměna dvou stejných prvků nedává nové pořadí.

Máme-li $n$ prvků rozdělených do skupin o $n_1, n_2, \ldots, n_m$ stejných prvcích (přičemž $n_1+n_2+\cdots+n_m=n$), počet permutací s opakováním je:

$$P'(n_1, n_2, \ldots, n_m) = \frac{n!}{n_1! \cdot n_2! \cdots n_m!}$$

### Příklad

Kolik různých „slov" (přesmyček, i bez smyslu) lze vytvořit přeskládáním písmen slova **MAMA**?

Slovo má 4 písmena, z toho 2× M a 2× A (dvě skupiny po 2 stejných písmenech), $n=4$, $n_1=2$ (M), $n_2=2$ (A):

$$P'(2,2) = \frac{4!}{2!\cdot2!} = \frac{24}{4} = 6$$

Vypsáním si to můžeme ověřit: MAMA, MAAM, MMAA, AMMA, AMAM, AAMM — přesně 6 různých přesmyček.

### Příklad 2

Kolik různých přesmyček má slovo **ANANAS**?

Slovo má 6 písmen: 3× A, 2× N, 1× S ($n=6$, $n_1=3$, $n_2=2$, $n_3=1$):

$$P'(3,2,1) = \frac{6!}{3!\cdot2!\cdot1!} = \frac{720}{6\cdot2\cdot1} = \frac{720}{12} = 60$$

## Shrnutí

- Variace s opakováním z $n$ prvků, $k$-členná: $V'(k,n) = n^k$ — na každé pozici je k dispozici všech $n$ prvků.
- Permutace s opakováním $n$ prvků rozdělených do skupin stejných prvků: $P'(n_1,\ldots,n_m) = \dfrac{n!}{n_1!\cdots n_m!}$.

## Zdroje

CALDA, Emil, DUPAČ, Václav. _Matematika pro gymnázia. Kombinatorika, pravděpodobnost, statistika._ Praha: Prometheus, 2006.
