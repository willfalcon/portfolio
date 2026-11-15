import { contact, hero } from '@/app/content';
import { responsive } from './img';
import { Arrow, btnClass, cx, gridClass } from './ui';

/* a piece of the collage: a screenshot that links to its project's section */
const piece = 'absolute overflow-hidden rounded-md bg-surface shadow-piece';
const pieceImg = 'h-full w-full max-w-none object-cover object-[50%_0%]';

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-h"
      className={cx(
        'relative isolate box-border h-svh min-h-0 pt-[calc(var(--nav)+var(--hgap))] pb-[calc(var(--hpadb)+var(--bar))]',
        'max-lg:grid max-lg:h-auto max-lg:min-h-svh max-lg:grid-cols-[minmax(0,1fr)] max-lg:grid-rows-[1fr] max-lg:auto-rows-auto',
      )}
    >
      <div className="wrap relative z-1 flex h-full flex-col max-lg:h-auto">
        <div className={cx(gridClass, '@container h-full min-h-0 grid-rows-[minmax(0,1fr)] content-stretch items-stretch max-lg:flex max-lg:flex-col')}>
          <div className="col-span-full min-w-0 self-start lg:col-span-5 [&>*+*]:mt-5">
            <p className="flex items-center gap-2 text-(length:--t-small) text-muted">
              <span className="size-[8px] flex-none rounded-full bg-accent" aria-hidden="true" />
              {hero.kicker}
            </p>
            <h1 id="hero-h" className="mt-4! text-hero leading-[1.02] tracking-display-xl">{hero.title}</h1>
            <p className="max-w-[42ch] text-hero-lead leading-[1.5] text-ink">{hero.lead}</p>
            <div className="mt-6! flex flex-wrap items-center gap-3 max-sm:w-full max-sm:flex-col max-sm:items-stretch">
              <a className={btnClass('primary')} href={contact.email}>Email me<Arrow /></a>
              <a
                className={btnClass('secondary', 'md',
                  'max-sm:border-transparent max-sm:bg-transparent max-sm:underline max-sm:decoration-line-strong max-sm:underline-offset-4',
                )}
                href={contact.resume}
                download
              >
                Download resume
              </a>
            </div>
          </div>
          {/* the three projects as one composed picture; each piece links to its project's section */}
          <div
            className={cx(
              'relative col-span-full h-full min-h-0 min-w-0 lg:col-span-6 lg:col-start-7',
              'max-lg:mt-6 max-lg:h-auto max-lg:min-h-[114cqw] max-lg:flex-[1_1_0]',
            )}
          >
            <div className="@container absolute inset-0">
              {/* painted in this order: Move to Learn TV large, MDHS over it at the lower right, the Skwahdle phone in front.
                  The lower two are set down by the collage's width (cqw), so they stay with the TV as it shrinks, but
                  never lower than the old share of its height, so they can't run off the bottom of a short screen */}
              <a className={cx(piece, 'left-0 top-0 aspect-[4/3] w-[76%]')} href="#m2l" aria-label="Move to Learn TV: see the project">
                <img className={pieceImg} {...responsive('/work/m2l-home.jpg', '(max-width: 1023px) 76vw, 478px')} alt="" fetchPriority="high" />
              </a>
              <a className={cx(piece, 'left-[30%] top-[min(40%,46cqw)] h-[46%] max-lg:h-[52cqw] w-[70%]')} href="#mdhs" aria-label="Mississippi Department of Human Services: see the project">
                <img className={pieceImg} {...responsive('/work/mdhs-home.jpg', '(max-width: 1023px) 70vw, 440px')} alt="" />
              </a>
              <a className={cx(piece, 'left-[4%] top-[min(56%,64cqw)] h-[44%] max-lg:h-[50cqw] w-[26%] max-sm:left-0')} href="#skwahdle" aria-label="Skwahdle: see the project">
                <img className={pieceImg} src="/work/skwahdle-phone.jpg" width={480} height={1039} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
