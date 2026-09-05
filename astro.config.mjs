// @ts-check
import { defineConfig } from 'astro/config';
import { rehypeMath } from './src/lib/markdown/rehype-math.ts';
import { rehypeSpoiler } from './src/lib/markdown/rehype-spoiler.ts';
import { rehypeReconNote } from './src/lib/markdown/rehype-recon-note.ts';
import { remarkGraph } from './src/lib/markdown/remark-graph.ts';
import { remarkGeometry } from './src/lib/markdown/remark-geometry.ts';
import { remarkSolid } from './src/lib/markdown/remark-solid.ts';

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkGraph, remarkGeometry, remarkSolid],
		rehypePlugins: [rehypeMath, rehypeSpoiler, rehypeReconNote],
	},
});
