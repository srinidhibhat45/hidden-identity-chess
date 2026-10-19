# Game surface
Mode: Operate. Scope: public/game. User approved a familiar, relaxed feel and direct code-first construction.
Grounded worlds: 1 community chess club; 2 travel chess wallet; 3 tournament scoresheet; 4 casual game shelf; 5 park chess table; 6 modern board-game lounge; 7 correspondence chess postcard.
Assigned #6, seed 51bc3706. The user's familiar brief binds this direction. Challengers are declined: monochrome product marketing weakens the tactile play scene; reference edition weakens board clarity; star atlas weakens chess recognition; coded catalog weakens readable controls; split-flap concourse weakens square-board hierarchy. Raises: product marketing's proof-first discipline makes the board the opening content; the reference edition's precision aligns controls; atlas coordinate clarity keeps board labels; catalog's state discipline makes concealed/revealed distinct; concourse's shared attention becomes one deliberate capture reveal.
## Direction contract
THESIS: A modern board-game lounge, where the board is the main event and a clear play panel gets friends into a game.
OWN-WORLD: Muted teal room, ivory and sage squares, rounded tactile chess tokens, Manrope type, warm yellow selection. Friendly but restrained.
STORY: Recognize chess, see the concealed army, arrange your pieces, choose a partner and play.
FIRST VIEWPORT: Quiet compact header, one short title, large live board left, mode and setup controls right. Primary play action at the bottom of the setup panel. On phones the board fills the width before settings.
FORM: Modern board-game lounge, grounded #6, seed 51bc3706. Capture reveal is the signature interaction; local handoff covers the entire board.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Mobile and zen polish
The user requested a familiar phone UI, minimal text and clutter during play, improved pieces, and a polished thinking-game feel. Keep the teal/ivory/sage world. Setup stays board-led with compact mode selection; secondary options collapse. During play default to a centered board, compact player rows, one state line and a thumb-friendly Move/Bluff/Challenge/Moves/More dock. History and secondary tools move to sheets. Desktop may exit zen for a history panel; landscape puts controls beside the board. Replace geometric placeholders with clearer original Staunton silhouettes. No slogans or footer during games. Confirm essential actions remain accessible in every game phase.

## Samsung phone reliability and touch adaptation
The user reports ERR_FAILED only after home-screen installation on a Samsung S24 Ultra. Keep the current visual world and zen play; make canonical and legacy installed launches work with cached redirected HTML, and gate install on a complete offline save. On phones use 48px minimum non-board targets, 56px primary actions, readable 14–16px labels, and a two-row play dock. Enlarge the board to use the phone width; setup actions come before the arrangement board so Play is visible without scrolling past it. Preserve 44px minimum landscape squares by allowing vertical scroll rather than shrinking the board. Verify 360, 384 and 412px portrait widths, landscape and desktop; actual Samsung hardware is not available in this workspace.
