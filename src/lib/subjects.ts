export const SUBJECTS = {
	cj: { label: 'Český jazyk', description: 'Literatura, mluvnice a teorie k maturitě' },
	mat: { label: 'Matematika', description: 'Řešené postupy maturitních okruhů' },
	aj: { label: 'Angličtina', description: 'Reálie a tematické okruhy' },
	it: { label: 'IT', description: 'Hardware, software, sítě a programování' },
} as const;

export type SubjectKey = keyof typeof SUBJECTS;

export const SUBJECT_KEYS = Object.keys(SUBJECTS) as SubjectKey[];
