import type { Metadata } from 'next';
import { siteDescription } from '@/data/site-content';
import { Home } from '@/site-pages/home';

export const metadata: Metadata = {
  title: { absolute: 'Kunemi — Intelligent Software for Modern Business' },
  description: siteDescription,
  alternates: { canonical: '/' },
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
};

export default function Page() {
  return <Home />;
}
