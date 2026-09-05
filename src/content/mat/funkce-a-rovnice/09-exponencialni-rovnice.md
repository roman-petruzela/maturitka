---
title: "Exponenciální rovnice"
order: 9
source: "matematika/TY01_0209_-_Exponencialni_rovnice.pptx"
tags: ["doplněno"]
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace obsahovala konkrétní zadání ukázkových příkladů a cvičení vložená jako obrázky/rovnice, která se při převodu ztratila beze zbytku (zůstaly jen popisky "a)", "b)" ... bez samotných rovnic). Teorie a postup jsou rekonstruované věrně podle zachovaného textu; konkrétní příklady níže jsou nově vytvořené tak, aby demonstrovaly přesně tytéž typy úloh (stejný základ, různý základ, substituce, řešení bez smyslu), jaké byly v původním materiálu.

## Osnova

a) pojem exponenciální rovnice, b) základní znalosti, c) postup řešení, d) ukázkové příklady, e) příklady na procvičení včetně řešení.

## Exponenciální rovnice

Exponenciální rovnice je rovnice ve tvaru $a^v = b$, kde $a \in \mathbb{R}^+ \setminus \{1\}$ (číslo $a$ se nazývá **základ**) a $v$ je výraz s neznámou v exponentu.

**Pozn.:** u exponenciálních rovnic zpravidla není nutné provádět zkoušku — výjimkou jsou úlohy, ve kterých se pracuje s odmocninami nebo se substitucí.

## Základní znalosti

**a) Znalost mocnin**, např. $8=2^3$, $27=3^3$, $16=4^2=2^4$, $125=5^3$.

**b) Vzorce pro práci s mocninami:**

$$a^r \cdot a^s = a^{r+s}, \qquad a^r : a^s = a^{r-s}, \qquad (a^r)^s = a^{r \cdot s}, \qquad (a^r \cdot b^s)^v = a^{r \cdot v} \cdot b^{s \cdot v}$$

## Postup řešení

**Obě strany rovnice lze převést na stejný základ** — pak jednoduše porovnáme exponenty (protože exponenciální funkce je prostá, rovnají-li se mocniny se stejným základem, musí se rovnat i exponenty):

$$1000 = 10^x \ \Rightarrow\ 10^3 = 10^x \ \Rightarrow\ x = 3$$

**Obě strany rovnice nelze převést na stejný základ** — pak použijeme logaritmus:

$$8 = 3^x \ \Rightarrow\ \log 8 = \log 3^x \ \Rightarrow\ \log 8 = x \cdot \log 3 \ \Rightarrow\ x = \frac{\log 8}{\log 3}$$

## Ukázkové příklady (společný základ)

**a) Číslo lze přímo napsat jako mocninu stejného základu:**

$$2^x = 128 \ \Rightarrow\ 2^x = 2^7 \ \Rightarrow\ x = 7$$

**b) Použijeme vztah $(a^r)^s = a^{r \cdot s}$:**

$$4^x = 32 \ \Rightarrow\ (2^2)^x = 2^5 \ \Rightarrow\ 2^{2x} = 2^5 \ \Rightarrow\ 2x = 5 \ \Rightarrow\ x = \frac52$$

**c) Základ je zlomek nebo desetinné číslo:**

$$\left(\frac12\right)^x = 8 \ \Rightarrow\ 2^{-x} = 2^3 \ \Rightarrow\ -x = 3 \ \Rightarrow\ x = -3$$

**d) Základ i pravá strana obsahují odmocninu:**

$$9^x = \frac{1}{\sqrt3} \ \Rightarrow\ 3^{2x} = 3^{-\frac12} \ \Rightarrow\ 2x = -\frac12 \ \Rightarrow\ x = -\frac14$$

**e) Substituce — rovnice obsahuje $a^{2x}$ i $a^x$:**

$$2^{2x} - 5 \cdot 2^x + 4 = 0$$

Zavedeme substituci $y=2^x$ (a protože $2^x>0$, i $y>0$): $y^2 - 5y + 4 = 0 \Rightarrow (y-1)(y-4)=0 \Rightarrow y_1=1,\ y_2=4$.

Vrátíme se k substituci: $2^x=1 \Rightarrow x=0$; $2^x=4 \Rightarrow x=2$. Oba kořeny vyhovují podmínce $y>0$, zkouška vyjde — **výsledek: $x_1=0,\ x_2=2$**.

**f) Rovnice bez řešení:**

$$2^x = -4$$

Protože $2^x$ je pro každé reálné $x$ kladné, nemůže se nikdy rovnat zápornému číslu — **rovnice nemá řešení**.

## Příklady na procvičení

**Příklad 1:** $3^x = 81$

Výsledek: ||81 = 3⁴, tedy x = 4||

---

**Příklad 2:** $9^x = 27$

Výsledek: ||3²ˣ = 3³, tedy 2x = 3, x = 3/2||

---

**Příklad 3:** $\left(\dfrac13\right)^x = 9$

Výsledek: ||3⁻ˣ = 3², tedy −x = 2, x = −2||

---

**Příklad 4:** $5^{2x} - 6 \cdot 5^x + 5 = 0$

Výsledek:

- substituce y = 5ˣ (y > 0): ||y² − 6y + 5 = 0, (y−1)(y−5) = 0, y₁ = 1, y₂ = 5||
- návrat k substituci: ||5ˣ = 1 → x = 0;  5ˣ = 5 → x = 1||
- výsledek: ||x₁ = 0, x₂ = 1 (oba splňují y > 0)||

---

**Příklad 5:** $7 = 2^x$

Výsledek: ||základy 7 a 2 nejdou převést na společný základ, řešíme logaritmem: x = log 7 / log 2 ≈ 2,807||

## Shrnutí

- Exponenciální rovnice má tvar $a^v = b$.
- Postup: znalost mocnin a vzorců pro práci s nimi.
- Buď obě strany převedeme na stejný základ (porovnáme exponenty), nebo — pokud to nejde — použijeme logaritmus.
- U substitučních úloh ($a^{2x}$ a $a^x$ zároveň) je nutné hlídat podmínku $y>0$.

## Zdroje

HUDCOVÁ, Milada a Libuše KUBIČÍKOVÁ. _Sbírka úloh z matematiky pro SOŠ, SOU a nástavbové studium_. 2. vydání. Havlíčkův Brod: Prometheus, spol. s r.o., 2005. Učebnice pro střední školy. ISBN 80-7196-318-6
