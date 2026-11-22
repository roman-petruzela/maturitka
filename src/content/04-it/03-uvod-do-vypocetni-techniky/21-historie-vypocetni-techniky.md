---
title: "Historie výpočetní techniky"
order: 21
source: "uvt/T02_Historie_Vypocetni_techniky.pdf"
---
Počítač je stroj na zpracování informací. Cesta k dnešním počítačům vedla od počítadel přes mechanické kalkulačky, děrné štítky a Babbageův analytický stroj až k elektronice.

## Mechanická doba

```timeline
{ "title": "Od počítadel k Babbageovi",
  "items": [
    { "name": "John Napier – logaritmické tabulky (násobení převedeno na sčítání)", "dates": "1614" },
    { "name": "Wilhelm Schickard – první mechanická kalkulačka", "dates": "1623" },
    { "name": "Blaise Pascal – Pascalina (sčítá a odčítá)", "dates": "1642" },
    { "name": "Gottfried Leibniz – kalkulačka umí i násobit a dělit", "dates": "1694" },
    { "name": "Joseph Jacquard – děrné štítky řídí tkací stav", "dates": "1805" },
    { "name": "Thomas de Colmar – aritmometr, první sériová kalkulačka", "dates": "1820" },
    { "name": "Charles Babbage – návrh diferenčního stroje", "dates": "1833" },
    { "name": "Babbage a Ada Lovelace – analytický stroj", "dates": "1848" },
    { "name": "Hermann Hollerith – stroj na děrné štítky (sčítání lidu v USA)", "dates": "1890" }
  ] }
```

### Počítadla a kalkulačky

- **Abakus** – nejstarší počítadlo (korálky na tyčkách); v Číně **suan-pan**, v Japonsku **soroban**, v Rusku **ščot**. Na Dálném východě se s ním učí děti dodnes.
- **Logaritmy** (Napier): log(*a·b*) = log *a* + log *b*, násobení a dělení se změní na sčítání a odčítání.
- **Schickardova kalkulačka** – první mechanická, uměla všechny čtyři početní operace. Dochovala se jen dokumentace, v roce 1960 byla podle náčrtků postavena znovu.
- **Pascalina** – jen sčítání a odčítání, vyrobeno asi 50 kusů.
- **Leibniz** – vylepšil Pascalinu o násobení a dělení.
- **Aritmometr** – první hromadně vyráběná kalkulačka, používala se až do 60. let 20. století.

### Děrné štítky

**Děrný štítek** je kartonové médium: informaci nese **díra na určité pozici** v matici. Jacquard jimi řídil tkací stav, Hollerith je použil na stroji pro **sčítání lidu v USA**, které by jinak trvalo 7 let.

### Babbage a Ada Lovelace

- **Charles Babbage** navrhl parou poháněný **diferenční stroj** (1833) a pak **analytický stroj** – první návrh počítače v dnešním smyslu.
- Měl **mlýn** (procesor), **sklad** (paměť na 1000 padesátimístných čísel), čtečku **děrných štítků** pro program a tiskárnu výsledků. Nikdy nebyl dokončen.
- **Ada Lovelace** pro něj napsala sekvence instrukcí – je považována za **první programátorku**. Po ní je pojmenován jazyk **Ada**.

## Generace počítačů

![Generace počítačů podle použité součástky: relé, elektronky, tranzistory, integrované obvody, mikroprocesory](/images/content/it/uvod-do-vypocetni-techniky/historie/generace.webp)

| Generace | Doba | Součástka | Typické stroje |
|---|---|---|---|
| **0.** | do 1945 | elektromagnetické relé | Z1, Mark I |
| **1.** | 40.–50. léta | elektronky | ENIAC, UNIVAC I |
| **2.** | 50.–60. léta | tranzistory | PDP-8 |
| **3.** | 60.–70. léta | integrované obvody | IBM System/360, Altair 8800 |
| **4.** | od 1981 | mikroprocesory | IBM PC 5150, Macintosh |

Doby jsou orientační, generace se překrývají.

### 0. generace – relé

- Elektromechanické počítače, **relé** má dva stavy podle toho, zda jím teče proud. Takt kolem 100 Hz.
- Počítače zabíraly velké haly, využívala je armáda (vývoj poháněla druhá světová válka).
- **Z1** (Konrad Zuse, 1938) – první fungující počítací stroj.
- **Mark I** (Howard Aiken, 1944, Harvardova univerzita) – 15 m dlouhý, 765 000 součástek, program na děrné pásce.

### 1. generace – elektronky

- Drahé, s velkým příkonem a častými poruchami. Programy na děrných štítcích a páskách, obsluhoval je celý tým.
- **ENIAC** (1946) – 17 468 elektronek, 30 tun, 150 kW, denně vyhořelo několik elektronek.
- **UNIVAC I** (1951) – první sériově vyráběný počítač, místo štítků používal magnetické pásky.

### 2. generace – tranzistory

- **Tranzistor** zmenšil počítače, zrychlil je a ušetřil energii.
- Vznikají první **operační systémy** a jazyky (COBOL, ALGOL, FORTRAN) i **assembler**.
- Počítače se dostávají z armád a univerzit do firem.
- **PDP-8** (1965) – první minipočítač, prodalo se kolem 300 000 kusů.

### 3. generace – integrované obvody

- **Jack Kilby** (1958) spojil více součástek na jednom čipu = **integrovaný obvod**.
- Objevují se minipočítače, mikropočítače a **multitasking**.
- **IBM System/360** – řada modelů s různým výkonem, ale stejnou instrukční sadou, takže sdílely software.
- **Altair 8800** (1975) – první úspěšný domácí mikropočítač.

### 4. generace – mikroprocesory

- Všechny funkce procesoru se vejdou na **jeden čip**; nastupují osobní počítače.
- **IBM PC 5150** (1981) – první osobní počítač, dnešní PC se od něj liší hlavně výkonem.
- **Apple Macintosh 128K** (1984) – první úspěšný počítač s grafickým rozhraním (GUI).

## Mooreův zákon

**Gordon Moore** (spoluzakladatel Intelu) v roce **1965** pozoroval, že se **počet tranzistorů na čipu zdvojnásobí zhruba každé dva roky** (při stejné ceně). Pravidlo dlouho platilo, ale růst výkonu naráží na fyzikální limity. Hledají se nové přístupy: optické, biologické a **kvantové** počítače.

## Otázky k opakování

- Co je abakus, soroban, suan-pan a ščot?
- Co umožnily logaritmické tabulky?
- Kdo sestrojil první mechanickou kalkulačku? Co uměla Pascalina?
- Co je děrný štítek, kdo ho použil jako první a k čemu ho využil Hollerith?
- Jak by fungoval Babbageův analytický stroj a jakou roli měla Ada Lovelace?
- Popište jednotlivé generace počítačů (0.–4.).
- Jak zní Mooreův zákon?
