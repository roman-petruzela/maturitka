---
title: "Aktivní síťové prvky, síťová karta a MAC adresa"
order: 7
source: "IT/11. Aktivní a pasivní síťové prvky.docx; site/T09_sitova_karty.pdf; site/Ethernet_new.pdf; IT/Datové-sítě.docx"
---

**Aktivní síťové prvky** jsou zařízení, která se aktivně podílejí na komunikaci: signál regenerují a zesilují, rámce a pakety přijímají, zkoumají a rozhodují, kam je poslat dál, případně je upravují. Potřebují napájení. **Jednodušší prvky** se o význam dat nestarají (opakovač, hub), **chytřejší prvky** data interpretují a podle nich přizpůsobují své chování (switch, router). Podle toho, s jakou informací pracují, je lze přiřadit k vrstvám [modelu ISO/OSI](/it/pocitacove-site/02-standardizace-model-iso-osi-a-tcp-ip/). Kabely, konektory a rozvaděče popisuje stránka [pasivní síťové prvky a kabeláž](/it/pocitacove-site/06-pasivni-sitove-prvky-a-kabelaz/).

## Přehled aktivních prvků

| Prvek | Vrstva OSI | Rozhoduje podle | Hlavní úkol |
| --- | --- | --- | --- |
| opakovač (repeater) | 1 – fyzická | – | obnoví a zesílí signál |
| rozbočovač (hub) | 1 – fyzická | – | rozešle signál na všechny porty |
| most (bridge) | 2 – linková | MAC adresy | odděluje segmenty sítě |
| přepínač (switch) | 2 – linková | MAC adresy | pošle rámec jen na port adresáta |
| směrovač (router) | 3 – síťová | IP adresy | propojuje sítě a hledá cestu |
| L3 switch | 2 a 3 | MAC i IP adresy | přepínání i směrování mezi VLAN |
| brána (gateway) | až 7 – aplikační | obsah dat | převádí mezi různými protokoly |
| přístupový bod (AP) | 1 a 2 | MAC adresy | připojuje bezdrátová zařízení do kabelové sítě |
| síťová karta (NIC) | 1 a 2 | MAC adresa | připojuje počítač k síti |
| modem | 1 | – | převádí digitální signál na analogový a zpět |

### Opakovač (repeater)

- Nejjednodušší aktivní prvek, pracuje na **fyzické vrstvě**.
- Na každém vodiči dochází k **útlumu** a **zkreslení** signálu; opakovač signál přijme, obnoví jeho tvar, zesílí a pošle dál. Tím prodlužuje dosah sítě.
- Přijatý signál přeposílá do všech připojených segmentů, nerozumí mu a nefiltruje ho.

### Rozbočovač (hub)

- V podstatě **opakovač s více porty**; počet portů je jedním z jeho parametrů. Pracuje na **fyzické vrstvě**.
- Přijatý signál zregeneruje a rozešle na **všechny ostatní porty**, na kterých je někdo připojen.
- Všechna připojená zařízení sdílejí jednu přenosovou kapacitu a tvoří jednu **kolizní doménu**; pracují jen v polovičním duplexu s metodou CSMA/CD.
- Nevýhoda: segmenty jsou zbytečně zatěžovány daty, která jim vůbec nepatří, a s počtem stanic roste počet kolizí. Dnes je nahrazen switchem.

### Most (bridge)

- Pracuje na **linkové vrstvě**, je tedy „chytřejší“ než opakovač a hub.
- Spojuje dva (nebo několik) segmentů sítě. Pokud rámec patří do stejného segmentu, odkud přišel, most ho dál nepustí – tím snižuje zatížení sítě.
- Rozhoduje podle **MAC adres**, které si ukládá do tabulky v paměti RAM.
- Každá strana mostu je samostatnou kolizní doménou; strany mohou mít i různou rychlost. Most je levnější než směrovač.

### Přepínač (switch)

- Pracuje na **linkové vrstvě**; je to v podstatě **most s mnoha porty**, který přepíná rámce v hardwaru.
- Na rozdíl od hubu propojí jen ten pár portů, mezi kterými komunikace probíhá – data se zbytečně neposílají jiným uzlům a více dvojic stanic může komunikovat současně.
- **Zpětné učení** (backward learning): switch si z **zdrojové MAC adresy** každého přijatého rámce zapamatuje, za kterým portem dané zařízení je, a ukládá to do **tabulky MAC adres** (CAM tabulky). Na začátku je tabulka prázdná, záznamy po čase (obvykle 300 s) bez provozu vypršejí.
- Přijde-li rámec pro adresu, kterou v tabulce nemá, chová se jako hub – rozešle ho na všechny porty kromě příchozího (**flooding**) a počká, až se adresát ozve. Stejně rozesílá broadcasty (cílová adresa FF-FF-FF-FF-FF-FF).
- **Každý port je samostatná kolizní doména**; při plném duplexu kolize nevznikají vůbec. Všechny porty (v jedné VLAN) ale tvoří jednu **broadcastovou doménu**.
- Způsoby přepínání: **store-and-forward** (přijme celý rámec, zkontroluje kontrolní součet a vadný zahodí), **cut-through** (začne rámec posílat hned po přečtení cílové adresy – rychlejší, ale šíří i vadné rámce).
- Spravovatelné switche umí VLAN, agregaci linek, Spanning Tree, zabezpečení portů a napájení zařízení po kabelu (**PoE**) – viz [přepínání, STP a VLAN](/it/pocitacove-site/09-prepinani-stp-a-vlan/).

### Směrovač (router)

- Pracuje na **síťové vrstvě** a propojuje **různé sítě** (podsítě) – například domácí síť s Internetem.
- Rozhoduje podle **IP adres** a **směrovací tabulky**, která obsahuje sadu pravidel, kudy pakety posílat k jednotlivým cílovým sítím. **Směrování** je proces určování cesty, kterou se data v síti dostanou k cíli; úkolem routeru je zvolit co nejefektivnější cestu.
- Router **odděluje broadcastové domény** – broadcast z jedné sítě do druhé nepustí.
- Často zajišťuje i další služby: překlad adres (NAT), DHCP server, firewall, VPN.
- Musí znát topologii sítě – buď ji zadá správce (statické směrování), nebo si ji routery vyměňují samy (dynamické směrovací protokoly). V malých sítích může jako router sloužit i obyčejný počítač.
- IP adresa rozhraní routeru do lokální sítě se v počítačích nastavuje jako **výchozí brána** (default gateway) – tam počítač posílá vše, co nepatří do jeho vlastní sítě.

Podrobně viz [směrování a routovací tabulka](/it/pocitacove-site/16-smerovani-a-routovaci-tabulka/).

### Brána (gateway)

- Propojuje sítě nebo systémy s **odlišnými protokoly** a převádí data z jednoho tvaru do druhého. Musí proto obsahu dat rozumět a pracuje až na **aplikační vrstvě**.
- Příklad: SMS brána na stránkách mobilního operátora převezme text napsaný v prohlížeči, převede ho a odešle do sítě GSM jako SMS. Dalšími příklady jsou poštovní brány nebo brány VoIP do telefonní sítě.
- Pozor na dvojí význam: „výchozí brána“ v nastavení IP je ve skutečnosti adresa **routeru**.

### Další aktivní prvky

- **Přístupový bod (access point, AP)** připojuje bezdrátová zařízení do kabelové sítě; klienti komunikují přes něj. Domácí **Wi-Fi router** spojuje v jedné krabičce router, switch (obvykle se 4 porty), přístupový bod, DHCP server a firewall.
- **Modem** převádí digitální signál na signál vhodný pro dané vedení (telefonní linka, kabelová televize, optika) a zpět.
- **L3 switch** umí kromě přepínání i směrovat mezi VLAN v hardwaru.
- **Firewall** filtruje provoz podle pravidel (adresy, porty, protokoly, stav spojení).
- **Transceiver** (vysílač-přijímač) převádí signál pro konkrétní médium, např. modul **SFP** do switche pro optický kabel.

### Kolizní a broadcastová doména

- **Kolizní doména** je část sítě, ve které se mohou srazit vysílání dvou stanic – zařízení sdílející jedno médium. Hub ji nerozděluje, switch a router ano (každý port je samostatná kolizní doména).
- **Broadcastová doména** je část sítě, do které dorazí všesměrové vysílání. Hub ani switch ji nerozdělují, router ano (a VLAN na switchi).

**Příklad.** Síť má router se dvěma porty; na jednom je switch s 8 počítači, na druhém hub se 4 počítači. Kolizních domén je 8 (porty switche s počítači) + 1 (port switche k routeru) + 1 (hub se vším, co je k němu připojeno) = 10. Broadcastové domény jsou 2 – za každým portem routeru jedna.

## Síťová karta (NIC)

**Síťové rozhraní** je hranice mezi zařízením a síťovým médiem a je **adresovatelné** – signál vyslaný po médiu míří na určité rozhraní. Typickým fyzickým síťovým rozhraním je **síťová karta** (NIC, Network Interface Card), která vznikla z potřeby sdílet data mezi počítači.

- Pracuje na **fyzické a linkové vrstvě**: na fyzické převádí bity na signál pro médium, na linkové sestavuje a kontroluje rámce, řídí přístup k médiu a rozpoznává svou MAC adresu.
- Skládá se z **hardwaru** a **firmwaru** (programu v trvalé paměti), který zajišťuje řízení logického spoje a přístupu k médiu.
- Karty se liší **typem média** (metalická, optická, bezdrátová) a **rychlostí**. Běžné jsou karty 10/100/1000 Mb/s, ve výkonných počítačích a serverech 2,5, 10, 25 Gb/s a více.

### Úkoly síťové karty

- **Připravit data z počítače pro kabel**: uvnitř počítače se data přenášejí paralelně po sběrnici, síťovým kabelem musí jít jako tok bitů. Karta převede paralelní data na sériová a digitální signály počítače na elektrické nebo optické signály. Tuto část zajišťuje **transceiver** (transmitter/receiver – vysílač/přijímač).
- **Posílat data** do jiného počítače a přijímat je.
- **Řídit tok dat** mezi počítačem a kabelovým systémem.
- **Dohodnout parametry** s protějškem: před přenosem si karty (či karta a switch) vymění informace o svých schopnostech a zvolí nejvyšší společnou rychlost a režim duplexu (**autonegotiation**). Rychlejší karta se tak přizpůsobí pomalejší.

Zpracování komunikace řídí čipová sada karty, větší část práce ale dělá procesor počítače; vytížená karta může spotřebovat značnou část jeho výkonu. Moderní karty proto umí část zpracování TCP/IP převzít samy (**TCP offloading**).

### Konstrukce a připojení

- Hlavní **čip** karty komunikuje se sběrnicí počítače. Na kartě je **EEPROM** s nastavením a MAC adresou a případně **BootROM** pro start počítače ze sítě (dnes **PXE**). Část připojená ke kabelu je od zbytku počítače **galvanicky oddělena** (oddělovacím transformátorem), aby šlo bezpečně propojit počítače napájené z různých elektrických rozvodů.
- Dnes je síťová karta obvykle **integrována na základní desce**; samostatné karty se zasouvají do slotu **PCI Express** (dříve ISA, PCI, v serverech PCI-X), do notebooků dříve jako PC Card (PCMCIA). Existují i **USB** síťové adaptéry a bezdrátové karty Wi-Fi.
- Starší karty vyžadovaly ruční nastavení **přerušení (IRQ)**, vstupně-výstupní adresy a typu transceiveru; dnes se vše nastaví automaticky (Plug and Play).
- Užitečné funkce: **Wake-on-LAN** (zapnutí počítače po síti speciálním paketem), nastavení rychlosti a duplexu, VLAN, PoE u zařízení napájených po kabelu.

### Logická síťová rozhraní

Síťová rozhraní mohou být i **logická (virtuální)** – softwarový modul, který se chová jako hardwarové zařízení a umí přijímat i posílat data. Příkladem je **zpětná smyčka (loopback)**, která slouží k testování síťového software v počítači a zvenku není dostupná: v IPv4 adresa **127.0.0.1**, v IPv6 **::1**. Další virtuální rozhraní vytvářejí VPN klienti a virtualizační programy.

## MAC adresa

**MAC adresa** (Media Access Control) je **fyzická adresa** síťového rozhraní v síti Ethernet a Wi-Fi. Slouží k rozlišení jedné síťové karty od jiné a k doručení rámce v rámci jedné lokální sítě.

- Má **48 bitů (6 bajtů)**. Zapisuje se jako šest dvojic **hexadecimálních** číslic – každá čtveřice bitů odpovídá jedné šestnáctkové číslici, takže zápis je mnohem kratší než binární. Používají se zápisy `00-1A-2B-3C-4D-5E` (Windows), `00:1a:2b:3c:4d:5e` (Linux) a `001a.2b3c.4d5e` (Cisco).
- Výrobce ji kartě přidělí při výrobě a zapíše do paměti **ROM** (EEPROM) karty. Adresa přidělená výrobcem je **celosvětově jedinečná** – novou kartu lze zapojit a spolehnout se, že bude jednoznačně identifikována.
- Adresa má dvě poloviny: první 3 bajty jsou **OUI** (Organizationally Unique Identifier) – identifikátor výrobce, který mu přidělí **IEEE** a je stejný u všech jeho karet (např. Novell `00-00-1B`, 3Com `00-20-AF`, SMC `00-40-27`). Druhé 3 bajty přiděluje výrobce každé kartě jedinečně. Seznam výrobců zveřejňuje IEEE.
- Dva nejnižší bity prvního bajtu mají zvláštní význam: bit **I/G** rozlišuje individuální (0) a skupinovou – multicastovou (1) adresu, bit **U/L** globálně jedinečnou adresu od výrobce (0) a adresu nastavenou lokálně (1).
- **Broadcastová** adresa `FF-FF-FF-FF-FF-FF` (samé jedničky) znamená „všem stanicím v síti“.
- Adresu lze v operačním systému softwarově změnit; mobilní telefony a notebooky dnes v cizích Wi-Fi sítích používají **náhodnou MAC adresu**, aby je nešlo sledovat.
- Zjištění MAC adresy: Windows `ipconfig /all` nebo `getmac`, Linux `ip link`. MAC adresy sousedů zjištěné protokolem ARP ukáže `arp -a`.

## Otázky k opakování

1. Jaký je rozdíl mezi aktivním a pasivním síťovým prvkem? ||aktivní se podílí na komunikaci (regeneruje, zpracovává, směruje) a potřebuje napájení; pasivní signál jen vede||
2. Čím se liší hub a switch? ||hub (1. vrstva) rozešle signál na všechny porty a všichni sdílejí kolizní doménu; switch (2. vrstva) podle tabulky MAC adres pošle rámec jen na port adresáta||
3. Jak se switch učí, kde jsou jednotlivá zařízení? ||ze zdrojové MAC adresy přijatých rámců si zapíše port do tabulky MAC adres; neznámé cíle rozešle všude||
4. Na které vrstvě pracuje router a podle čeho se rozhoduje? ||na síťové; podle cílové IP adresy a směrovací tabulky||
5. Kolik kolizních a broadcastových domén vytvoří switch s 24 obsazenými porty bez VLAN? ||24 kolizních domén, 1 broadcastovou||
6. Co je výchozí brána? ||IP adresa rozhraní routeru v lokální síti, na kterou počítač posílá pakety do jiných sítí||
7. Jaké úkoly plní síťová karta? ||převádí paralelní data na sériový signál pro médium a zpět, sestavuje a kontroluje rámce, řídí přístup k médiu a tok dat, vyjednává rychlost a duplex||
8. Jak je dlouhá MAC adresa a z jakých částí se skládá? ||48 bitů; první 3 bajty OUI výrobce, další 3 bajty pořadové číslo karty od výrobce||
9. Jaká je broadcastová MAC adresa a k čemu je adresa 127.0.0.1? ||FF-FF-FF-FF-FF-FF; loopback – testování síťového software uvnitř počítače||
