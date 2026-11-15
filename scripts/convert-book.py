#!/usr/bin/env python3
"""Converts a book PDF typeset like knihy/Oliver_Twist_prevypraveni.pdf (one column, chapter titles
in a larger bold face, an italic chapter subtitle, indented paragraphs) into the markdown body of a
book page for the reader (`book: true`, see docs/content.md). Prints the body; the frontmatter is
written by hand.

Run with the venv interpreter:
  scripts/.venv/bin/python -I scripts/convert-book.py ../knihy/Oliver_Twist_prevypraveni.pdf > body.md
"""
import re
import sys

import pymupdf

INDENT = 50.0  # x of an indented first line (the text column starts at ~42.5)


def spans_md(spans) -> str:
    out = ''
    for s in spans:
        text = s['text']
        if 'Italic' in s['font'] and text.strip():
            lead, core, trail = re.match(r'^(\s*)(.*?)(\s*)$', text).groups()
            text = f'{lead}*{core}*{trail}'
        out += text
    return out


def convert(path: str) -> str:
    doc = pymupdf.open(path)
    blocks: list[list[str]] = []  # each: ['h'|'sub'|'p', text]
    last_y = None
    for page in doc:
        text = page.get_text()
        if re.search(r'\.\s+\.\s+\.', text):  # the PDF's own table of contents
            continue
        if any(s['size'] > 20 for b in page.get_text('dict')['blocks'] for l in b.get('lines', []) for s in l['spans']):
            continue  # the cover — the page has its own h1
        last_y = None  # a page break never starts a paragraph by itself
        for block in page.get_text('dict')['blocks']:
            for line in block.get('lines', []):
                spans = [s for s in line['spans'] if s['text'].strip()]
                if not spans:
                    continue
                size = max(s['size'] for s in spans)
                if size < 8.5 and spans[0]['text'].strip().isdigit():
                    continue  # page number
                text = spans_md(spans).strip()
                x, y = line['bbox'][0], line['bbox'][1]
                if last_y is not None and abs(y - last_y) < 1:
                    blocks[-1][1] += ' ' + text  # a widely justified line can come out in pieces
                elif size > 12:
                    blocks.append(['h', text])
                elif all('Italic' in s['font'] for s in spans) and blocks and blocks[-1][0] in ('h', 'sub'):
                    if blocks[-1][0] == 'sub':
                        blocks[-1][1] += ' ' + text
                    else:
                        blocks.append(['sub', text])
                elif x > INDENT or blocks[-1][0] != 'p' or (last_y is not None and y - last_y > size * 2):
                    blocks.append(['p', text])  # an indent or a blank line starts a paragraph
                else:
                    blocks[-1][1] += ' ' + text
                last_y = y

    out = []
    for kind, text in blocks:
        text = re.sub(r'\*\s+\*', ' ', text)  # italic split across lines joins into one run
        if kind == 'h':
            out.append(f'## {text}')
        elif kind == 'sub':
            out.append(f'<p class="chapter-sub">{text.replace("*", "")}</p>')
        else:
            out.append(text)
    return '\n\n'.join(out) + '\n'


if __name__ == '__main__':
    sys.stdout.write(convert(sys.argv[1]))
