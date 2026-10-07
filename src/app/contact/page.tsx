import type { Metadata } from 'next';
import { Contact } from '@/site-pages/contact';

export const metadata: Metadata = {
  title: 'Contact Kunemi Technology',
  description: 'Contact Kunemi Technology Limited. No contact channel is published here yet.',
  alternates: { canonical: '/contact' },
  openGraph: {
    type: 'website',
    siteName: 'Kunemi',
    title: 'Contact Kunemi Technology | Kunemi',
    description: 'Contact Kunemi Technology Limited. No contact channel is published here yet.',
    url: '/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Kunemi Technology | Kunemi',
    description: 'Contact Kunemi Technology Limited. No contact channel is published here yet.',
  },
};

export default function Page() {
  return <Contact />;
}
