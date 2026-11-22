---
title: "Zálohování dat"
order: 21
source: "osy/Zálohování_dat.pdf"
---

**Zálohování** je vytváření kopií dat, ze kterých lze data obnovit, když se původní poškodí nebo ztratí. Záloha má smysl, jen když je uložená **jinde** než originál a když se z ní obnova **vyzkoušela**.

**Jak o data přijít:** selhání disku, problémy s napájením, živelná pohroma, krádež, omyl uživatele, **ransomware** (viz [malware](/it/operacni-systemy/26-malware/)).

## Zálohování × archivace

- **Záloha** je pravidelně obnovovaná kopie aktuálních dat; starší zálohy se přepisují novými.
- **Archivace** je dlouhodobé uložení dat, se kterými se už nepracuje, ale je třeba je uchovat. Archiv se nemění a často je jedinou kopií, proto se také zálohuje.

**Pravidlo 3-2-1:** **3** kopie dat, na **2** různých typech médií, **1** mimo budovu (cloud, jiná pobočka). Proti ransomwaru pomáhá **offline** nebo neměnná kopie.

**RAID není záloha** – chrání jen před selháním disku, ne před smazáním souboru, virem nebo požárem ([RAID](/it/operacni-systemy/17-raid/)).

## Záložní média

| Médium | Vlastnosti | Použití |
| --- | --- | --- |
| **magnetická páska** | drahá mechanika, levná média | archivace velkých objemů |
| **externí disk, USB flash, SD karta** | snadné, ale pro pravidelnou zálohu nevhodné | archivace |
| **optické disky** | levné, dlouhé vypalování | dlouhodobý archiv |
| **disk jiného PC v síti** | rychlost dána sítí, hrozí zašifrování ransomwarem | pravidelná záloha |
| **NAS** | síťové úložiště s diskovým polem (RAID) | pravidelná záloha |
| **cloud** | rychlost dána internetem, data u třetí strany – **šifrovat** | pravidelná záloha |

## Strategie zálohování

Většina strategií pracuje s **archivačním atributem** souboru: nově vytvořený nebo změněný soubor má *nearchivováno* („je potřeba zálohovat“), zálohovací program ho po záloze může nastavit na *archivováno*.

![Týden zálohování: úplná v neděli a přírůstkové nebo rozdílové další dny; při výpadku ve čtvrtek se obnovuje z neděle a ze všech přírůstkových, případně jen z poslední rozdílové](/images/content/it/operacni-systemy/zalohovani/strategie.webp)

| Záloha | Co zálohuje | Archivační atribut |
| --- | --- | --- |
| **úplná (Full)** | všechny vybrané soubory | nastaví na *archivováno* |
| **přírůstková (Incremental)** | změněné od poslední úplné či přírůstkové | nastaví na *archivováno* |
| **rozdílová (Differential)** | změněné od poslední úplné či přírůstkové | **nemění** |
| **kopírovací (Copy)** | všechny vybrané soubory | nevšímá si, systém záloh nenaruší |
| **denní (Daily)** | soubory změněné daný den | nevšímá si |

Často se kombinuje:

| Kombinace | Záloha | Obnova |
| --- | --- | --- |
| úplná + přírůstková | rychlá, malé zálohy | pomalejší – poslední úplná a **všechny** přírůstkové po ní |
| úplná + rozdílová | rozdílová roste den ode dne | rychlejší – poslední úplná a **poslední** rozdílová |

**Příklad:** úplná záloha v neděli, disk selže ve čtvrtek. Přírůstkově se obnoví neděle a pak pondělí, úterý, středa; rozdílově stačí neděle a středa.

Zálohovací programy umí **komprimaci**, **šifrování**, **plánování** a **verze** souborů.

## Zálohování celých oddílů a obnovení systému

- **Image (obraz) oddílu** je přesná kopie celého disku včetně systému a nastavení; po selhání disku se obnoví celý systém najednou (Clonezilla, Acronis True Image).
- **Windows Server Backup** zálohuje server; zálohovat a obnovovat smí členové **Administrators** a **Backup Operators**.
- **Obnovení systému** zálohuje jen nastavení OS a programy (**body obnovení**), ne soubory. Předchozí verze souborů na sdílených složkách uchovávají [stínové kopie](/it/operacni-systemy/18-stinove-kopie-svazku-pevne-odkazy-diskove-kvoty/).

## Otázky k opakování

1. Proč zálohujeme a jak můžeme přijít o data? ||obnova po ztrátě; selhání disku, napájení, pohroma, krádež, omyl, ransomware||
2. Jaký je rozdíl mezi zálohou a archivací? ||záloha je pravidelně obnovovaná kopie aktuálních dat, archiv dlouhodobě uchovává data, se kterými se nepracuje||
3. Co říká pravidlo 3-2-1? ||3 kopie, 2 různá média, 1 mimo budovu||
4. Proč RAID není záloha? ||chrání jen před selháním disku, ne před smazáním, virem nebo požárem||
5. Porovnejte úplnou, přírůstkovou a rozdílovou zálohu. ||úplná vše; přírůstková změny od poslední zálohy (obnova ze všech); rozdílová změny od poslední úplné (obnova ze dvou)||
6. Jaká média se hodí pro archivaci a jaká pro pravidelnou zálohu? ||archivace: páska, optika, externí disk; pravidelná: NAS, cloud, disk v síti||
