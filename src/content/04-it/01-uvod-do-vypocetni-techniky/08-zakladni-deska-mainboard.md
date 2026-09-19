---
title: "Základní deska (mainboard)"
order: 8
source: "uvt/cast1_07_mainboard.pdf"
---
Hlavním účelem základní desky je propojit jednotlivé součástky počítače do fungujícího celku a integrovaným součástem na základní desce poskytnout elektrické napájení.

Současné základní desky mají integrovány obvody, které byly v minulosti řešeny výhradně formou rozšiřující karty, která se zasouvala do normovaného slotu systémové sběrnice. Jedná se například o řadiče disků, síťové rozhraní (standard Ethernet), zvukové a grafické rozhraní, atd.

Typická základní deska umožňuje zapojení procesoru a operační paměti, další komponenty (např. grafické karty, pevné disky, mechaniky optických pamětí, modem atd.) se připojují pomocí rozšiřujících slotů nebo kabelů, které se zapojují do příslušných normovaných konektorů.

Nejdůležitějším logickým obvodem základní desky je **čipová sada** , neboli chipset, která umožňuje procesoru komunikovat s ostatními částmi počítače. V obvodech čipové sady jsou integrovány řadiče, které na základě zpracování instrukcí (programu) generují řídící signály pro tato zařízení. Je zde umístěn např. řadič operační paměti, řadiče disků, řadiče rozhraní (např. USB), řadiče sběrnice, atd.

((obrázek vynechán))


Na základní desce je dále umístěna polovodičová paměť FlashROM, ve které je uložen **BIOS** . BIOS (Basic Input Output System) je základní program počítače, který zprostředkovává komunikaci mezi technickým a programovým vybavením počítače (mezi hardwarem a operačním systémem). Ke konfiguraci BIOSu slouží program SETUP. V něm lze nastavit několik základních parametrů hardwaru počítače.

Základní funkce BIOSu:

- detekce základního hardwaru (konfigurace operační paměti, pevného disku, mechaniky optických pamětí, atd.)

- provedení základních testů a nahlášení případných chyb (kód případné chyby je oznámen pípáním)

- nastavení parametrů čipové sady (ovlivňuje rychlost, spolehlivost a funkčnost systému)

- inicializace zařízení PnP - Plug And Play

- nastavení parametrů integrovaných zařízení (řadiče disků, zvukový čip, integrovaný grafický čip, obvody rozhraní např. USB, FireWire, RS-232, atd.)

- nastavení základního zabezpečení počítače formou přístupového hesla

- monitorování některých parametrů jako např. údaje s teplotních čidel, rychlost otáčení větráčků aktivního chlazení, aktuální hodnoty napětí v jednotlivých větvích atd.

- správu napájení (tzv. Power management), tedy vypínání nepotřebných zařízení z důvodu úspory elektrické energie

Při každém spuštění PC provede BIOS otestování a nastavení hardware (dle zadaných parametrů) nutného pro spuštění operačního systému (fáze POST, tedy Power On Self Test). Poté se pokusí nalézt zaváděcí záznam operačního systému, jehož spuštěním dojde k zavedení operačního systému. BIOS je tedy v podstatě „programové rozhraní“ mezi obvody základní desky a operačním systémem.

## Příklad konektorů základní desky:

Většina současných desek obsahuje tyto důležité součástí:

- Patice (socket) pro připojení procesoru

- Čipovou sadu

- FlashROM paměť obsahující BIOS + baterie (uchování navolených parametrů vyžaduje trvalé napájení)

- Paměťové banky (konektory) pro moduly operační paměti

- Řadiče a normované sloty sběrnice _ISA, VL-BUS (u současných desek se již nesmí používat) PCI, AGP, PCI-Express_

- Obvody pro úpravu napájecího napětí procesoru

- Integrované přídavné součásti: síťové, grafické, zvukové rozhraní, řadiče disků (ATA, SATA, RAID), řadiče univerzálních rozhraní (PS/2, USB, FireWire, RS-232, Centronics, atd.)

- Konektory pro připojení spínaného napájecího zdroje

## **Formáty základních desek**

- PC/XT - vytvořen firmou IBM. První deska pro domácí počítače, která se stala standardem.

- AT - (Advanced Technology) - vytvořen firmou IBM. Následovník PC/XT a předchůdce ATX. Velikou odlišností od současného standardu ATX je, že se napájecí zdroj zapínal spínačem přímo napojeným na síť 230 V (dříve 220 V). Nebylo dostupné softwarové zapínání. Baby AT - zmenšená varianta AT.

- ATX - vytvořen firmou Intel v roce 1995. Bylo zde dostupné softwarové zapínání. Zapnutí je možné pomocí Power tlačítka na počítačové skříni, síťové karty s funkcí Wake-up či jiné periferie připojené k základní desce (záleží na podpoře základní desky). Dnes patří k nejpoužívanějším. MicroATX - zmenšená verze ATX. O 25% kratší. Obsahuje méně rozšiřujících slotů. Dnes patří k nejpoužívanějším zejména v kancelářských počítačích.

- BTX (Balanced Technology Extended) - vytvořen firmou Intel. Měl nahradit ATX. Rozmístění prvků na základní desce a v počítačové skříni mělo umožnit lepší chlazení, napájení a také snížit hlučnost. Příliš se neujal. (picoBTX, microBTX – liší se velikostí).

- Další méně rozšířené formáty - LPX, NLX, WTX, ITX, DTX

- Specifické formáty – neodpovídají popsaným formátům. Většinou jsou vyrobeny pro konkrétní typ počítače. Příkladem jsou desky pro notebooky nebo desky počítačů firmy Compaq, HP, atd.

## **Výběr základní desky**

Základní deska je prakticky nejdůležitější komponentou v počítači, stará se o komunikaci s procesorem a propojuje všechny ostatní části počítače (komponenty). Proto je vhodné při jejím výběru dbát na určitá pravidla:

1. **Čipová sada** - Jde o základ každé základní desky. Od ní se odvíjí další parametry, výbava, výkon (rychlost) základní desky a podpora nových technologií. Z hlediska rychlosti nás zajímá především taktovací frekvence lokální procesorové sběrnice (FSB, QPI, HyperTransport), tedy propojení procesoru s čipovou sadou. Od této frekvence se pak odvíjí především taktovací frekvence procesoru, grafické i systémových sběrnic či taktovací frekvence operační paměti. Zjednodušeně nám udává množství dat přenesených za sekundu (datový tok).

2. **Patice (socket) procesoru** - s vývojem nových procesorů dochází ke změně jejich vnitřní struktury, což v praxi znamená také změnu patice procesoru na základní desce. Každý výrobce (AMD, Intel) vyvíjí své vlastní patice, které nejsou vzájemně kompatibilní.

3. **Moduly operační paměti** - osazení pamětí vychází z použité čipové sady. V současnosti jsou podporovány paměti DDR, DDR2 a DDR3, využívající dvoukanálový a tříkanálový řadič operační paměti. Pokud jej základní deska podporuje, doporučuje se zakoupení dvojice (resp. trojice) paměťových modulů se stejnou rychlostí a kapacitou. V praxi toto osazení přináší nárůst přenosové rychlostí při přenosu dat proti osazení pouze jednou pamětí.

4. **BIOS** - pro uživatele je zajímavé především to, jaké parametry mohou nastavovat a v jakém rozsahu, možnost přetaktování procesorové sběrnice, možnost upgrade (flashování) BIOSu novější verzí, atd.

5. **Integrované součásti základní desky** - Současné základní desky se vyrábějí s dalšími integrovanými zařízeními, které pak není přímo nutné dokupovat zvlášť.

   - Jde především o:

   - řadiče disků (ATA, SATA rozhraní), většině desek nechybí také řadiče disků RAID pro vytváření diskových polí,

   - řadič disketové mechaniky (dnes se již téměř nevyužívá)

   - zvukový čip umožňující prostorové vnímání zvuku (5+1, popř. 7+1)

   - integrované grafické rozhraní buď s analogovým výstupem (rozhraní D-SUB, nebo též se někdy označuje u prodejců nesprávně jako VGA), nebo přímým digitálním výstupem (rozhraní DVI nebo novější vysokorychlostní HDMI). U většiny dražších základních desek je však tato varianta vypuštěna a nahrazena rozhraním grafické karty, která se zasouvá do slotu sběrnice AGP nebo PCI Express x16. Integrované řešení grafického rozhraní se většinou používá u základních desek přenosných počítačů.

   - síťové rozhraní standardu Ethernet s rychlostí 10Mb/s, 100Mb/s nebo 1Gb/s (konektor RJ-45), ve vyšší třídě lze nalézt i dvojici těchto síťových rozhraní s rychlostí 1Gb/s.

   - integrované řadiče univerzálních rozhraní, jako např. PS/2, USB, RS-232, LPT, FireWire

6. **Podpora sběrnic pro připojení přídavných karet**

   - ISA, EISA, VL-BUS – tyto sběrnice jsou již vyřazeny ze specifikace současných základních desek

   - speciální sběrnice AMR pro zvukové a faxmodemové karty, novější standard CNR a ACR, který již umožňoval připojit i síťové karty, xDSL modemy, USB, atd. Tyto sběrnice se dnes nevyužívají a současné desky jimi nejsou osazeny.

   - PCI, PCI-Express x1, x4 – určeno pro rozšiřující karty, např. zvuková karta, TV karta, modem, síťová karta, přídavné řadiče rozhraní USB, FireWire, atd.

   - AGP, PCI-Express x16 – určeno výhradně pro připojení grafické karty. Současné základní desky (resp. čipová sada) podporují výhradně sběrnici PCI-Express x16, přičemž některé nabízejí možnost osazení více grafických karet pro zvýšení výkonu v grafických aplikacích. Jedná se především o technologie SLI (společnost NVIDIA) a CrossfireX (společnost AMD, bývalá ATI).

7. **Softwarová výbava** - jedná se především o dodávané ovladače (drivery) základní desky. Ovladač je software nainstalovaný v konkrétním operačním systému, který umožňuje součástem tohoto operačního systému využívat konkrétní hardware (technické prostředky) počítače. Z dlouhodobějšího hlediska je vhodné myslet také na podporu výrobce základní desky v oblasti vývoje a zpřístupnění nových verzí těchto ovladačů (oprava chyb, doplnění nových funkcí, zvýšení stability či rychlosti, atd.)

8. **Formát (rozměry) základní desky**

9. **Způsob uchycení chladičů**
