"""Archive path aliases — the Python twin of archive.mjs (see the comment there)."""
import json
import re
from pathlib import Path

_ALIAS_FILE = Path(__file__).resolve().parent / "archive-aliases.local.json"
_ALIASES = json.loads(_ALIAS_FILE.read_text(encoding="utf-8")) if _ALIAS_FILE.exists() else {}


def _swap_prefix(p: str, pairs) -> str:
    hits = [(a, b) for a, b in pairs if p == a or p.startswith(a + "/")]
    if not hits:
        return p
    a, b = max(hits, key=lambda h: len(h[0]))
    return b + p[len(a):]


def to_real(p: str) -> str:
    """alias path -> real path (relative to the archive root)"""
    return _swap_prefix(p, _ALIASES.items())


def display_source(p: str) -> str:
    """what a page shows as its source: the alias path without its "archiv-N/" root"""
    return re.sub(r"^archiv-\d+/", "", p)
