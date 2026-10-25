---
title: "GPO (zásady skupiny)"
order: 14
source: "osy/GPO.pdf"
---
GPO (Group Policy Object – objekt zásad skupiny)

Zásady skupiny umožňují zjednodušit správu, protože správcům umožňují konfigurovat nastavení uživatelů a počítačů ve službě AD DS (Active Directory Domain Services) a poté tyto zásady automaticky aplikovat na počítače a vynucovat pro účty počítačů a uživatelů v rámci celé organizace. Politiky aplikované na počítač se standardně uplatňují při startu počítače, politiky aplikované na uživatele probíhají při přihlášení uživatele. Obě se pak aplikují při periodické obnově Group Policy (to je standardně každých 90 minut + náhodný posun o až 30 minut). Aplikaci politik také můžeme vynutit ručně pomocí příkazu pro cmd **gpupdate** .

Pomocí zásad skupin lze zajistit například následující operace:

- Přesměrovat speciální složky, jako je uživatelská složka Dokumenty, na centrálně spravované síťové složky

- Uzamknout konfiguraci plochy počítače

- Definovat skripty pro přihlášení, odhlášení, vypnutí a spouštění

- Automatizovat instalaci aplikací

- Atd.

Místní zásady skupin a zásady skupin služby Active Directory

### Místní zásady

Zásady skupin si můžeme představit jako sadu pravidel, která pomáhají spravovat uživatele a počítače. K dispozici jsou dva typy zásad skupin. Prvním typem jsou místní zásady skupin, které jsou uloženy místně v jednotlivých počítačích ve složce %SystemRoot%\System32\GroupPolicy a týkají se pouze příslušného počítače. Počítač v doméně má jednak místní zásady skupin, ale podléhá také druhému typu zásad skupin, které se označují jako zásady skupin služby Active Directory. Místní zásady skupin si spustíme příkazem **gpedit.msc**

### Zásady skupin v Active Directory

Fyzické komponenty zásad skupin služby Active Directory označené jako šablony zásad skupin (Group Policy Template – GPT) jsou uloženy ve složce Sysvol. Služba Active Directory pomocí této složky replikuje zásady.

Vytvoříte-li doménu, vzniknou dvě zásady skupin služby Active Directory:

- **Default Domain Controllers Policy** – výchozí objekt zásad skupin vytvořený pro organizační jednotku Řadiče domény, který se vztahuje na všechny řadiče domény v doméně za předpokladu, že jsou členem této organizační jednotky

- **Default Domain Policy** – výchozí objekt zásad skupiny, který je vytvořen a propojen s doménou v rámci služby Active Directory

K objektům zásad skupin se dostaneme přes Správce serveru – Nástroje – Správa zásad skupiny

Podle potřeby můžete vytvořit další objekty zásad skupin a propojit je s **lokalitami** , **doménami** a **organizačními jednotkami** , které jste vytvořili. Pokud tedy chceme vynutit GPO pro určitou skupinu počítačů, můžeme je dát do jedné organizační jednotky a k této organizační jednotce přilinkovat GPO.

## Nastavení zásad skupin

Nastavení zásad skupin se dělí do dvou kategorií: Konfigurace počítače (Computer Configuration) a Konfigurace uživatele (User Configuration). Nastavení patřící ke konfiguraci počítače i uživatele jsou rozdělena do tří hlavních tříd:

- **Nastavení softwaru (Software Settings)** – umožňuje nainstalovat software do počítačů a poté jej spravovat instalací oprav nebo upgradů. Software lze také odinstalovat.

- **Nastavení systému Windows (Windows Settings)** – umožňuje spravovat klíčová nastavení systému Windows pro počítače i uživatele, včetně skriptů a zabezpečení.

V případě uživatelů lze spravovat také Službu vzdálené instalace (Remote Installation Services), přesměrování složky a údržbu aplikace Internet Explorer.

-
## Dědičnost zásad skupin

Když se uplatňuje více zásad skupin, použijí se v následujícím pořadí:

- **Místní zásady skupin** – Každý počítač se systémem Windows 2000 nebo novějším má místní zásadu skupin. Místní zásady se aplikují jako první.

- **Zásady skupin lokality**

- **Zásady skupin domény –** jako třetí v pořadí se zpracovávají zásady propojené s doménami. Jestliže existuje vice zásad domén, zpracovávají se synchronně v pořadí uvedené přednosti.

- **Zásady skupin organizační jednotky –** čtvrté na řadě jsou zásady skupin propojené s organizačními jednotkami na nejvyšší úrovni. Pokud je k dispozici vice zásad organizačních jednotek na nejvyšší úrovni, zpracovávají se synchronně v pořadí uvedené přednosti.

- **Zásady skupin podřízené organizační jednotky –** na pátém místě se zpracovávají zásady propojené s podřízenými organizačními jednotkami. Je-li k dispozici vice zásad podřízených organizačních jednotek, zpracovávají se synchronně v pořadí uvedené přednosti.

Na obrázků vidíme, jaké GPO se vztahují ke členům organizační jednotky **lizzards** . Jsou to GPO **Default Domain Policy** (protože ten je přilinkován k doméně a platí pro všechny členy domény) a GPO **jester** (ten je přilinkován k organizační jednotce lizzards). GPO **jester** má vyší prioritu, protože se aplikuje jako poslední.

Zablokování dědičnosti (Block inheritance)

Pro určitou organizační jednotku můžeme zrušit dědění. Klikneme pravým tlačítkem na organizační jednotku a zvolíme **Zablokovat dědičnost** (Block Inheritance), tím se přestanou zpracovávat všechny nadřazené politiky mimo vynucených.

Na obrázku vidíme, jak vypadá zablokování dědičnosti u organizační jednotky **lizzards** . V tomto případě organizační jednotka nedědí GPO **Default Domain Policy** .

Vynucení dědičnosti (Enforced)

Vynucení dědičnosti je silnější než blokování dědičnosti. Zároveň mění prioritu zpracovávání GPO. Pokud kliknu na GPO pravým a zvolím **Vynucené** (Enforced), bude se tento GPO aplikovat na podřízené objekty s nejvyšší prioritou.

Na obrázku vidíme GPO, které platí pro organizační jednotku **lizzards** , pokud vynutím GPO **Default Domain Policy** . **Default Domain Policy** má nejvyšší prioritu, protože je vynucený. Zároveň je ignorováno blokování dědičnosti u organizační jednotky **lizzards** , protože vynucení je silnější

## Cvičení — praktické využití GPO

**1. Omezení uživatelů.** Na serveru vytvořte organizační jednotku `externisti`. Do organizační jednotky `externisti` vytvořte uživatele Eva Svobodová. K organizační jednotce `externisti` přilinkujte GPO `ext`.

Přihlašte uživatele Eva Svobodová — dostane se do ovládacích panelů a může pracovat s příkazovým řádkem. Toto budeme chtít Evě a všem dalším externistům zakázat na všech PC v doméně. Použijeme proto GPO `ext` k nastavení bezpečnostní politiky:

- Uživatelská konfigurace → Administrativní šablony → Ovládací panel → Zákaz přístupu k Ovládacímu panelu a nastavení PC
- Uživatelská konfigurace → Administrativní šablony → Systém → Zákaz přístupu k příkazovému řádku

Přihlašte uživatele Eva Svobodová a ověřte, že se do ovládacích panelů ani příkazového řádku nedostane.

**2. Firewall.** V doméně vytvořte nové pravidlo pro firewall, které umožní zkoušet příkaz `ping` na různé PC v doméně (tj. firewall ping nezahodí). Upravte `Default Domain Policy`:

- Konfigurace počítače → Zásady systému Windows → Nastavení zabezpečení → Brána Windows Defender s pokročilým zabezpečením → Příchozí pravidla

Po vytvoření pravidla by mělo být možné posílat ping na všechny PC v doméně.

**3. Tapeta plochy.** Zakažte uživatelům měnit tapetu plochy — a to všem, tedy opět přes `Default Domain Policy`:

- Uživatelská konfigurace → Administrativní šablony → Ovládací panel → Personalizace → Zabránit změně tapety

Funkčnost GPO ověřte přes účet externistky Evy Svobodové.
