import type { Metadata } from 'next';
import { productDetails } from '@/data/site-content';
import { ProductDetail } from '@/site-pages/product-detail';

export const metadata: Metadata = {
  title: { absolute: productDetails.dotrix.title },
  description: productDetails.dotrix.description,
  alternates: { canonical: '/products/dotrix' },
  openGraph: {
    type: 'website',
    siteName: 'Kunemi',
    title: productDetails.dotrix.title,
    description: productDetails.dotrix.description,
    url: '/products/dotrix',
  },
  twitter: {
    card: 'summary_large_image',
    title: productDetails.dotrix.title,
    description: productDetails.dotrix.description,
  },
};

export default function Page() {
  return <ProductDetail id="dotrix" />;
}
