#!/usr/bin/env python3
"""Converts PDF source files into markdown content files for Astro,
driven by a manifest JSON (see scripts/manifest/*.json).

Run with the venv interpreter: scripts/.venv/bin/python scripts/convert-pdf.py scripts/manifest/mat.json
"""
import json
import re
import subprocess
import sys
import tempfile
from pathlib import Path

import pymupdf4llm
from pymupdf4llm.helpers.document_layout import OCRMode

WEB_ROOT = Path(__file__).resolve().parent.parent
REPO_ROOT = WEB_ROOT.parent


def yaml_string(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


def build_frontmatter(title: str, order, tags, source: str) -> str:
    lines = ["---", f"title: {yaml_string(title)}"]
    if order is not None:
        lines.append(f"order: {order}")
    if tags:
        lines.append("tags: [" + ", ".join(yaml_string(t) for t in tags) + "]")
    if source:
        lines.append(f"source: {yaml_string(source)}")
    lines.append("---")
    lines.append("")
    return "\n".join(lines)


def _fix_emphasis_delim(md: str, marker: str) -> str:
    # CommonMark requires no whitespace immediately inside emphasis delimiters
    # ("__word __" does not close the bold) — pymupdf4llm emits that whenever
    # the source PDF's bold run included trailing whitespace. Move it outside.
    escaped = re.escape(marker)
    pattern = re.compile(rf"{escaped}([ \t]*)([^\n]*?[^ \t\n])([ \t]*){escaped}")
    return pattern.sub(lambda m: f"{m.group(1)}{marker}{m.group(2)}{marker}{m.group(3)}", md)


def _strip_pptx_boilerplate(md: str) -> str:
    # Every slide deck in this batch reuses a school template: a "Projekt OP
    # VK ..." / "Šablony ..." line, "NÁZEV MATERIÁLU:", a VY_42_INOVACE code,
    # an "Autor: <jméno>" line (a teacher's name, see IT cleanup pass) and
    # "Rok vydání: ####". These don't always sit at the very start of the
    # extracted text (PDF text-block order sometimes puts real content
    # first) — so each line is matched and removed individually/narrowly
    # instead of stripping an entire "start...marker" span, which risked
    # eating real course content that happened to precede the metadata.
    patterns = [
        r"\*{0,2}Projekt OP VK[^\n]*\n+",
        r"\*{0,2}Šablony[^\n]*\n+",
        r"\*{0,2}NÁZEV MATERIÁLU:[^\n*]*\*{0,2}\s*\n+",
        r"\*{0,2}VY_42_INOVACE[^\n]*\n+",
        r"\*{0,2}Autor:\s*[^\n*]*\*{0,2}\s*\n?",
        # worksheet footer used in the robotika1.pol batch: "Vypracoval(a):
        # <jméno>" repeated on every page — same rule as "Autor:" above, kept
        # as a separate pattern since the wording differs.
        r"\*{0,2}Vypracoval[a]?:\s*[^\n*]*\*{0,2}\s*\n?",
        r"\*{0,2}Rok vydání:\s*\d{4}\*{0,2}\s*\n+",
        r"\n?Tento projekt je spolufinancován.*?Česko\.\s*\n*",
        # a second, more formal "DUM" template (VY_32_INOVACE_...) used by some
        # of the material: a metadata table (Název/Autor/Datum/...) between a
        # "Zpracováno v rámci projektu" header and a funding-disclaimer footer
        r"\n?Zpracováno v rámci projektu.*?ČESKÉ\s*\n*REPUBLIKY\.\s*\n*",
    ]
    # count=0 (all occurrences): PowerPoint footers repeat on every slide, so
    # the same boilerplate can show up more than once in the extracted text
    for pattern in patterns:
        md = re.sub(pattern, "\n", md, flags=re.DOTALL)
    return md


def _strip_leading_title_line(md: str) -> str:
    # The source PDF's own title survives conversion as a standalone markdown
    # heading — redundant since the page already renders the frontmatter
    # title as <h1>, and it can carry a topic number that no longer matches
    # once topics get renumbered per category.
    return re.sub(r"^\s*#{1,6}\s+[^\n]+\n+", "", md)


def _strip_bare_title_line(md: str, title: str) -> str:
    # Some slides repeat the title as a plain (unformatted) first line, which
    # neither the heading- nor bold-based stripping above catches.
    lines = md.split("\n", 2)
    if lines and lines[0].strip().casefold() == title.strip().casefold():
        return "\n".join(lines[1:]).lstrip("\n")
    return md


def clean_markdown(md: str, title: str = "") -> str:
    md = md.replace("\r\n", "\n")
    md = re.sub(r"</?mark>", "", md)  # leftover PDF highlight-color artifact
    md = _strip_pptx_boilerplate(md)
    md = _strip_leading_title_line(md)
    if title:
        md = _strip_bare_title_line(md, title)
    md = _fix_emphasis_delim(md, "**")
    md = _fix_emphasis_delim(md, "__")
    md = re.sub(r"[ \t]+\n", "\n", md)
    md = re.sub(r"\n{3,}", "\n\n", md)
    return md.strip() + "\n"


def _to_pdf(src_abs: Path, tmp_dir: Path) -> Path:
    """Non-PDF inputs (pptx) go through headless LibreOffice first."""
    if src_abs.suffix.lower() == ".pdf":
        return src_abs
    subprocess.run(
        ["soffice", "--headless", "--convert-to", "pdf", "--outdir", str(tmp_dir), str(src_abs)],
        check=True,
        capture_output=True,
    )
    converted = tmp_dir / (src_abs.stem + ".pdf")
    if not converted.exists():
        raise RuntimeError(f"LibreOffice did not produce {converted}")
    return converted


def convert_one(item: dict, ocr: bool, tmp_dir: Path) -> None:
    dest_abs = WEB_ROOT / "src" / "content" / item["dest"]
    frontmatter = build_frontmatter(
        item["title"], item.get("order"), item.get("tags"), item.get("source") or item["src"]
    )
    skip_reason = item.get("skip")
    if skip_reason:
        # e.g. a scanned handwritten page with no text layer — OCR on
        # handwriting produces unusable garbage, so don't even try; a clear
        # placeholder beats silently empty or garbled content.
        dest_abs.parent.mkdir(parents=True, exist_ok=True)
        dest_abs.write_text(
            frontmatter
            + f"_Zdrojový podklad nešlo automaticky převést ({skip_reason}). "
            + "Zatím nepřevedeno — je potřeba doplnit ručně._\n",
            encoding="utf-8",
        )
        return
    src_abs = _to_pdf(REPO_ROOT / item["src"], tmp_dir)
    if ocr:
        md = pymupdf4llm.to_markdown(
            str(src_abs), use_ocr=OCRMode.FORCE_DROP_OLD, ocr_language="ces", show_progress=False
        )
    else:
        md = pymupdf4llm.to_markdown(str(src_abs), use_ocr=OCRMode.NEVER, show_progress=False)
    dest_abs.parent.mkdir(parents=True, exist_ok=True)
    dest_abs.write_text(frontmatter + clean_markdown(md, item["title"]), encoding="utf-8")


def main() -> None:
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    ocr = "--ocr" in sys.argv
    if len(args) != 1:
        print("Usage: convert-pdf.py <manifest.json> [--ocr]", file=sys.stderr)
        sys.exit(1)
    full_manifest = json.loads(Path(args[0]).read_text(encoding="utf-8"))
    manifest = [item for item in full_manifest if item["src"].lower().endswith((".pdf", ".pptx"))]
    skipped = len(full_manifest) - len(manifest)
    ok = failed = 0
    with tempfile.TemporaryDirectory(prefix="maturitka-pdf-") as tmp:
        tmp_dir = Path(tmp)
        for item in manifest:
            try:
                convert_one(item, ocr, tmp_dir)
                ok += 1
                print(f"OK   {item['dest']}")
            except Exception as exc:  # noqa: BLE001 - report and continue
                failed += 1
                print(f"FAIL {item['dest']}: {exc}")
    print(f"\n{ok} converted, {failed} failed, {skipped} skipped (not pdf/pptx)")
    if failed:
        sys.exit(1)


if __name__ == "__main__":
    main()
