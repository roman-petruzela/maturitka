---
title: "CSS – box model, rozvržení a pozicování"
order: 6
tags: ["doplněno"]
---
Každý prvek stránky je pro prohlížeč obdélník – **krabice (box)**. Tahle kapitola popisuje, z čeho se krabice skládá, jak se krabice řadí za sebou a jak se dají umístit jinam.

## Box model

Krabice má zevnitř ven čtyři vrstvy:

1. **content** – vlastní obsah (text, obrázek), jeho rozměr udávají `width` a `height`
2. **padding** – vnitřní okraj mezi obsahem a rámečkem; má barvu pozadí prvku
3. **border** – rámeček
4. **margin** – vnější okraj, mezera k sousedním prvkům; je vždy průhledný

```css
.karta {
  width: 300px;
  padding: 1rem;            /* všechny čtyři strany */
  border: 2px solid navy;   /* šířka, styl, barva */
  margin: 1rem auto;        /* nahoře a dole 1rem, vlevo a vpravo auto = vycentrování */
}
```

**Zkrácený zápis okrajů** – hodnoty jdou ve směru hodinových ručiček od horní strany: `margin: 10px 20px 30px 40px;` = nahoře, vpravo, dole, vlevo. Dvě hodnoty `margin: 10px 20px;` = nahoře a dole, vlevo a vpravo. Jednotlivé strany: `margin-top`, `padding-left` atd.

**Rámeček**: `border-width`, `border-style` (`solid`, `dashed`, `dotted`, `double`, `none`), `border-color`, zaoblení `border-radius`. Lze nastavit i jen jednu stranu: `border-bottom: 3px dotted gold;`.

**Šířka krabice** – ve výchozím stavu (`box-sizing: content-box`) se k `width` ještě přičítá padding a rámeček: krabice s `width: 300px`, `padding: 16px` a rámečkem 2 px je ve skutečnosti široká 336 px. S `box-sizing: border-box` je `width` celková šířka včetně paddingu a rámečku – proto se v praxi nastavuje pro všechny prvky:

```css
*, *::before, *::after { box-sizing: border-box; }
```

**Slévání okrajů** – svislé `margin` dvou bloků pod sebou se nesčítají, uplatní se jen ten větší.

## Způsob zobrazení – `display`

| Hodnota | Chování | Příklady prvků |
| --- | --- | --- |
| `block` | začíná na novém řádku, zabírá celou šířku, respektuje `width` a `height` | `div`, `p`, `h1`–`h6`, `ul`, `section` |
| `inline` | zůstává v řádku textu, `width`, `height` a svislé `margin` nefungují | `span`, `a`, `strong`, `em` |
| `inline-block` | v řádku jako text, ale rozměry a okraje respektuje | tlačítka, ikony v menu |
| `none` | prvek se vůbec nezobrazí (nezabírá místo) | skryté menu |
| `flex`, `grid` | prvek rozvrhuje své potomky (viz níže) | rozvržení stránky |

`visibility: hidden` prvek skryje, ale místo po něm zůstane. `overflow` určuje, co s obsahem, který se do krabice nevejde: `visible` (přeteče), `hidden` (ořízne), `auto` (posuvník jen když je potřeba), `scroll`.

## Obtékání – `float`

`float: left` / `right` posune prvek ke kraji a text ho obtéká – typicky obrázek v článku. `clear: both` u následujícího prvku obtékání ukončí.

```css
.clanek img { float: left; margin: 0 1rem 1rem 0; }
.paticka { clear: both; }
```

Dřív se pomocí `float` skládalo celé rozvržení stránky do sloupců; dnes na to slouží flexbox a grid a `float` zůstává jen pro obtékání obrázků.

## Pozicování – `position`

| Hodnota | Kde prvek je | Uvolní místo v toku? |
| --- | --- | --- |
| `static` | výchozí – tam, kam patří v toku dokumentu | ne |
| `relative` | posunut o `top` / `left` … vůči své původní poloze | ne – původní místo zůstane |
| `absolute` | umístěn vůči nejbližšímu pozicovanému předkovi (jinak vůči stránce) | ano |
| `fixed` | umístěn vůči oknu prohlížeče, při posunu stránky se nehýbe (lišta, tlačítko „nahoru“) | ano |
| `sticky` | chová se normálně, dokud nedojede k okraji okna, pak se tam „přilepí“ (hlavička tabulky, menu) | ne |

Souřadnice se zadávají vlastnostmi `top`, `right`, `bottom`, `left`. Překrývající se prvky řadí **`z-index`** – vyšší číslo je navrchu (platí jen pro pozicované prvky).

```css
.odznak {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
.karta { position: relative; } /* odznak se umístí do rohu karty */
```

## Flexbox

Rozvržení v **jedné ose** – prvky do řádku nebo do sloupce. Nastavuje se na rodiči:

```css
.menu {
  display: flex;
  flex-direction: row;          /* nebo column */
  justify-content: space-between; /* rozložení v hlavní ose: flex-start, center, space-around… */
  align-items: center;          /* zarovnání v příčné ose */
  gap: 1rem;                    /* mezery mezi prvky */
  flex-wrap: wrap;              /* při nedostatku místa zalomit na další řádek */
}
.menu .hledani { flex: 1; }     /* tento prvek zabere zbylé místo */
```

Hodí se pro menu, řadu karet, vycentrování prvku (`justify-content: center; align-items: center;`).

## Grid

Rozvržení ve **dvou osách** – mřížka řádků a sloupců. Hodí se pro celé rozvržení stránky.

```css
.stranka {
  display: grid;
  grid-template-columns: 220px 1fr 220px;  /* levý panel, obsah, pravý panel */
  grid-template-rows: auto 1fr auto;       /* hlavička, obsah, patička */
  gap: 1.5rem;
}
.hlavicka { grid-column: 1 / -1; }         /* přes všechny sloupce */
```

Jednotka `fr` znamená podíl volného místa: `1fr 2fr` rozdělí šířku v poměru 1 : 2. `repeat(auto-fit, minmax(200px, 1fr))` vytvoří tolik sloupců, kolik se jich vejde – mřížka karet, která se sama přizpůsobí šířce okna.

## Seznamy a tabulky

- `list-style-type` – druh odrážky nebo číslování (`disc`, `circle`, `square`, `decimal`, `upper-roman`, `none`); `list-style-image: url(…)` – vlastní obrázek odrážky; `list-style-position: inside / outside`.
- Navigační menu bývá seznam `<ul>` se zrušenými odrážkami (`list-style: none`) a položkami vedle sebe (`display: flex`).
- Tabulka: `border-collapse: collapse` sloučí dvojité rámečky buněk do jedné čáry; zarovnání v buňce `text-align` a `vertical-align`; pruhování řádků `tr:nth-child(even) { background: #eee; }`; vycentrování celé tabulky `margin: 0 auto`.

## Shrnutí

- Krabice = content + padding + border + margin; `box-sizing: border-box` počítá šířku včetně paddingu a rámečku.
- `block` se řadí pod sebe, `inline` v řádku, `none` skryje.
- `float` jen pro obtékání obrázků; `position` pro přesné umístění (`relative` rodič + `absolute` potomek, `fixed` vůči oknu, `sticky` přilepení).
- Flexbox = jedna osa (menu, řada karet), grid = dvě osy (rozvržení stránky).
