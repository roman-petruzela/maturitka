export const SUBJECTS = {
	cj: { label: 'Český jazyk', description: 'Literatura, mluvnice a teorie k maturitě' },
	mat: { label: 'Matematika', description: 'Řešené postupy maturitních okruhů' },
	aj: { label: 'Angličtina', description: 'Reálie a tematické okruhy' },
	it: { label: 'IT', description: 'Hardware, software, sítě a programování' },
	dejepis: { label: 'Dějepis', description: 'Maturitní okruhy z dějepisu' },
	zemepis: { label: 'Zeměpis', description: 'Maturitní okruhy ze zeměpisu' },
	fyzika: { label: 'Fyzika', description: 'Maturitní okruhy z fyziky' },
	'spolecenske-vedy': { label: 'Společenské vědy', description: 'Filosofie, právo, ekonomie a politologie' },
	pravo: { label: 'Právo', description: 'Maturitní okruhy z práva' },
	psychologie: { label: 'Psychologie', description: 'Maturitní okruhy z psychologie' },
	ekonomika: { label: 'Ekonomika', description: 'Ekonomika, účetnictví a podnikání' },
	nemcina: { label: 'Němčina', description: 'Reálie a tematické okruhy' },
} as const;

export type SubjectKey = keyof typeof SUBJECTS;

export const SUBJECT_KEYS = Object.keys(SUBJECTS) as SubjectKey[];
