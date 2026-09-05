---
title: "Praktická konfigurace sítě v Cisco Packet Tracer"
order: 15
tags: ["doplněno"]
---

## Cisco Packet Tracer

- Cisco Packet Tracer – bezplatný simulátor síťových zařízení od Cisco Systems určený pro výuku; umožňuje sestavit síťovou topologii z virtuálních routerů, switchů, počítačů a kabelů a nakonfigurovat ji stejnými příkazy jako na reálném Cisco zařízení
- Typická cvičná topologie – dva routery propojené mezi sebou, na každém z nich lokální síť se switchem a několika PC; na takové sestavě se nacvičuje adresace, routování i ověřování funkčnosti sítě

## Režimy Cisco IOS

Cisco IOS (operační systém síťových zařízení) má několik režimů, mezi kterými se přechází příkazy a které poznáš podle znaku na konci řádku:

- `Router>` – **user exec mód** – po připojení k zařízení; jen omezené informační příkazy
- `Router#` – **privileged exec mód** – po zadání `enable`; přístup ke všem informačním a správcovským příkazům
- `Router(config)#` – **globální konfigurační mód** – po zadání `configure terminal` (zkráceně `conf t`) v privileged módu; nastavení celého zařízení
- `Router(config-if)#` – **konfigurace konkrétního rozhraní** – po zadání `interface <název>` v globálním konfiguračním módu

```
Router> enable
Router# configure terminal
Router(config)# interface GigabitEthernet0/0
Router(config-if)#
```

## Nastavení IP adresy na rozhraní routeru

```
Router> enable
Router# configure terminal
Router(config)# interface GigabitEthernet0/0
Router(config-if)# ip address 192.168.1.1 255.255.255.0
Router(config-if)# no shutdown
Router(config-if)# exit
```
- `ip address <adresa> <maska>` – přiřadí rozhraní IP adresu a masku sítě
- `no shutdown` – rozhraní je ve výchozím stavu vypnuté (administratively down), tímto příkazem se zapne; na tenhle krok se často zapomíná a je nejčastější příčinou, proč nově nastavené rozhraní „nefunguje“

## VLAN na switchi

VLAN (Virtual LAN) rozděluje jeden fyzický switch na víc logicky oddělených sítí (např. síť pro studenty a síť pro učitelny na stejném switchi, které mezi sebou napřímo nekomunikují).

```
Switch> enable
Switch# configure terminal
Switch(config)# vlan 10
Switch(config-vlan)# name Studenti
Switch(config-vlan)# exit
Switch(config)# interface FastEthernet0/1
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10
Switch(config-if)# exit
```
- `vlan 10` + `name Studenti` – vytvoří VLAN s číslem 10 a pojmenuje ji
- `switchport access vlan 10` – zařadí konkrétní port switche do této VLAN; zařízení připojené na tomto portu pak patří do sítě VLAN 10

## Základní statické routování

Pokud jsou v síti dvě různé podsítě propojené přes router, musí router (případně i sousední router) vědět, kudy má posílat pakety do vzdálené podsítě.

```
Router(config)# ip route 192.168.2.0 255.255.255.0 10.0.0.2
```
- Zápis říká: „síť 192.168.2.0/24 je dostupná přes další uzel (next-hop) na adrese 10.0.0.2“
- Alternativou ke statickému routování (ruční zápis každé cesty) jsou dynamické směrovací protokoly (např. OSPF, RIP), které si routery vymění automaticky – u jednoduchých cvičných topologií v Packet Traceru se ale běžně používá právě statické routování

## Ověřovací příkazy

```
Router# show ip interface brief
Router# show running-config
Router# ping 192.168.1.2
Router# traceroute 192.168.2.5
```
- `show ip interface brief` – přehledný výpis všech rozhraní, jejich IP adres a stavu (up/down) – první příkaz, kterým se ověřuje, jestli je zařízení nastavené správně
- `show running-config` – zobrazí aktuální (běžící) konfiguraci celého zařízení
- `ping` / `traceroute` – ověří dostupnost vzdáleného zařízení a cestu k němu, stejně jako na běžném počítači

## Uložení konfigurace

```
Router# copy running-config startup-config
```
- Změny provedené v `running-config` platí jen do restartu zařízení; příkaz `copy running-config startup-config` (zkráceně i `write memory` / `wr`) je uloží jako startovní konfiguraci, která se použije i po vypnutí a zapnutí zařízení – v Packet Traceru je dobrým zvykem tenhle krok nezapomínat, jinak se po uložení a znovuotevření souboru `.pkt` nastavení ztratí
