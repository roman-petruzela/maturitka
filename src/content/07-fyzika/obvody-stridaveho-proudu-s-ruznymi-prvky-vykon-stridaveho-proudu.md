---
title: "Obvody střídavého proudu s různými prvky výkon střídavého proudu"
order: 35
source: "MATURITA HADR/FYZIKA-maturitní otázky/35-Obvody-střídavého-proudu-s-různými-prvky-výkon-střídavého-proudu.docx"
---
Střídavé napětí a proud

- __Střídavý proud__ vzniká v obvodu, který připojíme ke __zdroji střídavého napětí__\.
- __Střídavý proud__ mění v elektrickém obvodu v určitých __časových intervalech__ svůj směr v rytmu změn polarity napájecího zdroje\.
- __Střídavé napětí__ je elektrické napětí, které mění svou velikost
- U periodických střídavých proudů se časový průběh opakuje v __pravidelných intervalech – periodách__
- Délka periody – doba kmitu \[ T \]= 1 s je dána kmitočtem f  \[Hz\]
- Nejvýznamnější z periodických střídavých proudů je __proud harmonický \(sinusový\):__

((obrázek vynechán))((obrázek vynechán))

- Harmonický proud nemusí vždy začínat nulou, ale počátek může být __posunut o úhel α \(počáteční fázový úhel\):__

((obrázek vynechán))

((obrázek vynechán))

Obvody střídavého proudu

- __Elektrický odpor R, indukčnost L a kapacita C__ jsou parametry obvodů střídavého proudu
- Má\-li obvod jen jeden parametr, nazýváme jej __jednoduchý obvod střídavého proudu__
- V obvodu může být i více prvků s různými parametry, které tvoří __složený obvod střídavého proudu__

Obvod s odporem

- Rezistorem připojeným ke zdroji __napětí u__ protéká __střídavý proud i__:

((obrázek vynechán))((obrázek vynechán))

((obrázek vynechán))

- Pro střídavý proud s odporem platí __Ohmův zákon__ stejně jako pro obvod se stejnosměrným proudem\. __Amplituda__ střídavého proudu __nezávisí na__ jeho __frekvenci\.__
- __Odpor rezistoru__ je zde __stejný__ jako v obvodu __stejnosměrného proudu__, nazývá se __rezistance__((obrázek vynechán))

Obvod s cívkou \- s indukčností

- Procházející sinusový __proud i__ vybudí střídavý __magnetický tok Φ__, který je ve fázi s proudem i:

((obrázek vynechán))((obrázek vynechán))((obrázek vynechán))

((obrázek vynechán))

- Střídavý proud v cívce vytváří __měnící se magnetické pole__ => __indukuje se__ v ní __napětí__, které má podle __Lenzova zákona__ opačnou polaritu, než zdroj napětí => proud nabývá největší hodnoty __později__ než napětí
- Proud se za napětím zpožďuje a vzniká __záporný fázový rozdíl__

((obrázek vynechán))((obrázek vynechán))

- Bude\-li __proud__ ideální cívkou dán rovnicí:

((obrázek vynechán))

- pak __napětí__ na ideální cívce bude

((obrázek vynechán))

- __Induktance__ ideální cívky

((obrázek vynechán))((obrázek vynechán))

- __Induktance__ je přímo úměrná __indukčnosti__ cívky a __frekvenci__ střídavého proudu
- V technické praxi se k dosažení velkých induktancí používají cívky zvané __tlumivky__

__((obrázek vynechán))__

Obvod s kondenzátorem \- s kapacitou

- Kondenzátor střídavého proudu se v obvodu __periodicky__ nabíjí a opět vybíjí\. __Proud__ je __největší__ v okamžiku, když __kondenzátor není nabitý__ a jeho napětí je nulové\.

((obrázek vynechán))((obrázek vynechán))

((obrázek vynechán))

((obrázek vynechán))

- __Kapacitní rezistance__

((obrázek vynechán))((obrázek vynechán))

- __Proud__ v obvodu s ideálním kondenzátorem je rovněž závislý na __frekvenci__ podle vztahu

((obrázek vynechán))

- Čím vyšší __frekvence__ a čím větší __kapacita__ kondenzátoru, tím větší je __amplituda__ nabíjecího a vybíjecího proudu

Obvod s RLC v sérii

- Jeho prvky mají zpravidla __několik parametrů:__ odpor, indukčnost i kapacitu\.
- Typickým __příkladem__ je sériové spojení prvků s rezistancí, kapacitancí a induktancí\. Takový obvod označujeme jako __obvod s RLC v sérii\.__
- Prvky obvodu prochází __stejný proud__, avšak __napětí__ na jednotlivých prvcích __se liší__ __velikostí__ i vzájemnou __fází__ \(napětí __UR__ má stejnou fázi jako __proud__, napětí __UL__ ho předbíhá a napětí __UC__ se za ním zpožďuje\)\.
- Vzhledem k __fázovým rozdílům__ nemůžeme získat hodnotu výsledného __napětí u__ na celém obvodu

((obrázek vynechán))((obrázek vynechán))((obrázek vynechán))((obrázek vynechán))((obrázek vynechán))

((obrázek vynechán))		((obrázek vynechán))

- Z\.\.\. __impedance__    \[Ω\]
	- charakterizuje obvod jako celek
- Kromě impedance se zavádí ještě __reaktance__
- Reaktance charakterizuje tu část obvodu, v níž se elektromagnetická energie nemění v teplo, ale jen v energii el\. nebo mag\. pole\.

((obrázek vynechán))

((obrázek vynechán))

__Sériové zapojení RLC__

- Absolutní hodnotu celkového napětí vypočteme z Pythagorovy věty a dostaneme vztah

((obrázek vynechán))

- Pro impedanci platí vztah

((obrázek vynechán))

- Mohou nastat tři případy

1\. __XL > XC__ – indukční charakter obvodu

((obrázek vynechán))2\. __XL < XC__ – kapacitní charakter obvodu

3\. __XL = XC__ – sériová rezonance

		((obrázek vynechán))

		= rezonanční frekvence

((obrázek vynechán))

__Rezonanční frekvence__

- Při této frekvenci teče obvodem maximální proud, musí tedy být minimální impedance obvodu:

((obrázek vynechán))

- Aby byla impedance minimální, musí být minimální člen pod odmocninou\. Ten se skládá ze součtu dvou nezáporných členů, přičemž R, L a C jsou konstanty\. První člen na frekvenci nezávisí\. Impedance bude tedy minimální v případě, když bude druhý člen nulový\. Z toho odvodíme, že pro rezonanční frekvenci platí:

((obrázek vynechán))

Výkon střídavého proudu

- Kvůli __neustále se měnící__ okamžité hodnotě střídavého proudu a napětí se mění také elektrický výkon\.
- __Průměrný elektrický výkon__ střídavého proudu lze vypočítat:

((obrázek vynechán))

- kde __U__ a __I__ jsou efektivní hodnoty střídavého __proudu__ a __napětí__, __φ__ je __fázový posun__ mezi __proudem__ a __napětím__, člen __cosφ__ se nazývá __účiník__
- __*Efektivní hodnoty*__* střídavého proudu a napětí jsou hodnoty takového stejnosměrného proudu a napětí, jehož *__*výkon by byl stejný *__*jako je výkon daného střídavého proudu a napětí*
- __Velikost efektivní hodnoty__ střídavého proudu a napětí s harmonickým průběhem:

((obrázek vynechán))

- kde __Im__ je amplituda střídavého proudu a __Um__ je amplituda střídavého napětí

Dioda jako usměrňovač

- Dioda je elektronická součástka se dvěma __elektrodami__
- Obvykle slouží k __usměrňování proudu__, ale existují i jinak specializované diody
- Podle konstrukčního principu a účelu to může být:
	- __elektronka__ – opět se začaly vyrábět \(např\. pro armádu\) Jejich vlastnosti v audio technice nebyly dosud překonány ani MOS tranzistory\.
	- __dvojitá dioda__ – elektronka pro dvoucestné usměrnění
	- __polovodičová dioda__

__Polovodičová dioda__

- mnohostranně využívaná součástka
- __Hrotová dioda__ – historicky nejstarší typ polovodičových diod, základ krystalky
- __Plošná dioda__
- __Fotodioda__ – dopadající světelné nebo jiné záření způsobí v oblasti přechodu P\-N vytvoření dvojice elektron – kladná díra, a tím podle způsobu zapojení dojde ke zvýšení vodivosti nebo ke zvýšení napětí na přechodu P\-N
- __LED__ – svítivá dioda, rekombinace v oblasti přechodu P\-N způsobují vydávání světelného záření
- Zenerova dioda – je schopna propouštět proud oběma směry
- Tunelová dioda, Inverzní dioda
- Schottkyho dioda – Na rozdíl od většiny zde zmíněných diod, nevyužívá P\-N přechodu, ale přechodu kov\-polovodič
- Kapacitní dioda \(varikap, varaktor\)

__Usměrňovač__

- Jestlilže připojíme diodu do obvodu střídavého proudu, pracuje jako __elektrický ventil__
- Prochází jí proud jen v __kladných__ __půlperiodách__ vstupního střídavého napětí, kdežto v __záporných půlperiodách__ napětí obvodem proud neprochází
- Výstupní napětí na rezistoru __RZ__ je __stejnosměrné__ a pulzující \(tepavé\-__obr\. b\)__
- Nastalo __usměrnění střídavého proudu__, přičemž se využívá jen jedna polovina periody střídavého napětí
- ((obrázek vynechán))Dioda pracuje jako __jednocestný usměrňovač__ a obvodem prochází __stejnosměrný proud__
- Pro praktické užití usměrňovače je důležité __omezit pulzaci__ výstupního napětí
- Toho se dosahuje pomocí __kondenzátoru__ o __kapacitě C__ připojeného paralelně k výstupu usměrňovače \(na __obr\. čárkovaně__\)
- V kladných půlperiodách se __kondenzátor nabíjí__ a v __záporných__ půlperiodách se __vybíjí__ přes rezistor s __odporem RZ__
- Kondenzátorem se pulzace usměrněného napětí zčásti vyhladí __\(obr\. c\)__
- Vyhlazení pulzace je tím účinnější, __čím větší__ je __kapacita C__ kondenzátoru a __odpor RZ__ rezistoru
- Když __RZ ⟶∞__, má usměrněné napětí hodnotu odpovídající amplitudě střídavého napětí
- Dále se využívá usměrňovač se 4 diodami k lepšímu usměrnění

((obrázek vynechán))
