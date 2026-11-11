'use client';

import { useEffect, useRef, useState } from 'react';
import { contact } from '@/app/content';
import { btnClass, cx, gridClass } from './ui';
import Logo from './Logo';

/* The fixed header. From 1024px: the words in the bar, Work opening a full-width panel on hover or focus.
   Below 1024px: the name, the main button and a menu button that opens the words as a sheet. */

const workLinks = [
  { href: '#mdhs', name: 'MDHS', line: 'State agency site and blocks' },
  { href: '#m2l', name: 'Move to Learn TV', line: 'Classroom video site' },
  { href: '#skwahdle', name: 'Skwahdle', line: 'Daily word game' },
];
const elsewhereLinks = [
  { href: contact.resume, name: 'Résumé', line: 'One page, as a PDF', download: true },
  { href: contact.github, name: 'GitHub', line: 'Code for the side projects' },
  { href: contact.linkedin, name: 'LinkedIn', line: 'Work history in full' },
];

const Chev = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 12 12" aria-hidden="true">
    <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Nav() {
  const [open, setOpen] = useState(false);          // the phone sheet
  const [expanded, setExpanded] = useState(false);  // Work's links inside the sheet
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  useEffect(() => {
    const wide = matchMedia('(min-width: 1024px)');
    const onWide = (e: MediaQueryListEvent) => { if (e.matches) setOpen(false); };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (header.current?.dataset.open === 'true') { setOpen(false); toggle.current?.focus(); return; }
      const active = document.activeElement as HTMLElement | null;
      if (active && header.current?.contains(active)) active.blur();
    };
    wide.addEventListener('change', onWide);
    document.addEventListener('keydown', onKey);
    return () => { wide.removeEventListener('change', onWide); document.removeEventListener('keydown', onKey); };
  }, []);

  // a tap on any link in the open sheet closes it, so the section it leads to is never left under the sheet
  const closeOnLink = (e: React.MouseEvent) => {
    if (open && (e.target as HTMLElement).closest('a[href]')) setOpen(false);
  };

  /* a word in the bar: an underline draws in from the left on hover and focus (and while its panel is open) */
  const navLink = (tight = false) => cx(
    'relative inline-flex h-[36px] items-center gap-1 whitespace-nowrap rounded-sm text-[15px] font-medium text-ink transition-colors',
    tight ? 'px-2 before:inset-x-2' : 'px-3 before:inset-x-3 lg:max-xl:px-2 lg:max-xl:before:inset-x-2',
    "before:pointer-events-none before:absolute before:-bottom-[2px] before:h-[2px] before:rounded-[2px] before:bg-current before:content-['']",
    'before:origin-right before:scale-x-0 before:transition-transform',
    'hover:before:origin-left hover:before:scale-x-100 focus-visible:before:origin-left focus-visible:before:scale-x-100',
    'group-hover/item:before:origin-left group-hover/item:before:scale-x-100 group-focus-within/item:before:origin-left group-focus-within/item:before:scale-x-100',
    open && !tight && 'max-lg:h-[56px] max-lg:p-0 max-lg:text-[20px] max-lg:before:hidden',
    open && tight && 'max-lg:before:hidden',
  );
  const navItem = cx('group/item flex h-full items-center', open && 'max-lg:grid max-lg:h-auto max-lg:grid-cols-[1fr_auto] max-lg:border-b max-lg:border-line');

  const menuLink = 'grid gap-1 py-2 font-medium transition-colors duration-(--m-out) ease-(--m-ease) hover:text-action hover:duration-(--m-in)';
  const menuLine = 'text-(length:--t-small) font-normal text-muted';
  const menuCol = 'col-span-full grid content-start gap-2 lg:col-span-3';
  const menuLabel = 'mb-2 text-label text-muted';

  return (
    <header ref={header} data-open={open} onClick={closeOnLink} className="fixed inset-x-0 top-0 z-50 h-nav border-b border-line bg-bg text-ink">
      <div className="wrap flex h-full items-center gap-8 max-lg:gap-3 max-sm:gap-2 lg:max-xl:gap-6">
        <a
          className={cx(
            'absolute left-[max(var(--gut),calc((100%_-_var(--container))/2))] top-1/2 z-2 h-px w-px overflow-hidden whitespace-nowrap [clip-path:inset(50%)]',
            'focus:inline-flex focus:h-btn-h focus:w-auto focus:-translate-y-1/2 focus:items-center focus:rounded-btn focus:border focus:border-line-strong',
            'focus:bg-bg focus:px-5 focus:text-(length:--t-body) focus:font-medium focus:leading-none focus:text-ink focus:[clip-path:none]',
          )}
          href="#top"
        >
          Skip to content
        </a>
        <Logo />

        <nav
          aria-label="Main"
          className={cx(
            'flex min-w-0 flex-1 gap-1 self-stretch lg:max-xl:gap-0',
            !open ? 'max-lg:hidden' : cx(
              'max-lg:fixed max-lg:inset-x-0 max-lg:top-nav max-lg:bottom-0 max-lg:flex max-lg:flex-col max-lg:gap-0 max-lg:overflow-y-auto max-lg:bg-bg',
              'max-lg:px-gut max-lg:pt-4 max-lg:pb-[calc(var(--btn-h)*2+56px)]',
              'motion-safe:transition-[opacity,translate] motion-safe:duration-(--m-panel) motion-safe:ease-(--m-ease)',
              'motion-safe:starting:opacity-0 motion-safe:starting:-translate-y-2',
            ),
          )}
        >
          <div className={navItem}><a className={navLink()} href="#clients">Experience</a></div>
          <div className={navItem}>
            <a className={navLink()} href="#mdhs">
              Work
              <Chev className={cx(
                'size-[12px] opacity-60 transition-transform lg:group-hover/item:rotate-180 lg:group-focus-within/item:rotate-180',
                open && 'max-lg:hidden',
              )} />
            </a>
            {open && (
              <button
                type="button"
                className="hidden h-[56px] w-[44px] cursor-pointer place-items-center border-0 bg-transparent text-ink max-lg:inline-grid"
                aria-label="Show Work links"
                aria-expanded={expanded}
                onClick={() => setExpanded(x => !x)}
              >
                <svg className={cx('size-4 transition-transform', expanded && 'rotate-180')} viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
            {/* the full-width panel: shows after 150ms of hover intent, fades and settles 6px in 200ms, closes in 120ms */}
            <div
              className={cx(
                'invisible absolute inset-x-0 top-full border-y border-line bg-bg pt-7 pb-8 text-ink opacity-0 -translate-y-[6px] motion-reduce:translate-none',
                '[transition:opacity_var(--m-close)_var(--m-ease),translate_var(--m-close)_var(--m-ease),visibility_0s_linear_var(--m-close)]',
                'lg:group-hover/item:visible lg:group-hover/item:translate-none lg:group-hover/item:opacity-100',
                'lg:group-focus-within/item:visible lg:group-focus-within/item:translate-none lg:group-focus-within/item:opacity-100',
                'lg:group-hover/item:[transition:opacity_var(--m-panel)_var(--m-ease)_150ms,translate_var(--m-panel)_var(--m-ease)_150ms,visibility_0s_linear_150ms]',
                'lg:group-focus-within/item:[transition:opacity_var(--m-panel)_var(--m-ease)_150ms,translate_var(--m-panel)_var(--m-ease)_150ms,visibility_0s_linear_150ms]',
                open && cx(
                  'max-lg:visible max-lg:static max-lg:col-span-full max-lg:translate-none max-lg:border-0 max-lg:p-0 max-lg:pb-4 max-lg:opacity-100',
                  expanded ? 'max-lg:block' : 'max-lg:hidden',
                ),
              )}
            >
              <div className={cx('wrap', gridClass, open && 'max-lg:w-full max-lg:gap-y-4')}>
                <div className={menuCol}>
                  <p className={menuLabel}>Projects</p>
                  {workLinks.map(l => (
                    <a className={menuLink} href={l.href} key={l.href}>{l.name}<span className={menuLine}>{l.line}</span></a>
                  ))}
                </div>
                <div className={menuCol}>
                  <p className={menuLabel}>Elsewhere</p>
                  {elsewhereLinks.map(l => (
                    <a className={menuLink} href={l.href} download={l.download} key={l.href}>{l.name}<span className={menuLine}>{l.line}</span></a>
                  ))}
                </div>
                <a className={cx('group/card col-span-full grid min-w-0 gap-3 lg:col-span-3 lg:col-start-10', open && 'max-lg:gap-1 max-lg:py-2')} href="#m2l">
                  <div
                    className={cx(
                      'relative isolate block min-h-[160px] flex-[1_0_auto] overflow-clip rounded-md bg-(--ground-bg)',
                      "before:pointer-events-none before:absolute before:inset-0 before:z-0 before:content-['']",
                      'before:bg-[radial-gradient(ellipse_70%_62%_at_50%_62%,color-mix(in_oklab,var(--card)_34%,transparent),transparent_72%)]',
                      "after:pointer-events-none after:absolute after:inset-0 after:z-4 after:rounded-[inherit] after:content-['']",
                      'after:shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--ink)_7%,transparent),inset_0_1px_0_color-mix(in_oklab,var(--ink)_4%,transparent)]',
                      open && 'max-lg:hidden',
                    )}
                  >
                    <img
                      className={cx(
                        'absolute inset-0 z-0 h-full w-full max-w-none object-cover',
                        'transition-transform duration-(--m-image-out) ease-(--m-ease)',
                        'group-hover/card:scale-[1.03] group-hover/card:duration-(--m-image) motion-reduce:scale-none!',
                      )}
                      src="/work/m2l-rows-640.jpg" width={640} height={480} alt="Rows of Move to Learn videos sorted by grade" loading="lazy"
                    />
                  </div>
                  <span className="font-text text-title font-medium">Move to Learn TV</span>
                  <span className="text-small text-muted">Videos sorted by grade</span>
                </a>
              </div>
            </div>
          </div>
          <div className={navItem}><a className={navLink()} href="#about">About</a></div>
        </nav>

        <div
          className={cx(
            'flex flex-none items-center gap-4',
            open
              ? cx(
                  'max-lg:fixed max-lg:inset-x-0 max-lg:bottom-0 max-lg:z-51 max-lg:grid max-lg:gap-2 max-lg:border-t max-lg:border-line max-lg:bg-bg',
                  'max-lg:px-gut max-lg:pt-4 max-lg:pb-[calc(var(--s-4)+env(safe-area-inset-bottom))]',
                )
              : 'max-lg:ml-auto',
          )}
        >
          <a
            className={cx(
              navLink(true),
              open ? 'max-lg:order-2 max-lg:inline-flex max-lg:h-btn-h max-lg:justify-center max-lg:px-0 max-lg:text-(length:--t-body)' : 'max-lg:hidden',
            )}
            href={contact.resume}
            download
          >
            Résumé
          </a>
          <a
            className={btnClass('primary', 'nav', cx(
              open ? 'max-lg:h-[48px] max-lg:w-full max-lg:text-(length:--t-body)' : 'max-sm:h-[44px] max-sm:px-3 max-sm:text-(length:--t-small)',
            ))}
            href={contact.email}
          >
            Email me
          </a>
        </div>

        <button
          ref={toggle}
          type="button"
          className={cx(
            'hidden size-[44px] flex-none cursor-pointer place-items-center rounded-btn border border-line-strong bg-transparent text-ink max-lg:inline-grid',
            open && 'max-lg:ml-auto',
          )}
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen(o => !o)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d={open ? 'M4 4l10 10M14 4L4 14' : 'M2 5h14M2 13h14'} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}
