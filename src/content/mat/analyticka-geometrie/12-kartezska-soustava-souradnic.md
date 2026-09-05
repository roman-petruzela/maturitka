---
title: "Kartézská soustava souřadnic"
order: 12
source: "matematika/TY01_0132_Kartezska_soustava_souradnic.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace obsahovala jen nadpisy a odrážky bez textu (animované, postupně se odkrývající body) a obrázky bodů v souřadnicové soustavě, které se nedochovaly — z původního souboru přežila jen kostra témat. Teorie a příklady jsou proto doplněny odpovídající standardnímu rozsahu tématu; graf s body pro cvičení je nově vytvořený.

**Souřadnice** jsou způsob, jak přesně určit polohu — používáme je v běžném životě neustále, aniž si to uvědomujeme: adresa bydliště, poloha na mapě (zeměpisná šířka a délka), pozice na šachovnici (např. e4).

## René Descartes (1596–1650)

Francouzský filozof a matematik, zakladatel **analytické geometrie** — oboru, který propojil algebru s geometrií. Zavedl soustavu souřadnic, které se dodnes říká **kartézská** (z latinského "Cartesius").

Analytická geometrie řeší geometrické úlohy **početně**, ne graficky — např. úloha najít průsečík dvou přímek se neřeší rýsováním, ale jako řešení soustavy dvou lineárních rovnic. Tento přístup umožňuje zkoumat i mnohem složitější křivky než jen přímky a kružnice, řešení jsou libovolně přesná (na rozdíl od odečítání z obrázku) a metodu lze zobecnit i do prostorů o více než dvou dimenzích.

## Kartézská soustava souřadnic

- Souřadné osy jsou vzájemně **kolmé**.
- Protínají se v jednom bodě — **počátku** soustavy souřadnic, značeném $O = [0;0]$.
- Jednotka se obvykle volí na všech osách stejně velká.
- Souřadnice polohy bodu dostaneme jako jeho kolmé průměty na jednotlivé osy.

## Soustava souřadnic v rovině

V rovině má soustava dvě osy: vodorovnou **osu $x$** a svislou **osu $y$**. Bod $A$ zapisujeme jako uspořádanou dvojici $A=[x_A;y_A]$, kde $x_A$ je jeho kolmý průmět na osu $x$ a $y_A$ kolmý průmět na osu $y$.

```graph
{ "points": [{"x":3,"y":4,"label":"A"},{"x":-2,"y":3,"label":"B"},{"x":-4,"y":-1,"label":"C"},{"x":0,"y":-3,"label":"D"},{"x":4,"y":-2,"label":"E"},{"x":-1,"y":2,"label":"F"}], "domain": [-5,5], "yDomain": [-5,5], "title": "Zapište souřadnice bodů A–F" }
```

Výsledek: ||A=[3;4], B=[-2;3], C=[-4;-1], D=[0;-3], E=[4;-2], F=[-1;2]||

Rovina rozdělená oběma osami na čtyři **kvadranty** — v prvním (vpravo nahoře) jsou obě souřadnice kladné, ve druhém (vlevo nahoře) je $x<0$ a $y>0$, ve třetím (vlevo dole) jsou obě záporné, ve čtvrtém (vpravo dole) je $x>0$ a $y<0$.

## Soustava souřadnic v prostoru

V prostoru přidáváme třetí, svislou **osu $z$**, kolmou na obě předchozí. Bod v prostoru pak zapisujeme jako trojici $A=[x_A;y_A;z_A]$ — jeho polohu dostaneme jako kolmé průměty na všechny tři osy. Tři osy dohromady rozdělují prostor na osm **oktantů** (obdoba kvadrantů v rovině).

## Úkoly

**1.** Určete, ve kterém kvadrantu leží bod se souřadnicemi $[-3;5]$, $[2;-7]$, $[-1;-1]$ a $[6;4]$.

Výsledek: ||[-3;5]: druhý kvadrant (x<0, y>0); [2;-7]: čtvrtý kvadrant (x>0, y<0); [-1;-1]: třetí kvadrant (obě záporné); [6;4]: první kvadrant (obě kladné)||

**2.** Bod $A=[2;-3]$ ležel v rovině $xy$. Jaké budou jeho souřadnice, pokud ho chápeme jako bod v prostoru ležící přímo v rovině $xy$ (tedy s nulovou výškou nad/pod ní)?

Výsledek: ||A=[2;-3;0] — třetí souřadnice (z) je nulová právě tehdy, když bod leží v rovině xy||

## Zdroje

KOČANDRLE, Milan, BOČEK, Leo. *Matematika pro gymnázia. Analytická geometrie.* Praha: Prometheus, 2005.
