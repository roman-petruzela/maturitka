---
title: "Blender – základní charakteristika a rozhraní programu"
order: 22
source: "grafika/VY_32_INOVACE_3224_02.pdf"
---
<!-- Start of picture text -->
Základní charakteris�ka programu<br>Blender<br>h�p://www.blender.org/<br><!-- End of picture text -->

# Rysy programu

# Základní rozhraní programu

<!-- Start of picture text -->
2<br><!-- End of picture text -->

# Rozhranní

1. Fotorealis�cké renderování (vykreslování)

2. Rychlé modelování

3. Realis�cké materiály

4. Rychlý rigging

5. Animační nástroje

6. Sculp�ng – sochařství / řezbářství

7. Vytváření UV map – textur

8. Kompoziční nástroje

9. Simulace

10. Vytváření her

11. Kamera a objekt tracking

# Modelování

- Práce s různými 3D objekty (mesh, nurbs plochy, Beziérovy a B-spile křivky).

- Editační mód pro mesh objekty s editací vertexů, hran a ploch.

- Booleovské (logické) funkce s mesh objekty.

- Mnoho editačních nástrojů (extrude, bevel, spin, cut, screw, warp, subdivide, noise, smooth ,...)

<!-- Start of picture text -->
3<br><!-- End of picture text -->

5

- plné přizpůsobení uživateli,

- lokalizace (En, CZ, ...),

- různé operační systémy (Win, Linux,...),

- libovolný počet nepřekrývajících se oken,

- obrazový/UV editor,

- Python skripty. 4

# Animace

- Dopředná a inverzní **kinema�ka** .

- Editor **nelineárních animací** .

- Několik typů **constraints** (např. sledování pohybujícího se objektu).

- **Deformace** objektů.

- **Pose editor** pro animaci postav.

- **Čás�cové** efekty s možnos� využi� **deformátorů** větru, gravitace, magne�ckého pole a detekce kolizí.

6

# Rendering

- Implementovaný rendering engines:

   - **EEVEE**

   - **Workbench**

   - **Cycles**

- A velmi realis�cký – **Cycles render**

- Podpora externích ray tracerů Yafray, POV-ray

- Postprodukční efekty (mlha, glow,...)

- Několik materiálových shaderů pro s�nování povrchu objektů.

- Integrace procedurálních textur.

# Soubory

- Veškerá data ukládána do jednoho souboru s příponou . **blend** .

- Formát .blend podporuje kompresi, digitální podpis, zakódování, dopřednou i zpětnou kompa�bilitu.

- Čte/zapisuje formáty tga, jpg, png, avi, QuickTime, gif, �ff, psd, mov.

- Na�vní podpora importu a exportu formátů dxf, vrml, lwo, 3ds,...

7

# Vytváření her

- Grafický editor pro naprogramování logiky aplikace bez nutnos� znalos� programování.

- Detekce kolizí a simulování dynamiky.

- Podpora všech světelných modelů OpenGL.

- Přehrávání her a interak�vního 3D obsahu scény bez potřeby kompilace nebo předběžného počítání.

- Audio podpora.

# Verze programu

- Aktuální verze je 4.0.1  (1/2024)

- <sup>Možnost stáhnout z:</sup>

<u>h�p://www.blender.org/download/</u>

Vhodné je zvolit soubor ZIP, který stačí jen rozbalit do adresáře čímž odpadá instalace pokud vyjde nová verze (čož se děje poměrně často – cca 1x měs.)

8

- Vytvoření samospus�telných souborů (exe) s interak�vními 3D aplikacemi.

9

# Popis okna programu

<!-- Start of picture text -->
Popis okna programu<br>1<br>2 4 5<br>3<br>1<br>11<br><!-- End of picture text -->

# Popis okna programu

1. Horní a dolní menu –zpravidla pro každé okno samostatné

2. 3D View – okno náhledu na scénu

3. Záložka s nástroji – klávesa „ **T** “

4. Záložka Vlastnos� – přesné nastavování – klávesa „ **N** “

5. Okno Vlastnos� objektu, nastavení prostředí

10

12

# 3D view

<!-- Start of picture text -->
Globální souřadnice<br>Název pohledu Světlo - bodové<br>Název vybraného<br>objektu<br>Objekt - krychle<br>Kamera – šipka označuje<br>směr nahoře pro kameru Mřížka – podlaha,<br>horizont (Z = 0)<br>3D kurzor<br>13<br><!-- End of picture text -->

# Základní ovládání v 3D view

<!-- Start of picture text -->
• Myš:<br>– Pravé tl.  myši (RM) = výběr objektu<br>– Levé tl.  myši (LM) = umístění 3D kurzoru, jiná volba<br>– Klik kolečko myši+ pohyb = otáčení scény<br>– Pohyb kolečkem myši  = přiblížení/oddálení scény (zoom)<br>• Numerická klávesnice:<br>– NUM 1, 3, 7 =pohled XZ, YZ (bokorys), XY (půdorys)<br>– NUM 2,8,4,6 = rotace okolo objektu nahoru/dolů nebo vlevo/vpravo po 15° (dá se<br>změnit)<br>– NUM 5 = přepnu� mezi perspek�vou a ortografickým pohledem<br>– NUM 0 = pohled z kamery<br>– NUM „,“ (čárka) =  nastavení pozice rotace pohledu na vybraný objekt<br>– NUM „+“ a „-“ = zoom<br>15<br><!-- End of picture text -->

# 3D view - objekt

- Objekt – vybraný je orámován oranžovou barvou

- Pivot – střed či těžiště objektu – oranžová tečka

- Souřadnice (lokální) objektu v prostoru (x,y,z) – 3D manipulátory 14

<!-- Start of picture text -->
Vkládání objektů<br>Druhý a rychlejší<br>způsob je použít<br>klávesovou zkratku<br>„SHIFT+A“ a vybrat SHIFT+A“ a vybrat “ a vybrat<br>objekt.<br><!-- End of picture text -->

<!-- Start of picture text -->
Druhý a rychlejší<br>způsob je použít<br>klávesovou zkratku<br>„SHIFT+A“ a vybrat SHIFT+A“ a vybrat “ a vybrat<br>objekt.<br>19<br><!-- End of picture text -->

# Úkoly a otázky:

1. Založte nový projekt a vložte několik objektů do scény. Vždy umístěte 3D kurzor na jiné místo pro vkládání objektů.

2. Vyberte objekt a změňte barvu objektu.

3. Vyzkoušejte si práci s numerickou klávesnicí.

4. Uložte scénu do souboru s příponou blend.

<!-- Start of picture text -->
21<br><!-- End of picture text -->

<!-- Start of picture text -->
Řešení<br>1. Řešení najdete v souboru:<br>02-reseni_1-4.blend<br>22<br><!-- End of picture text -->

## **Použité zdroje:**

- STICHTING BLENDER FOUNDATION. _Blender_ [online]. 2014, 19. března [cit. 2014-03-31]. Dostupné z: h�p://www.blender.org/

- Veškerý textový a další obrazový materiál je vytvořen a zpracován autorem textu, není-li uvedeno jinak.

## **Licence:**

- Blender je Free & Open Source So�ware.

- <sup>Vlastníkem licence pro používání Microso�</sup> Office 365 je MSŠ.

23
