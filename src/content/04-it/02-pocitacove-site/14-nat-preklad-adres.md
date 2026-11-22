---
title: "NAT – překlad síťových adres"
order: 14
---

**Privátní adresy** (10/8, 172.16/12, 192.168/16) se v Internetu nesměrují. **NAT** (Network Address Translation) proto na hranici sítě přepíše privátní adresu odesílatele na veřejnou adresu routeru a u odpovědi zpět. Celá síť tak sdílí jednu veřejnou IPv4 adresu. Viz [privátní adresy](/it/pocitacove-site/12-ipv4-adresovani/#veřejné-a-privátní-adresy).

Překládá hraniční router a vede si **překladovou tabulku**. Rozhraní do LAN je **inside**, do Internetu **outside**.

## Druhy překladu adres

- **Statický NAT** – **1 privátní = 1 veřejná** oběma směry; server je dostupný zvenku, adresy se nešetří.
- **Dynamický NAT** – router půjčuje adresy z **poolu veřejných adres** (m : n); když dojdou, další PC se ven nedostane.
- **PAT** (NAT overload, maškaráda) – **mnoho privátních → jedna veřejná**; spojení rozliší podle **portů**. Tak funguje každý domácí router.

![PAT: dva počítače s privátními adresami posílají ze stejného portu 51000, router je přeloží na jednu veřejnou adresu s různými porty 40001 a 40002](/images/content/it/pocitacove-site/nat/pat.webp)

**Příklad – tabulka PAT** (router 203.0.113.5, server 198.51.100.80:443):

| Vnitřní adresa:port | Přeloženo na |
| --- | --- |
| 192.168.1.10:51000 | 203.0.113.5:40001 |
| 192.168.1.11:51000 | 203.0.113.5:40002 |

Server odpoví na 203.0.113.5:40001 a o privátní adrese neví; router podle tabulky přepíše cíl zpět na 192.168.1.10:51000.

- **Přesměrování portů** (port forwarding) – PAT pustí jen spojení zevnitř; pro server uvnitř se nastaví např. 203.0.113.5:80 → 192.168.1.20:80.
- **CGNAT** – poskytovatelé (hlavně mobilní) překládají zákazníky u sebe (adresy 100.64.0.0/10), takže port forwarding nefunguje.

## Výhody a nevýhody NAT

**Výhody:** **šetří veřejné adresy**, **skryje vnitřní síť** (ale nenahrazuje firewall), při změně ISP se mění jen vnější adresa.

**Nevýhody:** **porušuje end-to-end** (servery, P2P, hry, VoIP zvenku nedosažitelné), protokoly s adresou uvnitř dat (aktivní FTP, SIP, IPsec) potřebují zvláštní podporu, zátěž routeru, těžší dohledání odesílatele.

**IPv6** NAT nepotřebuje – adres je dost a ochranu dělá firewall.

**Konfigurace Cisco** (PAT na adresu vnějšího rozhraní):

```
Router(config)# access-list 1 permit 192.168.1.0 0.0.0.255
Router(config)# interface GigabitEthernet0/0
Router(config-if)# ip nat inside
Router(config-if)# interface GigabitEthernet0/1
Router(config-if)# ip nat outside
Router(config-if)# exit
Router(config)# ip nat inside source list 1 interface GigabitEthernet0/1 overload
```

## Otázky k opakování

1. Proč je NAT potřeba? ||privátní adresy se v Internetu nesměrují; NAT je přeloží na veřejnou adresu a šetří veřejné IPv4||
2. Jaký je rozdíl mezi statickým a dynamickým NAT? ||statický pevně páruje jednu privátní adresu s jednou veřejnou, oběma směry; dynamický půjčuje adresy z poolu||
3. Jak PAT rozliší spojení více počítačů na jedné veřejné adrese? ||podle portů – každé spojení dostane jiný vnější port uložený v překladové tabulce||
4. Který druh NAT používá domácí router? ||PAT (NAT overload)||
5. Co je přesměrování portů? ||router předá provoz z vnějšího portu na vnitřní adresu; potřebné pro server dostupný z Internetu||
6. Jaké jsou nevýhody NAT? ||porušuje přímou komunikaci, komplikuje servery, P2P a VoIP, zatěžuje router||
7. Proč se NAT v IPv6 nepoužívá? ||adres je dostatek; ochranu zajišťuje firewall||
