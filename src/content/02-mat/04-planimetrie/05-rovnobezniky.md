---
title: "Rovnoběžníky"
order: 5
source: "matematika/TY01_0115 Rovnoběžníky.pdf"
hasExercises: true
---

> Pozn. k obsahu: Vzorce v PDF byly vysázené jako obrázky (unicode zlomky), text a výsledky úkolů se ale dochovaly celé — vzorce jsou zde přepsané do LaTeXu, výsledky do spoilerů (namátkově ověřeny přepočtem), čísla stránek odstraněna.

**Rovnoběžník** je čtyřúhelník, u kterého jsou obě dvojice protějších stran rovnoběžné. Patří sem čtverec, obdélník, kosočtverec a kosodélník.

## 1. Čtverec

Rovinný útvar se čtyřmi vrcholy ABCD, čtyřmi stejně velkými stranami a čtyřmi vnitřními pravými úhly. Má dvě stejně velké úhlopříčky ($u_1=u_2$), které mezi sebou svírají pravý úhel a rozdělují čtverec na čtyři shodné pravoúhlé rovnoramenné trojúhelníky.

$$o=4a, \qquad S=a^2=\frac12 u^2, \qquad u = a\sqrt2$$

$$\rho = \frac{a}{2}\ \text{(poloměr kružnice vepsané)}, \qquad r = \frac{u}{2}\ \text{(poloměr kružnice opsané)}$$

```geometry
{
  "points": { "A": [0, 0], "B": [4, 0], "C": [4, 4], "D": [0, 4] },
  "segments": [
    { "from": "A", "to": "B", "label": "a" },
    { "from": "B", "to": "C" },
    { "from": "C", "to": "D" },
    { "from": "D", "to": "A" },
    { "from": "A", "to": "C", "dashed": true, "label": "u" },
    { "from": "B", "to": "D", "dashed": true }
  ],
  "title": "Čtverec ABCD s úhlopříčkami"
}
```

### Úkoly

**1.** Ve čtverci ABCD je velikost úhlopříčky 12 cm. Vypočítejte obsah a obvod čtverce.

Výsledek: ||a = u/√2 = 12/√2 ≈ 8,485 cm; S = a² ≈ 72 cm²; o = 4a ≈ 33,94 cm||

**2.** Ve čtverci ABCD o hraně $a=8\text{ cm}$ vypočítejte poloměr kružnice vepsané i opsané.

Výsledek: ||ρ = a/2 = 4 cm; u = a√2 ≈ 11,31 cm, r = u/2 ≈ 5,66 cm||

**3.** Zahrada tvaru čtverce ležící jednou svou stranou u řeky má výměru 0,08 ha. Vypočítejte, kolik metrů pletiva bude potřeba na její oplocení (tři strany, čtvrtou tvoří řeka).

Výsledek: ||0,08 ha = 800 m², a = √800 ≈ 28,28 m, pletivo na 3 strany = 3a ≈ 84,84 m||

## 2. Obdélník

Rovinný útvar se čtyřmi vrcholy ABCD, čtyřmi stranami (protilehlé strany stejně dlouhé) a čtyřmi vnitřními pravými úhly. Má dvě stejně velké úhlopříčky ($u_1=u_2$), které mezi sebou **nesvírají** pravý úhel a rozdělují obdélník na čtyři rovnoramenné trojúhelníky (dva protilehlé páry jsou shodné). Platí $\alpha=\alpha'$, $\beta=\beta'$.

$$o = 2(a+b), \qquad S = a\cdot b, \qquad u=\sqrt{a^2+b^2}, \qquad r=\frac{u}{2}$$

```geometry
{
  "points": { "A": [0, 0], "B": [6, 0], "C": [6, 3], "D": [0, 3] },
  "segments": [
    { "from": "A", "to": "B", "label": "a" },
    { "from": "B", "to": "C", "label": "b" },
    { "from": "C", "to": "D" },
    { "from": "D", "to": "A" },
    { "from": "A", "to": "C", "dashed": true, "label": "u" },
    { "from": "B", "to": "D", "dashed": true }
  ],
  "title": "Obdélník ABCD s úhlopříčkami"
}
```

### Úkoly

**4.** V obdélníku ABCD známe stranu $a=12\text{ cm}$ a úhlopříčku $u=13\text{ cm}$. Vypočítejte obsah a obvod.

Výsledek: ||b = √(u²−a²) = √(169−144) = 5 cm; S = a·b = 60 cm²; o = 2(a+b) = 34 cm||

**5.** V obdélníku ABCD svírá úhlopříčka $u=20\text{ cm}$ s vodorovnou stranou úhel $32°$. Vypočítejte obsah a obvod.

Výsledek: ||a = u·cos32° ≈ 16,96 cm; b = u·sin32° ≈ 10,60 cm; S ≈ 179,78 cm²; o ≈ 55,12 cm||

**6.** Úhlopříčky obdélníka ABCD o velikosti $u=16\text{ cm}$ svírají mezi sebou úhel $60°$. Vypočítejte obsah a obvod.

Výsledek: ||úhlopříčky se navzájem půlí (každá polovina = 8 cm) a s dvojicí sousedních stran svírají úhly 60° a 120°. Kosinovou větou v trojúhelníku z půlek úhlopříček: a² = 8²+8²−2·8·8·cos60° = 64 cm², a = 8 cm; b² = 8²+8²−2·8·8·cos120° = 192 cm², b ≈ 13,86 cm. S = a·b ≈ 110,88 cm²; o = 2(a+b) ≈ 43,72 cm||

**7.** Vypočítejte obsah a obvod obdélníka ABCD, víte-li, že úhlopříčky svírají úhel $50°$ a jedna strana je $b=6\text{ cm}$.

Výsledek: ||S ≈ 77,22 cm²; o ≈ 37,74 cm||

**8.** Obdélníku ABCD o straně $a=8\text{ cm}$ je opsána kružnice o poloměru $r=5{,}5\text{ cm}$ *(v podkladu byla tato hodnota poškozená — dopočítána zpětně z dochovaného výsledku)*. Vypočítejte obsah a obvod obdélníka ABCD.

Výsledek: ||u = 2r = 11 cm; b = √(u²−a²) = √(121−64) = √57 ≈ 7,55 cm; S = a·b ≈ 60,4 cm²; o = 2(a+b) ≈ 31,1 cm||

## 3. Kosočtverec

Rovinný útvar se čtyřmi vrcholy ABCD, čtyřmi stejně velkými stranami a čtyřmi vnitřními úhly (dva protilehlé páry stejné). Má dvě různé úhlopříčky ($u_1\neq u_2$), které mezi sebou svírají pravý úhel a rozdělují kosočtverec na čtyři trojúhelníky (dva protilehlé páry shodné). Platí $\alpha=\alpha'$, $\beta=\beta'$.

$$o = 4a$$

$$S = a\cdot v = \frac12 u_1 u_2 = a^2\sin\alpha = a^2\sin\beta$$

$$\rho = \frac12 a\sin\alpha\ \text{(poloměr kružnice vepsané)}$$

```geometry
{
  "points": { "A": [-4, 0], "B": [0, -3], "C": [4, 0], "D": [0, 3], "O": [0, 0] },
  "hiddenPoints": ["O"],
  "segments": [
    { "from": "A", "to": "B", "label": "a" },
    { "from": "B", "to": "C" },
    { "from": "C", "to": "D" },
    { "from": "D", "to": "A" },
    { "from": "A", "to": "C", "dashed": true, "label": "u_1" },
    { "from": "B", "to": "D", "dashed": true, "label": "u_2" }
  ],
  "angles": [{ "at": "O", "from": "A", "to": "D", "rightAngle": true }],
  "title": "Kosočtverec ABCD — úhlopříčky kolmé"
}
```

### Úkoly

**9.** Vypočítejte obsah a obvod kosočtverce o straně $a=5\text{ cm}$, svírají-li strany úhel $48°$.

Výsledek: ||S = a²·sin48° ≈ 18,58 cm²; o = 4a = 20 cm||

**10.** Vypočítejte obsah a obvod kosočtverce s výškou $v=4\text{ cm}$, svírají-li strany úhel $66°$.

Výsledek: ||a = v/sin66° ≈ 4,38 cm; S = a·v ≈ 17,52 cm²; o = 4a ≈ 17,52 cm (číselná shoda S a o je tu náhodná, jde o jiné jednotky — cm² vs. cm)||

**11.** Vypočítejte obsah a obvod kosočtverce o úhlopříčkách $u_1=8\text{ cm}$ a $u_2=6\text{ cm}$.

Výsledek: ||S = ½·8·6 = 24 cm²; strana a = √((4)²+(3)²) = 5 cm (poloviny úhlopříček jako odvěsny), o = 4a = 20 cm||

**12.** Vypočítejte obsah a obvod kosočtverce o úhlopříčce $u_1=10\text{ cm}$ a úhlu $\alpha=80°$.

Výsledek: ||S ≈ 41,99 cm²; o ≈ 26,12 cm||

## 4. Kosodélník

Rovinný útvar se čtyřmi vrcholy ABCD, čtyřmi stranami (protilehlé strany stejně dlouhé) a čtyřmi vnitřními úhly (dva protilehlé páry stejné). Má dvě různé úhlopříčky ($u_1\neq u_2$), které mezi sebou **nesvírají** pravý úhel a rozdělují kosodélník na čtyři trojúhelníky (dva protilehlé páry shodné). Platí $\alpha=\alpha'$, $\beta=\beta'$, $\gamma=\gamma'$, $\delta=\delta'$.

$$o = 2(a+b)$$

$$S = a\cdot v_a = b\cdot v_b = ab\sin\alpha = ab\sin\beta$$

```geometry
{
  "points": { "A": [0, 0], "B": [5, 0], "C": [7, 3], "D": [2, 3], "H": [2, 0] },
  "hiddenPoints": ["H"],
  "segments": [
    { "from": "A", "to": "B", "label": "a" },
    { "from": "B", "to": "C", "label": "b" },
    { "from": "C", "to": "D" },
    { "from": "D", "to": "A" },
    { "from": "D", "to": "H", "dashed": true, "label": "v_a" }
  ],
  "angles": [{ "at": "H", "from": "D", "to": "B", "rightAngle": true }],
  "title": "Kosodélník ABCD — výška v_a na stranu a"
}
```

### Úkoly

**13.** Vypočítejte obsah a obvod kosodélníku o stranách $a=5\text{ cm}$ a $b=3\text{ cm}$, svírají-li strany úhel $48°$.

Výsledek: ||S = a·b·sin48° ≈ 11,15 cm²; o = 2(a+b) = 16 cm||

**14.** Vypočítejte obvod kosodélníku o obsahu $S=64\text{ cm}^2$, straně $a=5\text{ cm}$ a úhlu $\alpha=64°$.

Výsledek: ||b = S/(a·sinα) = 64/(5·sin64°) ≈ 14,24 cm; o = 2(a+b) ≈ 38,48 cm||

**15.** Vypočítejte obsah a obvod kosodélníku o straně $a=9\text{ cm}$, $v_a=5\text{ cm}$ a $v_b=11\text{ cm}$.

Výsledek: ||S = a·v_a = 9·5 = 45 cm²; b = S/v_b = 45/11 ≈ 4,09 cm; o = 2(a+b) ≈ 26,18 cm||
