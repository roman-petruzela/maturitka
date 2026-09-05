---
title: "Blender – simulace tekutin"
order: 29
source: "grafika/VY_32_INOVACE_3224_09.pdf"
---
Modelování v Blenderu Simulace teku�n

# Simulace teku�n

1. Také se ji říká Fluidní dynamika – patří do fyzikálních animací

2. Umožňuje simulovat vodu, olej, med atd.

<u>h�p://www.blender.org/</u>

2

# Scéna

- Nejprve si vytvoříme scénu:

   - Dvě plochy na sebe kolmé – Kameru přesuneme tak, aby byla napro� svislé rovině

   - Vymodelujeme si sklenici z válce nebo z vyplněného kruhu a použijeme nástroj extrude, anebo rotací nějaké křivky okolo osy Z.

# Simulace teku�n

- Do scény vložíme UV kouli vlevo nahoře.

- Dalším vloženým objektem může být krychle, která bude tvořit Domain Objekt. Trochu upravíme rozměr tak, aby se sklenice s UV koulí vešla do této krychle (viz. Obrázek).

•

3

5

<!-- Start of picture text -->
Scéna<br>4<br><!-- End of picture text -->

# Simulace teku�n

- Umístění UV koule a sklenice (vlevo pohled zepředu, vpravo z boku)

<!-- Start of picture text -->
7<br><!-- End of picture text -->

# Nastavení materiálu vody

- Na časové ose  si vybereme nejlepší simulaci vody (fluidní objekt).

- A přes „SHIFT+D“ +“Enter“ uděláme kopii objektu. POZOR! Nechat na místě!

<!-- Start of picture text -->
19<br><!-- End of picture text -->

# Výsledná scéna

<!-- Start of picture text -->
Klávesou F12 můžeme nechat renderovat jeden<br>snímek.<br><!-- End of picture text -->

# Nastavení materiálu vody

- Výběr nejlepší simulace vody na časové ose a její kopie. 20

# Úkoly a otázky:

1. Ve výsledné scéně zkuste změnit barvu vody (např. na červenou – barvu vína). Jak se tato změna projeví ve výsledném obrázku a výpočetním čase?

2. Pro Domain objekt (krychli) změňte na záložce „Fluid“ položku „Viscosity“ na 0 a nechte proběhnout výpočet. Jak se projeví změna na čase výpočtu?

3. Jako 2. ale použijte hodnotu 1.

4. Nastavte vlastní viskozitu fluidního materiálu a nechte proběhnout výpočet.

<!-- Start of picture text -->
23<br><!-- End of picture text -->

24

<!-- Start of picture text -->
Řešení<br><!-- End of picture text -->

1. Řešení najdete v souboru 09-reseni_1.blend . Čas výpočtu byl 1:12.77 min, kvalita zůstala stejná.

25

# Řešení

3. Řešení najdete v souboru 09-reseni_3.blend . Čas výpočtu byl 1:17.52 min, kvalita zůstala stejná.

<!-- Start of picture text -->
27<br><!-- End of picture text -->

# Řešení

2. Řešení najdete v souboru 09-reseni_2.blend . Čas výpočtu byl 1:08.08 min, kvalita zůstala stejná.

# Řešení

4. Řešení najdete v souboru 09-reseni_4.blend . Čas výpočtu byl 1:05.37 min, kvalita zůstala stejná.

<!-- Start of picture text -->
26<br><!-- End of picture text -->

<!-- Start of picture text -->
28<br><!-- End of picture text -->

## **Použité zdroje:**

- STICHTING BLENDER FOUNDATION. _Blender_ [online]. 2014, 19. března [cit. 2014-03-31]. Dostupné z: h�p://www.blender.org/

- Veškerý textový a další obrazový materiál je vytvořen a zpracován autorem textu, není-li uvedeno jinak.

## **Licence:**

- Blender je Free & Open Source So�ware.

- Vlastníkem licence pro používání Microso� Office 365 je MSŠ.

29
