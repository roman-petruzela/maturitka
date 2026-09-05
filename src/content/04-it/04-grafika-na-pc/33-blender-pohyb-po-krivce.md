---
title: "Blender – pohyb po křivce"
order: 33
source: "grafika/VY_32_INOVACE_3224_16.pdf"
---
Animace – pohyb po křivce a sledování objektu kamerou

# Pohyb po křivce

- V prezentaci č. 6 bylo uvedeno modelování pomocí křivek. Speciální typ křivky „path“ lze také použít pro pohyb jiného objektu po této křivce.

- Pomocí kl. Zkratky „Shi�+A“ a výběru ze zobrazeného menu –“Curve – Path“ vložíme křivku do scény.

<u>h�p://www.blender.org/</u>

# Pohyb po křivce

Křivku můžeme různě upravit v editačním (TAB) módu, např. tak jak vidíme na obrázcích (půdorys a bokorys).

# Pohyb po křivce

- Do scény vložíme UV kouli na souřadnice 0,0,0 a upravíme její velikost.

- Na kartě „Constrains“ tl. „Add Object Constrains“ přidáme vazbu „Follow path“ – sleduj cestu.

# Pohyb po křivce

- Na kartě „Curve“ nastavíme na záložce „Path Anima�on“

- • Počet snímků pro proji� křivky

- • Čas – na proji� křivky (4s = 100 snímků,snímek 1 + RM Insert Keyframe, snímek 100, změnit čas na 100 + RM Insert Keyframe)

- Následování – pro objekty, které se budou natáčet podle natočení křivky

# Pohyb po křivce

- Na záložce „Follow Path“ vybereme: – cílovou cestu (naši křivku) – Směr pohybu v před (řídí se lokálními souřadnicemi objektu)

- Určíme směr vzhůru – Účinnost na 100% = 1, míra přesnos� sledovanos�

# Sledování objektu kamerou

<!-- Start of picture text -->
Využijeme předchozí scénu.<br><!-- End of picture text -->

- Kameru přesuneme tak, aby měla souřadnici Z = 0.

- Kameře přidáme na kartě „Constrains“ tl. „Add Object Constrains“vazbu „Tracku To“ – sleduj objekt.

# Úkoly a otázky:

1. Pro UV kouli měňte na kartě „Follow Path“ parametry: Follow curve, Curve radius, Fixed posi�on a Influence. Jak se projevují změny na výsledné animaci?

2. Pro kameru měňte na kartě „Track To“ parametry: To, up, space a Influence. Jak se projevují změny na výsledné animaci?

# Řešení

1. Řešení najdete v souboru 16-reseni_1.blend . 2. Řešení najdete v souboru 16-reseni_2.blend . 3. Řešení najdete v souboru 16-reseni_3.blend . 4. Řešení najdete v souboru 16-reseni_4.blend .

# Sledování objektu kamerou

<!-- Start of picture text -->
Na záložce „Track To“<br>vybereme:<br>– Cílový objekt sledování<br>(UV kouli)<br>– Směr pohybu v před (řídí<br>se lokálními souřadnicemi<br>objektu)<br>– Určíme směr vzhůru<br>– Účinnost na 100% = 1,<br>míra přesnos�<br>sledovanos�<br><!-- End of picture text -->

# Úkoly a otázky:

3. Jak se změní výsledná animace když UV kouli umís�me mimo souřadnice 0,0,0?

4. Vytvořte novou scénu do které vložíte cestu ve tvaru kruhu (nebo alespoň uzavřenou cestu). Nastavte kameru tak, aby se pohybovala po této kružnici a zároveň neustále sledovala její střed.

## **Použité zdroje:**

   - STICHTING BLENDER FOUNDATION. _Blender_ [online]. 2014, 19. března [cit. 2014-03-31]. Dostupné z: h�p://www.blender.org/

- Veškerý textový a další obrazový materiál je vytvořen a zpracován autorem textu, není-li uvedeno jinak.

- **Licence:**

   - Blender je Free & Open Source So�ware.

   - Vlastníkem licence pro používání Microso� Office 2013 je SPŠei Ostrava, Kratochvílova 7.
