---
title: "Formulářové aplikace a práce s daty"
order: 4
tags: ["doplněno"]
---

Pozn. ke kódu: formulářové (GUI) aplikace se ve výuce typicky dělají v C# přes Windows Forms, proto jsou ukázky v C#/WinForms; u práce se soubory je pro srovnání i Python.

## Grafické uživatelské rozhraní
- **GUI** (graphical user interface) = grafické uživatelské rozhraní, ovládané myší/dotykem a klávesnicí, na rozdíl od textového (konzolového) rozhraní
- **intuitivní ovládání** = uživatel má bez nutnosti návodu pochopit, jak prvek použít; zásady: přehledné rozmístění prvků, konzistence (podobné akce vypadají a chovají se podobně), okamžitá zpětná vazba na akci uživatele (např. změna vzhledu tlačítka po kliknutí, hlášení o úspěchu/chybě)
- základní prvky GUI:
	- **okno** (window/form) = základní kontejner rozhraní
	- **tlačítko** (button) = spouští akci po kliknutí
	- **popisek** (label) = zobrazuje text, sám o sobě není interaktivní
	- **textové pole** (textbox) = pro zadání/zobrazení textu
	- **zaškrtávací pole** (checkbox) = pro volbu ano/ne, lze zaškrtnout víc najednou
	- **přepínač** (radio button) = pro výběr právě jedné možnosti ze skupiny
	- **rozbalovací seznam** (combo box / select) = výběr jedné hodnoty z předdefinovaného seznamu
	- výstup lze kromě obrazovky směrovat i na **tiskárnu** (tisk formuláře, reportu, dokladu)

## Komponenty pro práci s textem, časem a dalšími daty
- textové pole může být jednořádkové nebo víceřádkové (text area); u vstupu se často provádí **validace** (kontrola, že zadaná hodnota má očekávaný formát, např. jen číslice, e-mail, nesmí být prázdné)
- specializované komponenty pro konkrétní typ dat usnadňují zadávání a snižují chybovost:
	- výběr **data/času** (date picker, time picker) místo ručního psaní data do textového pole
	- **číselník** (numeric up/down) pro zadávání čísla v daném rozsahu
	- **posuvník** (slider) pro výběr hodnoty z rozsahu tažením
- pro výstup dat se používá popisek, tabulka (grid), textové pole jen pro čtení, případně export/tisk

## Formuláře a jejich prvky
- **formulář** = okno nebo jeho část, která seskupuje ovládací prvky pro zadání a odeslání/zpracování dat od uživatele
- typický formulář kombinuje textová pole, popisky, zaškrtávací pole, přepínače, rozbalovací seznamy a tlačítko pro odeslání
- před zpracováním zadaných dat se provádí **validace formuláře** – kontrola, že jsou vyplněná povinná pole a že mají platný formát; při chybě se uživateli zobrazí srozumitelná hláška u konkrétního pole

**C# Windows Forms** – jednoduchý formulář s textovým polem, tlačítkem a popiskem pro výsledek (prvky se běžně přidávají přetažením v grafickém Designeru, tady je stejný výsledek zapsaný jako kód):
```csharp
public class HlavniFormular : Form
{
    private TextBox textBoxJmeno = new TextBox();
    private Button tlacitkoOdeslat = new Button();
    private Label popisekVysledek = new Label();

    public HlavniFormular()
    {
        textBoxJmeno.Location = new Point(10, 10);
        tlacitkoOdeslat.Text = "Odeslat";
        tlacitkoOdeslat.Location = new Point(10, 40);
        popisekVysledek.Location = new Point(10, 70);

        tlacitkoOdeslat.Click += TlacitkoOdeslat_Click;   // přiřazení obslužné metody

        Controls.Add(textBoxJmeno);
        Controls.Add(tlacitkoOdeslat);
        Controls.Add(popisekVysledek);
    }

    private void TlacitkoOdeslat_Click(object sender, EventArgs e)
    {
        if (textBoxJmeno.Text == "")
            popisekVysledek.Text = "Vyplňte jméno";
        else
            popisekVysledek.Text = "Ahoj, " + textBoxJmeno.Text + "!";
    }
}
```

## Obslužné metody a události
- **událost** (event) = akce, která nastane během běhu programu – klik na tlačítko, změna hodnoty v poli, zavření okna, načtení formuláře
- **obslužná metoda** (event handler) = kus kódu, který se spustí, když daná událost nastane; k prvku formuláře se „přiřadí“ metoda, která se má při dané události zavolat
- typické události ve Windows Forms: `Click` (kliknutí), `TextChanged` (změna textu), `Load` (načtení formuláře), `FormClosing` (zavírání okna) – v C# se k události připojí obslužná metoda operátorem `+=`, jak je vidět v příkladu formuláře výše (`tlacitkoOdeslat.Click += TlacitkoOdeslat_Click;`)

## Aplikace s více formuláři
- složitější aplikace bývá tvořená víc okny/formuláři – hlavní okno a doplňkové formuláře/dialogy (např. okno pro editaci záznamu, okno „O aplikaci“)
- **modální okno** = blokuje práci s ostatními okny aplikace, dokud ho uživatel nezavře (typicky pro potvrzení, chybové hlášky) x **nemodální okno** = lze s ním pracovat souběžně s ostatními okny
- mezi formuláři je potřeba předávat data – parametrem při otevření okna, návratovou hodnotou po jeho zavření, nebo přes sdílený objekt/model, který obě okna vidí

## Ověřování návrhu a testování
- návrh algoritmu i uživatelského rozhraní je vhodné ověřit ještě před (nebo souběžně s) plným naprogramováním – např. na jednoduchém prototypu, nebo tak, že si postup vyzkouší někdo jiný než autor
- **testování integrity softwaru** = ověření, že program se chová správně i pro různé druhy vstupu:
	- platné (běžné, očekávané) hodnoty
	- neplatné hodnoty (špatný formát, text místo čísla)
	- hraniční hodnoty (prázdný vstup, nulová hodnota, maximální/minimální možná hodnota)
- **záznam chyby** (bug report) by měl obsahovat: kroky k zopakování chyby, očekávané chování, skutečné (chybné) chování a závažnost problému – usnadňuje to opravu i zpětnou kontrolu, že byla chyba skutečně odstraněna

## Práce se soubory
- **ukládání dat mimo operační paměť** = data uložená jen v proměnných v paměti zmizí po ukončení programu; pro trvalé uchování (perzistenci) a přenositelnost mezi programy/počítači se ukládají do **souborů**
- základní typy souborů pro data: **textový** soubor (řádky textu), **CSV** (tabulková data oddělená čárkou/středníkem), **binární** soubor (data v „surové“ nečitelné podobě), strukturovaný formát jako **JSON** nebo **XML**
- základní operace nad souborem: otevřít, číst (načíst obsah do proměnných), zapsat (uložit data z proměnných do souboru), zavřít

**Python:**
```python
# čtení souboru řádek po řádku
with open("data.csv", "r", encoding="utf-8") as soubor:
    for radek in soubor:
        print(radek.strip())

# zápis do souboru (přepíše obsah)
with open("vysledek.txt", "w", encoding="utf-8") as soubor:
    soubor.write("Ahoj, soubore!\n")
```
`with` zajistí, že se soubor automaticky zavře i v případě chyby (není nutné volat `close()` ručně).

**C#:**
```csharp
// čtení souboru řádek po řádku
foreach (string radek in File.ReadLines("data.csv"))
{
    Console.WriteLine(radek);
}

// zápis do souboru (přepíše obsah)
File.WriteAllText("vysledek.txt", "Ahoj, soubore!\n");
```

## Kolekce dat, řazení a vyhledávání
- **kolekce dat** = víc záznamů se stejnou strukturou uložených pohromadě (pole záznamů, seznam, tabulka) – např. seznam žáků, seznam objednávek
- **řazení pole** (sorting) = uspořádání záznamů vzestupně nebo sestupně podle zvoleného klíče (např. podle příjmení, podle data); většina jazyků má vestavěnou (knihovní) metodu pro řazení, není nutné si ji psát ručně
- **vyhledávání v poli dat** = nalezení záznamu podle zadané hodnoty; lineární vyhledávání funguje na libovolných datech, binární vyhledávání je rychlejší, ale vyžaduje předem seřazená data (viz předchozí téma o asymptotické složitosti)

## Import, export a vizualizace dat
- **import dat** = načtení dat z externího zdroje (soubor CSV/JSON, databáze) do datových struktur aplikace ke zpracování
- **export dat** = uložení zpracovaných/vypočtených dat z aplikace do souboru pro další použití (např. výsledky vypočítané aplikací uložit jako CSV pro tabulkový procesor)
- **vizualizace dat** = grafické znázornění dat pro snazší pochopení výsledků – sloupcový graf (porovnání hodnot), spojnicový graf (vývoj v čase), koláčový graf (podíl částí na celku), případně přehledová tabulka

## Aplikace zpracovávající data
- typický tok zpracování dat v aplikaci:
	1. **import/načtení** dat (ze souboru, od uživatele přes formulář, z databáze)
	2. **zpracování** – filtrace, výpočty, řazení, vyhledávání, agregace (součty, průměry)
	3. **zobrazení výsledku** uživateli (v tabulce, grafu) a/nebo **export** výsledku do souboru
- příklad: aplikace pro evidenci žáků a jejich známek – načte data ze souboru, umožní přidávat/upravovat záznamy přes formulář, spočítá průměry, seřadí žáky podle prospěchu a výsledek zobrazí v tabulce nebo grafu a umožní ho exportovat
