---
title: "Bootstrap a CSS frameworky"
order: 8
tags: ["doplněno"]
---
**CSS framework** je hotová sada stylů (a často i skriptů), ze které se web skládá pomocí připravených tříd místo psaní vlastního CSS od nuly. Nejrozšířenější je **Bootstrap**; dalšími jsou např. Tailwind CSS (malé „utility“ třídy pro každou vlastnost), Bulma nebo Foundation.

- **Výhody** – rychlá tvorba, responzivita a jednotný vzhled „zadarmo“, odladěno pro všechny prohlížeče, rozsáhlá dokumentace.
- **Nevýhody** – weby si jsou podobné, stahuje se i kód, který se nepoužije, a úpravy nad rámec frameworku jsou pracnější.

## Připojení Bootstrapu

Nejjednodušší je načíst ho z **CDN** (sítě serverů, odkud si ho prohlížeč stáhne, často už ho má v mezipaměti). Do hlavičky patří stylový soubor, před konec `<body>` skript pro interaktivní komponenty (rozbalovací menu, modální okna):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
…
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

Druhá možnost je stáhnout soubory a uložit je k webu. Soubor `.min.css` je **minifikovaný** – bez mezer a komentářů, kvůli rychlosti; pro čtení slouží verze bez `.min`. Vlastní úpravy se píší do vlastního souboru, připojeného *za* Bootstrapem, aby ho přebil.

## Mřížka (grid)

Stránka se dělí na **12 sloupců**. Struktura je vždy `container` → `row` → sloupce `col-…`:

```html
<div class="container">
  <div class="row">
    <div class="col-12 col-md-8">Obsah</div>
    <div class="col-12 col-md-4">Postranní panel</div>
  </div>
</div>
```

- `col-12` – na mobilu přes celou šířku (sloupce jsou pod sebou)
- `col-md-8` / `col-md-4` – od breakpointu `md` vedle sebe v poměru 8 : 4
- `col` bez čísla – sloupce si šířku rozdělí rovným dílem
- `container` má pevnou maximální šířku a je vycentrovaný, `container-fluid` je přes celou šířku okna

Mřížka je **mobile first**: třída platí od svého breakpointu výš.

| Breakpoint | Šířka okna od |
| --- | --- |
| (bez přípony) | 0 |
| `sm` | 576 px |
| `md` | 768 px |
| `lg` | 992 px |
| `xl` | 1200 px |
| `xxl` | 1400 px (od verze 5) |

## Komponenty

Hotové části rozhraní, které se poskládají z HTML a tříd podle dokumentace:

- **tlačítka** – `btn btn-primary`, `btn btn-outline-secondary`
- **navigační lišta** – `navbar` s hamburger menu na mobilu
- **karty** – `card`, `card-body`, `card-title`
- **formuláře** – `form-control`, `form-label`, ověřování vstupu
- **upozornění** – `alert alert-warning`
- **modální okno**, **karusel**, **rozbalovací menu**, **tabulky** (`table table-striped`)

## Pomocné třídy (utilities)

Drobné třídy pro jednu vlastnost, aby nebylo nutné psát CSS:

- okraje: `mt-3` (margin-top), `px-2` (padding vlevo a vpravo), `mb-0`
- zobrazení: `d-none`, `d-md-block` (skryté na mobilu, viditelné od `md`), `d-flex`
- flexbox: `justify-content-between`, `align-items-center`
- text: `text-center`, `fw-bold`, `text-muted`
- barvy: `bg-primary`, `text-white`

## Verze 4 a 5

Bootstrap 5 už nepotřebuje knihovnu jQuery, přidal breakpoint `xxl` a změnil některé třídy (např. `ml-*` / `mr-*` → `ms-*` / `me-*`, start a end místo left a right). Při práci podle starších návodů je proto potřeba hlídat, pro kterou verzi jsou napsané.

## Shrnutí

- Framework = hotové třídy pro rozvržení a komponenty; Bootstrap se připojí z CDN.
- Mřížka: `container` → `row` → `col-{breakpoint}-{počet z 12}`, mobile first.
- Komponenty (tlačítka, navbar, karty, formuláře) a pomocné třídy (`mt-3`, `d-flex`, `text-center`).
