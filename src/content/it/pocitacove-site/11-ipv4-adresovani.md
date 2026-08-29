---
title: "IPv4 adresování"
order: 11
source: "site/IT3_IPv4_adresovani.pdf"
---
- Jak zjistím IP adresu PC?

   - Ipconfig [/all]

- Co je to maska?

- Co je to default gateway?

<!-- Start of picture text -->
IPv4<br><!-- End of picture text -->

<!-- Start of picture text -->
1/16<br><!-- End of picture text -->

# Pojmy v IP adresaci

- Příklad IP adresy: 192.168.25.1

- Pomocí 32 bitů lze vytvořit až 2<sup>32</sup> adres = 4 294 967 296 unikátních adres.

- IP adresy se dělí na adresu sítě a adresu počítače v této síti.

- **Maska** podsítě – je 32 bitové číslo zleva začínající jedničkami  a pokračuje nulami. Jedničky určují, které bity v IP adrese označují síť a nuly pak identifikují zařízení v dané síti.

<!-- Start of picture text -->
●<br><!-- End of picture text -->

<!-- Start of picture text -->
2/16<br><!-- End of picture text -->

<!-- Start of picture text -->
Třídy IP adres<br><!-- End of picture text -->

<!-- Start of picture text -->
Třída 1.B IP adresy 2.B IP adresy 3.B IP adresy 4.B IP adresy Maska<br>A 0sssssss Adresa počítače 255.0.0.0<br>1-12710<br>B 10ssssss ssssssss Adresa počítače 255.255.0.0<br>128 - 19110<br>C 110sssss ssssssss ssssssss Adresa počítače 255.255.255.0<br>192-22310<br>D 1110mmmm mmmmmmmm mmmmmmmm mmmmmmmm<br>224 - 23910<br>E >23910<br><!-- End of picture text -->

3/16

4/16

# IP adresa a maska

- IP adresa dekadicky: 192.168.25.1

- IP adresa binárně:

1100 0000.1010 1000.0001 1001.0000 0001

- Maska dekadicky: 255.255.255.0

- Maska binárně:

1111 1111.1111 1111.1111 1111.0000 0000 **IP:** 1100 0000.1010 1000.0001 1001.0000 0001 **M:** 1111 1111.1111 1111.1111 1111.0000 0000

Část identifikující síť Část identifikující koncové zařízení

5/16

# Počítání IP adres - ClassFull

- Zjištění rozsahu IP adres sítě – Network ID a Broadcast

- ● HostIP: 192.168.  25.1 ● Maska: 255.255.255.0 ● NetID: 192.168.  25.0

- Broadcast: 192.168.  25.255

**IP: 1100 0000.1010 1000.0001 1001** .0000 0001 **M:** 1111 1111.1111 1111.1111 1111.0000 0000 **N:1100 0000.1010 1000.0001 1001** . **0000 0000 B:1100 0000.1010 1000.0001 1001** . **1111 1111**

# Počítání IP adres

- 1) zápis IP adresy a masky

- 2) převod do dvojkové soustavy

- 3) maska má speciální tvar:

   - 1111 1111.1111 1111.1111 1111.0000 0000

   - classfull je na celé bajty záleží na třídě IP adresy

   - Classless není na celé bajty a nezáleží na třídě IP adresy

- 4) část IP adresy nad 1 v masce se opíší pro NetID a B

- 5) následně se NetID doplní 0 až do posledního bitu

- 6) a B se doplní 1  až do posledního bitu

- 7) převod zpět do desítkové soustavy po bajtech 6/16

# Počítání IP adres - ClassLess

- Zjištění rozsahu IP adres sítě – Network ID a Broadcast

- HostIP: 192.168.  25.1

- ● Maska: 255.255.255.192 ● NetID: 192.168.  25.0 ● Broadcast: 192.168.  25.63

**IP: 1100 0000.1010 1000.0001 1001** . **00** 00 0001 **M:** 1111 1111.1111 1111.1111 1111.1100 0000 **N:1100 0000.1010 1000.0001 1001** . **0000 0000 B:1100 0000.1010 1000.0001 1001** . **0011 1111**

7/16

8/16

# Pojmy v IP adresaci

- **Unicast** – je vysílání pro jedno konkrétní zařízení v dané síti

   - Příklad IP: 192.168.1.1

# Příklady IP adres

- Třída A:

Rozsah adres: 1.0.0.0  - 126.255.255.255

Maska: 255.0.0.0

- **Broadcast** – je vysílání určené pro všechny počítače v dané lokální síti

   - Příklad IP: 192.168.1.255 (platí jen pro tuto síť s maskou 255.255.255.0)

- **Multicast** – je vysílání při určitou skupinu počítačů (směrovačů)

Kolik může být počítačů v této síti: 2<sup>24</sup> = 16 777 216 – 2 NetId: 1.0.0.0

Broadcast: 1.255.255.255

- Příklad IP: 224.0.0.0 – 239.255.255.255

# Příklady IP adres

9/16

Kam zmizela síť začínající 127?

# Příklady IP adres

10/16

- Třída B:

- Třída C:

Rozsah adres: 128.0.0.0  - 191.255.255.255

Rozsah adres: 192.0.0.0  - 223.255.255.255

Maska: 255.255.0.0

Maska: 255.255.255.0

Kolik může být počítačů v této síti: 2<sup>16</sup> = 65 535 – 2 NetId: 128.0.0.0

Kolik může být počítačů v této síti: 2<sup>8</sup> = 256 – 2 NetId: 192.0.0.0

Broadcast: 128.0.255.255

Broadcast: 192.0.0.255

11/16

12/16

# Příklady IP adres

- Třída D:

# Rezervované IP adresy

- Třídy D a E

Určena pro vysílání multicast.

IP adresa: 224.0.0.0 – 239.255.255.255

   - 127.0.0.1 – tzv. **Loopback** (localhost) - pro vnitřní rozhraní počítače, slouží pro testování správné konfigurace TCP/IP protokolu na počítači.

- Třída E:

Pro výzkumné účely.

IP adresa: 240.0.0.0 – 255.255.255.255

13/16

# Privátní IP adresy

- Pro směrování ve veřejné síti se musí používat unikátní IP adresy.

- Existuje jasně definovaná skupina adres, která se **nepoužívají ve veřejné síti,** ale jen v sítích privátních, jenž jsou od **veřejné sítě odděleny** .

- Počítače v **privátní** síti se schovávají za hraničním zařízením (směrovač) a ve veřejné síti jejich IP adresa se nevyskytuje.

14/16

# Privátní IP adresy

- Třída A: IP adresy: 10.x.x.x /8 10.0.0.1 – 10.255.255.254

- Třída B: IP adresy: 172.16.0.0 – 172.31.0.0 /16 172.16.0.0 – 172.31.255.254

- Třída C: IP adresy: 192.168.0.0 – 192.168.255.0 /24 192.168.0.0 – 192.168.255.254

15/16

16/16
