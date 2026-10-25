---
title: "Práce se sítí (příkazy)"
order: 10
source: "osy/práce se sítí.docx"
---
Příkazy pro síť a instalaci softwaru v **Linuxu** (Ubuntu). Síťové příkazy Windows (`ipconfig`, `ping`, `tracert`, `nslookup`…) jsou na stránce [Příkazový řádek (cmd)](/it/operacni-systemy/09-prikazovy-radek-cmd/#síťové-příkazy).

## Nastavení sítě

| Příkaz | Význam |
| --- | --- |
| `ip` | nejdůležitější a nejobsáhlejší příkaz pro správu síťových informací |
| `ip a` (`ip address`) | IP adresy síťových rozhraní |
| `ip r` (`ip route`) | směrovací tabulka, výchozí brána |
| `ip link set enp0s3 up` | zapnutí rozhraní |
| `ping` | příkaz pro diagnostiku síťového připojení (ukončí se *Ctrl + C*) |
| `traceroute`, `tracepath` | cesta paketu přes směrovače |
| `ss -tulpn` | naslouchající porty a programy |
| `resolvectl status`, `dig`, `nslookup` | DNS servery a dotazy na DNS |
| `hostname` | název počítače |

Konfigurace síťových rozhraní se ukládá do souboru **`*.yaml`**, který je ve složce **`/etc/netplan`**. Příklady konfigurací: [https://people.ubuntu.com/~slyon/netplan-docs/examples/](https://people.ubuntu.com/~slyon/netplan-docs/examples/)

Příklad statické adresy:

```yaml
network:
  version: 2
  ethernets:
    enp0s3:
      addresses: [192.168.1.20/24]
      routes:
        - to: default
          via: 192.168.1.1
      nameservers:
        addresses: [192.168.1.1, 8.8.8.8]
```

- testování konfigurace: `sudo netplan try` (když se změna do 120 sekund nepotvrdí, vrátí se původní nastavení)
- aplikování změn: `sudo netplan apply`

## Instalace balíčků

`apt` — příkaz pro instalaci balíčků SW (z repozitářů distribuce; vyžaduje `sudo`):

| Příkaz | Význam |
| --- | --- |
| `apt list --installed` | seznam nainstalovaných balíčků |
| `apt search název` | vyhledání balíčku |
| `apt update` | stažení aktuálního seznamu balíčků z repozitářů |
| `apt upgrade` | aktualizace nainstalovaných balíčků |
| `apt install název` | instalace balíčku |
| `apt remove název` | odinstalace balíčku |
| `apt purge název` | odinstalace balíčku včetně jeho konfiguračních souborů |

## GitHub

- `git clone <URL_adresa_repozitare>` — stáhne celý repozitář, např. `git clone https://github.com/luciopanepinto/pacman.git`
- `wget <Raw_URL_adresa>` — stažení jednoho souboru
