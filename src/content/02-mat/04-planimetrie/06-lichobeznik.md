---
title: "Lichoběžník"
order: 6
source: "matematika/TY01_0116 Lichoběžník.pdf"
hasExercises: true
---

> Pozn. k obsahu: Vzorce v PDF byly vysázené jako obrázky (unicode zlomky), text a výsledky úkolů se ale dochovaly celé — vzorce jsou zde přepsané do LaTeXu, výsledky do spoilerů, čísla stránek odstraněna. Úkol 5 se opíral o obrázek vyšrafovaného obrazce, který se nedochoval — zachovaná čísla (úhel a dva rozměry) jsou uvedená, i když bez obrázku nejde přesně určit, jak jsou v obrazci umístěná.

**Lichoběžník** je rovinný útvar, jehož právě jedna dvojice protějších stran je rovnoběžná.

$$o = a+b+c+d$$

$$S = m \cdot v, \quad \text{kde } m \text{ je střední příčka (úsečka spojující středy stran } b \text{ a } d\text{)}$$

## 1. Obecný lichoběžník

Čtyři vrcholy ABCD, strany $a$ a $c$ rovnoběžné (základny), strany $b$ a $d$ (ramena) různě dlouhé. Čtyři různé vnitřní úhly se součtem $360°$.

```geometry
{
  "points": { "A": [0, 0], "D": [7, 0], "B": [1.5, 3], "C": [5.5, 3], "H": [1.5, 0], "M1": [0.75, 1.5], "M2": [6.25, 1.5] },
  "hiddenPoints": ["H", "M1", "M2"],
  "segments": [
    { "from": "A", "to": "D", "label": "a" },
    { "from": "B", "to": "C", "label": "c" },
    { "from": "A", "to": "B", "label": "d" },
    { "from": "D", "to": "C", "label": "b" },
    { "from": "B", "to": "H", "dashed": true, "label": "v" },
    { "from": "M1", "to": "M2", "dashed": true, "label": "m" }
  ],
  "angles": [{ "at": "H", "from": "B", "to": "D", "rightAngle": true }],
  "title": "Lichoběžník ABCD — výška v a střední příčka m"
}
```

## 2. Rovnoramenný lichoběžník

Strany $a$ a $c$ rovnoběžné, ramena $b$ a $d$ stejně dlouhá. Platí $\alpha=\beta$ a $\gamma=\delta$ (úhly u delší základny stejné, úhly u kratší základny stejné). Pro vodorovný přesah kratší základny nad kolmicí z jejího konce platí:

$$x' = x'' = \frac{a-c}{2}$$

## 3. Pravoúhlý lichoběžník

Strany $a$ a $c$ rovnoběžné, ramena $b$ a $d$ různě dlouhá, ale dva vnitřní úhly jsou pravé ($\alpha=\delta=90°$ nebo $\beta=\gamma=90°$). Platí:

$$x = a-c$$

## Úkoly

**1.** Vypočtěte delší základnu lichoběžníku ABCD, je-li dána kratší základna $c=12\text{ cm}$, výška $v=8\text{ cm}$ a obsah $S=320\text{ cm}^2$.

Výsledek: ||m = S/v = 320/8 = 40 cm; protože m = (a+c)/2, platí a = 2m − c = 80−12 = 68 cm||

**2.** Vypočtěte obsah a obvod lichoběžníka ABCD, když víte: $a=100\text{ cm}, b=20\text{ cm}, c=60\text{ cm}, \beta=40°$.

Výsledek: ||o = 207,83 cm; S = 1028,8 cm² (výška dopočtená z ramene b a úhlu β: v = b·sinβ)||

**3.** Železniční násep má v příčném řezu tvar rovnoramenného lichoběžníka; dolní šířka je 4 m, horní 2,5 m, sklon ramene je $50°$. Vypočítejte obsah.

Výsledek: ||S = 2,89 m²||

**4.** Délka plotu oploceného pozemku tvaru rovnoramenného lichoběžníku je 200 m, rovnoběžné strany mají 90 m a 40 m (400 dm). Vypočtěte výměru v hektarech.

Výsledek: ||S = 0,1592 ha||

**5.** Vypočítejte obsah a obvod vyšrafovaného obrazce ((obrázek se nedochoval; zachované údaje: úhel $\alpha=42°$, rozměry 30 cm a 50 cm)).

Výsledek: ||S = 1000,2 cm²; o = 141,52 cm||
