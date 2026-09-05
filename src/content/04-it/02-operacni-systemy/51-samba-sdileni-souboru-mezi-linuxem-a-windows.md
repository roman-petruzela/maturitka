---
title: "Samba — sdílení souborů mezi Linuxem a Windows"
order: 203
tags: ["doplněno"]
---

_Doplněný obsah — rozšiřuje ŠVP kapitolu "Operační systém Linux" (3. ročník) o sdílení souborů mezi Linuxem a Windows._

## Co je Samba

**Samba** je svobodný software, který na Linuxu (nebo jiném unixovém systému) implementuje protokol **SMB/CIFS** — tedy stejný protokol, jaký používá Windows pro sdílení souborů a tiskáren v síti. Díky tomu může linuxový server nabízet stanicím s Windows roli:

- **souborového serveru** (file server) — sdílené složky dostupné jako síťový disk
- **tiskového serveru** (print server)
- **řadiče domény** (v roli podobné Active Directory)

Bez Samby by Windows počítač neuměl s nasdílenou složkou na Linuxu vůbec komunikovat (Linux běžně sdílí přes NFS, který Windows nativně nezná).

## Základní konfigurace

Konfigurace Samby je v souboru `/etc/samba/smb.conf`. Před úpravou je vhodné si soubor zazálohovat. Nasdílená složka se definuje jako sekce s vlastním názvem:

```ini
[pokus]
path = /srv/pokus
browsable = yes
writeable = yes
guest ok = yes
read only = no
force user = nobody
```

- `path` — cesta ke složce na disku, kterou sdílíme
- `browsable` — zda se sdílená složka zobrazí ve výpisu dostupných sdílení
- `writeable` / `read only` — zda mohou uživatelé do složky i zapisovat, nebo jen číst
- `guest ok` — zda se lze připojit bez zadání hesla (jako anonymní/host)
- `force user` — pod jakým systémovým uživatelem se budou provádět operace se soubory bez ohledu na to, kdo se připojil (řeší situaci, kdy nechceme řešit vlastníka/oprávnění pro každého síťového uživatele zvlášť)

Po úpravě konfigurace je potřeba službu restartovat (`systemctl restart smbd`) a ověřit, že běží. Pokud je na serveru zapnutý firewall, musí povolovat provoz Samby (např. `ufw allow samba`).

Ze strany klienta se na Windows sdílená složka připojí jako síťový disk běžným způsobem. Na Linuxu je potřeba mít nainstalovaný balíček `cifs-utils`, aby šlo SMB sdílení připojit (`mount -t cifs`).

## Cvičení

1. Na Ubuntu serveru nainstalujte službu Samba.
2. Vytvořte složku ke sdílení `/srv/pokus`. Jaké přístupové oprávnění k ní nastavíte, aby do ní měli přístup všichni (644 ani vlastnictví root nebudou vhodné)?
3. Nasdílejte složku `/srv/pokus` v `/etc/samba/smb.conf` — nastavte `path`, `browsable`, `writeable`, `guest ok`, `read only` a `force user`.
4. Restartujte službu Samba a ověřte, že běží (`systemctl`). Zkontrolujte, že firewall Sambu povoluje (`ufw`).
5. Pro namapování sdílené složky z Linuxu (Xubuntu) budete potřebovat balíček `cifs-utils`. Pokud Xubuntu není připojené k internetu, přidejte mu novou síťovou kartu (NAT), připojte ho k internetu, nainstalujte `cifs-utils` a zkuste složku namapovat.
