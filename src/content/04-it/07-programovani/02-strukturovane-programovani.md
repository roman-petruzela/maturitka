---
title: "Strukturované programování"
order: 2
tags: ["doplněno"]
---

Pozn. ke kódu: obecné principy jsou nejdřív popsané slovně, ke konkrétním konstrukcím jsou pak ukázky reálného, spustitelného kódu v Pythonu a v C# vedle sebe – ve škole se běžně používají oba jazyky, princip řídicích struktur je ale ve všech běžných jazycích stejný.

## Datové typy
- **datový typ** = určuje, jaké hodnoty může proměnná nabývat a jaké operace s ní lze provádět
- základní typy:
	- **celé číslo** (integer, int) = čísla bez desetinné části; má omezený rozsah daný počtem bitů (přetečení – overflow, pokud je hodnota mimo rozsah)
	- **desetinné číslo** (float, double) = čísla s desetinnou částí; uloženo s omezenou přesností, může vznikat zaokrouhlovací chyba
	- **znak** (char) = jediný znak (písmeno, číslice, symbol), interně uložen jako číselný kód (např. ASCII/Unicode)
	- **řetězec** (string) = posloupnost znaků, v mnoha jazycích je to vlastně pole znaků
	- **logická hodnota** (boolean) = true/false, výsledek porovnání a logických operací
	- **pole** (array) = uspořádaná kolekce hodnot stejného typu
- **statické typování** = typ proměnné je pevně daný a kontrolovaný při překladu (Java, C#) x **dynamické typování** = typ se určuje až za běhu programu (Python, JavaScript)

## Proměnné a konstanty
- **proměnná** = pojmenované místo v paměti pro uložení hodnoty; má identifikátor (název), typ a hodnotu
- **deklarace** = oznámení, že proměnná existuje a jaký má typ; **inicializace** = přiřazení první hodnoty
- **konstanta** = pojmenovaná hodnota, kterou po nastavení nelze v průběhu programu změnit (používá se pro hodnoty, které se nemění – např. matematické konstanty, konfigurační údaje)
- **platnost proměnné** (scope) = část programu, ve které je proměnná viditelná a použitelná (lokální proměnná uvnitř funkce/bloku x globální proměnná v celém programu)

## Řídicí struktury
- **sekvence** = základní řídicí struktura, příkazy se provádějí jeden po druhém v pořadí, v jakém jsou zapsané
- **větvení** (podmínka) = na základě splnění/nesplnění podmínky se provede jedna z několika větví programu
	- `if / else if / else`
	- `switch / case` = větvení podle konkrétní hodnoty proměnné, vhodné při větším počtu možností
	- **složené podmínky** = kombinace více podmínek pomocí logických operátorů AND (a zároveň), OR (nebo), NOT (negace)
- **cyklus** (opakování) = opakované provádění bloku příkazů, dokud platí/neplatí daná podmínka
	- `for` = cyklus s pevným (předem známým) počtem opakování, typicky s řídicí proměnnou (čítačem)
	- `while` = cyklus s podmínkou na začátku; pokud podmínka neplatí hned na začátku, tělo cyklu se nemusí provést ani jednou
	- `do-while` / `repeat-until` = cyklus s podmínkou na konci; tělo cyklu se provede vždy alespoň jednou

#### Větvení – `if / else`

**Python:**
```python
vek = 20
ma_obcanku = True

if vek >= 18 and ma_obcanku:
    print("může volit")
else:
    print("nemůže volit")
```

**C#:**
```csharp
int vek = 20;
bool maObcanku = true;

if (vek >= 18 && maObcanku)
{
    Console.WriteLine("může volit");
}
else
{
    Console.WriteLine("nemůže volit");
}
```

#### Větvení podle hodnoty – `switch / case`

**Python** (od verze 3.10 lze použít `match`, ve starším kódu se místo toho běžně používá řetězec `if / elif`):
```python
den = 3

match den:
    case 1:
        print("pondělí")
    case 2:
        print("úterý")
    case 3:
        print("středa")
    case _:
        print("neznámý den")
```

**C#:**
```csharp
int den = 3;

switch (den)
{
    case 1:
        Console.WriteLine("pondělí");
        break;
    case 2:
        Console.WriteLine("úterý");
        break;
    case 3:
        Console.WriteLine("středa");
        break;
    default:
        Console.WriteLine("neznámý den");
        break;
}
```

#### Cyklus s pevným počtem opakování – `for`

**Python:**
```python
for i in range(10):   # i postupně nabývá hodnot 0 až 9
    print(i)
```

**C#:**
```csharp
for (int i = 0; i < 10; i++)
{
    Console.WriteLine(i);
}
```

#### Cyklus s podmínkou na začátku – `while`

**Python:**
```python
pocet = 0
while pocet < 5:
    print(pocet)
    pocet += 1
```

**C#:**
```csharp
int pocet = 0;
while (pocet < 5)
{
    Console.WriteLine(pocet);
    pocet++;
}
```

#### Cyklus s podmínkou na konci – `do-while`

Python nemá vestavěný `do-while`, stejné chování (tělo se provede vždy alespoň jednou) se zapisuje pomocí `while True` a `break` na konci těla:

**Python:**
```python
pocet = 0
while True:
    print(pocet)          # tělo se provede vždy alespoň jednou
    pocet += 1
    if not (pocet < 5):
        break
```

**C#:**
```csharp
int pocet = 0;
do
{
    Console.WriteLine(pocet);
    pocet++;
} while (pocet < 5);
```

## Práce s textovým řetězcem
- základní operace nad řetězci:
	- zjištění **délky** řetězce
	- **spojování** (konkatenace) dvou a více řetězců
	- získání **podřetězce** (substring) podle pozice a délky
	- **hledání** znaku/podřetězce uvnitř řetězce
	- **nahrazení** části řetězce
	- převod velikosti písmen (na velká/malá)
	- **rozdělení** řetězce na části podle oddělovače (split) a opačně spojení částí do řetězce (join)
	- převod řetězce na číslo a naopak (parsování)

**Python:**
```python
text = "Ahoj, světe!"

print(len(text))                       # délka řetězce -> 12
pozdrav = text + " Jak se máš?"        # spojování (konkatenace)
cast = text[6:11]                      # podřetězec (substring) -> "světe"
print("světe" in text)                 # hledání podřetězce -> True
nahrazeno = text.replace("Ahoj", "Nazdar")
velka = text.upper()                   # "AHOJ, SVĚTE!"
mala = text.lower()                    # "ahoj, světe!"
casti = text.split(", ")               # rozdělení -> ["Ahoj", "světe!"]
spojeno = "-".join(casti)              # spojení zpět -> "Ahoj-světe!"
cislo = int("42")                      # převod řetězce na číslo
retezec = str(42)                      # převod čísla na řetězec
```

**C#:**
```csharp
string text = "Ahoj, světe!";

Console.WriteLine(text.Length);                 // délka řetězce -> 12
string pozdrav = text + " Jak se máš?";         // spojování (konkatenace)
string cast = text.Substring(6, 5);             // podřetězec -> "světe"
Console.WriteLine(text.Contains("světe"));      // hledání podřetězce -> True
string nahrazeno = text.Replace("Ahoj", "Nazdar");
string velka = text.ToUpper();                  // "AHOJ, SVĚTE!"
string mala = text.ToLower();                   // "ahoj, světe!"
string[] casti = text.Split(", ");              // rozdělení -> ["Ahoj", "světe!"]
string spojeno = string.Join("-", casti);       // spojení zpět -> "Ahoj-světe!"
int cislo = int.Parse("42");                    // převod řetězce na číslo
string retezec = cislo.ToString();              // převod čísla na řetězec
```

## Pole
- **pole** = pevně uspořádaná kolekce prvků stejného typu, přístup k prvku přes **index**
- indexování obvykle začíná od 0 (první prvek má index 0, poslední index `délka - 1`)
- pole může mít **statickou** velikost (pevně daná při vytvoření) nebo **dynamickou** (lze měnit za běhu, např. seznam/list)
- **vícerozměrné pole** (matice) = pole polí, přístup přes dva a více indexů (řádek, sloupec)
- typické operace nad polem: průchod (iterace) přes všechny prvky, součet/průměr prvků, nalezení maxima/minima, hledání prvku, řazení

**Python** (v Pythonu se místo pole typicky používá `list`, který má navíc dynamickou velikost):
```python
znamky = [1, 2, 1, 3, 5]

print(znamky[0])            # přístup přes index -> 1
soucet = sum(znamky)
prumer = soucet / len(znamky)

for znamka in znamky:       # průchod polem (iterace)
    print(znamka)

# vícerozměrné pole (matice) 2x3 – seznam seznamů
matice = [[1, 2, 3], [4, 5, 6]]
print(matice[1][2])         # řádek 1, sloupec 2 -> 6
```

**C#:**
```csharp
int[] znamky = { 1, 2, 1, 3, 5 };

Console.WriteLine(znamky[0]);          // přístup přes index -> 1
int soucet = znamky.Sum();             // vyžaduje "using System.Linq;"
double prumer = (double)soucet / znamky.Length;

foreach (int znamka in znamky)         // průchod polem (iterace)
{
    Console.WriteLine(znamka);
}

// vícerozměrné pole (matice) 2x3
int[,] matice = { { 1, 2, 3 }, { 4, 5, 6 } };
Console.WriteLine(matice[1, 2]);       // řádek 1, sloupec 2 -> 6
```

## Typické algoritmy
- **součet/průměr prvků pole** = průchod polem s postupným přičítáním do pomocné proměnné
- **hledání maxima/minima** = průchod polem s průběžným porovnáváním s dosud nalezenou nejvyšší/nejnižší hodnotou
- **lineární vyhledávání** = postupné procházení prvků pole od začátku, dokud se nenajde hledaná hodnota nebo pole neskončí
- **řazení** (sorting) = uspořádání prvků pole podle klíče (vzestupně/sestupně); základní princip lze ukázat na tzv. bublinkovém řazení (bubble sort) – opakované porovnávání a prohazování sousedních prvků, dokud není pole seřazené

Ukázka postupně řeší na stejném poli všechny čtyři algoritmy z předchozích odrážek (součet/průměr, maximum, lineární vyhledávání, bublinkové řazení):

**Python:**
```python
cisla = [5, 3, 8, 1, 9, 2]

# součet a průměr prvků pole
soucet = 0
for cislo in cisla:
    soucet += cislo
prumer = soucet / len(cisla)

# hledání maxima
maximum = cisla[0]
for cislo in cisla:
    if cislo > maximum:
        maximum = cislo

# lineární vyhledávání hodnoty 8
hledana_hodnota = 8
nalezeno_na_indexu = -1
for i in range(len(cisla)):
    if cisla[i] == hledana_hodnota:
        nalezeno_na_indexu = i
        break

# bublinkové řazení (bubble sort) vzestupně
for i in range(len(cisla) - 1):
    for j in range(len(cisla) - 1 - i):
        if cisla[j] > cisla[j + 1]:
            cisla[j], cisla[j + 1] = cisla[j + 1], cisla[j]

print(cisla)   # [1, 2, 3, 5, 8, 9]
```

**C#:**
```csharp
int[] cisla = { 5, 3, 8, 1, 9, 2 };

// součet a průměr prvků pole
int soucet = 0;
foreach (int cislo in cisla)
{
    soucet += cislo;
}
double prumer = (double)soucet / cisla.Length;

// hledání maxima
int maximum = cisla[0];
foreach (int cislo in cisla)
{
    if (cislo > maximum)
    {
        maximum = cislo;
    }
}

// lineární vyhledávání hodnoty 8
int hledanaHodnota = 8;
int nalezenoNaIndexu = -1;
for (int i = 0; i < cisla.Length; i++)
{
    if (cisla[i] == hledanaHodnota)
    {
        nalezenoNaIndexu = i;
        break;
    }
}

// bublinkové řazení (bubble sort) vzestupně
for (int i = 0; i < cisla.Length - 1; i++)
{
    for (int j = 0; j < cisla.Length - 1 - i; j++)
    {
        if (cisla[j] > cisla[j + 1])
        {
            int docasna = cisla[j];
            cisla[j] = cisla[j + 1];
            cisla[j + 1] = docasna;
        }
    }
}
```

## Zobecnění, testování a ladění
- **zobecnění řešení** = algoritmus by neměl fungovat jen pro jeden konkrétní vstup, ale pro celou třídu podobných problémů (parametrizace vstupu, ošetření okrajových/hraničních případů – prázdný vstup, jediný prvek, záporná čísla apod.)
- **testování programu**:
	- sestavení sady testovacích vstupů včetně hraničních hodnot (edge cases)
	- porovnání skutečného výstupu s očekávaným
	- typy chyb: **syntaktická chyba** (program se ani nespustí/nepřeloží), **běhová chyba** (runtime error – program spadne za běhu, např. dělení nulou), **logická chyba** (program běží, ale dává špatný výsledek)
- **ladění** (debugging) = hledání a oprava chyby; techniky: krokování programu (postupné spouštění příkaz po příkazu), sledování hodnot proměnných, dočasné výpisy (print/log), použití debuggeru s přerušovacími body (breakpoints)

## Hodnocení a porovnávání algoritmů, časová a paměťová složitost
- pro stejný problém může existovat víc algoritmů řešení – liší se rychlostí, nároky na paměť a jednoduchostí zápisu
- **asymptotická složitost** = odhad, jak rychle roste čas (časová složitost) nebo paměť (paměťová složitost) potřebná pro algoritmus v závislosti na velikosti vstupu `n`; zapisuje se pomocí tzv. O-notace (velké O)
- základní třídy složitosti:
	- **O(1)** – konstantní: doba běhu nezávisí na velikosti vstupu (např. přístup k prvku pole podle indexu)
	- **O(log n)** – logaritmická: s každým krokem se prohledávaný prostor zmenší na polovinu (např. binární vyhledávání v seřazeném poli)
	- **O(n)** – lineární: doba běhu roste přímo úměrně s velikostí vstupu (např. lineární vyhledávání, jeden průchod polem)
	- **O(n²)** – kvadratická: typicky dva vnořené cykly přes vstup (např. bublinkové řazení, porovnání každého prvku s každým)
- při výběru algoritmu se hodnotí, jak se bude chovat pro malý i velký vstup – algoritmus s horší složitostí může být pro malá data v pořádku (je jednodušší na zápis), ale pro velká data se stane nepoužitelným
- **vylepšení algoritmu** = např. nahrazení lineárního vyhledávání binárním na seřazených datech změní složitost z O(n) na O(log n); cena za to je nutnost mít data předem seřazená
