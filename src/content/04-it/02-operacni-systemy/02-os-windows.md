---
title: "OS Windows"
order: 2
source: "MATURITA HADR/IT/3. OS Windows.docx"
---
- Operační systém = základní softwarové vybavení počítače, které je nahráno do paměti počítače při jeho startu a zůstává v činnosti až do jeho vypnutí nebo odpojení od zdroje napájení
- Standardně se skládá z jádra \(kernel\) a pomocných systémových nástrojů, které se liší verzí a výrobcem operačního systému
- Základním úkolem OS je zajistit uživateli možnost ovládat počítač, vytvořit pro procesy stabilní aplikační rozhraní \(API\) a přidělovat jim systémové zdroje
- OS je poměrně komplexní software, jehož vývoj je mnohem složitější a náročnější než vývoj obyčejných programů; operační systémy se běžně nachází na mnoha zařízeních – od mobilních telefonů a herních konzolí po webové servery a superpočítače
- Multitasking = schopnost OS provádět více procesů současně; jádro OS poměrně rychle střídá na procesoru běžící procesy, takže uživatel počítače má doje, že vše běží současně
- Skupinový politika – je sada předvoleb v OS rodiny Windows NT pro nastavení chování systému
- Souborový systém – je označení pro způsob organizace dat ve formě souborů tak, aby k nim bylo možné snadno přistupovat; jsou uloženy na vhodném typu elektronické paměti, která je umístěno přímo v PC \(HDD\)

__Typy operačních systémů__

- Operační systémy pro koncové uživatele – dominantním operačním systémem je v současné době Microsoft Windows s podílem na trhu až 80 %; dále MacOS společnosti Apple \(11,2 %\) a varianty Linuxu jsou na třetím místě; u řady koncových uživatelů není moc v oblibě, práce na Linuxu a jeho distribucích probíhá přes textové rozhraní – terminál \(příkazový řádek\)
- V odvětví mobilních zařízení dominuje společnost Google a Apple; přičemž je stále na trhu více rozšířen operační systém od firmy Google zvaný Android, který je volně dostupný a šiřitelný, ale v současné době se začíná s bezpečnostními opatřeními a tak se z otevřeného systému Android pomalu začíná stávat uzavřený OS zvaný iOS od firmy Apple
- Operační systému pro servery a superpočítače – je výhradně používán OS Linux a jeho distribuce pro svou bezpečnost a spolehlivost; Linux je zcela jediný operačním systémem používaným na první pětistovce nejvýkonnějších superpočítačů

__Funkce operačního systému__

- Operační systém plní tři základní funkce:
	- Ovládání počítače – umožňuje uživateli spouštět aplikace, předávat jim vstupy a získávat jejich výstupy s výsledky
	- Abstrakce hardware – vytváří rozhraní pro aplikace, které zobecňuje ovládání hardware a dalších funkcí do snadno použitelných funkcí \(API\)
	- Správa prostředků – přiděluje a odebírá procesům systémové prostředky počítače
- Běžně je OS rozšířen i na grafické uživatelské rozhraní, který disponují \(Windows, Symbian, MacOS…\) je často grafické rozhraní zahrnováno do operačních systému
- U systémů, kde je uživatelské rozhraní možné vytvořit několika nezávislými způsoby nebo různými aplikacemi, je běžné nepovažovat ho za součást systém \(unixové systému\)

__Stavba operačního systému__

- OS se skládá z jádra \(též označované jako kernel\) a pomocných systémových nástrojů
- Jádro je základním kamenem OS, zavádí se do operační paměti počítače při startu a zůstává v činnosti po celou dobu běhu OS; může být naprogramováno různými způsoby a podle toho rozeznáváme
	- Monolitické jádro – jádro je jedním funkčním celkem
	- Mikrojádro – jádro je velmi malé a všechny oddělitelné části pracují samostatné jako běžné procesy
	- Hybridní jádro – kombinuje vlastnosti monolitického jádra i mikrojádra

__Grafické uživatelské rozhraní__

- Umožňuje ovládat počítače pomocí interaktivních grafických ovládacích prvků
- V některých systémech je přímo integrované v jádru systému – například v původní realizaci MS Windows a MacOS byl grafický podsystém ve skutečnosti částí jádra
- Jiné operační systémy, jak starší, tak novější, jsou modulární – oddělují grafický podsystém od jádra a operačního systému; již v roce 1980 existovaly systému Unix, VMS a mnoho jíných, které byly vybudovány právě tímto způsobem; dnes na tomto principu funguje také Linux a MacOs

__Microsoft Windows__

- V současné době nejrozšířenější operační systém, dle některých průzkumů na trhu zaujímá více než 90 %
- Jako souborový systém byl využíván FAT 32, v současné době jej nahradil systém NTFS, z důvodů potřeby nahrávat soubory větší než 4 GB
- Aktuální verzí je Windows 10
- Slabiny systému bychom mohli hledat v bezpečnosti, stabilitě systému a rychlosti
- Dalšími verzemi Windows : 95, 98, 2000, XP, Vista, 7, 8, 8\.1
