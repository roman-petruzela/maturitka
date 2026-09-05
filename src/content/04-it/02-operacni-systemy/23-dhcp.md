---
title: "DHCP"
order: 23
source: "osy/DHCP.pdf"
---
Existují dva způsoby, kterými můžeme počítačům přidělit IP adresu a další související nastavení protokolu TCP/IP(maska podsítě, výchozí brána, adresy serveru DNS):

- **Statické přidělování IP adres:** Správce sítě přiřadí nastavení protokolu TCP/IP ručně

   - každý PC musí mít jedinečnou IP adresu, správce tedy musí vést údaje o nastavení každého PC, může nastat chaos při vyřazování starých a zavádění nových PC do sítě

   - nevhodné pokud síť spravuje více správců

   - čím větší síť, tím je statické adresování méně vhodné

- **Dynamické přidělování IP adres:** Protokol DHCP umožňuje, aby klientské počítače po spuštění automaticky získaly adresu IP a další souvisejíc nastavení protokolu TCP/IP. V systému Windows server 2008 mohou servery DHCP přiřadit dynamickou adresu IP verze 4 (IPv4), IP verze 6 (IPv6), nebo obě tyto adresy libovolné síťové kartě v počítači.

# Základy protokolu DHCP

Všechna vydání operačního systému Windows 2008 server obsahují službu **DHCP Server** , která může po instalaci zajistit podporu protokolu DHCP. Všechny stávající verze operačního systému Windows také automaticky instalují službu DHCP Client v rámci protokolu TCP/IP. Službu DHCP Client obsahují také Linuxové distribuce a OS Mac.

Počítač, který používá dynamické adresování a konfiguraci IP, se označuje jako klient DHCP. Při spuštění klienta DHCP lze z fondu adres IP, který je definován pro síťový server DHCP, načíst 32bitovou adresu IPv4, 128bitovou adresu IPv6 nebo obě adresy. Úkolem serveru DHCP je udržovat databázi dostupných adres IP a související informace o konfiguraci. Když klient dostane adresu IP, získává tzv. zapůjčení adresy IP. Termín zapůjčení (lease) se používá proto, že přiřazení adresy obvykle není trvalé. Server DHCP nastaví trvání zapůjčení v okamžiku jeho udělení. Může jej také v případě potřeby změnit, např. při obnovení zapůjčení.

Protokol DHCP také dovoluje přiřadit trvalé zapůjčení adresy. Chcete-li to provést můžete vytvořit rezervaci IP adresy. V případě protokolu IPv4 lze IP adresu přiřadit k MAC adrese síťové karty.V případě protokolu IPv6 lze IP adresu přiřadit pomocí klineta DHCPv6 a identifikátor přidružení identity IAID.

Obor (Scope) je seznam adres IPv4 nebo IPv6 a souvisejících možností konfigurace. Chcete-li v rámci oboru definovat podmnožinu adres IP, které se nemají používat, můžete určit vyloučení. Vyloučení (Exclusion) definuje rozsah adres IP, které lze vyloučit, aby je nebylo možné přiřadit klientským počítačům.

Systém Windows Server 2008 podporuje integraci protokolu DHCP a dynamickou službou DNS. Při konfiguraci je tím zajištěno, že dojde k aktualizaci záznamu DNS klienta, který přijme novou adresu IP. Pokud chcete zajistit, že bude možné přeložit názvy klientů na adresy IP, měli byste nakonfigurovat integraci protokolu DHCP a systému DNS.

# Zabezpečení DHCP

Služba DHCP ze své podstaty není bezpečná. Libovolný uživatel s přístupem k síti může provést akce, které potenciálně způsobí problémy jiným klientům, kteří se pokoušejí získat adresu IP. Uživatel může provést následující škodlivé akce:

- Inicializovat útok s cílem odmítnutí služby (DoS – Denial of Service) tak, že požádá o všechny dostupné adresy IP nebo jich spotřebuje značné množství. V obou případech znemožní získat adresu IP jiným uživatelům.

- Inicializovat útok na systém DNS provedením velkého počtu dynamických aktualizací pomocí služby DHCP

Chcete-li snížit riziko útoků, měli byste omezit fyzický přístup k síti. Neusnadňujte neautorizovaným uživatelům připojení k síti. Pokud používáte bezdrátové technologie, použijte šifrování WEP, WPA, nebo WPA2.

# Zprávy DHCPv4

Po spuštění klient DHCP pomocí všesměrového vysílání odešle zprávu **DHCP Discover** . Všechny servery DHCP v síti odpoví na všesměrové vysílání zprávou **DHCP Offer** , která klientovi nabídne zapůjčení IP adresy. Klient přijme první přijatou nabídku tak, že odešle zpět serveru zprávu **DHCP Request** . Server přijme požadavek odesláním zprávy **DHCP Acknowledgment** klientovi.

Klienti DHCP musí svá zapůjčení pravidelně obnovovat – buď při každém restartu, nebo po uplynutí 50 procent času zapůjčení. Pokud proces obnovení není úspěšný, pokusí se klient zapůjčení obnovit znovu po uplynutí 87,5 procenta času zapůjčení. Při obnovení zapůjčení musí klient odeslat DHCP serveru zprávu **DHCP Request** . Server požadavek přijme odesláním zprávy **DHCP Acknowledgment** .

Dostupnost serveru DHCP neovlivňuje spouštění ani přihlašování (ve většině případů). Pokud je server DHCP nedostupný a předchozí zapůjčení klienta je nadále platné, klient odešle příkaz PING výchozí bráně, která je v zapůjčení uvedena. Úspěšný výsledek příkazu PING klienta informuje o tom, že se pravděpodobně nachází ve stejné síti jako v okamžiku, kdy získal zapůjčení. Neúspěšný příkaz PING naznačuje klientovi, že je možná připojen k jiné síti. V tomto případě klient použije automatickou konfiguraci IP adresy, tu také použije, pokud zapůjčení IP adresy vypršelo a DHCP server není dostupný.

Automatická konfigurace  IPv4 funguje takto:

- Klientský PC si vybere adresu IP z podsítě třídy B vyhrazené společností Microsoft 169.254.0.0 a nastaví masku podsítě 255.255.0.0. Před použitím provede test protokolu ARP (Address Resolution Protocol), aby se ujistil, že tuto adresu IPv4 nemá přiřazenu žádný jiný klient.

- Pokud se adresa IPv4 používá, klient opakuje krok 1 a testuje až 10 adres IPv4, než oznámí chybu.

- Jestliže je adresa IPv4 dostupná, klient pomocí ní nakonfiguruje svou síťovou kartu. Klient se poté pokusí kontaktovat server DHCP (každých 5 minut vysílá do sítě všesměrové vysílání). Když klient úspěšně kontaktuje server, získá zapůjčení adresy a změní konfiguraci svého síťového rozhraní.
