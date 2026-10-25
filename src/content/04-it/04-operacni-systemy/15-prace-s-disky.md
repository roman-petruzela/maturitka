---
title: "Práce s disky"
order: 15
source: "osy/práce_s_disky.pdf"
---
Práce s disky a oddíly v **Linuxu**. Disky jsou v adresáři `/dev`: `/dev/sda`, `/dev/sdb`… (SATA, USB), `/dev/nvme0n1` (NVMe SSD); oddíly mají za názvem číslo — `/dev/sdb1` je první oddíl druhého disku. Přehled souborových systémů je na stránce [Souborové systémy](/it/operacni-systemy/28-souborove-systemy/).

## Informace o discích

- `df -h` — informace o oddílech (velikost, volné místo, užité místo, k jaké složce jsou připojeny)
- `fdisk -l` — informace o pevných discích (počet sektorů, počet sektorů na stopě, velikost sektorů, kapacita, oddíly na daném disku). Obecně vypíše tabulku rozdělení disků.
- `lsblk` — přehledný strom disků a jejich oddílů

## Konzole fdisk

`fdisk /dev/sdb` spustí konzoli fdisk pro konkrétní pevný disk.

V konzoli fdisk pro nás budou nejdůležitější následující příkazy:

- `d` – smaže diskový oddíl
- `m` – vypíše nápovědu
- `n` – vytvoří nový oddíl
- `p` – vypíše tabulku rozdělení disku
- `q` – ukončí program bez uložení změn
- `w` – uloží tabulku rozdělení disku a ukončí program

Změny se na disk zapíšou až příkazem `w` — do té doby lze vše zrušit příkazem `q`.

## Práce s diskovými oddíly

- `mkfs -t ext4 /dev/sdb1` — zformátuje oddíl sdb1 souborovým systémem ext4
- `mount /dev/sdb1 /Slozka1` — připojí diskový oddíl ke složce Slozka1, toto ale platí jen do prvního restartu
- `umount /dev/sdb1` — odpojí diskový oddíl
- adresář `/dev` — položky, které můžu namountovat (připojit), např. dvd, cdrom, fb
- `mount /dev/dvd /media` — připojí dvd do adresáře media (adresář media je pro tyto účely určen)
- `/etc/fstab` — soubor, ve kterém je zapsáno, co se automaticky mountuje (připojuje) ke kterému adresáři
- `blkid /dev/sdb1` — zjistí UUID zařízení sdb1, toto UUID mohu použít pro zápis do souboru fstab

## Zápis v souboru fstab

Každý řádek má šest sloupců: co se připojuje, kam, souborový systém, volby, zálohování (dump) a kontrola při startu.

```
UUID=…  /Slozka1  ext4  defaults    0  0
UUID=…  /Slozka1  ext4  user,users  0  0
```

| Sloupec | Hodnota | Význam |
| --- | --- | --- |
| zařízení | `UUID=…` | oddíl určený svým UUID (z `blkid`) |
| přípojný bod | `/Slozka1` | složka, kam se oddíl připojí |
| souborový systém | `ext4` | typ souborového systému |
| volby | `defaults` | výchozí nastavení |
| | `user,users` | `user` — může připojit i běžný uživatel, `users` — může odpojit kdokoliv |
| dump | `0` | nezálohuj |
| kontrola | `0` | nekontroluj při startu systému |

Zápis se ověří příkazem `sudo mount -a` (připojí vše z fstab) — chyba v fstab může zablokovat start systému.
