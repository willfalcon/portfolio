import { skwahdle } from '@/app/content';

// The three facts as rows on the left, two phone screens side by side from the split line.
export default function Skwahdle() {
  return (
    <section className="section g2m" id="skwahdle" aria-labelledby="skwahdle-h">
      <div className="wrap grid grid--top">
        <div className="span-6 stack-5">
          <h2 id="skwahdle-h">{skwahdle.title}</h2>
          <p className="t-lead">{skwahdle.lead}</p>
          <ul className="rows">
            {skwahdle.points.map(p => (
              <li key={p.title}>
                <span className="rows__name">{p.title}<small>{p.body}</small></span>
              </li>
            ))}
          </ul>
          <p className="project__meta">
            <span>{skwahdle.stack}</span>
            <span className="project__links">
              <a className="link" href={skwahdle.live}>Play today’s word</a>
              <a className="link" href={skwahdle.code}>See the code</a>
            </span>
          </p>
        </div>
        <div className="phones span-6 start-7">
          {skwahdle.shots.map(s => (
            <div className="frame frame--photo phone" key={s.img}>
              <img className="frame__img" src={s.img} width={640} height={883} alt={s.alt} loading="lazy" data-source="client" data-subject="Skwahdle on a phone" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
