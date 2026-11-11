import type { Metadata, Viewport } from 'next';
import KitScripts from '@/components/KitScripts';
import './globals.css';

const title = 'Will Hawks: frontend engineer, React and Next.js';
const description =
  'Portfolio of Will Hawks, a frontend engineer with 9 years of web work in React, Next.js, Vue and WordPress, open to remote roles.';

// The live domain, set on the host (SITE_URL=https://example.com). Share cards need absolute URLs,
// so the canonical link and og:image are only written once it is known.
const site = process.env.SITE_URL;

export const metadata: Metadata = {
  metadataBase: site ? new URL(site) : undefined,
  alternates: site ? { canonical: '/' } : undefined,
  title,
  description,
  icons: { icon: { url: '/favicon.svg', type: 'image/svg+xml' } },
  openGraph: {
    type: 'website',
    title: 'Will Hawks, frontend engineer',
    description: 'Selected work: the Mississippi Department of Human Services site, Move to Learn TV and Skwahdle.',
    images: site ? ['/share.jpg'] : undefined,
  },
  twitter: { card: 'summary_large_image' },
  other: { 'site-kind': 'other', 'page-type': 'service' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#ebe5e3',
};

// The design kit's scripts (public/assets) load after hydration (KitScripts) so they never race React for the DOM.
// Its stylesheets are now part of globals.css (Tailwind, with the old kit CSS in a cascade layer under the utilities).

// Set before first paint: the hero waits for its entrance, and the moment loader knows script is on.
const bootScript =
  "document.documentElement.classList.add('m-enter','mo-js');" +
  "setTimeout(function(){document.documentElement.classList.add('m-enter-done')},700);" +
  "setTimeout(function(){document.documentElement.classList.add('mo-safe')},2500);";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-type="service" data-radius="soft" data-buttons="solid" data-motion="" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400..700&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <link rel="modulepreload" href="/assets/moments/moments.js" />
        <link rel="modulepreload" href="/assets/moments/lib.js" />
        <link rel="modulepreload" href="/assets/moments/picture-develops/moment.js" />
      </head>
      <body suppressHydrationWarning>
        {/* type: service
            deal: hero split, nav nav-mega, close close-type, footer footer-columns (re-dealt: footer-visit needs a door),
            rhythm surface-pairs, buttons solid, mark dots, palette rose-grey-green, type schibsted
            moments: picture-develops on #m2l (re-dealt without the scroll-held moments: the pinned MDHS section
            read as scroll-jacking to the client) */}
        {children}
        <KitScripts />
      </body>
    </html>
  );
}
