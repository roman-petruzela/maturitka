---
title: "JavaScript – základy"
order: 2
tags: ["doplněno"]
---

## Co je JavaScript

- Skriptovací (programovací) jazyk, který dotváří statické HTML stránky o **dynamické chování** – animace, reakce na akce uživatele, ověřování dat bez nutnosti odeslání na server
- Na rozdíl od HTML (struktura) a CSS (vzhled) řeší **chování** stránky
- Původně jazyk klientský – kód se vykonává přímo v prohlížeči uživatele (na rozdíl od PHP, které běží na serveru)
- Nerozlišuje se u něj velikost písmen malá/velká má význam (case-sensitive)
- Každý příkaz se obvykle ukončuje středníkem `;`

## Začlenění JavaScriptu do HTML stránky

- **Inline** – zápis přímo do atributu HTML tagu, např. do `onclick`
  ```html
  <button onclick="alert('Ahoj!')">Klikni</button>
  ```
- **Interní (vnitřní)** – kód vložený do stránky pomocí párového tagu `<script>` uvnitř `<head>` nebo `<body>`
  ```html
  <script>
    console.log("Stránka byla načtena");
  </script>
  ```
- **Externí** – kód uložen v samostatném souboru s příponou `.js` a připojen atributem `src`
  ```html
  <script src="skript.js"></script>
  ```
  - Doporučený postup u větších projektů – oddělení obsahu (HTML) od chování (JS), možnost sdílet jeden soubor mezi více stránkami
  - Tag `<script>` se z výkonnostních důvodů obvykle umisťuje na konec `<body>`, aby se nejprve načetl obsah stránky

## Proměnné

- Slouží k uložení hodnoty do paměti pod určitým jménem
- Deklarace klíčovými slovy:
  - `let` – proměnná, jejíž hodnotu lze později měnit
  - `const` – konstanta, hodnotu po přiřazení nelze změnit
  - `var` – starší způsob deklarace (dnes se nahrazuje `let`/`const`)
- JavaScript je jazyk s dynamickým typováním – typ proměnné se neuvádí, odvozuje se automaticky od přiřazené hodnoty
  ```js
  let jmeno = "Jan";
  let vek = 18;
  const pi = 3.14;
  let jePlnolety = true;
  ```

## Podmínky

- Umožňují větvit běh programu podle splnění podmínky
  ```js
  let vek = 17;

  if (vek >= 18) {
    console.log("Jsi plnoletý");
  } else if (vek >= 15) {
    console.log("Jsi mladistvý");
  } else {
    console.log("Jsi dítě");
  }
  ```
- Porovnávací operátory: `==` / `===` (rovnost, `===` navíc kontroluje datový typ), `!=` / `!==`, `<`, `>`, `<=`, `>=`
- Logické operátory: `&&` (a zároveň), `||` (nebo), `!` (negace)

## Cykly

- **for** – cyklus s pevně daným počtem opakování
  ```js
  for (let i = 0; i < 5; i++) {
    console.log("Opakování číslo " + i);
  }
  ```
- **while** – cyklus, který se opakuje, dokud platí podmínka
  ```js
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  ```

## Funkce

- Pojmenovaný blok kódu, který lze opakovaně volat, případně mu předat vstupní hodnoty (parametry) a vrátit výsledek (`return`)
  ```js
  function secti(a, b) {
    return a + b;
  }

  let vysledek = secti(2, 3); // 5
  ```
- Moderní zápis pomocí tzv. šipkové funkce (arrow function)
  ```js
  const secti = (a, b) => a + b;
  ```

## Práce s DOM

- **DOM (Document Object Model)** – stromová struktura, kterou prohlížeč vytvoří z HTML dokumentu a se kterou může JavaScript pracovat (číst i měnit obsah stránky za běhu)
- Základní metody pro výběr elementu:
  - `document.getElementById("id")` – vybere prvek podle atributu `id`
  - `document.querySelector("selektor")` – vybere první prvek odpovídající CSS selektoru
- Úprava obsahu a vzhledu vybraného prvku
  ```js
  let nadpis = document.getElementById("nadpis");
  nadpis.textContent = "Nový text";
  nadpis.style.color = "red";
  ```
- Reakce na události pomocí `addEventListener`
  ```js
  document.getElementById("tlacitko").addEventListener("click", function () {
    alert("Tlačítko bylo stisknuto");
  });
  ```

## Formuláře a validace v JavaScriptu

- JavaScript se typicky používá k **ověření (validaci) vstupních dat formuláře** ještě před jejich odesláním na server – ušetří se tím zbytečný požadavek na server a uživatel dostane okamžitou zpětnou vazbu
- Přístup k hodnotám prvků formuláře přes vlastnost `value`
- Zabránění odeslání formuláře metodou `preventDefault()`, pokud data nejsou v pořádku
  ```html
  <form id="prihlaseni">
    <input type="text" id="email" placeholder="E-mail">
    <button type="submit">Odeslat</button>
  </form>

  <script>
    document.getElementById("prihlaseni").addEventListener("submit", function (event) {
      let email = document.getElementById("email").value;

      if (email === "") {
        alert("Vyplňte e-mail");
        event.preventDefault();
      }
    });
  </script>
  ```
- Typické kontroly: vyplnění povinného pole, formát e-mailu, minimální délka hesla, shoda hesla a jeho potvrzení

## Praktické příklady

### Validace formuláře před odesláním

Podrobnější příklad – formulář se dvěma poli, u kterých se před odesláním zkontroluje vyplnění i formát e-mailu. Pokud validace neprojde, odeslání se zastaví (`event.preventDefault()`) a uživateli se zobrazí chybová hláška přímo ve stránce (bez nutnosti odeslat formulář na server a čekat na odpověď).

```html
<form id="registrace">
  <input type="text" id="jmeno" placeholder="Jméno">
  <input type="text" id="email" placeholder="E-mail">
  <button type="submit">Registrovat</button>
</form>
<p id="chyba" style="color: red;"></p>

<script>
  document.getElementById("registrace").addEventListener("submit", function (event) {
    let jmeno = document.getElementById("jmeno").value;
    let email = document.getElementById("email").value;
    let chybaEl = document.getElementById("chyba");

    // jednoduchá kontrola formátu e-mailu pomocí regulárního výrazu
    let emailJeValidni = /^\S+@\S+\.\S+$/.test(email);

    if (jmeno.trim() === "") {
      chybaEl.textContent = "Vyplňte prosím jméno.";
      event.preventDefault(); // zastaví odeslání formuláře na server
    } else if (!emailJeValidni) {
      chybaEl.textContent = "Zadejte platný e-mail.";
      event.preventDefault();
    } else {
      chybaEl.textContent = ""; // vše v pořádku, formulář se odešle
    }
  });
</script>
```

### Manipulace s DOM po kliknutí na tlačítko

Po kliknutí na tlačítko se změní text i vzhled (barva pozadí) vybraného elementu.

```html
<p id="stav">Světlo je vypnuté.</p>
<button id="prepinac">Přepnout světlo</button>

<script>
  let zapnuto = false;

  document.getElementById("prepinac").addEventListener("click", function () {
    let stavEl = document.getElementById("stav");
    zapnuto = !zapnuto; // negace aktuálního stavu

    if (zapnuto) {
      stavEl.textContent = "Světlo je zapnuté.";
      stavEl.style.backgroundColor = "yellow";
    } else {
      stavEl.textContent = "Světlo je vypnuté.";
      stavEl.style.backgroundColor = "transparent";
    }
  });
</script>
```

### Práce s polem – filtrování položek

Pole objektů lze pomocí metody `filter()` snadno prohledávat nebo filtrovat podle zadané podmínky, aniž by bylo nutné psát vlastní cyklus.

```js
// pole objektů - seznam produktů
const produkty = [
  { nazev: "Klávesnice", cena: 450 },
  { nazev: "Myš", cena: 250 },
  { nazev: "Monitor", cena: 3200 },
  { nazev: "Sluchátka", cena: 890 },
];

// vyfiltrujeme jen produkty levnější než 1000 Kč
const levneProdukty = produkty.filter(function (produkt) {
  return produkt.cena < 1000;
});

console.log(levneProdukty);
// [{nazev: "Klávesnice", cena: 450}, {nazev: "Myš", cena: 250}, {nazev: "Sluchátka", cena: 890}]

// stejný zápis pomocí šipkové funkce
const levneProdukty2 = produkty.filter((produkt) => produkt.cena < 1000);
```

### Fetch API – spolupráce JavaScriptu a PHP

**Fetch API** umožňuje z JavaScriptu na klientovi poslat požadavek na server (např. na PHP skript) a se získanými daty dále pracovat, aniž by se musela znovu načítat celá stránka. JavaScript tak běží v prohlížeči uživatele, zatímco PHP skript, na který se dotazuje, běží na serveru.

```php
<?php
// data.php - serverový skript, který vrátí data ve formátu JSON
header("Content-Type: application/json");

$udaje = [
    "jmeno" => "Jana",
    "pocetBodu" => 87,
];

echo json_encode($udaje);
?>
```

```js
// skript.js - načtení dat ze serveru pomocí fetch()
fetch("data.php")
  .then((odpoved) => odpoved.json()) // převod odpovědi na JavaScript objekt
  .then((data) => {
    console.log("Jméno: " + data.jmeno);
    console.log("Počet bodů: " + data.pocetBodu);
    document.getElementById("vysledek").textContent =
      data.jmeno + " má " + data.pocetBodu + " bodů.";
  })
  .catch((chyba) => {
    console.log("Nastala chyba při načítání dat: " + chyba);
  });
```
