import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const topicSchema = z.object({
	title: z.string(),
	order: z.number().optional(),
	tags: z.array(z.string()).optional(),
	source: z.string().optional(),
	// marks topics with concrete calculation problems (not just theory) —
	// shown as a badge in topic lists so it's clear before clicking in
	hasExercises: z.boolean().optional(),
});

const SUBJECT_KEYS = [
	'cj',
	'mat',
	'aj',
	'it',
	'dejepis',
	'zemepis',
	'fyzika',
	'spolecenske-vedy',
	'pravo',
	'psychologie',
	'ekonomika',
	'nemcina',
] as const;

export const collections = Object.fromEntries(
	SUBJECT_KEYS.map((key) => [
		key,
		defineCollection({
			loader: glob({ pattern: '**/*.md', base: `./src/content/${key}` }),
			schema: topicSchema,
		}),
	])
);
