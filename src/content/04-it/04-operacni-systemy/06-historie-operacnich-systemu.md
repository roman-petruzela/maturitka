---
title: "Historie operačních systémů"
order: 6
source: "osy/Historie_OS.pdf"
---

**Operační systém** je základní software, který řídí hardware a poskytuje platformu pro programy.

## Typy operačních systémů

| Dělení | Druhy |
| --- | --- |
| **podle počtu uživatelů** | **jednouživatelské** (DOS, Windows 95) × **víceuživatelské** (Unix, Linux, Windows Server) |
| **podle počtu úloh** | **jednoúlohové** (DOS) × **víceúlohové** – multitasking (kooperativní, preemptivní) |
| **podle určení** | **desktopové** (Windows, macOS, Linux), **serverové** (Windows Server, Linux), **mobilní** (Android, iOS), **vestavěné** (embedded; routery, chytré zařízení), **systémy reálného času** (RTOS; odezva v daném čase, průmysl) |
| **podle licence** | proprietární (Windows, macOS) × svobodné (Linux) – viz [licence](/it/operacni-systemy/08-licence-a-autorsky-zakon/) |

## Vývoj

```timeline
{ "title": "Milníky operačních systémů",
  "items": [
    { "name": "GM-NAA I/O – první rozšířenější OS", "dates": "1956" },
    { "name": "Multics – víceuživatelský OS", "dates": "1964" },
    { "name": "Unix (Bell Labs), později přepsán do jazyka C", "dates": "1969" },
    { "name": "CP/M – OS pro první osobní počítače", "dates": "1974" },
    { "name": "Macintosh OS – GUI pro masy", "dates": "1984" },
    { "name": "Windows 1.0 (grafická nadstavba nad DOSem)", "dates": "1985" },
    { "name": "Linux (Linus Torvalds)", "dates": "1991" },
    { "name": "Windows 95", "dates": "1995" },
    { "name": "iOS (iPhone)", "dates": "2007" },
    { "name": "Android (první telefon)", "dates": "2008" }
  ] }
```

- **50.–60. léta** – systémy pro konkrétní stroj, **Multics** a z něj **Unix**.
- **70. léta** – první osobní počítače, **CP/M**.
- **80. léta** – **grafické rozhraní (GUI)**: Macintosh, Windows.
- **90. léta** – multitasking, více uživatelů, bezpečnostní funkce.
- **Dnes** – mobilní OS (iOS, Android), cloud, virtualizace.

## Linux

Unixové jádro vytvořil **Linus Torvalds** (**1991**). Je **svobodný a otevřený** (zdrojový kód je veřejný), multiplatformní (PC, servery, mobily, embedded), stabilní a zdarma.

**Distribuce** = jádro Linuxu + správce balíčků + grafické prostředí + aplikace: **Ubuntu** (nejpopulárnější, přívětivá), **Debian** (stabilní, základ mnoha dalších), **Linux Mint**, **Red Hat Enterprise Linux** (podniky), **Fedora**. Podrobně: [Linux – distribuce](/it/operacni-systemy/01-os-linux-distribuce-graficky-a-textovy-rezim/).

## Otázky k opakování

1. Jak se dělí operační systémy? ||podle počtu uživatelů, počtu úloh, určení (desktop, server, mobilní, vestavěný, reálného času), licence||
2. Čím se liší jednouživatelský a víceuživatelský OS? ||víceuživatelský umí oddělit účty a práva více uživatelů (Unix, Linux, Windows Server)||
3. Který OS vznikl z Multics a kdo vytvořil Linux? ||Unix; Linus Torvalds (1991)||
4. Co je Linuxová distribuce? ||jádro Linuxu + správce balíčků, grafické prostředí a aplikace||
5. Co je systém reálného času? ||OS, který zaručí odezvu v daném čase (průmysl, řízení)||
