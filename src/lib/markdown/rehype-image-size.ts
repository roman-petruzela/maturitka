// Rehype plugin: gives every local `<img src="/images/….webp">` a width and a height read from the
// file, so the layout does not jump when it loads. A picture that already has a `width` (the width it
// had in the Word source, see convert-docx.mjs) keeps it and gets the height of the same proportion.
// Runs last, so the portraits made by rehype-author-portrait.ts are covered too.
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { visit } from 'unist-util-visit';
import type { Root } from 'hast';
import { webpSize } from './image-size';

// resolved from process.cwd(), not import.meta.url — see the comment in lib/subjects.ts
const PUBLIC_DIR = path.resolve(process.cwd(), 'public');
const sizes = new Map<string, { width: number; height: number } | null>();

function sizeOf(src: string) {
	if (!sizes.has(src)) {
		let size = null;
		try {
			size = webpSize(readFileSync(path.join(PUBLIC_DIR, src)));
		} catch {
			// a missing file is reported by check-links / the build, not here
		}
		sizes.set(src, size);
	}
	return sizes.get(src) ?? null;
}

// `<img>` written as HTML in the Markdown arrives as a `raw` node (it is parsed after the plugins
// run), so it is rewritten as text.
function fixRaw(html: string): string {
	return html.replace(/<img\b[^>]*>/gi, (tag) => {
		const src = /\ssrc="(\/images\/[^"]+)"/.exec(tag)?.[1];
		if (!src || /\sheight=/i.test(tag)) return tag;
		const size = sizeOf(src);
		if (!size) return tag;
		const shown = Number(/\swidth="?(\d+)/i.exec(tag)?.[1]);
		if (shown > 0) return tag.replace(/>$/, ` height="${Math.round((shown * size.height) / size.width)}">`);
		return tag.replace(/\s?\/?>$/, ` width="${size.width}" height="${size.height}">`);
	});
}

export function rehypeImageSize() {
	return (tree: Root) => {
		visit(tree, 'raw' as never, (node: { value?: string }) => {
			if (node.value?.includes('<img')) node.value = fixRaw(node.value);
		});
		visit(tree, 'element', (node) => {
			if (node.tagName !== 'img') return;
			const src = node.properties?.src;
			if (typeof src !== 'string' || !src.startsWith('/images/') || node.properties.height != null) return;
			const size = sizeOf(src);
			if (!size) return;
			const shown = Number(node.properties.width);
			if (shown > 0) {
				node.properties.height = Math.round((shown * size.height) / size.width);
			} else {
				node.properties.width = size.width;
				node.properties.height = size.height;
			}
		});
	};
}
