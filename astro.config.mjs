// @ts-check
import { defineConfig } from 'astro/config';
import { rehypeMath } from './src/lib/markdown/rehype-math.ts';
import { rehypeSpoiler } from './src/lib/markdown/rehype-spoiler.ts';
import { remarkGraph } from './src/lib/markdown/remark-graph.ts';

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkGraph],
		rehypePlugins: [rehypeMath, rehypeSpoiler],
	},
});
