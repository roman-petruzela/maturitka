---
title: "Pasivní síťové prvky a kabeláž"
order: 6
source: "IT/11. Aktivní a pasivní síťové prvky.docx; site/01_Sitovy_HW_pasivni_prvky_kabely_KOAX_UTP.pdf; IT/Datové-sítě.docx"
---

**Pasivní prvky** signál jen vedou – nezesilují, nezpracovávají, nepotřebují napájení: kabely, konektory, zásuvky, patch panely, rozvaděče, optické vany. Patří sem i **přenosové médium**. Aktivní prvky: [aktivní síťové prvky a síťová karta](/it/pocitacove-site/07-aktivni-sitove-prvky-a-sitova-karta/).

## Přenosová média

Data lze přenášet:

- **elektricky** po metalických vodičích – kroucená dvoulinka, koax,
- **světlem** po optických vláknech,
- **elektromagnetickými vlnami** vzduchem – rádio, mikrovlny, infračervené.

### Vlastnosti přenosových médií

| Vlastnost | Význam |
| --- | --- |
| odolnost proti rušení (EMI) | vliv motorů, zářivek, telefonů… |
| šířka pásma | kolik dat projde (Hz, b/s) |
| útlum | ztráta signálu v dB na délku; omezuje délku kabelu |
| impedance | Ω; dvoulinka 100 Ω, koax Ethernet 50 Ω, TV 75 Ω |
| přeslech | rušení ze sousedního páru (dB) |
| max. délka segmentu | dosah bez obnovení signálu |
| cena a instalace | kabel, konektory, práce, ohebnost |

## Koaxiální kabel

**Koax („souosý“)**: měděný **vnitřní vodič** → izolant (**dielektrikum**) → **vnější vodič** (opletení/fólie = stínění) → **plášť**. Společná osa; **nesymetrický**.

<img src="/images/content/it/pocitacove-site/pasivni-sitove-prvky-a-kabelaz/01.webp" alt="Řez koaxiálním kabelem" width="560" loading="lazy" decoding="async">

- **Základní pásmo** = jeden kanál; **přeložené pásmo** = více analogových signálů (kabelová TV ~50–750 MHz).
- **Tlustý** (≈ 1 cm, žlutý, 10BASE5, 500 m) a **tenký** (≈ 0,5 cm, 10BASE2, 185 m, **BNC**, T-odbočky, terminátory 50 Ω).
- Plus: odolný proti rušení, snadná instalace. Mínus: mechanicky choulostivý, dražší, v LAN zastaralý (10 Mb/s, sběrnice).
- Dnes: kabelová TV, **HFC** (optika k páteři, koax k uživateli), anténa – router.

## Kroucená dvoulinka (twisted pair, TP)

Nejčastěji **4 páry** měděných vodičů; vodiče v páru jsou **symetrické** a **zkroucené**. Konektor **RJ-45** (8P8C), vnitřní rozvody.

### Proč kroucená

Souběžné vodiče fungují jako **anténa** – vyzařují a přijímají rušení. **Zkroucení** rušení v páru vyruší a sníží vyzařování. Páry mají různou hustotu zkroucení, aby se navzájem nerušily. Při silném rušení → stíněná dvoulinka.

### Historie

Původně telefonní rozvody. V USA měly nové budovy předimenzované nevyužité telefonní kabely → Ethernet se upravil i na dvoulinku (10BASE-T, 1990).

### Složení a varianty

- **Vodiče** – měď v párech. **Lanko** (ohebné) pro patch kabely, **drát** pro pevné rozvody ve zdech.
- **Izolace** každého vodiče.
- **Stínění** (jen stíněné varianty) – fólie kolem páru, opletení kolem všech.
- **Plášť** – PVC (*nonplenum*) nebo teflon/Kynar (*plenum*, ve vzduchotechnice, méně dýmí).

| Označení | Stínění | Poznámka |
| --- | --- | --- |
| **UTP** (U/UTP) | žádné | nejlevnější, nejběžnější, citlivější na šum |
| **FTP** (F/UTP) | fólie kolem všech párů | lepší odolnost |
| **STP** (S/FTP) | opletení + fólie kolem každého páru | nejlepší ochrana, ale tuhý; nutné uzemnění |

### Kategorie kroucené dvoulinky

| Kategorie | Pásmo | Použití |
| --- | --- | --- |
| Cat 3 | 16 MHz | telefon, 10BASE-T |
| Cat 4 | 20 MHz | Token Ring 16 Mb/s; nepoužívá se |
| Cat 5 | 100 MHz | 100BASE-TX |
| **Cat 5e** | 100 MHz | 1 Gb/s; nejrozšířenější |
| Cat 6 | 250 MHz | 1 Gb/s, 10 Gb/s do 55 m |
| Cat 6A | 500 MHz | 10 Gb/s na 100 m |
| Cat 7 / 7A | 600 / 1 000 MHz | vždy S/FTP, konektory GG45, TERA; TIA neuznává |
| Cat 8 | 2 000 MHz | 25/40 Gb/s do 30 m, datová centra |

### Omezení a vliv na topologii

- Jen **dvoubodové spoje**, max. **100 m** (90 m pevně + 10 m patch kabely).
- Nejde odbočovat → žádná sběrnice; rozbočuje aktivní prvek (hub, dnes switch) → **hvězda**.
- Plus: levná, snadná instalace, stíněná dobře odolává. Mínus: UTP citlivější na šum než koax, krátký dosah.

### Barevné značení a zapojení

Páry **oranžový, zelený, modrý, hnědý**, druhý vodič vždy bílý s proužkem → 8 vodičů. Pořadí určuje **EIA/TIA-568**: **T568A** a **T568B** (liší se prohozením oranžového a zeleného páru; evropsky ISO/IEC 11801). U nás častěji T568B.

| Pin | T568A | T568B |
| --- | --- | --- |
| 1 | bílo-zelený | bílo-oranžový |
| 2 | zelený | oranžový |
| 3 | bílo-oranžový | bílo-zelený |
| 4 | modrý | modrý |
| 5 | bílo-modrý | bílo-modrý |
| 6 | oranžový | zelený |
| 7 | bílo-hnědý | bílo-hnědý |
| 8 | hnědý | hnědý |

- **Přímý kabel** – stejně na obou koncích (B–B). Různá zařízení: PC – switch, router – switch.
- **Křížený** – A na jednom, B na druhém konci; prohodí vysílací (1, 2) a přijímací (3, 6) pár. Stejná zařízení: PC – PC, switch – switch. Gigabit kříží všechny páry.
- **Auto-MDI-X** – dnešní zařízení překříží elektronicky sama → křížený kabel netřeba.

<img src="/images/content/it/pocitacove-site/pasivni-sitove-prvky-a-kabelaz/02.webp" alt="Zapojení T-568A a T-568B na koncích kříženého kabelu" width="414" loading="lazy" decoding="async">

## Optický kabel

Data **světlem**: zdroj **LED** nebo **laser**, na konci **fotodetektor**.

![Jednovidové vlákno s tenkým jádrem a jednou cestou světla a mnohovidové vlákno se silným jádrem a více cestami odrážejícími se od pláště](/images/content/it/pocitacove-site/pasivni-prvky/optika.webp)

- **Jádro** (sklo/plast) + **plášť (cladding)** s nižším indexem lomu + ochrany. Na rozhraní **totální odraz** → světlo zůstává v jádře.
- **Jednovidové (SM)** – jádro ~9 µm, jedna cesta, malý útlum a disperze, desítky km, laser 1 310/1 550 nm; dražší koncová zařízení.
- **Mnohovidové (MM)** – jádro 50/62,5 µm, více cest různé délky → **disperze** („rozmazání“); stovky m až km; LED/VCSEL 850 nm.
- **Útlum** – nečistoty a rozptyl ve skle, ohyby, mikroohyby, špatné spoje.
- **Konektory** SC, LC, ST, FC, E2000, MT-RJ. Vlákna se **svařují**; svary a rezervy v **optické vaně**, na konektory přes pigtaily.
- Plus: obrovská rychlost a dosah, **imunita vůči rušení**, galvanické oddělení budov, těžký odposlech, lehkost. Mínus: cena, náročná montáž, citlivost na ohyb.
- Použití: páteře, propojení budov, FTTH, datová centra.

## Bezdrátový přenos

- Rádiové vlny (Wi-Fi, Bluetooth, mobil), mikrovlny (směrové spoje, satelity), infračervené (IrDA); laserové spoje na přímou viditelnost.
- **WLAN** = bezdrátová LAN obecně; **IEEE 802.11** = norma; **Wi-Fi** = obchodní značka certifikovaných zařízení.
- Pásma 2,4 / 5 / 6 GHz (bezlicenční) i licencovaná. Vyšší frekvence = vyšší rychlost, ale menší dosah a horší průchod zdmi.
- Signál nejde prostorově omezit → nutné šifrování (WPA2, WPA3).

Viz [Wi-Fi](/it/pocitacove-site/10-bezdratove-site-wi-fi/).

## Strukturovaná kabeláž

**Strukturovaná kabeláž** = univerzální rozvod budovy podle norem (ISO/IEC 11801, EN 50173, TIA-568): 4párové kabely + optika pro síť, telefony, kamery. Zásuvky se dávají i tam, kde zatím nejsou potřeba. Životnost 15–20 let.

![Kanál strukturované kabeláže: počítač – patch kabel – zásuvka – horizontální kabeláž max. 90 m – patch panel v rozvaděči – patch kabel – switch, celkem max. 100 m](/images/content/it/pocitacove-site/pasivni-prvky/kabelaz.webp)

### Části strukturované kabeláže

- **Datové zásuvky** – u uživatele, obvykle 2× RJ-45.
- **Horizontální kabeláž** – drát od zásuvky do rozvaděče na patře, max. 90 m.
- **Patch panely** – v rozvaděči; port = jedna zásuvka; správce jimi připojuje uživatele ke switchům.
- **Patch kabely** (lanko) – PC ↔ zásuvka, patch panel ↔ switch.
- **Páteřní (vertikální) kabeláž** – mezi rozvaděči a budovami, obvykle optika.
- **Rack** – skříň šířky **19″**, výška v **U** (1 U = 44,45 mm); patch panely, switche, routery, servery, vyvazovací panely, napájení, UPS, ventilace.

Celý kanál ≤ 100 m. Součástí je **měření a certifikace** a **dokumentace** (číslování zásuvek a portů), viz [technická dokumentace sítě](/it/pocitacove-site/19-technicka-dokumentace-site/).

## Otázky k opakování

1. Které vlastnosti přenosových médií sledujeme? ||odolnost proti rušení, šířku pásma, útlum, impedanci, přeslech, maximální délku, cenu||
2. Proč jsou vodiče dvoulinky zkroucené? ||rušení zachycené oběma vodiči páru se vyruší a pár méně vyzařuje – nechová se jako anténa||
3. Jaký je rozdíl mezi UTP a STP? ||UTP je nestíněná; STP má stínění kolem párů nebo celého svazku, lépe odolává rušení, ale je tužší a dražší||
4. Jakou kategorii kabelu potřebujeme pro 1 Gb/s a jakou pro 10 Gb/s na 100 m? ||Cat 5e (lépe Cat 6); Cat 6A||
5. Jaká je maximální délka kabelu z kroucené dvoulinky? ||100 m (90 m pevný rozvod + 10 m propojovací kabely)||
6. Čím se liší zapojení T568A a T568B a co je přímý a křížený kabel? ||prohozený oranžový a zelený pár; přímý má na obou koncích stejné zapojení, křížený A na jednom a B na druhém konci||
7. Proč dnes křížený kabel většinou nepotřebujeme? ||síťová zařízení mají Auto-MDI-X a překřížení zařídí sama||
8. Porovnejte jednovidové a mnohovidové optické vlákno. ||jednovidové: tenké jádro 9 µm, jedna cesta světla, laser, desítky km; mnohovidové: jádro 50/62,5 µm, více cest, disperze, stovky m||
9. Jaké jsou výhody optiky oproti metalickému kabelu? ||větší rychlost a dosah, necitlivost na elektromagnetické rušení, galvanické oddělení, obtížný odposlech||
10. Z jakých částí se skládá strukturovaná kabeláž? ||zásuvky, horizontální kabely, patch panely a patch kabely v rozvaděči, páteřní kabeláž, rack||
