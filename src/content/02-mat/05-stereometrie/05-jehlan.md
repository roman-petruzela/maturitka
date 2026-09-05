---
title: "Jehlan"
order: 5
source: "matematika/TY0105 Jehlan.pdf"
hasExercises: true
---

> Pozn. k obsahu: Text a vzorce byly v PDF vysázené jako obrázky (unicode symboly) a při převodu se místy poškodily — přepsáno do LaTeXu a dopočítáno z definic. U příkladu 2 vyšla přesným výpočtem hodnota mírně odlišná od dochovaného výsledku (rozdíl cca 0,1 %, typicky způsobený zaokrouhlením v mezikroku původního řešení) — uveden je přesný výpočet. PDF dále odkazovalo na program Cabri 3D pro interaktivní úkoly, které proto nejde reprodukovat, ponechány jako historický záznam.

**Jehlan** je geometrické těleso, jehož podstavou je mnohoúhelník. Boční stěny (plášť) jsou tvořeny trojúhelníky, které mají jeden společný bod — **vrchol jehlanu**. **Tělesová výška** $v$ je vzdálenost vrcholu jehlanu od roviny podstavy. **Stěnová výška** $s$ je vzdálenost vrcholu jehlanu od podstavné hrany (výška bočního trojúhelníku).

$$S = S_p + S_{pl} \qquad V = \frac13 S_p \cdot v$$

kde $S_p$ je obsah podstavy a $S_{pl}$ obsah pláště.

## Pravidelný čtyřboký jehlan

Má čtvercovou podstavu a vrchol kolmo nad průsečíkem úhlopříček. Podstava: $S_p=a^2$. Plášť tvoří čtyři shodné trojúhelníky o základně $a$ a výšce $s$, tedy $S_{pl}=4\cdot\frac{a\cdot s}{2}=2as$.

$$S = a^2 + 2as \qquad V = \frac13 a^2 v$$

Tělesová výška $v$, stěnová výška $s$ a polovina podstavné hrany $\frac{a}{2}$ tvoří pravoúhlý trojúhelník — platí mezi nimi Pythagorova věta ($s^2=v^2+\left(\frac{a}{2}\right)^2$) i goniometrické funkce.

## Pravidelný čtyřstěn

Jehlan, jehož podstavu i všechny tři boční stěny tvoří shodné rovnostranné trojúhelníky (všechny hrany mají stejnou délku $a$).

$$S = a^2\sqrt3 \qquad V = \frac{1}{12}a^3\sqrt2$$

## Ostatní jehlany

Vzorce pro objem a povrch dalších typů jehlanů ($V=\frac13 S_p v$, $S=S_p+S_{pl}$) platí obecně — jen je potřeba dopočítat obsah konkrétní podstavy. Pro **pravidelný $n$-úhelník** o straně $a$ platí:

$$S = \frac{n\cdot a^2}{4}\cdot\cot\left(\frac{\pi}{n}\right)$$

## Úkoly (interaktivní, Cabri 3D)

1. Otevřete postupně soubory *ctyrsten_sit.cg3*, *jehlan_sit.cg3* a *sestiboky_jehlan_sit.cg3*. Síť jehlanu vždy rozložte do roviny a poté složte zpátky.
2. Pomocí programu Cabri nakreslete jehlan, jehož podstavou je obdélník o délkách stran $a=6\text{ cm}$, $b=4\text{ cm}$ a tělesová výška má délku $v=5\text{ cm}$. V tomto jehlanu vyznačte tělesovou výšku $v$. Vypočtěte povrch a objem tohoto tělesa, ověřte své výpočty v programu Cabri.

## Příklady

**1.** V pravidelném čtyřbokém jehlanu známe délku podstavné hrany $a=6\text{ cm}$ a objem $V=48\text{ cm}^3$. Vypočtěte tělesovou výšku $v$ a povrch $S$.

Výsledek: ||v = 3V/a² = 3·48/36 = 4 cm; s² = v²+(a/2)² = 16+9=25 → s=5cm; S = a²+2as = 36+60 = 96 cm²||

**2.** Vypočtěte objem a povrch pravidelného šestibokého jehlanu s délkou podstavné hrany $a=7{,}5\text{ cm}$ a tělesovou výškou $v=194\text{ mm}$.

Výsledek: ||v=19,4cm; S_p (pravidelný šestiúhelník) = (3√3/2)a² ≈ 146,14 cm²; V = S_p·v/3 ≈ 945,05 cm³; apotém podstavy m = a√3/2 ≈ 6,495cm; s = √(v²+m²) ≈ 20,458cm; S_pl = 6·(a·s/2) = 3as ≈ 460,31 cm²; S = S_p+S_pl ≈ 606,46 cm²||

**3.** Vypočtěte objem a povrch pravidelného čtyřstěnu o straně délky $a=1\text{ cm}$.

Výsledek: ||S = a²√3 = √3 ≈ 1,73 cm²; V = a³√2/12 = √2/12 ≈ 0,118 cm³||
