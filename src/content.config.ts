import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import path from 'node:path';
import { listOrderedDirs } from './lib/content-fs';

const topicSchema = z.object({
	title: z.string(),
	order: z.number().optional(),
	tags: z.array(z.string()).optional(),
	source: z.string().optional(),
	// marks topics with concrete calculation problems (not just theory) —
	// shown as a badge in topic lists so it's clear before clicking in
	hasExercises: z.boolean().optional(),
});

// Subjects are discovered from `src/content/*` directories rather than a
// hardcoded key list — a folder's leading "NN-" prefix sets its order
// (stripped to form the collection key/URL slug), see `lib/content-fs.ts`.
// Resolved from process.cwd() (the project root throughout Astro's build) —
// see the comment in lib/subjects.ts for why import.meta.url is NOT safe
// for this even though it would seem more robust at first glance.
const CONTENT_ROOT = path.resolve(process.cwd(), 'src/content');
const subjectDirs = listOrderedDirs(CONTENT_ROOT);

export const collections = Object.fromEntries(
	subjectDirs.map(({ dirName, slug }) => [
		slug,
		defineCollection({
			loader: glob({ pattern: '**/*.md', base: path.join(CONTENT_ROOT, dirName) }),
			schema: topicSchema,
		}),
	])
);
