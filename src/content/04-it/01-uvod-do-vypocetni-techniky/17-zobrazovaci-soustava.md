---
title: "Zobrazovací soustava"
order: 17
source: "uvt/cv23-25_Zobrazovaci_soustava.pdf"
---
Zobrazovací soustava je tvořena dvěma základními prvky:

- zobrazovací adaptér, který tvoří obraz → grafická nebo video karta

- adaptér kam se vytvořený obraz přenáší → CRT, LCD monitor, dataprojektor

## Zobrazovací soustava

Zobrazovací soustava může pracovat ve dvou základních režimech:

- textový režim

- grafický režim

# Textový režim

- Starší možností

   - obrazovka je při něm rozdělena na malá políčka

   - každé zobrazí jeden znak

      - nejčastěji je na displeji 80 sloupců a 25 řádků

- typický pro staré programy určené k práci s operačním systémem

- rychlý hardwarově nenáročný režim

# Grafický režim

- Princip - na obrazovce je rozprostřena matice bodů

   - rozsvícením určitých bodů se nakreslí libovolný text, obrazec, obrázek či provede animace

- barevné možnosti jsou téměř neomezené

   - každý bod je schopen být jinak barevný - výsledný text nebo obrázek může své barvy měnit plynule

- nejdůležitější charakteristikou grafického způsobu je rozlišovací schopnost

   - popisuje, kolika body (pixel) je tvořen jeden řádek

   - kolik řádků se vejde na obrazovku

   - čím více má obrazovka pixelů, tím jemněji a pro oko příjemněji kreslí

# Pixel

# Pixel

Pixel (picture element)

- nejmenší jednotka digitální rastrové (bitmapové) grafiky

- představuje jeden svítící bod na monitoru

- body na obrazovce tvoří čtvercovou síť - každý pixel je možné jednoznačně identifikovat podle jeho souřadnic

- u barevných obrazovek se každý pixel skládá ze tří svítících obrazců odpovídajících základním barvám - červené, modré a zelené

- velikost pixelu záleží na typu monitoru

- u analogových typů lze velikost pixelu měnit změnou rozlišení

- LCD obrazovky mají počet fyzických pixelů pevně vázaný na používané rozlišení a zobrazování

- jiného rozlišení u takového monitoru vede k určité deformaci obrazu, neboť „počítačové pixely“ jsou přepočítávány a nerovnoměrně přerozdělovány na větší počet „fyzických pixelů“.

- Obrázek rozložený na jednotlivé pixely

- Barevné složky RGB pixelů na LCD obrazovce

# Grafická karta

Karta kreslí obraz – je tak jádrem celé soustavy

- její činnost není jednoduchá

   - karta musí zvládnout mnoho úkolů a je velmi důležitým ukazatelem kvality PC

   - v podstatě jde o další samostatný počítač

# Hardware grafické karty

- Jádrem je grafický čip GPU(Graphics processor unit)

- samostatný mikroprocesor řídící činnost karty, zajišťující tvorbu obrazu

- Operační paměť

- GPU s ní bezprostředně spolupracuje

- ukládá do ní hotový obraz

- odkud se pak obraz přenáší na obrazovku

- Množství přenesených dat limituje

- frekvence a šířka sběrnice spojující GPU o OP

- podstatným ukazatelem kvality karty.

- RAMDAC

- digitálně analogový převodník

- převádí digitální obraz z operační paměti karty na analogový

- analogový signál vstupuje do monitoru

# Hardware grafické karty

- Pro dosažení maximálního výkonu pracuje celá soustava s co nejvyšším kmitočtem

   - důležitou částí je chlazení

- Karty bývají doplněny dalšími obvody

   - televizní tuner

   - obvody VIVO

- Důležité jsou konektory karty, spojující GK s okolím

   - jejich počet samozřejmě závisí na funkčním vybavení karty

- Karty se k základní desce  připojují prostřednictvím:

   - AGP (zastaralé 2020)

   - standardu PCIe x16 v3 (2020)

# GPU (Graphics Processor unit)

- GPU dokážou za jeden takt vytvořit více texelů

   - v každé pipeline jsou umístěny Shadery

   - ty pracují s jednotlivými pixely:

      - Vertex Shader vytváří trojrozměrné objekty, umísťuje je do prostoru a stará se o světelné efekty

      - Pixel Shader definuje barvu a průhlednost objektů

   - vytvářený obraz se rozloží na části

      - nejčastěji čtverce

      - každá pipeline produkuje jeden čtverec obrazu

      - dosaženo paralelního kreslení a zrychlení tvorby obrazu

# GPU (Graphics Processor unit)

- GPU řídicí jednotka grafického adaptéru

- vlastnosti definují zaměření karty, výkon a cenu

- nejčastěji se setkáme s GPU specializovaných výrobců:

- ATI /AMD (v majetku AMD)

- Nvidia

- Intel

- úkolem GPU je vytvářet jednotlivé body - pixely obrazu

- dříve používaly grafické čipy pouze jednu cestu pro zpracování instrukcí (pipeline)

- jedna pipeline mohla vykreslit jeden pixel v jednom taktu

- na každý vykreslený pixel mohla být aplikována jedna textura za jeden cyklus – fillrate

- pro prostorový obraz nutno na každý pixel aplikovalo více textur

- elementární textury se nazývají texely

- jeden pixel je tedy složen z několika texelů

- dnešní karty jsou vybaveny několika pipeline, které dokážou pracovat paralelně

# GPU (Graphics Processor unit)

- Charakteristické znaky GPU:

- počet  texturovacích pipelines

   - počtu pipelines odpovídá počet Shaderů a je základním kritériem GPU

- počet texelů vytvořených v jedné pipeline za jeden takt

- maximální teoretický fill-rate

- maximální teoretický texel fill-rate

   - pixel fill-rate násoben počtem texelů na jednotku pipeline

- frekvence, s níž karta pracuje

   - běžný rozsah od 350 až 1000 MHz

      - čím vyšší frekvence, tím více pixelů karta vytvoří

- podstatná je výrobní technologie mikroprocesoru GPU

# GPU (Graphics Processor unit)

- GPU úzce spolupracuje s pamětí grafické karty, její charakteristiky jsou:

   - kapacita paměti – od 1 až po 2,5 GB (GDDR3 až GDDR6)

   - takt paměti a její typ - od 1024 až po 2560 MB

      - GDDR5 přenos 4 bity za 1 takt

   - šířka paměťové sběrnice – od 256 až 320 bitů

# Další obvody grafické karty

- TV  - Output (televizní výstup)

- Obvod VIVO (Video In Video Out)

- TV - Tuner

- Single - Link

- DVI Dual - Link

- DVI HDMI 2.1

- DisplayPort  do budoucna nahrazen ThunderBolt portem  ( Mini DisplayPort)

# API

- Tvorbu obrazu řídí také ● Dnešní technologie software  nazvaný API – Microsoft DirectX11

   - Microsoft DirectX11

- DirectX od Microsoftu

   - DirectCompute 5.0

- integrováno ve Windows

   - ShaderModel 5.0

   - Open GL 4.1

- OpenGL

   - NVIDIA CUDA

   - NVIDIA  Mosaic

   - NVIEW Display Management Software

   - NVIDIA Scalable Geometry Engine

   - NVIDIA  Parallel DataCache

- Ve vašem PC – NVIDIA GigaThread Engine

- příkazem dxdiag - – NVIDIA High vyzkoušejte Precision High Dynamic Range

# D-SUB

- NVIDIA 3D Vision

- NVIDIA 3D Vision Pro

- – NVIDIA Application Acceleration Engines

- – NVIDIA SLI MultiOS

- NVIDIA SLI

- NVIDIA SLIMosaic

- SDI Option

- FSAA (max. 64x, v SLI 128x)

- NVIDIA Quadro Digital Video Pipeline

- NVIDIA Quadro G- Sync Solution

# Výstupy

- Současné adaptéry běžně disponují konektory

- D-SUB (VGA, DB9)

- Single-Link DVI

- Dual-Link DVI

- HDMI 2.1

- DisplayPort 1.2

   - Mini-DisplayPort 1.2

# Konektory D-SUB

   - standardní analogovým konektorem

- dlouho byl D-SUB jediným konektorem

- nevhodný pro spojení grafiky s LCD

   - grafický čip totiž digitálně nakreslí obraz do paměti

   - obraz je pomocí převodníku RAMDAC převeden na analogový a rozhraním D-SUB přenesen do LCDpanelu

   - v LCD-panelu je další převodník z analogového do digitálního signálu

# DVI-I

# DVI

- DVI-D (digital only)

<!-- Start of picture text -->
FEMALE LAYOUT<br>– pouze digitální signál<br>● DVI-A (analog only)<br>DVI-I (Single Link)<br>– pro kompatibilitu s analogovými<br>monitory=<br>● DVI-I (digital & analog) DVI-I (Dual Link)<br>– digitální i analogový signál<br>DVI-D (Single Link)<br>DVI-D (Dual Link)<br>DVI-A<br><!-- End of picture text -->

- Založen na sériovém formátu používá Transition Minimized Differential Signaling (TMDS)

- single DVI link se skládá ze čtyř párů kroucené dvoulinky

- přenos je 24 bitů na pixel

- obraz je přenášen řádek po řádku s intervaly mezi každým řádkem a každým snímkem

- nepoužívá kompresi

- nejvyšší rozlišení při 60 Hz, a je 2,75 megapixelů (1915 x 1436 pixelů 4:3); (1854 x 1483 pixelů 5:4) ; (2098 x 1311 pixelů 16:10)

- specifikace DVI má pro single link pevně nastavenou obnovitelnou frekvenci na 165 MHz

- režimy vyžadující vyšší frekvenci musí přepnout do režimu dual link

- když jsou obě linky v provozu může frekvence přesáhnout 165 MHz

- druhá linka může být také použita pokud je potřeba více než 24 bitů na pixel

- doporučená délka klasického DVI kabelu je do 4,5 m.

# HDMI

- High-Definition Multi -media Interface

- rozhraní pro přenos nekomprimovaného obrazového a zvukového signálu v digitálním formátu

- HDMI podporuje přenos videa ve standardní, rozšířené nebo highdefinition kvalitě

- až 8-kanálový digitální zvuk

- konektor HDMI typu A má 19 pinů

- konektor typu A je zpětně kompatibilní s rozhraním Single-link DVI

- málo rozšířená verze s označením B má 29 pinů pro přenos videa s větším rozlišením

   - konektor typu B je pak zpětně kompatibilní s Dual-link DVI

- Verze HDMI 1.0 až 2.1

<!-- Start of picture text -->
HDMI<br><!-- End of picture text -->

<!-- Start of picture text -->
DisplayPort DisplayPort<br>● Digitální konektor sloužící k přenosu nekomprimovaného  digitálního obsahu<br>s podporou až 8kanálového zvuku  a ochrany DPCP (DisplayPort Content<br>Protection)<br>– využívá 128bitové šifrování AES<br>– podporuje rychlost přenosu 10,8 Gbit/s<br>– do 3 metrů podporuje rozlišení WQXGA (2560×1600 pixelů)<br>– do 15 metrů podporuje rozlišení 1920×1080 pixelů<br>– s konektory typu DVI a HDMI je jen omezeně zpětně kompatibilní<br>– navržen tak, aby nahradil digitální (DVI) i analogové (VGA) konektory<br>v monitorech počítačů stejně jako v grafických kartách<br>– má všechny funkce HDMI<br>– určen spíše pro kancelářské a IT využití<br><!-- End of picture text -->

# TV OUT, TV IN

# TV OUT, TV IN

- TV OUT je výstupem televizního signálu

   - realizován (4, 7 nebo 9pinovým) konektorem S-video

   - konektorem Cinch(TV OUT C)

- TV IN je vstupem

   - používá stejné konektory jako TV OUT

# Paralelní spolupráce více grafických  karet - ATI CrossFire

- Řešeni firmy ATI pracuje na podobném principu

- používá dva sloty PCIe x 16

- propojení obou karet je realizováno kabelem

   - spojuje speciální konektory DMS I/O

   - každá karta tedy obsahuje jeden propojovací konektor

- karty si nejsou rovnocenné

   - jedna je řídicí (Master) a druhá podřízenou (Slave)

   - mohou spolupracovat rozdílné karty

# Paralelní spolupráce více grafických karet - SLI

- Při paralelní spoluprací dvou grafických karet se rozdělí původních 16 linek PCIe jednoho slotu mezi sloty dva

- každý z nich má pak k dispozici rychlost PCIe 8x

- o rozdělovaní dat se stará speciální propojení obou karet

- samotné vykreslování obrazu pak řídí přímo ovladač grafické karty

- Nvidia – řešení SLI (Scalable Link Interface)

   - obě karty propojeny speciálním můstkem SLI

   - deska musí mít dva sloty PCIe x 16

   - dvě stejné grafické karty podporující SLI

      - jeden výrobce

      - neliší se verzí BIOSu SLI

- Propojení pomocí „bridge“ modulu

# Monitor CRT

- Dlouhou dobu byly téměř jediným výstupním zařízením  počítačů PC

- dnes nahrazeny LCD panely

- 1. Elektronové dělo (emitor)

- 2. Svazky elektronů

- 3. Zaostřovací cívky

- 4. Vychylovací cívky

- 5. Připojení anody

- 6. Maska pro oddělení paprsků pro červenou, zelenou a modrou část zobrazovaného obrazu

- 7. Luminoforová vrstva s červenými, zelenými a modrými oblastmi

- 8. Detail luminoforové vrstvy, nanesené z vnitřní strany obrazovky

# LCD-displej

- Ve srovnání s CRT mají LCD

   - podstatně nižší spotřebu

   - menší rozměry

   - nevydávají žádná škodlivá záření

   - obraz u nich nekmitá

   - nedochází ke zkreslování obrazu na okrajích displeje

# Princip

- Činnost LCD displeje (Liquid Crystal Display) je založena na natáčení tekutých krystalů

   - z nich jsou složeny jednotlivé obrazové buňky

   - každý displej musí být podsvětlen

   - pod tekutými krystaly svítí nejčastěji elektroluminiscenční výbojka

   - mezi ní a horní stranou je umístěna matice tekutých krystalů LCD

      - ty světlo bud' nepropustí, utlumí nebo nechají projít

# Princip

# Princip

- Na spodní a horní straně každé buňky jsou umístěny polarizátory

- ty propouštějí pouze polarizované světlo buď ve vodorovném, nebo svislém směru

- mezi oběma orientačními filtry (polarizátory) je vrstva tekutého krystalu.

- v průchozím stavu jsou tekuté krystaly buňky LCD šroubovicově pootočeny

- světlo procházející horizontálním polarizátorem pootočí buňky

- světlo tak projde i druhým vertikálním polarizátorem

- na displeji se rozzáří jeden bod

- druhým mezním stavem je když světlo neprojde k očím pozorovatele

- na elektrody tekutého krystalu se připojí střídavé napětí

- tekuté krystaly se narovnají, spodní světlo projde prvním polarizátorem

- krystaly je nepootočí, a tak je světlo druhým polarizátorem zastaveno

- bod na displeji zůstane temný

# Technologie výroby LCD - panelů

- Existují tři základní technologie výroby LCD panelů

   - liší se způsobem natáčení molekul tekutých krystalů

   - technologie TN (Twisted Nematle)

   - technologie IPS (In-Plane Switching)

   - technologie VA, MVA, PVA

# Technologie TN (Twisted Nematle)

- Nejstarší technologie výroby

- molekuly tekutých krystalů pro průchod světla vytvářejí spirálu

- ta otáčí světlo o 90°

- když se krystaly ocitnou pod napětím

- spirála se rozpadne a světlo přestane procházet

- u TN-matic dochází při pohledu z větších úhlů k žloutnutí bílé a k šednutí tmavších barev

- současné TN-panely vybaveny doplňkovou optickou vrstvou, tenkým filmem, který zlepšuje úhly pohledu

- technologie se pak označuje jako TN+F

<!-- Start of picture text -->
1-Zdroj bílého světla<br>2-Polarizační desky<br>3-Polarizované světlo<br>4-Elektrody<br>5-Tekuté krystaly<br>6-Film zlepšující<br>pozorovací úhly<br><!-- End of picture text -->

# Technologie IPS (in-Plane Switching)

- Molekuly tekutých krystalů vyrovnány souběžně se spodní deskou displeje

- v základním (vypnutém) stavu panel nepropouští světlo

- po přivedení napětí se tekuté krystaly pootočí a začnou propouštět světlo

- oba krajní stavy jsou přesnější a lépe definované, než tomu je u TN

- panely IPS vynikají věrnými barvami a širokými pozorovacími úhly

- nevýhodou je umístěni elektrod v jedné rovině

- u krajních krystalů dochází k nedokonalému otočení

- molekul vinou slabšího elektrického pole

- na okrajích buněk

- důsledkem je nižší jas a kontrast těchto panelů

   - 1-Zdroj bílého světla

   - 2-Polarizační desky

   - 3-Polarizované světlo

   - 4-Elektrody

   - 5-Tekuté krystaly

   - 6-Polarizované světlo

# Technologie OLED

> ● Mezi průhlednou vrstvou (anoda)  a kovovou vrstvou (katoda) je několik vrstev organické látky:

- Vrstva vypuzující díry

- Vrstva přenášející díry

- Vyzařovací vrstva

- Vrstva přenášející elektrony

- Po přivedení napětí jsou vyvolány kladné a záporné náboje, ty se spojují ve vyzařovací vrstvě a produkují světelné záření

- Principiálně jde o matici miniaturních LED v ploše displeje

- Zásadním problémem OLED displejů je stárnutí světelných bodů

# Technologie VA, MVA. PVA

- Řešení postaveno na myšlence orientovat molekuly vertikálně (Vertical Alignment)

- molekuly se otáčejí pouze o 45°

- dosaženo vysokého kontrastu a krátké odezvy

- technologie příliš závislá na velikosti úhlu pohledu - při natočení podlouhlé molekuly docházelo k posunutí molekuly mimo zorné pole uživatele

- Vylepšení původní VA technologií MVA (Multi-Domain Vertical Alignment)

- molekuly rozděleny do domén

- pokud část molekuly není ve své doméně viditelná, je opticky kompenzována molekulou z druhé domény, jež je orientována opačně

   - 1-Zdroj bílého světla

   - 2-Polarizační filtr

   - 3-Polarizované světlo

   - 4-Elektrody

   - 5-Tekuté krystaly

# Základní vlastnosti

- Obnovovací frekvence vychází z použité technologie obecně nad 60Hz

- Doba odezvy

   - 3 – 5 ms 250 – 300 cd/m<sup>2</sup> 400 : 1 – 900 : 1, často uváděn dynamický (v řádech deseti tisíců)

- Jas

- Kontrast

      -  nesměrodatný údaj cca 160° v obou osách

   - Úhel pohledu

- Modrá 1000 hodin, zelená 10 000 hodin a červená 30 000 hodin

# Dataprojektory

- Technologie

   - DLP

   - LCD

   - LCoS

   - D-ILA

- Zdroj světla

   - Lampa

   - LED

# DLP - Digital Light Processing

   - 1987 - vyvinula fy. Texas Instruments

   - obraz tvořen pomocí mikroskopicky malých zrcadel, která jsou umístěna na polovodičovém čipu, který se nazývá DMD (Digital Micromirror Device). Každé zrcadlo reprezentuje jeden nebo více pixelů ve výsledné projekci.

   - Každá miniaturní odrazná ploška se může velmi rychle přemísťovat mezi dvěma krajními polohami – jednou, která světlo propouští a druhá, která jej odráží na chladicí plochu. Intenzita barvy je regulována rychlým střídáním těchto poloh (poměrem mezi průchozí a neprůchozí polohou).

   - Obraz může být vytvářen dvěma rozdílnými metodami: projektorem s jedním čipem a tříčipovým projektorem

   - Používaná rozlišení: 800×600, 1024×768, 1280×720 a 1920×1080

   - blikání obrazu a ne příliš kvalitní podání barev oproti systému 3LCD

- Laser

# Jednočipové DLP projektory

- rotující barevné kolo mezi lampou a čipem -  čtyři segmenty – tři primární barvy (červená, modrá a zelená) a jeden zcela průhledný segment pro zesílení jasu

# Tříčipové DLP projektory

   - využití hranolu na rozdělení světla z lampy

   - každá z primárních barev je poslaná na DMD čip

   -

- Rotace je synchronizována s DMD čipem – sekvenční zobrazování barev (epilepsie)

- ●

# 3LCD

- použití individuálních zdrojů primárních barev – LED

- podstatně omezuje největší problém jednočipového zobrazení - duhový efekt

# 1LCD

   - pracuje na shodném principu, jako 3LCD

   - jednotlivé barvy jsou vytvářeny ve světelných laserech

   -

- Světlo z lampy je vedeno na soustavu dichronických zrcadel, které z paprsku oddělí jednu barvu a ostatní propustí dále – tak vzniknou postupně tři nezávislé paprsky RGB

- Každý je pak samostatně veden třemi optickými soustavami přes miniaturní LCD displeje a po průchodu těmito panely se skládá v obraz v optickém hranolu. Poté je přes zaostřovací optiku vržen na projekční plochu.

# LcoS - Liquid Crystal of Semiconductor

- spojení výhod systémů 3LCD i DLP

- místo DMD použit  LcoS čip – není průhledný

- složitá (drahá) výroba → nevyrábí se, ale

- Základ pro další technologie: **SXRD** (Silicon X-tal Reflective Display) od Sony a **D-ILA** (Digital Direct Drive Image Light Amplifier) od JVC.

# Citace

- Lupa.cz

- www.dlp.com

- Vědecké kladivo:

https://www.youtube.com/watch?v=HBpR6JdM3vQ

> ● https://www.digitalnitelevize.cz/magazin/obecne/malaencyklopedie-televizni-techniky/2010-11-3-serial-oprojektorech-dil-prvni-principy-zobrazovani.html

- a
