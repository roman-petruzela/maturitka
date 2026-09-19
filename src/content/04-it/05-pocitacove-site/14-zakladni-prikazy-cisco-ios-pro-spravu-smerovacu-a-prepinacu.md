---
title: "Základní příkazy Cisco IOS pro správu směrovačů a přepínačů"
order: 14
source: "MATURITA HADR/IT/RTR_CMD-2-CZ-_29_.pdf"
---
Josef Kaderka

Verse 28

Inspirace Boson

Příkazy jsou uváděny v základním tvaru, bez kontextu (tj. aktuálního módu), předpokládá se jeho znalost nebo vypěstování Cisco IOS intuice. Například je uveden příkaz pro přiřazení IP adresy rozhraní **ip address {adr} {sm} .** Pro jeho zadání je ale nutno napřed přejít do privilegovaného módu (příkaz **enable** ), pak do globálního konfiguračního módu (příkaz **configure terminal** ) a pak do specifického konfiguračního módu (příkaz **interface** **_{int}_** ).

## **Správa směrovačů**

|**Konfigurační módy**||**význam promptu**|
|---|---|---|
|Uživatelský EXEC mód||**Router >**|
|Privilegovaný EXEC mód||**Router #**|
|Globální konfigurační mód||**Router(config) #**|
|Specifický konfigurační mód|– konfigurace rozhraní<br>– konfigurace logického rozhraní<br>– konfigurace směrování<br>– konfigurace linky (CON,AUX)|**Router(config-if)#**<br>**Router (config-subif) #**<br>**Router(config-router) #**<br>**Router(config-line) #**|

|**Základní operace se směrovačem**||
|---|---|
|Přechod do privilegovaného EXEC módu|**enable**|
|Návrat do uživatelského EXEC módu|**disable**|
|Odhlášení se od směrovače|**exit**, **logoff**|
|Restart operačního systému směrovače|**reload**|
|Předchozí příkaz|**\<šipka nahoru\>** nebo **\<Ctrl\>\<p\>**|
|Následující příkaz|**\<šipka dolů\>** nebo **\<Ctrl\>\<n\>**|
|Přesun o jeden znak vpravo|**\<šipka vpravo\>** nebo **\<Ctrl\>\<f\>**|
|Přesun o jeden znak vlevo|**\<šipka vlevo\>** nebo **\<Ctrl\>\<b\>**|
|Přerušení operace (Break)|**\<Shift\>\<Ctrl\>\<6\>\<x\>**|
|Prosté obnova obsahu displeje (bez vložení příkazu)|**\<Ctrl\>+\<L\>**|
|Automatické doplňování příkazu a parametrů|**\<Tab\>**|
|Nápověda (vždy kontextově orientovaná)|**\<?\>** nebo **help**|
|Stačí uvést tolik znaků, aby byl příkaz jednoznačný|**sh run** místo **show running-config**|
|Počet řádků konsoly na stránku|**terminal length {n}**|

|**Zjišťování údajů o směrovači**||
|---|---|
|Verse IOSu, velikosti pamětí a hodnota konfiguračního registru|**show version**|
|Výpis aktuální konfigurace (z operační paměti - RAM)|**show running-config**|
|Výpis uložené konfigurace (z pevné paměti - NVRAM)|**show startup-config**|
|Využití procesoru|**show processes cpu**|
|Obsah paměti flash, volné, obsazené a celkové místo|**show flash:**|
|Obsah paměti flash|**dir flash:**|
|Souhrnný přehled o stavu všech rozhraní (jejich systémová<br>označení, IP adresy, stav fyzické a linkové vrstvy)|**show ip interface brief**|

|**Konfigurace směrovače**||
|---|---|
|Smazání uloženého konfiguračního souboru|**erase startup-config**|
|Restart (v případě výzvy nic neukládat!)|**reload**|
|Přechod do globálního konfiguračního módu|**configure terminal**|
|Směrovač se bude jmenovat Brno|**hostname Brno**|
|Návrat o jednu úroveň konfigurace zpět|**exit**|
|Návrat z libovolné úrovně do základního EXEC módu|**end, Ctrl-z**|
|Kopírování z tftp serveru do operační paměti (RAM)|**copy tftp running-config**|
|Z pevné paměti (NVRAM) do operační paměti (RAM); použít<br>jen nebyla-li již provedena konfigurace – vznikla by směs|**copy startup-config running-config**|
|Z pevné paměti (NVRAM) do operační paměti (RAM); aktuální<br>konfigurace v RAM bude přepsána|**configure replace nvram:startup-config**|
|Z tftp serveru do paměti flash|**copy tftp flash**|
|Z paměti flash do tftp serveru|**copy flash tftp**|
|Uložení aktuální konfigurace u operační paměti (RAM) do<br>pevné paměti (NVRAM)|**copy running-config startup-config**|
|Uložení aktuální konfigurace u operační paměti (RAM) do<br>pevné paměti (NVRAM) – stará, leč funkční alternativa|**write**|


|Exaktní specifikace IOS (souboru jej obsahující), který má být<br>zaveden z paměti flash (použití, je-li ve flash více IOSů)|**boot system flash {**_filename_**}**|
|---|---|
|Exaktní specifikace IOS (souboru jej obsahující), který má být<br>zaveden z tftp serveru|**boot system tftp {**_filename_**}**|
|Vytvoření lokálního uživatele a přiřazení hesla|**username {user} password {password}**|
|**Hesla, vzdálený**|**přístup**|
|Nastavení hesla „class“ pro přístup přes konsolu|**line console 0**<br>**password class**<br>**login**|
|Nastavení hesla „class“ pro vzdálený přístup (telnet, ssh),<br>současně až 5 uživatelů (virtuální terminály 0 až 4)|**line vty 0 4**<br>**password class**<br>**login**|
|Počet minut do automatického odhlášení (0 – nikdy)|**exec-timeout {n}**|
|Nastavení hesla „cisco“ pro přechod do privilegovaného módu|**enable password cisco**|
|Hashování (MD5) hesla „cisco“ pro přechod do privilegovaného módu|**enable secret cisco**|
|Šifrování všech hesel (slabým algoritmem)|**service password-encryption**|
|**Vzdálený přístup pomocí ssh**||
|Nastavení jména vlastní domény|**ip domain-name skoleni.org**|
|Vygenerování asymetrických klíčů|**crypto key generate rsa**|
|Bude se používat ssh protokol verse 2|**ip ssh version 2**|
|Přístup pouze pomocí ssh|**line vty 0 4**<br>**transport input ssh**|

|**Konfigurace sériového rozhraní**||
|---|---|
|Je to DCE nebo DTE?<br>|**show controller serial 0/1/0**<br>|
|Konfigurovat rozhraní (čísla udávají "pozici" modulu)|**interface serial 0/1/0**|
|U DCE nutno nastavit kmitočet hodinového signálu|**clock rate 64000**|
|Zápis šířky pásma [kb/s] (nemá přímý funkční význam!)|**bandwidth 64**|
|Aktivace rozhraní|**no shutdown**|
|Ověření stavu rozhraní|**show interface serial 0/1/0**|
|**Konfigurace virtuálního rozhraní (loopback)**||
|Vytvoření rozhraní typu loopback se zvoleným číslem 0|**interface loopback 0**|
|Přiřazení IP adresy rozhraní loopback 0|**ip address 10.0.0.1 255.255.255.255**|
|**Cisco Discovery Protocol (CDP)**||
|Přehled přímo připojených Cisco zařízení (jméno, identifikátor<br>místního rozhraní, vlastnosti, typ, identifikátor vzdáleného rozhraní)|**show cdp neighbors**|
|Navíc podrobnosti o operačním systému a hardware|**show cdp neighbors detail**|
|Zákaz CDP|**no cdp run**|

|**TCP/IP**||
|---|---|
|Zákaz směrování (standardně je povoleno)|**no ip routing**|
|Přiřazení IP adres rozhraním a jejich aktivace|**interface serial 0/1/0**<br>**ip address 157.89.1.3 255.255.0.0**<br>**no shutdown**<br>**interface fastethernet 0/0**<br>**ip address 208.1.1.4 255.255.255.0**<br>**no shutdown** |


|**Směrování – RIP, RIPv2, EIGRP, OSPF**||
|---|---|
|Statický směrovací záznam – cílová síť, maska, následující<br>směrovač (157.89.10.1)|**ip route 160.216.0.0 255.255.0.0 157.89.10.1**|
|Statický směrovací záznam pro výchozí cestu (default<br>router/gateway- 157.89.10.1)|**ip route 0.0.0.0 0.0.0.0 157.89.10.1**|
|Zahrnutí statického směrovacího záznamu o výchozí cestě do<br>informací předávaných směrovacím protokolem|**default-information originate**|
|Konfigurace směrovacího protokolu RIP|**router rip**|
|Budou propagovány adresy sítí 157.89.0.0 a 208.1.1.0|**network 157.89.0.0**<br>**network 208.1.1.0**|
|Konfigurace směrovacího protokolu RIP verse 2|**router rip**<br>**version 2**|
|Budou propagovány adresy sítí 157.89.0.0 a 208.1.1.0|**network 157.89.0.0**<br>**network 208.1.1.0**|
|Autentizace (jen RIP v2) – místní pojmenování hesla (klíče)<br>Místní číslo klíče<br>Vlastní heslo – sdíleno sousedícími směrovači|**key chain KLIC1**<br>**key 1**<br>**key-string heslo1234**|
|Zapnutí autentizace (zadat na sousedících rozhraních)<br>Totéž s využitím MD5|**ip rip authentication key-chain KLIC1**<br>**ip rip authentication mode md5**|
|Konfigurace směrovacího protokolu EIGRP, autonomní<br>systém 1, zákaz agregace adres podsítí|**router eigrp 1**<br>**network 157.89.0.0**|
|Budou propagovány adresy sítí 157.89.0.0 a 208.1.1.0|**network 208.1.1.0**<br>**no auto-summary**|
|Autentizace EIGRP – místní pojmenování hesla (klíče)<br>Místní číslo klíče<br>Vlastní heslo|**key chain MYCHAIN**<br>**key 1**<br>**key-string hojeheslo1234**|
|Zapnutí autentizace (zadat na sousedících rozhraních)<br>Specifikace hesla|**ip authentication mode eigrp 10 md5**<br>**ip authentication key-chain eigrp 10 MYCHAIN**|
|Konfigurace směrovacího protokolu OSPF, tato instance<br>procesu OSPF má číslo 1, area 0<br>Budou propagovány adresy sítí 157.89.0.0 a 208.1.1.0|**router ospf 1**<br>**network 157.89.0.0 0.0.255.255 area 0**<br>**network 208.1.1.0 0.255.255.255 area 0**|
|Autentizace – heslo se zadává se na sousedících rozhraních<br>Autentizace – všechna rozhraní v rámci oblasti 0, heslo se předává otevřeně|**ip ospf authentication-key heslo1234**<br>**router ospf 1**<br>**area 0 authentication**|
|Výpis IP směrovací tabulky|**show ip route**|
|Vypisování údajů vyměňovaných protokolem RIP|**debug ip rip**|
|Vypisování údajů vyměňovaných protokolem EIGRP|**debug ip eigrp events**<br>**debug ip eigrp**<br>**transactions**|
|Vypisování údajů vyměňovaných protokolem OSPF|**debug ip ospf events**|

|**Přístupové seznamy (Access Control Lists - ACL) – výběr**|
|---|
|Význam číselných rozsahů přístupových seznamů (Access Control Lists - ACL)|
|\<1-99\><br>**IP standard access list**|
|\<100-199\><br>**IP extended access list**|
|\<600-699\><br>**Appletalk access list**|
|\<700-799\><br>**48-bit MAC address access list**|
|\<800-899\><br>**IPX standard access list**|
|\<1100-1199\><br>**Extended 48-bit MAC address access list**|
|\<1200-1299\><br>**IPX summary address access list**|
|\<1300-1999\><br>**IP standard access list(expanded range)**|
|Které ACL jsou přiřazeny na dané rozhraní?<br>**show ip interface serial 0/1/0**|
|Výpis všech ACL; výpis jen IP ACL<br>**show access-lists**<br>**show ip access-list**|

**Standardní přístupové seznamy, čísla 1-99, filtruje se pouze dle zdrojové IP adresy (tj. podle odesílatele)** Účel – nepovolit uživatelům podsítě 200.1.1.0 255.255.255.0 odesílat pakety <u>přes rozhraní Fastethernet 0/0</u>


| | |
|---|---|
|A. Zakázat danou podsíť|**access-list 1 deny 200.1.1.0 0.0.0.255**|
|B. Implicitně platí „deny all“, takže nutno explicitně povolit ostatní|**access-list 1 permit any**|
|C. Přiřadit ACL k příslušnému rozhraní, teprve pak se ACL aktivuje|**interface fastethernet 0/0**<br>**ip access-group 1 in**|

**Rozšířené přístupové seznamy, čísla 100-199, filtruje se dle IP adres odesílatele a příjemce, portů aj.** Účel – nepovolit stroji 1.1.1.1 používat telnet přes rozhraní fa 0/0 do stroje 2.2.2.2 a nepovolit uživatelům podsítě 3.3.3.0 žádné surfování

| | |
|---|---|
|A. Syntax: access-list {číslo} povolit\|zakázat protokol zdroj cíl port volby|**access-list 100 deny tcp host 1.1.1.1 host 2.2.2.2 eq 23**|
|B. Zákaz surfování uživatelům sítě 3.3.3.0|**access-list 100 deny tcp host 3.3.3.0 0.0.0.255 any eq 80**|
|C. Implicitně platí „deny all“, proto je nutno ostatní<br>explicitně povolit|**access-list 100 permit ip any any**|
|D. Přiřadit ACL k rozhraní, teprve pak se ACL aktivuje|**interface fastethernet 0/0**<br>**ip access-group 100 out**|

|**Pojmenovaný přístupový seznam (Named ACL)**||
|---|---|
|Výhoda: lze editovat i jediný řádek víceřádkového ACL místo<br>jinak nutného zrušení celého ACL a jeho znovuvytvoření|**ip access-list standard COOLLIST**<br>**deny 1.1.1.1**<br> **permit any**|
|Přiřadit ACL k rozhraní, teprve pak se ACL aktivuje|**interface fastethernet 0/0**<br>**ip access-group COOLLIST in**|
|**PPP**||
|Komunikace mezi směrovači **router-a** a **router-b**, na obou analogická konfigurace||
|**Příkazy zadávané na rozhraní směrovače router-a**||
|Povolení PPP|**encapsulation ppp**|
|Autentizace bude pomocí protokolu chap|**ppp authentication chap**|
|**Globální mód**||
|Vzdálený směrovač je "router-b", sdílené heslo je "cisco"|**username router-b password cisco**|
|**Výpisy**||
|Zjištění typu zapouzdření, aktivovaných protokolů linkové vrstvy<br>(LCP) aj.|**show interface serial 0/1/0**|
|**Ladění**||
|Vypisování procesu autentizace|**debug ppp authentication**|
|**PPP multilink (sdružení několika fyzických sériových rozhraní do jediného logického)**||
|Vytvoření a konfigurace logického rozhraní|**interface multilink 0**<br>**ip address 1.1.1.2 255.255.255.0**<br>**ppp multilink**<br> **ppp multilink group 1**|
|Všechna fyzická rozhraní sdružená do multilinku nakonfigurovat stejně|**interface serial 0/1/0**<br>**no ip address**<br>**encapsulation ppp**<br>**ppp multilink**<br>**ppp multilink group 1**|

|**Frame-Relay – rozhraní**||
|---|---|
|Povolení Frame-Relay na daném rozhraní a specifikace typu<br>zapouzdření|**encapsulation frame-relay ietf**|
|Specifikace typu LMI Type (IOS od verse 11.2 zjišťuje<br>automaticky)|**frame-relay lmi-type ansi**|
|Jestliže nebude pracovat inversní ARP, namapovat vzdálenou IP<br>adresu na naše číslo DLCI (místní)|**frame-relay map ip 3.3.3.100 broadcast**|


|**Lze rovněž povolit rozhlašování a specifikovat typ zapouzdření**||
|---|---|
|Definovat místní DLCI (nepracuje-li LMI)|**frame-relay local-dlci 100**|
|Nastavit periodu pro kontrolu udržení spojení|**keepalive 10**|
|**Kontrola nastavení**||
|Výpis informací o DLCI a LMI|**show interface serial 0**|
|Výpis statistik o provozu PVC|**show frame-relay pvc**|
|Výpis směrovací mapy (statické nebo dynamické)|**show frame-relay map**|
|Výpis LMI informací|**show frame-relay lmi**|
|**Degradace směrovače do role Frame Relay přepínače (pro laboratorní účely)**||
|**Poznámka – příkazy je nutno symetricky zadat vždy na obou DCE rozhraních, která mají propojena pomocí Frame Relay**||
|Povolit Frame-Relay přepínání (na té straně směrovače, kde je<br>DCE)|**frame-relay switching**|
|Řekni DCE straně, aby podporovala frame-relay funkce DCE na<br>daném rozhraní|**frame-relay intf-type dce**|
|Řekni DCE straně, na které jiné místní rozhraní {int_o} a DLCI<br>{dlci_o} přepínat DLCI {dlci_i} z právě konfigurovaného<br>rozhraní|**frame-relay route {dlci_i} interface {int_o}**<br>**{dlci_o}**|
|Nastavit na DCE rozhraní hodinový kmitočet [b/s]|**clock rate 64000**|
|**DNS**||
|IP adresa reálného jmenného serveru|**ip name-server 169.223.2.2**|
|Jméno vlastní domény|**ip domain-name skoleni.org**|
|Nepřevádět doménová jména na IP adresy|**no ip domain-name lookup**|
|Router bude sloužit jako jmenný server (typu cache)|**ip dns server**|

|**DHCP**||
|---|---|
|Explicitní aktivace DHCP serveru (jen u některých IOSů)|**service dhcp**|
|Tyto adresy IP z přidělování (viz uvedený rozsah) vynechat|**ip dhcp excluded-address 157.89.1.1 157.89.1.2**|
|Pojmenování poolu a definice parametrů posílaných klientům<br>(max. 124 adres, jméno domény, IP adresy výchozího routeru,<br>DNS a netbios servery, doba platnosti přidělení 2 dny).|**ip dhcp pool moje_zasobarna**<br>**network 157.89.1.0 255.255.255.128**<br>**domain-name unob.cz**<br>**default-router 192.168.12.1**<br>**dns-server 192.168.12.100 192.168.12.101**<br>**netbios-name-server 192.168.12.99**<br>**lease 2**|
|Přeposílání DHCP žádostí z místního segmentu vzdálenému<br>DHCP serveru (příkaz je umístěn na místním rozhraní).|**ip helper-address 169.223.2.2**|
|Rozhraní směrovače získá IP adresu od DHCP serveru|**interface fa0/0**<br>**ip address dhcp**|
|Diagnostika|**show ip dhcp bindings**|

|**NAT (PAT)**||
|---|---|
|Nastavení rozhraní do vnitřní sítě|**interface FastEthernet0**<br>**ip nat inside**|
|Nastavení rozhraní do vnější sítě|**interface FastEthernet1**<br>**ip nat outside**|
|Překládat se bude veškerý provoz (obecně ACL může<br>mít jakoukoliv jinou podobu)|**access-list 10 permit any**|
|Celá vnitřní síť se ukryje za jedinou adresu. Překlad se<br>uplatní na provoz vyhovující ACL 10|**ip nat inside source list 10 interface Ethernet1 overload**|

|**Konfigurační registr**||
|---|---|
|RXBOOT (speciální diagnostický mód, pokračování pomocí "b")|**confreg 0x2000**|
|Systém zavádět z ROM, načíst konfigurační soubor (upgrade flash – u směrovačů, které zavádí IOS z flash)|**confreg 0x2101**|
|Systém zavádět z ROM, nenačíst konfigurační soubor (obnova po havárii)|**confreg 0x2141**|
|Systém zavádět z flash, načíst konfigurační soubor (normální stav)|**confreg 0x2102**|
|Systém zavádět z flash, nenačíst konfigurační soubor (obnova hesla)|**confreg 0x2142**|

|**Password Recovery - obnova hesla (postup pro směrovače)**||
|---|---|
|1. Přerušit start pomocí konsoly (vyžaduje se fyzický přístup)|**\<Ctrl\>\<Break\>**|
|2. Zavést IOS z flash,nenačítat konfigurační soubor z NVRAM|**confreg 0x2142**|
|_2a. Jiná syntaxe platná u starších zařízení_|**o/r 0x2142**|
|3. Restart operačního systému|**reset**|
|4. Přejít do privilegovaného módu; nenačtením konfigurační souboru lze<br>provést bez hesla|**enable**|
|5. Nyní v privilegovaném módu překopírovat konfigurační soubor z<br>NVRAM do RAM|**copy startup-config running-config**|
|6. Změnit enable hesla na "NoveHeslo" (případně provést další operace)|**enable password NoveHeslo**|
|7. Uložit aktuální konfiguraci do NVRAM (tj. s novým heslem)|**copy running-config startup-config**|
|8. Příští start směrovače nechť proběhne normálně (IOS z flash,<br>konfigurační soubor z NVRAM)|**config-reg 0x2102**|

|**Obnova chybějícího operačního systému IOS (pouze u směrovačů s rozhraním Ethernet)**||
|---|---|
|IOS je třeba mít předem zálohován (tftp server) – nelze jej volně stáhnout. V nouzi lze použít stejný IOS z jiného směrovače téže řady. Dojde-li ke smazání IOSu z flash, ale směrovač dosud běží, nevypínat jej (!), nýbrž postupovat standardně – **copy tftp flash** (tedy spustit tftp server, připravit záložní IOS). U nových směrovačů s výměnnou pamětí flash na ni lze IOS zapsat v externím zařízení (PC), rovněž lze použít USB port.||
|Připojit ethernetové rozhraní s nejnižším ID (např. fa0/0)<br>Ověřit nastavení uvedených proměnných (viz příklad)<br>Nejsou-li v pořádku, pak proměnné nastavit (změnit)|**rommon 1 > set**<br>**IP_ADDRESS=172.18.16.76**<br>**IP_SUBNET_MASK=255.255.255.192**<br>**DEFAULT_GATEWAY=172.18.16.65**<br>**TFTP_SERVER=172.18.16.2**<br>**TFTP_FILE=c2600-ik9o3s3-mz.123-13.bin**|
|Příklad nastavení/změny hodnoty proměnné|**TFTP_SERVER=172.18.16.88**|
|Spustit stahování a instalaci IOSu|**tftpdnld**|
|Restartovat směrovač|**reset**|

|**Obnova chybějícího operačního systému IOS (pouze u směrovačů bez rozhraní Ethernet)**||
|---|---|
|Není-li k dispozici rozhraní Ethernet, lze k instalaci IOSu použít konsolový port o nízké rychlosti.||
|Připojit sériový port PC ke konsolovému portu směrovače.<br>V PC použít terminálový program podporující protokol<br>Xmodem (Hyperterminal, modifikovaný putty).||
|Nastavit maximální přípustnou přenosovou rychlost dle typu<br>směrovače (0x3822 = 115,2 kb/s, 0x2102 = 9,6 kb/s), tutéž<br>nastavit u terminálu.|**rommon 1 > confreg 0x3822**|
|Restartovat směrovač|**rommon 2 > reset**|
|Spustit instalaci IOSu, vyčkat konce přenosu (při IOS 15 MB<br>a 115,2 kb/s asi 30 minut, při 9,6 kb/s asi 4,5 hodiny)|**rommon 1 > xmodem c2600-ik9o3s3-mz.123-13.bin**|
|Nastavit výchozí hodnotu konfiguračního registru|**config-register to 0x2102** |
|Restartovat směrovač, vrátit rychlost terminálu na 9600 b/s!|**reset**|

|**Přesný čas – NTP**||
|---|---|
|Toto je zdroj přesného času: **tik.cesnet.cz**|**ntp server tik.cesnet.cz**|
|Časová zóna budiž pojmenována CET, posun od UTC je +1 hodina|**clock timezone CET 1**|


|**Záznam událostí - syslog**||
|---|---|
|Toto je syslog server, tam půjdou zprávy (lze užít i doménové jméno)|**logging 172.16.1.1**|
|Zpráva bude mít příznak (facility) local5|**logging facility local5**|
|Odesílat zprávy typu (s prioritou) debugging|**logging trap debugging**|

|**Správa sítě - SNMP**||
|---|---|
|Nastavení hesla „admins“ pro čtení a zápis SNMP dat<br>Nastavení hesla „topsecret“ pro čtení a zápis SNMP dat jen z<br>10.1.1.1|**snmp-server community admins rw**<br>**snmp-server community topsecret rw 60**<br>**access-list 60 permit 10.1.1.1**|
|Nastavení hesla „others“ pro čtení SNMP dat (běžná hodnota je<br>„public“)|**snmp-server community others ro**|
|Toto je pán směrovače|**snmp-server contact Josef Kaderka**|
|Tady se směrovač nalézá|**snmp-server location Brno, Sumavska 4, 3/11a**|
|SNMP manager, tam posílat zprávy (traps) s community public|**snmp-server host 10.1.1.1 public**|
|Povolení odesílat zprávy při vzniku jakékoliv události|**snmp-server enable traps** |
|Odesílat zprávy jen při vzniku události daného typu|**snmp-server enable traps config**<br>**snmp-server enable traps envmon temperature**|


## **Správa přepínačů**

(základní úkony jsou stejné jako u směrovačů)

|**Zjištění stavu přepínače**||
|---|---|
|Verse IOSu,hardware aj.(konfigurační registr se liší od směrovačů)|**show version**|
|Výpis uložené konfigurace (z pevné paměti - NVRAM)|**show startup-config**|
|Výpis aktuální konfigurace (z operační paměti - RAM)|**show running-config**|
|Výpis obsahu paměti flash|**show flash:** nebo **dir flash:**|
|Výpis bezpečnostních nastavení rozhraní (řada variant)|**show port-security**|
|Stav všech rozhraní (řada variant)|**show interfaces**|
|Výpis schopností rozhraní a jejich aktuálního nastavení|**show interfaces fa0/1 capabilities**|

|**Uvedení přepínače do výchozího stavu**||
|---|---|
|Zamezení komunikace přepínače se sousedními přepínači zablokováním<br>rozhraní (odpojením kabelů, nastavením VTP režimu Transparent)|**interface fastethernet 0/1**<br>**shutdown**|
|Smazání uložené databáze virtuálních LAN|**delete flash:vlan.dat**|
|Smazání uloženého konfiguračního souboru|**erase startup-config**|
|Restart (v případě výzvy nic neukládat)|**reload**|

### **Základní operace s přepínačem**

|Konfigurace IP údajů umožňujících vzdálený přístup k přepínači<br>(přepínač má jedinou IP adresu). Vždy je nutno nejprve zablokovat<br>všechna dosud použitá rozhraní VLAN, pak povolit žádané.|**interface VLAN1**<br>**shutdown**<br>**interface VLAN99**<br>**ip address 192.168.1.2 255.255.255.0**<br>**ip default-gateway 192.168.1.1**<br>**no shutdown**|
|---|---|
|Výpis tabulky přepínači známých MAC adres|**show mac-address-table**|
|Počet MAC adres v tabulce (vhodné při podezření na přeplnění)|**show mac-address-table count**|
|Vymazání tabulky MAC adres|**clear mac-address-table**|

|**Konfigurace rozhraní pro připojení stanice**||
|---|---|
|Volba rozhraní|**interface gigabit 0/1**|
|Tatáž operace nad více rozhraními (jen u novějších přepínačů); syntax<br>vyžaduje uvedení mezer kolem pomlčky!|**interface range fastethernet 0/1 – 12**|
|Volba plného duplexu|**duplex full**|
|Volba rychlosti 100 Mb/s|**speed 100**|
|K rozhraní bude připojena výhradně stanice|**switchport mode access**|
|Rozhraní se po připojení stanice ihned aktivuje, nečeká se na STP|**spanning-tree portfast**|

|**Zabezpečení rozhraní přepínače**||
|---|---|
|Přes rozhraní může komunikovat jen stanice s danou MAC adresou|**switchport port-security mac-address {adr}**|
|Přes rozhraní může komunikovat nejvýše {n} stanic|**switchport port-security maximum {n}**|
|Rozhraní se učí zaslechnuté MAC adresy<br>Po {n} minutách bude naučená adresa zahozena|**switchport port-security mac-address sticky**<br>**switchport port-security aging time {n}**|
|Nepovolená komunikace bude zahazována, povolená nikoliv|**switchport port-security violation protect**|
|Pošle se SNMP trap|**switchport port-security violation restrict**|
|Rozhraní bude zablokováno, standardně nutný ruční zásah|**switchport port-security violation shutdown**|
|Automatické znovu odblokování rozhraní po určité době:|**errdisable recovery cause psecure-violation**<br>**errdisable recovery interval 60**|

|**Protokol spanning tree (STP)**||
|---|---|
|Zjištění MAC adresy přepínače|**show interface vlan 1**|
|Výpis tabulky spanning tree a zjištění, kdo je kořenovým přepínačem|**show spanning-tree**|
|Explicitní volba kořenového přepínače nastavením priority {n}|**spanning-tree priority {**_n_**}**|


|**Vzdálený správa pomocí webového rozhraní**||
|---|---|
|Zákaz protokolu http (implicitně povolen přístup i bez hesla; je-li<br>nastaveno, použije se heslo pro přechod do privilegovaného režimu)|**no ip http server**|
|Volba protokolu https|**ip https server**|
|Vytvoření lokálního uživatelského účtu s právy administrátora a<br>povolení lokální autentizace|**username {**_user_**} privilege 15 password**<br>**{**_password_**}**<br>**ip http authentication local**|

|**Obnova hesla u přepínačů 2900/2950/3500/3550**||
|---|---|
|1. Vypnout napájení přepínače||
|2. Stisknout a držet tlačítko "Mode" na předním panelu přepínače|**\<mode\>**|
|3. Zapnout napájení přepínače||
|4. Po zhasnutí STAT LED uvolnit tlačítko "Mode"||
|5. Vyčkat ukončení výpisu a na přechod do ROMMONu||
|6. Zadat sekvenci příkazů|**flash_init**<br>**load_helper**|
|7. Přejmenovat konfigurační soubor(je uložen ve flash,ne v NVRAM)|**rename flash:config.text flash:config.old**|
|8. Zavést operační systém přepínače|**boot**|
|9. Přeskočit konfigurační dialog, přejít do privilegovaného módu|**enable**|
|10. Obnovit konfigurační soubor|**rename flash:config.old flash:config.text**|
|11. Načíst uloženou konfiguraci, tj. se starým heslem|**copy startup-config running-config**|
|12. Nastavit nové heslo pro přechod do privilegovaného módu|**enable secret class**|
|13. Uložit aktuální konfiguraci, tj. s novým heslem|**copy running-config startup-config**|

|**Virtuální LAN (VLAN) a trunking**||
|---|---|
|Globální konfigurační mód, vytvoření VLAN s číslem 20 a její<br>pojmenování "VLAN20"|**vlan 20**<br>**name VLAN20**|
|Zařazení rozhraní do VLAN číslo 20 . Pokud dosud neexistovala, bude<br>vytvořena.|**interface fastethernet 0/1**<br>**switchport mode access**<br> **switchport access vlan 20**|
|Seznam virtuálních LAN a do nich zařazených rozhraní|**show vlan** |
|Volba zapouzdření (ISL nebo 802.1q;  jen pokud IOS podporuje obě<br>dvě) a vytvoření trunku|**interface fastethernet0/2**<br>**switchport trunk encapsulation dot1q**<br>**switchport mode trunk**|
|Netagované rámce dávat do VLAN 5 (implicitně jdou do VLAN 1)|**switchport trunk native vlan 5**|
|Trunkem mohou procházet pouze rámce z/do VLAN 5,10,20|**switchport trunk allowed vlan 5,10,20**|

|**Virtuální LAN (VLAN) a trunking u starších přepínačů**||
|---|---|
|Privilegovaný EXEC mód, vytvoření VLAN s číslem 20 a její<br>pojmenování "VLAN20"|**vlan database**<br> **vlan 20 name VLAN20**|
|Zařazení rozhraní do VLAN20|**interface ethernet 0/1**<br> **vlan static 20**|
|Seznam virtuálních LAN a do nich zařazených rozhraní|**show vlan-membership**|
|Volba zapouzdření (ISL nebo 802.1q;  jen pokud IOS podporuje obě<br>dvě) a vytvoření trunku|**interface fastethernet0/2**<br>**switchport trunk encapsulation isl**<br>**switchport mode trunk**|

|**Komunikace mezi virtuálními LAN (metoda „router on a stick“)**||
|---|---|
|Mezi přepínačem a směrovačem jediný fyzický spoj, nakonfigurovaný na straně přepínače jako trunk, na straně<br>směrovače je pak pro každou VLAN vytvořeno logické rozhraní (subinterface).||
|Konfigurace fyzického rozhraní směrovače|**interface fastethernet 0/0**<br>**no shutdown**|
|Vytvoření logického rozhraní (číslo libovolné, nejlépe shodné s VLAN)|**interface fastethernet 0/0.20**|
|Volba zapouzdření a specifikace čísla VLAN|**encapsulation dot1q 20**|
|Přiřazení IP adresy logickému rozhraní|**ip address 192.168.5.20 255.255.255.0**|


|**Sdružení několika rozhraní do jediného o kumulované rychlosti (Etherchannel)**||
|---|---|
|Volba rozhraní (všechna musí být nastavena stejně; tj<br>nebo access)a skupiny|. v režimu trunk<br>**interface range FastEthernet0/1 - 4**<br>**channel-group 1 mode auto**|
|**Monitorování provozu jednoho či více rozhraní či VLAN jiným rozhraním (SPAN - Switched Port Analyzer)**||
|Volba zdroje provozu (všechna rozhraní musí být<br>nastavena stejně)|**monitor session 1 source interface FastEthernet0/1**<br>**monitor session 1 source interface FastEthernet0/2** |
|Zde se bude provoz monitorovat|**monitor session 1 destination interface gigabitEthernet0/1**|
|Ověření stavu|**show monitor session 1**|

