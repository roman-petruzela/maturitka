---
title: "Zobrazovací soustava"
order: 17
source: "uvt/cv23-25_Zobrazovaci_soustava.pdf"
---
**Zobrazovací soustava** = dva prvky:

- **zobrazovací adaptér** (grafická / video karta) – vytváří obraz,
- **zobrazovač** (CRT, LCD monitor, dataprojektor) – obraz zobrazí.

Dva režimy:

- **textový** – obrazovka rozdělená na políčka, každé jeden znak (typicky 80 × 25); rychlý, nenáročný, staré programy,
- **grafický** – matice bodů; rozsvícením bodů se nakreslí cokoli, barvy téměř neomezené. Nejdůležitější je **rozlišení** (body na řádek × počet řádků); víc pixelů = jemnější obraz.

## Pixel

**Pixel** (picture element):

- nejmenší jednotka rastrové grafiky = jeden bod na monitoru,
- čtvercová síť, každý pixel má souřadnice,
- barevný pixel = tři body **R, G, B**,
- u analogových monitorů jde velikost pixelu měnit rozlišením,
- **LCD** má počet fyzických pixelů pevný → jiné než **nativní rozlišení** se přepočítává a obraz se deformuje (rozmaže).

## Grafická karta

Kreslí obraz – jádro soustavy; v podstatě **samostatný počítač** a důležitý ukazatel kvality PC.

## Hardware grafické karty

- **GPU** (Graphics Processing Unit) – mikroprocesor řídící tvorbu obrazu,
- **paměť** (VRAM) – GPU do ní ukládá hotový obraz, odtud jde na obrazovku; výkon limituje **frekvence a šířka sběrnice** GPU ↔ paměť,
- **RAMDAC** – převodník digitálně → analogově pro analogový výstup (VGA),
- vysoké kmitočty → důležité **chlazení**,
- další obvody: TV tuner, **VIVO** (Video In Video Out),
- **konektory** podle vybavení,
- připojení k desce: **AGP** (zastaralé), dnes **PCIe ×16**.

## GPU

- řídicí jednotka adaptéru; určuje zaměření, výkon a cenu,
- výrobci: **AMD** (dříve ATI), **Nvidia**, **Intel**,
- úkol: vytvářet pixely obrazu.

**Pipeline a texely:**

- dříve jedna **pipeline** = jeden pixel za takt, jedna textura za cyklus (**fillrate**),
- pro 3D se na pixel nanáší víc textur; elementární textura = **texel** (pixel se skládá z více texelů),
- dnes **více paralelních pipeline**; obraz se rozloží na čtverce, každá pipeline vykreslí jeden → rychlejší tvorba,
- v pipeline jsou **shadery**: **Vertex Shader** – 3D objekty, poloha v prostoru, světlo; **Pixel Shader** – barva a průhlednost.

**Charakteristiky GPU:**

- počet texturovacích pipeline (= počet shaderů, základní kritérium),
- texely na pipeline za takt,
- teoretický **pixel fill-rate** a **texel fill-rate** (pixel fill-rate × texely na pipeline),
- **frekvence** (350–1 000 MHz; vyšší = víc pixelů),
- **výrobní technologie** čipu.

**Paměť grafické karty:**

- typ **GDDR3 – GDDR6**, kapacita dnes od 1 GB výš,
- takt a typ (GDDR5 = 4 bity za takt),
- **šířka paměťové sběrnice** (256–320 b a víc).

## API

Obraz řídí i software – **API** (aplikační rozhraní): **Microsoft DirectX** (součást Windows; DirectCompute, Shader Model) a **OpenGL**. Verzi DirectX zjistíš příkazem `dxdiag`. Nvidia přidává vlastní technologie (CUDA, SLI, 3D Vision, G-Sync, FSAA).

## Výstupy a konektory

Běžné: **D-SUB (VGA)**, **DVI** (single / dual link), **HDMI**, **DisplayPort** (i Mini).

### D-SUB (VGA)

- standardní **analogový** konektor, dlouho jediný,
- pro **LCD nevhodný**: GPU nakreslí obraz digitálně → RAMDAC ho převede na analogový → D-SUB → v monitoru další převod zpět na digitální (ztráty).

### DVI

- **DVI-D** (jen digitální), DVI-I (digitální + analogový),

<img src="/images/content/it/uvod-do-vypocetni-techniky/zobrazovaci-soustava/01.webp" alt="Typy konektorů DVI" width="220" loading="lazy" decoding="async">

- sériový přenos **TMDS** (Transition Minimized Differential Signaling),
- single link = **4 páry** dvoulinky, **24 b na pixel**, obraz po řádcích s mezerami, **bez komprese**,
- single link pevně **165 MHz** (max. ~2,75 Mpx při 60 Hz); víc → **dual link** (druhá linka i pro > 24 b na pixel),
- doporučená délka kabelu do 4,5 m.

### HDMI

- **High-Definition Multimedia Interface** – **nekomprimovaný** digitální obraz + až **8kanálový zvuk**,
- typ A – **19 pinů**, kompatibilní se **single-link DVI**; typ B (vzácný) – 29 pinů, kompatibilní s dual-link DVI,
- verze 1.0 až 2.1.

<img src="/images/content/it/uvod-do-vypocetni-techniky/zobrazovaci-soustava/02.webp" alt="Kabel HDMI" width="302" loading="lazy" decoding="async">

### DisplayPort

- digitální, nekomprimovaný, až 8kanálový zvuk, ochrana obsahu **DPCP** (128bitové AES),
- 10,8 Gb/s; do 3 m **2560 × 1600**, do 15 m **1920 × 1080**,
- jen omezeně kompatibilní s DVI a HDMI,
- určen k nahrazení **DVI i VGA** na PC; spíš kancelář a IT; má všechny funkce HDMI.

### TV OUT, TV IN

- **TV OUT** – výstup televizního signálu: **S-video** (4, 7, 9 pin) nebo **Cinch**,
- **TV IN** – vstup, stejné konektory.

## Spolupráce více grafických karet

**SLI** (Nvidia, Scalable Link Interface):

- 16 linek PCIe se rozdělí mezi dva sloty → každý **PCIe ×8**,
- karty propojí **SLI můstek (bridge)**; vykreslování řídí ovladač,
- deska se dvěma sloty PCIe ×16; dvě **stejné** karty podporující SLI, od jednoho výrobce, stejná verze BIOSu.

**CrossFire** (ATI/AMD):

- dva sloty PCIe ×16, propojení kabelem,
- karty nejsou rovnocenné: **Master** a **Slave**; mohou spolupracovat i rozdílné karty.

## Monitor CRT

- dlouho téměř jediný výstup PC, dnes nahrazen LCD,
- části: **elektronové dělo**, svazek elektronů, **zaostřovací** a **vychylovací cívky**, **anoda**, **maska** (odděluje paprsky R, G, B), **luminoforová vrstva** s červenými, zelenými a modrými body.

## LCD displej

Oproti CRT: **nižší spotřeba**, menší rozměry, žádné škodlivé záření, **obraz nekmitá**, bez zkreslení na okrajích.

### Princip

![LCD buňka: podsvícení, spodní polarizátor, vrstva tekutých krystalů, horní polarizátor; bez napětí krystaly světlo stočí a bod svítí, pod napětím se narovnají a světlo zastaví](/images/content/it/uvod-do-vypocetni-techniky/zobrazovaci-soustava/lcd-princip.webp)

- obrazové buňky z **tekutých krystalů** (LCD = Liquid Crystal Display), displej se **podsvěcuje** (dříve výbojka, dnes LED),
- krystaly světlo buď **propustí**, **utlumí**, nebo **zastaví**,
- nahoře a dole **polarizátory** (vodorovný a svislý),
- **bez napětí** jsou krystaly stočené šroubovicově → pootočí světlo o 90° → projde i druhým polarizátorem → **bod svítí**,
- **pod střídavým napětím** se krystaly narovnají, světlo se nestočí → druhý polarizátor ho zastaví → **bod je tmavý**.

### Technologie LCD panelů

Liší se způsobem natáčení molekul:

| Technologie | Princip | Plus | Mínus |
| --- | --- | --- | --- |
| **TN** (Twisted Nematic) | nejstarší; spirála otáčí světlo o 90°, pod napětím se rozpadne | rychlá, levná | žloutnutí bílé a šednutí při pohledu z úhlu; vylepšení **TN+F** (film pro úhly) |
| **IPS** (In-Plane Switching) | molekuly souběžně s deskou; bez napětí světlo nepustí | věrné barvy, široké úhly, přesné krajní stavy | nižší jas a kontrast (elektrody v jedné rovině, slabé pole na okrajích) |
| **VA, MVA, PVA** (Vertical Alignment) | molekuly svisle, natáčí se jen o 45° | vysoký kontrast, krátká odezva | původně závislé na úhlu pohledu → **MVA** (domény s opačnou orientací se opticky vyrovnají) |

<img src="/images/content/it/uvod-do-vypocetni-techniky/zobrazovaci-soustava/03.webp" alt="Vrstvy TN panelu" width="320" loading="lazy" decoding="async">

1. zdroj bílého světla · 2. polarizační desky · 3. polarizované světlo · 4. elektrody · 5. tekuté krystaly · 6. film zlepšující úhly

### OLED

- mezi průhlednou **anodou** a kovovou **katodou** několik organických vrstev: vypuzující díry, přenášející díry, **vyzařovací**, přenášející elektrony,
- po přivedení napětí se kladné a záporné náboje spojí ve vyzařovací vrstvě a vzniká **světlo** – každý bod svítí sám (matice miniaturních LED), **bez podsvícení**,
- problém: **stárnutí** světelných bodů (modrá ~1 000 h, zelená ~10 000 h, červená ~30 000 h).

### Základní vlastnosti displeje

- **obnovovací frekvence** – obecně nad 60 Hz,
- **doba odezvy** – 3–5 ms,
- **jas** – 250–300 cd/m²,
- **kontrast** – 400 : 1 až 900 : 1 (dynamický až desítky tisíc : 1),
- **úhel pohledu** – ~160° v obou osách.

## Dataprojektory

Technologie: **DLP**, **LCD**, **LCoS**, **D-ILA**. Zdroj světla: **lampa**, **LED**, **laser**.

### DLP – Digital Light Processing

- vyvinul **Texas Instruments** (1987),
- obraz z **mikrozrcadel** na čipu **DMD** (Digital Micromirror Device); zrcadlo = jeden či víc pixelů,
- zrcadlo se rychle překlápí mezi polohou **propouštějící** světlo a polohou odrážející ho na chladič; **jas barvy** = poměr času v obou polohách,
- rozlišení 800 × 600, 1024 × 768, 1280 × 720, 1920 × 1080,
- mínus: blikání a horší barvy než 3LCD.

**Jednočipový DLP:** mezi lampou a čipem rotující **barevné kolo** se 4 segmenty (R, G, B + průhledný pro jas). Rotace synchronizována s DMD → barvy **po sobě** (možný **duhový efekt**, u citlivých lidí i potíže – epilepsie).

**Tříčipový DLP:** **hranol** rozdělí světlo, každá primární barva jde na vlastní DMD čip.

### 3LCD

- světlo lampy rozdělí **dichroická zrcadla** na R, G, B,
- každý paprsek projde **vlastním miniaturním LCD panelem**, v **hranolu** se složí a **optikou** se promítne,
- bez duhového efektu jednočipového DLP; varianty s LED nebo laserovým zdrojem barev.

### LCoS (Liquid Crystal on Silicon)

- spojení výhod 3LCD a DLP; místo DMD **odrazný** LCoS čip,
- drahá výroba → sám se nevyrábí, ale je základem **SXRD** (Sony) a **D-ILA** (JVC).
