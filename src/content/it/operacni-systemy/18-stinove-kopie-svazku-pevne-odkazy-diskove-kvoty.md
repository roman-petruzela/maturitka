---
title: "Stínové kopie svazku, pevné odkazy, diskové kvóty"
order: 18
source: "osy/použití stínové kopie svazku_pevne odkazy_diskové kvoty.pdf"
---
Použití stínové kopie svazku, pevné odkazy, diskové kvóty

Použití stínové kopie svazku **Stínové kopírování souborů ve sdílených složkách** • umožňuje konfigurovat svazky tak, aby se v nastavených intervalech během dne ve sdílených složkách automaticky vytvářely stínové kopie souborů

- lze se vrátit k předchozím verzím souborů,které jsou uloženy ve sdílených složkách

- • pomocí těchto starších verzí lze obnovit odstraněné, nesprávně upravené nebo přepsané soubory

# Použití stínové kopie svazku **Stínové kopírování otevřených nebo uzamčených souborů kvůli zálohování**

• umožňuje pomocí zálohovacích programů (Zálohování systému Windows), zálohovat soubory, které jsou otevřeny nebo uzamčeny • je možné zálohovat soubory, které se používají v příslušné aplikaci

- Použití stínové kopie svazku

- • pokud uživatel odstraní soubor se sdílené složky (z klientského PC pomocí sítě na vzdáleném serveru), soubor je trvale odstraněn (nikdy se neobjeví v Koši) → bez použití stínové kopie pak lze soubor obnovit pouze ze zálohy (běžný uživatel nemá práva)

• při použití stínových kopií vytváří server, v předem definovaných intervalech “snímky“ sdílených složek a ukládá tyto bitové kopie do uložiště stínových kopií tak, aby k nim mohli uživatelé snadno přistupovat → po implementaci stínových kopií zvládnou uživatelé obnovení souborů sami

## Implementace stínových kopiíí sdílených složek

Před implementací je vhodné zvážit následující hlediska:

• **Kopírované svazky** : pro které svazky bude stínové kopírování konfigurováno? • **Místo na disku** : kolik místa na disku bude stínové kopírování vyžadovat? • **Stínové uložiště** : kde budou stínové kopie uloženy a na kterých svazcích?

• **Plán spuštění** : jak často se budou stínové kopie vytvářet?

## Implementace stínových kopiíí sdílených složek

• jakmile nastavíme funkci stínové kopírování svazků,začnou se vytvářet stínové kopie souborů ve sdílených složkách na těchto svazcích

• ukládá se až 64 verzí každého souboru a ve výchozím nastavení nakonfiguruje svou max. spotřebu na 10 % kapacity svazku, po tomto nastavení je maximální hodnota pevná, dokud jí nezměníme → může docházet k chybám v důsledku nedostatku místa !

## Implementace stínových kopiíí sdílených složek

• ve výchozím nastavení jsou kopie vytvářeny 2-krát denně (7:00, 12:00) • neplánujte vytváření stínových kopií a zálohování serveru ve stejný čas → bude docházet k chybám !

## Správa stínových kopií pomocí konzoly Správa počítače

1. Spusťte konzolu Správa počítače, rozbalte uzel Úložiště a vyberte položku Správa disků, pravým tlačítkem klikněte na libovolný svazek a vyberte příkaz Vlastnosti.

2. V dialogovém okně vlastností klepněte na kartu Stínové kopie

3. Vyberte svazek, pro který chcete nakonfigurovat stínové kopie a poté klikněte na tlačítko nastavení

## Správa stínových kopií pomocí konzoly Správa počítače

4. V seznamu Obsah tohoto svazku určete , kde mají být stínové kopie vytvořeny (vyberte svazek)

5. Přepínač Maximální velikost umožňuje nastavit největší kapacitu, kterou mohou stínové kopie na tomto svazku zabrat

6. Po kliknutí na tlačítko plán můžete nastavit plánování vytváření stínových kopií

## Správa stínových kopií pomocí konzoly Správa počítače

## Správa stínových kopií pomocí konzoly Správa počítače

# Vracení celého svazku

Tento postup funguje pouze pokud svazek neobsahuje soubory operačního systému a není na disku sdíleném v clusteru.

1. Správa počítače – Úložiště – Správa disku – pravým tlačítkem kliknout na svazek a zvolit Vlastnosti – Stínové kopie.

2. Vyberte svazek, který chcete vrátit do původního stavu, podle data vyberte stínovou kopii a klepněte na tlačítko Vrácení změn.

# Použití síťových kopií na klientech

1. Uživatel klikne pravým tlačítkem na sdílenou síťovou složku, zvolí **Vlastnosti** a záložku **Předchozí verze** , poté si vybere verzi kterou chce obnovit a klikne na tlačítko **Obnovit.**

Použití síťových kopií na klientech

# Pevné odkazy

- pevný odkaz je položka složky pro soubor a OS může pomocí něj najít soubory ve složkách

- • na svazcích NTFS mohou mít soubory více pevných odkazů

- soubor se může v jedné složce zobrazit pod více názvy, nebo se objevit ve více složkách pod stejným názvem

- všechny pevné odkazy směřují na jeden soubor, narozdíl od kopií, kdy data souboru existují ve více umístěních

- zabezpečení se nastavují pro zdrojový soubor, pevné odkazy toto zabezpečení přebírají

# Pevné odkazy

**Použití:** chci mít soubor v síťové sdílené složce, ale zároveň jej používá aplikace, která vyžaduje načítání z jiné složky **Nevýhody:** soubor může souběžně otevřít a používat více uživatelů → problém s ukládáním **Výhody:** soubor není ze svazku (oddílu) odstraněn, dokud nejsou odstraněny všechny pevné odkazy

# Pevné odkazy

Pevné odkazy lze vytvořit v příkazovém řádku: fsutil hardlink create _NováCesta souboru AktuálníCestaSouboru_

# Diskové kvóty

Diskové kvóty jsou integrovanou funkcí souborového systému NTFS, která pomáhá spravovat a omezovat spotřebu místa na disku.

# Diskové kvóty

- **tři možnosti konfigurace diskových kvót:** • pouze sledovat využití místa na disku, správci musí kontrolovat využití místa na disku ručně

- • sledovat využití místa na disku a generovat správci upozornění, když uživatel překročí danou kapacitu

- sledovat využití místa na disku a generovat správci upozornění, když uživatel překročí danou kapacitu a odepřít místo na disku uživatelům, kteří překročí daný limit

Diskové kvóty
