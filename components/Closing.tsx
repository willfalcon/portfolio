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
          <div className="grid">
            <div className="span-4 stack-4">
              <a className="nav__logo" href="#top"><span className="mark" data-mark="dots" aria-hidden="true" />Will Hawks</a>
              <p className="footer__lede">{closing.lede}</p>
            </div>
            <div className="span-2 start-7 footer__col">
              <h3>Experience</h3>
              <ul>
                <li><a href="#clients">Client work</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </div>
            <div className="span-2 footer__col">
              <h3>Work</h3>
              <ul>
                <li><a href="#mdhs">MDHS</a></li>
                <li><a href="#m2l">Move to Learn TV</a></li>
                <li><a href="#skwahdle">Skwahdle</a></li>
              </ul>
            </div>
            <div className="span-2 footer__col">
              <h3>Elsewhere</h3>
              <ul>
                <li><a href={contact.resume} download>Résumé</a></li>
                <li><a href={contact.github}>GitHub</a></li>
                <li><a href={contact.linkedin}>LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="footer__legal">
            <span>© 2026 Will Hawks. Product names and logos are trademarks of their owners.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
