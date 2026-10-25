---
title: "CSS – barvy, pozadí, text a jednotky"
order: 5
tags: ["doplněno"]
---
Přehled vlastností, kterými se nastavuje barva, pozadí a vzhled textu, a jednotek, ve kterých se zadávají velikosti.

## Barvy

Barvu textu nastavuje `color`, barvu pozadí `background-color`. Hodnotu lze zapsat několika způsoby:

| Zápis | Příklad | Poznámka |
| --- | --- | --- |
| název | `red`, `navy`, `white` | asi 140 pojmenovaných barev |
| šestnáctkově (hex) | `#ff0000`, zkráceně `#f00` | po dvou číslicích červená, zelená, modrá (00–FF) |
| `rgb()` | `rgb(255, 0, 0)` | složky 0–255 (model RGB) |
| `rgba()` / `rgb()` s průhledností | `rgb(0 0 0 / 50%)` | poslední hodnota = neprůhlednost (alfa) |
| `hsl()` | `hsl(0, 100%, 50%)` | odstín (0–360°), sytost, světlost – snadno se z ní dělají světlejší a tmavší varianty |

Mezi textem a pozadím má být dostatečný **kontrast** – světle šedý text na bílém pozadí je špatně čitelný (přístupnost webu).

## Pozadí

```css
body {
  background-color: #f4f1ea;
  background-image: url("img/mraky.jpg");
  background-repeat: no-repeat;   /* repeat, repeat-x, repeat-y */
  background-position: center top;
  background-size: cover;         /* obrázek pokryje celou plochu */
  background-attachment: fixed;   /* pozadí se neposouvá se stránkou */
}
```

- `background-size: cover` – obrázek vyplní plochu a přečnívající část se ořízne; `contain` – celý obrázek se vejde, může zbýt volné místo.
- Pozadí může mít i **přechod**: `background-image: linear-gradient(to right, navy, teal);`
- Zkrácený zápis: `background: #f4f1ea url("img/mraky.jpg") no-repeat center / cover;`

## Písmo

| Vlastnost | Příklad | Význam |
| --- | --- | --- |
| `font-family` | `Arial, Helvetica, sans-serif` | druh písma – seznam náhradních písem, poslední je obecná rodina |
| `font-size` | `1.125rem`, `18px` | velikost písma |
| `font-weight` | `bold`, `400`, `700` | tloušťka (400 normální, 700 tučné) |
| `font-style` | `italic` | kurzíva |
| `font-variant` | `small-caps` | kapitálky |
| `line-height` | `1.5` | výška řádku (číslo bez jednotky = násobek velikosti písma) |

Obecné rodiny písma: `serif` (patkové, např. Times New Roman), `sans-serif` (bezpatkové, Arial), `monospace` (neproporcionální, Courier – pro kód), `cursive`, `fantasy`. Uvádějí se na konci seznamu jako pojistka, když návštěvník nemá žádné z vyjmenovaných písem.

**Webová písma** – písmo, které návštěvník nemá v počítači, se stáhne spolu se stránkou: buď z vlastního serveru pravidlem `@font-face` (formát WOFF2), nebo ze služby jako Google Fonts.

```css
@font-face {
  font-family: "Literata";
  src: url("fonty/literata.woff2") format("woff2");
}
body { font-family: "Literata", Georgia, serif; }
```

## Text a odstavec

| Vlastnost | Hodnoty | Význam |
| --- | --- | --- |
| `text-align` | `left`, `right`, `center`, `justify` | zarovnání (blokové prvky) |
| `text-indent` | `1.5em` | odsazení prvního řádku odstavce |
| `text-decoration` | `none`, `underline`, `line-through` | čáry u textu (`none` zruší podtržení odkazu) |
| `text-transform` | `uppercase`, `lowercase`, `capitalize` | velká / malá písmena |
| `letter-spacing` | `0.1em` | mezery mezi písmeny |
| `word-spacing` | `0.2em` | mezery mezi slovy |
| `vertical-align` | `middle`, `super`, `sub` | svislé zarovnání v řádku (řádkové prvky, buňky tabulky) |
| `white-space` | `nowrap` | zakáže zalomení řádku |

Odkazy se stylují přes pseudotřídy (`a:hover` atd.) – viz [zápis a selektory](/it/elektronicke-publikovani/04-css-zapis-selektory-a-kaskada/#pseudotřídy-a-pseudoelementy).

## Jednotky

**Absolutní** – pevná velikost bez ohledu na okolí:

- `px` – pixel; nejběžnější jednotka pro obrazovku (CSS pixel, ne fyzický bod displeje)
- `pt`, `cm`, `mm`, `in` – tiskové jednotky; na web se nehodí, používají se pro tiskové styly (`@media print`)

**Relativní** – velikost se odvozuje od něčeho jiného, a stránka se proto lépe přizpůsobí:

| Jednotka | Vztaženo k | Typické použití |
| --- | --- | --- |
| `%` | rozměru rodičovského prvku | šířky sloupců |
| `em` | velikosti písma prvku (u `font-size` rodiče) | odsazení úměrná textu |
| `rem` | velikosti písma kořenového prvku `html` (výchozí 16 px) | velikosti písma, okraje – nesčítají se při vnoření jako `em` |
| `vw`, `vh` | 1 % šířky / výšky okna prohlížeče | celoobrazovkové sekce, nadpisy rostoucí s oknem |
| `ch` | šířce znaku „0“ | maximální šířka textového sloupce (`max-width: 70ch`) |

Při výchozím nastavení je `1rem = 16px`, takže `1.5rem = 24px`. Velikosti v `rem` se zvětší, když si uživatel v prohlížeči nastaví větší písmo – proto se pro text dávají přednost před `px`.

Funkce `calc()` umí jednotky kombinovat: `width: calc(100% - 2rem);`.

## Shrnutí

- Barvy: název, `#rrggbb`, `rgb()`, `hsl()`; u textu hlídat kontrast.
- Pozadí: barva, obrázek, opakování, pozice, `background-size: cover`.
- Písmo: seznam náhradních písem zakončený obecnou rodinou; webová písma přes `@font-face`.
- Na obrazovku `px` a hlavně relativní `rem`, `%`, `vw`; tiskové `pt` a `cm` jen pro tisk.
