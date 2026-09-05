---
title: "Statistika – korelace"
order: 6
source: "matematika/TY01_0223_Statistika_-_korelace.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace obsahovala vzorce vložené jako obrázky (nečitelné po převodu) a odkazovala na vložené grafy a externí soubory — vzorce jsou níže doplněny v LaTeXu podle standardní definice Pearsonova korelačního koeficientu, obrázky grafů (bez dochovaného textu) vynechány. U obou příkladů (výška syna/otce, známky/IQ) byla dochována jen tabulka vstupních dat bez výsledku — korelační koeficient jsem dopočítal a dvakrát nezávisle zkontroloval (přímým i zjednodušeným vzorcem). Odkazovaný soubor *úlohy korelace.xlsx* není součástí archivu.

**Korelace** (z lat.) znamená vzájemný vztah mezi dvěma procesy nebo veličinami. Pokud se jedna z nich mění, mění se korelativně i druhá (a naopak). Pokud se mezi dvěma procesy ukáže korelace, je pravděpodobné, že na sobě závisejí — **nelze z toho ale ještě usoudit, že by jeden z nich musel být příčinou a druhý následkem**. To samotná korelace nedovoluje rozhodnout.

> *"V řadě evropských regionů bylo zjištěno, že čím více čápů žije v určité krajině, tím vyšší je tam porodnost. Korelační koeficienty byly tak významné, že je velice nepravděpodobné, že zjištěná souvislost je náhodná. Jsme tedy ochotni přijmout hypotézu, že čápi přece jen nosí děti?"*

Otázka, zda je mezi dvěma veličinami nějaký vztah, se objevuje všude — čerpání lepšího paliva ovlivňuje spotřebu auta, počet prodavačů v prodejně ovlivňuje tržby, počet snědených dortů ovlivňuje objem pasu.

Korelace ale neříká, že jeden zkoumaný parametr musí nutně ovlivňovat druhý — oba mohou být ovlivněné něčím jiným (tzv. **skrytá proměnná**). Například prodej zmrzliny se vzájemně neovlivňuje s prodejem slunečníků — obojí je vyvolané teplým počasím — ale silná korelace by se mezi nimi přesto objevila.

## Vstupní data

Zkoumáme dvojici znaků $x$ a $y$ na souboru o rozsahu $n$ — výsledkem šetření jsou dvojice $(x_1,y_1),(x_2,y_2),\dots,(x_n,y_n)$. Hledáme míru statistické závislosti obou znaků; k tomu potřebujeme aritmetické průměry $\bar x$, $\bar y$ a směrodatné odchylky $s_x$, $s_y$ obou znaků (viz [Statistika – charakteristiky variability](/mat/statistika/05-statistika-charakteristiky-variability/)).

## Výpočet — koeficient korelace

$$r_{xy} = \frac{\frac1n\sum_{i=1}^n (x_i-\bar x)(y_i-\bar y)}{s_x s_y}$$

Nebo jednodušeji pro ruční výpočet (matematicky ekvivalentní vzorec):

$$r_{xy} = \frac{\frac1n\sum_{i=1}^n x_i y_i - \bar x\bar y}{s_x s_y}$$

## Interpretace hodnot

Koeficient korelace nabývá hodnot od $-1$ do $1$.

- **Hodnota blízká 1** — závislost je silná a **přímá** (např. výkon počítače a počet úloh, které vyřeší za hodinu — čím vyšší výkon, tím více úloh).
- **Hodnota blízká $-1$** — závislost je silná, ale **nepřímá** (např. výkon počítače a čas potřebný ke zpracování úlohy — čím vyšší výkon, tím kratší čas).
- **Hodnota blízká 0** — závislost mezi znaky prakticky neexistuje (např. výkon počítače a jeho barva).

## Korelace není kauzalita

Se statistikou je potřeba nakládat opatrně. Dokládá to i internetový vtip, který "odhalil nebezpečné zdravotní riziko" — zdánlivou souvislost mezi konzumací biopotravin a výskytem autismu (obojí v USA v čase rostlo souběžně). Graf vznikl náhodou, když si jeden uživatel serveru Imgur.com (jinak vědec v neurologické laboratoři) zkoušel práci se statistickým softwarem — šokující informace má jednu vadu: je úplně nesmyslná. Korelace zkrátka není totéž co kauzalita, zvlášť u dvou veličin, které v čase jen obě náhodou rostou.

## Příklady

**1.** 15 studentů v posledním ročníku střední školy uvedlo svou tělesnou výšku ($x$) a tělesnou výšku svého otce ($y$), v cm:

| $x$ (syn) | 172 | 168 | 183 | 182 | 174 | 166 | 173 | 170 | 180 | 171 | 165 | 171 | 179 | 189 | 177 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $y$ (otec) | 175 | 170 | 185 | 176 | 168 | 167 | 171 | 176 | 176 | 166 | 169 | 177 | 184 | 185 | 173 |

Vypočítejte aritmetické průměry, směrodatné odchylky a korelační koeficient $r_{xy}$.

Výsledek: ||x̄=174,67cm; ȳ=174,53cm; s_x≈6,60; s_y≈6,11; Σ(xᵢ-x̄)(yᵢ-ȳ)/n≈31,11; r_xy = 31,11/(6,60·6,11) ≈ 0,77 — silná přímá závislost mezi výškou syna a otce, což odpovídá očekávání (výška je z velké části dědičná)||

**2.** 25 žáků 7. třídy základní školy se podrobilo inteligenčnímu testu (IQ, $y$); výsledky byly porovnány s průměrnou známkou na vysvědčení ($x$, kde 1 = nejlepší). Žáci jsou seřazeni podle prospěchu:

| známka | 1,00 | 1,82 | 2,64 | 1,18 | 2,00 | 2,73 | 1,27 | 2,00 | 2,82 |
|---|---|---|---|---|---|---|---|---|---|
| IQ | 134 | 102 | 86 | 108 | 118 | 106 | 140 | 98 | 94 |

| známka | 1,36 | 2,18 | 2,91 | 1,45 | 2,18 | 3,09 | 1,45 | 2,36 | 3,18 |
|---|---|---|---|---|---|---|---|---|---|
| IQ | 116 | 122 | 86 | 120 | 96 | 100 | 98 | 100 | 90 |

| známka | 1,64 | 2,36 | 3,27 | 1,64 | 2,55 | 3,45 | 3,45 |
|---|---|---|---|---|---|---|---|
| IQ | 108 | 106 | 68 | 96 | 96 | 80 | 82 |

Vypočítejte koeficient korelace mezi průměrnou známkou a inteligenčním kvocientem žáků (v praxi počítáno tabulkovým kalkulátorem).

Výsledek: ||x̄≈2,239; ȳ=102; s_x≈0,736; s_y≈16,32; Σ(xᵢ-x̄)(yᵢ-ȳ)/n≈-9,21; r_xy = -9,21/(0,736·16,32) ≈ -0,77 — silná NEPŘÍMÁ závislost mezi číslem známky a IQ; protože nižší číslo známky znamená lepší prospěch, jde ve skutečnosti o silnou přímou souvislost mezi IQ a školním prospěchem||

## Úlohy

Další úlohy na korelaci (řešené s využitím tabulkového kalkulátoru) obsahoval soubor *úlohy korelace.xlsx*, který není součástí archivu.

## Zdroje

CALDA, Emil, DUPAČ, Václav. *Matematika pro gymnázia. Kombinatorika, pravděpodobnost, statistika.* Praha: Prometheus, 2006.

EXCELentní triky a návody. *Korelace v Excelu.* [cit. 2012-09-20]. Dostupné z: excelentnitriky.com

Technet.cz. *Autismus a biopotraviny.* [cit. 2013-05-11]. Dostupné z: technet.idnes.cz

Fxstreet.cz. *Korelace měn.* [cit. 2013-05-11]. Dostupné z: fxstreet.cz
