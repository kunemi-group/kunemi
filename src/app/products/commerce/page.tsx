import type { Metadata } from 'next';
import { productDetails } from '@/data/site-content';
import { ProductDetail } from '@/site-pages/product-detail';

export const metadata: Metadata = {
  title: { absolute: productDetails.commerce.title },
  description: productDetails.commerce.description,
  alternates: { canonical: '/products/commerce' },
  openGraph: {
    type: 'website',
    siteName: 'Kunemi',
    title: productDetails.commerce.title,
    description: productDetails.commerce.description,
    url: '/products/commerce',
  },
  twitter: {
    card: 'summary_large_image',
    title: productDetails.commerce.title,
    description: productDetails.commerce.description,
  },
};

export default function Page() {
  return <ProductDetail id="commerce" />;
}
