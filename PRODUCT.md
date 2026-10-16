# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Writers, scientists, and engineers who author typeset documents in Typst and want
the write → compile → preview → export loop without leaving the browser. They are
usually working alone at a desk, in long focused sessions, often with a large
document (thesis, paper, report, slide deck) open across many files. Many come
from LaTeX and expect precision, keyboard-driven control, and a preview they can
trust; they can also tell when a tool is not a real compiler.

## Product Purpose

glyph is a browser-based Typst editor and render service. It reproduces the core
typst.app loop — write Typst source, compile instantly, preview the real pages,
export or share — as a clean-room build with no source, CSS, or copy taken from
the original. Success means the editor is genuinely usable for real documents:
the preview recompiles as you type, clicking a page finds its source, imports
resolve across files, and the workspace survives a reload without a server.

## Positioning

Two Typst engines, one document. The editor compiles locally with a WASM engine
in a Web Worker, so typing is instant and the interactive path costs no server
time and works offline; a separate native engine renders exports, share previews,
thumbnails and introspection that must not depend on the visitor's machine.
Because both halves are Typst, they produce the same document: the split is about
*where the work happens*, not about two renderers that disagree.

## Operating Context

- A multi-file workspace: file tree with folders, tabs, project-wide search and
  replace, outline, issues panel, command palette, and a full keyboard shortcut
  set (discoverable via `⇧⌘/`).
- The editor runs fully with the render service stopped; export formats (PDF,
  SVG, HTML, vector IR) and share previews are the parts that require the server.
- Documents are the output: the preview is a real typeset page, and page-accurate
  rendering, zoom, fit modes, and click-to-source are core to the loop.
- Workspace state persists to `localStorage`; ZIP export and upload move projects
  in and out.

## Capabilities and Constraints

- Editor: CodeMirror 6, React 19, Vite 7. Render service: `@myriaddreamin/typst-ts-node-compiler`.
- Real Typst compilation, diagnostics, completion, hover, formatting, and
  bidirectional preview ↔ source navigation.
- Clean-room constraint: nothing (source, CSS, assets, copy) is copied from
  typst.app; behaviour is reconstructed from public docs and RE evidence kept in
  `typst-app-auth/FINDINGS.md`.
- Offline-first: the interactive path must not depend on the network.
- Themes are light and dark; the app is expected to be a11y- and i18n-ready.
- Still undecided: accounts, teams, billing, realtime collaboration, and the
  dashboard are planned (M2+) but not built.

## Brand Commitments

Name: **glyph**. It is a typesetting tool, and the product's own subject is type
and layout — the interface is expected to demonstrate the craft it is a tool for.
Positioning language ("two engines, one document", "clean-room") is binding.
The existing identity is a dark, dense developer tool with a blue→violet brand
mark; the incumbent direction is preserved, not replaced.

## Evidence on Hand

- `README.md` — product overview, run/verify instructions, status.
- `plan.md` — architecture, data model, API contracts, milestones, RE evidence.
- `typst-app-auth/FINDINGS.md` — reverse-engineering notes (the only permitted
  source of behavioural parity).
- No customer testimonials, logos, press, or benchmark claims exist; none may be
  fabricated.

## Product Principles

1. **The preview is the product.** A page that is accurate and instantly current
   is worth more than any chrome around it.
2. **The tool disappears into the task.** Familiar, consistent affordances,
   keyboard-first, dense where it helps; no invented controls.
3. **Show the craft the tool is for.** Typography, spacing, and layout in the
   interface should meet the standard the editor exists to produce.
4. **Local first, honest everywhere.** The interactive path works offline; when a
   capability needs the server, say so plainly rather than failing silently.
5. **Every state is designed.** Loading, empty, error, and offline are part of the
   product, not leftovers.

## Accessibility & Inclusion

- Keyboard-first: every action reachable by shortcut or the command palette, with
  visible focus for keyboard users.
- Body and placeholder text must meet WCAG AA contrast in both themes; reduced
  motion must be respected; the document language is set for i18n.
