---
title: "Pevný disk a nástroje pro údržbu"
order: 16
source: "osy/pevný_disk_a_nástroje pro údržbu.pptx"
---
## Ukládání dat na HDD

- OS skládá sektory do **alokačních jednotek – clusterů** (nejmenší použitelné množství dat pohromadě).
- Cluster snižuje **režii** adresace a evidence; obsahuje např. 4, 8, 16, 32, 64 sektorů.
- Cluster **nemůže obsahovat data ze dvou souborů**: soubor 1 kB při clusteru 4 kB zabere **4 kB** (3 kB se nevyužijí).

## Ukládání dat na SSD

- Data v buňkách **Flash** paměti; buňka drží **1 až 4 bity** (SLC, MLC, TLC, QLC).
- **Zapisuje se po stránkách, maže po blocích.**
- **Stránka** – nejmenší jednotka, kterou lze zapsat nebo přečíst; obvykle 4–16 KiB.
- **Blok** – skupina stránek (typicky 128–256); nejmenší jednotka, kterou lze **smazat**.
- Proto SSD potřebuje **TRIM** (viz níže) a nepřepisuje se „na místě“.

Podrobně: [pevné disky HDD a SSD](/it/uvod-do-vypocetni-techniky/12-pevne-disky-hdd-a-ssd/).

## Logická struktura disku v OS Windows

### Fragmentace a defragmentace (HDD)

- **Fragmentace** – soubor je rozdělen na části rozmístěné po disku, které na sebe nenavazují → **zpomalí se čtení a zápis**.
- **Defragmentace** – srovná fragmenty k sobě (na po sobě jdoucí clustery) → rychlejší čtení a zápis.
- U **SSD se nedefragmentuje** (nemá hlavu, jen by ho opotřebovala).

### NTFS metadata a MFT

- NTFS ukládá kromě dat i **metadata** (informace o datech) do 16 skrytých **metasouborů**.
- Jedním z nich je **MFT** (Master File Table) – **databáze** o všech souborech na disku.
- MFT zabírá oblast na začátku oddílu (~12 %), aby mohla růst a **zůstala nefragmentovaná**; když dojde místo pro soubory, rezerva se dočasně zmenší.
- Uprostřed disku je **záložní kopie** nejdůležitějších metasouborů.

### Obnova smazaných dat

- Smazání v Průzkumníku, Total Commanderu apod. **fyzicky data nesmaže** – jen odstraní **záznam (ukazatel) v MFT**.
- Clustery se tváří jako **volné** a kdykoli je může přepsat jiný soubor.
- Obnovu umí **specializovaný program**.
- Šance je dobrá, jen když se na oddíl **nic nezapisuje**; už start OS zapisuje hodně dat (dočasné soubory, soubor virtuální paměti, defragmentace na pozadí).

### TRIM u SSD

- Smazání souboru zruší jen metadata, data zůstanou. U HDD to nevadí (zápis přepisuje), u **SSD se musí stará data před zápisem smazat** → zápis se zpomalí.
- **TRIM** – OS oznámí SSD, které datové bloky už nejsou potřeba; provádí se obvykle v **době nečinnosti** disku.
- Kontrola, zda je TRIM zapnutý: `fsutil behavior query DisableDeleteNotify` (0 = zapnutý).

## Kontrola disku

- vyhledá a pokusí se opravit **vadné sektory**, hledá **ztracené clustery**, opravuje **chyby adresáře**
- grafickým rozhraním nebo příkazem **`chkdsk`** (`chkdsk C: /f`)

## Vyčištění disku

Smaže:

- dočasné soubory internetu,
- soubory protokolu instalace,
- dočasné soubory (`.tmp`),
- zprávy o chybách a ladící výpisy (debug dump files).
