---
title: "Databáze I – teorie"
order: 1
source: "MATURITA HADR/IT/DAT_I.pdf"
---
Teorie

Střední Průmyslová škola ÚSTÍ NAD LABEM DAT I – Ladislav Kožej

## Historie

První pravděpodobně hliněné tabulky následované papyrem. :)

### Otevřené soubory

Nejčastěji - jedna “tabulka” uložena v jednom textovém nebo binárním souboru.

Soubory pro čtení lidmi.

CSV soubory - comma (space) separated values

Soubory pro čtení stroji.

```
id jméno tým
```

- `1 Amy Modří`

- `2 Bob Červení`

- `3 Chuck Modří`

- `4 Dick Modří`

- `5 Ethel Červení`

- `6 Fred Modří`

- `7 Gilly Modří`

- `8 Hank Červení`

### Hierarchický model

Data jsou organizována do stromové struktury. Každý záznam představuje uzel ve stromové struktuře, vzájemný vztah mezi záznamy je typu rodič/potomek. Nalezení dat v hierarchické databázi vyžaduje navigaci přes záznamy směrem na potomka, zpět na rodiče nebo do strany na dalšího potomka. Největšími nevýhodami hierarchického uspořádání je složitá operace vkládání a rušení záznamů a v některých případech i nepřirozená organizace dat.

### Síťový model

Síťový model dat je v podstatě zobecněním hierarchického modelu, který doplňuje o mnohonásobné vztahy (sety). Tyto sety propojují záznamy různého či stejného typu, přičemž spojení může být realizováno na jeden nebo

více záznamů. Přístup k propojeným záznamům je přímý bez dalšího vyhledávání, k dispozici jsou operace: nalezení záznamu podle klíče, posun na prvního potomka v dílčím setu, posun stranou na dalšího potomka v setu, posun nahoru z potomka na jeho rodiče v jiném setu. Nevýhodou síťové databáze je zejména nepružnost a

obtížná změna její struktury. Relační model Objektově orientovaný model Objektově-relační model

Důležité databázové pojmy Obecné pojmy REDUNDANCE Opakování hodnot. Příklad ze sítí - pozitivní. V databázích se snažíme vyvarovat. KONZISTENCE Jedna hodnota má jeden výnam. Maximalizujeme nerozporuplnost. INTEGRITA Souvislost dat. Integritní omezení.

Základní pojmy Entita

Atribut

Záznam

Datové typy

Celočíselné

Plovoucí desetinná čárka

Desetinná čísla

Datum a čas

Řetězce

Binární data

Integritní omezení

- Entitní

- Doménové

PK

UNIQUE

NOT NULL

AUTO_INCREMENT

DEFAULT

CHECK

UNSIGNED ZEROFILL
