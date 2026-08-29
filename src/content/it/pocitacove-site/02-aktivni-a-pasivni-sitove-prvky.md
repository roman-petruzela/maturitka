---
title: "Aktivní a pasivní síťové prvky"
order: 2
source: "MATURITA HADR/IT/11. Aktivní a pasivní síťové prvky.docx"
---
__Pasivní síťové prvky__

- Fyzická media, kterými jsou přenášena data, hlasový signál nebo jiný typ signálu ke svému cíli \(kabeláž\)
- Nejběžnější přenosová média: elektrické vodiče; optická vlákna; vzduch
- Základní charakteristiky přenosových médií:
	- Odolnost proti vnějšímu elektromagnetickému rušení EMI – náhodná energie z vnějších zdrojů – zdrojem mohou být: motory, lékařské přístroje, mobilní telefony …
	- Šířka pásma – množství dat, které lze přenést kabelem – b/s
	- Útlum – ztráta síly signálu na médiu – udává se v dB \(decibel\) na délku média
	- Impedance – odpor vodiče kladené střídavému elektrickému proudu – v Ohm
	- Přeslech mezi vodiči – rušení signálem ze sousedního vedení v dB
	- Cena

__Koaxiální kabel \(coax\)__

- Dvě varianty – kabely pracující v:
	- Základním pásmu – pouze jeden kanál, kterým může být přenesena pouze jediná zpráva
	- Přeloženém pásmu – může přenášet několik analogových signálů současně
- Velká odolnost proti EMI; snadná instalace; náchylný k poškození; zastaralý
- Tenký a tlustý coax \(0,5 a 1 cm v průměru\)
- BNC konektor

__Kroucená dvojlinka__

- Vyrábí se ve dvou základní variantách:
	- STP = stíněná dvojlinka = fóliové i splétané stínění, které verze UTP nemá
	- UTP = nestíněná dvojlinka
- Skládá se z:
	- Vodivé dráty – vyrobeny z mědi, vodiče jsou vždy v párech vzájemně kolem sebe obtočeny; různý počet párů nejčastěji 2 nebo 4 páry
	- Dielektrikum – izoluje každý z vodivých drátů zvlášť nikoliv celého páru
	- Stínění – pouze u STP; fóliové stínění kolem každého páru vodičů a splétané kolem všech párů
	- Plášť – vnější kryt vyroben z PVC nebo teflonu nebo kynaru
- Sedm základních kategorií přičemž 5 je nejčastější
- Může přenášet data s rychlostí až do 100 Mb/s
- Vodiče jsou vždy vzájemně obtočeny – minimalizace EMI a ztráty způsobené odporen
- Odpor vodiče je u všech typů 100Ω
- Výhody – snadné připojení každého zařízení; snadná instalace; nízká cena; STP skvělá ochrana proti EMI
- Nevýhody – STP – silný obtížně se s ním pracuje; UTP – citlivější na šum než coax a signál nemůže bez regenerace signálu být přenášen na větší vzdálenost
- Konektor RJ\-45

__Optický kabel__

- Médium, které přenáší signály prostřednictvím světla; zdrojem je laser nebo LED
- Skládá se z optických vláken; přenosy nejsou náchylné na EMI; použití pro přenos na velkou vzdálenost
- Fotodetektor – převádí optický signál do el\. Tvaru
- Jednovidové – světlo může postupovat jen jednou cestou; mnohovidové – světelný paprsek může probíhat v jádru více cestami
- Útlum – vnitřní – způsobeny nečistotou; venkovní – nevhodným ohybem kabelu, drobné nerovnosti na kabelu
- Konektory \- FC, SC, ST, E2000, MTRJ

__Komunikace vzduchem__

- WLAN – obecné označení pro bezdrátové sítě; IEEE 802\.11 – jedna z technologií, která může být použita v rámci WLAN; Wi\-Fi – není to samé jako WLAN nebo IEEE; existují různá licencovaná pásma čím vyšší pásmo, tím větší přenosové rychlosti
- Bezpečnost – nelze přesně omezit prostor, kde signál zachytíme; bezpečnostní prvky: SSID, WEP, WPA, WPA2

__Aktivní síťové prvky__

- Zařízení, která se aktivně podílí na komunikaci v síti \(regenerace, zesílení, oprava či modifikace přenášeného signálu\)
- Prvky základní – zařízení se nestará o význam dat; prvky chytřejší – dokáží interpretovat data a podle toho přizpůsobit své chování
- Opakovač REPEATER, rozbočovač HUB, most BRIDGE, přepínač SWITCH, směrovač ROUTER, Brána GATEWAY, síťová karta NIC

Opakovač

- nejjednodušší aktivní prvek, který pracuje na nejnižší, fyzické, vrstvě
- slouží k zesílení přenášeného signálu
- u každého vodiče dochází k útlumu nebo zkreslení přenášeného signálu
- opakovač přeposílá jím přijatý signál do všech k němu připojených segmentů

Rozbočovač

- jeho úkolem je zregenerovat přijatý signál a rozeslat ho na všechny své porty na které je někdo připojen
- v podstatě opakovač s více porty a porty bývají jedním z parametrů rozbočovače
- pracuje na první vrstvě ISO/OSI; nevýhodou je, že některé segmenty jsou zbytečně přetěžovány, kterým mnohdy data ani nepatří

Most

- pracuje na druhé vrstvě ISO/OSI, což znamená, že je trochu propracovanější než opakovač nebo rozbočovač
- pokud přenášená data patří jen do daného segmentu, odkud přišla, tak je most nepustí dále
- rozhodování provádí na základě MAC adresy a ty si ukládá do RAM paměti
- snižuje kolizní doménu a je levnější než směrovač a zmenšuje zatížení sítě

Přepínač

- pracují na druhé vrstvě ISO/OSI a podobají se rozbočovačům s tím rozdílem že přepínač zpravidla propojí jen dvojici portů, což znamená, že se data zbytečně neposílají jiným uzlům
- učí se zpravidla automaticky z provozu a MAC adres koncových zařízení
- užití zpětného učícího algoritmu, díky němuž vytváří tabulku, kde jsou uloženy MAC adresy připojených zařízení
- pokud přijdou data pro nějaké zařízení, které není v tabulce, tak se chová jako rozbočovač a rozešle data do všech segmentů a předpokládá, že přijímací zařízení se ozve a poté si uloží adresu

Směrovač

- pracuje na třetí vrstvě ISO/OSI a spojuje jakékoliv dvě sítě
- musí znát skutečnou topologii sítě, ale v malých sítích je často jako směrovač používán počítač
- směrování – proces určování cesty informací v síti
- úkolem je zvolit co nejefektivnější cestu doručení
- má v sobě sadu pravidel, kterými se mají pakety předávat směrem k cíli

Brána

- slouží k porozumění obsahu dat a provádět jejich převod
- pracuje na nejvyšší aplikační vrstvě modelu ISO/OSI
- příkladem je GSM brána na stránkách mobilního operátora, která převezme data napsaná v prohlížeči, převede je a odešle do GSM sítě jako SMS zprávu pro příjemce
- spojuje dvě sítě s odlišnými protokoly
- při nastavení výchozí brány se napíše IP adresa směrovače

Síťová karta
