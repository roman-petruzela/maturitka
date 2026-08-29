---
title: "Síťová vrstva a IPv4 protokol"
order: 10
source: "site/IT3_IPv4_protokol.pdf"
---
- zajišťuje doručení jednotlivých částí zprávy do cílového zařízení, které může být i v jiné síti.

- **Paket** – zajišťuje adresování, zapouzdření dat přijatých z transportní vrstvy, směrování a rozbalení dat.

# Internet Protocol v4

- **Adresování** – každému síťovému zařízení je přiřazena síťová adresa IP pomocí niž lze zprávy směrovat.

- **Zapouzdření do paketu** – k datům z transportní vrstvy se přidá IP adresa odesilatele a příjemce, a předá se nižší vrstvě k dalšímu zpracování

## Síťová vrstva

IP – datagram v4

- **Směrování** – routery podle svých směrovacích tabulek rozhodnou kam pošlou paket.

- **Rozbalení** – až v cílovém zařízení (PC) – odstraněny IP adresy a předány transportní vrstvě k dalšímu zpracování.

## Položky IP datagramu v4

- **Version** – verze IP protokolu = 4

- **Header length** – délka celého záhlaví IP datagramu, násobek 4, max 60B ()

- **Type of Services** – typ služby - nevyužita

## Položky IP datagramu v4

   - **Flags** – 3bitové číslo, 1bit = vždy 0, 2bit (DF) = 1 – zakázaná fragmentace, 3bit (MF) = 1 – není posledním fragmentem

   - **Fragment offset** – umístění při rekonstrukci fragmentovaného paketu

- **Total length** – délka celého datagramu včetně dat, max 65535 B

- **Identifier** – identifikace datagramu, vkládá OS odesilatele, používá se pro fragmentaci s Flags a Fragment offset

## Položky IP datagramu v4

- **Time to Live** – čas v sekundách, nastaveno na 15, po průchodu směrovačem sníženo o 1, při 0 je zahozen

- **Protocol** – protokol vyšší vrstvy, je zabalen v datové oblasti datagramu

- **Header checksum** – kontrolní součet hlavičky, při změně se přepočítá

- **Source address** – IP adresa odesilatele 32 bitů

- **Destination address** – IP adresa příjemce 32 bitů

- **Options** – zabezpečení – málo využíváno

- **Padding** – volitelná – výplň na násobek 32 bitů
