import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const topicSchema = z.object({
	title: z.string(),
	order: z.number().optional(),
	tags: z.array(z.string()).optional(),
	source: z.string().optional(),
});

const cj = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/cj' }),
	schema: topicSchema,
});

const mat = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/mat' }),
	schema: topicSchema,
});

const aj = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/aj' }),
	schema: topicSchema,
});

const it = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/it' }),
	schema: topicSchema,
});

export const collections = { cj, mat, aj, it };
