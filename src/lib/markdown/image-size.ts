// Pixel size of a WebP file from its header (pure, no dependency). Used by rehype-image-size.ts so
// every <img> gets width and height and the browser reserves its space before it has loaded.
export function webpSize(buf: Uint8Array): { width: number; height: number } | null {
	const tag = (at: number) => String.fromCharCode(...buf.subarray(at, at + 4));
	if (buf.length < 30 || tag(0) !== 'RIFF' || tag(8) !== 'WEBP') return null;
	const u16 = (at: number) => buf[at] | (buf[at + 1] << 8);
	const u24 = (at: number) => u16(at) | (buf[at + 2] << 16);
	const chunk = tag(12);
	if (chunk === 'VP8 ') return { width: u16(26) & 0x3fff, height: u16(28) & 0x3fff }; // lossy
	if (chunk === 'VP8L') {
		// lossless: two 14-bit numbers (size - 1) after the 0x2f signature byte
		const bits = (buf[21] | (buf[22] << 8) | (buf[23] << 16) | (buf[24] << 24)) >>> 0;
		return { width: (bits & 0x3fff) + 1, height: ((bits >>> 14) & 0x3fff) + 1 };
	}
	if (chunk === 'VP8X') return { width: u24(24) + 1, height: u24(27) + 1 }; // extended
	return null;
}
