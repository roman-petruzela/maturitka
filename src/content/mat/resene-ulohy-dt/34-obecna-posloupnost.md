---
title: "Obecná posloupnost"
order: 34
source: "MATURITA HADR/Matematika/řešené postupy matematických okruhů z DT 2010 - 2017/34) Obecná posloupnost.pdf"
hasExercises: true
---

> Pozn. k obsahu: U možnosti D) v úloze 1) se v PDF ztratila mocnina ve jmenovateli — z dochovaných mezivýpočtů ($a_1=108\!:\!3=36$, tedy $108/3^n$) šlo přesně zrekonstruovat na $a_n=\frac{108}{3^n}$.

*Příklady z maturitních testů Cermatu (základní úroveň) — Obecná posloupnost*

**1)** První tři členy posloupnosti: $a_1=36$, $a_2=12$, $a_3=4$. Který vzorec pro $n$-tý člen lze použít?

A) $a_n=36+24^{-n}$   B) $a_n=52-16n$   C) $a_n=60-24n$   **D) $a_n=\dfrac{108}{3^n}$**   E) $a_n=36\left(\dfrac13\right)^n$

*Podzim 2014, příklad č. 24. Body: 2.*

Vzorec musí platit pro všechny tři zadané členy — ověřujeme postupně $a_1$, $a_2$, $a_3$; jakmile vyjde nepravdivá rovnost, vzorec je nesprávný.

Řešení: A) $a_1=36+24^{-1}=36+\tfrac1{24}\neq36$ — nevyhovuje. B) $a_1=52-16=36$ ✓, ale $a_2=52-32=20\neq12$ — nevyhovuje. C) $a_1=36$ ✓, $a_2=12$ ✓, ale $a_3=60-72=-12\neq4$ — nevyhovuje. D) $a_1=\dfrac{108}3=36$ ✓, $a_2=\dfrac{108}9=12$ ✓, $a_3=\dfrac{108}{27}=4$ ✓ — vyhovuje! E) $a_1=36\cdot\tfrac13=12\neq36$ — nevyhovuje (posloupnost 36,12,4 je sice geometrická s kvocientem $\tfrac13$, ale správný tvar by musel mít exponent $n-1$, ne $n$ — proto E navzdory podobnosti nevyhovuje).

Pro dané členy lze použít vzorec **D**.

---

*Ilustrační maturitní testy Cermatu*

**1i)** Posloupnost má vzorec pro $n$-tý člen $a_n=5n-3$. Vypočtěte rozdíl $a_{n+1}-a_n$.

*2012, příklad č. 12. Body: 1. Výsledek: 5.*

Řešení: $a_{n+1}=5(n+1)-3=5n+2$. $a_{n+1}-a_n=(5n+2)-(5n-3)=5$.

**2i)** Posloupnost má vzorec $a_n=5n-3$. Vypočtěte, kolikátý člen je jedenáctkrát větší než druhý člen ($a_n=11a_2$).

*2012, příklad č. 13. Body: 2. Výsledek: 16.*

Řešení: $a_2=5\cdot2-3=7$. $5n-3=11\cdot7=77 \implies5n=80 \implies n=16$.

Kontrola: $a_{16}=5\cdot16-3=77=11\cdot7=11a_2$ ✓.

## Zdroje

MATURITA HADR / Matematika / řešené postupy matematických okruhů z DT 2010–2017, dokument *34) Obecná posloupnost.pdf*.
