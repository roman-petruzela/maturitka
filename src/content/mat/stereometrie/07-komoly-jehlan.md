---
title: "Komolý jehlan"
order: 7
source: "matematika/TY0107 Komolý jehlan.pdf"
hasExercises: true
---

> Pozn. k obsahu: Vzorce v PDF byly vysázené jako obrázky (unicode symboly), přepsané zde do LaTeXu; výsledky úkolů (ověřeny přepočtem) do spoilerů. U příkladu 2 dochovaný výsledek odpovídal jen obsahu pláště (bez podstavy) — zadání zřejmě popisovalo nádobu bez pevného dna (např. násypku), počítáno tak. Nadpis příkladu 3 v PDF chybně uváděl "jehlan" místo "komolý jehlan" (zadání má dvě různé podstavné hrany) — opraveno.

**Komolý jehlan** je část jehlanu ležící mezi dvěma rovnoběžnými rovinami (podstavami) procházejícími tímto jehlanem — zjednodušeně jehlan s uříznutým „vrškem". Skládá se ze dvou (nestejně velkých) podstav a pláště tvořeného $n$ lichoběžníky.

Vzdálenost dvou rovnoběžných podstav nazýváme **tělesová výška** ($v$). Vzdálenost hrany dolní podstavy od hrany horní podstavy ležící ve stejné stěně nazýváme **stěnová výška** ($s$) — je to výška bočního lichoběžníku, nezaměňovat s tělesovou výškou!

$$V = \frac{v}{3}\left(S_{P1} + S_{P2} + \sqrt{S_{P1}\cdot S_{P2}}\right)$$

kde $S_{P1}$, $S_{P2}$ jsou obsahy podstav.

$$S = S_{P1} + S_{P2} + S_{pl}$$

Plášť tvoří lichoběžníky (obsah lichoběžníku se základnami $a$, $c$ a výškou $v_{lich}$ je $S=\frac{(a+c)}{2}\cdot v_{lich}$) — u pravidelného čtyřbokého komolého jehlanu s hranami podstav $a_1$, $a_2$ a stěnovou výškou $s$:

$$S_{pl} = 4\cdot\frac{a_1+a_2}{2}\cdot s = 2(a_1+a_2)s$$

## Úkoly (interaktivní, Cabri 3D)

1. Otevřete soubor *komoly_jehlan_sit.cg3*, síť tělesa rozložte do roviny a poté složte zpátky.
2. Pomocí programu Cabri nakreslete pravidelný čtyřboký komolý jehlan o délce strany dolní podstavy $a_1=8\text{ cm}$, délce strany horní podstavy $a_2=2\text{ cm}$ a výšce $v=4\text{ cm}$. Vyznačte tělesovou výšku $v$ a stěnovou výšku $s$. Vypočtěte délku stěnové výšky $s$, objem $V$ a povrch $S$. Své výsledky ověřte pomocí programu Cabri.

## Příklady

**1.** Vypočtěte povrch podstavce ve tvaru pravidelného čtyřbokého komolého jehlanu, jehož tělesová výška je $1{,}2\text{ dm}$ a podstavy mají délky hran $2\text{ dm}$ a $1\text{ dm}$.

Výsledek: ||s²=v²+((a₁-a₂)/2)²=1,44+0,25=1,69 → s=1,3dm; S_p1=4, S_p2=1; S_pl=2(a₁+a₂)s=2·3·1,3=7,8dm²; S=4+1+7,8=12,8 dm²||

**2.** Nahoře otevřená nádoba (bez dna) má tvar pravidelného čtyřbokého komolého jehlanu. Délka hrany horní podstavy je $22\text{ cm}$, délka hrany dolní podstavy je $10\text{ cm}$ a tělesová výška nádoby je $8\text{ cm}$. Vypočtěte hmotnost nádoby, víte-li, že $1\text{ m}^2$ materiálu, ze kterého je vyrobena, má hmotnost $8\text{ kg}$.

Výsledek: ||s²=v²+((22-10)/2)²=64+36=100 → s=10cm; S_pl=2(a₁+a₂)s=2·32·10=640cm²=0,064m²; m=0,064·8=0,512 kg||

**3.** Vypočtěte povrch a objem pravidelného čtyřbokého komolého jehlanu, je-li hrana dolní podstavy $18\text{ cm}$ a hrana horní podstavy $15\text{ cm}$. Stěnová výška je $9\text{ cm}$.

Výsledek: ||S_p1=324, S_p2=225; S_pl=2(18+15)·9=594cm²; S=324+225+594=1143 cm²; tělesová výška z Pythagorovy věty: v²=s²-((18-15)/2)²=81-2,25=78,75 → v≈8,87cm; V=(v/3)(S_p1+S_p2+√(S_p1·S_p2))=(8,87/3)(324+225+270)≈2421,51 cm³||
