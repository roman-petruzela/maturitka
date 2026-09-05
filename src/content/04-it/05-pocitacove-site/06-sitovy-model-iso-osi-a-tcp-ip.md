---
title: "Síťový model ISO/OSI a TCP/IP"
order: 6
source: "site/Model_ISO_OSI_TCP_IP_NEW_2025.pdf"
---
# Síťový model ISO/OSI

- ISO – Mezinárodní organizace pro normalizaci (International Organization for Standardization)

- OSI – referenční model pro standardizaci komunikace v počítačových sítích (Open Systems Interconnection)

- V r. 1984 byl přijat jako mezinárodní norma: ISO 7498

# Síťový model ISO/OSI

- Norma **nespecifikuje implementaci** (realizaci) systémů, ale **uvádí všeobecné principy** sedmivrstvé síťové architektury. Popisuje vrstvy, jejich funkce a služby.

- Každá ze sedmi vrstev vykonává skupinu jasně definovaných funkcí potřebných pro komunikaci.

   - Pro svou činnost využívá služeb své sousední nižší vrstvy.

   - Své služby pak poskytuje sousední vyšší vrstvě.

# Fyzická vrstva

- **Aktivuje, udržuje a deaktivuje fyzické spoje** (např. komutovaný spoj) **mezi koncovými systémy** . Fyzické spojení může být dvoubodové (sériová linka) nebo mnohobodové (Ethernet).

- **Definuje** všechny **elektrické a fyzikální vlastnosti zařízení** (rozložení pinů, napěťové úrovně a specifikuje vlastnosti kabelů - délka; stanovuje způsob přenosu "jedniček a nul")

- **Huby, opakovače** , síťové adaptéry jsou zařízení pracující na této vrstvě.

# Síťový model ISO/OSI

# Fyzická vrstva

- **Modulace, Lineární kódování** , Bitová synchronizace v synchronní seriové komunikaci

- Lineární uspořádání Point-to-point, multipoint nebo point-to-multipoint

- **Topologie fyzické sítě** , například síť zapojená jako kruh, sběrnice, hvězda nebo obecný graf

- **Seriová** nebo **paralelní komunikace**

- **Simplex, halfduplex, Fullduplex**

# Linková (spojová) vrstva

- **Poskytuje spojení mezi dvěma sousedními systémy** .

- **Uspořádává data z fyzické vrstvy do logických celků známých jako rámce (frames).**

- **Seřazuje přenášené rámce** , stará se o nastavení parametrů přenosu linky, oznamuje neopravitelné chyby.

# Linková (spojová) vrstva

   - **Bridge, switch** . Poskytuje propojení pouze mezi místně připojenými zařízeními a tak vytváří doménu na druhé vrstvě pro směrové a všesměrové vysílání.

- **Fyzické rámce opatřuje fyzickou** (MAC - Media Access Control) **adresou** a poskytuje synchronizaci pro fyzickou vrstvu.

# Síťová vrstva

- **Tato vrstva se stará o směrování v síti a síťové adresování.** Poskytuje spojení mezi systémy, které spolu přímo nesousedí. Obsahuje funkce, které umožňují překlenout rozdílné vlastnosti technologií v přenosových sítích.

# Síťová vrstva

   - reportuje o problémech při doručování dat.

   - Protokoly: **IP** , **ICMP** , RARP **a ARP** .

   - Jednotkou informace je paket.

- **router**

- **Pracuje se hierarchickou strukturou adres.**

# Transportní vrstva

- Tato vrstva zajišťuje přenos dat mezi koncovými uzly.

- Protokoly:

   - spojově orientované (TCP)

   - nespojově orientované (UDP)

# Transportní vrstva

- **TCP** – Zajišťuje **přenos dat se zárukami** , který vyžadují aplikace, kde nesmí „chybět ani paket“.

- Jedná se o přenosy souborů, e-mailů, WWW stránek atd.

- Záruka se vztahuje na řešení ztrát přenášených paketů, zachování jejich pořadí a odstranění duplikace.

- Jednotkou posílané informace je na této vrstvě **TCP segment** .

Transportní vrstva

# Relační vrstva

- **UDP** – Zajišťuje **přenos dat bez záruk** , který využívají aplikace, u kterých by bylo na obtíž zdržení (delay) v síti způsobené čekáním na přenos všech paketů a **ztráty se dají řešit jiným způsobem** (např. snížení kvality, opakování dotazu).

- Využívá se pro **DNS** , **VoIP** , streamované video, internetová rádia, vyhledávání sdílených souborů v rámci sítě DC++, on-line hry atp.

# Prezentační vrstva

- **Funkcí vrstvy je transformovat data do tvaru, který používají aplikace** (šifrování, konvertování, komprimace).

- Mezi funkce patří např. **převod kódů a abeced** , modifikace grafického uspořádání, přizpůsobení pořadí bajtů a pod.

- Vrstva se **zabývá jen strukturou dat** , ale ne jejich významem, který je znám jen vrstvě aplikační.

- Protokoly: **HTTP** , **FTP** , SNMP, **TELNET**

# Síťový model TCP/IP

- **Smyslem vrstvy je organizovat a synchronizovat dialog mezi spolupracujícími relačními vrstvami obou systémů a řídit výměnu dat mezi nimi.**

- Umožňuje **vytvoření a ukončení relačního spojení, synchronizaci a obnovení spojení** , oznamovaní výjimečných stavů.

- Do této vrstvy se řadí: **NetBIOS** , **AppleTalk** , RPC, **SSL** . K paketům přiřazuje synchronizační značky, které využije v případě vrácení paket ( např. z důvodu, že se během přenosu dat poškodí síť) k poskládání původního pořadí.

# Aplikační vrstva

- Účelem vrstvy je poskytnout aplikacím přístup ke komunikačnímu systému a umožnit tak jejich spolupráci.

- Do této vrstvy se řadí například tyto služby a protokoly:

   - FTP, SSH, BitTorrent

   - ● DNS, Telnet, IMAP ● DHCP, TFTP, SNMP ● POP3, LDAP, SMTP,

   - SMB,

# Síťový model TCP/IP

- obsahuje sadu protokolů pro komunikaci v počítačové síti a je hlavním protokolem celosvětové sítě Internet.

- T – Transmision

- C – Control

- P – Protocol

- I – Internet

# Síťový model TCP/IP

<!-- Start of picture text -->
Porovnání modelu ISO/OSI aTCP/IP<br>OSI vrstvy Zařízení Protokol / Standard TCP/IP vrstvy<br>7 – Aplikační  Firewall, Gateway SMTP, POP3, IMAP, DNS, DHCP, FTP,  Aplikační<br>TFTP, HTTP, SNMP, VoIP, NNTP, NTP<br>6 – Prezentační  N/A JPG, JPEG, TIFF, PNG, GIF, MIME,<br>MP3, MP4<br>5 - Relační N/A SQL, NFS, ASP, RPC<br>4 - Transportní Firewall TCP, UDP Transportní<br>3 – Síťová Router IP, ARP, RARP, ICMP, IGMP, IGRP,  Síťová<br>IPSEC<br>2 – Linková  Switch, Bridge Ethernet, PPP, HDLC, ATM,  Vrstva síťového<br>FrameRealy  rozhraní<br>1 – Fyzická  Hub, Repeater, Transciever RJ45, ST/SC,<br><!-- End of picture text -->

# Vrstva síťového rozhraní

- Nejnižší vrstva umožňuje přístup k fyzickému přenosovému médiu.

- **Je specifická pro každou síť v závislosti na její implementaci.** Příklady sítí: **Ethernet** , Token ring, FDDI, X.25, SMDS.

# Transportní vrstva

- je **implementována až v koncových zařízeních** (počítačích)

- přizpůsobuje chování sítě potřebám aplikace.

- Poskytuje

   - **spojované** (protokol TCP, spolehlivý)

   - **nespojované** (UDP, nespolehlivý) transportní služby.

# Síťový model TCP/IP

- **Komunikace** mezi stejnými vrstvami dvou různých systémů **je řízena komunikačním protokolem** za použití spojení vytvořeného sousední nižší vrstvou.

- Architektura umožňuje **výměnu protokolů** jedné vrstvy bez dopadu na ostatní. Příkladem může být možnost komunikace po různých fyzických médiích - **Ethernet** , optické vlákno, sériová linka.

# Síťová vrstva

- Vrstva zajišťuje především síťovou adresaci, směrování a předávání datagramů.

- Protokoly: **IP** , **ARP** , RARP, **ICMP** , IGMP, IGRP, **IPSEC** .

- **Je implementována ve všech prvcích sítě** - směrovačích i koncových zařízeních.

# Aplikační vrstva

- **Tvoří programy, které využívají přenosu dat po síti ke konkrétním službám pro uživatele** . Příklady: **Telnet** , **FTP** , **HTTP** , **DHCP** , **DNS** .

- Aplikační protokoly používají vždy jednu ze dvou základních služeb transportní vrstvy: **TCP nebo UDP** , případně obě dvě (např. DNS).

- Pro rozlišení aplikačních protokolů **se používají tzv. porty, což jsou domluvená číselná označení aplikací** . Každé síťové spojení aplikace je jednoznačně určeno číslem portu a transportním protokolem (a samozřejmě adresou počítače).
