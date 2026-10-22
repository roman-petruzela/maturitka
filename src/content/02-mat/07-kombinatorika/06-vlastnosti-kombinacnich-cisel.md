---
title: "Vlastnosti kombinačních čísel"
order: 6
source: "matematika/TY01_0229_Vlastnosti_kombinacnich_cisel.pptx"
tags: ["doplněno"]
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace se při převodu ukázala jako prázdná (obsah byl výhradně v animacích, které konverze nezachytila). Celý obsah tohoto tématu je proto nově napsaný a navazuje na [Kombinace bez opakování](/mat/kombinatorika/04-kombinace-bez-opakovani/), kde bylo kombinační číslo $\binom{n}{k}$ zavedeno.

Kombinační čísla $\binom{n}{k} = \dfrac{n!}{k!(n-k)!}$ mají několik užitečných vlastností, které se hodí jak k rychlému výpočtu, tak k důkazům dalších vzorců (např. binomické věty).

## Krajní hodnoty

$$\binom{n}{0} = 1$$

$$\binom{n}{n} = 1$$

Existuje přesně jeden způsob, jak vybrat „nic" (prázdnou skupinu) nebo jak vybrat „všechno" (celou n-tici) z $n$ prvků.

## Symetrie

$$\binom{n}{k} = \binom{n}{n-k}$$

Vybrat $k$ prvků, které DO skupiny patří, je stejně možností jako vybrat $n-k$ prvků, které do skupiny **nepatří** — jde jen o dva pohledy na tentýž výběr.

**Například:** $\binom{8}{3} = \binom{8}{5}$, protože obojí se rovná $\dfrac{8!}{3!\cdot5!}$.

## Pascalovo pravidlo (součtový vzorec)

$$\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$$

Toto pravidlo říká, že každé kombinační číslo je součtem dvou kombinačních čísel „o řádek výš" — je to přesně pravidlo, podle kterého se sestrojuje [Pascalův trojúhelník](/mat/kombinatorika/08-pascaluv-trojuhelnik/): každé číslo je součtem dvou čísel nad ním.

**Odvození (myšlenkově):** vybíráme $k$-člennou skupinu z $n$ prvků. Zaměříme se na jeden konkrétní prvek $X$. Buď $X$ ve skupině je (pak zbývá vybrat $k-1$ prvků ze zbylých $n-1$, tedy $\binom{n-1}{k-1}$ možností), nebo $X$ ve skupině není (pak vybíráme celých $k$ prvků ze zbylých $n-1$, tedy $\binom{n-1}{k}$ možností). Součet obou případů pokrývá všechny možnosti.

## Součet řádku Pascalova trojúhelníku

$$\binom{n}{0} + \binom{n}{1} + \binom{n}{2} + \cdots + \binom{n}{n} = 2^n$$

Součet všech kombinačních čísel v $n$-tém řádku je $2^n$ — to odpovídá tomu, že $n$-prvková množina má celkem $2^n$ různých podmnožin (každý prvek buď do podmnožiny patří, nebo ne — dvě možnosti pro každý z $n$ prvků).

## Hodnoty, které se vyplatí znát nazpaměť

Kombinační čísla s malým $k$ (nebo s $k$ blízko $n$) se nemusí počítat přes faktoriály — po zkrácení zbude jednoduchý výraz.

**Výběr jednoho prvku:**

$$\binom{n}{1} = n$$

**Výběr všech prvků kromě jednoho:**

$$\binom{n}{n-1} = n$$

**Výběr dvojice:**

$$\binom{n}{2} = \frac{n\,(n-1)}{2}$$

Odvození: $\dbinom{n}{2} = \dfrac{n!}{2!\,(n-2)!} = \dfrac{n\,(n-1)\,(n-2)!}{2\,(n-2)!} = \dfrac{n\,(n-1)}{2}$. Dvojic uspořádaných je $n(n-1)$ (to je $V(2,n)$), a protože na pořadí ve dvojici nezáleží, dělíme dvěma.

**Výběr trojice:**

$$\binom{n}{3} = \frac{n\,(n-1)\,(n-2)}{6}$$

**Rychlý výpočet libovolného kombinačního čísla:** v čitateli $k$ činitelů od $n$ dolů, ve jmenovateli $k!$ — např. $\dbinom{9}{4} = \dfrac{9\cdot8\cdot7\cdot6}{4\cdot3\cdot2\cdot1} = 126$. Je-li $k > \dfrac{n}{2}$, použijte nejdřív symetrii: $\dbinom{20}{18} = \dbinom{20}{2} = \dfrac{20\cdot19}{2} = 190$.

## Typické úlohy na výběr dvojic

Vzorec $\dfrac{n(n-1)}{2}$ se v úlohách objevuje pořád dokola, jen v jiném převleku:

| Úloha | Proč dvojice | Počet |
|---|---|---|
| zápasy v turnaji „každý s každým“ ($n$ týmů) | zápas = neuspořádaná dvojice týmů | $\dfrac{n(n-1)}{2}$ |
| podání rukou ($n$ lidí, každý s každým) | podání ruky = dvojice lidí | $\dfrac{n(n-1)}{2}$ |
| přímky určené $n$ body (žádné tři na přímce) | přímka = dvojice bodů | $\dfrac{n(n-1)}{2}$ |
| úhlopříčky konvexního $n$-úhelníku | spojnice dvou vrcholů, bez $n$ stran | $\dfrac{n(n-1)}{2} - n = \dfrac{n(n-3)}{2}$ |
| zápasy „doma a venku“ (každý s každým dvakrát) | záleží na tom, kdo je doma — uspořádaná dvojice | $n(n-1)$ |
| trojúhelníky s vrcholy v $n$ bodech (žádné tři na přímce) | trojúhelník = trojice bodů | $\dfrac{n(n-1)(n-2)}{6}$ |

**Počet úhlopříček konvexního n-úhelníku:**

$$u_n = \frac{n\,(n-3)}{2}$$

Z každého vrcholu vede úhlopříčka do všech ostatních vrcholů kromě dvou sousedních (a sebe), tedy $n-3$ úhlopříček; každou ale počítáme dvakrát (z obou konců), proto dělíme dvěma. **Například:** šestiúhelník má $\frac{6\cdot3}{2} = 9$ úhlopříček.

## Rovnice s kombinačními čísly

Kombinační číslo přepíšeme podle vzorců výše na výraz s $n$, vyřešíme vzniklou (obvykle kvadratickou) rovnici a ponecháme jen přirozená řešení, která splňují podmínky ($\binom{n}{k}$ má smysl jen pro $n \geq k \geq 0$).

**Například:** $\binom{n}{2} = 28$ → $\dfrac{n(n-1)}{2} = 28$ → $n^2 - n - 56 = 0$ → $n = 8$ (kořen $n=-7$ nevyhovuje).

## Příklady

**Příklad 1:** Ověřte Pascalovo pravidlo pro $\binom{6}{2}$.

Výsledek: ||C(6,2) = 15. Podle pravidla by mělo platit C(5,1) + C(5,2) = 5 + 10 = 15. Souhlasí.||

---

**Příklad 2:** Kolik podmnožin (včetně prázdné a celé množiny) má pětiprvková množina?

Výsledek: ||2⁵ = 32 podmnožin — přímo podle vzorce pro součet řádku Pascalova trojúhelníku.||

---

**Příklad 3:** Bez počítání faktoriálů určete, čemu se rovná $\binom{10}{7}$, víte-li, že $\binom{10}{3} = 120$.

Výsledek: ||podle symetrie C(10,7) = C(10,3) = 120||

---

**Příklad 4:** Kolik zápasů se odehraje v hokejové lize s 14 týmy, hraje-li každý s každým dvakrát (doma a venku)?

Výsledek: ||$14\cdot13 = 182$ zápasů — nebo $2\cdot\binom{14}{2} = 2\cdot91 = 182$||

---

**Příklad 5:** Na oslavě si všichni navzájem podali ruce, celkem došlo ke 45 podáním rukou. Kolik lidí bylo na oslavě?

Výsledek: ||$\frac{n(n-1)}{2} = 45$ → $n^2-n-90=0$ → $n=10$ (kořen $-9$ nevyhovuje)||

---

**Příklad 6:** Který mnohoúhelník má 20 úhlopříček?

Výsledek: ||$\frac{n(n-3)}{2} = 20$ → $n^2-3n-40=0$ → $n=8$, osmiúhelník (kořen $-5$ nevyhovuje)||

---

**Příklad 7:** Řešte rovnici $\binom{n}{n-2} = 21$.

Výsledek: ||podle symetrie $\binom{n}{n-2} = \binom{n}{2}$: $\frac{n(n-1)}{2} = 21$ → $n^2-n-42=0$ → $n=7$ (podmínka $n\geq2$)||

---

**Příklad 8:** Řešte rovnici $\binom{n}{2} + \binom{n+1}{2} = 49$.

Výsledek: ||$\frac{n(n-1)}{2} + \frac{(n+1)n}{2} = \frac{n(n-1+n+1)}{2} = n^2 = 49$ → $n=7$ (ověření: $21+28=49$)||

## Zdroje

CALDA, Emil, DUPAČ, Václav. _Matematika pro gymnázia. Kombinatorika, pravděpodobnost, statistika._ Praha: Prometheus, 2006.
