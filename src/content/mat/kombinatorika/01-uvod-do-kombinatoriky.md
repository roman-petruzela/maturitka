---
title: "Úvod do kombinatoriky"
order: 1
source: "matematika/TY01_0233_Uvod_do_kombinatoriky.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace používala animované odrážky, u kterých se text objevoval postupně po kliknutí — u tohoto tématu se ztratilo jen minimum (dvě prázdné závěrečné odrážky, jinak byl obsah přítomný přímo v textu). Doplněné jsou jen odpovědi ke třem závěrečným úlohám, které v podkladu neměly přiložené řešení.

> _„Proč jsou čísla nádherná? To je jako ptát se, proč je nádherná Beethovenova Devátá symfonie. Když nevíte proč, nemůže vám to nikdo vysvětlit. Já vím, že čísla jsou nádherná. A jestli nejsou, tak potom není nádherné už nic."_ — Paul Erdös, maďarský matematik

## Kombinatorika

Kombinatorika se zabývá vlastnostmi spočetných (konečných) množin — vytvářením skupin z daných prvků a určováním jejich počtu. Často přitom nemáme možnost výsledek jednoduše ověřit (přímým vypsáním všech možností), musíme se spolehnout na správný postup výpočtu.

**Kde se s kombinatorikou setkáme?** Náznaky kombinatoriky nacházíme už u starořeckých matematiků, počátky hlubšího studia spadají do 17.–18. století — zájem podnítily různé hazardní hry (např. vrhcáby, hra v kostky). Dnes je to rozsáhlá matematická disciplína s mnoha dosud nevyřešenými úlohami, uplatnění nachází v teorii pravděpodobnosti, teorii informace, statistice a dalších oborech.

**Slavní matematici spojení s kombinatorikou:** Blaise Pascal (1623–1662), Pierre de Fermat (1601–1665), Jacob Bernoulli (1655–1705), Gottfried Leibniz (1646–1716), Leonhard Euler (1707–1783).

**Typické kombinatorické otázky:** Utváříme skupiny z prvků nějaké konečné množiny — například sestavujeme rozvrh hodin z daných předmětů, rozhodujeme, které týmy budou v turnaji hrát proti sobě, nebo chceme rozdat několik druhů cen mezi účastníky závodu. Ptáme se: jaká možná seskupení mohou nastat při házení určitého počtu hracích kostek? Jaké jsou pravděpodobnosti výher?

## Základní kombinatorická pravidla

_„Má-li každé pravidlo výjimku, pak kombinatorická pravidla jsou výjimkou, protože žádnou výjimku nemají."_

### Kombinatorické pravidlo součinu

Toto pravidlo používáme v běžném životě zcela automaticky.

**Příklad:** U stánku nabízejí čtyři druhy zmrzliny a tři polevy. Kolik různých zmrzlin s polevou lze vytvořit, jestliže nechceme míchat více druhů ani více polev?

Ke každému ze 4 druhů zmrzliny můžeme přidat kteroukoli ze 3 polev — možnosti se násobí:

$$4 \text{ zmrzliny} \times 3 \text{ polevy} = 12 \text{ možností}$$

### Kombinatorické pravidlo součtu

I toto pravidlo dokážeme používat na základě úvahy.

**Příklad:** Kolik různých dvojciferných čísel, v jejichž zápisu se každá číslice vyskytuje nejvýše jednou, můžeme vytvořit z číslic 0 až 9?

- Počet všech dvojciferných čísel (10 až 99): **90**
- Počet dvojciferných čísel se stejnými číslicemi (11, 22, 33, ..., 99): **9**
- Počet čísel, která vyhovují zadání (odečteme ta se stejnými číslicemi): $90 - 9 = \mathbf{81}$

## Úlohy k procvičení

**1.** Určete počet všech trojciferných přirozených čísel, v nichž se každá číslice vyskytuje nejvýše jednou.

Výsledek: ||první číslice: 9 možností (1–9, nesmí být 0); druhá: 9 možností (0–9 kromě už použité); třetí: 8 možností → 9·9·8 = 648||

---

**2.** Určete, kolik dvojjazyčných slovníků je potřeba k tomu, aby byla zajištěna možnost přímého překladu z anglického, německého, ruského a francouzského jazyka do každého z nich.

Výsledek: ||záleží na směru překladu (slovník A→N ≠ slovník N→A), jde tedy o variaci: V(2,4) = 4·3 = 12 slovníků||

---

**3.** V košíku je 12 jablek a 10 hrušek. Petr si má z něho vybrat buď jablko, nebo hrušku tak, aby Věra, která si vybere po něm jedno jablko a jednu hrušku, měla co největší možnost výběru. Určete, co si má Petr vybrat.

Výsledek: ||pokud Petr vezme jablko, zbyde 11 jablek × 10 hrušek = 110 možností pro Věru; pokud vezme hrušku, zbyde 12 jablek × 9 hrušek = 108 možností. 110 > 108, Petr má tedy vzít jablko.||

## Zdroje

CALDA, Emil, DUPAČ, Václav. _Matematika pro gymnázia. Kombinatorika, pravděpodobnost, statistika._ Praha: Prometheus, 2006.
