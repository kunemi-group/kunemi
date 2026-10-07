import type { Metadata } from 'next';
import { productDetails } from '@/data/site-content';
import { ProductDetail } from '@/site-pages/product-detail';

export const metadata: Metadata = {
  title: { absolute: productDetails.kumove.title },
  description: productDetails.kumove.description,
  alternates: { canonical: '/products/kumove' },
  openGraph: {
    type: 'website',
    siteName: 'Kunemi',
    title: productDetails.kumove.title,
    description: productDetails.kumove.description,
    url: '/products/kumove',
  },
  twitter: {
    card: 'summary_large_image',
    title: productDetails.kumove.title,
    description: productDetails.kumove.description,
  },
};

export default function Page() {
  return <ProductDetail id="kumove" />;
}
