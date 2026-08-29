---
title: "OS Linux - distribuce, grafický a textový režim"
order: 1
source: "MATURITA HADR/IT/2. OS Linux - distribuce, grafický a textový režim.docx"
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

Jiné operační systémy, jak starší, tak novější, jsou modulární – oddělují grafický podsystém od jádra a operačního systému; již v roce 1980 existovaly systému Unix, VMS a mnoho jiných, které byly vybudovány právě tímto způsobem; dnes na tomto principu funguje také Linux a MacOs

__Linux__

- Vznikl jako derivát operačního systému Unix v 80\. letech 20\. století a za jeho „otce“ es považuje Linus Torvalds, který se dodnes podílí na vývoji jádra tohoto systému
- Linux je open source software, což znamená, že jsou volně k dispozici jeho zdrojové kódy, které lze za dodržení podmínek upravovat a vše dále šířit; pro ochranu před zneužitím zdrojových kód používá open source software různé licence
- Samotné jádro Linuxu je chráněno také licencí \(GPLv2\)
- Jádro přiděluje procesorový čas aplikacím, řídí běh aplikací, přiděluje paměť RAM, řídí HW a zajišťuje abstrakci funkcí HW pomocí ovladačů – zajišťuje srozumitelnost příkazů OS pro hardware, který je různých typů a různých výrobců; uživatel se přitom nemusí zajímat o to, na jaké médium zapisuje data
- Ovladač tedy slouží jako jakýsi překlad příkazu OS na příkaz, kterému rozumí hardware
- Svou variabilitou je vhodný jako základní operační systém pro nejrůznější specializovaná zařízení jako jsou Smartphony, různé televizory, domácí směrovače …\.
- Jádro Linuxu je víceuživatelské – takže umožňuje spouštět programy různých uživatelů, například jeden uživatel může obsluhovat počítače přímo, zatímco další mohou obsluhovat stejný počítač například přes síť
- V současné době je označením Linux míněno nejen jádro OS, ale zahrnuje do něj též veškeré programové vybavení \(software\), které uživatelé používají \(tj\. aplikace, utility, grafické uživatelské rozhraní apod\.\)
- Linux je šířen v podob linuxových distribucích, které obsahují jak zmíněné jádro, tak doplňující software v také formě, která usnadňuje jeho instalaci a používání
- Hlavní pojmy – Linux používá některé výrazy, které mohou být příčinnou neporozumění
	- Jádro = kernel
	- Nejvyšší uživatel \(administrator\) = root
	- Hlavní adresář = root
	- Příkazový řádek = terminál, bash
	- Verze OS = distribuce

Distribuce

- Windows mají několik druhů operačních systémů, které se liší určitým vybavením a schopnosti, ale jejich jádro zůstává stejné
- Distribuce Linuxu je stejná myšlenka dohnána do určitého extrému; jádro každé distribuce je stejné, ale zbytek se může velmi podstatně lišit
- Můžeme nalézt distribuce, která se obsahově vejde na disketu a v druhém extrému nalezneme distribuci, která po instalaci zabírá na disku 3GB místa => pravděpodobně bude jinak programově vybavená a bude obsahovat grafické rozhraní, ale obojí je Linux
- Ubuntu; Slackware; PCLinuxOS; openSUSE; Mandriva Linux; Kubuntu; Knoppix; CentOS
