---
title: "Hardware – doplňkové poznámky (grafické karty, displeje a další)"
order: 7
source: "MATURITA HADR/IT/Tech.docx"
---
1\) Zobrazovací soustava 

__Zobrazovací soustava__ 

__Grafická karta__ 

 

- Základním úkolem je převádět data z počítače do takové formy, aby je bylo možné zobrazit na monitoru 
- Původně grafické čipy \(TV modulátory\) byly integrovány na základní desce 
- Díky vlastnímu specializovanému procesoru \(podporuje zpracování častých grafických výpočtů\), dokáže zpracovat grafiku rychleji než procesor 
- __Integrované grafické karty__ mají malou spotřebu jsou levné a mají nízký výkon 
- __Samostatné grafické karty__ mají vlastní paměť jsou výkonnější, dražší a potřebují náročnější chlazení 
- Samotné grafické karty se k počítači připojují pomocí slotů \(zejména AGP a PCIe\) 

 

Značky grafických čipů \(Jader\) 

1. __ATI \(AMD\)__ 
2. __nVidia__ 
3. __Intel__ 

 

Značky 

1. Asus 
2. MSI 
3. Sapphire 

 

Výběr grafické karty 

1. __Dle práce__ \(Hraní her, grafické práce \(střih videa, Adobe atd\.\), pouze kancelář a internet\) 
2. __Velikost paměti \-__ Čím vyšší, tím lepší? Není úplně pravda\. Jedná se o takový chyták\. \(Musíme si uvědomit, pro jaký účel nám tato grafická karta je\. Tudíž v low\-end třídě \(kancelářské využití\) je nám vysoká paměť k ničemu a jen si připlácíme\) 
3. __Rychlost grafického jádra__ 
4. __Rychlost pamětí__   
5. __Počet a rychlost stream procesorů\. __ 

- Rychlost je udávána v Mhz a zde obecně platí že čím více, tím lépe\. To samé platí i o počtu stream procesorů\. 

1. __Šířka paměťové sběrnice__, i zde platí že čím je šířka větší tím lepší\.  
	1. Šířka paměťové sběrnice se udává v bit \(bitech\) dnes patří mezi standardní šířky 128, 256 a 512 bitů\.  
	2. V low\-end třídě se ještě můžeme setkat s šířkou 64 bitů a jedná se o poměrně velikou brzdu grafické karty\. 

 

*(obrázek vynechán)*

 

__Tvorba 3D obrazu__ 

- obraz se vytváří na základě počítačového modelu, charakteristiky prostředí a okolí 
- kostru modelu tvoří drátová konstrukce \(vytváří se bitmapový obrázek na základě matematických algoritmů\), která se pokryje povrchem \(síť trojúhelníků \- polygonů\), povrchu je přiřazen materiál a vztah k dopadajícímu světlu 

__Fáze tvorby obrazu:__ 

1. Program popíše jak má obraz vypadat a prostřednictvím obrazového rozhraní API se předá ke zpracování hardwaru 
__API:__ 
	- __Microsoft DirectX__ 
	- __OpenGL__ 
	- __Aero__ 
2. Zobrazované těleso se musí matematicky popsat \- povrch tělesa se převede na síť trojúhelníků \(grafické obvody akcelerátoru\) 
3. Vytvoří se povrch vyobrazovaných těles "vymalováním" trojúhelníků 
	- metody: 
		- __stínování__ \(je stanovena barva každého pixelu v trojúhelníku\) 
		- __mapování textur__ \(každý trojúhelník je potažen dvourozměrným vzorkem\) 
4. __Filtrování a vyhlazování obrazu__ 
	- odstranění chvění obrazu při rychlých změnách, vyhlazení hran a podobně 
5. __Viditelnost trojúhelníků__ 
	- stanovení pořadí objektů 
6. __Odeslání snímku ke zpracování do monitoru__ 

 

__Pipeline__ 

- cesta pro zpracování informací 
- vytvářený obraz se rozloží na části většinou trojúhelníky \(polygony\) a každá pipeline zpracuje jednu část obrazu 
- na jeden vykreslený pixel může být aplikována jedna textura za jeden cyklus 
- Počet pixelů vykreslených za jeden cyklus je počet pipeline \* frekvence __\(fill\-rate__\) 
- aby obraz vypadal prostorově musí se na každý pixel aplikovat více textur \(elementární textury \- __texely__\) 
- dnešní karty pracují paralelně \-> mají více pipeline \(za jeden takt se vytvoří více texelů\) 
- každá pipeline je vybavená shardery, které pracují na graf\. kartě \(resp\. na jejích „stream procesorech“\) 
	- __vertex shade__r \- vytváří trojrozměrné objekty, umísťuje je do prostoru a stará se o světelné efekty 
	- __pixel shader__ \- definuje barvu a průhlednost objektů 

 

Hardware grafické karty 

*(obrázek vynechán)*

 

 

__D/A převodník \(RAMDAC\)__ 

- digitálně analogový převodník, který převádí digitlání obraz z operační paměti karty na analogový signál a ten vstupuje do monitoru 

 

__GPU \(Graphics Processing Unit\)__ 

- Zajišťuje rychlé grafické výpočty a změny obsahu videopaměti 
- GPU je v některých výpočtech výkonnější, než CPU 
- Zpracovává 3D geometrii do 2D obrazu 
- GPU je zejména pro vektorové výpočty, které jsou potřeba pro vytvoření grafických scén 
- Obsahuje řadu obvodů, které umožňují přímo pracovat se základními grafickými prvky a tvary, což umožňuje vykreslovat grafické objekty rychleji, než pomocí CPU 
- Akcelerace – urychlovací techniky 

__APU \(Accelerated Proccesing Unit\)__ 

- APU obsahuje, jak CPU, tak i GPU 
- Přináší zlepšení komunikace mezi jádry CPU a jádry GPU 
- Vlivem této integrace se u počítačů výrazně zlepšuje poměr výkon/cena 
- Dnes již klasické použití APU je pro mobilní telefony, netbooky, tablety 

__Paměť grafické karty__ 

- Grafické karty mají svůj procesor GPU, takže vyžadují i svou paměť 
- ukládá se do ní hotový obraz, který se přenáší na monitor 

__*Integrované grafické karty se sdílenou pamětí*__ 

- Grafické karty se sdílenou pamětí využívají část operační paměti počítače k ukládání dat 
- Protože se dělí o paměť s procesorem, který má pro přístup do paměti vyšší prioritu, je zpracování dat pomalejší 
- Určeno pro kancelářské aplikace, sledování filmů a dalších graficky nenáročných aplikací 
- Většina základních desek obsahuje levné integrované grafické karty 
- Základní desky zároveň podporují výkonnější samostatné grafické karty 
- Po připojení samostatné grafické karty se automaticky odpojí integrovaná karta 

__*Samostatné grafické karty s vlastní pamětí*__ 

- Samostatné grafické karty pracují s velkými objemy dat, musí být výkonné a vybaveny pamětí 

__Sloty __ 

- Pro samostatnou grafickou kartu se využívá nejčastěji slot AGP a PCI Express \(PCI\-E\) 
- PCI\-E sloty jsou novější a podporují dvojnásobně vyšší přenosovou rychlost než sloty AGP 
- U výběru karty je třeba zvážit jaký slot naše základní deska podporuje 
- Moderní karty bývají vybaveny jen PCI\-E, kvůli přenosové rychlosti 

Monitory 

 

- Základní výstupové zařízení, které je připojeno ke grafické kartě 
- Nejznámější typy monitorů: 
	- LCD 
	- CRT 

__Základní parametry monitorů__ 

- __Úhlopříčka__ – vzdálenost mezi protilehlými rohy monitoru, udává se v palcích 
- __Rozlišení__ – udává se v pixelech, \(FULL HD\- 1920 X 1080\) 
- __Doba odezvy__ – doba ze kterou se bod na LCD rozsvítí a zhasne v milisekundách  
- __Obnovovací frekvence__ – Udává se v Hertz, počet obnovení obrazu na monitoru – čím je vyšší, tím je obraz monitoru vnímán jako stabilnější 
- __Vstupy__ – __DVI, HDMI, VGA__ 

*(obrázek vynechán)*

 

CRT 

 

- Vyznačují se vyšší spotřebou 
- Velké rozměry i hmotnost 
- Neustále blikání obrazu, dle nastavené obnovovací frekvence \(pohybovala se 60\-120 Hz\) 
- Typicky původním znakem dlouhého sezení před CRT monitorem byla únava až pálení očí 

__*Výhody*__ 

- Ostrost 
- Zobrazení věrohodných barev 
- Doba odezvy 
- Pozorovací úhly 
- Cena  

__*Nevýhody*__ 

- Velikost 
- Spotřeba 
- Vyzařování  

__*Popis funkce CRT*__ 

- Obraz vzniká díky: 
	1. Vyšlou se tři elektronové paprsky ze tří elektronových děl 
	2. Paprsky jsou usměrňovány pomocí elektromagnetického pole vychylovacích cívek 
	3. Paprsky dopadají na stínítko potažené fosforem 
	4. Elektrony díky usměrňování dopadají přesně na určité místo, které se na chvíli rozzáří  

*(obrázek vynechán)*

*(obrázek vynechán)*

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

  

 

LCD \(Liquid Crystal Display\) 

 

- Displej z tekutých krystalů 
- Je\-li propojen s grafickou kartou, dostává informace, které se budou zobrazovat 

__*Výhody*__ 

- Kvalita obrazu 
- Životnost LCD disleje 
- Spotřeba energie 
- Odrazivost a oslnivost  
- Bez emisí  

__*Nevýhody*__ 

- Citlivost na teplotu 
- Pevné rozlišení 
- Vadné pixely 
- Doba odezvy 
- Horší pozorovací úhly 

__*Popis funkce LCD*__ 

- Luminescenční výbojka, světlo z této výbojky se šíří ve formě vln \(sinusoidy\) 
- Světlo prochází přes 1\. polarizační filtr, ale projde jen část světla \(horizontální sinusovky\) 
- Mezi 2 orientačními filtry se nachází skleněné destičky, kde první propouští vertikální světlo a druhá horizontální světlo \(Twisted Nematic\) 
- Mezi těmito destičkami se nachází velmi tenká vrstva tekutých krystalů 
- Molekuly krystalů jsou prozatím ve tvaru spirály a tím pádem světlo, jehož sinusovka na začátku procházela ve vertikální tvaru se obrátila na tvar horizontální, tím pádem projde přes druhou destičku a displej svítí 
- Barevný LCD funguje na stejném principu, ale každý bod je rozdělen ještě na další 3 sub\-body \(sub\-pixely\), reprezentují R G B\. Světlo těmito body prochází zvlášť a tvoří bod jako barevnou tečku 
- Jas můžeme měnit regulací příchozího napětí na elektrodách 

 

*(obrázek vynechán)*

 

 

2\) Tiskárny Scannery  

__Rozdělení__ 

- __impaktní__ – pracují na principu psacího stroje: musí dojít k příklepu raznice na barvící pásku, čímž dojde k přenosu barviva na papír\.  

Nejznámější jsou tiskárny \- řádkové \- s kulovou hlavou, typovým kolečkem \- jehlové 

- __neimpaktní__ – ke vzniku písma dochází dotykem papíru se světelným válcem, tepelnou hlavou,   teplotě závislou barvící fólií, nebo páskou, inkoustem,atd\.  

Neimpaktní tiskárny mohou být buď stránkové nebo řádkové \(maticové\)\.  

__Typy neimpaktních tiskáren:__ \- termální \(tepelné\) \- inkoustové \- laserové \- LED 

__Charakteristika a možnosti tiskáren__ 

- __*Možnosti a rychlost: *__ 
- Rychlost se udává ve „__stránkách za minutu“__ \(PPM\) rychlost je ovlivněna složitostí obrazu a kvality požadované uživatelem\. __Inkoustové__ tiskárny jsou  pomalejší, ale pro domácnost či kancelář dostačující\. 
- __*Barevná nebo černobílá: *__ 
- Tiskárna tvoří barvy používáním subtraktivního míchaní, v tiskárnách se používá model __CMYK\.__ Volba barevné nebo černobílé tiskárny závisí na potřebách zákazníka\.  
- *(obrázek vynechán)*
- __*Kvalita:*__ 
- Kvalita tisku se měří v __„DOTS PER INCH“__ \(DPI\)\. Čím větší DPI tím lepší rozlišení obrázku, čím větší rozlišení tím lepší kvalita, čistota textu a obrázku\. Pro nejlepší kvalitu používejte kvalitní inkoust či toner a papír\. 
- __*Spolehlivost:*__ 
- Tiskárna by měla být spolehlivá, pár věcí které bychom měli brát zřetel při výběru: 
	- __Záruka:__ co obsahuje 
	- __Plánovaný servis:__ servis je založen na předpokládaném užití 
	- __„Mean time between failures \(MTBF\)“:__ tiskárna by měla fungovat určitou dobu bez poruchy 
- __*Koncová cena:*__ 
- Cena nekončí pouze tiskárnou, ale je třeba počítat s barvou, údržbou, papírem a další\. 
- Tiskárna musí mít kompatibilní rozhraní s počítačem, aby mohla tisknou\. Klasicke se používá parallel, USB nebo bezdrátové rozhraní\. Tiskárna může byt připojená i k síti\. 
- __*Druhy připojení*__ 
- __Seriál: __ 
	- Přenos dat je pohyb bitů informacím v jednom cyklu\. Používá se v jehličkových tiskárnách, protože potřebuje rychlý přenos\. 
- __Parallel:__ 
	- Rychlejší než seriál\. přenos dat je vícero bitů informací v jednom cyklu, protože přenosná cesta je širší než u seriál, tak se data pohybují rychleji do tiskárny\. 
- __SCSI: __ 
	- Small computer systém interface 
	- Používá paralelní komunikace k dosažení vyšších přenosových rychlostí 
- __USB: __ 
	- Nejčastější rozhraní při zapojení do PC, které podporuje __PLUG\-AND\-PLAG__, tak je zařízení automaticky detektováno a jsou spuštěny instalace ovladačů\. 

__*Typy tiskáren*__ 

- __*Inkoustová tiskárna*__ 
- Tiskne o vysoké kvalitě jednoduché použití a levnější než lasserové tiskárny\. Kvalita tisku se měří v DPI, vyšší znamená lepší kvalitu obrazu\. 
- K tisku se využívá inkoustová nádrž, které nanáší inkoust na stránku malými otvory, tryskami které jsou na tiskové hlavici\. 
- __Tisková hlavice a inkoustové nádržky__ 
	- Jsou na podvozku, jež je připevněn na pásu motoru\. Jak válec tahá papír ze zásobníku, pás posune podvozek dopředu a dozadu a inkoust je tak vstřikován na papír 
	- Existují dva typy trysek 
		- __Termální \(bublinkové\)__ 
			- Pulsy elektrického proudu ohřívají tělíska, jež zahřívají inkoust, Při zahřátí vznikne v trysce bublina, která způsobí vymrštění inkoustové kapky na papír  
			- Jejich hlavním spojencem je tedy vysoká teplota\. V každé tiskové hlavě se nachází speciální tryska pro každý barevný kanál\. Uvnitř trysky pracuje malý rezistor, který produkuje teplotu okolo 100°C\. Ten způsobí rychlé rozpínání inkoustu, který může uniknout jedině tryskou\. Kapka je tedy vysokou rychlostí "vystřelena" přímo do papíru\. 
		- __Piezoelektrické __ 
			- Tisková hlava v tiskárně pracuje s piezoelektrickými krystaly, což jsou vlastně destičky, které jsou schopné měnit svůj tvar\. Trysky jsou vloženy v komůrkách__ __ z těchto krystalů\. Tyto komůrky jsou roztahovány a zvyšovány a tryska podle toho vystříkne inkoust\. 
- Inkoustové tiskárny užívají obyčejný papír, ale může být použit zvláštní druh papíru pro vytvoření například kvalitních fotografií\. Některé mohou tisknout obou straně, když je tisk dokončen, tak je inkoust vlhký\. Na papír by se neměl 10\-15 sekund sahat\. Pokud je tisk nekvalitní, je třeba použít kalibrační software\. 
- __*Výhody:*__ 
	- Nízká cena  
	- Vysoké rozlišení  
	- Rychlé používaní 
- __*Nevýhody: *__ 
	- Trysky se ucpávají 
	- Náplně jsou relativně drahé 
	- Vlhký inkoust po dokončení tisku 

*(obrázek vynechán)*

  *(obrázek vynechán)*

__*Laserová tiskárny *__ 

- Používají laserový paprsek k provedení rychlého tisku s vysokou kvalitou,  
- hlavní součástí je kovový válec s vrstvou polovodiče \(např\. selen\) na povrchu\.  
- Polovodiče mění při osvícení odpor z přibližně 300 Ω až na cca 2\-3 MΩ, pokud není osvícení povrchu válce, je v celé šířce nabit u korony\.  
- V bodech, které se mají tisknout je válec osvícen laserem, tím je odpor polovodiče v bodě snížen a náboj z povrchu se vybije do středu válce\.  
- __Toner \(jemný prášek\)__ je vlivem otáčení válce nabit na stejnou polaritu válce a přilne k válci pouze na místech, kde byl náboj odstraněn\. 
- U ostatních místech je toner od válce odpuzován\.  
- Následně se toner přenese z válce na papír, který je nabit na opačnou hodnotu než povrch válce\. 
- Povrch je záporně nabitý a válec kladně\. Když oblast, na kterou chceme tisknout zbavíme náboje, tak prášek je přitahován na těchto místech kladně nabitým válcem\.  
- Papír se pod válec dostane ze vstupního zásobníku, je nabit opačným nábojem než povrch válce a toner\. Toner se nábojem přenese na papír\. Toner je potom pomocí vysoké teploty \(180\) a tlaku roztaven a zapečetěn do papíru, následně je papír vložen do výstupního zásobníku\.  
- Laserový paprsek prochází __deflektorem__, což je součástka, která v závislosti na přivedeném napětí proudí světlo\. Napětí je obrazem bit mapy tištěné stránky, Rostoucí zrcátko \(hranol\) rozprostírá paprsek po celé šířce válce\. Po skončení tisku setře stěrač zbytky toneru a žárovka odstraní náboj z předchozí fáze tisku\.  
- __LED tiskárny__ fungují na podobném principu jako tiskárny laserové a často se také mezi laserové tiskárny zařazují\. LED tiskárny se totiž od laserových liší pouze způsobem ozařování válce\. Obraz je vykreslován na selenový válec řadou LED diod a otáčející se válec je v tomto případě osvětlován po řádcích\. I v případě LED tiskáren je hlavní výhodou kvalitní tisk\. 
- __*Výhody*__ 
	- Cena za stránku 
	- Vysoké PPM  
	- Vysoká kapacita 
	- Tisk je suchý 
- __*Nevýhody*__ 
	- Vysoká cena 
	- Toner je drahý 
	- Požaduje vysoký stupeň údržby 

  

*(obrázek vynechán)*

__* *__ 

  

__*Termální \(tepelné\) tiskárny*__ 

- Termální papír je papír, který je chemicky ošetřen a má vysokou kvalitu\. Elektrický proud je vysílán do tepelných součástek u tiskové hlavy, aby se tvořilo teplo\. Teplé oblasti poté otisknout svůj vzor na papír\. \(Jehličky se ohřívají pomocí rámu, na kterém jezdí tisková hlava\) 
- __*Výhody*__ 
	- Vysoká živnost 
	- Tichá 
	- Neplatí se za inkoust či toner 
- __*Nevýhody*__ 
	- Drahy papír 
	- Papír má krátkou trvanlivost 
	- Kvalita tisku 
	- Papír musí být uchován při pokojové teplotě 
	- Nemožnost barevného tisku  

  

__*Jehličkové tiskárny*__ 

- Používají k tiskovou hlavu, která se pohybuje ze strany na stranu a přes barvící pásku naplněnou inkoustem se otiskne jehličky na papír\. Z důvodu tisku mechanickým tlakem mohou vytvářet kopie, pomocí kopíráku\.  
- Každý bod je vykreslen malou kovovou jehlou řízenou elektromagnetem a to buď přímo nebo pomocí malých vahadel\. 
- Jsou výrazně pomalejší oproti laserovým či inkoustovým, ale využívají se například v supermarketu, kde není třeba vysoká kvalita tisku\.  
- __*Výhody*__ 
	- Používá levný inkoust 
	- Používá nepřetržitý tok papíru 
	- Je možné dělat kopie přes kopírák 
- __*Nevýhody*__ 
	- Hlasitost 
	- Kvalita 
	- Omezení barevné možnosti 

*(obrázek vynechán)*

  

  

__*Scannery*__ 

- Zařízení, které umožní převést 2D nebo 3D předlohy do digitální podoby pro další využití, většinou pomocí PC\.  
- První digitální snímek byl vytvořen v roce 1967 

__*Druhy Scannerů*__ 

- __*Čtečky čárových kódů*__ 
- Dělí se na 1D a 2D podle typu čárového kódu\. 
- Využívají paprsku laseru nebo laserové diody mohou být ruční nebo zabudované\. 
- __*Oční*__ 
- Tímto scannerem je nutno přejíždět po snímané předloze\. 
- Nevýhoda je malá kvalita snímku rozlišením snímače a nutno přesného obkládání ze strany uživatele\.  
- Používá pro snímání malých ploch, nebo při nemožnosti umístění předlohy do stolního scanneru\. Dnes již téměř vymizel\. 
- __*Stolní*__ 
- Předlohy se pokládá na sklo, po níže projíždí strojově ovládaní snímací rameno\. 
- Výhoda je jejich levnost, je možná sehnat do 1000 K4 a proto se staly běžnou součástí všech domácností\. 
- Nevýhoda je možnost snímání jen tenkých předloh\. 
- Dražší modely jsou schopné snímat diapozitivy a negativy\. 
- __*Bubnové*__ 
- Předloha je nalepena na rotujícím válci a je snímané paprsek\. 
- Používá se pro snímání velkých předloh nebo tam, kde je potřeba vysokých kvalit, 
- Nevýhodou je vysoká cena, jedná se o nejstarší techniku\. 
- __*3D*__ 
- Nové technologie nám umožnují snímat pomocí laserových paprsků 3D objekt\. 
- Nákladná technologie\- 
- Pro profesionální použití\. 

  

*(obrázek vynechán)*

1957 

__*Parametry scannerů*__ 

- __*Barevná hloubka*__ 
- Udává množství odstínů barev, které je schopen skener nasnímat\. Dříve se používala  
24 bit bar hloubka \(8 bit na kanál\), u současných přístrojů to je 48 bit \(16 bit na kanál\)\.  
- __*Rozlišení obrazu*__ 
- Udává se v DPI \(počet bodů na palec\)\. Značí jemnost snímací paprsku\. Dnes se používá rozlišení mezi 1200 a 5900 DPI\. 
- __*Velikost snímané předlohy*__ 
- __*Denzita*__ 
- Logaritmus poměru intenzity dopadajícího světla k intenzitě světla\.  
- Udávají se dvě hodnoty denzity 
	- __Maximální:__ 
		- Udává maximální rozlišitelnou hodnotu denzity\. 
	- __Dynamický rozsah__ 
		- Udává rozsah denzit, které je scanner schopen sejmout\. 
- __*Digital ice*__ 
- Technologie odstraňující kombinací SW a HW prostředků povrchu a škrábance\. 
- __*Rozpoznání textu*__ 
- Metoda, která umožňuje digitalizaci tištěných textů, s nímž lze pak pracovat jako s normálním PC textem\. 

*(obrázek vynechán)*

  

*(obrázek vynechán)*

  

*Princip skeneru* 

Skener pracuje na principu odrazu světla od předlohy\. Hlavním prvkem skeneru je snímací čidlo, které převádí odražené světlo na elektrický signál\. Uvnitř skeneru se nachází speciální jednotka obsahující optickou soustavu vyzařující světlo a fotocitlivou diodu nebo CCD prvek\. 

Snímač CCD je citlivý elektronický obvod, ve kterém je vytvářen elektrický signál\. Speciální jednotka je uložena pod sklem, na které se položí předloha určená k naskenování\. Snímací mechanismus se uvnitř skeneru pohybuje tak, aby obsáhl celou skenovanou oblast\. Předloha je osvětlena diodou\. Snímací prvek zachytí odražené světlo a převede ho na digitální signál\. 

Skener snímá obraz po řádcích, kdy počet řádků a množství snímaných bodů na rameni ukazuje rozlišení skeneru\. Rozlišení skeneru se udává v dpi \(dots per inch\)\. Čím je dpi vyšší, tím podrobněji je obraz převeden do digitální podoby\. 

*CCD snímač* 

CCD \(Charged Coupled Device\) snímače\. Jedná se o třířádkový snímač, ve kterém každá řádka snímá jednu složku světla \(červená, modrá, zelená\)\. Každý řádek se tedy načítá hned třikrát\. CCD snímač transformuje intenzitu dopadajícího světla na elektrický signál, který se mění na digitální\. Senzory není ovšem zaznamenána barva, ale pouze intenzita dopadajícího světla\. Je proto nutné za pomoci filtrů rozložit světlo na jednotlivé barevné složky RGB a snímat je odděleně\. 

__Nejčastějším typem je plošný skener\.__ 

Jeho nejdůležitější součástí je čtecí zařízení \(snímací hlava\), která se pohybuje pod skleněnou deskou\. Přes ni po jednotlivých řádcích a obrazových bodech čtou předlohu a podle intenzity světla, které se od skenovaného obrázku odráží, se informace o něm převádějí na data a počítač je zpracovává\. V závislosti na rozlišení skeneru se do jednoho palce \(2,54 cm\) vejde nejčastěji až 2 400 obrazových bodů v každém směru \(2 400 DPI\)\. Znamená to, že v jednom čtverečním centimetru může skener rozpoznat téměř 900 tisíc miniaturních políček, které musí převést do počítače\. V každém bodu přitom může být až 16,7 milionu barevných odstínů\. 

3\) Paměťová zařízení 

__*Paměť *__ 

- Pro počítač „životní nutnost“ mikroprocesor z ní čte programy a ukládá do ní výsledky ssvé práce 
	- __Paměti primární__ 
		- CPU s ní bezprostředně spolupracuje __\(operační paměť__\)\. 
	- __Paměti sekundární__ 
		- Odkládá si zde data, které CPU nutně nepotřebuje __\(disky__\) 

__*Paměti mají charakteristické parametry, které popisují jejich kvalitu*__ 

__*Vybavovací doba*__ 

- Rychlost \(v ms\) s jakou rychlostí zapíše nebo ukládá CPU zadaná data 

__*Kapacita paměti*__ 

- Určuje kolik bajtů je možné v paměti uchovat\.  
- Důležitým kritériem je to, zda se paměť po vypnutí počítače vymaže\. 

__*Další*__ 

- V případě RAM podpora „dual Channelu“ zapisování a čtení na dvě RAM současně \(2x4GB paměti jsou rychlejší nežli 1x8gb\) 

__*Typy paměti*__ 

__*ROM*__ 

- Dovoluje pouze čtení z paměti, zápis do ní provádí výrobce 

__*RAM*__ 

- Zápis a čtení 

 

__*Fyzikální princip pamětí*__ 

- U principu je každá paměť tvořena maticí miniaturních elektronický součástek, každá z těchto součástek může nabývat stavu 0,1 bit osm těchto prvků pak tvoří BYTE\.  
- Prvky jsou spojeny vertikálním i horizontálními vodiči, těmito dráty je možné prvky ovládat – číst a zapisovat\. 
- Typ elektronické součástky tvoří paměťový prvek, definuje vlastnosti celé paměti\. 

 

__*Paměti typu ROM*__ 

- Hlavním úkolem je pamatovat si data, když je pc vypnuté\. 
- Používají se pro uskladnění BIOSU 
- Skrz bios se často přistupuje k HW, ale paměti rom jsou pomalejší než ram, proto se při startu pc bios uloží z rom do ram, kde s ním pak pracuje\. Tento proces se nazývá __stínování__ 

__*ROM*__ 

*(obrázek vynechán)*

 

- Paměťová buňka paměti ROM může být realizována jako dvojice nespojených vodičů a vodičů propojených přes polovodičovou diodu\. 
- Jednotlivé buňky paměti ROM je také možné realizovat pomocí tranzistorů 

__*PROM*__ 

- Zápis provádí uživatel pomocí programu 
- PROM zápis nejde opakovat, je trvalý, neměnný  
- Buňku paměti je možné realizovat podobně jako u paměti ROM\. Při výrobě je vyrobena matice obsahující spojené adresové vodiče s datovými vodiči přes polovodičovou diodu a tavnou pojistku z niklu a chromu  Takto vyrobená paměť obsahuje na začátku samé hodnoty 1\. A při zápisu je vyšším proudem tato pojistka přepálena a zapsána hodnota 0 

*(obrázek vynechán)*

  

__*EPROM*__ 

- Možný opakovat zápis, uchovává se pomocí elektrického náboje, který je kvalitně izolovaný\.  
- Je možné přemazat pomocí UV záření a pak lze znova zapisovat nový program\. 
- EPROM poznáme dle okénka na UV záření, jež bude bez důvodu zalepené\. 

__*EEPROM*__ 

- Podobné EPROM 
- Mazaní probíhá elektrickými impulsy 
- Informaci si pamatuje 40 let 
- V ROM i PROM není doba ohraničena 

 

__*Flash poměť*__ 

- je elektricky programovatelná paměť\. 
- Vnitřně je organizovaná do bloků a každý blok lze programovat samostatně\.  
- To je výhodné také při mazání, neboť je obsah ostatních bloků zachován\.  
-  V neposlední řadě se používá také v nových SSD discích\. 
- Mazání a nahrávání pomocí elektřiny 

__*Paměti typu RAM*__ 

- Paměť s níž nejčastěji spolupracuje CPU rychlejší než ROM\. 
- Dá se zapisovat i číst  
- Existuje více typů RAM s různými vlastnosti 

__*Statické RAM \(SRAM\)*__ 

- elektronický prvek 

__*Dynamická RAM \(DRAM\)*__ 

- Buňka tvořena kondenzátorem 
- Nabitý stav – 1, vybitý stav – 0  
- Malá kapacita, brzy se vybíjejí je potřeba dobíjet \- provádět občerstvování \(__refresh__\)  

__*CMOS RAM*__ 

- Vyrobeno technologií CMOS, díky níž se označuje malou spotřebu ´ 
- Používá se pro zápis parametrů BIOSU 
- Programem SETUP jsou v ní uložena životně důležitá data k konfiguraci PC 
- Po vypnutí je paměť CMOS napájena z baterie na desce 
- Často je v CMOS integrovaný obvod 
- Hodiny reálného času \(pamatuje si datum a čas\) 

 

__*Druhy paměti RAM*__ 

- Paměti mohou pracovat v různých režimech 
- Jaký režim bude používat záleží na chipsetu desky\.  

__*SDRAM \(synchronous dynamic\)*__ 

- Pracuje při stejném taktu jaký je nastavený na paměťové sběrnici\.  
- Vybavovací doba je 8,10,12 ns už se nepoužívají  

__*DDR \(double date rate\)*__ 

- Přenáší data na obou hranách \(náběžné i sestupné\) řídicího impulsu\. 

*(obrázek vynechán)*

řídicí impulsy 

- Během jednoho taktu, tak paměť DDR provede dvě operace, nabízejí dvojnásobnou propustnost\.  
- Výroba vychází z SDRAM – je levná a implementace je snadná\. 

__*DDR II *__ 

- Stejný způsob jako DDR, pracuje s poloviční frekvencí, menší napětí, nižší spotřeba a je možné si ji taktovat na vyšší rachlost 

__*RDRAM *__ 

- Jméno po výrobci 
- Odlišný způsob přenosu dat než klasické paměti umožňuje díky malé šířce sběrnice umístit do chipsetu základní desky\. Více paralelních kanálu a zvýšit tak propustnost celé paměti 
- Nevýhoda je vyšší cena 

  

__*Externí paměti \(vnější\)*__ 

- Slouží k slouhodobému ukládání dat 
- Velká kapacita, nízká rychlost 
- Není nezbytná, ale je důležitá, standardně CD ROM atd\. 
- __Disketa __ 
	- Disketová mechanika je napájena speciálními kabelem přímo ze zdroje\. 
	- Princip čtení a zápisu obdobná jako u HDD, pouze však hlavičky se přímo dotýkají magnetického povrchu desky 
	- Oboustranný magnetický nosič informace, kotouč je umístěn v tuhém obalu 
	- Tři druhy 
	- 3,5“ 720 KB až 1,44 MB 
	- 5,23“ 360KB až 1,2 MB 
	- ZIP disketa – 100,250 a 750 MB 
	- Dnes se již nepoužívá, nevyhovuje v žádném ohledu \(kapacita, velikost\) 
- __CD\-ROM, CD\-RW__ 
	- Velkokapacitní médium s kapacitami 250, 630, 700, 800, 900 MB\. Data jsou zaznamenávána mechanicky, pomocí lisováním nebo laserem\.  
	- CD\-ROM mechanika slouží ke čtení kompaktních disků, čte se pomocí laseri a optické soustavy 
	- Připojuje se pomocí rozhraní IDE nebo SATA 
	- CD mí na povrchu odrážku ve formě spirály ve které jsou uložena data\. 
	- Na CD nelze vypálit přímo 0/1\. Je nutné data zakódovat a pro záznam se používají výstupy a prohlubně  
- __DVD\-ROM, DVD\-RW__ 
	- Podobný princip, vyšší kvality 
	- Jednovrstvé, jednostranné \- 4,76 GB 
	- Dvouvrstvé, jednostranné \- 8,5GB 
	- Jednovrstvé, oboustranné \- 9,4 GB 
	- Dvouvrstvé, dvoustranné\- 17 GB 
	- Nelze přehrát v CD\.ROM ale DVD\- ROM dokáže přečíst CD  
- __FLASH paměti__ 
	- Zařízení pro uchování dat, která se dají přepisovat 
	- Do PC se připojují většinou přes USB vyšší fyzická odolnost, nemá pohybové části, velká kapacita \(až 1 TB\) 
	- K ukládání dat používá flash paměť unipolární tranzistory s plovoucími hradly, tzv\. buňky, do kterých je ukládána digitální informace\. Jedno hradlo je ovládací, druhé je plovoucí a izolované od okolí vrstvou dioxidu\. K uložení informace dochází tím, že se v izolovaném hradle zachytí přiváděné elektrony\. Přítomnost elektronů v buňce modifikuje její prahové napětí\. Změna v napětí pak vydává potřebnou informaci při čtení buňky\. 

4\) Pevný disk a optická médi

Pevný disk a optická média 

- Slouží k dlouhodobému uchovávání dat či jejich přenosu 

Hard disk \(HDD\) 

- Hard Disc Drive, HDD 
- První komerční pevné disky se objevily v 60\. letech 
- Předchůdcem pevných disků je magnetická páska a magnetický buben 
- Používají se k trvalému uchování většího množství dat 
- Velmi výhodný poměr kapacity a ceny \(jsou i relativně rychlé\) 
- Disk není napěťově závislý 
- Data se při odpojení disku od napájení neztrácejí \(ukládají se na magnetickém principu, nikoliv elektrickém\) 
- Současný konkurent je SSD \(je rychlejší, má menší kapacitu a je dražší\) 
- HDD se kromě počítačích používají i ve spotřební elektronice \(MP3, videorekordéry atd\.\) 
- Propojení pomocí SATA \- dříve IDE \(se základní deskou\) 
- Napájení pomocí SATA dříve molexem 

 

Parametry HDD 

- Kapacita \(stovky GB až několik TB\) 
- Přístupová doba – doba za kterou disk vyhledá požadovaná data několik ms \(obvykle 8ms\) 
- Doba vystavení – čas nutný k pohybu hlav nad určitou stopu 
- Doba čekání – čas, kdy disk čeká na začátek dat \(začátek čtení\) na dané stopě 
- Rychlost otáčení – 5400, 7200 nebo 10 000 otáček za minutu 
- Přenosová rychlost – desítky MB/s 
- Velikost paměti cache HDD – 512 kB 
- Cena se pohybuje různě, cca od 1000 Kč 
- Několik druhů velikostí: 
	- 3, 5“ – klasická velikost, využívá se ve stolním PC 
	- 2,5“ – pro notebooky 
	- Různé speciální velikosti \(př\. 1,8“ pro některé iPody\) 

  

HW struktura HDD 

- HDD se skládá z několika __kotoučů \(ploten\)__, které se po celou dobu, kdy je disk připojený k napájení točí 
- Data jsou na povrchu disku organizována do soustředných kružnic zvaných __stopy__ 
- Každá stopa obsahuje pevný nebo proměnný počet __sektorů__ z důvodu efektivnějšího využíti povrchu 
- Sektor je nejmenší adresovatelná jednotka disku 

*Řadič HDD* 

- „řídící centrum“ disku 
- Zodpovídá za vystavení hlav 
- Spolupracuje se sběrnicí a zajišťuje přenos mezi diskem a mikroprocesorem 

Uložení dat na HDD 

- Data jsou na disku uložena pomocí zmagnetizování míst na magneticky tvrdším materiálu záznamové vrstvy 
- Záznam provádějí záznamové a čtecí hlavy 

Výhody HDD 

- Nevyžaduje trvalé napájení  
- Na rozdíl od magnetické pásky umožňuje přímý přístup k jednotlivým blokům záznamů 
- Výhodný poměr kapacity a ceny disku i s dostatečnou rychlostí čtení a zápisu dat 

Nevýhody HDD 

- Mechanické řešení, které má větší spotřebu elektrické energie 
- Vyšší hmotnost  
- Je náchylné na poškození při nešetrném zacházení \(otřesy nebo náraz při zápisu/čtení dat\) 

Fyzický vs Logický disk 

- Fyzický disk je mechanická komponenta  
- Logický disk je pouze čistě softwarový  
- Typicky jeden fyzický disk má jeden logický disk, který je označován písmenem „C:“ 
- Fyzický disk, lze také rozdělit na několik samostatných oblastní, následně se pak uživateli budou hlásit jako více logických disků třeba „C:“, „D:“, „E:“ 

Tabulka rozdělení disku 

- Tabulka s popisem rozdělení disku se nachází v takzvaném MBR \(Master Boot Record\) 
- V tomto prostoru se obvykle nachází i zavaděč, který rozhoduje, ze kterého oddílu bude následně zaveden operační systém 

Výhody logických disků 

- Umožní nám to „rozsekat“ disk do určité hierarchie  
- Možnost mít na jednom počítači více operačních systémů 
- Lze nainstalovat Linux, Max OS X, Windows, či jiné operační systémy na různé diskové oddíly pevného disku a při startu počítače si jednoduše vybrat jeden z nich, který chceme používat 
- Někdy lze nainstalovat i dva OS na jeden logický oddíl, ale bývá to těžší a OS se navzájem omezují 
- Uchování dat, například při poškození systému 

 

Nevýhody logických disků 

- Snižuje to celkové místo dostupné pro ukládání uživatelských dat na disk  
	- OS musí vytvořit na každém oddílu speciální oblast pro správu konkrétního souborového systému 
- Snižuje se celkový výkon disku v systémech, kde je často k datům přistupováno paralelně na více oddílech, jelikož čtecí a zápisová hlava disku je tak nucena se hýbat sem a tam, aby mohla přistupovat k datům na každém oddílu \(netýká se SSD\) 
- Může zabránit využití celé kapacity disku 
- Pokud máme dva oddíly, na každém 3 GB volného místa \(6 GB celkem\), nemůže na disk nahrát 4 GB soubor 
- Zpomalí se přesun dat mezi různými diskovými oddíly jednoho pevného disku\. OS musí zkopírovat celý obsah přesouvaných dat i přesto, že data zůstávají na stejném disku 
- U jednoho diskového oddílu, stačí pozměnit administrační část, data na disku se nepřesunou 

*(obrázek vynechán)*

 

Organizace HDD 

- Kovové nebo skleněné plotny, pokryté tenkou magnetickou měkkou vrstvou 
- Nad každou plotnou se vznáší magnetická čtecí hlava, která zajišťuje samotné čtení a zápis z pevného disku 

  

Organizace diskové plotny 

- Magnetický povrch plotny disku se dělí na stopy, sektory a cylindry 
- Toto fyzické uspořádání disku se označuje jako geometrie disku 

*Stopy* 

- Soustředěné kružnice, které jsou očíslovány od nulté stopy na vnějším okraji 
- Každá stopa je rozdělena na sektory, které mají zároveň velikost nejmenší adresovatelné jednotky disku 

*Sektory* 

- Dnes je velikost sektorů nejčastěji 4096 B, tedy 4 kB 
- Kvůli rozdílné délce stop u obvodu plotny a blíže k jejímu středu nemohou být všechny stopy rozděleny na stejný počet sektorů, a proto se využívá tzv\. Zone Bit Recording: 
- __Zone Bit Recording__ – metoda rozdělující stopy disku na sektory dle jejich délky, ale k přístup k datům činí složitějším 

*Cylindr* 

- Označení pro všechny stopy ploten, které jsou nad sebou a tvoří tak pomyslný dutý válec 
- Díky cylindrům se hlavy pevného disku využívají rovnoměrně a disk má tak vyšší výkon 
- Proto disk se při zapisování neplní po plotnách, nýbrž po cylindrech, aby se průběžně využívaly všechny hlavy, jež jsou umístěny na jednom společném rameně 

  

Skutečné uspořádání dat 

- OS pracují s jednotkou označovanou jako __cluster__ 
- Jednotlivé clustery v sobě shlukují určité množství sektorů, jejich počet se může lišit v závislosti na použitém souborovém systému \(NTFS, FAT32\)  
- Velikost clusterů je volitelná, takže pokud často pracujeme s malými soubory, jsou vhodnější clustery s menší velikostí a opačně 
- Dříve sektory měly stejnou velikost a nezáleželo na jeho fyzickém umístění na povrchu disku, data byla na sobě hodně natěsnána, a to se negativně projevovalo na magnetické stálosti záznamu – docházelo k vzájemnému ovlivňování sousedních sektorů 

Funkce 

- Data jsou na disk uložena zmagnetováním míst, jež se provádí pomocí cívky čtecí hlavy a elektrického proudu 
- Pomocí cívky je realizováno i čtení 
- V ní se při pohybu nad různě orientovanými zmagnetizovanými místy indukuje elektrický proud a ten je řídící jednotkou disku převáděn zpět na 0 a 1 
- Počet čtení a zápisů na disk je při běžném používání téměř neomezený 

Princip zápisu dat 

- Zápis a čtení na disk mají na starost hlavičky 
- Pokud cívkou prochází elektrický proud, dojde k vytvoření magnetického toku, která se uzavírá ve štěrbině mezi hlavičkou a plotnou a tím ovlivňuje i záznamovou vrstvu pevného disku 
- V závislosti na směru toku proudu při této operaci dochází k zmagnetizování daného místa určitým směrem 
- Mezi dvěma zmagnetizovanými místy vznikají tzv\. magnetické rezervace 
- __JEDNODUŠE:__ Disk je zmagnetizován v jednom směru, a když cívka začne produkovat elektřinu \(vytvoří se magnetické pole\), to začne měnit směr magnetického pole na daném místě na disku \(\-\) 0 a \(\+\) 1 \- záleží jaký směr bude produkovat elektromagnet \. Čtecí hlava následně data dokáže číst \(magnetické rezervace a ty následně vyvolají magnetický tok, který je zpracováván na elektrický impuls \(1,0\) 

*(obrázek vynechán)*

Princip čtení dat 

- Čtení dat probíhá opačným způsobem nežli zápis 
- Během pohybu hlaviček nad povrchem plotny reagují cívky právě na magnetické rezervace a ty následně vyvolají magnetický tok, který je zpracováván na elektrický impuls 

Fragmentace disku 

- Disky zapisují soubory větší než jeden cluster nahodile na volná místa disku 
- Tím vzniká fragmentace disku \(„rozházení“ dat po disku\) 
- Po nějaké době jsou volná místa po disku roztroušená a promixována již s plnými, a tak vznikají při zápisu a čtení dat čím dál větší prodlevy \(čtecí hlavička hledá správné místo\) a klesá i výkon disku 
- __Defragmentace disku__ – řeší problém s fragmentací, provádí se z prostředí OS a jejím úkolem je poskládat roztroušené fragmenty jednotlivých souborů tak, aby byly co nejblíže sobě 
- Data na disku se zahustí a tím se zrychlí i operace s daty 

SSD disky 

- Současné pevné \(HDD\) disky disponují hned několika nedostatky 
	- Některé jsou hlučné, pohyblivé části uvnitř 
- Řešením jsou SSD disky, které navíc disponují vysokým výkonem 
- Zápis a čtení dat průměrného SSD disku se pohybuje blízko hranice 500 Mb/s, u některých se rychlosti pohybují i v řádech tisíců  
- Nevýhodou je obří cena disku oproti klasickým HDD a menší kapacitou 
- Jejich výhodou je nízká energetická náročnost 

  

Optická média 

- První optické disky se objevily v 60\. letech 
- Na rozdíl od HDD plotny nemá soustředěné do kruhové stopy o různých délkách, ale má jedinou spirálovou stopu začínající u středu disku, na které jsou stejně dlouhé sektory 

*(obrázek vynechán)*

Vlastnosti 

- Standartní disk CD ROM má průměr 120 mm  
- Tloušťka disku je 1,2 mm 
- Šířka stopy je 600 nm 

Rozdělení optických disků 

- Podle typu záznamového média 
	- __CD__ \(Compact Disc\) 
	- __DVD__ \(Digital Versatile Disc\) 
	- __BD__ \(Blu\-Ray Disc\) 
	- __HD DVD__ \(High Definition DVD\)  
- Podle možnosti zápisu/přepisu informace 
	- __ROM__ – paměťové médium je výhradně pro čtení 
	- __R__ \(Recordable\) – Lze jednou zapsat a zapsanou informaci již nelze vrátit\. Paměťové médium obsahuje speciální vrstvu barviva, do které zle informaci jednorázově zapsat vypálením pitu pomocí laseru ve vypalovací mechanice 
	- __RW__ \(Rewritable\) – Umožňuje zapsat informaci a následně i vymazat a zapsat novou \(cca 1000 přepisů\)\. Paměťové médium obsahuje záznamovou vrstvu ze speciální chemické sloučeniny, které mění působením tepelné energie laseru svůj stav z krystalického \(vysoce odrazivý\) na amorfní \(rozptyluje laserový paprsek\) Zároveň má schopnost působením teplené energie laseru se vrátit do původního stavu\. 

  

Čtení z optického disku 

- Laserovým paprskem 
- Laserový paprsek vystřelí na polopropustné zrcadlo 
- Zrcadlo odrazí paprsek směrem k disku 
- Povrch CD je opatřen odrazivou vrstvou, která způsobí odraz laserového paprsku zpět 
- Právě v tomto okamžiku se rozhoduje o přečtené hodnotě\. Síla odrazu závisí na tom, zda se paprsek odráží od výstupku nebo prohlubně 
- Paprsek se odrazí směrem na polopropustné zrcadlo, které ho již neodrazí, ale propustí na fotodiodu 

Zápis CD\-R 

- Lze zapsat pouze jednou 
- Zápis dat na CD\-R médium je prováděn laserovým paprskem 
- Použitý laser, ale musí mít vyšší výkon než čtecí laser 
- Při zápisu se laserový paprsek zaměří na požadované místo a krátkým impulsem se provede záznam dat 
- Laserový impuls způsobí narušení vrstvy organického barviva 
- Tím vznikne obdoba prohlubně, od které se čtecí laserový paprsek neodrazí 

*(obrázek vynechán)*  

Zápis CD\-RW 

- Zápis lze přepsat 
- Zápis na CD\-RW se provádí laserovým paprskem, který ohřeje slitinu aktivní vrstvy na teplotu 500\-700 stupňů Celsia 
- Slitina se tak velmi rychle začne tavit a při následném ochlazení dojde k fázové přeměně do amorfního stavu 
- Mazání média se provádí zahřátím slitiny pod teplotu tání, avšak nad krystalizační teplotu \(200 stupňů Celsia\) po dostatečně dlouhou dobu\. Po ochlazení se fáze slitiny navrátí zpět z amorfního stavu do základního krystalického, a médium se chová jako prázdné 

*(obrázek vynechán)*

5\) Napájecí zdroj a počítačová skříň  

Počítačová skříň \(PC case\) 

- Hardware pro počítač, který slouží k mechanickému upevnění všech ostatních vnitřních dílů a částí počítače 
- Uchovává nám komponenty bezpečně uzavřené 
- Standardizované rozměry, úložné šachty a montážní otvory 

Konstrukce 

- Obvykle je skříň vyrobená z plechu \(ocel, hliník, karbon, dural atd\.\) 
- Skříň také může být z plastu anebo jiných materiálů 
- Skříně mívají odnímatelné víko nebo boční stěny 
- Jsou různé konstrukce od obyčejných \(od klasické „bedny“, po zajímavé konstrukce \(vláčky, různé nápady a druhy fantazie, nepatří však již k běžným standardům\)\) 
- __Vnitřek skříně __ 
	- Upevňovací plochy a otvory – připevnění PC komponent 
	- Otvory na větráky 
	- Hlavní plocha pro připevnění základní desky 
	- Přihrádky na upevnění úložného zařízení \(HDD, SDD\) 
	- Otvor na mechaniku 
	- Místo pro upevnění napájecího zdroje 
- __Zadní část skříně:__ 
	- Otvory, do kterých zapadnou I/O konektory základní desky 
	- Přípojné I/O konektory \(USB, HDMI, DVI, VGA, PS2 atd\.\) 
- __Přední část skříně:__ 
	- Obsahuje ovládací/indikační prvky a další rozšiřující konektory 
	- Zapínací tlačítko 
	- Reset 
	- LED indikující zapnutí 
	- LED indikující činnost disku 
	- USB, audio, FireWire 

Tvar a rozměry skříně 

- Skříně se vyrábějí v různých velikostech a jsou standardizované  

Desktop 

- Skříně „naležato“ 
- Leží na své největší straně 
- Základní deska je v přirozené vodorovné poloze 
- Jsou málo oblíbené 
- Typy: desktop, slim, booksize, desknote 
- Desktop má tvar klasické krabice 
- pokládá se na stůl\.  
- Na počítačovou skříň tohoto typu lze umístit monitor\.  
- Monitor však nesmí být příliš těžký, aby nedošlo k promáčknutí vrchní stěny počítačové skříně\.  
- Obecně se doporučuje nestavět na desktop monitory s úhlopříčkou 17" a více\.  
- Desktopy se používaly spíše dříve\. 
- Dnes dává většina uživatelů i výrobců počítačů přednost jiným typům skříní\.  

 

Výhody 

- Deska je položena v rovině, výhodné pro větrání grafické karty 
- Karty jsou ve své poloze a teplo, které vyvíjejí se přirozeně dostává mimo karty, respektive základní desky 
- snadný přístup k disketovým mechanikám, k mechanice CD\-ROM a ke konektorům na zadní stěně počítače\. 

Nevýhody 

- Zabírají více místa 
- Nedají se rozšiřovat o přídavné karty atd\. 

 

Tower 

*(obrázek vynechán)*

 

Skříně „nastojato“ 

- Leží na své nejmenší stěně 
- Základní deska je umístěna svisle 
- Patří mezi nejoblíbenější 
- Typy: tower, minitower, miditower, bigtower 

Výhody 

- Zabírají méně místa 
- Přirozené upevnění mechanik 

Nevýhody 

- Základní deska je umístěna svisle a tím přídavné karty leží vodorovně 
- Některé karty, které vyvíjejí největší teplo \(grafické karty\) jsou tím pádem umístěny chladičem dolů \(což je z hlediska chlazení nejhorší možný stav\) 
- Skříně vyžadují kvalitnější větrání  

Další varianty  

- __Minitower__ 
	- Minitower \(malá věž\) má pro další rozšiřování přibližně stejně volného místa jako desktop\. 
	- Na pracovním stole však zabere více místa, protože na počítačovou skříň typu tower těžko postavíte monitor\. 
	- Monitor proto musíte postavit vedle počítačové skříně\.  
	- Výhodnější a častější řešení u tohoto typu spočívá v umístění minitoweru na zem \(pod pracovní stůl\)\.  
	- K mechanikám počítače by však měl být snadný přístup \(neměli byste kvůli každému zasunutí diskety nebo cédéčka lézt pracně pod stůl\)\.  
- __Miditower__ 
	- Miditower \(středně velká věž\)  
	- disponuje velkým prostorem pro další rozšiřování a modernizaci\.  
	- Staví se většinou na zem pod pracovní stůl  
	- Tato varianta počítačové skříně se většinou používá u výkonnějších počítačů, které se používají v kancelářích, firmách, ale i v domácnostech\. 

 

- __Bigtower__ 
	- Bigtower \(velká věž\) obsahuje mnohem více volného místa pro další rozšiřování počítače než předchozí typ počítačové skříně\.  
	- Staví se téměř vždy na zem a používá se u výkonných počítačů \(serverů\)\.  

 

All in one PC 

- Počítač integrovaný do monitoru 
- PC case je spojený spolu s obrazovkou/monitorem 
- Nemá externí case, ale vše je obsaženo v jednom 
- Tento typ využívá například Apple produkt Mac 

*(obrázek vynechán)*

Výhody 

- Zabírají nejméně místa 
- Žádné zbytečné kabely vedoucí z počítače 
- Nižší spotřeba  

Nevýhody 

- Obtížná oprava 
- Nevhodný pro práci vyžadující vysoký výkon 

 

Chlazení PC a Case  

- Potřebné pro obvod nadbytečného tepla z počítačové skříně \(casy\), které produkují komponenty 
- Zajišťuje dodržování přijatelné teploty pro komponenty, aby nedošlo k jejich poškození 
- Komponenty bývají nejčastěji navrhnuty tak, aby produkovaly nejméně tepla 
- Moderní komponenty jsou navrženy tak aby se zpomalily anebo vypnuly v případě, že dosáhnou určité tepelné hranice 

Typy chlazení 

*Počítačové větráky* 

- Nejrozšířenější 
- Dostávají teplo z počítačové skříně \(case\) pomocí vyfoukávání teplého vzduchu ven 
- Často se zanášejí a zpomalují se 
- Je nutné je pravidelně čistit 

*Chladič* 

- Přídavné zařízení 
- Instaluje se do casy, většinou přímo na komponentu, odvádí nežádoucí teplo 
- Princip – efektivněji odvádí teplo z komponenty, které pak také efektivněji předává chladícímu zařízení \(vzduch \+ větrák, vodní chlazení\) 

*Vodní chlazení* 

- Většinou se používá destilovaná voda 
- Teplo je vyzvednuto tekutinou od komponenty a přeneseno na radiátor, odkud si ho převezme větrák 
- Výhodou je, že tekutina dokáže odvést více tepla nejednou než například vzduch 

Napájecí zdroj 

- Zařízení, sloužící ke zpracování střídavého napětí dodávaného ze sítě, na nízké stejnosměrné napětí, které je potřebné k napájení počítačových komponent 
- Komponenty potřebují většinou – 3\.3 V, 5 V nebo 12 V 
- Ve světě existuje více napájecích voltáží zdroje  
	- 120\-127 V – Severní Amerika, Jižní Amerika, Japonsko, Tchaj\-wan 
	- 220\-240 V – Zbytek světa, v Česku 203 V/ 50 Hz 
	- Některé zdroje mají přepínač pro změnu vstupního napětí mezi 230 V a 115 V 
- Porucha zdroje může způsobit zničení dalších komponent 

  

Rozdělení zdrojů 

*AT* 

- Poskytuje 5 V nebo 12 V 
- Zapínal se spínačem napojeným přímo na síť  
- Nebylo dostupné softwarové zapínání 

*ATX* 

- Poskytuje 3\.3 V, 5 V a 12 V 
- Již obsahuje softwarové zapínání 
- Obsahuje 20\-ti pinový konektor pro základní desku 

  

*ATX 12 V* 

- Standard pro současné počítačové zdroje 
- Osahuje 20\-ti pinový konektor \+ 4 pinový konektor \(12 V\) pro základní desku 
- 4 pinový konektor slouží pro napájení napěťových regulátorů, které vytváří napětí pro procesor 
- ATX 12 V 2\.0 – obsahuje 24 pinový konektor 

Co vše zdroj napájí 

- Základní desku 
- Pevné disky 
- Mechaniky \(optické \(CD\-ROM, DVD\), páskové, magnetické \(ZIP, JAZ, FDD\), atd\.\) 
- Grafickou kartu 
- Aktivní chladiče – vodní chlazení, větráky atd\. 
- Další zařízení \(např\. mechaniky pro externí HDD, některé speciální moduly, kontrolky, podsvícení aj\.\) 

6\) Základní deska

Základní deska 

- Základní hardware všech počítačů 
- Propojuje jednotlivé součástky do funkčního celku, poskytuje jim elektrické napájení 
- Má na starost napájení některých komponent a jejich vzájemnou komunikaci \(sběrnice\) 
- Postupem času se do základní desky začaly zabudovávat komponenty, které se dříve museli zapojovat zvlášť \(zvukové, síťové karty, řadiče, USB\) 
- Jednotlivé desky se liší typem, velikostí, soketem atd\. 

Dělení základních desek 

Podle procesoru 

- Základní desky se především dělí podle podporovaných procesorů  
- Dnes především rozeznáváme dvě „rodiny“ desek, podporující procesory: 
	- Intel \(Pentium, Celeron\) 
	- AMD \(Athlon, Duron\) 

 

Podle formátu základní desky 

- Jedná se o standart, který určuje, jak se mají vyrábět základní desky, ale také skříně \(case\) a zdroje napájení 

*AT* 

- Starší formát, používá se jen ve starých počítačích, musí mít starší napájecí zdroje 
- Napájení desky pomocí 6ti pinového konektoru \(5V, 12V\) 
- AT zdroje byly zapínány a vypínány síťovým vypínačem na počítači 
- Nelze vypnout softwarově 
- Existuje i tzv\. Baby AT, která je menší a liší se rozložením komponent 

*ATX* 

- Novější a dnes nejpoužívanější formát desek 
- Obsahuje širokou škálu konektorů 
- Napájení desky pomocí 20ti pinového konektoru \(3\.3V, 5V, 12V\) 
- ATX zdroje se zapínají a vypínají přímo z desky, toto umožňuje například softwarové vypnutí počítače 
- Jsou lépe navržené 

Micro\-ATX 

- Je o 25% menší než klasická ATX deska 
- Deska je stejná jako ATX, jen s menšími rozměry 
- Slouží pro sestavování malých počítačů \(omezená rozšiřitelnost PC\) 

*BTX* 

- Vytvořen společností Intel, jako potenciální nástupce ATX 
- Řeší problémy s odvodem tepla  
- Formát BTX ztratil význam poté co Intel přistoupil k vývoji úsporných procesorů  
- Formát BTX využíval Mac Pro od Apple 
- Vývoj BTX byl v roce 2006 zastaven 

 

Sběrnice 

- Svazek vodičů, kterým proudí informace mezi jednotlivými komponenty \(0 nebo 1\) 
- Od rychlosti sběrnice, se odvíjí rychlost PC \(pokud je sběrnice pomalá, ani nejrychlejší CPU nepomůže\) 
- Lze rozdělit na skupiny: 
	- Řídících 
	- Adresových 
	- Datových vodičů 
- Rozdělení dle základních parametrů: 
	- __Šířka přenosu__ – počet bitů, které lze zároveň po sběrnici přenést 
	- __Frekvence__ – maximální frekvence, se kterou může sběrnice pracovat 
	- __Rychlost__ \(propustnost\) – počet bytů přenesených za jednotku času 

Patice procesoru 

- Soket či Slot je konektor na základní desce určený pro připojení procesorů 
- Každá kombinace patice a čipsetu podporuje jenom určitou řadu procesorů  

Soket 

- Procesory určené pro soket mají tvar čtverce  

Slot 

- Procesory určené pro slot mají tvar přídavné karty 

Základní součásti desky 

CPU \(Central Processing Unit\) 

- Také znám jako procesor nebo mikroprocesor 
- CPU je mozek počítače  
- Je zodpovědný za běh programů, aritmetické a logické výpočty 
- Procesor se při práci zahřívá, a proto je nutné jej chladit 

  

APU \(Accelerated Processing Unit\) 

- Pokud je GPU přímo zakomponováno v CPU nazývá se procesor APU 
- Obsahuje tedy jak CPU, tak GPU 
- Odstraňuje řadu problémů díky zlepšené komunikaci mezi jádry CPU a jádry GPU 
- Vlivem této integrace se u počítačů s APU výrazně zlepšuje poměr výkon/cena 
- Dnes již klasické APU je pro mobilní telefony, netbooky, tablety atd\. 

 

RAM \(Random Access Memory\) 

- Operační paměť 
- Paměť s náhodným přístupem 
- Přístup k operační paměti je mnohem rychlejší než k vnější paměti 
- Slouží k dočasnému ukládání dat operačního systému a programů po dobu spuštění 
- RAM je napěťově závislá 

BIOS \(Basic Input/Output Systém\) 

- ROM paměť, složí pouze ke čtení, 
- Působí jako základní ovládací prvek mezi hardwarem a softwarem 
- BIOS obsahuje kód potřebný k ovládání klávesnice, obrazovky, mechaniky, sériové komunikace a další funkce 
- Parametry se nestavují většinou pomocí programu zvaného SETUP 
- SETUP je možné spustit při bootování počítače 
- SETUP bývá uložen nejčastěji v permanentní paměti počítače – Flash ROM \- či CMOS RAM 
- Špatné nastavení BIOSu může způsobit zpomalení anebo nefunkčnost počítače 

CMOS RAM 

- Je v ní uložena základní informace o konfiguraci počítače a o jeho hardwaru  
- Paměť s malou kapacitou 
- Je energeticky závislá 
- Napájena malým akumulátorem na základní desce \(malá kulatá 3 V baterie\) 
- CMOS RAM obsahuje: 
	- Čas 
	- Informace o typech a kapacitách HDD/SDD/Floppy disků 
	- Typ využívaných přídavných karet \(síťová, zvuková, grafická\) 
	- Kapacita operační paměti 
	- Pořadí jednotek pro zavádění systému 
	- Různá povolení/zákazy 

Cache Memory \(vyrovnávací paměť\) 

- Vyrovnávací paměti mezi rychlým a pomalejším zařízením 

Rozšiřující sloty 

- Umožňuje zapojení přídavných karet, např\. zvukovou, grafickou, síťovou kartu atd\.  
- Určité druhy se převážně liší přenosovými rychlostmi a schopnostmi napájet připojená zařízení 
- Druhy slotů: 
	- __ISA__ – dnes se již nepoužívá, sloužila třeba k připojení grafické, zvukové karty 
	- __EISA__ – dnes se již nepoužívá, rozšíření ISA slotu 
	- __PCI__ – dříve používaný slot pro všechny karty, nestačí současným grafickým kartám 
	- __AGP__ – slot navržený speciálně pro grafické karty, rychlejší než PCI 
	- __PCI\-Express__ – nástupce PCI a AGP, funguje jako univerzální sběrnice, je nejrychlejší 

 

Chipset \(čipová sada\) 

- Je jeden nebo více integrovaných obvodů \(čipů\), které jsou navrženy ke vzájemné spolupráci 
- Sada se stará o komunikace mezi procesorem, sběrnicemi, sloty, řadiči a dalšími součástkami na základní desce 
- Pojem __můstek \(bridge\)__ se používá jako název pro přemostění dvou zařízení/komponent 

*North Bridge* 

- Také nazýván memory controller 
- Má za úkol tok dat mezi CPU a RAM, proto se také vyskytuje blízko CPU 

*South Bridge* 

- Také nazýván input/output controller 
- Ovládá komunikaci mezi pomalejším a rychlejším zařízením 

Switche a Jumpery 

- Slouží k nastavení některých parametrů základní desky 
- Polohy jednotlivých Jumperů určují nastavení základní desky 
- U moderních desek se místo nastavování v Jumperů využívá nastavování v BIOSu 
- Jejich používání již není nutné 

I/O porty 

- VGA, HDMI, USB, PS/2 \(myš/klávesnice\), LAN, FireWire  

 

  

*(obrázek vynechán)*

 *(obrázek vynechán)**(obrázek vynechán)**(obrázek vynechán)*

7\) Mikroprocesory a komunikace s okolím

Mikroprocesor 

- Je „mozkem“ počítače 
- Slouží k zpracování instrukcí od programů 
- Některé instrukce zpracovává sám 
- K provedení některých dalších instrukcí používá různé komponenty počítače __\(např\. operační paměti, disky, displej nebo tiskárny\)__ 

Součásti mikroprocesoru 

- __Řadič nebo řídící jednotka__, která zajišťuje řízení součinnosti jednotlivých částí procesoru dle prováděných strojových instrukcí 
- __Sada registrů__ pro uchování operandů a mezivýsledků 
- Přístup k registrům je mnohem rychlejší než přístup k RAM připojené k procesoru pomocí sběrnice 

Logický obvod 

- Je jádrem každého mikroprocesoru 
- Dokáže zpracovat sadu jednoduchých mikroinstrukcí 
- __Mikroinstrukce__ jsou jen jednoduché příkazy 

Instrukční sada 

- Instrukční sada poskytuje programátorům přívětivější prostředky pro napsání složitějšího aplikačního programu 

Program napsaný v mikro instrukcích 

- Převod instrukční sady na mikroinstrukce, které je mikroprocesor schopen řešit 

Registry 

- Malá a velmi rychlá paměť, kterou procesor využívá při své činnosti 
- Často sem přesouvá data z operační paměti, aby je mohl zpracovat 
- Nepotřebná data z registrů jsou zpět zapisována do operační paměti 

Rozdělení mikroprocesorů 

Podle instrukční sady 

RISC \(Reduced Instruction Set Computing\) 

- Procesory s redukovanou instrukční sadou 
- Nemají složité instrukce 
	- Př\. Násobení provádí tak, že spolu několikrát za sebou sečtou číslo \(3\*4 = 3\+3\+3\+3\) 
- Jejich návrh je zaměřen na jednoduchou, vysoce optimalizovanou sadu strojových instrukcí 
- Používá se architektura load\-store 
	- Celkový počet instrukcí RISC procesoru mlže být paradoxně vyšší, než u jiných architektur \(musí si __mnohokrát ukládat a načítat data\)__ 
- Obsahuje relativně velké množství registrů – kvůli častému ukládání a načítání  
- Použití: 
	- Servery, laserové tiskárny, v osobních počítačích 

CISC \(Complex Instruction Set Computing\) 

- Procesory s kompletní instrukční sadou 
- Obsahují složité instrukce 
- Procesor obsahuje relativně nízký počet registrů 
- Použití v osobních počítačích 

RISC vs CISC 

- Složitost CISC procesorů vede k problémům při výrobě: 
	- Velká spotřeba materiálu 
	- Větší pravděpodobnost vady 
	- Komplikovaný návrh 
- Procesory RISC jsou rychlejší, levnější, jednodušší  
- CISC se více uplatňuje u osobních PC 
- Ovšem stále více se začínají uplatňovat prvky procesorů RISC 

Podle počtu jader 

- V současné době vývoj spěje k dodávání více jader do CPU 
	- Jednojádrové 
	- Vícejádrové – procesor, který v jednom pouzdře nebo na jednom čipu integruje více CPU\. Jádra spolu mohou navzájem komunikovat, spolupráce jader se obecně provádí prostřednictvím RAM\. Efektivnější je sdílená cache paměť 

Podle šířky slova \(v bitech\) 

- Zjednodušeně řečeno – s jak velkými čísly dokáže procesor počítat 
- Počet bitů, které je procesor schopen zpracovat v jednom kroku 
- Pokud mikroprocesor nemá dostatečnou šířku slova na práci s číslem, může být akce rozdělena do více kroků 

Patice procesoru 

- Soket či Slot je konektor na základní desce určený pro připojení procesorů 
- Každá kombinace patice a čipsetu podporuje jenom určitou řadu procesorů  

Soket 

- Procesory určené pro soket mají tvar čtverce  

Slot 

- Procesory určené pro slot mají tvar přídavné karty 

Procesor 

CPU \(Central Processing Unit\) 

- Také znám jako procesor nebo mikroprocesor 
- CPU je mozek počítače  
- Je zodpovědný za běh programů, aritmetické a logické výpočty 
- Procesor se při práci zahřívá, a proto je nutné jej chladit 

  

APU \(Accelerated Processing Unit\) 

- Pokud je GPU přímo zakomponováno v CPU nazývá se procesor APU 
- Obsahuje tedy jak CPU, tak GPU 
- Odstraňuje řadu problémů díky zlepšené komunikaci mezi jádry CPU a jádry GPU 
- Vlivem této integrace se u počítačů s APU výrazně zlepšuje poměr výkon/cena 
- Dnes již klasické APU je pro mobilní telefony, netbooky, tablety atd\. 

 

Sběrnice 

- Svazek vodičů, kterým proudí informace mezi jednotlivými komponenty \(0 nebo 1\) 
- Od rychlosti sběrnice, se odvíjí rychlost PC \(pokud je sběrnice pomalá, ani nejrychlejší CPU nepomůže\) 
- Lze rozdělit na skupiny: 
	- Řídících 
	- Adresových 
	- Datových vodičů 
- Rozdělení dle základních parametrů: 
	- __Šířka přenosu__ – počet bitů, které lze zároveň po sběrnici přenést 
	- __Frekvence__ – maximální frekvence, se kterou může sběrnice pracovat 
	- __Rychlost__ \(propustnost\) – počet bytů přenesených za jednotku času 

Historie 

- Vývoj mikroprocesorů začal po 2\. sv\. válce 
- První počítač ENIAC 
	- Pro výpočty dělostřeleckých tabulek pro americkou armádu 
	- Dokončen až po válce 
- V 70\. letech začalo docházet ke zmenšování procesorů, které dříve byly velké jako místnost 

Použití procesorů 

- PC, ráda, televize, chladničky/mrazáky, mobilní telefony, pračky, tiskárny atd\. 

IRQ \(Interrupt ReQuest\) 

- Označení signálu, kterým procesor žádá o pozornost 
- Zažádá o přerušení probíhajícího procesu za účelem provedení důležité akce 
- Některé procesory mají řadič přerušení integrovaný 
- Řadič vyhodnocuje priority přerušení, umožňuje některá přerušení ignorovat a pamatuje si, která přerušení čekají na vyřízení 

Postup přerušení 

1. Zařízení sdělí řadiči přerušení, že potřebuje provést přerušení 
2. Řadič upozorní CPU 
3. Když se CPU dostane do stavu, kdy je ochotné přerušení přijmout, přeruší probíhající výpočet 
4. Zeptá se řadiče na nejdůležitější nezamaskované čekající přerušení a spustí jeho obsluhu 
5. Obsluha informuje řadič o dokončení obsluhy přerušení  

Historie procesorů 

- Prapůvodní procesory se skládaly z obvodů obsahující velké množství tranzistorů, rezistorů, elektronek a kondenzátorů 
- Teprve v 70\. letech začala miniaturizace procesů, které dříve byly velké jako místnost 
- Nejdříve byly složeny z několika desítek nebo stovek integrovaných obvodů, když se pak podařilo umístit základní obvody procesoru do jediného integrovaného obvodu, vznikl mikroprocesor 

Typy procesorů – historie  

*Intel* 

- Intel 4004 \(první 4 bitový mikroprocesor\) 
- Intel 8080 \(8 bitový mikroprocesor, který se stal základem prvních 8 bitových osobních PC\) 
- Intel 8086 \(16 bitový mikroprocesor, první z architektury x86\) 
- Pentium Pro a Pentium II \(Nové výkonnější jádro P6\) 
- Pentium 4 \(nový design, architektura NetBurst, nová instrukční sada SSE2, Hyper\-threading \(technologie umožňující se procesoru tvářit jako 2 logické procesory\) 
- Core 2 Duo a Quad \(nová architektura Core, méně se zahřívají, jsou celkově rychlejší\) 

*AMD* 

- Am286 
- Am386 
- Athlon 64 
- Athlon 64 X2 
- Athlon II 
- Duron 
- Phenom 

Typy procesorů – současnost 

*Intel* 

- Core I3 
- Core I5 
- Core i7 
- Core i9 

*AMD* 

- Ryzen 
- Vishery FX 
- FX\-8350 

8\) Viry

__Počítačový virus__ je program, který může infikovat jiné programy tím, že k nim přidá vlastní kopii\. Touto infekcí se může virus šířit v počítači nebo síti tak, že si uživatelé infikují vlastní programy\. Každý infikovaný program se může chovat jako virus a tím se virus šíří\. První zmínky o virech na "velkých" počítačích se objevují již kolem roku 1972, první publikace o těchto virech jsou z let 1973\-1974\. Viry se časem stávají složitějšími, v roce 1986 začínají vznikat tzv\. Hardviry \(viry, které svůj kód instalují do hardware\-částí počítačů\)\. 

1983 – poprvé definován počítačový vir – MS DOS 

  

__Funkce:__ vkládá sebe do jiných programů, následně provádí většinou škodlivou činnost\. 

  

__Vlastnosti virů__ 

- Ve většiny případů nemohou poškodit HW počítače 

  

__Projevy PC virů __ 

- Zpomalení systému 
- Destrukce dat 
- Znemožněná činnosti OS 
- Selhání vybavení 
- Využití PC v síti botnetu\(zombie\)  
	- Zombie \- počítač připojený k Internetu a který je napaden 
	- může být použit pro další počítačové útoky\.  
	- Mnoho zombie počítačů může tvořit síť nazvanou botnet 
		- slouží k rozesílání spamu na email a též k zahlcení cílového serveru\.  
		- Mnoho vlastníků těchto nakažených počítačů mnohdy ani neví, že je jejich počítač zombie\. 

  

__Pojmenování PC virů__ 

- Alabama 
- Brain 
- Christmass tree 
- Chemobyl  
- ILOVEYOU 

 

__Speciální případy Infiltrace__ 

1. __Spyware__ 

- Využívá internetu k odesílání dat z počítače bez vědomí uživatele\. 
- Odcizována pouze statistická data\. Šíří se hlavně ve sharewaru\. 

1. __Adware__ 

- Pop\-up okna, reklamy, zahlcují ostatní programy\. Znepříjemňuje práci 

1. __Hoax__ 
	- Poplašné, falešné zprávy\. Varují před neexistující hrozbou 
2. __Dialer__ 

- Starší virus, automaticky vytáčel telefonní čísla\. 

 

__Základní dělení virů__ 

- __Trojské koně__ 
	- Není schopen sebe\-replikace a infekce souborů, slouží jako nositel viru\. Většinou spustitelný \.exe soubor\. 
	- __Keylogge__r – sledování \(záznam\) znaků zadávaných z klávesnice \(Krádeže hesel\) 
	- __Spyware__ – sleduje uživatele a jeho zvyklosti při surfování na Internetu a posílá o tom zprávy 
	- __Backdoo__r – trojský kůň obsahuje síťovou službu, kterou může útočník použít pro získání přístupu do systému přes počítačovou síť 
		- Zadní vrátka 
		- Client\-Server virus 
		- \(typicky skrytá\) metoda vstupu do programu nebo počítačového systému\. 
		- Pro svůj vnik do operačního systému mohou backdoors obejít firewall například tím, že se vydávají za webový prohlížeč\. 
		- často jsou zneužívána  hackery či vládními organizacemi \(např\. NSA\)  
	- __Spam server__ – rozesílání nevyžádané elektronické pošty \(e\-mail\) z napadeného počítače \(např\. zombie\) 
- __Worms \(Červi\)__ 
	- Poprvé Morrisův červ, 90 léta\. 
	- Nižší sítová úroveň než viry\. 
	- Nešíří se ve formě infikovaných souborů, ale síťových packetů\. \(většinou jako příloha e\-mailu\)\. 
	- __Techniky možného šíření__ 
		- Dvojtá přípona \(např\. \.PCX\.EXE \- Windows zpravidla zobrazí pouze první, takže uživatel si myslí, že se jedná o obrázek \(\.PCX\), ne spustitelný soubor \(\.EXE\)  
		- HTML scripty, které zajišťují automatické spuštění přílohy\. Proti červům se můžete chránit nastavením vyšší úrovně bezpečnosti ve vašem e\-mailovém klientovi\. Novější verze e\-mailových klientů mají tuto bezpečnější úroveň již nastavenou\.__ __ 
- __Logic bomb__ 
	- je škodlivý software zanesený do počítačové infrastruktury \(typicky podnikové sítě\) s cílem spustit nežádoucí činnost poté, co nastanou předem definované „události“\.  
	- __Rozbuška__ je algoritmus navázaný na sledování určité události\. Časté jsou časové bomby, trojští koně, kteří spouštějí bomby vázané na určitá výročí, významné dny \(1\. dubna – Apríl\) apod\. Jindy může jít o určitý počet dní od proniknutí do systému, objem dat v podnikové databázi, počet souborů na disku apod\. Podmínkou fungování bomby je, aby její rozbuška byla spolehlivě spouštěna a tak mohla sledovat výskyt události a spustit samotnou akci\. 
	- __Akce__ je kód, který je rozbuškou aktivován\. Neškodné bomby spustí např\. aplikace na hostitelském počítači, často však bývají bomby vytvářeny s cílem maximálně poškodit systémy v dosahu – vymazat dostupné disky, komplikovaně poškodit data v databázi informačního systému apod\. 

 

- __Souborové viry__ 
	- Bezesporu nejrozšířenější skupina počítačových virů\.  
	- Napadají spustitelné soubory operačního systému  
	- Terčem infikace se však mohou stát i jiné souborové varianty 
		1. __Jsou to prodlužující viry__, které své tělo zkopírují nejčastěji na konec infikovaného programu 
		2. __přepisující viry__, které svým tělem přepíší úvod programu \(to má za následek jeho porušení a tím pádem i nefunkčnost\); 
		3. __duplicitní viry__, které specifickým způsobem infikují pouze programy s příponou EXE tak, že v pracovním adresáři vytvoří duplicitní soubor se stejným jménem s příponou, která má v hierarchii MS při spuštění přednost před EXE\-tvarem\.,  
- __Rezidentní viry__ 
	- Je přítomen v paměti \- je rezidentní \- a může tak neustále ovlivňovat činnost počítače\. Velkou výhodou rezidentního viru je, že si nemusí sám hledat programy vhodné k napadení\. Virus stačí sledovat, se kterými soubory uživatel pracuje, a útočit na ně\. 
- __Boot viry__ 
	- je vir umístěný v boot \(zaváděcí\) části disku\.  
	- do paměti zaveden jako první program z disku či diskety 
	- má díky časnému zavedení k mání  
		1. veškeré informace o počítači hned po jeho spuštění  
		2. kontrolu nad všemi spouštěnými programy, což mu umožňuje ovlivňovat i jejich chod\.  
	- díky svému časnému zavedení nemůže spoléhat na vlastnosti operačního systému 
	- musí se spokojit s omezenými službami BIOSu\.  
	- Nemůže se tedy například kopírovat do souborů  
- __Multi\-paritní viry__  
	- \(kombinace boot a souborových\)\. 
	- Dokáží infikovat nejen Partition tabulku pevného disku, ale i spustitelné soubory\. 
	- Mohou použít libovolný postup souborové infekce 
	- Jediná technicky poněkud obtížnější pasáž spočívá v tom, že multipartitní virus se po svém zavedení ze systémové oblasti do paměti musí chvíli chovat trpělivě – počkat, až bude dokončeno zavádění operačního systému a teprve poté převzít kontrolu nad "vyšší úrovní" služeb\.  

__*Citace*__ 

- V obecné češtině znamená doslovný úryvek textu či výroku\. 
- V odborných prezentacích má jiný význam \- Formální odkaz na výsledek, metodu či myšlenku v jiné publikaci\. 
- Jsou součástí každé odborné publikace\. 
- Texty z jiných děl můžeme použít dvěma způsoby: 
	- __Přímá citace__ \- V uvozovkách, často kurzívou, hned za citaci napsat zdroj\. Používat málo, v přiměřené míře\. 
	- __Parafráze__ \- Přepis myšlenek jiných autorů vlastními slovy\. Uvozovky se nepoužívají, avšak zdroj musíme uvést na místě kde parafráze končí 
	- __Netextové části__ \- Obrázky, Ilustrace a podobné\. Nesmíme do obrázku zasahovat ani ho měnit, také zde musíme uvést zdroj\. 
- __Zásady__ 
	- Důsledně citovat všechny použité zdroje\. 
	- Citujte pouze literaturu kterou jste četli\. 
	- Citujte i přeložené pasáže z cizojazyčných zdrojů\. 
	- Využívejte odborné a důvěryhodné zdroje\. 
	- Nespoléhat jen na Google a Wikipedii, hledejte odborné články v odborné literatuře\. 
	- Na zdroj použité literatury odkazujte v seznamu na konci práce\. 
	- Stejné formátování pro všechny citace 

__*Autorská Práva*__ 

- Je součástí duševního vlastnictví 
- V česku upraveno zákonem, v mezinárodním právu je základem několik mezinárodních úmluv\. 
- Nechrání myšlenky, chrání pouze konkrétní díla 
- Podle principů v __Bernské úmluvě__ vzniká autorské právo ve chvíli, kdy je dílo vyjádřeno v jakékoli vnímatelné podobě\. 
- Osobní autorská práva trvají během života autora, majetková práva po dobu jeho života a 70 let po smrti\. 
- Je možno udělit licencí na používání licencovaných děl 
- Ochrana autorským právem je často symbolizována znakem následováno jménem autora a rokem\. 

  

__*Software*__ 

__Softwarové licence__ 

- Softwarová licence je právní nástroj, který umožňuje používání a redistribuci software, který je v České republice chráněn Autorským zákonem\. 
- Softwarové licence jsou komplikované, jejich výběr si vybírá autor software\. 
- Často se používá forma EULA, která umožňuje použít před\-vytvořenou licenci a autor software ji může libovolně upravovat\. 

  

__Druhy licencí softwaru vývojář__ 

- __BSD Licence__ 
	- Pro svobodný software, umožňuje volné šíření licencovaného obsahu, pouze vyžaduje uvedení autora a informaci o licenci spolu se zřeknutím odpovědnosti za dílo\. Jedná se upravenou licenci GPL\. 
- __MIT Licence__ 
	- Svobodná licence, lze použít jak pro volně dostupný software s možností zasahováním do kódu, tak pro proprietami software \(SW s uzavřeným kódem, autor upracuje licenci EULA a často znemožňuje zasahování do kódu\) 
- __GNU General Public License \(GNU GPL\)__ 
	- Svobodná licence, která vyžaduje, aby byla odvozená díla dostupná pod toutéž licencí\. 

__Druhy licencí softwaru – uživatel__ 

__Shareware__ 

- Jde o zkušební verzi, jinak placeného sodtwaru, Mívá omezené nekteré funkce, mnohdy i dobu funkčnosti\. 

__Trialware__ 

- Program má časově omezenou licenci, Zpravidla to bývá do 30 dní\. Po uplynutí této doby obvykle přestane fungovat\. Dál jej můžete používat jen po zaplacení plné verze\. 

__Public domain__ 

- Jedná se o software, u kterého se jeho tvůrci dobrovolně vzdali svých autorských práv\. Takovéto programy můžete jakkoliv upravovat i volné šířit\. 

__Lite verze a demoverze__ 

- Funkčně omezená verze programu, nejčastěji se setkáváme s demoverzemi her 

__GPL__ 

- Jde o obecně veřejnou licenci\. Tento software můžete volně sdílet i upravovat 

__Opensource__ 

- Tyto programy bývají většinou zdarma\. Mají přístupné zdrojové kódy a můžete je tak upravovat\. 

__Freeware__ 

- Tyto programy bývají většinou zdarma\. Ale pozor, někdy ne tak úplně\. Některé freeware se např\. nemohou používat ke komerčním účelům apod\. 

__Plná verze zdarma__ 

- Nepleťte si tyto programy s freeware, tento software nelze volné šíčit, jedná se o neomezené komerční programy\. 

__Adware__ 

- Programy bývají zdarma, ovšem v programu se zobrazuje reklama \(většinou stahována z internetu\)\. 

9\) Operační systém \(vysvětlení pojmu, druhy, architektura OS \(i s nákresy\)\) 

Operační systém 

 

Systémový správce prostředků 

- OS tvoří podmnožinu softwarů 
- Základní programové vybavení počítače 
- Zaveden při startu počítače do paměti 
- Zůstává v běhu do jeho vypnutí 
- Podstatě __program, který nám umožňuje počítač ovládat__ 
- Tvoří rozhraní mezi aplikačními \(uživatelskými\) programy a hardwarem 
- Vývoj je mnohem složitější a náročnější než vývoj obyčejných programů 

  

Rutina 

- Funkčně vymezená část kódu, nejčastěji ve formě podprogramu  

Proces 

- Je instan__cí__ programu 
- Proces vzniká první vykonanou instrukcí a končí úplně poslední 

*Vlastnosti* 

- Každá rutina výpočetního systému, může být vykonávána pouze v rámci procesu i několika procesy 
- Jednu rutinu mohou vykonávat dva procesy najednou  
- Multitasking – střídání procesů 
- Ve výpočetním systému musí v každém okamžiku existovat alespoň jeden proces 
- První vzniklý proces je bootovací proces 
- Ostatní procesy vznikají na úkor bootovacího procesu 
- Procesy vznikají jako reakce na požadavek jiného procesu \(rodičovského\) – výjimka je bootovací proces 

Paměťový region \(paměťová buňka\) 

- Souvisle adresovaná oblast paměti přidělena procesoru  
- Může k němu přistupovat více procesů najednou 

OS jako správce 

- Hlavní účel této správy spočívá ve vytváření přesně definovaného a bezpečného prostředí pro procesy, a to ve dvou následujících těsně provázaných směrech: 
	1. __Vytvoření tzn\. Virtuálního PC__ – rutiny OS vytvářejí jednotné rozhraní, které skrývá jemné rozdíly na úrovni fyzických zařízení, toto jednotné rozhraní má charakter virtuálního PC 
	2. __Nezávislost jednotlivých procesů__ – pro každý proces běžící v rámci OS musí rutiny OS vytvářet iluzi, že je jediným procesem, který kdy běžel, běží a bude běžet v rámci dané instance OS 

Správa prostředků 

- Přiděluje a odebírá procesům systémové prostředky počítače \(operační paměť, procesor, pevný disk, I/O zařízení\) 

__Hardwarové prostředky__ \(fyzické\) 

- Mohou je tvořit všechny komponenty PC, včetně periferií  
	- __Centrální \(Důležité__\) – procesor, operační paměť 
	- __Vnější paměti__ – HardDisk, DVD\-ROM atd\. 
	- __I/O__ – klávesnice, myš, monitor 

__Softwarové__ \(logické\) 

- Jsou vytvářeny rutinami OS za využití jiných prostředků, jak fyzických tak i logických  
	- __Centrální__ – proces, paměťová buňka 
	- __Logické \(nízkoúrovňové\)__ – logický disk, logický terminál 
	- __Dílčí__ – GUI okno, soubor a jeho spustitelná verze  
	- __Virtuální__ – virtuální paměť, síťový disk, virtuální tiskárna 
	- __Synchronizační a komunikační__ – semafor, mutex, roura 
	- __Síťové prostředky__ – TCP/IP, HTTP, FTP 

 

Pohledy OS 

__Funkční pohled__ 

- Je softwarový správce prostředků \(hardware, software\) 
- __Hardware__ – deska, procesor 
- __Software__ – proces  
- Spravuje softwarové prostředky a hardwarové prostředky 

__Systémový pohled__ 

- OS je tvořen množinou rutin 
- Na základě vzájemného volání lze rutiny organizovat do několika vrstev 
- Nejnižší leží vrstva rutin, které přímo přistupují k hardwaru 
- Rutina by správně měla komunikovat pouze s vrstvou, která je buď hned nad ní, anebo pod ní 
- Každý vrstva nabízí vyšším vrstvám přesně definované rozhraní 

Typy operačních systémů 

OS koncových uživatelů 

- Osobní operačn systémy využívající uživatelé běžných PC nebo mobilních zařízení 
- Dominantní OS je Microsoft Windows s podílem na trhu přibližně \(83%\) 
- MacOC společnosti Apple INC\. Je na druhém místě \(11%\) 
- Varianty Linuxu jsou na třetím místě \(1,5%\) 

OS serverů a superpočítačů 

- V superpočítačích a velkokapacitních serverech 
- Používán operační systém Linux \(používán pro svou bezpečnost a spolehlivost\) 

  

Jádro OS 

- Patří sem rutiny, které bezprostředně přistupují k hardwaru počítače 
- Tyto rutiny zajišťují tzv\. virtualizaci, nezbytnou k zajištění nezávislosti jednotlivých procesů 
- Obsahuje rutiny zajišťující základní logické prostředky 

Architektura OS 

- OS jsou dány různými požadavky atd\.  
- Kolik OS tolik architektur  

Dělení dle úrovně spolupráce rutin 

- Všechny se doplňují 

  

1. __Monolitické__ – s těsným propojením rutin 
2. __Hierarchické__ \(vrstevnaté\) – spolupráce rutin omezena hierarchicky  
3. __Klient\-Server__ – plně distribuované  

Druhy architektur 

*Monolitické OS* 

- Pouze u nejjednodušších OS 
- Výhoda je jednoduchost 
- Dnes se již nepoužívají nahrazeny jinými architekturami  

  

*(obrázek vynechán)*

  

- Jádro tvořeno souborem rutin \(R1, R2, R3 atd\.\) 

Rozhraní jádra 

- Využívají ho systémové procesy i běžné aplikace 
- Chrání aplikace 
- Často provázeno i změnou režimu privilegovanosti procesoru, neboť jedině tak zle jádro ochránit před destruktivním chováním aplikace  
	- __Neprivilegovaná režim \(uživatelský\)__ –přistupuje pouze k části OP a nesmí provést privilegované instrukce 
	- __Privilegovaný režim \(systémový\)__ – Režim jádra, vykonávají se rutiny jádra\. Neomezený přístup do operační paměti 
- __Příklad__ OS: MS DOS, Solaris, Windows ME 

*Hierarchické OS* 

- Typická pro OS 
- V dnešní době neexistuje OS, který by neobsahoval rysy hierarchické architektury __\(UNIX\)__ 
- Rutiny OS jsou uspořádány do vrstev, postupně obalují HW a nabízejí vyšším vrstvám pevně definované rozhraní 
- Systém vyžaduje, aby rutiny každé vrstvy přímo volali pouze vrstvy bezprostředně nižší  
- Nelze z cela dodržet \-> setkáváme se i s přímým voláním hlouběji zanořených rutin  

*(obrázek vynechán)*

Pojmy 

- __API__ – rozhraní pro volání systémových služeb \(vrstva funkcí\) 
- __HAL__ – uvnitř OS, vytvářena mezivrstva, která usnadňuje programování ovladačů jednotlivých zařízení 
- __Virtualizátor paměti__ – simulace HW ve virtuálním světě 
- __Přepínač kontextů __ 
- __Dispečer systémových služeb__ – řídí provoz  

 

*Klient\-server OS* 

- Snižuje výkon systému, relativně pomalá 
- Omezená konkurence schopná  
- Hlavní změnou proti hierarchickému modelu \-> vyčleňuje všechny „zbytečné“ rutiny z jádra do specializovaných systémových procesů – serverů  
- V jádře zůstávají pouze zcela nezbytné rutiny pro virtualizaci paměti, přepínání kontextů a komunikaci procesů 
- Osekané jádro se jmenuje mikrojádro – nabízí ostatním procesům pouze základní funkce, vše ostatní zajišťují servery 
- Počet serverů je neomezený  

 

Klient\-server vs hierarchická 

- Klient\-server je osekaná verze hierarchické  
- Potřebné věci zůstávají v mikrojádře a vše ostatní jde na server 

*(obrázek vynechán)*

10\) Správa operační paměti 

- Paměť přímo přístupná procesoru\. 
- Uchovává kód programů, procesů, mezivýsledky jejich činností, stav ostatních prostředků  
- OP = souvislý prostor paměťových buněk o velikosti 1 bajtu, jež jsou lineárně adresovány\. \(od 0 až po ∞ pořád nahoru\) 
- Pokud je tento adresový prostor přímo reprezentován fyzickou pamětí\. \(RAM\), označujeme jej jako fyzický adresový prostor \(FAP\)\. 
- Velikost prostoru je dána fyzickou pamětí, nebo velikostí adresy\. 
- Správa FAP musí plnit následující funkce:  
	1. Přiděluje paměťové regiony na žádost procesů 
	2. Uvolňování paměťových regionů na požádání procesů\. Uvolňování musí vždy skončit úspěchem\. 
	3. Udržování informací o obsazení adresového prostoru\.  
	4. Zabezpečení ochrany paměti\. Brání procesům přistupovat k paměti mimo regiony, které vlastní\.  
	5. Podporovat střídavý běh více procesů\. 

 

Dělíme na dvě skupiny\. 

I\)Triviální  X II\) Netriviální 

 

 

Triviální 

1. Monolitická Aplikační paměť 

- Nejjednodušší správa OP rozděluje adresový prostor na dva bloky = \(souvislá oblast adresového prostora, určená počáteční adresou \- bází a velikostí\)  
	1. Blok je přidělen rutinám jádra\. \(__KM kernel memory__\) 
	2. Přidělován na požádání procesům\. \(__AM application memory__\) 
- __Paměť jádra__ je sdílena všema procesy, protože rutiny jádra jsou užívány všemi procesy\. 
- __Paměť aplikační__ je soukromá a přístup by k ní měl mít pouze proces vlastník\. 
- __Algoritmus přidělený regionu:__ pokud je AM volná je přidělená procesu celá bez ohledu na jím požadovanou velikost\.  

Pokud není volná je požadavek odmítnut => __s fatálními důsledky pro proces__\) 

- Alokace se tudíž děje jen jednou při spuštění procesu, kterou využívá po celou dobu svého života\.  
- Paměť je uvolněna při ukončení procesu\. 
- Bázový registr 
- Jeho obsah je automaticky přičítán k adrese použité ve zdrojovém kódu a teprve tento součet je užit k fyzické adresaci paměťového místa\.  
- Ochrana paměti se omezuje pouze na ochranu paměti jádra\. 
- Nejjednodušší metodou je použití bázového registru, který fyzicky znemožňuje užití fyzických adres nižších než je báze\. 
- V režimu jádra obsahuje bázový registr nulovou adresu a proces tak může přistupovat k celému adresovému prostoru\. 
- Nevýhody: nedostatečné využití OP\. 

 

1. Statické bloky  

- Řešené s nedostatečným využitím OP je rozdělení AM na několik alokačních bloků\. Ty jsou neměnné a ozačujeme je jako statické\.  
- Velikost bloků se stanovuje při zavádění OS\. A mají různou velikost\. 
- Po přidělení regionu paměti, žádá\-li proces je mu přidělen nejmenší z volných bloků, __pokud takový existuje\.__ 
- Ochrana paměti použití bázového registru chrání jen bloky na nižších adresách\. Pro ochranu bloků na vyšších adresách používáme __limitní registr__, který obsahuje velikost aktuálního regionu\. 
- Hodnota adresy je ještě pře přičtením k bázovému registru porovnána s hodnotou limitního registru\. Pokud je větší vyjímka\. 
- Největší změnou je možnost alokace více bloků jedním procesem 
- adresový prostor procesu je rozdělen na 3 hlavní regiony      

 __1\) kódový region \(CR\)__ – obsahuje strojový kód programu, není do něj zapisováno 

 __2\) datová region \(DR\)__ – obsahuje statická data programu\(st\. proměnné\)vyžaduje zápis a čtení 

 __3\) zásobníkový region\(SR\)__ – obsahuje lokální proměnné a návratové adresy funkcí  organizovaný  jako zásobník\(last in first out\) 

- strategie statických bloků umožňuje souběžnou existenci více procesů i bez odkládání do sekundární paměti 
- počet souběžně existujících procesů je omezen počtem bloků 
-  hlavní nevýhodou je malá pružnost systému alokace, jsou\-li požadavky v rozporu s velikostní strukturou bloků, roste nevyužitá paměť 

 

1. Dynamické bloky 

- Aplikační paměť lze i rozdělit na bloky, jejichž velikost se dynamicky přizpůsobuje procesů 
- V počátečním stavu \( před alokací 1 regionu\) tvoří ap\.  Adresový prostor jediný volný blok\. 

Strategie alokace: 

1. __First fit__ = vyhledá první přípustný blok\. První přípustný blok, pokud je jeho velikost přípustná požadavku je blok přidělen celý, v ostatních případech je rozdělen na dva bloky, první o požadované velikosti je přidělen procesu a druhý  zůstává volný\. 
2. __Best fit__ = volíme nejmenší blok s přípustných\. \(pomalé a vede to k fragmentaci\) 

- Při uvolňování se musí provádět tzv\. scelování volných bloků\. 
- Základní informace o bloku tvoří tzv\. hlavičku bloků\. \(obsahuje údaje o velikosti bloků, zda to není poslední blok a identifikaci procesů vlastníka\) 
- Hlavním problémem je fragmentace O\.P\.  
- To je k vzniku moha malých nesouvislých bloků volné paměti \. Důsledkem je situace, kdy je sice relativně velké množství volné paměti, ale nikoliv souvislé bloky rozumné velikosti\. 
- Fragmentace vede k degradaci celého systému \- procesy stále čekají na paměť a nové nelze spouštět\. 

Setřásání bloků 

- Řeší problém s fragmentací\. Přesunem blokům vedoucím k soustředění volné paměti v jediném bloku\. 

 

Netriviální 

 

Virtualizace paměti 

- Předchozí metody správy O\.P\. nebyly příliš optimistické\. Řešením na vyšší úrovni je uplná virtualizace paměti\. 
- Vzniká tak souvislý adresový prostor, který není fyzicky reprezentován souvislým blokem O\.P\.  
- Velikost tohoto virtuálního či lépe logického adresového prostoru \(LAP\) není omezena velikostí skutečné O\.P\. ale pouze velikostí adresy\. 32 bytové adresy = 4GB \- 64 bytové adresy = 16EB 
- Tento LAP lze rozdělit do dvou základních částí\.  

 

1. první část je tvořena adresami, které nebyly použity \(tj\.: bez čtení a zápisu\), tato část nemá žádnou fyzickou reprezentaci \(data nejsou nikde uložena\)\. Tato část tvoří větší část LAP\. 
2. Druhá část obsahuje adresy na nichž jsou uložená skutečná data a musí mít tudíž i fyzickou reprezentaci\. Tuto část lze rozdělit na několik podčástí podle místa uložení dat\. V součastnosti jsou data ukládáná v primární OP v RAM, nebo na sekundárních vnějších paměťových zařízeních / pevné disky\. Charakteristiky obou paměťových technologii:  

OP je rychlá, ale relativně malá\.  

Disk má vyšší kapacitu, ale je relativně pomalý a to až 100 000x  

Proto existuje virtualizátor = jsou to rutiny, které zajišťují virtualizaci paměti\. Ten řeší tento rozpor tím, že právě užívaná data jsou umístěna v O\.P\. data delší dobu neužívaná jsou uložena na disku\. 

 

Virtualizátor 

 

- Není  koncovým správcem paměti a musí být doplněn klasickým správcem paměti jenž však nezpravuje FAP ale prostor log\. 
- Hlavní podstatou virtualizace je převod požadavků na přístup k LAP a na přístup k fyzickým datům na skutečném paměťovém zařízení\.  
- Pro správu log\.paměti lze použít libovolnou dříve uvedenou strategii\. Díky charakteru log\. Paměti se většina nevýhod těchto typů správy minimalizuje či dokonce eliminuje\. 
- Fragmentace LAP je nepříjemná ale méně nebezpečná | \(rozsah log\. Prostoru je řádově větší a navíc je užíván jen jedním procesem\) 

11\) Virtualizace paměti 

Netriviální správa paměti 

 

Virtualizace paměti 

- Předchozí metody správy O\.P\. nebyly příliš optimistické\. Řešením na vyšší úrovni je uplná virtualizace paměti\. 
- Vzniká tak souvislý adresový prostor, který není fyzicky reprezentován souvislým blokem O\.P\.  
- Velikost tohoto virtuálního či lépe logického adresového prostoru \(LAP\) není omezena velikostí skutečné O\.P\. ale pouze velikostí adresy\. 32 bytové adresy = 4GB \- 64 bytové adresy = 16EB 
- Tento LAP lze rozdělit do dvou základních částí\.  

 

1. první část je tvořena adresami, které nebyly použity \(tj\.: bez čtení a zápisu\), tato část nemá žádnou fyzickou reprezentaci \(data nejsou nikde uložena\)\. Tato část tvoří větší část LAP\. 
2. Druhá část obsahuje adresy na nichž jsou uložená skutečná data a musí mít tudíž i fyzickou reprezentaci\. Tuto část lze rozdělit na několik podčástí podle místa uložení dat\. V součastnosti jsou data ukládáná v primární OP v RAM, nebo na sekundárních vnějších paměťových zařízeních / pevné disky\. Charakteristiky obou paměťových technologii:  

OP je rychlá, ale relativně malá\.  

Disk má vyšší kapacitu, ale je relativně pomalý a to až 100 000x  

Proto existuje virtualizátor = jsou to rutiny, které zajišťují virtualizaci paměti\. Ten řeší tento rozpor tím, že právě užívaná data jsou umístěna v O\.P\. data delší dobu neužívaná jsou uložena na disku\. 

 

Virtualizátor 

 

- Není  koncovým správcem paměti a musí být doplněn klasickým správcem paměti jenž však nezpravuje FAP ale prostor log\. 
- Hlavní podstatou virtualizace je převod požadavků na přístup k LAP a na přístup k fyzickým datům na skutečném paměťovém zařízení\.  
- Pro správu log\.paměti lze použít libovolnou dříve uvedenou strategii\. Díky charakteru log\. Paměti se většina nevýhod těchto typů správy minimalizuje či dokonce eliminuje\. 
- Fragmentace LAP je nepříjemná ale méně nebezpečná | \(rozsah log\. Prostoru je řádově větší a navíc je užíván jen jedním procesem\) 

  

  

Stránkování \(Paging\) 

- Je hardwarový mechanismus, umožňující plnou virtualizace paměti 
- Rozděluje LAP na logické stránky stejné velikosti, které jsou odděleny 
- Velikost stránek se u různých architektur může lišit 
- Na stejné stránky se „pomyslně“ rozdělí i FAP označujeme je jako __rámce__  
- Je __prováděn procesorem__ 
- MMU \(Memory Managment Unit\) 
- FAP je omezená velikostí paměti 
- Mechanismus stránkování má dvě základní části: 
	1. __Překlad adres__ – logická adresa je překládána na fyzickou 
	2. __Výpadek stránky__ – přerušení při přístupu na neplatnou stránku 
- Mezi jednotlivými fyzickými a logickými stránkami existuje zobrazení, které však nemůže být úplné 
	1. Logických stránek je více než rámců 
	2. Vždy existují logické stránky, které nemají rámec 

Pojmy 

- __Rámec__ – název pro fyzické stránky 
- __Neplatná stránka__ – nemá přidělený rámec \(fyzickou adresu\) 
- __Volné rámce__ – nepřidělená LAP 

  

*(obrázek vynechán)*

 

  

Překlad adres 

1. Každá logická adresa se rozdělí na dvě části: 
	1. __První__ označuje logickou stránku \(tj\. její pořadí\) 
	2. __Druhá__ obsahuje adresu paměťového místa \(stránkový offset\) 
2. Tabulka stránek určí číslo rámce podle pořadí stránky 
3. Tabulka obsahuje položky, které jsou indexovány a obsahují číslo rámce a skupinu příznaků 
4. Poté v tabulce stránek si logická stránka najde volný rámec, která se pozná podle VF \(Validity Flag\) a bitovým posunutím vlevo získá báze rámce 
5. Mezitím se stránkový offset rozšíří na 32 bitu a sečtením offsetu s bází rámce získáme skutečnou fyzickou adresu 
6. __VF \(Validity Flag\)__ –__ __příznak platnosti 
7. __DF \(Dirty Flag\)__ – příznak zápisu do stránky \- říká zda data byla změněna \(rámec obsahuje jiná data než jeho obraz na swapu\) 

 

  

*(obrázek vynechán)*

 

 

  

Výpadek stránky 

1. Výpadek stránky nastane, pokud proces přistoupí k neplatné stránce 
2. Výpadek stránky \(výjimka\) – přeruší instrukci a předá řízení obslužné rutině v jádře systému, tato rutina má dvě možnosti, jak zareagovat: 
	1. __Najde volný rámec__ – nalezne odpovídající fyzický rámec a zajistí jeho propojení s logickou stránkou a tu následně splatní \(v tabulce stránek se uloží index rámce a nastaví se bit platnosti \(VF\)\) 
	2. __Ukončí proces__ – pošle se výjimka WIN 32 
3. O tom, jak obslužná rutina zareaguje, rozhoduje umístění logické stránky v LAP 
4. \(Pokud dostane rámec, už ho má a není neplatná a v budoucnu nezpůsobí výpadek\) 

Zjednodušeně 

1. Proces přistoupí ke stránce, která nemá propojený rámec 
2. Proces je pozastaven, je zavolána rutina jádra, která proces obslouží 
3. Rutina  
	1. Najde rámec a propojí jej se stránkou 
	2. Ukončí proces a pošle výjimku WIN 32 
4. Pokud rutina najde rámec a propojí se stránkou, poté ještě musí restartovat instrukci procesu u které skončil/byl pozastaven 

 

Stránkování na žádost 

- Neplatné stránky \(__panenské stránky__\) – nikdo do nich nebylo zapisováno, proces k nim nepřistoupil \(jsou v LAP\) 
- Základním principem je tzv\. lenivé vykonávání 
- __Lenivé vykonávání__ – vše je provedeno až v okamžiku, kdy je toho skutečně třeba 
- Po přidělení regionu jsou všechny stránky neplatné a platnými se stávají, až v prvním přístupu k nim 
- Fyzická paměť je procesoru přidělována až v okamžiku, kdy ji skutečně potřebuje 
- Vyřešení výpadku při přístupu k panenské stránce záleží na druhu regionu, ke kterému tato panenská stránka náleží 

V kódovém regionu 

- Musí být nalezen volný rámec, pokud není musí jej ukrást 
- Rámec se propojí s logickou stránkou a splatní se \(nastaví se bit platnosti v tabulce stránek\) 
- Obnoví se instrukce, u které proces skončil 

V datovém regionu 

- Reakce se liší v závislosti na požadované počáteční hodnotě daného paměťového místa 
	1. __Na počáteční hodnotě nezáleží__, stačí logickou stránku propojit s libovolným rámcem a logickou stránku splatnit 
	2. __Pokud je požadována 0 hodnota,__ je použit podobný přístup jako v předchozím případe, pouze při vyhledávání rámce jsou preferovány rámce, které jsou vyplněny pouze nulovou hodnotou\. Pokud se nenajde, vezme systém za vděk libovolný volný rámec, který před svým připojením vynuluje 
	3. Stránky na pozicích statických proměnných s nenulovou počáteční hodnotou \(jsou uloženy ve spustitelném souboru, kde tvoří zvláštní datový blok\. Při výpadku je vzat volný rámec, do něj je zkopírována odpovídající část spustitelného souboru a následně je rámec s danou logickou stránkou propojen 

Zásobníkový region 

- Při výpadku stačí připojit libovolný volný rámec 

 

- __Strážce zásobníku__ – může zvětšovat datový a zásobníkový region 
- V oblasti paměti jádra jsou za běhu panenské stránky spíše výjimkou, většina je využita ve fázi bootování\. Nebo jsou pevně vázány na rámec \(nemohou být ukradeny\) 

*(obrázek vynechán)*

  

Jak si ukrást stránku 

- V OP není nikdy dost volných rámců, a tak je systém nucen odebírat rámce procesům 
- __Tabulka rámců__ – je prohledávána virtualizátorem, popisuje stavy \(volný, obsazený a pozice na SWAPU\) 

Fáze kradení stránek 

1. __Nalezneme volný rámec__ 
	- Virtualizátor si udržuje informace o využití všech rámců 
	- Každá položka v tabulce rámců je prohledána, pokud není nalezen volný rámec je zahájeno kradení rámce 
2. __Vytipování vhodného rámce__ 
	- Rámec, jehož ukradení by co nejméně zpomalilo systém 
3. __Uložení obsahu vytipovaného rámce do SWAPu__ 
	- Odložení obsahu rámce do swapu __\(na disk\)__ 
	- Nemá\-li zvolený rámec svůj obraz na SWAPu, je nalezen volný a tam umístěn\. Není\-li místo na SWAPu musí být proces pro něhož je stránka kradena ukončen 
	- Má\-li zvolený rámec svůj obraz na SWAPu \(byl již ukraden\), je do něj umístěn 
	- __Dirty bit__ – říká zda data byla změněna \(rámec obsahuje jiná data než jeho obraz na swapu\) 
4. __Zneplatnění logické stránky, která daný rámec obsahovala__ 
	- Po uložení rámce na disk, proces zneplatní logickou stránku, s níž byl rámec propojen 
	- Nyní, když je stránka volná, může být propojena s logickou stránkou, jejíž výpadek proces odstartoval  

- __Thrashing__ – systém neustále swapuje na disk a procesy stojí 

  

*(obrázek vynechán)*

  

  

Zloděj stránek 

- Tento systémový proces je většinu času pozastaven a probouzí se tehdy, když podíl volných rámců klesne pod stanovenou dolní mez\. \(3\-7%\)  
- Po probuzení zjistí, jaké rámce nejsou využívány a potom je začne krást, nikoliv však pro sebe, ale pro ostatní procesy \(nechává je volné\) 

Výhody zloděje stránek 

- Urychluje ukládání odcizených stránek \(krade po stovkách\) 
- Brání nestabilitě, které může vzniknout, pokud se víc procesů snaží ukrást jedinou stránku \(procesu je ukradená stránka znovu ukradena, a to dříve než jí stačí použít\) 

Lokální strategie FIFO 

- Je zvolen rámec, který je nejdelší dobu využíván 
- Každý nový rámec je zařazen na konec fronty 
- Musí existovat správce pracovních množin 
	- Kontroluje míru využití přidělených rámců a dle ní přiděluje či odebírá procesům rámce\. Ty, které odebere jsou nulovány a ihned přidělovány jiným procesům \(odebírání se děje pouze při nedostatku OP\) 

Sdílená paměť 

- Doteď se předpokládalo, že každý region paměti je vlastněn pouze jedním procesem a že každý rámec OP je nanejvýš propojen s jednou logickou stránkou 
- Virtualizace paměti umožňuje realizaci, tzv\. sdílených pamětí – fyzický adresový prostor je přístupný z několika LAP 
- Na jeden rámec FAP se může připojit více stránek LAP 
- Fyzický paměťový prostor – \(SWAP \+ FAP\)  
- Sdílení obsahu tabulky stránek, tj\. položky tabulky stránek příslušnému danému bloku obsahují v obou LAP shodné údaje \(i v tabulce na SWAPU, v tabulce rámců\) 
	1. __Princip konzistence__ – všechny procesy musí mít v každém okamžiku stejný obraz paměti 
	2. __Princip lenivého vykování__ – vše je provedeno až tehdy, kdy je to opravdu třeba 
- Např\. pokud dojde k ukradení rámce, musí být zneplatněny všechny logické stránky sdílející daný rámec 
- Naopak pokud dojde ke splatnění stránky v rámci výpadku stránky způsobené jedním z procesů, stačí když je splatněna jen ta jediná výpadkem dotčená logická stránka 
- Kódový region je sdíleným a v každém případě se šetří odkládací prostor a urychluje se běh aplikací 

Využití 

- Výměna dat mezi programy běžící současně\. Není třeba mít duplicitní data v paměti 

Dočasně sdílená paměť \(Copy On Write\) 

- Více stránek je propojeno na jeden rámec 
- Je dáno že z něj mohou pouze číst 
- Pokud se jedna ze stránek pokusí zapsat do rámce data je jí to odepřeno 
- Najde se jí rámec, propojí se sním, spojení se starým rámec je zrušeno a tam poté už zapisuje svá data 

12\) Správa procesů 

Proces 

- Proces patří mezi základní prostředky všech OS 
- Proces popisujeme z různých pohledů, které se navzájem doplňují 
- Je instan__cí__ programu 
- Proces vzniká první vykonanou instrukcí a končí úplně poslední 

Vlastnosti procesu 

- Každá rutina výpočetního sytému, může být vykonávána pouze v rámci procesu i několika procesy 
- Jednu rutinu mohou vykonávat dva procesy najednou, __multitasking__ – střídání procesů 
- První proces je bootovací 
- Proces vzniká vždy na popud jiného procesu, výjimkou je bootovací 

*(obrázek vynechán)*

Tři základní pohledy na proces 

Genetický pohled 

Proces je instancí programu  

- Program je nejčastěji reprezentován souborem, který obsahuje kód aplikace a její iniciální data – nazývá se __spustitelný soubor__ 

Dynamický pohled 

- Proces je postupným vykonáváním instrukcí 
- Proces ovlivňuje a může být ovlivňován prostředky a okolím 

Systémový pohled 

- Udržuje informace o užívaných prostředcích a jejich stavech 
- Důležitou vlastností procesu je jeho jednoznačná identifikace, mezi všemi ostatními procesy 

  

Kontext procesu 

- Souhrn stavů všech prostředků OS, které proces v danou chvíli využívá 
- __DETERMINISMUS__ – procesy jsou ovlivňovány budoucími procesy 
- Patří sem všechny prostředky, jejichž změna mimo proces by vedla ke změně chování programu 
- Do kontextu může patřit – procesor, kódový region, zásobník, paměť 
- Kontext se musí ukládat i obnovovat v rámci přepínání procesů při multitaskingu, a to by mohlo trvat poněkud dlouho 
	- __Řešení – Vyhražený prostředek__ 

Vyhražený prostředek 

- Vytvořena iluze, že prostředek je využíván výhradně jedním procesem 
- Je rozdělen a přidělován procesům 
- Není nutné ukládat a obnovovat jeho stav 

 

Strategie přidělování prostředků 

Strategie rozdělení sdílených prostředků 

- Je užívána u většiny prostředků 
- Je možné prostředek virtuálně rozdělit na menší části, které mohou být přiděleny procesům do výhradního užívání  
- __Příklady__: rozdělení vnějšího paměťového zařízení na soubory, rozdělení monitoru na okna 

Strategie vyhrazených serverů 

- Užívána u prostředků, které zle obtížně rozdělit 
- V tomto případě se jeden z procesů stává výhradním vlastníkem prostředků 
- Funkčnost je většinou ve formě fronty požadavků 
- Příklad: správa tiskárny tiskovým serverem \(pouze proces serveru má přístup k tiskárně, další procesy musí využít nepřímý prostředek, tiskovou frontu\) 

 

Multitasking 

- Správa procesů, která umožňuje existenci více nezávislých procesů najednou  
- Vytváří iluzi souběžného běhu 
- Umožňuje existenci více nezávislých procesů v jednom okamžiku 
- Dochází k rychlé výměně procesů \(milisekundy\), což vytváří iluzi souběžného běhu více procesů i na jedno procesorových strojích 

Vzájemné volání procesů 

- Systém, který využívá jen vzájemného volání je zastaralý 
- Postup vzájemného volání: 
	- Na začátku existuje jeden proces bootovací 
	- Nový proces může vzniknout pouze v rámci volání služby jádra tímto procesem 
	- Volání pozastaví aktuální proces, uloží jeho kontext a vytvoří počáteční kontext nového procesu, kterému následně předá řízení 
	- Nyní běží jen ten nový proces, který po jisté době zavolá službu EXIT, aby byl ukončen 

 

Druhy multitaskingu 

 

Kooperativní multitasking 

- K výměně procesů nedochází pouze na požádání běžícího procesu, ale vždy když aktuální proces nemůže pokračovat v běhu \(čeká na nějakou podmínku, stisk klávesy atd\.\) 
- Proces se vzdá dobrovolně procesoru jen tehdy pokud ho v danou chvíli nepotřebuje  
- Systém musí zajistit, že běh procesu bude obnoven poté co se splní podmínka 
- To vede k následujícím požadavkům na OS: 
	1. K výměně procesů může docházet jen ve službách jádra 
	2. Speciální rutina zvaná dispečer, musí rozhodnout, který proces bude obnoven 
	3. Systém musí řešit situaci, kdy není žádný proces schopný běhu \(všechny čekají na podmínku\) – spustí IDLE proces, jenž nekonečně volá dispečera  

Dispečer 

- Speciální rutina 
- Rozhoduje, který z pozastavených procesů bude obnoven – dostane procesor 

IDLE proces 

- V situaci, že neexistuje žádný proces, který by chtěl na procesor je zavolán IDLE proces 
- IDLE proces volá v nekonečném cyklu dispečera 

Výhody 

- Pokud aplikace komunikuje s okolím a čeká na externí události \(stisk klávesy, pohyb myši\) 

Nevýhody 

- Proces nemůže být násilně pozastaven 
- Proces se může zacyklit a tím dojde k neohraničenému držení procesoru jedním procesem 

  

Preemptivní multitasking 

- Zde o přidělování a výměně procesů na procesoru rozhoduje operační systém 
- Přidělování procesoru probíhá na základě priorit procesů  
- Proces může být zbaven procesoru i nedobrovolně 
- Je nutná virtualizace paměti 
- Proces může být v uživatelském režimu přerušen v libovolném okamžiku 
- Odebírání procesů je spíše výjimkou, převládá zde kooperace 
- preempce je jen tehdy pokud proces drží procesor příliš dlouho 

Časovač 

- Speciální hardwarové zařízení 
- V pravidelných intervalech \(milisekund\) vyvolává externí přerušení 
- Během externího přerušení může dojít k výměně procesů na procesoru 

Průběh 

- Každý proces získává procesor na určitý pevný časový interval 
- Přidělované intervaly jsou relativně krátké \(desítky milisekund\) 
- Vzniká tak iluze souběžného běhu procesů 

Další výměna procesů 

1. K výměně může docházet z obsluhy přerušení jádra 
2. Při vyvolání externím přerušením 

Preempce 

- Přerušení právě vykonávaného procesu násilně \(bez jeho spolupráce\) 
- Proces je pozastaven, nahrazen jiným a po čase stejným způsobem obnoven  

Stavový diagram procesů 

- Proces začíná ve stavu __Nová\[N\]__ 
- Proces končí ve stavu __Zombie\[Z\]__ 
- Většinu života proces tráví ve dvou základních stavech 
	- Ve stavu __Wait\[W\]__ \(proces čeká na procesor\) 
	- Ve stavu __Running\[R\]__ \(proces běží\) 
		- Má dva podstavy: 
		- __RU__ \(user\) a __RK__ \(kernel\), podle aktuální privilegovanosti  
		- Delší cyklus obsahuje stav __Sleep\[S\]__ \(proces čeká na externí událost\) 

 

  

Stavy procesů 

*New \[N\]* 

- Nový proces 
- Proces si alokuje paměťové regionu v LAP \(je mu přidělena paměť\) 
- Nový proces je vždy vytvářen jako požadavek jiného procesu 
	- Na popud jiného procesu 
	- Na základě požadavku uživatele 
	- Na základně požadavku OS 
- Rodičovský proces zavolá systémovou službu, pro vytvoření nového dětského procesu a rutiny této služby nový proces vytvoří  
	- Vytvoření záznamu v tabulce procesů 
	- Alokace logických prostředků, především paměti 
- Během celé této doby se proces nachází ve stavu __New \[N\]__ a v této chvíli není schopen běhu 
- Teprve po úplném vytvoření je proces přesunut do stavu __Waiting \[W\]__ a tím začíná jeho samostatná existence 
- Oba procesy \(rodič i dítě\) jsou zcela nezávislé a nemají žádný zvláštní vztah 

*Waiting \[W\]* 

- Proces je připravený přejít do stavu __Running \[R\]__ 
- Jsou zde procesy, které jsou připraveny na vykonání, ale musí čekat na procesor, který je v danou chvíli obsazen 
- Procesy ve stavu __Waiting__ jsou organizovány do jediné fronty FIFO 
	- Fronta je prioritní \(s předbíháním\) 
	- Hodnota <\-20,20> \(čím je nižší tím větší má proces prioritu\) 
	- AP = DP \+ SP  
	- AP \(absolutní priorita\), DP \(dynamická priorita\), SP \(statická priorita\) 

*Running \[R\]* 

- V jednoprocesorovém systému existuje právě jeden běžící proces 
- Běžící proces může běžet buď v režimu: 
	- Neprivilegovaným \(uživatelským\) 
	- Privilegovaným \(jádra\) 
- Proces tento stav může opustit: 
	- __Dobrovolně__ \(vzdá se procesoru a přechází do stavu __Sleeping \[S\]__ – čeká na událost\) 
	- __Nedobrovolně__ – procesor je mu odebrán a přechází do stavu __Waiting \[W\] __ 

*Sleeping \[S\]* 

- Zde se proces nachází, pokud dobrovolně opustil procesor a čeká na systémovou událost 
- Mezi hlavní typy událostí patří: 
	- Vstupní událost periferii \(pohyb myši, stisk klávesy, příchod paketu\) 
	- Výstupní událost \(zápis na disk, odeslání znaku na monitor\) 
	- Uvolnění fyzického/logického prostředku 
	- Uvolnění synchronizačního prostředku 
- Při přechodu do stavu __Sleeping__ \(zablokování procesu\) by měl proces využívat minimum dalších prostředků, aby je zbytečně neblokoval 
- Ve stavu __Sleeping__ se může nacházet více procesů čekajících na stejný vyhrazený prostředek 
- Pro uvolnění ze sleepingu existují dva mechanismy: 
	- __Fronta čekajících procesů__ – procesy čekající na prostředek jsou stavěny do fronty a po uvolnění prostředků je pouze první z nich \(nejdéle čekající\) odblokován 
	- __Probuďte se a přebíhejte__ – probouzeny jsou všechny procesy a o tom, který proces získá rozhoduje absolutní priorita 

*Zombie \[Z\]* 

- Zombie neboli mátoha je finální stádium procesu 
- Ze stavu __Zombie__ nevede cesta zpět a proces v něm zůstává až do svého úplného odstranění 
- Procesu jsou při přechodu do tohoto stavu odebrány všechny prostředky 

Příčiny stavu Zombie \[Z\] 

Vražda 

- Proces je ukončen jiným procesem \(pouze běžícím\) 
- Do stavu Zombie přechází ze stavu __Waiting/Sleeping__ 
- Uživatel smí zabíjet pouze své vlastní procesy 
- __\[R\] \-> zabije \[S\]/\[W\] \-> \[Z\]__ 

Sebevražda 

- Běžící proces zavolá systémovou službu pro své ukončení \(většinou exit\) 
- Je přesunut do stavu Zombie z Running 
- __\[R\] \-> exit \-> \[Z\]__ 

Smrtelný úraz 

- Chyba v kódu, proces provede instrukci, ke které nemá oprávnění atd\. 
- __\[R\] \-> úraz \-> \[Z\]__ 

  

  *(obrázek vynechán)*

Vlákna 

- Pro preemptivní systémy, je typická paralelnost na úrovni všech procesů 
- Pokud proces čeká na klávesnici, může v nevyužitém čase provádět na pozadí pomocné operace 
- Vlákna – obdoba procesů, sdílejí datový region, což usnadňuje jejich vzájemné působení, komunikují prostřednictvím globálních statických proměnných  
- Vlákna mají svou aktuální instrukci a svůj programový zásobník a souběžně běží nad společnou pamětí  
- Každý proces má své hlavní vlákno  
- OS může na požádání vytvořit pro proces nové vlákno, které začne vykonávat část programu v souběhu s ostatními vlákny 

Výhody 

- Snadnější a efektivnější kooperace paralelních toků  

Nevýhody 

- __Globální zablokování__ – jestliže se v procesu zablokuje jedno vlákno, jsou pozastavena i všechny ostatní vlákna procesu 

Základní správa vláken 

- Nejdůležitější operací je vytvoření vlákna a pak jeho spuštění 
- Vytvoření vlákna se provádí přímím voláním specializované služby 
- Vlákno končí svou činnost buď dosažením hlavní funkce nebo může být ukončeno z vnějšku stejně jako proces 
- Pokud svou činnost končí hlavní vlákno, jsou ukončena i ostatní vlákna 

13\) Synchronizace

Synchronizace 

- Pro preemptivní multitasking je typická téměř úplná vzájemná nezávislost procesů 
- Nezávislosti procesů dosáhneme tehdy, pokud striktně oddělíme prostředky užívány jednotlivými procesy 
- Je ideální na uživatelské úrovni, a to výhradně u procesů, které s okolními procesy nikdy nekomunikují 
- U rutiny jádra, přistupují procesy ke sdíleným prostředkům – vzniká kolize 
- Musíme oddělit prostředky, tak aby si procesy mysleli, že jsou jenom jejich 

Příklad komunikace mezi procesy 

- __Producent \(P\) –__ produkuje data 
- __Konzument \(K\) –__ čte data \(přijímá\) 
- Spolupráce mezi procesy nemusí fungovat a to protože: 
	1. Konzument čte dříve \(využije prostředek dříve, než tam jsou data\) 
	2. Konzument čte dvakrát, či více tentýž data 
	3. Producent přepíše data dříve, než je konzument přečte 
	4. Náhodný souběh, dochází k souběhovým kolizím, obsahuje fragmentace více klíčů 

Kritický kód 

- Každý přístup ke sdílenému prostředku, respektive pokus o nesynchronizovanou komunikaci je potenciálně nebezpečný – __kritický kód__ 
- Kritický kód je situace, která vyžaduje přístup ke sdílenému prostředku 
- __Kritický kód__ – jakýkoliv přístup ke sdílenému prostředku 

Využití synchronizace 

- Zabraňuje \(předchází\) kritickému kódu  
- Předchází negativním souběhům a komunikačním ztrátám  
- Existují dva základní typy synchronizace: 
	1. __Čekání na událost__ – proces čeká na událost, která je výsledkem činnosti jiného procesu\. Synchronizace zajistí časovou následnost a zabrání propásnutí události čekajícím procesem 
	2. __Vzájemné vyloučení__ – synchronizace musí zabránit současnému vykonání dvou kritických kódů\(dvou přístupů ke sdílenému prostředku\) 
- Lze kombinovat oba typy synchronizace 

  

Synchronizační prostředky 

Obecný semafor 

- Vhodný pro synchronizaci přístupu procesů k více prvkové množině prostředků 
- Může přistupovat k více prostředkům na ráz 
- Stavy nabývají hodnot \(0, …, MAX\), reprezentuje to počet volných prostředků  
- MAX je neměnná konstanta daného semaforu, která je určena při jeho definici 
- Obecný semafor je určen dvěma operacemi: 
	- __Post__ \(odpovídá stavu WAIT\) – Je\-li stav nulový nemá žádné prostředky, proces se zablokuje, dokud není semafor uvolněn jinak je počet prostředků snížen o 1 
	- __Release__ \(odpovídá stavu SIGNAL\) – Zvýšení čítače o jedničku 
- Hodnota semaforu určuje počet aktuálně volných prostředků 

Binární semafor 

- Binární semafor přistupuje pouze k jednomu prostředku 
- Binární semafor je pouhým speciálním případem obecného semaforu 
- Patří mezi nejdéle známe a používané synchronizační prostředky 
- Aby se k prostředku \(na semafor\) dostal proces, volá neustále operaci, že chce prostředek 
- Hlavní výhodou je jednoduchá sémantika  
- Nevýhodou je vyšší chybovost  
- Binární semafor má dva stavy: 
	- Červená 
	- Zelená  
- Binární semafor má dvě operace: 
	- __WAIT__ – pokud je semafor ve stavu zelená, tak je prostředek volný, jakmile přijde proces, tak se semafor přepne na červenou\. Jiný proces čeká na zelenou, kterou způsobí stav  
	- __SIGNAL__ – stav semaforu je přepnut na červenou, aby byl proces sám, pokud proces odchází z prostředku \(semaforu\), přepne semafor na zelenou  
- Všechny operace musí být __ATOMICKÉ__ – bez přerušení, bez přepínání kontextu 

Využití semaforu 

- Zajištění vzájemného vyloučení nad kritickým kódem \(Nepřistoupí dva procesy k jednomu prostředku naráz\) 
- Lepší variantou je Mutex 

  

Mutex \(Mutex Exclusion\) 

- Synchronizační prostředek, může být uvolněn pouze procesem, který mutex drží 
- Mutex je určen dvěma hodnotami: 
	1. __Identifikací procesu__ 
		- Identifikace procesu, který mutex drží  
	2. __Počet uzamknutí mutexu __ 
		- Musí být celé nezáporné číslo 
		- Nad nímž jsou definovány 2 atomické operace 
			- __LOCK__ \(uzamčení mutexu\) 
				- __Je\-li mutex volný__ – proces se stane držitelem a počet uzamknutí nabývá hodnoty 1 
				- __Je vlastněn aktuálním procesem__ – je pouze zvýšen počet uzamknutí  
				- __Je\-li mutex vlastněn jiným než aktuálním procesem__ – proces je zablokován a čeká na uvolnění mutexu 
			- __UNLOCK__ \(odemčneí/uvolnění mutexu\) 
				- __Je\-li mutex volný__ – je chování nedefinováno  

__Je\-li mutex vlastněn aktuálním procesem__ – zmenšuje se počet o 1 a je\-li poté nulový mutex uvolněn a jeden z čekajících procesů je odblokován  

 

-
	-
		-
			-
				- __Je\-li mutex vlastněn jiným než aktuálním procesem__ – je chování nedefinováno, ale mutex není v žádném případě uvolněn  
		- Cílem je zabránění více procesům držet daný mutex  
		- Při vícenásobném uzamknutí musí být i stejný počet odemknutí 
		- Mutex je implementován na úrovni jádra \(__Atomičnost operací\)__ 

Mutex v režimu jádra 

- Zajištění vzájemného vyloučení nad kritickým kódem 
- Výhodou je snazší použití, především v rozsáhlých projektech, dále možnost více násobného zamykání  

Událost \(event\) 

- Velmi jednoduchý synchronizační prostředek 
- Nezajišťuje vzájemné vyloučení, ale zaručuje následnost dvou akcí 
- Zajišťuje čekání na událost  
- Je dosažitelný na uživatelské úrovni 
- Nejčastější případ: 
	- Spolupráce dvou procesů, z nichž jeden musí čekat, dokud není splněna podmínka, jejíž pravdivost je ovlivňována druhým procesem 

Uváznutí 

- Problematická místa veškeré synchronizace – __trvalé zablokování procesů, při chybném použití synchronizačních prostředků __ 
	- Př\. Proces, který získal semafor opětovně zavolá jeho operaci __WAIT__ 
- Uváznutí vznikají důsledkem hrubých chyb v použitím synchronizačních prostředků 

Deadlock 

- Stav, v němž se proces vinnou chybné synchronizace trvale zablokuje \(bez ukončení stavu __SLEEPING__\)  
- Proces se dostane do trvalé smyčky  

Eliminace uváznutí 

- Vyloučení překryvu kritických kódů, lze splnit jen tehdy pokud není vyžadována přímá spolupráce několika procesů 
- Lze zavést snadné přijatelné uspořádání ve formě ABECEDNÉHO uspořádání jejich identifikátorů 
- Uváznutí lze také zabránit: 
	- __Vše nebo nic__ – proces se pokusí získat všechny prostředky, pokud nezíská tak všechny uvolní, aby je neblokoval  

__Algoritmy uváznutí__ – uváznutí lze zabránit i za pomocí algoritmů, ale jsou náročné a někdy i příliš defenzivní \(vyloučí uváznutí, které by se nestalo\. Nejznámější BANKÉŘŮM algori 

  

14\) Meziprocesorová komunikace 

Meziprocesorová komunikace 

- Výměna dat mezi dvěma nebo více procesy, či vlákny  
- Komunikace může probíhat i mezi počítači v síti 
- Současné OS nabízejí celou škálu prostředků ke komunikaci 
- Komunikační prostředky se liší svou rychlostí, způsobem použití 

Vlákna 

- Pro preemptivní systémy, je typická paralelnost na úrovni všech procesů 
- Pokud proces čeká na klávesnici, může v nevyužitém čase provádět na pozadí pomocné operace 
- Vlákna – obdoba procesů, sdílejí datový region, což usnadňuje jejich vzájemné působení, komunikují prostřednictvím globálních statických proměnných  
- Vlákna mají svou aktuální instrukci a svůj programový zásobník a souběžně běží nad společnou pamětí  
- Každý proces má své hlavní vlákno  
- OS může na požádání vytvořit pro proces nové vlákno, které začne vykonávat část programu v souběhu s ostatními vlákny 

Výhody 

- Snadnější a efektivnější kooperace paralelních toků  

Nevýhody 

- __Globální zablokování__ – jestliže se v procesu zablokuje jedno vlákno, jsou pozastavena i všechny ostatní vlákna procesu 

Základní správa vláken 

- Nejdůležitější operací je vytvoření vlákna a pak jeho spuštění 
- Vytvoření vlákna se provádí přímím voláním specializované služby 
- Vlákno končí svou činnost buď dosažením hlavní funkce nebo může být ukončeno z vnějšku stejně jako proces 
- Pokud svou činnost končí hlavní vlákno, jsou ukončena i ostatní vlákna 

 

Proč je meziprocesorová komunikace potřeba 

- Vy výpočetně náročných úlohách je vhodné využít všechna jádra a mikroprocesory počítače 
- Složité výpočty a operace tak můžeme rozdělit mezi více procesů či vláken 

Dělení komunikace 

- Zasílání zpráv 
- Synchronizace 
- Sdílená paměť 
- Vzdálené volání procedur 

Klasifikace komunikačních prostředků 

1. __Spoluúčast jádra__ 
	- Jádro se komunikace neúčastní 
	- data proudí přes jádro \- Data jsou minimálně 2x kopírována 
2. __Vnitřní struktura dat__ 
	- Proudově orientované \(datovody\) – data tvoří jediný nečleněný proud 
	- Zprávově orientované – data jsou orientovaná do zpráv 
3. __Směrování přenášených dat__ 
	- Jednosměrné – z jednoho procesu do druhého 
	- Obousměrné 
	- Všesměrové – z jednoho procesu k více procesům 
	- Dostředné – od více procesů k jedinému procesu 
4. __Přenášený objem dat \(přenosová rychlost\)__ 
	- Malé \(kB/s\) – fronta zpráv a signály 
	- Střední \(10\+ kB/s – MB/s\) – roury a sokety 
	- Velké \(100\+ MB/s – GB/s\) – sdílené paměti 
5. __Transparentnost použití__ 

 

Typy meziprocesové komunikace 

Roura 

- Základní komunikační prostředek OS Unix 
- Klasická roura je jednosměrná 
- V případě obousměrného přenosu je nutno použít dvojici rour 
- Vhodná především k výměně malých a středních objemů dat mezi dvěma procesy 
- Implementace roury je jednoduchá 

*Dva typy roury* 

Nepojmenované / anonymní roury 

- Nemají vlastní identifikátor, „nejsou pojmenované“ 
- Nemůžou být použity libovolnými procesy, ale pouze procesy, které rouru vytvořili, nebo jejich potomky 
- Jsou přístupné pouze prostřednictvím souborových deskriptorů  

Pojmenovaná roura 

- Má vlastní identifikátor, „je pojmenovaná“ 
- Používá se pro přenos dat mezi procesy, jež nejsou příbuzné 
- Je viditelná v souborovém systému, tj\. má vlastní jméno a umístění v adresářové struktuře a může tedy být užívána libovolně 2 procesy 
- Při otevření může dojít k zablokování procesu, neboť služba __OPEN__ čeká jestliže není přítomen proces na druhé konci roury 

Soket \(schránka\) 

- Síťový komunikační prostředek 
- Umožňuje navázat dva typy spojení: 
	1. __Datagramové__ – zprávově orientované \(neposkytuje záruku úspěšného doručení, ani pořadí\) 
	2. __Proudové__ – obousměrný datovod \(data proudí oběma směry\) 
- Je určen pěticí údajů 
	1. __První dvojice__: Adresa počítače \(IP adresa, port\) 
	2. __Druhá dvojice__: Údaje o procesu klienta \(žadatele, IP adresa klienta, číslo portu\) 
	3. __Poslední údaj pětice__: Určuje použitý nízkoúrovňová protokol, výhradně TCP/UDP 
	4. __TCP__ je spojově orientovaný protokol což znamená, že k navázání "end\-to\-end" komunikace potřebuje, aby proběhl mezi klientem a serverem tzv\. "handshaking"\.  
		1. __klient pošle SYN packet__ s uvedeným číslem sekvence \(x\), číslo odpovědi 0 
		2. druhá strana si uloží číslo sekvence \(x\) a odpoví SYN\-ACK, jako číslo sekvence nastaví svoje číslo \(y\) a do čísla odpovědi vloží \(x\+1\) \- další očekávanou hodnotu 
		3. klient odpoví ACK, číslo sekvence \(x\+1\), číslo odpovědi \(y\+1\) 

 *(obrázek vynechán)*

 

-
	-
		1. Poté, co bylo spojení navázáno, data mohou být posíláná oběma směry\. Charakteristické vlastnosti TCP protokolu jsou: 
		2. __spolehlivost__ – TCP používá potvrzování o přijetí, opětovné posílání a překročení časového limitu\. Pokud se jakákoliv data ztratí po cestě, server si je opětovně vyžádá\. U TCP nejsou žádná ztracená data, jen pokud několikrát po sobě vyprší časový limit, tak je celé spojení ukončeno\. 
		3. __zachování pořadí__ – Pokud pakety dorazí ve špatném pořadí, TCP vrstva příjemce se postará o to, aby se některá data pozdržela a finálně je předala správně seřazená\. 
		4. __vyšší režie__ – TCP protokol potřebuje např\. tři pakety pro otevření spojení, umožňuje to však zaručit spolehlivost celého spojení\. 

 

-
	1. __UDP__ je jednodušší protokol založený na odesílání nezávislých zpráv\. Charakteristika protokolu: 
		1. __bez záruky__ – Protokol neumožňuje ověřit, jestli data došla zamýšlenému příjemci\. Datagram se může po cestě ztratit\. UDP nemá žádné potvrzování, přeposílání ani časové limity\. V případě potřeby musí uvedené problémy řešit vyšší vrstva\. 
		2. __nezachovává pořadí__ – Při odeslání dvou zpráv jednomu příjemci nelze předvídat, v jakém pořadí budou doručeny\. 
		3. __jednoduchost__ – Nižší režie než u TCP \(není zde řazení, žádné sledování spojení atd\.\)\. 

*Navazování spojení* 

- Navazování spojení začíná otevřením tzv\. půl soketu na straně serveru, ten nabídne potenciální spojení na dané IP adrese danému portu 
- Na druhé straně komunikace, klient vyšle požadavek na spojení, který obsahuje identifikaci serveru \(adresu, port, protokol\) 
- Pokud je na specifikovaném místě nalezen soket, jenž čeká na spojení, dojde ke vzniku spojení \(relace\) 

 

Fronta zpráv 

- Zprávově orientovaný komunikační prostředek 
- Zajišťuje směrování, řazení zpráv i základní synchronizaci procesů 
- Umožňuje cílenou i všesměrovou výměnu zpráv omezené velikosti mezi dvěma či více procesy 
- Každá zpráva se skládá z hlavičky \(obsahuje základní informace\) a těla zprávy 
- Pokud je fronta zpráv plná, __vysílající__ proces se blokuje 
- Není\-li ve frontě zpráv žádná použitelná zpráva, __přijímací__ proces se blokuje 
- Zprávy jsou nezbytné u OS s architekturou klient\-server, ale používají se i v jiných systémech 

Vzdálené volání procedur 

- Umožňuje volání funkcí v jiném adresovém prostoru, nebo v jiné instanci OS 
- Vzdáleně volaná procedura může přijímat parametry 
- Jedná se o zprávově orientovaný obousměrný komunikační prostředek 

*Výhody* 

- Předáván dat do funkcí 
- Automatické řazení dat 

*Nevýhody* 

- Identifikace vzdálené funkce se musí dít na základě poskytované služby \(adresa, port\) a nikoliv jen adresou funkce 
- Ošetřování chybových stavů – může dojít k chybě během přenosu parametrů a návratové hodnoty, dále přerušení spojení, chybná identifikace protistrany atd\. 

15\) DB \(Data x informace, koncepční model, fyzický model, ERD \(transferable x nontransferable, optionalita x kardinalita\)

- Databázový design\(návrh\) je proces vytvoření detailního modelu databáze 
- Slouží k popisu databáze a jejích potřeb 
	- Jak bude vypadat 
	- Tabulky, datová struktura, atributy 
	- Primární klíče, cizí klíče 
	- Propojení 
- K popisu databáze slouží ERD  

Data x Informace 

- Slova Data, Informace se často používají jako synonyma 
- Mají však jiný význam 

Data 

- Záznam něčeho\.\. __\(číslo, datum, řetězec__\) 
- Například \- známky z testů, __zameškané hodiny studenta, telefoní čísla__ 

Informace 

- Může být výsledkem práce s daty 
- Například – průměrná známka z testů, absence z češtiny, nejvíce vytáčené tel\. číslo 

Databáze 

- Také jinak __Elektronická forma/podoba registru__ 
- Organizovaná data do struktury 
- Tato data jsou navzájem propojeny pomocí klíčů 

 

Modely DB 

Hierarchický 

- Data jsou organizována do stromové struktury 
- Vztahy Rodič X Potomek 
- Podporuje pouze vztahy 1 : N 

Síťový 

- Podobná hierarchickému modelu 
- zdokonalení hierarchické koncepce 
- Vztahy Rodič X Potomek 
- Podporuje i vztah N : Nw 

Relační  

- Nejvyužívanější 

 

Proces vývoje databáze 

- Vývoj databáze začíná požadavky na databázi 
	- Jaké vytvořím tabulky 
	- Jaké budu ukládat data 
	- Jaké datové typy  

Příklad 

- Máme Firmu  \- vytvoříme pro ně databázi 
- Oddělení ve firmě – v databázi vytvoříme tabulku oddělení, která bude obsahovat různé informace 
- Máme zaměstnance – zaměstnance odkážeme v DB na oddělení v jakém pracují 
- Atd 

Konceptuální návrh 

- Zachycuje informační a funkční potřeby\. \(koncept DB\) 
- Nezávislý na použitém DBS 
- Je postaven na aktuálních potřebách, ovšem odráží budoucí potřeby\. 
- Zachycuje pouze potřeby \(ideu\), né fyzickou implementaci \(co je fyzicky možné\)\. 
- Nazývá se "Entity Relationship Model"\. 
- A zakresluje se pomocí ERD  
- Je to výsledek dokončení procesu "Data Modeling"\. 
- Přesně popisuje potřeby\. 
- Zabraňuje chybám a nedorozuměním 
- Vytváří dokumentaci „ideálního systému“\. 
- Vytváří základ pro fyzický návrh databáze\. 

  

Fyzický datový model 

- Využívá konceptuálního návrhu DB 
- Závislý na použitém DBS 
- Vezme logický návrh \(konceptuální\) a převede jej už na konkrétní databázový systém 
- Pro vytvoření fyzického modelu je zapotřebí dobrá znalost DBS 
- Konceptuální model – otázka „Co udělat??“ 
- Fyzický model – otázka ,,Jak to udělat??“  

 

ERD \(Entity Relationship Model\) 

- Využívá se pro zobrazení databáze, vztahů v ní, tabulek, dat\.\. 
- Nezávislé na zvolené databází 
- Slouží pouze ke zobrazení  
- Návrh bude stejný pro MySQL, Oracle, PostgressSQL, MariaDB…\. 

3 Koncepty 

Entita 

- Dá se definovat jako věc schopná samostatné existence__\(člověk, zvíře, auto, student\.\.\)__ 
- Buď abstraktní nebo konkrétní 
- __Objednávka, Transakce__ x __Dům, Hráč__ 
- Entity se zobrazují jako obdélníky 
- Každá entita musí obsahovat primární klíč, aby byla jednoznačně identifikovatelná 
- V DB reprezentovány jako tabulky 
- Instance entit se v DB označují jako záznamy a najdeme je v tabulkách 
- V programovacích jazycích je můžeme označit jako objekty 

Atribut     

- Vlastnosti entit, které jí popisují 
- Přímo charakterizují instanci entity 
- Mají své jméno a datový typ 
- Není schopen samostatné existence 
- Například věk, počet, emailová adresa, adresa bydliště, popis… 
- V DB reprezentovány jako sloupce tabulek 
- V programovacích jazycích je můžeme označit jako vlastnosti objektu 

*Typy* 

-
	- __Unikátní identifikátor__ – Atribut  
	- __Povinný atribut__ \- Atribut, jež nesmí být NULL\. 
	- __Volitelný atribut__ \- Atribut, jež může být NULL\. 

  

*Primární klíč \(Primary key\)* 

-
	- Jednoznačný identifikátor záznamu 
	- Primárním klíčem může být jeden sloupec či kombinace více sloupců pro jednoznačnou identifikaci záznamu 
	- Nesmí nabývat hodnoty NULL 
	- Dnes se používají tzv\. umělé klíče  
		- Unikátní 
		- Většinou celé číslo 
		- Většinou AUTO\_INCREMENT \- vždy o 1 větší než předchozí záznam 
		- Nabývají vždy jiné hodnoty od předchozích záznamů¨ 
		- Známe je jako ID\_Entity 

 

*Kandidátní klíč* 

- Klíč jež bude u každého záznamu odlišný 
- Tzv\. unikátní pro každý záznam v tabulce 
- Nemusí, ale může se jednat o primární klíč 
- Př\. 
- Máme Zaměstnance\(Rodné číslo, id zaměstnance\) 
- Rodné číslo i ID zaměstnance je pro každého jiné 
- Pokud zvolíme ID\_zam jako primární klíč, poté rodné číslo bude __alternativní klíč __ 

*Cizí klíč \(Foreign key\)* 

- Slouží k vyjádření vztahů mezi entitama/tabulkama 
- Jedná se o hodnoty jež ve dvou záznamech spolu souvisí nebo jsou stejné 

Vztah 

- Spojuje 2 entity k sobě  
- Na základě primárních a cizích klíčů 

Vlastnosti 

Optionalita 

- Vztahy jsou buď povinné či dobrovolné  \(Může x Musí\) 
- Př\. Dvě entity PRÁCE a ZAMĚSTNANEC 
- Musí mít každý ZAMĚSTNANEC PRÁCI? 
- Musí být každá PRÁCE vykonávána ZAMĚSTNANCEM? 

Kardinalita 

- Kardinalita měří kvantitu něčeho\. Ve vztahu to pak znamená stupeň jakým je jedna entita vztažená k druhé, který je určen otázkou: "Kolik?"\. 
- Kolik PRACÍ může mít ZAMĚSTNANEC? 
- Kolik ZAMĚSTNANCŮ může být v určité PRÁCI? 

Příklady: 

Jeden zaměstnanec __musí\(optionalita\)__ mít __jednu\(kardinalita\)__ práci 

Jeda práce __může\(optionalita\)__ mít __jednoho či více\(kardinalita\)__ zaměstnanců 

__ __ Transferable 

- Možnost změny vztahu 
- Příklad: 
- __STUDENT může být přesunut z jedný TŘÍDY do druhý\.__ Vztah je trasferabilní\. 

Nontransferable 

- Vztah není možné změnit  
- Příklad: __STUDENT může dostat ÚČET za školné\. Ten ÚČET nemůže být změnen na jiného studenta\.__ 

16\) DB \(ERD \(identifikátory, ARC\), CRUD, rekurzivní model, normalizace\)

Databázový design\(návrh\) je proces vytvoření detailního modelu databáze 

- Slouží k popisu databáze a jejích potřeb 
	- Jak bude vypadat 
	- Tabulky, datová struktura, atributy 
	- Primární klíče, cizí klíče 
	- Propojení 
- K popisu databáze slouží ERD  

ERD \(Entity Relationship Model\) 

- Využívá se pro zobrazení databáze, vztahů v ní, tabulek, dat\.\. 
- Nezávislé na zvolené databází 
- Slouží pouze ke zobrazení  
- Návrh bude stejný pro MySQL, Oracle, PostgressSQL, MariaDB…\. 

3 Koncepty 

Entita 

- Dá se definovat jako věc schopná samostatné existence\(člověk, zvíře, auto, student\.\.\) 
- Buď abstraktní nebo konkrétní 
- Objednávka, Transakce x Dům, Hráč 
- Entity se zobrazují jako obdélníky 
- Každá entita musí obsahovat primární klíč, aby byla jednoznačně identifikovatelná 
- V DB reprezentovány jako tabulky 
- Instance entit se v DB označují jako záznamy a najdeme je v tabulkách 
- V programovacích jazycích je můžeme označit jako objekty 

Atribut     

- Vlastnosti entit, které jí popisují 
- Přímo charakterizují instanci entity 
- Mají své jméno a datový typ 
- Není schopen samostatné existence 
- Například věk, počet, emailová adresa, adresa bydliště, popis… 
- V DB reprezentovány jako sloupce tabulek 
- V programovacích jazycích je můžeme označit jako vlastnosti objektu 

*Typy* 

- __Unikátní identifikátor__ – Atribut  
- __Povinný atribut__ \- Atribut, jež nesmí být NULL\. 
- __Volitelný atribut__ \- Atribut, jež může být NULL\. 

* * 

*Primární klíč \(Primary key\)* 

- Jednoznačný identifikátor záznamu 
- Primárním klíčem může být jeden sloupec či kombinace více sloupců pro jednoznačnou identifikaci záznamu 
- Nesmí nabývat hodnoty NULL 
- Dnes se používají tzv\. umělé klíče  
	- Unikátní 
	- Většinou celé číslo 
	- Většinou AUTO\_INCREMENT \- vždy o 1 větší než předchozí záznam 
	- Nabývají vždy jiné hodnoty od předchozích záznamů¨ 
	- Známe je jako ID\_Entity 

* * 

*Kandidátní klíč* 

- Klíč jež bude u každého záznamu odlišný 
- Tzv\. unikátní pro každý záznam v tabulce 
- Nemusí, ale může se jednat o primární klíč 
- Př\. 
	- Máme Zaměstnance\(Rodné číslo, id zaměstnance\) 
	- Rodné číslo i ID zaměstnance je pro každého jiné 
	- Pokud zvolíme ID\_zam jako primární klíč, poté rodné číslo bude __alternativní klíč __ 

*Cizí klíč \(Foreign key\)* 

- Slouží k vyjádření vztahů mezi entitama/tabulkama 
- Jedná se o hodnoty jež ve dvou záznamech spolu souvisí nebo jsou stejné 

Vztah 

- Spojuje 2 entity k sobě  
- Na základě primárních a cizích klíčů 
- \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- NOVÁ DATA \(ODSUD DOLŮ \- NAHOŘE ČÁST OTÁZKY 15\) 

Identifikátory 

- Používají se pro jednoznačné označení\(identifikaci\) v celé DB  
- Téměř vše může mít identifikátor – Servery, __databáze, tabulky, pohledy, indexy, triggery, procedury__… 
- ,,Tzv\. jsou to jména“ 
- Identifikátor zadáváme když objekt vytváříme   
	- CREATE TABLE TableX 

Omezení 

- Nelze vytvořit stejné identifikátory 
- Pokud je DBA incase – sensitive nelze vytvořit ani identifikátory ,,Student“ a „student“ 
- Identifikátor nesmí být již definované slovo\(__rezervované slovo__\) v DBS jako „CREATE, DELETE, SELECT, VIEW, TABLE“… 
- Rezervovaná slova jsou jak Lower\-case tak i Upper\-case 

 

ARC vztah 

- Vyjadřuje vztah mezi dvěma entitami, které se  navzájem vylučují 
- __Příklad__ 
	- Osoba je buď zaměstnanec nebo zákazník, nikdy obojí najednou 
	- Billboard obsahuje buď film, nebo produkt, nebo ustanovení nikdy, vždy jednu z věcí, nikdy 2 a více naráz 

  

CRUD 

- O__značení pro 4 základní operace nad DB__ 

__Význam__ 

__Důvod__ 

__SQL__ 

__C__REATE 

Vytvoření dat 

INSERT 

__R__ETRIEVE 

Získání dat 

SELECT 

__U__PDATE 

Úprava dat 

UPDATE 

__D__ELETE 

Vymazání dat 

DELETE 

  

Syntaxe INSERT 

INSERT INTO *table\_name* \(*column1*,* column2*,* *\.\.\.\) 

VALUES\(*value1*,* value2*,* value3*, \.\.\.\) 

Syntaxe SELECT 

SELECT *column1*,* column2, \.\.\.* 

FROM *table\_name*; 

Syntaxe UPDATE 

UPDATE *table\_name* 

SET *column1 *=* value1*,* column2 *=* value2*, \.\.\. 

WHERE *condition*; 

Syntaxe DELETE 

DELETE FROM *table\_name* 

WHERE *condition*; 

  

  

Rekurzivní model 

- Rekurzivní model spojuje 2 objekty/záznamy se s sebou samým 
- __Příklad    __ 
	- Máme firmu 
	- Ve firmě pracují zaměstnanci 
	- Zaměstnanci mají svého managera/nadřízeného 
	- Manažer má stejné atributy jako zaměstnanci __\(je též zaměstnanec\)__ 
	- __Nebudeme__ vytvářet 2 tabulky  
		- __Zaměstnanec\(jméno, mzda, nástup, manažer\.\.\)__ 
		- __Manažer\(jméno, mzda, nástup,\.\.\)__ 
	- Vytvoříme pouze tabulku zaměstnanci, kterou propojíme na tabulku zaměstnanci 
	- Pokud bude zaměstnanec, vyplníme jeho atribut nadřízený 
	- Pokud bude manager necháme místo NULL__, pokud nemá jiného nadřízeného__ 

*(obrázek vynechán)*

 

 

 

 

Hierarchický model  x Rekurzivní model 

Normalizace 

- Proces organizace dat v databázi 
- Zahrnuje vytvoření tabulek, definici jejich struktur \(atributů\), vztahů mezi tabulkami… 
- __Snaží se o vyloučení 2 faktorů__ 

Redudance 

- Několikanásobně uložené stejné údaje 
- Plýtvání prostorem na disku 
- Komplikace údržby DB 
- Př\. 
	- Při objednávkách uložit firmu do samostatné tabulky a odkazovat se na ni 
	- Místo ukládání firmy do objednávek faktur, dodacích listů 

Nekonzistentní závislost dat 

- Pokud jsou informace uložené na nesprávném místě 
- Zatěžuje dostupnost údajů 
- Př\. 
	- Pokud je mzda zaměstnance uložena v záznamu firmy u které pracuje 
	- Plat zaměstnance je závislý na zaměstnanci, nikoliv na firmě 

Pravidla 

1 Normalizace 

- Neopakovat data v tabulkách 
- Data jsou uložena pouze jednou a to na nejlepším místě 

2 Normalizace 

- Vytvořit tabulku pro množinu hodnot jež budou použity u více záznamů, nevytvářet znovu \(__nevytvářet u objednávky pokaždé firmu jež si objednala, pouze se na ni odkázat\)__ 

3 Normalizace 

- Vyřadit data jež nejsou podstatná pro entitu a dát je do samostatné tabulky 
- Př\. 
	- Máme tabulku města\(__počet obyvatel, velikost\.\.\)__ 
	- Místo abychom uchovávali data o státu ve kterém město je 
	- Vytvoříme samostatnou tabulku pro stát, kterou pak napojíme na města 

 

 

 

 

17\) DB \(kategorie příkazů, funkce, konverze dat, NULL funkce, podmínky, propojování tabulek\) 

Kategorie příkazů 

DML \- Data Manipulation Language 

- Příkay pro manipulaci s daty – jejich __získání, úpravu a mazání__ 
	1. __SELECT__ – vybírá data z databáze 
	2. __INSERT__ – vkládá do databáze nová data\. 
	3. __UPDAT__E – mění data v databázi \(editace\)\. 
	4. __MERGE__ – kombinace INSERT a UPDATE – data buď vloží \(pokud neexistuje odpovídající klíč\), pokud existuje, pak je upraví ve stylu UPDATE\. 
	5. __DELETE__ – odstraňuje data \(záznamy\) z databáze\. 

\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- 

-
	1. __EXPLAIN__ – speciální příkaz, který zobrazuje postup zpracování SQL příkazu\. Pomáhá uživateli optimalizovat příkazy tak, aby byly rychlejší\. 
	2. __SHOW__ \- méně častý příkaz, umožňující zobrazit databáze, tabulky nebo jejich definice 

DDL – Data Definition Language 

- Příkazy pro vytvoření struktury databáze 
	1. __CREATE__ – vytváření nových objektů\. 
	2. __ALTER__ – změny existujících objektů\. 
	3. __DROP__ – odstraňování objektů\. 

DCL – Data Control Language 

- Někdy též TCC – Transaction Control Commands 
- Příkazy pro nastavování přístupových práv a řízení transakcí 
	1. __GRANT__ – příkaz pro přidělení oprávnění uživateli k určitým objektům\. 
	2. __REVOKE__ – příkaz pro odnětí práv uživateli\. 
	3. __START TRANSACTION__ – zahájení transakce\. 
	4. __COMMIT__ – potvrzení transakce\. 
	5. __ROLLBACK__ – zrušení transakce, návrat do původního stavu\. 

Ostatní příkazy 

- __Slouží pro správu databáze__ 
- Př\. 
	- Přidávání uživatele DB 
	- Nastavení časové zóny 
	- Vypnutí AUTO\_INCREMENTU 
	- …\.\. 

 

Komentáře 

- SQL podporuje i komentáře 
- MySQL podporuje následující 

*Jednořádkový    * 

- před komentářem __   \[\-\-, \#\#, \#\]__ 

*Víceřádkový* 

- před komentářem   __/\*__ 
- za komentářem __\*/__ 

Konverze dat 

- Konverze znamená v informatice převod informace do jiného zobrazení, zejména do jiného kódu, jiného formátu nebo jiné číselné soustavy 
- Př\.  
	- Z BIN2 do HEX16 
	- Z Javy do C\# 
- U MySQL __funkce CONVERT__\(*data\_type\(length\), expression, style*\) či konvert 
	- SELECT__ CONVERT\(varchar, 25\.65\);__ 
	- SELECT CAST\(varchar AS 25\.65\); 

Funkce   

- Funkce je pojmenovaný blok kódu 
- Uložené na serveru 
- __Zkompilované__ pro rychlejší použití 
- Na rozdíl od procedury vrací hodnotu 
- Jsou UDFs i BIFs __\( vestavěné \)__ 
- Př\.  
	- SCALAR FUNCTION \(20, 19\.8\.2014, "Jmeno"\) 
	- TABLE\-VALUED FUNCTION \(tabulku, nebo řádek tabulky\) 

Vytvoření funkce 

CREATE FUNCTION nazev\(param\) \[IN, OUT, INOUT\] 

RETURNS dat\_typ 

BEGIN 

DECLARE prom dat\_typ DEFAULT hodnota 

Příkazy SQL; 

RETURN hodnota; 

END; 

NULL funkce 

- Může se stát že výraz SELECT… nevrátí žádný řádek = vrátí hodnotu NULL 
- Můžeme otestovat a předejít pomocí 2 funkcí 

IFNULL 

- IFNULL\(první\_výraz,druhý\_výraz\) 
- vrátí první neNULLový výraz 

SELECT IFNULL \(0,2\) – vrátí 0 

SELECT ProductName, UnitPrice \* \(UnitsInStock \+ IFNULL\(UnitsOnOrder, 0\)\) 

FROM  Products 

ISNULL 

- ISNULL\(*výraz*\) 
- Otestuje zda je výraz NULL 
- Pokud ISNULL\(*výraz*\) == NULL vrací hodnotu 1 
- Pokud ISNULL\(*výraz*\) \!= NULL vrací hodnotu 0 

Propojování tabulek 

- K propojování tabulek slouží příkaz JOIN 
- Propojení tabulek na základě 1 či více parametrů například __ID__ 
- 4 typy spojení tabulek 
	- INNER JOIN \-   zobrazí položky, které jsou celé tzv\. nechybí u nich nějaká klíčová data, Pokud by v našem případě neexistoval uživatel s id, které je u článku uvedeno, článek bez uživatele by vůbec nebyl ve výsledcích obsažen 

*(obrázek vynechán)*

-
	- OUTER JOIN \- Vnější JOINy umožňují vybírat i ty výsledky, které se nepodařilo spojit z důvodu chybějících položek\. 
	- RIGHT OUTER JOIN \-  \(Pokud existuje hodnota na pravé straně \- chybějící hodnota je NULL\) 

*(obrázek vynechán)*

-
	- LEFT OUTER JOIN \-  \(Pokud existuje hodnota na levé straně \- chybějící hodnota je NULL\) \- levá část vazby \(zde článek\) a pravá \(ta připojovaná, zde uživatel\) neexistuje\. Do hodnot sloupců z připojované části se vloží NULL\. 

*(obrázek vynechán)*

- Pokud napíšeme __pouze JOIN poikládá ho DB za INNER JOIN__ 

SELECT nazev\_práce, zamestnanec FROM zamestnani 

JOIN zamestnanci ON zamestnani\.zam\_id = zamestnanec\.zam\_id 

 

 

*(obrázek vynechán)*

  

  

  

Podmínky 

WHERE 

- Používá se pro filtrování záznamů 
- Získávání specifických záznamů, které splňují určitou podmínku 
- Podmínek může být více 

SELECT nazev, cislo, \.\.\. 

FROM  tabulka 

WHERE cislo = 2 

Operátory pro podmínky 

-
	- AND, &&    musí být splněny obě podmínky 
	- OR, ||        jedna z podmínek je pravdivá 
	- =        podmínky se rovnají 
	- >, =>        větší, větší nebo rovno 
	- <, <=        menší, menší nebo rovno 
	- MOD, %    modulo 
	- NOT, \!        negace 
	- <>, \!=        nerovnost 
	- LIKE        pro porovnávání řetězců 
		- %a – řetězec začíná na „a“ 
		- %a% – řetězec obsahuje „a“ 
		- %a – řetězec končí na „a“ 

IF ELSE 

- IF hodnota < 50 THEN 

Příkazy SQL; 

ELSEIF hodnota >100 THEN 

Příkazy SQL; 

\.\.\. 

ELSE 

Příkazy SQL; 

END IF; 

Funkce IF 

-
	- IF\(podmínka, hodnota1, hodnota2\) 
	- SELECT IF\(500<1000, "YES", "NO"\); 

CASE 

- Projede podmínky a vrátí první hodnotu za podmínkou která je splněna 
- Vylepšený ELSE IF\.\. 

SELECT objednavkaID, mnozstvi, 

CASE 

    WHEN mnozstvi > 30 THEN "množství je vetsi nez 30" 

    WHEN mnozstvi = 30 THEN "množství je 30" 

    ELSE "Počet je vetsi" 

END 

FROM  objednavky; 

18\) Database programming  \- Poddotazy \- data dictionary \- datové typy \- DML \- DDL 

Poddotazy – subquery 

- Dotaz, jež je umístěn uvnitř jiného dotazu 
- Subquery mohou vracet data nebo záznamy tabulek 
- __Nejtypičtější__ – subselect 
- Používá se například když nemůžeme použít agregační funkce jako SUM\(\)__,__ COUNT\(\), což je nejčastěji v bloku WHERE 
- Př – zjištění kdo má větší plat než průměr 

SELECT *jméno*, příjmení  

FROM Platy  

WHERE *plat* > \(SELECT AVG\(*plat*\) FROM Platy\)  

Data dictionary 

 

Data dictionary je read\-only databáze jež obsahuje informace o databázi\.  

Obsahuje: 

- Definici všech objektů \(Tabulky, view, indexy, klustery, synonyma, sekvence, funkce, balíčky, triggery\.\.\.\)\. 
- Defaultní hodnoty pro sloupce\. 
- Informace o omezeních\. 
- Jména uživatelů\. 
- Privilegie a role každého uživatele\. 
- Auditní __informace, kdo kde přistoupil či upravil jaký objekt\.__ 
- A další informace o databázi\. 

  

Struktura Data dictionary: 

- Data dictionary slouží jako reference všem uživatelům\. K datům můžeme přistoupit přes SQL dotazy\.  
- Některé view jsou dostupné pro běžné uživatele 
- některé jsou dostupné pouze pro administrátory\.  
- Data dictionary se skládá ze sad view\.  
- Ve většině případů sada obsahuje tři view, které obsahují podobné informace a jsou rozdělené preifxy: 
	- __USER__ \- User view, co je v uživatelském schématu\. 
	- __ALL__ Rozšířený user view, kam může uživatel přistupovat\. 
	- __DBA__ Administrátorský view, obsahuje to co Je ve všech user schématech\. 

Datové typy 

- Pokud při zadávání hodnoty sloupce hodnotu nezadáme, bude hodnota NULL 

Atributy 

- NOT NULL – atribut musí být zadán, musí mít určitou hodnotu 
- AUTO\_INCREMENT – automaticky se zvýší hodnota v každém řádku o 1 
- UNSIGNED – číslo nesmí být záporné, 0 \-> 255 
- SIGNED – číslo může být záporné i kladné, \-128 \-> 127 
	- Při nezadání atributu, je číslo vždy SIGNED 
- ZEROFILL – automaticky vyplní číslo nulami 

Celá čísla  

Název 

Velikost 

Použití 

Pozn 

TINYINT 

1B 

Velmi malá čísla 

  

SMALLINT 

2B 

Malá čísla 

  

MEDIUMINT 

3B 

Středně velká čísla 

  

INT 

4B 

Běžná čísla 

  

BIGINT 

8B 

Velká čísla – např\. ID 

  

- Celá čísla lze také zmenšit na chtěný počet míst 
- Př 
	- *Nazev* ____INT\(5\)__ __\- 12345 
	- *Nazev*__ __INT\(3\) \- 678 

Desetinná     

Název 

Velikost 

Použití 

Pozn 

FLOAT\(M,D\) 

4B 

Malá desetinná čísla 

  

DOUBLE\(M,D\) 

8B 

Velká desetinná čísla 

  

DECIMAL\(M,D\) 

Z pravidla M\+2B 

Velká desetinná čísla 

Ukládáno jako řetězec 

- __M –__ počet míst, které bude číslo obsahovat 
- __D –__ počet, kolik míst z __M__ bude za desetinnou čárkou 
- __Př__ 
	- *Prom*__ __FLOAT\(6,4\) – 26,6886 
	- *Prom* ____DOUBLE\(6,2\)__ – __5000,87__ __ 

Datum a čas 

Název 

Velikost 

Použití 

Pozn 

DATE 

3B 

Datum *–„YYYY\-MM\-DD“* 

  

TIME 

3B 

Čas – „hh:mm:ss“ 

  

DATETIME 

8B 

datum a čas 

*„CCYY\-MM\-DD hh:mm:ss“* 

  

TIMESTAMP\(M\) 

4B 

datum i čas     

„*CCYY\-MM\-DD hh:mm:ss*“ 

Pokud vložíme hodnotu NULL, uloží se aktuální čas a datum 

Změní\-li se jakákoliv hodnota ve stejném řádku, nastaví se TIMESTAMP na čas změny 

YEAR\(M\) 

1B 

Rok – „CCYY“ nebo „YY“ 

Výchozí M=4 

0000 pro YEAR\(4\) 

00 pro YEAR\(2\) 

- Funkce pro aktuální čas nebo datum \- CURDATE\(\), CURTIME\(\), NOW\(\)  
- __Př\. –__ vložení  hodnoty 
	- VALUES__\(__ STR\_TO\_DATE\('1\-01\-2012', '%d\-%m\-%Y'\) __\)__ 
	- VALUES__\(__ '2012\-01\-01' __\)__ 
	- VALUES__\(__ CURDATE\(\) __\)__ 

__ __ 

Řetězcové 

- Pro ukládání textu 
- Většina řetězcových typu nerozlišuje malá/velká písmena 

Atributy 

- BINARY – zajišťuje rozlišování velkých malých/písmen 
- CHARACTER SET 

Název 

Velikost 

  

CHAR\(M\) 

\[M\]B 

Není\-li M uvedeno – M=1 

Pokud je řetězec delší než M, zkrátí se na délku M a konec se odsekne 

Je\-li kratší než M, doplní se mezerami na délku M, ta je však při načítání dat z databáze ignorována, takže nejsou žádné mezery „navíc“ 

__Pevná délka, n 1 až 8000__ 

VARCHAR\(M\) 

M\+1B 

Pokud je řetězec delší než M, tak se zkrátí na délku M a zbytek se „ztratí“ 

Je\-li řetězec kratší než M, koncové mezery se při ukládání odstraní 

__Variabilní délka \(min až max\)__ 

TINYBLOB 

  

  

BLOB 

  

  

MEDIUMBLOB 

  

  

LONGBLOB 

  

  

TINYTEXT 

  

  

TEXT 

  

  

MEDIUMTEXT 

  

  

LONGTEXT 

  

  

ENUM\(h1,h2,h3\.\.\) 

  

Výčtový typ \- Lze přiřadit pouze jednu z hodnot h1,h2… 

SET\(h1,h2,h3\.\.\) 

  

Výčtový typ \- Lze přiřadit i více z hodnot h1,h2… 

- Př\. Prom VARCHAR\(10\) __–__ „Bohumil Mi“ 

 

DML \- Data Manipulation Language 

- Příkay pro manipulaci s daty – jejich získání, úpravu a mazání 

1. SELECT – vybírá data z databáze 
2. INSERT – vkládá do databáze nová data\. 
3. UPDATE – mění data v databázi \(editace\)\. 
4. MERGE – kombinace INSERT a UPDATE – data buď vloží \(pokud neexistuje odpovídající klíč\), pokud existuje, pak je upraví ve stylu UPDATE\. 
5. DELETE – odstraňuje data \(záznamy\) z databáze\. 
6. EXPLAIN – speciální příkaz, který zobrazuje postup zpracování SQL příkazu\. Pomáhá uživateli optimalizovat příkazy tak, aby byly rychlejší\. 
7. SHOW \- méně častý příkaz, umožňující zobrazit databáze, tabulky nebo jejich definice 

Výběr hodnot z tabulky 

SELECT \* FROM Tabulka 

Vložení záznamu do tabulky 

INSERT INTO Tabulka\(Nazev, Počet, Datum\) VALUES \(„Golden Box“,4,NOW\(\)\) 

Změna hodnot v záznamu 

UPDATE Tabulka SET Nazev = „Blue Box“ WHERE ID=4 || Nazev=“Golden Box“ 

Vymazání záznamu 

DELETE FROM Tabulka WHERE ID=4 

DDL – Data Definition Language 

- Příkazy pro vytvoření struktury databáze 

1. CREATE – vytváření nových objektů\. 
2. ALTER – změny existujících objektů\. 
3. DROP – odstraňování objektů\. 

Vytvoření tabulky 

CREATE TABLE Objednavky \( 

*Pocet* INT UNSIGNED, 

*Datum *DATE, 

*Uzivatel* BIGINT UNSIGNED, 

*ID* BIGINT UNSIGNED PRIMARY KEY AUTO\_INCREMENT  

\) 

Úprava tabulky 

ALTER TABLE *table\_name* 

ADD *column\_name datatype*; 

  

ALTER TABLE *table\_name* 

DROP *column\_name datatype*; 

19\) Database programming  \- omezení \(=constraints\) \-view \- sequence \-indexes \-DCL 

Omezení \(constraints\) 

- __Klíčové__ slovo jazyka SQL 
- Umožňuje vytvořit omezení s podmínkami, jež musí být splněny pro hodnoty jejích sloupců při vkládání nebo změnu záznamů 
- Slouží k vytvoření pravidel pro data v DB 
- Udržuje konzistentní data v DB 
- Jsou definované na úrovni objektu\(tabulky\) nebo na úrovni atributu\(sloupce\) 
- Zajišťují například, že tabulka nemůže být odstraněna pokud má vztahy s jinými tabulkami 
- Nesmí být atribut prázdný atd\.  

Typy 

- __NOT NULL__    Nesmí mít NULL hodnotu 
- __UNIQUE KEY__    Musí být jedna jediná hodnota v tabulce, nesmí být 2 stejné 
- __PRIMARY KEY__    Identifikace záznamu v tabulce 
- __FOREIGN KEY__    Identifikace záznamu v jiné tabulce na ni propojené 
- __CHECK__        Zkontroluje zadanou hodnotu \- Den TINYINT CHECK \(*Den *>=1 AND *Den* <=31\), 

Vytvoření  

CREATE TABLE soutezni*\_*otazky\( 

Mesic TINYINT, 

Den TINYINT CHECK \(*Den* >=1 AND *Den* <=31\), 

Otazka TEXT, 

ID BIGINT PRIMARY KEY AUTO\_INCREMENT, 

CONSTRAINT c1 CHECK \(mesic BETWEEN 1 AND 12\) 

\) 

  

CREATE TABLE soutezni*\_*odpovedi\( 

Odpoved TEXT, 

Otazka BIGINT, 

ADD FOREIGN KEY\(Otazka\) REFERENCES soutezni\_otazky\(ID\) 

\) 

  

DCL – Data Control Language 

- Někdy též TCC – Transaction Control Commands 
- Příkazy pro nastavování přístupových práv a řízení transakcí 

1. __GRANT__ – příkaz pro přidělení oprávnění uživateli k určitým objektům\. 
2. __REVOKE__ – příkaz pro odnětí práv uživateli\. 
3. __START__ __TRANSACTION__ – zahájení transakce\. 
4. __COMMIT__ – potvrzení transakce\. 
5. __ROLLBACK__ – zrušení transakce, návrat do původního stavu\. 

  

View \(pohled\) 

- Mohou sloužit jako jiné pojmenování tabulek 
- Mohou z tabulky vybrat jen určité řádky \(nebo sloupce\) 
- Pohledy mohou obsahovat výrazy \(jako jsou vestavěné funkce MySQL nebo uživatelsky definované funkce\)\. 
- Mohou spojovat data z více tabulek  
- A konečně, pohledy se mohou odkazovat na další pohledy 

Výhody oproti tabulkám 

- Mohou spojit a zjednodušit více tabulek v jednu virtuální tabulku 
- __Může řešit oprávnění__ – uživatel může mít přístup k view, avšak nemusí mít přístup k samotné tabulce 
- Zabírají velmi málo místa – databáze si uchovává pouze jak view vypadá, __nikoliv všechna data na která se odkazuje__ 

Vytvoření 

CREATE OR REPLACE VIEW pohled AS 

SELECT jmeno, nazev, pocet \.\.\. 

FROM tabulka 

WHERE podmínka\.\.\. 

 Sekvence 

- Sekvence je pořadí čísel po sobě jdoucích 
- Čísla jsou generována na požadavek 
- Sekvence jsou velmi využívána kvůli potřebě unikátních čísel v tabulce např\. pro PK 
- Příklad sekvence v MySQL je AUTO\_INCREMENT 
- Pro každou tabulku se vytvoří sekvence zvlášť 
- Počáteční hodnotu si můžeme nastavit, výchozí = 0 
- Můžeme získat poslední/aktuální hodnot sekvence pomocí LAST\_INSERT\_ID\(\) nad danou tabulkou __\(i pomocí PHP\)__ 

Vytvoření 

CREATE TABLE objednávky\( 

ID INT AUTO\_INCREMENT 

IPRIMARY KEY\(ID\) 

\) 

AUTO\_INCREMENT = 115 

   

Indexy 

- Slouží ke zrychlení vyhledávacích a dotazovacích procesů na data v databázi 
- Měli by se použít u všech sloupců tabulek, podle kterých se vyhledávají, třídí data nebo se podle nich spojují tabulky 

Jak fungují 

- Při vkládání dat do DB, obvykle nejsou tříděny a jsou rovnány za sebe 
- Pokud chceme pak vybrat specifická data musíme projet všechna data za sebou než najdeme požadovaná data 
- K tomu abychom nemuseli projíždět všechna data slouží Indexy 
- V Indexech jsou data organizována tak, abychom nemuseli projíždět všechna data 

Vytvoření 

CREATE INDEX \[*jmeno\_indexu*\] ON \[*jmeno\_tabulky*\]\(\[*sloupec*\]\) 

CREATE INDEX autorid\_index ON autori\(autor\_id\) 

 

CREATE TABLE zamestnanci\( 

jmeno VARCHAR\(30\), 

datum\_nastupu DATE, 

\.\.\. 

          INDEX zam\_index \(datum\_nastupu, zam\_ID \.\.\. \) 

\) 

<a id="_Hlk527923916"></a>20\) SQL \(základy, bloky, cursory, transaction control statements,loop\)  

- Rozžíření SQL jazyka 
- Umožňuje přenést část aplikační logiky na server do DB 
- Některá práce s daty lze provést přímo na serveru nikoliv až v aplikaci 
- __PL/SQL__ = procedurálně rozšířené SQL  

Obsah rozšíření 

- Funkce 
- Procedury 
- Triggery 
- Kurzory 

Proměnné 

- PL/SQL dovoluje deklarovat konstanty a proměnné 
- Musejí být deklarovány ještě před použitím 
- Proměnné nesmí mít název SQL definovaných slov __\(INT, CREATE, FUNCTION\.\.__\) 

Typy 

Lokální 

- Dají se použít pouze v daném bloku 
- Klíčové slovíčko __DECLARE__ 

DECLARE xname VARCHAR\(5\) DEFAULT 'bob'; 

DECLARE newname VARCHAR \(5\); 

DECLARE xid INT; 

  

Session 

- Když se připojí klient na server, vytvoří se mezi nimi vztah/session 
- Dají se používat pouze v daném připojení s klientem 
- Ovlivňuje připojení mezi klientem a serverem 
- SET SESSION nazev = hodnota;  

  

Globální 

- Dají se používat v rámci celé DB i mezi různými Sessionami 
- Ovlivňuje DB, př\. můžeme nastavit systémové proměnné jako max\. počet připojených klientů 

SET @název=hodnota; 

SET GLOBAL max\_connections = 1000;  

SET PERSIST max\_connections = 1000; 

 

Transaction controll 

- Provádí se pomocí DCL 
- Transakce může být provedena, ale také může být zrušena a navrácena 
- 2 závěry  
	- __Transakce se povede __ 
	- __Transakce se nepovede__ – dojde k navrácení\(ROLLBACK\) 
- Používá se pokud chceme mít jistotu, že k něčemu došlo, či došlo k chybě 
	- Při výpadku serveru 

 

- Transakce __začíná BEGIN WORK__ 
- Končí 
	- __COMMIT__ – když dojde ke správnému vykonání transakce příkazem COMMIT dáme najevo ať se změny projeví 
	- __ROLLBACK__  \- když dojde k chybě v transakci, příkazem ROLLBACK navrátíme vše do původního stavu před provedením transakce 

 

Bloky 

- PL/SQL je blokově strukturovaný jazyk 
- Bloky můžeme do sebe vnořovat 

Rozdělení 

Nepojmenované/Anonymní 

- Klasické SQL 

Pojmenované 

- Pojmenované bloky kódu SQL 
- Můžeme je zavolat 
- Jsou rychlejší, protože jsou již předem kompilované na serveru  

 

Typy 

Deklarativní bloky 

- Zde definujeme proměnné, konstanty a jiné elementy, které pak používáme uvnitř daného bloku 

Spouštěcí bloky 

- Obsahuje příkazy, které se postupně provádějí 

Bloky pro zpracování výjimek 

- Speciálně strukturovaný blok, který zpracovává vyjímky 

Kurzory 

- Používají se pro práci s daty v PL/SQL 
- Kurzor naplníme pomocí SQL příkazu daty 
- Vytvoří si v paměti místo pro data – tzv kontext kurzoru 
- Kurzor drží jeden či více záznamů\(aktivní sada\) 

Typy 

Implicitní 

- Implicitní kurzor se automaticky vytvoří vždy, když se provede SQL výraz 
- Databázový systém si ho vytváří sám 
- Vytváří se pro DML\(INSERT, UPDATE, DELETE\) 
- Pro INSERT se vytvoří kurzor, který drží data která se mají přidat 
- Pro UPDATE a DELETE se vytvoří kurzor s daty jež budou ovlivněny 

Explicitní 

- Uživatel si vytváří kurzor sám 

  

Vytvoření 

1. Deklarace – vytvoříme kurzor pro data 

DECLARE nazev\_kursoru CURSOR FOR SELECT ID, name, adress FROM  customers; 

1. Otevření kurzoru – otevřením alokujeme prostor v paměti a připravíme kurzor na připnutí dat k němu 

OPEN nazev\_kurzoru; 

1. Připnutí dat – kurzoru přiřadíme v danou chvíli postupně vždy 1 řádek ze všech vrácených 

FETCH nazev\_kurzoru INTO variable1, variable2, \.\.; 

1. Zavření kurzoru – vyprázdnění paměti 

CLOSE nazev\_kurzoru; 

Příklad 

2 tabulky db 

Knihy\(id, nazev, cena, rok, stav\) 

Vyrazene\(id, nazev, cena, rok, dat\_vyr\) 

  

DELIMITER // 

CREATE PROCEDURE Vyrazeni\(\) 

BEGIN 

DECLARE done INT DEFAULT FALSE; 

DECLARE v\_id INT; 

DECLARE v\_nazev CHAR\(50\); 

DECLARE v\_cena DECIMAl\(9,2\); 

DECLARE v\_rok YEAR\(4\); 

DECLARE cur\_vyrazeni CURSOR FOR SELECT id, nazev, cena, rok FROM  Knihy WHERE stav=5; 

  

OPEN cur\_vyrazeni; 

vyrazeni: LOOP 

  

IF done THEN LEAVE vyrazeni 

END IF; 

FETCH cur\_vyrazeni INTO v\_id, v\_nazev, v\_cena, v\_rok; 

INSERT INTOVyrazene\(id, nazev, cena, rok,dat\_vyr\) VALUES \(v\_id, v\_nazev, v\_cena, v\_rok, NOW\(\)\); 

END LOOP vyrazeni; 

CLOSE cur\_vyrazeni; 

END // 

Loop – smyčky 

- Slouží k opakovanému provedení bloku kódu__                                           __ 

BASIC LOOP 

- Nejjednodušší smyčka 
- Kód mezi LOOP a END LOOP 
- Obsahuje podmínku, pokud je pravdivá smyčka se ukončí 

LOOP  

statement1; 

statement2; 

\. \. \. 

EXIT WHEN podmínka 

END LOOP; 

  

WHILE LOOP 

- Smyčka běží, dokud zadaná podmínka již NENÍ TRUE 
- Je vyhodnocena na začátku každé interace 
- Smyčka se zastaví, pokud je podmínka vyhodnocena jako FALSE či NULL\. 

WHILE podmínka LOOP 

statement1; 

statement2; 

\. \. \. 

END LOOP; 

  

FOR LOOP 

- Má přímo dán počet iterací\. 

FOR i IN 1 \. \. 3 LOOP 

Příkazy SQL 

END LOOP; 

  

REPEAT LOOP 

- Provádí se dokud je podmínka FALSE  

REPEAT     

Příkazy SQL 

UNITL podmínka 

END REPEAT; 

21\) SQL \(exceptions \(výjimky\),procedury,procedury s parametrem, triggers, function\) 

Exceptions \(výjimky\)  

- Slouží pro vykonávání rizokové části kódu 

Systémové  

- Vyvolány automaticky při výskytu chyby 

  

  

Triggery  

- Trigger si můžete představit jako spoušť určité činnosti\.  
- Jednoduše si nadefinujete, při jaké akci \(update, delete, insert\) se mají spustit určité SQL příkazy\.  
- Obecně trigger definuje událost, která zautomatizuje jednotlivé procesy\. Maximálně 6x\. 

 

__Základní rozdělení__ 

- After triggers \- zavolá se po úvodní akci\.  
- Before triggers \- PŘED akcí 

 

- __DML trigger__ \- jsou prováděny automaticky v odpovědi na DML události\(INSERT, UPDATE, DELETE\) 
- __DDL trigger__ \- spouští se při CREATE, DROP, ALTER operacích 
- __Logon trigger__ \- spouští se při vytvoření uživatelské session 

 

- V rámci jednoho triggeru existují dvě pseudotabulky\.  
- Ty zpřístupňují nová a stará data \(INSERTED, DELETED\)\. 
- V rámci triggeru lze pomocí ROLLBACK zrušit operaci, která trigger spustila\.  
- Jeden trigger lze použít i pro více akcí najednou \(například UPDATE a DELETE\)\. 

 

DELIMITER // 

CREATE TRIGGER trigger\_name      

BEFORE | AFTER    INSERT | UPDATE | DELETE 

ON tbl\_name FOR EACH ROW      

BEGIN 

  prikazy SQL;  

END// 

DELIMITER ; 

 

*(obrázek vynechán)*

 

Funkce   

- Funkce je pojmenovaný blok kódu 
- Uložené na serveru 
- Zkompilované pro rychlejší použití 
- Na rozdíl od procedury vrací hodnotu 
- Jsou UDFs i BIFs \( vestavěné \) \- Uživatelem definované i vestavěné \(npř\. Agregační funkce\) 
- Př\.  
	- SCALAR FUNCTION \(20, 19\.8\.2014, "Jmeno"\) 
	- TABLE\-VALUED FUNCTION \(tabulku, nebo řádek tabulky\) 

Vytvoření funkce 

CREATE FUNCTION nazev\(param\) \[IN, OUT, INOUT\] 

RETURNS dat\_typ 

BEGIN 

DECLARE prom dat\_typ DEFAULT hodnota 

Příkazy SQL; 

RETURN hodnota;  

END; 

Procedury      

- Procedura je zvláštním případem funkce 
- NEMÁ návratovou hodnotu a nemusí mít ani vstupní parametry 
- Používají se často při dávkovém zpracování – např\. každou hodinu zavoláme proceduru, která zpracuje objednávky, které se nashromáždily v databázi, a předá je do jiného systému\. 
- Uložené na serveru 
- Zkompilované pro rychlejší použití 
- Uložené procedury jsou jednou z věcí, kterou se liší "malé" databáze od "velkých" 
- Může je spouštět jen autorizovaný uživatel \(admin\) 
- __Nelze spouštět běžným uživatelem__ 
- Obsahuje SQL dotazy, cykly, podmínky… 
- Při volání lze předat parametry 
- Lze přepsat metodu Pomocí CREATE OR REPLACE nazev\_metody 
- Jen UDF \(uživatelem definované\) 

 

Procedury s parametrem  

- Podobně jako funkce v programovacích jazycích, mohou i uložené procedury v MySQL přebírat parametry\. 

Vlastnosti vstupních parametrů 

-
	- __OUT__ – pokud dojde ke změně argumentu v průběhu procedury, změní se i předaná proměnná vně procedury 
	- __INOUT__ \-  

Vytvoření procedury 

CREATE PROCEDURE nazev\( \)  

BEGIN 

DECLARE prom dat\_typ DEFAULT hodn; 

Příkazy SQL; 

END; 

      Procedury s parametrem 

DELIMITER // 

CREATE PROCEDURE sp\_vratradek \(\[IN, OUT, INOUT\] radek int\)  

BEGIN SELECT \* FROM tabulka WHERE ID = radek;  END // 

22\) Programování – definice 

Objektově orientované techniky 

Dědičnost 

- Třída \(potomek\), získává vlastnosti od svého rodiče \(parent\) 
- Tyto vlastnosti/metody jsou definovány __PUBLIC__ / __PROTECTED__ 
- Zděděné metody můžeme i přepisovat, a tak měnit i jejich funkčnost  
- Každý potomek, může být i uložen v rozhraní rodiče 
- ChildName : ParentName 

Vzájemné volání konstruktorů 

- V JAVE se konstruktor rodiče v potomkovi volá pomocí __super\(param\)__; 
- V C\# se se konstruktor rodiče v potomkovi volá pomocí __base\(param\);__ 

  

   

Abstraktní třída 

- Neúplná třída, nedá se udělat její instance 
- Slouží jako předpis pro jiné třídy 
- Mohou obsahovat i abstraktní \(__abstract__\) metody, které nemají tělo, potomek si je pak přepisuje a určuje jejich funkcionalitu  

  *(obrázek vynechán)*

 

Rozhraní \(interface\) 

- Nemá žádné metody s tělem 
- Jedná se o předpis třídy, určuje jen jaké metody musí potomek mít  

*(obrázek vynechán)*

Výčtový typ \(enum\) 

- Datový typ, který může nabývat více hodnot 
- Například dny v týdnu, barvy atd\.  

*(obrázek vynechán)*

Polymorfismus  

- Neboli dědění, rodič obsahuje metody, které pak dědí i děti a mají je společné 
- Parent __CAR__ child __ŠKODA__ – má 4 kola, metody pro auto atd\. 

Přetížení metod a funkcí 

- Existuje více stejnojmenných funkcí, pouze se liší parametry 

*(obrázek vynechán)*

Modifikátory přístupu 

- __PUBLIC__ – veřejné, můžeme k ní přistupovat i mimo třídu 
- __PROTECTED__ – stejné jako private, s tím rozdílem, že potomci mohou k daným věcem přistupovat jako by byly public 
- __PRIVATE__ – umožňuje přístup pouze v rámci dané třídy 

Anonymní třída 

- Třída, která nemá jméno a může být tak použita vícekrát 

*(obrázek vynechán)*

Výjimky 

- Neboli try catch  
- Pokud dojde během běhu kódu k chybě v try, catch vyvolá patřičnou výjimku 

*(obrázek vynechán)*

Singleton 

- Třída, která nemá instanci je v běhu systému jen 1 
- Je nutné dávat pozor u vláken na Singletona, aby běžel jen napříč vlákny 1 

 

Factory method 

- Pokud děláme instanci třídy, která má až moc zbytečných parametrů, můžeme si to oddělit do nové třídy, která ji nám vytvoří jen holou a patřičné parametry si když tak nastavíme ¨ 

  

*(obrázek vynechán)*

   

Mediátor 

- Pokud nám moc tříd komunikuje se sebou a vzniká spousta vazeb, můžeme pomocí mediátoru to usměrnit  

Listener 

Něco jako EVENT, čeká a naslouchá na nějakou událost a pak zareaguje 

*(obrázek vynechán)*

23\) Logické funkce 

  

Logická je funkce jež pro konečný počet vstupních parametrů vrací logické hodnoty\. 

  

__AND__ \- logický součin\. 

  

Pravdivostní tabulka 

  

A 

B 

Y 

0 

0 

0 

0 

1 

0 

1 

0 

0 

1 

1 

1 

  

  

__OR__ \- logický součet 

  

Y = A \+ B 

  

Pravdivostní tabulka 

  

A 

B 

Y 

0 

0 

0 

0 

1 

1 

1 

0 

1 

1 

1 

1 

  

  

__NON__ \- logický součet 

  

Y = A \+ B 

  

Pravdivostní tabulka: 

  

A 

Y 

1 

0 

0 

1 

  

  

__NAND__ \- negovaný logický součin 

  

Y = //\(A\*B\) 

  

Pravdivostní tabulka 

  

A 

B 

Y 

0 

0 

1 

0 

1 

1 

1 

0 

1 

1 

1 

0 

  

  

__NOR__ \- negovaný logický součet 

  

Y = //\(A\+ B\) 

  

Pravdivostní tabulka: 

  

A 

B 

Y 

0 

0 

1 

0 

1 

0 

1 

0 

0 

1 

1 

0 

  

  

XOR \- exkluzivní OR \(nonekvivalence\) 

  

Y = /A\. B \+ A \./B 

  

Pravdivostní tabulka: 

  

A 

B 

Y 

0 

0 

0 

0 

1 

1 

1 

0 

1 

1 

1 

0 

  

  

Booleova algebra 

  

Booleovu algebru lze chápat jako nauku o operacích na množině obsahující dvě logické konstanty 0 a 1 a další logické proměnné, které se označují malými písměny\.  

Booleovo algebra používá tento základní soubor operaci: 

1. AND, OR, negate 

  

Logická proměnná může nabývat pouze dvou hodnot: 0 a 1; Booleova algebra není tudíž algebrou čísel, ale stavů\. Logické funkce se často pro přehlednost zapisují pomocí pravdivostní tabulky\. Pro n proměnných z nichž každá může nabývat dvou stavů, dostáváme celkem 2^4 = 16 funkcí\. 

  

a 

b 

f0 

f1 

f2 

f3 

f4 

f5 

f6 

f7 

f8 

f9 

f10 

f11 

f12 

f13 

f14 

f15 

0 

0 

0 

0 

0 

0 

0 

0 

0 

0 

1 

1 

1 

1 

1 

1 

1 

1 

0 

1 

0 

0 

0 

0 

1 

1 

1 

1 

0 

0 

0 

0 

1 

1 

1 

1 

1 

0 

0 

0 

1 

1 

0 

0 

1 

1 

0 

0 

1 

1 

0 

0 

1 

1 

1 

1 

0 

1 

0 

1 

0 

1 

0 

1 

0 

1 

0 

1 

0 

1 

0 

1 

  

  

1. f0, f15 \- Identické funkce 
2. f1 \- funkce AND 
3. f7 \- funkce OR 
4. f14 \- funkce NAND \(negace AND f1\) 
5. f8 \- funkce NOR \(negace OR f7\) 
6. f6 \- funkce XOR 
7. f9 \- funkce ekvlivalence \(negace XOR f6\) 
8. f13 \- funkce implikace a=>b \(v digitální technice se nepoužívá\) 

  

Pro tři proměnné __a,b__ a __c__ platí __zákony__ 

__ __ 

  

__Logický součin__ 

__Logický součet__ 

Komutativní zákony 

a\.b = b\.a 

a\+b = b\+a 

Asociativní zákony 

a\.\(b\.c\) = \(a\.b\)\.c 

a\+\(b\+c\) = \(a\+b\)\+c 

Distributivní zákony 

a\+b\(b\.c\) = \(a\+b\)\.\(a\+c\) 

a\.\(b\+c\) = \(a\.b\)\+\(a\.c\) 

Zákony vyloučeného třetího 

a\./a = 0 

a \+ /a = 1 

Zákony neutrality 

a\./a = 0 

a\+/a = 1 

Zákony agresivity 

a\.0 = 0 

a \+ 1 = 1 

De Morganovy zákony 

/\(x\.y\) = /x \+ /y 

/\(x\+y\) = /x \. /y 

__ __ 

__ __ 

A další zákony, jako: zákony od idempotenci prvků, zákon dvojité negace, princip duality 

  

__  __ 

__Minimalizace logické funkce__ 

  

Jeden z postupů, jak minimalizovat logickou funkci je použití Booleanovy algebry či de Maorgenových zákonů\. 

  

Mějme zadanou pravdivostní tabulku: 

  

A 

B 

C 

Y 

0 

0 

0 

0 

0 

0 

1 

1 

0 

1 

0 

0 

0 

1 

1 

1 

1 

0 

0 

1 

1 

0 

1 

1 

1 

1 

0 

0 

1 

1 

1 

0 

  

  

Z dané pravdivostní tabulky zapíšeme pro ukázku úplně zapsaný součet součinů\. Zaměřujeme se při tom na řádky tabulky obsahující ve sloupci výstupní hodnoty lofické funkce logickou 1 a zapíšeme: 

Y = /A \. /B \. C \+ /A \. B \. C \+ A \. /B \. PC \+ A \. /B \. C 

  

Vezmeme první dva součiny a vytkneme a upravíme\. Jako výsledek dostaneme první minimalizovanou část funkce: 

Y1 = /A /B C \+ /A B C = /A C \. \(/B \+ B\) = /A C \. 1 = /AC 

  

Podobně upravíme druhou část, vezmem tedy dva součiny: 

Y2 = A /B /C \+ A /B C = /B A \. \(/C \+ C\) = /B A \. 1 = /BA 

  

Výslednou minimalizaci funkci zapíšeme jako součet 

Y = /AC \+ /BA 

  

__Žebříčkový diagram__ 

[http://fatek\.seapraha\.cz/zaklladr/](http://fatek.seapraha.cz/zaklladr/) 

  

Grafický “jazyk” určený pro programování automatických systémů a je užíván od druhé světové váky\. Do dnešních dob je nejstarším a jedním z nepopulárnějších jazyků, které jsou určeny k programování automatických systémů\. 

  

Jazyk původně obsahoval jen několik základních elementů, jako kontakty typu A \(NO \- normally open\), kontakty typu B\(NC \- normally closed\), výstupní relé, časovače a čítače\. Když se obejvili mikropočítače, mohlo být využito více prvků, jako diferencované kontakty, rozšířená instrukční sada a další rozšíření, která umožnila masový rozvoj\. 

  

Jsou dva způsoby využití logiky Ladder diagramů: 

1. Kombinační logika 
2. Sekvenční logika 

  

Kombinační logika vzniká spojením jednoho nebo více prvků vstupu v seriovém nebo paralerním zapojení a výstupu, kterým může být relé, časovač/čitač a jiné intstrukce pro externí aplikaci\. 

  

Sekvenční logika užívá v obvodech, kde je nutno zajistit zpětné ovládání \- což znamená, že výstup jednoho obvodu slouží k ovládání výstupu jiného\. 

24\) Funkce a zapojení základních elektronických součástek  

 

Pasivní a polovodičové prvky 

Aktivní součástky 

- Chovají se jako zdroj el\. energie, např\. baterie, nebo součástky, které se v obvodu chovají jako zdroj i spotřebič \(fotodioda, tranzistor jak zesilovací součástka\) 

Pasivní součástky 

- Jsou spotřebiče, které se v obvodu nikdy nechovají jako zdroj el\. energie\. Např\. rezistor, kondenzátor, cívka, ale taky polovodičová dioda, termistor atd\. 

 

Pasivní prvky 

 

Pasivní prvek je prvek, jež se v obvodu nechová jako zdroj\. 

  

- __Rezistor__  
	- Funkce spočívá ve vzniku úbytku napětí v elektrickém obvodě, nebo\-li k omezení proudu v elektrickém obvodu\.  
	- Zjednodušeně lze odpor přirovnat k vodiči se špatnou vodivostí\.  
	- Velikost hodnoty je dána konstrukcí, množstvím a použitým materiálem\. 
	- Nejčastěji je použit uhlíkový materiál\.  
	- Konstrukce rezistoru se dělí na na dva základní způsoby\.  
	- __Drátové a vrstičkové\. __ 
		- Drátové jsou zastaralý druh, konstrukce spočívala v namotání izolovaného odporového drátu na nosnou keramickou trubičku\. 
		- __Vrstvičkové__ – nalepení uhlíkového pásku přímo na tištěný spoj, nebo na keramickou destičku  
	- Množství uhlíkového materiálu též určuje výkon rezistoru\. 

 

*(obrázek vynechán)*

 

- __Kondenzátor__ \-  
	- Jeho charakteristickou vlastností je kapacita\. 
	- Každý kondenzátor vykazuje ještě další, takzvané "parazitní" vlastnosit, jako je indukčnost \(magnetické pole\) nebo odpor\. 
	- Kondenzátor se skládá ze dvou vodivých desek oddělených izolantem\.  
	- Na každou desku se přivadí elektrické náboje opačné polarity, které se vzájemně přitahují eletrickou silou\.  
	- Izolant mezi deskami nedovolí, aby se částice s nábojem dostaly do 

kontaktu a tím došlo k neutralizaci \(vybití elektrických nábojů\)\. 

-
	- S rostoucími rozměry, roste i velikost kapacity  
	- Kvalita izolace mezi vodivými plášti určuje jak hodnotu, tak především kvalitu kondenzátoru 
	- Ideálním dialektrikem \(izolací\) je vákum \(i vzduch\)  

 

*(obrázek vynechán)*

 

- __Cívka__ \-  \(Induktor\) 
	- Pasivní elektronická součástka 
	- Amperovo pravidlo pravé ruky  
	- __Ampérovo pravidlo pravé ruky pro cívku__, které zní následovně: *Cívku uchopíme do pravé ruky tak, že ohnuté prsty ukazují směr elektrického proudu v jejích závitech\. Odtažený palec pak ukazuje severní pól cívky\.* 
	- Ukládá dočasně energii v podobě magnetického pole\. 
	- Při připojení napětí začně magnetické pole narůstat, čím více závitů, tím větší magnetické pole\. 
	- Konstrukce cívky – namotání drátu na nějaké jádro, způsob namotání určuje výslednou cívku 
	- Nejčastěji používaným materiálem je měď\. 
	- Cívka je definována svou indukčností, která se udává v H \(Henry\) 
	- Indukčnost je výsledkem: 
		- Průřez a materiál vodiče 
		- Tloušťka a materiál izolace 
		- Počet otáček a způsob namotání  
	- __Velikost průřezu je důležitá__ – menší průměr zvětšuje reálný odpor cívky 
	- Ideální cívka by měla mít nulový vnitřní odpor  
	- Cívky se používají převážně u střídavých signálů 
	- Tvoří hlavní části motoru a zde jsou zpravidla proudově namáhány  
	- Obecně platí: čím menší hodnota indukčnosti \(méně závitů\), tím lépe cívka propouští nižší frekvence 
	- Využití: 
		- __Cívka jako elektromagnet:__ 
			- Využívá se magnetická síla magnetického pole kolem cívky v zařízeních: 
				- Elektromotor, zvonek, reproduktor, elektromagnetické relé 
				- Elektromagnetický jeřáb, vychylovací cívky v monitorech  
		- __Cívka jako induktor__ 
			- Využívá se elektrické napětí indukované proměnným magnetickým polem kolem cívky 
				- __Tlumivka__ – je proti prudkým změnám v elektrickém obvodu \(např\. zapnutí/vypnutí, elektrický výboj apod\.\) 
				- __Transformátor__ – obsahuje dvě nebo více cívek na společném jádře\. Změnou elektrického proudu \(střídavým proudem\) v jedné cívce se indukuje elektrický proud v druhé cívce, dochází k transformaci proudu a napětí 

Takto lze elektrické napětí bez velkých ztrát přenášet na dlouhé vzdálenosti pomocí elektrického vedení\.  

Toto elektrické vedení je pod vysokým napětím a na jeho konci je druhý transformátor, který napětí snižuje na uživatelských 230 voltů, které běžně známe z našich elektrických zásuvek\.  

Transformátor je složen z jádra a dvou cívek\.  

Cívky se jmenují primární a sekundární\. 

Primární je napojena na zdroj elektrického napětí a průchozí střídaví elektrický proud vytváří střídavé magnetické pole v jádru transformátoru\.  

Napětí se transformuje dolů\. Vzniká tak menší napětí\.  

Pokud sekundární cívka má větší počet závitů napětí se transformuje směrem na horu\. Vzniká tak větší napětí\.  

Výhodné pro případný přenos na velké vzdálenosti elektrickou soustavou\. 

 

-
	-
		-
			-
				- __Čtecí hlavy v pevných discích __ 

  

- __Potenciometr__ \-  Součástka jež slouží jako odporový napěťový dělič\. Nejjednoduší konstrukce se skládá z odporové dráhy po níž se ovládacím prvkem pohybuje 

jezdec\. Pokud' je jezdec na otáčivé ose, tak mluvíme o otočném potenciornetru, 

pokud' je jezdec posuvný lineárně, tak mluvíme o tahovém potenciometru\. 

Pokud je jezdec v krajní poloze všechno napětí je na žárovce a žárovka tedy svítí plným a ostrým světlem\. Pokud je jezdec v poloze uprostřed napětí se dělí mezi dvě žárovky, které svítí poloviční intenzitou\. V praxi lze využít pro redukování elektrického napětí například v domácnosti, v průmyslu\. 

 

  

 

 *(obrázek vynechán)*

  

Polovodičové prvky 

Polovodičový prvek prvek je součástka jež pro svou funkci využívá některé vlastnosti polovodičů \(například Germanium či Křemík\)\. Polovodiče jsou látky, které se za určitých podmínek chovají jako izolanty, ale při změně těchto podmínek se mohou spíše chovat jako vodiče a elektrický proud 'jimi může procházet\. Při nízských teplotách jsou elektrony v látce nevodivé, nemají dostatek energie, aby se dostaly ven\. S roustoucí teplotou se začínají elektrony uvolňovat, volné místa po elektronu \- díra \- se chová jako kladně nabitá částice\.  

 

  

- __Termistor__ \- Teplotně závislý rezistor se využívá k měření teploty, k regulaci teploty, k teplotní stabilizaci el\. obvodů\. 

  

- __Fotorezisotr__ \- Prvek, jehož odpor se mění s osvětlením\. Používá se k regulaci a k měření osvětlení\. 

  

- __Dioda \-__ Elektrická součástka se dvěma elektrodami, označovanými jako anoda a katoda\. Po připojeni anody na kladnější napěti než\-li je na katodé klade dioda malý odpor\. zatímco při opačném zapojení je dioda téměř nevodivá\. Propouští tedy proud pouze jedním směrem\. 

 

 *(obrázek vynechán)*

- __Bipolární tranzistor \-__ Součástka jež je tvořená třemi oblastmi polovodiče s různým typem vodivosti v uspořádání NPN nebo PNP, které vytvářejí dvojici přechodu PN\. Prostřeni oblast se nazývá __báze \(B\),__ krajní __emitor \(E\) a kolektor \(C,__ někdy __K\)\.__ Ke každé z oblasti je zapojen vývod\. Při vhodném zapojeni je velikost elektrického proudu tekoucího mezi emitorem a kolektorem řízena malými změnami proudu tekoucího mezi bázi a emitorem\. Bipolární tranzistory se používají jako zesilovače, spínače a invertory\. 

 

*(obrázek vynechán)*

  

- __Unipolární tranzistor__ \- Na rozdíl od bipolárních tranzistorů\. u kterých řízený proud prochází dvěma polovodičovými přechody a ovládají se bázovým proudem, tak u unipolárních tranzistoru *řízený *proud prochází jen polovodičem jednoho typu\. mají tedy velmi malý úbytek napěti v sepnutím stavu a ovládal, se pouze napětím\. Mailým velmi velký vstupní odpor 

  

- __Tyristor \-__ Součástka Jež slouží ke spínání elektrického obvodu fungující jako řízený elektronický ventil 

  

Odporový napěťový dělič a výpočet napětí o proudu 

  

__Odporový napěťový dělič__ 

Nezatížený odporový dělič je obvod který umožňuje získat menši napětí než *je *napěti zdroje Je realizován dvěma [rezistory\. na](http://rezistory.na) kterých naměříme stálé napětí Ul a U2 

 

 

  *(obrázek vynechán)*

  

U napěťového děliče je napětí na rezistorech závislé na jejich odporu, a to tak, že, poměr hodnot odporů udává jejich napětí\. Máme\-li zdroj o napětí 5V a 2 rezistory o hodně 10 ohmů, je napětí děleno v poměru 1:1, tedy každý rezistor má napětí 2,5V\. Je\-li hodnota odporu jednoho rezistoru 10komů a druhého 90 komů, hodnota zdroje napětí zůstává stejná, je poměr obou odporů 1:9, na prvním rezistoru máme tedy napětí 0,5V a na druhém 4,5V\. 

  

__Výpočet napětí a proudu__ 

  

Výpočet napětí a proudu se provádí Ohmových zákonem\. Ohmův zákon vyjadřuje 

vztah mezi elektrickým odporem, napětím a proudem\. 

  

U=I\*R 

  

__Zapojení a práce tranzistoru__ 

  

Bipolární tranzistor je součástka, jež umožňuje malým proudem řídit větší proud\. 

Bipolární tranzistor si můžeme představit jako rezistor \(s nožičkami kolektor C a emitor E\), který mění svůj odpor, tak aby mezi E a C neprotékal větší proud, než je beta\-násobek proudu, který teče do řídí nožičky \- báze B\. Obvykle se používá buď to jako spínač, nebo jako zesilovač\. 

  

__Spínáč__ je zařízení určené k vodivému spojení nebo rozpojení části elektrického obvodu\. 

__Zesilovač__ je zařízení, které je schopno transformací elektrické energie s vnějšího 

napájecího zdroje měnit parametry vstupního signálu\. 

  

Bipolární tranzistory se vyskytují ve dvou variantách: NPN a PNP\. Jsou funkčně podobné 

liší se ale opačnou polaritou: tam, kde u NPN teče proud jedním směrem, teče u PNP 

opačným\. 

  

[https://filip2ms\.wordpress\.com/2012/12/09/zakladni\-elektrotechnicke\-soucastky/](https://filip2ms.wordpress.com/2012/12/09/zakladni-elektrotechnicke-soucastky/) 

 

•  

vyjmenovat základní elektronické součástky \(pasivní a polovodičové prvky\)\.  

•  

vysvětlit odporový dělič a vypočítat napětí a proud v obvodu\.  

•  

popsat zapojení a práci tranzistoru\.
