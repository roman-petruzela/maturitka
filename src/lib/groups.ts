import type { SubjectKey } from './subjects';

// Optional per-subject override for topic-group display order/labels.
// Falls back to alphabetical + auto-capitalized slug when a subject or a
// specific group isn't listed here (fine for subjects like AJ where the
// group slugs are already readable English theme names).
export const GROUP_CONFIG: Partial<Record<SubjectKey, { order: string[]; labels: Record<string, string> }>> = {
	it: {
		order: [
			'uvod-do-vypocetni-techniky',
			'operacni-systemy',
			'aplikace-na-pc',
			'grafika-na-pc',
			'pocitacove-site',
			'elektronicke-publikovani',
			'databazove-systemy',
			'programovani',
			'webove-programovani',
			'pisemna-a-elektronicka-komunikace',
			'3d-modelovani',
			'robotika',
			'kyberneticka-bezpecnost',
			'reference',
		],
		labels: {
			'uvod-do-vypocetni-techniky': 'Úvod do výpočetní techniky',
			'operacni-systemy': 'Operační systémy',
			'aplikace-na-pc': 'Aplikace na PC',
			'grafika-na-pc': 'Grafika na PC',
			'pocitacove-site': 'Počítačové sítě',
			'elektronicke-publikovani': 'Elektronické publikování',
			'databazove-systemy': 'Databázové systémy',
			programovani: 'Programování',
			'webove-programovani': 'Webové programování',
			'pisemna-a-elektronicka-komunikace': 'Písemná a elektronická komunikace',
			'3d-modelovani': '3D modelování',
			robotika: 'Robotika',
			'kyberneticka-bezpecnost': 'Kybernetická bezpečnost',
			reference: 'Reference',
		},
	},
	// pořadí odpovídá skutečné posloupnosti v ŠVP (4.4.1 Matematika) podle
	// ročníku, ne abecedně ani podle toho, kdy byl obsah přidán do webu
	mat: {
		order: [
			'reference',
			'vyrazy-a-mocniny',
			'funkce-a-rovnice',
			'planimetrie',
			'stereometrie',
			'posloupnosti',
			'kombinatorika',
			'statistika',
			'analyticka-geometrie',
			'resene-ulohy-dt',
		],
		labels: {
			reference: 'Přehled podle ŠVP',
			'vyrazy-a-mocniny': 'Výrazy a mocniny (1. ročník)',
			'funkce-a-rovnice': 'Funkce a rovnice (2. ročník)',
			planimetrie: 'Planimetrie (3. ročník)',
			stereometrie: 'Stereometrie (3. ročník)',
			posloupnosti: 'Posloupnosti (3. ročník)',
			kombinatorika: 'Kombinatorika (3. ročník)',
			statistika: 'Statistika (4. ročník)',
			'analyticka-geometrie': 'Analytická geometrie (4. ročník)',
			'resene-ulohy-dt': 'Řešené úlohy z didaktických testů',
		},
	},
	cj: {
		order: ['reference', 'literatura', 'mluvnice', 'rozbor-knih-a-cetba'],
		labels: {
			reference: 'Přehled podle ŠVP',
			literatura: 'Literatura (literární historie a teorie)',
			mluvnice: 'Mluvnice',
			'rozbor-knih-a-cetba': 'Rozbor knih a četba',
		},
	},
};

function defaultLabel(slug: string): string {
	return slug
		.split('-')
		.map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
		.join(' ');
}

export function groupLabel(subject: SubjectKey, slug: string): string {
	return GROUP_CONFIG[subject]?.labels[slug] ?? defaultLabel(slug);
}

export function groupOfId(id: string): string | null {
	const parts = id.split('/');
	return parts.length > 1 ? parts[0] : null;
}

export function sortEntriesByOrder<T extends { data: { order?: number; title: string } }>(list: T[]): T[] {
	return [...list].sort((a, b) => {
		if (a.data.order != null && b.data.order != null) return a.data.order - b.data.order;
		if (a.data.order != null) return -1;
		if (b.data.order != null) return 1;
		return a.data.title.localeCompare(b.data.title, 'cs');
	});
}

export function sortGroupKeys(subject: SubjectKey, keys: (string | null)[]): (string | null)[] {
	const configured = GROUP_CONFIG[subject]?.order;
	return [...keys].sort((a, b) => {
		if (a === null) return -1;
		if (b === null) return 1;
		if (configured) {
			const ia = configured.indexOf(a);
			const ib = configured.indexOf(b);
			if (ia !== -1 && ib !== -1) return ia - ib;
			if (ia !== -1) return -1;
			if (ib !== -1) return 1;
		}
		return a.localeCompare(b, 'cs');
	});
}
