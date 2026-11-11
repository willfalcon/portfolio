import { about } from '@/app/content';
import IconMosaic from './IconMosaic';

// Text on the left, the tools as an icon mosaic from the split line.
export default function About() {
  return (
    <section className="section g2m" id="about" aria-labelledby="about-h">
      <div className="wrap kit-grid grid--top">
        <div className="span-5 stack-5">
          <h2 id="about-h">{about.title}</h2>
          {about.body.map(p => <p className="t-lead" key={p.slice(0, 20)}>{p}</p>)}
        </div>
        <div className="span-6 start-7">
          <IconMosaic icons={about.tools} cols={3} label={`Tools I use: ${about.tools.map(t => t.name).join(', ')}`} />
        </div>
      </div>
    </section>
  );
}
