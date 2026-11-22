---
title: "Windows Server — verze, instalace a role"
order: 204
---

**Windows Server** je varianta Windows pro servery: poskytuje síťové **služby** (přihlašování do domény, sdílení souborů, tisk, přidělování IP adres) ostatním počítačům. Active Directory a PowerShell: [Linux a Windows Server prakticky](/it/operacni-systemy/03-linux-a-windows-server-prakticky/), [Active Directory](/it/operacni-systemy/49-active-directory-a-sprava-z-prikazove-radky/).

## Verze a edice

Windows Server vychází zhruba po třech letech (2008, 2012, 2016, 2019, 2022, 2025) a má dlouhou podporu (asi 10 let).

- **Standard** – běžné firmy, **Datacenter** – velká virtualizovaná prostředí, **Essentials** – malé firmy.
- Licencuje se podle **počtu jader** serveru a přístup klientů — **CAL** (Client Access License) na uživatele nebo zařízení.

## Instalace

**Požadavky** (minimum): 64bitový procesor, 2 GB RAM, 32 GB disku, síťová karta; v provozu víc podle rolí.

- **Server with Desktop Experience** – s grafickým rozhraním.
- **Server Core** – bez grafického rozhraní, správa příkazovou řádkou, PowerShellem nebo vzdáleně; menší nároky a prostor pro útok, doporučené pro produkci.

**Postup:** spuštění z instalačního média → volba jazyka, edice a typu instalace → výběr disku → nastavení **hesla správce**.

**Po instalaci:** **statická IP adresa** a DNS, **přejmenování** serveru, aktualizace, přidání **rolí a funkcí**, případně připojení do domény nebo vytvoření **doménového řadiče**.

## Role a funkce

**Role** je hlavní služba serveru, **funkce** doplňkový nástroj. Přidávají se v **Server Manageru** (*Add Roles and Features*) nebo v PowerShellu: `Install-WindowsFeature -Name DHCP -IncludeManagementTools`.

| Role | K čemu slouží |
| --- | --- |
| **AD DS** (Active Directory Domain Services) | doména: centrální správa uživatelů, počítačů a skupin; server je **doménový řadič** |
| **DNS Server** | překlad jmen na IP adresy, pro AD nezbytný |
| **DHCP Server** | přidělování IP adres klientům – [DHCP](/it/operacni-systemy/23-dhcp/) |
| **File and Storage Services** | sdílení složek (SMB), kvóty, stínové kopie |
| **Print and Document Services** | **tiskový server** |
| **Remote Desktop Services** | **terminálový server** – [terminálový a tiskový server](/it/operacni-systemy/54-terminalovy-a-tiskovy-server/) |
| **Web Server (IIS)** | webové stránky a aplikace |
| **Hyper-V** | virtualizace |
| **WSUS** | centrální správa aktualizací |

Zásady pro počítače v doméně: [GPO](/it/operacni-systemy/14-gpo-zasady-skupiny/); profily: [uživatelské profily](/it/operacni-systemy/12-uzivatelske-profily/).

## Otázky k opakování

1. K čemu slouží Windows Server a jaké má edice? ||poskytuje síťové služby; Standard, Datacenter, Essentials||
2. Čím se liší Server Core a Desktop Experience? ||Core nemá grafické rozhraní a spravuje se příkazovou řádkou nebo vzdáleně, je úspornější a bezpečnější||
3. Co uděláte po instalaci serveru? ||statická IP a DNS, přejmenování, aktualizace, přidání rolí||
4. Co je role a co je doménový řadič? ||role je hlavní služba serveru; doménový řadič je server s rolí AD DS||
5. Vyjmenujte důležité role serveru. ||AD DS, DNS, DHCP, souborové služby, tiskový server, Remote Desktop Services, IIS||
