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

**Magnetická páska:** Vysoká pořizovací cena páskové jednotky, nízká cena médií, vhodné spíše pro archivaci dat (i velkého množství), než pro pravidelnou zálohu.

**Jiný diskový oddíl (svazek) pevného disku:** Chrání pouze před smazáním dat omylem.

**Externí pevný disk, USB Flash disk, SD karta:** Snadné použití, rychlá média, zlepšující se poměr cena/místo pro uložení dat, ale pro pravidelnou zálohu nevhodné. Dá se použít pro archivaci dat — při jejich malém používání by měla být i vysoká spolehlivost.

**Optické disky:** Levná média, v poslední době útlum CD/DVD/BD mechanik, dlouhá doba vypalování. Dtd disky jsou vhodné pro dlouhodobou archivaci dat.

**Pevný disk jiného PC v lokální síti:** Rychlost zálohování záleží na rychlosti připojení v síti a výkonu pevných disků počítačů. Pokud na síť zaútočí ransomware, může zašifrovat i tyto zálohy. Počítač se zálohami je nutné dobře zabezpečit.

**NAS:** Specializované síťové úložiště ukládající data do diskových polí (RAID). Vhodnější než záloha na pevný disk jiného PC v lokální síti. Pokud na síť zaútočí ransomware, může zašifrovat i tyto zálohy.

**Vzdálená zálohovací služba:** Rychlost zálohování záleží na rychlosti internetového připojení, data svěřujeme třetí straně — hrozí zneužití citlivých dat cizí osobou.

- Dropbox - <https://www.dropbox.com>
- OneDrive - <https://onedrive.live.com/about/cs-cz/>
- Google Disk - <http://www.google.com/intl/cs_cz/drive/>

| Účel | Vhodná média |
| --- | --- |
| **archivace** | magnetická páska (velké množství dat), USB flash disk, SD karta, externí pevný disk, optické disky |
| **pravidelné zálohování** | NAS, pevný disk jiného počítače v síti, vzdálená zálohovací služba |

## Zálohování souborů a složek

Pro zálohování souborů a složek existuje několik zálohovacích strategií. Většina z nich pracuje s tzv. **archivačním atributem** souboru: když se soubor vytvoří nebo změní, systém mu atribut nastaví na *nearchivováno* („tento soubor je potřeba zálohovat“), a zálohovací program ho po záloze může nastavit na *archivováno*.

## Strategie zálohování

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
