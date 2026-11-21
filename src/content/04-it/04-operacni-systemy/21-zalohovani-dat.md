---
title: "Zálohování dat"
order: 21
source: "osy/Zálohování_dat.pdf"
---
**Zálohování** je vytváření kopií dat, ze kterých lze data obnovit, když se původní poškodí nebo ztratí. Záloha má smysl, jen když je uložená **jinde** než originál a když se z ní obnova **vyzkoušela**.

Která data v PC jsou pro Vás nejdůležitější?

Jak můžete o data v PC přijít?

- selhání pevného disku
- elektrické napětí a problémy s napájením
- živelné pohromy
- krádež
- omyly a chyby uživatelů
- škodlivý software, zejména **ransomware**, který data zašifruje — viz [malware](/it/operacni-systemy/26-malware/)

## Zálohování × archivace

- **Záloha** je pravidelně obnovovaná kopie aktuálních dat pro případ jejich ztráty. Starší zálohy se po čase přepisují novými.
- **Archivace** je dlouhodobé uložení dat, se kterými se už nepracuje, ale je potřeba je uchovat (účetnictví, dokončené projekty). Archiv se nemění a často je jedinou kopií — proto se i archiv zálohuje.

Více o rozdílu: [Zálohování nebo archivace?](https://www.acronis.cz/zalohovani-nebo-archivace/)

**Pravidlo 3-2-1:** mít **3** kopie dat, na **2** různých typech médií, z toho **1** mimo budovu (jiná pobočka, cloud). Proti ransomwaru pomáhá, když je jedna kopie **offline** (odpojený disk) nebo neměnná.

**RAID není záloha** — chrání jen před selháním disku, ne před smazáním souboru, virem nebo požárem. Viz [RAID](/it/operacni-systemy/17-raid/).

## Média pro ukládání dat

| Médium | Vlastnosti | Hodí se |
| --- | --- | --- |
| **magnetická páska** | drahá jednotka, levná média | archivace velkých objemů |
| **jiný oddíl téhož disku** | chrání jen před omylem | nic víc |
| **externí disk, USB flash, SD karta** | snadné, rychlé, ale pro pravidelnou zálohu nevhodné | archivace (málo používaná = spolehlivá) |
| **optické disky** | levné, dlouhé vypalování, mechaniky mizí | dlouhodobý archiv |
| **disk jiného PC v síti** | rychlost dána sítí; **ransomware** může zašifrovat i zálohu; počítač je nutné zabezpečit | pravidelná záloha |
| **NAS** | síťové úložiště s diskovým polem (RAID); lepší než cizí PC, ransomware ale také hrozí | pravidelná záloha |
| **vzdálená služba (cloud)** | rychlost dána internetem, data u třetí strany – hrozí zneužití; Dropbox, OneDrive, Google Disk | pravidelná záloha, **šifrovat** |

| Účel | Vhodná média |
| --- | --- |
| **archivace** | páska, USB flash, SD karta, externí disk, optické disky |
| **pravidelné zálohování** | NAS, disk jiného PC v síti, vzdálená služba |

## Zálohování souborů a složek

Pro zálohování souborů a složek existuje několik zálohovacích strategií. Většina z nich pracuje s tzv. **archivačním atributem** souboru: když se soubor vytvoří nebo změní, systém mu atribut nastaví na *nearchivováno* („tento soubor je potřeba zálohovat“), a zálohovací program ho po záloze může nastavit na *archivováno*.

## Strategie zálohování

![Týden zálohování: úplná v neděli a přírůstkové nebo rozdílové další dny; při výpadku ve čtvrtek se obnovuje z neděle a ze všech přírůstkových, případně jen z poslední rozdílové](/images/content/it/operacni-systemy/zalohovani/strategie.webp)

**Úplná (normální, obecná, Full) záloha:** Zálohuje všechny vybrané soubory. Archivační atribut mění na archivováno. Při změně souboru dojde opět ke změně archivačního atributu na nearchivováno.

**Přírůstková (Incremental) záloha:** Zálohuje pouze ty soubory, které se od posledního zálohování (normálního nebo přírůstkového) změnily, a archivační atribut těchto souborů změní na **archivováno**.

**Rozdílová (Differential) záloha:** Zálohuje pouze ty soubory, které se od posledního zálohování (normálního nebo přírůstkového) změnily, archivační atribut těchto souborů nemění! Archivační atribut zůstává ve stavu **nearchivováno**. V obvyklé kombinaci s úplnou zálohou tak každá rozdílová záloha obsahuje vše, co se změnilo **od poslední úplné zálohy**.

**Kopírovací (Copy) záloha:** Zálohuje všechny vybrané soubory. Nevšímá si archivačního atributu. Nenaruší stanovený systém zálohování.

**Denní (Daily) záloha:** Zálohuje všechny soubory, které se daný den (od 00:00 do času zálohy) změnily. Nevšímá si archivačního atributu. Nenaruší stanovený systém zálohování.

V praxi se často používá kombinace zálohovacích strategií:

- Úplná + Přírůstková (např. Úplná 1-krát týdně, Přírůstková 1-krát denně)
- Úplná + Rozdílová (např. Úplná 1-krát týdně, Rozdílová 1-krát denně)

| Kombinace | Záloha | Obnova |
| --- | --- | --- |
| úplná + přírůstková | rychlá, každá záloha je malá | pomalejší — potřeba poslední úplná a **všechny** přírůstkové po ní |
| úplná + rozdílová | rozdílová záloha den ode dne roste | rychlejší — stačí poslední úplná a **poslední** rozdílová |

**Příklad:** úplná záloha v neděli, disk selže ve čtvrtek ráno. Při přírůstkovém zálohování je potřeba obnovit nedělní zálohu a pak postupně přírůstkové z pondělí, úterý a středy. Při rozdílovém stačí nedělní a středeční.

Zálohovací programy také obsahují funkce:

- **komprimace souborů** – šetří místo na záložním médiu
- **šifrování souborů** – důležité zejména v případě zálohování pomocí vzdálené zálohovací služby
- **plánování** — záloha se spouští automaticky v nastavený čas
- **verze** — uchovává více starších verzí souboru

## Zálohování celých diskových oddílů

Zkopíruje se celý diskový oddíl (např. disk C:). Je vytvořen přesný obraz disku, nezálohují se jenom soubory, ale třeba také nastavení operačního systému a nastavení aplikací. Po selhání disku tak lze obnovit celý funkční systém najednou.

- vytvoření **bitové kopie**
- vytvoření **image** (obrazu) diskového oddílu pomocí některého z dostupných programů
  - Clonezilla - <http://clonezilla.org>
  - Norton Ghost – <https://norton_ghost.cs.downloadastro.com/>
  - Acronis True Image - <http://www.acronis.cz/domacnosti-a-kancelare/produkty/true-image-home/>

Ve Windows Serveru slouží k zálohování funkce **Zálohování Windows Serveru** (Windows Server Backup), která se přidává v Server Manageru (*Add Roles and Features*). Při prvním použití vždy vytvoří úplnou zálohu. Zálohovat a obnovovat soubory bez ohledu na jejich oprávnění smí členové skupin **Administrators** a **Backup Operators**.

## Obnovení systému

Nástroj, který zálohuje pouze nastavení operačního systému a nainstalované programy (vytváří **body obnovení**, např. před instalací aktualizace nebo ovladače). Neslouží k záloze souborů a složek. Předchozí verze souborů ve sdílených složkách uchovávají [stínové kopie](/it/operacni-systemy/18-stinove-kopie-svazku-pevne-odkazy-diskove-kvoty/).
