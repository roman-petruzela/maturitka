---
title: "Uživatelské účty a hesla"
order: 11
source: "osy/Uživatelské_účty_a_hesla.pdf"
---

**Uživatelský účet** jednoznačně identifikuje uživatele. **Skupiny** usnadňují správu: práva se přidělí skupině a uživatelé se do ní přidají.

| Předdefinovaná skupina | Práva |
| --- | --- |
| **Administrators** | úplný a neomezený přístup k počítači nebo doméně |
| **Backup Operators** | zálohování a obnova dat |
| **Users** | nemůže měnit systém, spouští většinu aplikací |
| **Guests** | víc omezení než Users |

**Uživatelské jméno** musí být jednoznačné a bez mezer; organizace má mít pravidla pro jejich tvorbu.

## Zásady tvorby hesel

Počítač pozná uživatele podle hesla, proto musí být:

- **neuhodnutelné** (ne jméno, datum narození, `12345678`),
- dostatečně **dlouhé** (min. 8 znaků, lépe víc),
- se **smíšenými znaky** – malá a velká písmena, číslice, speciální znaky,
- **tajné** a **pravidelně měněné**; unikátní pro každou službu.

## Lámání hesel

| Útok | Princip | Odhalitelnost |
| --- | --- | --- |
| **online** (hádání) | v reálném čase proti systému | snadno – po několika chybách se účet **uzamkne** |
| **offline** (cracking) | útočník má soubor s **hashem** a láme ho u sebe | **nelze odhalit**, nic se neuzamkne |

Offline: **slovníkový útok** nebo **brute force** (všechny kombinace). Počet kombinací udává vzorec (z = znaků abecedy, d = délka hesla):

```formulas
{ "items": [ { "label": "počet kombinací", "tex": "N = z^{d}", "note": "z = počet znaků abecedy, d = délka hesla" } ] }
```

Při 10 milionech pokusů za sekundu: 6 malých písmen ($26^6 \approx 3{,}1 \cdot 10^8$) padne za ~31 s, 10 znaků z 62 ($62^{10} \approx 8{,}4 \cdot 10^{17}$) za ~2 700 let. Rozhoduje hlavně **délka**. Přehled technik: [techniky napadení hesel](/it/kyberneticka-bezpecnost/04-sprava-identit-a-rizeni-uctu/#techniky-napadení-hesel).

## Vynucení bezpečných hesel

V systému se nastaví **zásady hesel** a **zásady uzamčení účtu**:

| Zásada | Význam |
| --- | --- |
| **požadavky na složitost** | aspoň 3 ze 4 skupin znaků, bez uživatelského jména |
| **minimální délka** | minimální počet znaků |
| **maximální / minimální stáří** | po kolika dnech se heslo musí / smí změnit |
| **historie hesel** | zabrání znovupoužití starých hesel |
| **prahová hodnota uzamčení** | po kolika chybných pokusech se účet uzamkne |
| **doba uzamčení** | jak dlouho zůstane účet zamčený |

## Otázky k opakování

1. Jaké předdefinované skupiny znáte? ||Administrators, Backup Operators, Users, Guests||
2. Proč se práva přidělují skupinám? ||snazší správa, uživatele stačí přidat do skupiny||
3. Jaké vlastnosti má bezpečné heslo? ||dlouhé, neuhodnutelné, smíšené znaky, tajné, unikátní||
4. Jaký je rozdíl mezi online a offline lámáním hesel? ||online se hádá proti systému (uzamčení účtu); offline útočník láme ukradený hash a nelze ho odhalit||
5. Jak systém vynutí bezpečná hesla? ||zásadami hesel (složitost, délka, stáří, historie) a zásadami uzamčení účtu||
