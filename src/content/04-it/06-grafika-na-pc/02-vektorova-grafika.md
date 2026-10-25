---
title: "Vektorová grafika — práce v editoru (Zoner Callisto)"
order: 2
source: "grafika/VY_32_INOVACE_3222_01 až 11.pptx (11 prezentací sloučeno do jednoho materiálu)"
---

> Pozn. k obsahu: Původní podklad byl rozdělen do 9 samostatných prezentací (pracovní plocha, tvarování, kreslení úseček a křivek, barvy základní a pokročilé, práce s textem, úprava textu) demonstrovaných ve vektorovém editoru Zoner Callisto — sloučeno do jednoho materiálu; postupy jsou stejné principiálně v jakémkoliv vektorovém editoru (CorelDRAW, Illustrator, Inkscape), liší se jen umístění ovládacích prvků.

## Pracovní plocha

Vektorový editor má typicky několik panelů nástrojů: **základní** (výběr a editace objektů, tvarování, křivky, tvary, text, tabulky, vkládání obrázků), **měřítko**, **text**, **alternativní** (zobrazuje doplňkové možnosti aktuálně vybraného nástroje), **galerie** a **barvy**.

Objekty lze **zarovnávat** pomocí zobrazené mřížky nebo vodicích linek, a **vybírat** buď jednotlivě, nebo více najednou (podržením Shift, nebo tažením myši přes více objektů; Ctrl+A vybere vše).

### Základní operace s objekty

- **Posun** — tažením myší, kurzorovými klávesami, nebo přesným zadáním souřadnic v dialogu transformace.
- **Změna velikosti** — tažením za úchopové body (poměrově nebo nepoměrově), nebo přesným číselným zadáním.
- **Otáčení** — druhým kliknutím na již vybraný objekt (ne dvojklikem) se zobrazí body pro otáčení a posunutelný střed otáčení; přesné natočení jde zadat i číselně.
- **Sklopení (zkosení)** — tažením za úchopové body v režimu otáčení, nebo přesným zadáním úhlu.
- **Kopírování** — klasicky Ctrl+C/Ctrl+V, nebo Ctrl+D (kopie hned vedle originálu), nebo v duplikačním režimu (přesouváním objektu vznikají kopie), případně vícenásobné/lineární kopírování pro řadu pravidelně rozmístěných kopií (např. soustředné čtverce zmenšované o pevný krok, nebo objekty postupně pootočené o pevný úhel).

### Tvarování objektů

Přepnutím do režimu tvarování (na rozdíl od režimu výběru/editace, který objekt jen posouvá/otáčí/zvětšuje jako celek) lze upravovat vnitřní geometrii tvaru:

- **Obdélník/čtverec** — tažením za body měníme zaoblení nebo sražení rohů.
- **Kružnice/elipsa** — nastavením počátečního a koncového úhlu vznikne místo celého kruhu jen oblouk nebo výseč.
- **Mnohoúhelník/hvězda** — lze měnit počet a ostrost cípů.
- **Převod na křivky** — libovolný základní tvar lze převést na obecnou křivku a pak už s ním pracovat nesymetricky, bod po bodu (viz níže).

## Kreslení čar

- **Úsečka** — buď klik-klik (dva krajní body), nebo klik a tažení. Se Shiftem/Ctrl lze omezit sklon na násobky 15°. Navazující úsečky lze kreslit jako řetězec, který tvoří jeden souvislý objekt (uzavíratelný do polygonu).
- **Křivka** — nejprve určíme počáteční bod, druhý bod myší přímo vytvarujeme. Křivku lze dodatečně upravovat přidáváním/odebíráním uzlových bodů a přetahováním koncových bodů.
- **Typ přechodu v uzlovém bodě** — **ostrý** (dvě sousední křivkové segmenty mohou mířit libovolným směrem — vhodné pro rohy) nebo **hladký/symetrický** (směry segmentů leží na jedné přímce — vhodné pro plynulé napojení, např. u kruhových oblouků).
- Úsečku lze kdykoliv převést na křivku a naopak.

## Barvy

- **Základní paleta** dole na pracovní ploše — levým tlačítkem myši měníme barvu obrysu (úsečky, křivky), pravým tlačítkem barvu výplně.
- **Míchání barev** — lze zvolit libovolný barevný model (např. RGB v rozsahu 0–255 pro každou složku) a namíchat přesný odstín, případně si vytvořit a uložit vlastní paletu.
- **Typy výplně** (pokročilá práce): **jednobarevná**; **lineární** — přechod mezi dvěma barvami s nastavitelným úhlem a počtem kroků přechodu; **kónická/kruhová/obdélníková/křížová** — obdoby přechodu s jiným tvarem šíření a nastavitelnou polohou středu; **bitmapová** — výplň obrázkem ze souboru, generovaným fraktálem, nebo ze schránky.
- **Pero** — nastavuje vzhled obrysové čáry (typ, šířka, barva, zakončení).
- **Průhlednost** — lze nastavit u libovolného typu výplně.
- **Stín** — několik předdefinovaných typů, měkký stín je nejuniverzálnější volba.

## Práce s textem

- **Normální text** — vytvoří se tažením myši, které vymezí obdélníkovou oblast; pokud je text delší než oblast, zobrazí se varovný rámeček (text se do oblasti nevejde celý).
- **„Umělecký“ text** — nemá pevně danou oblast, přizpůsobuje se přesně napsanému textu; dá se navíc umístit na libovolnou křivku nebo tvar, podél kterého pak kopíruje jeho tvar.
- U obou typů lze měnit velikost, font, řádkování, zarovnání, tloušťku a sklon písma a stejně jako u ostatních objektů kombinovat barvu, obrys, výplň, průhlednost a stín.
- **Úprava textu** — přepsání textu přímo v editačním režimu; tvarování textového rámce (zarovnání, umístění nad/pod základnu, zrcadlení); **převod textu na křivky** umožňuje upravovat tvar jednotlivých písmen nesymetricky (např. při úpravě loga) — po převodu se ale text přestane chovat jako text (nejde už jen přepsat).
- Text lze psát i „od ruky“ (kreslicím nástrojem) a dotvarovat — používá se např. pro kaligrafické podpisy.

## Cvičení

- Nakreslete čtverec 100×100 mm, zmenšenou kopii 90×90 mm a další 80×80 mm — vyzkoušejte kopírování s postupnou změnou velikosti.
- Nakreslete vlajku v poměru stran 2:3 (klín sahající do poloviny delší strany, vodorovné pruhy stejně velké) pomocí základních tvarů a úseček.
- Vytvořte mřížku do formátu A4 (čtverečky 1×1 cm, okraje 1 cm) pomocí vícenásobného kopírování jedné vodorovné a jedné svislé úsečky.
- Namíchejte vlastní barvu v modelu RGB a vytvořte z ní novou paletu; vyzkoušejte lineární a kónický přechod se změnou úhlu.
- Napište krátký text jako „umělecký“ a umístěte ho na zakřivenou křivku (např. text obtékající kruh, podobně jako v logu).
