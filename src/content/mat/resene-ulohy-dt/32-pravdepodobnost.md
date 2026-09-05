---
title: "Pravděpodobnost"
order: 32
source: "MATURITA HADR/Matematika/řešené postupy matematických okruhů z DT 2010 - 2017/32) Pravděpodobnost.pdf"
hasExercises: true
---

> Pozn. k obsahu: Klasická pravděpodobnost se počítá jako $P(A)=\dfrac{\text{počet příznivých elementárních jevů (PEJ)}}{\text{počet možných elementárních jevů (MEJ)}}$. Konkrétní zlomkové hodnoty se v PDF často ztratily jako vzorcové objekty, ale počty (PEJ, MEJ) zůstaly dochované v textu, takže výsledné zlomky šlo dopočítat.

*Příklady z maturitních testů Cermatu (základní úroveň) — Pravděpodobnost*

**1)** Ze 52 karet bylo odebráno 7. Mezi zbývajícími je 9 srdcových. Jaká je pravděpodobnost, že v dalším tahu nebude vytažena srdcová karta?

*Jaro 2012, příklad č. 14. Body: 2. Výsledek: $\dfrac{36}{45}=0{,}8$.*

Řešení: zbývá $52-7=45$ karet (MEJ). Nesrdcových je $45-9=36$ (PEJ). $P(A)=\dfrac{36}{45}=0{,}8$.

**2)** V osudí jsou 2 bílé a 3 černé koule, vytahují se bez vracení. Přiřaďte jevům a)–c) pravděpodobnost:

a) První tažená koule bude bílá.   b) První dvě tažené koule budou černé.   c) V první tažené dvojici budou obě barvy.

*Podzim 2012, příklad č. 26. Body: 3. Výsledek: a) $\dfrac25$, b) $\dfrac3{10}$, c) $\dfrac35$.*

Řešení: a) PEJ $=2$ (bílé koule), MEJ $=5$: $P=\dfrac25$.

b) PEJ $=\binom20\cdot\binom32=1\cdot3=3$; MEJ $=\binom52=10$: $P=\dfrac3{10}$.

c) PEJ $=\binom21\cdot\binom31=2\cdot3=6$; MEJ $=10$: $P=\dfrac6{10}=\dfrac35$.

**3)** Ze 25 žáků je 10 dobře připraveno. Vylosuje se 5 ke zkoušení. Jaká je pravděpodobnost, že první vylosovaný je dobře připraven?

A) 0,05   B) 0,2   **C) 0,4**   D) 0,5   E) více než 0,5

*Jaro 2013, příklad č. 23. Body: 2.*

Řešení ("chyták" — údaj o pěti žácích je nepodstatný): PEJ $=10$, MEJ $=25$: $P=\dfrac{10}{25}=0{,}4$.

**4)** Hází se šestistěnnou kostkou. Rozhodněte o pravdivosti tvrzení o pravděpodobnostech:

a) padne sudé číslo   b) padne číslo větší než 4   c) padne číslo menší než 3   d) nepadne číslo 6

*Jaro 2014, příklad č. 16. Body: 2. Výsledek: a) ANO, b) NE, c) ANO, d) NE.*

Řešení: a) PEJ $\{2,4,6\}$: $P=\dfrac36=\dfrac12$ — tvrzení pravdivé.

b) PEJ $\{5,6\}$: $P=\dfrac26=\dfrac13$ — nesouhlasí s tvrzenou hodnotou.

c) PEJ $\{1,2\}$: $P=\dfrac26=\dfrac13$ — tvrzení pravdivé.

d) PEJ $\{1,2,3,4,5\}$: $P=\dfrac56$ — nesouhlasí s tvrzenou hodnotou.

**5)** Hodí se kostkou a mincí. Jaká je pravděpodobnost, že padne šestka a orel?

A–D) *(nedochováno)*   **E) $\dfrac1{12}$**

*Podzim 2014, příklad č. 22. Body: 2.*

Řešení (pravděpodobnost průniku nezávislých jevů $P(A\cap B)=P(A)\cdot P(B)$): $P(A)=\dfrac16$ (šestka), $P(B)=\dfrac12$ (orel). $P(A\cap B)=\dfrac16\cdot\dfrac12=\dfrac1{12}$.

**6)** Ze 3 chlapců a 4 dívek se losují 2 hráči (kapitán, kormidelník). Jaká je pravděpodobnost, že kapitánem bude chlapec?

A) *(nedochováno)*   **B) $\dfrac37$**   C–E) *(nedochováno)*

*Jaro 2016, příklad č. 24. Body: 2.*

Řešení ("chyták" — druhé losování je nepodstatné): PEJ $=3$, MEJ $=7$: $P=\dfrac37$.

**7)** Z 50 cyklistů se 10 provinilo. Vybere se 5. Jaká je pravděpodobnost, že mezi nimi nebude žádný provinilec?

**A) 0,31**   B) 0,40   C) 0,49   D) 0,58   E) jiná pravděpodobnost

*Podzim 2016, příklad č. 22. Body: 2.*

Řešení: PEJ $=\binom{10}0\cdot\binom{40}5=1\cdot658\,008=658\,008$; MEJ $=\binom{50}5=2\,118\,760$. $P=\dfrac{658\,008}{2\,118\,760}\approx0{,}31$.

**8)** Z 25 žáků 3 úkol nevypracovali, 6 vypracovalo chybně, zbytek správně. Vybere se dvojice. Jaká je pravděpodobnost, že oba mají úkol správně?

**A) $\dfrac2{5}$**   B–E) *(nedochováno)*

*Jaro 2017, příklad č. 20. Body: 2.*

Řešení: správně vypracovalo $25-3-6=16$ žáků. PEJ $=\binom30\cdot\binom60\cdot\binom{16}2=1\cdot1\cdot120=120$; MEJ $=\binom{25}2=300$. $P=\dfrac{120}{300}=0{,}4$.

**9)** Z čísel 1–100 se vybere jedno. a) Pravděpodobnost dělitelnosti osmi? b) Dělitelnosti dvěma, ale ne osmi?

*Podzim 2017, příklad č. 9. Body: 2. Výsledek: a) 0,12, b) 0,38.*

Řešení: a) násobků 8 je 12 (8 až 96): $P=\dfrac{12}{100}=0{,}12$.

b) násobků 2 je 50, z toho 12 je i násobkem 8: PEJ $=50-12=38$: $P=\dfrac{38}{100}=0{,}38$.

**10)** Výprava (1 řidič, 2 učitelky, 27 studentů) má 30 vstupenek, losují se 4 ceny. Jaká je pravděpodobnost, že všechny získají studenti?

A) 0,12   B) 0,15   **C) 0,64**   D) 0,68   E) jiná pravděpodobnost

*Podzim 2017, příklad č. 22. Body: 2.*

Řešení: PEJ $=\binom10\cdot\binom20\cdot\binom{27}4=1\cdot1\cdot17\,550=17\,550$; MEJ $=\binom{30}4=27\,405$. $P=\dfrac{17\,550}{27\,405}\approx0{,}64$.

---

*Ilustrační maturitní testy Cermatu*

**1i)** Pravděpodobnost, že přijde dívka, je 0,6; malá dívka 0,4; malý chlapec 0,3. Určete pravděpodobnost:

a) přijde chlapec   b) přijde velká dívka   c) přijde malé dítě   d) nepřijde malá dívka

A) 0,2   B) 0,3   **C) 0,4**   D) 0,5   E) 0,6   F) 0,7

*2010 (2), příklad č. 12. Body: 4. Výsledek: a) C, b) A, c) F, d) E.*

Řešení: chlapec $=1-0{,}6=0{,}4$; velká dívka $=0{,}6-0{,}4=0{,}2$; velký chlapec $=0{,}4-0{,}3=0{,}1$. Součet čtyř skupin: $0{,}4+0{,}2+0{,}3+0{,}1=1$ ✓.

a) $0{,}4$. b) $0{,}2$. c) malé dívky $+$ malí chlapci $=0{,}4+0{,}3=0{,}7$. d) $1-0{,}4=0{,}6$.

**2i)** Ze 3 dívek a 6 chlapců se losuje 5 dětí. Přiřaďte jevům a)–c) pravděpodobnost:

a) první je dívka   b) všech 5 jsou chlapci   c) jsou 2 dívky a 3 chlapci

*2013, příklad č. 26. Body: 3. Výsledek: a) B ($\tfrac13$), b) A ($\tfrac1{21}$), c) E ($\tfrac{10}{21}$).*

Řešení: a) PEJ $=3$, MEJ $=9$: $P=\dfrac13$.

b) PEJ $=\binom30\cdot\binom65=1\cdot6=6$; MEJ $=\binom95=126$: $P=\dfrac6{126}=\dfrac1{21}$.

c) PEJ $=\binom32\cdot\binom63=3\cdot20=60$; MEJ $=126$: $P=\dfrac{60}{126}=\dfrac{10}{21}$.

**3i)** V osudí jsou 2 bílé a 4 modré koule, vytáhnou se 4. Přiřaďte jevům a)–c) pravděpodobnost:

a) zbydou 2 bílé   b) zbydou 2 modré   c) zbydou 2 stejné barvy

*2014 (1), příklad č. 26. Body: 3. Výsledek: a) A ($\tfrac1{15}$), b) E ($\tfrac25$), c) C ($\tfrac7{15}$).*

Řešení: a) zbydou 2 bílé $\implies$ vytaženo 0 bílých, 4 modré: PEJ $=\binom20\cdot\binom44=1$; MEJ $=\binom64=15$: $P=\dfrac1{15}$.

b) zbydou 2 modré $\implies$ vytaženy 2 bílé, 2 modré: PEJ $=\binom22\cdot\binom42=1\cdot6=6$; MEJ $=15$: $P=\dfrac6{15}=\dfrac25$.

c) jevy z a) a b) se vzájemně vylučují ($P(A\cap B)=0$): $P(A\cup B)=P(A)+P(B)-0=\dfrac1{15}+\dfrac6{15}=\dfrac7{15}$.

**4i)** Hází se červenou a zelenou kostkou. Jaká je pravděpodobnost, že na červené padne číslo větší než 2?

A) menší než ½   B–C) *(nedochováno)*   **D) $\dfrac23$**   E) více než ⅔

*2014 (2), příklad č. 23. Body: 2.*

Řešení: zelená kostka pravděpodobnost na červené neovlivňuje (nezávislé jevy). PEJ $\{3,4,5,6\}$: $P=\dfrac46=\dfrac23$.

## Zdroje

MATURITA HADR / Matematika / řešené postupy matematických okruhů z DT 2010–2017, dokument *32) Pravděpodobnost.pdf*.
