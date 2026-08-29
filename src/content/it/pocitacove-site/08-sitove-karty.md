---
title: "Síťové karty"
order: 8
source: "site/T09_sitova_karty.pdf"
---
# Síťové karty

## Počítačové sítě 2r.

# Síťové karty

- **Síťové rozhraní**

   - je **hranice mezi dvěma rozdílnými typy** síťových médií.

   - Síťové rozhraní je **adresovatelné** , to znamená, že signál odeslaný po fyzickém médiu míří na určité rozhraní v síti.

# Fyzická síťová rozhraní

- **Karta síťového rozhraní** – síťová karta (NIC – Network Interface Card) – typický příklad síťového rozhraní.

- **Síťová karta** vznikla jako reakce na potřebu sdílet data mezi několika počítači.

   - Liší se mezi sebou:

      - typem kabeláže

      - rychlostí přenosu

   - Síťová karta je složená:

      - Hardwaru

      - Firmwaru  (softwarové  rutiny  uložené  v permanentní paměti), který provádí funkce řízení logického spoje a řízení přístupu na média ve  spojové  vrstvě  modelu  OSI.

# Fyzická síťová rozhraní

- Standardní  rychlost  přenosu  je **10/100/1000  Mb/s,** v současnosti se na trhu objevují karty o rychlosti v Gb/s.

# Úlohou síťové karty je

   - připravovat data z počítače pro síťový kabel

   - posílat data do jiného počítače

   - kontrolovat tok dat mezi počítačem a kabelovým systémem

   -

- Síťová karta funguje **na první a druhé vrstvě** síťového modelu ISO/OSI

- Síťová  karta **komunikaci  nikdy  nemění** ,  pouze  zpracovává  pakety  či rámce. **Zpracování** komunikace je **usměrňováno čipovou sadou** na kartě, ale **provádí ho centrální procesor počítače** .

- **Vstupní  a  výstupní operace  jsou  základní  mírou výkonnosti** .  Hodně vytížená síťová karta (nebo karty) může spotřebovat všechny prostředky procesoru. Součástí  některých  moderních  síťových  karet  a  základních desek  jsou speciálně upraveny čipy, které jsou schopné provést zpracování v TCP/IP zásobníku  přímo  v  síťovém  řadiči  a  odlehčit  tak  centrálnímu procesoru (technologie TCP offloading).

# Konstrukce karty

- je rozdělená na dvě části:

   - **první část** tvoří **chip karty** , který komunikuje se sběrnicí PC (ISA nebo PCI), případná **BootROM** pro start po síti, **paměť EEPROM** , v které je uloženo nastavení karty (adresa, IRQ, unikátní MAC číslo), ta může být i integrována v chipu. Dále na kartě najdeme miniaturní **transformátorek z 5V na 9V** (spínaný zdroj) a **optočleny** pro vstupní a výstupní signál.

- **druhá část** karty **je** po elektrické stránce **galvanicky oddělena od první** části a vlastně od celého počítače, to nám umožňuje propojovat vzdálené počítače připojené k jinému el. rozvodu (jiné el. zásuvce v téže místnosti).

- Tato  druhá  část  je  napájena  trasformátorkem a **obsahuje  vysílací a přijímací  část  karty** .  Vysílací a přijímané  signály  jsou  odděleny optočleny.

# Příprava dat

- Síťovým kabelem musí **data procházet v jediném toku bitů a vždy jen v jednom směru.** Počítač  data  buď posílá,  nebo  přijímá.  Síťová  karta  vezme  data přenášená  paralelně  jako  skupinu  a  přestaví  je  tak, aby  procházela  přes jednobitovou sériovou cestu v síťovém kabelu.

- Toho se dosáhne **převedením digitálních signálů počítače na elektrické a optické signály, které mohou být přenášeny síťovými kabely** . Komponenta, který za tuto operaci odpovídá se jmenuje transceiver (transmitter/receiver - vysílač/přijímač).

# Volby konfigurace a nastavení

# Posílání a kontrola dat

- Předtím než síťová karta data skutečně pošle po síti, provede elektronický dialog s přijímací kartou, aby se obě karty dohodly na následujícím:

   - maximální velikost skupin dat, které budou posílány

   - množství dat, které bude odesláno před potvrzením

   - časové intervaly mezi odesíláním potvrzení

   - kolik dat mohou obě karty pojmout, než dojde k přeplnění

   - – rychlost přenosu dat

- Pokud  musí  komunikovat **novější** ,  rychlejší  a  vyspělejší  karta  se **starším** a pomalejším modelem, musí obě karty **najít společnou přenosovou rychlost, kterou obě zvládnou.** Obě karty pošlou té druhé signály označující její parametry a přijmou nebo se přizpůsobí parametrům karty. Po stanovení všech detailů pro komunikaci zahájí obě karty posílání a přijímání dat.

# Přerušení (IRQ)

- Síťové karty mají často konfigurovatelné volby, které je potřeba nastavit, aby síťová karta správně fungovala.

- Zahrnují například:

   - přerušení

   - bázovou adresu vstupně/výstupního portu

   - transceiver

# Sběrnice síťové karty

- Běžné síťové karty jsou dostupné v podobě integrovaných obvodů umístěných na:

   - základní desce počítače

   - kartách pro rozšiřující sběrnice

   - zařízeních schopných bezdrátového spojení

   - Rozšířené jsou také síťové karty pro přenosné počítače typu PCMCIA dnes je již přejmenován na PC Card.

   - Existují také přizpůsobení síťového adaptéru dostupné počítačové sběrnice je připojení přes USB port.

- Síťové karty se velice rychle vyvíjí. První rozšiřující síťové karty byly založené na sběrnici ISA, dnes se nejčastěji vyskytují externí karty s připojením na sběrnici PCI.

- Výkonné  síťové  karty  používají  rozhraní  PCI-X.  Jsou  zpětně kompatibilní  se sběrnici PCI, mají oproti PCI dvojnásobnou šířku sběrnice, její takt je čtyřikrát rychlejší, je možné je samostatně restartovat, přidávat či odebírat karty za běhu (důležité pro servery).

# Logická síťová rozhraní

- Síťová rozhraní mají jak fyzickou, tak i logickou povahu.

- Logické  síťové  rozhraní je  v  podstatě  softwarový modul,  který  emuluje hardwarové zařízení. **Umí přijímat i posílat data po síti.**

- Příkladem logického síťového rozhraní (virtuální rozhraní) je **adaptér zpětné smyčky** (loopback) – používá se pro testování správného fungování síťových operací, není dostupný z vnějšku systému.

- **Pro protokol IP verze 4:  127.0.0.1**

- **Pro protokol IP verze 6:  ::1**

# Fyzická adresa

- Síťovému rozhraní je **přiřazená síťová adresa systému** , poskytuje tak vstupně výstupní **prostředek pro nasměrování dat** a jejich odeslání sítí ven.

- Adresa síťového rozhraní **slouží také k rozlišení jedné síťové karty od jiné** .

- V síti typu Ethernet je fyzickou adresou **48bitové číslo zvané MAC adresa** (Media Access Control), je obsažená **v každé síťové kartě** a **přiřazují** je kartám **výrobci** při jejich výrobě a jsou **zapsány** v paměti **ROM** .

- MAC  adresa  přidělená  výrobcem  je  vždy **celosvětově jedinečná** .

- Z  hlediska přidělování je rozdělena na dvě poloviny. **O první polovinu musí výrobce požádat centrálního správce adresního prostoru a je u všech karet daného výrobce stejná**

- **Výrobce** pak  každé  vyrobené  kartě  či  zařízení **přiřazuje jedinečnou  hodnotu  druhé  poloviny  adresy** .  Jednoznačnost velmi  usnadňuje správu lokálních sítí – novou kartu lze zapojit a spolehnout se na to, že bude jednoznačně identifikována.

- Jednotlivé **8 bitové  části  MAC  adresy** jsou  obvykle  uváděny jako **dvojice hexadecimálních číslic** . **Zápis 48 bitové adresy** v binárním formátu (pomocí nul a jedniček) **je  zbytečně  dlouhý** , a proto  se  MAC  adresy  vyjadřují  pomocí hexadecimálních číslic. Vždy jedna 4 bitová část je převedena na hexadecimální číslo.

- Seznam výrobců a přidělených rozsahu MAC adres:

- http://standards.ieee.org/develop/regauth/oui/oui.txt
