---
title: "Kruhová úseč"
order: 10
source: "matematika/TY01_0120 Kruhová úseč.pdf"
hasExercises: true
---

> Pozn. k obsahu: Vzorec v PDF byl vysázený jako obrázek (unicode zlomky), text a výsledky úkolů se ale většinou dochovaly celé — vzorec je zde přepsaný do LaTeXu, výsledky do spoilerů, čísla stránek odstraněna. U úkolů 2 a 3 dochované výsledky neseděly s dosazením zadaných hodnot do vzorce (u 3 vycházel násobně větší obsah, než jaký může mít celý kruh) — přepočítáno správně ze zadání; úkoly 1 a 4 po přepočtu se shodovaly, takže vzorec je jistě uveden správně.

**Kruhová úseč** je oblast, která vznikne, když kruh protne přímka. Této přímce se říká **sečna**. Úsečka spojující dva body ležící na kružnici (např. $A$ a $B$) se nazývá **tětiva**.

Obsah kruhové úseče se vypočítá jako **rozdíl** obsahu kruhové výseče o daném středovém úhlu $\alpha$ a obsahu trojúhelníku $ABS$, který vznikne ze středu kruhu $S$ a krajních bodů tětivy $AB$.

**Pozn.:** trojúhelník $ABS$ je vždy rovnoramenný — délka jeho ramen ($SA$ a $SB$) se rovná poloměru kruhu.

## Vzorec

$$S_{\text{úseč}} = S_{\text{výseč}} - S_{\triangle} = \frac{\pi r^2}{360°}\cdot\alpha - \frac{a\cdot v_a}{2}$$

kde $S_{\text{výseč}}$ je obsah kruhové výseče (viz [Délka kruhového oblouku a kruhová výseč](/mat/planimetrie/09-delka-kruhoveho-oblouku-a-kruhova-vysec/)) a $S_\triangle$ je obsah trojúhelníku $ABS$ — ten lze počítat libovolným ze způsobů z kapitoly [Trojúhelník — obecný](/mat/planimetrie/04-trojuhelnik-obecny/) (nejpřirozeněji vzorcem $S=\frac12 r^2\sin\alpha$, protože strany $SA=SB=r$ svírají přesně úhel $\alpha$).

## Úkoly

**1.** Vypočtěte obsah kruhové úseče, je-li její průměr 120 cm a středový úhel $\alpha=100°$.

Výsledek: ||r=60cm; S_výseč=(πr²/360)·100 ≈ 3141,6 cm²; S_trojúhelníku=½r²sin100° ≈ 1773,2 cm²; S_úseč ≈ 1368,35 cm²||

**2.** Vypočtěte obsah kruhové úseče, je-li poloměr $r=4\text{ cm}$ a středový úhel $\alpha=\dfrac{\pi}{4}$.

Výsledek: ||S_výseč = ½r²α = ½·16·(π/4) ≈ 6,28 cm²; S_trojúhelníku = ½r²sin(π/4) ≈ 5,66 cm²; S_úseč = S_výseč − S_trojúhelníku ≈ 0,63 cm²||

**3.** Vypočtěte obsah kruhové úseče, je-li průměr 16 cm a středový úhel $\alpha=\pi$.

Výsledek: ||r=8cm; při α=π (180°) je "trojúhelník" degenerovaný (tětiva prochází středem = průměr), úseč = přesně polovina kruhu: S_úseč = ½πr² ≈ 100,53 cm²||

**4.** Vzdálenost tětivy od středu kružnice je 4 cm, příslušný středový úhel má velikost $\alpha=\dfrac{\pi}{3}$. Vypočtěte obsah kruhové úseče.

Výsledek: ||vzdálenost tětivy od středu v = r·cos(α/2), tedy r = v/cos(α/2) = 4/cos30° ≈ 4,62 cm; S_úseč = ½r²(α−sinα) = ½·4,62²·(π/3 − sin60°) ≈ 1,93 cm²||

**5.** Trojúhelníku ABC o stranách $a=15\text{ cm}, b=174\text{ mm}, c=2{,}16\text{ dm}$ je opsaná kružnice. Vypočtěte obsah kruhové úseče nad stranou $a$ (v cm²).

Výsledek: ||S_úseč ≈ 30,93 cm²||

**6.** Vypočtěte obsah „lístků" vycházejících ze středu čtverce o straně $a=0{,}08\text{ m}$, tvořených jednou půlkružnicí a dvěma čtvrtkružnicemi o poloměru $r=40\text{ mm}$ ((úloha se opírala o obrázek, který se nedochoval)).

Výsledek: ||S ≈ 18,26 cm²||
