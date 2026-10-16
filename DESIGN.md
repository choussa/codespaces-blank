---
name: glyph
description: A precision instrument for typesetting — the clean-room Typst editor's visual system.
colors:
  ink: "#0c0e13"
  ink-well: "#08090d"
  ink-elevated: "#12151c"
  ink-raised: "#171b24"
  ink-hover: "#1b212c"
  hairline: "#262d3a"
  iris: "#8d8fff"
  iris-solid: "#635bf0"
  iris-soft: "#2a2547"
  brand-violet: "#6355f5"
  brand-azure: "#2f6fe0"
  text: "#eef1f7"
  text-muted: "#a6b0c0"
  text-faint: "#79849a"
  success: "#3ddc97"
  warning: "#f5b544"
  danger: "#ff6b72"
  paper: "#e9ecf1"
  paper-raised: "#f5f7fa"
  paper-text: "#12151b"
typography:
  ui:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.55
  title:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 600
    lineHeight: 1.22
    letterSpacing: "-0.03em"
  label:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.09em"
  mono:
    fontFamily: "Geist Mono Variable, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  xs: "4px"
  sm: "6px"
  md: "8px"
  lg: "12px"
  pill: "999px"
spacing:
  "1": "4px"
  "2": "6px"
  "3": "8px"
  "4": "12px"
  "5": "16px"
  "6": "24px"
  "7": "32px"
components:
  button-primary:
    backgroundColor: "{colors.iris-solid}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "5px 9px"
    height: "28px"
  button-primary-hover:
    backgroundColor: "#6f67ff"
  button-secondary:
    backgroundColor: "{colors.ink-raised}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "5px 9px"
  menu-item:
    backgroundColor: "{colors.ink-raised}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "6px 9px"
  menu-item-active:
    backgroundColor: "{colors.iris-solid}"
    textColor: "#ffffff"
  palette-item-active:
    backgroundColor: "{colors.iris-solid}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "7px 10px"
  field:
    backgroundColor: "{colors.ink-well}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "6px 9px"
---

# Design System: glyph

## Overview

**Creative North Star: "The Instrument"**

glyph is a typesetting tool, so its interface is held to the standard it exists to produce. The chrome behaves like a precision instrument: quiet at rest, exact under the hand, and honest about state at every moment. It is dense without being cramped, and layered without decoration — every surface earns its elevation from a real relationship, never from a drop shadow pulled out of habit.

The system is deliberately restrained. One typeface family carries labels, headings, body, and controls; a single mono carries code, paths, and every measured value, where its fixed advance is functional rather than stylistic. One accent, iris, appears only where interaction or current state lives — a rail button that is active, a menu row under the pointer, the caret, the focus ring. Because the accent is rare, its presence is information.

Two themes share one geometry. Dark is "ink": a deep, cool ladder where raised planes are lighter than the well they sit on. Light is "paper": a white content well floating on a soft gray chrome. The relationship inverts between themes; the discipline does not.

**Key Characteristics:**
- Measurement is monospaced; prose and labels are not.
- Depth is real (offset + blur + a one-pixel top highlight), never a zero-offset halo.
- The accent is a signal, not a surface treatment.
- Every state is designed: hover, focus, active, disabled, loading, empty, error.
- Browser surfaces — selection, caret, scrollbars, focus rings — wear the palette.

## Colors

A cool ink ladder carries the product; iris is the only voice that speaks.

### Primary
- **Iris** (#8d8fff): the interactive tone — active rail icons, focus rings, the caret, links, current selections, the `text-wrap` emphasis in the editor. Chosen to read clearly on ink (6.5:1) while staying distinct from the generic link blue a category default would reach for.
- **Iris Solid** (#635bf0): the filled tone that carries white ink — primary buttons, active menu and palette rows, the search "replace all" action, the entry badge. White on it measures 4.9:1.
- **Brand Gradient** (#6355f5 → #2f6fe0): the mark only. Both stops are dark enough that the white glyph clears 4.5:1 across the whole gradient — the earlier, brighter azure did not.

### Neutral
- **Ink** (#0c0e13): the application base and the preview field.
- **Ink Well** (#08090d): the editor canvas and every text field — the deepest plane, where content lives.
- **Ink Elevated** (#12151c): top bar, rail, side panels, tab strip, toolbars, status bar.
- **Ink Raised** (#171b24): menus, dialogs, the command palette, transient pills.
- **Hairline** (#262d3a): every divider; solids step by roughly three points of lightness, so the ladder reads as a stack, not as a flat plate.
- **Body / Muted / Faint** (#eef1f7 / #a6b0c0 / #79849a): body, secondary, and tertiary text. All three clear WCAG AA on both ink and ink-elevated.

### Named Rules
**The Rare Accent Rule.** Iris covers well under 10% of any screen. Its scarcity is what makes "this is active" legible at a glance.

**The Two-Theme Rule.** A token change must make sense in both themes. Inverting a surface relationship (content well vs. chrome) is allowed; changing the relationship between accent and state is not.

## Typography

**Display Font:** Geist Variable (fallback: ui-sans-serif, system-ui)
**Body Font:** Geist Variable (same family; a product UI does not need a display/body pairing)
**Label/Mono Font:** Geist Mono Variable (fallback: ui-monospace, SFMono-Regular, Menlo)

**Character:** Geist is geometric, neutral, and slightly technical — it holds up at 11px in a dense panel and at 19px in a dialog title without changing personality. Geist Mono is reserved for the places where character advance is meaningful: source code, file paths, counts, line and column numbers, timings, and versions.

### Hierarchy
- **Title** (600, 19px, 1.22, tracking −0.03em): dialog and welcome titles. `text-wrap: balance`.
- **Heading** (600, 15px, 1.22, tracking −0.01em): empty-state titles, in-panel section headings.
- **Body** (400, 13px, 1.55): the base size for the whole interface, including editor prose.
- **Small** (400, 12px, 1.4): panel rows, menu items, form controls.
- **Label** (600, 11px, tracking 0.09em, uppercase): panel titles, shortcut-group headings, palette groups. The floor is 11px: nothing functional ships smaller, which is why the entry badge and status tag were raised from 9px.
- **Mono** (400, 11–12px, tabular numerals): code, paths, counts, positions, and every aligned number.

### Named Rules
**The Measurement Rule.** If a value is counted, timed, or positioned, it is set in the mono with tabular numerals. If it is read, it is set in Geist.

## Layout

A three-band application shell: a 48px top bar, a flexible workspace body, and a 28px status bar. The body is a fixed 52px icon rail, an optional side panel (180–560px, user-resizable), then the panes. Panes split horizontally or vertically on a 5px splitter whose visual seam is 1px — a forgiving drag target, an exact line.

Density is a feature. Panel rows are 26px, tab strip 36px, toolbars 36px, menu rows 28px. Sides are 12px; the rhythm steps 4 / 6 / 8 / 12 / 16 / 24 / 32. Responsive behavior is structural, never fluid: below 900px the side panel becomes an absolutely positioned drawer and the panes stack; below 640px the menu labels and center notice drop out and the top bar tightens to 44px.

## Elevation & Depth

A hybrid: tonal layering does the work, shadows confirm it. Four planes step by lightness, each with a 1px top highlight (`inset 0 1px 0 rgba(255,255,255,0.045)`) so light appears to come from above. Shadows carry an offset and a soft blur; a zero-offset colored halo is never used. The rendered page in the preview is the one element that floats on a real, paper-like shadow.

### Shadow Vocabulary
- **elev-1** (`0 1px 2px -1px rgba(0,0,0,.6), 0 1px 3px rgba(0,0,0,.35)`): resting chrome, small raised chips, the segmented-control active face.
- **elev-2** (`0 4px 12px -2px rgba(0,0,0,.55), 0 2px 6px -2px rgba(0,0,0,.4)`): the rail hover label, dropdown surfaces.
- **elev-3** (`0 18px 48px -12px rgba(0,0,0,.7), 0 8px 20px -8px rgba(0,0,0,.5)`): menus, dialogs, the command palette, the mobile drawer.
- **elev-page** (`0 1px 1px rgba(0,0,0,.4), 0 12px 32px -12px rgba(0,0,0,.7)`): the rendered document page.

### Named Rules
**The Real Light Rule.** Every raised surface carries both a shadow and a top highlight. A shadow alone reads as a sticker; the highlight is what makes it a plane.

## Shapes

Gently curved throughout, sized to the element rather than the page. Utility radii are 4px (kbd, small chips), 6px (buttons, inputs, menu rows, rail buttons), 8px (menus, tooltips, dialogs' inner blocks), and 12px (dialogs, the palette, the welcome card, empty-state marks). Status pills, badges, and switches are fully rounded (`999px`); the entry marker is a small circle. Borders are 1px hairlines — never a thick colored rail on a card or list item, which is why the CodeMirror diagnostic's 3px severity border became a drawn marker.

## Components

### Buttons
- **Shape:** softly rounded (6px), 28px resting height, 5px × 9px padding, weight 500.
- **Primary:** Iris Solid with white ink (4.9:1), used once per surface at most.
- **Secondary:** Ink Raised with a hairline border, for the alternative action beside a primary.
- **Hover / Focus:** hover lightens to Ink Hover and the fill variant to `#6f67ff`; focus is a 2px iris ring at 1px offset; active presses down 0.5px.
- **Ghost:** icon-only buttons (rail, toolbars, panel actions) are transparent at rest and colored on hover.

### Chips
- **Style:** pill radius, mono for anything numeric, 4px × 11px padding.
- **State:** counts use a quiet inset background; error and warning chips carry a soft tinted background and their semantic hue as text.

### Cards / Containers
- **Corner Style:** 8px for inner blocks, 12px for dialogs and the palette.
- **Background:** Ink Raised, one plane above the panel behind it.
- **Shadow Strategy:** elev-3 with the top highlight (see Elevation).
- **Border:** 1px Hairline.

### Inputs / Fields
- **Style:** Ink Well background with a 1px hairline, 6px radius; comfortable 6px × 9px padding.
- **Focus:** border shifts to iris with a 3px soft iris glow.
- **Disabled / Error:** disabled drops to 40% opacity; invalid search input turns the danger hue.

### Navigation
- **Rail:** 52px, 36px buttons, icon-only with a transient hover label. The active button takes a soft iris background and a 3px left indicator.
- **Menus:** raised panel, 6px radius rows, hover fills with Iris Solid and white ink; keyboard shortcuts ride on the right in mono.
- **Command palette:** the primary navigation surface. Grouped, mono hints, iris-filled active row, a footer of key hints.

### Empty & Loading States
- **Empty:** a 46px iris-tinted mark with the accent border, a balanced title, a ≤44ch explanation, and real actions — never "nothing here".
- **Loading:** the preview draws a skeleton of the page (its true aspect ratio) rather than a spinner in the middle of content.
- **First run:** the welcome overlay teaches the three ideas that make glyph different, then never appears again.

## Do's and Don'ts

### Do:
- **Do** set every counted or positioned value in Geist Mono with `font-variant-numeric: tabular-nums`.
- **Do** keep every hover, focus, active, disabled, loading, empty, and error state designed.
- **Do** theme the browser's own surfaces: `::selection`, `caret-color`, `accent-color`, scrollbars, and focus rings all read from the palette.
- **Do** let a raised plane be lighter than the plane below it, with a 1px top highlight.
- **Do** keep functional text at 11px or larger; reserve 10px for kbd and non-interactive micro-labels.

### Don't:
- **Don't** use the accent for anything that is not interaction or current state.
- **Don't** put a thick colored border on one side of a card, list item, or alert; convey severity with a drawn marker or a tinted chip.
- **Don't** reach for a display face in buttons, labels, or data — one family, tuned by weight, size, and tracking.
- **Don't** use mono as a costume for "technical"; it is for code, paths, and measurement only.
- **Don't** ship a spinner where a skeleton can hold the shape of the content.
- **Don't** introduce a token that only works in one theme.
