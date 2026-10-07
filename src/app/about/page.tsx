import type { Metadata } from 'next';
import { About } from '@/site-pages/about';

export const metadata: Metadata = {
  title: 'About Kunemi Technology',
  description: 'Kunemi Technology Limited is a product-led technology company building intelligent software and digital infrastructure for modern businesses.',
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'website',
    siteName: 'Kunemi',
    title: 'About Kunemi Technology | Kunemi',
    description: 'Kunemi Technology Limited is a product-led technology company building intelligent software and digital infrastructure for modern businesses.',
    url: '/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Kunemi Technology | Kunemi',
    description: 'Kunemi Technology Limited is a product-led technology company building intelligent software and digital infrastructure for modern businesses.',
  },
};

export default function Page() {
  return <About />;
}
