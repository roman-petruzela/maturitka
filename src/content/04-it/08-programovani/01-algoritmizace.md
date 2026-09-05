---
title: "Algoritmizace"
order: 1
source: "MATURITA HADR/IT/1. Algoritmizace.docx"
---
- sekvence jednoduchých kroků, kdy v každém kroku víme, který krok bude následovat nebo bude končit, navíc je po konečném počtu kroků získán výsledek
- algoritmus musí být:
	- __hromadný__ = neměl by sloužit pouze pro jediný případ, ale k obecnému řešení nějakého problému
	- __jednoznačný__ \(deterministický\) = v každém kroku je jasné co bude následovat
	- __opakovatelný__ = protože je v každém kroku udáno, co bude následovat, je možné opakovat postup a výsledek bude vždy stejný
	- __konečný__ = po určitém počtu kroků skončí
	- __správný__ = pro všechna přístupná data by měl být výsledek správný
- __počítačový program__ = je zápis algoritmu takovým způsobem, kterému počítač rozumí
- __programovací jazyk__ = je komunikačním nástrojem mezi [programátorem](https://cs.wikipedia.org/wiki/Program%C3%A1tor), který v programovacím jazyce formuluje postup řešení daného problému, a počítačem, který program interpretuje technickými prostředky; obsahují takové příkazy, které je člověk tvořící program schopen snadno zadat, a zápis v těchto jazycích je pak převeden do jazyka počítače = strojového kódu
	- __nižší programovací jazyky__ = primitivní instrukce odpovídají příkazům procesoru; kód programu je složitý a nesrozumitelný; velmi malý nebo žádný rozdíl mezi daným programovacím jazykem a [strojovými instrukcemi](https://cs.wikipedia.org/wiki/Strojov%C3%A1_instrukce) procesoru \([instrukční sadou](https://cs.wikipedia.org/wiki/Instruk%C4%8Dn%C3%AD_sada)\); Assembler nebo strojový kód
	- __vyšší programovací jazyky__ = srozumitelnější pro programátora; má logickou strukturu; příkazy jsou převáděny do strojového kódu; jednodušší vlastní vývoj programů; zápisy jsou kratší a lépe čitelné; kompilátor – překladač vyššího programovacího jazyka do strojového kódu; PHP, Python, Java, BASIC, C\+\+; první programovací jazyk vytvořil Konrad Zuse jazyk zvaný Plankalkül
- __zápis algoritmu:__
	- __slovně:__ slovní popis můžeme rozumět různé návody na použití, recepty, popisy sestavení…
	- __matematicky:__ vhodný v případě, kde je možné danou problematiku popsat pomocí matematických vzorců, vztahů nebo definic
	- __rozhodovací tabulka:__ používá se v případech, kdy se v úloze vyskytuje několik možností a vlastní řešení je pro každou možnost jednoduše popsatelné
	- __strukturogramy:__ úspornější znázornění algoritmu – kombinace grafického a textového popisu; tvořen obdélníkovou tabulkou; záhlaví tabulky obsahuje název algoritmu nebo dílčího kroku; zpravidla uprostřed trojúhelníková podmínka
	- __vývojové diagramy:__ zachycení řešení pomocí specifických grafických symbolů ve kterých je zapsán slovní text
	- __programovací jazyk__
- __analytik__ = určuje co má program umět; vypracuje určité zadání, kde naznačí řešení problému
- __vývojář__ \(programátor\) = dle popisu vytvoří program, přepíše řešení do programovacího jazyka
- __tester =__ zadává různá data a zkoumá chování programu; pokud objeví chybu, pak ji předá zpět programátorovi k dořešení

__Vývojový diagram – značky__

Spojovací čára

Začátek a konec algoritmu

Ruční vstup

Zobrazení výstupu

Cyklus

Podmínka

Příkaz
