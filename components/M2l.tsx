import { m2l } from '@/app/content';
import Develop from './Develop';
import { responsive } from './img';
import { cx, sectionClass, sectionWrap, textLink } from './ui';

/* The words on five columns, the screenshot on six from the split line. The screenshot develops once as it
   comes on screen (Develop). */
export default function M2l() {
  return (
    <section className={sectionClass()} id="m2l" aria-labelledby="m2l-h">
      <div className={cx(sectionWrap(), 'lg:items-start')}>
        <div className="col-span-full min-w-0 stack-5 lg:col-span-5">
          <h2 id="m2l-h">{m2l.title}</h2>
          <p className="text-lead">{m2l.lead}</p>
          <ul>
            {m2l.points.map(p => <li className="max-w-[56ch] border-b border-line py-3 first:pt-0" key={p}>{p}</li>)}
          </ul>
          <ProjectMeta stack={m2l.stack} links={[[m2l.live, 'See the live site'], [m2l.code, 'See the code']]} />
        </div>
        <Develop
          className="col-span-full min-w-0 rounded-lg bg-surface aspect-square sm:max-lg:aspect-[2/1] lg:col-span-6 lg:col-start-7 lg:aspect-[5/4]"
          {...responsive(m2l.img, '(max-width: 639px) 200vw, (max-width: 1023px) 100vw, 628px')}
          alt={m2l.alt}
          loading="lazy"
        />
      </div>
    </section>
  );
}

/* a project's stack and its links, under its words */
export function ProjectMeta({ stack, links }: { stack: string; links: [string, string][] }) {
  return (
    <p className="flex flex-col items-start gap-3 text-(length:--t-small)">
      <span>{stack}</span>
      <span className="flex flex-wrap gap-5 text-(length:--t-body)">
        {links.map(([href, label]) => <a className={textLink} href={href} key={href}>{label}</a>)}
      </span>
    </p>
  );
}
