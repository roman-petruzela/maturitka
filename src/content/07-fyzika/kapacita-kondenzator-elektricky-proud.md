---
title: "Kapacita kondenzátor elektrický proud"
order: 26
source: "FYZIKA-maturitní otázky/26-Kapacita-kondenzátor-elektrický-proud.docx"
---
Kapacita vodiče

- Nábojem __Q__ získá vodič potenciál __φ => ↑Q~↑φ__
- Lze zapsat __Q=C·φ__
- __Kapacita vodiče - C__
- konstanta úměrnosti
- veličina charakterizující __vodiče__
-  závisí na __tvaru__, __velikosti__ a __materiálu__ vodiče
-  jednotkou __F (farad)__ = __C·V-1__
- vodič má kapacitu __1 F,__ jestliže se nábojem __1 C__ nabije na elektrický potenciál __1 V__	      - __hodně velké__
- Pro __osamělý kulový vodič__ o __poloměru R__ ve vakuu (a přibližně také ve vzduchu) platí:

$$\varphi = \frac{1}{4 \pi \varepsilon_0} \cdot \frac{Q}{R}$$

$$Q = 4 \pi \varepsilon_0 R \varphi$$

- Kapacita kulového vodiče je tedy:

$$C = 4 \pi \varepsilon_0 R$$

$\varepsilon_0 = 8{,}85 \cdot 10^{-12}\ \mathrm{C^2 \cdot N^{-1} \cdot m^{-2}}$ … permitivita vakua

## Kondenzátor, kapacita kondenzátoru

- Kapacita __osamoceného vodiče__ je malá. Mnohem větší kapacitu má __soustava dvou plochých vodičů__ oddělených od sebe tenkou vrstvou vzduchu nebo __dielektrika__ (látky, které __nepřenáší el. proud__). Takové zařízení nazýváme __deskový kondenzátor.__
- Nejjednodušší je deskový kondenzátor __bez dielektrika__, který je tvořen dvěma __rovnoběžnými deskami__ o plošném __obsahu S__ a __vzdálenosti d__. __Mezi__ deskami předpokládáme __vakuum__.
- __Schématická značka__ kondenzátoru:

<img src="/images/content/fyzika/kapacita-kondenzator-elektricky-proud/05.webp" alt="" width="280" loading="lazy" decoding="async">

__Kondenzátor bez dielektrika__

- Připojíme-li deskový kondenzátor ke svorkám zdroje, vznikne na desce s __vyšším potenciálem φ1 kladný náboj +Q__ a na desce s __nižším potenciálem φ2 stejně velký záporný náboj –Q__.
- Rovnost absolutních hodnot obou nábojů je důsledkem jejich __vzájemného silového působení__. Mezi deskami vznikne __homogenní el. pole s intenzitou E__, vně kondenzátoru se pole obou desek vzájemně __ruší__.

$$E = \frac{\varphi_1 - \varphi_2}{d} = \frac{U}{d}$$

- Náboje na deskách kondenzátoru jsou přímo úměrné napětí mezi deskami. Konstanta úměrnosti __C0 je kapacita  deskového kondenzátoru bez dielektrika__.

$$C_0 = \frac{Q}{U} = \frac{\varepsilon_0 S}{d}$$

- Kondenzátor má kapacitu __1 F,__ jestliže při napětí __1 V__ jsou na jeho deskách náboje o absolutní hodnotě __1 C__.

__Kondenzátor s dielektrikem__

- Vyplníme-li prostor mezi deskami kondenzátoru __dielektrikem__, jeho __kapacita se zvětší__. Po připojení ke zdroji vznikne mezi deskami opět __homogenní el. pole__ s intenzitou:

$$E = \frac{U}{d}$$

- K tomu je však nutno přivést na desky __větší náboj__ než u kondenzátru __bez dielektrika__, aby se překonal účinek vázaných nábojů vzniklých __polarizací dielektrika.__ Deskový kondenzátor s dielektrikem má tedy __větší kapacitu C__, než je kapacita stejně velkého kondenzátoru __bez dielektrika__
- __Relativní permitivita dielektrika__ se dá zjistit jako poměr obou kapacit

$$\varepsilon_r = \frac{C}{C_0}$$

- __Kapacita deskového kondenzátoru s dielektrikem__ je

$$C = \frac{Q}{U} = \frac{\varepsilon_0 \varepsilon_r S}{d}$$

- Kondenzátory mohou být buď se __stálou__ nebo s __měnitelnou kapacitou__ (využití v radiotechnice)

__Druhy kondenzátorů podle použitého dielektrika__

- S papírovým dielektrikem<img src="/images/content/fyzika/kapacita-kondenzator-elektricky-proud/11.webp" alt="" width="212" loading="lazy" decoding="async">
- S plastickou fólií<img src="/images/content/fyzika/kapacita-kondenzator-elektricky-proud/12.webp" alt="" width="170" loading="lazy" decoding="async">
- Skleněné
- Slídové
- Keramické
- Elektrolytické

__Zapojení kondenzátorů__

- Paralelně (vedle sebe)

  <img src="/images/content/fyzika/kapacita-kondenzator-elektricky-proud/13.webp" alt="" width="287" loading="lazy" decoding="async">

$$C_P = \sum_{i=1}^{n} C_i$$
	- __U1=U2=U__
	- __C=C1+C2__
	- __Q=C·U__
	- větší kapacita než u sériového zapojení
- Sériově (za sebe)
	- __U=U1+U2__
	- __Q=Q1=Q2__

  <img src="/images/content/fyzika/kapacita-kondenzator-elektricky-proud/16.webp" alt="" width="295" loading="lazy" decoding="async">

$$\frac{1}{C_S} = \sum_{i=1}^{n} \frac{1}{C_i}$$

  Pro dva kondenzátory ($U = \frac{Q}{C}$):

$$\frac{1}{C} = \frac{1}{C_1} + \frac{1}{C_2}$$

__Energie nabitého kondenzátoru__

- Při __nabíjení__ a __vybíjení__ kondenzátoru dochází k pohybu náboje v elektrickém poli, při kterém elektrostatické síly konají práci. Kondenzátor při __nabíjení získává elektrickou energii__ a při __vybíjení ji ztrácí.__ Během __vybíjení__ se __napětí__ na kondenzátoru postupně __zmenšuje__ přímo úměrně se __zmenšováním náboje__ na __deskách__
- Celková el. práce při vybití kondenzátoru a také počáteční el. energie kondenzátoru je tedy

$$W = E_C = \frac{1}{2} U Q = \frac{1}{2} \cdot \frac{Q^2}{C} = \frac{1}{2} C U^2$$

## Elektrický proud

- Značka: __I__
- Jednotka: __A (ampér)__
- __Přenesou__-li nosiče náboje průřezem vodiče náboj __ΔQ__ za dobu __Δt__ vyvolají __el. proud I__

$$I = \frac{\Delta Q}{\Delta t}$$

- Dva druhy proudů:
	- __Stejnosměrný__ => __=, I__
	- __Střídavý__ => __~, i__
- Elektrický proud je __uspořádaný pohyb volných částic__ s elektrickým __nábojem__
- __Kladně__ nabité __částice__ se pohybují ve __směru intenzity el. pole__ (od kladného pólu k zápornému), __záporně__ nabité částice ve __směru opačném__
- Za směr proudu se podle dohody pokládá směr __pohybu kladně nabitých částic__, tzn. __od plusu k mínusu__
- Z definičního vztahu pro proud vyplývá, že při proudu __1 A__ projdou průřezem vodiče za __1 s__ částice s celkovým nábojem __1 C__
- __Podmínky__ pro konstantní stejnosměrný proud:
	- Uzavřený elektrický obvod
	- V obvodu se nachází elektrický zdroj

__Měření elektrického proudu a napětí__

- __Elektrický proud__
	- Měříme ampérmetrem
	- Zapojení vždy __sériově__

  <img src="/images/content/fyzika/kapacita-kondenzator-elektricky-proud/21.webp" alt="" width="371" loading="lazy" decoding="async">

	- Schématická značka:

<img src="/images/content/fyzika/kapacita-kondenzator-elektricky-proud/22.webp" alt="" width="160" loading="lazy" decoding="async">

- __Elektrické napětí__
	- Měříme voltmetrem
	- Zapojení vždy __paralelně__
	- Schématická značka:

<img src="/images/content/fyzika/kapacita-kondenzator-elektricky-proud/23.webp" alt="" width="109" loading="lazy" decoding="async">

## Zdroj elektrického napětí a proudu

- Zdroj napětí je zařízení, mezi jehož svorkami je neelektrostatickými silami trvale udržováno napětí.
- __Elektrický proud__ teče i __uvnitř zdroje__, kde se ale volné částice pohybují __proti směru elektrostatických sil,__ což znamená, že zde působí ještě jiné síly __neelektrostatického původu__
- Při přenesení __náboje Q__ uvnitř zdroje vykonají neelektrostatické síly práci __WZ=Ue·Q__, kde __Ue je elektromotorické napětí__ zdroje.
- Ve __vnější části obvodu__ vykonávají elektrostatické síly při přenesení __náboje Q__ práci __W=U·Q__, kde __U<Ue__ je __svorkové napětí__ zdroje. Svorkové napětí nezatíženého zdroje je rovno jeho elektromotorickému napětí

__Zdroje elektrického napětí a proudu:__

- __Galvanický článek__ – vyžívá energii uvolněnou při __chemické reakci__ kovových __elektrod__ s vodivou kapalinou (__elektrolytem__)
- __Fotočlánek__ – využívá energii __světla__ dopadajícího 	na vhodně upravenou destičku __polovodiče__
- __Termočlánek__ – Spojíme-li dva různé __kovové vodiče__ do uzavřeného obvodu, přejde část elektronů z jednoho kovu do druhého a na __rozhraní__ se objeví malé kontaktní napětí, jehož velikost závisí na teplotě spoje

__Elektrický proud v kovech__

- __Valenční elektrony__ atomů v kovu jsou k atomovým jádrům vázány jen __slabými silami__ => volně a chaoticky se pohybují
- Připojíme-li vodič ke svorkám stejnosměrného zdroje, vznikne v celém vodiči __el. pole__ => __elektrony__ se začnou pohybovat unášivým pohybem __proti směru intenzity pole__ (což je podstata el. proudu v kovech)
