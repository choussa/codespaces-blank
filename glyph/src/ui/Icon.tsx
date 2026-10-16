/**
 * The icon set.
 *
 * Every glyph is a [Lucide](https://lucide.dev) icon on a 24×24 grid, chosen so
 * the metaphor matches the label even when the icon stands alone (the rail, the
 * toolbar, the status chips). Lucide keeps one visual grammar across the whole
 * app — 2px round-capped strokes, `currentColor`, no fills — so the interface
 * reads as a single instrument rather than a junkyard of borrowed shapes.
 *
 * The wrapper keeps the small API the rest of the app has always used: ask for
 * a semantic `name`, get a correctly-sized, accessible SVG.
 */
import {
  ArrowRight,
  Bold,
  CaseSensitive,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  CircleHelp,
  Code,
  Columns2,
  Copy,
  Download,
  Ellipsis,
  ExternalLink,
  File,
  FileOutput,
  Files,
  Folder,
  Heading as HeadingIcon,
  Image as ImageIcon,
  Info,
  Italic,
  Keyboard,
  Layers,
  Link as LinkIcon,
  List as ListIcon,
  ListOrdered,
  ListTree,
  MessageSquare,
  Moon,
  MoveHorizontal,
  MoveVertical,
  PanelLeft,
  Pencil,
  Play,
  Plus,
  Redo2,
  RefreshCw,
  Regex,
  Rows2,
  Scan,
  Search,
  Share2,
  Sigma,
  SlidersHorizontal,
  Sun,
  Trash2,
  TriangleAlert,
  Type,
  Underline,
  Undo2,
  Upload,
  WandSparkles,
  WholeWord,
  X,
  ZoomIn,
  ZoomOut,
  type LucideIcon,
} from 'lucide-react';
import type { SVGProps } from 'react';

export type IconName =
  // navigation & panels
  | 'files'
  | 'search'
  | 'outline'
  | 'issues'
  | 'settings'
  | 'help'
  | 'sidebar'
  | 'split-h'
  | 'split-v'
  // actions
  | 'plus'
  | 'pencil'
  | 'trash'
  | 'copy'
  | 'upload'
  | 'download'
  | 'refresh'
  | 'check'
  | 'x'
  | 'dots'
  | 'share'
  | 'export'
  | 'wand'
  | 'play'
  | 'undo'
  | 'redo'
  | 'arrow-right'
  | 'chevron-right'
  | 'chevron-down'
  | 'chevron-left'
  | 'external'
  // objects
  | 'file'
  | 'folder'
  | 'image'
  | 'layers'
  // view
  | 'zoom-in'
  | 'zoom-out'
  | 'fit-width'
  | 'fit-height'
  | 'fit-page'
  | 'sun'
  | 'moon'
  // formatting
  | 'bold'
  | 'italic'
  | 'underline'
  | 'heading'
  | 'list'
  | 'ordered-list'
  | 'math'
  | 'code'
  | 'link'
  | 'comment'
  | 'text'
  // search options
  | 'case'
  | 'regex'
  | 'word'
  // alerts
  | 'alert'
  | 'info'
  | 'keyboard';

/** Semantic name → Lucide glyph. Kept exhaustive so a typo fails at compile. */
const ICONS: Record<IconName, LucideIcon> = {
  /* ---------------------------------------------------------- navigation */
  files: Files,
  search: Search,
  outline: ListTree,
  issues: CircleAlert,
  settings: SlidersHorizontal,
  help: CircleHelp,
  sidebar: PanelLeft,
  'split-h': Columns2,
  'split-v': Rows2,

  /* ------------------------------------------------------------- actions */
  plus: Plus,
  pencil: Pencil,
  trash: Trash2,
  copy: Copy,
  upload: Upload,
  download: Download,
  refresh: RefreshCw,
  check: Check,
  x: X,
  dots: Ellipsis,
  share: Share2,
  export: FileOutput,
  wand: WandSparkles,
  play: Play,
  undo: Undo2,
  redo: Redo2,
  'arrow-right': ArrowRight,
  'chevron-right': ChevronRight,
  'chevron-down': ChevronDown,
  'chevron-left': ChevronLeft,
  external: ExternalLink,

  /* ------------------------------------------------------------- objects */
  file: File,
  folder: Folder,
  image: ImageIcon,
  layers: Layers,

  /* ---------------------------------------------------------------- view */
  'zoom-in': ZoomIn,
  'zoom-out': ZoomOut,
  'fit-width': MoveHorizontal,
  'fit-height': MoveVertical,
  'fit-page': Scan,
  sun: Sun,
  moon: Moon,

  /* --------------------------------------------------------- formatting */
  bold: Bold,
  italic: Italic,
  underline: Underline,
  heading: HeadingIcon,
  list: ListIcon,
  'ordered-list': ListOrdered,
  math: Sigma,
  code: Code,
  link: LinkIcon,
  comment: MessageSquare,
  text: Type,

  /* ------------------------------------------------------- search flags */
  case: CaseSensitive,
  regex: Regex,
  word: WholeWord,

  /* -------------------------------------------------------------- alerts */
  alert: TriangleAlert,
  info: Info,
  keyboard: Keyboard,
};

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconName;
  size?: number;
  /**
   * Stroke weight on the 24-grid. 2 (Lucide's default) is confident without
   * clogging at chip sizes; drop to 1.75 for the densest menus.
   */
  strokeWidth?: number;
}

export function Icon({ name, size = 16, strokeWidth = 2, className, ...rest }: IconProps) {
  const Glyph = ICONS[name];
  return (
    <Glyph
      size={size}
      strokeWidth={strokeWidth}
      className={className ? `icon ${className}` : 'icon'}
      aria-hidden="true"
      focusable="false"
      {...rest}
    />
  );
}
