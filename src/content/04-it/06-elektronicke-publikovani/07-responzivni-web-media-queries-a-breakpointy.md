---
title: "Responzivní web, media queries a breakpointy"
order: 7
tags: ["doplněno"]
---
**Responzivní web** se sám přizpůsobí velikosti obrazovky – na mobilu je jednosloupcový s velkými tlačítky, na monitoru má více sloupců. Jde o jednu stránku s jedním obsahem, jen různě rozvrženou; nevytváří se zvláštní mobilní verze webu. Většina návštěvníků dnes přichází z telefonu a vyhledávače (Google) hodnotí mobilní verzi stránky přednostně.

## Tři stavební kameny

1. **Meta značka viewport** – bez ní mobilní prohlížeč stránku vykreslí jako na šířku monitoru a celou ji zmenší.

   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1">
   ```

2. **Pružné rozvržení** – šířky v procentech, `fr`, flexbox a grid místo pevných pixelů (viz [box model a rozvržení](/it/elektronicke-publikovani/06-css-box-model-rozvrzeni-a-pozicovani/)).
3. **Media queries** – podmínky, za kterých se uplatní další pravidla CSS.

A k tomu **pružné obrázky**, které nikdy nepřečnívají ze svého sloupce:

```css
img { max-width: 100%; height: auto; }
```

## Media queries

```css
/* základní styl – platí vždy */
.produkty { display: grid; grid-template-columns: 1fr; gap: 1rem; }

/* od 40em (640 px) šířky okna: dva sloupce */
@media (min-width: 40em) {
  .produkty { grid-template-columns: 1fr 1fr; }
}

/* od 64em (1024 px): čtyři sloupce */
@media (min-width: 64em) {
  .produkty { grid-template-columns: repeat(4, 1fr); }
}
```

Části dotazu:

- **typ média** – `screen` (obrazovka), `print` (tisk), `all`; když se neuvede, platí pro všechna média
- **podmínky (vlastnosti média)** – `min-width`, `max-width` (šířka okna), `min-height`, `orientation: portrait / landscape`, `prefers-color-scheme: dark` (uživatel má zapnutý tmavý režim), `prefers-reduced-motion: reduce` (nechce animace), `hover: hover` (zařízení má myš)
- **logické operátory** – `and` (obě podmínky), čárka (alespoň jedna), `not`

```css
@media screen and (min-width: 40em) and (orientation: landscape) { … }
@media print { nav, .reklama { display: none; } }   /* tiskový styl */
```

Media query lze napsat i do atributu `<link media="print" …>` nebo v JavaScriptu přes `window.matchMedia('(min-width: 40em)')`.

## Mobile first

Základní styly se píší pro **nejmenší obrazovku** a media queries s `min-width` postupně přidávají sloupce a prvky pro větší displeje. Opačný postup (desktop a pak `max-width` pro menší) vede k tomu, že telefon stahuje a přepisuje styly, které nepotřebuje, a na malé obrazovky se snadno zapomene.

## Breakpointy (body zlomu)

**Breakpoint** je šířka okna, při které se mění rozvržení stránky – v příkladu výše 40em a 64em.

- **Odvozují se od obsahu, ne od konkrétních zařízení.** Okno se postupně rozšiřuje od mobilní šířky a breakpoint se přidá tam, kde se rozvržení začne rozpadat (řádky textu jsou příliš dlouhé, karty zbytečně široké). Rozměry telefonů a tabletů se mění každý rok, obsah stránky ne.
- Obvykle stačí **dva až čtyři** globální breakpointy pro rozvržení celé stránky. Jednotlivé komponenty (karta, menu) mohou mít i vlastní, lokální.
- Zadávají se raději v `em` než v `px` – pak fungují správně i při zvětšení písma v prohlížeči.
- Pojmenovávají se obecně, např. podle velikostí triček (`s`, `m`, `l`, `xl`), ne podle zařízení (`tablet`), protože stejnou šířku má malý notebook i velký tablet.
- Jako výchozí orientace poslouží běžné hodnoty, např. Bootstrap: 576, 768, 992, 1200 a 1400 px.

## Typické vzory

- **Hamburger menu** – na mobilu se navigace schová pod tlačítko ☰ a rozbalí se po kliknutí, na širší obrazovce se zobrazí jako řádek odkazů.
- **Sloupce pod sebou** – postranní panel, který je na monitoru vedle obsahu, se na mobilu přesune pod něj.
- **Pružná typografie** – velikost nadpisu v mezích: `font-size: clamp(1.5rem, 4vw, 3rem);`.
- **Obrázky pro různé obrazovky** – atributy `srcset` a `sizes` (prohlížeč vybere vhodně velký soubor), prvek `<picture>` pro jiný výřez obrázku na mobilu.

## Časté chyby

- chybí meta značka viewport
- pevné šířky v pixelech (`width: 960px`), které na mobilu vytvoří vodorovný posuvník
- návrh jen „směrem dolů“ od monitoru – mobilní verze je pak jen zmačkaný desktop
- obrovské obrázky stahované i do telefonu (pomalé načítání)
- ovládací prvky příliš malé na prst – dotyková plocha má mít alespoň zhruba 44 × 44 px
- testování jen zmenšením okna – vždy vyzkoušet i na skutečném telefonu nebo v režimu zařízení ve vývojářských nástrojích prohlížeče (F12)

## Shrnutí

- Viewport + pružné rozvržení + media queries (+ `img { max-width: 100% }`).
- Mobile first: základ pro mobil, `min-width` přidává pro větší obrazovky.
- Breakpointy podle obsahu, dva až čtyři, v `em`, obecně pojmenované.
