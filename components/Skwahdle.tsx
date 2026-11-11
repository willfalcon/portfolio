import { skwahdle } from '@/app/content';
import { ProjectMeta } from './M2l';
import { cx, sectionClass, sectionWrap } from './ui';

// The three facts as rows on the left, two phone screens side by side from the split line.
export default function Skwahdle() {
  return (
    <section className={sectionClass()} id="skwahdle" aria-labelledby="skwahdle-h">
      <div className={cx(sectionWrap(), 'lg:items-start')}>
        <div className="col-span-full min-w-0 stack-5 lg:col-span-6">
          <h2 id="skwahdle-h">{skwahdle.title}</h2>
          <p className="text-lead">{skwahdle.lead}</p>
          <ul>
            {skwahdle.points.map(p => (
              <li className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-5 gap-y-1 border-b border-line py-4 first:pt-0" key={p.title}>
                <span className="font-medium">
                  {p.title}
                  <small className="mt-1 block text-(length:--t-small) font-normal text-muted">{p.body}</small>
                </span>
              </li>
            ))}
          </ul>
          <ProjectMeta stack={skwahdle.stack} links={[[skwahdle.live, 'Play today’s word'], [skwahdle.code, 'See the code']]} />
        </div>
        <div className="col-span-full grid min-w-0 grid-cols-2 content-start gap-gutter max-sm:grid-cols-1 lg:col-span-6 lg:col-start-7">
          {skwahdle.shots.map(s => (
            <div className="relative isolate overflow-clip rounded-lg bg-surface aspect-square lg:aspect-[100/138]" key={s.img}>
              <img className="absolute inset-0 z-0 h-full w-full max-w-none object-cover" src={s.img} width={640} height={883} alt={s.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
