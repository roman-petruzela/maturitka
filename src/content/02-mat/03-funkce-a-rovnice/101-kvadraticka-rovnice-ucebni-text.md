---
title: "Kvadratická rovnice (učební text)"
order: 101
source: "mat/IT2M_2.docx"
hasExercises: true
---

## 7. Kvadratická rovnice

V předchozích kapitolách jsme poznali průběh kvadratické funkce. Dokázali jsme sledovat průběh hodnot funkce podle proměnné. Kvadratickou funkci jsme aplikovali především na rovnoměrně zrychlený pohyb a tak jsme graficky zakreslili průběh dráhy na čase.

Ve fyzice ale řešíme i konkrétní situace, se kterými si průběh funkce nedokáže jednoduše poradit. Ukažme si příklad:

*„Šíp můžeme vystřelit z luku různými rychlostmi v0 pod různými úhly α, zároveň můžeme střílet z rozdílných výšek nad zemí (h). Za jakou dobu by šíp při zvolených kombinacích dopadl na zemi do určité polohy?"*

Rovnice ax² + bx + c = 0 se nazývá kvadratická rovnice s neznámou x, ax² je její kvadratický člen, bx její lineární člen a c její absolutní člen. Koeficienty „a, b, c" mohou být reálná čísla, ale kvadratický člen „a" musí být nenulový. Výraz ax² + bx + c se nazývá kvadratický trojčlen.

## 8. Neúplná kvadratická rovnice

I když jsme si ukázali nejsložitější možnou střelbu z luku (pod úhlem, z určité výšky), tak mohou nastat i jednodušší situace. Mohu střílet ze země pod určitým úhlem, případně mohu střílet před sebe z určité výšky. Proto v matematice řešíme zjednodušené formy kvadratické rovnice:

**Kvadratická rovnice bez absolutního členu** (ax² + bx = 0). Rovnici lze upravit na x(ax + b) = 0, řešením jsou dva kořeny x1 = 0, x2 = −b/a.

*Matematický příklad:* Najděte kořeny rovnice 2x² + 3/2x = 0.

**Ryze kvadratická rovnice** (ax² + c = 0). Rovnici lze upravit na x² = −c/a, řešením jsou dva kořeny x1,2 = ±√(−c/a) (pod odmocninou nesmí být záporná hodnota).

*Matematický příklad:* Najděte kořeny rovnice (A) 25x² + 1 = 0 a (B) 25x² − 1 = 0. U (A) je pod odmocninou záporná hodnota — rovnice nemá řešení. U (B) vychází x = ±1/5.

## 9. Obecná kvadratická rovnice

Tvar x² + px + q = 0 je tzv. normovaný tvar kvadratické rovnice. Rovnici lze upravit „doplněním na čtverec", řešením jsou dva kořeny (pod odmocninou nesmí být záporná hodnota). Výraz b² − 4ac se nazývá diskriminant a značí se D.

Pokud je diskriminant záporný, pak rovnice nemá řešení (záporné číslo pod odmocninou). Pokud je ale diskriminant kladný, tak existují dvě řešení (dva kořeny). Je-li diskriminant nulový, získáváme dvojnásobný kořen (jedno řešení). Vztah x1,2 = (−b ± √D) / 2a nazýváme vzorec pro výpočet kořenů kvadratické rovnice.

*Matematický příklad:* Najděte kořeny rovnice x² + 2x − 8 = 0 pomocí doplnění na čtverec (A) a pomocí vzorců pro výpočet kořenů kvadratické rovnice (B).

*Matematický příklad:* Najděte kořeny rovnice 4u² + 12u + 9. Bude stejný výsledek, i když převedete rovnici na normovaný tvar?

*Matematický příklad:* Rozhodněte, pro která x nabývá trojčlen 2x² − 3x + 1 hodnoty 3.

*Praktický příklad:* Obsah pozemku je 420 m² a obvod 94 m. Jaké jsou délky stran pozemku?

## 10. Vietovy vzorce

Matematik, právník, astronom, státní poradce i řešitel šifer François Viète (1540–1603) našel ve vzorcích pro kořeny kvadratické rovnice zajímavé souvislosti: pro normovanou kvadratickou rovnici x² + px + q = 0 platí x1 + x2 = −p a x1 · x2 = q. Pro aplikování Vietových vzorců se normovaná kvadratická rovnice přepisuje jako (x − x1)(x − x2) = 0. Poslední výraz je známý jako rozklad kvadratického trojčlenu na součinový tvar.

Pokud bychom nepoužívali normovaný tvar, lze provést rozklad kvadratického členu na kořenové činitele — x1 a x2 jsou tak kořeny kvadratického trojčlenu a(x − x1)(x − x2).

**Praktická úloha:** Indický matematik Bháskara (1114–1185) dává žákům hádanku. Stádo opic bavících se v háji se rozdělilo na dvě části. Čtverec osminy jejich počtu se bavil skákáním na větvích. Dvanáct opic vítalo radostným křikem rozbřesk dne. A teď řekni, jinochu, kolik opic bylo v háji.

**Matematická úloha:** Na základě Vietových vzorců najděte kořeny rovnic (A) x² − 7x + 12 = 0, (B) t² + 2t − 8 = 0.

**Matematická úloha:** Najděte všechny kvadratické rovnice, jejichž kořeny jsou −1 a ¾.

### Slovní úlohy

1. Obsah pozemku je 420 m² a obvod 94 m. Jaké jsou délky stran pozemku? *Řešení: 12 a 35.*
2. Praktická úloha o opicích (viz výše). *Řešení: 16 nebo 48.*
3. Tiger Woods odpálí golfový míček rychlostí 200 m/s pod úhlem 8°. Za jak dlouhý čas se míček ocitne opět na zemi? Pro zjednodušení budeme uvažovat gravitační zrychlení 10 m/s² a ze známého fyzikálního vzorce pak dostaneme rovnici −5x² + 200·sin(8°)·x = 0. *Řešení: 5,5 s.*
4. Podle jedné historky si takhle Isaac Newton leží pod stromem a přemýšlí. Na hlavu mu spadne jablko a v té chvíli pochopí princip gravitace. Jak dlouho trvalo jablku spadnout ze stromu na Newtonovu hlavu, pokud viselo na stromě 3 metry nad jeho hlavou? *Řešení: 0,77 s.*
5. Najdi dvojciferné číslo, pro které platí: Číslice na místě jednotek je o 1 větší než číslice na místě desítek. Součin čísla a jeho ciferného součtu je 405. *Řešení: 45.*
6. Cena časopisu byla snížena o tolik procent, kolik korun stál před snížením ceny. Urči jeho původní cenu, jestliže po zlevnění stál 16 Kč. *Řešení: 20 nebo 80.*
7. Turnaj ve fotbale se hrál systémem „každý s každým jeden zápas". Kolik týmů se turnaje zúčastnilo, pokud bylo odehráno celkem 36 utkání? *Řešení: 9.*

## 11. Grafické řešení kvadratické rovnice

### 11.1 Průsečík(y) grafu s osou x

Sestrojíme graf kvadratické funkce podle pravidel z lekcí o kvadratických funkcích. Protože kvadratická rovnice má y = 0, tak platí, že průsečíky grafu s osou x jsou také kořeny rovnice.

- **2 různé kořeny** (D > 0) — graf protíná osu x ve dvou bodech:

```graph
{ "fn": "x^2 - 4*x + 3", "domain": [-1, 5], "title": "x² − 4x + 3 = 0 — dva různé kořeny x₁ = 1, x₂ = 3", "points": [{"x": 1, "y": 0, "label": "x₁"}, {"x": 3, "y": 0, "label": "x₂"}] }
```

- **Dvojnásobný kořen** (D = 0) — graf se osy x jen dotýká (vrchol leží přímo na ose x):

```graph
{ "fn": "x^2 - 4*x + 4", "domain": [-1, 5], "title": "x² − 4x + 4 = 0 — dvojnásobný kořen x₁ = x₂ = 2", "points": [{"x": 2, "y": 0, "label": "x₁=x₂"}] }
```

- **Bez řešení** (D < 0) — graf osu x vůbec nepotká:

```graph
{ "fn": "x^2 - 4*x + 5", "domain": [-1, 5], "title": "x² − 4x + 5 = 0 — bez řešení" }
```

### 11.2 Vietovo grafické řešení

Druhý pohled na grafické řešení kvadratické funkce vychází z úpravy kvadratické rovnice x² + px + q = 0 na rovnost x² = −px − q. Kořeny pak najdeme jako průsečík(y) grafu kvadratické funkce y = x² a lineární funkce y = −px − q. Na stejných třech rovnicích jako výše (jen vydělených a přepsaných do tvaru x² = 4x − c):

- **2 různé kořeny:** přímka protíná parabolu ve dvou bodech.

```graph
{ "fn": "x^2", "fn2": "4*x - 3", "fn2Label": "y = 4x−3", "domain": [-1, 5], "title": "x² = 4x − 3 — dva průsečíky", "points": [{"x": 1, "y": 1, "label": "x₁"}, {"x": 3, "y": 9, "label": "x₂"}] }
```

- **Dvojnásobný kořen:** přímka se paraboly jen dotýká (je jejím tečnou).

```graph
{ "fn": "x^2", "fn2": "4*x - 4", "fn2Label": "y = 4x−4", "domain": [-1, 5], "title": "x² = 4x − 4 — jediný (dotykový) průsečík", "points": [{"x": 2, "y": 4, "label": "x₁=x₂"}] }
```

- **Bez řešení:** přímka s parabolou vůbec nesouvisí.

```graph
{ "fn": "x^2", "fn2": "4*x - 5", "fn2Label": "y = 4x−5", "domain": [-1, 5], "title": "x² = 4x − 5 — žádný průsečík" }
```

Řešte výpočetně, graficky a také pomocí Vietova pohledu rovnice:

- x² − 4x + 3 = 0
- x² − 4x + 5 = 0
- 0,5x² = −2x − 2

## 12. Kvadratická nerovnice

Zatímco kvadratická rovnice hledala jedno nebo dvě řešení, tak kvadratická nerovnice sleduje celou řadu řešení, která odpovídají pravidlům. Příkladem je třeba smyk vozu na kluzké vozovce. Víme, že když překonáme určitou rychlost, tak dojde k tomu, že odstředivá síla převýší třecí sílu a vyjedeme ze zatáčky. Existuje limitní rychlost, při které se to stane. Ale také široký rozptyl všech dalších možných řešení, které převyšují limitní rychlost. O tom jsou nerovnice.

Kvadratickými nerovnicemi nazýváme nerovnice ve tvaru ax² + bx + c > 0 (< 0, ≥ 0, ≤ 0).

Pro řešení kvadratických nerovnic se skvěle hodí úprava nerovnice na součinový tvar podle Vietova pravidla — řešením jsou pak uzavřené a otevřené intervaly plnící podmínku nerovnice (podle toho, zda existuje průnik množin řešení jednotlivých činitelů, nebo ne).

Pokud ale neexistují kořeny kvadratické funkce, pak musíme postupovat složitěji — provádíme tzv. doplnění na druhou mocninu lineárního dvojčlenu (v takovém případě buď nerovnice neplatí pro žádné x, nebo platí pro každé x, podle znaménka výrazu).

## 13. Grafické řešení kvadratické nerovnice

### 13.1 Průsečík(y) grafu s osou x

Sestrojíme graf kvadratické funkce podle pravidel z lekcí o kvadratických funkcích. Nejprve se zaměříme na to, jaké kořeny by měla kvadratická rovnice pro y = 0. Následně řešíme nerovnosti (větší a menší). Označíme také otevřenost, uzavřenost intervalu.

*Příklad:* Řešme nerovnici x² − 4x + 3 > 0 — použijeme stejnou parabolu jako v části 11.1. Graf je nad osou x (kladné hodnoty) mimo interval kořenů, pod osou x (záporné hodnoty) mezi kořeny:

```graph
{ "fn": "x^2 - 4*x + 3", "domain": [-1, 5], "title": "x² − 4x + 3 > 0 ⟹ x ∈ (−∞; 1) ∪ (3; +∞)", "points": [{"x": 1, "y": 0, "label": "x₁"}, {"x": 3, "y": 0, "label": "x₂"}] }
```

Řešením nerovnice x² − 4x + 3 > 0 je tedy x ∈ (−∞; 1) ∪ (3; +∞) — oba krajní body jsou vyloučeny (ostrá nerovnost). Pro opačnou nerovnici x² − 4x + 3 < 0 by řešením byl uzavřený interval mezi kořeny, x ∈ (1; 3).

- **2 různé kořeny:** dva krajní body dělí osu x na tři intervaly (vně kořenů graf nad osou, mezi kořeny pod osou — pro parabolu otevřenou nahoru).
- **Dvojnásobný kořen:** graf se osy x jen dotýká, takže má všude stejné znaménko kromě jediného bodu (kde je nula).
- **Bez řešení:** graf má všude stejné znaménko — záleží na znaménku koeficientu a (viz graf x² − 4x + 5 v části 11.1, který je celý nad osou x, protože a > 0).

### 13.2 Vietovo grafické řešení

Druhý pohled na grafické řešení kvadratické funkce vychází z úpravy kvadratické rovnice x² + px + q = 0 na rovnost x² = −px − q. Kořeny pak najdeme jako průsečík(y) grafu kvadratické funkce y = x² a lineární funkce y = −px − q. Nerovnost pak odpovídá všem bodům na ose x, které danou nerovnost splňují — tedy tam, kde je parabola y = x² nad (nebo pod) přímkou y = −px − q. Grafy jsou stejné jako v části 11.2: pro x² − 4x + 3 > 0 (tedy x² > 4x − 3) hledáme, kde je parabola nad přímkou y = 4x − 3 — to platí mimo interval mezi průsečíky x = 1 a x = 3.

## 14. Soustavy lineárních a kvadratických rovnic s více neznámými

### 14.1 Význam

Při řešení fyzikálních problémů se často dostáváme do situace, že k vyřešení potřebujeme několik rovnic s více neznámými. Izolované řešení určité rovnice není prostě možné. Proto je žádoucí fyzikální úlohy řešit obecně a hledat odpovídající kombinaci rovnic. Velmi častou je právě kombinace kvadratické a lineární funkce.

*Fyzikální problém:* Jaká je brzdná dráha, pokud zastavíme z 30 m/s za 8 s?

Tato úloha vede na 2 rovnice o dvou neznámých (jedna lineární, jedna kvadratická), které lze řešit metodou dosazovací (vyjádříme jednu neznámou z jedné rovnice a dosadíme do druhé) nebo metodou sčítací (rovnice upravíme tak, aby šlo jednu neznámou odečtením vyrušit).

### 14.2 Příklad řešení

### 14.3 Slovní úlohy

1. Najděte 2 čísla tak, aby se jejich součin rovnal jedné a součet deseti.
2. Najděte 2 čísla tak, aby se jejich součin rovnal jedné a součet třem polovinám.
3. Vypočtěte souřadnice bodů, které leží na přímce y=−x a mají od bodu [2;3] vzdálenost 6.
4. Vypočtěte souřadnice průsečíků přímky y = 2x + 3 a paraboly y = x².
5. Které body roviny mají od počátku soustavy souřadnic vzdálenost 5 a od bodu [−9;9] vzdálenost 13?
6. Řešte soustavu o 3 neznámých.
7. 2 dvojciferná čísla se liší jen pořadím číslic, jejich součin je 1300 a rozdíl 27.
8. Obvod obdélníku je 82 m, jeho úhlopříčka má délku 29 m, jak dlouhé jsou strany?
9. Dva dělníci udělají společně práci za 15 dní. Vykoná-li nejdříve rychlejší dělník čtvrtinu práce a po něm pomalejší dělník práci dokončí, tak by práce trvala 36 dní. Za jak dlouho by celou práci udělal každý dělník sám?
10. Ze dvou míst od sebe vzdálených 57 km jdou proti sobě 2 turisté a potkají se za 6 hodin. Jakými rychlostmi se pohybují, pokud jeden potřebuje na 9 km o 12 min. méně než druhý?

## 15. Iracionální rovnice

Iracionální rovnice jsou rovnice obsahující neznámou pod odmocninou. Řešíme je vhodnými úpravami (většinou umocňováním, což často bývá důsledková úprava), kterými se snažíme odstranit odmocniny, pod nimiž se nachází neznámá.

Je žádoucí zpravidla ještě před řešením samotné rovnice určit její definiční obor neboli podmínky (pokud to ovšem není příliš komplikované a zdlouhavé), protože to umožní ihned po nalezení potenciálních kořenů okamžitě vyřadit ty z nich, které nalezeným podmínkám nevyhovují.

Zkouška je i přes určení definičního oboru většinou nezbytnou součástí řešení iracionální rovnice, neboť umocnění bývá velmi často neekvivalentní úpravou. Zkoušku však už provádíme pouze pro ty potenciální kořeny, jež vyhovují podmínkám.

**Ekvivalentní úpravy** jsou takové, které převádějí každou rovnici na rovnici s ní ekvivalentní, tj. zachovávají množinu všech kořenů řešené rovnice:

1. výměna levé a pravé strany rovnice
2. přičtení, odečtení téhož čísla k oběma stranám rovnice
3. přičtení (odečtení) téhož výrazu s neznámou k oběma stranám rovnice
4. vynásobení, vydělení obou stran rovnice stejným nenulovým číslem, výrazem, který je definován v celém oboru proměnné
5. úpravy výrazů na jednotlivých stranách rovnice

**Důsledkové úpravy** jsou takové, jejichž důsledkem může (ale nemusí) být „rozšíření" množiny kořenů původní rovnice. Množina kořenů původní rovnice je tedy podmnožinou množiny kořenů rovnice získané (víme, že pod odmocninou není záporné číslo, proto výsledek nemůže být záporný — důsledkovou úpravou nám může vyjít falešný výsledek, pokud si určíme podmínky, pak ho vyloučíme).

**Postup při řešení iracionálních rovnic:**

1. Určíme podmínky
2. Vyřešíme rovnici
3. Srovnáme kořeny s podmínkami a vyřadíme ty, které podmínkám nevyhovují
4. V případě, že jsme provedli při řešení byť jen jedinou neekvivalentní úpravu, provedeme zkoušku se všemi kořeny, které vyhovují podmínkám
