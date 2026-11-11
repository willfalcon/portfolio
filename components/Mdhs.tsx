import { mdhs } from '@/app/content';
import { responsive } from './img';

// peek-list (system.js runs it): the three features as rows, one screenshot beside them that swaps
// to the row under the pointer, the keyboard focus or a tap. Nothing moves with the scroll.
// Two groups, each one screen on a tablet or a phone: the heading, lead and rows, then the screenshot and
// the stack. From 1024px the groups dissolve into one screen: the heading and lead across, the rows left,
// the screenshot right.
export default function Mdhs() {
  return (
    <section className="section" id="mdhs" aria-labelledby="mdhs-h">
      <div className="wrap kit-grid mdhs__grid" data-peek="">
        <div className="group mdhs__group">
          <h2 id="mdhs-h" className="mdhs__title">{mdhs.title}</h2>
          <p className="mdhs__lead">{mdhs.lead}</p>
          <ul className="rows mdhs__rows">
            {mdhs.steps.map(step => (
              <li data-peek-to={step.key} tabIndex={0} key={step.key}>
                <span className="rows__name">{step.title}</span>
                <p>{step.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="group mdhs__group">
          <div className="frame frame--photo mdhs__frame">
            {/* a phone gets the same feature captured on a phone; the picture element fills the frame and
                system.js shows one img at a time */}
            {mdhs.steps.map((step, i) => (
              <picture className="frame__img" key={step.key}>
                <source media="(max-width: 639px)" srcSet={step.phone} width={640} height={1067} />
                <img
                  data-peek-for={step.key}
                  {...responsive(step.img, '(max-width: 1023px) 100vw, 628px')}
                  alt={step.alt}
                  hidden={i > 0}
                  loading="lazy"
                  data-source="client"
                />
              </picture>
            ))}
          </div>
          <p className="project__meta mdhs__meta">
            <span>{mdhs.stack}</span>
            <a className="link" href={mdhs.live}>See the live site</a>
          </p>
        </div>
      </div>
    </section>
  );
}
