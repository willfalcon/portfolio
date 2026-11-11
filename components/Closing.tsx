import { closing, contact } from '@/app/content';
import Logo from './Logo';
import { Arrow, btnClass, cx, sectionClass, sectionHead } from './ui';

/* The last screen: the ask and one large button, then the footer's columns and legal line. */
const colHead = 'mb-4 font-text text-(length:--t-small) leading-[1.4] font-medium tracking-[0] text-muted';
const colList = 'grid gap-0 text-(length:--t-small) sm:gap-3';
/* a footer link: no line at rest, the line draws in on hover; a 44px tap target on a phone */
const colLink = 'link-line [--rest-line:0%] max-sm:inline-flex max-sm:min-h-[44px] max-sm:min-w-[44px] max-sm:items-center';

export default function Closing() {
  return (
    <footer className={sectionClass()} id="contact" aria-labelledby="close-h">
      <div
        className={cx(
          'wrap relative z-1 grid h-full grid-rows-[minmax(0,1fr)_auto] gap-y-8 max-sm:h-auto sm:max-xl:h-auto sm:max-xl:min-h-0 sm:max-xl:flex-[1_0_auto]',
          'max-sm:grid-rows-[minmax(0,1fr)_minmax(0,1fr)] max-sm:gap-y-[calc(var(--padt)+var(--padb)+var(--bar))]',
        )}
      >
        <div className="flex min-h-0 flex-col gap-6">
          <div className={cx(sectionHead, '[&>h2]:max-w-[20ch]')}>
            <h2 id="close-h">{closing.title}</h2>
            <p>{closing.line}</p>
          </div>
          <a className={btnClass('primary', 'xl', 'self-stretch sm:w-[min(50%,640px)] sm:max-lg:w-full')} href={contact.email}>
            Email me<Arrow xl />
          </a>
        </div>
        <div className="grid gap-7 max-sm:gap-5">
          <div className="grid grid-cols-12 gap-x-gutter gap-y-5 sm:gap-y-7">
            <div className="col-span-full min-w-0 stack-4 lg:col-span-4">
              <Logo footer />
              <p className="max-w-[30ch] font-display text-(length:--t-lead) leading-[1.25] font-normal tracking-display">{closing.lede}</p>
            </div>
            <div className="col-span-6 min-w-0 sm:col-span-4 lg:col-span-2 lg:col-start-7">
              <h3 className={colHead}>Experience</h3>
              <ul className={colList}>
                <li><a className={colLink} href="#clients">Client work</a></li>
                <li><a className={colLink} href="#about">About</a></li>
              </ul>
            </div>
            <div className="col-span-6 min-w-0 sm:col-span-4 lg:col-span-2">
              <h3 className={colHead}>Work</h3>
              <ul className={colList}>
                <li><a className={colLink} href="#mdhs">MDHS</a></li>
                <li><a className={colLink} href="#m2l">Move to Learn TV</a></li>
                <li><a className={colLink} href="#skwahdle">Skwahdle</a></li>
              </ul>
            </div>
            <div className="col-span-6 min-w-0 sm:col-span-4 lg:col-span-2">
              <h3 className={colHead}>Elsewhere</h3>
              <ul className={colList}>
                <li><a className={colLink} href={contact.resume} download>Résumé</a></li>
                <li><a className={colLink} href={contact.github}>GitHub</a></li>
                <li><a className={colLink} href={contact.linkedin}>LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-x-6 gap-y-4 border-t border-line pt-5 text-(length:--t-label) text-muted">
            <span>© 2026 Will Hawks. Product names and logos are trademarks of their owners.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
