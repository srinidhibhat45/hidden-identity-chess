---
name: Hidden Identity Chess
description: Familiar chess with a little mystery, in a modern board-game lounge.
colors:
  ink: "#193b35"
  muted: "#586e66"
  green: "#265b4d"
  deep: "#183e38"
  paper: "#f6f7f2"
  white: "#fffefa"
  line: "#dce2d8"
  sage: "#91af94"
  ivory: "#e8ead3"
  yellow: "#f3cf70"
  danger: "#a53c33"
  focus: "#c28a22"
  board-focus: "#87640d"
  last-light: "#d0d49c"
  last-dark: "#a6b77e"
  piece-stroke-dark: "#102a24"
  piece-detail-dark: "#c9d6bf"
  target: "#193b354d"
  backdrop: "#102a2499"
typography:
  display:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "33px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-1.2px"
  headline:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "-0.7px"
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "13px"
    lineHeight: 1.7
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 700
  player:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 700
  status:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "11px"
    lineHeight: 1.5
  phone-body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "16px"
    lineHeight: 1.5
  phone-label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 700
  phone-action:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 800
  phone-player:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 700
  phone-status:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "14px"
    lineHeight: 1.5
rounded:
  board: "3px"
  segment: "5px"
  compact-control: "6px"
  mode-tab: "7px"
  field: "8px"
  control: "9px"
  tabs: "10px"
  table: "12px"
  switch: "14px"
  dialog-mobile: "16px"
  dialog: "16px"
  sheet: "18px 18px 0 0"
spacing:
  compact: "3px"
  small: "8px"
  control: "12px"
  phone-page: "4px"
  phone-content: "12px"
  phone-header: "16px"
  panel: "20px"
  section: "24px"
  desktop-page: "30px"
  workspace-gap: "35px"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "13px 16px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.deep}"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "10px 14px"
    height: "44px"
  button-text:
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "9px 12px"
    height: "44px"
  icon-action:
    textColor: "{colors.ink}"
    rounded: "{rounded.tabs}"
    size: "44px"
  room-input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "13px 12px"
  mode-tab-selected:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.mode-tab}"
    padding: "10px 13px"
    height: "42px"
  board-table:
    backgroundColor: "{colors.deep}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.table}"
    padding: "10px 12px 8px"
  player-status-active:
    textColor: "{colors.yellow}"
  move-mode-selected:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.compact-control}"
    padding: "8px 13px"
    height: "44px"
  move-mode-bluff:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.compact-control}"
  dock-action:
    textColor: "{colors.muted}"
    rounded: "{rounded.field}"
    padding: "5px 8px"
    height: "54px"
    width: "60px"
  dialog:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.dialog}"
    padding: "28px"
    width: "480px"
  button-primary-phone:
    backgroundColor: "{colors.green}"
    textColor: "{colors.white}"
    typography: "{typography.phone-action}"
    rounded: "{rounded.control}"
    padding: "14px 16px"
    height: "56px"
  button-secondary-phone:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "12px 16px"
    height: "48px"
  button-text-phone:
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "12px 16px"
    height: "48px"
  icon-action-phone:
    textColor: "{colors.ink}"
    rounded: "{rounded.tabs}"
    size: "48px"
  room-input-phone:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "14px"
    height: "56px"
  mode-tab-phone:
    textColor: "{colors.muted}"
    typography: "{typography.phone-label}"
    rounded: "{rounded.mode-tab}"
    padding: "8px 4px"
    height: "68px"
  board-table-phone:
    backgroundColor: "{colors.deep}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.table}"
    padding: "8px 4px"
    width: "560px"
  move-mode-phone:
    textColor: "{colors.ink}"
    rounded: "{rounded.compact-control}"
    padding: "12px"
    height: "52px"
  dock-action-phone:
    textColor: "{colors.muted}"
    typography: "{typography.phone-label}"
    rounded: "{rounded.field}"
    padding: "8px"
    height: "64px"
  sheet-mobile:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "30px 20px max(24px, env(safe-area-inset-bottom))"
    width: "100%"
---

# Design System: Hidden Identity Chess

## Overview

**Creative North Star: "Modern Board-Game Lounge"**

A familiar, relaxed place to play chess with friends. The muted teal table, ivory and sage squares, and original Staunton-style chess silhouettes make the game recognizable immediately. Friendly Manrope lettering and softly rounded controls keep the experience neither cartoonish nor formal.

The board carries the visual weight. Phone setup puts the play controls before the arrangement board so the next action is visible immediately; active play defaults to zen with compact player rows, one state line, and a thumb-friendly two-row phone dock. Secondary tools and move history open on demand. Capture reveals remain a deliberate moment of emphasis.

**Key Characteristics:**
- A tactile teal table on warm paper.
- Recognizable Staunton pieces and shield-shaped concealed identities.
- Quiet controls with warm yellow selection, bluff, and turn cues.
- Centered zen play, with responsive sheets and a thumb-friendly dock.

## Colors

The palette combines a grounded green room with light, warm playing surfaces. The frontmatter preserves the exact implemented colors; the sidecar's eight-step dark-to-light OKLCH ramps are display metadata, not additional application colors.

### Primary
- **Lounge Teal** (`deep`): table, opaque privacy cover, capture banner, toast, and primary hover.
- **Playing Green** (`green`): primary actions, enabled switches, and light-piece detail.

### Secondary
- **Warm Selection** (`yellow`): selected squares, active turn text, private guesses, active Bluff, and the uncover action on a dark surface.
- **Board Sage** (`sage`) and **Board Ivory** (`ivory`): alternating board squares; sage also supplies coordinates and quieter player information on teal.

### Neutral
- **Warm Paper** (`paper`) and **Soft White** (`white`): page/dialog surfaces and controls/light pieces respectively.
- **Forest Ink** (`ink`) and **Quiet Green** (`muted`): primary and supporting text. Forest Ink also fills dark pieces.
- **Soft Divider** (`line`): fine separators, tab and move-mode tracks, secondary hover, and alternating history rows.
- **Clay Danger** (`danger`): the Resign menu action.
- **Amber Focus** (`focus`) and **Board Amber Focus** (`board-focus`): visible keyboard outlines on controls and squares respectively.
- **Last Move Light / Dark** (`last-light`, `last-dark`): tinted fills on the previous move's origin and destination; selection overrides both.
- **Dark Piece Keyline / Detail** (`piece-stroke-dark`, `piece-detail-dark`): contrasting outline and pale internal marks on dark pieces.
- **Move Target** (`target`): translucent legal-destination dots. **Modal Backdrop** (`backdrop`): translucent dark scrim behind dialogs.

**The State Color Rule.** Keep yellow tied to selection, bluff, turn, reveal-related emphasis, or a high-priority action on a dark surface.

## Typography

**Display and Body Font:** self-hosted Manrope, with system-ui and sans-serif fallbacks. The regular font supports weights 400–600; the bold file supports 700–800. One clean family connects board, controls, and sheets.

- **Display:** setup introduction only; 33px/1.2, weight 800, tracking −1.2px. It becomes 29px at 1150px, 28px with −0.8px tracking in the phone layout, and 26px at 360px.
- **Headline:** setup panel 24px/1.3, weight 800, tracking −0.7px. Dialog titles use 23px/1.3 with −0.6px tracking on desktop and 24px on phones; move headings use 21px desktop / 24px phone.
- **Body:** panel descriptions 13px/1.7 on desktop and 16px/1.5 on phones. Dialog copy is 13px/1.8 desktop / 16px/1.65 phone. Keep instructions short and attached to their action.
- **Label:** desktop labels use 11px/700, primary actions 13px/800, secondary actions 12px/700, and dock captions 10px. Phone dock and difficulty labels use 14px; primary, secondary, text, and Move/Bluff actions use 16px. Phone mode tabs use 14px, reducing to 13px at 360px. Supporting phone state and options copy may use 12–13px.
- **Player:** names use 12px/700 desktop / 14px phone. Captured pieces sit inline rather than adding another text row; secondary player states use 10px desktop / 12px phone.
- **Status:** one centered 11px/1.5 desktop / 14px/1.5 phone line with tabular numerals. Move history also uses tabular numerals, at 12px desktop / 15px phone.
- Coordinates use 9px desktop / 10px phone. Room-code input uses 16px desktop / 18px phone, with 2px tracking and uppercase text; room invitation codes use 1px tracking.

## Layout

**Setup.** The header caps at 1160px and is 72px tall; the page caps at 1080px with 25px top padding. A flexible square board and a 320px setup panel share a 35px gap. The short introduction and compact Computer / Online friend / Pass & play tabs sit above them. Shuffle and Classic share a row; the primary start action comes before collapsed Game options. Options expose difficulty and revealed kings with a concise summary when closed.

**Zen play.** Zen defaults on and persists locally. There is no introductory headline or footer during a game. The centered table width is the board-size variable plus 37px; that variable is `min(600px, calc(100dvh - 280px), calc(100vw - 36px))`. Compact player rows frame the eight-column square board. One live state line and the Move / Bluff / Challenge / Moves / More dock sit directly beneath it. The line reflects the current phase, last move, privacy handoff, reconnecting, guesses, or bluff state without stacking notices.

**Desktop with zen off.** Move history appears alongside the board in a 280px panel with a 28px gap. The status and dock remain aligned to the board column. Moves remains available as a sheet in either mode.

**Responsive states.**
- At 1150px and below: 30px page gutters, setup panel 300px, gap 27px, and smaller introduction/tab padding.
- At 920px and below: setup introduction and tabs stack, tabs fill their track, panel becomes 270px / gap 22px. Standard play history becomes 240px / gap 22px. Supporting player captions disappear.
- The full phone layout applies at 760px width and below, and whenever height is at most 600px and width is at most 1100px. Short landscape receives the same readable type, touch controls, setup ordering, and sheets as portrait.
- In the phone layout: setup is one column with the setup panel before the board; table and play controls cap at 560px, with a 536px setup-panel cap. Header is 64px with 16px gutters; page gutters are 4px, setup top padding 16px, and game top padding 6px. The setup introduction has 12px inner gutters. Table padding is 8px 4px with 12px corners. Player rows are 36px high. The square board takes the available table width rather than the desktop viewport-height size formula. Both zen and standard hide inline history and use sheets. Phone labels and controls remain readable; allow document scrolling when content exceeds the viewport.
- The phone dock has two rows: Move/Bluff fills the first, while Challenge, Moves, and More share three equal columns beneath, with an 8px gap. Move/Bluff buttons are 52px minimum height; dock actions are 64px. Review puts its 56px primary action across the first row, with supporting actions below. Penalty instructions span the top row. Respect safe-area padding at the top, sides, and bottom.
- At 360px and below: brand name becomes 15px, introduction 26px, and mode-tab captions 13px; keep the full touch targets and two-row dock.
- In landscape at maximum height 600px and maximum width 1100px: header is 56px. Both zen and standard place the table left and a 240–280px state/control column right, separated by 20px. Board size is `clamp(352px, 43vw, 400px)`; its table width adds 20px. The layout caps at `calc(100% - 32px)`. Move/Bluff remains 48px minimum height, dock actions 64px, and status/labels 14px. Preserve at least 44px squares and allow vertical scroll instead of shrinking the board to fit the short viewport.
- On any coarse pointer, non-board buttons, disclosure summaries, and inputs have a 48px minimum height, and icon actions a 48px minimum width. Board squares keep their square grid geometry.

**Online lobby.** Before joining a room, hide the table and center a maximum-430px lobby with Create a room and the Room code / Join row. Keep Game options collapsed beneath. On phones the introductory slogan is hidden in this lobby. Once a room exists, restore private board arrangement with compact room invitation information.

**Sheets.** Desktop tools/history open as centered dialogs, maximum 480px wide and 85dvh tall. In the full phone layout, `data-sheet` dialogs become full-width bottom sheets, maximum 90dvh, with a 36×4px sage grab mark, safe-area bottom padding, and independently scrolling move history (48dvh maximum). Other phone dialogs scroll within `calc(100dvh - 32px)`; dialog copy uses the readable phone scale.

**Standalone recovery.** The `/repair/` page is a separate, centered utility surface using the same paper, ink, muted, green, teal, yellow selection, and amber focus palette. Its content caps at 440px with 24px page padding; the heading uses 30px/1.2 and −0.7px tracking, and body copy 16px/1.6. One full-width 56px action refreshes offline files, then becomes Open game after success. Status copy wraps long content; a failed refresh offers Try again. Keep recovery visually simple and preserve saved games and notes.

## Elevation & Depth

Depth is restrained. The dark table has one low ambient shadow; selected tiles lift subtly within tonal tracks. Chess pieces use a small drop shadow. Dialogs and transient feedback carry stronger elevation because they interrupt the current surface. Most controls rely on tone and fine borders.

- **Table:** `0 10px 25px #0000000d`.
- **Selected mode tab:** `0 2px 4px #0000000a`; selected Move: `0 1px 3px #0000000a`.
- **Piece:** `drop-shadow(0 2px 1px #00000022)`; concealed piece: `drop-shadow(0 2px 1px #0000001a)`.
- **Reveal:** `0 8px 30px #00000022`.
- **Dialog:** `0 18px 60px #00000044`, with the `backdrop` color.
- **Toast:** `0 6px 25px #00000022`.

## Shapes

Keep the square board crisp with 3px outer corners inside the 12px table. Controls use 8–10px corners; selected mode tabs use 7px and compact move segments 6px. Switches use a 36×22px track with a 16px circular thumb, growing to 42×26px with a 20px thumb on phones. Dialogs use 16px corners; bottom sheets use 18px top corners only. The brand mark is an upright rounded knight tile, 34×38px with 10px corners on desktop and phone.

Pieces are original inline Staunton-style SVGs in a shared 45-unit viewBox, with consistent 1.5-unit keylines. The rook crenellations, knight profile, bishop mitre, queen crown, and king cross remain distinct at phone size. Light and dark armies have separate fill, stroke, and detail colors. Concealed pieces retain the shield, inset, and question mark. Visible pieces fill 88% of a square; concealed pieces fill 78%. Do not replace hidden pieces with a silhouette that leaks their type.

## Components

- **Buttons:** green filled primary (minimum height 50px desktop / 56px phone), soft-white bordered secondary and transparent text actions (44px desktop / 48px phone), and rounded-square icon actions (44×44px desktop / 48×48px phone). Phone action labels use 16px; non-board touch buttons never fall below 48px height. Primary hover becomes teal; other hover fills use `line`. Disabled controls use opacity .38. The shared keyboard outline is 3px amber, offset 3px; square focus is inset 3px in board amber.
- **Room field:** soft-white fill, 1px divider border, 8px radius, 13px 12px padding, uppercase 16px text with 2px tracking. On phones, use a 56px minimum field height, 18px text, and 14px padding. Pair with the 77px-minimum Join action (88px on phones).
- **Mode tabs and options:** a divider-tone track with 4px padding/gap contains the selected soft-white 7px-radius tile. Keep icons, semantic tab state, and the 42px desktop minimum height. Phone tabs place 22px icons above their labels with 68px minimum height. The Game options disclosure has top/bottom dividers and a 54px summary (68px phone, with the current options on its own line); its chevron rotates when open. Difficulty uses a fine-bordered segmented group. Revealed kings uses a labeled switch with supporting text inside the disclosure.
- **Player rows:** 10px army dot, name, small captured-piece strip, and right-aligned state. Active turn is yellow text, not a filled status pill. Captured icons are 16×18px (18×20px on phones). Do not add a second description row during play.
- **Board:** selection turns yellow; last-move origin/destination use the paired tinted fills. Legal empty destinations show a 23% dot, captures a 91% ring with a 3px yellow stroke. Hover uses a translucent white overlay. Coordinates stay outside squares. Arrow keys follow the visible orientation, and re-rendering retains focus or supplies a meaningful next-action fallback.
- **Match dock:** Move/Bluff shares one tonal track. Move is a raised white tile; active Bluff is yellow without shadow. Challenge, Moves, and More combine 20px icons with 10px labels on desktop, growing to 24px icons with 14px labels in the two-row phone dock; unavailable actions dim. Review replaces the move selector with Review moves / Confirm result / More. Penalty shows a concise piece-selection instruction plus Moves/More. A finished game uses a short result, Play again, and Moves.
- **Moves and More:** use the responsive dialog/sheet surface. Moves has paired move columns, alternating tonal rows, per-move challenge actions when applicable, and an offence summary. More lists zen, sound, private guesses, available practice tools, room invitation, rules, install, and resignation; 51px minimum menu rows on desktop and 56px on phones, left icons, and right-aligned state text keep it compact. Phone menu labels use 16px, state text 14px, and icons 24px. Install uses the same sheet treatment, with readiness, progress, retry, and platform instructions in readable copy. Resign alone uses danger text and a divider.
- **Privacy handoff:** hide the board and cover its complete frame with an opaque teal scrim, disable covered squares, and require the next player to uncover their army. The cover has one instruction and a yellow primary action.
- **Reveal and motion:** moved pieces land over .25s from `translateY(-5px) scale(1.04)`; capture banners rise 12px and resolve a 2px blur over .4s; revealed pieces flip from `rotateY(90deg)` over .5s. All three use `cubic-bezier(.16,1,.3,1)`. Disclosure chevrons rotate over .2s; switch thumbs slide 14px on desktop / 16px on phones over .15s. Toast transform and opacity transition over .2s. Reduced motion disables animations, transitions, and smooth scrolling on all elements/pseudo-elements.

## Do's and Don'ts

### Do:
- **Do** keep the board dominant, with compact player rows and one concise state line during play.
- **Do** default to zen, keep secondary controls in sheets, and preserve review and penalty actions in the dock.
- **Do** retain recognizable Staunton silhouettes and shield-shaped concealed identities.
- **Do** preserve keyboard focus, opaque handoff coverage, safe-area spacing, and reduced-motion behavior.
- **Do** keep phone non-board controls at least 48px high, primary actions at least 56px high, and the two-row dock readable in portrait and short landscape.
- **Do** put phone setup controls before the board and allow vertical scroll to preserve playable landscape squares.

### Don't:
- **Don't** introduce cartoon mascots or formal tournament ornament.
- **Don't** use yellow as general surface decoration.
- **Don't** reveal an opponent's identity through a visual or accessibility label.
- **Don't** add slogans, a footer, stacked status cards, or an always-visible settings panel during zen play.
- **Don't** replace the restrained tone-and-border hierarchy with heavy shadows on every control.
