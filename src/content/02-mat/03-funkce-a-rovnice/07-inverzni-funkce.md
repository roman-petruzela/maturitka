---
title: "Inverzní funkce"
order: 7
source: "matematika/TY01_0207_-_Inverzni_funkce.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace používala animované odrážky, vzorce a grafy vložené jako obrázky, které se při prvním převodu z velké části ztratily. Text, vzorce, tabulky a grafy jsou zde doplněné/rekonstruované z dochovaných tabulek hodnot; všechny předpisy inverzních funkcí byly nezávisle odvozené a ověřené.

## Osnova

a) pojem inverzní funkce, b) ukázkové příklady, c) příklady na procvičení včetně řešení.

## Inverzní funkce

„Inverzní" znamená „převrácená". Značení: původní funkce $f$, inverzní funkce $f^{-1}$ (případně $f'$).

Nechť je funkce $f$ **prostá** (tj. buď jen rostoucí, nebo jen klesající na celém svém definičním oboru). Pak k ní existuje inverzní funkce $f^{-1}$, pro kterou platí:

$$D(f) = H(f^{-1}), \qquad H(f) = D(f^{-1})$$

Je-li funkce $f$ rostoucí (klesající), je i funkce $f^{-1}$ rostoucí (klesající).

**Pozn.:** pro některé funkce neexistuje inverzní funkce na celém jejich $D(f)$, protože na něm nejsou prosté (např. $y=x^2$ na celém $\mathbb{R}$). Pokud ale definiční obor vhodně omezíme (např. jen na $x \geq 0$), inverzní funkci už najít můžeme.

**Předpis inverzní funkce** zjistíme tak, že v předpisu původní funkce zaměníme $x$ a $y$ a znovu vyjádříme $y$. Grafy původní a inverzní funkce jsou souměrné podle osy $y=x$.

Typické dvojice funkce/inverzní funkce: $f: y=2x$ a $f^{-1}: y=\frac{x}{2}$; $f: y=e^x$ a $f^{-1}: y=\ln x$; $f: y=x^2$ (na $D(f)=\langle0;\infty)$) a $f^{-1}: y=\sqrt{x}$.

## Ukázkový příklad 1

Sestrojte graf inverzní funkce k funkci $f: y = 2x+1$. Určete definiční obory a obory hodnot.

| x | −2 | 3 |
|---|---|---|
| y | −3 | 7 |

```graph
{ "fn": "2*x + 1", "domain": [-2, 3], "title": "f: y = 2x + 1" }
```

Funkce $f$ má $D(f) = \mathbb{R}$, tedy $H(f^{-1}) = \mathbb{R}$.

Předpis $f^{-1}$: zaměníme $x$ a $y$: $x = 2y+1$, odtud $x-1 = 2y$, tedy $f^{-1}: y = \dfrac{x-1}{2}$.

$H(f) = \mathbb{R}$, a tedy $D(f^{-1}) = \mathbb{R}$.

```graph
{ "fn": "(x - 1) / 2", "domain": [-3, 7], "title": "f⁻¹: y = (x−1)/2" }
```

## Ukázkový příklad 2

Sestrojte graf inverzní funkce k funkci $f: y = 2x^2$, $D(f) = \langle0;\infty)$. Určete definiční obory a obory hodnot.

| x | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| y | 0 | 2 | 8 | 18 | 32 |

```graph
{ "fn": "2*x^2", "domain": [0, 4], "title": "f: y = 2x², D(f) = ⟨0;∞)" }
```

Funkce $f$ má $D(f) = \langle0;\infty)$, tedy $H(f^{-1}) = \langle0;\infty)$.

Předpis $f^{-1}$: zaměníme $x$ a $y$: $x=2y^2$, odtud $y^2 = \dfrac{x}{2}$, a protože $D(f)=\langle0;\infty)$ vyžaduje $H(f^{-1})=\langle0;\infty)$, bereme jen kladný kořen: $f^{-1}: y = \sqrt{\dfrac{x}{2}}$.

$H(f) = \langle0;\infty)$, a tedy $D(f^{-1}) = \langle0;\infty)$.

```graph
{ "fn": "sqrt(x/2)", "domain": [0, 32], "title": "f⁻¹: y = √(x/2)" }
```

## Příklady na procvičení

**Příklad 1:** Sestrojte graf inverzní funkce k funkci $f: y = \dfrac{x}{2}+3$, $D(f) = \langle-6;2)$. Určete $H(f)$, $D(f^{-1})$, $H(f^{-1})$. Nalezněte předpis inverzní funkce.

```graph
{ "fn": "x/2 + 3", "domain": [-6, 2], "title": "f: y = x/2 + 3, D(f) = ⟨−6;2)", "spoiler": true, "float": "right" }
```

Výsledek:

- tabulka: ||x=−6→y=0, x=2→y=4||
- $H(f)$: ||⟨0; 4)||
- předpis $f^{-1}$: ||x = y/2 + 3 → y = 2x − 6, tedy f⁻¹: y = 2x − 6||
- $D(f^{-1}) = H(f)$: ||⟨0; 4)||
- $H(f^{-1}) = D(f)$: ||⟨−6; 2)||

---

**Příklad 2:** Sestrojte graf inverzní funkce k funkci $f: y = x^2+3$, $D(f) = \langle0;\infty)$. Určete $H(f)$, $D(f^{-1})$, $H(f^{-1})$. Nalezněte předpis inverzní funkce.

```graph
{ "fn": "x^2 + 3", "domain": [0, 4], "title": "f: y = x² + 3, D(f) = ⟨0;∞)", "spoiler": true, "float": "right" }
```

Výsledek:

- tabulka: ||x=0,1,2,3,4 → y=3,4,7,12,19||
- $H(f)$: ||⟨3; ∞)||
- předpis $f^{-1}$: ||x = y² + 3 → y² = x − 3 → y = √(x−3), tedy f⁻¹: y = √(x−3)||
- $D(f^{-1}) = H(f)$: ||⟨3; ∞)||
- $H(f^{-1}) = D(f)$: ||⟨0; ∞)||

## Shrnutí

- Inverzní funkce = „převrácená" funkce, existuje jen pro prosté funkce (rostoucí, nebo klesající).
- Platí: $D(f) = H(f^{-1})$ a $H(f) = D(f^{-1})$.
- Předpis $f^{-1}$ získáme záměnou $x$ a $y$ v předpisu $f$ a vyjádřením $y$.

## Zdroje

HUDCOVÁ, Milada a Libuše KUBIČÍKOVÁ. _Sbírka úloh z matematiky pro SOŠ, SOU a nástavbové studium_. 2. vydání. Havlíčkův Brod: Prometheus, spol. s r.o., 2005. Učebnice pro střední školy. ISBN 80-7196-318-6
