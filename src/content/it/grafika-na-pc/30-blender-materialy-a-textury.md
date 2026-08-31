---
title: "Blender – materiály a textury"
order: 30
source: "grafika/VY_32_INOVACE_3224_11.pdf"
---
Materiály - Textury <u>h�p://www.blender.org/</u>

# Materiály - Textury

## **Postup práce s texturami**

1. Vytvoření vlastní textury v nějakém bitmapovém editoru (malování, Gimp, Photoshop,...)

2. Vytvoření scény vložení objektu/ů (krychle, UVkoule, kužel, válec)

3. Přiřazení naší textury těmto objektům.

4. Úprava vlastnos� textury.

5. Kopírování textury + změna vlastnos�.

6. Renderování scény

# Materiály - Textury

Vytvoříme si jednoduchou scénu s plochou, UV koulí, válcem, krychlí a jehlanem (viz. obr.). Jednotlivým objektům byla přiřazena barva pro orientaci.

# Materiály - Textury

1. Textury jsou obrázky, které jsou "přilepené" tzv. mapované na objekty, aby tyto objekty vypadaly realis�čtěji ( dřevěná bedna, zašpiněné okenní sklo, rez na kovových předmětech).

2. Druhy:

   - Obrázkové textury

   - UV textury

   - Procedurální textury

   - Bump textury

   - Displacement textury

   - – Environmentální textury – atd.

# Materiály - Textury

<!-- Start of picture text -->
Nyní budeme přiřazovat<br>texturu jednotlivým<br>objektům.<br>Vybereme si krychli:<br><!-- End of picture text -->

- Na kartě Textura založíme novou texturu přes tl. „New“.

# Materiály - Textury

- Zatrhneme viditelnost textury

- Můžeme texturu přejmenovat např. na Tsachovnice

- • A vybereme typ textury „Image or Movie“

# Materiály - Textury

- Na záložce „Image Mapping“ nastavíme:

- • Extension: na Repeat (opakování textury)

- • Opakování v ose X a Y = 1 • Ostatní volby za�m ponecháme

# Materiály - Textury

- Vybereme si UV kouli a nastavíme parametry obdobně jako u krychle:

- Pojmenujeme novou texturu Tkoule, přiřadíme stejný obrázek.

- Na záložce „Mapping“ nastavíme projekci na „Sphere“.

# Materiály - Textury

- Na záložce „Image“ zmáčkneme tl. „Open“ a vybereme z adresáře náš obrázek „sachovnice_cb.png“.

- Následně záložka změní a přibydou další parametry.

# Materiály - Textury

- Na záložce „Mapping“ nastavíme:

- • Jaké Souřadnice se mají použít pro mapování obrázku – Generate

- • Výběr typu mapování dle • přibližného tvaru objektupoužijeme Cube

- • Velikost obrázku (<0 – zvětšíme, >0 – zmenšíme)

- • Posunu� obrázku po povrchu objektu

# Materiály - Textury

- Vybereme si kužel a nastavíme parametry obdobně jako u krychle:

- • Pojmenujeme novou texturu Tkuzel, přiřadíme stejný obrázek.

- Na záložce „Mapping“ nastavíme projekci na „Tube“.

# Materiály - Textury

- Pro válec nastavíme parametry stejně jako pro jehlan, jen texturu pojmenuje Tvalec.

- Pokud chcete můžete také vyzkoušet projekci „Flat“ pro plochu.

- Nyní můžeme ve scéně upravit světla a kameru a nechat vyrenderovat snímek. Ukázka na následujícím snímku.

# Materiály - Textury

<!-- Start of picture text -->
Vyrenderovaný snímek s texturou.<br><!-- End of picture text -->

# Materiály – Textury - Vlastnos�

- Na záložce „Influence“ Můžeme upravit vlastnos� textury:

- Color – textura ovlivňuje barvu objektu 1 = 100%

- Vlastní barva textury, projeví se až po zatržení „RGB to Intensity“

# Materiály – Textury - Vlastnos�

- „RGB to Intensity“- to co bylo původně černé dostane barvu objektu (zelenou) a to co bylo bílé dostane barvu textury (červenou).

- Nega�ve – prohodí barvu objektu za barvu textury.

# Úkoly a otázky:

1. Každému objektu a jeho textuře přiřaďte barvu. Upravujte vlastnos� textury na záložce „Influence“  (color, nega�ve, RGB to Intensity) a pozorujte jak se projeví změny na objektu po renderování.

   3. Upravujte vlastnos� textury na záložce „ Mapping“ (projec�on, offset a size) a pozorujte jak se projeví změny na objektu po renderování. Úpravy provádějte vždy pro jednu položku.

2. Pro vybraný objekt nastavte textuře na záložce „Image Mapping“ položku „Repeat“ pro osu X i Y na jiná čísla. Jak se projeví ve výsledku?

# Řešení

1. Řešení najdete v souboru 11-reseni_1.blend . 2. Řešení najdete v souboru 11-reseni_2.blend . 3. Řešení najdete v souboru 11-reseni_3.blend .

### **Použité zdroje:**

   - STICHTING BLENDER FOUNDATION. _Blender_ [online]. 2014, 19. března [cit. 2014-03-31]. Dostupné z: h�p://www.blender.org/

   - Veškerý textový a další obrazový materiál je vytvořen a zpracován autorem textu, není-li uvedeno jinak.

- **Licence:**

   - Blender je Free & Open Source So�ware.

   - Vlastníkem licence pro používání Microso� Office 2013 je SPŠei Ostrava, Kratochvílova 7.
