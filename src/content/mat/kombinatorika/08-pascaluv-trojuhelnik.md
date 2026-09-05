---
title: "Pascalův trojúhelník"
order: 8
source: "matematika/TY01_0231_Pascaluv_trojuhelnik.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace používala animované odrážky (postupně se odkrývající text), který se při převodu do textu ztratil — zachovala se ale konkrétní čísla u jednotlivých vlastností (dvanáctý řádek, diagonály, sudá/lichá čísla), ze kterých šlo přesně rekonstruovat, o jaké vlastnosti šlo. Doplněno.

Blaise Pascal (1623–1662), francouzský matematik, fyzik a filosof.

- 1640 — Pojednání o kuželosečkách
- 1642 — mechanický počítací stroj (sčítání, odčítání)
- 1653 — studium hazardních her, položil základy kombinatoriky a pravděpodobnosti

Pascalův trojúhelník proslul v matematice symetrií a skrytými souvislostmi. Pascal ho ale neobjevil — jen velmi dobře popsal jeho vlastnosti. Znali ho už čínští učenci ve 13. století (v Číně se mu říká „Yang Huiho trojúhelník").

## Sestrojení a N-tý řádek

Pascalův trojúhelník sestrojíme tak, že na kraji každého řádku píšeme 1 a každé vnitřní číslo je součtem dvou čísel nad ním (Pascalovo pravidlo, viz [Vlastnosti kombinačních čísel](/mat/kombinatorika/06-vlastnosti-kombinacnich-cisel/)):

```
řádek 0:              1
řádek 1:             1 1
řádek 2:            1 2 1
řádek 3:           1 3 3 1
řádek 4:          1 4 6 4 1
```

$N$-tý řádek (číslováno od 0) obsahuje přesně kombinační čísla $\binom{n}{0}, \binom{n}{1}, \ldots, \binom{n}{n}$ — proto se Pascalův trojúhelník používá i k rychlému výpočtu binomických koeficientů bez počítání faktoriálů.

## Vlastnost — symetrické rozmístění čísel v řádku

Každý řádek je symetrický ($\binom{n}{k}=\binom{n}{n-k}$, viz opět vlastnosti kombinačních čísel) — čte se stejně zleva i zprava.

**Úkol:** Dopište druhou polovinu dvanáctého řádku (řádek $n=11$, číslováno od 0):

$$1,\ 11,\ 55,\ 165,\ 330,\ 462,\ \ldots$$

Výsledek: ||díky symetrii se druhá polovina zrcadlí: 1, 11, 55, 165, 330, 462, 462, 330, 165, 55, 11, 1 (prostředních 12 čísel řádku, dvě prostřední hodnoty 462 jsou stejné)||

## Další vlastnosti — diagonály (Fibonacciho posloupnost)

Sečteme-li čísla ležící na tzv. **mělkých („nepravých") diagonálách** Pascalova trojúhelníku (šikmo, o jeden řádek a dva sloupce dál pokaždé), dostaneme překvapivě **Fibonacciho posloupnost** ($1,1,2,3,5,8,13,21,34,\ldots$, kde každé číslo je součtem dvou předchozích):

$$1,\ 1,\ 2,\ 3,\ 5,\ 8,\ 13,\ 21,\ 34,\ldots$$

Toto je jeden z nejznámějších „skrytých" vzorů v Pascalově trojúhelníku.

## Další vlastnosti — sudá a lichá čísla (Sierpinského trojúhelník)

Nahradíme-li v Pascalově trojúhelníku všechna sudá čísla nulami a lichá jedničkami, dostaneme zajímavý vzor:

```
1
1 1
1 0 1
1 1 1 1
1 0 0 0 1
1 1 0 0 1 1
1 0 1 0 1 0 1
1 1 1 1 1 1 1 1
1 0 0 0 0 0 0 0 1
```

Čím víc řádků takto vykreslíme, tím zřetelněji se objevuje fraktální vzor — trojúhelníky uvnitř trojúhelníků. Pro srovnání: úplně stejný vzor (nekonečně opakované trojúhelníky) tvoří i **Sierpinského trojúhelník**, kterým se dostáváme k tématu fraktálů.

## Zdroje

CALDA, Emil, DUPAČ, Václav. _Matematika pro gymnázia. Kombinatorika, pravděpodobnost, statistika._ Praha: Prometheus, 2006.

Sierpinského trojúhelník: <https://cs.wikipedia.org/wiki/Sierpi%C5%84sk%C3%A9ho_troj%C3%BAheln%C3%ADk>
