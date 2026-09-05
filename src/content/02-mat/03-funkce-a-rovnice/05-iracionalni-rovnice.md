---
title: "Iracionální rovnice"
order: 5
source: "matematika/TY01_0205_-_Iracionalni_rovnice.pptx"
tags: ["doplněno"]
hasExercises: true
---

> Pozn. k obsahu: Zdrojová prezentace obsahovala konkrétní zadání příkladů vložená jako obrázky, která se při převodu ztratila beze zbytku (zůstal jen obecný popis postupu, ne čísla samotných rovnic). Teorie a postup jsou rekonstruované věrně podle zachovaného textu; konkrétní příklady níže jsou nově vytvořené (nelze je z podkladu obnovit), ale demonstrují přesně tentýž typ úlohy a stejné poučení o cizích kořenech, jaké bylo v původním materiálu.

## Osnova

a) pojem iracionální rovnice, b) znalosti potřebné k řešení, c) ukázkové příklady, d) příklady na procvičení včetně řešení.

## Iracionální rovnice

Iracionální rovnice jsou rovnice, ve kterých se neznámá $x$ vyskytuje pod odmocninou (v odmocněnci) — tedy rovnice obsahující jednu nebo víc odmocnin s neznámou.

**Pozn.:** u iracionálních rovnic je nutné vždy provést zkoušku — umocnění obou stran rovnice není ekvivalentní úprava a může přidat tzv. **cizí kořen**, který zadání ve skutečnosti nesplňuje.

## Znalosti potřebné k řešení

Při řešení se často pracuje s těmito vzorci (umocnění dvojčlenu):

$$(a+b)^2 = a^2 + 2ab + b^2$$

$$(a-b)^2 = a^2 - 2ab + b^2$$

**Postup řešení:**

1. Osamostatníme odmocninu na jedné straně rovnice (pokud je to možné).
2. Umocníme obě strany rovnice jako celek na druhou — tím se zbavíme odmocniny.
3. Dostaneme běžnou (často kvadratickou) rovnici — tu vyřešíme obvyklým způsobem.
4. **Provedeme zkoušku** dosazením každého nalezeného kořene zpět do původní rovnice — pouze kořeny, pro které zkouška vyjde, jsou skutečným řešením.

## Ukázkový příklad

Řešte rovnici $\sqrt{x+7} = x+1$.

Umocníme obě strany: $x+7 = (x+1)^2 = x^2+2x+1$

Upravíme na kvadratickou rovnici: $x^2 + x - 6 = 0$

Vyřešíme: $(x+3)(x-2)=0$, tedy $x_1 = -3$, $x_2 = 2$.

**Zkouška:**

- $x_1=-3$: $L = \sqrt{-3+7} = \sqrt4 = 2$, ale $P = -3+1 = -2$. $L \neq P$ — $x_1$ **není** řešením (odmocnina nikdy nevyjde záporná, takže už samo $P<0$ vylučuje tento kořen).
- $x_2=2$: $L = \sqrt{2+7} = \sqrt9 = 3$, $P = 2+1 = 3$. $L = P$ — $x_2$ **je** řešením.

**Výsledek:** $x = 2$

## Příklady na procvičení

**Příklad 1:** Řešte rovnici $\sqrt{2x-3} = x-3$.

Výsledek:

- po umocnění: ||2x − 3 = x² − 6x + 9, tedy x² − 8x + 12 = 0||
- kořeny: ||x₁ = 2, x₂ = 6||
- zkouška: ||x₁=2: L=√1=1, P=2−3=−1, L≠P — není řešením. x₂=6: L=√9=3, P=6−3=3, L=P — je řešením.||
- výsledek: ||x = 6||

---

**Příklad 2:** Řešte rovnici $\sqrt{x-1} = -x$.

Výsledek:

- po umocnění: ||x − 1 = x², tedy x² − x + 1 = 0||
- diskriminant: ||D = 1 − 4 = −3 < 0 — rovnice nemá žádný reálný kořen||
- výsledek: ||rovnice nemá řešení (i bez zkoušky — pravá strana −x by navíc pro x≥1, jak vyžaduje definiční obor odmocniny, musela být záporná, což odmocnina nikdy nesplní)||

## Shrnutí

- Iracionální rovnice obsahuje neznámou pod odmocninou.
- Řeší se osamostatněním odmocniny a umocněním obou stran.
- **Vždy je nutné provést zkoušku** — umocnění může přidat cizí kořen, který rovnici ve skutečnosti nesplňuje.

## Zdroje

HUDCOVÁ, Milada a Libuše KUBIČÍKOVÁ. _Sbírka úloh z matematiky pro SOŠ, SOU a nástavbové studium_. 2. vydání. Havlíčkův Brod: Prometheus, spol. s r.o., 2005. Učebnice pro střední školy. ISBN 80-7196-318-6
