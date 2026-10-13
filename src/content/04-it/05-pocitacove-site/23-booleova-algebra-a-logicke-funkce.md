---
title: "Booleova algebra a logické funkce"
order: 23
---

**Booleova algebra** pracuje s proměnnými, které mohou mít jen dvě hodnoty – **0** (nepravda, nízké napětí) a **1** (pravda, vysoké napětí). Popisuje, jak se z nich skládají **logické funkce**, a je matematickým základem všech číslicových obvodů: procesorů, pamětí i síťových prvků. Podle ŠVP se probírá ve 2. ročníku předmětu Počítačové sítě: žák má umět zjednodušit (minimalizovat) logickou funkci algebraickou metodou a vyjádřit ji pouze pomocí členů NAND.

## Základní logické operace

| Operace | Zápis | Význam | Logický člen |
| --- | --- | --- | --- |
| negace (NOT) | $\overline{A}$ | obrátí hodnotu | invertor |
| logický součin (AND, konjunkce) | $A \cdot B$ nebo $AB$ | 1 jen tehdy, když jsou obě proměnné 1 | AND |
| logický součet (OR, disjunkce) | $A + B$ | 1, když je aspoň jedna proměnná 1 | OR |
| negovaný součin (NAND) | $\overline{A \cdot B}$ | negace AND – 0 jen tehdy, když jsou obě 1 | NAND |
| negovaný součet (NOR) | $\overline{A + B}$ | negace OR – 1 jen tehdy, když jsou obě 0 | NOR |
| výhradní součet (XOR) | $A \oplus B$ | 1, když se proměnné liší | XOR |

### Pravdivostní tabulka

Logickou funkci lze úplně popsat **pravdivostní tabulkou** – pro každou kombinaci vstupů uvede hodnotu výstupu. Funkce $n$ proměnných má $2^n$ řádků.

| A | B | NOT A | AND | OR | NAND | NOR | XOR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 1 | 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 0 | 1 | 1 | 0 | 1 |
| 1 | 1 | 0 | 1 | 1 | 0 | 0 | 0 |

## Zákony Booleovy algebry

| Zákon | Pro součin | Pro součet |
| --- | --- | --- |
| neutrální prvek | $A \cdot 1 = A$ | $A + 0 = A$ |
| agresivní prvek | $A \cdot 0 = 0$ | $A + 1 = 1$ |
| idempotence | $A \cdot A = A$ | $A + A = A$ |
| doplněk | $A \cdot \overline{A} = 0$ | $A + \overline{A} = 1$ |
| dvojí negace | $\overline{\overline{A}} = A$ | |
| komutativní | $A B = B A$ | $A + B = B + A$ |
| asociativní | $(A B) C = A (B C)$ | $(A + B) + C = A + (B + C)$ |
| distributivní | $A (B + C) = A B + A C$ | $A + B C = (A + B)(A + C)$ |
| absorpce | $A (A + B) = A$ | $A + A B = A$ |
| absorpce negace | $A (\overline{A} + B) = A B$ | $A + \overline{A} B = A + B$ |

Nejdůležitější jsou **De Morganovy zákony**, které převádějí součin na součet a naopak:

**De Morganův zákon pro součin:**

$$\overline{A \cdot B} = \overline{A} + \overline{B}$$

**De Morganův zákon pro součet:**

$$\overline{A + B} = \overline{A} \cdot \overline{B}$$

Platí pro libovolný počet proměnných: negace součinu je součet negací, negace součtu je součin negací.

## Zápis funkce z pravdivostní tabulky

Funkci zadanou tabulkou zapíšeme v **úplné normální disjunktivní formě** (součet součinů): pro každý řádek, kde je výstup 1, vytvoříme součin všech proměnných – proměnnou s hodnotou 0 zapíšeme negovanou, s hodnotou 1 bez negace. Tyto součiny sečteme.

**Příklad 1 – funkce „většina“.** Výstup Y je 1, když jsou aspoň dva ze tří vstupů A, B, C rovny 1.

| A | B | C | Y | součin |
| --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | |
| 0 | 0 | 1 | 0 | |
| 0 | 1 | 0 | 0 | |
| 0 | 1 | 1 | 1 | $\overline{A} B C$ |
| 1 | 0 | 0 | 0 | |
| 1 | 0 | 1 | 1 | $A \overline{B} C$ |
| 1 | 1 | 0 | 1 | $A B \overline{C}$ |
| 1 | 1 | 1 | 1 | $A B C$ |

$$Y = \overline{A} B C + A \overline{B} C + A B \overline{C} + A B C$$

## Minimalizace algebraickou metodou

**Minimalizace** zjednoduší výraz tak, aby obvod potřeboval co nejméně logických členů a vstupů. Algebraická metoda používá zákony Booleovy algebry – nejčastěji vytýkání a doplněk $A + \overline{A} = 1$.

**Příklad 2.**

$$Y = A B + A \overline{B} = A (B + \overline{B}) = A \cdot 1 = A$$

**Příklad 3.**

$$Y = \overline{A} B C + A B C + A B \overline{C}$$

1. Z prvních dvou členů vytkneme $B C$: $B C (\overline{A} + A) = B C$.
2. Zbude $Y = B C + A B \overline{C} = B (C + A \overline{C})$.
3. Podle absorpce negace je $C + \overline{C} A = C + A$.
4. Výsledek: $Y = B (C + A) = A B + B C$.

**Příklad 4 – minimalizace funkce „většina“.** Člen $A B C$ přičteme ještě dvakrát (idempotence $A B C + A B C = A B C$ výraz nezmění) a sdružíme ho s každým z ostatních:

$$Y = (\overline{A} B C + A B C) + (A \overline{B} C + A B C) + (A B \overline{C} + A B C)$$

Z každé závorky vytkneme společnou dvojici a použijeme $X + \overline{X} = 1$:

$$Y = B C + A C + A B$$

Místo čtyř trojvstupových součinů stačí tři dvouvstupové.

**Příklad 5 – De Morgan.**

$$Y = \overline{\overline{A} + B} = \overline{\overline{A}} \cdot \overline{B} = A \overline{B}$$

## Realizace pomocí členů NAND

Člen **NAND** je **univerzální** – samotnými členy NAND lze vytvořit libovolnou logickou funkci. Výrobci proto často staví obvody jen z jednoho typu členu (NAND se v technologii CMOS vyrábí nejsnáze). Totéž platí pro NOR.

**Negace z NAND** – oba vstupy členu spojíme:

$$\overline{A} = \overline{A \cdot A}$$

**Součin z NAND** – za člen NAND zařadíme druhý NAND zapojený jako invertor:

$$A \cdot B = \overline{\overline{A \cdot B}}$$

**Součet z NAND** – podle De Morganova zákona nejprve negujeme oba vstupy:

$$A + B = \overline{\overline{A} \cdot \overline{B}}$$

### Převod funkce na členy NAND

1. Funkci minimalizujeme a zapíšeme jako **součet součinů**.
2. Celý výraz **dvakrát negujeme** (hodnota se nezmění).
3. Spodní negaci rozložíme **De Morganovým zákonem** – součet se změní na součin negací.
4. Každý negovaný součin je jeden člen NAND.

**Příklad 6 – funkce „většina“ z členů NAND.**

$$Y = A B + A C + B C = \overline{\overline{A B + A C + B C}} = \overline{\overline{A B} \cdot \overline{A C} \cdot \overline{B C}}$$

Schéma tedy tvoří **tři dvouvstupové členy NAND** se vstupy (A, B), (A, C) a (B, C), jejichž výstupy vedou do **jednoho třívstupového členu NAND**, na jehož výstupu je Y. Obvod potřebuje jen jeden typ členu.

**Příklad 7.** Funkci $Y = A + \overline{B} C$ převedeme na NAND:

$$Y = \overline{\overline{A + \overline{B} C}} = \overline{\overline{A} \cdot \overline{\overline{B} C}}$$

Potřebujeme: invertor (NAND se spojenými vstupy) pro $\overline{A}$, invertor pro $\overline{B}$, dvouvstupový NAND se vstupy $\overline{B}$ a C a výstupní dvouvstupový NAND se vstupy $\overline{A}$ a $\overline{\overline{B} C}$ – celkem čtyři členy NAND.

## Otázky k opakování

1. Kolik řádků má pravdivostní tabulka funkce čtyř proměnných? ||$2^4 = 16$||
2. Zapište oba De Morganovy zákony. ||$\overline{A B} = \overline{A} + \overline{B}$ a $\overline{A + B} = \overline{A} \cdot \overline{B}$||
3. Zjednodušte $Y = A + A B$. ||$Y = A$ (absorpce)||
4. Zjednodušte $Y = \overline{A} \overline{B} + \overline{A} B + A B$. ||$\overline{A}(\overline{B} + B) + A B = \overline{A} + A B = \overline{A} + B$||
5. Proč se člen NAND označuje jako univerzální? ||samotnými členy NAND lze vytvořit negaci, součin i součet, a tedy libovolnou logickou funkci||
6. Jak z členu NAND vytvoříte invertor? ||spojením obou vstupů: $\overline{A \cdot A} = \overline{A}$||
7. Vyjádřete $Y = A B + C$ pouze pomocí NAND. ||$Y = \overline{\overline{A B} \cdot \overline{C}}$ – NAND (A, B), invertor pro C a výstupní NAND||
