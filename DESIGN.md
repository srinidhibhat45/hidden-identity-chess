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
typography:
  display:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "33px"
    fontWeight: 800
    lineHeight: 1.22
    letterSpacing: "-1.25px"
  headline:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "-0.8px"
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "12px"
    lineHeight: 1.8
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 800
rounded:
  board: "4px"
  badge: "6px"
  field: "8px"
  control: "9px"
  notice: "10px"
  tabs: "11px"
  status: "12px"
  table-mobile: "13px"
  table: "17px"
  dialog: "18px"
spacing:
  compact: "3px"
  small: "8px"
  control: "12px"
  panel: "20px"
  section: "24px"
  page: "40px"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "#fffef8"
    rounded: "{rounded.control}"
    padding: "13px 15px"
    height: "49px"
  button-primary-hover:
    backgroundColor: "#174535"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "10px 13px"
    height: "41px"
  button-text:
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "10px 12px"
    height: "42px"
  room-input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "12px"
  mode-tab-selected:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "11px 5px"
  board-table:
    backgroundColor: "{colors.deep}"
    textColor: "#f3f3e9"
    rounded: "{rounded.table}"
    padding: "19px 24px 21px"
  side-pill-active:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.deep}"
    rounded: "{rounded.badge}"
    padding: "5px 9px"
---

# Design System: Hidden Identity Chess

## Overview

**Creative North Star: "Modern Board-Game Lounge"**

A familiar, relaxed place to play chess with friends. The muted teal table, ivory and sage squares, and geometric chess silhouettes make the game recognizable immediately. Friendly Manrope lettering and softly rounded controls keep the experience neither cartoonish nor formal.

The board carries the visual weight. The surrounding interface stays quiet, precise, and compact, with a clear next action and deliberate emphasis when a concealed piece is revealed.

**Key Characteristics:**
- A tactile teal table on warm paper.
- Recognizable geometric pieces and shield-shaped concealed identities.
- Quiet controls with warm yellow selection and turn cues.
- A board-first layout on desktop and mobile.

## Colors

The palette combines a grounded green room with light, warm playing surfaces.

### Primary
- **Lounge Teal** (`deep`): table, privacy cover, results, reveal banners, and toast surfaces.
- **Playing Green** (`green`): primary actions, switches, and connection text.

### Secondary
- **Warm Selection** (`yellow`): selected squares, active turns, private guesses, and actions on dark covers or results.
- **Board Sage** (`sage`) and **Board Ivory** (`ivory`): alternating board squares; ivory also identifies the light army.

### Neutral
- **Warm Paper** (`paper`) and **Soft White** (`white`): page and control surfaces.
- **Forest Ink** (`ink`) and **Quiet Green** (`muted`): primary and supporting text.
- **Soft Divider** (`line`): fine structural separators.
- **Clay Danger** (`danger`): reserved semantic token; it is not a general accent.
- **Amber Focus** (`focus`) and **Board Amber Focus** (`board-focus`): visible keyboard outlines on light controls and board squares respectively.

**The State Color Rule.** Keep yellow tied to selection, turn, reveal, or a high-priority action on a dark surface.

## Typography

**Display and Body Font:** self-hosted Manrope, with system-ui and sans-serif fallbacks. One rounded, clean family connects the board and controls. Headings use tightly tracked extra-bold type; supporting copy stays small and open.

- **Display:** the introductory statement; mobile uses (29px), then (26px) below the narrowest breakpoint.
- **Headline:** panel headings; mobile uses (23px). Dialog titles use (23px).
- **Body:** panel descriptions use the frontmatter role. Introductory copy is slightly larger (13px), and small supporting notes use (10px).
- **Label:** field labels use extra-bold weight; tabs and secondary controls use (700). Board coordinates use (9px), reducing to (8px) on mobile.
- Room codes use tabular numerals, extra-bold weight (800), and expanded tracking (5px). Move histories also use tabular numerals.

## Layout

The desktop content container is capped at (1184px). The workspace pairs a flexible square board with a (370px) control panel and (37px) gap. Intermediate breakpoints narrow the panel to (330px), then (290px), while reducing gutters and table padding.

At (760px) and below, the workspace becomes one column: board first, controls second, each capped at (570px). Page gutters become (20px), then (12px) at (370px). The header contracts from (86px) to (71px); text help becomes an icon. During play, the introductory headline disappears on mobile to keep the board close to the top.

The board remains an eight-column square grid. Coordinates sit outside the squares within the table. Compact gaps organize controls; larger spacing separates field groups and the primary action. Do not turn the control panel into a stack of unrelated cards.

## Elevation & Depth

Depth is restrained: the dark table sits above the paper with one ambient shadow, while selected mode tabs lift slightly within their tonal track. Chess tokens use small drop shadows. Dialogs and transient feedback carry stronger elevation because they interrupt the current surface. Most controls rely on tone and fine borders.

- **Table:** `0 14px 32px #00000014`.
- **Selected tab:** `0 2px 5px #00000010`.
- **Reveal:** `0 10px 40px #00000033`.
- **Dialog:** `0 20px 70px #00000055`, with a translucent dark backdrop.

## Shapes

Keep the square board geometry crisp inside the generously rounded table. Controls use gentle corners, with smaller radii for compact status pills and larger radii for dialogs. The brand mark is a slightly tilted, rounded chess token. Pieces are original inline SVG silhouettes in a shared (45-unit) viewBox; concealed pieces use a shield and question mark rather than a substitute chess silhouette.

## Components

- **Buttons:** green filled primary, fine-bordered soft-white secondary, transparent text and circular icon actions. Primary hover darkens; secondary and text hover use light green fills. Disabled controls reduce opacity. Preserve the visible (3px) amber keyboard outline, offset by (4px).
- **Room field:** a soft-white field with a fine green border, uppercase text, expanded tracking (2px), and the shared focus outline.
- **Mode tabs and segmented controls:** a soft green track contains a distinct selected tile. Mode selection uses a white tile and subtle shadow; difficulty selection uses a pale green fill. Keep selected state visible alongside semantic selection attributes.
- **Status and containers:** outlined pills identify hidden or locked armies; a yellow pill marks the active turn. The table, turn notice, room-code panel, result card, and modal use tonal contrast rather than ornamental borders.
- **Board:** selected squares turn yellow, legal empty destinations show a dot, and capture destinations show a ring. Last-move marks use an inset stroke. Keyboard focus uses an inset amber outline; arrow keys follow the visible board orientation. Re-rendering retains the focused control or square, with a meaningful next-action fallback when it disappears.
- **Privacy handoff:** cover the complete board frame with an opaque teal scrim, disable the covered squares, and require the next player to uncover their army. Do not show pieces through the handoff state.
- **Reveal and motion:** captures use a short rising banner and a piece flip; moved pieces land gently. Motion supports state changes. Respect `prefers-reduced-motion` by removing animations and transitions.

## Do's and Don'ts

### Do:
- **Do** keep the board dominant and place it before settings on mobile.
- **Do** retain recognizable geometric chess silhouettes and shield-shaped concealed identities.
- **Do** preserve keyboard focus through state updates and provide a visible outline.
- **Do** keep handoff coverage opaque and honor reduced-motion preferences.

### Don't:
- **Don't** introduce cartoon mascots or formal tournament ornament.
- **Don't** use yellow as general surface decoration.
- **Don't** reveal an opponent's identity through a visual or accessibility label.
- **Don't** replace the restrained tone-and-border hierarchy with heavy shadows on every control.
