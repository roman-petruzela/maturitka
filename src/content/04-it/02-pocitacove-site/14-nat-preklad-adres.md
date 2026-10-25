---
title: "NAT – překlad síťových adres"
order: 14
---

Počítače v domácí nebo firemní síti mají obvykle **privátní adresy** (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16), které se v Internetu nesměrují – v různých sítích se opakují, a router v Internetu by nevěděl, kam odpověď poslat. **NAT** (Network Address Translation, překlad síťových adres) proto na hranici sítě přepisuje adresy v hlavičkách paketů: privátní adresu odesílatele nahradí veřejnou adresou routeru a u odpovědi provede opačný překlad. Díky NAT může celá síť sdílet jednu veřejnou IPv4 adresu, což výrazně zpomalilo vyčerpání adres IPv4. Privátní adresy popisuje stránka [IPv4 adresování](/it/pocitacove-site/12-ipv4-adresovani/#veřejné-a-privátní-adresy).

## Jak NAT funguje

NAT provádí hraniční router (domácí Wi-Fi router, firemní router nebo firewall). Jeho rozhraní do lokální sítě je **vnitřní** (inside), rozhraní do Internetu **vnější** (outside). Router si vede **překladovou tabulku**, ve které si pamatuje, kterou vnitřní adresu na kterou vnější přeložil.

Terminologie (podle Cisco):

| Pojem | Význam | Příklad |
| --- | --- | --- |
| inside local | privátní adresa vnitřního počítače | 192.168.1.10 |
| inside global | veřejná adresa, pod kterou počítač vystupuje v Internetu | 203.0.113.5 |
| outside global | adresa cílového serveru v Internetu | 198.51.100.80 |

## Druhy překladu adres

### Statický NAT

Pevně přiřadí **jednu privátní adresu jedné veřejné** (1 : 1). Překlad funguje oběma směry, takže na vnitřní zařízení se lze připojit i z Internetu. Používá se pro servery, které mají být zvenku dostupné (web, pošta). Nešetří adresy – každý server potřebuje vlastní veřejnou adresu.

### Dynamický NAT

Router má **zásobník (pool) veřejných adres** a vnitřnímu počítači, který začne komunikovat, dočasně přidělí volnou adresu z poolu (m : n). Po skončení komunikace se adresa vrátí. Když jsou všechny adresy obsazené, další počítač se do Internetu nedostane. Spojení zvenku dovnitř nejde navázat.

### PAT (NAT overload, NAPT, maškaráda)

**PAT** (Port Address Translation) přeloží **mnoho privátních adres na jedinou veřejnou** (n : 1). Jednotlivá spojení rozliší podle **čísel portů** – router přepíše kromě adresy i zdrojový port a v tabulce si pamatuje, které vnitřní adrese a portu patří. Na jedné veřejné adrese tak může být tisíce současných spojení (porty mají 16 bitů). Tak pracuje každý domácí router; v Linuxu se nazývá **maškaráda** (masquerade).

**Příklad – překladová tabulka PAT.** Dva počítače v síti 192.168.1.0/24 se současně připojují na webový server 198.51.100.80:443; router má veřejnou adresu 203.0.113.5.

| Vnitřní adresa a port | Přeloženo na | Cíl |
| --- | --- | --- |
| 192.168.1.10:51000 | 203.0.113.5:40001 | 198.51.100.80:443 |
| 192.168.1.11:51000 | 203.0.113.5:40002 | 198.51.100.80:443 |

1. Počítač 192.168.1.10 pošle paket ze svého portu 51000 na 198.51.100.80:443.
2. Router přepíše zdrojovou adresu a port na 203.0.113.5:40001, záznam uloží do tabulky a paket pošle do Internetu.
3. Server odpoví na 203.0.113.5:40001 – o privátní adrese neví.
4. Router v tabulce najde, že port 40001 patří 192.168.1.10:51000, přepíše cílovou adresu a port zpět a odpověď předá počítači.

Oba počítače použily stejný zdrojový port 51000; router je odlišil přidělením různých vnějších portů.

### Přesměrování portů (port forwarding)

PAT sám dovolí jen spojení navázaná zevnitř. Má-li být vnitřní server dostupný z Internetu, nastaví se na routeru **přesměrování portu** (také DNAT, virtuální server): např. vše, co přijde na 203.0.113.5:80, router předá na 192.168.1.20:80. Používá se pro webový server, kamerový systém nebo herní server v domácí síti.

### NAT u poskytovatelů (CGNAT)

Protože veřejných IPv4 adres není dost ani pro poskytovatele, mnoho z nich (hlavně mobilní operátoři) přiděluje zákazníkům adresy ze sdíleného rozsahu **100.64.0.0/10** a překládá je až ve své síti – **carrier-grade NAT**. Zákazník je pak za dvojím překladem a přesměrování portů u něj nefunguje.

## Výhody a nevýhody NAT

Výhody:

- **šetří veřejné adresy** – celá síť vystačí s jednou,
- **skrývá vnitřní strukturu sítě** – zvenku není vidět, kolik počítačů a s jakými adresami za routerem je, a spojení zvenku dovnitř bez přesměrování nejde navázat (NAT ale není náhradou firewallu),
- při změně poskytovatele se mění jen vnější adresa, vnitřní adresy zůstanou.

Nevýhody:

- **porušuje princip přímé komunikace** (end-to-end) – zařízení za NAT nejsou zvenku přímo dosažitelná, což komplikuje servery, peer-to-peer aplikace, hry a internetovou telefonii,
- některé protokoly přenášejí adresy uvnitř dat (FTP v aktivním režimu, SIP, IPsec) a bez zvláštní podpory přes NAT nefungují,
- router musí udržovat tabulku překladů a přepočítávat kontrolní součty – zátěž a zpoždění,
- je obtížnější dohledat, který vnitřní počítač za určitou komunikací stál (provozovatel musí ukládat záznamy překladů).

V **IPv6** je adres dostatek a každé zařízení může mít veřejnou adresu, takže NAT není potřeba; ochranu zajišťuje firewall. Pro komunikaci mezi IPv6 a IPv4 sítěmi slouží přechodový mechanismus **NAT64**.

## Konfigurace na routeru Cisco

PAT celé vnitřní sítě na adresu vnějšího rozhraní:

```
Router(config)# access-list 1 permit 192.168.1.0 0.0.0.255
Router(config)# interface GigabitEthernet0/0
Router(config-if)# ip nat inside
Router(config-if)# interface GigabitEthernet0/1
Router(config-if)# ip nat outside
Router(config-if)# exit
Router(config)# ip nat inside source list 1 interface GigabitEthernet0/1 overload
```

Statický NAT pro server: `ip nat inside source static 192.168.1.20 203.0.113.10`. Aktuální překlady ukáže `show ip nat translations`.

## Otázky k opakování

1. Proč je NAT potřeba? ||privátní adresy se v Internetu nesměrují; NAT je na hranici sítě přeloží na veřejnou adresu a šetří tak veřejné IPv4 adresy||
2. Jaký je rozdíl mezi statickým a dynamickým NAT? ||statický pevně páruje jednu privátní adresu s jednou veřejnou a funguje oběma směry; dynamický přiděluje dočasně adresy z poolu||
3. Jak PAT rozliší spojení více počítačů na jedné veřejné adrese? ||podle čísel portů – každé spojení dostane jiný vnější port, který si router uloží do překladové tabulky||
4. Který druh NAT používá domácí router? ||PAT (NAT overload, maškaráda)||
5. Co je přesměrování portů a kdy ho potřebujeme? ||router předá provoz přicházející na určitý vnější port na zadanou vnitřní adresu; když má být vnitřní server dostupný z Internetu||
6. Jaké jsou nevýhody NAT? ||porušuje přímou komunikaci, komplikuje servery, P2P, VoIP a některé protokoly, zatěžuje router, ztěžuje dohledání odesílatele||
7. Proč se NAT v IPv6 nepoužívá? ||adres je dostatek, každé zařízení může mít veřejnou adresu; ochranu zajišťuje firewall||
