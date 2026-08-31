---
title: "Negace složených výroků"
order: 3
source: "mat2/Negace složených výroků.pdf"
hasExercises: true
---
Víme, že pokud je výrok 𝑣 nepravdivý, pak je jeho negace ¬𝑣 pravdivá (a naopak). Nyní se podíváme na negaci složených výroků.

Pro negaci konjunkce výroků 𝑎, 𝑏 platí následovné:

|𝑎|𝑏|𝑎∧𝑏|¬(𝑎∧𝑏)|¬𝑎|¬𝑏|
|---|---|---|---|---|---|
|1|1|1|0|0|0|
|1|0|0|1|0|1|
|0|1|0|1|1|0|
|0|0|0|1|1|1|

Pomocí této tabulky chceme najít výrok, který je ekvivalentní s výrokem ¬(𝑎∧𝑏 ). Ptáme se: Jaký výrok složený z výroků 𝑎, 𝑏, ¬𝑎, ¬𝑏 má stejný sloupec pravdivostních hodnot jako výrok ¬(𝑎∧𝑏 )? Vidíme, že v tomto sloupci jsou tři jedničky, což odpovídá pravdivostním hodnotám disjunkce nebo implikace nějakých dvou výroků; podíváme se na sloupce ¬𝑎, ¬𝑏, zjistíme, že hledaným výrokem je výrok ¬𝑎∨¬𝑏 .

Pro libovolné výroky 𝑎, 𝑏 platí ¬(𝑎∧𝑏) ⇔(¬𝑎∨¬𝑏).

K určení negace disjunkce výroků 𝑎, 𝑏 použijeme tabulku:

|𝑎|𝑏|𝑎∨𝑏|¬(𝑎∨𝑏)|¬𝑎|¬𝑏|
|---|---|---|---|---|---|
|1|1|1|0|0|0|
|1|0|1|0|0|1|
|0|1|1|0|1|0|
|0|0|0|1|1|1|

Protože ve sloupci pravdivostních hodnot výroku ¬(𝑎∨𝑏) jsou tři nuly a jednička, může negací disjunkce být konjunkce nějakých výroků; snadno se přesvědčíme, že to je konjunkce výroků ¬𝑎, ¬𝑏.

Pro libovolné výroky 𝑎, 𝑏 <u>platí</u> ¬(𝑎∨𝑏) ⇔ <u>(¬𝑎∧¬𝑏).</u>

Př.: Utvořte negace výroků:

𝑢: Číslo 72 je dělitelné dvěma a třemi.

𝑣 : Mozart ani Beethoven nejsou čeští skladatelé.

𝑤 : Válku s mloky napsal K. Čapek nebo A. Jirásek.

Řešení:

Výrok 𝑢 je konjunkce výroků „Číslo 72 je dělitelné 2“ a „Číslo 72 je dělitelné 3“. Jeho negace je výrok „Číslo 72 není dělitelné 2 nebo není dělitelné 3“.

Výrok 𝑣 je konjunkce výroků „Mozart není český skladatel“ a „Beethoven není český skladatel“. Jeho negace je výrok „Mozart je český skladatel nebo Beethoven je český skladatel“.

Výrok 𝑤 je disjunkce výroků „Válku s mloky napsal K. Čapek“ a „Válku s mloky napsal A. Jirásek“. Jeho negace je „Válku s mloky nenapsal ani K. Čapek, ani A. Jirásek“.

Negace implikace je následující:

|𝑎 𝑏|𝑎⇒𝑏|¬(𝑎⇒𝑏)|¬𝑎|¬𝑏|
|---|---|---|---|---|
|1 1|1|0|0|0|
|1 0|0|1|0|1|
|0 1|1|0|1|0|
|0 0|1|0|1|1|

Je patrné, že negace implikace by mohla být konjunkce nějakých výroků, neboť v jejím sloupci jsou tři nuly a jedna jednička. Snadno zjistíme, že to je konjunkce výroků 𝑎, ¬𝑏 .

Pro libovolné výroky 𝑎, 𝑏 platí ¬ (𝑎⇒𝑏) ⇔(𝑎∧¬𝑏).

# Př.: Utvořte negace výroků:

. 1) Je-li √2 číslo iracionální, je iracionální i číslo 1 + √2 2) Je-li trojúhelník 𝐴𝐵𝐶 rovnostranný, pak je rovnoramenný. 3) Není-li číslo 5 přirozené, pak není ani číslo 1.

# Řešení:

- 1) Číslo √2 je iracionální a zároveň číslo 1 + √2 není iracionální.

- 2) Trojúhelník 𝐴𝐵𝐶 je rovnostranný a zároveň není rovnoramenný.

- 3) Číslo 5 není přirozené a zároveň číslo 1 je přirozené.

Uvědomte si, že negace implikace není implikace!

# Negace ekvivalence je následující:

|𝑎|𝑏|𝑎⇔𝑏|¬(𝑎⇔𝑏)|¬𝑎|¬𝑏|
|---|---|---|---|---|---|
|1|1|1|0|0|0|
|1|0|0|1|0|1|
|0|1|0|1|1|0|
|0|0|1|0|1|1|

´

Stačí si uvědomit, že negací ekvivalence bude patrně opět ekvivalence, neboť v příslušném sloupci jsou dvě nuly a dvě jedničky. Negací ekvivalence 𝑎⇔𝑏 je ekvivalence ¬𝑎⇔𝑏 nebo také ekvivalence 𝑎⇔¬𝑏 .

Př.: Určete negaci výroku „Číslo 158 je dělitelné šesti právě tehdy, když je dělitelné dvěma a třemi“.

Řešení: Výrok je tvaru 𝑎⇔(𝑏∧𝑐) , kde 𝑎 je výrok „Číslo 158 je dělitelné šesti“, výrok 𝑏 je „Číslo 158 je dělitelné dvěma“ a výrok 𝑐 je „Číslo 158 je dělitelné třemi“. Negace této

ekvivalence je 𝑎⇔¬(𝑏∧𝑐) , tedy 𝑎⇔(¬𝑏∨¬𝑐) . Tento výrok můžeme vyslovit jako „Číslo 158 je dělitelné šesti právě tehdy, když není dělitelné dvěma nebo není dělitelné třemi“.

Jinou možností je vyslovit výrok ve tvaru ¬𝑎⇔(𝑏∧𝑐) , tedy „Číslo 158 není dělitelné šesti právě tehdy, když je dělitelné dvěma a zároveň třemi.“

Platí:

¬(𝑎∧𝑏) = (¬𝑎∨¬𝑏) ¬(𝑎∨𝑏) = (¬𝑎∧¬𝑏)

Př.: Negujte výroky:

- 1) Bod 𝐵 leží na kružnici 𝑘 nebo na přímce 𝑝 .

- 2) Poslední cifra dekadického zápisu čísla 37<sup>7</sup> není nula ani pětka.

- 3) Je-li ciferný součet čísla 37<sup>7</sup> dělitelný třemi, je toto číslo dělitelné třemi.

Př.: Utvořte negace výroků:

- 1) 𝑎∨¬𝑏

- 2) 𝑎⇒¬𝑏

- 3) ¬𝑎⇔¬𝑏

- 4) ¬𝑎∧𝑏

- 5) ¬𝑎⇒𝑏

- 6) ¬𝑎∧¬𝑏

- 7) ¬𝑎∨¬𝑏

Př.: Utvořte negace výroků 𝑎, 𝑏, 𝑐:

1) (𝑎∧𝑏) ⇒𝑐

2) 𝑎⇒(𝑏∨𝑐)

3) (𝑎∧𝑐) ⇔𝑏

4) 𝑎⇔(𝑏⇒𝑐)
