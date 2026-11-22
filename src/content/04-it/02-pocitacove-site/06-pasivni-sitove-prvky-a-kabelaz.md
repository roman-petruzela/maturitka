---
title: "Pasivní síťové prvky a kabeláž"
order: 6
source: "IT/11. Aktivní a pasivní síťové prvky.docx; site/01_Sitovy_HW_pasivni_prvky_kabely_KOAX_UTP.pdf; IT/Datové-sítě.docx"
---

**Pasivní prvky** signál jen vedou – nezesilují, nezpracovávají, nepotřebují napájení: kabely, konektory, zásuvky, patch panely, rozvaděče. Patří sem i **přenosové médium**. Aktivní prvky: [aktivní síťové prvky a síťová karta](/it/pocitacove-site/07-aktivni-sitove-prvky-a-sitova-karta/).

## Přenosová média

Data se přenášejí **elektricky** po metalických vodičích (kroucená dvoulinka, koax), **světlem** po optických vláknech a **elektromagnetickými vlnami** vzduchem (rádio, mikrovlny, infračervené).

Sledované vlastnosti: odolnost proti rušení, **šířka pásma**, **útlum** (omezuje délku kabelu), **impedance** (dvoulinka 100 Ω, koax 50 Ω), **přeslech** (rušení ze sousedního páru), max. délka segmentu, cena.

## Koaxiální kabel

Měděný **vnitřní vodič** → izolant → **vnější vodič** (stínění) → plášť; společná osa.

<img src="/images/content/it/pocitacove-site/pasivni-sitove-prvky-a-kabelaz/01.webp" alt="Řez koaxiálním kabelem" width="560" loading="lazy" decoding="async">

- **Tlustý** (10BASE5, 500 m) a **tenký** (10BASE2, 185 m, konektor **BNC**, T-odbočky, terminátory 50 Ω).
- Plus: odolný proti rušení. Mínus: mechanicky choulostivý, v LAN zastaralý (10 Mb/s, sběrnice).
- Dnes: kabelová TV, **HFC** (optika k páteři, koax k uživateli).

## Kroucená dvoulinka (TP)

Nejčastěji **4 páry** měděných vodičů, každý pár **zkroucený**; konektor **RJ-45**. Souběžné vodiče fungují jako **anténa**, **zkroucení** rušení v páru vyruší. Dvoulinka umí jen **dvoubodové spoje** a nejde odbočovat → rozbočuje aktivní prvek (switch) → topologie **hvězda**. Max. délka **100 m** (90 m pevný rozvod + 10 m patch kabely).

| Označení | Stínění | Poznámka |
| --- | --- | --- |
| **UTP** | žádné | nejlevnější, nejběžnější, citlivější na šum |
| **FTP** | fólie kolem všech párů | lepší odolnost |
| **STP** | opletení + fólie kolem každého páru | nejlepší ochrana, tuhý, nutné uzemnění |

| Kategorie | Pásmo | Použití |
| --- | --- | --- |
| Cat 3 | 16 MHz | telefon, 10BASE-T |
| Cat 5 | 100 MHz | 100BASE-TX |
| **Cat 5e** | 100 MHz | 1 Gb/s; nejrozšířenější |
| Cat 6 | 250 MHz | 1 Gb/s, 10 Gb/s do 55 m |
| Cat 6A | 500 MHz | 10 Gb/s na 100 m |
| Cat 7, 8 | 600 – 2 000 MHz | vždy stíněné; datová centra |

### Zapojení a typy kabelů

Páry **oranžový, zelený, modrý, hnědý**, druhý vodič vždy bílý s proužkem. Pořadí určuje **EIA/TIA-568**: **T568A** a **T568B** (liší se prohozením oranžového a zeleného páru), u nás častěji T568B.

- **Přímý kabel** – stejné zapojení na obou koncích; různá zařízení (PC – switch).
- **Křížený** – A na jednom, B na druhém konci; stejná zařízení (PC – PC, switch – switch).
- **Auto-MDI-X** – dnešní zařízení překříží sama, křížený kabel netřeba.

<img src="/images/content/it/pocitacove-site/pasivni-sitove-prvky-a-kabelaz/02.webp" alt="Zapojení T-568A a T-568B na koncích kříženého kabelu" width="414" loading="lazy" decoding="async">

## Optický kabel

Data **světlem**: zdroj **LED** nebo **laser**, na konci **fotodetektor**.

![Jednovidové vlákno s tenkým jádrem a jednou cestou světla a mnohovidové vlákno se silným jádrem a více cestami odrážejícími se od pláště](/images/content/it/pocitacove-site/pasivni-prvky/optika.webp)

- **Jádro** + **plášť** s nižším indexem lomu; na rozhraní **totální odraz** drží světlo v jádře.
- **Jednovidové (SM)** – jádro ~9 µm, jedna cesta, laser, desítky km. **Mnohovidové (MM)** – jádro 50/62,5 µm, více cest a **disperze**, stovky m až km.
- **Konektory** SC, LC, ST; vlákna se **svařují** a ukládají v **optické vaně**.
- Plus: obrovská rychlost a dosah, **imunita vůči rušení**, těžký odposlech. Mínus: cena, náročná montáž, citlivost na ohyb.
- Použití: páteře, propojení budov, FTTH, datová centra.

## Bezdrátový přenos

Rádiové vlny (Wi-Fi, Bluetooth, mobil), mikrovlny (směrové spoje, satelity), infračervené záření. **IEEE 802.11** = norma, **Wi-Fi** = obchodní značka. Pásma 2,4 / 5 / 6 GHz; vyšší frekvence = vyšší rychlost, ale menší dosah. Signál nejde omezit prostorově → nutné šifrování (WPA2, WPA3). Viz [Wi-Fi](/it/pocitacove-site/10-bezdratove-site-wi-fi/).

## Strukturovaná kabeláž

**Strukturovaná kabeláž** = univerzální rozvod budovy podle norem (ISO/IEC 11801, TIA-568) pro síť, telefony, kamery; životnost 15–20 let.

![Kanál strukturované kabeláže: počítač – patch kabel – zásuvka – horizontální kabeláž max. 90 m – patch panel v rozvaděči – patch kabel – switch, celkem max. 100 m](/images/content/it/pocitacove-site/pasivni-prvky/kabelaz.webp)

- **Datové zásuvky** u uživatele (obvykle 2× RJ-45).
- **Horizontální kabeláž** – drát od zásuvky do rozvaděče na patře, max. 90 m.
- **Patch panel** v rozvaděči – port = jedna zásuvka; **patch kabely** (lanko) propojují panel se switchem.
- **Páteřní (vertikální) kabeláž** – mezi rozvaděči a budovami, obvykle optika.
- **Rack** – skříň šířky **19″**, výška v **U** (1 U = 44,45 mm).

Celý kanál ≤ 100 m, součástí je měření a [dokumentace](/it/pocitacove-site/19-technicka-dokumentace-site/).

## Otázky k opakování

1. Které vlastnosti přenosových médií sledujeme? ||odolnost proti rušení, šířku pásma, útlum, impedanci, přeslech, maximální délku, cenu||
2. Proč jsou vodiče dvoulinky zkroucené? ||rušení zachycené oběma vodiči se vyruší a pár méně vyzařuje||
3. Jaký je rozdíl mezi UTP a STP? ||UTP je nestíněná; STP má stínění, lépe odolává rušení, ale je tužší a dražší||
4. Jakou kategorii potřebujeme pro 1 Gb/s a jakou pro 10 Gb/s na 100 m? ||Cat 5e (lépe Cat 6); Cat 6A||
5. Jaká je maximální délka kabelu z dvoulinky? ||100 m (90 m pevný rozvod + 10 m propojovací kabely)||
6. Čím se liší T568A a T568B a co je přímý a křížený kabel? ||prohozený oranžový a zelený pár; přímý má na obou koncích stejné zapojení, křížený A a B||
7. Porovnejte jednovidové a mnohovidové vlákno. ||jednovidové: tenké jádro, jedna cesta, laser, desítky km; mnohovidové: silnější jádro, více cest, disperze, stovky m||
8. Jaké jsou výhody optiky oproti metalickému kabelu? ||rychlost a dosah, necitlivost na rušení, těžký odposlech||
9. Z jakých částí se skládá strukturovaná kabeláž? ||zásuvky, horizontální kabely, patch panely a patch kabely v rozvaděči, páteřní kabeláž, rack||
