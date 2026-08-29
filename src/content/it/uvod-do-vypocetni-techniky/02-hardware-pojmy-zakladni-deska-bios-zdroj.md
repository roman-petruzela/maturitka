---
title: "Hardware pojmy, základní deska, BIOS, zdroj"
order: 2
source: "MATURITA HADR/IT/5. Hardware pojmy, základní deska, BIOS, zdroj.docx"
---
- Hardware – technické, fyzické vybavení počítače
- Software – programové vybavení počítače, programy
- Počítač – stroj na zpracování informací
- Informace – vše co nám předává zprávu o věcech nebo událostech
- Bit – základní jednotka informace – nabývá hodnot logická 0 nebo 1
- Firmware__ __\- programové vybavení, které tvoří součást technického vybavení
- Registr \- velmi rychlé paměťové místo malé kapacity, umístěné většinou uvnitř procesoru počítače
- Cache paměť – paměť úrovně L1, L2, L3 v procesoru nebo i na pevném disku, má malou kapacitu, slouží jako zásobník dat mezi různě rychlými komponenty počítače
- BIOS – základní programové vybavení uložené v paměti ROM; spouští se ihned po startu počítače a zajišťuje základní funkce:
	- a\) dorozumívání mezi jednotlivými hardwarovými prvky počítače a Operačním systémem
	- b\) konfigurace komponent PC

Základní deska

- Základní deska zajišťuje komunikaci mezi komponenty počítače; tvoří páteř počítače
- Přímo na základní desce se nachází – CMOS paměť, RAM paměti, nebo přídavné karty
- Připevněné pomocí kabelů – HDD, CD\-ROM
- Základní desky se mohou lišit v jejich rychlosti, počtech konektorů, typu patice
- Některé komponenty mohou být integrované přímo na základní desce; zvuková a síťová karta
- Sběrnice – svazek vodičů kudy proudí veškeré informace mezi jednotlivými komponenty; záleží na rychlosti sběrnice – rychlejší tok informací
- Je zde umístěna polovodičová paměť FlashROM, ve které je uložen BIOS
- Formáty základních desek : AT – zapnutí pouze kolíbkáčem, ATX – už jde zapnout na case tlačítkem, dnes nejpoužívanější, BTX – měl nahradit ATX a měl umožnit lepší chlazení a napájení, ale neujal se; LPX; NLX; WTX; ITX; DTX
- Většina základních desek obsahuje tyto součásti:
	- Patice pro připojení procesoru – PGA \(AMD piny na procesoru\); LGA \(Intel piny na socketu\)
	- Čipovou sadu – chipset = která umožňuje procesoru komunikovat s ostatními částmi počítače
	- FlashTOM paměť obsahující BIOS a CMOS baterie pro uchování navolených parametrů
	- Paměťové konektory pro moduly operační paměti RAM
	- Řadiče a sběrnice PCI, AGP, PCI\-Express
	- Konektory pro připojení napájecího zdroje
	- Integrované přídavné součásti – síťové grafické zvukové …

BIOS

- Slouží ke komunikaci s operačním systémem
- Základní funkce BIOSu:
	- Detekce základního hardwaru \(konfigurace operační paměti, pevného disku\)
	- Provedení základních tesů a nahlášení případných chyb \(pípání značí chybu\)
	- Nastavení parametrů čipové sady
	- Inicializace zařízení PnP – Plug And Play
	- Nastavení parametrů integrovaných zařízení \(řadiče disků, zvukový čip, integrovaný grafický čip\)
	- Nastavení základního zabezpečení počítače
	- Monitorování třeba teplotních čidel, rychlost otáčení větráčků chlazení
	- Správu napájení a úspory elektrické energie
- Při každém spuštění PC provede BIOS otestování a nastavení hardware
- Pokusí se nalézt zaváděcí záznam operačního systému, jehož spuštěním dojde k zavedení operačního systému
- Výrobci jsou AMI, Award, Phoenix

Zdroj

- Je měnič napětí a má za úkol přeměnit střídavé napět ze sítě \(230 V\) na napětí stejnosměrné a to do několika větví:
	- 3,3 V; 5V; 12V
- Některé komponenty v PC využívají tyto napětí přímo nebo si je dále mní jako základní deska pro procesor na napětí nižší
- Velmi důležitou součástí PC; porucha může způsobit ničení dalších komponent
- V případě koupi slabého nebo nekvalitního zdroje, může způsobit nestabilitu systému
- Standardy počítačových zdrojů
	-  AT – poskytoval napětí 5V a 12V, od nynějšího ATX se zapínal spínačem přím napojeným na síť
	- ATX – standard přidal další větev a to 3,3 V a bylo zde dostupné softwarové zapínání
	- ATX 12 V – tento standard využívají současné počítačové sestavy; přidává 4\-pinový konektor s napětím 12V
- Konektory: ATX 12V 2\.0 – má 24 pinů a slouží k napájení všech částí základní desky
	- \+12 V power konektor – u dnešních desek je povinné ho zapojit
	- AUX power – konektor sestaven ze dvou \+3,3 V vodičů a jednoho \+5 V a třech COM \(zem\)
	- Floppy drive Power – dnes je používán čím dál méně – disketové mechaniky
	- Peripheral Power – nejčastější – přímý napájecí vstup nebo je dál zredukován – HDD IDE/ATA, mechaniky, chlazení atd
	- Seriál ATA napájeci konektor
