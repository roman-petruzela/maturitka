---
title: "Terminálový a tiskový server"
order: 206
source: "potvrzené MAT otázky/OSY/Terminálová služba.docx"
---
Dvě role Windows Serveru, které se probírají ve 4. ročníku. Přehled všech rolí a jejich instalace je na stránce [Windows Server — verze, instalace a role](/it/operacni-systemy/52-windows-server-verze-instalace-a-role/).

## Terminálový server

**Terminálová služba** (Terminal Services, od Windows Serveru 2008 R2 **Remote Desktop Services**, RDS) umožňuje uživatelům spouštět aplikace systému Windows na vzdáleném serveru. Když uživatelé spustí aplikaci na terminálovém serveru, dochází ke spouštění a zpracování na serveru a po síti se přenášejí pouze data ze zařízení, jako je displej, klávesnice a myš (případně zvuk). Klient, který je přihlášen k terminálovému serveru a vzdáleně pracuje s aplikacemi, používá tzv. **virtuální relaci**. K terminálovému serveru mohou být současně připojeny desítky či stovky uživatelů, avšak jednotliví uživatelé vidí pouze své vlastní virtuální relace.

**Výhody:**

- **centrální správa** — aplikace se instalují a aktualizují jen na serveru a všichni uživatelé používají stejnou verzi,
- přístup k aplikacím z libovolného počítače v síti,
- lze déle využívat **starší počítače** (tenké klienty), protože uživatelé nepracují s aplikacemi ve svých pracovních stanicích, ale na terminálových serverech,
- přenáší se jen nezbytná data vstupně-výstupních zařízení, takže služba funguje i při **pomalém připojení**,
- data zůstávají na serveru — ztráta nebo krádež klientského počítače je méně nebezpečná.

**Nevýhody:** výpadek serveru zastaví práci všech uživatelů; server musí mít dostatečný výkon pro všechny relace najednou; každý uživatel nebo zařízení potřebuje licenci **RDS CAL**.

### Součásti

- **Klienti terminálové služby** — primární klient se nazývá **Připojení ke vzdálené ploše** (Remote Desktop Connection, `mstsc`) a je součástí Windows. Komunikuje protokolem **RDP** (port 3389) — viz [vzdálený přístup](/it/operacni-systemy/53-vzdaleny-pristup-telnet-ssh-rdp/).
- **Servery terminálové služby** (Remote Desktop Session Host) — na nich běží relace uživatelů.
- **Správa licencí** (Remote Desktop Licensing) — přiděluje klientské licence.

### Přístup ke vzdáleným aplikacím

- **RemoteApp** — program, ke kterému uživatel přistupuje vzdáleně přes terminálovou službu, ale zdánlivě je spuštěn v místním počítači. Místo celé vzdálené plochy funguje ve svém vlastním okně s možností změny velikosti a má vlastní položku na hlavním panelu. Více aplikací RemoteApp spuštěných na stejné stanici sdílí jednu relaci.
- **Brána** (TS Gateway, dnes Remote Desktop Gateway) — umožňuje autorizovaným uživatelům připojení k síťovým prostředkům z libovolného zařízení s přístupem k internetu. Vytváří zabezpečená šifrovaná připojení pomocí protokolu RDP nad protokolem **HTTPS**, takže RDP nemusí být otevřené do internetu.
- **Web Access** — přístup k terminálovým serverům z webového prohlížeče; stránka obsahuje odkazy na dostupné programy nastavené jako RemoteApp.

## Tiskový server

**Tiskový server** (Print server) je zařízení, které propojuje tiskárnu s klientem přes počítačovou síť — umožňuje tisk počítačům v síti. Tiskové servery mohou podporovat standardní nebo svoje protokoly včetně **IPP**, Line Printer Daemon protocol (**LPD**), Microsoft Network Printing protocol (SMB), NetBIOS nebo JetDirect (port 9100).

Tiskový server může být:

- počítač v síti s jednou nebo více sdílenými tiskárnami, určen i k jiné práci,
- počítač (dedikovaný) sloužící pouze jako tiskový server,
- integrovaný v zařízeních jako router, firewall…,
- zabudovaný v tiskárně (síťová tiskárna).

**Výhody centrálního tiskového serveru:** jedno místo pro ovladače (server je **automaticky distribuuje** klientům), správa **tiskových front** (pozastavení, zrušení, priority úloh), **oprávnění** (kdo smí tisknout), evidence tisku, **publikování tiskáren v Active Directory** a jejich nasazení uživatelům přes [GPO](/it/operacni-systemy/14-gpo-zasady-skupiny/).

### Tiskový server ve Windows Serveru

Server se nakonfiguruje přidáním role **Print and Document Services**; tiskárny se pak spravují konzolí **Správa tisku** (Print Management). Má-li tiskový server omezit tisk jen na některé uživatele domény nebo publikovat tiskárny ve službě Active Directory, musí být **připojen k doméně** jako členský server.

Kroky před instalací:

1. **Zjistit verzi operačního systému klientů** — podle ní se vyberou správné ovladače tiskárny (např. 32bitové a 64bitové), které server bude klientům distribuovat.
2. **Vytisknout zkušební stránku** nebo stránku konfigurace — název výrobce, model, jazyk a nainstalované volitelné součásti.
3. **Určit, jak bude server připojen k tiskárně** — tiskárna připojená přes USB (Plug and Play) se nakonfiguruje sama; síťová tiskárna s vlastním síťovým adaptérem se přidává podle **IP adresy** (tiskárna by měla mít statickou adresu nebo rezervaci v [DHCP](/it/operacni-systemy/23-dhcp/)).
4. **Zvolit název tiskárny** — výchozí je název výrobce a modelu; obvykle kratší než 31 znaků.
5. **Zvolit název sdílené položky** — pod ním se uživatelé k tiskárně připojují (`\\server\nazev`); kvůli kompatibilitě se starými klienty se volí krátký, bez mezer.

### Řešení potíží s tiskem

Nejdřív se zjistí, **koho problém postihuje** — zkusí se tisk ze svého počítače, z jiných počítačů a z tiskového serveru:

| Kdo nemůže tisknout | Pravděpodobná příčina | Co zkontrolovat |
| --- | --- | --- |
| **všichni** | tiskárna nebo síť | Je tiskárna zapnutá (osobně nebo přes její webové rozhraní)? Neblokuje tiskovou frontu dokument ve stavu chyba? Nedostala tiskárna od DHCP po restartu jinou IP adresu (chybí rezervace)? Odpovídá na `ping`? Přeinstalovat ovladač. |
| **někteří** | oprávnění, software nebo síť | Oprávnění k tiskárně. Jsou na serveru ovladače i pro starší či jinou verzi OS? Nemají uživatelé v aplikaci nastavenou jinou výchozí tiskárnu? |
| **jeden uživatel** | software, počítač uživatele nebo síť | Správná výchozí tiskárna? Je počítač připojený do sítě? Jaká chybová zpráva se při tisku objeví? |
