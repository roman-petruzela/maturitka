---
title: "NAT – překlad síťových adres"
order: 14
---

**Privátní adresy** (10/8, 172.16/12, 192.168/16) se v Internetu nesměrují – opakují se v mnoha sítích. **NAT** (Network Address Translation) proto na hranici sítě přepíše privátní adresu odesílatele na veřejnou adresu routeru a u odpovědi zpět. Celá síť tak sdílí jednu veřejnou IPv4 adresu. Privátní adresy: [IPv4 adresování](/it/pocitacove-site/12-ipv4-adresovani/#veřejné-a-privátní-adresy).

## Jak NAT funguje

Překládá hraniční router (domácí Wi-Fi router, firemní router, firewall). Rozhraní do LAN = **inside**, do Internetu = **outside**. Router si vede **překladovou tabulku**.

Terminologie (podle Cisco):

| Pojem | Význam | Příklad |
| --- | --- | --- |
| inside local | privátní adresa vnitřního PC | 192.168.1.10 |
| inside global | veřejná adresa, pod kterou PC vystupuje | 203.0.113.5 |
| outside global | adresa serveru v Internetu | 198.51.100.80 |

## Druhy překladu adres

### Statický NAT

**1 privátní = 1 veřejná** (1 : 1), oběma směry → server je dostupný zvenku (web, pošta). Adresy nešetří.

### Dynamický NAT

Router má **pool veřejných adres** a půjčuje je počítačům, které komunikují (m : n). Když dojdou, další PC se ven nedostane. Zvenku dovnitř nelze.

### PAT (NAT overload, NAPT, maškaráda)

**Mnoho privátních → jedna veřejná** (n : 1). Spojení rozliší podle **portů** – router přepíše adresu i zdrojový port a uloží si to. Tisíce spojení na jedné adrese. Tak funguje každý domácí router; v Linuxu **maškaráda**.

![PAT: dva počítače s privátními adresami posílají ze stejného portu 51000, router je přeloží na jednu veřejnou adresu s různými porty 40001 a 40002](/images/content/it/pocitacove-site/nat/pat.webp)

**Příklad – překladová tabulka PAT.** Dva PC ze sítě 192.168.1.0/24 na server 198.51.100.80:443, router 203.0.113.5.

| Vnitřní adresa:port | Přeloženo na | Cíl |
| --- | --- | --- |
| 192.168.1.10:51000 | 203.0.113.5:40001 | 198.51.100.80:443 |
| 192.168.1.11:51000 | 203.0.113.5:40002 | 198.51.100.80:443 |

1. PC .10 pošle paket z portu 51000 na server.
2. Router přepíše zdroj na 203.0.113.5:40001, zapíše do tabulky, pošle ven.
3. Server odpoví na 203.0.113.5:40001 – o privátní adrese neví.
4. Router podle tabulky přepíše cíl zpět na 192.168.1.10:51000 a předá.

Stejný vnitřní port 51000 router odlišil různými vnějšími porty.

### Přesměrování portů (port forwarding)

PAT pustí jen spojení navázaná zevnitř. Pro server uvnitř se nastaví **přesměrování portu** (DNAT, virtuální server): např. 203.0.113.5:80 → 192.168.1.20:80. Web, kamery, herní server.

### NAT u poskytovatelů (CGNAT)

Poskytovatelé (hlavně mobilní) dávají zákazníkům adresy z **100.64.0.0/10** a překládají je u sebe – **carrier-grade NAT**. Zákazník je za dvojím NAT a port forwarding mu nefunguje.

## Výhody a nevýhody NAT

Výhody:

- **šetří veřejné adresy**,
- **skryje vnitřní síť** – zvenku není vidět, kolik PC tam je; spojení zvenku bez přesměrování nejde (ale NAT nenahrazuje firewall),
- při změně ISP se mění jen vnější adresa.

Nevýhody:

- **porušuje end-to-end** – zařízení nejsou zvenku dosažitelná (servery, P2P, hry, VoIP),
- protokoly s adresou uvnitř dat (aktivní FTP, SIP, IPsec) potřebují zvláštní podporu,
- zátěž routeru (tabulka, přepočet součtů),
- těžší dohledat, kdo za komunikací stál.

**IPv6** NAT nepotřebuje – adres je dost, ochranu dělá firewall. Mezi IPv6 a IPv4 slouží **NAT64**.

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

Statický NAT: `ip nat inside source static 192.168.1.20 203.0.113.10`. Překlady: `show ip nat translations`.

## Otázky k opakování

1. Proč je NAT potřeba? ||privátní adresy se v Internetu nesměrují; NAT je na hranici sítě přeloží na veřejnou adresu a šetří tak veřejné IPv4 adresy||
2. Jaký je rozdíl mezi statickým a dynamickým NAT? ||statický pevně páruje jednu privátní adresu s jednou veřejnou a funguje oběma směry; dynamický přiděluje dočasně adresy z poolu||
3. Jak PAT rozliší spojení více počítačů na jedné veřejné adrese? ||podle čísel portů – každé spojení dostane jiný vnější port, který si router uloží do překladové tabulky||
4. Který druh NAT používá domácí router? ||PAT (NAT overload, maškaráda)||
5. Co je přesměrování portů a kdy ho potřebujeme? ||router předá provoz přicházející na určitý vnější port na zadanou vnitřní adresu; když má být vnitřní server dostupný z Internetu||
6. Jaké jsou nevýhody NAT? ||porušuje přímou komunikaci, komplikuje servery, P2P, VoIP a některé protokoly, zatěžuje router, ztěžuje dohledání odesílatele||
7. Proč se NAT v IPv6 nepoužívá? ||adres je dostatek, každé zařízení může mít veřejnou adresu; ochranu zajišťuje firewall||
