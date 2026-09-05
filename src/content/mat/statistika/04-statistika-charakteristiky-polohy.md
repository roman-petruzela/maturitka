---
title: "Statistika – charakteristiky polohy"
order: 4
source: "matematika/TY01_0221_Statistika_-_charakteristiky_polohy.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace (PPTX) obsahovala krátké heslovité body, vzorce jako obrázky a částečně poškozené tabulky — přepsáno do souvislé podoby, vzorce do LaTeXu, čísla dopočítána a ověřena. Odkazovaný pracovní list *průměr příklady.docx* není součástí archivu.

*Starší bratr snědl svůj oběd a také oběd svého mladšího bratra. V průměru snědl každý jeden oběd* — ilustrace toho, jak snadno může jediné číslo (průměr) zavádět, pokud se použije bez rozmyslu.

**Charakteristiky polohy** hledají stručnou informaci o statistickém souboru — jediné číslo, které by celý soubor co nejlépe charakterizovalo. Hledáme jakýsi "střed" souboru — ale ukáže se, že středů lze najít víc a každý se hodí na něco jiného.

## Aritmetický průměr

$$\bar{x} = \frac{\sum_{i=1}^{n} x_i}{n}$$

Součet hodnot znaku zjištěných u všech jednotek souboru, dělený počtem jednotek souboru. U dat seskupených do tabulky četností ($x_i$ s četnostmi $n_i$):

$$\bar{x} = \frac{\sum x_i n_i}{\sum n_i}$$

**Příklad:** Soubor měření výšky (viz [Statistika – grafy](/mat/statistika/03-statistika-grafy/)):

| výška | 155 | 160 | 165 | 170 | 175 | 180 | 185 | 190 |
|---|---|---|---|---|---|---|---|---|
| četnost | 6 | 9 | 20 | 36 | 82 | 35 | 14 | 4 |

Výsledek: ||n=206; Σxᵢnᵢ = 155·6+160·9+165·20+170·36+175·82+180·35+185·14+190·4 = 35790; x̄ = 35790/206 ≈ 173,74 cm||

**Není to ale vždy nejlepší charakteristika souboru.** Nejčastější chybou je aplikace aritmetického průměru tam, kde je na místě jiná statistika — např. průměrný počet ulic v české obci je 13, ale jen 31 z 6250 obcí (méně než 0,5 %) má tento průměrný počet ulic skutečně blízko. Podobně: aritmetický průměr majetku občanů v americkém městě Redmond je velmi vysoké číslo, což ale neznamená, že *typický* obyvatel je bohatý — odráží to jen fakt, že ve městě bydlí i multimiliardář Bill Gates *(převzato z cs.wikipedia.org)*.

**Příklad:** Souborem je 20 členů družstva, znakem jejich roční příjem (v tisících Kč):

| roční příjem | 200 | 240 | 260 | 280 | 350 | 950 |
|---|---|---|---|---|---|---|
| četnost | 1 | 7 | 6 | 4 | 1 | 1 |

Jaká je průměrná hodnota ročního příjmu? Kolik zaměstnanců má nadprůměrnou mzdu a kolik na průměrnou mzdu nedosáhne?

Výsledek: ||n=20; x̄ = (200·1+240·7+260·6+280·4+350·1+950·1)/20 = 5860/20 = 293 tis. Kč; nadprůměrných (>293): 350 a 950, tedy 2 zaměstnanci; podprůměrných (<293): 200,240(×7),260(×6),280(×4) = 1+7+6+4 = 18 zaměstnanců — 90 % souboru má tedy podprůměrný příjem, průměr zde silně zkresluje jediná extrémní hodnota (950)||

## Medián

**Medián** je prostřední hodnota seřazeného souboru. Je-li počet jednotek souboru lichý, je mediánem přímo prostřední hodnota; je-li sudý, je mediánem aritmetický průměr dvou prostředních hodnot.

Pro soubor ročních příjmů výše (20 hodnot, sudý počet) jsou desátá i jedenáctá hodnota v seřazené posloupnosti rovny 260 (obě padnou do bloku šesti hodnot 260):

$$\mathrm{Med}(x) = \frac{260+260}{2} = 260 \text{ tis. Kč}$$

Na rozdíl od aritmetického průměru (293 tis. Kč) není medián ovlivněn extrémní hodnotou 950 — lépe tak vystihuje "typického" člena souboru.

## Modus

**Modus** je hodnota znaku s největší četností. Pro soubor ročních příjmů výše se sedmkrát vyskytuje hodnota 240 tis. Kč:

$$\mathrm{Mod}(x) = 240 \text{ tis. Kč}$$

## Vážený průměr

Používá se tam, kde jsou hodnoty znaku poměrná čísla, např. výnosy plodin v t/ha, hustota obyvatel na km², nebo průměrné známky tříd. Vzorec je stejný jako u aritmetického průměru z tabulky četností — jednotlivé hodnoty se váží počtem jednotek, které reprezentují:

$$\bar{x}_w = \frac{\sum x_i w_i}{\sum w_i}$$

**Příklad:** Ve škole jsou čtyři třídy čtvrtého ročníku, označené A, B, C, D. Průměrné známky jednotlivých tříd z matematiky jsou uvedeny v tabulce. Určete průměrnou známku z matematiky ve všech čtvrtých ročnících dohromady.

| třída | A | B | C | D |
|---|---|---|---|---|
| průměrná známka z M | 2,21 | 1,82 | 2,33 | 2,11 |
| počet žáků | 28 | 24 | 32 | 30 |

Výsledek: ||Σ(známka·počet) = 2,21·28+1,82·24+2,33·32+2,11·30 = 61,88+43,68+74,56+63,3 = 243,42; Σpočet = 28+24+32+30 = 114; x̄_w = 243,42/114 ≈ 2,14||

## Geometrický průměr

Používá se pro **průměrné tempo růstu** za jedno období, kdy máme posloupnost hodnot $x_0, x_1, \dots, x_n$ v obdobích $0,1,\dots,n$ a chceme průměr podílů hodnot za dvě po sobě jdoucí období. Geometrický průměr $n$ čísel je definován jako jejich $n$-tá odmocnina součinu (zavádí se jen pro kladná čísla):

$$G = \sqrt[n]{x_1\cdot x_2\cdots x_n}$$

**Příklad:** V tabulce je uveden meziměsíční růst cen určitého výrobku v průběhu roku (v % vzhledem k předchozímu období). Vypočítejte průměrný růst cen za dané období.

| měsíc | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ceny (%) | 101,5 | 103,2 | 102,6 | 105,1 | 106,2 | 102,8 | 104,6 | 108,3 | 110,9 | 104,1 | 106,8 | 107,5 |

Výsledek: ||G = ¹²√(1,015·1,032·1,026·1,051·1,062·1,028·1,046·1,083·1,109·1,041·1,068·1,075) ≈ 1,0527, tedy průměrný meziměsíční růst cen byl přibližně 5,27 %||

## Harmonický průměr

**Harmonický průměr** kladných hodnot $x_1,\dots,x_n$ je převrácená hodnota aritmetického průměru jejich převrácených hodnot:

$$H = \frac{n}{\sum_{i=1}^n \frac{1}{x_i}}$$

Používá se, když potřebujeme hodnotu zastupující ostatní z hlediska jejich převrácených hodnot — typicky při výpočtu **průměrné rychlosti na úsecích stejné délky** (ne stejného času!) — nebo když jsou hodnoty znaku nerovnoměrně rozloženy kolem aritmetického průměru či extrémně nízké/vysoké.

**Příklad:** Stezkou, která vede na vrchol hory, vystupuje turista rychlostí $2{,}5\text{ km/h}$, při sestupu jde stejnou cestou (stejná délka trasy) rychlostí $5\text{ km/h}$. Jaká je jeho průměrná rychlost?

Výsledek: ||stejná DÉLKA úseku (ne čas) → harmonický průměr: H = 2/(1/2,5+1/5) = 2/(0,4+0,2) = 2/0,6 ≈ 3,33 km/h (ne aritmetický průměr 3,75 km/h — turista stráví na pomalejším úseku více času, proto pomalejší rychlost váží víc)||

## Úlohy

Pracovní list *průměr příklady.docx* obsahuje další procvičovací příklady na jednotlivé typy průměrů.

## Zdroje

CALDA, Emil, DUPAČ, Václav. *Matematika pro gymnázia. Kombinatorika, pravděpodobnost, statistika.* Praha: Prometheus, 2006.

Wikipedie, otevřená encyklopedie. *Průměr.* [cit. 2013-04-20]. Dostupné z: cs.wikipedia.org/wiki/Průměr

Český statistický úřad. *Ceny, inflace.* [cit. 2013-05-05]. Dostupné z: czso.cz
