---
title: "Výrok, negace výroku"
order: 1
source: "mat2/Výrok, negace výroku.pdf"
hasExercises: true
---

**Výrok** je sdělení, u něhož má smysl otázka, zda je, či není pravdivé.

Příklady výroků:

1. Číslo 2 je prvočíslo.
2. Číslo 8 je liché.
3. Paříž je hlavní město Španělska.
4. Pro každé reálné číslo platí: $(-a)^2=a^2$.

Příklady sdělení, které výroky **nejsou**:

5. Kolik je hodin?
6. Jdi domů!
7. $(-a)^2=a^2$

Výrokem tedy nejsou otázky ani příkazy. Rovnost v příkladu 4) je výrok (obsahuje kvantifikátor "pro každé"), ale rovnost v příkladu 7) výrok není — musíme vždy specifikovat, pro jaká $a$ daná rovnost platí (bez toho nemá smysl ptát se, zda je "pravdivá").

**Příklad:** Určete, které sdělení je výrok:

1. Těžnice trojúhelníku se protínají v jednom bodě.
2. Všechna reálná čísla jsou kladná.
3. Některá reálná čísla jsou kladná.
4. Haha.
5. Hlavním městem Německa je Londýn.
6. Máš čas?
7. $(a+b)^2=a^2+b^2$.

Výsledek: ||1) výrok (pravdivý); 2) výrok (nepravdivý); 3) výrok (pravdivý); 4) NENÍ výrok (citoslovce, nemá pravdivostní hodnotu); 5) výrok (nepravdivý — hl. město Německa je Berlín); 6) NENÍ výrok (otázka); 7) NENÍ výrok (bez kvantifikátoru — platí jen pro některá a,b, ne obecně)||

## Negace výroku

**Negace** výroku $v$ je výrok "Není pravda, že $v$". Značíme ji $\neg v$. Pokud je výrok $v$ pravdivý, je $\neg v$ nepravdivý, a naopak.

Negaci výroku můžeme vyslovit i v lepším znění než "není pravda, že" — např. "Není pravda, že číslo 8 je sudé" lze vyjádřit jako "Číslo 8 je liché". Musíme ale dát pozor, abychom do negace zahrnuli **všechny** možnosti, které původní výrok nezahrnuje.

| $v$ | $\neg v$ |
|---|---|
| Daný trojúhelník $ABC$ je ostroúhlý. | Daný trojúhelník $ABC$ je tupoúhlý nebo pravoúhlý. |
| Daný trojúhelník $KLM$ nemá všechny strany stejné. | Daný trojúhelník $KLM$ je rovnostranný. |
| Přímka $t$ je tečnou dané kružnice $k$. | Přímka $t$ je sečnou dané kružnice $k$ nebo s ní nemá žádný společný bod. |
| $\sqrt2+\sqrt3\geq\sqrt5$ | $\sqrt2+\sqrt3<\sqrt5$ |
| Kořen rovnice $2x-1=5$ je kladné číslo. | Kořen rovnice $2x-1=5$ je číslo záporné nebo nula. |

**Příklad:** Zneguj bez použití "není pravda, že":

1. Číslo 8 je kladné číslo.
2. Je den.
3. Je podzim.
4. Je středa nebo čtvrtek.
5. $\sqrt2+\pi>4$

Výsledek: ||1) Číslo 8 je záporné nebo nulové (nekladné). 2) Je noc. 3) Není podzim (je jaro, léto nebo zima). 4) Není středa ani čtvrtek. 5) √2+π≤4||

**Do negace výroku musíme vždy zahrnout všechny možnosti, které neobsahuje původní výrok.**

**Příklad:** Posuďte pravdivost výroků a utvořte jejich negace:

1. Číslo 5 je nezáporné.
2. $\sqrt5>2$
3. Číslo $6-9$ není kladné.
4. $5-8\geq4-6$
5. $\sqrt{49}\neq7$

Výsledek: ||1) pravdivý (5≥0); negace: "Číslo 5 je záporné" (nepravdivá). 2) pravdivý (√5≈2,236>2); negace: √5≤2 (nepravdivá). 3) pravdivý (6-9=-3, není kladné); negace: "Číslo 6-9 je kladné" (nepravdivá). 4) nepravdivý (5-8=-3, 4-6=-2, a -3≥-2 neplatí); negace: 5-8<4-6 (pravdivá). 5) nepravdivý (√49=7 přesně); negace: √49=7 (pravdivá)||

**Příklad:** Určete, který z následujících výroků je pravdivý:

1. Rovnici $2(3x-1)=6x-2$ vyhovuje každé přirozené číslo.
2. Absolutní hodnota každého čísla je číslo kladné.
3. Vzdálenost libovolných dvou bodů je číslo nezáporné.
4. Pro každé přirozené číslo $x$ je číslo $x+1$ kladné.
5. Pro každé celé číslo $x$ je číslo $x+1$ kladné.

Výsledek: ||1) PRAVDIVÝ — rovnice je identita (6x-2=6x-2), platí pro každé x. 2) NEPRAVDIVÝ — protipříklad \|0\|=0, což není kladné číslo. 3) PRAVDIVÝ — vzdálenost je vždy ≥0. 4) PRAVDIVÝ — nejmenší přirozené číslo dává x+1≥1>0. 5) NEPRAVDIVÝ — protipříklad x=-2: x+1=-1, což není kladné||

## Negace výroků o počtu ("alespoň", "nejvýše")

Řekneme-li, že množina má **alespoň** $k$ prvků, znamená to, že počet jejích prvků je **větší nebo roven** $k$. Řekneme-li, že má **nejvýše** $k$ prvků, znamená to, že jejich počet je **menší nebo roven** $k$.

| Výrok | Negace výroku |
|---|---|
| "Množina $M$ má alespoň $k$ prvků." | "Množina $M$ má nejvýše $k-1$ prvků." |
| "Množina $M$ má nejvýše $k$ prvků." | "Množina $M$ má alespoň $k+1$ prvků." |

**Příklad:** Zneguj:

1. Rovnice $x^8-1=0$ má alespoň dva reálné kořeny.
2. V této přihrádce je nejvýše 10 předmětů.
3. Číslo 12 má nejvýše 5 dělitelů.
4. Krychle má nejvýše 8 vrcholů.
5. Množina $M$ má právě $n-1$ prvků.

Výsledek: ||1) Rovnice x⁸-1=0 má nejvýše jeden reálný kořen. (mimochodem: původní výrok je pravdivý, rovnice má reálné kořeny x=1 a x=-1, tedy dva) 2) V této přihrádce je alespoň 11 předmětů. 3) Číslo 12 má alespoň 6 dělitelů. (původní výrok je NEpravdivý — 12 má dělitele 1,2,3,4,6,12, tedy přesně 6, takže negace je pravdivá) 4) Krychle má alespoň 9 vrcholů. (původní výrok je pravdivý — krychle má přesně 8 vrcholů, negace je tedy nepravdivá) 5) Množina M nemá právě n-1 prvků (má jiný počet prvků než n-1)||

## Zdroje

Zdrojový dokument: *mat2/Výrok, negace výroku.pdf*
