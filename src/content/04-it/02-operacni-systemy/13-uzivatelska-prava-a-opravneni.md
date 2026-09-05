---
title: "Uživatelská práva a oprávnění"
order: 13
source: "osy/uživatelská_práva_a_oprávnění.pdf"
---
Pod souhrnným označením oprávnění si většina uživatelů představí sadu pravidel pro přístup k datům, sdíleným prostředkům nebo speciálním funkcím systému. Windows však rozlišují **oprávnění a práva** , nelze tedy vše paušalizovat. **Oprávnění** ( **permission** ) je možnost přistoupit k některému objektu vybraným způsobem – typickým příkladem může být zápis souboru NTFS.

Naproti tomu **právo** ( **right** ) dovoluje provést některou systémovou akci – přidat nového uživatele, změnit nastavení plochy, určit systémové datum apod. V českých Windows nemusí být rozdíl při různých výstrahách nebo upozorněních natolik markantní, pokud byste však používali anglickou verzi, zjistíte, že právě termíny **permission** a **right** nejsou používány jen tak náhodně, je mezi nimi rozlišováno. My budeme **práva (right** ) a **oprávnění (permission)** také rozlišovat.

# Uživatelská práva ve Windows 10

Uživatelská práva najdeme _Ovládací Panely – Nástroje pro správu – Místní zásady Zabezpečení – Místní Zásady – Přiřazení uživatelských práv_

Zde vidíme, jaká práva jsou přidělena jednotlivým uživatelským skupinám (mohou být přidělena i uživatelům). Najdeme zde uživatelské skupiny, které už známe (Administrators, Users, Guests,…), ale také další skupiny (Everyone, LOCAL SERVICE, NETWORK SERVICE, atd.).

S přidělováním uživatelských práv a jejich odebíráním budeme postupovat opatrně.

# Vestavěné systémové skupiny

Vestavěné systémové skupiny nemůžeme nijak upravovat, existují automaticky a uživatelé se do nich zařazují podle daných pravidel. Mezi důležité systémové skupiny patří:

- Everyone – úplně všichni uživatelé (používá se např. u sdílení souborů a složek)

- Authenticated Users – ověření uživatelé (mají účet na tomto počítači, nebo v doméně)

- Creator Owner - obsahuje uživatele, který vytvořil daný zdroj nebo převzal jeho vlastnictví

- System, Local Service, Network Service - služby se systémovými právy

Pokud bych chtěl zjistit, v jakých skupinách ve skutečnosti jsem, musím napsat do příkazového řádku příkaz **whoami /all**

V zeleném rámečku vidím, že můj účet není jen ve skupině Administrators, ale ve spoustě dalších skupinách (Everyone, Users, INTERACTIVE, Authenticated Users, This Organization, LOCAL, NTML Authentication)

V červeném rámečku je jen pro zajímavost SID (Security Identifier), což je hodnota pod kterou má operační systém uložený můj uživatelský účet. Operační systém mě tedy nemá uloženého jako spravce, ale pod mým SID.

# Oprávnění pro přístup k souborům a složkám

Oprávnění pro přístup k souborům a složkám nefunguje v souborovém systému FAT32! Pokud je chceme využívat musíme použít souborový systém NTFS (ten v dnešní době najdeme na drtivé většině diskových svazků používaných v operačních systémech Windows).

Oprávnění pro přístup se vždy dědí z nadřazené složky, pokud chceme přidělovat vlastní oprávnění, je často nutné odstranit **dědičnost (inheritance)** .

Ten kdo vytvoří soubor či složku je jejím **vlastníkem (owner)** . Vlastník má oprávnění úplné řízení, bez ohledu na skutečná přidělená oprávnění. Členové skupiny Administrators mohou vlastnictví přebírat.

Sloupeček **odepřít (deny)** je vždy silnější, než sloupeček **povolit (allow)** . Mám například uživatele pepa, který je ve skupinách Ucetni a Vedeni. Skupina Ucetni má k danému souboru odepřeno oprávnění Číst a skupina Vedeni má ke stejnému souboru povoleno oprávnění Číst. V tomto případě pepa v souboru číst nemůže, protože sloupeček odepřít (deny) je silnější.

Čerpáno z:

<u>https://jnp.zive.cz/jaka-maji-uzivatele-prava-a-k-cemu-jsou-opravneni</u>

https://ksi.fjfi.cvut.cz/prava-souboru-ve-windows
