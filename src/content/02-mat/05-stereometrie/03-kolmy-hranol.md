---
title: "Kolmý hranol"
order: 3
source: "matematika/TY0103 Kolmý hranol.pdf"
hasExercises: true
---

> Pozn. k obsahu: Vzorce v PDF byly vysázené jako obrázky (unicode symboly), přepsané zde do LaTeXu; výsledky úkolů (ověřeny přepočtem, souhlasí) do spoilerů. PDF dále odkazovalo na soubory pro program Cabri 3D (*krychle_sit.cg3*, *kvadr_sit.cg3*), které nejsou součástí archivu — úkol 1 proto nejde reprodukovat, ponechán jako historický záznam.

**Kolmý hranol** je těleso, které se skládá ze dvou shodných a rovnoběžných podstav a pláště; boční stěny svírají s rovinou podstavy pravý úhel.

$$V = S_p \cdot v \qquad S = 2S_p + S_{pl}$$

kde $S_p$ je obsah podstavy, $v$ je výška (vzdálenost mezi podstavami) a $S_{pl}$ je obsah pláště (součet obsahů bočních stěn — u hranolu s podstavou o obvodu $o$ platí $S_{pl}=o\cdot v$).

Hranoly dělíme podle podstav na:

1. **pravidelné** — podstavou je pravidelný geometrický útvar (rovnostranný trojúhelník, čtverec, pravidelný pětiúhelník, pravidelný šestiúhelník atd.)
2. **nepravidelné** — podstavou je nepravidelný geometrický útvar (pravoúhlý trojúhelník, obdélník, nepravidelný pětiúhelník, deltoid atd.)

## Krychle

**Krychle** je speciální případ kolmého hranolu — pravidelný čtyřboký hranol, jehož výška je stejná jako délka podstavné hrany. Všech šest stěn krychle jsou shodné čtverce.

$$V = a^3 \qquad S = 6a^2$$

kde $a$ je délka hrany krychle.

```solid
{ "type": "krychle", "params": { "a": 4 }, "labels": [{ "at": [4, 0, 0], "text": "a" }], "title": "Krychle" }
```

## Kvádr

**Kvádr** je speciální případ kolmého hranolu, jehož podstavou je obdélník. Rozměry kvádru značíme $a$, $b$, $c$ (délka, šířka, výška).

$$V = a\cdot b\cdot c \qquad S = 2ab + 2ac + 2bc = 2(ab+ac+bc)$$

```solid
{ "type": "kvadr", "params": { "a": 5, "b": 3, "c": 2 }, "labels": [{ "at": [5, 0, 0], "text": "a" }, { "at": [5, 3, 0], "text": "b" }, { "at": [5, 3, 1], "text": "c" }], "title": "Kvádr" }
```

```solid
{ "type": "hranol", "params": { "n": 3, "r": 2.31, "v": 6 }, "labels": [{ "at": [0, 0, 3], "text": "v" }], "title": "Kolmý trojboký hranol" }
```

## Úkoly (interaktivní, Cabri 3D)

1. Otevřete postupně soubory *krychle_sit.cg3* a *kvadr_sit.cg3*. Rozložte sítě těles do roviny a poté zpátky.
2. V programu Cabri nakreslete krychli o hraně délky 4. Vypočtěte její objem a povrch, výsledek ověřte programem Cabri.

## Příklady

**1.** Objem krychle je $27\text{ dm}^3$. Vypočtěte její povrch.

Výsledek: ||a³=27 → a=3dm; S=6a²=6·9=54 dm²||

**2.** Podstavou hranolu je rovnostranný trojúhelník o straně délky $4\text{ cm}$. Výška hranolu je $6\text{ cm}$. Vypočtěte jeho objem a povrch.

Výsledek: ||S_p = (a²√3)/4 = (16√3)/4 = 4√3 cm²; V = S_p·v = 4√3·6 = 24√3 ≈ 41,57 cm³; S_pl = o·v = (3·4)·6 = 72 cm²; S = 2S_p + S_pl = 8√3 + 72 ≈ 85,86 cm²||

**3.** Mějme hranol, jehož podstavou je pravoúhlý trojúhelník s odvěsnami o délkách $3\text{ cm}$ a $4\text{ cm}$. Výška hranolu je dvojnásobkem délky přepony podstavy. Vypočtěte jeho objem a povrch.

Výsledek: ||přepona (Pythagorova věta) = √(3²+4²) = 5 cm; výška hranolu v = 2·5 = 10cm; S_p = (3·4)/2 = 6 cm²; V = S_p·v = 6·10 = 60 cm³; S_pl = o·v = (3+4+5)·10 = 120 cm²; S = 2S_p + S_pl = 12 + 120 = 132 cm²||
