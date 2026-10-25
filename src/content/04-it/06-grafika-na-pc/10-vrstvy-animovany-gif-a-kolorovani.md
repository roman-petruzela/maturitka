---
title: "Vrstvy, animovaný GIF a kolorování (GIMP)"
order: 10
tags: ["doplněno"]
---
Praktické postupy v rastrovém editoru GIMP, které navazují na [výběry, jas a kontrast, korekce barev a masky](/it/grafika-na-pc/03-rastrova-grafika-gimp/).

## Vrstvy

**Vrstva** je jako průhledná fólie: obrázek se skládá z několika vrstev položených na sebe a každou lze upravovat zvlášť, aniž by se poškodily ostatní.

- panel **Vrstvy** – *Ctrl+L*, nebo *Okna → Dokovatelná dialogová okna → Vrstvy*
- nový obrázek má jednu vrstvu **Pozadí**
- **oko** u vrstvy přepíná viditelnost, kliknutím na název se vrstva přejmenuje
- tlačítka panelu: nová vrstva, posun nahoru a dolů (pořadí rozhoduje, co je vidět navrchu), duplikace, ukotvení plovoucí vrstvy, smazání
- **krytí** (neprůhlednost) a **režim** vrstvy (násobit, závoj, překrýt…) mění, jak se vrstva prolíná s vrstvami pod ní
- novou vrstvu je dobré zakládat s výplní **Průhlednost** – průhledná místa jsou v GIMPu zobrazena šedou šachovnicí
- pracuje se vždy s **aktivní** (zvýrazněnou) vrstvou – nejčastější chyba je kreslit do jiné vrstvy, než se myslelo
- vložení ze schránky (*Ctrl+V*) vytvoří **plovoucí výběr**; ten se buď ukotví do aktivní vrstvy (ikona kotvy), nebo převede na novou vrstvu

**Proč vrstvy:** každý objekt (text, fotografie, stín, logo) ve vlastní vrstvě, úpravy se dají kdykoli vrátit, pořadí vrstev mění výsledný efekt. Rozpracovaná práce se ukládá v nativním formátu **XCF**, který vrstvy zachová; PNG nebo JPEG je jen výsledný export (*Soubor → Exportovat jako*).

## Animovaný GIF z vrstev

GIF ukládá animaci jako sled snímků – v GIMPu je **každá vrstva jeden snímek**.

1. Založit obrázek a do první průhledné vrstvy nakreslit objekt (např. kruh eliptickým výběrem a výplní).
2. Vytvořit další vrstvu, objekt zkopírovat (*Ctrl+C*), vložit do nové vrstvy (*Ctrl+V*), posunout o kousek dál a plovoucí výběr ukotvit.
3. Opakovat, dokud objekt „nedoletí“ do cíle (zhruba 10–15 vrstev). Pozadí může být samostatná viditelná vrstva, nebo se při exportu zkombinuje.
4. Uložit jako **XCF** pro pozdější úpravy.
5. *Soubor → Exportovat jako…*, název s příponou `.gif`; pokud se některá vrstva posunula mimo plátno, nechat ořezat vrstvy podle velikosti obrázku.
6. V dialogu exportu zaškrtnout **Jako animaci** a **Opakovat donekonečna**, nastavit **prodlevu** mezi snímky (např. 100 ms) a použít ji na všechny snímky.

Výsledek lze přehrát v GIMPu (*Filtry → Animace → Přehrát*) nebo v prohlížeči.

## Odbarvení, obarvení a kolorování

**Odbarvit** – z barevné fotografie černobílou: *Barvy → Odbarvit*. Převod podle **světlosti**, **svítivosti** nebo **průměru** složek; nejvěrněji obvykle podle svítivosti, která počítá s různou citlivostí oka na barvy. Při zapnutém náhledu se varianty dají porovnat.

**Obarvit** – *Barvy → Obarvit*: jezdcem **Odstín** se celé fotografii nebo jen **vybrané části** dá jedna barva (jezdce jsou stejné jako u *Odstín–sytost*). Typický efekt: černobílá fotografie, ve které zůstane barevný jen jeden předmět.

**Kolorovat** – dodatečně „vybarvit“ černobílou fotografii: fotografie se nejdřív převede do odstínů šedi, pak *Barvy → Kolorovat* s jednou z nabídnutých sytých barev nebo vlastní barvou (zadanou v HSV, RGB, CMYK, šestnáctkově nebo z palety). Tónovaný snímek, např. do sépiové hnědé, vznikne tak, že bílá už bílou nezůstane.

**Zásady kolorování**

- vycházet z fotografie v odstínech šedi
- málo barev, a jemných – nesmějí rušit
- barvit do zvláštních vrstev, u kterých lze dodatečně snížit krytí
- teplé barvy do popředí, studené do pozadí
- u krajin ubírat modrou směrem k horizontu
- pokročilé techniky: míchání kanálů (*Barvy → Komponenty → Mixér kanálů*), kolorování pleti

## Shrnutí

- Vrstva = průhledná fólie; pořadí, viditelnost, krytí a režim; ukládat v XCF.
- Animovaný GIF: jedna vrstva = jeden snímek, export s volbou „Jako animaci“ a prodlevou.
- Odbarvit (černobílá), Obarvit (jedna barva, i pro výběr), Kolorovat (tónování šedé fotografie).
