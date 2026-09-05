---
title: "IPv6 adresování"
order: 12
source: "site/IPv6_Adresovani.pdf"
---
<!-- Start of picture text -->
IP verze 6<br><!-- End of picture text -->

# Formát datagramu IPv6

# IPv6

- řeší:

   - vyčerpání adres

   - zabezpečení (povinně implementované)

   - mobilitu

- adresy IPv4: 2<sup>32</sup> (něco přes čtyři miliardy)

   - reálně použitelné jen asi dvě miliardy

   - počet přestal stačit (mobilní telefony, PDA, mnoho zařízení, které by bylo vhodné připojit k Internetu (ledničky, auta, …)

   - dočasná řešení způsobují komplikace (NAT)

   - Asie dostala málo adres IPv4

   - bylo nutno rozšířit adresy

   - rozhodovalo se, zda budou 64bitové nebo 128 bitové

# Formát datagramu IPv6

- **Verze** : 6,délka 4 bity

- **Třída provozu** : (Traffic class), délka 8 bitů, která vyjadřuje prioritu datagramu či jeho zařazení do určité přepravní třídy. Určeno pro poskytování služeb s určitou kvalitou (QoS).

- **Značka toku:** (Flow label) délka 20 bitů, je novinkou v IPv6 a tok by měl být označován proud datagramů se společnými vlastnostmi (odesilatel, adresát, požadavky na vlastnosti spojení)

- **Délka dat:** (Payload length) délka 16 bitů, údaj o délce datagramu. Přesně řečeno počet bajtů následujících za standardní hlavičkou. Z toho plyne, že základní hlavička se do této délky nepočítá, zatímco případné rozšiřující hlavičky ano.

- **Další hlavička** : (Next header) obsahuje identifikaci, jaká hlavička či jaký druh dat následuje za standardní hlavičkou.

- **Maximum kroků:** (Hop limit) jako TTL v IPv4

# Hlavička datagramu IPv6

- Požadavek na MTU (Maximum Transmission Unit) – maximální délka paketu - je minimálně 1280 B.

- Vzhledem k tomu, že drtivá většina koncových zařízení je dnes připojena prostřednictvím různých variant Ethernetu nebo Wi-Fi s MTU alespoň 1500 B, lze očekávat, že tato hodnota se usídlí téměř všude a fragmentace prakticky zmizí ze světa.

<!-- Start of picture text -->
Základní Rozšířující Rozšířující<br>hlavička hlavička hlavička Data (např. TCP)<br><!-- End of picture text -->

- základní hlavička je co nejjednodušší

   - je pevné délky

   - neobsahuje kontrolní součet

   - neobsahuje pole umožňující fragmentaci (označení a sestavení fragmentů)

- rozšiřující hlavičky (záhlaví)

   - šifrování

   - informace pro směrovače po cestě

   - možnosti pro cílovou stanici

   - odkaz na další hlavičku nebo typ dat v datové části

# Typy IP adres

# IPv6

      - IPv6 adresu má 128 bitů

- **Unicast** (Individuální) - adresa reprezentuje jednotlivé síťové rozhraní. Paket zaslaný na unicast adresu je doručen konkrétnímu zařízení (počítači, síť. tiskárně, atd.)

- **Anycast** (Výběrové) - jedna anycastová adresa je přiřazena více zařízením (rozhraním).

   - Datagram je pak nasměrován vždy na (z hlediska směrování) " **nejbližší** " stanici s danou anycastovou adresou.

- **Multicast** (Skupinové) -  je skupinová adresa, kde adresáty jsou všichni členové příslušné skupiny.

   - Speciální multicastové adresy navíc plně nahrazují broadcasty, které se už v IPv6 nepoužívají.

# IPv6 - Příslušnost k určité síti nebo podsíti

   - K dispozici je teoretických 2<sup>128</sup> adres

- obvykle se zapisuje v hexadecimální notaci, kde jednotlivé části oddělujeme dvojtečkou.

- Pro co největší možné zkrácení poměrně dlouhých adres se zavádí zkracovací pravidla

   - odstranění po sobě jdoucích nul zleva,

- vynechání po sobě jdoucích políček se samými nulami.

- nezkrácená IP adresa : 1088:00F9 :0000:0000:0000: AB0C:7C11:0800

po zkrácení: 1088:F9::AB0C:7C11:800

# Rozdělení adres a vybrané prefixy

- vyjadřuje prefixem – všechna rozhraní v jedné síti mají stejný prefix (začátek adresy)

- Tento přístup se používá již v současném Internetu pod názvem Classless Inter-Domain Routing (CIDR).

- prefixy zapisují:

   - IPv6_adresa / délka_prefixu

- Příklad způsobů zápisu adresy 12ab:0000:0000:cd3 s 60 bitů dlouhým prefixem:

   - 12ab:0:0:cd30:0:0:0:0 / 60

   - 12ab::cd30:0:0:0:0 / 60

   - 12ab:0:0:cd30:: / 60 (nejvhodnější zápis)

# Třídy adres IPv6

# Některé typy unicast

- adresy mají definován dosah (scope):

   - **link-local** : platí v jednom subnetu

   - **site-local** : platí v jedné privátní síti (àla IPv4 privátní adresy)

   - **global** : platí v Internetu

- nedefinovaná adresa: ::/128

- loopback adresa ::1/128

   - globální unicast adresy

   - adresy místní linky

   - adresy místní stránky

   - unikátní lokální IPv6 unicast adresy

   - speciální adresy

- skupinové adresy: FF00::/8

- individuální lokální linkové adresy: FE80::/10

- individuální lokální místní adresy: FEC0::/10

# Některé typy unicast

# Některé typy unicast

- **Unspecified**

Obdoba adresy 0.0.0.0 v IPv4. Slouží pro speciální účely jako zdrojová adresa (pokud zdroj svou adresu nezná). Ve zkrácené podobě ji zapíšeme jako ::

- **Loopback**

Analogie loopbackové adresy IPv4 světa. Zapisujeme ji jako ::1

- **Link-local**

Adresa, která se používá vždy jen v rámci lokální sítě. Neprojde přes směrovač. Automaticky je přidělena každému rozhraní a je jedním z prvků, které umožňují autokonfiguraci zařízení připojených k síti. Během tohoto procesu si zařízení samo ve spolupráci s ostatními zařízeními nastaví svoji adresu i další parametry.

- **Site-local**

Adresa pro použití v rámci jedné organizace nebo její části. Obdoba prostoru privátních adres v IPv4. Site-local adresa je pro vnější stanice nedostupná, ani ji nelze použít jako adresu zdrojovou pro zaslání datagramu ven z oblasti. Na rozhraní není na rozdíl od link-local adresy přiřazena automaticky.

- **Aggregatable global unicast** Adresa určená pro obecné použití v Internetu.

# Citace

- https://www.ipv6.cz/

- "IPV6 - ČTVRTÉ VYDÁNÍ", PAVEL SATRAPA, dostupné na: https://knihy.nic.cz/

- https://www.iana.org/assignments/ipv6-address-space

- [1] SOSINSKY, Barrie. Počítačové sítě : Vše, co potřebujete vědět o správě sítí. Vydání první. Brno : Computer Press, 2010. 840 s. ISBN 978-80-251-3363-7.

- [2] BIGELOV, Stephen. Mistrovství počítačových sítí. Vydání první. Brno: Computer Press, 2004. 990 s. ISBN 80-251-0178-9.

- [3] OSTERLOH, Heather. TCP/IP: Kompletní průvodce. Vydání první. Praha: Pro SoftPress, 2003. ISBN 80-86497-34-8.

- [4] Co je IPv6. In: [online]. Dostupné z: https://www.ipv6.cz/Form%C3%A1t_datagramu

- [5] IPv6 krok za krokem. In: [online]. Dostupné z: http://www.logix.cz/michal/doc/article.xp/ipv6-1

- A
