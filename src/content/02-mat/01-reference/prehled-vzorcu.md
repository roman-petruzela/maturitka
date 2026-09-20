---
title: "Přehled vzorců"
order: -1
source: "vzorce z výkladů jednotlivých kategorií matematiky na tomto webu"
---

Všechny důležité vzorce z matematiky na jednom místě, seřazené podle kategorií ve stejném pořadí jako v menu. Každý vzorec je převzatý z výkladu příslušného tématu — název tématu je odkaz na stránku, kde je vzorec vysvětlen, odvozen a procvičen. Nejsou tu ukázkové příklady ani řešené úlohy z didaktických testů, jen samotná pravidla.

## Výrazy a mocniny (1. ročník)

### [Negace složených výroků](/mat/vyrazy-a-mocniny/03-negace-slozenych-vyroku/)

```formulas
{
  "items": [
    {"label": "Negace konjunkce", "tex": "\\neg(a\\land b) = (\\neg a\\lor\\neg b)"},
    {"label": "Negace disjunkce", "tex": "\\neg(a\\lor b) = (\\neg a\\land\\neg b)"},
    {"label": "Negace implikace", "tex": "\\neg(a\\Rightarrow b) = (a\\land\\neg b)"},
    {"label": "Negace ekvivalence", "tex": "\\neg(a\\Leftrightarrow b) = (\\neg a\\Leftrightarrow b) = (a\\Leftrightarrow\\neg b)"}
  ]
}
```

### [Množiny](/mat/vyrazy-a-mocniny/06-mnoziny/)

```formulas
{
  "items": [
    {"label": "Množina zadaná charakteristickou vlastností", "tex": "A = \\{x\\in\\mathbb{N};\\ x<4\\}"}
  ]
}
```

### [Číselné obory](/mat/vyrazy-a-mocniny/07-ciselne-obory/)

```formulas
{
  "items": [
    {"label": "Číselné obory jako podmnožiny", "tex": "\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}"}
  ]
}
```

### [Intervaly](/mat/vyrazy-a-mocniny/08-intervaly/)

Ohraničené intervaly:

| Zápis | Množinově | Typ |
|---|---|---|
| $\langle a;b\rangle$ | $\{x\in\mathbb{R};\ a\leq x\leq b\}$ | uzavřený (obsahuje oba krajní body) |
| $(a;b)$ | $\{x\in\mathbb{R};\ a<x<b\}$ | otevřený (neobsahuje žádný krajní bod) |
| $\langle a;b)$ | $\{x\in\mathbb{R};\ a\leq x<b\}$ | polouzavřený zleva (polootevřený zprava) |
| $(a;b\rangle$ | $\{x\in\mathbb{R};\ a<x\leq b\}$ | polouzavřený zprava (polootevřený zleva) |

Neohraničené intervaly:

| Zápis | Množinově |
|---|---|
| $(a;+\infty)$ | $\{x\in\mathbb{R};\ x>a\}$ |
| $\langle a;+\infty)$ | $\{x\in\mathbb{R};\ x\geq a\}$ |
| $(-\infty;b)$ | $\{x\in\mathbb{R};\ x<b\}$ |
| $(-\infty;b\rangle$ | $\{x\in\mathbb{R};\ x\leq b\}$ |
| $(-\infty;+\infty)$ | $\mathbb{R}$ (celá množina reálných čísel) |

### [Absolutní hodnota](/mat/vyrazy-a-mocniny/09-absolutni-hodnota/)

```formulas
{
  "items": [
    {"label": "Definice absolutní hodnoty", "tex": "|a| = \\begin{cases} a & \\text{je-li } a\\geq0 \\\\ -a & \\text{je-li } a<0 \\end{cases}"},
    {"label": "Odmocnina ze čtverce", "tex": "\\sqrt{a^2} = |a|"},
    {"label": "Vzdálenost čísel $a$, $b$ na číselné ose", "tex": "|a-b|"}
  ]
}
```

### [Mocniny s přirozeným mocnitelem](/mat/vyrazy-a-mocniny/10-mocniny-s-prirozenym-mocnitelem/)

```formulas
{
  "items": [
    {"label": "Definice mocniny", "tex": "a^n = \\underbrace{a\\cdot a\\cdot a\\cdots a}_{n\\text{ činitelů}}"},
    {"label": "Vědecký zápis čísla", "tex": "a\\cdot10^n", "note": "kde $1\\leq a<10,\\ n\\in\\mathbb{Z}$"},
    {"label": "Součin mocnin se stejným základem", "tex": "a^r\\cdot a^s = a^{r+s}"},
    {"label": "Podíl mocnin se stejným základem", "tex": "\\frac{a^r}{a^s} = a^{r-s}", "note": "pro $r>s$"},
    {"label": "Mocnina mocniny", "tex": "(a^r)^s = a^{r\\cdot s}"},
    {"label": "Mocnina součinu", "tex": "(a\\cdot b)^r = a^r\\cdot b^r"},
    {"label": "Mocnina podílu", "tex": "\\left(\\frac{a}{b}\\right)^r = \\frac{a^r}{b^r}", "note": "pro $b\\neq0$"}
  ]
}
```

### [Částečné odmocňování](/mat/vyrazy-a-mocniny/12-castecne-odmocni/)

```formulas
{
  "items": [
    {"label": "Odmocnina součinu", "tex": "\\sqrt{a\\cdot b} = \\sqrt{a}\\cdot\\sqrt{b}", "note": "pro $a,b\\geq0$"}
  ]
}
```

### [Násobení a dělení lomených výrazů](/mat/vyrazy-a-mocniny/16-nasobeni-a-deleni-lomenych-vyrazu/)

```formulas
{
  "items": [
    {"label": "Násobení lomených výrazů", "tex": "\\frac{a}{b}\\cdot\\frac{c}{d} = \\frac{a\\cdot c}{b\\cdot d}", "note": "pro $b,d\\neq0$"},
    {"label": "Dělení lomených výrazů", "tex": "\\frac{a}{b}:\\frac{c}{d} = \\frac{a}{b}\\cdot\\frac{d}{c} = \\frac{a\\cdot d}{b\\cdot c}", "note": "pro $b,c,d\\neq0$"},
    {"label": "Umocňování lomených výrazů", "tex": "\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}", "note": "pro $b\\neq0$"}
  ]
}
```

### [Rozklad na součin](/mat/vyrazy-a-mocniny/20-rozklad-na-soucin/)

```formulas
{
  "items": [
    {"label": "Rozdíl čtverců", "tex": "a^2-b^2=(a-b)(a+b)"},
    {"label": "Druhá mocnina součtu", "tex": "a^2+2ab+b^2=(a+b)^2"},
    {"label": "Druhá mocnina rozdílu", "tex": "a^2-2ab+b^2=(a-b)^2"}
  ]
}
```

## Funkce a rovnice (2. ročník)

### [Kvadratická funkce](/mat/funkce-a-rovnice/01-kvadraticka-funkce/)

```formulas
{
  "items": [
    {"label": "Předpis kvadratické funkce", "tex": "f: y = ax^2 + bx + c", "note": "kde $a, b, c \\in \\mathbb{R}$ a $a \\neq 0$"},
    {"label": "Diskriminant", "tex": "D = b^2 - 4ac"},
    {"label": "Vrchol paraboly", "tex": "V = \\left[-\\frac{b}{2a};\\ -\\frac{D}{4a}\\right]"}
  ]
}
```

### [Kvadratická rovnice](/mat/funkce-a-rovnice/02-kvadraticka-rovnice/)

```formulas
{
  "items": [
    {"label": "Obecný tvar", "tex": "ax^2 + bx + c = 0", "note": "kde $a \\neq 0$"},
    {"label": "Diskriminant", "tex": "D = b^2 - 4ac"},
    {"label": "Kořeny kvadratické rovnice", "tex": "x_{1,2} = \\frac{-b \\pm \\sqrt{D}}{2a}"},
    {"label": "Vietovy vzorce — součet kořenů", "tex": "x_1 + x_2 = -\\frac{b}{a}"},
    {"label": "Vietovy vzorce — součin kořenů", "tex": "x_1 \\cdot x_2 = \\frac{c}{a}"}
  ]
}
```

### [Kvadratická nerovnice](/mat/funkce-a-rovnice/03-kvadraticka-nerovnice/)

```formulas
{
  "items": [
    {"label": "Obecný tvar", "tex": "ax^2 + bx + c > 0", "note": "kde $a \\neq 0$; znakem nerovnosti může být také $<,\\ \\geq,\\ \\leq$"},
    {"label": "Rozklad trojčlenu na součin", "tex": "a(x-x_1)(x-x_2)"}
  ]
}
```

### [Mocninné funkce](/mat/funkce-a-rovnice/06-mocninne-funkce/)

```formulas
{
  "items": [
    {"label": "Předpis mocninné funkce", "tex": "f: y = x^n", "note": "kde $n \\in \\mathbb{Z} \\setminus \\{0\\}$"}
  ]
}
```

### [Inverzní funkce](/mat/funkce-a-rovnice/07-inverzni-funkce/)

```formulas
{
  "items": [
    {"label": "Definiční obor inverzní funkce", "tex": "D(f) = H(f^{-1})"},
    {"label": "Obor hodnot inverzní funkce", "tex": "H(f) = D(f^{-1})"}
  ]
}
```

### [Exponenciální funkce a její posunutí](/mat/funkce-a-rovnice/08-exponencialni-funkce-a-jeji-posunuti/)

```formulas
{
  "items": [
    {"label": "Předpis exponenciální funkce", "tex": "f: y = a^x", "note": "kde $a \\in \\mathbb{R}^+ \\setminus \\{1\\}$"},
    {"label": "Posunutí exponenciální funkce", "tex": "f: y = a^{x+m} + n"}
  ]
}
```

### [Exponenciální rovnice](/mat/funkce-a-rovnice/09-exponencialni-rovnice/)

```formulas
{
  "items": [
    {"label": "Součin mocnin", "tex": "a^r \\cdot a^s = a^{r+s}"},
    {"label": "Podíl mocnin", "tex": "a^r : a^s = a^{r-s}"},
    {"label": "Mocnina mocniny", "tex": "(a^r)^s = a^{r \\cdot s}"},
    {"label": "Mocnina součinu mocnin", "tex": "(a^r \\cdot b^s)^v = a^{r \\cdot v} \\cdot b^{s \\cdot v}"}
  ]
}
```

### [Logaritmická funkce a její posunutí](/mat/funkce-a-rovnice/10-logaritmicka-funkce-a-jeji-posunuti/)

```formulas
{
  "items": [
    {"label": "Předpis logaritmické funkce", "tex": "f: y = \\log_a x", "note": "kde $a \\in \\mathbb{R}^+ \\setminus \\{1\\}$"},
    {"label": "Posunutí logaritmické funkce", "tex": "f: y = \\log_a(x+m) + n"}
  ]
}
```

### [Logaritmus, věty o logaritmování, logaritmické rovnice](/mat/funkce-a-rovnice/11-logaritmus-vety-o-logaritmovani-logaritmicke-rovnice/)

```formulas
{
  "items": [
    {"label": "Definice logaritmu", "tex": "\\log_a r = v \\iff a^v = r"},
    {"label": "Logaritmus součinu", "tex": "\\log_a r + \\log_a v = \\log_a(r \\cdot v)"},
    {"label": "Logaritmus podílu", "tex": "\\log_a r - \\log_a v = \\log_a(r : v)"},
    {"label": "Logaritmus mocniny", "tex": "s \\cdot \\log_a r = \\log_a(r^s)"},
    {"label": "Dekadický logaritmus (základ 10)", "note": "píšeme $\\log r$ místo $\\log_{10} r$"},
    {"label": "Přirozený logaritmus (základ $e$)", "note": "píšeme $\\ln r$ místo $\\log_e r$"}
  ]
}
```

### [Goniometrické funkce](/mat/funkce-a-rovnice/12-goniometricke-funkce/)

Hodnoty goniometrických funkcí v „hezkých“ úhlech:

| úhel | 0° | 30° | 45° | 60° | 90° | 180° | 270° | 360° |
|---|---|---|---|---|---|---|---|---|
| sin | 0 | 1/2 | √2/2 | √3/2 | 1 | 0 | −1 | 0 |
| cos | 1 | √3/2 | √2/2 | 1/2 | 0 | −1 | 0 | 1 |
| tg | 0 | √3/3 | 1 | √3 | nedef. | 0 | nedef. | 0 |
| cotg | nedef. | √3 | 1 | √3/3 | 0 | nedef. | 0 | nedef. |

### [Úprava výrazů s goniometrickými funkcemi](/mat/funkce-a-rovnice/13-uprava-vyrazu-s-goniometrickymi-funkcemi/)

```formulas
{
  "items": [
    {"label": "Základní vztah", "tex": "\\sin^2 x + \\cos^2 x = 1"},
    {"label": "Tangens", "tex": "\\mathrm{tg}\\,x = \\frac{\\sin x}{\\cos x}"},
    {"label": "Cotangens", "tex": "\\mathrm{cotg}\\,x = \\frac{\\cos x}{\\sin x}"},
    {"label": "Součin tangens a cotangens", "tex": "\\mathrm{tg}\\,x \\cdot \\mathrm{cotg}\\,x = 1"},
    {"label": "Sinus dvojnásobného úhlu", "tex": "\\sin 2x = 2\\sin x \\cos x"},
    {"label": "Cosinus dvojnásobného úhlu", "tex": "\\cos 2x = \\cos^2 x - \\sin^2 x"}
  ]
}
```

## Planimetrie (3. ročník)

### [Planimetrie, úhel, vzájemná poloha přímek](/mat/planimetrie/01-planimetrie-uhel-vzajemna-poloha-primek/)

```formulas
{
  "sections": [
    {"items": [
        {"label": "Převod stupňů na radiány", "tex": "1° = \\frac{1\\cdot\\pi}{180}\\text{ rad} \\approx 0{,}017\\text{ rad}"}
    ]},
    {"title": "Například", "items": [
        {"tex": "30° = \\frac{30\\pi}{180} = \\frac{\\pi}{6}\\text{ rad}"},
        {"tex": "60° = \\frac{60\\pi}{180}=\\frac{\\pi}{3}\\text{ rad}"},
        {"tex": "90° = \\frac{\\pi}{2}\\text{ rad}"},
        {"tex": "120° = \\frac{2\\pi}{3}\\text{ rad}"}
    ]}
  ]
}
```

### [Trojúhelník – základní poznatky](/mat/planimetrie/02-trojuhelnik-zakladni-poznatky/)

```formulas
{
  "items": [
    {"label": "Součet vnitřních úhlů", "tex": "\\alpha+\\beta+\\gamma = 180°"},
    {"label": "Trojúhelníková nerovnost", "tex": "a+b>c", "note": "současně $a+c>b$ a $b+c>a$"},
    {"label": "Podobnost trojúhelníků", "tex": "\\frac{a}{a'} = \\frac{b}{b'} = \\frac{c}{c'} = k"}
  ]
}
```

### [Trojúhelník – pravoúhlý](/mat/planimetrie/03-trojuhelnik-pravouhly/)

```formulas
{
  "items": [
    {"label": "Pythagorova věta", "tex": "c^2 = a^2+b^2"},
    {"label": "Sinus", "tex": "\\sin\\alpha = \\frac{\\text{protilehlá}}{\\text{přepona}} = \\frac{a}{c}"},
    {"label": "Cosinus", "tex": "\\cos\\alpha = \\frac{\\text{přilehlá}}{\\text{přepona}} = \\frac{b}{c}"},
    {"label": "Tangens", "tex": "\\mathrm{tg}\\,\\alpha = \\frac{\\text{protilehlá}}{\\text{přilehlá}} = \\frac{a}{b}"},
    {"label": "Cotangens", "tex": "\\mathrm{cotg}\\,\\alpha = \\frac{\\text{přilehlá}}{\\text{protilehlá}} = \\frac{b}{a}"},
    {"label": "Euklidova věta o výšce", "tex": "v_c^2 = c_a \\cdot c_b"},
    {"label": "Euklidova věta o odvěsnách (odvěsna $a$)", "tex": "a^2 = c\\cdot c_a"},
    {"label": "Euklidova věta o odvěsnách (odvěsna $b$)", "tex": "b^2 = c\\cdot c_b"}
  ]
}
```

### [Trojúhelník – obecný](/mat/planimetrie/04-trojuhelnik-obecny/)

```formulas
{
  "items": [
    {"label": "Obsah pomocí strany a výšky", "tex": "S = \\frac{a\\cdot v_a}{2} = \\frac{b\\cdot v_b}{2} = \\frac{c\\cdot v_c}{2}"},
    {"label": "Heronův vzorec", "tex": "S = \\sqrt{s(s-a)(s-b)(s-c)}", "note": "kde $\\displaystyle s=\\frac{a+b+c}{2}$ je poloviční obvod"},
    {"label": "Obsah pomocí dvou stran a sevřeného úhlu", "tex": "S = \\frac12 ab\\sin\\gamma = \\frac12 ac\\sin\\beta = \\frac12 bc\\sin\\alpha"},
    {"label": "Poloměr kružnice opsané", "tex": "r = \\frac{abc}{4S}"},
    {"label": "Poloměr kružnice vepsané", "tex": "\\rho = \\frac{S}{s}"}
  ]
}
```

### [Rovnoběžníky](/mat/planimetrie/05-rovnobezniky/)

```formulas
{
  "sections": [
    {"title": "Čtverec", "items": [
        {"label": "Obvod", "tex": "o=4a"},
        {"label": "Obsah", "tex": "S=a^2=\\frac12 u^2"},
        {"label": "Úhlopříčka", "tex": "u = a\\sqrt2"},
        {"label": "Poloměr kružnice vepsané", "tex": "\\rho = \\frac{a}{2}"},
        {"label": "Poloměr kružnice opsané", "tex": "r = \\frac{u}{2}"}
    ]},
    {"title": "Obdélník", "items": [
        {"label": "Obvod", "tex": "o = 2(a+b)"},
        {"label": "Obsah", "tex": "S = a\\cdot b"},
        {"label": "Úhlopříčka", "tex": "u=\\sqrt{a^2+b^2}"},
        {"label": "Poloměr kružnice opsané", "tex": "r=\\frac{u}{2}"}
    ]},
    {"title": "Kosočtverec", "items": [
        {"label": "Obvod", "tex": "o = 4a"},
        {"label": "Obsah", "tex": "S = a\\cdot v = \\frac12 u_1 u_2 = a^2\\sin\\alpha = a^2\\sin\\beta"},
        {"label": "Poloměr kružnice vepsané", "tex": "\\rho = \\frac12 a\\sin\\alpha"}
    ]},
    {"title": "Kosodélník", "items": [
        {"label": "Obvod", "tex": "o = 2(a+b)"},
        {"label": "Obsah", "tex": "S = a\\cdot v_a = b\\cdot v_b = ab\\sin\\alpha = ab\\sin\\beta"}
    ]}
  ]
}
```

### [Lichoběžník](/mat/planimetrie/06-lichobeznik/)

```formulas
{
  "items": [
    {"label": "Obvod", "tex": "o = a+b+c+d"},
    {"label": "Obsah", "tex": "S = m \\cdot v", "note": "kde $m$ je střední příčka"},
    {"label": "Rovnoramenný lichoběžník — vodorovný přesah kratší základny", "tex": "x' = x'' = \\frac{a-c}{2}"},
    {"label": "Pravoúhlý lichoběžník — vodorovný přesah kratší základny", "tex": "x = a-c"}
  ]
}
```

### [Pravidelný n-úhelník, nepravidelný n-úhelník](/mat/planimetrie/07-pravidelny-n-uhelnik-nepravidelny-n-uhelnik/)

```formulas
{
  "items": [
    {"label": "Obsah", "tex": "S = n \\cdot S_{\\text{trojúhelníka}}", "note": "kde $n$ je počet trojúhelníků"},
    {"label": "Obvod", "tex": "o = n\\cdot a", "note": "kde $a$ je strana $n$-úhelníka"},
    {"label": "Úhel u středu v každém z dílčích trojúhelníků", "tex": "\\alpha = \\frac{360°}{n}"}
  ]
}
```

### [Kruh, kružnice](/mat/planimetrie/08-kruh-kruznice/)

```formulas
{
  "items": [
    {"label": "Obvod kružnice", "tex": "o = 2\\pi r = \\pi d"},
    {"label": "Obsah kruhu", "tex": "S = \\pi r^2"},
    {"label": "Obsah mezikruží", "tex": "S_{\\text{mezikruží}} = \\pi r_1^2 - \\pi r_2^2 = \\pi(r_1^2-r_2^2)"}
  ]
}
```

### [Délka kruhového oblouku a kruhová výseč](/mat/planimetrie/09-delka-kruhoveho-oblouku-a-kruhova-vysec/)

```formulas
{
  "items": [
    {"label": "Délka oblouku (α ve stupních)", "tex": "l = \\frac{2\\pi r}{360°}\\cdot\\alpha"},
    {"label": "Délka oblouku (α v radiánech)", "tex": "l = \\frac{2\\pi r}{2\\pi}\\cdot\\alpha = r\\alpha"},
    {"label": "Obsah výseče (α ve stupních)", "tex": "S_{\\text{výs}} = \\frac{\\pi r^2}{360°}\\cdot\\alpha"},
    {"label": "Obsah výseče (α v radiánech)", "tex": "S_{\\text{výs}} = \\frac{\\pi r^2}{2\\pi}\\cdot\\alpha = \\frac{r^2\\alpha}{2}"}
  ]
}
```

### [Kruhová úseč](/mat/planimetrie/10-kruhova-usec/)

```formulas
{
  "items": [
    {"label": "Obsah úseče", "tex": "S_{\\text{úseč}} = S_{\\text{výseč}} - S_{\\triangle} = \\frac{\\pi r^2}{360°}\\cdot\\alpha - \\frac{a\\cdot v_a}{2}"}
  ]
}
```

## Stereometrie (3. ročník)

### [Kolmý hranol](/mat/stereometrie/03-kolmy-hranol/)

```formulas
{
  "sections": [
    {"items": [
        {"label": "Objem hranolu", "tex": "V = S_p \\cdot v"},
        {"label": "Povrch hranolu", "tex": "S = 2S_p + S_{pl}"}
    ]},
    {"title": "Krychle", "items": [
        {"label": "Objem", "tex": "V = a^3"},
        {"label": "Povrch", "tex": "S = 6a^2"}
    ]},
    {"title": "Kvádr", "items": [
        {"label": "Objem", "tex": "V = a\\cdot b\\cdot c"},
        {"label": "Povrch", "tex": "S = 2ab + 2ac + 2bc = 2(ab+ac+bc)"}
    ]}
  ]
}
```

### [Rotační válec](/mat/stereometrie/04-rotacni-valec/)

```formulas
{
  "items": [
    {"label": "Obsah podstavy", "tex": "S_p = \\pi r^2"},
    {"label": "Obsah pláště", "tex": "S_{pl} = 2\\pi r v"},
    {"label": "Povrch", "tex": "S = 2S_p + S_{pl} = 2\\pi r^2 + 2\\pi r v = 2\\pi r(r+v)"},
    {"label": "Objem", "tex": "V = S_p \\cdot v = \\pi r^2 v"}
  ]
}
```

### [Jehlan](/mat/stereometrie/05-jehlan/)

```formulas
{
  "sections": [
    {"items": [
        {"label": "Povrch jehlanu", "tex": "S = S_p + S_{pl}"},
        {"label": "Objem jehlanu", "tex": "V = \\frac13 S_p \\cdot v"}
    ]},
    {"title": "Pravidelný čtyřboký jehlan", "items": [
        {"label": "Povrch", "tex": "S = a^2 + 2as"},
        {"label": "Objem", "tex": "V = \\frac13 a^2 v"}
    ]},
    {"title": "Pravidelný čtyřstěn", "items": [
        {"label": "Povrch", "tex": "S = a^2\\sqrt3"},
        {"label": "Objem", "tex": "V = \\frac{1}{12}a^3\\sqrt2"}
    ]},
    {"items": [
        {"label": "Obsah podstavy — pravidelný $n$-úhelník o straně $a$", "tex": "S = \\frac{n\\cdot a^2}{4}\\cdot\\cot\\left(\\frac{\\pi}{n}\\right)"}
    ]}
  ]
}
```

### [Rotační kužel](/mat/stereometrie/06-rotacni-kuzel/)

```formulas
{
  "items": [
    {"label": "Obsah podstavy", "tex": "S_p = \\pi r^2"},
    {"label": "Obsah pláště", "tex": "S_{pl} = \\pi r s"},
    {"label": "Povrch", "tex": "S = S_p + S_{pl} = \\pi r^2 + \\pi r s = \\pi r(r+s)"},
    {"label": "Objem", "tex": "V = \\frac13 \\pi r^2 v"}
  ]
}
```

### [Komolý jehlan](/mat/stereometrie/07-komoly-jehlan/)

```formulas
{
  "items": [
    {"label": "Objem", "tex": "V = \\frac{v}{3}\\left(S_{P1} + S_{P2} + \\sqrt{S_{P1}\\cdot S_{P2}}\\right)"},
    {"label": "Povrch", "tex": "S = S_{P1} + S_{P2} + S_{pl}"},
    {"label": "Obsah pláště pravidelného čtyřbokého komolého jehlanu", "tex": "S_{pl} = 4\\cdot\\frac{a_1+a_2}{2}\\cdot s = 2(a_1+a_2)s"}
  ]
}
```

### [Komolý kužel](/mat/stereometrie/08-komoly-kuzel/)

```formulas
{
  "items": [
    {"label": "Obsah dolní podstavy", "tex": "S_{P1} = \\pi r_1^2"},
    {"label": "Obsah horní podstavy", "tex": "S_{P2} = \\pi r_2^2"},
    {"label": "Obsah pláště", "tex": "S_{pl} = \\pi(r_1+r_2)s"},
    {"label": "Povrch", "tex": "S = \\pi r_1^2 + \\pi r_2^2 + \\pi(r_1+r_2)s"},
    {"label": "Objem", "tex": "V = \\frac13 \\pi v\\left(r_1^2 + r_1 r_2 + r_2^2\\right)"}
  ]
}
```

### [Koule, kulová plocha, kulová úseč a kulový vrchlík](/mat/stereometrie/09-koule-kulova-plocha-kulova-usec-a-kulovy-vrchlik/)

```formulas
{
  "items": [
    {"label": "Objem koule", "tex": "V = \\frac43 \\pi r^3"},
    {"label": "Povrch koule (kulová plocha)", "tex": "S = 4\\pi r^2"},
    {"label": "Obsah kulového vrchlíku", "tex": "S_{\\text{vrchlík}} = 2\\pi r v"},
    {"label": "Objem kulové úseče", "tex": "V_{\\text{úseč}} = \\frac{\\pi v^2}{3}(3r - v)"},
    {"label": "Poloměr řezné kružnice kulové úseče", "tex": "\\rho^2 = v(2r-v)"}
  ]
}
```

### [Kulová výseč, kulová vrstva a kulový pás](/mat/stereometrie/10-kulova-vysec-kulova-vrstva-a-kulovy-pas/)

```formulas
{
  "items": [
    {"label": "Objem kulové výseče", "tex": "V = \\frac23 \\pi r^2 v"},
    {"label": "Objem kulové vrstvy", "tex": "V = \\frac{\\pi v}{6}\\left(3\\rho_1^2 + 3\\rho_2^2 + v^2\\right)"},
    {"label": "Obsah kulového pásu", "tex": "S = 2\\pi r v"}
  ]
}
```

## Posloupnosti (3. ročník)

### [Aritmetická posloupnost](/mat/posloupnosti/02-aritmeticka-posloupnost/)

```formulas
{
  "items": [
    {"label": "Definice — další člen z předchozího a diference", "tex": "a_{n+1} = a_n + d"},
    {"label": "Člen pomocí sousedních členů", "tex": "a_n = \\frac{a_{n+1}+a_{n-1}}{2}"},
    {"label": "Libovolný člen z prvního členu a diference", "tex": "a_n = a_1 + (n-1)\\cdot d"},
    {"label": "Libovolný člen z jiného členu a diference", "tex": "a_r = a_s + (r-s)\\cdot d"},
    {"label": "Součet prvních $n$ členů", "tex": "S_n = \\frac{n}{2}\\cdot(a_1+a_n)"}
  ]
}
```

### [Geometrická posloupnost](/mat/posloupnosti/03-geometricka-posloupnost/)

```formulas
{
  "items": [
    {"label": "Definice — další člen z předchozího a kvocientu", "tex": "a_{n+1} = a_n \\cdot q"},
    {"label": "Libovolný člen z prvního členu a kvocientu", "tex": "a_n = a_1\\cdot q^{n-1}"},
    {"label": "Libovolný člen z jiného členu a kvocientu", "tex": "a_s = a_r \\cdot q^{s-r}"},
    {"label": "Součet prvních $n$ členů", "tex": "S_n = a_1\\cdot\\frac{q^n-1}{q-1}", "note": "pro $q\\neq1$"}
  ]
}
```

## Kombinatorika (3. ročník)

### [Variace a permutace bez opakování](/mat/kombinatorika/02-variace-a-permutace-bez-opakovani/)

```formulas
{
  "items": [
    {"label": "Variace bez opakování", "tex": "V(k,n) = n \\cdot (n-1) \\cdot (n-2) \\cdots (n-k+1) = \\frac{n!}{(n-k)!}"},
    {"label": "Permutace bez opakování", "tex": "P(n) = n!"}
  ]
}
```

### [Faktoriál](/mat/kombinatorika/03-faktorial/)

```formulas
{
  "items": [
    {"label": "$n$ faktoriál", "tex": "n! = 1 \\cdot 2 \\cdot 3 \\cdots (n-1) \\cdot n"}
  ]
}
```

### [Kombinace bez opakování](/mat/kombinatorika/04-kombinace-bez-opakovani/)

```formulas
{
  "items": [
    {"label": "Kombinace z variací", "tex": "C(k,n) = \\frac{V(k,n)}{k!}"},
    {"label": "Kombinační číslo", "tex": "C(k,n) = \\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}"}
  ]
}
```

### [Variace a permutace s opakováním](/mat/kombinatorika/05-variace-a-permutace-s-opakovanim/)

```formulas
{
  "items": [
    {"label": "Variace s opakováním", "tex": "V'(k,n) = n^k"},
    {"label": "Permutace s opakováním", "tex": "P'(n_1, n_2, \\ldots, n_m) = \\frac{n!}{n_1! \\cdot n_2! \\cdots n_m!}"}
  ]
}
```

### [Vlastnosti kombinačních čísel](/mat/kombinatorika/06-vlastnosti-kombinacnich-cisel/)

```formulas
{
  "items": [
    {"label": "Krajní hodnoty", "tex": "\\binom{n}{0} = 1", "note": "a také $\\displaystyle \\binom{n}{n} = 1$"},
    {"label": "Symetrie", "tex": "\\binom{n}{k} = \\binom{n}{n-k}"},
    {"label": "Pascalovo pravidlo (součtový vzorec)", "tex": "\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}"},
    {"label": "Součet řádku Pascalova trojúhelníku", "tex": "\\binom{n}{0} + \\binom{n}{1} + \\binom{n}{2} + \\cdots + \\binom{n}{n} = 2^n"}
  ]
}
```

### [Binomická věta](/mat/kombinatorika/07-binomicka-veta/)

```formulas
{
  "items": [
    {"label": "Binomická věta", "tex": "(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k"},
    {"label": "$(k+1)$-ní člen binomického rozvoje", "tex": "T_{k+1} = \\binom{n}{k} a^{n-k} b^k"}
  ]
}
```

## Statistika (4. ročník)

### [Statistika – charakteristiky polohy](/mat/statistika/04-statistika-charakteristiky-polohy/)

```formulas
{
  "items": [
    {"label": "Aritmetický průměr", "tex": "\\bar{x} = \\frac{\\sum_{i=1}^{n} x_i}{n}"},
    {"label": "Aritmetický průměr z četností", "tex": "\\bar{x} = \\frac{\\sum x_i n_i}{\\sum n_i}"},
    {"label": "Vážený průměr", "tex": "\\bar{x}_w = \\frac{\\sum x_i w_i}{\\sum w_i}"},
    {"label": "Geometrický průměr", "tex": "G = \\sqrt[n]{x_1\\cdot x_2\\cdots x_n}"},
    {"label": "Harmonický průměr", "tex": "H = \\frac{n}{\\sum_{i=1}^n \\frac{1}{x_i}}"}
  ]
}
```

### [Statistika – charakteristiky variability](/mat/statistika/05-statistika-charakteristiky-variability/)

```formulas
{
  "items": [
    {"label": "Rozptyl", "tex": "s^2 = \\frac1n\\sum_{i=1}^n (x_i-\\bar x)^2"},
    {"label": "Směrodatná odchylka", "tex": "s = \\sqrt{s^2} = \\sqrt{\\frac1n\\sum_{i=1}^n (x_i-\\bar x)^2}"},
    {"label": "Variační koeficient", "tex": "v = \\frac{s}{\\bar x}\\cdot 100\\%"}
  ]
}
```

### [Statistika – korelace](/mat/statistika/06-statistika-korelace/)

```formulas
{
  "items": [
    {"label": "Koeficient korelace", "tex": "r_{xy} = \\frac{\\frac1n\\sum_{i=1}^n (x_i-\\bar x)(y_i-\\bar y)}{s_x s_y}"},
    {"label": "Koeficient korelace — vzorec pro ruční výpočet", "tex": "r_{xy} = \\frac{\\frac1n\\sum_{i=1}^n x_i y_i - \\bar x\\bar y}{s_x s_y}"}
  ]
}
```

## Analytická geometrie (4. ročník)

### [Úsečka, střed a délka úsečky](/mat/analyticka-geometrie/02-usecka-stred-a-delka-usecky/)

```formulas
{
  "items": [
    {"label": "Vzdálenost dvou bodů", "tex": "|AB| = \\sqrt{(x_B-x_A)^2 + (y_B-y_A)^2}"},
    {"label": "Střed úsečky", "tex": "S = \\left[\\frac{x_A+x_B}{2};\\ \\frac{y_A+y_B}{2}\\right]"}
  ]
}
```

### [Operace s vektory](/mat/analyticka-geometrie/03-operace-s-vektory/)

```formulas
{
  "items": [
    {"label": "Souřadnice vektoru", "tex": "\\vec{u} = \\overrightarrow{AB} = B - A = (x_B - x_A;\\ y_B - y_A)"},
    {"label": "Velikost vektoru", "tex": "|\\vec u| = \\sqrt{u_1^2+u_2^2}"},
    {"label": "Násobení vektoru číslem", "tex": "k\\cdot\\vec u = (k\\cdot u_1;\\ k\\cdot u_2)"}
  ]
}
```

### [Součet a rozdíl vektorů](/mat/analyticka-geometrie/04-soucet-a-rozdil-vektoru/)

```formulas
{
  "items": [
    {"label": "Součet vektorů", "tex": "\\vec u + \\vec v = (u_1+v_1;\\ u_2+v_2)"},
    {"label": "Rozdíl vektorů", "tex": "\\vec u - \\vec v = (u_1-v_1;\\ u_2-v_2)"}
  ]
}
```

### [Úhel dvou vektorů](/mat/analyticka-geometrie/05-uhel-dvou-vektoru/)

```formulas
{
  "items": [
    {"label": "Skalární součin", "tex": "\\vec u\\cdot\\vec v = u_1v_1 + u_2v_2"},
    {"label": "Úhel dvou vektorů", "tex": "\\cos\\varphi = \\frac{\\vec u\\cdot\\vec v}{|\\vec u|\\cdot|\\vec v|}"},
    {"label": "Kolmost vektorů", "tex": "\\vec u \\perp \\vec v \\iff \\vec u\\cdot\\vec v = 0"}
  ]
}
```

### [Směrový a normálový vektor](/mat/analyticka-geometrie/06-smerovy-a-normalovy-vektor/)

```formulas
{
  "items": [
    {"label": "Normálový vektor ze směrového vektoru", "tex": "\\vec n = (s_2;\\ -s_1)", "note": "nebo ekvivalentně $\\vec n=(-s_2;\\ s_1)$"}
  ]
}
```

### [Parametrické vyjádření přímky](/mat/analyticka-geometrie/07-parametricke-vyjadreni-primky/)

```formulas
{
  "items": [
    {"label": "Parametrická rovnice přímky", "tex": "p:\\ X = A + t\\cdot\\vec s", "note": "kde $t\\in\\mathbb{R}$"},
    {"label": "Parametrické rovnice přímky po souřadnicích", "tex": "x = x_A + t\\cdot s_1, \\qquad y = y_A + t\\cdot s_2", "note": "kde $t\\in\\mathbb{R}$"}
  ]
}
```

### [Obecná rovnice přímky](/mat/analyticka-geometrie/08-obecna-rovnice-primky/)

```formulas
{
  "items": [
    {"label": "Přímka bodem $A$ s normálovým vektorem $\\vec n=(a;b)$", "tex": "a(x-x_A) + b(y-y_A) = 0"},
    {"label": "Obecná rovnice přímky", "tex": "ax+by+c=0"}
  ]
}
```

### [Směrnicový tvar rovnice přímky](/mat/analyticka-geometrie/09-smernicovy-tvar-rovnice-primky/)

```formulas
{
  "items": [
    {"label": "Směrnicový tvar", "tex": "y = kx+q"},
    {"label": "Směrnice přímky", "tex": "k = \\mathrm{tg}\\,\\varphi"},
    {"label": "Směrnice a $q$ z obecné rovnice", "tex": "y = -\\frac{a}{b}x - \\frac{c}{b} \\implies k=-\\frac{a}{b},\\quad q=-\\frac{c}{b}"}
  ]
}
```

### [Kuželosečky](/mat/analyticka-geometrie/10-kuzelosecky/)

```formulas
{
  "items": [
    {"label": "Elipsa", "tex": "\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1"},
    {"label": "Parabola", "tex": "y^2 = 2px"},
    {"label": "Hyperbola", "tex": "\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1"}
  ]
}
```

### [Kružnice](/mat/analyticka-geometrie/11-kruznice/)

```formulas
{
  "items": [
    {"label": "Kružnice se středem v počátku", "tex": "x^2+y^2=r^2"},
    {"label": "Středová rovnice kružnice", "tex": "(x-m)^2+(y-n)^2=r^2"},
    {"label": "Obecná rovnice kružnice", "tex": "x^2+y^2+Dx+Ey+F=0"},
    {"label": "Převod na středový tvar", "tex": "\\left(x+\\frac D2\\right)^2+\\left(y+\\frac E2\\right)^2 = \\frac{D^2+E^2}{4}-F"}
  ]
}
```
