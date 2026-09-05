---
title: "Rotační válec"
order: 4
source: "matematika/TY0104 Rotační válec.pdf"
hasExercises: true
---

> Pozn. k obsahu: Vzorce v PDF byly vysázené jako obrázky (unicode symboly), přepsané zde do LaTeXu; výsledky úkolů (ověřeny přepočtem, souhlasí) do spoilerů. V zadání 4 byla v PDF u obsahu pláště chybně jednotka $\text{dm}^3$ místo $\text{dm}^2$ (obsah je vždy plošná veličina) — opraveno. PDF dále odkazovalo na program Cabri 3D pro interaktivní úkol 1, který proto nejde reprodukovat, ponechán jako historický záznam.

**Rotační válec** je těleso, které vznikne otáčením (rotací) obdélníku kolem jedné jeho strany (nebo kolem střední příčky). Válec je vymezen dvěma shodnými rovnoběžnými podstavami ve tvaru kruhu a pláštěm.

Poloměr podstavy značíme $r$, průměr podstavy $d$, vzdálenost mezi podstavami (výšku válce) $v$. Pokud plášť válce rozvineme do roviny, dostaneme obdélník, jehož jedna strana má délku $v$ a druhá délku obvodu podstavy $2\pi r$.

$$S_p = \pi r^2 \qquad S_{pl} = 2\pi r v \qquad S = 2S_p + S_{pl} = 2\pi r^2 + 2\pi r v = 2\pi r(r+v)$$

$$V = S_p \cdot v = \pi r^2 v$$

## Úkoly (interaktivní, Cabri 3D)

1. V programu Cabri nakreslete válec o poloměru podstavy $r=5\text{ cm}$ a výšce $v=7\text{ cm}$. Ve válci vyznačte výšku. Vypočtěte objem a povrch válce a své výsledky ověřte pomocí programu Cabri.

## Příklady

**1.** V rotačním válci je dán objem $V=498\text{ cm}^3$ a poloměr podstavy $r=8{,}5\text{ cm}$. Vypočtěte jeho výšku $v$ a povrch $S$.

Výsledek: ||v = V/(πr²) = 498/(π·8,5²) ≈ 2,194 cm; S = 2πr(r+v) = 2π·8,5·(8,5+2,194) ≈ 571,135 cm²||

**2.** Sud tvaru válce vysoký $2\text{ m}$ pojme $1{,}57\text{ m}^3$ oleje. Jaký je jeho vnitřní průměr?

Výsledek: ||r² = V/(πv) = 1,57/(π·2) ≈ 0,25 → r = 0,5 m → d = 1 m||

**3.** Jaká bude spotřeba papíru na výrobu zkušební nádoby tvaru válce bez víka, která má mít objem $169{,}65\text{ cm}^3$ a hloubku $6\text{ cm}$? Zanedbejte spotřebu na spoje, odpad atd.

Výsledek: ||r² = V/(πv) = 169,65/(π·6) ≈ 9 → r ≈ 3 cm; nádoba bez víka = jen jedna podstava + plášť: S = πr² + 2πrv = 9π + 36π = 45π ≈ 141,37 cm²||

**4.** Obsah pláště válce je $20\pi\text{ dm}^2$, poloměr podstavy $20\text{ cm}$. Vypočtěte objem tohoto válce.

Výsledek: ||r = 20cm = 2dm; S_pl = 2πrv → 20π = 2π·2·v → v = 5 dm; V = πr²v = π·4·5 = 20π ≈ 62,83 dm³||
