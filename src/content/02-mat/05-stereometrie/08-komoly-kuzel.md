---
title: "Komolý kužel"
order: 8
source: "matematika/TY0108 Komolý kužel.pdf"
hasExercises: true
---

> Pozn. k obsahu: Vzorce v PDF byly vysázené jako obrázky (unicode symboly), přepsané zde do LaTeXu; výsledky úkolů ověřeny přepočtem. U příkladu 3 dochovaný výsledek ($m=1{,}439\text{ kg}$, $V=21{,}422\text{ l}$) neodpovídal správnému dosazení zadaných průměrů — vycházelo z toho, že se hodnoty průměrů omylem použily přímo jako poloměry (bez dělení dvěma). Po opravě (poloměry $r_1=8\text{ cm}$, $r_2=14\text{ cm}$) vychází výrazně menší, ale se zadáním konzistentní hodnoty — přepočítáno správně.

**Komolý kužel** je část kužele ležící mezi dvěma rovnoběžnými rovinami (podstavami) procházejícími tímto kuželem — zjednodušeně kužel s uříznutým „vrškem". Vzdálenost dvou rovnoběžných podstav nazýváme **tělesová výška** ($v$), délku strany komolého kužele značíme $s$, poloměry podstav $r_1$ a $r_2$.

Povrch tvoří dvě kruhové podstavy a plášť (výseč mezikruží):

$$S_{P1} = \pi r_1^2 \qquad S_{P2} = \pi r_2^2 \qquad S_{pl} = \pi(r_1+r_2)s$$

$$S = \pi r_1^2 + \pi r_2^2 + \pi(r_1+r_2)s$$

$$V = \frac13 \pi v\left(r_1^2 + r_1 r_2 + r_2^2\right)$$

```solid
{ "type": "komoly_kuzel", "params": { "r1": 3.5, "r2": 1, "v": 6 }, "labels": [{ "at": [3.5, 0, 0], "text": "r_1" }, { "at": [1, 0, 6], "text": "r_2" }, { "at": [0, 0, 3], "text": "v" }], "title": "Komolý rotační kužel" }
```

## Úkol (interaktivní, Cabri 3D)

1. V programu Cabri nakreslete komolý kužel. Cabri toto těleso přímo nezná, model lze ale vytvořit pomocí nástroje *stopa prvku*:
   - nakreslete v rovině kružnici $k$
   - středem kružnice veďte přímku $o$ kolmou k rovině, ve které leží kružnice
   - na přímce $o$ zvolte bod $V$ — vrchol nekomolého kužele, ze kterého vytvoříme kužel komolý
   - vytvořte rovinu $\rho$ rovnoběžnou s rovinou, ve které leží kružnice $k$
   - na kružnici $k$ zvolte bod $K$, vytvořte přímku $p=VK$
   - vytvořte bod $L\in p\cap\rho$
   - vytvořte úsečku $KL$; pomocí nástroje *stopa prvku* a úsečky $KL$ vytvořte komolý kužel

## Příklady

**1.** Jakou výšku má těleso tvaru rotačního komolého kužele, jsou-li poloměry podstav $2\text{ m}$ a $1{,}5\text{ m}$ a objem $9{,}687\text{ m}^3$?

Výsledek: ||r₁²+r₁r₂+r₂²=4+3+2,25=9,25; v = 3V/(π·9,25) = 3·9,687/(9,25π) ≈ 1 m||

**2.** Poloměry podstav komolého rotačního kužele jsou $r_1=7\text{ cm}$, $r_2=2\text{ cm}$, jeho povrch $S=170\pi\text{ cm}^2$. Určete jeho objem.

Výsledek: ||S_p1+S_p2=π(49+4)=53π; S_pl=S-53π=117π=π(r₁+r₂)s=9πs → s=13cm; v=√(s²-(r₁-r₂)²)=√(169-25)=12cm; V=(πv/3)(r₁²+r₁r₂+r₂²)=(12π/3)(49+14+4)=4π·67=268π ≈ 841,95 cm³||

**3.** Nádoba má tvar komolého rotačního kužele a nemá víko. Průměr dna je $16\text{ cm}$, průměr okraje je $28\text{ cm}$, strana má délku $15\text{ cm}$. Kolik váží nádoba, jestliže $1\text{ m}^2$ materiálu, ze kterého je vyrobena, váží $5\text{ kg}$? Kolik litrů vody se do ní vejde?

Výsledek: ||r₁=8cm (dno), r₂=14cm (okraj); bez víka → povrch = dno + plášť: S=πr₁²+π(r₁+r₂)s=64π+22π·15=64π+330π=394π≈1237,8 cm²=0,1238m²; m=0,1238·5≈0,619 kg. Objem: v=√(s²-(r₂-r₁)²)=√(225-36)=√189≈13,75cm; V=(πv/3)(r₁²+r₁r₂+r₂²)=(π·13,75/3)(64+112+196)=(π·13,75/3)·372≈5355 cm³ ≈ 5,355 l||
