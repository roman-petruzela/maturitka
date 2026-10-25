---
title: "Windows Server — verze, instalace a role"
order: 204
---

**Windows Server** je varianta Windows pro servery: poskytuje síťové **služby** (přihlašování do domény, sdílení souborů, tisk, přidělování IP adres…) ostatním počítačům v síti. Praktická správa, Active Directory a PowerShell jsou na stránkách [Linux a Windows Server prakticky](/it/operacni-systemy/03-linux-a-windows-server-prakticky/) a [Active Directory a správa z příkazové řádky](/it/operacni-systemy/49-active-directory-a-sprava-z-prikazove-radky/).

## Verze

Windows Server vychází zhruba po třech letech, každá verze má dlouhou podporu (asi 10 let). Verze odpovídají desktopovým Windows ze stejné doby:

| Verze | Rok | Odpovídá desktopu |
| --- | --- | --- |
| Windows Server 2008 / 2008 R2 | 2008 / 2009 | Windows Vista / 7 |
| Windows Server 2012 / 2012 R2 | 2012 / 2013 | Windows 8 / 8.1 |
| Windows Server 2016 | 2016 | Windows 10 |
| Windows Server 2019 | 2018 | Windows 10 |
| Windows Server 2022 | 2021 | Windows 10 / 11 |
| Windows Server 2025 | 2024 | Windows 11 |

### Edice

- **Standard** — pro běžné firmy; licence zahrnuje omezený počet virtuálních strojů.
- **Datacenter** — pro velká a silně virtualizovaná prostředí; neomezeně virtuálních strojů, pokročilé funkce úložišť a sítí.
- **Essentials** — pro malé firmy s malým počtem uživatelů a zařízení.

Licencuje se podle **počtu procesorových jader** serveru a navíc přístup klientů — **CAL** (Client Access License) na uživatele nebo zařízení.

## Instalace

**Požadavky** (orientačně, minimum podle Microsoftu pro současné verze): 64bitový procesor, 2 GB RAM (s grafickým rozhraním), 32 GB místa na disku, síťová karta. Ve skutečném provozu je potřeba výrazně víc podle rolí, které server poskytuje.

**Možnosti instalace:**

- **Server with Desktop Experience** — s grafickým rozhraním jako běžné Windows; jednodušší pro začátečníky.
- **Server Core** — bez grafického rozhraní, spravuje se příkazovou řádkou, PowerShellem nebo vzdáleně (Server Manager, Windows Admin Center). Menší nároky, méně aktualizací, menší prostor pro útok — doporučená volba pro produkční servery.

**Postup instalace:**

1. Spuštění z instalačního média (ISO na USB nebo připojené k virtuálnímu stroji).
2. Volba jazyka, edice a typu instalace (Core / Desktop Experience).
3. Výběr disku a oddílu; instalace.
4. Nastavení **hesla správce** (Administrator) — musí splnit požadavky na složitost.

**Po instalaci:**

- přidělit serveru **statickou IP adresu** a správný DNS server,
- **přejmenovat** server (výchozí název je náhodný),
- nainstalovat **aktualizace**, nastavit čas a časové pásmo,
- přidat **role a funkce** podle účelu serveru,
- případně připojit server do domény nebo z něj udělat **doménový řadič**.

## Role a funkce

**Role** je hlavní služba, kterou server poskytuje síti; **funkce** (feature) je doplňkový nástroj (např. zálohování, .NET, Telnet klient). Přidávají se v **Server Manageru** (*Manage → Add Roles and Features*) nebo v PowerShellu:

```powershell
Install-WindowsFeature -Name DHCP -IncludeManagementTools
Get-WindowsFeature            # seznam rolí a funkcí a co je nainstalováno
```

| Role | K čemu slouží |
| --- | --- |
| **Active Directory Domain Services (AD DS)** | doména: centrální správa uživatelů, počítačů a skupin, ověřování přihlášení; server s touto rolí je **doménový řadič** |
| **DNS Server** | překlad doménových jmen na IP adresy; pro Active Directory nezbytný |
| **DHCP Server** | automatické přidělování IP adres, masky, brány a DNS klientům — viz [DHCP](/it/operacni-systemy/23-dhcp/) |
| **File and Storage Services** | sdílení složek po síti (protokol SMB), kvóty, stínové kopie, deduplikace |
| **Print and Document Services** | **tiskový server** — sdílení tiskáren, instalace ovladačů klientům, fronty tisku |
| **Remote Desktop Services** | **terminálový server** — uživatelé pracují vzdáleně na serveru (spouštějí aplikace na serveru, na klientovi vidí jen obraz) |
| **Web Server (IIS)** | webový server pro webové stránky a aplikace |
| **Hyper-V** | virtualizace — provoz virtuálních strojů na serveru |
| **Windows Server Update Services (WSUS)** | centrální správa aktualizací Windows pro počítače ve firmě |

Správa zásad pro počítače v doméně — viz [GPO, zásady skupiny](/it/operacni-systemy/14-gpo-zasady-skupiny/); uživatelské profily — viz [uživatelské profily](/it/operacni-systemy/12-uzivatelske-profily/).
