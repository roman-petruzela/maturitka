---
title: "Počítačové sítě – definice, dělení, topologie a přístupové metody"
order: 1
source: "IT/10. Počítačové sítě - definice, pojmy, dělení, topologie, přístupové metody.docx; site/Deleni_siti_2025.pdf"
---

Co je síť, jak se sítě dělí, jak se zapojují (topologie) a jak se stanice střídají ve vysílání (přístupové metody). Navazuje [model ISO/OSI a TCP/IP](/it/pocitacove-site/02-standardizace-model-iso-osi-a-tcp-ip/).

## Co je počítačová síť

**Počítačová síť** = technické a programové prostředky, které propojují počítače a jiná zařízení, aby si mohly podle pravidel vyměňovat data a sdílet služby. Soustava propojených sítí je **Internet** („síť sítí“).

| Část | Příklady |
| --- | --- |
| uzly | počítače, servery, telefony, tiskárny |
| propojovací software | síťová část OS, ovladače |
| síťový hardware | síťové karty, switch, router, access point |
| přenosová média | kroucená dvoulinka, optika, rádio |

**Proč se sítě budují:** sdílení hardwaru (tiskárny, disky) a softwaru (databáze), komunikace, centrální ochrana a zálohování dat.

**Základní pojmy:** **paket (rámec)** = hlavička (odesílatel, příjemce, kontrolní součet) + data; **MAC adresa** = fyzická 48bitová adresa síťové karty; **IP adresa** = logická adresa pro směrování mezi sítěmi; **protokol** = pravidla komunikace. Prvky sítě viz [pasivní](/it/pocitacove-site/06-pasivni-sitove-prvky-a-kabelaz/) a [aktivní](/it/pocitacove-site/07-aktivni-sitove-prvky-a-sitova-karta/).

## Výpočetní model – role uzlů v síti

**Výpočetní model** říká, kdo v síti poskytuje služby a kdo je využívá.

| Model | Princip | Výhody | Nevýhody |
| --- | --- | --- | --- |
| centralizovaný | vše počítá mainframe, uživatelé mají terminály | snadná správa | výpadek = stojí vše |
| klient–server | **server** nabízí služby, **klienti** je využívají | centrální správa práv a záloh | server = jediné místo selhání |
| peer-to-peer | všichni rovni, každý nabízí i využívá | levné, bez serveru | slabá správa a bezpečnost |
| distribuovaný (cloud) | data a výpočty v datových centrech | dostupnost, platí se za využití | závislost na připojení |

## Dělení počítačových sítí

**Podle velikosti (dosahu):**

| Síť | Dosah | Příklad |
| --- | --- | --- |
| **PAN** | 1 m | telefon + sluchátka (Bluetooth) |
| **LAN** (WLAN) | budova | škola, firma; Ethernet 802.3, Wi-Fi 802.11 |
| **CAN** | areál | univerzita, podnik s více budovami |
| **MAN** | město | metropolitní Ethernet |
| **WAN** | stát, kontinent | propojuje LAN; největší je **Internet** |

**Další hlediska:**

- **Přenosová technika** – přepojování **okruhů** (telefon) × **paketů** (Internet).
- **Komunikace** – **spojované** (nejdřív se naváže spojení) × **nespojované**.
- **Médium** – metalické, optické, bezdrátové.
- **Vlastnictví** – **privátní** × **veřejná**; **VPN** = šifrovaný tunel přes veřejnou síť do privátní.
- **Použití** – **intranet** (vnitřní potřeby firmy), **extranet** (zákazníci a partneři).
- **Role v rozlehlé síti** – **páteřní** (rychlé, málo uzlů), **přístupové** („poslední míle“ k zákazníkovi).

V praxi zbyly z technologií LAN jen **Ethernet a Wi-Fi**.

## Topologie sítě

**Topologie** = způsob propojení stanic. **Fyzická** je skutečné zapojení kabelů, **logická** určuje, kudy tečou data (hub zapojený do hvězdy je logicky sběrnice).

![Čtyři základní topologie: sběrnice, hvězda se switchem uprostřed, kruh a mesh](/images/content/it/pocitacove-site/definice-site/topologie.webp)

| Topologie | Princip | Výhody | Nevýhody |
| --- | --- | --- | --- |
| **sběrnice** | společný koax, T-konektory, na koncích terminátor | málo kabelu, levná | přerušení = stojí celá síť, max. 10 Mb/s; dnes se nepoužívá |
| **hvězda** | každá stanice vlastní kabel k switchi | porucha kabelu vyřadí jen jednu stanici, snadné hledání závad | víc kabelu, výpadek switche odstaví vše |
| **kruh** | uzavřený kruh, vysílá držitel tokenu | žádné kolize | výpadek uzlu shodí síť (u FDDI zdvojený kruh) |
| **mesh** | nepravidelné propojení, více cest | odolná; úplný mesh je nejspolehlivější | nejdražší; používá se v páteři Internetu |

Víc hvězd spojených switchem = **rozšířená hvězda**, hierarchicky = **strom** (dnešní LAN).

## Přístupové metody

**Přístupová metoda** = pravidla, kdo smí zrovna vysílat po sdíleném kanálu. **Náhodné** (CSMA/CD, CSMA/CA) počítají s kolizí, **řízené** (token) kolize vylučují.

### CSMA/CD – detekce kolize

Klasický sdílený Ethernet (sběrnice, hub).

![Průběh CSMA/CD: naslouchání, vysílání, kolize, signál jam, náhodné čekání a nový pokus](/images/content/it/pocitacove-site/definice-site/csma-cd.webp)

1. Stanice naslouchá, jestli někdo nevysílá.
2. Je-li kanál volný, vysílá a zároveň poslouchá.
3. Vysílají-li dva naráz, nastane **kolize**: stanice přestane a pošle signál **jam**.
4. Čeká **náhodnou dobu** (po každém neúspěchu delší) a zkusí znovu; po 16 pokusech rámec zahodí.

### CSMA/CA – předcházení kolizím

Wi-Fi; rádio neumí při vysílání poslouchat, takže kolizi nepozná.

1. Stanice naslouchá a při volném kanálu ještě počká náhodnou dobu.
2. Volitelně pošle **RTS** a čeká na **CTS** (ostatní mlčí).
3. Příjemce potvrdí rámec **ACK**; bez ACK se rámec pošle znovu.

### Token a plný duplex

- **Token** (Token Ring, FDDI) – sítí koluje token, vysílat smí jen jeho držitel.
- **Plný duplex** – se switchem má každá stanice vlastní linku pro každý směr, **kolize nevznikají**, CSMA/CD se neuplatní.

## Otázky k opakování

1. Jak byste definovali počítačovou síť a z jakých částí se skládá? ||technické a programové prostředky pro spojení a výměnu dat; uzly, propojovací software, síťový hardware, přenosová média||
2. Jaký je rozdíl mezi modelem klient–server a peer-to-peer? ||u klient–server poskytuje služby vyhrazený server; u peer-to-peer jsou si počítače rovny a služby si nabízejí navzájem||
3. Seřaďte podle dosahu PAN, WAN, LAN, MAN. ||PAN < LAN < MAN < WAN||
4. Čím se liší fyzická a logická topologie? ||fyzická je skutečné zapojení kabelů, logická cesta dat; hub zapojený do hvězdy je logicky sběrnice||
5. Proč se dnes nepoužívá sběrnicová topologie? ||přerušení kabelu vyřadí celou síť, závady se špatně hledají, rychlost max. 10 Mb/s; nahradila ji hvězda se switchi||
6. Popište průběh CSMA/CD. ||naslouchání, vysílání při volném kanálu, detekce kolize, jam, náhodné čekání a nový pokus (max. 16×)||
7. Proč Wi-Fi používá CSMA/CA? ||rádio nemůže při vysílání poslouchat, kolizi nezjistí; předchází jí čekáním, RTS/CTS a potvrzením ACK||
8. Proč se ve full duplexu se switchem nevyskytují kolize? ||každá stanice má vlastní linku a pro každý směr vlastní vodiče, kanál s nikým nesdílí||
9. Co je intranet, extranet a VPN? ||intranet slouží vnitřním potřebám organizace, extranet zákazníkům a partnerům, VPN je šifrovaný tunel přes veřejnou síť||
