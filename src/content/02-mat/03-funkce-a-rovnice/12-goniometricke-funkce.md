---
title: "Goniometrické funkce"
order: 12
source: "matematika/TY01_0212_-_Goniometricke_funkce.pptx"
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace používala animované odrážky, grafy a tabulky vložené jako obrázky, které se při prvním převodu ztratily nebo poškodily (v tabulce hodnot chyběly sloupce 30°/60°, ve dvou příkladech chyběly konkrétní hodnoty posunu — dopočítány ze zachovaných výsledků). Text, vzorce, tabulky a grafy jsou zde doplněné/rekonstruované; grafy jsou vykreslené v radiánech (běžná konvence pro spojité funkce), zatímco tabulky hodnot používají stupně tak, jak byly v podkladu.

## Osnova

a) pojem funkce, b) goniometrické funkce, c) grafy a vlastnosti jednotlivých funkcí, d) posouvání grafů goniometrických funkcí, e) příklady na procvičení včetně řešení.

## Funkce

Funkce je předpis, který každému $x$ z nějaké množiny $D$ (definiční obor) přiřazuje **právě jedno** reálné číslo $y$ z množiny $H$ (obor hodnot). O funkci mluvíme také jako o tzv. zobrazení, např. $\mathbb{R} \to \mathbb{R}$ — zobrazení z množiny $\mathbb{R}$ do množiny $\mathbb{R}$.

V matematice pracujeme kromě jiných funkcí i s funkcemi **goniometrickými**: funkce sinus ($\sin$), funkce cosinus ($\cos$), funkce tangens ($\mathrm{tg}$), funkce cotangens ($\mathrm{cotg}$).

## Grafy a vlastnosti

**Funkce sinus** (graf: sinusoida) — **lichá** funkce (souměrná podle středu $[0;0]$). $D(f)=\mathbb{R}$, $H(f)=\langle-1;1\rangle$, perioda $2\pi$ (360°).

```graph
{ "fn": "sin(x)", "domain": [-6.29, 6.29], "yDomain": [-1.4, 1.4], "title": "f: y = sin x" }
```

**Funkce cosinus** (graf: cosinusoida) — **sudá** funkce (souměrná podle osy y). $D(f)=\mathbb{R}$, $H(f)=\langle-1;1\rangle$, perioda $2\pi$ (360°).

```graph
{ "fn": "cos(x)", "domain": [-6.29, 6.29], "yDomain": [-1.4, 1.4], "title": "f: y = cos x" }
```

**Funkce tangens** (graf: tangentoida) — **lichá** funkce. $D(f)=\mathbb{R} - \left\{\dfrac{\pi}{2}(2k+1);\ k\in\mathbb{Z}\right\}$ (tj. mimo liché násobky 90°, kde funkce není definovaná), $H(f)=\mathbb{R}$, perioda $\pi$ (180°).

```graph
{ "fn": "tan(x)", "domain": [-3.14, 3.14], "yDomain": [-4, 4], "title": "f: y = tg x" }
```

**Funkce cotangens** (graf: cotangentoida) — **lichá** funkce. $D(f)=\mathbb{R} - \{k\pi;\ k\in\mathbb{Z}\}$, $H(f)=\mathbb{R}$, perioda $\pi$ (180°).

```graph
{ "fn": "1/tan(x)", "domain": [-6.2, 6.2], "yDomain": [-4, 4], "title": "f: y = cotg x" }
```

## Hodnoty v „hezkých" úhlech

| úhel | 0° | 30° | 45° | 60° | 90° | 180° | 270° | 360° |
|---|---|---|---|---|---|---|---|---|
| sin | 0 | 1/2 | √2/2 | √3/2 | 1 | 0 | −1 | 0 |
| cos | 1 | √3/2 | √2/2 | 1/2 | 0 | −1 | 0 | 1 |
| tg | 0 | √3/3 | 1 | √3 | nedef. | 0 | nedef. | 0 |
| cotg | nedef. | √3 | 1 | √3/3 | 0 | nedef. | 0 | nedef. |

## Ukázkové příklady — posouvání grafu

**a) $f: y = \sin 2x$**

Původní funkce sinus nabývá pro $0°{=}0,\ 90°{=}1,\ 180°{=}0,\ 270°{=}-1,\ 360°{=}0$. Nová funkce (argument násoben 2) nabývá stejných hodnot **dvakrát rychleji**: $2{\cdot}0°{=}0°{\to}0$, $2{\cdot}45°{=}90°{\to}1$, $2{\cdot}90°{=}180°{\to}0$, $2{\cdot}135°{=}270°{\to}-1$, $2{\cdot}180°{=}360°{\to}0$.

Graf změní periodu z $360°$ na $180°$.

**b) $f: y = \cos\left(x - \dfrac{\pi}{2}\right)$**

Nová funkce vznikne tak, že graf cosinu posuneme podél osy x o $\frac{\pi}{2}$ (90°) **doprava** (kdyby bylo v závorce $+$, posunuli bychom doleva). Výsledné hodnoty ($0°{=}0,\ 90°{=}1,\ 180°{=}0,\ 270°{=}-1,\ 360°{=}0$) odpovídají funkci sinus — což dává smysl, protože $\cos(x-90°)=\sin x$ je známá identita.

**c) $f: y = \cos x - 1$**

Graf cosinu posuneme podél osy y o 1 **dolů** — v $y=-1$ vznikne nová vodorovná asymptota chování („nová osa x"). Perioda se nemění.

**d) $f: y = |\mathrm{tg}\, x|$**

Tu část grafu tangens, která je pod osou x, souměrně překreslíme nad osu x (absolutní hodnota).

## Příklady na procvičení

**Příklad 1:** Sestrojte graf funkce $f: y=\cos(0{,}5x)$ pomocí posouvání.

Výsledek:

- původní cosinus: ||0°=1, 90°=0, 180°=−1, 270°=0, 360°=1||
- nová funkce (argument násoben 0,5): ||0,5·0°=0°→1;  0,5·90°=45°→√2/2≈0,71;  0,5·180°=90°→0;  0,5·270°=135°→−√2/2≈−0,71;  0,5·360°=180°→−1||
- perioda: ||se změní z 360° na 720° (argument roste poloviční rychlostí)||

```graph
{ "fn": "cos(0.5*x)", "domain": [-12.6, 12.6], "yDomain": [-1.4, 1.4], "title": "f: y = cos(0,5x)", "spoiler": true, "float": "right" }
```

---

**Příklad 2:** Sestrojte graf funkce $f: y=\sin\left(x+\dfrac{\pi}{4}\right)$ pomocí posouvání.

Výsledek:

- posun: ||graf sinu se posune o π/4 (45°) doleva, perioda se nemění||
- ověření hodnot: ||−45°→0, 45°→1, 135°→0, 225°→−1, 315°→0||

```graph
{ "fn": "sin(x + 0.7853981634)", "domain": [-6.29, 6.29], "yDomain": [-1.4, 1.4], "title": "f: y = sin(x + π/4)", "spoiler": true, "float": "right" }
```

---

**Příklad 3:** Sestrojte graf funkce $f: y=\cos x + 0{,}5$ pomocí posouvání.

Výsledek: ||graf cosinu se posune o 0,5 nahoru, v y=0,5 vznikne nová osa x'; perioda se nemění||

```graph
{ "fn": "cos(x) + 0.5", "domain": [-6.29, 6.29], "yDomain": [-1, 2], "title": "f: y = cos x + 0,5", "spoiler": true, "float": "right" }
```

---

**Příklad 4:** Sestrojte graf funkce $f: y=|\sin x|$ pomocí posouvání.

Výsledek: ||část grafu sinu pod osou x se souměrně překreslí nad osu x (absolutní hodnota) — graf vypadá jako řada „kopečků" nad osou x||

```graph
{ "fn": "abs(sin(x))", "domain": [-6.29, 6.29], "yDomain": [-0.2, 1.4], "title": "f: y = |sin x|", "spoiler": true, "float": "right" }
```

## Shrnutí

| | sin | cos | tg | cotg |
|---|---|---|---|---|
| D(f) | ℝ | ℝ | ℝ − {π/2·(2k+1); k∈ℤ} | ℝ − {k·π; k∈ℤ} |
| H(f) | ⟨−1;1⟩ | ⟨−1;1⟩ | ℝ | ℝ |
| perioda | 2π (360°) | 2π (360°) | π (180°) | π (180°) |
| vlastnost | lichá | sudá | lichá | lichá |

## Zdroje

HUDCOVÁ, Milada a Libuše KUBIČÍKOVÁ. _Sbírka úloh z matematiky pro SOŠ, SOU a nástavbové studium_. 2. vydání. Havlíčkův Brod: Prometheus, spol. s r.o., 2005. Učebnice pro střední školy. ISBN 80-7196-318-6
