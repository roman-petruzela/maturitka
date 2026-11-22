---
title: "Základy kryptografie a šifrování"
order: 3
---
## Základy kryptografie a šifrování

- **Kryptografie** – věda o zajištění **důvěrnosti, integrity, autenticity a nepopiratelnosti** informací; zahrnuje algoritmy, protokoly, hashovací funkce, digitální podpisy.
- **Šifrování** – převod čitelných dat (**plaintext**) na nečitelné (**ciphertext**) pomocí algoritmu a **klíče**; jedna z technik kryptografie.
- **Princip:** odesílatel zašifruje klíčem, příjemce dešifruje odpovídajícím klíčem; zachycená zpráva je bez klíče nečitelná (např. HTTPS).

### Historické šifry

- **Substituční** (znak za jiný znak):
	- **Caesarova** – posun o pevný počet míst (Caesar o 3: A → D); klíč = posun, jen 25 možností → vyzkouší se všechny.
	- **Monoalfabetická** (libovolně zpřeházená abeceda) – obrovský počet klíčů, ale prolomí **frekvenční analýza**: nejčastější znak ≈ nejčastější písmeno jazyka (česky E, O, A).
	- **Vigenèrova** (16. stol.) – **polyalfabetická**: posun podle písmen klíčového slova (KLIC → K, L, I, C, K…), stejné písmeno se šifruje pokaždé jinak.
- **Transpoziční** – znaky stejné, mění se **pořadí** (zápis do tabulky po řádcích, čtení po sloupcích).
- **Enigma** – německý šifrovací stroj ze 2. sv. války (polyalfabetická substituce měněná **rotory**).
- **Vernamova (one-time pad)** – klíč náhodný, **stejně dlouhý jako zpráva**, použitý **jednou**; jediná **prokazatelně nerozluštitelná**, ale nepraktická (distribuce klíčů).
- **Kerckhoffsův princip** – bezpečnost stojí na utajení **klíče**, ne algoritmu; AES, RSA jsou veřejné a prověřené.

### Symetrické a asymetrické šifrování

![Symetrické šifrování se sdíleným klíčem, asymetrické s veřejným a soukromým klíčem a jejich kombinace v HTTPS](/images/content/it/kyberneticka-bezpecnost/kryptografie/sifrovani.webp)

| | **Symetrické** | **Asymetrické** |
| --- | --- | --- |
| klíč | jeden **sdílený** | dvojice: **veřejný** a **soukromý** |
| princip | stejný klíč šifruje i dešifruje | co šifruje veřejný, dešifruje jen soukromý (u podpisu naopak) |
| plus | **rychlé**, velká data | netřeba předávat tajný klíč |
| mínus | klíč se musí bezpečně předat | výpočetně náročné, pomalé |
| příklad | **AES** | **RSA** (obtížnost faktorizace velkých čísel) |

**Praxe (HTTPS):** bezpečně se dohodne jednorázový **session key** (asymetrickým šifrováním nebo [Diffie-Hellmanem](#diffie-hellmanova-výměna-klíčů)), kterým se pak symetricky šifruje komunikace.

**RSA na malých číslech** (v praxi stovky číslic):

1. Prvočísla p = 3, q = 11 → n = p · q = 33, φ = (p − 1)(q − 1) = 20.
2. Veřejný exponent e = 3 (nesoudělný s 20); soukromý d: e · d mod 20 = 1 → **d = 7** (3 · 7 = 21).
3. **Veřejný klíč** (e, n) = (3, 33), **soukromý** (d, n) = (7, 33).
4. Šifrování m = 4: $c = m^e \bmod n = 4^3 \bmod 33 = 64 \bmod 33 =$ **31**.
5. Dešifrování: $m = c^d \bmod n = 31^7 \bmod 33 =$ **4**.

Kdo zná jen n = 33, musí ho rozložit na prvočísla, aby spočítal d; u čísla s ~600 číslicemi to dnešní počítače nezvládnou.

### Diffie-Hellmanova výměna klíčů

**Diffie-Hellman (DH)** řeší problém symetrického šifrování: jak se **dohodnout na společném tajném klíči po nezabezpečeném kanálu**, aniž by se klíč kdy posílal. Neslouží k šifrování zpráv ani k podpisu, jen k dohodě klíče.

![Diffie-Hellman: Alice a Bob veřejně sdílejí p a g, vyměňují si hodnoty A a B a každý z nich dopočítá stejný společný klíč](/images/content/it/kyberneticka-bezpecnost/kryptografie/diffie-hellman.webp)

1. Veřejně se dohodnou **prvočíslo p** a **základ g** (zná je i odposlouchávající).
2. Každý zvolí **tajné číslo** (Alice $a$, Bob $b$) a pošle druhému jeho „veřejnou polovinu“: $A = g^a \bmod p$, $B = g^b \bmod p$.
3. Alice spočítá $B^a \bmod p$, Bob $A^b \bmod p$. Obě hodnoty jsou shodné: $(g^b)^a = (g^a)^b = g^{ab} \bmod p$ – to je **společný klíč**.

**Příklad:** p = 23, g = 5, a = 6, b = 15 → A = 8, B = 19, klíč = **2** u obou.

- **Bezpečnost** stojí na **problému diskrétního logaritmu**: z $g^a \bmod p$ je při velkých číslech (2048 bitů) nemožné zjistit $a$. Odposlouchávající zná p, g, A, B, ale ne klíč.
- **Slabina:** DH sám neověřuje, s kým se klíč dojednává → útok **man-in-the-middle**. Proto se kombinuje s **certifikáty a podpisem** (ověření protistrany).
- **Použití:** TLS/HTTPS, SSH, VPN (IPsec). Varianta **ECDH** (eliptické křivky) a **ephemeral** (DHE) – klíč se pro každé spojení mění, takže únik dlouhodobého klíče neprozradí minulou komunikaci (**forward secrecy**).

**Klíče:** délka určuje odolnost (AES 128/256 b, RSA 2048/4096 b); soukromý klíč se bezpečně uloží, pravidelně **rotuje** a při kompromitaci se **zneplatní** (revokace).

## Veřejná infrastruktura klíčů (PKI) a digitální certifikáty

- **PKI** – technologie, procesy a instituce pro správu, vydávání a ověřování **certifikátů** a veřejných klíčů.
- **Certifikační autorita (CA)** – důvěryhodná instituce; ověří identitu žadatele a vydá certifikát **podepsaný svým klíčem** (potvrzuje, že veřejný klíč patří danému subjektu).
- **Digitální certifikát** – dokument spojující **identitu** (osoba, server) s **veřejným klíčem**: název subjektu, veřejný klíč, doba platnosti, podpis CA.
- **Princip důvěry** – prohlížeč důvěřuje seznamu **kořenových CA**; je-li certifikát podepsán (i přes řetězec) některou z nich, je důvěryhodný.
- **HTTPS certifikát** – umožní šifrované spojení (HTTP přes **TLS/SSL**) a ověří provozovatele webu; chrání před odposlechem a podvržením (**man-in-the-middle**).

## Hashovací funkce

- **Hashovací funkce** – jednosměrná; z libovolně dlouhých dat vytvoří **otisk (hash)** pevné délky (SHA-256 → 256 b = 64 hex znaků).
- Vlastnosti:
	- **jednosměrnost** – z hashe nejde získat data,
	- **deterministická** – stejná data = stejný hash,
	- **lavinový efekt** – změna jednoho znaku změní hash k nepoznání,
	- **odolnost proti kolizím** – prakticky nelze najít dvoje data se stejným hashem.
- Algoritmy: **MD5**, **SHA-1** zastaralé (kolize); dnes **SHA-2** (SHA-256, SHA-512), SHA-3; pro **hesla** pomalé **bcrypt**, **scrypt**, **Argon2** – viz [hashování hesel](/it/kyberneticka-bezpecnost/04-sprava-identit-a-rizeni-uctu/#hashování-hesel).
- **Hash není šifrování** – šifru lze dešifrovat, z hashe se data nezískají.
- Použití: **kontrola integrity** staženého souboru (`certutil -hashfile soubor SHA256`, `sha256sum soubor`), ukládání **hesel**, **digitální podpis**, blockchain, deduplikace.

## Digitální podpis

![Podepsání: hash zprávy se zašifruje soukromým klíčem; ověření: podpis se dešifruje veřejným klíčem a porovná s vlastním hashem zprávy](/images/content/it/kyberneticka-bezpecnost/kryptografie/podpis.webp)

- Zajišťuje **integritu**, **autenticitu**, **nepopiratelnost** – **ne utajení**.
- **Podepsání:** odesílatel spočítá hash zprávy a zašifruje ho **soukromým** klíčem; podpis připojí ke zprávě.
- **Ověření:** příjemce dešifruje podpis **veřejným** klíčem odesílatele a porovná s hashem, který si sám spočítal; **shoda** = podepsal majitel soukromého klíče a zpráva se nezměnila.
- Veřejný klíč je s identitou svázán **certifikátem**; v ČR má **kvalifikovaný elektronický podpis** stejnou váhu jako vlastnoruční.

## Otázky k opakování

1. Jaký je rozdíl mezi kryptografií a šifrováním? ||kryptografie je obor (šifry, hashe, podpisy), šifrování je převod plaintextu na ciphertext pomocí klíče||
2. Jak se prolamuje Caesarova a monoalfabetická šifra? ||Caesar vyzkoušením všech posunů, monoalfabetická frekvenční analýzou||
3. Porovnejte symetrické a asymetrické šifrování. ||symetrické: jeden sdílený klíč, rychlé (AES); asymetrické: veřejný a soukromý klíč, pomalejší (RSA)||
4. Jak funguje RSA? ||z prvočísel p, q vznikne n; veřejný klíč (e, n) šifruje, soukromý (d, n) dešifruje; bezpečnost stojí na obtížnosti rozkladu n||
5. K čemu je Diffie-Hellmanova výměna a jaká je její slabina? ||dohoda na společném tajném klíči po nezabezpečeném kanálu; bez ověření protistrany je zranitelná man-in-the-middle||
6. Jaké vlastnosti má hashovací funkce a k čemu se používá? ||jednosměrná, deterministická, lavinový efekt, odolná proti kolizím; kontrola integrity, hesla, podpis||
7. Jak funguje digitální podpis? ||hash zprávy se zašifruje soukromým klíčem, příjemce ho ověří veřejným klíčem a porovná s vlastním hashem||
8. K čemu slouží certifikát a certifikační autorita? ||certifikát spojuje identitu s veřejným klíčem, CA ho svým podpisem potvrdí||
