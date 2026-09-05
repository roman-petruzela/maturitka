---
title: "Logaritmus, věty o logaritmování, logaritmické rovnice"
order: 11
source: "matematika/TY01_0211_-_Logaritmus_vety_o_logaritmovani_logaritmicke_rovnice.pptx"
tags: ["doplněno"]
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace používala animované odrážky a vzorce vložené jako obrázky, které se při prvním převodu ztratily nebo poškodily — v shrnutí navíc OCR omylem zaměnilo všechna „=" za „≠", opraveno. Čtyři jednoduchá cvičení na výpočet logaritmu (a-d) neměla dochované zadání vůbec, nahrazena novými se stejným cílem. U rovnicových cvičení byl základ logaritmu v podkladu nečitelný (OCR ho zobrazovalo jako "log12"), ale zbytek čísel šlo přesně zrekonstruovat ze zachovaných zkoušek — základ byl proto zvolen tak, aby výpočet seděl (u prvního příkladu 2, jde o libovolný platný základ, princip řešení na tom nezávisí).

## Osnova

a) pojem logaritmus, b) věty o logaritmech, c) logaritmická rovnice, d) ukázkové příklady, e) příklady na procvičení včetně řešení.

## Logaritmus

Logaritmus čísla $r$ o základu $a$ je takové číslo $v$, pro které platí $a^v = r$, kde $a \in \mathbb{R}^+ \setminus \{1\}$:

$$\log_a r = v \iff a^v = r$$

Číslo $a$ se nazývá **základ**, číslu $r$ se říká **hodnota logaritmu** (argument).

Máme dva speciální logaritmy:

- **dekadický** (základ $a=10$) — píšeme jen $\log r$ místo $\log_{10} r$
- **přirozený** (základ $a=e$, Eulerovo číslo $e \approx 2{,}71828...$) — píšeme $\ln r$ místo $\log_e r$

## Ukázkové příklady

**a)** $\log_2 8 = x$. Použijeme definici: $2^x = 8 = 2^3$, tedy $x=3$.

**b)** $\log_3 81 = x$. $3^x = 81 = 3^4$, tedy $x=4$.

## Příklady na procvičení

**Příklad 1:** $\log_5 25 = x$

Výsledek: ||5ˣ = 25 = 5², x = 2||

---

**Příklad 2:** $\log_2 \dfrac18 = x$

Výsledek: ||2ˣ = 1/8 = 2⁻³, x = −3||

---

**Příklad 3:** $\log_4 2 = x$

Výsledek: ||4ˣ = 2, tedy (2²)ˣ = 2¹, 2x = 1, x = 1/2||

---

**Příklad 4:** $\log 1000 = x$ (dekadický logaritmus)

Výsledek: ||10ˣ = 1000 = 10³, x = 3||

## Věty o logaritmech

$$\log_a r + \log_a v = \log_a(r \cdot v)$$

$$\log_a r - \log_a v = \log_a(r : v)$$

$$s \cdot \log_a r = \log_a(r^s)$$

**Pozor:** $\log_a(r^s) \neq (\log_a r)^s$ — to jsou dva různé výrazy!

## Logaritmické rovnice

Logaritmická rovnice je rovnice s logaritmem, u které při řešení využíváme věty o logaritmech výše. Pro $x_1, x_2 \in \mathbb{R}^+$ platí: je-li $\log_a x_1 = \log_a x_2$, pak $x_1 = x_2$ (logaritmus je prostá funkce).

**U logaritmických rovnic musíme vždy provést zkoušku** — hlavně kvůli podmínce, že argument logaritmu musí být kladný; kořen, který tuto podmínku nesplňuje, není řešením, i kdyby vyšel z čistě algebraické úpravy.

## Ukázkový příklad 1

Řešte rovnici $\log x + \log(x+1) = 2\log x$.

Použijeme logaritmické věty k úpravě: $\log[x(x+1)] = \log x^2$.

Na obou stranách máme jeden logaritmus — „odlogaritmujeme" (argumenty se musí rovnat): $x(x+1) = x^2$

$$x^2+x = x^2 \ \Rightarrow\ x=0$$

**Zkouška:** nemusíme ani dosazovat — víme, že argument logaritmu musí být kladné reálné číslo, ale $x=0$ tuto podmínku nesplňuje ($\log 0$ není definován). **Rovnice nemá řešení.**

## Ukázkový příklad 2

Řešte rovnici $\log(x^2+7) = 2\log(x+7)$.

Použijeme logaritmickou větu na pravé straně: $\log(x^2+7) = \log(x+7)^2$.

Odlogaritmujeme celou rovnici: $x^2+7 = (x+7)^2$. Napravo použijeme vzorec $(a+b)^2$:

$$x^2+7 = x^2+14x+49 \ \Rightarrow\ -14x = 42 \ \Rightarrow\ x=-3$$

**Zkouška:** $L: \log[(-3)^2+7] = \log(9+7) = \log 16$. $P: 2\log(-3+7) = 2\log 4 = \log 4^2 = \log 16$. $L=P$ ✓ (a argument $x+7=4>0$ je v pořádku).

**Výsledek:** $x=-3$

## Příklady na procvičení

**Příklad 1:** $\log_2(2x+4) - \log_2(x-3) = \log_2 7$

Výsledek:

- podmínka: ||x − 3 > 0, tedy x > 3||
- úprava (log podílu): ||log₂[(2x+4)/(x−3)] = log₂7, tedy (2x+4)/(x−3) = 7||
- řešení: ||2x+4 = 7x−21, 25 = 5x, x = 5||
- zkouška: ||(2·5+4)/(5−3) = 14/2 = 7 ✓||
- výsledek: ||x = 5||

---

**Příklad 2:** $\log_3(x+1) + \log_3(x+3) = \log_3 3$

Výsledek:

- úprava (log součinu): ||log₃[(x+1)(x+3)] = log₃3, tedy (x+1)(x+3) = 3||
- rovnice: ||x² + 4x + 3 = 3, tedy x² + 4x = 0, x(x+4) = 0||
- kořeny: ||x₁ = 0, x₂ = −4||
- zkouška x₁=0: ||(0+1)(0+3) = 3 ✓, argumenty 1 a 3 jsou kladné — platí||
- zkouška x₂=−4: ||argument x+1 = −3 < 0, log₃(−3) není definován — nesmí být||
- výsledek: ||x = 0 (jediné řešení)||

---

**Příklad 3:** $\log(2x+13) = 2\log(x+5)$

Výsledek:

- podmínka: ||x + 5 > 0, tedy x > −5||
- úprava: ||log(2x+13) = log(x+5)², tedy 2x+13 = (x+5)² = x²+10x+25||
- rovnice: ||x² + 8x + 12 = 0, (x+6)(x+2) = 0||
- kořeny: ||x₁ = −2, x₂ = −6||
- zkouška x₁=−2: ||x+5 = 3 > 0 — platí (L=log9, P=2log3=log9, souhlasí)||
- zkouška x₂=−6: ||x+5 = −1 < 0, log(−1) není definován — nesmí být||
- výsledek: ||x = −2 (jediné řešení)||

## Shrnutí

- Logaritmus: $\log_a r = v \iff a^v = r$
- Speciální logaritmy: dekadický (základ $a=10$, píšeme $\log$), přirozený (základ $a=e$, píšeme $\ln$)
- Věty o logaritmech se používají při řešení logaritmických rovnic: $\log_a r + \log_a v = \log_a(rv)$, $\log_a r - \log_a v = \log_a(r/v)$, $s\log_a r = \log_a(r^s)$
- U logaritmických rovnic je vždy nutná zkouška (kvůli podmínce kladného argumentu)

## Zdroje

HUDCOVÁ, Milada a Libuše KUBIČÍKOVÁ. _Sbírka úloh z matematiky pro SOŠ, SOU a nástavbové studium_. 2. vydání. Havlíčkův Brod: Prometheus, spol. s r.o., 2005. Učebnice pro střední školy. ISBN 80-7196-318-6
