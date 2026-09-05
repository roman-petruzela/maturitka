---
title: "Síť peer-to-peer"
order: 24
source: "osy/peer-to-peer.pdf"
---
• Síť peer-to-peer je síť vzájemně nezávislých propojených počítačů

• Nejčastěji se používá ke sdílení (souborů, tiskáren, periferních zařízení, atd.)

# Síť peer-to-peer

• v síti peer-to-peer není žádný centrální server • hojně se využívá u torrentových sítí (např. BitTorrent, eDonkey)

# Hardware k propojení dvou PC

• počítače vybavené síťovou kartou s konektorem pro kroucenou dvojlinku (UTP kabel) • křížený kabel kroucené dvojlinky

Hardware k propojení dvou PC

Hardware k propojení více PC • počítače vybavené síťovou kartou s konektorem pro kroucenou dvojlinku (UTP kabel) • nekřížený kabel kroucené dvojlinky • switch s alespoň tolika porty, kolik chceme připojit počítačů

Hardware k propojení více PC

# Hub (rozbočovač)

• veškerá data, která přijdou na jeden z portů zkopíruje na všechny ostatní porty bez ohledu na to, kterému portu (počítači a IP adrese) data náleží

• zbytečně přetěžuje segmenty sítě

Hub (rozbočovač)

# Switch (přepínač)

- narozdíl od hubu data inteligentně směruje

- • má přehled o tom, který PC je připojen ke kterému portu a data odešle pouze na daný port

- • Switch rozéznává počítače připojené k portům pomocí MAC adresy (fyzické adresy)

Switch (přepínač)

# Router (směrovač)

• spojuje dvě sítě

• nejčastěji vnitřní síť LAN a internet

Router (směrovač)

Komunikační software • služba **Sdílení souborů a tiskáren v sítích Microsoft**

• služba **Klient sítě Microsoft** • komunikační protokol (v našem případě TCP/IP) • uživatelský účet s heslem na počítači, ke kterému chcete přistupovat • zapnuto a nastaveno sdílení • potřebná přístupová oprávnění ke složce

# Komunikační software

• **Sdílení souborů a tiskáren v sítích Microsoft:** umožňuje uživatelům z jiných počítačů přistupovat ke složkám ve vašem počítači • **Klient sítě Microsoft:** díky této službě můžete z vašeho počítače přistupovat ke sdíleným souborům, složkám a tiskárnám na jiných počítačích v síti

# Komunikační software

Když spolu začnou komunikovat dva cizí lidé, musí se nejdříve dohodnout, jaký budou používat jazyk. V prostředí počítačů k tomu účelu slouží dohodnutí se na komunikačním protokolu. Protože budete později určitě chtít pracovat na internetu, zvolte z nabídky protokolů, které jsou ve Windows k dispozici, protokol TCP/IP.

# IP adresa

• adresa, která počítač v síti jednoznačně identifikuje

• v dnešní době se používají adresy IPv4 a IPv6

# IPv4 adresa

• Je vyjádřena 32 bitovým číslem, které se zapisuje čtyřmi 8 bitovými čísly v dekadickém zápisu navzájem oddělenými tečkou • IP adresa se obecně skládá ze dvou složek, první složka adresy identifikuje síť, ve kterém je počítač umístěn a druhá složka identifikuje konkrétní počítač, server nebo jiné zařízení v dané síti

# 3 třídy IP adres IPv4

Adresa třídy A:

- pro adresu sítě 8 bitů, pro adresu počítače 24 bitů

- • rozsah: 1.xxx.xxx.xxx – 126.xxx.xxx.xxx

- Adresa třídy B: • pro adresu sítě 16 bitů, pro adresu počítače 16 bitů • rozsah: 128.xxx.xxx.xxx – 191.xxx.xxx.xxx Adresa třídy C:

- pro adresu sítě 24 bitů, pro adresu počítače 8 bitů

- • rozsah 192.xxx.xxx.xxx – 255.xxx.xxx.xxx

3 třídy IP adres IPv4

# Adresy IPv6

- Délka adresy je 128 bitů

- Adresa ze zapisuje jako 8 skupin čtyřciferných **hexadecimálních číslic** , např.

- 2001:0db8:0000:0000:0000:0000:1428:57ab

- <u>http://test-ipv6.com</u>

- Ipv6 adresy nemají masku podsítě, místo toho používají prefix, ten určuje počet bitů v síťové části adresy

- 2001:db8:0:ff::/ **56** znamená že v prvních 56 bitech musí být samé jedničky

- <u>https://www.ipv6.cz/cs/adresy</u>

## Cvičení — nastavení peer-to-peer sítě

1. Na W10 nastavte IP adresu: 192.168.1.7 s maskou podsítě: 255.255.255.0. Na W10_2 nastavte vhodnou IP adresu tak, aby spolu mohly počítače komunikovat po síti.
2. Na W10 vytvořte uživatelskou skupinu `instalateri` (Pepik) a `zednici` (Frantik).
3. Na W10 vytvořte složku `C:\Stavby`, data v této složce mohou:
   - členové skupiny Administrators zpracovávat lokálně, i z jiného počítače
   - členové skupiny `instalateri` zpracovávat lokálně a z jiného počítače pouze číst
   - členové skupiny `zednici` číst jak lokálně, tak z jiného počítače
   - členové žádné jiné skupiny nemají do této složky přístup
4. Na W10_2 namapujte složku `Stavby` jako síťový disk S:.
5. Na W10_2 vytvořte složku `C:\Jablka`. Tuto složku skrytě nasdílejte a namapujte ji na W10 jako síťový disk U:.
