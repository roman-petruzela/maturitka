---
title: "GPO (zásady skupiny)"
order: 14
source: "osy/GPO.pdf"
---

**GPO** (Group Policy Object, zásady skupiny) umožňují správcům **centrálně nastavit uživatele a počítače** ve službě Active Directory (AD DS) a automaticky je vynutit v celé organizaci. Zásady počítače se uplatní při **startu počítače**, zásady uživatele při **přihlášení**; obnovují se i periodicky (standardně každých 90 minut). Ruční vynucení: `gpupdate`.

**K čemu se používají:** přesměrování složky Dokumenty na síťové úložiště, zamknutí plochy, přihlašovací a odhlašovací skripty, automatická instalace aplikací, omezení Ovládacích panelů, nastavení firewallu.

## Místní zásady a zásady v Active Directory

- **Místní zásady** jsou uloženy v počítači (`%SystemRoot%\System32\GroupPolicy`) a týkají se jen jeho; spouští se `gpedit.msc`.
- **Zásady v Active Directory** se tvoří v konzoli *Správa zásad skupiny* (Group Policy Management) a propojují se s **lokalitami**, **doménami** a **organizačními jednotkami (OU)**. Šablony (GPT) se replikují přes složku **Sysvol**.
- Po vytvoření domény vzniknou dvě zásady: **Default Domain Policy** (platí pro celou doménu) a **Default Domain Controllers Policy** (pro OU Řadiče domény).

Chceme-li zásadu vynutit pro skupinu počítačů nebo uživatelů, dáme je do jedné OU a k ní přilinkujeme GPO.

## Nastavení zásad

Nastavení se dělí na **Konfiguraci počítače** (Computer Configuration) a **Konfiguraci uživatele** (User Configuration). Každá obsahuje **nastavení softwaru** (instalace a správa aplikací), **nastavení systému Windows** (skripty, zabezpečení) a **administrativní šablony** (nastavení registru, např. zákaz Ovládacích panelů).

## Dědičnost zásad

![Pořadí zpracování GPO: místní zásady, lokalita, doména, organizační jednotka, podřízená organizační jednotka](/images/content/it/operacni-systemy/gpo/poradi.webp)

Zásady se zpracovávají v pořadí **místní → lokalita → doména → OU → podřízená OU**. Co se uplatní **později, má vyšší prioritu**.

- **Block Inheritance** (zablokovat dědičnost) – OU přestane dědit zásady z nadřazených úrovní.
- **Enforced** (vynucené) – zásada se uplatní s nejvyšší prioritou a je silnější než blokování dědičnosti.

## Příklad: zákaz Ovládacích panelů

1. V doméně vytvoříme OU `externisti`, vložíme do ní uživatele a přilinkujeme nové GPO `ext`.
2. V GPO nastavíme *Konfigurace uživatele → Administrativní šablony → Ovládací panel → Zákaz přístupu k Ovládacímu panelu* a *Systém → Zákaz přístupu k příkazovému řádku*.
3. Po přihlášení uživatele z OU se už do Ovládacích panelů ani příkazového řádku nedostane.

Podobně se přes `Default Domain Policy` povolí `ping` ve firewallu (*Konfigurace počítače → Nastavení zabezpečení → Brána Windows Defender → Příchozí pravidla*) nebo zakáže změna tapety.

## Otázky k opakování

1. Co jsou GPO a k čemu slouží? ||objekty zásad skupiny, kterými správce centrálně nastavuje počítače a uživatele v doméně||
2. Kdy se zásady uplatní? ||zásady počítače při startu, uživatele při přihlášení, dále periodicky (90 min) nebo příkazem gpupdate||
3. Jaké zásady se po vytvoření domény vytvoří? ||Default Domain Policy a Default Domain Controllers Policy||
4. V jakém pořadí se zásady zpracovávají? ||místní, lokalita, doména, OU, podřízená OU; pozdější má vyšší prioritu||
5. Co dělá Block Inheritance a Enforced? ||blokování zastaví dědění z nadřazených úrovní; Enforced vynutí zásadu s nejvyšší prioritou i přes blokování||
6. Jak zakážete skupině uživatelů Ovládací panely? ||uživatele dáme do OU, přilinkujeme GPO a v něm zapneme zákaz přístupu k Ovládacím panelům||
