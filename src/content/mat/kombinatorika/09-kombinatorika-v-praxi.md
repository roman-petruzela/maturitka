---
title: "Kombinatorika v praxi"
order: 9
source: "matematika/TY01_0232_Kombinatorika_v_praxi.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace byla ve velké míře čitelná, jen sekce o heslech na konci ztratila konkrétní vypočítané výsledky (zůstala jen zadání) — doplněno a nezávisle přepočítáno. Zbytek je zachovaný a ověřený (mj. netriviální výpočet přes 69 trojciferných čísel se součtem číslic 13 vyšel při přepočítání přesně stejně jako v podkladu).

## Jedna ze života

V zásuvce je 10 černých a 10 šedých ponožek. Ráno ještě v polospánku taháme naslepo ponožky.

**a) Kolik jich musíme vzít, aby bylo jisté, že se mezi nimi najde pár?**

Výsledek: ||stačí vzít tři ponožky — potřebujeme dvě ponožky jedné barvy, nezáleží na tom, zda budou černé, nebo šedé. Možné situace při 3 taženích: ČČČ, ČČŠ, ČŠŠ, ŠŠŠ — ve všech se pár najde.||

**b) Kolik jich musíme vzít, aby se mezi nimi našel černý pár?**

Výsledek: ||musíme počítat s nejhorším případem — nejdřív můžeme natáhnout všech 10 šedých. Pak potřebujeme ještě 2 černé, tedy 10 + 2 = 12 ponožek, abychom měli jistotu černého páru.||

## A ještě jedna podobná

V šatně nám praskla žárovka a je tam tma, nemám před odchodem čas ji vyměnit a potřebuji si vzít rukavice. V zásuvce je 5 párů černých a 5 párů modrých rukavic. Pozor, pravá a levá rukavice se od sebe liší!

**a) Kolik jich musím vzít, aby bylo jisté, že se mezi nimi najde pár (jedné barvy)?**

Výsledek: ||nejhorší případ: vezmeme všech 5 pravých černých + 5 pravých modrých = 10 rukavic, stále bez páru (samé pravé). Jedenáctá rukavice už musí být levá nějaké barvy a vytvoří pár s odpovídající pravou. Minimálně 11 rukavic.||

**b) Kolik jich musím vzít, aby se mezi nimi našel černý pár?**

Výsledek: ||nejhorší případ: nejdřív všech 10 modrých (bez černé vůbec), pak 5 pravých černých (stále bez černého páru, jen pravé), a šestnáctá rukavice (černá levá) už černý pár zaručí. Minimálně 10 + 5 + 1 = 16 rukavic.||

## Něco z matematiky

**Kolik celých čísel menších než 1000 má ciferný součet 13?**

Rozdělíme podle počtu číslic:

- **jednociferná čísla:** 0 možností (nejvyšší možný ciferný součet jednociferného čísla je 9)
- **dvojciferná čísla:** 49, 58, 67, 76, 85, 94 → **6 možností**
- **trojciferná čísla:** hledáme $a_1+a_2+a_3=13$, kde $a_1\in\{1,\ldots,9\}$ (nesmí být 0), $a_2,a_3\in\{0,\ldots,9\}$. Rozdělíme podle toho, jaké trojice číslic (bez ohledu na pořadí) součet 13 dávají:
  - trojice obsahující nulu — (9,4,0), (8,5,0), (7,6,0): 3 trojice, každá dává $3!-2!=4$ platných pořadí (nula nesmí být na první pozici) → $3\cdot4=12$
  - trojice se třemi různými nenulovými číslicemi — (9,3,1), (8,4,1), (7,5,1), (6,4,3), (8,3,2), (7,4,2), (6,5,2): 7 trojic, každá dává $3!=6$ pořadí → $7\cdot6=42$
  - trojice s opakovanou číslicí (bez nuly) — (9,2,2), (7,3,3), (5,4,4), (3,5,5), (1,6,6): 5 trojic, každá dává $3!/2!=3$ pořadí → $5\cdot3=15$
  - celkem: $12+42+15=\mathbf{69}$

**Výsledek:** $0+6+69 = 75$ celých čísel menších než 1000 má ciferný součet 13.

## Cestujeme vlakem

V kupé je deset míst, pět ve směru jízdy a pět proti směru. Tři pasažéři chtějí sedět ve směru jízdy a jeden proti směru jízdy. Ostatním šesti, mezi něž patří Venoušek s maminkou, je to jedno, až na to, že Venoušek chce sedět u okna a vedle maminky. Kolika způsoby se mohou cestující usadit, aby byli všichni spokojeni?

*(Tato úloha byla v podkladu záměrně ponechána jako výzva k samostatnému řešení — bez uvedeného výsledku.)*

## Tombola

Sto vstupenek očíslovaných 1 až 100 jde do tomboly, losují se čtyři ceny (1.–4.).

**a) Lístek 13 má vyhrát první cenu?**

Zbylé tři ceny se rozdělí mezi zbývajících 99 lístků (záleží na pořadí — variace):

$$99 \cdot 98 \cdot 97 = 941\,094$$

**b) Lístek 13 má vyhrát (nějakou) cenu?**

Nejprve 4 možnosti, kterou cenu vyhraje lístek 13, pak rozdělíme zbylé tři ceny mezi zbylých 99 lístků:

$$4 \cdot 99 \cdot 98 \cdot 97 = 3\,764\,376$$

**c) Lístek 13 nemá vyhrát žádnou cenu?**

Vybíráme čtyři ceny (uspořádaně) z 99 lístků, které zbydou po vyřazení lístku 13:

$$99 \cdot 98 \cdot 97 \cdot 96 = 90\,345\,024$$

**d) Lístky 13 a 23 mají vyhrát cenu?**

Vybereme, kterou cenu vyhraje lístek 13 (4 možnosti), pak kterou z do zbylých tří vyhraje lístek 23 (3 možnosti), a nakonec rozdělíme zbylé dvě ceny mezi zbylých 98 lístků:

$$4 \cdot 3 \cdot 98 \cdot 97 = 114\,072$$

**e) Vyhrát první cenu má buď lístek 13, nebo lístek 23?**

Obě možnosti (13 vyhraje první cenu / 23 vyhraje první cenu) jsou disjunktní — každá dává $99\cdot98\cdot97$ způsobů rozdělení zbylých cen, proto sečteme:

$$2 \cdot 99 \cdot 98 \cdot 97 = 1\,882\,188$$

*(Pozor, neřešíme metodu, jak tyto výhry „zařídit" — jde čistě o počet matematicky možných výsledků losování.)*

## Heslo a jeho bezpečnost

**1. Kolik různých hesel můžeme vytvořit z číslic 0 až 9 (číslice se mohou opakovat)?**

**a) PIN platební karty, tvořený čtyřmi číslicemi:**

$$V'(4,10) = 10^4 = 10\,000$$

**b) heslo tvořené osmi číslicemi:**

$$V'(8,10) = 10^8 = 100\,000\,000$$

**2. Kolik různých hesel délky 8 znaků můžeme vytvořit z písmen a, b, …, y, z (26 písmen)?**

**a) když nerozlišujeme velká a malá písmena:**

$$V'(8,26) = 26^8 = 208\,827\,064\,576 \approx 2{,}09\cdot10^{11}$$

**b) když rozlišujeme velká a malá písmena (52 možných znaků na pozici):**

$$V'(8,52) = 52^8 = 53\,459\,728\,531\,456 \approx 5{,}35\cdot10^{13}$$

**3. Kolik osmiznakových hesel můžeme vytvořit při použití číslic i písmen (s rozlišením na velká a malá)?**

Máme $10$ číslic $+\ 26$ malých $+\ 26$ velkých písmen $= 62$ možných znaků na každé z 8 pozic:

$$V'(8,62) = 62^8 = 218\,340\,105\,584\,896 \approx 2{,}18\cdot10^{14}$$

**Pozn. k bezpečnosti hesel:** čím delší heslo a čím víc druhů znaků (číslice + malá + velká písmena + speciální znaky) používá, tím rychleji roste počet možných kombinací — a tím déle by trvalo heslo „prolomit" hrubou silou (vyzkoušením všech variací). To je matematický základ doporučení používat dlouhá hesla se smíšenými znaky.

## Zdroje

CALDA, Emil, DUPAČ, Václav. _Matematika pro gymnázia. Kombinatorika, pravděpodobnost, statistika._ Praha: Prometheus, 2006.

<https://math.feld.cvut.cz/habala/teaching/dma/dmknih11.pdf>
