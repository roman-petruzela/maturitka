---
title: "Uživatelské účty a hesla"
order: 11
source: "osy/Uživatelské_účty_a_hesla.pdf"
---
## Uživatelský účet

**Účet** jednoznačně identifikuje uživatele.

## Uživatelské skupiny

Usnadňují správu: místo přidělování stejných práv 20 uživatelům se přidělí **skupině** a uživatelé se do ní přidají.

### Předdefinované skupiny

Vzniknou při instalaci OS:

| Skupina | Práva |
| --- | --- |
| **Administrators** | úplný a neomezený přístup k počítači nebo doméně |
| **Backup Operators** | zálohování a obnova dat, může překonat omezení zabezpečení |
| **Users** | nemůže provádět nechtěné ani úmyslné změny systému; spouští většinu aplikací |
| **Guests** | víc omezení než Users |

## Nový uživatel

Nastaví se **jméno** a **heslo**.

**Pravidla pro uživatelské jméno:**

- **jednoznačné** (žádné dva stejné),
- **bez mezer** (u programů může vadit; mezeru nahradit podtržítkem),
- mít **pravidla** pro tvorbu jmen (co dát dvěma lidem se stejným jménem?).

## Pravidla pro vytváření hesel

Počítač pozná uživatele podle hesla → musí být bezpečné:

- **neuhodnutelné** (jméno, datum narození, `12345678`, `heslo`, oblíbená hra nebo klub…),
- dostatečně **dlouhé** (min. cca 8 znaků, lépe víc),
- **malá a velká písmena, číslice, speciální znaky** (`? ! % #`),
- **nikomu je neříkat**,
- **pravidelně měnit**.

## Lámání hesel

| Útok | Princip | Odhalitelnost |
| --- | --- | --- |
| **online** (hádání) | v reálném čase proti autentizační autoritě | snadno – po *x* chybách se účet **uzamkne** |
| **offline** (cracking) | útočník má soubor s **hashem** hesla a láme ho u sebe | **nelze odhalit**, nekomunikuje se systémem, nic se neuzamkne |

Offline: **slovníkový útok** (zkouší slova) nebo **brute force** (všechny kombinace).

### Trocha matematiky

Útočník zkusí **10 000 000 hesel za sekundu**. Za jak dlouho prolomí:

```formulas
{ "items": [ { "label": "počet kombinací", "tex": "N = z^{d}", "note": "z = počet znaků abecedy, d = délka hesla" } ] }
```

a) 6 znaků, malá písmena (z = 26)? ||$26^6 \approx 3{,}1 \cdot 10^8$ → ~31 s||

b) 6 znaků, malá + velká písmena + číslice (z = 62)? ||$62^6 \approx 5{,}7 \cdot 10^{10}$ → ~95 minut||

c) 10 znaků, malá + velká písmena + číslice? ||$62^{10} \approx 8{,}4 \cdot 10^{17}$ → ~2 700 let||

## Jak vynutit bezpečná hesla

V systému se nastaví **zásady hesel** a **zásady uzamčení účtů**.

**Heslo musí splňovat požadavky na složitost** (true/false):

- min. délka 6 znaků,
- aspoň **3 ze 4 skupin** znaků (malá, velká, číslice, jiné),
- nesmí obsahovat uživatelské jméno.

| Zásada | Význam |
| --- | --- |
| **minimální délka hesla** | minimální počet znaků |
| **maximální stáří hesla** | po kolika dnech musí uživatel heslo změnit |
| **minimální stáří hesla** | minimum dnů mezi změnami |
| **historie hesel** | počet zapamatovaných hesel; zabrání znovupoužití |
| **reverzibilní šifrování** | true/false – ukládá heslo **v nezašifrované podobě** (nezapínat) |
| **prahová hodnota uzamčení** | po kolika chybných pokusech se účet uzamkne |
| **doba uzamčení** | jak dlouho zůstane účet zamčený |
