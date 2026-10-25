---
title: "Elektronické publikování – rozcestník"
order: -1
---

Rozcestník kategorie: o čem předmět je, kdy se podle ŠVP učí, co si z něj určitě zapamatovat, kde je které téma a jak souvisí s maturitou.

## O předmětu

- Tvorba webových stránek od struktury po publikování: HTML (obsah a struktura), CSS (vzhled), JavaScript (chování).
- Dále design webu a grafika pro web, responzivní web (media queries, flexbox, grid), redakční systémy (WordPress) a e-shop.
- Je to převážně praktický předmět – výsledkem je vlastní web; stránky zde shrnují pojmy a syntaxi.
- Navazuje na [grafiku na PC](/it/#grafika-na-pc) (úprava obrázků pro web) a pokračuje [webovým programováním](/it/#webove-programovani) (PHP, dynamické stránky).

## Ročníky a hodiny podle ŠVP

| Ročník | Hodin týdně | Obsah (ŠVP §4.9.5) |
| --- | --- | --- |
| 2. | 2 (povinný) | HTML (struktura stránky, validace), CSS (selektory, třídy, identifikátory, vlastnosti), SEO a testování, FTP, zvuk a video na stránce |
| 3. | 2 (volitelný) | design webu a webová grafika, responzivní weby, redakční systém a publikování |
| 4. | 2 (volitelný) | JavaScript (syntaxe, začlenění do stránky, formuláře), tvorba e-shopu |

Plné znění výstupů je v [přehledu ŠVP](/it/reference/svp-prehled/#495-elektronické-publikování).

## Co si určitě zapamatovat

- **HTML** je značkovací jazyk: značky (tagy) v lomených závorkách, **párové** (`<p>…</p>`) a **nepárové** (`<br>`, `<img>`). Dokument má pevnou kostru `<html>` → `<head>` (metadata, titulek, připojené styly) a `<body>` (obsah).
- Základní tagy: nadpisy `<h1>`–`<h6>`, odstavec `<p>`, odkaz `<a href>`, obrázek `<img src>`, seznamy `<ul>` / `<ol>` s položkami `<li>`, tabulka `<table>` s řádky `<tr>` a buňkami `<td>`, bloky `<div>`.
- **CSS** se k HTML připojí tagem `<link>` v hlavičce. Zápis: selektor a ve složených závorkách vlastnosti oddělené středníkem – `h1 { color: blue; font-size: 12px; }`. Selektor může být tag, třída (`.menu`) nebo identifikátor (`#hlavicka`).
- **margin** = vnější okraj, **padding** = vnitřní okraj; barvy šestnáctkově (`#ff0000`) nebo `rgb()`.
- **Responzivní web** se přizpůsobí šířce obrazovky: **media queries** (`@media (max-width: 600px) { … }`), rozvržení **flexbox** (řada nebo sloupec) a **grid** (mřížka). **Mobile-first** = nejdřív styly pro mobil, pak rozšíření pro větší obrazovky.
- **Grafika pro web**: JPEG pro fotografie, PNG pro průhlednost, SVG pro vektory, moderně WebP; obrázky před nasazením zmenšit a zkomprimovat.
- **JavaScript** běží v prohlížeči (na rozdíl od PHP na serveru). Připojí se inline (`onclick`), tagem `<script>` nebo externím souborem `.js`. Proměnné `let` (měnitelná), `const` (konstanta); `===` porovná i datový typ. Se stránkou pracuje přes **DOM** (`document.getElementById`, `addEventListener`).
- **Redakční systém (CMS)** – např. WordPress: obsah se spravuje v administraci bez znalosti kódu, vzhled určuje **šablona (theme)**, funkce se přidávají **pluginy**.
- **E-shop**: katalog produktů, košík, platební brána, správa objednávek.

## Témata kategorie

**HTML a CSS**

- [HTML a CSS](/it/elektronicke-publikovani/01-html-a-css/) – struktura stránky a základní tagy
- [CSS – zápis, selektory a kaskáda](/it/elektronicke-publikovani/04-css-zapis-selektory-a-kaskada/)
- [CSS – barvy, pozadí, text a jednotky](/it/elektronicke-publikovani/05-css-barvy-pozadi-text-a-jednotky/)
- [CSS – box model, rozvržení a pozicování](/it/elektronicke-publikovani/06-css-box-model-rozvrzeni-a-pozicovani/)

**Responzivní web a nástroje**

- [Responzivní web, media queries a breakpointy](/it/elektronicke-publikovani/07-responzivni-web-media-queries-a-breakpointy/)
- [Bootstrap a CSS frameworky](/it/elektronicke-publikovani/08-bootstrap-a-css-frameworky/)
- [Design webu, redakční systémy a e-shop](/it/elektronicke-publikovani/03-redakcni-systemy-a-eshop/)

**Skripty a zveřejnění**

- [JavaScript – základy](/it/elektronicke-publikovani/02-javascript-zaklady/)
- [Publikování webu – doména, hosting, FTP a SEO](/it/elektronicke-publikovani/09-publikovani-webu/)

Navazující látka: serverová strana webu v [dynamických stránkách a serverovém skriptování](/it/webove-programovani/01-dynamicke-stranky-a-serverove-skriptovani/), útoky na webové aplikace (XSS, SQL injection) v [zabezpečení sítí a aplikací](/it/kyberneticka-bezpecnost/05-zabezpeceni-siti-a-aplikaci/).

## Maturitní okruhy

Elektronické publikování se u ústní zkoušky nezkouší – podle [maturitních okruhů IT](/it/reference/maturitni-okruhy/) je součástí praktické zkoušky a maturitní práce. Na web navazuje okruh 20 (zranitelnost webových aplikací – HTTP, XSS) z kybernetické bezpečnosti.

## Co je jen okrajové

- **Zastaralé tagy** – `<b>`, `<i>`, `<bgsound>` a vzhled nastavovaný přímo v HTML; dnes patří vzhled do CSS (pro tučné písmo `font-weight`, sémanticky `<strong>`).
- **Rozvržení pomocí `float`** – nahradily ho flexbox a grid.
- **`var`** v JavaScriptu – starší způsob deklarace, dnes `let` a `const`.
- **No-code a low-code nástroje** – stačí vědět, co jsou a jaké mají výhody a nevýhody.
- **Ukázkový redakční systém v PHP** – ilustrace principu šablony a `include()`, ne látka k učení zpaměti.
