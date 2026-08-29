---
title: "Počítačové sítě - definice, pojmy, dělení, topologie, přístupové metody"
order: 1
source: "MATURITA HADR/IT/10. Počítačové sítě - definice, pojmy, dělení, topologie, přístupové metody.docx"
---
- Počítačová síť – souhrnné označení všech technických a programových prostředků, které zajišťují spojení a výměnu informací mezi počítači či jinými zařízení
- Umožňují uživatelům vzájemnou komunikaci podle určitých pravidel, typicky výměnu zpráv, dat nebo společné využívání síťových služeb
- Důvody vytváření počítačových sítí
	- Sdílení technických prostředků – paměťové jednotky, tiskárny, plottery, skenery
	- Sdílení programových prostředků – databáze, vzdálené zavádění OS, instalační programy, data
	- Komunikace mezi uživateli – elektronická pošta, komunikační programy, chat, sociální sítě
	- Sdílení informací
	- Ochrana a záloha dat
	- Zábava
- Pravidla počítačové sítě
	- Komunikační protokoly – počítače v síti musí používat stejné postupy pro posílaní a přijímání dat
	- Data musí být doručována nezkreslená – stejná jako při odesílání
	- Musí existovat metoda, kde přijímací počítač potvrdí odesílajícímu, že obdržel nezkreslená data případně informuje odesílající počítač, že přijatá data jsou jiná
	- Počítače v síti musí být schopné poznat z jakého počítače data pocházejí a do jakého počítače směřují \(počítač musí mít adresu\)
	- Bezpečnost provozu – musí existovat metoda pro identifikaci a ověřování počítačů v síti

__Dělení sítí__

- Podle rozlohy:
	- LAN \(local\) – lokální počítačová síť, vytvořena na omezeném prostoru, pro jednu firmu, budovu, lokalitu; pokud je vytvořena pomocí bezdrátových síťových adaptérů – WLAN
	- WAN \(wide\) – rozlehlá počítačová síť, více propojených vzdálených lokálních sítí – nejrozlehlejší je síť internet
	- MAN \(metropol\) – městská počítačová síť menší než WAN, větší než LAN
	- HAN \(home\) – domácí počítačová síť, nový pojem se vznikajícími domácími sítěmi
	- PAN \(personal\) – osobní počítačová síť, sítě vznikající propojování PC nebo notebooku s telefon či dalšími zařízeními; tyto sítě jsou většinou bezdrátové IrDA nebo bluetooth
- Podle topologie
	- Sběrnicová – počítače jsou propojeny jedním koaxiálním kabelem
	- Hvězdicová – počítače jsou propojeny přes rozbočovací prvek HUB
	- Kruhová – počítače jsou propojeny zpravidla jedním vedením do kruhy \(fyzický nebo logický\)
- Podle přenosové rychlosti
	- 10 Mb/s sítě
	- 100 Mb/s sítě \(fast ethernet\)
	- 1 Gb/s sítě \(gigabitový ethernet\)
- Podle standardu
	- Ethernet; ARCnet; Token ring; IEEE 802\.11; FDDI
- Podle metody přístupu
	- Náhodný přístup \(stochastický\) – metoda kolize
	- Řízený přístup \(deterministický\) – pomocí tokenu \(speciální datový paket\)
- Podle použití severu
	- Síť peer to peer, všechny počítače jsou si rovny, nabízí si služby mezi sebou
	- Síť klient/sever, server je zabezpečený počítač nabízející celou řadu služeb klientským počítačům; servery mají speciální síťový operační systém a zabezpečení, klientům jsou definována práva
- Podle komunikace
	- Sítě spojované – před zahájením výměny dat je mezi oběma koncovými stanicemi navázáno spojení \(telefonní sítě\)
	- Sítě nespojované – spojení se nenavazuje, data jsou vysílána do sítě a jsou filtrována a směrována k cíli
- Podle způsobu propojení
	- Metalické \(drátové\) – propojení je pomocí koaxiálního kabelu nebo kroucenou dvoulinkou
	- Optické – propojení je pomocí optických kabelů
	- Bezdrátové
- Datový paket \(rámec\) – přenášená data jsou rozdělena na bloky, které jsou zapouzdřeny v rámci neboli datovém paket – skládá se z hlavičky \(kdo paket vyslat a komu patří, typ komunikačního protokolu, kontrolní součet\) a vlastních dat
- Fyzická adresa \(MAC\) – veškerá zařízení připojená v síti musí být vybaveny síťovou kartou, která má jednoznačnou unikátní, fyzickou adresu MAC; 48 bitový identifikátor síťového zařízení

__Topologie sítě__

- Způsob, jakým jsou stanice \(počítače\) v síti propojeny; je prvkem síťového standardu a podstatně určuje výsledné vlastnosti sítě
- Sběrnicová topologie \(bus topology\)
	- Ke spojení stanic je použito průběžné vedení, od stanice ke stanici; stanice se k vedení připojují pomocí odbočovacích prvků T\-konektory; využívá koaxiálního kabelu, který je zakončený BNC konektorem; vedení musí vždy končit terminátor, který zabraňuje zpětnému odrazu signálu
	- Výhody: malá spotřeba kabelu, nízká cena kabeláže, snadné rozšíření sítě
	- Nevýhody: velký počet spojů v kabelu – možná místa poruch, složitá lokalizace poruchy, přerušení odstaví celou síť; přenosová rychlost max 10Mb/s
- Hvězdicová topologie \(star topology\)
	- Každá stanice je připojena vlastním kabelem z HUBu/Switche; k propojení se používá kroucená dvoulinka \(UTP\)
	- Výhody: nízká náchylnost k chybám, porucha jednoho kabelu vyřadí pouze připojený počítač, snadná lokalizace poruchy
	- Nevýhody: vyšší spotřeba kabelů, nutnost použít aktivní prvek
- Kruhová topologie \(token ring topology\)
	- Spojovací vedení stanic vytváří souvislý kruh, což umožňuje použít metodu postupného předávání práv k vysílání; token je speciální paket, který putuje sítí mezi počítači, vysílat může pouze ten, kdo vlastní token
	- Výhody: přenos dat je relativně jednoduché, protože pakety se posílají jedním směrem, nevznikají kolize \(vysílat může vždy jen jeden\) náklady na vybudování sítě jsou menší než u hvězdicové
	- Nevýhody: je méně efektivní než star topologie, protože v ní musí data projít přes mnoho uzlů než se dostanou ke svému cíli, pokud selže jeden uzel, zhroutí se celá síť; obtížné najít a odstranit závadu

__Přístupové metody__

- Definují pravidla, podle kterých stanice v síti přistupují ke komunikačnímu kanálu \(kabelu\), který společně sdílejí; zabezpečují, aby v jednou okamžiku komunikovala pouze jedna stanice; jinak dojde k rušení
- CSMA/CD – metoda vícenásobného přístupu ke komunikačnímu kanálu s detekcí kolize – stanice, která se chce vysílat, zkontroluje, zda již nevysílá jiná stanice, pokud ano počká až bude volno, vyšle data; pokud začnou dvě stanice vysílat současně dochází ke kolizi, protože stanice, které začaly vysílat zjistí, že v síti nejsou data, která poslala, proto čekají náhodně dlouho dobu a poté zkusí znovu vysílat; sběrnicová topologie
- CSMA/CA – metoda vícenásobného přístupu ke komunikačnímu kanálu se zabráněním vzniku kolize – používá se u bezdrátových síti; pokud chce stanice vysílat, poslouchá, zda někdo jiný nekomunikuje; pokud ano, počká náhodně dlouho dobu a zkusí to znovu; pokud je volno, pořádá stanice, která chce vysílat, přístupovému bodu tzv\. RTS \(request to send\) a vyčká, dokud od přístupového bodu nedostane povolení CTS \(clear to send\)
- Full\-Duplex – využívá se u sítí hvězdicové topologie; TP kabel obsahuje 4 páry vodičů, 1 pár vodičů je vyčleněn pro přenos dat z počítače do switche, 1 pár je směr opačný a zbylé páry nejsou využity; komunikace probíhá obousměrně, každé zařízení má své pevně přidělené vodiče, pomocí nichž může vysílat kdykoliv; odpadají prostoje způsobené kolizemi a přenosová rychlost je maximální možná
- Token ring \- Používá se především u kruhové topologie sítě\. Sítí putuje speciální paket – tzv\. token\. Vysílat může jen ta stanice, která tento paket vlastní\. Vysílat může tedy jen jedna stanice\. Token si stanice postupně předávají\. Paket putuje v kruhu od jedné stanice ke druhé\.
