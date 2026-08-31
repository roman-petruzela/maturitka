---
title: "Implikace a ekvivalence"
order: 5
source: "mat2/Implikace a ekvivalence.pdf"
hasExercises: true
---
Implikace libovolných výroků 𝑎, 𝑏 je výrok, který vznikne jejich spojením slovním obratem jestliže, pak. Takto vzniklý výrok „jestliže 𝑎 , pak 𝑏 “ zapisujeme 𝑎⇒𝑏 .

Zápis 𝑎⇒𝑏 čteme také „z 𝑎 plyne 𝑏“ nebo „𝑎 implikuje 𝑏“. Výrok 𝑎 nazýváme předpoklad , výrok 𝑏 závěr .

Pravdivostní tabulka implikace je následující:

|𝑎 𝑏|𝑎⇒𝑏|
|---|---|
|1 1|1|
|1 0|0|
|0 1|1|
|0 0|1|

Implikace 𝑎⇒𝑏 , kde 𝑎, 𝑏 jsou libovolné výroky, je pravdivá právě tehdy, když jsou pravdivé oba výroky 𝑎, 𝑏 nebo když je výrok 𝑎 nepravdivý a výrok 𝑏 jakýkoli.

Implikace je tedy nepravdivá, je-li výrok 𝑎 pravdivý a výrok 𝑏 nepravdivý, tedy když pravdivý předpoklad implikuje nepravdivý závěr.

Př.:

𝑎: Číslo 5 je prvočíslo.

𝑏 : Číslo 5 je sudé.

𝑐 : Číslo 5 je liché.

𝑑 : Číslo 5 je záporné.

Utvořte následující implikace a určete jejich pravdivost:

𝑎⇒𝑑:

𝑎⇒𝑐:

𝑏⇒𝑐:

𝑏⇒𝑑:

U konjunkce 𝑎˄𝑏 i disjunkce 𝑎˅𝑏 lze pořadí obou výroků zaměnit, aniž se tím změní pravdivost těchto složených výroků.

U implikace tomu tak není! Implikace 𝑏⇒𝑎 se nazývá obrácená implikace .

Př.: Implikace „Je-li trojúhelník rovnostranný, pak je rovnoramenný“ je pravdivá, ale obrácená implikace „Je-li trojúhelník rovnoramenný, pak je rovnostranný“ je nepravdivá.

Př.: Vyšetřete pravdivost implikací libovolných výroků 𝑎, 𝑏 :

1) 𝑎⇒(𝑎˅𝑏),

2) (𝑎˅𝑏) ⇒𝑎,

3) (𝑎˅𝑏) ⇒(𝑎˄𝑏).

Ekvivalence libovolných výroků 𝑎, 𝑏 je konjunkce implikace 𝑎⇒𝑏 a obrácené implikace 𝑏⇒𝑎 , tedy výrok <u>(𝑎⇒𝑏) ˄ (𝑏⇒𝑎).</u>

Ekvivalenci také zapisujeme jako 𝑎⇔𝑏 a čteme „ 𝑎 je ekvivalentní s 𝑏 “ nebo „ 𝑎 platí právě tehdy, když platí 𝑏 “.

Pravdivostní tabulka ekvivalence je následující:

|𝑎 𝑏|𝑎⇒𝑏|𝑏⇒𝑎|𝑎⇔𝑏|
|---|---|---|---|
|1 1|1|1|1|
|1 0|0|1|0|
|0 1|1|0|0|
|0 0|1|1|1|

Odtud vidíme:

Ekvivalence 𝑎⇔𝑏 , kde 𝑎, 𝑏 jsou libovolné výroky, je pravdivá právě tehdy, když výroky 𝑎, 𝑏 jsou oba pravdivé nebo oba nepravdivé.

Př.: Rozhodněte, zda jsou výroky 𝑎⇒𝑏, ¬𝑏⇒¬𝑎 ekvivalentní.

Př.: Vašek, který je náčelníkem Siouxů, prohlásil: „Je-li druhá odmocnina z deseti menší než tři, pak jsem náčelníkem Siouxů“. Posuďte pravdivost této implikace. Utvořte implikaci obrácenou a obměněnou a posuďte jejich pravdivosti.

Př.: Jsou dány výroky: 𝑎: √20 > 4 . 𝑏: −√20 < −4

Posuďte pravdivost výroků: 𝑎⇒𝑏, 𝑏⇒𝑎, ¬𝑎⇒¬𝑏.

Př.: Určete, které z následujících výroků jsou tautologie: a) (𝑎˄𝑏) ⇔(¬𝑎˅¬𝑏), b) (𝑎⇔𝑏) ⇔(¬𝑎⇔¬𝑏), c) (𝑎⇒𝑏) ⇒(¬𝑎⇒¬𝑏).

Př.: Určete, jak závisí pravdivost výroků

a) 𝑎⇒(𝑎˄𝑏), b) (𝑎˄𝑏) ⇒𝑏, c) (𝑎˄𝑏) ⇒(𝑎˅𝑏) na pravdivostních hodnotách výroků 𝑎, 𝑏 . Př.: Vyšetřete pravdivost výroků

a) 𝑎⇔(𝑎˄𝑏), b) 𝑎⇔(𝑎˅𝑏), c) (𝑎˅𝑏) ⇔(𝑎˄𝑏) V závislosti na pravdivosti výroků 𝑎, 𝑏 .

Př.: Vyšetřete pravdivost výroku (𝑎⇒𝑏) ⇔[(𝑏⇒𝑎)˅(¬𝑎⇒𝑏)] v závislosti na výrocích 𝑎, 𝑏.
