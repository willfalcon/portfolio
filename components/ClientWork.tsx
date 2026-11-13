import { clientWork, contact } from '@/app/content';
import IconMosaic from './IconMosaic';
import { cx, gridClass, sectionHead, textLink } from './ui';

type Row = (typeof clientWork.rows)[number];

/* one engagement: its words, then its stack as an icon mosaic. From 640px to 1023px the words sit left and the
   mosaic right, one row each; otherwise the mosaic sits under the words, pushed to the card's foot */
function Engagement({ r }: { r: Row }) {
  const words = 'sm:max-lg:col-start-1';
  return (
    <article className="col-span-full flex min-w-0 flex-col sm:max-lg:grid sm:max-lg:grid-cols-2 sm:max-lg:content-start sm:max-lg:gap-x-6 lg:col-span-4">
      <h3 className={cx('font-text text-(length:--t-card) leading-[1.3] font-medium', words)}>{r.name}</h3>
      <div className={cx('mt-1 text-label text-muted', words)}>{r.dates}</div>
      <p className={cx('mt-3 mb-6 max-w-[46ch] sm:max-lg:mb-0', words)}>{r.body}</p>
      <IconMosaic
        in="engagement"
        className="mt-auto sm:max-lg:col-start-2 sm:max-lg:row-span-3 sm:max-lg:row-start-1 sm:max-lg:mt-0 sm:max-lg:self-start"
        icons={r.icons}
        cols={Math.min(3, r.icons.length) as 1 | 2 | 3}
        label={`Stack: ${r.icons.map(i => i.name).join(', ')}`}
      />
    </article>
  );
}

/* The one surface-coloured band, right after the hero: one card per engagement. On a phone the cards stack
   and the band is as tall as they are; from 640px it fills a screen (one row of three from 1024px). */
export default function ClientWork() {
  return (
    <section
      className="relative bg-surface box-border pt-padt pb-[calc(var(--padb)+var(--bar))] sm:min-h-svh xl:h-svh"
      id="clients"
      aria-labelledby="clients-h"
    >
      <div className={cx('wrap relative z-1 content-start', gridClass)}>
        <div className={cx(sectionHead, 'col-span-full mb-head-gap')}>
          <h2 id="clients-h">{clientWork.title}</h2>
          <p>{clientWork.lead}</p>
        </div>
        {clientWork.rows.map(r => <Engagement r={r} key={r.name} />)}
        <p className="col-span-full mt-7 max-sm:mt-0 sm:max-lg:hidden">
          {clientWork.more} <a className={textLink} href={contact.resume} download>Download résumé</a>
        </p>
      </div>
    </section>
  );
}
