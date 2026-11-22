---
title: "Terminálový a tiskový server"
order: 206
source: "potvrzené MAT otázky/OSY/Terminálová služba.docx"
---

Dvě role Windows Serveru. Přehled rolí: [Windows Server — verze, instalace a role](/it/operacni-systemy/52-windows-server-verze-instalace-a-role/).

## Terminálový server

**Terminálová služba** (od Windows Serveru 2008 R2 **Remote Desktop Services**, RDS) umožňuje spouštět aplikace na **vzdáleném serveru**. Spouštění a zpracování probíhá na serveru, po síti se přenáší jen obraz, klávesnice a myš. Každý uživatel pracuje ve své **virtuální relaci**.

**Výhody:** **centrální správa** (aplikace se instalují jen na serveru), přístup z libovolného počítače, delší využití **starších počítačů** (tenkých klientů), funguje i při pomalém připojení, data zůstávají na serveru.

**Nevýhody:** výpadek serveru zastaví všechny uživatele, server musí mít dost výkonu, každý uživatel potřebuje licenci **RDS CAL**.

**Součásti:**

- **Klient** – *Připojení ke vzdálené ploše* (`mstsc`), protokol **RDP** (port 3389), viz [vzdálený přístup](/it/operacni-systemy/53-vzdaleny-pristup-telnet-ssh-rdp/).
- **Server relací** (Remote Desktop Session Host) a **správa licencí**.
- **RemoteApp** – aplikace běží na serveru, ale zobrazuje se v okně místního počítače jako lokální.
- **Brána** (Remote Desktop Gateway) – RDP přes **HTTPS**, takže RDP nemusí být otevřené do internetu. **Web Access** – přístup z prohlížeče.

## Tiskový server

**Tiskový server** propojuje tiskárny se sítí; podporuje protokoly **IPP**, **LPD**, SMB nebo JetDirect (port 9100). Může být počítač se sdílenou tiskárnou, dedikovaný server, součást routeru, nebo zabudovaný v síťové tiskárně.

**Výhody centrálního tiskového serveru:** jedno místo pro **ovladače** (server je distribuuje klientům), správa **tiskových front**, **oprávnění** (kdo smí tisknout), evidence tisku a **publikování tiskáren v Active Directory** s nasazením přes [GPO](/it/operacni-systemy/14-gpo-zasady-skupiny/).

**Ve Windows Serveru:** přidá se role **Print and Document Services** a tiskárny se spravují konzolí **Správa tisku**. Pro omezení tisku na uživatele domény musí být server **členem domény**.

Před instalací zjistíme **verzi OS klientů** (správné ovladače), způsob připojení tiskárny (síťová tiskárna se přidává podle **IP adresy**, ta by měla mít statickou adresu nebo rezervaci v [DHCP](/it/operacni-systemy/23-dhcp/)) a zvolíme **název sdílené položky** (`\\server\nazev`, krátký, bez mezer).

**Řešení potíží s tiskem:** nejdřív zjistíme, **koho problém postihuje**. Netiskne-li nikdo, kontrolujeme tiskárnu (zapnutá, `ping`, zaseklý dokument ve frontě, změněná IP po restartu). Netiskne-li jen někdo, jde o oprávnění nebo ovladače. Netiskne-li jeden uživatel, jde o jeho počítač, výchozí tiskárnu nebo připojení.

## Otázky k opakování

1. Co je terminálová služba a jaké má výhody? ||spouštění aplikací na serveru s přenosem jen obrazu a vstupů; centrální správa, využití starších počítačů, data na serveru||
2. Jaký protokol a port terminálová služba používá? ||RDP, port 3389||
3. Co je RemoteApp a Remote Desktop Gateway? ||RemoteApp zobrazí vzdálenou aplikaci jako lokální okno; brána přenáší RDP přes HTTPS||
4. Jaké jsou výhody centrálního tiskového serveru? ||jedno místo pro ovladače, správa front, oprávnění, evidence tisku, publikace v AD||
5. Jak ve Windows Serveru nastavíte tiskový server? ||přidáním role Print and Document Services a správou v konzoli Správa tisku||
6. Netiskne jeden uživatel. Co zkontrolujete? ||jeho výchozí tiskárnu, připojení k síti a chybovou zprávu||
