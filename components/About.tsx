import { about } from '@/app/content';
import IconMosaic from './IconMosaic';
import { cx, sectionClass, sectionWrap } from './ui';

// Text on the left, the tools as an icon mosaic from the split line.
export default function About() {
  return (
    <section className={sectionClass()} id="about" aria-labelledby="about-h">
      <div className={cx(sectionWrap(), 'lg:items-start')}>
        <div className="col-span-full min-w-0 stack-5 lg:col-span-5">
          <h2 id="about-h">{about.title}</h2>
          {about.body.map(p => <p className="text-lead" key={p.slice(0, 20)}>{p}</p>)}
        </div>
        <div className="col-span-full min-w-0 lg:col-span-6 lg:col-start-7">
          <IconMosaic in="about" icons={about.tools} cols={3} label={`Tools I use: ${about.tools.map(t => t.name).join(', ')}`} />
        </div>
      </div>
    </section>
  );
}
