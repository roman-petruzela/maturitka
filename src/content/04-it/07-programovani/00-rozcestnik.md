---
title: "Programování – rozcestník"
order: -1
---

Rozcestník kategorie: o čem předmět je, kdy se podle ŠVP učí, co si z něj určitě zapamatovat, kde je které téma a jak souvisí s maturitou.

## O předmětu

- Od algoritmu k hotové aplikaci: vlastnosti a zápis algoritmu, datové typy a řídicí struktury, typické algoritmy a jejich složitost.
- Ve 2. ročníku úvod do objektového programování a formulářů, ve 3. a 4. ročníku (volitelně) OOP do hloubky, formulářové aplikace a práce s daty – soubory, řazení, vyhledávání, import, export a vizualizace.
- Ukázky na stránkách jsou v Pythonu a C# vedle sebe, formulářové aplikace v C# (Windows Forms).
- Stejné konstrukce se vracejí ve [webovém programování](/it/#webove-programovani) (PHP), v JavaScriptu v [elektronickém publikování](/it/#elektronicke-publikovani) a v [robotice](/it/#robotika) (Arduino).

## Ročníky a hodiny podle ŠVP

| Ročník | Hodin týdně | Obsah (ŠVP §4.9.7) |
| --- | --- | --- |
| 1. | 2 (povinný) | algoritmizace; strukturované programování – datové typy, řídicí struktury, typické algoritmy, testování, složitost |
| 2. | 2 (povinný) | větvení, cykly, řetězce a pole v objektovém jazyce; úvod do formulářů a verzování; úvod do OOP |
| 3. | 2 (volitelný) | objektové programování – metody, konstruktory, přetěžování, kolekce; práce s daty; formulářové aplikace |
| 4. | 2 (volitelný) | práce s daty – kolekce, import, export a vizualizace dat, aplikace zpracovávající data |

Plné znění výstupů je v [přehledu ŠVP](/it/reference/svp-prehled/#497-programování). Ve 4. ročníku je navíc samostatný předmět Programování kancelářského software ([ŠVP §4.9.13](/it/reference/svp-prehled/#4913-programování-kancelářského-software)) – automatizace kancelářských aplikací skripty; vlastní stránky zatím nemá.

## Co si určitě zapamatovat

- **Algoritmus** je hromadný, jednoznačný (deterministický), opakovatelný, konečný a správný. Zapisuje se slovně, matematicky, rozhodovací tabulkou, **vývojovým diagramem**, strukturogramem nebo v programovacím jazyce.
- **Nižší** programovací jazyky jsou blízko strojovým instrukcím, **vyšší** se překládají (kompilátor) nebo interpretují. Role: analytik (co má program umět), vývojář, tester.
- **Datové typy**: celé číslo, desetinné číslo, znak, řetězec, logická hodnota, pole. **Statické typování** (C#, Java) × **dynamické** (Python, JavaScript). Proměnná má název, typ a hodnotu; konstantu nelze změnit; platnost lokální × globální.
- **Řídicí struktury**: sekvence, větvení (`if / else`, `switch`), cykly – `for` (známý počet opakování), `while` (podmínka na začátku, nemusí proběhnout ani jednou), `do-while` (podmínka na konci, proběhne aspoň jednou).
- **Typické algoritmy**: součet a průměr, maximum a minimum, lineární vyhledávání, bublinkové řazení; **binární vyhledávání** jen v seřazeném poli.
- **Složitost** (O-notace): O(1) přístup podle indexu, O(log n) binární vyhledávání, O(n) lineární průchod, O(n²) dva vnořené cykly (bublinkové řazení).
- **Chyby**: syntaktická (program se nepřeloží), běhová (spadne za běhu, např. dělení nulou), logická (běží, ale počítá špatně). Ladění krokováním, breakpointy, výpisy.
- **OOP**: **třída** = šablona, **objekt** = instance; atributy (stav) a metody (chování); **konstruktor** inicializuje objekt (v C# stejný název jako třída, v Pythonu `__init__`). Tři pilíře: **zapouzdření** (private atributy, gettery a settery), **dědičnost** (potomek přebírá a doplňuje předka), **polymorfismus** (stejné volání, jiné chování – přetěžování × přepisování metod).
- **Formulářové aplikace**: prvky tlačítko, popisek, textové pole, checkbox (více voleb), přepínač (jedna volba), rozbalovací seznam; **událost** (Click, TextChanged, Load) spouští **obslužnou metodu**. Modální okno blokuje ostatní, nemodální ne.
- **Testování**: platné, neplatné a hraniční vstupy; **bug report** = kroky k zopakování, očekávané a skutečné chování, závažnost.
- **Soubory**: textový, CSV, binární, JSON a XML; postup otevřít – číst / zapsat – zavřít. **Git**: repozitář, commit, push a pull.

## Témata kategorie

- [Algoritmizace](/it/programovani/01-algoritmizace/) – vlastnosti algoritmu, způsoby zápisu, značky vývojového diagramu
- [Strukturované programování](/it/programovani/02-strukturovane-programovani/) – datové typy, řídicí struktury, řetězce, pole, typické algoritmy, složitost
- [Objektově orientované programování](/it/programovani/03-objektove-programovani/) – třída a objekt, konstruktor, přetěžování, zapouzdření, dědičnost, polymorfismus, kolekce, Git
- [Formulářové aplikace a práce s daty](/it/programovani/04-formularove-aplikace-a-prace-s-daty/) – GUI, události, více formulářů, testování, soubory, řazení, vizualizace

## Maturitní okruhy

Programování se u ústní zkoušky nezkouší – podle [maturitních okruhů IT](/it/reference/maturitni-okruhy/) je součástí praktické zkoušky a maturitní práce.

## Co je jen okrajové

- **Rozhodovací tabulka a strukturogram** – stačí vědět, že existují; v praxi se používá vývojový diagram a kód.
- **Nižší programovací jazyky** (assembler) – stačí rozdíl oproti vyšším.
- **Detaily Windows Forms** (kód generovaný Designerem, vlastnosti jednotlivých prvků) – naučí se v prostředí.
- **Statický a dynamický polymorfismus** – stačí rozdíl mezi přetěžováním a přepisováním metod.
- Konkrétní syntaxe Pythonu × C# – důležitý je princip konstrukce, ne pamatovat si obě verze zápisu.
