---
title: "Implikace a ekvivalence"
order: 5
source: "mat2/Implikace a ekvivalence.pdf"
hasExercises: true
---

## Implikace

**Implikace** libovolných výroků $a$, $b$ je výrok, který vznikne jejich spojením obratem *jestliže..., pak...*. Výrok "jestliže $a$, pak $b$" zapisujeme $a\Rightarrow b$, čteme také "z $a$ plyne $b$" nebo "$a$ implikuje $b$". Výrok $a$ nazýváme **předpoklad**, výrok $b$ **závěr**.

| $a$ | $b$ | $a\Rightarrow b$ |
|---|---|---|
| 1 | 1 | 1 |
| 1 | 0 | 0 |
| 0 | 1 | 1 |
| 0 | 0 | 1 |

Implikace $a\Rightarrow b$ je pravdivá právě tehdy, když jsou pravdivé oba výroky $a$, $b$, **nebo** když je výrok $a$ nepravdivý (a $b$ je jakýkoli). Implikace je nepravdivá jedině tehdy, je-li pravdivý předpoklad $a$ a nepravdivý závěr $b$ — tedy když pravdivý předpoklad vede k nepravdivému závěru.

**Příklad:** $a$: Číslo 5 je prvočíslo. $b$: Číslo 5 je sudé. $c$: Číslo 5 je liché. $d$: Číslo 5 je záporné.

Utvořte implikace $a\Rightarrow d$, $a\Rightarrow c$, $b\Rightarrow c$, $b\Rightarrow d$ a určete jejich pravdivost.

Výsledek: ||a=T, b=F, c=T, d=F; a⇒d: T⇒F = NEPRAVDIVÝ; a⇒c: T⇒T = PRAVDIVÝ; b⇒c: F⇒T = PRAVDIVÝ (nepravdivý předpoklad); b⇒d: F⇒F = PRAVDIVÝ (nepravdivý předpoklad)||

U konjunkce $a\land b$ i disjunkce $a\lor b$ lze pořadí výroků zaměnit beze změny pravdivosti. **U implikace tomu tak není!** Implikace $b\Rightarrow a$ se nazývá **obrácená implikace**.

**Příklad:** Implikace "Je-li trojúhelník rovnostranný, pak je rovnoramenný" je pravdivá, ale obrácená implikace "Je-li trojúhelník rovnoramenný, pak je rovnostranný" je nepravdivá (existuje rovnoramenný trojúhelník, který rovnostranný není).

**Příklad:** Vyšetřete pravdivost implikací (pro libovolné výroky $a$, $b$):

1. $a\Rightarrow(a\lor b)$
2. $(a\lor b)\Rightarrow a$
3. $(a\lor b)\Rightarrow(a\land b)$

Výsledek: ||1) tabulka dává T,T,T,T pro všechny kombinace a,b → TAUTOLOGIE (vždy pravdivý, bez ohledu na a,b); 2) T,T,F,T → nepravdivý jen když a je nepravdivé a b pravdivé, jinak pravdivý; 3) T,F,F,T → pravdivý pouze když a,b mají stejnou pravdivostní hodnotu (oba pravdivé nebo oba nepravdivé)||

## Ekvivalence

**Ekvivalence** libovolných výroků $a$, $b$ je konjunkce implikace $a\Rightarrow b$ a obrácené implikace $b\Rightarrow a$, tedy výrok $(a\Rightarrow b)\land(b\Rightarrow a)$. Zapisujeme $a\Leftrightarrow b$, čteme "$a$ je ekvivalentní s $b$" nebo "$a$ platí právě tehdy, když platí $b$".

| $a$ | $b$ | $a\Rightarrow b$ | $b\Rightarrow a$ | $a\Leftrightarrow b$ |
|---|---|---|---|---|
| 1 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 0 |
| 0 | 0 | 1 | 1 | 1 |

Ekvivalence $a\Leftrightarrow b$ je pravdivá právě tehdy, když jsou oba výroky $a$, $b$ **pravdivé, nebo oba nepravdivé**.

**Příklad:** Rozhodněte, zda jsou výroky $a\Rightarrow b$ a $\neg b\Rightarrow\neg a$ ekvivalentní.

Výsledek: ||sestavením tabulky pro všechny kombinace a,b vyjde a⇒b i ¬b⇒¬a shodně T,F,T,T — jsou tedy EKVIVALENTNÍ. (¬b⇒¬a se nazývá obměněná implikace/kontrapozice — je vždy logicky ekvivalentní s původní implikací a⇒b, na rozdíl od obrácené implikace b⇒a, která ekvivalentní být nemusí.)||

**Příklad:** Vašek, náčelník Siouxů, prohlásil: "Je-li druhá odmocnina z deseti menší než tři, pak jsem náčelníkem Siouxů." Posuďte pravdivost této implikace, utvořte implikaci obrácenou a obměněnou a posuďte i jejich pravdivost.

Výsledek: ||a: "√10<3" je NEPRAVDIVÝ výrok (√10≈3,162>3); b: "jsem náčelníkem Siouxů" je PRAVDIVÝ (dáno zadáním). Původní implikace a⇒b: F⇒T = PRAVDIVÁ (nepravdivý předpoklad → implikace automaticky pravdivá, i když spolu tvrzení věcně nesouvisí). Obrácená b⇒a: T⇒F = NEPRAVDIVÁ. Obměněná ¬b⇒¬a: ¬b=F, ¬a=T, F⇒T = PRAVDIVÁ (shoduje se s původní, jak očekáváno)||

**Příklad:** $a$: $\sqrt{20}>4$. $b$: $-\sqrt{20}<-4$. Posuďte pravdivost výroků $a\Rightarrow b$, $b\Rightarrow a$, $\neg a\Rightarrow\neg b$.

Výsledek: ||√20≈4,472, tedy a je PRAVDIVÝ (4,472>4) a b je PRAVDIVÝ (-4,472<-4, protože násobení/porovnání záporným číslem obrací nerovnost stejně jako u a). a⇒b: T⇒T=PRAVDIVÝ; b⇒a: T⇒T=PRAVDIVÝ; ¬a⇒¬b: F⇒F=PRAVDIVÝ — všechny tři jsou pravdivé||

## Tautologie

**Příklad:** Určete, které z následujících výroků jsou tautologie (tedy pravdivé pro VŠECHNY kombinace pravdivostních hodnot $a$, $b$):

a) $(a\land b)\Leftrightarrow(\neg a\lor\neg b)$
b) $(a\Leftrightarrow b)\Leftrightarrow(\neg a\Leftrightarrow\neg b)$
c) $(a\Rightarrow b)\Rightarrow(\neg a\Rightarrow\neg b)$

Výsledek: ||a) NENÍ tautologie (pro a=T,b=T vyjde a∧b=T, ale ¬a∨¬b=F, takže T⇔F=F); b) JE tautologie (vyjde T pro všechny 4 kombinace a,b); c) NENÍ tautologie (pro a=F,b=T vyjde a⇒b=T, ale ¬a⇒¬b=T⇒F=F, takže T⇒F=F)||

## Další příklady

**1.** Určete, jak závisí pravdivost výroků na pravdivostních hodnotách $a$, $b$:

a) $a\Rightarrow(a\land b)$
b) $(a\land b)\Rightarrow b$
c) $(a\land b)\Rightarrow(a\lor b)$

Výsledek: ||a) nepravdivý pouze když a je pravdivé a b nepravdivé, jinak pravdivý; b) TAUTOLOGIE (vždy pravdivý); c) TAUTOLOGIE (vždy pravdivý)||

**2.** Vyšetřete pravdivost výroků v závislosti na pravdivosti $a$, $b$:

a) $a\Leftrightarrow(a\land b)$
b) $a\Leftrightarrow(a\lor b)$
c) $(a\lor b)\Leftrightarrow(a\land b)$

Výsledek: ||a) nepravdivý jen když a je pravdivé a b nepravdivé; b) nepravdivý jen když a je nepravdivé a b pravdivé; c) pravdivý jen když a,b mají stejnou pravdivostní hodnotu (jinak řečeno, je logicky totéž jako a⇔b)||

**3.** Vyšetřete pravdivost výroku $(a\Rightarrow b)\Leftrightarrow[(b\Rightarrow a)\lor(\neg a\Rightarrow b)]$ v závislosti na $a$, $b$.

Výsledek: ||sestavením tabulky pro všechny 4 kombinace vyjde T,F,T,T — výrok je nepravdivý pouze když a je pravdivé a b nepravdivé, jinak pravdivý||

## Zdroje

Zdrojový dokument: *mat2/Implikace a ekvivalence.pdf*
