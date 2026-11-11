import { contact } from '@/app/content';

const Chev = () => (
  <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">Skip to content</a>
        <a className="nav__logo" href="#top">
          <span className="mark" data-mark="dots" aria-hidden="true" />
          Will Hawks
        </a>
        <nav className="nav__links" aria-label="Main">
          <div className="nav__item"><a className="nav__link" href="#clients">Experience</a></div>
          <div className="nav__item">
            <a className="nav__link" href="#mdhs">Work <Chev /></a>
            <div className="nav__menu">
              <div className="wrap kit-grid">
                <div className="menu-col span-3">
                  <p className="t-label">Projects</p>
                  <a href="#mdhs">MDHS<span>State agency site and blocks</span></a>
                  <a href="#m2l">Move to Learn TV<span>Classroom video site</span></a>
                  <a href="#skwahdle">Skwahdle<span>Daily word game</span></a>
                </div>
                <div className="menu-col span-3">
                  <p className="t-label">Elsewhere</p>
                  <a href={contact.resume} download>Résumé<span>One page, as a PDF</span></a>
                  <a href={contact.github}>GitHub<span>Code for the side projects</span></a>
                  <a href={contact.linkedin}>LinkedIn<span>Work history in full</span></a>
                </div>
                <a className="menu-card span-3 start-10" href="#m2l">
                  <div className="panel">
                    <img className="frame__img" src="/work/m2l-rows-640.jpg" width={640} height={480} alt="Rows of Move to Learn videos sorted by grade" loading="lazy" />
                  </div>
                  <span className="t-card">Move to Learn TV</span>
                  <span className="t-small muted">Videos sorted by grade</span>
                </a>
              </div>
            </div>
          </div>
          <div className="nav__item"><a className="nav__link" href="#about">About</a></div>
        </nav>
        <div className="nav__actions">
          <a className="nav__link" href={contact.resume} download>Résumé</a>
          <a className="btn btn--primary" href={contact.email}>Email me</a>
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}
