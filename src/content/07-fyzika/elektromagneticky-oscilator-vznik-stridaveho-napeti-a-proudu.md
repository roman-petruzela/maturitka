---
title: "Elektromagnetický oscilátor vznik střídavého napětí a proudu"
order: 34
source: "FYZIKA-maturitní otázky/34-Elektromagnetický-oscilátor-vznik-střídavého-napětí-a-proudu.docx"
---
LC oscilační obvod

- __Nejjednodušším elmg. oscilátorem__ je obvod tvořený paralelně zapojenou __cívkou__ a __kondenzátorem__
- Parametry oscilačního obvodu jsou __indukčnost L__ a __kapacita C__

<img src="/images/content/fyzika/elektromagneticky-oscilator-vznik-stridaveho-napeti-a-proudu/01.webp" alt="Ilustrace: Elektromagnetický oscilátor vznik střídavého napětí a proudu" width="256" loading="lazy" decoding="async">

- Na počátku děje je __kondenzátor nabitý__
- Za __čtvrtinu periody__ se __vybije__ a __proud__ je __maximální__ ⇒ vzniká __indukované napětí__
- Za další __čtvrtinu periody__ se __kondenzátor nabije indukovaným proudem__. __Polarita__ kondenzátoru je __opačná__.
- Ve __druhé polovině periody__ se tento děj __opakuje__ opačným směrem
- Vlivem ztrát je toto __kmitání tlumené__

<img src="/images/content/fyzika/elektromagneticky-oscilator-vznik-stridaveho-napeti-a-proudu/02.webp" alt="Ilustrace: Elektromagnetický oscilátor vznik střídavého napětí a proudu" width="602" loading="lazy" decoding="async">

### Princip vzniku střídavého napětí a proudu

- __Střídavé napětí__ je proměnné napětí s harmonickým průběhem. To vyvolá __střídavý proud__, který má také harmonický průběh.
- __Střídavý proud__ = proud jehož směr se v čase mění
- __Zdrojem__ je nejčastěji __alternátor__ složený ze
	- __Statoru__ – nepohyblivá část, která vytváří homogenní mg. pole
	- __Rotoru__ – pohyblivá část, otáčivý pohyb cívky v mg. poli
- Pro __okamžité napětí u__ platí vztah:

$$u = U_m \sin \omega t$$

  kde $U_m$ … amplituda střídavého napětí, $\omega = \frac{2\pi}{T} = 2\pi f$ … úhlová rychlost, $T$ … perioda, $f$ … frekvence

- Pro __okamžitý proud i__ platí vztah:

$$i = I_m \sin \omega t$$
- Grafem střídavého napětí a proudu je __sinusoida__
- Fáze kmitavého pohybu

<img src="/images/content/fyzika/elektromagneticky-oscilator-vznik-stridaveho-napeti-a-proudu/05.webp" alt="Ilustrace: Princip vzniku střídavého napětí a proudu" width="525" loading="lazy" decoding="async">

## Analogie mezi mechanickým a elektromagnetickým oscilátorem

- Děje v obou oscilátorech se liší __fyzikální podstatou__, je však mezi nimi analogie vycházející z obdobného průběhu __přeměn energie v oscilátorech__
- V __mech__. oscilátoru se periodicky přeměňuje __potenciální energie v energii kinetickou.__ V __elmg__. oscilátoru se mění __energie el. pole v energii mg. pole__
- Tyto přeměny umožňují porovnat veličiny, kterými děje v oscilátorech popisujeme
- Veličiny se sledování:
	- __Mech. osc__: výchylka y, rychlost v, frekvence f, perioda T, kinetická/potenciální energie, síla F, hmotnost m
	- __Elmg. osc:__ okamžitý náboj q, okamžitý proud i, energie elektrická Ee, energie magnetická Em, elektrické napětí u, indukčnost L

## Thomsonův vztah

- Napětí na kondenzátoru je stejně veliké jako napětí na cívce, z toho plyne:

$$X_L = X_C$$

- $X_L$ … induktance, $X_C$ … kapacitance (obě v ohmech, Ω)

**Kapacitance kondenzátoru** – je definována podílem veličin $U_m$ a $I_m$:

$$X_C = \frac{U_m}{I_m} = \frac{1}{\omega C}$$

- jednotka kapacitance je stejná jako jednotka odporu: $[X_C] = \Omega$
- kapacitance se zmenšuje s rostoucí frekvencí střídavého proudu a s rostoucí kapacitou kondenzátoru

**Induktance cívky** – na střídavý proud v obvodu s cívkou má vliv frekvence proudu $f$ a indukčnost cívky $L$:

$$X_L = \frac{U_m}{I_m} = \omega L$$

- jednotka induktance je stejná jako jednotka odporu: $[X_L] = \Omega$

**Thomsonův vztah** — z rovnosti $X_L = X_C$ plyne:

$$\omega_0 L = \frac{1}{\omega_0 C}$$

$$\omega_0 = \frac{1}{\sqrt{L C}}$$

- Po rozložení získáme __Thomsonův vztah__ pro __periodu vlastního kmitání elmg.  oscilátoru:__

$$T_0 = \frac{2\pi}{\omega_0} = 2\pi \sqrt{L C}$$

- Dále také získáme vztah pro __frekvenci vlastního kmitání:__

$$f_0 = \frac{1}{2\pi \sqrt{L C}}$$

## Tlumené kmitání

- Největší hodnoty tj. __amplitudy__ napětí a proudu se __postupně zmenšují__. Příčinou je __odpor R__ oscilačního obvodu.
- __Energie__ elektrického a magnetického pole se __postupně přeměňuje__ ve v**nitřní energii** vodiče obvodu.
- Elektromagnetické kmitání oscilačního obvodu je __tlumené__

<img src="/images/content/fyzika/elektromagneticky-oscilator-vznik-stridaveho-napeti-a-proudu/13.webp" alt="Ilustrace: Tlumené kmitání" width="321" loading="lazy" decoding="async">

## Nucené kmitání

- __Vlastní kmitání__ elmg. oscilátoru bylo podmíněno tím, že mu byla __dodána__ určitá __energie__ v __počátečním okamžiku__
- __Ztráty energie__ způsobené __tlumením__ však nahrazovány nebyly, takže kmitání postupně __zaniklo__
- __Připojením__ elmg. oscilátoru ke __zdroji__ harmonického napětí vzniká z oscilátoru __nucené kmitání__
- Oscilátor __kmitá s frekvencí připojeného zdroje__, nikoliv s frekvencí vlastního kmitání
- Nucené kmitání je __netlumené__

## Rezonance oscilátoru a rezonanční křivka

- Pokud se __úhlová frekvence zdroje__ energie liší jen __málo__ od __úhlové frekvence oscilátoru__, __amplituda__ výchylky nuceného kmitání se postupně __zvětšuje__
- __Největší__ je při stejných úhlových frekvencích
- Dochází k jevu, který se nazývá __rezonance oscilátoru__. Vše je znázorněno tzv. __rezonanční křivkou__
- Poloha maxima křivky určuje __rezonanční frekvenci oscilátoru__, __tvar__ křivky je značně ovlivněn __tlumením__.
- Ostré maximum charakterizuje oscilátor s __malým tlumením (1),__ kdežto oscilátor s __větším tlumením__ má rezonanční křivku s __méně výrazným maximem (2)__.

<img src="/images/content/fyzika/elektromagneticky-oscilator-vznik-stridaveho-napeti-a-proudu/14.webp" alt="Ilustrace: Rezonance oscilátoru a rezonanční křivka" width="249" loading="lazy" decoding="async"><img src="/images/content/fyzika/elektromagneticky-oscilator-vznik-stridaveho-napeti-a-proudu/15.webp" alt="Ilustrace: Rezonance oscilátoru a rezonanční křivka" width="310" loading="lazy" decoding="async">

## Rezonanční jevy v technické praxi

- Rezonance elmg. oscilátoru se široce využívá v __technice__.
- Oscilační obvod je např. součástí __rozhlasového přijímače__ – elmg. kmitání je v něm vynucováno __malým napětím antény__
- Při __ladění__ se __mění parametry__ oscilačního obvodu (obvykle změnou __kapacity__ kondenzátoru) tak, aby byl __v rezonanci s frekvencí__, na níž vysílá rozhlasová stanice
- Oscilační obvod se s touto frekvencí rozkmitá a v dalších částech přijímače je rezonancí zesílený signál zpracován

__Zpětná vazba__

- Zpětná vazba (také zpětnovazební smyčka) je termín pro situaci (mechanismus, elektronický obvod), kdy výstup nějakého systému ovlivňuje zpětně jeho vstup

<img src="/images/content/fyzika/elektromagneticky-oscilator-vznik-stridaveho-napeti-a-proudu/16.webp" alt="Ilustrace: Rezonanční jevy v technické praxi" width="300" loading="lazy" decoding="async">
