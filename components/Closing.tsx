import { closing, contact } from '@/app/content';
import Arrow from './Arrow';

export default function Closing() {
  return (
    <footer className="footer closing g2m" id="contact" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--type">
          <div className="section-head">
            <h2 id="close-h">{closing.title}</h2>
            <p>{closing.line}</p>
          </div>
          <a className="btn btn--primary btn--xl" href={contact.email}>Email me<Arrow /></a>
        </div>
        <div className="closing__links">
          <div className="kit-grid gap-y-5 sm:gap-y-7">
            <div className="col-span-full lg:col-span-4 stack-4">
              <a className="nav__logo" href="#top"><span className="mark" data-mark="dots" aria-hidden="true" />Will Hawks</a>
              <p className="font-display font-normal text-(length:--t-lead) leading-[1.25] tracking-display max-w-[30ch]">{closing.lede}</p>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2 lg:col-start-7">
              <h3 className="font-text text-(length:--t-small) leading-[1.4] font-medium tracking-[0] text-muted mb-4">Experience</h3>
              <ul className="grid gap-0 sm:gap-3 text-(length:--t-small)">
                <li><a href="#clients">Client work</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <h3 className="font-text text-(length:--t-small) leading-[1.4] font-medium tracking-[0] text-muted mb-4">Work</h3>
              <ul className="grid gap-0 sm:gap-3 text-(length:--t-small)">
                <li><a href="#mdhs">MDHS</a></li>
                <li><a href="#m2l">Move to Learn TV</a></li>
                <li><a href="#skwahdle">Skwahdle</a></li>
              </ul>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <h3 className="font-text text-(length:--t-small) leading-[1.4] font-medium tracking-[0] text-muted mb-4">Elsewhere</h3>
              <ul className="grid gap-0 sm:gap-3 text-(length:--t-small)">
                <li><a href={contact.resume} download>Résumé</a></li>
                <li><a href={contact.github}>GitHub</a></li>
                <li><a href={contact.linkedin}>LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-x-6 gap-y-4 pt-5 border-t border-line text-(length:--t-label) text-muted">
            <span>© 2026 Will Hawks. Product names and logos are trademarks of their owners.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
