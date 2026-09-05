---
title: "Exponenciální funkce v praxi"
order: 102
source: "mat/IT2M_3.docx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojový dokument obsahoval matematické vzorce vložené jako obrázky/rovnice, které se při převodu ztratily (označeno jako ((obrázek vynechán))). Text i tabulky s daty jsou zachovány beze změny významu.

## 21.–22. Exponenciální funkce v praxi

V předchozí výuce matematiky jsme se setkali s různými funkcemi — lineární, konstantní, kvadratická aj.

Funkce na množině A ⊂ R je předpis (návod, příkaz), který každému číslu z množiny A přiřazuje právě jedno reálné číslo. Množina A se nazývá definiční obor funkce.

Obor hodnot funkce f je množina všech y ∈ R, ke kterým existuje aspoň jedno x z definičního oboru funkce f tak, že platí y = f(x). Graf funkce f ve zvolené soustavě souřadnic Oxy v rovině je množina všech bodů [x; f(x)], kde x patří do definičního oboru funkce f.

Dalším z příkladů funkcí je exponenciální funkce. Jedná se o funkci, která je v přírodních vědách velmi častá. Než funkci budeme matematicky definovat, ukažme si její význam v praxi:

- *„Při pozorování hmotnosti radioaktivní látky bylo z hodnot zjištěno, že dochází k pravidelné změně v čase podle závislosti m(t) = m0 · 2^(−t/T)."* (m0 je počáteční hmotnost látky, T je poločas rozpadu)
- *„Elektrický proud při vybíjení kondenzátoru mění v čase svou okamžitou rychlost podle vztahu I(t) = I0 · e^(−t/RC)."* (I0 je elektrický proud na začátku vybíjení, R je celkový elektrický odpor obvodu a C je kapacita kondenzátoru)
- *„Během buněčného růstu se mění počet buněk podle vztahu N = N0 · 2ⁿ."* (N0 je počet buněk na počátku, n je počet generací)
- *„Pokud rozkmitáme kyvadlo, tak po určité době budou kmity utlumovány, výchylka kyvadla se bude měnit podle vztahu tlumeného kmitání."* (b je konstanta úměrnosti mezi odporovou silou a rychlostí kyvadla, m je hmotnost kyvadla, y je výchylka kyvadla, y(m) je maximální výchylka kyvadla, úhlová rychlost odpovídá periodě a frekvenci kmitavého pohybu)
- *„Pro rychlost chemické reakce platí Arrheniova rovnice."* (A je frekvenční faktor popisující mechanismus chemické reakce, E(A) je aktivační energie nutná k zahájení chemické reakce, R je univerzální plynová konstanta, T je teplota systému, c je koncentrace přeměňující se látky)

Pokud bychom jakýkoliv přírodovědný vztah uvedený výše vyjádřili graficky, pak získáváme křivku, která je grafem exponenciální funkce — exponenciálu. Zakreslení můžeme provádět pomocí excelu:

| t (s) | 0 | 20 | 40 | 60 | 80 | 100 | 120 | 140 | 160 | 180 | 200 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| m (g) | 1,00 | 0,93 | 0,86 | 0,80 | 0,74 | 0,68 | 0,63 | 0,59 | 0,55 | 0,51 | 0,47 |

| t (s) | 220 | 240 | 260 | 280 | 300 | 320 | 340 | 360 | 380 | 400 |
|---|---|---|---|---|---|---|---|---|---|---|
| m (g) | 0,43 | 0,40 | 0,37 | 0,35 | 0,32 | 0,30 | 0,28 | 0,26 | 0,24 | 0,22 |

((obrázek vynechán — graf))

Pokud bychom opustili definiční obor typický pro přírodovědné bádání, tedy definiční obor D(f) = ⟨0;+∞), pak by mohla křivka vypadat i pro záporná t. ((obrázek vynechán))

Exponenciální funkce o základu „a" je funkce na množině R vyjádřená ve tvaru y = aˣ, kde „a" je kladné číslo různé od jedné. Základ „a" ovlivňuje tvar a průběh funkce. Především je rozdíl u funkcí, které mají základ a > 1 a 0 < a < 1. Pro a = 1 by měla funkce průběh typický pro konstantní funkci, kde y = 1. ((obrázek vynechán))

- Definiční obor je R
- Obor hodnot je (0;+∞)
- Pro a > 1 se jedná o funkci rostoucí, funkce je prostá
- Pro 0 < a < 1 se jedná o funkci klesající, funkce je prostá
- Funkce je zdola omezená, není shora omezená
- Nemá v žádném bodě maximum a ani minimum
- Funkční hodnota v bodě 0 je rovna 1

Přirozená exponenciální funkce je zvláštní typ exponenciální funkce, pro kterou platí, že se dotýká lineární funkce y = x + 1 v jediném bodě. Hodnota základu se pak rovná přibližně číslu 2,718 281 828. Tuto hodnotu v matematice označujeme jako „e", nazýváme ji Eulerovo číslo. Přirozená exponenciální funkce pak vypadá takto: y = eˣ.

*Cvičení TechAmbition*

## 23.–24. Exponenciální funkce a její parametry

1. Načrtněte grafy: a) y = 0,3ˣ, b) y = −0,3ˣ, c) y = −0,3ˣ + 2, d) y = 3ˣ + 3, e) y = 3^(x−1), f) y = 3^(x+1)
2. Porovnejte grafy a vlastnosti funkcí: a) y = x², y = 2ˣ; b) y = x³, y = 3ˣ
3. Dokažte, že 3^(−0,5) je menší než jedna. *Řešení:* Základ exponenciální funkce je větší než 1, jedná se tedy o funkci rostoucí. Pro rostoucí funkci platí: pokud x1 < x2, pak i f(x1) < f(x2). Hodnotu 1 získáme, pokud umocníme základ na nultou. Protože −0,5 je menší než 0, pak 3^(−0,5) musí být menší než 1.
4. Platí výrok 1,6^1,5 > 1,8^1,5? *Řešení:* zde je základ proměnný, ne exponent — porovnáváme dvě různé mocninné funkce se stejným (kladným) exponentem, takže větší základ dává větší hodnotu; protože 1,6 < 1,8, výrok je nepravdivý.
5. Rozhodněte, jaký je vztah mezi čísly p, r v úlohách typu p = aˣ¹, r = aˣ² pro daný základ a a dané exponenty: je-li základ menší než 1, funkce je klesající a platí opačné pořadí, než u exponentů; je-li základ větší než 1, funkce je rostoucí a pořadí odpovídá pořadí exponentů.

*Cvičení TechAmbition*

## 25.–26. Exponenciální rovnice

Při řešení exponenciálních rovnic vycházíme z průběhu grafu exponenciální funkce. Především aplikujeme pravidlo typické pro prostou funkci, že pro každé x z reálných čísel je přiřazena jediná hodnota daná předpisem y = aˣ.

*Příklad:* Najděte „x" exponenciální funkce y = 2ˣ, pro které bude hodnota funkce 8. Nejprve vyčtěte řešení z grafu, následně hledejte výpočetní řešení.

*Příklad (substituce):* Řešte rovnici 4ˣ − 6·2ˣ + 8 = 0. Nejprve upravíme výraz 4ˣ na (2²)ˣ, což lze zapsat jako (2ˣ)². Číslo 6 nelze upravit na výraz s 2ˣ jednoduše, proto vytvoříme substituci y = 2ˣ. Nově získáváme kvadratickou rovnici y² − 6y + 8 = 0, najdeme její kořeny a vrátíme se zpět k substituci — pokud vyjde záporné y, nemá řešení, protože 2ˣ je vždy větší než 0.

Výsledky vybraných úloh: x = −0,75; x = 1; x = −3, x = 0,4; x = 0, x = 1,5; x = 1,5; x = −2, x = 0; x = 3; x = 2.

*Cvičení TechAmbition*

## 27. Logaritmická funkce v praxi

V minulé kapitole jsme k lineární, konstantní, mocninné a kvadratické funkci přidali exponenciální funkci. Další v přírodních vědách zajímavý předpis přiřazující definičnímu oboru reálná čísla podle zákonů a pravidel je logaritmická funkce. Než budeme funkci matematicky definovat, ukažme si její význam v praxi:

- *„Jaké pH naměříme u roztoku s koncentrací kyseliny chlorovodíkové 10⁻² M? K výpočtu užijme vztah pro silné kyseliny pH = −log10(c)."* (pH je stupnice pro měření kyselosti a zásaditosti, M je zkratka pro jednotku mol·dm⁻³, koncentrace je látkové množství dělené objemem)
- *„Jaké pH naměříme u roztoku s koncentrací kyseliny bromné 10⁻² M? K výpočtu užijme vztah pro slabé kyseliny."* (K(A) je rovnovážná konstanta slabé kyseliny ukazující disociaci molekuly)
- *„Jaká je hladina intenzity zvuku, pokud plochou S projde určitá energie E za časovou jednotku t? Užijte vztah B = 10·log10(I/I0)."* (I je definováno jako výkon zvukového vlnění dělený plochou, výkon je podíl energie a času, I0 je práh slyšení)
- *„Určete jasnost hvězd pomocí Pogsonovy rovnice: m1 − m2 = −2,5·log10(I1/I2)."* (m je hvězdná velikost, I je hustota světelného toku — energie na plochu za čas)
- *„Najděte vztah pro měření Richterovy škály zemětřesení v magnitudách."*
- *„Jaký potenciál naměříme u sodného iontu v roztoku NaCl? Pro výpočet užijte Nernstovu rovnici."* (E je elektrochemický rovnovážný potenciál, R je univerzální plynová konstanta, z je oxidační číslo iontu, F je Faradayova konstanta, X je koncentrace iontu — extracelulární a intracelulární)

Pokud bychom jakýkoliv přírodovědný vztah uvedený výše vyjádřili graficky, pak získáváme křivku, která je grafem logaritmické funkce. Zakreslení můžeme provádět pomocí excelu: pH = −log10(x).

| x (mol·dm⁻³) | 1E-12 | 1E-11 | 1E-10 | 1E-09 | 1E-08 | 1E-07 | 1E-06 | 1E-05 | 1E-04 | 1E-03 | 1E-02 | 1E-01 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| pH | 12,00 | 11,00 | 10,00 | 9,00 | 8,00 | 7,00 | 6,00 | 5,00 | 4,00 | 3,00 | 2,00 | 1,00 |

((obrázek vynechán))

Pokud bychom opustili definiční obor typický pro hledání pH, tedy definiční obor velmi malých kladných čísel, pak by mohla křivka y = log10(x) vypadat takto:

| x | 0,20 | 0,50 | 0,70 | 1,00 | 2,00 | 3,00 | 4,00 | 5,00 | 6,00 | 7,00 | 8,00 | 9,00 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| y | -0,70 | -0,30 | -0,15 | 0,00 | 0,30 | 0,48 | 0,60 | 0,70 | 0,78 | 0,85 | 0,90 | 0,95 |

A pro y = log0,1(x):

| x | 0,20 | 0,50 | 0,70 | 1,00 | 2,00 | 3,00 | 4,00 | 5,00 | 6,00 | 7,00 | 8,00 | 9,00 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| y | 0,70 | 0,30 | 0,15 | 0,00 | -0,30 | -0,48 | -0,60 | -0,70 | -0,78 | -0,85 | -0,90 | -0,95 |

((obrázek vynechán))

Logaritmická funkce o základu „a" je funkce inverzní k exponenciální funkci y = aˣ, kde „a" je kladné číslo různé od jedné. Značení je voleno jako y = logₐ(x), čteme logaritmus „x" o základu „a".

- Definiční obor je (0;+∞)
- Obor hodnot je R
- Pro a > 1 se jedná o funkci rostoucí, funkce je prostá
- Pro 0 < a < 1 se jedná o funkci klesající, funkce je prostá
- Funkce není zdola omezená, není shora omezená
- Nemá v žádném bodě maximum a ani minimum
- Funkční hodnota v bodě 1 je rovna 0

((obrázek vynechán))

## 28.–29. Logaritmická funkce, parametry a grafy

1. Který z výroků je pravdivý: log4(7) < log4(9)? log10(12) > log0,3(12)? *Řešení:* Základ logaritmické funkce log4 je 4 (>1) — funkce je rostoucí, proto ze 7<9 plyne log4(7) < log4(9): výrok platí. Oba logaritmy se základem 10 a 0,3 protínají osu x v bodě 1 s hodnotou y=0; základ 10 vede k rostoucímu průběhu, základ 0,3 ke klesajícímu, tedy log10(12) > 0, ale log0,3(12) < 0 — výrok log10(12) < log0,3(12) neplatí.
2. Rozhodněte, která z uvedených čísel jsou kladná: log0,5(6), −log14(11), log7(8). *Řešení:* log0,5(6) je záporné (základ < 1, argument > 1), −log14(11) je záporné, log7(8) je kladné (základ > 1, argument > 1).
3. Najděte všechna reálná čísla, pro které platí: log2(x) > log2(4); logₓ(3) < logₓ(11). *Řešení:* Základ 2 vede logaritmus k rostoucí funkci, proto podmínku splňuje x > 4. Aby platila druhá nerovnost (3 < 11 zachovává směr), musí být funkce rostoucí, tedy x > 1.
4. Zjistěte definiční obory funkcí y = log10(x+3) a podobných výrazů se zlomkem uvnitř logaritmu — podmínkou je vždy kladnost argumentu.
5. Určete hodnotu funkce y = log2(x) v bodě 8. *Řešení:* log2(8) = 3, protože 2³ = 8.
6. Určete hodnotu funkce y = log10(x) v bodě 0,01.
7. Určete všechna reálná t, pro která platí log8(t) = 3.

*Cvičení TechAmbition*

## 30.–32. Věty o logaritmech

Podobně jako u přirozené exponenciální funkce můžeme pro základ „e" definovat přirozený logaritmus: y = logₑ(x). Většinou ale bývá zvykem zapisovat přirozený logaritmus jako y = ln(x). Přirozený logaritmus je inverzní funkcí k přirozené exponenciální funkci.

Pro logaritmy existuje řada pravidel, které jsou známé jako **věty o logaritmech**; platí pro a > 0, a ≠ 1, a pro r, s z oboru kladných reálných čísel:

- logₐ(r · s) = logₐ(r) + logₐ(s)
- logₐ(r / s) = logₐ(r) − logₐ(s)
- logₐ(rˢ) = s · logₐ(r)

1. Vypočítejte 4·log6(3) + 5·log6(2) − log6(12).
2. Skelet zvířete obsahoval 11 % radioaktivního uhlíku. Jaké je stáří nálezu (poločas přeměny uhlíku je 5570 let)?
3. Vypočtěte: log4(16⁻⁰,⁵), log10(1500) − log10(15), log5(10) + log5(12,5), log2(8) − 4·log2(2) + log2(32).
4. Zjistěte všechna x, pro která platí: log3(x) = −log3(4) + log3(6) − 0,25·log3(0,5); log6(x) = ⅖·(4·log6(11) − ⅙·log6(4) + log6(5)).
5. **Slovní úloha:** Závislost tlaku vzduchu na nadmořské výšce h (v km) lze vyjádřit jako p = p0 · 0,88^h, kde p0 je tlak v nadmořské výšce 0 metrů, konkrétně p0 = 101 325 Pa. Pokud tlak vzduchu klesne na 40 % tlaku vzduchu na hladině moře, nedokáže člověk přijímat kyslík z atmosféry. Určete tuto kritickou výšku.

*Cvičení TechAmbition*

## 33.–35. Logaritmické (ne)rovnice

Pro řešení rovnic platí vztahy:

- y = logₐ(x) ⇔ x = aʸ
- logₐ(x) = logᵦ(x) / logᵦ(a) = log(x) / log(a) = ln(x) / ln(a) = 1 / logₓ(a)
- logₐ(1) = 0, logₐ(a) = 1, logₐ(aʳ) = r, a^(logₐ(x)) = x

**Řešte logaritmickou rovnici:** v^log(v) = 100v.

Postup: zlogaritmujeme obě strany, log(v)·log(v) = log(100) + log(v), tedy log²(v) − log(v) − 2 = 0. Po substituci y = log(v) dostáváme kvadratickou rovnici y² − y − 2 = 0 s kořeny y1 = 2, y2 = −1. Zpětně: log(v1) = 2 ⇒ v1 = 100; log(v2) = −1 ⇒ v2 = 0,1.

**Řešte logaritmickou rovnici:** log2(x+14) + log2(x+2) = 6.

Postup: log2((x+14)(x+2)) = 6, tedy (x+14)(x+2) = 2⁶ = 64, čili x² + 16x + 28 = 64, x² + 16x − 36 = 0. Řešením je x1 = 2 (x2 = −18 nelze použít, argument logaritmu by byl záporný).

**Řešte logaritmickou rovnici:** 2·log10(x−1) = 0,5·(log10(x⁵) − log10(x)).

Postup vede k rovnosti log10(x−1) = log10(x), tedy x−1 = x, což dává −1 = 0 — rovnice nemá řešení.

**Cvičení (kniha):**

- log3(x + 5) = log3(2x − 1) → x = 6
- log5(x² − 17) = log5((x² − 9)/(x − 3)) → x1 = 5 (x2 = −4 nelze, argument by byl záporný)
- (log3 x)² − 3·log3(x) − 10 = 0 → x1 = 3⁻², x2 = 3⁵
- log5(x) + 1/log5(x) = 2 → x = 5 (x = −4/3 nevyhovuje, argument záporný)
- log3(x−1) > log3(3)
- log5(2x + 3) ≤ 1
- pozor! log(x−3) + log(2x−1) < 0
- 3^(2t−1) = 5^(3−t) → x ≈ 1,557
- 2^(t−1) · 3^(3t) = 0,5 · 4^(t−1) → x ≈ −0,533

*Cvičení TechAmbition*
