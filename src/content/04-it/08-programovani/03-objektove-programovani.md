---
title: "Objektově orientované programování"
order: 3
tags: ["doplněno"]
---

Pozn. ke kódu: obecné principy jsou popsané slovně, ke každému klíčovému pojmu je pak ukázka reálného kódu v Pythonu a v C# vedle sebe – oba jazyky se ve výuce běžně používají a princip OOP je v nich (i ve všech dalších běžných OOP jazycích) stejný.

## Třída a objekt
- **objektově orientované programování** (OOP) = způsob návrhu programu, kdy je problém rozdělen na spolupracující objekty odpovídající reálným entitám (uživatel, objednávka, vozidlo…)
- **třída** (class) = šablona/předpis, který popisuje, jaké **atributy** (vlastnosti, data) a jaké **metody** (chování, operace) budou mít objekty tohoto typu
- **objekt** (instance) = konkrétní realizace třídy vytvořená v paměti; ze stejné třídy lze vytvořit libovolný počet objektů, každý má vlastní hodnoty atributů
- analogie: třída je jako recept, objekt je konkrétní upečený koláč podle receptu – receptů je jeden, koláčů z něj může vzniknout mnoho a každý může být trochu jiný (jiná velikost, náplň)
- **atribut** = proměnná patřící objektu, popisuje jeho stav (např. objekt Auto má atributy barva, znacka, rychlost)
- **metoda** = funkce patřící třídě, popisuje chování objektu a má přístup k jeho atributům (např. metoda zrychli() mění atribut rychlost)

**Python:**
```python
class Auto:
    def zrychli(self, o_kolik):
        self.rychlost += o_kolik

# vytvoření objektu (instance) třídy Auto
auto1 = Auto()
auto1.barva = "červená"      # atribut
auto1.rychlost = 0
auto1.zrychli(20)             # volání metody
print(auto1.rychlost)         # 20
```

**C#:**
```csharp
class Auto
{
    public string Barva;      // atribut
    public int Rychlost;

    public void Zrychli(int oKolik)   // metoda
    {
        Rychlost += oKolik;
    }
}

// vytvoření objektu (instance) třídy Auto
Auto auto1 = new Auto();
auto1.Barva = "červená";
auto1.Rychlost = 0;
auto1.Zrychli(20);
Console.WriteLine(auto1.Rychlost);   // 20
```

## Konstruktor
- **konstruktor** = speciální metoda volaná automaticky při vytváření nového objektu (operátorem `new` nebo ekvivalentem); slouží k inicializaci atributů na počáteční hodnoty
- konstruktor má obvykle stejný název jako třída a nevrací žádnou hodnotu

**Python:** konstruktor se jmenuje vždy `__init__` a jeho prvním parametrem je `self` (odkaz na vytvářený objekt):
```python
class Auto:
    def __init__(self, zadana_barva):    # konstruktor
        self.barva = zadana_barva
        self.rychlost = 0

    def zrychli(self, o_kolik):
        self.rychlost += o_kolik

auto1 = Auto("červená")   # zavolá se __init__
auto1.zrychli(20)
print(auto1.barva, auto1.rychlost)   # červená 20
```

**C#:** konstruktor má stejný název jako třída a nemá návratový typ:
```csharp
class Auto
{
    public string Barva;
    public int Rychlost;

    public Auto(string zadanaBarva)   // konstruktor
    {
        Barva = zadanaBarva;
        Rychlost = 0;
    }

    public void Zrychli(int oKolik)
    {
        Rychlost += oKolik;
    }
}

Auto auto1 = new Auto("červená");   // zavolá se konstruktor
auto1.Zrychli(20);
Console.WriteLine($"{auto1.Barva} {auto1.Rychlost}");   // červená 20
```

## Přetěžování metod a konstruktoru
- **přetěžování** (overloading) = v rámci jedné třídy může existovat víc metod (nebo konstruktorů) se stejným názvem, které se liší počtem nebo typem parametrů
- při volání se podle zadaných argumentů automaticky vybere odpovídající verze
- typický příklad: **bezparametrický konstruktor** (nastaví výchozí hodnoty) vedle konstruktoru, který přijímá vstupní hodnoty

**Python** nemá klasické přetěžování (novější definice metody/konstruktoru se stejným jménem by tu předchozí jen přepsala) – řeší se výchozími hodnotami parametrů:
```python
class Auto:
    def __init__(self, barva="bílá"):   # výchozí hodnota nahrazuje přetížení
        self.barva = barva

auto1 = Auto()             # barva = "bílá"
auto2 = Auto("červená")    # barva = "červená"
```

**C#** skutečné přetěžování podporuje – v jedné třídě může být víc konstruktorů/metod se stejným jménem:
```csharp
class Auto
{
    public string Barva;

    public Auto()                     // konstruktor bez parametrů
    {
        Barva = "bílá";
    }

    public Auto(string zadanaBarva)   // přetížený konstruktor s parametrem
    {
        Barva = zadanaBarva;
    }
}

Auto auto1 = new Auto();             // Barva = "bílá"
Auto auto2 = new Auto("červená");    // Barva = "červená"
```

## Zapouzdření
- **zapouzdření** (encapsulation) = skrytí vnitřního stavu (atributů) objektu před vnějším přístupem; k datům se přistupuje pouze přes veřejné metody objektu, ne přímo
- atributy bývají označené jako **private** (přístupné jen uvnitř třídy), metody, které je zpřístupňují navenek, jako **public**
- typicky se používají **gettery** (metody pro čtení hodnoty atributu) a **settery** (metody pro nastavení hodnoty, mohou zahrnovat kontrolu platnosti – validaci)
- důvod: ochrana integrity dat (nelze nastavit neplatnou hodnotu zvenčí), oddělení toho, jak je třída použitá (rozhraní), od toho, jak je uvnitř implementovaná – vnitřní implementaci lze později změnit, aniž by se muselo měnit cokoli, kde je třída používaná

**Python:**
```python
class Auto:
    def __init__(self):
        self._rychlost = 0   # podtržítko = konvence pro "privátní" atribut

    def get_rychlost(self):            # getter
        return self._rychlost

    def set_rychlost(self, hodnota):   # setter s validací
        if hodnota < 0:
            raise ValueError("Rychlost nemůže být záporná")
        self._rychlost = hodnota

auto1 = Auto()
auto1.set_rychlost(50)
print(auto1.get_rychlost())   # 50
```

**C#:**
```csharp
class Auto
{
    private int rychlost;   // private = přístupné jen uvnitř třídy

    public int Rychlost     // vlastnost (property) = getter + setter dohromady
    {
        get { return rychlost; }
        set
        {
            if (value < 0)
                throw new ArgumentException("Rychlost nemůže být záporná");
            rychlost = value;
        }
    }
}

Auto auto1 = new Auto();
auto1.Rychlost = 50;
Console.WriteLine(auto1.Rychlost);   // 50
```

## Dědičnost
- **dědičnost** (inheritance) = mechanismus, kdy jedna třída (**potomek**, odvozená třída) přebírá atributy a metody jiné třídy (**předek**, rodičovská/základní třída) a může je doplnit nebo upravit
- šetří opakování kódu – společné vlastnosti se definují jednou v předkovi
- příklad: obecná třída `Vozidlo` (atributy značka, rychlost; metoda zrychli()) a od ní odvozené třídy `Auto` a `Motorka`, které dědí vše z `Vozidlo` a přidávají si vlastní atributy/metody navíc
- **přepsání metody** (override) = potomek může definovat vlastní verzi zděděné metody, která nahradí/upraví chování rodičovské metody

**Python:**
```python
class Vozidlo:
    def __init__(self, znacka):
        self.znacka = znacka
        self.rychlost = 0

    def zrychli(self, o_kolik):
        self.rychlost += o_kolik

class Auto(Vozidlo):    # Auto dědí od Vozidlo
    def __init__(self, znacka, pocet_dveri):
        super().__init__(znacka)   # volání konstruktoru předka
        self.pocet_dveri = pocet_dveri

auto1 = Auto("Škoda", 5)
auto1.zrychli(30)       # zděděná metoda
print(auto1.znacka, auto1.rychlost, auto1.pocet_dveri)
```

**C#:**
```csharp
class Vozidlo
{
    public string Znacka;
    public int Rychlost;

    public Vozidlo(string znacka)
    {
        Znacka = znacka;
    }

    public void Zrychli(int oKolik)
    {
        Rychlost += oKolik;
    }
}

class Auto : Vozidlo    // Auto dědí od Vozidlo
{
    public int PocetDveri;

    public Auto(string znacka, int pocetDveri) : base(znacka)   // volání konstruktoru předka
    {
        PocetDveri = pocetDveri;
    }
}

Auto auto1 = new Auto("Škoda", 5);
auto1.Zrychli(30);      // zděděná metoda
Console.WriteLine($"{auto1.Znacka} {auto1.Rychlost} {auto1.PocetDveri}");
```

## Polymorfismus
- **polymorfismus** = schopnost objektů různých tříd (typicky ve stejné hierarchii dědičnosti) reagovat na stejné volání metody odlišným, pro danou třídu specifickým způsobem
- příklad: třídy `Pes` a `Kočka` obě dědí ze `Zvíře` a obě mají metodu `vydejZvuk()`, ale každá ji implementuje jinak (`Pes` → "haf", `Kočka` → "mňau"); kód, který metodu volá, nemusí vědět, o jaký konkrétní typ zvířete jde
- **statický polymorfismus** = řešen přetěžováním (viz výše), rozhoduje se už při překladu podle typů parametrů
- **dynamický polymorfismus** = řešen přepisováním zděděných metod, o tom, která konkrétní verze metody se zavolá, se rozhoduje až za běhu programu podle skutečného typu objektu (tzv. pozdní vazba)

**Python:**
```python
class Zvire:
    def vydej_zvuk(self):
        return "..."

class Pes(Zvire):
    def vydej_zvuk(self):     # přepsání (override) metody předka
        return "Haf!"

class Kocka(Zvire):
    def vydej_zvuk(self):
        return "Mňau!"

zvirata = [Pes(), Kocka()]
for zvire in zvirata:
    print(zvire.vydej_zvuk())   # Haf! / Mňau! - podle skutečného typu objektu
```

**C#:**
```csharp
class Zvire
{
    public virtual string VydejZvuk()   // virtual = potomci ji mohou přepsat
    {
        return "...";
    }
}

class Pes : Zvire
{
    public override string VydejZvuk()   // přepsání (override) metody předka
    {
        return "Haf!";
    }
}

class Kocka : Zvire
{
    public override string VydejZvuk()
    {
        return "Mňau!";
    }
}

List<Zvire> zvirata = new List<Zvire> { new Pes(), new Kocka() };
foreach (Zvire zvire in zvirata)
{
    Console.WriteLine(zvire.VydejZvuk());   // Haf! / Mňau! - podle skutečného typu objektu
}
```

## Kolekce objektů
- **kolekce** = struktura, která uchovává víc objektů pohromadě (pole objektů, seznam/list, množina apod.)
- kolekce obvykle obsahuje instance stejné třídy (nebo jejích potomků), lze přes ni procházet cyklem a volat metody na jednotlivých objektech

**Python:**
```python
seznam_aut = []
seznam_aut.append(Auto("červená"))
seznam_aut.append(Auto("modrá"))

for auto in seznam_aut:
    auto.zrychli(10)
```

**C#:**
```csharp
List<Auto> seznamAut = new List<Auto>();
seznamAut.Add(new Auto("červená"));
seznamAut.Add(new Auto("modrá"));

foreach (Auto auto in seznamAut)
{
    auto.Zrychli(10);
}
```

## Návrh programu s využitím OOP
- postup návrhu:
	1. identifikace reálných entit v problému a jejich převod na třídy (podstatná jména v zadání bývají kandidáti na třídy)
	2. určení atributů (co entita „má“) a metod (co entita „umí“/co se s ní dělá)
	3. určení vztahů mezi třídami – dědičnost (je typem), asociace/použití (má/používá)
	4. implementace tříd, vytvoření objektů a jejich vzájemná spolupráce v programu
- dobře navržené třídy by měly mít jasně danou odpovědnost a co nejvíc využívat zapouzdření, aby se v kódu dalo snadno orientovat a upravovat ho

## Verzovací systém
- **verzovací systém** (version control system, např. Git) = nástroj pro sledování historie změn v kódu a spolupráci více lidí na stejném projektu
- **repozitář** (repository) = úložiště projektu se všemi uloženými verzemi; může být lokální (na počítači) a vzdálený/remote (např. na GitHubu/GitLabu)
- **commit** = uložení aktuálního stavu (snímku) změn do historie repozitáře, doplněné popisem, co se změnilo a proč
- **větev** (branch) = oddělená linie vývoje, umožňuje pracovat na nové funkci nebo opravě, aniž by se ovlivnila hlavní (stabilní) verze kódu; po dokončení se větev sloučí (merge) zpět
- **push / pull** = odeslání lokálních commitů na vzdálený repozitář / stažení změn ze vzdáleného repozitáře
- význam: zálohování historie, možnost vrátit se k libovolné dřívější verzi, bezpečná spolupráce víc lidí na stejném kódu bez přepisování práce druhých
