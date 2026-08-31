---
title: "Uživatelské účty a hesla"
order: 11
source: "osy/Uživatelské_účty_a_hesla.pdf"
---
## **Uživatelský účet**

Uživatelsý účet slouží k jednoznačné identifikaci uživatele.

## **Uživatelské skupiny**

Uživatelské skupiny slouží k usnadnění práce s uživateli a jejich účty. Pokud máte 20 uživatelů, kterým máte přidělit stejná práva a oprávnění, je jednodušší přidělit tato práva a oprávnění skupině a uživatele pak do této skupiny přidat.

## **Předdefinované uživatelské skupiny**

Kromě skupin, které si můžeme vytvořit, existují také skupiny předdefinované výrobcem. Tyto skupiny vzniknou při instalaci OS. Nejpoužívanější z nich si vypíšeme:

_Administrators:_ úplný a neomezený přístup k počítači, nebo doméně

_BackupOperators:_ pro účely zálohování a obnovování dat může překonat zabezpečující omezení

_Users:_ nemůže provádět nechtěné ani úmyslné změny v systému může spouštět většinu aplikací

_Guests:_ Více omezení, než skupina Users

## **Nový uživatel**

Při vytvoření nového uživatele je nutno nastavit jeho uživatelské jméno a heslo

**Pravidla pro vytváření uživatelského jména**

- uživatelské jméno musí být jednoznačné (nesmí být dva účty se stejným názvem)

- uživatelské jméno pište bez mezer, v některých programech by to mohlo způsobit problémy (chcete-li použít mezeru, nahraďte jí podtržítkem)

- pro vytváření uživatelských jmen si vytvořte pravidla (jaké dát uživatelské jméno dvěma lidem, kteří se jmenují stejně?)

## **Pravidla pro vytváření hesel**

Počítač rozpozná, zda se jedná o pravého uživatele podle jeho hesla. Heslo uživatele by mělo být bezpečné. Jak takové bezpečné heslo vypadá?

- heslo by nemělo být uhodnutelné (jméno, datum narození, 12345678, heslo, oblíbená hra, oblíbený fotbalový klub,….)

- heslo by mělo mít vhodnou délku, cca 8 znaků

- používejte malá, velká písmena, číslice, jiné než alfanumerické znaky (?, !, %, #,…)

- heslo nikomu neříkejte

- heslo měňte v pravidelných intervalech

## **Lámání hesel online – hádání hesla**

Online útok probíhá v reálném čase proti autentizační autoritě a může být snadno odhalen, neboť může dojít k uzamčení hesla po x neúspěšných pokusech o přihlášení.

## **Lámání hesel offline – cracking hesla**

V okamžiku, kdy má útočník k dispozici soubor se zašifrovaným heslem (hash hesla), může provést tzv. off-line útok. Takový útok není možné odhalit, protože probíhá na jiném počítači nebo počítačích a nemůže tak ani dojít k uzamčení účtu, protože útočník s daným systémem vůbec nekomunikuje. K prolomení hesla se používá buď **slovníkový útok** , nebo metoda **brute force** .

## **Trocha matematiky**

Předpokládejme, že útočník je schopen vyzkoušet 10 000 000 hesel za sekundu. Za jak dlouho prolomí:

a) 6-ti místné heslo, skládající se z malých písmen abecedy?

- b) 6-ti místné heslo, skládající se z malých a velkých písmen abecedy a číslic?

c) 10-ti místné heslo, skládající se z malých a velkých písmen abecedy a číslic?

## **Jak donutit uživatele používat bezpečná hesla a zvýšit zabezpečení jejich účtů**

V systému lze nastavit zásady hesel a zásady uzamčení účtů.

_Heslo musí splňovat požadavky na složitost:_

- možnosti true/false

- délka hesla minimálně 6 znaků

- heslo musí obsahovat alespoň 3 ze 4 skupin znaků (malá písmena, velká písmena, číslice, jiné než alfanumerické znaky)

- heslo nesmí obsahovat uživatelské jméno

_Minimální délka hesla:_

- určuje minimální přípustný počet znaků hesla

_Maximální stáří hesla:_

- Nastaví maximální dobu platnosti hesla ve dnech. Po uplynutí této doby bude muset uživatel své heslo změnit.

_Minimální stáří hesla:_

- Nastaví minimální počet dní, které musí uplynout mezi jednotlivými změnami hesla

## _Vynutit použití historie hesel_

- Zabraňuje uživatelům ve vytvoření nového hesla, které je shodné s jejich současným nebo nedávno použitým heslem. Hodnota v tomto nastavení udává počet zapamatovaných hesel.

_Uložit hesla pomocí reverzibilního šifrování_

- true/false

- Ukládá heslo v nezašifrované podobě

_Prahová hodnota uzamčení účtu_

- po kolika chybných pokusech se účet uzamkne

_Doba uzamčení účtu_

- jak dlouho bude účet uzamčen
