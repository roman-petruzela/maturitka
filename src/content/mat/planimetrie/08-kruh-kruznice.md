---
title: "Kruh, kružnice"
order: 8
source: "matematika/TY01_0118 Kruh, kružnice.pdf"
hasExercises: true
---

> Pozn. k obsahu: Vzorce v PDF byly vysázené jako obrázky (unicode zlomky), text a výsledky úkolů se ale dochovaly celé — vzorce jsou zde přepsané do LaTeXu, výsledky do spoilerů, čísla stránek odstraněna.

**Kružnice** je množina všech bodů, které mají od středu $S$ stejnou vzdálenost, tzv. **poloměr** ($|SA|=r$). Jsou to tedy jen body ležící na okrajové čáře.

**Kruh** je množina všech bodů, které mají od středu $S$ vzdálenost stejnou nebo menší než poloměr ($|SC|\leq r$). Jsou to tedy i body uvnitř kružnice, ne jen na jejím okraji.

```graph
{ "parametric": "3*cos(t), 3*sin(t)", "tDomain": [0, 6.283185307], "title": "Kružnice o poloměru r = 3" }
```

**Pozn.:** poloměr ($r$) je vzdálenost od středu k bodu na kružnici; průměr ($d$) je vzdálenost dvou bodů na kružnici, jejichž spojnice prochází středem $S$ (tedy $d=2r$).

## Vzorce

$$o = 2\pi r = \pi d \qquad \text{(obvod kružnice)}$$

$$S = \pi r^2 \qquad \text{(obsah kruhu)}$$

**Mezikruží** je část obsahu kruhu mezi dvěma soustřednými kružnicemi (stejný střed $S$, různé poloměry $r_1>r_2$):

$$S_{\text{mezikruží}} = \pi r_1^2 - \pi r_2^2 = \pi(r_1^2-r_2^2)$$

## Úkoly

**1.** Vypočítejte obvod kružnice a obsah kruhu, je-li průměr roven 6 cm.

Výsledek: ||r = 3 cm; o = 2πr ≈ 18,85 cm; S = πr² ≈ 28,27 cm²||

**2.** Vypočítejte poloměr atletické dráhy tvaru kružnice, kterou atlet musí oběhnout pětkrát, aby uběhl 7 km.

Výsledek: ||jeden okruh = 7000/5 = 1400 m = obvod, r = o/(2π) ≈ 222,82 m||

**3.** Zadní kola traktoru mají průměr 1,5 m a přední kola mají poloměr 25 cm. **a)** V jakém poměru jsou počty jejich otáček? **b)** Kolikrát se otočí každé kolo při ujetí 30 km?

Výsledek: ||a) poloměry 75cm : 25cm = 3:1, počty otáček jsou nepřímo úměrné poloměru, tedy poměr otáček 1:3 (zadní:přední). b) obvod zadního kola ≈ 4,71 m → 30000/4,71 ≈ 6366×; obvod předního ≈ 1,57 m → 30000/1,57 ≈ 19099×||

**4.** Jakou dráhu v metrech urazí za týden konec sekundové ručičky dlouhé 3 cm?

Výsledek: ||za 1 minutu opíše celý obvod = 2π·3cm ≈ 18,85 cm; za týden: 60 min × 24 h × 7 dní = 10080 otoček × 18,85 cm ≈ 190003 cm ≈ 1900,03 m||

**5.** Vypočítejte průměr kruhu, jehož číselná hodnota obsahu a obvodu je vyjádřena stejným číslem.

Výsledek: ||πr² = 2πr → r = 2 → d = 4 cm||

**6.** Vypočítejte průměr kruhu, je-li jeho obsah $360{,}14\text{ cm}^2$.

Výsledek: ||r = √(S/π) ≈ 10,705 cm, d ≈ 21,41 cm||

**7.** Vypočítejte obsah mezikruží ohraničeného kružnicemi o průměru 60 mm a poloměru 40 mm.

Výsledek: ||r₁=40mm, r₂=30mm (poloviny 60mm); S = π(40²−30²) ≈ 2199,11 mm²||

**8.** Jak široké je mezikruží, jehož obsah je $5200\text{ cm}^2$ a vnější průměr je 100 cm?

Výsledek: ||r₁=50cm; π(50²−r₂²)=5200 → r₂²=2500−5200/π≈844,7 → r₂≈29,07cm; šířka = r₁−r₂ ≈ 20,93 cm||

**9.** Vypočítejte obsah plochy omezené kružnicí opsanou a vepsanou trojúhelníku o stranách $a=25\text{ mm}, b=29\text{ mm}, c=36\text{ mm}$.

Výsledek: ||mezikruží mezi kružnicí opsanou (r) a vepsanou (ρ) tomuto trojúhelníku: S ≈ 830,59 mm²||
