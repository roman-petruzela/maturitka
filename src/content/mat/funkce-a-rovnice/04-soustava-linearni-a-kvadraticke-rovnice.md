---
title: "Soustava lineární a kvadratické rovnice"
order: 4
source: "matematika/TY01_0204_-_Soustava_linearni_a_kvadraticke_rovnice.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace používala animované odrážky, vzorce vložené jako obrázky a tabulky hodnot, které se při prvním převodu ztratily nebo poškodily. Text, vzorce a tabulky jsou zde doplněné/rekonstruované; všechny výsledky byly nezávisle přepočítány. U jednoho grafického příkladu měl v podkladu zjevně chybět mínus (uváděné "xy = 6" nedávalo výsledky z podkladu, ale "xy = −6" ano) — opraveno.

## Osnova

a) pojem soustava rovnic, b) metody řešení soustav rovnic, c) způsoby řešení soustavy lineární a kvadratické rovnice, d) ukázkové příklady, e) příklady na procvičení včetně řešení.

## Soustava rovnic

V soustavě rovnic pracujeme se dvěma či více rovnicemi. Není podmínkou, aby všechny rovnice byly lineárního typu — v této kapitole řešíme soustavu, kde je jedna rovnice lineární a druhá kvadratická.

## Způsoby řešení

- **početně** — vyřešením soustavy rovnic (sčítací nebo dosazovací metodou)
- **graficky** — pomocí funkcí a jejich grafů

## Početní řešení — sčítací a dosazovací metoda

**Sčítací metoda:** snažíme se vynulovat (vyloučit) jednu vybranou neznámou; při této metodě může dojít k násobení nebo dělení jedné či obou rovnic nějakým číslem.

**Dosazovací metoda:** z jedné rovnice si vyjádříme jednu neznámou a toto vyjádření dosadíme do zbývající rovnice.

### Ukázkový příklad (dosazovací metoda)

Řešte soustavu $x + 6y = 10$, $x^2 + 4y^2 = 10$.

Z první rovnice vyjádříme $x = 10 - 6y$ a dosadíme do druhé:

$(10-6y)^2 + 4y^2 = 10$

$100 - 120y + 36y^2 + 4y^2 = 10$

$40y^2 - 120y + 90 = 0 \quad / :10$

$4y^2 - 12y + 9 = 0$

Diskriminant vyšel $D = 144 - 144 = 0$, takže rovnice má jeden dvojnásobný kořen: $y_{1,2} = \dfrac{12}{8} = 1{,}5$.

Dopočítáme $x$ dosazením zpět: $x = 10 - 6 \cdot 1{,}5 = 10 - 9 = 1$.

**Výsledek:** $[x;y] = [1;\ 1{,}5]$ (jediné řešení, protože kořen je dvojnásobný)

## Příklady na procvičení (početně)

**Příklad 1:** Řešte soustavu $x^2 + y^2 - 4 = 0$, $x + 2y = 4$.

Výsledek:

- dosazením $x=4-2y$: ||5y² − 16y + 12 = 0, D = 16, y₁ = 2, y₂ = 1,2||
- řešení: ||[x₁;y₁] = [0; 2],  [x₂;y₂] = [1,6; 1,2]||

---

**Příklad 2:** Řešte soustavu $5xy - y^2 + 14 = 0$, $2x - y - 4 = 0$.

Výsledek:

- z druhé rovnice: ||y = 2x − 4||
- po dosazení: ||3x² − 2x − 1 = 0, D = 16, x₁ = 1, x₂ = −1/3||
- řešení: ||[x₁;y₁] = [1; −2],  [x₂;y₂] = [−1/3; −14/3]||

## Grafické řešení soustav rovnic

Každou rovnici soustavy zapíšeme jako funkci a nakreslíme její graf. Tam, kde se grafy funkcí protnou, dostáváme řešení soustavy — výsledky jsou souřadnice průsečíků.

### Ukázkový příklad

Řešte soustavu $x - y = 5$, $xy = -6$.

Vyjádříme obě rovnice jako funkce: $f_1: y = x - 5$ (lineární funkce, přímka, $D(f_1)=\mathbb{R}$) a $f_2: y = -\dfrac{6}{x}$ (lineární lomená funkce, hyperbola, $D(f_2)=\mathbb{R}\setminus\{0\}$).

Tabulka pro $f_1$ (stačí 2 body):

| x | 0 | 5 |
|---|---|---|
| y | −5 | 0 |

Tabulka pro $f_2$ (potřeba víc bodů, protože hyperbola má dvě větve):

| x | −3 | −2 | −1 | 1 | 2 | 3 |
|---|---|---|---|---|---|---|
| y | 2 | 3 | 6 | −6 | −3 | −2 |

Průsečíky zjistíme i početně (dosazením $y=x-5$ do $xy=-6$): $x(x-5) = -6 \Rightarrow x^2-5x+6=0 \Rightarrow (x-2)(x-3)=0$, tedy $x=2$ nebo $x=3$.

**Výsledek:** $A = [2;\ -3]$, $B = [3;\ -2]$

## Příklady na procvičení (graficky)

**Příklad 1:** Řešte soustavu $4x + 2y - 6 = 0$, $y = x^2$.

Vyjádříme jako funkce: $f_1: y = -2x+3$ (přímka), $f_2: y=x^2$ (parabola, $V=[0;0]$).

Výsledek:

- dosazením $x^2 = -2x+3$: ||x² + 2x − 3 = 0, (x+3)(x−1) = 0, x₁ = −3, x₂ = 1||
- řešení: ||A = [1; 1], B = [−3; 9]||

---

**Příklad 2:** Řešte soustavu $y = x^2$, $xy = 8$.

Vyjádříme jako funkce: $f_1: y=x^2$ (parabola, $V=[0;0]$), $f_2: y=\dfrac{8}{x}$ (hyperbola).

Výsledek:

- dosazením $x^2 = 8/x$: ||x³ = 8||
- řešení: ||x = 2, y = 4, tedy A = [2; 4] (jediný reálný průsečík — rovnice x³=8 má jen jeden reálný kořen, zbylé dva jsou komplexní)||

## Shrnutí

- Způsoby řešení soustavy rovnic: **početně** (sčítací nebo dosazovací metoda), **graficky** (průsečíky grafů funkcí)
- Při grafickém řešení je nutné určit typ obou funkcí a sestrojit jejich grafy (tabulku hodnot), řešením jsou souřadnice průsečíků

## Zdroje

HUDCOVÁ, Milada a Libuše KUBIČÍKOVÁ. _Sbírka úloh z matematiky pro SOŠ, SOU a nástavbové studium_. 2. vydání. Havlíčkův Brod: Prometheus, spol. s r.o., 2005. Učebnice pro střední školy. ISBN 80-7196-318-6
