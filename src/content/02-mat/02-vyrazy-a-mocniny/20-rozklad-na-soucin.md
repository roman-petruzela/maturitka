---
title: "Rozklad na součin"
order: 20
source: "mat/rozklad_na_součin.pdf"
hasExercises: true
---

> Pozn. k obsahu: U příkladů 1, 2, 6 a 8 se dochoval popis postupu, ale výsledný rozložený tvar chyběl — dopočítán a ověřen zpětným roznásobením. V úloze 2 samostudia se čísla (zlomkové koeficienty) při převodu přeuspořádala natolik, že přesné znění položek c), d), e) nejde bezpečně rekonstruovat — nahrazeny vlastními, stejného typu (rozdíl čtverců se zlomky/desetinnými čísly). Výsledky ke cvičením "pro samostudium" v podkladu úplně chyběly — nově dopočítány a ověřeny.

Rozklad na součin využijeme u krácení lomených výrazů. Ukážeme si pár řešených příkladů a pak budete počítat sami.

**Příklad 1:** Rozložte na součin $8x^2y^3+6xy^4$.

Podíváme se, co mají oba členy společného — koeficienty $8,6$ mají společného dělitele $2$, proměnné mají společné $x^1y^3$:

$$8x^2y^3+6xy^4 = 2xy^3(4x+3y)$$

**Příklad 2:** Rozložte na součin $10p-10q-ap+aq$.

Vytkneme nejprve z prvních dvou členů a poté z druhých dvou:

$$10p-10q-ap+aq = 10(p-q)-a(p-q)$$

Nyní můžeme z obou členů vytknout společnou závorku $(p-q)$:

$$= (p-q)(10-a)$$

**Příklad 3:** Rozložte na součin $9x^2-\dfrac14y^2$.

Použijeme vzorec $a^2-b^2=(a-b)(a+b)$ s $a=3x$, $b=\tfrac12y$:

$$9x^2-\frac14y^2 = \left(3x-\frac12y\right)\left(3x+\frac12y\right)$$

**Příklad 4:** Rozložte na součin $81c^4-16$.

Vzorec $a^2-b^2=(a-b)(a+b)$ zde použijeme **dvakrát**:

$$(9c^2)^2-4^2 = (9c^2-4)(9c^2+4) = (3c-2)(3c+2)(9c^2+4)$$

**Příklad 5:** Rozložte na součin $9x^2+12xy+4y^2$.

Použijeme vzorec $a^2+2ab+b^2=(a+b)^2$:

$$(3x)^2+2\cdot3\cdot2xy+(2y)^2 = (3x+2y)^2$$

**Příklad 6:** Rozložte na součin $16p^2-4pq+\dfrac14q^2$.

Použijeme vzorec $a^2-2ab+b^2=(a-b)^2$ s $a=4p$, $b=\tfrac12q$ (ověříme: $2ab=2\cdot4p\cdot\tfrac12q=4pq$ ✓):

$$16p^2-4pq+\frac14q^2 = \left(4p-\frac12q\right)^2$$

**Příklad 7:** Rozložte na součin $p^2-64+16u-u^2$.

Z posledních tří členů vytkneme $-1$ a trojčlen v závorce upravíme podle vzorce $a^2-2ab+b^2=(a-b)^2$:

$$p^2-(u^2-16u+64) = p^2-(u-8)^2$$

Nyní použijeme vzorec $a^2-b^2=(a-b)(a+b)$:

$$p^2-(8-u)^2 = (p-(8-u))\cdot(p+(8-u)) = (p-8+u)(p+8-u)$$

**Příklad 8:** Rozložte na součin $4a^2-b^2-14a+7b$.

Na první dva členy použijeme vzorec rozdílu čtverců, ze zbylých dvou vytkneme:

$$4a^2-b^2-14a+7b = (2a-b)(2a+b) - 7(2a-b) = (2a-b)\big[(2a+b)-7\big] = (2a-b)(2a+b-7)$$

## Příklady pro samostudium

**1.** Rozložte na součin vytýkáním:

a) $6x-15y$   b) $25r+35s$   c) $12a^2b^4-44ab^3+20a^3b^3$   d) $-3x^2y-9xy^2+36xy^4$   e) $6r-6s+kr-ks$   f) $kp+3k-4p-12$   g) $5px+10p+2r+rx$   h) $14y-7-r+2ry$

Výsledek: ||a) 3(2x-5y); b) 5(5r+7s); c) 4ab³(5a²+3ab-11); d) -3xy(x+3y-12y³); e) (r-s)(6+k); f) (p+3)(k-4); g) (x+2)(5p+r); h) (2y-1)(7+r)||

**2.** Rozložte na součin podle vhodného vzorce (rozdíl čtverců):

a) $c^2-64$
b) $0{,}25-s^2$
c) $\dfrac{x^2}9-1$
d) $\dfrac{r^2}9-9p^2$
e) $\dfrac{81}{49}-16m^4$

Výsledek: ||a) (c-8)(c+8); b) (0,5-s)(0,5+s); c) (x/3-1)(x/3+1); d) (r/3-3p)(r/3+3p); e) (9/7-4m²)(9/7+4m²)||

**3.** Vyjádřete jako druhou mocninu dvojčlenu:

a) $64-16p+p^2$
b) $9m^2+6mk+k^2$
c) $16s^2-40rs+25r^2$
d) $0{,}04+c^2+0{,}4c$
e) $\dfrac{x^2}{25}-\dfrac{2x}5+1$
f) $12du-36d^2-u^2$

Výsledek: ||a) (p-8)²; b) (3m+k)²; c) (4s-5r)²; d) (c+0,2)²; e) (x/5-1)²; f) -(6d-u)² [je to záporně vzatá druhá mocnina, protože u²+36d² má opačné znaménko než součin 12du]||

**4.** Rozložte na součin (kombinace vzorce a vytýkání):

a) $4+4c+c^2-9d^2$
b) $49b^2-a^2-2a-1$
c) $25x^2-y^2+5x-y$
d) $m^2-36s^2-m-6s$

Výsledek: ||a) (c+2)²-9d² = (c+2-3d)(c+2+3d); b) 49b²-(a+1)² = (7b-a-1)(7b+a+1); c) (5x-y)(5x+y)+(5x-y) = (5x-y)(5x+y+1); d) (m-6s)(m+6s)-(m+6s) = (m+6s)(m-6s-1)||

## Zdroje

Zdrojový dokument: *mat/rozklad_na_součin.pdf*
