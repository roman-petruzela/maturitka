---
title: "Kvadratická funkce v praxi"
order: 100
source: "mat/IT2M_1.docx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojový dokument obsahoval matematické vzorce vložené jako obrázky/rovnice, které se při převodu ztratily (označeno jako *(obrázek vynechán)*). Text i tabulky s daty jsou zachovány beze změny významu.

## 1. Kvadratická funkce a praxe

Mechanika je předmětem studia 1. ročníku IT. V rámci mechaniky jste se věnovali jednak kinematice a také dynamice. Podrobně jste prostudovali rovnoměrně zrychlený pohyb. V matematice se lépe podíváme na grafický průběh, vztah a rovnice spojené s touto problematikou.

*Jak vypadá graf závislosti dráhy rovnoměrně zrychleného pohybu na čase, pokud těleso z rychlosti 2 m·s⁻¹ začne zrychlovat se zrychlením 5 m·s⁻²?*

Klasické zadání z přijímacích zkoušek na technickou školu. Jde nám o to, vědět předem, kde se bude nacházet těleso v jakémkoliv čase. Prostě předvídat budoucnost a to je podstatou fyziky (nečekat, co se stane, ale být připraven na známé důsledky). Matematika nám svým aparátem pomáhá převádět vztahy do srozumitelného a logického jazyka.

Dráhu rovnoměrně zrychleného pohybu jste v 1. ročníku definovali (s = dráha, a = zrychlení, v0 = počáteční rychlost).

Dráha rovnoměrně zrychleného pohybu se vypočítá jako součet dvou výrazů. První výraz je polovina součinu zrychlení a druhé mocniny času. Druhý výraz je součin rychlosti před zrychlováním a času.

Tento fyzikální vzorec je v matematickém jazyce jeden z příkladů zjednodušené kvadratické rovnice: každá funkce na množině R ve tvaru y = ax² + bx + c je kvadratická funkce, pokud a ≠ 0.

K sestrojení grafu si pomůžeme aplikací excel. Neznámou je pro nás dráha s (matematicky y), ta se objeví na levé straně rovnice, proměnnou je probíhající čas t (matematicky x). Protože čas běží kontinuálně, můžeme si nastavit hledání výsledků pro čas číselně t1=1, t2=2, t3=3, t4=4. Za konstanty lze dosadit pro zrychlení číselně a=5, pro rychlost číselně v0=2.

Tabulka vypadá takto — excel vypočítá dráhu s podle vzorce `=0,5*5*(B3^2)+2*B3`:

| t (s) | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| s (m) | 0 | 5 | 14 | 29 | 48 |

Excel vykreslí graf: *(obrázek vynechán)*

Graf nám umožní zjistit v rozmezí času 0–4 sekundy v kterékoliv chvíli, kde se bude přesně nacházet hmotný bod. Z pohledu matematiky jsme získali část paraboly pro interval proměnné x=⟨0;4⟩. Z pohledu fyziky můžeme z různých bodů časové osy (x=t) vytáhnout kolmici a jakmile protne graf, tak zjistíme, jakou dráhu má těleso za sebou (y=s).

## 2. Graf kvadratické funkce y = a·x²

Při analýze grafu funkce si zkusme nejprve srovnat odlišný průběh grafů závislosti dráhy na čase při různých zrychleních. Představit si to můžeme jako rozjezd několika vozidel od semaforu na zelenou → 30tunový náklaďák, traktor, stará Škoda, Porsche. Je jasné, že každý vůz má jiné zrychlení (dané tahovou sílou motoru), takže za stejný čas bude v jiné vzdálenosti od semaforu. Pokud by se těleso pohybovalo z klidu, pak vztah pro dráhu je s = ½·a·t² (a = zrychlení, t = čas, s = dráha).

V aplikaci excel vytvoříme tabulku a grafy jednotlivých funkcí:

| t (s) | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| s (m) pro a=1 | 0 | 1 | 2 | 5 | 8 |
| s (m) pro a=3 | 0 | 1,5 | 6 | 13,5 | 24 |
| s (m) pro a=5 | 0 | 2,5 | 10 | 22,5 | 40 |
| s (m) pro a=7 | 0 | 3,5 | 14 | 31,5 | 56 |
| s (m) pro a=10 | 0 | 5 | 20 | 45 | 80 |

*(obrázek vynechán)* Z grafů je patrné, že čím je zrychlení větší, tím je parabola strmější a více přikloněná k ose y.

Stále ale sledujeme jen část paraboly a pouze pro definiční obor kladných reálných čísel. Jak by ale vypadala matematická verze kvadratické rovnice pro všechna reálná čísla? Aplikujme na funkci v aplikaci excel:

| x | -3 | -2 | -1 | 0 | 1 | 2 | 3 |
|---|---|---|---|---|---|---|---|
| y | 45 | 20 | 5 | 0 | 5 | 20 | 45 |

*(obrázek vynechán)*

Z předchozích znalostí matematiky můžeme popsat vlastnosti grafu:

- v definičním oboru (−∞;0⟩ se jedná o klesající funkci
- v definičním oboru ⟨0;+∞) se jedná o rostoucí funkci
- oborem hodnot je ⟨0;+∞)
- v bodě 0 má funkce své minimum
- funkce nemá své maximum
- funkce je zdola omezená
- funkce není shora omezená
- funkce je sudá
- grafem funkce je parabola

Kvadratická funkce je ale definována jako platná pro všechna a ≠ 0. Výše uvedený graf se zaměřil pouze na kladné hodnoty „a". Jaký by byl průběh funkce pro záporné hodnoty „a" (v praxi nelze užít příklad o brždění vozu, i když se uvádí zrychlení se zápornou hodnotou — protože brzdit se musí z nějaké rychlosti a to u jednoduché funkce y=ax² nemáme). Aplikujme na funkci v aplikaci excel:

| x | -3 | -2 | -1 | 0 | 1 | 2 | 3 |
|---|---|---|---|---|---|---|---|
| y | -45 | -20 | -5 | 0 | -5 | -20 | -45 |

*(obrázek vynechán)*

Z předchozích znalostí matematiky můžeme popsat vlastnosti grafu:

- v definičním oboru (−∞;0⟩ se jedná o rostoucí funkci
- v definičním oboru ⟨0;+∞) se jedná o klesající funkci
- oborem hodnot je (−∞;0⟩
- v bodě 0 má funkce své maximum
- funkce nemá své minimum
- funkce je shora omezená
- funkce není zdola omezená
- funkce je sudá
- grafem funkce je parabola

## 3.–4. Posuny grafů kvadratické funkce

V předchozí kapitole jsme se věnovali jen nejjednodušší verzi kvadratické rovnice. Ale mechanika v praxi řeší řadu složitějších úloh, na které nám musí dát matematický aparát odpověď.

*Jak vypadá graf závislosti dráhy rovnoměrně zrychleného pohybu na čase, pokud těleso začne zrychlovat se zrychlením 10 m·s⁻² v době, kdy už mělo těleso za sebou vzdálenost 10 metrů od startovní čáry?*

V této reálné úloze se objevuje nově další člen kvadratické funkce a to je člen „c". Jak se změní graf funkce nám ukáže aplikace excel:

| t (s) | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| s (m) pro a=10 a c=10 | 10 | 15 | 30 | 55 | 90 |

*(obrázek vynechán)*

Pokud bychom řešili problém matematicky pro definiční obor všech reálných čísel, dostáváme obdobný graf: *(obrázek vynechán)*

Ke grafu funkce s = ½·a·t² + c tedy dospějeme tak, že graf funkce s = ½·a·t² posuneme o 10 jednotek ve směru kladné poloosy s. Ke grafu funkce y = ax² + c dospějeme tak, že graf funkce y = ax² posuneme o 10 jednotek ve směru kladné poloosy y.

*Jak vypadá graf závislosti dráhy rovnoměrně zrychleného pohybu na čase, pokud těleso začne zrychlovat se zrychlením 10 m·s⁻²? Těleso však vystartovalo o 5 sekund později po oficiálním začátku měření závodu?*

Jak se změní graf funkce nám ukáže aplikace excel:

| t (s) | -5 | 0 | 5 | 10 | 15 | 20 |
|---|---|---|---|---|---|---|
| s (m) pro a=10 a (t-5) | 500 | 125 | 0 | 125 | 500 | 1125 |

*(obrázek vynechán)*

Ke grafu funkce s = ½·a·(t−5)² tedy dospějeme tak, že graf funkce s = ½·a·t² posuneme o 5 jednotek ve směru kladné poloosy t. Ke grafu funkce y = a(x−5)² dospějeme tak, že graf funkce y = ax² posuneme o 5 jednotek ve směru kladné poloosy x.

Matematická verze grafu je v pořádku. U fyzikální verze se musíme pozastavit. Protože těleso vystartovalo až 5 sekund po zahájení měření, tak pro definiční obor t < 5 nemá obor hodnot smysl. Proto z fyzikálního pohledu by měl graf vypadat jinak — jen pro t ≥ 5. *(obrázek vynechán)*

V matematické teorii se ještě uvádí řešení posunu grafu pro obecnou kvadratickou rovnici ve tvaru y = ax² + bx + c. Tuto rovnici lze upravit tak, že nakreslíme funkci y = ax² a posuneme ji v ose x o úsek b/2a, následně v ose y o úsek c−(b²/4a). Zda budeme posunovat ve směru kladné či záporné poloosy záleží na výsledku členů b/2a a c−(b²/4a).

Poslední analýza grafu bude čistě fyzikálního charakteru, průběh grafu totiž nemusí vždy vypadat tak, jak jsme si ukázali ve všech předchozích případech. Podívejme se na dráhu rovnoměrně zpomaleného pohybu a grafické znázornění.

*Jak vypadá graf závislosti dráhy rovnoměrně zpomaleného pohybu na čase, pokud těleso začne zpomalovat se záporným zrychlením 10 m·s⁻²? Těleso se před brzděním pohybovalo rychlostí 5 m·s⁻¹.*

Jak se změní graf funkce nám ukáže aplikace excel:

| t (s) | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| s (m) pro zpomalení | 0 | 15 | 20 | 15 | 0 | -25 |

Na této tabulce se ukazuje, jak se matematika drží své funkce, pravidel, protože jsme jí neurčili definiční obor, pro který mají obory hodnot fyzikální smysl. Už nyní vidíme, že ve 2 sekundách byla brzdná dráha 20 m a pak najednou ve 3 sekundách se má změnit brzdná dráha na 15 m? Naprostý nesmysl. Funkci musíme říct, kdy se těleso zastaví. Když stojí, tak už nemůže funkce pokračovat. Pokud tedy nastavíme podmínku zastavení, dostáváme fyzikálně smysluplný obor hodnot (maximum je v bodě, kdy je rychlost nulová).

Jak zjistit, že je maximum právě v y=20 m? Stačí se zabývat lokálními extrémy funkce, konkrétně druhou derivací (viz vyšší ročníky). Případně nám pomůže inverzní funkce (viz později v učivu). *(obrázek vynechán — matematická i fyzikální verze grafu)*

## 5. Inverzní funkce a kvadratická funkce

Ve fyzice často chceme zaměnit hledání neznámé ve vztahu veličin. V kapitole kvadratické funkce jsme hledali dráhu zrychleného pohybu v jednotlivých časech. Ale co když dráhu známe a chceme naopak vědět, v jaký čas byla dráha dosažena?

V případě rychlosti zrychleného pohybu můžeme hledat výslednou rychlost v čase, ale také čas, kdy byla rychlost dosažena.

V případě lineární funkce (určení rychlosti pohybu) je hledání y nebo x snadné. Platí, že pokud dosadíme x, dostáváme unikátní y. A zároveň pokud dosadíme y, dostáváme unikátní x. Každému x přiřazujeme právě jedno y, a naopak.

K funkci jsme tak definovali inverzní funkci. Pokud je prostá funkce f a inverzní funkce je f⁻¹, pak platí: grafy funkcí f a f⁻¹ sestrojené v téže soustavě souřadnic OXY se stejnou délkovou jednotkou na obou osách jsou souměrně sdruženy podle přímky y=x.

Jenže u kvadratické funkce je situace jiná. Pokud dosadíme do vztahu y=2x² hodnoty x1=2 a x2=−2, tak dostáváme oba výsledky y1=8 a y2=8. Protože není možné jednoznačné přiřazení právě jednoho y k určitému x, pak nelze sestavit inverzní funkci pro celý definiční obor.

Pokud bychom ale řešili u kvadratické funkce pouze definiční obor, který vede k oboru hodnot splňujícímu definici inverzní funkce (např. jen x ≥ 0), pak by inverzní funkce existovala. *(obrázek vynechán)*

## 6. Procvičování

### 6.1 TechAmbition (4 cvičení)

### 6.2 Učebnice (výuka)

- Načrtněte grafy funkce y = 1,5x² a y = −1,5x² a srovnejte s grafy y = 3x² a y = −3x²
- Načrtněte grafy funkcí y = x² + c pro c = 3 nebo −0,5
- Načrtněte grafy funkcí y = (x−k)² + m pro k = 1 a m = 2, pro k = −2 a m = 2
- Načrtněte grafy y = x² − 2x + 3, y = −x² − 6x − 8, y = 2x² + 5x − 1
- Dokažte, že hodnota funkce y = x² − 4x + 5 je v každém bodě kladné číslo
