import re, glob

# Safe, mechanical fix only: "\- text" at the very start of a line was meant
# to be a bullet marker (used consistently as itemization throughout this
# docx-sourced corpus) but the docx->md conversion escaped every hyphen
# indiscriminately, including these — so on the live site they render as a
# stray literal "- " at the start of an isolated <p>, not a real <ul><li>.
# Only the line-initial case is touched; mid-word hyphens like
# "Rakousko\-Uhersko" are untouched since they don't match this anchored
# pattern.
#
# (A separate, much riskier pass — merging docx-wrapped paragraph fragments
# back into single paragraphs — was prototyped but abandoned: the corpus
# mixes genuinely word-wrapped prose with terse, deliberately unpunctuated
# note-style writing from different original authors, and a single
# length/punctuation heuristic could not reliably tell them apart across
# all 97 files without occasionally joining unrelated content together.
# That part needs per-file human review, not a blanket script.)


def fix_dashes(text):
    parts = text.split('---', 2)
    if len(parts) < 3:
        return text, 0
    fm = parts[0] + '---' + parts[1] + '---'
    body = parts[2]
    lines = body.split('\n')
    fixed = 0
    out = []
    for line in lines:
        # optional leading whitespace: some lines are indented 1-3 spaces
        # (still valid CommonMark list-marker indentation) before the
        # escaped dash — anchoring only at column 0 missed those
        m = re.match(r'^[ \t]*\\-(\s.*)$', line)
        if m:
            out.append('-' + m.group(1))
            fixed += 1
        else:
            out.append(line)
    return fm + '\n'.join(out), fixed


if __name__ == '__main__':
    import sys
    mode = sys.argv[1] if len(sys.argv) > 1 else 'dry'
    files = sorted(glob.glob('src/content/01-cj/04-rozbor-knih-a-cetba/*.md'))
    total = 0
    changed_files = 0
    for f in files:
        text = open(f, encoding='utf-8').read()
        new_text, fixed = fix_dashes(text)
        if fixed:
            changed_files += 1
            total += fixed
            if mode == 'apply':
                open(f, 'w', encoding='utf-8').write(new_text)
    print(f"{'Applied to' if mode == 'apply' else 'Would change'} {changed_files}/{len(files)} files, {total} fake-bullet lines fixed total")
