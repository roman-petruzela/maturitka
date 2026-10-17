---
title: "Střídavý proud v energetice"
order: 36
source: "FYZIKA-maturitní otázky/36-Střídavý-proud-v-energetice.docx"
---
## Princip generátoru střídavého napětí

- Generátor střídavého proudu = __alternátor__
- Princip generátoru střídavého proudu spočívá v __otáčení vodivé smyčky v magnetickém poli__
- __Alternátor__ používaný v elektrárnách má tyto hlavní části:
	- __rotor__ - část, která koná rotační pohyb; u alternátoru jde o __elektromagnet__
	- __stator__ - část, v níž se indukuje střídavé napětí __(soustava cívek)__; proud se pak odvádí pevnými svorkami, což je jednodušší a vznikají menší ztráty
- __Jednofázový generátor__ je tvořen otáčejícím se závitem v magnetickém poli (tj. mezi pólovými nástavci magnetu).
- V elektrárnách se používá __trojfázový alternátor__, jehož princip je na obr.
- Stator je tvořen __třemi cívkami__, jejichž osy svírají vzájemně úhel 120°. Mezi cívkami se __otáčí magnet__ a v cívkách se __indukují__ střídavá napětí

<img src="/images/content/fyzika/stridavy-proud-v-energetice/01.webp" alt="Ilustrace: Princip generátoru střídavého napětí" width="275" loading="lazy" decoding="async">

- Cívky se nachází v __nestacionárním mag. poli,__ které vytváří otáčivý magnet
- V cívkách se indukuje střídavé napětí __u1, u2, u3__, mají stejnou __amplitudu__ a __frekvenci__ a jsou __fázově posunuta o ⅔ π__

<img src="/images/content/fyzika/stridavy-proud-v-energetice/02.webp" alt="Ilustrace: Princip generátoru střídavého napětí" width="453" loading="lazy" decoding="async">

$$u_1 = U_1 \sin \omega t$$

$$u_2 = U_2 \sin\left(\omega t - \frac{2}{3}\pi\right)$$

$$u_3 = U_3 \sin\left(\omega t - \frac{4}{3}\pi\right)$$

## Trojfázová soustava střídavých napětí

- Z fázorového diagramu z předtím je zřejmé, že __součet okamžitých hodnot__ všech tří napětí je __stále nulový.__ (i vektrorový součet)

$$u_1 + u_2 + u_3 = 0$$

- Toho se využívá k tomu, že jeden konec každé z cívek se spojuje do společného bodu – __uzlu__.
- Ke druhým koncům cívek jsou připojeny __fázové vodiče__
- S uzlem bývá spojen __nulovací vodič.__
- Mezi fázovými vodiči a nulovacím vodičem jsou __fázová napětí u1, u2, u3__ (v síti 230 V); mezi fázovými vodiči je __napětí sdružené u12, u13, u23__ - v síti $400\ \mathrm{V} \approx 230 \cdot \sqrt{3}\ \mathrm{V}$
- __Nulovací (nulový) vodič__ vznikne spojením  vodiču od každé cívky
- __Fázový vodič__ - 1., 2., 3. fáze (ty tři vodiče)
	- __fázové napětí__ je mezi daným fázovým vodičem a nulovacím vodičem v ČR 230 V
- __Sdružené napětí__ je napětí mezi jednotlivými fázemi u12, u13, u23 - v ČR 400 V

<img src="/images/content/fyzika/stridavy-proud-v-energetice/08.webp" alt="Ilustrace: Trojfázová soustava střídavých napětí" width="523" loading="lazy" decoding="async">

<img src="/images/content/fyzika/stridavy-proud-v-energetice/09.webp" alt="Ilustrace: Trojfázová soustava střídavých napětí" width="198" loading="lazy" decoding="async">

fázový - hnědý, černý

ochranný - žlutozelený - uzemnění

nulový - modrý

## Trojfázový alternátor

- viz výše
- Některé spotřebiče jsou konstruované na vyšší výkon (např. __elektromotory__), jsou proto tvořeny ze tří stejných částí, které se připojují k __fázovým vodičům__
- Podle potřebného výkonu se zapojují
	1. do __hvězdy__ (na napětí 220 V, není nutný tak velký výkon)
	2. do __trojúhelníku__ (380 V, výkonnější)

<img src="/images/content/fyzika/stridavy-proud-v-energetice/10.webp" alt="Ilustrace: Trojfázový alternátor" width="499" loading="lazy" decoding="async">

<img src="/images/content/fyzika/stridavy-proud-v-energetice/11.webp" alt="Ilustrace: Trojfázový alternátor" width="228" loading="lazy" decoding="async">

## Elektromotor

- Stroje, které přeměňují __elektrickou__ energii na __mechanickou__
- K cívkám je připojeno __střídavé napětí__, v okolí vzniká __nestacionární magnetické pole__
- Vzniká __točivé magnetické pole__, vektor magnetické indukce uprostřed cívek periodicky mění svůj směr
- Mag. pole se otáčí __se stejnou frekvencí__ jako je frekvence střídavého proudu
- Dva druhy:
	- __synchronní__
	- __asynchronní__

__Synchronní elektromotor__

- __Rotor__ je tvořen magnetem nebo elektromagnetem
- __Stator__, na nějž je přiveden střídavý proud, vytváří pulzní nebo častěji rotující magnetické pole, je tvořem 3 cívkami s jádrem. Rotor se otáčí __synchronně__ s točivým magnetickým polem
- Magnet umístěný v rotoru se snaží uchovat si svoji konstantní polohu vůči __otáčivému magnetickému__ __poli__ vyvářenému průchodem střídavého proudu ve statoru
- Synchronní motory mají řadu __nevýhod__ - je třeba je roztočit na pracovní otáčky jiným strojem nebo pomocným asynchronním rozběhovým vinutím, pokud pod zátěží ztratí synchronizaci s rotujícím polem, skokově __klesne jejich výkon__ a zastaví se
- Využívají se např. jako pohon __gramofonu__, kdy jsou nevýhody vyváženy požadavkem na pravidelnost otáček o celočíselném násobku frekvence elektrické sítě.
- Střídavé napětí spotřebitelské sítě má frekvenci __f = 50 Hz__
- Točivé mag. pole, f = 50 Hz → rotor se otáčí s f = 50 Hz

__Asynchronní elektromotor__

- __Stator__ jako u synchronního
- __Rotor__ je kotva, hliníkové nebo měděné tyče spojené prstenci
- Uprostřed cívek vzniká __točivé mag. pole__, v kotvě vzniká __indukovaný proud__, na kotvu působí magnetická síla, která zvedá otáčky rotoru
- Obě __magnetická pole__ (rotoru a statoru) pak spolu navzájem reagují a vzniká tak __elektromotorická síla__
- Otáčky rotoru __nikdy nedosáhnou__ rychlosti točivého magnetického pole
- Rotor se tedy otáčí s menší frekcencí než je frekvence točivého mag. pole, tzn. je __asynchronní__
- Můžou nastat dva případy:
	- __Nezatížená__ kotva
		- př. pila, která běží na prázdno - rozdíl frekvencí je nepatrný
	- __Zatížená__ kotva
		- př. pila při řezání dřeva, točivé mag. pole se otáčí f = 50 Hz, rotor s f = 47,5-49 Hz
		- frekvence je menší o 2 - 5 %
		- otáčí se nestejně = __skluz__

__Zhodnocení elektromotorů__

- Tiché, jednoduché konstrukce - dlouhodobá životnost, velký výkon
- __Využití__: čerpadla, kompresory, brusky, ventilátory

## Transformátor

- Slouží ke __zvýšení__ nebo ke __snížení__ (transformaci) __napětí__ střídavého proudu
- Jeho princip je založen na __elektromagnetické indukci__

__Jednofázový transformátor__

- Tvoří __dvě cívky__, které jsou na společném jádře z měkké oceli, je uzavřené
- __Primární cívka__ je připojena k střídavému __napětí u1__ a prochází jí __střídavý proud i1__
- Vytváří se __mag. pole__ a v každém závitu primární nebo sekundární cívky se __indukuje napětí ui__
- Celkové napětí na cívkách s __N1__ nebo __N2 závity__:

$$u_i = -\frac{\Delta \Phi}{\Delta t}$$

C1,2 - cívky 1 a 2

u1 - vstupní napětí

u2 - výstupní napětí

N -počet závitů

J - společné jádro

$$u_1 = -N_1 \cdot \frac{\Delta \Phi}{\Delta t}$$

$$u_2 = -N_2 \cdot \frac{\Delta \Phi}{\Delta t}$$

<img src="/images/content/fyzika/stridavy-proud-v-energetice/15.webp" alt="Ilustrace: Transformátor" width="520" loading="lazy" decoding="async">

- Poměr efektivních hodnot proudu vyplývá z rovnosti výkonů v __primární__ a __sekundární__ cívce
- Pro poměr efektivních hodnot indukovaných napětí pak vyplývá __rovnice transformátoru:__

$$\frac{U_2}{U_1} = \frac{N_2}{N_1} = \frac{I_1}{I_2} = k$$

- __k__ je __transformační poměr transformátoru__
- Pro __k__ platí:
	- __k < 1__ se napětí zmenšuje, transformace nahoru
	- __k > 1__ se napětí zvětšuje, transformace dolů
- __C1__ připojíme ke zdroji střídavého napětí s efektivní hodnotou __U1__
- V okolí __C1__ vzniká nestacionární mag. pole
- Pole je nejdřív zesíleno v jádře
- V __C2__ se indukuje napětí s efektivní hodnotou __U2__
- Střídavé napětí __u1__ a __u2__ mají __stejnou frekvenci__
- Ve skutečnosti se transformované napětí zmenší o 2 -10 %, účinnost je 90 - 98 %, z důvodu zahřívání vodiče a spotřebiče
- Pokud nezvažujeme ztráty energie:
	- Příkon P1 se rovná výkonu P2 (platí __zákon zachování energie__)
	- __P = U . I__ → P1 =  U1 . I1 → __U1 . I1 = U2 . I2__

<img src="/images/content/fyzika/stridavy-proud-v-energetice/17.webp" alt="Ilustrace: Transformátor" width="602" loading="lazy" decoding="async">

- __Použití__: nabíječka mobilních telefonů, rádia, televize, transformátorová pájka __↑__
- Napětí střídavého proudu se __zvyšuje__, aby se __zamezilo ztrátám__ způsobeným odporem vodičů
- Proto se u dálkových vedení používají __vysoká napětí__ a __nízké proudy,__ při kterých je přenos el. energie nejúčinnější.
- Pro __trojfázový proud__ se používají __trojfázové transformátory,__ požívá se pro velké výkony, dochází k zahřívání - nutné chlazení

## Elektrárna

- Elektrárna je technologické zařízení sloužící k __výrobě elektrické energie__
- Ta se získává __přeměnou__ z energie vázané v nějakém zdroji. Nejčastěji je tato energie nejdříve přeměněna na energii mechanickou, kterou je následně poháněn __elektrický generátor__
- Z ekologického hlediska rozlišujeme zdroje na:
- __Neobnovitelné__:
	- Tepelné elektrárny
	- Jaderné elektrárny
- __Obnovitelné__:
	- Vodní elektrárny
	- Větrné elektrárny
	- Geotermální elektrárny
	- Solární elektrárny
	- Přílivové elektrárny

## Přenosová soustava energie

- Elektrická přenosová soustava je systém zařízení, která zajišťují __přenos elektrické energie__ od __výrobců__ k __odběratelům__, čímž se míní přenos ve velkých měřítcích
- Distribuce od velkých zdrojů (__elektráren__) k velkým __rozvodnám__
- Přenosová soustava by se dala zhruba přirovnat k dálniční síti – tvoří páteř přenosu elektrické energie a zajišťuje přenosy na __velké vzdálenosti__ a ve __velkých objemech__
- __Alternátory__ v elektrárnách obvykle pracují se __pouze několika kV__
- Při výkonech stovek MW pak z alternátoru teče proud v řádu desítek tisíc ampérů.
- Na __činném odporu__ takového vedení pak vznikají __úbytky__ napětí, přímo úměrné protékajícímu elektrickému proudu, které by při delších vedeních představovaly podstatné __ztráty__ přenášeného výkonu, úměrné druhé mocnině proudu
- Pro přenos na velké vzdálenosti je proto výhodnější použít __vyšší napětí__, kdy pro přenesení __stejného výkonu__ postačí __úměrně menší proud__. Kromě omezení ztrát je pak i realizace dálkových vedení nesrovnatelně jednodušší i levnější
- Napětí elektrického proudu se zvyšuje na vyšší přenosové napětí pomocí __transformátorů__, umístěných zpravidla přímo v areálu elektrárny
- V celé síti je nutné zajistit __rovnováhu__ mezi okamžitou výrobou a spotřebou elektrické energie. Elektrickou energii je totiž __obtížné skladovat__ (náhradou skladů jsou přečerpávací elektrárny případně baterie).
