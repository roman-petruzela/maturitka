---
title: "Číselné obory"
order: 7
source: "mat2/Číselné obory.pdf"
hasExercises: true
---

Připomeneme si, jaké druhy čísel známe a k čemu nám v praxi slouží.

## Přirozená čísla

$$1,2,3,4,5,\dots$$

Slouží k vyjádření počtu osob, zvířat, předmětů apod.

## Celá čísla

$$\dots,-2,-1,0,1,2,\dots$$

Umožňují vyjádřit změny těchto počtů a jejich porovnání (přírůstek, úbytek, změny stavů apod.).

## Racionální čísla

Např.: $\dfrac12$, $-0{,}25$, $0$, $3{,}6$, $-2\dfrac15$

Používají se k vyjádření počtu dílů celku, počtu celků a jejich dílů, změn těchto počtů apod.

## Iracionální čísla

Např.: $-\sqrt2$, $\sqrt{23}$, $\pi$, $\sin(20°)$

Jsou to čísla s nekonečným **neperiodickým** desetinným rozvojem — nelze je tedy zapsat ve tvaru zlomku.

## Reálná čísla

$$\text{reálná čísla} = \text{racionální čísla} + \text{iracionální čísla}$$

Umožňují vyjádření výsledků měření délek, obsahů, objemů, fyzikálních stavů těles a jejich změn.

## Značení číselných oborů

- $\mathbb{N}$ — množina všech přirozených čísel
- $\mathbb{Z}$ — množina všech celých čísel
- $\mathbb{Q}$ — množina všech racionálních čísel
- $\mathbb{R}$ — množina všech reálných čísel

Tyto obory tvoří řetězec vzájemných podmnožin (viz [Množiny](/mat/vyrazy-a-mocniny/06-mnoziny/)):

$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$$

Jsou-li v množině čísel určitého druhu definovány operace sčítání a násobení, mluvíme o **číselném oboru**.

**Příklad:** Uveďte příklady celých čísel, která nejsou přirozenými čísly. Rozhodněte, zda každé přirozené číslo je zároveň celé číslo, a zda platí i opak. Kam byste ve schématu $\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}$ zařadili číslo $\pi$?

Výsledek: ||celá čísla, která nejsou přirozená: 0, -1, -2, -3, ... (všechna nekladná celá čísla); každé přirozené číslo JE zároveň celé (ℕ⊂ℤ), ale opak neplatí — např. -1 a 0 jsou celá, ale nejsou přirozená; π je iracionální, patří tedy do ℝ, ale NE do ℚ (leží "mimo" kruh racionálních čísel, uvnitř kruhu reálných)||

## Obor přirozených čísel ℕ

**Číslice** (cifra) je znak pro zápis čísla (jednička, dvojka, trojka...), zatímco **číslo** je hodnota, kterou zapisujeme (jedna, dvě, tři...). Mezi základní operace řadíme sčítání a násobení. Pro každá tři přirozená čísla $a,b,c$ platí:

- součet $a+b$ je přirozené číslo *(uzavřenost, U)*
- $a+(b+c)=(a+b)+c$ *(asociativnost, A)*
- $a+b=b+a$ *(komutativnost, K)*
- součin $a\cdot b$ je přirozené číslo *(U)*
- $a\cdot(b\cdot c)=(a\cdot b)\cdot c$ *(A)*
- $a\cdot b=b\cdot a$ *(K)*
- $1\cdot a=a$ *(neutralita čísla 1 vzhledem k násobení, N)*
- $a\cdot(b+c)=a\cdot b+a\cdot c$ *(distributivnost, D)*

## Obor celých čísel ℤ

Celá čísla zahrnují všechna přirozená čísla a dále 0 a čísla **opačná** k přirozeným číslům. Opačné číslo k číslu $a$ je číslo $-a$, přičemž platí $a+(-a)=0$.

Opačné číslo ke kladnému číslu je záporné, opačné číslo k zápornému je kladné, opačné číslo k 0 je 0.

**Příklad:** Určete čísla opačná k daným:

a) $5$   b) $-13$   c) $0$   d) $-(7+13)$   e) $-(2\cdot16)$   f) $(2-7)$

Výsledek: ||a) -5; b) 13; c) 0; d) -(7+13)=-20, opačné je 20; e) -(2·16)=-32, opačné je 32; f) (2-7)=-5, opačné je 5||

**Příklad:** Vypočítejte:

a) $24-45$   b) $-16+25$   c) $17-(-35)$   d) $-28-(-39)$   e) $12\cdot(-3)$   f) $(-7)\cdot(-2)$   g) $(-2)\cdot(-3)\cdot(-4)$

Výsledek: ||a) -21; b) 9; c) 17+35=52; d) -28+39=11; e) -36; f) 14; g) -24 (tři záporní činitelé → výsledek záporný)||

## Obor racionálních čísel ℚ

Množina racionálních čísel obsahuje všechna čísla, která lze vyjádřit ve tvaru zlomku $\dfrac{p}{q}$, kde $p$ je celé číslo a $q$ je přirozené číslo (zlomek v základním tvaru).

Porovnáváme-li dva zlomky $\dfrac{p}{q}$, $\dfrac{r}{s}$ (kde $q,s>0$), porovnáváme součiny $p\cdot s$ a $q\cdot r$: je-li $p\cdot s>q\cdot r$, je $\dfrac{p}{q}>\dfrac{r}{s}$.

**Příklad:** Porovnejte zlomky $\dfrac{11}{16}$, $\dfrac{32}{47}$.

Výsledek: ||11·47=517, 16·32=512; protože 517>512, platí 11/16 > 32/47 (ověření desetinným rozvojem: 11/16=0,6875 a 32/47≈0,6809)||

Jiný postup: převedeme oba zlomky na společného jmenovatele.

Racionální čísla lze zapisovat buď ve tvaru **zlomku**, nebo **desetinného čísla** — u desetinného zápisu se vždy dříve nebo později objeví opakující se skupina číslic, tzv. **perioda**:

$$\frac{10}{33} = 0{,}303030\ldots = 0{,}\overline{30} \qquad \frac{15}{22} = 0{,}6818181\ldots = 0{,}6\overline{81}$$

(V prvním případě je periodou skupina číslic "30", ve druhém "81", následující po úvodní neopakující se číslici 6.)

## Obor reálných čísel ℝ

Reálná čísla obsahují všechna racionální čísla, a dále čísla, kterým říkáme **iracionální**.

**Příklad:** Jaká je délka úhlopříčky čtverce o straně $u=1$? A čtverce o straně $u=3$?

Výsledek: ||úhlopříčka čtverce o straně u má (podle Pythagorovy věty) délku u√2; pro u=1: délka=√2 (≈1,414); pro u=3: délka=3√2 (≈4,243) — obě hodnoty jsou iracionální, nelze je zapsat přesně jako zlomek ani jako konečný či periodický desetinný rozvoj||

Čísla $\sqrt2$, $\sqrt3$, $-\sqrt2$, $-\sqrt3$ nebo Ludolfovo číslo $\pi$ jsou další příklady iracionálních čísel. Nelze je zapsat ve tvaru zlomku — vyjádřeny jako desetinné číslo mají nekonečný **neperiodický** desetinný rozvoj, např.:

$$\pi = 3{,}14159\,26535\,89793\,23846\,26433\,83279\,50288\,41971\,6939\ldots$$

## Zdroje

Zdrojový dokument: *mat2/Číselné obory.pdf*
