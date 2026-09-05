---
title: "Instalace vývojového prostředí a knihoven"
order: 3
source: "robotika1.pol/cv02_Instalace_vyvojoveho_prostredi+knihovny.pdf"
---
IT3 – RBT – Arduino – Instalace vývojového prostředí a knihoven

CV-02

# **Instalace vývojového prostředí Arduino IDE a knihoven**

## **Historie:**

- naprogramováno v jazyce Java

- odvozeno od výukového prostředí Processing

- podpora jazyja Wiring (odvozeno od jazyka C)

## **Stažení a instalace**

Přejděte na web Arduino.cc a v sekci „Software“ nalezněte oddíl „Download“. Stáhněte ZIP soubor (viz. obrázek níže), který následně rozbalte na disk C:\ do podadresáře SW nebo se svým příjmením.

_Obrázek 1: Stažení Arduino IDE_

_Obrázek 2: Instalace Arduino IDE do C:\SW_

_
IT3 – RBT – Arduino – Instalace vývojového prostředí a knihoven

CV-02

V dalším kroku přejdeme do adresáře „arduino-1.8.16“; nalezneme soubor „arduino.exe“ a vytvoříme si odkaz na ploše (obrázek 3).

_Obrázek 3: Vytvoření odkazu na Ploše_

Ve stejném adresáři jako je soubor „arduino.exe“ je složka „ **Drivers** “, která obsahuje ovladače pro komunikaci s PC. Další složka, která se zde nachází je „ **Examples** “ s příklady kódů. Důležitou složkou je i složka „ **Libraries** “, kde jsou uložené knihovny.

Než spustíme Adruino IDE, tak domovské složce uživatele např: „ **C:\Users\uživatelské_jméno\Documents** “ vytvoříme podadresář „ **Arduino** “ a v něm podadresář „ **Libraries** “. Do adresáře „ **Arduino** “ budeme ukládat naše programy a do adresáře „ **Libraries** “ si uložíme přidané knihovny pro práci s dalšími čidly a zařízeními, které nejsou v hlavním adresáři IDE.

Nyní můžeme prvně spustit Arduino IDE.

_Obrázek 4: První spuštění Arduino IDE_

_
CV-02

IT3 – RBT – Arduino – Instalace vývojového prostředí a knihoven

Případně ještě povolte na firewallu Javaw.exe

_Obrázek 5: Povolení Javaw.exe na firewallu_

## **Seznámení se s prostředím Arduino IDE**

<!-- Start of picture text -->
Hlavní menu – práce se soubory<br>a nastavení vývojového<br>prostředí<br>Sada ikon pro<br>rychlou práci<br>s programem<br>Pole pro psaní programů<br>Pole s chybovými hláškami<br>a dalšími informacemi<br><!-- End of picture text -->

_
IT3 – RBT – Arduino – Instalace vývojového prostředí a knihoven

CV-02

### **Význam ikon**

_Obrázek 6: Význam Ikon Arduino IDE_

Zleva doprava:

„ **Ověřit** “ – po stisknutí spustí kontrolu programu a zkompiluje kód. Pokud nalezne nějakou chybu tak ji v programu zvýrazní.

„ **Nahrát** “ – spustí kontrolu programu, pokud neobsahuje chybu tak jej zkompiluje a rovnou nahraje na připojené Arduino.

- „ **Nový** “ – vytvoří nový soubor

- „ **Otevřít** “ – „šipka nahoru“ – můžeme nahrát již dříve uložený program

- „ **Uložit** “ – „šipka dolů“ – uložíme aktuální program

- „ **Sériový monitor** “ – „ikona lupy“ – vysvětleno později

_
