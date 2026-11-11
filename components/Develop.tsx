'use client';

import { useEffect, useRef, useState } from 'react';
import { cx } from './ui';

/* A photograph that develops once as it comes on screen, the way a print does in the developer tray: pale,
   flat and grey at first, its darks arriving before its colour, while it settles from a slight zoom (1.6s).
   Just before it scrolls in it waits as that faint print; under reduced motion or without script it is
   simply the photograph. The frame (its size, radius, ground) comes from the caller. */
type State = 'idle' | 'armed' | 'live' | 'done';

export default function Develop({ className, ...img }: React.ImgHTMLAttributes<HTMLImageElement> & { className?: string }) {
  const frame = useRef<HTMLDivElement>(null);
  const pic = useRef<HTMLImageElement>(null);
  const [state, setState] = useState<State>('idle');

  useEffect(() => {
    const root = frame.current, el = pic.current;
    if (!root || !el) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { setState('done'); return; }
    let over = false, anim: Animation | null = null;
    const arm = () => { if (!over) setState(s => (s === 'idle' ? 'armed' : s)); };
    const run = async () => {
      if (over) return;
      arm();
      if (!el.complete) await new Promise(r => { el.addEventListener('load', r, { once: true }); el.addEventListener('error', r, { once: true }); });
      if (over) return;
      // the darks come first (contrast), the colour last (saturation); the zoom settles over the whole run
      anim = el.animate([
        { filter: 'grayscale(1) contrast(.55) brightness(1.32)', transform: 'scale(1.06)' },
        { filter: 'grayscale(.8) contrast(.82) brightness(1.14)', offset: 0.3 },
        { filter: 'grayscale(.35) contrast(.95) brightness(1.04)', offset: 0.62 },
        { filter: 'grayscale(0) contrast(1) brightness(1)', transform: 'none' },
      ], { duration: 1600, easing: 'cubic-bezier(.3, .2, .3, 1)', fill: 'both' });
      setState('live');
      const end = () => { over = true; anim?.cancel(); setState('done'); };
      anim.finished.then(end, end);
    };
    const r0 = root.getBoundingClientRect();
    if (r0.bottom > 0 && r0.top < innerHeight * 1.25) arm();
    // armed just before it scrolls in; it develops once a quarter of it is on screen (less of a tall frame)
    const near = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { arm(); near.disconnect(); } }, { rootMargin: '0px 0px 25% 0px' });
    const seen = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { run(); seen.disconnect(); } },
      { threshold: Math.min(0.25, (0.4 * innerHeight) / Math.max(1, r0.height)) });
    near.observe(root);
    seen.observe(root);
    return () => { over = true; near.disconnect(); seen.disconnect(); anim?.cancel(); };
  }, []);

  return (
    <div ref={frame} className={cx('relative isolate overflow-hidden', className)}>
      {/* eslint-disable-next-line jsx-a11y/alt-text -- alt comes with the props */}
      <img
        ref={pic}
        {...img}
        className={cx(
          'absolute inset-0 z-0 h-full w-full max-w-none object-cover',
          state === 'armed' && 'scale-[1.06] [filter:grayscale(1)_contrast(.55)_brightness(1.32)]',
        )}
      />
    </div>
  );
}
