---
title: "HTML a CSS"
order: 1
source: "MATURITA HADR/IT/14. HTML a CSS.docx"
---
- Hypertextový značkovací jazyk v dnešní době nejoblíbenější jazyk pro vytváření jednoduchých stránek
- Značkovací jazyk rozumíme, že pomocí něho označkujeme části textu, hodnoty
- Jednotlivým značkám se říká tagy a jsou uzavřeny ve špičatých závorkách
- Tagy můžeme rozlišovat na:
	- Párové = znamená, že každý tag musí mít svůj začátek a konec – značen lomítkem za první špičatou závorkou
	- Nepárové = znamená, že tag obsahuje pouze počáteční tag a konečný se nezapisuje
- HTML dokument můžeme různými CSS soubory zajistit různé vzhledy, a naopak různým HTML souborům můžeme zajistit pomocí CSS stejný vzhled a jednotvárnost
- Každý HTML soubor má pevně danou strukturu, která musí být dodržena, musí obsahovat:
	- Začátek html souboru
	- Hlavičku \(head\)
	- Tělo \(body\)
- HTML – používá se pro formátová textu a objektů, které se zobrazují ve webových prohlížečích
- Statický jazyk – slouží pouze pro zobrazení
- Dynamické technologie – JavaScript – dotváří web různými animacemi a interakcemi pro zpříjemnění prohlížení webových stránek

Div class / id

- Tag div slouží k zpřehlednění webových stránek
- Divy nám usnadňují následně práci s CSS styly, jelikož pro nastavení vzhledu na jeden div, změní vzhled celého obsahu, který je vložen v divu
- V případě, že bychom chtěli uvnitř divu použít další div, využijeme div id, na který můžeme nastavit jiný styl i když je uvnitř divu jiného a změní se pouze vzhled divu id
- Párový tag což znamená, že musí být na konci ukončen tagem s lomítkem

Zobrazení

- Pro zobrazení HTML dokumentů nám slouží webové prohlížeče\. Mezi nejznámější patří např\. Google Chrome, Mozilla Firefox, Microsoft Internet Explorer a Opera\.

Základní HTML tagy

- <p> = základní tag pro úpravu textu, slouží pro vytvoření odstavce
- <br> = tag, který slouží pro nucené zalomení textového řetězce avšak bez mezery za odstavcem
- <b> = tag, který z normálního textu vytvoří text tučný
- <i> = tag, který z normálního textu vytvoří text s kurzívou
- <img> = tag sloužící k vložení obrázku
- <a> = tag, kterým vkládáme odkaz¨
- <ul> = odrážkový seznam, kde každá odrážka musí začínat tagem <li>
- <ol> = číslovaný seznam, kde každá odrážka musí začínat tagem <li>
- <bgsound> = spustí zvolenou hudbu při otevření webové stránky
- <tr> = tag pro tvorbu buňky = odděluje jednotlivé řádky <td> = tag pro každý sloupec tabulky
- <h1> = nadpis nejvyšší úrovně => po číslo 6 = nejnižší úroveň

__CSS__

- Slouží pro úpravu vzhledu souboru HTML a změně vizualizace stránek a jejich úpravy
- Css styly se píší do složených závorek a před každou závorkou definujeme na jakou oblast HTML dokumentu se budou kaskádové styl vztahovat
- Můžeme definovat pro každý tag zvlášť
- Je důležité propojit css soubor se souborem HTML pomocí tagu <LINKs> jinak by CSS styly nefungovali
- Každá syntaxe musí byt oddělena v rámci závorky střednikem
- Zápis CSS h1 \{ color: blue; font\-size: 12px;\}

Nejznámější syntaxe

- Fontsize \{\} = změní velikost písma
- Color \{\} = změní barvu
- Backgroung\-color \{\} = změní barvu pozadí celého dokumentu nebo určitého divu
- Background\-image\{\} = nastaví na pozadí obrázek místo barvy
- text\-align \{\} = zarovnání textu
- margin \{\} = velikost vnějšího okraje
- padding \{\} = velikost vnitřního okraje
- veškeré barvy jsou zadávány pomocí šestnáctkového značení nebo model RGB

<html>
<head>
  <meta http\-equiv="Content\-Type" content="text/html; charset=windows\-1250">
  <title>Jméno</title>
</head>
<body>
  samotný text stránky
</body>
</html>
