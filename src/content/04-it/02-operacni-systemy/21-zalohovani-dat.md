---
title: "Zálohování dat"
order: 21
source: "osy/Zálohování_dat.pdf"
---
Která data v PC jsou pro Vás nejdůležitější?

Jak můžete o data v PC přijít?

- selhání pevného disku

- elektrické napětí a problémy s napájením

- živelné pohromy

- krádež

- omyly a chyby uživatelů

## Média pro ukládání dat

**Magnetická páska:** Vysoká pořizovací cena páskové jednotky, nízká cena médií, vhodné spíše pro archivaci dat, než pro pravidelnou zálohu.

**Jiný diskový oddíl (svazek) pevného disku:** Chrání pouze před smazáním dat omylem

**Externí pevný disk, USB Flash disk, SD karta:** Snadné použití, zlepšující se poměr cena/místo pro uložení dat, ale pro pravidelnou zálohu nevhodné. Dá se použít pro archivaci dat.

**Optické disky:** Levná média, v poslední době útlum CD/DVD/BD mechanik. Dtd disky jsou vhodné pro dlouhodobou archivaci dat

**Pevný disk jiného PC v lokální síti:** Rychlost zálohování záleží na rychlosti připojení v síti a výkonu pevných disku počítačů. Pokud na síť zaútočí ransomware může zašifrovat i tyto zálohy.

**NAS:** Specializované síťové uložiště ukládající data do diskových polí (RAID). Vhodnější než záloha na pevný disk jiného PC v lokální síti. Pokud na síť zaútočí ransomware může zašifrovat i tyto zálohy.

**Vzdálená zálohovací služba:** Rychlost zálohování záleží na rychlosti internetového připojení, hrozí zneužití citlivých dat cizí osobou.

- Dropbox - www.dropbox.com

- OneDrive - https://onedrive.live.com/about/cs-cz/

- Google Disk - http://www.google.com/intl/cs_cz/drive/

## Zálohování souborů a složek

Pro zálohování souborů a složek existuje několik zálohovacích strategií. Většina z nich pracuje s tzv. archivačním atributem souboru.

## Strategie zálohování

**Úplná (normální, obecná) záloha:** Zálohuje všechny vybrané soubory. Archivační atribut mění na archivováno. Při změně souboru dojde opět ke změně archivačního atributu na nearchivováno.

**Přírustková (Incremental) záloha:** Zálohuje pouze ty soubory, které se od posledního zálohování (normálního nebo přírustkového změnily) a archivační atribut těchto souborů změní na **archivováno** .

**Rozdílová (Different) záloha:** Zálohuje pouze ty soubory, které se od posledního zálohování (normálního nebo přírustkového) změnily, archivační atribut těchto souborů nemění! Archivační atribut zůstává ve stavu **nearchivováno** .

**Kopírovací (Copy) záloha:** Zálohuje všechny vybrané soubory. Nevšímá si archivačního atributu. Nenaruší stanovený systém zálohování.

**Denní (Daily) záloha:** Zálohuje všechny soubory, které se daný den (od 00:00 do času zálohy) změnily. Nevšímá si archivačního atributu. Nenaruší stanovený systém zálohování.

V praxi se často používá kombinace zálohovacích strategií:

- Úplná + Přírustková (např. Úplná 1-krát týdně, Přírustková 1-krát denně)

- Úplná + Rozdílová (např. Úplná 1-krát týdně, Rozdílová 1-krát denně)

Zálohovací programy, také obsahují funkce:

- **komprimace souborů** – šetří místo na záložním médiu

- **šifrování souborů** – důležité zejména v případě zálohování pomocí vzdálené zálohovací služby

## Zálohování celých diskových oddílů

Zkopíruje se celý diskový oddíl (např. disk C:\). Je vytvořen přesný obraz disku, nezálohují se jenom soubory ale třeba také nastavení operačního systému a nastavení aplikací.

- vytvoření **bitové kopie**

- vytvoření **image** (obrazu) diskového oddílu pomocí některého z dostupných programů

   - Clonezilla - http://clonezilla.org

   - `o` Norton Ghost – https://norton_ghost.cs.downloadastro.com/

   - Acronis True Image - http://www.acronis.cz/domacnosti-a- <u>kancelare/produkty/true-image-home/</u>

## Obnovení systému

Nástroj, který zálohuje pouze nastavení operačního systému a nainstalované programy. Neslouží k záloze souborů a složek.
