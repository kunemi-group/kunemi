import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { siteDescription } from '@/data/site-content';
import { Providers } from './providers';
import '../index.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://kunemi.com'),
  title: {
    default: 'Kunemi — Intelligent Software for Modern Business',
    template: '%s | Kunemi',
  },
  description: siteDescription,
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'Kunemi',
    title: 'Kunemi — Intelligent Software for Modern Business',
    description: siteDescription,
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kunemi — Intelligent Software for Modern Business',
    description: siteDescription,
  },
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
};

export const dynamic = 'force-dynamic';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
