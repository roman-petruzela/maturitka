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

**Obecně:** skládá-li se výběr z $k$ kroků za sebou a první krok lze udělat $n_1$ způsoby, druhý (po kterémkoli prvním) $n_2$ způsoby, …, $k$-tý $n_k$ způsoby, je všech možností $n_1\cdot n_2\cdots n_k$. Poznávací znamení: v zadání je „**a**“ (zmrzlina **a** poleva).

### Kombinatorické pravidlo součtu

I toto pravidlo dokážeme používat na základě úvahy.

**Příklad:** Kolik různých dvojciferných čísel, v jejichž zápisu se každá číslice vyskytuje nejvýše jednou, můžeme vytvořit z číslic 0 až 9?

- Počet všech dvojciferných čísel (10 až 99): **90**
- Počet dvojciferných čísel se stejnými číslicemi (11, 22, 33, ..., 99): **9**
- Počet čísel, která vyhovují zadání (odečteme ta se stejnými číslicemi): $90 - 9 = \mathbf{81}$

**Obecně:** rozpadají-li se možnosti na skupiny, které se navzájem nepřekrývají (žádná možnost nepatří do dvou skupin), je všech možností tolik, kolik je součet počtů ve skupinách. Poznávací znamení: v zadání je „**nebo**“ (vybírám jablko **nebo** hrušku). Často je jednodušší spočítat **doplněk** — všechny možnosti minus ty nevyhovující — jako v příkladu výše.

## Který vzorec použít

U každé úlohy si položte tři otázky: **Záleží na pořadí?** **Mohou se prvky opakovat?** **Vybírám všechny prvky, nebo jen některé?**

| Na pořadí záleží? | Opakování? | Vybírám | Typ skupiny | Počet |
|---|---|---|---|---|
| ano | ne | $k$ z $n$ | [variace bez opakování](/mat/kombinatorika/02-variace-a-permutace-bez-opakovani/) | $V(k,n) = \dfrac{n!}{(n-k)!}$ |
| ano | ne | všech $n$ | [permutace](/mat/kombinatorika/02-variace-a-permutace-bez-opakovani/#permutace) | $P(n) = n!$ |
| ano | ano | $k$ z $n$ | [variace s opakováním](/mat/kombinatorika/05-variace-a-permutace-s-opakovanim/) | $V'(k,n) = n^k$ |
| ano | stejné prvky | všech $n$ | [permutace s opakováním](/mat/kombinatorika/05-variace-a-permutace-s-opakovanim/#permutace-s-opakováním) | $\dfrac{n!}{n_1!\,n_2!\cdots n_m!}$ |
| ne | ne | $k$ z $n$ | [kombinace bez opakování](/mat/kombinatorika/04-kombinace-bez-opakovani/) | $C(k,n) = \dbinom{n}{k} = \dfrac{n!}{k!\,(n-k)!}$ |
| ne | ano | $k$ z $n$ druhů | [kombinace s opakováním](/mat/kombinatorika/05-variace-a-permutace-s-opakovanim/#kombinace-s-opakováním) | $C'(k,n) = \dbinom{n+k-1}{k}$ |

Jak poznat, jestli na pořadí záleží: zkuste dva prvky ve skupině prohodit. Vznikne něco jiného (jiné číslo, jiné pořadí v závodě, jiná vlajka, jiný rozvrh)? Pak na pořadí **záleží**. Je to pořád totéž (stejná komise, stejný zápas, stejná šestice ve Sportce, stejná ruka v kartách)? Pak **nezáleží**.

| Na pořadí záleží — variace, permutace | Na pořadí nezáleží — kombinace |
|---|---|
| čísla sestavená z číslic, PIN, heslo | komise, výbor, družstvo vybrané ze třídy |
| rozdělení medailí, cen, funkcí (předseda, místopředseda) | zápasy „každý s každým“, podání rukou |
| vlajky z pruhů, rozvrh hodin, pořadí v řadě | losování čísel (Sportka), karty v ruce |
| rozesazení lidí na židle, přesmyčky slov | přímky, úsečky a trojúhelníky z daných bodů |

Pravidla pro počítání s faktoriály ($0! = 1$, $n! = n\cdot(n-1)!$ …) jsou v tématu [Faktoriál](/mat/kombinatorika/03-faktorial/#pravidla-pro-počítání-s-faktoriály), kombinační čísla, která se vyplatí znát nazpaměť ($\binom{n}{2} = \frac{n(n-1)}{2}$ …), ve [Vlastnostech kombinačních čísel](/mat/kombinatorika/06-vlastnosti-kombinacnich-cisel/#hodnoty-které-se-vyplatí-znát-nazpaměť).

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
