---
title: "Webové programování – rozcestník"
order: -1
---

Rozcestník kategorie: o čem předmět je, kdy se podle ŠVP učí, co si z něj určitě zapamatovat, kde je které téma a jak souvisí s maturitou.

## O předmětu

- Dynamické webové stránky, jejichž obsah generuje skript na serveru – podle vstupu uživatele, dat v databázi nebo aktuálního času.
- Základy serverového jazyka (na stránkách PHP): datové typy, větvení, cykly, pole a řetězce, formuláře, ukládání dat mimo paměť (soubor, databáze, session, cookies).
- Spojuje [elektronické publikování](/it/#elektronicke-publikovani) (HTML, CSS, JavaScript v prohlížeči), [programování](/it/#programovani) (stejné řídicí struktury) a [databázové systémy](/it/#databazove-systemy) (MySQL).

## Ročníky a hodiny podle ŠVP

| Ročník | Hodin týdně | Obsah (ŠVP §4.9.8) |
| --- | --- | --- |
| 3. | 2 | základy webového programování – vývojové prostředí, datové typy, větvení, cykly, pole, řetězce, formuláře, ukládání dat; vytvoření vlastních dynamických stránek |

Plné znění výstupů je v [přehledu ŠVP](/it/reference/svp-prehled/#498-webové-programování).

## Co si určitě zapamatovat

- **Statická stránka** je pevně daný HTML soubor, **dynamická** se generuje při každém požadavku.
- **Klient** (prohlížeč) pošle požadavek, **server** spustí skript, ten vygeneruje HTML a server ho pošle zpět. Kód serverového skriptu uživatel nevidí – na rozdíl od JavaScriptu, který běží v prohlížeči.
- Serverové technologie: **PHP**, ASP.NET, Node.js. K vývoji je potřeba webový server s podporou jazyka a databáze, lokálně např. XAMPP nebo WAMP.
- **Formulář** odešle data metodou **GET** (data v URL za `?` – vyhledávání, filtry, dá se uložit do záložky) nebo **POST** (data v těle požadavku – hesla, delší texty). V PHP je čteme z polí `$_GET` a `$_POST` a vždy je **ověřujeme na serveru**.
- Proměnné žijí jen po dobu jednoho požadavku. Trvale se data ukládají do **souboru** nebo **databáze**; o přihlášeném uživateli si server pamatuje **session** (`session_start()`, `session_destroy()`), malé údaje v prohlížeči drží **cookies**.
- Pole se indexují od 0; s řetězci se pracuje funkcemi pro délku, spojování, převod velikosti písmen, hledání a nahrazování.

## Témata kategorie

- [Dynamické stránky a serverové skriptování](/it/webove-programovani/01-dynamicke-stranky-a-serverove-skriptovani/) – klient a server, PHP, formuláře, session, připojení k MySQL, cookies, GET a POST, postup tvorby vlastní stránky

Navazující látka: šablona jednoduchého redakčního systému v PHP v [designu webu, redakčních systémech a e-shopu](/it/elektronicke-publikovani/03-redakcni-systemy-a-eshop/), útoky na webové aplikace (SQL injection, XSS) a metody HTTP v [zabezpečení sítí a aplikací](/it/kyberneticka-bezpecnost/02-zabezpeceni-siti-a-aplikaci/).

## Maturitní okruhy

Webové programování se u ústní zkoušky nezkouší – podle [maturitních okruhů IT](/it/reference/maturitni-okruhy/) je součástí praktické zkoušky a maturitní práce. Souvisí s ním okruh 20 (zranitelnost webových aplikací – HTTP, SQL injection, XSS) z kybernetické bezpečnosti.

## Co je jen okrajové

- **Volba konkrétního jazyka** – ŠVP jazyk nepředepisuje; princip klient–server a zpracování formuláře je stejný v PHP, ASP.NET i Node.js.
- **Nastavení vývojového prostředí** (XAMPP, WAMP) – praktická záležitost do hodin.
- Úplný výčet funkcí PHP pro řetězce a pole – stačí vědět, co se s nimi dá dělat.
