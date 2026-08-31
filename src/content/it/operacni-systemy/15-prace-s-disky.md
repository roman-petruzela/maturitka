---
title: "Práce s disky"
order: 15
source: "osy/práce_s_disky.pdf"
---
df –h _informace o oddílech (velikost, volné místo, užité místo, k jaké složce jsou připojeny)_

fdisk –l _informace o pevných discích (počet sektorů, počet sektorů na stopě, velikost sektorů, kapacita, oddíly na daném disku). Obecně vypíše tabulku rodělení disků._

# Konzole fdisk

fdisk /dev/sdb _spustí konzoli fdisk pro konkrétní pevný disk_

V konzoli fdisk pro nás budou nejdůležitější následující příkazy

- d – smaže diskový oddíl

- m – vypíše nápovědu

- n – vytvoří nový oddíl

- p – vypíše tabulku rozdělení disku

- q – ukončí program bez uložení změn

- w – uloží tabulku rozdělení disku a ukončí program

# Práce s diskovými oddíly

mkfs –t _ext4 /dev/sdb1 zformátuje oddíl sdb1 souborovým systémem ext4_

mount /dev/sdb1 /Slozka1 _připojí diskový oddíl ke složce Slozka1, toto ale platí jen do prvního restartu_

umount /dev/sdb1 _odpojí diskový oddíl_

adresář /dev _položky, které můžu namountovat (připojit), např. dvd, cdrom, fb_

mount /dev/dvd /media _připojí dvd do adresáře media (adresář media je pro tyto účely určen)_ /etc/fstab _soubor, ve kterém je zapsáno co se automaticky mountuje (připojuje) ke kterému adresáři_

blkid /dev/sdb1 _zjistí UUID zařízení sdb1, toto UUID mohu použít pro zápis do souboru fstab_

## **Zápis v souboru fstab:**

|UUID /Slozka1|ext4|defaults<br>0 0|||
|---|---|---|---|---|
|||výchozí nastavení|nezálohu|j nekontroluj při startu systému|
|UUID /Slozka1|ext4|user,users<br>0 0|||
|||může připojit i běžný|uživatel,|může odpojit kdokoliv|
