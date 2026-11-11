// The page's shared pieces: the section and grid layouts, the buttons, the text link and the drawn arrow.

export const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(' ');

/* ---------------------------------------------------------------- layout
   One section per screen. Every section is padded --padt above and --padb below and is one screen tall
   from 1280px; from 640px to 1279px it grows past a screen when its content needs it. On a phone a section
   is `screens` screens tall at least: a pair section splits into two groups, one screen each. */
export function sectionClass({ screens = 2, tabletScreens = 1 }: { screens?: 1 | 2; tabletScreens?: 1 | 2 } = {}) {
  return cx(
    'relative box-border h-svh pt-padt pb-[calc(var(--padb)+var(--bar))]',
    'max-sm:grid max-sm:h-auto max-sm:grid-cols-[minmax(0,1fr)] max-sm:grid-rows-[1fr] max-sm:auto-rows-auto',
    screens === 2 ? 'max-sm:min-h-[200lvh]' : 'max-sm:min-h-lvh',
    'sm:max-xl:flex sm:max-xl:h-auto sm:max-xl:flex-col',
    tabletScreens === 2 ? 'sm:max-lg:min-h-[200svh] lg:max-xl:min-h-svh' : 'sm:max-xl:min-h-svh',
  );
}

/* the column inside a section: fills it, and on a phone a pair section's two groups get a screen each */
export function sectionWrap({ grid = true, pair = true }: { grid?: boolean; pair?: boolean } = {}) {
  return cx(
    'wrap relative z-1 h-full max-sm:h-auto sm:max-xl:h-auto sm:max-xl:min-h-0 sm:max-xl:flex-[1_0_auto]',
    grid ? cx(gridClass, 'content-start') : 'flex flex-col',
    pair && 'max-sm:grid max-sm:grid-rows-[minmax(0,1fr)_minmax(0,1fr)] max-sm:gap-y-[calc(var(--padt)+var(--padb)+var(--bar))]',
  );
}

/* the 12-column grid; a child spans all 12 until it says otherwise */
export const gridClass = 'grid grid-cols-12 gap-x-gutter gap-y-card-gap';
export const cell = 'col-span-full min-w-0';

/* a section's heading and its lead */
export const sectionHead = 'grid max-w-[760px] gap-4 [&>p]:max-w-[60ch] [&>p]:text-lead [&>p]:text-ink';

/* ---------------------------------------------------------------- the drawn arrow
   Its stem grows and its head moves 3px when the button is hovered or focused (the button is the group). */
export function Arrow({ xl = false }: { xl?: boolean }) {
  return (
    <svg
      className={cx(
        'flex-none overflow-visible fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] -mr-[2px]',
        xl ? 'size-[.62em] stroke-[1.4]' : 'size-[12px] stroke-[1.6]',
      )}
      viewBox="0 0 12 12"
      aria-hidden="true"
    >
      <path
        className={cx(
          'opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100',
        )}
        d="M1 6h8"
      />
      <path d="M4.5 2.5 8 6l-3.5 3.5" />
    </svg>
  );
}

/* ---------------------------------------------------------------- buttons
   A button's tone moves toward the ground on hover, and further while pressed. */
const btnBase = cx(
  'group relative inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer',
  'rounded-btn border font-text font-medium leading-none tracking-[0]',
);
const btnTone = {
  primary: cx(
    'border-transparent bg-action text-action-ink hover:bg-[color-mix(in_oklab,var(--action)_84%,var(--bg))]',
    'active:bg-[color-mix(in_oklab,var(--action)_74%,var(--bg))]',
  ),
  secondary: cx(
    'bg-bg text-ink border-line-strong hover:bg-[color-mix(in_oklab,var(--bg)_92%,var(--ink))]',
    'hover:border-[color-mix(in_oklab,var(--ink)_32%,transparent)] active:bg-[color-mix(in_oklab,var(--bg)_86%,var(--ink))]',
  ),
};
export const btnSize = {
  md: 'h-btn-h px-5 text-(length:--t-body)',
  nav: 'h-btn-h px-5 text-[15px]',
  xl: cx(
    'w-[min(100%,640px)] h-[clamp(64px,1.4vw+48px,72px)] px-5 font-display font-heading tracking-display',
    'text-[clamp(20px,.6vw+16px,26px)]',
    'max-sm:w-full max-sm:h-[48px] max-sm:font-text max-sm:font-medium max-sm:text-[18px] max-sm:tracking-[0]',
  ),
};

export function btnClass(tone: keyof typeof btnTone, size: keyof typeof btnSize = 'md', extra?: string) {
  return cx(btnBase, btnTone[tone], btnSize[size], extra);
}

/* ---------------------------------------------------------------- the text link
   Underlined by a drawn line under its words (not its arrow). */
export const textLink = cx(
  'link-line [--rest-w:calc(100%-1em-var(--s-2))] inline-flex items-center gap-2 font-medium text-ink max-sm:min-h-[44px]',
  "after:inline-block after:content-['→']",
);
