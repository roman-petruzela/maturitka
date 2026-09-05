---
title: "Rotační kužel"
order: 6
source: "matematika/TY0106 Rotační kužel.pdf"
hasExercises: true
---

> Pozn. k obsahu: Vzorce v PDF byly vysázené jako obrázky (unicode symboly), přepsané zde do LaTeXu; výsledky úkolů (ověřeny přepočtem) do spoilerů. U příkladu 1 dochovaný výsledek odpovídal celkovému povrchu $S$, ne jen obsahu pláště, jak zadání uvádělo — opraveno na "povrch". Odkaz na interaktivní GeoGebra applet (rozvinutí pláště kužele) ponechán, funkčnost nebyla ověřována.

**Rotační kužel** je těleso vzniklé rotací pravoúhlého trojúhelníku kolem jedné z jeho odvěsen. Otáčením druhé odvěsny vznikne kruhová podstava kužele, otáčením přepony vznikne **plášť kužele**.

Poloměr podstavy značíme $r$, tělesovou výšku (vzdálenost vrcholu od středu podstavy) $v$, stěnovou výšku (délku strany kužele) $s$. Poloměr, výška a stěnová výška tvoří pravoúhlý trojúhelník — platí mezi nimi Pythagorova věta ($s^2=r^2+v^2$) i goniometrické funkce.

$$S_p = \pi r^2$$

Rozvinutý plášť je kruhová výseč, jejíž délka oblouku je rovna obvodu podstavy kužele a jejíž poloměr je roven stěnové výšce $s$:

$$S_{pl} = \pi r s$$

$$S = S_p + S_{pl} = \pi r^2 + \pi r s = \pi r(r+s) \qquad V = \frac13 \pi r^2 v$$

```solid
{ "type": "kuzel", "params": { "r": 3, "v": 4 }, "labels": [{ "at": [3, 0, 0], "text": "r" }, { "at": [0, 0, 2], "text": "v" }, { "at": [1.5, 0, 2], "text": "s" }], "title": "Rotační kužel" }
```

[Interaktivní rozvinutí pláště kužele (GeoGebra)](http://dmentrard.free.fr/GEOGEBRA/Maths/Espace/Patroncone.html)

## Úkol (interaktivní, Cabri 3D)

1. V programu Cabri nakreslete kužel s podstavou o poloměru $r=6\text{ cm}$ a tělesové výšce $v=8\text{ cm}$. Vyznačte tělesovou výšku $v$ a stěnovou výšku $s$. Spočtěte délku stěnové výšky $s$, objem $V$ a povrch $S$. Své výpočty ověřte programem Cabri.

## Příklady

**1.** Pravoúhlý trojúhelník s odvěsnami $a=6\text{ cm}$ a $b=8\text{ cm}$ rotuje kolem delší odvěsny. Vypočítejte povrch takto vzniklého kužele.

Výsledek: ||v=8cm (osa rotace), r=6cm (druhá odvěsna); s=√(r²+v²)=√(36+64)=10cm; S=πr(r+s)=π·6·16=96π≈301,59 cm²||

**2.** Objem kužele je $37{,}7\text{ cm}^3$, jeho výška $v=4\text{ cm}$. Vypočítejte povrch kužele.

Výsledek: ||r²=3V/(πv)=3·37,7/(4π)≈9 → r≈3cm; s=√(r²+v²)=√(9+16)=5cm; S=πr(r+s)=π·3·8=24π≈75,398 cm²||

**3.** Vypočítejte objem rotačního kužele, jehož výška je $5\text{ cm}$ a strana svírá s rovinou podstavy úhel $60°$.

Výsledek: ||úhel mezi stranou s a podstavou: tg60° = v/r → r = v/tg60° = 5/√3 ≈ 2,887cm; V=(1/3)πr²v=(1/3)π·(25/3)·5≈43,63 cm³||

**4.** Hromada štěrku má tvar rotačního kužele s výškou $0{,}5\text{ m}$ a obvodem podstavy $9{,}42\text{ m}$. Kolik $\text{m}^3$ štěrku je na hromadě?

Výsledek: ||r = o/(2π) = 9,42/(2π) ≈ 1,5m; V=(1/3)πr²v=(1/3)π·2,25·0,5≈1,178 m³||

**5.** Kolik $\text{cm}^2$ papíru potřebujeme na vytvoření modelu pláště kužele o poloměru $3\text{ cm}$ a výšce $4\text{ cm}$?

Výsledek: ||s=√(r²+v²)=√(9+16)=5cm; S_pl=πrs=π·3·5=15π≈47,124 cm²||
