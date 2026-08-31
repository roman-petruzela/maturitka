---
title: "Blender – UV textury"
order: 31
source: "grafika/VY_32_INOVACE_3224_12.pdf"
---
Materiály – UV Textury

# Materiály – UV Textury

UV Textury jsou také obrázky, které jsou "přilepené" tzv. mapované na objekty jako obrázkové textury v předchozí prezentaci (č. 11). Ale na rozdíl od předchozího typu textury jsou nanášeny přesně na daný objekt podle UV souřadnic.

<u>h�p://www.blender.org/</u>

# Materiály – UV Textury

## **Postup práce s UV texturami**

1. Vytvoření scény (kostka na podložce).

2. Vytvoření UV mapy

3. Vytvoření UV textury v bitmapovém editoru

4. Přiřazení UV textury k mapě a objektu

5. Renderování scény

# Upravené prostředí Blenderu

<!-- Start of picture text -->
UV / Image editor 3D view<br><!-- End of picture text -->

# Materiály – UV Textury

Než začneme upravíme si prostředí Blenderu:

- Změníme „Screen layout“ z „Default“ na „UV Edi�ng“.

- Tím se změní rozložení panelů okna pro práci s UV texturami

# Materiály – UV Textury

Vytvoříme si jednoduchou scénu s plochou a krychlí (viz. obr.). Jednotlivým objektům byla přiřazena barva pro orientaci.

# Materiály – UV Textury

Nyní začneme s vytvářením UV mapy pro krychli:

- Přepneme se do editačního módu (TAB) v okně 3D view.

- Změníme výběr z vrcholů na hrany (CTRL+TAB, Edge)

- Zapneme zobrazování skrytých hran

# Materiály – UV Textury

- Nyní vybereme na krychli ty hrany, které budeme „rozřezávat“ tak, aby nám vznikl obal krychle (něco jako rozložená krabice).

- Označené hrany jsou žluté (3 na vrchní straně, 3 na spodní straně a jedna ver�kální)

# Materiály – UV Textury

- Z vybraných hran uděláme „švy“. Šev je hrana, která je obarvena na oranžovo, i když není vybrána a slouží pro rozřezání objektu. S�skněte „CTRL+E“ a z nabídky vyberte „Mark Seam“.

# Materiály – UV Textury

- Klávesou „A“ značíme všechny hrany pro vytvoření UV mapy.

- Klávesou „U“ zobrazíme nabídku „UV Mapping“ zvolíme „Unwrap“ vytvoříme UV mapu krychle – zobrazí se v levém okně (UV/Image editor)

# Materiály – UV Textury

- Klávesou „A“ odznačíme vybrané hrany.

- „Švy“ zůstanou oranžové

# Materiály – UV Textury

- Vytvořená UV mapa pro krychli v okně UV/Image editor.

# Materiály – UV Textury

- Nyní mapu uložíme jako obrázek:

- V okně UV/Image editor přes menu „UVs – Export UV Layout“ zobrazíme okno pro uložení obrázku.

# Materiály – UV Textury

Nyní obrázek otevřeme v bitmapovém editoru (GIMP) a dokreslíme texturu. Můžeme přetahovat přes čáry a také je smazat (viz. obrázky). Upravený obrázek opět uložíme!

# Materiály – UV Textury

Přepneme se zpět do objektového módu, můžeme změnit i rozložení oken na „Default“ a přiřadíme krychli nový materiál (pokud jsme ji ještě žádný nepřiřadili) nebo stávajícímu materiálu přidáme texturu typu obrázek. Postup je stejný jako u předchozí prezentace (č. 11).

# Materiály – UV Textury

- Vybereme adresář pro uložení a zadáme jméno souboru (uv_krychle.png)

- Na záložce „Export UV Layout“ můžeme zvolit další parametry: – Typ souboru (PNG) – velikost v pixelech

# Materiály – UV Textury

- Upravený obrázek textury načteme v Blenderu přes menu okna UV/Image editor „Image – Open Image“

- UV mapa s texturou

# Materiály – UV Textury

Nastavíme rozdíly opro� „normálním“ texturám:

- Na záložce „Mapping“ nastavíme: – Coordinate na UV – Map: vybereme UVMap – Projec�on na Flat (jiný typ nezobrazí texturu správně!)

# Materiály – UV Textury

Nyní uložíme soubor a vyrenderujeme snímek.

# Úkoly a otázky:

2. Do scény vložte UV kouli a vytvořte UV textury a) Pro tenisový míč b) Pro basketbalový míč

# Úkoly a otázky:

1. Do scény postupně vkládejte další základní objekty:

   - a) jehlan,

   - b) ICO koule,

   - c) válec. d) Zběhlejší žáci mohou přidat i a) torus b) a monkey.

Každému přidanému objektu vytvořte UV texturu.

# Řešení

   1. Řešení najdete v souboru 12-reseni_1.blend . 2. Řešení najdete v souboru 12-reseni_2.blend .

- c) Jakýkoliv jiný míč (pro fotbal, ragby, volejbal,…)

### **Použité zdroje:**

- STICHTING BLENDER FOUNDATION. _Blender_ [online]. 2014, 19. března [cit. 2014-03-31]. Dostupné z: h�p://www.blender.org/

- Veškerý textový a další obrazový materiál je vytvořen a zpracován autorem textu, není-li uvedeno jinak.

### **Licence:**

- Blender je Free & Open Source So�ware.

- Vlastníkem licence pro používání Microso� Office 2013 je SPŠei Ostrava, Kratochvílova 7.
