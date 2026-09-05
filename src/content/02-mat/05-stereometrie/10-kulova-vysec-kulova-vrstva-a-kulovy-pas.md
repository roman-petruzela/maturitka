---
title: "Kulová výseč, kulová vrstva a kulový pás"
order: 10
source: "matematika/TY0110 Kulová výseč, kulová vrstva a kulový pás.pdf"
hasExercises: true
---

> Pozn. k obsahu: Vzorce v PDF byly vysázené jako obrázky (unicode symboly), přepsané zde do LaTeXu. Vzorec pro objem kulové vrstvy v PDF zcela chyběl (nadpis bez textu) — doplněn standardním vzorcem, zpětně ověřeným na příkladu 3. Výsledky úkolů (kde byly v PDF uvedeny) ověřeny přepočtem, souhlasí.

## Kulová výseč

**Kulová výseč** je prostorové těleso, které vznikne sjednocením kulové úseče a rotačního kužele — kužel má s kulovou úsečí společnou kruhovou podstavu (poloměr $\rho$) a jeho vrchol je ve středu příslušné koule. Hranicí tělesa je plášť tohoto kužele a kulový vrchlík.

$$V = \frac23 \pi r^2 v$$

kde $r$ je poloměr koule a $v$ výška kulového vrchlíku, který je součástí výseče. Povrch kulové výseče se skládá z povrchu kulového vrchlíku ($S=2\pi r v$, viz [Koule, kulová plocha, kulová úseč a kulový vrchlík](/mat/stereometrie/09-koule-kulova-plocha-kulova-usec-a-kulovy-vrchlik/)) a pláště kužele ($S_{pl}=\pi\rho r$, protože stranou tohoto kužele je vždy poloměr koule $r$).

## Kulová vrstva

**Kulová vrstva** je prostorové těleso, které vznikne průnikem koule se dvěma rovnoběžnými rovinami ve vzdálenosti menší než poloměr koule od jejího středu. Průsečnicemi obou rovin s koulí jsou dvě kruhové podstavy o poloměrech $\rho_1$ a $\rho_2$; vzdálenost mezi nimi (výšku vrstvy) značíme $v$.

$$V = \frac{\pi v}{6}\left(3\rho_1^2 + 3\rho_2^2 + v^2\right)$$

```solid
{ "type": "koule", "params": { "r": 5, "z1": -1, "z2": 3 }, "labels": [{ "at": [0, -4.9, -1], "text": "ρ_1" }, { "at": [0, -4, 3], "text": "ρ_2" }], "title": "Kulová vrstva mezi řezy v = 4" }
```

## Kulový pás

**Kulový pás** je prostorová plocha (jen povrch, ne vnitřek), která vznikne průnikem kulové plochy se dvěma rovnoběžnými rovinami ve vzdálenosti menší než poloměr od středu. Průsečnicemi jsou opět dvě kružnice o poloměrech $\rho_1$, $\rho_2$, výšku pásu značíme $v$.

$$S = 2\pi r v$$

kde $r$ je poloměr původní koule — stejně jako u kulového vrchlíku závisí povrch jen na $r$ a $v$, ne na poloměrech kružnic.

**Pozor:** je-li dvojice rovin na **opačných stranách** středu koule, sčítají se jejich vzdálenosti od středu ($v=d_1+d_2$); jsou-li na **stejné straně**, výška je jejich rozdíl ($v=|d_1-d_2|$).

## Úkoly (interaktivní, Cabri 3D)

1. V programu Cabri narýsujte kouli o poloměru $7\text{ cm}$. Tuto kouli protněte rovinou ve vzdálenosti $4\text{ cm}$ od středu koule. Pomocí průsečnice (protnutí koule a roviny) a středu koule narýsujte plášť kužele, který bude součástí kulové výseče. Vypočtěte povrch tohoto pláště a výsledek ověřte v programu Cabri.

   Výsledek: ||v = r-d = 7-4 = 3cm; ρ²=v(2r-v)=3·(14-3)=33 → ρ≈5,745cm; plášť kužele má stranu rovnou poloměru koule r=7cm, S_pl=πρr≈π·5,745·7≈126,35 cm²||

2. V programu Cabri narýsujte kouli o poloměru $6\text{ cm}$. Tuto kouli protněte dvěma rovnoběžnými rovinami ve vzdálenostech $3\text{ cm}$ a $4\text{ cm}$ od středu koule. Vzniknou nám 2 kruhové podstavy kulové vrstvy. Vypočtěte velikost poloměrů těchto podstav. Výsledek ověřte programem Cabri.

   Výsledek: ||ρ₁=√(r²-d₁²)=√(36-9)=√27≈5,196cm; ρ₂=√(r²-d₂²)=√(36-16)=√20≈4,472cm||

## Příklady

**1.** Vypočtěte povrch kulového pásu, který vznikne z kulové plochy o poloměru $r=5\text{ cm}$. Poloměry kružnic, v nichž rovnoběžné roviny protínají kulovou plochu, jsou $\rho_1=4\text{ cm}$ a $\rho_2=3\text{ cm}$.

Výsledek: ||d₁=√(r²-ρ₁²)=√(25-16)=3cm; d₂=√(r²-ρ₂²)=√(25-9)=4cm; roviny na stejné straně středu (obě kružnice menší než "rovník"): v=|d₁-d₂|=1cm; S=2πrv=2π·5·1=10π ≈ 31,42 cm²||

**2.** Vypočtěte objem kulové výseče, má-li kulová úseč, která je částí výseče, poloměr podstavy $6\text{ cm}$ a výšku $2\text{ cm}$.

Výsledek: ||nejprve poloměr koule z ρ²=v(2r-v): 36=2(2r-2) → r=10cm; V=(2/3)πr²v=(2/3)π·100·2=(400/3)π ≈ 418,879 cm³||

**3.** Vypočtěte objem kulové vrstvy, mají-li podstavy poloměry $8\text{ cm}$ a $6\text{ cm}$ a poloměr koule je $10\text{ cm}$.

Výsledek: ||d₁=√(r²-ρ₁²)=√(100-64)=6cm; d₂=√(r²-ρ₂²)=√(100-36)=8cm; roviny na stejné straně: v=|d₁-d₂|=2cm; V=(πv/6)(3ρ₁²+3ρ₂²+v²)=(2π/6)(192+108+4)=(2π/6)·304=(304/3)π ≈ 318,35 cm³||
