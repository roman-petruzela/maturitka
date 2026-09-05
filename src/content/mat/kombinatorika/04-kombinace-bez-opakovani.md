---
title: "Kombinace bez opakování"
order: 4
source: "matematika/TY01_0227_Kombinace_bez_opakovani.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace používala animované odrážky (postupně se odkrývající text), který se při převodu do textu ztratil — na dochovaném srovnávacím obrázku šlo ale přesně poznat, jak variace a kombinace souvisí (viz níže), a z toho odvodit i vzorec. Teorie je doplněná/rekonstruovaná, dva závěrečné příklady jsou nově přidané se stejným záměrem, jaký naznačovaly prázdné nadpisy "Příklad"/"Příklady".

**Kombinace bez opakování** jsou skupiny prvků, ve kterých **nezáleží na pořadí** (na rozdíl od variace) a každý prvek se vyskytuje nejvýše jednou.

**Příklad z praxe:** počet utkání v turnaji, kterého se účastní $n$ družstev a hrají systémem každý s každým = počet neuspořádaných dvojic takových, že se v každé vyskytuje každé družstvo nejvýše jednou (nikdo nemůže hrát sám proti sobě, a záleží jen na tom, KTERÁ dvě družstva spolu hrají, ne v jakém pořadí je vyjmenujeme).

## Porovnání počtu variací a kombinací

Vypišme si všechny tříčlenné variace ze čtyř prvků $a,b,c,d$ a seřaďme je do sloupců tak, aby v jednom sloupci byly všechny přeuspořádané verze stejné trojice prvků:

| {a,b,c} | {a,b,d} | {a,c,d} | {b,c,d} |
|---|---|---|---|
| abc | abd | acd | bcd |
| acb | adb | adc | bdc |
| bac | bad | cad | cbd |
| bca | bda | cda | cdb |
| cab | dab | dac | dbc |
| cba | dba | dca | dcb |

Vidíme, že všech $V(3,4)=24$ variací se rozpadá do **4 sloupců** po **6 řádcích** — každý sloupec odpovídá jedné **kombinaci** (neuspořádané trojici) a obsahuje všech $3!=6$ jejích uspořádání (permutací).

Obecně tedy platí: kombinací je $k!$-krát méně než variací, protože každou k-tici počítáme jen jednou místo $k!$-krát:

$$C(k,n) = \frac{V(k,n)}{k!}$$

## Kombinační číslo

Po dosazení vzorce pro $V(k,n)$ dostáváme vzorec pro **kombinační číslo** (počet $k$-členných kombinací z $n$ prvků), který se také zapisuje $\binom{n}{k}$ (čteme „n nad k"):

$$C(k,n) = \binom{n}{k} = \frac{n!}{k!\,(n-k)!}$$

Pro náš příklad: $C(3,4) = \dfrac{4!}{3!\cdot1!} = \dfrac{24}{6} = 4$ — souhlasí s počtem sloupců výše.

## Příklad

Kolik zápasů se odehraje v turnaji s 10 družstvy, hraje-li každé družstvo s každým jiným právě jednou?

Nezáleží na pořadí (zápas „A vs. B" je totéž utkání jako „B vs. A"), vybíráme tedy dvojice bez opakování z 10 družstev:

$$C(2,10) = \binom{10}{2} = \frac{10!}{2!\cdot8!} = \frac{10\cdot9}{2} = 45$$

**Výsledek:** 45 zápasů.

## Příklad

Kolika způsoby lze vybrat tříčlennou komisi z 8 lidí?

Na pořadí členů komise nezáleží, jde tedy o kombinaci:

$$C(3,8) = \binom{8}{3} = \frac{8!}{3!\cdot5!} = \frac{8\cdot7\cdot6}{6} = 56$$

**Výsledek:** 56 způsobů.

## Zdroje

CALDA, Emil, DUPAČ, Václav. _Matematika pro gymnázia. Kombinatorika, pravděpodobnost, statistika._ Praha: Prometheus, 2006.
