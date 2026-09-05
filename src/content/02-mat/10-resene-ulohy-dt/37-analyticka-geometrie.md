---
title: "Analytická geometrie"
order: 37
source: "MATURITA HADR/Matematika/řešené postupy matematických okruhů z DT 2010 - 2017/37) Analytická geometrie.pdf"
hasExercises: true
---

> Pozn. k obsahu: Úlohy vycházely z obrázků (body a přímky v souřadnicové soustavě), které nejsou součástí archivu. Konkrétní souřadnice bodů a vektorů použité v postupu řešení se ale téměř vždy dochovaly v textu, takže je šlo dopočítat i bez obrázku. Používané vzorce: velikost vektoru $|\vec u|=\sqrt{u_1^2+u_2^2}$; skalární součin $\vec u\cdot\vec v=u_1v_1+u_2v_2$ (kolmé vektory mají skalární součin 0); obecná rovnice přímky $ax+by+c=0$ (kde $(a;b)$ je normálový vektor); odchylka dvou přímek $\cos\varphi=\dfrac{|u_1v_1+u_2v_2|}{\sqrt{u_1^2+u_2^2}\cdot\sqrt{v_1^2+v_2^2}}$ (pro směrové nebo pro normálové vektory obou přímek, ne kombinovaně).

*Příklady z maturitních testů Cermatu (základní úroveň) — Analytická geometrie*

**1)** Vektor $\vec u=(-3;4)$ je umístěn s počátečním bodem $A[1;-1]$. a) Znázorněte umístění vektoru v počátku. b) Určete souřadnice koncového bodu $B$.

*Jaro 2011, příklad č. 7. Body: 3. Výsledek: b) $B[-2;3]$.*

Řešení: $\vec u=B-A=(b_1-a_1;b_2-a_2)$. $(-3;4)=(b_1-1;b_2-(-1)) \implies b_1=-2,\ b_2=3$. $B[-2;3]$.

**2)** Přímka $p$ prochází body $A[-2;3]$, $B[0;2]$, $C[2;1]$. Která rovnice ji určuje?

A) $2x-y+2=0$   B) $x-2y+4=0$   C) $x-4y-2=0$   **D) $x+2y-4=0$**   E) $2x+y-2=0$

*Jaro 2011, příklad č. 17. Body: 2.*

Řešení: směrový vektor $\vec s=B-A=(2;-1)$, normálový $\vec n=(1;2)$. $p:x+2y+c=0$; $A\in p$: $-2+6+c=0 \implies c=-4$. $p:x+2y-4=0$.

**3)** Je dán vektor $\vec u=(4;-3)$. a) Určete jeho velikost. b) Doplňte souřadnice vektoru $\vec v=(x;y)$ kolmého k $\vec u$ s dvojnásobnou velikostí.

*Podzim 2011, příklad č. 7. Body: 3. Výsledek: a) $|\vec u|=5$, b) $\vec v=(6;8)$ nebo $(-6;-8)$.*

Řešení: a) $|\vec u|=\sqrt{4^2+(-3)^2}=5$.

b) prodloužený vektor: $2\vec u=(8;-6)$; přehozením souřadnic a změnou znaménka u jedné z nich dostaneme kolmý vektor stejné délky: $(6;8)$ nebo $(-6;-8)$.

**4)** Která z přímek a–e je kolmá k přímce $p$ (procházející body $A[-3;-2]$, $B[0;0]$, $C[3;2]$)?

A) $2x-3y+7=0$   B) $2x+3y-7=0$   C) $2x-3y-7=0$   D) $3x-2y-7=0$   **E) $3x+2y+7=0$**

*Podzim 2011, příklad č. 20. Body: 2.*

Řešení: směrový vektor $p$: $(3;2)$, normálový $(2;-3)$. Kolmá přímka má normálový vektor rovnoběžný se směrovým vektorem $p$, tedy $(3;2)$ nebo násobek — to odpovídá pouze možnosti E.

**5)** V rovině je dána přímka $q:y=2x-1$. Zapište obecnou rovnici přímky $p$ procházející bodem $O[0;0]$, kolmé k $q$.

*Jaro 2012, příklad č. 11. Body: 2. Výsledek: $x+2y=0$.*

Řešení: $q:2x-y-1=0$, normálový vektor $q$: $(2;-1)$. Normálový vektor $p$ (kolmé k $q$, tedy rovnoběžný se směrovým vektorem $q$): $(1;2)$. $p:x+2y+c=0$; $O\in p \implies c=0$. $p:x+2y=0$.

**6)** Trojúhelník $X[1;1]$, $Y[2;8]$, $Z[-6;2]$. Narýsujte a rozhodněte: a) je rovnoramenný? b) je ostroúhlý? c), d) shoduje se pata výšky se středem protější strany?

*Jaro 2012, příklad č. 16. Body: 2. Výsledek: a) ANO, b) NE, c) ANO, d) NE.*

Řešení: úloha je čistě konstrukční (přesné rýsování pomocí trojúhelníku s ryskou, bez výpočtu) — rovnoramenný trojúhelník má dvě strany (ramena) stejně dlouhé; ostroúhlý má všechny vnitřní úhly menší než 90°; pata výšky je patní bod kolmice spuštěné z vrcholu na protější stranu.

**7)** Který ze zobrazených vektorů má souřadnice $(2;-1)$?

*Jaro 2012, příklad č. 24. Body: 2. Výsledek: A.*

Řešení: umístíme-li vektor počátečním bodem do počátku, souřadnice koncového bodu jsou přímo souřadnicemi vektoru — odpovídá vektoru A.

**8)** a) Sestrojte přímku $p$ (prochází bodem $A[2;-1]$, směrový vektor $(-1;2)$). b) Určete průsečík $P$ s osou $y$.

*Podzim 2012, příklad č. 7. Body: 2. Výsledek: $P[0;3]$.*

Řešení: normálový vektor $p$: $(2;1)$. $p:2x+y+c=0$; $A\in p$: $4-1+c=0 \implies c=-3$. $p:2x+y-3=0$. Průsečík s osou $y$ ($x=0$): $y=3$. $P[0;3]$.

**9)** Trojúhelník $A[0;1]$, $B[3;-1]$, $C[2;3]$. Výška z $C$ leží na přímce $p$. Její rovnice je:

**A) $3x-2y=0$**   B) $3x+2y-12=0$   C) $2x-3y=0$   D) $2x-3y+5=0$   E) $2x+3y-13=0$

*Podzim 2012, příklad č. 24. Body: 2.*

Řešení: normálový vektor $p$ = směrový vektor $AB=(3;-2)$. $p:3x-2y+c=0$; $C\in p$: $6-6+c=0 \implies c=0$. $p:3x-2y=0$.

**10)** Přímka $p:x=2t,\ y=4+3t$. Zapište její obecnou rovnici.

*Jaro 2013, příklad č. 7. Body: 1. Výsledek: $3x-2y+8=0$.*

Řešení: vyloučením parametru ($x/2=t=(y-4)/3$): $3x=2y-8 \implies 3x-2y+8=0$.

**11)** a) Sestrojte trojúhelník $ABC$ ($C[-1;3]$, $\vec{CB}=(2;-3)$). b) Určete střed $S$ strany $AC$ (kde $A[-2;-1]$).

*Jaro 2013, příklad č. 8. Body: 2. Výsledek: b) $S[-1{,}5;1]$.*

Řešení: $B=C+(2;-3)=[1;0]$. $S=\left[\dfrac{a_1+c_1}2;\dfrac{a_2+c_2}2\right]=\left[\dfrac{-2-1}2;\dfrac{-1+3}2\right]=[-1{,}5;1]$.

**12)** Čtverec $ABCD$ s úhlopříčkou $AC$, $A[-4;0]$, $\vec{AC}=(6;4)$. Souřadnice středu $S$?

A) $S[1;2]$   B) $S[3;2]$   C) $S[2;4]$   **D) $S[-1;2]$**   E) $S[5;-2]$

*Podzim 2013, příklad č. 20. Body: 2.*

Řešení: $C=A+(6;4)=[2;4]$. $S=\left[\dfrac{-4+2}2;\dfrac{0+4}2\right]=[-1;2]$.

**13)** Jakou rovnici má osa $o$ úsečky $AB$ (kde $\vec{AB}=(0;-6)$, střed $S[-2;0]$)?

A) $x+6y=0$   B) $4x-6y=0$   **C) $y=0$**   D) $x=-2$   E) jinou rovnici

*Podzim 2013, příklad č. 21. Body: 2.*

Řešení: normálový vektor osy = $\vec{AB}=(0;-6)$. $o:-6y+c=0$; $S\in o$: $c=0$. $o:y=0$ (osa $AB$ je zde přímo osa $x$).

**14)** Určete vzdálenost bodu $A[1;-2]$ od přímky $BC$, kde $\vec{AB}=(-4;2)$, $\vec{AC}=(-4;3)$.

*Jaro 2014, příklad č. 12. Body: 1. Výsledek: 4.*

Řešení: $B=A+(-4;2)=[-3;0]$, $C=A+(-4;3)=[-3;1]$. Přímka $BC$ je rovnoběžná s osou $y$ ($x=-3$); vzdálenost od $A$ ($x=1$) je $|1-(-3)|=4$.

**15)** Trojúhelník $A[4;-3]$, $B[4;3]$, $C[2;1]$. Jaká je vzdálenost $A$ od středu $S$ strany $BC$?

A) 4   B) $\sqrt{17}$   C) 5   **D) $\sqrt{26}$**   E) jiná vzdálenost

*Jaro 2014, příklad č. 23. Body: 2.*

Řešení: $S=\left[\dfrac{4+2}2;\dfrac{3+1}2\right]=[3;2]$. $\vec{AS}=(-1;5)$. $|\vec{AS}|=\sqrt{1+25}=\sqrt{26}$.

**16)** a) Zapište souřadnice vektoru $\vec u$ (koncový bod $[3;-2]$, počáteční $[0;-2]$). b) Platí $\vec w=\vec u+\vec v$, kde $\vec v=(-2;3)$. Zapište souřadnice $\vec w$.

*Podzim 2014, příklad č. 9. Body: 2. Výsledek: a) $(3;0)$, b) $(1;3)$.*

Řešení: a) $\vec u=(3;-2)-(0;-2)=(3;0)$.

b) $\vec w=\vec u+\vec v=(3;0)+(-2;3)=(1;3)$.

**17)** Body $K[3;y]$, $L[x;8]$ leží na přímce $p:x=3-5t,\ y=-4-12t$. Jaká je délka úsečky $KL$?

**A) 13**   B) $\sqrt{73}$   C) $\sqrt{40}$   D) 5   E) jiná délka

*Podzim 2014, příklad č. 19. Body: 2.*

Řešení: bod $K$ ($x=3$): $3=3-5t \implies t=0 \implies y=-4$; $K[3;-4]$. Bod $L$ ($y=8$): $8=-4-12t \implies t=-1 \implies x=8$; $L[8;8]$. $\vec{KL}=(5;12)$, $|\vec{KL}|=\sqrt{25+144}=13$.

**18)** a) Určete směrový vektor přímky $AB$ ($A[-2;3]$, $\vec{AD}=(1;2)$ je normálový vektor $AB$). b) Určete vrchol $B$ (průsečík $AB$ s osou $x$).

*Jaro 2015, příklad č. 9. Body: 2. Výsledek: a) násobky $(2;-1)$, b) $B[4;0]$.*

Řešení: a) směrový vektor $AB$ je kolmý na $(1;2)$, tedy $(2;-1)$.

b) $AB:x+2y+c=0$; $A\in AB$: $-2+6+c=0 \implies c=-4$. $AB:x+2y-4=0$. Průsečík s $y=0$: $x=4$. $B[4;0]$.

**19)** Přímka $p:x=-1+t,\ y=1+2t$. Na kterém obrázku je?

*Jaro 2015, příklad č. 20. Body: 2. Výsledek: C.*

Řešení: na $p$ leží bod $[-1;1]$, směrový vektor $(1;2)$ — odpovídá obrázku C.

**20)** a) Vypočtěte chybějící souřadnici $a$ bodu $A[a;-1]$. b) Vypočtěte chybějící souřadnici $b$ bodu $B[4;b]$, kde $\vec{AB}=(5;3)$.

*Podzim 2015, příklad č. 9. Body: 2. Výsledek: a) $a=-1$, b) $b=2$.*

Řešení: $(5;3)=(4-a;b-(-1)) \implies5=4-a \implies a=-1$; $3=b+1 \implies b=2$.

**21)** Rovnoramenný pravoúhlý trojúhelník $ABC$ s pravým úhlem při $C$: $A[-1;2]$, $C[-5;-2]$. Vypočtěte délku $AB$.

*Podzim 2015, příklad č. 10. Body: 2. Výsledek: 8 jednotek.*

Řešení: $\vec{AC}=(-4;-4)$, $|\vec{AC}|=\sqrt{32}$. Protože $|AC|=|BC|$ (rovnoramenný): Pythagorova věta $|AB|^2=32+32=64 \implies|AB|=8$.

**22)** Přímka $p:-12x+4y-5=0$. Která z přímek zadaných parametricky je s $p$ rovnoběžná?

A) $\vec s=(3;-1)$   B) $\vec s=(3;1)$   C) $\vec s=(-1;3)$   **D) $\vec s=(1;3)$**   E) $\vec s=(-5;-5)$

*Podzim 2015, příklad č. 24. Body: 2.*

Řešení: normálový vektor $p$: $(-12;4)$. Hledáme směrový vektor rovnoběžný s $p$, tedy kolmý na její normálový vektor (skalární součin roven 0): $(-12;4)\cdot(1;3)=-12+12=0$ ✓ — pouze u D.

**23)** Body $K[0;-3]$, $L$. Zapište obecnou rovnici přímky $KL$, kde $\vec{KL}=(5;3)$.

*Jaro 2016, příklad č. 8.3. Body: 1. Výsledek: $3x-5y-15=0$.*

Řešení: normálový vektor: $(3;-5)$. $KL:3x-5y+c=0$; $K\in KL$: $0+15+c=0 \implies c=-15$. $KL:3x-5y-15=0$.

**24)** Vektory $\vec u=(1;2)$, $\vec v=(3;0)$. Doplňte souřadnice: a) $2\vec u$, b) $\vec u+\vec v$, c) vektor kolmý k $\vec u$.

A) $(4;2)$   **B) $(2;4)$**   C) $(2;-4)$   D) $(-2;-4)$   **E) $(-4;2)$**

*Jaro 2016, příklad č. 26. Body: 3. Výsledek: a) B, b) A, c) E.*

Řešení: a) $2\vec u=(2;4)$. b) $\vec u+\vec v=(4;2)$. c) $(-4;2)\cdot(1;2)=-4+4=0$ — kolmé.

**25)** a) Sestrojte přímky $p$ (bodem $A$, směrový vektor daný), $q$ (bodem $B[-2;3]$, kolmá k $p$). b) Zapište obecnou rovnici $q$.

*Podzim 2016, příklad č. 8. Body: 2. Výsledek: b) $q:y-3=0$.*

Řešení: normálový vektor $q$ je rovnoběžný se směrovým vektorem $p$, zde $(0;-2)$. $q:-2y+c=0$; $B\in q$: $-6+c=0 \implies c=6$. $q:-2y+6=0 \implies y=3$.

**26)** Bod $P[3;-5]$. Prochází jím přímka a)–d)?

a) $x-5=0$   b) $y=-\tfrac53x$ *(rekonstrukce ze sklonu)*   c) $3x+5y+16=0$   d) $x=3,\ y=t$

*Podzim 2016, příklad č. 16. Body: 2. Výsledek: a) N, b) A, c) A, d) A.*

Řešení: a) $3-5=-2\neq0$ — N. b) $-5=-\tfrac53\cdot3=-5$ — A. c) $9-25+16=0$ — A. d) první rovnice $3=3$ pravdivá bez ohledu na $t$, bod na přímce leží — A.

**27)** Body $A$, $B$ dány tak, že $\vec{AB}=(2\sqrt5;-2\sqrt2)$. Jaký obvod má čtverec $ABCD$?

A) $8\sqrt5$   B) 22   **C) $8\sqrt7$**   D) 28   E) nelze určit

*Podzim 2016, příklad č. 17. Body: 2.*

Řešení: $a=|\vec{AB}|=\sqrt{20+8}=\sqrt{28}=2\sqrt7$. $o=4a=8\sqrt7$.

**28)** Čtverec $ABCD$, $A[-1;1]$, $\vec{AC}=(6;4)$. a), b) Sestrojte a určete střed $S$. c) Vypočtěte $|\vec{AB}|$.

*Jaro 2017, příklad č. 8. Body: 3. Výsledek: b) $S[2;3]$, c) $\sqrt{26}$ jednotek.*

Řešení: $C=A+(6;4)=[5;5]$. $S=\left[\dfrac{-1+5}2;\dfrac{1+5}2\right]=[2;3]$.

c) $|\vec{AC}|=\sqrt{36+16}=\sqrt{52}$. Pravoúhlý rovnoramenný trojúhelník $ABC$: $52=2x^2 \implies x^2=26 \implies x=\sqrt{26}$.

**29)** a) Zapište obecnou rovnici přímky $p$ (body $A[0;2]$, $B[6;4]$). b) Vypočtěte odchylku $p$ od osy $x$.

*Jaro 2017, příklad č. 9. Body: 2. Výsledek: a) $p:x-3y+6=0$, b) $18°26'$.*

Řešení: a) $\vec{AB}=(6;2)$, normálový $(2;-6)$. $p:2x-6y+c=0$; $A\in p$: $c=12$. $p:2x-6y+12=0 \implies x-3y+6=0$.

b) $\mathrm{tg}\,\alpha=\dfrac26=\dfrac13\approx0{,}333 \implies\alpha\approx18°26'$.

**30)** Určete souřadnice $\vec w=\vec u+\vec v$, kde $\vec u=(6;3)$, $\vec v=(2;-4)$.

*Podzim 2017, příklad č. 10. Body: 1. Výsledek: $(8;-1)$.*

Řešení: $\vec w=(6+2;3-4)=(8;-1)$.

**31)** Doplňte souřadnice bodů $K[-2;y]$, $L[x;-4]$ na přímce $p:x=-4+2t,\ y=1-t$.

*Podzim 2017, příklad č. 11. Body: 2. Výsledek: $K[-2;0]$, $L[6;-4]$.*

Řešení: $K$: $-2=-4+2t \implies t=1 \implies y=0$. $L$: $-4=1-t \implies t=5 \implies x=-4+10=6$.

**32)** Přímka $p$ prochází $B[2;1]$, kolmá k $AB$ ($A[-3;-1]$). Která rovnice ji určuje?

A) $5x-2y-8=0$   **B) $5x+2y-12=0$**   C) $2x-5y+1=0$   D) $2x+5y-9=0$   E) žádná z uvedených

*Podzim 2017, příklad č. 23. Body: 2.*

Řešení: normálový vektor $p=\vec{AB}=(5;2)$. $p:5x+2y+c=0$; $B\in p$: $10+2+c=0 \implies c=-12$. $p:5x+2y-12=0$.

---

*Příklady z testů PUP*

**1p)** Vektor $\vec u=(6;-4)$. a) Doplňte $x$ ve $\vec v=(x;2)$, násobku $\vec u$. b) Doplňte $y$ ve $\vec w=(4;y)$, kolmém k $\vec u$.

*Jaro 2011 PUP, příklad č. 7. Body: 2. Výsledek: a) $x=-3$, b) $y=6$.*

Řešení: a) $(-2)\cdot x=6 \implies x=-3$ (z poměru druhých souřadnic $2=(-2)\cdot(-4)/... $, přesněji $\vec v=k\vec u$ s $k=-1/2$).

b) $\vec u\cdot\vec w=0$: $6\cdot4+(-4)y=0 \implies24=4y \implies y=6$.

---

*Ilustrační maturitní testy Cermatu*

**1i)** Přímka $p:x=3t,\ y=4-2t$. a) Určete směrový vektor. b) Určete průsečík $P$ s osou $x$.

*2010 (1), příklad č. 7. Body: 2. Výsledek: a) $(3;-2)$, b) $P[6;0]$.*

Řešení: b) $y=0$: $0=4-2t \implies t=2 \implies x=6$. $P[6;0]$.

**2i)** Body $A$, $B$ jsou sousední vrcholy čtverce, $\vec{AB}=(5;-7)$. Vypočtěte obsah čtverce.

*2010 (2), příklad č. 7. Body: 2. Výsledek: 74 jednotek².*

Řešení: $a=|\vec{AB}|=\sqrt{25+49}=\sqrt{74}$. $S=a^2=74$.

**3i)** Přímka $p$ prochází $A[0;2]$, směrový vektor $(1;-1)$. Vyberte rovnici.

A–C, E) *(nedochováno)*   **D) $x+y-2=0$**

*2010 (2), příklad č. 19. Body: 2.*

Řešení: normálový vektor $(1;1)$. $p:x+y+c=0$; $A\in p$: $c=-2$. $p:x+y-2=0$.

**4i)** Uveďte rovnici přímky $p$ (body $A[0;2]$, $B[3;0]$).

*2011, příklad č. 7. Body: 2. Výsledek: $2x+3y-6=0$.*

Řešení (směrnicový tvar): $k=-\dfrac23$ (z bodu $[3;0]$: $0=3k+2$). $p:y=-\dfrac23x+2$, po úpravě $2x+3y-6=0$.

**5i)** Orientovaná úsečka s počátkem $P[4;-1]$ je umístěním vektoru $\vec u=(2;-7)$. Který bod je koncový?

A–C) *(nedochováno)*   **D) $X[6;-8]$**

*2011, příklad č. 19. Body: 2.*

Řešení: $X=P+\vec u=[4+2;-1-7]=[6;-8]$.

**6i)** a) Zapište obecnou rovnici přímky $p$ (bod $A[-2;-1]$, normálový vektor $(1;2)$). b) Narýsujte.

*2012, příklad č. 7. Body: 4. Výsledek: a) $p:x+2y+4=0$.*

Řešení: $p:x+2y+c=0$; $A\in p$: $-2-2+c=0 \implies c=4$. $p:x+2y+4=0$.

**7i)** a) Sestrojte $B$, $D$ čtyřúhelníku $ABCD$ (úhlopříčky se půlí, $\vec{AC}$ zjištěno). b) Vypočtěte délku $BD$, kde $\vec{BD}=(-4;2)$.

*2013, příklad č. 8. Body: 3. Výsledek: b) $|BD|=2\sqrt5$.*

Řešení: $|\vec{BD}|=\sqrt{16+4}=\sqrt{20}=2\sqrt5$.

**8i)** Přímka $q$ s normálovým vektorem $(2;-1)$, přímka $p:x=3-2t,\ y=t$. Jaká je jejich odchylka?

A) 0°   B) 30°   C) 45°   D) 60°   **E) 90°**

*2013, příklad č. 24. Body: 2.*

Řešení: směrový vektor $p$: $(-2;1)$. Vektory $(2;-1)$ a $(-2;1)$ jsou násobky (rovnoběžné) — normálový vektor $q$ je tedy rovnoběžný se směrovým vektorem $p$, což znamená $p\perp q$. Odchylka $=90°$.

**9i)** Přímka $p$ (směrový vektor $(2;-1)$), přímka $q:y=0$. Do kterého intervalu patří odchylka $\varphi$?

**A) $\langle0°;36°)$**   B–E) *(nedochováno)*

*2014 (1), příklad č. 21. Body: 2. Výsledek: $\varphi\approx27°$.*

Řešení: normálový vektor $q$: $(0;1)$; směrový vektor $q$: $(1;0)$. $\cos\varphi=\dfrac{|2\cdot1+(-1)\cdot0|}{\sqrt5\cdot\sqrt1}=\dfrac2{\sqrt5}\approx0{,}894 \implies\varphi\approx27°$.

**10i)** Rovnoběžník $ABCD$, $A[-1;-2]$, $C[3;2]$ (dopočteno z rovnoběžnosti stran). Která rovnice určuje $AC$?

A) $x+y+3=0$   **B) $x-y-1=0$**   C) $x-2y-3=0$   D) $2x-y=0$   E) žádná z uvedených

*2014 (1), příklad č. 22. Body: 2.*

Řešení: $\vec{AC}=(4;4)$, normálový $(4;-4)$. $AC:4x-4y+c=0$; $A\in AC$: $-4+8+c=0 \implies c=-4$. $/:4$: $x-y-1=0$.

**11i)** Doplňte chybějící souřadnici bodu $A[6;\ ]\in p$ (přímka body $A[-3;-1]$, $B[0;1]$, $C[3;3]$) a souřadnice směrového vektoru.

*2014 (2), příklad č. 10. Body: 2. Výsledek: $A[6;5]$, $\vec s=(3;2)$.*

Řešení: $\vec s=B-A=(3;2)$, normálový $(2;-3)$. $p:2x-3y+c=0$; $A[-3;-1]\in p$: $-6+3+c=0 \implies c=3$. $p:2x-3y+3=0$. Pro $x=6$: $12-3y+3=0 \implies y=5$.

**12i)** V trojúhelníku $ABC$: $\vec{AB}=(-1;3)$, $\vec{BC}=(6;9)$. Jaká je délka $AC$?

A–D) *(nedochováno)*   **E) 13**

*2014 (2), příklad č. 21. Body: 2.*

Řešení: $\vec{AC}=\vec{AB}+\vec{BC}=(5;12)$. $|\vec{AC}|=\sqrt{25+144}=13$.

---

*Soubor vzorových úloh Cermatu (2013)*

**1s)** Trojúhelník $A$, $B$, $C[2;4]$ ($\vec{AB}=(3;-3)$). Na které přímce leží výška $v_c$?

**A) $x-y+2=0$**   B) $3x-y-2=0$   C) $3x+y-10=0$   D) $x+y-6=0$   E) $2x-y=0$

*Kapitola 8, příklad č. 11.*

Řešení: normálový vektor výšky $=\vec{AB}=(3;-3)$. $v_c:3x-3y+c=0$; $C\in v_c$: $6-12+c=0 \implies c=6$. $/:3$: $x-y+2=0$.

## Zdroje

MATURITA HADR / Matematika / řešené postupy matematických okruhů z DT 2010–2017, dokument *37) Analytická geometrie.pdf*.
