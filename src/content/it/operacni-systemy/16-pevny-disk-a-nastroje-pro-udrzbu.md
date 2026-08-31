---
title: "Pevný disk a nástroje pro údržbu"
order: 16
source: "osy/pevný_disk_a_nástroje pro údržbu.pptx"
---
Správa pevného disku

Ukládání dat na HDD

# Ukládání dat na HDD

• operační systém z jednotlivých sektorů skládá alokační jednotky nazvané clustery • Alokační jednotka je nejmenší použitelné množství dat pohromadě • Použití alokačních jednotek umožňuje výrazně snížit režii při adresaci a evidenci uložených dat • jedna alokační jednotka může obsahovat například 4, 8, 16, 32, 64, … sektorů. • Jedna alokační jednotka nemůže být obsazena daty ze dvou souborů, i když je zaplněna jen z části, má-li soubor velikost např. 1kB a velikost clusteru je nastavena na 4kB, zabere soubor na pevném disku 4kB (zbývající 3kB nebude možné dále využít!)

Ukládání dat na SSD

# Ukládání dat na SSD

• data jsou ukládána do paměťových buněk polovodičové paměti Flash ROM • Podle typu paměťové buňky může být v jedné buňce uložen 1 bit, ale také až 4 bity (viz. https://cs.wikipedia.org/wiki/Solid-sta <u>te_drive#Typy_bun%C4%9Bk)</u>

• data mohou být ukládána po stránkách buněk ale mazána po blocích buněk

Ukládání dat na SSD

Ukládání dat na SSD

# Ukládání dat na SSD

- Stránka buněk je nejmenší jednotka dat, která lze na SSD disku zapisovat nebo číst. Obvykle se skládá z 256, 512 nebo 1024 buněk.

- Blok buněk je skupina několika stránek buněk. Obvykle se skládá z 128 až 256 stránek buněk.

- Hlavní rozdíl mezi stránkou buněk a blokem buněk je v tom, že stránka buněk je fyzická jednotka dat, zatímco blok buněk je logická jednotka dat. Stránky buněk jsou fyzicky uložené na SSD disku, zatímco bloky buněk jsou abstraktní koncept, který se používá k popisu způsobu, jakým jsou data organizována

- Bloky buněk se používají k optimalizaci výkonu a životnosti SSD disku. SSD disky jsou nejrychlejší při čtení a zápisu dat v blokových velikostech. Bloky buněk umožňují SSD diskům efektivněji přistupovat k datům.

# Logická struktura disku v OS Windows

Fragmentace dat u HDD • vzniká tehdy, je-li jeden soubor rozdělen na více částí (fragmentován) a rozmístěn na více místech pevného disku, které na sebe přímo nenavazují • zpomaluje se rychlost čtení a zápisu • pro odstranění **fragmentace** se používá proces **defragmentace**

Defragmentace u HDD • roztroušené kousky souborů (fragmenty) uspořádá tak, aby byly co nejvíce pohromadě (např. v po sobě jdoucích alokačních jednotkách) • zrychlí operace čtení/zápis z disku • <u>https://cs.wikipedia.org/wiki/Defragmenta ce</u>

Obnova smazaných dat • souborový systém NTFS ukládá na disk kromě uživatelských dat také tzv. **metadata** (informace o datech) • metadata jsou ukládána do 16 speciálních skrytých souborů (metasoubory) • jedním ze souborů je MFT (master file table)

- MFT je databáze, která uchovává informace o souborech na disku

# Obnova smazaných dat

• MFT zabírá oblas začátku oddílu (cca. 12% oddílu), aby se mohla dále rozrůstat a zůstala nefragmentována • nedostává-li se na disku místa pro soubory, volné místo určené MFT se na nějaký čas zredukuje • uprostřed disku je záložní kopie nejdůležitějších metasouborů MFT

- Obnova smazaných dat

- • dojde-li ke smázání dat pomocí souborového manažeru (Průzkumník, Total Commander, atd.), jsou tyto soubory stále fyzicky uloženy na paměťovém médiu

- dojde pouze k odstranění záznamu (ukazatele) na tyto soubory v MFT

- • Místo (clustery), které smazané soubory stále zaujímají se jeví jako volné a může zde být kdykoliv zapsán jiný soubor

# Obnova smazaných dat

• obnovu těchto dat lze provést pomocí specializovaného programu • podmínkou pro zachování dobré šance na zpětnou obnovu odstraněného souboru je zamezení jakéhokoliv zápisu na oddíl disku, který odstraněný soubor obsahuje, neboť místo které obsazuje je označeno jako volné a kdykoliv může dojít k jeho přepsání jiným souborem • již při spuštění (restartu) operačního systému dochází k zápisu značného množství dat (dočasné soubory, soubor virtuální operační paměti, defragmentace na pozadí, atd.) do oblastí pevného disku, která by mohla obsahovat hledané soubory

# TRIM u SSD

- při smázání souboru dojde pouze k smazání metadat, ale samotná data zůstanou na disku

- U HDD to nevadí, protože při zápisu dat dochází zároveň k jejich mazání

- • U SSD disku je ale třeba před zápisem nových dat stará data smazat, tím pádem dochází k zpomalení operace zápisu dat

# TRIM u SSD

- operace TRIM informuje jádro OS o tom, které datové bloky na SSD disku již nejsou potřeba

• obvykle je operace TRIM prováděna v čase, kdy se od SSD disku neočekává žádná další činnost - • <u>https://cs.phhsnews.com/how-to-check iftrim-is-enabled-for-your-ssd1948</u>

# Kontrola disku

• vyhledá a pokusí se opravit vadné sektory • hledá ztracené clustery • vyhledává a opravuje chyby adresáře • spuštění buď přes grafické rozhraní, nebo příkazem **chkdsk** • <u>https://wintip.cz/399-jak-zjistit-chyby-na-p evnem-disku</u>

# Vyčištění disku

**smaže:**

• dočasné soubory internetu • soubory protokolu instalace • dočasné soubory (.tmp)

• soubory zasílání zpráv o chybách • debug dump files
