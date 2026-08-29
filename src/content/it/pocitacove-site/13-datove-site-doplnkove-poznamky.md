---
title: "Datové sítě – doplňkové poznámky"
order: 13
source: "MATURITA HADR/IT/Datové-sítě.docx"
---
1\) Úvod do sítí

Počítačová síť 

- Souhrnné označení pro technické prostředky, které realizují spojení a výměnu informací 
- Komunikace mezi počítači 
- Komunikace probíhá podle uspořádaného souhrnu pravidel \(__tzv\. protokol__\), zajišťují úspěšný přenos dat 
	- Detekce základního fyzického spojení 
	- Handshake \(navázání spojení\) 
	- Vyjednávání o různých parametrech spojení 
	- Jak začít a ukončit zprávu 
	- Jak formátovat zprávu 
	- Jak se chovat u ztráty dat, spojení 
	- Ukončení relace nebo spojení 

Ovlivnění 

- Vývoj komunikace značně ovlivnil lidskou rasu 
- Možnost předávání a uchovávání informací byla patřičně rozšířena 
- Dochází jak k pozitivnímu, tak ale i k negativnímu dopadu 

Historie komunikace 

- Komunikace vznikla z potřeby si předávat znalosti a informace 
- Lidé mohou komunikovat zvukem či pohybem 
- __Písmo__ – umožňuje dlouhodobě předávat informace napříč generacemi 
- Informace se předávali řečí a písmen 
- V 15\. století byl rozmach, vynález knihtisku 
- V 19\. stolení __Samuel Morse__ sestrojil první telegraf \(přenos informací __pomocí drátů\)__ 
	- První bezdrátový přenos: Morse položil kus drátu do vody, díky vodivosti se signál přenesl 
	- První bezdrátová přenos skrze atmosféru provedl __M\. Loomis__ 
	- byly vygenerovány a zachyceny první rádiové vlny 
	- První rádiový systém sestrojil G\. __Marconi__, rádio se začalo využívat v lodní dopravě 
- V 20\. století přenášel pouze telegrafické kódy, později se přenesl i lidský hlas 
- První pokus o propojení počítačů byl obranný systém SAGE \( __který pomocí počítačů koordinoval přenos dat mezi velkým množství radarů a obrannými zbraňovými systémy\.__ \), mnoho terminálů připojeno k řídícímu počítači __\(topologie hvězda\)__ 
- Spolehlivější topologie je sběrnicová \(na ní je založen Ethernet\)  

Vývoj komunikačních technologii  

- Roku 1969 __\(60\. léta \)__vznikl ARPANET – byl určen pro textovou komunikaci \(email, elektronické konference\) 
- Roku 1979  __\(70\. léta\) __ vzniká protokol TCP/IP – __jazyk pro komunikace počítačů v síti__, byl zaveden princip __nekonečného rozšiřování sítě__ 
- Roku 1984 __\(80\. léta\)__ byl zaveden DNS – umožňuje převod IP na doménu a zpět 
- Vzniká protokol FTP – pro přenos souborů 

  

Vývoj internetu 

- Internet je celosvětová počítačová síť, otevřená pro všechny, kteří jí chtějí využít 
- Díky přístupnosti nových počítačů dochází k prudkému rozvoji dálkových sítí 
- Na počátku 90\. let se internetu konečně začalo říkat internet a dostala se na něj první komerce 
- Od roku 1991 se využívají služby WWW, je spojeno a zavedeno využití protokolu http 
- Česko – tehdejší ČSFR \(Česko a Slovenská Federativní Republika\) se oficiálně __k internetu připojila 1992__ 

Základní části datové sítě 

- __Pravidla a standardy__ 
	1. Protokoly a normy 
	2. Služby sítě 
- __Přenosové médium __ 
	1. drátové,  
	2. bezdrátové 
- __Síťová zařízení__ 
	1. __Propojovací zařízení: přístupová zařízení k síti__ \(hub, switch, AP\) 
	2. Propojovací zařízení mezi sítěmi: router, komunikační servery a modemy 
	3. Bezpečnostní zařízení firewall 
- __Koncová zařízení__ 
	1. Počítač,  
	2. IP telefon,  
	3. PDA 
- __Přenášené zprávy__ \(v binárně zakódované podobě\) 

Klasifikace síťových topologií 

- __Topologie__: Vzájemné uspořádání komponent 
- Síť můžeme chápat z dvou hledisek: 
	1. __Fyzická topologie:__ 
		- Popisuje reálnou konstrukci sítě \-> Jednotlivé uzly a fyzicky zapojená zařízení a jejich umístění včetně instalovaných kabelů 
	2. __Logická topologie:__ 
		- Vztahuje se, jak jsou data v síti přenášena a kudy protékají 
		- Nemusí nutně kopírovat fyzické schéma sítě 

Běžné topologie a jejich dělení 

- __Fyzická topologie__ 
	1. Dvoubodové spoje 
		1. Kruh 
		2. Hvězda 
		3. Strom 
	2. Sdílené spoje 
		1. Sběrnice 
		2. S centrálním vysílačem 

 

Dvoubodové spoje 

- Nejjednodušší typ je permanentní spoj mezi dvěma koncovými body \(__př\. Telefonní linka\)__ 

Kruhová topologie \(ring\) 

- Každý uzel \(počítač\) je spojen s dvěma dalšími, tak aby společně vytvořili kruh 
- Přenos dat je relativně jednoduchý, nevznikají kolize a náklady jsou nižší než u hvězdy  
- Data, ale musí projít přes každý uzel mezi odesílatelem a příjemcem \-> __prodlužuje přenos__ 
- Výpadek jednoho uzlu ochromí celou síť 

Hvězdicová topologie \(star\) 

- Nejpoužívanější 
- Každý počítač je připojen pomocí kabelu k centrálnímu prvku __\(hubu nebo switchi\)__ 
- Mezi každými dvěma stanicemi existuje vždy jen jedna cesta 
- Selhání stanice neomezí provoz sítě  
- Ovšem kolaps centrálního prvku znamená kolaps pro celou síť     

Stromová topologie \(tree\) 

- Často používaná v rozsáhlých počítačových sítích 
- Vychází z hvězdicové topologie spojením aktivních síťových prvků, které jsou v centrech jednotlivých hvězd 
- V případě, že selže jeden síťový prvek, výpadek ovlivní pouze část sítě spadající pod něj 

*Sdílené spoje* 

Sběrnicová topologie \(bus\) 

- Dá se představit jako velký „kabel“ k němuž jsou navěšeny jednotlivé počítače 
- Spojení zprostředkovává jediné přenosové médium __\(sběrnice__\), ke kterému jsou připojeny všechny uzly sítě 
- Nízké pořizovací náklady 
- Rychlost přenosu je omezená a může docházet ke kolizím 
- Vhodná spíše pro malé a dočasné sítě 

  

  

Konvergence sítí 

- Proces postupného splývání dvou dosud oddělených přenosových infrastruktur 
- Spojeno s dynamickým směrováním 
- Při konvergenci směrovač __\(router\)__ získá informace o topologii sítě a rozešle je dalším směrovačům \(routerům\) a zároveň od nich obdrží jejich informace o síti 
- Jednoduše řečeno, při konvergenci se všechny routery shodnout, jak daná síťová topologie vypadá 
- Závisí na směrovacích protokolech \(např\. __RIP, OSPF__, BGP4\) 

  

Moderní síťová architektura 

- Síťová architektura popisuje fyzickou infrastrukturu sítě a použité služby a protokoly 
- Požadavky na moderní síťovou architekturu 
	1. Odolnost vůči chybovým stavům 
	2. Škálovatelnost \(snadná rozšiřitelnost v nějakém předem daném rámci, rozsahu\) 
	3. Kvalita služby \(QoS = mechanismy front a priority dat\) 
	4. Zabezpečení dat 
		1. Důvěrnost \(utajení dat, přístupné pouze s oprávněním\) 
		2. Integrita \(ověření nepozměnění dat \-> kontrolní součet, digitální podpis\) 
		3. Dostupnost \(omezení rychlosti a objemů datových přenosů, antiviry\)  

2\) Klasifikace sítí

Rozdělení sítí  

Dle typu komunikace  

- Dělí se na spojové __\(navazují spojení\)__ a nespojové __\(bez navazování spojení\)__ 

Spojové 

- Před zahájením přenosu je třeba navázat spojení  
	- Trvalé spojení \(PVC\) 
	- Dočasné spojení \(SVC\) 
- Jednotlivé uzly vytvoří virtuální kanál, prostřednictvím něhož jsou přenášená data 

 

Nespojové  

- Technologie založené na broadcastu 
- Rámec se dostane ke všem uzlům, příslušný uzel se rozhoduje, zda je adresát anebo ne 
- __Rámec__ – datová jednotka, která putuje po síti\. Obsahuje přenášená data a informace odkud kam putuje 

  

Podle signálu 

Analogová síť 

- Elektronický systém, který pracuje s analogovým signálem 
- Rozdělují se podle média, kterýma jsou přenášena __\(akustické signály, elektrické signály, optické signály\)__ 

  

Digitální síť 

- Představuje signály, které obsahují jednotlivé šířky analogové úrovně  
- Výhodou je nízká ztráta kvality, nebo snadnější ukládání informací bez degradace  
- Nevýhodou je větší spotřeba energie 

Podle úlohy prvků v síti 

Klient\-server 

- Je zde jeden počítač \(__server__\) nebo více počítačů \(__několik serverů__\) nadřazený jinému počítači \(__klientov__i\), či několika počítačům \(několika __klientům\)__ 
- Serverů může být více, podle poskytovaných služeb \(souborový server, tiskový server atd\.\) 

Peer\-to\-Peer \(P2P\) 

- Všechny počítače \(uzly\), jsou si rovny 
- Každá stanice může vyčlenit svůj prostředek \(tiskárnu, adresář\) a sdílet jej s ostatními \(je třeba se na něj připojit a případně zadat požadované heslo\) 

  

Podle rozlehlosti sítě 

 

LAN \(Local area network\) 

- Lokální síť, nebo skupina propojených lokálních sítí, které jsou pod stejnou administrativní kontrolou 
- Spojuje uzly v rámci jedné nebo několika blízkých budov \(v rámci __max\. kilometrů\)__  
- Bezdrátová LAN se nazývá WLAN 

WAN \(Wide area network\) 

- Rozsáhlá, rozlehlá síť používaná telekomunikačním operátorem nebo internetovým poskytovatelem \(ISP\) 
- Propojuje různé LAN a MAN sítě dohromady  
- Mají největší působnost \(třeba i po celém státě, kontinentu atd\.\) 

MAN \(Metropolitan area network\) 

- Metropolitní síť typu WAN  
- Propojuje lokální sítě v místní zástavbě, větší rozlehlost nežli LAN, ale menší nežli WAN 

PAN \(Personal area network\) 

- Osobní síť, velice malá počítačová síť, používá se pro propojení osobních věcí  
- Například telefon připojený k PC pomocí Bluetooth 

SAN \(Storage area network\) 

- Datová síť, která slouží k připojení zálohovacích zařízení k serveru 

  

  

Podle vlastnictví sítě 

Veřejná datová síť \(PDN\) 

- Druh veřejné telekomunikační sítě, která slouží k přenosu dat 
- Sítě se vytváří za účelem komunikace s jinými subjekty \(také připojenými k veřejné datové síti\), \(LAN\) 
- prostřednictvím veřejné datové sítě propojovaly mezi sebou své dílčí lokální sítě apod\. 
- Vlastník sítě tedy pronajímá svou přenosovou kapacitu jiným subjektům, téměř vždy však na komerčním základě\. 
- Adresa je přidělována poskytovatelem internetového připojení 

Privátní síť 

- Hodí se na místa, kde nejsou veřejné, globální adresy dostupné anebo žádoucí  
- Využívá speciální privátní IP adresy pro domácí, kancelářské a podnikové lokální sítě \(LAN\) 
- Původně to byl jako nástroj pro zpomalení vyčerpání IPv4 adres 

Virtuální privátní síť \(VPN\) 

- Umožňuje propojení několika počítačů prostřednictvím __\(veřejné\)__ nedůvěryhodné sítě 
- Lze dosáhnout stavu, kde propojené počítače spolu budou komunikovat, jako kdyby byly propojeny v rámci jedné uzavřené privátní sítě  
- Při navazování spojení je totožnost obou stran ověřena pomocí digitálních certifikátů  
- Veškerá komunikace je šifrovaná, proto je takovéto propojení bezpečné 

  

Síťová zařízení  

- Všechna zařízení, propojeny do počítačové sítě, která přijímají anebo posílají data 

Aktivní síťové prvky 

- Všechna zařízení, které slouží ke vzájemnému propojení v počítačových sítích  
- Aktivní síťový prvek nějakým způsobem aktivně působí na přenesené signály \-> různě je __zesiluje a modifikuje__ 
- Z pravidla vyžadují elektrické napájení 

Hub \(fyzická vrstva\) 

- Chová se jako opakovač 
- Pracuje na první vrstvě, kopíruje bity \(0,1\) 
- Veškerá data, která k němu přijdou z portu, zkopíruje na všechny ostatní porty, bez ohledu nato komu data náleží \(__posílá zprávu všem\)__ 

Switch \(linková vrstva\) 

- Pracuje na druhé vrstvě pracuje s MAC adresami 
- Obsahuje __switch table,__ kde jsou uložené MAC adresy počítačů \(síťová karta poskytuje unikátní adresu\) 
- Zprvu je tabulka prázdná, když dostane zprávu od PC uloží si jeho MAC adresu a postupně se učí 

Router \(síťová vrstva\) 

- Pracuje na třetí vrstvě, pracuje s IP adresou 
- Připojuje síť k jiné síti 
- Často obsahuje DHCP \- server přiděluje počítačům pomocí DHCP protokolu zejména IP adresu 

Repeater \(opakovač\) 

- Přímá __zkreslený__, zašuměný, nebo jinak poškozený __signá__l a __opravený, zesílený ho posílá dál__ 
- Umožňuje snadno zvýšit dosah média bez ztráty kvality 

Bridge \(most\) 

- Spojuje fyzicky oddělené segmenty sítě 

Gateway \(brána\) 

- Zprostředkovává komunikaci dvou odlišných typů sítě 

  

Pasivní síťové prvky 

- Především strukturovaná kabeláž, po které se přenášejí data 
- Pasivní prvky nevyžadují elektrické napětí 

Kroucená dvojlinka \(UTP – nestíněný, STP – stíněný\) 

- Nejběžnější druh kabelu v počítačových sítích 
- K připojení do PC využívá přípojky RJ\-45 
- Tvořena páry vodičů, které jsou po své délce pravidelným způsobem zkrouceny a následně jsou do sebe zakrouceny i výsledné páry 
- Jsou krouceny po párech, aby se vyrušilo elektromagnetické záření 
- Maximální doporučená délka kabelu je 100 m 
- Přenosové rychlosti: 100 Mb/s, 1 Gb/s \(dle kategorie\) 

Koaxiální kabel 

- Dnes se v lokálních sítích téměř nevyužívá 
- Nesymetrický 
- Základní pásmo: 0–150 Hz, maximální vzdálenost je ve stovkách metrů 
- Přeložené pásmo 50–750 MHz \(modulace\), vzdálenosti řádově KM 

Optické vlákno 

- Přenos vysokou rychlostí na velké vzdálenosti 
- Vysoká přenosová kapacita 
- Odolnost proti rušení, odposlechu 
- Jsou náchylné k lehčímu poškození \(ohýbání\) 
- K přenosu dat používají světlo, nejčastěji LED, laserové diody 
- Může mít problémy s disperzí \(impulsy se začnou překrývat při vyšších rychlostech\) 

  

Single mode – tenké jádro propouštějící jen jeden mód světla 

Multi mode – velké jádro propouštějící více druhů světla \(přenese více dat za stejný čas\) 

  

NOS \(Network operating systém\) 

- Síťový operační systém  
- Program, který řídí provoz sítě a poskytuje síťové služby 
- Řídí přístup k síti, její průchodnost, přidělování a sdílení zdrojů, ochranu dat apod\. 

  

Hlavní druhy: Microsoft Windows, Unix, Linux 

Nejpoužívanější typy: Windows Server, Novell, OpenSolaris \(Linux\) 

3\) Komponenty v síti a jejich funkce v síti 

  

Síťová zařízení  

- Všechna zařízení, propojeny do počítačové sítě, která přijímají anebo posílají data 

Aktivní síťové prvky 

- Všechna zařízení, které slouží ke vzájemnému propojení v počítačových sítích  
- Aktivní síťový prvek nějakým způsobem aktivně působí na přenesené signály \-> různě je __zesiluje a modifikuje__ 
- Z pravidla vyžadují elektrické napájení 

Hub \(fyzická vrstva\) 

- Chová se jako opakovač 
- Pracuje na první vrstvě, kopíruje bity \(0,1\) 
- Veškerá data, která k němu přijdou z portu, zkopíruje na všechny ostatní porty, bez ohledu nato komu data náleží \(__posílá zprávu všem\)__ 

Switch \(linková vrstva\) 

- Pracuje na druhé vrstvě pracuje s MAC adresami 
- Obsahuje __switch table,__ kde jsou uložené MAC adresy počítačů \(síťová karta poskytuje unikátní adresu\) 
- Zprvu je tabulka prázdná, když dostane zprávu od PC uloží si jeho MAC adresu a postupně se učí 

Router \(síťová vrstva\) 

- Pracuje na třetí vrstvě, pracuje s IP adresou 
- Připojuje síť k jiné síti 
- Často obsahuje DHCP \- server přiděluje počítačům pomocí DHCP protokolu zejména IP adresu 

Repeater \(opakovač\) 

- Přímá __zkreslený__, zašuměný, nebo jinak poškozený __signá__l a __opravený, zesílený ho posílá dál__ 
- Umožňuje snadno zvýšit dosah média bez ztráty kvality 

Bridge \(most\) 

- Spojuje fyzicky oddělené segmenty sítě 

Gateway \(brána\) 

- Zprostředkovává komunikaci dvou odlišných typů sítě 
- Brána propojuje dvě sítě pracující s odlišnými komunikačními protokoly\. Vykonává i funkci routeru \(směrovače\), a proto ji řadíme v posloupnosti síťových zařízení nad směrovač\. 

  

Pasivní síťové prvky 

- Především strukturovaná kabeláž, po které se přenášejí data 
- Pasivní prvky nevyžadují elektrické napětí 

Kroucená dvojlinka \(UTP – nestíněný, STP – stíněný\) 

- Nejběžnější druh kabelu v počítačových sítích 
- K připojení do PC využívá přípojky RJ\-45 
- Tvořena páry vodičů, které jsou po své délce pravidelným způsobem zkrouceny a následně jsou do sebe zakrouceny i výsledné páry 
- Jsou krouceny po párech, aby se vyrušilo elektromagnetické záření 
- Maximální doporučená délka kabelu je 100 m 
- Na rozdíl od koaxialu nemůžeme zde dělat odbočky  
- Přenosové rychlosti: 100 Mb/s, 1 Gb/s \(dle kategorie\) 

Koaxiální kabel 

- Dnes se v lokálních sítích téměř nevyužívá 
- Nesymetrický 
- Zamezuje crosstalku \(rušení více signálů\) 
- přenos elektromagnetického vlnění o vysokém kmitočtu  
- Základní pásmo: 0–150 Hz, maximální vzdálenost je ve stovkách metrů 
-  jedním válcovým vnějším vodičem a jedním drátovým nebo trubkovým vodičem vnitřním\.  
	- Vnější vodič nazýváme často stíněním  
	- vnitřní vodič jádrem\.  
	- Vnější a vnitřní vodič jsou odděleny nevodivou vrstvou \(dielektrikum\) 
- Přeložené pásmo 50–750 MHz \(modulace\), vzdálenosti řádově KM 

Optické vlákno 

- Přenos vysokou rychlostí na velké vzdálenostix;q  
- Vysoká přenosová kapacita 
- Odolnost proti rušení, odposlechu 
- Jsou náchylné k lehčímu poškození \(ohýbání\) 
- DATA = pulzy světla v tubě skla 
- K přenosu dat používají světlo, nejčastěji LED, laserové diody 
- Může mít problémy s disperzí \(impulsy se začnou překrývat při vyšších rychlostech\) 

  

Single mode – tenké jádro propouštějící jen jeden mód světla 

Multi mode – velké jádro propouštějící více druhů světla \(přenese více dat za stejný čas\) 

 

Protokol 

- Konvence nebo standart, podle kterého probíhá elektronická komunikace a přenos dat mezi dvěma koncovými body 
- Protokol definuje pravidla řídící syntaxi, sématiku a synchronizaci  

Typické vlastnosti 

- Detekce základního fyzického spojení 
- Handshake \(navázání spojení\) 
- Vyjednávání o různých parametrech spojení 
- Jak začít a ukončit zprávu 
- Jak formátovat zprávu 
- Jak se chovat u ztráty dat, spojení 
- Ukončení relace nebo spojení 

Druhy protokolů 

TCP/IP 

*IP \(Internet Protocol\)* 

- Síťová vrstva 
- Zodpovědný za směřování datagramů \(paketů\) ze zdrojového počítače k cílovému 
- Paket obsahuje řídící data \(poskytují potřebná data k doručení paketu – adresu zdroje, cíle, kódy pro detekci chyb, kontrolní součet\) 

*TCP \(Transmission Control Protocol\)* 

- Nejpoužívanější protokol transportní vrstvy 
- Dochází k vytvoření spojení, které umožňuje komunikaci 

*UDP \(User Datagram Protocol\)* 

- Umožňuje komunikaci, nenese záruku za doručení dat 
- Nemusí vytvářet spojení 

Ostatní protokoly 

*HTTP* 

- Určen pro výměnu hypertextových dokumentů ve formátu HTML 
- Funguje na způsob dotaz–odpověď  
- Uživatel pošle dotaz ve formě čistého textu \(obsahuje označení požadovaného dokumentu\)\. Server odpoví pomocí několika řádku popisující výsledek dotazu \(zda nalezl dokument, typ atd\.\) a následně posílá data požadovaného dokumentu 
- Nelze poznat, zda předchozí dotaz nějak souvisí s aktuálním dotazem 

*DHCP \(Dynamic Host Configuration Protocol\)* 

- Používá se pro automatickou konfiguraci počítačů připojených do počítačové sítě 
- Protokol automaticky přiděluje počítačům IP adresu, masku sítě, implicitní bránu a adresu DNS serveru 

*FTP \(File Transfer Protocol\)* 

- Protokol pro přenos souborů mezi počítači pomocí počítačové sítě 

*Telnet \(Teletype Network\)* 

- Umožňuje pomocí stejnojmenné aplikace připojení ke vzdálenému počítači pomocí textového uživatelského rozhraní 
- Přenesená komunikace není šifrovaná, proto je nahrazován SSH 

*SSH \(Secure Shell\)* 

- Zabezpečený komunikační protokol 
- Navržen jako náhrada za Telnet a další nebezpečné vzdálené shelly 
- Ke komunikaci se využívá příkazová řádka 

 

ISO/OSI model 

- Standardizace počítačových sítí 

 

Vrstvy ISO/OSI 

1. *Fyzická vrstva* 
	- Je Hardwarová 
	- Pracuje zde HUB a pracuje se s bity \(0,1\) 
	- Definuje prostředky pro komunikaci s přenosovým médiem 
	- Definuje fyzické, elektrické parametry týkající se fyzického propojení zařízení 
	- Navazuje a ukončuje spojení s komunikačním médiem 
	- Spolupráce na efektivním rozložení všech zdrojů mezi všechny uživatele 
	- Modulace \(konverze\) dat na signály používané přenosovým médiem a zpět __\(A/D, D/A převodníky\)__ 
2. *Linková vrstva* 
	- Je Hardwarová 
	- Pracuje zde SWITCH  
	- Data jsou z fyzické vrstvy uspořádány do logických celků 
	- __RÁMEC__ \- Obsahuje přenášená data a informace odkud kam putuje 
	- Poskytuje funkce k přenosu dat mezi jednotlivými síťovými jednotkami 
	- Detekuje případné chyby vzniklé na fyzické vrstvě 
3. *Síťová vrstva* 
	- Zajišťuje směrování a síťové adresování 
	- Poskytuje spojení mezi systémy, které spolu přímo nesousedí 
	- __Router __ 
	- __Packet__ \-  
		- Znamená balíček a jedná se o formátovaný blok dat, který se přenáší v počítačové síti 
		- Paket obsahuje IP adresu, další atributy a data 
		- Zabalí se do rámce a následně putuje sítí  
		- adresu zdroje, cíle, kódy pro detekci chyb, kontrolní součet 
4. *Transportní vrstva* 
	- Zajišťuje přenos dat mezi koncovými uzly 
	- Nabízí dva protokoly TCP \(spolehlivé\) a UDP \(nespolehlivé\) 
5. *Relační vrstva* 
	- Organizuje a synchronizuje dialog spolupracujícími relačními vrstvami obou systémů a řídí výměnu dat mezi nimi 
6. *Prezenční vrstva* 
	- Úkolem vrstvy je transformovat data do tvaru, které používají aplikace 
7. *Aplikační vrstva* 
	- Účel je poskytovat aplikacím přístup ke komunikačnímu systému a umožnit tak jejich spolupráci 

Zapouzdření v síti 

- Datová jednotka: PDU \(Protocol Data Unit\) 
- Spočívá ve vložení datové jednotky \(PDU\) vyšší vrstvy do protokolové jednotky nižší vrstvy 
- Umožňuje vyšší vrstvě používat služby nižší vrstvy v protokolovém zásobníku a zároveň, aby data vyšší vrstvy mohla být přepravena sítí k protějšku na stejné vrstvě na jiném uzlu 

  

Přidání hlavičky k PDU \(paket, rámec\) z vyšší vrstvy, vznikne na určité vrstvě nový, větší paket, který se použije pro komunikaci s programem na stejné vrstvě jiného počítače\. 

  

 

Komponenty v síti a jejich funkce v síti 

Rozdělení sítí  

Dle typu komunikace  

- Dělí se na spojové __\(navazují spojení\)__ a nespojové __\(bez navazování spojení\)__ 

Spojové 

- Před zahájením přenosu je třeba navázat spojení  
	- Trvalé spojení \(PVC\) 
	- Dočasné spojení \(SVC\) 
- Jednotlivé uzly vytvoří virtuální kanál, prostřednictvím něhož jsou přenášená data 

 

Nespojové  

- Technologie založené na broadcastu 
- Rámec se dostane ke všem uzlům, příslušný uzel se rozhoduje, zda je adresát anebo ne 
- __Rámec__ – datová jednotka, která putuje po síti\. Obsahuje přenášená data a informace odkud kam putuje 

  

Podle signálu 

Analogová síť 

- Elektronický systém, který pracuje s analogovým signálem 
- Rozdělují se podle média, kterýma jsou přenášena __\(akustické signály, elektrické signály, optické signály\)__ 

  

Digitální síť 

- Představuje signály, které obsahují jednotlivé šířky analogové úrovně  
- Výhodou je nízká ztráta kvality, nebo snadnější ukládání informací bez degradace  
- Nevýhodou je větší spotřeba energie 

Podle úlohy prvků v síti 

Klient\-server 

- Je zde jeden počítač \(__server__\) nebo více počítačů \(__několik serverů__\) nadřazený jinému počítači \(__klientov__i\), či několika počítačům \(několika __klientům\)__ 
- Serverů může být více, podle poskytovaných služeb \(souborový server, tiskový server atd\.\) 

Peer\-to\-Peer \(P2P\) 

- Všechny počítače \(uzly\), jsou si rovny 
- Každá stanice může vyčlenit svůj prostředek \(tiskárnu, adresář\) a sdílet jej s ostatními \(je třeba se na něj připojit a případně zadat požadované heslo\) 

  

Podle rozlehlosti sítě 

 

LAN \(Local area network\) 

- Lokální síť, nebo skupina propojených lokálních sítí, které jsou pod stejnou administrativní kontrolou 
- Spojuje uzly v rámci jedné nebo několika blízkých budov \(v rámci __max\. kilometrů\)__  
- Bezdrátová LAN se nazývá WLAN 

WAN \(Wide area network\) 

- Rozsáhlá, rozlehlá síť používaná telekomunikačním operátorem nebo internetovým poskytovatelem \(ISP\) 
- Propojuje různé LAN a MAN sítě dohromady  
- Mají největší působnost \(třeba i po celém státě, kontinentu atd\.\) 

MAN \(Metropolitan area network\) 

- Metropolitní síť typu WAN  
- Propojuje lokální sítě v místní zástavbě, větší rozlehlost nežli LAN, ale menší nežli WAN 

PAN \(Personal area network\) 

- Osobní síť, velice malá počítačová síť, používá se pro propojení osobních věcí  
- Například telefon připojený k PC pomocí Bluetooth 

SAN \(Storage area network\) 

- Datová síť, která slouží k připojení zálohovacích zařízení k serveru 

  

  

Podle vlastnictví sítě 

Veřejná datová síť \(PDN\) 

- Druh veřejné telekomunikační sítě, která slouží k přenosu dat 
- Sítě se vytváří za účelem komunikace s jinými subjekty \(také připojenými k veřejné datové síti\), \(LAN\) 
- prostřednictvím veřejné datové sítě propojovaly mezi sebou své dílčí lokální sítě apod\. 
- Vlastník sítě tedy pronajímá svou přenosovou kapacitu jiným subjektům, téměř vždy však na komerčním základě\. 
- Adresa je přidělována poskytovatelem internetového připojení 

Privátní síť 

- Hodí se na místa, kde nejsou veřejné, globální adresy dostupné anebo žádoucí  
- Využívá speciální privátní IP adresy pro domácí, kancelářské a podnikové lokální sítě \(LAN\) 
- Původně to byl jako nástroj pro zpomalení vyčerpání IPv4 adres 

Virtuální privátní síť \(VPN\) 

- Umožňuje propojení několika počítačů prostřednictvím __\(veřejné\)__ nedůvěryhodné sítě 
- Lze dosáhnout stavu, kde propojené počítače spolu budou komunikovat, jako kdyby byly propojeny v rámci jedné uzavřené privátní sítě  
- Při navazování spojení je totožnost obou stran ověřena pomocí digitálních certifikátů  
- Veškerá komunikace je šifrovaná, proto je takovéto propojení bezpečné 

4\) Komunikační modely, protokoly sítě 

Komunikační modely 

Klient\-server 

- Je hierarchicky organizovaná síť 
- Komunikaci vždy začíná klient, __server__ čeká na požadavek klienta 
- Procesy na serveru řídí doručení dat pro klienta 
- Aplikační protokoly pracují v komunikačním modelu klient\-server 
	- __Upload__ – umístění dat z klienta na server 
	- __Download__ – stažení dat ze serveru na klienta 
- Klient\-server se dá provozovat i v P2P sítích, pokud na jednom PC běží FTP server 

Výhody 

- Centrální správa 
- Jednotná infrastruktura 
- Komfortní poskytování síťových služeb 

Nevýhody 

- Nákladnější HW, SW 
- Je potřeba mít administrátora sítě 

P2P \(Peer to peer\) 

- Přenos dat mezi dvěma počítači tzn\. Klient – klient  
- Oba počítače jsou si rovny \(žádná hierarchie\) 
- Oba klienti zároveň vysílají a přijímají \(pracují zároveň jako klient i server\) 
- Počítače mohou sdílet zdroje \(např\. tiskárny nebo soubory\) 
- Nejznámější P2P – Torrenty 

Výhody 

- Dá se snadno vytvořit 
- Nemá centrální správu 
- Nevyžaduje administrátora 

Nevýhody 

- Neumožňuje hierarchické řízení 
- Má špatné poskytování některých síťových služeb 

  

Typy komunikace 

Unicast \(jednosměrné vysílání\) 

- Odesílá packety z jednoho hostitele do druhého hostitele 
- Téměř vždy se v počítačové komunikaci jedná o UNICAST  
- Při poslání dat více počítačům, musí hostitel poslat jeden packet pro každého cílového klienta 

Broadcast \(všesměrové vysílání\) 

- Má speciální adresu, kterou nesmí mít žádné zařízení v síti 
- Odesílá packety z jednoho hostitele do všech právě aktivních hostitelů ve svojí síti 

__*Typy broadcastu*__ 

- Directed broadcast \(Směrovatelný broadcast\) \- Určený všem hostitelům v určité nelokální sít__i \(vzdálené síti\)__ 
- Limited broadcast \(omezený broadcast\) \-  Omezen na všechny hostitele v jedné aktuální lokální síti \(všeobecná adresa 255\.255\.255\.255\) 

Multicast \(skupinové vysílání\) 

- Místo odesílání jednotlivých datagramů ke každému cíli je odeslán jediný datagram 
- Pošle jeden packet, který přijde více cílovým hostitelským počítačům 

  

Protokoly 

Význam protokolů 

- Konvence nebo standart, podle kterého probíhá elektronická komunikace a přenos dat mezi dvěma koncovými body 

Protokol definuje pravidla řídící syntaxi, sématiku a synchronizaci Typické vlastnosti 

- Detekce základního fyzického spojení 
- Handshake \(navázání spojení\) 
- Vyjednávání o různých parametrech spojení 
- Jak začít a ukončit zprávu 
- Jak formátovat zprávu 
- Jak se chovat u ztráty dat, spojení 
- Ukončení relace nebo spojení 

  

TCP/IP 

IP \(Internet Protocol\) 

- Síťová vrstva 
- Zodpovědná za směřování datagramů \(paketů\) ze zdrojového počítače k cílovému 
- Paket obsahuje řídící data \(poskytují potřebná data k doručení paketu – adresu zdroje, cíle, kódy pro detekci chyb, kontrolní součet\) 

TCP \(Transmission Control Protocol\) 

- Nejpoužívanější protokol transportní vrstvy 
- Dochází k vytvoření spojení, které umožňuje komunikaci 

UDP \(User Datagram Protocol\) 

- Umožňuje komunikaci, nenese záruku za doručení dat 
- Nemusí vytvářet spojení¨ 

Ostatní protokoly 

HTTP 

- Určen pro výměnu hypertextových dokumentů ve formátu HTML 
- Funguje na způsob dotaz–odpověď  
- Uživatel pošle dotaz ve formě čistého textu \(obsahuje označení požadovaného dokumentu\)\. Server odpoví pomocí několika řádku popisující výsledek dotazu \(zda nalezl dokument, typ atd\.\) a následně posílá data požadovaného dokumentu 
- Nelze poznat zda předchozí dotaz nějak souvisí s aktuálním dotazem 

DHCP \(Dynamic Host Configuration Protocol\) 

- Používá se pro automatickou konfiguraci počítačů připojených do počítačové sítě 
- Protokol automaticky přiděluje počítačům IP adresu, masku sítě, implicitní bránu a adresu DNS serveru 

FTP \(File Transfer Protocol\) 

- Protokol pro přenos souborů mezi počítači pomocí počítačové sítě 

Telnet \(Teletype Network\) 

- Umožňuje pomocí stejnojmenné aplikace připojení ke vzdálenému počítači pomocí příkazové řádky 
- Přenesená komunikace není šifrovaná, proto je nahrazován SSH 

SSH \(Secure Shell\) 

- Zabezpečený komunikační protokol 
- Navržen jako náhrada za Telnet a další nebezpečné vzdálené shelly 
- Ke komunikaci se využívá příkazová řádka 

 

Vrstevnaté modely 

- Definují standardy pro komunikaci v datové síti 
- Vrstvy jsou rozdělené, takže snáze pochopitelné a popsatelné celky 
- Pomáhá při vytvoření komplexních více uživatelských sítí 
- Vyšší vrstva používá služby vrstvy pod ní \(která poskytuje služby\) 
- Podporuje vzájemnou spolupráci různých výrobků 
- __Zapouzdření__ – na příslušné vrstvě se pracuje pouze se záhlavím příslušné vrstvy 
- Společná řeč pro popis sítě a snadnější pochopení a naučení komunikace v síti 

  

Porovnání TCP/IP a ISO/OSI 

 

 

Data v síti 

- V sítí může být přenášeno mnoho typů dat \(videa, hudba, zprávy atd\.\) 
- Na fyzické vrstvě jsou data pouze v podobě jedniček a nul, na vyšších vrstvách získávají specifičtější podobu 

Vrstvy, vrstevnaté modely, protokoly, historie, důvody vzniku, význam protokolů, data v síti, zapouzdřování, architektura sítí  

Zapouzdření v síti 

- Datová jednotka: PDU \(Protocol Data Unit\) 
- Spočívá ve vložení datové jednotky \(PDU\) vyšší vrstvy do protokolové jednotky nižší vrstvy 
- Umožňuje vyšší vrstvě používat služby nižší vrstvy v protokolovém zásobníku a zároveň, aby data vyšší vrstvy mohla být přepravena sítí k protějšku na stejné vrstvě na jiném uzlu 

  

Přidání hlavičky k PDU \(paket, rámec\) z vyšší vrstvy, vznikne na určité vrstvě nový, větší paket, který se použije pro komunikaci s programem na stejné vrstvě jiného počítače\. 

  

  

Paket \(packet\) 

- Znamená balíček a jedná se o formátovaný blok dat, který se přenáší v počítačové síti 
- O paketu se mluví v souvislosti se síťovou vrstvou  
- Paket obsahuje IP adresu, další atributy a data 
- Zabalí se do rámce a následně putuje sítí 

Rámec \(frame\) 

- Je to, co skutečně putuje sítí 
- Rámce vznikají až na fyzické vrstvě 

 

Architektura sítí 

- Popisuje fyzickou infrastrukturu sítě, použité služby a protokoly 

Požadavky na síťovou architekturu 

- Odolnost vůči chybám –kolapsy tras, přepojování okruhů \(u telefonů\) 
- Škálovatelnost – snadná rozšiřitelnost sítě 
- Kvalita služby \(QoS\) – mechanismus front a priorit dat – udržuje zprávy v rovnováze dle jejcih důležitosti, charakteru atd\. \(priorita důležitější komunikace\) 
- Zabezpečení dat – utajení dat a zpřístupnění oprávněným uživatelům 
- Autentizace – ověření přihlášení oprávněného uživatele 
- Autorizace – povolení konkrétních přístupových práv 
- Audit – evidence jednotlivých transakcí v síti 
- Šifrování, Firewall 
- Integrita – ověření zda data nebyla pozměněná pomocí: 
	- Kontrolní součet 
	- Digitální podpis 
- Dostupnost 
	- Omezení rychlostí a objemů datových přenosů 
	- Pravidelné updaty operačních systémů 
	- Antiviry 

 

 

Historie modelů a důvod vzniku 

*P2P \(Peer to peer\)* 

- Vznik okolo roku 1999 
- Dříve se pro přenos dat používali anonymní FTP servery 
- Okolo roku 1997 se hlavním prostředkem sdílení dat staly instantní zprávy jako je IXQ 
- Roku 1999 přišla služba Napster, která byla předchůdcem P2P sítí 

*Referenční model ISO/OSI* 

- Skládá se ze 7 vrstev a specifikuje protokoly na jednotlivých vrstvách 
- Na počátku byli různé sítě většinou nekompatibilní 
- Objevila se snaha o vytvoření jednotného standartu pro komunikaci v počítačových sítích 
- Vytvořen okolo roku 1979  
- Původně určen pro rozlehlé WAN, ale lze jej použít i pro lokální sítě 

*TCP/IP* 

- Původně měl sjednotit komunikaci v rámci ARPANET 
- Dnes je součástí prakticky všech operačních systémů 
- Je nezávislý na přenosovém médiu, určen jak WAN, tak i pro LAN 
- TCP/IP předpokládá, že na nižších vrstvách jsou pouze nespolehlivé přenosové služby 
- Zajištění spolehlivosti dělají vyšší vrstvy, a to jen při jejich vyžádání 

  

*Batch procesing \(dávkové zpracování dat\)* 

- Nějaký přístup poslal data na server, ten je začal zpracovávat  
- Zadaly se data \(velké množství\) a byly zpracovávány \(nedalo se do toho zasahovat, trvalo to\), v případě chyb, se musely data předělat a zadat znova ke zpracování 

*Izolované počítače* 

- Když se objevily PC, přestaly se využívat servery  
- Model izolovaných PC, nebyla možnost nijak mezi nimi spolupracovat, nemohli si mezi sebou vyměňovat data, mohli je pouze zpracovávat 
- Přidal se SERVER, aby se mohli data přeposílat – vznik KLIENT\-SERVER 

*Klient\-Server* 

- Více druhů, zda klient měl svojí vlastní stranu, nebo si bral od serveru 
- Server – poskytuje služby  

 

5\) ISO / OSI 

 

 

  

  

 

 

 

 

Popis vrstev 

__Název vrstvy, popis__ 

__PDU__ 

__Adresace__ 

__Aktivní prvek__ 

__7\. Application \(Aplikační\)__ \- Uživatelské rozhraní, vstup dat od uživatele, koncová komunikace __\(end\-to\-end\)__ mezi uživateli\. 

Data 

  

SW: Gateway 

__6\. Presentation \(Prezentační\)__ \- Reprezentace dat ze služeb aplikační vrstvy, překlad \(kódování\) dat mezi dvěma systémy, komprese, dekomprese, šifrování\. 

Data 

  

SW 

__5\. Session \(Relační\)__ \- Udržuje spojení – relaci mezi aplikacemi, dokud je to potřebné, provede ukončení spojení, zabezpečování, přihlašování a správné funkce\. 

Data 

  

SW 

__4\. Transport \(Transportní\)__ \- Služby pro přenos segmentu a opětovné složení zprávy\. Zajištuje spolehlivé \(= bezchybné\) doručení dat pro jednotlivé komunikace koncových zdrojových a cílových aplikací\. Koncová komunikace __\(end\-to\-end\) mezi aplikacemi, procesy \(koncovými systémy\)__\. 

Segment 

Port 

SW 

__3\. Network \(Síťová\)__ \- Doručení dat mezi sítovými koncovými zařízeními\. Vyhledávání nejlepší cesty ze zdrojové do cílové sítě = směrování\. \(Převádí logickou IP počítače na fyzickou adresu síťové karty MAC pomocí protokolu ARP\) 

Paket 

IP logická adresa 

SW Router 

__2\. Data Link \(Spojová, Linková\)__ \- Řídí přístup ke sdílenému přenosovému médiu – výměna dat v rámci sousedních zdrojových a cílových počítačů \(v jedné sítí LAN\)\. Má dvě pod vrstvy: 

- horní Logical Link Control \(LLC\) 
- spodní Media Access Control \(MAC\) 

Frame 

MAC fyzická adresa 

SW \+ HW: 

Bridge, Switch, NIC 

__1\. Physical \(Fyzická\)__ \- Popisuje elektrické nebo optické __signály__ a postupy používané pro komunikaci mezi koncovými zařízeními \(__popisuje fyzickou linku__: médium, konektory, přenosové rychlosti\)\. 

Bity 

  

HW: Hub, Repeater 

  

  

  

Funkce jednotlivých vrstev  

1. Fyzická vrstva 
	- Je Hardwarová 
	- Pracuje zde HUB a pracuje se __s bity__ 
	- Definuje prostředky pro komunikaci s přenosovým médiem \(Optika / Ethernet \(UTP/STP\),koaxial…\.\) 
	- Definuje fyzické, elektrické parametry týkající se fyzického propojení zařízení 
	- Navazuje a ukončuje spojení s komunikačním médiem 
	- Spolupráce na efektivním rozložení všech zdrojů mezi všechny uživatele 
	- Modulace \(konverze\) dat na signály používané přenosovým médiem a zpět \(A/D, D/A převodníky\) 
2. Linková vrstva 
	- Je Hardwarová 
	- Pracuje zde SWITCH a pracuje __se s Rámci__ 
	- Data jsou z fyzické vrstvy uspořádány do logických celků \(rámce\) 
	- Poskytuje funkce k přenosu dat mezi jednotlivými síťovými jednotkami 
	- Detekuje případné chyby vzniklé na fyzické vrstvě 
3. Síťová vrstva 
	- Zajišťuje směrování a síťové adresování 
	- Poskytuje spojení mezi systémy, které spolu přímo nesousedí 
	-  \(Převádí logickou IP počítače na fyzickou adresu síťové karty MAC pomocí protokolu ARP\) 
4. Transportní vrstva 
	- Zajišťuje přenos dat mezi koncovými uzly 
	- Nabízí dva protokoly TCP \(spolehlivé\) a UDP \(nespolehlivé\) 
	- přenos segmentu a opětovné složení zprávy\. 
5. Relační vrstva 
	- Organizuje a synchronizuje dialog spolupracujícími relačními vrstvami obou systémů a řídí výměnu dat mezi nimi 
	- Udržuje spojení – relaci mezi aplikacemi, dokud je to potřebné, provede ukončení spojení, zabezpečování, přihlašování a správné funkce\. 
6. Prezenční vrstva 
	- Úkolem vrstvy je transformovat data do tvaru, které používají aplikace 
	- Reprezentace dat ze služeb aplikační vrstvy, překlad \(kódování\) dat mezi dvěma systémy, komprese, dekomprese, šifrování\. 
7. Aplikační vrstva 
	- Účel je poskytovat aplikacím přístup ke komunikačnímu systému a umožnit tak jejich spolupráci 
	-  Uživatelské rozhraní, vstup dat od uživatele, koncová komunikace __\(end\-to\-end\)__ mezi uživateli\. 

 

Princip zapouzdření 

- Aplikační data jsou segmentována a postupně na nižších vrstvách zapouzdřována\. Na jednotlivých vrstvách jsou k datům z předchozí vyšší vrstvy přidávaná záhlaví \(hlavičky\) jednotlivých konkrétních vrstev příslušných PDU  
- Postupnost datových jednotek PDU 

  

__Aplikační data \-> segment \-> paket \-> rámec \-> bit \(už není samostatné PDU\)__ 

__ __ 

- Data \(jednotlivé bity\) jsou potom přenášena v binární podobě přenosovým médiem \(kanálem\) a v druhém systému jsou postupně opouzdřována \(decapsulatiion\) \(hlavičky jsou odstraněny\) 

__Bit \-> rámec \-> paket \-> segment \-> aplikační data__ 

  

  

  

Proces zapouzdření a odpouzdřování  

  

  

Význam adres na jednotlivých vrstvách 

- Při procesu zapouzdřování jsou vždy přidávány hlavičky specifické pro konkrétní vrstvu 
- Obsahuje vždy minimálně zdrojovou a cílovou adresu specifickou pro danou vrstvu 

Zdrojové a cílové číslo portu 

- Určuje zdrojový a cílový proces na konkrétním koncovém zařízení v síti  
- Slouží k rozlišení konkrétní komunikace mezi klientem a serverem příslušné síťové služby \(Transportní vrstva\) 

Zdrojová a cílová \(logická\) IP adresa  

- Určuje zdrojové a cílové koncové zařízení ve zdrojové a cílové IP síti 
- Slouží k vyhledávání nejlepší cesty ze zdrojové do cílové sítě \(směrování\) 
- Cesta může vést přes velký počet jiných vzájemně propojených sítí \(Síťová, Internetová vrstva\) 

Zdrojová a cílová \(fyzická\) MAC adresa 

- Linková vrstva, vrstva síťového přístupu 
- Určuje zdrojové a cílové síťové zařízení v jedné lokální síti \(LAN\)  
- V odpovědi na zprávu se potom vždy původní zdrojová a cílová adresa vzájemně zamění 

  

  

  

Funkce jednotlivých vrstev, porovnání modelů, popis protokolů, služeb, princip zapouzdřování – změna PDU  

PDU \(Protocol Data Unit\) 

- Informace přenášená jako jeden celek mezi entitami, obvykle obsahuje řídící informace \(jako adresy\) a uživatelská data 

PDU v protokolech OSI 

*PDU 1 vrstvy \(fyzické\)* 

- Je fyzický paket, sestavený z bitů nebo obecněji symbolů \(stream\) 

*PDU 2 vrstvy \(linkové\)* 

- Rámec 

*PDU 3 vrstvy \(síťové\)* 

- Paket 

*PDU 4 \(transportní\)* 

- Je TCP segment nebo UDP datagram 

*PDU 5\-6\-7 vrstvy \(aplikační\)* 

- Je zpráva 

6\) Fyzická vrstva  

- První vrstva referenčního ISO/OSI modelu 
- Je realizována hardwarem 

Zařízení ve vrstvě 

- Nejstarší modemy\(modulatory \- převod D/A , A/D \+ přípojka pro více zařízení\) huby, opakovače \(repeater\), síťové adaptéry  

Význam vrstvy 

- Poskytuje standardizované rozhraní fyzickému přenosovému médiu \(__Kabely__\) 
- Mechanické specifikace elektrických konektorů a kabelů \(například délka kabelu\) 
- Modulace, zpracování signálu atd\. __A/D a D/A převody __ 
- Poskytuje prostředky pro přenos jednotlivých bitů rámců přes přenosné síťové médium __\(kabely\)__ 
- Přijímá kompletní rámce ze spojové vrstvy a zakóduje je do série signálů, které jsou přenášeny na lokálním médiu  
- Zakódované bity na médium \(signály\), ze kterých se skládají rámce jsou přijaty koncovým zařízením nebo propojovacím zařízením 
- Zajišťuje převod proudu bitů na signál a opačný převod ze signálů na proud bitů 

Účel vrstvy 

- Vytvoření elektrických, optických či mikrovlnných signálů, které reprezentují jednotlivé bity každého vysílaného rámce 
- Může provádět aktivaci, udržování a rušeni fyzického spojení 

Účel protokolů fyzické vrstvy 

- Stanovují elektrické vlastnosti rozhraní __\(napěťové úrovně, průběhy, kmitočty, modulace, rychlosti, elektrické vlastnosti kabelů\)__ 
- Stanovují mechanické vlastnosti __\(tvary, velikosti a zapojení konektorů\)__ 

Pro doručení rámců, __lokální médium__ vyžaduje tyto prvky fyzické vrstvy: 

- Fyzická média a konektory __\(UTP \+ RJ45\)__ 
- Reprezentace bitů na médiu 
- Kódování dat a řídících informací 
- Vysílací a příjímací obvody v síťových zařízeních 

Formy přenosného média a jejich signály 

- __Měděné kabel__y – elektrické signály 
- __Optické kabely__ – světelné plusy 
- __Bezdrátové__ – mikrovlnné signály __\(Modulace: amplitudová \(AM, frekvenční \(FM\), fázová \(PM\)\)__ 

Tři základní funkce fyzické vrstvy 

- Poskytuje fyzické komponenty – média, konektory 
- Provádí kódování signálu 
- Vyjadřuje jednotlivé bity jako signál 

  

  

Druhy přenosů 

Asynchronní přenos 

- Okamžiky přechodu mezi jednotlivými bity nejsou stejné – __chybí jakákoliv synchronizace__ 
- Začátek a konec intervalu musí být jednoznačně určen 

Arytmický přenos 

- Jednotlivé znaky se přenášejí asynchronně, avšak jednotlivé bity uvnitř znaku jsou přenášeny synchronně 
- Znakově orientovaný přenos 
- Přenosu chybí rytmus – časové prodlevy mezi jednotlivými znaky mohou být libovolné 
- Obsahuje tzv\. Start bity – začátek znaku 

Synchronní přenos 

- Zabezpečuje přenos dat konstantní rychlostí, data jsou vysílána nepřetržitě 
- Přenosová rychlost musí být volena s ohledem na nejpomalejší zařízení na straně přijímače dat 
- Přenáší se celé bloky dat 
- Synchronizace se udržuje po celou dobu přenosu souvislého bloku dat 

Udržování synchronizace 

- Samostatným časovacím signálem 
- Odvozením časování od dat – hodiny příjemce seřízeny dle přicházejících dat 
- Sloučením časování a dat – nejčastěji pomocí kódování 

Kódování \(encoding\) 

- Rámec bitů je zpracován do předdefinovaného binárního kódování \(Manchester\) 

Zpracování signálů \(signaling\) 

- Reprezentace bitů 0 a 1 na fyzickém médiu dle standardů fyzické vrstvy 

Reprezentace bitového signálu 

- Amplituda, frekvence, fáze 

Příklad signalizace:  

 

Veličiny popisující přenos dat 

Jednotky přenosu 

- Bps \(bity za sekundu\), kbps, Mbps, Gbps, Tbps 

Měření přenosu dat 

*Bandwidth* 

- Množství informací, které je schopné přenést za 1 sekundu 
- Jednotkou je bps \(b/s, bit za sekundu\) 

*Throughput \(propustnost\)* 

- Aktuální propustnost dat za jednotku času 
- Platí, že Throughput < Bandwidth 

Ovlivňují faktory Throughputu 

- Aktuální provoz na síti 
- Typ provozu 
- Počet připojených koncových stanic 

*Goodput* 

- Množství aplikačních dat, přenesených za 1 sekundu 

 

Pásma 

Základní pásmo 

- Frekvenční pásmo začíná blízko frekvence 0 Hz 

Přeložené pásmo 

- Používá se harmonický signál \(sinusovka\) 
- Má podstatně menší zkreslení 
- Využívá se modulace, která ovlivňuje: 
	- Amplitudu – optické sítě     
	- Kmitočet – metalické sítě 
	- Fázi – metalické sítě 

Strukturovaná kabeláž 

- Obecné označení metalických a optických prvků, které umožňují propojení jednotlivých uživatelů v rámci počítačové sítě, univerzální systém, který: 
	- Podporuje přenos digitálních i analogových signálů 
	- Přípojné body se instalují i tam, kde momentálně nejsou potřeba \(Aby se v budoucnu nemuselo vrtat a umisťovat kabely na nepřizpůsobivá místa\) 
	- Používá datové kabely se čtyřmi kroucenými páry a optické kabely 
	- U kterého se předpokládá dlouhá technická i morální životnost 

  

 

Komponenty strukturované kabeláže 

*Telekomunikační zásuvky* 

- Slouží k zapojení koncových zařízení – počítač, laptop, telefon, voip telefon atd\. 
- Mívá 2 vstupy, jeden pro připojení počítače a druhý telefonu 

*Patch panely* 

- Jsou umístěny v rozvaděčích telekomunikační místnosti a nejsou tedy pro běžné uživatele přístupné 
- Slouží správci sítě k připojení jednotlivých uživatelů do aktivních zařízení \(switche, telefonní ústředny\) 

*Horizontální kabely* 

- Kabely, které vzájemně propojují telekomunikační zásuvky a patch panely 

*Patch kabely* 

- Propojovací kabely, umožňují připojení uživatelských zařízení do počítačové sítě na straně telekomunikačních zásuvek a připojení jednotlivých portů patch panelů do aktivních zařízení na straně rozvaděče 

7\) Linková vrstva

Význam vrstvy 

- Druhá vrstva referenčního ISO/OSI modelu 
- Zajišťuje komunikaci v rámci lokální sítě 
- Zajišťuje komunikaci mezi dvěma nebo více uzly propojenými tímtéž datovým spojem 
	- __Dvoubodový spo__j __\(sériová linka\)__ 
	- __Mnohonásobný spoj__ __\(lokální sítě\)__ 
	- Specifický je __point\-to\-multipoint –__ jedna řídící stanice komunikuje s větším počtem podřízených stanic 
- Poskytuje různé služby s různými vlastnostmi:  
	- Spolehlivou nebo nespolehlivou komunikaci 
	- Spojovanou nebo nespojovanou  

Funkce vrstvy 

- Vytváří z informací od vyšší vrstva rámec, které opatřuje fyzickou adresou \(MAC adresou\) a předává fyzické vrstvě pro jejich odeslání 
- U přijatých rámců kontroluje adresu a kontrolní součet 
- Rámce, které nejsou určeny aktuálním uzlům a chybné rámce zahazuje, případně zajišťuje jejich opakovaný přenos 
- Seřazuje přijaté rámce a zajišťuje jejich demultiplexování  __\(extrahování jednotlivých dat z toku\)__ 

Zařízení linkové vrstvy 

- Pracují zde bridge a switche 

Přenos dat PDU 

- Na rozdíl od jiných PDU rámec spojové vrstvy obsahuje: 
	- __Data__ – paket ze síťové vrstvy 
	- __Záhlaví__ – obsahuje řídící informace \(adresace atd\.\) 
	- __Zápatí__ – obsahuje kontrolní informace přidané na konec PDU 

  

Hlavička 

- Obsahuje řídící informace požadované daným protokolem linkové vrstvy 
- Skládá se z: 
	- __Start frame__ – označuje začátek rámce __\(speciální kombinace 0 a 1\)__ 
	- Fyzické MAC adresy příjemce a odesilatele 
	- __Priorita \(QoS\)__ – může označovat druh komunikace \(data, hlasová\) 
	- __Type__ – identifikuje jaký protokol vyšší vrstvy je obsažen v rámci 

 

   

Zápatí 

- Obsahuje kontrolní součet, který umožňuje zjistit, zda při přenosu rámce nedošlo k chybě 
- Odesílatel vypočítá kontrolní součet CRC a ten uloží do hodnoty FCS 
- Příjemce vypočítá také CRC a pokud souhlasí s přijatým je zpráva považována za správně přenesou 
- Pokud CRC nesouhlasí, rámec je zahozen a protokol linkové vrstvy může rozhodnout, zda má být chyba korigována 

  

   

Význam podvrstev MAC a LLC 

MAC \(Media Acces Control\) 

- Nižší, hardwarově závislá podvrstva linkové vrstvy 
- Zavádí adresaci rámců \(MAC adresa\) 
- Umožňuje adresování a kontrolní mechanismus, který je zapotřebí pro přístup ke kanálům 
- Zajišťuje 
	- Fyzické adresování 
	- Řízení přístupu k médiu 
- Poskytuje fyzickou adresaci rámce a vymezuje data \(označuje začátek a konec dat\) 

MAC rámec 

- Podvrstva MAC shromažďuje data z vyšší vrstvy podvrstvy LLC a zapouzdřuje je do MAC rámce 
- U příchozích dat provádí opačný proces – „vybalení“ dat z rámce a kontrolu chyb 

LLC \(Logical Link Control\) 

- Vyšší, hardwarově nezávislá podvrstva linkové vrstvy 
- Realizováno softwarově – ovladačem síťové karty 
- Identifikuje v rámci, který protokol síťové vrstvy bude pro tento rámec použit 
- Podporuje sdílení nižších vrstev různými síťovými vrstvami 
- Obsahuje řízení datového toku  
- Zajišťuje: 
	- __Multiplexování protokolů__ předávaných MAC vrstvě \(při vysílání\) a demultiplexování \(při příjmu\) 
	- Řízení toku dat 
- Zabezpečení proti chybám 
- Připojení k vyšším vrstvám 
- Zapouzdření paketů ze síťové vrstvy do rámců 
- Identifikaci protokolu síťové vrstvy 

Multiplexing  

- Proces, při kterém je více analogových nebo digitálních signálů datových toků kombinováno do jednoho signálu 
- Cílem je využít co nejefektivněji dané přenosové médium 

  

Řízení toku dat 

- Pomocí tzv\. zpětné vazby s automatickým opakováním ARQ \(Automatic Repeat\-reQuest\) metodami: 
	- __Jednotlivé potvrzení \(Stop&Wait\)__ – každý paket je kontrolován a doručován ve správném pořadí 

  

-
	- __Kontinuální potvrzení s návratem \(Go\-Back\-N\)__ – Odesílá všechny rámce nehledě na to, zda dostal odpověď\. Odpovědi dostává zpětně, ale reaguje na ně až po odesílání rámců\. V případě ztráty rámce vše posílá znova\. 

  

-
	- __Kontinuální potvrzování se selektivním opakováním \(Selective Repeat\)__ – Data se odesílají bez čekaní na potvrzení\. Příjemce informuje odesílatele, které rámce chybí a odesílatel posílá znova jen chybějící rámce\. Rámce příjemce přijímá mimo pořadí a skládá je dohromady 

  

  

Přístupové metody 

- Řízení přístupu k přenosovému médiu – regulace umisťování datových rámců na přenosové médium 
- Metoda řízení přístupu k médiu závisí na: 
	- __Sdílení média__ – Pokud a jak sdílí medium 
	- __Topologii__ – Jak se spojení mezi uzly jeví na spojové vrstvě => \(logická topologie\) 

Přístupové metody ke sdílenému médiu 

- V některých síťových topologiích může být medium sdíleno více uzly 
- V jedné chvíli může být více uzlů pokoušející se vysílat a přijímat data prostřednictvím média 
- Dvě základní metody řízení přístupu ke sdílenému mediu: 
	- Řízený přístup \(deterministická\) – každý uzel má svůj čas přístupu k médiu 
	- Konkurenční přístup \(nedeterministická\) – všechny uzle soutěží o použití média 

Přístupové metody ke nesdílenému médiu 

- Není třeba řízení přístupu 
- Nastává v případě topologie point\-to\-point \(v tomto případě jsou k médiu připojeny pouze dva uzly\) 

  

Half Duplex 

- Obě zařízení mohou buď vysílat anebo přijímat data, ale nikoliv ve stejné chvíli 
- Rámec může být vysílat až po skončení vysílání z druhé stanice 
- Technologie Ethernet má vytvořena pravidla \(přístupová metoda CSMA/CD\) pro řešení konfliktů, vyplývajících z pokusů více než jedné stanice vysílat ve stejný čas 

Full Duplex 

- Obě zařízení mohou zároveň vysílat a přijímat data 
- Není nutné žádné vyjednávání o médiu 
- Lze použít pouze na přepínači, a nikoliv na rozbočovači 
- Při zapnutí full duplexu se vynutí vypnutí přístupové metody \(CSMA/CD\) na síťové kartě 

8\) Síťová vrstva

Význam vrstvy 

- Jedná se o třetí vrstvu referenčního ISO/OSI modelu 
- Stará se o směrování \( __RIP1, RIP 2, EIGRP, OSPF__\) v síti a síťové adresování 
- Poskytuje spojení mezi systémy, které spolu přímo nesousedí  
- Zajišťuje adresaci v rámci síťového prostředí s více fyzickými segmenty 

Funkce vrstvy 

- Používá nejlepší cestu z jedné sítě do druhé podle konfigurací cest, nebo routovacích protokolů \(RIP\) 
- Protokol IP využívá mechanismu zvaného ARP 

 

__Datagram –__ základní jednotka, která je přepravována v počítačové síti s přepojovaním paketů, kde není zajištěno jejich doručení, zachování pořadí a ani eliminace duplicity 

Adresování 

- Každý host má jedinečnou adresu 
- Bývá obvykle přiřazena z hierarchického systému 
- Na internetu jsou adresy známé jako IP adresy 

Přeposílání zpráv 

- Sítě využívají k předávání paketů mezi sítěmi různá zařízení \(gateway, router\) 

  

Popis protokolů 

IP \(Internet Protocol\) 

- Protokol síťové vrstvy modelu TCP/IP, který zajišťuje adresovací schéma celé sítě \(např\. Internet\) přenosem datagramů [\[1\]](file:///D:\kondy\Documents\school_4.itb\Maturita\Kubis\POS\8)%20Síťová%20vrstva.docx#_ftn1) bez potvrzení 
- Je to datově orientovaný protokol, používá se v sítích s přepojováním paketů \(Ethernet\) 
- Nezaručuje doručení datagramů ani neovlivňuje jejich doručení, nezajišťuje detekci ani opravu chyb  
- O potvrzení přijetí datagramu se starají jiné, vyšší vrstvy modelu 
-   

IPv4 \(Internet Protocol Version 4\) 

- Čtvrtá revize IP a zároveň verze, která se velmi rozšířila 
- Vytváří základ pro komunikaci v rámci sítě Internet 
- Adresní prostor je omezený, dnes již nestačí – teoreticky je \[Rovnice\]﷐2﷮32﷯

232

\(4 miliardy adres\), ale prakticky je jich méně, kvůli sdružování adres \(kvůli snadnějšímu směrování do podsítí\) 

- IPv4 také nevyhovují kvůli nárůstu přenosových rychlostí 
- 32 bitů 
- __Používá CIDR__ \(Classes Inter\-Domain Routing\) – slouží k rozdělení velkých sítí na podsítě 

Struktura IPv4 

- __Version__ – verze protokolu 
- __Internet Header Lenght__ – délka hlavičky \(počet 32 bitových slov, max 15\) 
- __Type of Service \(TOS\)__ – typ služby pro QoS \(kvalita\) – priority, zpoždění, spolehlivost, cena 
- __Identification__ – odkaz na původní paket před fragmentací  
- __Flag \(příznaky\)__ – zda je paket fragmentován  
- __TTL \(Time To Live\)__ – životnost \(počet přeskoků, počet směrovačů na cestě\) 
- __Protokol__ – číslo protokolu \(zapouzdřený protokol vyšší vrstvy\) – EIGRP 88, OSPF 99 
- __Checksum__ – kontrolní součet hlavičky 
- __Zdrojová a cílová adresa__ 
- __Options__ – volby \(zabezpečení atd\.\) 
- __Padding__ – výplň \(dorovnání do 32 bitů\) 

  

IPv6 \(Internet Protocol Version 6\) 

- Nástupce IPv4 
- Masivní rozšíření adresového prostoru \(\[Rovnice\]﷐10﷮28﷯

1028

adres\) 

- 128 bitů 
- Zdokonalená schopnost přenášet vysokorychlostně data 

ICMP \(Internet Control Message Protocol\) 

- Jeden z nejdůležitějších protokolů  
- Využívá se pro odesílání chybových zpráv \(nedostupnost služby, nedosažitelnost routeru\) 
- Pracuje na síťové vrstvě a je přímo zapouzdřen v IP paketu 
- Zprávy ICMP používá například příkaz Ping, nebo Tracert  

*Obsah ICMP* 

- __Code__ – Návratový kód zprávy 
- __Checksum__ – Kontrolní součet pouze pro záhlaví 
- __Type__ – typ zprávy  
	- Type 8 – žádost o odpověď  
	- Type 0 – odpověď na žádost  
	- Type 3 – cíl je nedostupný  

ARP \(Address Resolution Protocol\) 

- Data v rámci lokální vrstvy se přesouvají na úrovni druhé vrstvy 
- Při připojení se IP adresa musí převést na MAC adresu pomocí ARP protokolu 
	- Klient vydá žádost \(ARP request\) jako broadcast a počítač s požadovanou IP adresou jako unicast zašle zpět svojí MAC adresu 

  

-  

RAPR \(Reverse Address Resolution Protocol\) 

- Využívá se k získání vlastní IP adresy z MAC adresy 
- Umožňuje centrální správu adres 

*Funkce RAPR* 

- Vysílající vyšle RAPR dotaz \(RAPR request\) obsahující vlastní MAC adresu\. Dotaz \(broadcast\) se posílá všem PC v dané fyzické síti\. V ní by se měl nalézat RARP server \(obsahuje IP adresy příslušející MAC adresám\), pokud nalezne MAC adresu tazatele, pošle mu zpět RAPR odpověď \(RAPR reply\) s IP adresou, kterou si má nastavit 

*Nevýhody* 

- Dotaz se posílá na fyzickou \(MAC\) broadcastovou adresu, nepřekročí tedy hranice fyzické sítě\. Nelze tedy mít v rozsáhlejší síti složené z několika podsítí jeden společný RAPR serveru 
- Předává pouze IP adresu\. Stanice však ke svému síťovému životu potřebuje více informací \(masku podsítě, implicitní bránu, adresu DNS serveru\)\. Tyto informace nelze přenášet prostřednictvím RAPR serveru 

9\) Transportní vrstva

Význam vrstvy 

- Umožňuje paralelní \(vícenásobnou\) komunikace zařízení v síti 
- Segmentuje zprávy 
- Může provádět detekci chyb 
- Jedná se o čtvrtou vrstvu referenčního ISO/OSI modelu  

Headers 

- __UDP header: 8 bytes__ 
- __TCP header: 20 bytes__ 

Transportní vrstva 

- Přidává záhlaví pro správné doručení dat konkrétnímu procesu v síti 
- Segmentuje zprávy __\(Aplikační data\) \- pro snazší přenos a komunikaci __ 
- Řídí opětovné složení zprávy  
- Využívá dva transportní protokoly TCP a UDP 
- Vytváří na PC přes 65 000 portů \(per 1 connection\) 
- Porty jsou rezervovány aplikacemi \(může rezervovat více než 1 port\) 

Zajišťuje 

- Sledování jednotlivých komunikací mezi aplikacemi na zdrojové a cílové stanici \(multiplexing\) 
- Identifikace různých aplikací \(dle čísel portů\) 

Postup  

- Zpráva se zabalí do segmentu 
- __Segmen__t = Obsahuje zdrojový port a cílový port 
- Zpráva se pošle do síťové vrstvy \-> znovu do transportní \(u daného zařízení\) \-> rozbalí se a pošle na daný port 

UDP 

- Package size je menší a to o 60% 
- Není nutno vytvářet spojení  
- Data dorazí v různém pořadí, ne tak jak byla odeslána 
- Kontrola pomocí 16\-bit checksum \(pokud je segment poškozen \-> je zničen\) a nebo je označen jako poškozen 
- Packet je poslán vždy pouze 1 
- Checksum je povinný u IPv6 \(když u IPv4 není, je 0\) 

Využití 

- Videa, záznamy z kamer, telefony 
- Všude, kde je třeba vyšší rychlost 

Výhody 

- Vysoká rychlost 
- Jednodušší implementace 

Nevýhody 

- Packet je poslán vždy, nehledě na vytíženost sítě 
- Pokud je packet poškozen, není poslán znova 
- __Source port:__ Zdrojový port, pokud proces nepodporuje zdrojový port, může být 0 
- __Destination port__: Určuje cílový port, kam budou data doručená 
- __Length__: vyjadřuje délku UDP hlavičky a dat 
- __Checksum__: kontrolní součet, pokud není povinný je 0 \(povinný pouze u IPv6\) 

  

TCP 

- Spojově orientovaný, je nutno vytvořit spojení 
- Tak zvané trojité podání ruky 
	1. Nabídka o spojení 
	2. Přijetí nabídky 
	3. Acknowledge packet, k navázání spojení \(potvrdí navázání spojení\) 
- Spolehlivé doručení zprávy, po přijetí vrátí zprávu o doručení, pokud zpráva nedojde do X sekund, odesílatel pošle data znova 
- Skládání dat do správného pořadí \(při odeslání jsou označena indexem\) 
- Řízení toku dat, pokud je síť zatížena, počká a data odešla později 
- Checksum, povinný jak i IPv4 tak i IPv6 

Využití 

- Maily, insta messaging 
- A kdekoliv, kde nesmí dojít ke ztrátě dat 

Výhody 

- Spolehlivé 
- Zajistí správné doručení  

Nevýhody 

- Velká režie \(overhead\) 
- Menší rychlost 
- Velka hlavička 

Spolehlivost zajišťuje 

- Sekvenční, pořadová čísla \(SWQ\) a jejich synchronizace 
- Potvrzení doručení __\(čísla potvrzení – ACK\)__ 
- Znovu odesílá nepotvrzená data 
- Mechanismus posuvného okna \(sliding window\) 

  

- __Source port__ – port procesu generujícího datagram, 
- __Destination port__ – určuje kterému procesu na cílovém uzlu jsou data určena, 
- __Sequence Number__ – sekvenční číslo prvního datového oktetu v segmentu \(pokud není nastaven příznak SYN\), 
- Pokud je nastaven příznak SYN, jedná se o tzv\. initial sequence number – ISN a první datový oktet má číslo ISN \+ 1, 
- __Acknowledgement Number__ – má význam pouze, když je nastaven kontrolní bit ACK\. Toto číslo je nastaveno na hodnotu, kterou odesílatel očekává v poli Sequence Number v následujícím paketu\. Je\-li ustaveno spojení, je toto číslo vždy posíláno, 
- __Data Offset__ – specifikuje číslo vyjádřené 32bitovým slovem\. Indikuje, kde data v segmentu začínají data přenášená tímto datagramem, 
- __Reserved__ – toto 6ti bitové pole je rezervované a mělo by vždy být nulové, 
- __Control Bits__ – kontrolní bity \(příznaky\) zajišťující "handshaking" a ostatní specifické procesy: 
	- URG – Urgent Pointer, 
	- ACK – Acknowledgement, 
	- PSH – Push funkce, 
	- RST – Reset spojení, 
	- SYN – synchronizace sekvenčních čísel, 
	- FIN – oznámení, že odesílající nemá žádná další data\. 
- __Window__ – množství dat oktetech, které je potvrzováno najednou, 
- __Checksum__ – kontrolní součet, není povinný a v tom případě je 0, 
- __Urgent Pointer__ – údaj je platný, pouze pokud je nastaven příznak URG, 
- __Options__ – pole proměnné délky určené pro volitelné parametry TCP, parametr je používán např\. pro indikaci maximální velikosti segmentu, kterou je přijímají strana schopna zpracovat, 
- __Padding__ – specifické množství nulových bitů doplňujících hlavičku tak, aby měla 32 bitovou hranici \(tj\. aby byla beze zbytku dělitelná 32\) 

  

NetBEUI \(NetBIOS Extended User Interface\) 

- Protokol transportní vrstvy, původně vyvinut IBM  
- Určený pro přenášení zpráv NetBIOSu, který je protokolem vrstvy relační 
- Protokol byl určen především pro komunikaci v malých lokálních sítích  
- Nepodporuje routování \(hledání co nejefektivnější cesty\) 
- Může být použit pouze v sítích propojených pomocí bridge nebo VPN 
- Byl velice rychlí a měl jednoduchou konfiguraci 

  

Sliding window \(three hand shake\) – pokud je síť zatížena  

  

TCP při zatíženi: posílá data \(5 packetu třeba\), potvrdí 3, doplní a pošle další, pokud zase bude problém, začne posílat méně,  

 Pokud je opakovaná chyba, neposílá velké množství, ale menší  

1. Syn 
2. Syn ACK  

Síťový socket  

- Koncový bod připojení přes počítačovou síť 
- Obsahuje zdrojovou a cílovou IP adresu 

Datagramový socket 

- Nespojové sokety, užívají UDP 

Streamové sockety 

- Známé jako spojové sockety, využívá TCP 

RAW sockety 

- Obvykle k dispozici ve směrovačích \(routerech\) a dalších síťových zařízeních  

Socket: \(popis socketu\) 

- Zdrojová IP adresa, Cílová IP adresa 

10\) Aplikační vrstva

Aplikační vrstva 

Význam vrstvy 

- Sedmá vrstva referenčního ISO/OSI modelu 
- Čtvrtá vrstva TCP/IP 
- Představuje okno, prostřednictvím kterého mohou uživatelé nebo aplikace vidět výsledek služeb zajišťovaných všemi předcházejícími vrstvami 
- Jde o vrstvu, která je nejblíže k uživateli 
- Nezajišťuje služby pro vyšší vrstvu \(žádnou nemá\) 
- Příklady funkcí zajišťované touto vrstvou: 
	- Souborové přenosy 
	- Sdílení zdrojů 
	- Přístup k databázím 
	- Prohlížení webových stránek 
	- Ovládání programů atd\. 
- Datové jednotky: APDU \(Application Layer Protocol Data Unit\) 

ISO/OSI vs TCP/IP 

  

Softwarové procesy 

- __Aplikace__ – uživatelské programy, rozhraní pro koncové uživatele, koncová komunikace mezi aplikacemi 
- __Služby__ – program poskytující své služby aplikacím 
- __Systémové operace__ – jeden program může být v OS vícekrát, každé spuštění vytváří minimálně jeden __proces__ \(instance programu v operační paměti, každý proces má PID\) 
- __Démon__ – část služby na serveru, která naslouchá a čeká na požadavky klientů, pracuje s mnohonásobnými přístupy  

 

Vazba mezi aplikacemi, službami a protokoly 

- __Aplikace__ – aplikační rozhraní \(application SW, ASW\), který slouží rozhraní pro koncového uživatele 
- __Služby__ – základní programy, které propojují aplikační vrstvu s nižšími vrstvami síťového modelu, poskytují služby ASW 
- __Protokol__ – popis komunikace na úrovni dané služby nebo vrstvy 

 

Protokol 

- Poskytuje strukturu schválených pravidel a postupů, které zajišťují že běh služeb na jednom zařízení může posílat a přijímat data ze širokého spektra jiných síťových zařízeni     
	- Definuje procesy \(postup zpracování\) na obou koncích komunikace 
	- Definuje typy zpráv 
	- Definuje syntaxi zprávy 
	- Definuje význam každého použitého informačního pole ve zprávě 
	- Definuje, jak je zpráva odeslána a jaká je na ní odpověď  
	- Definuje interakci se sousední spodní vrstvou  

Komunikační modely 

Klient\-server 

- Komunikace vždy začíná klient, server je skladiště informací 
- Procesy na serveru řídí doručení dat pro klienta 
	- Upload – z klienta na server 
	- Download – ze serveru na klienta 
- Server slouží a čeká na požadavek klienta 
- Aplikace typu klient\-server lze provozovat v sítí peer\-to\-peer 

Peer\-to\-peer 

- Rovný s rovným 
- Oba klienti začínají komunikaci a přijímají zprávy 
- Oba klienti současně vysílají a přijímají \(pracují současně jako klient\-server\) 
- Počítače mohou sdílet soubory, tiskárnu a podobně bez serveru 

 

Aplikační protokoly 

- Protokoly pracují v komunikačním režimu klient\-server 
- Standardy pro sadu protokolů tvoří TCP/IP se nazývají RFC \(Requests For Comments = žádosti o komentáře\), které přiděluje IETF 
- Čísla dobře známých portů aplikačních protokolů \(well\-known ports\) a jména domén nejvyššího řádu \(TLD = Top Level Domains\) přiděluje IANA 

 

Telnet 

- Pro jednoduché terminálové relace \(vzdálené připojení na PC\) 

FTP 

- Používá se na přenos souborů mezi vzdálenými stanicemi 
- Nezáleží na operačním a souborovém systému na stanicích 

TFTP 

- Omezená a standartní verze protokolu FTP 
- Využívá se při nahrávání nastavení některých komunikačních zařízení v síti při jejich startu anebo pro start bezdiskové stanice 

NFS 

- Umožňuje vzdálený přístup k souborům přes počítačovou síť 

SMTP 

- Zajišťuje přenos zpráv elektronické pošty mezi poštovními servery 

LPD     

- Slouží k odesílání tiskové úlohy na síťovou tiskárnu 

DNS 

- Organizuje jména počítačů v Internetu, a jejich vazby na IP adresy 

DHCP 

- Automatické přiřazování adres 

HTTP 

- Slouží k výměně hypertextových dokumentů ve formátu HTML 

HTTPS 

- Zabezpečený protokol http \(pomocí šifrování SSL a TLS\) 

POP3 

- Protokol pro přenos e\-mailových zpráv z poštovního serveru na klienta 

  

  

Detailní popis protokolů 

DNS 

- Komunikace pomocí TCP/UDP 
- Služba se stará o převod číselných adres na jména a naopak 
- DNS server se chová dvěma způsoby: 
	1. __Rekurzivní řešení dotazů__ – Server se chopí vyřízení dotazů, najde odpověď a pošle tazateli, více zatěžuje systém, ukládá mezi výsledky atd\. Vždy jim projde odpověď a tu si uloží do bufferu 
	2. __Nerekurzivní řešení dotazů__ – Server dotaz neřeší, poskytuje adresy dalších serverů, jichž se má ptát 

*Údaje v DNS* 

- Informace o doménových jménech a jejich IP adresách, stejně jako všechny ostatní informace v DNS záznamu, jsou uloženy v paměti DNS server ve tvaru zdrojových vět 
- K přenosu dat se používá TCP/UDP 
- __NAME__ – doménové jméno, pro nějž je záznam vytvořen 
- __TYPE__ – typy záznamů 
- __CLASS__ – rodina protokolů 
- __TTL__ \(Time To Live\) – udává dobu po kterou může být tento záznam udržován v CAHCE serveru  

__ __ 

__ __ 

__ __ 

*Nejčastěji používané typy zdrojových záznamů* 

- __SOA__ \(Start of authority\) – Určuje autoritativní jmenný server, je vždy právě jeden 
	- __Sériové číslo__ –  Verze databázového souboru 
	- __REFRESH__ –  Uvádí, jak často mají sekundární name servery ověřovat svá data 
	- __RETRY__ –  ____Jestli sekundární__ NS __\(name server\), nemůže kontaktovat primární po uplynutí intervalu refresh bude to zkoušet každých__ RETRY__ sekund 
	- __EXPIRE__ –  Jestliže se sekundárnímu __NS__ nepodaří kontaktovat primární __NS__ do __EXPIRE__, přestane poskytovat informace 
	- __TTL__ –  Jak dlouho mohou ostatní servery \(neautoritativní\) udržovat daný záznam ve své paměti CACHE 
- __NS__ –  Definuje autoritativní jmenný server pro doménu  
- __A__ \(Host address\) –  Přiřazuje doménovému jménu IPv4 adresu 
- __AAAA__ \(Host address\) –  Přiřazuje doménovému jménu IPv6 adresu 
- __MX__ \(Mail systém\) – Specifikuje jméno poštovního serveru 
- __CNAME__ –  definuje synonyma doménových jmen / aliasy 
- __PTR__ \(Pointer\) –  Slouží k překladu IP adresy na doménové jméno 
- __NSLOOKUP__ –  zadáme adresu \([www\.xx\.cz](http://www.xx.cz)\) \-> zjistí adresu 
- __DIG__ – __ __jako NSLOOKUP 
- __HOST__ – __ __jako NSLOOKUP 

 

*Popis principu DNS* 

- Služba se stará o převod číselných adres na jména a naopak 
- Služby DNS poskytuje rozsáhlá hierarchie tzv\. jmenných serverů \(name servers\) 
- Jmenné servery provozují službu DNS na portu 53 \(TCP i UDP, seznam služeb definován v /etc/services\) 
- Každá doména má vyhrazený počet jmenných severů, které jsou pro tuto doménu __autoritativní__ \-> Jedině tyto servery podávají v daný okamžik platné a aktuální informace o strojích příslušných jejich doméně 
- Chceme\-li zjisti IP počítače \-> dotážeme se lokálního jmenného serveru \-> dotáže se příslušného autoritativního serveru \(Prvně se dotážeme kořenového jmenného serveru \-> odkáže na doménu a spolu s ní nám dá i IP\) 
- Př: honza\.pohadka\.cz 
- Dotaz na \.cz \-> odkáže nás na pohadka\.cz \-> zjistí o jaký stroj se jedná \-> odkážeme se rovnou na server \-> víme IP 
- Toto doptávání je složité a abychom se nemuseli pořád ptát můžeme si jmenné servery udržet v paměti \(cache\) dotazy, které již byly zpracovány 
- Pokud je více autoritativních jmenných serverů \-> jeden je primární a ostatní fungují jako sekundární  

  

HTTP 

- Používá TCP 
- Přenos souborů HTML z web serveru na klienta 

FTP 

- Je to nezabezpečený protokol 
- Vhodnější je použít zabezpečený přenos souborů pomocí SFTP, nebo příkaz SCP po přihlášení v SSH 

DHCP \(Dynamic Host Configuration Protocol\) 

- Založen na modelu klient\-server 
- Zajišťuje automatické přidělení IP adresy a ostatních parametrů potřebných k připojení k síti \(adresa brány, maska podsítě, adresa DNS serveru\) 
- Musí zajistit, že přidělované IP adresy jsou jedinečné \(momentálně je nepoužívá nikdo jiný\) 

__DHCP klient__ – počítač, který využívá DHCP pro získání konfiguračních parametrů 

__DHCP server__ – počítač, který odpovídá na žádost DHCP klienta, vrací konfigurační parametry 

*Komponenty DHCP* 

1. Protokol pro doručování konfiguračních parametrů z DHCP serveru hostiteli 
2. Mechanismus alokování síťových adres na hostitele 

*Alokování adres* 

1. __Automatické alokování__ – přidělí klientovi stálou adresu 
2. __Dynamické alokování__ – přidělí klientovi adresu na určitý časový limit \(nebo než adresu uvolní sám klient\) 
3. __Manuální alokování__ – klient má pevně stanovenou adresu síťovým administrátorem a DHCP je pouze prostředník, který ji klientovi oznámí 

__Automatické__ – vhodné, když je klient stále připojen k síti 

__Dynamické__ – vhodné, když se klient připojuje dočasně 

__Manuální__ – vhodné, když by změna ohrozila chod aplikace/služeb 

*Komunikace* 

- Pomocí DHCP zpráv \(klient \-> server || server \-> klient\) 
- Existuje celkem 8 typů \(5 posílá klient, __DHCP__ DISCOVERY/PREQUEST/PRELEASE/DECLINA/INFORM__,__ 3 posílá server \(__DHCP__ OFFER/PACK/PNAK\) 
- Transportní protokol UDP \(klient \-> server \(port 67\), server \-> klient \(port 68\) 

  

1. __DHCP DISCOVER__ – klient vyšle zprávu, osloví jeden nebo více DHCP severu 
2. __DHCP OFFERS__ – když server příjme __DISCOVER__, pošle zpět __DHCP OFFER__ \(nabídku\), obsahuje MAC adresu a IP adresu, časový limit atd\. 
3. __DHCP REQUEST__ – klient serveru oznámí, že nabídku přijal\. Přijmout může pouze jednu ostatní musí odmítnout 
4. __DHCP ACKNOWLEDGE__ – když server příjme __DHCPPREQUEST__, musí potvrdit všechny parametry a odešle je klientovy ve formě __DHCPPACK__ 

*Kontrola* 

- Po obdržení __DHCPACK__ s konfiguračními parametry, ještě počítač zkontroluje \(třeba pomocí __ARP__\) zda je IP volná, dále dobu platnosti \(při stálém připojení, by jí když tak prodloužil\) 
- Pokud je adresa zabrána pošle serveru __DHCPDECLINE__ a vše se provede znovu to samé, když chybu zjistí server \(__DHCPNAK__\) \-> __DHCPDECLINE__ 
- __DHCPINFORM__ –  používá se, pokud má klient přidělenou IP ručně \(manuální konfigurace\), nechá si pak přidělit jen lokální parametry 
- __DHCPRELEASE__ –  Při odpojení klienta, uvolní adresu 

  

*Pojmy* 

- __OP__ –   Operační kód/type 
- __HTYPE__ – Typ hardwarové adresy 
- __HLEN__ – Délka hardwarové adresy 
- __HOPS__ –  Vždy nastaveno na nula 
- __XID__ – Identifikační číslo transakce 
- __SECS__ –  Vyplňuje klient, sekundy, které uplynuly od začátku komunikace 
- __FLAGS__ –  příznaky 
- __CIADDR__ –  IP adresa přidělena klienta, žádost o obnoven 
- __YIADDR__ –  IP adresa přidělena klientovi 
- __SIADDR__ –  IP adresa serveru 
- __CHADDR__ – Hardwarová adresa klienta 
- __SNAME__ –  Hostitelský název serveru  
- __FILE__ – Název bootovacího souboru 
- __OPTIONS__ – Parametry \(může být vynecháno\) 

  

Struktura zprávy 

 

  

  

Telnet 

- Jeden z nejstarších protokolů TCP/IP 
- Využívá se pro vzdálený přístup k serverům a síťovým zařízením 

SSH 

- Nahradil Telnet, nabízí šifrování 
- Bezpečnost zajišťuje pomocí 3 základních komponent: 
	- Autentizace obou účastníků komunikace 
	- Šifrování přenášených dat 
	- Integrita dat 

Emaily a zprávy 

*SMTP* 

- Pro přenos e\-mailových zpráv a jejich příloh mezi poštovními servery 
- Ve standartní verzi neposkytuje autentizaci uživatelů \-> snadno zneužitelný 

*POP \(Post Office Protocol\)* 

- Využívá se pro stahování e\-mailových zpráv ze vzdáleného serveru na klienta 

*MTA \(Mail Transfer Agent\)* 

- Zajišťuje přepravu elektronické pošty v Internetu 
- Využívá SMTP protokol 

*MDA \(Mail Delivery Agent\)* 

- Doručuje zprávy elektronické pošty do jednotlivých schránek uživatelé poté, co přepravce pošty \(MTA\) rozhodne, že jsou přijaty a patří místnímu uživateli 

*MUA \(Mail User Agent\)* 

- Poštovní klient \(program\), který uživateli zprostředkovává odesílání poštovní zprávy, vyzvednutí zpráv z jeho poštovní schránky 
- Zpravidla součástí prograu je čtení a psaní 
- MUA je klientem SMTP a zároveň POP nebo IMAP 

*MRA \(Mail Retrieval Agent\)* 

- Program, který zprostředkuje přístup do poštovní schránky uživatele 
- Je umístěn na vzdáleném poštovním serveru 
- MRA potom předává umístěné zprávy ve vzdálené schránce MUA 

11\) TCP/IP 

Základní informace 

- Protokolová sada TCP/IP je sada vzájemně spolupracujících protokolů 
- Vznikl původně jako komunikační protokol ministerstva obrany USA pro sjednocení všech sítí v rámci ARPANET \(Elektronické konference a odesílání zpráv 60\. léta\) 
- Dnes je součástí prakticky všech OS 
- TCP/IP je nezávislý na přenosovém médiu a je určen jak pro WAN, tak i pro LAN 
- Je užíván v heterogenní síti 
- Předpokládá, že na nižších vrstvách jsou nespolehlivé služby\. Zajištění spolehlivosti dělají vyšší vrstvy, a to jen při jejich vyžádání 

Význam a využití 

- Rozdělení na jednotlivé vrstvy, rozdělilo komunikace na snáze pochopitelné a popsatelné celky 
- Pomáhá při vytvoření komplexních, více uživatelských sítí 
- Pomáhá při vytvoření protokolů, každý protokol pracuje na určité vrstvě 
- Definuje rozhraní na sousední \(spodní a horní\) vrstvy 
- Podporuje vzájemnou spolupráci výrobků různých firem 
- Předchází vynuceným změnám, vyvolaných změnou na sousední vrstvě 
- Zapouzdření dat, pracuje pouze se záhlavím na příslušné vrstvě, nezkoumá vyšší vrstvy 
- Společná řeč pro popis sítě 
- Snáze se pochopí a naučí komunikace sítí 

Vrstvy 

- Aplikační vrstva 
- Transportní vrstva 
- Síťová vrstva 
- Vrstva síťového rozhraní 

  

Spolupráce vrstev 

- Program \(aplikace\) potřebuje navázat spojení se svým protějškem na jiném PC\. Pro přístup ke službám sítě aplikace použije protokol na aplikační vrstvě 
- Z aplikační vrstvy putuje požadavek na spojení do transportní vrstvy\. Transportní vrstva zorganizuje dopravu dat mezi procesy na koncových zařízeních\. Pokud je použit protokol TCP, jsou data rozdělena do segmentů, TCP naváže spojení \(relaci\) ještě před přenosem dat a zkontroluje, zda byla data skutečně doručena\. V případě UDP jsou použity nespojové a nepotvrzené datagramy 
- Přenos dat na jiné síťové zařízení zajišťuje nižší internetová \(\(mezi\) síťová\) vrstva\. Segmenty, které obdržela od vyšší transportní vrstvy zabalí = zapouzdří do IP paketů 
- Pro vlastní přenos signálu po přenosovém médiu, systém použije služeb vrstvy síťového přístupu, která paket zapouzdří do rámce a rámec – jeho jednotlivé bity zakóduje do signálu, který je poté přenesen přes přenosové médium 

  

Další porovnání TCP/IP s ISO/OSI 

  

Popis jednotlivých vrstev 

Vrstva síťového rozhraní 

- Nejnižší vrstva, umožňuje přístup k fyzickému přenosovému médiu 
- Je specifická pro každou síť v závislosti na její implementaci 
- Kódování signálu __na bity__ 

Síťová vrstva 

- Zajišťuje především síťovou adresaci, směrování a předávání datagramů 
- Protokoly: IP, ARP, RAPR, ICMP atd\. 
- Je implementována ve všech prvcích sítě – směrovačích i koncových zařízeních 
- Zajišťuje výběr nejlepší cesty do cílové stanice 

Transportní vrstva 

- Poskytuje transportní služby pro kontrolu celistvosti dat: 
	- __TCP__ – spolehlivý protokol, kontroluje data 
	- __UDP__ – nespolehlivý protokol, nekontroluje data 
- Transportní vrstva je implementovaná až v koncových zařízeních \(PC\) a umožňuje proto přizpůsobit chování sítě potřebám aplikace 

Aplikační vrstva 

- Vrstva aplikace 
- Uživatelské rozhraní, reprezentace uživatelských, dat kódování dat 
- Jedná se protokoly, které slouží k přenosu konkrétních dat \(Telnet, FTP, HTTP, DHCP, DNS\) 
- Aplikační protokoly vždy používají jednu ze dvou základních služeb transportní vrstvy \(TCP nebo UDP\), případně obě \(např\. DNS\) 
- Pro rozlišení aplikačních protokolů se používají tzv\. porty 
- __Port__ – domluvené číselné označení aplikace 
- Každé síťové spojení aplikace je jednoznačně určeno číslem portu a transportním protokolem \(a samozřejmě adresou PC\) 
- Řídí tok dat mezi koncovými aplikacemi 

 

UDP 

- Package size je menší a to o 60% 
- Není nutno vytvářet spojení  
- Data dorazí v různém pořadí, ne tak jak byla odeslána 
- Kontrola pomocí 16\-bit checksum \(pokud je segment poškozen \-> je zničen\) a nebo je označen jako poškozen 
- Packet je poslán vždy pouze 1 
- Checksum je povinný u IPv6 \(když u IPv4 není, je 0\) 

Využití 

- Videa, záznamy z kamer, telefony 
- Všude, kde je třeba vyšší rychlost 

Výhody 

- Vysoká rychlost 
- Jednodušší implementace 

Nevýhody 

- Packet je poslán vždy, nehledě na vytíženost sítě 
- Pokud je packet poškozen, není poslán znova 
- __Source port:__ Zdrojový port, pokud proces nepodporuje zdrojový port, může být 0 
- __Destination port__: Určuje cílový port kam budou data doručená 
- __Length__: vyjadřuje délku UDP hlavičky a dat 
- __Checksum__: kontrolní součet, pokud není povinný je 0 \(povinný pouze u IPv6\) 

  

  12\) TCP / UDP

Transportní vrstva \- TCP/UDP to stejné co v otázce 9 \(Transportní vrstva\)  

Význam vrstvy 

- Umožňuje paralelní \(vícenásobnou\) komunikace zařízení v síti 
- Segmentuje zprávy 
- Může provádět detekci chyb 
- Jedná se o čtvrtou vrstvu referenčního ISO/OSI modelu  

Headers 

- UDP header: 8 bytes 
- TCP header: 20 bytes 

Transportní vrstva 

- Přidává záhlaví pro správné doručení dat konkrétnímu procesu v síti 
- Segmentuje zprávy 
- Řídí opětovné složení zprávy  
- Využívá dva transportní protokoly TCP a UDP 
- Vytváří na PC přes 65 000 portů \(per 1 connection\) 
- Porty jsou rezervovány aplikacemi \(může rezervovat více než 1 port\) 

Zajišťuje 

- Sledování jednotlivých komunikací mezi aplikacemi na zdrojové a cílové stanici \(multiplexing\) 
- Segmentace dat a řízení každého segmentu \(snazší správa a přenos\) 
- Znovu složení jednotlivých segmentů do tvaru původní zprávy \(aplikačních dat\) 
- Identifikace různých aplikací \(dle čísel portů\) 

Postup  

- Zpráva se zabalí do segmentu 
- Segment = Obsahuje zdrojový port a cílový port 
- Zpráva se pošle do síťové vrstvy \-> znovu do transportní \(u daného zařízení\) \-> rozbalí se a pošle na daný port 

UDP 

- Package size je menší a to o 60% 
- Není nutno vytvářet spojení  
- Data dorazí v různém pořadí, ne tak jak byla odeslána 
- Kontrola pomocí 16\-bit checksum \(pokud je segment poškozen \-> je zničen\) a nebo je označen jako poškozen 
- Packet je poslán vždy pouze 1 
- Checksum je povinný u IPv6 \(když u IPv4 není, je 0\) 

Využití 

- Videa, záznamy z kamer, telefony 
- Všude, kde je třeba vyšší rychlost 

Výhody 

- Vysoká rychlost 
- Jednodušší implementace 

Nevýhody 

- Packet je poslán vždy, nehledě na vytíženost sítě 
- Pokud je packet poškozen, není poslán znova 
- __Source port:__ Zdrojový port, pokud proces nepodporuje zdrojový port, může být 0 
- __Destination port__: Určuje cílový port, kam budou data doručená 
- __Length__: vyjadřuje délku UDP hlavičky a dat 
- __Checksum__: kontrolní součet, pokud není povinný je 0 \(povinný pouze u IPv6\) 

  

TCP 

- Spojově orientovaný, je nutno vytvořit spojení 
- Tak zvané trojité podání ruky 
	1. Nabídka o spojení 
	2. Přijetí nabídky 
	3. Acknowledge packet, k navázání spojení \(potvrdí navázání spojení\) 
- Spolehlivé doručení zprávy, po přijetí vrátí zprávu o doručení, pokud zpráva nedojde do X sekund, odesílatel pošle data znova 
- Skládání dat do správného pořadí \(při odeslání jsou označena indexem\) 
- Řízení toku dat, pokud je síť zatížena, počká a data odešla později 
- Checksum, povinný jak i IPv4 tak i IPv6 

Využití 

- Maily, insta messaging 
- A kdekoliv, kde nesmí dojít ke ztrátě dat 

Výhody 

- Spolehlivé 
- Zajistí správné doručení  

Nevýhody 

- Velká režie \(overhead\) 
- Menší rychlost 
- Velka hlavička 

Spolehlivost zajišťuje 

- Sekvenční, pořadová čísla \(SWQ\) a jejich synchronizace 
- Potvrzení doručení \(čísla potvrzení – ACK\) 
- Znovu odesílá nepotvrzená data 
- Mechanismus posuvného okna \(sliding window\) 

  

- __Source port__ \- port procesu generujícího datagram, 
- __Destination port__ \- určuje kterému procesu na cílovém uzlu jsou data určena, 
- __Sequence Number__ \- sekvenční číslo prvního datového oktetu v segmentu \(pokud není nastaven příznak SYN\), 
- Pokud je nastaven příznak SYN, jedná se o tzv\. initial sequence number – ISN a první datový oktet má číslo ISN \+ 1, 
- __Acknowledgement Number__ \- má význam pouze, když je nastaven kontrolní bit ACK\. Toto číslo je nastaveno na hodnotu, kterou odesílatel očekává v poli Sequence Number v následujícím paketu\. Je\-li ustaveno spojení, je toto číslo vždy posíláno, 
- __Data Offset__ \- specifikuje číslo vyjádřené 32bitovým slovem\. Indikuje, kde data v segmentu začínají data přenášená tímto datagramem, 
- __Reserved__ \- toto 6ti bitové pole je rezervované a mělo by vždy být nulové, 
- __Control Bits__ \- kontrolní bity \(příznaky\) zajišťující "handshaking" a ostatní specifické procesy: 
	- URG \- Urgent Pointer, 
	- ACK – Acknowledgement, 
	- PSH \- Push funkce, 
	- RST \- Reset spojení, 
	- SYN \- synchronizace sekvenčních čísel, 
	- FIN \- oznámení, že odesílající nemá žádná další data\. 
- __Window__ \- množství dat oktetech, které je potvrzováno najednou, 
- __Checksum__ \- kontrolní součet, není povinný a v tom případě je 0, 
- __Urgent Pointer__ \- údaj je platný, pouze pokud je nastaven příznak URG, 
- __Options__ \- pole proměnné délky určené pro volitelné parametry TCP, parametr je používán např\. pro indikaci maximální velikosti segmentu, kterou je přijímají strana schopna zpracovat, 
- __Padding__ \- specifické množství nulových bitů doplňujících hlavičku tak, aby měla 32 bitovou hranici \(tj\. aby byla beze zbytku dělitelná 32\) 

  

  

Sliding window \(three hand shake\) – pokud je síť zatížena  

  

TCP při zatíženi: posílá data \(5 packetu třeba\), potvrdí 3, doplní a pošle další, pokud zase bude problém, začne posílat méně,  

  

Pokud je opakovaná chyba, neposílá velké množství, ale menší  

1. Syn 
2. Syn ACK  

Síťový socket  

- Koncový bod připojení přes počítačovou síť 
- Obsahuje zdrojovou a cílovou IP adresu 

Datagramový socket 

- Nespojové sokety, užívají UDP 

Streamové sockety 

- Známé jako spojové sockety, využívá TCP 

RAW sockety 

- Obvykle k dispozici ve směrovačích \(routerech\) a dalších síťových zařízeních  

13\) IP adresace sítí 

Části 

- Tyto tři části umožňují snadné zjištění umístění IP adresy na světě 
- Obdoba poštovní adresy \(stát, ulice, jméno adresáta\) 
- Hranice mezi adresou síťového rozhraní a počítače určuje MASKA sítě 
- Jedničky jsou na místě čísla sítě a podsítě a nuly tam kde je číslo síťového rozhraní \(PC\) 

 

 

IPv4 \(Internet Protocol Version 4\) 

- Čtvrtá revize IP \(Internet Protocol\) a zároveň prvně masivně rozšířená verze 
- S IPv6 vytvářejí základ pro komunikace v rámci sítě Internet 
- Je datově orientovaný protokol, využívá se v sítích s přepojováním paketů \(Ethernet\) 
- IPv4 protokol přepravuje data bez záruky \(negarantuje doručení, zachování pořadí atd\.\) 
- Tyto záruky jsou ponechány vyšší vrstvě, protokolu TCP 
- Vyšší vrstvě je přenechána i integrita dat  
- Má omezený adresový prostor cca 232 adres \(4 miliardy adres\) 
- 4 byte = 32 bitů 

  

Struktura IPv4 

- __Version__ – verze protokolu 
- __Internet Header Lenght__ – délka hlavičky \(počet 32 bitových slov, max 15\) 
- __Type of Service \(TOS\)__ – typ služby pro QoS \(kvalita\) – priority, zpoždění, spolehlivost, cena 
- __Identification__ – odkaz na původní paket před fragmentací  
- __Flag \(příznaky\)__ – zda je paket fragmentován  
- __TTL \(Time To Live\)__ – životnost \(počet přeskoků, počet směrovačů na cestě\) 
- __Protokol__ – číslo protokolu \(zapouzdřený protokol vyšší vrstvy\) – EIGRP 88, OSPF 99 
- __Checksum__ – kontrolní součet hlavičky 
- __Zdrojová a cílová adresa__ 
- __Options__ – volby \(zabezpečení atd\.\) 
- __Padding__ – výplň \(dorovnání do 32 bitů\)  

  

IPv6 \(Internet Protocol Version 6\) 

- Nástupce IPv4 
- Masivní rozšíření adresového prostoru \(\[Rovnice\]﷐10﷮28﷯

1028

adres\) 

- 128 bitů 
- Zdokonalená schopnost přenášet vysokorychlostně data 

Struktura IPv6 

- Navržena, aby řešila nedostatek IP adres 
- Přináší především velké rozšíření adresního prostoru  
- Dále reaguje na vzrůstající přenosové rychlosti a moderní komunikační technologie 

Cíle IPv6 

- Dostatečný adresový prostor 
- Design odpovídajícím vysokorychlostním sítím 
- Bezpečnostní mechanismy přímo v IP 
- Podpora mobilních zařízení 
- Automatické konfigurace 
- Kooperace s IPv4 a co nejhladší přechod ze stávajících protokolů na nový 

Rozdělení IPv6 adres 

*Individuální \(unicast\)* 

- Označují jedno rozhraní připojeného počítače či protokolu 
- Zasílání paketu pouze jednomu počítači 

*Skupinové \(multicast\)* 

- Představují adresu skupiny síťových rozhraní  
- Paket se skupinovou cílovou adresou bude dopraven všem členům skupiny 
- Časté využití pro videokonference atd\. \(šíření zvukového, či obrazového signálu\) 

*Výběrové \(anycast\)* 

- Také označují skupinu síťových rozhraní, ale datagram bude dopraven jen na jedno z nich \(zpravidla to nejbližší\) 
- Umožňuje například realizovat některé speciální služby, klient odešle datagram s obecnou adresou a některý z dostupných serverů se jej ujme 

 

 

Třídy IP adres 

- Třídy jsou __A, B, C, D__ 
- Slouží k určení podsítě, třídy byly určené maskou 
- Tento způsob se po čase ukázal jako nedostatečný, poskytovala relativně hodně velký počet podsítí \(třída A\) a málo malých podsítí \(třída C\) a proto se zavedl CIDR \(beztřídní směrování\) 
- Různé IP adresy měli svou vlastní masku, a to vedlo k neefektivnímu využití rozsahu IP adres \(masky byly příliš velké\) 
- Maska určuje počet adres v síti, čím menší byla maska, tím bylo možné použít více adres 
- Velikost masek byla pevně daná 

255\.0\.0\.0 = /8 

255\.255\.0\.0 = /16 

255\.255\.255\.0 = /24 

255\.255\.255\.255 = /32 

CIDR \(Classes Inter Domain Routing\) 

- __Beztřídní směrování__ 
- Umožňuje nastavit vlastní mask__u \(přizpůsobení počtu adres v síti\)__ 
- Zabraňuje mrhání IP adres, stanoví se vždy požadovaná velikost 
- Snížilo to velikost směrovacích tabulek 

 

Dělení adres dle skupin 

Veřejná IP adresa 

- Zařízení dostane veřejnou IP adresu, je v celé Internetové síti viditelná a zjistitelná 
- Na veřejnou IP adresu je možné se odkudkoliv přihlásit a pracovat jako by uživatel byl doma 
- Kvůli dohledatelnosti a viditelnosti ztrácí uživatel na Internetu anonymitu 
- Veřejné adresy jsou snazší k napadení  
- Při využití P2P sítě, je člověk velmi lehce dohledatelný \(při sdílení, stahování atd\.\) 

Neveřejná IP adresa 

- Adresa, kterou poskytuje naprostá většina ISP \(Internet Service Provider\) svým uživatelům 
- Nabízí stejné možnosti jako veřejná IP, ale uživatel je omezen k přístupu na tuto IP adresu pouze ze svého intranetu[\[1\]](file:///D:\kondy\Documents\school_4.itb\Maturita\Kubis\POS\13)%20IP%20adresace%20sítě.docx#_ftn1), nebo části intranetu, kterou mu ISP vyhradil 
- Neveřejná IP adresa je na internetu prakticky „neviditelná“ 
- Platí pro ni stejná rizika jako u veřejné IP adresy, ale je hůře dohledatelná a napadnutelná  
- __Intranet__ \- označení pro část internetové sítě\. Na rozdíl od internetu je však Intranet privátní, využívá ho jen malá skupina uživatelů \(firmy, školy atd\.\) 

Dynamická IP adresa 

- Je přidělována automaticky poskytovatelem prostřednictvím DHCP serveru a routerem 
- Je pouze dočasná a při každém novém připojení se může teoreticky změnit 
- V praxi je doba platnosti dynamické IP adresy různá \(dny, až měsíce\) 
- Nikdy tedy není jistota, kdy se dynamická adresa může změnit 

Statická IP adresa 

- Neboli pevná IP adresa 
- Pevnou IP adres může uživatel získat většinou za příplatek 
- Garantuje nám, že IP adresa koncového zařízení bude vždy stejná 

Maska sítě 

- Je číslo, které popisuje rozdělení počítačové sítě do podsítí \(subnets\) 
- Maska sítě zapsaná v binárním tvaru má zleva samé jedničky až do místa, kde končí místo sítě a na místě části pro síťové rozhraní jsou samé nuly 
- Pomocí masky router rozhoduje i o směrování IP datagramů 

VLSM \(Variable Lenght Subnet Mask\) 

- Umožňuje dělení velké sítě do menších podsítí \(nemrhá se adresami\) 
- Umožňuje to vytvořit síťovou hierarchii  

Podsítě \(subnet\) 

- Samostatná část počítačové sítě 
- Podsítí je většinou míněna menší vyčleněná část větší IP sítě 
- Pro určení rozsahu IP adres v dané podsítí slouží MASKA sítě 
- Subnetting – rozdělení sítě na dvě nebo více menších podsítí  

IANA \(Internet Assigned Numbers Authority\) 

- Autorita pro přidělování čísel na internetu 
- Je organizace, které dohlíží celosvětově na přidělování IP adres, správu kořenových zón DNS, definování typů medií pro MIME a další náležitosti internetových protokolů 

  

 

Výpočet podsítí 

[http://www\.superuser\.cz/it/ipv4\-jak\-na\-vypocet\-podsiti\-a\-masky\-site\-cidr\-subnets/](http://www.superuser.cz/it/ipv4-jak-na-vypocet-podsiti-a-masky-site-cidr-subnets/) 

  

IPv4 \- struktura, rozdělení adres \- hierarchická struktura, převody dvojková/desítková soustava, význam masky, CIDR, VLSM, podsítě \- výpočet podsítí, význam IANA, IPv6 \- struktura    

\( [https://wikisofia\.cz/wiki/IP\_adresa](https://wikisofia.cz/wiki/IP_adresa) \) 

 
 

[\[1\]](file:///D:\kondy\Documents\school_4.itb\Maturita\Kubis\POS\13)%20IP%20adresace%20sítě.docx#_ftnref1) Intranet –  

14\) IP adresace sítí – podsítě 

CIDR \(Classes Inter Domain Routing\) 

- Beztřídní směrování 
- Umožňuje nastavit vlastní masku \(přizpůsobení počtu adres v síti\) 
- Zabraňuje mrhání IP adres, stanoví se vždy požadovaná velikost 
- Snížilo to velikost směrovacích tabulek 

Dělení adres dle skupin 

Veřejná IP adresa 

- Zařízení dostane veřejnou IP adresu, je v celé Internetové síti viditelná a zjistitelná 
- Na veřejnou IP adresu je možné se odkudkoliv přihlásit a pracovat jako by uživatel byl doma 
- Kvůli dohledatelnosti a viditelnosti ztrácí uživatel na Internetu anonymitu 
- Veřejné adresy jsou snazší k napadení  
- Při využití P2P sítě, je člověk velmi lehce dohledatelný \(při sdílení, stahování atd\.\) 

Neveřejná IP adresa 

- Adresa, kterou poskytuje naprostá většina ISP \(Internet Service Provider\) svým uživatelům 
- Nabízí stejné možnosti jako veřejná IP, ale uživatel je omezen k přístupu na tuto IP adresu pouze ze svého intranetu[\[1\]](file:///D:\kondy\Documents\school_4.itb\Maturita\Kubis\POS\14)%20IP%20adresace%20sítí%20-%20podsítě.docx#_ftn1), nebo části intranetu, kterou mu ISP vyhradil 
- Neveřejná IP adresa je na internetu prakticky „neviditelná“ 
- Platí pro ni stejná rizika jako u veřejné IP adresy, ale je hůře dohledatelná a napadnutelná  

Dynamická IP adresa 

- Je přidělována automaticky poskytovatelem prostřednictvím DHCP serveru a routerem 
- Je pouze dočasná a při každém novém připojení se může teoreticky změnit 
- V praxi je doba platnosti dynamické IP adresy různá \(dny, až měsíce\) 
- Nikdy tedy není jistota, kdy se dynamická adresa může změnit 

Statická IP adresa 

- Neboli pevná IP adresa 
- Pevnou IP adres může uživatel získat většinou za příplatek 
- Garantuje nám, že IP adresa koncového zařízení bude vždy stejná 

Maska sítě 

- Je číslo, které popisuje rozdělení počítačové sítě do podsítí \(subnets\) 
- Maska sítě zapsaná v binárním tvaru má zleva samé jedničky až do místa, kde končí místo sítě a na místě části pro síťové rozhraní jsou samé nuly 
- Pomocí masky router rozhoduje i o směrování IP datagramů 

   

VLSM \(Variable Lenght Subnet Mask\) 

- Umožňuje dělení velké sítě do menších podsítí \(nemrhá se adresami\) 
- Umožňuje to vytvořit síťovou hierarchii  

Podsítě \(subnet\) 

- Samostatná část počítačové sítě 
- Podsítí je většinou míněna menší vyčleněná část větší IP sítě 
- Pro určení rozsahu IP adres v dané podsítí slouží MASKA sítě 
- Subnetting – rozdělení sítě na dvě nebo více menších podsítí  

IANA \(Internet Assigned Numbers Authority\) 

- Autorita pro přidělování čísel na internetu 
- Je organizace, které dohlíží celosvětově na přidělování IP adres, správu kořenových zón DNS, definování typů medií pro MIME a další náležitosti internetových protokolů 

Struktura IPv6 

- Navržena, aby řešila nedostatek IP adres 
- Přináší především velké rozšíření adresního prostoru  
- Dále reaguje na vzrůstající přenosové rychlosti a moderní komunikační technologie 

Cíle IPv6 

- Dostatečný adresový prostor 
- Design odpovídajícím vysokorychlostním sítím 
- Bezpečnostní mechanismy přímo v IP 
- Podpora mobilních zařízení 
- Automatické konfigurace 
- Kooperace s IPv4 a co nejhladší přechod ze stávajících protokolů na nový 

Rozdělení IPv6 adres 

*Individuální \(unicast\)* 

- Označují jedno rozhraní připojeného počítače či protokolu 
- Zasílání paketu pouze jednomu počítači 

*Skupinové \(multicast\)* 

- Představují adresu skupiny síťových rozhraní  
- Paket se skupinovou cílovou adresou bude dopraven všem členům skupiny 
- Časté využití pro videokonference atd\. \(šíření zvukového, či obrazového signálu\) 

*Výběrové \(anycast\)* 

- Také označují skupinu síťových rozhraní, ale datagram bude dopraven jen na jedno z nich \(zpravidla to nejbližší\) 
- Umožňuje například realizovat některé speciální služby, klient odešle datagram s obecnou adresou a některý z dostupných serverů se jej ujme 

Výpočet podsítí 

 
 

[\[1\]](file:///D:\kondy\Documents\school_4.itb\Maturita\Kubis\POS\14)%20IP%20adresace%20sítí%20-%20podsítě.docx#_ftnref1) Intranet – označení pro část internetové sítě\. Na rozdíl od internetu je však Intranet privátní, využívá ho jen malá skupina uživatelů \(firmy, školy atd\.\) 

15 \+ 16\) Ethernet \(historie \+ současnost\)

 

- Název souhrnu technologií pro počítačové sítě \(LAN, MAN\), které používají kabely s kroucenou dvoulinkou, optické kabely \(dříve i koaxiální kabely\) 
- Jednalo se o komunikaci s přenosovou rychlostí od 10 Mbit/s po 10 Gbit/s 

Vývoj ethernetu 

- Byl vyvinut v letech 1972–1975 __v 80\. letech / 90\. letech__ 
	- První verze ethernetu využívali pro šíření signálu koaxiální kabel, ke kterému bylo možno připojit až několik desítek počítačů 
	- Byla představena první komerční verze Ethernetu \(rychlost 10 Mbit/s\) určena k propojení počítačů pro potřeby kancelářských aplikací 

 

IEEE \(Institute of Electrical and Electronics Engineers\) 

- Jedna z předních standardizačně\-vývojových organizací na světě 
- Vykonává vývojové a údržbové funkce 

Tabulka vývoje 

- __1980__ – DIX Ethernet \(open standart\) 
- __1985__ – IEEE 802\.3 
- __1995__ – IEEE 802\.3u \(Fast Ethernet\) 
- __1998__ – IEEE 802\.3z \(Gigabit Ethernet\) 
- __2002__ – IEEE 802\.3ae \(10Gb Ethernet\) 

 

Rychlosti přenosu 

1 Mbit/s 

- Rychlost používaly první varianty Ethernetu pro kroucenou dvoulinku 

10 Mbit/s 

- __Klasický Ethernet__ – původní varianta 
- Definována pro koaxiální kabel, kroucenou dvoulinku a optické vlákno 

100 Mbit/s 

- __Fast Ethernet__ – rychlejší verze 
- Převzala maximum prvků z původního Ethernetu, aby se usnadnil, urychlil a zlevnil vývoj 
- Lze jí považovat za základní verzi Ethernetu 

1 Gbit/s 

- __Gigabitový Ethernet __ 
- Opět převzal co nejvíce prvků z původního Ethernetu 
- Důležité je především použití stejného formátu rámce 
- Původně byl pouze pro otická vlákna, později i pro kroucenou dvoulinku  

10 Gbit/s 

- __Desetigigabitový Ethernet __ 
- Představuje zatím poslední standardizovanou verzi 
- Jako médium zatím hlavně slouží optická vlákna 
- Opět používá stejný formát rámce 
- Roku 2008 byly vyvinuta varianta i pro kroucenou dvoulinku \(začíná se zavádět\) 

 

Přepínaný ethernet 

Přepínače 

- Chování jako mosty \(bridge\) – v topologii strom 
- Přepínání je řešeno hardwarovými prostředky \(CAM\) 
- Malé zpoždění, přepínání mezi více připojenými segmenty současně 
- __SEGMENT \- ČÁST SÍTĚ \!\!__ 

Výhody přepínání 

- __Bezkolizní \->__ vyšší přenosová rychlost 
	- Nedochází ke ztrátám vlivem kolizí 
	- Možnost paralelní komunikace mezi různými dvojicemi segmentů 
- Switch může vynutit více deterministických chování \(např\. podpora pro priority provozu, řízení toku dat atd\.\) 
- __Vyšší bezpečnost –__ k uzlu jsou přenášeny jen ty rámce, které jsou pro něj určeny \(znemožněn odposlech rámců\)  
- __Lepší udržovatelnost__ 
	- Izolace chybových segmentů 
	- Broadcast\-strom control 
	- Intruder detection \(podle zdrojových MAC adres\) \- detekce útořníků v síti 

Duplex 

Half duplex 

- Aktivní může být komunikace pouze v jednom směru 

Full duplex 

- Můžeme zároveň vysílat a přijímat 
- V ethernetu se využívají dva páry vodičů \(někdy i čtyři\), kdy polovina je použita pouze pro vysílání a polovina pro příjem 

Kolizní doména 

- Část sítě, kde může dojít ke kolizi vysílání několika stanic, tedy skupina zařízení, které jsou připojeny na sílené médium \(koaxiální kabel, hub\) 
- Dříve se sítě rozdělili na více částí pomocí routeru \(zmenšení kolizních domén\) 
- S příchodem switche, se z principu jeho funkce vytvářejí samostatné kolizní domény na každém rozhraní 

 

Přístupová metoda 

- Reguluje přístup jednotlivých uzlů ke sdílenému přenosovému médiu 
- __Metoda CSMA,__ monitoruje jednotlivé stanice, zda právě neprobíhá nějaké vysílání – aby se nerušili navzájem 
- Na společném přenosovém médiu může vysílat vždy jen jedna stanice 
- Sekají\-li se na médiu signály z více stanic, vznikne kolize a signál je znehodnocen 
- Monitorováním provozu lze dosáhnout vyšší efektivity sítě 
- Dojde\-li ke kolizi, musí být zajištěno, že ji zaznamenají všechny uzly v doméně 

  

CSMA \(Carrier Sense Multiple Access\) 

- Stanice připravená posílat data si „poslechne“ zda je přenosové médium \(kabel\) nepoužívá jiná stanice 
- Pokud je přenosové médium zabrané, stanice zkouší přístup později, až do doby, dokud není médium volné 
- V okamžiku uvolnění média začne stanice vysílat data 

CD \(Collision Detection\) 

- Stanice během vysílání sleduje, zda je na médiu signál odpovídající vysílaným úrovním \(tedy aby se např\. v okamžiku kdy se vysílá signál 0 nevyskytl signál 1\) 
- Případ, kdy dojde k interakci signálů se nazývá kolize 

V případě detekce kolize, stanice generuje signál JAM a obě \(všechny\) stanice, které v daném okamžiku vysílaly generují náhodnou hodnotu času, po níž se pokusí vysílán zopakovat 

 

1. Stanice vlevo zjistí, zda někdo nevysílá, zjistila, že ne a začala sama posílat data\. V okamžiku, kdy signál ještě nedorazil ke stanici vpravo si tato stanice také ověřila stav média, zjistila, že je možnost zahájit vysílání 
2. Obě stanice posílají data 
3. Stanice vpravo zjistila kolizi a generuje signál JAM, všechny vysílající stanice zastavují vysílání a generují náhodné číslo 

Nevýhody 

- S narůstajícím počtem uzlů narůstá počet kolizí a tím teoreticky klesá propustnost sítě 
- Kolizní doména – soubor uzlů jejichž vzájemná činnost může vygenerovat kolizi  
- Kolizní doména by měla být co nejmenší  
- Některé aktivní prvky kolizní doménu rozšiřují, některé kolizní doménu oddělují 

  

Nejdůležitější vlastnosti 

- Nezaručuje přístup ke sdílenému médiu v konečném čase 
- Není příliš vhodná pro řízení a aplikace v reálném čase 
- Se zatížením klesá její efektivita 
- Topologie sítě musí být alespoň v logickém smyslu 

Přístup k médiu – CSMA/CD 

- Když je více zařízení, připojeno ke sdílené sběrnici, tak v jednu chvíli může komunikovat pouze jedno a ostatní mohou pouze naslouchat 
- Problém nastane, když začne komunikovat více zařízení najednou \-> vznik kolize  

Algoritmus CSMA/CD 

1. Zařízení, které chce vysílat poslouchá, zda je linka volná 
2. Pokud je volná, začne vysílat rámec 
3. Odesílatel poslouchá, zda nedošlo ke kolizi 
4. Pokud zjistí, že došlo ke kolizi, pošle JAM signál 
5. Po ukončení jamu si stanice, které vysílaly nastaví náhodný čas, po který čekají 
6. Po uplynutí času se začne bodem 1 

 

Broadcast 

- Zpráva, kterou v počítačové síti přijmou všechna připojená síťová rozhraní 
- Jeden vysílá, všichni slyší 

MAC broadcast 

- Speciální adresa pro posílání všem zařízením 
- Používá se speciální MAC adresa 
- Je přijat všemi síťovými zařízeními, která jsou připojena ke stejnému segmentu sítě, do kterého patří zdroj odchozího paketu 
- Takový segment ohraničuje router, který lokální broadcast dále nepropustí \(projde ale skrz switch i hub\) 

IP broadcast 

- Přijat všemi síťovými kartami v dané podsíti 
- Odcházející paket, který je adresován na IP adresu, která je na odchozím síťovém rozhraní shodná s broadcastem, je v Ethernetové síti odeslán v rámci, jehož cílová MAC adresa je nastavena na \(FF:FF:FF:FF:FF:FF\)\. Takový rámec je přijat všemi síťovými kartami v dané podsíti 

Síťový broadcast 

- Je IP datagram, který je odeslán na IP adresu, která je v cílové síti broadcastem 

  

Aktivní prvky Ethernetu – vztah k ISO/OSI 

- Pro vytvoření sítě je nutné použít aktivní prvky 

Repeater \(opakovač\) 

-
	- Umožňuje propojit dva segmenty sítě pracující stejnou rychlostí \(Fyzická vrstva ISO/OSI\) 
	- Přijímá zkreslený, zašuměný, poškozený signál a opravený, zesílený ho vysílá dále 

Hub \(multiport repeater\) 

-
	- Umožňuje propojit několik segmentů sítě pracujících stejnou rychlostí \(Fyzická vrstva\) 

Bridge \(most\) 

-
	- Propojuje dva segmenty sítě 
	- Každá strana bridge může pracovat jinou rychlostí a každá strana tvoří zvláštní kolizní doménu \(Linková vrstva ISO/OSI\) 

Switch \(přepínač, multiport bridge\) 

-
	- Propojuje několik segmentů sítě \(Linková vrstva\) 

Router \(směrovač\) 

-
	- Umožňuje propojit různé sítě \(ne nutně typu Ethernet\) \(Síťová vrstva\) 

Budoucnost Ethernetu  

- Je s námi již přes 30 let, současně se především používají rychlosti 1GE, 10GE a 100GE 
- Je třeba různých rychlostí a implementace na základě požadavků 
- Připravit se můžeme na rychlejší, ale i pomalejší rozhraní \(2,5GE, 5GE, 25 GE, 400GE\) 
- Různé rychlosti, jsou dány různými potřebami na trhu 
- Různé implementace vyžadují různé parametry, rychlost, vzdálenost, cenu 
- Rychlost 25GE pro datová centra 
- Pro infrastrukturu datacenter 40GE 
- 100GE za větší hustotu portů 

 přepínaný Ethernet, důvody vzniku, kolizní doména, broadcast, aktivní prvky Ethernetu, budoucnost Ethernetu   

  

  

17\) Síťový HW

Aktivní prvky 

HUB \(rozbočovač\) 

- Pracuje na první vrstvě \(fyzické\), kopíruje bity \(0,1\), posílá zprávy všem 
- Umožňuje větvení sítě a je základem sítí s hvězdicovou topologii  
- Data, která přijdou z jednoho portu, zkopíruje na všechny \(bez ohledu komu náleží\) 
- Zbytečné přetěžování segmentů, data se posílají i tam kam vůbec nejsou určená 

Switch \(přepínač\) 

- Pracuje na druhé vrstvě \(linková\), pracuje s MAC adresou 
- Má switch table, kde jsou uloženy MAC adresy počítačů 
- Zprvu je tabulka prázdná, když dostane zprávu od PC, uloží si jeho MAC adresu a postupně se učí 
- Odděluje síťový provoz \(nezatěžuje sítě\) 

Router \(směrovač\) 

- Pracuje na třetí vrstvě \(síťová\), pracuje s IP adresou 
- Připojuje síť k jiné síti, často má DHCP 
- Procesem zvané routování přeposílá datagramy směrem k jejich cíli 

Gateway \(brána\) 

- Název aktivního zařízení \(síťového uzlu\), které má v počítačové síti nejvyšší postavení 
- Brána propojuje dvě sítě pracující s odlišnými komunikačními protokoly 
- Zprostředkovává komunikace dvou odlišných typů sítě 

Bridge \(most\) 

- Spojuje dva fyzicky oddělené segmenty sítě 

Repeater \(opakovač\) 

- Obnovuje poškozený, zkreslený signál, který na fyzicky delším úseku sítě se poškodí, obnovený a posílený jej posílá dál 

  

  

Pasivní prvky  

- Přenos dat mezi počítači je zprostředkováván kabely \(drátový přenos\), nebo bezdrátový přenos 

Koaxiální kabel 

- Tvořen dvěma vodiči s odlišnou funkcí: Vnitřní vodič pro přenos dat, vnější \(obalový\) vodič pro odstínění rušení vnějším elektromagnetickým polem 
- Koaxiální kabel je zakončen BNC konektorem 

Kroucená dvoulinka 

- Tvořena páry izolovaných vodičů, vždy po dvou vzájemně zakroucených  
- Nejrozšířenější v LAN sítích 

Optické vlákno 

- Skládá se z vlastního světlovodivého materiálu \(sklo nebo plast s podobnými optickými vlastnostmi\), kolem něho je izolační obal a vně ochranný potah 

*Výhody* 

- Rychlost přenášení dat 
- Odolnost proti elektromagnetickému rušení 
- Vysoká ochrana dat \(nelze jej odposlouchávat\) 

*Nevýhody* 

- Vysoká cena  

*Využití* 

- U páteřních vedení – propojování mezi budovami 

  

PDU \(Protocol data unit\) 

- Má dva významy v telekomunikacích 
	1. Informace přenášená jako jeden celek mezi entitami téže úrovně v počítačové síti\. Obvykle obsahuje řídící informace \(například adresy\) a uživatelská data 
	2. Ve vrstvových systémech jednotka dat definována protokolem určité vrstvy, skládá se z řídící informace a případných uživatelských dat této vrstvy \(Ethernetový rámec, nebo PDU iSCS\) 

PDU v protokolech OSI 

1. PDU vrstvy 1 \(fyzické\) – __je fyzický paket, skládá se z bitů nebo obecněji symbolů __ 
2. PDU vrstvy 2 \(linkové\) –  __je rámec__ 
3. PDU vrstvy 3 \(síťové\) – __je paket__ 
4. PDU vrstvy 4 \(transportní\) – __je TCP segment nebo UDP datagram__ 
5. PDU vrstev 5\-6\-7 \(aplikační\) – __je zpráva__ 
6.   

Konfigurace switche 

- Připojíme switch na napájení 
- Připojíme se sériovým kabelem do konzolového portu 

Pokud na switchi neexistuje startup\-config, tak se spustí průvodce express setup  

  

  

Popis zařízení, vztah ISO/OSI, PDU, konfigurace switche, routeru   

  

  

[https://docs\.google\.com/document/d/1FI08g4GH1LRhFBs\-95\-Wk75kqQ6fK\-vcBf0d\_U\_GE\-0/edit](https://docs.google.com/document/d/1FI08g4GH1LRhFBs-95-Wk75kqQ6fK-vcBf0d_U_GE-0/edit) 

18\) Přepínání v sítích IP 

Přepínané sítě 

- Propojení výpočetních systémů do jedné sítě 
- Může se odehrávat na různých vrstvách ISO modelu \(nejčastěji L2\) 

  

Výhody přepínání 

- __Bezkolizní \->__ vyšší přenosová rychlost 
	- Nedochází ke ztrátám vlivem kolizí 
	- Možnost paralelní komunikace mezi různými dvojicemi segmentů 
- Switch může vynutit více deterministických chování \(např\. podpora pro priority provozu, řízení toku dat atd\.\) 
- Vyšší bezpečnost – k uzlu jsou přenášeny jen ty rámce, které jsou pro něj určeny \(znemožněn odposlech rámců\)  
- Lepší udržovatelnost 
	- Izolace chybových segmentů 
	- Broadcast\-strom control 
	- Intruder detection \(podle zdrojových MAC adres\) 

  

  

  

  

  

Hierarchický model 

- Umožňuje strukturovat a snadněji spravovat a rozšiřovat síť 
- Hierarchický model spočívá v rozdělení sítě na samostatné vrstvy 
- Každá vrstva poskytuje specifické funkce a hraje v celé síti určitou roli 
- Oddělením různých funkcí, které existují v síti, se síť stává modulární, což usnadňuje rozšiřitelnost a výkon 
- __Typický hierarchický model obsahuje tři vrstvy:__ 
	- Přístupovou \(access\) 
	- Distribuční 
	- Jádro 

  

  

Přístupová vrstva \(Access Layer\) 

- Obsahuje koncová zařízení jako PC, tiskárny, IP telefony 
- Poskytuje přístup do zbytku sítě 
- Obsahuje switche, bridge, AP \(přístupové body\) 
- Hlavním účelem přístupové vrstvy je připojit koncová zařízení k síti a kontrolovat, která zařízení mají povoleno v síti komunikovat 

  

Distribuční vrstva \(Distribution Layer\) 

- Agreguje \(spojuje\) datový provoz, který obdrží od přístupové vrstvy předtím, než jej pošle do jádra, kde je poslán do cílové sítě 
- Kontroluje síťový provoz  
- VLANy umožňuje rozdělit provoz v síti do oddělených podsítí 
- Př: Univerzitní síť je možné oddělit provoz pracovníků fakulty, studentů a hostů, což napomáhá vymezit bezpečnostní politiku jednotlivým skupinám 
- Nalezneme zde obvykle velmi výkonná zařízení, která mají vysokou dostupnost a redundanci k zaručení bezporuchovosti 

Jádro 

- Vysokorychlostní páteř sítě 
- Je rozhodující v propojení zařízení distribuční vrstvy 
- Tato vrstva bývá připojena k internetu často více linkami 
- Před posíláním dat do internetu dochází k agregaci dat, takže zařízení musí být schopná posílat velký objem dat velmi rychle 

  

  

  

Pojmy 

Rozšiřitelnost 

- Rozšiřitelnost sítě navrhnuté podle hierarchického modelu je velmi jednoduchá 
- Modularita návrhu umožňuje s rostoucí síti opakovat části návrhu, takže zjednodušuje plánování a implementaci rozšiřování sítě 

 

Redundance \(nadbytečnost\) 

- Znamená funkční nadbytek \(„páté kolo u vozu“\) 
- Dostupnost sítě je klíčovou otázkou 
- Přepínače přístupové vrstvy bývají propojeny dvěma různými switchi __distribuční vrstvy__, takže pokud jeden switch vypadne, provoz je veden přes druhý a nedojde k výpadku sítě 
- Redundance se většinou neřeší v přístupové vrstvě, kdy vypadnutím linky je odříznuté pouze připojené zařízení a zbytek sítě není ovlivněn 

 

Výkon sítě 

- Výkon je zvýšen vyloučením přepínačů s malým výkonem/ 
- Data jsou posílaná mezi přepínači velkou rychlostí danou použitou kabeláží a jsou zpracována výkonnými přepínači 

Bezpečnost  

- Je zlepšena a je jednodušší ji spravovat 
- Porty přepínačů \(switche\) přístupové vrstvy mohou být různě konfigurovány a to poskytuje kontrolu nad tím, kterým zařízením povolí přístup do sítě 
- Dále je zde implementace access listů – definují, které komunikační protokoly jsou povoleny, či zakázány 

Ovladatelnost 

- Je jednoduché, jednoduše se dají změnit funkce na switchi v dané přístupové vrstvě, nebo je nakopírovat na nový switch \(nově přidaný\) a třeba lehce změnit 
- Konzistence mezi switchi ve stejné vrstvě umožňuje rychlou obnovu a jednodušší řešení problému 

Údržba sítě  

- S růstem sítě se údržba značně komplikuje 
- V hierarchickém modelu jsou definovány funkce pro switche v každé vrstvě  

 

Agregace \(sdílení internetu\) 

- Sdílení kapacity internetové linky mezi více uživatelů 
- Umožňuje lepší a levnější využití internetového připojení 
- Pokud je agregace špatně použita dochází k přetížení linky, a to vede ke zpomalení internetu 
- Funguje stejně jako přepážky na poště, když jsou plné uživatel si ve frontě počká 
- Udává se v poměru 1:X \(1:50\), znamená s kolika lidmi se daná linka sdílí \(čím méně tím lépe\) 

   

Vyhrazená linka 

- Linka, která je přímo vyhrazená jen pro jednoho uživatele 
- Nedochází k úbytku rychlosti zapříčiněné jiným uživatelem \(viz\. Agregace\) 

  

STP \(Spanning Tree Protocol\) 

- Síťový protokol, který v ethernetových LAN sítích odstraňuje smyčky 
- Switch s managmentem zjistí pomocí protokolu topologie sítě o odpojí redundantní spoje 
- Protokol také umožňuje aktivovat odpojené spoje v případě, že dojde přerušení aktivní cesty 
- Protokol je standardizován jako IEEE 802\.1D 

  

Funkce protokolu STP 

- Topologii místní LAN sítě zobrazí jako graf, jehož uzly jsou switche \(mosty\) a kabely s koncovými segmenty 
- Cílem redundance prvků je eliminovat výpadek centrálního prvku 
- Tím je docíleno existencí záložních cest 
- Kostra vzniká jako strom nejlepších cest od každého switche k jednomu referenčnímu bodu \(switche\) – root bridge 
- Úkolem protokolu je přerušit všechny redundantní spoje tak, aby zůstala zachována kostra grafu \(spanning tree\) 
- Správce sítě může ovlivnit, jaké spoje se pro kostru grafu vyberou pomocí změny nastavení 
- __Nejmenší náklady__ – doba potřebné pro doručení zprávy  
- __Kořenový most__ – switch s nejnižší prioritou \(priorita mostu \+ MAC\) 
- Nejvýhodnější cesta \(cesta ke kořeni s nejméně náklady\) se používá: 
	- Nejnižší náklady na kořenový most – určuje přepínač s nejnižšími náklady na   

                                                             kořenový most 

-
	- Nejnižší identifikátor mostu – určuje kořenový most 
	- Nejnižší identifikátor odesílatele – v případě více switchu, které mají stejné náklady  

 

 

 

 

                                                        na kořenový most 

Bridge Protocol Data Unit \(BPDU\) 

- Switche si potřebují vzájemně vyměňovat informace, aby mohli rozhodnout o rolích portů a provést volbu root switche \(kořenový switch\), využívá STP přeposílání zvláštního typu rámců, které jsou přijímány i blokovanými porty 
- Tyto rámce jsou označovány BPDU a obsahují různé informace: 
	- Protocol ID, Protocol version, BPDU type, Flags, Hello time, Forward delay atd\. 

*Typy BPDU rámců* 

- __Konfigurační BPDU__ – využívají se při výpočtu kostry grafu a pro poskytnutí těchto informací všem přepínačům 
- __Topology Change Notification \(TCN\)__ – informace o změně v síťové topologii 
- __Topology Change Acknowledgment \(TCA\)__ – potvrzení příjmu zprávy TCN 

  

  

  

Stavy protokolu STP 

- __Blocking__ – kdyby byl tento port aktivní, způsobil by smyčku v síti\. Nepřeposílají se přes něj žádná uživatelská data, ale stále se přijímají BPDU rámce 
- __Listeting__ – switch přijímá i zasílá BPDU a vyčkává na informace, které by způsobily návrat portu do blokujícího stavu\. Ve stavu listening nedochází k naplňování tabulky MAC adres a nepřeposílají se datové rámce 
- __Learning__ – v tomto stavu port stále nepřeposílá rámce, ale již naplňuje tabulku MAC adres podle přijatých rámců 
- __Forwarding__ – port umožňuje příjem i odesílání dat, ale stále monitorují BPDU, které by donutily přejít port do blokujícího stavu v případě smyčky 
- __Disable__ – port je vypnut 

  

  

  

*Nestabilita tabulky MAC adres a problémy s konektivitou * 

- Z důvodu existence smyček je zpráva doručena na switch z více portů 
- Switch je tak nucen stále měnit adresu zdroje zprávy 
- Z tohoto důvodu může dojít k nedoručení zprávy 
-  

Následky smyček 

*Broadcastové bouře* 

- Množství broadcastu postupně roste, až dosáhne kritického množství a dojde k zahlcení sítě 

*Několikanásobné doručení* 

- Opakem předchozího problému je několikanásobné doručení zprávy, která z důvodu existence smyčky koluje v síti stále dokola 

  

Konvergence STP 

- Konvergence je čas, než port projde ze stavu blocking do forwarding 
- Ke konvergenci dochází vždy při změně topologie, tedy při připojení či odpojení switche/portu nebo změně konfigurace STP 
- Standardně takový port začne komunikovat až po 50 sekundách, stejně tak při výpadku jedné linky dojde k překlopení na záložní linku až po této době 

  

  

  

RSTP \(Rapid Spanning Tree Procol\) 

- Hlavní dobou protokolu STP je dlouhá doba konvergence, dosahuje hodnot \(30\-50 s\) 
- SRTP značně snižuje dobu konvergence při změnách v síti 
- V případě výpadku je schopen zkonvergovat v době trojnásobku Hello time intervalu \(2s\) nebo v řádu milisekund po výpadku fyzické linky 
- Blokovaný port je rozdělen na backup \(záložní\) a alternate \(náhradní\) 

  

  

Konfigurace switche 

- Připojíme switch na napájení 
- Připojíme se sériovým kabelem do konzolového portu 

Pokud na switchi neexistuje startup\-config, tak se spustí průvodce express setup 

  

[http://wh\.cs\.vsb\.cz/sps/images/7/72/Rstpm\.pdf](http://wh.cs.vsb.cz/sps/images/7/72/Rstpm.pdf)  \(Spanning tree\) 

  

Přepínané sítě, hiearchický model, redudance, agregace, STP, RSTP, konfigurace switche, bezpečnost  

19\) Virtuální LAN

Význam VLAN 

- Virtuální LAN slouží k logickému rozdělení sítě nezávislém na fyzickém uspořádání 
- Můžeme tedy naši síť segmentovat na menší sítě uvnitř fyzické struktury původní sítě 
- Cílem je učinit logickou organizaci sítě nezávislé na fyzické vrstvě, čímž lze usnadnit správu sítě, zvýšit její výkon a podpořit bezpečnost 
- Obvykle bývá realizována switchem, jehož porty se rozdělí na několik logicky samostatných částí 
- Jednoduše řečeno pomocí VLAN můžeme dosáhnout stejného efektu, jako když máme skupinu zařízení připojených do jednoho \(několika propojených\) switche a druhou skupinu do jiného \(jiných\) switche\. Jsou to dvě nezávislé sítě, které spolu nemohou komunikovat \(jsou fyzicky odděleny\)\. Pomocí VLAN můžeme takovéto dvě sítě vytvořit na jednom \(nebo několika propojených\) switchi\. 
- S VLAN můžeme pracovat stejně jako s normálními sítěmi, tedy použít mezi nimi jakýkoliv způsob routování 
- Často se využívá L3 switch \(switch, který funguje na třetí vrstvě ISO/OSI\) pro inter\-VLAN routing – směrování mezi VLAN 

Vysvětlení VLAN 

- Máme dvě patra, na každém patře je switch, switche jsou propojeny páteří s trunkem 
- Chceme propojit zařízení do dvou nezávislých skupin \(modrá – __VLAN10__ a červená __VLAN2__0\)\. Pomocí VLAN je to jednoduché\. Tradičně bychom museli mít switche oddělené a každou skupinu \(modrou a červenou\) propojit do jednoho switche, což by byl problém, protože jsou na různých patrech\. 

  

 

- Pro propojení mezi přepínači \(switchi\), je realizováno pomocí tzv\. trunk linek 
	- Jako jediné dokáží přenášet rámec všech VLAN sítí 
	- Aby mohl být rámce na druhé straně opět zařazeny do příslušné VLAN sítě, je potřeba přidat do jeho hlavičky informaci o VLAN ID 

Switche kontroluje, že spolu mohou navzájem komunikovat pouze porty zařazené ve stejné VLAN 

- Switch dělí kolizní doménu a vytváří jednu pro každé připojené zařízení 
	- __Výrazné omezení kolizí v sítí__ 
	- __Větší propustnost sítě__ 

Počítačová síť – WAN, LAN 

- Počítačová síť vznikne ve chvíli, kdy se dva \(někdy se říká minimálně tři\) nebo více počítačů propojí dohromady pomocí telekomunikačního systému za účelem sdílení zdrojů\.  
- Sítě se dále dělí podle řády parametrů na LAN, WAN, WLAN, MAN apod\.  
- LAN se vyznačuje tím, že počítače jsou propojeny na menším geografickém území \(tedy v rámci firmy, budovy, místnosti apod\.\) 
- Pro LAN se nejčastěji používá technologie Ethernet s protokolem TCP/IP a pro WAN \(Wide Are Network – propojení jednotlivých LAN\) technologie Frame Relay 

Podsíť – subnet 

- TCP/IP protokol používá pro adresování zařízení IP adresy 
- Těchto adres je určitý rozsah, který se pro praktické použití \(směrování, přidělování adres organizacím, broadcasty\) dělí na menší hierarchické části, kterým se říká subnety \(podsítě\) 
- Zařízení mohou přímo komunikovat pouze s dalšími zařízeními, které jsou ve stejném subnetu\. Se zařízeními z jiných subnetů komunikují typicky přes jednu adresu – gateway \(bránu\), která provádí routování 

Oddělení sítí 

- Pokud použijeme různé subnety, tak zařízení spolu nemohou komunikovat 
- Ale pokud jsou připojena na stejném médiu \(hub, switch\), tak komunikace dorazí z jednoho zařízení na druhé, i když jsou v jiném subnetu\. Zařízení však bude tuto komunikaci ignorovat 
- Hub posílá všechno všude a switch \(používá MAC adresy\) se nedívá na IP adresy procházející komunikací 
- Pokud tedy chceme mít oddělené sítě musíme použít oddělené switche 
- Kdežto použitím VLAN dojde k tomu, že komunikace se posílá pouze na porty, které jsou zařazeny do stejné VLANy\. 

Subnety a VLANy 

- Pro různé VLANy bychom měli použít různé subnety 

Proč vznikly VLANy 

- Hlavní důvody byly asi tyto: 
	- __Seskupení uživatelů__ v síti podle skupin či oddělení podle služeb místo podle fyzického umístění a oddělení komunikace mezi těmito skupinami 
	- __Snížení broadcastu__ v síti, které začaly být problém již před několika lety 
	- __Zmenšení kolizních domén__ v době, kdy se nepoužívali switche, ale třeba huby 
- __Idea pro logické seskupování uživatelů, a tedy vytváření VLAN je:__ 
	- __Podle organizační struktury__ – pokud většina komunikace v rámci oddělení, kde jsou vlastní tiskárny, file servery atd\. a mezi jednotlivými odděleními není komunikace, pouze pár služeb \(mail\) je společných pro všechny 
	- __Podle služeb__ – do VLAN se seskupují pracovníci, kteří využívají stejné služby \(účetnictví, DB atd\.\)  

__ __ 

  

  

Praktické výhody VLAN 

- __Snížení broadcastů__ – hlavní výhodou VLAN je vytvořit více, ale menších broadcastových domén\. Tedy zvýšení výkonu sítě snížením provozu \(traffic\) 
- __Zjednodušená správa__ – k přesunu zařízení do jiné sítě stačí překonfigurovat zařazení do VLANy, tedy správce konfiguruje SW \(zařazení do VLAN\) a ne HW \(fyzické přepojení\) 
- __Zvýšená zabezpečení__ – oddělení komunikace do speciální VLANy, kam není jiný přístup\. Toho se dá také samozřejmě dosáhnout použití samostatných switchů 
- __Oddělení speciálního provozu__ – dnes se používá řada provozu, který nemusí být propojen do celé sítě\. Můžeme dané prvky rozdělit do své vlastní VLANy 
- __Snížení HW__  

Zařazení komunikace do VLAN 

- Přiřazení do VLANy se typicky nastavuje na switchi 
- Pokud zařízení podporuje VLANy, vždy existuje alespoň jedna VLAN \(defaultní VLAN\), kterou není možné smazat či vypnout 
- Pokud nenastavíme jinak, všechny porty a komunikace je zařazena do VLAN 1 
- Pro zařazení komunikace do VLANy existují čtyři základní metody, v praxi je nejvíce využívaná první – zařazení dle portu 

1. Podle portu 

- Port switche je ručně a napevno zařazen \(nakonfigurován\) do určité VLANy 
- Veškerá komunikace, která přichází přes tento port, spadá do zadané VLANy 
- Pokud do portu připojíme další switch, tak všechny zařízení připojená k němu budou v jedné VLANě 
- Jedná se o nejrychlejší a nejpoužívanější řešení 

1. Podle MAC adresy 

- Rámce \(port\) se zařadí do VLANy podle zdrojové MAC adresy 
- Musíme tedy spravovat tabulku se seznamem MAC adres pro každé zařízení spolu s VLANou 
- Výhodou je, že se jedná o dynamické zařazení, takže pokud přepojíme zařízení do jiného portu, automaticky se zařadí do správné VLANy 
- Switch musí vyhledávat v tabulce MAC adres 
-  

1. Podle protokolu = podle informace z 3\. vrstvy 

- Tato metoda určuje zařazení podle protokolu přenášeného paketu 
- Například oddělíme IP provoz od AppleTalk\. Nebo zařazujeme podle IP adresy či rozsahu 
- V praxi není příliš rozšířené\. Zařízení musí mít napevno definovanou IP adresu a switch se musí dívat do třetí vrstvy \(normálně pracuje na druhé\), znamená to zpomalení 

1. Podle Autentizace 

- Ověří se zařízení nebo uživatel pomocí protokolu IEEE 802\.1x a podle informací se automaticky umístí do VLANy 

  

  

Komunikace v rámci VLAN 

VLANy na jednom switchi 

- Switch si v operační paměti udržuje infromace do které VLANy patří daná komunikace \(port\), a v rámci switche povoluje pouze správné směrování 

VLANy mezi více switchi 

- Díky standartu IEEE 802\.1q, který využívá značkování rámců 
- Označuje se komunikace jen ve chvíli, kdy je to třeba 
- Značení se přidává ve chvíli, kdy chceme poslat komunikaci dalšímu switchi \(či podobnému zařízení\) 
- Odchozí komunikace se taguje na portu, kterému se říká trunk port\. Tetnto port přenáší více \(vybraných\) VLAN a aby je mohl odlišit, tak je označuje\. 
- Spoji dvou trunk portů se říká trunk nebo trunk link 

  

Konfigurace VLAN 

- VLANy se běžně identifikují pomocí čísla, takže máme například VLAN 10 
- Pro jednoduší zapamatování a orientaci se k nim ještě přiřazují jména 

 

 

 

 

 

  

  

 

 

 

 

 

 

 

 

  

VTP \(Vlan Trunking Protocol\) 

- Většinou chceme, aby vytvořené VLANy existovaly v celé síti \(nebo v určité části, ale ne pouze na jednom switchi\)\. Pro přenášení dat v těchto VLANách se využívají trunky 
- Aby se však dalo s těmito VLANami pracovat, tak musí být vytvořené na každém switchi 
- Při vytvoření VLANy se musí opět všude nakonfigurovat 
- Můžeme využít VTP protokol, což je L2 protokol, který slouží k přenášení informací o VLANách mezi switchi\. 
- VTP spravuje přidávání, mazání a přejmenování VLAN uvnitř VTP domény 
- VTP doména je tvořena jedním nebo více síťovými zařízeními, které mají nastaveno stejné jméno domény a jsou propojeny pomocí trunku 
- Princip, je takový, že každý switch ve VTP doméně má nastavený jeden ze tří módů: 
	- __Server__ – spravuje seznam všech VLAN, má jej uložen v NVRAM, může vytvářet a mazat VLANy, přijímá a odesílá oznámení přes trunky ve VTP doméně, jedná se o defaultní mód 
	- __Klient__ – přijímá konfiguraci ze serveru, udržuje lokální kopii všech VLAN, kterou nelze měnit nemá ji uloženou v NVRAM, přijímá a odesílá oznámení 
	- __Transparentní__ – neúčastní se VTP, pracuje samostatně, může vytvářet i mazat VLANy, ale změny jsou lokální, přijímá oznámení a ve verzi 2 je i přeposílá \(ale nesynchronizuje svoje VLANy, ani je nezveřejňuje\), je to jediný mód, kde může vytvářet Extended a Private VLANy a VLAN konfigurace je uložena v NVRAM 
- Server rozesílá \(pouze přes trunky\) VTP advertisements \(oznámení\) každých 5 minut nebo při změně v konfiguraci 
- Server udržuje konfigurační revizní číslo \(configuration revision number\), které při každé změně zvýší o jedna\. Klient při synchronizaci porovnává svoje a přijaté číslo\. 
- VTP oznámení \(advertisements\) obsahuje: managment domain, revision number, verzi VTP, známé VLANy a jejich parametry 
- Jsou tři typy oznámení: Summary, Subnet a Client Request 

  

  

Nasazení STP, RSTP 

- Cílem redundance prvků je eliminovat výpadek centrálního prvku 
- Tím je docíleno existencí záložních cest 

Kostra vzniká jako strom nejlepších cest od každého switche k jednomu referenčnímu bodu \(switche\) – root bridge 

Inter VLAN Routing \(Směrování mezi VLAN\) 

- VLAN se chovají jako klasické fyzické sítě, pro směrování mezi nimi tedy potřebujeme mít každou síť zapojenou do routeru 
- Jednotlivé VLANy tedy zapojíme do routeru, ten si je zapíše do směrovací tabulky a směruje 

STP \(Spanning Tree Protocol\) 

- Síťový protokol, který v ethernetových LAN sítích odstraňuje smyčky 
- Switch s managmentem zjistí pomocí protokolu topologie sítě o odpojí redundantní spoje 
- Protokol také umožňuje aktivovat odpojené spoje v případě, že dojde přerušení aktivní cesty 
- Protokol je standardizován jako IEEE 802\.1D 

  

Funkce protokolu STP 

- Topologii místní LAN sítě zobrazí jako graf, jehož uzly jsou switche \(mosty\) a kabely s koncovými segmenty 
- Cílem redundance prvků je eliminovat výpadek centrálního prvku 
- Tím je docíleno existencí záložních cest 
- Kostra vzniká jako strom nejlepších cest od každého switche k jednomu referenčnímu bodu \(switche\) – root bridge 
-   
- Úkolem protokolu je přerušit všechny redundantní spoje tak, aby zůstala zachována kostra grafu \(spanning tree\) 
- Správce sítě může ovlivnit, jaké spoje se pro kostru grafu vyberou pomocí změny nastavení 
- Nejmenší náklady – doba potřebné pro doručení zprávy  
- Kořenový most – switch s nejnižší prioritou \(priorita mostu \+ MAC\) 
- Nejvýhodnější cesta \(cesta ke kořeni s nejméně náklady\) se používá: 
	- Nejnižší náklady na kořenový most – určuje přepínač s nejnižšími náklady na   

                                                             kořenový most 

-
	- Nejnižší identifikátor mostu – určuje kořenový most 
	- Nejnižší identifikátor odesílatele – v případě více switchu, které mají stejné náklady  

                                                        na kořenový most 

Bridge Protocol Data Unit \(BPDU\) 

- Switche si potřebují vzájemně vyměňovat informace, aby mohli rozhodnout o rolích portů a provést volbu root switche \(kořenový switch\), využívá STP přeposílání zvláštního typu rámců, které jsou přijímány i blokovanými porty 
- Tyto rámce jsou označovány BPDU a obsahují různé informace: 
	- Protocol ID, Protocol version, BPDU type, Flags, Hello time, Forward delay atd\. 

*Typy BPDU rámců* 

- __Konfigurační BPDU__ – využívají se při výpočtu kostry grafu a pro poskytnutí těchto informací všem přepínačům 
- __Topology Change Notification \(TCN\)__ – informace o změně v síťové topologii 
- __Topology Change Acknowledgment \(TCA\)__ – potvrzení příjmu zprávy TCN 

  

 

Stavy protokolu STP 

- __Blocking__ – kdyby byl tento port aktivní, způsobil by smyčku v síti\. Nepřeposílají se přes něj žádná uživatelská data, ale stále se přijímají BPDU rámce 
- __Listeting__ – switch přijímá i zasílá BPDU a vyčkává na informace, které by způsobily návrat portu do blokujícího stavu\. Ve stavu listening nedochází k naplňování tabulky MAC adres a nepřeposílají se datové rámce 
- __Learning__ – v tomto stavu port stále nepřeposílá rámce, ale již naplňuje tabulku MAC adres podle přijatých rámců 
- __Forwarding__ – port umožňuje příjem i odesílání dat, ale stále monitorují BPDU, které by donutily přejít port do blokujícího stavu v případě smyčky 
- __Disable__ – port je vypnut 

  

  

  

*Nestabilita tabulky MAC adres a problémy s konektivitou * 

- Z důvodu existence smyček je zpráva doručena na switch z více portů 
- Switch je tak nucen stále měnit adresu zdroje zprávy 
- Z tohoto důvodu může dojít k nedoručení zprávy 

Následky smyček 

*Broadcastové bouře* 

- Množství broadcastu postupně roste, až dosáhne kritického množství a dojde k zahlcení sítě 

*Několikanásobné doručení* 

- Opakem předchozího problému je několikanásobné doručení zprávy, která z důvodu existence smyčky koluje v síti stále dokola 

  

Konvergence STP 

- Konvergence je čas, než port projde ze stavu blocking do forwarding 
- Ke konvergenci dochází vždy při změně topologie, tedy při připojení či odpojení switche/portu nebo změně konfigurace STP 
- Standardně takový port začne komunikovat až po 50 sekundách, stejně tak při výpadku jedné linky dojde k překlopení na záložní linku až po této době 

 

RSTP \(Rapid Spanning Tree Procol\) 

- Hlavní dobou protokolu STP je dlouhá doba konvergence, dosahuje hodnot \(30\-50 s\) 
- SRTP značně snižuje dobu konvergence při změnách v síti 
- V případě výpadku je schopen zkonvergovat v době trojnásobku Hello time intervalu \(2s\) nebo v řádu milisekund po výpadku fyzické linky 
- Blokovaný port je rozdělen na backup \(záložní\) a alternate \(náhradní\) 

20\) Směrování v sítích IP

- Routing \(česky routování\) 
- Je využíváno v lokálních sítích \(LAN\) a i na internetu 
- Označuje určování cest datagramů v prostředí počítačových sítí 
- Směrování zajišťuje např\. routery, a to pomocí síťové vrstvy modelu ISO/OSI 
- Pro uživatelské sítě, je směrovací proces, pomocí kterého se určuje cesta paketu z výchozího uzlu do cílového uzlu 

Základní pojmy 

- __Router__ – směrovač 
- __Routing__ – routování, přeposílání \(forwarding\) dat mezi sítěmi 
- __Route__ – cest, která se použije, zapsaná v routovací tabulce 
- __Routing table__ – směrovací tabulka, v níž jsou záznamy kam směrovat pakety 
- __Routing protocol__ – routovací protokol slouží ke směrování routovaného protokolu, určuje nejlepší cestu k cíli a posílá routovací informace dalším routerům 
- __Routed protocol__ – routovaný protokol je IP, IPX nebo Apple Talk 
- __Next Hop__ – další směrovač, přes který se dostaneme k cíli 
- __Administrative distance__ – číslo mezi 0 a 255, které identifikuje, jak je daná cesta výhodná 
- __Router on stick__ – je router, který je připojená do switche pomocí jednoho trunk portu – tzn\. Máme pouze jeden router a pouze jednu linku, což přináší velkou zátěž na router i linku a problémy při výpadku 

Základy směrování 

- Propojení sítí LAN a WAN se směrovačem dojde k vytvoření datové sítě 
- Pro vzájemnou komunikaci hostitelů musíme nakonfigruvoat logické síťové adresy \(např\. IP adresy\) 
- Termín směrování \(routing\) označuje předání paketu z jednoho zařízení a odeslání tohoto paketu jinému zařízení v odlišné síti 
- Routery složí k propojení sítí a nelezení optimální trasy do každé sítě 
- Router pro tuto činnost pracuje s těmito informacemi: 
	- Cílová adresa, 
	- Sousední routery, od kterých lze zjistit data o vzdálených sítích 
	- Možné trasy do všech vzdálených sítí 
	- Optimální trasa do každé vzdálené sítě 
	- Způsob údržby a kontroly informací o směrování 

Metody směrování 

Static routing \(statické\) 

- Při statickém směrování administrátor vloží směrovací informace do směrovací tabulky 

*Výhody* 

- Nezpůsobuje žádnou režii routeru 
- Mezi routery se nespotřebovává šířka pásma datovými přenosy 
- Toto směrování zvyšuje bezpečnost 

*Nevýhody* 

- Při konfiguraci se správce může dopustit chyby 
- Pokud je do datové sítě přidána další síť, musí být doplněna trasa do této sítě ručně 
- Pouze pro menší sítě 

 

Default routing \(výchozí\) 

- Díky výchozí bráně nemusíme mít ve směrovací tabulce explicitně \(přímou\) definovanou cestu ke všem sítím\. Výchozí brána může být definována staticky nebo dynamicky 

Dynamic routing \(dynamické\) 

- Tento druh směrovaní dynamicky vytváří záznamy ve směrovací tabulce, používá při tom informace získané směrovacími protokoly 

Dynamické routování 

Distance\-vector routing protocol 

- Routery udržují routovací tabulku s informací o \(vektoru\) vzdálenosti do dané sítě, periodicky routovací tabulku zasílají sousedům, ti si upravují svoji tabulku a tu opět odešlou dále, pro výpočet nejlepší cesty se používá jedna \(počet hopů u RIP\) nebo více metrik \(propustnost linky a zpoždění u IGRP\)\.  
- Upraveným typem distance\-vector protokolu je path\-vector protocol 

Link\-state routing protocol 

- Routery udržují komplexní databázi síťové topologie \(vytvořeno pomocí LSA\), vyměňují si link\-state advertisements \(oznámení\) \(LSA\) 
- LSA jsou vyvolány nějakou událostí v síti, do svého okolí také odesílá Hello pakety, kde zasílá informace o sobě, rychle reaguje na změny topologie, ale spotřebovává více pásma a zdrojů na routeru, metrika je komplexní, nejlepší cesta se počítá pomocí Dijsktrova algoritmu shortest path first \(SPF\) 

Autonomní servery \(AS\) 

- Dynamické protokoly dělíme podle toho, zda jsou určeny pro nasazení uvnitř lokální sítě \(přesněji řečeno uvnitř autonomního serveru \(AS\), který může obsahovat několik LAN\) nebo fungují napříč sítěmi \(spojují AS dohromady\) 

IGP \(Interior gateway protocol\) 

- Routruje uvnitř Autonomous System \(AS\) 

EGP \(Exterior gateway protocol\) 

- Routuje mezi AS 

  

  

  

Obecné termíny 

VLSM \(Variable Lenght Submet Mask\) 

- Používá se v Classes Inter\-Domain Routing \(CIDR\) 
- V tomto případě můžeme v subnetu použít různé velikosti masky 

Autonomous Systém – AS \(Autonomní server\) 

- Je skupina IP sítí a routerů, které jsou pod správou jedné nebo více jednotek 

Split horizon 

- Metoda, která slouží k zamezení vzniku smyček v Distance Vector Routing protokolech 
- Používá se u RIP, IGRP a EIGRP 
- Funguje tak, že zakazuje posílání routovací cesty zpět na rozhraní, z kterého se naučila 

Hold\-down timer 

- Metoda, která zabraňuje zbytečnému nebo předčasnému rozesílání routovacích cest v nestabilním prostředí 
-  Router čeká určitý čas, než je síť stabilní 

  

Výchozí směrování \(Default route\) 

- Je staticky definována cesta, která se použije v případě, že se záznam o cílové adrese paketu nenachází v směrovací tabulce 

Směrovací tabulka \(routing table\) 

- Velice důležitá součást směrování 
- Má jí každý uzel sítě \(tedy jakýkoliv PC\) 
- Tato tabulka říká, na které rozhraní poslat paket podle jeho cílové adresy 
- Jedná se tedy o tzv\. směrování podle cíle 

Princip směrovací tabulky 

- Router příjme datový rámec, 
- podívá se, ze kterého protokolu obsahuje paket a __nezná\-li daný protokol rámec zahodí\.__ 
- __Pokud router zná protokol__, např\. v případě IP, přečte si z jeho hlavičky cílovou IP adresu\.  
- Pak podle předem daných pravidel projde směrovací tabulku a najde rozhraní, ke kterému má připojenou síť, do níž paket přepošle\. 
- Především jde o to, přeposlat paket správným směrem\. A pokud se nenajde vhodné rozhraním zvolí výchozí bránu\. 

 

 

 

 

 

 

 

 

Metrika 

- Je číselné vyjádření kvality, ceny cesty 
- Pokud je více cest do jedné cílové sítě, vybírá se cesta s nejmenší metrikou – nejlevnější cesta 
- Metriky se u směrovacích protokolů používají různě: 
	- __Počet skoků__ – jednoduchá metrika \(počet routerů, přes které musí packet cestovat\) 
	- __Digitální přenosová rychlost__ 
	- __Přenosová kapacita__ 
	- __Šířka pásma__ – při výběru cesty se preferuje linka s větší přenosovou rychlostí 
	- __Zatížení__ – bere v úvahu vytížení dané linky síťovým provozem 
	- __Spolehlivost__ – vyhodnocuje pravděpodobnost výskytu chyby na lince, vypočteno z počtu chyb v rozhraní nebo předchozí selháních linky 
	- __Cena__ – hodnota bývá určena administrátorem vyznačující preferování dané cesty 
- Metrika následujících protokolů je: 
	- __RIP__ – počet skoků \(jako nejlepší cesta je vybrána směr s nejnižším počtem skoků\) 
	- __IGRP a EIGRP__ – Přenosová rychlost \(přenosová kapacita\), zpoždění, spolehlivost a zatížení \(jako nejlepší cesta je vybrán směr s nejmenší hodnotou složené metriky, vypočtené z více různých parametrů\) 
	- __IS\-IS a OSPF__ – Cena \(jako nejlepší cesta je vybrán směr s nejmenší cenou\) 

Administrativní vzdálenost \(AD\) 

- Slouží k odlišení metriky u cest \(na jednom routeru\) získaných z různých směrovacích protokolů 
- AD vyjadřuje kvalitu celého směrovacího protokolu, někdy se také říká důvěryhodnost cesty 
- Pokud existuje více cest do jedné cílové sítě, vybírá se cesta, která má nejmenší administrativní vzdálenost, pokud je více cest se stejnou AD, vybírá se cesta s nejmenší metrikou 

Výchozí brána \(gateway\) 

- Označuje se tím router, přes který se PC dostanou do vnější sítě \(obvykle do Internetu\) 

  

 

Směrovací protokoly 

Klíčové komponenty 

- __Datové struktury__ – některé směrovací protokoly používají pro svou činnost tabulky nebo databáze\. Tyto informace jsou uloženy v RAM 
- __Algoritmus__ – algoritmus je konečný seznam kroků potřebných k dosažení určitého cíle\. Směrovací protokoly používají algoritmy pro získání směrovacích informací a pro určení nejlepší cesty 
- __Zprávy směrovacího protokolu \(Routing Protocl Messages\)__ – směrovací protokoly používají různé typy zpráv ke zjištění sousedních směrovačů, výměnu směrovacích informací a další úkoly, aby zjistily a udržely správné informace o síti 

Autonomní systém \(směrovací doména\) 

- Oblast s jednou směrovací politikou – jednou správnou směrování \(jeden ISP \(Internet Service Provider\), jedna firma\) 

Klasifikace dynamických směrovacích protokolů: 

  

Rozdělení protokolů 

- __Vnitřní směrovací protokoly__ \(Interior Gateway Protocols, IGP\) – se používají uvnitř jednoho autonomního systému 
- __Vnější směrovací protokoly__ \(Exterior Gateway Protocols, EGP\) – se používají pro směrování mezi různými autonomními systémy 

  

Účel směrovacího algoritmu 

1. Vysílání a příjem směrovacích aktualizacích  
2. Výpočet nejlepší cesty a její umístění do směrovací tabulky 
3. Detekce změn topologie a reakce na tyto změny 

Směrování třídní versus beztřídní 

- __VLSM__ – adresování s maskou podsítě proměnní délky 
- __Třídní__ \(classful\) – v celé topologii sítě jsou stejné masky podsítě \(CIDR, Classes Inter\-Domain Routing\)\. Sítě nesmí být nesouvislé, musí být souvislé – nepodporuje VLSM 
- __Beztřídní__ \(classless\) – V topologii může být více různých masek podsítě \(podporuje VLSM, Variable Lenght Subnet Masking\)\. Sítě mohou být nesouvislé 

Routovací protokoly 

RIP \(Routing Information Protocol\) 

- Jednoduchý pro konfigurace a funguje vše 
- Pro malé střední sítě 
- RIP 1 nepodporuje VLSM 
- Plýtvá pásmem \(velká režijní komunikace 
- Pomalá konvergence  
- Hloupá metrika – počet hopů 
- Posílá celou routovací tabulku svým sousedům 
- Maximálně 15 hopů 

IGRP \(Interior Gateway Routing Protocol\) 

- Proprientární \(=software s uzavřeným kódem\) Cisco protokol 
- Nepodporuje VLSM 
- Jako metriku používá cenu, záleží na pásmu a zpoždění 
- Maximální počet hopů 255 

EIGRP \(Enhaced Interiror Gateway Routing Protocol\) 

- Proprientární Cisco protokol 
- Rychlá konvergence 
- Redukuje spotřebu pásma pro routovací updaty 
- Podporuje různé protokoly \(Apple Talk, IPX, IP\) a VLSM 
- Routovací update se vyměňují pouze mezi routry ve stejném AS 
- Maximální počet hopů 255 
- Bez smyček 

OSPF \(Open Shortest Path First\) 

- Hierarchický systém – jedna nebo více oblastní je spojena k páteřní oblasti \(oblast 0\) 
- Routry posílají linkstate \(pásmo a stav intrefacu\) informace všem sousedním routerům v oblasti 
- Routry vytvářejí databázi topologie, což je model celé oblasti 
- Z databáze se pomocí Dijsktry vypočítá nejkratší cesta a zapíše se do routovací tabulky 
- Neomezený počet hopů 
- Určeno pro rozsáhlé sítě heterogenní sítě 
- Podporuje VLSM 

Static routing 

- Používá se například mezi ISP a firmou, není zde třeba, aby běhal složitý routovací prtokol 
- Pro každou síť je vložen záznam do routovací tabulky 
- Žádná zátěž 
- Pouze pro malé sítě 

Default routing 

- Může se použít pouze na kraji sítě, kde je jeden port, který vede mimo síť 
- Pokud není definována jiná cesta k dosažení cíle, tak se použije defaultní routa, což je gateway 

21\) Směrovací protokoly 

Směrovací protokoly 

Směrovací tabulka 

- Je databáze, která má hierarchickou strukturu\. Důvodem je rychlý postup vyhledávání v ní 
- Tato struktura má několik úrovní 
- Její obsah na routeru zobrazíme příkazem: show ip route 
- V routovací tabulce mohou být směry trojího druhu: 
	- Přilehlý, přímo připojený – kod C 
	- Statický – kod C 
	- Dynamický – kody R\(RIP\), D\(EIGRP\), O\(OSPF\) atd\. 

Směrovací protokoly typu vektor vzdálenosti 

- Dynamické směrovací protokoly administrátorovi šetří čas nutný pro časově náročné a přesné konfigurování i údržbu statických cest 
- Účel směrovacího algoritmu: 
	- Vysílání a příjem směrovacích aktualizací 
	- Výpočet nejlepší cesty a její umístění do směrovací tabulky 
	- Detekce změn topologie a reakce na tyto změny 
- Protokoly typu vector\-distance \(s routovacím algoritmem: 
	- RIP, IGRP, EIGRP 

Význam vektoru vzdálenosti \(vector\-distance\) 

- Znamená, že cesty \(směry\) jsou inzerovány jako vzdálenost a směr 
- Vzdálenost je definována metrikou jako počet skoků a směr je router dalšího skoku 
- Router používá vector\-distance a nemá vědomost o celé cestě do cílové stanice 
- Router zná pouze: 
	- Směr nebo rozhraní, kterým by měl být paket přeposlán 
	- Vzdálenost neboli jak je do cílové sítě daleko 
- __VLSM__ – IP adresy jsou v podsítích jiné podsítě \(masky jsou různé\), snižuje plýtvání IP adresami 
- __CIDR__ – IP adresy jsou v podsítích třídní adresy a všechny masky jsou stejné \(adresní bloky jsou stejně velké\), mírně snižuje plýtvání adresami 

 

RIPv1 

- Protokol typu vector\-distance 
- Používá UDP \(port 520\) 
- Třídní protokol \(Classful protocol\) – nepodporuje VLSM 
- Metrika = počet skoků 
- __Maximální počet skoků je 15__, nedosažitelné cesty mají metriku 16\. Cesty s počtem skoků větší než 15 jsou inzerované jako neplatné, nedostupné 
- Periodické směrování aktualizace jsou vysílány všesměrově \(broadcast\) každých 30 sekund 
- Nepodporuje autentizaci 
- Implementuje automaticky spouštěné aktualizace při změně přímo připojené sítě 
- Administrativní vzdálenost RIPv1 \(i verze 2\) je 120 
- Použití: pouze v malých sítích, nebo na okraji velkých sítí 
- Zpráva RIPv1 \(ve čtyřbajtovém záhlaví jsou 3 pole\): 
	- __Pole Příkaz \(Command\)__ – určuje typ zprávy 
	- __Pole Verze \(Version\)__ – je nastaveno na 1 pro RIP verze 1 
	- __Pole „Musí být nula“ \(Must be Zero\)__ – poskytuje prostor pro budoucí rozšíření protokolu 

Omezení RIPv1: 

- Nepodporuje nesouvislé \(tranzitní sítě\) 
- Nepodporuje VLSM 

RIPv2 

- Protokol typu vector\-distance 
- Používá UDP \(port 520\) 
- Beztřídní směrovací protokol \(podporuje CIDR i VLSM\) 
- Metrika – počet skoků 
- Maximální počet skoků je 15, nedosažitelné cesty mají metriku 16\. Cesty s počtem skoků větší než 15 jsou inzerované jako neplatné, nedostupné 
- Periodické směrování aktualizace jsou vysílány všesměrově \(broadcast\) každých 30 sekund 
- Podporuje autentizaci 
- Implementuje automaticky spouštěné aktualizace při změně přímo připojené sítě 
- Použití: pouze v malých sítích, nebo na okraji velkých sítí 
- Velkou změnou je podpora přenášení informací o masce \(tedy CIDR\) 

EIGRP \(Enhaced Interiror Gateway Routing Protocol\) 

- Proprientární Cisco protokol 
- Rychlá konvergence 
- Metrika – složená \(šířka pásma, zpoždění\) 
- Redukuje spotřebu pásma pro routovací updaty 
- Podporuje různé protokoly \(Apple Talk, IPX, IP\) a VLSM 
- Routovací update se vyměňují pouze mezi routry ve stejném AS 
- Maximální počet hopů 255 
- Bez smyček 

  

Typy paketů EIGRP 

- __Aktualizace \(Update\)__ – obsahují pouze změny, nejsou periodické, vysílané unicast/multicast \(podle počtu adresátů\), aktualizace jsou: 
	- Vázané, omezené – aktualizace jsou posílány pouze na router, na který má tato změny vliv 
	- Částečné – aktualizace obsahují pouze změny topologie 
- __Dotaz \(Query\)__ – hledání sítí, další úkoly, unicast nebo multicast 
- __Opověď na dotaz \(Reply\)__ – odpověď, vždy unicast 
- __Kontaktní paket \(Hello\)__ – hledání, identifikace a verifikace sousedních routerů \(EIGRP ve stejném autonomním systému\), multicast, datagram 
- Číslo autonomního systému \(AS number\) – určuje proces měrování EIGRP 

Tabulky EIGRP 

- __Směrovací \(routing\)__ – obsahuje pouze nejlepší cesty \(succesor\) \(jednu nebo několik se stejnou nejnižší metrikou\) do cílové sítě použité pro routing 
- __Topologie \(topology\)__ – obsahuje všechny zjištěné \(naučené\) směry \(nejlepší směr \(succesor route\), záložní směr i všechny ostatní\) do všech cílových adres 
- __Sousedé \(neighbours\)__ – obsahuje sousední routery, které si vzájemně vyměňují aktualizace v EIGRP 

Směrovací protokoly typu link\-state 

- Vytvářejí mapu topologie sítě a každý router tuto mapu používá k určení nejkratší cesty do každé sítě 
- Známé taky jako protokoly typu nejkratší cesty, jsou postaveny na algoritmu SPF Dijkstra 
- Pro IP jsou nejznámější link\-state protokoly: 
	- __OSPF__ 
	- __IS\-IS__ 

Algoritmus SPF 

- Algoritmus „nejkratší cesta první“ \(Shortest Path First, SPF\) 
- Hromadí ceny podle každé cesty od zdroje do cíle 
- Každý router vypočítává algoritmus SPF a určuje metriku – cenu ze své vlastní perspektivy 
- Smysl nejkratší cesty, je smysl každého routovacího protokolu 

Informace o stavu linky 

- Informace o stavu linek routeru je známá jako stavy linky \(Link States\) 
- Obsahuje: 
	- IP adresu sítě a masku podsítě přilehlé sítě 
	- IP adresu rozhraní rotueru 
	- Typ sítě \(Ethernet \(broadcast\) nebo sériové dvoubodové připojení \(point\-to\-point link\)\) 
	- Cenu této linky 
	- Všechny sousedící \(přilehlé\) routery této linky 

 

Výhody algoritmu Link\-State 

- Každý router si vytváří vlastní topologickou mapu neboli strom SPF síťové topologie, ze které si sám počítá nejkratší cestu 
- Bezprostředním zaplavováním sousedů pakety LSP \(pakety stavu linek\) se dosáhne rychlá konvergence 
- LSP jsou posílány při změně topologie a obsahují pouze informace týkající se této změny – automaticky spouští aktualizace 
- Hierarchický návrh, při použití více oblastí 

  

  

 IGRP \(Interior Gateway Routing Protocol\) 

- Proprientární \(=software s uzavřeným kódem\) Cisco protokol 
- Nepodporuje VLSM 
- Jako metriku používá cenu, záleží na pásmu a zpoždění 
- Maximální počet hopů 255 

EIGRP \(Enhaced Interiror Gateway Routing Protocol\) 

- Proprientární Cisco protokol 
- Rychlá konvergence 
- Redukuje spotřebu pásma pro routovací updaty 
- Podporuje různé protokoly \(Apple Talk, IPX, IP\) a VLSM 
- Routovací update se vyměňují pouze mezi routry ve stejném AS 
- Maximální počet hopů 255 
- Bez smyček 

 

OSPF \(Open Shortest Path First\) 

- Hierarchický systém – jedna nebo více oblastní je spojena k páteřní oblasti \(oblast 0\) 
- Routry posílají linkstate \(pásmo a stav intrefacu\) informace všem sousedním routerům v oblasti 
- Routry vytvářejí databázi topologie, což je model celé oblasti 
- Z databáze se pomocí Dijsktry vypočítá nejkratší cesta a zapíše se do routovací tabulky 
- Neomezený počet hopů 
- Určeno pro rozsáhlé sítě heterogenní sítě 
- Podporuje VLSM 

  

Static routing 

- Používá se například mezi ISP a firmou, není zde třeba, aby běhal složitý routovací prtokol 
- Pro každou síť je vložen záznam do routovací tabulky 
- Žádná zátěž 
- Pouze pro malé sítě 

Default routing 

- Může se použít pouze na kraji sítě, kde je jeden port, který vede mimo síť 
- Pokud není definována jiná cesta k dosažení cíle, tak se použije defaultní routa, což je gateway 

Směrovací protokoly – OSPF 

OSPF \(Open Shortest Path First\) 

- Hierarchický interní směrovací protokol, který funguje na bázi link\-state, takže každý router zná strukturu celé sítě \(v případě OSPF přesněji celé oblasti\) 
- OSPF je nejpoužívanějším směrovacím protokolem pro směrování uvnitř AS \(autonomních serverů\) 
- Část sítě, v níž působí OSPF se nazývá OSPF doména 
- OSPF je beztřídní \(classless\) směrovací protokol, pracuje v sítí s různě dlouhými maskami podsítě \(Variable\-Lenght Subnet Mask, VLSM\) 
- V případě IPv4 se OSPF zprávy vkládají přímo do IP paketů 

Princip funkce 

- Činnost OSPF je rozdělena do tří částí: 
	- Správa sousedských relací  
	- Šíření routovacích informací 
	- Určování nejkratších \(optimálních\) cest 

*Správa sousedských relací* 

- Jedna sousedská relace vždy existuje mezi dvěma routery 
- Sousedství není důležité ani tak pro sdílení informací o síti, jako spíše jejich nashromáždění 
- Ve zkonvergované[\[1\]](file:///D:\kondy\Documents\school_4.itb\Maturita\Kubis\POS\21)%20Směrovací%20protokoly.docx#_ftn1) plně funkční síti existují dva typy sousedství: 
	- __Dvojcestné \(2\-way\)__ – slouží ke jenom ke směrování  
	- __A úplné \(full\)__ – slouží ke směrování a je sním spojena i výměna informací 

*Vznik sousedství* 

- Probíhá tak že dva routery, které sdílí jednu linkovou \(L2\) topologii přijmou hello pakety 
- Hello pakety určené k routování pravidelně zasílá 
- Hello paket je relativně krátký, neovlivňuje propustnost sítě, je adresován všem zařízením, které jsou uzly dané L2 topologie \(není směrován\) 
- Implicitní \(obsažený\) interval zasílání hello paketů je 10 s 

  

- K zániku sousedství dochází, jakmile od známého souseda není hello packet přijat po dobu tzv\. dead timeru \(výchozí hodnota je 40s\) 

  

- Alternativně lze taky sousedy definovat staticky, i nadále se zasílají hello packety \(unicast\) 

  

- Pro zformování sousedské relace je zapotřebí, aby oběma participujícím \(účastnícím\) routerům byl shodně nakonfigurován hello interval, dead interval, číslo podsítě, maska podsítě a ID oblasti 

 

*Šíření směrovacích informací* 

- K šíření informací o změně topologie dojde vždy, když nastane nějaké změna  
- Změnou topologie se rozumí události vzniku nebo zániku sousedské relace 
- Routery v oblasti změny se dozvídají detailní informace, routery v jiných oblastech pouze případnou změnu metriky nebo směru 

*Určování nejkratších cest* 

- Pro stanovené nejkratších cest \(cest s nejnižší metrikou\) slouží protokol Dijkstrův algoritmus \(zvaný též Shortest Path First\) 
- Výpočet se provádí znovu po každé změně v topologii, je velmi náročný 
- Právě za účelem omezení požadavků na hardware se OSPF domény dělí do oblastí – \(jednotlivé změny topologie se pak týkají jen dané oblasti\) 

  

- Intraoblastní cesta \(inter\-area route\) – cesta jejíž cíl je dosažený, aniž by paket musel projít jinou OSPF oblastní nebo částí AS pod správou jiného protokolu 

Oblasti OSPF 

- OSPF je považován za hierarchický protokol, díky existenci oblastí 
- Oblasti slouží k zefektivnění fungování celé topologie 
- Hranice oblastní tvoří routery, z tohoto důvodu je nutné, aby nejméně jeden router byl členem alespoň dvou oblastí 
- Router, který se účastní výhradně jedné oblasti, se označuje jako vnitřní router \(internal router\) 
- Oblasti jsou číslovány celými čísly od 0 \(říká se, že 0 je páteřní oblast v OSPF\) 

Typy oblastí 

- __Standart area__ – přijímá link\-updaty a sumární routy i externí 
- __Backbone area__ – základní oblast označená 0 

22\) Směrovací protokoly – OSPF

OSPF \(Open Shortest Path First\) 

- Hierarchický interní směrovací protokol, který funguje na bázi link\-state, takže každý router zná strukturu celé sítě \(v případě OSPF přesněji celé oblasti\) 
- OSPF je nejpoužívanějším směrovacím protokolem pro směrování uvnitř AS \(autonomních serverů\) 
- Část sítě, v níž působí OSPF se nazývá OSPF doména 
- Disjirieakův algoritmus pro určení nejlepší cesty 
- OSPF je beztřídní \(classless\) směrovací protokol, pracuje v sítí s různě dlouhými maskami podsítě \(Variable\-Lenght Subnet Mask, __VLSM__\) 
- V případě IPv4 se OSPF zprávy vkládají přímo do IP paketů 

Princip funkce 

- Činnost OSPF je rozdělena do tří částí: 
	- Správa sousedských relací  
	- Šíření routovacích informací 
	- Určování nejkratších \(optimálních\) cest 

Správa sousedských relací 

- Jedna sousedská relace vždy existuje mezi dvěma routery 
- Sousedství není důležité ani tak pro sdílení informací o síti, jako spíše jejich nashromáždění 
- Ve zkonvergované[\[1\]](file:///D:\kondy\Documents\school_4.itb\Maturita\Kubis\POS\22)%20Směrovací%20protokoly%20-%20OSPF.docx#_ftn1) plně funkční síti existují dva typy sousedství: 
	- __Dvojcestné \(2\-way\)__ – slouží ke jenom ke směrování  
	- __A úplné \(full\)__ – slouží ke směrování a je sním spojena i výměna informací 

*Vznik sousedství* 

- Probíhá tak že dva routery, které sdílí jednu linkovou \(L2\) topologii přijmou hello pakety 
- Hello pakety určené k routování pravidelně zasílá 
- Hello paket je relativně krátký, neovlivňuje propustnost sítě, je adresován všem zařízením, které jsou uzly dané L2 topologie \(není směrován\) 
- Implicitní \(obsažený\) interval zasílání hello paketů je 10 s 

  

- K zániku sousedství dochází, jakmile od známého souseda není hello packet přijat po dobu tzv\. dead timeru \(výchozí __hodnota je 40s\)__ 

  

- Alternativně lze taky sousedy definovat staticky, i nadále se zasílají hello packety \(unicast\) 

  

- Pro zformování sousedské relace je zapotřebí, aby oběma participujícím \(účastnícím\) routerům byl shodně nakonfigurován hello interval, dead interval, __číslo podsítě, maska podsítě a ID oblasti__ 

 

Šíření směrovacích informací 

- K šíření informací o změně topologie dojde vždy, když nastane nějaké změna  
- Změnou topologie se rozumí události vzniku nebo zániku sousedské relace 
- Routery v oblasti změny se dozvídají detailní informace, routery v jiných oblastech pouze případnou změnu metriky nebo směru 

*Určování nejkratších cest* 

- Pro stanovené nejkratších cest \(cest s nejnižší metrikou\) slouží protokol Dijkstrův algoritmus \(zvaný též Shortest Path First\) 
- Výpočet se provádí znovu po každé změně v topologii, je velmi náročný 
- Právě za účelem omezení požadavků na hardware se OSPF domény dělí do oblastí – \(jednotlivé změny topologie se pak týkají jen dané oblasti\) 

  

- Intraoblastní cesta \(inter\-area route\) – cesta jejíž cíl je dosažený, aniž by paket musel projít jinou OSPF oblastní nebo částí AS pod správou jiného protokolu 

Oblasti OSPF 

- OSPF je považován za hierarchický protokol, díky existenci oblastí 
- Oblasti slouží k zefektivnění fungování celé topologie 
- Hranice oblastní tvoří routery, z tohoto důvodu je nutné, aby nejméně jeden router byl členem alespoň dvou oblastí 
- Router, který se účastní výhradně jedné oblasti, se označuje jako vnitřní router \(internal router\) 
- Oblasti jsou číslovány celými čísly od 0 \(říká se, že 0 je páteřní oblast v OSPF\) 

Typy oblastí 

- __Single area__ – spousta routerů v jedné oblasti, možné vzniklé záplavy hello paketů 
- __Multi area –__ základní oblast, páteřní \(0\), rozdělení sítí  
- __Standart area__ – přijímá link\-updaty a sumární routy i externí 
- __Backbone area__ – základní oblast označená 0 

  

Chování OSPF – jedna oblast/více oblastí \(single/multi area\) význam, důvody nasazení multi area OSPF, nasazení a konfigurace protokolu  

__ __ 

  

  

  

 
 

[\[1\]](file:///D:\kondy\Documents\school_4.itb\Maturita\Kubis\POS\22)%20Směrovací%20protokoly%20-%20OSPF.docx#_ftnref1) Konvergence sítě – všechny routery se shodnout jak daná síť vypadá 

23\) LAN design 

LAN design 

Hierarchický model 

- Umožňuje strukturovat a snadněji spravovat a rozšiřovat síť 
- Hierarchický model spočívá v rozdělení sítě na samostatné vrstvy 
- Každá vrstva poskytuje specifické funkce a hraje v celé síti určitou roli 
- Oddělením různých funkcí, které existují v síti, se síť stává modulární, což usnadňuje rozšiřitelnost a výkon 
- Typický hierarchický model obsahuje tři vrstvy: 
	- Přístupovou \(access\) 
	- Distribuční 
	- Jádro 

  

  

Přístupová vrstva \(Access Layer\) 

- Obsahuje koncová zařízení jako PC, tiskárny, IP telefony 
- Poskytuje přístup do zbytku sítě 
- Obsahuje switche, bridge, AP \(přístupové body\) 
- Hlavním účelem přístupové vrstvy je připojit koncová zařízení k síti a kontrolovat, která zařízení mají povoleno v síti komunikovat 

  

Distribuční vrstva \(Distribution Layer\) 

- Agreguje datový provoz, který obdrží od přístupové vrstvy předtím, než jej pošle do jádra, kde je poslán do cílové sítě 
- Kontroluje síťový provoz  
- VLANy umožňuje rozdělit provoz v síti do oddělených podsítí 
- Př: Univerzitní síť je možné oddělit provoz pracovníků fakulty, studentů a hostů, což napomáhá vymezit bezpečnostní politiku jednotlivým skupinám 
- Nalezneme zde obvykle velmi výkonná zařízení, která mají vysokou dostupnost a redundanci k zaručení bezporuchovosti 

Jádro 

- Vysokorychlostní páteř sítě 
- Je rozhodující v propojení zařízení distribuční vrstvy 
- Tato vrstva bývá připojena k internetu často více linkami 
- Před posíláním dat do internetu dochází k agregaci dat, takže zařízení musí být schopná posílat velký objem dat velmi rychle 

  

Zařízení vhodné pro LAN 

- Sdílení diskového prostoru, využití tiskáren, sdílení internetu a dalších služeb 
- Lan využívá switche, routery a pasivní prvky topologie \(různé kabely\) 

  

  

  

  

  

Třívrstvý Cisco hierarchický model, technická realizace struktury modelu, volba vhodných přístrojů pro prostředí LAN, význam modulárního řešení modelu ve firemním prostředí, rozvoj IT a síťový model  

24\) Bezdrátové sítě 

Bezdrátové sítě     

- Umožňuji snadné připojení k síti téměř kdekoliv a jakýmkoliv zařízením – od klasického nooteboku přes PDA až po mobilní telefon 
- Využívají přístupu Ethernet 
- Dále mohou také šetřit peníze, není třeba mít kabeláže 
- Často jsou bezdrátové sítě prodloužením sítí drátových nebo existují společně 
- Bezdrátová síť je typ počítačové sítě, ve které je spojení mezi jednotlivými účastníky sítě uskutečněno pomocí bezdrátové komunikace, nejčastěji pomocí elektromagnetických vln 
- Bezdrátová síť se používá v domácnostech, telekomunikačních sítích a ve společnostech, kde by zavádění kabelů do budovy a spojování jednotlivých místností bylo příliš drahé 

Základní norma pro bezdrátové sítě 

- 802\.11 je IEEE standard, který definuje využití bezlicenčního pásma pro datové sítě \(fyzickou a MAC vrstvu\) 
- Tabulka čtyř standardů:  

  

Wi\-fi síť 

- Označení pro několik standardů IEEE 802\.11 popisujících bezdrátovou komunikaci v počítačových sítích 
- Tato technologie využívá __„bezlicenčního frekvenčního pásma“__, proto je ideální pro budování levné, ale výkonné sítě bez nutnosti kabelů 
- Název neměl původně znamenat nic, ale časem se z něj stala slovní hříčka wireless fidelity \(bezdrátová věrnost\)  
- Původním cílem Wi\-Fi sítě bylo zajišťovat bezdrátové propojení přenosných zařízení a dále jejich připojování na lokální sítě \(LAN\) 
- Časem začali být využívány k připojení do sítě Internet v rámci lokalit a tzv\. hotspotů 

Komponenty wi\-fi sítě 

*Bezdrátová síťová karta* 

- Také nazývána wi\-fi karta, je určena k bezdrátovému připojení na internet 
- Součástí každého přenosného počítače 
- Data se přenášejí pomocí mikrovln přibližně na frekvenci 2\.4 Ghz 
- Pro přenos mezi směrovými anténami na větší vzdálenost se používá frekvence 5 Ghz 
- Wi\-fi karty jsou buď interní anebo externí \(připojují se přes USB nebo ExpressCard\) 

*Přístupový bod \(Access point, AP\)* 

- Zařízení v bezdrátové wi\-fi síti, ke kterému se klienti připojují 
- Klienti spolu nekomunikují přímo, ale prostřednictvím přístupového bodu, takže mohou být jednoduší a nemusejí být ve vzájemném rádiovém spojení 
- AD\-HOC síť – síť kde jsou dva nebo více klientu ve vzájemném přímém rádiovém spojení \(neexistuje prostředník\) 

 

*CSMA/CA* 

- Všechny stanice v bezdrátové síti před vysíláním „naslouchají“ jestli někdo nevysílá a čekají, dokud nebude médium „volné“ 
- Jakmile AP dostane od klientské stanice data, pošle jí potvrzení, aby bylo zřejmé, že nedošlo ke kolizi 
- CSMA/CA nezjišťuje výskyt kolizí, pomocí protokolu LocalTalk, ale ohlásí jednotlivým stanicím, že bude vysílat a médium si „zamluví“ 

 

*Bezdrátový router* 

- Zpravidla zastává funkce AP, ethernetového switche \(většinou cca 4 porty\) a routeru \(resp\. Brány, připojující LAN k ISP = internetu\) 

Typy bezdrátových sítí 

Wireless PAN \(WPAN\) 

- Bezdrátové osobní sítě, spojují jednotlivá zařízení v relativně malé oblasti 
- Síť je obecně pro osobu připojenou do této sítě snadno dosažitelná\. Například pomocí bluetooth nebo infračerveného světla můžeme připojit sluchátka k laptopu a tím si vytvořit malou osobní bezdrátovou síť \(WPAN\) 

Wireless LAN \(WLAN\) 

- Místní bezdrátová síť, spojuje dvě a více zařízení na střední vzdálenost pomocí bezdrátové distribuční metody, obvykle poskytuje přes přístupový bod \(AP\) připojení k internetu 
- Použití rozprostření signálu umožňuje uživatelům se pohybovat v rámci signálem pokryté oblasti a být stále připojen do sítě 
- Produkty používající WLAN standard IEEE 802\.11 jsou zaregistrovány pod obchodní značkou Wi\-Fi 
- Bezdrátové technologie implementují i point\-to\-point spojení mezi počítači nebo sítěmi, které jsou na dvou vzdálených lokacích\. 
- Obvykle se používá směrový mikrovlnný systém nebo modulovaný laserový paprsek mezi dvěma místy, které na sebe mají volný výhled 

Wireless WAN \(WWAN\) 

- Velká bezdrátová síť, která typicky pokrývá velké oblasti 
- Oblasti jako například mezi sousedícími vesnicemi a městy, nebo městem a předměstím 
- Tyto sítě mohou být použity k připojení poboček kanceláří nebo jako veřejný přístupový systém 
- Bezdrátové spojení mezi přístupovými body \(AP\) je obvykle point\-to\-point mikrovlnná linka  
- Typický systém obsahuje vstupní brány základních stanic, přístupové body a bezdrátové přemostění signálu 

Wireless MAN \(WMAN\) 

- Bezdrátové metropolitní sítě, spojují několik bezdrátových lokálních síti 
- WiMAX je typ bezdrátové sítě MAN a je popsána standardem IEEE 802\.16 

Mobilní síť 

- S vývojem smartphonů a telefonních sítí běžně přenášíme data do a z mobilních zařízení 

*Globální systém pro mobilní komunikaci \(GSM\)* 

- GSM síť je rozdělena mezi tři hlavní systémy: 
	- __Přepínací systém __ 
	- __Systém základní stanice__ 
	- __Operační a podpůrný systém__ 
- Mobilní telefon se připojí do základního systému, který se poté připojí do operačního a podpůrného systému\. Ten poté propojí mobil s přepínací stanicí, kde je hovor přesměrován tam kam je potřeba 
- GSM je nejvíce používaný standard a je to majoritní standard pro mobilní telefony 

  

  

Použití bezdrátových sítí 

- Příklad využití zahrnují mobilní telefony, které jsou částí každodenní bezdrátové komunikace 
- Další využití je mezikontinentální síťový systém, který používá satelity, ke komunikaci napříč celým světem 
- Bezdrátové sítě šetří čas a peníze nutné pro fyzickou instalaci 
- Bezdrátové sítě jsou jednoduché a vyžadují jeden přístupový bod, připojený přímo k internetu přes router 

Souhrn 

- Základní smysl bezdrátových sítí je nabízet množství použití jak pro obchodní sféru, tak i pro domácnost 
- Je využíváno množství bezdrátových technologií, každá je definována standardem, která popisuje unikátní funkčnost ve fyzické a datové vrstvě OSI modelu 
- Standardy se liší ve škále věcí \(signalizační mód, geografická vzdálenost, frekvenční rozsah\) 

Výhody a nevýhody bezdrátových sítí 

Výhody 

- Není nutná kabeláž 
- Není potřeba řešit počet slotů pro kabely 
- Zmenšování technologii \(ultrabooky a smarthphony nejsou vhodné, aby měli RJ\-45 konektor\) 

Nevýhody 

- Složitější zabezpečení 
- Přístup k síti může mít kdokoliv, pokud síť není zabezpečená 
- Signály se dají jednodušeji odposlouchávat 
- Na Wi\-Fi se dá připojit z většího okruhu \(horší zabezpečení proti napadení\) 
- Stále pomalejší a méně stabilní než kabelové připojení 
- Jednodušeji se dá rušit, rušit mohou i jiné spotřebiče \(mikrovlnná trouba atd\.\) 
- Do sítě se dá nabourat i bez fyzického přístupu do budovy 

Konfigurace AP 

 

Metody přístupu 

- Norma 802\.11 definuje několik způsobů přístupu k bezdrátovému médiu 
- Založeno na Ethernetu, kolizní doména 
- Metoda založena na předcházení kolize \(AC\), vyšle request, že chce vysílat  

  

Zabezpečení bezdrátových sítí 

Hrozby 

- Neoprávněný přístup – napadání nezabezpečených sítí 
- Odposlouchávání – útočník je mezi obětí a AP a snaží se odposlouchávat zprávy 

 

Bezpečnostní opatření 

*Skrytí SSID* 

- Nejjednodušší, ale neefektivní zabezpečení bezdrátové sítě, je skrytí SSID \(__identifikátoru bezdrátové sítě__, je vysílán periodicky, aby si klient mohl vybrat k jaké sítí se chce připojit\) 
- Tato ochrana poskytuje velmi malou ochranu proti většině útoků, protože je možné identifikátor SSID velmi jednoduše odposlechnout \(přenáší se v otevřené formě\) 

*Filtrování MAC adres* 

- Jedna z nejjednodušších technik je povolení přístupu pouze předem schváleným MAC adresám 
- Většina přístupových bodů obsahuje filtr MAC adres 
- Vzhledem k tomu, že se přenášené MAC adresy nijak nešifrují, může je útočník jednoduše odposlechnout a naklonovat na svoji síťovou kartu 
- Poté se může vydávat za libovolného klienta a přístup mu je povolen 

*Statické IP adresy* 

- Přístupové body většinou klientům přidělují IP adresy pomocí DHCP 
- Vyžadování ručního nastavení IP adresy klientem ztíží průnik do sítě méně sofistikovaným útočníkům, ale poskytuje malou ochranu proti zkušeným vetřelcům 

*WEP \(Wired Equivalent Privacy\)* 

- WEP je původní šifrovací standard pro bezdrátové sítě, v srpnu 2001 byl ale prolomen 
- Na nových zařízeních je stále podporován, ale doporučuje se používat WPA2 

*WPA \(Wi\-Fi Protected Access\)* 

- Chráněný přístup k Wi\-Fi \(WPA a WPA2\) jsou bezpečnostní protokoly 
- Pokud je použito slabé heslo, jako slovníková fráze, nebo kratší řetězec může být WPA a WPA2 prolomeno 
- Při použití dostatečně dlouhých hesel \(např\. 14 náhodných písmen\) nebo passphrase \(např\. 5 náhodně zvolených slov\) je prakticky zabezpečení neprolomitelné  
-   

Základní norma pro bezdrátové sítě, rozdělení sítí, výhody/nevýhody bezdrátových__ __sítí, konfigurace AP, metody přístupu, zabezpečení bezdrátových sítí   

25\) WAN \(Wide Area Network\) 

Účel WAN 

- Wide Area Network \(WAN\) je síť, která pokrývá rozlehlé geografické území \(například síť, která překračuje hranice města, regionu nebo státu\) 
- Poskytovatelé služeb připojení častěji používají pro přenos v sítích WAN protokoly ATM a Frame Realy 
- WAN sítě jsou využívány pro propojení LAN sítí nebo dalších typů sítí 
- Umožňuje tedy komunikace uživatelů z dvou vzdálených míst 
- ISO/OSI model pro WAN je omezen jen na fyzickou a linkovou vrstvu 
	- __Fyzická vrstva__ – stará se o doručovací metody \(ADSL, ATM, Frame Relay atd\.\) 
	- __Linková vrstva__ – stará se o zapouzdření a adresaci 

Možnosti připojení k WAN  

Pronajatá linka 

- Point\-to\-Point připojení mezi dvěma počítači nebo LAN 
- Nejbezpečnější, ale je velmi drahé 
- Protokoly: PPP, HDLC, SDLC 

Přepojování okruhů 

- Mezi koncovými body je vyhrazený okruh 
- Nejlevnější, ale je nutné sestavení spojení 
- Protokoly: PPP, ISDN 

Přepojování paketů 

- Zařízení posílá pakety skrze přenosovou síť 
- Pakety jsou přenášeny přes trvalý virtuální okruh nebo přes přepínaný virtuální okruh 
- Nevýhodou je sdílená přenosová síť 
- Protokoly: Frame Relay 

Přepojování buněk 

- Podobné jako přepojování paketů, ale používá buňky stejné délky namísto proměnlivých paketů\. Data jsou rozdělena do buněk stejné délky a následně odeslána přes virtuální okruhy 
- Nejlepší pro současný přenos hlasu a dat, nevýhodou je značná režie 
- Protokoly: ATM 

  

Pronajaté okruhy 

- Obvykle se označují jako připojení point\-to\-point nebo vyhrazené připojení 
- Pronajatý okruh je předem ustanovená komunikační trasa WAN, která směruje od jednoho koncového zařízení přes switch ke koncovému zařízení 

Přepínání okruhů 

- Komunikační metoda, při které se mezi oběma koncovými uzly vytvoří datová cesta 
- Přenosové prostředky této cesty jsou vyhrazeny po určitý čas pouze pro tato dvě koncová zařízení 
- Vhodným příkladem je běžná telefonní síť\. Platí se za čas, kdy je spojení sestaveno 

  

  

Přepínání paketů 

- Je technologie přenosu paketů v síti, kdy každý paket je doručován jako samostatný celek 
- Každý paket tedy musí v sobě nést informaci o cíli své cesty 
- Přepínání paketů na rozdíl od přepínaní okruhů nevytváří vyhrazené spojení 

Point\-to\-Point \(PPP\) 

- Protokol pro dvou bodové propojení 
- Spojuje přímo pouze dva uzly, tudíž potom může být přístupová metoda velmi jednoduchá s malou režií, protože rámec může skončit pouze na druhém konci přenosového média 
- __Half Duplex__ – data mohou téct pouze jedním směrem \(linka buď poslouchá nebo posílá\), pokud chce vysílat, ale vysílá někdo jiný tak musí čekat 
- __Full Duplex__ – data mohou téct oběma směry najednou \(může vysílat i přijímat\) 

Umožňuje 

- Dynamické nastavování klienta 
- Zabezpečení pomocí ověřování hesla 
- Nad jedním spojením může komunikovat více protokolů 
- Testování kvality, detekce chyb 
- Kompresi dat, šifrování dat 

Frame Relay 

- Protokol technologie přepínání paketů WAN 
- Nahradil starší technologie jako je X\.25 \(zajišťoval nápravu chyb na několika vrstvách, byl pomalý a náročný\) 
- Nízká chybovost, tudíž nejsou používané žádné opravné mechanismy, při nalezení chyby je rámec bez náhrady zahozen 
- Opravu Frame Relay svěřujeme vyšším vrstvám, což teda zajišťuje vyšší rychlost, než kdyby opravy řídil sám Frame Relay 
- Poskytuje kontrolu zahlcení ve formě zpráv s oznámením 

Druhy topologií  

*Hvězdicová topologie* 

- Nejjednodušší technologií Frame Relay je klasická hvězdicová topologie, kdy na jeden hlavní server připadá více vzdálených serverů zapojených do hvězdice 
- Z nichž každý je s hlavním serverem propojen virtuálním okruhem 
- V případě selhání jednoho z hlavních virtuálních okruhů způsobí ztrátu konektivity vzdáleného serveru 

*Částečná vícecestná topologie* 

- U této topologie má většina serverů \(nebo všechny\) alespoň dva trvalé virtuální okruhy, které se připojují k síti Frame Relay 
- Problém může nastat ve chvíli selhání hlavního směšovače serveru 

  

*Vícecestná topologie* 

- Nastává ve chvíli, kdy všechny servery jsou k sobě propojeny navzájem 
- Toto řešení je nejlepší, ale zároveň nenákladnější 

ATM \(Asynchronous Transfer Mode\) 

- Byl standard pro vysokorychlostní síťovou architekturu 
- Zabezpečuje Quality of Service \(QoS\) pro přenos hlasu a videa 
- Umožňuje přenos IP datagramů 
- Pracuje s přepojováním paketů \(pakety pevné délky, zvané buňky\) 
- Spojově orientovaná technologie, je nutné nejprve navázat spojení 

ISDN \(Integrated Services Digital Network\) 

- Je soubor komunikačních celosvětových standardů pro digitální současný přenos hlasu, videa, dat, paketů a jiných síťových služeb tradičními obvody veřejné telefonní sítě 
- Představuje snahu o proměnu existující analogové sítě na digitální 
- Vznikl jako úsilí o jednotnou komunikační síť 

DSL \(Digital Subscriber Line\) 

- Je technologie, která umožňuje využít stávající vedeni telefonu nebo kabelové televize pro vysokorychlostní přenos dat 
- Využívá telefonní rozvody plochým nekrouceným kabelem, kroucenou dvojlinkou nebo koaxiální kabel kabelové televize 
- Jednotlivé typy DSL se liší v používaném frekvenčním pásmu, maximální rychlosti a dosahu 
- Obecně platí, že čím větší vzdálenost od ústředny nebo méně kvalitní vedení, tím nižší maximální dosažitelná rychlost 

 

 

26\) IOS Cisco \(Cisco’s Internetwork Operationg Systém\) 

 

Význam 

- Je to operační systém, který používá většina Switchů a Routerů firmy Cisco 
- \(Dále se zmiňuji jen o switchi, ale obecně to platí i routerech\) 
- Celý IOS je uložen v jednom souboru s příponou bin \(cca 5 mb\) 
- Ve flash paměti switche může být ještě uloženo webové rozhraní \(složka HTML\) 
- IOS je propracovaný a na míru provedený systém 
- Nabízí velké množství možností pro konfiguraci 
- Obsluha IOSu je založena na CLI – Command Line Interface \(příkazová řádka\)\+ 
- Pro správné používaní/konfiguraci je nutné se orientovat v různých pamětech, které se používají a vědět, jak s nimi switch pracuje 

 

Postup při startování switche: 

 

- Zapojíme napájení do switche 
- Spustí se mikrokód z ROM paměti 
	- Pokud nalezne validní verzi IOSu, nastartuje do omezené funkce RxBoot 
- Nalezne IOS image \(__standardně ve Flash paměti\) a zavede jej__ 
- Načte se a aplikuje startup\-config z NVRAM \(tento textový soubor obsahuje sekvenci příkazů IOSu, která se vykonává stejně, jako při zadávání přes CLI\) 
	- Pokud není nalezen, tak se vyvolá express setup 
	- Pokud existuje, tak z Flash paměti načte vlan\.dat 
- Pokud zadáváme nějaké konfigurační příkazy IOSu, tak ty se okamžitě provádějí, ale ukládají se pouze do running\-config, který je uložen v RAM \(při startu se do něj kopíruje obsah startup\-config\)\. To znamená, že aktuálně jsou platné a po restartu switche se vymažou\. 
- Pokud tedy provedeme konfiguraci, která nelze vrátit zpět, stačí restartovat switch a ten je v takovém stavu jako je jeho startup\-config\. 
- Pokud chceme zachovat naše změny, je třeba vždy překopírovat running\-config do startup\-config 
- Pokud nechceme přijít o změny při restartování switche, musíme překopírovat běžící konfiguraci do startovací\!  

JEDNODUŠE 

- Zapojíme __\->__ provede se částečný boot \(mikrokod z ROM\) \-> načte z flasch paměti IOS bin soubor a zavede jej __\->__ z NVRAM načte startup\-config \(záklandí příkazy / nastavení\) __\->__ vykona  tyto příkazy __\->__ provádíme příkazy \(do running\-confif\) __=__ po odpojení se vrátí vše do původního stavu __=__ nutnost nakopírovat do startup\-config  

Typy pamětí 

- Cisco routery a switche používají pět různých pamětí 

Paměť ROM \(Read only memory\) 

- ROM paměť je možné pouze číst a je nezávislá na napájení 
- Obsahuje procesy, které se provádí při bootování __\(startování\) switche__ 
- Starší verze switche obsahovali v ROM paměti jen několik základních funkcí: 
	- __POST__ \(Power\-on Self Test\) – po zapnutí switche provede tento mikrokód test funkčnosti hlavních částí \(paměť, CPU, interface\) 
	- __Boostrap Program__ – inicializace bootování, nahrává IOS 
	- __ROM monitor__ – speciální diagnostický mód pro řešení problémů 
	- __RxBoot__ – pokud se nenalezne funkční IOS, tak se načte tato omezená verze IOSu, která umožní instalovat správný IOS image 

  

Paměti Flash 

- Flash je paměť typu NVRAM \(Non\-volatile random access memory\) 
- Lze do ní zapisovat a při odpojení napájení zůstane obsah zachován 
- Ve flash paměti je primárně uložen IOS \(může zde být i více verzí\), dále kopie startup\-config v souboru config\.text a informace o VLANech ve vlan\.dat 
- Teoreticky zde můžeme uložit cokoliv 
- Dir flash / show flash – výpis paměti 

Paměť NVRAM \(Non\-volatile random access memoryú 

- Obdobná jako Flash, zapisovatelná paměť nezávislá na napájení  
- Je použitá pro uložení startup\-config 
- Div nvram – výpis paměti 

Paměť RAM \(Random Access Memory\) 

- Operační paměť  
- Jedná se o rychlou zapisovatelnou paměť, která je ovšem závislá na napájení a při restartu switche se vymaže 
- Standardně je tato paměť rozdělena na dvě části 
	- __Hlavní paměť procesoru__ – je zde uložená běžící konfigurace \(running\-config\), běžící IOS, routovací a ARP tabulky 
	- __Sdílená paměť I/O__ – je použitá jako buffer pro uložení aktuálně zpracovaných paketů 
- Show memory – výpis paměti 

Konfigurační módy 

- Uživatelské rozhraní je děleno do řady různých módů, které nám umožňují provádět jiné činnosti, hlavní módy jsou: 
	- __Uživatelský mód \(EXEC\)__ – user EXEC – __SWITCH>__, v tomto módu jsme hned po přihlášení a má pouze omezené příkazy 
	- __Privilegovaný mód \(EXEC\)__ – privileged EXEC – __SWITCH\#__, výchozí mód pro přestup do dalších konfigurací, umožnuje zobrazovat různé údaje 
	- __Globální konfigurační mód__ – global configuration __SWITCH\(config\)\#__, zde se konfigurují funkce, které ovlivní celý systém 
	- __Konfigurace interface__ – interface configuration __SWITCH\(config\-if\)\#__, v tomto módu konfigurujeme vlastnosti určitého interface 
- Pro přestup z vyšší úrovně do nižší použijeme __exit__, pokud chceme přejít z několika nadřazených úrovní do privilegovaného módu, použijeme __Ctrl\+Z__ 

Základní práce s IOSem 

- Nejprve se musíme připojit na switch, pak můžeme pracovat v CLI 
- Můžeme také učinit přes consoli, tzn\. sériový kabel přes speciální port na switchi 
- Dále je možné se připojit přes telnet či SSH, ale jen tehdy pokud již máme základní konfiguraci, a tato připojení musí být nastavena 
- Pro připojení přes consoli použijeme hyperterminál nebo PUTTY 

  

Zadávání příkazů 

- Veškeré příkazy IOSu se dají zadávat zkráceně, stačí zadat první znaky, které jednoznačně určí příkaz \(tedy, aby v daném kontextu neexistoval jiný příkaz, který začíná těmito znaky\) 
- Klávesa tabulátor \(TAB\) doplňuje příkaz 
- Zadáme prvních pár písmen příkazu a po stisknutí TAB se příkaz doplní, pokud je jednoznačný, nebo se doplní část, která je pro více příkazů společená 
- Zadáním __?__ \(otazníku\) se zobrazí seznam příkazů s krátkým popisem, které můžeme na aktuálním místě použít 
-  

 

 

 

  

- Klávesová šipka nahoru a dolu složí k procházení historie dříve zadaných příkazů 

  

- Pokud se na obrazovce vypisují údaje listují se po stránkách, při vypsání stránky se výpis zastaví\. Klávesou SPACE se zobrazí další stránka a klávesou ENTER další řádek 
- Příkaz se odešle klávesou ENTER, tak se okamžitě uplatní a uloží do running\-config 
-  

 

 

 

Typy switchů 

- Cisco mnoho switchů, nesou název Catalyst a existuje několik základních řad 
- Hlavní rozdělení je podle vrstvy, na které pracují – primárně na 2\.vrstvě OSI a 3 vrstvě OSI 
- Označení switche vypovídá o řadě jeho vlastností př: C3750G\-24PS, některé vlastnosti jsou specifické dle daného modelu, ale řada je obecných 
	- __C__ – Catalyst 
	- __3750__ – číslo modelové řady 
	- __G__ – určuje, že se jedná o Gigabitové porty 
	- __24__ – značí počet portů 
	- Za počtem portů je několik možností: 
		- PS – napájené porty \(Power over Ethernet\) 
		- __TT__ – uplinky jsou metalické porty RJ45 
		- __TC__ – uplinky jsou SFP moduly 
		- __FS__ – všechny porty jsou optické 
		- __S__ – všechny porty jsou SFP 
- Existuje další řada možností, většinou jsou specifické pro daný model 

Stažení IOSu 

- Stáhnout IOS je možné na Cisco stránkách, pro přístup je však třeba účet s dostatečným oprávněním 
- Pro určitý switch a určitou verzi IOSu existuje několik variant softwaru pro stažení 

Verze IOS 

- Operační IOS je uložen v image souboru BIN, možné je také stáhnout i verzi s webovým rozhraním, která má příponu TAR \(bin soubor \+ adresář HTML\) 
- Dále můžeme volit verzi s šifrováním nebo bez 
- Určitá verze IOS nám nabízí určité funkce, pokud chceme vyšší funkcionalitu, musíme zakoupit vyšší verzi IOS 
	- Layer 2 switch – má k dispozici pouze LAN BASE verze IOSu 
	- Layer 3 switch – má k dispozici i IP BASE 
- Vyšší verze IOS obsahuje vždy to co nižší 

Záloha IOSu  

- Pro kopírování dat z/na switch slouží standardně TFTP server 
- Záloha konfigurace probíhá stejně jako záloha IOSu, pouze změníme jméno kopírovaného souboru 

Obnova hesla 

- Pokud zapomeneme heslo a chceme se přihlásit, a přitom nechceme přijít o aktuální konfiguraci 
- Potřebujeme mít fyzický přístup ke switchi 

Princip 

- Nastartujeme switch bez startup konfigurace 
- Přihlásíme se do privilegovaného módu \(bez hesla\) 
- Zkopírujeme naší původní konfiguraci do běžící 
- Nastavíme heslo 
- Konfiguraci uložíme 

  

Postup 

1. Se switchem se spojíme konzolově \(sériovým kabelem\) 
2. Vypojíme napájení ze switche 
3. Stiskneme a držíme tlačítko MODE 
4. Zapojíme napájení 
5. Switch se zastaví v úvodním bootování 
6. Následně zadáme tyto příkazy 

  

  

Význam, konfigurační módy, zadávání příkazů, licencování, verze IOS, bezpečnost, obnova hesla, zálohování, zásady bezpečného provozu Cisco zařízení   

27\) Bezpečnost sítí 

Možnosti útoků v sítích 

- Odposlech při přenosu 
- Falšování identity \(Man in the Middle, zkopírování MAC adresy atd\.\) 
- Automatizované programové útoky __\(viry, trojské kotě atd\.\)__ 
- Přetížení nebo zahlcení zdrojů \(spamování, DoS, DDoS\) 
- Získávání soukromých informací 
- Podvržení informací 
- Spyware, adware 

Pasivní útoky 

- Cílem je získat nebo využít informace ze systému, __nemají však vliv na systémové prostředky__ 
- Při pasivním útoku útočník pouze monitoruje komunikační kanál a ohrožuje důvěrnost dat 
- Povaha pasivních útoků tedy spočívá v odposlouchávání či monitorování přenosu s cílem získat přenášené informace 

*Odposlouchávání* 

- Většina síťové komunikace probíhá v nezabezpečeném formátu, tedy v podobě otevřeného \(nešifrovaného\) textu; to umožňuje útočníkovy, který získal přístup k přenosové cestě v síti, aby „naslouchali“ čili četli přenášená data 
- Možnost odposlechu síťového provozu je největší problém 
- Nejsou\-li použity silné šifrovací služby založené na bezpečných kryptografických principech, mohou ostatní uživatelé zcela volně číst data přenášená v síti 

*Analýza provozu* 

- V tomto případě jde o zachycování a zkoumání přenášených zpráv s cílem odvodit určité informace z typického průběhu komunikace 
- To je možné provádět i v případě, kdy jsou zprávy šifrované a nelze je dešifrovat 
- Obecně platí čím větší je počet zpráv, které jsou takto sledovány, nebo dokonce zachyceny a uloženy, tím více poznatků můžeme ze síťového provozu vyvodit 

Aktivní útoky 

- Aktivní útoky se pokoušejí měnit systémové prostředky nebo ovlivnit jejich funkčnost 
- Při tomto typu útoku se útočník snaží data přenášená příslušným kanálem odstranit, přidat nebo jinak měnit 
- Aktivní útočník ohrožuje integritu dat, jakož i autentizaci a důvěrnost 
- Součástí aktivních útoků je nějaká změna datového toku nebo vytvoření falešného toku 

*Maškaráda* 

- Jedná se o typ útoku, kde útočník předstírá, že je oprávněný uživatel a jeho cílem je získat přístup k systému, případně větší uživatelská oprávnění, než jaká mu náleží 

*Přehrání zprávy* 

- Při tomto druhu útoku je původní zpráva podvodně opakována nebo zpožděna 

*Pozměnění zprávy* 

- Útočník odstraní zprávu ze síťového toku, pozmění ji a znovu ji do sítě vyšle 

*Člověk uprostřed \(MitM\)* 

- Útočník odposlouchává komunikaci mezi dvěma stranami – obvykle mezi koncovým uživatelem anebo serverem 
- Útočník může takto získané informace využít ke zcizení identity nebo k jiným podvodům 

*Zahlcení systému* 

- Útočník využije velké množství napadených počítačů \(tvoří síť botnet\) k zahlcení cílového systému 

Ochrana před útoky 

- Zakázat přístup k sítím nepovolaným osobám – statické IP adresy,  
- vypínání nepoužívaných zásuvek switchů 
- Blokování útoků firewallem 
- Detekování a zneškodnění útoků – IDS  
- Znemožnění přístupu – VLAN \(Virtual LAN\), VPN \(Virtual Private Network\) 

SNMP \(Simple Network Managment Protocol\) 

- Slouží potřebám správy sítí a jejich následné vyhodnocování 
- Umožnuje průběžný sběr nejrůznějších dat pro potřeby správy sítě 
- Na tomto protokolu je dnes založena většina prostředků a nástrojů pro správu sítě 
- Jednoduchý, široce rozšířený a užitečný standardizovaný protokol, který slouží k získávání nebo nastavování hodnot na určitém zařízení 
- SNMP podporují aktivní síťové prvky, počítačová čidla, tiskárny, AP atd\. 

Funkce SNMP 

- Protokol využívá pro komunikaci dvě strany 
- Jednou je entita správce \(manager\) a druhou agent 
- SNMP pracuje ve dvou režimech činnosti: 
	- __Správce posílá dotazy agentovi a přijímá odpovědi\.__ Hodnoty tedy může získat i více správců a mohou se ptát kdykoliv 
	- __Agent zasílá oznámení \(trapy\) na dresu správce\.__ V nějakých definovaných situacích \(překročení nějaké hodnoty nebo i v pravidelném intervalu\) odesílá agent jednomu správci hodnoty 
- SNMP používá pro komunikaci protokol UDP, díky čemuž je rychl 
-  

Nasazení ACL, AAA, VPN 

ACL \(Access Control List\) 

- Seznam oprávnění připojený k nějakému objektu \(např\. souboru\) 
- Seznam určuje, kdo nebo co má povolení přistupovat k objektu a jaké operace s ním může provádět 
- U modelu ACL před provedením každé operace proběhne prohledání ACL a nalezne odpovídající záznam, podle kterého se rozhodně, zda může uživatel provést operaci 
- ACL se klasifikují do dvou kategorií volitelné a povinné 
	- __Volitelné__ – systém s volitelným řízením přístupu umožňuje tvůrci či vlastníkovi objektu plně řídit přístup k objektu, včetně například úpravy ACL tak, aby přístup získal kdokoli jiný 
	- __Povinné__ – u povinného řízení přístupu jsou všechny operace podmíněny i omezeními stanovenými operačním systémem\. Tyto omezení jsou nad rámec omezení definovaných v ACL 

AAA \(Authentication, authorization and accounting protocol\) 

- __Autentizace__ – potvrzování, že uživatel požadující službu je platným uživatelem poskytovaných síťových služeb\. Autentizace je dosažena pomocí představení identity a jistého pověření nebo např\. hesla, digitální certifikáty nebo telefonní čísla 
- __Autorizace__ – udělení specifického typu služby uživateli na základě jeho autentizace, služeb, které požaduje a aktuálního stavu systému\. Může být založena na omezeních, např\. omezení určité hodiny v rámci dne, nebo omezení na fyzickou polohu, nebo počet přihlášení 
- __Účtování__ – sledování využívání síťových služeb uživatele\. Tyto informace mohou být použity pro správu, plánování, účtování, nebo další účely\. Účtování v reálném čase je doručeno současně s využíváním zdrojů 

VPN \(Virtual Private Network\) 

- VPN vytváří prostředí, které mohou uživatelé považovat za své vlastní – mohou o něm i rozhodovat – o jeho vlastnostech, parametrech, nastavení, zabezpečení apod\. 
- Také mohou rozhodovat, jestli do něj pustí jiné uživatele a za jakých podmínek 
- Privátní prostředí VPN není skutečné, ale jen virtuální 
- Poskytuje větší zabezpečení, při navazování spojení vyžaduje totožnost obou stran ověřit pomocí digitálních certifikátů atd\. 
- Veškerá komunikace je šifrovaná 
- Při vytváření sítě nemusí budovat žádnou přenosovou infrastrukturu 
- Př: Ve firmě se zprovozní VPN server, to umožní mít bezpečnou a šifrovanou firemní komunikaci a pro připojení odkudkoli z Internetu, do firemního intranetu \(vnitřní sítě\) se mohou daní VPN klienti připojit\. VPN server tvoří funkci síťové brány, která zprostředkovává připojení, šifrování, bezpečnost a připojení do dané sítě\. 

28\) WAN technologie

Sériová komunikace 

- Neboli sériový přenos, je proces přenosu dat postupně po jednotlivých bitech 
- Data se přenášejí pomocí komunikačního kanálu nebo sběrnice 
- Sériová komunikace je přímí protiklad paralelní komunikace, kde je několik bitů posíláno najednou \(linkou obsahující několik paralelních přenosových kanálů\) 
- Sériová komunikace se používá na dálkových linkách a ve většině počítačových sítích, kde činí cena kabelu a synchronizační potíže paralelní komunikaci nepraktickou 
- Na krátké vzdálenosti se sériová komunikace používá čím dál více, protože odstraňuje problémy, na které narazila paralelní komunikace \(parazitní kapacity, přeslechy, problém synchronizace\) 
- Vylepšená technologie učinila sériovou komunikace konkurenceschopnou \(například přechod od PCI sběrnice na PCI\-Express\) 
- Příklady: 
	- Ethernet, USB, FireWire, PCI\-Express atd\. 

Sériová sběrnice 

- Sériová sběrnice používá pro přenos dat a řízení sběrnice jeden vodič \(resp\. Dvojici signál\-nulový vodič\) nebo více vodičů 
- Data jsou většinou přenášena v sériové posloupnosti pomocí jednoho signálu 

 

Paralelní komunikace 

- Neboli paralelní přenos, je proces přenosu dat, kdy je několik bitů posíláno najednou \(několik zároveň\) pomocí komunikačního kanálu nebo sběrnice 
- Je to přímý protiklad sériové komunikace, kde jsou jednotlivé bity posílány za sebou 
- Paralelní komunikační rozhraní obsahuje několik drátů 
- Příklady:      
	- ISA, ATA, SCI, PCI, FSB 

Paralelní komunikace VS Sériová komunikace 

- Ještě před vysokorychlostními sériovými technologiemi, byla volba paralelního propojení přes sériové linky ovlivněna těmito faktory: 
	- __Rychlost__  
	- __Délka kabelu__ – omezení paralelního přenosu je dáno vzdáleností, protože kterékoliv zpoždění na některém drátu znamená nesrozumitelný znak při příjmu 
	- __Složitost__ – Paralelní datová spojení, jsou snadno realizována v hardwaru 

 

TDM \(Time Division Multiplex\) 

- Časový multiplex \(časové dělení\) je princip přenosu více signálů jedním společným přenosovým médiem, při kterém jsou jednotlivé signály odděleny tím, že se na každý z nich vysílá pouze v krátkých pevně definovaných časových intervalech \(„každý chvilku tahá pilku“\) 
- Prakticky ve všech případech se používá rámcové struktury, kde jsou časové sloty seskupeny do větší pravidelně se opakující struktury \(rámec, frame\) 
- Vstupy mají digitální podobu \(jsou to proudy dat\) 
- Rozdělí se „v čase“ na pevně dané časové úseky 
- Každému jednotlivému vstupu je přidělena a vyhrazena určitá pevně daná posloupnost časových úseků \(timeslotů\) 
- Příslušný vstup vkládá svá data do přidělených timeslotů a nechá je přenést skrze přenosovou cestu 

  

 

  

- Výsledkem je rozdělení jednoho \(„většího“\) přenosového okruhu či kanálu na několik menších přenosových okruhů \(kanálů\), které se chovají \(a dají využít\) samostatně 
- V hodné použít tam kde vstupy generují stejnou zátěž \(data se přenáší stále stejnou rychlostí\) 
- Využití všude tam, kde se hodí fungování na principu přepojování okruhů 

  

STDM \(Static Time Division Multiplex\) 

- Digitální technika multiplexu 
- Rozdíl oproti časovému multiplexu: 
	- Přidělení jednotlivých časových úseků \(timeslot\-ů\) konkrétním vstupům není pevné a neměnné v čase, ale mění se podle potřeby 
	- Každý jednotlivý timeslot je přiřazován dynamicky \(svá data do něj může vložit ten vstup, který to právě potřebuje\) 
- Představa: 
	- Společná přenosová kapacita se chová jako nekonečný vlak, pohybuje se vpřed konstantní rychlostí, všechny jeho vagóny \(timesloty\) jsou stejně velké 
	- Každý vstup může umístit svá data do vagónu, který je právě volný, ale musí svá data označit, aby příjemce věděl, komu patří 

  

- Ne vždycky může být k dispozici volný vagón \(timeslot\) \-> je nutné počkat 
- Proto statický multiplex negarantuje přenosovou kapacitu ani konstantní zpoždění  
- Nezachovává pravidelnost 
- Hodí se tam, kde jednotlivé vstupy generují nerovnoměrnou zátěž 
- Požadavky na jednotlivých vstupů jsou vyřizovány principu „kdo první přijde …“ 

  

Koncové zařízení přenosu dat 

- DTE \(Data terminal equipment\), je koncové zařízení sloužící k přenosu dat 
- V sítích to je počítač nebo terminál, který komunikuje pomocí datového okruhu 
- Klasifikace \(DTE/DCE\) pochází z firmy IBM  
- DTE \(Data Terminal Equipment\) – popisuje spouštěče sériového spojení, typicky PC 
- DCE \(Data Communications Equipment\) – popisuje zařízení připojené k DTE, viz\. Model 

  

HDLC \(High\-Level Data Link Control\) 

- Vysokoúrovňové řízení datového spoje je komunikační protokol linkové vrstvy 
- Poskytuje spolehlivou spojovanou i nespolehlivou nespojovou službu 
- Může využít half\-duplex i full\-duplex 
- Může se používat na vícebodových vyhrazených spojích, na dvoubodových pevných nebo komutovaných linkách, i v sítích s přepojováním paketů 
- Stanice mohou spolu komunikovat v různých režimech \(nadřízený\-podřízený nebo rovnocenný\) 

Funkce HDLC 

- Hlavní službou protokolu HDLC je spolehlivý přenos informací vyšší vrstvy 
- HDLC se používá na sériových linkách, které přenášejí data jako nečleněný proud bitů nebo bytů  
- Jedním z úkolů HDLC je proto poskytnout metodu pro identifikaci začátku a konce rámce 
- HDLC identifikuje začátek a konec rámce, využívá křídlové značky \(flag\), také se nazývá oddělovač rámce nebo příznak  

Demarkační zóna 

- Měla by být v každé síti 
- Pásmo, kde jsou servery a teoreticky by tyto servery by neměli být nikterak ohroženy vnějšími vlivy  
- Obvykle je schovaná za firewallem  
- Podmínky relativního klidu, bezpečný prostor 

Sériová / paralelní komunikace, TDM, STDM, demarkační zóna, DCE\-DTE, HDLC zapouzdření základní komunikační protokoly sériových linek, konfigurace základních protokolů WAN  

29\) WAN širokopásmová připojení 

- Přenosová rychlost závisí na mnoha faktorech a hlavním z nich je šířka přenosového média, která uvádí maximální dosažitelnou rychlost daného kanálu  
- Nestačí pouze zdokonalování kvality signálu, ale musíme i zvýšit šířku pásma 
- To je hlavní motiv široko pásmových připojení 
- Dělí se na dvě základní skupiny: 

Technologie DSL \(Digital Subscriber Line\) 

- Běžná telefonie i sítě ISDN \(Integrated Services Digital Network\) využívají drátové místní smyčky jen na malý zlomek skutečného přenosového potenciálu \(nejvyšší rychlost 56 kbps\) 
- Existují však i technologie schopny fungovat na libovolné drátové lince s přesnou rychlostí v řádu megabitů za sekundu\. Tyto technologie je nazývají DSL 
- DSL funguje tak, že se oba konce místní smyčky osadí DSL modemy, které na této lince vytvoří digitální přenosový kanál s velkou přenosovou kapacitou 
- Využívají jinou frekvenci, než na kterém funguje klasická telefonie\. Uživatel tedy může současně být na internetu a zároveň být připojen k vysokorychlostnímu internetu přes jediný drát 
- V praxi se spíše využívá ADSL \(Asymetric DSL\), poskytuje různé přenosové rychlosti ve směru k uživateli a od něj 

Wi\-Fi připojení 

- Bezdrátová technologie 
- Hlavní výhodou je nízká cena, nevýhodou může být rušení, zakryté vysílání atd\. 
- Většinou centrální bod \(AP\) zprostředkovává přístup všem zařízením v dosahu 

PPPoE \(Point\-to\-Point over Ethernet\) 

- Síťový protokol, který zapouzdřuje PPP rámec do ethernetových rámců 
- PPPoE umožňuje vytvářet spoje typu bod\-bod \(peer\-to\-peer\) na přepínaných ethernetových sítích 
- Klienti jsou připojeny k přístupovému bodu, každý klient má své vlastní PPP spojení a jeví se jako nezávislý adaptér 
- Pro vytvoření PPP spojení musí klient znát MAC adresu vzdálené strany a jednoznačnou identifikaci spojení, tyto údaje získá během vyhledávací fáze \(discovery stage\) 
- PPP protokol má dvě fáze: 
	- Vyhledávání přístupového bodu – klient vyšle broadcast, úvodní paket, jeden nebo více přístupových bodů mu odpoví nabídkou připojení\. Z těchto přístupových bodů si klient vybere jeden a dále s ním komunikuje přímo \(unicast\)\. Klient pošle žádost o zřízení spojení a přístupový bod mu potvrdí připojení\. Jakmile klient příjme potvrzení, můžeme přejít do druhé fáze – PPP spojení 
	- Udržování PPP spojení 

  

VPN \(Virtual Private Network\) 

- VPN vytváří prostředí, které mohou uživatelé považovat za své vlastní – mohou o něm i rozhodovat – o jeho vlastnostech, parametrech, nastavení, zabezpečení apod\. 
- Také mohou rozhodovat, jestli do něj pustí jiné uživatele a za jakých podmínek 
- Privátní prostředí VPN není skutečné, ale jen virtuální 
- Poskytuje větší zabezpečení, při navazování spojení vyžaduje totožnost obou stran ověřit pomocí digitálních certifikátů atd\. 
- Veškerá komunikace je šifrovaná 
- Při vytváření sítě nemusí budovat žádnou přenosovou infrastrukturu 
- Př: Ve firmě se zprovozní VPN server, to umožní mít bezpečnou a šifrovanou firemní komunikaci a pro připojení odkudkoli z Internetu, do firemního intranetu \(vnitřní sítě\) se mohou daní VPN klienti připojit\. VPN server tvoří funkci síťové brány, která zprostředkovává připojení, šifrování, bezpečnost a připojení do dané sítě\. 

GRE \(Generic Routing Encapsulation\) 

- Je protokol ze skupiny TCP/IP \(transportní vrstva\) určený k zapouzdření paketů jednoho protokolu do jiného 
- Používá se ve VPN k přenosu IPv6 paketů v síti IPv4 k tunelování obecně 

IGP \(Interior gateway protocol\) 

- Používá se pro směrovací protokoly sloužící k výměně směrovacích informací mezi routery v rámci autonomního systému \(AS\), opakem je protokol EGP \(Exterior gateway protocol\), které se používají pro výměnu směrovacích informací mezi autonomními servery 

Typy IGP 

*Směrovací protokoly založené na vector\-distance* 

- U těchto protokolů nemá žádný směrovač informace o plné topologii sítě 
- Každý router označuje vzdálenosti do jednotlivých sítí svým sousedům a přijímá od nich podobná oznámení 
- Z přijatých informací si každý router vytváří svoji routovací tabulku a v dalším cyklu rozesílá aktualizované informace ze své routovací tabulky 
- Celý proces se opakuje, dokud směrovací tabulka každého směrovače nedokonverguje \(dokud nemá kompletní informace o topologii sítě\) ke stabilním hodnotám 
- Příklady vector\-distance: 
	- RIP 
	- RIPv2 
	- RIPng 
	- IGRP 

  

  

   

*Směrovací protokoly založené na link\-state* 

- U tohoto protokolu má každý router informace o kompletní topologii sítě 
- Každý router pak nezávislé vypočítá nejlepší první krok \(next hop\) do každého možného cíle sítě pomocí lokální informace o topologii  
- Kolekce nejlepších další hopů \(next hops\) tvoří routovací tabulka 
- U vector\-distance každý uzel sdílí svou směrovací tabulku se svými sousedy\. U protokolu link\-state se mezi uzly předává pouze informace potřebné pro vytváření map konektivity 
- Příklady link\-state: 
	- OSPF 
	- IS\-IS 

EGP \(Exterior Gateway Protocol\) 

- EGP je nyní zastaralý směrovací protokol pro Internet 
- Jedná se o protokol, který předává pouze informace o dosažitelnosti 

AS \(Autonomní server\) 

- Je skupina routerů a IP prefixů se společnou směrovací politikou a pod společnou správou 

BGP 

- BGP protokol se řadí na pomezí link\-state a vector\-distance 
- Někdy bývá nazýván jako path\-vector \(posloupnost čísel AS, přes které vede cesta k nějaké siti\)\. Protože cesta nesmí obsahovat smyčku, číslo každého AS se objeví pouze jednou 
- Path\-vector také vybírá nejkratší možnou cestu \(cesta kde je nejmenší počet AS\) 
- Vazba mezi BGP routery různých AS nazýváme externí BGP \(eBGP\) 
- Vazbu mezi BGP routery ve stejném AS nazýváme interní BP \(iBGP\)
