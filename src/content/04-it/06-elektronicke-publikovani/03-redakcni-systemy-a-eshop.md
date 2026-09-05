---
title: "Design webu, redakční systémy a e-shop"
order: 3
tags: ["doplněno"]
---

## Návrh designu webových stránek

- Před samotnou tvorbou webu je vhodné vytvořit **grafický návrh (mockup, wireframe)** – rozvržení stránky, barevná paliet, typografie
- Požadavky na webovou grafiku:
  - **Přehlednost a jednotný styl** napříč celým webem (stejné barvy, fonty, odsazení)
  - **Čitelnost** – dostatečný kontrast textu a pozadí, přiměřená velikost písma
  - **Optimalizace obrázků** – nižší datová velikost kvůli rychlosti načítání stránky, vhodný formát (JPEG pro fotografie, PNG pro grafiku s průhledností, SVG pro vektorovou grafiku, moderně WebP)
  - **Konzistentní navigace**, srozumitelné rozmístění prvků (menu, hlavička, patička)
- Obrázky se před nasazením na web upravují v grafické aplikaci (např. změna rozměru, oříznutí, komprese, export ve správném formátu) a následně se do webové aplikace vkládají – např. tagem `<img src="cesta/k/obrazku.jpg">` v HTML nebo jako pozadí přes CSS vlastnost `background-image`

## Responzivní web

- **Responzivní design** – web se přizpůsobuje různým velikostem obrazovky (mobil, tablet, počítač)
- **Media queries** – pravidla v CSS, která mění styl stránky podle šířky okna prohlížeče
  ```css
  @media (max-width: 600px) {
    .menu {
      display: none;
    }
  }
  ```
- **Flexbox** a **grid** – moderní CSS nástroje pro rozvržení prvků na stránce, které se snadno přizpůsobují dostupnému prostoru (na rozdíl od staršího řešení pomocí `float`)
  - Flexbox – vhodný pro řazení prvků do řádku nebo sloupce
  - Grid – vhodný pro rozvržení stránky do mřížky řádků a sloupců
- **Mobile-first přístup** – návrh a styly se tvoří nejdřív pro nejmenší (mobilní) zobrazení a poté se pomocí media queries postupně rozšiřují pro větší obrazovky – web je tak od začátku funkční i na slabších zařízeních

## Webové aplikace a no-code/low-code nástroje

- Kromě ručního psaní kódu existují nástroje, které umožňují tvorbu webu **bez znalosti programování** nebo jen s minimálními znalostmi
- **No-code** nástroje (např. jednoduché webové builder) – stránka se skládá vizuálně přetahováním prvků myší
- **Low-code** nástroje – kombinují vizuální tvorbu s možností doplnit vlastní kód pro pokročilejší úpravy
- Výhoda – rychlá tvorba webu i pro uživatele bez programátorských znalostí, nevýhoda – menší flexibilita oproti psaní vlastního kódu

## Redakční systémy (CMS)

- **CMS (Content Management System)** – aplikace, která umožňuje spravovat obsah webu bez nutnosti upravovat zdrojový kód
- Typický příklad: **WordPress** (dále např. Joomla, Drupal)
- Princip fungování:
  - Web se skládá ze **šablony (theme)**, která určuje vzhled a rozvržení stránek
  - Obsah (texty, obrázky, stránky, články) se vkládá přes přehlednou **administraci** – uživatel pracuje s formuláři a editorem, nemusí znát HTML/CSS
  - Funkčnost webu lze rozšiřovat pomocí **pluginů (doplňků)** – např. kontaktní formulář, galerie, SEO nástroje, e-shop
- Postup tvorby webu v redakčním systému:
  1. Instalace CMS na server
  2. Výběr a nastavení šablony podle požadovaného vzhledu
  3. Doplnění potřebných pluginů podle požadované funkčnosti
  4. Naplnění webu obsahem přes administraci
- I v redakčním systému je často možné zasáhnout do **zdrojového kódu šablony** (HTML, CSS, případně PHP) pro pokročilejší úpravy nad rámec možností administrace
- Po dokončení se web **publikuje** – nahraje se na hosting/server tak, aby byl dostupný na internetu pod vlastní doménou

### Ukázka – šablona jednoduchého PHP-based CMS

I jednoduchý redakční systém lze postavit vlastními silami v PHP. Základní princip: existuje jeden soubor se **společnou HTML kostrou (šablonou)** stránky (hlavička, menu, patička), do které se pomocí `include()` vkládá proměnný obsah podle toho, jaká stránka se má zobrazit. Díky tomu se hlavička a patička nemusí opisovat na každé stránce zvlášť.

```php
<?php
// index.php - hlavní vstupní bod, podle parametru v URL vybere obsah k zobrazení

// např. index.php?stranka=kontakt zobrazí soubor stranky/kontakt.php
$stranka = isset($_GET["stranka"]) ? $_GET["stranka"] : "uvod";

// jednoduché ošetření, aby nešlo zadáním jiné hodnoty načíst libovolný soubor ze serveru
$povolene = ["uvod", "o-nas", "kontakt"];
if (!in_array($stranka, $povolene)) {
    $stranka = "uvod";
}
?>
<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8">
  <title>Můj web</title>
</head>
<body>

  <?php include "sablona/hlavicka.php"; ?>

  <main>
    <?php include "stranky/" . $stranka . ".php"; ?>
  </main>

  <?php include "sablona/paticka.php"; ?>

</body>
</html>
```

```php
<?php
// sablona/hlavicka.php - společná hlavička pro všechny stránky webu
?>
<header>
  <h1>Můj web</h1>
  <nav>
    <a href="index.php?stranka=uvod">Úvod</a>
    <a href="index.php?stranka=o-nas">O nás</a>
    <a href="index.php?stranka=kontakt">Kontakt</a>
  </nav>
</header>
```

```php
<?php
// stranky/kontakt.php - dynamický obsah vložený do šablony
?>
<h2>Kontakt</h2>
<p>Napište nám na e-mail info@mujweb.cz.</p>
```

- Stejný princip (šablona + dynamicky vkládaný obsah) používají i skutečné redakční systémy jako WordPress, jen s mnohem propracovanějším a bezpečnějším zpracováním na pozadí

## E-shop

- Speciální typ webové aplikace určený k **prodeji zboží nebo služeb** přes internet
- Lze vytvořit jako samostatnou aplikaci nebo jako rozšíření (plugin) redakčního systému
- Typické součásti e-shopu:
  - **Katalog produktů** – přehled zboží rozdělený do kategorií, u každého produktu popis, cena, obrázek, skladová dostupnost
  - **Košík** – dočasné úložiště vybraného zboží před dokončením objednávky, umožňuje měnit množství nebo zboží odebrat
  - **Platební brána** – zprostředkovává bezpečnou online platbu (platební kartou, bankovním převodem apod.), případně nabízí platbu na dobírku
  - **Správa objednávek** – administrační část, kde provozovatel eviduje přijaté objednávky, mění jejich stav (přijato, odesláno, doručeno) a komunikuje se zákazníkem
- Další obvyklé prvky: registrace/přihlášení zákazníka, hodnocení a recenze produktů, doprava a její volba, obchodní podmínky
