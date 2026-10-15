---
title: "CSS – zápis, selektory a kaskáda"
order: 4
tags: ["doplněno"]
---
**CSS (Cascading Style Sheets, kaskádové styly)** popisují vzhled stránky – barvy, písmo, okraje, rozvržení. HTML říká, *co* na stránce je (nadpis, odstavec, seznam), CSS říká, *jak* to vypadá. Jeden stylový soubor tak může určovat vzhled celého webu a změna v něm se projeví na všech stránkách najednou.

## Zápis pravidla

Pravidlo se skládá ze **selektoru** (na které prvky platí) a **deklarací** ve složených závorkách. Každá deklarace je dvojice `vlastnost: hodnota` a končí středníkem.

```css
h1 {
  color: navy;
  font-size: 2rem;
}
```

- vlastnosti a většina hodnot se píší malými písmeny
- mezery a konce řádků nehrají roli – slouží jen přehlednosti
- vlastnost nebo hodnotu, kterou prohlížeč nezná, tiše ignoruje (proto se chyba v zápisu často projeví jen tím, že styl „nefunguje“)
- komentář: `/* text komentáře */`

## Tři způsoby připojení stylů

**1. Externí soubor** – styly jsou v souboru s příponou `.css`, připojeném v hlavičce stránky. Doporučený způsob: jeden soubor slouží celému webu a prohlížeč si ho uloží do mezipaměti.

```html
<head>
  <link rel="stylesheet" href="styly.css">
</head>
```

**2. Blok `<style>` v hlavičce** – styly platí jen pro tuto jednu stránku.

```html
<head>
  <style>
    h1 { color: navy; }
  </style>
</head>
```

**3. Atribut `style` přímo u prvku (inline)** – platí jen pro tento jeden prvek; vhodný nanejvýš pro výjimky.

```html
<h1 style="color: navy;">Nadpis</h1>
```

## Selektory

| Selektor | Zápis | Vybere |
| --- | --- | --- |
| typový (podle tagu) | `p` | všechny odstavce |
| třída | `.upozorneni` | prvky s `class="upozorneni"` (třídu může mít libovolně mnoho prvků) |
| identifikátor | `#hlavicka` | prvek s `id="hlavicka"` (id je na stránce jedinečné) |
| univerzální | `*` | všechny prvky |
| skupina | `h1, h2, h3` | všechny vyjmenované |
| potomek | `nav a` | odkazy kdekoli uvnitř `nav` |
| přímý potomek | `ul > li` | položky, které jsou přímo v `ul` |
| atributový | `input[type="email"]` | prvky s daným atributem a hodnotou |

Třídy a selektory se dají kombinovat: `p.upozorneni` vybere jen odstavce s třídou `upozorneni`.

### Pseudotřídy a pseudoelementy

**Pseudotřída** vybírá prvek v určitém stavu, zapisuje se jednou dvojtečkou:

- `a:link` – dosud nenavštívený odkaz, `a:visited` – navštívený odkaz
- `a:hover` – prvek, nad kterým je myš
- `a:active` – v okamžiku kliknutí
- `input:focus` – prvek, který má fokus (kurzor v poli formuláře)
- `li:first-child`, `li:last-child`, `tr:nth-child(even)` – podle pořadí mezi sourozenci (např. pruhovaná tabulka)

U odkazů se dodržuje pořadí **link – visited – hover – active**, jinak se pozdější pravidla navzájem přebijí.

**Pseudoelement** vybírá část prvku, zapisuje se dvěma dvojtečkami: `p::first-line`, `p::first-letter`, `::before` a `::after` (vložený obsah před a za prvek).

## Tagy `<div>` a `<span>`

Samy o sobě nic neznamenají – slouží jako „obal“, na který se pověsí třída nebo id a styl.

- `<div>` je **blokový** prvek – začíná na novém řádku a zabírá celou šířku; používá se pro větší části stránky.
- `<span>` je **řádkový (inline)** prvek – zůstává v řádku textu; používá se pro část textu.

Pro hlavní části stránky má HTML5 vlastní sémantické prvky – `header`, `nav`, `main`, `article`, `section`, `aside`, `footer`. Vyhledávače i čtečky pro nevidomé jim rozumějí lépe než obecným `div`.

```html
<p>Cena: <span class="cena">499 Kč</span></p>
```

## Kaskáda, specificita a dědičnost

Na jeden prvek často míří víc pravidel. O tom, které vyhraje, rozhoduje **kaskáda**:

1. **Důležitost** – deklarace s `!important` přebije ostatní (používat jen výjimečně, zhoršuje údržbu).
2. **Specificita** (váha selektoru) – inline styl > id > třída, pseudotřída, atribut > tag. Selektor `#menu a` má tedy vyšší váhu než `.menu a` a ten vyšší než `nav a`.
3. **Pořadí** – při stejné váze vyhraje pravidlo zapsané později (proto se pozdější `<link>` nebo pravidlo na konci souboru prosadí).

**Dědičnost** – některé vlastnosti se přenášejí z rodiče na potomky: hlavně vlastnosti textu (`color`, `font-family`, `font-size`, `line-height`). Proto stačí nastavit písmo jednou na `body`. Vlastnosti „krabice“ (`margin`, `padding`, `border`, `background`, `width`) se nedědí.

## Validace a ladění

- Kód CSS lze ověřit validátorem W3C (validátor CSS, jigsaw.w3.org/css-validator).
- V prohlížeči se styly zkoumají v **nástrojích pro vývojáře** (F12): u každého prvku je vidět, která pravidla na něj působí, která byla přebita (přeškrtnutá) a odkud pocházejí.

## Shrnutí

- Pravidlo = selektor + `{ vlastnost: hodnota; }`.
- Styly patří do externího souboru `.css` připojeného přes `<link>`.
- Třída (`.nazev`) pro opakované použití, id (`#nazev`) pro jedinečný prvek.
- Vyhrává vyšší důležitost, pak vyšší specificita, pak pozdější pravidlo; text se dědí, krabice ne.
