---
title: "Zobrazovací soustava"
order: 17
source: "uvt/cv23-25_Zobrazovaci_soustava.pdf"
---

**Zobrazovací soustava** se skládá ze dvou částí: **zobrazovacího adaptéru** (grafická karta, vytváří obraz) a **zobrazovače** (LCD monitor, CRT, dataprojektor).

- **Textový režim** – obrazovka rozdělená na políčka s jedním znakem (80 × 25), nenáročný.
- **Grafický režim** – matice bodů, téměř neomezené barvy. Důležité je **rozlišení** (body na řádek × počet řádků).
- **Pixel** je nejmenší bod rastrové grafiky; barevný pixel tvoří tři body **R, G, B**. **LCD** má pevný počet pixelů → jiné než **nativní rozlišení** se přepočítává a obraz se rozmaže.

## Grafická karta

Kreslí obraz; je to v podstatě **samostatný počítač** a důležitý ukazatel kvality PC. Skládá se z:

- **GPU** (Graphics Processing Unit) – mikroprocesor, který řídí tvorbu obrazu (výrobci **AMD**, **Nvidia**, **Intel**),
- **paměti VRAM** (GDDR3–GDDR6, od 1 GB výš) – GPU do ní ukládá hotový obraz; výkon limituje frekvence a **šířka sběrnice** GPU ↔ paměť,
- **RAMDAC** – převodník digitálně → analogově pro analogový výstup (VGA),
- **chlazení** a **konektorů**; k desce se připojuje přes **PCIe ×16** (dříve AGP).

**GPU** obsahuje paralelní **pipeline** s **shadery**: **Vertex Shader** řeší 3D objekty a světlo, **Pixel Shader** barvu a průhlednost. Výkon určují počet pipeline, **frekvence**, **pixel fill-rate** a **texel fill-rate** (texel = pixel textury) a výrobní technologie čipu.

Obraz řídí i **API**: **Microsoft DirectX** (verzi zjistí `dxdiag`) a **OpenGL**. Více karet spolupracuje přes **SLI** (Nvidia) a **CrossFire** (AMD).

## Výstupy a konektory

| Konektor | Signál | Poznámka |
| --- | --- | --- |
| **D-SUB (VGA)** | analogový | pro LCD nevhodný: obraz se digitálně vytvoří, převede na analogový a v monitoru zpět (ztráty) |
| **DVI** | digitální (DVI-D), digitální + analogový (DVI-I) | single link 165 MHz, 24 b na pixel, bez komprese; dual link pro víc |
| **HDMI** | digitální | **nekomprimovaný** obraz + až 8kanálový **zvuk**; kompatibilní se single-link DVI |
| **DisplayPort** | digitální | nekomprimovaný obraz a zvuk, ochrana obsahu; určen k nahrazení DVI a VGA na PC |
| **TV OUT / IN** | analogový | S-video, cinch |

<img src="/images/content/it/uvod-do-vypocetni-techniky/zobrazovaci-soustava/01.webp" alt="Typy konektorů DVI" width="220" loading="lazy" decoding="async">

## Monitor CRT

Dlouho téměř jediný výstup PC, dnes nahrazen LCD. Obraz vytváří **elektronové dělo**, svazek elektronů řídí **vychylovací cívky**, **maska** odděluje paprsky R, G, B a dopadají na **luminoforovou vrstvu** s červenými, zelenými a modrými body.

## LCD displej

Oproti CRT má **nižší spotřebu**, menší rozměry, žádné škodlivé záření a **obraz nekmitá**.

### Princip

![LCD buňka: podsvícení, spodní polarizátor, vrstva tekutých krystalů, horní polarizátor; bez napětí krystaly světlo stočí a bod svítí, pod napětím se narovnají a světlo zastaví](/images/content/it/uvod-do-vypocetni-techniky/zobrazovaci-soustava/lcd-princip.webp)

- Buňky z **tekutých krystalů** (LCD) se **podsvěcují** (dnes LED); nahoře a dole jsou **polarizátory** (vodorovný a svislý).
- **Bez napětí** krystaly světlo pootočí o 90° → projde druhým polarizátorem → **bod svítí**.
- **Pod napětím** se krystaly narovnají, světlo se nestočí → druhý polarizátor ho zastaví → **bod je tmavý**.

### Technologie LCD panelů

| Technologie | Plus | Mínus |
| --- | --- | --- |
| **TN** (Twisted Nematic) | rychlá, levná | horší barvy a úhly pohledu |
| **IPS** (In-Plane Switching) | věrné barvy, široké úhly | nižší kontrast, dražší |
| **VA** (MVA, PVA) | vysoký kontrast, krátká odezva | původně závislé na úhlu pohledu |

### OLED

Mezi **anodou** a **katodou** je několik organických vrstev; po přivedení napětí se v **vyzařovací vrstvě** spojí náboje a vzniká **světlo**. Každý bod svítí sám, **bez podsvícení**, černá je opravdu černá. Nevýhoda: **stárnutí** světelných bodů (modrá nejrychleji).

### Základní vlastnosti displeje

**rozlišení**, **úhlopříčka**, **obnovovací frekvence** (nad 60 Hz), **doba odezvy** (3–5 ms), **jas** (250–300 cd/m²), **kontrastní poměr**, **úhel pohledu** (~160°).

## Dataprojektory

Technologie: **DLP**, **3LCD**, **LCoS**. Zdroj světla: **lampa**, **LED**, **laser**.

- **DLP** (Digital Light Processing, Texas Instruments) – obraz z **mikrozrcadel** na čipu **DMD**; zrcadlo se rychle překlápí mezi polohou propouštějící a odrážející světlo a **jas** určuje poměr času v obou polohách. **Jednočipový** DLP má rotující **barevné kolo** (R, G, B) → barvy po sobě, možný **duhový efekt**; **tříčipový** DLP rozdělí světlo hranolem na tři čipy.
- **3LCD** – **dichroická zrcadla** rozdělí světlo na R, G, B, každý paprsek projde vlastním miniaturním LCD panelem a v **hranolu** se složí; bez duhového efektu.
- **LCoS** – spojuje výhody 3LCD a DLP, místo DMD používá **odrazný** čip (SXRD, D-ILA); drahé.

## Otázky k opakování

1. Z jakých částí se skládá zobrazovací soustava? ||ze zobrazovacího adaptéru (grafická karta) a zobrazovače (monitor, projektor)||
2. Z čeho se skládá grafická karta? ||GPU, paměť VRAM, RAMDAC, chlazení, konektory; připojuje se přes PCIe ×16||
3. Proč je D-SUB (VGA) pro LCD nevhodný? ||obraz se digitálně vytvoří, převede na analogový a v monitoru zpět na digitální, vznikají ztráty||
4. Čím se liší HDMI a DisplayPort od VGA? ||jsou digitální, nekomprimované a přenášejí i zvuk||
5. Vysvětlete princip LCD. ||tekuté krystaly mezi polarizátory: bez napětí otočí světlo o 90° a bod svítí, pod napětím ho zastaví||
6. Porovnejte panely TN, IPS a VA. ||TN rychlý a levný, IPS věrné barvy a úhly, VA vysoký kontrast||
7. Čím se OLED liší od LCD? ||každý bod svítí sám, bez podsvícení||
8. Popište princip DLP a 3LCD projektoru. ||DLP: mikrozrcadla DMD odrážejí světlo; 3LCD: světlo se rozdělí na R, G, B a projde třemi LCD panely||
