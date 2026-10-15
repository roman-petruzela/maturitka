---
title: "Publikování webu – doména, hosting, FTP a SEO"
order: 9
tags: ["doplněno"]
---
Hotový web se musí dostat na **server** připojený k internetu, aby ho mohl kdokoli otevřít pod srozumitelnou adresou.

## Doména

**Doména** je adresa webu, např. `skola.cz`. Skládá se z domény nejvyšší úrovně (TLD – `.cz`, `.com`, `.eu`) a vlastního jména. Systém **DNS** ji překládá na IP adresu serveru (podrobně v [DNS – systém doménových jmen](/it/pocitacove-site/17-dns-system-domenovych-jmen/)).

- doména se registruje u **registrátora** na určitou dobu (obvykle rok) a platí se za ni
- domény `.cz` spravuje sdružení CZ.NIC; volnost jména lze ověřit službou WHOIS
- v nastavení domény se záznamem DNS určí, na který server míří (záznam `A` – IPv4 adresa, `AAAA` – IPv6, `CNAME` – jiné jméno, `MX` – poštovní server)

## Webhosting

**Hosting** = pronajaté místo na serveru, který je nepřetržitě připojený k internetu.

| Druh | Popis |
| --- | --- |
| freehosting | zdarma, ale s reklamou a omezeními (místo, výkon, vlastní doména) |
| sdílený webhosting | jeden server dělí mnoho webů; levný, stačí pro běžný web, často s PHP a databází MySQL |
| VPS (virtuální server) | vlastní virtuální stroj s vlastním operačním systémem a plnou správou |
| dedikovaný server | celý fyzický server pro jeden web nebo firmu |
| statický hosting (GitHub Pages, Netlify, Vercel) | jen pro stránky bez serverových skriptů, nasazuje se z repozitáře Git |

Při výběru se sleduje: podpora PHP a databáze (nutná pro redakční systém), velikost prostoru a přenosů, certifikát HTTPS, zálohování, e-mailové schránky, umístění serveru a podpora.

## Nahrání souborů

- **FTP klient** (FileZilla, Total Commander) – připojí se k serveru pomocí adresy, uživatelského jména a hesla od poskytovatele a soubory se přetáhnou do kořenové složky webu (často `www` nebo `public_html`).
- **FTP** přenáší heslo i data nešifrovaně; bezpečnější je **SFTP** (přes SSH, port 22) nebo **FTPS** (FTP s TLS). Klasické FTP používá port 21.
- Úvodní stránka se musí jmenovat **`index.html`** (nebo `index.php`) – server ji vrátí, když adresa nekončí názvem souboru.
- Na serveru (Linux) se rozlišují velká a malá písmena: `Obrazek.JPG` není totéž co `obrazek.jpg`. Názvy souborů proto bez diakritiky, mezer a velkých písmen, odkazy relativní (`img/logo.png`, ne `C:\Users\…`).
- Redakční systém (WordPress) se nahraje stejně a pak se nainstaluje přes prohlížeč – připojí se k databázi, kterou hosting poskytuje.

## HTTPS

Certifikát (dnes zdarma, např. od Let's Encrypt, hosting ho většinou zařídí sám) zapne šifrované spojení **HTTPS**. Bez něj prohlížeč u stránek s formulářem upozorňuje „Nezabezpečeno“ a vyhledávače web znevýhodňují. Princip certifikátů popisuje [kybernetická bezpečnost](/it/kyberneticka-bezpecnost/01-zaklady-a-utoky/#veřejná-infrastruktura-klíčů-pki-a-digitální-certifikáty).

## Před zveřejněním

- **validace** – kód HTML ověřit validátorem W3C (validator.w3.org), CSS validátorem CSS (jigsaw.w3.org/css-validator)
- **testování** v několika prohlížečích a na mobilu, kontrola nefunkčních odkazů a chybějících obrázků
- **optimalizace** – zmenšené a zkomprimované obrázky, minifikované CSS a JS
- **přístupnost** – texty `alt` u obrázků, dostatečný kontrast, ovladatelnost klávesnicí

## SEO – optimalizace pro vyhledávače

Cílem je, aby vyhledávač (Google, Seznam) stránku pochopil a zobrazil vysoko ve výsledcích.

- **`<title>`** – jedinečný a výstižný titulek každé stránky (zobrazuje se jako nadpis ve výsledcích hledání)
- **`<meta name="description">`** – krátký popis stránky (úryvek ve výsledcích)
- **struktura nadpisů** – jeden `<h1>`, pod ním logicky `<h2>`, `<h3>`; sémantické prvky HTML5
- **čitelné adresy** – `/kontakt/` místo `/index.php?id=17`
- **texty `alt`** u obrázků, rychlé načítání, responzivita (mobilní verze je pro vyhledávač rozhodující)
- **obsah** – kvalitní a aktuální text, odkazy z jiných webů
- soubory **`robots.txt`** (co nemají roboti procházet) a **`sitemap.xml`** (seznam stránek webu)
- web se přihlásí do nástrojů pro správce (Google Search Console), kde je vidět, jak ho vyhledávač vidí

## Shrnutí

- Doména (u registrátora) + hosting (místo na serveru) + nasměrování v DNS.
- Soubory se nahrají přes FTP klienta, bezpečněji SFTP; úvodní stránka `index.html`.
- HTTPS certifikát, validace, testování, optimalizace obrázků.
- SEO: `title`, `description`, nadpisy, `alt`, rychlost, mobilní verze, `sitemap.xml`.
