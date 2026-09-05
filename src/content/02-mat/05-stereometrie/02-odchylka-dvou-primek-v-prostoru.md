---
title: "Odchylka dvou přímek v prostoru"
order: 2
source: "matematika/TY0102 Odchylka dvou přímek v prostoru.pdf"
hasExercises: true
---

> Pozn. k obsahu: PDF odkazovalo na soubory pro program Cabri 3D, které nejsou součástí archivu. U jedné položky v posledním cvičení (b) se přesné značení bodů při převodu poškodilo natolik, že nejde spolehlivě určit, o které dvě přímky šlo — ponecháno bez výsledku.

Přímky v prostoru mohou mít čtyři vzájemné polohy: **totožné**, **rovnoběžné**, **různoběžné** a **mimoběžné** (viz [Vzájemná poloha přímek a rovin v prostoru](/mat/stereometrie/01-vzajemna-poloha-primek-a-rovin-v-prostoru/)).

1. Odchylka přímek **totožných** nebo **rovnoběžných** je vždy $0°$.
2. Odchylka přímek **různoběžných** je úhel $\varphi \in \langle0°;90°\rangle$, který svírají.
3. Odchylku přímek **mimoběžných** spočteme tak, že:
   - a) jednu z přímek rovnoběžně přesuneme (posuneme), aby ležela ve stejné rovině jako druhá — vznikne tak dvojice různoběžek se stejnou odchylkou, jako měly původní mimoběžky,
   - b) u této dvojice různoběžek pak spočítáme odchylku běžným způsobem.

## Ukázkové příklady

**Příklad 1:** Ve standardní krychli ABCDEFGH určete odchylku přímek $AH$ a $DG$.

**Řešení:** Přímky jsou rovnoběžné (obě spojují odpovídající vrcholy dolní a horní podstavy stejným směrem), jejich odchylka je tedy $0°$.

**Příklad 2:** Ve standardní krychli ABCDEFGH určete odchylku přímek $AG$ a $AC$.

**Řešení:** Přímky jsou různoběžné (protínají se v bodě A), musíme zjistit velikost úhlu, který svírají. Pomůžeme si doplněním na pravoúhlý trojúhelník $ACG$ (pravý úhel je u vrcholu $C$, protože $CG$ je svislá hrana kolmá na podstavu, ve které leží $AC$) a k dopočítání úhlu použijeme goniometrické funkce.

V trojúhelníku $ACG$ známe (pro hranu krychle $a$): $|AC|=a\sqrt2$ (tělesová úhlopříčka podstavy), $|CG|=a$ (hrana), $|AG|=a\sqrt3$ (tělesová úhlopříčka krychle). Odchylku $\angle CAG$ dopočítáme např. přes tangens:

$$\mathrm{tg}(\angle CAG) = \frac{|CG|}{|AC|} = \frac{a}{a\sqrt2} = \frac{1}{\sqrt2} \implies \angle CAG \approx 35°16'$$

**Příklad 3:** Ve standardní krychli ABCDEFGH určete odchylku přímek $AC$ a $FG$.

**Řešení:** Přímky jsou mimoběžné (leží v různých podstavách a nejsou rovnoběžné), musíme je tedy převést do stejné roviny. Přímka $FG$ má stejný směr jako hrana $BC$ (obě spojují odpovídající vrcholy stejným směrem), a navíc $BC$ prochází bodem $C$ — společným s $AC$. Odchylka $AC$ a $FG$ je proto stejná jako odchylka $AC$ a $BC$, tedy úhel $\angle ACB$.

Trojúhelník $ABC$ má pravý úhel u vrcholu $B$ (strany $AB\perp BC$, obě hrany krychle), $|AB|=|BC|=a$. Jde tedy o rovnoramenný pravoúhlý trojúhelník, takže:

$$\angle ACB = 45°$$

## Úkoly (interaktivní, Cabri 3D)

1. Ve standardní krychli ABCDEFGH určete odchylku přímek $AC$ a $CG$. V programu Cabri otevřete soubor *krychle*, zakreslete přímky a pomocí nástroje *velikost úhlu* ověřte řešení.

   Výsledek: ||AC a CG jsou různoběžné (protínají se v C), CG je kolmá na podstavu, ve které leží AC, tedy odchylka = 90°||

2. Ve standardní krychli ABCDEFGH určete odchylku přímek $AH$ a $BC$. V programu Cabri otevřete soubor *krychle*, zakreslete přímky a pomocí nástroje *velikost úhlu* ověřte řešení.

   Výsledek: ||AH je stěnová úhlopříčka, BC je hrana kolmá na AB — přímky jsou mimoběžné; po přesunutí do společné roviny vychází odchylka 45°||

## Příklady

Mějme kvádr ABCDEFGH, kde $|AB|=6\text{ cm}, |BC|=3\text{ cm}, |AE|=2\text{ cm}$. Vypočtěte:

**a)** odchylku přímek $AC$ a $AG$

Výsledek: ||AC (úhlopříčka podstavy) = √(6²+3²) = √45; AG (tělesová úhlopříčka) = √(6²+3²+2²) = √49 = 7; trojúhelník ACG má pravý úhel u vrcholu C (CG je svislá hrana kolmá na podstavu, v níž leží AC), tedy tg(∠CAG) = CG/AC = 2/√45 → ∠CAG ≈ 16°36'||

**b)** odchylku dvou přímek (přesné zadání bodů se při převodu poškodilo natolik, že je nelze spolehlivě rekonstruovat)

**c)** odchylku přímek $BC$ a $EH$

Výsledek: ||BC (dir. rovnoběžný s AD/EH) a EH jsou rovnoběžné (obě odpovídají směru hrany BC/AD v různých podstavách) → odchylka 0°||

**d)** odchylku přímek $AD$ a $BF$

Výsledek: ||AD leží v podstavě, BF je svislá hrana kolmá na podstavu → odchylka 90°||
