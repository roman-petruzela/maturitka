---
title: "Mocninné funkce"
order: 6
source: "matematika/TY01_0206_-_Mocninne_funkce.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace používala animované odrážky a vzorce/grafy vložené jako obrázky, které se při prvním převodu ztratily nebo poškodily (tabulky hodnot byly rozsypané). Text, vzorce, tabulky a grafy jsou zde doplněné/rekonstruované; všechny hodnoty byly nezávisle přepočítány.

## Osnova

a) pojem mocninná funkce, b) rozdělení mocninných funkcí, c) ukázkové příklady, d) příklady na procvičení včetně řešení.

## Mocninná funkce

Mocninná funkce je každá funkce ve tvaru $f: y = x^n$, kde $n \in \mathbb{Z} \setminus \{0\}$.

## Rozdělení mocninných funkcí

Podle exponentu $n$ rozlišujeme čtyři případy:

**a) $n$ je kladné liché číslo** — např. $f: y=x^1$ (lineární funkce), $f: y=x^3$ (kubická funkce), $f: y=x^5$. Grafy těchto funkcí v základním tvaru vždy procházejí bodem $[0;0]$.

```graph
{ "fn": "x", "domain": [-2, 2], "yDomain": [-2, 2], "title": "y = x¹" }
```

```graph
{ "fn": "x^3", "domain": [-1.6, 1.6], "yDomain": [-4, 4], "title": "y = x³" }
```

**b) $n$ je kladné sudé číslo** — např. $f: y=x^2$ (kvadratická funkce), $f: y=x^4$, $f: y=x^6$. Grafy těchto funkcí v základním tvaru také procházejí bodem $[0;0]$, který je zároveň vrcholem paraboly.

```graph
{ "fn": "x^2", "domain": [-2, 2], "yDomain": [0, 4], "title": "y = x²" }
```

```graph
{ "fn": "x^4", "domain": [-1.5, 1.5], "yDomain": [0, 5], "title": "y = x⁴" }
```

**c) $n$ je záporné liché číslo** — např. $f: y=x^{-1}=\dfrac1x$ (nepřímá úměra), $f: y=x^{-3}=\dfrac{1}{x^3}$, $f: y=x^{-5}$. Tyto funkce nejsou definované pro $x=0$; grafem jsou vždy **dvě hyperboly**, proto potřebujeme minimálně šest bodů k jejich sestrojení.

```graph
{ "fn": "1/x", "domain": [-4, 4], "yDomain": [-4, 4], "title": "y = x⁻¹ = 1/x" }
```

**d) $n$ je záporné sudé číslo** — např. $f: y=x^{-2}=\dfrac{1}{x^2}$, $f: y=x^{-4}$, $f: y=x^{-6}$. Také nejsou definované pro $x=0$ a grafem jsou dvě větve (obě nad osou x, protože sudá mocnina ve jmenovateli je vždy kladná).

```graph
{ "fn": "1/(x^2)", "domain": [-3, 3], "yDomain": [0, 4], "title": "y = x⁻² = 1/x²" }
```

## Ukázkový příklad

Sestrojte grafy funkcí $f_1: y = 2x^3$ a $f_2: y = 3x^{-4}$ a určete jejich obor hodnot $H(f)$.

**Funkce $f_1: y=2x^3$** — definiční obor není v zadání omezen, proto $D(f_1)=\mathbb{R}$. Graf prochází bodem $[0;0]$.

| x | −3 | −2 | −1 | 0 | 1 | 2 | 3 |
|---|---|---|---|---|---|---|---|
| y | −54 | −16 | −2 | 0 | 2 | 16 | 54 |

```graph
{ "fn": "2*x^3", "domain": [-3, 3], "title": "f₁: y = 2x³" }
```

**Funkce $f_2: y=3x^{-4} = \dfrac{3}{x^4}$** — definiční obor $D(f_2)=\mathbb{R}\setminus\{0\}$.

| x | −3 | −2 | −1 | 1 | 2 | 3 |
|---|---|---|---|---|---|---|
| y | 1/27 | 3/16 | 3 | 3 | 3/16 | 1/27 |

```graph
{ "fn": "3/(x^4)", "domain": [-3, 3], "yDomain": [0, 8], "title": "f₂: y = 3x⁻⁴" }
```

**Výsledek:** $H(f_1) = \mathbb{R}$ (lichá mocnina — funkce nabývá všech reálných hodnot), $H(f_2) = \mathbb{R}^+$ (sudá záporná mocnina — funkce je vždy kladná).

## Příklady na procvičení

**Příklad 1:** Sestrojte graf a určete $H(f)$ funkce $f: y=-5x^2$.

$D(f) = \mathbb{R}$.

| x | −3 | −1 | 0 | 1 | 3 |
|---|---|---|---|---|---|
| y | −45 | −5 | 0 | −5 | −45 |

```graph
{ "fn": "-5*x^2", "domain": [-3, 3], "title": "f: y = −5x²", "spoiler": true, "float": "right" }
```

Výsledek: $H(f) =$ ||(−∞; 0] — záporný koeficient obrací kvadratickou funkci, maximum je v bodě [0;0]||

---

**Příklad 2:** Sestrojte graf a určete $H(f)$ funkce $f: y=3x^{-3} = \dfrac{3}{x^3}$.

$D(f) = \mathbb{R}\setminus\{0\}$.

| x | −3 | −2 | −1 | 1 | 2 | 3 |
|---|---|---|---|---|---|---|
| y | −1/9 | −3/8 | −3 | 3 | 3/8 | 1/9 |

```graph
{ "fn": "3/(x^3)", "domain": [-3, 3], "yDomain": [-6, 6], "title": "f: y = 3x⁻³", "spoiler": true, "float": "right" }
```

Výsledek: $H(f) =$ ||R − {0} — lichá záporná mocnina nabývá všech nenulových reálných hodnot, k nule se jen blíží||

## Shrnutí

- Předpis mocninné funkce: $f: y=x^n,\ n \in \mathbb{Z}\setminus\{0\}$
- Rozdělení podle $n$: kladné liché, kladné sudé, záporné liché, záporné sudé — každé má jiný typický tvar grafu
- Pro záporné $n$ není funkce definovaná v $x=0$ a grafem jsou vždy dvě větve (hyperboly)

## Zdroje

HUDCOVÁ, Milada a Libuše KUBIČÍKOVÁ. _Sbírka úloh z matematiky pro SOŠ, SOU a nástavbové studium_. 2. vydání. Havlíčkův Brod: Prometheus, spol. s r.o., 2005. Učebnice pro střední školy. ISBN 80-7196-318-6
