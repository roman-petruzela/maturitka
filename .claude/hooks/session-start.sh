#!/usr/bin/env bash
# SessionStart hook: prints the state of the repo so a new session knows where it is.
# Version, branch, the last commits, uncommitted files and the "Now" + "Last sessions" parts of ROADMAP.md.
# It must never fail or block a session: every step is optional and the script always exits 0.

root="${CLAUDE_PROJECT_DIR:-$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." 2>/dev/null && pwd)}"
cd "$root" 2>/dev/null || exit 0

{
	version=$(sed -n 's/^[[:space:]]*"version":[[:space:]]*"\([^"]*\)".*/\1/p' package.json 2>/dev/null | head -n 1)
	branch=$(git branch --show-current 2>/dev/null)
	echo "MATURITKA ${version:-?} on branch ${branch:-?}"
	echo
	echo "## Last commits"
	git log --oneline -10 2>/dev/null
	echo
	echo "## Uncommitted (git status --short)"
	status=$(git status --short 2>/dev/null)
	if [ -n "$status" ]; then
		echo "$status"
		echo "(changes you did not make are the owner's work: do not touch or commit them)"
	else
		echo "clean"
	fi
	echo
	if [ -f ROADMAP.md ]; then
		echo "## From ROADMAP.md"
		# from "## Now" up to (not including) the next "## " heading after "## Last sessions"
		awk '
			/^## Now([[:space:]]|$)/ { on = 1 }
			/^## / && !/^## (Now|Last sessions)([[:space:]]|$)/ { on = 0 }
			on { print }
		' ROADMAP.md 2>/dev/null
	fi
	echo
	echo "Before writing content read docs/writing-style.md; finishing a change: docs/workflow.md."
} 2>/dev/null

exit 0
