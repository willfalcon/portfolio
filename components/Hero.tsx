'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { contact, hero } from '@/app/content';
import { responsive } from './img';
import { Arrow, btnClass, cx, gridClass } from './ui';

/* The hero's entrance, once on load: the h1 rises line by line out of word masks, then the lead and each
   button fade up 60ms apart while the collage settles from .98; about 1.1s, transform and opacity only.
   The head script in layout.tsx sets html.m-enter before the first paint (and m-enter-done 700ms later as a
   safety mark); until this runs the words are hidden (enter-wait in globals.css), never the pictures.
   Without script, under reduced motion, or when the hero is already scrolled past, the hero simply stands. */
type Phase = undefined | 'entering' | 'entered' | 'still';
const EASE = 'cubic-bezier(.22, 1, .36, 1)';

function useEntrance(section: React.RefObject<HTMLElement | null>, h1: React.RefObject<HTMLHeadingElement | null>) {
  const [phase, setPhase] = useState<Phase>();

  useEffect(() => {
    const html = document.documentElement;
    const late = () => setTimeout(() => setPhase('entered'), 1150);
    if (!html.classList.contains('m-enter') || matchMedia('(prefers-reduced-motion: reduce)').matches
      || (section.current?.getBoundingClientRect().bottom ?? 1) < 0) { setPhase('still'); return; }
    if (html.classList.contains('m-enter-done')) { late(); return; }
    // the fonts first (a line set in the fallback face breaks elsewhere), 250ms at most
    let off = false;
    Promise.race([document.fonts?.ready ?? Promise.resolve(), new Promise(r => setTimeout(r, 250))]).then(() => {
      if (off) return;
      if (html.classList.contains('m-enter-done')) late();   // the safety mark won: CSS fades the words in
      else setPhase('entering');
    });
    return () => { off = true; };
  }, [section]);

  // before the paint: the words are held by their animations from the first frame they are masked
  useLayoutEffect(() => {
    if (phase !== 'entering' || !section.current || !h1.current) return;
    const anims: Animation[] = [];
    let over = false;
    const finish = () => {
      if (over) return;
      over = true;
      anims.forEach(a => a.cancel());
      setPhase('entered');
    };
    // the words grouped into the lines the browser set them on
    const lines: HTMLElement[][] = [];
    let top: number | null = null;
    h1.current.querySelectorAll<HTMLElement>('[data-word]').forEach(w => {
      const t = w.getBoundingClientRect().top;
      if (top === null || Math.abs(t - top) > 3) { lines.push([]); top = t; }
      lines[lines.length - 1].push(w.firstElementChild as HTMLElement);
    });
    const lineStep = Math.min(80, 240 / Math.max(1, lines.length - 1));
    lines.forEach((ws, k) => ws.forEach(w => anims.push(w.animate(
      [{ transform: 'translateY(calc(100% + .2em))' }, { transform: 'none' }],
      { duration: 700, delay: 80 + k * lineStep, easing: EASE, fill: 'both' },
    ))));
    // the line above the h1 comes with its first line; what follows starts as its last line is half way up
    const after = 80 + (lines.length - 1) * lineStep + 220;
    let k = 0;
    section.current.querySelectorAll<HTMLElement>('[data-step]').forEach(el => {
      const t: KeyframeAnimationOptions = { duration: 520, delay: el.dataset.step === 'above' ? 40 : after + Math.min(k++, 6) * 60, easing: EASE, fill: 'both' };
      anims.push(el.animate([{ opacity: 0 }, { opacity: 1 }], t), el.animate([{ transform: 'translateY(12px)' }, { transform: 'none' }], { ...t, composite: 'add' }));
    });
    // the collage settles by CSS over 1.1s: the entrance is done when both are through
    Promise.all([...anims.map(a => a.finished), new Promise(r => setTimeout(r, 1150))]).then(finish, finish);
    const stall = setTimeout(finish, 2400);   // whatever stalls (a hidden tab), the hero stands after 2.4s
    return () => { clearTimeout(stall); anims.forEach(a => a.cancel()); };
  }, [phase, section, h1]);

  return phase;
}

/* the h1's words, each in its own mask while the entrance runs (the h1 keeps its words as its label) */
function Words({ text, masked }: { text: string; masked: boolean }) {
  if (!masked) return <>{text}</>;
  return text.split(/(\s+)/).map((part, i) => /^\s+$/.test(part)
    ? part
    : (
      <span data-word="" aria-hidden="true" className="-mb-[.12em] inline-block overflow-clip pb-[.12em] align-top" key={i}>
        <span className="inline-block">{part}</span>
      </span>
    ));
}

/* a piece of the collage: a screenshot that links to its project's section, growing 3% inside its mask on hover */
const piece = 'group/piece absolute overflow-hidden rounded-md bg-surface shadow-piece';
const pieceImg = cx(
  'h-full w-full max-w-none object-cover object-[50%_0%] transition-transform duration-(--m-image-out) ease-(--m-ease)',
  'group-hover/piece:scale-[1.03] group-hover/piece:duration-(--m-image) motion-reduce:scale-none!',
);
/* the words wait (hidden) until the entrance starts; a step fades in by CSS if the safety mark passed first */
const step = 'enter-wait:opacity-0 enter-late:transition-opacity enter-late:duration-400 enter-late:ease-(--m-ease)';

export default function Hero() {
  const section = useRef<HTMLElement>(null);
  const h1 = useRef<HTMLHeadingElement>(null);
  const phase = useEntrance(section, h1);

  return (
    <section
      ref={section}
      data-enter=""
      data-state={phase}
      aria-labelledby="hero-h"
      className={cx(
        'relative isolate box-border h-svh min-h-0 pt-[calc(var(--nav)+var(--hgap))] pb-[calc(var(--hpadb)+var(--bar))]',
        'max-sm:grid max-sm:h-auto max-sm:min-h-svh max-sm:grid-cols-[minmax(0,1fr)] max-sm:grid-rows-[1fr] max-sm:auto-rows-auto',
        'enter-run:overflow-clip',
      )}
    >
      <div className="wrap relative z-1 flex h-full flex-col max-sm:h-auto">
        <div className={cx(gridClass, 'h-full min-h-0 grid-rows-[minmax(0,1fr)] content-stretch items-stretch max-lg:flex max-lg:flex-col')}>
          <div className="col-span-full min-w-0 self-start lg:col-span-5 [&>*+*]:mt-5">
            <p data-step="above" className={cx('flex items-center gap-2 text-(length:--t-small) text-muted', step)}>
              <span className="size-[8px] flex-none rounded-full bg-accent" aria-hidden="true" />
              {hero.kicker}
            </p>
            <h1
              ref={h1}
              id="hero-h"
              aria-label={phase === 'entering' ? hero.title : undefined}
              className={cx('mt-4! text-hero leading-[1.02] tracking-display-xl', step)}
            >
              <Words text={hero.title} masked={phase === 'entering'} />
            </h1>
            <p data-step="" className={cx('max-w-[42ch] text-hero-lead leading-[1.5] text-ink', step)}>{hero.lead}</p>
            <div className="mt-6! flex flex-wrap items-center gap-3 max-sm:w-full max-sm:flex-col max-sm:items-stretch">
              <a data-step="" className={btnClass('primary', 'md', step)} href={contact.email}>Email me<Arrow /></a>
              <a
                data-step=""
                className={btnClass('secondary', 'md', cx(
                  'max-sm:border-transparent max-sm:bg-transparent max-sm:underline max-sm:decoration-line-strong max-sm:underline-offset-4',
                  step,
                ))}
                href={contact.resume}
                download
              >
                Download résumé
              </a>
            </div>
          </div>
          {/* the three projects as one composed picture; each piece links to its project's section */}
          <div
            className={cx(
              'relative col-span-full h-full min-h-0 min-w-0 lg:col-span-6 lg:col-start-7',
              'max-lg:mt-6 max-lg:h-auto max-lg:min-h-[240px] max-lg:flex-[1_1_0]',
              'motion-safe:transition-[scale] motion-safe:duration-900 motion-safe:ease-enter enter-wait:scale-[.98] enter-still:transition-none',
            )}
          >
            <div className="absolute inset-0">
              {/* painted in this order: Move to Learn TV large, MDHS over it at the lower right, the Skwahdle phone in front */}
              <a className={cx(piece, 'left-0 top-0 aspect-[4/3] w-[76%]')} href="#m2l" aria-label="Move to Learn TV: see the project">
                <img className={pieceImg} {...responsive('/work/m2l-home.jpg', '(max-width: 1023px) 76vw, 478px')} alt="" fetchPriority="high" />
              </a>
              <a className={cx(piece, 'left-[30%] top-[40%] h-[46%] w-[70%]')} href="#mdhs" aria-label="Mississippi Department of Human Services: see the project">
                <img className={pieceImg} {...responsive('/work/mdhs-home.jpg', '(max-width: 1023px) 70vw, 440px')} alt="" />
              </a>
              <a className={cx(piece, 'left-[4%] top-[56%] h-[44%] w-[26%] max-sm:left-0')} href="#skwahdle" aria-label="Skwahdle: see the project">
                <img className={pieceImg} src="/work/skwahdle-phone.jpg" width={480} height={1039} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
