import { m2l } from '@/app/content';
import { responsive } from './img';

// split-text-left: the words on five columns, the screenshot on six from the split line. The screenshot is the
// page's dealt moment (picture-develops, film look): it develops once as it comes on screen.
export default function M2l() {
  return (
    <section className="section g2m" id="m2l" aria-labelledby="m2l-h">
      <div className="wrap kit-grid grid--top">
        <div className="span-5 stack-5">
          <h2 id="m2l-h">{m2l.title}</h2>
          <p className="t-lead">{m2l.lead}</p>
          <ul className="points">
            {m2l.points.map(p => <li key={p}>{p}</li>)}
          </ul>
          <p className="project__meta">
            <span>{m2l.stack}</span>
            <span className="project__links">
              <a className="link" href={m2l.live}>See the live site</a>
              <a className="link" href={m2l.code}>See the code</a>
            </span>
          </p>
        </div>
        <div className="frame frame--photo frame--split span-6 start-7" data-moment="picture-develops">
          <img className="frame__img" {...responsive(m2l.img, '(max-width: 639px) 200vw, (max-width: 1023px) 100vw, 628px')} alt={m2l.alt} loading="lazy" data-source="client" data-subject="m2l.tv home page" />
        </div>
      </div>
    </section>
  );
}
