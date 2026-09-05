---
title: "Nerovnice v podílovém tvaru"
order: 17
source: "MATURITA HADR/Matematika/řešené postupy matematických okruhů z DT 2010 - 2017/17) Nerovnice v podílovém tvaru.pdf"
hasExercises: true
---

> Pozn. k obsahu: Přesná znění nerovnic 1) a 2) se v PDF ztratila jen částečně — z dochovaného slovního zdůvodnění postupu (znaménko čitatele, podmínky) je patrné, o jaký typ výrazu šlo, přesný číselný tvar čitatele ale není jistý. Úloha 1i) se dochovala celá.

*Příklady z maturitních testů Cermatu (základní úroveň) — Nerovnice v podílovém tvaru*

**1)** Přiřaďte k oběma nerovnicím a), b) řešeným v oboru $\mathbb R$ odpovídající množinu řešení:

a) nerovnice tvaru $\dfrac{(\text{vždy kladný čitatel})}{3-x}<0$
b) $\dfrac{3-x}{x-3}>0$

A) $\emptyset$   B) $(-\infty;1)$   C) $(-\infty;3)$   D) $(1;+\infty)$   **E) $(3;+\infty)$**

*Podzim 2015, příklad č. 26.2, 26.3. Body: 2. Výsledek: a) E, b) A.*

Řešení a): rychlejší než kompletní zápis metodou rozvětvení, logických spojek nebo nulových bodů je zde přímá úvaha — čitatel je kladný, takže aby byla hodnota celého zlomku záporná, musí být jmenovatel záporný:

$$3-x<0 \implies x>3 \implies x\in(3;\infty)$$

Podmínky: $x\neq3$.

Řešení b): po vytknutí čísla $(-1)$ v čitateli nebo jmenovateli lze zlomek zkrátit — $\dfrac{3-x}{x-3}=\dfrac{-(x-3)}{x-3}=-1$ pro každé $x\neq3$. Nerovnice se tak redukuje na nepravdivý výrok $-1>0$, který neplatí pro žádné $x$. Nerovnice nemá řešení, $K=\emptyset$.

**2)** V oboru $\mathbb R$ řešte nerovnici tvaru $\dfrac{(\text{vždy záporný čitatel})}{x-2}\leq0$.

*Jaro 2016, příklad č. 6. Body: 1. Výsledek: $K=(2;\infty)$; podmínky $x\neq2$.*

Řešení: rychlejší než kompletní metoda je přímá úvaha — čitatel je záporný, takže aby byla hodnota zlomku nekladná (a nula zde vyjít nemůže, protože čitatel je nenulový), musí být jmenovatel kladný:

$$x-2>0 \implies x>2 \implies x\in(2;\infty)$$

---

*Ilustrační maturitní testy Cermatu*

**1i)** Jaké je řešení nerovnice $\dfrac{-5x}{x-5}<0$ v oboru $\mathbb R$?

A) $\emptyset$   B–D) *(nedochováno)*   **E) $(-\infty;0)\cup(5;\infty)$**

*2012, příklad č. 19. Body: 2.*

Řešení (1. způsob — metoda logických spojek): podíl $A/B<0$ právě tehdy, když ($A>0$ a $B<0$) nebo ($A<0$ a $B>0$).

$$[-5x>0 \land (x-5)<0] \quad\text{nebo}\quad [-5x<0 \land (x-5)>0]$$

$$[x<0 \land x<5] \quad\text{nebo}\quad [x>0 \land x>5]$$

1. průnik: $(-\infty;0)\cap(-\infty;5)=(-\infty;0)$. 2. průnik: $(0;\infty)\cap(5;\infty)=(5;\infty)$.

Sjednocení: $x\in(-\infty;0)\cup(5;\infty)$.

Řešení (2. způsob — metoda nulových bodů): nulové body $x_1=0$, $x_2=5$.

| | $(-\infty;0)$ | $(0;5)$ | $(5;\infty)$ |
|---|---|---|---|
| $-5x$ | $+$ | $-$ | $-$ |
| $x-5$ | $-$ | $-$ | $+$ |
| podíl | $-$ | $+$ | $-$ |

Ověření nulových bodů: $x_1=0$ dává hodnotu $0$ (nevyhovuje ostré nerovnici), $x_2=5$ zlomek nemá smysl (dělení nulou). Sjednocení intervalů se znaménkem $-$: $x\in(-\infty;0)\cup(5;\infty)$.

**Poznámka:** Nerovnici lze řešit i metodou rozvětvení.

## Zdroje

MATURITA HADR / Matematika / řešené postupy matematických okruhů z DT 2010–2017, dokument *17) Nerovnice v podílovém tvaru.pdf*.
