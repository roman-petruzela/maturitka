---
title: "Exponenciální funkce a její posunutí"
order: 8
source: "matematika/TY01_0208_-_Exponencialni_funkce_a_jeji_posunuti.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace používala animované odrážky a grafy vložené jako obrázky, které se při prvním převodu ztratily nebo poškodily. Text, vzorce, tabulky a grafy jsou zde doplněné/rekonstruované z dochovaných tabulek hodnot; všechny předpisy a hodnoty byly nezávisle ověřeny.

## Osnova

a) pojem exponenciální funkce, b) sestrojení grafu, c) posunutí grafu, d) ukázkové příklady, e) příklady na procvičení včetně řešení.

## Exponenciální funkce

Předpis: $f: y = a^x$, kde $x \in \mathbb{R}$, $a \in \mathbb{R}^+ \setminus \{1\}$ (tedy $a \in (0;1) \cup (1;\infty)$).

**Pozn.:** kdyby bylo $a=1$, nešlo by o exponenciální funkci, ale o konstantní funkci ($y=1$ pro všechna $x$).

Grafem je **exponenciála**. Tvar grafu závisí na základu $a$: pro $a \in (0;1)$ je funkce **klesající**, pro $a \in (1;\infty)$ je funkce **rostoucí**.

## Ukázkový příklad

Sestrojte graf exponenciální funkce $f: y=2^x$. Určete definiční obor a obor hodnot.

Definiční obor není v zadání omezen, proto $D(f)=\mathbb{R}$.

| x | −1 | 0 | 1 |
|---|---|---|---|
| y | 1/2 | 1 | 2 |

```graph
{ "fn": "2^x", "domain": [-2, 2.5], "yDomain": [0, 5], "title": "f: y = 2ˣ" }
```

**Výsledek:** $H(f) = (0;\infty)$

## Příklady na procvičení

**Příklad 1:** Sestrojte graf funkce $f: y=\left(\dfrac14\right)^x$. Určete $H(f)$.

$D(f)=\mathbb{R}$. Protože $a=\frac14 \in (0;1)$, funkce je klesající.

| x | −1 | 0 | 1 |
|---|---|---|---|
| y | 4 | 1 | 1/4 |

```graph
{ "fn": "(1/4)^x", "domain": [-1.5, 2], "yDomain": [0, 5], "title": "f: y = (1/4)ˣ", "spoiler": true, "float": "right" }
```

Výsledek: $H(f) =$ ||(0; ∞)||

---

**Příklad 2:** Sestrojte graf funkce $f: y=-3^x$. Určete $H(f)$.

$D(f)=\mathbb{R}$. Protože $a=3 \in (1;\infty)$, „vnitřní" funkce $3^x$ je rostoucí, ale mínus před ní graf překlopí pod osu x.

| x | −1 | 0 | 1 |
|---|---|---|---|
| y | −1/3 | −1 | −3 |

```graph
{ "fn": "-(3^x)", "domain": [-2, 2], "yDomain": [-5, 0.5], "title": "f: y = −3ˣ", "spoiler": true, "float": "right" }
```

Výsledek: $H(f) =$ ||(−∞; 0) — protože 3ˣ je vždy kladné, −3ˣ je vždy záporné||

---

**Příklad 3:** Sestrojte graf funkce $f: y=(-2)^x$. Určete $H(f)$.

Výsledek: ||Základ a = −2 není v povoleném rozmezí (0;1) ∪ (1;∞) — záporný základ mocninné/exponenciální funkci pro reálná x nedává smysl (např. (−2)^0,5 by muselo být odmocninou ze záporného čísla). Příklad nemá řešení.||

## Posunutí exponenciální funkce

Zadaná funkce ve tvaru $f: y = a^{x+m} + n$ se sestrojuje postupně, ve třech krocích:

1. **Základní funkce** $f_1: y = a^x$ — sestavíme pro ni tabulku a graf.
2. **Posun podél osy x**: $f_2: y = a^{x+m}$. Je-li ve tvaru $x+m$, posuneme graf $f_1$ **doleva** o $m$; je-li ve tvaru $x-m$, posuneme **doprava** o $m$.
3. **Posun podél osy y**: $f_3: y = a^{x+m}+n$. Je-li $+n$, posuneme graf $f_2$ **nahoru** o $n$; je-li $-n$, posuneme **dolů** o $n$. Tímto posunem vzniká nová vodorovná asymptota (obrazně „nová osa x") v hodnotě $y=n$.

Funkce $f_3$ je pak celý hledaný graf, tedy $f_3 = f$. Nakonec určíme $D(f)$ a $H(f)$ (i mezikroků $f_1$, $f_2$).

### Ukázkový příklad

Sestrojte graf exponenciální funkce $f: y = 3^{x+1} - 2$. Určete definiční obory a obory hodnot.

$D(f) = \mathbb{R}$ (není omezen zadáním). Nejprve sestrojíme graf základní funkce $f_1: y=3^x$:

| x | −1 | 0 | 1 |
|---|---|---|---|
| y | 1/3 | 1 | 3 |

```graph
{ "fn": "3^x", "domain": [-2, 2], "yDomain": [0, 6], "title": "f₁: y = 3ˣ" }
```

$f_2: y=3^{x+1}$ — graf $f_1$ posunutý o 1 jednotku **doleva**. $f_3: y=3^{x+1}-2$ — graf $f_2$ posunutý o 2 jednotky **dolů**, vzniká nová asymptota v $y=-2$.

```graph
{ "fn": "3^(x+1) - 2", "domain": [-3, 2], "yDomain": [-3, 6], "title": "f = f₃: y = 3ˣ⁺¹ − 2" }
```

**Výsledek:** $D(f_1)=D(f_2)=D(f_3)=\mathbb{R}=D(f)$; $H(f_1)=H(f_2)=(0;\infty)$; $H(f_3) = (-2;\infty) = H(f)$

## Příklady na procvičení (posunutí)

**Příklad 1:** Sestrojte graf funkce $f: y=3^{x-2}$. Určete $D$ a $H$ všech funkcí.

```graph
{ "fn": "3^(x-2)", "domain": [-1, 5], "yDomain": [0, 6], "title": "f: y = 3ˣ⁻²", "spoiler": true, "float": "right" }
```

Výsledek:

- $f_1: y=3^x$ posuneme o 2 doprava → $f_2 = f$, žádný posun podle osy y
- ||D(f₁) = D(f₂) = D(f) = R||
- ||H(f₁) = H(f₂) = H(f) = (0; ∞)||

---

**Příklad 2:** Sestrojte graf funkce $f: y=4^x - 1$. Určete $D$ a $H$ všech funkcí.

```graph
{ "fn": "4^x - 1", "domain": [-2, 2], "yDomain": [-2, 6], "title": "f: y = 4ˣ − 1", "spoiler": true, "float": "right" }
```

Výsledek:

- $f_1: y=4^x$ posuneme o 1 dolů (nový asymptot v y=−1) → $f_2 = f$
- ||D(f₁) = D(f₂) = D(f) = R||
- ||H(f₁) = (0; ∞), H(f₂) = H(f) = (−1; ∞)||

---

**Příklad 3:** Sestrojte graf funkce $f: y=2^{x-4} + 3$. Určete $D$ a $H$ všech funkcí.

```graph
{ "fn": "2^(x-4) + 3", "domain": [1, 7], "yDomain": [0, 10], "title": "f: y = 2ˣ⁻⁴ + 3", "spoiler": true, "float": "right" }
```

Výsledek:

- $f_1: y=2^x$ posuneme o 4 doprava → $f_2: y=2^{x-4}$, pak o 3 nahoru (nový asymptot v y=3) → $f_3 = f$
- ||D(f₁) = D(f₂) = D(f₃) = D(f) = R||
- ||H(f₁) = H(f₂) = (0; ∞), H(f₃) = H(f) = (3; ∞)||

## Shrnutí

- Předpis: $f: y=a^x$; podle základu $a$ má exponenciální funkce dva tvary — $a\in(0;1)$ klesá, $a\in(1;\infty)$ roste.
- Grafem je exponenciála.
- Posunutí: $f: y=a^{x+m}$ posouvá doleva ($+m$) nebo doprava ($-m$); $f: y=a^{x}+n$ posouvá nahoru ($+n$) nebo dolů ($-n$), přičemž vzniká nová asymptota v $y=n$.

## Zdroje

HUDCOVÁ, Milada a Libuše KUBIČÍKOVÁ. _Sbírka úloh z matematiky pro SOŠ, SOU a nástavbové studium_. 2. vydání. Havlíčkův Brod: Prometheus, spol. s r.o., 2005. Učebnice pro střední školy. ISBN 80-7196-318-6
