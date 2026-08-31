---
title: "Blender – rendering"
order: 34
source: "grafika/VY_32_INOVACE_3224_17.pdf"
---
<!-- Start of picture text -->
Rendering<br>h�p://www.blender.org/<br><!-- End of picture text -->

# Rendering

Než se bude renderovat scéna je potřeba nastavit:

- Zvolení renderovacího enginu

- Parametry

   - kamery

# Rendering

<!-- Start of picture text -->
• Je vytvoření<br><!-- End of picture text -->

- Jednoho snímků – sekvence snímků – videa z 3D scény

- Pro ukázku vytvoření výsledného videa použijeme animaci pohybu po křivce z prezentace č. 16

# Zvolení renderovacího enginu

   - Zpravidla než začneme vytvářet nějakou scénu tak si zvolíme jeden z renderovacích enginů.

   - Na horní liště 3D view okna vybereme pomocí tlačítka buďto předvolený Blender Render či Cycles Render (případně jiný).

- Světa

- Scény

- Vrstev

- rendereru

# Parametry kamery

- Na kartě „Camera“ si zvolíme kameru, jejíž parametry chceme upravit.

- Na záložce objek�v zvolíme: – Typ promítání

   - Ohniskovou vzdálenost a jednotky

# Parametry kamery

- Na záložce „Camera“: – Zvolíme typ kamery – Nebo necháme nastavenou výchozí hodnotu

   - A nastavíme Velikost obrazového senzoru

# Parametry kamery

Na záložce „Depth Field“ (hloubka ostros�) můžeme vybrat:

<!-- Start of picture text -->
– Objekt, na který má kamera<br>zaostřit<br>– Nebo nastavit vzdálenost<br><!-- End of picture text -->

# Parametry světa

- Na kartě „World“ si vybereme svět (přednastavený je jeden)

- Na záložce „World“ můžeme zvolit mezi typem oblohy a nastavit její barvu

# Parametry světa

- Nepřímé osvětlení souvisí se záložkou „Gather“ – Lepší výsledky jsou s metodou „Raytrace“

- – Než s aproximovaným výpočtem

# Parametry kamery

<!-- Start of picture text -->
Na záložce „Display“ si<br>určujeme, co se zobrazí<br>u kamery ve scéně:<br>– Limity<br>– Mlha<br>– Velikost plošek<br>– Senzor<br>– Jméno<br>• Kompoziční uzly<br>• Velikost objektu kamery<br><!-- End of picture text -->

# Parametry světa

- Efekt „Ambient Occlusion“ přidává vliv okolního světla při renderování. Lépe vyniknou hrany objektů.

- Efekt „Environment Ligh�ng“ – přidává vliv osvětlení z nastavení „World“

# Parametry světa

- Pokud chceme zakomponovat mlhu do snímku zatrhneme volbu u záložky „Mist“. A upravíme příslušné parametry (minimální vzdálenost, hloubka, výška, atd).

# Parametry scény

<!-- Start of picture text -->
Na kartě „Scene“<br>vybereme:<br>• ak�vní kameru<br>• Případně obrázek<br>pozadí (musí být již<br>načtený)<br>• anebo Klip – video na<br>pozadí<br><!-- End of picture text -->

# Parametry scény

Pokud máme scénu obsahující fyziku (kouř, fluidní dynamika) je dobré mít nastavenou gravitaci (standardně je v opačném směru než je kladná část ozy Z)

# Parametry vrstev

- Na záložce „Passes“ (Průchody) povolujeme efekty, které mají být při renderování zahrnuty.

- Tyto parametry jsou nastavovány u jednotlivých objektů.

# Parametry scény

- Na záložce „Units“ si zvolíme metrické nebo anglické jednotky (pokud modelujeme s přesnými rozměry) anebo žádné

- Zobrazování jednotek úhlů ve stupních nebo radiánech.

# Parametry vrstev

- Na kartě „Layers“ můžeme vybrat renderované vrstvy (název skupiny)

- • Na záložce „Layer“ pak vrstvy scény, jež jsou viditelné

- • Vrstvy, které se budou renderovat

- • A základní vlastnos� objektů scény, které se mají renderovat

# Parametry rendereru

- Na kartě „Render“ zvolíme kde se má výsledný obrázek (video) zobrazit.

- Tlačítem „Render“ vykreslíme jeden snímek z nastavené pozice na „Time Line“

- „Anima�on“ vytvoří celou animaci ohraničenou prvním a posledním snímkem

- „Audio“ přidá audio stopu k animaci

# Parametry rendereru

<!-- Start of picture text -->
Na záložce „Dimensions“<br>volíme rozlišení a formát<br>videa<br>• Počáteční, koncový snímek<br>a krok mezi počítanými<br>snímky<br><!-- End of picture text -->

<!-- Start of picture text -->
• Frekvenci snímků za<br>sekundu<br>• Poměr stran<br><!-- End of picture text -->

# Parametry rendereru

<!-- Start of picture text -->
• Na záložce „Output“ nastavíme<br>adresář kam se bude výsledné<br>video nebo jednotlivé snímky<br>ukládat.<br>• Vybereme:<br>– Barevnou škálu<br>– Hloubku barev<br>– formát snímků nebo videa (Pro<br>jednotlivé snímky jsou vhodné<br>formáty: JPEG, PNG. Pro video<br>jsou vhodné formáty: OGG, H.264,<br>Avi JPEG.)<br>– Případně stupeň kvality/komprese<br><!-- End of picture text -->

# Úkoly a otázky:

5. Měňte nastavení kamery z perspek�ve na Orthografic  a Panoramic. Jak se projeví změna na výsledném snímku?

6. Vyzkoušejte zobrazení parametrů kamery na záložce Display.

7. Nastavte vhodné parametry kamery, rozlišení snímku, souborový formát videa (ogg) a další parametry s ohledem na výkon PC a vyrenderujte video o délce 4 sek (100 snímků).

# Parametry rendereru

<!-- Start of picture text -->
Pro lepší vyhlazení hran<br>objektů se zapíná „An�-<br>aliasing“<br><!-- End of picture text -->

- Zvolíme:

   - počet průchodů na jeden pixel (vyšší č.   -> delší čas, lepší výsledek)

   - – metodu výpočtu

# Úkoly a otázky:

1. Vyrenderujte jeden snímek animace ve formátu PNG a JPEG.

2. Změňte barevnou hloubku z 8 na 16 a vyrenderujte jeden snímek. Jak se změní kvalita snímku?

3. Změňte nastavení An�-aliasingu z 8 na 16 a vyrenderujte jeden snímek. Jak moc se prodlouží čas výpočtu pro jeden snímek.

4. Nastavte nejmenší a největší rozlišení snímku (záložka Dimensions) a pro poměr stran 4:3 tak 16:9. Renderujte snímky a zjistěte rozdíl v kvalitě a rychlos� výpočtu.

# Řešení

4. Tabulka porovnání časů výpočtu snímků podle rozlišení a poměru stran (viz. soubory: 4-*.png).

<!-- Start of picture text -->
4:3 16:9<br>720x576 00:0.15 00:0.17<br>1920x1080 x 00:01.87<br>1440x1080 00:01.21 x<br><!-- End of picture text -->

# Řešení

6. Řešení najdete v souboru 17-reseni_6.blend.

7. Řešení najdete v souboru 7-video.ogv. Renderováno ze souboru 17-reseni_7.blend.

- Všechny soubory řešení najdete v souboru: 17-reseni.zip.

## **Použité zdroje:**

- STICHTING BLENDER FOUNDATION. _Blender_ [online]. 2014, 19. března [cit. 2014-03-31]. Dostupné z: h�p://www.blender.org/

- Veškerý textový a další obrazový materiál je vytvořen a zpracován autorem textu, není-li uvedeno jinak.

## **Licence:**

- Blender je Free & Open Source So�ware.

- Vlastníkem licence pro používání Microso� Office 2013 je SPŠei Ostrava, Kratochvílova 7.
