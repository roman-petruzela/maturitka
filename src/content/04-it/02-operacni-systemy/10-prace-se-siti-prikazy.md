---
title: "Práce se sítí (příkazy)"
order: 10
source: "osy/práce se sítí.docx"
---
## Nastavení sítě

__ip__ – nejdůležitější a nejobsáhlejší příkaz pro správu síťových informací

__ping__ – příkaz pro diagnostiku síťového připojení

Konfigurace síťových rozhraní se ukládá do souboru __\*\.yaml__ , který je ve složce __/etc/netplan__

[https://people\.ubuntu\.com/~slyon/netplan\-docs/examples/](https://people.ubuntu.com/~slyon/netplan-docs/examples/)

testování konfigurace: __sudo netplan try__

aplikování změn: __sudo netplan apply__

## Instalace balíčků

__apt –__ příkaz pro instalaci balíčků SW

apt list \-\-installed

apt search

apt update

apt install

apt purge

## Github

git clone <URL\_adresa\_repozitare>

wget <Raw\_URL\_adresa> pro stahování jednoho souboru

https://github\.com/luciopanepinto/pacman\.git
