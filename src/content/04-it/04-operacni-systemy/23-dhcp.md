---
title: "DHCP"
order: 23
source: "osy/DHCP.pdf"
---

IP adresu a související nastavení (maska, brána, DNS) lze počítači přidělit dvěma způsoby:

- **Statické** přidělování – správce zadá nastavení ručně. Každý počítač musí mít jedinečnou adresu, ve větší síti vzniká chaos; vhodné pro servery, tiskárny a routery.
- **Dynamické** přidělování – počítač po startu získá nastavení automaticky protokolem **DHCP**. Windows Server umí přidělovat IPv4 i IPv6.

## Základy DHCP

- **Server DHCP** udržuje databázi dostupných adres a konfigurace; **klient DHCP** je součástí Windows, Linuxu i macOS.
- Adresa se přidělí jako **zapůjčení (lease)** na určitou dobu – přidělení není trvalé.
- **Obor (Scope)** – seznam adres IPv4/IPv6 a související nastavení; **vyloučení (Exclusion)** – část rozsahu, která se klientům nepřidělí (např. adresy serverů).
- **Rezervace** – trvalé přidělení stejné adresy podle MAC adresy síťové karty.
- Server DHCP lze integrovat s **dynamickým DNS**, takže se při přidělení adresy aktualizuje i záznam DNS klienta.

## Zprávy DHCPv4 (DORA)

![DHCP DORA: klient broadcastem DISCOVER, server OFFER, klient REQUEST, server ACK](/images/content/it/pocitacove-site/protokoly-tcp-ip/dora.webp)

1. **DHCP Discover** – klient po startu vyšle broadcast.
2. **DHCP Offer** – servery nabídnou zapůjčení adresy.
3. **DHCP Request** – klient přijme první nabídku.
4. **DHCP Acknowledgment** – server potvrdí.

Zapůjčení se **obnovuje** při restartu nebo po uplynutí 50 % doby (při neúspěchu znovu po 87,5 %). Nedostupnost serveru většinou nebrání přihlášení.

**Automatická konfigurace (APIPA):** když DHCP server nedostupný a zapůjčení vypršelo, klient si vybere adresu z rozsahu **169.254.0.0/16**, před použitím ji ověří pomocí ARP a každých 5 minut zkouší kontaktovat DHCP server.

## Zabezpečení DHCP

DHCP není ze své podstaty bezpečné: kdokoli v síti může vyvolat **DoS** (vyžádá si všechny adresy) nebo zahltit DNS dynamickými aktualizacemi. Pomáhá omezit fyzický přístup k síti a šifrovat Wi-Fi (WPA2/WPA3). Protokol viz i [protokoly TCP/IP](/it/pocitacove-site/03-protokoly-tcp-ip/#dhcp-dynamic-host-configuration-protocol).

## Otázky k opakování

1. Jaký je rozdíl mezi statickým a dynamickým přidělováním adres? ||statické zadá správce ručně, dynamické přidělí DHCP server automaticky||
2. Co je zapůjčení (lease), obor a vyloučení? ||lease je časově omezené přidělení adresy; obor je seznam adres k přidělování; vyloučení adresy, které se nepřidělí||
3. Co je rezervace? ||trvalé přidělení stejné adresy podle MAC adresy||
4. Popište čtyři zprávy při získání adresy. ||Discover, Offer, Request, Acknowledgment||
5. Co udělá klient, když DHCP server není dostupný? ||použije automatickou konfiguraci APIPA z rozsahu 169.254.0.0/16||
6. Jaká jsou rizika DHCP? ||vyčerpání adres (DoS) a zahlcení DNS dynamickými aktualizacemi||
