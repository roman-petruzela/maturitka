---
title: "Logaritmická funkce a její posunutí"
order: 10
source: "matematika/TY01_0210_-_Logaritmicka_funkce_a_jeji_posunuti.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace používala animované odrážky, tabulky a grafy vložené jako obrázky, které se při prvním převodu ztratily nebo poškodily. Text, vzorce, tabulky a grafy jsou zde doplněné/rekonstruované; všechny hodnoty byly nezávisle ověřeny.

## Osnova

a) pojem logaritmická funkce, b) sestrojení grafu, c) posunutí grafu, d) ukázkové příklady, e) příklady na procvičení včetně řešení.

## Logaritmická funkce

Předpis: $f: y = \log_a x$ (čteme: logaritmus o základu $a$ z hodnoty $x$), kde $x \in \mathbb{R}^+$ (definiční obor se může posunutím změnit) a $a \in \mathbb{R}^+ \setminus \{1\}$, tedy $a \in (0;1) \cup (1;\infty)$.

**Pozn.:** logaritmická a exponenciální funkce jsou si navzájem **inverzní** (viz [Inverzní funkce](/mat/funkce-a-rovnice/07-inverzni-funkce/)).

Tvar grafu závisí na základu $a$: pro $a\in(0;1)$ je funkce **klesající**, pro $a\in(1;\infty)$ je funkce **rostoucí**.

## Ukázkový příklad

Sestrojte graf logaritmické funkce $f: y=\log_2 x$. Určete definiční obor a obor hodnot.

Definiční obor funkce $f$ je $\mathbb{R}^+$, protože hodnota logaritmu musí být $x>0$.

Nejprve sestrojíme pomocnou exponenciální funkci $f': y=2^x$ (inverzní k $f$), s $D(f')=\mathbb{R}$:

| x | −1 | 0 | 1 |
|---|---|---|---|
| y | 1/2 | 1 | 2 |

Tabulku pro $f'$ pak **převrátíme** (prohodíme řádky $x$ a $y$) a dostaneme tabulku pro funkci $f$:

| x | 1/2 | 1 | 2 |
|---|---|---|---|
| y | −1 | 0 | 1 |

```graph
{ "fn": "log(x)/log(2)", "domain": [0.1, 5], "yDomain": [-4, 3], "title": "f: y = log₂ x" }
```

**Výsledek:** $H(f) = \mathbb{R}$

## Příklady na procvičení

**Příklad 1:** Sestrojte graf funkce $f: y=\log_{1/4} x$. Určete $H(f)$.

$D(f)=\mathbb{R}^+$. Protože $a=\frac14 \in (0;1)$, funkce je klesající.

```graph
{ "fn": "log(x)/log(1/4)", "domain": [0.1, 5], "yDomain": [-3, 4], "title": "f: y = log_{1/4} x", "spoiler": true, "float": "right" }
```

Výsledek: $H(f) =$ ||R||

---

**Příklad 2:** Sestrojte graf funkce $f: y=\log_3 x$. Určete $H(f)$.

$D(f)=\mathbb{R}^+$. Protože $a=3 \in (1;\infty)$, funkce je rostoucí.

```graph
{ "fn": "log(x)/log(3)", "domain": [0.1, 5], "yDomain": [-3, 3], "title": "f: y = log₃ x", "spoiler": true, "float": "right" }
```

Výsledek: $H(f) =$ ||R||

---

**Příklad 3:** Sestrojte graf funkce $f: y=\log_{-2} x$. Určete $H(f)$.

Výsledek: ||Základ a = −2 není v povoleném rozmezí (0;1) ∪ (1;∞) — logaritmus se záporným základem není definován. Příklad nemá řešení.||

## Posunutí logaritmické funkce

Zadaná funkce ve tvaru $f: y = \log_a(x+m) + n$ se sestrojuje postupně, ve třech krocích:

1. **Základní funkce** $f_1: y=\log_a x$ — sestrojíme přes pomocnou exponenciální funkci (jako výše).
2. **Posun podél osy x**: $f_2: y=\log_a(x+m)$. Je-li $x+m$, posuneme **doleva** o $m$; je-li $x-m$, posuneme **doprava** o $m$. Tímto posunem vzniká nová svislá asymptota (obrazně „nová osa y").
3. **Posun podél osy y**: $f_3: y=\log_a(x+m)+n$. Je-li $+n$, posuneme **nahoru** o $n$; je-li $-n$, posuneme **dolů** o $n$.

Funkce $f_3=f$ je celý hledaný graf. Nakonec určíme $D(f)$ a $H(f)$ i mezikroků.

### Ukázkový příklad

Sestrojte graf logaritmické funkce $f: y=\log_{1/3}(x+1) - 2$. Určete definiční obory a obory hodnot.

$D(f) = (-1;\infty)$, protože musí platit $x+1>0$.

Základní funkce $f_1: y=\log_{1/3} x$ má $D(f_1)=\mathbb{R}^+,\ H(f_1)=\mathbb{R}$.

$f_2: y=\log_{1/3}(x+1)$ — graf $f_1$ posunutý o 1 **doleva**, nová asymptota v $x=-1$. $D(f_2)=(-1;\infty),\ H(f_2)=\mathbb{R}$.

$f_3: y=\log_{1/3}(x+1)-2$ — graf $f_2$ posunutý o 2 **dolů**.

```graph
{ "fn": "log(x+1)/log(1/3) - 2", "domain": [-0.9, 5], "yDomain": [-5, 3], "title": "f = f₃: y = log_{1/3}(x+1) − 2" }
```

**Výsledek:** $D(f_3) = (-1;\infty) = D(f)$, $H(f_3)=\mathbb{R}=H(f)$

## Příklady na procvičení (posunutí)

**Příklad 1:** Sestrojte graf funkce $f: y=\log_{1/3}(x-2)$. Určete $D$ a $H$ všech funkcí.

```graph
{ "fn": "log(x-2)/log(1/3)", "domain": [2.1, 8], "yDomain": [-4, 4], "title": "f: y = log_{1/3}(x−2)", "spoiler": true, "float": "right" }
```

Výsledek:

- $f_1: y=\log_{1/3}x$ posuneme o 2 doprava (nová asymptota v x=2) → $f_2=f$
- ||D(f) = (2; ∞), protože musí platit x − 2 > 0||
- ||D(f₁) = R⁺, H(f₁) = R||
- ||D(f₂) = D(f) = (2; ∞), H(f₂) = H(f) = R||

---

**Příklad 2:** Sestrojte graf funkce $f: y=\log_4 x - 1$. Určete $D$ a $H$ všech funkcí.

```graph
{ "fn": "log(x)/log(4) - 1", "domain": [0.1, 6], "yDomain": [-4, 2], "title": "f: y = log₄ x − 1", "spoiler": true, "float": "right" }
```

Výsledek:

- $f_1: y=\log_4 x$ posuneme o 1 dolů → $f_2=f$ (žádný posun podél osy x, doména se nemění)
- ||D(f) = D(f₁) = D(f₂) = R⁺||
- ||H(f₁) = R, H(f₂) = H(f) = R||

---

**Příklad 3:** Sestrojte graf funkce $f: y=\log_{1/2}(x-4) + 3$. Určete $D$ a $H$ všech funkcí.

```graph
{ "fn": "log(x-4)/log(1/2) + 3", "domain": [4.1, 10], "yDomain": [-2, 6], "title": "f: y = log_{1/2}(x−4) + 3", "spoiler": true, "float": "right" }
```

Výsledek:

- $f_1: y=\log_{1/2}x$ posuneme o 4 doprava (nová asymptota v x=4) → $f_2$, pak o 3 nahoru → $f_3=f$
- ||D(f) = (4; ∞), protože musí platit x − 4 > 0||
- ||D(f₁) = R⁺, H(f₁) = R||
- ||D(f₂) = (4; ∞), H(f₂) = R||
- ||D(f₃) = D(f) = (4; ∞), H(f₃) = H(f) = R||

## Shrnutí

- Předpis: $f: y=\log_a x$; podle základu $a$ má logaritmická funkce dva tvary — $a\in(0;1)$ klesá, $a\in(1;\infty)$ roste.
- Logaritmická a exponenciální funkce jsou navzájem inverzní.
- Posunutí: $f: y=\log_a(x+m)$ posouvá doleva ($+m$) nebo doprava ($-m$) a mění se definiční obor; $f: y=\log_a x + n$ posouvá nahoru ($+n$) nebo dolů ($-n$) a mění se jen graf, ne definiční obor.

## Zdroje

HUDCOVÁ, Milada a Libuše KUBIČÍKOVÁ. _Sbírka úloh z matematiky pro SOŠ, SOU a nástavbové studium_. 2. vydání. Havlíčkův Brod: Prometheus, spol. s r.o., 2005. Učebnice pro střední školy. ISBN 80-7196-318-6
