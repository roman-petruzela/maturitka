---
title: "Blender – animace"
order: 32
source: "grafika/VY_32_INOVACE_3224_15.pdf"
---
Animace – pozice, rotace a měřítko

# Animace

- jsou „pohyblivé“ obrázky

- slouží pro modelování a simulace

- Simulace – je zjednodušení reálného děje

- • Probíhají:

   - V reálném čase

   - Ve zpomaleném čase – u dějů, které probíhají velmi rychle až bouřlivě (chemie)

<u>h�p://www.blender.org/</u>

# Animace

## Rozdělení animací podle dimenzí

- 3D – použi� 2D objektů (čtverec, kruh) a času

- 4D – použi� 3D objektů (kvádr, koule) a času

- Ve zrychleném čase – u dějů, které probíhají velmi pomalu (vesmír, růst rostlin)

# Animace v Blenderu

Pro vytvoření animací je potřeba zachy�t nějakou činnost v daném okamžiku – v daném snímku. To umožní přidání „klíče“ danému snímku. Základní klíče jsou: • Pozice - loca�on

- Rotace - rota�on

- Měřítko - scale

<!-- Start of picture text -->
Animace pozice<br><!-- End of picture text -->

- Do scény vložíme krychli

- • Krychli můžeme libovolně přesunout (G) ve scéně. • Doporučení: zkontrolujte pohledem z kamery (NUM 0) umístění objektů ve scéně.

- • Na panelu „Time line“ nastavíme první snímek (zelená linka), počáteční a koncový snímek animace (např 100).

# Animace pozice

<!-- Start of picture text -->
Umístění krychle a klíče pozice na první klíčový<br>snímek<br><!-- End of picture text -->

# Animace pozice

- Nyní klávesou „i“ vyvoláme panel klíčů, které je možné snímku přiřadit.

- Zvolíme klíč pro pozici – loca�on

- Na panelu jsou mimo základních klíčů také jejich kombinace

# Animace pozice

Umístění krychle a klíče pozice na druhý klíčový snímek

# Animace rotace

Postup je totožný s postupem animace pozice s �m rozdílem, že zadáváme klíč pro rotaci - „rota�on“ a s objektem provedeme rotaci okolo jedné (či více) z os v globálních či lokálních souřadnicích.

# Animace pozice

## Postup vytváření animace:

1. Zvolíme snímek (100), kterému budeme ch�t přidat klíč.

2. Přesuneme objekt (krychli) na jinou pozici 3. A přes klávesu „i“ opět přidáme klíč „Loca�on“

# Animace pozice

Nyní můžeme tlačítky přehrávače si animaci přehrát dopředu i zpětně, přecházet po klíčových snímcích taktéž vpřed/vzad či se přesunout na první nebo poslední klíčový snímek

# Animace rotace

1. Vložíme mesh objekt opice do scény

2. Vybereme snímek pro přidání klíče

3. Můžeme s opicí rotovat podle libovolné osy

4. Přes klávesu „i“ přidáme klíč po rotaci (nebo v kombinaci s jiným klíčem, např. locrot-pozice a rotace)

# Animace rotace

Umístění opice a klíče rotace na první klíčový snímek

# Animace měřítka

Postup je totožný s postupem animace pozice nebo rotace s �m rozdílem, že zadáváme klíč pro měřítko - „scaling“ a s objektem provedeme změnu měřítka v jedné (či více) z os v globálních či lokálních souřadnicích.

# Úkoly a otázky:

2. Využijte scénu z prezentace č. 4 a animujte rotaci, pozici a změnu měřítka pro objekty ve scéně.

# Animace rotace

Umístění opice a klíče rotace na druhý klíčový snímek. Rotace byla okolo osy Z (lokální) o 720°.

# Úkoly a otázky:

1. Vytvořte scénu s různými mesh objekty (koule, válec, toroid, …) a přiřaďte jim různé vlastnos� ve scéně (pozice, rotace, změna měřítka) a tyto vlastnos� animujte. Vyzkoušejte u vlastnos� použi� lokálních a globálních souřadnic.

# Řešení

1. Řešení najdete v souboru 15-reseni_1.blend . 2. Řešení najdete v souboru 15-reseni_2.blend .

### **Použité zdroje:**

- STICHTING BLENDER FOUNDATION. _Blender_ [online]. 2014, 19. března [cit. 2014-03-31]. Dostupné z: h�p://www.blender.org/

- Veškerý textový a další obrazový materiál je vytvořen a zpracován autorem textu, není-li uvedeno jinak.

**Licence:**

- Blender je Free & Open Source So�ware.

- Vlastníkem licence pro používání Microso� Office 2013 je SPŠei Ostrava, Kratochvílova 7.
