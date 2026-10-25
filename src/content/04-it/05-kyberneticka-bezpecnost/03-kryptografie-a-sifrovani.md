---
title: "Základy kryptografie a šifrování"
order: 3
tags: ["doplněno"]
---

## Základy kryptografie a šifrování

- Kryptografie – vědní obor zabývající se metodami zajištění důvěrnosti, integrity, autenticity a nepopiratelnosti informací; širší pojem, zahrnuje návrh algoritmů, protokolů, hašovacích funkcí, digitálních podpisů apod.
- Šifrování – konkrétní proces převodu čitelných dat (otevřený text, plaintext) na nečitelnou podobu (šifrovaný text, ciphertext) pomocí algoritmu a klíče; jde o jednu z technik, kterou kryptografie využívá
- Princip šifrované komunikace – odesílatel zašifruje zprávu klíčem před odesláním, příjemce ji odpovídajícím klíčem dešifruje; i pokud zprávu cestou zachytí útočník, bez klíče ji nedokáže přečíst (příklad: zabezpečená webová komunikace přes HTTPS, kdy prohlížeč a server šifrují veškerý přenášený obsah)

### Historické šifry

- **Substituční** šifry – každý znak se nahradí jiným znakem
	- **Caesarova šifra** – posun každého písmene o pevný počet míst v abecedě (Caesar používal posun o 3: A → D, B → E…); klíčem je velikost posunu, takže existuje jen 25 možností a šifru lze prolomit vyzkoušením všech
	- Obecná **monoalfabetická** substituce (libovolně zpřeházená abeceda) – možností je obrovské množství, ale prolomí se **frekvenční analýzou**: nejčastější znak šifrového textu nejspíš odpovídá nejčastějšímu písmenu jazyka (v češtině E, O, A)
	- **Vigenèrova šifra** (16. stol.) – **polyalfabetická**: posun se mění podle písmen klíčového slova (klíč KLIC → posun o K, L, I, C, K, L…), takže stejné písmeno se pokaždé zašifruje jinak a prostá frekvenční analýza nefunguje
- **Transpoziční** šifry – znaky zůstávají stejné, mění se jejich **pořadí** (např. zápis textu do tabulky po řádcích a čtení po sloupcích; skytala ve starověké Spartě – pásek namotaný na hůl dané tloušťky)
- **Enigma** – elektromechanický šifrovací stroj německé armády ve 2. světové válce; polyalfabetická substituce, která se po každém stisku klávesy měnila otočením rotorů; prolomili ji polští matematici a později tým Alana Turinga v Bletchley Parku
- **Vernamova šifra** (one-time pad) – klíč je náhodný, stejně dlouhý jako zpráva a použije se jen jednou; jako jediná je **prokazatelně nerozluštitelná**, ale distribuce tak dlouhých klíčů je nepraktická
- Poučení pro dnešek – bezpečnost šifry nesmí stát na utajení algoritmu, ale jen na utajení **klíče** (**Kerckhoffsův princip**); moderní algoritmy (AES, RSA) jsou veřejné a prověřené

### Symetrické a asymetrické šifrování

- Symetrické šifrování – k šifrování i dešifrování se používá stejný (sdílený) klíč; je rychlé a vhodné pro šifrování velkého objemu dat, ale je nutné klíč bezpečně distribuovat oběma stranám předem
	- Příklad algoritmu – AES (Advanced Encryption Standard), dnes standard pro šifrování dat v klidu i při přenosu
- Asymetrické šifrování – používá dvojici matematicky svázaných klíčů, veřejný (public key) a soukromý (private key); co je zašifrováno veřejným klíčem, lze dešifrovat pouze odpovídajícím soukromým klíčem (a naopak u podpisu); odpadá problém distribuce sdíleného klíče, ale je výpočetně náročnější a pomalejší
	- Příklad algoritmu – RSA, založený na obtížnosti faktorizace velkých čísel
- Princip RSA na malých číslech (v praxi mají čísla stovky číslic)
	1. Zvolí se dvě prvočísla p = 3, q = 11; n = p · q = 33 a φ = (p − 1)(q − 1) = 20
	2. Zvolí se veřejný exponent e = 3 (nesoudělný s 20) a dopočítá se soukromý d tak, aby e · d mod 20 = 1 → d = 7 (3 · 7 = 21)
	3. **Veřejný klíč** (e, n) = (3, 33), **soukromý klíč** (d, n) = (7, 33)
	4. Šifrování zprávy m = 4: c = m<sup>e</sup> mod n = 4<sup>3</sup> mod 33 = 64 mod 33 = **31**
	5. Dešifrování: m = c<sup>d</sup> mod n = 31<sup>7</sup> mod 33 = **4**
	- Kdo zná jen n = 33, musí ho rozložit na prvočísla, aby spočítal d; u čísla o 600 číslicích to dnešní počítače nezvládnou
- Praktické kombinování – v praxi (např. u HTTPS) se asymetrické šifrování použije jen k bezpečné výměně jednorázového symetrického klíče (tzv. session key), kterým se pak šifruje vlastní komunikace – spojuje výhody obou přístupů (bezpečnost výměny klíče i rychlost přenosu dat)
- Tvorba a správa šifrovacích klíčů – klíče se generují kryptograficky bezpečným generátorem náhodných čísel, jejich délka (např. 128/256 bitů u AES, 2048/4096 bitů u RSA) ovlivňuje odolnost proti prolomení; soukromé klíče je nutné bezpečně uchovávat (šifrovaná úložiště, hardwarové bezpečnostní moduly), pravidelně obměňovat (rotace klíčů) a v případě kompromitace okamžitě zneplatnit

## Veřejná infrastruktura klíčů (PKI) a digitální certifikáty

- PKI (Public Key Infrastructure) – soubor technologií, procesů a institucí, které umožňují důvěryhodně spravovat, vydávat a ověřovat digitální certifikáty a veřejné klíče
- Certifikační autorita (CA) – důvěryhodná instituce, která ověřuje totožnost žadatele a vydává digitální certifikát podepsaný svým vlastním klíčem; tím potvrzuje, že daný veřejný klíč skutečně patří danému subjektu
- Digitální certifikát – elektronický dokument spojující identitu subjektu (osoby, serveru) s jeho veřejným klíčem; obsahuje např. název subjektu, veřejný klíč, dobu platnosti, podpis certifikační autority
- Princip důvěry – prohlížeč/klient důvěřuje seznamu kořenových certifikačních autorit; pokud je certifikát serveru podepsán (přímo nebo přes řetězec) některou z nich, je považován za důvěryhodný
- HTTPS certifikát – digitální certifikát nasazený na webovém serveru, který umožňuje šifrované spojení (HTTPS = HTTP přes TLS/SSL) a zároveň ověřuje identitu provozovatele webu; chrání komunikaci před odposlechem a podvržením obsahu (man-in-the-middle)
- Životní cyklus certifikátu – vygenerování žádosti a klíčového páru → ověření identity certifikační autoritou → vydání certifikátu → instalace na server → sledování platnosti a včasná obnova → případné odvolání (revokace), pokud dojde ke kompromitaci soukromého klíče

## Hashovací funkce

- **Hashovací funkce** – jednosměrná funkce, která z libovolně dlouhých dat vytvoří **otisk (hash)** pevné délky (např. SHA-256 → 256 bitů, zapisuje se jako 64 šestnáctkových znaků)
- Vlastnosti
	- **Jednosměrnost** – z hashe nelze zpětně získat původní data
	- **Deterministická** – stejná data dají vždy stejný hash
	- **Lavinový efekt** – změna jediného znaku změní celý hash k nepoznání
	- **Odolnost proti kolizím** – je prakticky nemožné najít dvoje různá data se stejným hashem
- Algoritmy – **MD5** a **SHA-1** jsou zastaralé (umí se pro ně najít kolize), dnes se používá **SHA-2** (SHA-256, SHA-512) a SHA-3; pro ukládání hesel speciální pomalé funkce **bcrypt**, **scrypt**, **Argon2** – viz [hashování hesel](/it/kyberneticka-bezpecnost/04-sprava-identit-a-rizeni-uctu/#hashování-hesel)
- Hash není šifrování – šifrovaný text lze klíčem dešifrovat, z hashe se původní data získat nedají
- Použití
	- **Kontrola integrity** – u stahovaného souboru se zveřejňuje jeho hash; po stažení se spočítá znovu (`certutil -hashfile soubor SHA256` ve Windows, `sha256sum soubor` v Linuxu) a porovná
	- Ukládání **hesel**
	- **Digitální podpis** (viz níže), blockchain, deduplikace dat

## Digitální podpis

- Zajišťuje **integritu**, **autenticitu** a **nepopiratelnost** zprávy (ne její utajení)
- Podepsání – odesílatel spočítá hash zprávy a zašifruje ho svým **soukromým** klíčem; výsledek (podpis) připojí ke zprávě
- Ověření – příjemce dešifruje podpis **veřejným** klíčem odesílatele a porovná ho s hashem, který si sám spočítal z přijaté zprávy; shoda znamená, že zprávu podepsal majitel soukromého klíče a že se cestou nezměnila
- Veřejný klíč odesílatele je svázán s jeho identitou **certifikátem** (viz PKI výše); v ČR má **kvalifikovaný elektronický podpis** stejnou právní váhu jako vlastnoruční
