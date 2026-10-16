/**
 * The first-run welcome.
 *
 * Shown once, then remembered. It teaches the three things that make glyph
 * different from a text box — the live local engine, page-to-source navigation,
 * and the keyboard-first surface — and offers the shortest path into the task.
 */
import { Icon } from './Icon';

export interface WelcomeProps {
  onStart: () => void;
  onNewFile: () => void;
  onShortcuts: () => void;
}

const POINTS = [
  {
    icon: 'layers',
    title: 'Two engines, one document.',
    body: 'Typst compiles in your browser as you type, so the preview is instant and works offline.',
  },
  {
    icon: 'arrow-right',
    title: 'The page finds its source.',
    body: 'Click anywhere on a rendered page to jump to the line that produced it, or let the preview follow your cursor.',
  },
  {
    icon: 'keyboard',
    title: 'Everything has a key.',
    body: 'Files, panels, layout, export — all of it is in the command palette and the shortcut list.',
  },
] as const;

export function Welcome({ onStart, onNewFile, onShortcuts }: WelcomeProps) {
  return (
    <div className="overlay" role="dialog" aria-modal="true" aria-label="Welcome to glyph">
      <div className="welcome">
        <header className="welcome-head">
          <span className="welcome-mark" aria-hidden="true">
            g
          </span>
          <div>
            <h1 className="welcome-title">Welcome to glyph</h1>
            <p className="welcome-sub">
              A Typst editor for the web. Write on the left; the pages on the right recompile as you
              type.
            </p>
          </div>
        </header>

        <ul className="welcome-list">
          {POINTS.map((point) => (
            <li key={point.title}>
              <Icon name={point.icon} size={16} />
              <span>
                <strong>{point.title}</strong> {point.body}
              </span>
            </li>
          ))}
        </ul>

        <div className="welcome-actions">
          <button type="button" className="button-primary" onClick={onStart} autoFocus>
            Start writing
          </button>
          <button type="button" className="button-secondary" onClick={onNewFile}>
            New file
          </button>
          <button type="button" className="welcome-dismiss" onClick={onShortcuts}>
            Keyboard shortcuts
          </button>
        </div>
      </div>
    </div>
  );
}
