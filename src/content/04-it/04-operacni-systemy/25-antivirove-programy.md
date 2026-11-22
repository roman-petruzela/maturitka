---
title: "Antivirové programy"
order: 25
source: "osy/antivirové programy.pdf"
---

**Antivirus** chrání před [malwarem](/it/operacni-systemy/26-malware/): hledá ho, brání spuštění, nakažené soubory vyléčí, izoluje nebo smaže. Dnes chrání i před podvodnými weby a e-maily (**antimalware**, bezpečnostní balík).

## Druhy ochrany

| Druh | Vlastnosti |
| --- | --- |
| **jednoúčelový antivirus** | odstraní jeden konkrétní virus, není plnohodnotná ochrana |
| **online skener** | prohledá disk z prohlížeče, vždy aktuální databáze, bez rezidentní ochrany; „druhý názor“ |
| **on-demand skener** | skenuje na požádání nebo plánovaně |
| **on-access skener** (rezidentní štít) | neustále kontroluje spouštěné a ukládané soubory ještě před spuštěním |

**Nekombinovat on-access skenery více antivirů** na jednom PC (pád systému, nefunkční detekce); druhý se používá jen on-demand.

## Metody detekce

- **Signatury** – porovnání s databází otisků známého malwaru; spolehlivé, bez falešných poplachů, ale jen pro **známý** malware (aktualizace několikrát denně).
- **Heuristická analýza** – hledá postupy typické pro viry, odhalí i **neznámé**, možné falešné poplachy.
- **Behaviorální analýza a sandbox** – sleduje, co program dělá za běhu (hromadné šifrování souborů); neznámý program se spustí v izolovaném **sandboxu**.
- **Kontrola integrity** – porovná stav souborů s uloženým stavem z minula.
- **Cloudová analýza** – ověření proti databázi výrobce.

**Nález:** **léčení**, **karanténa** (izolovaná složka, lze obnovit při falešném poplachu), **smazání**.

## Další součásti a zásady

- Bezpečnostní balík: **webový a e-mailový štít**, **firewall** ([firewall](/it/operacni-systemy/27-firewall/)), ochrana proti ransomwaru, záchranný disk. Ve Windows **Microsoft Defender**; ve firmách **EDR**.
- Mít jen **jeden** rezidentní antivirus, aktualizovat ho i systém, nevypínat ochranu. Antivirus není stoprocentní – doplňují ho opatrnost, aktualizace a [zálohování](/it/operacni-systemy/21-zalohovani-dat/).

## Otázky k opakování

1. Jaký je rozdíl mezi on-demand a on-access skenerem? ||on-demand skenuje na požádání, on-access neustále kontroluje otevírané a spouštěné soubory||
2. Proč nepoužívat dva rezidentní antiviry? ||konflikt, pád systému, nefunkční detekce||
3. Jak funguje detekce podle signatur a jaká je její slabina? ||porovnává s databází známého malwaru; nezachytí neznámý||
4. Co je heuristická analýza? ||hledá postupy typické pro viry, odhalí neznámé, ale dává falešné poplachy||
5. Co je karanténa a sandbox? ||karanténa izoluje nalezený soubor; sandbox je izolované prostředí pro bezpečné spuštění neznámého programu||
