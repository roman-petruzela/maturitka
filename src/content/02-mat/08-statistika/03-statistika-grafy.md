---
title: "Statistika – grafy"
order: 3
source: "matematika/TY01_0220_Statistika_-_grafy.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace (PPTX) obsahovala krátké heslovité body a vložené obrázky grafů (histogramy, výsečové diagramy) — texty přepsány do souvislé podoby, obrázky grafů nahrazeny datovými tabulkami, ze kterých vycházely (čísla se dochovala jako text u obrázků). Odkazované externí soubory (*tabulky.xlsx*, PDF s dopravními nehodami, webové odkazy na ukázky grafů) nejsou součástí archivu — ponechány jako historický záznam bez funkčních odkazů.

*Při interpretaci statistických údajů buďte opatrní. Každý pátý člověk na světě je sice Číňan, ale kolik je Číňanů mezi vašimi spolužáky?*

## Zpracování statistického šetření

Navazujeme na tabulku rozdělení četností z minulé hodiny (měsíce narození, viz [Statistika – šetření](/mat/statistika/02-statistika-setreni/)). Otázka zní: jak vyjádřit údaje z tabulky přehledně, srozumitelně a názorně? Odpovědí je **grafické zpracování** — různé typy grafů se hodí na různé typy dat, jak ukazují následující příklady.

## Intervaly u spojitých znaků

U spojitých znaků (např. tělesná výška) není vhodné postupovat po příliš malých krocích (např. po 1 cm) — hodnot by bylo příliš mnoho a graf by byl nepřehledný. Místo toho **sdružujeme hodnoty do intervalů** (např. po 5 cm) a při dalších výpočtech hodnoty zaokrouhlujeme na střed intervalu.

Tabulka s intervaly (výška v cm, četnost žáků):

| výška | 153–157 | 158–162 | 163–167 | 168–172 | 173–177 | 178–182 | 183–187 | 188–192 |
|---|---|---|---|---|---|---|---|---|
| četnost | 6 | 9 | 20 | 36 | 82 | 35 | 14 | 4 |

Po zaokrouhlení na středy intervalů:

| výška (cm) | 155 | 160 | 165 | 170 | 175 | 180 | 185 | 190 |
|---|---|---|---|---|---|---|---|---|
| četnost | 6 | 9 | 20 | 36 | 82 | 35 | 14 | 4 |

## Sloupcový diagram (histogram četnosti)

Sloupce mají stejnou šířku, výška sloupce odpovídá četnosti. Histogram umožňuje využití barev a obrázků a lze jím přehledně zpracovat i velké množství údajů — jako výše uvedená tabulka výšek žáků.

K zamyšlení: Jak by se řešil případ intervalů s různou šířkou (histogram by pak sloupce stejné výšky zavádějící zkresloval — je potřeba škálovat výšku sloupce podle *hustoty* četnosti, ne podle četnosti samotné)?

## Výsečový (kruhový) diagram

Nazývá se také kruhový diagram nebo koláčový graf. Zobrazuje rozdělení četností **kvalitativního** znaku a hodí se pro menší počet hodnot sledovaného znaku — různým hodnotám znaku odpovídají kruhové výseče, jejichž plošné obsahy jsou přímo úměrné četnostem.

**Příklad:** Soubor 320 žáků školy, znak: volitelný cizí jazyk.

| jazyk | španělština | němčina | ruština |
|---|---|---|---|
| četnost | 105 | 176 | 39 |

Protože jde o malý počet hodnot znaku a celek tvoří všichni žáci školy (100 %), je výsečový graf vhodnou volbou.

**Pozor na zkreslení:** stejná data lze vykreslit i zavádějícím způsobem — např. tak, aby menší výseč opticky působila větší (posunutím, 3D efektem nebo nevhodným pořadím barev). Při čtení i tvorbě grafů je vždy dobré ověřit, že velikost výseče skutečně odpovídá podílu, který má reprezentovat.

## Spojnicový diagram (polygon četnosti)

Vzniká spojením bodů odpovídajících četnosti hodnot sledovaného znaku. Hodí se zejména na sledování změn v čase — např. vývoj teploty, devizových kurzů, výsledků výroby apod. (typický příklad: graf měnového kurzu).

## Úkoly

V souboru *tabulky.xlsx* zpracujte podle pokynů jednotlivé úkoly. Na každém listu vytvořte jeden nebo i více vhodných grafů, které budou příklady vhodně ilustrovat.

## Zdroje

CALDA, Emil, DUPAČ, Václav. *Matematika pro gymnázia. Kombinatorika, pravděpodobnost, statistika.* Praha: Prometheus, 2006.

Statistický přehled nehodovosti, březen 2013. [cit. 2013-04-20]. Dostupné z: policie.cz

Devizové kurzy ČNB. [cit. 2013-04-20]. Dostupné z: cnb.cz
