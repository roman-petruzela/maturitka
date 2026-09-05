---
title: "RAID"
order: 17
source: "osy/RAID.pdf"
---
RAID

# RAID

- metoda zabezpečení dat proti selhání pevného disku

- zabezpečení je realizováno ukládáním dat na více nezávislých disků

- data jsou zachována i při selhání některého z HDD

# RAID

Ukládání dat je realizováno buď softwarově, nebo hardwarově

- **softwarové řešení** : zápis do pole RAID obsluhuje operační systém (ovladač)  zatížení CPU, snížení rychlosti zápisu

- **hardwarové řešení** : speciální zařízení (řadič) obstarává obsluhu RAID sám a hlavní procesor není zatěžován

# RAID

- pokud dojde při provozu RAID pole k výpadku některého disku (členu pole), správce PC vymění havarovaný disk za nový a ten začlení zpět do pole

- po výměně disku začne tzv. rekonstrukce pole, při které jsou dopočítány chybějící údaje a zapsány na pevný disk

# RAID

## **RAID není záloha!**

• data nejsou uložena na bezpečném místě

• není možnost návratu ke starší verzi

# RAID 0

• nejedná se o skutečný RAID, protože neobsahuje redundantní informace

• je realizován **zřetězením** , nebo **prokládáním**

# RAID 0 zřetězení

• data jsou postupně ukládána na několik disků • výhodou je zvýšení kapacity disku

# RAID 0 prokládání

- při prokládání jsou data na disky ukládána střídavě

- při poruše disku je málo pravděpodobné, že by nějaký soubor zůstal nepoškozen

- • prokládání může zrychlit čtení i zápis větších bloků dat, protože je možné zároveň číst (zapisovat) jeden blok z jednoho disku a následující blok z jiného disku

RAID 0 prokládání

# RAID 1

• nejjednoduší ochrana dat • obsah se současně zaznamenává na dva disky • v případě výpadku jednoho disku se pracuje s kopií, která je ihned k dispozici

RAID 1

# RAID 3

• je použito N+1 disků

- N disků pro data

- 1 disk, kde je pro každou sadu bitů uložen **paritní bit** (lichá, sudá parita, slouží k detekci chyby ve slově)

- při výpadku disku s paritními informacemi zůstanou data zachovány

- • při výpadku disku s daty, jsou data rekonstruována z existujících dat a z parity

- • nevýhoda: vytížení disku s paritními bity

RAID 3

# RAID 5

• paritní bity (samoopravné kody) jsou umístěny na členech střídavě

- nedochází k přetěžování jednoho disku

- • výhodou je, že lze využít paralelního přístupu k datům, protože delší úsek dat je rozprostřen mezi více disků, takže čtení je rychlejší

• nevýhodou je pomalejší zápis (nutnost výpočtu samoopravného kódu)

RAID 5

# RAID 10 (1+0)

• data nejdříve v diskových polích zrcadlí a pak se tato pole vloží do dalšího diskového pole typu RAID 0 pro větší zrychlení přenosových rychlostí • nemusí se totiž počítat paritní data, čímž se vše zrychluje

- maximální počet pevných disků, který může selhat bez jakýchkoliv následků je jeden v každém poli

RAID 10 (1+0)

# JBOD

- Just a Bunch Of Disks neboli „jen hromada disků“

- Ve zřetězení jsou data postupně ukládána na několik disků. Jakmile se zaplní první, ukládá se na druhý, poté na třetí atd.

- • Výhodou je snadné zvětšení kapacity přidáním dalšího členu a skutečnost, že při výpadku členu mohou být některé soubory nedotčeny.

- • Pokud jsou v JBODu zapojeny dva a více disků s odlišnou kapacitou, zachová se maximální kapacita úložiště.

JBOD
