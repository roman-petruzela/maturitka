---
title: "Vzdálený přístup — Telnet, SSH, RDP"
order: 205
---

**Vzdálený přístup** umožňuje ovládat počítač nebo server přes síť, jako by u něj člověk seděl. Správce tak spravuje servery v datacentru nebo počítače uživatelů bez fyzické přítomnosti. Podrobně o SSH a přihlašování klíčem je stránka [SSH — vzdálený přístup a autentizace klíčem](/it/operacni-systemy/50-ssh-vzdaleny-pristup-a-autentizace-klicem/).

## Srovnání

| Protokol | Port | Rozhraní | Šifrování | Typické použití |
| --- | --- | --- | --- | --- |
| **Telnet** | TCP 23 | textové (příkazová řádka) | **ne** — vše včetně hesla jde po síti čitelně | dnes jen starší síťová zařízení a testování spojení |
| **SSH** | TCP 22 | textové, i přenos souborů (SCP, SFTP) a tunelování | ano | správa linuxových serverů a síťových prvků |
| **RDP** | TCP 3389 (i UDP) | grafické — celá plocha Windows | ano | vzdálená plocha Windows, terminálové servery |
| **VNC** | TCP 5900 | grafické | podle implementace, často slabé | vzdálená plocha napříč systémy |

## Telnet

Nejstarší protokol pro vzdálenou příkazovou řádku (1969). Klient se připojí k serveru a posílá mu příkazy jako text. **Nešifruje nic** — kdo zachytí provoz v síti, přečte si i přihlašovací jméno a heslo. Proto byl nahrazen protokolem SSH a na nových zařízeních se nepovoluje. Klient Telnet se dodnes hodí jako diagnostický nástroj: `telnet server 80` ověří, zda je na serveru otevřený port.

## SSH

**Secure Shell** šifruje celé spojení a ověřuje identitu serveru (otisk klíče serveru si klient pamatuje a upozorní na změnu). Uživatel se přihlásí heslem nebo — bezpečněji — **párem klíčů** (soukromý klíč zůstává u uživatele, veřejný je na serveru).

```bash
ssh uzivatel@192.168.1.10          # přihlášení
scp soubor.txt uzivatel@server:/tmp/  # kopírování souboru
```

Ve Windows je klient i server OpenSSH součástí systému; na síťových prvcích Cisco se SSH zapíná místo Telnetu (`transport input ssh`) — viz [příkazy Cisco IOS](/it/pocitacove-site/21-zakladni-prikazy-cisco-ios-pro-spravu-smerovacu-a-prepinacu/).

## RDP

**Remote Desktop Protocol** od Microsoftu přenáší celou **grafickou plochu** Windows: na klienta jde obraz, na server pohyby myši a klávesnice. Klientem je aplikace *Připojení ke vzdálené ploše* (`mstsc`). Ve Windows Pro a Windows Server se zapíná v *Nastavení → Systém → Vzdálená plocha*; na Windows Serveru s rolí **Remote Desktop Services** může pracovat více uživatelů najednou (terminálový server) — viz [Windows Server](/it/operacni-systemy/52-windows-server-verze-instalace-a-role/).

**Zabezpečení:** RDP ani SSH by neměly být přímo dostupné z internetu — přístup se omezuje na vnitřní síť nebo **VPN**, používá se **ověřování na úrovni sítě** (NLA), silná hesla nebo klíče a vícefaktorové ověření.
