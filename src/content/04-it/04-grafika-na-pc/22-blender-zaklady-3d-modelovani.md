---
title: "Blender – základy 3D modelování"
order: 22
source: "grafika/VY_32_INOVACE_3224_02 až 18.pdf (13 prezentací sloučeno do jednoho materiálu)"
hasExercises: true
---

> Pozn. k obsahu: Původní podklad byl rozdělen do 13 samostatných prezentací (rozhraní, modelování, zarovnávání, množinové operace, křivky, modifikátory, materiály, UV textury, světla, animace, pohyb po křivce, rendering, normály) — pro přehlednost a s ohledem na rozsah ŠVP (Blender je zde jen jedna dílčí podkapitola tématu Grafika na PC) sloučeno do jednoho materiálu.

**Blender** ([blender.org](http://www.blender.org/)) je bezplatný open-source program pro tvorbu 3D grafiky — modelování, materiály a textury, rigging a animace, simulace (tekutiny, kouř, částice), sochařství (sculpting), kompozici i renderování. Ukládá vše (scénu, objekty, materiály, nastavení) do jednoho souboru s příponou `.blend`.

## Rozhraní programu

- **3D view** — hlavní okno s náhledem scény.
- Klávesa **T** — postranní panel s nástroji, **N** — panel s přesnými vlastnostmi vybraného objektu.
- Myš: pravé tlačítko vybírá objekt, levé umísťuje 3D kurzor, kolečko (klik + tažení) otáčí pohled, samotné kolečko přibližuje/oddaluje scénu.
- Numerická klávesnice: `1`/`3`/`7` — pohled zepředu/zboku/shora, `2`/`4`/`6`/`8` — rotace pohledu po 15°, `5` — přepnutí perspektiva/ortografie, `0` — pohled z kamery.
- Nový objekt vložíme klávesovou zkratkou **Shift+A**.

## Modelování — objektový a editační mód

Blender pracuje se dvěma základními módy, mezi kterými se přepíná klávesou **Tab**:

- **Objektový mód** — pracujeme s celými objekty scény najednou (přesun, rotace, změna měřítka, uspořádání scény).
- **Editační mód** — upravujeme vnitřní strukturu jednoho vybraného objektu: jeho vrcholy (vertices), hrany (edges) a plochy (faces).

Základní transformace (platí v obou módech):

| Klávesa | Operace | Omezení na osu |
|---|---|---|
| G | posun (grab) | G, pak X/Y/Z |
| R | rotace | R, pak X/Y/Z |
| S | změna měřítka (scale) | S, pak X/Y/Z |

Dvojitý zápis osy (např. `GXX`) omezí transformaci na lokální souřadnice objektu místo globálních.

V editačním módu navíc:
- **F** — spojí dva vybrané vrcholy hranou, případně vytvoří plochu ze 3+ vybraných vrcholů.
- **Ctrl + levé tlačítko myši** — přidá nový vrchol spojený hranou s předchozím.
- **X** (nebo Delete) — smaže vybrané vrcholy/hrany/plochy.
- Výběr: **B** (obdélníkový výběr), **C** (kruhový výběr).

**Zarovnávání objektů** (Snap) umožňuje umístit pivot jednoho objektu přesně na pivot nebo 3D kurzor jiného objektu — užitečné při skládání scény z více dílů se společným středem nebo osou.

### Množinové (booleovské) operace

Pro objekty typu mesh lze počítat s logickými operacemi mezi dvěma překrývajícími se tělesy:

- **Sjednocení (Union)** — spojí obě tělesa v jedno.
- **Rozdíl (Difference)** — odečte objem druhého tělesa od prvního.
- **Průnik (Intersect)** — ponechá jen společný objem obou těles.

Výsledek závisí na tom, které z dvojice těles je zvoleno jako řídící objekt.

## Křivky a plochy

Křivky (curves) a plochy (surfaces) nejsou na rozdíl od mesh objektů tvořeny sítí vrcholů, ale matematickým popisem — mají menší paměťové nároky, ale delší čas renderování. Klávesová zkratka **Alt+C** převede křivku/plochu na běžný mesh objekt.

- **Bézierovy křivky** — definované koncovými body, každý má dva pomocné (řídicí) body určující tvar a směr křivky. Typ napojení řídicích bodů (klávesa **V**): *Automatic* (automaticky vyhlazené), *Vector* (směřuje do sousedního bodu), *Free* (libovolný směr — ostré přechody), *Aligned* (oba směry na jedné přímce — hladké napojení).
- **NURBS křivky** — definované čtyřmi řídicími body, jejichž poloha a váha určují tvar.
- **NURBS plochy** — obdoba NURBS křivek ve dvou dimenzích.

## Modifikátory

Modifikátory mění, generují nebo deformují tvar objektu, aniž by trvale upravovaly jeho základní mesh — lze jich na jeden objekt nastavit víc najednou a měnit jejich pořadí. Nejčastěji používané (ze skupiny generujících):

- **Array** — vytvoří pravidelnou řadu kopií objektu.
- **Bevel** — zkosí/zaoblí hrany.
- **Mirror** — zrcadlí objekt podle zvolené osy.
- **Screw** — vytvoří rotační těleso otočením profilu okolo osy (např. šroubovice, schodiště).
- **Subdivision Surface** — vyhladí povrch jemnějším dělením ploch.
- **Triangulate** — převede plochy na trojúhelníky.
- **Wireframe** — nahradí plochy drátěným modelem podél hran.

## Materiály a textury

Textura je obrázek "namapovaný" na povrch objektu, aby vypadal realističtěji (dřevo, rez, špinavé sklo apod.). Základní postup: vytvoříme/vybereme obrázek textury → přiřadíme ji materiálu objektu → nastavíme způsob mapování → vyrenderujeme.

Druhy textur: obrázkové, procedurální (generované matematicky), bump/displacement (simulují nebo skutečně mění reliéf povrchu), environmentální (okolí scény).

Při mapování obrázkové textury se volí:
- **Coordinates** — jaké souřadnice se použijí pro mapování (Generate, UV, ...).
- **Projection** — tvar promítání podle přibližného tvaru objektu (Flat pro plochu, Cube pro krychli, Sphere pro kouli, Tube pro válec/kužel).
- **Repeat** — kolikrát se textura na povrchu zopakuje v ose X a Y.

### UV textury

UV textura se na rozdíl od jednoduchého mapování nanáší přesně podle **UV souřadnic** — vlastního rozvinutí povrchu objektu do roviny (podobně jako rozstřižená krabice). Postup:

1. V editačním módu označíme hrany, podle kterých se má objekt "rozříznout", a označíme je jako šev (**Ctrl+E → Mark Seam**).
2. Vybereme všechny hrany (**A**) a klávesou **U → Unwrap** vytvoříme UV mapu — zobrazí se v UV/Image editoru.
3. UV mapu exportujeme jako obrázek, v bitmapovém editoru (GIMP) podle ní domalujeme texturu a načteme ji zpět.
4. Při mapování takové textury nastavíme Coordinates na **UV** a Projection na **Flat**.

## Světla

Světlo je objekt jako každý jiný, ovlivňuje ale jen objekty ve stejné scéně a může vrhat stín i promítat texturu. Základní typy: bodové (Point), reflektorové/kuželové (Spot), plošné (Area) a slunce (Sun, rovnoběžné paprsky). U bodového světla lze nastavit typ útlumu intenzity se vzdáleností (lineární, kvadratický, konstantní aj.).

Pro rovnoměrně nasvícenou scénu se často používá **tříbodový model osvětlení**: dvě světla po stranách kamery a jedno za objektem (z pohledu kamery skryté za ním), které oddělí objekt od pozadí.

## Animace

Animace vzniká zaznamenáním hodnoty vlastnosti objektu do **klíčových snímků** (keyframes) na časové ose. Základní klíče: **poloha** (location), **rotace** (rotation), **měřítko** (scale).

Postup: nastavíme aktuální snímek na časové ose → upravíme vlastnost objektu (přesuneme, otočíme, změníme velikost) → klávesou **I** přidáme klíč pro danou vlastnost. Mezi klíčovými snímky Blender hodnotu automaticky interpoluje, čímž vzniká plynulý pohyb.

### Pohyb po křivce a sledování objektu

Speciální typ křivky **Path** lze použít jako dráhu pohybu jiného objektu:

1. Vložíme křivku typu Path (Shift+A → Curve → Path) a upravíme její tvar.
2. Objektu, který má po křivce jezdit, přidáme vazbu (constraint) **Follow Path** a jako cíl zvolíme naši křivku.
3. Na křivce nastavíme, za kolik snímků má objekt celou dráhu projet.

Podobně lze kameře přidat vazbu **Track To**, aby soustavně mířila na zvolený objekt bez ohledu na to, jak se sama pohybuje po scéně — používá se typicky společně s pohybem po křivce.

## Simulace tekutin

Fluidní simulace (fluid dynamics) patří mezi fyzikální animace a umožňuje simulovat chování kapalin (voda, olej apod.). Základní princip: do scény vložíme těleso s vlastností *Fluid* (kapalina, např. UV koule) a ohraničující krychli s vlastností *Domain*, která definuje prostor, ve kterém se simulace počítá. Blender pak dopočítá pohyb kapaliny snímek po snímku; z výsledné animace lze vybrat nejlépe vypadající snímek pro finální scénu. Klíčovým parametrem je **viskozita** kapaliny — ovlivňuje jak vzhled (řidší/hustší tekutina), tak výpočetní čas simulace.

## Rendering

Renderování je proces výpočtu výsledného obrázku nebo videa ze scény. Před spuštěním je potřeba nastavit:

- **Renderovací engine** (např. EEVEE — rychlý, Cycles — realistický raytracing).
- **Kameru** — typ projekce (perspektiva/ortografie/panorama), ohniskovou vzdálenost, případně hloubku ostrosti (na který objekt má kamera zaostřit).
- **Svět (World)** — barvu/typ oblohy, nepřímé osvětlení (Ambient Occlusion), případně mlhu.
- **Scénu** — aktivní kameru, jednotky (metrické/anglické), případně gravitaci (důležité pro fyzikální simulace).
- **Výstup** — rozlišení, poměr stran, barevnou hloubku a formát (PNG/JPEG pro jednotlivé snímky, video formáty jako H.264 pro animaci), případně vyhlazení hran (anti-aliasing) — vyšší kvalita vždy znamená delší čas výpočtu.

Tlačítko **Render** vykreslí aktuální snímek, volba **Animation** vyrenderuje celou animaci od prvního do posledního klíčového snímku.

## Dodatky k modelování

- **Normály ploch** určují, na kterou stranu plocha "hledí" (důležité např. pro textury a osvětlení). Po množinových operacích může být potřeba je opravit: *Recalculate* přepočítá normály celého objektu, *Flip Direction* obrátí normálu jedné vybrané plochy.
- **Vyhlazení (Smooth/Flat shading)** — zakulacené objekty vypadají hranatě, dokud se na ně neaplikuje vyhlazení stínování; nemění se tím geometrie, jen způsob, jakým se počítá osvětlení povrchu.
- **Magnetismus (Proportional Editing)** — při úpravě jednoho vrcholu v editačním módu ovlivní i okolní vrcholy v nastaveném dosahu (typy vlivu: Random, Constant, Linear, Sharp, Smooth aj.) — používá se např. pro modelování terénu nebo měkkých deformací.

## Cvičení

- Vytvořte scénu s několika základními tělesy (krychle, koule, válec, kužel) a vyzkoušejte na nich všechny základní transformace (G/R/S) v globálních i lokálních souřadnicích.
- Ze dvou překrývajících se těles vytvořte pomocí množinových operací sjednocení, rozdíl i průnik a porovnejte výsledky.
- Vytvořte točité schodiště z jednoho schodu pomocí modifikátorů Bevel (zaoblení), Array (rozmnožení) a Screw (rotace do šroubovice).
- Vymodelujte jednoduchý objekt (např. míč), vytvořte pro něj UV mapu, domalujte texturu v bitmapovém editoru a aplikujte ji zpět na objekt.
- Nasviťte scénu podle tříbodového modelu osvětlení a porovnejte výsledek s osvětlením jediným světlem.
- Vytvořte animaci objektu pohybujícího se po uzavřené křivce (kruh), přičemž kamera bude po celou dobu sledovat její střed.
