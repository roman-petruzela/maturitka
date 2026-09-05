---
title: "Kvantifikované výroky"
order: 4
source: "mat2/Kvantifikované výroky.pdf"
hasExercises: true
---

> Pozn. k obsahu: Jeden z úvodních příkladů obsahoval OCR chybu — "$(-a)^2=a$" místo správného "$(-a)^2=a^2$" (viz konzistentně stejný příklad v [Výrok, negace výroku](/mat/vyrazy-a-mocniny/01-vyrok-negace-vyroku/)) — opraveno.

Slovo "kvantifikovat" znamená určit množství. Sdělení $(a+b)^2=a^2+2ab+b^2$ **není výrok** — není určeno, jaké číslo $a$ (a $b$) je, takže otázka po pravdivosti nedává smysl (viz [Výrok, negace výroku](/mat/vyrazy-a-mocniny/01-vyrok-negace-vyroku/)).

Aby se takové sdělení stalo výrokem, musíme jej **kvantifikovat** — určit, pro které prvky (a kolik z nich) daná vlastnost platí. Výrazy vymezující tento počet se nazývají **kvantifikátory**: všichni, každý, některý, žádný, právě dva, alespoň jeden, nejvýše tři apod. Výroky obsahující kvantifikátor nazýváme **kvantifikované výroky**.

V matematice používáme dva druhy kvantifikátorů:

- **obecný** (velký kvantifikátor), značíme $\forall$ — vlastnost platí pro všechny/každý/libovolný prvek.
- **existenční** (malý kvantifikátor), značíme $\exists$ — existuje alespoň jeden prvek s danou vlastností.

Výroky s obecným kvantifikátorem nazýváme **obecné**, s existenčním **existenční**.

Kvantifikujeme-li úvodní sdělení, dostaneme skutečný výrok:

$$\text{Pro všechna reálná čísla } a,b \text{ platí } (a+b)^2=a^2+2ab+b^2. \qquad \forall a,b\in\mathbb{R}: \big((a+b)^2=a^2+2ab+b^2\big)$$

Další příklady:

- Existuje alespoň jedno kladné přirozené číslo. $\quad \exists n\in\mathbb{N}: n>0$
- Pro každé reálné číslo $a$ platí: $(-a)^2=a^2$. $\quad \forall a\in\mathbb{R}: (-a)^2=a^2$
- Existuje alespoň jedno přirozené číslo $a$ takové, že $a+1=2$. $\quad \exists a\in\mathbb{N}: a+1=2$

**Příklad:** Pomocí kvantifikátorů utvořte z následujících vět pravdivé výroky:

a) Pro čísla $x,y$ platí $x^2+y^2=0$.

b) Pro číslo $x$ platí $x^2+1>0$.

Výsledek: ||a) rovnost x²+y²=0 platí jen pro x=0,y=0 (jinak je součet dvou nezáporných čtverců kladný), tedy nutný je existenční kvantifikátor: ∃x,y∈ℝ: x²+y²=0; b) x²+1≥1>0 platí pro VŠECHNA reálná x, tedy: ∀x∈ℝ: x²+1>0||

## Negace kvantifikovaných výroků

**"Pro každý prvek množiny $M$ platí, že má danou vlastnost."** Negace: **"Existuje alespoň jeden prvek množiny $M$, který danou vlastnost nemá."**

**"Existuje alespoň jeden prvek množiny $M$, který má danou vlastnost."** Negace: **"Pro každý prvek množiny $M$ platí, že danou vlastnost nemá"**, jinými slovy **"Žádný prvek množiny $M$ danou vlastnost nemá."**

| Výrok | Negace výroku |
|---|---|
| "Každý prvek množiny $M$ má danou vlastnost." | "Alespoň jeden prvek množiny $M$ danou vlastnost nemá." |
| "Alespoň jeden prvek množiny $M$ má danou vlastnost." | "Žádný prvek množiny $M$ nemá danou vlastnost." |

Negací výroku "Každý člověk je smrtelný" **není** výrok "Všichni lidé jsou nesmrtelní", ale výrok "Existuje alespoň jeden člověk, který je nesmrtelný" (zkráceně "Alespoň jeden člověk je nesmrtelný").

Negací výroku "Ve třídě je alespoň jedno okno otevřené" **není** výrok "Všechna okna ve třídě jsou otevřená", ale výrok "Všechna okna ve třídě jsou zavřená."

## Příklady

**1.** Utvořte negace následujících pravdivých výroků:

a) Pro každé reálné číslo $a$ platí $a\cdot0=0$.
b) Existuje alespoň jeden trojúhelník, který je pravoúhlý.
c) Existuje alespoň jedno reálné číslo, jehož absolutní hodnota je rovna nule.
d) Druhá mocnina každého reálného čísla je číslo nezáporné.

Výsledek: ||a) Existuje alespoň jedno reálné číslo a, pro které a·0≠0. b) Žádný trojúhelník není pravoúhlý. c) Pro každé reálné číslo platí, že jeho absolutní hodnota není rovna nule (žádné reálné číslo nemá absolutní hodnotu rovnou nule). d) Existuje alespoň jedno reálné číslo, jehož druhá mocnina je záporná. (Všechny čtyři negace jsou nepravdivé, protože původní výroky jsou pravdivé.)||

**2.** Určete, který z následujících výroků je negací výroku "Každá kočka je černá":

a) Každá kočka je bílá.
b) Každá kočka není černá.
c) Alespoň jedna kočka je bílá.
d) Alespoň jedna kočka není černá.

Výsledek: ||d) — negací obecného výroku je vždy existenční výrok s negovanou vlastností. a) mění vlastnost na jinou konkrétní barvu (mnohem silnější a nesprávné tvrzení); b) je gramaticky matoucí formulace, kterou lze číst i jako "žádná kočka není černá" (obecný výrok, ne existenční); c) mění vlastnost na jinou barvu||

**3.** Negujte pravdivé výroky:

a) Existuje alespoň jedno reálné číslo $x$, pro které platí $\sqrt{x^2}=x$.
b) Pro všechna reálná čísla $x>1$ platí $\sqrt{x^2}=x$.
c) Každé přirozené číslo, které je dělitelné deseti, je dělitelné pěti.
d) Žádné přirozené číslo není menší než $-10$.

Výsledek: ||a) Pro každé reálné číslo x platí √(x²)≠x. b) Existuje alespoň jedno reálné číslo x>1, pro které √(x²)≠x. c) Existuje alespoň jedno přirozené číslo dělitelné deseti, které není dělitelné pěti. d) Existuje alespoň jedno přirozené číslo, které je menší než -10.||

**4.** Negujte nepravdivé výroky:

a) Existuje alespoň jedno přirozené číslo, které není sudé ani liché.
b) Každé dvě přímky v rovině jsou rovnoběžné.
c) Existuje alespoň jeden trojúhelník, ve kterém se všechny jeho výšky neprotínají v jediném bodě.
d) Součet žádných dvou celých čísel není roven nule.

Výsledek: ||a) Každé přirozené číslo je sudé nebo liché. b) Existují alespoň dvě přímky v rovině, které nejsou rovnoběžné. c) Pro každý trojúhelník platí, že se všechny jeho výšky protínají v jediném bodě. d) Existují alespoň dvě celá čísla, jejichž součet je roven nule (např. 3 a -3). (Všechny čtyři negace jsou pravdivé, protože původní výroky jsou nepravdivé.)||

## Zdroje

Zdrojový dokument: *mat2/Kvantifikované výroky.pdf*
