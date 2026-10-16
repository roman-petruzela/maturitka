---
title: "Pasivní síťové prvky a kabeláž"
order: 6
source: "IT/11. Aktivní a pasivní síťové prvky.docx; site/01_Sitovy_HW_pasivni_prvky_kabely_KOAX_UTP.pdf; IT/Datové-sítě.docx"
---

**Pasivní síťové prvky** jsou části sítě, které signál jen vedou – nezesilují ho, nezpracovávají a nepotřebují napájení: kabely, konektory, zásuvky, patch panely, rozvaděče (racky), optické vany a montážní prvky. Patří k nim i **přenosové médium** – prostředí, kterým se šíří signál nesoucí data, hlas nebo obraz. Tato stránka popisuje vlastnosti médií, metalické a optické kabely, bezdrátový přenos a strukturovanou kabeláž. Zařízení, která se na komunikaci podílejí aktivně, popisuje stránka [aktivní síťové prvky a síťová karta](/it/pocitacove-site/07-aktivni-sitove-prvky-a-sitova-karta/).

## Přenosová média

Počítačová síť vzniká propojením dvou a více počítačů prostřednictvím jejich síťových rozhraní; k fyzickému propojení slouží přenosová média. Data lze přenášet:

- **elektrickým signálem** po metalických vodičích – kroucená dvoulinka, koaxiální kabel,
- **světlem** (světelnými impulzy o určité vlnové délce) po optických vláknech,
- **elektromagnetickými vlnami** vzduchem – rádiové vlny, mikrovlny, infračervené záření.

### Vlastnosti přenosových médií

| Vlastnost | Význam |
| --- | --- |
| odolnost proti rušení (EMI) | jak moc médium ovlivňuje vnější elektromagnetické rušení – motory, zářivky, lékařské přístroje, mobilní telefony |
| šířka pásma | kolik dat lze médiem přenést; udává se v Hz nebo b/s |
| útlum | ztráta síly signálu na médiu; udává se v dB na jednotku délky a omezuje maximální délku kabelu |
| impedance | odpor, který vodič klade střídavému proudu, v ohmech (Ω); kroucená dvoulinka 100 Ω, koax pro Ethernet 50 Ω, televizní 75 Ω |
| přeslech | rušení signálem ze sousedního páru vodičů, v dB |
| maximální délka segmentu | jak daleko lze signál přenést bez obnovení |
| cena a snadnost instalace | cena kabelu, konektorů a práce, ohebnost, hmotnost |

## Koaxiální kabel

**Koaxiální („souosý“) kabel** má uprostřed měděný **vnitřní vodič**, kolem něj izolant (**dielektrikum**), pak **vnější vodič** ve tvaru opletení nebo fólie, který slouží zároveň jako stínění, a nakonec ochranný **plášť**. Oba vodiče mají společnou osu – odtud název. Na rozdíl od kroucené dvoulinky je **nesymetrický** (vodiče nejsou rovnocenné).

<img src="/images/content/it/pocitacove-site/pasivni-sitove-prvky-a-kabelaz/01.webp" alt="Řez koaxiálním kabelem" width="560" loading="lazy" decoding="async">

- Varianty podle přenosu: v **základním pásmu** nese jediný kanál (jednu zprávu), v **přeloženém pásmu** několik analogových signálů současně (kabelová televize, přibližně 50–750 MHz, dosah kilometry).
- **Tlustý koax** (průměr asi 1 cm, žlutý, 10BASE5, segment 500 m) a **tenký koax** (asi 0,5 cm, 10BASE2, segment 185 m, konektory **BNC**, T-odbočky a terminátory 50 Ω).
- Výhody: velká odolnost proti rušení a dobré odstínění přeslechů, snadná instalace. Nevýhody: je náchylný k mechanickému poškození, tlustší a dražší než dvoulinka, v sítích LAN je zastaralý (rychlost jen 10 Mb/s, sběrnicová topologie).
- Dnešní použití: rozvody kabelové televize, sítě **HFC** (Hybrid Fiber-Coax – část směrem k páteři je optická, nejblíže k uživateli koaxiální), propojení antény s Wi-Fi routerem nebo vysílačem.

## Kroucená dvoulinka (twisted pair, TP)

Kroucená dvoulinka se skládá z několika – nejčastěji **čtyř – párů** měděných vodičů. Vodiče v páru jsou rovnocenné (**symetrické**) a jsou kolem sebe pravidelně **zkrouceny** (anglicky *twisted*, odtud název i hovorové „twist“). Připojuje se konektorem **RJ-45** (8P8C) a používá se pro vnitřní rozvody.

### Proč kroucená

Každé dva souběžně vedoucí vodiče se chovají jako **anténa**: při přenosu signálu vyzařují do okolí elektromagnetické vlny a zároveň přijímají rušení z okolí. Při dnešních přenosových rychlostech to není zanedbatelné. Pravidelným zkroucením se rušení zachycené oběma vodiči páru navzájem vyruší a vyzařování se sníží na přijatelnou míru – neohrožuje zdraví ani neovlivňuje jiná zařízení. Jednotlivé páry mají různou hustotu zkroucení, aby se navzájem co nejméně rušily. Pokud by vyzařování nebo okolní rušení bylo stále příliš velké, použije se stíněná dvoulinka.

### Historie

Kroucená dvoulinka se původně používala pro telefonní rozvody. Do počítačových sítí se dostala díky tomu, že se v USA nové budovy vybavovaly značně předimenzovanými telefonními rozvody, které zůstávaly nevyužité. Ethernet se proto upravil, aby místo po koaxiálním kabelu „běhal“ i po dvoulince (10BASE-T, 1990).

### Složení a varianty

- **Vodiče** – z mědi, vždy v párech. **Lanko (licna)** je ohebné a používá se pro propojovací kabely k počítači, kde se kabel ohýbá a je mechanicky namáhán. **Drát** se používá pro pevné rozvody v lištách a ve zdech.
- **Izolace (dielektrikum)** – izoluje každý vodič zvlášť.
- **Stínění** – jen u stíněných variant: fólie kolem každého páru, opletení (nebo fólie) kolem všech párů.
- **Plášť** – vnější obal z PVC (běžné, *nonplenum*) nebo z teflonu či Kynaru (*plenum* – pro vedení ve vzduchotechnice, při hoření méně dýmí).

| Označení | Stínění | Poznámka |
| --- | --- | --- |
| **UTP** (U/UTP) | žádné | nejlevnější a nejběžnější; citlivější na šum |
| **FTP** (F/UTP) | fólie kolem všech párů | lepší odolnost |
| **STP** (S/FTP) | opletení kolem všech párů a fólie kolem každého páru | nejlepší ochrana proti rušení, ale silný, tuhý a hůř se s ním pracuje; stínění musí být uzemněno |

### Kategorie kroucené dvoulinky

| Kategorie | Šířka pásma | Použití |
| --- | --- | --- |
| Cat 3 | 16 MHz | telefonní rozvody, Ethernet 10BASE-T (10 Mb/s) |
| Cat 4 | 20 MHz | Token Ring do 16 Mb/s; prakticky se nepoužívá |
| Cat 5 | 100 MHz | Fast Ethernet 100BASE-TX (100 Mb/s) |
| **Cat 5e** | 100 MHz | Gigabit Ethernet 1000BASE-T; nejrozšířenější kategorie strukturované kabeláže |
| Cat 6 | 250 MHz | Gigabit Ethernet, 10GBASE-T do 55 m |
| Cat 6A | 500 MHz | plnohodnotný 10GBASE-T (10 Gb/s) na 100 m |
| Cat 7 / 7A | 600 / 1 000 MHz | vždy stíněný (S/FTP), speciální konektory (GG45, TERA); americká norma TIA ho neuznává |
| Cat 8 | 2 000 MHz | 25 a 40 Gb/s na vzdálenost do 30 m, propojení v datových centrech |

### Omezení a vliv na topologii

- Kroucená dvoulinka umožňuje jen **dvoubodové spoje** na vzdálenost nejvýše **100 m** (90 m pevného rozvodu + 10 m propojovacích kabelů).
- Na dvoulince nejde dělat odbočky, takže s ní nelze vytvořit sběrnici, se kterou počítal původní Ethernet. Odbočování se proto řeší elektronicky: jeden konec kabelu vede ke stanici, druhý do aktivního prvku (dříve rozbočovače – hubu, dnes přepínače), který signál „rozbočí“. Vzniká **hvězdicová topologie**.
- Výhody: nízká cena, snadná instalace a připojení zařízení, u stíněné verze dobrá ochrana proti rušení. Nevýhody: nestíněná je citlivější na šum než koax, signál se bez obnovení nedá přenést na větší vzdálenost.

### Barevné značení a zapojení

Páry jsou barevně rozlišeny: **oranžový, zelený, modrý a hnědý**; v každém páru je druhý vodič bílý s proužkem barvy páru – celkem 8 vodičů. Pořadí vodičů v konektoru určuje norma **EIA/TIA-568** ve dvou variantách, **T568A** a **T568B**, které se liší prohozením oranžového a zeleného páru (evropským ekvivalentem je ISO/IEC 11801). U nás se častěji používá T568B.

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

- **Přímý kabel** má na obou koncích stejné zapojení (B–B nebo A–A). Spojuje zařízení různého typu: počítač – switch, router – switch.
- **Křížený kabel** (crossover) má na jednom konci zapojení A a na druhém B. Při 10 a 100 Mb/s vysílá stanice piny 1, 2 a přijímá piny 3, 6, takže křížení prohodí vysílací a přijímací pár. Používal se pro spojení zařízení stejného typu: počítač – počítač, switch – switch. Gigabitový Ethernet využívá všechny čtyři páry, křížený kabel pro něj proto kříží všechny páry.
- Dnešní síťové karty a switche mají funkci **Auto-MDI-X** – samy rozpoznají typ kabelu a překřížení zajistí elektronicky, takže křížený kabel už většinou není potřeba.

<img src="/images/content/it/pocitacove-site/pasivni-sitove-prvky-a-kabelaz/02.webp" alt="Zapojení T-568A a T-568B na koncích kříženého kabelu" width="414" loading="lazy" decoding="async">

## Optický kabel

Optický kabel přenáší data **světlem**. Zdrojem světla je **LED** nebo **laser**, na druhé straně ho **fotodetektor** převádí zpět na elektrický signál.

- Optické vlákno má skleněné (případně plastové) **jádro**, kolem něj **plášť (cladding)** s nižším indexem lomu a ochrannou **primární a sekundární ochranu**. Světlo se na rozhraní jádra a pláště **totálně odráží**, takže zůstává uvnitř jádra.
- **Jednovidové (single-mode, SM)** vlákno má tenké jádro (asi 9 µm), světlo se šíří jedinou cestou (videm). Má malý útlum i disperzi a dosah desítky kilometrů; používá laser (1 310 nebo 1 550 nm). Je dražší na koncová zařízení.
- **Mnohovidové (multi-mode, MM)** vlákno má silnější jádro (50 nebo 62,5 µm), paprsek se v něm šíří více cestami, které jsou různě dlouhé – signál se tím „rozmazává“ (**disperze**). Dosah je stovky metrů až jednotky kilometrů; stačí levnější LED nebo VCSEL laser (850 nm).
- **Útlum** vzniká uvnitř vlákna (nečistoty ve skle, rozptyl) a vnějšími vlivy – nevhodným ohybem kabelu, mikroohyby a nerovnostmi, špatnými spoji.
- **Konektory**: SC, LC, ST, FC, E2000, MT-RJ. Vlákna se trvale spojují **svařováním**; svary a rezervy vláken se ukládají do **optické vany** (rozvaděče), kde se vlákna napojují na konektory přes krátké kabely (pigtaily).
- Výhody: velká šířka pásma a rychlost, velký dosah, **necitlivost na elektromagnetické rušení**, galvanické oddělení propojených budov, obtížný odposlech, nízká hmotnost. Nevýhody: vyšší cena, náročnější montáž (svařování, měření), citlivost na ohyb.
- Použití: páteřní sítě, propojení budov, připojení domácností (FTTH), datová centra.

## Bezdrátový přenos

- Vzduchem se šíří rádiové vlny (Wi-Fi, Bluetooth, mobilní sítě), mikrovlny (směrové spoje, satelity) a infračervené záření (IrDA). Laserové spoje přenášejí světlo vzduchem na přímou viditelnost.
- **WLAN** je obecné označení bezdrátové lokální sítě; **IEEE 802.11** je norma, podle které WLAN obvykle funguje; **Wi-Fi** je obchodní značka zařízení certifikovaných podle této normy – nejde tedy o totéž.
- Používají se bezlicenční pásma 2,4 GHz, 5 GHz a 6 GHz i licencovaná pásma. Obecně platí, že vyšší frekvence umožňuje vyšší přenosovou rychlost, ale má menší dosah a hůř prochází překážkami.
- Bezpečnost: prostor, kde lze signál zachytit, nejde přesně omezit, proto je nutné šifrování (WPA2, WPA3).

Podrobně viz [bezdrátové sítě Wi-Fi](/it/pocitacove-site/10-bezdratove-site-wi-fi/).

## Strukturovaná kabeláž

**Strukturovaná kabeláž** je univerzální kabelový rozvod budovy podle norem (ISO/IEC 11801, EN 50173, TIA-568). Používá datové kabely se čtyřmi kroucenými páry a optické kabely a podporuje přenos digitálních i analogových signálů – počítačovou síť, telefony, kamery. Přípojná místa se instalují i tam, kde zatím nejsou potřeba, aby se v budoucnu nemuselo znovu vrtat a tahat kabely. Počítá se s dlouhou technickou i morální životností (15–20 let).

### Části strukturované kabeláže

- **Telekomunikační (datové) zásuvky** – na straně uživatele; slouží k připojení koncových zařízení (počítač, notebook, IP telefon, tiskárna). Mívají dva porty RJ-45.
- **Horizontální kabeláž** – pevné kabely (drát) od zásuvek do rozvaděče na patře; nejvýše 90 m.
- **Patch panely** – v rozvaděčích v technické místnosti, běžným uživatelům nepřístupné; každý port panelu je napojen na jednu zásuvku. Správce sítě jimi připojuje uživatele k aktivním prvkům (switchům, telefonní ústředně).
- **Patch kabely** (propojovací kabely, lanko) – propojují počítač se zásuvkou a v rozvaděči port patch panelu s portem switche.
- **Páteřní (vertikální) kabeláž** – propojuje rozvaděče na patrech a v budovách mezi sebou, obvykle opticky.
- **Datový rozvaděč (rack)** – skříň se standardní šířkou **19 palců**; výška se udává v jednotkách **U** (1 U = 44,45 mm). Obsahuje patch panely, switche, routery, servery, vyvazovací panely pro úhledné vedení kabelů, napájecí lišty a záložní zdroj (UPS) a ventilaci.

Celý kanál od portu switche přes patch panel a horizontální kabel po zásuvku a počítač nesmí u kroucené dvoulinky překročit 100 m. Součástí instalace je **měření a certifikace** kabeláže a **dokumentace** – číslování zásuvek a portů, viz [technická dokumentace sítě](/it/pocitacove-site/19-technicka-dokumentace-site/).

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
