---
title: "Práce s audio a video soubory"
order: 3
source: "MATURITA HADR/IT/19. Práce s audio a video soubory.docx"
---
__Formáty zvuku na PC__

- Základním formátem, jenž vznikne jako první při převodu hudby z cd je WAV
- Je nekomprimovaným formáte pro ukládání zvuku, který je tímto způsobem uložen v nejlepší možné kvalitě \(1 minut zabírá 10 MB paměti\)
- Z tohoto důvodu máme další zvukové formáty, které v paměti zabírají méně místa, které rozdělujeme podle způsobu komprese na ztrátové a bezztrátové

__Formáty ztrátové komprese__

- Ztrátová komprese znamená zmenšení objemu dat díky odstranění méně potřebných informací; po kompresi nemůžeme získat zpět původní data
- Zvuk se komprimuje tak, že se zvuková stopa rozdělí na vzorky vlnových signálů určitých frekvenčních pásem a pásma mimo frekvence od 16 Hz do 20 000 Hz se odstraní
- Sampling rate – počet vzorků vlnových signálů za sekundu – čím menší tím menší velikost souboru a menší kvalita zvůku
- MP3 – nejrozšířenější digitální audio formát dneška; univerzální formát podporovaný většinou digitálních přehrávačů hudby i všemi programy na PC; kompromis mezi velikostí a kvalitou
- WMA \(Windows media audio\) – alternativa k MP3 nabízená firmou Microsoft s podobnou kvalitou zvuku při poloviční velikosti souboru
- AAC – formát pro poslech hudby používaný na iTunes a v iPodu; zvuk je kvalitnější než u MP3 a formát poskytuje ochranu proti neautorizovanému užití; přehrají ho však jen přehrávače Apple

__Formáty bezztrátové komprese__

- Bezztrátová komprese není tak účinná, avšak komprimovaný soubor lze vrátit zpět do původního stavu opačným postupem – dekompresí
- Při této kompresi se odstraní přebytečné bity, ale je zaznamenáno, kde chybí
- Při přehrávání souboru se postupně dekomprimuje, takže se přehrává originální neporušená zvuková stopa, jen je zmenšena její velikost v pamětí
- FLAC – je použitelný na všech hlavních operačních systémech; komprese je asi 60 % původního souboru, ale zato je rychlejší a rozšířenější než ostatní formáty
- ALAC – uzavřený formát od firmy Apple používaný na iTunes a v iPod
- WMA – bezztrátový formát dostupný v přehrávačích Windows Media Player

__Formáty souborů pro video__

- Existuje nepřeberné množství formátů video souborů a může být trochu obtížné se v tom vyznat; existují dvě věci, které určují video v počítači:

__1\. Kontejner__

- Je to co vidíme jako AVI, MOV, MKV či MP4
- Určuje formát, ve kterém souboru obsahuje video, audio a další související záležitosti \(třeba titulky\) – můžeme si to představit jako složky ve které je uložené vše potřebné pro přehrání videa
- V kontejnerech klidně může být uloženo video několikrát, pokaždé s jiným kodekem; takže pokud počítač umí číst určitý kontejner \(AVI, MP4\), ještě nemusí znamenat, že má k dispozici potřebný kodek pro zpracování
- Kodek se používá i pro audio, tedy zvukovou stopu
- AVI – je jedním z těch nejstarších, existuje už někdy od roku 1992 a za jeho vznikem je Microsoft; najdeme v něm jenom video a audio, včetně možnosti uložení více stop – bývají poněkud větší
- MKV – od roku 2002 a je důležité, že jde o formát použitelný zdarma a zároveň otevřený standard; nejčastěji se s ním setkáme při stažení DVD do počítače
- MP4 – jedním z nejrozšířenějších způsobů jak se k vám může dostat video i audio; umí řadu kodeků a vychytávek včetně třeba titulků

__2\. Kodek__

- Čisté video je velmi náročně na diskový prostor – jedna minuta může být mít až několik gigabajtů \(záleží na rozlišení a počtu snímků za sekundu\)
- Proto se kodeky starají o kompresi – většinou bez okem zaznamenatelných projevů
- Kodek je zásadní věc, protože jde o technologii, se kterou bylo video uloženo – bez příslušného kodeku nelze video otevřít a přehrát
- Kodek je spojení dvou slov, compressor a decompressor – codec – je to software
- Zpočátku bylo nutné si kodeky do počítačů doinstalovávat
- x264 – je jedním z nejrozšířenějších kódování a používá se na BluRay discích a videích, stejně jako u streamingu videa \(YouTube, Vimeo atd\.\)
- WMV – vymyslel Microsoft a je to čistě proprietární formát, navíc určený pro použití s proprietárním kontejnerem ASF
- Xvid – podstatné je to, že jde o open source; často se s ním setkáme u DVD, dokáže totiž několik GB elké DVD komprimovat na velikost, která se vejde na běžné CD
