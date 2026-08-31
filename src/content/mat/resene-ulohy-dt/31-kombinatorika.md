---
title: "Kombinatorika"
order: 31
source: "MATURITA HADR/Matematika/řešené postupy matematických okruhů z DT 2010 - 2017/31) Kombinatorika.pdf"
hasExercises: true
---
<u>Příklady z maturitních testů Cermat-u ( základní úroveň ) – Kombinatorika</u>

1) <u>Určete neznámé číslo</u> _<u>k</u>_ <u>, jestliže platí:     100!  =  k * 98!</u> Ostrý maturitní test Cermat-u ( základní úroveň ) – jaro 2011, příklad č. 5 Body: 1                   Výsledek:  k = 99 * 100   resp. k = 9900   resp. 9900

Pracovní tematické zařazení: Kombinatorika Řešení: 100!  =  k * 98!     /: 98! =  k =  k 100 * 99  =  k                                9 900 = k -------------------------------------------------2) Určete neznámé číslo _m_ <u>, jestliže platí:     m! *</u> =  2*4*6*8*10*12*14*16 Ostrý maturitní test Cermat-u ( základní úroveň ) – jaro 2011, příklad č. 6 Body: 1                   Výsledek:  m = 8   resp. m! = 8! Pracovní tematické zařazení: Kombinatorika Řešení: <u>1. způsob</u> m! * =  2*4*6*8*10*12*14*16          m! * 256  =  10 321 920   /: 256 m!  =  40 320          zkusmo na kalkulačce … m = 8 <u>2. způsob</u> m! * =  2*4*6*8*10*12*14*16 m! * =  2 * 2<sup>2</sup> * 2 * 3 * 2<sup>3</sup> * 2 * 5 * 2<sup>2</sup> * 3 * 2 * 7 * 2<sup>4</sup> m! * =  2<sup>15</sup> * 3<sup>2</sup> * 5 * 7   /: 2<sup>8</sup> m!  =  2<sup>7</sup> * 3<sup>2</sup> * 5 * 7 m! =  2<sup>3</sup> * 7 * 2 * 3 * 5 * 2<sup>2</sup> * 3 * 2           m!  =  8 * 7 * 6 * 5 * 4 * 3 * 2 m!  =  8!          m = 8 -------------------------------------------------3) Cesta prochází několika křižovatkami. Na každé křižovatce je možné zahnout doleva (L), doprava (P), nebo pokračovat v přímém směru (S). Průjezd dvěma křižovatkami je možné zapsat dvojicí znaků, např. PP, SL apod. Kolika způsoby může auto projet dvěma křižovatkami ?           A) <u>9     B) 8 C) 6     D) 5     E)  4</u> Ostrý maturitní test Cermat-u ( základní úroveň ) – jaro 2011, příklad č. 21 Body: 2                   Výsledek:  A

Pracovní tematické zařazení: Kombinatorika Řešení: Kombinatorické pravidlo součinu pro 2 množiny ( nikoli přesná definice, pouze vysvětlení ): Máme-li v 1. situaci A možností volby a v následné navazující situaci B možností volby, je celkový počet voleb A*B. Kombinatorické pravidlo součinu platí nejen pro 2 množiny, ale pro libovolný počet množin.

Na 1. křižovatce máme 3 možnosti volby ( L, P, S ), na 2. křižovatce máme 3 možnosti volby ( L, P, S ). Celkový počet voleb je tedy 3 * 3 = 9. Situaci lze znázornit takto: na 1. křižovatce L                 na 1. křižovatce P                  na 1. křižovatce S ----- L … LL                         ----- L … PL                         ----- L … SL L   ----- P … LP                    P   ----- P … PP                     S   ----- P … SP ----- S … LS                          ----- S … PS                         ----- S … SS --------------------------------------------------

<u>Příklady z maturitních testů Cermat-u ( základní úroveň ) – Kombinatorika</u>

4) Vláďa si vylosuje jednu otázku ze skupiny 10 otázek a dále dvojici otázek z jiné skupiny 20 otázek. Kolik různých trojic otázek je ve hře ? A) 4 600       B) 4 000 <u>C) 3 800       D) 1 900       E) jiný počet</u> Ostrý maturitní test Cermat-u ( základní úroveň ) – podzim 2011, příklad č. 23 Body: 2                   Výsledek:  D

Pracovní tematické zařazení: Kombinatorika Řešení: Kombinatorické pravidlo součinu pro 2 množiny ( nikoli přesná definice, pouze vysvětlení ): Máme-li v 1. situaci A možností volby a v následné navazující situaci B možností volby, je celkový počet voleb A*B. Kombinatorické pravidlo součinu platí nejen pro 2 množiny, ale pro libovolný počet množin.

Počet možností volby v 1. situaci ( „problém trenéra oštěpařů“ ) … 10 nad 1  =  10 Počet možností volby v 2. situaci ( „problém trenéra oštěpařů“ ) … 20 nad 2  = = 190 Celkový <u>počet voleb … 10 * 190  =  1 900</u> -------------------------------------------------5) Frontu na lístky tvoří čtyři dívky a šest chlapců. Kolika různými způsoby se mohou osoby ve frontě seřadit ? A)  10 !        B)  4 !  +  6 !        C)  4 * 6        D)  4 ! * 6 !        E) <u>( 4 * 6 ) !</u> Ostrý maturitní test Cermat-u ( základní úroveň ) – podzim 2012, příklad č. 23 Body: 2                    Výsledek:  A

Pracovní tematické zařazení: Kombinatorika Řešení: n = 10 ( 4 dívky + 6 chlapců )          k = 10 ( fronta o 10 lidech )          pořadí … záleží opakování prvků v k-tici … ne ( žádný z lidí nemůže být ve frontě více než jednou ) Jedná se tedy o permutace bez opakování ( čili o „problém fotografa“ ) … P(n)  =  n !  =  10 !

-------------------------------------------------6) Pětimístný kód obsahuje pět různých číslic, na prvním místě je číslice 8 a na posledním místě číslice 5 ( zadání vyhovuje např. kód 80415 ). Kolik různých kódů vyhovuje <u>popisu ?     A) méně než 336     B) 336 C) 512     D) 720     E) více než 720</u> Ostrý maturitní test Cermat-u ( základní úroveň ) – jaro 2013, příklad č. 22 Body:  2                  Výsledek:  B Pracovní tematické zařazení: Kombinatorika Řešení: Jedná se o úlohu typu „obsazené a volné pozice“ – obsazená je první a poslední pozice, volné jsou 3 pozice. n = 8 ( číslice 0, 1, 2, 3, 4, 6, 7, 9 )          k = 3 ( trojice na volných pozicích ) pořadí … záleží          opakování prvků v k-tici … ne Jedná se tedy o variace bez opakování ( čili o „problém trenéra štafety“ ). V(k, n)  =  n! : ( n – k )!  =  8! : ( 8 – 3 )!  =  8! : 5!  =  336

--------------------------------------------------

<u>Příklady z maturitních testů Cermat-u ( základní úroveň ) – Kombinatorika</u>

7) Učitel má nominovat 4 chlapce ze třídy do smíšeného volejbalového týmu. Ve třídě je včetně Petra 14 chlapců. Jedním z členů týmu bude Petr a ostatní chlapci se vyberou losem. Kolik různých týmů je možné za těchto podmínek sestavit ? A) B) <u>C)  1 + 13 + 12 + 11      D)  13*12*11      E) jiný počet</u> Ostrý maturitní test Cermat-u ( základní úroveň ) – podzim 2013, příklad č. 24 Body: 2                    Výsledek:  B

Pracovní tematické zařazení: Kombinatorika Řešení: Jedná se o úlohu typu „obsazené a volné pozice“ – obsazená je 1 pozice ( Petr ), volné jsou 3 pozice ( zbývající 3 místa v týmu ). n = 13 ( zbývajících 13 chlapců )          k = 3 ( trojice na volných pozicích ) pořadí … nezáleží          opakování prvků v k-tici … ne Jedná se tedy o kombinace bez opakování ( čili o „problém trenéra oštěpařů“ ). K(k, n)  =  ( n nad k )  =  ( 13 nad 3 )

-------------------------------------------------8) Trenér vybírá z 5 děvčat a 4 chlapců šestičlennou skupinu, v níž budou 3 dívky a 3 chlapci. Kolika způsoby lze šestičlennou skupinu za těchto podmínek sestavit ? A) 16        B) 20 <u>C) 40        D) 180        E) jiným počtem</u> Ostrý maturitní test Cermat-u ( základní úroveň ) – jaro 2014, příklad č. 17 Body:  2                  Výsledek:  C

Pracovní tematické zařazení: Kombinatorika Řešení: Kombinatorické pravidlo součinu pro 2 množiny ( nikoli přesná definice, pouze vysvětlení ): Máme-li v 1. situaci A možností volby a v následné navazující situaci B možností volby, je celkový počet voleb A*B.

Kombinatorické pravidlo součinu platí nejen pro 2 množiny, ale pro libovolný počet množin.

Počet možností volby u děvčat ( „problém trenéra oštěpařů“ ) … 5 nad 3  = = 10 Počet možností volby u chlapců ( „problém trenéra oštěpařů“ ) … 4 nad 3  = = 4 Celkový <u>počet voleb … 10 * 4  =  40</u> -------------------------------------------------9) Vypočtěte: +  100 Ostrý maturitní test Cermat-u ( základní úroveň ) – podzim 2014, příklad č. 10 Body: 1                    Výsledek:  101 Pracovní tematické zařazení: Kombinatorika Řešení: +  100 = +  100 =   100 + 100 * = =   100 + =   100 + 1   =   101

--------------------------------------------------

<u>Příklady z maturitních testů Cermat-u ( základní úroveň ) – Kombinatorika</u>

10) V divadle se do první řady posadí 12 osob, 3 místa v této řadě zůstanou volná. Kolika způsoby by mohla být rozmístěna volná místa v první řadě ? A) 220        B) 455 <u>C) 1 320        D) 2 730        E) jiným počtem</u> Ostrý maturitní test Cermat-u ( základní úroveň ) – podzim 2014, příklad č. 21 Body: 2                    Výsledek:  B

Pracovní tematické zařazení: Kombinatorika Řešení: Kolika způsoby by mohla být rozmístěna volná místa v první řadě ?  =  Kolika způsoby můžeme vybrat 3 sedadla z 15 sedadel ? ( „problém trenéra oštěpařů“ ) n = 15 ( počet sedadel )          k = 3 ( trojice vybraných sedadel )          pořadí … nezáleží opakování prvků v k-tici … ne Jedná se tedy o kombinace bez opakování ( čili o „problém trenéra oštěpařů“ ) K( k, n )  =  ( n nad k )  = = = = = = =  455

--------------------------------------------------

<u>Příklady z maturitních testů Cermat-u ( základní úroveň ) – Kombinatorika</u>

- 11) Ze skupiny 10 dětí se vybírá tříčlenná skupina. Mezi dětmi je jediný Adam a jediná Bohunka. Vybraná skupina musí splňovat ještě některou z dalších stanovených podmínek. Pro každou z následujících podmínek ( a) – d) ) určete, kolika způsoby ( A – F ) je možné tříčlennou skupinu vybrat. a) Ve skupině není Adam ani Bohunka.          b) Ve skupině je Adam i Bohunka. c) Ve skupině je Adam, ale není v ní Bohunka.          d) Ve skupině je Adam. A) 28     B) <u>36 C) 56     D) 72     E) 336     F) jiným počtem</u> Ostrý maturitní test Cermat-u ( základní úroveň ) – jaro 2015, příklad č. 25 Body:  4                  Výsledek:  a) C     b) F ( 8 )     c) A     d) B

Pracovní tematické zařazení: Kombinatorika Řešení: a) n = 8 ( všechny děti kromě Adama a Bohunky )               k = 3 ( trojice vybraných dětí ) pořadí … nezáleží               opakování prvků v k-tici … ne Jedná se tedy o kombinace bez opakování ( čili o „problém trenéra oštěpařů“ ) K( k, n )  =  ( n nad k )  = = = = = =  56 b) Jedná se o úlohu typu „obsazené a volné pozice“ – obsazené jsou 2 pozice ( Adam, Bohunka ), volná je 1 pozice ( zbývající 1 místo ve skupině ). n = 8 ( zbývajících 8 dětí )          k = 1 ( 1 dítě na volné pozici ) pořadí … nezáleží          opakování prvků v k-tici … ne Jedná se tedy o kombinace bez opakování ( čili o „problém trenéra oštěpařů“ ). K(k, n)  =  ( n nad k )  =  ( 8 nad 1 )  =  8

c) Jedná se o úlohu typu „obsazené a volné pozice“ – obsazená je 1 pozice ( Adam ), volné jsou 2 pozice ( zbývající 2 místa ve skupině ). n = 8 ( zbývajících 8 dětí – kromě Adama a Bohunky ) k = 2 ( 2 děti na volných pozicích ) pořadí … nezáleží          opakování prvků v k-tici … ne Jedná se tedy o kombinace bez opakování ( čili o „problém trenéra oštěpařů“ ). K(k, n)  =  ( n nad k )  = = = = = =  28 d) Jedná se o úlohu typu „obsazené a volné pozice“ – obsazená je 1 pozice ( Adam ), volné jsou 2 pozice ( zbývající 2 místa ve skupině ). n = 9 ( zbývajících 9 dětí )               k = 2 ( 2 děti na volných pozicích ) pořadí … nezáleží          opakování prvků v k-tici … ne Jedná se tedy o kombinace bez opakování ( čili o „problém trenéra oštěpařů“ ). K(k, n)  =  ( n nad k )  = = = = = =  36

--------------------------------------------------

<u>Příklady z maturitních testů Cermat-u ( základní úroveň ) – Kombinatorika</u>

12) A) B) <u>C) 2         D) n         E) 2n</u> Ostrý maturitní test Cermat-u ( základní úroveň ) – podzim 2015, příklad č. 17 Body: 2                    Výsledek:  D

Pracovní tematické zařazení: Kombinatorika Řešení: ( n nad k )  = = – = – = = – = – = = = =   n

-------------------------------------------------13) Osm spolužáků ( Adam, Bára, Cyril, Dan, Eva, Filip, Gábina a Hana ) se má seřadit za sebou tak, aby Eva byla první a Dan předposlední. Kolika způsoby se mohou spolužáci <u>seřadit ?     A) 5 040        B) 2 880 C) 1 440        D) 720        E) jiným počtem</u> Ostrý maturitní test Cermat-u ( základní úroveň ) – podzim 2015, příklad č. 18 Body: 2                    Výsledek:  D

Pracovní tematické zařazení: Kombinatorika Řešení: Jedná se o úlohu typu „obsazené a volné pozice“ – obsazená je první ( Eva ) a předposlední ( Dan ) pozice, volných je 6 pozic. n = 6 ( Adam, Bára, Cyril, Filip, Gábina, Hana )          k = 6 ( šestice na volných pozicích ) pořadí … záleží          opakování prvků v k-tici … ne Jedná se tedy o permutace bez opakování ( čili o „problém fotografa“ ) P(n)  =  n !  =  6 !  =  720

-------------------------------------------------14) Je dána rovnice s neznámou _n_ Є N: + Jaké je řešení rovnice ? A) 11        B) 10 <u>C) 9        D) 8        E) jiné řešení</u> Ostrý maturitní test Cermat-u ( základní úroveň ) – jaro 2016, příklad č. 23 Body:  2                  Výsledek:  A

Pracovní tematické zařazení: Kombinatorika Řešení: + /* 9!*10!               10! * 80!  +  9! * 80!  =  9! * _n_ * 80!    /: 80! 10! +  9!  =  9! * _n_ /: 9!               10 + 1 = _n_ 11 = _n_ --------------------------------------------------

<u>Příklady z maturitních testů Cermat-u ( základní úroveň ) – Kombinatorika</u>

- 15) Trojciferné číslo má splňovat následující podmínky: V dekadickém zápise je na místě stovek sudá číslice, na místě desítek lichá číslice a na místě jednotek libovolná číslice, která nebyla použita na předchozích místech. ( Vyhovují např. čísla 492, 430, 813 ). <u>Určete počet všech čísel, která splňují dané podmínky.</u>

Ostrý maturitní test Cermat-u ( základní úroveň ) – podzim 2016, příklad č. 11 Body: 1                    Výsledek:  160 čísel

Pracovní tematické zařazení: Kombinatorika Řešení:

Kombinatorické pravidlo součinu pro 2 množiny ( nikoli přesná definice, pouze vysvětlení ): Máme-li v 1. situaci A možností volby a v následné navazující situaci B možností volby, je celkový počet voleb A*B.

Kombinatorické pravidlo součinu platí nejen pro 2 množiny, ale pro libovolný počet množin.

na místě stovek máme 4 volby ( číslice 2, 4, 6, 8 ) na místě desítek máme 5 voleb ( číslice 1, 3, 5, 7, 9 ) na místě jednotek máme 8 voleb ( 2 číslice už byly použity a číslic je celkem 10 …

… 10 – 2 = 8 )

Celkový <u>počet voleb je tedy  4 * 5 * 8  =  160</u>

--------------------------------------------------

# <u>Příklady z maturitních testů Cermat-u ( základní úroveň ) – Kombinatorika</u>

16) Čtyřciferné přirozené číslo se má sestavit ze čtyř **různých** číslic. Na prvním místě má být číslice 2 a na místě desítek lichá číslice. ( Daným podmínkám vyhovují například čísla 2 430  a  2 793 ). Kolik různých čísel je možné uvedeným způsobem sestavit ? A) 21     B) 240 <u>C) 280     D) 360     E) jiný počet</u> Ostrý maturitní test Cermat-u ( základní úroveň ) – jaro 2017, příklad č. 19 Body: 2                   Výsledek:  C

Pracovní tematické zařazení: Kombinatorika Řešení:

<u>1. způsob – pomocí kombinatorického pravidla součinu</u>

Kombinatorické pravidlo součinu pro 2 množiny ( nikoli přesná definice, pouze vysvětlení ): Máme-li v 1. situaci A možností volby a v následné navazující situaci B možností volby, je celkový počet voleb A*B. Kombinatorické pravidlo součinu platí nejen pro 2 množiny, ale pro libovolný počet množin. na 1. místě zleva máme 1 volbu ( číslice 2 ) na 3. místě zleva ( na místě desítek ) máme 5 voleb ( číslice 1, 3, 5, 7, 9 ) na 2. místě zleva máme 8 voleb ( 2 číslice už byly použity a číslic je celkem 10 … … 10 – 2 = 8 ) na 4. místě zleva máme 7 voleb ( 3 číslice už byly použity a číslic je celkem 10 … … 10 – 3 = 7 )

Celkový počet voleb je tedy  1 * 5 * 8 * 7  =  280

<u>2. způsob – složitější úloha typu „obsazené a volné pozice“</u>

1. pozice zleva je obsazená ( číslice 2 ) 3. pozice zleva ( na místě desítek ) je obsazená jednou z číslic 1, 3, 5, 7, 9 2. a 4. pozice zleva jsou volné … n = 8 ( zbývající dosud nepoužité číslice ) k = 2 ( dvojice na volných pozicích ) pořadí … záleží opakování prvků v k-tici … ne variace bez opakování … V( k, n ) = = = = = =  56 Obdobná situace se může opakovat pětkrát ( pokaždé s jinou lichou číslicí na 3. pozici zleva ), takže celkový <u>počet možností je  5 * 56  =  280</u> -------------------------------------------------17) Kolikrát je číslo A větší než číslo B ? A) méně než 10krát     B) 10krát     C) 20krát     D) <u>50krát     E) více než 50krát</u> Ostrý maturitní test Cermat-u ( základní úroveň ) – jaro 2017, příklad č. 21 Body: 2                   Výsledek:  D Pracovní tematické zařazení: Kombinatorika Řešení: = = = = =  50 --------------------------------------------------

<u>Příklady z maturitních testů Cermat-u ( základní úroveň ) – Kombinatorika</u>

1p) Určete neznámé číslo k, jestliže platí: Ostrý maturitní test Cermat-u ( základní úroveň ) – jaro 2011 PUP, příklad č. 5 Body: 1                 Výsledek:  k = 95 ∙ 94     resp.  k = 8 930     resp.  8 930

Pracovní tematické zařazení: Kombinatorika Řešení: = /* 95!               k  = * k  =  95*94               k  =  8 930

-------------------------------------------------2p) Určete neznámé číslo m, jestliže platí: =  2011 ∙ 2010 Ostrý maturitní test Cermat-u ( základní úroveň ) – jaro 2011 PUP, příklad č. 6 Body: 1                Výsledek:  m = 2 009     resp.  2 009

Pracovní tematické zařazení: Kombinatorika Řešení: =  2011 ∙ 2010 =  2011 * 2010 ( m + 2 )( m + 1 )  =  2011 * 2010                   m  =  2 009 Poznámka: Kvadratickou rovnici   ( m + 2 )( m + 1 )  =  2011 * 2010   by bylo možné řešit běžným způsobem, v tomto případě by to ale bylo zbytečně zdlouhavé.

--------------------------------------------------

<u>Příklady z maturitních testů Cermat-u ( základní úroveň ) – Kombinatorika</u>

- 3p) Pětimístné slovo je možné poskládat ze dvou čárek a tří teček, například

Kolik takových různých slov existuje ?

A) 10       B) 20       C) D) 2<sup>2∙</sup> 3<sup>3</sup> E) jiný počet Ostrý maturitní test Cermat-u ( základní úroveň ) – jaro 2011 PUP, příklad č. 21 Body: 2               Výsledek:  A

Pracovní tematické zařazení: Kombinatorika Řešení: n = 2 ( tečka, čárka )          k = 5 ( délka slova )          pořadí … záleží opakování prvků v k-tici … ano Pozor ! – nejedná se o variace s opakováním – u nich se každý symbol může v k-tici opakovat až k krát ( např. slovo složené z pěti teček, pěti čárek atd. ). Zde se jedná o permutace s opakováním – i u nich záleží na pořadí. Rozdíl oproti variacím s opakováním je ale v tom, že je přesně stanoveno, kolikrát se každý ze symbolů má v k-tici opakovat ( zde se čárka musí opakovat právě dvakrát a tečka právě třikrát ). Vzorec pro permutace s opakováním:

P´k1, k2,   , kn ( k )  = n … počet prvků, které máme k dispozici k … počet prvků vytvářené k-tice k1  = počet opakování 1. prvku,   k2  = počet opakování 2. prvku,  … , kn  = počet opakování n-tého  prvku ( k1 + k2  + … + kn   =  k ) Zde platí, že  k1 = 2 ( počet opakování čárky )  a  k2 = 3 ( počet opakování tečky ). Logicky také platí, že  k1 + k2  =  k  ( zde  2 + 3 = 5 … délka slova ). P´k1, k2 ( k )  = = = =  10

--------------------------------------------------

1i) V kódu je na prvním místě jedno z písmen nebo . Na dalších dvou pozicích je libovolné dvojciferné číslo od 11 do 45. ( Existují např. kódy apod. ). <u>Určete počet všech takto vytvořených kódů.</u>

Ilustrační maturitní test Cermat-u ( základní úroveň ) – 2010 (2), příklad č. 10 Body:  2          Výsledek:

Pracovní tematické zařazení: Kombinatorika Řešení:

Kombinatorické pravidlo součinu pro 2 množiny ( nikoli přesná definice, pouze vysvětlení ): Máme-li v 1. situaci A možností volby a v následné navazující situaci B možností volby, je celkový počet voleb A*B. Kombinatorické pravidlo součinu platí nejen pro 2 množiny, ale pro libovolný počet množin.

Na prvním místě kódu máme 4 možnosti volby ( jedno z písmen nebo ). Na dalších dvou místech máme 35 ( pozor !!!, nikoli 34 ) možností volby. Celkový počet voleb je tedy 4 * 35 = 140

--------------------------------------------------

<u>Příklady z maturitních testů Cermat-u ( základní úroveň ) – Kombinatorika</u>

2i)

Kolika způsoby je možné na polích šachovnice rozmístit tři stejné figury tak, aby byly všechny tři na hlavní, nebo všechny tři na vedlejší diagonále ? A) 16     B) 20 <u>C) 30     D) 32     E) 33</u>

Ilustrační maturitní test Cermat-u ( základní úroveň ) – 2012, příklad č. 22 Body: 2              Výsledek:  B

Pracovní tematické zařazení: Kombinatorika Řešení:

Pozor !!! – nejedná se o úlohu typu „lidé a židle“, neboť všechny 3 figury jsou stejné. Nejedná se ani o kombinatorické pravidlo součinu, neboť figury mají být buď jen na hlavní nebo jen na vedlejší diagonále ( nikoli tedy 3 na hlavní diagonále a 3 na vedlejší diagonále ). Musíme tedy spočítat, kolika způsoby je možno figury rozmístit na hlavní a kolika na vedlejší diagonále ( počet způsobů je stejný, neboť obě diagonály mají stejný počet polí ) a oba získané výsledky sečíst.

Jedná se zde o „problém trenéra oštěpařů“ ( kolika způsoby lze z 5 polí diagonály vybrat 3 pole ), tedy o kombinace bez opakování.

n = 5 ( počet polí jedné diagonály )          k = 3 ( 3 vybraná pole )          pořadí … nezáleží opakování prvků v k-tici … ne K( k, n )  =  ( n nad k )  = = = = =  10 … počet možností, jak z 5 polí vybrat 3 pole ( tj. počet možností, jak rozmístit 3 stejné figury na 5 polí jedné diagonály )

U druhé diagonály je počet možností stejný, tj. 10. Celkový počet možností je tedy 10 + 10 = 20

--------------------------------------------------

<u>Příklady z maturitních testů Cermat-u ( základní úroveň ) – Kombinatorika</u>

3i) Vypočtěte aritmetický průměr čísel:     100! – 2 * 99!      a     100! + 101! 99! 100! <u>V záznamovém archu uveďte celý postup řešení.</u> Ilustrační maturitní test Cermat-u ( základní úroveň ) – 2013, příklad č. 15 Body: 2                 Výsledek:  100    a postup řešení

Pracovní tematické zařazení: Kombinatorika Řešení: = = =  98 = = =  102 aritmetický <u>průměr … ( 98 + 102 ) : 2  =  100</u>

-------------------------------------------------4i) Čtyřmístný kód má na prvních třech místech tři různé nenulové číslice a na čtvrtém místě nejmenší z těchto tří číslic ( např. 5282, 7565, 5211 apod. ). Kolik různých kódů <u>vyhovuje popisu ?   A) méně než 504     B) 504     C) 512     D) 720     E) více než 720</u> Ilustrační maturitní test Cermat-u ( základní úroveň ) – 2014 (2), příklad č. 22 Body: 2                    Výsledek:  B

Pracovní tematické zařazení: Kombinatorika Řešení:

Kombinatorické pravidlo součinu pro 2 množiny ( nikoli přesná definice, pouze vysvětlení ): Máme-li v 1. situaci A možností volby a v následné navazující situaci B možností volby, je celkový počet voleb A*B. Kombinatorické pravidlo součinu platí nejen pro 2 množiny, ale pro libovolný počet množin.

Nejprve vypočítáme počet voleb na prvních třech místech a získaný výsledek poté vynásobíme počtem voleb na čtvrtém místě. a) počet voleb na prvních třech místech n = 9 ( číslice 1, 2, 3, 4, 5, 6, 7, 8, 9 )          k = 3 ( první 3 místa )          pořadí … záleží opakování prvků v k-tici … ne Jedná se tedy o variace bez opakování. V( k, n )  = = = = =  504 b) počet voleb na čtvrtém místě Pozor !!! – na čtvrté pozici už nemůžeme volit z devíti cifer, neboť na ní musí být nejmenší ze tří číslic na prvních třech pozicích, takže počet voleb na čtvrté pozici = 1 Kombinatorické pravidlo součinu … 504 * 1  =  504

--------------------------------------------------
