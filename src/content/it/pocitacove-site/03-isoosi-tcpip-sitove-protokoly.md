---
title: "ISOOSI, TCPIP, síťové protokoly"
order: 3
source: "MATURITA HADR/IT/12. ISOOSI, TCPIP, síťové protokoly.docx"
---
- Přenos informací v počítačové síti je obecně složitá úloha sestávající se z mnoha kroků
- Proto se komunikace rozděluje do několika úrovní, kdy každá vrstva řeší pouze určité kroky spojené s přenosem
- Jedná se o doporučený model sítě, který rozděluje vzájemnou komunikaci mezi zařízeními do 7 vrstev
- Úkolem každé vrstvy je poskytovat služby následující vyšší vrstvě a nezatěžovat vyšší vrstvu detaily o tom, jak je služba ve skutečnosti realizována
- Než se data přesunou z jedné vrstvy do druhé rozdělí se do paketů v každé nižší vrstvě se pak k paketu přidávají další doplňkové informace, které jsou nezbytné pro správný přenos dat po síti
- Vrstvy referenčního modelu ISO/OSI od nejvyšší vrstvy po tu nejnižší:
	- Aplikační vrstva – aplikace, zpřístupňující uživateli síťové služby, zabezpečuje přístup k souborům na jiných počítačích, vzdálený přístup k tiskárně, elektronickou poštu, přístup do databáze; využívá služeb nižších vrstev a díky tomu je izolována od problémů síťových technických prostředků
	- Prezentační vrstva – až do úrovně prezentační vrstvy se všechny nižší vrstvy snaží, aby přenesly data přesně v takové podobě, v jaké byly odeslány, tedy bit po bitu; někdy ale tentýž řetězec bitů může mít pro různé uzly různý význam – například oba komunikující používají jiný způsob kódování znaků a proto je potřebu udělat konverze, aby data odeslaná měla stejný význam jako ta přijatá
	- Relační vrstva – úkolem této vrstvy je navázat a ukončit spojení s příjemce našich odeslaných dat a naopak; tvoří relaci mezi mým počítačem a třeba se serverem webu na který se chceme podívat
	- Transportní vrstva \- zajišťuje vlastní přenos dat\. Přijímá data z relační vrstvy, rozkládá je na pakety a přenese paket při každém přístupu na síťovou vrstvu\. Zabezpečuje, aby se celá zpráva dostala k příjemci správně; vezme data z předešlých třech vyšších vrstev a rozseká je na segmenty z důvodu bezpečnosti a rychlosti
	- Síťová vrstva – hlavní úkolem síťové vrstvy je směrování, neboli nalezení vhodné cesty vedoucí od odesilatele dat až k jejich koncovému příjemci; v realitě nemusí být každá dvojice sousední – to znamená, že mezi nimi neexistuje přímé spojení; nejčastěji bývá mezi odesílatelem a příjemcem několik jiných uzlů; data jsou přenášena v blocích, kterým se říká pakety; představa fungování je taková, že síťová vrstva v určitém uzlu rozhodne o dalším směru, kterým by měl být konkrétní paket přenesen k některému ze sousedních uzlů a tato činnost se opakuje dokud nedorazí k příjemci
	- Linková vrstva – pomocí fyzické vrstvy, která předá linkové vrstvě pouze konkrétně seřazené bity linková vrstva je převede na rámce; což znamená, že se musí postarat o správné rozpoznání začátku a konce každého rámce i jeho jednotlivých části, včetně hlavičky a adres; v případě opačném \(jdeme od spodu nahoru\) linková vrstva odtrhne z rámce určitá data a předá je síťové vrstvě v podobě paketů
	- Fyzická vrstva – stará se o to, aby každý bit byl přenesen korektním způsobem, aby jej příjemce správně rozpoznal a interpretoval; fyzická vrstva sama o sobě neinterpretuje přenášené bity = nesnaží se jim přiřazovat nějaký význam
- První tři vrstvy modelu ISO/OSI jsou vrstvy orientované na přenos dat; čtvrtá vrstva slouží jako přizpůsobovací vrstva a poslední tři vrstvy jsou orientované na podporu aplikací

TCP/IP

- TCP protokol – je nejpoužívanějším protokolem transportní vrstvy sadě protokolů TCP/IP; protokol garantuje spolehlivé doručování a doručování ve správném pořadí; také umožňuje rozlišovat a rozdělovat data pro více aplikací
- IP protokol – základním protokolem pracujícím na síťové vrstvě; poskytuje datagramovou \(základní jednotka, která je přepravována v síti s přepojováním paketů, kde není zajištěno jejich doručení\) službu celé rodině protokolů TCP/IP
- V řadě případů lze realizaci složitého procesu rozdělit na skupiny jednodušších procesů a tím je výsledná realizace mnohem pružnější, univerzálnější a rychlejší
- Při dělení je snaha vytvořit skupiny, aby zahrnovaly procesy blízké sobě a aby skupian operací byla co nejucelenější
- Název této technologie vznik ze zkratek názvů dvou protokolů této technologie TCP a IP
- TCP/IP je jedním z mnohých řešeních pro komunikaci v počítačové síti \(ISO/OSI\)
- Model TCP/IP se skládá ze 4 základních vrstev přičemž poslední vrstva může být někdy rozdělována na dvě části po vzoru ISO/OSI; začneme od nejvyšší po nejnižší:
	- Aplikační vrstva – zahrnuje uživatelské aplikace, které generují data pro přenos a zpracovávají data přijatá; funkce této vrstvy zahrnuje také komunikaci s uživatelem; dále může zajistit služby pro zkomprimování nebo zabezpečení přenášených dat; tato vrstva vznikla spojením 7\+6\+5 vrstvy modelu ISO/OSI jelikož všechny tři vrstvy jsou softwarové a výsledkem těchto tří vrstev jsou data, která jsou předána vrstvě transportní
	- Transportní vrstva – zajišťuje multiplexování \(skládání více datových toků – pokud jdeme v modelu zespoda nahoru\) nebo demultiplexování \(rozkládání jednoho datového toku do více datových toků do segmentů\); na transportní vrstvě se pracuje se segmenty, které jsou dále rozsekávány do packetů nebo slučovány do dat; další funkcí je zajištění spolehlivého přenosu \(je zajištěna detekce a následná korekce ztracených datových jednotek\) správně pořadí dat je zajišťováno číslováním datových jednotek
	- Síťová vrstva – na základě adres provádí vyhledávání cesty od vysílače k přijímači – směrování; nejvýznamnějším protokolem síťové vrstvy je IP; datové jednotky jsou nazývány pakety a vychází ze třetí síťové vrstvy modelu ISO/OSI
	- Vrstva síťového rozhraní – zajišťuje přenos rámců mezi dvěma přímo propojenými počítači, v této vrstvě jsou definované metody přístupu na medium, tato vrstva pracuje s rámci a vznikla spojením prvních dvou vrstev modelu ISO/OSI

Síťové protokoly

- Aplikační vrstva:
	- DNS – převádí doménová jména na IP adresy a naopak
	- DHCP – přiděluje zařízením v síti výchozí bránu, masku a IP adresu
	- FTP – přenos souborů po síti
	- http – internetový protokol určený pro komunikaci s WWW servery
	- IMAP – e\-mailová komunikace – přenos doručené zprávy ze serveru na počítač
	- NFS – pro vzdálený přístup k souborům přes počítačovou síť
	- POP3 – pro získání pošty ze serveru
	- Telnet – umožňuje připojení ke vzdáleném počítači pomocí textového uživatelského rozhraní
- Prezentační vrstva
	- NCP – protokol používaný pro komunikaci klientských stanic se servery v operačním systému Novell
- Relační vrstva
	- NetBIOS – zpřístupnění dat uložených na vzdálených počítačích
	- SMB – slouží ke sdílenému přístupu k souborům, tiskárnám a dalším komunikaci mezi uzly v síti
- Transportní vrstva
	- TCP – pomocí něho mohou počítače připojené do sítě vytvořit mezi sebou spojení, přes které mohou obousměrně přenášet data spolehlivě a ve správném pořadí
	- UDP – datagramy přenášeny mezi počítači v síti a je označován jako nespolehlivý nebo spíše bez záruky doručení, ale je rychlejší
- Síťová vrstva
	- IPv4 – jde o protokol přepravující data bez záruky to je ponecháno na vyšší vrstvě TCP a má 32 bitů
	- IPv6 – nastupující protokol a nahrazuje IPv4 a má 128 bitů
- Linková vrstva
	- ARP \- protokol sloužící k zjištění MAC adresy pokud známe IP adresu
	- RARP  \- protokol fungující stejně jako ARP, ale obráceně známe MAC a chceme IP
