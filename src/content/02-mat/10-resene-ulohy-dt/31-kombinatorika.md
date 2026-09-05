---
title: "Kombinatorika"
order: 31
source: "MATURITA HADR/Matematika/řešené postupy matematických okruhů z DT 2010 - 2017/31) Kombinatorika.pdf"
hasExercises: true
---

> Pozn. k obsahu: Vzorce ($V(k,n)=\frac{n!}{(n-k)!}$, $K(k,n)=\binom nk=\frac{n!}{k!(n-k)!}$, $P(n)=n!$) se v PDF ztratily jako vzorcové objekty, doplněny standardním zněním. U úloh 9, 12 a 17 se ztratil i přesný tvar zadaného výrazu — ponechán jen dochovaný postup a výsledek.

*Příklady z maturitních testů Cermatu (základní úroveň) — Kombinatorika*

**1)** Určete $k$: $100!=k\cdot98!$.

*Jaro 2011, příklad č. 5. Body: 1. Výsledek: $k=99\cdot100=9\,900$.*

Řešení: $/:98! \implies k=\dfrac{100!}{98!}=100\cdot99=9\,900$.

**2)** Určete $m$: $m!\cdot2^8=2\cdot4\cdot6\cdot8\cdot10\cdot12\cdot14\cdot16$.

*Jaro 2011, příklad č. 6. Body: 1. Výsledek: $m=8$ (tj. $m!=8!$).*

Řešení: pravá strana $=10\,321\,920$. $m!\cdot256=10\,321\,920\ /:256 \implies m!=40\,320=8!$, tedy $m=8$.

*(Alternativně rozkladem na prvočísla: pravá strana $=2^{15}\cdot3^2\cdot5\cdot7$, po vydělení $2^8$ dostaneme $m!=2^7\cdot3^2\cdot5\cdot7=8\cdot7\cdot6\cdot5\cdot4\cdot3\cdot2=8!$.)*

**3)** Na křižovatce lze zahnout doleva (L), doprava (P) nebo pokračovat rovně (S). Kolika způsoby projede auto dvěma křižovatkami?

**A) 9**   B) 8   C) 6   D) 5   E) 4

*Jaro 2011, příklad č. 21. Body: 2.*

Řešení (kombinatorické pravidlo součinu: $A$ možností v 1. situaci $\times$ $B$ možností ve 2. situaci $=A\cdot B$ celkem): na každé křižovatce 3 možnosti, celkem $3\cdot3=9$.

**4)** Vláďa losuje 1 otázku z 10 a dvojici otázek z jiné skupiny 20. Kolik trojic otázek je ve hře?

A) 4 600   B) 4 000   C) 3 800   **D) 1 900**   E) jiný počet

*Podzim 2011, příklad č. 23. Body: 2.*

Řešení: $\binom{10}1=10$ možností; $\binom{20}2=190$ možností. Celkem $10\cdot190=1\,900$.

**5)** Fronta má 4 dívky a 6 chlapců. Kolika způsoby se mohou seřadit?

**A) $10!$**   B) $4!+6!$   C) $4\cdot6$   D) $4!\cdot6!$   E) $(4\cdot6)!$

*Podzim 2012, příklad č. 23. Body: 2.*

Řešení: $n=10$ lidí, $k=10$ (celá fronta), záleží na pořadí, bez opakování — permutace bez opakování: $P(n)=n!=10!$.

**6)** Pětimístný kód z pěti různých číslic, na prvním místě 8, na posledním 5. Kolik kódů vyhovuje?

A) méně než 336   **B) 336**   C) 512   D) 720   E) více než 720

*Jaro 2013, příklad č. 22. Body: 2.*

Řešení ("obsazené a volné pozice" — obsazená 1. a 5. pozice, volné 3): $n=8$ (číslice kromě 8 a 5), $k=3$, záleží na pořadí, bez opakování — variace: $V(3,8)=\dfrac{8!}{5!}=336$.

**7)** Petr je jeden ze 14 chlapců; vybírá se 4členný tým, Petr je jistý, ostatní 3 losem z 13. Kolik týmů lze sestavit?

A) *(nedochováno)*   **B) $\binom{13}3$**   C) $1+13+12+11$   D) $13\cdot12\cdot11$   E) jiný počet

*Podzim 2013, příklad č. 24. Body: 2.*

Řešení ("obsazené a volné pozice"): $n=13$, $k=3$, nezáleží na pořadí, bez opakování — kombinace: $K(3,13)=\binom{13}3$.

**8)** Z 5 děvčat a 4 chlapců vybíráme 6člennou skupinu (3 dívky, 3 chlapci). Kolika způsoby?

A) 16   B) 20   **C) 40**   D) 180   E) jiný počet

*Jaro 2014, příklad č. 17. Body: 2.*

Řešení: $\binom53=10$ (dívky), $\binom43=4$ (chlapci). Celkem $10\cdot4=40$.

**9)** Vypočtěte hodnotu výrazu. ((Přesný tvar se nedochoval.))

*Podzim 2014, příklad č. 10. Body: 1. Výsledek: 101.*

Řešení (dochovaný postup): výraz se upraví na $100+100\cdot\dfrac1{100}=100+1=101$.

**10)** V první řadě divadla je 12 obsazených a 3 volná místa (z 15). Kolika způsoby lze volná místa rozmístit?

A) 220   **B) 455**   C) 1 320   D) 2 730   E) jiný počet

*Podzim 2014, příklad č. 21. Body: 2.*

Řešení: ekvivalentní otázce "kolika způsoby vybereme 3 sedadla z 15" — kombinace bez opakování: $K(3,15)=\binom{15}3=455$.

**11)** Z 10 dětí (mezi nimi jediný Adam, jediná Bohunka) vybíráme trojici. Kolika způsoby při podmínce:

a) není Adam ani Bohunka   b) je Adam i Bohunka   c) je Adam, není Bohunka   d) je Adam

A) 28   **B) 36**   C) 56   D) 72   E) 336   F) jiný počet

*Jaro 2015, příklad č. 25. Body: 4. Výsledek: a) C, b) F (8), c) A, d) B.*

Řešení: a) $n=8$ (bez Adama a Bohunky), $k=3$: $\binom83=56$.

b) obsazené 2 pozice, $n=8$, $k=1$: $\binom81=8$.

c) obsazená 1 pozice (Adam), $n=8$ (bez Adama a Bohunky), $k=2$: $\binom82=28$.

d) obsazená 1 pozice (Adam), $n=9$ (bez Adama, Bohunka smí být), $k=2$: $\binom92=36$.

**12)** Vypočtěte hodnotu kombinatorického výrazu s $\binom nk$. ((Přesný tvar se nedochoval.))

A–C) *(nedochováno)*   **D) $n$**   E) $2n$

*Podzim 2015, příklad č. 17. Body: 2.*

Řešení (dochovaný postup): výraz se po úpravě zjednoduší přímo na $n$.

**13)** 8 spolužáků se seřadí tak, aby Eva byla první a Dan předposlední. Kolika způsoby?

A) 5 040   B) 2 880   C) 1 440   **D) 720**   E) jiný počet

*Podzim 2015, příklad č. 18. Body: 2.*

Řešení: obsazená 1. a předposlední pozice, volných 6 — permutace: $P(6)=6!=720$.

**14)** Rovnice s neznámou $n\in\mathbb N$: $\dfrac{10!}{9!}+\dfrac{9!}{9!}=n$ ((rekonstrukce z postupu — přesný tvar zlomků s faktoriály se z části nedochoval)). Řešení?

**A) 11**   B) 10   C) 9   D) 8   E) jiné řešení

*Jaro 2016, příklad č. 23. Body: 2.*

Řešení (dochovaný postup): po vynásobení a zkrácení dostáváme $10!+9!=9!\cdot n\ /:9! \implies10+1=n \implies n=11$.

**15)** Trojciferné číslo: sudá číslice na místě stovek, lichá na desítkách, na jednotkách libovolná dosud nepoužitá. Kolik čísel vyhovuje?

*Podzim 2016, příklad č. 11. Body: 1. Výsledek: 160 čísel.*

Řešení: stovky — 4 volby (2,4,6,8); desítky — 5 voleb (1,3,5,7,9); jednotky — $10-2=8$ voleb. Celkem $4\cdot5\cdot8=160$.

**16)** Čtyřciferné číslo ze 4 různých číslic, na prvním místě 2, na místě desítek lichá číslice. Kolik čísel?

A) 21   B) 240   **C) 280**   D) 360   E) jiný počet

*Jaro 2017, příklad č. 19. Body: 2.*

Řešení (1. způsob): 1. místo — 1 volba (2); 3. místo (desítky) — 5 voleb (1,3,5,7,9); 2. místo — 8 voleb; 4. místo — 7 voleb. Celkem $1\cdot5\cdot8\cdot7=280$.

Řešení (2. způsob): pro každou z 5 lichých číslic na 3. pozici je $V(2,8)=\dfrac{8!}{6!}=56$ možností pro zbylé dvě pozice. Celkem $5\cdot56=280$.

**17)** Kolikrát je číslo $A$ větší než číslo $B$? ((Přesná čísla $A$, $B$ se nedochovala.))

A) méně než 10krát   B) 10krát   C) 20krát   **D) 50krát**   E) více než 50krát

*Jaro 2017, příklad č. 21. Body: 2.*

Řešení (dochovaný postup): poměr obou hodnot vychází $50$.

---

*Příklady z testů PUP*

**1p)** Určete $k$: $\dfrac{95!}{93!}=k$.

*Jaro 2011 PUP, příklad č. 5. Body: 1. Výsledek: $k=95\cdot94=8\,930$.*

Řešení: $k=95\cdot94=8\,930$.

**2p)** Určete $m$: $\dfrac{(m+2)!}{m!}=2\,011\cdot2\,010$.

*Jaro 2011 PUP, příklad č. 6. Body: 1. Výsledek: $m=2\,009$.*

Řešení: $(m+2)(m+1)=2\,011\cdot2\,010 \implies m=2\,009$.

*(Kvadratickou rovnici $(m+2)(m+1)=2\,011\cdot2\,010$ by bylo možné řešit i běžným způsobem, ale je to zbytečně zdlouhavé — stačí porovnat strukturu součinu.)*

**3p)** Pětimístné slovo se skládá ze dvou čárek a tří teček. Kolik takových slov existuje?

**A) 10**   B) 20   C–D) *(nedochováno)*   E) jiný počet

*Jaro 2011 PUP, příklad č. 21. Body: 2.*

Řešení: $n=2$ (tečka, čárka), $k=5$ (délka slova), záleží na pořadí, opakování ano, ale s **přesně daným počtem opakování** každého symbolu ($k_1=2$ čárky, $k_2=3$ tečky) — jde o **permutace s opakováním**:

$$P'_{k_1,k_2}(k) = \frac{k!}{k_1!\cdot k_2!} = \frac{5!}{2!\cdot3!} = 10$$

---

*Ilustrační maturitní testy Cermatu*

**1i)** Kód: na 1. místě jedno ze 4 písmen, na dalších dvou pozicích dvojciferné číslo od 11 do 45. Kolik kódů?

*2010 (2), příklad č. 10. Body: 2. Výsledek: 140.*

Řešení: na 1. místě 4 možnosti. Na dalších dvou místech (čísla 11 až 45 včetně) je $45-11+1=35$ možností (pozor, ne 34!). Celkem $4\cdot35=140$.

**2i)** Kolika způsoby lze na šachovnici rozmístit 3 stejné figury tak, aby byly všechny na hlavní, nebo všechny na vedlejší diagonále?

A) 16   **B) 20**   C) 30   D) 32   E) 33

*2012, příklad č. 22. Body: 2.*

Řešení: nejde o kombinatorické pravidlo součinu (figury jsou buď na jedné, nebo druhé diagonále, ne na obou zároveň) — výsledky pro obě diagonály se **sečtou**. Na 1 diagonále (5 polí) vybíráme 3 pole, nezáleží na pořadí, bez opakování: $K(3,5)=\binom53=10$. Druhá diagonála má stejný počet možností. Celkem $10+10=20$.

**3i)** Vypočtěte aritmetický průměr čísel $\dfrac{100!-2\cdot99!}{99!}$ a $\dfrac{100!+101!}{100!}$.

*2013, příklad č. 15. Body: 2. Výsledek: 100.*

Řešení: $\dfrac{100!-2\cdot99!}{99!}=100-2=98$. $\dfrac{100!+101!}{100!}=1+101=102$. Průměr: $(98+102):2=100$.

**4i)** Čtyřmístný kód: první tři místa různé nenulové číslice, čtvrté místo nejmenší z těchto tří. Kolik kódů vyhovuje?

A) méně než 504   **B) 504**   C) 512   D) 720   E) více než 720

*2014 (2), příklad č. 22. Body: 2.*

Řešení: první 3 místa — variace bez opakování z 9 nenulových číslic: $V(3,9)=\dfrac{9!}{6!}=504$. Čtvrté místo je jednoznačně určeno (nejmenší z trojice) — 1 volba. Celkem $504\cdot1=504$.

## Zdroje

MATURITA HADR / Matematika / řešené postupy matematických okruhů z DT 2010–2017, dokument *31) Kombinatorika.pdf*.
