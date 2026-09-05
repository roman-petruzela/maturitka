---
title: "Binomická věta"
order: 7
source: "matematika/TY01_0230_Binomicka_veta.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace používala animované odrážky (postupně se odkrývající text), který se při převodu do textu ztratil. Zachoval se ale rozpočítaný příklad (a+b)⁴ i tabulka koeficientů — z toho šlo přesně rekonstruovat obecné znění binomické věty a vzorec pro k-tý člen rozvoje. Konkrétní zadání tří závěrečných úloh se nedochovala, nahrazena novými se stejným cílem.

## Motivace — umocňování dvojčlenu

Spočítejme $(a+b)^4$ postupným násobením:

$$(a+b)^4 = (a+b)^3 \cdot (a+b) = (a^3+3a^2b+3ab^2+b^3)(a+b)$$

$$= a^4+3a^3b+3a^2b^2+ab^3 + a^3b+3a^2b^2+3ab^3+b^4$$

$$= a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$$

Všimněme si koeficientů $1,4,6,4,1$ — to jsou přesně čísla ze 4. řádku Pascalova trojúhelníku! Stejně to funguje pro libovolnou mocninu:

| Výraz | Rozvoj | Koeficienty |
|---|---|---|
| $(a+b)^1$ | $a+b$ | 1  1 |
| $(a+b)^2$ | $a^2+2ab+b^2$ | 1  2  1 |
| $(a+b)^3$ | $a^3+3a^2b+3ab^2+b^3$ | 1  3  3  1 |
| $(a+b)^4$ | $a^4+4a^3b+6a^2b^2+4ab^3+b^4$ | 1  4  6  4  1 |

## Binomická věta

Koeficienty v rozvoji $(a+b)^n$ nejsou nic jiného než kombinační čísla $\binom{n}{k}$ (viz [Vlastnosti kombinačních čísel](/mat/kombinatorika/06-vlastnosti-kombinacnich-cisel/)) — to je obsah **binomické věty**:

$$(a+b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k = \binom{n}{0}a^n + \binom{n}{1}a^{n-1}b + \binom{n}{2}a^{n-2}b^2 + \cdots + \binom{n}{n}b^n$$

Např. pro $n=4$: $\binom40{=}1,\ \binom41{=}4,\ \binom42{=}6,\ \binom43{=}4,\ \binom44{=}1$ — přesně koeficienty $1,4,6,4,1$ výše.

## Určení k-tého členu binomického rozvoje

Členy rozvoje $(a+b)^n$ číslujeme od $T_1$ (první člen odpovídá $k=0$). Obecný, tzv. $(k+1)$-ní člen rozvoje je:

$$T_{k+1} = \binom{n}{k} a^{n-k} b^k$$

Tento vzorec je užitečný, když nás zajímá jen JEDEN konkrétní člen rozvoje a nechceme rozepisovat celý součet.

## Příklad

Určete čtvrtý člen rozvoje $(x+2)^6$.

Čtvrtý člen odpovídá $k=3$ (protože $T_{k+1}=T_4 \Rightarrow k=3$), $n=6$, $a=x$, $b=2$:

$$T_4 = \binom{6}{3} x^{6-3} \cdot 2^3 = 20 \cdot x^3 \cdot 8 = 160x^3$$

## Úloha

**1.** Určete třetí člen rozvoje $(2x-y)^5$.

Výsledek: ||T₃ odpovídá k=2, n=5, a=2x, b=−y: T₃ = C(5,2)·(2x)³·(−y)² = 10·8x³·y² = 80x³y²||

---

**2.** V rozvoji $(x+3)^5$ určete koeficient u členu s $x^2$.

Výsledek: ||x² znamená a^(n−k)=x^(5−k)=x² → k=3. Koeficient: C(5,3)·3³ = 10·27 = 270 (člen je 270x²)||

---

**3.** Kolik členů má rozvoj $(a+b)^{10}$?

Výsledek: ||n+1 = 11 členů (index k probíhá od 0 do n=10, tedy 11 hodnot)||

## Zdroje

CALDA, Emil, DUPAČ, Václav. _Matematika pro gymnázia. Kombinatorika, pravděpodobnost, statistika._ Praha: Prometheus, 2006.
