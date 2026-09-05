---
title: "Geometrická posloupnost"
order: 3
source: "matematika/TY01_0217-Geometricka_posloupnost.pptx"
hasExercises: true
---

> Pozn. k obsahu: Vzorec pro součet geometrické řady byl v PDF vložen jako obrázek, který se zcela ztratil (zůstaly jen prázdné řádky "S₂₀ =") — doplněn standardní vzorec i s novým ukázkovým příkladem, protože původní čísla zadání se nedochovala. U cvičení 2 a 3 obsahoval dochovaný text početní chybu (u příkladu 2 dosazoval do vzorce špatný exponent, u příkladu 3 totéž) — přepočítáno správně od začátku, s poznámkou u obou.

**Geometrická posloupnost** je taková posloupnost, pro kterou existuje reálné číslo $q$ (nazývané **kvocient**) takové, že pro každé přirozené číslo $n$ platí:

$$a_{n+1} = a_n \cdot q$$

Geometrická posloupnost se tedy vždy násobí stejným číslem — např. pro $q=3$:

$$1,\ \underbrace{3}_{\times3},\ \underbrace{9}_{\times3},\ \underbrace{27}_{\times3},\ \underbrace{81}_{\times3},\ \dots$$

## Vzorce a ukázkové příklady

**Výpočet dalšího členu pomocí předcházejícího a kvocientu:**

$$a_{n+1} = a_n \cdot q$$

**Příklad:** $a_1=3$, $q=4$. Určete $a_2$, $a_3$.

$$a_2 = a_1\cdot4 = 3\cdot4 = 12, \qquad a_3 = a_2\cdot4 = 12\cdot4 = 48$$

**Výpočet libovolného členu pomocí prvního členu a kvocientu:**

$$a_n = a_1\cdot q^{n-1}$$

**Příklad:** $a_1=-7$, $q=-2$. Určete $a_5$.

$$a_5 = -7\cdot(-2)^{5-1} = -7\cdot(-2)^4 = -7\cdot16 = -112$$

**Výpočet libovolného členu pomocí jiného členu a kvocientu:**

$$a_s = a_r \cdot q^{s-r}$$

**Příklad:** $a_3=-2$, $a_7=-32$. Určete $q$.

$$a_7 = a_3\cdot q^{7-3} \implies -32=-2\cdot q^4 \implies 16=q^4 \implies q=2 \text{ nebo } q=-2$$

**Pozor:** sudá odmocnina (zde 4.) z kladného čísla má vždy **dva** reálné výsledky (např. $\sqrt[4]{16}=\pm2$), zatímco lichá odmocnina z libovolného čísla má výsledek jediný (např. $\sqrt[3]{-27}=-3$) a sudá odmocnina ze záporného čísla nemá v reálných číslech řešení žádné. Proto zde vychází pro $q$ dvě různá řešení — obě je potřeba uvést, protože další členy posloupnosti (např. $a_4$) pro ně vyjdou různě (pro $q=2$ kladné, pro $q=-2$ se střídavým znaménkem).

**Součet konečného počtu členů geometrické posloupnosti** (pro $q\neq1$):

$$S_n = a_1\cdot\frac{q^n-1}{q-1}$$

(Pro $q=1$ jsou všechny členy stejné jako $a_1$, takže prostě $S_n=n\cdot a_1$.)

**Příklad:** $a_1=1$, $q=2$, $n=10$. Určete $S_{10}$.

$$S_{10} = 1\cdot\frac{2^{10}-1}{2-1} = \frac{1024-1}{1} = 1023$$

## Příklady na procvičení

**1.** Určete členy $a_2$, $a_3$ a $a_8$ geometrické posloupnosti, když $a_1=2$, $q=-3$.

Výsledek: ||a₂=a₁·q=2·(-3)=-6; a₃=a₂·q=-6·(-3)=18; a₈=a₁·q⁷=2·(-3)⁷=2·(-2187)=-4374||

**2.** Určete první člen a kvocient geometrické posloupnosti, když $a_3=8$, $a_7=128$.

Výsledek: ||a₇=a₃·q⁴ → 128=8q⁴ → q⁴=16 → q=2 nebo q=-2; a₃=a₁·q² → 8=a₁·q²; protože q²=4 pro OBĚ hodnoty q, vychází a₁=8/4=2 v obou případech — a₁=2, q=2 nebo q=-2 (pozn.: dochovaný text zde chybně počítal s a₁=8 — vzniklo záměnou exponentu při dosazení do vzorce, správný výsledek je a₁=2)||

**3.** Určete první člen a kvocient geometrické posloupnosti, když $a_4=3$, $a_7=-81$.

Výsledek: ||a₇=a₄·q³ → -81=3q³ → q³=-27 → q=-3 (lichá odmocnina, jediné řešení); a₄=a₁·q³ → 3=a₁·(-27) → a₁=-1/9 (pozn.: dochovaný text zde chybně dosazoval q⁴ místo q³ a vyšlo mu a₁=-1 — ověřeno zpětným dosazením: a₁=-1/9, q=-3 dává a₂=1/3, a₃=-1, a₄=3 ✓, a₅=-9, a₆=27, a₇=-81 ✓, tedy správný výsledek je a₁=-1/9)||

**4.** $a_1=-6$, $q=2$. Určete $S_{10}$.

Výsledek: ||S₁₀=a₁·(q¹⁰-1)/(q-1)=-6·(1024-1)/1=-6·1023=-6138||

## Shrnutí

Geometrická posloupnost se neustále násobí stejným číslem — kvocientem $q$.

$$a_{n+1}=a_n\cdot q \qquad a_n=a_1\cdot q^{n-1} \qquad a_s=a_r\cdot q^{s-r} \qquad S_n=a_1\cdot\frac{q^n-1}{q-1}\ (q\neq1)$$

## Zdroje

HUDCOVÁ, Milada, KUBIČÍKOVÁ, Libuše. *Sbírka úloh z matematiky pro SOŠ, SOU a nástavbové studium.* 2. vydání. Havlíčkův Brod: Prometheus, 2005. ISBN 80-7196-318-6.
