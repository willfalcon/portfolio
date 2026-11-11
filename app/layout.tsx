import type { Metadata, Viewport } from 'next';
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
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#ebe5e3',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400..700&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
