# Whiteboard

The drawing board under the math pages: coordinates, touch, pen and pictures. Rules of highest importance are in [`AGENTS.md`](../AGENTS.md).

## Whiteboard (`src/lib/whiteboard.ts`)

Strokes, notes and the ruled paper share one coordinate system, a fixed **paper** of
`FRAME_W × FRAME_H` (640 × 360) units. The paper is fitted into the canvas element with a single
factor for both axes (`fit = min(w / FRAME_W, h / FRAME_H)`, published as `--wb-s` on the board),
anchored top-left. So fullscreen, page zoom or a resized window scale the *same picture* — they
must never restretch it, which is what storing 0..1 fractions of the element did. Pen widths are in
paper units too; notes position themselves with `--wx/--wy` × `--wb-s` (global.css) and never drop
below 0.8× so a phone keeps readable type. Zoom/pan are kept in paper units as well. The small board
is 16:9 by CSS (`aspect-ratio`), the canvas is out of flow; saved data is versioned (`v: 2`) and the
old fractional format is migrated on load.

A click without a drag is a dot (a round hole with the eraser) — a stroke of one point is drawn as a
filled circle — and the brush ring is exactly as wide as the line it draws or the hole it erases (it
was twice that). A picture card on the board is resized by dragging the grip in its bottom-right corner
(the whole note scales with the distance of the pointer from its top-left corner, 0.35–3×, double
click resets): the factor is `--note-k`, multiplied into `--note-s`, which also drives the note's size
limits; the grip and the close button grow back as the note shrinks so they stay hittable. In
fullscreen the toolbar is a vertical pill (on a screen lower than 560px — a phone held sideways — a
horizontal row along the top instead, it did not fit); its dividers are real `.whiteboard-sep` elements (a
`border-top` on the buttons was drawn *as* their top border and ran into their corners).

Every change to the drawing is an entry of a history (`Op`: a stroke added, a stroke erased, the whole
board cleared) with a `future` list behind it, so **undo / redo** (buttons, and Ctrl+Z / Ctrl+Y /
Ctrl+Shift+Z while the canvas has focus — it takes focus on pointer down) also take back a "clear";
`loadJSON` starts a fresh history. The view moves by Ctrl+wheel (zoom to the cursor), middle-button
drag (pan) and, on touch, a two-finger pinch (`beginPinch` / `movePinch`: zoom is clamped to 0.5–8× and
the paper point under the midpoint stays under it; the one-finger stroke that began the gesture is
discarded, not left as a dot). The recentre button is enabled only while the view is off the default —
`onViewChange` (third constructor argument) tells the toolbar, `syncButtons` in `MathScratchpad.astro`
keeps the three buttons' `disabled` state in step.

### Touch, pen and touchpad

Each stroke belongs to one pointer (`currentPointer`): moves of any other pointer never extend it — they
used to, and two fingers (or a pen and a resting palm) drew straight lines between the two places. A second
finger discards the stroke the first one began and starts a pinch (zoom + pan); a quick two-finger tap that
hardly moves (< 300 ms, < 10 px) is **undo**. Once a **pen** has touched the board (`penSeen`) fingers stop
drawing — one finger pans, two pinch — and a touch wider than `PALM` (40 px) is ignored (palm rejection,
as in GoodNotes / Procreate). A touchpad pinch arrives as Ctrl+wheel (zoom); a two-finger scroll pans the
paper only in fullscreen or when already zoomed in, otherwise it scrolls the page. Pointer moves are drawn
once per animation frame (`requestRedraw`), coalesced events are used for smooth fast strokes and strokes
are drawn as quadratic curves through the segment midpoints; the canvas rect is cached per gesture.

The paper (squares / lines) and the pictures are HTML around the canvas: `syncView()` publishes the view as
`--wb-z` (zoom) and `--wb-px` / `--wb-py` (pan, paper units) next to `--wb-s`, so they zoom and pan with
the drawing; a picture is dragged in paper units (`boardScale` = fit × zoom).

## Pictures on the whiteboard (`MathScratchpad.astro`)

The board used to offer every task of the page ("⇥ na tabuli" buttons, a "Zadání" dropdown, notes linked
back to the text). The user found it pointless, so it was removed (with `exercises.ts` and its listing
script); the board is only for drawing. Instead a **picture** can be put on it: the toolbar button (file
picker), **Ctrl+V** while the board is in use (after a press on it, or in fullscreen — a paste elsewhere on
the page is left alone) or a file **dropped** on the paper. The picture is shrunk to `MAX_IMAGE` (900 px)
and stored as a JPEG data URL, and becomes a card made by `createFloatingNote` (`.whiteboard-note.is-image`):
moved by dragging, scaled by the corner grip, closed by ×. Pictures are saved with the drawing under
`…:images` (data URL, position, scale); when localStorage is full they stay for the visit only. "Vymazat
vše" removes them too. The old `…:notes` key is dropped on load.
