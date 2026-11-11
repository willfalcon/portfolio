import type { Icon } from '@/app/content';
import { cx } from './ui';

/* The icon mosaic: one outline, cells divided by hairlines, each a logo on a white tile over its name and what
   it is. Read as one picture, so it carries one label.
   `in`: where it sits, which changes its columns and cells by screen width.
     engagement  a client card: logos alone on a phone, one row per tool from 640px to 1279px
     about       the About section: two columns from 1024px to 1279px */
function columns(cols: 1 | 2 | 3, engagement: boolean) {
  const n = ['', 'grid-cols-1', 'grid-cols-2', 'grid-cols-3'][cols];
  if (engagement) return cols === 3 ? 'grid-cols-3 sm:max-xl:grid-cols-1' : cx(n, 'sm:max-xl:grid-cols-1');
  return cols === 3 ? 'grid-cols-2 sm:max-lg:grid-cols-3 xl:grid-cols-3' : n;
}

export default function IconMosaic({ icons, label, cols, in: place, className }: {
  icons: Icon[]; label: string; cols: 1 | 2 | 3; in: 'engagement' | 'about'; className?: string;
}) {
  const engagement = place === 'engagement';
  return (
    <div
      role="img"
      aria-label={label}
      className={cx(
        'grid gap-px overflow-hidden rounded-lg border border-line bg-line',
        columns(cols, engagement),
        className,
      )}
    >
      {icons.map(i => (
        <div
          key={i.name}
          className={cx(
            'grid min-w-0 content-start gap-[14px] bg-bg p-[20px] hover:bg-[color-mix(in_oklab,var(--ink)_3%,var(--bg))]',
            engagement
              ? 'max-sm:justify-center max-sm:px-5 max-sm:py-6 sm:max-xl:flex sm:max-xl:items-center sm:max-xl:gap-3 sm:max-xl:p-4'
              : 'max-sm:gap-2 max-sm:p-3 lg:max-xl:flex lg:max-xl:items-center lg:max-xl:gap-3 lg:max-xl:p-4',
          )}
        >
          <span
            className={cx(
              'inline-grid size-(--tile) flex-none place-items-center rounded-[calc(var(--tile)*.28)] text-ink [--tile:40px]',
              'bg-[color-mix(in_oklab,var(--ic-white)_72%,var(--bg))]',
              'shadow-[inset_0_0_0_1px_var(--line),0_1px_2px_color-mix(in_oklab,var(--ink)_7%,transparent)]',
              engagement && 'max-sm:[--tile:56px]',
            )}
          >
            <img
              className="inline-block size-[calc(var(--tile)*.6)] max-w-none flex-none object-contain align-middle"
              src={i.src} alt="" width={i.w} height={i.h} loading="lazy"
            />
          </span>
          <div className={cx(engagement && 'max-sm:hidden')}>
            <div className="text-(length:--t-body) leading-[1.25] font-medium">{i.name}</div>
            <div className="mt-[2px] text-(length:--t-small) leading-[1.4] text-muted">{i.kind}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
