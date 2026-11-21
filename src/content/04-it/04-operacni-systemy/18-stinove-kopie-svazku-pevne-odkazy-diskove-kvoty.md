---
title: "Stínové kopie svazku, pevné odkazy, diskové kvóty"
order: 18
source: "osy/použití stínové kopie svazku_pevne odkazy_diskové kvoty.pdf"
---
## Stínové kopie svazku (Volume Shadow Copy)

### Stínové kopírování souborů ve sdílených složkách

- svazky se nastaví tak, aby se v **intervalech během dne** automaticky vytvářely **stínové kopie** souborů ve sdílených složkách,
- lze se vrátit k **předchozím verzím**; obnoví se **smazané**, **nesprávně upravené** nebo **přepsané** soubory.

**Proč:** soubor smazaný ze sdílené složky z klienta po síti se **trvale odstraní** (nejde do Koše). Bez stínových kopií by šel obnovit jen ze zálohy a běžný uživatel na to nemá práva. Server vytváří „snímky“ složek do **úložiště stínových kopií** a uživatelé si soubory **obnoví sami**.

### Stínové kopírování otevřených a uzamčených souborů

Zálohovací programy (Zálohování systému Windows) tak zálohují i soubory, které jsou **otevřené** nebo **uzamčené** aplikací.

### Implementace – co zvážit

- **kopírované svazky** – pro které se zapne,
- **místo na disku** – kolik bude kopírování potřebovat,
- **stínové úložiště** – kam se kopie uloží,
- **plán** – jak často se vytvářejí.

Po zapnutí se ukládá až **64 verzí** každého souboru. Výchozí maximum je **10 % kapacity svazku** a pak je pevné, dokud se nezmění → při nedostatku místa **chyby**.

Výchozí plán: **2× denně (7:00 a 12:00)**. **Neplánovat** stínové kopie a zálohu serveru na stejný čas → chyby.

### Správa v konzoli Správa počítače

1. *Správa počítače → Úložiště → Správa disků* → pravým tlačítkem na svazek → **Vlastnosti**.
2. Karta **Stínové kopie**.
3. Vybrat svazek → **Nastavení**.
4. **Obsah tohoto svazku** – kam se kopie uloží (svazek).
5. **Maximální velikost** – největší kapacita pro kopie.
6. **Plán** – plánování vytváření.

### Vrácení celého svazku

Jen když svazek **neobsahuje soubory OS** a není na disku sdíleném v clusteru.

1. *Správa počítače → Úložiště → Správa disků* → svazek → **Vlastnosti → Stínové kopie**.
2. Vybrat svazek, podle data kopii a **Vrácení změn**.

### Použití na klientech

Pravým tlačítkem na síťovou složku → **Vlastnosti → Předchozí verze** → vybrat verzi → **Obnovit**.

## Pevné odkazy

- **Pevný odkaz** = položka složky pro soubor; podle ní OS soubory ve složkách najde.
- Na **NTFS** může mít soubor **více pevných odkazů** – soubor se objeví pod více názvy nebo ve více složkách.
- Všechny odkazy míří na **jeden soubor** (na rozdíl od kopií, kde jsou data na více místech).
- Zabezpečení se nastavuje u zdrojového souboru, odkazy ho přebírají.

| | |
| --- | --- |
| **Použití** | soubor ve sdílené složce, který zároveň čte aplikace z jiné složky |
| **Výhoda** | soubor se ze svazku nesmaže, dokud nejsou odstraněny **všechny** odkazy |
| **Nevýhoda** | může ho otevřít víc uživatelů naráz → problém s ukládáním |

Vytvoření: `fsutil hardlink create NováCesta AktuálníCestaSouboru`

## Diskové kvóty

**Diskové kvóty** – funkce **NTFS**, která pomáhá spravovat a **omezit spotřebu místa** na disku (např. 4 GB na uživatele).

Tři možnosti:

1. jen **sledovat** využití (správce kontroluje ručně),
2. sledovat a **upozornit správce** při překročení,
3. sledovat, upozornit **a odepřít místo** po překročení limitu.
