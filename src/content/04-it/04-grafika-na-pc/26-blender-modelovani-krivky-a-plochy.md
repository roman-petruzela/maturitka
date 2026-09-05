---
title: "Blender – modelování: křivky a plochy"
order: 26
source: "grafika/VY_32_INOVACE_3224_06.pdf"
---
<!-- Start of picture text -->
Modelování v Blenderu<br>Křivky a plochy<br>h�p://www.blender.org/<br><!-- End of picture text -->

# Bezierovy křivky

- Poloha pomocných bodů vzhledem k řídícím udává tvar křivky.

- A také typ uzlových bodů, který zadáme v editačním módu.

- Typ zadáme tl.“V“ nebo přes menu „Control Points – Set Handle Type“

<!-- Start of picture text -->
5<br><!-- End of picture text -->

<!-- Start of picture text -->
Modelování v Blenderu<br>Křivky a  plochy<br>1. Bezierovy křivky<br>2. NURBS křivky<br>3. NURBS plochy<br>Křivky (curves) a plochy (surface) nejsou tvořené sí� bodů,<br>ale matema�ckým popisem.<br>Výhoda: menší paměťové nároky na jejich reprezentaci než u mesh<br>objektů.<br>Nevýhoda: matema�cký popis prodlužuje čas renderování.<br>ALT+C – převod křivky/plochy na mesh objekt.<br>2<br><!-- End of picture text -->

# Bezierovy křivky

<!-- Start of picture text -->
jsou dány koncovými body. Každý z těchto<br>koncových bodů má ještě další dva pomocné<br>body. (Editační mód).<br>4<br><!-- End of picture text -->

<!-- Start of picture text -->
Bezierovy křivky<br>Typy uzlových bodů:<br>Automa�c  - spojnice mezi<br>pomocným a řídícím<br>bodem je žlutá – žlutá –  –<br>automa�cky nastaví tvar  nastaví tvar<br>a směr spojnice tak, aby směr spojnice tak, aby  tak, aby<br>tvar křivky byl co nejvíce<br>vyhlazený. .<br><!-- End of picture text -->

<!-- Start of picture text -->
Typy uzlových bodů:<br>Automa�c  - spojnice mezi<br>pomocným a řídícím<br>bodem je žlutá – žlutá –  –<br>automa�cky nastaví tvar  nastaví tvar<br>a směr spojnice tak, aby směr spojnice tak, aby  tak, aby<br>tvar křivky byl co nejvíce<br>vyhlazený. .<br>6<br><!-- End of picture text -->

# Bezierovy křivky

<!-- Start of picture text -->
Vector Handle  - spojnice<br>mezi pomocným a řídícím<br>bodem je zelená – spojnice<br>směřuje do předchozího /<br>následujícího řídícího bodu.<br>Obdoba Free Handle.<br>7<br><!-- End of picture text -->

# Bezierovy křivky

**Free Handle** – spojnice mezi pomocným a řídícím bodem je červená – každá z obou spojnic řídícího dobu s pomocnými může mít libovolný směr a délku. Vhodné pro ostré přechody mezi navazujícími křivkami. 9

# NURBS křivky

jsou dány čtyřmi řídícími body (Editační mód). Poloha bodů a jejich váha udává tvar křivky.

<!-- Start of picture text -->
11<br><!-- End of picture text -->

# Bezierovy křivky

**Aligned Handle** - spojnice mezi pomocným a řídícím bodem je fialová – spojnice leží na jedné přímce – hladké navazování křivkových úseků. 8

# Bezierovy křivky

**Toggle Free/Align Handle** – je přepínání mezi Free a Aligned. Přidávání dalšího řídícího bodu je stejné jako přidávání vrcholu – tj. „CTRL+LM“ nebo tl. „E“ - Extrude. 10

# Úkoly a otázky:

1. Vložte do scény všechny druhy křivek a zjistěte přes editační mód rozdíl v jejich zadání. Dále přidávejte / mažte další řídící body. Vyzkoušejte převod na mesh objekt.

<!-- Start of picture text -->
15<br><!-- End of picture text -->

3. Vložte do scény všechny druhy NURBS plochy a zjistěte přes editační mód rozdíl v jejich zadání. Dále přidávejte / mažte další řídící body. Vyzkoušejte převod na mesh objekt.

<!-- Start of picture text -->
17<br><!-- End of picture text -->

## 2. Co jsou za křivky na následujících obrázcích?

<!-- Start of picture text -->
16<br><!-- End of picture text -->

# Řešení

1. Řešení najdete v souboru 06-reseni_1.blend . 2. Levý sloupec: BezierCircle, NurbsCircle Pravý sloupec: NurbsPath, BezierCurve, NurbsCurve.

3. Řešení najdete v souboru 06-reseni_3.blend .

18

## **Použité zdroje:**

- STICHTING BLENDER FOUNDATION. _Blender_ [online]. 2014, 19. března [cit. 2014-03-31]. Dostupné z: h�p://www.blender.org/

- Veškerý textový a další obrazový materiál je vytvořen a zpracován autorem textu, není-li uvedeno jinak.

**Licence:**

- Blender je Free & Open Source So�ware.

- Vlastníkem licence pro používání Microso� Office 2013 je SPŠei Ostrava, Kratochvílova 7.

19
