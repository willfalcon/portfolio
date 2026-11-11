'use client';

import { useEffect, useState } from 'react';
import { mdhs } from '@/app/content';
import { responsive } from './img';
import { cx, gridClass, sectionClass, textLink } from './ui';

/* The three features as rows, one screenshot beside them that swaps to the row under the pointer, the keyboard
   focus or a tap (at once: nothing fades, nothing moves with the scroll). Two groups, each one screen on a
   tablet or a phone: the heading, lead and rows, then the screenshot and the stack. From 1024px the groups
   dissolve into one screen: the heading and lead across, the rows left, the screenshot right. */
export default function Mdhs() {
  const [current, setCurrent] = useState(mdhs.steps[0].key);
  const [wide, setWide] = useState(false);   // the row on show is marked beside its screenshot only (from 1024)
  const [eager, setEager] = useState(false); // every screenshot is fetched once the page runs, so a swap never shows an empty frame

  useEffect(() => {
    const mq = matchMedia('(min-width: 1024px)');
    const on = () => setWide(mq.matches);
    on();
    setEager(true);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);

  const group = 'col-span-full flex min-h-0 min-w-0 flex-col max-lg:grid max-lg:content-start max-lg:gap-6 max-sm:gap-5 sm:max-lg:gap-7 min-[800px]:max-lg:gap-8 lg:contents';

  return (
    <section className={sectionClass({ tabletScreens: 2 })} id="mdhs" aria-labelledby="mdhs-h">
      <div
        className={cx(
          'wrap relative z-1 h-full content-start max-sm:h-auto sm:max-xl:h-auto sm:max-xl:min-h-0 sm:max-xl:flex-[1_0_auto]',
          gridClass,
          'max-lg:grid-cols-[minmax(0,1fr)] max-lg:grid-rows-[minmax(0,1fr)_minmax(0,1fr)] max-lg:gap-y-[calc(var(--padt)+var(--padb)+var(--bar))]',
        )}
      >
        <div className={group}>
          <h2 id="mdhs-h" className="col-span-full min-w-0 lg:row-start-1">{mdhs.title}</h2>
          <p className={cx(
            'col-span-full min-w-0 max-sm:text-(length:--t-body) sm:text-(length:--t-lead)',
            'lg:col-span-8 lg:col-start-1 lg:row-start-2 lg:mt-[calc(var(--s-4)-var(--gutter))] lg:max-w-[62ch]',
          )}>
            {mdhs.lead}
          </p>
          <ul className="col-span-full min-w-0 lg:col-span-6 lg:col-start-1 lg:row-start-3 lg:mt-6">
            {mdhs.steps.map(s => {
              const on = wide && s.key === current;
              return (
                <li
                  key={s.key}
                  tabIndex={0}
                  onPointerEnter={e => { if (e.pointerType === 'mouse') setCurrent(s.key); }}
                  onFocus={() => setCurrent(s.key)}
                  onClick={e => { if (!(e.target as HTMLElement).closest('a, button')) setCurrent(s.key); }}
                  className={cx(
                    'grid cursor-pointer grid-cols-[minmax(0,1fr)_auto] gap-x-5 gap-y-1 border-b py-4 transition-[border-color] first:pt-0',
                    'sm:max-lg:py-6 sm:max-lg:first:pt-6 min-[800px]:max-lg:py-7 min-[800px]:max-lg:first:pt-7',
                    on ? 'border-ink' : 'border-line',
                  )}
                >
                  <span className={cx(
                    'font-medium',
                    "after:ml-2 after:inline-block after:size-[8px] after:rounded-full after:bg-accent after:align-[.1em] after:content-[''] max-lg:after:hidden",
                    on ? 'after:opacity-100' : 'after:opacity-0',
                  )}>
                    {s.title}
                  </span>
                  <p className="col-start-1 max-w-[56ch] text-ink">{s.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={group}>
          <div className={cx(
            'relative isolate col-span-full flex min-w-0 items-center justify-center overflow-clip rounded-lg bg-surface',
            'aspect-[100/166] sm:aspect-square lg:aspect-[100/64]',
            'lg:col-start-7 lg:col-end-[-1] lg:row-span-2 lg:row-start-3 lg:mt-6 lg:self-start',
          )}>
            {/* a phone gets the same feature captured on a phone; the picture fills the frame and one shows at a time */}
            {mdhs.steps.map(s => (
              <picture className="absolute inset-0 z-0 h-full w-full max-w-none" key={s.key}>
                <source media="(max-width: 639px)" srcSet={s.phone} width={640} height={1067} />
                <img
                  {...responsive(s.img, '(max-width: 1023px) 100vw, 628px')}
                  className="h-full w-full object-cover object-[50%_0]"
                  alt={s.alt}
                  hidden={s.key !== current}
                  loading={eager ? 'eager' : 'lazy'}
                />
              </picture>
            ))}
          </div>
          <p className="col-span-full flex min-w-0 flex-col items-start gap-3 text-(length:--t-small) lg:col-span-6 lg:col-start-1 lg:row-start-4 lg:mt-6 lg:self-start">
            <span>{mdhs.stack}</span>
            <a className={textLink} href={mdhs.live}>See the live site</a>
          </p>
        </div>
      </div>
    </section>
  );
}
