---
title: "Úvod do operačních systémů"
order: 5
source: "osy/Úvod_do _operačních_systémů.pdf"
---
Operační systém tvoří prostředníka mezi uživatelem a hardwarem. Základním účelem operačního systému je spravovat hardware a ostatní programy tak, aby s nimi uživatel mohl řádně pracovat. Jak operační systém ovládá počítač a komunikuje s uživatelem je znázorněno na obrázku.

1. Uživatel zadává pokyny přímo OS (např. kopíruj soubor, smaž soubor), nebo používá programy, které jsou součástí operačního systému (např. kalkulačka).

2. Uživatel komunikuje přímo s aplikačním programem. Aplikační program poté může požadavek uživatele splnit pomocí komunikace s dalšími částmi počítače.

3. Aplikační program požádá operační systém, aby pro něj provedl nějakou operaci (např. vytvořil soubor dopis.txt).

4. Řada programů může chtít pracovat s hardwarem (např. program na stříhání videa pracuje s grafickou kartou, program na mixování hudby se zvukovou kartou), ale neumí pracovat přímo s konkrétní verzí součástky. Musí proto použít ovladač, který umí daný hardware řídit.

5. Pokud to program dovede, může s hardwarem pracovat přímo. V tomto případě se ale jedná o programy napsané pro konkrétní hardware a běžně se tento způsob nepoužívá.

6. Operační systém může s hardwarem komunikovat přímo. To ale od OS vyžaduje, aby s konkrétním typem HW daného výrobce a dané verze uměl pracovat. Tohle může OS umět jen pro některé standardní typy hardwaru, které byly známy v době, kdy byl OS naprogramován. Kdyby přímým způsobem musel komunikovat se všemi HW součástmi počítače, znamenalo by to, že v okamžiku, kdy se objeví na trhu nová a trochu odlišná verze součástky, musí být OS přeprogramován. Je vám tedy jasné, že tudy cesta povede

opravdu jen pro základní HW největších výrobců. V ostatních případech OS využije služeb BIOSU nebo se naučí ovládat nové zařízení pomocí ovladačů

7. Počítač využije ke komunikaci služeb BIOSU (podrobněji v kapitole 1.3)

8. Operační systém může využít ke komunikaci s hardwarem také ovladač. Pokud BIOS neumí komunikovat s hardwarem, využije služeb ovladače.

10. Ovladač je program, který je napsán tak, aby uměl pracovat s daným hardwarem a mohl komunikovat s určitým operačním systémem. Všimněte si, že když se podíváte na stránky některého výrobce hardwaru, najdete tam ovladače zařízení pro různé operační systémy. To proto, že každý OS „mluví trochu jiným jazykem“. Ovladač zařízení se na instaluje do OS (případně programu) a ten se tak „naučí“dané zařízení používat.

# **Úkol:**

1. Na internetu najdi odkaz pro stažení ovladače k tiskárně **HP Color LaserJet Pro CP1025** , pro operační systém **Windows 7 32-bit** .

2. Na internetu najdi odkaz pro stažení ovladačů k základní desce **MSI 970 Gaming** , pro operační systém **Windows XP 64-bit** .

3. Vyzkoušejte, jestli s pomocí operačního systému zjistíte, zda jsou na vašem počítači nainstalovány ovladače ke všem hardwarovým komponentám.

## **1.1 BIOS**

Měli jste někdy počítač bez nainstalovaného operačního systému? Pokud ano jistě víte, že počítač šel zapnout. Jak je možné, že jste mohli i bez operačního systému komunikovat s hardwarem? Toto vše šlo díky BIOSu. Programový kod BIOSu je uložen na základní desce, v dnešní době většinou v paměti Flash ROM.

BIOS po zapnutí počítače detekuje všechny hardwarové komponenty a načítá si jejich parametry. Právě BIOS zajišťuje prvotní komunikaci s hardwarovými komponenty. Po detekci připojeného hardwaru (za předpokladu, že je všechno v pořádku), zavede do operační paměti operační systém, kterému předá všechny své nadetekované informace.

BIOS se skládá z několika vrstev:

1. První vrstva je uložena v paměti Flash ROM. Tuto vrstvu nahrává přímo výrobce hardwaru a jedná se v podstatě o „systém“ BIOSU. V dnešní době jej lze přemazat (špatným přemazáním BIOSU však můžete zničit základní desku).

2. Druhá vrstva je v paměti CMOS. Do této paměti se ukládá nastavení konfigurace vašeho počítače (např. čas, kolik máte HDD, taktovací frekvence procesoru, atd.). Paměť CMOS je energeticky závislá, k jejímu udržování slouží baterie na základní desce.

3. Třetí a poslední vrstva není přímo v BIOSu, ale je uložena na přídavných kartách či HDD apod. Každá komponenta má také svůj BIOS, ve kterém je uloženo nastavení komponenty a její informace. Třeba u DVD-ROM je v paměti BIOSu (paměti ROM) uloženo, jaké formáty podporuje. Této paměti můžeme říkat firmware.

Stiskem specifické klávesy (např. F2, Delete, atd.) při startu počítače můžete spustit setup BIOSu. V setupu najdete například:

1. nastavení taktu procesoru a operační paměti, napájecí napětí procesoru

2. detekce harddisků, CD-ROM, DVD-ROM

3. nastavení periferií (integr. zvuková, síťová karta, modem)

4. bootovací sekvence (HDD, CD-ROM, USB, LAN)

5. hardware monitor - zobrazuje informace o teplotě procesoru, napětí zdroje, otáčky ventilátorů

# **Úkol:**

1. Na internetu najděte návod na přepsání BIOSu

2. Na svém počítači doma se dostaňte do BIOSu. Z BIOSu se poté dostaňte pomocí volby Exit Without Saving

## **1.2 UEFI**

Vylepšená náhrada firmwarového rozhraní BIOS. Standard UEFI je zaváděn z několika důvodů:

- Secure boot: umožňuje zajistit start PC tak, že je použit je „certifikovaný OS“. Při startu PC jsou při zavádění kontrolovány elektronické podpisy OS. Secure boot lze vypnout.

- Využití schopností nových procesorů

- Podpora GPT, která umožňuje zavést OS z diskových oddílů větších než 2 TB (což je limit MBR)

Spekuluje se o tom, že byl standard UEFI zaveden kvůli funkci secure boot a následnému omezení alternativních OS.

## **1.3 Základní části operačního systému**

1. **Jádro OS (kernel)** Zajišťuje chod operačního systému – jaké programy jsou spuštěny a jaké hardwarové prostředky jsou jim dány k dispozici (určuje např. kterému programu bude půjčen procesor a na jak dlouho)

2. **Uživatelské rozhraní (user interface)**

Část operačního systému, která zajišťuje komunikaci s uživatelem. Určuje, jakým způsobem uživatel ovládá pomocí OS počítač. Zda přes textové rozhraní (zadáváním příkazu do příkazového řádku) nebo přes grafické rozhraní (klikáním myši, výběrem z nabídek, atd.). Tato část OS je pro uživatele nejvíce viditelná.

3. **Souborový systém (file system)**

Stará se o to, jakým způsobem operační systém spravuje data (soubory). Jak jsou pojmenovány, organizovány do adresářů atd.

# **Otázky:**

1. Co je účelem operačního systému?

2. Ze kterých tří hlavních částí se skládá operační systém?

3. Jaké úkoly splní BIOS po zapnutí počítače?

4. Jaké informace a nastavení můžeme najít v setupu BIOSu?

5. K čemu slouží ovladač neboli driver?

6. Je obvyklé, že se ovladač pro jednu hardwarou komponentu vyrábí ve více verzích pro různé operační systémy?

# **Zdroje:**

1. <u>http://distancne.obaka-orlova.cz/PDF/PS1.pdf</u>

2. <u>http://www.fi.muni.cz/usr/pelikan/ARCHIT/TEXTY/VNEUM.HTML</u>
