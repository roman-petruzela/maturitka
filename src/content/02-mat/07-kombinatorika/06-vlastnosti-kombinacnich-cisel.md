---
title: "Vlastnosti kombinačních čísel"
order: 6
source: "matematika/TY01_0229_Vlastnosti_kombinacnich_cisel.pptx"
tags: ["doplněno"]
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace se při převodu ukázala jako prázdná (obsah byl výhradně v animacích, které konverze nezachytila). Celý obsah tohoto tématu je proto nově napsaný a navazuje na [Kombinace bez opakování](/mat/kombinatorika/04-kombinace-bez-opakovani/), kde byl kombinační číslo $\binom{n}{k}$ zavedeno.

Kombinační čísla $\binom{n}{k} = \dfrac{n!}{k!(n-k)!}$ mají několik užitečných vlastností, které se hodí jak k rychlému výpočtu, tak k důkazům dalších vzorců (např. binomické věty).

## Krajní hodnoty

$$\binom{n}{0} = 1, \qquad \binom{n}{n} = 1$$

Existuje přesně jeden způsob, jak vybrat „nic" (prázdnou skupinu) nebo jak vybrat „všechno" (celou n-tici) z $n$ prvků.

## Symetrie

$$\binom{n}{k} = \binom{n}{n-k}$$

Vybrat $k$ prvků, které DO skupiny patří, je stejně možností jako vybrat $n-k$ prvků, které do skupiny **nepatří** — jde jen o dva pohledy na tentýž výběr.

**Příklad:** $\binom{8}{3} = \binom{8}{5}$, protože obojí se rovná $\dfrac{8!}{3!\cdot5!}$.

## Pascalovo pravidlo (součtový vzorec)

$$\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$$

Toto pravidlo říká, že každé kombinační číslo je součtem dvou kombinačních čísel „o řádek výš" — je to přesně pravidlo, podle kterého se sestrojuje [Pascalův trojúhelník](/mat/kombinatorika/08-pascaluv-trojuhelnik/): každé číslo je součtem dvou čísel nad ním.

**Odvození (myšlenkově):** vybíráme $k$-člennou skupinu z $n$ prvků. Zaměříme se na jeden konkrétní prvek $X$. Buď $X$ ve skupině je (pak zbývá vybrat $k-1$ prvků ze zbylých $n-1$, tedy $\binom{n-1}{k-1}$ možností), nebo $X$ ve skupině není (pak vybíráme celých $k$ prvků ze zbylých $n-1$, tedy $\binom{n-1}{k}$ možností). Součet obou případů pokrývá všechny možnosti.

## Součet řádku Pascalova trojúhelníku

$$\binom{n}{0} + \binom{n}{1} + \binom{n}{2} + \cdots + \binom{n}{n} = 2^n$$

Součet všech kombinačních čísel v $n$-tém řádku je $2^n$ — to odpovídá tomu, že $n$-prvková množina má celkem $2^n$ různých podmnožin (každý prvek buď do podmnožiny patří, nebo ne — dvě možnosti pro každý z $n$ prvků).

## Příklady

**Příklad 1:** Ověřte Pascalovo pravidlo pro $\binom{6}{2}$.

Výsledek: ||C(6,2) = 15. Podle pravidla by mělo platit C(5,1) + C(5,2) = 5 + 10 = 15. Souhlasí.||

---

**Příklad 2:** Kolik podmnožin (včetně prázdné a celé množiny) má pětiprvková množina?

Výsledek: ||2⁵ = 32 podmnožin — přímo podle vzorce pro součet řádku Pascalova trojúhelníku.||

---

**Příklad 3:** Bez počítání faktoriálů určete, čemu se rovná $\binom{10}{7}$, víte-li, že $\binom{10}{3} = 120$.

Výsledek: ||podle symetrie C(10,7) = C(10,3) = 120||

## Zdroje

CALDA, Emil, DUPAČ, Václav. _Matematika pro gymnázia. Kombinatorika, pravděpodobnost, statistika._ Praha: Prometheus, 2006.
