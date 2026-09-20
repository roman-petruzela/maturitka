// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rehypeMath } from './src/lib/markdown/rehype-math.ts';
import { rehypeSpoiler } from './src/lib/markdown/rehype-spoiler.ts';
import { rehypeReconNote } from './src/lib/markdown/rehype-recon-note.ts';
import { rehypeAuthorPortrait } from './src/lib/markdown/rehype-author-portrait.ts';
import { rehypeRozborLink } from './src/lib/markdown/rehype-rozbor-link.ts';
import { remarkProtectMath } from './src/lib/markdown/remark-protect-math.ts';
import { remarkLineBreaks } from './src/lib/markdown/remark-line-breaks.ts';
import { remarkGraph } from './src/lib/markdown/remark-graph.ts';
import { remarkGeometry } from './src/lib/markdown/remark-geometry.ts';
import { remarkSolid } from './src/lib/markdown/remark-solid.ts';
import { remarkTimeline } from './src/lib/markdown/remark-timeline.ts';
import { remarkFormulas } from './src/lib/markdown/remark-formulas.ts';

// https://astro.build/config
export default defineConfig({
	site: 'https://maturitka.petruze.la',
	integrations: [sitemap()],
	markdown: {
		remarkPlugins: [remarkLineBreaks, remarkProtectMath, remarkGraph, remarkGeometry, remarkSolid, remarkTimeline, remarkFormulas],
		rehypePlugins: [rehypeMath, rehypeSpoiler, rehypeReconNote, rehypeAuthorPortrait, rehypeRozborLink],
	},
});
