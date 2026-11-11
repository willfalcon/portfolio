import { contact, hero } from '@/app/content';
import Arrow from './Arrow';
import { responsive } from './img';

export default function Hero() {
  return (
    <section className="hero hero--split" data-enter="" aria-labelledby="hero-h">
      <div className="wrap">
        <div className="hero-text kit-grid hero__grid">
          <div className="hero__text span-5">
            <p className="hero__kicker"><span className="dot" aria-hidden="true" />{hero.kicker}</p>
            <h1 id="hero-h">{hero.title}</h1>
            <p className="hero__lead">{hero.lead}</p>
            <div className="btn-row">
              <a className="btn btn--primary" href={contact.email}>Email me<Arrow /></a>
              <a className="btn btn--secondary" href={contact.resume} download>Download résumé</a>
            </div>
          </div>
          {/* the three projects as one composed picture (the kit's .ly-collage, held still); each piece links
              to its project's section */}
          <div className="ly-collage hero__collage span-6 start-7">
            <div className="ly-collage__set is-on">
              {/* painted in this order: Move to Learn TV large, MDHS over it at the lower right, the Skwahdle phone in front */}
              <a className="ly-piece m-zoom" href="#m2l" aria-label="Move to Learn TV: see the project" style={{ left: '0%', top: '0%', width: '76%', aspectRatio: '4 / 3' }}>
                <img {...responsive('/work/m2l-home.jpg', '(max-width: 1023px) 76vw, 478px')} alt="" style={{ objectPosition: '50% 0%' }} fetchPriority="high" data-source="client" data-subject="m2l.tv home page" />
              </a>
              <a className="ly-piece m-zoom" href="#mdhs" aria-label="Mississippi Department of Human Services: see the project" style={{ left: '30%', top: '40%', width: '70%', height: '46%' }}>
                <img {...responsive('/work/mdhs-home.jpg', '(max-width: 1023px) 70vw, 440px')} alt="" style={{ objectPosition: '50% 0%' }} data-source="client" data-subject="mdhs.ms.gov home page" />
              </a>
              <a className="ly-piece m-zoom hero__phone" href="#skwahdle" aria-label="Skwahdle: see the project" style={{ left: '4%', top: '56%', width: '26%', height: '44%' }}>
                <img src="/work/skwahdle-phone.jpg" width={480} height={1039} alt="" style={{ objectPosition: '50% 0%' }} data-source="client" data-subject="Skwahdle on a phone" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
