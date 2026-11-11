import { clientWork, contact } from '@/app/content';
import IconMosaic from './IconMosaic';

type Row = (typeof clientWork.rows)[number];

function Engagement({ r }: { r: Row }) {
  return (
    <article className="engagement span-4">
      <h3>{r.name}</h3>
      <div className="engagement__dates t-label muted">{r.dates}</div>
      <p>{r.body}</p>
      <IconMosaic icons={r.icons} cols={Math.min(3, r.icons.length) as 1 | 2 | 3} label={`Stack: ${r.icons.map(i => i.name).join(', ')}`} />
    </article>
  );
}

// The one surface-ground band (rhythm: surface-pairs), right after the hero: one card per engagement, its stack as an icon mosaic under the words.
// Two groups so a phone gives each its own screen (.g2m); from 640px the groups dissolve into one row of three.
export default function ClientWork() {
  const [first, ...rest] = clientWork.rows;
  return (
    <section className="section ground-surface g2m" id="clients" aria-labelledby="clients-h">
      <div className="wrap kit-grid clients__grid">
        <div className="group clients__group">
          <div className="section-head span-12">
            <h2 id="clients-h">{clientWork.title}</h2>
            <p>{clientWork.lead}</p>
          </div>
          <Engagement r={first} />
        </div>
        <div className="group clients__group">
          {rest.map(r => <Engagement r={r} key={r.name} />)}
          <p className="clients__more span-12">
            {clientWork.more} <a className="link" href={contact.resume} download>Download résumé</a>
          </p>
        </div>
      </div>
    </section>
  );
}
