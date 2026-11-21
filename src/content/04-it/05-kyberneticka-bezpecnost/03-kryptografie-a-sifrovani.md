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
- **Transpoziční** – znaky stejné, mění se **pořadí** (tabulka po řádcích / po sloupcích; **skytala** ve Spartě – pásek na hůl).
- **Enigma** – německý šifrovací stroj ve 2. sv. válce; polyalfabetická substituce měněná **rotory**; prolomili ji polští matematici a tým Alana Turinga v Bletchley Parku.
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

**Praxe (HTTPS):** asymetricky se bezpečně dohodne jednorázový **session key**, kterým se pak symetricky šifruje komunikace.

**RSA na malých číslech** (v praxi stovky číslic):

1. Prvočísla p = 3, q = 11 → n = p · q = 33, φ = (p − 1)(q − 1) = 20.
2. Veřejný exponent e = 3 (nesoudělný s 20); soukromý d: e · d mod 20 = 1 → **d = 7** (3 · 7 = 21).
3. **Veřejný klíč** (e, n) = (3, 33), **soukromý** (d, n) = (7, 33).
4. Šifrování m = 4: $c = m^e \bmod n = 4^3 \bmod 33 = 64 \bmod 33 =$ **31**.
5. Dešifrování: $m = c^d \bmod n = 31^7 \bmod 33 =$ **4**.

Kdo zná jen n = 33, musí ho rozložit na prvočísla, aby spočítal d; u čísla s ~600 číslicemi to dnešní počítače nezvládnou.

**Klíče:** generovat bezpečným generátorem náhodných čísel; délka ovlivňuje odolnost (AES 128/256 b, RSA 2048/4096 b); soukromé klíče bezpečně uložit (šifrované úložiště, HSM), **rotovat** a při kompromitaci **okamžitě zneplatnit**.

## Veřejná infrastruktura klíčů (PKI) a digitální certifikáty

- **PKI** – technologie, procesy a instituce pro správu, vydávání a ověřování **certifikátů** a veřejných klíčů.
- **Certifikační autorita (CA)** – důvěryhodná instituce; ověří identitu žadatele a vydá certifikát **podepsaný svým klíčem** (potvrzuje, že veřejný klíč patří danému subjektu).
- **Digitální certifikát** – dokument spojující **identitu** (osoba, server) s **veřejným klíčem**: název subjektu, veřejný klíč, doba platnosti, podpis CA.
- **Princip důvěry** – prohlížeč důvěřuje seznamu **kořenových CA**; je-li certifikát podepsán (i přes řetězec) některou z nich, je důvěryhodný.
- **HTTPS certifikát** – umožní šifrované spojení (HTTP přes **TLS/SSL**) a ověří provozovatele webu; chrání před odposlechem a podvržením (**man-in-the-middle**).
- **Životní cyklus:** žádost a klíčový pár → ověření identity CA → vydání → instalace na server → sledování platnosti a obnova → případná **revokace** (kompromitace soukromého klíče).

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
