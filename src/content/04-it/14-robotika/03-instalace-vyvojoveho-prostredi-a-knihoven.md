---
title: "Instalace vývojového prostředí a knihoven"
order: 3
source: "robotika1.pol/cv02_Instalace_vyvojoveho_prostredi+knihovny.pdf"
---

## Instalace vývojového prostředí Arduino IDE a knihoven

### Historie:

- naprogramováno v jazyce Java

- odvozeno od výukového prostředí Processing

- podpora jazyja Wiring (odvozeno od jazyka C)

### Stažení a instalace

Přejděte na web Arduino.cc a v sekci „Software“ nalezněte oddíl „Download“. Stáhněte ZIP soubor (viz. obrázek níže), který následně rozbalte na disk C:\ do podadresáře SW nebo se svým příjmením.

<img src="/images/content/it/robotika/instalace-vyvojoveho-prostredi-a-knihoven/01.webp" alt="Stažení Arduino IDE" width="643" loading="lazy" decoding="async">

_Obrázek 1: Stažení Arduino IDE_

<img src="/images/content/it/robotika/instalace-vyvojoveho-prostredi-a-knihoven/02.webp" alt="Instalace Arduino IDE do C:\SW" width="354" loading="lazy" decoding="async">

_Obrázek 2: Instalace Arduino IDE do C:\SW_

V dalším kroku přejdeme do adresáře „arduino-1.8.16“; nalezneme soubor „arduino.exe“ a vytvoříme si odkaz na ploše (obrázek 3).

<img src="/images/content/it/robotika/instalace-vyvojoveho-prostredi-a-knihoven/03.webp" alt="Vytvoření odkazu na Ploše" width="432" loading="lazy" decoding="async">

_Obrázek 3: Vytvoření odkazu na Ploše_

Ve stejném adresáři jako je soubor „arduino.exe“ je složka „ **Drivers** “, která obsahuje ovladače pro komunikaci s PC. Další složka, která se zde nachází je „ **Examples** “ s příklady kódů. Důležitou složkou je i složka „ **Libraries** “, kde jsou uložené knihovny.

Než spustíme Adruino IDE, tak domovské složce uživatele např: „ **C:\Users\uživatelské_jméno\Documents** “ vytvoříme podadresář „ **Arduino** “ a v něm podadresář „ **Libraries** “. Do adresáře „ **Arduino** “ budeme ukládat naše programy a do adresáře „ **Libraries** “ si uložíme přidané knihovny pro práci s dalšími čidly a zařízeními, které nejsou v hlavním adresáři IDE.

Nyní můžeme prvně spustit Arduino IDE.

<img src="/images/content/it/robotika/instalace-vyvojoveho-prostredi-a-knihoven/04.webp" alt="První spuštění Arduino IDE" width="200" loading="lazy" decoding="async">

_Obrázek 4: První spuštění Arduino IDE_

Případně ještě povolte na firewallu Javaw.exe

<img src="/images/content/it/robotika/instalace-vyvojoveho-prostredi-a-knihoven/05.webp" alt="Povolení Javaw.exe na firewallu" width="319" loading="lazy" decoding="async">

_Obrázek 5: Povolení Javaw.exe na firewallu_

### Seznámení se s prostředím Arduino IDE

<img src="/images/content/it/robotika/instalace-vyvojoveho-prostredi-a-knihoven/08.webp" alt="Části prostředí Arduino IDE" width="640" loading="lazy" decoding="async">

- Hlavní menu – práce se soubory a nastavení vývojového prostředí
- Sada ikon pro rychlou práci s programem
- Pole pro psaní programů
- Pole s chybovými hláškami a dalšími informacemi

#### Význam ikon

<img src="/images/content/it/robotika/instalace-vyvojoveho-prostredi-a-knihoven/06.webp" alt="Význam Ikon Arduino IDE" width="332" loading="lazy" decoding="async">

_Obrázek 6: Význam Ikon Arduino IDE_

Zleva doprava:

„ **Ověřit** “ – po stisknutí spustí kontrolu programu a zkompiluje kód. Pokud nalezne nějakou chybu tak ji v programu zvýrazní.

„ **Nahrát** “ – spustí kontrolu programu, pokud neobsahuje chybu tak jej zkompiluje a rovnou nahraje na připojené Arduino.

- „ **Nový** “ – vytvoří nový soubor

- „ **Otevřít** “ – „šipka nahoru“ – můžeme nahrát již dříve uložený program

- „ **Uložit** “ – „šipka dolů“ – uložíme aktuální program

- „ **Sériový monitor** “ – „ikona lupy“ – vysvětleno později

