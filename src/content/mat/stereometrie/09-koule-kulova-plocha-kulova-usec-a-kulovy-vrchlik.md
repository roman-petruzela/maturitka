---
title: "Koule, kulová plocha, kulová úseč a kulový vrchlík"
order: 9
source: "matematika/TY0109 Koule, kulová plocha, kulová úseč a kulový vrchlík.pdf"
hasExercises: true
---

> Pozn. k obsahu: Vzorce v PDF byly vysázené jako obrázky (unicode symboly), přepsané zde do LaTeXu; výsledky úkolů ověřeny přepočtem, souhlasí. Sekce „Kulová úseč" byla v PDF jen nadpis bez textu (vzorec chyběl zcela) — doplněno standardním vzorcem, ověřeným zpětně na příkladech 3 a 4, které na tento vzorec navazují.

## Koule

**Koule** je množina bodů v prostoru, které mají od daného pevného bodu $S$ (střed) vzdálenost **menší nebo rovnu** kladnému číslu $r$ (poloměr).

$$V = \frac43 \pi r^3$$

```graph
{ "parametric": "4*cos(t), 4*sin(t)", "tDomain": [0, 6.283185307], "title": "Řez koulí o poloměru r = 4 cm rovinou středem" }
```

## Kulová plocha

**Kulová plocha** je množina bodů v prostoru, které mají od středu $S$ vzdálenost **rovnu** kladnému číslu $r$ — je to „obal" koule (jen povrchová vrstva, ne vnitřek).

$$S = 4\pi r^2$$

## Kulový vrchlík

Pokud kulovou plochu protneme rovinou, rozdělí ji na dvě části — **kulové vrchlíky**. Průsečíkem koule a roviny je kružnice o poloměru $\rho$. Výšku kulového vrchlíku značíme $v$.

$$S_{\text{vrchlík}} = 2\pi r v$$

kde $r$ je poloměr kulové plochy, ze které vrchlík vznikl (povrch vrchlíku závisí jen na $r$ a $v$, ne na $\rho$).

## Kulová úseč

**Kulová úseč** je celé těleso (ne jen zakřivená plocha) ohraničené kulovým vrchlíkem a rovinným řezem — tedy „ukrojený kus" koule i s jeho vnitřkem.

$$V_{\text{úseč}} = \frac{\pi v^2}{3}(3r - v)$$

kde $r$ je poloměr koule a $v$ výška úseče. Mezi poloměrem řezné kružnice $\rho$, výškou $v$ a poloměrem koule $r$ platí vztah (plyne z Pythagorovy věty v řezu koulí):

$$\rho^2 = v(2r-v)$$

## Úkoly (interaktivní, Cabri 3D)

1. V programu Cabri narýsujte kouli o poloměru $r=4\text{ cm}$. Vypočtěte její objem a povrch, výsledky ověřte programem Cabri.
2. V programu Cabri narýsujte kouli o poloměru $r=7\text{ cm}$. Kouli protněte rovinou vzdálenou $4\text{ cm}$ od jejího středu. Vyznačte kružnici, která vznikne průnikem kulové plochy a roviny. Vyznačte poloměr této kružnice a výšky obou vzniklých kulových úsečí.

## Příklady

**1.** Ze dvou koulí o poloměrech $r_1=2\text{ cm}$ a $r_2=3\text{ cm}$ je ulita jedna koule. Určete její poloměr a povrch.

Výsledek: ||zachování objemu: r³=r₁³+r₂³=8+27=35 → r=∛35≈3,271 cm; S=4πr²≈134,458 cm²||

**2.** Kolikrát se zmenší objem a povrch koule, jestliže se její poloměr zmenší třikrát?

Výsledek: ||V∝r³ → zmenší se 3³=27×; S∝r² → zmenší se 3²=9×||

**3.** Z koule o poloměru $r=16\text{ cm}$ je oddělena úseč, jejíž výška je osmina průměru koule. Určete objem kulové úseče.

Výsledek: ||v = d/8 = 32/8 = 4cm; V=(πv²/3)(3r-v) = (π·16/3)(48-4) = (704π/3) ≈ 737,227 cm³||

**4.** Kulová úseč má poloměr podstavy $\rho=5\text{ cm}$ a výšku $v=1\text{ cm}$. Vypočtěte poloměr koule, jejíž částí je kulová úseč.

Výsledek: ||ρ²=v(2r-v) → 25=1·(2r-1) → 2r=26 → r=13 cm||
