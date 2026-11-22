---
title: "Základní příkazy Cisco IOS pro správu směrovačů a přepínačů"
order: 21
source: "IT/RTR_CMD-2-CZ-_29_.pdf"
---

Přehled nejpoužívanějších příkazů **Cisco IOS** pro směrovače a přepínače. Praktický postup na cvičné topologii: [Cisco Packet Tracer](/it/pocitacove-site/22-cisco-packet-tracer/).

## Cisco IOS, paměti a start zařízení

**Cisco IOS** (Internetwork Operating System) je operační systém směrovačů a přepínačů Cisco, ovládá se z příkazové řádky (**CLI**). K zařízení se připojíme **konzolovým** kabelem, po základní konfiguraci i vzdáleně přes Telnet nebo bezpečněji **SSH**.

| Paměť | Obsah |
| --- | --- |
| **ROM** | POST (test hardwaru), bootstrap (zavaděč), ROM monitor |
| **Flash** | obraz IOS; u přepínačů i databáze VLAN (`vlan.dat`) |
| **NVRAM** | **startup-config** – konfigurace použitá při startu |
| **RAM** | běžící IOS, **running-config**, směrovací a ARP tabulky |

**Start:** POST → bootstrap najde IOS (ve Flash) a zavede ho do RAM → IOS načte **startup-config** z NVRAM.

Každý konfigurační příkaz platí **okamžitě**, ale ukládá se jen do **running-config** v RAM. Aby změna přežila restart, je nutné ji uložit:

```
copy running-config startup-config
```

**Práce v CLI:** příkazy lze zkrátit (`sh run`), **Tab** je doplní, **?** vypíše nápovědu, `exit` vrací o úroveň zpět, `end` nebo Ctrl+Z do privilegovaného režimu.

## Konfigurační režimy

| Prompt | Režim | Přechod |
| --- | --- | --- |
| `Router>` | uživatelský EXEC | po připojení |
| `Router#` | privilegovaný EXEC | `enable` |
| `Router(config)#` | globální konfigurace | `configure terminal` |
| `Router(config-if)#` | konfigurace rozhraní | `interface <název>` |
| `Router(config-line)#` | konfigurace linky | `line console 0`, `line vty 0 4` |

## Základní příkazy

**Zjištění stavu:**

```
show version               ! verze IOS, paměti
show running-config        ! aktuální konfigurace (RAM)
show startup-config        ! uložená konfigurace (NVRAM)
show ip interface brief    ! stav a IP adresy rozhraní
show ip route              ! směrovací tabulka
```

**Jméno, rozhraní a hesla:**

```
hostname Brno
interface GigabitEthernet0/0
 ip address 192.168.1.1 255.255.255.0
 no shutdown                       ! rozhraní je ve výchozím stavu vypnuté
enable secret cisco                ! heslo do privilegovaného režimu (hash)
line console 0
 password class
 login
line vty 0 4                       ! vzdálený přístup
 password class
 login
```

**SSH** (místo Telnetu): `ip domain-name skola.cz` → `crypto key generate rsa` → `ip ssh version 2` → na `line vty 0 4` příkaz `transport input ssh`.

**Sériové rozhraní:** na straně **DCE** je nutné nastavit hodiny: `clock rate 64000`.

## Směrování

```
ip route 192.168.2.0 255.255.255.0 10.0.0.2    ! statická trasa
ip route 0.0.0.0 0.0.0.0 10.0.0.1              ! výchozí trasa
router rip
 version 2
 network 192.168.1.0                           ! dynamické směrování RIP
router ospf 1
 network 192.168.1.0 0.0.0.255 area 0          ! OSPF
```

## Přístupové seznamy (ACL)

Vyhodnocují se shora dolů a na konci platí implicitní **deny all**. ACL se uplatní až po přiřazení k rozhraní.

- **Standardní** (1–99) filtrují podle zdrojové IP, **rozšířené** (100–199) i podle cíle, protokolu a portu.

```
access-list 1 deny 200.1.1.0 0.0.0.255
access-list 1 permit any
interface GigabitEthernet0/0
 ip access-group 1 in
```

## DHCP a NAT

```
ip dhcp excluded-address 192.168.1.1 192.168.1.10
ip dhcp pool LAN
 network 192.168.1.0 255.255.255.0
 default-router 192.168.1.1
 dns-server 8.8.8.8
```

NAT (PAT) vnitřní sítě na adresu vnějšího rozhraní: příkazy `ip nat inside` / `ip nat outside` na rozhraních a `ip nat inside source list 1 interface Gi0/1 overload`. Viz [NAT](/it/pocitacove-site/14-nat-preklad-adres/).

## Přepínače

Základní práce je stejná jako u směrovačů.

```
vlan 10
 name Studenti
interface FastEthernet0/1
 switchport mode access
 switchport access vlan 10         ! port do VLAN 10
interface GigabitEthernet0/1
 switchport mode trunk             ! více VLAN po jedné lince
show vlan brief
show mac-address-table
```

Přístup ke správě přepínače: rozhraní VLAN s IP adresou (`interface vlan 99`, `ip address …`) a `ip default-gateway`. Vysvětlení VLAN a trunků: [přepínání, STP a VLAN](/it/pocitacove-site/09-prepinani-stp-a-vlan/).

## Záloha a obnova hesla

- Konfiguraci a IOS lze zálohovat na **TFTP** server (`copy running-config tftp`).
- Při zapomenutém hesle je potřeba **fyzický přístup**: zařízení se spustí bez načtení startup-config (u směrovače `confreg 0x2142` v ROM monitoru), v privilegovaném režimu se uložená konfigurace zkopíruje do běžící, nastaví se nové heslo a konfigurace se uloží; nakonec se vrátí `config-register 0x2102`.

## Otázky k opakování

1. Které čtyři paměti používá zařízení Cisco a co obsahují? ||ROM (POST, bootstrap), Flash (IOS), NVRAM (startup-config), RAM (běžící IOS a running-config)||
2. Čím se liší running-config a startup-config? ||running-config je aktuální konfigurace v RAM, startup-config uložená v NVRAM, která se načte při startu||
3. Jak uložíte změny, aby přežily restart? ||`copy running-config startup-config`||
4. Jak se přechází mezi režimy CLI? ||`enable` do privilegovaného, `configure terminal` do globální konfigurace, `interface …` do konfigurace rozhraní||
5. Proč nově nastavené rozhraní často „nefunguje“? ||rozhraní je ve výchozím stavu vypnuté, je nutné zadat `no shutdown`||
6. Jak zapíšete statickou a výchozí trasu? ||`ip route <síť> <maska> <next hop>`; výchozí `ip route 0.0.0.0 0.0.0.0 <next hop>`||
