import { clientWork, contact } from '@/app/content';
import IconMosaic from './IconMosaic';
import { cx, sectionClass, sectionHead, sectionWrap, textLink } from './ui';

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

/* The one surface-ground band, right after the hero: one card per engagement. Two groups so a phone gives each
   its own screen; from 640px the groups dissolve into the grid (one row of three from 1024px). */
export default function ClientWork() {
  const [first, ...rest] = clientWork.rows;
  const group = 'col-span-full flex min-h-0 min-w-0 flex-col max-sm:grid max-sm:content-start max-sm:gap-7 sm:contents';
  return (
    <section className={cx(sectionClass(), 'ground-surface')} id="clients" aria-labelledby="clients-h">
      <div className={sectionWrap()}>
        <div className={group}>
          <div className={cx(sectionHead, 'col-span-full mb-head-gap')}>
            <h2 id="clients-h">{clientWork.title}</h2>
            <p>{clientWork.lead}</p>
          </div>
          <Engagement r={first} />
        </div>
        <div className={group}>
          {rest.map(r => <Engagement r={r} key={r.name} />)}
          <p className="col-span-full mt-7 max-sm:mt-0 sm:max-lg:hidden">
            {clientWork.more} <a className={textLink} href={contact.resume} download>Download résumé</a>
          </p>
        </div>
      </div>
    </section>
  );
}
