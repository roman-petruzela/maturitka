---
title: "Základní deska (mainboard)"
order: 8
source: "uvt/cast1_07_mainboard.pdf"
---
Hlavním ú č elem základní desky je propojit jednotlivé sou č ástky po č íta č e do fungujícího celku a integrovaným sou č ástem na základní desce poskytnout elektrické napájení.

Sou č asné základní desky mají integrovány obvody, které byly v minulosti ř ešeny výhradn ě formou rozši ř ující karty, která se zasouvala do normovaného slotu systémové sb ě rnice. Jedná se nap ř í- klad o ř adi č e disk ů , sí ť ové rozhraní (standard Ethernet), zvukové a grafické rozhraní, atd.

Typická základní deska umož ň uje zapojení procesoru a opera č ní pam ě ti, další komponenty (nap ř . grafické karty, pevné disky, mechaniky optických pam ě tí, modem atd.) se p ř ipojují pomocí rozši ř u- jících slot ů nebo kabel ů , které se zapojují do p ř íslušných normovaných konektor ů .

Nejd ů ležit ě jším logickým obvodem základní desky je **č ipová sada** , neboli chipset, která umož ň uje procesoru komunikovat s ostatními č ástmi po č íta č e. V obvodech č ipové sady jsou integrovány ř adi č e, které na základ ě zpracování instrukcí (programu) generují ř ídící signály pro tato za ř ízení. Je zde umíst ě n nap ř . ř adi č opera č ní pam ě ti, ř adi č e disk ů , ř adi č e rozhraní (nap ř . USB), ř adi č e sb ě rnice, atd.

<!-- Start of picture text -->
Zadní blok konektor ů<br>Gigabitová<br>Zvukový  sí ť ová<br>kodek  karta<br>Digitální<br>S/PDIF<br>Speciální konektor pro DPS modul<br>výstup   Konektory PCI<br>PCI e 1x<br> Konektor PCIe x16<br>pro grafickou kartu<br> Patice pro procesor<br>Soket T<br>MCH<br> Konektory<br>FireWire<br> Baterie<br>IDE RAID<br> ICH7R<br> Dual Bios  Sloty pro pam ě ti DDR<br> Konektory<br>SATA<br>I/O  ř adi č<br> Konektory p ř edního panelu    Konektor IDE    Konektor FDD    Napájení ATX<br><!-- End of picture text -->

Na základní desce je dále umíst ě na polovodi č ová pam ěť FlashROM, ve které je uložen **BIOS** . BIOS (Basic Input Output System) je základní program po č íta č e, který zprost ř edkovává komunikaci mezi technickým a programovým vybavením po č íta č e (mezi hardwarem a opera č ním systémem). Ke konfiguraci BIOSu slouží program SETUP. V n ě m lze nastavit n ě kolik základních parametr ů hardwaru po č íta č e.

Základní funkce BIOSu:

- detekce základního hardwaru (konfigurace opera č ní pam ě ti, pevného disku, mechaniky optických pam ě tí, atd.)

- provedení základních test ů a nahlášení p ř ípadných chyb (kód p ř ípadné chyby je oznámen pípáním)

- nastavení parametr ů č ipové sady (ovliv ň uje rychlost, spolehlivost a funk č nost systému)

- inicializace za ř ízení PnP - Plug And Play

- nastavení parametr ů integrovaných za ř ízení ( ř adi č e disk ů , zvukový č ip, integrovaný grafický č ip, obvody rozhraní nap ř . USB, FireWire, RS-232, atd.)

- nastavení základního zabezpe č ení po č íta č e formou p ř ístupového hesla

- monitorování n ě kterých parametr ů jako nap ř . údaje s teplotních č idel, rychlost otá č ení v ě - trá č k ů aktivního chlazení, aktuální hodnoty nap ě tí v jednotlivých v ě tvích atd.

- správu napájení (tzv. Power management), tedy vypínání nepot ř ebných za ř ízení z d ů vodu úspory elektrické energie

P ř i každém spušt ě ní PC provede BIOS otestování a nastavení hardware (dle zadaných parametr ů ) nutného pro spušt ě ní opera č ního systému (fáze POST, tedy Power On Self Test). Poté se pokusí nalézt zavád ě cí záznam opera č ního systému, jehož spušt ě ním dojde k zavedení opera č ního systému. BIOS je tedy v podstat ě „programové rozhraní“ mezi obvody základní desky a opera č ním systémem.

## P ř íklad konektor ů základní desky:

V ě tšina sou č asných desek obsahuje tyto d ů ležité sou č ástí:

- Patice (socket) pro p ř ipojení procesoru

- Č ipovou sadu

- FlashROM pam ěť obsahující BIOS + baterie (uchování navolených parametr ů vyžaduje trvalé napájení)

- Pam ěť ové banky (konektory) pro moduly opera č ní pam ě ti

- Ř adi č e a normované sloty sb ě rnice _ISA, VL-BUS (u sou č asných desek se již nesmí používat) PCI, AGP, PCI-Express_

- Obvody pro úpravu napájecího nap ě tí procesoru

- Integrované p ř ídavné sou č ásti: sí ť ové, grafické, zvukové rozhraní, ř adi č e disk ů (ATA, SATA, RAID), ř adi č e univerzálních rozhraní (PS/2, USB, FireWire, RS-232, Centronics, atd.)

- Konektory pro p ř ipojení spínaného napájecího zdroje

## **Formáty základních desek**

- PC/XT - vytvo ř en firmou IBM. První deska pro domácí po č íta č e, která se stala standardem.

- AT - (Advanced Technology) - vytvo ř en firmou IBM. Následovník PC/XT a p ř edch ů dce ATX. Velikou odlišností od sou č asného standardu ATX je, že se napájecí zdroj zapínal spína č em p ř ímo napojeným na sí ť 230 V (d ř íve 220 V). Nebylo dostupné softwarové zapínání. Baby AT - zmenšená varianta AT.

- ATX - vytvo ř en firmou Intel v roce 1995. Bylo zde dostupné softwarové zapínání. Zapnutí je možné pomocí Power tla č ítka na po č íta č ové sk ř íni, sí ť ové karty s funkcí Wake-up č i jiné periferie p ř ipojené k základní desce (záleží na podpo ř e základní desky). Dnes pat ř í k nejpoužívan ě jším. MicroATX - zmenšená verze ATX. O 25% kratší. Obsahuje mén ě rozši ř ujících slot ů . Dnes pat ř í k nejpoužívan ě jším zejména v kancelá ř ských po č íta č ích.

- BTX (Balanced Technology Extended) - vytvo ř en firmou Intel. M ě l nahradit ATX. Rozmíst ě ní prvk ů na základní desce a v po č íta č ové sk ř íni m ě lo umožnit lepší chlazení, napájení a také snížit hlu č nost. P ř íliš se neujal. (picoBTX, microBTX – liší se velikostí).

- Další mén ě rozší ř ené formáty - LPX, NLX, WTX, ITX, DTX

- Specifické formáty – neodpovídají popsaným formát ů m. V ě tšinou jsou vyrobeny pro konkrétní typ po č íta č e. P ř íkladem jsou desky pro notebooky nebo desky po č íta čů firmy Compaq, HP, atd.

## **Výb ě r základní desky**

Základní deska je prakticky nejd ů ležit ě jší komponentou v po č íta č i, stará se o komunikaci s procesorem a propojuje všechny ostatní č ásti po č íta č e (komponenty). Proto je vhodné p ř i jejím výb ě ru dbát na ur č itá pravidla:

1. **Č ipová sada** - Jde o základ každé základní desky. Od ní se odvíjí další parametry, výbava, výkon (rychlost) základní desky a podpora nových technologií. Z hlediska rychlosti nás zajímá p ř edevším taktovací frekvence lokální procesorové sb ě rnice (FSB, QPI, HyperTransport), tedy propojení procesoru s č ipovou sadou. Od této frekvence se pak odvíjí p ř edevším taktovací frekvence procesoru, grafické i systémových sb ě rnic č i taktovací frekvence opera č ní pam ě ti. Zjednodušen ě nám udává množství dat p ř enesených za sekundu (datový tok).

2. **Patice (socket) procesoru** - s vývojem nových procesor ů dochází ke zm ě n ě jejich vnit ř ní struktury, což v praxi znamená také zm ě nu patice procesoru na základní desce. Každý výrobce (AMD, Intel) vyvíjí své vlastní patice, které nejsou vzájemn ě kompatibilní.

3. **Moduly opera č ní pam ě ti** - osazení pam ě tí vychází z použité č ipové sady. V sou č asnosti jsou podporovány pam ě ti DDR, DDR2 a DDR3, využívající dvoukanálový a t ř íkanálový ř a- di č opera č ní pam ě ti. Pokud jej základní deska podporuje, doporu č uje se zakoupení dvojice (resp. trojice) pam ěť ových modul ů se stejnou rychlostí a kapacitou. V praxi toto osazení p ř ináší nár ů st p ř enosové rychlostí p ř i p ř enosu dat proti osazení pouze jednou pam ě tí.

4. **BIOS** - pro uživatele je zajímavé p ř edevším to, jaké parametry mohou nastavovat a v jakém rozsahu, možnost p ř etaktování procesorové sb ě rnice, možnost upgrade (flashování) BIOSu nov ě jší verzí, atd.

5. **Integrované sou č ásti základní desky** - Sou č asné základní desky se vyráb ě jí s dalšími integrovanými za ř ízeními, které pak není p ř ímo nutné dokupovat zvláš ť .

   - Jde p ř edevším o:

   - ř adi č e disk ů (ATA, SATA rozhraní), v ě tšin ě desek nechybí také ř adi č e disk ů RAID pro vytvá ř ení diskových polí,

   - ř adi č disketové mechaniky (dnes se již tém ěř nevyužívá)

   - zvukový č ip umož ň ující prostorové vnímání zvuku (5+1, pop ř . 7+1)

   - integrované grafické rozhraní bu ď s analogovým výstupem (rozhraní D-SUB, nebo též se n ě kdy ozna č uje u prodejc ů nesprávn ě jako VGA), nebo p ř ímým digitálním výstupem (rozhraní DVI nebo nov ě jší vysokorychlostní HDMI). U v ě tšiny dražších základních desek je však tato varianta vypušt ě na a nahrazena rozhraním grafické karty, která se zasouvá do slotu sb ě rnice AGP nebo PCI Express x16. Integrované ř ešení grafického rozhraní se v ě tšinou používá u základních desek p ř enosných po č íta čů .

   - sí ť ové rozhraní standardu Ethernet s rychlostí 10Mb/s, 100Mb/s nebo 1Gb/s (konektor RJ-45), ve vyšší t ř íd ě lze nalézt i dvojici t ě chto sí ť ových rozhraní s rychlostí 1Gb/s.

   - integrované ř adi č e univerzálních rozhraní, jako nap ř . PS/2, USB, RS-232, LPT, FireWire

6. **Podpora sb ě rnic pro p ř ipojení p ř ídavných karet**

   - ISA, EISA, VL-BUS – tyto sb ě rnice jsou již vy ř azeny ze specifikace sou č asných základních desek

   - speciální sb ě rnice AMR pro zvukové a faxmodemové karty, nov ě jší standard CNR a ACR, který již umož ň oval p ř ipojit i sí ť ové karty, xDSL modemy, USB, atd. Tyto sb ě rnice se dnes nevyužívají a sou č asné desky jimi nejsou osazeny.

   - PCI, PCI-Express x1, x4 – ur č eno pro rozši ř ující karty, nap ř . zvuková karta, TV karta, modem, sí ť ová karta, p ř ídavné ř adi č e rozhraní USB, FireWire, atd.

   - AGP, PCI-Express x16 – ur č eno výhradn ě pro p ř ipojení grafické karty. Sou č asné základní desky (resp. č ipová sada) podporují výhradn ě sb ě rnici PCI-Express x16, p ř i č emž n ě které nabízejí možnost osazení více grafických karet pro zvýšení výkonu v grafických aplikacích. Jedná se p ř edevším o technologie SLI (spole č nost NVIDIA) a CrossfireX (spole č - nost AMD, bývalá ATI).

7. **Softwarová výbava** - jedná se p ř edevším o dodávané ovlada č e (drivery) základní desky. Ovlada č je software nainstalovaný v konkrétním opera č ním systému, který umož ň uje souč ástem tohoto opera č ního systému využívat konkrétní hardware (technické prost ř edky) poč íta č e. Z dlouhodob ě jšího hlediska je vhodné myslet také na podporu výrobce základní desky v oblasti vývoje a zp ř ístupn ě ní nových verzí t ě chto ovlada čů (oprava chyb, dopln ě ní nových funkcí, zvýšení stability č i rychlosti, atd.)

8. **Formát (rozm ě ry) základní desky**

9. **Zp ů sob uchycení chladi čů**
