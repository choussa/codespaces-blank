/**
 * The status bar.
 *
 * Subscribes to the cursor store and the workspace content channel directly, so
 * it can show live line/column, selection, and word count without the
 * application re-rendering on every keystroke.
 *
 * It tells the reader only what a reader needs: what document is open, where
 * the caret is, how long the document is, and — when, and only when, something
 * is wrong — the first few problems. Engine bookkeeping (compile timings,
 * service versions) deliberately stays out of the way.
 */
import { useEffect, useMemo, useState } from 'react';
import type { CompileResult } from '@vedivad/typst-web-service';
import { countWords } from '../workspace/model';
import type { Workspace } from '../workspace/useWorkspace';
import { useCursor, type CursorStore } from '../editor/cursorStore';
import type { ServerState } from '../render/useRenderServer';
import { Icon } from './Icon';

export type CompileStatus = 'booting' | 'compiling' | 'ok' | 'error';

export interface StatusBarProps {
  workspace: Workspace;
  cursor: CursorStore;
  active: string;
  entry: string;
  result: CompileResult | null;
  server: ServerState;
  onRevealIssue: (path: string, line: number, column: number) => void;
  onOpenIssues: () => void;
  onRefreshServer: () => void;
}

export function StatusBar({
  workspace,
  cursor,
  active,
  entry,
  result,
  server,
  onRevealIssue,
  onOpenIssues,
  onRefreshServer,
}: StatusBarProps) {
  const position = useCursor(cursor);
  const [words, setWords] = useState(0);

  // Word count follows the document, not the cursor: recompute on edits only.
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const update = () => setWords(countWords(workspace.getText(active) ?? ''));
    update();
    const unsubscribe = workspace.subscribeContent(() => {
      if (timer !== undefined) clearTimeout(timer);
      timer = setTimeout(update, 400);
    });
    return () => {
      if (timer !== undefined) clearTimeout(timer);
      unsubscribe();
    };
  }, [workspace, active]);

  const diagnostics = result?.diagnostics ?? [];
  const errors = diagnostics.filter((diagnostic) => diagnostic.severity === 'error');
  const warnings = diagnostics.filter((diagnostic) => diagnostic.severity !== 'error');
  const pages = result?.pages.length ?? 0;
  const problems = errors.length + warnings.length;

  const serverDegraded = server.status !== 'online';
  const serverLabel = server.status === 'offline' ? 'Preview service offline' : 'Connecting…';
  const serverTitle =
    server.status === 'offline'
      ? `${server.reason} — start it with: cd server && npm run dev`
      : 'Checking the preview service…';

  const inActiveFile = position.path === active;
  const selected = inActiveFile ? position.info.selected : 0;
  const line = inActiveFile ? position.info.line : 1;
  const column = inActiveFile ? position.info.column : 1;

  const issueItems = useMemo(() => diagnostics.slice(0, 5), [diagnostics]);

  return (
    <footer className="statusbar">
      <div className="status-left">
        <span className="status-file" title={active}>
          <Icon name="file" size={12} />
          {active || 'no file'}
          {active === entry && <span className="status-tag">entry</span>}
        </span>
      </div>

      <div className="status-mid">
        {issueItems.length > 0 && (
          <ul className="status-issues">
            {issueItems.map((diagnostic, index) => (
              <li key={index}>
                <button
                  type="button"
                  className={`status-issue status-issue-${diagnostic.severity}`}
                  disabled={!diagnostic.location}
                  title={`${diagnostic.message}${
                    diagnostic.hints.length ? `\n\n${diagnostic.hints.join('\n')}` : ''
                  }`}
                  onClick={() => {
                    const location = diagnostic.location;
                    if (location) {
                      onRevealIssue(location.file, location.line, location.column);
                    }
                  }}
                >
                  <Icon name={diagnostic.severity === 'error' ? 'issues' : 'alert'} size={11} />
                  <span className="status-issue-text">
                    {diagnostic.location ? `${diagnostic.location.line}: ` : ''}
                    {diagnostic.message}
                  </span>
                </button>
              </li>
            ))}
            {diagnostics.length > issueItems.length && (
              <li>
                <button type="button" className="status-more" onClick={onOpenIssues}>
                  +{diagnostics.length - issueItems.length} more
                </button>
              </li>
            )}
          </ul>
        )}
      </div>

      <div className="status-right">
        {problems > 0 && (
          <button
            type="button"
            className={`status-chip${errors.length ? ' status-chip-error' : ' status-chip-warn'}`}
            title="Show issues"
            onClick={onOpenIssues}
          >
            <Icon name="issues" size={11} />
            {errors.length} / {warnings.length}
          </button>
        )}
        <span className="status-chip" title="Pages in the compiled document">
          <Icon name="file" size={11} />
          {pages} {pages === 1 ? 'page' : 'pages'}
        </span>
        <span className="status-chip" title="Words in the active file">
          {words} words
        </span>
        <span className="status-chip status-position" title="Line and column">
          Ln {line}, Col {column}
          {selected > 0 && ` (${selected} sel)`}
        </span>
        {serverDegraded && (
          <button
            type="button"
            className={`server-pill server-${server.status}`}
            onClick={onRefreshServer}
            title={serverTitle}
          >
            <span className="server-dot" />
            {serverLabel}
          </button>
        )}
      </div>
    </footer>
  );
}
