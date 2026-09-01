---
title: "Kvadratická rovnice"
order: 2
source: "matematika/TY01_0202-Kvadraticka_rovnice.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace používala animované odrážky a vzorce vložené jako obrázky, které se při prvním převodu ztratily. Text a vzorce jsou zde doplněné/rekonstruované; u jednoho odvození (posun. příklad s (x+2)²−20=...) čísla v podkladu neseděla, nahrazeno ověřeným příkladem se stejným cílem (Vietovy vzorce).

## Osnova

a) pojem kvadratická rovnice, b) rozdělení kvadratických rovnic, c) způsoby řešení, d) ukázkové příklady, e) příklady na procvičení včetně řešení.

## Kvadratická rovnice

Kvadratickou rovnicí s neznámou $x$ nazýváme každou rovnici v obecném tvaru $ax^2 + bx + c = 0$, kde koeficienty $a, b, c \in \mathbb{R}$ a $a \neq 0$.

- $ax^2$ — kvadratický člen
- $bx$ — lineární člen
- $c$ — absolutní člen

**Pozn.:** pokud by bylo $a = 0$, nejde o kvadratickou rovnici.

**Pozn.:** rovnice se stává (ne)kvadratickou až po matematických úpravách — nelze to tedy poznat hned ze zadání.

Př.: $(2x-5)(x+4)=0$ — roznásobíme závorky: $2x^2+8x-5x-20=0$, sečteme: $2x^2+3x-20=0$ → **dostali jsme kvadratickou rovnici**.

Ale pozor — Př.: $(2x-5)(x+4)=2x^2-4$ — roznásobíme: $2x^2+8x-5x-20=2x^2-4$, členy s $x^2$ se na obou stranách odečtou: $8x-5x=20-4$, tedy $3x=16$ → **nejde o kvadratickou rovnici**, ale o lineární!

## Typy kvadratické rovnice

**Úplná kvadratická rovnice** má všechny tři členy: $ax^2 + bx + c = 0$.

**Neúplná kvadratická rovnice** — chybí jí absolutní nebo lineární člen (nebo oba):

- $ax^2 + bx = 0$ (chybí absolutní člen)
- $ax^2 + c = 0$ (chybí lineární člen)
- $ax^2 = 0$ (chybí lineární i absolutní člen)

## Způsoby řešení — úplná kvadratická rovnice

**a) diskriminant a vzorec pro výpočet kořenů**

$$D = b^2 - 4ac, \qquad x_{1,2} = \frac{-b \pm \sqrt{D}}{2a}$$

- $D > 0$ → dvě různá řešení
- $D = 0$ → jeden dvojnásobný kořen
- $D < 0$ → nemá řešení v oboru $\mathbb{R}$ (má řešení v oboru $\mathbb{C}$)

**b) Vietovy vzorce**

$$x_1 \cdot x_2 = \frac{c}{a}, \qquad x_1 + x_2 = -\frac{b}{a}$$

Hledáme dvě čísla, jejichž součin je $c/a$ a součet $-b/a$.

**Pozn.:** Vietovy vzorce se hodí hlavně tehdy, když má rovnice $a = 1$ a $b, c \in \mathbb{Z}$ — dvojice čísel se pak dá často uhodnout.

### Ukázkový příklad (diskriminant)

$(2x-5)(x+4)=0$ → $2x^2+8x-5x-20=0$ → $2x^2+3x-20=0$

Vypíšeme koeficienty: $a=2,\ b=3,\ c=-20$ (Vietovy vzorce nepoužijeme, protože $a \neq 1$).

### Ukázkový příklad (Vietovy vzorce)

Řešte rovnici $x^2 + 20x + 64 = 0$ pomocí Vietových vzorců.

Hledáme dvě čísla, jejichž součin je $64$ a součet $-20$ — zkusíme kombinace dělitelů čísla 64 (např. 8 a 8, −8 a −8, 16 a 4, −16 a −4):

$$x_1 = -16, \qquad x_2 = -4$$

Ověření: $(-16) \cdot (-4) = 64$ ✓ a $(-16) + (-4) = -20$ ✓.

## Příklady na procvičení (úplná rovnice)

**Př. 1:** $2x^2 + 5x - 3 = 0$

Výsledek:

- koeficienty: ||a=2, b=5, c=−3||
- diskriminant: ||D = 25+24 = 49, √D = 7||
- kořeny: ||x₁ = (−5+7)/4 = 0,5, x₂ = (−5−7)/4 = −3||

**Př. 2:** $-3x^2 + 12x - 12 = 5x^2 + 10x - 13$

Výsledek:

- úprava: ||−8x² + 2x + 1 = 0, po vynásobení −1: 8x² − 2x − 1 = 0||
- diskriminant: ||D = 4+32 = 36, √D = 6||
- kořeny: ||x₁ = (2+6)/16 = 0,5, x₂ = (2−6)/16 = −0,25||

**Př. 3 (Vietovy vzorce):** $x^2 + 2x - 3 = 0$

Výsledek: hledáme součin ||−3|| a součet ||−2|| → ||x₁ = 1, x₂ = −3||

**Př. 4 (Vietovy vzorce):** $(x + 1)^2 = 16$

Výsledek: po úpravě ||x² + 2x − 15 = 0||, hledáme součin ||−15|| a součet ||−2|| → ||x₁ = −5, x₂ = 3||

## Způsoby řešení — neúplná kvadratická rovnice

**a) diskriminant a vzorec pro kořeny** — stejně jako u úplné rovnice, jen některé koeficienty jsou nulové.

**b) vytýkání** — chybí-li absolutní člen ($ax^2+bx=0$), vytkneme $x$:

Př.: $x^2 + 3x = 0$ → $x(x+3)=0$ → $x_1 = 0$ nebo $x + 3 = 0 \Rightarrow x_2 = -3$

Př.: $4x^2 - 11x = x(4-x)$ — roznásobíme a převedeme vše na levou stranu: $4x^2-11x-4x+x^2=0$ → $5x^2-15x=0$, vydělíme 5: $x^2-3x=0$ → $x(x-3)=0$ → $x_1=0,\ x_2=3$

**c) odmocnění** — chybí-li lineární člen ($ax^2+c=0$), osamostatníme $x^2$ a odmocníme:

Př.: $(x-2)^2 = 8-4x$ → $x^2-4x+4=8-4x$ → $x^2-4x+4-8+4x=0$ → $x^2-4=0$ → $x^2=4$ → $|x|=2$ → $x_1=2,\ x_2=-2$

**Pozn.:** u rovnic typu $x^2 + c = 0$ s $c > 0$ lze rovnou říct, že nemá řešení v $\mathbb{R}$ (součet dvou nezáporných čísel nemůže být nula, pokud $c>0$).

## Shrnutí

- Obecný tvar kvadratické rovnice: $ax^2 + bx + c = 0$
- Typy: úplná × neúplná
- Způsoby řešení: diskriminant a vzorec pro kořeny, Vietovy vzorce, vytýkání, odmocnění

## Zdroje

HUDCOVÁ, Milada a Libuše KUBIČÍKOVÁ. _Sbírka úloh z matematiky pro SOŠ, SOU a nástavbové studium_. 2. vydání. Havlíčkův Brod: Prometheus, spol. s r.o., 2005. Učebnice pro střední školy. ISBN 80-7196-318-6
