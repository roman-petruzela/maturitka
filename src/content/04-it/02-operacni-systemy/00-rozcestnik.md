---
title: "Operační systémy – rozcestník"
order: -1
---

Rozcestník kategorie: o čem předmět je, kdy se podle ŠVP učí, co si z něj určitě zapamatovat, kde je které téma a které maturitní okruhy pokrývá.

## O předmětu

- Co operační systém dělá (prostředník mezi uživatelem, programy a hardwarem), z čeho se skládá a jak spravuje procesor, paměť, data a periferie.
- Prakticky: instalace a údržba Windows, příkazový řádek, disky a zálohování, uživatelé, skupiny a oprávnění, ochrana před malwarem.
- Ve 2. a 4. ročníku serverová část: Windows Server, doména a Active Directory, zásady skupiny (GPO), DHCP, PowerShell; ve 3. ročníku Linux (terminál, SSH, Samba).
- Navazuje na [úvod do výpočetní techniky](/it/#uvod-do-vypocetni-techniky) (BIOS, disky) a prolíná se s [počítačovými sítěmi](/it/#pocitacove-site) a [kybernetickou bezpečností](/it/#kyberneticka-bezpecnost).

## Ročníky a hodiny podle ŠVP

| Ročník | Hodin týdně | Obsah (ŠVP §4.9.2) |
| --- | --- | --- |
| 1. | 2 | desktopový Windows, teorie OS, licence, instalace a správa, příkazový řádek, disky, zálohování, malware a antiviry, účty, skupiny a oprávnění – viz [tematický plán](/it/operacni-systemy/03-tematicky-plan-prehled-latky/) |
| 2. | 2 | registry, sdílení v síti peer-to-peer, Windows Server: doména, Active Directory, GPO, DHCP a DNS, skripty, stínové kopie a diskové kvóty |
| 3. | 1 | Linux: distribuce, instalace, grafické a textové prostředí, správa |
| 4. | 1 | pokročilá správa Windows Serveru: terminálová služba, tiskový server, PowerShell a skripty |

Plné znění výstupů je v [přehledu ŠVP](/it/reference/svp-prehled/#492-operační-systémy).

## Co si určitě zapamatovat

- **Operační systém** = jádro (kernel) + uživatelské rozhraní + souborový systém. Funkce: ovládání počítače, abstrakce hardwaru (API, ovladače), správa prostředků. Jádro **monolitické**, **mikrojádro**, **hybridní**.
- **BIOS** (Flash ROM, nastavení v CMOS s baterií) po startu najde hardware a zavede OS. **UEFI** ho nahrazuje: Secure Boot, podpora **GPT** pro disky nad 2 TB (limit MBR).
- **Správa procesoru**: multitasking **kooperativní** (program procesor vrací sám – Windows 3.x/95/98) × **preemptivní** (OS ho programu odebírá – dnešní systémy). Plánování FIFO, prioritní, nejkratší úloha, cyklické. **Virtuální paměť** = odkládání na disk.
- **FAT32**: soubor max. 4 GB, bez oprávnění (flash disky). **NTFS**: oprávnění, šifrování, komprese, diskové kvóty.
- **Licence**: proprietární (komerční, freeware, shareware – demo, trial, adware; OEM vázaná na hardware) × svobodný software (public domain, **GNU GPL** – úpravy se musí šířit pod stejnou licencí). Software se nekupuje, kupuje se licence.
- **Skupiny** Administrators, Users, Guests, Backup Operators; právo (right) = systémová akce × oprávnění (permission) = přístup k objektu. **Odepřít je vždy silnější než povolit**, oprávnění se dědí z nadřazené složky, vlastník má úplné řízení.
- **Profily**: místní, **cestovní** (na serveru, aktualizuje se po odhlášení), **povinný** (změny se po odhlášení zahodí), dočasný.
- **Zálohy**: **úplná** a **přírůstková** archivační atribut nastaví na „archivováno“, **rozdílová** ho nemění; kopírovací a denní atribut ignorují. V praxi úplná 1× týdně + přírůstková nebo rozdílová denně. **RAID není záloha.**
- **RAID 0** prokládání bez redundance, **RAID 1** zrcadlení, **RAID 5** parita rozložená na všech discích, **RAID 10** zrcadlení + prokládání.
- **Malware**: virus potřebuje hostitele, červ se šíří sám po síti, trojský kůň se vydává za užitečný program, dále spyware, adware, **ransomware** (šifruje data, chce výkupné), rootkit, backdoor; hoax a phishing jsou podvodné zprávy.
- **Hesla**: neuhodnutelná, dlouhá, kombinace 3 ze 4 skupin znaků; online útok (hádání, zamkne se účet) × offline cracking hashe.
- **Active Directory**: doména, **doménový řadič** (AD DS), organizační jednotky (OU), doménové účty a skupiny. **GPO** se uplatňují v pořadí místní → lokalita → doména → OU (pozdější vyhrává), dědičnost lze zablokovat (Block inheritance) a vynutit (Enforced).
- **DHCP** přiděluje adresu postupem Discover → Offer → Request → Ack; bez serveru si Windows vezme adresu **APIPA** 169.254.x.x.
- **Linux**: jádro pod GPLv2, šíří se v distribucích; `root` = administrátor; práva `chmod` číselně r = 4, w = 2, x = 1 (755, 644).

## Témata kategorie

**Teorie operačních systémů**

- [Tematický plán (přehled látky)](/it/operacni-systemy/03-tematicky-plan-prehled-latky/)
- [Základní pojmy (hardware, software)](/it/operacni-systemy/04-zakladni-pojmy-hardware-software/)
- [Úvod do operačních systémů](/it/operacni-systemy/05-uvod-do-operacnich-systemu/) – BIOS, UEFI, části OS
- [Historie operačních systémů](/it/operacni-systemy/06-historie-operacnich-systemu/)
- [Operační systémy](/it/operacni-systemy/07-operacni-systemy/) – správa procesoru, paměti, dat a periferií
- [OS Linux – distribuce, grafický a textový režim](/it/operacni-systemy/01-os-linux-distribuce-graficky-a-textovy-rezim/)
- [OS Windows](/it/operacni-systemy/02-os-windows/)
- [Licence a autorský zákon](/it/operacni-systemy/08-licence-a-autorsky-zakon/)

**Příkazový řádek a síť**

- [Příkazový řádek (cmd)](/it/operacni-systemy/09-prikazovy-radek-cmd/)
- [Práce se sítí (příkazy)](/it/operacni-systemy/10-prace-se-siti-prikazy/)
- [Síť peer-to-peer](/it/operacni-systemy/24-sit-peer-to-peer/)
- [DHCP](/it/operacni-systemy/23-dhcp/)

**Uživatelé a oprávnění**

- [Uživatelské účty a hesla](/it/operacni-systemy/11-uzivatelske-ucty-a-hesla/)
- [Uživatelské profily](/it/operacni-systemy/12-uzivatelske-profily/)
- [Uživatelská práva a oprávnění](/it/operacni-systemy/13-uzivatelska-prava-a-opravneni/)
- [GPO (zásady skupiny)](/it/operacni-systemy/14-gpo-zasady-skupiny/)

**Disky a zálohování**

- [Práce s disky](/it/operacni-systemy/15-prace-s-disky/)
- [Pevný disk a nástroje pro údržbu](/it/operacni-systemy/16-pevny-disk-a-nastroje-pro-udrzbu/)
- [RAID](/it/operacni-systemy/17-raid/)
- [Stínové kopie svazku, pevné odkazy, diskové kvóty](/it/operacni-systemy/18-stinove-kopie-svazku-pevne-odkazy-diskove-kvoty/), [praktické využití](/it/operacni-systemy/20-stinove-kopie-svazku-prakticke-vyuziti/) a [anglický text k procvičení](/it/operacni-systemy/19-shadow-copy-anglicky-text-k-procviceni/)
- [Zálohování dat](/it/operacni-systemy/21-zalohovani-dat/)
- [Zálohovací média – shrnutí](/it/operacni-systemy/22-zalohovaci-media-shrnuti/)

**Zabezpečení**

- [Antivirové programy](/it/operacni-systemy/25-antivirove-programy/)
- [Malware](/it/operacni-systemy/26-malware/)
- [Firewall](/it/operacni-systemy/27-firewall/)

**Server a Linux v praxi**

- [Praktická správa Linuxu a Windows Serveru](/it/operacni-systemy/03-linux-a-windows-server-prakticky/)
- [Active Directory a správa z příkazové řádky](/it/operacni-systemy/49-active-directory-a-sprava-z-prikazove-radky/)
- [SSH – vzdálený přístup a autentizace klíčem](/it/operacni-systemy/50-ssh-vzdaleny-pristup-a-autentizace-klicem/)
- [Samba – sdílení souborů mezi Linuxem a Windows](/it/operacni-systemy/51-samba-sdileni-souboru-mezi-linuxem-a-windows/)

## Maturitní okruhy

Kompletní seznam je v [maturitních okruzích IT](/it/reference/maturitni-okruhy/). Této kategorie se týkají okruhy 11–15:

| Okruh | Stránky |
| --- | --- |
| [11) Operační systémy](/it/reference/maturitni-okruhy/#11-operační-systémy) | [úvod do OS a firmware](/it/operacni-systemy/05-uvod-do-operacnich-systemu/), [funkce OS a souborové systémy](/it/operacni-systemy/07-operacni-systemy/), [typy OS](/it/operacni-systemy/06-historie-operacnich-systemu/), [Linux](/it/operacni-systemy/01-os-linux-distribuce-graficky-a-textovy-rezim/), [Windows](/it/operacni-systemy/02-os-windows/) |
| [12) Správa OS](/it/reference/maturitni-okruhy/#12-správa-os) | [cmd](/it/operacni-systemy/09-prikazovy-radek-cmd/), [disky](/it/operacni-systemy/15-prace-s-disky/), [RAID](/it/operacni-systemy/17-raid/), [stínové kopie](/it/operacni-systemy/18-stinove-kopie-svazku-pevne-odkazy-diskove-kvoty/), [práva a oprávnění](/it/operacni-systemy/13-uzivatelska-prava-a-opravneni/), [Samba](/it/operacni-systemy/51-samba-sdileni-souboru-mezi-linuxem-a-windows/) |
| [13) Zabezpečení OS a správa dat](/it/reference/maturitni-okruhy/#13-zabezpečení-os-a-správa-dat) | [antiviry](/it/operacni-systemy/25-antivirove-programy/), [malware](/it/operacni-systemy/26-malware/), [zálohování](/it/operacni-systemy/21-zalohovani-dat/), [média](/it/operacni-systemy/22-zalohovaci-media-shrnuti/), [hesla](/it/operacni-systemy/11-uzivatelske-ucty-a-hesla/) |
| [14) Windows Server](/it/reference/maturitni-okruhy/#14-windows-server) | [Active Directory](/it/operacni-systemy/49-active-directory-a-sprava-z-prikazove-radky/), [DHCP](/it/operacni-systemy/23-dhcp/), [síťové příkazy](/it/operacni-systemy/10-prace-se-siti-prikazy/), [Windows Server v praxi](/it/operacni-systemy/03-linux-a-windows-server-prakticky/#windows-server) |
| [15) Windows Server 2](/it/reference/maturitni-okruhy/#15-windows-server-2) | [profily](/it/operacni-systemy/12-uzivatelske-profily/), [licence](/it/operacni-systemy/08-licence-a-autorsky-zakon/), [PowerShell](/it/operacni-systemy/03-linux-a-windows-server-prakticky/), [GPO](/it/operacni-systemy/14-gpo-zasady-skupiny/) |

Okruh 19 (práva ve Windows a Linuxu, SSH) z kybernetické bezpečnosti využívá stránky [oprávnění](/it/operacni-systemy/13-uzivatelska-prava-a-opravneni/) a [SSH](/it/operacni-systemy/50-ssh-vzdaleny-pristup-a-autentizace-klicem/).

## Co je jen okrajové

- **Historie Windows a starých systémů** (Multics, CP/M, Unix, Apple DOS, Windows 3.1…) – stačí vývojová linie a rozdíl kooperativního a preemptivního multitaskingu.
- **Strategie plánování procesů** – stačí vědět, že existují, a znát FIFO a cyklické plánování.
- **Podrobnosti GPO** (konkrétní cesty v editoru, Sysvol, výchozí GPO) – důležitý je princip a pořadí uplatňování.
- **Příkazy `ds*`** a syntaxe dávkových souborů – k laboratorní práci, ne k učení nazpaměť.
- **Anglický text o shadow copy** je cvičný text, ne nová látka.
- RAID 3 a víceúrovňová pole kromě RAID 10 – stačí vědět, že existují.
