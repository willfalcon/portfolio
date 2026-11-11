'use client';

import { useEffect } from 'react';

// The kit's scripts change the DOM (the phone menu, the pinned moment, hover state). Loading them after
// hydration means React has already claimed the server markup, so the two never disagree about it.
const scripts = ['/assets/system.js', '/assets/motion/motion.js', '/assets/layout/layout.js'];

export default function KitScripts() {
  useEffect(() => {
    for (const src of scripts) {
      if (document.querySelector(`script[src="${src}"]`)) continue;
      const el = document.createElement('script');
      el.type = 'module';
      el.src = src;
      document.body.appendChild(el);
    }
  }, []);
  return null;
}
